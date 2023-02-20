package CommonModel;

import java.io.*;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.http.*;

import org.springframework.stereotype.Controller;

public class UI_GetDataLrg {
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

	public String UI_GetData1() throws SQLException {
		// private String strResult;

		// ArrayList columnNames = new ArrayList();
		// ArrayList data = new ArrayList();

		Connection con = DBConnection.getConnection(DBSrc);


		String str = null;
		ResultSet rs = null;
		PreparedStatement proc_stmt = null;
		String xml = "";
		
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
	
		try
		{
			 proc_stmt = con.prepareStatement("{ call " + spname
				+ "(?,?,?,?,?) }");

		proc_stmt.setString(1, param1);
		proc_stmt.setString(2, param2);
		proc_stmt.setString(3, param3);
		proc_stmt.setString(4, param4);
		proc_stmt.setString(5, param5);

		rs = proc_stmt.executeQuery();

		ResultSetMetaData rsmd = rs.getMetaData();
		int colCount = rsmd.getColumnCount();

	
		
		// Start -- Enable in future
		String i1 = "a";
		xml = "";

		while (rs.next()) {

			xml = rs.getString(1);

		}
	
		if (rs != null) {
   		 rs.close();
           }
   	 if (proc_stmt != null) {
   		 proc_stmt.close();
           }
       if (con != null) {
           con.close();
       }
}
catch (Exception e)
{
	if (rs != null) {
		 rs.close();
       }
	 if (proc_stmt != null) {
		 proc_stmt.close();
       }
   if (con != null) {
       con.close();
   }
	e.printStackTrace();
}
		finally {
	        try {
	        	 if (rs != null) {
	        		 rs.close();
		            }
	        	 if (proc_stmt != null) {
	        		 proc_stmt.close();
		            }
	            if (con != null) {
	                con.close();
	            }
	           
	        } catch (SQLException sqlee) {
	            sqlee.printStackTrace();
	        }
	    }		
		
		
		return xml;

		// END -- Enable in future
		
		
	}

}
