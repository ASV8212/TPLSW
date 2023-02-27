package Controls;

import okhttp3.*;

public class InterfaceImgPrcsCKYC {

	public String imgPrcsCKYCService(String base64File,String fileName,String url) {
		String resp = "";
		String msg = "";
		String flg = "";
		try {
			OkHttpClient client = new OkHttpClient().newBuilder().build();
			MediaType mediaType = MediaType.parse("text/plain");
			RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM).addFormDataPart("file",base64File)
					.addFormDataPart("fileName", fileName).build();
			Request request = new Request.Builder().url(url)
					.method("POST", body).build();
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
			flg = "Error";
			msg = e.toString();
		}
		resp = flg + "~" + msg;

		return resp;
	}
}
