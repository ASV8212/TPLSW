package Controls;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class InterfaceImgPrcsACH {
	public static String interfaceCallSrv(String url, String payload) {
		String resp = "";
		String flg = "";
		String msg = "";
		try
		{
			OkHttpClient client = new OkHttpClient().newBuilder().build();
					MediaType mediaType = MediaType.parse("application/json");
					RequestBody body = RequestBody.create(mediaType, payload);
					Request request = new Request.Builder()
					  .url(url)
					  .method("POST", body)
					  .addHeader("Content-Type", "application/json")
					  .addHeader("Cookie", "JSESSIONID=KGGG3MC_juCqepBKnNa1H5lNSWaXm_EgQPIFUUZI.csdcapps9")
					  .build();
					Response response = client.newCall(request).execute();
			if(response.code() == 200)
			{
				flg = "Success";
				msg = response.body().string();
			}
			else
			{
				flg = "Error";
				msg = response.body().string();
			}
			response.body().close();
		}
		catch(Exception e)
		{
			flg = "Error";
			msg = e.toString();
		}
		resp = flg +"~"+msg;
		return resp;
	}
}
