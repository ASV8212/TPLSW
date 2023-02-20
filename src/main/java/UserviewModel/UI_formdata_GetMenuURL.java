package UserviewModel;

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

public class UI_formdata_GetMenuURL {

	private String URL;
	private String MenuName;
	private String DBSrc;

	public void URL(String URL) {
		this.URL = URL;
	}

	public void MenuName(String MenuName) {
		this.MenuName = MenuName;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String UI_formdata_GetMenuURL() throws SQLException {

		ResultSet resultSet = null;
		PreparedStatement preparedStatement = null;

		Connection con = DBConnection.getConnection(DBSrc);

		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		String str = "";
		String str1;
try
{
		preparedStatement = con.prepareStatement("{ call SAM_spMenuUrl(?) }");
		preparedStatement.setString(1, URL);
		// preparedStatement.setString(2, MenuName);

		resultSet = preparedStatement.executeQuery();

		while (resultSet.next()) {

			str = resultSet.getString(1);
			// str1 = resultSet.getString(2);

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
