package QueueConfigurationModel;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import CommonModel.DBConnection;

public class UI_FetchWrkflowname {
	private String DBSrc;

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String UI_FetchWrkflowname() throws SQLException {

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		CallableStatement ps = con
				.prepareCall("{ call Sam_sFetchWrkflowname() }");
		// ps.setString(1, Tblname);
		// ps.setString(2, SubLevelOne);
		// ps.setString(3, SubLevelTwo);
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
