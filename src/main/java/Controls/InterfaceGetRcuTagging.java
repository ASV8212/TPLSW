package Controls;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class InterfaceGetRcuTagging {
  public String interfaceGetRcudetailsHndlr(String url, String header) {
    String resp = "";
    String flg = "";
    String msg = "";
    try {
    	OkHttpClient client = new OkHttpClient().newBuilder().build();
    	MediaType mediaType = MediaType.parse("text/plain");
    	RequestBody body = RequestBody.create(mediaType, "");
    	Request request = new Request.Builder().url(url).method("POST", body).addHeader("Referer", header).build();
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
    resp = String.valueOf(flg) + "~" + msg;
    return resp;
  }
}
