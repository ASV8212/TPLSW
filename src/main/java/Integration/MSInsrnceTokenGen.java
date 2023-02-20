package Integration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.concurrent.TimeUnit;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import Controls.Connections;
import Controls.InsuranceInterfaceCall;
import CommonModel.DBConnection;




public class MSInsrnceTokenGen {
	
	
	private static String param1;
	private static String param2;
	private static String param3;
	private static String param4;
	private static String param5;
	private static String DBSrc;
	private static String spname1;
	private static String spname2;

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

	
	public static String MSINSTOKENGEN(String Userid) throws AddressException, MessagingException 
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

	spname1="LSW_SGETTOKENGENDATA";
	
	Connection con = DBConnection.getConnection(DBSrc);
	ResultSet results = null;		
		try {
				
			proc_stmt = con.prepareStatement("{ call " + spname1+ "(?,?,?,?,?) }");
			
			proc_stmt.setString(1, param1);
			proc_stmt.setString(2, param2);
			proc_stmt.setString(3, param3);
			proc_stmt.setString(4, param4);
			proc_stmt.setString(5, Userid);
			
			
			results=proc_stmt.executeQuery();  
	      	while (results.next()) {
	      		Type=results.getString("CONTENTTYPE");
	      		CntntURL=results.getString("URL");
	      		Strval=results.getString("JSON");
	      	}
	      	Connections.Call(proc_stmt,results,con,"Commit");
	    	
	      	Intrresponse = InsuranceInterfaceCall.InsuranceInterfaceCallSrv(CntntURL, Strval,Type);
	    	
	      	String Reponse[] = Intrresponse.split("~");
	    	Intrresponse = Reponse[0];
	    	ErrorMsg = Reponse[1];
	    	FNLResp = Intrresponse;
	    	System.out.println("1 End");
		}
			   
		catch (Exception e) {
			e.printStackTrace();
		}
		 return FNLResp;
	}	
}
