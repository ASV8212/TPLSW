package Integration;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.TreeMap;
import org.codehaus.jettison.json.JSONObject;
import CommonModel.DBConnection;
import Controls.Connections;
import Controls.GetDBData;

import com.paytm.pg.merchant.*;
import com.paytm.pg.merchant.CheckSumServiceHelper;


public class Paytmstatus {
	
	public static String PaymentStatus(String PRCSID,String PFID) {
	
		ArrayList<String> Data_LOG=new ArrayList<String>();
		String DBSrc=null;
		String checkSum="";
		String MID = "XXXXXXXXXXXXXXXXXXXXXXXX"; 
		String MercahntKey = "XXXXXXXXXXXXXXXX";
		String ORDER_ID = "";
		String responseData = "";
		String URL="";
		String CODE="";
		String MSG="";
		Connection con = DBConnection.getConnection(DBSrc);
		
		PreparedStatement proc_stmt = null;
		ResultSet rs = null;

		String RESULT ="";
		
	    try {
	    	proc_stmt = con.prepareStatement("{ call LSW_SPAYMENTSTATUS (?,?,?,?,?) }");		

			proc_stmt.setString(1, PRCSID);
			proc_stmt.setString(2, PFID);
			proc_stmt.setString(3, "");
			proc_stmt.setString(4, "");
			proc_stmt.setString(5, "");

			 rs = proc_stmt.executeQuery();
			 
			 while (rs.next()) {			
					
					MID 				=	rs.getString(1);
					ORDER_ID 			=	rs.getString(2);	
					MercahntKey			=	rs.getString(3);
					URL                 =	rs.getString(4);

				}

				Connections.Call(proc_stmt,rs,con,"Commit");
				
				TreeMap<String,String> paramMap = new TreeMap<String,String>();
				paramMap.put("MID" , MID);
				paramMap.put("ORDER_ID" , ORDER_ID);

				/* initialize an object */
				JSONObject paytmParams = new JSONObject();

				/* body parameters */
				JSONObject body = new JSONObject();

				/* Find your MID in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys */
				body.put("mid", MID);

				/* Enter your order id which needs to be check status for */
				body.put("orderId", ORDER_ID);

				/**
				* Generate checksum by parameters we have in body
				* You can get Checksum JAR from https://developer.paytm.com/docs/checksum/
				* Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
				*/
				String checksum = PaytmChecksum.generateSignature(body.toString(), MercahntKey);
				
				/*try{
					checkSum =  CheckSumServiceHelper.getCheckSumServiceHelper().genrateCheckSum(MercahntKey, paramMap);
					paramMap.put("CHECKSUMHASH" , checkSum);
					
					System.out.println("Paytm Payload: "+ paramMap);
					
					}catch(Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}*/
				
				/* head parameters */
				JSONObject head = new JSONObject();

				/* put generated checksum value here */
				head.put("signature", checksum);

				/* prepare JSON string for request */
				paytmParams.put("body", body);
				paytmParams.put("head", head);
				String post_data = paytmParams.toString();

				/* for Staging */
				URL url = new URL(URL);

				/* for Production */
				// URL url = new URL("https://securegw.paytm.in/v3/order/status");

				try {
				    HttpURLConnection connection = (HttpURLConnection) url.openConnection();
				    connection.setRequestMethod("POST");
				    connection.setRequestProperty("Content-Type", "application/json");
				    connection.setDoOutput(true);

				    DataOutputStream requestWriter = new DataOutputStream(connection.getOutputStream());
				    requestWriter.writeBytes(post_data);
				    requestWriter.close();
				    
				    InputStream is = connection.getInputStream();
				    BufferedReader responseReader = new BufferedReader(new InputStreamReader(is));
				    if ((responseData = responseReader.readLine()) != null) {
				    	
				    	System.out.append("Response: " + responseData);
				    	Connection con1 = DBConnection.getConnection(DBSrc);
			    		PreparedStatement proc_stmt1 = null;
			    		ResultSet rs1 = null;
				    	
				    	try {
				    		proc_stmt1 = con1.prepareStatement("{ call LSW_SPAYMENTSTATUSUPD (?,?,?,?,?) }");		

				    		proc_stmt1.setString(1, responseData);
				    		proc_stmt1.setString(2, PRCSID);
				    		proc_stmt1.setString(3, PFID);
				    		proc_stmt1.setString(4, ORDER_ID);
				    		proc_stmt1.setString(5, checksum);

				    	  rs1 = proc_stmt1.executeQuery();
				    								 
				    	while (rs1.next()) {						 
				    			 RESULT  =	rs1.getString(1);
				    			 CODE =	rs1.getString(2);	
				    			 MSG =	rs1.getString(3);
				    		}

				    Connections.Call(proc_stmt1,rs1,con1,"Commit");
				    }
		catch (Exception e)
				{
				  Connections.Call(proc_stmt1,rs1,con1,"Rollback");		
				  e.printStackTrace();
			     }
			finally {		        
					  Connections.Call(proc_stmt1,rs1,con1,"Close");
					}	
				 }
				    // System.out.append("Request: " + post_data);
				    responseReader.close();
				} catch (Exception exception) {
				    exception.printStackTrace();
				}

	            }
				catch (Exception e)
				{
					
					Connections.Call(proc_stmt,rs,con,"Rollback");		
					e.printStackTrace();
				}
			finally {		        
							Connections.Call(proc_stmt,rs,con,"Close");
					}		
			    return responseData+'~'+CODE+'~'+MSG;
	}
}
