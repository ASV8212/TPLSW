package Controls;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SignatureException;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

/*import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;*/

import Integration.PefiosEncDec;
import Integration.PerfiosInsight;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okio.Buffer;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.Okio;

public class PerfiosInsightInterfaceCall {
	private void StringUtils() {
		throw new IllegalStateException("Utility class");
	}
	static String signedHeaders = "host;x-perfios-content-sha256;x-perfios-date";
	static String perfiosAlgorithm = "PERFIOS-RSA-SHA256";
	static String contenttype = "application/xml";
	public static String perfiosInterfaceCall(String endPoint, String signature, String payloadOrEmptyString,
			String date, String host,String hitno) throws IOException, NoSuchAlgorithmException {
		// ---------------------------------Initiate_Transaction_URL
		// method----------------------
		String method = "POST";
		URL obj = new URL(endPoint);
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
		if (endPoint.contains("types")) {
			method = "GET";
		}
		con.setRequestMethod(method);
		con.addRequestProperty("content-type", contenttype);
		con.addRequestProperty("Accept", contenttype);
		con.setRequestProperty("Host", host);
		con.setRequestProperty("X-Perfios-Algorithm", perfiosAlgorithm);
		con.setRequestProperty("X-Perfios-Content-Sha256", PefiosEncDec.sha256(payloadOrEmptyString));
		con.setRequestProperty("X-Perfios-Date", date);
		con.setRequestProperty("X-Perfios-Signature", signature);
		con.setRequestProperty("X-Perfios-Signed-Headers", signedHeaders);
		con.setDoOutput(true);
		OutputStream os = con.getOutputStream();
		os.write(payloadOrEmptyString.getBytes());

		os.flush();
		os.close();
		int responseCode = con.getResponseCode();
		if ((responseCode == HttpURLConnection.HTTP_OK)||(hitno.equals("Report Generation") && responseCode == HttpURLConnection.HTTP_ACCEPTED)) {
			// success
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();
			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine + "\n");
			}
			in.close();
			// print result
			// return response.substring(90, 107); // Perfios transaction Id
			return response.toString()+"~"+responseCode; // Perfios transaction Id
		}
		else {
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getErrorStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();
			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();
			// print result
			return response.toString()+"~"+responseCode;
		}

	}

	public static String uploadStatement(String filePath, String perfiosTransactionId, String xPerfiosDate,String endpoint,String host,String path,String reqMethod)
			throws IOException, InvalidKeyException, NoSuchAlgorithmException, SignatureException {

		File file = new File(filePath);

		OkHttpClient client = new OkHttpClient.Builder().connectTimeout(10, TimeUnit.SECONDS)
				.writeTimeout(180, TimeUnit.SECONDS).readTimeout(180, TimeUnit.SECONDS).build();

		RequestBody body = new MultipartBody.Builder()

				.setType(MultipartBody.FORM)
				.addFormDataPart("file", file.getName(), RequestBody.create(MediaType.parse("application/pdf"), file))
				// .addFormDataPart("organisationName", vendor)
				// .addFormDataPart("perfiosTransactionId", perfiosTransactionId)
				.build();

		Request request = new Request.Builder()

				.url(endpoint)

				.addHeader("content-type", "multipart/form-data")

				.addHeader("Host", host)

				.addHeader("X-Perfios-Algorithm", perfiosAlgorithm)

				.addHeader("X-Perfios-Content-Sha256", PefiosEncDec.sha256(""))

				.addHeader("X-Perfios-Date", xPerfiosDate)

				.addHeader("X-Perfios-Signature",PerfiosInsight.signatureCreator(path, "", xPerfiosDate, "",reqMethod,host))

				.addHeader("X-Perfios-Signed-Headers", signedHeaders)

				.addHeader("cache-control", "no-cache")

				.post(body)

				.build();

		Response response = client.newCall(request).execute();
		int responseCode = response.code();
		String result = response.body().string();

		return result+"~"+responseCode;

	}
	
	public static String retrieveReport(String endPoint,String sinature, String xPerfiosDate, String filePath,String Payload,String host) throws IOException, NoSuchAlgorithmException, InvalidKeyException, SignatureException 
	  {
		String xml = "";
	   OkHttpClient client = new OkHttpClient();

	       String result="";

	   Request request = new Request.Builder()

	     .url(endPoint)

	     .get()

	     .addHeader("Content-Type", contenttype)

	     .addHeader("X-Perfios-Date", xPerfiosDate)

	     .addHeader("Host", host)

	     .addHeader("X-Perfios-Algorithm", perfiosAlgorithm)

	     .addHeader("X-Perfios-Content-Sha256", PefiosEncDec.sha256(Payload))

	     .addHeader("X-Perfios-Signature", sinature)

	     .addHeader("X-Perfios-Signed-Headers", signedHeaders)

	     .addHeader("Accept", "application/xml")

	  //   .addHeader("cache-control", "no-cache")

	     .build();
	   
	    
	   Response response = client.newCall(request).execute();

	   ResponseBody body = response.body();
	   
	   int responseCode = response.code();
 	   File file= new File(filePath);

	      BufferedSource source = body.source();

	      BufferedSink sink = Okio.buffer(Okio.sink(file));
	      
	      Buffer sinkBuffer = sink.buffer();	      

	      long totalBytesRead = 0;

	      int bufferSize = 8 * 1024;
	      
	      for (long bytesRead; (bytesRead = source.read(sinkBuffer, bufferSize)) != -1; ) 
	      {
	          sink.emit();
	          totalBytesRead += bytesRead;
	      }

	      sink.flush();

	      sink.close();

	      source.close();
	   
	   Scanner sc = new Scanner(file);
	   while (sc.hasNextLine())
		   xml = xml+sc.nextLine();
		  
	   sc.close();
	   return xml+"~"+responseCode;
	   }

}
