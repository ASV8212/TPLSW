package Controls;

import java.util.Collections;

import com.squareup.okhttp.CipherSuite;
import com.squareup.okhttp.ConnectionSpec;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;
import com.squareup.okhttp.TlsVersion;

public class NamastheAPIService {

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
	
	public static String InterfacePostCall1(String APiURL,String JsonData,String contenttype,String Authtoken) 
	{

		String Status=null;
		String Message=null;
			
		try
		{
			
			final ConnectionSpec spec = new ConnectionSpec.Builder(ConnectionSpec.MODERN_TLS).tlsVersions(new TlsVersion[] 
            		{ TlsVersion.TLS_1_2 }).cipherSuites(new CipherSuite[] { CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,
		       CipherSuite.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,
		       CipherSuite.TLS_DHE_RSA_WITH_AES_256_GCM_SHA384, CipherSuite.TLS_DHE_RSA_WITH_AES_128_GCM_SHA256  })
        			.build();
			
		 final OkHttpClient client = new OkHttpClient(); 
		  client.setConnectionSpecs((Collections.singletonList(spec)));
	      MediaType mediaType = MediaType.parse(contenttype);
	      RequestBody body = RequestBody.create(mediaType, JsonData);
	      
	      Request request = (new Request.Builder())        
	        .url(APiURL)
	        .post(body)
	        .addHeader("Authorization", Authtoken)
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
