package Integration;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileUtils;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import Controls.GetDBData;
import Controls.InterfaceImgPrcsCKYC;

public class CKYCImgPush extends InterfaceImgPrcsCKYC {
	public String ImgPushHandler(HttpServletRequest request) {
		String resp = "";
		String prcsid = request.getParameter("prcsid");
		String dmsFile = "";
		String fileName = "";

		String prcsid_1 = "";
		String newid = "";
		ArrayList<String> data = new ArrayList<String>();
		data = GetDBData.Call(prcsid, "", "", "", "", "LSW_SCKYCDATAPUSHCREATE");

		String json = data.get(0);
		String url = data.get(1);
		String token = data.get(2);
		JsonObject jsonObject = new JsonParser().parse(json).getAsJsonObject();
		if (jsonObject.getAsJsonArray("Data").size() > 0) {
			for (int z = 0; z < jsonObject.getAsJsonArray("Data").size(); z++) {
				dmsFile = "";
				fileName = "";
				newid = "";
				prcsid_1 = "";

				dmsFile = jsonObject.getAsJsonArray("Data").getAsJsonArray().get(z).getAsJsonObject().get("DMSID")
						.getAsString();
				fileName = jsonObject.getAsJsonArray("Data").getAsJsonArray().get(z).getAsJsonObject().get("FILENAME")
						.getAsString();
				prcsid_1 = jsonObject.getAsJsonArray("Data").getAsJsonArray().get(z).getAsJsonObject().get("PRCSID")
						.getAsString();
				newid = jsonObject.getAsJsonArray("Data").getAsJsonArray().get(z).getAsJsonObject().get("NEWID")
						.getAsString();
				resp = imgPrcsCKYCService(dmstobase64(dmsFile, prcsid_1), fileName, url);
				GetDBData.Call(resp, newid, "ROW", token, "", "LSW_SCKYCDATAPUSHCREATE_UPD");
			}
			GetDBData.Call(resp, newid, "OVERALL", token, "", "LSW_SCKYCDATAPUSHCREATE_UPD");
		}
		else {
			resp="No Record Found";
			GetDBData.Call(resp, newid, "OVERALL", token, "", "LSW_SCKYCDATAPUSHCREATE_UPD");
		}
		return resp;
	}

	private String dmstobase64(String dmsFile, String prcsid) {
		String resp = "";
		try {
			Properties prop = new Properties();
			String dmsType = "";
			String username = "";
			URL songPath = CommonModel.FileUploadHandler.class.getResource("");
			String[] pathArr = songPath.toString().split("file:/|/apache");
			FileInputStream fis = null;

			String Path = pathArr[1];
			// fis = new FileInputStream(String.valueOf(Path) +
			// "/wflow/app_datasource.properties");
			fis = new FileInputStream(
					"C:/Titus/Office Project/Chola/Build/Build Related/ThemeproLO_Works/Product/wflow/app_datasource.properties");

			if (fis != null) {
				prop.load(fis);
				dmsType = prop.getProperty("DMSTYPE");

				fis.close();
			} else {
				throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");

			}
			String DMSURL = "";
			String fileNAME = "";
			String format = "";
			String retval = "";
			ArrayList<String> Data = new ArrayList<String>();
			Data = GetDBData.Call(prcsid, dmsFile, "", "", "", "LSW_SDMSVIEW1");
			DMSURL = Data.get(0);
			fileNAME = Data.get(1);
			format = Data.get(2);

			byte[] fileContent = null;

			if (dmsType.equals("SHARING")) {
				username = prop.getProperty("FEPUPLDUsername");
				fileContent = FileUtils.readFileToByteArray(new File(username + DMSURL));

			} else {
				String Sharingpath = prop.getProperty("UPLDPHYLOC");
				fileContent = FileUtils.readFileToByteArray(new File(Sharingpath + DMSURL));
			}
			String base64Encoded = Base64.getEncoder().encodeToString(fileContent);
			resp = base64Encoded;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return resp;
	}
}
