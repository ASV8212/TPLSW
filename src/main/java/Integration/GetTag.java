package Integration;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Base64;
import java.util.Formatter;

import javax.servlet.http.HttpServletRequest;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.content.ByteArrayBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.HttpClientBuilder;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import CommonModel.DBConnection;
import Controls.Connections;

public class GetTag {
	private GetTag() {
		throw new IllegalStateException("Utility class");
	}

	public static String dataReceiver(HttpServletRequest request) {
		String docName = request.getParameter("DocName");
		String cusid = request.getParameter("CusID");
		String requestBody = "";
		String base64PDF = "";
		String respFr = "";
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt = null;
		ResultSet rs = null;
		String opAttchData = "";
		String attchName = request.getParameter("attachname");
		String attchDescrptn = request.getParameter("attachdescrptn");
		String prcsid = request.getParameter("prcsid");
		String formName = request.getParameter("formName");
		String version = request.getParameter("version");
		String fileName = request.getParameter("fileName");
		String filesize = request.getParameter("filesize");
		byte[] hash = new byte[20];
		String checksum = "";
		String resMsg = "";
		String jsonresult="";
		try {
			StringBuilder buffer = new StringBuilder();
			BufferedReader reader = request.getReader();
			String line;
			while ((line = reader.readLine()) != null) {
				buffer.append(line);
				buffer.append(System.lineSeparator());
			}
			requestBody = buffer.toString();
			
			System.out.println("Request  :"+ requestBody);
			
			JsonObject jsonObject = new JsonParser().parse(requestBody).getAsJsonObject();
			jsonresult = jsonObject.get("result").toString();
			JsonObject jsonObjectsrc = new JsonParser().parse(jsonresult).getAsJsonObject();
			base64PDF = jsonObjectsrc.get("pdfData").getAsString();
			
			byte[] docContent = Base64.getDecoder().decode(base64PDF);
			opAttchData = String.valueOf(opAttchData) + attchName + "~" + attchDescrptn + "~" + "\\Attachments" + "\\"
					+ prcsid + "\\" + formName + "\\" + attchName + "\\" + version + "\\" + fileName + "~" + filesize
					+ "~" + version + "|";
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
			procstmt.setString(2, cusid);
			procstmt.setString(3, docName);
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
			ByteArrayBody body = new ByteArrayBody(docContent, "application/pdf", fileName);
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

			if (respFr.equals("Success")) {
				opAttchData = attchName + "~" + attchDescrptn + "~" + resMsg + "\\" + attchName + "~" + filesize + "~"
						+ version + "|";
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
			}
		} finally {
			Connections.Call(procstmt, rs, con, "Close");
		}
		return opAttchData;
	}
}
