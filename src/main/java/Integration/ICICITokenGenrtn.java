package Integration;


//import org.apache.http.impl.client.HttpClientBuilder;

import com.itextpdf.text.pdf.codec.Base64;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;


//import org.json.JSONException;
//import org.json.JSONObject;



public class ICICITokenGenrtn {

	public static String ICICIInsuranceInterfaceCallSrv(String CntntURL,String Strval,String Type) {

		String OutRst;
		//String Strval ="";
		//String CntntURL="";
		String Username="";
		String Password="";
		String customerid="";
		String accesscode="";
		String requestFormat="";
		//String Type="";
			  
		  String responseString = "";
			String outputString = "";
			String ErrorMsg = "";
			String Respheader ="";

			String Result="";
			String FnlVal="";
			int status;	
				try {	
			//System. out. print("Interface Start");
			
					String plainClientCredentials=Type+":"+Strval;
					String base64ClientCredentials = new String(Base64.encodeBytes(plainClientCredentials.getBytes()));
					 
					
					OkHttpClient client = new OkHttpClient();

				 	Request request = new Request.Builder()
				 	  .url(CntntURL)
				 	  .post(null)
				 	 .addHeader("authorization", "Basic "+base64ClientCredentials)
				 	 
				 	  .build();

				 	Response response = client.newCall(request).execute();
				 	
				 	
				 	
					System.out.println(response.code());
					
					
				
				 	
				 	System.out.println(outputString);
				 	
				 	if (response.code() == 200)
				 	{			 		
				 		ErrorMsg = "Success";
				 		outputString = response.body().string();
				 	}
				 	else
				 	{
				 		 outputString = response.body().string();
						ErrorMsg = outputString;
				 	}		 		
				 	response.body().close();
		 	
	}
		catch (Exception e) {
			ErrorMsg = e.toString();
			 
			
			 outputString = "{\"Status\":\"ERROR\",\"errors\":[{\"errorCode\":\"GCPP_002\",\"errorMessage\":\""+ErrorMsg+"\"}]}";
			 
			e.printStackTrace();

		}
			 	
			 	
			 	
					
	    return outputString + "~" + ErrorMsg ;
	}

}
