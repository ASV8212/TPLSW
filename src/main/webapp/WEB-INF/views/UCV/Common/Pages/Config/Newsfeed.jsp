
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
<script type="text/javascript" src="ThemeproLO/Common/scripts/Config/NewsFeed/Onload.js${DMY13}"></script>
     <script type="text/javascript" src="ThemeproLO/Common/scripts/Config/NewsFeed/Validation.js${DMY13}"></script>

<head id="Head1" runat="server">
    
    <title>NewsFeed</title>
</head>
<body bgcolor="white">

<form id="ApplicationForm"   name="ApplicationForm"  action=""  method="POST">
       <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                <span>News Feed</span></div>
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
     <div id="PoplCustomHdrStrip">
	 

</div>
     
 <div> 
     <!-- <div id="cssmenu" class="round">
    
    <ul class="tabs">
      <li id="Tab1" class="NewTab"> <a id="df1" href="#tab1">New</a></li>
  <li id="Tab2" class="Edit"><a id="df2" href="#tab2" >Edit</a></li>  
  </ul> 
  </div> -->
     
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
       
  <tr></tr>
  <tr></tr>
  <tr></tr>
  <tr></tr>
  <tr></tr>
     <tr>
        <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">News Feed</font></td>
        <td style="width:10%"><textarea onkeyup="this.setAttribute('value', this.value);" id="NewsFeedArea" name="NewsFeedArea" style="height: 55px;width: 270px;" value="" class="inputTXT  ClearTxt inputTXTBGAR " ></textarea></td> 
    </tr>
        
     
	<tr>
	</tr>
	<td style="width:10%"></td>
	  <td style="width:5%"><img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_add.png" id="Add" class="" title= "Add" onclick="addlistval()" hspace="5"/>
	 <img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/Edit.png" id="Edit" title= "Edit" class="" onclick="Editlistval();" hspace="95"/>
      <img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_delete.png" id="Delete" title= "Delete" class="" onclick="Deletelistval();" hspace="10"/></td>
    <tr>
    	<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">List</font></td>
        <td style="width:10%" >
        <select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="NewsFeed" id="NewsFeed" multiple style="width:275px;height:250px;" class="inputTXT NewMndtry" value="" > </select><span id="" style="COLOR: red" />*</span>
    
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
         
     </tr>  
	 
	 
	 
	  <tr>
        <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">Icons</font></td>
        <td style="width:10%"><input type="text" onkeyup="this.setAttribute('value', this.value);" id="NewsFeedIcon" name="NewsFeedIcon"  value="" class="inputTXT  ClearTxt" ></textarea></td> 
    </tr>
        
     <tr>
       <td style="width:40%"></td>
       <td  style="width:10%"> <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="save" type="button" value="Submit"  />
         <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="Deletebtn" type="button" value="Delete"  />
        </td>
    </tr>
	
	

      </table> 
      </div>
      </div>
     </div>
    </article>
    
    
    
   <!-- <article name="Tab2" id="tab2" style="height:240px;">
       <br />
    <div align="center">
     <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%"></div>
     
     <div class="TXTFIELDSCLEAR" align="center">
      
      
      <div class="ShowEdit" > 
     
     
     <table style="padding-top:0px; width:25%;" cellpadding="5" cellspacing="5">
       
    
     <tr></tr>
     <tr></tr>
     <tr></tr>
     <tr></tr>
     <tr></tr>
     <tr>
        <td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">News Feed</font></td>
        <td style="width:10%"><textarea onkeyup="this.setAttribute('value', this.value);" id="EditNewsFeedArea" name="EditNewsFeedArea" type="text" value="" style="height: 55px;width: 270px;" class="inputTXT ClearTxt" ></textarea></td> 
    </tr>
        
    
     <tr>
     <td style="width:10%"></td>
     <td style="width:5%"><img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_add.png" id="Add" class="" title= "Add" onclick="Editaddlistval();" hspace="10"/>
     <img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/Edit.png" id="Edit" title= "Edit" class="" onclick="Editpgeditlistval();"  hspace="85"/>
     <img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_delete.png" id="Delete" title= "Delete" class="" onclick="Editdeletelistval();"  hspace="25"/></td>
     </tr>

     <tr>
    	<td style="width:10%" class="ColumnHeading"><font face="Verdana" size="3">List</font></td>
        <td style="width:10%" >
        <select onchange="this.setAttribute('value',this.value);" onkeyup="this.setAttribute('value',this.value);" name="EditNewsFeed" id="EditNewsFeed" multiple style="width:275px;height:250px;" class="inputTXT ClearTxt " value="" > </select>
    
        <input type="hidden" id="EditFromLBVal" name="EditFromLBVal" class="ISDBfields ClearTxt"/></td> 
        
        <td> 
              <ul> <img style="width:22px;height:22px;" src="ThemeproLO/Common/Images/Up.ico" id="Qup" title= "Up" class="" /></ul></br>
           <ul> <img style="width:22px;height:22px;" src="ThemeproLO/Common/Images/Down.ico" id="Qdown" title= "Down" class="" /></ul>
        
         </td> 
         
      <td style="width:10%">
         <ul><img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/Edit.png" id="Edit" title= "Edit" class="" onclick="Editpgeditlistval();"/></ul></br></br></br>
         <ul><img style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_delete.png" id="Delete" title= "Delete" class="" onclick="Editdeletelistval();" /></ul>
         </td>
       
         
     </tr>
     
           <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="GetData" type="hidden"  /> 
                     
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
     
    </article>- -->

  </section>
</section>
    

</div>
 <div id="popup" class="SearchList">
           <table id="Table1" class="display" border="0"></table>
        </div>  
          
    </form>
</body></html>

