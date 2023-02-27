package Integration;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import Controls.GetDBData;
import Controls.InterfacePerodicKYC;

public class PerodicKycHndlr extends InterfacePerodicKYC {
	public String perodicKycHndlr(HttpServletRequest request) {
		String resp = "";
		String prcsid = request.getParameter("prcsid");
		String url = "";
		String payload = "";
		String token = "";
		ArrayList<String> data = new ArrayList<String>();
		data = GetDBData.Call(prcsid, "", "", "", "", "LSW_SPERODICKYCCREATE");
		url = data.get(0);
		payload = data.get(1);
		token = data.get(2);
		resp = interfacePerodicKycHndlr(url,payload);
		GetDBData.Call(resp, token, "", "", "", "LSW_SPERODICKYCCREATE_UPD");
		return resp;
		
	}
}
