package Integration;

import CommonModel.DBConnection;
import Controls.InterfaceCRMAPI;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import java.util.Random;

public class CRMAPI {
	
/*	
public static void main(String ap[]) throws Exception
{
	try
	{
		new CRMAPI().CRMAPIService("LSW_SCRMAPICREATE", "", "1243r354", "AADHAAR XML VERIFY", "Testing"+new Random().nextInt(100000));		
//		new KarzaAPI().KarzaAPIService("LSW_SKARZAAPICREATE", "http://20.198.80.211:6065/TPLSW/DMSVIEW?PrcsID=92063_HomeEqutity_process&DMSID=4f5e86c943e34e46b69251d137423a51", "1243r354", "AADHAAR XML VERIFY", "Testing"+new Random().nextInt(100000));
//	new KarzaAPI().KarzaAPIService("LSW_SKARZAAPICREATE", "C:\\Manoj Kumar\\TVS\\Testing.jpg~C:\\Manoj Kumar\\TVS\\Testing.jpg", "Testinqwewq", "FACE MATCHING", "Testing"+new Random().nextInt(100000)); 
	}catch(Exception excd)
	{
	excd.printStackTrace();
	}
}*/
		
	public String CRMAPIService(String spname1,String Input1,String Input2,String APIType,String processId) throws Exception {
	
    String JsonData = "";
    String contenttype = "";
    String MethodType = "";
    String ResMsg = "";
    String APiURL = "";
    String Encoded="";
    Connection con=null;
    PreparedStatement pr=null;
    PreparedStatement pr1=null;
    ResultSet results =null;
    try {
    	
		if(con==null)
		{
			con=DBConnection.getConnection(null);
		}
      pr=con.prepareStatement("{ call " + spname1+ "(?,?,?,?,?) }");
      pr.setString(1, Input1);
      pr.setString(2, Input2);
      pr.setString(3, Encoded);
      pr.setString(4, APIType);
      pr.setString(5, processId);
      results = pr.executeQuery();
      ResultSetMetaData rsmd = results.getMetaData();
      int colCount = rsmd.getColumnCount();
      System.out.println("CRMAPI colCount "+colCount);
      while (results.next()) {
        JsonData = results.getString(1);
        contenttype = results.getString(2);
        MethodType = results.getString(3);
        APiURL = results.getString(4);
        processId = results.getString(5);
      } 

      if(MethodType.equals("POST"))
      ResMsg=InterfaceCRMAPI.InterfacePostCall(APiURL, JsonData, contenttype);
      else
    	  ResMsg=InterfaceCRMAPI.InterfaceGetCall(APiURL, contenttype);
      
      System.out.println("CRMAPI Response: " + ResMsg);
      
	  	String Status=null;
	  	String Message=null;
	  	
	  	String [] resultSplit=ResMsg.split("~");
	  	
	  	Status=resultSplit[0];
	  	
	  	Message=resultSplit[1];
	  		  	
	  	pr1=con.prepareStatement("{ call " + spname1+"_UPD" + "(?,?,?,?,?) }");
	  	
		pr1.setString(1, Status);
		pr1.setString(2, Message);
		pr1.setString(3, "");
		pr1.setString(4, APIType);
		pr1.setString(5, processId);
		
		pr1.executeQuery();  


    } catch (SQLException e) {
      
      e.printStackTrace();     
      ResMsg = e.toString();
      System.out.println("CRMAPI Response: " + ResMsg);
      return ResMsg;
    } 
    catch (Exception e)
	{
    	e.printStackTrace();
        ResMsg = e.toString();
        System.out.println("CRMAPI Response: " + ResMsg);
        return ResMsg;
	}
    finally
    {
    	DBConnection.closeConnection(null,pr1,null);
    	DBConnection.closeConnection(con,pr,results);
    }
    return ResMsg;
	}
	
}


