package Integration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import CommonModel.DBConnection;
import Controls.InterfaceCibilAPI;
import Controls.InterfaceMLAPI;

public class MlAPI {

	public String mlServicecall(String spname,String cusid,String Input2,String Input3,String Input4,String Processid) throws Exception
	{
	    String Result = "";
	    String JsonData = "";
	    String SoapAction = "";
	    String ResMsg = "";
	    String APiURL = "";
	    String Token = "";
	    String Score ="";
	    spname="LSW_SMLREQDATA";
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
	      pr.setString(1, Processid);
	      pr.setString(2, cusid);
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
	    	Processid = results.getString(5);
	    	cusid=results.getString(6);
	      } 
	      
	      
	      
	      if(colCount>=1)
	      ResMsg=InterfaceMLAPI.Interfacemlservie(APiURL,JsonData,Token);
	      
//	      System.out.println("Response: " + ResMsg);
	      
		  	String Status=null;
		  	String Message=null;
		  	
		  	String [] resultSplit=ResMsg.split("~");
		  	
		  	Status=resultSplit[0];
		  	
		  	Message=resultSplit[1];
		  		  	
		  	pr1=con.prepareStatement("{ call " + spname+"_UPD" + "(?,?,?,?,?,?) }");
//		  	System.out.println("Message " +Message);
			pr1.setString(1, Status);
			pr1.setString(2, Message);
			pr1.setString(3, cusid);
			pr1.setString(4, uniqid);
			pr1.setString(5, Processid);
			pr1.setString(6, Token);
			
			Result1 = pr1.executeQuery();
			
			while (Result1.next()) {
				Score = Result1.getString(1);
				Status = Result1.getString(2);
			}
			
			Result=Score+"|"+Status;

	    } catch (SQLException e) {
	      
	      e.printStackTrace();     
	      ResMsg = e.toString();
	      System.out.println("Response: " + ResMsg);
	      return ResMsg;
	    } 
	     
	 /*   finally
	    {
	    	DBConnection.closeConnection(null,pr1,null);
	    	DBConnection.closeConnection(con,pr,results);
	    }*/
		return Result;
	}
}
