package CommonModel;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.math.BigInteger;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.security.GeneralSecurityException;
import java.security.MessageDigest;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Properties;

import javax.crypto.Cipher;
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

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;





public class UI_PasswordUpdate {

	private String Username;
	private String Reqid;
	private String NewPassword;
	private String Code;
	private String DBSrc;

	 private static String ENCRYPT_ALGORITHM = "RSA";
	 private static String ENCRYPT_TRANSFORMATION = "RSA/ECB/PKCS1PADDING";
	 private static String ENCRYPT_PROVIDER = "BC";
	
	public void Username(String Username) {
		this.Username = Username;
	}
	public void Reqid(String Reqid) {
		this.Reqid = Reqid;
	}
	public void Code(String Code) {
		this.Code = Code;
	}
	public void NewPassword(String NewPassword) {
		this.NewPassword = NewPassword;
	}
	

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}
public String UI_PasswordUpdate() throws SQLException, JSONException{
	
	
	
	String response=null;		

		Connection con = DBConnection.getConnection(DBSrc);
		
		//NewPassword = encrypt(NewPassword);	
		//  System.out.println(NewPassword);
		//  NewPassword = decrypt(NewPassword);		

		try {
	        MessageDigest m = MessageDigest.getInstance("MD5");
	        byte[] data = NewPassword.getBytes();
	        m.update(data, 0, data.length);
	        BigInteger i = new BigInteger(1, m.digest());      
	        NewPassword=String.format("%1$032x", i);
	        System.out.println(String.format("%1$032x", i));
	    	}
		catch (Exception ex) {}  
		this.NewPassword = NewPassword;
		
		
		

		CallableStatement ps = con.prepareCall("{ call Lsw_sMobPwdReset(?,?,?,?,?) }");

				 		ps.setString(1,	Username);					 		
				 		ps.setString(2, Reqid);
				 		ps.setString(3,	Code);					 		
				 		ps.setString(4, NewPassword);
				 		ps.setString(5, "");
				 		
				 		//System.out.print(data.getXml1().toString().replaceAll("[\r\n]+", " "));
				 		//System.out.print(data.getXml2().toString().replaceAll("[\r\n]+", " "));
				 		
		ResultSet results = ps.executeQuery();		
								
		while (results.next()) {
			response = results.getString(1);						
		}
		
		JSONObject jsonObject = new JSONObject(response);

		String Status = jsonObject.getString("Status");
		String Message = jsonObject.getString("Message");
		
		con.close();
	
return Status+'|'+Message;



}




}


