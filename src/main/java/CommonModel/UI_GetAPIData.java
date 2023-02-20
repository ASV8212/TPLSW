package CommonModel;

import java.io.*;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.http.*;

import org.springframework.stereotype.Controller;
public class UI_GetAPIData {
	
	public String Param1;
	public String Param2;
	public String Param3;
	public String Param4;
	public String Param5;
	//public String reqxml;
	//public String apitype;
	//public String processId;
	private String DBSrc;

	public void Param1(String Param1) {
		this.Param1 = Param1;
	}
	
	public void Param2(String Param2) {
		this.Param2 = Param2;
	}
	
	public void Param3(String Param3) {
		this.Param3 = Param3;
	}
	public void Param4(String Param4) {
		this.Param4 = Param4;
	}
	
	public void Param5(String Param5) {
		this.Param5 = Param5;
	}
	
	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}
	
   public String UI_GetAPIData1() throws IOException {
		// private String strResult;

		// ArrayList columnNames = new ArrayList();
		// ArrayList data = new ArrayList();

	    String str = null;
	    String LeadId = "";
	    String DocNo = "";
	    String url = "";
	    
	  //  JSONObject obj = new JSONObject(JSONval);
	    
	   // String Param1= new String(Param1);
	 //   String Param2= new String(Param2);
	 //   String Param3=new String(Param3);
	 //   String Param4= new String(Param4);
	 //   String Param5=new String(Param5);
	    
	    String USERNAME = "";
	    String PASSWORD = "";
	    String URL = "";
	    String UNIQID = "";
	    String JSON = "";
	    String REQXML = "";
	    String CODE = "";
	    String REQJSON = "";
		
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
	
	    try {
	        Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
	        
	        Connection con = DBConnection.getConnection(DBSrc);
	        
	        CallableStatement ps = con.prepareCall("{call LSW_SUMANGDATASETLS(?,?,?,?,?) }");
	        
	        ps.setString(1, Param1);
	        ps.setString(2, "");
	        ps.setString(3, "");
	        ps.setString(4, "");
	        ps.setString(5, "");
	        ResultSet results = ps.executeQuery();
	        ResultSetMetaData rsmd = results.getMetaData();
	        int colCount = rsmd.getColumnCount();
	        
	        while (results.next()) {
	        	USERNAME = results.getString(1);
	        	PASSWORD = results.getString(2);
	        	URL = results.getString(3);
	        	UNIQID = results.getString(4);
	        } 

	        
	        CallableStatement ps1 = con.prepareCall("{call LSW_SGETAPIREQRES(?,?,?,?,?) }");
	        
	        ps1.setString(1, "1");
	        ps1.setString(2, "");
	        ps1.setString(3, "");
	        ps1.setString(4, "");
	        ps1.setString(5, "");
	        ResultSet results1 = ps1.executeQuery();
	        ResultSetMetaData rsmd1 = results1.getMetaData();
	        int colCount1 = rsmd1.getColumnCount();

	        
	        while (results1.next()) {
	        	REQXML = results1.getString(1);
	        	REQJSON = results1.getString(2);
	        	CODE = results1.getString(3);
	        } 
           
      CallableStatement ps2 = con.prepareCall("{call LSW_SUMANGDATASETLS(?,?,?,?,?) }");
	        
	        ps2.setString(1, "2");
	        ps2.setString(2, REQXML);
	        ps2.setString(3, REQJSON);
	        ps2.setString(4, CODE);
	        ps2.setString(5, UNIQID);
	        ResultSet results2 = ps2.executeQuery();
	        ResultSetMetaData rsmd2 = results.getMetaData();
	        int colCount2 = rsmd2.getColumnCount();
	        
	        while (results2.next()) {
	        	USERNAME = results2.getString(1);
	        	PASSWORD = results2.getString(2);
	        	URL = results2.getString(3);
	        	UNIQID = results2.getString(4);
	        	JSON = results2.getString(5);
	        } 
	        
        CallableStatement ps3 = con.prepareCall("{call LSW_SGETAPIREQRES(?,?,?,?,?) }");
	        
	        ps3.setString(1, "2");
	        ps3.setString(2, "");
	        ps3.setString(3, "");
	        ps3.setString(4, "");
	        ps3.setString(5, "");
	        ResultSet results3 = ps3.executeQuery();
	        ResultSetMetaData rsmd3 = results1.getMetaData();
	        int colCount3 = rsmd3.getColumnCount();

	        
	        while (results3.next()) {
	        	REQXML = results3.getString(1);
	        	REQJSON = results3.getString(2);
	        	CODE = results3.getString(3);
	        } 
	        
 CallableStatement ps4 = con.prepareCall("{call LSW_SUMANGDATASETLS(?,?,?,?,?) }");
	        
	        ps4.setString(1, "3");
	        ps4.setString(2, REQXML);
	        ps4.setString(3, REQJSON);
	        ps4.setString(4, CODE);
	        ps4.setString(5, UNIQID);
	        ResultSet results4 = ps4.executeQuery();
	        ResultSetMetaData rsmd4 = results4.getMetaData();
	        int colCount4 = rsmd4.getColumnCount();
	        
	        while (results4.next()) {
	        	USERNAME = results4.getString(1);
	        	PASSWORD = results4.getString(2);
	        	URL = results4.getString(3);
	        	UNIQID = results4.getString(4);
	        	JSON = results4.getString(5);
	        } 
	      }
	      catch (ClassNotFoundException e) {
	        
	        e.printStackTrace();
	      } catch (SQLException e) {
	        
	        e.printStackTrace();
	      } 
	  		// END -- Enable in future
	      return "Success";
	  	}

}
