package Controls;


import CommonModel.*;
import java.sql.*;

public class Connections {

  public static void main(String[] args) throws Exception {
    System.out.println("True");
  }

  public static String Call(PreparedStatement proc_stmt,ResultSet rs,Connection con,String Param1) {
 
    
    String Data="";
    
        
    try {
   
    	if (rs != null) {			 
			rs.close();
		} 

	 if (proc_stmt != null) {
		 proc_stmt.close();
       }
	 
	 
	 if (Param1.equals("Close"))
	 {
   if (con != null) {
       con.close();
   }
   System.out.println("Connection Closed");
	 }
   
	 if (Param1.equals("Rollback"))
	 {
   if (con != null) {
       con.close();
   }
   System.out.println("Connection Closed");
	 }
   
   
    }
		catch (Exception e)
		{
			   System.out.println("Conenction Closing Error " + e.toString());
			
			try {
			if (rs != null) {
				 
					rs.close();
				} 
		
			 if (proc_stmt != null) {
				 proc_stmt.close();
		       }
		   if (con != null) {
		       con.close();
		   }
			}
		   catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		   
			e.printStackTrace();
		}
			
    return Data;
  }
  
  
  
}