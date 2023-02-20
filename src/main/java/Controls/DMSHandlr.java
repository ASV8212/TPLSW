package Controls;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Formatter;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.content.ByteArrayBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.HttpClientBuilder;


import CommonModel.DBConnection;

public class DMSHandlr {
	public static String base64toDMS(String base64PDF, String param2, String param1, String UID) {
		String opAttchData = "";
		String checksum = "";
		String version = "";
		String respFr = "";
		String resMsg = "";
		PreparedStatement procstmt = null;
		ResultSet rs = null;
		Connection con = DBConnection.getConnection(null);
		try {

			byte[] docContent = Base64.getDecoder().decode(base64PDF);

			opAttchData = String.valueOf(opAttchData) + param2 + "~eSign~" + "\\Attachments" + "\\" + param1
					+ "\\eSignForm\\eSignForm\\" + UID + "\\eSignForm_" + param2+".pdf" + "~1000~" + UID + "|";
			byte[] hash = new byte[20];
			MessageDigest md = MessageDigest.getInstance("SHA-1");
			hash = md.digest(docContent);
			Formatter formatter = new Formatter();
			for (byte b : hash) {
				formatter.format("%02x", b);
			}

			checksum = formatter.toString();
			String apiURL = "";
			String req = "";

			procstmt = con.prepareStatement("{ call SAM_SGETDMSREQ(?,?,?,?,?) }");

			procstmt.setString(1, opAttchData);
			procstmt.setString(2, param2);
			procstmt.setString(3, "eSignForm");
			procstmt.setString(4, checksum);
			procstmt.setString(5, "REQ-1");

			rs = procstmt.executeQuery();

			while (rs.next()) {
				apiURL = rs.getString(1);
				req = rs.getString(2);
				version = rs.getString(3);
			}

			Connections.Call(procstmt, rs, con, "Commit");
			HttpClient client = HttpClientBuilder.create().build();
			HttpPost post = new HttpPost(apiURL);
			MultipartEntity entity = new MultipartEntity();
			ByteArrayBody body = new ByteArrayBody(docContent, "application/pdf", "eSign_" + param2);
			entity.addPart("image", body);
			entity.addPart("consent", new StringBody("Y"));
			entity.addPart("data", new StringBody(req));
			post.setEntity(entity);
			HttpResponse response1 = client.execute(post);
			BufferedReader rd = new BufferedReader(new InputStreamReader(response1.getEntity().getContent()));
			StringBuffer result = new StringBuffer();
			String lines = "";
			while ((lines = rd.readLine()) != null) {
				result.append(lines);
			}

			docContent = null;
			rd.close();
			int statusCode = response1.getStatusLine().getStatusCode();
			resMsg = result.toString();
			procstmt = con.prepareStatement("{ call SAM_SGETDMSREQ(?,?,?,?,?) }");
			procstmt.setString(1, opAttchData);
			procstmt.setInt(2, statusCode);
			procstmt.setString(3, version);
			procstmt.setString(4, resMsg);
			procstmt.setString(5, "REQ-2");

			rs = procstmt.executeQuery();

			while (rs.next()) {
				respFr = rs.getString(1);
			}
			Connections.Call(procstmt, rs, con, "Commit");
			if (respFr.equals("Success")) {
				opAttchData = "eSignForm~eSign~" + resMsg + "/eSign_" + param2 + ".pdf~1000~" + UID + "|";
			} else {
				opAttchData = respFr;
			}
		} catch (Exception e) {
			try {
				procstmt = con.prepareStatement("{ call SAM_SGETDMSREQ(?,?,?,?,?) }");
				procstmt.setString(1, "");
				procstmt.setString(2, "");
				procstmt.setString(3, version);
				procstmt.setString(4, e.getMessage());
				procstmt.setString(5, "EXCEPTION");

				rs = procstmt.executeQuery();
				while (rs.next()) {
					respFr = rs.getString(1);
				}
				opAttchData = respFr;

				Connections.Call(procstmt, rs, con, "Commit");
			} catch (Exception e1) {
				Connections.Call(procstmt, rs, con, "Rollback");
				opAttchData = "Fail";
				e1.printStackTrace();
			} finally {
				Connections.Call(procstmt, rs, con, "Close");
			}
		}
		return opAttchData;
	}
	

	
	
	
	
}
