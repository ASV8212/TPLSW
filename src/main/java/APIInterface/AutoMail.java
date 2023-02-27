package APIInterface;

import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Properties;



import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.streaming.SXSSFSheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import CommonModel.DBConnection;
import Controls.GetDBData;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class AutoMail {
	public String autoMailHandler() {
		String resp = "";
		String sp = "";
		String dbSrc = null;
		
		String requestBody = "";
		
		String to="";
		String cc="";
		String subject = "";
		String msg = "";
		String tokn = "";
		try {
			/*
			 * StringBuilder buffer = new StringBuilder(); BufferedReader reader =
			 * request.getReader(); String line; while ((line = reader.readLine()) != null)
			 * { buffer.append(line); buffer.append(System.lineSeparator()); }
			 */
			ArrayList<String> data = new ArrayList<String>();
			data = GetDBData.Call("", "", "", "", "", "LSW_SAUTOMAILERCREATE");
			requestBody = data.get(0);
			JsonObject jsonObject = new JsonParser().parse(requestBody).getAsJsonObject();
			String url = loadMailURL();
			for (int z = 0; z < jsonObject.getAsJsonArray("Data").size(); z++) {
				sp = "";
				dbSrc = "";
				to = "";
				cc = "";
				subject = "";
				msg = "";
				tokn = "";

				sp = jsonObject.getAsJsonArray("Data").getAsJsonArray().get(z).getAsJsonObject().get("PROC")
						.getAsString();
				dbSrc = jsonObject.getAsJsonArray("Data").getAsJsonArray().get(z).getAsJsonObject().get("TYP")
						.getAsString();
				to = jsonObject.getAsJsonArray("Data").getAsJsonArray().get(z).getAsJsonObject().get("TO")
						.getAsString();
				cc = jsonObject.getAsJsonArray("Data").getAsJsonArray().get(z).getAsJsonObject().get("CC")
						.getAsString();
				subject = jsonObject.getAsJsonArray("Data").getAsJsonArray().get(z).getAsJsonObject().get("SUBJECT")
						.getAsString();
				msg = jsonObject.getAsJsonArray("Data").getAsJsonArray().get(z).getAsJsonObject().get("BODY")
						.getAsString();
				tokn = jsonObject.getAsJsonArray("Data").getAsJsonArray().get(z).getAsJsonObject().get("TOKN")
						.getAsString();
				byte[] file = sptoExcelConvetor(dbSrc,sp);
				String timeStamp = new SimpleDateFormat("yyyyMMddHHmmss").format(new java.util.Date());
				
				resp = automailinterface(to,cc,url,file,subject,msg,timeStamp+".xlsx");
				GetDBData.Call(resp, tokn, "", "", "", "LSW_SAUTOMAILERCREATE_UPD");
			}

		} catch (Exception e) {
			resp = e.getMessage();
			GetDBData.Call(resp, tokn, "", "", "", "LSW_SAUTOMAILERCREATE_UPD");
			e.printStackTrace();
		} 

		return resp;
	}

	private String automailinterface(String to,String cc,String url,byte[] file,String subject,String mailbody,String filename) {
		String resp = "";
		String msg = "";
		String flg = "";
		try {
			OkHttpClient client = new OkHttpClient().newBuilder().build();
			MediaType mediaType = MediaType.parse("text/plain");
			RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)
					.addFormDataPart("subject", subject).addFormDataPart("body", mailbody)
					.addFormDataPart("to", to)
					.addFormDataPart("cc", cc)
					.addFormDataPart("file", filename,
							RequestBody.create(MediaType.parse("application/octet-stream"),file))
					.build();
			Request request = new Request.Builder()
					.url(url).method("POST", body)
					.build();
			Response response = client.newCall(request).execute();
			if (response.code() == 200) {
				flg = "Success";
				msg = response.body().string();
			} else {
				flg = "Error";
				msg = response.body().string();
			}
			response.close();
		} catch (Exception e) {
			e.printStackTrace();
			flg = "Error";
			msg = e.getMessage();
		}
		resp = flg + "~" + msg;
		return resp;
	}
	
	private byte[] sptoExcelConvetor(String dbSrc,String sp) {
		byte[] file = null;
		
		Connection connection = null;
		PreparedStatement procstmt = null;
		ResultSet resultSet = null;
		String Sheet = "";
		SXSSFWorkbook wb = null;
		SXSSFSheet[] personSheet = new SXSSFSheet[10];
		double valueF;
		try {
		connection = DBConnection.getConnection(dbSrc);
		procstmt = connection.prepareStatement("{ call " + sp + " (?,?,?,?,?) }");
		procstmt.setString(1, "");
		procstmt.setString(2, "");
		procstmt.setString(3, "");
		procstmt.setString(4, "");
		procstmt.setString(5, "");
		boolean isResultSet = procstmt.execute();
		int count = 0;
		while (true) {
			if (isResultSet) {
				resultSet = procstmt.getResultSet();
				while (resultSet.next()) {
					Sheet = "Sheet1";
					ResultSetMetaData rsmd = resultSet.getMetaData();
					if (count == 0) {
						wb = new SXSSFWorkbook();
						wb.setCompressTempFiles(true);
					}
					personSheet[count] = (SXSSFSheet) wb.createSheet(Sheet);
					Row headerRow = personSheet[count].createRow(0);
					Cell nameHeaderCell = headerRow.createCell(0);
					Cell addressHeaderCell = headerRow.createCell(1);
					CellStyle style = wb.createCellStyle();
					style.setFillForegroundColor(HSSFColor.RED.index);
					style.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
					int i, j, type;
					String chk;
					int colCount = rsmd.getColumnCount();
					for (i = 1; i <= colCount; i++) {
						chk = rsmd.getColumnName(i);
						headerRow.createCell(i - 1);

						if (chk.contains("***") == true) {
							headerRow.getCell(i - 1).setCellStyle(style);
							chk = chk.replace("***", "");
							headerRow.getCell(i - 1).setCellValue(chk);
						} else {
							headerRow.getCell(i - 1).setCellValue(chk);
						}

					}
					j = 1;
					while (resultSet.next()) {
						headerRow = personSheet[count].createRow(j);
						for (i = 1; i <= colCount; i++) {
							type = rsmd.getColumnType(i);
							valueF = 0.0D;
							if (type == 2) {
								valueF = Math.round(resultSet.getDouble(i) * 100.0D);
								valueF /= 100.0D;
								headerRow.createCell(i - 1).setCellValue(valueF);
							} else if (type == 12) {
								headerRow.createCell(i - 1).setCellValue(resultSet.getString(i));
							} else if (type == 4) {
								headerRow.createCell(i - 1).setCellValue(resultSet.getInt(i));
							} else if (type == 93) {
								Timestamp timestamp = resultSet.getTimestamp(i);
								if (timestamp != null)
									headerRow.createCell(i - 1).setCellValue(new Date(timestamp.getDate()));
							} else {
								headerRow.createCell(i - 1).setCellValue(resultSet.getString(i));
							}
						}
						j++;
					}
				}
			} else {
				if (procstmt.getUpdateCount() == -1) {
					break;
				}
			}
			count++;
			isResultSet = procstmt.getMoreResults();
		}
		
		ByteArrayOutputStream outByteStream = null;
		outByteStream = new ByteArrayOutputStream();
		wb.write(outByteStream);
		file = outByteStream.toByteArray();
		resultSet.close();
		outByteStream.close();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (connection != null) {
					connection.close();
				}
				if (procstmt != null) {
					procstmt.close();
				}
				if (resultSet != null) {
					resultSet.close();
				}
			} catch (Exception e) {

			}
		}
		return file;
	}
	
	public static String loadMailURL() throws IOException {
		String propFileName = "APIProp.properties";
		InputStream inputStream = null;
		Properties prop = new Properties();

		String fileName = "";
		fileName = System.getProperty("catalina.base");
		fileName = String.valueOf(fileName) + "/conf/" + propFileName;
		inputStream = new FileInputStream(fileName);
		if (inputStream != null) {
			prop.load(inputStream);
		}
		inputStream.close();
		String url = prop.getProperty("AutoMailURL");
		prop.clear();
		return url;
	}
}
