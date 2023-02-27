package APIInterface;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.http.HttpServletRequest;
import CommonModel.DBConnection;




public class InprincFlowHandler {
	public static String inprincFlowHandler(HttpServletRequest request) {
		String resp = "";
		String respflg = "";
		Connection con = null;
		PreparedStatement procstmt = null;
		ResultSet rs = null;
		try
		{
			String xml = request.getParameter("Gridxml");
			String prcsID = request.getParameter("prcsID");
			con = DBConnection.getConnection(null);
			procstmt = con.prepareStatement("{ call LSW_SINPRINCFLOW_HANDLR (?,?) }");
			procstmt.setString(1, xml);
			procstmt.setString(2, prcsID);

			rs = procstmt.executeQuery();
			while (rs.next()) {
				resp = rs.getString("RESULT");
				respflg = "Success";
			}
		}
		catch(Exception e)
		{
			resp = e.getMessage();
			respflg = "Fail";
		}
		finally {
			try
			{
				if(con != null)
				{
					con.close();
				}
				if(procstmt != null)
				{
					procstmt.close();
				}
				if(rs != null)
				{
					rs.close();
				}
			}
			catch(Exception e)
			{
				resp = e.getMessage();
				respflg = "Fail";
			}
		}
		return respflg+"~"+resp;
	}
}
