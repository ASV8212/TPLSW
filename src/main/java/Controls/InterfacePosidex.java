package Controls;


import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

public class InterfacePosidex {

	/*public static void main(String a[]) throws Exception
{
	InterfacePosidexService("https://appsuat.tvscredit.com/tvs/vs/enquiryservice.do", "name=doenquiry&key=5dfd585c8f4264333a6b7a3df9afc3fd324bd1c5042533abaf865454caa8bb6e&action=I&data={\"enquirynumber\":\"POSDEX000001\",\"product\":\"CD\",\"applicanttype\":\"BORROWER\",\"applicantid\":\"1\",\"firstname\":\"VENKATESH\",\"lastname\":\"R\",\"fathername\":\"RAJASEKARAN\",\"gender\":\"M\",\"dob\":\"10/05/1991\",\"registrationno\":\"\",\"addresslist\":[{\"address\":\"MHFDMUFDYMFDMGCNHVSNYFDJBFDFH\",\"state\":\"MAHARASHTRA\",\"pincode\":\"440036\",\"addresstype\":\"RS\"},{\"address\":\"MHFDMUFDYMFDMGCNHVSNYFDJBFDFH\",\"state\":\"MAHARASHTRA\",\"pincode\":\"440036\",\"addresstype\":\"PR\"},{\"address\":\"JHFXJGCXTRSIYTEGIRSJHTDKHFD\",\"state\":\"MAHARASHTRA\",\"pincode\":\"440036\",\"addresstype\":\"OF\"}],\"contactlist\":[{\"contacttype\":\"01\",\"contactno\":\"9952396587\"}]}", "application/x-www-form-urlencoded", "");
}*/
	public static String InterfacePosidexService(String URL,String XML,String ContentType,String Uniqid) throws Exception
	{
		String resString=null;
		String resMessage=null;
		
		System.out.println(" Interface Start "+ Uniqid);
		try
		{
			OkHttpClient client = new OkHttpClient();

			MediaType mediaType = MediaType.parse(ContentType);
			RequestBody body = RequestBody.create(mediaType, XML);
			System.out.println("XML "+ XML);
			Request request = new Request.Builder()
			  .url(URL)
			  .post(body)
			  .addHeader("cache-control", "no-cache")
			  .addHeader("content-type", ContentType)
			  .build();

			Response resp = client.newCall(request).execute();
			
			System.out.println("InterfaceRest Response Code "+ resp.code());

			if(resp.code()==200)
			{
				resString="Success";
				resMessage=resp.body().string();
			}
			else
			{
				resString="Error";
				resMessage=resp.body().string();
			}
			resp.body().close();
			
			System.out.println("Interface End "+ Uniqid);	
		}
		catch(Exception ei)
		{
			ei.printStackTrace();
			resString="Exception";
			resMessage=ei.toString();
			return resString+"!@#"+resMessage;
		}
		return resString+"!@#"+resMessage;
	}
	
	
}
