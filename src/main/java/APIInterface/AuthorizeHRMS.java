package APIInterface;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import Controls.GetDBData;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class AuthorizeHRMS {
	public String hrmsHandler(HttpServletRequest request) {
		String resp = "";
		String spname = "LSW_SHRMSREQCREATE";
		String token = "";
		String usrID = request.getParameter("UsrID");
		InputStream inputStream = null;
		try {
			String requrl = "";
			String propFileName = "DBSource.properties";

			Properties prop = new Properties();

			String fileName = "";
			fileName = System.getProperty("catalina.base");
			fileName = String.valueOf(fileName) + "/conf/" + propFileName;
			inputStream = new FileInputStream(fileName);
			if (inputStream != null) {
				prop.load(inputStream);
			}
			if (prop.getProperty("HRMSAUTH").equals("YES")) {
				ArrayList<String> data = new ArrayList<String>();
				data = GetDBData.Call(usrID, "", "", "", "", spname);
				requrl = data.get(0);
				token = data.get(1);

				OkHttpClient client = new OkHttpClient().newBuilder().build();
				MediaType mediaType = MediaType.parse("text/plain");
				RequestBody body = RequestBody.create(mediaType, "");
				Request req = new Request.Builder().url(requrl).method("POST", body).build();
				Response response = client.newCall(req).execute();
				
				String intrrep = response.body().string();
				data.clear();
				data = GetDBData.Call(intrrep, token, "", "", "", spname + "_UPD");
				resp = data.get(0);
			} else {
				resp = "HRMS Inactive";
			}

		} catch (Exception e) {
			e.printStackTrace();
			GetDBData.Call(e.getMessage(), token, usrID, "", "", spname + "_EX");
		} finally {
			try {
				if (inputStream != null) {
					inputStream.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
				GetDBData.Call(e.getMessage(), token, usrID, "", "", spname + "_EX");
			}
		}
		return resp;
	}
}
