package CommonModel;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.CookieHandler;
import java.net.CookieManager;
import java.net.CookiePolicy;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;

import javax.net.ssl.HttpsURLConnection;


import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;

import org.springframework.stereotype.Controller;

public class UI_WFInit {
	// response.setContentType("text/html");
	// PrintWriter out = response.getWriter();

	private String URL;
	
	
	public void URL(String URL) {
		this.URL = URL;
	}
	

	public String UI_WFInit1() throws SQLException {
		// private String strResult;

		// ArrayList columnNames = new ArrayList();
		// ArrayList data = new ArrayList();

		String WfVariable="";
		String Op="";
		
		 try {

		
		URL obj1 = new URL(URL);
		//HttpsURLConnection con1 = (HttpsURLConnection) obj1.openConnection();
		HttpURLConnection con1 = (HttpURLConnection) obj1.openConnection();
		//add reuqest header
		con1.setRequestMethod("POST");
		//con.setRequestProperty("User-Agent", USER_AGENT);
		//con.setRequestProperty("Accept-Language", "en-US,en;q=0.5");

		String urlParameters1 = WfVariable;//"sn=C02G8416DRJM&cn=&locale=&caller=&num=12345";

		// Send post request
		con1.setDoOutput(true);
		DataOutputStream wr1 = new DataOutputStream(con1.getOutputStream());
		wr1.writeBytes(urlParameters1);
		wr1.flush();
		wr1.close();

		int responseCode1 = con1.getResponseCode();
		System.out.println("\nSending 'POST' request to URL : " + URL);
		System.out.println("Post parameters : " + urlParameters1);
		System.out.println("Response Code : " + responseCode1);

		BufferedReader in1 = new BufferedReader(
		        new InputStreamReader(con1.getInputStream()));
		String inputLine1;
		StringBuffer response1 = new StringBuffer();

		while ((inputLine1 = in1.readLine()) != null) {
			response1.append(inputLine1);
		}
		in1.close();

		//print result
		System.out.println(response1.toString());

		Op = response1.toString();
		 }
		  catch (IOException e) {
			  Op="Error";
			e.printStackTrace();

		  } 
		
		
		return Op;

		// END -- Enable in future

	}

}
