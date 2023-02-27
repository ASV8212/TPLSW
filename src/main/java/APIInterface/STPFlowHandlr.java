package APIInterface;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import Controls.GetDBData;
import Controls.WFCall;

public class STPFlowHandlr {
	public String stpflowHandlr() {
		String resp = "";
		String requestBody = "";
		String prcsid = "";
		String activityid = "";
		String response = "";
		String batchid = "";
		String rowid = "";
		try {
			ArrayList<String> data = new ArrayList<String>();
			ArrayList<String> data1 = new ArrayList<String>();
			data = GetDBData.Call("", "", "", "", "", "LSW_SSTPFLOWCREATE");
			requestBody = data.get(0);
			JsonObject jsonObject = new JsonParser().parse(requestBody).getAsJsonObject();
			JsonArray jsonArrayCompleted = jsonObject.getAsJsonObject().get("DATA").getAsJsonObject().get("COMPLETED")
					.getAsJsonArray();
			JsonArray jsonArrayFail = jsonObject.getAsJsonObject().get("DATA").getAsJsonObject().get("FAIL")
					.getAsJsonArray();

			for (int z = 0; z < jsonArrayCompleted.size(); z++) {
				prcsid = "";
				activityid = "";
				response = "";
				batchid = "";
				rowid = "";
				prcsid = jsonArrayCompleted.get(z).getAsJsonObject().get("PRCSID").getAsString();
				activityid = jsonArrayCompleted.get(z).getAsJsonObject().get("ACTIVITYID").getAsString();
				batchid = jsonArrayCompleted.get(z).getAsJsonObject().get("BATCHTOKN").getAsString();
				rowid = jsonArrayCompleted.get(z).getAsJsonObject().get("ROWTOKEN").getAsString();
				if (activityid.endsWith("AutoUnderwritingSTP")) {
					data1.clear();
					data1 = GetDBData.Call(prcsid, "PASSED", "", "", "", "LSW_SSTPFLOWFAILREVRS_UPD");
					
					response = WFCall.WFComplete(activityid, "var_status=AUSTPSC", "APIUser", "themepass", "",
							"LSW_SWFCompleteCALL");
					if (response.split("~")[0].equals("completed") && data1.get(0).equals("Yes")) {
						data = GetDBData.Call(prcsid, "SendToCredit", "", "", "", "LSW_SGETACTIVITYID_AUTOFLOW");
						activityid = data.get(0);
						if (activityid.endsWith("SendToCredit")) {
							data = GetDBData.Call(prcsid + "|" + activityid, "DEVIATIONS", "APIUser", "", "",
									"LSW_SONSUBMTWFDTLINS");
							if (data.get(0).contains("var_")) {
								response = WFCall.WFComplete(activityid, data.get(0), "APIUser", "themepass", "",
										"LSW_SWFCompleteCALL");
								if (response.split("~")[0].equals("completed")) {
									data = GetDBData.Call(prcsid, "RCMDI", "", "", "", "LSW_SGETACTIVITYID_AUTOFLOW");
									activityid = data.get(0);
									if (activityid.endsWith("RCMDI")) {
										data = GetDBData.Call(prcsid, "", "", "", "", "LSW_SSTRAIGHTTHROUGHDISB_1");
										response = WFCall.WFComplete(activityid, data.get(0).replace("%26", "&"),
												"APIUser", "themepass", "", "LSW_SWFCompleteCALL");
										if (response.split("~")[0].equals("completed")) {
											GetDBData.Call(prcsid, activityid, "", "", "", "LSW_SPUSHDATATOAPPTBL_API");
											GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
										} else {
											GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
										}

									}
								} else {
									GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
								}
							} else {
								GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
							}
						} else {
							GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
						}
					} else {
						GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
					}
				}

			}
			for (int y = 0; y < jsonArrayFail.size(); y++) {

				prcsid = "";
				activityid = "";
				response = "";
				batchid = "";
				rowid = "";
				prcsid = jsonArrayFail.get(y).getAsJsonObject().get("PRCSID").getAsString();
				activityid = jsonArrayFail.get(y).getAsJsonObject().get("ACTIVITYID").getAsString();
				batchid = jsonArrayFail.get(y).getAsJsonObject().get("BATCHTOKN").getAsString();
				rowid = jsonArrayFail.get(y).getAsJsonObject().get("ROWTOKEN").getAsString();
				GetDBData.Call(prcsid, "FAILED", "", "", "", "LSW_SSTPFLOWFAILREVRS_UPD");
				if (activityid.endsWith("AutoUnderwritingSTP")) {
					response = WFCall.WFComplete(activityid, "var_status=AUSTPSC", "APIUser", "themepass", "",
							"LSW_SWFCompleteCALL");
					if (response.split("~")[0].equals("completed")) {
						GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
					} else {
						GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
					}
				} else {
					GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
				}
			}

		}

		catch (Exception e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public String stpflowHandlrWeb(HttpServletRequest request) {
		String resp = "";
		String requestBody = "";
		String prcsid = "";
		String activityid = "";
		String response = "";
		String batchid = "";
		String rowid = "";
		ArrayList<String> data = new ArrayList<String>();
		ArrayList<String> data1 = new ArrayList<String>();
		data = GetDBData.Call(request.getParameter("PrcsID"), "", "", "", "", "LSW_SSTPFLOWCREATE");
		requestBody = data.get(0);
		JsonObject jsonObject = new JsonParser().parse(requestBody).getAsJsonObject();
		JsonArray jsonArrayCompleted = jsonObject.getAsJsonObject().get("DATA").getAsJsonObject().get("COMPLETED")
				.getAsJsonArray();
		for (int z = 0; z < jsonArrayCompleted.size(); z++) {
			prcsid = "";
			activityid = "";
			response = "";
			batchid = "";
			rowid = "";
			prcsid = jsonArrayCompleted.get(z).getAsJsonObject().get("PRCSID").getAsString();
			activityid = jsonArrayCompleted.get(z).getAsJsonObject().get("ACTIVITYID").getAsString();
			batchid = jsonArrayCompleted.get(z).getAsJsonObject().get("BATCHTOKN").getAsString();
			rowid = jsonArrayCompleted.get(z).getAsJsonObject().get("ROWTOKEN").getAsString();
			if (activityid.endsWith("PLVer")) {
				data1.clear();
				data1 = GetDBData.Call(prcsid, "PASSED", "", "", "", "LSW_SSTPFLOWFAILREVRS_UPD");
				
				response = WFCall.WFComplete(activityid, "var_status=AUSTPSC", "APIUser", "themepass", "",
						"LSW_SWFCompleteCALL");
				if (response.split("~")[0].equals("completed") && data1.get(0).equals("Yes")) {
					data = GetDBData.Call(prcsid, "SendToCredit", "", "", "", "LSW_SGETACTIVITYID_AUTOFLOW");
					activityid = data.get(0);
					if (activityid.endsWith("SendToCredit")) {
						data = GetDBData.Call(prcsid + "|" + activityid, "DEVIATIONS", "APIUser", "", "",
								"LSW_SONSUBMTWFDTLINS");
						if (data.get(0).contains("var_")) {
							response = WFCall.WFComplete(activityid, data.get(0), "APIUser", "themepass", "",
									"LSW_SWFCompleteCALL");
							if (response.split("~")[0].equals("completed")) {
								data = GetDBData.Call(prcsid, "RCMDI", "", "", "", "LSW_SGETACTIVITYID_AUTOFLOW");
								activityid = data.get(0);
								if (activityid.endsWith("RCMDI")) {
									data = GetDBData.Call(prcsid, "", "", "", "", "LSW_SSTRAIGHTTHROUGHDISB_1");
									response = WFCall.WFComplete(activityid, data.get(0).replace("%26", "&"),
											"APIUser", "themepass", "", "LSW_SWFCompleteCALL");
									if (response.split("~")[0].equals("completed")) {
										GetDBData.Call(prcsid, activityid, "", "", "", "LSW_SPUSHDATATOAPPTBL_API");
										GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
									} else {
										GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
									}

								}
							} else {
								GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
							}
						} else {
							GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
						}
					} else {
						GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
					}
				} else {
					GetDBData.Call(batchid, rowid, response, "", "", "LSW_SSTPFLOWCREATE_UPD");
				}
			}

		}
		return resp;
	}
}
