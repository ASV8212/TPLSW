
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

<!-- <script src="ThemeproLO/Common/scripts/MenuConfiguration/NewMenu/Onload.js${DMY13}" type="text/javascript"></script>
<script src="ThemeproLO/Common/scripts/MenuConfiguration/NewMenu/Validation.js${DMY13}" type="text/javascript"></script>-->
<script type="text/javascript" src="ThemeproLO/Common/scripts/Config/ProductConfig/Onload.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/QueueTabs.js${DMY13}"></script> 
<head id="Head1" runat="server">
    
    <title>Product/Purpose/Scheme Masters</title>
</head>
<body bgcolor="white">

<form id="Masters"  height:640px" name="Masters"  action=""  method="POST">
       <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                <span>Product/Purpose/Scheme Masters</span></div>
             <input id="LoggedInUser" class="DBfields" name="LoggedInUser" type="hidden" value=""/>
			 <input id="ActivityID" class="DBfields"  name="ActivityID" type="hidden"  value=""/>
			  <input type="hidden" id="TabVal" name="TabVal" value="New">
              <input id="BodyMainContentH" name="BodyMainContentH" type="hidden" value=""/>
              <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>
              <input id="PKID" name="PKID" type="hidden" class="ISDBfields" value=""/>
            <table width="100%" cellpadding="10" cellspacing="0" border="0">
            
            
<tbody><tr style="width: 100%;display:none" bgcolor="#A3C3F1">
      
               
    <tr>
<td colspan="3" valign="middle" height="30"  align="center"class="rearrhide">
<table style="width: 100%;" >
  <tr>
    <td style="width:20%" ></td>
        <td style="width:20%" ><input onkeyup="this.setAttribute('value', this.value);" id="Product" width="20px" name="EntryTYPE" class="ISDisable" type="radio" /><font face="Verdana" size="3">Product</font></td>
        <td style="width:20%" ><input onkeyup="this.setAttribute('value', this.value);" id="Purpose" width="20px" name="EntryTYPE" class="ISDisable" type="radio" /><font face="Verdana" size="3">Purpose</font></td>
        <td style="width:20%" ><input onkeyup="this.setAttribute('value', this.value);" id="Scheme" width="20px" name="EntryTYPE" class="ISDisable" type="radio" /><font face="Verdana" size="3">Scheme</font>
        <input onkeyup="this.setAttribute('value', this.value);" id="EntryTYPE" name="EntryTYPE" class="inputTXT" value="Product" type="hidden" /></td>
  
   <td style="width:20%" ></td>
     <td style="width:20%" ></td>

          </tr>
          
          
    </table>
   </td>
</tr>
  </tbody></table>
        
 <div> 
     <div id="cssmenu" class="round">
   
    <ul class="tabs">
    <li id="Tab1" class="NewTab"> <a id="df1" href="#tab1">New</a></li>
    <li id="Tab2" class="EditTab"><a id="df2" href="#tab2" >Edit</a></li>
    </ul>
         </div> 
     
  <div class="clr"></div>
   <section class="block">
    <article name="Tab1" id="tab1"><br />
    <div  class="NewDetails" align="center">
    <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%"></div>
    <div class="TXTFIELDSCLEAR" align="center">
    <div class="ShowNewProduct">
 	<table style="padding-top:50px; width:80%;" cellspacing="3" cellpadding="3">
	<tr class="Prodlevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Product Code</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="PROD_Code" name="PROD_Code" type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span></td> 
    </tr>
    <tr class="Prodlevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Product Name</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="PROD_Name" name="PROD_Name" type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span></td> 
    </tr>
	<tr> <td style="width:25%"></td>
     <td style="width:15%"> </td>
      <td style="width:25%" ><input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="prodsave" type="button" value="SAVE"  /></td> 
      <td style="width:50%" ></td>      
     </tr>
</table>
 </div>
     <div class="ShowNewPurpose">
 	<table style="padding-top:50px; width:80%;" cellspacing="3" cellpadding="3">
	<tr class="Purplevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Purpose Code</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="PURP_Code" name="PURP_Code" type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span></td> 
    </tr>
    <tr class="Purplevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Purpose Name</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="PURP_Name" name="PURP_Name" type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span></td> 
    </tr>
     <tr class="Purplevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Admin Operation ID</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="PURP_AF_OPRN_ID" name="PURP_AF_OPRN_ID" type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span></td> 
    </tr>
	<tr> <td style="width:25%"></td>
     <td style="width:15%"> </td>
      <td style="width:25%" ><input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="purpsave" type="button" value="SAVE"  /></td> 
      <td style="width:50%" ></td>      
     </tr>
</table>
 </div>
 <div class="ShowNewScheme">
 	<table style="padding-top:50px; width:80%;" cellspacing="3" cellpadding="3">
	<tr class="Schmlevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Scheme Code</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="SCHM_Code" name="SCHM_Code" type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span></td> 
    </tr>
    <tr class="Schmlevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Scheme Name</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="SCHM_Name" name="SCHM_Name" type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span></td> 
    </tr>
     <tr class="Schmlevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Scheme purpose code</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="SCHM_PurpCode" name="SCHM_PurpCode" disabled type="text" value="" class="inputTXT ISDBfields">
	<img src="ThemeproLO/Common/Images/search1.png" id="lkupprod" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sFetchSchmPurpCode',Param:$('#SCHM_Code').val(),brid:$('#SCHM_Name').val(),MnuId:''},{0:$('#SCHM_PurpCode')})">
  <span id="span_imgdateapp" style="COLOR: red"></span></td> 
    </tr>
	<tr> <td style="width:25%"></td>
     <td style="width:15%"> </td>
      <td style="width:25%" ><input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="schmsave" type="button" value="SAVE"  /></td> 
      <td style="width:50%" ></td>      
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
      <div class="ShowEditProduct">
 	<table style="padding-top:50px; width:80%;" cellspacing="3" cellpadding="3">
	<tr class="ProdEditlevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Product Code</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="EditPROD_Code" name="EditPROD_Code" type="text" value="" class="inputTXT ISDBfields ISDBMndtry ">
    <img src="ThemeproLO/Common/Images/search1.png" id="lkupprod" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sFetchProdDetls',Param:'',brid:'',MnuId:''},{0:$('#PKID'),1:$('#EditPROD_Code'),2:$('#EditPROD_Name')})">
  
    <span id="span_imgdateapp" style="COLOR: red">*</span></td> 
    </tr>
    <tr class="ProdEditlevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Product Name</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="EditPROD_Name" name="EditPROD_Name" type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span></td> 
    </tr>
	<tr> <td style="width:25%"></td>
     <td style="width:15%"> </td>
    <td style="width:25%"><input onkeyup="this.setAttribute('value', this.value);" id="ProdUpdateBtn" class="buttonPRS"  type="button" value="Update" />
<input onkeyup="this.setAttribute('value', this.value);" id="ProdDeleteBtn" class="buttonPRS"  type="button" value="Delete" /></td> 
      <td style="width:50%" ></td>      
     </tr>
</table>
 </div>
     <div class="ShowEditPurpose">
 	<table style="padding-top:50px; width:80%;" cellspacing="3" cellpadding="3">
	<tr class="PurpEditlevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Purpose Code</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="EditPURP_Code" name="EditPURP_Code" type="text" value="" class="inputTXT ISDBfields ISDBMndtry ">
    <img src="ThemeproLO/Common/Images/search1.png" id="lkupprod" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sFetchPurpDetls',Param:'',brid:'',MnuId:''},{0:$('#PKID'),1:$('#EditPURP_Code'),2:$('#EditPURP_Name'),3:$('#EditPURP_AF_OPRN_ID')})">
  <span id="span_imgdateapp" style="COLOR: red">*</span></td> 
    </tr>
    <tr class="PurpEditlevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Purpose Name</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="EditPURP_Name" name="EditPURP_Name" type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span></td> 
    </tr>
     <tr class="PurpEditlevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Admin Operation ID</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="EditPURP_AF_OPRN_ID" name="EditPURP_AF_OPRN_ID" type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span></td> 
    </tr>
	<tr> <td style="width:25%"></td>
     <td style="width:15%"> </td>
      <td style="width:25%" ><input onkeyup="this.setAttribute('value', this.value);" id="PurpUpdateBtn" class="buttonPRS"  type="button" value="Update" />
<input onkeyup="this.setAttribute('value', this.value);" id="PurpDeleteBtn" class="buttonPRS"  type="button" value="Delete" /></td> 
      <td style="width:50%" ></td>      
     </tr>
</table>
 </div>
 <div class="ShowEditScheme">
 	<table style="padding-top:50px; width:80%;" cellspacing="3" cellpadding="3">
	<tr class="SchmEditlevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Scheme Code</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="EditSCHM_Code" name="EditSCHM_Code" type="text" value="" class="inputTXT ISDBfields ISDBMndtry ">
    <img src="ThemeproLO/Common/Images/search1.png" id="lkupprod" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sFetchSchmDetls',Param:'',brid:'',MnuId:''},{0:$('#PKID'),1:$('#EditSCHM_Code'),2:$('#EditSCHM_Name'),3:$('#EditSCHM_PurpCode')})">
  <span id="span_imgdateapp" style="COLOR: red">*</span></td> 
    </tr>
    <tr class="SchmEditlevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Scheme Name</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="EditSCHM_Name" name="EditSCHM_Name" type="text" value="" class="inputTXT ISDBfields ISDBMndtry "><span id="span_imgdateapp" style="COLOR: red">*</span></td> 
    </tr>
     <tr class="SchmEditlevel">
    <td style="width:5%"></td>
    <td  style="width:10%"><font face="Verdana" size="2">Scheme purpose code</font></td>
    <td style="width:10%">  <input onkeyup="this.setAttribute('value', this.value);" id="EditSCHM_PurpCode" name="EditSCHM_PurpCode" type="text" disabled value="" class="inputTXT ISDBfields">
	<img src="ThemeproLO/Common/Images/search1.png" id="lkupprod" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sFetchSchmPurpCode',Param:$('#EditSCHM_Code').val(),brid:$('#EditSCHM_Name').val(),MnuId:''},{0:$('#EditSCHM_PurpCode')})">
	<span id="span_imgdateapp" style="COLOR: red"></span></td> 
    </tr>
	<tr> <td style="width:25%"></td>
     <td style="width:15%"> </td>
      <td style="width:25%" ><input onkeyup="this.setAttribute('value', this.value);" id="SchmUpdateBtn" class="buttonPRS"  type="button" value="Update" />
		<input onkeyup="this.setAttribute('value', this.value);" id="SchmDeleteBtn" class="buttonPRS"  type="button" value="Delete" /></td> 
      <td style="width:50%" ></td>      
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