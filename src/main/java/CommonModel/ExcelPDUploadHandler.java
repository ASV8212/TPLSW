package CommonModel;

import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ExcelPDUploadHandler {

	
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
	  public ExcelPDUploadHandler() {}
	  
	  /*Only Azure Start*/
	  public void param1(String param1) {
			this.param1 = param1;//SP-Name to Delete With comma split for PrcsID 
		}

		public void param2(String param2) {
			this.param2 = param2;//TABLENAME IF MULTIPLE COMMA SPLIT
		}

		public void param3(String param3) {
			this.param3 = param3;//FILE PATH
		}

		public void param4(String param4) {
			this.param4 = param4;//Post SP
		}

		public void param5(String param5) {
			this.param5 = param5;
		}
		public void spname(String spname) {
			this.spname = spname;
		}
		/*Only Azure End*/
	  public void PrcsID(String PrcsID)
	  {
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
	  public String ExcelPDUploadHandler(HttpServletRequest request, HttpServletResponse response) throws Exception
	  {
		  return "";
	  }
	  
}
