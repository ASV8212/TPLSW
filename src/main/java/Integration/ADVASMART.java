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

public class ADVASMART {

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
		
    	REQTYPE=Param5;
    	Intrresponse=Param3;
    	if(REQTYPE.contains("order_create"))
    	{
    		proc_stmt = con.prepareStatement("{ call LSW_SOVERALLADVASMART (?,?,?,?,?) }");	
    		proc_stmt.setString(1, Param1); // PRCSID
    		proc_stmt.setString(2, Param2); //UNIQNO
    		proc_stmt.setString(3, ""); //ORDERID
    		proc_stmt.setString(4, ""); //TOKEN
    		proc_stmt.setString(5, REQTYPE); //REQ TYP
    		
    		rs = proc_stmt.executeQuery();
    		
    		ResultSetMetaData rsmd = rs.getMetaData();
    		int colCount = rsmd.getColumnCount();
    		
    		while (rs.next()) {
    			EndPoint1 = rs.getString(1);
    			Referer  = rs.getString(2);
    			Request  = rs.getString(3);
    			UIQID  = rs.getString(4);
    			}
    		Connections.Call(proc_stmt,rs,con,"Commit");
    		
    		Intrresponse = ADVASMARTPInterfaceCall.JInterfaceCallSrv(EndPoint1, Request,UIQID,"",Referer);
    		String Reponse[] = Intrresponse.split("~");
    		Intrresponse = Reponse[0];
    		ErrorMsg = Reponse[1];
    		
    		if(!Intrresponse.contains("\"status_code\": 201")) {
    			proc_stmt = con.prepareStatement("{ call LSW_SOVERALLADVASMART (?,?,?,?,?) }");	
    			proc_stmt.setString(1, Param1); // PRCSID
        		proc_stmt.setString(2, Param2); //CIN NO
        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
        		proc_stmt.setString(5, "ERRUPD"); //TO UPDATE PREV RECRD WITH RESP

    			rs = proc_stmt.executeQuery();
    				
    			while (rs.next()) {
    				EndPoint1 = rs.getString(1);
        			Referer  = rs.getString(2);
        			Request  = rs.getString(3);
    			}

    			Connections.Call(proc_stmt,rs,con,"Commit");
    			return EndPoint1 +"~" + Referer + "~" + Request;
    	    }
    		if(Intrresponse.contains("\"status_code\": 201")) {
    			proc_stmt = con.prepareStatement("{ call LSW_SOVERALLADVASMART (?,?,?,?,?) }");	
    			proc_stmt.setString(1, Param1); // PRCSID
        		proc_stmt.setString(2, Param2); //CIN NO
        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
        		proc_stmt.setString(5, "UPDATE1"); //TO UPDATE PREV RECRD WITH RESP

    			rs = proc_stmt.executeQuery();
    				
    			while (rs.next()) {
    				EndPoint1 = rs.getString(1);
        			Referer  = rs.getString(2);
        			Request  = rs.getString(3);
    			}

    			Connections.Call(proc_stmt,rs,con,"Commit");
    			return EndPoint1 +"~" + Referer + "~" + Request;
    	    }
    	}
    	REQTYPE="get_order_status";
    	if(REQTYPE.contains("get_order_status")) {
    		proc_stmt = con.prepareStatement("{ call LSW_SOVERALLADVASMART (?,?,?,?,?) }");

    		proc_stmt.setString(1, Param1); // PRCSID
    		proc_stmt.setString(2, Param2); //CIN NO
    		proc_stmt.setString(3, Intrresponse); //PREV RESP 
    		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
    		proc_stmt.setString(5, REQTYPE); //TO UPDATE PREV RECRD WITH RESP
    		
    		rs = proc_stmt.executeQuery();
    		
    		ResultSetMetaData rsmd = rs.getMetaData();
    		int colCount = rsmd.getColumnCount();
    		
    		while (rs.next()) {
    			EndPoint1 = rs.getString(1);
    			Referer  = rs.getString(2);
    			Request  = rs.getString(3);
    			UIQID  = rs.getString(4);
    			}
    		Connections.Call(proc_stmt,rs,con,"Commit");
    		
    		Intrresponse = ADVASMARTGInterfaceCall.JInterfaceCallSrv(EndPoint1, "",UIQID,"",Referer);
    		String Reponse[] = Intrresponse.split("~");
    		Intrresponse = Reponse[0];
    		ErrorMsg = Reponse[1];
    		
    		if(!Intrresponse.contains("\"status_code\": 200")) {
    			proc_stmt = con.prepareStatement("{ call LSW_SOVERALLADVASMART (?,?,?,?,?) }");	
    			proc_stmt.setString(1, Param1); // PRCSID
        		proc_stmt.setString(2, Param2); //CIN NO
        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
        		proc_stmt.setString(5, "ERRUPD"); //TO UPDATE PREV RECRD WITH RESP

    			rs = proc_stmt.executeQuery();
    				
    			while (rs.next()) {
    				EndPoint1 = rs.getString(1);
        			Referer  = rs.getString(2);
        			Request  = rs.getString(3);
    			}

    			Connections.Call(proc_stmt,rs,con,"Commit");
    			return EndPoint1 +"~" + Referer + "~" + Request;
    	    }
    	}
    	REQTYPE="get_order_summary";
    	if(REQTYPE.contains("get_order_summary")) {
    		proc_stmt = con.prepareStatement("{ call LSW_SOVERALLADVASMART (?,?,?,?,?) }");

    		proc_stmt.setString(1, Param1); // PRCSID
    		proc_stmt.setString(2, Param2); //CIN NO
    		proc_stmt.setString(3, Intrresponse); //PREV RESP 
    		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
    		proc_stmt.setString(5, REQTYPE); //TO UPDATE PREV RECRD WITH RESP
    		
    		rs = proc_stmt.executeQuery();
    		
    		ResultSetMetaData rsmd = rs.getMetaData();
    		int colCount = rsmd.getColumnCount();
    		
    		while (rs.next()) {
    			EndPoint1 = rs.getString(1);
    			Referer  = rs.getString(2);
    			Request  = rs.getString(3);
    			UIQID  = rs.getString(4);
    			}
    		Connections.Call(proc_stmt,rs,con,"Commit");
    		
    		Intrresponse = ADVASMARTGInterfaceCall.JInterfaceCallSrv(EndPoint1, "",UIQID,"",Referer);
    		String Reponse[] = Intrresponse.split("~");
    		Intrresponse = Reponse[0];
    		ErrorMsg = Reponse[1];
    		if(!Intrresponse.contains("\"status_code\": 200")) {
    			proc_stmt = con.prepareStatement("{ call LSW_SOVERALLADVASMART (?,?,?,?,?) }");	
    			proc_stmt.setString(1, Param1); // PRCSID
        		proc_stmt.setString(2, Param2); //CIN NO
        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
        		proc_stmt.setString(5, "ERRUPD"); //TO UPDATE PREV RECRD WITH RESP

    			rs = proc_stmt.executeQuery();
    				
    			while (rs.next()) {
    				EndPoint1 = rs.getString(1);
        			Referer  = rs.getString(2);
        			Request  = rs.getString(3);
    			}

    			Connections.Call(proc_stmt,rs,con,"Commit");
    			return EndPoint1 +"~" + Referer + "~" + Request;
    	    }
    	}
    	REQTYPE="UPDATE";
    	if(REQTYPE.contains("UPDATE")) {
    		proc_stmt = con.prepareStatement("{ call LSW_SOVERALLADVASMART (?,?,?,?,?) }");

    		proc_stmt.setString(1, Param1); // PRCSID
    		proc_stmt.setString(2, Param2); //CIN NO
    		proc_stmt.setString(3, Intrresponse); //PREV RESP 
    		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
    		proc_stmt.setString(5, REQTYPE); //TO UPDATE PREV RECRD WITH RESP
    		
    		rs = proc_stmt.executeQuery();
    		
    		ResultSetMetaData rsmd = rs.getMetaData();
    		int colCount = rsmd.getColumnCount();
    		
    		while (rs.next()) {
    			EndPoint1 = rs.getString(1);
    			Referer  = rs.getString(2);
    			Request  = rs.getString(3);
    			}
    		Connections.Call(proc_stmt,rs,con,"Commit");
    	}
  }
		catch (Exception e)
		{
			try
			{
				proc_stmt = con.prepareStatement("{ call LSW_SOVERALLADVASMART (?,?,?,?,?) }");	
    			proc_stmt.setString(1, Param1); // PRCSID
        		proc_stmt.setString(2, Param2); //CIN NO
        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
        		proc_stmt.setString(5, "ERRUPD"); //TO UPDATE PREV RECRD WITH RESP

    			rs = proc_stmt.executeQuery();
    				
    			while (rs.next()) {
    				EndPoint1 = rs.getString(1);
        			Referer  = rs.getString(2);
        			Request  = rs.getString(3);
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
				
   		
    return EndPoint1 +"~" + Referer + "~" + Request;
    //return Request3;
  }
  
  public static String ADVASMARTMSTR(String Param1,String Param2,String Param3,String Param4,String Param5,String SPName) {
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
		String OPTN = "";

		
		Connection con = DBConnection.getConnection(DBSrc);
		PreparedStatement proc_stmt = null;
		ResultSet rs = null;
		
	    try {
	   
	    	// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			// Connection con =
			// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
			
	    	REQTYPE=Param5;
	    	Intrresponse=Param3;
	    	if(REQTYPE.contains("get_states"))
	    	{
	    		proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");

	    		proc_stmt.setString(1, Param1); // PRCSID
	    		proc_stmt.setString(2, Param2); //CIN NO
	    		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	    		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	    		proc_stmt.setString(5, REQTYPE); //TO UPDATE PREV RECRD WITH RESP
	    		
	    		rs = proc_stmt.executeQuery();
	    		
	    		ResultSetMetaData rsmd = rs.getMetaData();
	    		int colCount = rsmd.getColumnCount();
	    		
	    		while (rs.next()) {
	    			EndPoint1 = rs.getString(1);
	    			Referer  = rs.getString(2);
	    			UIQID  = rs.getString(3);
	    			}
	    		Connections.Call(proc_stmt,rs,con,"Commit");
	    		
	    		Intrresponse = ADVASMARTGInterfaceCall.JInterfaceCallSrv(EndPoint1, "",UIQID,"",Referer);
	    		String Reponse[] = Intrresponse.split("~");
	    		Intrresponse = Reponse[0];
	    		ErrorMsg = Reponse[1];
	    		if(!Intrresponse.contains("\"status_code\": 200")) {
	    			proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");	
	    			proc_stmt.setString(1, Param1); // PRCSID
	        		proc_stmt.setString(2, Param2); //CIN NO
	        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	        		proc_stmt.setString(5, "ERRUPD"); //TO UPDATE PREV RECRD WITH RESP

	    			rs = proc_stmt.executeQuery();
	    				
	    			while (rs.next()) {
	    				EndPoint1 = rs.getString(1);
	        			Referer  = rs.getString(2);
	        			Request  = rs.getString(3);
	    			}

	    			Connections.Call(proc_stmt,rs,con,"Commit");
	    			return EndPoint1 +"~" + Referer + "~" + Request;
	    	    }
	    		if(Intrresponse.contains("\"status_code\": 200")) {
	    			proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");	
	    			proc_stmt.setString(1, Param1); // PRCSID
	        		proc_stmt.setString(2, Param2); //CIN NO
	        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	        		proc_stmt.setString(5, "UPDATE"); //TO UPDATE PREV RECRD WITH RESP

	    			rs = proc_stmt.executeQuery();
	    				
	    			while (rs.next()) {
	    				EndPoint1 = rs.getString(1);
	        			Referer  = rs.getString(2);
	        			Request  = rs.getString(3);
	    			}

	    			Connections.Call(proc_stmt,rs,con,"Commit");
	    			return EndPoint1 +"~" + Referer + "~" + Request;
	    		}
	    	}
	    	if(REQTYPE.contains("get_districts")) {
	    		proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");

	    		proc_stmt.setString(1, Param1); // PRCSID
	    		proc_stmt.setString(2, Param2); //CIN NO
	    		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	    		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	    		proc_stmt.setString(5, REQTYPE); //TO UPDATE PREV RECRD WITH RESP
	    		
	    		rs = proc_stmt.executeQuery();
	    		
	    		ResultSetMetaData rsmd = rs.getMetaData();
	    		int colCount = rsmd.getColumnCount();
	    		
	    		while (rs.next()) {
	    			EndPoint1 = rs.getString(1);
	    			Referer  = rs.getString(2);
	    			UIQID  = rs.getString(3);
	    			}
	    		Connections.Call(proc_stmt,rs,con,"Commit");
	    		
	    		Intrresponse = ADVASMARTGInterfaceCall.JInterfaceCallSrv(EndPoint1, "",UIQID,"",Referer);
	    		String Reponse[] = Intrresponse.split("~");
	    		Intrresponse = Reponse[0];
	    		ErrorMsg = Reponse[1];
	    		REQTYPE="get_sro_by_state";
	    		if(!Intrresponse.contains("\"status_code\": 200")) {
	    			proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");	
	    			proc_stmt.setString(1, Param1); // PRCSID
	        		proc_stmt.setString(2, Param2); //CIN NO
	        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	        		proc_stmt.setString(5, "ERRUPD"); //TO UPDATE PREV RECRD WITH RESP

	    			rs = proc_stmt.executeQuery();
	    				
	    			while (rs.next()) {
	    				EndPoint1 = rs.getString(1);
	        			Referer  = rs.getString(2);
	        			Request  = rs.getString(3);
	    			}

	    			Connections.Call(proc_stmt,rs,con,"Commit");
	    			return EndPoint1 +"~" + Referer + "~" + Request;
	    	    }
	    	}
	    	if(REQTYPE.contains("get_sro_by_state")) {
	    		proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");

	    		proc_stmt.setString(1, Param1); // PRCSID
	    		proc_stmt.setString(2, Param2); //CIN NO
	    		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	    		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	    		proc_stmt.setString(5, REQTYPE); //TO UPDATE PREV RECRD WITH RESP
	    		
	    		rs = proc_stmt.executeQuery();
	    		
	    		ResultSetMetaData rsmd = rs.getMetaData();
	    		int colCount = rsmd.getColumnCount();
	    		
	    		while (rs.next()) {
	    			EndPoint1 = rs.getString(1);
	    			Referer  = rs.getString(2);
	    			UIQID  = rs.getString(3);
	    			OPTN  = rs.getString(4);
	    			}
	    		Connections.Call(proc_stmt,rs,con,"Commit");
	    		
	    		Intrresponse = ADVASMARTGInterfaceCall.JInterfaceCallSrv(EndPoint1, "",UIQID,"",Referer);
	    		String Reponse[] = Intrresponse.split("~");
	    		Intrresponse = Reponse[0];
	    		ErrorMsg = Reponse[1];
	    		if(!Intrresponse.contains("\"status_code\": 200")) {
	    			proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");	
	    			proc_stmt.setString(1, Param1); // PRCSID
	        		proc_stmt.setString(2, Param2); //CIN NO
	        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	        		proc_stmt.setString(5, "ERRUPD"); //TO UPDATE PREV RECRD WITH RESP

	    			rs = proc_stmt.executeQuery();
	    				
	    			while (rs.next()) {
	    				EndPoint1 = rs.getString(1);
	        			Referer  = rs.getString(2);
	        			Request  = rs.getString(3);
	    			}

	    			Connections.Call(proc_stmt,rs,con,"Commit");
	    			return EndPoint1 +"~" + Referer + "~" + Request;
	    	    }
	    		if(Intrresponse.contains("\"status_code\": 200")) {
	    			proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");	
	    			proc_stmt.setString(1, Param1); // PRCSID
	        		proc_stmt.setString(2, OPTN); //CIN NO
	        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	        		proc_stmt.setString(5, "UPDATESR"); //TO UPDATE PREV RECRD WITH RESP

	    			rs = proc_stmt.executeQuery();
	    				
	    			while (rs.next()) {
	    				EndPoint1 = rs.getString(1);
	        			Referer  = rs.getString(2);
	        			Request  = rs.getString(3);
	    			}

	    			Connections.Call(proc_stmt,rs,con,"Commit");
	    			return EndPoint1 +"~" + Referer + "~" + Request;
	    		}
	    	}
	    	if(REQTYPE.contains("get_locality_by_district")) {
	    		proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");

	    		proc_stmt.setString(1, Param1); // PRCSID
	    		proc_stmt.setString(2, Param2); //CIN NO
	    		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	    		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	    		proc_stmt.setString(5, REQTYPE); //TO UPDATE PREV RECRD WITH RESP
	    		
	    		rs = proc_stmt.executeQuery();
	    		
	    		ResultSetMetaData rsmd = rs.getMetaData();
	    		int colCount = rsmd.getColumnCount();
	    		
	    		while (rs.next()) {
	    			EndPoint1 = rs.getString(1);
	    			Referer  = rs.getString(2);
	    			UIQID  = rs.getString(3);
	    			}
	    		Connections.Call(proc_stmt,rs,con,"Commit");
	    		
	    		Intrresponse = ADVASMARTGInterfaceCall.JInterfaceCallSrv(EndPoint1, "",UIQID,"",Referer);
	    		String Reponse[] = Intrresponse.split("~");
	    		Intrresponse = Reponse[0];
	    		ErrorMsg = Reponse[1];
	    		REQTYPE="get_sro_by_district";
	    		if(!Intrresponse.contains("\"status_code\": 200")) {
	    			proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");	
	    			proc_stmt.setString(1, Param1); // PRCSID
	        		proc_stmt.setString(2, Param2); //CIN NO
	        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	        		proc_stmt.setString(5, "ERRUPD"); //TO UPDATE PREV RECRD WITH RESP

	    			rs = proc_stmt.executeQuery();
	    				
	    			while (rs.next()) {
	    				EndPoint1 = rs.getString(1);
	        			Referer  = rs.getString(2);
	        			Request  = rs.getString(3);
	    			}

	    			Connections.Call(proc_stmt,rs,con,"Commit");
	    			return EndPoint1 +"~" + Referer + "~" + Request;
	    	    }
	    	}
	    	
	    	if(REQTYPE.contains("get_sro_by_district")) {
	    		proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");

	    		proc_stmt.setString(1, Param1); // PRCSID
	    		proc_stmt.setString(2, Param2); //CIN NO
	    		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	    		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	    		proc_stmt.setString(5, REQTYPE); //TO UPDATE PREV RECRD WITH RESP
	    		
	    		rs = proc_stmt.executeQuery();
	    		
	    		ResultSetMetaData rsmd = rs.getMetaData();
	    		int colCount = rsmd.getColumnCount();
	    		
	    		while (rs.next()) {
	    			EndPoint1 = rs.getString(1);
	    			Referer  = rs.getString(2);
	    			UIQID  = rs.getString(3);
	    			OPTN  = rs.getString(4);
	    			}
	    		Connections.Call(proc_stmt,rs,con,"Commit");
	    		
	    		Intrresponse = ADVASMARTGInterfaceCall.JInterfaceCallSrv(EndPoint1, "",UIQID,"",Referer);
	    		String Reponse[] = Intrresponse.split("~");
	    		Intrresponse = Reponse[0];
	    		ErrorMsg = Reponse[1];
	    		if(!Intrresponse.contains("\"status_code\": 200")) {
	    			proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");	
	    			proc_stmt.setString(1, Param1); // PRCSID
	        		proc_stmt.setString(2, Param2); //CIN NO
	        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	        		proc_stmt.setString(5, "ERRUPD"); //TO UPDATE PREV RECRD WITH RESP

	    			rs = proc_stmt.executeQuery();
	    				
	    			while (rs.next()) {
	    				EndPoint1 = rs.getString(1);
	        			Referer  = rs.getString(2);
	        			Request  = rs.getString(3);
	    			}

	    			Connections.Call(proc_stmt,rs,con,"Commit");
	    			return EndPoint1 +"~" + Referer + "~" + Request;
	    	    }
	    		if(Intrresponse.contains("\"status_code\": 200")) {
	    			proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");	
	    			proc_stmt.setString(1, Param1); // PRCSID
	        		proc_stmt.setString(2, OPTN); //CIN NO
	        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	        		proc_stmt.setString(5, "UPDATESR"); //TO UPDATE PREV RECRD WITH RESP

	    			rs = proc_stmt.executeQuery();
	    				
	    			while (rs.next()) {
	    				EndPoint1 = rs.getString(1);
	        			Referer  = rs.getString(2);
	        			Request  = rs.getString(3);
	    			}

	    			Connections.Call(proc_stmt,rs,con,"Commit");
	    			return EndPoint1 +"~" + Referer + "~" + Request;
	    		}
	    	}
	    	if(REQTYPE.contains("get_locality_by_registrar"))
	    	{
	    		proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");

	    		proc_stmt.setString(1, Param1); // PRCSID
	    		proc_stmt.setString(2, Param2); //CIN NO
	    		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	    		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	    		proc_stmt.setString(5, REQTYPE); //TO UPDATE PREV RECRD WITH RESP
	    		
	    		rs = proc_stmt.executeQuery();
	    		
	    		ResultSetMetaData rsmd = rs.getMetaData();
	    		int colCount = rsmd.getColumnCount();
	    		
	    		while (rs.next()) {
	    			EndPoint1 = rs.getString(1);
	    			Referer  = rs.getString(2);
	    			UIQID  = rs.getString(3);
	    			}
	    		Connections.Call(proc_stmt,rs,con,"Commit");
	    		
	    		Intrresponse = ADVASMARTGInterfaceCall.JInterfaceCallSrv(EndPoint1, "",UIQID,"",Referer);
	    		String Reponse[] = Intrresponse.split("~");
	    		Intrresponse = Reponse[0];
	    		ErrorMsg = Reponse[1];
	    		if(!Intrresponse.contains("\"status_code\": 200")) {
	    			proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");	
	    			proc_stmt.setString(1, Param1); // PRCSID
	        		proc_stmt.setString(2, Param2); //CIN NO
	        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	        		proc_stmt.setString(5, "ERRUPD"); //TO UPDATE PREV RECRD WITH RESP

	    			rs = proc_stmt.executeQuery();
	    				
	    			while (rs.next()) {
	    				EndPoint1 = rs.getString(1);
	        			Referer  = rs.getString(2);
	        			Request  = rs.getString(3);
	    			}

	    			Connections.Call(proc_stmt,rs,con,"Commit");
	    			return EndPoint1 +"~" + Referer + "~" + Request;
	    	    }
	    		if(Intrresponse.contains("\"status_code\": 200")) {
	    			proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");	
	    			proc_stmt.setString(1, Param1); // PRCSID
	        		proc_stmt.setString(2, Param2); //CIN NO
	        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
	        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
	        		proc_stmt.setString(5, "UPDATE1"); //TO UPDATE PREV RECRD WITH RESP

	    			rs = proc_stmt.executeQuery();
	    				
	    			while (rs.next()) {
	    				EndPoint1 = rs.getString(1);
	        			Referer  = rs.getString(2);
	        			Request  = rs.getString(3);
	    			}

	    			Connections.Call(proc_stmt,rs,con,"Commit");
	    			return EndPoint1 +"~" + Referer + "~" + Request;
	    		}
	    	}
	    }
	    catch (Exception e)
		{
			try
			{
				proc_stmt = con.prepareStatement("{ call LSW_OVERALLADVASMRTSTRHNDLR (?,?,?,?,?) }");	
    			proc_stmt.setString(1, Param1); // PRCSID
        		proc_stmt.setString(2, Param2); //CIN NO
        		proc_stmt.setString(3, Intrresponse); //PREV RESP 
        		proc_stmt.setString(4, UIQID);  //EXPECTED NXT HIT
        		proc_stmt.setString(5, "ERRUPD"); //TO UPDATE PREV RECRD WITH RESP

    			rs = proc_stmt.executeQuery();
    				
    			while (rs.next()) {
    				EndPoint1 = rs.getString(1);
        			Referer  = rs.getString(2);
        			Request  = rs.getString(3);
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
		
	
	    return EndPoint1 +"~" + Referer + "~" + Request;
  }
}