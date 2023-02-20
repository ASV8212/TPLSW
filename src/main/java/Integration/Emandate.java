package Integration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
//import java.util.Random;

import org.codehaus.jettison.json.JSONObject;

import CommonModel.DBConnection;
import Controls.InterfaceEmandate;


public class Emandate {
	
//	public static void main(String a[]) throws Exception
//	{
//		try
//		{
//			System.out.println("Output URL "+ new Emandate().EmandateApiService("LSW_SEMANDATEAPICREATE","","Create","Testing"+new Random().nextInt(100000)));
//			
////			System.out.println("Output URL "+ new Emandate().EmandateApiService("LSW_SEMANDATEAPICREATE","73680","Get","Testing"+new Random().nextInt(100000)));
//		}catch(Exception IEM)
//		{
//			IEM.printStackTrace();
//		}
//	}
	
	public String EmandateApiService(String spname1,String Input1,String Input2,String Input3,String Input4,String processId) throws Exception {
		
		String xmlData = "";
	    String ResMsg = "";
	    String APiURL = "";
	    String Output="";
	    String uniqid="";
	    Connection conEM=null;
	    PreparedStatement prEM=null;
	    PreparedStatement prEM1=null;
	    ResultSet rsEM =null;
	    try {
	    	
			if(conEM==null)
			{
				conEM=DBConnection.getConnection(null);
			} 
			prEM=conEM.prepareStatement("{ call " + spname1+ "(?,?,?,?,?) }");
			prEM.setString(1, Input1);
			prEM.setString(2, Input2);
			prEM.setString(3, Input3);
			prEM.setString(4, Input4);
			prEM.setString(5, processId);
		    
			rsEM = prEM.executeQuery();
		    
			ResultSetMetaData rsmd = rsEM.getMetaData();
		    
			int colCount = rsmd.getColumnCount();

	      while (rsEM.next()) {
	    	APiURL = rsEM.getString(1);
	    	xmlData = rsEM.getString(2);
	        processId = rsEM.getString(3);
	        uniqid=rsEM.getString(4);
	      } 

	      if(colCount>=1)
	    	  Output=InterfaceEmandate.InterfaceEmandateService(APiURL,xmlData,processId);

	      
	      	System.out.println("Response: " + Output);
	      
		  	String Status=null;
		  	String Message=null;
		  	
		  	String [] resultSplit=Output.split("~");
		  	
		  	Status=resultSplit[0];
		  	
		  	Message=resultSplit[1];
		  	
		  	
		  	
		  	
		  	JSONObject jsEM=new JSONObject(Message);
		  	String value="";
		  	if(Input2.equals("Create"))
		  	{
		  		ResMsg=jsEM.getString("message");
		  			
		  			if(ResMsg.equals("Success"))
		  			{
		  				ResMsg+="~"+jsEM.getString("seqno");
		  				value=jsEM.getString("url");
		  			}
		  	}		
		  	else
		  	{
		  		ResMsg=jsEM.getString("status");
		  		
		  			if(ResMsg.equals("SR"))
		  			{
		  				ResMsg=jsEM.getString("message")+"~"+jsEM.getString("umrn");
		  				value=jsEM.getString("umrn");
		  			}
		  			else
		  			{
		  				ResMsg="Failed"+"~"+jsEM.getString("message");
		  			}
		  	}
		  	
		  	prEM1=conEM.prepareStatement("{ call " + spname1+"_UPD" + "(?,?,?,?,?) }");
		  	
		  	prEM1.setString(1, Status);
		  	prEM1.setString(2, Message);
		  	prEM1.setString(3, value);
		  	prEM1.setString(4, "");
		  	prEM1.setString(5, uniqid);
			
		  	prEM1.executeQuery();  
		  	
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
	    	DBConnection.closeConnection(null,prEM1,null);
	    	DBConnection.closeConnection(conEM,prEM,rsEM);
	    }
	    return ResMsg;
		}

}
