package MenuConfigurationModel;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import CommonModel.DBConnection;

public class UI_fetchMenuFrRearrge2 {

	private String MenuLevel;
	private String SubLevelOne;
	private String SubLevelTwo;
	private String DBSrc;

	public void param1(String param1) {
		this.MenuLevel = param1;
	}

	public void param2(String param2) {
		this.SubLevelOne = param2;
	}

	public void param3(String param3) {
		this.SubLevelTwo = param3;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String UI_fetchMenuFrRearrge2() throws SQLException {

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		CallableStatement ps = con
				.prepareCall("{ call SAM_sfetchMenuFrRearrge2(?,?,?) }");
		ps.setString(1, MenuLevel);
		ps.setString(2, SubLevelOne);
		ps.setString(3, SubLevelTwo);
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
