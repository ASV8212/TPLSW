package Integration;

import java.util.ArrayList;
import java.util.Properties;
import java.security.Key;
import java.security.KeyPair;
import java.security.PublicKey;
import java.security.Security;
import java.io.FileInputStream;
import java.io.StringReader;
import java.net.URL;

import javax.crypto.Cipher;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;
import org.bouncycastle.openssl.PEMReader;
import org.bouncycastle.util.encoders.Hex;
import org.codehaus.jettison.json.JSONObject;

import CommonModel.DBConnection;
import Controls.GetDBData;
import Controls.InterfaceGSTAPI;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;


public class GSTAnalysis {
//  public static String organisation ="tvsCredit";
//public static String clienttransactionId = "test123";
//public static String periodFrom = "";
//public static String periodTo = "";
//public static String redirectURL = "http://www.google.com";
//public static String transactionCompleteURL= "https://webhook.site/cd9dab35-50a5-42d7-9e06-8975f9bd945a";
//public static String dataFetchMode  = "API";
static String privateKey="";
static String org_key ="";
static final String ENCRYPTION_ALGO = "RSA/ECB/PKCS1Padding";

//    private static final String POST_URL = "https://apidemo.perfios.com"+"/KYCServer/api/v1/gst/start/tvsCredit";
 
   
// public static  String perfiosTransactionId="";//Just the declaration Will be updated in the HTML files generated
   
   
//    public static void main(String[] args) throws Exception  {
////    	String outputval="";
//       Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
//       String output=new GSTAnalysis().GSTServiceCall("LSW_SGSTANALYSISCREATE", "12312", "Service", "92123_HomeEqutity_process");
//
//       JSONObject jsonvalue=new JSONObject(output);    
//
//       System.out.println("JSon value "+jsonvalue.getString("transactionId"));
//		String fetchoutput=InterfaceGSTAPI.InterfaceGSTStatus("https://apidemo.perfios.com/KYCServer/api/v1/gst/status/tvsCredit/"+jsonvalue.getString("transactionId"));
//		System.out.println("Fetch Output Value "+fetchoutput);
//		JSONObject js=new JSONObject(fetchoutput.split("~")[1]);
//		System.out.println("Result "+js.getString("message"));
		
//		String fetchoutput1=InterfaceGSTAPI.InterfaceGSTRetrieve("https://apidemo.perfios.com/KYCServer/api/v1/gst/report/tvsCredit/PGVSSKCLV6ERPJFVQFZ4L","PGVSSKCLV6ERPJFVQFZ4L","C:\\Manoj Kumar\\TVS\\GSTAnalysis\\");
//		System.out.println("fetchoutput1 "+fetchoutput1 );
		
//		int i;
//		FileInputStream file=new FileInputStream("C:\\Manoj Kumar\\TVS\\GSTAnalysis\\Extract\\PGIOUYMNLODRZ4VQYSHQR"+".json");
//          while((i=file.read()) !=-1){
//          outputval+=(char)i; 
//         }
//          file.close();
//			System.out.println("Output "+outputval);
//		File fd= new File("C:\\Manoj Kumar\\TVS\\PGVSSKCLV6ERPJFVQFZ4L.zip");
//		FileOutputStream df= new FileOutputStream(fd);
//
//			df.write(fetchoutput1.getBytes());
//			df.close();
   
//    }
    
    public String GSTFetchCall(String spname,String Input1,String Input2,String Input3)throws Exception
    {
    	String Result="";
    	FileInputStream fis=null;
    	String StatusURL="";
    	String ReportURL="";
    	String Location="";
    	String Outputval="";
    	String docToken="";
    	try
    	{
    	    Properties props=new Properties();
            String propFileName = "APIProp.properties";
    	    
    	    String fileName = "";
			fileName = System.getProperty("catalina.base");
			fileName = String.valueOf(fileName) + "/conf/" + propFileName;
			String path=fileName;
    	    fis = new FileInputStream(path);
    	    props.load(fis);
    	    
    	    System.out.println("privatekey "+ props.getProperty("GSTprivatekey"));
    	    System.out.println("orgkey"+ props.getProperty("GSTorgkey"));
    	    StatusURL=props.getProperty("GSTSTATUSURL");
    	    ReportURL=props.getProperty("GSTREPORTURL");
    	    Location=props.getProperty("GSTFILELOCATION");
    	    String Sharingpath = props.getProperty("FEPUPLDUsername");
    	    
    		if(Input1.equals("Status"))
    		{
    			System.out.println("Status-Perfios Transaction ID  "+Input2);
    			String fetchoutput=InterfaceGSTAPI.InterfaceGSTStatus(StatusURL+Input2);
    			System.out.println("Fetch Output Value "+fetchoutput.split("~")[1]);
    			
    			if(fetchoutput.split("~")[0].equals("Success")){
    			JSONObject js=new JSONObject(fetchoutput.split("~")[1]);
    			Result=js.getString("message");
    			}
    			else
    				Result="Failed";
    			
    		}
    		else if(Input1.equals("Retrieve"))
    		{
    			System.out.println("Status-Perfios Transaction ID  "+Input2);
    			String fetchoutput1=InterfaceGSTAPI.InterfaceGSTRetrieve(ReportURL+Input2, Input2,Location);
    			System.out.println("Fetch Output Value "+fetchoutput1);
    			
    			if(fetchoutput1.split("~")[0].equals("Success")){
    				Result=fetchoutput1.split("~")[1];
    				int i;
	    			FileInputStream file=new FileInputStream(Location+"Extract\\"+Input2+".json");
	                  while((i=file.read()) !=-1){
	                	  Outputval+=(char)i; 
	                 }
	                  file.close();
    				
	                  System.out.println("Output "+Outputval);
    				
    				Connection conx=null;
    				PreparedStatement psx=null;
    				try{
    					
    					if(conx==null)
    						conx=DBConnection.getConnection(null);
    			    		
    					psx=conx.prepareStatement("{ call " + spname+ "(?,?,?,?,?) }");
    					psx.setString(1, Outputval);
    					psx.setString(2, "JsonInput");
    					psx.setString(3, "");
    					psx.setString(4, "");
    					psx.setString(5, Input3);
    			    		
    					psx.executeQuery();
    					
    				}catch(Exception sec)
    				{
    					sec.printStackTrace();
    				}
    				finally
    				{
    		    		DBConnection.closeConnection(conx, psx, null);
    				}
    				
    				final Connection con = DBConnection.getConnection((String)null);
  				  
  				  Properties props1=new Properties();
  				  
  				  URL songPath = CommonModel.FileUploadHandler.class.getResource("");
					String[] pathArr = songPath.toString().split("file:/|/apache");
					FileInputStream fis1 = null;
					
					String Path = pathArr[1];
					
					fis1 = new FileInputStream(String.valueOf(Path) +"/wflow/app_datasource.properties");
  				
					if (fis != null) {
						props1.load(fis1);
						fis1.close();
					}
					
  		//String Sharingpath = props1.getProperty("UPLDPHYLOC");
  		String Origin = props1.getProperty("Origin");
  		
  		ArrayList<String> Data_LOG = new ArrayList<String>();

  	    PreparedStatement proc_stmt = con.prepareStatement("{ call sam_sAttachmentDMS1(?,?,?) }");
  	    proc_stmt.setString(1, "xlsx~40~\\GSTAnalysis\\Extract\\"+Input2+".xlsx");
  	    proc_stmt.setString(2, "GSTAnalysis");
  	    proc_stmt.setString(3, Input2+".xlsx");
  	        		
  	        ResultSet results=proc_stmt.executeQuery(); 
  	        
  	        while(results.next()) 
  	            {
  	               docToken=results.getString("DOCTOKEN");
  	               System.out.println("Data Saved Suceessfully");
  	            }
    			}
    			else
    				Result="Failed";
    		}
    			
    	}catch(Exception exd)
    	{
    		exd.printStackTrace();
    		Result="Exception";
    	}
    	return Result+'~'+docToken+Input2+".xlsx";
    }
    
    public String GSTServiceCall(String spname,String input1,String input2,String processid) throws Exception
    {
    	Connection congst=null;
    	PreparedStatement psgst=null;
    	PreparedStatement psgst1=null;
    	ResultSet rsgst=null;
    	FileInputStream fis1=null;
    	String URL="";
    	String JSONData="";
    	String contentType="application/json";
    	String signature="";
    	String Result="";
    	String gstNumber="";
    	String username="";
    	String Uniqref="";
    	try
    	{
    		
    	    Properties props=new Properties();
    	    
    	    String path="";
    	    String propFileName = "APIProp.properties";
			String fileName = "";
			
			fileName=System.getProperty("catalina.base");
			fileName=fileName+"/conf/"+propFileName;
			//System.out.println(FileName);		
		    path=fileName;
		    fis1 = new FileInputStream(path);
			props.load(fis1);
    	    
    	    
    	    System.out.println("privatekey "+ props.getProperty("GSTprivatekey"));
    	    System.out.println("orgkey"+ props.getProperty("GSTorgkey"));
    	    privateKey=props.getProperty("GSTprivatekey");
    	    org_key=props.getProperty("GSTorgkey");
    	    
    		if(congst==null)
    		congst=DBConnection.getConnection(null);
    		
    		psgst=congst.prepareStatement("{ call " + spname+ "(?,?,?,?,?) }");
    		psgst.setString(1, input1);
    		psgst.setString(2, input2);
    		psgst.setString(3, "");
    		psgst.setString(4, "");
    		psgst.setString(5, processid);
    		
    		rsgst=psgst.executeQuery();
			ResultSetMetaData rsmd = rsgst.getMetaData();
		    int colCount = rsmd.getColumnCount();
		    	  
		    	while(rsgst.next())
		    	{
		    		URL=rsgst.getString(1);
		    		JSONData=rsgst.getString(2);
		    		contentType=rsgst.getString(3);
		    		gstNumber=rsgst.getString(4);
		    		username=rsgst.getString(5);
		    		Uniqref=rsgst.getString(6);
		    	}

			      
		    if(colCount>1){
		    Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());//for bouncy jar
		    
	    	String encryptgstNumber = encrypt(gstNumber, ENCRYPTION_ALGO, buildPublicKey(privateKey));
	        
	        String encryptusername = encrypt(username, ENCRYPTION_ALGO, buildPublicKey(privateKey));
	        
	        JSONData=JSONData.replace("encryptgstNumber", encryptgstNumber).replace("encryptusername",encryptusername);
		     
	        System.out.println("Json Data "+Uniqref +"-"+JSONData);
	        signature=GSTAnalysis.getSignature(JSONData,org_key);
	        
	        System.out.println("Signature value "+Uniqref +"-"+signature);
	        
	        String Rslt=InterfaceGSTAPI.InterfaceGSTCall(URL, JSONData, contentType, signature);
	        
		    System.out.println("Response: " + Rslt);
		      
		  	String Status=null;
		  	String Message=null;
		  	
		  	String [] resultSplit=Rslt.split("~");
		  	
		  	Status=resultSplit[0];
		  	
		  	Message=resultSplit[1];
		  		  	
		  	psgst1=congst.prepareStatement("{ call " + spname+"_UPD" + "(?,?,?,?,?) }");
		  	
		  	psgst1.setString(1, Status);
		  	psgst1.setString(2, Message);
		  	psgst1.setString(3, "");
		  	psgst1.setString(4, "");
		  	psgst1.setString(5, Uniqref);
			
		  	psgst1.executeQuery();
		  	
		  	Result=Message;
    		} 	  
    	}catch(Exception egst)
    	{
    		Result="Exception";
    		egst.printStackTrace();
    	}
    	finally
    	{
    		DBConnection.closeConnection(null, psgst1, null);
    		DBConnection.closeConnection(congst, psgst, rsgst);
    	}
    	return Result;
    }
//    public static String createJson() {
//      String encryptgstNumber = encrypt(gstNumber, ENCRYPTION_ALGO, buildPublicKey(privateKey));
//      
//       String encryptusername = encrypt(username, ENCRYPTION_ALGO, buildPublicKey(privateKey));
//       String create_Json = "{\"clientTransactionId\":\""+clienttransactionId+"\",\"gstNumber\":\""+encryptgstNumber+"\",\"username\":\""+encryptusername+"\",\"periodFrom\":\""+periodFrom+"\",\"periodTo\":\""+periodTo+"\",\"redirectUrl\": \""+redirectURL+"\",\"transactionCompleteUrl\":\""+transactionCompleteURL+"\",\"dataFetchMode\":\""+dataFetchMode+"\"}";
//      System.out.println(create_Json); 
//  return create_Json;
//  }
    
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
    
    
      // Signature Generation
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
}

