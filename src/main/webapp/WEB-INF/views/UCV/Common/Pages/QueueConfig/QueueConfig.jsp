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
  
     
  <!-- <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/loadjson_V_19.js${DMY13}"></script> -->
<script src="ThemeproLO/Common/scripts/QueueConfiguration/QueueConfig/Onload.js${DMY13}" type="text/javascript"></script>
<script src="ThemeproLO/Common/scripts/QueueConfiguration/QueueConfig/Validation.js${DMY13}" type="text/javascript"></script>

<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/QueueTabs.js${DMY13}"></script>
<head id="Head1" runat="server">
    
    <title>Queue Config</title>
</head>
<body bgcolor="white">

<form id="QueueConfig"  height:640px" name="Queue Config"  action=""  method="POST">
       <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                <span>Queue Config</span></div>
             <input id="LoggedInUser" class="DBfields" name="LoggedInUser" type="hidden" value=""/>
 <input id="ActivityID" class="DBfields"  name="ActivityID" type="hidden"  value=""/>
  
              <input id="BodyMainContentH" name="BodyMainContentH" type="hidden" value=""/>
              <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>
              <input type="hidden" id="QueueID" name="QueueID" class="ISDBfields">
              <input type="hidden" id="WFID" name="WFID" class="ISDBfields">
              <input type="hidden" id="SpName" name="SpName" class="ISDBfields">
              
               <table width="100%" cellpadding="10" cellspacing="0" border="0">
<tbody><tr style="width: 100%;display:none" bgcolor="#A3C3F1">
      
               
   <!--  <tr>
<td colspan="3" valign="middle" height="30"  align="center"class="rearrhide">
<table style="width: 100%;" >
    <tr>
    <td style="width:20%" ></td>
        <td style="width:20%" >

          <input onkeyup="this.setAttribute('value', this.value);" id="Main" width="20px" name="EntryTYPE" class="ISDisable" type="radio" /><font face="Verdana" size="3">Main Level</font></td>
        <td style="width:20%" >
 <input onkeyup="this.setAttribute('value', this.value);" id="Sub" width="20px" name="EntryTYPE" class="ISDisable" type="radio" /><font face="Verdana" size="3">Sub Level</font>
 <input onkeyup="this.setAttribute('value', this.value);" id="EntryTYPE" name="EntryTYPE" class="inputTXT" value="Main" type="hidden" /></td>
   <td style="width:20%" ></td>
     <td style="width:20%" ></td>

          </tr>
    </table>
   </td>
</tr> -->
  </tbody></table>
        
 <div> 
     <div id="cssmenu" class="round">
     <section >
    <ul class="tabs">
    <li id="Tab1" class="NewTab"> <a id="df1" href="#tab1">New</a></li>
    <li id="Tab2" class="Edit"><a id="df2" href="#tab2" >Edit</a></li>
   <li id="Tab3" class="rearrange"><a id="df3" href="#tab3">Re-Arrange</a></li> 
   
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

        
      <table style="padding-top:0px; width:60%;" cellpadding="8" cellspacing="10">

       
<tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Workflow Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="WFName" name="WFName" disabled type="text" value="" class="inputTXT ISDBfields ISDBMndtry ">
          <img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sWFNAME',Param:$('#LoggedInUser').val(),brid:'',MnuId:''},{1:$('#WFID'),0:$('#WFName')});clrtxtWF();" />
          <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>


    <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Queue Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="QueueName" name="QueueName" disabled type="text" value="" class="inputTXT ISDBfields ISDBMndtry ">
           <img src="ThemeproLO/Common/Images/search1.png" id="Quenmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sslctQueName',Param:$('#WFName').val(),brid:'',MnuId:''},{0:$('#QueueName'),1:$('#SpName')});" />
         <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>


         
    



    <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Color</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="Color" name="Color"  type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>

          <tr>
           <td style="width:5%">
           </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">Queue Icon</font>
            </td>
          
            <td style="width:10%" >
               <select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="QIconLeft" id="QIconLeft" multiple style="width:223px;height:223px;" class="inputTXT ClearTxt " value="" > 
               <option value="Accept">Accept</option>
               <option value="Review">Review</option>
               <option value="Forward">Forward</option>
               <option value="History">History</option>

</select>
                <input type="hidden" id="FromLBVal" name="FromLBVal" class="ISDBfields ClearTxt"/>
            </td> 
            <td style="width:10%"><td>
			   <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Right.png" id="Qright" title= "Right" class="" /></ul>
            </br> <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Left.png" id="Qleft" title= "Left" class="" /></ul>
          <td></td>          
</td>
       </td> 
       <!--  <td><input type="button" id="left" value="left"><input type="button" id="right" value="right"></td>
          -->         
      
            <td  style="width:10%">
               <select onblur="" onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="QIconRight" id="QIconRight" multiple style="width:223px;height:223px;" class="inputTXT ClearTxt TXTFIELDSCLEAR" value="" > 

</select>
                <input type="hidden" id="QIcons" name="QIcons" class="ISDBfields TXTFIELDSCLEAR"/>
            </td> 
                  <td> 
				
                   		<ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Up.png" id="Qup" title= "Up" class="" /></ul></br>
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Down.png" id="Qdown" title= "Down" class="" /></ul>

       </td>
     <!--  <td><input type="button" id="up" value="up"><input type="button" id="down" value="down"></td>-->
               <td></td>
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
    <div class="EditDetails">
 
    
     <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
               
                </div>
                <div class="TXTFIELDSCLEAR" align="center" >
     <table style="padding-top:0px; width:60%;" cellpadding="10" cellspacing="10">
     <input type="hidden" id="EditQueueID" name="EditQueueID" class="ISDBfields">
        <input type="hidden" id="EditWFID" name="EditWFID" class="ISDBfields">
          <input type="hidden" id="EditSpName" name="EditSpName" class="ISDBfields">
     <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Workflow Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="EditWFName" disabled name="EditWFName" type="text" value="" onchange=""  class="inputTXT ISDBfields ISDBMndtryedit ">
         <img src="ThemeproLO/Common/Images/search1.png" id="Edit" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sWfedit',Param:'',brid:'',MnuId:''},{1:$('#EditWFID'),2:$('#EditQueueID'),0:$('#EditWFName'),3:$('#EditQueueName'),4:$('#EditSpName'),5:$('#EditColor'),6:$('#FromLBQVal')});" />
         
          <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>
       <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Queue Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="EditQueueName" disabled name="EditQueueName" type="text" value="" class="inputTXT ISDBfields ISDBMndtryedit ">
            <img src="ThemeproLO/Common/Images/search1.png" id="Quenmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sslctQueName',Param:$('#EditWFName').val(),brid:'',MnuId:''},{0:$('#EditQueueName'),1:$('#EditSpName')});" />
           <span id="span_imgdateapp" style="COLOR: red">*</span>
           </td> 
       
        </tr>


         
   



    <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Color</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="EditColor" name="EditColor" type="text" value="" class="inputTXT ISDBfields ISDBMndtryedit "><span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>
 <tr>
           <td style="width:5%">
           </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">Queue Icon</font>
            </td>
          
            <td style="width:10%" >
               <select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="EditQIconLeft" id="EditQIconLeft" multiple style="width:223px;height:223px;" class="inputTXT ClearTxt " value="" > 
              <!-- <option value="Accept">Accept</option>
               <option value="Review">Review</option>
               <option value="Forward">Forward</option>
               <option value="History">History</option>  --> 

</select>
                <input type="hidden" id="FromLBQVal" name="FromLBQVal" onchange=""class="ISDBfields ClearTxt"/>
            </td> 
            <td style="width:10%"><td>
		   <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Right.png" id="EditQright" title= "Right" class="" /></ul>
            </br> <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Left.png" id="EditQleft" title= "Left" class="" /></ul>
          <td></td>          
</td>
       </td> 
       <!--  <td><input type="button" id="left" value="left"><input type="button" id="right" value="right"></td>
          -->         
      
            <td  style="width:10%">
               <select onblur="" onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" onfocus="" name="EditQIconRight" id="EditQIconRight" multiple style="width:223px;height:223px;" class="inputTXT ClearTxt TXTFIELDSCLEAR" value="" > 

</select>
                <input type="hidden" id="EditQIcons" name="EditQIcons" class="ISDBfields TXTFIELDSCLEAR"/>
            </td> 
                  <td>
		  	<ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Up.png" id="EditQup" title= "Up" class="" /></ul></br>
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Down.png" id="EditQdown" title= "Down" class="" /></ul>
                   

       </td>
     <!--  <td><input type="button" id="up" value="up"><input type="button" id="down" value="down"></td>-->
               <td></td>
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
    <article name="Tab3" id="tab3">
        <div id="Rearrange" align="center">
      <table style="padding-top:50px; width:40%;" cellpadding="15" cellspacing="10">
         <tr>
         <td style="width:5%">
        </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">WorkFlow Name</font>
            </td>
          
            <td style="width:10%" >
            <select onkeyup="this.setAttribute('value', this.value);" id="ReWorkFlowName" name="ReWorkFlowName" value="" class="inputTXT textclear ISDBfields" onchange="FetchQueueName();this.setAttribute('value', this.value);" />
                
               </select>
            </td> 
               </tr>
        
          
           <tr>
           <td style="width:5%">
        </td>
               <td style="width:10%" class="ColumnHeading">
            <font face="Verdana" size="3">Queue Name</font>
            </td>
          
            <td style="width:10%" >
               <select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value); name="ReQueueName" id="ReQueueName" multiple style="width:223px;height:223px;" value="" class="inputTXT textclear"  > 

</select>
                <input type="hidden" id="FromLBValue" name="FromLBValue" class="ISDBfields"/>
            </td> 
               <td> 
				   	<ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Up.png" id="up" title= "Up" class="" /></ul></br>
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Down.png" id="down" title= "Down" class="" /></ul>
                   

       </td>
               <td></td>
               </tr>
          <tr>
          <td></td>
        <td style="width:40%"></td>
        <td  style="width:10%">
       <input type="hidden" id="RemenuId" name="RemenuId" class="ISDBfields RemenuID"/> <input type="hidden" id="ParentRemenuId" name="ParentRemenuId" class="ISDBfields RemenuID"/>
            <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="RearrSubmit" type="button" value="Submit"  />
          
             </td>
    </tr>
      </table>
            </div>
    </article>
    
  </section>
</section>
    

</div>
    </form>
</body></html>