package APIInterface;

import java.io.BufferedReader;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.digest.DigestUtils;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import Controls.GetDBData;

public class CollectDataSecure {
	
	
	
	public String dataHandler(HttpServletRequest request, HttpServletResponse response) {
		String resp = "";
		String requestBody = "";
		String tokn = "";
		ArrayList<String> data = new ArrayList<String>();
		try {
			String referer = request.getHeader("access_token");
			StringBuilder buffer = new StringBuilder();
			BufferedReader reader = request.getReader();
			String line;
			while ((line = reader.readLine()) != null) {
				buffer.append(line);
			}
			requestBody = buffer.toString();
			if (requestBody.equals("") || requestBody == null) {
				data = GetDBData.Call("Request Body Missing", String.valueOf(HttpServletResponse.SC_BAD_REQUEST), "",
						"", "", "LSW_SAUTOTRACACQUIRE");
				response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
				resp = data.get(0);
				return resp;
			}
			String sha256hex = DigestUtils.sha512Hex(requestBody);
			if (referer == null) {
				data = GetDBData.Call("Access Token missing", String.valueOf(HttpServletResponse.SC_FORBIDDEN), "", "",
						"", "LSW_SAUTOTRACACQUIRE");
				response.setStatus(HttpServletResponse.SC_FORBIDDEN);
				resp = data.get(0);
				return resp;
			}

			if (!referer.equals(sha256hex)) {
				data = GetDBData.Call("Invalid Access Token", String.valueOf(HttpServletResponse.SC_FORBIDDEN), "", "",
						"", "LSW_SAUTOTRACACQUIRE");
				response.setStatus(HttpServletResponse.SC_FORBIDDEN);
				resp = data.get(0);
				return resp;
			}
			JsonObject jsonObject_1 = new JsonParser().parse(requestBody).getAsJsonObject();
			data = GetDBData.Call(jsonObject_1.getAsJsonArray("Data").get(1).getAsJsonObject().get("Applicant").getAsJsonArray().get(0).getAsJsonObject().get("ApplicantPersonalInfo").getAsJsonArray().get(0).getAsJsonObject().get("APPLICATIONNO").getAsString(), "", "", "", "","LSW_SAUTOTRACREQTOKEN");
			resp = data.get(0);
			JsonObject jsonObject_2 = new JsonParser().parse(resp).getAsJsonObject();
			if (!jsonObject_2.get("Code").getAsString().equals("200")) {
				response.setStatus(Integer.parseInt(jsonObject_2.get("Code").getAsString()));
				return resp;
			}
			data = GetDBData.Call(requestBody, String.valueOf(HttpServletResponse.SC_OK), "", "", "",
					"LSW_SBLACKBUCKACQUIRE");
			resp = data.get(0);
			JsonObject jsonObject = new JsonParser().parse(resp).getAsJsonObject();
			if (jsonObject.get("Code").getAsString().equals("200")) {

				tokn = jsonObject.getAsJsonArray("Result").get(0).getAsJsonObject().get("Transaction ID").getAsString();
			} else {
				response.setStatus(Integer.parseInt(jsonObject.get("Code").getAsString()));
				return resp;
			}
			data.clear();
			data = GetDBData.Call(tokn, "", "", "", "", "LSW_SBLACKBUCKACQUIRE_VALIDATOR");
			resp = data.get(0);

			response.setStatus(HttpServletResponse.SC_OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return resp;
	}
	
}
