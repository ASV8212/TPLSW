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
import org.json.JSONArray;
import org.json.XML;

public class ANALYTICS {

  public static void main(String[] args) throws Exception {
    System.out.println("True");
  }

  public static String AnalyticsPush(String Param1,String Param2,String Param3,String Param4,String Param5,String SPName) {
 
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
	
	String Results ="";
	String output1 ="";
	String ApplicationID="";
	String ApplicationDisplayID="";
	String UW_Model_Score="";
	String UW_Model_Score_ReScaled="";
	String Model_Decision="";
	String Reason_1="";
	String Reason_2="";
	String Reason_3="";
	String Error_Code="";
	String Cluster_Score="";
	String Cluster_Decision="";
	String Cluster_Reason_1="";
	String Cluster_Reason_2="";
	String Cluster_Reason_3="";
	String Final_Decision="";
	String APISELECTION = "";
	String FNLResp= "";
	JSONObject jsonObj1;
	String jsonObj2;

	
	Connection con = DBConnection.getConnection(DBSrc);
	PreparedStatement proc_stmt = null;
	ResultSet rs = null;
	
    try {
   
    	// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
		
    	REQTYPE="REQ-1";
		proc_stmt = con.prepareStatement("{ call LSW_SANALYTICSOUTPUT_COMBINED (?,?,?,?,?) }");		

		proc_stmt.setString(1, "INPUT"); // API SELECTION
		proc_stmt.setString(2, Param3); 
		proc_stmt.setString(3, ""); 
		proc_stmt.setString(4, Param2); 
		proc_stmt.setString(5, Param1);  //PRCSID


		rs = proc_stmt.executeQuery();
		
		ResultSetMetaData rsmd = rs.getMetaData();
		int colCount = rsmd.getColumnCount();
		
	while (rs.next()) {
		Request1 = rs.getString(1);
		UNIQUEID1  = rs.getString(2);
		EndPoint1  = rs.getString(3);
		UIQID = rs.getString(4);
		//MSG  = rs.getString(5);
	
		}
	
	Connections.Call(proc_stmt,rs,con,"Commit");
	
	Intrresponse = JSInterfaceCall.JInterfaceCallSrv(EndPoint1, Request1,UIQPKID,UIQID,Referer);
	
	String Reponse[] = Intrresponse.split("~");

	Intrresponse = Reponse[0];

	ErrorMsg = Reponse[1];
	
	Intrresponse = Intrresponse.replaceAll("^\\[|\\]$", "");	
	
	FNLResp = Intrresponse;
	
	
	if (Intrresponse.contains("\"Application_Model_Score\","))
	{
	//JSONObject jsonObj3 = new JSONObject(Intrresponse.toString());
	//jsonObj1=jsonObj3.getJSONObject("Results");
	//jsonObj2=jsonObj1.getString("output1");
	//org.codehaus.jettison.json.JSONArray arr = jsonObj1.getJSONArray("output1");
	//jsonObj2 = jsonObj2.replaceAll("]", "");
	//jsonObj2 = jsonObj2.replaceAll("[", "");
	//JSONObject jsonObj4 = new JSONObject(jsonObj2.toString());
	
	/*for (int i = 0; i < arr.length(); i++)
	{
		UW_Model_Score = arr.getJSONObject(i).getString("UW_Model_Score");
		ApplicationID = arr.getJSONObject(i).getString("ApplicationID");
		ApplicationDisplayID = arr.getJSONObject(i).getString("ApplicationDisplayID");
		//UW_Model_Score_ReScaled = arr.getJSONObject(i).getString("UW_Model_Score_ReScaled");
		Model_Decision = arr.getJSONObject(i).getString("Model_Decision");
		Reason_1 = arr.getJSONObject(i).getString("Reason_1");
		Reason_2 = arr.getJSONObject(i).getString("Reason_2");
		Reason_3 = arr.getJSONObject(i).getString("Reason_3");
		Error_Code = arr.getJSONObject(i).getString("Error_Code");
		Cluster_Score = arr.getJSONObject(i).getString("Cluster_Score");
		Cluster_Decision = arr.getJSONObject(i).getString("Cluster_Decision");
		Cluster_Reason_1 = arr.getJSONObject(i).getString("Cluster_Reason_1");
		Cluster_Reason_2 = arr.getJSONObject(i).getString("Cluster_Reason_2");
		Cluster_Reason_3 = arr.getJSONObject(i).getString("Cluster_Reason_3");
		Final_Decision = arr.getJSONObject(i).getString("Final_Decision");
		
	}
	

	String finalxml  ="<Root>" +
	"<ApplicationDisplayID>"+ApplicationDisplayID+"</ApplicationDisplayID>"
	+"<UW_Model_Score>"+UW_Model_Score+"</UW_Model_Score>"
	//+"<UW_Model_Score_ReScaled>"+UW_Model_Score_ReScaled+"</UW_Model_Score_ReScaled>"
	+"<Model_Decision>"+Model_Decision+"</Model_Decision>"
	+"<Reason_1>"+Reason_1+"</Reason_1>"
	+"<Reason_2>"+Reason_2+"</Reason_2>"
	+"<Reason_3>"+Reason_3+"</Reason_3>"
	+"<Error_Code>"+Error_Code+"</Error_Code>"
	+"<Cluster_Score>"+Cluster_Score+"</Cluster_Score>"
	+"<Cluster_Decision>"+Cluster_Decision+"</Cluster_Decision>"
	+"<Cluster_Reason_1>"+Cluster_Reason_1+"</Cluster_Reason_1>"
	+"<Cluster_Reason_2>"+Cluster_Reason_2+"</Cluster_Reason_2>"
	+"<Cluster_Reason_3>"+Cluster_Reason_3+"</Cluster_Reason_3>"
	+"<Final_Decision>"+Final_Decision+"</Final_Decision>"
	+"<ApplicationID>"+ApplicationID+"</ApplicationID>"
	+ "</Root>" ;
	*/
	
	proc_stmt = con.prepareStatement("{ call LSW_SANALYTICSOUTPUT_COMBINED (?,?,?,?,?) }");

	proc_stmt.setString(1, "OUTPUT"); // API SELECTION
	proc_stmt.setString(2, FNLResp); // UNIQUEID FROM 2 
	proc_stmt.setString(3, UNIQUEID1);  // RESPONSE FROM 2
	proc_stmt.setString(4, "SUCCESS"); 
	proc_stmt.setString(5, Intrresponse); 


	rs = proc_stmt.executeQuery();
		
	while (rs.next()) {
		ProcessID = rs.getString(1);
		ActivityID  = rs.getString(2);
		ReceiptNo  = rs.getString(3);
		FNLResp  = rs.getString(3);
	//UIQID = rs.getString(4);
	//MSG  = rs.getString(5);
	}

	Connections.Call(proc_stmt,rs,con,"Commit");
	
	}
	else
	{

		proc_stmt = con.prepareStatement("{ call LSW_SANALYTICSOUTPUT_COMBINED (?,?,?,?,?) }");


		proc_stmt.setString(1, "LOG"); // API SELECTION
		proc_stmt.setString(2, Intrresponse); // UNIQUEID FROM 2 
		proc_stmt.setString(3, UNIQUEID1);  // RESPONSE FROM 2
		proc_stmt.setString(4, "FAILURE"); 
		proc_stmt.setString(5, Intrresponse);

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
				APISELECTION = "LOG";
				proc_stmt = con.prepareStatement("{ call LSW_SANALYTICSOUTPUT_COMBINED (?,?,?,?,?) }");

				proc_stmt.setString(1, "LOG"); // API SELECTION
				proc_stmt.setString(2, e.toString()); // UNIQUEID FROM 2 
				proc_stmt.setString(3, UNIQUEID1);  // RESPONSE FROM 2
				proc_stmt.setString(4, "FAILURE"); 
				proc_stmt.setString(5, e.toString());

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