package CommonModel;



import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.io.*;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.http.*;


public class PaymentGW {

  public static void main(String[] args) throws Exception {
    System.out.println("True");
  }

  public static String PaymentCall(String UniqueID,String Type,String Prvnt) {
    String digest = null;
    String DBSrc=null;
    String URL="";
	String ChecksumVal="";
	String ChecksumReq="";
	String keyString = "";
	String algo="";
	String Request="";
	String Response="";
	Connection con = DBConnection.getConnection(DBSrc);
    try {
   
    	
    	
    	
    	

		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
		PreparedStatement proc_stmt;
	
			proc_stmt = con.prepareStatement("{ call SCF_SFEPBillDeskCheckSum (?,?,?,?,?) }");
		

		proc_stmt.setString(1, UniqueID);
		proc_stmt.setString(2, Type);
		proc_stmt.setString(3, Prvnt);
		proc_stmt.setString(4, "");
		proc_stmt.setString(5, "");

		ResultSet rs = proc_stmt.executeQuery();

		ResultSetMetaData rsmd = rs.getMetaData();
		int colCount = rsmd.getColumnCount();

		while (rs.next()) {
			
			
			ChecksumReq =	rs.getString(1);
			keyString =	rs.getString(2);	
			algo =	rs.getString(3);	
			
		}

		if (!keyString.equals("") && !ChecksumReq.equals(""))
		{
	
		ChecksumVal = HMACGen.hmacDigest(ChecksumReq, keyString, algo);
			
		proc_stmt = con.prepareStatement("{ call SCF_SFEPBillDeskReq (?,?,?,?,?) }");
	
	proc_stmt.setString(1, UniqueID);
	proc_stmt.setString(2, Type);
	proc_stmt.setString(3, ChecksumVal);
	proc_stmt.setString(4, Prvnt);
	proc_stmt.setString(5, "");

	rs = proc_stmt.executeQuery();

	rsmd = rs.getMetaData();
	colCount = rsmd.getColumnCount();

	while (rs.next()) {
		
		
		Response =	rs.getString(1);	
		
	}	
    	
    	
        con.close();  
          
          
	  System.out.println("The checksum is "+digest);
		}
		else
		{
			Response = "Invalid Request";
		}
    }    
    catch (SQLException e) {
		// TODO Auto-generated catch block
    	try {
			con.close();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		e.printStackTrace();
	}
    catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
    return Response;
  }
  
  public static String PaymentCallRes(String PGResponse,String Prvnt) {
	    String digest = null;
	    String DBSrc=null;
	    String URL="";
		String ChecksumVal="";
		String ChecksumReq="";
		String keyString = "";
		String algo="";
		String Request="";
		String Response="";
		Connection con = DBConnection.getConnection(DBSrc);
	    try {
	   
	    	
			// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			// Connection con =
			// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
			PreparedStatement proc_stmt;
		
				proc_stmt = con.prepareStatement("{ call SCF_SFEPBillDeskResCheckSum (?,?,?,?,?) }");
			

			proc_stmt.setString(1, PGResponse);
			proc_stmt.setString(2, Prvnt);
			proc_stmt.setString(3, "");
			proc_stmt.setString(4, "");
			proc_stmt.setString(5, "");

			ResultSet rs = proc_stmt.executeQuery();

			ResultSetMetaData rsmd = rs.getMetaData();
			int colCount = rsmd.getColumnCount();

			while (rs.next()) {				
				
				ChecksumReq =	rs.getString(1);
				keyString =	rs.getString(2);	
				algo =	rs.getString(3);	
				
			}

			//if (!keyString.equals("") && !ChecksumReq.equals(""))
			//{
		
			ChecksumVal = HMACGen.hmacDigest(ChecksumReq, keyString, algo);
								
			proc_stmt = con.prepareStatement("{ call SCF_SFEPBillDeskRes (?,?,?,?,?) }");
		
		proc_stmt.setString(1, PGResponse);
		proc_stmt.setString(2, ChecksumReq);
		proc_stmt.setString(3, ChecksumVal);
		proc_stmt.setString(4, Prvnt);
		proc_stmt.setString(5, "");

		rs = proc_stmt.executeQuery();

		rsmd = rs.getMetaData();
		colCount = rsmd.getColumnCount();

		while (rs.next()) {
			
			
			Response =	rs.getString(1);	
			
		}	
	    	
	    	
	        con.close();  
	          
	          
		  System.out.println("The checksum is "+digest);
			//}
			//else
			//{
				//Response = "Invalid Response";
		//	}
	    }    
	    catch (SQLException e) {
			// TODO Auto-generated catch block
	    	try {
				con.close();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			e.printStackTrace();
		}
	    catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    return Response;
	  }
  
  
}