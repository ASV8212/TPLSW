package CommonModel;


import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import Controls.Connections;



public class sendSMS {
static String USNA=null;
static String PSWD=null;
static String URL=null;
static String FROM=null;
static String UDH=null;
static String DLRURL=null;
static String CODE=null;
static String CATE=null;

static String TO=null;
static String TEXT=null;

static String API=null;
static String TAPI=null;
static String DBSrc=null;
static String requestUrl=null;

static String CUSNAME=null;
static String OTP=null;
static String APP=null;

static String APPID= null;


static String ACCTID=null;
static String PK_ID=null;

static String FLG=null;
static String MSG=null;

private String param1;
private String param2;
private String param3;
private String param4;
private String param5;
private String spname1;
private String spname2;

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
public void spname1(String spname1) {
       this.spname1 = spname1;
}
public void spname2(String spname2) {
       this.spname2 = spname2;
}


static Connection accessDB()
{
Connection con = null;
try 
{
//Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        //con = DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=testdb;user=sa;password=encore@123");                   
        //con = DriverManager.getConnection("jdbc:sqlserver://14.192.17.66:1433;databaseName=LSWCH;user=sa;password=encore123");                   
     //con = DriverManager.getConnection("jdbc:sqlserver://14.192.17.61:1433;databaseName=ThemePro_SCF;user=sa;password=ett@09");                     
con=DBConnection.getConnection(DBSrc);       

return con;
}
catch(Exception ex) 
{
System.out.println(ex.getMessage());
}
return con;
}

static void getAPI()
{

	Connection con=accessDB();
	ResultSet results=null;//=accessDB("SAM_SgetUrlDataToSMS","Dashboard");

	CallableStatement ps=null;
	
try 
{



 ps = con.prepareCall("{ call SAM_SgetUrlDataToSMS(?,?) }");
        ps.setString(1,"OTP");
        ps.setString(2,"English");
        results=ps.executeQuery(); 
        
   ResultSetMetaData rsmd = results.getMetaData();
   int colCount           = rsmd.getColumnCount();
   USNA="";
   PSWD="";
   APPID="";
   URL="";
   FROM="";
   UDH="";
   DLRURL="";
   CODE="";
   CATE="";
   TO="";
   TEXT="";
   API="";
   TAPI="";
   APP="";
   CUSNAME="";
   PK_ID="";
   ACCTID="";
   OTP="";
   FLG="";
   MSG="";
while(results.next())
{
  //xml = xml   + "<row>";
for (int i = 1; i <= colCount; i++)
     { 

//for (int i = 0; i < recipientEmail.split("\\,").length; i++) 

String chk= rsmd.getColumnLabel(i).toString();
String value2 = results.getString(i);

if(value2 == null)
{
value2="";
}
else if(chk.equals("username"))
{
USNA = value2; 
}
else if(chk.equals("password"))
{
PSWD = value2;
}

else if(chk.equals("udh"))
{
UDH = value2;
}
else if(chk.equals("from"))
{
FROM = value2;

}
else if(chk.equals("dlrurl"))
{
DLRURL = value2;

}
else if(chk.equals("url"))
{
URL = value2;
}
else if(chk.equals("api"))
{
TAPI=value2;
}
else if(chk.equals("coding"))
{
CODE = value2;

}
else if(chk.equals("category"))
{
CATE = value2;

}
else if(chk.equals("text"))
{
TEXT = value2;

}
else if(chk.equals("APPID"))
{
APPID = value2;

}
else if(chk.equals("FLG"))
{
	FLG = value2;
}
else if(chk.equals("MSG"))
{
	MSG = value2;
}
//coding,category,Language
//CODE,CATE
//xml = xml   + "<"+rsmd.getColumnName(i)+">"+value2+"</"+rsmd.getColumnName(i)+">";   

  }

//xml = xml   + "</row>";
}
        
Connections.Call(ps,results,con,"Commit");
} 
catch(Exception ex) 
{
	Connections.Call(ps,results,con,"Rollback");
System.out.println(ex.getMessage());
}
finally
{
	Connections.Call(ps,results,con,"Close");
}
}

public String getSenderInfo()
{
	
	String Result= "";
	
	Connection con=accessDB();
    ResultSet results=null;
    CallableStatement ps = null;
	
try 
{
//=accessDB("SAM_SgetRecepientDataToSMS","SMS");
        
        ps = con.prepareCall("{ call " + spname1
                           + "(?,?,?,?,?) }");
        ps.setString(1, param1);
        ps.setString(2, param2);
        ps.setString(3, param3);
        ps.setString(4, param4);
        ps.setString(5, param5);
        results=ps.executeQuery(); 
        
        ResultSetMetaData rsmd = results.getMetaData();
        int colCount           = rsmd.getColumnCount();
while(results.next())
{
for (int i = 1; i <= colCount; i++)
     { 

API=TAPI;

String chk= rsmd.getColumnLabel(i).toString();
String value2 = results.getString(i);

if(value2 == null)
{
value2="";
}
else if(chk.equals("CUSMOBNO"))
{
TO = value2; 
}

else if(chk.equals("OTP"))
{
OTP = value2; 
}

else if(chk.equals("CUSNAME"))
{
CUSNAME = value2; 
}

else if(chk.equals("APP"))
{
APP = value2; 
}
/*else if(chk.equals("MSG"))
{
TEXT = value2;
//byte[] array = TEXT.getBytes("UTF-8");
//TEXT = new String(array, Charset.forName("UTF-8"));
//TEXT = new String(TEXT.getBytes(),"UTF-8");
//TEXT = Hex.encodeHexString(TEXT.getBytes("UTF-8"));
//System.out.println(TEXT);
}*/

else if(chk.equals("PK_ID"))
{
PK_ID = value2;
}


  }

TEXT=TEXT.replace("$NAME$", CUSNAME);
TEXT=TEXT.replace("$OTP$", OTP);
TEXT=TEXT.replace("$APP$", APP);

TEXT=TEXT.replace(" ", "%20");


API=API.replace("USNA", USNA);
API=API.replace("PSWD", PSWD);
API=API.replace("TO", TO);
//API=API.replace("TEXT", URLEncoder.encode(TEXT, "UTF-8"));
API=API.replace("TEXT", TEXT);
API=API.replace("FROM", FROM);
API=API.replace("APPID", APPID);
API=API.replace("UDH", UDH);
API=API.replace("DLRURL", DLRURL);
API=API.replace("CODE", CODE);
API=API.replace("CATE", CATE); 
//API=API.replace('&','$');
//API=API.replace(" ","%20");
//API=API.replace("9442806919","9488575702");
//API=API.replace(",","%2C");
//API=API.replace("account.","a/c%2E");
try
{
//
//API=API+"&charset=UTF-16BE";
//

//String url = URLEncoder.encode(API, "UTF-8");
//url = URIUtil.encodeQuery(url);




/* URL obj = new URL(URLEncoder.encode(url, "UTF-8"));
HttpURLConnection con1 = (HttpURLConnection) obj.openConnection();

// optional default is GET
con1.setRequestMethod("GET");

//add request header
//con.setRequestProperty("User-Agent", USER_AGENT);

int responseCode = con1.getResponseCode();
System.out.println("\nSending 'GET' request to URL : " + url);
System.out.println("Response Code : " + responseCode);

BufferedReader in = new BufferedReader(
       new InputStreamReader(con1.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();

while ((inputLine = in.readLine()) != null) {
response.append(inputLine);
}
in.close();

//print result
System.out.println(response.toString());
*/

URL url = new URL(API);
HttpURLConnection uc = (HttpURLConnection)url.openConnection();
int code = uc.getResponseCode();
if ( code == HttpURLConnection.HTTP_OK ) 
{

            //Get response data.

            BufferedReader in = new BufferedReader(new InputStreamReader(uc.getInputStream()));
            String str;
            String XML=null;
            String ECode;
            while( null != ((str = in.readLine()))) 
            {           	
            	
            	
            XML="<Form><Details>";
            str=str.replace('&',',');
            //String status = str.getString("errorcode");
           // String[] data = str.split(",", 3);
           // ECode=data[1];
            //SENDSTATUS,RET_MSG,ERRDESC,SENDDATE
            if (str.contains(USNA))
               {  
            	Result = "Success";
                XML=XML+"<SENDSTATUS>Y</SENDSTATUS>";
                XML=XML+"<RET_MSG>"+str+"</RET_MSG>";
                XML=XML+"<PK_ID>"+PK_ID+"</PK_ID>";
               }
               else
               {  
            	  	Result = "Fail";
                XML=XML+"<SENDSTATUS>F</SENDSTATUS>";
                XML=XML+"<ERRDESC>"+str+"</ERRDESC>";
                XML=XML+"<PK_ID>"+PK_ID+"</PK_ID>";
               }
               XML=XML+"</Details></Form>";
               getDatatoDB(XML,PK_ID,Result);
               System.out.println(API);
               System.out.println(str);
               System.out.println();
            }    

}
uc.disconnect();

}
catch(Exception ex) 
{
	Result = ex.getMessage().toString();
System.out.println(ex.getMessage());
} 
 //xml = xml   + "</row>";
}
        
Connections.Call(ps,results,con,"Commit");

} 
catch(Exception ex) 
{
	Result = ex.getMessage().toString();
	Connections.Call(ps,results,con,"Rollback");
System.out.println(ex.getMessage());
}
finally
{
	Connections.Call(ps,results,con,"Close");
}
return Result+'|'+FLG+'|'+MSG;
}
public void getDatatoDB(String xml,String PKID,String Result)
{
Connection con=accessDB();
ResultSet results;
try 
{
CallableStatement ps = con.prepareCall("{ call " + spname2
              + "(?,?,?,?,?) }");
              ps.setString(1, param1);
              ps.setString(2, param2);
              ps.setString(3, PKID);
              ps.setString(4, xml);
              ps.setString(5, Result);
        results=ps.executeQuery(); 
}
catch(Exception ex) 
{
System.out.println(ex.getMessage());
}
}
/*public static void main(String arg[])
{
//System.setProperty("file.encoding", "UTF-8");
getAPI();
getSenderInfo();
System.out.println("SUCCESS...");
}*/
public String SendSMSMain() throws SQLException, ClassNotFoundException {
       
       String str = "";
       getAPI();
       str = getSenderInfo();
       System.out.println("SUCCESS...");
       return str;
       
}
}

