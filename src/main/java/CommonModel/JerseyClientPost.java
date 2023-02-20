package CommonModel;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import jcifs.smb.NtlmPasswordAuthentication;
import jcifs.smb.SmbFile;
import jcifs.smb.SmbFileOutputStream;

import org.springframework.stereotype.Controller;

import com.google.gson.Gson;
import com.itextpdf.text.Document;
import com.itextpdf.text.Font;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfWriter;

import jcifs.smb.NtlmPasswordAuthentication;
import jcifs.smb.SmbException;
import jcifs.smb.SmbFile;
import jcifs.smb.SmbFileOutputStream;




import CommonModel.ScoreRequest;
import CommonModel.ScoreResponse;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;


@Controller
public class JerseyClientPost {
	// response.setContentType("text/html");
	// PrintWriter out = response.getWriter();

	private String param1;
	private String param2;
	private String param3;
	private String param4;
	private String param5;
	private String root;
	private String Usrpwd;
	private String FormName;
	private String PrcsID;
	private String AttchName;
	private String Version;
	private String AttchDescrptn;
	private String DBSrc;
	private String spname;
	private String CntntURL;


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
 
	public void root(String root) {
		this.root = root;
	}
 
	public void Usrpwd(String Usrpwd) {
		this.Usrpwd = Usrpwd;
	}
	public void FormName(String FormName) {
		this.FormName = FormName;
	}
 
	public void PrcsID(String PrcsID) {
		this.PrcsID = PrcsID;
	}
	public void AttchName(String AttchName) {
		this.AttchName = AttchName;
	}
 
	public void Version(String Version) {
		this.Version = Version;
	}
	
	public void AttchDescrptn(String AttchDescrptn) {
		this.AttchDescrptn = AttchDescrptn;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}
	public void spname(String spname) {
		this.spname = spname;
	}
	public void CntntURL(String CntntURL) {
		this.CntntURL = CntntURL;
	}
public String JerseyClientPost1() {

	String RtnVal="";
	String Vl="";
	String OPAttchData = "";
	String Score="";
	String PdfTxt="";
		try {
			
			ResultSet resultSet = null;
			PreparedStatement preparedStatement = null;
			String OutRst;
			
			Connection con = DBConnection.getConnection(DBSrc);
			preparedStatement = con.prepareStatement("{ call " + spname+ "(?,?,?,?,?) }");
			
		
			preparedStatement.setString(1, param1);
			preparedStatement.setString(2, param2);
			preparedStatement.setString(3, param3);
			preparedStatement.setString(4, param4);
			preparedStatement.setString(5, param5);

			
			resultSet = preparedStatement.executeQuery();

			String Strval = null;
			String srvr = null;
			String port = null;
			
			
			//String Strval ="TUEF1220150101_080008_TE01       HF63911002_UATC2C             p/baUo6rh                     00000100000   04021CCLPN03N010107NAICKAR0207JAWAHAR03000400050007081704196708012ID03I010102010210AADPN0408NPT03T0101129198200919240200030201PA03A010138COM"
				//	+ "MERZ 3RD FLR INTERNATIONAL BUSINESS0232PARK OBEROI GARDEN CITY GOREGAON0314MUMBAI  MUMBAI04000506MUMBAI0602270706400063080202090201ES05003930102**";
			//String srvr="172.29.29.6";
			//String port="7506";
			
			while (resultSet.next()) {
			   Strval = resultSet.getString("CibilReq"); 
			   srvr = resultSet.getString("ServerName"); 
			   port = resultSet.getString("PortNo"); 
			}

			Client client = Client.create();

			WebResource webResource = client
					.resource(CntntURL);

			//String input = "{\"score\":\"Metallica\",\"inputstring\":\"TUEF1220150101_080008_TE01       HF63911002_UATC2C             p/baUo6rh                     00000100000   04021CCLPN03N010107NAICKAR0207JAWAHAR03000400050007081704196708012ID03I010102010210AADPN0408NPT03T0101129198200919240200030201PA03A010138COMMERZ 3RD FLR INTERNATIONAL BUSINESS0232PARK OBEROI GARDEN CITY GOREGAON0314MUMBAI  MUMBAI04000506MUMBAI0602270706400063080202090201ES05003930102**\"}";
Gson gson = new Gson();
ScoreRequest reqobj = new ScoreRequest();
reqobj.setinputstring(Strval);
//reqobj.setserver("server");
//reqobj.setport("awea");

reqobj.setserver(srvr);
reqobj.setport(port);


String input = gson.toJson(reqobj);
ClientResponse response = webResource.type("application/json")
		.post(ClientResponse.class, input);

//	if (response.getStatus() != 200) {
//		throw new RuntimeException("Failed : HTTP error code : "
//				+ response.getStatus());
//	}

System.out.println("Output from Server .... \n");
String output = response.getEntity(String.class);
ScoreResponse responseobj = gson.fromJson(output, ScoreResponse.class);

boolean ErFlg;
String outputstr="";
String errmsg="";




 outputstr=responseobj.getCibilErrorstring();
 errmsg=responseobj.getErrorMessage();

 Score=responseobj.getscore();
 PdfTxt=responseobj.getoutputstring();
 
 ErFlg = responseobj.getErrorFlag();

System.out.println(responseobj);

if (ErFlg == false)
{
RtnVal=SavePDF(responseobj.getoutputstring(),root,Usrpwd,FormName,PrcsID,AttchName,Version,AttchDescrptn);
Vl = "PDF";
}
else if ((ErFlg == true) && !outputstr.isEmpty())
{
	RtnVal=outputstr;
}

else if ((ErFlg == true) && outputstr.isEmpty())
{
	RtnVal=errmsg;
}
			
		} catch (Exception e) {

			e.printStackTrace();

		}
		return RtnVal +"|"+Vl+"|"+Score+"|"+PdfTxt;

	}
	
	
	public static String SavePDF(String inputString,String root,String Usrpwd,String FormName,String PrcsID,String AttchName,String Version,String AttchDescrptn)
	
	{
		
		// begin 
		String OPAttchData="";
		BufferedReader br = null;

	    try {
			//File file = new File("D:\\cibildocuments\\sample.pdf");
	       //new Document(PageSize.A4,36,36,36,36);
	        Document pdfDoc = new Document(PageSize.A4,65,5,3,0);
	        

			String uppath = "";
			String userPassword = Usrpwd;
			NtlmPasswordAuthentication auth1 = new NtlmPasswordAuthentication(
					userPassword);
			SmbFile sFile2 = new SmbFile("smb:" + root + "/"
					+ "Attachments" + "/" + PrcsID + "/" + FormName
					+ "/" + AttchName + "/" + Version , auth1);
	        
			if (!sFile2.exists()) {
				sFile2.mkdirs();
			}
			
			
	        //var url= "/Attachments/43208_LoanCreation_LoanCr/LoanApplication/Application Form/DOC0000000030VR/SanctionList.pdf";
	        String output_file = AttchDescrptn+".pdf";
	        System.out.println("## writing to: " + output_file);
	        SmbFile sFile3 = new SmbFile(sFile2 + "/" + output_file, auth1);
	        
	        
	        PdfWriter.getInstance(pdfDoc,new SmbFileOutputStream(sFile3)).setPdfVersion(PdfWriter.VERSION_1_7);;

	        pdfDoc.open();

	        float  fntSize = 8.29f;

	        BaseFont courier = BaseFont.createFont(BaseFont.COURIER, BaseFont.CP1252, BaseFont.EMBEDDED); 
	        Font myfont = new Font(courier,fntSize);
			
	        pdfDoc.add(new Paragraph("\n"));
            //int pageend = inputString.("\n");
	        ByteArrayInputStream stream = new ByteArrayInputStream(inputString.getBytes(StandardCharsets.UTF_8));
	            br = new BufferedReader(new InputStreamReader(stream));
	            String strLine;
                int i=0;
	            while ((strLine = br.readLine()) != null) {
	            	if(strLine.startsWith("\f") && strLine.contains("CIBIL CONSUMER CREDIT"))
	            		{
	            		pdfDoc.newPage();
	            		}
	                Paragraph para = new Paragraph(strLine + "\n", myfont);
	              
	                pdfDoc.add(para);
	                
	            }
	            
	            
	            pdfDoc.close();
	            
	            double bytes = sFile3.length();
				double Size = (bytes / 1024);
				
	            SmbFile uploadedFile = sFile3;
				String savepath = uploadedFile.toString();
				String rootsplit = root.split("//")[(root.split("//")).length - 1];
				String[] AttchPath = savepath.split(rootsplit);
				
				OPAttchData = AttchName + "~" + AttchDescrptn + "~"
						+ AttchPath[1] + "~"+Size+"~" + Version;
				
	       
	    }

	    catch (Exception e) {
	        e.printStackTrace();
	    } finally {
	 
	           
	    }

	    return OPAttchData;
		
		
	}

}

