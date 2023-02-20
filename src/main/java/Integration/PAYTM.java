package Integration;



import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.io.*;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import CommonModel.*;
import Controls.Connections;

import java.util.TreeMap;
import com.paytm.pg.merchant.*;


public class PAYTM {

  public static void main(String[] args) throws Exception {
    System.out.println("True");
  }

  public static String PaymentCall(String Amount,String Type,String Prvnt,String PRCSID,String frm) {
    String digest = null;
    String DBSrc=null;
    String URL="";
	String ChecksumVal="";
	String ChecksumReq="";
	String keyString = "";
	String algo="";
	String Request="";
	String Response="";	
	String MID = "XXXXXXXXXXXXXXXXXXXXXXXX"; 
	String MercahntKey = "XXXXXXXXXXXXXXXX";
	String INDUSTRY_TYPE_ID = "XXXXXXXXXXXX";
	String CHANNLE_ID = "WAP";
	String WEBSITE = "XXXXXXXXXX";
	String CALLBACK_URL = "XXXXXXXXXXXXXX";
	String ORDER_ID = "";
	String CUST_ID = "";
	String CHANNEL_ID = "";
	String TXN_AMOUNT="";
	String EMAIL="";
	String MOBILE_NO="";
	String checkSum="";
	
	
	Connection con = DBConnection.getConnection(DBSrc);
	PreparedStatement proc_stmt = null;
	ResultSet rs = null;
    try {
   
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
		
	
			proc_stmt = con.prepareStatement("{ call LSW_SPAYTMGETCheckSum (?,?,?,?,?) }");		

		proc_stmt.setString(1, Amount);
		proc_stmt.setString(2, Type);
		proc_stmt.setString(3, Prvnt);
		proc_stmt.setString(4, PRCSID);
		proc_stmt.setString(5, frm);

		 rs = proc_stmt.executeQuery();
		
		while (rs.next()) {			
			
			MID 				=	rs.getString(1);
			ORDER_ID 			=	rs.getString(2);	
			CUST_ID 			=	rs.getString(3);
			INDUSTRY_TYPE_ID	=	rs.getString(4);
			CHANNEL_ID			=	rs.getString(5);
			TXN_AMOUNT			=	rs.getString(6);
			WEBSITE				=	rs.getString(7);
			EMAIL				=	rs.getString(8);
			MOBILE_NO			=	rs.getString(9);
			CALLBACK_URL		=	rs.getString(10);
			MercahntKey			=	rs.getString(11);
			URL 				=	rs.getString(13);
			
			
		}

		Connections.Call(proc_stmt,rs,con,"Commit");
		
		TreeMap<String,String> paramMap = new TreeMap<String,String>();
		paramMap.put("MID" , MID);
		paramMap.put("ORDER_ID" , ORDER_ID);
		paramMap.put("CUST_ID" , CUST_ID);
		paramMap.put("INDUSTRY_TYPE_ID" , INDUSTRY_TYPE_ID);
		paramMap.put("CHANNEL_ID" , CHANNLE_ID);
		paramMap.put("TXN_AMOUNT" , TXN_AMOUNT);
		paramMap.put("WEBSITE" , WEBSITE);
		paramMap.put("EMAIL" , EMAIL);
		paramMap.put("MOBILE_NO" , MOBILE_NO);
		paramMap.put("CALLBACK_URL" , CALLBACK_URL);
		
		try{
		checkSum =  CheckSumServiceHelper.getCheckSumServiceHelper().genrateCheckSum(MercahntKey, paramMap);
		paramMap.put("CHECKSUMHASH" , checkSum);
		
		System.out.println("Paytm Payload: "+ paramMap);
		
		}catch(Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
				
		
		return MID+'~'+ORDER_ID+'~'+CUST_ID+'~'+INDUSTRY_TYPE_ID+'~'+CHANNLE_ID+'~'
				+TXN_AMOUNT+'~'+WEBSITE+'~'+EMAIL+'~'+MOBILE_NO+'~'+CALLBACK_URL+'~'+checkSum+'~'+URL;
		
		
    }    
    catch (Exception e)
	{
		
		Connections.Call(proc_stmt,rs,con,"Rollback");		
		e.printStackTrace();
	}
			finally {		        
				Connections.Call(proc_stmt,rs,con,"Close");
		}		
    return Response;
  }
  
  public static String PaymentCallRes(String PGResponse,String CHECKSUMHASH) {
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
		PreparedStatement proc_stmt=null;
		ResultSet rs=null;
	    try {
	   
	    	
			// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			// Connection con =
			// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
			/*PreparedStatement proc_stmt;
		
				proc_stmt = con.prepareStatement("{ call SCF_SFEPBillDeskResCheckSum (?,?,?,?,?) }");
			

			proc_stmt.setString(1, PGResponse);
			proc_stmt.setString(2, CHECKSUMHASH);
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
		
			//ChecksumVal = HMACGen.hmacDigest(ChecksumReq, keyString, algo);
				*/				
			proc_stmt = con.prepareStatement("{ call LSW_SPAYTMRes (?,?,?,?,?) }");
		
		proc_stmt.setString(1, PGResponse);
		proc_stmt.setString(2, ChecksumReq);
		proc_stmt.setString(3, ChecksumVal);
		proc_stmt.setString(4, "");
		proc_stmt.setString(5, "");

		rs = proc_stmt.executeQuery();

		
		while (rs.next()) {
			
			
			Response =	rs.getString(1);	
			
		}	
	    	
	    	
		Connections.Call(proc_stmt,rs,con,"Commit");
	          
	          		 
	    }    
	    catch (Exception e)
		{
			
			Connections.Call(proc_stmt,rs,con,"Rollback");		
			e.printStackTrace();
		}
				finally {		        
					Connections.Call(proc_stmt,rs,con,"Close");
			}		
	    return Response;
	  }
}