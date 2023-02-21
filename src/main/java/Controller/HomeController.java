//Chola SME Dev
package Controller;
import CommonModel.CS_FetchFormFieldData;
import CommonModel.CS_Migrformdata;
import CommonModel.CommonFns;
import Integration.*;
import CommonModel.DBConnection;
import CommonModel.FileUploadHandler;
import CommonModel.FncallWebserviceGrid;
import CommonModel.GetExclData;
import CommonModel.GetExclDataNOF;
import CommonModel.GetExclDataSheet;
import CommonModel.GridView;
import CommonModel.MailSendWthAttchRPTBdy;
import CommonModel.MailSending;
import CommonModel.PANCINDIN;
import CommonModel.PaymentGW;
import CommonModel.UI_GetData;
import CommonModel.UI_GetDataLrg;
import CommonModel.ExcelMultiDynmcUpld;
import CommonModel.UI_GetLoginPwd;
import CommonModel.UI_GetMainTxtData;
import CommonModel.UI_GetPageURL;
import CommonModel.UI_Getdata_Disb;
import CommonModel.UI_LoginGetData;
import CommonModel.UI_fetchActivityform;
import CommonModel.UI_fetchformButtonData;
import CommonModel.UI_fetchformdata;
import CommonModel.UI_fetchformdata_get2date;
import CommonModel.UI_fetchformdata_get2dateTime;
import CommonModel.UI_formdatains_General;
import CommonModel.UI_formdatainsert;
import CommonModel.UpMailSending;
import CommonModel.deletefile;
import CommonModel.sendSMS;
import Controller.HomeController;
import Controls.Connections;
import Controls.GetDBData;
import Controls.JSInterfaceCall;
import Controls.WFCall;
import Mobility.ApplicantPush;
import Mobility.CusGen;
import Mobility.MTotalKyc;
import UserviewModel.UI_formdata_GetMainPageHTML;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.math.BigInteger;
import java.net.HttpURLConnection;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.net.URL;
import java.net.URLEncoder;
import java.net.UnknownHostException;
import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.sql.Types;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.Locale;
import java.util.Properties;
import java.util.TimeZone;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.FileUtils;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.streaming.SXSSFSheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.json.JSONObject;
import org.json.XML;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

@Controller
public class HomeController {
  private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
  
  @RequestMapping(value = {""}, method = {RequestMethod.GET})
  public String Login(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    request.setAttribute("UNA", session.getAttribute("UNA"));
    session.removeAttribute("UNA");
    return "Common/Pages/Userview/Login_Audit";
  }
  
  @RequestMapping(value = {"Home"}, method = {RequestMethod.GET})
  public String FEPHome(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    
 // Added Dashboard Start Date : 15/07/2020
    ArrayList<String> Data1=new ArrayList<String>();
	
	Data1	= GetDBData.Call( ""+session.getAttribute("UsrSession"),"", "", "", request.getParameter("PrMs5"), "LSW_SDASHBOARDCNTNT");
	
	request.setAttribute("DASHBRD1", Data1.get(0));
	request.setAttribute("DASHBRD2", Data1.get(1));
	request.setAttribute("DASHBRD3", Data1.get(2));
	request.setAttribute("DASHBRD4", Data1.get(3));
	request.setAttribute("DASHBRD5", Data1.get(4));
	request.setAttribute("DASHBRD6", Data1.get(5));
	request.setAttribute("DASHBRD7", Data1.get(6));
	request.setAttribute("DASHBRD8", Data1.get(7));
	request.setAttribute("DASHBRD9", Data1.get(8));
	request.setAttribute("DASHBRD10", Data1.get(9));
	// Added Dashboard End
    
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "Home";
  }
  
  @RequestMapping(value = {"MyApplication"}, method = {RequestMethod.GET})
  public String MyApplication(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "MyApplication";
  }
  
  @RequestMapping(value = {"MMyApplication"}, method = {RequestMethod.GET})
  public String MMyApplication(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SMOBGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "MMyApplication";
  }
  
  @RequestMapping(value = {"ManageDeferment"}, method = {RequestMethod.GET})
  public String ManageDeferment(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "ManageDeferment";
  }
  
  @RequestMapping(value = {"ManageOTC"}, method = {RequestMethod.GET})
  public String ManageOTC(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "ManageOTC";
  }
  
  @RequestMapping(value = { "RoleMST" }, method = { RequestMethod.GET })
  public String RoleMST(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '|' + request.getParameter("PrMs1") + '|' + request.getParameter("PrMs2") + '|' + request.getParameter("PrMs3") + '|' + request.getParameter("PrMs4") + '|' + request.getParameter("PrMs5") + '|' + request.getParameter("PrMs6") + '|' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "RoleMST";
  }
  
  
  
  @RequestMapping(value = { "Rolecreation" }, method = { RequestMethod.GET })
  public String Rolecreation(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '|' + request.getParameter("PrMs1") + '|' + request.getParameter("PrMs2") + '|' + request.getParameter("PrMs3") + '|' + request.getParameter("PrMs4") + '|' + request.getParameter("PrMs5") + '|' + request.getParameter("PrMs6") + '|' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "Rolecreation";
  }
  
//MonthRpt Start
	@RequestMapping(value = { "MonthRpt" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public String MonthRpt(Locale locale, Model model, HttpSession session, HttpServletRequest request,
			HttpServletResponse response) {
		logger.info("Welcome home! The client locale is {}.", locale);

		Object time = session.getAttribute("LogSession");
		if (time == null) {
			return "redirect:";
		} else {
			
			request.setAttribute("User", session.getAttribute("UsrSession"));
			request.setAttribute("PrcsID", request.getParameter("PrcsID"));
			request.setAttribute("ActvID", request.getParameter("ActvID"));
			request.setAttribute("Action", request.getParameter("Action"));
			request.setAttribute("WFURL", request.getParameter("WFURL"));

			request.setAttribute("FormAction", request.getParameter("FormAction"));
			request.setAttribute("FormName", request.getParameter("FormName"));
			request.setAttribute("FormColor", request.getParameter("FormColor"));

			request.setAttribute("PrMs1", request.getParameter("PrMs1"));
			request.setAttribute("PrMs2", request.getParameter("PrMs2"));
			request.setAttribute("PrMs3", request.getParameter("PrMs3"));
			request.setAttribute("PrMs4", request.getParameter("PrMs4"));
			request.setAttribute("PrMs5", request.getParameter("PrMs5"));
			request.setAttribute("PrMs6", request.getParameter("PrMs6"));
			request.setAttribute("PrMs7", request.getParameter("PrMs7"));
			request.setAttribute("PrMs8", request.getParameter("PrMs8"));
			request.setAttribute("PrMs9", request.getParameter("PrMs9"));
			request.setAttribute("PrMs10", request.getParameter("PrMs10"));

			request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
			

			 ArrayList<String> Data=new ArrayList<String>();
				
			 Data	= GetDBData.Call( request.getParameter("ActvID")+"|"+session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"),request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
				
				
				request.setAttribute("MAINTABDATA", Data.get(0));
				request.setAttribute("FORMHEADING", Data.get(1));
				request.setAttribute("CONTROLDATA", Data.get(2));
				request.setAttribute("PAGETABDATA", Data.get(3));
				
				request.setAttribute("AppInfo", Data.get(4));
				request.setAttribute("SUBPAGETABDATA", Data.get(5));
				request.setAttribute("HEADERDATA", Data.get(6));
				request.setAttribute("DMY1", Data.get(7));
				request.setAttribute("DMY2", Data.get(8));
				request.setAttribute("DMY3", Data.get(9));
				request.setAttribute("DMY4", Data.get(10));
				request.setAttribute("DMY5", Data.get(11));
				request.setAttribute("DMY6", Data.get(12));
				request.setAttribute("DMY7", Data.get(13));
				
				
				Data	= GetDBData.Call(request.getParameter("ActvID")+"|"+session.getAttribute("UsrSession"),request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8")+'~'+request.getParameter("PrMs1")+'~'+request.getParameter("PrMs2")+'~'+request.getParameter("PrMs3")+'~'+request.getParameter("PrMs4")+'~'+request.getParameter("PrMs5")+'~'+request.getParameter("PrMs6")+'~'+request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
				request.setAttribute("DMY8", Data.get(0));
				request.setAttribute("DMY9", Data.get(1));
				request.setAttribute("DMY10", Data.get(2));
				request.setAttribute("DMY11", Data.get(3));
				request.setAttribute("DMY12", Data.get(4));
				request.setAttribute("DMY13", Data.get(5));
				request.setAttribute("DMY14", Data.get(6));
				request.setAttribute("DMY15", Data.get(7));
				request.setAttribute("DMY16", Data.get(8));
				request.setAttribute("DMY17", Data.get(9));
				request.setAttribute("DMY18", Data.get(10));
				request.setAttribute("DMY19", Data.get(11));
				request.setAttribute("DMY20", Data.get(12));
				request.setAttribute("DMY21", Data.get(13));
			return "MonthRpt";
		}
	}
	//MonthRpt End

  
  @RequestMapping(value = { "diruser" }, method = { RequestMethod.GET })
  public String diruser(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "diruser";
  }
  
  @RequestMapping(value = { "LeadCre" }, method = { RequestMethod.GET })
  public String LeadCre(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "LeadCre";
  }
  
  @RequestMapping(value = { "ProjFundMST" }, method = { RequestMethod.GET })
  public String ProjFundMST(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "ProjFundMST";
  }
  
  
  @RequestMapping(value = { "ProjFund" }, method = { RequestMethod.GET })
  public String ProjFund(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "ProjFund";
  }
 
  
  @RequestMapping(value = { "CersaiDownload" }, method = { RequestMethod.GET })
  public String CersaiDownload(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "CersaiDownload";
  }
  
  
  @RequestMapping(value = { "DirUserMST" }, method = { RequestMethod.GET })
  public String DirUserMST(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "DirUserMST";
  }
  
  @RequestMapping(value = { "VendorMST" }, method = { RequestMethod.GET })
  public String VendorMST(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "VendorMST";
  }
  
  @RequestMapping(value = { "Vendorcreation" }, method = { RequestMethod.GET })
  public String Vendorcreation(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "Vendorcreation";
  }
  
  @RequestMapping(value = {"ManagePDD"}, method = {RequestMethod.GET})
  public String ManagePDD(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "ManagePDD";
  }
  
  @RequestMapping(value = {"BusinessDetl"}, method = {RequestMethod.GET})
  public String BusinessDetl(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "BusinessDetl";
  }
  
  @RequestMapping(value = {"SMEBusinessDetl"}, method = {RequestMethod.GET})
  public String SMEBusinessDetl(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEBusinessDetl";
  }
  
  @RequestMapping(value = {"Swap"}, method = {RequestMethod.GET})
  public String Swap(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "Swap";
  }
  
  @RequestMapping(value = {"SMESwap"}, method = {RequestMethod.GET})
  public String SMESwap(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMESwap";
  }
  
  @RequestMapping(value = {"ManageDev"}, method = {RequestMethod.GET})
  public String ManageDev(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "ManageDev";
  }
  
  @RequestMapping(value = {"WFINITV1"}, method = {RequestMethod.POST})
  @ResponseBody
  public String WFINITV1(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String Response = "";
    String ProcessID = "";
    String ActivityID = "";
    String http = request.getHeader("Origin");
    String Referer = request.getHeader("Referer");
    String CODE = request.getParameter("CODE");
    String NAME = request.getParameter("NAME");
    String OldPrcsID = request.getParameter("OldPrcsID");
    String SPNAME = request.getParameter("SPNAME");
    Response = WFCall.WFInit(session.getAttribute("UsrSession").toString(), session.getAttribute("CPMSession").toString(), http, Referer, String.valueOf(String.valueOf(CODE)) + "|" + NAME, "LSW_SWFINITCALLALL");
    String[] Reponse = Response.split("~");
    ProcessID = Reponse[0];
    ActivityID = Reponse[1];
    if (!ProcessID.equals("No Data")) {
      if (SPNAME != null && !SPNAME.isEmpty()) {
        ArrayList<String> Data = new ArrayList<String>();
        Data = GetDBData.Call(ProcessID, ActivityID, OldPrcsID, "", "", SPNAME);
      } 
      Response = "Workflow Initiated~" + ProcessID + "~" + ActivityID;
    } else {
      Response = "Workflow Initiation Failed~No Data~No Data";
    } 
    return Response;
  }
  
  @RequestMapping(value = {"/MCAVerfy"}, method = {RequestMethod.POST})
  @ResponseBody
  public String MCAVerfy(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    Object time = session.getAttribute("LogSession");
    String s1 = "";
    if (time == null)
      return "redirect:"; 
    String param1 = request.getParameter("CINNO");
    String param2 = request.getParameter("PRCSID");
    String param3 = request.getParameter("PARAM3");
    String param4 = request.getParameter("PARAM4");
    String param5 = request.getParameter("PARAM5");
    String SPNAME = request.getParameter("SPNAME");
    MCA MCACLS = new MCA();
    s1 = MCA.CheckReqRS(param1, param2, param3, param4, param5, SPNAME);
    return s1;
  }
  
  @RequestMapping(value = {"MCAVerfyRPT"}, method = {RequestMethod.GET})
  @ResponseBody
  public void MCAVerfyRPT(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    boolean isMultipart = ServletFileUpload.isMultipartContent(request);
    String PARAM1 = request.getParameter("PRCSID");
    String PARAM2 = request.getParameter("CINNO");
    String CINURL = "";
    String APIKEY = "";
    String APIVRSN = "";
    String TOKN = "";
    String APITYP = "";
    String fileNAME = "";
    String format = "";
    String retval = "";
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(PARAM1, PARAM2, "", "reports", "", "LSW_SOVRALLHNDLMCA");
    CINURL = Data.get(0);
    APIKEY = Data.get(1);
    APIVRSN = Data.get(2);
    TOKN = Data.get(4);
    APITYP = Data.get(5);
    fileNAME = "MCA_" + PARAM2 + ".pdf";
    format = Data.get(2);
    URL url = new URL(CINURL);
    HttpURLConnection httpConn = (HttpURLConnection)url.openConnection();
    httpConn.setRequestProperty("x-api-key", APIKEY);
    httpConn.setRequestProperty("x-api-version", APIVRSN);
    httpConn.setRequestProperty("Content-Type", "application/json");
    httpConn.setRequestProperty("cache-control", "no-cache");
    int responseCode = httpConn.getResponseCode();
    if (responseCode == 200) {
      ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
      byte[] chunk = new byte[4096];
      InputStream stream = httpConn.getInputStream();
      try {
        int bytesRead;
        while ((bytesRead = stream.read(chunk)) > 0)
          outputStream.write(chunk, 0, bytesRead); 
        stream.close();
        byte[] DocContent = outputStream.toByteArray();
        outputStream.close();
        response.setContentLength(DocContent.length);
        response.setHeader("Content-Disposition", "attachment; filename=" + fileNAME);
        ServletOutputStream servletOutputStream = response.getOutputStream();
        servletOutputStream.write(DocContent);
        servletOutputStream.flush();
        servletOutputStream.close();
      } catch (IOException e) {
       
        stream.close();
        outputStream.close();
        e.printStackTrace();
      } 
    } 
  }
  
  @RequestMapping(value = {"Applcnt"}, method = {RequestMethod.GET})
  public String Applcnt(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "Applcnt";
  }
  
  @RequestMapping(value = {"SMEApplcnt"}, method = {RequestMethod.GET})
  public String SMEApplcnt(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEApplcnt";
  }
  
  @RequestMapping(value = {"MApplcnt"}, method = {RequestMethod.GET})
  public String MApplcnt(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SMOBGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "MApplcnt";
  }
  
  @RequestMapping(value = {"CoApplcnt"}, method = {RequestMethod.GET})
  public String CoApplcnt(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "CoApplcnt";
  }
  
  @RequestMapping(value = {"SMECoApplcnt"}, method = {RequestMethod.GET})
  public String SMECoApplcnt(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMECoApplcnt";
  }
  
  @RequestMapping(value = {"MCoApplcnt"}, method = {RequestMethod.GET})
  public String MCoApplcnt(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SMOBGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "MCoApplcnt";
  }
  
  @RequestMapping(value = {"Guantr"}, method = {RequestMethod.GET})
  public String Guantr(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "Guantr";
  }
  
  @RequestMapping(value = {"SMEGuantr"}, method = {RequestMethod.GET})
  public String SMEGuantr(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEGuantr";
  }
  
  @RequestMapping(value = {"MGuantr"}, method = {RequestMethod.GET})
  public String MGuantr(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SMOBGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "MGuantr";
  }
  
  @RequestMapping(value = {"LonDtls"}, method = {RequestMethod.GET})
  public String LonDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "LonDtls";
  }
  
  @RequestMapping(value = {"MLonDtls"}, method = {RequestMethod.GET})
  public String MLonDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SMOBGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "MLonDtls";
  }
  
  @RequestMapping(value = {"SMELonDtls"}, method = {RequestMethod.GET})
  public String SMELonDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMELonDtls";
  }
  
  @RequestMapping(value = {"ViewAgreement"}, method = {RequestMethod.GET})
  public String ViewAgreement(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "ViewAgreement";
  }
  
  @RequestMapping(value = {"SMEViewAgreement"}, method = {RequestMethod.GET})
  public String SMEViewAgreement(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEViewAgreement";
  }
  
  @RequestMapping(value = {"AffixeStamp"}, method = {RequestMethod.GET})
  public String AffixeStamp(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "AffixeStamp";
  }
  
  @RequestMapping(value = {"SMEAffixeStamp"}, method = {RequestMethod.GET})
  public String SMEAffixeStamp(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEAffixeStamp";
  }
  
  @RequestMapping(value = {"eSignAgreement"}, method = {RequestMethod.GET})
  public String eSignAgreement(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "eSignAgreement";
  }
  
  @RequestMapping(value = {"SMEeSignAgreement"}, method = {RequestMethod.GET})
  public String SMEeSignAgreement(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEeSignAgreement";
  }
  
  @RequestMapping(value = {"PropDtls"}, method = {RequestMethod.GET})
  public String PropDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "PropDtls";
  }
  
  @RequestMapping(value = {"MPropDtls"}, method = {RequestMethod.GET})
  public String MPropDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SMOBGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "MPropDtls";
  }
  
  @RequestMapping(value = {"SMEPropDtls"}, method = {RequestMethod.GET})
  public String SMEPropDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEPropDtls";
  }
  
  @RequestMapping(value = {"RefDtls"}, method = {RequestMethod.GET})
  public String RefDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "RefDtls";
  }
  
  @RequestMapping(value = {"MRefDtls"}, method = {RequestMethod.GET})
  public String MRefDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SMOBGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "MRefDtls";
  }
  
  @RequestMapping(value = {"SMERefDtls"}, method = {RequestMethod.GET})
  public String SMERefDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMERefDtls";
  }
  
  @RequestMapping(value = {"PFDtls"}, method = {RequestMethod.GET})
  public String PFDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "PFDtls";
  }
  
  @RequestMapping(value = {"MPFDtls"}, method = {RequestMethod.GET})
  public String MPFDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SMOBGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "MPFDtls";
  }
  
  @RequestMapping(value = {"SMEPFDtls"}, method = {RequestMethod.GET})
  public String SMEPFDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEPFDtls";
  }
  
  @RequestMapping(value = {"BnkDtls"}, method = {RequestMethod.GET})
  public String BnkDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "BnkDtls";
  }
  
  @RequestMapping(value = {"MBnkDtls"}, method = {RequestMethod.GET})
  public String MBnkDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SMOBGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "MBnkDtls";
  }
  
  @RequestMapping(value = {"SMEBnkDtls"}, method = {RequestMethod.GET})
  public String SMEBnkDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEBnkDtls";
  }
  
  @RequestMapping(value = {"DocDtls"}, method = {RequestMethod.GET})
  public String DocDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "DocDtls";
  }
  
  @RequestMapping(value = {"MDocDtls"}, method = {RequestMethod.GET})
  public String MDocDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SMOBGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "MDocDtls";
  }
  
  @RequestMapping(value = {"SMEDocDtls"}, method = {RequestMethod.GET})
  public String SMEDocDtls(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEDocDtls";
  }
  
  @RequestMapping(value = {"FileCheck"}, method = {RequestMethod.GET})
  public String FileCheck(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "FileCheck";
  }
  @RequestMapping(value = {"SMEFileCheck"}, method = {RequestMethod.GET})
  public String SMEFileCheck(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" + session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEFileCheck";
  }
  
  @RequestMapping(value = {"ViewRpts"}, method = {RequestMethod.GET})
  public String ViewRpts(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "ViewRpts";
  }
  @RequestMapping(value = {"SMEViewRpts"}, method = {RequestMethod.GET})
  public String SMEViewRpts(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEViewRpts";
  }
  
  @RequestMapping(value = {"TechIPropeInfo"}, method = {RequestMethod.GET})
  public String TechIPropeInfo(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "TechIPropeInfo";
  }
  @RequestMapping(value = {"SMETechIPropeInfo"}, method = {RequestMethod.GET})
  public String SMETechIPropeInfo(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMETechIPropeInfo";
  }
  
  @RequestMapping(value = {"TechIIPropeInfo"}, method = {RequestMethod.GET})
  public String TechIIPropeInfo(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "TechIIPropeInfo";
  }
  
  @RequestMapping(value = {"SMETechIIPropeInfo"}, method = {RequestMethod.GET})
  public String SMETechIIPropeInfo(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMETechIIPropeInfo";
  }
  
  @RequestMapping(value = {"LegalDetails"}, method = {RequestMethod.GET})
  public String LegalDetails(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "LegalDetails";
  }
  
  @RequestMapping(value = {"SMELegalDetails"}, method = {RequestMethod.GET})
  public String SMELegalDetails(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMELegalDetails";
  }
  
  
  @RequestMapping(value = {"FIResidenceInfo"}, method = {RequestMethod.GET})
  public String FIResidenceInfo(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "FIResidenceInfo";
  }
  
  @RequestMapping(value = {"SMEFIResidenceInfo"}, method = {RequestMethod.GET})
  public String SMEFIResidenceInfo(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEFIResidenceInfo";
  }
  
  @RequestMapping(value = {"FIEmployementInfo"}, method = {RequestMethod.GET})
  public String FIEmployementInfo(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "FIEmployementInfo";
  }
  
  @RequestMapping(value = {"SMEFIEmployementInfo"}, method = {RequestMethod.GET})
  public String SMEFIEmployementInfo(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEFIEmployementInfo";
  }
  
  @RequestMapping(value = {"LegalUpdateReport"}, method = {RequestMethod.GET})
  public String LegalUpdateReport(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "LegalUpdateReport";
  }
  
  @RequestMapping(value = {"SMELegalUpdateReport"}, method = {RequestMethod.GET})
  public String SMELegalUpdateReport(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMELegalUpdateReport";
  }
  
  @RequestMapping(value = {"ExstLon"}, method = {RequestMethod.GET})
  public String ExstLon(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "ExstLon";
  }
  
  @RequestMapping(value = {"SMEExstLon"}, method = {RequestMethod.GET})
  public String SMEExstLon(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEExstLon";
  }
  
  @RequestMapping(value = {"FincBnk"}, method = {RequestMethod.GET})
  public String FincBnk(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "FincBnk";
  }
  
  @RequestMapping(value = {"SMEFincBnk"}, method = {RequestMethod.GET})
  public String SMEFincBnk(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEFincBnk";
  }
  
  @RequestMapping(value = {"PropVal"}, method = {RequestMethod.GET})
  public String PropVal(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "PropVal";
  }
  
  @RequestMapping(value = {"SMEPropVal"}, method = {RequestMethod.GET})
  public String SMEPropVal(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEPropVal";
  }
  
  @RequestMapping(value = {"Fincs"}, method = {RequestMethod.GET})
  public String Fincs(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "Fincs";
  }
  
  @RequestMapping(value = {"SMEFincs"}, method = {RequestMethod.GET})
  public String SMEFincs(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEFincs";
  }
  
  @RequestMapping(value = {"FincRto"}, method = {RequestMethod.GET})
  public String FincRto(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "FincRto";
  }
  @RequestMapping(value = {"SMEFincRto"}, method = {RequestMethod.GET})
  public String SMEFincRto(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEFincRto";
  }
  
  @RequestMapping(value = { "Enquiry" }, method = { RequestMethod.GET })
  public String Enquiry(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "Enquiry";
  }
  
  @RequestMapping(value = { "SMEEnquiry" }, method = { RequestMethod.GET })
  public String SMEEnquiry(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "SMEEnquiry";
  }
  
  @RequestMapping(value = {"Waiver"}, method = {RequestMethod.GET})
  public String Waiver(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "Waiver";
  }
  
  @RequestMapping(value = {"SMEWaiver"}, method = {RequestMethod.GET})
  public String SMEWaiver(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEWaiver";
  }
  
  @RequestMapping(value = {"Empwr"}, method = {RequestMethod.GET})
  public String Empwr(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "Empwr";
  }
  @RequestMapping(value = {"SMEEmpwr"}, method = {RequestMethod.GET})
  public String SMEEmpwr(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEEmpwr";
  }
  
  @RequestMapping(value = {"PdDt"}, method = {RequestMethod.GET})
  public String PdDt(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "PdDt";
  }
  
  @RequestMapping(value = {"SMEPdDt"}, method = {RequestMethod.GET})
  public String SMEPdDt(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEPdDt";
  }
  
  @RequestMapping(value = {"ApprlNt"}, method = {RequestMethod.GET})
  public String ApprlNt(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "ApprlNt";
  }
  @RequestMapping(value = {"SMEApprlNt"}, method = {RequestMethod.GET})
  public String SMEApprlNt(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEApprlNt";
  }
  
  @RequestMapping(value = {"Chgr"}, method = {RequestMethod.GET})
  public String Chgr(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "Chgr";
  }
  
  @RequestMapping(value = {"SMEChgr"}, method = {RequestMethod.GET})
  public String SMEChgr(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEChgr";
  }
  
  @RequestMapping(value = {"ENach"}, method = {RequestMethod.GET})
  public String ENach(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "ENach";
  }
  
  @RequestMapping(value = {"SMEENach"}, method = {RequestMethod.GET})
  public String SMEENach(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEENach";
  }
  
  @RequestMapping(value = {"Appr"}, method = {RequestMethod.GET})
  public String Appr(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "Appr";
  }
  @RequestMapping(value = {"SMEAppr"}, method = {RequestMethod.GET})
  public String SMEAppr(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEAppr";
  }
  
  @RequestMapping(value = {"Disbrsmnt"}, method = {RequestMethod.GET})
  public String Disbrsmnt(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "Disbrsmnt";
  }
  
  @RequestMapping(value = {"SMEDisbrsmnt"}, method = {RequestMethod.GET})
  public String SMEDisbrsmnt(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEDisbrsmnt";
  }
  @RequestMapping(value = {"OpsAck"}, method = {RequestMethod.GET})
  public String OpsAck(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "OpsAck";
  }
  @RequestMapping(value = {"SMEOpsAck"}, method = {RequestMethod.GET})
  public String SMEOpsAck(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEOpsAck";
  }
  
  @RequestMapping(value = {"OTC"}, method = {RequestMethod.GET})
  public String OTC(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "OTC";
  }
  
  @RequestMapping(value = {"SMEOTC"}, method = {RequestMethod.GET})
  public String SMEOTC(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEOTC";
  }
  
  @RequestMapping(value = {"PDD"}, method = {RequestMethod.GET})
  public String PDD(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "PDD";
  }
  
  @RequestMapping(value = {"SMEPDD"}, method = {RequestMethod.GET})
  public String SMEPDD(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEPDD";
  }
  
  @RequestMapping(value = {"DisbMemo"}, method = {RequestMethod.GET})
  public String DisbMemo(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "DisbMemo";
  }
  
  @RequestMapping(value = {"SMEDisbMemo"}, method = {RequestMethod.GET})
  public String SMEDisbMemo(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEDisbMemo";
  }
  
  @RequestMapping(value = {"RePay"}, method = {RequestMethod.GET})
  public String RePay(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "RePay";
  }
  
  @RequestMapping(value = {"SMERePay"}, method = {RequestMethod.GET})
  public String SMERePay(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMERePay";
  }
  
  @RequestMapping(value = {"InsrncUpld"}, method = {RequestMethod.GET})
  public String InsrncUpld(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "InsrncUpld";
  }
  
  @RequestMapping(value = {"SMEInsrncUpld"}, method = {RequestMethod.GET})
  public String SMEInsrncUpld(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEInsrncUpld";
  }
  
  @RequestMapping(value = {"CrsSel"}, method = {RequestMethod.GET})
  public String CrsSel(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "CrsSel";
  }
  @RequestMapping(value = {"SMECrsSel"}, method = {RequestMethod.GET})
  public String SMECrsSel(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMECrsSel";
  }
  
  @RequestMapping(value = {"CrsSelProp"}, method = {RequestMethod.GET})
  public String CrsSelProp(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "CrsSelProp";
  }
  
  @RequestMapping(value = {"SMECrsSelProp"}, method = {RequestMethod.GET})
  public String SMECrsSelProp(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMECrsSelProp";
  }
  
  
  @RequestMapping(value = {"Dedupe"}, method = {RequestMethod.GET})
  public String Dedupe(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "Dedupe";
  }
  @RequestMapping(value = {"SMEDedupe"}, method = {RequestMethod.GET})
  public String SMEDedupe(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEDedupe";
  }
  
  @RequestMapping(value = {"Cibil"}, method = {RequestMethod.GET})
  public String Cibil(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "Cibil";
  }
  
  @RequestMapping(value = {"SMECibil"}, method = {RequestMethod.GET})
  public String SMECibil(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMECibil";
  }
  
  @RequestMapping(value = {"Repts"}, method = {RequestMethod.GET})
  public String Repts(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "Repts";
  }
  
  @RequestMapping(value = {"SMERepts"}, method = {RequestMethod.GET})
  public String SMERepts(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMERepts";
  }
  
  @RequestMapping(value = {"DefrMnt"}, method = {RequestMethod.GET})
  public String DefrMnt(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "DefrMnt";
  }
  @RequestMapping(value = {"SMEDefrMnt"}, method = {RequestMethod.GET})
  public String SMEDefrMnt(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEDefrMnt";
  }
  
  @RequestMapping(value = {"ManageLead"}, method = {RequestMethod.GET})
  public String ManageLead(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", "LEAD GENERATION");
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "ManageLead";
  }
  
  @RequestMapping(value = {"SMEManageLead"}, method = {RequestMethod.GET})
  public String SMEManageLead(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", "LEAD GENERATION");
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEManageLead";
  }
  
  @RequestMapping(value = {"MnagQuery"}, method = {RequestMethod.GET})
  public String MnagQuery(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTQ");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "MnagQuery";
  }
  
  @RequestMapping(value = {"SMEMnagQuery"}, method = {RequestMethod.GET})
  public String SMEMnagQuery(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTQ");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEMnagQuery";
  }
  
  @RequestMapping(value = {"MnagQuerySrch"}, method = {RequestMethod.GET})
  public String MnagQuerySrch(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(session.getAttribute("UsrSession").toString(), "", "", "", "", "LSW_SGETQUERYZONE");
    request.setAttribute("ZONE", Data.get(0));
    request.setAttribute("REGION", Data.get(1));
    request.setAttribute("AREA", Data.get(2));
    request.setAttribute("BRANCH", Data.get(3));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "MnagQuerySrch";
  }
  
  @RequestMapping(value = {"SMEMnagQuerySrch"}, method = {RequestMethod.GET})
  public String SMEMnagQuerySrch(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(session.getAttribute("UsrSession").toString(), "", "", "", "", "LSW_SGETQUERYZONE");
    request.setAttribute("ZONE", Data.get(0));
    request.setAttribute("REGION", Data.get(1));
    request.setAttribute("AREA", Data.get(2));
    request.setAttribute("BRANCH", Data.get(3));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "SMEMnagQuerySrch";
  }
  
  @RequestMapping(value = {"WFACTVINIT"}, method = {RequestMethod.POST})
  @ResponseBody
  public String WFACTVINIT(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String Response = "";
    String ProcessID = "";
    String ActivityID = "";
    String http = request.getHeader("Origin");
    String Referer = request.getHeader("Referer");
    Response = WFCall.WFActvInit(request.getParameter("ACTVID"), request.getParameter("WDATA"), session.getAttribute("UsrSession").toString(), session.getAttribute("CPMSession").toString(), "", request.getParameter("SNAME"));
    String[] Reponse = Response.split("~");
    ProcessID = Reponse[0];
    ActivityID = Reponse[1];
    if (!ProcessID.equals("completed")) {
      Response = String.valueOf(String.valueOf(ProcessID)) + "~" + ActivityID + "~";
    } else {
      Response = String.valueOf(String.valueOf(ProcessID)) + "~" + ActivityID + "~";
    } 
    return Response;
  }
  
  @RequestMapping(value = {"WFINIT"}, method = {RequestMethod.POST})
  @ResponseBody
  public String WFINIT(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) throws SQLException {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String Response = "";
    String ProcessID = "";
    String ActivityID = "";
    
    Connection con = DBConnection.getConnection(null);
	PreparedStatement proc_stmt1 = null;
	ResultSet rs1 = null;
    String http = request.getHeader("Origin");
    String Referer = request.getHeader("Referer");
    Response = WFCall.WFInit(session.getAttribute("UsrSession").toString(), session.getAttribute("CPMSession").toString(), http, Referer, "", "LSW_SWFINITCALL");
    String[] Reponse = Response.split("~");
    ProcessID = Reponse[0];
    ActivityID = Reponse[1];
    if (!ProcessID.equals("No Data")) {
    	
    //  ArrayList<String> Data = new ArrayList<String>();
    //  Data = GetDBData.Call(ProcessID, ActivityID, request.getParameter("XML"), "", "", "LSW_SLOANINFOSUBMIT");
      
      proc_stmt1 = con.prepareStatement("{ call LSW_SLOANINFOSUBMIT (?,?,?,?,?) }");

      proc_stmt1.setString(1, ProcessID);
      proc_stmt1.setString(2, ActivityID);
      proc_stmt1.setString(3, request.getParameter("XML"));
      proc_stmt1.setString(4, "");
      proc_stmt1.setString(5, "");
     
      rs1 = proc_stmt1.executeQuery();
      
      Connections.Call(proc_stmt1,rs1,con,"Commit");
      
      ArrayList<String> StrData = new ArrayList<String>();
      StrData = GetDBData.Call(ProcessID, "", "", "", "", "LSW_APPSTATUSPRCSWS");
      
      Response = "Workflow Initiated~" + ProcessID + "~" + ActivityID;
    } else {
      Response = "Workflow Initiation Failed~No Data~No Data";
    } 
    return Response;
  }
  
  @RequestMapping(value = {"DIRINS"}, method = {RequestMethod.POST})
  @ResponseBody
  public String DIRINS(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String Response = "";
    String SP = request.getParameter("SP");
    String ID = request.getParameter("ID");
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(ID, request.getParameter("XML"), "", "", "", SP);
    Response = "Success";
    return Response;
  }
  
  @RequestMapping(value = {"WFCOMPLETE"}, method = {RequestMethod.POST})
  @ResponseBody
  public String WFCOMPLETE(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String Response = "";
    String ProcessID = "";
    String ActivityID = "";
    String http = request.getHeader("Origin");
    String Referer = request.getHeader("Referer");
    Response = WFCall.WFComplete(request.getParameter("ACTVID"), request.getParameter("WDATA"), session.getAttribute("UsrSession").toString(), session.getAttribute("CPMSession").toString(), "", request.getParameter("SNAME"));
    String[] Reponse = Response.split("~");
    ProcessID = Reponse[0];
    ActivityID = Reponse[1];
    if (!ProcessID.equals("completed")) {
      Response = String.valueOf(String.valueOf(ProcessID)) + "~" + ActivityID + "~";
    } else {
      Response = String.valueOf(String.valueOf(ProcessID)) + "~" + ActivityID + "~";
    } 
    return Response;
  }
  
  @RequestMapping(value = {"WFVNDACTVINIT"}, method = {RequestMethod.POST})
  @ResponseBody
  public String WFVNDACTVINIT(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String Response = "";
    String ProcessID = "";
    String ActivityID = "";
    String http = request.getHeader("Origin");
    String Referer = request.getHeader("Referer");
    Response = WFCall.WFVndActvInit(request.getParameter("ACTVID"), request.getParameter("WDATA"), session.getAttribute("UsrSession").toString(), session.getAttribute("CPMSession").toString(), "", request.getParameter("SNAME"));
    String[] Reponse = Response.split("~");
    ProcessID = Reponse[0];
    ActivityID = Reponse[1];
    if (!ProcessID.equals("completed")) {
      Response = String.valueOf(String.valueOf(ProcessID)) + "~" + ActivityID + "~";
    } else {
      Response = String.valueOf(String.valueOf(ProcessID)) + "~" + ActivityID + "~";
    } 
    return Response;
  }
  
  @RequestMapping(value = {"WFReevaluate"}, method = {RequestMethod.POST})
  @ResponseBody
  public String WFReevaluate(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String Response = "";
    String ProcessID = "";
    String ActivityID = "";
    String http = request.getHeader("Origin");
    String Referer = request.getHeader("Referer");
    Response = WFCall.WFReevaluate(request.getParameter("ACTVID"), request.getParameter("WDATA"), session.getAttribute("UsrSession").toString(), session.getAttribute("CPMSession").toString(), "", request.getParameter("SNAME"));
    String[] Reponse = Response.split("~");
    ProcessID = Reponse[0];
    ActivityID = Reponse[1];
    if (!ProcessID.equals("completed")) {
      Response = String.valueOf(String.valueOf(ProcessID)) + "~" + ActivityID + "~";
    } else {
      Response = String.valueOf(String.valueOf(ProcessID)) + "~" + ActivityID + "~";
    } 
    return Response;
  }
  
  @RequestMapping(value = {"RegisterInvoice"}, method = {RequestMethod.GET})
  public String RegisterInvoice(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "RegisterInvoice";
  }
  
  @RequestMapping(value = {"POIssuance"}, method = {RequestMethod.GET})
  public String POIssuance(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "POIssuance";
  }
  
  @RequestMapping(value = {"ClickToPay"}, method = {RequestMethod.GET})
  public String ClickToPay(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "ClickToPay";
  }
  
  @RequestMapping(value = {"RepaymentRD"}, method = {RequestMethod.GET})
  public String RepaymentRD(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "RepaymentRD";
  }
  
  @RequestMapping(value = {"InvoiceAcceptance"}, method = {RequestMethod.GET})
  public String InvoiceAcceptance(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "InvoiceAcceptance";
  }
  
  @RequestMapping(value = {"POAcceptance"}, method = {RequestMethod.GET})
  public String POAcceptance(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "POAcceptance";
  }
  
  @RequestMapping(value = {"FinanceRequest"}, method = {RequestMethod.GET})
  public String FinanceRequest(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "FinanceRequest";
  }
  
  @RequestMapping(value = {"/LeadINS"}, method = {RequestMethod.POST})
  @ResponseBody
  public String LeadINS(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String param1 = request.getParameter("LEADCR");
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(param1, "INS", "", "", "", "LSW_SLEADAPIINS");
    String retval = Data.get(0);
    return retval;
  }
  
  @RequestMapping(value = {"/LeadSTATUS"}, method = {RequestMethod.POST})
  @ResponseBody
  public String LeadSTATUS(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String param1 = request.getParameter("LEADSEARCH");
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(param1, "STATUS", "", "", "", "LSW_SLEADAPIINS");
    String retval = Data.get(0);
    return retval;
  }
  
  @RequestMapping(value = {"LEADSTAT"}, method = {RequestMethod.POST})
  @ResponseBody
  public String LEADSTAT(HttpServletRequest request, HttpServletResponse response) throws Exception, ClassNotFoundException {
    String TIMESTAMP = request.getParameter("TIMESTAMP");
    String TOKENID = request.getParameter("TOKENID");
    String FNname = "LSW_SLEADSTAPI";
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(TIMESTAMP, TOKENID, "", "", "", FNname);
    String Result = Data.get(0);
    return Result;
  }
  
  @RequestMapping(value = {"SOURCE"}, method = {RequestMethod.POST})
  @ResponseBody
  public String SOURCE(HttpServletRequest request, HttpServletResponse response) throws Exception, ClassNotFoundException {
    String TYPE = request.getParameter("TYPE");
    String BRID = request.getParameter("BRID");
    String TOKENID = request.getParameter("TOKENID");
    String FNname = "LSW_SSOURCEAPI";
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(TYPE, BRID, TOKENID, "", "", FNname);
    String Result = Data.get(0);
    return Result;
  }
  
  @RequestMapping(value = {"/EmailVerfy"}, method = {RequestMethod.POST})
  @ResponseBody
  public String EmailVerfy(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String param1 = request.getParameter("URL");
    String param2 = request.getParameter("PRCSID");
    String param3 = request.getParameter("CUSID");
    String param4 = request.getParameter("MAILID");
    String param5 = request.getParameter("PARAM5");
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(param1, param2, param3, param4, param5, "LSW_SFRMMAILOTP");
    String RPTURL = Data.get(0);
    String CC = Data.get(1);
    String BCC = Data.get(2);
    String subject = Data.get(3);
    String fromId = Data.get(4);
    String password = Data.get(5);
    String host = Data.get(6);
    String port = Data.get(7);
    String ERR_FLG = Data.get(8);
    String ERR_MSG = Data.get(9);
    String TOMAIL = Data.get(10);
    String retval = "";
    if (ERR_FLG.toString().equals("N")) {
      MailSendWthAttchRPTBdy MS = new MailSendWthAttchRPTBdy();
      String s1 = MS.Send(fromId, password, TOMAIL, CC, BCC, subject, RPTURL, String.valueOf(String.valueOf(host)) + "|" + port, "", "");
      return s1;
    } 
    retval = ERR_MSG;
    return retval;
  }
  
  @RequestMapping(value = {"MailVerfy"}, method = {RequestMethod.GET})
  public String MailVerfy(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String url = String.valueOf(String.valueOf(request.getScheme())) + "://" + request.getServerName() + ":" + request.getServerPort() + request.getRequestURI() + "?" + request.getQueryString();
    String Param1 = "";
    String Param2 = "";
    String Param3 = "";
    String Param4 = "";
    String Param5 = "";
    try {
      Pattern p = Pattern.compile("VERIFICATION=([^&]+)");
      Matcher m = p.matcher(url);
      while (m.find())
        Param1 = m.group(); 
      Param1 = Param1.replace("VERIFICATION=", "");
      p = Pattern.compile("ID1=([^&]+)");
      m = p.matcher(url);
      while (m.find())
        Param2 = m.group(); 
      Param2 = Param2.replace("ID1=", "");
      p = Pattern.compile("ID2=([^&]+)");
      m = p.matcher(url);
      while (m.find())
        Param3 = m.group(); 
      Param3 = Param3.replace("ID2=", "");
      p = Pattern.compile("ID3=([^&]+)");
      m = p.matcher(url);
      while (m.find())
        Param4 = m.group(); 
      Param4 = Param4.replace("ID3=", "");
      ArrayList<String> Data = new ArrayList<String>();
      Data = GetDBData.Call(Param1, Param2, Param3, Param4, "", "LSW_SVERFYMAILOTP");
      String RPTURL = Data.get(0);
      request.setAttribute("RPTURL", Data.get(0));
    } catch (PatternSyntaxException patternSyntaxException) {}
    return "Interface/EmailVerify";
  }
  
  @RequestMapping(value = {"FinanceRequestView"}, method = {RequestMethod.GET})
  public String FinanceRequestView(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "FinanceRequestView";
  }
  
  @RequestMapping(value = {"POAcceptanceA"}, method = {RequestMethod.GET})
  public String POAcceptanceA(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "POAcceptanceA";
  }
  
  @RequestMapping(value = {"POAcceptanceV"}, method = {RequestMethod.GET})
  public String POAcceptanceV(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "POAcceptanceV";
  }
  
  @RequestMapping(value = {"InvoiceAcceptanceA"}, method = {RequestMethod.GET})
  public String InvoiceAcceptanceA(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "InvoiceAcceptanceA";
  }
  
  @RequestMapping(value = {"InvoiceAcceptanceV"}, method = {RequestMethod.GET})
  public String InvoiceAcceptanceV(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "InvoiceAcceptanceV";
  }
  
  @RequestMapping(value = {"Inbox"}, method = {RequestMethod.GET})
  public String Inbox(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "Inbox";
  }
  
  @RequestMapping(value = {"View"}, method = {RequestMethod.GET})
  public String View(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "View";
  }
  
  @RequestMapping(value = {"WfConfig"}, method = {RequestMethod.GET})
  public String WfConfig(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "WfConfig";
  }
  
  @RequestMapping(value = {"UsrConfig"}, method = {RequestMethod.GET})
  public String UsrConfig(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "UsrConfig";
  }
  
  @RequestMapping(value = {"Profile"}, method = {RequestMethod.GET})
  public String Profile(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "Profile";
  }
  
  @RequestMapping(value = {"CompConfig"}, method = {RequestMethod.GET})
  public String CompConfig(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "CompConfig";
  }
  
  @RequestMapping(value = {"TransactionQuery"}, method = {RequestMethod.GET})
  public String TransactionQuery(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "TransactionQuery";
  }
  
  @RequestMapping(value = {"Reports"}, method = {RequestMethod.GET})
  public String Reports(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    return "Reports";
  }
  
  @RequestMapping(value = { "GECLCklst" }, method = { RequestMethod.GET })
  public String GECLCklst(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "GECLCklst";
  }
  
  @RequestMapping(value = { "SMEGECLCklst" }, method = { RequestMethod.GET })
  public String SMEGECLCklst(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "SMEGECLCklst";
  }
  
  @RequestMapping(value = {"CONFIG"}, method = {RequestMethod.GET})
  public String CONFIGURATION(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '|' + request.getParameter("PrMs1") + '|' + request.getParameter("PrMs2") + '|' + request.getParameter("PrMs3") + '|' + request.getParameter("PrMs4") + '|' + request.getParameter("PrMs5") + '|' + request.getParameter("PrMs6") + '|' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "CONFIGURATION";
  }
  
  @RequestMapping(value = {"IFSCMaster"}, method = {RequestMethod.GET})
  public String IFSCMaster(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '|' + request.getParameter("PrMs1") + '|' + request.getParameter("PrMs2") + '|' + request.getParameter("PrMs3") + '|' + request.getParameter("PrMs4") + '|' + request.getParameter("PrMs5") + '|' + request.getParameter("PrMs6") + '|' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "IFSCMaster";
  }
  
  @RequestMapping(value = {"PINMaster"}, method = {RequestMethod.GET})
  public String PINMaster(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    request.setAttribute("User", session.getAttribute("UsrSession"));
    request.setAttribute("PrcsID", request.getParameter("PrcsID"));
    request.setAttribute("ActvID", request.getParameter("ActvID"));
    request.setAttribute("Action", request.getParameter("Action"));
    request.setAttribute("WFURL", request.getParameter("WFURL"));
    request.setAttribute("FormAction", request.getParameter("FormAction"));
    request.setAttribute("FormName", request.getParameter("FormName"));
    request.setAttribute("FormColor", request.getParameter("FormColor"));
    request.setAttribute("PrMs1", request.getParameter("PrMs1"));
    request.setAttribute("PrMs2", request.getParameter("PrMs2"));
    request.setAttribute("PrMs3", request.getParameter("PrMs3"));
    request.setAttribute("PrMs4", request.getParameter("PrMs4"));
    request.setAttribute("PrMs5", request.getParameter("PrMs5"));
    request.setAttribute("PrMs6", request.getParameter("PrMs6"));
    request.setAttribute("PrMs7", request.getParameter("PrMs7"));
    request.setAttribute("PrMs8", request.getParameter("PrMs8"));
    request.setAttribute("PrMs9", request.getParameter("PrMs9"));
    request.setAttribute("PrMs10", request.getParameter("PrMs10"));
    request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
    request.setAttribute("MAINTABDATA", Data.get(0));
    request.setAttribute("FORMHEADING", Data.get(1));
    request.setAttribute("CONTROLDATA", Data.get(2));
    request.setAttribute("PAGETABDATA", Data.get(3));
    request.setAttribute("AppInfo", Data.get(4));
    request.setAttribute("SUBPAGETABDATA", Data.get(5));
    request.setAttribute("HEADERDATA", Data.get(6));
    request.setAttribute("DMY1", Data.get(7));
    request.setAttribute("DMY2", Data.get(8));
    request.setAttribute("DMY3", Data.get(9));
    request.setAttribute("DMY4", Data.get(10));
    request.setAttribute("DMY5", Data.get(11));
    request.setAttribute("DMY6", Data.get(12));
    request.setAttribute("DMY7", Data.get(13));
    Data = GetDBData.Call(String.valueOf(String.valueOf(request.getParameter("ActvID"))) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(String.valueOf(request.getParameter("PrMs8"))) + '|' + request.getParameter("PrMs1") + '|' + request.getParameter("PrMs2") + '|' + request.getParameter("PrMs3") + '|' + request.getParameter("PrMs4") + '|' + request.getParameter("PrMs5") + '|' + request.getParameter("PrMs6") + '|' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
    request.setAttribute("DMY8", Data.get(0));
    request.setAttribute("DMY9", Data.get(1));
    request.setAttribute("DMY10", Data.get(2));
    request.setAttribute("DMY11", Data.get(3));
    request.setAttribute("DMY12", Data.get(4));
    request.setAttribute("DMY13", Data.get(5));
    request.setAttribute("DMY14", Data.get(6));
    request.setAttribute("DMY15", Data.get(7));
    request.setAttribute("DMY16", Data.get(8));
    request.setAttribute("DMY17", Data.get(9));
    request.setAttribute("DMY18", Data.get(10));
    request.setAttribute("DMY19", Data.get(11));
    request.setAttribute("DMY20", Data.get(12));
    request.setAttribute("DMY21", Data.get(13));
    return "PINMaster";
  }
  
  @RequestMapping(value = { "DirDepartment" }, method = { RequestMethod.GET })
  public String DirDepartment(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '|' + request.getParameter("PrMs1") + '|' + request.getParameter("PrMs2") + '|' + request.getParameter("PrMs3") + '|' + request.getParameter("PrMs4") + '|' + request.getParameter("PrMs5") + '|' + request.getParameter("PrMs6") + '|' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "DirDepartment";
  }
  
  @RequestMapping(value = { "SMEDirDepartment" }, method = { RequestMethod.GET })
  public String SMEDirDepartment(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '|' + request.getParameter("PrMs1") + '|' + request.getParameter("PrMs2") + '|' + request.getParameter("PrMs3") + '|' + request.getParameter("PrMs4") + '|' + request.getParameter("PrMs5") + '|' + request.getParameter("PrMs6") + '|' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "SMEDirDepartment";
  }
  
  @RequestMapping(value = { "DirDepartmentMST" }, method = { RequestMethod.GET })
  public String DirDepartmentMST(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '|' + request.getParameter("PrMs1") + '|' + request.getParameter("PrMs2") + '|' + request.getParameter("PrMs3") + '|' + request.getParameter("PrMs4") + '|' + request.getParameter("PrMs5") + '|' + request.getParameter("PrMs6") + '|' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "DirDepartmentMST";
  }
  @RequestMapping(value = { "SMEDirDepartmentMST" }, method = { RequestMethod.GET })
  public String SMEDirDepartmentMST(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTCONFIG");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '|' + request.getParameter("PrMs1") + '|' + request.getParameter("PrMs2") + '|' + request.getParameter("PrMs3") + '|' + request.getParameter("PrMs4") + '|' + request.getParameter("PrMs5") + '|' + request.getParameter("PrMs6") + '|' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "SMEDirDepartmentMST";
  }
  
  //Document Upload Date:20/07/2020 Start
  
  @RequestMapping(value = { "DocUpload" }, method = { RequestMethod.GET })
  public String DocUpload(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "DocUpload";
  }
  @RequestMapping(value = { "SMEDocUpload" }, method = { RequestMethod.GET })
  public String SMEDocUpload(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
      HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      request.setAttribute("User", session.getAttribute("UsrSession"));
      request.setAttribute("PrcsID", (Object)request.getParameter("PrcsID"));
      request.setAttribute("ActvID", (Object)request.getParameter("ActvID"));
      request.setAttribute("Action", (Object)request.getParameter("Action"));
      request.setAttribute("WFURL", (Object)request.getParameter("WFURL"));
      request.setAttribute("FormAction", (Object)request.getParameter("FormAction"));
      request.setAttribute("FormName", (Object)request.getParameter("FormName"));
      request.setAttribute("FormColor", (Object)request.getParameter("FormColor"));
      request.setAttribute("PrMs1", (Object)request.getParameter("PrMs1"));
      request.setAttribute("PrMs2", (Object)request.getParameter("PrMs2"));
      request.setAttribute("PrMs3", (Object)request.getParameter("PrMs3"));
      request.setAttribute("PrMs4", (Object)request.getParameter("PrMs4"));
      request.setAttribute("PrMs5", (Object)request.getParameter("PrMs5"));
      request.setAttribute("PrMs6", (Object)request.getParameter("PrMs6"));
      request.setAttribute("PrMs7", (Object)request.getParameter("PrMs7"));
      request.setAttribute("PrMs8", (Object)request.getParameter("PrMs8"));
      request.setAttribute("PrMs9", (Object)request.getParameter("PrMs9"));
      request.setAttribute("PrMs10", (Object)request.getParameter("PrMs10"));
      request.setAttribute("CpmCd", session.getAttribute("CPMSession"));
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession")+ "|" +session.getAttribute("LoginLoc"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONT");
      request.setAttribute("MAINTABDATA", (Object)Data.get(0));
      request.setAttribute("FORMHEADING", (Object)Data.get(1));
      request.setAttribute("CONTROLDATA", (Object)Data.get(2));
      request.setAttribute("PAGETABDATA", (Object)Data.get(3));
      request.setAttribute("AppInfo", (Object)Data.get(4));
      request.setAttribute("SUBPAGETABDATA", (Object)Data.get(5));
      request.setAttribute("HEADERDATA", (Object)Data.get(6));
      request.setAttribute("DMY1", (Object)Data.get(7));
      request.setAttribute("DMY2", (Object)Data.get(8));
      request.setAttribute("DMY3", (Object)Data.get(9));
      request.setAttribute("DMY4", (Object)Data.get(10));
      request.setAttribute("DMY5", (Object)Data.get(11));
      request.setAttribute("DMY6", (Object)Data.get(12));
      request.setAttribute("DMY7", (Object)Data.get(13));
      Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), String.valueOf(request.getParameter("PrMs8")) + '~' + request.getParameter("PrMs1") + '~' + request.getParameter("PrMs2") + '~' + request.getParameter("PrMs3") + '~' + request.getParameter("PrMs4") + '~' + request.getParameter("PrMs5") + '~' + request.getParameter("PrMs6") + '~' + request.getParameter("PrMs7"), "LSW_SGETSIDEMENUBAR");
      request.setAttribute("DMY8", (Object)Data.get(0));
      request.setAttribute("DMY9", (Object)Data.get(1));
      request.setAttribute("DMY10", (Object)Data.get(2));
      request.setAttribute("DMY11", (Object)Data.get(3));
      request.setAttribute("DMY12", (Object)Data.get(4));
      request.setAttribute("DMY13", (Object)Data.get(5));
      request.setAttribute("DMY14", (Object)Data.get(6));
      request.setAttribute("DMY15", (Object)Data.get(7));
      request.setAttribute("DMY16", (Object)Data.get(8));
      request.setAttribute("DMY17", (Object)Data.get(9));
      request.setAttribute("DMY18", (Object)Data.get(10));
      request.setAttribute("DMY19", (Object)Data.get(11));
      request.setAttribute("DMY20", (Object)Data.get(12));
      request.setAttribute("DMY21", (Object)Data.get(13));
      return "SMEDocUpload";
  }
  
//Document Upload Date:20/07/2020 End
  
  @RequestMapping(value = {"BatchUpdate"}, method = {RequestMethod.POST})
  @ResponseBody
  public String BatchUpdate(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    try {
      UI_GetData getdata = new UI_GetData();
      String param1 = request.getParameter("param1");
      String param2 = request.getParameter("param2");
      String param3 = request.getParameter("param3");
      String param4 = request.getParameter("param4");
      String param5 = request.getParameter("param5");
      String spname = request.getParameter("spname");
      String DBSrc = request.getParameter("DBSrc");
      String Token = request.getParameter("Token");
      getdata.param1(param1);
      getdata.param2(param2);
      getdata.param3(param3);
      getdata.param4(param4);
      getdata.param5(param5);
      getdata.spname(spname);
      getdata.DBSrc(DBSrc);
      Object time = session.getAttribute("LogSession");
      System.out.print("BatchUpdateCall");
      OP = getdata.UI_GetData1();
    } catch (Exception e) {
      System.out.print(e);
    } 
    return OP;
  }
  
  @RequestMapping(value = {"Paymentgateway"}, method = {RequestMethod.GET})
  public String Paymentgateway(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    String UniqueID = request.getParameter("UniqueID");
    String Type = request.getParameter("Type");
    String Prvnt = request.getParameter("Prvnt");
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    OP = PaymentGW.PaymentCall(UniqueID, Type, Prvnt);
    if (OP.equals("Invalid Request"))
      throw new ServletException("Invalid Request..."); 
    return "redirect:" + OP;
  }
  
 /* @RequestMapping(value = {"ANALYTICS"}, method = {RequestMethod.POST})
  @ResponseBody
  public String ANALYTICS(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    String status = "";
    String Msg = "";
    String ReceiptNo = "";
    String FnlResp = "";
    String param1 = request.getParameter("PRCSID");
    String param2 = request.getParameter("PFNO");
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    OP = ANALYTICS.AnalyticsPush(param1, param2, "", "", "", "");
    String[] Reponse = OP.split("~");
    status = Reponse[0];
    Msg = Reponse[1];
    ReceiptNo = Reponse[2];
    FnlResp = Reponse[3];
    if (OP.equals("Invalid Request"))
      throw new ServletException("Invalid Request..."); 
    return String.valueOf(String.valueOf(status)) + "|" + Msg + "|" + ReceiptNo + "|" + FnlResp;
  }*/
  
  @RequestMapping(value = { "ANALYTICS" }, method = { RequestMethod.POST })
  @ResponseBody
  public String ANALYTICS(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
      String OP = "";
      String status = "";
      String Msg = "";
      String ReceiptNo = "";
      String FnlResp = "";
      final String param1 = request.getParameter("PRCSID");
      final String param2 = request.getParameter("PFNO");
      final String param3 = request.getParameter("ECN");
      final Object time = session.getAttribute("LogSession");
      if (time == null) {
          return "redirect:";
      }
      OP = ANALYTICS.AnalyticsPush(param1, param2, param3, "", "", "");
      final String[] Reponse = OP.split("~");
      status = Reponse[0];
      Msg = Reponse[1];
      ReceiptNo = Reponse[2];
      FnlResp = Reponse[3];
      if (OP.equals("Invalid Request")) {
          throw new ServletException("Invalid Request...");
      }
      return String.valueOf(status) + "|" + Msg + "|" + ReceiptNo + "|" + FnlResp;
  }
  
  @RequestMapping(value = {"PaymentgatewayRes"}, method = {RequestMethod.POST})
  public String PaymentgatewayRes(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    String PGResponse = request.getParameter("msg");
    String Prvnt = request.getParameter("Prvnt");
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    OP = PaymentGW.PaymentCallRes(PGResponse, Prvnt);
    if (OP.equals("Invalid Response"))
      throw new ServletException("Invalid Response..."); 
    return "redirect:" + OP;
  }
  
  @RequestMapping(value = {"DisbPostingCall"}, method = {RequestMethod.POST})
  @ResponseBody
  public String DisbPostingCall(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    try {
      Properties props = new Properties();
      FileInputStream fis = null;
      FileInputStream fis2 = null;
      Connection con = null;
      String Profile = "";
      try {
        Properties prop = new Properties();
        URL songPath = DBConnection.class.getResource("");
        String[] pathArr = songPath.toString().split("file:/|/TPLSW");
        String Path = pathArr[1];
        fis = new FileInputStream(String.valueOf(String.valueOf(Path)) + "/TPLSW/WEB-INF/Config.properties");
        if (fis == null)
          throw new FileNotFoundException("property file '" + fis + "' not found in the classpath"); 
        prop.load(fis);
        Profile = prop.getProperty("DisbPostingURL");
        fis.close();
      } catch (Exception e) {
        e.printStackTrace();
      } 
      try {
        String URLBatch = Profile;
        String param1 = request.getParameter("param1");
        String param2 = request.getParameter("param2");
        String param3 = request.getParameter("param3");
        String param4 = request.getParameter("param4");
        String param5 = request.getParameter("param5");
        String spname = request.getParameter("spname");
        String spname2 = request.getParameter("spname2");
        String spname3 = request.getParameter("spname3");
        String POST_PARAMS = "param1=" + param1 + "&param2=" + param2 + "&param3=" + param3 + "&param4=" + param4 + "&param5=" + param5 + "&spname=" + spname + "&spname2=" + spname2 + "&spname3=" + spname3;
        URL obj = new URL(URLBatch);
        HttpURLConnection con2 = (HttpURLConnection)obj.openConnection();
        con2.setRequestMethod("POST");
        con2.setDoOutput(true);
        OutputStream os = con2.getOutputStream();
        os.write(POST_PARAMS.getBytes());
        os.flush();
        os.close();
        int responseCode = con2.getResponseCode();
        System.out.println("POST Response Code :: " + responseCode);
        if (responseCode == 200) {
          BufferedReader in = new BufferedReader(new InputStreamReader(con2.getInputStream()));
          StringBuffer response2 = new StringBuffer();
          String inputLine;
          while ((inputLine = in.readLine()) != null)
            response2.append(inputLine); 
          in.close();
          OP = response2.toString();
          System.out.println(response2.toString());
        } else {
          System.out.println("POST request not worked");
        } 
      } catch (IOException e2) {
        e2.printStackTrace();
      } 
      System.out.print("BatchPostingCall");
    } catch (Exception e3) {
      System.out.print(e3);
    } 
    return OP;
  }
  
  @RequestMapping(value = {"CorpCodeUpd"}, method = {RequestMethod.GET})
  @ResponseBody
  public String CorpCodeUpd(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    try {
      UI_GetData getdata = new UI_GetData();
      String param1 = request.getParameter("param1");
      String param2 = request.getParameter("param2");
      String param3 = request.getParameter("param3");
      String param4 = request.getParameter("param4");
      String param5 = request.getParameter("param5");
      String spname = request.getParameter("spname");
      String DBSrc = request.getParameter("DBSrc");
      String Token = request.getParameter("Token");
      getdata.param1(param1);
      getdata.param2(param2);
      getdata.param3(param3);
      getdata.param4(param4);
      getdata.param5(param5);
      getdata.spname(spname);
      getdata.DBSrc(DBSrc);
      Object time = session.getAttribute("LogSession");
      System.out.print("CorpCodeUpd");
      return getdata.UI_GetData1();
    } catch (Exception e) {
      System.out.print(e);
      return null;
    } 
  }
  
  @RequestMapping(value = {"/UI_GetMainTxtData"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UI_GetMainTxtData(HttpServletRequest request, HttpServletResponse response) throws Exception {
    UI_GetMainTxtData getdata = new UI_GetMainTxtData();
    String param1 = request.getParameter("param1");
    String param2 = request.getParameter("param2");
    String param3 = request.getParameter("param3");
    String param4 = request.getParameter("param4");
    String param5 = request.getParameter("param5");
    String spname = request.getParameter("spname");
    String Token = request.getParameter("Token");
    String DBSrc = request.getParameter("DBSrc");
    getdata.param1(param1);
    getdata.param2(param2);
    getdata.param3(param3);
    getdata.param4(param4);
    getdata.param5(param5);
    getdata.spname(spname);
    getdata.DBSrc(DBSrc);
    return getdata.UI_GetMainTxtData();
  }
  
  @RequestMapping(value = {"/GetNextNavAction"}, method = {RequestMethod.GET})
  public String GetNextNavAction(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    UI_GetPageURL getdata = new UI_GetPageURL();
    String MenuID = request.getParameter("MnuID");
    String PrcsID = request.getParameter("PrcsID");
    String ActvID = request.getParameter("ActvID");
    String FormAction = request.getParameter("FormAction");
    String FormName = request.getParameter("FormName");
    String FormColor = request.getParameter("FormColor");
    String PrMs1 = request.getParameter("PrMs1");
    String PrMs2 = request.getParameter("PrMs2");
    String PrMs3 = request.getParameter("PrMs3");
    String PrMs4 = request.getParameter("PrMs4");
    String PrMs5 = request.getParameter("PrMs5");
    String PrMs6 = request.getParameter("PrMs6");
    String PrMs7 = request.getParameter("PrMs7");
    String PrMs8 = request.getParameter("PrMs8");
    String PrMs9 = request.getParameter("PrMs9");
    String PrMs10 = request.getParameter("PrMs10");
    String DBSrc = request.getParameter("DBSrc");
    String Action = request.getParameter("Action");
    String spname = "SAM_SGetMenuPageURL";
    getdata.mnuid(MenuID);
    getdata.action("");
    getdata.DBSrc(DBSrc);
    getdata.spname("SAM_SGetMenuPageURL");
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String URLXML = getdata.UI_GetPageURL1();
    String PageURL = "";
    String WFURL = "";
    String Param = "";
    Document doc = CommonFns.convertStringToXMLDocument(URLXML);
    NodeList nodes = doc.getElementsByTagName("a");
    for (int i = 0; i < nodes.getLength(); i++) {
      Element element = (Element)nodes.item(i);
      NodeList name = element.getElementsByTagName("WFURL");
      Element line = (Element)name.item(0);
      WFURL = CommonFns.getCharacterDataFromElement(line);
      NodeList name2 = element.getElementsByTagName("PageURL");
      Element line2 = (Element)name2.item(0);
      PageURL = CommonFns.getCharacterDataFromElement(line2);
    } 
    if (!WFURL.equals("")) {
      Param = "?Action=" + Action + "&PrcsID=" + PrcsID + "&ActvID=" + ActvID + "&FormAction=" + FormAction + "&FormName=" + FormName + "&FormColor=" + FormColor + "&WFURL=" + WFURL + "&PrMs1=" + PrMs1 + "&PrMs2=" + PrMs2 + "&PrMs3=" + PrMs3 + "&PrMs4=" + PrMs4 + "&PrMs5=" + PrMs5 + "&PrMs6=" + PrMs6 + "&PrMs7=" + PrMs7 + "&PrMs8=" + PrMs8 + "&PrMs9=" + PrMs9 + "&PrMs10=" + PrMs10;
    } else {
      Param = "?Action=" + Action + "&PrcsID=" + PrcsID + "&ActvID=" + ActvID + "&FormAction=" + FormAction + "&FormName=" + FormName + "&FormColor=" + FormColor + "&PrMs1=" + PrMs1 + "&PrMs2=" + PrMs2 + "&PrMs3=" + PrMs3 + "&PrMs4=" + PrMs4 + "&PrMs5=" + PrMs5 + "&PrMs6=" + PrMs6 + "&PrMs7=" + PrMs7 + "&PrMs8=" + PrMs8 + "&PrMs9=" + PrMs9 + "&PrMs10=" + PrMs10;
    } 
    return "redirect:" + PageURL + Param;
  }
  
  @RequestMapping(value = {"EOD"}, method = {RequestMethod.GET})
  public String EOD(Locale locale, Model model, HttpSession session) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    return "EOD/SCF_fEOD";
  }
  
  @RequestMapping(value = {"SCF_LimitSystem"}, method = {RequestMethod.GET})
  public String SCF_LimitSystem(Locale locale, Model model, HttpSession session) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    return "LimitSystem/LimitSystem";
  }
  
  @RequestMapping(value = {"Treeviews"}, method = {RequestMethod.GET})
  public String Treeviews(Locale locale, Model model, HttpSession session) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    return "LimitSystem/TreeView/basic-example";
  }
  
  @RequestMapping(value = {"SCF_HierTreeviews"}, method = {RequestMethod.GET})
  public String HierTreeviews(Locale locale, Model model, HttpSession session) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    return "LimitSystem/LSW_fHierarchyTree/LSW_fHierarchyTree";
  }
  
  @RequestMapping(value = {"AutoLogin"}, method = {RequestMethod.GET})
  public String AutoLogin(Locale locale, Model model, HttpSession session) {
    logger.info("Welcome home! The client locale is {}.", locale);
    return "Common/Pages/Userview/AutoLogin";
  }
  
  @RequestMapping(value = {"SalesDashBoard"}, method = {RequestMethod.GET})
  public String DashBoard(Locale locale, Model model, HttpSession session) {
    logger.info("Welcome home! The client locale is {}.", locale);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    return "Common/Pages/Userview/SalesDashBoard";
  }
  
  @RequestMapping(value = {"PAYTMCRED"}, method = {RequestMethod.GET})
  @ResponseBody
  public String PAYTMCRED(HttpServletRequest request, HttpServletResponse response) throws Exception, ClassNotFoundException {
    String FNname = "LSW_SPAYTMCREDS";
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call("", "", "", "", "", "LSW_SPAYTMCREDS");
    String Result = Data.get(0);
    return Result;
  }
  
//ENACH START Date : 01/08/2020
  @RequestMapping(value = { "ENACH" }, method = {

       org.springframework.web.bind.annotation.RequestMethod.POST })

  @ResponseBody

  public String ENACH(HttpServletRequest request, HttpServletResponse response, HttpSession session)

         throws Exception {

   String OP = "";

   String status = "";

   String Msg = "";

   String ReceiptNo ="";

   String FnlResp="";

   String param1 = request.getParameter("PRCSID");

   String param2 = request.getParameter("PFNO");

   Object time = session.getAttribute("LogSession");



         OP = ENACH.EnachPush(param1,param2,"","","","");
         String Reponse[] = OP.split("~");

         status=Reponse[0];

         Msg=Reponse[1];

         ReceiptNo=Reponse[2];

         FnlResp=Reponse[3];
         if (OP.equals("Invalid Request")) {

                throw new ServletException("Invalid Request...");

         }

         return  status+ "|" + Msg + "|" + ReceiptNo + "|" + FnlResp;           

         //return "PAYTM";

   // return null;
  }
  //ENACH END
  
  
  
//AADHARENACH START Date : 09/04/2020
  @RequestMapping(value = { "AADHARENACH" }, method = {
  org.springframework.web.bind.annotation.RequestMethod.POST })
  @ResponseBody
  public String AADHARENACH(HttpServletRequest request, HttpServletResponse response, HttpSession session)
  throws Exception {
	  
	   String OP = "";
	   String status = "";
	   String Msg = "";
	   String ReceiptNo ="";
	   String FnlResp="";
	   AadharENACH getdata = new AadharENACH();
	   
	   String param1 = request.getParameter("type");
	   String param2 = request.getParameter("PRCSID");
	   String SPName = request.getParameter("SPName");
	 
	   Object time = session.getAttribute("LogSession");

	   String retval = getdata.AadharEnachIntg(param1,param2,SPName);
	   
	        
	         
	         /*String Reponse[] = OP.split("~");
	         status=Reponse[0];
	         Msg=Reponse[1];
	         ReceiptNo=Reponse[2];
	         FnlResp=Reponse[3];*/
	         
	         if (OP.equals("Invalid Request")) {
	        	 
	            throw new ServletException("Invalid Request...");
	         }
	  return retval;
  }
  //AADHARENACH END
  
  
//AADHARENACHBNK START Date : 09/04/2020
  @RequestMapping(value = { "AADHARENACHBNK" }, method = {
  org.springframework.web.bind.annotation.RequestMethod.POST })
  @ResponseBody
  public String AADHARENACHBNK(HttpServletRequest request, HttpServletResponse response, HttpSession session)
  throws Exception {
   String OP = "";
   String status = "";
   String Msg = "";
   String ReceiptNo ="";
   String FnlResp="";
   AadharENACH getdata = new AadharENACH();
   
   String param1 = request.getParameter("type");
   String param2 = request.getParameter("PRCSID");
   String SPName = request.getParameter("SPName");
 
   Object time = session.getAttribute("LogSession");
   String retval = getdata.EnachBank(param1,param2,SPName);
   
         /*String Reponse[] = OP.split("~");
         status=Reponse[0];
         Msg=Reponse[1];
         ReceiptNo=Reponse[2];
         FnlResp=Reponse[3];*/
     return  retval;           
  }
  //AADHARENACHBNK END
  


  //ENACH FETCH START  Date : 01/08/2020
  @RequestMapping(value = { "ENACHFETCH" }, method = {

     org.springframework.web.bind.annotation.RequestMethod.POST })

  @ResponseBody

  public String ENACHFETCH(HttpServletRequest request, HttpServletResponse response, HttpSession session)

       throws Exception {

  String OP = "";

  String status = "";

  String Msg = "";

  String ReceiptNo ="";

  String FnlResp="";

  String param1 = request.getParameter("PRCSID");

  String param2 = request.getParameter("UID");

  Object time = session.getAttribute("LogSession");



       OP = ENACH.Enachfetch(param1,param2,"","","","");
       String Reponse[] = OP.split("~");

       status=Reponse[0];

       Msg=Reponse[1];

       ReceiptNo=Reponse[2];

       FnlResp=Reponse[3];
       if (OP.equals("Invalid Request")) {

              throw new ServletException("Invalid Request...");

       }

       return  status+ "|" + Msg + "|" + ReceiptNo + "|" + FnlResp;           

       //return "PAYTM";

  // return null;
  }
  //ENACH FETCH END
  
//PAYMENTSTATUS START  Date : 25/08/2021
  @RequestMapping(value = { "PAYMENTSTATUS" }, method = {

     org.springframework.web.bind.annotation.RequestMethod.POST })
  @ResponseBody
  public String PAYMENTSTATUS(HttpServletRequest request, HttpServletResponse response, HttpSession session)
       throws Exception {
  String OP ="";
  String FnlResp="";
  String PRCSID = request.getParameter("PRCSID");
  String PFID = request.getParameter("PFID");
  String Prvnt = request.getParameter("Prvnt");

       OP = Paytmstatus.PaymentStatus(PRCSID,PFID);
       
       String[] PaytmReponse = OP.split("~");
       
       String PayResp = PaytmReponse[0];
       String PayCode = PaytmReponse[1]; 
       
       FnlResp=PayResp;
       if (OP.equals("Invalid Request")) {
              throw new ServletException("Invalid Request...");
       }

       return  FnlResp;           

       //return "PAYTM";

  // return null;
  }
  //PAYMENTSTATUS END
  
//ENACH LMS SUBMIT START
	@RequestMapping(value = { "ENACHLMSSUBMIT" }, method = {

	 org.springframework.web.bind.annotation.RequestMethod.POST })

	@ResponseBody

	public String ENACHLMSSUBMIT(HttpServletRequest request, HttpServletResponse response, HttpSession session)

	   throws Exception {

	String OP = "";

	String status = "";

	String Msg = "";

	String ReceiptNo ="";

	String FnlResp="";

	String param1 = request.getParameter("PRCSID");

	String param2 = request.getParameter("UID");

	Object time = session.getAttribute("LogSession");



	   OP = ENACHLMS.Enachlmssubmit(param1,param2,"","","","");
	   String Reponse[] = OP.split("~");

	   status=Reponse[0];

	   Msg=Reponse[1];

	   ReceiptNo=Reponse[2];

	   FnlResp=Reponse[3];
	   if (OP.equals("Invalid Request")) {

	          throw new ServletException("Invalid Request...");

	   }

	   return  status+ "|" + Msg + "|" + ReceiptNo + "|" + FnlResp;           

	   //return "PAYTM";

	//return null;
	}
	//ENACH LMS SUBMIT END
	
	//OVERDUE FETCH START
  	@RequestMapping(value = { "OVERDUE" }, method = {

  	 org.springframework.web.bind.annotation.RequestMethod.POST })

  	@ResponseBody public String OVERDUE(HttpServletRequest request, HttpServletResponse response, HttpSession session)

  	   throws Exception {

  	String OP = "";

  	String status = "";

  	String Msg = "";

  	String ReceiptNo ="";

  	String FnlResp="";

  	String param1 = request.getParameter("PRCSID");

  	String param2 = request.getParameter("UID");

  	Object time = session.getAttribute("LogSession");

  	   OP = OVERDUE.OVERDUEFETCH(param1,param2,"","","","");
  	   String Reponse[] = OP.split("~");

  	   status=Reponse[0];

  	   Msg=Reponse[1];

  	   ReceiptNo=Reponse[2];

  	   FnlResp=Reponse[3];
  	   if (OP.equals("Invalid Request")) {

  	          throw new ServletException("Invalid Request...");

  	   }

  	   return  status+ "|" + Msg + "|" + ReceiptNo + "|" + FnlResp;           

  	   //return "PAYTM";

  	//return null;
  	}
  	//OVERDUE FETCH END
  	 @RequestMapping(value = {"LGS"}, method = {RequestMethod.GET})
  	  @ResponseBody
  	  public String LoginSes(Locale locale, Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) throws IOException {
  	    logger.info("Welcome home! The client locale is {}.", locale);
  	    String OP = "";
  	    String propFileName = "DBSource.properties";
  	    String ADAUTH = "";
  	    String DEFPWD = "";
  	    String SessionID = "";
  	    String IP = "";
  	    String REQ = "";
  	    String url = "";
  	    String ADSearch = "";
  	    String Location = "";
  	    String Cord = "";
  	    String LGSR = "";
  	    String LGURL = "";
  	    String macAddress = "";
  	    String IP2 = "";
  	    InetAddress ip = null;
  	    Properties prop = new Properties();
  	    Base64.Decoder decoder = Base64.getDecoder();
  	    if (request.getHeader("x-forwarded-for") == null) {
  	      IP = request.getRemoteAddr();
  	    } else {
  	      IP = request.getHeader("x-forwarded-for");
  	    } 
  	    IP2 = new String(decoder.decode(request.getParameter("parmc")));
  	    String strMac = "";
  	    try {
  	      ip = InetAddress.getLocalHost();
  	      NetworkInterface network = NetworkInterface.getByInetAddress(ip);
  	      byte[] mac = network.getHardwareAddress();
  	      StringBuilder sb = new StringBuilder();
  	      for (int i = 0; i < mac.length; i++) {
  	        sb.append(String.format("%02X%s", new Object[] { Byte.valueOf(mac[i]), (i < mac.length - 1) ? "-" : "" }));
  	      } 
  	      macAddress = sb.toString();
  	    } catch (UnknownHostException e) {
  	      e.printStackTrace();
  	    } catch (SocketException e2) {
  	      e2.printStackTrace();
  	    } 
  	    String FileName = "";
  	    FileName = System.getProperty("catalina.base");
  	    FileName = String.valueOf(String.valueOf(FileName)) + "/conf/" + "DBSource.properties";
  	    InputStream inputStream = new FileInputStream(FileName);
  	    if (inputStream != null) {
  	      prop.load(inputStream);
  	      ADAUTH = prop.getProperty("ADAUTH");
  	      DEFPWD = prop.getProperty("DEFPWD");
  	      url = prop.getProperty("ADURL");
  	      ADSearch = prop.getProperty("ADSearch");
  	      inputStream.close();
  	      String Username = request.getParameter("parma");
  	      String Code = request.getParameter("CPM");
  	      String Password = new String(decoder.decode(request.getParameter("parmb"))), PasswordTxt = Password;
  	      Username = new String(decoder.decode(Username));
  	      if (ADAUTH.equals("Yes")) {
  	        OP = LDAP.getLDAP(Username, PasswordTxt, url, ADSearch);
  	        Password = DEFPWD;
  	        PasswordTxt = DEFPWD;
  	        REQ = String.valueOf(String.valueOf(ADAUTH)) + '~' + OP;
  	      } else {
  	        OP = "Success";
  	        REQ = "LOGIN";
  	      } 
  	      if (OP.equals("Success"))
  	        try {
  	          MessageDigest m = MessageDigest.getInstance("MD5");
  	          byte[] data = Password.getBytes();
  	          m.update(data, 0, data.length);
  	          BigInteger j = new BigInteger(1, m.digest());
  	          Password = String.format("%1$032x", new Object[] { j });
  	        } catch (Exception exception) {} 
  	      double x = Math.random();
  	      double y = Math.random();
  	      SessionID = String.valueOf(String.valueOf(Username)) + "|" + "SESS" + x + y;
  	      Connection con = DBConnection.getConnection(null);
  	      String str = null;
  	      ResultSet rs = null;
  	      PreparedStatement proc_stmt = null;
  	      String xml = "";
  	      try {
  	        proc_stmt = con.prepareStatement("{ call LSW_SDIRUSERLOG (?,?,?,?,?,?,?,?) }");
  	        proc_stmt.setString(1, Username);
  	        proc_stmt.setString(2, SessionID);
  	        proc_stmt.setString(3, Password);
  	        proc_stmt.setString(4, PasswordTxt);
  	        proc_stmt.setString(5, String.valueOf(String.valueOf(IP)) + "|" + IP2 + "|" + ip.getHostAddress() + "|" + ip.getHostName());
  	        proc_stmt.setString(6, "");
  	        proc_stmt.setString(7, macAddress);
  	        proc_stmt.setString(8, REQ);
  	        rs = proc_stmt.executeQuery();
  	        ResultSetMetaData rsmd = rs.getMetaData();
  	        int colCount = rsmd.getColumnCount();
  	        while (rs.next()) {
  	          LGSR = rs.getString(1);
  	          LGURL = rs.getString(2);
  	        } 
  	        if (rs != null)
  	          rs.close(); 
  	        if (proc_stmt != null)
  	          proc_stmt.close(); 
  	        if (con != null)
  	          con.close(); 
  	      } catch (Exception e3) {
  	        try {
  	          if (rs != null)
  	            rs.close(); 
  	          if (proc_stmt != null)
  	            proc_stmt.close(); 
  	          if (con != null)
  	            con.close(); 
  	        } catch (SQLException sqlee) {
  	          sqlee.printStackTrace();
  	        } 
  	        e3.printStackTrace();
  	        try {
  	          if (rs != null)
  	            rs.close(); 
  	          if (proc_stmt != null)
  	            proc_stmt.close(); 
  	          if (con != null)
  	            con.close(); 
  	        } catch (SQLException sqlee2) {
  	          sqlee2.printStackTrace();
  	        } 
  	      } finally {
  	        try {
  	          if (rs != null)
  	            rs.close(); 
  	          if (proc_stmt != null)
  	            proc_stmt.close(); 
  	          if (con != null)
  	            con.close(); 
  	        } catch (SQLException sqlee2) {
  	          sqlee2.printStackTrace();
  	        } 
  	      } 
  	      try {
  	        if (rs != null)
  	          rs.close(); 
  	        if (proc_stmt != null)
  	          proc_stmt.close(); 
  	        if (con != null)
  	          con.close(); 
  	      } catch (SQLException sqlee2) {
  	        sqlee2.printStackTrace();
  	      } 
  	      if (LGSR.equals("LOGIN SUCCESSFUL")) {
  	        session.setAttribute("LogSession", SessionID);
  	        session.setAttribute("UsrSession", Username);
  	        session.setAttribute("CPMSession", PasswordTxt);
  	        session.setMaxInactiveInterval(12000);
  	      } 
  	      return String.valueOf(String.valueOf(LGSR)) + "|" + LGURL;
  	    } 
  	    throw new FileNotFoundException("property file '" + inputStream + "' not found in the classpath");
  	  }
  	  
  
  @RequestMapping(value = {"/InsrncePrmeiumReGen"}, method = {RequestMethod.POST})
  @ResponseBody
  public String InsrncePrmeiumReGen(HttpServletRequest request, HttpServletResponse response) throws Exception, ClassNotFoundException {
    InsrncePrmeiumReGen InsrncePrmeium = new InsrncePrmeiumReGen();
    String param1 = request.getParameter("param1");
    String param2 = request.getParameter("param2");
    String param3 = request.getParameter("param3");
    String param4 = request.getParameter("param4");
    String param5 = request.getParameter("param5");
    String DBSrc = request.getParameter("DBSrc");
    String spname1 = request.getParameter("spname1");
    String spname2 = request.getParameter("spname2");
    InsrncePrmeium.param1(param1);
    InsrncePrmeium.param2(param2);
    InsrncePrmeium.param3(param3);
    InsrncePrmeium.param4(param4);
    InsrncePrmeium.param5(param5);
    InsrncePrmeium.spname1(spname1);
    InsrncePrmeium.spname2(spname2);
    return InsrncePrmeium.InsrncePrmeiumReGen();
  }
  
  @RequestMapping(value = { "ECN" }, method = { RequestMethod.GET })
  @ResponseBody
  public String ECN(final HttpServletRequest request, final HttpServletResponse response) throws Exception, ClassNotFoundException {
      String Intrresponse = "";
      final String FNname = "LSW_SECNNOAPI";
      final String ECNNO = request.getParameter("ECNNO");
      final String UNIQUEID = request.getParameter("UNIQUEID");
      final String TOKENID = request.getParameter("TOKENID");
      final int PRETTY_PRINT_INDENT_FACTOR = 4;
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call(ECNNO, TOKENID, UNIQUEID, "", "", FNname);
      final String Result = Data.get(0);
      final String UNIQUEID2 = Data.get(1);
      final String EndPoint1 = Data.get(2);
      Intrresponse = JSInterfaceCall.JInterfaceCallSrv(EndPoint1, Result, "", "", "");
      final String[] Reponse = Intrresponse.split("~");
      Intrresponse = Reponse[0];
      return Intrresponse;
  }
  
  @RequestMapping(value = { "ANALYTICSINP" }, method = { RequestMethod.GET })
  @ResponseBody
  public String ANALYTICSINP(final HttpServletRequest request, final HttpServletResponse response) throws Exception, ClassNotFoundException {
      final String FNname = "LSW_SANALYTICSINPUT_COMBINED";
      final String PRCSID = request.getParameter("PRCSID");
      final String UNIQUEID = request.getParameter("UNIQUEID");
      final String TOKENID = request.getParameter("TOKENID");
      ArrayList<String> Data = new ArrayList<String>();
      Data = (ArrayList<String>)GetDBData.Call("", "", TOKENID, UNIQUEID, PRCSID, FNname);
      final String Result = Data.get(0);
      return Result;
  }
  
  @RequestMapping(value = {"/SendMail"}, method = {RequestMethod.POST})
  @ResponseBody
  public String MailView(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String To = request.getParameter("To");
    String Title = request.getParameter("Title");
    String MsgContent = request.getParameter("MsgContent");
    String fromMail = request.getParameter("fromMail");
    String fromPwd = request.getParameter("fromPwd");
    String Prophost = request.getParameter("Prophost");
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    MailSending MS = new MailSending();
    String s1 = MS.Send(fromMail, fromPwd, To, "", Title, MsgContent, Prophost);
    return s1;
  }
  
  @RequestMapping(value = {"/UpSendMail"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UpMailView(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String To = request.getParameter("To");
    String Title = request.getParameter("Title");
    String MsgContent = request.getParameter("MsgContent");
    String fromMail = request.getParameter("fromMail");
    String fromPwd = request.getParameter("fromPwd");
    String Prophost = request.getParameter("Prophost");
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    UpMailSending MS = new UpMailSending();
    String s1 = MS.Send(fromMail, fromPwd, To, "", Title, MsgContent, Prophost);
    return s1;
  }
  
  @RequestMapping(value = {"/UI_GetData"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UI_GetData(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    try {
      UI_GetData getdata = new UI_GetData();
      String param1 = request.getParameter("param1");
      String param2 = request.getParameter("param2");
      String param3 = request.getParameter("param3");
      String param4 = request.getParameter("param4");
      String param5 = request.getParameter("param5");
      String spname = request.getParameter("spname");
      String DBSrc = request.getParameter("DBSrc");
      String Token = request.getParameter("Token");
      getdata.param1(param1);
      getdata.param2(param2);
      getdata.param3(param3);
      getdata.param4(param4);
      getdata.param5(param5);
      getdata.spname(spname);
      getdata.DBSrc(DBSrc);
      Object time = session.getAttribute("LogSession");
      return getdata.UI_GetData1();
    } catch (Exception e) {
      System.out.print(e);
      return null;
    } 
  }
  
  @RequestMapping(value = {"/UI_GetData_Disb"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UI_GetData_Disb(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    try {
    	UI_Getdata_Disb getdata = new UI_Getdata_Disb();
      String param1 = request.getParameter("param1");
      String param2 = request.getParameter("param2");
      String param3 = request.getParameter("param3");
      String param4 = request.getParameter("param4");
      String param5 = request.getParameter("param5");
      String spname = request.getParameter("spname");
      String DBSrc = request.getParameter("DBSrc");
      String Token = request.getParameter("Token");
      getdata.param1(param1);
      getdata.param2(param2);
      getdata.param3(param3);
      getdata.param4(param4);
      getdata.param5(param5);
      getdata.spname(spname);
      getdata.DBSrc(DBSrc);
      Object time = session.getAttribute("LogSession");
      return getdata.UI_Getdata_Disb1();
    } catch (Exception e) {
      System.out.print(e);
      return null;
    } 
  }
  
  @RequestMapping(value = {"/UI_GetDataLrg"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UI_GetDataLrg(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    try {
      UI_GetDataLrg getdata = new UI_GetDataLrg();
      String param1 = request.getParameter("param1");
      String param2 = request.getParameter("param2");
      String param3 = request.getParameter("param3");
      String param4 = request.getParameter("param4");
      String param5 = request.getParameter("param5");
      String spname = request.getParameter("spname");
      String DBSrc = request.getParameter("DBSrc");
      String Token = request.getParameter("Token");
      getdata.param1(param1);
      getdata.param2(param2);
      getdata.param3(param3);
      getdata.param4(param4);
      getdata.param5(param5);
      getdata.spname(spname);
      getdata.DBSrc(DBSrc);
      Object time = session.getAttribute("LogSession");
      return getdata.UI_GetData1();
    } catch (Exception e) {
      System.out.print(e);
      return null;
    } 
  }
  
  @RequestMapping(value = {"/UI_LoginGetData"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UI_LoginGetData(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    try {
      UI_LoginGetData getdata = new UI_LoginGetData();
      String param1 = request.getParameter("param1");
      String param2 = request.getParameter("param2");
      String param3 = request.getParameter("param3");
      String param4 = request.getParameter("param4");
      String param5 = request.getParameter("param5");
      String spname = request.getParameter("spname");
      String DBSrc = request.getParameter("DBSrc");
      getdata.param1(param1);
      getdata.param2(param2);
      getdata.param3(param3);
      getdata.param4(param4);
      getdata.param5(param5);
      getdata.spname(spname);
      getdata.DBSrc(DBSrc);
      return getdata.UI_LoginGetData1();
    } catch (Exception e) {
      System.out.print(e);
      return null;
    } 
  }
  
  @RequestMapping(value = {"/UI_fetchformdata"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UI_fetchformdata(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    UI_fetchformdata fetchformdata = new UI_fetchformdata();
    String param1 = request.getParameter("id");
    String param2 = request.getParameter("TableName");
    String DBSrc = request.getParameter("DBSrc");
    fetchformdata.param1(param1);
    fetchformdata.param2(param2);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = fetchformdata.UI_fetchformdata1();
    return retval;
  }
  
  @RequestMapping(value = {"/GridView"}, method = {RequestMethod.POST})
  @ResponseBody
  public String GridView(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    GridView getdata = new GridView();
    String param1 = request.getParameter("Param");
    String param2 = request.getParameter("brid");
    String param3 = request.getParameter("MnuId");
    String spname = request.getParameter("spname");
    String DBSrc = request.getParameter("DBSrc");
    getdata.param1(param1);
    getdata.param2(param2);
    getdata.param3(param3);
    getdata.spname(spname);
    getdata.DBSrc(DBSrc);
    String retval = getdata.UI_GetGridview();
    return retval;
  }
  
  @RequestMapping(value = {"MDMS"}, method = {RequestMethod.POST})
  @ResponseBody
  public String MDMS(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    DMS getdata = new DMS();
    boolean isMultipart = ServletFileUpload.isMultipartContent(request);
    String PrcsID = request.getParameter("PrcsID");
    String FormName = request.getParameter("FormName");
    String names = request.getParameter("names");
    String descrptns = request.getParameter("descrptns");
    String flsize = request.getParameter("flsize");
    String vrsnno = request.getParameter("vrsnno");
    String usrpwd = request.getParameter("usrpwd");
    String domain = request.getParameter("domain");
    String CusID = request.getParameter("CusID");
    String DocName = request.getParameter("DocName");
    String DBSrc = request.getParameter("DBSrc");
    getdata.PrcsID(PrcsID);
    getdata.FormName(FormName);
    getdata.names(names);
    getdata.descrptns(descrptns);
    getdata.flsize(flsize);
    getdata.vrsnno(vrsnno);
    getdata.usrpwd(usrpwd);
    getdata.domain(domain);
    getdata.CusID(CusID);
    getdata.DocName(DocName);
    getdata.DBSrc(DBSrc);
    String retval = getdata.DMSPUSH(request, response);
    return retval;
  }
  
  @RequestMapping(value = {"MDMSVIEW"}, method = {RequestMethod.GET})
  @ResponseBody
  public void MDMSVIEW(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    boolean isMultipart = ServletFileUpload.isMultipartContent(request);
    String PrcsID = request.getParameter("PrcsID");
    String DMSID = request.getParameter("DMSID");
    String DMSURL = "";
    String fileNAME = "";
    String format = "";
    String retval = "";
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(PrcsID, DMSID, "", "", "", "LSW_SDMSVIEW");
    DMSURL = Data.get(0);
    fileNAME = Data.get(1);
    format = Data.get(2);
    URL url = new URL(DMSURL);
    HttpURLConnection httpConn = (HttpURLConnection)url.openConnection();
    int responseCode = httpConn.getResponseCode();
    if (responseCode == 200) {
      ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
      byte[] chunk = new byte[4096];
      InputStream stream = httpConn.getInputStream();
      try {
        int bytesRead;
        while ((bytesRead = stream.read(chunk)) > 0)
          outputStream.write(chunk, 0, bytesRead); 
        stream.close();
        byte[] DocContent = outputStream.toByteArray();
        outputStream.close();
        response.setContentLength(DocContent.length);
        response.setHeader("Content-Disposition", "attachment; filename=" + fileNAME);
        ServletOutputStream servletOutputStream = response.getOutputStream();
        servletOutputStream.write(DocContent);
        servletOutputStream.flush();
        servletOutputStream.close();
      } catch (IOException e) {
        stream.close();
        outputStream.close();
        e.printStackTrace();
      } 
    } 
  }
  
  @RequestMapping(value = {"/FncallWebserviceGridView"}, method = {RequestMethod.POST})
  @ResponseBody
  public String FncallWebserviceGridView(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    FncallWebserviceGrid getdata = new FncallWebserviceGrid();
    String param1 = request.getParameter("Param");
    String param2 = request.getParameter("brid");
    String param3 = request.getParameter("MnuId");
    String spname = request.getParameter("spname");
    String DBSrc = request.getParameter("DBSrc");
    getdata.param1(param1);
    getdata.param2(param2);
    getdata.param3(param3);
    getdata.DBSrc(DBSrc);
    getdata.spname(spname);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.UI_GetFncallWSGridview();
    return retval;
  }
  
  @RequestMapping(value = {"/UI_formdatains"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UI_formdatains(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    UI_formdatainsert getdata = new UI_formdatainsert();
    String xml = request.getParameter("xml");
    String tablenameins = request.getParameter("tablenameins");
    String tablenameins2 = request.getParameter("tablenameins1");
    String activityid = request.getParameter("activityid");
    String activityname = request.getParameter("activityname");
    String DBSrc = request.getParameter("DBSrc");
    getdata.xml(xml);
    getdata.tablenameins(tablenameins);
    getdata.tablenameins1(tablenameins2);
    getdata.activityid(activityid);
    getdata.activityname(activityname);
    getdata.DBSrc(DBSrc);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.UI_formdatainsertdata();
    return retval;
  }
  
  @RequestMapping(value = {"/UI_fetchformdata_get2date"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UI_fetchformdata_get2date(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    UI_fetchformdata_get2date getdata = new UI_fetchformdata_get2date();
    String DBSrc = request.getParameter("DBSrc");
    getdata.DBSrc(DBSrc);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.UI_fetchformdata_get2date1();
    return retval;
  }
  
  @RequestMapping(value = {"/UI_GetLoginPwd"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UI_GetLoginPwd(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    UI_GetLoginPwd getdata = new UI_GetLoginPwd();
    String username = request.getParameter("username");
    String DBSrc = request.getParameter("DBSrc");
    getdata.username(username);
    getdata.DBSrc(DBSrc);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.UI_GetLoginPwd1();
    return retval;
  }
  
  @RequestMapping(value = {"/CS_FetchFormFieldData"}, method = {RequestMethod.POST})
  @ResponseBody
  public String CS_FetchFormFieldData(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    CS_FetchFormFieldData getdata = new CS_FetchFormFieldData();
    String param1 = request.getParameter("param1");
    String param2 = request.getParameter("param2");
    String param3 = request.getParameter("param3");
    String param4 = request.getParameter("param4");
    String param5 = request.getParameter("param5");
    String spname = request.getParameter("spname");
    String DBSrc = request.getParameter("DBSrc");
    getdata.param1(param1);
    getdata.param2(param2);
    getdata.param3(param3);
    getdata.param4(param4);
    getdata.param5(param5);
    getdata.DBSrc(DBSrc);
    getdata.spname(spname);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.CS_FetchFormFieldData();
    return retval;
  }
  
  @RequestMapping(value = {"/CS_Migrformdata"}, method = {RequestMethod.POST})
  @ResponseBody
  public String CS_Migrformdata(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    CS_Migrformdata getdata = new CS_Migrformdata();
    String Fromfields = request.getParameter("Fromfields");
    String Tofields = request.getParameter("Tofields");
    String Fromtable = request.getParameter("Fromtable");
    String Totable = request.getParameter("Totable");
    String ProcessID = request.getParameter("ProcessID");
    String spname = request.getParameter("spname");
    String DBSrc = request.getParameter("DBSrc");
    getdata.Fromfields(Fromfields);
    getdata.Tofields(Tofields);
    getdata.Fromtable(Fromtable);
    getdata.Totable(Totable);
    getdata.ProcessID(ProcessID);
    getdata.DBSrc(DBSrc);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.CS_Migrformdata();
    return retval;
  }
  
  @RequestMapping(value = {"/UI_fetchActivityform"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UI_fetchActivityform(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    UI_fetchActivityform getdata = new UI_fetchActivityform();
    String ProcessDefID = request.getParameter("ProcessDefID");
    String ActivityDefID = request.getParameter("ActivityDefID");
    String DBSrc = request.getParameter("DBSrc");
    getdata.ProcessDefID(ProcessDefID);
    getdata.ActivityDefID(ActivityDefID);
    getdata.DBSrc(DBSrc);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.UI_fetchActivityform();
    return retval;
  }
  
  @RequestMapping(value = {"/UI_fetchformButtonData"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UI_fetchformButtonData(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    UI_fetchformButtonData getdata = new UI_fetchformButtonData();
    String ProcessDefID = request.getParameter("ProcessDefID");
    String ActivityDefID = request.getParameter("ActivityDefID");
    String DBSrc = request.getParameter("DBSrc");
    getdata.ProcessDefID(ProcessDefID);
    getdata.ActivityDefID(ActivityDefID);
    getdata.DBSrc(DBSrc);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.UI_fetchformButtonData();
    return retval;
  }
  
  @RequestMapping(value = {"/UI_fetchformdata_get2dateTime"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UI_fetchformdata_get2dateTime(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    UI_fetchformdata_get2dateTime getdata = new UI_fetchformdata_get2dateTime();
    String DBSrc = request.getParameter("DBSrc");
    getdata.DBSrc(DBSrc);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.UI_fetchformdata_get2dateTime();
    return retval;
  }
  
  @RequestMapping(value = {"/UI_formdatains_General"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UI_formdatains_General(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    UI_formdatains_General getdata = new UI_formdatains_General();
    String DBSrc = request.getParameter("DBSrc");
    getdata.DBSrc(DBSrc);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.UI_formdatains_General();
    return retval;
  }
  
  @RequestMapping(value = {"/deletefile"}, method = {RequestMethod.POST})
  @ResponseBody
  public String deletefile(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    deletefile getdata = new deletefile();
    String DBSrc = request.getParameter("DBSrc");
    String retval = getdata.deletefile();
    return retval;
  }
  
  @RequestMapping(value = {"/UI_formdata_GetMainPageHTML"}, method = {RequestMethod.POST})
  @ResponseBody
  public String UI_formdata_GetMainPageHTML(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    UI_formdata_GetMainPageHTML getdata = new UI_formdata_GetMainPageHTML();
    String Username = request.getParameter("Username");
    String MenuName = request.getParameter("MenuName");
    String DBSrc = request.getParameter("DBSrc");
    getdata.Username(Username);
    getdata.MenuName(MenuName);
    getdata.DBSrc(DBSrc);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.UI_formdata_GetMainPageHTML();
    return retval;
  }
  
  @RequestMapping(value = {"/FileUploadHandler"}, method = {RequestMethod.POST})
  @ResponseBody
  public String FileUploadHandler(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    FileUploadHandler getdata = new FileUploadHandler();
    boolean isMultipart = ServletFileUpload.isMultipartContent(request);
    String PrcsID = request.getParameter("PrcsID");
    String FormName = request.getParameter("FormName");
    String names = request.getParameter("names");
    String descrptns = request.getParameter("descrptns");
    String flsize = request.getParameter("flsize");
    String vrsnno = request.getParameter("vrsnno");
    String usrpwd = request.getParameter("usrpwd");
    String domain = request.getParameter("domain");
    String CusID = request.getParameter("CusID");
    String DocName = request.getParameter("DocName");
    String DBSrc = request.getParameter("DBSrc");
    getdata.PrcsID(PrcsID);
    getdata.FormName(FormName);
    getdata.names(names);
    getdata.descrptns(descrptns);
    getdata.flsize(flsize);
    getdata.vrsnno(vrsnno);
    getdata.usrpwd(usrpwd);
    getdata.domain(domain);
    getdata.CusID(CusID);
    getdata.DocName(DocName);
    getdata.DBSrc(DBSrc);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.FileUploadHandler(request, response);
    return retval;
  }
  
  @RequestMapping(value = {"/PANCINDIN"}, method = {RequestMethod.GET})
  @ResponseBody
  public String PANCINDIN(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    PANCINDIN getdata = new PANCINDIN();
    String param1 = request.getParameter("param1");
    String param2 = request.getParameter("param2");
    String param3 = request.getParameter("param3");
    String param4 = request.getParameter("param4");
    String param5 = request.getParameter("param5");
    String DBSrc = request.getParameter("DBSrc");
    String spname = request.getParameter("spname");
    getdata.param1(param1);
    getdata.param2(param2);
    getdata.param3(param3);
    getdata.param4(param4);
    getdata.param5(param5);
    getdata.DBSrc(DBSrc);
    getdata.spname(spname);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.PANCINDIN();
    return retval;
  }
  
  @RequestMapping(value = {"/GetExclDataNOF"}, method = {RequestMethod.POST})
  @ResponseBody
  public String GetExclDataNOF(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    GetExclDataNOF getdata = new GetExclDataNOF();
    String param1 = request.getParameter("param1");
    String param2 = request.getParameter("param2");
    String param3 = request.getParameter("param3");
    String param4 = request.getParameter("param4");
    String param5 = request.getParameter("param5");
    String param6 = request.getParameter("param6");
    String param7 = request.getParameter("param7");
    String DBSrc = request.getParameter("DBSrc");
    String spname = request.getParameter("spname");
    getdata.param1(param1);
    getdata.param2(param2);
    getdata.param3(param3);
    getdata.param4(param4);
    getdata.param5(param5);
    getdata.param6(param6);
    getdata.param7(param7);
    getdata.DBSrc(DBSrc);
    getdata.spname(spname);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.GetExclData();
    return retval;
  }
  
  @RequestMapping(value = {"/MailSendWthAttchRPTBdy"}, method = {RequestMethod.POST})
  @ResponseBody
  public String MailSendWthAttchRPTBdy(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String To = request.getParameter("To");
    String Title = request.getParameter("Title");
    String MsgContent = request.getParameter("MsgContent");
    String fromMail = request.getParameter("fromMail");
    String fromPwd = request.getParameter("fromPwd");
    String Prophost = request.getParameter("Prophost");
    String ccEmail = request.getParameter("ccEmail");
    String FleNme = request.getParameter("FleNme");
    String RptUrl = request.getParameter("RptUrl");
    String bccEmail = request.getParameter("bccEmail");
    MailSendWthAttchRPTBdy MS = new MailSendWthAttchRPTBdy();
    String s1 = MS.Send(fromMail, fromPwd, To, ccEmail, bccEmail, Title, MsgContent, Prophost, FleNme, RptUrl);
    return s1;
  }
  
  @RequestMapping(value = {"/GetExclDataSheet"}, method = {RequestMethod.POST})
  @ResponseBody
  public String GetExclDataSheet(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    GetExclDataSheet getdata = new GetExclDataSheet();
    String param1 = request.getParameter("param1");
    String param2 = request.getParameter("param2");
    String param3 = request.getParameter("param3");
    String param4 = request.getParameter("param4");
    String param5 = request.getParameter("param5");
    String param6 = request.getParameter("param6");
    String param7 = request.getParameter("param7");
    String param8 = request.getParameter("param8");
    String FName = request.getParameter("FName");
    String DBSrc = request.getParameter("DBSrc");
    String spname = request.getParameter("spname");
    String sheetname = request.getParameter("sheetname");
    getdata.param1(param1);
    getdata.param2(param2);
    getdata.param3(param3);
    getdata.param4(param4);
    getdata.param5(param5);
    getdata.param6(param6);
    getdata.param7(param7);
    getdata.param8(param8);
    getdata.FName(FName);
    getdata.DBSrc(DBSrc);
    getdata.spname(spname);
    getdata.sheetname(sheetname);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.GetExclData();
    return retval;
  }
  
  @RequestMapping(value = {"/GetExclData"}, method = {RequestMethod.POST})
  @ResponseBody
  public String GetExclData(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    GetExclData getdata = new GetExclData();
    String param1 = request.getParameter("param1");
    String param2 = request.getParameter("param2");
    String param3 = request.getParameter("param3");
    String param4 = request.getParameter("param4");
    String param5 = request.getParameter("param5");
    String param6 = request.getParameter("param6");
    String param7 = request.getParameter("param7");
    String param8 = request.getParameter("param8");
    String FName = request.getParameter("FName");
    String DBSrc = request.getParameter("DBSrc");
    String spname = request.getParameter("spname");
    getdata.param1(param1);
    getdata.param2(param2);
    getdata.param3(param3);
    getdata.param4(param4);
    getdata.param5(param5);
    getdata.param6(param6);
    getdata.param7(param7);
    getdata.param8(param8);
    getdata.FName(FName);
    getdata.DBSrc(DBSrc);
    getdata.spname(spname);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.GetExclData();
    return retval;
  }
  
  @RequestMapping(value = {"/TotalKyc"}, method = {RequestMethod.POST})
  @ResponseBody
  public String TotalKyc(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    TotalKyc getdata = new TotalKyc();
    String JSONval = request.getParameter("JSONval");
    String DBSrc = request.getParameter("DBSrc");
    getdata.JSONval(JSONval);
    getdata.DBSrc(DBSrc);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.TotlKyc();
    return retval;
  }
  
  @RequestMapping(value = {"/TotalKycOCR"}, method = {RequestMethod.POST})
  @ResponseBody
  public String TotalKycOCR(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String DOCURL = request.getParameter("DOCURL");
    String PRCSID = request.getParameter("PRCSID");
    String Type = request.getParameter("Type");
    String DOCNAME = request.getParameter("DOCNAME");
    String OP = "";
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    OP = TotalKycOCR.OCR(DOCURL, PRCSID, Type, DOCNAME);
    return OP;
  }
  
  @RequestMapping(value = {"/CIBILIntegration"}, method = {RequestMethod.POST})
  @ResponseBody
  public String CIBILIntegration(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    CIBILIntegration getdata = new CIBILIntegration();
    String appno = request.getParameter("appno");
    String cusid = request.getParameter("cusid");
    String DBSrc = request.getParameter("DBSrc");
    getdata.appno(appno);
    getdata.cusid(cusid);
    getdata.DBSrc(DBSrc);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.CIBIL();
    return retval;
  }
  
  @RequestMapping(value = {"PAYTM"}, method = {RequestMethod.GET})
  public String PAYTM(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
	String OP = "";
	String PaymentOP = "";
    String Amount = request.getParameter("UniqueID");
    String Type = request.getParameter("Type");
    String Prvnt = request.getParameter("Prvnt");
    String PRCSID = request.getParameter("PRCSID");
    Object time = session.getAttribute("LogSession");
   
    if (time == null)
      return "redirect:"; 
    ArrayList<String> Data = new ArrayList<String>();
	Data = GetDBData.Call(PRCSID, Prvnt, session.getAttribute("LogSession").toString(), session.getAttribute("UsrSession").toString(), session.getAttribute("CPMSession").toString(), "LSW_SSTORESESSION");
    OP = PAYTM.PaymentCall(Amount, Type, Prvnt, PRCSID,"WEB");
    String[] Reponse = OP.split("~");
    request.setAttribute("MID", Reponse[0]);
    request.setAttribute("ORDER_ID", Reponse[1]);
    request.setAttribute("CUST_ID", Reponse[2]);
    request.setAttribute("INDUSTRY_TYPE_ID", Reponse[3]);
    request.setAttribute("CHANNEL_ID", Reponse[4]);
    request.setAttribute("TXN_AMOUNT", Reponse[5]);
    request.setAttribute("WEBSITE", Reponse[6]);
    request.setAttribute("EMAIL", Reponse[7]);
    request.setAttribute("MOBILE_NO", Reponse[8]);
    request.setAttribute("CALLBACK_URL", Reponse[9]);
    request.setAttribute("CHECKSUMHASH", Reponse[10]);
    request.setAttribute("URL", Reponse[11]);
    if (OP.equals("Invalid Request"))
      throw new ServletException("Invalid Request..."); 
    return "Interface/PAYTM";
  }
  
  @RequestMapping(value = {"PAYTMONL"}, method = {RequestMethod.GET})
  public String PAYTMONL(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
   
	ArrayList<String> Data_LOG=new ArrayList<String>();  
	String OP = "";
    String PaymentOP = "";
    String Result="";
    String Amount = request.getParameter("UniqueID");
    String Type = request.getParameter("Type");
    String Prvnt = request.getParameter("Prvnt");
    String PRCSID = request.getParameter("PRCSID");
    String PFID = request.getParameter("PFID");
    
    Data_LOG = GetDBData.Call(PRCSID,PFID, "", "","","LSW_SCHKPAYSTS");
   
    Result = Data_LOG.get(0);
    if(Result.equals("Yes"))
    {
    PaymentOP = Paytmstatus.PaymentStatus(PRCSID, PFID);
    
    String[] PaytmReponse = PaymentOP.split("~");
    
    String PayResp = PaytmReponse[0];
    String PayCode = PaytmReponse[1]; 
    String PayMsg = PaytmReponse[2];
    
     System.out.println(PayResp);
     System.out.println(PayCode);
     System.out.println(PayMsg);
     
     if(PayCode.equals("01"))
     {
    	 ArrayList<String> Data1 = new ArrayList<String>();
    	 Data1 = GetDBData.Call(Amount, Type, Prvnt, PRCSID, "", "LSW_SGETPAYTMREDRCT");
 	    String ResultVal = ((String)Data1.get(0)).toString();
 	    request.setAttribute("ERRORMSG", Data1.get(1));
 	    
    	 return "Interface/PAYTMCHK";
     }
     else if(PayCode.equals("402"))
     {
      // String ResultVal = ((String)PayResp).toString();
  	    request.setAttribute("ERRORMSG", PayMsg);
     	 return "Interface/PAYTMCHK"; 
     }
     else 
     {
    	 ArrayList<String> Data = new ArrayList<String>();
    	    Data = GetDBData.Call(Amount, Type, Prvnt, PRCSID, "", "LSW_SGETPAYTMREDRCT");
    	    String ResultVal = ((String)Data.get(0)).toString();
    	    request.setAttribute("ERRORMSG", Data.get(1));
    	    if (ResultVal.equals("Yes")) {
    	        
    	      OP = PAYTM.PaymentCall(Amount, Type, Prvnt, PRCSID,"LINK");
    	      String[] Reponse = OP.split("~");
    	      ArrayList<String> Data1 = new ArrayList<String>();
    	      Data1 = GetDBData.Call(Amount, Type, Reponse[1], PRCSID, "INIT", "LSW_SPAYTMINITENTRY");
    	      request.setAttribute("MID", Reponse[0]);
    	      request.setAttribute("ORDER_ID", Reponse[1]);
    	      request.setAttribute("CUST_ID", Reponse[2]);
    	      request.setAttribute("INDUSTRY_TYPE_ID", Reponse[3]);
    	      request.setAttribute("CHANNEL_ID", Reponse[4]);
    	      request.setAttribute("TXN_AMOUNT", Reponse[5]);
    	      request.setAttribute("WEBSITE", Reponse[6]);
    	      request.setAttribute("EMAIL", Reponse[7]);
    	      request.setAttribute("MOBILE_NO", Reponse[8]);
    	      request.setAttribute("CALLBACK_URL", Reponse[9]);
    	      request.setAttribute("CHECKSUMHASH", Reponse[10]);
    	      request.setAttribute("URL", Reponse[11]);
    	      if (OP.equals("Invalid Request"))
    	        throw new ServletException("Invalid Request..."); 
    	      return "Interface/PAYTM";
    	    }
    	    return "Interface/PAYTMCHK";
     }
    }
   else
     {
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(Amount, Type, Prvnt, PRCSID, "", "LSW_SGETPAYTMREDRCT");
    String ResultVal = ((String)Data.get(0)).toString();
    request.setAttribute("ERRORMSG", Data.get(1));
    if (ResultVal.equals("Yes")) {
      OP = PAYTM.PaymentCall(Amount, Type, Prvnt, PRCSID,"LINK");
      String[] Reponse = OP.split("~");
      ArrayList<String> Data1 = new ArrayList<String>();
      Data1 = GetDBData.Call(Amount, Type, Reponse[1], PRCSID, "INIT", "LSW_SPAYTMINITENTRY");
      request.setAttribute("MID", Reponse[0]);
      request.setAttribute("ORDER_ID", Reponse[1]);
      request.setAttribute("CUST_ID", Reponse[2]);
      request.setAttribute("INDUSTRY_TYPE_ID", Reponse[3]);
      request.setAttribute("CHANNEL_ID", Reponse[4]);
      request.setAttribute("TXN_AMOUNT", Reponse[5]);
      request.setAttribute("WEBSITE", Reponse[6]);
      request.setAttribute("EMAIL", Reponse[7]);
      request.setAttribute("MOBILE_NO", Reponse[8]);
      request.setAttribute("CALLBACK_URL", Reponse[9]);
      request.setAttribute("CHECKSUMHASH", Reponse[10]);
      request.setAttribute("URL", Reponse[11]);
      if (OP.equals("Invalid Request"))
        throw new ServletException("Invalid Request..."); 
      return "Interface/PAYTM";
    } 
    return "Interface/PAYTMCHK";
     }
  }
  
  @RequestMapping(value = {"PAYTMRes/*"}, method = {RequestMethod.POST})
  public String PAYTMRes(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
      
    String OP = "";
    String CURRENCY = request.getParameter("CURRENCY");
    String GATEWAYNAME = request.getParameter("GATEWAYNAME");
    String RESPMSG = request.getParameter("RESPMSG");
    String BANKNAME = request.getParameter("BANKNAME");
    String PAYMENTMODE = request.getParameter("PAYMENTMODE");
    String MID = request.getParameter("MID");
    String RESPCODE = request.getParameter("RESPCODE");
    String TXNID = request.getParameter("TXNID");
    String TXNAMOUNT = request.getParameter("TXNAMOUNT");
    String ORDERID = request.getParameter("ORDERID");
    String STATUS = request.getParameter("STATUS");
    String BANKTXNID = request.getParameter("BANKTXNID");
    String TXNDATE = request.getParameter("TXNDATE");
    String CHECKSUMHASH = request.getParameter("CHECKSUMHASH");
    String DATAXML = "<DATA><ROW>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "<CURRENCY>" + CURRENCY + "</CURRENCY>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "<GATEWAYNAME>" + GATEWAYNAME + "</GATEWAYNAME>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "<RESPMSG>" + RESPMSG + "</RESPMSG>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "<BANKNAME>" + BANKNAME + "</BANKNAME>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "<PAYMENTMODE>" + PAYMENTMODE + "</PAYMENTMODE>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "<MID>" + MID + "</MID>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "<RESPCODE>" + RESPCODE + "</RESPCODE>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "<TXNID>" + TXNID + "</TXNID>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "<TXNAMOUNT>" + TXNAMOUNT + "</TXNAMOUNT>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "<ORDERID>" + ORDERID + "</ORDERID>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "<STATUS>" + STATUS + "</STATUS>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "<BANKTXNID>" + BANKTXNID + "</BANKTXNID>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "<TXNDATE>" + TXNDATE + "</TXNDATE>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "<CHECKSUMHASH>" + CHECKSUMHASH + "</CHECKSUMHASH>";
    DATAXML = String.valueOf(String.valueOf(DATAXML)) + "</ROW></DATA>";
    OP = PAYTM.PaymentCallRes(DATAXML, CHECKSUMHASH);

    if (OP.equals("Invalid Response"))
      throw new ServletException("Invalid Response..."); 
    return "redirect:" + OP;
  }
  
  @RequestMapping(value = {"PAYTMRes"}, method = {RequestMethod.GET})
  public String PAYTMRes1(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
	
	  Object time = session.getAttribute("LogSession");
	  
		if (time == null)
		{
			System.out.println(request.getParameter("PrMs1"));
			
			ArrayList<String> Data = new ArrayList<String>();
		    Data = GetDBData.Call(request.getParameter("PrMs1"), "", "", "", "", "LSW_SFETCHPAYTMSESSION");
		    if(Data.get(4).equals("WEB"))
		    {
			    session.setAttribute("LogSession", Data.get(0));
			    session.setAttribute("UsrSession", Data.get(1));
			    session.setAttribute("CPMSession", Data.get(2));
			    session.setAttribute("Prvnt", Data.get(3));
		    }
		}
	  
    String OP = "";
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(request.getParameter("PrMs1"), "", "", "", "", "LSW_SPAYTMResData");
    request.setAttribute("GATEWAYNAME", Data.get(0));
    request.setAttribute("BANKNAME", Data.get(1));
    request.setAttribute("TXNID", Data.get(2));
    request.setAttribute("BANKTXNID", Data.get(3));
    request.setAttribute("TXNAMOUNT", Data.get(4));
    request.setAttribute("TXNDATE", Data.get(5));
    request.setAttribute("Status", Data.get(6));
    request.setAttribute("Message", Data.get(7));
    return "Interface/PAYTMRes";
  }
 
  /* DMS Upload Start */
  
 @RequestMapping(value = {"/DMS"}, method = {RequestMethod.POST})
  @ResponseBody
  public String DMS(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    DMS getdata = new DMS();
    boolean isMultipart = ServletFileUpload.isMultipartContent(request);
    String PrcsID = request.getParameter("PrcsID");
    String FormName = request.getParameter("FormName");
    String names = request.getParameter("names");
    String descrptns = request.getParameter("descrptns");
    String flsize = request.getParameter("flsize");
    String vrsnno = request.getParameter("vrsnno");
    String usrpwd = request.getParameter("usrpwd");
    String domain = request.getParameter("domain");
    String CusID = request.getParameter("CusID");
    String DocName = request.getParameter("DocName");
    String DBSrc = request.getParameter("DBSrc");
    getdata.PrcsID(PrcsID);
    getdata.FormName(FormName);
    getdata.names(names);
    getdata.descrptns(descrptns);
    getdata.flsize(flsize);
    getdata.vrsnno(vrsnno);
    getdata.usrpwd(usrpwd);
    getdata.domain(domain);
    getdata.CusID(CusID);
    getdata.DocName(DocName);
    getdata.DBSrc(DBSrc);
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    String retval = getdata.DMSPUSH(request, response);
    
    return retval;
  }
  
  @RequestMapping(value = {"DMSVIEW"}, method = {RequestMethod.GET})
  @ResponseBody
  public void DMSVIEW(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    boolean isMultipart = ServletFileUpload.isMultipartContent(request);
    String PrcsID = request.getParameter("PrcsID");
    String DMSID = request.getParameter("DMSID");
    String DMSURL = "";
    String fileNAME = "";
    String format = "";
    String retval = "";
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(PrcsID, DMSID, "", "", "", "LSW_SDMSVIEW");
    DMSURL = Data.get(0);
    fileNAME = Data.get(1);
    format = Data.get(2);
    URL url = new URL(DMSURL);
    HttpURLConnection httpConn = (HttpURLConnection)url.openConnection();
    int responseCode = httpConn.getResponseCode();
    if (responseCode == 200) {
      ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
      byte[] chunk = new byte[4096];
      InputStream stream = httpConn.getInputStream();
      try {
        int bytesRead;
        while ((bytesRead = stream.read(chunk)) > 0)
          outputStream.write(chunk, 0, bytesRead); 
        stream.close();
        byte[] DocContent = outputStream.toByteArray();
        outputStream.close();
        response.setContentLength(DocContent.length);
        response.setHeader("Content-Disposition", "attachment; filename=" + fileNAME);
        ServletOutputStream servletOutputStream = response.getOutputStream();
        servletOutputStream.write(DocContent);
        servletOutputStream.flush();
        servletOutputStream.close();
      } catch (IOException e) {
        
        stream.close();
        outputStream.close();
        e.printStackTrace();
      } 
    } 
  }
  /* DMS Upload End */

  
 /* Internal Upload Start */
  /*@RequestMapping(value = { "/DMS" }, method = { RequestMethod.POST })
  @ResponseBody
  public String DMS(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
  //DMS getdata = new DMS();
  CommonModel.FileUploadHandler getdata = new CommonModel.FileUploadHandler();
  boolean isMultipart = ServletFileUpload.isMultipartContent(request);
  String PrcsID = request.getParameter("PrcsID");
  String FormName = request.getParameter("FormName");
  String names = request.getParameter("names");
  String descrptns = request.getParameter("descrptns");
  String flsize = request.getParameter("flsize");
  String vrsnno = request.getParameter("vrsnno");
  String usrpwd = request.getParameter("usrpwd");
  String domain = request.getParameter("domain");
  String CusID = request.getParameter("CusID");
  String DocName = request.getParameter("DocName");
  String DBSrc = request.getParameter("DBSrc");
  getdata.PrcsID(PrcsID);
  getdata.FormName(FormName);
  getdata.names(names);
  getdata.descrptns(descrptns);
  getdata.flsize(flsize);
  getdata.vrsnno(vrsnno);
  getdata.usrpwd(usrpwd);
  getdata.domain(domain);
  getdata.CusID(CusID);
  getdata.DocName(DocName);
  getdata.DBSrc(DBSrc);
  Object time = session.getAttribute("LogSession");
  if (time == null)
  return "redirect:";
  //String retval = getdata.DMSPUSH(request, response);
  String retval = getdata.FileUploadHandler(request, response);
  return retval;
  }
  

  @RequestMapping(value = { "DMSVIEW" }, method = { RequestMethod.GET })
  @ResponseBody
  public void DMSVIEW(HttpServletRequest request, HttpServletResponse response, HttpSession session)
  throws Exception {
  boolean isMultipart = ServletFileUpload.isMultipartContent(request);
  Properties prop = new Properties();
  String dmsType = "";
  String username = "";
  URL songPath = CommonModel.FileUploadHandler.class.getResource("");
  String[] pathArr = songPath.toString().split("file:/|/apache");
  FileInputStream fis = null;

  String Path = pathArr[1];
  fis = new FileInputStream(String.valueOf(Path) +"/wflow/app_datasource.properties");
  //fis = new FileInputStream("D:/Office Project/Chola/Build/Build Related/ThemeproLO_Works/Product/wflow/app_datasource.properties");
  if (fis != null) {
  prop.load(fis);
  dmsType = prop.getProperty("DMSTYPE");

  fis.close();
  } else {
  throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");

  }
  String PrcsID = request.getParameter("PrcsID");
  String DMSID = request.getParameter("DMSID");
  String DMSURL = "";
  String fileNAME = "";
  String format = "";
  String retval = "";
  ArrayList<String> Data = new ArrayList<String>();
  Data = GetDBData.Call(PrcsID, DMSID, "", "", "", "LSW_SDMSVIEW1");
  DMSURL = Data.get(0);
  fileNAME = Data.get(1);
     format = Data.get(2);
  InputStream stream;
  String encodedString = "";
  byte[] fileContent = null;
  if (dmsType.equals("SHARING")) {
  username = prop.getProperty("FEPUPLDUsername");
  fileContent = FileUtils.readFileToByteArray(new File(username + DMSURL));
  } else {
  String Sharingpath = prop.getProperty("UPLDPHYLOC");
  fileContent = FileUtils.readFileToByteArray(new File(Sharingpath + DMSURL));
  }
  ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
  byte[] chunk = new byte[4096];
  stream = new ByteArrayInputStream(fileContent);
  try {
  int bytesRead;
  while ((bytesRead = stream.read(chunk)) > 0)
  outputStream.write(chunk, 0, bytesRead);
  stream.close();
  byte[] DocContent = outputStream.toByteArray();
  outputStream.close();
  response.setContentLength(DocContent.length);
  response.setHeader("Content-Disposition", "attachment; filename=" + fileNAME);
  ServletOutputStream servletOutputStream = response.getOutputStream();
  servletOutputStream.write(DocContent);
  servletOutputStream.flush();
  servletOutputStream.close();
  } catch (IOException e) {

  stream.close();
  outputStream.close();
  e.printStackTrace();
  }
  }
  */
  /* Internal Upload End */
  
  @RequestMapping(value = {"POSIDEX"}, method = {RequestMethod.POST})
  @ResponseBody
  public String POSIDEX(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    String status = "";
    String Msg = "";
    String param1 = request.getParameter("PRCSID");
    String param2 = request.getParameter("CUSID");
    Object time = session.getAttribute("LogSession");
    if (time == null)
     return "redirect:"; 
    OP = POSIDEX.PosidexGet(param1, param2, "", "", "", "");
    String[] Reponse = OP.split("~");
    status = Reponse[0];
    Msg = Reponse[1];
    if (OP.equals("Invalid Request"))
      throw new ServletException("Invalid Request..."); 
    return String.valueOf(String.valueOf(status)) + "|" + Msg;
  }
  
  @RequestMapping(value = {"BRTOCRM"}, method = {RequestMethod.POST})
  @ResponseBody
  public String BRTOCRM(HttpServletRequest request, HttpServletResponse response) throws Exception, ClassNotFoundException {
    String FNname = "LSW_SBRTOSUITECRM";
    String SOURCE = request.getParameter("SOURCE");
    String TOKENID = request.getParameter("TOKENID");
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(SOURCE, TOKENID, "", "", "", "LSW_SBRTOSUITECRM");
    String Result = Data.get(0);
    return Result;
  }
  
//LAPCFA  START 12032021

	@RequestMapping(value = { "LAPCFACALL" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	@ResponseBody
	public String LAPCFACALL(HttpServletRequest request, HttpServletResponse response )
			throws Exception, ClassNotFoundException {
		
		
		String SPNAME = request.getParameter("SPNAME");
		String DATA1 = request.getParameter("DATA1");
		String TOKENID = request.getParameter("TOKENID");
		String DATA2 = request.getParameter("DATA2");
		String DATA3 = request.getParameter("DATA3");
		
		//String FNname = "LSW_SGETLABCFADATA ";

		ArrayList<String> Data=new ArrayList<String>();
		Data = GetDBData.Call( SPNAME, DATA1, TOKENID , DATA2 ,DATA3, SPNAME );
		String Result= Data.get(0);

			return Result ;
	
	}
	//LAPCFA  END
  
  @RequestMapping(value = {"MOBPOSIDEX"}, method = {RequestMethod.POST})
  @ResponseBody
  public String MOBPOSIDEX(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    String status = "";
    String Msg = "";
    String param1 = request.getParameter("PRCSID");
    String param2 = request.getParameter("CUSID");
    String finaloutput = "";
    Object time = session.getAttribute("LogSession");
    OP = POSIDEX.PosidexGet(param1, param2, "", "", "", "");
    String[] Reponse = OP.split("~");
    status = Reponse[0];
    Msg = Reponse[1];
    if (OP.equals("Invalid Request"))
      throw new ServletException("Invalid Request..."); 
    if (status.equals("Success")) {
      String FNname = "LSW_SDEDUPEAPI";
      ArrayList<String> Data = new ArrayList<String>();
      Data = GetDBData.Call(param1, param2, "", "", "", "LSW_SDEDUPEAPI");
      String str1 = finaloutput = Data.get(0);
    } else {
      finaloutput = "{\r\n   \"data1\":\"\",\r\n   \"data2\":\"\",\r\n   \"data3\":\"\",\r\n   \"data4\":\"\",\r\n   \"data5\":\"\",\r\n   \"status\":\"201\",\r\n   \"message\":\"FAILURE\"\r\n}";
    } 
    return finaloutput;
  }
  
  @RequestMapping(value = {"LMSCUS"}, method = {RequestMethod.POST})
  @ResponseBody
  public String LMSCUS(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    String status = "";
    String Msg = "";
    String param1 = request.getParameter("PRCSID");
    String param2 = request.getParameter("CUSID");
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    OP = LMSCUS.LMSCUSPUSH(param1, "", param2, "", "", "");
    String[] Reponse = OP.split("~");
    status = Reponse[0];
    Msg = Reponse[1];
    if (OP.equals("Invalid Request"))
      throw new ServletException("Invalid Request..."); 
    return String.valueOf(String.valueOf(status)) + "|" + Msg;
  }
  
  @RequestMapping(value = {"LMSPF"}, method = {RequestMethod.POST})
  @ResponseBody
  public String LMSPF(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    String status = "";
    String Msg = "";
    String param1 = request.getParameter("PRCSID");
    String param2 = request.getParameter("PFNO");
    String param3 = request.getParameter("RECEIPTNO");
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    OP = LMSPF.LMSPFPUSH(param1, param2, param3, "", "", "");
    String[] Reponse = OP.split("~");
    status = Reponse[0];
    Msg = Reponse[1];
    if (OP.equals("Invalid Request"))
      throw new ServletException("Invalid Request..."); 
    return String.valueOf(String.valueOf(status)) + "|" + Msg;
  }
  
  @RequestMapping(value = {"COLLECTIONS"}, method = {RequestMethod.POST})
  @ResponseBody
  public String COLLECIONS(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    String status = "";
    String Msg = "";
    String ReceiptNo = "";
    String FnlResp = "";
    String param1 = request.getParameter("PRCSID");
    String param2 = request.getParameter("PFNO");
    Object time = session.getAttribute("LogSession");
    if (time == null)
      return "redirect:"; 
    OP = COLLECTIONS.CollectionsPush(param1, param2, "", "", "", "");
    String[] Reponse = OP.split("~");
    status = Reponse[0];
    Msg = Reponse[1];
    ReceiptNo = Reponse[2];
    FnlResp = Reponse[3];
    if (OP.equals("Invalid Request"))
      throw new ServletException("Invalid Request..."); 
    return String.valueOf(String.valueOf(status)) + "|" + Msg + "|" + ReceiptNo + "|" + FnlResp;
  }
  
  @RequestMapping(value = {"MEmailVerfy"}, method = {RequestMethod.POST})
  @ResponseBody
  public String MEmailVerfy(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    Object time = session.getAttribute("LogSession");
    String param1 = request.getParameter("URL");
    String param2 = request.getParameter("PRCSID");
    String param3 = request.getParameter("CUSID");
    String param4 = request.getParameter("MAILID");
    String param5 = request.getParameter("PARAM5");
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(param1, param2, param3, param4, param5, "LSW_SFRMMAILOTP");
    String RPTURL = Data.get(0);
    String CC = Data.get(1);
    String BCC = Data.get(2);
    String subject = Data.get(3);
    String fromId = Data.get(4);
    String password = Data.get(5);
    String host = Data.get(6);
    String port = Data.get(7);
    String ERR_FLG = Data.get(8);
    String ERR_MSG = Data.get(9);
    String TOMAIL = Data.get(10);
    String retval = "";
    if (ERR_FLG.toString().equals("N")) {
      MailSendWthAttchRPTBdy MS = new MailSendWthAttchRPTBdy();
      String s1 = MS.Send(fromId, password, TOMAIL, CC, BCC, subject, RPTURL, String.valueOf(String.valueOf(host)) + "|" + port, "", "");
      return s1;
    } 
    retval = ERR_MSG;
    return retval;
  }
  
  @RequestMapping(value = {"MMailVerfy"}, method = {RequestMethod.GET})
  public String MMailVerfy(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String url = String.valueOf(String.valueOf(request.getScheme())) + "://" + request.getServerName() + ":" + request.getServerPort() + request.getRequestURI() + "?" + request.getQueryString();
    String Param1 = "";
    String Param2 = "";
    String Param3 = "";
    String Param4 = "";
    String Param5 = "";
    try {
      Pattern p = Pattern.compile("VERIFICATION=([^&]+)");
      Matcher m = p.matcher(url);
      while (m.find())
        Param1 = m.group(); 
      Param1 = Param1.replace("VERIFICATION=", "");
      p = Pattern.compile("ID1=([^&]+)");
      m = p.matcher(url);
      while (m.find())
        Param2 = m.group(); 
      Param2 = Param2.replace("ID1=", "");
      p = Pattern.compile("ID2=([^&]+)");
      m = p.matcher(url);
      while (m.find())
        Param3 = m.group(); 
      Param3 = Param3.replace("ID2=", "");
      p = Pattern.compile("ID3=([^&]+)");
      m = p.matcher(url);
      while (m.find())
        Param4 = m.group(); 
      Param4 = Param4.replace("ID3=", "");
      ArrayList<String> Data = new ArrayList<String>();
      Data = GetDBData.Call(Param1, Param2, Param3, Param4, "", "LSW_SVERFYMAILOTP");
      String RPTURL = Data.get(0);
      request.setAttribute("RPTURL", Data.get(0));
    } catch (PatternSyntaxException patternSyntaxException) {}
    return "Interface/EmailVerify";
  }
  
  @RequestMapping(value = {"MVerifyMail"}, method = {RequestMethod.POST})
  @ResponseBody
  public String MVerifyMail(HttpServletRequest request, HttpServletResponse response) throws Exception, ClassNotFoundException {
    String FNname = "LSW_SEMAILVERIFY";
    String PrcsID = request.getParameter("PrcsID");
    String EMAILID = request.getParameter("EMAILID");
    String CUSID = request.getParameter("CUSID");
    ArrayList<String> Data = new ArrayList<String>();
    Data = GetDBData.Call(PrcsID, CUSID, EMAILID, "", "", "LSW_SEMAILVERIFY");
    String Result = Data.get(0);
    if (Result.equals("Y"))
      return Result; 
    return "N";
  }
  
  @RequestMapping(value = {"CusGen"}, method = {RequestMethod.POST}, headers = {"content-type=application/json"})
  @ResponseBody
  public String CusGen(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    String status = "";
    String Msg = "";
    String ReceiptNo = "";
    String param1 = request.getParameter("Cus");
    String param2 = request.getParameter("APP");
    String param3 = request.getParameter("UserID");
    String param4 = request.getParameter("Password");
    OP = CusGen.IDGeneration(param1, param2, param3, param4, "", "");
    if (OP.equals("Invalid Request"))
      throw new ServletException("Invalid Request..."); 
    return OP;
  }
  
  @RequestMapping(value = {"ApplicantPush"}, method = {RequestMethod.POST})
  @ResponseBody
  public String ApplicantPush(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    String status = "";
    String Msg = "";
    String ReceiptNo = "";
    String param1 = request.getParameter("Cus");
    String param2 = request.getParameter("APP");
    OP = ApplicantPush.Creation(param1, param2, "", "", "", "");
    if (OP.equals("Invalid Request"))
      throw new ServletException("Invalid Request..."); 
    return OP;
  }
  
  @RequestMapping(value = {"MTotalKyc"}, method = {RequestMethod.POST})
  @ResponseBody
  public String MTotalKyc(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    MTotalKyc getdata = new MTotalKyc();
    String JSONval = request.getParameter("JSONval");
    String DBSrc = request.getParameter("DBSrc");
    getdata.JSONval(JSONval);
    getdata.DBSrc(DBSrc);
    String retval = getdata.TotlKyc();
    return retval;
  }
   
  @RequestMapping(value = {"OPAWaiver"}, method = {RequestMethod.POST})
  @ResponseBody
  public String OPAWaiver(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    String status = "";
    String Msg = "";
    String ReceiptNo = "";
    String param1 = request.getParameter("PRCSID");
    String param2 = request.getParameter("OPANO");
    OP = OPA.OPAWaiver(param1, param2, "", "", "", "");
    if (OP.equals("Invalid Request"))
      throw new ServletException("Invalid Request..."); 
    return OP;
  }
  
  @RequestMapping(value = {"OPADeviations"}, method = {RequestMethod.POST})
  @ResponseBody
  public String OPADeviations(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    String status = "";
    String Msg = "";
    String ReceiptNo = "";
    String param1 = request.getParameter("PRCSID");
    String param2 = request.getParameter("OPANO");
    OP = OPA.OPADeviations(param1, param2, "", "", "", "");
    if (OP.equals("Invalid Request"))
      throw new ServletException("Invalid Request..."); 
    return OP;
  }
  
  @RequestMapping(value = {"OPASMEDeviations"}, method = {RequestMethod.POST})
  @ResponseBody
  public String OPASMEDeviations(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
	  SmeDeviation getdata = new SmeDeviation();
	    String PRCSID = request.getParameter("PRCSID");
	    String Param2 = request.getParameter("Param2");
	    String Param3 = request.getParameter("Param3");
	    String Param4 = request.getParameter("Param4");
	    String Param5 = request.getParameter("Param5");
	    String SPNAME = request.getParameter("SPNAME");
	   
	   
	    String Prvnt = request.getParameter("Prvnt");
//	    getdata.JSONval(JSONval);
//	    getdata.DBSrc(DBSrc);
	    Object time = session.getAttribute("LogSession");
	   
	    
	 //   if (time == null)
	    // return "redirect:"; 
	    String retval = getdata.SmeDeviationCall(SPNAME,PRCSID,Param2,Param3,Param4,Param5);
	    return retval;
  }
  
  @RequestMapping(value = {"OPASMEWaiver"}, method = {RequestMethod.POST})
  @ResponseBody
  public String OPASMEWaiver(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    String status = "";
    String Msg = "";
    String ReceiptNo = "";
    String param1 = request.getParameter("PRCSID");
    String param2 = request.getParameter("OPANO");
    OP = OPA.OPAWaiver(param1, param2, "", "", "", "");
    if (OP.equals("Invalid Request"))
      throw new ServletException("Invalid Request..."); 
    return OP;
  }
  
  @RequestMapping(value = {"/InsrncePrmeium"}, method = {RequestMethod.POST})
  @ResponseBody
  public String InsrncePrmeium(HttpServletRequest request, HttpServletResponse response) throws Exception, ClassNotFoundException {
    InsrncePrmeium InsrncePrmeium = new InsrncePrmeium();
    String param1 = request.getParameter("param1");
    String param2 = request.getParameter("param2");
    String param3 = request.getParameter("param3");
    String param4 = request.getParameter("param4");
    String param5 = request.getParameter("param5");
    String DBSrc = request.getParameter("DBSrc");
    String spname1 = request.getParameter("spname1");
    String spname2 = request.getParameter("spname2");
    InsrncePrmeium.param1(param1);
    InsrncePrmeium.param2(param2);
    InsrncePrmeium.param3(param3);
    InsrncePrmeium.param4(param4);
    InsrncePrmeium.param5(param5);
    InsrncePrmeium.spname1(spname1);
    InsrncePrmeium.spname2(spname2);
    return InsrncePrmeium.InsrncePrmeium();
  }
  
  @RequestMapping(value = {"Logout"}, method = {RequestMethod.GET})
  public String Logout(Locale locale, Model model, HttpSession session) {
    logger.info("Welcome home! The client locale is {}.", locale);
    session.removeAttribute("LogSession");
    session.removeAttribute("csrfPreventionSaltCache");
    session.removeAttribute("User");
    session.removeAttribute("CPM");
    session.removeAttribute("CURL");
    return "Common/Pages/Userview/Logout";
  }
  
  @RequestMapping(value = {"/SessionLogout"}, method = {RequestMethod.POST})
  @ResponseBody
  public String SessionLogout(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    UI_GetData getdata = new UI_GetData();
    String param1 = request.getParameter("param1");
    String param2 = request.getParameter("param2");
    String param3 = request.getParameter("param3");
    String param4 = request.getParameter("param4");
    String param5 = request.getParameter("param5");
    String spname = request.getParameter("spname");
    String DBSrc = request.getParameter("DBSrc");
    getdata.param1(param1);
    getdata.param2(param2);
    getdata.param3(param3);
    getdata.param4(param4);
    getdata.param5(param5);
    getdata.spname(spname);
    getdata.DBSrc(DBSrc);
    String retval = getdata.UI_GetData1();
    session.setAttribute("LogSession1", retval);
    session.removeAttribute("LogSession1");
    return retval;
  }
  
  /*@RequestMapping(value = {"Mformdatains"}, method = {RequestMethod.POST})
  @ResponseBody
  public String Mformdatains(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    UI_formdatainsert getdata = new UI_formdatainsert();
    String xml = request.getParameter("xml");
    String tablenameins = request.getParameter("tablenameins");
    String tablenameins2 = request.getParameter("tablenameins1");
    String activityid = request.getParameter("activityid");
    String activityname = request.getParameter("activityname");
    String DBSrc = request.getParameter("DBSrc");
    getdata.xml(xml);
    getdata.tablenameins(tablenameins);
    getdata.tablenameins1(tablenameins2);
    getdata.activityid(activityid);
    getdata.activityname(activityname);
    getdata.DBSrc(DBSrc);
    String retval = getdata.UI_formdatainsertdata();
    return retval;
  }*/
  
  @RequestMapping(value = {"MOBCOLLECTIONS"}, method = {RequestMethod.POST})
  @ResponseBody
  public String MCOLLECTIONS(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    String OP = "";
    String status = "";
    String Msg = "";
    String ReceiptNo = "";
    String FnlResp = "";
    String param1 = request.getParameter("PRCSID");
    String param2 = request.getParameter("PFNO");
    String param3 = request.getParameter("RECEIPTNO");
    Object time = session.getAttribute("LogSession");
    String Cusfailure = "Customer Creation/Updation failed";
    String Colfailure = "Collections failed";
    String Finaloutput = "";
    OP = LMSPF.LMSPFPUSH(param1, param2, param3, "", "", "");
    String[] Reponse = OP.split("~");
    status = Reponse[0];
    Msg = Reponse[1];
    String OUTPUTCUS = String.valueOf(String.valueOf(status)) + "|" + Msg;
    if (OP.equals("Invalid Request"))
      return "|||Customer Creation/Updation failed"; 
    if (OUTPUTCUS.equals(""))
      return "|||Customer Creation/Updation failed"; 
    if (status.equals("Fail"))
      return "|||" + Msg; 
    if (status.equals("No Data"))
      return "|||Customer Creation/Updation failed"; 
    if (status.equals("Success")) {
      OP = COLLECTIONS.CollectionsPush(param1, param2, "", "", "", "");
      String[] Reponse2 = OP.split("~");
      status = Reponse2[0];
      Msg = Reponse2[1];
      ReceiptNo = Reponse2[2];
      FnlResp = Reponse2[3];
      if (OP.equals("Invalid Request"))
        return "|||Collections failed"; 
      Finaloutput = String.valueOf(String.valueOf(status)) + "|" + Msg + "|" + ReceiptNo + "|" + FnlResp;
    } 
    return Finaloutput;
  }
  
  @RequestMapping(value = {"/ADVASMART"}, method = {RequestMethod.POST})
  @ResponseBody
  public String ADVASMART(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    Object time = session.getAttribute("LogSession");
    String s1 = "";
    if (time == null)
      return "redirect:"; 
    String param1 = request.getParameter("PRCSID");
    String param2 = request.getParameter("PROPNO");
    String param3 = request.getParameter("PARAM3");
    String param4 = request.getParameter("PARAM4");
    String param5 = request.getParameter("REQTYP");
    String SPNAME = request.getParameter("SPNAME");
    ADVASMART ADVASMART = new ADVASMART();
    s1 = ADVASMART.CheckReqRS(param1, param2, param3, param4, param5, SPNAME);
    return s1;
  }
  
  @RequestMapping(value = {"/ADVASMARTMSTR"}, method = {RequestMethod.POST})
  @ResponseBody
  public String ADVASMARTMSTR(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
    Object time = session.getAttribute("LogSession");
    String s1 = "";
    if (time == null)
      return "redirect:"; 
    String param1 = request.getParameter("PARAM1");
    String param2 = request.getParameter("PARAM2");
    String param3 = request.getParameter("PARAM3");
    String param4 = request.getParameter("PARAM4");
    String param5 = request.getParameter("PARAM5");
    String SPNAME = request.getParameter("SPNAME");
    ADVASMART ADVASMART = new ADVASMART();
    s1 = ADVASMART.ADVASMARTMSTR(param1, param2, param3, param4, param5, SPNAME);
    return s1;
  }
  
  @RequestMapping(value = { "/sendSMS" }, method = { RequestMethod.POST })
  @ResponseBody
  public String sendSMS(final HttpServletRequest request, final HttpServletResponse response) throws Exception, ClassNotFoundException {
      final sendSMS SndSMS = new sendSMS();
      
      final String Output="Success||";
      
      final String param1 = request.getParameter("param1");
      final String param2 = request.getParameter("param2");
      final String param3 = request.getParameter("param3");
      final String param4 = request.getParameter("param4");
      final String param5 = request.getParameter("param5");
      final String DBSrc = request.getParameter("DBSrc");
      final String spname1 = request.getParameter("spname1");
      final String spname2 = request.getParameter("spname2");
      SndSMS.param1(param1);
      SndSMS.param2(param2);
      SndSMS.param3(param3);
      SndSMS.param4(param4);
      SndSMS.param5(param5);
      SndSMS.spname1(spname1);
      SndSMS.spname2(spname2);
      
      ArrayList<String> Data=new ArrayList<String>();
  	Data = GetDBData.Call( "OTP", "", "" , "" ,"", "LSW_SCHKINTGSTATUS");
  	String Result= Data.get(0);
  	   if (Result.equals ("Active")) 
  	   {
  	     return SndSMS.SendSMSMain();
  	   }
  	   else
  	   {
  		  return Output;
  	   }
      
      //return SndSMS.SendSMSMain();
  }
  
  
//Multi Sheet Excel Download Start Date:05092020
			@RequestMapping(value={"/MultiShtExcelDwnld"},	method={org.springframework.web.bind.annotation.RequestMethod.GET})
			@ResponseBody public void MultiShtExcelDwnld(HttpServletRequest request,HttpServletResponse response,HttpSession session   )
					          throws Exception
					        {
					          String param1 = request.getParameter("param1");
					          String param2 = request.getParameter("param2");
					          String param3 = request.getParameter("param3");
					          String param4 = request.getParameter("param4");
					          String param5 = request.getParameter("param5");
					          String param6 = request.getParameter("param6");
					          String param7 = request.getParameter("param7");
					          String param8 = request.getParameter("param8");
					          String spname = request.getParameter("spname");
					          String FName = request.getParameter("FName");
					          String FExtsn = request.getParameter("FExtsn");
					          String DBSrc = request.getParameter("DBSrc");
					                  DecimalFormat df2 = new DecimalFormat(".##");
					                  double valueF;
					                  TimeZone TIME_ZONE = null;
					                  DBSrc=null;
					                  ByteArrayInputStream excelStream = null;
					                  byte[] file = null;

					                  ByteArrayOutputStream outByteStream=null;
					                  Connection connection =null;
					                  PreparedStatement proc_stmt=null;
					                  ResultSet resultSet=null;
					                  String Sheet="";
					                  SXSSFWorkbook wb = null;
					                  SXSSFSheet[] personSheet=new SXSSFSheet[10];
					              	
					                  ArrayList<String> Data =(ArrayList<String>)GetDBData.Call(param1,param2, param3, param4,param5,	"LSW_SGETEXCELSHEETDATA");
					                  try
					                  {
					                  if(connection==null) {
					                  connection= DBConnection.getConnection(DBSrc);
					                  }
					                  System.out.println("Executing SP...");
					                  proc_stmt = connection.prepareStatement("{ call " + spname+ "(?,?,?,?,?,?,?,?) }");
					                  proc_stmt.setString(1, param1);
					                  proc_stmt.setString(2, param2);
					                  proc_stmt.setString(3, param3);
					                  proc_stmt.setString(4, param4);
					                  proc_stmt.setString(5, param5);
					                  proc_stmt.setString(6, param6);
					                  proc_stmt.setString(7, param7);
					                  proc_stmt.setString(8, param8);
					                  //resultSet = proc_stmt.executeQuery();
					                  String[] SheetVal =Data.get(0).toString().split(",", -2);
					                  boolean isResultSet = proc_stmt.execute();
					                  int count = 0;
					                  while(true) {
					                      if(isResultSet) {
					                    	  resultSet = proc_stmt.getResultSet();
					                          while(resultSet.next()) {
					                        	  Sheet=SheetVal[count];			 			                 
								                  ResultSetMetaData rsmd = resultSet.getMetaData();
								                  System.out.println("SP Executed...");
								                  if(count==0)
								                  {
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
								      			  int i,j,type;
								      			  String chk;
								                  int colCount = rsmd.getColumnCount();
								                  for (i = 1; i <= colCount; i++)
								                  {
								                  chk= rsmd.getColumnName(i);
								                  
								                  
								                  //headerCellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

								                  //style.setFillPattern(FillPatternType.BIG_SPOTS);
								                  headerRow.createCell(i-1);
								                  
								                  
								                  if(chk.contains("***")==true)
								                  {
								                   headerRow.getCell(i-1).setCellStyle(style);
								                  chk=chk.replace("***", "");
								                  headerRow.getCell(i-1).setCellValue(chk);
								                  }
								                  else
								                  {
								                  headerRow.getCell(i-1).setCellValue(chk);  
								                  }
								                  
								                  }

								                  System.out.println("Header Row Created...");
								                  j=1;
								                  while(resultSet.next())
								                  {
								                  headerRow = personSheet[count].createRow(j);
								                  for (i = 1; i <= colCount; i++)
								                  {
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
								                  }
								                  else
								                  {
								                	   headerRow.createCell(i - 1).setCellValue(resultSet.getString(i));
								                  }
								                  }
								                  if(j%100==0)    	
								                	  System.out.println("Rows Bind : "+j);
								                  j++; 
								                  }
								                  
					                          }
					                      } else {
					                          if(proc_stmt.getUpdateCount() == -1) {
					                              break;
					                          }
					                      }
					                      count ++;
					                      isResultSet = proc_stmt.getMoreResults();
					                  }
					                  
					                  FName=FName+"."+FExtsn;
					                    String contentType = null;
					                    if (FName.endsWith("xlsx")) {
					                        contentType = "application/octet-stream";
					                    } else if (FName.endsWith("pdf")) {
					                        contentType = "application/pdf";
					                    } else {
					                        throw new RuntimeException("File type not found");
					                    }
					                  
					                    outByteStream = new ByteArrayOutputStream();
					                    wb.write(outByteStream);
					                     excelStream = new ByteArrayInputStream(outByteStream.toByteArray());
					                     file = outByteStream.toByteArray();
					                   	 resultSet.close();			                  
					                     response.setHeader("Content-Disposition", "attachment;filename=" + FName);
					                     OutputStream outStream = response.getOutputStream();
					                     outStream.write(file);
					                     outStream.flush();
					                     outStream.close();
					                     outByteStream.close();
					            }
					            catch(Exception ex){
					                  System.out.println("Exception in Excel Download");
					                  ex.printStackTrace();   
					            }
					            finally
					            {
					                  //DBConnection.closeConnectionCall(connection, proc_stmt,resultSet);
					                  proc_stmt.close();
					                  connection.commit();
					                  resultSet.close();           
					                  connection.close();
					            }

					        }

			// Multi Sheet Excel Download End Date:05092020	
			@RequestMapping(value={"/ExcelMultiDynmcUpld"}, method={org.springframework.web.bind.annotation.RequestMethod.POST})
			  @ResponseBody
			  public String ExcelMultiDynmcUpld(HttpServletRequest request, HttpServletResponse response,HttpSession session)
			    throws Exception
			  {
				ExcelMultiDynmcUpld getdata = new ExcelMultiDynmcUpld();
			    boolean isMultipart = ServletFileUpload.isMultipartContent(request);
			    String param1 = request.getParameter("param1");
			    String param2 = request.getParameter("param2");
			    String param3 = request.getParameter("param3");
			    String param4 = request.getParameter("param4");
			    String param5 = request.getParameter("param5");
			    String DBSrc = request.getParameter("DBSrc");
			   
			    getdata.param1(param1);
			    getdata.param2(param2);
			    getdata.param3(param3);
			    getdata.param4(param4);
			    getdata.param5(param5);
			    getdata.DBSrc(DBSrc);
			   
			    Object time = session.getAttribute("LogSession");
			    if (time == null) {
			    	String retval = getdata.ExcelMultiDynmcUpld(request, response);
				    return retval;
				    
			  //  return "redirect:";
			    }
			    else
			    {
			    String retval = getdata.ExcelMultiDynmcUpld(request, response);
			    return retval;
			    }
			  }
			
			@RequestMapping(value = {"/InsrncePrmeiumICICI"}, method = {RequestMethod.POST})
			   @ResponseBody
			   public String InsrncePrmeiumICICI(HttpServletRequest request, HttpServletResponse response) throws Exception, ClassNotFoundException {
				InsrncePrmeiumICICI InsrncePrmeiumICICI = new InsrncePrmeiumICICI();
			 	 String param1 = request.getParameter("param1");
			     String param2 = request.getParameter("param2");
			     String param3 = request.getParameter("param3");
			     String param4 = request.getParameter("param4");
			     String param5 = request.getParameter("param5");
			     String DBSrc = request.getParameter("DBSrc");
			     String spname1 = request.getParameter("spname1");
			     String spname2 = request.getParameter("spname2");
			     InsrncePrmeiumICICI.param1(param1);
			     InsrncePrmeiumICICI.param2(param2);
			     InsrncePrmeiumICICI.param3(param3);
			     InsrncePrmeiumICICI.param4(param4);
			     InsrncePrmeiumICICI.param5(param5);
			     InsrncePrmeiumICICI.spname1(spname1);
			     InsrncePrmeiumICICI.spname2(spname2);
			 	  
			 	  
			     return InsrncePrmeiumICICI.ICICInsrncePrmeium();
			   }
			
			@RequestMapping(value = { "/InsrncePrmeiumICICIISSUE" }, method = { RequestMethod.POST })
		    @ResponseBody
		    public String InsrncePrmeiumICICIISSUE(final HttpServletRequest request, final HttpServletResponse response) throws Exception, ClassNotFoundException {
		        final InsrncePrmeiumICICIISSUE InsrncePrmeiumICICIISSUE = new InsrncePrmeiumICICIISSUE();
		        final String param1 = request.getParameter("param1");
		        final String param2 = request.getParameter("param2");
		        final String param3 = request.getParameter("param3");
		        final String param4 = request.getParameter("param4");
		        final String param5 = request.getParameter("param5");
		        final String DBSrc = request.getParameter("DBSrc");
		        final String spname1 = request.getParameter("spname1");
		        final String spname2 = request.getParameter("spname2");
		        InsrncePrmeiumICICIISSUE.param1(param1);
		        InsrncePrmeiumICICIISSUE.param2(param2);
		        InsrncePrmeiumICICIISSUE.param3(param3);
		        InsrncePrmeiumICICIISSUE.param4(param4);
		        InsrncePrmeiumICICIISSUE.param5(param5);
		        InsrncePrmeiumICICIISSUE.spname1(spname1);
		        InsrncePrmeiumICICIISSUE.spname2(spname2);
		        return InsrncePrmeiumICICIISSUE.ICICInsrncePrmeium();
		    }
			
			// MS Insurance start -- 02022021
			@RequestMapping(
		            value = {"/MSInsrncePrmeium"},
		            method = {RequestMethod.POST}
		         )
		         @ResponseBody
		         public String MSInsrncePrmeium(HttpServletRequest request, HttpServletResponse response) throws Exception, ClassNotFoundException {

		            MSInsrncePrmeium MSInsrncePrmeium = new MSInsrncePrmeium();
		            String param1 = request.getParameter("param1");
		            String param2 = request.getParameter("param2");
		            String param3 = request.getParameter("param3");
		            String param4 = request.getParameter("param4");
		            String param5 = request.getParameter("param5");
		            String param6 = request.getParameter("param6");
		            String param7 = request.getParameter("param7");
		            String DBSrc = request.getParameter("DBSrc");
		            String spname1 = request.getParameter("spname1");
		            String spname2 = request.getParameter("spname2");
		            
		            MSInsrncePrmeium.param1(param1);
		            MSInsrncePrmeium.param2(param2);
		            MSInsrncePrmeium.param3(param3);
		            MSInsrncePrmeium.param4(param4);
		            MSInsrncePrmeium.param5(param5);
		            MSInsrncePrmeium.param6(param6);
		            MSInsrncePrmeium.param7(param7);
		            MSInsrncePrmeium.spname1(spname1);
		            MSInsrncePrmeium.spname2(spname2);
		            return MSInsrncePrmeium.MSInsrncePrmeium();

		         }
			// MS Insurance end -- 02022021
			
			//CERSAI DOWNLOAD QUERY 07112020
			@RequestMapping(value = {
			    "/CersaiDwnlod"
			}, method = {
			    org.springframework.web.bind.annotation.RequestMethod.GET
			})
			@ResponseBody public void CersaiDwlnd(HttpServletRequest request, HttpServletResponse response, HttpSession session)
			throws Exception {
			    String param1 = request.getParameter("param1");
			    String param2 = request.getParameter("param2");
			    String param3 = request.getParameter("param3");
			    String param4 = request.getParameter("param4");
			    String param5 = request.getParameter("param5");
			    String spname = request.getParameter("spname");
			    String FName = request.getParameter("FName");
			    String FExtsn = request.getParameter("FExtsn");
			    String DBSrc = request.getParameter("DBSrc");

			    ByteArrayOutputStream outByteStream = null;
			    Connection connection = null;
			    PreparedStatement proc_stmt = null;
			    ResultSet resultSet = null;
			    try {
			        if (connection == null) {
			            connection = DBConnection.getConnection(DBSrc);
			        }
			        System.out.println("Executing SP...");
			        proc_stmt = connection.prepareStatement("{ call " + spname + "(?,?,?,?,?) }");
			        proc_stmt.setString(1, param1);
			        proc_stmt.setString(2, param2);
			        proc_stmt.setString(3, param3);
			        proc_stmt.setString(4, param4);
			        proc_stmt.setString(5, param5);
			        resultSet = proc_stmt.executeQuery();
			        System.out.println("SP Executed...");
			        FName = FName + "." + FExtsn;
			        String contentType = null;
			        
			        if (FName.endsWith("dat")) 
			        {
			            contentType = "application/dat";
			        }
			      else  if (FName.endsWith("txt")) 
			         {
			            contentType = "text/plain";
			         }
			      else 
			        {
			            throw new RuntimeException("File type not found");
			        }

			        byte[] dataBytes = null;
			        response.setHeader("Content-Disposition", "attachment;filename=" + FName);

			        OutputStream outStream = response.getOutputStream();

			        while ((resultSet != null) && (resultSet.next())) {


			            dataBytes = resultSet.getString("Result").getBytes();
			            outStream.write(dataBytes);
			        }




			        resultSet.close();

			        outStream.flush();
			        outStream.close();
			        outByteStream.close();
			    } finally {
			        //DBConnection.closeConnectionCall(connection, proc_stmt,resultSet);
			        proc_stmt.close();
			        connection.commit();
			        resultSet.close();
			        connection.close();
			    }

			}
			
			//MOBILITY START

			
			//MOBILITY COLLECIONS START
			@RequestMapping(value = { "MCOLLECTIONS" }, method = {

			       org.springframework.web.bind.annotation.RequestMethod.POST })

			@ResponseBody

			public String MCOLLECIONS(HttpServletRequest request, HttpServletResponse response, HttpSession session)

			         throws Exception {

			   String OP = "";

			   String status = "";

			   String Msg = "";

			   String ReceiptNo ="";

			   String FnlResp="";

			   String param1 = request.getParameter("PRCSID");

			   String param2 = request.getParameter("PFNO");

			   Object time = session.getAttribute("LogSession");



			         OP = COLLECTIONS.CollectionsPush(param1,param2,"","","","");
			         String Reponse[] = OP.split("~");

			         status=Reponse[0];

			         Msg=Reponse[1];

			         ReceiptNo=Reponse[2];

			         FnlResp=Reponse[3];
			         if (OP.equals("Invalid Request")) {

			                throw new ServletException("Invalid Request...");

			         }

			         return  status+ "|" + Msg + "|" + ReceiptNo + "|" + FnlResp;           

			         //return "PAYTM";

			   // return null;
			}
			//MOBILITY COLLECIONS END


			//MOBILITY OTPSEND START
			@RequestMapping(value = { "MsendSMS" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
			@ResponseBody
			public String MsendSMS(HttpServletRequest request, HttpServletResponse response)
					throws Exception, ClassNotFoundException {

				sendSMS SndSMS = new sendSMS();

				String param1 = "";
				String param2 = "";
				String param3 = request.getParameter("MobNo");
				String param4 = "";
				String param5 = "";
				String Output = "Success||";
				//String DBSrc = request.getParameter("DBSrc");
				String spname1 = "SAM_SgetRecepientDataToSMSFrOTP";
				String spname2 = "LSW_supdateSMSstatus";

				SndSMS.param1(param1);
				SndSMS.param2(param2);
				SndSMS.param3(param3);
				SndSMS.param4(param4);
				SndSMS.param5(param5);
				SndSMS.spname1(spname1);
				SndSMS.spname2(spname2);
			   
				
				ArrayList<String> Data=new ArrayList<String>();
				Data = GetDBData.Call( "OTP", "", "" , "" ,"", "LSW_SCHKINTGSTATUS");
				String Result= Data.get(0);
				if (Result.equals ("Active"))  
				   {
				return SndSMS.SendSMSMain();
				   }
				   else
				   {
					  return Output;
				   }
			}


			//MOBILITY OTPSEND END

			//MOBILITY OTPVERIFY START
			@RequestMapping(value = { "MverifySMS" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
			@ResponseBody
			public String MverifySMS(HttpServletRequest request, HttpServletResponse response)
					throws Exception, ClassNotFoundException {
				
				
				String FNname = "SCF_sValdtOTP";
				String OTP = request.getParameter("OTP");
				String MobNo = request.getParameter("MobNo");;

				
				ArrayList<String> Data=new ArrayList<String>();
				Data = GetDBData.Call( "","", OTP, MobNo ,"", FNname );
				String Result= Data.get(0);

				return Result ;
					
			}
			//MOBILITY OTPVERIFY END

			@RequestMapping(value = { "Mformdatains" }, method = {
				org.springframework.web.bind.annotation.RequestMethod.POST })
				@ResponseBody
				public String Mformdatains(HttpServletRequest request, HttpServletResponse response, HttpSession session, @RequestBody String json)
						throws Exception {
					UI_formdatainsert getdata = new UI_formdatainsert();
					
					String xml;

					String tablenameins = request.getParameter("tablenameins");
					
					if (tablenameins.equals("LSW_TUPLOADDOCUMENT")) 
					{
						 xml = json ;	
					}
					else
					{
						 xml = request.getParameter("xml");
					}
					

					String tablenameins1 = request.getParameter("tablenameins1");

					String activityid = request.getParameter("activityid");

					String activityname = request.getParameter("activityname");

					String DBSrc = request.getParameter("DBSrc");

					getdata.xml(xml);

					getdata.tablenameins(tablenameins);

					getdata.tablenameins1(tablenameins1);

					getdata.activityid(activityid);

					getdata.activityname(activityname);

					getdata.DBSrc(DBSrc);


					

						String retval = getdata.UI_formdatainsertdata();

						return retval;
					
				}
				
				
				//MOBILITY DATA INSERT END
				
				
				
					
					
					// MOBILITY CIBIL START

			@RequestMapping(value = { "MCIBIL" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
			@ResponseBody
			public String MCIBIL(HttpServletRequest request, HttpServletResponse response, HttpSession session)
					throws Exception {
				CIBILIntegration getdata = new CIBILIntegration();

				String appno = request.getParameter("appno");
				String cusid = request.getParameter("cusid");
				String DBSrc = request.getParameter("DBSrc");

				getdata.appno(appno);
			    getdata.cusid(cusid);
			    getdata.DBSrc(DBSrc);


					String retval = getdata.CIBIL();
					
					String FNname = "LSW_SMCIBIL";
					ArrayList<String> Data=new ArrayList<String>();
					Data = GetDBData.Call( retval, appno , cusid , "" ,"", FNname );
					String Result= Data.get(0);

					 
					
					return Result;

			}

			// MOBILITY CIBIL END


			//MOBILITY PAYTMINITIATE START

			@RequestMapping(value = { "PAYTMINITIATE" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
			@ResponseBody
			public String PAYTMINITIATE(HttpServletRequest request, HttpServletResponse response, HttpSession session)
					throws Exception {

				String UniqueID = request.getParameter("UNIQUEID");
				String Amount = request.getParameter("Amount");
				String Type = request.getParameter("Type");
				String Prvnt = request.getParameter("Prvnt");
				String PRCSID = request.getParameter("PRCSID");
				String OriginURL ="" ;
				String dbhitfn ="LSW_SPAYTMINITIATE";
				String FNname ="LSW_SSENDPAYMNTLINK";
				String PFID= UniqueID ;
				UniqueID="Paytm"+",PF," + UniqueID ;
				String URL = "/TPLSW/PAYTMONL?UniqueID="+Amount+"&Type="+UniqueID+"&PRCSID="+PRCSID+"&Prvnt="+Prvnt+"&PFID="+PFID;
				
				
				ArrayList<String> Data0=new ArrayList<String>();
				Data0 = GetDBData.Call( PRCSID, UniqueID, Amount , Type , URL , dbhitfn );
				String Result0= Data0.get(0);
				OriginURL =Result0 ;
				
				
				 URL = OriginURL +"/TPLSW/PAYTMONL?UniqueID="+Amount+"&Type="+UniqueID+"&PRCSID="+PRCSID+"&Prvnt="+Prvnt+"&PFID="+PFID;
				
				 URL = URLEncoder.encode(URL, "UTF-8");
				
				ArrayList<String> Data=new ArrayList<String>();
				Data = GetDBData.Call( URL, PRCSID, Amount , "SMS" ,"", FNname );
				String Result= Data.get(0);
				
				ArrayList<String> Data1=new ArrayList<String>();
				Data1 = GetDBData.Call( PRCSID, Amount ,URL  , "EMAIL" ,"", FNname );
				String Result1= Data1.get(0);
				
					return  Result + "~" + Result1 ;

			}

			//MOBILITY PAYTMINITIATE START


			//PATYM STATUS   START

			@RequestMapping(value = { "PAYTMSTATUS" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
			@ResponseBody
			public String PAYTMSTATUS(HttpServletRequest request, HttpServletResponse response)
					throws Exception, ClassNotFoundException {
				
				
				String UniqueID = request.getParameter("UNIQUEID");
				String PRCSID = request.getParameter("PRCSID");
				String TOKENID = request.getParameter("TOKENID");
				
				String FNname = "LSW_SPAYTMSTATUS";

				ArrayList<String> Data=new ArrayList<String>();
				Data = GetDBData.Call( PRCSID, UniqueID, TOKENID , "" ,"", FNname );
				String Result= Data.get(0);


				

					return Result ;

					
			}


			//PATYM STATUS END


			

			//SWAP    START

			@RequestMapping(value = { "SWAP" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
			@ResponseBody
			public String SWAPPING(HttpServletRequest request, HttpServletResponse response)
					throws Exception, ClassNotFoundException {
				
				
				String PRCSID = request.getParameter("PRCSID");
				String CUSID = request.getParameter("CUSID");
				String TOKENID = request.getParameter("TOKENID");
				
				String FNname = "LSW_SSWAPPINGEAPI";

				ArrayList<String> Data=new ArrayList<String>();
				Data = GetDBData.Call( PRCSID, CUSID, TOKENID , "" ,"", FNname );
				String Result= Data.get(0);


				

					return Result ;

					
			}
			 

			//SWAP   END


			//RECEIPT STATUS    START

			@RequestMapping(value = { "RECEIPTSTAT" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
			@ResponseBody
			public String RECEIPTSTAT(HttpServletRequest request, HttpServletResponse response)
					throws Exception, ClassNotFoundException {
				
				
				String APPNO = request.getParameter("APPNO");
				String RECEIPTNO = request.getParameter("RECEIPTNO");
				String TYPE = request.getParameter("TYPE");
				String TOKENID = request.getParameter("TOKENID");
				
				String FNname = "LSW_SRECEIPTSTATUS";

				ArrayList<String> Data=new ArrayList<String>();
				Data = GetDBData.Call( APPNO, RECEIPTNO, TYPE , TOKENID ,"", FNname );
				String Result= Data.get(0);


				

					return Result ;

					
			}


			//RECEIPT STATUS     END

			//STAGE VALIDATIONS     START

			@RequestMapping(value = { "STAGEVALID" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
			@ResponseBody
			public String STAGEVALID(HttpServletRequest request, HttpServletResponse response)
					throws Exception, ClassNotFoundException {
				
				
				String PRCSID = request.getParameter("PRCSID");
				String TOKENID = request.getParameter("TOKENID");
				
				String FNname = "LSW_SCHECKPFCOLLECTION";
				String FNname1 = "LSW_SSTAGEVALIDATIONS";

				ArrayList<String> Data=new ArrayList<String>();
				Data = GetDBData.Call( PRCSID, "", "" , "" ,"", FNname );
				String Result= Data.get(0);

				
				ArrayList<String> Data1=new ArrayList<String>();
				Data1 = GetDBData.Call( PRCSID, TOKENID, Result , "" ,"", FNname1 );
				String Result1= Data1.get(0);

				

					return Result1 ;

					
			}


			//STAGE VALIDATIONS     END


			//LOAN INITIATION     START

			@RequestMapping(value = { "LOANINITIATION" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
			@ResponseBody
			public String LOANINITIATION(HttpServletRequest request, HttpServletResponse response)
					throws Exception, ClassNotFoundException {
				
				
				String PRCSID = request.getParameter("PRCSID");
				String ACTIVITYID = request.getParameter("ACTIVITYID");
				String XML = request.getParameter("XML");
				String TOKENID = request.getParameter("TOKENID");
				
				String FNname = "LSW_sLoanInfoSubmit";

				ArrayList<String> Data=new ArrayList<String>();
				Data = GetDBData.Call( PRCSID, ACTIVITYID, XML , TOKENID ,"", FNname );
				String Result= Data.get(0);


				

					return Result ;

					
			}


			//LOAN INITIATION     END


			//OCR INTEGRATION START

			@RequestMapping(value = { "MOCR" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
			@ResponseBody
			public String MOCR(HttpServletRequest request, HttpServletResponse response, HttpSession session)
					throws Exception {

				String DOCURL = request.getParameter("DOCURL");
				String PRCSID = request.getParameter("PRCSID");
				String Type = request.getParameter("Type");
				String DOCNAME = request.getParameter("DOCNAME");
				String OP="";
				
				String FNname = "LSW_SDMSURL";

				ArrayList<String> Data=new ArrayList<String>();
				Data = GetDBData.Call( DOCURL, "", "" , "" ,"", FNname );
				String Result= Data.get(0);
				
				Object time = session.getAttribute("LogSession");

					OP = TotalKycOCR.OCR(Result,PRCSID,Type,DOCNAME);
					return OP;

			}

			//OCR INTEGRATION END


			// DELETE API     START

			@RequestMapping(value = { "DELETEENTRY" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
			@ResponseBody
			public String DELETEENTRY(HttpServletRequest request, HttpServletResponse response)
					throws Exception, ClassNotFoundException {
				
				
				String PRCSID = request.getParameter("PRCSID");
				String UNIQUEID = request.getParameter("UNIQUEID");
				String TYPE = request.getParameter("TYPE");
				String TOKENID = request.getParameter("TOKENID");
				
				String FNname = "LSW_SDELETEAPI";

				ArrayList<String> Data=new ArrayList<String>();
				Data = GetDBData.Call( PRCSID, UNIQUEID, TYPE , TOKENID ,"", FNname );
				String Result= Data.get(0);


				

					return Result ;

					
			}


			//DELETE API      END

			//EXISTING     START

			@RequestMapping(value = { "EXISTINGLOAN" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
			@ResponseBody
			public String EXISTINGLOAN(HttpServletRequest request, HttpServletResponse response)
					throws Exception, ClassNotFoundException {
				
				
				String PRCSID = request.getParameter("PRCSID");
				String TOKENID = request.getParameter("TOKENID");
				
				String FNname = "LSW_SEXISTINGLOAN";

				ArrayList<String> Data=new ArrayList<String>();
				Data = GetDBData.Call( PRCSID, TOKENID, "" , "" ,"", FNname );
				String Result= Data.get(0);


				

					return Result ;

					
			}


			//EXISTING     END


			//MASTERSYNC     START

			@RequestMapping(value = { "MASTERSYNC" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
			@ResponseBody
			public String MASTERSYNC(HttpServletRequest request, HttpServletResponse response )
					throws Exception, ClassNotFoundException {
				
				
				String TYPE = request.getParameter("TYPE");
				String DATE = request.getParameter("DATE");
				String TOKENID = request.getParameter("TOKENID");
				
				String FNname = "LSW_SMASTERSYNC";

				ArrayList<String> Data=new ArrayList<String>();
				Data = GetDBData.Call( TYPE, DATE, TOKENID , "" ,"", FNname );
				String Result= Data.get(0);


				

					return Result ;

					
			}


			//MASTERSYNC     END


			//MOBDEMAND     START

			@RequestMapping(value = { "MOBDEMAND" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
			@ResponseBody
			public String MOBDEMAND(HttpServletRequest request, HttpServletResponse response,
					@RequestBody String json)
					throws Exception, ClassNotFoundException {
				
				String PRCSID = request.getParameter("PRCSID");
				String PROPERTY = request.getParameter("PROPERTY");
				String TOKENID = request.getParameter("TOKENID");
				String srt = json;
			  System.out.println(srt);
				
				String FNname = "LSW_TGETPROPPF";
				String FNname1 = "LSW_SMOBDEMANDAMOUNT";
				

				ArrayList<String> Data=new ArrayList<String>();
				Data = GetDBData.Call( PROPERTY, PRCSID, "" , "" ,"", FNname );
				String Result= Data.get(0);
				String Result1= Data.get(1);

				ArrayList<String> Data1=new ArrayList<String>();
				Data1 = GetDBData.Call( PROPERTY, PRCSID, TOKENID , Result ,Result1, FNname1 );
				String FResult= Data1.get(0);
				
					return FResult ;
			}

			//MOBDEMAND     END


			//MOBWF Complete Start

					@RequestMapping(value = { "MOBWFCOMPLETE" }, method = {
							org.springframework.web.bind.annotation.RequestMethod.POST })
					@ResponseBody
					public String MOBWFCOMPLETE(Locale locale, Model model, HttpSession session, HttpServletRequest request,
							HttpServletResponse response) {
						logger.info("Welcome home! The client locale is {}.", locale);

					
							
							String Response="";
							String ProcessID="";
							String ActivityID="";
							String http = request.getHeader("Origin");
							String Referer = request.getHeader("Referer");
							String ACTVID = request.getParameter("ACTVID");
							String WDATA = request.getParameter("WDATA");
							String SNAME = request.getParameter("SNAME");
							String UsrSession = request.getParameter("UsrSession");
							String CPMSession = request.getParameter("CPMSession");
							String Remarks = request.getParameter("Remarks");
							String CurrentActivity = request.getParameter("CurrentActivity");
							
							Response	= WFCall.WFComplete(ACTVID,WDATA,UsrSession,CPMSession, "", SNAME);
							
							String Reponse[] = Response.split("~");

							ProcessID = Reponse[0];
							ActivityID = Reponse[1];
							
							
							if (!ProcessID.equals("completed"))
							{
							//ArrayList<String> Data=new ArrayList<String>();
							
							//Data	= GetDBData.Call(ProcessID,ActivityID,request.getParameter("XML"), "", "", "LSW_SLOANINFOSUBMIT");

								
							Response = ProcessID+"~"+ActivityID+"~"+"";
							}
							else
							{
								
								if (WDATA.equals("var_status=Cancel")) {
									
									String FNname = "LSW_SREJCTRMRK";

									ArrayList<String> Data=new ArrayList<String>();
									Data = GetDBData.Call( ACTVID, Remarks, UsrSession , CurrentActivity ,"", FNname );
									String Result= Data.get(0);

									
								}
								
								Response = ProcessID+"~"+ActivityID+"~"+"";
							}
						

							return Response;
						

					}
					// MOBWF Complete End
					
					
							//MOBMILESTONE     START

					@RequestMapping(value = { "MOBMILESTONE" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
					@ResponseBody
					public String MILESTONE(HttpServletRequest request, HttpServletResponse response )
							throws Exception, ClassNotFoundException {
						
						
						String PRCSID = request.getParameter("PRCSID");
						String STAGE = request.getParameter("STAGE");
						String TOKENID = request.getParameter("TOKENID");
						
						String FNname = "LSW_SMILESTONE";

						ArrayList<String> Data=new ArrayList<String>();
						Data = GetDBData.Call( PRCSID, STAGE, TOKENID , "" ,"", FNname );
						String Result= Data.get(0);


						

							return Result ;

							
					}


					//MOBMILESTONE     END
					
					
							//COMMONCALL     START

					@RequestMapping(value = { "COMMONCALL" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
					@ResponseBody
					public String COMMONCALL(HttpServletRequest request, HttpServletResponse response )
							throws Exception, ClassNotFoundException {
						
						
						String SPNAME = request.getParameter("SPNAME");
						String XML = request.getParameter("XML");
						String TOKENID = request.getParameter("TOKENID");
						String DATA1 = request.getParameter("DATA1");
						String DATA2 = request.getParameter("DATA2");
						
						String FNname = "LSW_SCOMMONCALL";

						ArrayList<String> Data=new ArrayList<String>();
						Data = GetDBData.Call( SPNAME, XML, TOKENID , DATA1 ,DATA2, FNname );
						String Result= Data.get(0);

							return Result ;
					
					}


					//COMMONCALL     END
					
					
					
					//COMMONCALLJSON     START

					@RequestMapping(value = { "COMMONCALLJSON" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
					@ResponseBody
					public String COMMONCALLJSON(HttpServletRequest request, HttpServletResponse response,@RequestBody String json)
					throws Exception, ClassNotFoundException {
					String SPNAME = request.getParameter("SPNAME");
					String XML =json;
					String TOKENID = request.getParameter("TOKENID");
					String DATA1 = request.getParameter("DATA1");
					String DATA2 = request.getParameter("DATA2");
					String FNname = "LSW_SCOMMONCALLJSON";

					ArrayList<String> Data=new ArrayList<String>();
					Data = GetDBData.Call( SPNAME, XML, TOKENID , DATA1 ,DATA2, FNname );
					String Result= Data.get(0);



					return Result ;

					}


					//COMMONCALLJSON     END
					
							//COMMONCALLDASHBOARD    START

					@RequestMapping(value = { "DASHBOARD" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
					@ResponseBody
					public String DASHBOARD(HttpServletRequest request, HttpServletResponse response )
							throws Exception, ClassNotFoundException {
						
						
						String SPNAME = request.getParameter("SPNAME");
						String XML = request.getParameter("XML");
						String TOKENID = request.getParameter("TOKENID");
						String DATA1 = request.getParameter("DATA1");
						String DATA2 = request.getParameter("DATA2");
						String FNname = "LSW_SDASHBOARDCOMMONCALL";
						String OUTPUT ="";
						
						
						if (SPNAME.equals("MAIN"))	
						{
						ArrayList<String> Data=new ArrayList<String>();
						Data = GetDBData.Call( SPNAME, XML, TOKENID , DATA1 ,DATA2, FNname );
						String Result11= Data.get(10);
						String Result12= Data.get(11);
						String Result13= Data.get(12);
						String Result14= Data.get(13);
						String Result15= Data.get(14);
						 OUTPUT = Result11 +"~" + Result12 +"~" + Result13 +"~" + Result14 +"~" + Result15 ;
						}
						else {
							
							ArrayList<String> Data=new ArrayList<String>();
							Data = GetDBData.Call( SPNAME, XML, TOKENID , DATA1 ,DATA2, FNname );
							String Result1= Data.get(0);

							OUTPUT = Result1  ;	
						}
				      return  OUTPUT ;		
					}
					//COMMONCALLDASHBOARD     END


			 @RequestMapping(value={"/ExcelDwnld"}, method={org.springframework.web.bind.annotation.RequestMethod.GET})
			  @ResponseBody
			  public void ExcelDwnld(HttpServletRequest request, HttpServletResponse response,HttpSession session
					  )
			    throws Exception
			  {
				//ExcelDwnld getdata = new ExcelDwnld();
			    String param1 = request.getParameter("param1");
			    String param2 = request.getParameter("param2");
			    String param3 = request.getParameter("param3");
			    String param4 = request.getParameter("param4");
			    String param5 = request.getParameter("param5");
			    String param6 = request.getParameter("param6");
			    String param7 = request.getParameter("param7");
			    String param8 = request.getParameter("param8");
			    String spname = request.getParameter("spname");
			    String FName = request.getParameter("FName");
			    String FExtsn = request.getParameter("FExtsn");
			    String DBSrc = request.getParameter("DBSrc");
			   
			 
			   
			    
					DecimalFormat df2 = new DecimalFormat(".##");
					
					double valueF;
					
					TimeZone TIME_ZONE = null;
					DBSrc=null;
					ByteArrayInputStream excelStream = null;
					byte[] file = null;
					ByteArrayOutputStream outByteStream=null;
					Connection connection =null;
					PreparedStatement proc_stmt=null;
					ResultSet resultSet=null;
			try
			{
					if(connection==null) {
						connection= DBConnection.getConnection(DBSrc);
					}

					System.out.println("Executing SP...");
					proc_stmt = connection.prepareStatement("{ call " + spname + "(?,?,?,?,?,?,?,?) }");

					proc_stmt.setString(1, param1);
					proc_stmt.setString(2, param2);
					proc_stmt.setString(3, param3);
					proc_stmt.setString(4, param4);
					proc_stmt.setString(5, param5);
					proc_stmt.setString(6, param6);
					proc_stmt.setString(7, param7);
					proc_stmt.setString(8, param8);
					
					resultSet = proc_stmt.executeQuery();

					ResultSetMetaData rsmd = resultSet.getMetaData();
					//int colCount = rsmd.getColumnCount();
					
					
					//ResultSet resultSet = null;
						
					System.out.println("SP Executed...");
					// Start -- Enable in future
					
					SXSSFWorkbook  wb = new SXSSFWorkbook();
					wb.setCompressTempFiles(true);
					
					SXSSFSheet personSheet = (SXSSFSheet) wb.createSheet("Sheet1");  //.createSheet("SAMPLE");
					
					Row headerRow = personSheet.createRow(0);
					Cell nameHeaderCell = headerRow.createCell(0);
					Cell addressHeaderCell = headerRow.createCell(1);
					CellStyle style = wb.createCellStyle();
	                style.setFillForegroundColor(HSSFColor.RED.index);
	                style.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
					
					int i,j,type;
					String chk;
					
					
					 int colCount = rsmd.getColumnCount();
					 for (i = 1; i <= colCount; i++)
	                 {
	                 chk= rsmd.getColumnName(i);
	                 
	                 
	                 //headerCellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

	                 //style.setFillPattern(FillPatternType.BIG_SPOTS);
	                 headerRow.createCell(i-1);
	                 
	                 
	                 if(chk.contains("***")==true)
	                 {
	                  headerRow.getCell(i-1).setCellStyle(style);
	                 chk=chk.replace("***", "");
	                 headerRow.getCell(i-1).setCellValue(chk);
	                 }
	                 else
	                 {
	                 headerRow.getCell(i-1).setCellValue(chk);  
	                 }
	                 
	                 }

			    
					System.out.println("Header Row Created...");
				j=1;
				while(resultSet.next())
				{
					headerRow = personSheet.createRow(j);
			    	for (i = 1; i <= colCount; i++)
			    	{
			    		type = rsmd.getColumnType(i);
			    		
			    		valueF=0;
			    		if (type == Types.NUMERIC)
			    		{
			    			valueF = Math.round(resultSet.getDouble(i)*100.00);
			    			valueF=valueF/100;
			    			headerRow.createCell(i-1).setCellValue(valueF);
			    		}
			    		else if (type == Types.VARCHAR)
			    		{
			    		
			    			headerRow.createCell(i-1).setCellValue(resultSet.getString(i));
			    		}
			    		else if (type == Types.CHAR)
			    		{
			    		
			    			headerRow.createCell(i-1).setCellValue(resultSet.getString(i));
			    		}
			    		else if (type == Types.INTEGER)
			    		{
			    		
			    			headerRow.createCell(i-1).setCellValue(resultSet.getInt(i));
			    		}
			    		else if(type == 93)
			    		{
			    			
			    			
			    			Timestamp timestamp = resultSet.getTimestamp(i);
			    			if (timestamp != null)
			    				headerRow.createCell(i-1).setCellValue(new java.util.Date(timestamp.getDate()));

			    		}

			    	}
			    	if(j%100==0)    	
			    		System.out.println("Rows Bind : "+j);
			    	
			    	
			    	//System.out.println("Rows Bind : "+j);
			    	
			    	j++;	
			    	
				}

					FName=FName+"."+FExtsn;
					
					  String contentType = null;

				        if (FName.endsWith("xlsx")) {
				            contentType = "application/octet-stream";
				        } else if (FName.endsWith("pdf")) {
				            contentType = "application/pdf";
				        } else {
				            throw new RuntimeException("File type not found");
				        }
				        
				        
				        outByteStream = new ByteArrayOutputStream();
				        wb.write(outByteStream);
				         excelStream = new ByteArrayInputStream(outByteStream.toByteArray());
				      
				       file = outByteStream.toByteArray();
				       
				 	   response.setHeader("Content-Disposition", "attachment; filename=" + FName);

					   OutputStream outStream = response.getOutputStream();

					   outStream.write(file);

					   outStream.flush();

					   outStream.close();
				    	
				    			    
				       outByteStream.close();
				     
				}
				catch(Exception ex){
					System.out.println("Exception in Excel Download");
					ex.printStackTrace();	
				}
				finally
				{
					//DBConnection.closeConnectionCall(connection, proc_stmt, resultSet);
					proc_stmt.close();
					connection.commit();
					resultSet.close();            
			         connection.close();
				}
			  }
			 
			 @RequestMapping(value = { "/getPDFTag" }, method = {org.springframework.web.bind.annotation.RequestMethod.POST })
			 @ResponseBody
			 public static String getPDFTag(HttpServletRequest request, HttpServletResponse response, HttpSession session)
			 throws Exception, ClassNotFoundException {
				 
				 
				   System.out.println("PDF Req: "+ request.toString());
				    
				    Object time = session.getAttribute("LogSession");
				    if (time == null)
				      return "redirect:"; 
				 //  GetTag getdata = new GetTag();

				   // String retval = getdata.dataReceiver(request);
				  //  return retval;
				 
			 return Integration.GetTag.dataReceiver(request);
			 }
			 
			 @RequestMapping(value = {"/eSignAPI"}, method = {RequestMethod.POST})
			 @ResponseBody
			 public String InterfaceEsign(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
				 Controls.InterfaceEsign getdata = new Controls.InterfaceEsign();
			    String Input1 = request.getParameter("Input1");
			    String Input2 = request.getParameter("Input2");
			    String Input3 = request.getParameter("Input3");
			    String Encoded1 = request.getParameter("Encoded1");
			    String ServiceType = request.getParameter("ServiceType");
			    
//			    getdata.JSONval(JSONval);
//			    getdata.DBSrc(DBSrc);
			    Object time = session.getAttribute("LogSession");
			   //if (time == null)
			    // return "redirect:"; 
			    
			    System.out.println("eSignAPI - Started");
			    
			    String retval = getdata.EsignLegalityService1(Input1,Input2,Input3,Encoded1,ServiceType);
			    return retval;
			  }
			 
			  @RequestMapping(value = {"/eStampAPI"}, method = {RequestMethod.POST})
			  @ResponseBody
			  public String eStampAPI(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
			        Controls.InterfaceEstamp getdata = new Controls.InterfaceEstamp();
			     String Input1 = request.getParameter("Input1");
			     String Input2 = request.getParameter("Input2");
			     String Input3 = request.getParameter("Input3");
			     String Encoded1 = request.getParameter("Encoded1");
			     String ServiceType = request.getParameter("ServiceType");			    

//			      getdata.JSONval(JSONval);
//			      getdata.DBSrc(DBSrc);
			     Object time = session.getAttribute("LogSession");
			    //if (time == null)

			     // return "redirect:";
			     System.out.println("eStampAPI - Started");
			     String retval = getdata.EsignLegalityService1(Input1,Input2,Input3,Encoded1,ServiceType);
		     return retval;
			   }
/*
			  // Namesthy Start
			    @RequestMapping(value = {"/NamastheAPICall"}, method = {RequestMethod.POST})
				@ResponseBody
				public String NamastheAPICall(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
					 Integration.NamastheAPI getdata = new Integration.NamastheAPI();
				   
					String SpName = request.getParameter("SpName");
				    String Type = request.getParameter("Type");
				    String PRCSID = request.getParameter("PRCSID");
				    String CUSID = request.getParameter("CUSID");
				    
//				    getdata.JSONval(JSONval);
//				    getdata.DBSrc(DBSrc);
				    Object time = session.getAttribute("LogSession");
				   //if (time == null)
				    // return "redirect:"; 
				    
				    System.out.println("eSignAPI - Started");
				    
				    String retval = getdata.NamastheAPIService(SpName,Type,PRCSID,CUSID);
				    return retval;
				  }	 
		// End	
		 *
*/
}