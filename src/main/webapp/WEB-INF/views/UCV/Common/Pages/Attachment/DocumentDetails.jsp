<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
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
 
  <link href="ThemeproLO/Common/jw/js/boxy/stylesheets/boxy.css${DMY13}" rel="stylesheet" type="text/css" />
  
 <link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />


 
 
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js${DMY13}"></script>


<script type="text/javascript" src="ThemeproLO/Common/Alert/sweetalert.min.js${DMY13}"></script>

 <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/queuefrwd/jquery.min.js${DMY13}"></script>
<script type='text/javascript' src='ThemeproLO/Common/jw/js/boxy/javascripts/jquery.boxy.js'></script>
<script type="text/javascript" src="ThemeproLO/Common/Alert/metro/js/jquery.msgbox.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-1.9.1.min.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-migrate-1.2.1.min.js${DMY13}"></script>
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
       
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery.jeditable.js${DMY13}"></script>
<script src="ThemeproLO/Common/scripts/Commonfiles/jquery.formgrid.js${DMY13}" type="text/javascript"></script>

      <script type="text/javascript" src="ThemeproLO/Common/scripts/DateControl/jquery.custom.datepicker.js${DMY13}"></script>
      <script type="text/javascript" src="ThemeproLO/Common/scripts/DateControl/jquery.placeholder.min.js${DMY13}"></script>   
 <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}"></script>
     	 
 <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamigration.js${DMY13}"></script>
      
         <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/loadjson_V_19.js${DMY13}"></script>  
		 <script type="text/javascript" src="ThemeproLO/Common/scripts/Attachment/documentonload.js${DMY13}"></script>  
        
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<form id="DocumentDetails" name="Document Details"  class="form-container formIdentity" action=""  method="POST">
               
                  
              
         <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>

              


<div id="section1" class="form-section section_3082">

<div style="width: 100%" class="form-section-title"><span align="center">File Summary</span></div>   
 
<table class="xdTable" cellspacing="2" cellpadding="2" width="50%" border="0">
   <tr><td><font face="Verdana" class="ColumnHeading" size="2">Document Name</font></td>
   <td><label onchange="this.setAttribute('value', this.value);" value="" disabled class="DBfields" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="docname" name="docname"/>
   </td></tr>
   <tr>
</tr>
<tr>
</tr>


<tr><td><font face="Verdana" class="ColumnHeading" size="2">Document No</font></td>
   <td><label onchange="this.setAttribute('value', this.value);" value="" disabled class="DBfields" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="docno" name="docno"/>
   </td></tr>
<tr>
</tr>
<tr>

 
<tr>
<td style=width:25% class="ColumnHeading"><font face="Verdana" size="2">Created By	

</font></td>
<td style=width:25%><label  onchange="this.setAttribute('value', this.value);" value="" disabled class="DBfields " onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="createdby" name="createdby"/></td>
</tr>

<tr>
</tr>
<tr>
</tr>


<tr>
<td style=width:25% class="ColumnHeading"><font face="Verdana" size="2">Created Date	

</font></td>
<td style=width:25%> <label onchange="this.setAttribute('value', this.value);" value="" disabled class="DBfields " onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="createddate" name="createddate"/></td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
</tr>




<tr>
<td style=width:25% class="ColumnHeading"><font face="Verdana" size="2">File Name	

</font></td>
<td style=width:25% ><label  onchange="this.setAttribute('value', this.value);" value="" disabled class="DBfields " onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="filename" name="filename"/></td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
</tr>


<tr>
<td style=width:25% class="ColumnHeading"><font face="Verdana" size="2">Format

</font></td>
<td style=width:25%><label  onchange="this.setAttribute('value', this.value);" value="" disabled  class="DBfields " onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="format" name="format"/> 
</td>

</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
</tr>




<tr>
<td style=width:25% class="ColumnHeading"><font face="Verdana" size="2">Attached In

</font></td>
<td style=width:25% ><label  onchange="this.setAttribute('value', this.value);" value="" disabled class="DBfields" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="formname" name="formname"/></td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
</tr>



<tr>
<td style=width:25% class="ColumnHeading"><font face="Verdana" size="2">File Size
</font></td>
<td style=width:25% ><label  onchange="this.setAttribute('value', this.value);" value="" disabled class="DBfields" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="filesize" name="filesize"/></td>
</tr>
 </div>
 
 <div id="imgshow">
 
  </div>
 
 

</body>
</html>