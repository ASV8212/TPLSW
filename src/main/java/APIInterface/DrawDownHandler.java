package APIInterface;


import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.SecureRandom;
import java.security.Security;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestBody;

import CommonModel.DBConnection;


public class DrawDownHandler {
	public String pushasDrawDown(HttpServletRequest req) throws Exception {
		String resp = "";
		Connection conPS= null;
		Connection conPS1= null;
		PreparedStatement prsPS=null;
		PreparedStatement prsPS1=null;
		ResultSet rstPS=null;
		String URL = "";
		String jsonData = "";
		String inputdata = req.getParameter("inputdata");
		String spname = req.getParameter("spname");
		String authTokn = "";
		String resString = "";
		String resMessage = "";
		String uniqueID = "";
		try
		{
			if(conPS==null)
				conPS=DBConnection.getConnection(null);
			if(conPS1==null)
				conPS1=DBConnection.getConnection(null);
			
			prsPS=conPS.prepareStatement("{ call " +spname+ "(?,?,?,?,?) }");
			prsPS.setString(1, inputdata);
			prsPS.setString(2, "");
			prsPS.setString(3, "");
			prsPS.setString(4, "");
			prsPS.setString(5, "");
			
			rstPS=prsPS.executeQuery();
			ResultSetMetaData rsmd = rstPS.getMetaData();
		    int colCount = rsmd.getColumnCount();
		    
		    while(rstPS.next())
	    	{
	    		URL=rstPS.getString(1);
	    		jsonData=rstPS.getString(2);
	    		authTokn=rstPS.getString(3);
	    		uniqueID=rstPS.getString(4);
	    	}
		    //doTrustToCertificates();
		    URL url = new URL(URL);
		    HttpURLConnection URLConnection = (HttpURLConnection)url.openConnection();
		    URLConnection.setDoOutput(true);
		    URLConnection.setRequestMethod("POST");
		    URLConnection.setRequestProperty("Content-Type", "application/json");
		    URLConnection.setRequestProperty("Auth-token", authTokn);
		    
		    OutputStream outStream = URLConnection.getOutputStream();
		    OutputStreamWriter outStreamWriter = new OutputStreamWriter(outStream, "UTF-8");
		    outStreamWriter.write(jsonData);
		    outStreamWriter.flush();
		    outStreamWriter.close();
		    outStream.close();
		    
		    
		    BufferedReader br = null;
		    if (URLConnection.getResponseCode() == 200) {
		        br = new BufferedReader(new InputStreamReader(URLConnection.getInputStream()));
		        String strCurrentLine;
		            while ((strCurrentLine = br.readLine()) != null) {
		                   System.out.println(strCurrentLine);
		                   resMessage = resMessage+strCurrentLine;
		            }
		    } else {
		        br = new BufferedReader(new InputStreamReader(URLConnection.getErrorStream()));
		        String strCurrentLine;
		            while ((strCurrentLine = br.readLine()) != null) {
		                   System.out.println(strCurrentLine);
		                   resMessage = resMessage+strCurrentLine;
		            }
		    }
		    br.close();
			/*
			 * okhttp3.OkHttpClient client = new
			 * okhttp3.OkHttpClient().newBuilder().build(); okhttp3.MediaType mediaType =
			 * okhttp3.MediaType.parse("application/json"); okhttp3.RequestBody body =
			 * okhttp3.RequestBody.create(mediaType, jsonData); okhttp3.Request request =
			 * new okhttp3.Request.Builder() .url(URL) .method("POST", body)
			 * .addHeader("Auth-token", authTokn) .addHeader("Content-Type",
			 * "application/json") .build(); okhttp3.Response response =
			 * client.newCall(request).execute();
			 */
		    
		    prsPS1 = conPS1.prepareStatement("{ call " + spname + "_UPD" +"(?,?,?,?,?) }");
		    prsPS1.setString(1, resMessage); 
		    prsPS1.setString(2, "");
		    prsPS1.setString(3, ""); 
		    prsPS1.setString(4, "");
		    prsPS1.setString(5,uniqueID);
			  
		    prsPS1.executeQuery();
			System.out.println("InterfaceRest Response Code "+ URLConnection.getResponseCode());
			if(URLConnection.getResponseCode()==200)
			{
				resString="Success";
				resp = resString+"!@#"+resMessage;
			}
			else
			{
				resString="Error";
				resp = resString+"!@#"+resMessage;
			}
			URLConnection.disconnect();
			System.out.println("Interface End ");
			
		}
		catch(Exception ei)
		{
			ei.printStackTrace();
			resString="Exception";
			resMessage=ei.toString();
			return resString+"!@#"+resMessage;
		}
		finally
		{
			DBConnection.closeConnection(conPS, prsPS, rstPS);
			DBConnection.closeConnection(conPS1, prsPS1, null);
		}
			
		return resp;
	}
	
	/*
	 * public void doTrustToCertificates() throws Exception {
	 * Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider());
	 * TrustManager[] trustAllCerts = new TrustManager[]{ new X509TrustManager() {
	 * public X509Certificate[] getAcceptedIssuers() { return null; }
	 * 
	 * public void checkServerTrusted(X509Certificate[] certs, String authType)
	 * throws CertificateException { return; }
	 * 
	 * public void checkClientTrusted(X509Certificate[] certs, String authType)
	 * throws CertificateException { return; } } };
	 * 
	 * SSLContext sc = SSLContext.getInstance("SSL"); sc.init(null, trustAllCerts,
	 * new SecureRandom());
	 * HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
	 * HostnameVerifier hv = new HostnameVerifier() { public boolean verify(String
	 * urlHostName, SSLSession session) { if
	 * (!urlHostName.equalsIgnoreCase(session.getPeerHost())) {
	 * System.out.println("Warning: URL host '" + urlHostName +
	 * "' is different to SSLSession host '" + session.getPeerHost() + "'."); }
	 * return true; } }; HttpsURLConnection.setDefaultHostnameVerifier(hv); }
	 */
}
