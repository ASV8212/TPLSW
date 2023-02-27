package APIInterface;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Properties;

import org.apache.commons.io.IOUtils;
import org.apache.http.HttpResponse;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.NTCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.json.JSONObject;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import Controls.GetDBData;

@Configuration
public class SSRSReportingServices {

	@Bean
	public static byte[] httpClient(String obj) {
		byte[] bytes = null;
		try {
			URL songPath = APIInterface.SSRSReportingServices.class.getResource("");
			String[] pathArr = songPath.toString().split("file:/|/apache");
			String Path = pathArr[1];
			String usrpswd="";
			FileInputStream fis = null;
			Properties prop = new Properties();
			fis = new FileInputStream(String.valueOf(Path)+"/wflow/app_datasource.properties");
			//fis = new FileInputStream(
					//"G:/ThemeproLO_Works/Product/wflow/app_datasource.properties");
			if (fis != null) {
				prop.load(fis);
				usrpswd = prop.getProperty("FEPSSRSPassword");

				fis.close();
			} else {
				throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");

			}
			String user = usrpswd.split(":")[0];
			String password = usrpswd.split(":")[1];
			ArrayList<String> data = new ArrayList<String>();
			
			//String reportname = obj.getJSONObject("Request").getString("reportname");
			
			data = GetDBData.Call(obj.toString(), "", "", "", "", "LSW_SGETSSRSURL");
			
			String domain = data.get(0);
			CredentialsProvider credentialsProvider = new BasicCredentialsProvider();
			credentialsProvider.setCredentials(AuthScope.ANY, new NTCredentials(user, password, null, domain));

			CloseableHttpClient httpclient = HttpClientBuilder.create()
					.setDefaultCredentialsProvider(credentialsProvider).build();
			HttpResponse response = httpclient.execute(new HttpGet(domain));

			InputStream inputStream = response.getEntity().getContent();
			bytes = IOUtils.toByteArray(inputStream);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return bytes;
	}

}
