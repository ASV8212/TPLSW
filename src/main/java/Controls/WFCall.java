package Controls;


import CommonModel.*;
import Integration.PosidexDedupe;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.codehaus.jettison.json.JSONObject;

public class WFCall {

  public static void main(String[] args) throws Exception {
    System.out.println("True");
  }

  public static String WFInit(String Param1,String Param2,String Param3,String Param4,String Param5,String SPName) {
 
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
	
	Connection con = DBConnection.getConnection(DBSrc);
	PreparedStatement proc_stmt = null;
	ResultSet rs = null;
	
	PreparedStatement proc_stmt1 = null;
	ResultSet rs1 = null;
	
    try {
   
    	// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
		
	
		proc_stmt = con.prepareStatement("{ call "+SPName+" (?,?,?,?,?) }");		

		proc_stmt.setString(1, Param1);
		proc_stmt.setString(2, Param2);
		proc_stmt.setString(3, Param3);
		proc_stmt.setString(4, Param4);
		proc_stmt.setString(5, Param5);

		rs = proc_stmt.executeQuery();
		
		ResultSetMetaData rsmd = rs.getMetaData();
		int colCount = rsmd.getColumnCount();
		
	while (rs.next()) {
		EndPoint = rs.getString(1);
		Request  = rs.getString(2);
		Referer  = rs.getString(3);
		}
	
	Connections.Call(proc_stmt,rs,con,"Commit");
	
	Intrresponse = JInterfaceCall.JInterfaceCallSrv(EndPoint, Request,UIQID,UIQPKID,Referer);
	
	String Reponse[] = Intrresponse.split("~");

	Intrresponse = Reponse[0];

	ErrorMsg = Reponse[1];
	
	
	if (Intrresponse.contains("processId"))
	{
	
		JSONObject jsonObj = new JSONObject(Intrresponse.toString());
		ProcessID = jsonObj.getString("processId");
		
		
	proc_stmt = con.prepareStatement("{ call LSW_SGETACTCTYIDVAL (?,?,?,?,?) }");
	
	proc_stmt.setString(1, ProcessID);
	proc_stmt.setString(2, Param2);
	proc_stmt.setString(3, Param3);
	proc_stmt.setString(4, Param4);
	proc_stmt.setString(5, Param5);

	rs = proc_stmt.executeQuery();
		
while (rs.next()) {
	ProcessID = rs.getString(1);
	ActivityID = rs.getString(2);	
	AcceptURL = rs.getString(3);
	}

    proc_stmt1 = con.prepareStatement("{ call LSW_SSTOREPENDINGWITH (?,?) }");

    proc_stmt1.setString(1, ProcessID);
    proc_stmt1.setString(2, ActivityID);

    rs1 = proc_stmt1.executeQuery();

   ArrayList<String> StrData = new ArrayList<String>();
   StrData = GetDBData.Call(ProcessID, "", "", "", "", "LSW_APPSTATUSPRCSWS");
   
Connections.Call(proc_stmt,rs,con,"Commit");
/*
Intrresponse = JInterfaceCall.JInterfaceCallSrv(AcceptURL, Request,UIQID,UIQPKID,Referer);

String Reponse1[] = Intrresponse.split("~");

Intrresponse = Reponse1[0];

ErrorMsg = Reponse1[1];

jsonObj = new JSONObject(Intrresponse.toString());
String AccpSt = jsonObj.getString("status");

if (!AccpSt.equals("accepted"))
{
proc_stmt = con.prepareStatement("{ call LSW_STERMINATEINITACTV (?,?,?,?,?) }");
	
	proc_stmt.setString(1, ProcessID);
	proc_stmt.setString(2, ActivityID);
	proc_stmt.setString(3, Param3);
	proc_stmt.setString(4, Param4);
	proc_stmt.setString(5, Param5);

	rs = proc_stmt.executeQuery();
		
while (rs.next()) {
	ProcessID = rs.getString(1);
	ActivityID = rs.getString(2);		
	}
	
ProcessID = "No Data";
ActivityID = "No Data";
}
*/
	}	
    }
		catch (Exception e)
		{
			
			Connections.Call(proc_stmt,rs,con,"Rollback");
			ProcessID = "No Data";
			ActivityID = "No Data";
			e.printStackTrace();
		}
				finally {
			        
					Connections.Call(proc_stmt,rs,con,"Close");
					
			    }		
				
   		
    return ProcessID +"~" + ActivityID;
  }
  
  public static  String WFComplete(String Param1,String Param2,String Param3,String Param4,String Param5,String SPName) {
	  
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
	    String Referer="";
	    String ActCode = "";
	    
	    JSONObject jsonObj = null;
		
		Connection con = DBConnection.getConnection(DBSrc);
		PreparedStatement proc_stmt = null;
		ResultSet rs = null;
		
		PreparedStatement proc_stmt1 = null;
		ResultSet rs1 = null;
		
	    try {
	   
	    	// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			// Connection con =
			// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
			
		
			proc_stmt = con.prepareStatement("{ call "+SPName+" (?,?,?,?,?) }");		

			proc_stmt.setString(1, Param1);
			proc_stmt.setString(2, Param2);
			proc_stmt.setString(3, Param3);
			proc_stmt.setString(4, Param4);
			proc_stmt.setString(5, Param5);

			rs = proc_stmt.executeQuery();
			
			ResultSetMetaData rsmd = rs.getMetaData();
			int colCount = rsmd.getColumnCount();
			
		while (rs.next()) {
			EndPoint = rs.getString(1);
			Request  = rs.getString(2);
			Referer  = rs.getString(3);
			}
		
		Connections.Call(proc_stmt,rs,con,"Commit");
		
		Intrresponse = JInterfaceCall.JInterfaceCallSrv(EndPoint, Request,UIQID,UIQPKID,Referer);
		
		String Reponse[] = Intrresponse.split("~");

		Intrresponse = Reponse[0];

		ErrorMsg = Reponse[1];
		
		System.out.println(Intrresponse.toString());
		
		System.out.println(ErrorMsg.toString());
		
		 if (ErrorMsg.equals ("Success"))
 	     {
		     jsonObj = new JSONObject(Intrresponse.toString());
 	     }
		 else
		 {
			 String ReHit[] = ErrorMsg.split("#");
			 
			 Intrresponse = ReHit[0];
			 
			 ActCode = ReHit[1];

			 ErrorMsg = ReHit[2];
			 
			 jsonObj = new JSONObject(ErrorMsg.toString());
			 
			 if(jsonObj.getJSONObject("error").getString("code").equals("404") || jsonObj.getJSONObject("error").getString("code").equals("500"))
			  	{
					   System.out.println("Current Activity ID "+Param1);
					   
					ArrayList<String> NxtFlag = new ArrayList<String>();
					
					NxtFlag = GetDBData.Call(Param1,"", "", "", "", "LSW_SCHKNXTACTIVITY");
			 	      String ActFlag = NxtFlag.get(0);
			 	      
			 	      System.out.println("Activity Recall Flag "+ActFlag);
			 	      
			 	     if (ActFlag.equals ("Y"))
			 	     {
				       new WFCall();
				       Intrresponse=WFCall.WFComplete(Param1,Param2, Param3, Param4,Param5, SPName);
			 	     }
			  	}
		 }
		 
		  System.out.println("Success OP "+jsonObj + Intrresponse);
		  
		  if (jsonObj.has("status")) {
		      Status = jsonObj.getString("status");
		  }

		if (Status.equals ("completed"))
		{
			
			if (Intrresponse.contains("processId"))
			{
			
				JSONObject jsonObj1 = new JSONObject(Intrresponse.toString());
				ProcessID = jsonObj1.getString("processId");
				
				
			proc_stmt = con.prepareStatement("{ call LSW_SGETACTCTYIDVAL (?,?,?,?,?) }");
			
			proc_stmt.setString(1, ProcessID);
			proc_stmt.setString(2, Param2);
			proc_stmt.setString(3, Param3);
			proc_stmt.setString(4, Param4);
			proc_stmt.setString(5, Param5);

			rs = proc_stmt.executeQuery();
				
		while (rs.next()) {
			ProcessID = rs.getString(1);
			ActivityID = rs.getString(2);	
			}
			
			}
			
			 proc_stmt1 = con.prepareStatement("{ call LSW_SSTOREPENDINGWITH (?,?) }");

			    proc_stmt1.setString(1, ProcessID);
			    proc_stmt1.setString(2, ActivityID);

			    rs1 = proc_stmt1.executeQuery();

			   ArrayList<String> StrData = new ArrayList<String>();
			   StrData = GetDBData.Call(ProcessID, "", "", "", "", "LSW_APPSTATUSPRCSWS");
			
			Message = "Workflow Submitted";		
		}
		else
		{
			Message = "Error";		
		}
		
		
		/*if (Intrresponse.contains("processId"))
		{
		
			JSONObject jsonObj = new JSONObject(Intrresponse.toString());
			ProcessID = jsonObj.getString("processId");
			
			
		proc_stmt = con.prepareStatement("{ call LSW_SGETACTCTYIDVAL (?,?,?,?,?) }");
		
		proc_stmt.setString(1, ProcessID);
		proc_stmt.setString(2, Param2);
		proc_stmt.setString(3, Param3);
		proc_stmt.setString(4, Param4);
		proc_stmt.setString(5, Param5);

		rs = proc_stmt.executeQuery();
			
	while (rs.next()) {
		ProcessID = rs.getString(1);
		ActivityID = rs.getString(2);	
		}
		
		}	*/
	    }
			catch (Exception e)
			{
				
				Connections.Call(proc_stmt,rs,con,"Rollback");
				Status=e.toString();
				Message = "Error";	
				e.printStackTrace();
			}
					finally {
				        
						Connections.Call(proc_stmt,rs,con,"Close");
						
				    }		
					
	   		
	    return Status +"~" + Message;
	  }
  public static String WFActvInit(String Param1,String Param2,String Param3,String Param4,String Param5,String SPName) {
	  
	    String DBSrc=null;    
	    ArrayList<String> Data=new ArrayList<String>();
	    ArrayList<String> Data_LOG=new ArrayList<String>();
	    
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
	    String Referer="";
	    
	    String TYPE="";
	    String WFVAR="";
	    String PRCSID="";
	    String ACTVDEFID = "";
	    String USERID="";
	    String PASSWORD = "";
	    String ResData = "";
	    String REFID="";
	    String Token_LOG="";
		
		Connection con = DBConnection.getConnection(DBSrc);
		PreparedStatement proc_stmt = null;
		ResultSet rs = null;
		
		PreparedStatement proc_stmt1 = null;
		ResultSet rs1 = null;
		
		try {
			
			Data_LOG = GetDBData.Call(Param1,Param2, SPName, "", "INSERT", "LSW_TWFNXTACTVTYINITDATAPUSH");

			Token_LOG = Data_LOG.get(0);
		}
		catch (Exception e)
		{
			Data_LOG = GetDBData.Call(e.toString(),Token_LOG, "", "", "ERROR", "LSW_TWFNXTACTVTYINITDATAPUSH");
			Status=e.toString();
			Message = "Error";
			return Status +"~" + Message;
		}
		
	    try {
	   
	    	// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			// Connection con =
			// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
			
		
			proc_stmt = con.prepareStatement("{ call "+SPName+" (?,?,?,?,?) }");		

			proc_stmt.setString(1, Param1);
			proc_stmt.setString(2, Param2);
			proc_stmt.setString(3, Param3);
			proc_stmt.setString(4, Param4);
			proc_stmt.setString(5, Param5);

			rs = proc_stmt.executeQuery();
			
			ResultSetMetaData rsmd = rs.getMetaData();
			int colCount = rsmd.getColumnCount();
			
		while (rs.next()) {
			EndPoint = rs.getString(1);
			Request  = rs.getString(2);
			Referer  = rs.getString(3);
			TYPE  = rs.getString(4);
			WFVAR  = rs.getString(5);
			PRCSID  = rs.getString(6);
			ACTVDEFID = rs.getString(7);
			USERID = rs.getString(8);
			PASSWORD = rs.getString(9);
			REFID = rs.getString(10);
			}
		
		Connections.Call(proc_stmt,rs,con,"Commit");
		
		Intrresponse = JInterfaceCall.JInterfaceCallSrv(EndPoint, Request,UIQID,UIQPKID,Referer);
		
		String Reponse[] = Intrresponse.split("~");

		Intrresponse = Reponse[0];

		ErrorMsg = Reponse[1];
		
     JSONObject jsonObj = new JSONObject(Intrresponse.toString());
     Status = jsonObj.getString("result");
		
		
     ArrayList<String> InsData = new ArrayList<String>();
	 InsData = GetDBData.Call("FINALINSERT", Status, "", "", "", "LSW_SSTRACTIVITYLOG");
		
		  if(Status.equals ("true"))
		  {
			if (Intrresponse.contains("processId"))
			{
			
				JSONObject jsonObj1 = new JSONObject(Intrresponse.toString());
				ProcessID = jsonObj1.getString("processId");
				
				
			proc_stmt = con.prepareStatement("{ call LSW_SGETACTCTYIDVAL (?,?,?,?,?) }");
			
			proc_stmt.setString(1, ProcessID);
			proc_stmt.setString(2, Param2);
			proc_stmt.setString(3, Param3);
			proc_stmt.setString(4, Param4);
			proc_stmt.setString(5, Param5);

			rs = proc_stmt.executeQuery();
				
		while (rs.next()) {
			ProcessID = rs.getString(1);
			ActivityID = rs.getString(2);	
			}
			
			}
			
			 proc_stmt1 = con.prepareStatement("{ call LSW_SSTOREPENDINGWITH (?,?) }");

			    proc_stmt1.setString(1, ProcessID);
			    proc_stmt1.setString(2, ActivityID);

			    rs1 = proc_stmt1.executeQuery();

			   ArrayList<String> StrData = new ArrayList<String>();
			   StrData = GetDBData.Call(ProcessID, "", "", "", "", "LSW_APPSTATUSPRCSWS");
			
			Status="completed";
			Message = "Success";
			
		}
		else
		{
			Status="Fail";
			Message = "Error";		
		}
		

	    }
			catch (Exception e)
			{
				
				Connections.Call(proc_stmt,rs,con,"Rollback");
				Status=e.toString();
				Message = "Error";
				e.printStackTrace();
			}
					finally {
				        
						Connections.Call(proc_stmt,rs,con,"Close");
						
				    }		
					
	    try {
			Data_LOG = GetDBData.Call(Intrresponse,Token_LOG, ErrorMsg, "", "UPDATE", "LSW_TWFNXTACTVTYINITDATAPUSH");
			
		}
		catch (Exception e)
		{
			Data_LOG = GetDBData.Call(e.toString(),Token_LOG, "", "", "ERROR", "LSW_TWFNXTACTVTYINITDATAPUSH");
			Status=e.toString();
			Message = "Error";
			return Status +"~" + Message;
		}
	    return Status +"~" + Message;
	  }
    
  public static String WFVndActvInit(String Param1,String Param2,String Param3,String Param4,String Param5,String SPName) {
	  
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
	    String Referer="";
	    
	    String TYPE="";
	    String WFVAR="";
	    String PRCSID="";
	    String ACTVDEFID = "";
	    String USERID="";
	    String PASSWORD = "";
	    String ResData = "";
	    String REFID="";
		
		Connection con = DBConnection.getConnection(DBSrc);
		PreparedStatement proc_stmt = null;
		ResultSet rs = null;
		
	    try {
	   
	    	// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			// Connection con =
			// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
			
		
			proc_stmt = con.prepareStatement("{ call "+SPName+" (?,?,?,?,?) }");		

			proc_stmt.setString(1, Param1);
			proc_stmt.setString(2, Param2);
			proc_stmt.setString(3, Param3);
			proc_stmt.setString(4, Param4);
			proc_stmt.setString(5, Param5);

			rs = proc_stmt.executeQuery();
			
			ResultSetMetaData rsmd = rs.getMetaData();
			int colCount = rsmd.getColumnCount();
			
		while (rs.next()) {
			EndPoint = rs.getString(1);
			Request  = rs.getString(2);
			Referer  = rs.getString(3);
			TYPE  = rs.getString(4);
			WFVAR  = rs.getString(5);
			PRCSID  = rs.getString(6);
			ACTVDEFID = rs.getString(7);
			USERID = rs.getString(8);
			PASSWORD = rs.getString(9);
			REFID = rs.getString(10);
			}
		
		Connections.Call(proc_stmt,rs,con,"Commit");
		
		Intrresponse = JInterfaceCall.JInterfaceCallSrv(EndPoint, Request,UIQID,UIQPKID,Referer);
		
		String Reponse[] = Intrresponse.split("~");

		Intrresponse = Reponse[0];

		ErrorMsg = Reponse[1];
		
		
		JSONObject jsonObj = new JSONObject(Intrresponse.toString());
		Status = jsonObj.getString("result");
		
		if (Status.equals ("true"))
		{	
			
			proc_stmt = con.prepareStatement("{ call LSW_SGETVNDINITACTVID (?,?,?,?,?) }");		

			proc_stmt.setString(1, PRCSID);
			proc_stmt.setString(2, ACTVDEFID);
			proc_stmt.setString(3, Param3);
			proc_stmt.setString(4, Param4);
			proc_stmt.setString(5, Param5);

			rs = proc_stmt.executeQuery();
			
			//ResultSetMetaData rsmd = rs.getMetaData();
			//int colCount = rsmd.getColumnCount();
			
		while (rs.next()) {
			ActivityID = rs.getString(1);		
			}
			
			
		ResData = WFComplete(ActivityID,WFVAR,USERID,PASSWORD,"","LSW_SWFCompleteCALL");
			
			String Reponse1[] = ResData.split("~");

			Status = Reponse1[0];
			Message = Reponse1[1];
			
			//Status = "completed";
			//Message = "Workflow Submitted";	
			
			
			
			if (Status.equals ("completed"))
			{	
			
			proc_stmt = con.prepareStatement("{ call LSW_SVENDORASSIGNMENT (?,?,?,?,?) }");		

			proc_stmt.setString(1, PRCSID);
			proc_stmt.setString(2, ACTVDEFID);
			proc_stmt.setString(3, REFID);
			proc_stmt.setString(4, Param3);
			proc_stmt.setString(5, Param5);

			rs = proc_stmt.executeQuery();
			
			//ResultSetMetaData rsmd = rs.getMetaData();
			//int colCount = rsmd.getColumnCount();
			
		while (rs.next()) {
			Status = rs.getString(1);
			Message = rs.getString(2);
		
			}
			
			}
			
			
			
			
			
		}
		else
		{
			Status="Fail";
			Message = "Error";		
		}
		
		
		/*if (Intrresponse.contains("processId"))
		{
		
			JSONObject jsonObj = new JSONObject(Intrresponse.toString());
			ProcessID = jsonObj.getString("processId");
			
			
		proc_stmt = con.prepareStatement("{ call LSW_SGETACTCTYIDVAL (?,?,?,?,?) }");
		
		proc_stmt.setString(1, ProcessID);
		proc_stmt.setString(2, Param2);
		proc_stmt.setString(3, Param3);
		proc_stmt.setString(4, Param4);
		proc_stmt.setString(5, Param5);

		rs = proc_stmt.executeQuery();
			
	while (rs.next()) {
		ProcessID = rs.getString(1);
		ActivityID = rs.getString(2);	
		}
		
		}	*/
	    }
			catch (Exception e)
			{
				
				Connections.Call(proc_stmt,rs,con,"Rollback");
				Status=e.toString();
				Message = "Error";
				e.printStackTrace();
			}
					finally {
				        
						Connections.Call(proc_stmt,rs,con,"Close");
						
				    }		
					
	   		
	    return Status +"~" + Message;
	  }
  
  public static String WFReevaluate(String Param1,String Param2,String Param3,String Param4,String Param5,String SPName) {
	  
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
	    String Referer="";
		
		Connection con = DBConnection.getConnection(DBSrc);
		PreparedStatement proc_stmt = null;
		ResultSet rs = null;
		
	    try {
	   
	    	// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			// Connection con =
			// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
			
		
			proc_stmt = con.prepareStatement("{ call LSW_SReevaluate (?,?,?,?,?) }");		

			proc_stmt.setString(1, Param1);
			proc_stmt.setString(2, Param2);
			proc_stmt.setString(3, Param3);
			proc_stmt.setString(4, Param4);
			proc_stmt.setString(5, Param5);

			rs = proc_stmt.executeQuery();
			
			ResultSetMetaData rsmd = rs.getMetaData();
			int colCount = rsmd.getColumnCount();
			
		while (rs.next()) {
			EndPoint = rs.getString(1);
			Request  = rs.getString(2);
			Referer  = rs.getString(3);
			}
		
		Connections.Call(proc_stmt,rs,con,"Commit");
		
		Intrresponse = JInterfaceCall.JInterfaceCallSrv(EndPoint, Request,UIQID,UIQPKID,Referer);
		
		String Reponse[] = Intrresponse.split("~");

		Intrresponse = Reponse[0];

		ErrorMsg = Reponse[1];
		
		
		JSONObject jsonObj = new JSONObject(Intrresponse.toString());
		Status = jsonObj.getString("status");
		
		if (Status.equals ("completed"))
		{			
			Message = "Workflow Submitted";		
		}
		else
		{
			Message = "Error";		
		}
		
		
		/*if (Intrresponse.contains("processId"))
		{
		
			JSONObject jsonObj = new JSONObject(Intrresponse.toString());
			ProcessID = jsonObj.getString("processId");
			
			
		proc_stmt = con.prepareStatement("{ call LSW_SGETACTCTYIDVAL (?,?,?,?,?) }");
		
		proc_stmt.setString(1, ProcessID);
		proc_stmt.setString(2, Param2);
		proc_stmt.setString(3, Param3);
		proc_stmt.setString(4, Param4);
		proc_stmt.setString(5, Param5);

		rs = proc_stmt.executeQuery();
			
	while (rs.next()) {
		ProcessID = rs.getString(1);
		ActivityID = rs.getString(2);	
		}
		
		}	*/
	    }
			catch (Exception e)
			{
				
				Connections.Call(proc_stmt,rs,con,"Rollback");
				Status=e.toString();
				Message = "Error";	
				e.printStackTrace();
			}
					finally {
				        
						Connections.Call(proc_stmt,rs,con,"Close");
						
				    }		
					
	   		
	    return Status +"~" + Message;
	  }
  
  
}