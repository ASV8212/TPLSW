package APIInterface;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import CommonModel.DBConnection;
import Controls.GetDBData;
import Controls.WFCall;
import Integration.CibilSerivceAPI;
import Integration.PosidexDedupe;






public class processAutoFlow {
	static String execprocName = "LSW_SAUTOFLOWDATA_EXECPTN";
	static List<Map<String, Object>> resultList_cusid = new ArrayList<Map<String, Object>>();

	public static String processAutoFlowHandlr(String prcsid, String refno,String reqfrm) {
		String resp = "Success";
		String actvtyid = "";
		String response = "";
		ArrayList<String> data = new ArrayList<String>();

		try {
			if (!reqfrm.equals("WEB")) {
				if (chkPosidex(prcsid,reqfrm).equals("Fail")) {
					data = GetDBData.Call("DeDupe Failed", "", "", "", refno, execprocName);
					return data.get(0);
				}
			}
			/*********** CIBIL FAIL OCCURED WHILE ON HITTING IN N8 *********/

			if (chkCibil(prcsid).equals("Fail")) {
				data = GetDBData.Call("Cibil Failed", "", "", "", refno, execprocName);
				return data.get(0);
			}

			data = GetDBData.Call(prcsid, "", "", "", "", "LSW_SCHKSCHEMECOUNT");
			/*********** ALL THE STAGE VALIDATION HAS BEEN REMOVED FOR UCV ECO *********/
			if (!data.get(0).equals("")) {
				data = GetDBData.Call("Underwriting Stage Validation Failed", data.get(0), "", "", refno, execprocName);
				return data.get(0);
			}
			if (chkBRERule(prcsid).equals("Fail")) {
				/*********** ALL THE BRE RESPONSE FAILED *********/
				data = GetDBData.Call("BRE Rule Failed, File has been Rejected", "", "", "", refno, execprocName);
				return data.get(0);
			}
			data = genScoreCard(prcsid);
			if (data.get(0).equals("Fail")) {
				data = GetDBData.Call("Score Card Failed", "", "", "", refno, execprocName);
				return data.get(0);
			}
			if(reqfrm.equals("API"))
			{
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
						data = GetDBData.Call(data.get(0), "", "", "", "", execprocName);
						return data.get(0);
					}

					response = WFCall.WFComplete(actvtyid, "var_rstatus=Sanction", "APIUser", "themepass", "",
							"LSW_SWFCompleteCALL");
					if (response.split("~")[0].equals("completed")) {
						//data = GetDBData.Call(prcsid, "RCMDI", "", "", "", "LSW_SGETACTIVITYID_AUTOFLOW");
						//actvtyid = data.get(0);
					} else {
						resp = response;
						return resp;
					}

				}
			}
			
		} catch (Exception e) {
			data = GetDBData.Call(e.getMessage(), "", "", "", "", execprocName);
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
		    resultList_cusid.clear();
		    PosidexDedupe getdata = new PosidexDedupe();
		    while (rs.next()) {
				  row1 = new HashMap<String, Object>();
			        for (int i = 1; i <= columnCount; i++) {
			        	row1.put(metaData.getColumnName(i), rs.getObject(i));
			        }
			        resultList_cusid.add(row1);
			  }
		    for (int i = 0; i < resultList_cusid.size(); i++) {
		    	op= "";
		    	op = getdata.PosidexService("LSW_SPOSIDEXAPICREATE","",resultList_cusid.get(i).get("CUSTYPE").toString(),"Insert",
		    			resultList_cusid.get(i).get("CUSID").toString(),prcsid);
		    	ArrayList<String> data = new ArrayList<String>();
		    	data = GetDBData.Call(prcsid, resultList_cusid.get(i).get("CUSID").toString(), "Insert", resultList_cusid.get(i).get("CUSTYPE").toString(), reqfrm, "LSW_SGETPOSIDEXRESPONSE");
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
			 for (int i = 0; i < resultList_cusid.size(); i++) {
			    	op= "";
			    	op = getdata.CibilSerivceCall("LSW_SCIBILAPICREATE",applicationNo,resultList_cusid.get(i).get("CUSID").toString(),prcsid);
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
}
