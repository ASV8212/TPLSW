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

public class UI_formdatainsInsert {

	private String xml;
	private String tablenameins;
	private String tablenameins1;
	private String DBSrc;
	private String spname;

	public void xml(String xml) {
		this.xml = xml;
	}

	public void tablenameins(String tablenameins) {
		this.tablenameins = tablenameins;
	}

	public void tablenameins1(String tablenameins1) {
		this.tablenameins1 = tablenameins1;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public void spname(String spname) {
		this.spname = spname;
	}

	public String UI_formdatainsInsert() throws SQLException {

		ResultSet resultSet = null;
		PreparedStatement preparedStatement = null;

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		String str = null;

		preparedStatement = con
				.prepareStatement("{ call SAM_spNewMenuPage(?) }");
		preparedStatement.setString(1, xml);
		// preparedStatement.setString(2, tablenameins);
		// preparedStatement.setString(3, tablenameins1);

		resultSet = preparedStatement.executeQuery();

		while (resultSet.next()) {

			str = resultSet.getString(1);

		}

		return str;

	}

}
