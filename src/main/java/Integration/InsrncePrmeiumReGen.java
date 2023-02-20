package Integration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.concurrent.TimeUnit;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import Controls.Connections;
import Controls.InsuranceInterfaceCall;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import CommonModel.DBConnection;




public class InsrncePrmeiumReGen {
	
	
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

	
	public String InsrncePrmeiumReGen() throws AddressException, MessagingException 
	{
	
	ResultSet resultSet = null;
	PreparedStatement proc_stmt = null;
	ResultSet resultSet1 = null;
	PreparedStatement proc_stmt1 = null;
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
	String PdfUrl = "";
	String PrivatKey="";
	String Val= "";

	spname1="LSW_SGETPREMIUMREGEN";
	Connection con = DBConnection.getConnection(DBSrc);
	//proc_stmt proc_stmt = null;
	ResultSet results = null;	
	Connection con1 = DBConnection.getConnection(DBSrc);
	//proc_stmt proc_stmt = null;
	ResultSet results1 = null;	
		try {
						
			proc_stmt = con.prepareStatement("{ call " +spname1+ "(?,?,?,?,?,?,?) }");
				    	
	    	proc_stmt.setString(1, param1);
	    	proc_stmt.setString(2, param2);
	    	proc_stmt.setString(3, param3);  
	    	proc_stmt.setString(4, param4); 
	    	proc_stmt.setString(5, ""); // RESPONSE FROM 1 
	    	proc_stmt.setString(6, ""); // UNIQUEID FROM 1  
	    	proc_stmt.setString(7, "2"); // PRCSID

	    	results=proc_stmt.executeQuery(); 
	    		
	    	while (results.next()) {
	      		Type=results.getString("CONTENTTYPE");
	      		CntntURL=results.getString("URL");
	      		Strval=results.getString("JSON");
	      		UNIQUEID1=results.getString("UNIQUEID");   		
	      		PrivatKey=results.getString("PRIVATEKEY");   
			
	      	if(UNIQUEID1!="")
	      	{
	      	if(UNIQUEID1 != null)
	      	{
	      		System.out.println("Scheduler start");
	      	Intrresponse = InsuranceInterfaceCall.InsuranceInterfaceCallSrv(CntntURL, Strval,Type);
	    	
	      	String Reponse[] = Intrresponse.split("~");
	    	Intrresponse = Reponse[0];
	    	ErrorMsg = Reponse[1];
	    	FNLResp = Intrresponse;
	 
	    	
			TimeUnit.SECONDS.sleep(1);
			
		
			 JSONParser parse = new JSONParser(); 
			 JSONObject jobj = (JSONObject)parse.parse(Intrresponse);
			 if(jobj.containsKey("metaData"))
			 {
			 jobj =  (JSONObject) jobj.get("metaData");
			 if(jobj.containsKey("downloadPDFUrl"))
			 {
			  Val= jobj.get("downloadPDFUrl").toString();
			  PdfUrl = InsuranceDecrpytEncrypt.getDecryptByPrivateString(PrivatKey,Val);
			 }
			 }
			 

			
			
			
	       	proc_stmt1 = con1.prepareStatement("{ call " +spname1+ "(?,?,?,?,?,?,?) }");				    	
	    	proc_stmt1.setString(1, "");
	    	proc_stmt1.setString(2, "");
	    	proc_stmt1.setString(3, "");  
	    	proc_stmt1.setString(4, ""); 
	    	proc_stmt1.setString(5, Intrresponse+"|"+PdfUrl); // RESPONSE FROM 1 
	    	proc_stmt1.setString(6, UNIQUEID1); // UNIQUEID FROM 1  
	    	proc_stmt1.setString(7, "3"); // PRCSID

	    	results1=proc_stmt1.executeQuery(); 
	    		
	    	while (results1.next()) {
	    		FNLResp=results1.getString("RESULT");    		  		
	      	}
	      	 	
	    Connections.Call(proc_stmt1,results1,con1,"Commit");

		System.out.println("FNLResp"+FNLResp);
	      	}
	      	}
	      		      	
			}
	      	 	
	    Connections.Call(proc_stmt,results,con,"Commit");

	   // Intrresponse = InsuranceInterfaceCall.InsuranceInterfaceCallSrv(CntntURL, Strval,Type);
    	
			
		System.out.println("FNLResp"+FNLResp);
      
			
		}
		catch (Exception e) {

			e.printStackTrace();

		}
		 return FNLResp;
	}	
}
