package CommonModel;

import java.io.*;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.http.*;

import org.springframework.stereotype.Controller;

import CommonModel.DBConnection;

public class UI_formdatainsert {

	private String xml;
	private String tablenameins;
	private String tablenameins1;
	private String activityid;
	private String activityname;
	private String DBSrc;

	public void xml(String param1) {
		this.xml = param1;
	}

	public void tablenameins(String param2) {
		this.tablenameins = param2;
	}

	public void tablenameins1(String param3) {
		this.tablenameins1 = param3;
	}

	public void activityid(String DBSrc) {
		this.activityid = DBSrc;
	}

	public void activityname(String spname) {
		this.activityname = spname;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String UI_formdatainsertdata() throws SQLException {

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		String str = null;
		ResultSet resultSet = null;
		PreparedStatement preparedStatement = null;

		try
		{
		preparedStatement = con
				.prepareStatement("{ call SAM_SInsertFormData(?,?,?,?,?) }");
		preparedStatement.setString(1, xml);
		preparedStatement.setString(2, tablenameins);
		preparedStatement.setString(3, tablenameins1);
		preparedStatement.setString(4, activityid);
		preparedStatement.setString(5, activityname);

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
