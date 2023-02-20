package Controls;

import java.util.concurrent.TimeUnit;

public class InterfaceProbeCall {
	public static String interfaceProbService(String url,String key,String uniqid,String version) throws Exception
	{
		String resString=null;
		String resMessage=null;
		
		try
		{
			okhttp3.OkHttpClient client = new okhttp3.OkHttpClient.Builder().connectTimeout(10, TimeUnit.SECONDS)
					.writeTimeout(180, TimeUnit.SECONDS).readTimeout(180, TimeUnit.SECONDS).build();

			okhttp3.Request request = new okhttp3.Request.Builder()
			  .url(url)
			  .get()
			  .addHeader("cache-control", "no-cache")
			  .addHeader("x-api-key", key)
			  .addHeader("x-api-version", version)
			  .build();

			okhttp3.Response resp = client.newCall(request).execute();
			

			if(resp.code()==200)
			{
				resString="Success";
				resMessage=resp.body().string();
			}
			else
			{
				resString="Error";
				resMessage=resp.body().string();
			}
			resp.body().close();
			
		}
		catch(Exception ei)
		{
			ei.printStackTrace();
			resString="Interface Exception";
			resMessage=ei.toString();
		}
		return resString+"~"+resMessage;
	}
}
