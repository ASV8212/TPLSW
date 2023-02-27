package Integration;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.FileAttribute;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
//import java.nio.file.Files;
//import java.nio.file.Paths;
//import java.util.Random;
import java.util.Base64;
import java.util.Properties;
import java.util.Random;

import org.codehaus.jettison.json.JSONObject;

import CommonModel.DBConnection;

import Controls.GetDBData;
import Controls.InterfaceEsignlegality;

public class EsignLegality {

	public static void main(String ap[]) throws Exception
	{
		try
	{
	///new EsignLegality().EsignLegalityService("LSW_SESIGNAPICREATE", "C:\\Manoj Kumar\\TVS\\Sample.pdf", "vmrx3bc", "Create", "Testing"+new Random().nextInt(100000)); 
///	new EsignLegality().EsignLegalityService("LSW_SESIGNAPICREATE", "3gON1It", "", "Get", "Testing"+new Random().nextInt(100000));
////		System.out.println("Output "+result.split("~")[1]);
//		
		}catch(Exception excd)
		{
	excd.printStackTrace();
		}
}

	public static byte[] URLtoFile(String DOCURL) throws Exception
	{
		  byte[] DocContent={};
		try
		{
		      URI uri = new URI(DOCURL);
				URL url1 = uri.toURL();

				  ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

				    try {
				        byte[] chunk = new byte[4096];
				        int bytesRead;
				        InputStream stream = url1.openStream();

				        while ((bytesRead = stream.read(chunk)) > 0) {
				            outputStream.write(chunk, 0, bytesRead);
				        }

				    } catch (IOException e) {
				        e.printStackTrace();
				        return null;
				    }

				    DocContent =  outputStream.toByteArray();
				    outputStream.close();
				    
		}catch(Exception exd)
		{
			exd.printStackTrace();
		}
		finally
		{
			
		}
		return DocContent;
	}	
	
	public String EsignLegalityService(String spname1,String Input1,String Input2,String ServiceType,String processId) throws Exception {
    String JsonData = "";
    String contenttype = "";
    String Authtoken = "";
    String ResMsg = "";
    String APiURL = "";
    String Encoded="";
    Connection con=null;
    Connection con1=null;
    Connection con2=null;
    PreparedStatement pr=null;
    PreparedStatement pr1=null;
    PreparedStatement procstmt=null;
    ResultSet results =null;
    ResultSet results1 =null;
    ResultSet results2 =null;
    String Locations="";
    String prcsid = processId;
    try {
    	con=DBConnection.getConnection(null);
    	con1=DBConnection.getConnection(null);
    	con2=DBConnection.getConnection(null);
      
		if(ServiceType.equals("Create"))
		{
			byte [] bs= new byte[1024];
			bs=Files.readAllBytes(Paths.get(Input1));
			//bs=URLtoFile(Input1);
			byte [] encoding= new byte[1024];
			encoding= Base64.getEncoder().encode(bs);
			Encoded=new String(encoding);
			//System.out.println("Encoded value "+ Encoded);
		} 
  
      pr=con.prepareStatement("{ call " + spname1+ "(?,?,?,?,?) }");
      pr.setString(1, Input1);
      pr.setString(2, Input2);
      pr.setString(3, Encoded);
      pr.setString(4, ServiceType);
      pr.setString(5, processId);
      results = pr.executeQuery();
      ResultSetMetaData rsmd = results.getMetaData();
      int colCount = rsmd.getColumnCount();

      while (results.next()) {
    	APiURL = results.getString(1);
        JsonData = results.getString(2);
        contenttype = results.getString(3);
        Authtoken = results.getString(4);
        processId = results.getString(5);
        Locations= results.getString(6);
      } 
      System.out.println("colCount: " + colCount);
      if(colCount>=1){
    	  
	      if(ServiceType.equals("Create"))
	      ResMsg=InterfaceEsignlegality.InterfacePostCall(APiURL, JsonData, contenttype, Authtoken);
	      else
	      ResMsg=InterfaceEsignlegality.InterfaceGetCall(APiURL, contenttype, Authtoken);
      
	      //System.out.println("Response: " + ResMsg);
	      
		  	String Status=null;
		  	String Message=null;
		  	
		  	String [] resultSplit=ResMsg.split("~");
		  	
		  	Status=resultSplit[0];
		  	
		  	Message=resultSplit[1];
		  	System.out.println("call sp");
		  	System.out.println(spname1+"_UPD");
		  	pr1=con1.prepareStatement("{ call " + spname1+"_UPD" + "(?,?,?,?,?) }");
		  	
			pr1.setString(1, Status);
			pr1.setString(2, Message);
			pr1.setString(3, "");
			pr1.setString(4, ServiceType);
			pr1.setString(5, processId);
			
			results1 = pr1.executeQuery();  
			System.out.println("end sp");
			if(Status.equals("Success") && ServiceType.equals("Get") ){
				
				JSONObject JSOB=new JSONObject(Message);
				
				
				/*
				 * for(int i =
				 * 0;i<JSOB.getJSONObject("data").getJSONArray("requests").length();i++) {
				 * if(JSOB.getJSONObject("data").getJSONArray("requests").getJSONObject(i).
				 * getString("signed").equals("false")) { return ResMsg; } }
				 */
				Properties props=new Properties();
				FileInputStream fis1=null;
			    String propFileName = "APIProp.properties";
				String fileName = "";
				fileName = System.getProperty("catalina.base");
				fileName = String.valueOf(fileName) + "/conf/" + propFileName;
				String path=fileName;
				fis1 = new FileInputStream(path);
			    props.load(fis1);
			    String Sharingpath = props.getProperty("FEPUPLDUsername");
			    fis1.close();
			    props.clear();
			    String version = "";
			    String docToken = "";
			    ArrayList<String> Data1 = new ArrayList<String>();
				Data1 = GetDBData.Call("DOCVRNO", "", "", "", "", "Sam_sGetCOMSeqID");
				version = Data1.get(0);
				Path sFile2path = Paths.get(Sharingpath + "/" + "Attachments" + "/" + prcsid + "/Esign/Esign"+Input1+"/" + version + "/", new String[0]);
				Files.createDirectories(sFile2path, new FileAttribute[0]);
				Locations = sFile2path.toAbsolutePath().toString();
				
				String encodedBytes=JSOB.getJSONObject("data").getJSONArray("files").getString(0);
				/*BASE64Decoder decoder = new BASE64Decoder();
				byte[] decodedBytes = decoder.decodeBuffer(encodedBytes);*/
				byte[] decodedBytes = Base64.getDecoder().decode(encodedBytes);

				File file = new File(Locations+"/"+Input1+".pdf");
				FileOutputStream fop = new FileOutputStream(file);
				String opAttchData = "";
				opAttchData = String.valueOf(opAttchData) +  "Esign"+Input1 + "~Esign~"
						+ "\\Attachments" + "\\" + prcsid + "\\Esign\\" + "Esign"+Input1+ "\\"
						+ version + "\\" + "Esign"+Input1+".pdf" + "~" + "30" + "~" + version + "|";
				fop.write(decodedBytes);
				fop.flush();
				fop.close();
				
				procstmt = con2.prepareStatement("{ call sam_sAttachmentDMS1(?,?,?) }");

				procstmt.setString(1, opAttchData);
				procstmt.setString(2, prcsid);
				procstmt.setString(3, "Esign"+Input1+".pdf");

				results2 = procstmt.executeQuery();

				while (results2.next()) {
					docToken = results2.getString("DOCTOKEN");
					ResMsg = docToken;
					System.out.println("Data Saved Suceessfully");
				}
			}
      }
      
    } catch (SQLException e) {
      
      e.printStackTrace();     
      ResMsg = e.toString();
      System.out.println("Response: " + ResMsg);
      return ResMsg;
    } 
    catch (Exception e)
	{
    	e.printStackTrace();
        ResMsg = e.toString();
        System.out.println("Response: " + ResMsg);
        return ResMsg;
	}
    finally
    {
    	DBConnection.closeConnection(con1,pr1,results1);
    	DBConnection.closeConnection(con,pr,results);
    	DBConnection.closeConnection(con2,procstmt,results2);
    }
    return ResMsg;
	}
}
