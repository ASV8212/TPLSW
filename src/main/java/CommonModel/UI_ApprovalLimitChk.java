package CommonModel;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

public class UI_ApprovalLimitChk {

	private String loggedinuser;
	private String PrID;
	private String BrID;
	private String LoanAmount;
	private String Level;
	private String DBSrc;

	public void loggedinuser(String loggedinuser) {
		this.loggedinuser = loggedinuser;
	}

	public void PrID(String PrID) {
		this.PrID = PrID;
	}

	public void BrID(String BrID) {
		this.BrID = BrID;
	}

	public void LoanAmount(String LoanAmount) {
		this.LoanAmount = LoanAmount;
	}

	public void Level(String Level) {
		this.Level = Level;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String UI_ApprovalLimitChk() throws SQLException {

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		CallableStatement ps = con
				.prepareCall("{ call SAM_sActivityFormData(?,?,?,?,?) }");

		ps.setString(1, loggedinuser);
		ps.setString(2, PrID);
		ps.setString(3, BrID);
		ps.setString(4, LoanAmount);
		ps.setString(5, Level);

		ResultSet results = ps.executeQuery();

		ResultSetMetaData rsmd = results.getMetaData();
		int colCount = rsmd.getColumnCount();

		String xml = "<Resultset>";
		while (results.next()) {
			xml = xml + "<row>";
			for (int i = 1; i <= colCount; i++) {
				xml = xml + "<" + rsmd.getColumnName(i) + ">"
						+ results.getString(i) + "</" + rsmd.getColumnName(i)
						+ ">";

			}
			xml = xml + "</row>";
		}

		xml = xml + "</Resultset>";

		return xml;

	}
}
