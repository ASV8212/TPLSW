package CommonModel;

import java.sql.*;

import org.springframework.stereotype.Controller;

import CommonModel.DBConnection;

@Controller
public class GridView {
	// response.setContentType("text/html");
	// PrintWriter out = response.getWriter();

	private String param1;
	private String param2;
	private String param3;
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

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public void spname(String spname) {
		this.spname = spname;
	}

	public String UI_GetGridview() throws SQLException {
		Connection con = DBConnection.getConnection(DBSrc);

		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");

		String str = null;
		ResultSet rs = null;
		PreparedStatement proc_stmt = null;
		String xml = "";	
		
		try
		{
		proc_stmt = con.prepareStatement("{ call " + spname
				+ "(?,?,?) }");
		proc_stmt.setString(1, param1);
		proc_stmt.setString(2, param2);
		proc_stmt.setString(3, param3);

		rs = proc_stmt.executeQuery();

		ResultSetMetaData rsmd = rs.getMetaData();
		int colCount = rsmd.getColumnCount();

		// Start -- Enable in future
		String i1 = "a";
		xml = "";

		xml = xml + "<Resultset>";
		if (!rs.isBeforeFirst()) {
			xml = xml + "<" + i1 + ">";
			for (int i = 1; i <= colCount; i++) {
				xml = xml + "<" + rsmd.getColumnName(i) + "></"
						+ rsmd.getColumnName(i) + ">";

			}
			xml = xml + "</" + i1 + ">";
		} else {

			while (rs.next()) {
				// rs.first();
				// rs.refreshRow();
				// rs.beforeFirst();
				xml = xml + "<" + i1 + ">";
				for (int i = 1; i <= colCount; i++) {
					xml = xml + "<" + rsmd.getColumnName(i) + ">"
							+ rs.getString(i) + "</" + rsmd.getColumnName(i)
							+ ">";

				}
				xml = xml + "</" + i1 + ">";

				// i1=i1+1;
			}
		}
		xml = xml + "</Resultset>";

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

	}

}
