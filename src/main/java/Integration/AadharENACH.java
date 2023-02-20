package Integration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.net.HttpURLConnection;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URL;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;
import CommonModel.DBConnection;


public class AadharENACH {
	
	public String EnachBank(String Param1,String Param2,String SPName) {
		
		    String DBSrc=null;    
		    ArrayList<String> Data=new ArrayList<String>();
		    String response= "";
		    String Requst = "";
		    String Token = "";
		    String UserID = "";
		    String IFSC = "";
		    String UID = "";
		    String STATUS = "";
		    String URL = "";
		    String OP = "";
		    String Output= "";
		    
		    Connection con = DBConnection.getConnection(DBSrc);
			PreparedStatement proc_stmt = null;
			ResultSet rs = null;
			
			PreparedStatement proc_stmt1 = null;
			ResultSet rs1 = null;
			
			try {
				   
				proc_stmt = con.prepareStatement("{ call "+SPName+" (?,?,?,?,?) }");		

				proc_stmt.setString(1, Param1); // HitType
				proc_stmt.setString(2, Param2); // PRCSID
				proc_stmt.setString(3, ""); // ACCNO
				proc_stmt.setString(4, ""); 
				proc_stmt.setString(5, "");  

				rs = proc_stmt.executeQuery();
				
				ResultSetMetaData rsmd = rs.getMetaData();
				int colCount = rsmd.getColumnCount();
				
			while (rs.next()) {
				   Requst  = rs.getString(1);
				   Token  = rs.getString(2);
				   UserID = rs.getString(3);
				   IFSC  = rs.getString(4);
				   UID  = rs.getString(5);
				   STATUS = rs.getString(6);
				   URL = rs.getString(7);
				}
			
			Output= new AadharENACH().InterfaceAAENACHBnkCall(URL,Token,UserID);
			
					System.out.println(Output);
					
					proc_stmt1 = con.prepareStatement("{ call "+SPName+" (?,?,?,?,?) }");		

					proc_stmt1.setString(1, "getBankeNachOutput"); // HitType
					proc_stmt1.setString(2, Param2); //PRCSID
					proc_stmt1.setString(3, Output); 
					proc_stmt1.setString(4, UID); 
					proc_stmt1.setString(5, "");  

					rs1 = proc_stmt1.executeQuery();
					
					ResultSetMetaData rsmd1 = rs1.getMetaData();
					int colCount1 = rsmd1.getColumnCount();
					
				while (rs.next()) {
					
					OP  = rs.getString(1);
				}
			
			}
			catch (Exception e)
			{
				e.printStackTrace();
			}
		
		return Output;	
	}
	
	public String AadharEnachIntg(String Param1,String Param2,String SPName) {
		
	    String DBSrc=null;    
	    ArrayList<String> Data=new ArrayList<String>();
	    String response= "";
	    String Requst = "";
	    String Token = "";
	    String UserID = "";
	    String IFSC = "";
	    String UID = "";
	    String STATUS = "";
	    String URL = "";
	    String OP = "";
	    String Output= "";
	    
	    Connection con = DBConnection.getConnection(DBSrc);
		PreparedStatement proc_stmt = null;
		ResultSet rs = null;
		
		PreparedStatement proc_stmt1 = null;
		ResultSet rs1 = null;
		
		try {
			   
			proc_stmt = con.prepareStatement("{ call "+SPName+" (?,?,?,?,?) }");		

			proc_stmt.setString(1, Param1); // HitType
			proc_stmt.setString(2, Param2); //PRCSID
			proc_stmt.setString(3, ""); 
			proc_stmt.setString(4, ""); 
			proc_stmt.setString(5, "");  

			rs = proc_stmt.executeQuery();
			
			ResultSetMetaData rsmd = rs.getMetaData();
			int colCount = rsmd.getColumnCount();
			
		while (rs.next()) {
			   Requst  = rs.getString(1);
			   Token  = rs.getString(2);
			   UserID = rs.getString(3);
			   UID  = rs.getString(4);
			   STATUS = rs.getString(5);
			   URL = rs.getString(6);
			}
		
		Output= new AadharENACH().InterfaceAAENACHCall(URL,Requst,Token,UserID);
		
				System.out.println(Output);
				
				proc_stmt1 = con.prepareStatement("{ call "+SPName+" (?,?,?,?,?) }");		

				proc_stmt1.setString(1, "AadharEnachOutput"); // HitType
				proc_stmt1.setString(2, Param2); //PRCSID
				proc_stmt1.setString(3, Output); 
				proc_stmt1.setString(4, UID); 
				proc_stmt1.setString(5, "");  

				rs1 = proc_stmt1.executeQuery();
				
				ResultSetMetaData rsmd1 = rs1.getMetaData();
				int colCount1 = rsmd1.getColumnCount();
				
			while (rs.next()) {
				
				OP  = rs.getString(1);
			}
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	
	return Output+'~'+UID;	
}
	
	public static String InterfaceAAENACHCall(String URL,String Requst,String Token,String UserID) 
	{

		String Status=null;
		String Message=null;
			try
			{

	OkHttpClient client = new OkHttpClient();
			MediaType mediaType = MediaType.parse("application/json");
			RequestBody body = RequestBody.create(mediaType,Requst);
			Request request = new Request.Builder()
			  .url(URL)
			  .method("POST", body)
			  .addHeader("Authorization", Token)
			  .addHeader("userID", UserID)
			  .addHeader("Content-Type", "application/json")
			  .build();
			Response response = client.newCall(request).execute();
			System.out.println("Response Code "+ response.code());

			if(response.code()==200)
		      {
		    	  Status="Success";

		    	  Message= response.body().string();
		      }
		      else
		      {
		    	  Status="Error";
		    	  Message= response.body().string();
		      }
					

			System.out.println("Response "+Message);
				}catch (Exception e)
				{
			    	e.printStackTrace();
			        Status = e.toString();
			        Message = "Exception";
			        System.out.println("Response: " + Status);
			        return Status+"~"+Message;
	}
			return Status+"~"+Message;
	}
	
	public static String InterfaceAAENACHBnkCall(String URL,String Token,String UserID) 
	{

		String Status=null;
		String Message=null;
			try
			{

	OkHttpClient client = new OkHttpClient();
			
			Request request = new Request.Builder()
			  .url(URL)
			  .method("GET", null)
			  .addHeader("Authorization", Token)
			  .addHeader("userID", UserID)
			  .addHeader("Content-Type", "application/json")
			  .build();
			Response response = client.newCall(request).execute();
			System.out.println("Response Code "+ response.code());

			if(response.code()==200)
		      {
		    	  Status="Success";

		    	  Message= response.body().string();
		      }
		      else
		      {
		    	  Status="Error";
		    	  Message= response.body().string();
		      }
				
			System.out.println("Response "+Message);
				}catch (Exception e)
				{
			    	e.printStackTrace();
			        Status = e.toString();
			        Message = "Exception";
			        System.out.println("Response: " + Status);
			        return Status+"~"+Message;
	}
			return Status+"~"+Message;
	}
	
}
