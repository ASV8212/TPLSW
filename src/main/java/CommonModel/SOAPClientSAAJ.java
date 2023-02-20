
package CommonModel;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Iterator;

import javax.net.ssl.HttpsURLConnection;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.soap.*;
import javax.xml.transform.*;
import javax.xml.transform.stream.*;

import CommonModel.DBConnection;

import javax.xml.soap.MessageFactory;
import javax.xml.soap.MimeHeader;
import javax.xml.soap.MimeHeaders;
import javax.xml.soap.SOAPConstants;
import javax.xml.soap.SOAPMessage;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;







@XmlRootElement(name="GetIllustrationInfo",namespace="http://schemas.xmlsoap.org/soap/envelope")

public class SOAPClientSAAJ {

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

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public void spname(String spname) {
		this.spname = spname;
	}


	/**
     * Starting point for the SAAJ - SOAP Client Testing
	 * @throws SQLException 
     */
    public String SOAPClientSAAJ1() throws SQLException {
    	
    	String url1=null;
    	String spname1="Lsw_sGetPremCalcURL";
    	  PreparedStatement preparedStatement = null;
    	  Connection con = DBConnection.getConnection(DBSrc);
    	preparedStatement = con.prepareStatement("{ call " + spname1+ "(?,?,?,?,?) }");
    	preparedStatement.setString(1,"");
		  preparedStatement.setString(2,"" );
		  preparedStatement.setString(3,"");
		  preparedStatement.setString(4,"");
		  preparedStatement.setString(5,"");
    	ResultSet results=preparedStatement.executeQuery();  
    	while (results.next()) {
    		 url1 = results.getString("Url"); 
    	}
    	
    	
    	String xml1 =  "<Resultset>";	
        try {        	
        	
        	
            // Create SOAP Connection
        	
            SOAPConnectionFactory soapConnectionFactory = SOAPConnectionFactory.newInstance();
            SOAPConnection soapConnection = soapConnectionFactory.createConnection();
       
   //////////////////////         
            
            MessageFactory messageFactory = MessageFactory.newInstance(SOAPConstants.SOAP_1_1_PROTOCOL);
            SOAPMessage soapMessage = messageFactory.createMessage();
            SOAPPart soapPart = soapMessage.getSOAPPart();
          // String serverURI = "https://touchstone.canarahsbc.org/BIGRPCAL/GroupIllustrationCalculator.wsdl";
        
        
            // SOAP Envelope
            SOAPEnvelope envelope = soapPart.getEnvelope();
            SOAPBody soapBody = envelope.getBody();
            SOAPElement soapBodyElem = soapBody.addChildElement("ns4:GetIllustrationInfo");
            PreparedStatement preparedStatement1 = null;
            //String spname ="LSW_SPrmCalcAutm";
            Connection con1 = DBConnection.getConnection(DBSrc);
             String ReqMsg =null; 
             String ResMsg = null;
           // Connection con =DriverManager.getConnection("jdbc:sqlserver://ETD033\\RAMESH;databaseName=ERP;user=sa;password=encore");
    		preparedStatement1 = con1.prepareStatement("{ call " + spname+ "(?,?,?,?,?) }");
    		
    		String brbenfi1=null;
    		String brdob1=null;
    		String brgen1= null;
    		String brsa1= null;
    		String brsta1= null;
    		String brbenfi2=null;
    		String brdob2=null;
    		String brgen2= null;
    		String brsa2= null;
    		String brsta2= null;
    		String brbenfi3=null;
    		String brdob3=null;
    		String brgen3= null;
    		String brsa3= null;
    		String brsta3= null;
    		String cha= null;
    		String covopt= null;
    		String covter=null;
    		String intpay= null;
    		String jnlfe=null;
    		String lontyp= null;
    		String moratum= null;
    		String moratumpd= null;
    		String nobrws=null;
    		String prefdt=null;
    		String prefubnk=null;
    		String prepayopt= null;
    		String prepayterm=null;
    		String product= null;
    		String roi= null;
    		String slonamt= null;
    		String freq=null; 
    		String res=null;
    		
    		String basePremium2="0"; 
            String serviceTax2="0";
            String sumAssured2="0";
            String totalPremium2="0";
           
            String basePremium3="0";
            String serviceTax3="0";
            String sumAssured3="0";
            String totalPremium3="0";
           
    		
    	/*	String brbenfi1="GSEPGSTP";
    		String brdob1="09-05-1979";
    		String brgen1="M";
    		String brsa1= "2000000.00";
    		String brsta1= "N";
    		String brbenfi2=null;
    		String brdob2=null;
    		String brgen2= null;
    		String brsa2= null;
    		String brsta2= null;
    		String brbenfi3=null;
    		String brdob3=null;
    		String brgen3= null;
    		String brsa3= null;
    		String brsta3= null;
    		String cha="12";
    		String covopt="R";
    		String covter= "15";
    		String intpay= "NA";
    		String jnlfe= "SB";
    		String lontyp= "HL";
    		String moratum= "NM";
    		String moratumpd="NA";
    		String nobrws= "1";
    		String prefdt= "11-07-2017";
    		String prefubnk= "Y";
    		String prepayopt= "S";
    		String prepayterm="15";
    		String product= "GSEP";
    		String roi= "12";
    		String slonamt= "2000000.00";
    		String freq="0"; */
    		
    		preparedStatement1.setString(1, param1);
    		preparedStatement1.setString(2, param2);
    		preparedStatement1.setString(3, param3);
    		preparedStatement1.setString(4, param4);
    		preparedStatement1.setString(5, param5);
    		
    	//	resultSet = preparedStatement.executeQuery();
    		
    		ResultSet results1=preparedStatement1.executeQuery();   
       
         
    		while (results1.next()) {
    			
   			 res=results1.getString("Result");
   			 if(res.equals("Success"))
   			 {
   			 brbenfi1 = results1.getString("brwrBenefit1"); 
   			 brdob1 = results1.getString("brwrDob1"); 
   			 brgen1 = results1.getString("brwrGender1"); 
   			 brsa1 = results1.getString("brwrSA1"); 
   			 brsta1 = results1.getString("brwrStaff1");
   			 
   			 brbenfi2 = results1.getString("brwrBenefit2"); 
   			 brdob2 = results1.getString("brwrDob2"); 
   			 brgen2 = results1.getString("brwrGender2"); 
   			 brsa2 = results1.getString("brwrSA2"); 
   			 brsta2 = results1.getString("brwrStaff2");
   			 
   			 brbenfi3 = results1.getString("brwrBenefit3"); 
   			 brdob3 = results1.getString("brwrDob3"); 
   			 brgen3 = results1.getString("brwrGender3"); 
   			 brsa3 = results1.getString("brwrSA3"); 
   			 brsta3 = results1.getString("brwrStaff3"); 
   			 
   			 cha = results1.getString("channel"); 
   			 covopt = results1.getString("covgOpt"); 
   			 covter = results1.getString("coverageTerm");
   			 product = results1.getString("product"); 
   			 intpay = results1.getString("intrPaymentMP"); 
   			 jnlfe = results1.getString("jointLifeOption"); 
   			 freq = results1.getString("frequency"); 
   			 lontyp = results1.getString("loanType"); 
   			 moratum = results1.getString("moratorium"); 
   			 moratumpd = results1.getString("moratoriumPeriod"); 
   			 nobrws = results1.getString("noOfBrwrs");
   			 prefdt = results1.getString("premEffDt"); 
   			 prefubnk = results1.getString("premFundBank"); 
   			 prepayopt = results1.getString("paymentFreq"); 
   			 prepayterm = results1.getString("premPayTerm"); 			
   			 roi = results1.getString("rateOfInterest"); 
   			 slonamt = results1.getString("sanctionedLoanAmount");
   			 }
   		}
   		if(res.equals("Success"))
			{
   			soapBodyElem.setAttribute("brwrBenefit1",brbenfi1);
   	       	soapBodyElem.setAttribute("brwrDob1",brdob1);
   	    	soapBodyElem.setAttribute("brwrGender1",brgen1);
   	    	soapBodyElem.setAttribute("brwrSA1",brsa1);
   	    	soapBodyElem.setAttribute("brwrStaff1",brsta1);
   	    	
   	    	if(brdob2!=null){
   	    		 
   	    		 	soapBodyElem.setAttribute("brwrBenefit2",brbenfi2);
   	    	       	soapBodyElem.setAttribute("brwrDob2",brdob2);
   	    	    	soapBodyElem.setAttribute("brwrGender2",brgen2);
   	    	    	soapBodyElem.setAttribute("brwrSA2",brsa2);
   	    	    	soapBodyElem.setAttribute("brwrStaff2",brsta2);
   	    		 
   	    	 }
   	    	
   	    	
   	    	 if(brdob3!=null){
   	    		 	soapBodyElem.setAttribute("brwrBenefit3",brbenfi3);
   	    		 	soapBodyElem.setAttribute("brwrDob3",brdob3);
   	    		 	soapBodyElem.setAttribute("brwrGender3",brgen3);
   	    		 	soapBodyElem.setAttribute("brwrSA3",brsa3);
   	    		 	soapBodyElem.setAttribute("brwrStaff3",brsta3);
   	    	 }
   	    	soapBodyElem.setAttribute("channel",cha); 
   	    	soapBodyElem.setAttribute("coverageOption",covopt);
   	    	soapBodyElem.setAttribute("coverageTerm",covter);
   	    	soapBodyElem.setAttribute("frequency",freq);
   	    	soapBodyElem.setAttribute("intrPaymentMP",intpay);
   	    	soapBodyElem.setAttribute("jointLifeOption",jnlfe);
   	    	soapBodyElem.setAttribute("loanType",lontyp); 
   	    	soapBodyElem.setAttribute("moratorium",moratum);
   	    	soapBodyElem.setAttribute("moratoriumPeriod",moratumpd);
   	    	soapBodyElem.setAttribute("noOfBrwrs",nobrws);
   	    	soapBodyElem.setAttribute("premEffDt",prefdt);
   	    	soapBodyElem.setAttribute("premFundBank",prefubnk);
   	    	soapBodyElem.setAttribute("premPayOption",prepayopt);
   	    	soapBodyElem.setAttribute("premPayingTerm",prepayterm);
   	    	soapBodyElem.setAttribute("product",product);
   	    	soapBodyElem.setAttribute("rateOfInterest",roi);
   	    	soapBodyElem.setAttribute("sanctionedLoanAmount",slonamt);

   	        soapBodyElem.addNamespaceDeclaration("ns2", "http://www.canh.com/bigrp/calculator/schema/exception");
   	        soapBodyElem.addNamespaceDeclaration("ns4", "http://www.canh.com/bigrp/calculator/schema"); 
   	        
   	     soapMessage.saveChanges();
   	     
   	  ByteArrayOutputStream out = new ByteArrayOutputStream();
      soapMessage.writeTo(out);
       ReqMsg = new String(out.toByteArray());    	        
      out.close();
      
      
      System.out.print("Request SOAP Message= " + ReqMsg);
    //  soapMessage.writeTo(System.out);
   //   System.out.println("sysout "+System.out);
      
		
   	 //    System.out.println("Request: " + ReqMsg);  
    		
 /*  	  HttpResponse<String> response = Unirest.post("https://onlineinsurance.canarahsbclife.com/BIGRPCAL/GroupIllustrationCalculator.wsdl")
   			  .header("Content-Type", "text/xml")
   			  .header("SoapAction", "/ns4:GetIllustrationInfo")
   			  .header("cache-control", "no-cache")
   			  .header("Postman-Token", "6f9fb859-4d8d-4a23-a9d0-eab33ad4aeb7")
   			  .body("<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"><SOAP-ENV:Header/><SOAP-ENV:Body><ns4:GetIllustrationInfo xmlns:ns2=\"http://www.canh.com/bigrp/calculator/schema/exception\" xmlns:ns4=\"http://www.canh.com/bigrp/calculator/schema\" brwrBenefit1=\"GSEPGSTP\" brwrDob1=\"12-06-1966\" brwrGender1=\"M\" brwrSA1=\"1700000\" brwrStaff1=\"N\" channel=\"12\" coverageOption=\"R\" coverageTerm=\"3\" frequency=\"0\" intrPaymentMP=\"NA\" jointLifeOption=\"SB\" loanType=\"LP\" moratorium=\"NM\" moratoriumPeriod=\"NA\" noOfBrwrs=\"1\" premEffDt=\"08-03-2019\" premFundBank=\"Y\" premPayOption=\"S\" premPayingTerm=\"3\" product=\"GSEP\" rateOfInterest=\"14\" sanctionedLoanAmount=\"1700000\"/></SOAP-ENV:Body></SOAP-ENV:Envelope>")
   			  .asString();*/
   	     
   	  OkHttpClient client = new OkHttpClient();

   	MediaType mediaType = MediaType.parse("text/xml");
   	RequestBody body = RequestBody.create(mediaType, ReqMsg);
   			//.create(mediaType, "<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"><SOAP-ENV:Header/><SOAP-ENV:Body><ns4:GetIllustrationInfo xmlns:ns2=\"http://www.canh.com/bigrp/calculator/schema/exception\" xmlns:ns4=\"http://www.canh.com/bigrp/calculator/schema\" brwrBenefit1=\"GSEPGSTP\" brwrDob1=\"12-06-1966\" brwrGender1=\"M\" brwrSA1=\"1700000\" brwrStaff1=\"N\" channel=\"12\" coverageOption=\"R\" coverageTerm=\"3\" frequency=\"0\" intrPaymentMP=\"NA\" jointLifeOption=\"SB\" loanType=\"LP\" moratorium=\"NM\" moratoriumPeriod=\"NA\" noOfBrwrs=\"1\" premEffDt=\"08-03-2019\" premFundBank=\"Y\" premPayOption=\"S\" premPayingTerm=\"3\" product=\"GSEP\" rateOfInterest=\"14\" sanctionedLoanAmount=\"1700000\"/></SOAP-ENV:Body></SOAP-ENV:Envelope>");
   	Request request = new Request.Builder()
   	  .url(url1)
   	  .post(body)
   	  .addHeader("Content-Type", "text/xml")
   	  .addHeader("SoapAction", "/ns4:GetIllustrationInfo")
   	  .addHeader("cache-control", "no-cache")
   	  //.addHeader("Postman-Token", "94fc8bb4-1c22-4b09-9e10-508572482193")
   	  .build();

   	Response response = client.newCall(request).execute();
   	     
	 ResMsg = response.body().string();
	 System.out.println("Response: " + ResMsg);  
	 
   	if (response.code() == 200)
   	{
   
     InputStream is = new ByteArrayInputStream(ResMsg.getBytes());
     SOAPMessage soapResponse = MessageFactory.newInstance().createMessage(null, is);
     
     //SOAPMessage soapResponse = response.body();
     
     String status= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("status").getNodeValue();
    
     if(status.equals("SUCCESS"))
     {
     	 
     	
     String basePremium1= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("basePremium1").getNodeValue();;
     String serviceTax1= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("serviceTax1").getNodeValue();
     String sumAssured1= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("sumAssured1").getNodeValue();
     String totalPremium1= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("totalPremium1").getNodeValue();
     	 
     
     if(nobrws.equals("2"))
     {
      basePremium2= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("basePremium2").getNodeValue();;
      serviceTax2= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("serviceTax2").getNodeValue();
      sumAssured2= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("sumAssured2").getNodeValue();
      totalPremium2= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("totalPremium2").getNodeValue();
     
     }
    
     if(nobrws.equals("3"))
     {
      basePremium2= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("basePremium2").getNodeValue();;
      serviceTax2= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("serviceTax2").getNodeValue();
      sumAssured2= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("sumAssured2").getNodeValue();
      totalPremium2= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("totalPremium2").getNodeValue();
     
      basePremium3= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("basePremium3").getNodeValue();;
      serviceTax3= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("serviceTax3").getNodeValue();
      sumAssured3= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("sumAssured3").getNodeValue();
      totalPremium3= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("totalPremium3").getNodeValue();
     }
       
     	xml1=xml1+"<a>"+				
				"<basePremium1>"+ basePremium1 +"</basePremium1>"+
				"<serviceTax1>"+ serviceTax1 +"</serviceTax1>"+
				"<sumAssured1>"+ sumAssured1 +"</sumAssured1>"+
				"<totalPremium1>" + totalPremium1 +"</totalPremium1>"+
				"<basePremium2>"+ basePremium2 +"</basePremium2>"+
				"<serviceTax2>"+ serviceTax2 +"</serviceTax2>"+
				"<sumAssured2>"+ sumAssured2 +"</sumAssured2>"+
				"<totalPremium2>" + totalPremium2 +"</totalPremium2>"+
				"<basePremium3>"+ basePremium3 +"</basePremium3>"+
				"<serviceTax3>"+ serviceTax3 +"</serviceTax3>"+
				"<sumAssured3>"+ sumAssured3 +"</sumAssured3>"+
				"<totalPremium3>" + totalPremium3 +"</totalPremium3>"+"</a>";
     
			return xml1+="</Resultset>"+"|"+ReqMsg+"|"+ResMsg;
     }
     
     if(status.equals("FAILURE"))
     {
     	
     	//soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("errorMessage").getNodeName();
     	 String errorMessage= soapResponse.getSOAPBody().getFirstChild().getFirstChild().getAttributes().getNamedItem("errorMessage").getNodeValue();
     	 xml1=xml1+"<a>"+"<errorMessage>"+ errorMessage +"</errorMessage>"+"</a>";
     	
     	 return xml1+="</Resultset>"+"|"+ReqMsg+"|"+ResMsg;
     }
     
  
     xml1 +="</Resultset>";
     soapConnection.close();
   	}
		 	
 	
   	}
   	 	else
   		{
   			    			
   	 		xml1=xml1+"<a>"+"<errorMessage>"+ res +"</errorMessage>"+"</a>";
   	        xml1 +="</Resultset>"+"|"+ReqMsg+"|"+ResMsg;
   		}
   		
   	
   	
    /*		String wsURL = url1;
			URL url = new URL(wsURL);
			URLConnection connection = url.openConnection();
			//HttpsURLConnection httpscon = 
			//HttpURLConnection httpConn = (HttpURLConnection)connection;
			HttpURLConnection httpConn = (HttpURLConnection)connection;					
			ByteArrayOutputStream bout = new ByteArrayOutputStream();
			String xmlInput =ReqMsg;
			
			 
			byte[] buffer = new byte[xmlInput.length()];
			buffer = xmlInput.getBytes();
			bout.write(buffer);
			byte[] b = bout.toByteArray();
			String SOAPAction = "/ns4:GetIllustrationInfo";
			// Set the appropriate HTTP parameters.
			//httpConn.setRequestProperty("Content-Length",
			//String.valueOf(b.length));
			
			httpConn.setRequestProperty("Content-Type", "text/xml");
			httpConn.setRequestProperty("Accept", "text/xml");
			httpConn.setRequestProperty("cache-control", "no-cache");			
			httpConn.setRequestProperty("SoapAction", SOAPAction);
			httpConn.setRequestProperty("Postman-Token", "e4da685d-45d8-4fe9-b096-2cd8e63e7f21");
	
			//System.out.println("security"+ httpConn.getCipherSuite());
			httpConn.setRequestMethod("POST");
			httpConn.setDoOutput(true);
			httpConn.setDoInput(true);
			OutputStream out = httpConn.getOutputStream();
			//Write the content of the request to the outputstream of the HTTP Connection.
			out.write(b);
			out.close();
			 
			//Read the response.
			InputStreamReader isr =
			new InputStreamReader(httpConn.getInputStream());
			BufferedReader in = new BufferedReader(isr);
			 
			
			String responseString = "";
			String outputString = "";
			//Write the SOAP message response to a String.
			while ((responseString = in.readLine()) != null) {
			outputString = outputString + responseString;
			}
			//Parse the String output to a org.w3c.dom.Document and be able to reach every node with the org.w3c.dom API.
			//Document document = parseXmlFile(outputString);
			//NodeList nodeLst = document.getElementsByTagName("CibilBureauResponse");
			//String weatherResult = nodeLst.item(0).getTextContent();
			System.out.println("Reponse: " + outputString);*/
    		
    		
    		
        }	
  
	       
        
    			
    			catch (Exception e) {
            System.err.println("Error occurred while sending SOAP Request to Server");
            e.printStackTrace();
        }
        
        return xml1;
		
        
    }

    /**
     * Method used to print the SOAP Response
     */
    private static void printSOAPResponse(SOAPMessage soapResponse) throws Exception {
    	
        TransformerFactory transformerFactory = TransformerFactory.newInstance();
        Transformer transformer = transformerFactory.newTransformer();
        Source sourceContent = soapResponse.getSOAPPart().getContent();  
        System.out.print("\nResponse SOAP Message = ");
        StreamResult result = new StreamResult(System.out);
        transformer.transform(sourceContent, result);
        }
}