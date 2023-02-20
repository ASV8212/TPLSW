package Integration;

import java.io.*;
import java.security.KeyStore;
import java.security.cert.Certificate;
import java.util.Calendar;
import java.util.Date;
import java.util.Enumeration;

public class NSDLp2j {
	private void StringUtils() {
	    throw new IllegalStateException("Utility class");
	  }

	public static void p2jCall() {

		File fileOut = null;
		OutputStream out = null;
		String logMsg = "\n-";

		Calendar c1 = Calendar.getInstance();
		Calendar c = Calendar.getInstance();
		long nonce = c.getTimeInMillis();
		Date startTime = c1.getTime();
		try {

			NSDLPropertyFile config = new NSDLPropertyFile().getProperty();
			@SuppressWarnings("unused")
			ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
			File fileIn = new File(config.getCertiname().toString());

			fileOut = new File(config.getJfsfilename().toString());

			if (!fileIn.canRead()) {
				System.out.println("Unable to access input keystore: " + fileIn.getPath());
//				System.exit(2);
			}
			if (fileOut.exists() && !fileOut.canWrite()) {
				System.out.println("Output file is not writable: " + fileOut.getPath());
//				System.exit(2);
			}

			KeyStore kspkcs12 = KeyStore.getInstance("pkcs12");
			KeyStore ksjks = KeyStore.getInstance("jks");

			char inphrase[] = config.getPassword().toCharArray();
			char outphrase[] = config.getPassword().toCharArray();

			kspkcs12.load(new FileInputStream(fileIn), inphrase);
			ksjks.load(null, outphrase);
			Enumeration<String> eAliases = kspkcs12.aliases();
			do {
				if (!eAliases.hasMoreElements())
					break;
				String strAlias = (String) eAliases.nextElement();
				if (kspkcs12.isKeyEntry(strAlias)) {
					java.security.Key key = kspkcs12.getKey(strAlias, inphrase);
					Certificate chain[] = kspkcs12.getCertificateChain(strAlias);
					ksjks.setKeyEntry(strAlias, key, outphrase, chain);
				}
			} while (true);
			out = new FileOutputStream(fileOut);
			ksjks.store(out, outphrase);
			logMsg += "Java Key Store created successfully" + " ::Program Start Time:" + startTime + "::nonce= "
					+ nonce;
			System.out.println("Java Key Store created successfully" + logMsg);
		} catch (Exception ex) {

			logMsg += "::Exception: " + ex.getMessage() + " ::Program Start Time:" + startTime + "::nonce= " + nonce;
			ex.printStackTrace(System.err);
		} finally {
			try {
				out.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}
}
