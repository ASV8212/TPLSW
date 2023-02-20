package UserviewController;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import CommonModel.UI_fetchformdata;
import UserviewModel.UI_formdata_GetHistoryQueuePageHTML;
import UserviewModel.UI_formdata_GetMainPageHTML;
import UserviewModel.UI_formdata_GetMenuURL;
import UserviewModel.UI_formdata_GetQueueDashBoardHTML;
import UserviewModel.UI_formdata_GetQueueForwardJobs;
import UserviewModel.UI_formdata_GetQueuePageHTML;
import UserviewModel.UI_formdata_GetSubPageHTML;

@Controller
public class UserviewController {

	private static final Logger logger = LoggerFactory
			.getLogger(UserviewController.class);

	@RequestMapping(value = "/UI_formdata_GetHistoryQueuePageHTML", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdata_GetHistoryQueuePageHTML(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdata_GetHistoryQueuePageHTML getdata = new UI_formdata_GetHistoryQueuePageHTML();

		String Username = request.getParameter("Username");
		String MenuName = request.getParameter("MenuName");
		String DBSrc = request.getParameter("DBSrc");

		getdata.Username(Username);
		getdata.MenuName(MenuName);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdata_GetHistoryQueuePageHTML();
		return retval;

	}

	@RequestMapping(value = "/UI_formdata_GetMenuURL", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdata_GetMenuURL(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdata_GetMenuURL getdata = new UI_formdata_GetMenuURL();

		String URL = request.getParameter("URL");
		String MenuName = request.getParameter("MenuName");
		String DBSrc = request.getParameter("DBSrc");

		getdata.URL(URL);
		getdata.MenuName(MenuName);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdata_GetMenuURL();
		return retval;

	}

	@RequestMapping(value = "/UI_formdata_GetQueueDashBoardHTML", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdata_GetQueueDashBoardHTML(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdata_GetQueueDashBoardHTML getdata = new UI_formdata_GetQueueDashBoardHTML();

		String Username = request.getParameter("Username");
		String MenuName = request.getParameter("MenuName");
		String DBSrc = request.getParameter("DBSrc");

		getdata.Username(Username);
		getdata.MenuName(MenuName);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdata_GetQueueDashBoardHTML();
		return retval;

	}

	@RequestMapping(value = "/UI_formdata_GetQueueForwardJobs", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdata_GetQueueForwardJobs(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdata_GetQueueForwardJobs getdata = new UI_formdata_GetQueueForwardJobs();

		String Level = request.getParameter("Level");
		String AssignRights = request.getParameter("AssignRights");
		String ProcessID = request.getParameter("ProcessID");
		String activityId = request.getParameter("activityId");
		String DBSrc = request.getParameter("DBSrc");

		getdata.Level(Level);
		getdata.AssignRights(AssignRights);
		getdata.ProcessID(ProcessID);
		getdata.activityId(activityId);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdata_GetQueueForwardJobs();
		return retval;

	}

	@RequestMapping(value = "/UI_formdata_GetQueuePageHTML", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdata_GetQueuePageHTML(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdata_GetQueuePageHTML getdata = new UI_formdata_GetQueuePageHTML();

		String Username = request.getParameter("Username");
		String MenuName = request.getParameter("MenuName");
		String DBSrc = request.getParameter("DBSrc");

		getdata.Username(Username);
		getdata.MenuName(MenuName);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdata_GetQueuePageHTML();
		return retval;

	}

	@RequestMapping(value = "/UI_formdata_GetSubPageHTML", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdata_GetSubPageHTML(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdata_GetSubPageHTML getdata = new UI_formdata_GetSubPageHTML();

		String Username = request.getParameter("Username");
		String MenuName = request.getParameter("MenuName");
		String DBSrc = request.getParameter("DBSrc");

		getdata.Username(Username);
		getdata.MenuName(MenuName);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdata_GetSubPageHTML();
		return retval;

	}

}
