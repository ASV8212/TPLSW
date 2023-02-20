package Integration;

import java.io.FileInputStream;
import org.json.XML;
import org.json.JSONObject;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringReader;
import java.security.Key;
import java.security.KeyPair;
import java.security.MessageDigest;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Security;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.Properties;

import javax.crypto.Cipher;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;
import org.bouncycastle.openssl.PEMReader;
import org.bouncycastle.util.encoders.Hex;

import CommonModel.DBConnection;
import Controls.InterfaceBSAAPI;

public class BankingData {

//public static String clienttransactionId = "test123";
//public static String periodFrom = "";
//public static String periodTo = "";
//public static String redirectURL = "http://www.google.com";
//public static String transactionCompleteURL= "https://webhook.site/cd9dab35-50a5-42d7-9e06-8975f9bd945a";
//public static String dataFetchMode  = "API";
	
static String privateKey="";
static String DIGEST_ALGO ="";
static final String ENCRYPTION_ALGO = "RSA/ECB/PKCS1Padding";

//    private static final String POST_URL = "https://apidemo.perfios.com"+"/KYCServer/api/v1/gst/start/tvsCredit";
 
   
// public static  String perfiosTransactionId="";//Just the declaration Will be updated in the HTML files generated
   
   
    /*public static void main(String[] args) throws Exception  {
//    	FileInputStream fis1=null; 
    	try{
//    		Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
//	    Properties props=new Properties();
//	    String path="C:\\Customisation\\CUST\\workspace\\TVSCredit\\src\\";
//	    fis1 = new FileInputStream( path+"DBSource.properties");
//	    props.load(fis1);
////	    System.out.println("privatekey "+ props.getProperty("BSAprivatekey"));
////	    System.out.println("DIGEST_ALGO "+ props.getProperty("DIGEST_ALGO"));
//	    privateKey=props.getProperty("BSAprivatekey");
//	    DIGEST_ALGO=props.getProperty("DIGEST_ALGO");
////       System.out.println("Output "+getSignature(ENCRYPTION_ALGO,DIGEST_ALGO,buildPrivateKey(privateKey),"<payload><apiVersion>2.1</apiVersion><perfiosTransactionId>Q3DQ1645251830578</perfiosTransactionId><reportType>json</reportType><txnId>BSAREF000004</txnId><vendorId>tvsCredit</vendorId></payload>"));
//       System.out.println("Output "+getSignature(ENCRYPTION_ALGO,DIGEST_ALGO,buildPrivateKey(privateKey),"<payload><apiVersion>2.1</apiVersion><txnId>BSAREF000004</txnId><vendorId>tvsCredit</vendorId></payload>"));
//      new BankingData().BankingServiceCall("LSW_SBANKINGDATACREATE", "manojkumarp@themeprotech.com", "Statement","", "testing123");
      new BankingData().BankingServiceCall("LSW_SBANKINGDATACREATE", "BSAREF000085", "GetStatus", "","", "Testing123534");
//     String json = createJson();
//     System.out.println("JSon value "+json );
//    sendPOST(json);
			}catch(Exception dex)
			{
			dex.printStackTrace();
			}
    }*/
    
    public String BankingServiceCall(String spname,String input1,String input2,String input3,String input4,String processid) throws Exception
    {
    	Connection congst=null;
    	Connection congst1=null;
    	PreparedStatement psgst=null;
    	PreparedStatement psgst1=null;
    	ResultSet rsgst=null;
    	FileInputStream fis1=null;
    	String URL="";
    	String XMLData="";
    	String contentType="";
    	String signature="";
    	String Result="";
    	String email="";
    	String Status="";
    	String Message="";
    	String uniqueid="";
    	String TokenID="";
    	try
    	{
    		
            Properties props=new Properties();
    	    
    	    String propFileName = "APIProp.properties";
			String fileName = "";
			fileName = System.getProperty("catalina.base");
			fileName = String.valueOf(fileName) + "/conf/" + propFileName;
			String path=fileName;
			fis1 = new FileInputStream(path);
    	    props.load(fis1);
    	    
    	    privateKey=props.getProperty("BSAprivatekey");
    	    DIGEST_ALGO=props.getProperty("DIGEST_ALGO");
    	    
    	    String Sharingpath = props.getProperty("FEPUPLDUsername");
    	    
    	    System.out.println("Net Banking Sharing Path "+ Sharingpath);
    	    
    	    //final String Location=props.getProperty("BSAFILELOCATION");
    		if(congst==null)
    		congst=DBConnection.getConnection(null);
    		
    		psgst=congst.prepareStatement("{ call " + spname+ "(?,?,?,?,?) }");
    		psgst.setString(1, input1);
    		psgst.setString(2, input2);
    		psgst.setString(3, input3);
    		psgst.setString(4, input4);
    		psgst.setString(5, processid);
    		
    		rsgst=psgst.executeQuery();
			ResultSetMetaData rsmd = rsgst.getMetaData();
		    int colCount = rsmd.getColumnCount();
		    	  
		    	while(rsgst.next())
		    	{
		    		URL=rsgst.getString(1);
		    		XMLData=rsgst.getString(2);
		    		contentType=rsgst.getString(3);
		    		email=rsgst.getString(4);
		    		uniqueid=rsgst.getString(5);
		    	}
		    if(colCount>1){
		    	
		    Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());//for bouncy jar
		    
	    	String emailAddress = encrypt(email, ENCRYPTION_ALGO, buildPublicKey(privateKey));
	        XMLData = XMLData.replaceAll("\n", "");
	    	XMLData=XMLData.replaceAll("emailAdd", emailAddress);
	        	        
	        signature=BankingData.getSignature(ENCRYPTION_ALGO,DIGEST_ALGO,buildPrivateKey(privateKey),XMLData);
	        
	        System.out.println("Signature value "+signature);
	        
	        if(input2.equals("Statement")||input2.equals("NetBanking")){
		    String myHTML =
		            "<html>\n" +
		            "	<body onload='document.autoform.submit();'>\n" +
		            "		<form name='autoform' method='post' action='"+URL+"'>\n" +
		            "			<input type='hidden' name='payload' value='"+ XMLData + "'>\n" +
		            "			<input type='hidden' name='signature' value='" + signature + "'>\n" +
		            "		</form>\n" +
		            "	</body>\n" +
		            "</html>\n";
		    
		  	//Result=createFile(contentType, myHTML); 

		  	Result=contentType+"~"+URL+"~"+XMLData+"~"+signature;
	        }
		  	else
		  	{
		  		
		  		 XMLData="payload="+XMLData+"&signature="+signature;
		  		 
		  		 Result=InterfaceBSAAPI.InterfaceBSACall(URL, XMLData, input2+"!@#"+input1, Sharingpath+"!@#"+processid);
		  	
			  	String [] resultSplit=Result.split("~");
			  	
			  	Status=resultSplit[0];	
			  	Message=resultSplit[1];
			  	TokenID=resultSplit[2];
			  	
			  	if(congst1==null)
		    		congst1=DBConnection.getConnection(null);
			  	
			  	psgst1=congst.prepareStatement("{ call " + spname+"_UPD" + "(?,?,?,?,?) }");
			  	
			  	psgst1.setString(1, Status);
			  	psgst1.setString(2, Message);
			  	psgst1.setString(3, "");
			  	psgst1.setString(4, "");
			  	psgst1.setString(5, uniqueid);
				
			  	psgst1.executeQuery();
			  	
			  	if(Status.equals("Success") && input2.equals("GetStatus"))
			  	{
			  	String Val=  XML.toJSONObject(Message).toString();
	             
			  	JSONObject obj=new JSONObject(Val).getJSONObject("Status").getJSONObject("Part");
//			  	System.out.println("OBJ "+obj.toString());
			  	String perfiosID=obj.getString("perfiosTransactionId");
			  	
			  	System.out.println("perfiosID "+perfiosID);
			  	
			  		Result=new BankingData().BankingServiceCall("LSW_SBANKINGDATACREATE",input1,"Retrieve_JSON",perfiosID+"~"+input3,input4,processid);
			  		
			  		String [] resultSplit1=Result.split("~");
				  	
				  	Status=resultSplit1[0];
				  	
				  	Message=resultSplit1[1];
				  	
				  	if(Status.equals("Success") && input2.equals("GetStatus")) 
				  	{
				  	
				  		Result=new BankingData().BankingServiceCall("LSW_SBANKINGDATACREATE",input1,"Retrieve_XLSX",perfiosID+"~"+input3,input4,processid);
				  		
				  		String [] resultSplit2=Result.split("~");

					  	Status=resultSplit2[0];
					  	
					  	Message=resultSplit2[1];
					  	
					  	TokenID=resultSplit2[2];
				  	}
				  	
			  	}
			  	
			  	Result=Status+"~"+Message+"~"+TokenID+"~";
		  	 }
		    } 	  
    	}catch(Exception egst)
    	{
    		Result="Exception"+"~"+egst.getMessage()+"~~";
    		egst.printStackTrace();
    	}
    	finally
    	{
    		DBConnection.closeConnection(congst1, psgst1, null);
    		DBConnection.closeConnection(congst, psgst, rsgst);
    	}
    	return Result;
    }

  //convert private key into public Key

    private static PublicKey buildPublicKey(String privateKeySerialized) {
    
     StringReader reader = new StringReader(privateKeySerialized);
          PublicKey pKey = null;
          try {
              PEMReader pemReader = new PEMReader(reader);
              KeyPair keyPair = (KeyPair) pemReader.readObject();
              pKey = keyPair.getPublic();
              pemReader.close();
          }
          catch (Exception i) {
              i.printStackTrace();
          }
          return pKey;
      }
    
    private static PrivateKey buildPrivateKey(String privateKeySerialized) {
    																																																																																																																																																																																																																																																																				StringReader reader = new StringReader(privateKeySerialized);
        PrivateKey pKey = null;
        try {
            PEMReader pemReader = new PEMReader(reader);
            KeyPair keyPair = (KeyPair) pemReader.readObject();
            pKey = keyPair.getPrivate();
            pemReader.close();
        }
        catch (IOException i) {
            i.printStackTrace();
        }
        return pKey;
    }

/*    
private static String createFile(String classification,
            String myHTML) {
String filename = "C:\\Manoj Kumar\\TVS\\" + classification + ".html";

try {
PrintWriter out = new PrintWriter(filename);
out.print(myHTML);
out.close();
System.out.println("Successfully created file " + filename);

}catch (Exception e){
System.out.println("Error while creating file " + filename);
e.printStackTrace();
return "Failed";
}
return "Success";
}*/
    //Gstnumber and username Encryption  
    
    public static String encrypt(String raw, String encryptAlgo, Key k) {
          String strEncrypted = "";
          try {
              Cipher cipher = Cipher.getInstance(encryptAlgo);
              cipher.init(Cipher.ENCRYPT_MODE, k);
              byte[] encrypted = cipher.doFinal(raw.getBytes("UTF-8"));
              byte[] encoded = Hex.encode(encrypted);
              strEncrypted = new String(encoded);
            //  System.out.println(encryptgstNumber);
             
          }
          catch (Exception ex) {
              ex.printStackTrace();
          }
          return strEncrypted;
      }
    
    
      // Signature Generation 1
    public static String getSignature(String json,String org_key) {

        try {
              String BeforeSignature = "PERFIOS-HMACSHA256"+" "+json;
              Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
              SecretKeySpec secret_Organisationkey = new SecretKeySpec(org_key.getBytes(), "HmacSHA256");
              sha256_HMAC.init(secret_Organisationkey);
              String Signature = Base64.encodeBase64String(sha256_HMAC.doFinal(BeforeSignature.getBytes()));
              System.out.println(Signature);
         return Signature;
        }catch (Exception e){
        	e.printStackTrace();
        	return null;

        }

       }
    
    // Signature Generation 2
    public static String getSignature(String encryptAlgo, String digestAlgo, Key k, String xml) {
        String dig = makeDigest(xml, digestAlgo);
        return encrypt(dig, encryptAlgo, k);
    }

    public static String makeDigest(String payload, String digestAlgo) {
        String strDigest = "";
        try {
            MessageDigest md = MessageDigest.getInstance(digestAlgo);
            md.update(payload.getBytes("UTF-8"));
            byte[] digest = md.digest();
            byte[] encoded = Hex.encode(digest);
            strDigest = new String(encoded);
        }
        catch (Exception ex) {
            ex.printStackTrace();
        }
        return strDigest;
    }
}
