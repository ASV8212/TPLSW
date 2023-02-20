package Integration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import CommonModel.DBConnection;
import Controls.InterfaceCibilAPI;

public class CibilSerivceAPI {

//	public static void main(String d[]) throws Exception
//	{
//		try
//		{
//			String Output=new CibilSerivceAPI().CibilSerivceCall("LSW_SCIBILAPICREATE","","","Testg1432");
//			
//			System.out.println("Output "+Output);
//			
//		}catch(Exception CSA)
//		{
//			CSA.printStackTrace();
//		}
//	}
	
	public String CibilSerivceCall(String spname,String Input1,String Input2,String Processid) throws Exception
	{
	    String Result = "";
	    String JsonData = "";
	    String SoapAction = "";
	    String ResMsg = "";
	    String APiURL = "";
	    String Token = "";
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
	      pr.setString(1, Input1);
	      pr.setString(2, Input2);
	      pr.setString(3, "");
	      pr.setString(4, "");
	      pr.setString(5, Processid);
	      results = pr.executeQuery();
	      ResultSetMetaData rsmd = results.getMetaData();
	      int colCount = rsmd.getColumnCount();

	      while (results.next()) {
	    	APiURL = results.getString(1);
	    	JsonData = results.getString(2);
	    	Processid = results.getString(3);
	    	SoapAction= results.getString(4);
	    	Token= results.getString(5);
	      } 
	      
	      if(colCount>=1)
	      ResMsg=InterfaceCibilAPI.InterfaceCibilService(APiURL,JsonData,Processid,SoapAction);
	      
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
			pr1.setString(3, Input1);
			pr1.setString(4, Input2);
			pr1.setString(5, Processid);
			pr1.setString(6, Token);
			
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
	    finally
	    {
	    	DBConnection.closeConnection(null,pr1,null);
	    	DBConnection.closeConnection(con,pr,results);
	    }
		return Result;
	}
}
