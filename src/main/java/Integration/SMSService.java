package Integration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

import CommonModel.DBConnection;
import Controls.InterfaceMailSMSAPI;

public class SMSService {

	
//	  public static void main(String[] args) throws Exception  {
//
//	       String output=new SMSService().SMSServiceCall("LSW_SGETSCHSMSDTLS", "", "", "");
//	       
//	       System.out.println("Output value "+output);
//	    }

	  public String SMSServiceCall(String spname,String Input1,String Input2,String Processid) throws Exception
		{
			String Result="";
			Connection cons=null;
			PreparedStatement prs=null;
			PreparedStatement prs1=null;
			ResultSet rs=null;
			String URL="";
			String Contenttype="";
			String Data="";
			String spname1="";
			String uniqid="";
			try
			{
				if(cons==null)
				{
					cons=DBConnection.getConnection(null);
				}
				prs=cons.prepareStatement("{ call " + spname+ "(?,?,?,?,?) }");
				prs.setString(1, Input1);
				prs.setString(2, Input2);
				prs.setString(3, "");
				prs.setString(4, "");
				prs.setString(5, Processid);
				rs = prs.executeQuery();
				
				ResultSetMetaData rsmd = rs.getMetaData();
				
				int colCount = rsmd.getColumnCount();

			      while (rs.next()) {
			    	URL= rs.getString(1);
			    	Data = rs.getString(2);
			    	Contenttype = rs.getString(3);
			    	spname1=rs.getString(4);
			    	uniqid=rs.getString(5);
			       
			      
			      if(colCount>=1)
			      
			      Result=InterfaceMailSMSAPI.InterfaceEmailCall(URL, Data, Contenttype);
			      
			      System.out.println("Response: " + Result);
			      
				  	String Status=null;
				  	String Message=null;
				  	
				  	String [] resultSplit=Result.split("~");
				  	
				  	Status=resultSplit[0];
				  	
				  	Message=resultSplit[1];
				  		  	
				  	prs1=cons.prepareStatement("{ call " +spname1 + "(?,?,?,?,?) }");
				  	
				  	prs1.setString(1, Status);
				  	prs1.setString(2, Message);
				  	prs1.setString(3, "");
				  	prs1.setString(4, "");
				  	prs1.setString(5, uniqid);
					
				  	prs1.executeQuery();  
			      }
			}catch(Exception ES)
			{
				ES.printStackTrace();
			}
			finally
			{
				DBConnection.closeConnection(null, prs1, null);
				DBConnection.closeConnection(cons, prs, rs);
			}
			return Result;
		}
	  
	
}
