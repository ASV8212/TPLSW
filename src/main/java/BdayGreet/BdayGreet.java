package BdayGreet;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import java.util.Properties;


import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeBodyPart;


import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.mail.internet.MimeMultipart;
import javax.mail.util.ByteArrayDataSource;



public class BdayGreet {

	String UserID= null;
	String RecName = null;
	String ResFname = null;
	String tillDate = null;
	String today=null;
	
	
	String Param1 = null;
	String Param2 = null;
	String Param3 = null;
	String Param4 = null;
	String Param5 = null;
	
	
	String Title= null;
	String Mesg = null;
	String username = null;
	String password = null;
	String Host = null;
	String Port = null;
	StringBuilder content = new StringBuilder();
	InternetAddress[] TO= new InternetAddress[100];
	InternetAddress[] BccList = new InternetAddress[100];
	InternetAddress[] CcList = new InternetAddress[100];
	String URL;
	String URL2;
	String Data1;
	String Data2;
	 
	public Connection getDBstring()
	{
		Connection con = null;
		try 
		{
			//con = DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=testdb;user=sa;password=encore@123");                   
      	    con = DriverManager.getConnection("jdbc:sqlserver://14.192.17.66:1433;databaseName=LSWCH;user=sa;password=encore123");                   
			//con = DriverManager.getConnection("jdbc:sqlserver://14.192.17.66:1433;databaseName=LSWCC_II;user=sa;password=ENP@ssw0rd123");
			//con = DriverManager.getConnection("jdbc:sqlserver://10.236.168.116:1433;databaseName=LSWCC_II;user=sa;password=ENP@ssw0rd123");
			
			return con;
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
		return con;                   
	}
	
	public void fetchDataFromDB() throws AddressException, MessagingException 
	{
		//final String username = "username@gmail.com";
		//final String password = "password";

		//String RecpEmail[] = recipientEmail.split("\\,");
		
		
	    // many of these calls can throw exceptions, so i've just
	    // wrapped them all in one try/catch statement.
	   
		//String Prophosts = Prophost.split("\\|")[0];
		//String portno = Prophost.split("\\|")[1];
		
		//props.put("mail.smtp.host", "smtp.encoretheme.com");
		//props.put("mail.smtp.port", "587");
		try{
	        	
	        Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
	           Connection con = getDBstring();
	           
	           
	           CallableStatement ps = con.prepareCall("{ call LSW_sEmailData(?) }");
	           ps.setString(1, "");
	           ps.setString(2, "");
	           

	          //SAM_SgetDataToMail
	          //CallableStatement ps = con.prepareCall("{ call SAM_SgetDataToMail(?) }");
	          //ps.setString(1, "Deferral Due Report");
	      
	         //   EOM MIS        
	            ResultSet results=ps.executeQuery();   
	            
	            ResultSetMetaData rsmd = results.getMetaData();
	            int colCount           = rsmd.getColumnCount();
	            
	            //String xml="<Resultset>";
	    		while(results.next())
	    		{
	    			   //xml = xml   + "<row>";
	    			 for (int i = 1; i <= colCount; i++)
	    		      { 
			
			
	    				
			
			//for (int i = 0; i < recipientEmail.split("\\,").length; i++) 
	    	
	    	String chk= rsmd.getColumnLabel(i).toString();
			String value2 = results.getString(i);
			 
			 if(value2 == null)
			 {
				 value2=""; 
			 }
			 else if(chk.equals("tillDate"))
			 {
				 tillDate = value2;
			 }
			 else if(chk.equals("today"))
			 {
				 today = value2;
			 }
			 else if(chk.equals("id"))
			 {
				 UserID = value2;
			 }
			 else if(chk.equals("username"))
			 {
				 RecName = value2;
			 }
			 else if(chk.equals("firstName"))
			 {
				 ResFname = value2;
			 }
			 else if(chk.equals("email"))
			 {
				TO = InternetAddress.parse(value2, false);
			 }
			
			
			 
			 else if(chk.equals("fromId"))
			 {
				 username=value2;
			 }
			 else if(chk.equals("password"))
			 {
				 password=value2;
			 }
			 else if(chk.equals("subject"))
			 {
				 Title=value2;
			 }
			 else if(chk.equals("content"))
			 {
				 Mesg=value2;
			 }
			 else if(chk.equals("host"))
			 {
				 Host=value2;
			 }
			 else if(chk.equals("port"))
			 {
				 Port=value2;
			 }
//xml = xml   + "<"+rsmd.getColumnName(i)+">"+value2+"</"+rsmd.getColumnName(i)+">";   

	      }
	    			 
	SendMail(username,password);
		 //xml = xml   + "</row>";
	}

}catch (Exception e2)
 {
     e2.printStackTrace();
 }
			
}
	
	public void SendMail(final String UserName,final String Password) throws AddressException, MessagingException
	{
		
		 try
		    {
		 
		 
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		//props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.host", Host);
		props.put("mail.smtp.port", Port);
		Session session = Session.getInstance(props,
				  new javax.mail.Authenticator() {
					protected PasswordAuthentication getPasswordAuthentication() {
						return new PasswordAuthentication(UserName,Password);
					}
				  });

		
		
		
		
		
		Message message = new MimeMessage(session);
		message.setFrom(new InternetAddress(username));
		message.addRecipients(Message.RecipientType.TO,TO);
	    message.addRecipients(Message.RecipientType.BCC,BccList); 
	    message.addRecipients(Message.RecipientType.CC,CcList);
		message.setSubject(Title);

		 message.setContent(Mesg,"text/html");  
        // message.setContent(message);
		//System.out.println(content.toString());
		Transport.send(message, message.getAllRecipients());
		   
		    
		    
		    }
		    catch(Exception e)
		    {
		      e.printStackTrace();
		    }
		
		 
}


public static void main( String[] args )throws Exception 
{
	//System.out.println( "Lets Do the Math " );         
	
	BdayGreet SAM=new BdayGreet();
	SAM.fetchDataFromDB();
}


}
