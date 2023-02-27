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
  
  
  
<script src="ThemeproLO/Common/scripts/Config/HistPageConfig/Onload.js${DMY13}" type="text/javascript"></script>
<script src="ThemeproLO/Common/scripts/Config/HistPageConfig/Validation.js${DMY13}" type="text/javascript"></script>

<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/QueueTabs.js${DMY13}"></script>
<head id="Head1" runat="server">
    
    <title>History Config</title>
</head>
<body bgcolor="white">

<form id="ApplicationForm"  height:640px" name="ApplicationForm"  action=""  method="POST">
       <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                <span>History Config</span></div>
             <input id="LoggedInUser" class="DBfields" name="LoggedInUser" type="hidden" value=""/>
 <input id="ActivityID" class="DBfields"  name="ActivityID" type="hidden"  value=""/>
  
              <input id="BodyMainContentH" name="BodyMainContentH" type="hidden" value=""/>
              <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>
              <input type="hidden" id="QueueID" name="QueueID" class="ISDBfields">
              <input type="hidden" id="WFID" name="WFID" class="ISDBfields">
              <input type="hidden" id="SpName" name="SpName" class="ISDBfields">
              
               <table width="100%" cellpadding="10" cellspacing="0" border="0">
<tbody><tr style="width: 100%;display:none" bgcolor="#A3C3F1">
      
               

  </tbody></table>
        
 <div> 
     <div id="cssmenu" class="round">
     <section >
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

        
      <table style="padding-top:0px; width:60%;" cellpadding="5" cellspacing="10">

       
<tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Workflow Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="WFName" name="WFName" disabled type="text" value="" class="inputTXT ISDBfields ISDBMndtry ">
          <img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'Sam_sFetchHistConfigWfName',Param:'',brid:'',MnuId:''},{0:$('#WFName'),1:$('#PackageID')});;" />
          <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>


    <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Package ID</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="PackageID" name="PackageID" disabled type="text" value="" class="inputTXT ISDBfields ISDBMndtry ">
          <!--  <img src="ThemeproLO/Common/Images/search1.png" id="Quenmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sslctQueName',Param:$('#WFName').val(),brid:'',MnuId:''},{0:$('#QueueName'),1:$('#SpName')});" /> -->
         <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>


         
    



    <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Review URL</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="ReviewURL" name="ReviewURL"  type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>
         <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Table Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="HistTableName" name="HistTableName" disabled type="text" value="" class="inputTXT ISDBfields ISDBMndtry ">
           <img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'Sam_sFetchHistConfigTblName',Param:$('#WFName').val(),brid:'',MnuId:''},{1:$('#HistTableName')});" />
        	<span id="span_imgdateapp" style="COLOR: red">*</span><input type="button" id="HistTblclmName"  style="display:none" onclick="fillHistTblClmNames($('#WFName').val(),$('#HistTableName').val(),'','','','Sam_sFetchHistTblClmNames','ClmNameLeft')">
          </td> 
       
        </tr>

          <tr>
           <td style="width:5%">
           </td>
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
            <!-- <td style="width:10%"> <i class="ion-arrow-left-b" id="Qleft"  /></i>
                   <i class="ion-arrow-right-b" id="Qright" /></i>
            </td>  -->
 <td> 
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Left.png" id="Qleft" title= "Left" class="" /></ul>
            </br> <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Right.png" id="Qright" title= "Right" class="" /></ul>
         </td>
       <!--  <td><input type="button" id="left" value="left"><input type="button" id="right" value="right"></td>
          -->         
      
            <td  style="width:10%">
               <select onblur="" onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="ClmNameRight" id="ClmNameRight" multiple style="width:223px;height:220px;" class="inputTXT ClearTxt TXTFIELDSCLEAR" value="" > 

</select>
                <input type="hidden" id="ColumnNames" name="ColumnNames" class="ISDBfields TXTFIELDSCLEAR"/>
            </td> 
                <!--  <td> <i class="ion-arrow-up-b" id="Qup"   /></i>
                   <i class="ion-arrow-down-b" id="Qdown" /></i>
                   

       </td>-->
       <td>
        <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Up.png" id="Qup" title= "Up" class="" /></ul></br>
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Down.png" id="Qdown" title= "Down" class="" /></ul>
         </td>
               <td></td>
               </tr>
			   <tr>
							   <td style="width:5%">
           </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">For report history purpose</font>     </td> 
                 
				 </tr>
			                  <tr>
							   <td style="width:5%">
           </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">Where Condition I</font>     </td> 
                 <td style="width:10%">
           
            <select onchange="this.setAttribute('value',this.value);SelectedDropVal('WrConditionClmI')" onkeyup="this.setAttribute('value',this.value);" name="WrConditionClmI" id="WrConditionClmI"   value="" class="ISDBfields inputTXT textclear"  > 

</select>
<input type="hidden" id="HWrConditionClmI" name="HWrConditionClmI" class="ISDBfields ClearTxt"/>
           </td> 
               </tr>
			    <tr>
				 <td style="width:5%">
           </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">Where Condition II</font>     </td> 
                 <td style="width:10%">
           
            <select onchange="this.setAttribute('value',this.value);SelectedDropVal('WrConditionClmII')" onkeyup="this.setAttribute('value',this.value);" name="WrConditionClmII" id="WrConditionClmII"   value="" class="ISDBfields inputTXT textclear"  > 

</select>
<input type="hidden" id="HWrConditionClmII" name="HWrConditionClmII" class="ISDBfields ClearTxt"/>
           </td> 
               </tr>
			   <tr>
				 <td style="width:5%">
           </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">Lookup I</font>     </td> 
                 <td style="width:10%">
           
            <select onchange="this.setAttribute('value',this.value);SelectedDropVal('LookupI')" onkeyup="this.setAttribute('value',this.value);" name="LookupI" id="LookupI"   value="" class="ISDBfields inputTXT textclear"  > </select>
		<!--	<img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'Sam_sFetchHistConfigRightClmdata',Param:$('#WFName').val(),brid:$('#HistTableName').val(),MnuId:'<ColumnNames>'+$('#ColumnNames').val()+'</ColumnNames>'},{0:$('#LookupI')});" />-->
        		<input type="hidden" id="HLookupI" name="HLookupI" class="ISDBfields ClearTxt"/>

           </td> 
               </tr>
			    <tr>
				 <td style="width:5%">
           </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">Lookup II</font>     </td> 
                 <td style="width:10%">
           
            <select onchange="this.setAttribute('value',this.value);SelectedDropVal('LookupII')" onkeyup="this.setAttribute('value',this.value);" name="LookupII" id="LookupII"   value="" class="ISDBfields inputTXT textclear"  > </select>
			<!--<img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'Sam_sFetchHistConfigRightClmdata',Param:$('#WFName').val(),brid:$('#HistTableName').val(),MnuId:'<ColumnNames>'+$('#ColumnNames').val()+'</ColumnNames>'},{0:$('#LookupII')});" />-->
        		<input type="hidden" id="HLookupII" name="HLookupII" class="ISDBfields ClearTxt"/>

           </td> 
               </tr>
               <tr>
				 <td style="width:5%">
           </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">Tab Value</font>     </td> 
                 <td style="width:10%">
           
            <select onchange="this.setAttribute('value',this.value);SelectedDropVal('Tabshwclm')" onkeyup="this.setAttribute('value',this.value);" name="Tabshwclm" id="Tabshwclm"   value="" class="ISDBfields inputTXT textclear"  > </select>
			<!--<img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'Sam_sFetchHistConfigRightClmdata',Param:$('#WFName').val(),brid:$('#HistTableName').val(),MnuId:'<ColumnNames>'+$('#ColumnNames').val()+'</ColumnNames>'},{0:$('#LookupII')});" />-->
        		<input type="hidden" id="HTabshwclm" name="HTabshwclm" class="ISDBfields ClearTxt"/>

           </td> 
               </tr>

 <tr>
          
            <td style="width:25%">
            
            </td>
           <td style="width:15%">
        </td>
            <td style="width:25%" >
          <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="save" type="button" value="SAVE"  />
            </td> 
                 
            <td style="width:50%" >
            </td>      
        
  </tr>
</table>
    
      </div>
      </div>
     </div>
    </article>
    <article name="Tab2" id="tab2">
	<br />
    <div class="EditDetails">
 
    
     <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
               
                </div>
                <div class="TXTFIELDSCLEAR" align="center" >
     <table style="padding-top:0px; width:60%;" cellpadding="5" cellspacing="10">
     <input type="hidden" id="EditQueueID" name="EditQueueID" class="ISDBfields">
        <input type="hidden" id="EditWFID" name="EditWFID" class="ISDBfields">
          <input type="hidden" id="EditSpName" name="EditSpName" class="ISDBfields">
     <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Workflow Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="EditWFName" disabled name="EditWFName" type="text" value="" onchange=""  class="inputTXT ISDBfields ISDBMndtryedit "> 
         <img src="ThemeproLO/Common/Images/search1.png" id="Edit" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'Sam_sFetchINSHistConfig',Param:'',brid:'',MnuId:''},{0:$('#EditWFName'),1:$('#EditPackageID'),2:$('#EditReviewURL'),3:$('#EditHistTableName')
		 ,4:$('#HEditWrConditionClmI'),5:$('#HEditWrConditionClmII'),6:$('#HEditLookupI'),7:$('#HEditLookupII'),8:$('#HEditTabshwclm')});" />
         
          <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>
       <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Package ID</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="EditPackageID" disabled name="EditPackageID" type="text" value="" class="inputTXT ISDBfields ISDBMndtryedit ">
            <span id="span_imgdateapp" style="COLOR: red">*</span>
           </td> 
       
        </tr>


         
   



    <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Review URL</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="EditReviewURL" name="EditReviewURL" type="text" value="" class="inputTXT ISDBfields ISDBMndtryedit "><span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>
        <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Table Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="EditHistTableName" name="EditHistTableName" disabled type="text" value="" class="inputTXT ISDBfields ISDBMndtryedit ">
           <span id="span_imgdateapp" style="COLOR: red">*</span><input type="button" id="EditHistTblclmName"  style="display:none" onclick="fillHistTblClmNames($('#EditWFName').val(),$('#EditHistTableName').val(),'','','','Sam_sFetchINSHistClmName','EditClmNameRight');fillHistTblClmNames($('#EditWFName').val(),$('#EditHistTableName').val(),'','','','Sam_sFetchOthrHistClmName','EditClmNameLeft')">
          </td> 
       
        </tr>
 <tr>
           <td style="width:5%">
           </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="2">Column Names</font>
            </td>
          
            <td style="width:10%" >
               <select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="EditClmNameLeft" id="EditClmNameLeft" multiple style="width:223px;height:220px;" class="inputTXT ClearTxt " value="" > 
             

</select>
                <input type="hidden" id="FromLBQVal" name="FromLBQVal" onchange=""class="ISDBfields ClearTxt"/>
            </td> 
           <!--  <td style="width:10%"> <i class="ion-arrow-left-b" id="EditQleft"  /></i>
                   <i class="ion-arrow-right-b" id="EditQright" /></i>
         
       </td>  -->
        <td> 
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Left.png" id="EditQleft" title= "Left" class="" /></ul>
            </br> <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Right.png" id="EditQright" title= "Right" class="" /></ul>
         </td>
       <!--  <td><input type="button" id="left" value="left"><input type="button" id="right" value="right"></td>
          -->         
      
            <td  style="width:10%">
               <select onblur=";" onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" onfocus="" name="EditClmNameRight" id="EditClmNameRight" multiple style="width:223px;height:220px;" class="inputTXT ClearTxt TXTFIELDSCLEAR" value="" > 

</select>
                <input type="hidden" id="EditColumnNames" name="EditColumnNames" class="ISDBfields ClearTxt"/>
            </td> 
                 <!--   <td> <i class="ion-arrow-up-b" id="EditQup"   /></i>
                   <i class="ion-arrow-down-b" id="EditQdown" /></i>
                   

       			</td>-->
       <td>
        <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Up.png" id="EditQup" title= "Up" class="" /></ul></br>
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Down.png" id="EditQdown" title= "Down" class="" /></ul>
         </td>
                <td></td>
               </tr>
			      <tr class="levelhide">
							   <td style="width:5%">
           </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">For report history purpose</font>     </td> 
                 
				 </tr>
			    <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Where Condition I</font>
        </td>
        
      
         <td style="width:10%">
           <select onkeyup="this.setAttribute('value', this.value);" onchange="SelectedDropVal('EditWrConditionClmI')" id="EditWrConditionClmI" name="EditWrConditionClmI"  type="text" value="" class="inputTXT ISDBfields  "></select>
           <input type="hidden" id="HEditWrConditionClmI" name="HEditWrConditionClmI" class="ISDBfields ClearTxt"/>
		   </td> 
       
        </tr>
			    <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="2">Where Condition II</font>
        </td>
        
      
         <td style="width:10%">
           <select onkeyup="this.setAttribute('value', this.value);" onchange="SelectedDropVal('EditWrConditionClmII')" id="EditWrConditionClmII" name="EditWrConditionClmII"  type="text" value="" class="inputTXT ISDBfields  "></select>
             <input type="hidden" id="HEditWrConditionClmII" name="HEditWrConditionClmII" class="ISDBfields ClearTxt"/>
			 </td> 
       
        </tr>
          <tr>
				 <td style="width:5%">
           </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">Lookup I</font>     </td> 
                 <td style="width:10%">
           
            <select onchange="this.setAttribute('value',this.value);SelectedDropVal('EditLookupI')" onkeyup="this.setAttribute('value',this.value);" name="EditLookupI" id="EditLookupI"   value="" class="ISDBfields inputTXT textclear"  > </select>
<!--<img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'Sam_sFetchHistConfigRightClmdata',Param:$('#EditWFName').val(),brid:$('#EditHistTableName').val(),MnuId:'<ColumnNames>'+$('#EditColumnNames').val()+'</ColumnNames>'},{0:$('#EditLookupII')});" />-->
        	<input type="hidden" id="HEditLookupI" name="HEditLookupI" class="ISDBfields ClearTxt"/>
			 

           </td> 
               </tr>
			    <tr>
				 <td style="width:5%">
           </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">Lookup II</font>     </td> 
                 <td style="width:10%">
           
            <select onchange="this.setAttribute('value',this.value);SelectedDropVal('EditLookupII')" onkeyup="this.setAttribute('value',this.value);" name="EditLookupII" id="EditLookupII"   value="" class="ISDBfields inputTXT textclear"  > </select>
<!--<img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'Sam_sFetchHistConfigRightClmdata',Param:$('#EditWFName').val(),brid:$('#EditHistTableName').val(),MnuId:'<ColumnNames>'+$('#EditColumnNames').val()+'</ColumnNames>'},{0:$('#EditLookupII')});" />-->
        	<input type="hidden" id="HEditLookupII" name="HEditLookupII" class="ISDBfields ClearTxt"/>

           </td> 
               </tr>
                <tr>
				 <td style="width:5%">
           </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">Tab Value</font>     </td> 
                 <td style="width:10%">
           
            <select onchange="this.setAttribute('value',this.value);SelectedDropVal('EditTabshwclm')" onkeyup="this.setAttribute('value',this.value);" name="EditTabshwclm" id="EditTabshwclm"   value="" class="ISDBfields inputTXT textclear"  > </select>
<!--<img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'Sam_sFetchHistConfigRightClmdata',Param:$('#EditWFName').val(),brid:$('#EditHistTableName').val(),MnuId:'<ColumnNames>'+$('#EditColumnNames').val()+'</ColumnNames>'},{0:$('#EditLookupII')});" />-->
        	<input type="hidden" id="HEditTabshwclm" name="HEditTabshwclm" class="ISDBfields ClearTxt"/>

           </td> 
               </tr>
   <tr>
          
            <td style="width:25%">
            
            </td>
           <td style="width:15%">
        </td>
            <td style="width:25%" >
           <input onkeyup="this.setAttribute('value', this.value);" id="UpdateBtn" class="buttonPRS"  type="button" value="Update" />
           <input onkeyup="this.setAttribute('value', this.value);" id="DeleteBtn" class="buttonPRS"  type="button" value="Delete" />
       
            </td> 
                 
            <td style="width:50%" >
            </td>      
        
  </tr>
    </table>
 <div id="popup" class="SearchList">
            <table id="Table1" class="display" border="0"></table>
        </div>

 </div>
  
  </div>
    </article>
   
    
  </section>
</section>
    

</div>
    </form>
</body></html>