package Controls;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.URL;
import java.net.HttpURLConnection;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLSession;

public class InterfaceRestXMLCall implements HostnameVerifier {

	public InterfaceRestXMLCall() {
		// Do nothing because of X and Y.
	}

	@Override
	public boolean verify(String hostname, SSLSession session) {
		return true;
	}

	public static String interfaceResXMLCallService(String url, String xml, String uniqid, String userId,String password) {
		String result = null;
		String message = "";
		try {
			URL uri1 = new URL(url);
			HttpURLConnection connection = (HttpURLConnection) uri1.openConnection();

			if (connection instanceof HttpsURLConnection) {
				HttpsURLConnection httpsUrlConnection = (HttpsURLConnection) connection;
				httpsUrlConnection.setHostnameVerifier(new InterfaceRestXMLCall());
			}

			connection.setUseCaches(false);
			connection.setDoInput(true);
			connection.setDoOutput(true);

			connection.setRequestMethod("POST");
			connection.setRequestProperty("userId", userId);
			connection.setRequestProperty("password", password);
			connection.setRequestProperty("inquiryXML", xml);
			OutputStreamWriter wr = new OutputStreamWriter(connection.getOutputStream());
			wr.flush();
			wr.close();

			int status = 0;
			if (null != connection) {
				status = connection.getResponseCode();
			}
			if (status == 200) {
				BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));

				String inputLine;

				while ((inputLine = reader.readLine()) != null) {
					message += inputLine;
				}

				result = "Success";
				reader.close();
			} else {

				BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));

				String inputLine;

				while ((inputLine = reader.readLine()) != null) {
					message += "Error from Server with " + status + " response code and error as " + inputLine;
				}

				result = "Error";
				reader.close();
			}
		} catch (Exception ex) {
			result = "Exception";
			message = ex.toString();
			ex.printStackTrace();
		}
		return result + "~" + message;
	}

}
