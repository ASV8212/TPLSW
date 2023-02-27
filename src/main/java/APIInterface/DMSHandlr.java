package APIInterface;

import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.FileAttribute;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.FileUtils;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import CommonModel.DBConnection;
import Controls.GetDBData;
import jcifs.smb.NtlmPasswordAuthentication;
import jcifs.smb.SmbFile;
import jcifs.smb.SmbFileOutputStream;

public class DMSHandlr {
	public String dmsListHandler(HttpServletRequest request, HttpServletResponse response, String random)
			throws Exception {
		String resp = "";
		String requestBody = "";
		String procName = "LSW_SGETDOCULIST";
		String exception = "REQUEST EXCEPTION1";
		ArrayList<String> data = new ArrayList<String>();
		try {
			String referer = request.getHeader("access_token");
			StringBuilder buffer = new StringBuilder();
			BufferedReader reader = request.getReader();
			String line;
			while ((line = reader.readLine()) != null) {
				buffer.append(line);
				buffer.append(System.lineSeparator());
			}
			requestBody = buffer.toString();
			if (requestBody.equals("") || requestBody == null) {
				data = GetDBData.Call("", "", exception + "|" + random, "Request Body Missing", "", procName);
				resp = data.get(0);
				return resp;
			}
			String sha256hex = "TVSCREDIT"; //DigestUtils.sha512Hex(requestBody);
			if (referer == null) {
				data = GetDBData.Call("", "", exception + "|" + random, "Access Token missing", "", procName);
				resp = data.get(0);
				return resp;
			}

			if (!referer.equals(sha256hex)) {
				data = GetDBData.Call("", "", exception + "|" + random, "Invalid Access Token", "",
						procName);
				resp = data.get(0);
				return resp;
			}
			JsonObject jsonObject = new JsonParser().parse(requestBody).getAsJsonObject();
			String applicationNo = "";
			String customerID = "";
			if (jsonObject.has("ApplicationNo")) {
				applicationNo = jsonObject.get("ApplicationNo").toString().replaceAll("\"", "");
			}
			else
			{
				data = GetDBData.Call("", "", "REQUEST EXCEPTION1" + "|" + random, "Application No is Mandatory", "",procName);
				resp = data.get(0);
				return resp;
			}
			if (jsonObject.has("CustomerID")) {
				customerID = jsonObject.get("CustomerID").toString().replaceAll("\"", "");
			}
			else
			{
				data = GetDBData.Call("", "", "REQUEST EXCEPTION1" + "|" + random, "Customer ID is Mandatory", "",procName);
				resp = data.get(0);
				return resp;
			}
			data = GetDBData.Call(applicationNo, customerID, "CHECK" + "|" + random, "", "", procName);
			resp = data.get(0);
		} catch (Exception e) {
			try {
				data = GetDBData.Call("", "", "REQUEST EXCEPTION1" + "|" + random, e.toString(), e.getMessage(),
						procName);
				resp = data.get(0);
			} catch (Exception e1) {
				resp = "{\"CODE\":\"500\",\"MSG\":\"Unhandled Exception. Contact System Admin and check the log for more info.~"
						+ e1.getMessage() + "\"}";
			}
		}

		return resp;
	}

	public String dmsUploadHandler(HttpServletRequest request, HttpServletResponse response, String random)
			throws Exception {
		String resp = "";
		String requestBody = "";
		String procName = "LSW_SGETDOCULIST";
		String exception = "REQUEST EXCEPTION1";
		String names = "";
		ArrayList<String> data = new ArrayList<String>();
		boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		try {
			if (isMultipart) {
				FileItemFactory factory = new DiskFileItemFactory();
				ServletFileUpload upload = new ServletFileUpload(factory);
				List<FileItem> multiparts = upload.parseRequest(request);
				FileItem itemfinal = null;
				for (FileItem item : multiparts) {
					if (item.isFormField()) {
						requestBody = item.getString();
					}
					else
					{
						itemfinal=item;
					}
				}
				// String referer = request.getHeader("access_token");

				if (requestBody.equals("") || requestBody == null) {
					data = GetDBData.Call("", "", exception + "|" + random, "Request Body Missing", "", procName);
					resp = data.get(0);
					return resp;
				}
				if (itemfinal == null) {
					data = GetDBData.Call("", "", exception + "|" + random, "Invalid File", "", procName);
					resp = data.get(0);
					return resp;
				}
				if (itemfinal.getName() == null) {
					data = GetDBData.Call("", "", exception + "|" + random, "Invalid File", "", procName);
					resp = data.get(0);
					return resp;
				}
				if (itemfinal.getName().equals("")) {
					data = GetDBData.Call("", "", exception + "|" + random, "Invalid File", "", procName);
					resp = data.get(0);
					return resp;
				}
				
				/*
				 * String sha256hex = DigestUtils.sha512Hex(requestBody); if (referer == null) {
				 * data = GetDBData.Call("", "", exception+"|"+random, "Access Token missing",
				 * "", procName); resp = data.get(0); return resp; }
				 * 
				 * if (!referer.equals(sha256hex)) { data = GetDBData.Call("", "",
				 * exception+"|"+random, "Invalid Access Token", "", procName); resp =
				 * data.get(0); return resp; }
				 */
				JsonObject jsonObject = new JsonParser().parse(requestBody).getAsJsonObject();
				String applicationNo = "";
				String customerID = "";
				String docCategory = "";
				String uploadCategory = "";
				String code = "";
				String prcsid = "";
				String versn = "";
				if (jsonObject.has("ApplicationNo")) {
					applicationNo = jsonObject.get("ApplicationNo").toString().replaceAll("\"", "");
				}
				else
				{
					data = GetDBData.Call("", "", "REQUEST EXCEPTION1" + "|" + random, "Application No is Mandatory", "",procName);
					resp = data.get(0);
					return resp;
				}
				if (jsonObject.has("CustomerID")) {
					customerID = jsonObject.get("CustomerID").toString().replaceAll("\"", "");
				}
				else
				{
					data = GetDBData.Call("", "", "REQUEST EXCEPTION1" + "|" + random, "Customer ID is Mandatory", "",procName);
					resp = data.get(0);
					return resp;
				}
				if (jsonObject.has("NameofDocument")) {
					docCategory = jsonObject.get("NameofDocument").toString().replaceAll("\"", "");
				}
				else
				{
					data = GetDBData.Call("", "", "REQUEST EXCEPTION1" + "|" + random, "Name of Document is Mandatory", "",procName);
					resp = data.get(0);
					return resp;
				}
				if (jsonObject.has("UploadCategory")) {
					uploadCategory = jsonObject.get("UploadCategory").toString().replaceAll("\"", "");
				}
				else
				{
					data = GetDBData.Call("", "", "REQUEST EXCEPTION1" + "|" + random, "Upload Category is Mandatory", "",procName);
					resp = data.get(0);
					return resp;
				}
				data = GetDBData.Call(applicationNo+"|"+customerID+"|"+docCategory+"|"+uploadCategory, "", "GET SEQ No" + "|" + random, "", "", procName);
				
				JsonObject jsonObject1 = new JsonParser().parse(data.get(0)).getAsJsonObject();
				code = jsonObject1.get("CODE").toString().replaceAll("\"", "");
				if(!code.equals("200"))
				{
					data = GetDBData.Call("", "", "REQUEST EXCEPTION1" + "|" + random, "Upload Category Not Configured", "",procName);
					resp = data.get(0);
					return resp;
				}
				else
				{
					prcsid = jsonObject1.get("PRCSID").toString().replaceAll("\"", "");
					versn = jsonObject1.get("VERSN").toString().replaceAll("\"", "");
				}
				FileItem file = multiparts.get(0);


				Map<String, String> params = new HashMap<String, String>(request.getParameterMap());
				params.put("PrcsID", prcsid);
				params.put("vrsnno", versn);
				params.put("names", file.getName());
				params.put("domain1", "");
				params.put("FormName", "");
				params.put("descrptns", "DMS API");
				params.put("flsize", String.valueOf(file.getSize() / 1024));
				params.put("usrpwd1", "");
				params.put("CusID", customerID);
				params.put("DocName", "");
				params.put("applicationNo", applicationNo);
				params.put("docCategory", docCategory);
				params.put("uploadCategory", uploadCategory);
				
				
				
				
				resp = DMSAPIUploadHandler(request,params,itemfinal);

			}
		} catch (Exception e) {
			try {
				data = GetDBData.Call("", "", exception + "|" + random, e.toString(), e.getMessage(), procName);
				resp = data.get(0);
			} catch (Exception e1) {
				resp = "{\"CODE\":\"500\",\"MSG\":\"Unhandled Exception. Contact System Admin and check the log for more info.~"
						+ e1.getMessage() + "\"}";
			}
		}
		return resp;
	}

	protected String DMSAPIUploadHandler(HttpServletRequest request, Map<String, String> params, FileItem item)
			throws Exception {
		boolean isMultipart = ServletFileUpload.isMultipartContent(request);

		String prcsID = params.get("PrcsID");
		String formName = params.get("FormName");
		String attchName = params.get("names");
		String attchDescrptn = params.get("descrptns");
		String filesize = params.get("flsize");
		String version = params.get("vrsnno");
		String applicationNo = params.get("applicationNo");
		String docCategory = params.get("docCategory");
		String uploadCategory = params.get("uploadCategory");

		final String cusid = params.get("CusID");
		final String DocName = params.get("DocName");

		String docToken = "";

		String oPAttchData = "";

		String fileName = attchName;
		File file1 = ((DiskFileItem) item).getStoreLocation();
		((DiskFileItem) item).write(file1);

		Properties prop = new Properties();

		String username = "";
		String password = "";
		String dmsType = "";
		String chkSharingPasswrd = "";
		URL songPath = CommonModel.FileUploadHandler.class.getResource("");
		String[] pathArr = songPath.toString().split("file:/|/apache");
		FileInputStream fis = null;

		int pos = attchName.lastIndexOf(".");
		if (pos > 0 && pos < (attchName.length() - 1)) { // If '.' is not the first or last character.
			attchName = attchName.substring(0, pos);
		}

		String Path = pathArr[1];
		 fis = new FileInputStream(String.valueOf(Path)+"/wflow/app_datasource.properties");
		//fis = new FileInputStream(
			//	"D:/Office Project/Chola/Build/Build Related/ThemeproLO_Works/Product/wflow/app_datasource.properties");

		if (fis != null) {
			prop.load(fis);
			dmsType = prop.getProperty("DMSTYPE");

			fis.close();
		} else {
			throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");

		}
		String uppath = file1.getAbsolutePath();
		if (dmsType.equals("SHARING")) {
			username = prop.getProperty("FEPUPLDUsername");
			password = prop.getProperty("FEPUPLDPassword");
			String userPassword = password;
			NtlmPasswordAuthentication auth1 = new NtlmPasswordAuthentication(userPassword);
			if (chkSharingPasswrd.equals("Yes")) {
				SmbFile sFile2 = new SmbFile("smb:" + username + "/" + "Attachments" + "/" + prcsID + "/" + formName
						+ "/" + attchName + "/" + version, auth1);

				sFile2.exists();

				if (!sFile2.exists()) {
					sFile2.mkdirs();
				}
				SmbFile sFile3 = new SmbFile(sFile2 + "/" + fileName, auth1);

				SmbFileOutputStream smbFileOutputStream = new SmbFileOutputStream(sFile3);

				FileInputStream fileInputStream = new FileInputStream(new File(uppath));
				byte[] buf = new byte[16777216];
				int len;
				while ((len = fileInputStream.read(buf)) > 0)
					smbFileOutputStream.write(buf, 0, len);
				oPAttchData = String.valueOf(oPAttchData) + attchName + "~" + attchDescrptn + "~" + "\\Attachments"
						+ "\\" + prcsID + "\\" + formName + "\\" + attchName + "\\" + version + "\\" + fileName + "~"
						+ filesize + "~" + version + "|";
				smbFileOutputStream.close();
				fileInputStream.close();
			} else {
				Path sFile2path = Paths.get(username + "/" + "Attachments" + "/" + prcsID + "/" + formName + "/"
						+ attchName + "/" + version + "/", new String[0]);
				Files.createDirectories(sFile2path, new FileAttribute[0]);

				File sFile3 = new File(sFile2path + "/" + fileName);

				final FileOutputStream FileOutputStream = new FileOutputStream(sFile3);
				final FileInputStream fileInputStream = new FileInputStream(new File(uppath));

				final byte[] buf = new byte[16 * 1024 * 1024];
				int len;
				while ((len = fileInputStream.read(buf)) > 0) {
					FileOutputStream.write(buf, 0, len);
					oPAttchData = String.valueOf(oPAttchData) + attchName + "~" + attchDescrptn + "~" + "\\Attachments"
							+ "\\" + prcsID + "\\" + formName + "\\" + attchName + "\\" + version + "\\" + fileName
							+ "~" + filesize + "~" + version + "|";
				}
				FileOutputStream.close();
				fileInputStream.close();
			}

		} else {
			String Sharingpath = prop.getProperty("UPLDPHYLOC");

			File sFile2 = new File(
					Sharingpath + "/Attachments/" + prcsID + "/" + formName + "/" + attchName + "/" + version + "/");
			Path sFile2path = Paths.get(
					Sharingpath + "/Attachments/" + prcsID + "/" + formName + "/" + attchName + "/" + version + "/",
					new String[0]);
			Files.createDirectories(sFile2path, (FileAttribute<?>[]) new FileAttribute[0]);
			File sFile3 = new File(sFile2 + "/" + fileName);
			FileOutputStream FileOutputStream = new FileOutputStream(sFile3);

			FileInputStream fileInputStream = new FileInputStream(new File(uppath));
			byte[] buf = new byte[16777216];
			int len;
			while ((len = fileInputStream.read(buf)) > 0)
				FileOutputStream.write(buf, 0, len);
			oPAttchData = String.valueOf(oPAttchData) + attchName + "~" + attchDescrptn + "~" + "\\Attachments" + "\\"
					+ prcsID + "\\" + formName + "\\" + attchName + "\\" + version + "\\" + fileName + "~" + filesize
					+ "~" + version + "|";
			FileOutputStream.close();
			fileInputStream.close();

		}
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt1 = null;
		PreparedStatement procstmt = null;
		ResultSet results = null;
		ResultSet results1 = null;
		try {
			procstmt = con.prepareStatement("{ call sam_sAttachmentDMS1(?,?,?) }");

			procstmt.setString(1, oPAttchData);
			procstmt.setString(2, cusid);
			procstmt.setString(3, DocName);

			results = procstmt.executeQuery();

			while (results.next()) {
				docToken = results.getString("DOCTOKEN");
			}
			
			procstmt1 = con.prepareStatement("{ call LSW_SUPDATEDMSID(?,?,?,?,?) }");
			
			procstmt1.setString(1, docToken);
			procstmt1.setString(2, applicationNo);
			procstmt1.setString(3, cusid);
			procstmt1.setString(4, docCategory);
			procstmt1.setString(5, uploadCategory);
			
			results1 = procstmt1.executeQuery();
			while (results1.next()) {
				docToken = results1.getString("RESULT");
			}

			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (con != null) {
				con.close();
			}
			if(procstmt != null) {
				procstmt.close();
			}
			if(procstmt1 != null) {
				procstmt1.close();
			}
			if(results != null) {
				results.close();
			}
			if(results1 != null) {
				results1.close();
			}
		}

		return docToken;
	}
	public static void dmsViewHandler(String applicationNo,String dmsID,HttpServletResponse response,String downloadFrmt) throws Exception {
		
		
		Properties prop = new Properties();
		String dmsType = "";
		String username = "";
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
		String PrcsID = applicationNo;
		String DMSID = dmsID;
		String DMSURL = "";
		String fileNAME = "";
		String format = "";
		String retval = "";
		ArrayList<String> Data = new ArrayList<String>();
		Data = GetDBData.Call(PrcsID, DMSID, "", "", "", "LSW_SDMSVIEW2");
		DMSURL = Data.get(0);
		fileNAME = Data.get(1);
	    format = Data.get(2);
		InputStream stream;
		String encodedString = "";
		byte[] fileContent = null;
		if (dmsType.equals("SHARING")) {
			username = prop.getProperty("FEPUPLDUsername");
			fileContent = FileUtils.readFileToByteArray(new File(username + DMSURL));
		} else {
			String Sharingpath = prop.getProperty("UPLDPHYLOC");
			fileContent = FileUtils.readFileToByteArray(new File(Sharingpath + DMSURL));
		}
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
		byte[] chunk = new byte[4096];
		stream = new ByteArrayInputStream(fileContent);
		try {
			int bytesRead;
			while ((bytesRead = stream.read(chunk)) > 0)
				outputStream.write(chunk, 0, bytesRead);
			stream.close();
			byte[] DocContent = outputStream.toByteArray();
			
			//String base64Encoded = Base64.getEncoder().encodeToString(DocContent);
			outputStream.close();
			String responseformate= downloadFrmt;
			if(responseformate.equals("BYTE"))
			{
				response.setContentLength(DocContent.length);
				response.setHeader("Content-Disposition", "attachment; filename=" + fileNAME);
				ServletOutputStream servletOutputStream = response.getOutputStream();
				servletOutputStream.write(DocContent);
				servletOutputStream.flush();
				servletOutputStream.close();
			}
			else {
				response.setContentLength(DocContent.length);
				response.setHeader("Content-Disposition", "attachment; filename=" + fileNAME);
				//response.setHeader("BASE64", Base64.getEncoder().encodeToString(DocContent));
				ServletOutputStream servletOutputStream = response.getOutputStream();  
				//servletOutputStream.write(DocContent);
				servletOutputStream.print(Base64.getEncoder().encodeToString(DocContent));
				servletOutputStream.flush();
				servletOutputStream.close();
			}
		} catch (IOException e) {

			stream.close();
			outputStream.close();
			e.printStackTrace();
		}
	}
}
