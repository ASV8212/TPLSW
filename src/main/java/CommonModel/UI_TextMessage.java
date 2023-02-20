package CommonModel;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
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


public class UI_TextMessage {

	private String param1;
	private String param2;
	private String param3;
	private String param4;
	private String param5;
	private String DBSrc;
	private String spname;

	public void param1(String param1) {
		this.param1 = param1;
	}

	public void param2(String param2) {
		this.param2 = param2;
	}

	public void param3(String param3) {
		this.param3 = param3;
	}

	public void param4(String param4) {
		this.param4 = param4;
	}

	public void param5(String param5) {
		this.param5 = param5;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public void spname(String spname) {
		this.spname = spname;
	}
	
	
public String UI_TextMessage() throws SQLException, JSONException{
		
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
		String Status=null;
		
		
				try {
					Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
				} catch (ClassNotFoundException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
			
			//Connection con = DriverManager.getConnection("jdbc:sqlserver://14.192.17.66;databaseName=LSWCH;user=sa;password=encore123");
			Connection con = DBConnection.getConnection(DBSrc);

			PreparedStatement ps = con.prepareStatement("{ call " + spname	+ "(?,?,?,?,?) }");

					 		ps.setString(1,param1);					 		
					 		ps.setString(2,param2);					 		
					 		ps.setString(3,param3);
					 		ps.setString(4,param4);
					 		ps.setString(5,param5);
					 							 		
					 		
			ResultSet results = ps.executeQuery();		
									
			while (results.next()) {

				tomobile = results.getString(1);
				frommobile=results.getString(2);
				musername=results.getString(3);
				mpassword=results.getString(4);
				udh=results.getString(5);
				coding=results.getString(6);
				url=results.getString(7);
				otpsms=results.getString(8);
				

			}
			
// Mobile Configuration Start		
			
		if(tomobile != null && !tomobile.isEmpty())
		{
		URL url1 = null;
		String a=""+url+"username="+musername+"&password="+mpassword+"&to="+tomobile+"&udh="+udh+"&from="+frommobile+"&text="+otpsms+"&category=bulk";
		
		
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
			 Status="Success";
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
		
return Status;	


}
}
