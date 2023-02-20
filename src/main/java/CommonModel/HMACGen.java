package CommonModel;



import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
public class HMACGen {

  public static void main(String[] args) throws Exception {
    System.out.println(hmacDigest("\"msg\"value=\"ADANICAPPL|ARP10234|123456789|1|IDB|NA|NA|INR|adanicappl|R|adanicappl|NA|NA|F|NA|NA|NA|NA|NA|NA|NA|http://14.192.17.61:3030/TPLSW/|Checksum", "Ob7PEpkpJAjb", "HmacSHA256"));
  }

  public static String hmacDigest(String msg, String keyString, String algo) {
    String digest = null;
    try {
      SecretKeySpec key = new SecretKeySpec((keyString).getBytes("UTF-8"), algo);
      Mac mac = Mac.getInstance(algo);
      mac.init(key);

      byte[] bytes = mac.doFinal(msg.getBytes("ASCII"));

      StringBuffer hash = new StringBuffer();
      for (int i = 0; i < bytes.length; i++) {
        String hex = Integer.toHexString(0xFF & bytes[i]);
        if (hex.length() == 1) {
          hash.append('0');
        }
        hash.append(hex);
      }
      digest = hash.toString();
	  
	  System.out.println("The checksum is "+digest);
    } catch (UnsupportedEncodingException e) {
    } catch (InvalidKeyException e) {
    } catch (NoSuchAlgorithmException e) {
    }
    return digest;
  }
}