package CommonModel;

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

public class UI_formdatains_General {

	private String xml;
	private String Param;
	private String DBSrc;

	public void xml(String xml) {
		this.xml = xml;
	}

	public void Param(String Param) {
		this.Param = Param;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String UI_formdatains_General() throws SQLException {

		ResultSet resultSet = null;
		PreparedStatement preparedStatement = null;

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		String str = null;
		try
		{
		preparedStatement = con.prepareStatement("{ call Sam_sGeneral(?,?) }");
		preparedStatement.setString(1, xml);
		System.out.println("xml in UI_formdatains_General "+xml);
		preparedStatement.setString(2, Param);

		resultSet = preparedStatement.executeQuery();

		while (resultSet.next()) {

			str = resultSet.getString(1);

		}

		if (resultSet != null) {
   		 resultSet.close();
           }
   	 if (preparedStatement != null) {
   		 preparedStatement.close();
           }
       if (con != null) {
           con.close();
       }
}
catch (Exception e)
{
	if (resultSet != null) {
		 resultSet.close();
       }
	 if (preparedStatement != null) {
		 preparedStatement.close();
       }
   if (con != null) {
       con.close();
   }
	e.printStackTrace();
}
		finally {
	        try {
	        	 if (resultSet != null) {
	        		 resultSet.close();
		            }
	        	 if (preparedStatement != null) {
	        		 preparedStatement.close();
		            }
	            if (con != null) {
	                con.close();
	            }
	           
	        } catch (SQLException sqlee) {
	            sqlee.printStackTrace();
	        }
	    }
		
		return str;

	}

}
