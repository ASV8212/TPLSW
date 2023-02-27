package Integration;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import Controls.GetDBData;
import Controls.InterfaceGetTagging;

public class GeoTagging extends InterfaceGetTagging {
	public String geoTaggingHndlr(HttpServletRequest request) {
		String resp = "";
		String prcsid = request.getParameter("prcsid");
		String cusid = request.getParameter("cusid");
		String hitType = request.getParameter("hitType");
		String url = "";
		String payload = "";
		String token = "";
		ArrayList<String> data = new ArrayList<String>();
		data = GetDBData.Call(prcsid, cusid, hitType, "", "", "LSW_SGEOTAGGINGCREATE");
		url = data.get(0);
		payload = data.get(1);
		token = data.get(2);
		resp = interfaceGetGeodetailsHndlr(url,payload);
		GetDBData.Call(resp, token, "", "", "", "LSW_SGEOTAGGINGCREATE_UPD");
		return resp;
		
	}
}
