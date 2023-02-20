package CommonModel;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import jcifs.smb.NtlmPasswordAuthentication;
import jcifs.smb.SmbFile;
import jcifs.smb.SmbFileOutputStream;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;











public class ExcelNoDelUploadHandler_Bckup
{
  private String PrcsID;
  private String FormName;
  private String names;
  private String vrsnno;
  private String usrpwd;
  private String domain;
  private String DBSrc;
  private boolean isMultipartfn;
  private ServletResponse response;
  
  public ExcelNoDelUploadHandler_Bckup() {}
  
  public void PrcsID(String PrcsID)
  {
    this.PrcsID = PrcsID;
  }
  
  public void FormName(String FormName) {
    this.FormName = FormName;
  }
  
  public void names(String names) {
    this.names = names;
  }
  
  public void vrsnno(String vrsnno) {
    this.vrsnno = vrsnno;
  }
  
  public void usrpwd(String usrpwd) {
    this.usrpwd = usrpwd;
  }
  
  public void domain(String domain) {
    this.domain = domain;
  }
  
  public void DBSrc(String DBSrc) {
    this.DBSrc = DBSrc;
  }
  
  public void isMultipartfn(boolean isMultipartfn) {
    this.isMultipartfn = isMultipartfn;
  }
  
  public String ExcelNoDelUploadHandler(HttpServletRequest request, HttpServletResponse response) throws Exception
  {
    long serialVersionUID = 1L;
    

    boolean isMultipart = ServletFileUpload.isMultipartContent(request);
    

    String root = request.getParameter("domain1");
    

    String PrcsID = request.getParameter("PrcsID");
    String FormName = request.getParameter("FormName");
    String AttchNames = request.getParameter("names");
    String Versions = request.getParameter("vrsnno");
    String Usrpwd = request.getParameter("usrpwd1");
    
    String[] AryAttchNames = AttchNames.split(",");
    String[] AryVersion = Versions.split(",");
    
    String AttchName = "";
    String Version = "";
    String AttchLstDirname = "";
    String OPAttchData = "";
    
    String savepath = "";
    BufferedImage image = null;
    int width = 963;
    int height = 640;
    
    if (isMultipart)
    {
      FileItemFactory factory = new DiskFileItemFactory();
      
      request.getQueryString();
      
      ServletFileUpload upload = new ServletFileUpload(factory);
      
      List<FileItem> multiparts = upload.parseRequest(request);
      
      int i = 0;
      

      for (FileItem item : multiparts) {
        if (!item.isFormField()) {
          AttchName = AryAttchNames[i];
          Version = AryVersion[i];
          String fileName = item.getName();
          
          File file1 = ((DiskFileItem)item).getStoreLocation();
          
          ((DiskFileItem)item).write(file1);
          
          String uppath = file1.getAbsolutePath();
          String userPassword = Usrpwd;
          NtlmPasswordAuthentication auth1 = new NtlmPasswordAuthentication(
            userPassword);
          SmbFile sFile2 = new SmbFile("smb:" + root + "/" + 
            "ExcelUpload" + "/" + Version, auth1);
          
          sFile2.exists();
          


          if (!sFile2.exists()) {
            sFile2.mkdirs();
          }
          
          SmbFile sFile3 = new SmbFile(sFile2 + "/" + fileName, auth1);
          
          SmbFileOutputStream smbFileOutputStream = new SmbFileOutputStream(
            sFile3);
          FileInputStream fileInputStream = new FileInputStream(
            new File(uppath));
          
          byte[] buf = new byte[16777216];
          int len;
          while ((len = fileInputStream.read(buf)) > 0) 
          { 
        	 
            smbFileOutputStream.write(buf, 0, len);
          }
          
          File uploadedFile = new File(sFile2 + "/" + fileName);
          savepath = uploadedFile.toString();
          String rootsplit = root.split("//")[(root.split("//").length - 1)];
          String[] AttchPath = savepath.split(rootsplit);
          
          OPAttchData = OPAttchData + AttchPath[1] + "|";
          i++;
          smbFileOutputStream.close();
          fileInputStream.close();
          
          ResultSet resultSet = null;
			PreparedStatement preparedStatement = null;
			String OutRst;
			String param3=Version;
			String param4="";
			String param5="";
          
          Connection con = DBConnection.getConnection(DBSrc);
			preparedStatement = con.prepareStatement("{ call " + FormName+ "(?,?,?,?,?) }");
			
		
			preparedStatement.setString(1, PrcsID);
			preparedStatement.setString(2, AttchPath[1]);
			preparedStatement.setString(3, param3);
			preparedStatement.setString(4, param4);
			preparedStatement.setString(5, param5);

			
			resultSet = preparedStatement.executeQuery();

			String Strval = null;
		
			
			while (resultSet.next()) {
			   Strval = resultSet.getString("Result"); 
			}
 
			//sFile3.delete();
        }
      }
    }
    


    return OPAttchData;
  }
  
  public static void removeDirectory(File dir)
  {
    if (dir.isDirectory()) {
      File[] files = dir.listFiles();
      if ((files != null) && (files.length > 0)) {
        for (File aFile : files) {
          removeDirectory(aFile);
        }
      }
      dir.delete();
    } else {
      dir.delete();
    }
  }
  
  public static void cleanDirectory(File dir) {
    if (dir.isDirectory()) {
      File[] files = dir.listFiles();
      if ((files != null) && (files.length > 0)) {
        for (File aFile : files) {
          removeDirectory(aFile);
        }
      }
    }
  }
}