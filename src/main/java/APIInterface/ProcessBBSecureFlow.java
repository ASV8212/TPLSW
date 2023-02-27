package APIInterface;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import CommonModel.DBConnection;
import Controls.GetDBData;

public class ProcessBBSecureFlow {
	static String flowprocName = "LSW_SAUTOFLOWDATA_FLOW";
	public String processAcquiredData() {
		String resp = "";
		List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();
		resultList = checkfiletoprcs();
		ArrayList<String> data = new ArrayList<String>();
		for (int i = 0; i < resultList.size(); i++) {
			String token = "";
			String valresp = "";
			String json = "";
			String jogetresponse = "";
			String insautoflow = "";
			String processflow = "";
			token = resultList.get(i).get("TOKN").toString();
			json = resultList.get(i).get("JSON").toString();
			valresp = valdDatabefrPush(token);
			JsonObject jsonObjectval = new JsonParser().parse(valresp).getAsJsonObject();
			JsonObject jsonObject = new JsonParser().parse(json).getAsJsonObject();
			if (!jsonObjectval.get("Code").getAsString().equals("200")) {
				break;
			}
			jogetresponse = WFInit();
			if (!jogetresponse.split("~")[0].contains("_")) {
				GetDBData.Call("Workflow Initiation Failed", token, String.valueOf(HttpServletResponse.SC_CONFLICT), "",
						"", "LSW_SBLACKBUCK_PRCS_UPDTR");
				break;
			}
			if (jogetresponse.split("~")[0].equals("No Data")) {
				GetDBData.Call("Workflow Initiation Failed", token, String.valueOf(HttpServletResponse.SC_CONFLICT), "",
						"", "LSW_SBLACKBUCK_PRCS_UPDTR");
				break;
			}
			insautoflow = insautoflowdata(jogetresponse.split("~")[0], token);
			JsonObject jsonObjectvalins = new JsonParser().parse(insautoflow).getAsJsonObject();
			if (!jsonObjectvalins.get("Code").getAsString().equals("200")) {
				break;
			}
			processflow = processflow(jsonObject.get("autoflow").getAsString(),
					jogetresponse.split("~")[0], jogetresponse.split("~")[1],token);	
			
		}
		return resp;
	}
	
	private static List<Map<String, Object>> checkfiletoprcs() {
		List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt = null;
		ResultSet rs = null;
		try {
			procstmt = con.prepareStatement("{ call LSW_SBLACKBUCK_PRCS (?,?,?,?,?) }");
			procstmt.setString(1, "");
			procstmt.setString(2, "");
			procstmt.setString(3, "");
			procstmt.setString(4, "");
			procstmt.setString(5, "");
			rs = procstmt.executeQuery();
			ResultSetMetaData metaData = rs.getMetaData();
			Integer columnCount = metaData.getColumnCount();
			Map<String, Object> row1 = null;
			resultList.clear();
			while (rs.next()) {
				row1 = new HashMap<String, Object>();
				for (int i = 1; i <= columnCount; i++) {
					row1.put(metaData.getColumnName(i), rs.getObject(i));
				}
				resultList.add(row1);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (rs != null) {
					rs.close();
				}
				if (procstmt != null) {
					procstmt.close();
				}
				if (con != null) {
					con.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return resultList;
	}
	private static String valdDatabefrPush(String token) {
		ArrayList<String> data = new ArrayList<String>();
		data = GetDBData.Call(token, "", "", "", "", "LSW_SBLACKBUCKACQUIRE_VALIDATOR");
		return data.get(0);
	}
	private static String WFInit() {
		StringBuffer content = new StringBuffer();
		try {
			ArrayList<String> data = new ArrayList<String>();
			data = GetDBData.Call("C002", "", "", "", "", "LSW_SGETAPIHDRURL");
			String applnurl = data.get(0);
			URL url = new URL(applnurl + "/TPLSW/WFINITAPI?usrSession=APIUser");
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("POST");
			int status = con.getResponseCode();
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String inputLine;

			while ((inputLine = in.readLine()) != null) {
				content.append(inputLine);
			}
			in.close();
			con.disconnect();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return content.toString();
	}
	private static String insautoflowdata(String processID, String token) {
		ArrayList<String> data = new ArrayList<String>();
		data = GetDBData.Call(token, processID, "", "", "", "LSW_SBLACKBUCKDATA_INS");
		return data.get(0);
	}
	
	private static String processflow(String autoflow, String prcsid, String actvtyid, String refno) {
		String resp = "";
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt = null;
		ResultSet rs = null;
		String xml = "";
		String response = "";

		ArrayList<String> data = new ArrayList<String>();
		try {
			procstmt = con.prepareStatement("{ call " + flowprocName + " (?,?,?,?,?) }");
			procstmt.setString(1, "");
			procstmt.setString(2, "");
			procstmt.setString(3, "");
			procstmt.setString(4, "");
			procstmt.setString(5, "");
			rs = procstmt.executeQuery();
			ResultSetMetaData metaData = rs.getMetaData();
			Integer columnCount = metaData.getColumnCount();
			Map<String, Object> row1 = null;
			List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();
			resultList.clear();
			while (rs.next()) {
				row1 = new HashMap<String, Object>();
				for (int i = 1; i <= columnCount; i++) {
					row1.put(metaData.getColumnName(i), rs.getObject(i));
				}
				resultList.add(row1);
			}
			for (int i = 0; i < resultList.size(); i++) {

				if (resultList.get(i).get("ACTVNAME").toString().equals(autoflow)) {
					resp = "{\"Code\":\"200\",\"Status\":\"Success\",\"Message\":\"Success\",\"Url\":\"\",\"Result\":\"Flow Process Completed\"}";
					return resp;
				}
				if (resultList.get(i).get("ACTVDEFID").toString().equals("PreLogin")) {

					data = GetDBData.Call(prcsid, "", "", "", "", "LSW_SCHECKPFCOLLECTION");

					if (!data.get(0).equals("SUCCESS")) {
						data = GetDBData.Call("Pre-Login Stage Validation Failed", refno,String.valueOf(HttpServletResponse.SC_BAD_REQUEST) , data.get(0), "","LSW_SBLACKBUCK_PRCS_UPDTR");
						return data.get(0);
					}
				} else if (resultList.get(i).get("ACTVDEFID").toString().equals("SendToCredit")) {
					String prcesAutoFlow = processAutoFlow(prcsid, refno,"API");
					if (!prcesAutoFlow.equals("Success")) {
						return prcesAutoFlow;
					}
					 

				}

				if (resultList.get(i).get("ACTVDEFID").toString().equals("PreLogin")
						|| resultList.get(i).get("ACTVDEFID").toString().equals("PLVer")) {
					data = GetDBData.Call(prcsid, resultList.get(i).get("ACTVDEFID").toString(), "", "", "",
							"LSW_SWFVARDECIDE");
					xml = data.get(0);
					if (xml.equals("SC") || xml.equals("Verification") || xml.equals("FrwdV")) {

						response = WFComplete(actvtyid, "var_status=" + xml, "APIUser", "themepass");
						if (response.split("~")[0].equals("completed")) {
							data = GetDBData.Call(prcsid, resultList.get(i + 1).get("ACTVDEFID").toString(), "", "", "",
									"LSW_SGETACTIVITYID_AUTOFLOW");
							actvtyid = data.get(0);
							if(resultList.get(i).get("ACTVDEFID").toString().equals("PreLogin"))
							{
								GetDBData.Call(prcsid, "", "", "", "Data Entry submission","LSW_SSMSEMAILLINKSND");
							}
						} else {
							resp = "FAIL";
							return resp;
						}
					} else {
						GetDBData.Call("PL Verification Stage Validation Failed", refno,String.valueOf(HttpServletResponse.SC_BAD_REQUEST) , xml, "","LSW_SAUTOTRAC_PRCS_UPDTR");
					}
				} else if (resultList.get(i).get("ACTVDEFID").toString().equals("SendToCredit")) {
					data = GetDBData.Call(prcsid + "|" + actvtyid, "DEVIATIONS", "APIUser", "", "",
							"LSW_SONSUBMTWFDTLINS");
					if (data.get(0).contains("var_")) {
						response = WFComplete(actvtyid, data.get(0), "APIUser", "themepass");
						if (response.split("~")[0].equals("completed")) {
							data = GetDBData.Call(prcsid, resultList.get(i + 1).get("ACTVDEFID").toString(), "", "", "",
									"LSW_SGETACTIVITYID_AUTOFLOW");
							actvtyid = data.get(0);
						} else {
							resp = "FAIL";
							return resp;
						}
					} else {
						data = GetDBData.Call(data.get(0), refno,String.valueOf(HttpServletResponse.SC_BAD_REQUEST) , data.get(0), "","LSW_SBLACKBUCK_PRCS_UPDTR");
						return data.get(0);
					}
				} else if (resultList.get(i).get("ACTVDEFID").toString().contains("RCMDI")) {
					
					data = GetDBData.Call(prcsid, "", "", "", "","LSW_SUCVECOAPICASESANCSUBMIT");
					
					response = WFComplete(actvtyid, data.get(0).replace("%26", "&"), "APIUser", "themepass");
					if (response.split("~")[0].equals("completed")) {
						data = GetDBData.Call(prcsid, resultList.get(i + 1).get("ACTVDEFID").toString(), "", "", "",
								"LSW_SGETACTIVITYID_AUTOFLOW");
						actvtyid = data.get(0);
						if(resultList.get(i).get("ACTVDEFID").toString().equals("RCMDI"))
						{
							GetDBData.Call(prcsid, "", "", "", "In-principle approval - 1","LSW_SSMSEMAILLINKSND");
							GetDBData.Call(prcsid, "", "", "", "In-principle approval - 2","LSW_SSMSEMAILLINKSND");
						}
					} else {
						resp = "FAIL";
						return resp;
					}

				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return resp;
	}
	private static String WFComplete(String actvid, String wdata, String usrSession, String cpmSession) {
		StringBuffer content = new StringBuffer();
		try {
			ArrayList<String> data = new ArrayList<String>();
			data = GetDBData.Call("C002", "", "", "", "", "LSW_SGETAPIHDRURL");
			String applnurl = data.get(0);
			URL url = new URL(applnurl + "/TPLSW/WFCOMPLETEAPI?usrSession=" + usrSession + "&cpmSession=" + cpmSession
					+ "&actvid=" + actvid + "&wdata=" + wdata);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("POST");
			int status = con.getResponseCode();
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String inputLine;

			while ((inputLine = in.readLine()) != null) {
				content.append(inputLine);
			}
			in.close();
			con.disconnect();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return content.toString();
	}
	private static String processAutoFlow(String prcsid, String refno,String reqfrm) {
		StringBuffer content = new StringBuffer();
		try {
			ArrayList<String> data = new ArrayList<String>();
			data = GetDBData.Call("C002", "", "", "", "", "LSW_SGETAPIHDRURL");
			String applnurl = data.get(0);
			URL url = new URL(applnurl + "/TPLSW/processBBAutoFlow?prcsid=" + prcsid + "&refno=" + refno+"&reqfrm="+reqfrm);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("POST");
			int status = con.getResponseCode();
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String inputLine;

			while ((inputLine = in.readLine()) != null) {
				content.append(inputLine);
			}
			in.close();
			con.disconnect();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return content.toString();
	}
}
