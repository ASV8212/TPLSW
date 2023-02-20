package Controller;

import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import CommonModel.DBConnection;

@ServerEndpoint(value = "/wschat")
public class WebSocket{
    //notice:not thread-safe
    private static ArrayList<Session> sessionList = new ArrayList<Session>();
    public String SeccionID;
    @OnOpen
    public void onOpen(Session session){
    	SeccionID=session.getId();
		sessionList.add(session);
		//session.getBasicRemote().sendText("Hello!");
    }
    
    @OnClose
    public void onClose(Session session){
        sessionList.remove(session);
    }
    
    @OnMessage
    public void onMessage(String msg){
        //StringUtils.substring("abc", 0, 2)   = "ab"
		String chk[]=msg.split("\\|");
		String xml="";
		String LocalSession;
		if(chk[0].equals("usr"))
		{
			String DBSrc=null;
			Connection con = DBConnection.getConnection(DBSrc);
			ResultSet results;
			try 
			{

			if(!(chk[1].equals("")))
			{
				CallableStatement ps = con.prepareCall("{ call SAM_sInsMultiSession(?,?,?,?,?) }");
		        ps.setString(1,chk[1]);
		        ps.setString(2,SeccionID);
		        ps.setString(3,"N");
		        ps.setString(4,chk[2]);
		        ps.setString(5," ");
		        results=ps.executeQuery();
			} 
			}
			catch(Exception ex) 
			{
				System.out.println(ex.getMessage());
			}
		}
		else if(chk[0].equals("chk"))
		{
			//msg=msg.substring(4);
			//String Sender=msg.substring(4);
			
			String SenderID="";
	
			
			String DBSrc=null;
			Connection con = DBConnection.getConnection(DBSrc);
				ResultSet results;
				try 
				{
					xml=chk[1];
		    		CallableStatement ps = con.prepareCall("{ call Sam_sGetMultiSession(?) }");
		            ps.setString(1,xml);
		            results=ps.executeQuery();
		            ResultSetMetaData rsmd = results.getMetaData();
		            int colCount           = rsmd.getColumnCount();
		    		while(results.next())
		    		{
		    			 for (int i = 1; i <= colCount; i++)
		    		      {  
		    				 String check= rsmd.getColumnLabel(i).toString();
		    				 String value2 = results.getString(i);

		    				 if(value2 == null)
		    				 {
		    					 value2="";
		    				 }
		    				 else if(check.equals("SESSIONID"))
		    				 {
		    					 SenderID = value2;		 
		    				 }
		            
		    		      }
		    		}
		            
		    		for(String Id:SenderID.split("\\|"))
		    		{
		    			for(Session session : sessionList)
			            {
			                //asynchronous communication
			            	if(session.getId().toString().equals(Id))
			                session.getBasicRemote().sendText("Test Alert...");
			            }
		    		}
		            
		            
				}
				catch(Exception ex) 
				{
					System.out.println(ex.getMessage());
				}
			
			
			
		}
    }
    
    public Connection accessDB()
	{
		 Connection con = null;
		try 
		{
		Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        con = DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=testdb;user=sa;password=encore@123");                   
        return con;
		}
		catch(Exception ex) 
		{
			System.out.println(ex.getMessage());
		}
		return con;
	}
}