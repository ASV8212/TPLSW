
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


<script src="ThemeproLO/Common/scripts/Config/Filestatusconfig/onload.js${DMY13}" type="text/javascript"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Config/Filestatusconfig/validation.js${DMY13}"></script>
<head id="Head1" runat="server">
    
    <title>File Status Config</title>
</head>
<body bgcolor="white">

<form id="ApplicationForm"  height:640px" name="ApplicationForm"  action=""  method="POST">
       <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                <span>File Status Config</span></div>
<input id="LoggedInUser" class="DBfields" name="LoggedInUser" type="hidden" value=""/>
             <input id="WFID" class="ISDBfields" name="WFID" type="hidden" value=""/>
          <input id="PKID" name="PKID" class="ISDBfields" type="hidden" value=""/>
  <input id="RPKID" name="RPKID" class="ISDBfields" type="hidden" value=""/>
   <input id="Rights" name="Rights" class="ISDBfields" type="hidden" value=""/>
   <div> 
     <div id="cssmenu" class="round">
     <section>
    <ul class="tabs">
    <li id="Tab1" class="NewTab"> <a id="df1" href="#tab1">Config</a></li>
    <li id="Tab2" class="EditTab"><a id="df2" href="#tab2" >Rights</a></li>
  </ul>
  </section>
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
 <div id="Rearrange" align="center">
      <table style="padding-top:15px; width:25%;" cellpadding="5" cellspacing="5">
       
         <tr class="levelhide">
   
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Workflow Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="WFName" name="WFName" disabled type="text" value="" class="inputTXT ISDBfields Mndtry ClearTxt" onchange="theme();" >
         <img src="ThemeproLO/Common/Images/search1.png" id="Edit" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sWorkflow',Param:'',brid:'',MnuId:''},{1:$('#WFID'),0:$('#WFName')});ClearFields();" />
         
          <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>
         <tr class="levelhide">
 
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Review Name</font>
        </td>
        
      
         <td style="width:10%">
           
           <input onkeyup="this.setAttribute('value', this.value);" id="ReviewName" name="ReviewName"  type="text" value="" class="inputTXT ISDBfields Mndtry ClearTxt" onchange="clrscr();FetchTblColName();fetchdata();"  >
          <img src="ThemeproLO/Common/Images/search1.png" id="Edit" class="find6"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sreviewflow',Param:$('#WFName').val(),brid:'',MnuId:''},{0:$('#ReviewName'),1:$('#FunctionName'),2:$('#TableName'),4:$('#Icon')});" />
          <span id="span_imgdateapp" style="COLOR: red">*</span>
           </td> 
       
        </tr>
             <tr class="levelhide">
   
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Function Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="FunctionName"   name="FunctionName" type="text" value="" class="inputTXT ISDBfields Mndtry ClearTxt" onchange="fetchdata();">
        
         
          <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>
        <tr class="levelhide">
   
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Icon Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="Icon"   name="Icon" type="text" value="" class="inputTXT ISDBfields Mndtry ClearTxt"  onchange="this.setAttribute('value',this.value);" >
        
         
          <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>
        
        <tr class="levelhide">
   
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Table Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="TableName"  disabled name="TableName" type="text" value="" class="inputTXT ISDBfields Mndtry ClearTxt" onchange="FetchTblColName();fetchdata();">
         <img src="ThemeproLO/Common/Images/search1.png" id="Edit" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_stable',Param:$('#WFName').val(),brid:'',MnuId:''},{0:$('#TableName')});clrtxtWF();" />
         
          <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>
            <tr>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">Column Name</font>
            </td>
          
            <td style="width:10%" >
               <select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value); name="lstLeft" id="lstLeft" multiple style="width:223px;height:223px;" class="inputTXT ClearTxt " value="" > 

</select>
                <input type="hidden" id="FromLBVal" name="FromLBVal" class="ISDBfields  ClearTxt"/>
            </td> 
            <td style="width:10%"><td> 
							   
				    <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Right.png" id="right" title= "Right" class="" /></ul>
            </br> <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Left.png" id="left" title= "Left" class="" /></ul>
          <td></td>          
</td>
       </td> 
       <!--  <td><input type="button" id="left" value="left"><input type="button" id="right" value="right"></td>
          -->         
      
            <td  style="width:10%">
               <select onblur="WhereConditiondrop();" onchange="WhereConditiondrop();this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value); name="lstRight" id="lstRight" multiple style="width:223px;height:223px;" class="inputTXT ClearTxt" value="" > 

</select>
<input type="hidden" id="HWrConditionClm" name="HWrConditionClm" class=""/>
                <input type="hidden" id="FromLBVal" name="FromLBVal" class="ISDBfields "/>
            </td> 
                  <td> 
			<ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Up.png" id="up" title= "Up" class="" /></ul></br>
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Down.png" id="down" title= "Down" class="" /></ul>
                   

       </td>
     <!--  <td><input type="button" id="up" value="up"><input type="button" id="down" value="down"></td>-->
               <td></td>
               </tr>
                            <tr>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">Where Condition</font>     </td> 
                 <td style="width:10%">
           
            <select onchange="this.setAttribute('value',this.value);SelectedDropVal('WrConditionClm');" onkeyup="this.setAttribute('value',this.value);" name="WrConditionClm" id="WrConditionClm"   value="" class="ISDBfields  inputTXT textclear"  > 

</select>
           </td> 
               </tr>
               
              
           <tr>
        <td style="width:40%"></td>
        <td  style="width:10%">
       <input type="hidden" id="RemenuId" name="RemenuId" class="ISDBfields RemenuID ClearTxt"/> <input type="hidden" id="ParentRemenuId" name="ParentRemenuId" class="ISDBfields RemenuID"/>
            <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="RearrSubmit" type="button" value="Submit"  />
          
             </td>
    </tr>
          
        
  </table>
  
         
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
      <div class="AssignDetails">
 <center>
<table class="xdTable" cellspacing="2" cellpadding="2" width="100%" border="0" style="width: 700px; height: 100px;">
<tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Workflow Name</font>
        </td>
        
         <td style="width:25%">
       
           <input onkeyup="this.setAttribute('value', this.value);" id="RightsWFName" name="RightsWFName" disabled type="text" value="" class="inputTXT RightsMndtry ">
          <img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'sam_sfileWRname',Param:'',brid:'',MnuId:''},{1:$('#RightsReviewName'),0:$('#RightsWFName'),2:$('#RPKID')});clrtxtWF();" />
          <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>

    <tr class="levelhide">
    
    
   <td style="width:5%">
        </td>
        
        
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Review Name</font>
        </td>
         <td style="width:25%">
           <input onkeyup="this.setAttribute('value', this.value);" id="RightsReviewName" disabled name="RightsReviewName" type="text" value="" class=" RightsMndtry inputTXT">        
       
        </td>
        
        </tr>


        

         
        <tr class="levelhide">
         <td style="width:5%">
        </td>
        
        
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Rights Type</font>
        </td>
        
        
         <td style="width:10%">
          
           <select id="RightsType" name="RightsType" class="ISDBfields inputTXT ISDisable RightsMndtry" value="" onchange="this.setAttribute('value', this.value);clrtxtsel();">
            <option value="">--Select--</option>
            <option value="User">User</option>
            <option value="Group">Group</option>
            </select>
            
              
          
             <span id="span_imgdateapp" style="COLOR: red">*</span>
        </td>
       
        </tr>
        
         <tr class="levelhide">
          <td style="width:5%">
        </td>
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Assign Rights To</font>
        </td>
         <td style="width:10%">
            <input onkeyup="this.setAttribute('value', this.value);" id="Rights" name="Rights" disabled type="text" value="" class="inputTXT ISDBfields" > 
                <img src="ThemeproLO/Common/Images/search1.png" id="Rightslookup"  class="find2"    onclick="FncallwebserviceChk(this,'GetJsonBRID',{spname:'SAM_sFileAssignRights',Param:$('#RightsWFName').val(),brid:$('#RightsReviewName').val(),MnuId:$('#RightsType').val()},{});" />
           
            <span id="span_imgdateapp" style="COLOR: red">*</span>
           </td>
        
        </tr>
 
</table>
<!--  
	<input type="button" style="display:none" onclick="FncallPageGrid(this,'Table2',{spname:'Sam_sconfigrightview',Param:$('#RightsWFName').val(),brid:$('#RightsReviewName').val(),MnuId:$('#RightsType').val()},{});" id="AsgnQuegrid" name="AsgnQuegrid" />
     <table id="Table2" class="display" name="" border="0"></table>
	 -->
	 <input type="button" style="display:none" onclick="FncallPageGrid(this,'Table2',{spname:'Sam_sconfigrightviewlevel',Param:$('#RightsWFName').val(),brid:$('#RightsReviewName').val(),MnuId:''});" id="QueRgtsviewlevel" name="QueRgtsviewlevel" />
    <table id="Table2" class="display" name="" border="0"></table>
    
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

 <div id="popup" class="SearchList">
            <table id="Table1" class="display" border="0"></table>
        </div>
</form>
</body>

</html>