package APIInterface;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import Controls.GetDBData;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class LeadSQR {
	private LeadSQR() {
		throw new IllegalStateException("Utility class");
	}

	public static String leadSQRStatusPush(HttpServletRequest req) {
		String resp = "";
		String msg = "";
		String flg = "";
		String tokn = "";
		try {
			String url = "";
			String payload = "";
			
			String prcsid = req.getParameter("PrcsID");
			String statusEvnt = req.getParameter("StatusEvnt");

			ArrayList<String> data = new ArrayList<String>();
			data = GetDBData.Call(prcsid, statusEvnt, "", "", "", "LSW_SSTATUSPUSHLEADSQRCREATE");
			url = data.get(0);
			payload = data.get(1);
			tokn = data.get(2);

			OkHttpClient client = new OkHttpClient().newBuilder().build();
			MediaType mediaType = MediaType.parse("application/json");
			RequestBody body = RequestBody.create(mediaType,payload);
			Request request = new Request.Builder().url(url)
					.method("POST", body).addHeader("Content-Type", "application/json").build();
			Response response = client.newCall(request).execute();
			if (response.code() == 200) {
				flg = "Success";
				msg = response.body().string();
			} else {
				flg = "Error";
				msg = response.body().string();
			}
			response.body().close();
		} catch (Exception e) {
			flg = "Error";
			msg = e.getMessage();
			e.printStackTrace();
		}
		resp = flg + "~" + msg;
		GetDBData.Call("", "", "", resp, tokn, "LSW_SSTATUSPUSHLEADSQRCREATE_UPD");
		return resp;
	}
}
