package APIInterface;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import Controls.GetDBData;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class SAPDataHandler {
	
	
	
	public String sapDataHandlr() {

		String resp = "";

		String requestBody = "";

		String url = "";
		String glnumber = "";
		String gltext = "";
		try {
			ArrayList<String> data = new ArrayList<String>();
			data = GetDBData.Call("", "", "", "", "", "LSW_SSAPDATACREATE");
			requestBody = data.get(0);
			JsonObject jsonObject = new JsonParser().parse(requestBody).getAsJsonObject();
			for (int z = 0; z < jsonObject.getAsJsonArray("Data").size(); z++) {
				glnumber = "";
				gltext = "";
				url = "";
				glnumber = jsonObject.getAsJsonArray("Data").getAsJsonArray().get(z).getAsJsonObject().get("GLNUMBER")
						.getAsString();
				gltext = jsonObject.getAsJsonArray("Data").getAsJsonArray().get(z).getAsJsonObject().get("GLTEXT").getAsJsonObject().toString();
				url = jsonObject.getAsJsonArray("Data").getAsJsonArray().get(z).getAsJsonObject().get("URL").getAsString();
				resp = interfaceCall(url,gltext);
				GetDBData.Call(resp.split("~")[0], resp.split("~")[1], "", "", glnumber, "LSW_SSAPDATACREATE_UPD");
			}
		} catch (Exception e) {
			e.printStackTrace();
			GetDBData.Call("Error", e.toString(), "", "", glnumber, "LSW_SSAPDATACREATE_UPD");
			e.printStackTrace();
		}
		return resp;
	}

	private static String interfaceCall(String url, String json) {
		String resp = "";
		String msg = "";
		String flg = "";
		try {
			OkHttpClient client = new OkHttpClient.Builder().connectTimeout(60, TimeUnit.SECONDS).build();
			MediaType mediaType = MediaType.parse("application/json");
			RequestBody body = RequestBody.create(mediaType, json);
			Request request = (new Request.Builder()).url(url).post(body)
					.addHeader("content-type", "application/json").addHeader("cache-control", "no-cache").build();
			Response response = client.newCall(request).execute();
			if (response.code() == 200) {
				flg = "Success";
				msg = response.body().string();
			} else {
				flg = "Error";
				msg = response.body().string();
			}
		} catch (Exception e) {
			e.printStackTrace();
			msg = e.toString();
			flg = "Error";
		}
		resp = flg + "~" + msg;
		return resp;
	}
}
