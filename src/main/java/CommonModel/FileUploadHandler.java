package CommonModel;

import CommonModel.FileUploadHandler;
import CommonModel.DBConnection.propV;
import jcifs.smb.NtlmPasswordAuthentication;
import jcifs.smb.SmbFile;
import jcifs.smb.SmbFileOutputStream;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.FileAttribute;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;
import java.util.Properties;

import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class FileUploadHandler {
	private String PrcsID;
	private String FormName;
	private String names;
	private String descrptns;
	private String flsize;
	private String vrsnno;
	private String usrpwd;
	private String domain;
	private String DBSrc;
	private String DocName;
	private String CusID;
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
	public void CusID(final String CusID) {
        this.CusID = CusID;
    }
    
    public void DocName(final String DocName) {
        this.DocName = DocName;
    }
	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public void isMultipartfn(boolean isMultipartfn) {
		this.isMultipartfn = isMultipartfn;
	}

	public String FileUploadHandler(HttpServletRequest request, HttpServletResponse response) throws Exception {
		long serialVersionUID = 1L;
		boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		String root = request.getParameter("domain1");
		String PrcsID = request.getParameter("PrcsID");
		String FormName = request.getParameter("FormName");
		String AttchNames = request.getParameter("names");
		String AttchDescrptns = request.getParameter("descrptns");
		String Filesizes = request.getParameter("flsize");
		String Versions = request.getParameter("vrsnno");
		String Usrpwd = request.getParameter("usrpwd1");
		final String Cusid = request.getParameter("CusID");
        final String DocName = request.getParameter("DocName");
		String[] AryAttchNames = AttchNames.split(",");
		String[] AryAttchDescrptns = AttchDescrptns.split(",");
		String[] AryFilesize = Filesizes.split(",");
		String[] AryVersion = Versions.split(",");
		String docToken = "";
		String AttchName = "";
		String AttchDescrptn = "";
		String Filesize = "";
		String Version = "";
		String AttchLstDirname = "";
		String OPAttchData = "";
		String savepath = "";
		BufferedImage image = null;
		int width = 963;
		int height = 640;
		if (isMultipart) {
			DiskFileItemFactory diskFileItemFactory = new DiskFileItemFactory();
			request.getQueryString();
			ServletFileUpload upload = new ServletFileUpload((FileItemFactory) diskFileItemFactory);
			List<FileItem> multiparts = upload.parseRequest(request);
			int i = 0;
			for (FileItem item : multiparts) {
				if (!item.isFormField()) {
					AttchName = AryAttchNames[i];
					AttchDescrptn = AryAttchDescrptns[i];
					Filesize = AryFilesize[i];
					Version = AryVersion[i];
					String fileName = item.getName();
					File file1 = ((DiskFileItem) item).getStoreLocation();
					((DiskFileItem) item).write(file1);

					Properties prop = new Properties();

					String username = "";
					String password = "";
					String dmsType = "";
					String chkSharingPasswrd = "";
					URL songPath = CommonModel.FileUploadHandler.class.getResource("");
					String[] pathArr = songPath.toString().split("file:/|/apache");
					FileInputStream fis = null;
					
					int pos = AttchName.lastIndexOf(".");
					if (pos > 0 && pos < (AttchName.length() - 1)) { // If '.' is not the first or last character.
						AttchName = AttchName.substring(0, pos);
					}
					
					String Path = pathArr[1];
					fis = new FileInputStream(String.valueOf(Path) +"/wflow/app_datasource.properties");
					//fis = new FileInputStream("D:/Office Project/Chola/Build/Build Related/ThemeproLO_Works/Product/wflow/app_datasource.properties");

					if (fis != null) {
						prop.load(fis);
						dmsType = prop.getProperty("DMSTYPE");

						fis.close();
					} else {
						throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");
					}
					String uppath = file1.getAbsolutePath();
					if (dmsType.equals("SHARING")) {
						username = prop.getProperty("FEPUPLDUsername");
						password = prop.getProperty("FEPUPLDPassword");
						String userPassword = password;
						NtlmPasswordAuthentication auth1 = new NtlmPasswordAuthentication(userPassword);
						if (chkSharingPasswrd.equals("Yes")) {
							SmbFile sFile2 = new SmbFile("smb:" + username + "/" + "Attachments" + "/" + PrcsID + "/"
									+ FormName + "/" + AttchName + "/" + Version, auth1);

							sFile2.exists();

							if (!sFile2.exists()) {
								sFile2.mkdirs();
							}
							SmbFile sFile3 = new SmbFile(sFile2 + "/" + fileName, auth1);

							SmbFileOutputStream smbFileOutputStream = new SmbFileOutputStream(sFile3);

							FileInputStream fileInputStream = new FileInputStream(new File(uppath));
							byte[] buf = new byte[16777216];
							int len;
							while ((len = fileInputStream.read(buf)) > 0)
								smbFileOutputStream.write(buf, 0, len);
							OPAttchData = String.valueOf(OPAttchData) + AttchName + "~" + AttchDescrptn + "~"
									+ "\\Attachments" + "\\" + PrcsID + "\\" + FormName + "\\" + AttchName + "\\"
									+ Version + "\\" + fileName + "~" + Filesize + "~" + Version + "|";
							smbFileOutputStream.close();
							fileInputStream.close();
						} else {
							Path sFile2path = Paths.get(username + "/" + "Attachments" + "/" + PrcsID + "/"
									+ FormName + "/" + AttchName + "/" + Version + "/", new String[0]);
							Files.createDirectories(sFile2path, new FileAttribute[0]);

							File sFile3 = new File(sFile2path + "/" + fileName);

							final FileOutputStream FileOutputStream = new FileOutputStream(sFile3);
							final FileInputStream fileInputStream = new FileInputStream(new File(uppath));

							final byte[] buf = new byte[16 * 1024 * 1024];
							int len;
							while ((len = fileInputStream.read(buf)) > 0) {
								FileOutputStream.write(buf, 0, len);
								OPAttchData = String.valueOf(OPAttchData) + AttchName + "~" + AttchDescrptn + "~"
										+ "\\Attachments" + "\\" + PrcsID + "\\" + FormName + "\\" + AttchName + "\\"
										+ Version + "\\" + fileName + "~" + Filesize + "~" + Version + "|";
							}
							FileOutputStream.close();
							fileInputStream.close();
						}

					} else {
						String Sharingpath = prop.getProperty("UPLDPHYLOC");

						File sFile2 = new File(Sharingpath + "/Attachments/" + PrcsID + "/" + FormName + "/" + AttchName
								+ "/" + Version + "/");
						Path sFile2path = Paths.get(Sharingpath + "/Attachments/" + PrcsID + "/" + FormName + "/"
								+ AttchName + "/" + Version + "/", new String[0]);
						Files.createDirectories(sFile2path, (FileAttribute<?>[]) new FileAttribute[0]);
						File sFile3 = new File(sFile2 + "/" + fileName);
						FileOutputStream FileOutputStream = new FileOutputStream(sFile3);

						FileInputStream fileInputStream = new FileInputStream(new File(uppath));
						byte[] buf = new byte[16777216];
						int len;
						while ((len = fileInputStream.read(buf)) > 0)
							FileOutputStream.write(buf, 0, len);
						OPAttchData = String.valueOf(OPAttchData) + AttchName + "~" + AttchDescrptn + "~"
								+ "\\Attachments" + "\\" + PrcsID + "\\" + FormName + "\\" + AttchName + "\\" + Version
								+ "\\" + fileName + "~" + Filesize + "~" + Version + "|";
						FileOutputStream.close();
						fileInputStream.close();

					}
					Connection con = DBConnection.getConnection(this.DBSrc);
					PreparedStatement proc_stmt = con.prepareStatement("{ call sam_sAttachmentDMS1(?,?,?) }");
	                   
                    proc_stmt.setString(1, OPAttchData);
            		proc_stmt.setString(2, CusID);
            		proc_stmt.setString(3, DocName);
            		
            		ResultSet results=proc_stmt.executeQuery(); 
            		
            		
            		while (results.next()) {
            			docToken=results.getString("DOCTOKEN");
                        System.out.println("Data Saved Suceessfully");
                    }  
					i++;
				}
			}
		}
		return "~~"+docToken;
	}

	public static void removeDirectory(File dir) {
		if (dir.isDirectory()) {
			File[] files = dir.listFiles();
			if (files != null && files.length > 0) {
				byte b;
				int i;
				File[] arrayOfFile;
				for (i = (arrayOfFile = files).length, b = 0; b < i;) {
					File aFile = arrayOfFile[b];
					removeDirectory(aFile);
					b++;
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
				byte b;
				int i;
				File[] arrayOfFile;
				for (i = (arrayOfFile = files).length, b = 0; b < i;) {
					File aFile = arrayOfFile[b];
					removeDirectory(aFile);
					b++;
				}
			}
		}
	}
}
