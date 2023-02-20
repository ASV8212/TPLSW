package Integration;


import CommonModel.*;
import Controls.Connections;
import Controls.JInterfaceCall;
import Controls.WInterfaceCall;

import java.sql.*;
import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.codehaus.jettison.json.JSONObject;

public class POSIDEX {

  public static void main(String[] args) throws Exception {
    System.out.println("True");
  }

  public static String PosidexGet(String Param1,String Param2,String Param3,String Param4,String Param5,String SPName) {
 
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
    String LMSREQXML ="";
    String LMSRESXML ="";
    
    
    String CUSINFO ="";
    String CONTACTINFO ="";
    String ADDRINFO ="";
	
	Connection con = DBConnection.getConnection(DBSrc);
	Connection con1 = DBConnection.getConnection("LMS");
	PreparedStatement proc_stmt = null;
	ResultSet rs = null;
	PreparedStatement  proc_stmt1 = null;
	ResultSet rs1 = null;
	
    try {
   
    	// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
		
    	REQTYPE="REQ-1";
		proc_stmt = con.prepareStatement("{ call LSW_SPOSIDEXREQ (?,?,?,?,?,?,?) }");		

		proc_stmt.setString(1, Param1); // Process ID
		proc_stmt.setString(2, Param2); // CUsid
		proc_stmt.setString(3, REQTYPE); //REQ TYPE
		proc_stmt.setString(4, ""); // Response
		proc_stmt.setString(5, ""); // REQID
		proc_stmt.setString(6, ""); // UIQID
		proc_stmt.setString(7, ""); // Error Message

		rs = proc_stmt.executeQuery();
		
		ResultSetMetaData rsmd = rs.getMetaData();
		int colCount = rsmd.getColumnCount();
		
	while (rs.next()) {
		Request = rs.getString(1);
		REQID  = rs.getString(2);
		EndPoint  = rs.getString(3);
		UIQID = rs.getString(4);
		MSG  = rs.getString(5);
		LMSREQXML  = rs.getString(6);
	
		}
	
	
	Connections.Call(proc_stmt,rs,con,"Commit");
	
	Intrresponse = WInterfaceCall.JInterfaceCallSrv(EndPoint, Request,UIQID,UIQPKID,Referer);
	
	String Reponse[] = Intrresponse.split("~");

	Intrresponse = Reponse[0];

	ErrorMsg = Reponse[1];
		
	REQTYPE="REQ-2";
	proc_stmt = con.prepareStatement("{ call LSW_SPOSIDEXREQ (?,?,?,?,?,?,?) }");
	
	proc_stmt.setString(1, Param1); // Process ID
	proc_stmt.setString(2, Param2); // CUsid
	proc_stmt.setString(3, REQTYPE); //REQ TYPE
	proc_stmt.setString(4, Intrresponse); // Response
	proc_stmt.setString(5, REQID); // REQID
	proc_stmt.setString(6, UIQID); // UIQID
	proc_stmt.setString(7, ErrorMsg); // Error Message

	rs = proc_stmt.executeQuery();
		
while (rs.next()) {
	Request = rs.getString(1);
	REQID  = rs.getString(2);
	EndPoint  = rs.getString(3);
	UIQID = rs.getString(4);
	MSG  = rs.getString(5);
	xml  = rs.getString(6);
	}
	
ProcessID = "A";
ActivityID = MSG;

Connections.Call(proc_stmt,rs,con,"Commit");


if (MSG.contains("Success"))
{
	
	TimeUnit.SECONDS.sleep(30);
	
Intrresponse = WInterfaceCall.JInterfaceCallSrv(EndPoint, Request,UIQID,UIQPKID,Referer);

String Reponse1[] = Intrresponse.split("~");

Intrresponse = Reponse1[0];

ErrorMsg = Reponse1[1];

REQTYPE="REQ-3";
proc_stmt = con.prepareStatement("{ call LSW_SPOSIDEXREQ (?,?,?,?,?,?,?) }");

proc_stmt.setString(1, Param1); // Process ID
proc_stmt.setString(2, Param2); // CUsid
proc_stmt.setString(3, REQTYPE); //REQ TYPE
proc_stmt.setString(4, Intrresponse); // Response
proc_stmt.setString(5, REQID); // REQID
proc_stmt.setString(6, UIQID); // UIQID
proc_stmt.setString(7, ErrorMsg); // Error Message

rs = proc_stmt.executeQuery();
	
while (rs.next()) {
Request = rs.getString(1);
REQID  = rs.getString(2);
EndPoint  = rs.getString(3);	
UIQID = rs.getString(4);
MSG  = rs.getString(5);
xml  = rs.getString(6);
}

ProcessID = "A";
ActivityID = MSG;

	}
else
{
	
	ProcessID = "Error";
	ActivityID = MSG;
}

Connections.Call(proc_stmt,rs,con,"Commit");


// LMS START

proc_stmt1 = con1.prepareStatement("{ call SAM_SACCTS_MOBILE_LOS (?,?,?,?,?) }");

proc_stmt1.setString(1, LMSREQXML); // XML
proc_stmt1.setString(2, "LOS"); // 
proc_stmt1.setString(3, ""); // 
proc_stmt1.setString(4, ""); // 
proc_stmt1.setString(5, ""); // 


rs1 = proc_stmt1.executeQuery();
	
while (rs1.next()) {
	LMSRESXML = rs1.getString(1);

}

Connections.Call(proc_stmt1,rs1,con1,"Commit");


//LMS END

proc_stmt = con.prepareStatement("{ call LSW_SDEDUPEDATA (?,?,?,?,?) }");

proc_stmt.setString(1, UIQID); // XML
proc_stmt.setString(2, LMSRESXML); // 
proc_stmt.setString(3, Param1); // 
proc_stmt.setString(4, Param2); // 
proc_stmt.setString(5, ""); // 

rs = proc_stmt.executeQuery();
	
while (rs.next()) {
	CUSINFO = rs.getString(1);	
}

Connections.Call(proc_stmt,rs,con,"Commit");


if (CUSINFO.contains("ERROR"))
{
	
	ProcessID = "No Data";
	ActivityID = "No Data";
	
}
else
{

	ProcessID = "Success";
	ActivityID = CUSINFO;
	
}



    }
		catch (Exception e)
		{
			try
			{
			proc_stmt = con.prepareStatement("{ call LSW_SPOSIDEXREQ (?,?,?,?,?,?,?) }");

			proc_stmt.setString(1, Param1); // Process ID
			proc_stmt.setString(2, Param2); // CUsid
			proc_stmt.setString(3, REQTYPE); //REQ TYPE
			proc_stmt.setString(4, Intrresponse); // Response
			proc_stmt.setString(5, REQID); // REQID
			proc_stmt.setString(6, UIQID); // UIQID
			proc_stmt.setString(7, ErrorMsg); // Error Message

			rs = proc_stmt.executeQuery();
				
			while (rs.next()) {
			Request = rs.getString(1);
			REQID  = rs.getString(2);
			EndPoint  = rs.getString(3);
			UIQID = rs.getString(4);
			MSG  = rs.getString(5);
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
			Connections.Call(proc_stmt1,rs1,con1,"Rollback");
			ProcessID = "No Data";
			ActivityID = "No Data";
			e.printStackTrace();
		}
				finally {
			        
					Connections.Call(proc_stmt,rs,con,"Close");
					Connections.Call(proc_stmt1,rs1,con1,"Close");
					
			    }		
				
   		
    return ProcessID +"~" + ActivityID;
  }
  
  
}