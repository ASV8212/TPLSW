package Controls;


import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

public class InterfaceMLAPI 
{
	 public static String Interfacemlservie(String APIURL,String json,String Token)
	    {
	        String result="";
	        String resMessage="";
	        try{
	            
	        	OkHttpClient client = new OkHttpClient();        			  
	        			MediaType mediaType = MediaType.parse("application/json");
	        			RequestBody body = RequestBody.create(mediaType, json);
	        			Request request = new Request.Builder()
	        			  .url(APIURL)
	        			  .method("POST", body)
	        			  .addHeader("Content-Type", "application/json")
	        			  .addHeader("Authorization",Token)
	        			 // .addHeader("Cookie", "BIGipServerUAT_WSO2_pool=!OCPYD2RhAV6b4b+Vvl1ADg+wEWj6CCNo4PhyKqhVjFrwdJRTzIlNdUpyRIU/hJQW7Huol0PzTXLRup4=")
	        			  .build();
	        			Response response = client.newCall(request).execute();
	        			 String str=response.body().string();
	        			 
	        			 
	        			 int Code= response.code();
	        				if(Code==200)
	        				{
	        					result="Success";	
	        				}
	        				else
	        				{
	        					result="Failure";	
	        				}
	        				
	        				
	        				resMessage=str;
	        				System.out.println(str.toString());
	        				
	        				
	        }
	        catch (IOException e)
	        {
	            e.printStackTrace();

	        }
	        return result+"~"+resMessage;
	    }
}
