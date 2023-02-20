package Integration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
//import java.util.Random;

import org.codehaus.jettison.json.JSONObject;

import CommonModel.DBConnection;
import Controls.Connections;
import Controls.InterfacePosidex;

public class PosidexDedupeGetInfo {
	
//	public static void main(String a[]) throws Exception
//	{
////		InterfacePosidexService("https://appsuat.tvscredit.com/tvs/vs/enquiryservice.do", "name=getenquirystatus&key=5dfd585c8f4264333a6b7a3df9afc3fd324bd1c5042533abaf865454caa8bb6e&data={\"applicanttype\":\"BORROWER\",\"enquirynumber\":\"3000CD007\",\"applicantid\":\"1\"}", "", "");
//		new PosidexDedupe().PosidexService("LSW_SPOSIDEXAPICREATE", "", "Individual", "Insert", "Testing"+new Random().nextInt(100000));
//	}

	
	public String PosidexService(String spname,String Input1,String Input2,String Input3,String Input4,String processid) throws Exception
	{
		Connection conPS= null;
		PreparedStatement prsPS=null;
		PreparedStatement prsPS1=null;
		ResultSet rstPS=null;
		String URL="";
		String XMLData="";
//		String contentType="";
		String uniqueid="";
		String Result="";
		String Cusid="";
		String LMSREQXML="";
		String LMSRESXML="";
		String CUSINFO="";
		String ProcessID="";
		String ActivityID="";
		int timer=0;
		
		PreparedStatement  proc_stmt1 = null;
		ResultSet rs1 = null;
		Connection con1 = DBConnection.getConnection("LMS");
		
		PreparedStatement  proc_stmt = null;
		ResultSet rs = null;
		Connection con = DBConnection.getConnection(null);
		
		try
		{
			if(conPS==null)
				conPS=DBConnection.getConnection(null);
			
			prsPS=conPS.prepareStatement("{ call " +spname+ "(?,?,?,?,?) }");
			prsPS.setString(1, Input1);
			prsPS.setString(2, Input2);
			prsPS.setString(3, Input3);
			prsPS.setString(4, Input4);
    		prsPS.setString(5, processid);
    		
    		rstPS=prsPS.executeQuery();
			ResultSetMetaData rsmd = rstPS.getMetaData();
		    int colCount = rsmd.getColumnCount();
		    	  
		    	while(rstPS.next())
		    	{
		    		URL=rstPS.getString(1);
		    		XMLData=rstPS.getString(2);
		    		uniqueid=rstPS.getString(3);
		    		Cusid=rstPS.getString(4);
		    		LMSREQXML  = rstPS.getString(5);
		    		timer=rstPS.getInt(6);
		    	}
		    	
		    if(colCount>1){
		    	
		    	Result=InterfacePosidex.InterfacePosidexService(URL, XMLData, "application/x-www-form-urlencoded", uniqueid);
		    	
		    	String[] resultval=Result.split("!@#");
		    	
		    	String Status=resultval[0];
		    	String Message=resultval[1];
		    	
		    	prsPS1=conPS.prepareStatement("{ call " +spname+"_UPD" + "(?,?,?,?,?) }");
			  	
		    	prsPS1.setString(1, Status);
		    	prsPS1.setString(2, Message);
		    	prsPS1.setString(3, Input2);
		    	prsPS1.setString(4, Input3);
			  	prsPS1.setString(5, uniqueid);
				
			  	prsPS1.executeQuery();
			  	
			  	JSONObject jd= new JSONObject(Message);
			  	
			  	if(jd.getString("statusCode").equals("SR") )
			  	{
			  		Result=InterfacePosidex.InterfacePosidexService(URL, XMLData, "application/x-www-form-urlencoded", uniqueid);
			    	
			  	}
	 
		}
	}
		catch(Exception excd)
		{
			excd.printStackTrace();
			Result="Exception"+"~"+excd.getMessage();
		}
		finally
		{
			DBConnection.closeConnection(null, prsPS1, null);
			DBConnection.closeConnection(conPS, prsPS, rstPS);
		}
		 return ProcessID +"~" + ActivityID;
	}
}
