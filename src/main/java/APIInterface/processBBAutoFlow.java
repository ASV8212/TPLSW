package APIInterface;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import CommonModel.DBConnection;
import Controls.GetDBData;
import Controls.WFCall;
import Integration.CibilSerivceAPI;
import Integration.PosidexDedupe;






public class processBBAutoFlow {
	static String execprocName = "LSW_SBLACKBUCK_PRCS_UPDTR";
	static List<Map<String, Object>> resultList_cusid1 = new ArrayList<Map<String, Object>>();

	public static String processAutoFlowHandlr(String prcsid, String refno,String reqfrm) {
		String resp = "Success";
		String actvtyid = "";
		String response = "";
		ArrayList<String> data = new ArrayList<String>();

		try {
			if (!reqfrm.equals("WEB")) {
				if (chkPosidex(prcsid,reqfrm).equals("Fail")) {
					data = GetDBData.Call("DeDupe Failed", refno, String.valueOf(HttpServletResponse.SC_CONFLICT), "", "", execprocName);
					return data.get(0);
				}
			}
			
			loadcusidtoArray(prcsid);
			/*********** CIBIL FAIL OCCURED WHILE ON HITTING IN N8 *********/

			if (chkCibil(prcsid).equals("Fail")) {
				data = GetDBData.Call("Cibil Failed", refno, String.valueOf(HttpServletResponse.SC_CONFLICT), "", "", execprocName);
				resultList_cusid1.clear();
				return data.get(0);
			}

			if (chkBRERule(prcsid).equals("Fail")) {
				/*********** ALL THE BRE RESPONSE FAILED *********/
				data = GetDBData.Call("BRE Rule Failed, File has been Rejected", refno, String.valueOf(HttpServletResponse.SC_CONFLICT), "", "", execprocName);
				resultList_cusid1.clear();
				return data.get(0);
			}
			data = genScoreCard(prcsid);
			if (data.get(0).equals("Fail")) {
				data = GetDBData.Call("Score Card Failed", refno, String.valueOf(HttpServletResponse.SC_CONFLICT), "", "", execprocName);
				resultList_cusid1.clear();
				return data.get(0);
			}
			data = GetDBData.Call(prcsid, "", "", "", "", "LSW_SCHKSCHEMECOUNT");
			/*********** ALL THE STAGE VALIDATION HAS BEEN REMOVED FOR UCV ECO *********/
			if (!data.get(0).equals("")) {
				data = GetDBData.Call("Underwriting Stage Validation Failed", refno, String.valueOf(HttpServletResponse.SC_CONFLICT), "", "", execprocName);
				resultList_cusid1.clear();
				return data.get(0);
			}
			if(reqfrm.equals("API"))
			{
				resultList_cusid1.clear();
				return resp;
			}
			else if(reqfrm.equals("WEB"))
			{
				if (resp.equals("Success")) {
					data = GetDBData.Call(prcsid, "SendToCredit", "", "", "", "LSW_SGETACTIVITYID_AUTOFLOW");
					actvtyid = data.get(0);
					data = GetDBData.Call(prcsid + "|" + actvtyid, "DEVIATIONS", "APIUser", "", "", "LSW_SONSUBMTWFDTLINS");
					if (data.get(0).contains("var_")) {
						response = WFCall.WFComplete(actvtyid, data.get(0), "APIUser", "themepass", "",
								"LSW_SWFCompleteCALL");
						if (response.split("~")[0].equals("completed")) {
							data = GetDBData.Call(prcsid, "RCMDI", "", "", "", "LSW_SGETACTIVITYID_AUTOFLOW");
							actvtyid = data.get(0);
						} else {
							resp = response;
							return resp;
						}
	   				} else {
						data = GetDBData.Call(data.get(0),  refno, String.valueOf(HttpServletResponse.SC_CONFLICT), "", "", execprocName);
						return data.get(0);
					}
					data = GetDBData.Call(prcsid, "", "", "", "","LSW_SUCVECOAPICASESANCSUBMIT");
					response = WFCall.WFComplete(actvtyid, data.get(0).replace("%26", "&"), "APIUser", "themepass", "",
							"LSW_SWFCompleteCALL");
					if (response.split("~")[0].equals("completed")) {
						data = GetDBData.Call(prcsid, actvtyid, "", "", "", "LSW_SPUSHDATATOAPPTBL_API");
						//actvtyid = data.get(0);
						GetDBData.Call(prcsid, "", "", "", "In-principle approval - 1","LSW_SSMSEMAILLINKSND");
						GetDBData.Call(prcsid, "", "", "", "In-principle approval - 2","LSW_SSMSEMAILLINKSND");
					} else {
						resp = response;
						return resp;
					}

				}
				resultList_cusid1.clear();
			}
			
		} catch (Exception e) {
			data = GetDBData.Call(e.getMessage(), "", String.valueOf(HttpServletResponse.SC_CONFLICT), "", "", execprocName);
			resultList_cusid1.clear();
			return data.get(0);
		}
		return resp;
	}
	
	private static String chkPosidex(String prcsid,String reqfrm) {
		String resp = "";
		int counter = 0;
		Connection con = DBConnection.getConnection(null);
		ResultSet rs = null;
		Statement st = null;
		try {
			String op = "";
			Map<String, Object> row1 = null;
			st = con.createStatement();
			rs = st.executeQuery("SELECT ISNULL([CUS ID],'') CUSID, ISNULL(CUSTYPE,'') CUSTYPE"
			  		+ " FROM LSW_VCUSDETL WITH(NOLOCK) WHERE [PRCS ID] = '"+prcsid+"'");
			ResultSetMetaData metaData = rs.getMetaData();
		    Integer columnCount = metaData.getColumnCount();
		    resultList_cusid1.clear();
		    PosidexDedupe getdata = new PosidexDedupe();
		    while (rs.next()) {
				  row1 = new HashMap<String, Object>();
			        for (int i = 1; i <= columnCount; i++) {
			        	row1.put(metaData.getColumnName(i), rs.getObject(i));
			        }
			        resultList_cusid1.add(row1);
			  }
		    for (int i = 0; i < resultList_cusid1.size(); i++) {
		    	op= "";
		    	op = getdata.PosidexService("LSW_SPOSIDEXAPICREATE","",resultList_cusid1.get(i).get("CUSTYPE").toString(),"Insert",
		    			resultList_cusid1.get(i).get("CUSID").toString(),prcsid);
		    	ArrayList<String> data = new ArrayList<String>();
		    	data = GetDBData.Call(prcsid, resultList_cusid1.get(i).get("CUSID").toString(), "Insert", resultList_cusid1.get(i).get("CUSTYPE").toString(), reqfrm, "LSW_SGETPOSIDEXRESPONSE");
		    	op = data.get(0);
		    	if(!op.split("~")[0].equals("Success"))
		    	{
		    		counter++;
		    	}
		    }
		    if(counter>0)
		    {
		    	resp = "Fail";
		    }
		    else {
		    	resp = "Success";
		    }
		    
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally {
			try {
				if (rs != null) {
					rs.close();
				}
				if (st != null) {
					st.close();
				}
				if (con != null) {
					con.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return resp;
	}
	
	private static String chkCibil(String prcsid) {
		String resp = "";
		int counter = 0;
		String op = "";
		String applicationNo = null;
		CibilSerivceAPI getdata = new CibilSerivceAPI();
		Connection con = DBConnection.getConnection(null);
		Statement st = null;
		ResultSet rs = null;
		try {
			
			
			st = con.createStatement();
			rs = st.executeQuery("SELECT ISNULL(CBSI_APPLCNTNO,'') APPLICATIONNO"
			  		+ " FROM LSW_TCUSBASICINFO WITH(NOLOCK) WHERE CBSI_PRCSID = '"+prcsid+"'");
			while (rs.next()) {
				applicationNo = rs.getString("APPLICATIONNO");
			}
			 for (int i = 0; i < resultList_cusid1.size(); i++) {
			    	op= "";
			    	op = getdata.CibilSerivceCall("LSW_SCIBILAPICREATE",applicationNo,resultList_cusid1.get(i).get("CUSID").toString(),prcsid);
			    	if(!op.equals("Success"))
			    	{
			    		counter++;
			    	}
			    }
			    if(counter>0)
			    {
			    	resp = "Fail";
			    }
			    else {
			    	resp = "Success";
			    }
		}
		 catch (Exception e) {
				e.printStackTrace();
			}
		finally {
			try {
				if (rs != null) {
					rs.close();
				}
				if (st != null) {
					st.close();
				}
				if (con != null) {
					con.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return resp;
	}
	
	private static String chkBRERule(String prcsid) {
		ArrayList<String> data = new ArrayList<String>();
		data = GetDBData.Call(prcsid, "", "", "", "", "LSW_SAUTOFLOW_BREHANDLER");
		String actvtyid = "";
		if(data.get(0).equals("Fail"))
		{
			data = GetDBData.Call(prcsid, "SendToCredit", "", "", "",
					"LSW_SGETACTIVITYID_AUTOFLOW");
			actvtyid = data.get(0);
			WFCall.WFComplete(actvtyid,"var_status=Cancel", "APIUser", "themepass", "",
					"LSW_SWFCompleteCALL");
			return "Fail";
		}
		return data.get(0);
	}
	
	private static ArrayList<String> genScoreCard(String prcsid) {
		ArrayList<String> data = new ArrayList<String>();
		data = GetDBData.Call(prcsid, "", "", "", "", "LSW_SGENSCORECARD");
		return data;
	}
	private static void loadcusidtoArray(String prcsid) {
		Connection con = DBConnection.getConnection(null);
		ResultSet rs = null;
		Statement st = null;
		try {
			Map<String, Object> row1 = null;
			st = con.createStatement();
			rs = st.executeQuery("SELECT ISNULL([CUS ID],'') CUSID, ISNULL(CUSTYPE,'') CUSTYPE"
			  		+ " FROM LSW_VCUSDETL WITH(NOLOCK) WHERE [PRCS ID] = '"+prcsid+"'");
			ResultSetMetaData metaData = rs.getMetaData();
		    Integer columnCount = metaData.getColumnCount();
		    resultList_cusid1.clear();
		    while (rs.next()) {
				  row1 = new HashMap<String, Object>();
			        for (int i = 1; i <= columnCount; i++) {
			        	row1.put(metaData.getColumnName(i), rs.getObject(i));
			        }
			        resultList_cusid1.add(row1);
			  }
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	finally {
		try {
			if (rs != null) {
				rs.close();
			}
			if (st != null) {
				st.close();
			}
			if (con != null) {
				con.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	}
}
