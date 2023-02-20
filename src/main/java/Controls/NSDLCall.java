package Controls;


import java.io.*;
import java.net.*;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.KeyManager;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import Integration.NSDLPropertyFile;

import java.util.*;

public class NSDLCall {
	public class DummyTrustManager implements X509TrustManager {

		public DummyTrustManager() {
		}

		public boolean isClientTrusted(X509Certificate cert[]) {
			return true;
		}

		public boolean isServerTrusted(X509Certificate cert[]) {
			return true;
		}

		public X509Certificate[] getAcceptedIssuers() {
			return new X509Certificate[0];
		}

		public void checkClientTrusted(X509Certificate[] arg0, String arg1)
				throws CertificateException {

		}

		public void checkServerTrusted(X509Certificate[] arg0, String arg1)
				throws CertificateException {

		}
	}
	
	public class DummyHostnameVerifier implements HostnameVerifier {

		public boolean verify(String urlHostname, String certHostname) {
			return true;
		}

		public boolean verify(String arg0, SSLSession arg1) {
			return true;
		}
	}
	
	public String callnsdlservice(String signature, String nsdlreq)
			throws IOException {

		String logMsg = "\n-";
		String response=null;
//		BufferedWriter out = null;
//		FileWriter fstream = null;
		Calendar c1 = Calendar.getInstance();
		Calendar c = Calendar.getInstance();
		long nonce = c.getTimeInMillis();
		Date startTime = c1.getTime();
		try {

			NSDLPropertyFile prop = new NSDLPropertyFile().getProperty();
			Date connectionStartTime = null;

			String urlOfNsdl = prop.getUrl();
			String data = nsdlreq;
			@SuppressWarnings("unused")
			ClassLoader classLoader = Thread.currentThread()
					.getContextClassLoader();			
			System.out.println(prop.getVersion());
			//out = new BufferedWriter(fstream);

			SSLContext sslcontext = null;

			//sslcontext = SSLContext.getInstance("TLS");
			sslcontext = SSLContext.getInstance("TLSv1.2");
		

			sslcontext.init(new KeyManager[0],
					new TrustManager[] { new DummyTrustManager() },
					new SecureRandom());

			SSLSocketFactory factory = sslcontext.getSocketFactory();

			String urlParameters = "data=";

			urlParameters = urlParameters + URLEncoder.encode(data, "UTF-8")
					+ "&signature=" + URLEncoder.encode(signature, "UTF-8")
			+ "&version=" + URLEncoder.encode(prop.getVersion(), "UTF-8");
			URL url;
			HttpsURLConnection connection;
			InputStream is = null;
			System.out.println(urlParameters);
			String ip = urlOfNsdl;
			url = new URL(ip);
			System.out.println("URL " + ip);
			connection = (HttpsURLConnection) url.openConnection();
			connection.setRequestMethod("POST");
			connection.setRequestProperty("Content-Type",
					"application/x-www-form-urlencoded");
			connection.setRequestProperty("Content-Length",
					"" + Integer.toString(urlParameters.getBytes().length));
			connection.setRequestProperty("Content-Language", "en-US");
			connection.setUseCaches(false);
			connection.setDoInput(true);
			connection.setDoOutput(true);
			connection.setSSLSocketFactory(factory);
			connection.setHostnameVerifier(new DummyHostnameVerifier());
			OutputStream os = connection.getOutputStream();
			OutputStreamWriter osw = new OutputStreamWriter(os);
			osw.write(urlParameters);
			osw.flush();
			connectionStartTime = new Date();
			logMsg += "::Request Sent At: " + connectionStartTime;
			// logMsg += "::Request Data: " + data;
			osw.close();
			is = connection.getInputStream();
			BufferedReader in = new BufferedReader(new InputStreamReader(is));
			String line = null;
			line = in.readLine();

			// System.out.println("Output: " + line);
			is.close();
			in.close();
			response=line;
		} catch (NoSuchAlgorithmException e) {
			logMsg += "::Exception: " + e.getMessage()
					+ " ::Program Start Time:" + startTime + "::nonce= "
					+ nonce;
			e.printStackTrace(System.err);

		} catch (KeyManagementException e) {
			logMsg += "::Exception: " + e.getMessage()
					+ " ::Program Start Time:" + startTime + "::nonce= "
					+ nonce;
			e.printStackTrace(System.err);
		} catch (ConnectException e) {
			logMsg += "::Exception: " + e.getMessage()
					+ "::Program Start Time:" + startTime + "::nonce= " + nonce;
		} catch (Exception e) {
			logMsg += "::Exception: " + e.getMessage()
					+ "::Program Start Time:" + startTime + "::nonce= " + nonce;
			e.printStackTrace();
		} 
		
		System.out.println("NSDLCall Log "+logMsg);			
		
		return response;

	}
}
