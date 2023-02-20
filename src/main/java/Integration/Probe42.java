package Integration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import CommonModel.DBConnection;
import Controls.GetDBData;
import Controls.InterfaceProbeCall;
public class Probe42 {
	private void StringUtils() {
	    throw new IllegalStateException("Utility class");
	  }

	public static String probe42CheckStatus(String spname,String prcsid,String cinrpan,String hittype,String exectype) throws Exception
	{
		String rslt=null;
		Connection con=null;
		PreparedStatement pr=null;
		PreparedStatement pr1=null;
		ResultSet results=null;
		String uniqid=null;
		String cntnturl=null;
		String key=null;
		String spname1=null;
		String version=null;
		ArrayList<String> data = new ArrayList<String>();
		try
		{
		if(con==null)
		{
			con=DBConnection.getConnection(null);
		}
		pr=con.prepareStatement("{ call " + spname+ "(?,?,?,?,?) }");
		pr.setString(1, prcsid);
		pr.setString(2, cinrpan);
		pr.setString(3, hittype);
		pr.setString(4, exectype);
		pr.setString(5, "");
		
		results=pr.executeQuery();  
		
	  	while (results.next()) {
	  		
	  		spname1=results.getString("spname1");
	  		uniqid=results.getString("UNIQID");
	  		cntnturl=results.getString("URL");
	  		key=results.getString("Key");
	  		version=results.getString("Version");
	  	}
	  	
	  	String result=InterfaceProbeCall.interfaceProbService(cntnturl, key, uniqid, version);
	  	
	  	String status=null;
	  	String message=null;
	  	
	  	String [] resultSplit=result.split("~");
	  	
	  	status=resultSplit[0];
	  	
	  	message=resultSplit[1];
	  	
	  	pr1=con.prepareStatement("{ call " + spname1+ "(?,?,?,?,?) }");
	  	
		pr1.setString(1, status);
		pr1.setString(2, message);
		pr1.setString(3, "UPDATE");
		pr1.setString(4, "");
		pr1.setString(5, uniqid);
		
		pr1.executeQuery();  
		
		rslt=status+"~"+message;

		}catch(Exception exc)
		{
			try {
				data = GetDBData.Call("", "",exc.toString(),"Exception",exc.getMessage(), spname);
				rslt = data.get(0);
			}
			catch  (Exception e1)
			{
				rslt = "ERROR";
				e1.printStackTrace();
			}
		}
		finally
		{
			DBConnection.closeConnection(null,pr1,null);
			DBConnection.closeConnection(con,pr,results);
		}
		return rslt;
	}
}
