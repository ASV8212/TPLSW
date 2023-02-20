package Integration;

import CommonModel.DBConnection;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
//import java.sql.ResultSetMetaData;
import java.sql.SQLException;
//import java.util.ArrayList;
import java.net.URL;
import java.util.Base64;
import java.util.Random;
import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;
import java.io.FileOutputStream;

import Controls.InterfaceKarzaAPI;
import jcifs.smb.NtlmPasswordAuthentication;
import jcifs.smb.SmbFile;
import jcifs.smb.SmbFileOutputStream;


public class KarzaAPI {
	
	
//public static void main(String ap[]) throws Exception
//{
//	try
//	{
////		new KarzaAPI().KarzaAPIService("LSW_SKARZAAPICREATE", "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"file\"; filename=\"http://20.198.80.211:6065/TPLSW/DMSVIEW?PrcsID=92063_HomeEqutity_process&DMSID=4f5e86c943e34e46b69251d137423a51\"\r\nContent-Type: application/xml\r\n\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--", "1243r354", "AADHAAR XML VERIFY", "Testing"+new Random().nextInt(100000));		
//		new KarzaAPI().KarzaAPIService("LSW_SKARZAAPICREATE", "/TPLSW/DMSVIEW?PrcsID=92543_HomeEqutity_process&DMSID=ba57def841594ddfb3464e4a0509b256", "54233","", "AADHAAR XML VERIFY", "Testing"+new Random().nextInt(100000));
////	new KarzaAPI().KarzaAPIService("LSW_SKARZAAPICREATE", "C:\\Manoj Kumar\\TVS\\Sample.pdf", "rer34r3521", "ITR-V OCR", "Testing"+new Random().nextInt(100000)); 
////	String result=InterfaceKarzaAPI.InterfaceKYCCall("https://testapi.karza.in/v2/pan","{\"pan\":\"DWBPM6886G\",\"consent\":\"Y\"}","application/json","2f87f9gBhO1NX3Ev");
//	
////	System.out.println("Output "+result.split("~")[1]);
//	
//	}catch(Exception excd)
//	{
//	excd.printStackTrace();
//	}
//}
//	@SuppressWarnings("unused")
//	public static void main(String[] args) {
//	    File file = new File("C:\\Manoj Kumar\\TVS\\test.pdf");
//
//	    try ( FileOutputStream fos = new FileOutputStream(file); ) {
//	    	byte [] bs= new byte[1024];
//			bs=Files.readAllBytes(Paths.get("C:\\Manoj Kumar\\TVS\\BASE64.txt"));
////			byte [] encoding= new byte[1024];
////			encoding= Base64.getEncoder().encode(bs);
//			String Encoded=new String(bs);
//	      // To be short I use a corrupted PDF string, so make sure to use a valid one if you want to preview the PDF file
////	      b64 = "JVBERi0xLjUKJYCBgoMKMSAwIG9iago8PC9GaWx0ZXIvRmxhdGVEZWNvZGUvRmlyc3QgMTQxL04gMjAvTGVuZ3==";
////	      byte[] decoder = Base64.getDecoder().decode(Encoded);
//
////	      fos.write(decoder);
//	      System.out.println("PDF File Saved");
//	    } catch (Exception e) {
//	      e.printStackTrace();
//	    }
//	  }
		
//	@SuppressWarnings("unused")
	public String KarzaAPIService(String spname1,String Input1,String Input2,String Input3,String APIType,String processId) throws Exception {

    String JsonData = "";
    String contenttype = "";
    String karzakey = "";
    String ResMsg = "";
    String APiURL = "";
    String Encoded="";
    Connection con=null;
    PreparedStatement pr=null;
    PreparedStatement pr1=null;
    PreparedStatement proc_stmt=null;
    ResultSet results =null;
    ResultSet results1 =null;
    try {
    	
		if(con==null)
		{
			con=DBConnection.getConnection(null);
		}
      
		if(APIType.equals("ITR-V OCR") || APIType.equals("Form-16 OCR"))
		{
			byte [] bs= new byte[1024];
//			bs=Files.readAllBytes(Paths.get(Input1));
			bs=InterfaceKarzaAPI.URLtoFile(Input1);
			byte [] encoding= new byte[1024];
			encoding= Base64.getEncoder().encode(bs);
			Encoded=new String(encoding);
			System.out.println("Encoded value "+ Encoded);
		} 
  
      pr=con.prepareStatement("{ call " + spname1+ "(?,?,?,?,?) }");
      pr.setString(1, Input1);
      pr.setString(2, Input2);
      pr.setString(3, Encoded);
      pr.setString(4, APIType);
      pr.setString(5, processId);
      results = pr.executeQuery();
//      ResultSetMetaData rsmd = results.getMetaData();
//      int colCount = rsmd.getColumnCount();

      while (results.next()) {
        JsonData = results.getString(1);
        contenttype = results.getString(2);
        karzakey = results.getString(3);
        APiURL = results.getString(4);
        processId = results.getString(5);
      } 

      if(APIType.equals("KYC OCR")||APIType.equals("FACE MATCHING")||APIType.equals("FACE LIVENESS")
    		  || APIType.equals("AADHAAR XML VERIFY") || APIType.equals("AADHAAR ZIP VERIFY"))
    	  
      ResMsg=InterfaceKarzaAPI.InterfaceMultipartCall(APiURL,JsonData,contenttype,karzakey,APIType,Input3);
      else
      ResMsg=InterfaceKarzaAPI.InterfaceKYCCall(APiURL,JsonData,contenttype,karzakey);
      
      System.out.println("Response: " + ResMsg);
      
	  	String Status=null;
	  	String Message=null;
	  	
	  	String [] resultSplit=ResMsg.split("!@#");
	  	
	  	Status=resultSplit[0];
	  	
	  	Message=resultSplit[1];
	  		  	
	  	pr1=con.prepareStatement("{ call " + spname1+"_UPD" + "(?,?,?,?,?) }");
	  	
		pr1.setString(1, Status);
		pr1.setString(2, Message);
		pr1.setString(3, "");
		pr1.setString(4, APIType);
		pr1.setString(5, processId);
		
		pr1.executeQuery();  
		
		if(APIType.equals("MOBILE STATUS")){
			
			String output=new KarzaAPI().KarzaAPIService(spname1,Input1,Input2,"","MOBILE DETAILS", processId);
			
			FileInputStream fis = null;
			String username = "";
			String password = "";
			String dmsType = "";
			String chkSharingPasswrd = "";
			String OPAttchData="";
			String docToken="";
			Properties prop = new Properties();
			
			
			URL songPath = CommonModel.FileUploadHandler.class.getResource("");
			String[] pathArr = songPath.toString().split("file:/|/apache");
			
			String Path = pathArr[1];
			System.out.println("Main Path"+Path);
			//fis = new FileInputStream("G:/ThemeproLO_Works/Product/wflow/app_datasource.properties");
			fis = new FileInputStream(String.valueOf(Path)+"/wflow/app_datasource.properties");
			
			if (fis != null) {
				prop.load(fis);
				fis.close();
			}
			//String uppath = file1.getAbsolutePath();
			
			dmsType = prop.getProperty("DMSTYPE");
		    username = prop.getProperty("FEPUPLDUsername");
		    password = prop.getProperty("FEPUPLDPassword");
		    
			String userPassword = password;
			
			System.out.println("File Path UserName - "+userPassword);
			System.out.println("File Path UserName - "+dmsType);
			
			if (dmsType.equals("SHARING")) {
				
			NtlmPasswordAuthentication auth1 = new NtlmPasswordAuthentication(userPassword);
			if (chkSharingPasswrd.equals("Yes")) {
				
				String Result=output.split("!@#")[1];
				String Seq="Doc"+new Random().nextInt(100000) ;
				
				//String path=username+ "/" + "Attachments" + "/" + processId+"/"+Input2+"/"+Seq+"/" + "Mobile"+ "/";
				
				SmbFile sFile2 = new SmbFile("smb:" + username + "/" + "Attachments" + "/" + processId + "/"
						+ Input2 + "/" + Input2 + "/" + Seq, auth1);

				sFile2.exists();

				if (!sFile2.exists()) {
					sFile2.mkdirs();
				}
				SmbFile sFile3 = new SmbFile(sFile2 + "/" + Input2, auth1);

				SmbFileOutputStream smbFileOutputStream = new SmbFileOutputStream(sFile3);

				 OPAttchData = String.valueOf(OPAttchData) + Input2 + "~" + "MobileDetails" + "~"
						+ "\\Attachments" + "\\" + processId + "\\" + Input2 + "\\" + Input2 + "\\"
						+ Seq + "\\" + Input2 + "~" + "30" + "~" + Seq + "|";
				 
				 System.out.println("File Path - "+OPAttchData);
				 
				 proc_stmt = con.prepareStatement("{ call sam_sAttachmentDMS1(?,?,?) }");
                 
                 proc_stmt.setString(1, OPAttchData);
         		proc_stmt.setString(2, Input2);
         		proc_stmt.setString(3, Input2+".txt");
         		
         		proc_stmt.executeQuery(); 
         		
         		results1=proc_stmt.executeQuery(); 
         		
         		
         		while (results1.next()) {
         			docToken=results1.getString("DOCTOKEN");
                 }  
         		
         		System.out.println("File Path - "+docToken);
			 
			}
			}
			
		/*		byte[]outdata=Result.getBytes();
				File file= new File(path);
				if (!file.exists()) {
		            System.out.print("No Folder");
		            file.mkdir();
		            System.out.print("Folder created");
		        }
					  FileOutputStream fout=new FileOutputStream(path+Input2+".txt");  
					  fout.write(outdata);
					  fout.close();
					 // String  OPAttchData=""; 
					  
					//String  OPAttchData ="/" + "Attachments" + "/" + processId +"/"+Seq +"/" + "Mobile"+ "/"+Input2+".txt";
String OPAttchData = " " + "~" + " " + "~"+ "\\Attachments" + "\\" + processId + "\\" + Input2 + "\\" + Seq + "\\" +"Mobile"+ "/" + Input2+".txt" + "~" + "30" + "~" + "txt" + "|";
				*/	  
					   
		  	ResMsg=output+"!@#"+docToken;
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
    	DBConnection.closeConnection(null,proc_stmt,results1);
    	DBConnection.closeConnection(null,pr1,null);
    	DBConnection.closeConnection(con,pr,results);
    }
    return ResMsg;
	}
}

