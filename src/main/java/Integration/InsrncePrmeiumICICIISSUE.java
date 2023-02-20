package Integration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.concurrent.TimeUnit;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import Controls.Connections;
import Controls.ICICIInsuranceInterfaceCall;
import CommonModel.DBConnection;




public class InsrncePrmeiumICICIISSUE {
	
	
	private static String param1;
	private static String param2;
	private static String param3;
	private static String param4;
	private static String param5;
	private static String DBSrc;
	private static String spname1;
	private static String spname2;
	//private static String spname3;
	

    
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
	
	public void spname1(String spname1) {
		this.spname1 = spname1;
	}

	public void spname2(String spname2) {
		this.spname2 = spname2;
	}
	
	
	
	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	
	public String ICICInsrncePrmeium() throws AddressException, MessagingException 
	{
	
	ResultSet resultSet = null;
	PreparedStatement proc_stmt = null;
	String OutRst;
	String Result;
	String Strval ="";
	String CntntURL="";
	String Username="";
	String Password="";
	String customerid="";
	String accesscode="";
	String requestFormat="";
	String Type="";
	String UNIQUEID1=""; //1st API
	String Request1="";  //1st API
	String EndPoint1="";  //1st API
	String RespHead ="";   //1st API
			
    String UNIQUEID2=""; //2st API
	String Request2="";  //2st API
	String EndPoint2="";  //2st API
	
    String UNIQUEID3="";  //3st API
	String Request3="";   //3st API
	String EndPoint3="";  //3st API
	String ReceiptNo="";  //3st API
	String APISELECTION = "";
	String FNLResp= "";

	String ErrorMsg = "";
	String Intrresponse = "";
	String APIKEY="";
	JSONParser parse=null;
	JSONObject jobj=null;
	spname1="LSW_SGETICICIPREMIUMINPUTDTLS";
	Connection con = DBConnection.getConnection(DBSrc);
	//proc_stmt proc_stmt = null;
	ResultSet results = null;		
		try {
			
				   System.out.println("1 start");
						
			//Connection con = DBConnection.getConnection(DBSrc);
			proc_stmt = con.prepareStatement("{ call " + spname1+ "(?,?,?,?,?,?,?) }");
			
		
			proc_stmt.setString(1, param1);
			proc_stmt.setString(2, param2);
			proc_stmt.setString(3, param3);
			proc_stmt.setString(4, param4);
			proc_stmt.setString(5, param5);
			proc_stmt.setString(6, "");
			proc_stmt.setString(7, "3");
			
			
			results=proc_stmt.executeQuery();  
	      	while (results.next()) {
	      		Type=results.getString("CONTENTTYPE");
	      		CntntURL=results.getString("URL");
	      		Strval=results.getString("JSON");
	      		UNIQUEID1=results.getString("UNIQUEID");   		
	      	}
	      	Connections.Call(proc_stmt,results,con,"Commit");
	    	
	      	Intrresponse = ICICIInsuranceInterfaceCallISSUE.ICICIInsuranceInterfaceCallSrv(CntntURL, Strval,Type);
	    	
	      	String Reponse[] = Intrresponse.split("~");
	    	Intrresponse = Reponse[0];
	    	ErrorMsg = Reponse[1];
	    	FNLResp = Intrresponse;
	    
	     parse = new JSONParser(); 
		 jobj = (JSONObject)parse.parse(Intrresponse);
		 if(jobj.containsKey("policyNo"))
		 {
			 ErrorMsg="Success";
		      
			 	proc_stmt = con.prepareStatement("{ call " +spname1+ "(?,?,?,?,?,?,?) }");
		    	
		    	proc_stmt.setString(1, param1);
		    	proc_stmt.setString(2, param2);
		    	proc_stmt.setString(3, param3);  
		    	proc_stmt.setString(4, ErrorMsg); 
		    	proc_stmt.setString(5, Intrresponse); // RESPONSE FROM 1 
		    	proc_stmt.setString(6, UNIQUEID1); // UNIQUEID FROM 1  
		    	proc_stmt.setString(7, "4"); // PRCSID

		    	results=proc_stmt.executeQuery(); 
		    		
		    	while (results.next()) {
		    		Type=results.getString("Username");
		      		CntntURL=results.getString("URL");
		      		Strval=results.getString("Password");
		      		UNIQUEID1=results.getString("UNIQUEID");
		      		  		
		      	}
		      	 	
		    Connections.Call(proc_stmt,results,con,"Commit");

		    Intrresponse = ICICITokenGenrtn.ICICIInsuranceInterfaceCallSrv(CntntURL, Strval,Type);
	    	
	      	String Reponse1[] = Intrresponse.split("~");
	    	Intrresponse = Reponse1[0];
	    	ErrorMsg = Reponse1[1];
	    	FNLResp = Intrresponse;
	   		
	    	 parse = new JSONParser(); 
			 jobj = (JSONObject)parse.parse(Intrresponse);
			 if(jobj.containsKey("token"))
			 {
				 ErrorMsg="Success";
				  
				 	proc_stmt = con.prepareStatement("{ call " +spname1+ "(?,?,?,?,?,?,?) }");
			    	
			    	proc_stmt.setString(1, param1);
			    	proc_stmt.setString(2, param2);
			    	proc_stmt.setString(3, param3);  
			    	proc_stmt.setString(4, jobj.get("token").toString()); 
			    	proc_stmt.setString(5, Intrresponse); // RESPONSE FROM 1 
			    	proc_stmt.setString(6, UNIQUEID1); // UNIQUEID FROM 1  
			    	proc_stmt.setString(7, "5"); // PRCSID

			    	results=proc_stmt.executeQuery(); 
			    		
			    	while (results.next()) {
			    		Type=results.getString("Token");
			      		CntntURL=results.getString("URL");
			      		Strval=results.getString("JSON");
			      		UNIQUEID1=results.getString("UNIQUEID");
			      		  		
			      	}
			      	 	
			    Connections.Call(proc_stmt,results,con,"Commit");

			    Intrresponse = ICICIPDFInsuranceInterfaceCall.ICICIInsuranceInterfaceCallSrv(CntntURL, Strval,Type);
		    	
		      	String Reponse2[] = Intrresponse.split("~");
		    	Intrresponse = Reponse2[0];
		    	ErrorMsg = Reponse2[1];
		    	FNLResp = Intrresponse;
		    	
		    	 parse = new JSONParser(); 
				 jobj = (JSONObject)parse.parse(Intrresponse);
				 
				 if(jobj.containsKey("url"))
				 {
					 param3="Success";
				 }
				 else
				 {
					 param3="Fail";
				 }
				 
		    	proc_stmt = con.prepareStatement("{ call " +spname1+ "(?,?,?,?,?,?,?) }");
		    	
		    	proc_stmt.setString(1, param1);
		    	proc_stmt.setString(2, param2);
		    	proc_stmt.setString(3, param3);  
		    	proc_stmt.setString(4, jobj.get("url").toString()); 
		    	proc_stmt.setString(5, Intrresponse); // RESPONSE FROM 1 
		    	proc_stmt.setString(6, UNIQUEID1); // UNIQUEID FROM 1  
		    	proc_stmt.setString(7, "6"); // PRCSID

		    	results=proc_stmt.executeQuery(); 
		    		
		    	while (results.next()) {
		    		FNLResp=results.getString("Result");
		      		  		
		      	}
		    	
		    	Connections.Call(proc_stmt,results,con,"Commit");

		    	
				 
				 
			 }
			 else
			 {
				 ErrorMsg="Fail";

			       	proc_stmt = con.prepareStatement("{ call " +spname1+ "(?,?,?,?,?,?,?) }");
			    	
			    	proc_stmt.setString(1, param1);
			    	proc_stmt.setString(2, param2);
			    	proc_stmt.setString(3, param3);  
			    	proc_stmt.setString(4, ErrorMsg); 
			    	proc_stmt.setString(5, Intrresponse); // RESPONSE FROM 1 
			    	proc_stmt.setString(6, UNIQUEID1); // UNIQUEID FROM 1  
			    	proc_stmt.setString(7, "5"); // PRCSID

			    	results=proc_stmt.executeQuery(); 
			    		
			    	while (results.next()) {
			    		FNLResp=results.getString("Result");
			      		  		
			      	}
			    	
			    	Connections.Call(proc_stmt,results,con,"Commit");
				 
				 
			 }
			 
			 
		 }
		 
		 
		 
		 else
		 {
			 ErrorMsg="Fail";

		       	proc_stmt = con.prepareStatement("{ call " +spname1+ "(?,?,?,?,?,?,?) }");
		    	
		    	proc_stmt.setString(1, param1);
		    	proc_stmt.setString(2, param2);
		    	proc_stmt.setString(3, param3);  
		    	proc_stmt.setString(4, ErrorMsg); 
		    	proc_stmt.setString(5, Intrresponse); // RESPONSE FROM 1 
		    	proc_stmt.setString(6, UNIQUEID1); // UNIQUEID FROM 1  
		    	proc_stmt.setString(7, "4"); // PRCSID

		    	results=proc_stmt.executeQuery(); 
		    		
		    	while (results.next()) {
		    		FNLResp=results.getString("Result");
		      		  		
		      	}
		    	
		    	Connections.Call(proc_stmt,results,con,"Commit");

		 }
	    	
	    	
	    	
			
		}
		catch (Exception e) {

			e.printStackTrace();

		}
		 return FNLResp;
	}	
}
