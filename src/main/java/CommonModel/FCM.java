package CommonModel;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;


public class FCM {

final static private String FCM_URL = "https://fcm.googleapis.com/fcm/send";

/**
* 
* Method to send push notification to Android FireBased Cloud messaging Server.
* 
* @param tokenId Generated and provided from Android Client Developer
* @param server_key Key which is Generated in FCM Server 
* @param message which contains actual information.
* @return 
* 
*/

public static String send_FCM_Notification(String Json, String server_key,String FCMURL){

	String Result="";
try{

// Create URL instance.

URL url = new URL(FCMURL);

// create connection.

HttpURLConnection conn;

conn = (HttpURLConnection) url.openConnection();

conn.setUseCaches(false);

conn.setDoInput(true);

conn.setDoOutput(true);

//set method as POST or GET

conn.setRequestMethod("POST");

//pass FCM server key

conn.setRequestProperty("Authorization","key="+server_key);

//Specify Message Format

conn.setRequestProperty("Content-Type","application/json");

//Create JSON Object & pass value

//tokenId = "[" + tokenId + "]";

/*JSONObject infoJson = new JSONObject();

infoJson.put("title",title);

infoJson.put("body", message);

JSONObject json = new JSONObject();

//json.put("registration_ids",new JSONArray(Arrays.asList(tokenId)));
json.put("registration_ids",tokenId);
json.put("notification", infoJson);
*/
OutputStreamWriter wr = new OutputStreamWriter(conn.getOutputStream());


//wr.write(Json.toString());

wr.write(Json);

wr.flush();

int status = 0;

if( null != conn ){

status = conn.getResponseCode();

}

if( status != 0){

if( status == 200 ){

//SUCCESS message

BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));

Result="Android Notification Response : " + reader.readLine();
System.out.println("Android Notification Response : " + reader.readLine());
}else if(status == 401){

//client side error

	Result="Notification Response : TokenId : " + Json + " Error occurred :";
	System.out.println("Notification Response : TokenId : " + Json + " Error occurred :");
}else if(status == 501){

//server side error

	Result="Notification Response : [ errorCode=ServerError ] TokenId : " + Json;
	System.out.println("Notification Response : [ errorCode=ServerError ] TokenId : " + Json);
}else if( status == 503){

//server side error

	Result="Notification Response : FCM Service is Unavailable  TokenId : " + Json;
	System.out.println("Notification Response : FCM Service is Unavailable  TokenId : " + Json);
}

}

}catch(MalformedURLException mlfexception){

// Prototcal Error
	Result="Error occurred while sending push Notification!.." + mlfexception.getMessage();
System.out.println("Error occurred while sending push Notification!.." + mlfexception.getMessage());

}catch(IOException mlfexception){

//URL problem
	Result="Reading URL, Error occurred while sending push Notification!.." + mlfexception.getMessage();
System.out.println("Reading URL, Error occurred while sending push Notification!.." + mlfexception.getMessage());

}//catch(JSONException jsonexception){

//Message format error
////	Result="Message Format, Error occurred while sending push Notification!.." + jsonexception.getMessage();
//System.out.println("Message Format, Error occurred while sending push Notification!.." + jsonexception.getMessage());

//}
catch (Exception exception) {

//General Error or exception.
	Result="Error occurred while sending push Notification!.." + exception.getMessage();
System.out.println("Error occurred while sending push Notification!.." + exception.getMessage());

}

return Result;
}

}


