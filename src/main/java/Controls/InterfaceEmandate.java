package Controls;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

public class InterfaceEmandate {

//	public static void main(String a[]) throws Exception
//	{
//		try
//		{
//			
//			System.out.println("Output "+ InterfaceEmandate.InterfaceEmandateService("https://appsuat.tvscredit.com/tvs/api/emandateServlet","name=initiateRequest&key=CFA9E2F82A09F844F498B4F8CC2DAC60A72FC40D809284A48A2908AD5AC3F136&data={\"reference_no\" : \"CSDY000287\",\"applied_loan_amount\" : \"107\",\"application_name\" : \"testing\",\"Emi\" : \"45.62\",\"Customer_Name\": \"narendar\",\"Customer_EmailId\": \"narendarrao.cv@tvscredit.com\",\"Customer_Mobile\": \"9941084300\",\"Customer_AccountNo\": \"50100104828488\",\"Customer_StartDate\": \"2022-01-18\",\"Customer_ExpiryDate\": \"2022-02-02\",\"Customer_DebitAmount\": \"0.0\",\"Customer_MaxAmount\": \"2000.00\",\"Customer_DebitFrequency\": \"ADHO\",\"Customer_SequenceType\": \"RCUR\",\"Customer_InstructedMemberId\": \"HDFC0000795\",\"Customer_Reference1\": \" CSDY000207\",\"Customer_Reference2\": \"gopi\",\"Channel\": \"Net\",\"PanNumber\": \"BDLPN9291B\",\"AccountType\": \"o\",\"BankCode\": \"240\",\"Port_Folio\": \"TW\",\"BranchCode\":\"3000\",\"LOSBankCode\":\"240\",\"Applicant_Type\":\"Borrower\"}", "2143523423").split("~")[1]);
//			
//		}catch(Exception IEM)
//		{
//			IEM.printStackTrace();
//		}
//	}
	
		public static String InterfaceEmandateService(String URL,String XML,String UNIQID) throws Exception
		{
			String resString=null;
			String resMessage=null;
			
			System.out.println(" Interface Start "+ UNIQID);
			try
			{
				OkHttpClient client = new OkHttpClient();

				MediaType mediaType = MediaType.parse("application/x-www-form-urlencoded");
				RequestBody body = RequestBody.create(mediaType, XML);
				System.out.println("XML "+ XML);
				Request request = new Request.Builder()
				  .url(URL)
				  .post(body)
				  .addHeader("cache-control", "no-cache")
				  .addHeader("content-type", "application/x-www-form-urlencoded")
				  .build();

				Response resp = client.newCall(request).execute();
				
				System.out.println("Interface Response Code "+ resp.code());

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
				
				System.out.println(" Interface End "+ UNIQID);	
			}
			catch(Exception ei)
			{
				ei.printStackTrace();
				resString="Exception";
				resMessage=ei.toString();
			}
			return resString+"~"+resMessage;
		}
		
			
}

