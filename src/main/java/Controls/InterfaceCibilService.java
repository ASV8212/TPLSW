package Controls;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

public class InterfaceCibilService {
	
	public static String InterfaceCibilService(String APiURL,String json,String Token)
	{
		
		String result="";
		String resMessage="";
		try {
			 OkHttpClient client = new OkHttpClient();
		      MediaType mediaType = MediaType.parse("application/json");
		      RequestBody body = RequestBody.create(mediaType, json);
		      Request request = new Request.Builder()
		      .url(APiURL)
		      .method("POST", body)
		      .addHeader("Authorization",Token )
		      .addHeader("Content-Type", "application/json")
		      .build();
		      Response  response = client.newCall(request).execute();
		        String str=response.body().string();
		
			int Code= response.code();
			if(Code==200)
			{
				result="Success";	
			}
			else
			{
				result="Failure";	
			}
			
			resMessage=str;
			//System.out.println(str.toString());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return result+" ~ "+resMessage;
	}
}
