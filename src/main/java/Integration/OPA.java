package Integration;


import CommonModel.*;
import Controls.*;

import java.sql.*;
import java.util.ArrayList;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.codehaus.jettison.json.JSONObject;
//import org.json.XML;


public class OPA {

  public static void main(String[] args) throws Exception {
    System.out.println("True");
  }

  public static String OPAWaiver (String Param1,String Param2,String Param3,String Param4,String Param5,String SPName) {
 
    String DBSrc=null;    
    ArrayList<String> Data=new ArrayList<String>();
    

  
    String Error = "";
    String REQTYPE= "";
	String CUSAPPID="";  //1st SP
	
	String EndPoint1 = "";
	String Request1="";
	String  Response1 ="";
	String UniqueId1="";
	String Referer = "";
	String EndPoint="";
	String UIQID = "";
	String UIQPKID = "";
	String RespHead = "";
	String Intrresponse = "";
    String ErrorMsg = "";
    String FNLResp="";
    
	HttpPost post;
	HttpResponse response;
	
	

	Connection con = DBConnection.getConnection(DBSrc);
	PreparedStatement proc_stmt = null;
	ResultSet rs = null;
	
    try {
   
		
    	REQTYPE="REQ-1";
		proc_stmt = con.prepareStatement("{ call LSW_SOPAWAIVERINPUT (?,?,?,?,?,?,?) }");		

		proc_stmt.setString(1, Param1); // PRCSID
		proc_stmt.setString(2, ""); 
		proc_stmt.setString(3, ""); 
		proc_stmt.setString(4, ""); 
		proc_stmt.setString(5, ""); 
		proc_stmt.setString(6, ""); 
		proc_stmt.setString(7, Param2); // OPAID

		rs = proc_stmt.executeQuery();
		
		ResultSetMetaData rsmd = rs.getMetaData();
		int colCount = rsmd.getColumnCount();
		
	while (rs.next()) {
		Request1 = rs.getString(1);
		EndPoint1 = rs.getString(2);
		UniqueId1 = rs.getString(3);
	
		}
	
	Connections.Call(proc_stmt,rs,con,"Commit");
	
	
	Intrresponse = WInterfaceCall.JInterfaceCallSrv(EndPoint1, Request1,UIQID,UIQPKID,Referer);
	
	String Reponse[] = Intrresponse.split("~");

	Intrresponse = Reponse[0];

	ErrorMsg = Reponse[1];
	
	//RespHead = Reponse[2];
	
	//FNLResp = Intrresponse;
	
	
	
	proc_stmt = con.prepareStatement("{ call LSW_SOPAWAIVEROUTPUT (?,?,?,?,?,?,?) }");		

	proc_stmt.setString(1, Param1); // PRCSID
	proc_stmt.setString(2, Intrresponse); 
	proc_stmt.setString(3, ""); 
	proc_stmt.setString(4, ""); 
	proc_stmt.setString(5, "Success"); 
	proc_stmt.setString(6, UniqueId1); 
	proc_stmt.setString(7, Param2); // OPAID

	rs = proc_stmt.executeQuery();
	
	ResultSetMetaData rsmd1 = rs.getMetaData();
	int colCount1 = rsmd1.getColumnCount();
	
while (rs.next()) {
	Response1 = rs.getString(1);

	}
	
	

	
    }
	catch (Exception e)
	{

		try
		{
			proc_stmt = con.prepareStatement("{ call LSW_SOPAWAIVEROUTPUT (?,?,?,?,?,?,?) }");

			proc_stmt.setString(1, Param1); // PRCSID
			proc_stmt.setString(2, e.toString()); 
			proc_stmt.setString(3, ""); 
			proc_stmt.setString(4, ""); 
			proc_stmt.setString(5, "Failure"); 
			proc_stmt.setString(6, UniqueId1); 
			proc_stmt.setString(7, ""); // OPAID

			rs = proc_stmt.executeQuery();
				
			

			Connections.Call(proc_stmt,rs,con,"Commit");
	
		}
		catch  (Exception e1)
		{
			Connections.Call(proc_stmt,rs,con,"Rollback");
			e1.printStackTrace();
		
		}
		
		Connections.Call(proc_stmt,rs,con,"Rollback");
		CUSAPPID = "{\"CUSID\":\"\",\"APPNO\":\"\",\"MSG\":\"Failure\",\"ERROR\":\""+ e +"\"}" ;
		e.printStackTrace();

	}
				finally {
			        
					Connections.Call(proc_stmt,rs,con,"Close");
					
			    }		
				
   		
    return  Response1  ;
  }
  
  
  public static String OPADeviations (String Param1,String Param2,String Param3,String Param4,String Param5,String SPName) {
	  
	    String DBSrc=null;    
	    ArrayList<String> Data=new ArrayList<String>();
	    

	  
	    String Error = "";
	    String REQTYPE= "";
		String CUSAPPID="";  //1st SP
		
		
		String EndPoint1 = "";
		String Request1="";
		String UniqueId2="";
		String Referer = "";
		String EndPoint="";
		String UIQID = "";
		String UIQPKID = "";
		String RespHead = "";
		String Intrresponse = "";
	    String ErrorMsg = "";
	    String FNLResp="";
		String  Response2 ="";
	    

		Connection con = DBConnection.getConnection(DBSrc);
		PreparedStatement proc_stmt = null;
		ResultSet rs1 = null;
		
	    try {
	   
			
	    	REQTYPE="REQ-1";
			proc_stmt = con.prepareStatement("{ call LSW_SOPAWAIVERINPUT (?,?,?,?,?,?,?) }");		

			proc_stmt.setString(1, Param1); // PRCSID
			proc_stmt.setString(2, ""); 
			proc_stmt.setString(3, ""); 
			proc_stmt.setString(4, ""); 
			proc_stmt.setString(5, ""); 
			proc_stmt.setString(6, ""); 
			proc_stmt.setString(7, Param2); // OPAID

			rs1	 = proc_stmt.executeQuery();
			
			ResultSetMetaData rsmd = rs1.getMetaData();
			int colCount = rsmd.getColumnCount();
			
		while (rs1.next()) {
			Request1 = rs1.getString(1);
			EndPoint1 = rs1.getString(2);
			UniqueId2 = rs1.getString(3);
			}
		
		Connections.Call(proc_stmt,rs1,con,"Commit");
		
		
		Intrresponse = WInterfaceCall.JInterfaceCallSrv(EndPoint1, Request1,UIQID,UIQPKID,Referer);
		
		String Reponse[] = Intrresponse.split("~");

		Intrresponse = Reponse[0];

		ErrorMsg = Reponse[1];
		
		//RespHead = Reponse[2];
		
		//FNLResp = Intrresponse;
		
		proc_stmt = con.prepareStatement("{ call LSW_SOPAWAIVEROUTPUT (?,?,?,?,?,?,?) }");		

		proc_stmt.setString(1, Param1); // PRCSID
		proc_stmt.setString(2, Intrresponse); 
		proc_stmt.setString(3, ""); 
		proc_stmt.setString(4, ""); 
		proc_stmt.setString(5, "Success"); 
		proc_stmt.setString(6, UniqueId2); 
		proc_stmt.setString(7, Param2); // OPAID

		rs1 = proc_stmt.executeQuery();
		
		ResultSetMetaData rsmd1 = rs1.getMetaData();
		int colCount1 = rsmd1.getColumnCount();
		
	while (rs1.next()) {
		Response2 = rs1.getString(1);

		}
	
	Connections.Call(proc_stmt,rs1,con,"Commit");
		
		

		
	    }
			catch (Exception e)
			{

				try
				{
					proc_stmt = con.prepareStatement("{ call LSW_SOPAWAIVEROUTPUT (?,?,?,?,?,?,?) }");

					proc_stmt.setString(1, Param1); // PRCSID
					proc_stmt.setString(2, e.toString()); 
					proc_stmt.setString(3, ""); 
					proc_stmt.setString(4, ""); 
					proc_stmt.setString(5, "Failure"); 
					proc_stmt.setString(6, UniqueId2); 
					proc_stmt.setString(7, ""); // OPAID

					rs1 = proc_stmt.executeQuery();
						

					Connections.Call(proc_stmt,rs1,con,"Commit");
			
				}
				catch  (Exception e1)
				{
					Connections.Call(proc_stmt,rs1,con,"Rollback");
					e1.printStackTrace();
				
				}
				
				Connections.Call(proc_stmt,rs1,con,"Rollback");
				CUSAPPID = "{\"CUSID\":\"\",\"APPNO\":\"\",\"MSG\":\"Failure\",\"ERROR\":\""+ e +"\"}" ;
				e.printStackTrace();

			}
					finally {
				        
						Connections.Call(proc_stmt,rs1,con,"Close");
						
				    }		
					
	   		
	    return  Response2  ;
	  }
  
  
}