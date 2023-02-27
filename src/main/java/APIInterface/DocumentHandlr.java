package APIInterface;

import java.io.*;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.Random;
import java.util.zip.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.FilenameUtils;

import CommonModel.DBConnection;
import Controls.GetDBData;

public class DocumentHandlr {
	public String dmsHandler(HttpServletRequest request, HttpServletResponse response)  {
		String resp = "";
		String requestBody = "";
		String prcsid = "";
		ArrayList<String> data = new ArrayList<String>();
		boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		try {
			if (isMultipart) {
				FileItemFactory factory = new DiskFileItemFactory();
				ServletFileUpload upload = new ServletFileUpload(factory);
				List<FileItem> multiparts = upload.parseRequest(request);
				FileItem itemfinal = null;
				for (FileItem item : multiparts) {
					if (item.isFormField()) {
						requestBody = item.getString();
					}
					else
					{
						itemfinal=item;
					}
				}
				if (requestBody.equals("") || requestBody == null) {
					
				}
				if (itemfinal == null) {
					
				}
				if (itemfinal.getName() == null) {
					
				}
				if (itemfinal.getName().equals("")) {
					
				}
				Properties prop = new Properties();
				File file1 = ((DiskFileItem) itemfinal).getStoreLocation();
				((DiskFileItem) itemfinal).write(file1);
				URL songPath = CommonModel.FileUploadHandler.class.getResource("");
				String[] pathArr = songPath.toString().split("file:/|/apache");
				FileInputStream fis = null;
				String Path = pathArr[1];
				String username="";
				fis = new FileInputStream(String.valueOf(Path)+"/wflow/app_datasource.properties");
				//fis = new FileInputStream(
					//	"C:/Titus/Office Project/Chola/Build/Build Related/ThemeproLO_Works/Product/wflow/app_datasource.properties");

				if (fis != null) {
					prop.load(fis);
					username = prop.getProperty("FEPUPLDUsername");

					fis.close();
				} else {
					throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");

				}
				data = GetDBData.Call(requestBody, "", "", "", "","LSW_SAUTOTRAC_GETPRCSID");
				prcsid = data.get(0);
				unzip(file1,username+"/Attachments/"+prcsid+"/DocumentPushedFromTractorFinance!@#",requestBody,username);
			}
		}
		catch (Exception e) {
			
		}
		return resp;
	}
	
	private void unzip(File zipFilePath, String destDir,String requestBody,String username) {
        File dir = new File(destDir);
        // create output directory if it doesn't exist
        if(!dir.exists()) dir.mkdirs();
        FileInputStream fis;
        //buffer for read and write data to file
        byte[] buffer = new byte[4096];
        try {
            fis = new FileInputStream(zipFilePath);
            ZipInputStream zis = new ZipInputStream(fis);
            ZipEntry ze = zis.getNextEntry();
            while(ze != null){
                String fileName = ze.getName();
                if(ze.getName().endsWith("/"))
                {
                	File file1 = new File(destDir + "/"+ fileName.replace("//","\\\\"));
                	Path path = file1.toPath();
                	Files.createDirectories(path);
                }
                else
                {
                	File newFile = new File(destDir + "/"+ fileName.replace("//","\\\\"));
                    System.out.println("Unzipping to "+newFile.getAbsolutePath());
                    //create directories for sub directories in zip
                    new File(newFile.getParent()).mkdirs();
                    FileOutputStream fos = new FileOutputStream(newFile);
                    int len;
                    while ((len = zis.read(buffer)) > 0) {
                    fos.write(buffer, 0, len);
                    }
                    fos.close();
                    //close this ZipEntry
                    
                    createdmsid(newFile.getAbsolutePath().split("LSW_Docs")[1],requestBody,newFile.getAbsolutePath().split("DocumentPushedFromTractorFinance!@#")[1]);
                }
                zis.closeEntry();
                ze = zis.getNextEntry();
            }
            //close last ZipEntry
            zis.closeEntry();
            zis.close();
            fis.close();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (SQLException e) {
			e.printStackTrace();
		}
        
    }
	
	private void createdmsid(String oPAttchData,String requestBody,String folderStrucuture) throws SQLException {
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt = null;
		ResultSet results = null;
		
		try {
			Random rnd = new Random();
		    int number = rnd.nextInt(999999);
			procstmt = con.prepareStatement("{ call LSW_SDMSPUSH(?,?,?,?,?) }");

			procstmt.setString(1, oPAttchData);
			procstmt.setString(2, String.format("%06d", number));
			procstmt.setString(3, "Tractor Finance");
			procstmt.setString(4, requestBody);
			procstmt.setString(5, folderStrucuture);

			procstmt.executeQuery();

		} catch (Exception e) {
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
	}
}
