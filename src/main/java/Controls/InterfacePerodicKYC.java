package Controls;

import okhttp3.*;

public class InterfacePerodicKYC {
	public String interfacePerodicKycHndlr(String url, String payload) {
		String resp = "";
		String flg = "";
		String msg = "";
		try {
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
			response.close();
		} catch (Exception e) {
			flg = "Error";
			msg = e.getMessage();
		}
		resp = flg + "~" + msg;
		return resp;
	}
}
