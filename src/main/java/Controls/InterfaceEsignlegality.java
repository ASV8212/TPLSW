package Controls;

import java.util.concurrent.TimeUnit;


public class InterfaceEsignlegality {

	public static String InterfacePostCall(String APiURL,String JsonData,String contenttype,String Authtoken) 
	{

		String Status=null;
		String Message=null;
			
		try
		{
			
			okhttp3.OkHttpClient client = new okhttp3.OkHttpClient.Builder().connectTimeout(10, TimeUnit.SECONDS)
					.writeTimeout(180, TimeUnit.SECONDS).readTimeout(180, TimeUnit.SECONDS).build(); 
	    
			okhttp3.MediaType mediaType = okhttp3.MediaType.parse(contenttype);
			okhttp3.RequestBody body = okhttp3.RequestBody.create(mediaType, JsonData);
			okhttp3.Request request = new okhttp3.Request.Builder()
				 	  .url(APiURL)
				 	 .addHeader("x-auth-token", Authtoken)
					  .addHeader("content-type", contenttype)
				 	.post(body)
				 	  .build();

			okhttp3.Response response = client.newCall(request).execute();

		
	      System.out.println("InterfaceKYCCall Response Code "+ response.code());

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
		        Status = e.toString();
		        Message = "Exception";
		        System.out.println("Response: " + Status);
		        return Status+"~"+Message;
			}

			return Status+"~"+Message;
		}

	public static String InterfaceGetCall(String APiURL,String contenttype,String Authtoken) 
	{

		String Status=null;
		String Message=null;
			
		try
		{
			okhttp3.OkHttpClient client = new okhttp3.OkHttpClient.Builder().connectTimeout(10, TimeUnit.SECONDS)
					.writeTimeout(180, TimeUnit.SECONDS).readTimeout(180, TimeUnit.SECONDS).build(); 
		  
			okhttp3.Request request = new okhttp3.Request.Builder()
				 	  .url(APiURL)
				 	 .addHeader("x-auth-token", Authtoken)
					  .addHeader("content-type", contenttype)
					  .addHeader("cache-control", "no-cache")
					  .get()
				 	  .build();
	  
			okhttp3.Response response = client.newCall(request).execute();
	      
		
	      System.out.println("InterfaceKYCCall Response Code "+ response.code());

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
		        Status = e.toString();
		        Message = "Exception";
		        System.out.println("Response: " + Status);
		        return Status+"~"+Message;
			}

			return Status+"~"+Message;
		}
}

