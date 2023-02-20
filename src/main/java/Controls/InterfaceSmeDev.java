package Controls;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.Properties;

import javax.net.ssl.HttpsURLConnection;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
//import org.apache.http.impl.client.HttpClientBuilder;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;


public class InterfaceSmeDev {
	
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
					  .addHeader("Content-Type", "application/json")
					  .addHeader("Accept", "application/json")
					  .addHeader("Authorization", TOKEN)
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
