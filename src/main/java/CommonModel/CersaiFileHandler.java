package CommonModel;


import java.awt.image.BufferedImage;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import jcifs.smb.NtlmPasswordAuthentication;
import jcifs.smb.SmbException;
import jcifs.smb.SmbFile;
import jcifs.smb.SmbFileOutputStream;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.stereotype.Controller;

import CommonModel.DBConnection;
//import CommonController.AppZip;
public class CersaiFileHandler {

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
	private String TxtFile;
	private ServletResponse response;
	   String sFilepath ="";
	   String OUTPUT_ZIP_FILE="";
	public void PrcsID(String PrcsID) {
		this.PrcsID = PrcsID;
	}

	public void FormName(String FormName) {
		this.FormName = FormName;
	}

	public void names(String names) {
		this.names = names;
	}

	public void descrptns(String descrptns) {
		this.descrptns = descrptns;
	}

	public void flsize(String flsize) {
		this.flsize = flsize;
	}

	public void vrsnno(String vrsnno) {
		this.vrsnno = vrsnno;
	}

	public void usrpwd(String usrpwd) {
		this.usrpwd = usrpwd;
	}

	public void domain(String domain) {
		this.domain = domain;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public void isMultipartfn(boolean isMultipartfn) {
		this.isMultipartfn = isMultipartfn;
	}

	public String CersaiFileHandler(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		final long serialVersionUID = 1L;
		final String root;
		  String defaultLogFile = "C:\\Cersai\\MyLogFile.log";
		boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		 String FileName="";
		String type;
		root = request.getParameter("domain1");
	//	AppZip appZip = new AppZip();
		// root="//192.168.168.38//TestAttachment";
		// String Usrpwd="ETDU038:is@123";
		String PrcsID = request.getParameter("PrcsID");
		String FormName = request.getParameter("FormName");
		String AttchNames = request.getParameter("names");
		String AttchDescrptns = request.getParameter("descrptns");
		String Filesizes = request.getParameter("flsize");
		String Versions = request.getParameter("vrsnno");
		String Usrpwd = request.getParameter("usrpwd1");

		String AryAttchNames[] = AttchNames.split(",");
		String AryAttchDescrptns[] = AttchDescrptns.split(",");
		String AryFilesize[] = Filesizes.split(",");
		String AryVersion[] = Versions.split(",");

		String AttchName = "";
		String AttchDescrptn = "";
		String Filesize = "";
		String Version = "";
		String AttchLstDirname = "";
		String OPAttchData = "";
		String AttchPath[];
		String savepath = "";
		BufferedImage image = null;
		int width = 963;
		int height = 640;

		if (isMultipart) {
			// Create a factory for disk-based file items
			FileItemFactory factory = new DiskFileItemFactory();

			request.getQueryString();
			// Create a new file upload handler
			ServletFileUpload upload = new ServletFileUpload(factory);

			List<FileItem> multiparts = upload.parseRequest(request);
			// Iterator iterator = items.iterator();
			int i = 0;
			// while (iterator.hasNext()) {

			for (FileItem item : multiparts) {
				if (!item.isFormField()) {
					AttchName = AryAttchNames[0];
					AttchDescrptn = AryAttchDescrptns[0];
					Filesize = AryFilesize[0];
					Version = AryVersion[0];
					String fileName = item.getName();

					File file1 = ((DiskFileItem) item).getStoreLocation();
					// File file2 = File.createTempFile("fileName", ".tmp");

					// BufferedWriter bw = new BufferedWriter(new
					// FileWriter(file2));

					((DiskFileItem) item).write(file1);

					//  String uppath=    file1.getAbsolutePath();
					
					// bw.close();

					
							
					String uppath = file1.getAbsolutePath();
					String userPassword = Usrpwd;
				
				//	 File sFile2 = new File ("C:/THEMEPRO/APPLICATION/LSW_Docs/"+ "Attachments"+"/"+PrcsID+ "/"+FormName+"/"+AttchName+"/"+Version+"/");
					 File sFile2 = new File (root+"/CersaiFileUpload/"+PrcsID+ "/"+FormName+"/"+AttchName+"/"+Version+"/");
                     
                     Path sFile2path = Paths.get(root+"/CersaiFileUpload/"+PrcsID+ "/"+FormName+"/"+AttchName+"/"+Version+"/");
                     //Path sFile2path = Paths.get("C:/THEMEPRO/APPLICATION/LSW_Docs/"+ "Attachments"+"/"+PrcsID+ "/"+FormName+"/"+AttchName+"/"+Version+"/");
                     Files.createDirectories(sFile2path);
                      
                       File sFile3 = new File (sFile2 + "/" + fileName);
                                                                                                   
                                final FileOutputStream FileOutputStream = new FileOutputStream(sFile3);
                                final FileInputStream fileInputStream = new FileInputStream(new File(uppath));
                                                                 
                                 final byte[] buf = new byte[16 * 1024 * 1024];
                                   int len;
                                   while ((len = fileInputStream.read(buf)) > 0) {
                                    FileOutputStream.write(buf, 0, len);
                                   }
                                 
                                      
                                      
                                      OPAttchData += AttchName + "~" + AttchDescrptn + "~"
                  							+ sFile3.toString().replace("C:\\\\THEMEPRO\\\\APPLICATION\\\\LSW_Docs","") + "~" + Filesize + "~" + Version
                  							+ "|";
                                      
                                      
                                      
                                      
                                  
                                      FileOutputStream.close();  
                                      fileInputStream.close();
                                  	Connection con = DBConnection.getConnection(DBSrc);
                                	
                                    // PreparedStatement proc_stmt = con.prepareStatement("{ call " + spname +"(?,?,?,?,?) }");
                                     PreparedStatement ps = con.prepareStatement("{ call LSW_SCERSAIBatchFile(?,?,?,?,?) }");
                                     
                                     // for rhfl LSW_sCKYCTxtFile ---previous sp name Sam_sCersaiTxtFile
                                     //E:\cersai sp\RHFL\Sam_sCersaiTxtFile\modified\TxtFileCont---->Sam_sCersaiTxtFile sp file location 
                                     ps.setString(1, sFile3.getAbsolutePath());
                                     ps.setString(2, "");
                                     ps.setString(3, "");
                                     ps.setString(4, "");
                                     ps.setString(5, "");
                                   
                                   ResultSet rstxt =  ps.executeQuery();
                                   
                                   	
                                  
                                //   int colCount           = rsmd.getColumnCount();
                                   TxtFile="";
                                
                                  
                                 while(rstxt.next())
                                 {
                                	 sFilepath= rstxt.getString(2);
                               	  TxtFile=TxtFile+rstxt.getString(1);
                               	FileName=rstxt.getString(3);
                                 }
                                 if(FileName == null || FileName.isEmpty())
                                 {
                                	 write(defaultLogFile,sFile3.toString().replace("C:\\\\THEMEPRO\\\\APPLICATION\\\\LSW_Docs","") +"/"+TxtFile+" Status:Fail"+"\n");
                                	 return TxtFile;
                                	   
                                 }
                                 File f = new File(sFilepath);
                                 f.getParentFile().mkdirs(); 
                                 f.createNewFile();
                                   System.out.print(sFilepath);  
                                   BufferedWriter bw = null;
                             		FileWriter fw = null;

                             		try {

                             			String content = TxtFile;

                             			fw = new FileWriter(sFilepath);
                             			bw = new BufferedWriter(fw);
                             			bw.write(content);

                             			
                             		   write(defaultLogFile, sFile3.toString().replace("C:\\\\THEMEPRO\\\\APPLICATION\\\\LSW_Docs","") +"/"+sFilepath+" Status:Sucess"+"\n");
                             			
                             		} catch (IOException e) {

                             			e.printStackTrace();

                             		}
                             		finally {

                              			try {

                              				if (bw != null)
                              					bw.close();

                              				if (fw != null)
                              					fw.close();

                              			} catch (IOException ex) {

                              				ex.printStackTrace();

                              			}

                              		}
                             		  OUTPUT_ZIP_FILE = sFilepath.replace(".txt", ".zip");
                             		zipSingleFile( f,  OUTPUT_ZIP_FILE);
                             		f.delete();
                             		// appZip.generateFileList(new File(sFilepath),sFilepath);
                             	  //  appZip.zipIt(OUTPUT_ZIP_FILE,sFilepath);
				}

			}

		}

		return OUTPUT_ZIP_FILE;

	}

	public static void removeDirectory(File dir) {
		if (dir.isDirectory()) {
			File[] files = dir.listFiles();
			if (files != null && files.length > 0) {
				for (File aFile : files) {
					removeDirectory(aFile);
				}
			}
			dir.delete();
		} else {
			dir.delete();
		}
	}

	public static void cleanDirectory(File dir) {
		if (dir.isDirectory()) {
			File[] files = dir.listFiles();
			if (files != null && files.length > 0) {
				for (File aFile : files) {
					removeDirectory(aFile);
				}
			}
		}
	}
	  public static void write(String f, String s) throws IOException {
		
	         TimeZone tz = TimeZone.getTimeZone("EST"); // or PST, MID, etc ...
	         Date now = new Date();
	         DateFormat df = new SimpleDateFormat ("yyyy.mm.dd hh:mm:ss ");
	         df.setTimeZone(tz);
	         String currentTime = df.format(now);
	        
	         FileWriter aWriter = new FileWriter(f, true);
	         aWriter.write("\n");
	         aWriter.write("\n"+currentTime + " " + s + "\n");
	         aWriter.write("\n");
	         aWriter.flush();
	         aWriter.close();
	     }
	  private static void zipSingleFile(File file, String zipFileName) {
	        try {
	            //create ZipOutputStream to write to the zip file
	            FileOutputStream fos = new FileOutputStream(zipFileName);
	            ZipOutputStream zos = new ZipOutputStream(fos);
	            //add a new Zip Entry to the ZipOutputStream
	            ZipEntry ze = new ZipEntry(file.getName());
	            zos.putNextEntry(ze);
	            //read the file and write to ZipOutputStream
	            FileInputStream fis = new FileInputStream(file);
	            byte[] buffer = new byte[1024];
	            int len;
	            while ((len = fis.read(buffer)) > 0) {
	                zos.write(buffer, 0, len);
	            }
	            
	            //Close the zip entry to write to zip file
	            zos.closeEntry();
	            //Close resources
	            zos.close();
	            fis.close();
	            fos.close();
	            System.out.println(file.getCanonicalPath()+" is zipped to "+zipFileName);
	            
	        } catch (IOException e) {
	            e.printStackTrace();
	        }

	    }
	  
	  
}
