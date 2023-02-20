 
 package CommonModel;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.FileAttribute;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.imageio.ImageIO;

import sun.misc.BASE64Decoder;









public class UI_GetMainTxtData
{
  private String param1;
  private String param2;
  private String param3;
  private String param4;
  private String param5;
  private String DBSrc;
  private String spname;
  
  public UI_GetMainTxtData() {}
  
  public void param1(String param1)
  {
    this.param1 = param1;
  }
  
  public void param2(String param2) {
    this.param2 = param2;
  }
  
  public void param3(String param3) {
    this.param3 = param3;
  }
  
  public void param4(String param4) {
    this.param4 = param4;
  }
  
  public void param5(String param5) {
    this.param5 = param5;
  }
  
  public void DBSrc(String DBSrc) {
    this.DBSrc = DBSrc;
  }
  
  public void spname(String spname) {
    this.spname = spname;
  }
  


  public String UI_GetMainTxtData()
    throws SQLException, IOException
  {
    Connection con = DBConnection.getConnection(DBSrc);
    

    
String newString = "";
    
    String s = param1;
  String reg = "<img src=\"data:image([^\"]+)";
  String reg2 = "<img src=\"http([^\"]+)";
   //String reg2 = "<img[^>]*src=[\\\"']([^\\\"^']*)";
    //String reg = "<img src=\"data:image";
    Pattern p = Pattern.compile(reg);
    Pattern p2 = Pattern.compile(reg2);
    Matcher m = p.matcher(s);
    String src = "";
    Matcher matcher = p2.matcher(param1);
    int hit=0;
    while (matcher.find()) {
      matcher.start();
      matcher.end();
      matcher.group();
      hit++;
    }
    int k = hit+1;
    while (m.find())
    {
      src = m.group();
      int startIndex = src.indexOf("src=") + 23;
      


      int St = m.start();
      St += 23;
      System.out.println("startIndex" + St);
      System.out.println("endimgindex" + m.end());
      

      String srcTag = s.substring(m.start() + 32, m.end());
     // System.out.println("The exact image string is " + s.substring(m.start(), m.end()));
     // System.out.println(srcTag);
      

      BufferedImage resimage = null;
      String imgurl = "";
      String DocNo = "DOC1";
      
      BufferedImage image = null;
      

      BASE64Decoder decoder = new BASE64Decoder();
      byte[] imageByte = decoder.decodeBuffer(srcTag);
      ByteArrayInputStream bis = new ByteArrayInputStream(imageByte);
      image = ImageIO.read(bis);
      


      if (image == null) {
        System.out.print("Buffered Image is null");

      }
      else
      {
        Path sFile2path = Paths.get("//14.192.17.66/LSW_Attachments/Attachments/" + param2 + "/" + param4 + "/WordEditor/WordImg/" + DocNo + k + "/", new String[0]);
        try {
          Files.createDirectories(sFile2path, new FileAttribute[0]);
        }
        catch (IOException e) {
          e.printStackTrace();
        }
        String uploadFile = "//14.192.17.66/LSW_Attachments/Attachments/" + param2 + "/" + param4 + "/WordEditor/WordImg/" + DocNo + k + "/WordImg" + k + ".png";
        
        File f = new File(uploadFile);
        String Filesize = "30";
        imgurl = "/Attachments/" + param2 + "/" + param4 + "/WordEditor/WordImg/" + DocNo + k + "/WordImg" + k + ".png";
        imgurl = "http://14.192.17.66:8070/LSW_Attachments" + imgurl;
        imgurl = imgurl.replace("/", "\\");
        try
        {
          ImageIO.write(image, "png", f);

        }
        catch (IOException e)
        {
          e.printStackTrace();
        }
      }
      


     // System.out.print("imgurl " + imgurl);
      

      int End = m.end();
      
      param1 = param1.replace(s.substring(m.start() + 10, m.end()), imgurl);
      k++;
    }
    


    String str = null;
    ResultSet resultSet = null;
    PreparedStatement preparedStatement = null;
    byte[] bytes1 = param1.getBytes();
    preparedStatement = con
      .prepareStatement("{ call " + spname + "(?,?,?,?) }");
    preparedStatement.setBytes(1, bytes1);
    preparedStatement.setString(2, param2);
    preparedStatement.setString(3, param3);
    preparedStatement.setString(4, param4);
    

    resultSet = preparedStatement.executeQuery();
    
    while (resultSet.next())
    {
      str = resultSet.getString(1);
    }
    

    return str;
  }
}
 