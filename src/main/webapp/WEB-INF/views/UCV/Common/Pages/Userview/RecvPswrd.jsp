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

<!--<link href="CSS/Popupjquery-ui.css${DMY13}" rel="stylesheet" type="text/css" />
<link href="CSS/PopupdataTables.jqueryui.css${DMY13}" rel="stylesheet" type="text/css" />-->

        <link href="ThemeproLO/Common/CSS/jquery-ui.css${DMY13}" rel="stylesheet" type="text/css" />
<link href="ThemeproLO/Common/CSS/dataTables.jqueryui.css${DMY13}" rel="stylesheet" type="text/css" />  

<link href="ThemeproLO/Common/jw/js/boxy/stylesheets/boxy.css${DMY13}" rel="stylesheet" type="text/css" />
 <link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />
<link href="ThemeproLO/Common/Alert/sweetalert.css${DMY13}" rel="stylesheet" />
 <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/ionicons.min.css${DMY13}">
  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.bootstrap.css${DMY13}">
  <link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />


<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.core.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.default.css${DMY13}">

 
 <script type="text/javascript" src="ThemeproLO/Common/Alert/sweetalert.min.js${DMY13}"></script>
	
 <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/queuefrwd/jquery.min.js${DMY13}"></script>    
      
	  	  <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/jquery-1.11.1.min.js${DMY13}"></script>	 
	  
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-migrate-1.2.1.min.js${DMY13}"></script>
	 <script type="text/javascript" src="ThemeproLO/Common/scripts/Alert/alertfy.js${DMY13}"></script>
	 		
		  
	 <script type="text/javascript" src="ThemeproLO/Common/Alert/metro/js/jquery.msgbox.js${DMY13}"></script>
	  <script type='text/javascript' src='ThemeproLO/Common/jw/js/boxy/javascripts/jquery.boxy.js'></script>
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

    <script type="text/javascript" src="ThemeproLO/Common/scripts/Main/RecoveryPassword/LoadSubmit/LoadSubmit.js${DMY13}"></script>
      <script type="text/javascript" src="ThemeproLO/Common/scripts/Main/RecoveryPassword/Validation/Validation.js${DMY13}"></script>
   
          
<head id="Head1" runat="server">
    <meta name="viewport" content="width=device-width" />
    <title>Address Details</title>
</head>
<body>

<form id="RecpveryPassword" name="RecpveryPassword" class="form-container "  action=""  method="POST">

  
         <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>
		  <div style="width: 100%" class="form-section-title"><span>Password Recovery <label  style="float:right;" id="time"></label></span></div>   
	<!-- <table style=width:100%>
		   <tr>
      
		 <td class="ColumnHeading"><font face="Verdana" size="2">Please Enter Your Code</font></td>
         
       
        <td class="ColumnHeading">
            <input  onkeyup="this.setAttribute('value', this.value);" class="inputTXT"  id="Code" name="Code" value="" />                    	
        </td>
        
  
     </tr>
	 </table>
		 
		
 <div id="" class="form-column form-column-horizontal" style="width: " >
        <div class="form-cell" >
            <input id="Recvorypwd" name="Recvorypwd" class="form-button buttonPRS" type="button" value="Submit" />
</div>
</div> !-->


  
	
	
	<div id="login">

      <!--  <h2 align="right"><span class="fontawesome-lock"></span>Page Expired in <label id="time"></label></h2> !-->


		<div class="loginsubmt">
	
          <fieldset class="subcontent">
			
            <p><label>Enter the code sent to your mail</label></p>
            <p><input  onkeyup="this.setAttribute('value', this.value);" class="inputTXT"  id="Code" name="Code" value="" /> </p>

            <p>  <input id="Recvorypwd" name="Recvorypwd" class="form-button buttonPRS" type="button" value="Submit" />
			<font id="RightSD" size="2px"> Powered By Encore Theme Technologies
<img style="height:20px;width:16px" src="ThemeproLO/Common/Images/encorelogo.png">
</font>
			
			</p>

          </fieldset>
</div>

      </div>


    </form>
</body>
</html>