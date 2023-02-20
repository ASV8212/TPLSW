package CommonModel;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.TimeUnit;



import javax.mail.MessagingException;
import javax.net.ssl.HttpsURLConnection;





public class CRIFCHKINDV {
	
	
	private static String param1;
	private static String param2;
	private static String param3;
	private static String param4;
	private static String param5;
	private static String DBSrc;
	private static String spname;
	

    
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
	
	public void spname(String spname) {
		this.spname = spname;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	
	public String CRIFCHKINDV1() throws  MessagingException, SQLException 
	{
	String Result="";
	String FnlVal="";
		
		try {
			String RtnVal="";
			String Vl="";
			String OPAttchData = "";
			String Score="";
			String PdfTxt="";
			
			ResultSet resultSet = null;
			PreparedStatement preparedStatement = null;
			String OutRst;
			String Strval ="";
			String CntntURL="";
			String userId ="";
			String Password="";
			String mbrid="";
			String productType ="";
			String requestXML="";
			String reqVolType="";
			String productVersion="";
			

			Connection con = DBConnection.getConnection(DBSrc);
			preparedStatement = con.prepareStatement("{ call " + spname+ "(?,?) }");
			
		
			preparedStatement.setString(1, param1);
			preparedStatement.setString(2, param2);
		
			
			
		
			
			ResultSet results=preparedStatement.executeQuery();  
	      	while (results.next()) {

	      		userId=results.getString("userId");
	      		Password=results.getString("Password");
	      		mbrid=results.getString("mbrid");
	      		productType =results.getString("productType");
	      		productVersion=results.getString("productVersion");
	      		reqVolType=results.getString("reqVolType");
	      		CntntURL=results.getString("URL");
	      		Strval=results.getString("XML");
	      		
	      		
	      		
	      	}
	      	con.close();
			
	
	      	
			URL uri1 = new URL(CntntURL);
			//String cuki=new String();
			
			//HttpURLConnection connection =(HttpURLConnection) uri1.openConnection();
			
			
			
			
			//System.setProperty("java.protocol.handler.pkgs", "com.sun.net.ssl.internal.www.protocol");
			//java.security.Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider()); 
			URL url = new URL(CntntURL); 
			 HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();
			connection.setDoInput(true); 
			connection.setDoOutput(true);
		
			
			/*if (connection instanceof HttpsURLConnection) {
				  HttpsURLConnection httpsUrlConnection = (HttpsURLConnection) connection;
				   */       
			connection.setHostnameVerifier(new SSLSkipSNIHostnameVerifier());
				
			//System.out.println("SRI1");
			
			//connection.setUseCaches(false);
			//connection.setDoInput(true);
			//connection.setDoOutput(true);
			//System.out.println("SRI2");
			
			
			connection.setRequestMethod("POST");
			connection.setRequestProperty("userId",userId);
			connection.setRequestProperty("Password",Password);
			connection.setRequestProperty("mbrid",mbrid);
			connection.setRequestProperty("productType",productType);
			connection.setRequestProperty("productVersion",productVersion);
			connection.setRequestProperty("reqVolType",reqVolType);
			connection.setRequestProperty("productType",productType);
			connection.setRequestProperty("requestXML",Strval);
		//	connection.setRequestProperty("Content-Type","application/json");
			//System.out.println("SRI3");
		
			//JSONObject json = new JSONObject();
			//json.put("reqXml",requestXML);
			//String JVal=json.toString();
			//OutputStreamWriter wr = new OutputStreamWriter(connection.getOutputStream());
		/*	BufferedWriter wr =null;
			try
			{
			 wr = new BufferedWriter(new OutputStreamWriter(connection.getOutputStream()));
			}
			catch (Exception e) {

				e.printStackTrace();

			}
		     // bw.write("OK\n");
		      //bw.flush();
			
			System.out.println("SRI4");
			//wr.write(JVal);
			wr.flush();

			int status = 0;
			if( null != connection ){
			status = connection.getResponseCode();
			}*/
			
		
			
			
			
BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));

String inputLine;

   while ((inputLine = reader.readLine()) != null) {
           System.out.println(inputLine);
           Result +=inputLine;
            
           
   }
   reader.close();
   
   


   TimeUnit.SECONDS.sleep(10);
   TimeUnit.SECONDS.sleep(10);
   System.out.println("1");	 
   
   String spname1= "LSW_SCRIFLOGDATAINS_INDV";
   String AcUrl="";
   String AcXml="";
   ResultSet resultSet1 = null;
	PreparedStatement preparedStatement1 = null;
   
Connection con1 = DBConnection.getConnection(DBSrc);
preparedStatement1 = con1.prepareStatement("{ call " + spname1+ "(?,?,?,?,?) }");


preparedStatement1.setString(1, param1);
preparedStatement1.setString(2, Result);
preparedStatement1.setString(3, param3);
preparedStatement1.setString(4, param4);
preparedStatement1.setString(5, param5);




ResultSet results1=preparedStatement1.executeQuery();  
	while (results1.next()) {

		userId=results1.getString("userId");
  		Password=results1.getString("Password");
  		mbrid=results1.getString("mbrid");
  		productType =results1.getString("productType");
  		productVersion=results1.getString("productVersion");
  		reqVolType=results1.getString("reqVolType");
  		CntntURL=results1.getString("URL");
  		Strval=results1.getString("XML");
		
	}
	con1.close();

//		String Strval ="<REQUEST-FILE> <HEADER-SEGMENT> <REQUEST-TYPE>SHERLOCK</REQUEST-TYPE> <DATE-OF-REQUEST>07-09-2018</DATE-OF-REQUEST> <REQUEST-ACTION-TYPE>SUBMIT</REQUEST-ACTION-TYPE> <RESPONSE-FORMAT>XML</RESPONSE-FORMAT> <RES-FOR-FUTURE1></RES-FOR-FUTURE1> <RES-FOR-FUTURE2></RES-FOR-FUTURE2> </HEADER-SEGMENT> <INQUIRY> <PRIORITY>YES</PRIORITY> <APPLICATION-SEGMENT> <APPLN-ID>1021810000143</APPLN-ID> <APPLN-DT>07-09-2018</APPLN-DT> <BRANCH-ID></BRANCH-ID> <BRANCH-REGION></BRANCH-REGION> <ACCT-OPEN-DATE>07-09-2018</ACCT-OPEN-DATE> <APPLN-VALUE>1000000</APPLN-VALUE> <LTV></LTV> <TERM>120</TERM> <APPLN-OFFICER>GLENDER</APPLN-OFFICER> <APPLN-TYPE>IA01</APPLN-TYPE> <OTHER-DESC></OTHER-DESC> <APPLICANT-SEGMENT> <APPLICANT> <APPLICANT-TYPE>O01</APPLICANT-TYPE> <APPLICANT-ID>C18000225</APPLICANT-ID> <FRAUD-VICTIM-FLAG></FRAUD-VICTIM-FLAG> <FRAUD-VICTIM-CLASS></FRAUD-VICTIM-CLASS> <GENDER>G02</GENDER> <AKA></AKA> <QUALIFICATION></QUALIFICATION> <APPLICANT-NAME> <NAME1>PECHIYAMMAL SK</NAME1> <NAME2></NAME2> <NAME3></NAME3> <NAME4></NAME4> <NAME5></NAME5> </APPLICANT-NAME> <DOB> <DOB-DATE>17-10-1994</DOB-DATE> <AGE></AGE> <AGE-AS-ON></AGE-AS-ON> </DOB> <IDS> <ID> <APPLICANT-ID-TYPE>ID07</APPLICANT-ID-TYPE> <APPLICANT-ID-VALUE>EPYPK6949P</APPLICANT-ID-VALUE> </ID> </IDS> <RELATIONS> <RELATION> <RELATION-TYPE></RELATION-TYPE> <RELATIVE-NAME></RELATIVE-NAME> </RELATION> <RELATION> <RELATION-TYPE></RELATION-TYPE> <RELATIVE-NAME></RELATIVE-NAME> </RELATION> </RELATIONS> <ACC-VERIFICATION> <VERIFICATION> <ACCT-DOC-TYPE></ACCT-DOC-TYPE> <ACCT-DOC-NUMBER></ACCT-DOC-NUMBER> <DOC-ISSUE-DATE></DOC-ISSUE-DATE> <ACCT-DOC-PURPOSE></ACCT-DOC-PURPOSE> <PLACE-OF-ISSUE></PLACE-OF-ISSUE> <ACCT-NUMBER></ACCT-NUMBER> <BANK_NAME></BANK_NAME> <BANK-IFSC></BANK-IFSC> <BANK-MICR></BANK-MICR> </VERIFICATION> </ACC-VERIFICATION> <EMPLOYMENTS> <EMPLOYMENT> <OCCUPATION></OCCUPATION> <JOB-TITLE></JOB-TITLE> <EMPLOYER-NAME></EMPLOYER-NAME> <EMPLOYER-STATUS></EMPLOYER-STATUS> <INDUSTRY></INDUSTRY> <EMPLOYEE-NUMBER></EMPLOYEE-NUMBER> <EMP-START-DATE></EMP-START-DATE> <EMP-END-DATE></EMP-END-DATE> <INCOME></INCOME> <INCOME-INDICATOR></INCOME-INDICATOR> </EMPLOYMENT> </EMPLOYMENTS> <ADDRESSES> <ADDRESS> <ADDRESS-TYPE>D04</ADDRESS-TYPE> <ADDRESS-LINE1>4 24GANDHI STREETTHOVALAI</ADDRESS-LINE1> <ADDRESS-LINE2></ADDRESS-LINE2> <ADDRESS-LINE3></ADDRESS-LINE3> <ADDRESS-LINE4></ADDRESS-LINE4> <ADDRESS-LINE5></ADDRESS-LINE5> <CITY>Kanyakumari</CITY> <STATE>TN</STATE> <PIN>629302</PIN> <COUNTRY></COUNTRY> <FROM-DATE></FROM-DATE> <TO-DATE></TO-DATE> </ADDRESS> </ADDRESSES> <PHONES> <PHONE> <TELE-NO-TYPE>P03</TELE-NO-TYPE> <TELE-NO>9524725896</TELE-NO> </PHONE> </PHONES> <E-MAILS> <E-MAIL> <EMAIL-TYPE>EMT01</EMAIL-TYPE> <EMAIL-ID>pechisundar@gmail.com</EMAIL-ID> </E-MAIL> </E-MAILS> </APPLICANT> </APPLICANT-SEGMENT> <COLLATERAL-SEGMENT> <COLLATERAL> <TYPE-OF-COLLATERAL></TYPE-OF-COLLATERAL> <COLLAT-OTHER-DESC></COLLAT-OTHER-DESC> <PROP-OWN-NAME></PROP-OWN-NAME> <TYPE-OF-CHARGE></TYPE-OF-CHARGE> <COLLATERAL-VALUE></COLLATERAL-VALUE> <VALUATION-DATE></VALUATION-DATE> <APPRAISER-NAME></APPRAISER-NAME> <PROP-ADDRESS-TYPE></PROP-ADDRESS-TYPE> <PROP-ADDRESS-LINE1></PROP-ADDRESS-LINE1> <PROP-ADDRESS-LINE2></PROP-ADDRESS-LINE2> <CITY></CITY> <STATE></STATE> <PIN-CODE></PIN-CODE> <BUILD-TYPE></BUILD-TYPE> <YEAR-OF-MAKE></YEAR-OF-MAKE> <DEALER></DEALER> <REG-NO></REG-NO> <ENG-NO></ENG-NO> <CHASSIS-NO></CHASSIS-NO> </COLLATERAL> </COLLATERAL-SEGMENT> <OTHER-ENTITIES> <OTHER-ENTITY> <REF-TITLE></REF-TITLE> <REF-NAME1>KOKILA</REF-NAME1> <REF-NAME2></REF-NAME2> <REF-NAME3></REF-NAME3> <REF-AKA></REF-AKA> <REF-PHONE1>9647813562</REF-PHONE1> <REF-PHONE2></REF-PHONE2> <REF-EMAIL1></REF-EMAIL1> <REF-ADDRESS-LINE1>424 GANDHI STREET,THEKKOOR,THOVALAI</REF-ADDRESS-LINE1> <REF-ADDRESS-LINE2></REF-ADDRESS-LINE2> <REF-ADDRESS-LINE3></REF-ADDRESS-LINE3> <REF-CITY>Kanyakumari</REF-CITY> <REF-STATE>TN</REF-STATE> <REF-PINCODE>629302</REF-PINCODE> <REF-COUNTRY></REF-COUNTRY> </OTHER-ENTITY> </OTHER-ENTITIES> <BROKER> <BRKR-ORG-NAME></BRKR-ORG-NAME> <BRKR-NAME></BRKR-NAME> <BRKR-ADD> <BRKR-ADDRESS></BRKR-ADDRESS> <BRKR-CITY></BRKR-CITY> <BRKR-STATE></BRKR-STATE> <BRKR-PINCODE></BRKR-PINCODE> <BRKR-COUNTRY></BRKR-COUNTRY> </BRKR-ADD> <BRKR-PHONE></BRKR-PHONE> </BROKER> </APPLICATION-SEGMENT> </INQUIRY> </REQUEST-FILE>";
//String CntntURL="https://test.crifhighmark.com/FraudBoot/webservice/issue";
//String CntntURL="https://test.crifhighmark.com/FraudBoot/webservice/async";

//String Strval ="<ISSUE-FILE><HEADER-SEGMENT><REQUEST-TYPE>SHERLOCK</REQUEST-TYPE><CUSTOMER-ID>HFC0000038</CUSTOMER-ID><DATE-OF-REQUEST>31-08-2018</DATE-OF-REQUEST><REQUEST-ACTION-TYPE>ISSUE</REQUEST-ACTION-TYPE><RESPONSE-FORMAT>XML</RESPONSE-FORMAT></HEADER-SEGMENT><INQUIRY><CASE-ID>30877692</CASE-ID></INQUIRY></ISSUE-FILE>";


URL uri2 = new URL(CntntURL);
HttpURLConnection connection1 =(HttpURLConnection) uri2.openConnection();

if (connection1 instanceof HttpsURLConnection) {
	  HttpsURLConnection httpsUrlConnection1 = (HttpsURLConnection) connection1;
	          
	  httpsUrlConnection1.setHostnameVerifier(new SSLSkipSNIHostnameVerifier());
	}

connection1.setUseCaches(false);
connection1.setDoInput(true);
connection1.setDoOutput(true);

connection1.setRequestMethod("POST");
connection1.setRequestProperty("userId",userId);
connection1.setRequestProperty("Password",Password);
connection1.setRequestProperty("mbrid",mbrid);
connection1.setRequestProperty("productType",productType);
connection1.setRequestProperty("productVersion",productVersion);
connection1.setRequestProperty("reqVolType",reqVolType);
connection1.setRequestProperty("productType",productType);
connection1.setRequestProperty("requestXML",Strval);

//JSONObject json1 = new JSONObject();
//json1.put("reqXml",AcXml);
//String JVal1=json1.toString();
OutputStreamWriter wr1 = new OutputStreamWriter(connection1.getOutputStream());
//wr1.write(JVal1);
wr1.flush();

int status1 = 0;
if( null != connection1 ){
	status1 = connection1.getResponseCode();
}

BufferedReader reader1 = new BufferedReader(new InputStreamReader(connection1.getInputStream()));

String inputLine1;

while ((inputLine1 = reader1.readLine()) != null) {
System.out.println(inputLine1);
FnlVal +=inputLine1;

}


//RtnVal=SavePDF(FnlVal,"","","","","","","");


reader1.close();


//OutRst=connection.getResponseMessage();
	
		} catch (Exception e) {

			e.printStackTrace();

		}
		//return Result; 

	
		String GetScr=FnlVal.split("<CONTENT>")[0];
		String RptCnt=FnlVal.split("<CONTENT>")[1];
		RptCnt=RptCnt.replace("]]></CONTENT></PRINTABLE-REPORT></INDV-REPORT></INDV-REPORTS></INDV-REPORT-FILE>", "");
		
		 String spname2= "LSW_SCRIFIndvRes";
		    ResultSet resultSet2 = null;
			PreparedStatement preparedStatement2 = null;
		   
		Connection con2 = DBConnection.getConnection(DBSrc);
		preparedStatement2 = con2.prepareStatement("{ call " + spname2+ "(?,?,?,?,?) }");

		
		byte[] bytes1 = FnlVal.getBytes();
		byte[] RptCnt1 = RptCnt.getBytes();

		preparedStatement2.setString(1, param1);
		preparedStatement2.setString(2, GetScr);
		preparedStatement2.setString(3, param3);
		preparedStatement2.setBytes(4, bytes1);
		preparedStatement2.setBytes(5, RptCnt1);

			String Score="";


		ResultSet results2=preparedStatement2.executeQuery();  
			while (results2.next()) {

				Score=results2.getString("SCORE");
		  		
			}	
	
	   return "Success|"+Score;
	}
	
	
	
	
		
	}

