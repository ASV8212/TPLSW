package Controls;


import CommonModel.*;
import java.sql.*;
import java.util.ArrayList;

public class GetDBDatatoINTR {

  public static void main(String[] args) throws Exception {
    System.out.println("True");
  }

  public static ArrayList<String> Call(String Param1,String Param2,String Param3,String Param4,String Param5,String SPName,String DBINTR) {
 
    String DBSrc=DBINTR;    
    ArrayList<String> Data=new ArrayList<String>();
    
        
	Connection con = DBConnection.getConnection(DBSrc);
	PreparedStatement proc_stmt = null;
	ResultSet rs = null;
	
    try {
   
    	// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver://192.168.1.200:1433;databaseName=ThemeproLO;username=sa;password=encore@123");
		
	
			proc_stmt = con.prepareStatement("{ call " +SPName+ " (?,?,?,?,?) }");
		

		proc_stmt.setString(1, Param1);
		proc_stmt.setString(2, Param2);
		proc_stmt.setString(3, Param3);
		proc_stmt.setString(4, Param4);
		proc_stmt.setString(5, Param5);

		rs = proc_stmt.executeQuery();
		
		ResultSetMetaData rsmd = rs.getMetaData();
		int colCount = rsmd.getColumnCount();
		
	while (rs.next()) {
		
		for (int i = 1; i <= colCount; i++) {		
			Data.add(rs.getString(i));	
		}
		}
	
	Connections.Call(proc_stmt,rs,con,"Commit");
		
    }
		catch (Exception e)
		{
			
			Connections.Call(proc_stmt,rs,con,"Rollback");
			
			e.printStackTrace();
		}
				finally {
			        
					Connections.Call(proc_stmt,rs,con,"Close");
					
			    }		
				
   		
    return Data;
  }
  
  
  
}