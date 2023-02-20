package APIInterface;

import java.io.BufferedReader;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.digest.DigestUtils;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import Controls.GetDBData;

public class QueryModuleAPI {
	public String queryModuleHandler(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String resp = "";
		String requestBody = "";
		String procName = "LSW_SQUERYAPIHANDLER";
		String exception = "EXCEPTION";
		ArrayList<String> data = new ArrayList<String>();
		try {
			String referer = request.getHeader("access_token");
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
				resp = "{\"CODE\":\"404\",\"ERROR_MSG\":\"Request Body Missing\"}";
				return resp;
			}
			String sha256hex = DigestUtils.sha512Hex(requestBody);
			if (referer == null) {
				data = GetDBData.Call(exception, "", "", "Access Token missing", "", procName);
				resp = data.get(0);
				return resp;
			}
			if (!referer.equals(sha256hex)) 
			{ 
				data = GetDBData.Call(exception, requestBody,"", "Invalid Access Token", "", procName);
				resp =data.get(0); 
				return resp; 
			}
			JsonObject jsonObject = new JsonParser().parse(requestBody).getAsJsonObject();

			String queryaction = jsonObject.get("query_action").getAsString();
			String userid = jsonObject.get("user_id").getAsString();
			if (queryaction.equals("INBOX")) {
				String inboxfor = jsonObject.get("inbox_for").getAsString();

				data = GetDBData.Call(queryaction, userid, inboxfor, "", "", procName);
				resp = data.get(0);
			} else if (queryaction.equals("FETCH")) {
				String navfor = jsonObject.get("nav-for").getAsString();
				String navlink = jsonObject.get("nav-link").getAsString();
				String nav = jsonObject.get("nav").getAsString();
				String applnno = jsonObject.get("application_no").getAsString();

				data = GetDBData.Call(queryaction, userid, navfor, applnno, nav + "_" + navlink,procName);
				resp = data.get(0);
			} else if (queryaction.equals("INDIVIDUAL FETCH")) {
				String applnno = jsonObject.get("application_no").getAsString();
				String queryid = jsonObject.get("query_id").getAsString();

				data = GetDBData.Call(queryaction, userid, "", applnno, queryid, procName);
				resp = data.get(0);
			} else if (queryaction.equals("SAVE")) {
				String applnno = jsonObject.get("application_no").getAsString();
				String queryid = jsonObject.get("query_id").getAsString();
				String desc = jsonObject.get("desc").getAsString();
				String attachment = jsonObject.get("attachment").getAsString();
				String stringbuilder = userid+"|"+applnno+"|"+queryid+"|"+desc+"|"+attachment;

				data = GetDBData.Call(queryaction, userid, "", stringbuilder, "", procName);
				resp = data.get(0);
			} else if (queryaction.equals("RESOLVED") || queryaction.equals("REOPEN") || queryaction.equals("CLOSED")) {
				String attachment = jsonObject.get("attachment").getAsString();
				String applnno = jsonObject.get("application_no").getAsString();
				String desc = jsonObject.get("desc").getAsString();
				String queryid = jsonObject.get("query_id").getAsString();
				String status = jsonObject.get("Status").getAsString();
				String stringbuilder = attachment+"|"+desc;
				String astringbuilder=applnno+"|"+userid;
				
				data = GetDBData.Call(queryaction, status, queryid, stringbuilder, astringbuilder, procName);
				resp = data.get(0);
			} else {
				resp = "{\"CODE\":\"404\",\"ERROR_MSG\":\"Invalid Request\"}";
			}
		} catch (Exception e) {
			try {
				data = GetDBData.Call("EXCEPTION", requestBody,"", e.toString(), e.getMessage(), procName);
				resp = data.get(0);
			}
			catch  (Exception e1)
			{
				resp = "{\"CODE\":\"500\",\"ERROR_MSG\":\"Unhandled Exception. Contact System Admin and check the log for more info.\"}";
				e1.printStackTrace();
			}
		}
		return resp;
	}
}
