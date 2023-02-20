package Integration;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.Base64;
//import java.util.Random;

import CommonModel.DBConnection;
import Controls.InterfaceEsignlegality;

public class EsignLegality {

//	public static void main(String ap[]) throws Exception
//	{
//		try
//		{
////		new EsignLegality().EsignLegalityService("LSW_SESIGNAPICREATE", "C:\\Manoj Kumar\\TVS\\Sample.pdf", "JXwnWtt", "Create", "Testing"+new Random().nextInt(100000)); 
//		new EsignLegality().EsignLegalityService("LSW_SESIGNAPICREATE", "status=SENT", "", "List", "Testing"+new Random().nextInt(100000));
////		System.out.println("Output "+result.split("~")[1]);
//		
//		}catch(Exception excd)
//		{
//		excd.printStackTrace();
//		}
//	}
	
//	@SuppressWarnings("unused")
	public String EsignLegalityService(String spname1,String Input1,String Input2,String ServiceType,String processId) throws Exception {
    String JsonData = "";
    String contenttype = "";
    String Authtoken = "";
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
      
		if(ServiceType.equals("Create"))
		{
			byte [] bs= new byte[1024];
			bs=Files.readAllBytes(Paths.get(Input1));
			byte [] encoding= new byte[1024];
			encoding= Base64.getEncoder().encode(bs);
			Encoded=new String(encoding);
			System.out.println("Encoded value "+ Encoded);
		} 
  
      pr=con.prepareStatement("{ call " + spname1+ "(?,?,?,?,?) }");
      pr.setString(1, Input1);
      pr.setString(2, Input2);
      pr.setString(3, Encoded);
      pr.setString(4, ServiceType);
      pr.setString(5, processId);
      results = pr.executeQuery();
      ResultSetMetaData rsmd = results.getMetaData();
      int colCount = rsmd.getColumnCount();

      while (results.next()) {
    	APiURL = results.getString(1);
        JsonData = results.getString(2);
        contenttype = results.getString(3);
        Authtoken = results.getString(4);
        processId = results.getString(5);
      } 

      if(colCount>=1){
    	  
	      if(ServiceType.equals("Create"))
	      ResMsg=InterfaceEsignlegality.InterfacePostCall(APiURL, JsonData, contenttype, Authtoken);
	      else
	      ResMsg=InterfaceEsignlegality.InterfaceGetCall(APiURL, contenttype, Authtoken);
      
	      System.out.println("Response: " + ResMsg);
	      
		  	String Status=null;
		  	String Message=null;
		  	
		  	String [] resultSplit=ResMsg.split("~");
		  	
		  	Status=resultSplit[0];
		  	
		  	Message=resultSplit[1];
		  		  	
		  	pr1=con.prepareStatement("{ call " + spname1+"_UPD" + "(?,?,?,?,?) }");
		  	
			pr1.setString(1, Status);
			pr1.setString(2, Message);
			pr1.setString(3, "");
			pr1.setString(4, ServiceType);
			pr1.setString(5, processId);
			
			pr1.executeQuery();  
		
      }
      
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
    return ResMsg;
	}
}
