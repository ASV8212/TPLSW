package Controls;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

import CommonModel.DBConnection;

public class InterfaceBSAAPI {
	
	public static String InterfaceBSACall(String APiURL,String XMLData,String input,String processid) 
	{

		String Status=null;
		String Message=null;
		String docToken="getStatus";
		String contentType="application/x-www-form-urlencoded";	
		try
		{
			
		  OkHttpClient client = new OkHttpClient(); 
	    
	      MediaType mediaType = MediaType.parse(contentType);
	      RequestBody body = RequestBody.create(mediaType, XMLData);
//	      
	      Request request = (new Request.Builder())        
	        .url(APiURL)
	        .post(body)
	        .addHeader("content-type", contentType)
	        .addHeader("cache-control", "no-cache")
	        .build();
  
	      Response response = client.newCall(request).execute();
		
	      System.out.println("InterfaceBSACall Response Code "+ response.code());
	      String []rst=input.split("!@#");
	      if(response.code()==200)
	      {
	    	  Status="Success";
	    	  if(rst[0].equals("Retrieve_XLSX"))
	    	  {
	    	  InputStream inputStream = response.body().byteStream();
	    	  
	    	  ArrayList<String> Data_LOG = new ArrayList<String>();
	    	  
	    	  String [] InPut=processid.split("!@#");
	    	  System.out.println("INput1 BSAA "+InPut[0]);
	    	  System.out.println("INput1 BSAA "+InPut[1]);
	    	  Data_LOG = GetDBData.Call(InPut[1],rst[1]+".xlsx","FilePath","","","LSW_SMAKEFILEPATH");
	    	  String FilePath = Data_LOG.get(0);
	    	  String FilePath1 = Data_LOG.get(1);
	    	   
	    	  String saveFilePath =  InPut[0]+FilePath+rst[1]+".xlsx";

				//File file= new File(InPut[0]+FilePath);
				
				Path sFile2path = Paths.get(InPut[0]+FilePath, new String[0]);
				java.nio.file.Files.createDirectories(sFile2path);
				
				/*if (!file.exists()) {
		            System.out.print("No Folder");
		            file.mkdir();
		            System.out.print("Folder created");
		        }*/
              FileOutputStream outputStream = new FileOutputStream(saveFilePath);

              int bytesRead = -1;
              byte[] buffer = new byte[4096];
              while ((bytesRead = inputStream.read(buffer)) != -1) {
                              outputStream.write(buffer, 0, bytesRead);
              }
              outputStream.close();
              inputStream.close();
              
            Connection con = DBConnection.getConnection(null);
			PreparedStatement proc_stmt = con.prepareStatement("{ call sam_sAttachmentDMS1(?,?,?) }");
                 
            proc_stmt.setString(1, FilePath1);
      		proc_stmt.setString(2, "");
      		proc_stmt.setString(3, "NetBanking");
      		
      		ResultSet results=proc_stmt.executeQuery(); 
      		
      		
      		while (results.next()) {
      			docToken=results.getString("DOCTOKEN");
                  System.out.println("Data Saved Suceessfully");
              } 
              
              Message=saveFilePath;
	    	 }
	    	  else
	    	  {
	    		  Message= response.body().string();
	    	  }
	    	  
	    	  response.body().close();
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

			return Status+"~"+Message+"~"+docToken;
		}
}
