package Integration;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import Controls.GetDBData;
import Controls.InterfaceGetRcuTagging;

public class RcuInitiation extends InterfaceGetRcuTagging {
	public String rcuInitHndlr(HttpServletRequest request) {
	    String resp = "";
	    String prcsid = request.getParameter("prcsid");
	    String userid = request.getParameter("userid");
	    String actvid = request.getParameter("actvid");
	    String cusid = request.getParameter("cusid");
	    String docname = request.getParameter("docname");
	    String url = "";
	    String header = "";
	    String token = "";
	    ArrayList<String> data = new ArrayList<String>();
	    data = GetDBData.Call(userid,prcsid,actvid, cusid, docname, "LSW_SRCUINITIATIONCREATE");
	    url = data.get(0);
	    header = data.get(1);
	    token = data.get(2);
	    resp = interfaceGetRcudetailsHndlr(url, header);
	    GetDBData.Call(resp, token, "", "", "", "LSW_SRCUINITIATIONCREATE_UPD");
	    return resp;
	  }

}
