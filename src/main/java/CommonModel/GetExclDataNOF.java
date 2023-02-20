package CommonModel;

import java.io.*;
import java.sql.*;
import java.text.SimpleDateFormat;

//import org.apache.poi.hssf.usermodel.HSSFWorkbook;
//import org.apache.poi.hssf.util.AreaReference;
//import org.apache.poi.hssf.util.CellReference;


import java.util.TimeZone;

import org.apache.poi.xssf.streaming.SXSSFSheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.*;

import javax.servlet.ServletException;
import javax.servlet.http.*;

import org.openxmlformats.schemas.spreadsheetml.x2006.main.CTTable;
import org.openxmlformats.schemas.spreadsheetml.x2006.main.CTTableColumn;
import org.openxmlformats.schemas.spreadsheetml.x2006.main.CTTableColumns;
import org.springframework.stereotype.Controller;

public class GetExclDataNOF {
	// response.setContentType("text/html");
	// PrintWriter out = response.getWriter();

	private String param1;
	private String param2;
	private String param3;
	private String param4;
	private String param5;
	private String param6;
	private String param7;
	private String DBSrc;
	private String spname;

	final static TimeZone TIME_ZONE = null;
	
	public void param1(String param1) {
		this.param1 = param1;
	}

	public void param2(String param2) {
		this.param2 = param2;
	}

	public void param3(String param3) {
		this.param3 = param3;
	}

	public void param4(String param4) {
		this.param4 = param4;
	}

	public void param5(String param5) {
		this.param5 = param5;
	}
	public void param6(String param6) {
		this.param6 = param6;
	}
	public void param7(String param7) {
		this.param7 = param7;
	}
	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public void spname(String spname) {
		this.spname = spname;
	}

	@SuppressWarnings("deprecation")
	public String GetExclData() throws SQLException, IOException {
		// private String strResult;

		// ArrayList columnNames = new ArrayList();
		// ArrayList data = new ArrayList();
try
{
	/*param1="All";
	param2="As on Date";
	param3="All";
	param4="All";
	param5="";
	param6="";
	param7="17-12-2018";
	spname="LON_RPortfolio";*/
	
	
	
		Connection con = DBConnection.getConnection(DBSrc);

		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
		
		//spname="LON_RPortfolio";
		System.out.println("Executing SP...");
		PreparedStatement proc_stmt = con.prepareStatement("{ call " + spname + "(?,?,?,?,?,?,?) }");

		/*'ECCPTND'
		,'As on Date'
		,'All'
		,'All'
		,''
		,''
		,'30-11-2018'*/
		
		
		proc_stmt.setString(1, param1);
		proc_stmt.setString(2, param2);
		proc_stmt.setString(3, param3);
		proc_stmt.setString(4, param4);
		proc_stmt.setString(5, param5);
		proc_stmt.setString(6, param6);
		proc_stmt.setString(7, param7);

		ResultSet resultSet = null;
		resultSet = proc_stmt.executeQuery();
		
		ResultSetMetaData rsmd = resultSet.getMetaData();
		
		System.out.println("SP Executed...");
		// Start -- Enable in future
		String Sname="Sheet1";
		//Workbook wb = new HSSFWorkbook();
		//Workbook wb = new XSSFWorkbook();
		SXSSFWorkbook  wb = new SXSSFWorkbook();
		wb.setCompressTempFiles(true);
		
		SXSSFSheet personSheet = (SXSSFSheet) wb.createSheet(Sname);  //.createSheet("SAMPLE");
		
		personSheet.setRandomAccessWindowSize(100);
		
		Row headerRow = personSheet.createRow(0);
		Cell nameHeaderCell = headerRow.createCell(0);
		Cell addressHeaderCell = headerRow.createCell(1);

		
		int i,j,type;
		String chk;
		
		
		 int colCount = rsmd.getColumnCount();
		for (i = 1; i <= colCount; i++)
    	{
    		chk= rsmd.getColumnName(i);
    		headerRow.createCell(i-1).setCellValue(chk);
    	}
    
		System.out.println("Header Row Created...");
	j=1;
	while(resultSet.next())
	{
		headerRow = personSheet.createRow(j);
    	for (i = 1; i <= colCount; i++)
    	{
    		headerRow.createCell(i-1).setCellValue(resultSet.getString(i));
    	}
    	if(j%100==0)
    	System.out.println("Rows Bind : "+j);
    	//out.print(j);
    	j++;
    	
	}

		String outputDirPath = "C:/Portfolio_Download/Portfolio.xlsx";
		FileOutputStream fileOut;
		
			fileOut = new FileOutputStream(outputDirPath);
			
		
		wb.write(fileOut);
		fileOut.close();
		
	
		String xml="Success";
		
		return xml;
}
catch(Exception E)
{
	return E.toString();
	
}
		// END -- Enable in future

	}
	
}
