package Controls;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

public class InterfaceEsignlegality {

	public static String InterfacePostCall(String APiURL,String JsonData,String contenttype,String Authtoken) 
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
	        .addHeader("x-auth-token", Authtoken)
	        .addHeader("content-type", contenttype)
	        .addHeader("cache-control", "no-cache")
	        .build();

	      
	      Response response = client.newCall(request).execute();
		
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
			
		  OkHttpClient client = new OkHttpClient(); 
	      Request request = (new Request.Builder())        
	        .url(APiURL)
	        .get()
	        .addHeader("x-auth-token", Authtoken)
	        .addHeader("content-type", contenttype)
	        .addHeader("cache-control", "no-cache")
	        .build();

	      
	      Response response = client.newCall(request).execute();
		
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

