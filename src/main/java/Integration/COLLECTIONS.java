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

public class COLLECTIONS {

  public static void main(String[] args) throws Exception {
    System.out.println("True");
  }

  public static String CollectionsPush(String Param1,String Param2,String Param3,String Param4,String Param5,String SPName) {
 
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

	
	Connection con = DBConnection.getConnection(DBSrc);
	PreparedStatement proc_stmt = null;
	ResultSet rs = null;
	
    try {
   
    	// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
		
    	REQTYPE="REQ-1";
		proc_stmt = con.prepareStatement("{ call LSW_SCOLLECTIONS_INPUT (?,?,?,?,?,?,?) }");		

		proc_stmt.setString(1, "1"); // API SELECTION
		proc_stmt.setString(2, ""); 
		proc_stmt.setString(3, ""); 
		proc_stmt.setString(4, ""); 
		proc_stmt.setString(5, ""); 
		proc_stmt.setString(6, Param2); // PFNO
		proc_stmt.setString(7, Param1); // PRCSID

		rs = proc_stmt.executeQuery();
		
		ResultSetMetaData rsmd = rs.getMetaData();
		int colCount = rsmd.getColumnCount();
		
	while (rs.next()) {
		Request1 = rs.getString(1);
		UNIQUEID1  = rs.getString(2);
		EndPoint1  = rs.getString(3);
		//UIQID = rs.getString(4);
		//MSG  = rs.getString(5);
	
		}
	
	Connections.Call(proc_stmt,rs,con,"Commit");
	
	Intrresponse = JSInterfaceCall.JInterfaceCallSrv(EndPoint1, Request1,UIQID,UIQPKID,Referer);
	
	String Reponse[] = Intrresponse.split("~");

	Intrresponse = Reponse[0];

	ErrorMsg = Reponse[1];
	
	RespHead = Reponse[2];
	
	FNLResp = Intrresponse;
	
	
	APISELECTION = "2";
	REQTYPE="REQ-2";
	proc_stmt = con.prepareStatement("{ call LSW_SCOLLECTIONS_INPUT (?,?,?,?,?,?,?) }");
	
	proc_stmt.setString(1, APISELECTION); // API SELECTION
	proc_stmt.setString(2, UNIQUEID1); // UNIQUEID FROM 1 
	proc_stmt.setString(3, Intrresponse);  // RESPONSE FROM 1
	proc_stmt.setString(4, ""); 
	proc_stmt.setString(5, RespHead); 
	proc_stmt.setString(6, Param2); 
	proc_stmt.setString(7, Param1); // PRCSID

	rs = proc_stmt.executeQuery();
		
while (rs.next()) {
	Request2 = rs.getString(1);
	UNIQUEID2  = rs.getString(2);
	EndPoint2  = rs.getString(3);
	RespHead  = rs.getString(4);
	//UIQID = rs.getString(4);
	//MSG  = rs.getString(5);
	}
	
Connections.Call(proc_stmt,rs,con,"Commit");



Intrresponse = JSInterfaceCall.JInterfaceCallSrv(EndPoint2, Request2,UIQID,RespHead,Referer);

String Reponse1[] = Intrresponse.split("~");

Intrresponse = Reponse1[0] ;

//Intrresponse = "{\"Result\":" +  Reponse1[0] + "}" ;
//Intrresponse = Reponse1[0];
ErrorMsg = Reponse1[1];

Intrresponse = Intrresponse.replaceAll("^\\[|\\]$", "");

FNLResp = Intrresponse;

//JSONObject jsonObj1 = new JSONObject(Intrresponse.toString());
//ReceiptNo = jsonObj1.getString("receiptNo");

//JSONObject jsonObj2 = new JSONObject(Intrresponse.toString());
//ReceiptNo = jsonObj2.getString("Result");
if (Intrresponse.contains("\"receiptNo\":"))
{
JSONObject jsonObj3 = new JSONObject(Intrresponse.toString());
ReceiptNo = jsonObj3.getString("receiptNo");

//JSONObject json = new JSONObject(Intrresponse);
//String xml_data = XML.toString(json);
APISELECTION = "3";
REQTYPE="REQ-3";
proc_stmt = con.prepareStatement("{ call LSW_SCOLLECTIONS_INPUT (?,?,?,?,?,?,?) }");

proc_stmt.setString(1, APISELECTION); // API SELECTION
proc_stmt.setString(2, UNIQUEID2); // UNIQUEID FROM 2 
proc_stmt.setString(3, Intrresponse);  // RESPONSE FROM 2
proc_stmt.setString(4, ReceiptNo); 
proc_stmt.setString(5, RespHead); 
proc_stmt.setString(6, Param2); 
proc_stmt.setString(7, Param1); // PRCSID

rs = proc_stmt.executeQuery();
	
while (rs.next()) {
Request3 = rs.getString(1);
UNIQUEID3  = rs.getString(2);
EndPoint3  = rs.getString(3);
//UIQID = rs.getString(4);
//MSG  = rs.getString(5);
}

Connections.Call(proc_stmt,rs,con,"Commit");



Intrresponse = JSInterfaceCall.JInterfaceCallSrv(EndPoint3, Request3,UIQID,RespHead,Referer);

String Reponse2[] = Intrresponse.split("~");

Intrresponse = Reponse2[0];

ErrorMsg = Reponse2[1];

FNLResp = Intrresponse;

APISELECTION = "4";

proc_stmt = con.prepareStatement("{ call LSW_SCOLLECTIONS_INPUT (?,?,?,?,?,?,?) }");

proc_stmt.setString(1, APISELECTION); // API SELECTION
proc_stmt.setString(2, UNIQUEID2); // UNIQUEID FROM 2 
proc_stmt.setString(3, Intrresponse);  // RESPONSE FROM 2
proc_stmt.setString(4, ReceiptNo); 
proc_stmt.setString(5, RespHead); 
proc_stmt.setString(6, Param2); 
proc_stmt.setString(7, Param1); // PRCSID

rs = proc_stmt.executeQuery();
	
while (rs.next()) {
Request3 = rs.getString(1);
UNIQUEID3  = rs.getString(2);
EndPoint3  = rs.getString(3);
//UIQID = rs.getString(4);
//MSG  = rs.getString(5);
}

Connections.Call(proc_stmt,rs,con,"Commit");

/////END
}
else
{
	APISELECTION = "ERRUPD";
	proc_stmt = con.prepareStatement("{ call LSW_SCOLLECTIONS_INPUT (?,?,?,?,?,?,?) }");

	proc_stmt.setString(1, APISELECTION); // API SELECTION
	proc_stmt.setString(2, UNIQUEID2); // UNIQUEID FROM 2 
	proc_stmt.setString(3, Intrresponse);  // RESPONSE FROM 2
	proc_stmt.setString(4, ReceiptNo); 
	proc_stmt.setString(5, RespHead); 
	proc_stmt.setString(6, Param2); 
	proc_stmt.setString(7, Param1); // PRCSID

	rs = proc_stmt.executeQuery();
		
	while (rs.next()) {
	Request3 = rs.getString(1);
	UNIQUEID3  = rs.getString(2);
	EndPoint3  = rs.getString(3);
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
				proc_stmt = con.prepareStatement("{ call LSW_SCOLLECTIONS_INPUT (?,?,?,?,?,?,?) }");

				proc_stmt.setString(1, APISELECTION); // API SELECTION
				proc_stmt.setString(2, UNIQUEID2); // UNIQUEID FROM 2 
				proc_stmt.setString(3, Intrresponse);  // RESPONSE FROM 2
				proc_stmt.setString(4, ReceiptNo); 
				proc_stmt.setString(5, RespHead); 
				proc_stmt.setString(6, Param2); 
				proc_stmt.setString(7, Param1); // PRCSID

				rs = proc_stmt.executeQuery();
					
				while (rs.next()) {
				Request3 = rs.getString(1);
				UNIQUEID3  = rs.getString(2);
				EndPoint3  = rs.getString(3);
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
				
   		
    return ProcessID +"~" + ActivityID + "~" + ReceiptNo + "~" + FNLResp;
  }
  
  
}