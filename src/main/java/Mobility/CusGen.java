package Mobility;


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
//import org.json.XML;


public class CusGen {

  public static void main(String[] args) throws Exception {
    System.out.println("True");
  }

  public static String IDGeneration(String Param1,String Param2,String Param3,String Param4,String Param5,String SPName) {
 
    String DBSrc=null;    
    ArrayList<String> Data=new ArrayList<String>();
    

  
    String Error = "";
    String REQTYPE= "";
	String CUSAPPID="";  //1st SP
	String PRCSID="";  //1st SP
	
	
	
	String Response="";
	String ProcessID="";
	String ActivityID="";
	String UserID = Param3 ;
	String Password = Param4 ;
	String APPFLAG = Param2 ;

	Connection con = DBConnection.getConnection(DBSrc);
	PreparedStatement proc_stmt = null;
	ResultSet rs = null;
	
    try {
    	
    	
    	if (APPFLAG.equals("Y")) {



    			Response = WFCall.WFInit(UserID,Password, "", "", "", "LSW_SWFINITCALL");

    				String Reponse[] = Response.split("~");

    				PRCSID = Reponse[0];
    				ActivityID = Reponse[1];
    			}

		
    	REQTYPE="REQ-1";
		proc_stmt = con.prepareStatement("{ call LSW_SIDGENERATION (?,?,?,?,?,?,?) }");		

		proc_stmt.setString(1, Param1); // Cus Flag
		proc_stmt.setString(2, Param2); // App Flag
		proc_stmt.setString(3, PRCSID); // PRCSID
		proc_stmt.setString(4, ActivityID); //ACTIVITY ID
		proc_stmt.setString(5, ""); 
		proc_stmt.setString(6, ""); 
		proc_stmt.setString(7, ""); 

		rs = proc_stmt.executeQuery();
		
		ResultSetMetaData rsmd = rs.getMetaData();
		int colCount = rsmd.getColumnCount();
		
	while (rs.next()) {
		CUSAPPID = rs.getString(1);
		}
	
	Connections.Call(proc_stmt,rs,con,"Commit");
	

	
    }
		catch (Exception e)
		{

			Connections.Call(proc_stmt,rs,con,"Rollback");
			CUSAPPID = "{\"CUSID\":\"\",\"APPNO\":\"\",\"MSG\":\"Failure\",\"ERROR\":\""+ e +"\"}" ;
			e.printStackTrace();
		}
				finally {
			        
					Connections.Call(proc_stmt,rs,con,"Close");
					
			    }		
				
   		
    return  CUSAPPID  ;
  }
  
  
}