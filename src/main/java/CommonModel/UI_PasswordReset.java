package CommonModel;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;


public class UI_PasswordReset {

	private String Username;
	private String DBSrc;

	public void Username(String Username) {
		this.Username = Username;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}
public String UI_PasswordReset() throws SQLException, JSONException{
		
		//cache.put(user.getName(), user);
		String response=null;
		String toemail=null;
		String tomobile=null;
		String resetid=null;
		String otpsms=null;
		String frommail=null;
		String mailpassword=null;
		String hostname=null;
		String portno=null;
		String musername=null;
		String mpassword=null;
		String udh=null;
		String coding=null;
		String frommobile=null;
		String url=null;
		String otpemail=null;
		
		
				try {
					Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
				} catch (ClassNotFoundException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
			
			Connection con = DriverManager.getConnection("jdbc:sqlserver://14.192.17.66;databaseName=LSWCH;user=sa;password=encore123");
			//Connection con = DBConnection.getConnection(DBSrc);

			CallableStatement ps = con.prepareCall("{ call Lsw_sMobForgetPassword(?,?,?,?)}");

					 		ps.setString(1,	Username);					 		
					 		ps.setString(2,"Recovery Password");					 		
					 		ps.setString(3,"English");
					 		ps.setString(4, "");
					 							 		
					 		
			ResultSet results = ps.executeQuery();		
									
			while (results.next()) {

				response = results.getString(1);
				toemail = results.getString(2);
				tomobile = results.getString(3);
				resetid = results.getString(4);
				otpsms=results.getString(5);
				frommail=results.getString(6);
				mailpassword=results.getString(7);
				hostname=results.getString(8);
				portno=results.getString(9);
				musername=results.getString(10);
				mpassword=results.getString(11);
				udh=results.getString(12);
				coding=results.getString(13);
				frommobile=results.getString(14);
				url=results.getString(15);
				otpemail=results.getString(16);
				

			}
			
// Mobile Configuration Start		
			
		if(tomobile != null && !tomobile.isEmpty())
		{
		URL url1 = null;
		String a=""+url+"username="+musername+"&password="+mpassword+"&to="+tomobile+"&udh="+udh+"&coding="+coding+"&from="+frommobile+"&text="+otpsms+"&category";
		
		
		try {
			url1 = new URL(a);
		} catch (MalformedURLException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		}
        try {
			URLConnection conn = url1.openConnection();
			 BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			 String inputLine;
		        while ((inputLine = br.readLine()) != null) {
		                System.out.println(inputLine);
		        }
		        br.close();
		} catch (IOException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		}
       
}
	

//Mobile Configuration End	
		
// Email Configuration Start			
	/*		
			if(toemail != null && !toemail.isEmpty())
			{	
			final String frmmail=frommail;
			final String pwd=mailpassword;
				
			Properties props = new Properties();
			props.put("mail.smtp.auth", "true");
			props.put("mail.smtp.starttls.enable", "true");
			props.put("mail.smtp.host", hostname);
			props.put("mail.smtp.port", portno); 
			//props.put("mail.smtp.host", "smtp.encoretheme.com");
			//props.put("mail.smtp.port", "587");

			Session session = Session.getInstance(props, new javax.mail.Authenticator() {
				protected PasswordAuthentication getPasswordAuthentication() {
					return new PasswordAuthentication(frmmail,pwd);
				} 
			  });

			try {
				Message message = new MimeMessage(session);
				message.setFrom(new InternetAddress(frmmail));
				message.setRecipients(Message.RecipientType.TO,InternetAddress.parse(toemail));
				message.setSubject("Password Reset");

				message.setText(""+otpemail+"");
					
				Transport.send(message);
			} catch (MessagingException e) {
				throw new RuntimeException(e);
			}
			}
			*/
// Email Configuration End		

			JSONObject jsonObject = new JSONObject(response);
			
			String Status = jsonObject.getString("Status");
			String Message = jsonObject.getString("Message");
			String ResID ="";
			if(!jsonObject.getString("Reset ID").isEmpty())
			{
				 ResID = jsonObject.getString("Reset ID");
			}
			
		
return Status+'|'+Message+'|'+ResID;	








}
}
