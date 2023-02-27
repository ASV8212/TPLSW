<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/jquery-1.11.1.min.js${DMY13}"></script>
    <!-- Bootstrap 3.3.5 -->
   
    <link href="ThemeproLO/Common/CSS/bootstrap/css/bootstrap.min.css${DMY13}" rel="stylesheet" type="text/css" />
	
	  <link href="ThemeproLO/Common/jw/js/boxy/stylesheets/boxy.css${DMY13}" rel="stylesheet" type="text/css" />
 <link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />
	<link href="ThemeproLO/Common/CSS/WinTabs.css${DMY13}" rel="stylesheet" type="text/css" />

    <link href="ThemeproLO/Common/CSS/dist/css/AdminLTE.min.css${DMY13}" rel="stylesheet" type="text/css" />
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link href="ThemeproLO/Common/CSS/dist/css/skins/_all-skins.min.css${DMY13}" rel="stylesheet" type="text/css" />
	
	  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.bootstrap.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.core.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.default.css${DMY13}">

		  
		   <script type="text/javascript" src="ThemeproLO/Common/scripts/Alert/alertfy.js${DMY13}"></script>
		   <script type="text/javascript" src="ThemeproLO/Common/Alert/metro/js/jquery.msgbox.js${DMY13}"></script>
		   <script type='text/javascript' src='ThemeproLO/Common/jw/js/boxy/javascripts/jquery.boxy.js'></script>
 <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-migrate-1.2.1.min.js${DMY13}"></script>
	       <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/jquery-ui.js${DMY13}" ></script> 
	  	   <script src="ThemeproLO/Common/CSS/dist/js/app.min.js${DMY13}" type="text/javascript"></script>
	   
	      <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui.js${DMY13}" ></script>        		
		  <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui_ext.js${DMY13}" ></script>
		  <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}" ></script>	
		  <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/WinTabs.js${DMY13}"></script> 
		  
		
 <!--
	 <link rel="stylesheet" href="ThemeproLO/Common/CSS/form.css${DMY13}"/>
<link rel="stylesheet" href="ThemeproLO/Common/CSS/form.css${DMY13}"/>
<link href="ThemeproLO/Common/CSS/userview.css${DMY13}" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="ThemeproLO/Common/CSS/styles.css${DMY13}"/>
<link rel="stylesheet" type="text/css" href="ThemeproLO/Common/jw/js/jquery/themes/ui-lightness/jquery-ui-1.10.3.custom.css${DMY13}">
<link rel="stylesheet" type="text/css" href="ThemeproLO/Common/jw/js/jquery/flexigrid/css/flexigrid/flexigrid.css${DMY13}">
<link rel="stylesheet" type="text/css" href="ThemeproLO/Common/jw/js/guiders/guiders-1.1.1.css${DMY13}"/>
<link rel="stylesheet" type="text/css" href="ThemeproLO/Common/jw/js/jquery/jquerycluetip/css/jquery.cluetip.css${DMY13}">

<link href="ThemeproLO/Common/CSS/jquery-ui.css${DMY13}" rel="stylesheet" type="text/css" />
<link href="ThemeproLO/Common/CSS/dataTables.jqueryui.css${DMY13}" rel="stylesheet" type="text/css" /> 
<link href="ThemeproLO/Common/Alert/sweetalert.css${DMY13}" rel="stylesheet" />
 <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/ionicons.min.css${DMY13}">
 <link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.bootstrap.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.core.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.default.css${DMY13}">


 <link href="ThemeproLO/Common/jw/js/boxy/stylesheets/boxy.css${DMY13}" rel="stylesheet" type="text/css" />
  <link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />
  
  

-->

	<script src="ThemeproLO/Common/scripts/Grid/jquery.dataTables.js${DMY13}" type="text/javascript"></script>

    <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui_ext.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}"></script>
<script src="ThemeproLO/Common/scripts/UI/jquery.xml2json.js${DMY13}" type="text/javascript"></script>


<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng.js${DMY13}"></script>

 




<script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/grid.locale-en.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/jquery.jqGrid.min.js${DMY13}"></script> 

<script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/jquery-ui.min.js${DMY13}"></script> 

<script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/prettify.js${DMY13}"></script> 

	  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/jquery-ui.css${DMY13}">
	  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/prettify.css${DMY13}">
	  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/ui.jqgrid.css${DMY13}">
	  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/NewGrid.css${DMY13}">
	  
	  <script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/loadjson_V_19.js${DMY13}"></script>
	  
 
	
<script src="ThemeproLO/Common/scripts/Main/test/Onload.js${DMY13}" type="text/javascript"></script>
<title>Insert title here</title>
</head>
<body>
<input id="GetPremium" name="GetPremium" class="form-button buttonPRS" type="button" value="GetPremium" onclick="GetPremium();"/>
</body>
</html>