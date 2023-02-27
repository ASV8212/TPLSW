package Integration;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.FileAttribute;
import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Formatter;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileUtils;
import org.apache.http.HttpResponse;

import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.content.ByteArrayBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;

import CommonModel.DBConnection;
import Controls.Connections;
import Controls.GetDBData;
import okhttp3.*;

public class AadharDoc {

	private AadharDoc() {
		throw new IllegalStateException("Utility class");
	}

	public static String dataReceiver(HttpServletRequest request) {
		String docName = request.getParameter("DocName");
		String cusid = request.getParameter("CusID");
		String requestBody = "";
		String base64PDF = "";
		String respFr = "";
		String Token = "";
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt = null;
		ResultSet rs = null;
		String docToken = "";
		String FileFormat = null;
		String FileType = null;
		String opAttchData = "";
		String attchName = request.getParameter("attachname");
		String attchDescrptn = request.getParameter("attachdescrptn");
		String prcsid = request.getParameter("prcsid");
		String formName = request.getParameter("formName");

		ArrayList<String> Data = new ArrayList<String>();
		Data = GetDBData.Call("DOCVRNO", "", "", "", "", "Sam_sGetCOMSeqID");
		String version = Data.get(0);

		String fileName = request.getParameter("fileName");
		String filesize = request.getParameter("filesize");
		FileFormat = request.getParameter("FileFormat");
		FileType = request.getParameter("FileType");
		String URL = request.getParameter("URL");
		byte[] hash = new byte[20];
		String checksum = "";
		String resMsg = "";
		String jsonresult = "";
		int i = 0;
		try {
			StringBuilder buffer = new StringBuilder();
			BufferedReader reader = request.getReader();
			String line;
			while ((line = reader.readLine()) != null) {
				buffer.append(line);
				buffer.append(System.lineSeparator());
			}
			requestBody = buffer.toString();

			System.out.println("Request  :" + URL);

			OkHttpClient client1 = new OkHttpClient().newBuilder().build();
			MediaType mediaType = MediaType.parse("text/plain");
			RequestBody body1 = RequestBody.create(mediaType, "");
			Request request1 = new Request.Builder().url(URL).method("GET", null).build();
			Response response = client1.newCall(request1).execute();

			byte[] bytes = response.body().bytes();
			
			Properties prop = new Properties();
			String dmsType = "";
			String username = "";
			FileInputStream fis = null;
			URL songPath = CommonModel.FileUploadHandler.class.getResource("");
			String[] pathArr = songPath.toString().split("file:/|/apache");
			String Path = pathArr[1];
			fis = new FileInputStream(String.valueOf(Path)+"/wflow/app_datasource.properties");
			//fis = new FileInputStream(
					//"C:/Titus/Office Project/Chola/Build/Build Related/ThemeproLO_Works/Product/wflow/app_datasource.properties");
			
			if (fis != null) {
				prop.load(fis);
				dmsType = prop.getProperty("DMSTYPE");
				username = prop.getProperty("FEPUPLDUsername");
				fis.close();
			} else {
				throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");

			}
			Path sFile2path = Paths.get(username + "/" + "Attachments" + "/" + prcsid + "/" + formName + "/"
					+ attchName + "/" + version + "/", new String[0]);
			Files.createDirectories(sFile2path, new FileAttribute[0]);

			File sFile3 = new File(sFile2path + "/" + fileName);
			sFile3.createNewFile();
			Files.write(sFile3.toPath(), bytes);
			opAttchData = String.valueOf(opAttchData) + attchName + "~" + attchDescrptn + "~" + "\\Attachments"
					+ "\\" + prcsid + "\\" + formName + "\\" + attchName + "\\" + version + "\\" + fileName
					+ "~" + filesize + "~" + version + "|";
			
			/*
			 * final FileOutputStream FileOutputStream = new FileOutputStream(sFile3); final
			 * InputStream fileInputStream = new ByteArrayInputStream(bytes);
			 * 
			 * final byte[] buf = new byte[16 * 1024 * 1024]; int len; while ((len =
			 * fileInputStream.read(buf)) > 0) { FileOutputStream.write(buf, 0, len);
			 * 
			 * } FileOutputStream.close(); fileInputStream.close();
			 */
			procstmt = con.prepareStatement("{ call sam_sAttachmentDMS1(?,?,?) }");

			procstmt.setString(1, opAttchData);
			procstmt.setString(2, cusid);
			procstmt.setString(3, "Aadhar Masked Image");

			rs = procstmt.executeQuery();

			while (rs.next()) {
				docToken = rs.getString("DOCTOKEN");
			}

			

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			Connections.Call(procstmt, rs, con, "Close");
		}
		return docToken;
	}
}
