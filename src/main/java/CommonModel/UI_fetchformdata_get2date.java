package CommonModel;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;

public class UI_fetchformdata_get2date {

	private String param1;
	private String param2;
	private String param3;
	private String param4;
	private String param5;
	private String DBSrc;
	private String spname;

	public void param1(String param1) {
		this.param1 = param1;
	}

	public void param2(String param2) {
		this.param2 = param2;
	}

	public void param3(String param3) {
		this.param3 = param3;
	}

	public void param4(String param4) {
		this.param4 = param4;
	}

	public void param5(String param5) {
		this.param5 = param5;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public void spname(String spname) {
		this.spname = spname;
	}

	public String UI_fetchformdata_get2date1() throws SQLException {

		ResultSet resultSet = null;
		PreparedStatement preparedStatement = null;
		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");
		String str = null;

try
{
		preparedStatement = con.prepareStatement("{ call SAM_sGet2Date() }");
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