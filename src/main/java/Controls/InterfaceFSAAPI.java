package Controls;

import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URL;
import java.io.File;
import okhttp3.MultipartBody;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

public class InterfaceFSAAPI {
	
/*	public static void main(String a[]) throws Exception
	{
//		InterfaceFSAService("https://appsuat.tvscredit.com/tvs/vs/enquiryservice.do", "name=getenquirystatus&key=5dfd585c8f4264333a6b7a3df9afc3fd324bd1c5042533abaf865454caa8bb6e&data={\"applicanttype\":\"BORROWER\",\"enquirynumber\":\"3000CD007\",\"applicantid\":\"1\"}", "", "");
		InterfaceFSAUpload("https://demo.perfios.com/KuberaVault/insights/api/financial/upload/K7NA1645622943176/2022", "C:\\Users\\ETDU077\\Downloads\\docs\\ABS AY 2018-19.pdf", "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW", "");
	}
*/
	public static String InterfaceFSAService(String URL,String XML,String UNIQID,String HeaderAction) throws Exception
	{
		String resString=null;
		String resMessage=null;
		
		System.out.println(" Interface Start "+ UNIQID);
		try
		{
			OkHttpClient client = new OkHttpClient();

			MediaType mediaType = MediaType.parse("application/x-www-form-urlencoded");
			RequestBody body = RequestBody.create(mediaType, XML);
			System.out.println("XML "+ XML);
			Request request = new Request.Builder()
			  .url(URL)
			  .post(body)
			  .addHeader("cache-control", "no-cache")
			  .addHeader("content-type", "application/x-www-form-urlencoded")
			  .build();

			Response resp = client.newCall(request).execute();
			
			System.out.println("InterfaceRestXML Response Code "+ resp.code());

			if(resp.code()==200||resp.code()==202)
			{
				resString="Success";
				resMessage=resp.body().string();
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
}
