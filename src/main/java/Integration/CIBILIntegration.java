package Integration;

import Integration.CIBILIntegration;
import CommonModel.DBConnection;
import Decoder.BASE64Decoder;

import com.sun.org.apache.xml.internal.serialize.OutputFormat;
import com.sun.org.apache.xml.internal.serialize.XMLSerializer;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.StringReader;
import java.io.StringWriter;
import java.io.Writer;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

public class CIBILIntegration {

	public String appno;
	public String cusid;
	private String DBSrc;
	
	public void appno(String appno) {
		this.appno = appno;
	}
	
	public void cusid(String cusid) {
		this.cusid = cusid;
	}
	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}
	public String CIBIL() throws IOException {
	    String XML = "";
	    
	    String RTVDOCXML = "";
	    String RTVDOCSOAPACTION = "";
	    
	    String DOCXML = "";
	    String DOCSOAPACTION = "";
	    
	    String Appno = appno;
	    String Cusid = cusid;
	    String responseString = "";
	    String outputString = "";
	    String Json = "";
	    String ApplicatonID = "";
	    String FileContent = "";
	    String url1 = "";
	    String WSDLURL = "";
	    String DocName = "";
	    String ST = "";
	    Connection con = DBConnection.getConnection(DBSrc);
	    try {
	      Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

	      CallableStatement ps = con.prepareCall("{call LSW_sGetCIBILxml(?,?,?,?,?) }");
	      
	      ps.setString(1, Appno + "|" + Cusid);
	      ps.setString(2, "");
	      ps.setString(3, "");
	      ps.setString(4, "");
	      ps.setString(5, "");
	      
	      ResultSet results = ps.executeQuery();
	      ResultSetMetaData rsmd = results.getMetaData();
	      rsmd.getColumnCount();
	      
	      while (results.next()) {
	        results.getString(1);
	        results.getString(2);
	        results.getString(3);
	        results.getString(4);
	        results.getString(5);
	        results.getString(6);
	        WSDLURL = results.getString(7);
	        XML = results.getString(8);
	      } 



	      
	      String wsURL = WSDLURL;
	      URL url = new URL(wsURL);
	      URLConnection connection = url.openConnection();
	      HttpURLConnection httpConn = (HttpURLConnection)connection;
	      ByteArrayOutputStream bout = new ByteArrayOutputStream();
	      String xmlInput = XML;

	      
	      byte[] buffer = new byte[xmlInput.length()];
	      buffer = xmlInput.getBytes();
	      bout.write(buffer);
	      byte[] b = bout.toByteArray();
	      String SOAPAction = "http://tempuri.org/IExternalSolutionExecution/ExecuteXMLString";
	      
	      httpConn.setRequestProperty("Content-Length", 
	          String.valueOf(b.length));
	      httpConn.setRequestProperty("Content-Type", "text/xml; charset=utf-8");
	      httpConn.setRequestProperty("SoapAction", SOAPAction);
	      httpConn.setRequestMethod("POST");
	      httpConn.setDoOutput(true);
	      httpConn.setDoInput(true);
	      OutputStream out = httpConn.getOutputStream();
	      
	      out.write(b);
	      out.close();


	      
	      InputStreamReader isr = 
	        new InputStreamReader(httpConn.getInputStream());
	      BufferedReader in = new BufferedReader(isr);

	      
	      while ((responseString = in.readLine()) != null) {
	        outputString = String.valueOf(outputString) + responseString;
	      }



	      
	      System.out.println("Reponse: " + outputString);

	    //  con = DBConnection.getConnection("DBSrc");
	      
	      ps = con.prepareCall("{call LSW_SCIBILBReadXMLResponse(?,?,?,?,?,?) }");
	      
	      ps.setString(1, outputString);
	      ps.setString(2, xmlInput);
	      ps.setString(3, Appno);
	      ps.setString(4, Cusid);
	      ps.setString(5, "CIBIL-1");
	      ps.setString(6, "");
	      
	      results = ps.executeQuery();
	      rsmd = results.getMetaData();

	      
	      while (results.next()) {
	        RTVDOCXML = results.getString(1);
	        RTVDOCSOAPACTION = results.getString(2);
	        Json = results.getString(3);
	        ApplicatonID = results.getString(4);
	        ST = results.getString(5);
	      } 
	      
	      if (ST.equals("Success"))
	      {
	        outputString = "";
	        
	        wsURL = WSDLURL;
	        url = new URL(wsURL);
	        connection = url.openConnection();
	        httpConn = (HttpURLConnection)connection;
	        bout = new ByteArrayOutputStream();
	        xmlInput = RTVDOCXML;

	        
	        buffer = new byte[xmlInput.length()];
	        buffer = xmlInput.getBytes();
	        bout.write(buffer);
	        b = bout.toByteArray();
	        SOAPAction = RTVDOCSOAPACTION;
	        
	        httpConn.setRequestProperty("Content-Length", 
	            String.valueOf(b.length));
	        httpConn.setRequestProperty("Content-Type", "text/xml; charset=utf-8");
	        httpConn.setRequestProperty("SoapAction", SOAPAction);
	        httpConn.setRequestMethod("POST");
	        httpConn.setDoOutput(true);
	        httpConn.setDoInput(true);
	        out = httpConn.getOutputStream();
	        
	        out.write(b);
	        out.close();


	        
	        isr = 
	          new InputStreamReader(httpConn.getInputStream());
	        in = new BufferedReader(isr);

	        
	        while ((responseString = in.readLine()) != null) {
	          outputString = String.valueOf(outputString) + responseString;
	        }

	        System.out.println("RTV DOC Reponse: " + outputString);

	        //con = DBConnection.getConnection("DBSrc");
	        
	       /* ps = con.prepareCall("{call LSW_SCIBILBReadXMLResponse(?,?,?,?,?,?) }");
	        
	        ps.setString(1, outputString);
	        ps.setString(2, xmlInput);
	        ps.setString(3, Appno);
	        ps.setString(4, Cusid);
	        ps.setString(5, "CIBIL-2");
	        ps.setString(6, ApplicatonID);
	        
	        results = ps.executeQuery();
	        rsmd = results.getMetaData();

	        
	        while (results.next()) {
	          DOCXML = results.getString(1);
	          DOCSOAPACTION = results.getString(2);
	          Json = results.getString(3);
	        } 

	        outputString = "";
	        
	        wsURL = WSDLURL;
	        url = new URL(wsURL);
	        connection = url.openConnection();
	        httpConn = (HttpURLConnection)connection;
	        bout = new ByteArrayOutputStream();
	        xmlInput = DOCXML;

	        
	        buffer = new byte[xmlInput.length()];
	        buffer = xmlInput.getBytes();
	        bout.write(buffer);
	        b = bout.toByteArray();
	        SOAPAction = DOCSOAPACTION;
	        
	        httpConn.setRequestProperty("Content-Length", 
	            String.valueOf(b.length));
	        httpConn.setRequestProperty("Content-Type", "text/xml; charset=utf-8");
	        httpConn.setRequestProperty("SoapAction", SOAPAction);
	        httpConn.setRequestMethod("POST");
	        httpConn.setDoOutput(true);
	        httpConn.setDoInput(true);
	        out = httpConn.getOutputStream();
	        
	        out.write(b);
	        out.close();


	        
	        isr = 
	          new InputStreamReader(httpConn.getInputStream());
	        in = new BufferedReader(isr);

	        
	        while ((responseString = in.readLine()) != null) {
	          outputString = String.valueOf(outputString) + responseString;
	        }



	        
	        System.out.println("DOC Reponse: " + outputString);

*/


	        
	        //con = DBConnection.getConnection("DBSrc");
	        
	        ps = con.prepareCall("{call LSW_SCIBILBReadXMLResponse(?,?,?,?,?,?) }");
	        
	        ps.setString(1, outputString);
	        ps.setString(2, xmlInput);
	        ps.setString(3, Appno);
	        ps.setString(4, Cusid);
	        ps.setString(5, "CIBIL-3");
	        ps.setString(6, ApplicatonID);
	        
	        results = ps.executeQuery();
	        rsmd = results.getMetaData();

	        
	        while (results.next()) {
	          Json = results.getString(1);
	          FileContent = results.getString(2);
	          DocName = results.getString(3);
	        } 


	        
	        BASE64Decoder decoder = new BASE64Decoder();
	        byte[] decodedBytes = decoder.decodeBuffer(FileContent);


	        
	        DBConnection.class.getResource("");
	  
	        
	        String propFileName = "DBSource.properties";
			String AttchURL="";
			
			InputStream inputStream;
			Properties prop = new Properties();
			
			String FileName="";
	        FileName=System.getProperty("catalina.base");
			FileName=FileName+"/conf/"+propFileName;
			//System.out.println(FileName);		
			inputStream = new FileInputStream(FileName);
			
			// inputStream = getClass().getClassLoader().getResourceAsStream(propFileName);
			 
			  if (inputStream != null) {
		            prop.load(inputStream);                
		            AttchURL = prop.getProperty("AttchURL");	          
		          
		            inputStream.close();
		          } else {
		            throw new java.io.FileNotFoundException("property file '" + inputStream + 
		              "' not found in the classpath");
		          }			
			 
	        Path sFile2path = Paths.get(String.valueOf(AttchURL) + "Attachments" + "/CIBIL/" + Appno + "/" + Cusid + "/", new String[0]);
	        Files.createDirectories(sFile2path, new java.nio.file.attribute.FileAttribute[0]);
	        
	        String uploadFile = String.valueOf(AttchURL) + "Attachments" + "/CIBIL/" + Appno + "/" + Cusid + "/" + DocName + ".html";
	        System.out.print("File save path : " + uploadFile);
	        new File(uploadFile);
	        url1 = "/Attachments/CIBIL/" + Appno + "/" + Cusid + "/" + DocName + ".html";
	        url1 = url1.replace("/", "\\");
        
	        FileOutputStream file = new FileOutputStream(uploadFile);
	        file.write(decodedBytes);
	        file.close();
	        
	      //  con = DBConnection.getConnection("DBSrc");
	        
	        ps = con.prepareCall("{call LSW_SCIBILBReadXMLResponse(?,?,?,?,?,?) }");
	        
	        ps.setString(1, "<Result>" + url1 + "</Result>");
	        ps.setString(2, "");
	        ps.setString(3, Appno);
	        ps.setString(4, Cusid);
	        ps.setString(5, "CIBIL-4");
	        ps.setString(6, ApplicatonID);
	        
	        results = ps.executeQuery();	
	        rsmd = results.getMetaData();

	        
	        while (results.next()) {
	          Json = results.getString(1);
	        }
	      
	      }
	    }
	    catch (ClassNotFoundException e) {
	      
	      e.printStackTrace();
	    } catch (SQLException e) {
	      
	      e.printStackTrace();
	    } 
	    
	    return Json;
	  }













































	  
	  public String formatXML(String unformattedXml) {
	    try {
	      Document document = parseXmlFile(unformattedXml);
	      OutputFormat format = new OutputFormat(document);
	      format.setIndenting(true);
	      format.setIndent(3);
	      format.setOmitXMLDeclaration(true);
	      Writer out = new StringWriter();
	      XMLSerializer serializer = new XMLSerializer(out, format);
	      serializer.serialize(document);
	      return out.toString();
	    } catch (IOException e) {
	      throw new RuntimeException(e);
	    } 
	  }
	  
	  private Document parseXmlFile(String in) {
	    try {
	      DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
	      DocumentBuilder db = dbf.newDocumentBuilder();
	      InputSource is = new InputSource(new StringReader(in));
	      return db.parse(is);
	    } catch (ParserConfigurationException e) {
	      throw new RuntimeException(e);
	    } catch (SAXException e) {
	      throw new RuntimeException(e);
	    } catch (IOException e) {
	      throw new RuntimeException(e);
	    } 
	  }

}
