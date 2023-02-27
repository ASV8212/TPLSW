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

public class PosidexDedupe {
	
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
		    	if(!Input3.equals("GetStatus"))
		    	{
		    		Result=InterfacePosidex.InterfacePosidexService(URL, XMLData, "application/x-www-form-urlencoded", uniqueid);
		    	}
		    	if(Input3.equals("GetStatus"))
		    	{
		    		Result=InterfacePosidex.InterfacePosidexService(URL, XMLData, "application/json", uniqueid);
		    	}
		    	
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
				if (Input3.equals("Insert")) {
					if (jd.getString("statusCode").equals("SR")) {
						Thread.sleep(timer);
						Result = new PosidexDedupe().PosidexService("LSW_SPOSIDEXAPICREATE", uniqueid, Input2,
								"GetStatus", Cusid, processid);
					}
				}
				if (Input3.equals("GetStatus")) {
					if (jd.getString("statusCode").equals("SR")) {
						if (jd.getJSONArray("matchdetails").length() == 0) {
							Thread.sleep(timer);
							Result = new PosidexDedupe().PosidexService("LSW_SPOSIDEXAPICREATE", uniqueid, Input2,
									"initcustomerid", Cusid, processid);
						}
					}
					if (jd.getString("statusCode").equals("ER")) {
						if(jd.getString("statusMessage").equals("No enquiry details found.")) {
							Thread.sleep(timer);
							Result = new PosidexDedupe().PosidexService("LSW_SPOSIDEXAPICREATE", uniqueid, Input2,
									"initcustomerid", Cusid, processid);
						}
					}
				}
				if (Input3.equals("initcustomerid")) {
					if (jd.getString("status").equals("SR")) {
						Thread.sleep(timer);
						Result = new PosidexDedupe().PosidexService("LSW_SPOSIDEXAPICREATE", uniqueid, Input2,
								"getcustomerid", Cusid, processid);
					}
				}
				
				if (Input3.equals("getcustomerid")) {
					if (jd.getString("status").equals("SR")) {
						Thread.sleep(timer);
						Result = pushcusdetl(processid,Cusid,jd.getJSONObject("data").get("customerno").toString(),jd.getJSONObject("data").get("posiid").toString());
					}
				}
			 //LMS START   
			    if(Input3.equals("Insert"))
			  	{ 
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
	
			 proc_stmt.setString(1, uniqueid); // XML
			 proc_stmt.setString(2, LMSRESXML); // 
			 proc_stmt.setString(3, processid); // 
			 proc_stmt.setString(4, Cusid); // 
			 proc_stmt.setString(5, Message); // 
	
			 rs = proc_stmt.executeQuery();
			 	
			 while (rs.next()) {
			 	CUSINFO = rs.getString(1);	
			 }
	
			 Connections.Call(proc_stmt,rs,con,"Commit");
	
			 if (CUSINFO.contains("ERROR"))
			 {
			 	ProcessID = CUSINFO.split("~")[0];
			 	ActivityID = CUSINFO.split("~")[1];
			 }
			 else
			 {
			 	ProcessID = "Success";
			 	ActivityID = CUSINFO;
			 }
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

	protected String pushcusdetl(String prcsid, String loscusid, String posidexcusid,String posid) throws Exception {
		PreparedStatement prsPS = null;
		ResultSet rs1 = null;
		Connection con1 = DBConnection.getConnection(null);

		PreparedStatement prsPS1 = null;
		ResultSet rs2 = null;
		Connection con2 = DBConnection.getConnection(null);
		
		PreparedStatement prsPS2 = null;
		Connection con3 = DBConnection.getConnection(null);
		
		String Result = "";
		String request = "";
		String URL = "";
		try {
			prsPS = con1.prepareStatement("{ call LSW_SPUSHPOSIDEXTOCUSID (?,?,?) }");

			prsPS.setString(1, prcsid);
			prsPS.setString(2, loscusid);
			prsPS.setString(3, posidexcusid);

			rs1 = prsPS.executeQuery();

			while (rs1.next()) {
				Result = rs1.getString(1);
			}

			Connections.Call(prsPS, rs1, con1, "Commit");

			prsPS1 = con2.prepareStatement("{ call LSW_SPASSCUSDATATOPOSIDEX_1 (?,?,?,?,?) }");

			prsPS1.setString(1, posid);
			prsPS1.setString(2, "");
			prsPS1.setString(3, "");
			prsPS1.setString(4, "");
			prsPS1.setString(5, "");

			rs2 = prsPS1.executeQuery();

			while (rs2.next()) {
				request = rs2.getString(1);
				URL = rs2.getString(2);
				
			}
			Result = InterfacePosidex.InterfacePosidexService(URL, request, "application/json", "");
			
			prsPS2 = con2.prepareStatement("{ call LSW_SPASSCUSDATATOPOSIDEX_1_UPD (?,?,?,?,?) }");

			prsPS2.setString(1, posid);
			prsPS2.setString(2, Result);
			prsPS2.setString(3, "");
			prsPS2.setString(4, "");
			prsPS2.setString(5, "");

			prsPS2.executeQuery();
			
		} catch (Exception excd) {
			excd.printStackTrace();
			Result = "Exception" + "~" + excd.getMessage();
		} finally {
			DBConnection.closeConnection(con1, prsPS, rs1);
			DBConnection.closeConnection(con2, prsPS1, rs2);
			DBConnection.closeConnection(con3, prsPS2, null);
		}
		return Result;
	}
}
