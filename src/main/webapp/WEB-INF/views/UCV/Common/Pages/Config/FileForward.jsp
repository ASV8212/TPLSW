<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

 <link href="ThemeproLO/Common/CSS/Tabs.css${DMY13}" rel="stylesheet" type="text/css" /> 
 
	   
<!--<link href="ThemeproLO/Common/Styles/colla/jquery-wijmo.css${DMY13}" rel="stylesheet" type="text/css" />-->
        <link href="ThemeproLO/Common/CSS/jquery-ui-queues.css${DMY13}" rel="stylesheet" type="text/css" />        
<link href="ThemeproLO/Common/CSS/dataTables-queues.css${DMY13}" rel="stylesheet" type="text/css" />

 <link href="ThemeproLO/Common/CSS/bootstrap/css/bootstrap.min.css${DMY13}" rel="stylesheet" type="text/css" />
 
   <link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.bootstrap.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.core.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.default.css${DMY13}">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/font-awesome.min.css${DMY13}">
    <!-- Ionicons -->
  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/ionicons.min.css${DMY13}">
    <!-- Theme style -->
    <link href="ThemeproLO/Common/CSS/dist/css/AdminLTE.min.css${DMY13}" rel="stylesheet" type="text/css" />
	
	
	
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link href="ThemeproLO/Common/CSS/dist/css/skins/_all-skins.min.css${DMY13}" rel="stylesheet" type="text/css" />
	
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
  
 
<script src="ThemeproLO/Common/scripts/Config/FileForward/onload.js${DMY13}" type="text/javascript"></script>
<script src="ThemeproLO/Common/scripts/Config/FileForward/Validation.js${DMY13}" type="text/javascript"></script>
   

<head id="Head1" runat="server">
    
    <title>Forward Page</title>
</head>
<body bgcolor="#FFF5EE">

<form id="FileForward" style="background-color:white; height:580px" name="File Forward"  action=""  method="POST">
       
             <input id="LoggedInUser" class="DBfields" name="LoggedInUser" type="hidden" value=""/>
			 <input id="ActivityID" class="DBfields"  name="ActivityID" type="hidden" value=""/>
              <input id="mode" class="DBfields" type="hidden" name="mode"   value=""/>
			  <input id="LAPP_ID" class="DBfields" name="LAPP_ID" type="hidden" value=""/>
			  
			  <input id="Username"  name="Username" type="hidden" value=""/>
			  <input id="MenuName"  name="MenuName" type="hidden" value=""/>
			  
              <input id="BodyMainContentH" name="BodyMainContentH" type="hidden" value=""/>
              <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>   

			  
	  
               
      
    <input type="button" id ="GetFileHistData" name="GetFileHistData" style="display:none" onclick="FncallModPageGridLrgData(this,'Table2',{spname:'Sam_sFileFwdQD',Param:$('#PrcsID').val(),brid:'',MnuId:'FRWD'},{0:$('#LAPP_BrID'),1:$('#LAPP_BrName')});" />
           
       <div id="HistoryPage">
  <div id="PoplCustomHdrStrip">
	 

</div>

<table class="xdTable" cellspacing="2" cellpadding="2"  width="100%" border="0">	 
<tbody id="HistFields">
<tr>
 <td class="ColumnHeading"><font face="calibri" size="2">Workflow Name</font>
        </td>       
      
         <td>  : 
<input class="queueflddata" face="calibri" id="WFNameHist" disabled name="WFNameHist" value=""/>          
	<input class="queueflddata" face="calibri" id="WFIDHist" disabled name="WFIDHist" type="hidden" value=""/>  	

 <img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sWFNAME',Param:'',brid:'',MnuId:''},{0:$('#WFNameHist'),1:$('#WFIDHist')})">
                  
          </td> 
</tr>

</tbody>
 </table>  


     </div>
	 
	 
 
 <div>  
     
<div id="popup" class="SearchList">
            <table id="Table1" class="display" border="0"></table>
        </div>
	 
  <div class="Scroll" id="Outer-Div">
      <div class="cls_Table1Container" id="table-scroll">
<table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
    
    
    </table>
    </div>
    </div>

</div>
    </form>
</body></html>
