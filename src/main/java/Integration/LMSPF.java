package Integration;

import CommonModel.*;
import Controls.Connections;
import Controls.JInterfaceCall;
import Controls.WInterfaceCall;

import java.io.StringReader;
import java.sql.*;
import java.util.ArrayList;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.codehaus.jettison.json.JSONObject;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import com.itextpdf.text.Element;

public class LMSPF {

	public static void main(String[] args) throws Exception {
		System.out.println("True");
	}

	public static String LMSPFPUSH(String Param1, String Param2, String Param3, String Param4, String Param5,
			String SPName) {

		String DBSrc = null;
		ArrayList<String> Data = new ArrayList<String>();

		String AsgnCmpltURL = "";
		String Request = "";
		String UIQPKID = "";
		String EndPoint = "";
		String UIQID = "";
		String xml = "";
		String spname = "";
		String Intrresponse = "";
		String ErrorMsg = "";
		String SoapAction = "";
		HttpPost post;
		HttpResponse response;
		String line = "";
		HttpClient client;
		StringBuffer response1;
		StringBuffer result;
		String Status = "";
		String Message = "";
		String ProcessID = "No Data";
		String ActivityID = "No Data";
		String AcceptURL = "";
		String Referer = "";
		String REQID = "";
		String MSG = "";
		String REQTYPE = "";
		String LMSREQXML = "";
		String LMSRESXML = "";
		String postingProc = "";
		String LMSPostingProc = "LSW_SLMS_CUSTACCT_INTF_CHRG";
		String SCFPostingProc = "LSW_SLMS_CUSTACCT_INTF_CHRG_SCF";
		String IntrDBSrc = "";

		if (Param4.equals("SCF")) {
			postingProc = SCFPostingProc;
			IntrDBSrc = "INTR1";
		} else {
			postingProc = LMSPostingProc;
			IntrDBSrc = "LMS";
		}

		String CUSINFO = "";
		String CONTACTINFO = "";
		String ADDRINFO = "";

		Connection con = DBConnection.getConnection(DBSrc);
		Connection con2 = DBConnection.getConnection(null);
		Connection con1 = null;
		PreparedStatement proc_stmt = null;
		ResultSet rs = null;
		CallableStatement proc_stmt1 = null;
		ResultSet rs1 = null;
		PreparedStatement proc_stmt2 = null;

		int numResults = 0;

		try {

			// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			// Connection con =
			// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");

			REQTYPE = "REQ-1";
			proc_stmt = con.prepareStatement("{ call LSW_SCUSXML_CHRG (?,?,?,?,?) }");

			proc_stmt.setString(1, Param1); // Process ID
			proc_stmt.setString(2, Param2); // PFNO
			proc_stmt.setString(3, "");
			proc_stmt.setString(4, Param3); // RECEIPTNO
			proc_stmt.setString(5, ""); // REQID

			rs = proc_stmt.executeQuery();

			ResultSetMetaData rsmd = rs.getMetaData();
			int colCount = rsmd.getColumnCount();

			while (rs.next()) {
				Request = rs.getString(1);

				// Connections.Call(proc_stmt,rs,con,"Commit");

// LMS START
//LSW_SLMS_InsCusDetls_FLOW
				if (con1 == null) {
					con1 = DBConnection.getConnection(IntrDBSrc);
				}

				proc_stmt1 = con1.prepareCall("{ call " + postingProc + " (?,?,?,?,?) }");

				proc_stmt1.setString(1, Request); // XML
				proc_stmt1.setString(2, ""); //
				proc_stmt1.setString(3, ""); //
				proc_stmt1.setString(4, ""); //
				proc_stmt1.setString(5, ""); //

				boolean hasResultSets = proc_stmt1.execute();

				if (hasResultSets) {
//	numResults = proc_stmt1.getUpateCount();
					rs1 = proc_stmt1.getResultSet();
					while (rs1.next()) {
						LMSRESXML = rs1.getString(1);

					}

				} else {
					LMSRESXML = "";
				}
				proc_stmt2 = con2.prepareCall("{ call LSW_SPFCOLLECTIONLOGGER (?,?,?,?,?,?) }");
				proc_stmt2.setString(1, Param1);
				proc_stmt2.setString(2, Param2);
				proc_stmt2.setString(3, Param3);
				proc_stmt2.setString(4, Request);
				proc_stmt2.setString(5, LMSRESXML);
				proc_stmt2.setString(6, Param4);
				proc_stmt2.execute();

				Connections.Call(proc_stmt1, rs1, con1, "Commit");
				Connections.Call(proc_stmt2, null, con2, "Commit");

//LMS END

				DocumentBuilder builder = DocumentBuilderFactory.newInstance().newDocumentBuilder();
				InputSource src = new InputSource();
				src.setCharacterStream(new StringReader(LMSRESXML));

				Document doc = builder.parse(src);
				String age = doc.getElementsByTagName("RESULT").item(0).toString();
				String name = "";

				doc.getElementsByTagName("RESULT").item(0).getChildNodes();
				NodeList nodes = doc.getElementsByTagName("RESULT").item(0).getChildNodes();
				Node node = (Node) nodes.item(0);
				name = node.getNodeValue();

				if (!name.equals("Success")) {

					ProcessID = "Fail";
					ActivityID = LMSRESXML;

				} else {

					ProcessID = "Success";
					ActivityID = "Success";

				}

			}

		} catch (Exception e) {

			Connections.Call(proc_stmt, rs, con, "Rollback");
			Connections.Call(proc_stmt1, rs1, con1, "Rollback");
			Connections.Call(proc_stmt2, null, con2, "Rollback");
			ProcessID = "No Data";
			ActivityID = "No Data";
			e.printStackTrace();
		} finally {

			Connections.Call(proc_stmt, rs, con, "Close");
			Connections.Call(proc_stmt1, rs1, con1, "Close");
			Connections.Call(proc_stmt2, null, con2, "Close");

		}

		return ProcessID + "~" + ActivityID;
	}

}