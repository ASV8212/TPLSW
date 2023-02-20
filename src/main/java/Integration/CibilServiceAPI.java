package Integration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import CommonModel.DBConnection;
import Controls.InterfaceCibilService;

public class CibilServiceAPI {

	public String CibilSerivceCall(String PRCSID,String CUSID,String Param3,String Param4,String Param5) throws Exception
	{
	    String Result = "";
	    String JsonData = "";
	    String SoapAction = "";
	    String ResMsg = "";
	    String APiURL = "";
	    String Token = "";
	    String spname="LSW_SCIBILRESP";
	    String uniqid="";
	    
	    Connection con=null;
	    PreparedStatement pr=null;
	    PreparedStatement pr1=null;
	    ResultSet results =null;
	    ResultSet Result1 =null;
	    try {
	    	
			if(con==null)
			{
				con=DBConnection.getConnection(null);
			}
	      pr=con.prepareStatement("{ call " + spname+ "(?,?,?,?,?) }");
	      pr.setString(1, PRCSID);
	      pr.setString(2, CUSID);
	      pr.setString(3, "");
	      pr.setString(4, "");
	      pr.setString(5, "");
	      results = pr.executeQuery();
	      ResultSetMetaData rsmd = results.getMetaData();
	      int colCount = rsmd.getColumnCount();

	      while (results.next()) {
	    	APiURL = results.getString(1);
	    	JsonData = results.getString(2);
	    	Token= results.getString(3);
	    	uniqid= results.getString(4);
	    	PRCSID = results.getString(5);
	    	CUSID=results.getString(6);
	      } 
	      
	      if(colCount>=1)
	      ResMsg=InterfaceCibilService.InterfaceCibilService(APiURL,JsonData,Token);
	      
//	      System.out.println("Response: " + ResMsg);
	      
		  	String Status="";
		  	String Message="";
		  	
		  	String [] resultSplit=ResMsg.split("~");
		  	
		  	Status=resultSplit[0];
		  	
		  	Message=resultSplit[1];
		  		  	
		  	pr1=con.prepareStatement("{ call "+spname+"SAV" + "(?,?,?,?,?,?) }");
//		  	System.out.println("Message " +Message);
			pr1.setString(1, Status);
			pr1.setString(2, Message);
			pr1.setString(3, CUSID);
			pr1.setString(4, PRCSID);
			pr1.setString(5, uniqid);
			pr1.setString(6, "");
			
			Result1 = pr1.executeQuery();

			while (Result1.next()) {
				Status = Result1.getString(1);
			}
			
			Result=Status;
	    } catch (SQLException e) {
	      
	      e.printStackTrace();     
	      ResMsg = e.toString();
	      System.out.println("Response: " + ResMsg);
	      return ResMsg;
	    } 
	      
	    catch (Exception e)
		{
	    	e.printStackTrace();
	        ResMsg = e.toString();
	        System.out.println("Response: " + ResMsg);
	        return ResMsg;
		}
	  /*  finally
	    {
	    	DBConnection.closeConnection(null,pr,null);
	    	DBConnection.closeConnection(con,pr1,results);
	    }*/
		return Result;
	}
	
}
