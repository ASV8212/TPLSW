package CommonModel;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
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

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLSession;
import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.xml.soap.MessageFactory;
import javax.xml.soap.MimeHeaders;
import javax.xml.soap.SOAPConnection;
import javax.xml.soap.SOAPConnectionFactory;
import javax.xml.soap.SOAPEnvelope;
import javax.xml.soap.SOAPMessage;
import javax.xml.soap.SOAPPart;

import jcifs.smb.NtlmPasswordAuthentication;
import jcifs.smb.SmbFile;
import jcifs.smb.SmbFileOutputStream;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.stereotype.Controller;

import com.google.gson.Gson;
import com.itextpdf.text.Document;
import com.itextpdf.text.Font;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfWriter;

import jcifs.smb.NtlmPasswordAuthentication;
import jcifs.smb.SmbException;
import jcifs.smb.SmbFile;
import jcifs.smb.SmbFileOutputStream;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import java.io.OutputStream; 




public class CRIFCHKCOM {
	
	
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

	
	public String CRIFCHKCOM1() throws AddressException, MessagingException 
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
			
	//		String Strval ="<REQUEST-FILE> <HEADER-SEGMENT> <REQUEST-TYPE>SHERLOCK</REQUEST-TYPE> <DATE-OF-REQUEST>07-09-2018</DATE-OF-REQUEST> <REQUEST-ACTION-TYPE>SUBMIT</REQUEST-ACTION-TYPE> <RESPONSE-FORMAT>XML</RESPONSE-FORMAT> <RES-FOR-FUTURE1></RES-FOR-FUTURE1> <RES-FOR-FUTURE2></RES-FOR-FUTURE2> </HEADER-SEGMENT> <INQUIRY> <PRIORITY>YES</PRIORITY> <APPLICATION-SEGMENT> <APPLN-ID>1021810000143</APPLN-ID> <APPLN-DT>07-09-2018</APPLN-DT> <BRANCH-ID></BRANCH-ID> <BRANCH-REGION></BRANCH-REGION> <ACCT-OPEN-DATE>07-09-2018</ACCT-OPEN-DATE> <APPLN-VALUE>1000000</APPLN-VALUE> <LTV></LTV> <TERM>120</TERM> <APPLN-OFFICER>GLENDER</APPLN-OFFICER> <APPLN-TYPE>IA01</APPLN-TYPE> <OTHER-DESC></OTHER-DESC> <APPLICANT-SEGMENT> <APPLICANT> <APPLICANT-TYPE>O01</APPLICANT-TYPE> <APPLICANT-ID>C18000225</APPLICANT-ID> <FRAUD-VICTIM-FLAG></FRAUD-VICTIM-FLAG> <FRAUD-VICTIM-CLASS></FRAUD-VICTIM-CLASS> <GENDER>G02</GENDER> <AKA></AKA> <QUALIFICATION></QUALIFICATION> <APPLICANT-NAME> <NAME1>PECHIYAMMAL SK</NAME1> <NAME2></NAME2> <NAME3></NAME3> <NAME4></NAME4> <NAME5></NAME5> </APPLICANT-NAME> <DOB> <DOB-DATE>17-10-1994</DOB-DATE> <AGE></AGE> <AGE-AS-ON></AGE-AS-ON> </DOB> <IDS> <ID> <APPLICANT-ID-TYPE>ID07</APPLICANT-ID-TYPE> <APPLICANT-ID-VALUE>EPYPK6949P</APPLICANT-ID-VALUE> </ID> </IDS> <RELATIONS> <RELATION> <RELATION-TYPE></RELATION-TYPE> <RELATIVE-NAME></RELATIVE-NAME> </RELATION> <RELATION> <RELATION-TYPE></RELATION-TYPE> <RELATIVE-NAME></RELATIVE-NAME> </RELATION> </RELATIONS> <ACC-VERIFICATION> <VERIFICATION> <ACCT-DOC-TYPE></ACCT-DOC-TYPE> <ACCT-DOC-NUMBER></ACCT-DOC-NUMBER> <DOC-ISSUE-DATE></DOC-ISSUE-DATE> <ACCT-DOC-PURPOSE></ACCT-DOC-PURPOSE> <PLACE-OF-ISSUE></PLACE-OF-ISSUE> <ACCT-NUMBER></ACCT-NUMBER> <BANK_NAME></BANK_NAME> <BANK-IFSC></BANK-IFSC> <BANK-MICR></BANK-MICR> </VERIFICATION> </ACC-VERIFICATION> <EMPLOYMENTS> <EMPLOYMENT> <OCCUPATION></OCCUPATION> <JOB-TITLE></JOB-TITLE> <EMPLOYER-NAME></EMPLOYER-NAME> <EMPLOYER-STATUS></EMPLOYER-STATUS> <INDUSTRY></INDUSTRY> <EMPLOYEE-NUMBER></EMPLOYEE-NUMBER> <EMP-START-DATE></EMP-START-DATE> <EMP-END-DATE></EMP-END-DATE> <INCOME></INCOME> <INCOME-INDICATOR></INCOME-INDICATOR> </EMPLOYMENT> </EMPLOYMENTS> <ADDRESSES> <ADDRESS> <ADDRESS-TYPE>D04</ADDRESS-TYPE> <ADDRESS-LINE1>4 24GANDHI STREETTHOVALAI</ADDRESS-LINE1> <ADDRESS-LINE2></ADDRESS-LINE2> <ADDRESS-LINE3></ADDRESS-LINE3> <ADDRESS-LINE4></ADDRESS-LINE4> <ADDRESS-LINE5></ADDRESS-LINE5> <CITY>Kanyakumari</CITY> <STATE>TN</STATE> <PIN>629302</PIN> <COUNTRY></COUNTRY> <FROM-DATE></FROM-DATE> <TO-DATE></TO-DATE> </ADDRESS> </ADDRESSES> <PHONES> <PHONE> <TELE-NO-TYPE>P03</TELE-NO-TYPE> <TELE-NO>9524725896</TELE-NO> </PHONE> </PHONES> <E-MAILS> <E-MAIL> <EMAIL-TYPE>EMT01</EMAIL-TYPE> <EMAIL-ID>pechisundar@gmail.com</EMAIL-ID> </E-MAIL> </E-MAILS> </APPLICANT> </APPLICANT-SEGMENT> <COLLATERAL-SEGMENT> <COLLATERAL> <TYPE-OF-COLLATERAL></TYPE-OF-COLLATERAL> <COLLAT-OTHER-DESC></COLLAT-OTHER-DESC> <PROP-OWN-NAME></PROP-OWN-NAME> <TYPE-OF-CHARGE></TYPE-OF-CHARGE> <COLLATERAL-VALUE></COLLATERAL-VALUE> <VALUATION-DATE></VALUATION-DATE> <APPRAISER-NAME></APPRAISER-NAME> <PROP-ADDRESS-TYPE></PROP-ADDRESS-TYPE> <PROP-ADDRESS-LINE1></PROP-ADDRESS-LINE1> <PROP-ADDRESS-LINE2></PROP-ADDRESS-LINE2> <CITY></CITY> <STATE></STATE> <PIN-CODE></PIN-CODE> <BUILD-TYPE></BUILD-TYPE> <YEAR-OF-MAKE></YEAR-OF-MAKE> <DEALER></DEALER> <REG-NO></REG-NO> <ENG-NO></ENG-NO> <CHASSIS-NO></CHASSIS-NO> </COLLATERAL> </COLLATERAL-SEGMENT> <OTHER-ENTITIES> <OTHER-ENTITY> <REF-TITLE></REF-TITLE> <REF-NAME1>KOKILA</REF-NAME1> <REF-NAME2></REF-NAME2> <REF-NAME3></REF-NAME3> <REF-AKA></REF-AKA> <REF-PHONE1>9647813562</REF-PHONE1> <REF-PHONE2></REF-PHONE2> <REF-EMAIL1></REF-EMAIL1> <REF-ADDRESS-LINE1>424 GANDHI STREET,THEKKOOR,THOVALAI</REF-ADDRESS-LINE1> <REF-ADDRESS-LINE2></REF-ADDRESS-LINE2> <REF-ADDRESS-LINE3></REF-ADDRESS-LINE3> <REF-CITY>Kanyakumari</REF-CITY> <REF-STATE>TN</REF-STATE> <REF-PINCODE>629302</REF-PINCODE> <REF-COUNTRY></REF-COUNTRY> </OTHER-ENTITY> </OTHER-ENTITIES> <BROKER> <BRKR-ORG-NAME></BRKR-ORG-NAME> <BRKR-NAME></BRKR-NAME> <BRKR-ADD> <BRKR-ADDRESS></BRKR-ADDRESS> <BRKR-CITY></BRKR-CITY> <BRKR-STATE></BRKR-STATE> <BRKR-PINCODE></BRKR-PINCODE> <BRKR-COUNTRY></BRKR-COUNTRY> </BRKR-ADD> <BRKR-PHONE></BRKR-PHONE> </BROKER> </APPLICATION-SEGMENT> </INQUIRY> </REQUEST-FILE>";
			//String CntntURL="https://test.crifhighmark.com/FraudBoot/webservice/issue";
			//CntntURL="https://test.crifhighmark.com/Inquiry/Inquiry/CPUAction.action";
			
		//	Strval ="<REQUEST-REQUEST-FILE> <HEADER-SEGMENT> <PRODUCT-TYP>COMM_ACE_PLUS_REPORT</PRODUCT-TYP> <PRODUCT-VER>4</PRODUCT-VER> <REQ-MBR>NBF0000215</REQ-MBR> <SUB-MBR-ID>FINTREE FINANCE PRIVATE LIMITED</SUB-MBR-ID> <INQ-DT-TM>09-10-2018</INQ-DT-TM> <REQ-VOL-TYP>INDV</REQ-VOL-TYP> <REQ-ACTN-TYP>SUBMIT</REQ-ACTN-TYP> <TEST-FLG>Y</TEST-FLG> <USER-ID>cir_uat@fintreefinance.com</USER-ID> <PWD>411A44B0F1F1F2F51C2E8DA4040BE03ED2EB1013</PWD> <AUTH-FLG>N</AUTH-FLG> <AUTH-TITLE>USER</AUTH-TITLE> <RES-FRMT>XML/HTML</RES-FRMT> <MEMBER-PRE-OVERRIDE>N</MEMBER-PRE-OVERRIDE> <RES-FRMT-EMBD>N</RES-FRMT-EMBD> <LOS-NAME>TEST</LOS-NAME> <LOS-VENDER>TEST</LOS-VENDER> <LOS-VERSION>0.0</LOS-VERSION> <COMMERCIAL> <CIR>true</CIR> <SCORE>true</SCORE> </COMMERCIAL> <CONSUMER> <CIR>true</CIR> <SCORE>true</SCORE> </CONSUMER> </HEADER-SEGMENT> <INQUIRY> <COMM-APPLICANT-SEGMENT> <BORROWER-NAME>ANKUR DRUGS AND PHARMA LTD</BORROWER-NAME> <BORROWER-SHORT-NAME>ADARSH</BORROWER-SHORT-NAME> <LEGAL-CONSTITUTION>20</LEGAL-CONSTITUTION> <IDS> <ID> <TYPE>ID07</TYPE> <VALUE>AACCA2062M</VALUE> </ID> <ID> <TYPE>ID08</TYPE> <VALUE>CIN111111</VALUE> </ID> </IDS> <CLASS-OF-ACTIVITY-1>OTHER COMMUNITY, SOCIAL AND PERSONAL SERVICE ACTIVITIES </CLASS-OF-ACTIVITY-1> <PHONES> <PHONE> <TELE-NO>9875987468</TELE-NO> <TELE-NO-TYPE>P01</TELE-NO-TYPE> </PHONE> </PHONES> </COMM-APPLICANT-SEGMENT> <COMM-ADDRESS-SEGMENT> <ADDRESS> <TYPE>D01</TYPE> <ADDRESS-LINE> <![CDATA[C-306, CRYSTAL PLAZA,ANDHERI LINK ROAD]]> </ADDRESS-LINE> <LOCALITY>ANDHERI</LOCALITY> <CITY>Mumbai</CITY> <STATE>MH</STATE> <PIN>400053</PIN> </ADDRESS> </COMM-ADDRESS-SEGMENT> <APPLICATION-SEGMENT> <INQUIRY-UNIQUE-REF-NO>1908927821COMM54647</INQUIRY-UNIQUE-REF-NO> <CREDT-INQ-PURPS-TYP>ACCT-ORI</CREDT-INQ-PURPS-TYP> <CREDT-INQ-PURPS-TYP-DESC>Loan_Purpose_Desc</CREDT-INQ-PURPS-TYP-DESC> <CREDIT-INQUIRY-STAGE>PRE_DISB</CREDIT-INQUIRY-STAGE> <CREDT-RPT-ID>CRDRQINQR</CREDT-RPT-ID> <CREDT-REQ-TYP>INDV</CREDT-REQ-TYP> <CREDT-RPT-TRN-DT-TM>24-08-2017 21:10:00</CREDT-RPT-TRN-DT-TM> <MBR-ID>BOROCTSAN005</MBR-ID> <KENDRA-ID>PUNE</KENDRA-ID> <BRANCH-ID>PUNE</BRANCH-ID> <LOS-APP-ID>0507RE2015003215</LOS-APP-ID> <LOAN-TYPE>9999</LOAN-TYPE> <LOAN-AMOUNT>100000</LOAN-AMOUNT> </APPLICATION-SEGMENT> </INQUIRY> </REQUEST-REQUEST-FILE>";
			
			
			URL uri1 = new URL(CntntURL);
			HttpURLConnection connection =(HttpURLConnection) uri1.openConnection();
			
			if (connection instanceof HttpsURLConnection) {
				  HttpsURLConnection httpsUrlConnection = (HttpsURLConnection) connection;
				          
				  httpsUrlConnection.setHostnameVerifier(new SSLSkipSNIHostnameVerifier());
				}
	
			connection.setUseCaches(false);
			connection.setDoInput(true);
			connection.setDoOutput(true);
			
			connection.setRequestMethod("POST");
			connection.setRequestProperty("userId",userId);
			connection.setRequestProperty("password",Password);
			
			
			//connection.setRequestProperty("mbrid",mbrid);
		//	connection.setRequestProperty("productType",productType);
		//	connection.setRequestProperty("productVersion",productVersion);
			//connection.setRequestProperty("reqVolType",reqVolType);
		//	connection.setRequestProperty("productType",productType);
			connection.setRequestProperty("inquiryXML",Strval);
		//	connection.setRequestProperty("Content-Type","application/json");


			//JSONObject json = new JSONObject();
			//json.put("reqXml",requestXML);
			//String JVal=json.toString();
			OutputStreamWriter wr = new OutputStreamWriter(connection.getOutputStream());
			//wr.write(JVal);
			wr.flush();

			int status = 0;
			if( null != connection ){
			status = connection.getResponseCode();
			}
			
BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));

String inputLine;

   while ((inputLine = reader.readLine()) != null) {
           System.out.println(inputLine);
           Result +=inputLine;
            
           
   }
   reader.close();


   TimeUnit.SECONDS.sleep(15);
			 
   
   String spname1= "LSW_SCRIFSysAckgeMent";
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


RtnVal=SavePDF(reader1.readLine(),"","","","","","","");


reader1.close();


//OutRst=connection.getResponseMessage();
	
		} catch (Exception e) {

			e.printStackTrace();

		}
		//return Result; 

	
	
	
	

	   return FnlVal;
	}
	
	
public static String SavePDF(String inputString,String root,String Usrpwd,String FormName,String PrcsID,String AttchName,String Version,String AttchDescrptn)
	
	{
		
		// begin 
		String OPAttchData="";
		BufferedReader br = null;

	    try {
			//File file = new File("D:\\cibildocuments\\sample.pdf");
	       //new Document(PageSize.A4,36,36,36,36);
	        Document pdfDoc = new Document(PageSize.A4,65,5,3,0);
	        

			String uppath = "";
			String userPassword = Usrpwd;
			root="//Etd020//themepro";
			PrcsID="123123123";
			FormName="CRIF";
			AttchName="CRIFRPT";
			Version="1";
			Usrpwd="Etd020:123456";
			
			
			NtlmPasswordAuthentication auth1 = new NtlmPasswordAuthentication(
					userPassword);
			SmbFile sFile2 = new SmbFile("smb:" + root + "/"
					+ "Attachments" + "/" + PrcsID + "/" + FormName
					+ "/" + AttchName + "/" + Version , auth1);
	        
			if (!sFile2.exists()) {
				sFile2.mkdirs();
			}
			
			
	        //var url= "/Attachments/43208_LoanCreation_LoanCr/LoanApplication/Application Form/DOC0000000030VR/SanctionList.pdf";
	        String output_file = AttchDescrptn+".pdf";
	        System.out.println("## writing to: " + output_file);
	        SmbFile sFile3 = new SmbFile(sFile2 + "/" + output_file, auth1);
	        
	        
	        PdfWriter.getInstance(pdfDoc,new SmbFileOutputStream(sFile3)).setPdfVersion(PdfWriter.VERSION_1_7);;

	        pdfDoc.open();

	        float  fntSize = 8.29f;

	        BaseFont courier = BaseFont.createFont(BaseFont.COURIER, BaseFont.CP1252, BaseFont.EMBEDDED); 
	        Font myfont = new Font(courier,fntSize);
			
	        pdfDoc.add(new Paragraph("\n"));
            //int pageend = inputString.("\n");
	        ByteArrayInputStream stream = new ByteArrayInputStream(inputString.getBytes(StandardCharsets.UTF_8));
	            br = new BufferedReader(new InputStreamReader(stream));
	            String strLine;
                int i=0;
	            while ((strLine = br.readLine()) != null) {
	            	if(strLine.startsWith("\f") && strLine.contains("CIBIL CONSUMER CREDIT"))
	            		{
	            		pdfDoc.newPage();
	            		}
	                Paragraph para = new Paragraph(strLine + "\n", myfont);
	              
	                pdfDoc.add(para);
	                
	            }
	            
	            
	            pdfDoc.close();
	            
	            double bytes = sFile3.length();
				double Size = (bytes / 1024);
				
	            SmbFile uploadedFile = sFile3;
				String savepath = uploadedFile.toString();
				String rootsplit = root.split("//")[(root.split("//")).length - 1];
				String[] AttchPath = savepath.split(rootsplit);
				
				OPAttchData = AttchName + "~" + AttchDescrptn + "~"
						+ AttchPath[1] + "~"+Size+"~" + Version;
				
	       
	    }

	    catch (Exception e) {
	        e.printStackTrace();
	    } finally {
	 
	           
	    }
		return OPAttchData;
	}
	
	
		
	}
