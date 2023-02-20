package Integration;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.InvalidKeyException;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.cert.CertificateException;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;
import java.security.interfaces.RSAPrivateKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.Base64;
import java.util.Properties;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;

//import com.itextpdf.text.pdf.codec.Base64;

import CommonModel.DBConnection;
import Controls.NamastheAPIService;
import Controls.WFCall;

public class NamastheAPI {
	
	public static String NamastheAPIService(String SpName,String Type,String PRCSID,String CUSID) throws Exception {
	    String JsonData = "";
	    String contenttype = "";
	    String Authtoken = "";
	    String ResMsg = "";
	    String APiURL = "";
	    String Encoded="";
	    String processId="";
	    String Token = "";
	    String Intrresponse = "";
	    Connection con=null;
	    PreparedStatement pr=null;
	    PreparedStatement pr1=null;
	    ResultSet results =null;
	    ResultSet results1 =null;
	    try {
	    	
			if(con==null)
			{
				con=DBConnection.getConnection(null);
			}
	      
		/*	if(ServiceType.equals("Create"))
			{
				byte [] bs= new byte[1024];
				bs=Files.readAllBytes(Paths.get(Input1));
				byte [] encoding= new byte[1024];
				encoding= Base64.getEncoder().encode(bs);
				Encoded=new String(encoding);
				System.out.println("Encoded value "+ Encoded);
			} 
	  */
	      pr=con.prepareStatement("{ call " + SpName+ "(?,?,?,?,?) }");
	      pr.setString(1, Type);
	      pr.setString(2, "");
	      pr.setString(3, CUSID);
	      pr.setString(4, "");
	      pr.setString(5, PRCSID);
	      results = pr.executeQuery();
	      ResultSetMetaData rsmd = results.getMetaData();
	      int colCount = rsmd.getColumnCount();

	      while (results.next()) {
	    	APiURL = results.getString(1);
	        JsonData = results.getString(2);
	        contenttype = results.getString(3);  
	        Authtoken = results.getString(4);
	        Token = results.getString(5);
	      } 

	      if(colCount>=1){

		      ResMsg=NamastheAPIService.InterfacePostCall(APiURL, JsonData, contenttype, Authtoken);

		      System.out.println("Response: " + ResMsg);
		      
			  	String Status=null;
			  	String Message=null;
			  	
			  	String [] resultSplit=ResMsg.split("~");
			  	
			  	Status=resultSplit[0];
			  	
			  	Message=resultSplit[1];
			  		  	
			  	pr1=con.prepareStatement("{ call " + SpName+"_UPD" + "(?,?,?,?,?) }");
			  	
				pr1.setString(1, Type+"_Output");
				pr1.setString(2, CUSID);
				pr1.setString(3, Message);
				pr1.setString(4, Token);
				pr1.setString(5, PRCSID);
				pr1.executeQuery();  
				results1 = pr1.executeQuery();
				ResultSetMetaData rsmd1 = results1.getMetaData();
			      int colCount1 = rsmd1.getColumnCount();

			      while (results1.next()) {
			    	  Type = results1.getString(1); 
			      }
			    
			      if(Status.equals("Success"))
			      {
			        new NamastheAPI();
			        Intrresponse = NamastheAPI.NamastheAPIService1 (SpName,Type, PRCSID, CUSID);
			      }
	      }
	      
	    } catch (SQLException e) {
	      
	      e.printStackTrace();     
	      ResMsg = e.toString();
	      System.out.println("Response: " + ResMsg);
	      return ResMsg;
	    } 
	    catch (Exception e)
		{
	    	e.printStackTrace();
	        ResMsg = e.toString();
	        System.out.println("Response: " + ResMsg);
	        return ResMsg;
		}
	    finally
	    {
	    	DBConnection.closeConnection(null,pr1,null);
	    	DBConnection.closeConnection(con,pr,results);
	    }
	    return ResMsg;
		}
	
	public static String NamastheAPIService1(String SpName,String Type,String PRCSID,String CUSID) throws Exception {
	    String JsonData = "";
	    String contenttype = "";
	    String Authtoken = "";
	    String ResMsg = "";
	    String APiURL = "";
	    String Encoded="";
	    String processId="";
	    String Token = "";
	    String Intrresponse = "";
	    Connection con=null;
	    PreparedStatement pr=null;
	    PreparedStatement pr1=null;
	    ResultSet results =null;
	    ResultSet results1 =null;
	    try {
	    	
			if(con==null)
			{
				con=DBConnection.getConnection(null);
			}
	      
		/*	if(ServiceType.equals("Create"))
			{
				byte [] bs= new byte[1024];
				bs=Files.readAllBytes(Paths.get(Input1));
				byte [] encoding= new byte[1024];
				encoding= Base64.getEncoder().encode(bs);
				Encoded=new String(encoding);
				System.out.println("Encoded value "+ Encoded);
			} 
	  */
	      pr=con.prepareStatement("{ call " + SpName+ "(?,?,?,?,?) }");
	      pr.setString(1, Type);
	      pr.setString(2, "");
	      pr.setString(3, CUSID);
	      pr.setString(4, "");
	      pr.setString(5, PRCSID);
	      results = pr.executeQuery();
	      ResultSetMetaData rsmd = results.getMetaData();
	      int colCount = rsmd.getColumnCount();

	      while (results.next()) {
	    	APiURL = results.getString(1);
	        JsonData = results.getString(2);
	        contenttype = results.getString(3);  
	        Authtoken = results.getString(4);
	        Token = results.getString(5);
	      } 

	      if(colCount>=1){
	    	  
	    	  String encrytxt = getEncryptedData(new File(loadPrivateKey()),JsonData);

		      ResMsg=NamastheAPIService.InterfacePostCall1(APiURL, encrytxt, contenttype, Authtoken);

		      System.out.println("Response: " + ResMsg);
		      
			  	String Status=null;
			  	String Message=null;
			  	
			  	String [] resultSplit=ResMsg.split("~");
			  	
			  	Status=resultSplit[0];
			  	
			  	Message=resultSplit[1];
			  		  	
			  	pr1=con.prepareStatement("{ call " + SpName+"_UPD" + "(?,?,?,?,?) }");
			  	
				pr1.setString(1, Type+"_Output");
				pr1.setString(2, CUSID);
				pr1.setString(3, Message);
				pr1.setString(4, Token);
				pr1.setString(5, PRCSID);
				pr1.executeQuery();  
				results1 = pr1.executeQuery();
				ResultSetMetaData rsmd1 = results1.getMetaData();
			      int colCount1 = rsmd1.getColumnCount();

			      while (results1.next()) {
			    	  Type = results1.getString(1); 
			      }
			    
			      if(Status.equals("Success"))
			      {
			        new NamastheAPI();
			        Intrresponse = NamastheAPI.NamastheAPIService (SpName,Type, PRCSID, CUSID);
			      }
	      }
	      
	    } catch (SQLException e) {
	      
	      e.printStackTrace();     
	      ResMsg = e.toString();
	      System.out.println("Response: " + ResMsg);
	      return ResMsg;
	    } 
	    catch (Exception e)
		{
	    	e.printStackTrace();
	        ResMsg = e.toString();
	        System.out.println("Response: " + ResMsg);
	        return ResMsg;
		}
	    finally
	    {
	    	DBConnection.closeConnection(null,pr1,null);
	    	DBConnection.closeConnection(con,pr,results);
	    }
	    return ResMsg;
		}
	
	public static String loadPrivateKey() throws IOException {
		String propFileName = "APIProp.properties";
		InputStream inputStream = null;
		Properties prop = new Properties();

		String fileName = "";
		fileName = System.getProperty("catalina.base");
		fileName = String.valueOf(fileName) + "/conf/" + propFileName;
		inputStream = new FileInputStream(fileName);
		if (inputStream != null) {
			prop.load(inputStream);
		}
		return prop.getProperty("NamasteKeyLocation");
	}
	
	  private static String getEncryptedData(String filePath, String data)
		      throws FileNotFoundException, CertificateException, NoSuchAlgorithmException,
		      InvalidKeyException, NoSuchPaddingException, BadPaddingException, IllegalBlockSizeException {
		    FileInputStream fileInputStream = new FileInputStream(filePath);
		    CertificateFactory certificateFactory = CertificateFactory.getInstance("X509");
		    X509Certificate x509Certificate =
		        (X509Certificate) certificateFactory.generateCertificate(fileInputStream);
		    PublicKey publicKey = x509Certificate.getPublicKey();
		    System.out.println("cert..................................................." + x509Certificate);
		    System.out.println("key content............................................." + publicKey);
		    Cipher cipher = Cipher.getInstance("RSA");
		    cipher.init(Cipher.ENCRYPT_MODE, publicKey);
		    byte[] encStr = cipher.doFinal(file.getBytes());
		    String encryptedData = new String(Base64.getEncoder().encode(encStr));
		    System.out.println("Encrypted Data " + encryptedData);
		    return encryptedData;
		  }
	
	/*public static String loadPrivateKey() throws IOException {
		String propFileName = "APIProp.properties";
		InputStream inputStream = null;
		Properties prop = new Properties();

		String fileName = "";
		fileName = System.getProperty("catalina.base");
		fileName = String.valueOf(fileName) + "/conf/" + propFileName;
		inputStream = new FileInputStream(fileName);
		if (inputStream != null) {
			prop.load(inputStream);
		}
		return prop.getProperty("NamasteKeyLocation");
	}

	public static RSAPrivateKey readRSAPrivateKey(File file) throws Exception {
		String key = new String(Files.readAllBytes(file.toPath()), Charset.defaultCharset());

		String privateKeyPEM = key.replace("-----BEGIN CERTIFICATE-----", "").replaceAll(System.lineSeparator(), "")
				.replace("-----END CERTIFICATE-----", "");
		
		byte[] encoded = Base64.decode(privateKeyPEM);
		
		KeyFactory keyFactory = KeyFactory.getInstance("RSA");
		PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(encoded);
		return (RSAPrivateKey) keyFactory.generatePrivate(keySpec);
	}
	
	/*public PublicKey readRSAPrivateKey(String file) throws Exception {
		byte[] keyBytes = Files.readAllBytes(new File(file).toPath());
		X509EncodedKeySpec spec = new X509EncodedKeySpec(keyBytes);
		KeyFactory RSAPrivateKey = KeyFactory.getInstance("RSA");
		return RSAPrivateKey.generatePublic(spec);
	}*

	public static String encrypt(String plainText, RSAPrivateKey publicKey) throws Exception {
		Cipher encryptCipher = Cipher.getInstance("RSA");

		encryptCipher.init(Cipher.ENCRYPT_MODE, publicKey);

		byte[] cipherText = encryptCipher.doFinal(plainText.getBytes("UTF-8"));

		return java.util.Base64.getEncoder().encodeToString(cipherText);
	}*/
}
