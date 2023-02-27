package Controls;

import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URL;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import CommonModel.DBConnection;
import jcifs.smb.NtlmPasswordAuthentication;

import java.io.File;
import java.io.FileInputStream;

import okhttp3.MultipartBody;
import okhttp3.ResponseBody;
import okio.Buffer;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.Okio;

public class InterfaceFSAAPI {
	
/*	public static void main(String a[]) throws Exception
	{
//		InterfaceFSAService("https://appsuat.tvscredit.com/tvs/vs/enquiryservice.do", "name=getenquirystatus&key=5dfd585c8f4264333a6b7a3df9afc3fd324bd1c5042533abaf865454caa8bb6e&data={\"applicanttype\":\"BORROWER\",\"enquirynumber\":\"3000CD007\",\"applicantid\":\"1\"}", "", "");
		InterfaceFSAUpload("https://demo.perfios.com/KuberaVault/insights/api/financial/upload/K7NA1645622943176/2022", "C:\\Users\\ETDU077\\Downloads\\docs\\ABS AY 2018-19.pdf", "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW", "");
	}
*/
	public static String InterfaceFSAService(String URL,String XML,String UNIQID,String HeaderAction,String hittype,Map<String, String> map) throws Exception
	{
		String resString=null;
		String resMessage=null;
		
		System.out.println(" Interface Start "+ UNIQID);
		try
		{
			okhttp3.OkHttpClient client = new okhttp3.OkHttpClient.Builder().connectTimeout(10, TimeUnit.SECONDS)
					.writeTimeout(180, TimeUnit.SECONDS).readTimeout(180, TimeUnit.SECONDS).build(); 

			okhttp3.MediaType mediaType = okhttp3.MediaType.parse("application/x-www-form-urlencoded");
			okhttp3.RequestBody body = okhttp3.RequestBody.create(mediaType, XML);
			System.out.println("XML "+ XML);
			okhttp3.Request request = new okhttp3.Request.Builder()
				 	  .url(URL)
				 	 .addHeader("cache-control", "no-cache")
					  .addHeader("content-type", "application/x-www-form-urlencoded")
				 	.post(body)
				 	  .build();

			okhttp3.Response resp = client.newCall(request).execute();
			
			
			System.out.println("InterfaceRestXML Response Code "+ resp.code());

			if(resp.code()==200||resp.code()==202)
			{
				resString="Success";
				if(!hittype.equals("Retrieve"))
				{
					resMessage=resp.body().string();
				}
				else
				{
					ResponseBody resp1 = resp.body();
					resMessage = pushtoDMSFSAHandlr(map,resp1);
					
					
				}
			}
			else
			{
				resString="Error";
				resMessage=resp.body().string();
			}
			resp.body().close();
			
			System.out.println(" Interface End "+ UNIQID);	
		}
		catch(Exception ei)
		{
			ei.printStackTrace();
			resString="Exception";
			resMessage=ei.toString();
		}
		return resString+"~"+resMessage;
	}
		
	public static String InterfaceFSAUpload(String APiURL,String Path,String contenttype,String vendorID) throws FileNotFoundException,Exception 
	{

		String Status=null;
		String Message=null;
		File fileName=null;
		okhttp3.Response response=null;
		okhttp3.RequestBody requestBody =null;
		okhttp3.Request request=null;
		try
		{
		
//				byte [] bd = URLtoFile(Path);
			fileName = new File(Path);
				okhttp3.OkHttpClient client = new okhttp3.OkHttpClient();
				
				okhttp3.MediaType mediaType = okhttp3.MediaType.parse(contenttype);

				requestBody = new MultipartBody.Builder().
				setType(MultipartBody.FORM)
				.addFormDataPart("file", "image.jpeg/abc.pdf/ima.png/imag.jpg/test.pdf",
						okhttp3.RequestBody.create(mediaType, fileName)).addFormDataPart("vendorId",vendorID).build();
		            
		            request = new okhttp3.Request.Builder()
					 .url(APiURL)
					 .post(requestBody)
//					 .addHeader("vendorId", vendorID)
					 .build();
				response = client.newCall(request).execute();

		System.out.println("InterfaceKYCCall Response Code "+ response.code());

	      if(response.code()==200||response.code()==202)
	      {
	    	  Status="Success";
	    	  Message= response.body().string();
	      }
	      else
	      {
	    	  Status="Error";
	    	  Message= response.body().string();
	      }
			System.out.println("Message Details "+Message);	
			}catch (Exception e)
			{
		    	e.printStackTrace();
		        Status = e.toString();
		        Message = "Exception";
		        System.out.println("Response: " + Status);
		        return Status+"~"+Message;
			}

			return Status+"~"+Message;
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
	public static String pushtoDMSFSAHandlr(Map<String, String> request, ResponseBody resp1) throws Exception
	{
		String docName = request.get("DocName");
		String cusid = request.get("CusID");
		String requestBody = "";
		String base64PDF = "";
		String respFr = "";
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt1 = null;
		PreparedStatement procstmt = null;
		ResultSet results = null;
		
		
		String opAttchData = "";
		String attchName = request.get("attachname");
		String attchDescrptn = request.get("attachdescrptn");
		String prcsid = request.get("prcsid");
		String formName = request.get("formName");
		String version = request.get("version");
		String fileName = request.get("fileName");
		String filesize = request.get("filesize");
		
		
		byte[] hash = new byte[20];
		String checksum = "";
		String resMsg = "";
		String jsonresult="";
		String docToken= "";
		try {
			
			
			//byte[] docContent = request.get("filebytes").getBytes(StandardCharsets.UTF_8);
			
			Properties prop = new Properties();
			
			String username = "";
			String password = "";
			String dmsType = "";
			String chkSharingPasswrd = "";
			String OPAttchData = "";
			URL songPath = CommonModel.FileUploadHandler.class.getResource("");
			String[] pathArr = songPath.toString().split("file:/|/apache");
			FileInputStream fis = null;
			String Path = pathArr[1];
			fis = new FileInputStream(String.valueOf(Path) +"/wflow/app_datasource.properties");
			//fis = new FileInputStream(
				//"D:/Office Project/Chola/Build/Build Related/ThemeproLO_Works/Product/wflow/app_datasource.properties");
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
					Path sFile2path = Paths.get(username + "/" + "Attachments" + "/" + prcsid + "/"
							+ formName + "/" + attchName + "/" + version + "/", new String[0]);
					java.nio.file.Files.createDirectories(sFile2path);

					File file = new File(sFile2path + "/" + fileName);
					//String filePath="D:\\reports\\file.xlsx";
					//File file= new File(filePath);
					BufferedSource source = resp1.source();
					BufferedSink sink = Okio.buffer(Okio.sink(file));
					Buffer sinkBuffer = sink.buffer();
					long totalBytesRead = 0;
					int bufferSize = 8 * 1024;
					for (long bytesRead; (bytesRead = source.read(sinkBuffer, bufferSize)) != -1; ) 
				      {
				          sink.emit();
				          totalBytesRead += bytesRead;
				      }
					sink.flush();
					sink.close();
					source.close();
					System.out.println("Total byte read:"+totalBytesRead+"\n");
					System.out.println("Done\n");
					
					//final FileOutputStream FileOutputStream = new FileOutputStream(sFile3);
					//FileOutputStream.write(docContent);
					OPAttchData = String.valueOf(OPAttchData) + attchName + "~" + attchDescrptn + "~"
							+ "\\Attachments" + "\\" + prcsid + "\\" + formName + "\\" + attchName + "\\"
							+ version + "\\" + fileName + "~" + filesize + "~" + version + "|";
					//FileOutputStream.close();
				}
			}
			
			
			
			
			procstmt = con.prepareStatement("{ call sam_sAttachmentDMS1(?,?,?) }");

			procstmt.setString(1, OPAttchData);
			procstmt.setString(2, cusid);
			procstmt.setString(3, docName);

			results = procstmt.executeQuery();

			while (results.next()) {
				docToken = results.getString("DOCTOKEN");
				System.out.println("Data Saved Suceessfully");
			}

			Connections.Call(procstmt, results, con, "Commit");
			

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			Connections.Call(procstmt, results, con, "Close");
		}
		return docToken;
	}
}
