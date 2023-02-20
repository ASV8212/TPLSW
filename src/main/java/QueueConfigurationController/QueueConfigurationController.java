package QueueConfigurationController;

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

import QueueConfigurationModel.UI_FetchInsertedTblColName;
import QueueConfigurationModel.UI_FetchQueuenamefrRearge;
import QueueConfigurationModel.UI_FetchTblColName;
import QueueConfigurationModel.UI_FetchWrkflowname;
import QueueConfigurationModel.UI_formdatains_QueueRearrangeEntry;
import QueueConfigurationModel.UI_FetchTblName;
import QueueConfigurationModel.UI_formdatains_QueueRearrangeEntryCheck;
import QueueConfigurationModel.UI_formdatainsInsertQueue;
import QueueConfigurationModel.UI_formdatainsQueueRights;
import QueueConfigurationModel.UI_formdatainsRearrangedQueue;

@Controller
public class QueueConfigurationController {

	private static final Logger logger = LoggerFactory
			.getLogger(QueueConfigurationController.class);

	@RequestMapping(value = "/UI_FetchInsertedTblColName", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_FetchInsertedTblColName(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_FetchInsertedTblColName getdata = new UI_FetchInsertedTblColName();

		String QueueName = request.getParameter("QueueName");
		String WFName = request.getParameter("WFName");
		String DBSrc = request.getParameter("DBSrc");

		getdata.QueueName(QueueName);
		getdata.WFName(WFName);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_FetchInsertedTblColName();
		return retval;

	}

	@RequestMapping(value = "/UI_FetchQueuenamefrRearge", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_FetchQueuenamefrRearge(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_FetchQueuenamefrRearge getdata = new UI_FetchQueuenamefrRearge();

		String WorkFlowName = request.getParameter("WorkFlowName");

		String DBSrc = request.getParameter("DBSrc");

		getdata.WorkFlowName(WorkFlowName);

		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_FetchQueuenamefrRearge();
		return retval;

	}

	@RequestMapping(value = "/UI_FetchTblColName", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_FetchTblColName(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_FetchTblColName getdata = new UI_FetchTblColName();

		String Tblname = request.getParameter("Tblname");
		String WFName = request.getParameter("WFName");
		String QueueName = request.getParameter("QueueName");
		String DBSrc = request.getParameter("DBSrc");

		getdata.Tblname(Tblname);
		getdata.WFName(WFName);
		getdata.QueueName(QueueName);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_FetchTblColName();
		return retval;

	}

	@RequestMapping(value = "/UI_FetchTblName", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_FetchTblName(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_FetchTblName getdata = new UI_FetchTblName();

		String WFName = request.getParameter("WFName");
		String QueueName = request.getParameter("QueueName");
		String DBSrc = request.getParameter("DBSrc");

		getdata.WFName(WFName);
		getdata.QueueName(QueueName);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_FetchTblName();
		return retval;

	}

	@RequestMapping(value = "/UI_FetchWrkflowname", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_FetchWrkflowname(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_FetchWrkflowname getdata = new UI_FetchWrkflowname();

		String DBSrc = request.getParameter("DBSrc");

		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_FetchWrkflowname();
		return retval;

	}

	@RequestMapping(value = "/UI_formdatains_QueueRearrangeEntry", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdatains_QueueRearrangeEntry(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdatains_QueueRearrangeEntry getdata = new UI_formdatains_QueueRearrangeEntry();

		String xml = request.getParameter("xml");

		String DBSrc = request.getParameter("DBSrc");

		getdata.xml(xml);

		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdatains_QueueRearrangeEntry();
		return retval;

	}

	@RequestMapping(value = "/UI_formdatains_QueueRearrangeEntryCheck", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdatains_QueueRearrangeEntryCheck(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdatains_QueueRearrangeEntryCheck getdata = new UI_formdatains_QueueRearrangeEntryCheck();

		String xml = request.getParameter("xml");

		String DBSrc = request.getParameter("DBSrc");

		getdata.xml(xml);

		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdatains_QueueRearrangeEntryCheck();
		return retval;

	}

	@RequestMapping(value = "/UI_formdatainsInsertQueue", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdatainsInsertQueue(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdatainsInsertQueue getdata = new UI_formdatainsInsertQueue();

		String xml = request.getParameter("xml");
		String param = request.getParameter("param");
		String DBSrc = request.getParameter("DBSrc");

		getdata.xml(xml);
		getdata.param(param);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdatainsInsertQueue();
		return retval;

	}

	@RequestMapping(value = "/UI_formdatainsQueueRights", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdatainsQueueRights(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdatainsQueueRights getdata = new UI_formdatainsQueueRights();

		String xml = request.getParameter("xml");
		String Code = request.getParameter("Code");
		String DBSrc = request.getParameter("DBSrc");

		getdata.xml(xml);
		getdata.Code(Code);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdatainsQueueRights();
		return retval;

	}

	@RequestMapping(value = "/UI_formdatainsRearrangedQueue", method = RequestMethod.POST)
	// public @ResponseBody String addUser(@ModelAttribute(value="user") User
	// user, BindingResult result ){
	// @RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	String UI_formdatainsRearrangedQueue(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		UI_formdatainsRearrangedQueue getdata = new UI_formdatainsRearrangedQueue();

		String xml = request.getParameter("xml");
		String DBSrc = request.getParameter("DBSrc");

		getdata.xml(xml);
		getdata.DBSrc(DBSrc);

		String retval = getdata.UI_formdatainsRearrangedQueue();
		return retval;

	}

}
