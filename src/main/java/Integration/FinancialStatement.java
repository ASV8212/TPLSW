package Integration;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringReader;
import java.nio.charset.StandardCharsets;
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
//import java.util.Random;
import javax.crypto.Cipher;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;
import org.bouncycastle.openssl.PEMReader;
import org.bouncycastle.util.encoders.Hex;

import Controls.GetDBData;
import Controls.InterfaceFSAAPI;
import CommonModel.DBConnection;
import CommonModel.PushtoDMSFSA;

public class FinancialStatement {

//public static String clienttransactionId = "test123";
//public static String periodFrom = "";
//public static String periodTo = "";
//public static String redirectURL = "http://www.google.com";
//public static String transactionCompleteURL= "https://webhook.site/cd9dab35-50a5-42d7-9e06-8975f9bd945a";
//public static String dataFetchMode  = "API";

	static String privateKey = "";
	static String DIGEST_ALGO = "";
	static String fsafilepath = "";
	static String transactionid = "";
	static String SharingPath = "";
	static final String ENCRYPTION_ALGO = "RSA/ECB/PKCS1Padding";

//    private static final String POST_URL = "https://apidemo.perfios.com"+"/KYCServer/api/v1/gst/start/tvsCredit";

// public static  String perfiosTransactionId="";//Just the declaration Will be updated in the HTML files generated

	public static void main(String[] args) throws Exception {

		Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());

//      new FinancialStatement().FinancialServiceCall("LSW_SFINANCIALSTMTCREATE", "14564", "startTransaction","","", "5984564vf");
//      new FinancialStatement().FinancialServiceCall("LSW_SFINANCIALSTMTCREATE", "X9CN1645871022400", "AddFinancialYear","2019","", "tds1535232");
//       	new FinancialStatement().FinancialServiceCall("LSW_SFINANCIALSTMTCREATE", "C:\\Users\\ETDU077\\Downloads\\docs\\ABS AY 2018-19.pdf", "uploadFinancialStatement","2019","X9CN1645871022400", "Testing"+new Random().nextInt(100000));
//      new FinancialStatement().FinancialServiceCall("LSW_SFINANCIALSTMTCREATE", "X9CN1645871022400", "completeTransaction","","", "tdsfds1232");
//       new FinancialStatement().FinancialServiceCall("LSW_SFINANCIALSTMTCREATE", "X9CN1645871022400", "Review","","", "tdsfds1232");
		// new FinancialStatement().FinancialServiceCall("LSW_SFINANCIALSTMTCREATE",
		// "X9CN1645871022400", "Retrieve","pdf","FSA000007", "tdsfds1232");
//     String json = createJson();
//     System.out.println("JSon value "+json );
//    sendPOST(json);       
	}

	/**
	 * @param spname
	 * @param input1
	 * @param input2
	 * @param input3
	 * @param input4
	 * @param processid
	 * @return
	 * @throws Exception
	 */
	public String FinancialServiceCall(String spname, String input1, String input2, String input3, String input4,
			String processid) throws Exception {
		Connection congst = null;
		Connection congst1 = null;
		PreparedStatement psgst = null;
		PreparedStatement psgst1 = null;
		ResultSet rsgst = null;
		ResultSet rsgst1 = null;
		FileInputStream fis1 = null;
		String URL = "";
		String XMLData = "";
		String contentType = "";
		String signature = "";
		String Result = "";
		String email = "";
		String vendorID = "";
		String Filename = "";
		String Rslt = "";
		String uniqueID = "";
		String Hit1 = "";
		try {

			// Properties props=new Properties();
			// String Filepath="G:\\TVS\\FSAFile\\1636034782831KPuMRwma0cbmpeBJ.pdf";
			// fis1 = new FileInputStream( path+"DBSource.properties");
			// props.load(fis1);

			Properties props = new Properties();

			String propFileName = "APIProp.properties";

			String fileName = "";
			fileName = System.getProperty("catalina.base");
			fileName = String.valueOf(fileName) + "/conf/" + propFileName;
			String path = fileName;
			fis1 = new FileInputStream(path);
			props.load(fis1);

			privateKey = props.getProperty("FSAprivatekey");
			DIGEST_ALGO = props.getProperty("DIGEST_ALGO");
			fsafilepath = props.getProperty("FSAFILELOCATION");
			SharingPath = props.getProperty("FEPUPLDUsername");

			if (congst == null)
				congst = DBConnection.getConnection(null);

			psgst = congst.prepareStatement("{ call " + spname + "(?,?,?,?,?) }");
			psgst.setString(1, input1);
			psgst.setString(2, input2);
			psgst.setString(3, input3);
			psgst.setString(4, input4);
			psgst.setString(5, processid);

			rsgst = psgst.executeQuery();
			ResultSetMetaData rsmd = rsgst.getMetaData();
			int colCount = rsmd.getColumnCount();

			while (rsgst.next()) {
				URL = rsgst.getString(1);
				XMLData = rsgst.getString(2);
				contentType = rsgst.getString(3);
				email = rsgst.getString(4);
				vendorID = rsgst.getString(5);
				Filename = rsgst.getString(6);
				uniqueID = rsgst.getString(7);
				transactionid = uniqueID;
			}

			if (colCount > 1) {

				Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());// for bouncy jar

				if (input2.equals("uploadFinancialStatement")) {

					XMLData = SharingPath + "//" + XMLData;
					// XMLData=Filepath;
//			    	  String pwd = "";
					email = "tvsCredit";
					String pwdEncrypted = encrypt(email, ENCRYPTION_ALGO, buildPublicKey(privateKey));

					String myHTML =

							"<html>\n" +

									" <body>\n" +

									"  <form name='autoform' method='post' ENCTYPE='multipart/form-data' action='" + URL
									+ "'>\n" +

									"   <fieldset><legend>Upload the file one at a time</legend>\n" +

									"   File: <input type='file' name='file'><br>\n" +

									"   Password: <input type='text' name='password' value='" + pwdEncrypted
									+ "'><br>\n" +

									"   vendorId: <input type='text' name='vendorId' value='" + vendorID + "'><br>\n" +

									"   <input type='submit' name='submit' value='submit'>\n" +

									"  </form>\n" +

									" </body>\n" +

									"</html>\n";

					// Result=createFile(Filename, myHTML);

					Result = "<Header>" + "<APITYPE>" + Filename + "</APITYPE>" + "<URL>" + URL + "</URL>"
							+ "<SIGNATURE>" + pwdEncrypted + "</SIGNATURE>" + "</Header>";
//			    	String finaloutput="password="+signature+"&vendorId="+vendorID;
					Rslt = InterfaceFSAAPI.InterfaceFSAUpload(URL, XMLData, contentType, vendorID);

				} else {
					String emailAddress = encrypt(email, ENCRYPTION_ALGO, buildPublicKey(privateKey));
					XMLData = XMLData.replaceAll("\n", "");
					XMLData = XMLData.replaceAll("emailAdd", emailAddress);

					System.out.println("XMLData Data " + XMLData);

					signature = BankingData.getSignature(ENCRYPTION_ALGO, DIGEST_ALGO, buildPrivateKey(privateKey),
							XMLData);

					System.out.println("Signature value " + processid + "-" + signature);

					String finaloutput = "payload=" + XMLData + "&signature=" + signature;
					
					String version = "";
					ArrayList<String> Data1 = new ArrayList<String>();
					Data1 = GetDBData.Call("DOCVRNO", "", "", "", "", "Sam_sGetCOMSeqID");
					version = Data1.get(0);
					Map<String, String> map = new HashMap<String, String>();
					map.put("prcsid", processid);
					map.put("DocName", "FSA" + input4+input1);
					map.put("CusID", input4);
					map.put("attachname", "FSA" + input4+input1 + ".xlsx");
					map.put("attachdescrptn", "FSA" + input4+input1);
					map.put("formName", "FSA");
					map.put("version", version);
					map.put("fileName", "FSA" + input4+input1 + ".xlsx");
					map.put("filesize", "25");
					
					Rslt = InterfaceFSAAPI.InterfaceFSAService(URL, finaloutput, contentType, signature,input2,map);

					System.out.println("Response: " + Rslt);

					String myHTML = "<html>\n" + "	<body onload='document.autoform.submit();'>\n"
							+ "		<form name='autoform' method='post' action='" + URL + "'>\n"
							+ "			<input type='hidden' name='payload' value='" + XMLData + "'>\n"
							+ "			<input type='hidden' name='signature' value='" + signature + "'>\n"
							+ "		</form>\n" + "	</body>\n" + "</html>\n";

//		  	String Status=null;
					// Result=createFile(Filename, myHTML);
					Result = "<Header>" + "<APITYPE>" + Filename + "</APITYPE>" + "<URL>" + URL + "</URL>" + "<PAYLOAD>"
							+ XMLData + "</PAYLOAD>" + "<SIGNATURE>" + signature + "</SIGNATURE>" + "</Header>";
				}
				String[] resultSplit = Rslt.split("~");

				String Status = null;
				String Message = null;

				Status = resultSplit[0];

				Message = resultSplit[1];
				 
				
				
				 
				// if(congst1==null)
				// congst1=DBConnection.getConnection(null);

				
				  psgst1 = congst.prepareStatement("{ call " + spname + "_UPD" +"(?,?,?,?,?) }");
				  psgst1.setString(1, Status); psgst1.setString(2, Message);
				  psgst1.setString(3, input2); psgst1.setString(4, "");
				  psgst1.setString(5,uniqueID);
				  
				  rsgst1 = psgst1.executeQuery();
				  ResultSetMetaData rsmd1 = rsgst1.getMetaData();
				  int colCount1 = rsmd1.getColumnCount();
				  
				  while (rsgst1.next()) { Hit1 = rsgst1.getString(1);
				  
				  }
				  
				  Result = Hit1;
				 
			}
		} catch (Exception egst) {
			Result = "Exception";
			egst.printStackTrace();
		} finally {
//    		DBConnection.closeConnection(null, psgst1, null);
//    		DBConnection.closeConnection(congst, psgst, rsgst);
		}
		return Result;
	}

	// convert private key into public Key

	private static PublicKey buildPublicKey(String privateKeySerialized) {

		StringReader reader = new StringReader(privateKeySerialized);
		PublicKey pKey = null;
		try {
			PEMReader pemReader = new PEMReader(reader);
			KeyPair keyPair = (KeyPair) pemReader.readObject();
			pKey = keyPair.getPublic();
			pemReader.close();
		} catch (Exception i) {
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
		} catch (IOException i) {
			i.printStackTrace();
		}
		return pKey;
	}

	private static String createFile(String classification, String myHTML) {
		String filename = fsafilepath.replace("XXFSAXX", classification + transactionid);

		try {
			PrintWriter out = new PrintWriter(filename);
			out.print(myHTML);
			out.close();
			System.out.println("Successfully created file " + filename);

		} catch (Exception e) {
			System.out.println("Error while creating file " + filename);
			e.printStackTrace();
			return "Failed";
		}
		return "Success";
	}

	private static String replace(String string, String string2, String classification) {
		// TODO Auto-generated method stub
		return null;
	}

	// Gstnumber and username Encryption

	public static String encrypt(String raw, String encryptAlgo, Key k) {
		String strEncrypted = "";
		try {
			Cipher cipher = Cipher.getInstance(encryptAlgo);
			cipher.init(Cipher.ENCRYPT_MODE, k);
			byte[] encrypted = cipher.doFinal(raw.getBytes("UTF-8"));
			byte[] encoded = Hex.encode(encrypted);
			strEncrypted = new String(encoded);
			// System.out.println(encryptgstNumber);

		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return strEncrypted;
	}

	// Signature Generation 1
	public static String getSignature(String json, String org_key) {

		try {
			String BeforeSignature = "PERFIOS-HMACSHA256" + " " + json;
			Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
			SecretKeySpec secret_Organisationkey = new SecretKeySpec(org_key.getBytes(), "HmacSHA256");
			sha256_HMAC.init(secret_Organisationkey);
			String Signature = Base64.encodeBase64String(sha256_HMAC.doFinal(BeforeSignature.getBytes()));
			System.out.println(Signature);
			return Signature;
		} catch (Exception e) {
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
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return strDigest;
	}
}
