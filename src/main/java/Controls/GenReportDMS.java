package Controls;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.Base64;
import java.util.Properties;
import java.util.Random;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

import CommonModel.DBConnection;
import jcifs.smb.NtlmPasswordAuthentication;


public class GenReportDMS {

	public String GenReportDMSService(String RptURL,String Version,String FormName,String Format,String FileName,String PRCSID) throws Exception 
	{
		String JsonData1 = "";
	    String contenttype1 = "";
	    String Authtoken = "";
	    String Authtoken1="";
	    String ResMsg = "";
	    String APiURL1 = "";
	    PreparedStatement pr1=null;
	    PreparedStatement pr2=null;
	    Connection con1=null;
	    Connection con2=null;
	    String Encoded="";
	    String Output= "";
	    String UID = "";
	    ResultSet results =null;
	    ResultSet results1 =null;
	    
		
	    if(con1==null)
		{
	     con1=DBConnection.getConnection(null);
		}
	    byte [] bs= new byte[1024];
	   // bs=Files.readAllBytes(Paths.get("C://Alden//Chola//Sample.pdf"));
	    String Filepath =  RptURL.replaceAll("~", "&");
	 //   bs=Files.readAllBytes(Paths.get(Filepath));
		bs=URLtoFile(Filepath);
		byte [] encoding= new byte[1024];
		encoding= Base64.getEncoder().encode(bs);
		Encoded=new String(encoding);
		System.out.println("Encoded value "+ Encoded);
	    
		String username = "";
		String password = "";
		String dmsType = "";
		String ImgFormat = "";
		String ImgName = "";
		String docToken="";
		String chkSharingPasswrd = "";
		String OPAttchData = "";

		System.out.println("Select 1");
		
		//String version="Doc"+new Random().nextInt(100000);

		byte[] docContent = Base64.getDecoder().decode(Encoded);
		
		Properties prop = new Properties();
		
		
		URL songPath = CommonModel.FileUploadHandler.class.getResource("");
		String[] pathArr = songPath.toString().split("file:/|/apache");
		FileInputStream fis = null;
		String Path = pathArr[1];
		fis = new FileInputStream(String.valueOf(Path) +"/wflow/app_datasource.properties");
		//fis = new FileInputStream("D:/Office Project/Chola/Build/Build Related/ThemeproLO_Works/Product/wflow/app_datasource.properties");
		if (fis != null) {
			prop.load(fis);
			dmsType = prop.getProperty("DMSTYPE");

			fis.close();
		} else {
			throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");

		}
		
		if (dmsType.equals("SHARING")) {
			username = prop.getProperty("FEPUPLDUsername");
			password = prop.getProperty("FEPUPLDPassword");
			String userPassword = password;
			NtlmPasswordAuthentication auth1 = new NtlmPasswordAuthentication(userPassword);
			if (!chkSharingPasswrd.equals("Yes")) {
				Path sFile2path = Paths.get(username + "/" + "Attachments" + "/" + PRCSID + "/Reports/"+FormName+"/" + Version + "/", new String[0]);
				java.nio.file.Files.createDirectories(sFile2path);

				File sFile3 = new File(sFile2path + "/"+FileName+"."+Format);

				final FileOutputStream FileOutputStream = new FileOutputStream(sFile3);
				FileOutputStream.write(docContent);
				OPAttchData = String.valueOf(OPAttchData) +"Reports~"+FormName+"~"
						+ "\\Attachments" + "\\" + PRCSID + "\\"+FormName+"\\CKYCDoc\\"
						+ Version + "\\"+FileName+"."+Format+"~25~" + Version + "|";
				FileOutputStream.close();
			}
		}
		
		pr1 = con1.prepareStatement("{ call sam_sAttachmentDMS1(?,?,?) }");

		pr1.setString(1, OPAttchData);
		pr1.setString(2, Version);
		pr1.setString(3, FormName);

		results = pr1.executeQuery();

		while (results.next()) {
			docToken = results.getString("DOCTOKEN");
			
			System.out.println("Data Saved Suceessfully");
		}	

	Connections.Call(pr1, results, con1, "Commit");	
	
		return docToken;
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
	}