<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>


<link href="ThemeproLO/Common/CSS/Tabs.css${DMY13}" rel="stylesheet" type="text/css" /> 
 
	   
<!--<link href="ThemeproLO/Common/Styles/colla/jquery-wijmo.css${DMY13}" rel="stylesheet" type="text/css" />-->
        <link href="ThemeproLO/Common/CSS/jquery-ui-queues.css${DMY13}" rel="stylesheet" type="text/css" />        
<link href="ThemeproLO/Common/CSS/dataTables-queues.css${DMY13}" rel="stylesheet" type="text/css" />

 <link href="ThemeproLO/Common/CSS/bootstrap/css/bootstrap.min.css${DMY13}" rel="stylesheet" type="text/css" />
 
  <!--  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.bootstrap.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.core.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.default.css${DMY13}">-->


  <!--   <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/font-awesome.min.css${DMY13}">

 <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/ionicons.min.css${DMY13}">-->

    <link href="ThemeproLO/Common/CSS/dist/css/AdminLTE.min.css${DMY13}" rel="stylesheet" type="text/css" />
	
	
	
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    
	
	<link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />


	  

<head id="Head1" runat="server">
    
    <title>Queue Page</title>
</head>
<body bgcolor="#FFF5EE">

<form id="QueueForm" style="background-color:white; height:600px" name="Queue Form"  action=""  method="POST">
       
             <input id="LoggedInUser" class="DBfields" name="LoggedInUser" type="hidden" value=""/>
			 <input id="ActivityID" class="DBfields"  name="ActivityID" type="hidden" value=""/>
              <input id="mode" class="DBfields" type="hidden" name="mode"   value=""/>
			  		  
			  
              <input id="BodyMainContentH" name="BodyMainContentH" type="hidden" value=""/>
              <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>        
   
     <div id="QueuePage">
     
    
     </div>
	 <div>
	
	 </div>
	 
      
 <div>  
       
     <div class="Scroll" id="Outer-Div">
      <div class="cls_Table1Container" id="table-scroll">
    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table1">
    </table>
    </div>
    </div>

</div>
    </form>
</body>
<script type="text/javascript" src="ThemeproLO/Common/scripts/UI/jquery-1.11.1.min.js${DMY13}"></script>	 
<script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui_ext.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}"></script>   

<script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/jquery.dataTables.min.js${DMY13}"></script>
<script src="ThemeproLO/Common/scripts/UI/jquery.xml2json.js${DMY13}" type="text/javascript"></script>

<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/loadjson_V_19.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng.js${DMY13}"></script>
 
<script src="ThemeproLO/Common/scripts/Main/QueuePage/onload.js${DMY13}" type="text/javascript"></script>
<script src="ThemeproLO/Common/scripts/Commonfiles/QueueTabs.js${DMY13}" type="text/javascript"></script>
<script src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}" type="text/javascript"></script>

</html>
