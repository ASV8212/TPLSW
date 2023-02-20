
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

<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/QueueTabs.js${DMY13}"></script>     
<script type="text/javascript" src="ThemeproLO/Common/scripts/Config/AttachConfig/Onload.js${DMY13}"></script>
     

<head id="Head1" runat="server">
    
    <title>AttachConfig</title>
</head>
<body bgcolor="white">

<form id="ApplicationForm"   name="ApplicationForm"  action=""  method="POST">
       <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                <span>Attach Configuration</span></div>
              <input id="LoggedInUser" class="DBfields" name="LoggedInUser" type="hidden" value=""/>
              <input id="ActivityID" class="DBfields"  name="ActivityID" type="hidden"  value=""/>
  
              <input id="BodyMainContentH" name="BodyMainContentH" type="hidden" value=""/>
              <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>            
              <input type="hidden" id="SpName" name="SpName" class="ISDBfields">              
              <input type="hidden" id="EditPKID" class="inputTXTQ ISDBfields ISDBMndtry" name="EditPKID"  value=""/>           
              <input type="hidden" id="hdnuserid" name="hdnuserid" value="" class="inputTXTQ  ISDBMndtry">
              
               <table width="100%" cellpadding="10" cellspacing="0" border="0">
<tbody><tr style="width: 100%;display:none" bgcolor="#A3C3F1">
      
  </tbody></table>
        
 <div> 
     <div id="cssmenu" class="round">
     <section>
    <ul class="tabs">
    <li id="Tab1" class="NewTab"> <a id="df1" href="#tab1">New</a></li>
    <li id="Tab2" class="Edit"><a id="df2" href="#tab2" >Edit</a></li>  
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
    
    <div class="ShowNewQueue">
    
    <table style="padding-top:0px; width:25%;" cellpadding="5" cellspacing="5">
       
     <tr class="levelhide">
    	 <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Workflow Name</font></td>
         <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" disabled id="name" name="name" type="text" value="" class="inputTXT ISDBfields NewMndtry ClearTxt">
         <img src="ThemeproLO/Common/Images/search1.png" id="Edit" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sAttachConfigwkpop',Param:'',brid:'',MnuId:''},{0:$('#name'),1:$('#packageId')});" /><span id="" style="COLOR: red" />*</span>
          </td> 
     </tr>
         
     <tr class="levelhide">
    		<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Package Id</font></td>            
            <td style="width:10%">
            <input onkeyup="this.setAttribute('value', this.value);" id="packageId" name="packageId" disabled type="text" value="" class="inputTXT NewMndtry ISDBfields ClearTxt" onchange="FetchAllData();"><span id="" style="COLOR: red" />*</span>
           <!--  <img src="ThemeproLO/Common/Images/search1.png" id="menulookup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sAttachConfigpackpop',Param:'',brid:'',MnuId:''},{0:$('#packageId')});" /> -->       
      		</td>
      </tr>
           
     <tr class="levelhide">
    	<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Form Id</font></td>
        <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" id="FormID" disabled name="FormID" type="text" value="" class="inputTXT NewMndtry ISDBfields ClearTxt" >
         <img src="ThemeproLO/Common/Images/search1.png" id="FormIDLKUP" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'Sam_sFetchAtchFormID',Param:$('#name').val(),brid:$('#packageId').val(),MnuId:''},{1:$('#FormID')});" /><span id="" style="COLOR: red" />*</span>
        </td> 
     </tr>
     
     <tr>
        <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Attachment Type</font></td>
        <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" id="list" name="list" type="text" value="" class="inputTXT  ClearTxt" ></td> 
    </tr>
        
     <tr>
     	<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Mandatory Condition</font></td> 
       	<td style="width:10%"><select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="Mndtry" id="Mndtry"   value="" class="inputTXT  textclear"  > 
			 					<option value="">--Select--</option>
                    			<option value="Yes">Yes</option>
                    			<option value="No">No</option></select></td> 
                    			
                    			
        <!--   <td style="width:10%"><img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_add.png" id="Add" class="" title= "Add" onclick="addlistval()" /></td>-->          
 
     </tr>
	<tr>
	</tr>
	<td style="width:10%"></td>
	  <td style="width:5%"><img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_add.png" id="Add" class="" title= "Add" onclick="addlistval()" hspace="5"/>
	 <img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/Edit.png" id="Edit" title= "Edit" class="" onclick="Editlistval();" hspace="40"/>
      <img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_delete.png" id="Delete" title= "Delete" class="" onclick="Deletelistval();" hspace="10"/></td>
    <tr>
    	<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Column Name</font></td>
        <td style="width:10%" >
        <select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="lstLeft" id="lstLeft" multiple style="width:223px;height:175px;" class="inputTXT NewMndtry" value="" > </select><span id="" style="COLOR: red" />*</span>
    
        <input type="hidden" id="FromLBVal" name="FromLBVal" class="ISDBfields"/></td> 
        
        <td><!-- <i class="ion-arrow-up-b" id="up"/></i>
             <i class="ion-arrow-down-b" id="down" /></i> -->
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Up.png" id="up" title= "Up" class="" /></ul></br>
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Down.png" id="down" title= "Down" class="" /></ul>
         </td>
         
        <!-- <td style="width:10%">
         <ul><img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/Edit.png" id="Edit" title= "Edit" class="" onclick="Editlistval();" /></ul></br></br></br>
         <ul><img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_delete.png" id="Delete" title= "Delete" class="" onclick="Deletelistval();" /></ul>
         </td>
          --> 
         
     </tr><tr>
    <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">For Additional Attachment</font>
     </td></tr>
                  <tr>
        <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Table Name</font></td>
        <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" id="TableName" disabled  name="TableName" type="text" value="" class="inputTXT  ClearTxt NewMndtry ISDBfields" onchange="fillHistTblClmNames($('#name').val(),$('#TableName').val(),$('#FormID').val(),'','','Sam_sFetchAttchAllTblClmNames','ClmNameLeft','ClmNameRight')" >
         <img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'Sam_sFetchAttchConfigTblName',Param:$('#name').val(),brid:$('#packageId').val(),MnuId:$('#FormID').val()},{0:$('#TableName')});" />
       </td> 
    </tr>             
   <tr>
   <tr>
           
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="2">Column Names</font>
            </td>
          
            <td style="width:10%" >
               <select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="ClmNameLeft" id="ClmNameLeft" multiple style="width:223px;height:220px;" class="inputTXT ClearTxt " value="" > 
               <!-- <option value="Accept">Accept</option>
               <option value="Review">Review</option>
               <option value="Forward">Forward</option>
               <option value="History">History</option> -->

</select>
                <input type="hidden" id="FromLBVal" name="FromLBVal" class="ISDBfields ClearTxt"/>
            </td> 
            <td style="width:10%"><!-- <td> <i class="ion-arrow-left-b" id="Qleft"  /></i>
                   <i class="ion-arrow-right-b" id="Qright" /></i></td> -->
                        <td><!-- <i class="ion-arrow-up-b" id="up"/></i>
             <i class="ion-arrow-down-b" id="down" /></i> -->
         <td> 
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Right.png" id="Qright" title= "Right" class="" /></ul>
            </br> <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Left.png" id="Qleft" title= "Left" class="" /></ul>
         </td>
          <td></td>          

       <!--  <td><input type="button" id="left" value="left"><input type="button" id="right" value="right"></td>
          -->         
      
            <td  style="width:10%">
               <select onblur="" onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="ClmNameRight" id="ClmNameRight" multiple style="width:223px;height:220px;" class="inputTXT ClearTxt TXTFIELDSCLEAR" value="" > 

</select>
                <input type="hidden" id="ColumnNames" name="ColumnNames" class="ISDBfields TXTFIELDSCLEAR"/>
            </td> 
                <!--  <td> <i class="ion-arrow-up-b" id="Qup"   /></i>
                   <i class="ion-arrow-down-b" id="Qdown" /></i>
                   

       </td> --> 
        <td><!-- <i class="ion-arrow-up-b" id="up"/></i>
             <i class="ion-arrow-down-b" id="down" /></i> -->
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Up.png" id="Attchup" title= "Up" class="" /></ul></br>
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Down.png" id="Attchdown" title= "Down" class="" /></ul>
         </td>
               <td></td>
               </tr>
                    <tr>
        <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Where Condition</font></td>
        <td style="width:10%"><select onkeyup="this.setAttribute('value', this.value);" id="WrConditionClm"   name="WrConditionClm" type="text" value="" class="inputTXT  ClearTxt NewMndtry ISDBfields" onchange="SelectedDropVal('WrConditionClm')" ></select>
        
       <input type="hidden" id="HWrConditionClm" name="HWrConditionClm"></td> 
    </tr>   
     <tr>
       <td style="width:40%"></td>
       <td  style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="save" type="button" value="Submit"  /></td>
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
         <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" id="Editname" name="Editname" disabled type="text" value="" class="inputTXT EditMndtry ISDBfields ClearTxt">
         <img src="ThemeproLO/Common/Images/search1.png" id="Edit" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sAttachConfigeditpop',Param:'',brid:'',MnuId:''},{0:$('#EditPKID'),1:$('#Editname'),2:$('#EditpackageId'),3:$('#EditFormID'),4:$('#EditTableName'),5:$('#HEditWrConditionClm')});" /><span id="" style="COLOR: red" />*</span>
          
          
          <input type="button" id="EditTblclmName"  style="display:none" onclick="fillHistTblClmNames($('#EditPKID').val(),'','','','','Sam_sFetchAttchPageDetl','EditlstLeft');">
          
          
          </td> 
     </tr>
         
     <tr class="levelhide">
    		<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Package Id</font></td>            
            <td style="width:10%">
            <input onkeyup="this.setAttribute('value', this.value);" id="EditpackageId" name="EditpackageId" disabled type="text" value="" class="inputTXT ISDBfields EditMndtry ClearTxt" onchange=""><span id="" style="COLOR: red" />*</span>
            <!--  <img src="ThemeproLO/Common/Images/search1.png" id="menulookup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sAttachConfigpackpop',Param:'',brid:'',MnuId:''},{0:$('#packageId')});" />-->
            </td>       
      </tr>
           
     <tr class="levelhide">
    	<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Form Id</font></td>
        <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" id="EditFormID" disabled name="EditFormID" type="text" value="" class="inputTXT ISDBfields EditMndtry ClearTxt" >
         <!--  <img src="ThemeproLO/Common/Images/search1.png" id="EditFormIDLKUP" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'Sam_sFetchAtchFormID',Param:$('#Editname').val(),brid:$('#EditpackageId').val(),MnuId:''},{1:$('#EditFormID')});" /><span id="" style="COLOR: red" />*</span>
       --> </td> 
     </tr>
     
     <tr>
        <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Attachment Type</font></td>
        <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" id="Editlist" name="Editlist" type="text" value="" class="inputTXT ClearTxt" ></td> 
    </tr>
        
     <tr>
     	<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Mandatory Condition</font></td> 
       	<td style="width:10%"><select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="EditMndtry" id="EditMndtry"   value="" class="inputTXT textclear"  > 
			 					<option value="">--Select--</option>
                    			<option value="Yes">Yes</option>
                    			<option value="No">No</option></select></td> 
                    			
                    			
        <!--  <td style="width:10%"><img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_add.png" id="Add" class="" title= "Add" onclick="Editaddlistval();" /></td> -->          
 
     </tr>
     <tr>
     <td style="width:10%"></td>
     <td style="width:5%"><img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_add.png" id="Add" class="" title= "Add" onclick="Editaddlistval();" hspace="10"/>
     <img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/Edit.png" id="Edit" title= "Edit" class="" onclick="Editpgeditlistval();"  hspace="35"/>
     <img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_delete.png" id="Delete" title= "Delete" class="" onclick="Editdeletelistval();"  hspace="25"/></td>
     </tr>

     <tr>
    	<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Column Name</font></td>
        <td style="width:10%" >
        <select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="EditlstLeft" id="EditlstLeft" multiple style="width:223px;height:175px;" class="inputTXT ClearTxt " value="" > </select>
    
        <input type="hidden" id="EditFromLBVal" name="EditFromLBVal" class="ISDBfields ClearTxt"/></td> 
        
        <td> <!--<i class="ion-arrow-up-b" id="Qup"/></i>
             <i class="ion-arrow-down-b" id="Qdown" /></i>-->
              <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Up.png" id="Qup" title= "Up" class="" /></ul></br>
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Down.png" id="Qdown" title= "Down" class="" /></ul>
        
         </td> 
         
       <!--  <td style="width:10%">
         <ul><img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/Edit.png" id="Edit" title= "Edit" class="" onclick="Editpgeditlistval();"/></ul></br></br></br>
         <ul><img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_delete.png" id="Delete" title= "Delete" class="" onclick="Editdeletelistval();" /></ul>
         </td>
          --> 
         
     </tr>
     <tr>
    <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">For Additional Attachment</font>
     </td></tr>
                  <tr>
        <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Table Name</font></td>
        <td style="width:10%"><input onkeyup="this.setAttribute('value', this.value);" id="EditTableName" disabled  name="EditTableName" type="text" value="" class="inputTXT  ClearTxt EditMndtry ISDBfields" onchange="fillHistTblClmNames($('#Editname').val(),$('#EditTableName').val(),$('#EditFormID').val(),'','','Sam_sFetchAttchAllTblClmNames','EditClmNameLeft','EditClmNameRight');FetchInsTblColName();" >
         <img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'Sam_sFetchAttchConfigTblName',Param:$('#Editname').val(),brid:$('#EditpackageId').val(),MnuId:$('#EditFormID').val()},{0:$('#EditTableName')});" />
       </td> 
    </tr>             
   <tr>
   <tr>
           
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="2">Column Names</font>
            </td>
          
            <td style="width:10%" >
               <select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="EditClmNameLeft" id="EditClmNameLeft" multiple style="width:223px;height:220px;" class="inputTXT ClearTxt " value="" > 
               <!-- <option value="Accept">Accept</option>
               <option value="Review">Review</option>
               <option value="Forward">Forward</option>
               <option value="History">History</option> -->

</select>
                <input type="hidden" id="EditFromLBVal" name="EditFromLBVal" class="ISDBfields ClearTxt"/>
            </td> 
            <td style="width:10%"><!-- <td> <i class="ion-arrow-left-b" id="Qleft"  /></i>
                   <i class="ion-arrow-right-b" id="Qright" /></i></td> -->
                        <td><!-- <i class="ion-arrow-up-b" id="up"/></i>
             <i class="ion-arrow-down-b" id="down" /></i> -->
         <td> 
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Right.png" id="EditQright" title= "Right" class="" /></ul>
            </br> <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Left.png" id="EditQleft" title= "Left" class="" /></ul>
         </td>
          <td></td>          

       <!--  <td><input type="button" id="left" value="left"><input type="button" id="right" value="right"></td>
          -->         
      
            <td  style="width:10%">
               <select onblur="" onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="EditClmNameRight" id="EditClmNameRight" multiple style="width:223px;height:220px;" class="inputTXT ClearTxt TXTFIELDSCLEAR" value="" > 

</select>
                <input type="hidden" id="EditColumnNames" name="EditColumnNames" class="ISDBfields TXTFIELDSCLEAR"/>
            </td> 
                <!--  <td> <i class="ion-arrow-up-b" id="Qup"   /></i>
                   <i class="ion-arrow-down-b" id="Qdown" /></i>
                   

       </td> --> 
        <td><!-- <i class="ion-arrow-up-b" id="up"/></i>
             <i class="ion-arrow-down-b" id="down" /></i> -->
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Up.png" id="EditQup" title= "Up" class="" /></ul></br>
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Down.png" id="EditQdown" title= "Down" class="" /></ul>
         </td>
               <td></td>
               </tr>
                    <tr>
        <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Where Condition</font></td>
        <td style="width:10%"><select onkeyup="this.setAttribute('value', this.value);" id="EditWrConditionClm"   name="EditWrConditionClm" type="text" value="" class="inputTXT  ClearTxt EditMndtry ISDBfields" onchange="SelectedDropVal('EditWrConditionClm')" ></select>
        
       <input type="hidden" id="HEditWrConditionClm" name="HEditWrConditionClm"></td> 
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

  </section>
</section>
    

</div>
 <div id="popup" class="SearchList">
           <table id="Table1" class="display" border="0"></table>
        </div>  
          
    </form>
</body></html>

