package DesignateUserModel;

import java.io.*;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.http.*;

import CommonModel.DBConnection;

import org.springframework.stereotype.Controller;

public class UI_formdatains_DesignateUser {

	private String xml;
	private String DBSrc;

	public void param1(String xml) {
		this.xml = xml;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String UI_formdatains_DesignateUser1() throws SQLException {

		ResultSet resultSet = null;
		PreparedStatement preparedStatement = null;

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		String str = null;

		preparedStatement = con.prepareStatement("{ call Sam_sdesignate(?) }");
		preparedStatement.setString(1, xml);

		resultSet = preparedStatement.executeQuery();

		while (resultSet.next()) {

			str = resultSet.getString(1);

		}
		return str;
	}

}
