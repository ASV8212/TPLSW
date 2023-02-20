package CommonModel;

import CommonModel.DBConnection;
import CommonModel.ExcelNoDelUploadHandler;
import Controls.Connections;
import Controls.GetDBData;

import java.awt.image.BufferedImage;
import java.awt.print.Paper;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.StringReader;
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
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import jcifs.smb.NtlmPasswordAuthentication;
import jcifs.smb.SmbFile;
import jcifs.smb.SmbFileOutputStream;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.w3c.dom.Document;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.sun.org.apache.xerces.internal.parsers.DOMParser;

//import com.sun.org.apache.xerces.internal.parsers.DOMParser;




public class VAYANADOCUPLDExcl {
	
	private String PrcsID;
	  
	  private String FormName;
	  
	  private String names;
	  
	  private String vrsnno;
	  
	  private String usrpwd;
	  
	  private String domain;
	  
	  private String DBSrc;
	  
	  private boolean isMultipartfn;
	  
	  private ServletResponse response;
	  
	  /*Only Azure Start*/
	  private String param1;
		private String param2;
		private String param3;
		private String param4;
		private String param5;
		private String spname;
		/*Only Azure End*/
	  
	  public void PrcsID(String PrcsID) {
	    this.PrcsID = PrcsID;
	  }
	  
	  public void FormName(String FormName) {
	    this.FormName = FormName;
	  }
	  
	  public void names(String names) {
	    this.names = names;
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
	  
	  private String Header;
	  private String ROWFRM;
	  private String ROWTO;
	  private String TABLE;
	  private String SKIPROWWITHDATA;
	  private String AUTOINCR;
	  private String SKIPROW;
	  private Statement st;
	  private Statement BulkInsert;
	  private Statement BulkDelete;
	  private ResultSet rs = null;
	  //private boolean canLeave = false;
	  private String SQLQUERY="";
	  private String SQLDELTQUERY="";
	  private String ResultFlag="";
	  private String ResultMessage = "";
	  
	  
	  public String ExcelNoDelUploadHandler(HttpServletRequest request, HttpServletResponse response) throws Exception {
		  try {
			  ArrayList<String> Data=new ArrayList<String>();
			  int j=0;
			  int RowIndex = 0;
			  String WorkBookName = request.getParameter("param2").split(",")[0];
			  String SHEETNAME = request.getParameter("param2").split(",")[1];
			  List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();
			    Map<String, Object> row1 = null;

			  Connection con = DBConnection.getConnection(DBSrc);
			  st = con.createStatement();
			  rs = st.executeQuery("SELECT ISNULL(HEADER,'') HEADER,ISNULL(ROWFROM,'') ROWFROM,ISNULL(ROWTO,'') ROWTO,"
			  		+ "ISNULL(TABLENAME_PRCS,'') TABLENAME_PRCS,"
			  		+ "ISNULL(SKIROW,'') SKIROW, ISNULL(SKIPROWWITHDATA,'') SKIPROWWITHDATA, ISNULL(AUTOINCR,'') AUTOINCR "
			  		+ "FROM LSW_TGST_MSTR_CONFIG WITH(NOLOCK) WHERE EXCLSHEET = '"+WorkBookName+"' AND  "
			  		+ "SHEETNAME = '"+SHEETNAME+"' ORDER BY CAST(MANUAL_ORDER AS BIGINT) ASC");
			  
			  ResultSetMetaData metaData = rs.getMetaData();
			    Integer columnCount = metaData.getColumnCount();
			  while (rs.next()) {
				  row1 = new HashMap<String, Object>();
			        for (int i = 1; i <= columnCount; i++) {
			        	row1.put(metaData.getColumnName(i), rs.getObject(i));
			        }
			        resultList.add(row1);
			  }
			  if(resultList.size() == 0) {
				  ResultFlag="Failed";
			      ResultMessage = "Configuration not made";
			      return ResultFlag+"~"+ResultMessage;
			  }
			  
			  long serialVersionUID = 1L;
			    boolean isMultipart = ServletFileUpload.isMultipartContent(request);
			    String root = request.getParameter("domain1");
			    
			    String PrcsID = request.getParameter("param1");
			    String FormName = request.getParameter("param3");
			    String AttchNames = request.getParameter("names");
			    String Versions = request.getParameter("vrsnno");
			    String Usrpwd = request.getParameter("usrpwd1");
			    //String[] AryAttchNames = AttchNames.split(",");
			    //String[] AryVersion = Versions.split(",");
			    String[] Headers = new String[50];
			    String AttchName = "";
			    String Version = "";
			    String AttchLstDirname = "";
			    String OPAttchData = "";
			    String savepath = "";
			    BufferedImage image = null;
			    int width = 963;
			    int height = 640;
			    int SheetHeaderExcludeFrm = 0;
			    int SheetHeaderExcludeTo = 0;
			    int MaxTo1 = 0;
			    int MaxTo = 0;
			    int UNIQID = 0;
			    
			    int Counter = 0;
			    int Counter1 = 0;
			    int Counter2 = 0;
			    String IncrFlg = "";
			    String PreviousHdr = "";
			  
				  for(j=j;j<resultList.size();j++) {
					  Header = resultList.get(j).get("HEADER").toString();
					  ROWFRM = resultList.get(j).get("ROWFROM").toString();
					  ROWTO = resultList.get(j).get("ROWTO").toString();
					  TABLE = resultList.get(j).get("TABLENAME_PRCS").toString();
					  SKIPROW = resultList.get(j).get("SKIROW").toString();
					  SKIPROWWITHDATA = resultList.get(j).get("SKIPROWWITHDATA").toString();
					  AUTOINCR = resultList.get(j).get("AUTOINCR").toString();
					  j = j+1;				  
					  break;
				  }
			  
			  if (isMultipart) {
				    FileItemFactory factory = new DiskFileItemFactory();
			        request.getQueryString();
			        ServletFileUpload upload = new ServletFileUpload(factory);
			        List items = upload.parseRequest(request);
		        	Iterator iterator = items.iterator();
		        	while (iterator.hasNext()) {
		        			FileItem item = (FileItem) iterator.next();
			        		if (!item.isFormField()) {
			        			String fileName = item.getName();
			        			final File file1 = ((DiskFileItem)item).getStoreLocation();
			        			FileInputStream fis = new FileInputStream(file1);
			        			XSSFWorkbook myWorkBook = new XSSFWorkbook (fis);
			        			XSSFSheet mySheet = myWorkBook.getSheet(SHEETNAME);
			        			
			        			Iterator<Row> rowIterator = mySheet.iterator();
			        			
			        			while (rowIterator.hasNext()) {
			        				IncrFlg = "";
			        				RowIndex = RowIndex+1;
			        				Row row = rowIterator.next();
			        				
									/*
									 * if(row.getRowNum()!=RowIndex-1) { RowIndex = row.getRowNum()+1; }
									 */
			        				
									/*
									 * if(!SKIPROW.equals("")) { if(check(SKIPROW,RowIndex)) {
									 * if(RowIndex+1<=Integer.parseInt(ROWTO)) { RowIndex = RowIndex+1; IncrFlg=
									 * "Yes"; } } }
									 */
			        				if(!SKIPROWWITHDATA.equals("")) {
			        					if(check(SKIPROWWITHDATA,RowIndex))
				        				{
			        						
			        						row = rowIterator.next();
			        						RowIndex = RowIndex+1;
			        						if(!SKIPROWWITHDATA.endsWith(Integer.toString(RowIndex-1))) {
				        						IncrFlg= "Yes";
				        					}
				        				}
			        				}
			        				if(!Header.equals("Sheet Header Exclude")) {
			        				if(!check1(Headers,Header)) {
			        					List<String> arrlist = new ArrayList<String>(Arrays.asList(Headers)); 
			        					if(Counter1 == 0) {
			        						arrlist.clear();
			        						Headers = new String[0];
			        						Counter1= Counter1+1;
			        					}
			        					arrlist.add(Header);
			        					Headers = new String[Headers.length+1];
			        					Headers = arrlist.toArray(Headers);
			        				}
			        				if(!PreviousHdr.equals(Header)) {
			        					Counter2 = 1+Counter2;
			        					PreviousHdr = Header;
			        				}
			        				}
			        				if(Header.equals("Sheet Header Exclude") && (RowIndex >= Integer.parseInt(ROWFRM) && RowIndex <= Integer.parseInt(ROWTO))) {
			        					SheetHeaderExcludeFrm = Integer.parseInt(ROWFRM);
			        					SheetHeaderExcludeTo = Integer.parseInt(ROWTO);
			        				}
			        				else if(!Header.equals("Sheet Header Exclude") &&(IncrFlg.equals("")) && (RowIndex >= Integer.parseInt(ROWFRM) && RowIndex <= Integer.parseInt(ROWTO))) {
				        				SQLQUERY = SQLQUERY+"Insert into "+TABLE+" values(";
				                        Iterator<Cell> cellIterator = row.cellIterator();
				                        while (cellIterator.hasNext()) {
				                        	
				                        	Cell cell = cellIterator.next();
				                        	
				                        	switch (cell.getCellType()) 
				                        	{ 
				                        		case Cell.CELL_TYPE_STRING: 
				                        			SQLQUERY = SQLQUERY+"'"+cell.getStringCellValue()+"'"+",";
				                        			//System.out.print(cell.getStringCellValue() + "\t"); 
				                        			break; 
				                        		case Cell.CELL_TYPE_NUMERIC: 
				                        			 if (DateUtil.isCellDateFormatted(cell)) {
				                        		            SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
				                        		            SQLQUERY = SQLQUERY+"'"+dateFormat.format(cell.getDateCellValue()) +"'"+",";
				                        		        }
				                        			 else {
				                        			SQLQUERY = SQLQUERY+"'"+cell.getNumericCellValue()+"'"+",";
				                        			 }
				                        			//System.out.print(cell.getNumericCellValue() + "\t"); 
				                        			break; 
				                        		case Cell.CELL_TYPE_BLANK:
				                        			SQLQUERY = SQLQUERY+"''"+",";
				                        			//System.out.print(cell.getNumericCellValue() + "\t"); 
				                        			break;
				                        		case Cell.CELL_TYPE_BOOLEAN:
				                        			SQLQUERY = SQLQUERY+"'"+cell.getBooleanCellValue()+"'"+",";
				                        			//System.out.print(cell.getBooleanCellValue() + "\t"); 
				                        			break; 
				                        			default :
				                        	}
				                        }
										/*
										 * if(SQLQUERY.endsWith(",")) { SQLQUERY =
										 * SQLQUERY.substring(0,SQLQUERY.length() - 1); }
										 */
				                        if(!AUTOINCR.equals("Y")) {
				                        SQLQUERY = SQLQUERY+"'"+PrcsID+"'"+");";
				                        }
				                        if(AUTOINCR.equals("Y")) {
				                        	if(Headers[0].toString().equals(Header))
				                        	{
				                        		UNIQID=1+UNIQID;
				                        	}
					                        SQLQUERY = SQLQUERY+"'"+PrcsID+"','"+UNIQID+"'"+");";
					                        }
				                        
				                        //System.out.println(SQLQUERY);
			        				}
			        				Row r = mySheet.getRow(1+(RowIndex-1)); // 2nd row = row 1
					        		 //boolean hasData = true;

					        		 if (r == null) {
					        		    // Row has never been used
					        			 RowIndex = RowIndex+1;
					        		    //hasData = false;
					        		 } 
										/*
										 * else { // Check to see if all cells in the row are blank (empty) hasData =
										 * false; for (Cell c : r) { if (c.getCellType() != Cell.CELL_TYPE_BLANK) {
										 * //hasData = true; RowIndex = RowIndex+1; break; } break; } }
										 */
			        				if(RowIndex>=Integer.parseInt(ROWTO)) {
			        					if(Counter2>Headers.length) {
			        						if(Counter2%Headers.length == 0) {
			        					MaxTo1 = Integer.parseInt(ROWTO);
			        					MaxTo = MaxTo1;
			        						}
			        					}
			        					
										/*
										 * if(j+1 == resultList.size()) { MaxTo1 = MaxTo2; } else { MaxTo2 =
										 * Integer.parseInt(ROWTO); }
										 */
			        					for(j=j;j<resultList.size();j++) {
			        						  Header = resultList.get(j).get("HEADER").toString();
			        						  ROWFRM = resultList.get(j).get("ROWFROM").toString();
			        						  ROWTO = resultList.get(j).get("ROWTO").toString();
			        						  TABLE = resultList.get(j).get("TABLENAME_PRCS").toString();
			        						  SKIPROW = resultList.get(j).get("SKIROW").toString();
			        						  SKIPROWWITHDATA = resultList.get(j).get("SKIPROWWITHDATA").toString();
			        						  AUTOINCR = resultList.get(j).get("AUTOINCR").toString();
			        						  j = j+1;				  
			        						  break;
			        					  }
			        					if(Counter == 0) {
			        						SQLDELTQUERY = SQLDELTQUERY +"DELETE FROM "+TABLE+" WHERE PRCSID = '"+PrcsID+"';";
			        					}
			        					if((j) == resultList.size()) {
			        						if(SheetHeaderExcludeFrm != 0 && SheetHeaderExcludeTo !=0) {
			        						j=1;
			        						}
			        						else {
			        							j=0;
			        						}
			        						if(RowIndex-SheetHeaderExcludeTo<=Integer.parseInt(ROWTO))
			        						MaxTo = Integer.parseInt(ROWTO);
			        						else
			        							MaxTo = MaxTo1;
											/*
											 * if(RowIndex-SheetHeaderExcludeTo<=Integer.parseInt(ROWTO)) MaxTo =
											 * Integer.parseInt(ROWTO); else MaxTo=MaxTo1;
											 */
			        						/*if(Counter == 0) {
			        							SetMaxFrm = MaxTo;
			        						}*/
			        						Counter = Counter+1;
			        					}
			        					if(Counter>0 && RowIndex>=MaxTo)
			        					{
			        						ROWFRM =Integer.toString((RowIndex-(RowIndex-MaxTo))+(Integer.parseInt(ROWFRM)-SheetHeaderExcludeTo));
			        						ROWTO =Integer.toString((RowIndex-(RowIndex-MaxTo))+(Integer.parseInt(ROWTO)-SheetHeaderExcludeTo));
			        						String[] SKIPROWWDATAARRAY = SKIPROWWITHDATA.split(",");
			        						String SKIPROWWDATAARRAY1="";
			        						for(int y = 0;y<SKIPROWWDATAARRAY.length;y++) {
			        							SKIPROWWDATAARRAY1=SKIPROWWDATAARRAY1+Integer.toString((RowIndex-(RowIndex-MaxTo))+(Integer.parseInt(SKIPROWWDATAARRAY[y])-SheetHeaderExcludeTo))+",";
			        						}
			        						if(SKIPROWWDATAARRAY1.endsWith(","))
					                        {
			        							SKIPROWWDATAARRAY1 = SKIPROWWDATAARRAY1.substring(0,SKIPROWWDATAARRAY1.length() - 1);
					                        }
			        						SKIPROWWITHDATA = SKIPROWWDATAARRAY1;
			        						//Counter=0;
			        					}
					        		}
			        				
			        		}
			        			try {
			        				BulkDelete = con.createStatement();
			        				con.setAutoCommit(false);
			        				BulkDelete.addBatch(SQLDELTQUERY);
			        				int[] Deleteresult = BulkDelete.executeBatch();
			        			      System.out.println("The number of rows deleted: "+ SQLDELTQUERY.split(";").length);
			        			      
			        			      BulkInsert = con.createStatement();
			        			      BulkInsert.addBatch(SQLQUERY);
				        				int[] Insertresult = BulkInsert.executeBatch();
				        			      System.out.println("The number of rows inserted: "+ SQLQUERY.split(";").length);
				        			      
				        			      con.commit();
				        			      ResultFlag="Success";
				        			      ResultMessage = "Data Inserted Successfully";
			        			}
			        			catch(Exception e){
			        				ResultFlag="Failed";
			        			      ResultMessage = e.toString();
			        			      e.printStackTrace();
			        			      con.rollback();
			        			}
			        			finally{
			        			      if(BulkDelete!=null)
			        			    	  BulkDelete.close();
			        			      if(BulkInsert!=null)
			        			    	  BulkInsert.close();
			        			      
			        			if(con!=null)
			        			       con.close();
			        			}
			        			
		        		}
		        		
		        	}
			    }

		  }
		  catch(Exception e) {
	        	e.printStackTrace();
	        }

		  return ResultFlag+"~"+ResultMessage;
	  }
	  private static boolean check(String Str, int toCheckValue) 
	    { 
	        // check if the specified element 
	        // is present in the array or not 
	        // using Linear Search method 
		  String [] str1 = Str.split(",");
		  int size = str1.length;
	      int [] arr = new int [size];
	      for(int i=0; i<size; i++) {
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
	  private static boolean check1(String[] headers, String toCheckValue) 
	    { 
	        // check if the specified element 
	        // is present in the array or not 
	        // using Linear Search method 
		  //String [] str1 = headers.split(",");
		  int size = headers.length;
	      String [] arr = new String [size];
	      for(int i=0; i<size; i++) {
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
