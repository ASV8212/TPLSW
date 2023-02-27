package APIInterface;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringReader;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.InvalidKeyException;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Security;
import java.security.Signature;
import java.security.SignatureException;
import java.security.interfaces.RSAPrivateKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.ArrayList;
import java.util.Properties;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.EncryptedPrivateKeyInfo;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.digest.DigestUtils;
import org.bouncycastle.openssl.PEMReader;
import org.bouncycastle.util.encoders.Hex;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.itextpdf.text.pdf.codec.Base64;

import Controls.GetDBData;
import Controls.WFCall;
import Integration.PefiosEncDec;
import Integration.PerfiosInsight;

public class I360 {
	static final String ENCRYPTION_ALGO = "SHA256withRSA/PSS";

	public String i360Handler(HttpServletRequest request, HttpServletResponse response) {
		Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
		String resp = "";
		String requestBody = "";
		String jogetresponse = "";
		String procName = "LSW_SI360APIHANDLER";
		String exception = "REQUEST EXCEPTION";
		ArrayList<String> data = new ArrayList<String>();
		try {
			String referer = request.getHeader("access_token");
			String signature = request.getHeader("Signature");
			StringBuilder buffer = new StringBuilder();
			BufferedReader reader = request.getReader();
			String line;
			while ((line = reader.readLine()) != null) {
				buffer.append(line);
				buffer.append(System.lineSeparator());
			}
			requestBody = buffer.toString();
			if (requestBody.equals("") || requestBody == null) {
				data = GetDBData.Call("", "", exception, "Request Body Missing", "", procName);
				resp = data.get(0);
				return resp;
			}
			String sha256hex = DigestUtils.sha512Hex(requestBody);
			if (referer == null) {
				data = GetDBData.Call("", "", exception, "Access Token missing", "", procName);
				resp = data.get(0);
				return resp;
			}

			if (!referer.equals(sha256hex)) {
				data = GetDBData.Call("", "", "REQUEST EXCEPTION1", "Invalid Access Token", "", procName);
				resp = data.get(0);
				return resp;
			}
			if (signature == null) {
				data = GetDBData.Call("", "", exception, "Signature Token missing", "", procName);
				resp = data.get(0);
				return resp;
			}
			String encrytxt = encrypt(sha256hex, readRSAPrivateKey(new File(loadPrivateKey())));
			if (!signature.equals(encrytxt)) {
				data = GetDBData.Call("", "", "REQUEST EXCEPTION1", "Invalid Signature Token", "", procName);
				resp = data.get(0);
				return resp;
			}

			JsonObject jsonObject = new JsonParser().parse(requestBody).getAsJsonObject();
			String referenceInfo = "";
			String beneficiaryInfo = "";
			String appInfo = "";
			String sourcing = "";
			String loanInfo = "";
			String collateralInfo = "";
			String cLSSInfo = "";
			if (jsonObject.has("ReferenceInfo")) {
				referenceInfo = jsonObject.get("ReferenceInfo").getAsJsonArray().toString();
			}
			if (jsonObject.has("BeneficiaryInfo")) {
				beneficiaryInfo = jsonObject.get("BeneficiaryInfo").getAsJsonArray().toString();
			}
			if (jsonObject.has("AppInfo")) {
				appInfo = jsonObject.get("AppInfo").getAsJsonArray().toString();
			}
			if (jsonObject.has("Sourcing")) {
				sourcing = jsonObject.get("Sourcing").toString();
			}
			if (jsonObject.has("LoanInfo")) {
				loanInfo = jsonObject.get("LoanInfo").toString();
			}
			if (jsonObject.has("CollateralInfo")) {
				collateralInfo = jsonObject.get("CollateralInfo").toString();
			}
			if (jsonObject.has("CLSSInfo")) {
				cLSSInfo = jsonObject.get("CLSSInfo").toString();
			}
			JsonObject jsonObjectsrc = new JsonParser().parse(sourcing).getAsJsonObject();
			String crName = jsonObjectsrc.get("Created_Userid").toString().replaceAll("\"", "");
			jogetresponse = WFCall.WFInit(crName, "", "", "", "", "LSW_SWFINITCALL");
			if (!jogetresponse.split("~")[0].contains("_")) {
				data = GetDBData.Call("", "", "REQUEST EXCEPTION3", jogetresponse, "", "LSW_SI360APIHANDLER");
				resp = data.get(0);
				return resp;
			}
			String xml = "<referenceInfo>" + referenceInfo + "</referenceInfo><beneficiaryInfo>" + beneficiaryInfo
					+ "</beneficiaryInfo><appInfo>" + appInfo + "</appInfo><sourcing>" + sourcing
					+ "</sourcing><loanInfo>" + loanInfo + "</loanInfo><collateralInfo>" + collateralInfo
					+ "</collateralInfo><cLSSInfo>" + cLSSInfo + "</cLSSInfo>";
			data = GetDBData.Call(xml, requestBody, "INSERT", jogetresponse, crName, procName);
			resp = data.get(0);
		} catch (Exception e) {
			try {
				data = GetDBData.Call("", "", "REQUEST EXCEPTION2", e.toString(), e.getMessage(), procName);
				resp = data.get(0);
			} catch (Exception e1) {
				resp = "{\"CODE\":\"500\",\"MSG\":\"Unhandled Exception. Contact System Admin and check the log for more info.~"
						+ e1.getMessage() + "\"}";
			}
		}
		return resp;
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
		return prop.getProperty("I360PrivateKeyLocation");
	}

	public static RSAPrivateKey readRSAPrivateKey(File file) throws Exception {
		String key = new String(Files.readAllBytes(file.toPath()), Charset.defaultCharset());

		String privateKeyPEM = key.replace("-----BEGIN PRIVATE KEY-----", "").replaceAll(System.lineSeparator(), "")
				.replace("-----END PRIVATE KEY-----", "");

		byte[] encoded = Base64.decode(privateKeyPEM);

		KeyFactory keyFactory = KeyFactory.getInstance("RSA");
		PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(encoded);
		return (RSAPrivateKey) keyFactory.generatePrivate(keySpec);
	}

	public static String encrypt(String plainText, RSAPrivateKey publicKey) throws Exception {
		Cipher encryptCipher = Cipher.getInstance("RSA");
		encryptCipher.init(Cipher.ENCRYPT_MODE, publicKey);

		byte[] cipherText = encryptCipher.doFinal(plainText.getBytes("UTF-8"));

		return java.util.Base64.getEncoder().encodeToString(cipherText);
	}
}
