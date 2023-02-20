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
import org.springframework.util.StringUtils;

import java.text.DecimalFormat;

public class GetExclDataSheet {
	// response.setContentType("text/html");
	// PrintWriter out = response.getWriter();

	private static DecimalFormat df2 = new DecimalFormat(".##");
	
	private String param1;
	private String param2;
	private String param3;
	private String param4;
	private String param5;
	private String param6;
	private String param7;
	private String param8;
	private String DBSrc;
	private String FName;
	private String spname;

	
	private String MainSP;
	private String[] indvSP = new String[11];
	private String[] indvSheet = new String[10];
	
	private String sheetname;
	
	private int ShtLen,Shti;
	
	private double valueF;
	
	ResultSet resultSet;
	
	ResultSetMetaData rsmd;
	
	//ResultSet resultSetSheet;
	//ResultSetMetaData rsmdSheet;
	//PreparedStatement proc_stmtSheet;
	
	SXSSFWorkbook wb;
	
	SXSSFSheet[] personSheet=new SXSSFSheet[10];
	
	Row headerRow;
	Cell nameHeaderCell;
	Cell addressHeaderCell;
	PreparedStatement proc_stmt;
	int i,j,type,colCount;
	String chk;
	
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
	public void param8(String param8) {
		this.param8 = param8;
	}
	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}
	public void FName(String FName) {
		this.FName = FName;
	}
	//
	public void spname(String spname) {
		this.spname = spname;
	}
	
	public void sheetname(String sheetname) {
		this.sheetname = sheetname;
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
	
	
	indvSP = spname.split(",");
	indvSheet=sheetname.split(",");
	
	System.out.println(indvSP);
	System.out.println(indvSheet);
	//StringUtils.split(test, "|");
	//indvSP = StringUtils.split(spname,",");
	//indvSheet =StringUtils.split(sheetname,",");
	
	
	ShtLen = indvSheet.length;
	//ShtLen=3;
	Shti=0;
	MainSP=indvSP[0];
	
		//Connection con = DBConnection.getConnection(DBSrc);

		Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		Connection con =
		DriverManager.getConnection("jdbc:sqlserver://14.192.18.30:1433;databaseName=CSCF;username=sa;password=ENP@ssw0rd123");
		
		//spname="LON_RPortfolio";
		System.out.println("Executing SP...");
		
		
		wb = new SXSSFWorkbook();
		wb.setCompressTempFiles(true);
		
		
		
		//--------------------------------
		
		if(spname!="")
		{
			
		
		
		proc_stmt = con.prepareStatement("{ call " + MainSP + "(?,?,?,?,?,?,?,?) }");

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
		proc_stmt.setString(8, param8);
		
		proc_stmt.execute();
		
		
		System.out.println("Main SP Executed...");
		// Start -- Enable in future
		
		//Workbook wb = new HSSFWorkbook();
		//Workbook wb = new XSSFWorkbook();
		
		
		
		proc_stmt.close();
		}
		while(Shti<ShtLen)
		{
			
			
			proc_stmt = con.prepareStatement("{ call " + indvSP[Shti+1] + " }");
			personSheet[Shti] = (SXSSFSheet) wb.createSheet(indvSheet[Shti]);
			
			resultSet = null;
			resultSet = proc_stmt.executeQuery();
			rsmd = resultSet.getMetaData();
			
			
			
			  //.createSheet("SAMPLE");
			
			
			//Sheet personSheet = wb.createSheet("SAMPLE");
			headerRow = personSheet[Shti].createRow(0);
			//nameHeaderCell = headerRow.createCell(0);
			//addressHeaderCell = headerRow.createCell(1);

			
			colCount = rsmd.getColumnCount();
			for (i = 1; i <= colCount; i++)
	    	{
	    		chk= rsmd.getColumnName(i);
	    		headerRow.createCell(i-1).setCellValue(chk);
	    	}
	    
			System.out.println("Header Row Created...");
			j=1;
			while(resultSet.next())
			{
				headerRow = personSheet[Shti].createRow(j);
				for (i = 1; i <= colCount; i++)
				{
					type = rsmd.getColumnType(i);
	    		
					valueF=0;
					if (type == Types.NUMERIC)
					{
						valueF = Math.round(resultSet.getDouble(i)*100.00);
						//headerRow.createCell(i-1).setCellValue(Math.round(resultSet.getFloat(i)*100.00)/100.00);
						//
						valueF=valueF/100;
						headerRow.createCell(i-1).setCellValue(valueF);
					}
					else if (type == Types.VARCHAR)
					{
						//value2 = resultSet.getString(i);
						headerRow.createCell(i-1).setCellValue(resultSet.getString(i));
					}
					else if (type == Types.INTEGER)
					{
						//value2 = resultSet.getString(i);
						headerRow.createCell(i-1).setCellValue(resultSet.getInt(i));
					}
					else if(type == 93)
					{
						
						//headerRow.createCell(i-1).setCellValue(resultSet.getString(i));
						Timestamp timestamp = resultSet.getTimestamp(i);
						if (timestamp != null)
							headerRow.createCell(i-1).setCellValue(new java.util.Date(timestamp.getDate()));
						//value2 = resultSet.getString(i);
						
					}

				}
				if(j%100==0)
					System.out.println("Rows Bind : "+j);
					//out.print(j);
				j++;
	    	
			}
		
			proc_stmt.close();
			resultSet.close();
			
			Shti=Shti+1;
		}
		
		

		String outputDirPath = "C:/Portfolio_Download/"+FName+".xlsx";
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
