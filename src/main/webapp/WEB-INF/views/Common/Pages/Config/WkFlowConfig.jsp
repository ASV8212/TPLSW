<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>workflow</title>
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

   
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/Tabs.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Config/WkflowConfig/onload.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Config/WkflowConfig/Validation.js${DMY13}"></script>

</head>
<body bgcolor="white">
<form id="workflowConfig"  height:640px" name="workflow Config"  action=""  method="POST">
       <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                <span>workflow </span></div>
				  <input id="LoggedInUser" class="" name="LoggedInUser" type="hidden" value=""/>
				   <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>      
             <input id="workflow" class="DBfields" name="workflow" type="hidden" value=""/>
			<input id="WFtblProp" class="DBfields" name="WFtblProp" type="hidden" value=""/>
 <div> 
     <div id="cssmenu" class="round">
     <section >
    <ul class="tabs">
    <li id="Tab1" class="NewTab"> <a id="df1" href="#tab1">New</a></li>
    <li id="Tab2" class="EditTab"><a id="df2" href="#tab2" >Edit</a></li>
   
   
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
      <div class="NewDetails">

                     <center>
<table class="xdTable" cellspacing="2" cellpadding="2" width="100%" border="0">

<tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Workflow name</font>

        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="WFName" name="WFName" disabled type="text" value="" class="inputTXT Newdetls DBfields "><img src="ThemeproLO/Common/Images/search1.png" id="Desgnlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'sam_sworkflowfetch',Param:'',brid:'',MnuId:''},{0:$('#WFName')});" /><span id="span_imgdateapp" style="COLOR: red">*</span>
           
          
          </td> 
       
        </tr>
        
  <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Table name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="TableName" name="TableName" disabled  type="text" value=""  class="inputTXT Newdetls DBfields "><img src="ThemeproLO/Common/Images/search1.png" id="Desgnlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'sam_sworkfetch',Param:'',brid:'',MnuId:''},{0:$('#TableName')});" /><span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>
               
  <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Unique Parameter</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="UniqueParam" name="UniqueParam"   type="text" value=""  class="inputTXT Newdetls DBfields "><span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>
        <tr>
        <td>
  <tr></tr>   
  <tr></tr>   
 <tr>
          <tr></tr>   
          
          </table>
          
          
          <!-- <input type="button" style="display:none" onclick="FncallwebserviceGrid(this,'Table2',{spname:'fetchgriddata',Param:$('#TableName').val(),brid:'',MnuId:''},{1:$('#UniqueParam')});" id="BTNworks" name="BTNworks" />
        <table id="Table2" name="WFTableProperties" class="display" border="0"></table>
        <div class="GridMndtry"  style="display:none" id="Table2GridPop"  >
       	<table class="xdTable gridclass" cellspacing="2" cellpadding="2" style="width:100%" border="0">
  
<tbody>


<tr>
<td class="ColumnHeading"><font face="Verdana" size="2">ColumnNames</font></td>
<td><input class="gridDBfields  inputTXT  " disabled onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="10" id="ColumnNames" name="ColumnNames" value="" /></td>
<td class="ColumnHeading"><font face="Verdana" size="2">AliasNames</font></td>
<td><input onchange="this.setAttribute('value', this.value);" value=""  class="gridDBfields  inputTXT  " onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="AliasNames" name="AliasNames"/></td>
</tr>

   </tbody>      
  </table>
  
  </div>-->
  <table>
  <tr><td style="width:25%"> <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="save" type="button" value="SAVE"  />
            </td></tr></table>
         
</center>  
    
      </div>
      </div>
     </div>
    
    </article>
    
     <article name="Tab2" id="tab2">
<br />
    <div align="center">
    <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
               
                </div>
    <div class="TXTFIELDSCLEAR" align="center">
      <div class="EditDetails">
 <center>
<table class="xdTable" cellspacing="2" cellpadding="2" width="100%" border="0">

<tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Workflow name</font>

        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="EditWFName" name="EditWFName" disabled type="text" value="" class="inputTXT   DBfields Editdetls"><img src="ThemeproLO/Common/Images/search1.png" id="Desgnlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'sam_sEditworkflowfetch',Param:'',brid:'',MnuId:''},{0:$('#EditWFName'),1:$('#EditTableName'),2:('#EditUniqueParameter')});" /><span id="span_imgdateapp" style="COLOR: red">*</span>
           
          
          </td> 
       
        </tr>
        
  <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Table name</font>
        </td>
        
      
         <td style="width:10%">
        <input onkeyup="this.setAttribute('value', this.value);" id="EditTableName" name="EditTableName" disabled  type="text" value=""  class="inputTXT  DBfields Editdetls"><!-- <img src="ThemeproLO/Common/Images/search1.png" id="Desgnlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'sam_sworkfetch',Param:'',brid:'',MnuId:''},{0:$('#EditTableName')});" /> --><span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>
        <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Unique Parameter</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="EditUniqueParameter" name="EditUniqueParameter"   type="text" value=""  class="inputTXT DBfields Editdetls"><span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>
  <tr></tr>   
  <tr></tr>   

          <tr></tr>   
          
          </table>
      
      
 <table>
  <tr><td style="width:50%"> 
                <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="Update" type="button" value="Update"  />&nbsp;&nbsp;
            <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="Delete" type="button" value="Delete"  />
               </td></tr></table>
           
</center>  
    
      </div>
      </div>
     </div>
    </article>
    </section>
     <input type="button" style="display:none" onclick="FncallwebserviceGrid(this,'Table2',{spname:'Sam_sfetchWFNewgriddata',Param:$('#TableName').val(),brid:'',MnuId:''},{0:$('#TableName')});" id="BTNworks" name="BTNworks" />
         <input type="button" style="display:none" onclick="FncallwebserviceGrid(this,'Table2',{spname:'sam_sfetchWFgriddata',Param:$('#EditTableName').val(),brid:'',MnuId:''},{});" id="EditBTNworks" name="EditBTNworks" />
        <table id="Table2" name="wrkflowconfig|MasterGridLabel" class="display" border="0"></table>
        <div class="GridMndtry"  style="display:none" id="Table2GridPop"  >
       	<table class="xdTable gridclass" cellspacing="2" cellpadding="2" style="width:100%" border="0">

<tbody>
<tr>
<td class="ColumnHeading"><font face="Verdana" size="2">ColumnNames</font></td>
<td><input class="gridDBfields inputTXT  " disabled onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="10" id="ColumnNames" name="ColumnNames" value="" /></td>
<td class="ColumnHeading"><font face="Verdana" size="2">AliasNames</font></td>
<td><input onchange="this.setAttribute('value', this.value);" value=""  class="gridDBfields GridMndtry  inputTXT" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="AliasNames" name="AliasNames"/><span id="span_imgdateapp" style="COLOR: red">*</span></td>
</tr>

   </tbody> 
  </table>


  </div>
  
  
 <div id="popup" class="SearchList">
            <table id="Table1" class="display" border="0"></table>
        </div>
</div>
<div style="display:none">
<table id="wrkflowconfigGrdLbl">
<tr role="row"><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" style="width: 308px;"><div class="DataTables_sort_wrapper">Action</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="ColumnNames: activate to sort column ascending" style="width: 528px;"><div class="DataTables_sort_wrapper">ColumnNames</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="AliasNames: activate to sort column ascending" style="width: 458px;"><div class="DataTables_sort_wrapper">AliasNames</div></th></tr>
</table>
</div>


</form>
</body>
