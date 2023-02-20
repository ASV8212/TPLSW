package CommonModel;

import java.io.*;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.http.*;

import org.springframework.stereotype.Controller;

@Controller
public class UI_fetchformdata {
	// response.setContentType("text/html");
	// PrintWriter out = response.getWriter();

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

	public String UI_fetchformdata1() throws SQLException {

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// /Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		String str = null;
		ResultSet results = null;
		CallableStatement ps = null;
		String xml = "";
		
		try
		{
		ps = con
				.prepareCall("{ call SAM_SFetchFormData(?,?) }");

		ps.setString(1, param1);
		ps.setString(2, param2);

		results = ps.executeQuery();

		ResultSetMetaData rsmd = results.getMetaData();
		int colCount = rsmd.getColumnCount();

		xml = "<Resultset>";
		while (results.next()) {
			xml = xml + "<row>";
			for (int i = 1; i <= colCount; i++) {

				String value2 = results.getString(i);

				if (value2 == null) {

					value2 = "";

				}

				xml = xml + "<" + rsmd.getColumnName(i) + ">" + value2 + "</"
						+ rsmd.getColumnName(i) + ">";

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
