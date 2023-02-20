package QueueConfigurationModel;

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

public class UI_formdatains_QueueRearrangeEntryCheck {

	private String xml;
	private String DBSrc;

	public void xml(String xml) {
		this.xml = xml;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String UI_formdatains_QueueRearrangeEntryCheck() throws SQLException {

		ResultSet resultSet = null;
		PreparedStatement preparedStatement = null;

		Connection con = DBConnection.getConnection(DBSrc);

		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		String str = null;

		preparedStatement = con
				.prepareStatement("{ call SAM_sQueueTableConfigCheck(?) }");
		preparedStatement.setString(1, xml);
		// preparedStatement.setString(2, param);
		// preparedStatement.setString(3, tablenameins1);

		resultSet = preparedStatement.executeQuery();

		while (resultSet.next()) {

			str = resultSet.getString(1);

		}

		return str;

	}
}
