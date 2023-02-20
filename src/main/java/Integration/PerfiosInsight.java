package Integration;


import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.Security;
import java.security.SignatureException;
import java.security.interfaces.RSAKey;
import java.security.interfaces.RSAPrivateKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Controls.GetDBData;
import Controls.PerfiosInsightInterfaceCall;

public class PerfiosInsight {

	static final String ENCRYPTION_ALGO = "SHA256withRSA/PSS";
	static String privateKey = "";

	static String perfiosTransactionId = "";
	static String filePath = "";
	static String fileId = "";
	static String password = "";

	public static String perfiosInsightHandler(HttpServletRequest request, HttpServletResponse response)
			throws IOException, NoSuchAlgorithmException {
		Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
		
		privateKey = PefiosEncDec.readPrivateKey();
		
		String hitno = request.getParameter("hitno");
		String prcsid = request.getParameter("prcsid");
		String institutionId = request.getParameter("institutionId");
		String endhitno = request.getParameter("endhitno");
		password = request.getParameter("password");
		filePath = request.getParameter("filePath");
		String resp = "";
		String endPoint = "";
		String reqMethod = "";
		String payloadOrEmptyString = "";
		String token = "";
		String host = "";
		String procName = "LSW_SperfiosInsight";
		ArrayList<String> data = new ArrayList<String>();
		try {
			if (hitno.equals("Initiate Transaction")) {
				data = GetDBData.Call(hitno, prcsid, institutionId, "", "", procName);
				endPoint = data.get(0);
				reqMethod = data.get(1);
				host = data.get(2);
				payloadOrEmptyString = data.get(3);
				token = data.get(4);

				resp = initiateAPI(endPoint.split(host)[1], payloadOrEmptyString, reqMethod, host, endPoint, hitno);
			}
			if ((!resp.isEmpty() && hitno.equals("Initiate Transaction") && resp.split("~")[1].equals("200")) || (resp.isEmpty() && hitno.equals("Upload File"))) {
				hitno = "Upload File";
				if(!resp.isEmpty())
				{
					perfiosTransactionId = resp.split("~")[0].substring(90, 107);
				}
				data = GetDBData.Call(hitno, prcsid, perfiosTransactionId, resp, token, procName);
				endPoint = data.get(0);
				reqMethod = data.get(1);
				host = data.get(2);
				token = data.get(4);
				if(resp.isEmpty())
				{
					perfiosTransactionId = data.get(3);
				}
				if(!endhitno.equals("Initiate Transaction"))
				{
					resp = uploadAPI(filePath, endPoint, host, endPoint.split(host)[1], reqMethod);
				}
				else
				{
					return resp;
				}
			}
			if ((!resp.isEmpty() && hitno.equals("Upload File") && resp.split("~")[1].equals("200")) || (resp.isEmpty() && hitno.equals("Process Statement"))) {
				hitno = "Process Statement";
				if(!resp.isEmpty())
				{
					fileId = resp.substring(69, 109);
				}
				data = GetDBData.Call(hitno, prcsid, perfiosTransactionId + "~" + fileId + "~" + password, resp, token,
						procName);
				endPoint = data.get(0);
				reqMethod = data.get(1);
				host = data.get(2);
				payloadOrEmptyString = data.get(3);
				token = data.get(4);
				if(resp.isEmpty())
				{					
					perfiosTransactionId = token.split("~")[1];
					fileId = token.split("~")[2];
					token = token.split("~")[0];
				}
				if(!endhitno.equals("Upload File"))
				{
					resp = processAPI(fileId, endPoint, host, endPoint.split(host)[1], reqMethod, hitno,
						payloadOrEmptyString);
				}
				else
				{
					return resp;
				}
			}
			if ((!resp.isEmpty() && hitno.equals("Process Statement") && resp.split("~")[1].equals("200")) || (resp.isEmpty() && hitno.equals("Report Generation"))) {
				hitno = "Report Generation";

				data = GetDBData.Call(hitno, prcsid, perfiosTransactionId, resp, token, procName);
				endPoint = data.get(0);
				reqMethod = data.get(1);
				host = data.get(2);
				token = data.get(4);
				if(resp.isEmpty())
				{					
					perfiosTransactionId = token.split("~")[1];
					fileId = token.split("~")[2];
					token = token.split("~")[0];
				}
				if(!endhitno.equals("Process Statement"))
				{
					resp = reportGenerationAPI(endPoint, host, endPoint.split(host)[1], reqMethod, hitno);
				}
				else
				{
					return resp;
				}
			}
			if ((!resp.isEmpty() && hitno.equals("Report Generation") && resp.split("~")[1].equals("202")) || (resp.isEmpty() && hitno.equals("Retrieve Reports"))) {
				hitno = "Retrieve Reports";

				data = GetDBData.Call(hitno, prcsid, perfiosTransactionId, resp, token, procName);
				endPoint = data.get(0);
				reqMethod = data.get(1);
				host = data.get(2);
				token = data.get(4);
				if(resp.isEmpty())
				{					
					perfiosTransactionId = token.split("~")[1];
					fileId = token.split("~")[2];
					token = token.split("~")[0];
				}
				if(!endhitno.equals("Report Generation"))
				{
				resp = retrieveReportAPI(endPoint, host, endPoint.split(host)[1], reqMethod, hitno);
				
				data = GetDBData.Call("Retrieve Reports Response", prcsid, "", resp, token, procName);
				resp = data.get(0);
				}
				else
				{
					return resp;
				}
			}
			if (hitno.equals("List Institutions")) {

				data = GetDBData.Call(hitno, prcsid, "", "", "", procName);
				endPoint = data.get(0);
				reqMethod = data.get(1);
				host = data.get(2);
				token = data.get(4);
				resp = institutionsListAPI(endPoint, host, endPoint.split(host)[1], reqMethod);
				data = GetDBData.Call("List Institutions Response", prcsid, "", resp, token, procName);
				resp = data.get(0);
			}
			if (hitno.equals("Re-Process")) {

				data = GetDBData.Call(hitno, prcsid, password, institutionId, "", procName);
				endPoint = data.get(0);
				reqMethod = data.get(1);
				host = data.get(2);
				payloadOrEmptyString=data.get(3);
				token = data.get(4);
				perfiosTransactionId = token.split("~")[1];
				fileId = token.split("~")[2];
				token = token.split("~")[0];
				resp =  processAPI(fileId, endPoint, host, endPoint.split(host)[1], reqMethod, hitno,
						payloadOrEmptyString);
				data = GetDBData.Call("Re-Process Response", prcsid, "", resp, token, procName);
				resp = data.get(0);
			}

		} catch (Exception e) {
			try {
				data = GetDBData.Call("REQUEST EXCEPTION", "","", e.toString(), e.getMessage(), "LSW_SperfiosInsight");
				resp = data.get(0);
			}
			catch  (Exception e1)
			{
				resp = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><error><code>Unhandled Exception</code><message>"+
						e1.getMessage()+"</message></error>~500";
			}
		}
		return resp;
	}

	public static String signatureCreator(String endPointURL, String payload, String date, String perfiosTransactionId,
			String reqMethod, String host)
			throws NoSuchAlgorithmException, InvalidKeyException, SignatureException, UnsupportedEncodingException {
		String uriEncodedQuery = "";
		String sha256Payload = PefiosEncDec.sha256(payload);
		String xPerfiosDate = date;
		String canonicalRequest = reqMethod + "\n" + PefiosEncDec.uriEncode(endPointURL) + "\n" + uriEncodedQuery + "\n"
				+ "host:" + host + "\n" + "x-perfios-content-sha256:" + sha256Payload + "\n" + "x-perfios-date:"
				+ xPerfiosDate + "\n" + "host;x-perfios-content-sha256;x-perfios-date" + "\n" + sha256Payload;

		String stringToSign = "PERFIOS-RSA-SHA256" + "\n" + xPerfiosDate + "\n" + PefiosEncDec.sha256(canonicalRequest);

		// Create a checksum using String to sign
		String Checksum = PefiosEncDec.sha256(stringToSign);

		// Encryption the String to sign using RSA private key

		return PefiosEncDec.encrypt(Checksum, PefiosEncDec.buildPrivateKey(privateKey),
				PefiosEncDec.buildPublicKey(privateKey));

	}

	// -------------------All API Calls------------------------------

	public static String initiateAPI(String path, String payloadOrEmptyString, String reqMethod, String host,
			String endPoint, String hitno)
			throws InvalidKeyException, NoSuchAlgorithmException, SignatureException, IOException {

		String xPerfiosDate = PefiosEncDec.date(); // Date(); // This method returns the current date and time in
													// YYYYMMDD’T’HHMMSS’Z’ format
		// Initiate transaction call made here----

		String signature = signatureCreator(path, payloadOrEmptyString, xPerfiosDate, "", reqMethod, host);

		return PerfiosInsightInterfaceCall.perfiosInterfaceCall(endPoint, signature,
				payloadOrEmptyString, xPerfiosDate, host, hitno);
	}

	public static String uploadAPI(String filePath, String endpoint, String host, String path, String reqMethod)
			throws InvalidKeyException, NoSuchAlgorithmException, SignatureException, IOException {
		String xPerfiosDate = PefiosEncDec.date();
		return PerfiosInsightInterfaceCall.uploadStatement(filePath, perfiosTransactionId, xPerfiosDate,
				endpoint, host, path, reqMethod);

	}

	public static String processAPI(String fileId, String endpoint, String host, String path, String reqMethod,
			String hitno, String processStatementPayload)
			throws InvalidKeyException, NoSuchAlgorithmException, SignatureException, IOException {
		String xPerfiosDate = PefiosEncDec.date();
		String processResponse = "";
		if (fileId.length() == 40) {
			String processStatementSignature = signatureCreator(path, processStatementPayload, xPerfiosDate, "",
					reqMethod, host);

			String processStatementURL = endpoint;

			processResponse = PerfiosInsightInterfaceCall.perfiosInterfaceCall(processStatementURL,
					processStatementSignature, processStatementPayload, xPerfiosDate, host, hitno);

		}
		return processResponse;
	}

	public static String reportGenerationAPI(String endPoint, String host, String path, String reqMethod, String hitno)
			throws InvalidKeyException, NoSuchAlgorithmException, SignatureException, IOException {
		String xPerfiosDate = PefiosEncDec.date();

		// Process Statement call made here

		String reportGenerationPayload = "";

		String reportGenerationURL = endPoint;

		String reportGenerationSignature = signatureCreator(path, reportGenerationPayload, xPerfiosDate,
				perfiosTransactionId, reqMethod, host);

		return PerfiosInsightInterfaceCall.perfiosInterfaceCall(reportGenerationURL,
				reportGenerationSignature, reportGenerationPayload, xPerfiosDate, host, hitno);
	}

	public static String retrieveReportAPI(String endPoint, String host, String path, String reqMethod, String hitno)
			throws InvalidKeyException, NoSuchAlgorithmException, SignatureException, IOException {
		String xPerfiosDate = PefiosEncDec.date();


		String retrieveReportPayload = "";

		String retrieveReportCode = "";
		String retrieveReportURL = endPoint;

		String retrieveReportSignature = retrieveReportSignatureCreator(path, retrieveReportPayload, xPerfiosDate,
				perfiosTransactionId, reqMethod, host, "types");
		String reportFormat = "xml";
		String downloadReportAtLocation = PefiosEncDec.getDownloadLocation();
		if (reportFormat.contains(",")) {
			reportFormat = "zip";
		}
		retrieveReportCode = PerfiosInsightInterfaceCall.retrieveReport(retrieveReportURL, retrieveReportSignature,
				xPerfiosDate, downloadReportAtLocation + "/" + perfiosTransactionId + "." + reportFormat,
				retrieveReportPayload, host);

		return retrieveReportCode;

	}

	public static String retrieveReportSignatureCreator(String endPointURL, String payload, String date,
			String perfiosTransactionId, String reqMethod, String host, String queryParam)
			throws NoSuchAlgorithmException, InvalidKeyException, SignatureException, UnsupportedEncodingException {

		String method = "POST";

		String queryParamValue = "";

		String uriEncodedQuery = "";


		if (endPointURL.contains("?"))

		{

			method = "GET";

			queryParamValue = endPointURL.split("=")[1];

			uriEncodedQuery = PefiosEncDec.uriEncode(queryParam) + "=" + PefiosEncDec.uriEncode(queryParamValue);

			endPointURL = endPointURL.substring(0, endPointURL.indexOf("?"));

		}


		String sha256Payload = PefiosEncDec.sha256(payload);
		String xPerfiosDate = date;


		String CanonicalRequest = method + "\n"

				+ PefiosEncDec.uriEncode(endPointURL) + "\n"

				+ uriEncodedQuery + "\n"

				+ "host:" + host + "\n"

				+ "x-perfios-content-sha256:" + sha256Payload + "\n"

				+ "x-perfios-date:" + xPerfiosDate + "\n"

				+ "host;x-perfios-content-sha256;x-perfios-date" + "\n"

				+ sha256Payload;


		String StringToSign = "PERFIOS-RSA-SHA256" + "\n"

				+ xPerfiosDate + "\n"

				+ PefiosEncDec.sha256(CanonicalRequest);


		String checksum = PefiosEncDec.sha256(StringToSign);


		return PefiosEncDec.encrypt(checksum, PefiosEncDec.buildPrivateKey(privateKey),
				PefiosEncDec.buildPublicKey(privateKey));

	}

	// -------------------institutions_List_API Calls------------------------------

	public static String institutionsListAPI(String endPoint, String host, String path, String reqMethod)
			throws InvalidKeyException, NoSuchAlgorithmException, SignatureException, IOException {
		String retrieveReportCode = "";
		String xPerfiosDate = PefiosEncDec.date(); // Date(); // This method returns the current date and time in
													// YYYYMMDD’T’HHMMSS’Z’ format
		String downloadReportAtLocation = PefiosEncDec.getDownloadLocation();
		String signature = signatureCreator(path, "", xPerfiosDate, "", reqMethod, host);

		retrieveReportCode = PerfiosInsightInterfaceCall.retrieveReport(endPoint, signature, xPerfiosDate,
				downloadReportAtLocation + "/" + "ListInstitutionId.xml", "", host);

		return retrieveReportCode;
	}

	public static String institutionsListSignatureCreator(String endPointURL, String payload, String date,
			String PerfiosTransactionId, String host)
			throws NoSuchAlgorithmException, InvalidKeyException, SignatureException, UnsupportedEncodingException {

		String method = "GET";

		String queryParam = "processingType";

		String queryParamValue = "STATEMENT";

		String uriEncodedQuery = "";

		String sha256Payload = PefiosEncDec.sha256(payload);

		String xPerfiosDate = date;

		String CanonicalRequest = method + "\n"

				+ PefiosEncDec.uriEncode(endPointURL) + "\n"

				+ uriEncodedQuery + "\n"

				+ "host:" + host + "\n"

				+ "x-perfios-content-sha256:" + sha256Payload + "\n"

				+ "x-perfios-date:" + xPerfiosDate + "\n"

				+ "host;x-perfios-content-sha256;x-perfios-date" + "\n"

				+ sha256Payload;

		// Creating a String to sign using Conanical Request

		String StringToSign = "PERFIOS-RSA-SHA256" + "\n"

				+ xPerfiosDate + "\n"

				+ PefiosEncDec.sha256(CanonicalRequest);


		// Create a checksum using String to sign

		String Checksum = PefiosEncDec.sha256(StringToSign);


		// Encryption the String to sign using RSA private key


		return PefiosEncDec.encrypt(Checksum, PefiosEncDec.buildPrivateKey(privateKey),
				PefiosEncDec.buildPublicKey(privateKey));

	}

}
