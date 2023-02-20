package Controls;

import java.io.FileNotFoundException;
import okhttp3.MultipartBody;
import java.util.Arrays;
import java.io.InputStream;
import java.net.URL;
import java.io.IOException;
import java.io.ByteArrayOutputStream;
import java.net.URI;
import com.squareup.okhttp.Response;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.MediaType;
import java.util.List;
import java.util.Collections;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.CipherSuite;
import com.squareup.okhttp.TlsVersion;
import com.squareup.okhttp.ConnectionSpec;

public class InterfaceKarzaAPI
{
    public static String InterfaceKYCCall(final String APiURL, final String JsonData, final String contenttype, final String karzakey) {
        String Status = null;
        String Message = null;
        try {
        	
           /* final ConnectionSpec spec = new ConnectionSpec.Builder(ConnectionSpec.MODERN_TLS).tlsVersions(new TlsVersion[] 
            		{ TlsVersion.TLS_1_2 }).cipherSuites(new CipherSuite[] { CipherSuite.TLS_DHE_RSA_WITH_AES_256_GCM_SHA384, 
            				CipherSuite.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384, CipherSuite.TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 }).build();*/
        	
        	final ConnectionSpec spec = new ConnectionSpec.Builder(ConnectionSpec.MODERN_TLS).tlsVersions(new TlsVersion[] 
            		{ TlsVersion.TLS_1_2 }).cipherSuites(new CipherSuite[] { CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,
		       CipherSuite.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,
		       CipherSuite.TLS_DHE_RSA_WITH_AES_256_GCM_SHA384, CipherSuite.TLS_DHE_RSA_WITH_AES_128_GCM_SHA256  })
        			.build();
        	
        	System.setProperty("https.protocols", "TLSv1.2,TLSv1.1,SSLv3");
		       
            final OkHttpClient client = new OkHttpClient();
            client.setConnectionSpecs((Collections.singletonList(spec)));
            final MediaType mediaType = MediaType.parse(contenttype);
            final RequestBody body = RequestBody.create(mediaType, JsonData);
            final Request request = new Request.Builder().url(APiURL).post(body).
            		addHeader("content-type", contenttype).addHeader("x-karza-key", karzakey).addHeader("cache-control", "no-cache").build();
            final Response response = client.newCall(request).execute();
            System.out.println("InterfaceKYCCall Response Code " + response.code());
            if (response.code() == 200) {
                Status = "Success";
                Message = response.body().string();
            }
            else {
                Status = "Error";
                Message = response.body().string();
            }
        }
        catch (Exception e) {
            e.printStackTrace();
            Status = e.toString();
            Message = "Exception";
            System.out.println("Response: " + Status);
            return String.valueOf(String.valueOf(Status)) + "!@#" + Message;
        }
        return String.valueOf(String.valueOf(Status)) + "!@#" + Message;
    }
    
    public static byte[] URLtoFile(final String DOCURL) throws Exception {
        byte[] DocContent = new byte[0];
        try {
            final URI uri = new URI(DOCURL);
            final URL url1 = uri.toURL();
            final ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            try {
                final byte[] chunk = new byte[4096];
                final InputStream stream = url1.openStream();
                int bytesRead;
                while ((bytesRead = stream.read(chunk)) > 0) {
                    outputStream.write(chunk, 0, bytesRead);
                }
            }
            catch (IOException e) {
                e.printStackTrace();
                return null;
            }
            DocContent = outputStream.toByteArray();
            outputStream.close();
        }
        catch (Exception exd) {
            exd.printStackTrace();
        }
        return DocContent;
    }
    
    public static String InterfaceMultipartCall(final String APiURL, final String Path, final String contenttype, final String karzakey, final String APIType, final String Param) throws FileNotFoundException, Exception {
        String Status = null;
        String Message = null;
        okhttp3.Response response = null;
        okhttp3.RequestBody requestBody = null;
        okhttp3.Request request = null;
        try {
            final okhttp3.ConnectionSpec spc2 = new okhttp3.ConnectionSpec.Builder(okhttp3.ConnectionSpec.MODERN_TLS).tlsVersions(new okhttp3.TlsVersion[] { okhttp3.TlsVersion.TLS_1_2 }).cipherSuites(new okhttp3.CipherSuite[] { okhttp3.CipherSuite.TLS_DHE_RSA_WITH_AES_256_GCM_SHA384, okhttp3.CipherSuite.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384, okhttp3.CipherSuite.TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 }).build();
            if (APIType.equals("FACE MATCHING")) 
            {
                final byte[] bd = URLtoFile(Path.split("~")[0]);
                final byte[] bd2 = URLtoFile(Path.split("~")[1]);
                final okhttp3.OkHttpClient client = new okhttp3.OkHttpClient.Builder().connectionSpecs((List)Arrays.asList(spc2)).build();
                final okhttp3.MediaType mediaType = okhttp3.MediaType.parse(contenttype);
                requestBody = (okhttp3.RequestBody)new MultipartBody.Builder().setType(MultipartBody.FORM).addFormDataPart("file", "image.jpeg/abc.pdf/ima.png/imag.jpg", okhttp3.RequestBody.create(mediaType, bd)).addFormDataPart("file", "image.jpeg/abc.pdf/ima.png/imag.jpg", okhttp3.RequestBody.create(mediaType, bd2)).build();
                request = new okhttp3.Request.Builder().url(APiURL).post(requestBody).addHeader("x-karza-key", karzakey).build();
                response = client.newCall(request).execute();
            }
            else if (APIType.equals("AADHAAR XML VERIFY")) 
            {
                final byte[] bd = URLtoFile(Path);
                final okhttp3.OkHttpClient client2 = new okhttp3.OkHttpClient.Builder().connectionSpecs((List)Arrays.asList(spc2)).build();
                final okhttp3.MediaType mediaType2 = okhttp3.MediaType.parse(contenttype);
                requestBody = (okhttp3.RequestBody)new MultipartBody.Builder().setType(MultipartBody.FORM).addFormDataPart("file", "image.jpeg/abc.pdf/ima.png/imag.jpg/test.xml", okhttp3.RequestBody.create(mediaType2, bd)).addFormDataPart("consent", "y").build();
                request = new okhttp3.Request.Builder().url(APiURL).post(requestBody).addHeader("x-karza-key", karzakey).build();
                response = client2.newCall(request).execute();
            }
            else if (APIType.equals("AADHAAR ZIP VERIFY")) {
                final String[] InputPath = Path.split("~");
                final String URL = InputPath[0];
                final String shareCode = InputPath[1];
                final String Mob = InputPath[2];
                final byte[] bd3 = URLtoFile(URL);
                final okhttp3.OkHttpClient client3 = new okhttp3.OkHttpClient.Builder().connectionSpecs((List)Arrays.asList(spc2)).build();
                final okhttp3.MediaType mediaType3 = okhttp3.MediaType.parse(contenttype);
                requestBody = (okhttp3.RequestBody)new MultipartBody.Builder().setType(MultipartBody.FORM).addFormDataPart("file", "image.jpeg/abc.pdf/ima.png/imag.jpg/test.xml/test.zip", okhttp3.RequestBody.create(mediaType3, bd3)).addFormDataPart("shareCode", shareCode).addFormDataPart("mobile", Mob).addFormDataPart("consent", "y").build();
                request = new okhttp3.Request.Builder().url(APiURL).post(requestBody).addHeader("x-karza-key", karzakey).build();
                response = client3.newCall(request).execute();
            }
            else if (APIType.equals("KYC OCR")) 
            {
                final byte[] bd = URLtoFile(Path);
                final okhttp3.OkHttpClient client2 = new okhttp3.OkHttpClient.Builder().connectionSpecs((List)Arrays.asList(spc2)).build();
                final okhttp3.MediaType mediaType2 = okhttp3.MediaType.parse(contenttype);
                requestBody = (okhttp3.RequestBody)new MultipartBody.Builder().setType(MultipartBody.FORM).addFormDataPart("file", "image.jpeg/abc.pdf/ima.png/imag.jpg", okhttp3.RequestBody.create(mediaType2, bd)).addFormDataPart("docType", Param).addFormDataPart("hideAadhaar", "true").addFormDataPart("maskAadhaar", "true").build();
                request = new okhttp3.Request.Builder().url(APiURL).post(requestBody).addHeader("x-karza-key", karzakey).build();
                response = client2.newCall(request).execute();
            }
            else 
            {
                final byte[] bd = URLtoFile(Path);
                final okhttp3.OkHttpClient client2 = new okhttp3.OkHttpClient.Builder().connectionSpecs((List)Arrays.asList(spc2)).build();
                final okhttp3.MediaType mediaType2 = okhttp3.MediaType.parse(contenttype);
                requestBody = (okhttp3.RequestBody)new MultipartBody.Builder().setType(MultipartBody.FORM).addFormDataPart("file", "image.jpeg/abc.pdf/ima.png/imag.jpg", okhttp3.RequestBody.create(mediaType2, bd)).build();
                request = new okhttp3.Request.Builder().url(APiURL).post(requestBody).addHeader("x-karza-key", karzakey).build();
                response = client2.newCall(request).execute();
            }
            System.out.println("InterfaceKYCCall Response Code " + response.code());
            if (response.code() == 200) {
                Status = "Success";
                Message = response.body().string();
            }
            else {
                Status = "Error";
                Message = response.body().string();
            }
            System.out.println("Message Details " + Message);
        }
        catch (Exception e) {
            e.printStackTrace();
            Status = e.toString();
            Message = "Exception";
            System.out.println("Response: " + Status);
            return String.valueOf(String.valueOf(Status)) + "!@#" + Message;
        }
        return String.valueOf(String.valueOf(Status)) + "!@#" + Message;
    }
}