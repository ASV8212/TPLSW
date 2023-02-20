package CommonModel;

import CommonModel.UI_GetData;
import java.sql.Statement;
import java.sql.SQLException;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import java.sql.Connection;
import java.util.List;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.FormulaEvaluator;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import java.util.Iterator;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.io.FileInputStream;
import org.apache.commons.fileupload.disk.DiskFileItem;
import java.io.File;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import java.text.SimpleDateFormat;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.sql.PreparedStatement;

public class ExcelMultiDynmcUpld
{
    private String param1;
    private String param2;
    private String param3;
    private String param4;
    private String param5;
    private String DBSrc;
    private String spname;
    
    public void param1(final String param1) {
        this.param1 = param1;
    }
    
    public void param2(final String param2) {
        this.param2 = param2;
    }
    
    public void param3(final String param3) {
        this.param3 = param3;
    }
    
    public void param4(final String param4) {
        this.param4 = param4;
    }
    
    public void param5(final String param5) {
        this.param5 = param5;
    }
    
    public void DBSrc(final String DBSrc) {
        this.DBSrc = DBSrc;
    }
    
    public void spname(final String spname) {
        this.spname = spname;
    }
    
    public String ExcelMultiDynmcUpld(final HttpServletRequest request, final HttpServletResponse response) throws SQLException {
        String a="";
        String SucVal="Success";
        boolean isMultipart = ServletFileUpload.isMultipartContent(request);
        
        FileItemFactory factory = new DiskFileItemFactory();
        
        request.getQueryString();
        
        ServletFileUpload upload = new ServletFileUpload(factory);
        List<FileItem> multiparts = null;
		try {
			multiparts = upload.parseRequest(request);
		} catch (FileUploadException e1) {
			SucVal="Fail";
			System.out.println("Multipart error Read Error");
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
        
        int i = 0;
        String uppath="";
        

        for (FileItem item : multiparts) {
          if (!item.isFormField()) {
           
            String fileName = item.getName();
            
            File file1 = ((DiskFileItem)item).getStoreLocation();
            
            try {
				((DiskFileItem)item).write(file1);
			} catch (Exception e) {
				SucVal="Fail";
				System.out.println("Excel Disk read error");
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
            
            uppath = file1.getAbsolutePath();
            
     
            final Connection con = DBConnection.getConnection(DBSrc);   
            con.setAutoCommit(false);
            
            try
            {
                FileInputStream file = new FileInputStream(new File(uppath));

                //Create Workbook instance holding reference to .xlsx file
                XSSFWorkbook workbook = new XSSFWorkbook(file);

                //Get first/desired sheet from the workbook
                
                
                int  sheetcnt= workbook.getNumberOfSheets();
              
              for(int Shcnt=0 ; Shcnt <= sheetcnt-1 ;Shcnt++)
              {
            	  param3="";
            	  String sheetname="";
                XSSFSheet sheet = workbook.getSheetAt(Shcnt);
                 sheetname=  sheet.getSheetName();
                FormulaEvaluator formulaEvaluator = workbook.getCreationHelper().createFormulaEvaluator();
                //Iterate through each rows one by one
                Iterator<Row> rowIterator = sheet.iterator();
                String ColumnVal="";
                String Query="";
                UI_GetData getdata = new UI_GetData();
                
                getdata.param1(param1);
    			getdata.param2("");
    			getdata.param3(param3);
    			getdata.param4("");
    			getdata.param5(sheetname);
    			getdata.spname(param2);
    			getdata.DBSrc(DBSrc);

    			String retval ="";
    			String retval1 ="";
    			 retval = getdata.UI_GetData1();
    			
    			
    			//retval=retval.replace("<Resultset><a><Headers>","");
    			//retval=retval.replace("</Headers></a></Resultset>","");
                
    			 retval1=retval.split("<Headers>")[1].split("</Headers>")[0];
    			param3=retval.split("<Table>")[1].split("</Table>")[0];
    		
    			
    			if(!param3.equals(""))
    			{
    				
    			retval=retval1;
    			  PreparedStatement st = null;
               
               // System.out.println(ColumnVal);
                int rowIndex = 0;
                int ClmnIndex=0;
                int LoopClmnIndex=0;
                int ClmnCnt=0;
           //     boolean inData = true;
                
                Statement stmt=con.createStatement();
                
                while (rowIterator.hasNext() )
                {
                	ColumnVal="";
                	rowIterator.hashCode();
                	rowIndex ++;
                    Row row = rowIterator.next();
                    LoopClmnIndex =0;
                    
                    //For each row, iterate through all the columns
                    Iterator<Cell> cellIterator = row.cellIterator();

                    while (cellIterator.hasNext())
                    {
                        Cell cell = cellIterator.next();
                       
                        ClmnIndex=cell.getColumnIndex();
                     
                        if(ClmnIndex==LoopClmnIndex)
                        {
                        //Check the cell type and format accordingly
                        switch (cell.getCellType())
                        {
                            case Cell.CELL_TYPE_NUMERIC:
                            	if (DateUtil.isCellDateFormatted(cell)) {
                                    SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
                                    ColumnVal=ColumnVal+"'"+dateFormat.format(cell.getDateCellValue())+"',"; 
                                } else {
                                	ColumnVal=ColumnVal+"'"+cell.getNumericCellValue()+"',"; 
                                }
                            	 
                                //System.out.print(cell.getNumericCellValue() + "t");
                                break;
                                
                            case Cell.CELL_TYPE_STRING:
                            	 ColumnVal=ColumnVal+"'"+cell.getStringCellValue()+"',"; 
                                //System.out.print(cell.getStringCellValue() + "t");
                                break;
                            case Cell.CELL_TYPE_BOOLEAN:
                           	 ColumnVal=ColumnVal+"'"+cell.getStringCellValue()+"',"; 
                               //System.out.print(cell.getStringCellValue() + "t");
                               break;
                               
                             //  if (cell == null) { // use row.getCell(x, Row.CREATE_NULL_AS_BLANK) to avoid null cells
                              //     return true;
                              // }

                            case Cell.CELL_TYPE_BLANK:
                            	ColumnVal=ColumnVal+"'',"; 
                                //System.out.print(cell.getStringCellValue() + "t");
                                break;
                            	
                        
                        }
                        LoopClmnIndex ++;
                        }
                        else
                        {
                        	//ColumnVal=ColumnVal+"'',"; 
                        	while (LoopClmnIndex<ClmnIndex)
                        	{
                        		
                        		ColumnVal=ColumnVal+"'',";
                        		LoopClmnIndex ++;
                        		if(ClmnIndex==LoopClmnIndex)
                                {
                                //Check the cell type and format accordingly
                                switch (cell.getCellType())
                                {
                                    case Cell.CELL_TYPE_NUMERIC:
                                    	if (DateUtil.isCellDateFormatted(cell)) {
                                            SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
                                            ColumnVal=ColumnVal+"'"+dateFormat.format(cell.getDateCellValue())+"',"; 
                                        } else {
                                        	ColumnVal=ColumnVal+"'"+cell.getNumericCellValue()+"',"; 
                                        }
                                    	 
                                        //System.out.print(cell.getNumericCellValue() + "t");
                                        break;
                                        
                                    case Cell.CELL_TYPE_STRING:
                                    	 ColumnVal=ColumnVal+"'"+cell.getStringCellValue()+"',"; 
                                        //System.out.print(cell.getStringCellValue() + "t");
                                        break;
                                    case Cell.CELL_TYPE_BOOLEAN:
                                   	 ColumnVal=ColumnVal+"'"+cell.getStringCellValue()+"',"; 
                                       //System.out.print(cell.getStringCellValue() + "t");
                                       break;
                                       
                                     //  if (cell == null) { // use row.getCell(x, Row.CREATE_NULL_AS_BLANK) to avoid null cells
                                      //     return true;
                                      // }

                                    case Cell.CELL_TYPE_BLANK:
                                    	ColumnVal=ColumnVal+"'',"; 
                                        //System.out.print(cell.getStringCellValue() + "t");
                                        break;
                                    	
                                
                                }
                                }
                        		
                        	}
                        	LoopClmnIndex ++;	
                        }
                    
                        
                       
                        
                        //System.out.print(ColumnVal);
  // st.executeUpdate(ColumnVal);
                    }
                    if(rowIndex == 1)
                    {
                    	ClmnCnt=LoopClmnIndex;
                    }
                    if(LoopClmnIndex<ClmnCnt)
                    {
                    	while (LoopClmnIndex<ClmnCnt)
                    	{
                    		
                    		ColumnVal=ColumnVal+"'',";
 
                    		LoopClmnIndex ++;
                    	}
                    }
                    
                    
                    if (rowIndex > 1) {
                   
                    
                  
                    Query= "INSERT INTO "+param3+" ("+retval+")"
                       		+ "VALUES ("+ColumnVal+"'"+param1+"')"; 
                    System.out.println(Query);
                    //st.executeUpdate(Query);
                   // st= con.prepareStatement(Query);
                    stmt.addBatch(Query);
                   // con.commit();
                    Query="";
                   // System.out.println(Query);
                    }
                    
                
                }
              
                stmt.executeBatch();
                stmt.close();
                con.commit();
    			}
    			
            }

              file.close();               
              con.close();
            }
            catch (Exception e)
            {
            	con.rollback();
            	con.close();
            	SucVal="Fail";
            	System.out.println("Excel Read Error");
                e.printStackTrace();
            }
            
          }
        }
        //System.out.println(uppath);
		return SucVal;
    }

	
}