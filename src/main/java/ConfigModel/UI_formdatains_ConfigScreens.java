package ConfigModel;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import CommonModel.DBConnection;

public class UI_formdatains_ConfigScreens {
	private String xml;
	private String param;
	private String DBSrc;
	private String spname;

	public void xml(String xml) {
		this.xml = xml;
	}

	public void param(String param) {
		this.param = param;
	}

	public void spname(String spname) {
		this.spname = spname;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String UI_formdatains_ConfigScreens() throws SQLException {

		ResultSet resultSet = null;
		// PreparedStatement preparedStatement = null;

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		String str = null;

		PreparedStatement proc_stmt = con.prepareStatement("{ call " + spname
				+ "(?,?) }");

		proc_stmt.setString(1, xml);
		proc_stmt.setString(2, param);

		// preparedStatement.setString(3, spname);

		resultSet = proc_stmt.executeQuery();

		while (resultSet.next()) {

			str = resultSet.getString(1);

		}

		return str;

	}

}
