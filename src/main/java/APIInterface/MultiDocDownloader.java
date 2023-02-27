<<<<<<< HEAD
package APIInterface;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.net.URL;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import CommonModel.DBConnection;
import CommonModel.FileUploadHandler;

public class MultiDocDownloader {
	public String MultiDocDownloaderHandler(HttpServletRequest request,HttpServletResponse response) throws SQLException {
		String prcsID = request.getParameter("PrcsID");
		String cusID = request.getParameter("CusID");
		String zipfilename = prcsID+cusID+System.currentTimeMillis();
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt = null;
		ResultSet rs = null;
		List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();
		try {
			procstmt = con.prepareStatement("{ call LSW_SRCUDOC_DOWNLOAD  (?,?,?,?,?) }");
			procstmt.setString(1, prcsID);
			procstmt.setString(2, cusID);
			procstmt.setString(3, "");
			procstmt.setString(4, "");
			procstmt.setString(5, "");
			
			rs = procstmt.executeQuery();
			String encodedString = "";

			ResultSetMetaData metaData = rs.getMetaData();
			Integer columnCount = metaData.getColumnCount();
			Map<String, Object> row1 = null;
			resultList.clear();
			while (rs.next()) {
				row1 = new HashMap<String, Object>();
				for (int i = 1; i <= columnCount; i++) {
					row1.put(metaData.getColumnName(i), rs.getObject(i));
				}
				resultList.add(row1);
			}
			final List<String> srcFiles = null;
			Properties prop = new Properties();
			String dmsType = "";
			String username = "";
			String foldername = "";
			URL songPath = FileUploadHandler.class.getResource("");
			String[] pathArr = songPath.toString().split("file:/|/apache");
			FileInputStream fis = null;
			String Path = pathArr[1];
			fis = new FileInputStream(String.valueOf(String.valueOf(Path)) + "/wflow/app_datasource.properties");
			//fis = new FileInputStream( "C:/DBCONNECTION/wflow/app_datasource.properties");
			
			
			if (fis != null) {
				prop.load(fis);
				dmsType = prop.getProperty("DMSTYPE");
				fis.close();

				if (dmsType.equals("SHARING")) {
					username = prop.getProperty("FEPUPLDUsername");
				}
			} else {
				throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");
			}
			foldername = prop.getProperty("MULTIDOWNLOAD");
			final FileOutputStream fos = new FileOutputStream(String.valueOf(foldername)+zipfilename+".zip");
			ZipOutputStream zipOut = new ZipOutputStream(fos);
			for (int counter = 0; counter < resultList.size(); counter++) {
				File fileToZip = new File(String.valueOf(username) + resultList.get(counter).get("DMSURL").toString());
				FileInputStream fis1 = new FileInputStream(fileToZip);
				ZipEntry zipEntry = new ZipEntry(resultList.get(counter).get("DOCTYPE").toString()+"-"+fileToZip.getName());
				zipOut.putNextEntry(zipEntry);
				byte[] bytes = new byte[1024];
				int length;
				while ((length = fis1.read(bytes)) >= 0) {
					zipOut.write(bytes, 0, length);
				}
				fis1.close();
			}
			zipOut.close();
			fos.close();
			zipdownloader(Paths.get(String.valueOf(foldername)+zipfilename+".zip"),response,zipfilename);
			File file = new File(String.valueOf(foldername)+zipfilename+".zip");
            if(file.exists())
            {
               // deleteDirectory(file);
                file.delete();
            }
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			con.close();
			procstmt.close();
			rs.close();
			resultList.clear();
		}
		return "Success";
	}
	private void zipdownloader(Path filePath,HttpServletResponse response,String zipfilename) {
		try
		{
		byte[] ba = java.nio.file.Files.readAllBytes(filePath);
		
		response.setContentLength(ba.length);
	      response.setHeader("Content-Disposition", "attachment; filename=" + zipfilename+".zip");
	      ServletOutputStream servletOutputStream = response.getOutputStream();
	      servletOutputStream.write(ba);
	      servletOutputStream.flush();
	      servletOutputStream.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
}
=======
package APIInterface;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.net.URL;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import CommonModel.DBConnection;
import CommonModel.FileUploadHandler;

public class MultiDocDownloader {
	public String MultiDocDownloaderHandler(HttpServletRequest request,HttpServletResponse response) throws SQLException {
		String prcsID = request.getParameter("PrcsID");
		String cusID = request.getParameter("CusID");
		String zipfilename = prcsID+cusID+System.currentTimeMillis();
		Connection con = DBConnection.getConnection(null);
		PreparedStatement procstmt = null;
		ResultSet rs = null;
		List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();
		try {
			procstmt = con.prepareStatement("{ call LSW_SRCUDOC_DOWNLOAD  (?,?,?,?,?) }");
			procstmt.setString(1, prcsID);
			procstmt.setString(2, cusID);
			procstmt.setString(3, "");
			procstmt.setString(4, "");
			procstmt.setString(5, "");
			
			rs = procstmt.executeQuery();
			String encodedString = "";

			ResultSetMetaData metaData = rs.getMetaData();
			Integer columnCount = metaData.getColumnCount();
			Map<String, Object> row1 = null;
			resultList.clear();
			while (rs.next()) {
				row1 = new HashMap<String, Object>();
				for (int i = 1; i <= columnCount; i++) {
					row1.put(metaData.getColumnName(i), rs.getObject(i));
				}
				resultList.add(row1);
			}
			final List<String> srcFiles = null;
			Properties prop = new Properties();
			String dmsType = "";
			String username = "";
			String foldername = "";
			URL songPath = FileUploadHandler.class.getResource("");
			String[] pathArr = songPath.toString().split("file:/|/apache");
			FileInputStream fis = null;
			String Path = pathArr[1];
			fis = new FileInputStream(String.valueOf(String.valueOf(Path)) + "/wflow/app_datasource.properties");
			//fis = new FileInputStream( "C:/DBCONNECTION/wflow/app_datasource.properties");
			
			
			if (fis != null) {
				prop.load(fis);
				dmsType = prop.getProperty("DMSTYPE");
				fis.close();

				if (dmsType.equals("SHARING")) {
					username = prop.getProperty("FEPUPLDUsername");
				}
			} else {
				throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");
			}
			foldername = prop.getProperty("MULTIDOWNLOAD");
			final FileOutputStream fos = new FileOutputStream(String.valueOf(foldername)+zipfilename+".zip");
			ZipOutputStream zipOut = new ZipOutputStream(fos);
			for (int counter = 0; counter < resultList.size(); counter++) {
				File fileToZip = new File(String.valueOf(username) + resultList.get(counter).get("DMSURL").toString());
				FileInputStream fis1 = new FileInputStream(fileToZip);
				ZipEntry zipEntry = new ZipEntry(resultList.get(counter).get("DOCTYPE").toString()+"-"+fileToZip.getName());
				zipOut.putNextEntry(zipEntry);
				byte[] bytes = new byte[1024];
				int length;
				while ((length = fis1.read(bytes)) >= 0) {
					zipOut.write(bytes, 0, length);
				}
				fis1.close();
			}
			zipOut.close();
			fos.close();
			zipdownloader(Paths.get(String.valueOf(foldername)+zipfilename+".zip"),response,zipfilename);
			File file = new File(String.valueOf(foldername)+zipfilename+".zip");
            if(file.exists())
            {
               // deleteDirectory(file);
                file.delete();
            }
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			con.close();
			procstmt.close();
			rs.close();
			resultList.clear();
		}
		return "Success";
	}
	private void zipdownloader(Path filePath,HttpServletResponse response,String zipfilename) {
		try
		{
		byte[] ba = java.nio.file.Files.readAllBytes(filePath);
		
		response.setContentLength(ba.length);
	      response.setHeader("Content-Disposition", "attachment; filename=" + zipfilename+".zip");
	      ServletOutputStream servletOutputStream = response.getOutputStream();
	      servletOutputStream.write(ba);
	      servletOutputStream.flush();
	      servletOutputStream.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
}
>>>>>>> 7d3942bc6a8605ab885cdb80ab9877f7cad404e3
