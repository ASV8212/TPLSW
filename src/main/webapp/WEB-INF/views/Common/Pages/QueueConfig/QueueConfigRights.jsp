<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
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


<script src="ThemeproLO/Common/scripts/QueueConfiguration/QueueConfigRights/Onload.js${DMY13}" type="text/javascript"></script>
<script src="ThemeproLO/Common/scripts/QueueConfiguration/QueueConfigRights/Validation.js${DMY13}" type="text/javascript"></script>

<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/QueueTabs.js${DMY13}"></script>

<head id="Head1" runat="server">
    
    <title>Rights</title>
</head>
<body bgcolor="white">

<form id="QueueConfigRights"  height:640px" name="Queue Config Rights"  action=""  method="POST">
       <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                <span>Rights</span></div>
             <input id="LoggedInUser" class="DBfields" name="LoggedInUser" type="hidden" value=""/>
 <input id="ActivityID" class="DBfields"  name="ActivityID" type="hidden"  value=""/>
  
              <input id="BodyMainContentH" name="BodyMainContentH" type="hidden" value=""/>
              <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>
            
        
 <div> 
     <div id="cssmenu" class="round">
     <section >
    <ul class="tabs">
    <li id="Tab1" class="AssignTab"> <a id="df1" href="#tab1">Assign</a></li>
  </ul>
         </div> 
     
  <div class="clr"></div>
   <section class="block">
    <article name="Tab1" id="tab1">
<br />
    <div align="center">
    <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
               
                </div>
    <div class="TXTFIELDSCLEAR" align="center">
      <div class="AssignDetails">
<div id="popup" class="SearchList">
            <table id="Table1" class="display" border="0"></table>
        </div>
          <input id="Queue-ID" name="Queue-ID" type="hidden" class="ISDBfields" value=""/>
             
                 <input id="WFID" name="WFID" class="ISDBfields" type="hidden" value=""/>
                   <input id="PKID" name="PKID" class="ISDBfields" type="hidden" value=""/>
				    <input id="Rights" name="Rights" class="ISDBfields" type="hidden" value=""/>
     <table style="padding-top:0px; width:60%;" cellpadding="10" cellspacing="10">

       
<tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" >
          <font face="Verdana" size="3">Workflow Name</font>
        </td>
        
      
         <td style="width:10%">
       
           <input onkeyup="this.setAttribute('value', this.value);" id="WFName" name="WFName" disabled type="text" value="" class="inputTXT ISDBfields ISDBMndtry ">
          <img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'Sam_sFetchWfname',Param:'',brid:'',MnuId:''},{1:$('#WFID'),0:$('#WFName')});clrtxtWF();" />
          <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>


    <tr>
   <td style="width:5%">
        </td>
    <td style="width:10%">
          <font face="Verdana" size="3">Queue Name</font>
        </td>
         <td style="width:25%">
           <input onkeyup="this.setAttribute('value', this.value);" id="QueueName" disabled name="QueueName" type="text" value="" class="inputTXT">
           <img src="ThemeproLO/Common/Images/search1.png" id="menulookup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sQueueNAME',Param:$('#WFID').val(),brid:'',MnuId:''},{1:$('#Queue-ID'),0:$('#QueueName')});clrtxtQName();" /><span id="span_imgdateapp" style="COLOR: red">*</span>
        
       
        </td>
        
        </tr>


        

         
        <tr>
         <td style="width:5%">
        </td>
    <td style="width:10%">
          <font face="Verdana" size="3">Rights Type</font>
        </td>
         <td style="width:10%">
          
           <select id="RightsType" name="RightsType" class="ISDBfields inputTXT ISDisable ISDBMndtry" value="" onchange="this.setAttribute('value', this.value);clrtxtsel();"/>
            <option value="">--Select--</option>
            <option value="User">User</option>
            <option value="Group">Group</option>
              
            </select> <span id="span_imgdateapp" style="COLOR: red">*</span>
        </td>
       
        </tr>
        
         <tr>
          <td style="width:5%">
        </td>
    <td style="width:10%">
          <font face="Verdana" size="3">Assign Rights To</font>
        </td>
         <td style="width:10%">
            <input onkeyup="this.setAttribute('value', this.value);" id="Rights" name="Rights" disabled type="text" value="" class="inputTXT ISDBfields" > 
                <img src="ThemeproLO/Common/Images/search1.png" id="Rightslookup"  class="find2"    onclick="FncallwebserviceChk(this,'GetJsonBRID',{spname:'SAM_sAssignAltUSERFrQUe',Param:$('#WFID').val(),brid:$('#QueueName').val(),MnuId:$('#RightsType').val()},{});" />
           
            <span id="span_imgdateapp" style="COLOR: red">*</span>
           </td>
        
        </tr>
 
</table>

	<input type="button" style="display:none" onclick="FncallPageGrid(this,'Table2',{spname:'Sam_squeuerightview',Param:$('#WFID').val(),brid:$('#Queue-ID').val(),MnuId:$('#RightsType').val()},{});" id="AsgnQuegrid" name="AsgnQuegrid" />
     <table id="Table2" class="display" name="" border="0"></table>
	 
	 <input type="button" style="display:none" onclick="FncallPageGrid(this,'Table3',{spname:'Sam_squeuerightviewlevel',Param:$('#WFID').val(),brid:$('#Queue-ID').val(),MnuId:''});" id="QueRgtsviewlevel" name="QueRgtsviewlevel" />
    <table id="Table3" class="display" name="" border="0"></table>
    
      </div>
      </div>
     </div>
    </article>
  </section>
</section>
     
     <div class="Scroll" id="Outer-Div">
      <div class="cls_Table1Container" id="table-scroll">
    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Tablename">
    </table>
    </div>
    </div>

</div>
    </form>
</body></html>