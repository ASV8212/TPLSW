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

public class UI_formdata_GetQueueForwardJobs {

	private String Level;
	private String AssignRights;
	private String ProcessID;
	private String activityId;
	private String DBSrc;

	public void Level(String Level) {
		this.Level = Level;
	}

	public void AssignRights(String AssignRights) {
		this.AssignRights = AssignRights;
	}

	public void ProcessID(String ProcessID) {
		this.ProcessID = ProcessID;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public void activityId(String activityId) {
		this.activityId = activityId;
	}

	public String UI_formdata_GetQueueForwardJobs() throws SQLException {

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
				.prepareStatement("{ call Sam_sFrwdQUsr(?,?,?,?) }");

		preparedStatement.setString(1, ProcessID);
		preparedStatement.setString(2, activityId);
		preparedStatement.setString(3, AssignRights);
		preparedStatement.setString(4, Level);

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
