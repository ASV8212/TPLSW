
package Controller;

import Integration.InsrncePrmeium;
import Integration.OPA;
import CommonModel.sendSMS;
import Mobility.MTotalKyc;
import Mobility.ApplicantPush;
import Mobility.CusGen;
import Integration.COLLECTIONS;
import Integration.LMSPF;
import Integration.LMSCUS;
import Integration.POSIDEX;
import Integration.PAYTM;
import Integration.CIBILIntegration;
import Integration.TotalKycOCR;
import Integration.TotalKyc;
import CommonModel.GetExclData;
import CommonModel.GetExclDataSheet;
import CommonModel.GetExclDataNOF;
import CommonModel.PANCINDIN;
import CommonModel.FileUploadHandler;
import UserviewModel.UI_formdata_GetMainPageHTML;
import CommonModel.deletefile;
import CommonModel.UI_formdatains_General;
import CommonModel.UI_fetchformdata_get2dateTime;
import CommonModel.UI_fetchformButtonData;
import CommonModel.UI_fetchActivityform;
import CommonModel.CS_Migrformdata;
import CommonModel.CS_FetchFormFieldData;
import CommonModel.UI_GetLoginPwd;
import CommonModel.UI_fetchformdata_get2date;
import CommonModel.UI_formdatainsert;
import CommonModel.FncallWebserviceGrid;
import Integration.DMS;
import CommonModel.GridView;
import CommonModel.UI_fetchformdata;
import CommonModel.UI_LoginGetData;
import CommonModel.UI_GetDataLrg;
import CommonModel.UpMailSending;
import CommonModel.MailSending;
import java.sql.ResultSetMetaData;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.math.BigInteger;
import java.security.MessageDigest;
import Integration.LDAP;
import java.net.SocketException;
import java.net.UnknownHostException;
import java.net.NetworkInterface;
import java.net.InetAddress;
import java.util.Base64;
import org.w3c.dom.NodeList;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import CommonModel.CommonFns;
import CommonModel.UI_GetPageURL;
import java.sql.Connection;
import java.io.Reader;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.FileNotFoundException;
import java.io.FileInputStream;
import CommonModel.DBConnection;
import java.util.Properties;
import javax.servlet.ServletException;
import CommonModel.PaymentGW;
import CommonModel.UI_GetData;
import java.util.regex.Matcher;
import java.util.regex.PatternSyntaxException;
import java.util.regex.Pattern;
import CommonModel.MailSendWthAttchRPTBdy;
import Controls.WFCall;
import java.io.OutputStream;
import java.io.InputStream;
import java.io.IOException;
import java.io.ByteArrayOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.web.bind.annotation.ResponseBody;
import Integration.MCA;
import Controls.GetDBData;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.ui.Model;
import java.util.Locale;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.stereotype.Controller;

@Controller
public class HomeController
{
    private static final Logger logger;
    
    static {
        logger = LoggerFactory.getLogger((Class)HomeController.class);
    }
    
    @RequestMapping(value = { "" }, method = { RequestMethod.GET })
    public String Login(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        request.setAttribute("UNA", session.getAttribute("UNA"));
        session.removeAttribute("UNA");
        return "Common/Pages/Userview/Login_Audit";
    }
    
    @RequestMapping(value = { "Home" }, method = { RequestMethod.GET })
    public String FEPHome(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        ArrayList<String> Data2 = new ArrayList<String>();
        Data2 = (ArrayList<String>)GetDBData.Call(new StringBuilder().append(session.getAttribute("UsrSession")).toString(), "", "", "", "", "LSW_SDASHBOARDCNTNT");
        request.setAttribute("DASHBRD1", (Object)Data2.get(0));
        request.setAttribute("DASHBRD2", (Object)Data2.get(1));
        request.setAttribute("DASHBRD3", (Object)Data2.get(2));
        request.setAttribute("DASHBRD4", (Object)Data2.get(3));
        request.setAttribute("DASHBRD5", (Object)Data2.get(4));
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
        return "Home";
    }
    
    @RequestMapping(value = { "MyApplication" }, method = { RequestMethod.GET })
    public String MyApplication(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
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
        return "MyApplication";
    }
    
    @RequestMapping(value = { "ManageDeferment" }, method = { RequestMethod.GET })
    public String ManageDeferment(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
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
        return "ManageDeferment";
    }
    
    @RequestMapping(value = { "ManageOTC" }, method = { RequestMethod.GET })
    public String ManageOTC(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
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
        return "ManageOTC";
    }
    
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
        Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
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
    
    @RequestMapping(value = { "ManagePDD" }, method = { RequestMethod.GET })
    public String ManagePDD(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
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
        return "ManagePDD";
    }
    
    @RequestMapping(value = { "ManageDev" }, method = { RequestMethod.GET })
    public String ManageDev(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
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
        return "ManageDev";
    }
    
    @RequestMapping(value = { "/MCAVerfy" }, method = { RequestMethod.POST })
    @ResponseBody
    public String MCAVerfy(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final Object time = session.getAttribute("LogSession");
        String s1 = "";
        if (time == null) {
            return "redirect:";
        }
        final String param1 = request.getParameter("CINNO");
        final String param2 = request.getParameter("PRCSID");
        final String param3 = request.getParameter("PARAM3");
        final String param4 = request.getParameter("PARAM4");
        final String param5 = request.getParameter("PARAM5");
        final String SPNAME = request.getParameter("SPNAME");
        final MCA MCACLS = new MCA();
        s1 = MCA.CheckReqRS(param1, param2, param3, param4, param5, SPNAME);
        return s1;
    }
    
    @RequestMapping(value = { "MCAVerfyRPT" }, method = { RequestMethod.GET })
    @ResponseBody
    public void MCAVerfyRPT(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final boolean isMultipart = ServletFileUpload.isMultipartContent(request);
        final String PARAM1 = request.getParameter("PRCSID");
        final String PARAM2 = request.getParameter("CINNO");
        String CINURL = "";
        String APIKEY = "";
        String APIVRSN = "";
        String TOKN = "";
        String APITYP = "";
        String fileNAME = "";
        String format = "";
        final String retval = "";
        ArrayList<String> Data = new ArrayList<String>();
        Data = (ArrayList<String>)GetDBData.Call(PARAM1, PARAM2, "", "reports", "", "LSW_SOVRALLHNDLMCA");
        CINURL = Data.get(0);
        APIKEY = Data.get(1);
        APIVRSN = Data.get(2);
        TOKN = Data.get(4);
        APITYP = Data.get(5);
        fileNAME = "MCA_" + PARAM2 + ".pdf";
        format = Data.get(2);
        final URL url = new URL(CINURL);
        final HttpURLConnection httpConn = (HttpURLConnection)url.openConnection();
        httpConn.setRequestProperty("x-api-key", APIKEY);
        httpConn.setRequestProperty("x-api-version", APIVRSN);
        httpConn.setRequestProperty("Content-Type", "application/json");
        httpConn.setRequestProperty("cache-control", "no-cache");
        final int responseCode = httpConn.getResponseCode();
        if (responseCode == 200) {
            final ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            final byte[] chunk = new byte[4096];
            final InputStream stream = httpConn.getInputStream();
            try {
                int bytesRead;
                while ((bytesRead = stream.read(chunk)) > 0) {
                    outputStream.write(chunk, 0, bytesRead);
                }
                stream.close();
                final byte[] DocContent = outputStream.toByteArray();
                outputStream.close();
                response.setContentLength(DocContent.length);
                response.setHeader("Content-Disposition", "attachment; filename=" + fileNAME);
                final OutputStream outStream = (OutputStream)response.getOutputStream();
                outStream.write(DocContent);
                outStream.flush();
                outStream.close();
            }
            catch (IOException e) {
                stream.close();
                outputStream.close();
                e.printStackTrace();
            }
        }
    }
    
    @RequestMapping(value = { "Applcnt" }, method = { RequestMethod.GET })
    public String Applcnt(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "Applcnt";
    }
    
    @RequestMapping(value = { "CoApplcnt" }, method = { RequestMethod.GET })
    public String CoApplcnt(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "CoApplcnt";
    }
    
    @RequestMapping(value = { "Guantr" }, method = { RequestMethod.GET })
    public String Guantr(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "Guantr";
    }
    
    @RequestMapping(value = { "LonDtls" }, method = { RequestMethod.GET })
    public String LonDtls(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "LonDtls";
    }
    
    @RequestMapping(value = { "PropDtls" }, method = { RequestMethod.GET })
    public String PropDtls(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "PropDtls";
    }
    
    @RequestMapping(value = { "RefDtls" }, method = { RequestMethod.GET })
    public String RefDtls(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "RefDtls";
    }
    
    @RequestMapping(value = { "PFDtls" }, method = { RequestMethod.GET })
    public String PFDtls(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "PFDtls";
    }
    
    @RequestMapping(value = { "BnkDtls" }, method = { RequestMethod.GET })
    public String BnkDtls(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "BnkDtls";
    }
    
    @RequestMapping(value = { "DocDtls" }, method = { RequestMethod.GET })
    public String DocDtls(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "DocDtls";
    }
    
    @RequestMapping(value = { "FileCheck" }, method = { RequestMethod.GET })
    public String FileCheck(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "FileCheck";
    }
    
    @RequestMapping(value = { "ViewRpts" }, method = { RequestMethod.GET })
    public String ViewRpts(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "ViewRpts";
    }
    
    @RequestMapping(value = { "TechIPropeInfo" }, method = { RequestMethod.GET })
    public String TechIPropeInfo(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "TechIPropeInfo";
    }
    
    @RequestMapping(value = { "TechIIPropeInfo" }, method = { RequestMethod.GET })
    public String TechIIPropeInfo(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "TechIIPropeInfo";
    }
    
    @RequestMapping(value = { "LegalDetails" }, method = { RequestMethod.GET })
    public String LegalDetails(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "LegalDetails";
    }
    
    @RequestMapping(value = { "FIResidenceInfo" }, method = { RequestMethod.GET })
    public String FIResidenceInfo(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "FIResidenceInfo";
    }
    
    @RequestMapping(value = { "FIEmployementInfo" }, method = { RequestMethod.GET })
    public String FIEmployementInfo(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "FIEmployementInfo";
    }
    
    @RequestMapping(value = { "LegalUpdateReport" }, method = { RequestMethod.GET })
    public String LegalUpdateReport(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "LegalUpdateReport";
    }
    
    @RequestMapping(value = { "ExstLon" }, method = { RequestMethod.GET })
    public String ExstLon(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "ExstLon";
    }
    
    @RequestMapping(value = { "FincBnk" }, method = { RequestMethod.GET })
    public String FincBnk(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "FincBnk";
    }
    
    @RequestMapping(value = { "PropVal" }, method = { RequestMethod.GET })
    public String PropVal(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "PropVal";
    }
    
    @RequestMapping(value = { "Fincs" }, method = { RequestMethod.GET })
    public String Fincs(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "Fincs";
    }
    
    @RequestMapping(value = { "FincRto" }, method = { RequestMethod.GET })
    public String FincRto(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "FincRto";
    }
    
    @RequestMapping(value = { "Waiver" }, method = { RequestMethod.GET })
    public String Waiver(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "Waiver";
    }
    
    @RequestMapping(value = { "Empwr" }, method = { RequestMethod.GET })
    public String Empwr(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "Empwr";
    }
    
    @RequestMapping(value = { "PdDt" }, method = { RequestMethod.GET })
    public String PdDt(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "PdDt";
    }
    
    @RequestMapping(value = { "ApprlNt" }, method = { RequestMethod.GET })
    public String ApprlNt(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "ApprlNt";
    }
    
    @RequestMapping(value = { "Chgr" }, method = { RequestMethod.GET })
    public String Chgr(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "Chgr";
    }
    
    @RequestMapping(value = { "ENach" }, method = { RequestMethod.GET })
    public String ENach(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "ENach";
    }
    
    @RequestMapping(value = { "Appr" }, method = { RequestMethod.GET })
    public String Appr(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "Appr";
    }
    
    @RequestMapping(value = { "Disbrsmnt" }, method = { RequestMethod.GET })
    public String Disbrsmnt(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "Disbrsmnt";
    }
    
    @RequestMapping(value = { "OpsAck" }, method = { RequestMethod.GET })
    public String OpsAck(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "OpsAck";
    }
    
    @RequestMapping(value = { "OTC" }, method = { RequestMethod.GET })
    public String OTC(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "OTC";
    }
    
    @RequestMapping(value = { "PDD" }, method = { RequestMethod.GET })
    public String PDD(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "PDD";
    }
    
    @RequestMapping(value = { "DisbMemo" }, method = { RequestMethod.GET })
    public String DisbMemo(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "DisbMemo";
    }
    
    @RequestMapping(value = { "RePay" }, method = { RequestMethod.GET })
    public String RePay(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "RePay";
    }
    
    @RequestMapping(value = { "InsrncUpld" }, method = { RequestMethod.GET })
    public String InsrncUpld(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "InsrncUpld";
    }
    
    @RequestMapping(value = { "CrsSel" }, method = { RequestMethod.GET })
    public String CrsSel(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "CrsSel";
    }
    
    @RequestMapping(value = { "CrsSelProp" }, method = { RequestMethod.GET })
    public String CrsSelProp(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "CrsSelProp";
    }
    
    @RequestMapping(value = { "Dedupe" }, method = { RequestMethod.GET })
    public String Dedupe(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "Dedupe";
    }
    
    @RequestMapping(value = { "Cibil" }, method = { RequestMethod.GET })
    public String Cibil(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "Cibil";
    }
    
    @RequestMapping(value = { "Repts" }, method = { RequestMethod.GET })
    public String Repts(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "Repts";
    }
    
    @RequestMapping(value = { "DefrMnt" }, method = { RequestMethod.GET })
    public String DefrMnt(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "DefrMnt";
    }
    
    @RequestMapping(value = { "ManageLead" }, method = { RequestMethod.GET })
    public String ManageLead(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTMYAPPL");
        request.setAttribute("MAINTABDATA", (Object)Data.get(0));
        request.setAttribute("FORMHEADING", (Object)"LEAD GENERATION");
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
        return "ManageLead";
    }
    
    @RequestMapping(value = { "MnagQuery" }, method = { RequestMethod.GET })
    public String MnagQuery(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        Data = (ArrayList<String>)GetDBData.Call(String.valueOf(request.getParameter("ActvID")) + "|" + session.getAttribute("UsrSession"), request.getParameter("PrMs10"), request.getParameter("PrcsID"), request.getParameter("PrMs9"), request.getParameter("PrMs8"), "LSW_SFORMTABCONTQ");
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
        return "MnagQuery";
    }
    
    @RequestMapping(value = { "MnagQuerySrch" }, method = { RequestMethod.GET })
    public String MnagQuerySrch(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        Data = (ArrayList<String>)GetDBData.Call(session.getAttribute("UsrSession").toString(), "", "", "", "", "LSW_SGETQUERYZONE");
        request.setAttribute("ZONE", (Object)Data.get(0));
        request.setAttribute("REGION", (Object)Data.get(1));
        request.setAttribute("AREA", (Object)Data.get(2));
        request.setAttribute("BRANCH", (Object)Data.get(3));
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
        return "MnagQuerySrch";
    }
    
    @RequestMapping(value = { "WFACTVINIT" }, method = { RequestMethod.POST })
    @ResponseBody
    public String WFACTVINIT(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        String Response = "";
        String ProcessID = "";
        String ActivityID = "";
        final String http = request.getHeader("Origin");
        final String Referer = request.getHeader("Referer");
        Response = WFCall.WFActvInit(request.getParameter("ACTVID"), request.getParameter("WDATA"), session.getAttribute("UsrSession").toString(), session.getAttribute("CPMSession").toString(), "", request.getParameter("SNAME"));
        final String[] Reponse = Response.split("~");
        ProcessID = Reponse[0];
        ActivityID = Reponse[1];
        if (!ProcessID.equals("completed")) {
            Response = String.valueOf(ProcessID) + "~" + ActivityID + "~";
        }
        else {
            Response = String.valueOf(ProcessID) + "~" + ActivityID + "~";
        }
        return Response;
    }
    
    @RequestMapping(value = { "WFINIT" }, method = { RequestMethod.POST })
    @ResponseBody
    public String WFINIT(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        String Response = "";
        String ProcessID = "";
        String ActivityID = "";
        final String http = request.getHeader("Origin");
        final String Referer = request.getHeader("Referer");
        Response = WFCall.WFInit(session.getAttribute("UsrSession").toString(), session.getAttribute("CPMSession").toString(), http, Referer, "", "LSW_SWFINITCALL");
        final String[] Reponse = Response.split("~");
        ProcessID = Reponse[0];
        ActivityID = Reponse[1];
        if (!ProcessID.equals("No Data")) {
            ArrayList<String> Data = new ArrayList<String>();
            Data = (ArrayList<String>)GetDBData.Call(ProcessID, ActivityID, request.getParameter("XML"), "", "", "LSW_SLOANINFOSUBMIT");
            Response = "Workflow Initiated~" + ProcessID + "~" + ActivityID;
        }
        else {
            Response = "Workflow Initiation Failed~No Data~No Data";
        }
        return Response;
    }
    
    @RequestMapping(value = { "DIRINS" }, method = { RequestMethod.POST })
    @ResponseBody
    public String DIRINS(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        String Response = "";
        final String SP = request.getParameter("SP");
        final String ID = request.getParameter("ID");
        ArrayList<String> Data = new ArrayList<String>();
        Data = (ArrayList<String>)GetDBData.Call(ID, request.getParameter("XML"), "", "", "", SP);
        Response = "Success";
        return Response;
    }
    
    @RequestMapping(value = { "WFCOMPLETE" }, method = { RequestMethod.POST })
    @ResponseBody
    public String WFCOMPLETE(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        String Response = "";
        String ProcessID = "";
        String ActivityID = "";
        final String http = request.getHeader("Origin");
        final String Referer = request.getHeader("Referer");
        Response = WFCall.WFComplete(request.getParameter("ACTVID"), request.getParameter("WDATA"), session.getAttribute("UsrSession").toString(), session.getAttribute("CPMSession").toString(), "", request.getParameter("SNAME"));
        final String[] Reponse = Response.split("~");
        ProcessID = Reponse[0];
        ActivityID = Reponse[1];
        if (!ProcessID.equals("completed")) {
            Response = String.valueOf(ProcessID) + "~" + ActivityID + "~";
        }
        else {
            Response = String.valueOf(ProcessID) + "~" + ActivityID + "~";
        }
        return Response;
    }
    
    @RequestMapping(value = { "WFVNDACTVINIT" }, method = { RequestMethod.POST })
    @ResponseBody
    public String WFVNDACTVINIT(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        String Response = "";
        String ProcessID = "";
        String ActivityID = "";
        final String http = request.getHeader("Origin");
        final String Referer = request.getHeader("Referer");
        Response = WFCall.WFVndActvInit(request.getParameter("ACTVID"), request.getParameter("WDATA"), session.getAttribute("UsrSession").toString(), session.getAttribute("CPMSession").toString(), "", request.getParameter("SNAME"));
        final String[] Reponse = Response.split("~");
        ProcessID = Reponse[0];
        ActivityID = Reponse[1];
        if (!ProcessID.equals("completed")) {
            Response = String.valueOf(ProcessID) + "~" + ActivityID + "~";
        }
        else {
            Response = String.valueOf(ProcessID) + "~" + ActivityID + "~";
        }
        return Response;
    }
    
    @RequestMapping(value = { "WFReevaluate" }, method = { RequestMethod.POST })
    @ResponseBody
    public String WFReevaluate(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        String Response = "";
        String ProcessID = "";
        String ActivityID = "";
        final String http = request.getHeader("Origin");
        final String Referer = request.getHeader("Referer");
        Response = WFCall.WFReevaluate(request.getParameter("ACTVID"), request.getParameter("WDATA"), session.getAttribute("UsrSession").toString(), session.getAttribute("CPMSession").toString(), "", request.getParameter("SNAME"));
        final String[] Reponse = Response.split("~");
        ProcessID = Reponse[0];
        ActivityID = Reponse[1];
        if (!ProcessID.equals("completed")) {
            Response = String.valueOf(ProcessID) + "~" + ActivityID + "~";
        }
        else {
            Response = String.valueOf(ProcessID) + "~" + ActivityID + "~";
        }
        return Response;
    }
    
    @RequestMapping(value = { "RegisterInvoice" }, method = { RequestMethod.GET })
    public String RegisterInvoice(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "RegisterInvoice";
    }
    
    @RequestMapping(value = { "POIssuance" }, method = { RequestMethod.GET })
    public String POIssuance(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "POIssuance";
    }
    
    @RequestMapping(value = { "ClickToPay" }, method = { RequestMethod.GET })
    public String ClickToPay(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "ClickToPay";
    }
    
    @RequestMapping(value = { "RepaymentRD" }, method = { RequestMethod.GET })
    public String RepaymentRD(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "RepaymentRD";
    }
    
    @RequestMapping(value = { "InvoiceAcceptance" }, method = { RequestMethod.GET })
    public String InvoiceAcceptance(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "InvoiceAcceptance";
    }
    
    @RequestMapping(value = { "POAcceptance" }, method = { RequestMethod.GET })
    public String POAcceptance(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "POAcceptance";
    }
    
    @RequestMapping(value = { "FinanceRequest" }, method = { RequestMethod.GET })
    public String FinanceRequest(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "FinanceRequest";
    }
    
    @RequestMapping(value = { "/LeadINS" }, method = { RequestMethod.POST })
    @ResponseBody
    public String LeadINS(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final String param1 = request.getParameter("LEADCR");
        ArrayList<String> Data = new ArrayList<String>();
        Data = (ArrayList<String>)GetDBData.Call(param1, "INS", "", "", "", "LSW_SLEADAPIINS");
        final String retval = Data.get(0);
        return retval;
    }
    
    @RequestMapping(value = { "/LeadSTATUS" }, method = { RequestMethod.POST })
    @ResponseBody
    public String LeadSTATUS(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final String param1 = request.getParameter("LEADSEARCH");
        ArrayList<String> Data = new ArrayList<String>();
        Data = (ArrayList<String>)GetDBData.Call(param1, "STATUS", "", "", "", "LSW_SLEADAPIINS");
        final String retval = Data.get(0);
        return retval;
    }
    
    @RequestMapping(value = { "/EmailVerfy" }, method = { RequestMethod.POST })
    @ResponseBody
    public String EmailVerfy(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String param1 = request.getParameter("URL");
        final String param2 = request.getParameter("PRCSID");
        final String param3 = request.getParameter("CUSID");
        final String param4 = request.getParameter("MAILID");
        final String param5 = request.getParameter("PARAM5");
        ArrayList<String> Data = new ArrayList<String>();
        Data = (ArrayList<String>)GetDBData.Call(param1, param2, param3, param4, param5, "LSW_SFRMMAILOTP");
        final String RPTURL = Data.get(0);
        final String CC = Data.get(1);
        final String BCC = Data.get(2);
        final String subject = Data.get(3);
        final String fromId = Data.get(4);
        final String password = Data.get(5);
        final String host = Data.get(6);
        final String port = Data.get(7);
        final String ERR_FLG = Data.get(8);
        final String ERR_MSG = Data.get(9);
        final String TOMAIL = Data.get(10);
        String retval = "";
        if (ERR_FLG.toString().equals("N")) {
            final MailSendWthAttchRPTBdy MS = new MailSendWthAttchRPTBdy();
            final String s1 = MS.Send(fromId, password, TOMAIL, CC, BCC, subject, RPTURL, String.valueOf(host) + "|" + port, "", "");
            return s1;
        }
        retval = ERR_MSG;
        return retval;
    }
    
    @RequestMapping(value = { "MailVerfy" }, method = { RequestMethod.GET })
    public String MailVerfy(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final String url = String.valueOf(request.getScheme()) + "://" + request.getServerName() + ":" + request.getServerPort() + request.getRequestURI() + "?" + request.getQueryString();
        String Param1 = "";
        String Param2 = "";
        String Param3 = "";
        String Param4 = "";
        final String Param5 = "";
        try {
            Pattern p = Pattern.compile("VERIFICATION=([^&]+)");
            Matcher m = p.matcher(url);
            while (m.find()) {
                Param1 = m.group();
            }
            Param1 = Param1.replace("VERIFICATION=", "");
            p = Pattern.compile("ID1=([^&]+)");
            m = p.matcher(url);
            while (m.find()) {
                Param2 = m.group();
            }
            Param2 = Param2.replace("ID1=", "");
            p = Pattern.compile("ID2=([^&]+)");
            m = p.matcher(url);
            while (m.find()) {
                Param3 = m.group();
            }
            Param3 = Param3.replace("ID2=", "");
            p = Pattern.compile("ID3=([^&]+)");
            m = p.matcher(url);
            while (m.find()) {
                Param4 = m.group();
            }
            Param4 = Param4.replace("ID3=", "");
            ArrayList<String> Data = new ArrayList<String>();
            Data = (ArrayList<String>)GetDBData.Call(Param1, Param2, Param3, Param4, Param5, "LSW_SVERFYMAILOTP");
            final String RPTURL = Data.get(0);
            request.setAttribute("RPTURL", (Object)Data.get(0));
        }
        catch (PatternSyntaxException ex) {}
        return "Interface/EmailVerify";
    }
    
    @RequestMapping(value = { "FinanceRequestView" }, method = { RequestMethod.GET })
    public String FinanceRequestView(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "FinanceRequestView";
    }
    
    @RequestMapping(value = { "POAcceptanceA" }, method = { RequestMethod.GET })
    public String POAcceptanceA(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "POAcceptanceA";
    }
    
    @RequestMapping(value = { "POAcceptanceV" }, method = { RequestMethod.GET })
    public String POAcceptanceV(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "POAcceptanceV";
    }
    
    @RequestMapping(value = { "InvoiceAcceptanceA" }, method = { RequestMethod.GET })
    public String InvoiceAcceptanceA(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "InvoiceAcceptanceA";
    }
    
    @RequestMapping(value = { "InvoiceAcceptanceV" }, method = { RequestMethod.GET })
    public String InvoiceAcceptanceV(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "InvoiceAcceptanceV";
    }
    
    @RequestMapping(value = { "Inbox" }, method = { RequestMethod.GET })
    public String Inbox(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "Inbox";
    }
    
    @RequestMapping(value = { "View" }, method = { RequestMethod.GET })
    public String View(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "View";
    }
    
    @RequestMapping(value = { "WfConfig" }, method = { RequestMethod.GET })
    public String WfConfig(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "WfConfig";
    }
    
    @RequestMapping(value = { "UsrConfig" }, method = { RequestMethod.GET })
    public String UsrConfig(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "UsrConfig";
    }
    
    @RequestMapping(value = { "Profile" }, method = { RequestMethod.GET })
    public String Profile(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "Profile";
    }
    
    @RequestMapping(value = { "CompConfig" }, method = { RequestMethod.GET })
    public String CompConfig(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "CompConfig";
    }
    
    @RequestMapping(value = { "TransactionQuery" }, method = { RequestMethod.GET })
    public String TransactionQuery(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "TransactionQuery";
    }
    
    @RequestMapping(value = { "Reports" }, method = { RequestMethod.GET })
    public String Reports(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) {
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
        return "Reports";
    }
    
    @RequestMapping(value = { "BatchUpdate" }, method = { RequestMethod.POST })
    @ResponseBody
    public String BatchUpdate(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        try {
            final UI_GetData getdata = new UI_GetData();
            final String param1 = request.getParameter("param1");
            final String param2 = request.getParameter("param2");
            final String param3 = request.getParameter("param3");
            final String param4 = request.getParameter("param4");
            final String param5 = request.getParameter("param5");
            final String spname = request.getParameter("spname");
            final String DBSrc = request.getParameter("DBSrc");
            final String Token = request.getParameter("Token");
            getdata.param1(param1);
            getdata.param2(param2);
            getdata.param3(param3);
            getdata.param4(param4);
            getdata.param5(param5);
            getdata.spname(spname);
            getdata.DBSrc(DBSrc);
            final Object time = session.getAttribute("LogSession");
            System.out.print("BatchUpdateCall");
            OP = getdata.UI_GetData1();
        }
        catch (Exception e) {
            System.out.print(e);
        }
        return OP;
    }
    
    @RequestMapping(value = { "Paymentgateway" }, method = { RequestMethod.GET })
    public String Paymentgateway(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        final String UniqueID = request.getParameter("UniqueID");
        final String Type = request.getParameter("Type");
        final String Prvnt = request.getParameter("Prvnt");
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        OP = PaymentGW.PaymentCall(UniqueID, Type, Prvnt);
        if (OP.equals("Invalid Request")) {
            throw new ServletException("Invalid Request...");
        }
        return "redirect:" + OP;
    }
    
    @RequestMapping(value = { "PaymentgatewayRes" }, method = { RequestMethod.POST })
    public String PaymentgatewayRes(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        final String PGResponse = request.getParameter("msg");
        final String Prvnt = request.getParameter("Prvnt");
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        OP = PaymentGW.PaymentCallRes(PGResponse, Prvnt);
        if (OP.equals("Invalid Response")) {
            throw new ServletException("Invalid Response...");
        }
        return "redirect:" + OP;
    }
    
    @RequestMapping(value = { "DisbPostingCall" }, method = { RequestMethod.POST })
    @ResponseBody
    public String DisbPostingCall(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        try {
            final Properties props = new Properties();
            FileInputStream fis = null;
            final FileInputStream fis2 = null;
            final Connection con = null;
            String Profile = "";
            try {
                final Properties prop = new Properties();
                final URL songPath = DBConnection.class.getResource("");
                final String[] pathArr = songPath.toString().split("file:/|/TPLSW");
                final String Path = pathArr[1];
                fis = new FileInputStream(String.valueOf(Path) + "/TPLSW/WEB-INF/Config.properties");
                if (fis == null) {
                    throw new FileNotFoundException("property file '" + fis + "' not found in the classpath");
                }
                prop.load(fis);
                Profile = prop.getProperty("DisbPostingURL");
                fis.close();
            }
            catch (Exception e) {
                e.printStackTrace();
            }
            try {
                final String URLBatch = Profile;
                final String param1 = request.getParameter("param1");
                final String param2 = request.getParameter("param2");
                final String param3 = request.getParameter("param3");
                final String param4 = request.getParameter("param4");
                final String param5 = request.getParameter("param5");
                final String spname = request.getParameter("spname");
                final String spname2 = request.getParameter("spname2");
                final String spname3 = request.getParameter("spname3");
                final String POST_PARAMS = "param1=" + param1 + "&param2=" + param2 + "&param3=" + param3 + "&param4=" + param4 + "&param5=" + param5 + "&spname=" + spname + "&spname2=" + spname2 + "&spname3=" + spname3;
                final URL obj = new URL(URLBatch);
                final HttpURLConnection con2 = (HttpURLConnection)obj.openConnection();
                con2.setRequestMethod("POST");
                con2.setDoOutput(true);
                final OutputStream os = con2.getOutputStream();
                os.write(POST_PARAMS.getBytes());
                os.flush();
                os.close();
                final int responseCode = con2.getResponseCode();
                System.out.println("POST Response Code :: " + responseCode);
                if (responseCode == 200) {
                    final BufferedReader in = new BufferedReader(new InputStreamReader(con2.getInputStream()));
                    final StringBuffer response2 = new StringBuffer();
                    String inputLine;
                    while ((inputLine = in.readLine()) != null) {
                        response2.append(inputLine);
                    }
                    in.close();
                    OP = response2.toString();
                    System.out.println(response2.toString());
                }
                else {
                    System.out.println("POST request not worked");
                }
            }
            catch (IOException e2) {
                e2.printStackTrace();
            }
            System.out.print("BatchPostingCall");
        }
        catch (Exception e3) {
            System.out.print(e3);
        }
        return OP;
    }
    
    @RequestMapping(value = { "CorpCodeUpd" }, method = { RequestMethod.GET })
    @ResponseBody
    public String CorpCodeUpd(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        try {
            final UI_GetData getdata = new UI_GetData();
            final String param1 = request.getParameter("param1");
            final String param2 = request.getParameter("param2");
            final String param3 = request.getParameter("param3");
            final String param4 = request.getParameter("param4");
            final String param5 = request.getParameter("param5");
            final String spname = request.getParameter("spname");
            final String DBSrc = request.getParameter("DBSrc");
            final String Token = request.getParameter("Token");
            getdata.param1(param1);
            getdata.param2(param2);
            getdata.param3(param3);
            getdata.param4(param4);
            getdata.param5(param5);
            getdata.spname(spname);
            getdata.DBSrc(DBSrc);
            final Object time = session.getAttribute("LogSession");
            System.out.print("CorpCodeUpd");
            return getdata.UI_GetData1();
        }
        catch (Exception e) {
            System.out.print(e);
            return null;
        }
    }
    
    @RequestMapping(value = { "/GetNextNavAction" }, method = { RequestMethod.GET })
    public String GetNextNavAction(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final UI_GetPageURL getdata = new UI_GetPageURL();
        final String MenuID = request.getParameter("MnuID");
        final String PrcsID = request.getParameter("PrcsID");
        final String ActvID = request.getParameter("ActvID");
        final String FormAction = request.getParameter("FormAction");
        final String FormName = request.getParameter("FormName");
        final String FormColor = request.getParameter("FormColor");
        final String PrMs1 = request.getParameter("PrMs1");
        final String PrMs2 = request.getParameter("PrMs2");
        final String PrMs3 = request.getParameter("PrMs3");
        final String PrMs4 = request.getParameter("PrMs4");
        final String PrMs5 = request.getParameter("PrMs5");
        final String PrMs6 = request.getParameter("PrMs6");
        final String PrMs7 = request.getParameter("PrMs7");
        final String PrMs8 = request.getParameter("PrMs8");
        final String PrMs9 = request.getParameter("PrMs9");
        final String PrMs10 = request.getParameter("PrMs10");
        final String DBSrc = request.getParameter("DBSrc");
        final String Action = request.getParameter("Action");
        final String spname = "SAM_SGetMenuPageURL";
        getdata.mnuid(MenuID);
        getdata.action("");
        getdata.DBSrc(DBSrc);
        getdata.spname(spname);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String URLXML = getdata.UI_GetPageURL1();
        String PageURL = "";
        String WFURL = "";
        String Param = "";
        final Document doc = CommonFns.convertStringToXMLDocument(URLXML);
        final NodeList nodes = doc.getElementsByTagName("a");
        for (int i = 0; i < nodes.getLength(); ++i) {
            final Element element = (Element)nodes.item(i);
            final NodeList name = element.getElementsByTagName("WFURL");
            final Element line = (Element)name.item(0);
            WFURL = CommonFns.getCharacterDataFromElement(line);
            final NodeList name2 = element.getElementsByTagName("PageURL");
            final Element line2 = (Element)name2.item(0);
            PageURL = CommonFns.getCharacterDataFromElement(line2);
        }
        if (!WFURL.equals("")) {
            Param = "?Action=" + Action + "&PrcsID=" + PrcsID + "&ActvID=" + ActvID + "&FormAction=" + FormAction + "&FormName=" + FormName + "&FormColor=" + FormColor + "&WFURL=" + WFURL + "&PrMs1=" + PrMs1 + "&PrMs2=" + PrMs2 + "&PrMs3=" + PrMs3 + "&PrMs4=" + PrMs4 + "&PrMs5=" + PrMs5 + "&PrMs6=" + PrMs6 + "&PrMs7=" + PrMs7 + "&PrMs8=" + PrMs8 + "&PrMs9=" + PrMs9 + "&PrMs10=" + PrMs10;
        }
        else {
            Param = "?Action=" + Action + "&PrcsID=" + PrcsID + "&ActvID=" + ActvID + "&FormAction=" + FormAction + "&FormName=" + FormName + "&FormColor=" + FormColor + "&PrMs1=" + PrMs1 + "&PrMs2=" + PrMs2 + "&PrMs3=" + PrMs3 + "&PrMs4=" + PrMs4 + "&PrMs5=" + PrMs5 + "&PrMs6=" + PrMs6 + "&PrMs7=" + PrMs7 + "&PrMs8=" + PrMs8 + "&PrMs9=" + PrMs9 + "&PrMs10=" + PrMs10;
        }
        return "redirect:" + PageURL + Param;
    }
    
    @RequestMapping(value = { "EOD" }, method = { RequestMethod.GET })
    public String EOD(final Locale locale, final Model model, final HttpSession session) {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        return "EOD/SCF_fEOD";
    }
    
    @RequestMapping(value = { "SCF_LimitSystem" }, method = { RequestMethod.GET })
    public String SCF_LimitSystem(final Locale locale, final Model model, final HttpSession session) {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        return "LimitSystem/LimitSystem";
    }
    
    @RequestMapping(value = { "Treeviews" }, method = { RequestMethod.GET })
    public String Treeviews(final Locale locale, final Model model, final HttpSession session) {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        return "LimitSystem/TreeView/basic-example";
    }
    
    @RequestMapping(value = { "SCF_HierTreeviews" }, method = { RequestMethod.GET })
    public String HierTreeviews(final Locale locale, final Model model, final HttpSession session) {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        return "LimitSystem/LSW_fHierarchyTree/LSW_fHierarchyTree";
    }
    
    @RequestMapping(value = { "AutoLogin" }, method = { RequestMethod.GET })
    public String AutoLogin(final Locale locale, final Model model, final HttpSession session) {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        return "Common/Pages/Userview/AutoLogin";
    }
    
    @RequestMapping(value = { "SalesDashBoard" }, method = { RequestMethod.GET })
    public String DashBoard(final Locale locale, final Model model, final HttpSession session) {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        return "Common/Pages/Userview/SalesDashBoard";
    }
    
    @RequestMapping(value = { "LGS" }, method = { RequestMethod.GET })
    @ResponseBody
    public String LoginSes(final Locale locale, final Model model, final HttpSession session, final HttpServletRequest request, final HttpServletResponse response) throws IOException {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        String OP = "";
        final String propFileName = "DBSource.properties";
        String ADAUTH = "";
        String DEFPWD = "";
        String SessionID = "";
        String IP = "";
        String REQ = "";
        String url = "";
        String ADSearch = "";
        final String Location = "";
        final String Cord = "";
        String LGSR = "";
        String LGURL = "";
        String macAddress = "";
        String IP2 = "";
        InetAddress ip = null;
        final Properties prop = new Properties();
        final Base64.Decoder decoder = Base64.getDecoder();
        if (request.getHeader("x-forwarded-for") == null) {
            IP = request.getRemoteAddr();
        }
        else {
            IP = request.getHeader("x-forwarded-for");
        }
        IP2 = new String(decoder.decode(request.getParameter("parmc")));
        final String strMac = "";
        try {
            ip = InetAddress.getLocalHost();
            final NetworkInterface network = NetworkInterface.getByInetAddress(ip);
            final byte[] mac = network.getHardwareAddress();
            final StringBuilder sb = new StringBuilder();
            for (int i = 0; i < mac.length; ++i) {
                sb.append(String.format("%02X%s", mac[i], (i < mac.length - 1) ? "-" : ""));
            }
            macAddress = sb.toString();
        }
        catch (UnknownHostException e) {
            e.printStackTrace();
        }
        catch (SocketException e2) {
            e2.printStackTrace();
        }
        String FileName = "";
        FileName = System.getProperty("catalina.base");
        FileName = String.valueOf(FileName) + "/conf/" + propFileName;
        final InputStream inputStream = new FileInputStream(FileName);
        if (inputStream != null) {
            prop.load(inputStream);
            ADAUTH = prop.getProperty("ADAUTH");
            DEFPWD = prop.getProperty("DEFPWD");
            url = prop.getProperty("ADURL");
            ADSearch = prop.getProperty("ADSearch");
            inputStream.close();
            String Username = request.getParameter("parma");
            final String Code = request.getParameter("CPM");
            String Password;
            String PasswordTxt = Password = new String(decoder.decode(request.getParameter("parmb")));
            Username = new String(decoder.decode(Username));
            if (ADAUTH.equals("Yes")) {
                OP = LDAP.getLDAP(Username, PasswordTxt, url, ADSearch);
                Password = DEFPWD;
                PasswordTxt = DEFPWD;
                REQ = String.valueOf(ADAUTH) + '~' + OP;
            }
            else {
                OP = "Success";
                REQ = "LOGIN";
            }
            if (OP.equals("Success")) {
                try {
                    final MessageDigest m = MessageDigest.getInstance("MD5");
                    final byte[] data = Password.getBytes();
                    m.update(data, 0, data.length);
                    final BigInteger j = new BigInteger(1, m.digest());
                    Password = String.format("%1$032x", j);
                }
                catch (Exception ex) {}
            }
            final double x = Math.random();
            final double y = Math.random();
            SessionID = String.valueOf(Username) + "|" + "SESS" + x + y;
            final Connection con = DBConnection.getConnection((String)null);
            final String str = null;
            ResultSet rs = null;
            PreparedStatement proc_stmt = null;
            final String xml = "";
            Label_1140: {
                try {
                    proc_stmt = con.prepareStatement("{ call LSW_SDIRUSERLOG (?,?,?,?,?,?,?,?) }");
                    proc_stmt.setString(1, Username);
                    proc_stmt.setString(2, SessionID);
                    proc_stmt.setString(3, Password);
                    proc_stmt.setString(4, PasswordTxt);
                    proc_stmt.setString(5, String.valueOf(IP) + "|" + IP2 + "|" + ip.getHostAddress() + "|" + ip.getHostName());
                    proc_stmt.setString(6, Location);
                    proc_stmt.setString(7, macAddress);
                    proc_stmt.setString(8, REQ);
                    rs = proc_stmt.executeQuery();
                    final ResultSetMetaData rsmd = rs.getMetaData();
                    final int colCount = rsmd.getColumnCount();
                    while (rs.next()) {
                        LGSR = rs.getString(1);
                        LGURL = rs.getString(2);
                    }
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
                catch (Exception e3) {
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
                    catch (SQLException sqlee) {
                        sqlee.printStackTrace();
                    }
                    e3.printStackTrace();
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
                    catch (SQLException sqlee2) {
                        sqlee2.printStackTrace();
                    }
                    break Label_1140;
                }
                finally {
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
                    catch (SQLException sqlee2) {
                        sqlee2.printStackTrace();
                    }
                }
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
                catch (SQLException sqlee2) {
                    sqlee2.printStackTrace();
                }
            }
            if (LGSR.equals("LOGIN SUCCESSFUL")) {
                session.setAttribute("LogSession", (Object)SessionID);
                session.setAttribute("UsrSession", (Object)Username);
                session.setAttribute("CPMSession", (Object)PasswordTxt);
            }
            return String.valueOf(LGSR) + "|" + LGURL;
        }
        throw new FileNotFoundException("property file '" + inputStream + "' not found in the classpath");
    }
    
    @RequestMapping(value = { "/SendMail" }, method = { RequestMethod.POST })
    @ResponseBody
    public String MailView(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final String To = request.getParameter("To");
        final String Title = request.getParameter("Title");
        final String MsgContent = request.getParameter("MsgContent");
        final String fromMail = request.getParameter("fromMail");
        final String fromPwd = request.getParameter("fromPwd");
        final String Prophost = request.getParameter("Prophost");
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final MailSending MS = new MailSending();
        final String s1 = MS.Send(fromMail, fromPwd, To, "", Title, MsgContent, Prophost);
        return s1;
    }
    
    @RequestMapping(value = { "/UpSendMail" }, method = { RequestMethod.POST })
    @ResponseBody
    public String UpMailView(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final String To = request.getParameter("To");
        final String Title = request.getParameter("Title");
        final String MsgContent = request.getParameter("MsgContent");
        final String fromMail = request.getParameter("fromMail");
        final String fromPwd = request.getParameter("fromPwd");
        final String Prophost = request.getParameter("Prophost");
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final UpMailSending MS = new UpMailSending();
        final String s1 = MS.Send(fromMail, fromPwd, To, "", Title, MsgContent, Prophost);
        return s1;
    }
    
    @RequestMapping(value = { "/UI_GetData" }, method = { RequestMethod.POST })
    @ResponseBody
    public String UI_GetData(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        try {
            final UI_GetData getdata = new UI_GetData();
            final String param1 = request.getParameter("param1");
            final String param2 = request.getParameter("param2");
            final String param3 = request.getParameter("param3");
            final String param4 = request.getParameter("param4");
            final String param5 = request.getParameter("param5");
            final String spname = request.getParameter("spname");
            final String DBSrc = request.getParameter("DBSrc");
            final String Token = request.getParameter("Token");
            getdata.param1(param1);
            getdata.param2(param2);
            getdata.param3(param3);
            getdata.param4(param4);
            getdata.param5(param5);
            getdata.spname(spname);
            getdata.DBSrc(DBSrc);
            final Object time = session.getAttribute("LogSession");
            return getdata.UI_GetData1();
        }
        catch (Exception e) {
            System.out.print(e);
            return null;
        }
    }
    
    @RequestMapping(value = { "/UI_GetDataLrg" }, method = { RequestMethod.POST })
    @ResponseBody
    public String UI_GetDataLrg(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        try {
            final UI_GetDataLrg getdata = new UI_GetDataLrg();
            final String param1 = request.getParameter("param1");
            final String param2 = request.getParameter("param2");
            final String param3 = request.getParameter("param3");
            final String param4 = request.getParameter("param4");
            final String param5 = request.getParameter("param5");
            final String spname = request.getParameter("spname");
            final String DBSrc = request.getParameter("DBSrc");
            final String Token = request.getParameter("Token");
            getdata.param1(param1);
            getdata.param2(param2);
            getdata.param3(param3);
            getdata.param4(param4);
            getdata.param5(param5);
            getdata.spname(spname);
            getdata.DBSrc(DBSrc);
            final Object time = session.getAttribute("LogSession");
            return getdata.UI_GetData1();
        }
        catch (Exception e) {
            System.out.print(e);
            return null;
        }
    }
    
    @RequestMapping(value = { "/UI_LoginGetData" }, method = { RequestMethod.POST })
    @ResponseBody
    public String UI_LoginGetData(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        try {
            final UI_LoginGetData getdata = new UI_LoginGetData();
            final String param1 = request.getParameter("param1");
            final String param2 = request.getParameter("param2");
            final String param3 = request.getParameter("param3");
            final String param4 = request.getParameter("param4");
            final String param5 = request.getParameter("param5");
            final String spname = request.getParameter("spname");
            final String DBSrc = request.getParameter("DBSrc");
            getdata.param1(param1);
            getdata.param2(param2);
            getdata.param3(param3);
            getdata.param4(param4);
            getdata.param5(param5);
            getdata.spname(spname);
            getdata.DBSrc(DBSrc);
            return getdata.UI_LoginGetData1();
        }
        catch (Exception e) {
            System.out.print(e);
            return null;
        }
    }
    
    @RequestMapping(value = { "/UI_fetchformdata" }, method = { RequestMethod.POST })
    @ResponseBody
    public String UI_fetchformdata(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final UI_fetchformdata fetchformdata = new UI_fetchformdata();
        final String param1 = request.getParameter("id");
        final String param2 = request.getParameter("TableName");
        final String DBSrc = request.getParameter("DBSrc");
        fetchformdata.param1(param1);
        fetchformdata.param2(param2);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = fetchformdata.UI_fetchformdata1();
        return retval;
    }
    
    @RequestMapping(value = { "/GridView" }, method = { RequestMethod.POST })
    @ResponseBody
    public String GridView(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final GridView getdata = new GridView();
        final String param1 = request.getParameter("Param");
        final String param2 = request.getParameter("brid");
        final String param3 = request.getParameter("MnuId");
        final String spname = request.getParameter("spname");
        final String DBSrc = request.getParameter("DBSrc");
        getdata.param1(param1);
        getdata.param2(param2);
        getdata.param3(param3);
        getdata.spname(spname);
        getdata.DBSrc(DBSrc);
        final String retval = getdata.UI_GetGridview();
        return retval;
    }
    
    @RequestMapping(value = { "MDMS" }, method = { RequestMethod.POST })
    @ResponseBody
    public String MDMS(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final DMS getdata = new DMS();
        final boolean isMultipart = ServletFileUpload.isMultipartContent(request);
        final String PrcsID = request.getParameter("PrcsID");
        final String FormName = request.getParameter("FormName");
        final String names = request.getParameter("names");
        final String descrptns = request.getParameter("descrptns");
        final String flsize = request.getParameter("flsize");
        final String vrsnno = request.getParameter("vrsnno");
        final String usrpwd = request.getParameter("usrpwd");
        final String domain = request.getParameter("domain");
        final String CusID = request.getParameter("CusID");
        final String DocName = request.getParameter("DocName");
        final String DBSrc = request.getParameter("DBSrc");
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
        final String retval = getdata.DMSPUSH(request, response);
        return retval;
    }
    
    @RequestMapping(value = { "MDMSVIEW" }, method = { RequestMethod.GET })
    @ResponseBody
    public void MDMSVIEW(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final boolean isMultipart = ServletFileUpload.isMultipartContent(request);
        final String PrcsID = request.getParameter("PrcsID");
        final String DMSID = request.getParameter("DMSID");
        String DMSURL = "";
        String fileNAME = "";
        String format = "";
        final String retval = "";
        ArrayList<String> Data = new ArrayList<String>();
        Data = (ArrayList<String>)GetDBData.Call(PrcsID, DMSID, "", "", "", "LSW_SDMSVIEW");
        DMSURL = Data.get(0);
        fileNAME = Data.get(1);
        format = Data.get(2);
        final URL url = new URL(DMSURL);
        final HttpURLConnection httpConn = (HttpURLConnection)url.openConnection();
        final int responseCode = httpConn.getResponseCode();
        if (responseCode == 200) {
            final ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            final byte[] chunk = new byte[4096];
            final InputStream stream = httpConn.getInputStream();
            try {
                int bytesRead;
                while ((bytesRead = stream.read(chunk)) > 0) {
                    outputStream.write(chunk, 0, bytesRead);
                }
                stream.close();
                final byte[] DocContent = outputStream.toByteArray();
                outputStream.close();
                response.setContentLength(DocContent.length);
                response.setHeader("Content-Disposition", "attachment; filename=" + fileNAME);
                final OutputStream outStream = (OutputStream)response.getOutputStream();
                outStream.write(DocContent);
                outStream.flush();
                outStream.close();
            }
            catch (IOException e) {
                stream.close();
                outputStream.close();
                e.printStackTrace();
            }
        }
    }
    
    @RequestMapping(value = { "/FncallWebserviceGridView" }, method = { RequestMethod.POST })
    @ResponseBody
    public String FncallWebserviceGridView(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final FncallWebserviceGrid getdata = new FncallWebserviceGrid();
        final String param1 = request.getParameter("Param");
        final String param2 = request.getParameter("brid");
        final String param3 = request.getParameter("MnuId");
        final String spname = request.getParameter("spname");
        final String DBSrc = request.getParameter("DBSrc");
        getdata.param1(param1);
        getdata.param2(param2);
        getdata.param3(param3);
        getdata.DBSrc(DBSrc);
        getdata.spname(spname);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.UI_GetFncallWSGridview();
        return retval;
    }
    
    @RequestMapping(value = { "/UI_formdatains" }, method = { RequestMethod.POST })
    @ResponseBody
    public String UI_formdatains(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final UI_formdatainsert getdata = new UI_formdatainsert();
        final String xml = request.getParameter("xml");
        final String tablenameins = request.getParameter("tablenameins");
        final String tablenameins2 = request.getParameter("tablenameins1");
        final String activityid = request.getParameter("activityid");
        final String activityname = request.getParameter("activityname");
        final String DBSrc = request.getParameter("DBSrc");
        getdata.xml(xml);
        getdata.tablenameins(tablenameins);
        getdata.tablenameins1(tablenameins2);
        getdata.activityid(activityid);
        getdata.activityname(activityname);
        getdata.DBSrc(DBSrc);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.UI_formdatainsertdata();
        return retval;
    }
    
    @RequestMapping(value = { "/UI_fetchformdata_get2date" }, method = { RequestMethod.POST })
    @ResponseBody
    public String UI_fetchformdata_get2date(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final UI_fetchformdata_get2date getdata = new UI_fetchformdata_get2date();
        final String DBSrc = request.getParameter("DBSrc");
        getdata.DBSrc(DBSrc);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.UI_fetchformdata_get2date1();
        return retval;
    }
    
    @RequestMapping(value = { "/UI_GetLoginPwd" }, method = { RequestMethod.POST })
    @ResponseBody
    public String UI_GetLoginPwd(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final UI_GetLoginPwd getdata = new UI_GetLoginPwd();
        final String username = request.getParameter("username");
        final String DBSrc = request.getParameter("DBSrc");
        getdata.username(username);
        getdata.DBSrc(DBSrc);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.UI_GetLoginPwd1();
        return retval;
    }
    
    @RequestMapping(value = { "/CS_FetchFormFieldData" }, method = { RequestMethod.POST })
    @ResponseBody
    public String CS_FetchFormFieldData(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final CS_FetchFormFieldData getdata = new CS_FetchFormFieldData();
        final String param1 = request.getParameter("param1");
        final String param2 = request.getParameter("param2");
        final String param3 = request.getParameter("param3");
        final String param4 = request.getParameter("param4");
        final String param5 = request.getParameter("param5");
        final String spname = request.getParameter("spname");
        final String DBSrc = request.getParameter("DBSrc");
        getdata.param1(param1);
        getdata.param2(param2);
        getdata.param3(param3);
        getdata.param4(param4);
        getdata.param5(param5);
        getdata.DBSrc(DBSrc);
        getdata.spname(spname);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.CS_FetchFormFieldData();
        return retval;
    }
    
    @RequestMapping(value = { "/CS_Migrformdata" }, method = { RequestMethod.POST })
    @ResponseBody
    public String CS_Migrformdata(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final CS_Migrformdata getdata = new CS_Migrformdata();
        final String Fromfields = request.getParameter("Fromfields");
        final String Tofields = request.getParameter("Tofields");
        final String Fromtable = request.getParameter("Fromtable");
        final String Totable = request.getParameter("Totable");
        final String ProcessID = request.getParameter("ProcessID");
        final String spname = request.getParameter("spname");
        final String DBSrc = request.getParameter("DBSrc");
        getdata.Fromfields(Fromfields);
        getdata.Tofields(Tofields);
        getdata.Fromtable(Fromtable);
        getdata.Totable(Totable);
        getdata.ProcessID(ProcessID);
        getdata.DBSrc(DBSrc);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.CS_Migrformdata();
        return retval;
    }
    
    @RequestMapping(value = { "/UI_fetchActivityform" }, method = { RequestMethod.POST })
    @ResponseBody
    public String UI_fetchActivityform(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final UI_fetchActivityform getdata = new UI_fetchActivityform();
        final String ProcessDefID = request.getParameter("ProcessDefID");
        final String ActivityDefID = request.getParameter("ActivityDefID");
        final String DBSrc = request.getParameter("DBSrc");
        getdata.ProcessDefID(ProcessDefID);
        getdata.ActivityDefID(ActivityDefID);
        getdata.DBSrc(DBSrc);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.UI_fetchActivityform();
        return retval;
    }
    
    @RequestMapping(value = { "/UI_fetchformButtonData" }, method = { RequestMethod.POST })
    @ResponseBody
    public String UI_fetchformButtonData(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final UI_fetchformButtonData getdata = new UI_fetchformButtonData();
        final String ProcessDefID = request.getParameter("ProcessDefID");
        final String ActivityDefID = request.getParameter("ActivityDefID");
        final String DBSrc = request.getParameter("DBSrc");
        getdata.ProcessDefID(ProcessDefID);
        getdata.ActivityDefID(ActivityDefID);
        getdata.DBSrc(DBSrc);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.UI_fetchformButtonData();
        return retval;
    }
    
    @RequestMapping(value = { "/UI_fetchformdata_get2dateTime" }, method = { RequestMethod.POST })
    @ResponseBody
    public String UI_fetchformdata_get2dateTime(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final UI_fetchformdata_get2dateTime getdata = new UI_fetchformdata_get2dateTime();
        final String DBSrc = request.getParameter("DBSrc");
        getdata.DBSrc(DBSrc);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.UI_fetchformdata_get2dateTime();
        return retval;
    }
    
    @RequestMapping(value = { "/UI_formdatains_General" }, method = { RequestMethod.POST })
    @ResponseBody
    public String UI_formdatains_General(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final UI_formdatains_General getdata = new UI_formdatains_General();
        final String DBSrc = request.getParameter("DBSrc");
        getdata.DBSrc(DBSrc);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.UI_formdatains_General();
        return retval;
    }
    
    @RequestMapping(value = { "/deletefile" }, method = { RequestMethod.POST })
    @ResponseBody
    public String deletefile(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final deletefile getdata = new deletefile();
        final String DBSrc = request.getParameter("DBSrc");
        final String retval = getdata.deletefile();
        return retval;
    }
    
    @RequestMapping(value = { "/UI_formdata_GetMainPageHTML" }, method = { RequestMethod.POST })
    @ResponseBody
    public String UI_formdata_GetMainPageHTML(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final UI_formdata_GetMainPageHTML getdata = new UI_formdata_GetMainPageHTML();
        final String Username = request.getParameter("Username");
        final String MenuName = request.getParameter("MenuName");
        final String DBSrc = request.getParameter("DBSrc");
        getdata.Username(Username);
        getdata.MenuName(MenuName);
        getdata.DBSrc(DBSrc);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.UI_formdata_GetMainPageHTML();
        return retval;
    }
    
    @RequestMapping(value = { "/FileUploadHandler" }, method = { RequestMethod.POST })
    @ResponseBody
    public String FileUploadHandler(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final FileUploadHandler getdata = new FileUploadHandler();
        final boolean isMultipart = ServletFileUpload.isMultipartContent(request);
        final String PrcsID = request.getParameter("PrcsID");
        final String FormName = request.getParameter("FormName");
        final String names = request.getParameter("names");
        final String descrptns = request.getParameter("descrptns");
        final String flsize = request.getParameter("flsize");
        final String vrsnno = request.getParameter("vrsnno");
        final String usrpwd = request.getParameter("usrpwd");
        final String domain = request.getParameter("domain");
        final String CusID = request.getParameter("CusID");
        final String DocName = request.getParameter("DocName");
        final String DBSrc = request.getParameter("DBSrc");
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
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.FileUploadHandler(request, response);
        return retval;
    }
    
    @RequestMapping(value = { "/PANCINDIN" }, method = { RequestMethod.GET })
    @ResponseBody
    public String PANCINDIN(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final PANCINDIN getdata = new PANCINDIN();
        final String param1 = request.getParameter("param1");
        final String param2 = request.getParameter("param2");
        final String param3 = request.getParameter("param3");
        final String param4 = request.getParameter("param4");
        final String param5 = request.getParameter("param5");
        final String DBSrc = request.getParameter("DBSrc");
        final String spname = request.getParameter("spname");
        getdata.param1(param1);
        getdata.param2(param2);
        getdata.param3(param3);
        getdata.param4(param4);
        getdata.param5(param5);
        getdata.DBSrc(DBSrc);
        getdata.spname(spname);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.PANCINDIN();
        return retval;
    }
    
    @RequestMapping(value = { "/GetExclDataNOF" }, method = { RequestMethod.POST })
    @ResponseBody
    public String GetExclDataNOF(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final GetExclDataNOF getdata = new GetExclDataNOF();
        final String param1 = request.getParameter("param1");
        final String param2 = request.getParameter("param2");
        final String param3 = request.getParameter("param3");
        final String param4 = request.getParameter("param4");
        final String param5 = request.getParameter("param5");
        final String param6 = request.getParameter("param6");
        final String param7 = request.getParameter("param7");
        final String DBSrc = request.getParameter("DBSrc");
        final String spname = request.getParameter("spname");
        getdata.param1(param1);
        getdata.param2(param2);
        getdata.param3(param3);
        getdata.param4(param4);
        getdata.param5(param5);
        getdata.param6(param6);
        getdata.param7(param7);
        getdata.DBSrc(DBSrc);
        getdata.spname(spname);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.GetExclData();
        return retval;
    }
    
    @RequestMapping(value = { "/MailSendWthAttchRPTBdy" }, method = { RequestMethod.POST })
    @ResponseBody
    public String MailSendWthAttchRPTBdy(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final String To = request.getParameter("To");
        final String Title = request.getParameter("Title");
        final String MsgContent = request.getParameter("MsgContent");
        final String fromMail = request.getParameter("fromMail");
        final String fromPwd = request.getParameter("fromPwd");
        final String Prophost = request.getParameter("Prophost");
        final String ccEmail = request.getParameter("ccEmail");
        final String FleNme = request.getParameter("FleNme");
        final String RptUrl = request.getParameter("RptUrl");
        final String bccEmail = request.getParameter("bccEmail");
        final MailSendWthAttchRPTBdy MS = new MailSendWthAttchRPTBdy();
        final String s1 = MS.Send(fromMail, fromPwd, To, ccEmail, bccEmail, Title, MsgContent, Prophost, FleNme, RptUrl);
        return s1;
    }
    
    @RequestMapping(value = { "/GetExclDataSheet" }, method = { RequestMethod.POST })
    @ResponseBody
    public String GetExclDataSheet(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final GetExclDataSheet getdata = new GetExclDataSheet();
        final String param1 = request.getParameter("param1");
        final String param2 = request.getParameter("param2");
        final String param3 = request.getParameter("param3");
        final String param4 = request.getParameter("param4");
        final String param5 = request.getParameter("param5");
        final String param6 = request.getParameter("param6");
        final String param7 = request.getParameter("param7");
        final String param8 = request.getParameter("param8");
        final String FName = request.getParameter("FName");
        final String DBSrc = request.getParameter("DBSrc");
        final String spname = request.getParameter("spname");
        final String sheetname = request.getParameter("sheetname");
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
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.GetExclData();
        return retval;
    }
    
    @RequestMapping(value = { "/GetExclData" }, method = { RequestMethod.POST })
    @ResponseBody
    public String GetExclData(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final GetExclData getdata = new GetExclData();
        final String param1 = request.getParameter("param1");
        final String param2 = request.getParameter("param2");
        final String param3 = request.getParameter("param3");
        final String param4 = request.getParameter("param4");
        final String param5 = request.getParameter("param5");
        final String param6 = request.getParameter("param6");
        final String param7 = request.getParameter("param7");
        final String param8 = request.getParameter("param8");
        final String FName = request.getParameter("FName");
        final String DBSrc = request.getParameter("DBSrc");
        final String spname = request.getParameter("spname");
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
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.GetExclData();
        return retval;
    }
    
    @RequestMapping(value = { "/TotalKyc" }, method = { RequestMethod.POST })
    @ResponseBody
    public String TotalKyc(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final TotalKyc getdata = new TotalKyc();
        final String JSONval = request.getParameter("JSONval");
        final String DBSrc = request.getParameter("DBSrc");
        getdata.JSONval(JSONval);
        getdata.DBSrc(DBSrc);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.TotlKyc();
        return retval;
    }
    
    @RequestMapping(value = { "/TotalKycOCR" }, method = { RequestMethod.POST })
    @ResponseBody
    public String TotalKycOCR(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final String DOCURL = request.getParameter("DOCURL");
        final String PRCSID = request.getParameter("PRCSID");
        final String Type = request.getParameter("Type");
        final String DOCNAME = request.getParameter("DOCNAME");
        String OP = "";
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        OP = TotalKycOCR.OCR(DOCURL, PRCSID, Type, DOCNAME);
        return OP;
    }
    
    @RequestMapping(value = { "/CIBILIntegration" }, method = { RequestMethod.POST })
    @ResponseBody
    public String CIBILIntegration(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final CIBILIntegration getdata = new CIBILIntegration();
        final String appno = request.getParameter("appno");
        final String cusid = request.getParameter("cusid");
        final String DBSrc = request.getParameter("DBSrc");
        getdata.appno(appno);
        getdata.cusid(cusid);
        getdata.DBSrc(DBSrc);
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.CIBIL();
        return retval;
    }
    
    @RequestMapping(value = { "PAYTM" }, method = { RequestMethod.GET })
    public String PAYTM(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        final String Amount = request.getParameter("UniqueID");
        final String Type = request.getParameter("Type");
        final String Prvnt = request.getParameter("Prvnt");
        final String PRCSID = request.getParameter("PRCSID");
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        OP = PAYTM.PaymentCall(Amount, Type, Prvnt, PRCSID);
        final String[] Reponse = OP.split("~");
        request.setAttribute("MID", (Object)Reponse[0]);
        request.setAttribute("ORDER_ID", (Object)Reponse[1]);
        request.setAttribute("CUST_ID", (Object)Reponse[2]);
        request.setAttribute("INDUSTRY_TYPE_ID", (Object)Reponse[3]);
        request.setAttribute("CHANNEL_ID", (Object)Reponse[4]);
        request.setAttribute("TXN_AMOUNT", (Object)Reponse[5]);
        request.setAttribute("WEBSITE", (Object)Reponse[6]);
        request.setAttribute("EMAIL", (Object)Reponse[7]);
        request.setAttribute("MOBILE_NO", (Object)Reponse[8]);
        request.setAttribute("CALLBACK_URL", (Object)Reponse[9]);
        request.setAttribute("CHECKSUMHASH", (Object)Reponse[10]);
        request.setAttribute("URL", (Object)Reponse[11]);
        if (OP.equals("Invalid Request")) {
            throw new ServletException("Invalid Request...");
        }
        return "Interface/PAYTM";
    }
    
    @RequestMapping(value = { "PAYTMONL" }, method = { RequestMethod.GET })
    public String PAYTMONL(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        final String Amount = request.getParameter("UniqueID");
        final String Type = request.getParameter("Type");
        final String Prvnt = request.getParameter("Prvnt");
        final String PRCSID = request.getParameter("PRCSID");
        OP = PAYTM.PaymentCall(Amount, Type, Prvnt, PRCSID);
        final String[] Reponse = OP.split("~");
        request.setAttribute("MID", (Object)Reponse[0]);
        request.setAttribute("ORDER_ID", (Object)Reponse[1]);
        request.setAttribute("CUST_ID", (Object)Reponse[2]);
        request.setAttribute("INDUSTRY_TYPE_ID", (Object)Reponse[3]);
        request.setAttribute("CHANNEL_ID", (Object)Reponse[4]);
        request.setAttribute("TXN_AMOUNT", (Object)Reponse[5]);
        request.setAttribute("WEBSITE", (Object)Reponse[6]);
        request.setAttribute("EMAIL", (Object)Reponse[7]);
        request.setAttribute("MOBILE_NO", (Object)Reponse[8]);
        request.setAttribute("CALLBACK_URL", (Object)Reponse[9]);
        request.setAttribute("CHECKSUMHASH", (Object)Reponse[10]);
        request.setAttribute("URL", (Object)Reponse[11]);
        if (OP.equals("Invalid Request")) {
            throw new ServletException("Invalid Request...");
        }
        return "Interface/PAYTM";
    }
    
    @RequestMapping(value = { "PAYTMRes/*" }, method = { RequestMethod.POST })
    public String PAYTMRes(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        final String CURRENCY = request.getParameter("CURRENCY");
        final String GATEWAYNAME = request.getParameter("GATEWAYNAME");
        final String RESPMSG = request.getParameter("RESPMSG");
        final String BANKNAME = request.getParameter("BANKNAME");
        final String PAYMENTMODE = request.getParameter("PAYMENTMODE");
        final String MID = request.getParameter("MID");
        final String RESPCODE = request.getParameter("RESPCODE");
        final String TXNID = request.getParameter("TXNID");
        final String TXNAMOUNT = request.getParameter("TXNAMOUNT");
        final String ORDERID = request.getParameter("ORDERID");
        final String STATUS = request.getParameter("STATUS");
        final String BANKTXNID = request.getParameter("BANKTXNID");
        final String TXNDATE = request.getParameter("TXNDATE");
        final String CHECKSUMHASH = request.getParameter("CHECKSUMHASH");
        String DATAXML = "<DATA><ROW>";
        DATAXML = String.valueOf(DATAXML) + "<CURRENCY>" + CURRENCY + "</CURRENCY>";
        DATAXML = String.valueOf(DATAXML) + "<GATEWAYNAME>" + GATEWAYNAME + "</GATEWAYNAME>";
        DATAXML = String.valueOf(DATAXML) + "<RESPMSG>" + RESPMSG + "</RESPMSG>";
        DATAXML = String.valueOf(DATAXML) + "<BANKNAME>" + BANKNAME + "</BANKNAME>";
        DATAXML = String.valueOf(DATAXML) + "<PAYMENTMODE>" + PAYMENTMODE + "</PAYMENTMODE>";
        DATAXML = String.valueOf(DATAXML) + "<MID>" + MID + "</MID>";
        DATAXML = String.valueOf(DATAXML) + "<RESPCODE>" + RESPCODE + "</RESPCODE>";
        DATAXML = String.valueOf(DATAXML) + "<TXNID>" + TXNID + "</TXNID>";
        DATAXML = String.valueOf(DATAXML) + "<TXNAMOUNT>" + TXNAMOUNT + "</TXNAMOUNT>";
        DATAXML = String.valueOf(DATAXML) + "<ORDERID>" + ORDERID + "</ORDERID>";
        DATAXML = String.valueOf(DATAXML) + "<STATUS>" + STATUS + "</STATUS>";
        DATAXML = String.valueOf(DATAXML) + "<BANKTXNID>" + BANKTXNID + "</BANKTXNID>";
        DATAXML = String.valueOf(DATAXML) + "<TXNDATE>" + TXNDATE + "</TXNDATE>";
        DATAXML = String.valueOf(DATAXML) + "<CHECKSUMHASH>" + CHECKSUMHASH + "</CHECKSUMHASH>";
        DATAXML = String.valueOf(DATAXML) + "</ROW></DATA>";
        OP = PAYTM.PaymentCallRes(DATAXML, CHECKSUMHASH);
        if (OP.equals("Invalid Response")) {
            throw new ServletException("Invalid Response...");
        }
        return "redirect:" + OP;
    }
    
    @RequestMapping(value = { "PAYTMRes" }, method = { RequestMethod.GET })
    public String PAYTMRes1(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final String OP = "";
        ArrayList<String> Data = new ArrayList<String>();
        Data = (ArrayList<String>)GetDBData.Call(request.getParameter("PrMs1"), "", "", "", "", "LSW_SPAYTMResData");
        request.setAttribute("GATEWAYNAME", (Object)Data.get(0));
        request.setAttribute("BANKNAME", (Object)Data.get(1));
        request.setAttribute("TXNID", (Object)Data.get(2));
        request.setAttribute("BANKTXNID", (Object)Data.get(3));
        request.setAttribute("TXNAMOUNT", (Object)Data.get(4));
        request.setAttribute("TXNDATE", (Object)Data.get(5));
        request.setAttribute("Status", (Object)Data.get(6));
        request.setAttribute("Message", (Object)Data.get(7));
        return "Interface/PAYTMRes";
    }
    
    @RequestMapping(value = { "/DMS" }, method = { RequestMethod.POST })
    @ResponseBody
    public String DMS(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final DMS getdata = new DMS();
        final boolean isMultipart = ServletFileUpload.isMultipartContent(request);
        final String PrcsID = request.getParameter("PrcsID");
        final String FormName = request.getParameter("FormName");
        final String names = request.getParameter("names");
        final String descrptns = request.getParameter("descrptns");
        final String flsize = request.getParameter("flsize");
        final String vrsnno = request.getParameter("vrsnno");
        final String usrpwd = request.getParameter("usrpwd");
        final String domain = request.getParameter("domain");
        final String CusID = request.getParameter("CusID");
        final String DocName = request.getParameter("DocName");
        final String DBSrc = request.getParameter("DBSrc");
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
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        final String retval = getdata.DMSPUSH(request, response);
        return retval;
    }
    
    @RequestMapping(value = { "DMSVIEW" }, method = { RequestMethod.GET })
    @ResponseBody
    public void DMSVIEW(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final boolean isMultipart = ServletFileUpload.isMultipartContent(request);
        final String PrcsID = request.getParameter("PrcsID");
        final String DMSID = request.getParameter("DMSID");
        String DMSURL = "";
        String fileNAME = "";
        String format = "";
        final String retval = "";
        ArrayList<String> Data = new ArrayList<String>();
        Data = (ArrayList<String>)GetDBData.Call(PrcsID, DMSID, "", "", "", "LSW_SDMSVIEW");
        DMSURL = Data.get(0);
        fileNAME = Data.get(1);
        format = Data.get(2);
        final URL url = new URL(DMSURL);
        final HttpURLConnection httpConn = (HttpURLConnection)url.openConnection();
        final int responseCode = httpConn.getResponseCode();
        if (responseCode == 200) {
            final ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            final byte[] chunk = new byte[4096];
            final InputStream stream = httpConn.getInputStream();
            try {
                int bytesRead;
                while ((bytesRead = stream.read(chunk)) > 0) {
                    outputStream.write(chunk, 0, bytesRead);
                }
                stream.close();
                final byte[] DocContent = outputStream.toByteArray();
                outputStream.close();
                response.setContentLength(DocContent.length);
                response.setHeader("Content-Disposition", "attachment; filename=" + fileNAME);
                final OutputStream outStream = (OutputStream)response.getOutputStream();
                outStream.write(DocContent);
                outStream.flush();
                outStream.close();
            }
            catch (IOException e) {
                stream.close();
                outputStream.close();
                e.printStackTrace();
            }
        }
    }
    
    @RequestMapping(value = { "POSIDEX" }, method = { RequestMethod.POST })
    @ResponseBody
    public String POSIDEX(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        String status = "";
        String Msg = "";
        final String param1 = request.getParameter("PRCSID");
        final String param2 = request.getParameter("CUSID");
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        OP = POSIDEX.PosidexGet(param1, param2, "", "", "", "");
        final String[] Reponse = OP.split("~");
        status = Reponse[0];
        Msg = Reponse[1];
        if (OP.equals("Invalid Request")) {
            throw new ServletException("Invalid Request...");
        }
        return String.valueOf(status) + "|" + Msg;
    }
    
    @RequestMapping(value = { "BRTOCRM" }, method = { RequestMethod.POST })
    @ResponseBody
    public String BRTOCRM(final HttpServletRequest request, final HttpServletResponse response) throws Exception, ClassNotFoundException {
        final String FNname = "LSW_SBRTOSUITECRM";
        final String SOURCE = request.getParameter("SOURCE");
        final String TOKENID = request.getParameter("TOKENID");
        ArrayList<String> Data = new ArrayList<String>();
        Data = (ArrayList<String>)GetDBData.Call(SOURCE, TOKENID, "", "", "", FNname);
        final String Result = Data.get(0);
        return Result;
    }
    
    @RequestMapping(value = { "MOBPOSIDEX" }, method = { RequestMethod.POST })
    @ResponseBody
    public String MOBPOSIDEX(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        String status = "";
        String Msg = "";
        final String param1 = request.getParameter("PRCSID");
        final String param2 = request.getParameter("CUSID");
        String finaloutput = "";
        final Object time = session.getAttribute("LogSession");
        OP = POSIDEX.PosidexGet(param1, param2, "", "", "", "");
        final String[] Reponse = OP.split("~");
        status = Reponse[0];
        Msg = Reponse[1];
        if (OP.equals("Invalid Request")) {
            throw new ServletException("Invalid Request...");
        }
        if (status.equals("Success")) {
            final String FNname = "LSW_SDEDUPEAPI";
            ArrayList<String> Data = new ArrayList<String>();
            Data = (ArrayList<String>)GetDBData.Call(param1, param2, "", "", "", FNname);
            final String Result = finaloutput = Data.get(0);
        }
        else {
            finaloutput = "{\r\n   \"data1\":\"\",\r\n   \"data2\":\"\",\r\n   \"data3\":\"\",\r\n   \"data4\":\"\",\r\n   \"data5\":\"\",\r\n   \"status\":\"201\",\r\n   \"message\":\"FAILURE\"\r\n}";
        }
        return finaloutput;
    }
    
    @RequestMapping(value = { "LMSCUS" }, method = { RequestMethod.POST })
    @ResponseBody
    public String LMSCUS(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        String status = "";
        String Msg = "";
        final String param1 = request.getParameter("PRCSID");
        final String param2 = request.getParameter("CUSID");
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        OP = LMSCUS.LMSCUSPUSH(param1, "", param2, "", "", "");
        final String[] Reponse = OP.split("~");
        status = Reponse[0];
        Msg = Reponse[1];
        if (OP.equals("Invalid Request")) {
            throw new ServletException("Invalid Request...");
        }
        return String.valueOf(status) + "|" + Msg;
    }
    
    @RequestMapping(value = { "LMSPF" }, method = { RequestMethod.POST })
    @ResponseBody
    public String LMSPF(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        String status = "";
        String Msg = "";
        final String param1 = request.getParameter("PRCSID");
        final String param2 = request.getParameter("PFNO");
        final String param3 = request.getParameter("RECEIPTNO");
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        OP = LMSPF.LMSPFPUSH(param1, param2, param3, "", "", "");
        final String[] Reponse = OP.split("~");
        status = Reponse[0];
        Msg = Reponse[1];
        if (OP.equals("Invalid Request")) {
            throw new ServletException("Invalid Request...");
        }
        return String.valueOf(status) + "|" + Msg;
    }
    
    @RequestMapping(value = { "COLLECTIONS" }, method = { RequestMethod.POST })
    @ResponseBody
    public String COLLECIONS(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        String status = "";
        String Msg = "";
        String ReceiptNo = "";
        String FnlResp = "";
        final String param1 = request.getParameter("PRCSID");
        final String param2 = request.getParameter("PFNO");
        final Object time = session.getAttribute("LogSession");
        if (time == null) {
            return "redirect:";
        }
        OP = COLLECTIONS.CollectionsPush(param1, param2, "", "", "", "");
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
    
    @RequestMapping(value = { "MEmailVerfy" }, method = { RequestMethod.POST })
    @ResponseBody
    public String MEmailVerfy(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final Object time = session.getAttribute("LogSession");
        final String param1 = request.getParameter("URL");
        final String param2 = request.getParameter("PRCSID");
        final String param3 = request.getParameter("CUSID");
        final String param4 = request.getParameter("MAILID");
        final String param5 = request.getParameter("PARAM5");
        ArrayList<String> Data = new ArrayList<String>();
        Data = (ArrayList<String>)GetDBData.Call(param1, param2, param3, param4, param5, "LSW_SFRMMAILOTP");
        final String RPTURL = Data.get(0);
        final String CC = Data.get(1);
        final String BCC = Data.get(2);
        final String subject = Data.get(3);
        final String fromId = Data.get(4);
        final String password = Data.get(5);
        final String host = Data.get(6);
        final String port = Data.get(7);
        final String ERR_FLG = Data.get(8);
        final String ERR_MSG = Data.get(9);
        final String TOMAIL = Data.get(10);
        String retval = "";
        if (ERR_FLG.toString().equals("N")) {
            final MailSendWthAttchRPTBdy MS = new MailSendWthAttchRPTBdy();
            final String s1 = MS.Send(fromId, password, TOMAIL, CC, BCC, subject, RPTURL, String.valueOf(host) + "|" + port, "", "");
            return s1;
        }
        retval = ERR_MSG;
        return retval;
    }
    
    @RequestMapping(value = { "MMailVerfy" }, method = { RequestMethod.GET })
    public String MMailVerfy(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final String url = String.valueOf(request.getScheme()) + "://" + request.getServerName() + ":" + request.getServerPort() + request.getRequestURI() + "?" + request.getQueryString();
        String Param1 = "";
        String Param2 = "";
        String Param3 = "";
        String Param4 = "";
        final String Param5 = "";
        try {
            Pattern p = Pattern.compile("VERIFICATION=([^&]+)");
            Matcher m = p.matcher(url);
            while (m.find()) {
                Param1 = m.group();
            }
            Param1 = Param1.replace("VERIFICATION=", "");
            p = Pattern.compile("ID1=([^&]+)");
            m = p.matcher(url);
            while (m.find()) {
                Param2 = m.group();
            }
            Param2 = Param2.replace("ID1=", "");
            p = Pattern.compile("ID2=([^&]+)");
            m = p.matcher(url);
            while (m.find()) {
                Param3 = m.group();
            }
            Param3 = Param3.replace("ID2=", "");
            p = Pattern.compile("ID3=([^&]+)");
            m = p.matcher(url);
            while (m.find()) {
                Param4 = m.group();
            }
            Param4 = Param4.replace("ID3=", "");
            ArrayList<String> Data = new ArrayList<String>();
            Data = (ArrayList<String>)GetDBData.Call(Param1, Param2, Param3, Param4, Param5, "LSW_SVERFYMAILOTP");
            final String RPTURL = Data.get(0);
            request.setAttribute("RPTURL", (Object)Data.get(0));
        }
        catch (PatternSyntaxException ex) {}
        return "Interface/EmailVerify";
    }
    
    @RequestMapping(value = { "MVerifyMail" }, method = { RequestMethod.POST })
    @ResponseBody
    public String MVerifyMail(final HttpServletRequest request, final HttpServletResponse response) throws Exception, ClassNotFoundException {
        final String FNname = "LSW_SEMAILVERIFY";
        final String PrcsID = request.getParameter("PrcsID");
        final String EMAILID = request.getParameter("EMAILID");
        final String CUSID = request.getParameter("CUSID");
        ArrayList<String> Data = new ArrayList<String>();
        Data = (ArrayList<String>)GetDBData.Call(PrcsID, CUSID, EMAILID, "", "", FNname);
        final String Result = Data.get(0);
        if (Result.equals("Y")) {
            return Result;
        }
        return "N";
    }
    
    @RequestMapping(value = { "CusGen" }, method = { RequestMethod.POST }, headers = { "content-type=application/json" })
    @ResponseBody
    public String CusGen(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        final String status = "";
        final String Msg = "";
        final String ReceiptNo = "";
        final String param1 = request.getParameter("Cus");
        final String param2 = request.getParameter("APP");
        final String param3 = request.getParameter("UserID");
        final String param4 = request.getParameter("Password");
        OP = CusGen.IDGeneration(param1, param2, param3, param4, "", "");
        if (OP.equals("Invalid Request")) {
            throw new ServletException("Invalid Request...");
        }
        return OP;
    }
    
    @RequestMapping(value = { "ApplicantPush" }, method = { RequestMethod.POST })
    @ResponseBody
    public String ApplicantPush(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        final String status = "";
        final String Msg = "";
        final String ReceiptNo = "";
        final String param1 = request.getParameter("Cus");
        final String param2 = request.getParameter("APP");
        OP = ApplicantPush.Creation(param1, param2, "", "", "", "");
        if (OP.equals("Invalid Request")) {
            throw new ServletException("Invalid Request...");
        }
        return OP;
    }
    
    @RequestMapping(value = { "MTotalKyc" }, method = { RequestMethod.POST })
    @ResponseBody
    public String MTotalKyc(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final MTotalKyc getdata = new MTotalKyc();
        final String JSONval = request.getParameter("JSONval");
        final String DBSrc = request.getParameter("DBSrc");
        getdata.JSONval(JSONval);
        getdata.DBSrc(DBSrc);
        final String retval = getdata.TotlKyc();
        return retval;
    }
    
    @RequestMapping(value = { "MsendSMS" }, method = { RequestMethod.POST })
    @ResponseBody
    public String MsendSMS(final HttpServletRequest request, final HttpServletResponse response) throws Exception, ClassNotFoundException {
        final sendSMS SndSMS = new sendSMS();
        final String param1 = "";
        final String param2 = "";
        final String param3 = request.getParameter("MobNo");
        final String param4 = "";
        final String param5 = "";
        final String spname1 = "SAM_SgetRecepientDataToSMSFrOTP";
        final String spname2 = "LSW_supdateSMSstatus";
        SndSMS.param1(param1);
        SndSMS.param2(param2);
        SndSMS.param3(param3);
        SndSMS.param4(param4);
        SndSMS.param5(param5);
        SndSMS.spname1(spname1);
        SndSMS.spname2(spname2);
        return SndSMS.SendSMSMain();
    }
    
    @RequestMapping(value = { "MverifySMS" }, method = { RequestMethod.POST })
    @ResponseBody
    public String MverifySMS(final HttpServletRequest request, final HttpServletResponse response) throws Exception, ClassNotFoundException {
        final String FNname = "SCF_sValdtOTP";
        final String OTP = request.getParameter("OTP");
        final String MobNo = request.getParameter("MobNo");
        ArrayList<String> Data = new ArrayList<String>();
        Data = (ArrayList<String>)GetDBData.Call("", "", OTP, MobNo, "", FNname);
        final String Result = Data.get(0);
        return Result;
    }
    
    @RequestMapping(value = { "OPAWaiver" }, method = { RequestMethod.POST })
    @ResponseBody
    public String OPAWaiver(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        final String status = "";
        final String Msg = "";
        final String ReceiptNo = "";
        final String param1 = request.getParameter("PRCSID");
        final String param2 = request.getParameter("OPANO");
        OP = OPA.OPAWaiver(param1, param2, "", "", "", "");
        if (OP.equals("Invalid Request")) {
            throw new ServletException("Invalid Request...");
        }
        return OP;
    }
    
    @RequestMapping(value = { "OPADeviations" }, method = { RequestMethod.POST })
    @ResponseBody
    public String OPADeviations(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        final String status = "";
        final String Msg = "";
        final String ReceiptNo = "";
        final String param1 = request.getParameter("PRCSID");
        final String param2 = request.getParameter("OPANO");
        OP = OPA.OPADeviations(param1, param2, "", "", "", "");
        if (OP.equals("Invalid Request")) {
            throw new ServletException("Invalid Request...");
        }
        return OP;
    }
    
    @RequestMapping(value = { "/InsrncePrmeium" }, method = { RequestMethod.POST })
    @ResponseBody
    public String InsrncePrmeium(final HttpServletRequest request, final HttpServletResponse response) throws Exception, ClassNotFoundException {
        final InsrncePrmeium InsrncePrmeium = new InsrncePrmeium();
        final String param1 = request.getParameter("param1");
        final String param2 = request.getParameter("param2");
        final String param3 = request.getParameter("param3");
        final String param4 = request.getParameter("param4");
        final String param5 = request.getParameter("param5");
        final String DBSrc = request.getParameter("DBSrc");
        final String spname1 = request.getParameter("spname1");
        final String spname2 = request.getParameter("spname2");
        InsrncePrmeium.param1(param1);
        InsrncePrmeium.param2(param2);
        InsrncePrmeium.param3(param3);
        InsrncePrmeium.param4(param4);
        InsrncePrmeium.param5(param5);
        InsrncePrmeium.spname1(spname1);
        InsrncePrmeium.spname2(spname2);
        return InsrncePrmeium.InsrncePrmeium();
    }
    
    @RequestMapping(value = { "Logout" }, method = { RequestMethod.GET })
    public String Logout(final Locale locale, final Model model, final HttpSession session) {
        HomeController.logger.info("Welcome home! The client locale is {}.", (Object)locale);
        session.removeAttribute("LogSession");
        session.removeAttribute("csrfPreventionSaltCache");
        session.removeAttribute("User");
        session.removeAttribute("CPM");
        session.removeAttribute("CURL");
        return "Common/Pages/Userview/Logout";
    }
    
    @RequestMapping(value = { "/SessionLogout" }, method = { RequestMethod.POST })
    @ResponseBody
    public String SessionLogout(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final UI_GetData getdata = new UI_GetData();
        final String param1 = request.getParameter("param1");
        final String param2 = request.getParameter("param2");
        final String param3 = request.getParameter("param3");
        final String param4 = request.getParameter("param4");
        final String param5 = request.getParameter("param5");
        final String spname = request.getParameter("spname");
        final String DBSrc = request.getParameter("DBSrc");
        getdata.param1(param1);
        getdata.param2(param2);
        getdata.param3(param3);
        getdata.param4(param4);
        getdata.param5(param5);
        getdata.spname(spname);
        getdata.DBSrc(DBSrc);
        final String retval = getdata.UI_GetData1();
        session.setAttribute("LogSession1", (Object)retval);
        session.removeAttribute("LogSession1");
        return retval;
    }
    
    @RequestMapping(value = { "Mformdatains" }, method = { RequestMethod.POST })
    @ResponseBody
    public String Mformdatains(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        final UI_formdatainsert getdata = new UI_formdatainsert();
        final String xml = request.getParameter("xml");
        final String tablenameins = request.getParameter("tablenameins");
        final String tablenameins2 = request.getParameter("tablenameins1");
        final String activityid = request.getParameter("activityid");
        final String activityname = request.getParameter("activityname");
        final String DBSrc = request.getParameter("DBSrc");
        getdata.xml(xml);
        getdata.tablenameins(tablenameins);
        getdata.tablenameins1(tablenameins2);
        getdata.activityid(activityid);
        getdata.activityname(activityname);
        getdata.DBSrc(DBSrc);
        final String retval = getdata.UI_formdatainsertdata();
        return retval;
    }
    
    @RequestMapping(value = { "MOBCOLLECTIONS" }, method = { RequestMethod.POST })
    @ResponseBody
    public String MCOLLECTIONS(final HttpServletRequest request, final HttpServletResponse response, final HttpSession session) throws Exception {
        String OP = "";
        String status = "";
        String Msg = "";
        String ReceiptNo = "";
        String FnlResp = "";
        final String param1 = request.getParameter("PRCSID");
        final String param2 = request.getParameter("PFNO");
        final String param3 = request.getParameter("RECEIPTNO");
        final Object time = session.getAttribute("LogSession");
        final String Cusfailure = "Customer Creation/Updation failed";
        final String Colfailure = "Collections failed";
        String Finaloutput = "";
        OP = LMSPF.LMSPFPUSH(param1, param2, param3, "", "", "");
        final String[] Reponse = OP.split("~");
        status = Reponse[0];
        Msg = Reponse[1];
        final String OUTPUTCUS = String.valueOf(status) + "|" + Msg;
        if (OP.equals("Invalid Request")) {
            return "|||" + Cusfailure;
        }
        if (OUTPUTCUS.equals("")) {
            return "|||" + Cusfailure;
        }
        if (status.equals("Fail")) {
            return "|||" + Msg;
        }
        if (status.equals("No Data")) {
            return "|||" + Cusfailure;
        }
        if (status.equals("Success")) {
            OP = COLLECTIONS.CollectionsPush(param1, param2, "", "", "", "");
            final String[] Reponse2 = OP.split("~");
            status = Reponse2[0];
            Msg = Reponse2[1];
            ReceiptNo = Reponse2[2];
            FnlResp = Reponse2[3];
            if (OP.equals("Invalid Request")) {
                return "|||" + Colfailure;
            }
            Finaloutput = String.valueOf(status) + "|" + Msg + "|" + ReceiptNo + "|" + FnlResp;
        }
        return Finaloutput;
    }
    
    @RequestMapping(value = { "/sendSMS" }, method = { RequestMethod.POST })
    @ResponseBody
    public String sendSMS(final HttpServletRequest request, final HttpServletResponse response) throws Exception, ClassNotFoundException {
        final sendSMS SndSMS = new sendSMS();
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
        return SndSMS.SendSMSMain();
    }
}
