package Integration;

import CommonModel.DBConnection;
import Controls.GetDBData;

import com.squareup.okhttp.CipherSuite;
import com.squareup.okhttp.ConnectionSpec;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;
import com.squareup.okhttp.TlsVersion;

import java.io.FileInputStream;
import java.io.IOException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

public class TotalKyc {
	
	public String JSONval;
	//public String reqxml;
	//public String apitype;
	//public String processId;
	private String DBSrc;

	public void JSONval(String JSONval) {
		this.JSONval = JSONval;
	}
	
	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}
	
	//String obj = JSON.parse(JSONval);
	
	
	public String TotlKyc() throws IOException, JSONException {
	
	ArrayList<String> Data_LOG=new ArrayList<String>();
	String str = null;
    String LeadId = "";
    String DocNo = "";
    String url = "";
    
    JSONObject obj = new JSONObject(JSONval);
    
    String Reqxml= obj.getString("reqxml");
    String apitype=obj.getString("apitype");
    String processId=obj.getString("processId");
   
    String JsonData = "";
    String contenttype = "";
    String karzakey = "";
    String ResMsg = "";
    String APiURL = "";
    String Tokan="";
    String Message="";
    String Chiper="";
    try {
      Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
      
      Connection con = DBConnection.getConnection(DBSrc);
  
      CallableStatement ps = con.prepareCall("{call LSW_SKYCIntegration(?,?,?,?,?) }");
      
      ps.setString(1, Reqxml);
      ps.setString(2, apitype);
      ps.setString(3, processId);
      ps.setString(4, "");
      ps.setString(5, "");
      ResultSet results = ps.executeQuery();
      ResultSetMetaData rsmd = results.getMetaData();
      int colCount = rsmd.getColumnCount();

      while (results.next()) {
        JsonData = results.getString(1);
        contenttype = results.getString(2);
        karzakey = results.getString(3);
        APiURL = results.getString(4);
        processId = results.getString(5);
      } 

      Data_LOG = GetDBData.Call(Reqxml,apitype, APiURL, processId,"INSERT","LSW_SKYCIntegrationLog");
      Tokan = Data_LOG.get(0);
       
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
        .addHeader("x-karza-key", karzakey)
        .build();

      
      Response response = client.newCall(request).execute();
      
      ResMsg = response.body().string();

      Data_LOG = GetDBData.Call(ResMsg,Tokan, "", "","UPDATE","LSW_SKYCIntegrationLog");

    
      System.out.println("Response: " + ResMsg);

    }
    catch (ClassNotFoundException e) {
      
      e.printStackTrace();
      
      Data_LOG = GetDBData.Call(e.toString(),Tokan, "", "ERROR","UPDATE","LSW_SKYCIntegrationLog");
      
      ResMsg = e.toString();
      Message = "ERROR";
      System.out.println("Response: " + ResMsg);
      return ResMsg;
      
    } catch (SQLException e) {
      
      e.printStackTrace();
      
      Data_LOG = GetDBData.Call(e.toString(),Tokan, "", "ERROR","UPDATE","LSW_SKYCIntegrationLog");
      
      ResMsg = e.toString();
      Message = "ERROR";
      System.out.println("Response: " + ResMsg);
      return ResMsg;
    } 
    catch (Exception e)
	{
    	
    	e.printStackTrace();
        
        Data_LOG = GetDBData.Call(e.toString(),Tokan, "", "ERROR","UPDATE","LSW_SKYCIntegrationLog");
        ResMsg = e.toString();
        Message = "ERROR";
        System.out.println("Response: " + ResMsg);
        return ResMsg;
	}

		// END -- Enable in future
    return ResMsg;
	}
}
