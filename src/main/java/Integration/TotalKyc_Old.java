package Integration;

import CommonModel.DBConnection;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

public class TotalKyc_Old {
	
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

      OkHttpClient client = new OkHttpClient();
      
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


      CallableStatement ps1 = con.prepareCall("{call LSW_SKYCIntegrationLog(?,?,?,?,?,?) }");
      
      ps1.setString(1, Reqxml);
      ps1.setString(2, ResMsg);
      ps1.setString(3, contenttype);
      ps1.setString(4, APiURL);
      ps1.setString(5, processId);
      ps1.setString(6, "");
      ResultSet results1 = ps1.executeQuery();
      ResultSetMetaData rsmd1 = results1.getMetaData();
      int colCount1 = rsmd1.getColumnCount();

      
      System.out.println("Response: " + ResMsg);

    }
    catch (ClassNotFoundException e) {
      
      e.printStackTrace();
    } catch (SQLException e) {
      
      e.printStackTrace();
    } 
		// END -- Enable in future
    return ResMsg;
	}
}
