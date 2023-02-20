package ConfigModel;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import CommonModel.DBConnection;

public class UI_formdatains_UserProfile {
	private String xml;
	private String param1;
	private String param2;
	private String param3;
	private String param4;
	private String DBSrc;
	private String spname;

	public void xml(String xml) {
		this.xml = xml;
	}
	
	public void param1(String param1) {
		if(param1!=""||param1==null)
		{
		try {
	        MessageDigest m = MessageDigest.getInstance("MD5");
	        byte[] data = param1.getBytes();
	        m.update(data, 0, data.length);
	        BigInteger i = new BigInteger(1, m.digest());      
	        param1=String.format("%1$032x", i);
	        System.out.println(String.format("%1$032x", i));
	    	}
		catch (Exception ex) {}
		}
		this.param1 = param1;
	}

	

	public void param2(String param2) {
		if(param2!=""||param2==null)
		{
		try {
	        MessageDigest m = MessageDigest.getInstance("MD5");
	        byte[] data = param2.getBytes();
	        m.update(data, 0, data.length);
	        BigInteger i = new BigInteger(1, m.digest());      
	        param2=String.format("%1$032x", i);
	        System.out.println(String.format("%1$032x", i));
	    	}
		catch (Exception ex) {}
		}
		this.param2 = param2;
	}
	
	public void param3(String param3) {
		this.param3 = param3;
	}
	
	public void param4(String param4) {
		this.param4 = param4;
	}
	public void spname(String spname) {
		this.spname = spname;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String UI_formdatains_UserProfile() throws SQLException {

		ResultSet resultSet = null;
		// PreparedStatement preparedStatement = null;

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		String str = null;

		PreparedStatement proc_stmt = con.prepareStatement("{ call " + spname+ "(?,?,?,?,?) }");

		proc_stmt.setString(1, xml);
		proc_stmt.setString(2, param1);
		proc_stmt.setString(3, param2);
		proc_stmt.setString(4, param3);
		proc_stmt.setString(5, param4);
		

		// preparedStatement.setString(3, spname);

		resultSet = proc_stmt.executeQuery();

		while (resultSet.next()) {

			str = resultSet.getString(1);

		}

		return str;

	}

}
