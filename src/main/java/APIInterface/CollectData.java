package APIInterface;

import java.io.BufferedReader;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.json.simple.parser.JSONParser;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import CommonModel.DBConnection;
import Controls.GetDBData;
import Controls.WFCall;


public class CollectData {
	
	private CollectData() {
	    throw new IllegalStateException("Utility class");
	}
	static String execprocName = "LSW_SAUTOFLOWDATA_EXECPTN";
	static String valdprocName = "LSW_SAUTOFLOWDATA_VALD";
	static String valddataprocName = "LSW_SAUTOFLOWDATA_VALDDATA";
	static String insprocName = "LSW_SAUTOFLOWDATA_INS";
	static String flowprocName = "LSW_SAUTOFLOWDATA_FLOW";
	static String outputproc = "LSW_SAUTOFLOWDATA_OUTPUT";
	static String statusproc = "LSW_SAUTOFLOWDATA_STATUS";
	static String appln = "";
	static String loanbasicinfo="";
	static String coappln="";
	static String gaur="";
	static String laondetails="";
	static String bankfincdetails="";
	static String documentchecklist="";
	public static String dataHandler(HttpServletRequest request) {
		String resp = "";
		ArrayList<String> data = new ArrayList<String>();
		try
		{
			String requestBody = "";
			String valresp = "";
			String valrespdata = "";
			String insautoflow = "";
			String jogetresponse="";
			String processflow="";
			StringBuilder buffer = new StringBuilder();
			BufferedReader reader = request.getReader();
			String line;
			while ((line = reader.readLine()) != null) {
				buffer.append(line);
				buffer.append(System.lineSeparator());
			}
			requestBody = buffer.toString();
			if(requestBody.equals("") || requestBody == null)
			{
				data = GetDBData.Call("Request Body Missing", "", "", "", "", execprocName);
				resp = data.get(0);
				return resp;
			}
			JsonObject jsonObject = new JsonParser().parse(requestBody).getAsJsonObject();
			valresp = valdtAutoFlow(jsonObject.get("autoflow").getAsString());
			JsonObject jsonObjectval = new JsonParser().parse(valresp).getAsJsonObject();
			if(!jsonObjectval.get("CODE").getAsString().equals("200"))
			{
				return valresp;
			}
			jogetresponse = WFCall.WFInit("APIUser", "", "", "", "", "LSW_SWFINITCALL");
			if (!jogetresponse.split("~")[0].contains("_")) {
				data = GetDBData.Call(jogetresponse, "", "", "", "", execprocName);
				resp = data.get(0);
				return resp;
			}
			if(jogetresponse.split("~")[0].equals("No Data"))
			{
				data = GetDBData.Call("Workflow Initiation Failed", "", "", "", "", execprocName);
				resp = data.get(0);
				return resp;
			}
			valrespdata = valdDatabefrPush(requestBody,jogetresponse.split("~")[0]);
			JsonObject jsonObjectvalrespdata = new JsonParser().parse(valrespdata).getAsJsonObject();
			if(!jsonObjectvalrespdata.get("VALIDATIONSTATUS").getAsString().equals("SUCCESS"))
			{
				return valrespdata;
			}
			insautoflow=insautoflowdata(jogetresponse.split("~")[0],jogetresponse.split("~")[1],"");
			JsonObject jsonObjectvalins = new JsonParser().parse(insautoflow).getAsJsonObject();
			if(!jsonObjectvalins.get("CODE").getAsString().equals("200"))
			{
				return insautoflow;
			}
			processflow=processflow(jsonObject.get("autoflow").getAsString(),jogetresponse.split("~")[0],jogetresponse.split("~")[1]);
			data = GetDBData.Call(jogetresponse.split("~")[0], processflow, "", "", "", outputproc);
			resp = data.get(0);
			return resp;
		}
		catch(Exception e)
		{
			try {
				data = GetDBData.Call(e.toString()+"~"+e.getMessage(), "", "", "", "", execprocName);
				resp = data.get(0);
			} catch (Exception e1) {
				resp = "{\"CODE\":\"500\",\"MSG\":\"Unhandled Exception. Contact System Admin and check the log for more info.~"
						+ e1.getMessage() + "\"}";
			}
		}
		return resp;
	}
	private static String valdtAutoFlow(String autoflow) {
		ArrayList<String> data = new ArrayList<String>();
		data = GetDBData.Call(autoflow, "", "", "", "", valdprocName);
		return data.get(0);
	}

	private static String valdDatabefrPush(String requestBody,String processID) {
		String resp = "";
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt = null;
		ResultSet rs = null;
		try {
			JsonObject jsonObject = new JsonParser().parse(requestBody).getAsJsonObject();
			JsonArray jsonArray = jsonObject.getAsJsonArray("Data");
			String loanbasicinfostr = jsonArray.get(0).toString();
			JsonObject loanbasicinfojsonObject = new JsonParser().parse(loanbasicinfostr).getAsJsonObject();
			JsonArray loanbasicinfojsonArray = loanbasicinfojsonObject.getAsJsonArray("LoanBasicInfo");
			loanbasicinfo = loanbasicinfojsonArray.get(0).toString();
			String applicant = jsonArray.get(1).toString();
			
			JsonObject applicantjsonObject = new JsonParser().parse(applicant).getAsJsonObject();
			JsonArray applicantjsonArray = applicantjsonObject.getAsJsonArray("Applicant");
			String applicantinfo = applicantjsonArray.get(0).toString();
			
			JsonObject applicantpersonalinfojsonObject = new JsonParser().parse(applicantinfo).getAsJsonObject();
			JsonArray applicantpersonalinfojsonArray = applicantpersonalinfojsonObject.getAsJsonArray("ApplicantPersonalInfo");
			String applicantpersonalinfo = applicantpersonalinfojsonArray.get(0).toString();
			String applicantContactDetails = applicantjsonArray.get(1).toString();
			
			JsonObject applicantContactDetailsjsonObject = new JsonParser().parse(applicantContactDetails).getAsJsonObject();
			JsonArray applicantContactDetailsjsonArray = applicantContactDetailsjsonObject.getAsJsonArray("ApplicantContactDetails");
			String applicantContactDetailsinfo = applicantContactDetailsjsonArray.get(0).toString();
			
			/*String applicantEmployementDetails = applicantjsonArray.get(2).toString();
			JsonObject applicantEmployementDetailsjsonObject = new JsonParser().parse(applicantEmployementDetails).getAsJsonObject();
			JsonArray applicantEmployementDetailsjsonArray = applicantEmployementDetailsjsonObject.getAsJsonArray("ApplicantEmployementDetails");
			String applicantEmployementDetailsinfo = applicantEmployementDetailsjsonArray.get(0).toString();
			*/
			
			String applicantEmployementDetails = applicantjsonArray.get(2).toString();
			JsonObject applicantEmployementDetailsjsonObject = new JsonParser().parse(applicantEmployementDetails).getAsJsonObject();
			JsonArray applicantEmployementDetailsBulkjsonArray = applicantEmployementDetailsjsonObject.getAsJsonArray("ApplicantEmployementDetails");
			String ApplEmpDetls = applicantEmployementDetailsBulkjsonArray.get(0).toString();
			JsonObject ApplEmpDetlsjsonObject = new JsonParser().parse(ApplEmpDetls).getAsJsonObject();
			JsonArray ApplEmpDetlsinfojsonArray = ApplEmpDetlsjsonObject.getAsJsonArray("Employement");
			String ApplEmpDetl = ApplEmpDetlsinfojsonArray.toString();
			
			
			String CustomerSegmentation = applicantjsonArray.get(3).toString();
			JsonObject CustomerSegmentationjsonObject = new JsonParser().parse(CustomerSegmentation).getAsJsonObject();
			JsonArray CustomerSegmentationjsonArray = CustomerSegmentationjsonObject.getAsJsonArray("CustomerSegmentation");
			String CustomerSegmentationinfo = CustomerSegmentationjsonArray.get(0).toString();
			
			String coapplicant = jsonArray.get(2).toString();
			JsonObject coapplicantjsonObject = new JsonParser().parse(coapplicant).getAsJsonObject();
			JsonArray coapplicantjsonArray = coapplicantjsonObject.getAsJsonArray("Co-Applicant");
			String coapplicantinfo = coapplicantjsonArray.get(0).toString();
			
			JsonObject coapplicantpersonalinfojsonObject = new JsonParser().parse(coapplicantinfo).getAsJsonObject();
			JsonArray coapplicantpersonalinfojsonArray = coapplicantpersonalinfojsonObject.getAsJsonArray("Co-ApplicantPersonalInfo");
			String coapplicantpersonalinfo = coapplicantpersonalinfojsonArray.get(0).toString();
			String coapplicantContactDetails = coapplicantjsonArray.get(1).toString();
			
			JsonObject coapplicantContactDetailsjsonObject = new JsonParser().parse(coapplicantContactDetails).getAsJsonObject();
			JsonArray coapplicantContactDetailsjsonArray = coapplicantContactDetailsjsonObject.getAsJsonArray("Co-ApplicantContactDetails");
			String coapplicantContactDetailsinfo = coapplicantContactDetailsjsonArray.get(0).toString();
			
			/*String coapplicantEmployementDetails = coapplicantjsonArray.get(2).toString();
			JsonObject coapplicantEmployementDetailsjsonObject = new JsonParser().parse(coapplicantEmployementDetails).getAsJsonObject();
			JsonArray coapplicantEmployementDetailsjsonArray = coapplicantEmployementDetailsjsonObject.getAsJsonArray("Co-ApplicantEmploymentDetails");
			String coapplicantEmployementDetailsinfo = coapplicantEmployementDetailsjsonArray.get(0).toString();*/
			
			String CoapplicantEmployementDetails = coapplicantjsonArray.get(2).toString();
			JsonObject CoapplicantEmployementDetailsjsonObject = new JsonParser().parse(CoapplicantEmployementDetails).getAsJsonObject();
			JsonArray CoapplicantEmployementDetailsBulkjsonArray = CoapplicantEmployementDetailsjsonObject.getAsJsonArray("Co-ApplicantEmploymentDetails");
			String CoApplEmpDetls = CoapplicantEmployementDetailsBulkjsonArray.get(0).toString();
			JsonObject CoApplEmpDetlsjsonObject = new JsonParser().parse(CoApplEmpDetls).getAsJsonObject();
			JsonArray CoApplEmpDetlsinfojsonArray = CoApplEmpDetlsjsonObject.getAsJsonArray("Employement");
			String CoApplEmpDetl = CoApplEmpDetlsinfojsonArray.toString();
			
			String guarantor = jsonArray.get(3).toString();
			JsonObject guarantorjsonObject = new JsonParser().parse(guarantor).getAsJsonObject();
			JsonArray guarantorjsonArray = guarantorjsonObject.getAsJsonArray("Guarantor");
			String guarantorinfo = guarantorjsonArray.get(0).toString();
			
			JsonObject guarantorpersonalinfojsonObject = new JsonParser().parse(guarantorinfo).getAsJsonObject();
			JsonArray guarantorpersonalinfojsonArray = guarantorpersonalinfojsonObject.getAsJsonArray("GuarantorPersonalInfo");
			String guarantorpersonalinfo = guarantorpersonalinfojsonArray.get(0).toString();
			String guarantorContactDetails = guarantorjsonArray.get(1).toString();
			
			JsonObject guarantorContactDetailsjsonObject = new JsonParser().parse(guarantorContactDetails).getAsJsonObject();
			JsonArray guarantorContactDetailsjsonArray = guarantorContactDetailsjsonObject.getAsJsonArray("GuarantorContactDetails");
			String guarantorContactDetailsinfo = guarantorContactDetailsjsonArray.get(0).toString();
			
			/*String guarantorEmployementDetails = guarantorjsonArray.get(2).toString();
			JsonObject guarantorEmployementDetailsjsonObject = new JsonParser().parse(guarantorEmployementDetails).getAsJsonObject();
			JsonArray guarantorEmployementDetailsjsonArray = guarantorEmployementDetailsjsonObject.getAsJsonArray("GuarantorEmploymentDetails");
			String guarantorEmployementDetailsinfo = guarantorEmployementDetailsjsonArray.get(0).toString();*/
			
			String GuartorEmployementDetails = guarantorjsonArray.get(2).toString();
			JsonObject GuartorEmployementDetailsjsonObject = new JsonParser().parse(GuartorEmployementDetails).getAsJsonObject();
			JsonArray GuartorEmployementDetailsBulkjsonArray = GuartorEmployementDetailsjsonObject.getAsJsonArray("GuarantorEmploymentDetails");
			String GuartorEmpDetls = GuartorEmployementDetailsBulkjsonArray.get(0).toString();
			JsonObject GuartorEmpDetlsjsonObject = new JsonParser().parse(GuartorEmpDetls).getAsJsonObject();
			JsonArray GuartorEmpDetlsinfojsonArray =GuartorEmpDetlsjsonObject.getAsJsonArray("Employement");
			String GuartorEmpDetl = GuartorEmpDetlsinfojsonArray.toString();
			
			String londtl = jsonArray.get(4).toString();
			JsonObject londtljsonObject = new JsonParser().parse(londtl).getAsJsonObject();
			JsonArray loandetailjsonArray = londtljsonObject.getAsJsonArray("Loandetails");
			String loandetail = loandetailjsonArray.get(0).toString();
			JsonObject loandetail1jsonObject = new JsonParser().parse(loandetail).getAsJsonObject();
			JsonArray loandetail1infojsonArray = loandetail1jsonObject.getAsJsonArray("Loandetails");
			String loandetail1 = loandetail1infojsonArray.get(0).toString();
			
			String banknfinc = jsonArray.get(5).toString();
			JsonObject banknfincjsonObject = new JsonParser().parse(banknfinc).getAsJsonObject();
			JsonArray banknfincBulkjsonArray = banknfincjsonObject.getAsJsonArray("Bank");
			String BankDetails = banknfincBulkjsonArray.get(0).toString();
			JsonObject BankDetailsjsonObject = new JsonParser().parse(BankDetails).getAsJsonObject();
			JsonArray BankDetailsinfojsonArray = BankDetailsjsonObject.getAsJsonArray("BankDetails");
			String BankDetail = BankDetailsinfojsonArray.toString();
			
			String documentchecklistmilestone=jsonArray.get(6).toString();
			JsonObject documentchecklistmilestonejsonObject = new JsonParser().parse(documentchecklistmilestone).getAsJsonObject();
			JsonArray documentchecklistmilestonejsonObjectKYCjsonArray = documentchecklistmilestonejsonObject.getAsJsonArray("DocumentChecklist");
			
			String kycdetails = documentchecklistmilestonejsonObjectKYCjsonArray.get(0).toString();
			JsonObject kycdetailsjsonObject = new JsonParser().parse(kycdetails).getAsJsonObject();
			JsonArray kycdetailsinfojsonArray = kycdetailsjsonObject.getAsJsonArray("KYC");
			String kycdetail = kycdetailsinfojsonArray.toString();
			
			/*
			 * String propertyDetails =
			 * documentchecklistmilestonejsonObjectKYCjsonArray.get(1).toString();
			 * JsonObject propertydetailsjsonObject = new
			 * JsonParser().parse(propertyDetails).getAsJsonObject(); JsonArray
			 * propertydetailsjsonArray =
			 * propertydetailsjsonObject.getAsJsonArray("PropertyDocuments"); String
			 * propertydetailsinfo = propertydetailsjsonArray.get(0).toString();
			 */
			String  propertydetailsinfo = "";
			String fincDetails = documentchecklistmilestonejsonObjectKYCjsonArray.get(1).toString();
			JsonObject fincdetailsjsonObject = new JsonParser().parse(fincDetails).getAsJsonObject();
			JsonArray fincdetailsjsonArray = fincdetailsjsonObject.getAsJsonArray("FinanclialsCollected");
			String fincdetailsinfo = fincdetailsjsonArray.get(0).toString();
			
			String otherchecklist = documentchecklistmilestonejsonObjectKYCjsonArray.get(2).toString();
			JsonObject otherchecklistjsonObject = new JsonParser().parse(otherchecklist).getAsJsonObject();
			JsonArray otherchecklistjsonArray = otherchecklistjsonObject.getAsJsonArray("OtherDocuments");
			String otherchecklistinfo = otherchecklistjsonArray.toString();
			
			String bankstatement = documentchecklistmilestonejsonObjectKYCjsonArray.get(3).toString();
			JsonObject bankstatementjsonObject = new JsonParser().parse(bankstatement).getAsJsonObject();
			JsonArray bankstatementtjsonArray = bankstatementjsonObject.getAsJsonArray("BankingStatements");
			String bankstatementtinfo = bankstatementtjsonArray.get(0).toString();
		
			/*
			 * String securitydetails = loandetailjsonArray.get(1).toString(); JsonObject
			 * securitydetailsjsonObject = new
			 * JsonParser().parse(securitydetails).getAsJsonObject(); JsonArray
			 * securitydetailsjsonArray =
			 * securitydetailsjsonObject.getAsJsonArray("Securitydetails"); String
			 * securitydetailsinfo = securitydetailsjsonArray.get(0).toString(); String
			 * referenceDetails = loandetailjsonArray.get(2).toString(); JsonObject
			 * referenceDetailsjsonObject = new
			 * JsonParser().parse(referenceDetails).getAsJsonObject(); JsonArray
			 * referenceDetailsjsonArray =
			 * referenceDetailsjsonObject.getAsJsonArray("Referencedetails"); String
			 * referenceDetailsinfo = referenceDetailsjsonArray.get(0).toString();
			 */
			
			appln = "<Data><row><ApplicantPersonalInfo>"+applicantpersonalinfo
					+"</ApplicantPersonalInfo><ApplicantContactDetails>"+applicantContactDetailsinfo
					+"</ApplicantContactDetails><ApplicantEmployementDetails>"+ApplEmpDetl
					+"</ApplicantEmployementDetails><CustomerSegmentation>"+CustomerSegmentationinfo
					+"</CustomerSegmentation></row></Data>";
			coappln="<Data><row><CoApplicantPersonalInfo>"+coapplicantpersonalinfo
					+"</CoApplicantPersonalInfo><CoApplicantContactDetails>"+coapplicantContactDetailsinfo
					+"</CoApplicantContactDetails><CoApplicantEmployementDetails>"+CoApplEmpDetl
					+ "</CoApplicantEmployementDetails></row></Data>";
			gaur="<Data><row><GuarantorPersonalInfo>"+guarantorpersonalinfo
					+"</GuarantorPersonalInfo><GuarantorContactDetails>"+guarantorContactDetailsinfo
					+"</GuarantorContactDetails><GuarantorEmploymentDetails>"+GuartorEmpDetl
					+"</GuarantorEmploymentDetails></row></Data>";
			laondetails="<Data><row><Loandetails>"+loandetail1
					+"</Loandetails></row></Data>";
			bankfincdetails="<Data><row><Bankdetails>"+BankDetail
					+"</Bankdetails></row></Data>";
			documentchecklist="<Data><row><KYCDetails>"+kycdetail
					+"</KYCDetails><PropertyDetails>"+propertydetailsinfo
					+"</PropertyDetails><FinanceDetails>"+fincdetailsinfo
					+"</FinanceDetails><OtherDocuments>"+otherchecklistinfo
					+"</OtherDocuments><BankStatement>"+bankstatementtinfo+"</BankStatement></row></Data>";
			
			procstmt = con.prepareStatement("{ call " + valddataprocName + " (?,?,?,?,?,?,?,?) }");
			procstmt.setString(1, appln);
			procstmt.setString(2, loanbasicinfo);
			procstmt.setString(3, coappln);
			procstmt.setString(4, gaur);
			procstmt.setString(5, processID);
			procstmt.setString(6, laondetails);
			procstmt.setString(7, bankfincdetails);
			procstmt.setString(8, documentchecklist);
			rs = procstmt.executeQuery();
			while (rs.next()) {
				resp = rs.getString(1);
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
		return resp;
	}
	protected static String insautoflowdata(String processID,String activityID,String requestBody) {
		String resp = "";
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt = null;
		ResultSet rs = null;
		try {
			procstmt = con.prepareStatement("{ call " + insprocName + " (?,?,?,?,?,?,?,?) }");
			procstmt.setString(1, appln);
			procstmt.setString(2, loanbasicinfo);
			procstmt.setString(3, coappln);
			procstmt.setString(4, gaur);
			procstmt.setString(5, processID+"|"+activityID);
			procstmt.setString(6, laondetails);
			procstmt.setString(7, bankfincdetails);
			procstmt.setString(8, documentchecklist);
			rs = procstmt.executeQuery();
			while (rs.next()) {
				resp = rs.getString(1);
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
		return resp;
	}

	private static String processflow(String autoflow,String prcsid,String actvtyid) {
		String resp = "";
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt = null;
		ResultSet rs = null;
		String xml="";
		String response="";
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
			while (rs.next()) {
				row1 = new HashMap<String, Object>();
				for (int i = 1; i <= columnCount; i++) {
					row1.put(metaData.getColumnName(i), rs.getObject(i));
				}
				resultList.add(row1);
			}
			for(int i=0;i<resultList.size();i++) {
				
				if(resultList.get(i).get("ACTVNAME").toString().equals(autoflow))
				{
					resp = "SUCCESS";
					return resp;
				}
				data = GetDBData.Call(prcsid, resultList.get(i).get("ACTVDEFID").toString(), "", "", "", "LSW_SWFVARDECIDE");
				xml=data.get(0);
				response = WFCall.WFComplete(actvtyid, "var_status="+xml, "APIUser", "themepass","", "LSW_SWFCompleteCALL");
				if(response.split("~")[0].equals("completed"))
				{
				data = GetDBData.Call(prcsid, resultList.get(i+1).get("ACTVDEFID").toString(), "", "", "", "LSW_SGETACTIVITYID_AUTOFLOW");
				actvtyid=data.get(0);
				}
				else {
					resp = "FAIL";
					return resp;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return resp;
	}
}
