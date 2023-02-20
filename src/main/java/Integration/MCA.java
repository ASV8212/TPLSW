package Integration;


import CommonModel.*;
import Controls.*;
import Controls.JInterfaceCall;
import Controls.WInterfaceCall;

import java.sql.*;
import java.util.ArrayList;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.codehaus.jettison.json.JSONObject;

public class MCA {

  public static void main(String[] args) throws Exception {
    System.out.println("True");
  }

  public static String CheckReqRS(String Param1,String Param2,String Param3,String Param4,String Param5,String SPName) {
 
    String DBSrc=null;    
    ArrayList<String> Data=new ArrayList<String>();
    
	String AsgnCmpltURL = "";
	String Request="";
	String UIQPKID = "";
	String EndPoint="";
	String UIQID = "";
	String xml = "";
	String spname = "";
	String Intrresponse = "";
    String ErrorMsg = "";
    String SoapAction="";
	HttpPost post;
	HttpResponse response;
	String line="";
	HttpClient client;
	StringBuffer response1;
	StringBuffer result;
	String Status="";
	String Message="";    
    String ProcessID = "No Data";
    String ActivityID = "No Data";
    String AcceptURL = "";
    String Referer="";
    String REQID="";
    String MSG="";
    String REQTYPE= "";
    String UNIQUEID1=""; //1st API
	String Request1="";  //1st API
	String EndPoint1="";  //1st API
	String RespHead ="";   //1st API
			
    String UNIQUEID2=""; //2st API
	String Request2="";  //2st API
	String EndPoint2="";  //2st API
	
    String UNIQUEID3="";  //3st API
	String Request3="";   //3st API
	String EndPoint3="";  //3st API
	String ReceiptNo="";  //3st API
	String APISELECTION = "";
	String FNLResp= "";
	
	String APITYP = "";

	
	Connection con = DBConnection.getConnection(DBSrc);
	PreparedStatement proc_stmt = null;
	ResultSet rs = null;
	
    try {
   
    	// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
		
    	REQTYPE="";
		proc_stmt = con.prepareStatement("{ call LSW_SOVRALLHNDLMCA (?,?,?,?,?) }");		

		proc_stmt.setString(1, Param2); // PRCSID
		proc_stmt.setString(2, Param1); //CIN NO
		proc_stmt.setString(3, ""); 
		proc_stmt.setString(4, ""); 
		proc_stmt.setString(5, ""); 

		rs = proc_stmt.executeQuery();
		
		ResultSetMetaData rsmd = rs.getMetaData();
		int colCount = rsmd.getColumnCount();
		
		while (rs.next()) {
			//Request1 = rs.getString(1);
			EndPoint1 = rs.getString(1);
			Referer  = rs.getString(2);
			UIQPKID  = rs.getString(3);
			UIQID  = rs.getString(5);
			APITYP = rs.getString(6);
			//UIQID = rs.getString(4);
			//MSG  = rs.getString(5);
			}
	
		Connections.Call(proc_stmt,rs,con,"Commit");
	
		if(APITYP.contains("datastatus")) {
		Intrresponse = MCAGInterfaceCall.JInterfaceCallSrv(EndPoint1, "",UIQID,UIQPKID,Referer);
	
	
	
	
		String Reponse[] = Intrresponse.split("~");
	
		Intrresponse = Reponse[0];
	
		ErrorMsg = Reponse[1];
		
		//RespHead = Reponse[2];
		
		FNLResp = Intrresponse;
		if (FNLResp.contains("last_details_updated"))
		{
		APISELECTION = "2";
		REQTYPE="update";
		proc_stmt = con.prepareStatement("{ call LSW_SOVRALLHNDLMCA (?,?,?,?,?) }");
		
		/*proc_stmt.setString(1, APISELECTION); // API SELECTION
		proc_stmt.setString(2, UNIQUEID1); // UNIQUEID FROM 1 
		proc_stmt.setString(3, Intrresponse);  // RESPONSE FROM 1
		proc_stmt.setString(4, ""); 
		proc_stmt.setString(5, RespHead); 
		proc_stmt.setString(6, Param2); 
		proc_stmt.setString(7, Param1); // PRCSID*/
		proc_stmt.setString(1, Param2); // PRCSID
		proc_stmt.setString(2, Param1); //CIN NO
		proc_stmt.setString(3, Intrresponse); //PREV RESP 
		proc_stmt.setString(4, "update");  //EXPECTED NXT HIT
		proc_stmt.setString(5, UIQID); //TO UPDATE PREV RECRD WITH RESP
	
		rs = proc_stmt.executeQuery();
			
		while (rs.next()) {
			EndPoint1 = rs.getString(1);
			if(EndPoint1.contains("FULFILLED"))
			{
				return EndPoint1;
			}
			else {
			Referer  = rs.getString(2);
			UIQPKID  = rs.getString(3);
			UIQID  = rs.getString(5);
			APITYP = rs.getString(6);
			}
			}
			
		Connections.Call(proc_stmt,rs,con,"Commit");
		
		
		
		if(APITYP.contains("update")) {
			Intrresponse = MCAPInterfaceCall.JInterfaceCallSrv(EndPoint1, "",UIQID,UIQPKID,Referer);
		}
		
		String Reponse1[] = Intrresponse.split("~");
		
		Intrresponse = Reponse1[0] ;
		
		//Intrresponse = "{\"Result\":" +  Reponse1[0] + "}" ;
		//Intrresponse = Reponse1[0];
		ErrorMsg = Reponse1[1];
		
		//Intrresponse = Intrresponse.replaceAll("^\\[|\\]$", "");
		
		FNLResp = Intrresponse;
		
		//JSONObject jsonObj1 = new JSONObject(Intrresponse.toString());
		//ReceiptNo = jsonObj1.getString("receiptNo");
		
		//JSONObject jsonObj2 = new JSONObject(Intrresponse.toString());
		//ReceiptNo = jsonObj2.getString("Result");
		
		/*
		 * JSONObject jsonObj3 = new JSONObject(Intrresponse.toString()); ReceiptNo =
		 * jsonObj3.getString("receiptNo");
		 */
		
		//JSONObject json = new JSONObject(Intrresponse);
		//String xml_data = XML.toString(json);
		APISELECTION = "3";
		REQTYPE="get-update-status";
		proc_stmt = con.prepareStatement("{ call LSW_SOVRALLHNDLMCA (?,?,?,?,?) }");
		
		proc_stmt.setString(1, Param2); // PRCSID
		proc_stmt.setString(2, Param1); //CIN NO
		proc_stmt.setString(3, Intrresponse); //PREV RESP 
		proc_stmt.setString(4, "get-update-status");  //EXPECTED NXT HIT
		proc_stmt.setString(5, UIQID); //TO UPDATE PREV RECRD WITH RESP
		
		rs = proc_stmt.executeQuery();
			
		while (rs.next()) {
			EndPoint1 = rs.getString(1);
			Referer  = rs.getString(2);
			UIQPKID  = rs.getString(3);
			UIQID  = rs.getString(5);
			APITYP = rs.getString(6);
		}
		
		Connections.Call(proc_stmt,rs,con,"Commit");
		
		
		if(APITYP.contains("get-update-status")) {
		Intrresponse = MCAGInterfaceCall.JInterfaceCallSrv(EndPoint1, "",UIQID,UIQPKID,Referer);
		}
		String Reponse2[] = Intrresponse.split("~");
		
		Intrresponse = Reponse2[0];
		
		ErrorMsg = Reponse2[1];
		
		FNLResp = Intrresponse;
		
		APISELECTION = "4";
		
		proc_stmt = con.prepareStatement("{ call LSW_SOVRALLHNDLMCA (?,?,?,?,?) }");
		
		proc_stmt.setString(1, Param2); // PRCSID
		proc_stmt.setString(2, Param1); //CIN NO
		proc_stmt.setString(3, Intrresponse); //PREV RESP 
		proc_stmt.setString(4, "reports");  //EXPECTED NXT HIT
		proc_stmt.setString(5, UIQID); //TO UPDATE PREV RECRD WITH RESP
		
		rs = proc_stmt.executeQuery();
			
		while (rs.next()) {
		Request3 = rs.getString(1);
		//UNIQUEID3  = rs.getString(2);
		//EndPoint3  = rs.getString(3);
		//UIQID = rs.getString(4);
		//MSG  = rs.getString(5);
		}
		
		Connections.Call(proc_stmt,rs,con,"Commit");
		
		/////END
		}
		else {
			APISELECTION = "ERRUPD";
			proc_stmt = con.prepareStatement("{ call LSW_SOVRALLHNDLMCA (?,?,?,?,?) }");

			proc_stmt.setString(1, Param2); // API SELECTION
			proc_stmt.setString(2, Param1); // UNIQUEID FROM 2 
			proc_stmt.setString(3, Intrresponse);  // RESPONSE FROM 2
			proc_stmt.setString(4, APISELECTION); 
			proc_stmt.setString(5, REQTYPE+"|"+UIQID); 

			rs = proc_stmt.executeQuery();
				
			while (rs.next()) {
			Request3 = rs.getString(1);
			//UNIQUEID3  = rs.getString(2);
			//EndPoint3  = rs.getString(3);
			//UIQID = rs.getString(4);
			//MSG  = rs.getString(5);
		}
			Connections.Call(proc_stmt,rs,con,"Commit");
		}
		
	}
	else if(APITYP.contains("get-update-status")) {
		Intrresponse = MCAGInterfaceCall.JInterfaceCallSrv(EndPoint1, "",UIQID,UIQPKID,Referer);
		String Reponse2[] = Intrresponse.split("~");

		Intrresponse = Reponse2[0];

		ErrorMsg = Reponse2[1];

		FNLResp = Intrresponse;		
		
		APISELECTION = "4";

		proc_stmt = con.prepareStatement("{ call LSW_SOVRALLHNDLMCA (?,?,?,?,?) }");

		proc_stmt.setString(1, Param2); // PRCSID
		proc_stmt.setString(2, Param1); //CIN NO
		proc_stmt.setString(3, Intrresponse); //PREV RESP 
		proc_stmt.setString(4, "reports");  //EXPECTED NXT HIT
		proc_stmt.setString(5, UIQID); //TO UPDATE PREV RECRD WITH RESP

		rs = proc_stmt.executeQuery();
			
		while (rs.next()) {
		Request3 = rs.getString(1);
		//UNIQUEID3  = rs.getString(2);
		//EndPoint3  = rs.getString(3);
		//UIQID = rs.getString(4);
		//MSG  = rs.getString(5);
		/*
		 * EndPoint1 = rs.getString(1); Referer = rs.getString(2); UIQPKID =
		 * rs.getString(3); UIQID = rs.getString(5); APITYP = rs.getString(6);
		 */
		}

		Connections.Call(proc_stmt,rs,con,"Commit");
		
		/*
		 * if(FNLResp.contains("\"status\":\"FULFILLED\"")) { Intrresponse =
		 * MCAGInterfaceCall.JInterfaceCallSrv(EndPoint1, "",UIQID,UIQPKID,Referer);
		 * String Reponse21[] = Intrresponse.split("~");
		 * 
		 * Intrresponse = Reponse21[0];
		 * 
		 * ErrorMsg = Reponse21[1];
		 * 
		 * FNLResp = Intrresponse; }
		 */
		
	}
else
{
	APISELECTION = "ERRUPD";
	proc_stmt = con.prepareStatement("{ call LSW_SOVRALLHNDLMCA (?,?,?,?,?) }");

	proc_stmt.setString(1, Param2); // API SELECTION
	proc_stmt.setString(2, Param1); // UNIQUEID FROM 2 
	proc_stmt.setString(3, Intrresponse);  // RESPONSE FROM 2
	proc_stmt.setString(4, APISELECTION); 
	proc_stmt.setString(5, REQTYPE+"|"+UIQID); 

	rs = proc_stmt.executeQuery();
		
	while (rs.next()) {
	Request3 = rs.getString(1);
	//UNIQUEID3  = rs.getString(2);
	//EndPoint3  = rs.getString(3);
	//UIQID = rs.getString(4);
	//MSG  = rs.getString(5);
	}

	Connections.Call(proc_stmt,rs,con,"Commit");
	
}
	
    }
		catch (Exception e)
		{
			try
			{
				APISELECTION = "ERRUPD";
				proc_stmt = con.prepareStatement("{ call LSW_SOVRALLHNDLMCA (?,?,?,?,?) }");

				proc_stmt.setString(1, Param2); // API SELECTION
				proc_stmt.setString(2, Param1); // UNIQUEID FROM 2 
				proc_stmt.setString(3, e.toString());  // RESPONSE FROM 2
				proc_stmt.setString(4, APISELECTION); 
				proc_stmt.setString(5, REQTYPE+"|"+UIQID); 

				rs = proc_stmt.executeQuery();
					
				while (rs.next()) {
				Request3 = rs.getString(1);
				//UNIQUEID3  = rs.getString(2);
				//EndPoint3  = rs.getString(3);
				//UIQID = rs.getString(4);
				//MSG  = rs.getString(5);
				}

				Connections.Call(proc_stmt,rs,con,"Commit");
			}
			catch  (Exception e1)
			{
				Connections.Call(proc_stmt,rs,con,"Rollback");
				ProcessID = "No Data";
				ActivityID = "No Data";
				e1.printStackTrace();
			
			}
			Connections.Call(proc_stmt,rs,con,"Rollback");
			ProcessID = "No Data";
			ActivityID = "No Data";
			
			FNLResp = e.toString();
			
			e.printStackTrace();
		}
				finally {
			        
					Connections.Call(proc_stmt,rs,con,"Close");
					
			    }		
				
   		
   // return ProcessID +"~" + ActivityID + "~" + ReceiptNo + "~" + FNLResp;
    return Request3;
  }
  
  
}