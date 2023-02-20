package CommonModel;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UI_fetchformButtonData {

	private String ProcessDefID;
	private String ActivityDefID;

	private String DBSrc;

	public void ProcessDefID(String ProcessDefID) {
		this.ProcessDefID = ProcessDefID;
	}

	public void ActivityDefID(String ActivityDefID) {
		this.ActivityDefID = ActivityDefID;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String UI_fetchformButtonData() throws SQLException {

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");


		String str = null;
		ResultSet results = null;
		CallableStatement ps = null;
		String xml = "";
		
		try
		{
		ps = con
				.prepareCall("{ call SAM_sFormButtonData(?,?) }");

		ps.setString(1, ProcessDefID);
		ps.setString(2, ActivityDefID);

		results = ps.executeQuery();

		ResultSetMetaData rsmd = results.getMetaData();
		int colCount = rsmd.getColumnCount();

		xml = "<Resultset>";
		while (results.next()) {
			xml = xml + "<row>";
			for (int i = 1; i <= colCount; i++) {
				xml = xml + "<" + rsmd.getColumnName(i) + ">"
						+ results.getString(i) + "</" + rsmd.getColumnName(i)
						+ ">";

			}
			xml = xml + "</row>";
		}

		xml = xml + "</Resultset>";


		 if (results != null) {
    		 results.close();
            }
    	 if (ps != null) {
    		 ps.close();
            }
        if (con != null) {
            con.close();
        }
}
catch (Exception e)
{
	 if (results != null) {
		 results.close();
        }
	 if (ps != null) {
		 ps.close();
        }
    if (con != null) {
        con.close();
    }
	e.printStackTrace();
}
		finally {
	        try {
	        	 if (results != null) {
	        		 results.close();
		            }
	        	 if (ps != null) {
	        		 ps.close();
		            }
	            if (con != null) {
	                con.close();
	            }
	           
	        } catch (SQLException sqlee) {
	            sqlee.printStackTrace();
	        }
	    }
		
		
		return xml;

	}

}
