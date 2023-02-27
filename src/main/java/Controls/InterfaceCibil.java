package Controls;

import java.io.*;
import java.security.*;
import java.util.Arrays;
import javax.net.ssl.*;
import okhttp3.*;

public class InterfaceCibil {
	public String commercialHndlr(String url, String memberRefID, String cusRefID, String apiKey, String payload,String cibilpassword) {
		String resp = "";
		String flg = "";
		String msg = "";
		try {
			KeyManagerFactory keyManagerFactory;
			// Password set when creating the certificate
			final char[] PASSWORD = cibilpassword.toCharArray();
			InputStream inputStream;
			TrustManagerFactory trustManagerFactory;
			SSLSocketFactory sslSocketFactory;
			X509TrustManager trustManager;
			// Specifying the client certificate file(Place it in the assets folder)
			String CertWithKey = "G:/Application/LOS/SSL/p12/TVSUATp12New.p12";
			File securityFileKey = new File(CertWithKey);
			inputStream = new FileInputStream(securityFileKey);
			// As a reference, this extension was p12, so isn't that the case?
			KeyStore keyStore = KeyStore.getInstance("PKCS12");
			// From here on down, you can copy and paste without thinking about anything
			keyStore.load(inputStream, PASSWORD);
			trustManagerFactory = TrustManagerFactory.getInstance("PKIX");
			trustManagerFactory.init(keyStore);
			TrustManager[] trustManagers = trustManagerFactory.getTrustManagers();
			if (trustManagers.length != 1 || !(trustManagers[0] instanceof X509TrustManager)) {
				throw new IllegalStateException("Unexpected default trust managers:" + Arrays.toString(trustManagers));
			}
			trustManager = (X509TrustManager) trustManagers[0];
			keyManagerFactory = KeyManagerFactory.getInstance("SunX509");
			keyManagerFactory.init(keyStore, PASSWORD);
			SSLContext sslContext = SSLContext.getInstance("TLSv1.2");

			sslContext.init(keyManagerFactory.getKeyManagers(), null, null);
			sslSocketFactory = sslContext.getSocketFactory();
			// Copy and paste so far
			OkHttpClient client = new OkHttpClient.Builder().sslSocketFactory(sslSocketFactory, trustManager).build();
			MediaType mediaType = MediaType.parse("application/json ; charset=utf-8");
			RequestBody body = RequestBody.create(mediaType, payload);
			Request request = new Request.Builder().url(url).method("POST", body)
					.addHeader("member-ref-id", memberRefID).addHeader("cust-ref-id", cusRefID)
					.addHeader("apikey", apiKey).addHeader("Accept", "application/json")
					.addHeader("Content-Type", "application/json").build();
			Response response = client.newCall(request).execute();

			if (response.code() == 200) {
				flg = "Success";
				msg = response.body().string();
			} else {
				flg = "Error";
				msg = response.body().string();
			}
			response.close();
			System.out.println(flg);
			System.out.println(msg);
			resp = flg + "~" + msg;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return resp;
	}

}