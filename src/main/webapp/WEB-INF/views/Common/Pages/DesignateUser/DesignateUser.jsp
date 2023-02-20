<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Forward</title>
<link rel="stylesheet" href="ThemeproLO/Common/CSS/form.css${DMY13}"/>
 <link href="ThemeproLO/Common/CSS/userview.css${DMY13}" rel="stylesheet" type="text/css" />

 <link rel="stylesheet" type="text/css" href="ThemeproLO/Common/jw/js/jquery/themes/ui-lightness/jquery-ui-1.10.3.custom.css${DMY13}">
   
   <link href="ThemeproLO/Common/CSS/Menu/menu.css${DMY13}" rel="stylesheet" type="text/css" />
   
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
  

<script type="text/javascript" src="ThemeproLO/Common/Alert/sweetalert.min.js${DMY13}"></script>
	
 <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/queuefrwd/jquery.min.js${DMY13}"></script>    
      
	  	  <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/jquery-1.11.1.min.js${DMY13}"></script>	 
	  
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-migrate-1.2.1.min.js${DMY13}"></script>
	 <script type="text/javascript" src="ThemeproLO/Common/scripts/Alert/alertfy.js${DMY13}"></script>
	 <script type="text/javascript" src="ThemeproLO/Common/Alert/metro/js/jquery.msgbox.js${DMY13}"></script>
	  
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui_ext.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}"></script>

     <script type='text/javascript' src='ThemeproLO/Common/jw/js/boxy/javascripts/jquery.boxy.js'></script>

<script type="text/javascript" src="ThemeproLO/Common/scripts/UI/jquery-ui.js${DMY13}" ></script>  
<script type="text/javascript" src="ThemeproLO/Common/popup/js/script.js${DMY13}"></script>

<script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/jquery.dataTables.min.js${DMY13}"></script>

<script src="ThemeproLO/Common/scripts/UI/jquery.xml2json.js${DMY13}" type="text/javascript"></script>
 
<script src="ThemeproLO/Common/scripts/UI/jquery.dataTables.js${DMY13}" type="text/javascript"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/UI/dataTables.colVis.js${DMY13}"></script> 

<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/loadjson_V_19.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery.jeditable.js${DMY13}"></script>
<script src="ThemeproLO/Common/scripts/Commonfiles/jquery.formgrid.js${DMY13}" type="text/javascript"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/DateControl/jquery.custom.datepicker.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/DateControl/jquery.placeholder.min.js${DMY13}"></script>  

<script type="text/javascript" src="ThemeproLO/Common/scripts/Config/DesignateUser/Onload.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Config/DesignateUser/Validation.js${DMY13}"></script>

</head>
<body bgcolor="white">
<form id="DesignateUser"  height:640px" name="Designate User"  action=""  method="POST">

 <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>      

<div class="form-section-title" align="left" style="width: 100%">
                <span>Designate</span></div>
<input type="hidden" name="LoggedInUser" id="LoggedInUser" >
<center>
<table style="padding-top:10px; width:100%;" cellpadding="2" cellspacing="2">

       



    <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Start Date</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="StartDate" name="StartDate"  type="text" value="" onchange="CompareDateFields(StartDate,EndDate);" class="inputTXT DBfields TxtClear DateFields Mndtry ISDatefield ISPastDateFields"><span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>


         
    



    <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">End Date</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="EndDate" name="EndDate" onchange="CompareDateFields(StartDate,EndDate);" type="text" value="" class="inputTXT DBfields Mndtry  TxtClear ISDatefield DateFields ISPastDateFields"><span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>

         <tr class="levelhide">
   <td style="width:5%" >
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2" >Designate User</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="Designation" name="Designation" disabled type="text" value="" class="inputTXT  DBfields   TxtClear">
		   <img src="ThemeproLO/Common/Images/search1.png" id="Desgnlkup" class="find1"   onclick="FncallwebserviceChk(this,'GetJsonBRID',{spname:'Sam_sFetchDsgntUsr',Param:$('#LoggedInUser').val(),brid:'',MnuId:''});cleartxt();" /><span id="span_imgdateapp" style="COLOR: red">*</span>
           
          
          </td> 
       
        </tr>

  
  
  
</table></center>
<div id="popup" class="SearchList">
            <table id="Table1" class="display" border="0"></table>
        </div>
</form>
</body>
</html>
