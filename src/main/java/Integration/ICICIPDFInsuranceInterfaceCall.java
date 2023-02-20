package Integration;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
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

import CommonModel.SSLSkipSNIHostnameVerifier;

//import org.json.JSONException;
//import org.json.JSONObject;


import java.net.HttpURLConnection;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;

public class ICICIPDFInsuranceInterfaceCall {

	public static String ICICIInsuranceInterfaceCallSrv(String CntntURL,String Strval,String Type) {

		String OutRst;
		//String Strval ="";
		//String CntntURL="";
		String Username="";
		String Password="";
		String customerid="";
		String accesscode="";
		String requestFormat="";
		//String Type="";
			  
		  String responseString = "";
			String outputString = "";
			String ErrorMsg = "";
			String Respheader ="";

			String Result="";
			String FnlVal="";
			int status;	
				try {	
			//System. out. print("Interface Start");
			

			
					OkHttpClient client = new OkHttpClient();

					MediaType mediaType = MediaType.parse("application/json");
					RequestBody body = RequestBody.create(mediaType, Strval);
					Request request = new Request.Builder()
					  .url(CntntURL)
					  .post(body)
					  .addHeader("content-type", "application/json")
					  .addHeader("Authorization","Bearer "+ Type)
					  .addHeader("cache-control", "no-cache")
					  .build();

					Response response = client.newCall(request).execute();
					
					status=response.code();
					
					Result = response.body().string();
				 		 		  // System.out.println(inputLine);
			
	 		  System.out.println(Result);
				
			if (status == 200)
		 	{			 		
		 		ErrorMsg = "Success";
		 		outputString = Result;
		 		
		 	}
		 	else
		 	{
		 		 outputString = Result;
				ErrorMsg = outputString;
		 	}		 		
		 	
	}
		catch (Exception e) {
			ErrorMsg = e.toString();
			 
			
			 outputString = "{\"Status\":\"ERROR\",\"errors\":[{\"errorCode\":\"GCPP_002\",\"errorMessage\":\""+ErrorMsg+"\"}]}";
			 
			e.printStackTrace();

		}
			 	
			 	
			 	
					
	    return outputString + "~" + ErrorMsg ;
	}
}
