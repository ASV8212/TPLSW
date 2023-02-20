package CommonModel;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.SQLException;
import java.util.List;

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

public class FileUploadHandler1 {

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

	public String FileUploadHandler(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		final long serialVersionUID = 1L;
		final String root;

		boolean isMultipart = ServletFileUpload.isMultipartContent(request);

		String type;
		root = request.getParameter("domain1");
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
					AttchName = AryAttchNames[i];
					AttchDescrptn = AryAttchDescrptns[i];
					Filesize = AryFilesize[i];
					Version = AryVersion[i];
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
				
					 File sFile2 = new File ("C:/THEMEPRO/APPLICATION/LSW_Docs/"+ "Attachments"+"/"+PrcsID+ "/"+FormName+"/"+AttchName+"/"+Version+"/");
                     
                     Path sFile2path = Paths.get("C:/THEMEPRO/APPLICATION/LSW_Docs/"+ "Attachments"+"/"+PrcsID+ "/"+FormName+"/"+AttchName+"/"+Version+"/");
                     Files.createDirectories(sFile2path);
                      
                       File sFile3 = new File (sFile2 + "/" + fileName);
                                                                                                   
                                final FileOutputStream FileOutputStream = new FileOutputStream(sFile3);
                                final FileInputStream fileInputStream = new FileInputStream(new File(uppath));
                                                                 
                                 final byte[] buf = new byte[16 * 1024 * 1024];
                                   int len;
                                   while ((len = fileInputStream.read(buf)) > 0) {
                                    FileOutputStream.write(buf, 0, len);
                                   }
                                  // File uploadedFile = new File(sFile2 + "/" + fileName);
                  				//	savepath = uploadedFile.toString();
                  					//String rootsplit = root.split("//")[(root.split("//")).length - 1];
                  				//	AttchPath = savepath.split(rootsplit);
                                      
                                      
                                      OPAttchData += AttchName + "~" + AttchDescrptn + "~"
                  							+ sFile3.toString().replace("C:/THEMEPRO/APPLICATION/LSW_Docs/","") + "~" + Filesize + "~" + Version
                  							+ "|";
                                      
                                      
                                      FileOutputStream.close();  
                                      fileInputStream.close();
					/// Commented For Local STart
					/*NtlmPasswordAuthentication auth1 = new NtlmPasswordAuthentication(
							userPassword);
					SmbFile sFile2 = new SmbFile("smb:" + root + "/"
							+ "Attachments" + "/" + PrcsID + "/" + FormName
							+ "/" + AttchName + "/" + Version, auth1);

					if (sFile2.exists()) {
						// boolean status1 = path.delete();
						// cleanDirectory(sFile2);
					}
					if (!sFile2.exists()) {
						sFile2.mkdirs();
					}

					SmbFile sFile3 = new SmbFile(sFile2 + "/" + fileName, auth1);

					final SmbFileOutputStream smbFileOutputStream = new SmbFileOutputStream(
							sFile3);
					final FileInputStream fileInputStream = new FileInputStream(
							new File(uppath));

					final byte[] buf = new byte[16 * 1024 * 1024];
					int len;
					while ((len = fileInputStream.read(buf)) > 0) {
						smbFileOutputStream.write(buf, 0, len);
					}

					File uploadedFile = new File(sFile2 + "/" + fileName);
					savepath = uploadedFile.toString();
					String rootsplit = root.split("//")[(root.split("//")).length - 1];
					AttchPath = savepath.split(rootsplit);

					OPAttchData += AttchName + "~" + AttchDescrptn + "~"
							+ AttchPath[1] + "~" + Filesize + "~" + Version
							+ "|";
					i = i + 1;
					smbFileOutputStream.close();
					fileInputStream.close();*/
					///// End
				}

			}

		}

		return OPAttchData;

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
}
