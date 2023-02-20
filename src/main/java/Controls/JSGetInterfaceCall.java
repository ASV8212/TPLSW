package Controls;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.Properties;


import javax.net.ssl.HttpsURLConnection;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
//import org.apache.http.impl.client.HttpClientBuilder;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

//import org.json.JSONException;
//import org.json.JSONObject;


import java.net.HttpURLConnection;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;

public class JSGetInterfaceCall {

	public static String JInterfaceCallSrv(String URL,String XML, String UIQID,String UIQPKID,String SoapAction) {

			  
		  String responseString = "";
			String outputString = "";
			String ErrorMsg = "";
			String Respheader ="";
			
			//System. out. print("Interface Start");
			
			try {
				 
			 			 	
				    /*  System.out.print("param1="+param1+"param2="+param2+"param3="+param3+"param4="+param4+"param5="
				    		 	+param5+"spname="+spname+"spname2="+spname2+"spname3="+spname3); */  
				      
			 	String POST_PARAMS = XML;
			
			 	MediaType mediaType = MediaType.parse("application/json");
			 	RequestBody body = RequestBody.create(mediaType, POST_PARAMS);
			 	
			 	
			 	System.out.println(POST_PARAMS);	
			 	
			 	OkHttpClient client = new OkHttpClient();

			 	Request request = new Request.Builder()
			 	  .url(URL)
			 	  .get()
			 	  .addHeader("Content-Type", "application/json")
			 	  .addHeader("cache-control", "no-cache")
			 	  //.addHeader("postman-token", "d2b5c33f-2fcd-e2da-c21c-221284adbd65")
			 	 .addHeader("Referer", SoapAction)
			 	 .addHeader("Authorization", UIQPKID)
			 	  .build();

			 	Response response = client.newCall(request).execute();
			 	
			 	
			 	
				System.out.println(response.code());
				
				
			
			 	
			 	System.out.println(outputString);
			 	
			 	if (response.code() == 200)
			 	{			 		
			 		ErrorMsg = "Success";
			 		outputString = response.body().string();
			 		Respheader = response.header("leapauthtoken");
			 	}
			 	else
			 	{
			 		 outputString = response.body().string();
					ErrorMsg = outputString;
			 	}		 		
			 	response.body().close();
			 
			 }
			         catch (IOException e) {
							// TODO Auto-generated catch block
			        	 
						 ErrorMsg = e.toString();
						 
						 outputString = "{\"Status\":\"ERROR\",\"MSG\":\""+ErrorMsg+"\"}";
						 
							e.printStackTrace();
						}
			    	
	//	System. out. print("Interface End");
		
	    return outputString + "~" + ErrorMsg +"~"  + Respheader ;
	}
}
