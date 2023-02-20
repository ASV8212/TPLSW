package Controls;

import java.io.IOException;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

public class InterfaceTechAPI
{
	public static String InterfaceCallSrv(String URL, String JSONDATA, String UNIQID, String TOKEN,String PRCSID) {

		String result = "";
		 String resMessage = "";

		// System. out. print("Interface Start");

		try {
			/*
			 * System.out.print("param1="+param1+"param2="+param2+"param3="+param3+"param4="
			 * +param4+"param5="
			 * +param5+"spname="+spname+"spname2="+spname2+"spname3="+spname3);
			 */
			OkHttpClient client = new OkHttpClient();
					MediaType mediaType = MediaType.parse("application/json");
					RequestBody body = RequestBody.create(mediaType, JSONDATA);
					Request request = new Request.Builder()
					  .url(URL)
					  .method("POST", body)
					  .addHeader("Authorization", TOKEN)
					  .addHeader("Content-Type", "application/json")
					  .build();
					Response response = client.newCall(request).execute();

			String str = response.body().string();
			
			int Code = response.code();
			if (Code == 200) {
				result = "Success";
			} else {
				result = "Failure";
			}

			resMessage = str;
			System.out.println(str.toString());

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// System. out. print("Interface End");

		return result + "~" + resMessage;
	}
}
