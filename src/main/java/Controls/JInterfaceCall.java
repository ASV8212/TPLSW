
package Controls;

import com.squareup.okhttp.Response;
import java.io.IOException;
//import java.util.ArrayList;
import java.util.ArrayList;

//import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.OkHttpClient;

public class JInterfaceCall
{
    public static String JInterfaceCallSrv( String URL,  String XML,  String UIQID,  String UIQPKID,  String SoapAction) {
        String responseString = "";
        String outputString = "";
        String ErrorMsg = "";
        ArrayList<String> InsData = new ArrayList<String>();
        
        try {
             String POST_PARAMS = XML;
            System.out.println(POST_PARAMS);
             OkHttpClient client = new OkHttpClient();
             Request request = new Request.Builder()
            		 .url(URL + "?" + POST_PARAMS)
            		 .post(null)
            		 .addHeader("cache-control", "no-cache")
            		 .addHeader("Referer", SoapAction).build();
             Response response = client.newCall(request).execute();
            

		    InsData = GetDBData.Call("INSERT", request.toString(), "", "", "", "LSW_SSTRACTIVITYLOG");
		 	      String TValue = InsData.get(0);
            
            System.out.println(response.code());
            System.out.println(outputString);
            
           // System.out.println(response.body().string());
            
            if (response.code() == 200) 
            {
                ErrorMsg = "Success";
                outputString = response.body().string();
                
                InsData = GetDBData.Call("UPDATE", outputString, TValue, "", "", "LSW_SSTRACTIVITYLOG");
            }
            else 
            {
                outputString = "ERROR";
                ErrorMsg = "Service Returned Error with #" + response.code() +'#'+ response.body().string();
                
                InsData = GetDBData.Call("UPDATE", ErrorMsg, TValue, "", "", "LSW_SSTRACTIVITYLOG");
            }
        }
        catch (IOException e) {
            ErrorMsg = e.toString();
            outputString = "ERROR";
            e.printStackTrace();
        }
        return outputString + "~" + ErrorMsg;
    }
}
