<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>


   <link href="ThemeproLO/Common/CSS/Tabs.css${DMY13}" rel="stylesheet" type="text/css" /> 
 
	   
<!--<link href="ThemeproLO/Common/Styles/colla/jquery-wijmo.css${DMY13}" rel="stylesheet" type="text/css" />-->
        <link href="ThemeproLO/Common/CSS/jquery-ui-queues.css${DMY13}" rel="stylesheet" type="text/css" />        
<link href="ThemeproLO/Common/CSS/dataTables-queues.css${DMY13}" rel="stylesheet" type="text/css" />

 <link href="ThemeproLO/Common/CSS/bootstrap/css/bootstrap.min.css${DMY13}" rel="stylesheet" type="text/css" />

    <!-- Font Awesome -->
   <!-- <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/font-awesome.min.css${DMY13}">-->
    <!-- Ionicons -->
 <!-- <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/ionicons.min.css${DMY13}">-->
    <!-- Theme style -->
    <link href="ThemeproLO/Common/CSS/dist/css/AdminLTE.min.css${DMY13}" rel="stylesheet" type="text/css" />
	
	
	
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
  <!--  <link href="ThemeproLO/Common/CSS/dist/css/skins/_all-skins.min.css${DMY13}" rel="stylesheet" type="text/css" />-->
	
	<link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />

  <script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/jquery-1.11.1.min.js${DMY13}"></script>

       <!-- <script src="ThemeproLO/Common/scripts/UI/jquery-latest.min.js${DMY13}" type="text/javascript"></script>-->

 <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}"></script>



<!--  <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js${DMY13}"></script>
      
 
    <script type="text/javascript" src="/jw/js/jquery/jquery-migrate-1.2.1.min.js${DMY13}"></script>
    <script type="text/javascript" src="/jw/js/jquery/ui/jquery-ui-1.10.3.min.js${DMY13}"></script>
    <script type="text/javascript" src="/jw/js/jquery/flexigrid/flexigrid.js${DMY13}"></script>
    
    <script type="text/javascript" src="/jw/js/json/ui_ext.js${DMY13}"></script>
    <script type="text/javascript" src="/jw/js/jquery/md5/jquery.md5.js${DMY13}"></script>
    <script type="text/javascript" src="/jw/js/jquery/jquery.cookie.js${DMY13}"></script>
    <script type="text/javascript" src="/jw/js/guiders/guiders-1.1.1.js${DMY13}"></script>
    
<script type="text/javascript" src="Scripts/UI/jquery-ui.js${DMY13}" ></script>  
<script type="text/javascript" src="../../popup/js/script.js${DMY13}"></script>-->
<script type="text/javascript" src="ThemeproLO/Common/Alert/metro/js/jquery.msgbox.js${DMY13}"></script>

	<script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/jquery.dataTables.min.js${DMY13}"></script>

<script src="ThemeproLO/Common/scripts/UI/jquery.xml2json.js${DMY13}" type="text/javascript"></script>



<!-- <script src="Scripts/UI/jquery.dataTables_1.10.7.js${DMY13}" type="text/javascript"></script>*@
<script src="Scripts/UI/jquery.dataTables.js${DMY13}" type="text/javascript"></script>*@
  
<script src="Scripts/jquery-grid/grid.locale-en.js${DMY13}" type="text/javascript"></script>
<script src="Scripts/jquery-grid/jquery.jqGrid.min.js${DMY13}" type="text/javascript"></script>*@

 
<script type="text/javascript" src="/Scripts/UI/jquery-ui-1.8.20.js${DMY13}"></script>
<script type="text/javascript" src="/Scripts/UI/jquery-ui-1.8.20.min.js${DMY13}"></script>
       
    <script type="text/javascript" src="/jw/js/jquery/jquery.jeditable.js${DMY13}"></script>
<script src="Scripts/Commonfiles/jquery.formgrid.js${DMY13}" type="text/javascript"></script>

      <script type="text/javascript" src="/Scripts/DateControl/jquery.custom.datepicker.js${DMY13}"></script>
      <script type="text/javascript" src="/Scripts/DateControl/jquery.placeholder.min.js${DMY13}"></script>   

    

 <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng.js${DMY13}"></script>
 
   
 *@
 -->
 
 <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/loadjson_V_19.js${DMY13}"></script>
<script src="ThemeproLO/Common/scripts/Main/HistoryQueuePage/onload.js${DMY13}" type="text/javascript"></script>
 
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng.js${DMY13}"></script>
<script src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}" type="text/javascript"></script>
 <!--<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamigration.js${DMY13}"></script>-->
     <!--  <script src="ThemeproLO/Common/CSS/dist/js/app.min.js${DMY13}" type="text/javascript"></script>-->

  <!--   <script src="ThemeproLO/Common/scripts/UI/queuefrwd/googleapis/jquery-ui.min.js${DMY13}"></script>-->
    

<head id="Head1" runat="server">
    
    <title>Queue Page</title>
</head>
<body bgcolor="#FFF5EE">

<form id="HistoryQueuePage" style="background-color:white; height:640px" name="History Queue Page"  action=""  method="POST">
       
             <input id="LoggedInUser" class="DBfields" name="LoggedInUser" type="hidden" value=""/>
			 <input id="ActivityID" class="DBfields"  name="ActivityID" type="hidden" value=""/>
              <input id="mode" class="DBfields" type="hidden" name="mode"   value=""/>
			  <input id="LAPP_ID" class="DBfields" name="LAPP_ID" type="hidden" value=""/>
			  
			  <input id="Username"  name="Username" type="hidden" value=""/>
			  <input id="MenuName"  name="MenuName" type="hidden" value=""/>
			  
              <input id="BodyMainContentH" name="BodyMainContentH" type="hidden" value=""/>
              <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>   

			  
	  
               
      
    <input type="button" id ="assignmentComplete" name="assignmentComplete" style="display:none" onclick="FncallModPageGridLrgData(this,'Table1',{spname:'Sam_sGetHistQD',Param:$('#LAPP_ID').val(),brid:'',MnuId:'Hist'},{0:$('#LAPP_BrID'),1:$('#LAPP_BrName')});" />
           
       <div id="HistoryPage">
     
    
     </div>
	 
	 
<table class="xdTable" cellspacing="2" cellpadding="2"  width="100%" border="0">	 
<tbody>

</tbody>
 </table>   
 <div>  
       
  <div class="Scroll" id="Outer-Div">
      <div class="cls_Table1Container" id="table-scroll">
    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table1">
    
    
    </table>
    </div>
    </div>

</div>
    </form>
</body></html>
