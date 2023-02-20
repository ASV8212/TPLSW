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
import Controls.InsuranceInterfaceCall;
import Controls.MSInsuranceInterfaceCall;
import CommonModel.DBConnection;




public class MSInsrncePrmeium {
	
	
	private static String param1;
	private static String param2;
	private static String param3;
	private static String param4;
	private static String param5;
	private static String param6;
	private static String param7;
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
	
	public void param6(String param6) {
		this.param6 = param6;
	}
	
	public void param7(String param7) {
		this.param7 = param7;
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

	
	public String MSInsrncePrmeium() throws AddressException, MessagingException 
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
	String TokenKey = "";
	Connection con = DBConnection.getConnection(DBSrc);
	ResultSet results = null;		
		try {
		
			Intrresponse = MSInsrnceTokenGen.MSINSTOKENGEN(param7);
			JSONParser parser = new JSONParser(); 
		   	JSONObject json = (JSONObject) parser.parse(Intrresponse);
		   	TokenKey=json.get("TokenKey").toString();
			
		  if(json.get("ErrorMSG").toString().equals("Success"))
		  {
			  
			  if(param7.equals("9"))
              {

                    proc_stmt = con.prepareStatement("{ call " + spname2+ "(?,?,?,?,?,?,?) }");
                    proc_stmt.setString(1, param1);
                    proc_stmt.setString(2, param2);
                    proc_stmt.setString(3, param3);
                    proc_stmt.setString(4, param4);
                    proc_stmt.setString(5, param5);
                    proc_stmt.setString(6, "");
                    proc_stmt.setString(7, "9");

                    results=proc_stmt.executeQuery(); 

                    while (results.next()) {
                          Type=results.getString("CONTENTTYPE");
                          CntntURL=results.getString("URL");
                          Strval=results.getString("JSON");
                          UNIQUEID1=results.getString("UNIQUEID");             
                    }

                    Connections.Call(proc_stmt,results,con,"Commit");

                    Intrresponse = MSInsuranceInterfaceCall.MSInsuranceInterfaceCallSrv(CntntURL, Strval,Type,TokenKey);

                    String Reponse[] = Intrresponse.split("~");

              Intrresponse = Reponse[0];

              ErrorMsg = Reponse[1];

              FNLResp = Intrresponse;

              System.out.println("2 End");

                 

                    TimeUnit.SECONDS.sleep(1);

                    System.out.println("2 start");

                    proc_stmt = con.prepareStatement("{ call " +spname2+ "(?,?,?,?,?,?,?) }");

                               

              proc_stmt.setString(1, param1);

              proc_stmt.setString(2, param2);

              proc_stmt.setString(3, param3); 

              proc_stmt.setString(4, param4);

              proc_stmt.setString(5, Intrresponse); // RESPONSE FROM 1

              proc_stmt.setString(6, UNIQUEID1); // UNIQUEID FROM 1 

              proc_stmt.setString(7, "10"); // PRCSID



              results=proc_stmt.executeQuery();

                   

              while (results.next()) {

                    param7=results.getString("param7");

                    }

                         

            Connections.Call(proc_stmt,results,con,"Commit");    

              System.out.println("FNLResp"+FNLResp);

                }

              //PINCODE STATUS END 
			  
		if(param7.equals("1"))
		{
	   		proc_stmt = con.prepareStatement("{ call " + spname2+ "(?,?,?,?,?,?,?) }");
		
			proc_stmt.setString(1, param1);
			proc_stmt.setString(2, param2);
			proc_stmt.setString(3, param3);
			proc_stmt.setString(4, param4);
			proc_stmt.setString(5, param5);
			proc_stmt.setString(6, "");
			proc_stmt.setString(7, param7);
			
			results=proc_stmt.executeQuery();  
	      	while (results.next()) {
	      		Type=results.getString("CONTENTTYPE");
	      		CntntURL=results.getString("URL");
	      		Strval=results.getString("JSON");
	      		UNIQUEID1=results.getString("UNIQUEID");   		
	      	}
	      	Connections.Call(proc_stmt,results,con,"Commit");
	    	
	      	Intrresponse = MSInsuranceInterfaceCall.MSInsuranceInterfaceCallSrv(CntntURL, Strval,Type,TokenKey);
	    	
	      	String Reponse[] = Intrresponse.split("~");
	    	Intrresponse = Reponse[0];
	    	ErrorMsg = Reponse[1];
	    	FNLResp = Intrresponse;
	    	System.out.println("1 End");
	    	   
			//TimeUnit.SECONDS.sleep(1);
			System.out.println("2 start");
	       	proc_stmt = con.prepareStatement("{ call " +spname2+ "(?,?,?,?,?,?,?) }");
				    	
	    	proc_stmt.setString(1, param1);
	    	proc_stmt.setString(2, param2);
	    	proc_stmt.setString(3, param3);  
	    	proc_stmt.setString(4, ErrorMsg); 
	    	proc_stmt.setString(5, Intrresponse); // RESPONSE FROM 1 
	    	proc_stmt.setString(6, UNIQUEID1); // UNIQUEID FROM 1  
	    	proc_stmt.setString(7, "2"); // PRCSID

	    	results=proc_stmt.executeQuery(); 
	    		
	    	while (results.next()) {
	    		FNLResp=results.getString("PRAMOUNT");
	    		param7=results.getString("param7");
	      	}
	      	 	
	    Connections.Call(proc_stmt,results,con,"Commit");	
		System.out.println("FNLResp"+FNLResp);
		  }
		  }

		//SAVE PROPOSAL START
		  if(param7.equals("3"))
			{
		   		proc_stmt = con.prepareStatement("{ call " + spname2+ "(?,?,?,?,?,?,?) }");
			
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
		    	
		      	Intrresponse = MSInsuranceInterfaceCall.MSInsuranceInterfaceCallSrv(CntntURL, Strval,Type,TokenKey);
		    	
		      	String Reponse[] = Intrresponse.split("~");
		    	Intrresponse = Reponse[0];
		    	ErrorMsg = Reponse[1];
		    	FNLResp = Intrresponse;
		    	System.out.println("3 End");
		    	   
				//TimeUnit.SECONDS.sleep(1);
				System.out.println("4 start");
		       	proc_stmt = con.prepareStatement("{ call " +spname2+ "(?,?,?,?,?,?,?) }");
					    	
		    	proc_stmt.setString(1, param1);
		    	proc_stmt.setString(2, param2);
		    	proc_stmt.setString(3, param3);  
		    	proc_stmt.setString(4, param4); 
		    	proc_stmt.setString(5, Intrresponse); // RESPONSE FROM 1 
		    	proc_stmt.setString(6, UNIQUEID1); // UNIQUEID FROM 1  
		    	proc_stmt.setString(7, "4"); // PRCSID

		    	results=proc_stmt.executeQuery(); 
		    		
		    	while (results.next()) {
		    		//FNLResp=results.getString("PRAMOUNT");
		    		param7=results.getString("param7");
		      	}
		      	 	
		    Connections.Call(proc_stmt,results,con,"Commit");	
			System.out.println("FNLResp"+FNLResp);
			  }
			//SAVE PROPOSAL END		  
		  
			//GEN POLICY START
		  if(param7.equals("5"))
			{
		   		proc_stmt = con.prepareStatement("{ call " + spname2+ "(?,?,?,?,?,?,?) }");
			
				proc_stmt.setString(1, param1);
				proc_stmt.setString(2, param2);
				proc_stmt.setString(3, param3);
				proc_stmt.setString(4, param4);
				proc_stmt.setString(5, param5);
				proc_stmt.setString(6, "");
				proc_stmt.setString(7, "5");
				
				results=proc_stmt.executeQuery();  
		      	while (results.next()) {
		      		Type=results.getString("CONTENTTYPE");
		      		CntntURL=results.getString("URL");
		      		Strval=results.getString("JSON");
		      		UNIQUEID1=results.getString("UNIQUEID");   		
		      	}
		      	Connections.Call(proc_stmt,results,con,"Commit");
		    	
		      	Intrresponse = MSInsuranceInterfaceCall.MSInsuranceInterfaceCallSrv(CntntURL, Strval,Type,TokenKey);
		    	
		      	String Reponse[] = Intrresponse.split("~");
		    	Intrresponse = Reponse[0];
		    	ErrorMsg = Reponse[1];
		    	FNLResp = Intrresponse;
		    	System.out.println("2 End");
		    	   
				TimeUnit.SECONDS.sleep(1);
				System.out.println("2 start");
		       	proc_stmt = con.prepareStatement("{ call " +spname2+ "(?,?,?,?,?,?,?) }");
					    	
		    	proc_stmt.setString(1, param1);
		    	proc_stmt.setString(2, param2);
		    	proc_stmt.setString(3, param3);  
		    	proc_stmt.setString(4, param4); 
		    	proc_stmt.setString(5, Intrresponse); // RESPONSE FROM 1 
		    	proc_stmt.setString(6, UNIQUEID1); // UNIQUEID FROM 1  
		    	proc_stmt.setString(7, "6"); // PRCSID

		    	results=proc_stmt.executeQuery(); 
		    		
		    	while (results.next()) {
		    		//FNLResp=results.getString("PRAMOUNT");
		    		param7=results.getString("param7");
		      	}
		      	 	
		    Connections.Call(proc_stmt,results,con,"Commit");	
			System.out.println("FNLResp"+FNLResp);
			  }
			//GEN POLICY END		  
		  
			//PROPOSAL STATUS START
		  if(param7.equals("7"))
			{
		   		proc_stmt = con.prepareStatement("{ call " + spname2+ "(?,?,?,?,?,?,?) }");
			
				proc_stmt.setString(1, param1);
				proc_stmt.setString(2, param2);
				proc_stmt.setString(3, param3);
				proc_stmt.setString(4, param4);
				proc_stmt.setString(5, param5);
				proc_stmt.setString(6, "");
				proc_stmt.setString(7, "7");
				
				results=proc_stmt.executeQuery();  
		      	while (results.next()) {
		      		Type=results.getString("CONTENTTYPE");
		      		CntntURL=results.getString("URL");
		      		Strval=results.getString("JSON");
		      		UNIQUEID1=results.getString("UNIQUEID");   		
		      	}
		      	Connections.Call(proc_stmt,results,con,"Commit");
		    	
		      	Intrresponse = MSInsuranceInterfaceCall.MSInsuranceInterfaceCallSrv(CntntURL, Strval,Type,TokenKey);
		    	
		      	String Reponse[] = Intrresponse.split("~");
		    	Intrresponse = Reponse[0];
		    	ErrorMsg = Reponse[1];
		    	FNLResp = Intrresponse;
		    	System.out.println("2 End");
		    	   
				TimeUnit.SECONDS.sleep(1);
				System.out.println("2 start");
		       	proc_stmt = con.prepareStatement("{ call " +spname2+ "(?,?,?,?,?,?,?) }");
					    	
		    	proc_stmt.setString(1, param1);
		    	proc_stmt.setString(2, param2);
		    	proc_stmt.setString(3, param3);  
		    	proc_stmt.setString(4, param4); 
		    	proc_stmt.setString(5, Intrresponse); // RESPONSE FROM 1 
		    	proc_stmt.setString(6, UNIQUEID1); // UNIQUEID FROM 1  
		    	proc_stmt.setString(7, "8"); // PRCSID

		    	results=proc_stmt.executeQuery(); 
		    		
		    	while (results.next()) {
		    		FNLResp=results.getString("PRAMOUNT");
		      	}
		      	 	
		    Connections.Call(proc_stmt,results,con,"Commit");	
			System.out.println("FNLResp"+FNLResp);
			  }
			//PROPOSAL STATUS END
		  
		//PROPOSAL STATUS START
		  if(param7.equals("11"))
			{
		   		proc_stmt = con.prepareStatement("{ call " + spname2+ "(?,?,?,?,?,?,?) }");
			
				proc_stmt.setString(1, param1);
				proc_stmt.setString(2, param2);
				proc_stmt.setString(3, param3);
				proc_stmt.setString(4, param4);
				proc_stmt.setString(5, param5);
				proc_stmt.setString(6, "");
				proc_stmt.setString(7, "11");
				
				results=proc_stmt.executeQuery();  
		      	while (results.next()) {
		      		Type=results.getString("CONTENTTYPE");
		      		CntntURL=results.getString("URL");
		      		Strval=results.getString("JSON");
		      		UNIQUEID1=results.getString("UNIQUEID");   		
		      	}
		      	Connections.Call(proc_stmt,results,con,"Commit");
		    	
		      	Intrresponse = MSInsuranceInterfaceCall.MSInsuranceInterfaceCallSrv(CntntURL, Strval,Type,TokenKey);
		    	
		      	String Reponse[] = Intrresponse.split("~");
		    	Intrresponse = Reponse[0];
		    	ErrorMsg = Reponse[1];
		    	FNLResp = Intrresponse;
		    	System.out.println("2 End");
		    	   
				TimeUnit.SECONDS.sleep(1);
				System.out.println("2 start");
		       	proc_stmt = con.prepareStatement("{ call " +spname2+ "(?,?,?,?,?,?,?) }");
					    	
		    	proc_stmt.setString(1, param1);
		    	proc_stmt.setString(2, param2);
		    	proc_stmt.setString(3, param3);  
		    	proc_stmt.setString(4, param4); 
		    	proc_stmt.setString(5, Intrresponse); // RESPONSE FROM 1 
		    	proc_stmt.setString(6, UNIQUEID1); // UNIQUEID FROM 1  
		    	proc_stmt.setString(7, "12"); // PRCSID

		    	results=proc_stmt.executeQuery(); 
		    		
		    	while (results.next()) {
		    		FNLResp=results.getString("URL");
		      	}
		      	 	
		    Connections.Call(proc_stmt,results,con,"Commit");	
			System.out.println("FNLResp"+FNLResp);
			  }
			//PROPOSAL STATUS END
		  
		  
		}
	
		catch (Exception e) {

			e.printStackTrace();
		}
		 return FNLResp;
	}	
}
