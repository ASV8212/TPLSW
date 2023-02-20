package Integration;

import CommonModel.DBConnection;
import Controls.GetDBData;
import Controls.InterfaceRestXMLCall;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class HighmarkCallService {
	private HighmarkCallService() {
	    throw new IllegalStateException("Utility class");
	 }

	public static String highmarkCallService(String spname, String prcsid, String cusid) throws Exception {
		String rslt = null;
		Connection con = null;
		PreparedStatement pr = null;
		PreparedStatement pr1 = null;
		PreparedStatement pr2 = null;
		ResultSet results = null;
		ResultSet results1 = null;
		ResultSet results2 = null;
		String userId = null;
		String password = null;
		String uniqid = null;
		String cntnturl = null;
		String xmlval = null;
		ArrayList<String> data = new ArrayList<String>();
		try {
			if (con == null) {
				con = DBConnection.getConnection(null);
			}
			pr = con.prepareStatement("{ call " + spname + "(?,?,?,?,?) }");
			pr.setString(1, prcsid);
			pr.setString(2, cusid);
			pr.setString(3, "");
			pr.setString(4, "");
			pr.setString(5, "HIT NO 1");

			results = pr.executeQuery();
			while (results.next()) {

				userId = results.getString("userId");
				password = results.getString("Password");
				uniqid = results.getString("UNIQID");
				cntnturl = results.getString("URL");
				xmlval = results.getString("XML");
			}

			String result = InterfaceRestXMLCall.interfaceResXMLCallService(cntnturl, xmlval, uniqid, userId, password);
			String status = null;
			String message = null;

			String[] resultSplit = result.split("~");

			status = resultSplit[0];

			message = resultSplit[1];
			if(status.equals("Exception"))
			{
				data = GetDBData.Call(status, message,uniqid,prcsid+"|"+cusid,"Exception", "LSW_SHIGHMARK");
				return message;
				
			}
			pr1 = con.prepareStatement("{ call " + spname + "(?,?,?,?,?) }");

			pr1.setString(1, status);
			pr1.setString(2, message);
			pr1.setString(3, uniqid);
			pr1.setString(4, prcsid+"|"+cusid);
			pr1.setString(5, "HIT NO 2");

			pr1.execute();
			results1 = pr1.executeQuery();

			while (results1.next()) {

				userId = results1.getString("userId");
				password = results1.getString("Password");
				uniqid = results1.getString("UNIQID");
				cntnturl = results1.getString("URL");
				xmlval = results1.getString("XML");
			}

			String result1 = InterfaceRestXMLCall.interfaceResXMLCallService(cntnturl, xmlval, uniqid, userId,
					password);
			String status1 = null;
			String message1 = null;

			String[] resultSplit1 = result1.split("~");

			status1 = resultSplit1[0];

			message1 = resultSplit1[1];
			if(status.equals("Exception"))
			{
				data = GetDBData.Call(status1, message1,uniqid,prcsid+"|"+cusid,"Exception", "LSW_SHIGHMARK");
				return message1;
				
			}
			pr2 = con.prepareStatement("{ call " + spname + "(?,?,?,?,?) }");

			pr2.setString(1, status1);
			pr2.setString(2, message1);
			pr2.setString(3, uniqid);
			pr2.setString(4, prcsid+"|"+cusid);
			pr2.setString(5, "STORE RESP");

			pr2.execute();
			results2 = pr1.executeQuery();

			while (results2.next()) {
				rslt= results1.getString("RESULT");
			}
		} catch (Exception ex) {
			try {
				data = GetDBData.Call("", "",ex.toString(),ex.getMessage(),"Exception", "LSW_SHIGHMARK");
				rslt = data.get(0);
			}
			catch  (Exception e1)
			{
				rslt = "ERROR";
				e1.printStackTrace();
			}
		} finally {
			DBConnection.closeConnection(null, pr2, null);
			DBConnection.closeConnection(null, pr1, results1);
			DBConnection.closeConnection(con, pr, results);
		}
		return rslt;
	}
}
