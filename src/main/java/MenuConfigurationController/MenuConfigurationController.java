package MenuConfigurationController;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import MenuConfigurationModel.UI_fetchMenuFrmRearrge;
import MenuConfigurationModel.UI_fetchMenuFrRearrge2;
import MenuConfigurationModel.UI_fetchMenuFrRearrge3;
import MenuConfigurationModel.UI_fetchRemenuID;
import MenuConfigurationModel.UI_formdatains_MenuModifyEntry;
import MenuConfigurationModel.UI_formdatainsInsert;
import MenuConfigurationModel.UI_fetchMenuFrRearrge2;
import MenuConfigurationModel.UI_formdatains_MenuRearrangeEntry;
import MenuConfigurationModel.UI_formdatains_MenuRearrangeEntry;
import MenuConfigurationModel.UI_formdatains_NewMENURIGHTSDel;
import MenuConfigurationModel.UI_formdatains_NewMENURIGHTSEnt;
import MenuConfigurationModel.UI_formdatains_NewSubMenuEntry;
import MenuConfigurationModel.UI_formdatains_NewSubMenuLevel2;
import Controller.HomeController;

@Controller
public class MenuConfigurationController {

	private static final Logger logger = LoggerFactory
			.getLogger(MenuConfigurationController.class);

	@RequestMapping(value = "/UI_fetchMenuFrmRearrge", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_fetchMenuFrmRearrge(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_fetchMenuFrmRearrge getdata = new UI_fetchMenuFrmRearrge();

		String MenuLevel = request.getParameter("MenuLevel");
		String SubLevel = request.getParameter("SubLevel");
		String DBSrc = request.getParameter("DBSrc");

		getdata.MenuLevel(MenuLevel);
		getdata.SubLevel(SubLevel);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_fetchMenuFrmRearrge();
		return retval;
	}

	@RequestMapping(value = "/UI_fetchMenuFrRearrge2", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_fetchMenuFrRearrge2(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_fetchMenuFrRearrge2 getdata = new UI_fetchMenuFrRearrge2();

		String MenuLevel = request.getParameter("MenuLevel");
		String SubLevelOne = request.getParameter("SubLevelOne");
		String SubLevelTwo = request.getParameter("SubLevelTwo");
		String DBSrc = request.getParameter("DBSrc");

		getdata.param1(MenuLevel);
		getdata.param2(SubLevelOne);
		getdata.param3(SubLevelTwo);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_fetchMenuFrRearrge2();
		return retval;
	}

	@RequestMapping(value = "/UI_fetchMenuFrRearrge3", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_fetchMenuFrRearrge3(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_fetchMenuFrRearrge3 getdata = new UI_fetchMenuFrRearrge3();

		String MenuLevel = request.getParameter("MenuLevel");
		String SubLevelOne = request.getParameter("SubLevelOne");
		String SubLevelTwo = request.getParameter("SubLevelTwo");
		String DBSrc = request.getParameter("DBSrc");

		getdata.MenuLevel(MenuLevel);
		getdata.SubLevelOne(SubLevelOne);
		getdata.SubLevelTwo(SubLevelTwo);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_fetchMenuFrRearrge3();
		return retval;
	}

	@RequestMapping(value = "/UI_fetchRemenuID", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_fetchRemenuID(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_fetchRemenuID getdata = new UI_fetchRemenuID();

		String MenuLevel = request.getParameter("MenuLevel");
		String SubLevelOne = request.getParameter("SubLevelOne");
		String SubLevelTwo = request.getParameter("SubLevelTwo");
		String DBSrc = request.getParameter("DBSrc");

		getdata.MenuLevel(MenuLevel);
		getdata.SubLevelOne(SubLevelOne);
		getdata.SubLevelTwo(SubLevelTwo);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_fetchRemenuID();
		return retval;
	}

	@RequestMapping(value = "/UI_formdatains_MenuModifyEntry", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdatains_MenuModifyEntry(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdatains_MenuModifyEntry getdata = new UI_formdatains_MenuModifyEntry();

		String xml = request.getParameter("xml");
		String code = request.getParameter("code");
		String DBSrc = request.getParameter("DBSrc");

		getdata.xml(xml);
		getdata.code(code);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdatains_MenuModifyEntry();
		return retval;
	}

	@RequestMapping(value = "/UI_formdatains_MenuRearrangeEntry", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdatains_MenuRearrangeEntry(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdatains_MenuRearrangeEntry getdata = new UI_formdatains_MenuRearrangeEntry();

		String xml = request.getParameter("xml");
		String level = request.getParameter("level");
		String MenuId = request.getParameter("MenuId");
		String code = request.getParameter("code");
		String DBSrc = request.getParameter("DBSrc");

		getdata.xml(xml);
		getdata.level(level);
		getdata.MenuId(MenuId);
		getdata.code(code);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdatains_MenuRearrangeEntry();
		return retval;
	}

	@RequestMapping(value = "/UI_formdatains_NewMENURIGHTSDel", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdatains_NewMENURIGHTSDel(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdatains_NewMENURIGHTSDel getdata = new UI_formdatains_NewMENURIGHTSDel();

		String xml = request.getParameter("xml");
		String param1 = request.getParameter("param1");
		String setrightsid = request.getParameter("setrightsid");
		String levelcount = request.getParameter("levelcount");
		String DBSrc = request.getParameter("DBSrc");

		getdata.xml(xml);
		getdata.param1(param1);
		getdata.setrightsid(setrightsid);
		getdata.levelcount(levelcount);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdatains_NewMENURIGHTSDel();
		return retval;
	}

	@RequestMapping(value = "/UI_formdatains_NewMENURIGHTSEnt", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdatains_NewMENURIGHTSEnt(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdatains_NewMENURIGHTSEnt getdata = new UI_formdatains_NewMENURIGHTSEnt();

		String xml = request.getParameter("xml");
		String param1 = request.getParameter("param1");
		String setrightsid = request.getParameter("setrightsid");
		String levelcount = request.getParameter("levelcount");
		String DBSrc = request.getParameter("DBSrc");

		getdata.xml(xml);
		getdata.param1(param1);
		getdata.setrightsid(setrightsid);
		getdata.levelcount(levelcount);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdatains_NewMENURIGHTSEnt();
		return retval;
	}

	@RequestMapping(value = "/UI_formdatains_NewSubMenuEntry", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdatains_NewSubMenuEntry(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdatains_NewSubMenuEntry getdata = new UI_formdatains_NewSubMenuEntry();

		String xml = request.getParameter("xml");
		String DBSrc = request.getParameter("DBSrc");
		getdata.xml(xml);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdatains_NewSubMenuEntry();
		return retval;
	}

	@RequestMapping(value = "/UI_formdatains_NewSubMenuLevel2", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdatains_NewSubMenuLevel2(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdatains_NewSubMenuLevel2 getdata = new UI_formdatains_NewSubMenuLevel2();

		String xml = request.getParameter("xml");
		String param1 = request.getParameter("param1");
		String DBSrc = request.getParameter("DBSrc");

		getdata.xml(xml);
		getdata.param1(param1);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdatains_NewSubMenuLevel2();
		return retval;
	}

	@RequestMapping(value = "/UI_formdatainsInsert", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdatainsInsert(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdatainsInsert getdata = new UI_formdatainsInsert();

		String xml = request.getParameter("xml");
		String tablenameins = request.getParameter("tablenameins");
		String tablenameins1 = request.getParameter("tablenameins1");
		String DBSrc = request.getParameter("DBSrc");

		getdata.xml(xml);
		getdata.tablenameins(tablenameins);
		getdata.tablenameins1(tablenameins1);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdatainsInsert();
		return retval;
	}

}
