package Controls;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLEncoder;
import java.util.Properties;



import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import okhttp3.*;

public class InterfaceSMSService {
	public static String interfacesmsCall(String url,String json) {

		String resp = "";
		String flg = "";
		String msg = "";
		String bartoken = generateToken();
		
		
		
		JsonObject jsonObject = new JsonParser().parse(bartoken.split("~")[1]).getAsJsonObject();
		if (jsonObject.get("access_token").getAsString().equals("UNAUTHORIZED")) {
			return bartoken;
		}
		try {
			JsonObject jsonObject_1 = new JsonParser().parse(json).getAsJsonObject();
			String lang = jsonObject_1.get("Message").getAsJsonObject().get("Lang").getAsString();
			String msg1 = jsonObject_1.get("Message").getAsJsonObject().get("text").getAsString();
			String purpose = jsonObject_1.get("Message").getAsJsonObject().get("Purpose").getAsString();
			String empId = jsonObject_1.get("Message").getAsJsonObject().get("EmpId").getAsString();
			String phone = jsonObject_1.get("Message").getAsJsonObject().get("phone").getAsString();
			String template = jsonObject_1.get("Message").getAsJsonObject().get("Template").getAsString();
			
			String requestUrl = String.valueOf(url) + "Lang=" + URLEncoder.encode(lang, "UTF-8")
			+ "&Phone=" + URLEncoder.encode(phone, "UTF-8") + "&Msg=" + URLEncoder.encode(msg1, "UTF-8")
			+ "&Purpose=" + URLEncoder.encode(purpose, "UTF-8") + "&Template="
			+ URLEncoder.encode(template, "UTF-8") + "&EmpId=" + URLEncoder.encode(empId, "UTF-8");
			OkHttpClient client = new OkHttpClient().newBuilder().build();
			Request request = new Request.Builder().url(requestUrl).method("GET", null)
					.addHeader("Authorization", "Bearer " + bartoken.split("~")[1]).build();
			Response response = client.newCall(request).execute();
			if (response.code() == 200) {
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
		}
		resp = flg + "~" + msg;
		return resp;
	}

	private static String generateToken() {
		String resp = "";
		String flg = "";
		String msg = "";
		String tokendtl = "";
		try {
			tokendtl = loadPrivateKey();
			OkHttpClient client = new OkHttpClient().newBuilder().build();
			MediaType mediaType = MediaType.parse("application/json");
			RequestBody body = RequestBody.create(mediaType,tokendtl.split("~")[1]);
			Request request = new Request.Builder().url(tokendtl.split("~")[0]).method("POST", body)
					.addHeader("Content-Type", "application/json").build();
			Response response = client.newCall(request).execute();
			if (response.code() == 200) {
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
		}
		resp = flg + "~" + msg;
		return resp;
	}
	
	private static String loadPrivateKey() throws IOException {
		String propFileName = "APIProp.properties";
		InputStream inputStream = null;
		Properties prop = new Properties();

		String fileName = "";
		fileName = System.getProperty("catalina.base");
		fileName = String.valueOf(fileName) + "/conf/" + propFileName;
		inputStream = new FileInputStream(fileName);
		if (inputStream != null) {
			prop.load(inputStream);
		}
		return prop.getProperty("TokenGenUrl")+"~"+prop.getProperty("TokenGenPayload");
	}
}
