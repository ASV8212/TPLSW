package CommonModel;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

public class CS_FetchFormFieldData {

	private String param1;
	private String param2;
	private String param3;
	private String param4;
	private String param5;
	private String DBSrc;
	private String spname;

	public void param1(String param1) {
		this.param1 = param1;
	}

	public void param2(String param2) {
		this.param2 = param2;
	}

	public void param3(String param3) {
		this.param3 = param3;
	}

	public void param4(String param4) {
		this.param3 = param4;
	}

	public void param5(String param5) {
		this.param5 = param5;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public void spname(String spname) {
		this.spname = spname;
	}

	public String CS_FetchFormFieldData() throws SQLException {

		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");
		Connection con = DBConnection.getConnection(DBSrc);

		CallableStatement ps = con.prepareCall("{ call " + spname
				+ "(?,?,?,?,?) }");

		ps.setString(1, param1);
		ps.setString(2, param2);
		ps.setString(3, param3);
		ps.setString(4, param4);
		ps.setString(5, param5);

		ResultSet results = ps.executeQuery();

		ResultSetMetaData rsmd = results.getMetaData();
		int colCount = rsmd.getColumnCount();

		String xml = "<Resultset>";
		while (results.next()) {
			xml = xml + "<row>";
			for (int i = 1; i <= colCount; i++) {

				String value2 = results.getString(i);

				if (value2 == "null") {

					value2 = "";

				}

				xml = xml + "<" + rsmd.getColumnName(i) + ">" + value2 + "</"
						+ rsmd.getColumnName(i) + ">";

			}
			xml = xml + "</row>";
		}

		xml = xml + "</Resultset>";

		return xml;

	}

}
