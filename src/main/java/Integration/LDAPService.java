package Integration;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Properties;

//import org.codehaus.jettison.json.JSONObject;
import CommonModel.DBConnection;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

public class LDAPService {

/*	public static void main(String as[]) throws Exception
	{
		System.out.println("LDAP Response "+new LDAPService().LDAPAPIService("LSW_SLDAPSERVICE","5032362","Sunsys@369"));
	}
	*/
public String LDAPAPIService(String spname1,String Input1,String Input2) throws Exception {
		
	    String ResMsg = "";
	    String Output="";
	    Connection conEM=null;
	    PreparedStatement prEM1=null;
	    FileInputStream fis1=null;
	    String JsonData="{\"username\":\"USRNME\", \"password\":\"PSSWRD\"}";
	    
	    try {
    	
	    	Properties props=new Properties();
	    	
	    	    String propFileName = "APIProp.properties";
	 		//	String fileName = "";
	 		//	fileName = System.getProperty("catalina.base");
	 		//	fileName = String.valueOf(fileName) + "/conf/" + propFileName;
	 		//String path=fileName;
	 		//	fis1 = new FileInputStream(path);
	     	//    props.load(fis1);
	    	
    	    String path="G:\\ThemeproLO_Works\\Product\\wflow\\";
    	   // fis1 = new FileInputStream( path+"DBSource.properties");
    	   fis1 = new FileInputStream( path+"app_datasource.properties");
    	    props.load(fis1);
//    	    System.out.println("privatekey "+ props.getProperty("BSAprivatekey"));
//    	    System.out.println("DIGEST_ALGO "+ props.getProperty("DIGEST_ALGO"));
    	    final String APiURL=props.getProperty("LDAPURL");
    	    fis1.close();
	    	
			if(conEM==null)
			{
				conEM=DBConnection.getConnection(null);
			} 
									
			JsonData=JsonData.replace("USRNME",Input1).replace("PSSWRD",Input2);
			
	    	  Output=InterfaceCall(APiURL,JsonData,"application/json");

	      
	      	System.out.println("Response: " + Output);
	      
		  	String Status=null;
		  	String Message=null;
		  	
		  	String [] resultSplit=Output.split("!@#");
		  	
		  	Status=resultSplit[0];
		  	
		  	Message=resultSplit[1];
		  	

		  	prEM1=conEM.prepareStatement("{ call " + spname1 + "(?,?,?,?,?) }");
		  	
		  	prEM1.setString(1, Input1);
		  	prEM1.setString(2, Input2);
		  	prEM1.setString(3, JsonData);
		  	prEM1.setString(4, Status);
		  	prEM1.setString(5, Message);
			
		  	prEM1.executeQuery();
		  	
		  	ResMsg=Message;
		  	
	    } catch (SQLException e) {
	      
	      e.printStackTrace();     
	      ResMsg = e.toString();
	      System.out.println("Response: " + ResMsg);
	      return ResMsg;
	    } 
	    catch (Exception e)
		{
	    	e.printStackTrace();
	        ResMsg = e.toString();
	        System.out.println("Response: " + ResMsg);
	        return ResMsg;
		}
	    finally
	    {
	    	DBConnection.closeConnection(conEM,prEM1,null);
	    }
	    return ResMsg;
		}
	
	public static String InterfaceCall(String APiURL,String JsonData,String contenttype) 
	{

		String Status=null;
		String Message=null;
			
		try
		{
			
		  OkHttpClient client = new OkHttpClient(); 
	    
	      MediaType mediaType = MediaType.parse(contenttype);
	      RequestBody body = RequestBody.create(mediaType, JsonData);
	      
	      Request request = (new Request.Builder())        
	        .url(APiURL)
	        .post(body)
	        .addHeader("content-type", contenttype)
	        .addHeader("cache-control", "no-cache")
	        .build();

	      
	      Response response = client.newCall(request).execute();
		
	      System.out.println("InterfaceKYCCall Response Code "+ response.code());

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
		        return Status+"!@#"+Message;
			}

			return Status+"!@#"+Message;
		}
}
