package Integration;

import CommonModel.DBConnection;
import Controls.Connections;

import com.squareup.okhttp.*;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URL;
import java.net.URLConnection;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.imageio.ImageIO;


import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntity;
//import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.ByteArrayBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;

import org.w3c.dom.Document;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.ws.rs.PathParam;

public class TotalKycOCR {
	
	//String obj = JSON.parse(JSONval);
	
	
	public static String OCR(String DOCURL, String PRCSID,String OCRTYPE,String DocName) throws IOException, JSONException {

	String str = null;
	String DBSrc=null;
    
    //JSONObject obj = new JSONObject(JSONval);
    
    //String Reqxml= obj.getString("reqxml");
   // String apitype=obj.getString("apitype");
   // String processId=obj.getString("processId");
    
	/*MediaType MEDIA_TYPE = null; 

	//MediaType MEDIA_TYPE_PNG = MediaType.parse("image/png");
	
	String extension = DOCURL.substring(DOCURL.lastIndexOf("."));
	
	if (extension.equals(".png"))
	{
		MEDIA_TYPE = MediaType.parse("image/png");		
	}
	else if (extension.equals(".jpg"))
	{
		MEDIA_TYPE = MediaType.parse("image/jpg");		
	}
	else if (extension.equals(".jpeg"))
	{
		MEDIA_TYPE = MediaType.parse("image/jpeg");		
	}*/
	
	//String fileName = DOCURL.substring( DOCURL.lastIndexOf('/')+1, DOCURL.length() );
	//String fileNameWithoutExtn = fileName.substring(0, fileName.lastIndexOf('.'));
	
    String JsonData = "";
    String contenttype = "";
    String karzakey = "";
    String ResMsg = "";
    String APiURL = "";
   
    Connection con = DBConnection.getConnection(DBSrc);
    CallableStatement ps = null;
	
	 CallableStatement ps1=null;
	  ResultSet results = null;
	 ResultSet results1 =  null;
    try {
       
         
      ps = con.prepareCall("{call LSW_SOCRKYCIntegration(?,?,?,?,?) }");
      
      ps.setString(1, DOCURL);
      ps.setString(2, OCRTYPE);
      ps.setString(3, PRCSID);
      ps.setString(4, "");
      ps.setString(5, "");
      results = ps.executeQuery();
     // ResultSetMetaData rsmd = results.getMetaData();
     // int colCount = rsmd.getColumnCount();
      
      while (results.next()) {
      
    	contenttype = results.getString(1);
        karzakey = results.getString(2);
        APiURL = results.getString(3);
       
      } 

      Connections.Call(ps,results,con,"Commit");
      
     /* OkHttpClient client = new OkHttpClient();
      
      URL url = new URL(DOCURL);
    //  File f = new File(url.getFile());
      
      File sourceFile = new File(url.getFile());
      
      //MediaType mediaType = MediaType.parse(contenttype);
      //RequestBody body = RequestBody.create(mediaType, JsonData);
     
      final MediaType MEDIA_TYPE = DOCURL.endsWith("png") ? 
              MediaType.parse("image/png") : MediaType.parse("image/jpeg");
      
         
              
      RequestBody requestBody = new MultipartBuilder()
              .type(MultipartBuilder.FORM)
              //.addFormDataPart("member_id", memberId)
              .addFormDataPart("file", fileName, RequestBody.create(MEDIA_TYPE, sourceFile))
              .build();
      
   
            
      Request request = (new Request.Builder())
        
        .url(APiURL)
        .post(requestBody)
        .addHeader("content-type", contenttype)
        .addHeader("x-karza-key", karzakey)
        .build();

      
      Response response = client.newCall(request).execute();*/
      
      String encoded="";
      Base64 codec = new Base64();
      byte[] DocContent;
      
      URI uri = new URI(DOCURL);
		URL url1 = uri.toURL();
		//URLConnection conn = url1.openConnection();
		//conn.connect();
		
		
		
		  ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

		    try {
		        byte[] chunk = new byte[4096];
		        int bytesRead;
		        InputStream stream = url1.openStream();

		        while ((bytesRead = stream.read(chunk)) > 0) {
		            outputStream.write(chunk, 0, bytesRead);
		        }

		    } catch (IOException e) {
		        e.printStackTrace();
		        return null;
		    }

		    
		    
		    DocContent =  outputStream.toByteArray();
		    encoded = codec.encode(DocContent);
		  
		    outputStream.close();
		    
		   // jsonData=jsonData.replace("JSONREQCONTENT", encoded);  
	
	
		   HttpClient  client = HttpClientBuilder.create().build();
          HttpPost post = new HttpPost(APiURL);
         // final String USER_AGENT = "Mozilla/5.0";
          post.setHeader("x-karza-key", karzakey);
          //File file = new File("File Path");
          //File file = new File(url1.toString());
          MultipartEntity entity = new MultipartEntity();
          ByteArrayBody body = new ByteArrayBody(DocContent,"image/jpeg", DocName);
          //ByteArrayBody body = new ByteArrayBody(readBytesFromFile("C:\\Users\\ETDU041\\Desktop\\BANK STATEMENT\\5448\\JULY18.pdf"),"application/pdf", Filename);
         // ByteArrayBody body = new ByteArrayBody(DocContent,"application/pdf", "JULY18.pdf");
          entity.addPart("image",body);
          entity.addPart("consent",new StringBody("Y"));
       
          post.setEntity(entity);
         HttpResponse  response = client.execute(post);
        BufferedReader rd = new BufferedReader(
          new InputStreamReader(response.getEntity().getContent()));
          StringBuffer result = new StringBuffer();
          String line = "";
          while ((line = rd.readLine()) != null) {
          result.append(line);
       
          }
          
          DocContent=null;
          rd.close();
          //System.out.println(result);
          
      ResMsg = result.toString();


      ps = con.prepareCall("{call LSW_SKYCIntegrationLog(?,?,?,?,?,?) }");
      
      ps.setString(1, DOCURL);
      ps.setString(2, ResMsg);
      ps.setString(3, contenttype);
      ps.setString(4, APiURL);
      ps.setString(5, PRCSID);
      ps.setString(6, "");
      results = ps.executeQuery();
    
      
      System.out.println("Response: " + ResMsg);

      Connections.Call(ps,results,con,"Commit");
      
    }
    catch (Exception e)
   	{   		
    	
    	ResMsg = "{\"status-code\":\"105\"}";
    	
    	  Connections.Call(ps,results,con,"Rollback");		
   		e.printStackTrace();
   	}
   			finally {		        
   			  Connections.Call(ps,results,con,"Close");
   		}		
		// END -- Enable in future
    return ResMsg;
	}
}
