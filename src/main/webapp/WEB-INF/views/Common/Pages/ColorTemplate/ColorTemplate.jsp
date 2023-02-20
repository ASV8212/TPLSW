<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Theme Color</title>
<link rel="stylesheet" href="ThemeproLO/Common/CSS/form.css${DMY13}"/>
 <link href="ThemeproLO/Common/CSS/userview.css${DMY13}" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="ThemeproLO/Common/CSS/styles.css${DMY13}"/>
 <link rel="stylesheet" type="text/css" href="ThemeproLO/Common/jw/js/jquery/themes/ui-lightness/jquery-ui-1.10.3.custom.css${DMY13}">
   
    <link rel="stylesheet" type="text/css" href="ThemeproLO/Common/jw/js/jquery/flexigrid/css/flexigrid/flexigrid.css${DMY13}">
    <link rel="stylesheet" type="text/css" href="ThemeproLO/Common/jw/js/guiders/guiders-1.1.1.css${DMY13}"/>
	 <link rel="stylesheet" type="text/css" href="ThemeproLO/Common/jw/js/jquery/jquerycluetip/css/jquery.cluetip.css${DMY13}">

<!--<link href="CSS/Popupjquery-ui.css${DMY13}" rel="stylesheet" type="text/css" />
<link href="CSS/PopupdataTables.jqueryui.css${DMY13}" rel="stylesheet" type="text/css" />-->

        <link href="ThemeproLO/Common/CSS/jquery-ui.css${DMY13}" rel="stylesheet" type="text/css" />
<link href="ThemeproLO/Common/CSS/dataTables.jqueryui.css${DMY13}" rel="stylesheet" type="text/css" />  

<link href="ThemeproLO/Common/Alert/sweetalert.css${DMY13}" rel="stylesheet" />
 <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/ionicons.min.css${DMY13}">
 <link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.bootstrap.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.core.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.default.css${DMY13}">
<link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />
 <style type="text/css">

.btn {
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Georgia;
  color: #fafafa;
  font-size: 15px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.btn:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
  }
 


table
{
 border: 1px solid #133e40;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  width: auto;
  background:url("ThemeproLO/Common/Images/floral_background.jpg")

}
.f1
{
background: #36b0b6;
  background: -moz-linear-gradient(top, #36b0b6 0%, #2a8a8f 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #36b0b6), color-stop(100%, #2a8a8f));
  background: -webkit-linear-gradient(top, #36b0b6 0%, #2a8a8f 100%);
  background: -o-linear-gradient(top, #36b0b6 0%, #2a8a8f 100%);
  background: -ms-linear-gradient(top, #36b0b6 0%, #2a8a8f 100%);
  background: linear-gradient(top, #36b0b6 0%, #2a8a8f 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='@top-color', endColorstr='@bottom-color', GradientType=0);
  padding: 5px 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;

}
</style>

<script type="text/javascript" src="ThemeproLO/Common/Alert/sweetalert.min.js${DMY13}"></script>

 <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/queuefrwd/jquery.min.js${DMY13}"></script>

  <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-1.9.1.min.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-migrate-1.2.1.min.js${DMY13}"></script>
       <script type="text/javascript" src="ThemeproLO/Common/scripts/Alert/alertfy.js${DMY13}"></script>
	   <script type="text/javascript" src="ThemeproLO/Common/Alert/metro/js/jquery.msgbox.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/ui/jquery-ui-1.10.3.min.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/flexigrid/flexigrid.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui_ext.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/md5/jquery.md5.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery.cookie.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/guiders/guiders-1.1.1.js${DMY13}"></script>


<script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/jquery.dataTables.min.js${DMY13}"></script>

 <script src="ThemeproLO/Common/scripts/UI/jquery.xml2json.js${DMY13}" type="text/javascript"></script>

 <script src="ThemeproLO/Common/scripts/UI/jquery.dataTables.js${DMY13}" type="text/javascript"></script>
  <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/dataTables.colVis.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/Common/scripts/ColorTemplate/onload.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/jquery.xml2json.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/loadjson_V_19.js${DMY13}"></script>  
 
 
</head>
<body class="">
<form id="ColorTemplate" name="Color Template"  class="" action=""  method="POST">
<br><br><br><br><br>
<div align="center" class="d">
<table align="center">
<tr>
     <td align="center" class="f1">     
<h1 style="font-size:20px;">

Choice Your Color
</h1>
</td></tr>
<br>
<br>
<tr>
<td align="center" style="padding:50px 50px;">
<div class="select-style">

<select class= "DBfields inputTXT" id="colortemplate">
<option value="blue">Blue</option>
<option value="maroon">Maroon</option>
</select>
</div>
</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td>

<input type="button" class="btn" id="preview" name="preview" value="Preview" onclick="preview()"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="button" class="btn" id="save" name="save" value="Save" onclick="ColorSelect()"/>
</td>
</tr>
</table></div></form>
</body>
</html>