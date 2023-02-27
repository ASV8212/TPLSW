<<<<<<< HEAD
package APIInterface;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import Controls.GetDBData;

public class BBRcuInitiation {
	public String BBrcuInitHndlr(HttpServletRequest request) {

		String prcsid = request.getParameter("prcsid");
		String actid = request.getParameter("actid");
		String RESULTPUSH = "";
		String RESULTFLAG = "";
		String RESULTMSG = "";
		String RESULT = "";
		String DOCUPLDRES = "";

		ArrayList<String> docupld = new ArrayList<String>();
		ArrayList<String> datapush = new ArrayList<String>();
		ArrayList<String> datastatus = new ArrayList<String>();
		ArrayList<String> rcugrp = new ArrayList<String>();
		docupld = GetDBData.Call(prcsid, "", "", "", "", "LSW_SDOCUPLDCHECK");
		DOCUPLDRES=docupld.get(0);
		JsonObject jsonObject = (new JsonParser()).parse(DOCUPLDRES).getAsJsonObject();
		if (jsonObject.get("Code").getAsString().equals("200"))
		{
		datapush = GetDBData.Call(prcsid, "", "", "", "", "LSW_SPUSHDATATORCUTBL");
		RESULTPUSH = datapush.get(0);
		if (RESULTPUSH == "Y") {
			datastatus = GetDBData.Call(prcsid, "", "", "", "", "LSW_SGETRCUSTATUS");
			RESULTFLAG = datastatus.get(0);
			RESULTMSG = datastatus.get(1);
			if (RESULTFLAG == "SUCCESS") {
				String[] RESULTMSGArr = RESULTMSG.toString().split("|");
				String GRP = RESULTMSGArr[0];
				String UNIQid = RESULTMSGArr[1];
				String UNIQid1 = RESULTMSGArr[2];
				rcugrp = GetDBData.Call(GRP, "", "", "", "", "LSW_CHKIRCUGROUP");
				GRP = rcugrp.get(0);
				
				String WFVndACTVINIT1 = WFVendrInit(actid,prcsid,GRP,UNIQid,UNIQid1);
				

				if (WFVndACTVINIT1 == "Success") {
					GetDBData.Call(GRP, UNIQid, UNIQid1, "", "", "LSW_SUPDATEIRCUGROUP");
					RESULT = "RCU - File Assigned";
				} else {
					RESULT = "RCU - Initiation Failed";
				}
			} else {
				RESULT = RESULTMSG.toString();
			}
			GetDBData.Call(prcsid, "", "", "", "", "LSW_SUPDTINITSTATUS");
		}
		
		}
		else
		{
			RESULT = DOCUPLDRES.toString();
		}
		return RESULT;
	}

	private static String WFVendrInit(String actid,String prcsid,String GRP,String UNIQid,String UNIQid1) {
		StringBuffer content = new StringBuffer();
		try {
			ArrayList<String> data = new ArrayList<String>();
			data = GetDBData.Call("C002", "", "", "", "", "LSW_SGETAPIHDRURL");
			String applnurl = data.get(0);
			URL url = new URL(applnurl + "/TPLSW/WFVNDACTVINITAPI?ACTVID="+actid+"&WDATA="+prcsid+"|VendorInitiate|Vendor|var_status=SVF&var_statusHES="+GRP+"&var_INFO1="+GRP+"~"+GRP+"~"+UNIQid+"~"+UNIQid1+"|ADMIN"+"&SPNAME=LSW_SWFACTVINITCALL&usrSession=APIUser&CPMSession=themepass");
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
=======
package APIInterface;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import Controls.GetDBData;

public class BBRcuInitiation {
	public String BBrcuInitHndlr(HttpServletRequest request) {

		String prcsid = request.getParameter("prcsid");
		String actid = request.getParameter("actid");
		String RESULTPUSH = "";
		String RESULTFLAG = "";
		String RESULTMSG = "";
		String RESULT = "";
		String DOCUPLDRES = "";

		ArrayList<String> docupld = new ArrayList<String>();
		ArrayList<String> datapush = new ArrayList<String>();
		ArrayList<String> datastatus = new ArrayList<String>();
		ArrayList<String> rcugrp = new ArrayList<String>();
		docupld = GetDBData.Call(prcsid, "", "", "", "", "LSW_SDOCUPLDCHECK");
		DOCUPLDRES=docupld.get(0);
		JsonObject jsonObject = (new JsonParser()).parse(DOCUPLDRES).getAsJsonObject();
		if (jsonObject.get("Code").getAsString().equals("200"))
		{
		datapush = GetDBData.Call(prcsid, "", "", "", "", "LSW_SPUSHDATATORCUTBL");
		RESULTPUSH = datapush.get(0);
		if (RESULTPUSH == "Y") {
			datastatus = GetDBData.Call(prcsid, "", "", "", "", "LSW_SGETRCUSTATUS");
			RESULTFLAG = datastatus.get(0);
			RESULTMSG = datastatus.get(1);
			if (RESULTFLAG == "SUCCESS") {
				String[] RESULTMSGArr = RESULTMSG.toString().split("|");
				String GRP = RESULTMSGArr[0];
				String UNIQid = RESULTMSGArr[1];
				String UNIQid1 = RESULTMSGArr[2];
				rcugrp = GetDBData.Call(GRP, "", "", "", "", "LSW_CHKIRCUGROUP");
				GRP = rcugrp.get(0);
				
				String WFVndACTVINIT1 = WFVendrInit(actid,prcsid,GRP,UNIQid,UNIQid1);
				

				if (WFVndACTVINIT1 == "Success") {
					GetDBData.Call(GRP, UNIQid, UNIQid1, "", "", "LSW_SUPDATEIRCUGROUP");
					RESULT = "RCU - File Assigned";
				} else {
					RESULT = "RCU - Initiation Failed";
				}
			} else {
				RESULT = RESULTMSG.toString();
			}
			GetDBData.Call(prcsid, "", "", "", "", "LSW_SUPDTINITSTATUS");
		}
		
		}
		else
		{
			RESULT = DOCUPLDRES.toString();
		}
		return RESULT;
	}

	private static String WFVendrInit(String actid,String prcsid,String GRP,String UNIQid,String UNIQid1) {
		StringBuffer content = new StringBuffer();
		try {
			ArrayList<String> data = new ArrayList<String>();
			data = GetDBData.Call("C002", "", "", "", "", "LSW_SGETAPIHDRURL");
			String applnurl = data.get(0);
			URL url = new URL(applnurl + "/TPLSW/WFVNDACTVINITAPI?ACTVID="+actid+"&WDATA="+prcsid+"|VendorInitiate|Vendor|var_status=SVF&var_statusHES="+GRP+"&var_INFO1="+GRP+"~"+GRP+"~"+UNIQid+"~"+UNIQid1+"|ADMIN"+"&SPNAME=LSW_SWFACTVINITCALL&usrSession=APIUser&CPMSession=themepass");
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
>>>>>>> 7d3942bc6a8605ab885cdb80ab9877f7cad404e3
