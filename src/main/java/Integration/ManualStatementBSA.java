package Integration;

import static java.lang.Integer.toHexString;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.StringReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.InvalidKeyException;
import java.security.KeyPair;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Security;
import java.security.Signature;
import java.security.SignatureException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Properties;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParserFactory;

import org.apache.commons.codec.digest.DigestUtils;
import org.bouncycastle.openssl.PEMReader;
import org.bouncycastle.util.encoders.Hex;
import org.json.JSONObject;
import org.json.XML;
import org.w3c.dom.Document;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import Controls.GetDBData;
import Controls.InterfaceBSAMS;

public class ManualStatementBSA {
	static String privateKey = "";
	static final String ENCRYPTION_ALGO = "SHA256withRSA/PSS";

	public static String initManualStatement(String prcsid, String cusid, String bankid) {
		String resp = "";
		try {
			privateKey = ManualStatementBSA.readPrivateKey();
			Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());// for bouncy jar
			String url = "";
			String payLoad = "";
			String token = "";
			String host = "";
			String intrresp = "";
			String xml = "<row><prcsid>" + prcsid + "</prcsid><cusid>" + cusid + "</cusid><bankid>" + bankid
					+ "</bankid><hittype>Initiate Transaction</hittype></row>";
			ArrayList<String> data = new ArrayList<String>();
			data = GetDBData.Call(prcsid, cusid, bankid, "Initiate Transaction", xml, "LSW_SBSAMANUALSTATEMENTCREATE");

			url = data.get(0);
			payLoad = data.get(1);
			token = data.get(2);
			host = data.get(3);
			String xPerfiosDate = ManualStatementBSA.date();
			resp = InterfaceBSAMS.interfaceCallBSAMS(url, payLoad, host, xPerfiosDate, "POST");
			if (!isXMLValid(resp.split("~")[1])) {
				resp = resp.split("~")[0] + "~<row>" + resp.split("~")[1] + "</row>";
			}
			intrresp = resp;
			ArrayList<String> data1 = new ArrayList<String>();

			data1 = GetDBData.Call(token, "", resp.split("~")[0], "Initiate Transaction",
					resp.split("~")[1].replace("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>", ""),
					"LSW_SBSAMANUALSTATEMENTCREATE_UPD");
			resp = data1.get(0);
			if (intrresp.split("~")[0].equals("Success")) {
				institutionList();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return resp;
	}

	public static String uploadManualStatement(String prcsid, String cusid, String bankid, String dmsid,String insID) {
		String resp = "";
		try {
			Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
			privateKey = ManualStatementBSA.readPrivateKey();
			String xPerfiosDate = ManualStatementBSA.date();

			String intrresp = "";
			String fileName = "";
			String sharingPath = "";
			fileName = System.getProperty("catalina.base");
			Properties props = new Properties();
			String path = "";
			FileInputStream fis1 = null;
			String propFileName = "APIProp.properties";
			fileName = String.valueOf(fileName) + "/conf/" + propFileName;
			path = fileName;
			fis1 = new FileInputStream(path);
			props.load(fis1);
			sharingPath = props.getProperty("FEPUPLDUsername");
			fis1.close();

			String url = "";
			String filepath = "";
			String token = "";
			String host = "";
			String xml = "<row><prcsid>" + prcsid + "</prcsid><cusid>" + cusid + "</cusid><bankid>" + bankid
					+ "</bankid><dmsid>" + dmsid + "</dmsid></row>";
			ArrayList<String> data = new ArrayList<String>();
			data = GetDBData.Call("", "", "", "Upload File", xml, "LSW_SBSAMANUALSTATEMENTCREATE");
			url = data.get(0);
			filepath = data.get(1);
			token = data.get(2);
			host = data.get(3);
			filepath = sharingPath + filepath;
			resp = InterfaceBSAMS.uploadStatement(url, filepath, xPerfiosDate, host,"POST");

			if (!isXMLValid(resp.split("~")[1])) {
				resp = resp.split("~")[0] + "~<row>" + resp.split("~")[1] + "</row>";
			}
			intrresp = resp;
			ArrayList<String> data1 = new ArrayList<String>();

			data1 = GetDBData.Call(token, "", resp.split("~")[0], "Upload File",
					resp.split("~")[1].replace("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>", ""),
					"LSW_SBSAMANUALSTATEMENTCREATE_UPD");
			resp = data1.get(0);

			if (intrresp.split("~")[0].equals("Success")) {
				JSONObject json = XML.toJSONObject(intrresp.split("~")[1]);
				resp = processManualStatement(prcsid, cusid, bankid, json.getJSONObject("file").getString("fileId"),insID);
			}

		} catch (IOException | InvalidKeyException | NoSuchAlgorithmException | SignatureException e) {
			e.printStackTrace();
		}

		return resp;
	}

	public static String processManualStatement(String prcsid, String cusid, String bankid, String fileid,String insID) {
		String resp = "";
		Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
		try {
			privateKey = ManualStatementBSA.readPrivateKey();
			String url = "";
			String token = "";
			String host = "";
			String payload = "";
			String xPerfiosDate = ManualStatementBSA.date();

			String xml = "<row><prcsid>" + prcsid + "</prcsid><cusid>" + cusid + "</cusid><bankid>" + bankid
					+ "</bankid><fileid>" + fileid + "</fileid><institutionId>"+insID+"</institutionId></row>";
			ArrayList<String> data = new ArrayList<String>();
			data = GetDBData.Call("", "", "", "Process Statement", xml, "LSW_SBSAMANUALSTATEMENTCREATE");
			url = data.get(0);
			token = data.get(1);
			host = data.get(2);
			payload = data.get(3);

			resp = InterfaceBSAMS.interfaceCallBSAMS(url, payload, host, xPerfiosDate, "POST");

			if (!isXMLValid(resp.split("~")[1])) {
				resp = resp.split("~")[0] + "~<row>" + resp.split("~")[1] + "</row>";
			}
			ArrayList<String> data1 = new ArrayList<String>();

			data1 = GetDBData.Call(token, "", resp.split("~")[0], "Process Statement",
					resp.split("~")[1].replace("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>", ""),
					"LSW_SBSAMANUALSTATEMENTCREATE_UPD");
			resp = data1.get(0);

		} catch (IOException e) {
			e.printStackTrace();
		}

		return resp;
	}

	private static void institutionList() {
		Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
		try {
			privateKey = ManualStatementBSA.readPrivateKey();
			String url = "";
			String resp = "";
			String token = "";
			String host = "";
			ArrayList<String> data = new ArrayList<String>();
			data = GetDBData.Call("", "", "", "List Institutions", "", "LSW_SBSAMANUALSTATEMENTCREATE");
			url = data.get(0);
			token = data.get(1);
			host = data.get(2);
			String xPerfiosDate = ManualStatementBSA.date();
			if(!url.equals("Institution Exists"))
			{
				resp = InterfaceBSAMS.listInstitution(url, host, xPerfiosDate, "GET");

				if (!isXMLValid(resp.split("~")[1])) {
					resp = resp.split("~")[0] + "~<row>" + resp.split("~")[1] + "</row>";
				}
				ArrayList<String> data1 = new ArrayList<String>();

				data1 = GetDBData.Call(token, "", resp.split("~")[0], "List Institutions",
						resp.split("~")[1].replace("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>", ""),
						"LSW_SBSAMANUALSTATEMENTCREATE_UPD");
				resp = data1.get(0);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static String reportGen(String prcsid, String cusid, String bankid) {
		Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
		String resp = "";
		try
		{
			privateKey = ManualStatementBSA.readPrivateKey();
			String url = "";
			String token = "";
			String host = "";
			String xml = "<row><prcsid>" + prcsid + "</prcsid><cusid>" + cusid + "</cusid><bankid>" + bankid
					+ "</bankid></row>";
			ArrayList<String> data = new ArrayList<String>();
			data = GetDBData.Call("", "", "", "Report Generation", xml, "LSW_SBSAMANUALSTATEMENTCREATE");
			url = data.get(0);
			token = data.get(1);
			host = data.get(2);
			String xPerfiosDate = ManualStatementBSA.date();
			resp = InterfaceBSAMS.reportGen(url, host, xPerfiosDate, "POST", "");
			ArrayList<String> data1 = new ArrayList<String>();

			data1 = GetDBData.Call(token, "", resp.split("~")[0], "Report Generation",
					resp.split("~")[1].replace("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>", ""),
					"LSW_SBSAMANUALSTATEMENTCREATE_UPD");
			resp = data1.get(0);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return resp;
	}
	
	public static String reportRetrv(String callbackresp) {
		Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
		String resp = "";
		try
		{
			privateKey = ManualStatementBSA.readPrivateKey();
			String url = "";
			String token = "";
			String host = "";
			String prcs = "";
			String transid = "";
			String versn = "";
			String xml = callbackresp;
			ArrayList<String> data = new ArrayList<String>();
			data = GetDBData.Call("", "", "", "Retrieve Reports", xml, "LSW_SBSAMANUALSTATEMENTCREATE");
			url = data.get(0);
			token = data.get(1);
			host = data.get(2);
			prcs = data.get(3);
			transid = data.get(4);
			String xPerfiosDate = ManualStatementBSA.date();
			String downloadReportAtLocation = getDownloadLocation();
			data.clear();
			data = GetDBData.Call("DOCVRNO", "", "", "", "", "Sam_sGetCOMSeqID");
			versn = data.get(0);
			resp = InterfaceBSAMS.RetrieveReport(url, host, xPerfiosDate, downloadReportAtLocation, "POST",prcs,transid,versn);
			ArrayList<String> data1 = new ArrayList<String>();

			data1 = GetDBData.Call(token, "", resp.split("~")[0], "Report Generation",
					resp.split("~")[1].replace("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>", ""),
					"LSW_SBSAMANUALSTATEMENTCREATE_UPD");
			resp = data1.get(0);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return resp;
	}

	public static String sha256(String a) {
		String payloadHash = a;
		return DigestUtils.sha256Hex(payloadHash);
	}

	public static String date() {
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");
		LocalDateTime now = LocalDateTime.now();
		String time = dtf.format(now);
		return time.subSequence(0, 8) + "T" + time.subSequence(8, 14) + "Z";

	}

	public static String uriEncode(final CharSequence input) {
		final StringBuilder result = new StringBuilder();

		for (int i = 0; i < input.length(); i++) {
			final char ch = input.charAt(i);
			if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9') || ch == '_'
					|| ch == '-' || ch == '~' || ch == '.' || ch == '/') {
				result.append(ch);
			} else {
				result.append(toHexString(ch));
			}
		}
		return result.toString();

	}

	public static PrivateKey buildPrivateKey(String privateKeySerialized) {
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

	public static PublicKey buildPublicKey(String privateKeySerialized) {
		StringReader reader = new StringReader(privateKeySerialized);
		PublicKey pKey = null;

		try {
			PEMReader pemReader = new PEMReader(reader);
			KeyPair keyPair = (KeyPair) pemReader.readObject();
			pKey = keyPair.getPublic();
			pemReader.close();
		} catch (IOException i) {
			i.printStackTrace();
		}
		return pKey;
	}

	public static String encrypt(String raw, PrivateKey k, PublicKey k2)
			throws InvalidKeyException, SignatureException, UnsupportedEncodingException, NoSuchAlgorithmException {
		Signature privateSignature = Signature.getInstance(ManualStatementBSA.ENCRYPTION_ALGO);
		privateSignature.initSign(k);
		privateSignature.update(raw.getBytes("UTF-8"));
		byte[] signature = privateSignature.sign();
		byte[] encoded = Hex.encode(signature);
		String str = new String(encoded);
		// Verify Signature using PublicKey
		privateSignature.initVerify(k2);
		privateSignature.update(raw.getBytes("UTF-8"));

		return str;
	}

	public static String readPrivateKey() throws IOException {
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
		/*
		 * String localFile = prop.getProperty("ManualBSAPrivateKey"); BufferedReader br
		 * = new BufferedReader(new FileReader(localFile)); StringBuilder sb = new
		 * StringBuilder(); String line = br.readLine();
		 * 
		 * while (line != null) { sb.append(line); if (line.split("|")[0] != "T") {
		 * sb.append(System.lineSeparator()); } line = br.readLine(); } br.close();
		 * return sb.toString();
		 */
		return prop.getProperty("ManualBSAPrivateKey");
	}

	public static String signatureCreator(String endPointURL, String payload, String date, String perfiosTransactionId,
			String host,String reqMethod)
			throws InvalidKeyException, SignatureException, UnsupportedEncodingException, NoSuchAlgorithmException {
		Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
		String Method = reqMethod;
		String uriEncodedQuery = "";
		String sha256Payload = ManualStatementBSA.sha256(payload);
		String xPerfiosDate = date;
		String CanonicalRequest = Method + "\n" + ManualStatementBSA.uriEncode(endPointURL) + "\n" + uriEncodedQuery
				+ "\n" + "host:" + host + "\n" + "x-perfios-content-sha256:" + sha256Payload + "\n" + "x-perfios-date:"
				+ xPerfiosDate + "\n" + "host;x-perfios-content-sha256;x-perfios-date" + "\n" + sha256Payload;

		String StringToSign = "PERFIOS-RSA-SHA256" + "\n" + xPerfiosDate + "\n"
				+ ManualStatementBSA.sha256(CanonicalRequest);

		String Checksum = ManualStatementBSA.sha256(StringToSign);

		String Signature = encrypt(Checksum, ManualStatementBSA.buildPrivateKey(privateKey),
				ManualStatementBSA.buildPublicKey(privateKey));

		return Signature;

	}

	public static boolean isXMLValid(String string) {
		try {
			SAXParserFactory.newInstance().newSAXParser().getXMLReader()
					.parse(new InputSource(new StringReader(string)));
			return true;
		} catch (ParserConfigurationException | SAXException | IOException ex) {
			return false;
		}
	}
	
	public static String getDownloadLocation() throws IOException {
		URL songPath = CommonModel.FileUploadHandler.class.getResource("");
		Properties prop = new Properties();
		String[] pathArr = songPath.toString().split("file:/|/apache");
		FileInputStream fis = null;

		String Path = pathArr[1];
		 //fis = new FileInputStream(String.valueOf(Path) +"/wflow/app_datasource.properties");
		fis = new FileInputStream("C:/Titus/Office Project/Chola/Build/Build Related/ThemeproLO_Works/Product/wflow/app_datasource.properties");
		
		if (fis != null) {
			prop.load(fis);
		}
		return prop.getProperty("FEPUPLDUsername");
	}

}
