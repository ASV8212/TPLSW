package Integration;

import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import Controls.GetDBData;
import Controls.InterfaceCibil;

public class Commercial extends InterfaceCibil {
	public String commercialHndlr(HttpServletRequest request) {
		String resp = "";
		String url = "";
		String payload = "";
		String memberrefid = "";
		String cusrefid = "";
		String apikey = "";
		String token = "";
		String password = "";
		String prcsid = request.getParameter("PrcsID");
		String cusid = request.getParameter("CusID");
		ArrayList<String> data = new ArrayList<String>();
		data = GetDBData.Call(prcsid, cusid, "Initiate Commercial Cibil", "", " ", "LSW_SCOMMERCIALCIBILAPICREATE");
		url = data.get(0);
		payload = data.get(1);
		memberrefid = data.get(2);
		cusrefid = data.get(3);
		apikey = data.get(4);
		token = data.get(5);
		password = data.get(6);
		resp = commercialHndlr(url, memberrefid, cusrefid, apikey, payload, password);
		data.clear();
        data = GetDBData.Call(resp, token, "", "", "", "LSW_SCOMMERCIALCIBILAPICREATE_UPD");
        resp=data.get(0);
		return resp;

	}
}
