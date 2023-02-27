
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


<script src="ThemeproLO/Common/scripts/QueueConfiguration/QueueDataConfig/Onload.js${DMY13}" type="text/javascript"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/QueueConfiguration/QueueDataConfig/Validation.js${DMY13}"></script>
<head id="Head1" runat="server">
    
    <title>Data Config</title>
</head>
<body bgcolor="white">

<form id="QueueDataConfig"  height:640px" name="Queue Data Config"  action=""  method="POST">
       <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                <span>Data Config</span></div>
             <input id="LoggedInUser" class="DBfields" name="LoggedInUser" type="hidden" value=""/>
 <input id="ActivityID" class="DBfields"  name="ActivityID" type="hidden"  value=""/>
  
              <input id="BodyMainContentH" name="BodyMainContentH" type="hidden" value=""/>
              <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>
              

              <input id="WFID" name="WFID" type="hidden" value=""  class="ISDBfields ClearTxt"/>
              <input id="QueueID" name="QueueID" type="hidden" value="" class="ISDBfields ClearTxt"/>
             <input id="PKID" name="PKID" type="hidden" value="" class="ISDBfields ClearTxt"/>
            
        
 <div> 
     
     
 
   <section class="block">
   
    <div id="popup" class="SearchList">
            <table id="Table1" class="display" border="0"></table>
        </div>
   
        <div id="Rearrange" align="center">
      <table style="padding-top:15px; width:25%;" cellpadding="5" cellspacing="5">
       
         <tr class="levelhide">
   
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Workflow Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="WFName" name="WFName" disabled type="text" value="" class="inputTXT ISDBfields ISDBMndtry ClearTxt">
         <img src="ThemeproLO/Common/Images/search1.png" id="Edit" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sQWfname',Param:'',brid:'',MnuId:''},{1:$('#WFID'),0:$('#WFName')});ClearFields();" />
         
          <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>
         <tr class="levelhide">
 
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Queue Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="QueueName" name="QueueName" disabled type="text" value="" class="inputTXT ISDBfields ISDBMndtry ClearTxt" onchange="FetchAllData();FetchInsTblColName()">
           <img src="ThemeproLO/Common/Images/search1.png" id="menulookup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sQName',Param:$('#WFID').val(),brid:'',MnuId:''},{1:$('#QueueID'),0:$('#QueueName')});clearQueue();" /><span id="span_imgdateapp" style="COLOR: red">*</span>
           </td> 
       
        </tr>
           <tr class="levelhide">
   
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Table Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="TableName"  disabled name="TableName" type="text" value="" class="inputTXT ISDBfields ISDBMndtry ClearTxt" onchange="FetchTblColName()">
         <img src="ThemeproLO/Common/Images/search1.png" id="Edit" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sQtblName',Param:$('#WFName').val(),brid:'',MnuId:''},{0:$('#TableName')});clrtxtWF();" />
         
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
                <input type="hidden" id="FromLBVal" name="FromLBVal" class="ISDBfields ClearTxt"/>
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
                <input type="hidden" id="FromLBVal" name="FromLBVal" class="ISDBfields"/>
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
           
            <select onchange="this.setAttribute('value',this.value);SelectedDropVal('WrConditionClm')" onkeyup="this.setAttribute('value',this.value);" name="WrConditionClm" id="WrConditionClm"   value="" class="ISDBfields inputTXT textclear"  > 

</select>
  <input type="hidden" id="HWrConditionClm" name="HWrConditionClm" class=""/>
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
            </div>
  
    
  </section>


</div>
    </form>
</body></html>