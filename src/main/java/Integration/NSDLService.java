package Integration;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.security.KeyStore;
import java.security.PrivateKey;
import java.security.Security;

import org.bouncycastle.cms.CMSProcessableByteArray;
import org.bouncycastle.cms.CMSSignedData;
import org.bouncycastle.cms.CMSSignedDataGenerator;

import java.util.Enumeration;
import java.util.ArrayList;

import org.bouncycastle.util.encoders.Base64;

import Controls.GetDBData;
import Controls.NSDLCall;

import java.security.cert.*;
import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.servlet.http.HttpServletRequest;


public class NSDLService {
	private void StringUtils() {
	    throw new IllegalStateException("Utility class");
	  }
	static String pan = "";
	static String prcsid = "";
	static String cusid = "";
	static String token = "";

	public static String nsdlServiceInitiate(HttpServletRequest request) {
		String resp = "";
		ArrayList<String> data = new ArrayList<String>();
		try {
			pan = request.getParameter("pan");
			prcsid = request.getParameter("prcsid");
			cusid = request.getParameter("cusid");
			NSDLPropertyFile prop = new NSDLPropertyFile().getProperty();
			String reqParam = prop.getUrl()+"|"+prop.getSignature()+"|"+prop.getJfsfilename()+"|"+prop.getPassword()+"|"+prop.getCertiname()
			+"|"+prop.getUsername()+"|"+prop.getVersion();
			data = GetDBData.Call("REQUEST", prcsid,cusid, pan, reqParam, "LSW_SNSDLHANDLR");
			token = data.get(0);
			resp = NSDLServicecall(pan);
			
			data = GetDBData.Call("RESPONSE", "","", token , resp, "LSW_SNSDLHANDLR");
			resp = data.get(0);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return resp;
	}

	public static String NSDLServicecall(String a) {
		String outputstring = "";
		String result = "";
		try {
			NSDLp2j.p2jCall();
			NSDLPropertyFile prop = new NSDLPropertyFile().getProperty();
			if (a == null || a.length() == 0) {
				outputstring = "Error";
				result = "No Pan card details present in the input";
				return outputstring + "~" + result;
			} else {
				// check if the jks file is there or not
				String username = prop.getUsername();
				String inputstring = username + "^^";
				inputstring = inputstring + a;

				File fileJks = new File(prop.getJfsfilename());
				if (!fileJks.exists()) {
					outputstring = "Error";
					result = "Signature.jks file is not found ";
					return outputstring + "~" + result;
				} else if (!(fileJks.length() > 0)) {
					try {
						NSDLp2j.p2jCall();
					} catch (Exception e) {
						e.printStackTrace();
						outputstring = "Error";
						result = "Error in Signature.jks file generation ";
						return outputstring + "~" + result;
					}
				}
				String signature = getSignature(inputstring);
				if (signature != "") {
					outputstring = new NSDLCall().callnsdlservice(signature, inputstring);
					System.out.println("OutputString " + outputstring);
					if (outputstring != null && outputstring != "") {
						String returncode = outputstring.substring(0, 1);
						if (returncode.equalsIgnoreCase("1")) {
							result = getPancardList(outputstring, a);
						} else {
							NSDLErrorCode code = new NSDLErrorCode(Integer.parseInt(returncode));
							System.out.println("NSDL Reponse code: " + code.toString());
							result = code.toString();
						}
					} else
						return outputstring + "~" + result;
				} else {
					outputstring = "Error";
					result = "Error in Signature.jks file generation ";
					return outputstring + "~" + result;
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}finally
		{
			System.gc();
		}
		return outputstring + "~" + result;
	}
	
	public static String getSignature(String inputstring) {
		String signature = "";

		@SuppressWarnings("unused")
		File fileIn;
		try {
			NSDLPropertyFile prop = new NSDLPropertyFile().getProperty();
			// Getting resource(File) from class loader
			fileIn = new File(prop.getCertiname());
			File fileJks = new File(prop.getJfsfilename());
			KeyStore keystore = KeyStore.getInstance("jks");
			InputStream input = new FileInputStream(fileJks);
			try {
				char[] password = prop.getPassword().toCharArray();
				keystore.load(input, password);
			} catch (IOException e) {
			} finally {

			}
			Enumeration<String> e = keystore.aliases();
			String alias = "";
			if (e != null) {
				while (e.hasMoreElements()) {
					String n = (String) e.nextElement();
					if (keystore.isKeyEntry(n)) {
						alias = n;
					}
				}
			}

			PrivateKey privateKey = (PrivateKey) keystore.getKey(alias, prop.getPassword().toCharArray());
			X509Certificate myPubCert = (X509Certificate) keystore.getCertificate(alias);
			byte[] dataToSign = inputstring.getBytes();
			CMSSignedDataGenerator sgen = new CMSSignedDataGenerator();
			Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
			sgen.addSigner(privateKey, myPubCert, CMSSignedDataGenerator.DIGEST_SHA1);
			Certificate[] certChain = keystore.getCertificateChain(alias);

			ArrayList<Certificate> certList = new ArrayList<Certificate>();
			for (int i = 0; i < certChain.length; i++)
				certList.add(certChain[i]);
			sgen.addCertificatesAndCRLs(
					CertStore.getInstance("Collection", new CollectionCertStoreParameters(certList), "BC"));
			CMSSignedData csd = sgen.generate(new CMSProcessableByteArray(dataToSign), true, "BC");
			byte[] signedData = csd.getEncoded();
			byte[] signedData64 = Base64.encode(signedData);
			signature = new String(signedData64, StandardCharsets.UTF_8);
		} catch (Exception e) {
//			e.printStackTrace();
			String message=e.toString();
			return message;
		}finally
		{
			System.gc();
		}
		return signature;
	}
	
	public static String getPancardList(String outputString,String pancard) {
		int i = 0;
		String status=null;
		String[] arr = outputString.split("\\^");
		for (String str : arr) {
		if (pancard.equals(str)) {
		if (arr[i+1].equals("E"))
		status="Existing and Valid";
		else if (arr[i+1].equals("F"))
		status="Fake";
		else if(arr[i+1].equals("D"))
		status="Deleted";
		else if(arr[i+1].equals("EC"))
		status="Existing and Valid but event marked as Acquisition in ITD database";
		else if(arr[i+1].equals("ED"))
		status="Existing and Valid but event marked as Death in ITD database";
		else if(arr[i+1].equals("EI"))
		status="Existing and Valid but event marked as Dissolution in ITD database";
		else if(arr[i+1].equals("EL"))
		status="Existing and Valid but event marked as Liquidated in ITD database";
		else if(arr[i+1].equals("EP"))
		status="Existing and Valid but event marked as Partition in ITD database";
		else if(arr[i+1].equals("ES"))
		status="Existing and Valid but event marked as Split in ITD database";
		else if(arr[i+1].equals("EU"))
		status="Existing and Valid but event marked as Under Liquidation in ITD database";
		else if(arr[i+1].equals("I"))
		status="Marked as Inoperative";
		else if(arr[i+1].equals("N"))
		status="Not present in Income Tax Department (ITD) database/Invalid PAN";
		else if(arr[i+1].equals("X"))
		status="Marked as Deactivated";
		else
		status="Status Unknown";
		}
		i++;
		}

		return status ;
		}
}
