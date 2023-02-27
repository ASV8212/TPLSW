package Integration;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.FileUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import CommonModel.DBConnection;
import Controls.GetDBData;
import Controls.InterfaceImgPrcsACH;

public class ImagePrcsACH {
	public static String imagePrcsHandler(HttpServletRequest request) {

		String resp = "";
		String intrresp[];
		String intrfaceresp = "";
		String flg = "";
		String msg = "";
		String prcsid = request.getParameter("PrcsID");
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt = null;
		ResultSet rs = null;
		String payLoad = "";
		String username = "";
		String url = "";
		String token = "";
		URL songPath = CommonModel.FileUploadHandler.class.getResource("");
		String[] pathArr = songPath.toString().split("file:/|/apache");
		FileInputStream fis = null;
		Properties prop = new Properties();
		String dmsType = "";

		String Path = pathArr[1];
		try {
			// fis = new FileInputStream(String.valueOf(Path) +
			// "/wflow/app_datasource.properties");
			fis = new FileInputStream(
					"D:/Office Project/Chola/Build/Build Related/ThemeproLO_Works/Product/wflow/app_datasource.properties");

			if (fis != null) {
				prop.load(fis);
				dmsType = prop.getProperty("DMSTYPE");

				fis.close();
			} else {
				throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");

			}

			procstmt = con.prepareStatement("{ call LSW_SACHIMGPRCS (?,?,?,?,?) }");
			procstmt.setString(1, prcsid);
			procstmt.setString(2, "");
			procstmt.setString(3, "");
			procstmt.setString(4, "");
			procstmt.setString(5, "");
			rs = procstmt.executeQuery();
			while (rs.next()) {
				payLoad = rs.getString(1);
				url = rs.getString(2);
				token = rs.getString(3);
			}

			if (payLoad.equals("")) {
				resp = "NoRecord~NoRecord";
				return resp;
			}

			JSONObject jsonObject = new JSONObject(payLoad);
			JSONArray array = new JSONArray(jsonObject.getJSONArray("item"));
			JSONArray array1 = new JSONArray();
			for (int i = 0; i < array.length(); i++) {
				String DMSURL = "";
				String fileNAME = "";
				String format = "";
				InputStream stream;
				String encodedString = "";
				String fileContent = "";
				ArrayList<String> Data = new ArrayList<String>();
				Data = GetDBData.Call(prcsid, array.getJSONObject(i).getString("docNo").toString(), "", "", "",
						"LSW_SDMSVIEW1");
				DMSURL = Data.get(0);
				fileNAME = Data.get(1);
				format = Data.get(2);
				fileContent = "";
				if (dmsType.equals("SHARING")) {
					username = prop.getProperty("FEPUPLDUsername");
					fileContent = encodeFileToBase64Binary(username + DMSURL);
				}
				JSONObject jsonObject_1 = new JSONObject(array.getJSONObject(i).toString());
				jsonObject_1.put("img", fileContent);
				array1.put(jsonObject_1);
				System.out.println(array1.toString());

			}
			jsonObject.getJSONArray("item").clear();
			jsonObject.append("item", array1.toString().replace("[", "").replace("]", ""));
			payLoad = jsonObject.toString();
			resp = payLoad;

			
			  intrfaceresp = InterfaceImgPrcsACH.interfaceCallSrv(url, payLoad); intrresp =
			  intrfaceresp.split("~");
			  
			  ArrayList<String> Data = new ArrayList<String>(); Data = GetDBData.Call("",
			  "", intrresp[0], intrresp[1], token, "LSW_SACHIMGPRCS"); resp = Data.get(0);
			 

		} catch (Exception e) {
			e.printStackTrace();
			ArrayList<String> Data = new ArrayList<String>();
			Data = GetDBData.Call("", "", "Java Exception", e.toString(), token, "LSW_SACHIMGPRCS");
			resp = Data.get(0);
		} finally {
			try {
				if (rs != null) {
					rs.close();
				}
				if (procstmt != null) {
					procstmt.close();
				}
				if (con != null) {
					con.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return resp;
	}

	private static String encodeFileToBase64Binary(String fileName) throws IOException {
		File file = new File(fileName);
		byte[] encoded = Base64.encodeBase64(FileUtils.readFileToByteArray(file));
		return new String(encoded, StandardCharsets.US_ASCII);
	}
}
