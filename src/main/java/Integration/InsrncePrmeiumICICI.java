package Integration;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import Controls.Connections;
import Controls.ICICIInsuranceInterfaceCall;
import sun.misc.BASE64Decoder;
import CommonModel.DBConnection;




public class InsrncePrmeiumICICI {
	
	
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

	spname1="LSW_SGETICICIPREMIUMINPUTDTLS";
	Connection con = DBConnection.getConnection(DBSrc);
	//proc_stmt proc_stmt = null;
	ResultSet results = null;		
		try {
		
			
			if(!param5.equals("3"))
			{		
				   System.out.println("1 start");
						
			//Connection con = DBConnection.getConnection(DBSrc);
			proc_stmt = con.prepareStatement("{ call " + spname1+ "(?,?,?,?,?,?,?) }");
			
		
			proc_stmt.setString(1, param1);
			proc_stmt.setString(2, param2);
			proc_stmt.setString(3, param3);
			proc_stmt.setString(4, param4);
			proc_stmt.setString(5, param5);
			proc_stmt.setString(6, "");
			proc_stmt.setString(7, "1");
			
			
			results=proc_stmt.executeQuery();  
	      	while (results.next()) {
	      		CntntURL=results.getString("URL");
	      		Strval=results.getString("JSON");
	      		UNIQUEID1=results.getString("UNIQUEID");
	      		Type=results.getString("CONTENTTYPE");
	      		
	      	}
	      	Connections.Call(proc_stmt,results,con,"Commit");
	    	
	      	Intrresponse = ICICIInsuranceInterfaceCall.ICICIInsuranceInterfaceCallSrv(CntntURL, Strval,Type);
	    	
	      	String Reponse[] = Intrresponse.split("~");
	    	Intrresponse = Reponse[0];
	    	ErrorMsg = Reponse[1];
	    	FNLResp = Intrresponse.replace("&lt;", "<");
	    	FNLResp = FNLResp.replace("&gt;", ">");
	    	//System.out.println("1 End");
	    	   
			//System.out.println("Intrresponse"+Intrresponse);
			//System.out.println("UNIQUEID1"+UNIQUEID1);

			TimeUnit.SECONDS.sleep(1);
			//System.out.println("2 start");
			
			
			proc_stmt = con.prepareStatement("{ call " +spname1+ "(?,?,?,?,?,?,?) }");
	    	
	    	proc_stmt.setString(1, param1);
	    	proc_stmt.setString(2, param2);
	    	proc_stmt.setString(3, param3);  
	    	proc_stmt.setString(4, ErrorMsg); 
	    	proc_stmt.setString(5, Intrresponse); // RESPONSE FROM 1 
	    	proc_stmt.setString(6, UNIQUEID1); // UNIQUEID FROM 1  
	    	proc_stmt.setString(7, "2"); // PRCSID

	    	results=proc_stmt.executeQuery(); 
	    		
	    	while (results.next()) {
	    		FNLResp=results.getString("Result");    		  		
	      	}
	      	 	
	    Connections.Call(proc_stmt,results,con,"Commit");
			
		}	
			
			
			
			if(param5.equals("3"))
			{
	       	proc_stmt = con.prepareStatement("{ call " +spname1+ "(?,?,?,?,?,?,?) }");
				    	
	    	proc_stmt.setString(1, param1);
	    	proc_stmt.setString(2, param2);
	    	proc_stmt.setString(3, param3);  
	    	proc_stmt.setString(4, param4); 
	    	proc_stmt.setString(5, ""); // RESPONSE FROM 1 
	    	proc_stmt.setString(6, ""); // UNIQUEID FROM 1  
	    	proc_stmt.setString(7, "3"); // PRCSID

	    	results=proc_stmt.executeQuery(); 
	    		
	    	while (results.next()) {
	    		CntntURL=results.getString("URL");
	      		Strval=results.getString("JSON");
	      		APIKEY=results.getString("Key");
	      		UNIQUEID1=results.getString("UNIQUEID");
	      		Type=results.getString("CONTENTTYPE");
	      		  		
	      	}
	      	 	
	    Connections.Call(proc_stmt,results,con,"Commit");

	   Intrresponse = ICICIInsuranceInterfaceCall.ICICIInsuranceInterfaceCallSrvGETPDF(CntntURL, Strval,Type,APIKEY);
    	
	   
	   String Reponse1[] = Intrresponse.split("~");
   	Intrresponse = Reponse1[0];
   	ErrorMsg = Reponse1[1];
   	JSONParser parser = new JSONParser(); 
   	JSONObject json = (JSONObject) parser.parse(Intrresponse);
   	byte[] PDFURL= json.get("bytePdf").toString().getBytes();
   	
   	String s = new String(PDFURL);
   	
   	
   	
    BASE64Decoder decoder = new BASE64Decoder();
    byte[] decodedBytes = decoder.decodeBuffer(s);


    
    DBConnection.class.getResource("");
	
    String propFileName = "DBSource.properties";
			String AttchURL="";
			
			InputStream inputStream;
			Properties prop = new Properties();
			 inputStream = getClass().getClassLoader().getResourceAsStream(propFileName);
			 String FileName="";
				FileName=System.getProperty("catalina.base");
				FileName=FileName+"/conf/"+propFileName;
				//System.out.println(FileName);		
				inputStream = new FileInputStream(FileName);
				
				 
				  if (inputStream != null) {
			            prop.load(inputStream);                
			            AttchURL = prop.getProperty("AttchURL");	          
				  }
			 
			 
			 
			String Appno=  param1;
			String Cusid=  param2;
			String DocName=  "ICICIPDF_"+Appno+"_"+Cusid;
			String url1="";
				
			 
	        Path sFile2path = Paths.get(String.valueOf(AttchURL) + "Attachments" + "/ICICI_INSURANCE/" + Appno + "/" + Cusid + "/", new String[0]);
	        Files.createDirectories(sFile2path);
	        
	        String uploadFile = String.valueOf(AttchURL) + "Attachments" + "/ICICI_INSURANCE/" + Appno + "/" + Cusid + "/" + DocName + ".pdf";

	        new File(uploadFile);
	        url1 = "/Attachments/ICICI_INSURANCE/" + Appno + "/" + Cusid + "/" + DocName + ".pdf";
	        url1 = url1.replace("/", "\\");
        
	        FileOutputStream file = new FileOutputStream(uploadFile);
	        file.write(decodedBytes);
	        file.close();
	        
    
	proc_stmt = con.prepareStatement("{ call " +spname1+ "(?,?,?,?,?,?,?) }");
	
	proc_stmt.setString(1, param1);
	proc_stmt.setString(2, param2);
	proc_stmt.setString(3, ErrorMsg);  
	proc_stmt.setString(4, Intrresponse); 
	proc_stmt.setString(5, url1); // RESPONSE FROM 1 
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
