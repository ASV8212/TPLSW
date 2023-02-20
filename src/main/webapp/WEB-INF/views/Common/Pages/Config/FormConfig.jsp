<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Form Configuration</title>
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

<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/QueueTabs.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/scripts/Config/FormConfig/Validation.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/scripts/Config/FormConfig/Onload.js${DMY13}"></script>
</head>
<body bgcolor="white">
<form id="FormConfig"   name="FormConfig"  action=""  method="POST">
       <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                <span>Form Configuration</span></div>
              <input id="LoggedInUser" class="DBfields" name="LoggedInUser" type="hidden" value=""/>
              <input id="ActivityID" class="DBfields"  name="ActivityID" type="hidden"  value=""/>
  
              <input id="BodyMainContentH" name="BodyMainContentH" type="hidden" value=""/>
              <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>            
              <input type="hidden" id="SpName" name="SpName" class="ISDBfields">              
              <input type="hidden" id="EditPKID" class="inputTXTQ ISDBfields" name="EditPKID"  value=""/>           
              <input type="hidden" id="FormID" name="FormID" value="" class="inputTXTQ ISDBfields">
              <input id="SetRightsID" name="SetRightsID" class="ISDBfields ClrTXT" type="hidden" value="">
               <table width="100%" cellpadding="10" cellspacing="0" border="0">
<tbody><tr style="width: 100%;display:none" bgcolor="#A3C3F1">
      
  </tbody></table>
        
 <div> 
     <div id="cssmenu" class="round">
     <section>
    <ul class="tabs">
    <li id="Tab1" class="NewTab"> <a id="df1" href="#tab1">New</a></li>
    <li id="Tab2" class="EditTab"><a id="df2" href="#tab2" >Edit</a></li>  
     <li id="Tab3" class="NewTab"> <a id="df1" href="#tab3">Assign</a></li>
  </ul>
  </div> 
     
  <div class="clr"></div>
   <section class="block">
 <article name="Tab1" id="tab1" style="height:240px;">
  <div align="center">
   <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%"></div>
     
     <div class="TXTFIELDSCLEAR" align="center">
       <div class="ShowEdit" > 
       <table style="padding-top:0px; width:25%;" cellpadding="5" cellspacing="5">
       
     <tr class="levelhide">
    	 <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Workflow Name</font></td>
         <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" id="NewWFName" name="NewWFName" disabled type="text" value="" class="inputTXT NewMndtry  ClearTxt" onchange="ClrTxt();">
         <img src="ThemeproLO/Common/Images/search1.png" id="Edit" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sAttachConfigwkpop',Param:'',brid:'',MnuId:''},{0:$('#NewWFName'),1:$('#NewpackageId')});" /><span id="" style="COLOR: red" />*</span>
          
         <!--  <input type="button" id="EditTblclmName"  style="display:none" onclick="fillHistTblClmNames($('#EditPKID').val(),'','','','','Sam_sFetchAttchPageDetl','EditlstLeft');"> -->
          
          
          </td> 
     </tr>
      <tr class="levelhide">
    		<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Package Id</font></td>            
            <td style="width:10%">
            <input onkeyup="this.setAttribute('value', this.value);" id="NewpackageId" name="NewpackageId" disabled type="text" value="" class="inputTXT  NewMndtry ClearTxt" onchange=""><span id="" style="COLOR: red" />*</span>
            <!--  <img src="ThemeproLO/Common/Images/search1.png" id="menulookup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sAttachConfigpackpop',Param:'',brid:'',MnuId:''},{0:$('#packageId')});" />-->
            </td>       
      </tr>
      
      <tr class="levelhide">
    		<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Form Id</font></td>            
            <td style="width:10%">
            <input onkeyup="this.setAttribute('value', this.value);" id="NewFormID" name="NewFormID"  type="text" value="" class="inputTXT  NewMndtry ClearTxt" onchange=""><span id="" style="COLOR: red" />*</span>
            <!--  <img src="ThemeproLO/Common/Images/search1.png" id="menulookup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sAttachConfigpackpop',Param:'',brid:'',MnuId:''},{0:$('#packageId')});" />-->
            </td>       
      </tr>
      <tr class="levelhide">
    		<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Form Name</font></td>            
            <td style="width:10%">
            <input onkeyup="this.setAttribute('value', this.value);" id="NewFormName" name="NewFormName"  type="text" value="" class="inputTXT  NewMndtry ClearTxt" onchange=""><span id="" style="COLOR: red" />*</span>
            <!--  <img src="ThemeproLO/Common/Images/search1.png" id="menulookup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sAttachConfigpackpop',Param:'',brid:'',MnuId:''},{0:$('#packageId')});" />-->
            </td>       
      </tr>
       <tr class="levelhide">
    		<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Form URL</font></td>            
            <td style="width:10%">
            <input onkeyup="this.setAttribute('value', this.value);" id="NewFormURL" name="NewFormURL"  type="text" value="" class="inputTXT  ClearTxt" onchange="">
            <!--  <img src="ThemeproLO/Common/Images/search1.png" id="menulookup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sAttachConfigpackpop',Param:'',brid:'',MnuId:''},{0:$('#packageId')});" />-->
            </td>       
      </tr>
        <tr class="levelhide">
    		<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Maintable Name</font></td>            
            <td style="width:10%">
            <input onkeyup="this.setAttribute('value', this.value);" id="NewMaintableName" name="NewMaintableName"  type="text" value="" disabled class="inputTXT  NewMndtry ClearTxt" onchange="FetchAddTbl();">
           <img src="ThemeproLO/Common/Images/search1.png" id="menulookup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'sam_sFetchWFTableName',Param:$('#NewWFName').val(),brid:'',MnuId:''},{0:$('#NewMaintableName')});" /><span id="" style="COLOR: red" />*</span>
         
            </td>       
      </tr>
       <tr>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">Additional tables</font>
            </td>
          
            <td style="width:10%" >
               <select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value); name="lstLeft" id="lstLeft" multiple style="width:223px;height:223px;" class="inputTXT ClearTxt " value="" > 

</select>
               <!--   <input type="hidden" id="FromLBVal" name="FromLBVal" class="ISDBfields ClearTxt"/>-->
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
               <select  onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value); name="lstRight" id="lstRight" multiple style="width:223px;height:223px;" class="inputTXT ClearTxt" value="" > 

</select>
                <input type="hidden" id="AddtionalTables" name="AddtionalTables" class="ISDBfields"/>
            </td> 
                  <td> 
                     <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Up.png" id="up" title= "Up" class="" /></ul></br>
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Down.png" id="down" title= "Down" class="" /></ul>

       </td>
     <!--  <td><input type="button" id="up" value="up"><input type="button" id="down" value="down"></td>-->
               <td></td>
               </tr>
      
       <tr>
       <td style="width:40%"></td>
       <td  style="width:10%">
      
       <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="NewFormIns" type="button" value="Save"  /> 
         </tr>
         </table>
        
     </div>
    </div>
  </div>
 </article>
     <article name="Tab2" id="tab2" style="height:240px;">
       <br />
    
     <div align="center">
   <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%"></div>
     
     <div class="TXTFIELDSCLEAR" align="center">
       <div class="ShowEdit" > 
       <table style="padding-top:0px; width:25%;" cellpadding="5" cellspacing="5">
       
     <tr class="levelhide">
    	 <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Workflow Name</font></td>
         <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" id="EditWfname" name="EditWfname" disabled type="text" value="" class="inputTXT EditMndtry  ClearTxt">
         <img src="ThemeproLO/Common/Images/search1.png" id="Edit" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'sam_sEditFetchFormHdrVal',Param:'',brid:'',MnuId:''},{0:$('#EditPKID'),1:$('#EditWfname'),2:$('#EditpackageId'),3:$('#EditFormId'),4:$('#EditFormName'),5:$('#EditFormURL'),6:$('#EditMaintableName')});" /><span id="" style="COLOR: red" />*</span>
          
          
          </td> 
     </tr>
          <tr class="levelhide">
    	 <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Package Id</font></td>
         <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" id="EditpackageId" name="EditpackageId" disabled type="text" value="" class="inputTXT EditMndtry  ClearTxt">
            
          
          </td> 
     </tr>
          <tr class="levelhide">
    	 <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Form Id</font></td>
         <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" id="EditFormId" name="EditFormId"  type="text" value="" onchange="Clrval();" class="inputTXT EditMndtry  ClearTxt">
            
          
          </td> 
     </tr>
          <tr class="levelhide">
    	 <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Form Name</font></td>
         <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" id="EditFormName" name="EditFormName"  type="text" value="" class="inputTXT EditMndtry  ClearTxt">
           
          
          </td> 
     </tr>
      <tr class="levelhide">
    	 <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Form URL</font></td>
         <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" id="EditFormURL" name="EditFormURL"  type="text" value="" class="inputTXT   ClearTxt">
           
          
          </td> 
     </tr>
      <tr class="levelhide">
   
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Maintable Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="EditMaintableName" name="EditMaintableName" disabled type="text" value="" class="inputTXT ISDBfields  EditMndtry">
           <img src="ThemeproLO/Common/Images/search1.png" id="menulookup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'sam_sFetchWFTableName',Param:$('#EditWfname').val(),brid:'',MnuId:''},{0:$('#EditMaintableName')});" /><span id="" style="COLOR: red" />*</span>
         
           
           <input type="button" id="EditAddTblName"  style="display:none" onclick="fillAddTblNames($('#EditWfname').val(),$('#EditMaintableName').val(),$('#EditFormId').val(),'','','Sam_sFetchINSFrmConfigTbl','EditAddTblNameRight');fillAddTblNames($('#EditWfname').val(),$('#EditMaintableName').val(),$('#EditFormId').val(),'','','Sam_sFetchOthrAddTbl','EditAddTblNameLeft');">
          </td> 
       
        </tr>
        <tr>
          
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="2">Additional Tables</font>
            </td>
          
            <td style="width:10%" >
               <select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="EditAddTblNameLeft" id="EditAddTblNameLeft" multiple style="width:223px;height:220px;" class="inputTXT ClearTxt " value="" > 
             

</select>
              <!--    <input type="hidden" id="FromLBQVal" name="FromLBQVal" onchange=""class="ISDBfields ClearTxt"/>-->
            </td> 
            <td style="width:10%"><td> 
				   <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Right.png" id="EditRight" title= "Right" class="" /></ul>
            </br> <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Left.png" id="EditLeft" title= "Left" class="" /></ul>
          <td></td>          
</td>
       </td> 
       <!--  <td><input type="button" id="left" value="left"><input type="button" id="right" value="right"></td>
          -->         
      
            <td  style="width:10%">
               <select onblur="" onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" onfocus="" name="EditAddTblNameRight" id="EditAddTblNameRight" multiple style="width:223px;height:220px;" class="inputTXT ClearTxt TXTFIELDSCLEAR" value="" > 

</select>
                <input type="hidden" id="EditAddtionalTables" name="EditAddtionalTables" class="ISDBfields ClearTxt"/>
            </td> 
                  <td> 
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Up.png" id="Editup" title= "Up" class="" /></ul></br>
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Down.png" id="Editdown" title= "Down" class="" /></ul>  

       </td>
                <td></td>
               </tr>
         
     <tr>
       <td style="width:40%"></td>
       <td  style="width:10%">
      
       <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="Update" type="button" value="Update"  /> 
       <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="Deletebtn" type="button" value="Delete"  /></td>
    </tr>
     </table>
     </div>
     </div>
     </div>
    
    </article>
        <article name="Tab3" id="tab3">
       <br />
    <div align="center">
     <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                </div>
    <div class="TXTFIELDSCLEAR" align="center">
    
    <div class="ShowNewQueue">
    
    <table style="padding-top:0px; width:25%;" cellpadding="5" cellspacing="5">
       
     <tr class="levelhide">
    	 <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Workflow Name</font></td>
         <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" disabled id="name" name="name" type="text" value="" class="inputTXT ISDBfields DBMndtry ClearTxt">
         <img src="ThemeproLO/Common/Images/search1.png" id="Edit" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sAttachConfigwkpop',Param:'',brid:'',MnuId:''},{0:$('#name'),1:$('#packageId')});" /><span id="" style="COLOR: red" />*</span>
          </td> 
     </tr>
         
     <tr class="levelhide">
    		<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Package Id</font></td>            
            <td style="width:10%">
            <input onkeyup="this.setAttribute('value', this.value);" id="packageId" name="packageId" disabled type="text" value="" class="inputTXT DBMndtry ISDBfields ClearTxt" ><span id="" style="COLOR: red" />*</span>
           <!--  <img src="ThemeproLO/Common/Images/search1.png" id="menulookup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sAttachConfigpackpop',Param:'',brid:'',MnuId:''},{0:$('#packageId')});" /> -->       
      		</td>
      </tr>
           
     <tr class="levelhide">
    	<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Form Name</font></td>
        <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" id="FormName" name="FormName" disabled type="text" value="" onchange=""class="inputTXT DBMndtry ISDBfields ClearTxt" >
         <img src="ThemeproLO/Common/Images/search1.png" id="Edit" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'sam_sFertchFormFrRights',Param:$('#name').val(),brid:$('#packageId').val(),MnuId:''},{0:$('#FormID'),1:$('#FormName')});" /><span id="" style="COLOR: red" />*</span>
     </td> 
     </tr>
     
    
        
     <tr>
     	<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">User Type</font></td> 
       	<td style="width:10%"><select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="UsrType" id="UsrType"   value="" class="inputTXT  ISDBfields ClearTxt textclear"  > 
			 					<option value="">--Select--</option>
                    			<option value="User">User</option>
                    			<option value="Group">Group</option></select></td> 
                    			
                    			
        <!--   <td style="width:10%"><img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_add.png" id="Add" class="" title= "Add" onclick="addlistval()" /></td>-->          
 
     </tr>
<tr>
         
    <td style="width:10%"  class="ColumnHeading">
          <font face="Verdana" size="2">Assign Rights To</font>
        </td>
         <td style="width:10%">
            <input onkeyup="this.setAttribute('value', this.value);" id="AssignRights" name="AssignRightsTo" type="text" value="" class="inputTXT "> 
            <img src="ThemeproLO/Common/Images/search1.png" id="Rightslookup" class="find2" style="" onclick="FncallwebserviceChk(this,'GetJsonBRID',{spname:'Sam_sFormRightsUserList',Param:$('#UsrType').val(),brid:$('#name').val()+'|'+$('#packageId').val()+ '|' +$('#FormID').val(),MnuId:''},{});">
           
            
           
           </td>
        
        </tr>
                            
   <tr>
       <td style="width:40%"></td>
       <td  style="width:10%">
        
          </tr>

      </table> 
      </div>
      </div>
     </div>
    </article>
    <input type="button" style="display:none" onclick="FncallPageGrid(this,'Table2',{spname:'sam_sFormRightsView',Param:$('#name').val(),brid:$('#packageId').val(),MnuId:$('#FormID').val()},{});" id="Rgtsgridview" name="Rgtsgridview" />
 
    <table id="Table2" class="display" name="FormRightsView|MasterGridLabel" border="0"></table>
	
 <input type="button" style="display:none" onclick="FncallPageGrid(this,'Table3',{spname:'Sam_smenurightviewlevel',Param:$('#Menulevel').val(),brid:$('#MenuID').val(),MnuId:$('#MenuLevelOne').val()+ ',' +$('#MenuLevelTwo').val()});" id="Rgtsgridviewlevel" name="Rgtsgridviewlevel" />
    <table id="Table3" class="display" name="MenuRightsView|MasterGridLabel" border="0"></table>
 	

  </section>

    

</div>
 <div id="popup" class="SearchList">
           <table id="Table1" class="display" border="0"></table>
        </div>  
          
    </form>
</body>
</html>