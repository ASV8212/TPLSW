package Controls;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.Base64;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

import CommonModel.DBConnection;

public class InterfaceEsign {
	/*public static void main(String ap[]) throws Exception
	{
		try
		{
			new InterfaceEsign().EsignLegalityService1("LSW_SESIGNAPICREATE1","","","","");
	
		}catch(Exception excd)
		{
		excd.printStackTrace();
	}
		}*/
	
	public String EsignLegalityService1(String Input1,String Input2,String Input3,String Encoded1,String ServiceType) throws Exception 
	{
		String JsonData1 = "";
	    String contenttype1 = "";
	    String Authtoken = "";
	    String Authtoken1="";
	    String ResMsg = "";
	    String APiURL1 = "";
	    PreparedStatement pr1=null;
	    PreparedStatement pr2=null;
	    Connection con1=null;
	    Connection con2=null;
	    String Encoded="";
	    String Output= "";
	    String UID = "";
	    ResultSet results =null;
	    ResultSet results1 =null;
	    
		
	    if(con1==null)
		{
	     con1=DBConnection.getConnection(null);
		}
	    byte [] bs= new byte[1024];
	    
	    
	   // bs=Files.readAllBytes(Paths.get("C://Alden//Chola//Sample.pdf"));
	    String Filepath = ""; //Encoded1.replaceAll("~", "&");
	 //   bs=Files.readAllBytes(Paths.get(Filepath));
		//bs=URLtoFile(Filepath);
   
		////

		  String PrcsID = Input2;
		    String DMSID = Encoded1;
		    String DMSURL = "";
		    String fileNAME = "";
		    String format = "";
		    String retval = "";
		    ArrayList<String> Data = new ArrayList<String>();
		    Data = GetDBData.Call(PrcsID, DMSID, "", "", "", "LSW_SDMSVIEW");
		    DMSURL = Data.get(0);
		    fileNAME = Data.get(1);
		    format = Data.get(2);
		    URL url = new URL(DMSURL);
		    HttpURLConnection httpConn = (HttpURLConnection)url.openConnection();
		    int responseCode = httpConn.getResponseCode();
		    if (responseCode == 200) {
		      ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
		      byte[] chunk = new byte[4096];
		      InputStream stream = httpConn.getInputStream();
		      try {
		        int bytesRead;
		        while ((bytesRead = stream.read(chunk)) > 0)
		          outputStream.write(chunk, 0, bytesRead); 
		        stream.close();
		       bs = outputStream.toByteArray();
		       outputStream.close();
		      } catch (IOException e) {
		          
		          stream.close();
		          outputStream.close();
		          e.printStackTrace();
		        } 
		    }
		////
		       
		       
		       
		byte [] encoding= new byte[1024];
		encoding= Base64.getEncoder().encode(bs);
		Encoded=new String(encoding);
		System.out.println("Encoded value "+ Encoded);
	    
	      pr1=con1.prepareStatement("{ call " + Input1+ "(?,?,?,?,?) }");
		  	
	      pr1.setString(1, Input2);
	      pr1.setString(2, Input3);
	      pr1.setString(3, Encoded);
	      pr1.setString(4, "Create");
	      pr1.setString(5, "");
	      results = pr1.executeQuery();
	      ResultSetMetaData rsmd = results.getMetaData();
	      int colCount = rsmd.getColumnCount();
	      while (results.next()) {
	      	APiURL1 = results.getString(1);
	          JsonData1 = results.getString(2);
	          contenttype1 = results.getString(3);
	          Authtoken = results.getString(4);
	          Authtoken1 = results.getString(5);
	          UID = results.getString(6);
	        } 
	      Output= new InterfaceEsign().InterfacePostCall(APiURL1,JsonData1,contenttype1,Authtoken,Authtoken1);
	     
	      if(con2==null)
			{
	    	  con2=DBConnection.getConnection(null);
			}
	     
	      String[] Reponse = Output.split("~");
	      String OPStatus = Reponse[0];
	      String OP= Reponse[1];
	      
	      pr2=con2.prepareStatement("{ call " + Input1+ "(?,?,?,?,?) }");
		  	
			
	      pr2.setString(1, Input2);
	      pr2.setString(2, Input3);
	      pr2.setString(3, OP);
	      pr2.setString(4, "CreateOutput");
	      pr2.setString(5, UID);
	      results1 = pr2.executeQuery();
	      ResultSetMetaData rsmd1 = results1.getMetaData();
	      int colCount1 = rsmd1.getColumnCount();
	      while (results1.next()) {
	    	  OPStatus = results1.getString(1);  
	      }
		
		return Output;
	}
	public static String InterfacePostCall(String APiURL1,String JsonData1,String contenttype1,String Authtoken, String Authtoken1) 
	{

		String Status=null;
		String Message=null;
			try
			{

	OkHttpClient client = new OkHttpClient();
			MediaType mediaType = MediaType.parse(contenttype1);
			RequestBody body = RequestBody.create(mediaType,JsonData1);
			Request request = new Request.Builder()
			  .url(APiURL1)
			  .method("POST", body)
			  .addHeader("x-parse-rest-api-key", Authtoken)
			  .addHeader("x-parse-application-id", Authtoken1)
			  .addHeader("Content-Type", contenttype1)
			  .build();
			Response response = client.newCall(request).execute();
			System.out.println("Response Code "+ response.code());

			if(response.code()==200)
		      {
		    	  Status="Success";

		    	  Message= response.body().string();
		      }
		      else
		      {
		    	  Status="Error";
		    	  Message= response.body().string();
		      }
					

			System.out.println("Response "+Message);
				}catch (Exception e)
				{
			    	e.printStackTrace();
			        Status = e.toString();
			        Message = "Exception";
			        System.out.println("Response: " + Status);
			        return Status+"~"+Message;
	}
			return Status+"~"+Message;
	}
	public static String InterfaceGetCall(String APiURL1,String JsonData1, String contenttype1,String Authtoken, String Authtoken1) 
	{
		String Status=null;
		String Message=null;
			
		try
		{
			
			OkHttpClient client = new OkHttpClient();
			MediaType mediaType = MediaType.parse(contenttype1);
			RequestBody body = RequestBody.create(mediaType,JsonData1 );
			Request request = new Request.Builder()
			  .url(APiURL1)
			  .method("POST", body)
			  .addHeader("x-parse-rest-api-key", Authtoken)
			  .addHeader("x-parse-application-id", Authtoken1)
			  .addHeader("Content-Type", contenttype1)
			  .build();

	      
	      Response response = client.newCall(request).execute();
		
	      System.out.println("Response Code "+ response.code());

	      if(response.code()==200)
	      {
	    	  Status="Success";
	    	  Message= response.body().string();
	      }
	      else
	      {
	    	  Status="Error";
	    	  Message= response.body().string();
	      }
				
			}catch (Exception e)
			{
		    	e.printStackTrace();
		        Status = e.toString();
		        Message = "Exception";
		        System.out.println("Response: " + Status);
		        return Status+"~"+Message;
			}

			return Status+"~"+Message;
		}
	
	
	public static byte[] URLtoFile(String DOCURL) throws Exception
	{
		  byte[] DocContent={};
		try
		{
		      URI uri = new URI(DOCURL);
				URL url1 = uri.toURL();

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
				    outputStream.close();
				    
		}catch(Exception exd)
		{
			exd.printStackTrace();
		}
		finally
		{
			
		}
		return DocContent;
	}	
	}