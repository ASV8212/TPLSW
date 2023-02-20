package Integration;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.FileAttribute;
import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Base64;
import java.util.Formatter;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.content.ByteArrayBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.HttpClientBuilder;

import com.google.common.io.Files;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import CommonModel.DBConnection;
import Controls.Connections;
import jcifs.smb.NtlmPasswordAuthentication;
import jcifs.smb.SmbFile;
import jcifs.smb.SmbFileOutputStream;

public class UdyamGetTag {
	private UdyamGetTag() {
		throw new IllegalStateException("Utility class");
	}

	public static String dataReceiver(HttpServletRequest request) {
		String docName = request.getParameter("DocName");
		String cusid = request.getParameter("CusID");
		String requestBody = "";
		String base64PDF = "";
		String respFr = "";
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt1 = null;
		PreparedStatement procstmt = null;
		ResultSet results = null;
		
		
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
		String docToken= "";
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
			
			Properties prop = new Properties();
			
			String username = "";
			String password = "";
			String dmsType = "";
			String chkSharingPasswrd = "";
			String OPAttchData = "";
			URL songPath = CommonModel.FileUploadHandler.class.getResource("");
			String[] pathArr = songPath.toString().split("file:/|/apache");
			FileInputStream fis = null;
			String Path = pathArr[1];
			fis = new FileInputStream(String.valueOf(Path) +"/wflow/app_datasource.properties");
			//fis = new FileInputStream("D:/Office Project/Chola/Build/Build Related/ThemeproLO_Works/Product/wflow/app_datasource.properties");
			if (fis != null) {
				prop.load(fis);
				dmsType = prop.getProperty("DMSTYPE");

				fis.close();
			} else {
				throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");

			}
			
			if (dmsType.equals("SHARING")) {
				username = prop.getProperty("FEPUPLDUsername");
				password = prop.getProperty("FEPUPLDPassword");
				String userPassword = password;
				NtlmPasswordAuthentication auth1 = new NtlmPasswordAuthentication(userPassword);
				if (!chkSharingPasswrd.equals("Yes")) {
					Path sFile2path = Paths.get(username + "/" + "Attachments" + "/" + prcsid + "/"
							+ formName + "/" + attchName + "/" + version + "/", new String[0]);
					java.nio.file.Files.createDirectories(sFile2path);

					File sFile3 = new File(sFile2path + "/" + fileName);

					final FileOutputStream FileOutputStream = new FileOutputStream(sFile3);
					FileOutputStream.write(docContent);
					OPAttchData = String.valueOf(OPAttchData) + attchName + "~" + attchDescrptn + "~"
							+ "\\Attachments" + "\\" + prcsid + "\\" + formName + "\\" + attchName + "\\"
							+ version + "\\" + fileName + "~" + filesize + "~" + version + "|";
					FileOutputStream.close();
				}
			}
			
			procstmt = con.prepareStatement("{ call sam_sAttachmentDMS1(?,?,?) }");

			procstmt.setString(1, OPAttchData);
			procstmt.setString(2, cusid);
			procstmt.setString(3, docName);

			results = procstmt.executeQuery();

			while (results.next()) {
				docToken = results.getString("DOCTOKEN");
				System.out.println("Data Saved Suceessfully");
			}

			Connections.Call(procstmt, results, con, "Commit");
			

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			Connections.Call(procstmt, results, con, "Close");
		}
		return docToken;
	}
}
