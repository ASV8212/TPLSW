package MenuConfigurationModel;

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

public class UI_formdatains_NewSubMenuLevel2 {
	private String xml;
	private String param1;

	private String DBSrc;

	public void xml(String xml) {
		this.xml = xml;
	}

	public void param1(String param1) {
		this.param1 = param1;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String UI_formdatains_NewSubMenuLevel2() throws SQLException {

		// String activityname=request.getParameter("activityname");

		ResultSet resultSet = null;
		PreparedStatement preparedStatement = null;

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		String str = null;

		preparedStatement = con
				.prepareStatement("{ call SAM_sNewINSSubMenu2(?,?) }");
		preparedStatement.setString(1, xml);
		preparedStatement.setString(2, param1);

		resultSet = preparedStatement.executeQuery();

		while (resultSet.next()) {

			str = resultSet.getString(1);

		}

		return str;

	}

}
