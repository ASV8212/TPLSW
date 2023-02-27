
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

<script src="ThemeproLO/Common/scripts/MenuConfiguration/NewMenu/Onload.js${DMY13}" type="text/javascript"></script>
<script src="ThemeproLO/Common/scripts/MenuConfiguration/NewMenu/Validation.js${DMY13}" type="text/javascript"></script>

<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/QueueTabs.js${DMY13}"></script>
<head id="Head1" runat="server">
    
    <title>Menu Configuration</title>
</head>
<body bgcolor="white">

<form id="NewMenu"  height:640px" name="New Menu"  action=""  method="POST">
       <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                <span>Menu Configuration</span></div>
             <input id="LoggedInUser" class="DBfields" name="LoggedInUser" type="hidden" value=""/>
			 <input id="ActivityID" class="DBfields"  name="ActivityID" type="hidden"  value=""/>
			  
              <input id="BodyMainContentH" name="BodyMainContentH" type="hidden" value=""/>
              <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>
              <input id="MenuNameLevel0" name="MenuNameLevel0" type="hidden" value=""  class="ISDBfields"/>
              <input id="editMenuNameLevel0" name="editMenuNameLevel0" type="hidden" value=""  class="ISDBfields"/>
 <input id="QParamID" name="QParamID" type="hidden" value=""  class="ISDBfields"/>
 <input id="editQParamID" name="editQParamID" type="hidden" value=""  class="ISDBfields"/>
              <input id="MenuID" name="MenuID" type="hidden" value=""  class="ISDBfields"/>
              <input id="editMenuID" name="editMenuID" type="hidden" value="" class="ISDBfields"/>
            <table width="100%" cellpadding="10" cellspacing="0" border="0">
            
            
<tbody><tr style="width: 100%;display:none" bgcolor="#A3C3F1">
      
               
    <tr>
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
</tr>
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
      <div class="ShowNewMenu">

        
      <table style="padding-top:50px; width:80%;" cellspacing="3" cellpadding="3">

       <tr class="level">
     <td style="width:5%">
        </td>
     
    <td  style="width:10%">
          <font face="Verdana" size="2">Menu Level</font>
        </td>
        
         <td style="width:10%">
          
           <select id="Menulevel" name="Menulevel" class="ISDBfields inputTXT ISDisable ISDBMndtry" value="" onchange="levelmenu();this.setAttribute('value', this.value);" onclick="clear();"/>
            
           <option value="">--Select--</option>
            <option value="Level 1">Level 1</option>
            <option value="Level 2">Level 2</option>
            </select><span id="span_imgdateapp" style="COLOR: red">*</span>

           </td> 
       
        </tr>



    <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" >
          <font face="Verdana" size="2">Menu Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="MenuName" name="MenuName" type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>


         <tr class="level">
         <td style="width:5%">
        </td>
         
    <td style="width:10%">
          <font face="Verdana" size="2"  align="center">Menu Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="MainMENU" name="MainMENU" type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span>
          <!--  <img src="ThemeproLO/Common/Images/search1.png" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sBRMASTER',Param:'',brid:'',MnuId:''},{0:$('#LAPP_BrID'),1:$('#LAPP_BrName')});"></td> -->
           
           <img src="ThemeproLO/Common/Images/search1.png" id="lookup1" class="find1"  onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sNewMenuLevelEntry1',Param:'',brid:'',MnuId:''},{0:$('#MenuID'),1:$('#MainMENU')});" />
        <img src="ThemeproLO/Common/Images/search1.png" id="lookup2" class="find2"  onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sNewMenuLevelEntry2',Param:'',brid:'',MnuId:''},{0:$('#MenuID'),1:$('#MenuNameLevel0'),2:$('#MainMENU')});" />
        </td>
       
        </tr>

         <tr class="level">
        <td style="width:5%">
        </td>
        
    <td style="width:10%">
          <font face="Verdana" size="2">Sub-Menu Name</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="SubMenuName" name="MenuName" type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span>
          </td>
        
        </tr>


         <tr>
         <td style="width:5%">
        </td>
         
    <td style="width:10%">
          <font face="Verdana" size="2">Menu URL</font>
      
        </td>
       
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="MenuURL" name="MenuURL" value="" type="text" class="inputTXT ISDBfields ISDisable"/>
           </td>
        
        </tr>

         <tr style="width: 25%;">
      <td style="width:5%">
        </td>
      
    <td style="width:10%">
          <font face="Verdana" size="2">Menu Function</font>
        </td>
        
   
         <td style="width:10%">
          
           <select id="MenuFunction" name="MenuFunction" class="ISDBfields inputTXT ISDisable" value="" onchange="this.setAttribute('value', this.value);clear();Queuehideshow();"/>
            <option value="">--Select--</option>
            <option value="Custom Page">Custom Page</option>
            <option value="Queue Page">Queue Page</option>
            <option value="WF Page">WF Page</option>
            </select>
        </td>
       
        </tr>

         <tr >
         <td style="width:5%">
        </td>
         
    <td style="width:10%">
          <font face="Verdana" size="2">Menu Icon</font>
      
        </td>
       
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="MenuIcon" name="MenuIcon" value="" type="text" class="inputTXT ISDBfields ISDisable"/>
            </td>
        
        </tr>
          <tr >
         <td style="width:5%">
        </td>
         
    <td style="width:10%">
          <font face="Verdana" size="2">Menu Color</font>
      
        </td>
       
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="MenuDashboardColor" name="MenuDashboardColor" value="" type="text" class="inputTXT ISDBfields ISDisable"/>
            </td>
        
        </tr>
         <tr  class="QueueShow">
         <td style="width:5%">
        </td>
         
    <td style="width:10%">
          <font  face="Verdana" size="2">Workflow Name</font>
      
        </td>
       
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="QueueParam" disabled name="QueueParam" value="" type="text" class="inputTXT ISDBfields ISDisable ISDBMndtry"/>
              <img src="ThemeproLO/Common/Images/search1.png" id="Qparamlookup" class="find1"  onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sMenuWFName',Param:'',brid:'',MnuId:''},{0:$('#QueueParam'),1:$('#QParamID')});" />
              <span id="span_imgdateapp" style="COLOR: red">*</span>
           </td>
        
        </tr>
         <tr class="QueueShow">
         <td style="width:5%">
        </td>
         
    <td style="width:10%">
          <font face="Verdana" size="2">Queue Active Row</font>
      
        </td>
       
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="QueueActiveRow"  name="QueueActiveRow" value="" type="text" class="inputTXT ISDBfields ISDisable"/>
            
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
    <div class="EditDetails">
 
    
     <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
               
                </div>
                <div class="TXTFIELDSCLEAR" align="center" >
     <table style="padding-top:50px; width:80%;" cellspacing="3" cellpadding="3">
       <tr class="sublevel">
        <td style="width:5%">
        </td>
        <td style="width:10%">
            <font face="Verdana" size="2">Menu Level</font>
        </td>
       
         <td style="width:10%">
           <select onkeyup="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value); menuselect(); clear(); " id="editMenuLevel" name="editMenuLevel"type="text"  class="ISDBMndtry ISDBfields ISDisable inputTXT textclear">
           <option value="">--Select--</option>
           <option value="Level1">Level1</option>
           <option value="Level2">Level2</option>
         
          </select>
        </td>
           </tr>
       <tr>
      <td style="width:5%">
        </td>
            <td style="width:10%" >
            <font face="Verdana" size="2">Menu Name</font>
            </td>      
        
            <td style="width:10%">
             <input onkeyup="this.setAttribute('value', this.value);" id="New_editMenuName" name="New_editMenuName" value=""  disabled class="ISDBfields ISDisable inputTXT textclear">
         
            <img src="ThemeproLO/Common/Images/search1.png" class="MainShow" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sMenurenamefetch',Param:'',brid:'',MnuId:''},{0:$('#editMenuID'),1:$('#editMenuName,#New_editMenuName'),2:$('#editMenuURL'),3:$('#editMenuFunction'),4:$('#editMenuIcon'),5:$('#editMenuColor')});">
          <img src="ThemeproLO/Common/Images/search1.png" class="SubShowlevel1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'samplesp',Param:$('#editMenuLevel').val(),brid:'',MnuId:''},{0:$('#editMenuID'),2:$('#editMenuName,#New_editMenuName'),3:$('#editMenuURL'),4:$('#editMenuFunction'),5:$('#editMenuIcon'),6:$('#editMenuColor'),7:$('#editQueueParam'),8:$('#editQueueActiveRow'),9:$('#editQParamID')});">
          <img src="ThemeproLO/Common/Images/search1.png" class="SubShowlevel2" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sEditMenuLevel2Fetch',Param:$('#editMenuLevel').val(),brid:'',MnuId:''},{0:$('#editMenuID'),1:$('#editMenuName,#New_editMenuName'),2:$('#editMenuURL'),3:$('#editMenuFunction'),4:$('#editMenuIcon'),5:$('#editMenuColor'),6:$('#editQueueParam'),7:$('#editQueueActiveRow'),8:$('#editQParamID')});">
         <!--SAM_ssubMenurenamefetch-->
         <span style="color: Red">*</span>
            </td>
           </tr>
        <tr>
      <td style="width:5%">
        </td>
            <td style="width:10%" >
            <font face="Verdana" size="2">New MenuName</font>
            </td>      
        
            <td style="width:10%">
            <input onkeyup="this.setAttribute('value', this.value);" id="editMenuName" name="editMenuName" value="" type="text" class="ISDBfields inputTXT ISDBMndtry textclear" />
             <span style="color: Red">*</span>
            </td>
           </tr>
           <tr>
            <td style="width:5%">
        </td>
               <td style="width:10%">
            <font face="Verdana" size="2">New MenuURL</font>
            </td>
          
            <td style="width:10%" >
            <input onkeyup="this.setAttribute('value', this.value);" id="editMenuURL" name="editMenuURL" type="text" value="" class="ISDBfields inputTXT textclear" />
               
            </td> 
               </tr> 
            <tr>
             <td style="width:5%">
        </td>
            <td style="width:10%" >
            <font face="Verdana" size="2">New MenuFunction</font>
            </td>      
       
            <td style="width:10%">
            <select onkeyup="this.setAttribute('value', this.value);" onblur="this.setAttribute('value', this.value);clear();QueueEdithideshow();" onchange="QueueEdithideshow();clear();" id="editMenuFunction" name="editMenuFunction" type="text" value="" class="ISDBfields inputTXT textclear" />
          
           <option value="">--Select--</option>
            <option value="Custom Page">Custom Page</option>
            <option value="Queue Page">Queue Page</option>
            <option value="WF Page">WF Page</option>
            </select> 
            </td>
 
            </tr>
            <tr>
          <td style="width:10%">
          
      
        </td>
    <td style="width:10%">
          <font face="Verdana" size="2">New MenuIcon</font>
      
        </td>
       
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="editMenuIcon" name="editMenuIcon" value="" type="text" class="inputTXT ISDBfields ISDisable textclear"/>
           </td>
        
        </tr>
        <tr>
         <td style="width:10%">
          
      
        </td>
    <td style="width:10%">
          <font face="Verdana" size="2">New MenuColor</font>
      
        </td>
        
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="editMenuColor" name="editMenuColor" value="" type="text" class="inputTXT ISDBfields ISDisable textclear"/>
           </td>
        
        </tr>
         <tr  class="EditQueueShow">
          <td style="width:10%">
        
        </td>
    <td style="width:10%">
          <font face="Verdana" size="2">Workflow Name</font>
      
        </td>
        

       
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" disabled id="editQueueParam" name="editQueueParam" value="" type="text" class="inputTXT ISDBfields ISDisable textclear ISDBMndtry"/>
            <img src="ThemeproLO/Common/Images/search1.png" id="editQparamlookup" class="find1"  onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sMenuWFName',Param:'',brid:'',MnuId:''},{0:$('#editQueueParam'),1:$('#editQParamID')});" />
           <span style="color: Red">*</span>
           </td>
        
        </tr>
         <tr class="EditQueueShow">
         <td style="width:10%">
        
        </td>
    <td style="width:10%">
          <font face="Verdana" size="2">Queue Active Row</font>
      
        </td>
        

         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" id="editQueueActiveRow"  name="editQueueActiveRow" value="" type="text" class="inputTXT ISDBfields ISDisable textclear"/>
            
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
    <article name="Tab3" id="tab3">
        <div id="Rearrange" align="center">
      <table style="padding-top:50px; width:10%;" cellspacing="7" cellpadding="7">
         <tr>
          <td style="width:15%">
        </td>
       
               <td style="width:15%">
            <font face="Verdana" size="2">Menu Level</font>
            </td>
          
            <td style="width:15%" >
            <select onkeyup="this.setAttribute('value', this.value);" id="ReMenuLevel" name="ReMenuLevel"  class="inputTXT textclear" onchange=" menurearrLevel0()" />
                <option value="">--Select--</option>
                 <option value="0">Level 0</option>
                  <option value="1">Level 1</option>
                  <option value="2">Level 2</option>
               </select>
            </td> 
               </tr>
          <tr class="level1show"style="display:none">
           <td style="width:5%">
        </td>
               <td style="width:10%">
            <font face="Verdana" size="2">Main Menu Name</font>
            </td>
          
            <td style="width:10%" >
               <select onkeyup="this.setAttribute('value', this.value); name="MainRemenuName" id="MainRemenuName"  style="width:223px;"class=" inputTXT textclear" onblur="menurearrLevel1()" onchange="menurearrLevel1()" > 

                </select>
             <input type="hidden" id="MainRemenuNamehd" name="MainRemenuNamehd" value=""/>
            </td> 
               
               </tr>
           <tr class="level2show"style="display:none">
            <td style="width:5%">
        </td>
               <td style="width:10%">
            <font face="Verdana" size="2">Sub Menu Name</font>
            </td>
          
            <td style="width:10%" >
               <select onkeyup="this.setAttribute('value', this.value); name="SubRemenuName" id="SubRemenuName"  style="width:223px;"class=" inputTXT textclear level2show" onblur="menurearrLevel2()" onchange="menurearrLevel2()"> 

                </select>
             <input type="hidden" id="SubRemenuNamehd" name="SubRemenuNamehd" />
            </td> 
               
               </tr>
           <tr>
            <td style="width:15%">
        </td>
               <td style="width:15%">
            <font face="Verdana" size="2">Menu Name</font>
            </td>
          
            <td style="width:15%" >
               <select onkeyup="this.setAttribute('value',this.value); name="RemenuName" id="RemenuName" multiple style="width:223px;height:223px;" class="inputTXT textclear"  > 

</select>
                <input type="hidden" id="FromLBVal" name="FromLBVal" class="ISDBfields"/>
            </td> 
               <td>                
	<ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Up.png" id="up" title= "Up" class="" /></ul></br>
           <ul> <img style="width:25px;height:25px;" src="ThemeproLO/Common/Images/Down.png" id="down" title= "Down" class="" /></ul>
       </td>
               <td></td>
               </tr>
          <tr>
        <td style="width:40%"></td>
        <td></td>
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