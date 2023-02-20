package CommonModel;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;





import org.codehaus.jettison.json.JSONException;

import CommonModel.FCM;


public class UI_PushNotify {

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
	
	
public String UI_PushNotify() throws SQLException, JSONException{
		
		//cache.put(user.getName(), user);
	String str=null;
	String Json="";
	String server_key="";
	String URL="";
	String Status="";
		
		
				
				
					try {
						Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			//Connection con = DriverManager.getConnection("jdbc:sqlserver://14.192.17.66;databaseName=LSWCH;user=sa;password=encore123");
			Connection con = DBConnection.getConnection(DBSrc);

			CallableStatement ps = con.prepareCall("{ call"+spname+"(?,?,?,?,?)}");

					 		ps.setString(1,param1);					 		
					 		ps.setString(2,param2);					 		
					 		ps.setString(3,param3);
					 		ps.setString(4,param4);
					 		ps.setString(4,param5);
					 							 		
					 		
					 		
							ResultSet results = ps.executeQuery();
							while (results.next()) {
								Json = results.getString(1);
								server_key = results.getString(2);
								URL = results.getString(3);
							}
							
							str=FCM.send_FCM_Notification(Json,server_key,URL);
							Status="Success";

					}
					catch (ClassNotFoundException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
					
					return Status; 



}
}
