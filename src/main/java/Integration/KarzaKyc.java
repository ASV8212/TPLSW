package Integration;

import CommonModel.DBConnection;
import Controls.GetDBData;
import Controls.InterfaceKarzaAPI;
import okhttp3.MultipartBody;

import com.squareup.okhttp.CipherSuite;
import com.squareup.okhttp.ConnectionSpec;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;
import com.squareup.okhttp.TlsVersion;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URL;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

public class KarzaKyc {
	
	public String param1;
	public String param2;
	public String param3;
	public String param4;
	public String param5;

	private String DBSrc;

	public void param1(String param1) {
		this.param1 = param1;
	}
	
	public void param2(String param2) {
		this.param2 = param2;
	}
	
	public void param3(String param3) {
		this.param3 = param3;
	}
	
	public void param4(String param4) {
		this.param4 = param4;
	}
	
	public void param5(String param5) {
		this.param5 = param5;
	}
	
	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}
	
	//String obj = JSON.parse(JSONval);
	
	
	public String KarzaAPI() throws IOException, JSONException {
	
	ArrayList<String> Data_LOG=new ArrayList<String>();
	String str = null;
    String LeadId = "";
    String DocNo = "";
    String url = "";
    String JsonData = null;
    String contenttype = "";
    String karzakey = "";
    String ResMsg = "";
    String APiURL = "";
    String PRCSID = "";
    String CUSID = "";
    String UID="";
    String Message="";
    String Chiper="";
    try {
      Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
      
      Connection con = DBConnection.getConnection(DBSrc);
  
      CallableStatement ps = con.prepareCall("{call LSW_SKARAINTEGRATION(?,?,?,?,?) }");
      
      ps.setString(1, param1);
      ps.setString(2, param2);
      ps.setString(3, param3);
      ps.setString(4, param4);
      ps.setString(5, param5);
      ResultSet results = ps.executeQuery();
      ResultSetMetaData rsmd = results.getMetaData();
      int colCount = rsmd.getColumnCount();

      while (results.next()) {
    	APiURL  = results.getString(1);
    	karzakey = results.getString(2);
    	contenttype = results.getString(3);
        JsonData = results.getString(4);
        UID = results.getString(5);
        PRCSID = results.getString(6);
        CUSID = results.getString(7);
      } 
       
      if(param1.equals("KYC OCR"))
      {
    	  okhttp3.Response response = null;
          okhttp3.RequestBody requestBody = null;
          okhttp3.Request request = null;
        // ResMsg=InterfaceKarzaAPI.InterfaceMultipartCall(APiURL,JsonData,contenttype,karzakey,param1,param1);
    	  
    	  final okhttp3.ConnectionSpec spc2 = new okhttp3.ConnectionSpec.Builder(okhttp3.ConnectionSpec.MODERN_TLS).tlsVersions(new okhttp3.TlsVersion[] { okhttp3.TlsVersion.TLS_1_2 }).cipherSuites(new okhttp3.CipherSuite[] { okhttp3.CipherSuite.TLS_DHE_RSA_WITH_AES_256_GCM_SHA384, okhttp3.CipherSuite.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384, okhttp3.CipherSuite.TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 }).build();
          	
    	  final byte[] bd = URLtoFile(JsonData);
          final okhttp3.OkHttpClient client2 = new okhttp3.OkHttpClient.Builder().connectionSpecs((List)Arrays.asList(spc2)).build();
          final okhttp3.MediaType mediaType2 = okhttp3.MediaType.parse(contenttype);
          requestBody = (okhttp3.RequestBody)new MultipartBody.Builder().setType(MultipartBody.FORM).addFormDataPart("file", "image.jpeg/abc.pdf/ima.png/imag.jpg", okhttp3.RequestBody.create(mediaType2, bd)).addFormDataPart("docType", param1).addFormDataPart("hideAadhaar", "true").addFormDataPart("maskAadhaar", "true").build();
          request = new okhttp3.Request.Builder().url(APiURL).post(requestBody).addHeader("Authorization", karzakey).build();
          response = client2.newCall(request).execute();
          
          ResMsg = response.body().string();
      }
      else
      {

    //  Data_LOG = GetDBData.Call(Reqxml,apitype, APiURL, processId,"INSERT","LSW_SKYCIntegrationLog");
     // Tokan = Data_LOG.get(0);
       
      ConnectionSpec spec = new ConnectionSpec.Builder(ConnectionSpec.MODERN_TLS) 
    		  .tlsVersions(TlsVersion.TLS_1_2)
    		  .cipherSuites( 
 		       CipherSuite.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,
 		       CipherSuite.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,
 		       CipherSuite.TLS_DHE_RSA_WITH_AES_256_GCM_SHA384
    				 // CipherSuite.TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
    				  )
    		  .build();
      	
      OkHttpClient client = new OkHttpClient();
    		  
     client = client.setConnectionSpecs(Collections.singletonList(spec));      
    
      MediaType mediaType = MediaType.parse(contenttype);
      RequestBody body = RequestBody.create(mediaType, JsonData);
      Request request = (new Request.Builder())
        
        .url(APiURL)
        .post(body)
        .addHeader("content-type", contenttype)
        //.addHeader("x-karza-key", karzakey)
        .addHeader("Authorization", karzakey)
        .build();

      
      Response response = client.newCall(request).execute();
      
      ResMsg = response.body().string();
      }

      Data_LOG = GetDBData.Call(param1,ResMsg,PRCSID,CUSID,UID,"LSW_SKARAINTEGRATION_OUTPUT");

      System.out.println("Response: " + ResMsg);
    }
    catch (ClassNotFoundException e) {
      
      e.printStackTrace();
      
      Data_LOG = GetDBData.Call(param1,ResMsg,PRCSID,CUSID,UID,"LSW_SKARAINTEGRATION_OUTPUT");
      
      ResMsg = e.toString();
      Message = "ERROR";
      System.out.println("Response: " + ResMsg);
      return ResMsg;
      
    } catch (SQLException e) {
      
      e.printStackTrace();
      
      Data_LOG = GetDBData.Call(param1,ResMsg,PRCSID,CUSID,UID,"LSW_SKARAINTEGRATION_OUTPUT");
      
      ResMsg = e.toString();
      Message = "ERROR";
      System.out.println("Response: " + ResMsg);
      return ResMsg;
    } 
    catch (Exception e)
	{
    	e.printStackTrace();
        
    	Data_LOG = GetDBData.Call(param1,ResMsg,PRCSID,CUSID,UID,"LSW_SKARAINTEGRATION_OUTPUT");
    	
        ResMsg = e.toString();
        Message = "ERROR";
        System.out.println("Response: " + ResMsg);
        return ResMsg;
	}

		// END -- Enable in future
    return ResMsg;
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
}
