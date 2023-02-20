package Controls;

import java.io.IOException;
import java.io.InputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

import java.net.URL;
import java.net.HttpURLConnection;
import java.util.zip.*;

public class InterfaceGSTAPI {
	
	public static String InterfaceGSTCall(String APiURL,String JsonData,String contenttype,String signature) 
	{

		String Status=null;
		String Message=null;
			
		try
		{
			
		  OkHttpClient client = new OkHttpClient(); 
	    
	      MediaType mediaType = MediaType.parse(contenttype);
	      RequestBody body = RequestBody.create(mediaType, JsonData);
	      
	      Request request = (new Request.Builder())        
	        .url(APiURL)
	        .post(body)
	        .addHeader("content-type", contenttype)
	        .addHeader("signature", signature)
	        .addHeader("cache-control", "no-cache")
	        .build();

	      
	      Response response = client.newCall(request).execute();
		
	      System.out.println("InterfaceGSTCall Response Code "+ response.code());

	      if(response.code()==200)
	      {
	    	  Status="Success";
	    	  Message= response.body().string();
	      }
	      else
	      {
	    	  Status="Error";
	    	  Message= response.body().string();
	      }
				
			}catch (Exception e)
			{
		    	e.printStackTrace();
		    	Status = "Exception";
		    	Message= e.toString();
		        System.out.println("Response: " + Status);
		        return Status+"~"+Message;
			}

			return Status+"~"+Message;
		}

	public static String InterfaceGSTStatus(String APIURL)
	{
		String Status=null;
		String Message=null;
		try
		{
			
		  OkHttpClient client = new OkHttpClient(); 

		  Request request = (new Request.Builder())        
	        .url(APIURL)
	        .get()
	        .addHeader("cache-control", "no-cache")
	        .build();

	      
	      Response response = client.newCall(request).execute();
		
	      System.out.println("InterfaceGSTCall Response Code "+ response.code());

	      if(response.code()==200)
	      {
	    	  Status="Success";
	    	  Message=response.body().string();
	      }
	      else
	      {
	    	  Status="Error";
	    	  Message= response.body().string();
	      }
				
			}catch (Exception e)
			{
		    	e.printStackTrace();
		        Status ="Exception";
		        Message = e.toString();
		        System.out.println("Response: " + Status);
		        return Status+"~"+Message;
			}
		
		return Status+"~"+Message;
	}
	
	public static String InterfaceGSTRetrieve (String APiURL,String perfiostransactoinid,String location) 
	{

		String Status=null;
		String Message=null;
		URL urlForGetRequest=null;
//		String location="C:\\Manoj Kumar\\TVS\\";
		try {
            urlForGetRequest = new URL(APiURL);
            HttpURLConnection conection = (HttpURLConnection) urlForGetRequest.openConnection();
            conection.setRequestMethod("GET");
            conection.setRequestProperty("perfiosTransactionId", perfiostransactoinid);
            conection.addRequestProperty("content-type", "application/json");
            int responseCode = conection.getResponseCode();
//            System.out.println(conection.getResponseMessage());
            System.out.println(responseCode);
            
            if (responseCode == HttpURLConnection.HTTP_OK) {
                            String fileName = "";
                            String disposition = conection.getHeaderField("Content-Disposition");
//                            String contentType = conection.getContentType();
//                            int contentLength = conection.getContentLength();
                            if (disposition != null) {
                                            // extracts file name from header field
                                            int index = disposition.indexOf("filename=");
                                            if (index > 0)
                                             fileName = disposition.substring(index + 10, disposition.length() - 1); 
                                            
				                            } else {
				                                            // extracts file name from URL
				                                            fileName = APiURL.substring(APiURL.lastIndexOf("/") + 1, APiURL.length());
				                            }

//                          System.out.println("Content-Type = " + contentType);
//                          System.out.println("Content-Length = " + contentLength);
                            System.out.println("Content-Disposition = " + disposition);

                            System.out.println("fileName = " + fileName);                            
                            
                            InputStream inputStream = conection.getInputStream();
                            String saveFilePath =  location + fileName;

                            FileOutputStream outputStream = new FileOutputStream(saveFilePath);

                            int bytesRead = -1;
                            byte[] buffer = new byte[4096];
                            while ((bytesRead = inputStream.read(buffer)) != -1) {
                                            outputStream.write(buffer, 0, bytesRead);
                            }
                            outputStream.close();
                            inputStream.close();

                            Status= unzipFile(saveFilePath, location+"Extract\\");

//                Status = "Success";
                Message=  saveFilePath;          
            } else {
                            System.out.println("failed");
                            Status="Error";
              	    	  Message= "Internal server error: Perfios Call Failed";
            }
	} catch (IOException e) {
	            e.printStackTrace();
	            Status ="Exception";
		        Message = e.toString();
		        System.out.println("Response: " + Status);
		        return Status+"~"+Message;
	
	} catch (Exception e) {
	            e.printStackTrace();
	            Status ="Exception";
		        Message = e.toString();
		        System.out.println("Response: " + Status);
		        return Status+"~"+Message;
	}

	return Status+"~"+Message;
	}
	
	 public static String unzipFile(String zipFilePath,String destDir) throws IOException {

		 File dir = new File(destDir);
	        // create output directory if it doesn't exist
	        if(!dir.exists()) dir.mkdirs();
	        FileInputStream fis;
	        //buffer for read and write data to file
	        byte[] buffer = new byte[1024];
	        try {
	            fis = new FileInputStream(zipFilePath);
	            ZipInputStream zis = new ZipInputStream(fis);
	            ZipEntry ze = zis.getNextEntry();
	            while(ze != null){
	                String fileName = ze.getName();
	                File newFile = new File(destDir + File.separator + fileName);
	                System.out.println("Unzipping to "+newFile.getAbsolutePath());
	                //create directories for sub directories in zip
	                new File(newFile.getParent()).mkdirs();
	                FileOutputStream fos = new FileOutputStream(newFile);
	                int len;
	                while ((len = zis.read(buffer)) > 0) {
	                fos.write(buffer, 0, len);
	                }
	                fos.close();
	                //close this ZipEntry
	                zis.closeEntry();
	                ze = zis.getNextEntry();
	            }
	            //close last ZipEntry
	            zis.closeEntry();
	            zis.close();
	            fis.close();
	        }catch(Exception ex)
	        {
	        	ex.printStackTrace();
	        	return "Failed";
	        }
	        return "Success";
	    }
}
