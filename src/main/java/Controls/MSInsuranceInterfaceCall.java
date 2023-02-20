package Controls;

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

public class MSInsuranceInterfaceCall {

	public static String MSInsuranceInterfaceCallSrv(String CntntURL,String Strval,String Type,String TokenKey) {

		System.out.println("1"+CntntURL);
		System.out.println("2"+Strval);
		System.out.println("3"+Type);
		System.out.println("4"+TokenKey);
		
		String OutRst;
		String Username="";
		String Password="";
		String customerid="";
		String accesscode="";
		String requestFormat="";
			  
		  String responseString = "";
			String outputString = "";
			String ErrorMsg = "";
			String Respheader ="";

			String Result="";
			String FnlVal="";
				
				try {	

			System.out.println("1");
			System.out.println(CntntURL);
	      	URL uri1 = new URL(CntntURL);
			HttpsURLConnection connection =(HttpsURLConnection) uri1.openConnection();
			System.out.println("2");
			
			if (connection instanceof HttpsURLConnection) {
				  HttpsURLConnection httpsUrlConnection = (HttpsURLConnection) connection;        
				  httpsUrlConnection.setHostnameVerifier(new SSLSkipSNIHostnameVerifier());
				}
			System.out.println("3");
			connection.setUseCaches(false);
			connection.setDoInput(true);
			connection.setDoOutput(true);
			System.out.println("4");
			connection.setRequestMethod("POST");
			connection.setRequestProperty("Content-Type",Type);
			connection.setRequestProperty("accept",Type);
			connection.setRequestProperty("TokenKey",TokenKey);
			System.out.println("5");
			OutputStreamWriter wr = new OutputStreamWriter(connection.getOutputStream());
			wr.write(Strval);
			wr.flush();
			System.out.println("6");
			int status = 0;
			if( null != connection ){
			status = connection.getResponseCode();
			}
			System.out.println("7");
			BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
			System.out.println("8");
	 		String inputLine;

	 		   while ((inputLine = reader.readLine()) != null) {
	 		           Result +=inputLine;
	 		   }
	 		   reader.close();
	 		   wr.close();
	 		  System.out.println("9 "+Result);
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
