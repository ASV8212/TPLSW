package Controls;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.FileAttribute;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SignatureException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.IOUtils;

import CommonModel.DBConnection;
import Integration.ManualStatementBSA;
import Integration.PefiosEncDec;
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

public class InterfaceBSAMS {
	/*
	 * private InterfaceBSAMS() { throw new IllegalStateException("Utility class");
	 * }
	 */

	static String perfiosAlgorithm = "PERFIOS-RSA-SHA256";
	static String signedHeaders = "host;x-perfios-content-sha256;x-perfios-date";

	public static String interfaceCallBSAMS(String url, String payload, String host, String xPerfiosDate,
			String reqMethod) {
		String msg = "";
		String flg = "";
		String resp = "";
		try {
			String signature = ManualStatementBSA.signatureCreator(url.split(host)[1], payload, xPerfiosDate, "", host,
					reqMethod);
			URL obj = new URL(url);
			HttpURLConnection con = (HttpURLConnection) obj.openConnection();

			con.setRequestMethod(reqMethod);
			con.addRequestProperty("content-type", "application/xml");
			con.addRequestProperty("Accept", "application/xml");
			con.setRequestProperty("Host", host);
			con.setRequestProperty("X-Perfios-Algorithm", "PERFIOS-RSA-SHA256");
			con.setRequestProperty("X-Perfios-Content-Sha256", ManualStatementBSA.sha256(payload));
			con.setRequestProperty("X-Perfios-Date", xPerfiosDate);
			con.setRequestProperty("X-Perfios-Signature", signature);
			con.setRequestProperty("X-Perfios-Signed-Headers", "host;x-perfios-content-sha256;x-perfios-date");
			con.setDoOutput(true);

			System.out.println("URL : " + url);
			System.out.println("content-type : application/xml");
			System.out.println("Accept : application/xml");
			System.out.println("Host : " + host);
			System.out.println("X-Perfios-Algorithm : PERFIOS-RSA-SHA256");
			System.out.println("X-Perfios-Content-Sha256 : " + ManualStatementBSA.sha256(payload));
			System.out.println("X-Perfios-Date : " + xPerfiosDate);
			System.out.println("X-Perfios-Signature : " + signature);
			System.out.println("X-Perfios-Signed-Headers : host;x-perfios-content-sha256;x-perfios-date");
			System.out.println("Payload : " + payload);
			OutputStream os = con.getOutputStream();
			os.write(payload.getBytes());
			os.flush();
			os.close();
			int responseCode = con.getResponseCode();
			if (responseCode == HttpURLConnection.HTTP_OK || responseCode == HttpURLConnection.HTTP_ACCEPTED) {
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine;
				StringBuffer response = new StringBuffer();
				while ((inputLine = in.readLine()) != null) {
					response.append(inputLine + "\n");
				}
				in.close();
				flg = "Success";
				msg = response.toString();
			} else {
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getErrorStream()));
				String inputLine;
				StringBuffer response = new StringBuffer();
				while ((inputLine = in.readLine()) != null) {
					response.append(inputLine);
				}
				in.close();
				flg = "Error";
				msg = response.toString();
			}
		} catch (Exception e) {
			flg = "Error";
			msg = e.getMessage();
			e.printStackTrace();
		}
		resp = flg + "~" + msg;
		return resp;
	}

	public static String uploadStatement(String url, String filePath, String xPerfiosDate, String host,
			String reqMethod) throws IOException, InvalidKeyException, NoSuchAlgorithmException, SignatureException {
		String msg = "";
		String flg = "";
		String resp = "";
		try {
			File file = new File(filePath);
			String signature = ManualStatementBSA.signatureCreator(url.split(host)[1], "", xPerfiosDate, "", host,
					reqMethod);
			OkHttpClient client = new OkHttpClient.Builder().connectTimeout(10, TimeUnit.SECONDS)
					.writeTimeout(180, TimeUnit.SECONDS).readTimeout(180, TimeUnit.SECONDS).build();
			RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM).addFormDataPart("file",
					file.getName(), RequestBody.create(MediaType.parse("application/pdf"), file)).build();
			Request request = new Request.Builder().url(url).addHeader("content-type", "multipart/form-data")
					.addHeader("Host", "demo31.perfios.com").addHeader("X-Perfios-Algorithm", "PERFIOS-RSA-SHA256")
					.addHeader("X-Perfios-Content-Sha256", ManualStatementBSA.sha256(""))
					.addHeader("X-Perfios-Date", xPerfiosDate).addHeader("X-Perfios-Signature", signature)
					.addHeader("X-Perfios-Signed-Headers", "host;x-perfios-content-sha256;x-perfios-date")
					.addHeader("cache-control", "no-cache").post(body).build();
			Response response = client.newCall(request).execute();
			int responseCode = response.code();
			if (responseCode == HttpURLConnection.HTTP_OK) {
				flg = "Success";
				msg = response.body().string();
			} else {
				flg = "Error";
				msg = response.body().string();
			}
			response.close();
		} catch (Exception e) {
			flg = "Error";
			msg = e.getMessage();
			e.printStackTrace();
		}
		resp = flg + "~" + msg;
		return resp;

	}

	public static String listInstitution(String url, String host, String xPerfiosDate, String reqMethod) {
		String resp = "";
		String msg = "";
		String flg = "";
		try {
			String signature = ManualStatementBSA.signatureCreator(url.split(host)[1], "", xPerfiosDate, "", host,
					reqMethod);
			OkHttpClient client = new OkHttpClient();
			Request request = new Request.Builder().url(url).get().addHeader("Content-Type", "application/xml")
					.addHeader("X-Perfios-Date", xPerfiosDate).addHeader("Host", host)
					.addHeader("X-Perfios-Algorithm", perfiosAlgorithm)
					.addHeader("X-Perfios-Content-Sha256", ManualStatementBSA.sha256(""))
					.addHeader("X-Perfios-Signature", signature).addHeader("X-Perfios-Signed-Headers", signedHeaders)
					.addHeader("Accept", "application/xml").build();
			Response response = client.newCall(request).execute();
			int code = response.code();

			ResponseBody body = response.body();
			InputStream source = body.source().inputStream();
			if (code == HttpURLConnection.HTTP_OK) {
				flg = "Success";
				msg = IOUtils.toString(source, StandardCharsets.UTF_8);
			} else {
				flg = "Error";
				msg = IOUtils.toString(source, StandardCharsets.UTF_8);
			}
			source.close();
			body.close();
			response.close();

		} catch (Exception e) {
			flg = "Error";
			msg = e.getMessage();
			e.printStackTrace();
		}
		resp = flg + "~" + msg;
		return resp;
	}

	public static String reportGen(String url, String host, String xPerfiosDate, String reqMethod, String payload) {
		String resp = "";
		String msg = "";
		String flg = "";

		try {
			URL obj = new URL(url);
			HttpURLConnection con = (HttpURLConnection) obj.openConnection();
			if (url.contains("types")) {
				reqMethod = "GET";
			}
			String signature = ManualStatementBSA.signatureCreator(url.split(host)[1], "", xPerfiosDate, "", host,
					reqMethod);
			con.setRequestMethod(reqMethod);
			con.addRequestProperty("content-type", "application/xml");
			con.addRequestProperty("Accept", "application/xml");
			con.setRequestProperty("Host", host);
			con.setRequestProperty("X-Perfios-Algorithm", "PERFIOS-RSA-SHA256");
			con.setRequestProperty("X-Perfios-Content-Sha256", ManualStatementBSA.sha256(""));
			con.setRequestProperty("X-Perfios-Date", xPerfiosDate);
			con.setRequestProperty("X-Perfios-Signature", signature);
			con.setRequestProperty("X-Perfios-Signed-Headers", "host;x-perfios-content-sha256;x-perfios-date");
			con.setDoOutput(true);
			OutputStream os = con.getOutputStream();
			os.write(payload.getBytes());
			os.flush();
			os.close();
			int responseCode = con.getResponseCode();
			if (responseCode == HttpURLConnection.HTTP_OK || responseCode == 202) {
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine;
				StringBuffer response = new StringBuffer();
				while ((inputLine = in.readLine()) != null) {
					response.append(inputLine + "\n");
				}
				in.close();
				msg = response.toString();
				flg = "Success";
			} else {
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getErrorStream()));
				String inputLine;
				StringBuffer response = new StringBuffer();
				while ((inputLine = in.readLine()) != null) {
					response.append(inputLine);
				}
				in.close();
				msg = response.toString();
				flg = "Error";
			}
			con.disconnect();
		} catch (Exception e) {
			flg = "Error";
			msg = e.getMessage();
			e.printStackTrace();
		}
		resp = flg + "~" + msg;
		return resp;
	}

	public static String RetrieveReport(String url, String host, String xPerfiosDate, String filePath, String reqMethod,
			String prcsID, String transid, String version) {
		OkHttpClient client = new OkHttpClient();
		String result = "";
		String flg = "";
		String msg = "";
		try {
			String signature = ManualStatementBSA.signatureCreator(url.split(host)[1], "", xPerfiosDate, "", host,
					reqMethod);
			Request request = new Request.Builder().url(url).get().addHeader("Content-Type", "application/xml")
					.addHeader("X-Perfios-Date", xPerfiosDate).addHeader("Host", host)
					.addHeader("X-Perfios-Algorithm", "PERFIOS-RSA-SHA256")
					.addHeader("X-Perfios-Content-Sha256", ManualStatementBSA.sha256(""))
					.addHeader("X-Perfios-Signature", signature)
					.addHeader("X-Perfios-Signed-Headers", "host;x-perfios-content-sha256;x-perfios-date")
					.addHeader("Accept", "application/xml").addHeader("cache-control", "no-cache").build();
			Response response = client.newCall(request).execute();
			ResponseBody body = response.body();
			String username = "";
			username = filePath;
			String oPAttchData = "";

			Path sFile2path = Paths.get(username + "/" + "Attachments" + "/" + prcsID
					+ "/ManualStatementBSA/ManualStatementBSA/" + version + "/", new String[0]);
			Files.createDirectories(sFile2path, new FileAttribute[0]);

			oPAttchData = String.valueOf(oPAttchData) + "ManualStatementBSA~ManualStatementBSA" + "~" + "\\Attachments"
					+ "\\" + prcsID + "\\ManualStatementBSA\\ManualStatementBSA\\" + version + "\\" + transid + ".xlsx~40~"
					+ version + "|";

			File file = new File(sFile2path + "/" + transid);
			BufferedSource source = body.source();
			BufferedSink sink = Okio.buffer(Okio.sink(file));
			Buffer sinkBuffer = sink.buffer();
			long totalBytesRead = 0;

			int bufferSize = 8 * 1024;
			for (long bytesRead; (bytesRead = source.read(sinkBuffer, bufferSize)) != -1;) {
				sink.emit();
				totalBytesRead += bytesRead;
			}
			sink.flush();
			sink.close();
			source.close();
			flg = "Success";
			msg = new InterfaceBSAMS().pushtoDMS(oPAttchData,prcsID,"ManualStatement");
		} catch (

		Exception e) {
			flg = "Error";
			msg = e.getMessage();
			e.printStackTrace();
		}
		result = flg + "~" + msg;
		return result;
	}

	private String pushtoDMS(String oPAttchData, String prcsID, String DocName) {
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt = null;
		ResultSet results = null;
		String docToken = "";
		try {
			procstmt = con.prepareStatement("{ call sam_sAttachmentDMS1(?,?,?) }");

			procstmt.setString(1, oPAttchData);
			procstmt.setString(2, prcsID);
			procstmt.setString(3, DocName);

			results = procstmt.executeQuery();

			while (results.next()) {
				docToken = results.getString("DOCTOKEN");
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (con != null) {
					con.close();
				}
				if (procstmt != null) {
					procstmt.close();
				}
				if (results != null) {
					results.close();
				}
			} catch (Exception e1) {
				e1.printStackTrace();
			}
		}
		return docToken;
	}

}
