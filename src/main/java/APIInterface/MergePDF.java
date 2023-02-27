package APIInterface;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.FileAttribute;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;

import org.apache.commons.io.IOUtils;

import com.itextpdf.text.Document;
import com.itextpdf.text.pdf.PdfContentByte;
import com.itextpdf.text.pdf.PdfImportedPage;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfWriter;

import CommonModel.DBConnection;
import jcifs.smb.NtlmPasswordAuthentication;

public class MergePDF {
	public String mergePDFHandlt(String inputdata, String prcsid,String version) throws Exception {
		String resp = "";
		String resString = "";
		String resMessage = "";
		Connection conPS = null;
		PreparedStatement prsPS = null;
		ResultSet rstPS = null;
		
		Connection con = null;
		PreparedStatement procstmt = null;
		ResultSet results = null;
		
		Connection con1 = null;
		PreparedStatement procstmt1 = null;
		URL url;
		File file1 = null;
		String docToken = "";

		/*
		 * File myObj = new File("D:\\newMerged.pdf");
		 * 
		 * myObj.createNewFile();
		 */

		try {
			Properties prop = new Properties();
			String dmsType = "";
			String username = "";
			String password = "";
			URL songPath = CommonModel.FileUploadHandler.class.getResource("");
			String[] pathArr = songPath.toString().split("file:/|/apache");
			FileInputStream fis = null;
			String Path = pathArr[1];
			String chkSharingPasswrd = "";
			String oPAttchData = "";
			Path sFile2path = null;
			fis = new FileInputStream(String.valueOf(Path) +"/wflow/app_datasource.properties");
			//fis = new FileInputStream(
				//"D:/Office Project/Chola/Build/Build Related/ThemeproLO_Works/Product/wflow/app_datasource.properties");
			if (fis != null) {
				prop.load(fis);
				dmsType = prop.getProperty("DMSTYPE");

				fis.close();
			} else {
				throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");

			}
			if (dmsType.equals("SHARING")) {
				username = prop.getProperty("FEPUPLDUsername");
				password = prop.getProperty("FEPUPLDPassword");
				String userPassword = password;
				
				NtlmPasswordAuthentication auth1 = new NtlmPasswordAuthentication(userPassword);
				if (!chkSharingPasswrd.equals("Yes")) {
					sFile2path = Paths.get(username + "/" + "Attachments" + "/" + prcsid + "/Leegality/Leegality/" + version + "/", new String[0]);
					java.nio.file.Files.createDirectories(sFile2path);
					
					File sFile3 = new File(sFile2path + "/Leegality.pdf" );
					
					OutputStream outputStream = new FileOutputStream(sFile3);
					
					oPAttchData = String.valueOf(oPAttchData)   + "Leegality~Leegality"  + "~" + "\\Attachments"
							+ "\\" + prcsid + "\\Leegality\\Leegality\\" + version + "\\Leegality.pdf"
							+ "~50~" + version + "|";
					conPS = DBConnection.getConnection(null);
					con = DBConnection.getConnection(null);
					con1 = DBConnection.getConnection(null);

					prsPS = conPS.prepareStatement("{ call LSW_SFETCHLEGALITYDOC(?,?,?,?,?) }");
					prsPS.setString(1, inputdata);
					prsPS.setString(2, "");
					prsPS.setString(3, "");
					prsPS.setString(4, "");
					prsPS.setString(5, "");

					rstPS = prsPS.executeQuery();
					ResultSetMetaData rsmd = rstPS.getMetaData();
					List<InputStream> inputPdfList = new ArrayList<InputStream>();

					while (rstPS.next()) {
						url = new URL(rstPS.getString(1));
						InputStream is = null;
						is = url.openStream();
						byte[] imageBytes = IOUtils.toByteArray(is);
						is.close();
						InputStream targetStream = new ByteArrayInputStream(imageBytes);
						inputPdfList.add(targetStream);

					}
					mergePdfFiles(inputPdfList, outputStream);
					
					
					procstmt = con.prepareStatement("{ call sam_sAttachmentDMS1(?,?,?) }");

					procstmt.setString(1, oPAttchData);
					procstmt.setString(2, "");
					procstmt.setString(3, "Leegality.pdf");

					results = procstmt.executeQuery();

					while (results.next()) {
						docToken = results.getString("DOCTOKEN");
					}
					
					procstmt1 = con1.prepareStatement("{ call LSW_SPUSHDATATOESIGNSCREEN(?,?) }");

					procstmt1.setString(1, docToken);
					procstmt1.setString(2, prcsid);

					procstmt1.executeQuery();
				}
			}
			
			

			System.out.println("PDF Documents merged to a single file");

		} catch (Exception ei) {
			ei.printStackTrace();
			resString = "Exception";
			resMessage = ei.toString();
			return resString + "!@#" + resMessage;
		} finally {
			DBConnection.closeConnection(conPS, prsPS, rstPS);
			DBConnection.closeConnection(con, procstmt, results);
		}
		return "Success";
	}

	static void mergePdfFiles(List<InputStream> inputPdfList, OutputStream outputStream) throws Exception {
		// Create document and pdfReader objects.
		Document document = new Document();
		List<PdfReader> readers = new ArrayList<PdfReader>();
		int totalPages = 0;

		// Create pdf Iterator object using inputPdfList.
		Iterator<InputStream> pdfIterator = inputPdfList.iterator();

		// Create reader list for the input pdf files.
		while (pdfIterator.hasNext()) {
			InputStream pdf = pdfIterator.next();
			PdfReader pdfReader = new PdfReader(pdf);
			readers.add(pdfReader);
			totalPages = totalPages + pdfReader.getNumberOfPages();
		}

		// Create writer for the outputStream
		PdfWriter writer = PdfWriter.getInstance(document, outputStream);

		// Open document.
		document.open();

		// Contain the pdf data.
		PdfContentByte pageContentByte = writer.getDirectContent();

		PdfImportedPage pdfImportedPage;
		int currentPdfReaderPage = 1;
		Iterator<PdfReader> iteratorPDFReader = readers.iterator();

		// Iterate and process the reader list.
		while (iteratorPDFReader.hasNext()) {
			PdfReader pdfReader = iteratorPDFReader.next();
			// Create page and add content.
			while (currentPdfReaderPage <= pdfReader.getNumberOfPages()) {
				document.newPage();
				pdfImportedPage = writer.getImportedPage(pdfReader, currentPdfReaderPage);
				pageContentByte.addTemplate(pdfImportedPage, 0, 0);
				currentPdfReaderPage++;
			}
			currentPdfReaderPage = 1;
		}

		// Close document and outputStream.
		outputStream.flush();
		document.close();
		outputStream.close();

		System.out.println("Pdf files merged successfully.");
	}

}
