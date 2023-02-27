package Controls;

import java.net.InetSocketAddress;
import java.net.Proxy;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
//import org.apache.http.impl.client.HttpClientBuilder;
import java.util.Collections;
import java.util.List;

/*import com.squareup.okhttp.CipherSuite;
import com.squareup.okhttp.ConnectionSpec;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;
import com.squareup.okhttp.TlsVersion;*/

import CommonModel.DBConnection;
import okhttp3.CipherSuite;
import okhttp3.ConnectionSpec;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.TlsVersion;

public class InterfaceVideoKYC {
	static String DBOUTPUT = "";
	static String responseString = "";
	static String outputString = "";
	static String ErrorMsg = "";
	static String Respheader = "";
	static String uniqueid = "";

	static String Result = "";
	static String FnlVal = "";
	static int status;

	static ConnectionSpec spec = (new ConnectionSpec.Builder(ConnectionSpec.MODERN_TLS))
			.tlsVersions(new TlsVersion[] { TlsVersion.TLS_1_2 })
			.cipherSuites(new CipherSuite[] { CipherSuite.TLS_DHE_RSA_WITH_AES_256_GCM_SHA384,
					CipherSuite.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384})
			.build();

	public static String GenerateSessionToken(String Type, String CntntURL, String Key, String Strval, String UniqueId,
			String Token) throws Exception {
		try {

			OkHttpClient client = new OkHttpClient().newBuilder().connectionSpecs(Arrays.asList(spec)).build();
			

			MediaType mediaType = MediaType.parse(Type);
			RequestBody body = RequestBody.create(mediaType, Strval);
			Request request = new Request.Builder().url(CntntURL).method("POST", body).addHeader("x-karza-key", Key)
					.addHeader("Content-Type", Type).addHeader("cache-control", "no-cache").build();
			Response response = client.newCall(request).execute();

			status = response.code();
			Result = response.body().string();
			System.out.println(Result);
			if (status == 200) {
				ErrorMsg = "Success";
				outputString = Result;
			} else {
				outputString = Result;
				ErrorMsg = outputString;
			}

		} catch (Exception e) {
			DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
			   LocalDateTime now = LocalDateTime.now();  
			   System.out.println(dtf.format(now));  
			ErrorMsg = e.toString();
			outputString = "{\"Status\":\"ERROR\",\"errors\":[{\"errorCode\":\"Manual\",\"errorMessage\":\"" + ErrorMsg
					+ "\"}]}";
			e.printStackTrace();
		}
		return outputString + "~" + ErrorMsg;
	}

	public static String AddNewCus(String Type, String CntntURL, String Key, String Strval, String UniqueId,
			String Token) throws Exception {
		try {

			OkHttpClient client = new OkHttpClient().newBuilder().connectionSpecs((List) Collections.singletonList(spec)).build();

			MediaType mediaType = MediaType.parse(Type);
			RequestBody body = RequestBody.create(mediaType, Strval);
			Request request = new Request.Builder().url(CntntURL).method("POST", body).addHeader("karzatoken", Key)
					.addHeader("Content-Type", Type).addHeader("cache-control", "no-cache").build();
			Response response = client.newCall(request).execute();
			
			System.out.println("karzatoken : "+Key);
			System.out.println("Content-Type : "+Type);
			System.out.println("Payload : "+Strval);
			System.out.println("URL : "+CntntURL);
			status = response.code();
			Result = response.body().string();
			System.out.println(Result);
			if (status == 200) {
				ErrorMsg = "Success";
				outputString = Result;
			} else {
				outputString = "Error";
				ErrorMsg = outputString;
			}

		} catch (Exception e) {
			DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
			   LocalDateTime now = LocalDateTime.now();  
			   System.out.println(dtf.format(now));  
			ErrorMsg = e.toString();
			outputString = "{\"Status\":\"ERROR\",\"errors\":[{\"errorCode\":\"Manual\",\"errorMessage\":\"" + ErrorMsg
					+ "\"}]}";
			e.printStackTrace();
		}
		return outputString + "~" + ErrorMsg;
	}

	public static String GenerateCusToken(String Type, String CntntURL, String Key, String Strval,
			String UniqueId, String Token) throws Exception {
		try {

			OkHttpClient client = new OkHttpClient().newBuilder().connectionSpecs((List) Collections.singletonList(spec)).build();

			Request request = new Request.Builder().url(CntntURL).method("GET", null).addHeader("karzatoken", Key)
					.addHeader("cache-control", "no-cache").build();
			Response response = client.newCall(request).execute();

			status = response.code();
			Result = response.body().string();
			System.out.println(Result);
			if (status == 200) {
				ErrorMsg = "Success";
				outputString = Result;
			} else {
				outputString = Result;
				ErrorMsg = outputString;
			}

		} catch (Exception e) {
			ErrorMsg = e.toString();
			outputString = "{\"Status\":\"ERROR\",\"errors\":[{\"errorCode\":\"Manual\",\"errorMessage\":\"" + ErrorMsg
					+ "\"}]}";
			e.printStackTrace();
		}
		return outputString + "~" + ErrorMsg;
	}
}
