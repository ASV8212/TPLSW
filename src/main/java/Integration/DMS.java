package Integration;

import java.nio.file.Path;
import java.util.Iterator;
import java.util.List;
import org.apache.commons.fileupload.FileItemFactory;
import java.awt.image.BufferedImage;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.attribute.FileAttribute;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.nio.file.Paths;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.File;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.content.ByteArrayBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.HttpClientBuilder;

import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;

import CommonModel.DBConnection;
import Controls.Connections;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.ServletResponse;


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

import java.nio.ByteBuffer;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Formatter;

public class DMS
{
    private String PrcsID;
    private String FormName;
    private String names;
    private String descrptns;
    private String flsize;
    private String vrsnno;
    private String usrpwd;
    private String domain;
    private String DBSrc;
    private boolean isMultipartfn;
    private ServletResponse response;
	private String DocName;
	private String CusID;
	private String spname;
	private String RespFr;
    
    public void PrcsID(final String PrcsID) {
        this.PrcsID = PrcsID;
    }
    
    public void FormName(final String FormName) {
        this.FormName = FormName;
    }
    
    public void names(final String names) {
        this.names = names;
    }
    
    public void descrptns(final String descrptns) {
        this.descrptns = descrptns;
    }
    
    public void flsize(final String flsize) {
        this.flsize = flsize;
    }
    
    public void vrsnno(final String vrsnno) {
        this.vrsnno = vrsnno;
    }
    
    public void usrpwd(final String usrpwd) {
        this.usrpwd = usrpwd;
    }
    
    public void domain(final String domain) {
        this.domain = domain;
    }
    
    public void CusID(final String CusID) {
        this.CusID = CusID;
    }
    
    public void DocName(final String DocName) {
        this.DocName = DocName;
    }
    
    public void DBSrc(final String DBSrc) {
        this.DBSrc = DBSrc;
    }
    
    public void isMultipartfn(final boolean isMultipartfn) {
        this.isMultipartfn = isMultipartfn;
    }
    
    public String DMSPUSH(final HttpServletRequest request, final HttpServletResponse response) throws Exception {
        final long serialVersionUID = 1L;
        final boolean isMultipart = ServletFileUpload.isMultipartContent(request);
        final String root = request.getParameter("domain");
        final String PrcsID = request.getParameter("PrcsID");
        final String FormName = request.getParameter("FormName");
        final String AttchNames = request.getParameter("names");
        final String AttchDescrptns = request.getParameter("descrptns");
        final String Filesizes = request.getParameter("flsize");
        final String Versions = request.getParameter("vrsnno");
        final String Usrpwd = request.getParameter("usrpwd");
        final String Cusid = request.getParameter("CusID");
        final String DocName = request.getParameter("DocName");
        
        final String[] AryAttchNames = AttchNames.split(",");
        final String[] AryAttchDescrptns = AttchDescrptns.split(",");
        final String[] AryFilesize = Filesizes.split(",");
        final String[] AryVersion = Versions.split(",");
        String AttchName = "";
        String AttchDescrptn = "";
        String Filesize = "";
        String Version = "";
        final String AttchLstDirname = "";
        String OPAttchData = "";
        final String savepath = "";
        final BufferedImage image = null;
        final int width = 963;
        final int height = 640;
        String ResMsg="";
        byte[] hash = new byte[20];
        String Checksum = "";
        
        
        
        
        Connection con = DBConnection.getConnection(DBSrc);
    	PreparedStatement proc_stmt = null;
    	ResultSet rs = null;
    	
        try {
        
        if (isMultipart) {
            final FileItemFactory factory = (FileItemFactory)new DiskFileItemFactory();
            request.getQueryString();
            final ServletFileUpload upload = new ServletFileUpload(factory);
            @SuppressWarnings("unchecked")
			final List<FileItem> multiparts = (List<FileItem>)upload.parseRequest(request);
            int i = 0;
            for (final FileItem item : multiparts) {
                if (!item.isFormField()) {
                    AttchName = AryAttchNames[i];
                    AttchDescrptn = AryAttchDescrptns[i];
                    Filesize = AryFilesize[i];
                    Version = AryVersion[i];
                    final String fileName = item.getName();
                    final File file1 = ((DiskFileItem)item).getStoreLocation();
                    ((DiskFileItem)item).write(file1);
                    final String uppath = file1.getAbsolutePath();
                    final String userPassword = Usrpwd;
                    final File sFile2 = new File(root+"/Attachments/" + PrcsID + "/" + FormName + "/" + AttchName + "/" + Version + "/");
                    final Path sFile2path = Paths.get(root+"/Attachments/" + PrcsID + "/" + FormName + "/" + AttchName + "/" + Version + "/", new String[0]);
                  //  Files.createDirectories(sFile2path, (FileAttribute<?>[])new FileAttribute[0]);
                 //   final File sFile3 = new File(sFile2 + "/" + fileName);
                  //  final FileOutputStream FileOutputStream = new FileOutputStream(sFile3);
                    final FileInputStream fileInputStream = new FileInputStream(new File(uppath));
                    final byte[] buf = new byte[16777216];
                    int len;
                   // while ((len = fileInputStream.read(buf)) > 0) {
                  //      FileOutputStream.write(buf, 0, len);
                  //  }
                    OPAttchData = String.valueOf(OPAttchData) + AttchName + "~" + AttchDescrptn + "~" + "\\Attachments" + "\\" + PrcsID + "\\" + FormName + "\\" + AttchName + "\\" + Version + "\\" + fileName + "~" + Filesize + "~" + Version + "|";
                  //  FileOutputStream.close();
                    
                    
                    ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

                    try {
                        byte[] chunk = new byte[4096];
                        int bytesRead;
                        InputStream stream = fileInputStream;

                        while ((bytesRead = stream.read(chunk)) > 0) {
                            outputStream.write(chunk, 0, bytesRead);
                        }

                    } catch (IOException e) {
                        e.printStackTrace();
                        return null;
                    }

                    String encoded="";
                    byte[] DocContent;
                    Base64 codec = new Base64();
                    
                    DocContent =  outputStream.toByteArray();
                    encoded = codec.encode(DocContent);

                    outputStream.close();                 
                    
                    fileInputStream.close();
                    ++i;
                    
        
                    MessageDigest md = MessageDigest.getInstance("SHA-1");

                    hash = md.digest(DocContent);               
                    
                    Formatter formatter = new Formatter();
                    for (byte b : hash) {
                        formatter.format("%02x", b);
                    }
                    
                    Checksum = formatter.toString();
                    
                 /*   proc_stmt = con.prepareStatement("{ call sam_sAttachmentDMS(?,?,?) }");
                   
                    proc_stmt.setString(1, OPAttchData);
            		proc_stmt.setString(2, CusID);
            		proc_stmt.setString(3, DocName);
            		
            		rs=proc_stmt.executeQuery(); 
            		
            		
            		while (rs.next()) {
                        System.out.println("Data Saved Suceessfully");
                    }
            		
  Connections.Call(proc_stmt,rs,con,"Commit");   */

  
  
  // START API 
  
  String APiURL="";
  String REQ="";
  
  proc_stmt = con.prepareStatement("{ call SAM_SGETDMSREQ(?,?,?,?,?) }");
  
  proc_stmt.setString(1, OPAttchData);
	proc_stmt.setString(2, CusID);
	proc_stmt.setString(3, DocName);
	proc_stmt.setString(4, Checksum);
	proc_stmt.setString(5, "REQ-1");
	
	rs=proc_stmt.executeQuery(); 
	    	
  
	while (rs.next()) {
       APiURL =  rs.getString(1);
       REQ    =  rs.getString(2);
       Version    =  rs.getString(3);
       
       
    }
  
 // jsonData=jsonData.replace("JSONREQCONTENT", encoded);  

	Connections.Call(proc_stmt,rs,con,"Commit");    
	
HttpClient  client = HttpClientBuilder.create().build();
HttpPost post = new HttpPost(APiURL);
// final String USER_AGENT = "Mozilla/5.0";
//post.setHeader("x-karza-key", karzakey);
//File file = new File("File Path");
//File file = new File(url1.toString());
MultipartEntity entity = new MultipartEntity();
ByteArrayBody body = new ByteArrayBody(DocContent,"image/jpeg", fileName);
//ByteArrayBody body = new ByteArrayBody(readBytesFromFile("C:\\Users\\ETDU041\\Desktop\\BANK STATEMENT\\5448\\JULY18.pdf"),"application/pdf", Filename);
// ByteArrayBody body = new ByteArrayBody(DocContent,"application/pdf", "JULY18.pdf");
entity.addPart("image",body);
entity.addPart("consent",new StringBody("Y"));
entity.addPart("data",new StringBody(REQ));

post.setEntity(entity);
HttpResponse  response1 = client.execute(post);
BufferedReader rd = new BufferedReader(
new InputStreamReader(response1.getEntity().getContent()));
StringBuffer result = new StringBuffer();
String line = "";
while ((line = rd.readLine()) != null) {
result.append(line);

}

DocContent=null;
rd.close();
//System.out.println(result);

int StatusCode = response1.getStatusLine().getStatusCode();


ResMsg = result.toString();  
  
  // END API
  
proc_stmt = con.prepareStatement("{ call SAM_SGETDMSREQ(?,?,?,?,?) }");

proc_stmt.setString(1, OPAttchData);
	proc_stmt.setInt(2, StatusCode);
	proc_stmt.setString(3, Version);
	proc_stmt.setString(4, ResMsg);
	proc_stmt.setString(5, "REQ-2");
	
	rs=proc_stmt.executeQuery(); 
	    	

	while (rs.next()) {
		RespFr =  rs.getString(1);
     //REQ    =  rs.getString(2);
    // Version    =  rs.getString(3);
  }  

if (RespFr.equals("Success"))
{
	OPAttchData = AttchName + "~" + AttchDescrptn + "~" + ResMsg +"\\" + AttchName  + "~" + Filesize + "~" + Version + "|";
}
else
{
	OPAttchData = RespFr;
}
 		
            		
                }
            }
        }
        
        }
        catch(Exception e) {
        	try {
        		proc_stmt = con.prepareStatement("{ call SAM_SGETDMSREQ(?,?,?,?,?) }");
        		proc_stmt.setString(1, "");
        		proc_stmt.setString(2, "");
        		proc_stmt.setString(3, Version);
        		proc_stmt.setString(4, e.getMessage());
        		proc_stmt.setString(5, "EXCEPTION");
        		
        		rs=proc_stmt.executeQuery();
        		while (rs.next()) {
        			RespFr =  rs.getString(1);
        		}
        		OPAttchData = RespFr;
        		
        		Connections.Call(proc_stmt,rs,con,"Commit");
        	}
        	catch  (Exception e1)
			{
        	Connections.Call(proc_stmt,rs,con,"Rollback");
        	OPAttchData = "Fail";
			// TODO Auto-generated catch block
			e1.printStackTrace();
			}
		}

		finally {		        
			Connections.Call(proc_stmt,rs,con,"Close");
	}		
        return OPAttchData;
        
     
    }
    
    public static void removeDirectory(final File dir) {
        if (dir.isDirectory()) {
            final File[] files = dir.listFiles();
            if (files != null && files.length > 0) {
                File[] array;
                for (int length = (array = files).length, i = 0; i < length; ++i) {
                    final File aFile = array[i];
                    removeDirectory(aFile);
                }
            }
            dir.delete();
        }
        else {
            dir.delete();
        }
    }
    
    public static void cleanDirectory(final File dir) {
        if (dir.isDirectory()) {
            final File[] files = dir.listFiles();
            if (files != null && files.length > 0) {
                File[] array;
                for (int length = (array = files).length, i = 0; i < length; ++i) {
                    final File aFile = array[i];
                    removeDirectory(aFile);
                }
            }
        }
    }
}