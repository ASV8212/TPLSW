package CommonModel;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.FileAttribute;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.poi.POIXMLProperties;
import org.apache.poi.hssf.record.crypto.Biff8EncryptionKey;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.poifs.crypt.Decryptor;
import org.apache.poi.poifs.crypt.EncryptionInfo;
import org.apache.poi.poifs.filesystem.NPOIFSFileSystem;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import Controls.Connections;
import jcifs.smb.NtlmPasswordAuthentication;

public class PushtoDMSFSA {

	/**
	 * @param map
	 * @param request
	 * @return
	 * @throws Exception
	 */
	public static String pushtoDMSFSAHandlr(Map<String, String> map, HttpServletRequest request) throws Exception {
		String sqlquery = "";
		Statement st = null;
		ResultSet rs = null;
		String resultFlag = "";
		String resultMessage = "";
		String header = null;
		String rowFRM = null;
		String rowTO = null;
		String table = null;
		String skipROWWITHDATA = null;
		String SQLDELTQUERY = "";
		String autoINCR = null;
		String skipROW;
		String docName = map.get("DocName");
		String cusid = map.get("CusID");
		String hitFlg = "";
		String hitMsg = "";
		String dmsID = "";
		int colcount = 0;
		int colcount1 = 0;
		Statement BulkDelete = null;
		Statement BulkInsert = null;

		Connection con = DBConnection.getConnection(null);
		Connection con1 = DBConnection.getConnection(null);
		PreparedStatement procstmt1 = null;
		PreparedStatement procstmt = null;
		ResultSet results = null;
		ResultSet results1 = null;
		ArrayList<String> data = new ArrayList<String>();
		boolean isMultipart = ServletFileUpload.isMultipartContent(request);

		String oPAttchData = "";
		String attchName = map.get("attachname");
		String attchDescrptn = map.get("attachdescrptn");
		String prcsID = map.get("prcsid");
		String formName = map.get("formName");
		String version = map.get("version");
		String fileName = map.get("fileName");
		String filesize = map.get("filesize");
		String unqid = map.get("unqid");

		byte[] hash = new byte[20];
		String checksum = "";
		String resMsg = "";
		String jsonresult = "";
		String docToken = "";
		String[] Headers = new String[50];
		int MaxTo1 = 0;
		int MaxTo = 0;
		int Counter = 0;
		int Counter1 = 0;
		int Counter2 = 0;
		String IncrFlg = "";
		int UNIQID = 0;
		String PreviousHdr = "";
		int SheetHeaderExcludeFrm = 0;
		int SheetHeaderExcludeTo = 0;
		FileInputStream fileInputStream = null;
		FileInputStream fileInputStream1 = null;
		XSSFWorkbook wb = null;
		Path sFile2path = null;
		try {
			if (isMultipart) {

				FileItemFactory factory = new DiskFileItemFactory();
				ServletFileUpload upload = new ServletFileUpload(factory);
				List<FileItem> multiparts = upload.parseRequest(request);
				FileItem itemfinal = null;
				for (FileItem item : multiparts) {
					itemfinal = item;
				}
				File file1 = ((DiskFileItem) itemfinal).getStoreLocation();
				((DiskFileItem) itemfinal).write(file1);

				Properties prop = new Properties();

				String username = "";
				String password = "";
				String dmsType = "";
				String chkSharingPasswrd = "";
				String OPAttchData = "";
				URL songPath = CommonModel.PushtoDMSFSA.class.getResource("");
				String[] pathArr = songPath.toString().split("file:/|/apache");
				FileInputStream fis = null;
				String Path = pathArr[1];
				 fis = new FileInputStream(String.valueOf(Path)
				 +"/wflow/app_datasource.properties");
				//fis = new FileInputStream(
					//	"D:/Office Project/Chola/Build/Build Related/ThemeproLO_Works/Product/wflow/app_datasource.properties");
				if (fis != null) {
					prop.load(fis);
					dmsType = prop.getProperty("DMSTYPE");

					fis.close();
				} else {
					throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");

				}
				String uppath = file1.getAbsolutePath();
				if (dmsType.equals("SHARING")) {
					username = prop.getProperty("FEPUPLDDBUsername");
					password = prop.getProperty("FEPUPLDDBPassword");
					String userPassword = password;
					NtlmPasswordAuthentication auth1 = new NtlmPasswordAuthentication(userPassword);
					if (!chkSharingPasswrd.equals("Yes")) {
						sFile2path = Paths.get(username + "/" + "Attachments" + "/" + prcsID + "/" + formName + "/"
								+ attchName + "/" + version + "/", new String[0]);
						Files.createDirectories(sFile2path, new FileAttribute[0]);

						File sFile3 = new File(sFile2path + "/" + fileName);

						final FileOutputStream FileOutputStream = new FileOutputStream(sFile3);
						fileInputStream = new FileInputStream(new File(uppath));
						fileInputStream1 = new FileInputStream(new File(uppath));
						final byte[] buf = new byte[16 * 1024 * 1024];
						int len;
						while ((len = fileInputStream.read(buf)) > 0) {
							FileOutputStream.write(buf, 0, len);
							oPAttchData = String.valueOf(oPAttchData) + attchName + "~" + attchDescrptn + "~"
									+ "\\Attachments" + "\\" + prcsID + "\\" + formName + "\\" + attchName + "\\"
									+ version + "\\" + fileName + "~" + filesize + "~" + version + "|";
						}
						FileOutputStream.close();
						fileInputStream.close();
						fis.close();
					}
				}
				/*
				 * //POIFSFileSystem fs = new POIFSFileSystem(fileInputStream1); //Workbook wb =
				 * WorkbookFactory.create(new File("protected.xls"), "Tvscredit");4
				 * 
				 * Biff8EncryptionKey.setCurrentUserPassword("javacodepoint"); OPCPackage pkg =
				 * OPCPackage.open(new File(sFile2path + "/" + fileName));
				 * 
				 * NPOIFSFileSystem fs = new NPOIFSFileSystem(new File(sFile2path + "/" +
				 * fileName)); EncryptionInfo info = new EncryptionInfo(fs); Decryptor d =
				 * Decryptor.getInstance(info); if (d.verifyPassword("Tvscredit")) { wb = new
				 * XSSFWorkbook(d.getDataStream(fs)); } else { // Password is wrong } }
				 * 
				 * 
				 * NPOIFSFileSystem fs = new NPOIFSFileSystem(fileInputStream1); EncryptionInfo
				 * info = new EncryptionInfo(fs); Decryptor d = Decryptor.getInstance(info); if
				 * (d.verifyPassword("Tvscredit")) { XSSFWorkbook workbook = new
				 * XSSFWorkbook(d.getDataStream(fs)); } else { // Password is wrong }
				 * 
				 * 
				 * //XSSFWorkbook workbook=new XSSFWorkbook(fis); //XSSFWorkbook
				 * workbook=(XSSFWorkbook)WorkbookFactory.create(fileInputStream1);
				 * 
				 * OPCPackage pkg = OPCPackage.open(fileInputStream1); XSSFWorkbook wb1 = new
				 * XSSFWorkbook(pkg);
				 * 
				 * 
				 * POIFSFileSystem fs = new POIFSFileSystem(fileInputStream1); EncryptionInfo
				 * info = new EncryptionInfo(fs); Decryptor decryptor =
				 * Decryptor.getInstance(info);
				 * 
				 * //Verifying the password if (!decryptor.verifyPassword("Tvscredit")) { throw
				 * new RuntimeException("Incorrect password: Unable to process"); }
				 * 
				 * 
				 * //InputStream dataStream = decryptor.getDataStream(fs);
				 * 
				 * 
				 * BufferedInputStream bufferInput = new BufferedInputStream(fileInputStream1);
				 * POIFSFileSystem poiFileSystem = new POIFSFileSystem(bufferInput);
				 * Biff8EncryptionKey.setCurrentUserPassword("test"); XSSFWorkbook workbook =
				 * new XSSFWorkbook(poiFileSystem, true);
				 * 
				 * 
				 * 
				 * 
				 * String workbookname = map.get("workbookname"); String sheetnames =
				 * map.get("sheetname");
				 * 
				 * for (int sheetcount = 0; sheetcount < sheetnames.split(",").length;
				 * sheetcount++) { String sheetname = sheetnames.split(",")[sheetcount];
				 * sqlquery = ""; SQLDELTQUERY = ""; if(sheetname.equals("Fin Input")) {
				 * colcount = 5; } else { colcount = 13; } int j = 0; int RowIndex = 0;
				 * 
				 * List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();
				 * Map<String, Object> row1 = null; Connection constr =
				 * DBConnection.getConnection(null); st = constr.createStatement(); rs =
				 * st.executeQuery(
				 * "SELECT ISNULL(HEADER,'') HEADER,ISNULL(ROWFROM,'') ROWFROM,ISNULL(ROWTO,'') ROWTO,"
				 * + "ISNULL(TABLENAME_PRCS,'') TABLENAME_PRCS," +
				 * "ISNULL(SKIROW,'') SKIROW, ISNULL(SKIPROWWITHDATA,'') SKIPROWWITHDATA, ISNULL(AUTOINCR,'') AUTOINCR "
				 * + "FROM LSW_TGST_MSTR_CONFIG WITH(NOLOCK) WHERE EXCLSHEET = '" + workbookname
				 * + "' AND  " + "SHEETNAME = '" + sheetname +
				 * "' ORDER BY CAST(MANUAL_ORDER AS BIGINT) ASC");
				 * 
				 * ResultSetMetaData metaData = rs.getMetaData(); Integer columnCount =
				 * metaData.getColumnCount(); while (rs.next()) { row1 = new HashMap<String,
				 * Object>(); for (int i = 1; i <= columnCount; i++) {
				 * row1.put(metaData.getColumnName(i), rs.getObject(i)); } resultList.add(row1);
				 * } if (resultList.size() == 0) { resultFlag = "Failed"; resultMessage =
				 * "Configuration not made"; return resultFlag + "~" + resultMessage; } for (j =
				 * j; j < resultList.size(); j++) { header =
				 * resultList.get(j).get("HEADER").toString(); rowFRM =
				 * resultList.get(j).get("ROWFROM").toString(); rowTO =
				 * resultList.get(j).get("ROWTO").toString(); table =
				 * resultList.get(j).get("TABLENAME_PRCS").toString(); skipROW =
				 * resultList.get(j).get("SKIROW").toString(); skipROWWITHDATA =
				 * resultList.get(j).get("SKIPROWWITHDATA").toString(); autoINCR =
				 * resultList.get(j).get("AUTOINCR").toString(); j = j + 1; break; } Iterator
				 * iterator = multiparts.iterator(); while (iterator.hasNext()) { FileItem item
				 * = (FileItem) iterator.next(); if (!item.isFormField()) { FileInputStream
				 * fis_1 = new FileInputStream(file1); XSSFWorkbook myWorkBook = new
				 * XSSFWorkbook(fis_1);
				 * 
				 * XSSFSheet mySheet = wb1.getSheet(sheetname);
				 * 
				 * Iterator<Row> rowIterator = mySheet.iterator(); while (rowIterator.hasNext())
				 * { IncrFlg = ""; RowIndex = RowIndex + 1; Row row = rowIterator.next(); if
				 * (!skipROWWITHDATA.equals("")) { if (check(skipROWWITHDATA, RowIndex)) {
				 * 
				 * //row = rowIterator.next(); //RowIndex = RowIndex + 1; if
				 * (!skipROWWITHDATA.endsWith(Integer.toString(RowIndex - 1))) { IncrFlg =
				 * "Yes"; } } } if (!header.equals("Sheet Header Exclude")) { if
				 * (!check1(Headers, header)) { List<String> arrlist = new
				 * ArrayList<String>(Arrays.asList(Headers)); if (Counter1 == 0) {
				 * arrlist.clear(); Headers = new String[0]; Counter1 = Counter1 + 1; }
				 * arrlist.add(header); Headers = new String[Headers.length + 1]; Headers =
				 * arrlist.toArray(Headers); } if (!PreviousHdr.equals(header)) { Counter2 = 1 +
				 * Counter2; PreviousHdr = header; } } if (header.equals("Sheet Header Exclude")
				 * && (RowIndex >= Integer.parseInt(rowFRM) && RowIndex <=
				 * Integer.parseInt(rowTO))) { SheetHeaderExcludeFrm = Integer.parseInt(rowFRM);
				 * SheetHeaderExcludeTo = Integer.parseInt(rowTO); } else if
				 * (!header.equals("Sheet Header Exclude") && (IncrFlg.equals("")) && (RowIndex
				 * >= Integer.parseInt(rowFRM) && RowIndex <= Integer.parseInt(rowTO))) {
				 * sqlquery = sqlquery + "Insert into " + table + " values("; Iterator<Cell>
				 * cellIterator = row.cellIterator(); while (cellIterator.hasNext()) {
				 * 
				 * Cell cell = cellIterator.next(); colcount1 = cell.getColumnIndex();
				 * if(cell.getColumnIndex()<=colcount) { switch (cell.getCellType()) { case
				 * Cell.CELL_TYPE_STRING: sqlquery = sqlquery + "'" + cell.getStringCellValue()
				 * + "'" + ","; // System.out.print(cell.getStringCellValue() + "\t"); break;
				 * case Cell.CELL_TYPE_NUMERIC: if (DateUtil.isCellDateFormatted(cell)) {
				 * SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy"); sqlquery =
				 * sqlquery + "'" + dateFormat.format(cell.getDateCellValue()) + "'" + ","; }
				 * else { sqlquery = sqlquery + "'" + cell.getNumericCellValue() + "'" + ","; }
				 * // System.out.print(cell.getNumericCellValue() + "\t"); break; case
				 * Cell.CELL_TYPE_BLANK: sqlquery = sqlquery + "''" + ","; //
				 * System.out.print(cell.getNumericCellValue() + "\t"); break; case
				 * Cell.CELL_TYPE_FORMULA: sqlquery = sqlquery + "'" +
				 * handleCell(cell.getCachedFormulaResultType(), cell) + "'" + ","; //
				 * System.out.print(cell.getNumericCellValue() + "\t"); break; case
				 * Cell.CELL_TYPE_BOOLEAN: sqlquery = sqlquery + "'" +
				 * cell.getBooleanCellValue() + "'" + ","; //
				 * System.out.print(cell.getBooleanCellValue() + "\t"); break; default: } }
				 * if(row.getLastCellNum()<=colcount1 && colcount1<colcount) { for(int
				 * zx=colcount1;zx<colcount;zx++) { sqlquery = sqlquery+ "'',"; } }
				 * 
				 * }
				 * 
				 * if (!autoINCR.equals("Y")) { sqlquery = sqlquery + "'" + prcsID + "'" + ");";
				 * } if (autoINCR.equals("Y")) { if (Headers[0].toString().equals(header)) {
				 * UNIQID = 1 + UNIQID; } sqlquery = sqlquery + "'" + prcsID + "','" + RowIndex
				 * + "'" + ");"; } } System.out.print(sqlquery); Row r = mySheet.getRow(1 +
				 * (RowIndex - 1)); // 2nd row = row 1 // boolean hasData = true;
				 * 
				 * if (r == null) { // Row has never been used RowIndex = RowIndex + 1; //
				 * hasData = false; }
				 * 
				 * else { // Check to see if all cells in the row are blank (empty) hasData =
				 * false; for (Cell c : r) { if (c.getCellType() != Cell.CELL_TYPE_BLANK) {
				 * //hasData = true; RowIndex = RowIndex+1; break; } break; } }
				 * 
				 * if (RowIndex >= Integer.parseInt(rowTO)) { if (Counter2 > Headers.length) {
				 * if (Counter2 % Headers.length == 0) { MaxTo1 = Integer.parseInt(rowTO); MaxTo
				 * = MaxTo1; } }
				 * 
				 * 
				 * if(j+1 == resultList.size()) { MaxTo1 = MaxTo2; } else { MaxTo2 =
				 * Integer.parseInt(ROWTO); }
				 * 
				 * for (j = j; j < resultList.size(); j++) { header =
				 * resultList.get(j).get("HEADER").toString(); rowFRM =
				 * resultList.get(j).get("ROWFROM").toString(); rowTO =
				 * resultList.get(j).get("ROWTO").toString(); table =
				 * resultList.get(j).get("TABLENAME_PRCS").toString(); skipROW =
				 * resultList.get(j).get("SKIROW").toString(); skipROWWITHDATA =
				 * resultList.get(j).get("SKIPROWWITHDATA").toString(); autoINCR =
				 * resultList.get(j).get("AUTOINCR").toString(); j = j + 1; break; } if (Counter
				 * == 0) { SQLDELTQUERY = SQLDELTQUERY + "DELETE FROM " + table +
				 * " WHERE PRCSID = '" + prcsID + "';"; } if ((j) == resultList.size()) { if
				 * (SheetHeaderExcludeFrm != 0 && SheetHeaderExcludeTo != 0) { j = 1; } else { j
				 * = 0; } if (RowIndex - SheetHeaderExcludeTo <= Integer.parseInt(rowTO)) MaxTo
				 * = Integer.parseInt(rowTO); else MaxTo = MaxTo1;
				 * 
				 * if(RowIndex-SheetHeaderExcludeTo<=Integer.parseInt(ROWTO)) MaxTo =
				 * Integer.parseInt(ROWTO); else MaxTo=MaxTo1;
				 * 
				 * 
				 * if(Counter == 0) { SetMaxFrm = MaxTo; }
				 * 
				 * Counter = Counter + 1; } if (Counter > 0 && RowIndex >= MaxTo) { rowFRM =
				 * Integer.toString((RowIndex - (RowIndex - MaxTo)) + (Integer.parseInt(rowFRM)
				 * - SheetHeaderExcludeTo)); rowTO = Integer.toString((RowIndex - (RowIndex -
				 * MaxTo)) + (Integer.parseInt(rowTO) - SheetHeaderExcludeTo)); String[]
				 * SKIPROWWDATAARRAY = skipROWWITHDATA.split(","); String SKIPROWWDATAARRAY1 =
				 * ""; for (int y = 0; y < SKIPROWWDATAARRAY.length; y++) { SKIPROWWDATAARRAY1 =
				 * SKIPROWWDATAARRAY1 + Integer.toString((RowIndex - (RowIndex - MaxTo)) +
				 * (Integer.parseInt(SKIPROWWDATAARRAY[y]) - SheetHeaderExcludeTo)) + ","; } if
				 * (SKIPROWWDATAARRAY1.endsWith(",")) { SKIPROWWDATAARRAY1 =
				 * SKIPROWWDATAARRAY1.substring(0, SKIPROWWDATAARRAY1.length() - 1); }
				 * skipROWWITHDATA = SKIPROWWDATAARRAY1; // Counter=0; } } } } } try {
				 * BulkDelete = con.createStatement(); con.setAutoCommit(false);
				 * BulkDelete.addBatch(SQLDELTQUERY); int[] Deleteresult =
				 * BulkDelete.executeBatch(); System.out.println("The number of rows deleted: "+
				 * SQLDELTQUERY.split(";").length);
				 * 
				 * BulkInsert = con.createStatement(); BulkInsert.addBatch(sqlquery);
				 * System.out.println(sqlquery); int[] Insertresult = BulkInsert.executeBatch();
				 * System.out.println("The number of rows inserted: "+
				 * sqlquery.split(";").length);
				 * 
				 * con.commit(); resultFlag="Success"; resultMessage =
				 * "Data Inserted Successfully"; } catch(Exception e){ resultFlag="Failed";
				 * resultMessage = e.toString(); e.printStackTrace(); con.rollback(); } finally{
				 * if(BulkDelete!=null) BulkDelete.close(); if(BulkInsert!=null)
				 * BulkInsert.close();
				 * 
				 * if(con!=null) con.close(); } }
				 */
			}

			procstmt = con.prepareStatement("{ call sam_sAttachmentDMS1(?,?,?) }");

			procstmt.setString(1, oPAttchData);
			procstmt.setString(2, cusid);
			procstmt.setString(3, docName);

			results = procstmt.executeQuery();

			while (results.next()) {
				docToken = results.getString("DOCTOKEN");
				System.out.println("Data Saved Suceessfully");
			}

			procstmt1 = con1.prepareStatement("{ call LSW_SPUSHDATATORATIO(?,?,?,?) }");
			procstmt1.setString(1, docToken);
			procstmt1.setString(2, cusid);
			procstmt1.setString(3, prcsID);
			procstmt1.setString(4, unqid);
			results1 = procstmt1.executeQuery();
			while (results1.next()) {
				hitFlg = results1.getString("RESULT");
				hitMsg = results1.getString("RESULT_MSG");
				dmsID = results1.getString("DMSID");
				System.out.println("DATA INSERT FROM FAS TO LOS");
			}

			Connections.Call(procstmt, results, con, "Commit");
			Connections.Call(procstmt1, results1, con1, "Commit");

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			Connections.Call(procstmt, results, con, "Close");
			Connections.Call(procstmt1, results1, con1, "Close");
		}
		return hitFlg + "~" + hitMsg+ "~" +dmsID;
	}

	private static String handleCell(int cachedFormulaResultType, Cell cell) {
		String resp = "";
		if (cell.getCellType() == Cell.CELL_TYPE_FORMULA) {
			switch (cell.getCachedFormulaResultType()) {
			/*
			 * case BOOLEAN: System.out.println(cell.getBooleanCellValue()); break;
			 */

			case Cell.CELL_TYPE_NUMERIC:
				resp = String.valueOf(cell.getNumericCellValue());
				break;
			case Cell.CELL_TYPE_STRING:
				resp = cell.getRichStringCellValue().toString();
				break;
			}
		}
		return resp;
	}

	private static boolean check(String Str, int toCheckValue) {
		// check if the specified element
		// is present in the array or not
		// using Linear Search method
		String[] str1 = Str.split(",");
		int size = str1.length;
		int[] arr = new int[size];
		for (int i = 0; i < size; i++) {
			arr[i] = Integer.parseInt(str1[i]);
		}
		boolean test = false;
		for (int element : arr) {
			if (element == toCheckValue) {
				test = true;
				break;
			}
		}
		return test;
	}

	private static boolean check1(String[] headers, String toCheckValue) {
		// check if the specified element
		// is present in the array or not
		// using Linear Search method
		// String [] str1 = headers.split(",");
		int size = headers.length;
		String[] arr = new String[size];
		for (int i = 0; i < size; i++) {
			arr[i] = headers[i];
		}
		boolean test = false;
		for (String element : arr) {
			if (element == toCheckValue) {
				test = true;
				break;
			}
		}
		return test;
	}
}
