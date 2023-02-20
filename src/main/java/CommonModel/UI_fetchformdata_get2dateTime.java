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

public class UI_fetchformdata_get2dateTime {

	private String DBSrc;

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String UI_fetchformdata_get2dateTime() throws SQLException {

		ResultSet resultSet = null;
		PreparedStatement preparedStatement = null;

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		String str = null;
try
{
		preparedStatement = con
				.prepareStatement("{ call SAM_sGet2DateTime() }");

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
