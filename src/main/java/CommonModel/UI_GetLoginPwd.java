package CommonModel;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UI_GetLoginPwd {

	private String username;
	private String DBSrc;

	public void username(String username) {
		this.username = username;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String UI_GetLoginPwd1() throws SQLException {
		ResultSet resultSet = null;
		PreparedStatement preparedStatement = null;

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");
		String str = null;
		preparedStatement = con
				.prepareStatement("{ call SAM_SGetLoginPwd(?) }");
		preparedStatement.setString(1, username);
		resultSet = preparedStatement.executeQuery();
		while (resultSet.next()) {

			str = resultSet.getString(1);
		}
		return str;
		// END -- Enable in future
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		String username = request.getParameter("username");
		String DBSrc = request.getParameter("DBSrc");

		ResultSet resultSet = null;
		PreparedStatement preparedStatement = null;
	
			Connection con = DBConnection.getConnection(DBSrc);
			// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			// Connection con =
			// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

			String str = null;
			try {
			preparedStatement = con
					.prepareStatement("{ call SAM_SGetLoginPwd(?) }");
			preparedStatement.setString(1, username);

			resultSet = preparedStatement.executeQuery();

			while (resultSet.next()) {

				str = resultSet.getString(1);

			}

			out.print(str);
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
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
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

		

	}
}
