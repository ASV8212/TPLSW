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


//import org.json.JSONException;
//import org.json.JSONObject;


import java.net.HttpURLConnection;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;

public class JInterfaceCall {

public static String JInterfaceCallSrv(String URL,String XML, String UIQID,String UIQPKID,String SoapAction) {

 
 String responseString = "";
String outputString = "";
String ErrorMsg = "";
//System. out. print("Interface Start");
try {
   /*  System.out.print("param1="+param1+"param2="+param2+"param3="+param3+"param4="+param4+"param5="
    +param5+"spname="+spname+"spname2="+spname2+"spname3="+spname3); */  
     
String POST_PARAMS = XML;
System.out.println(POST_PARAMS);
okhttp3.OkHttpClient client = new okhttp3.OkHttpClient();

okhttp3.Request request = new okhttp3.Request.Builder()
 .url(URL + "?" + POST_PARAMS)
 .post(null)
 .addHeader("cache-control", "no-cache")
 //.addHeader("postman-token", "d2b5c33f-2fcd-e2da-c21c-221284adbd65")
.addHeader("Referer", SoapAction)
 .build();

okhttp3.Response response = client.newCall(request).execute();
System.out.println(response.code());
System.out.println(outputString);
if (response.code() == 200)
{
ErrorMsg = "Success";
outputString = response.body().string();
}
else
{
outputString = "ERROR";
ErrorMsg = "Service Returned Error with "+ response.code() + response.body().string();
}
/*URL obj = new URL(URL);
HttpURLConnection con1 = (HttpURLConnection) obj.openConnection();
//con1.setRequestMethod("POST");
con1.setDoOutput(true);
con1.setRequestMethod("POST");
con1.addRequestProperty("Referer", SoapAction);
//con1.setRequestProperty("Content-Type", "application/json");
// For POST only - START
DataOutputStream wr1 = new DataOutputStream(con1.getOutputStream());
wr1.writeBytes(POST_PARAMS);
wr1.flush();
wr1.close();
//con1.setRequestProperty("User-Agent", "Mozilla/5.0");
int responseCode = con1.getResponseCode();
System.out.println("POST Response Code :: " + responseCode);
if (responseCode == HttpURLConnection.HTTP_OK) { // success
BufferedReader in = new BufferedReader(new InputStreamReader(
con1.getInputStream()));
String inputLine;
StringBuffer response1 = new StringBuffer();

while ((inputLine = in.readLine()) != null) {
response1.append(inputLine);
}
in.close();
outputString = response1.toString();
ErrorMsg = "Success";
// print result
System.out.println("Json :" + response1.toString());
} else {
BufferedReader in = new BufferedReader(new InputStreamReader(
con1.getInputStream()));
String inputLine;
StringBuffer response1 = new StringBuffer();

while ((inputLine = in.readLine()) != null) {
response1.append(inputLine);
}
in.close();
outputString = "ERROR";
ErrorMsg = "Service Returned Error with "+ con1.getResponseCode() + response1.toString();
System.out.println("Json :" + response1.toString());
}
con1.disconnect();*/
}
        catch (IOException e) {
// TODO Auto-generated catch block
       
ErrorMsg = e.toString();
outputString = "ERROR";
e.printStackTrace();
}
   
// System. out. print("Interface End");
   return outputString + "~" + ErrorMsg;
}
}