package Integration;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

import CommonModel.DBConnection;
import Controls.InterfaceSAP;

public class SAPGLService {
  public static void main(String[] a) throws Exception {
    try {
      SAPGLService GLS = new SAPGLService();
      GLS.GLService();
    } catch (Exception se) {
      se.printStackTrace();
    } 
  }
  
  public void GLService() throws Exception {
    String Result = "Success~Done";
    Connection cons = null;
    PreparedStatement prs = null;
    PreparedStatement prs1 = null;
    ResultSet rs = null;
    String Processid = "";
    String Input = "";
    String spname1 = "TVSSAP_GLCREATEPROC";
    String URL = "";
    String contenttype = "";
    try {
      if (cons == null)
        cons = DBConnection.getConnection("LMS"); 
      prs = cons.prepareStatement("{ call " + spname1 + "(?,?,?,?,?) }");
      prs.setString(1, "");
      prs.setString(2, "");
      prs.setString(3, "");
      prs.setString(4, "");
      prs.setString(5, "");
      rs = prs.executeQuery();
      ResultSetMetaData rsmd = rs.getMetaData();
      int colCount = rsmd.getColumnCount();
      while (rs.next()) {
        Input = rs.getString(1);
        URL = rs.getString(2);
        Processid = rs.getString(3);
        contenttype = rs.getString(4);
        if (colCount >= 1)
          Result = InterfaceSAP.InterfaceCall(URL, Input, contenttype); 
        System.out.println("Response: " + Result);
        String Status = null;
        String Message = null;
        String[] resultSplit = Result.split("~");
        Status = resultSplit[0];
        Message = resultSplit[1];
        prs1 = cons.prepareStatement("{ call " + spname1 + "_UPD" + "(?,?,?,?,?) }");
        prs1.setString(1, Status);
        prs1.setString(2, Message);
        prs1.setString(3, "");
        prs1.setString(4, "");
        prs1.setString(5, Processid);
        prs1.executeQuery();
      } 
    } catch (Exception AS) {
      AS.printStackTrace();
    } finally {
      DBConnection.closeConnection(null, prs1, null);
      DBConnection.closeConnection(cons, prs, rs);
    } 
  }
}
