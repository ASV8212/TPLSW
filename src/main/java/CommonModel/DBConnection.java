package CommonModel;

import java.io.ByteArrayInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;
import java.net.URL;
import java.sql.*;

import java.io.IOException;
import java.util.Date;
import java.util.Properties;

import java.util.Collection;
import java.util.Hashtable;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

public class DBConnection {

	public static Connection getConnection(String DBSrc) {

		Properties props = new Properties();
		FileInputStream fis = null;
		FileInputStream fis1 = null;
		Connection con = null;
		String Res="";
		String Profile = "";
		String DBSource="";
		String isJNDIConn="";	
		Context ctx = null;
		String providerURL="";
		String contextPort="";
		String lookupName="";
		
		
		 propV PropVal1 = new propV();
	
		try {
			Res = PropVal1.getPropValues();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		 
		String Reponse[] = Res.split("~");
		
		DBSource = Reponse[0];
		isJNDIConn = Reponse[1];
		providerURL = Reponse[2];
		contextPort = Reponse[3];
		lookupName = Reponse[4];
		
		
		if(isJNDIConn.equals("true"))
		{			
			
			Hashtable<String, String> ht = new Hashtable<String, String>();
			ht.put(Context.INITIAL_CONTEXT_FACTORY,
					"weblogic.jndi.WLInitialContextFactory");
			ht.put(Context.PROVIDER_URL,providerURL+":"+contextPort);
			
	
			try {
				ctx = new InitialContext(ht);
				javax.sql.DataSource ds = (javax.sql.DataSource) ctx
						.lookup(lookupName);
				
				con = ds.getConnection();
			} catch (NamingException e) {
				e.printStackTrace();
			} catch (SQLException e) {
				e.printStackTrace();
			}

		}else
			{
				
		// Reader inputStream = null;
		try {
			Properties prop = new Properties();

			//URL songPath = DBConnection.class.getResource("");
			//String pathArr[] = songPath.toString().split("file:/|/apache");
			
			
			//String pathArr[] = songPath.toString().split("file:/|/ISCF");
			
			// String Path1 = pathArr[1];
	         
			// InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream("/my.properties");

			// Path1 = ClassLoader.getSystemResourceAsStream("DBSource.properties");
			
	       //   fis = new FileInputStream("DBSource.properties");
			
			
			 
			String Path = DBSource;
			fis = new FileInputStream(Path + "/wflow/app_datasource.properties");

			if (fis != null) { 
				prop.load(fis);
				if (DBSrc == null) {
					Profile = prop.getProperty("currentProfile");
				} else {
					Profile = prop.getProperty(DBSrc);
				}
				fis.close();
			} else {
				throw new FileNotFoundException("property file '" + fis
						+ "' not found in the classpath");
			}
			// get the property value and print it out

			fis1 = new FileInputStream(Path + "/wflow/app_datasource-"
					+ Profile + ".properties");
			props.load(fis1);
			// String s = "DatabaseName\\";
			String Driver = props.getProperty("workflowDriver");
			String Url = props.getProperty("workflowUrl");

			String User = props.getProperty("workflowUser");
			String Password = props.getProperty("workflowPassword");
			// String
			// Url="jdbc:sqlserver://ETD033\\RAMESH;DatabaseName=LSWRH;SelectMethod=cursor";
			String UrlArray[] = Url.split("SelectMethod=cursor");

			Url = UrlArray[0];

			fis1.close();

			Class.forName(Driver);
			// con =
			// DriverManager.getConnection(Url+";user="+User+";password="+Password);

			// Class.forName(Driver);
			// con =
			// DriverManager.getConnection("jdbc:sqlserver://192.168.168.14:1433;databaseName=ThemeProLO;user=sa;password=encore123");
			con=DriverManager.getConnection(Url,User,Password);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			}
		return con;
	}
	
	
	public static class propV
	{
	public String getPropValues() throws IOException {
		
		String propFileName = "DBSource.properties";
		String DBSource="";
		
		String JNDIConn="";
		String providerURL="";
		String contextPort="";
		String lookupName="";
		String FileName="";
		
		InputStream inputStream;
		Properties prop = new Properties();
		FileName=System.getProperty("catalina.base");
		
		FileName=FileName+"/conf/"+propFileName;
		//System.out.println(FileName);		
		inputStream = new FileInputStream(FileName);
		
		//inputStream=new ByteArrayInputStream(FileName.getBytes());
		 //inputStream = getClass().getClassLoader().getResourceAsStream(propFileName);
		 
		  if (inputStream != null) {
	            prop.load(inputStream);                
	            DBSource = prop.getProperty("DBSource");	          
	            JNDIConn = prop.getProperty("JNDIConn");
	            providerURL = prop.getProperty("providerURL");
	            contextPort = prop.getProperty("contextPort");
	            lookupName = prop.getProperty("lookupName");
	              
	            inputStream.close();
	          } else {
	            throw new java.io.FileNotFoundException("property file '" + inputStream + 
	              "' not found in the classpath");
	          }			
		 
		 
		return DBSource+"~"+JNDIConn+"~"+providerURL+"~"+contextPort+"~"+lookupName;	

	}

	}
	
	public static void closeConnection(Connection conc, PreparedStatement prsc, ResultSet rsc) throws Exception {

		try {
		if (rsc != null) {
		rsc.close();
		}
		if (prsc != null) {
		prsc.close();
		}
		if (conc != null) {
		conc.close();
		}

		} catch (SQLException exc) {
		exc.printStackTrace();
		}
		}
}

