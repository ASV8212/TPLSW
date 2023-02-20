package ConfigController;

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

import UserviewModel.UI_formdata_GetHistoryQueuePageHTML;
import UserviewModel.UI_formdata_GetMainPageHTML;
import ConfigModel.UI_FetchHistTblClmNames;
import ConfigModel.UI_formdatains_ConfigScreens;

@Controller
public class ConfigController {

	private static final Logger logger = LoggerFactory
			.getLogger(ConfigController.class);

	@RequestMapping(value = "/UI_FetchHistTblClmNames", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_FetchHistTblClmNames(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_FetchHistTblClmNames getdata = new UI_FetchHistTblClmNames();

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

		String retval = getdata.UI_FetchHistTblClmNames();
		return retval;

	}

	@RequestMapping(value = "/UI_formdatains_ConfigScreens", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdata_GetMainPageHTML(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		try {
			UI_formdatains_ConfigScreens getdata = new UI_formdatains_ConfigScreens();

			String xml = request.getParameter("xml");
			String param = request.getParameter("param");
			String DBSrc = request.getParameter("DBSrc");
			String spname = request.getParameter("spname");

			getdata.xml(xml);
			getdata.param(param);
			getdata.DBSrc(DBSrc);
			getdata.spname(spname);

			String retval = getdata.UI_formdatains_ConfigScreens();
			return retval;
		} catch (Exception e) {
			System.out.print(e);
			return null;

		}

	}

}
