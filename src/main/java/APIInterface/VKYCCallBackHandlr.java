package APIInterface;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileUtils;
import org.json.JSONObject;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import CommonModel.DBConnection;
import Controls.GetDBData;

public class VKYCCallBackHandlr {
	public String callbackVKYC(HttpServletRequest request,String reqMethod) {
		try {
            String requestBody = "";
            final String op = "";
            final StringBuilder buffer = new StringBuilder();
            final BufferedReader reader = request.getReader();
            String line;
            while ((line = reader.readLine()) != null) {
                buffer.append(line);
                buffer.append(System.lineSeparator());
            }
            requestBody = buffer.toString();
            JsonObject jsonObject = new JsonParser().parse(requestBody).getAsJsonObject();
            if(jsonObject.has("transactionId"))
            {
            	ArrayList<String> data = new ArrayList<String>();
            	String transid = jsonObject.get("transactionId").getAsString();
            	data = GetDBData.Call(transid, "", "", "", "", "LSW_SGETVKYCAPPLNMAPPING");
            	String prcsID = data.get(0);
            	String cusID = data.get(1);
            	final DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS");
                final LocalDateTime now = LocalDateTime.now();
                final String time = dtf.format(now);
                URL songPath = CommonModel.FileUploadHandler.class.getResource("");
        		String[] pathArr = songPath.toString().split("file:/|/apache");
        		FileInputStream fis = null;
        		String dmsType = "";
        		String username = "";
        		String Path = pathArr[1];
        		String oPAttchData = "";
        		String docToken = "";
        		String fileName = time+".txt";
                fis = new FileInputStream(String.valueOf(Path)+"/wflow/app_datasource.properties");
        		//fis = new FileInputStream("C:/Titus/Office Project/Chola/Build/Build Related/ThemeproLO_Works/Product/wflow/app_datasource.properties");
                Properties prop = new Properties();
                if (fis != null) {
        			prop.load(fis);
        			dmsType = prop.getProperty("DMSTYPE");

        			fis.close();
        		} else {
        			throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");

        		}
                if (dmsType.equals("SHARING")) {
                	username = prop.getProperty("FEPUPLDUsername");
                	
                	final File file = new File(username + "/" + "Attachments" + "/" + prcsID + "/VKYC/"+reqMethod+"/" + time + "/" + time + ".txt");
                	final File file1 = new File(username + "/" + "Attachments" + "/" + prcsID + "/VKYC/"+reqMethod+"/" + time );
                	if(!file.exists())
        			{
                		Path path = file1.toPath();
            			Files.createDirectories(path);
        			}
                	
                    file.createNewFile();
                    FileUtils.writeStringToFile(file, requestBody);
                    oPAttchData = String.valueOf(oPAttchData) + reqMethod+"~VKYV~" + "\\Attachments"
							+ "\\" + prcsID + "\\VKYC\\"+reqMethod+"\\" + time + "\\" + fileName
							+ "~30~" + time + "|";
                	
                }
                Connection con = DBConnection.getConnection(null);
                PreparedStatement procstmt = null;
                ResultSet results = null;
                try {
                	procstmt = con.prepareStatement("{ call sam_sAttachmentDMS1(?,?,?) }");

        			procstmt.setString(1, oPAttchData);
        			procstmt.setString(2, cusID);
        			procstmt.setString(3, "VKYC");

        			results = procstmt.executeQuery();

        			while (results.next()) {
        				docToken = results.getString("DOCTOKEN");
        			}
                }
                catch (Exception e) {
        			e.printStackTrace();
        		} finally {
        			if (con != null) {
        				con.close();
        			}
        			if (procstmt != null) {
        				procstmt.close();
        			}
        			if (results != null) {
        				results.close();
        			}
        		}
                final JSONObject obj = new JSONObject(requestBody);
                GetDBData.Call(docToken, prcsID, cusID, "", "", "LSW_SVKYCCALLBCKRESPON");
                return "success";
            }
            else {
            	return "fail";
            }
            
            
        }
        catch (Exception ex2) {
            ex2.getMessage();
            return "fail";
        }
	}
}
