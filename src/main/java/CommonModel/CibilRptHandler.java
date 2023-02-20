package CommonModel;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.MalformedURLException;
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

public class CibilRptHandler {

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


	public String CibilRptHandler(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		final long serialVersionUID = 1L;
		final String root;

		response.setContentType("text/html");
			      PrintWriter out=response.getWriter();
			      String fileName="C:\\Users\\ETDU020\\Downloads\\Employer_Registration_Manual.pdf";
			      String filePath=request.getContextPath();
			    response.setContentType("APPLICATION/OCTET-STREAM");
			    response.setHeader("Content-Disposition","attachment;fileName=\""+fileName+"\"");
			    int i;
			    FileInputStream file=new FileInputStream(filePath +fileName);
			    while((i=file.read()) !=-1){
			      out.write(i);
			   }
			    file.close();
			   out.close();



		return fileName;

	}


}
