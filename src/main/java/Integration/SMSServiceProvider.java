package Integration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;


import CommonModel.DBConnection;
import Controls.GetDBData;
import Controls.InterfaceSMSService;

public class SMSServiceProvider extends InterfaceSMSService {
	public String smsServicHndlr() {
		String resp = "";
		String url = "";
		String contenttype = "";
		String spname1 = "";
		String uniqid = "";

		Connection cons = null;
		PreparedStatement prs = null;
		ResultSet rs = null;
		try {
			cons = DBConnection.getConnection(null);

			prs = cons.prepareStatement("{ call LSW_SGETSCHSMSDTLS(?,?,?,?,?) }");
			prs.setString(1, "");
			prs.setString(2, "");
			prs.setString(3, "");
			prs.setString(4, "");
			prs.setString(5, "");
			rs = prs.executeQuery();

			while (rs.next()) {
				

				url = rs.getString(1);
				contenttype = rs.getString(3);
				spname1 = rs.getString(4);
				uniqid = rs.getString(5);
				resp = interfacesmsCall(url, contenttype);
				GetDBData.Call(resp.split("~")[0], resp.split("~")[1], "", "", uniqid, spname1);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return resp;
	}
}
