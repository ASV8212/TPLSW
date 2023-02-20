package CommonModel;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import jcifs.smb.NtlmPasswordAuthentication;
import jcifs.smb.SmbException;
import jcifs.smb.SmbFile;

public class deletefile {

	private String Insattchdata;
	private String delattchdata;
	private String root;

	private String Usrpwd;
	private String DBSrc;

	public void Insattchdata(String Insattchdata) {
		this.Insattchdata = Insattchdata;
	}

	public void delattchdata(String delattchdata) {
		this.delattchdata = delattchdata;
	}

	public void root(String root) {
		this.root = root;
	}

	public void Usrpwd(String Usrpwd) {
		this.Usrpwd = Usrpwd;
	}

	public String deletefile() throws SQLException, MalformedURLException,
			SmbException {

		String Exctdelattchdata[];
		String ExctConcattchdata[];

		String Arydelattchdata[] = delattchdata.split("\\|");

		String userPassword = Usrpwd;
		NtlmPasswordAuthentication auth1 = new NtlmPasswordAuthentication(
				userPassword);
		// SmbFile sFile2 = new SmbFile ("smb:"+root+"/" +
		// "Attachments"+"/"+PrcsID+
		// "/"+FormName+"/"+AttchName+"/"+Version,auth1);

		for (int i = 0; i < delattchdata.split("\\|").length; i++) {
			Exctdelattchdata = Arydelattchdata[i].split("~");
			ExctConcattchdata = Exctdelattchdata[1].split("/");

			SmbFile folder = new SmbFile("smb:" + root + "//", auth1);
			SmbFile sFile1 = new SmbFile("smb:" + root + Exctdelattchdata[1],
					auth1, SmbFile.FILE_SHARE_DELETE);
			SmbFile file = new SmbFile(folder.getPath() + ExctConcattchdata[1]
					+ "/" + ExctConcattchdata[2] + "/" + ExctConcattchdata[3]
					+ "/" + ExctConcattchdata[4] + "/" + ExctConcattchdata[5]
					+ "/", auth1, SmbFile.FILE_SHARE_DELETE);

			sFile1.delete();
			file.delete();

		}

		return "deleted";
	}

	public static void removeDirectory(File dir) {
		if (dir.isDirectory()) {
			File[] files = dir.listFiles();
			if (files != null && files.length > 0) {
				for (File aFile : files) {
					removeDirectory(aFile);
				}
			}
			// dir.delete();
		} else {
			// dir.delete();
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
