package Integration;

import static java.lang.Integer.toHexString;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringReader;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.KeyPair;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Signature;
import java.security.SignatureException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Properties;

import org.apache.commons.codec.digest.DigestUtils;
import org.bouncycastle.openssl.PEMReader;
import org.bouncycastle.util.encoders.Hex;

public class PefiosEncDec {
	private void StringUtils() {
		throw new IllegalStateException("Utility class");
	}

// --------------------------Create SHA256 Method-------------------------------

	public static String sha256(String a) {
		String payloadHash = a;
		return DigestUtils.sha256Hex(payloadHash);
	}
//  ---------------------------encodeURIComponent Method------------------------------

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

	// -----------------------RSA
	// Encryption-----------------------------------------------
	public static String encrypt(String raw, PrivateKey k, PublicKey k2)
			throws InvalidKeyException, SignatureException, UnsupportedEncodingException, NoSuchAlgorithmException {
		Signature privateSignature = Signature.getInstance(PerfiosInsight.ENCRYPTION_ALGO);
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
//  -----------------------------buildPrivateKey Method--------------------------------

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
	// -------------------------------buildPublicKey--------------------------

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
	// ------------------------------Create 'YYYYMMDD’T’HHMMSS’Z’‘ format
	// Date----------------------------------------

	public static String date() {
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");
		LocalDateTime now = LocalDateTime.now();
		String time = dtf.format(now);
		return time.subSequence(0, 8) + "T" + time.subSequence(8, 14) + "Z";

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
		String localFile = prop.getProperty("PerfiosPrivateKeyLocation");
		BufferedReader br = new BufferedReader(new FileReader(localFile));
		StringBuilder sb = new StringBuilder();
		String line = br.readLine();

		while (line != null) {
			sb.append(line);
			if (line.split("|")[0] != "T") {
				sb.append(System.lineSeparator());
			}
			line = br.readLine();
		}
		br.close();
		return sb.toString();
	}

	public static String getDownloadLocation() throws IOException {
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
		return prop.getProperty("PerfiosdownloadLocation");
	}
}
	
