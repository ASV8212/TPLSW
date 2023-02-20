package Integration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import CommonModel.DBConnection;

import Controls.InterfaceSmeDev;

public class SmeDeviation {

	public static String SmeDeviationCall(String spname,String Processid,String Input2,String Input3,String Input4,String Input5) throws Exception
	{
	    String Result = "";
	    String JsonData = "";
	    String SoapAction = "";
	    String ResMsg = "";
	    String APiURL = "";
	    String Token = "";
	    String uniqid="";
	    String PRCSID = Processid;
	    
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
	      pr.setString(2, "");
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
	    	//cusid=results.getString(6);
	      } 
	      
	      if(colCount>=1)
	      ResMsg=InterfaceSmeDev.InterfaceCallSrv(APiURL,JsonData,uniqid,Token,Processid);
	      
//	      System.out.println("Response: " + ResMsg);
	      
		  	String Status=null;
		  	String Message=null;
		  	
		  	String [] resultSplit=ResMsg.split("~");
		  	
		  	Status=resultSplit[0];
		  	
		  	Message=resultSplit[1];
		  		  	
		  	pr1=con.prepareStatement("{ call " + spname+"_UPD" + "(?,?,?,?,?) }");
//		  	System.out.println("Message " +Message);
			pr1.setString(1, Status);
			pr1.setString(2, Message);
			pr1.setString(3, uniqid);
			pr1.setString(4, PRCSID);
			pr1.setString(5, "");
			
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
		return Result;
	}
}
