<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Master Loan ROI Config</title>

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


<script src="ThemeproLO/Common/scripts/Config/MasLoanRoiConfig/LoadSubmit/LoadSubmit.js${DMY13}" type="text/javascript"></script>

<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/QueueTabs.js${DMY13}"></script>
</head>
<body>
<form id="LoanROIConfig"  name="Loan ROI Config"  action=""  method="POST">
       <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                <span>ROI </span></div>
             <input id="LoggedInUser" class="DBfields" name="LoggedInUser" type="hidden" value=""/>
			  <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>      
			 <input id="ActivityID" class="DBfields"  name="ActivityID" type="hidden"  value=""/>
			 <input class=" DBfields inputTXT "  id="LRCN_DtCreated" name="LRCN_DtCreated" type="hidden"/>
			<input class=" DBfields inputTXT "  id="LRCN_CreatedBy" name="LRCN_CreatedBy" type="hidden"/>
			<input class=" DBfields inputTXT "  id="LRCN_DtModified" name="LRCN_DtModified" type="hidden"/>
			<input class=" DBfields inputTXT "  id="LRCN_ModifiedBy" name="LRCN_ModifiedBy" type="hidden"/>
			 <input class=" DBfields inputTXT "  id="EditLRCN_DtCreated" name="EditLRCN_DtCreated" type="hidden"/>
			<input class=" DBfields inputTXT "  id="EditLRCN_CreatedBy" name="EditLRCN_CreatedBy" type="hidden"/>
			<input class=" DBfields inputTXT "  id="EditLRCN_DtModified" name="LRCN_DtModified" type="hidden"/>
			<input class=" DBfields inputTXT "  id="EditLRCN_ModifiedBy" name="LRCN_ModifiedBy" type="hidden"/>
			<input class="  inputTXT "  id="GridClkChk" name="GridClkChk" type="hidden"/>
			
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

       
  
<!--<tr>
<td colspan="8">
 	 <div class="form-section-title"><span>Master Loan ROI Configuration</span></div>
</td>
</tr>-->
<tr><td class="ColumnHeading"><font face="Verdana" size="2">Product Code </font></td>
<td><input class=" DBfields inputTXT IsNumberFields Mndtry Newdetls"  onchange="this.setAttribute('value', this.value);" disabled onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="LRCN_PrCode" name="LRCN_PrCode" />&nbsp;<img src="ThemeproLO/Common/Images/search1.png" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'LSW_sMasProd',Param:'',brid:'',MnuId:''},{0:$('#LRCN_PrCode'),1:$('#LRCN_PrName')});$('.Newval').val('0');$('.lkclr').val('');TxtClr();" /><span id="" style="COLOR: red" />*</span></td>
<td class="ColumnHeading"><font face="Verdana" size="2">Product Name </font></td>
<td><input onchange="this.setAttribute('value', this.value);"  value="" class=" DBfields inputTXT " disabled onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="LRCN_PrName" name="LRCN_PrName" />&nbsp;<span id="" style="COLOR: red" /></span></td>
</tr>
<tr><td class="ColumnHeading"><font face="Verdana" size="2">Purpose Code </font></td>
<td><input class="Mndtry DBfields inputTXT IsNumberFields Mndtry Newdetls lkclr" disabled onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)" id="LRCN_PurpCode" name="LRCN_PurpCode" />&nbsp;<img src="ThemeproLO/Common/Images/search1.png" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'LSW_sMasPurp',Param:$('#LRCN_PrCode').val(),brid:'',MnuId:''},{0:$('#LRCN_PurpCode'),1:$('#LRCN_PurpName')});$('.Newval').val('0');$('#LRCN_SchmCode').val('');$('#LRCN_SchmName').val('');TxtClr();" /><span id="" style="COLOR: red" />*</span></td>
<td class="ColumnHeading"><font face="Verdana" size="2">Purpose Name </font></td>
<td><input onchange="this.setAttribute('value', this.value);"  disabled class=" DBfields inputTXT  lkclr" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="LRCN_PurpName" name="LRCN_PurpName" />&nbsp;<span id="" style="COLOR: red" /></span></td>
</tr>
<tr><td class="ColumnHeading"><font face="Verdana" size="2">Scheme Code </font></td>
<td><input class=" DBfields inputTXT IsNumberFields  Newdetls lkclr" disabled  onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)" id="LRCN_SchmCode" name="LRCN_SchmCode" />&nbsp;<img src="ThemeproLO/Common/Images/search1.png" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'LSW_sMasSchm',Param:$('#LRCN_PurpCode').val(),brid:'',MnuId:''},{1:$('#LRCN_SchmCode'),0:$('#LRCN_SchmName')});$('.Newval').val('0');TxtClr();" /></td>
<td class="ColumnHeading"><font face="Verdana" size="2">Scheme Name </font></td>
<td><input onchange="this.setAttribute('value', this.value);" disabled  class=" DBfields inputTXT  lkclr" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="LRCN_SchmName" name="LRCN_SchmName" />&nbsp;<span id="" style="COLOR: red" /></span></td>
</tr>

<tr><td class="ColumnHeading"><font face="Verdana" size="2">Minimum Loan Amount</font></td>
<td><input class="Mndtry DBfields inputTXT IsNumberFields IsCURCommaFields Newval" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this);MaxAmtChk('LRCN_MaxLonAmt','LRCN_MinLonAmt','LRCN_MinLonAmt')" onfocus="fnOnFocus(this)"  id="LRCN_MinLonAmt" name="LRCN_MinLonAmt" value="0" />&nbsp;<span id="" style="COLOR: red" />*</span>
<td class="ColumnHeading"><font face="Verdana" size="2">Maximum Loan Amount </font></td>
<td><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"  class=" Mndtry  DBfields inputTXT IsNumberFields IsCURCommaFields Newval" onblur="fnOnFocusOut(this);MaxAmtChk('LRCN_MaxLonAmt','LRCN_MinLonAmt','LRCN_MaxLonAmt')" onfocus="fnOnFocus(this)" maxlength="100" id="LRCN_MaxLonAmt" name="LRCN_MaxLonAmt" value="0"/>&nbsp;<span id="" style="COLOR: red" />*</span></td>
</tr>
<tr><td class="ColumnHeading"><font face="Verdana" size="2">Minimum Term</font></td>
<td><input class="Mndtry DBfields inputTXT IsNumberFields Newval"  onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this);MaxTermChk('LRCN_MaxTerms','LRCN_MinTerms','LRCN_MinTerms')" onfocus="fnOnFocus(this)"  id="LRCN_MinTerms" name="LRCN_MinTerms" value="0" />&nbsp;<span id="" style="COLOR: red" />*</span>
<td class="ColumnHeading"><font face="Verdana" size="2">Maximum Term </font></td>
<td><input onchange="this.setAttribute('value', this.value);"  class="Mndtry DBfields IsNumberFields inputTXT  Newval" onblur="fnOnFocusOut(this);MaxTermChk('LRCN_MaxTerms','LRCN_MinTerms','LRCN_MinTerms')" onfocus="fnOnFocus(this)" maxlength="100" id="LRCN_MaxTerms" name="LRCN_MaxTerms" value="0"/>&nbsp;<span id="" style="COLOR: red" />*</span></td>
</tr>
<tr><td class="ColumnHeading"><font face="Verdana" size="2">Base Rate</font></td>
<td><input class="Mndtry DBfields inputTXT IsNumberFields Newval"  onchange="this.setAttribute('value', this.value);"style="TEXT-ALIGN:right" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="LRCN_BaseRate" name="LRCN_BaseRate" value="0" />&nbsp;<span id="" style="COLOR: red" />*</span>
<td class="ColumnHeading"><font face="Verdana" size="2">Level1</font></td>
<td><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"  class="Mndtry DBfields IsNumberFields inputTXT  Newval" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="LRCN_Level1" name="LRCN_Level1" value="0"/>&nbsp;<span id="" style="COLOR: red" />*</span></td>
</tr>
<tr><td class="ColumnHeading"><font face="Verdana" size="2">Level2</font></td>
<td><input class="Mndtry DBfields inputTXT IsNumberFields Newval" style="TEXT-ALIGN:right"  onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="LRCN_Level2" name="LRCN_Level2" value="0" />&nbsp;<span id="" style="COLOR: red" />*</span>
<td class="ColumnHeading"><font face="Verdana" size="2">Level3</font></td>
<td><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"  class="Mndtry DBfields IsNumberFields inputTXT  Newval" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="LRCN_Level3" name="LRCN_Level3" value="0"/>&nbsp;<span id="" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td class="ColumnHeading"><font face="Verdana" size="2">Level4</font></td>
<td><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"  class="Mndtry DBfields IsNumberFields  inputTXT  Newval" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="LRCN_Level4" name="LRCN_Level4" value="0"/>&nbsp;<span id="" style="COLOR: red" />*</span></td>
</tr>
<tr><td class="ColumnHeading"><font face="Verdana" size="2">Start Date</font></td>
<td><input class="Mndtry DBfields inputTXT IsNumberFields Newval ISDatefield DateFields ISPastDateFields" style="TEXT-ALIGN:left"  onchange="this.setAttribute('value', this.value);CompareDateFields('LRCN_StartDt','LRCN_EndDt')" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="LRCN_StartDt" name="LRCN_StartDt" value="" />&nbsp;<span id="" style="COLOR: red" />*</span>
<td class="ColumnHeading"><font face="Verdana" size="2">End Date</font></td>
<td><input onchange="this.setAttribute('value', this.value);CompareDateFields('LRCN_StartDt','LRCN_EndDt')" style="TEXT-ALIGN:left"  class="Mndtry DBfields  inputTXT  ISDatefield DateFields Newval ISPastDateFields" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="LRCN_EndDt" name="LRCN_EndDt" value=""/>&nbsp;<span id="enddtspan" style="COLOR: red;" />*</span></td>
</tr>
<tr>
<td class="ColumnHeading"><font face="Verdana" size="2">Flag</font></td>
<td><select onchange="this.setAttribute('value', this.value);AddFlagBasedMntry('LRCN_EndDt','LRCN_Flag','enddtspan')" style="TEXT-ALIGN:left"  class="Mndtry DBfields   inputTXT  Newval" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="LRCN_Flag" name="LRCN_Flag" value="">
<option value="">--Select--</option>
<option value="Active">Active</option>
<option value="InActive">InActive</option>
</select>&nbsp;<span id="" style="COLOR: red" />*</span></td>
</tr>

 <tr>
          <tr></tr>   
           <td style="width:25%" ></td>
            <td style="width:20%" ></td>
            <td style="width:25%" >
          <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="save" type="button" value="SAVE"  />
            </td> 
                 
                
        
  </tr>
  
  
</table></center>  
    
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
<input type="hidden" id="EditLRCN_Pkid" name="EditLRCN_Pkid" class=" DBfields  Editval">
                     <center>
<table class="xdTable" cellspacing="2" cellpadding="2" width="100%" border="0">

       

<tbody>    
<!--<tr>
<td colspan="8">
 	 <div class="form-section-title"><span>Master Loan ROI Configuration</span></div>
</td>
</tr>-->
<tr><td class="ColumnHeading"><font face="Verdana" size="2">Product Code </font></td>
<td><input class=" DBfields inputTXT IsNumberFields Mndtry Editdetls" disabled onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="EditLRCN_PrCode" name="EditLRCN_PrCode" />&nbsp;<img src="ThemeproLO/Common/Images/search1.png" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'LSW_sEditFetchMasProd',Param:'PrCode',brid:'',MnuId:''},{1:$('#EditLRCN_PrCode'),0:$('#EditLRCN_PrName')});$('.Editval').val('0');$('.Lkclr').val('');;TxtClr();$('#GridClkChk').val('');" /><span id="" style="COLOR: red" />*</span></td>
<!-- <img src="ThemeproLO/Common/Images/search1.png" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'LSW_sMasProd',Param:'',brid:'',MnuId:''},{1:$('#EditLRCN_PrCode'),0:$('#EditLRCN_PrName')});" /> -->
<td class="ColumnHeading"><font face="Verdana" size="2">Product Name </font></td>
<td><input onchange="this.setAttribute('value', this.value);" disabled value="" class="DBfields inputTXT   " onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="EditLRCN_PrName" name="EditLRCN_PrName"/>&nbsp;<span id="" style="COLOR: red" /></span></td>
</tr>
<tr><td class="ColumnHeading"><font face="Verdana" size="2">Purpose Code </font></td>
<td><input class=" DBfields inputTXT IsNumberFields Mndtry Editdetls Lkclr" disabled onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)" id="EditLRCN_PurpCode" name="EditLRCN_PurpCode"/>&nbsp;<img src="ThemeproLO/Common/Images/search1.png" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'LSW_sEditFetchMasProd',Param:'PurpCode',brid:$('#EditLRCN_PrCode').val(),MnuId:''},{1:$('#EditLRCN_PurpCode'),0:$('#EditLRCN_PurpName')});$('.Editval').val('0');$('#EditLRCN_SchmCode').val('');$('#EditLRCN_SchmName').val('');;TxtClr();$('#GridClkChk').val('');" /><span id="" style="COLOR: red" />*</span></td>
<!--<img src="ThemeproLO/Common/Images/search1.png" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'LSW_sMasPurp',Param:$('#EditLRCN_PrCode').val(),brid:'',MnuId:''},{1:$('#EditLRCN_PurpCode'),0:$('#EditLRCN_PurpName')});" /> -->
<td class="ColumnHeading"><font face="Verdana" size="2">Purpose Name </font></td>
<td><input onchange="this.setAttribute('value', this.value);" disabled value="" class="DBfields inputTXT   Lkclr" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="EditLRCN_PurpName" name="EditLRCN_PurpName"/>&nbsp;<span id="" style="COLOR: red" /></span></td>
</tr>
<tr><td class="ColumnHeading"><font face="Verdana" size="2">Scheme Code </font></td>
<td><input class=" DBfields inputTXT IsNumberFields   Lkclr" disabled onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)" id="EditLRCN_SchmCode" name="EditLRCN_SchmCode"/>&nbsp;<img src="ThemeproLO/Common/Images/search1.png" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'LSW_sEditFetchMasProd',Param:'SchmCode',brid:$('#EditLRCN_PrCode').val(),MnuId:$('#EditLRCN_PurpCode').val()},{1:$('#EditLRCN_SchmCode'),0:$('#EditLRCN_SchmName')});$('.Editval').val('0');;TxtClr();$('#GridClkChk').val('');" /></td>
<!--<img src="ThemeproLO/Common/Images/search1.png" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'LSW_sMasPurp',Param:$('#EditLRCN_PrCode').val(),brid:'',MnuId:''},{1:$('#EditLRCN_PurpCode'),0:$('#EditLRCN_PurpName')});" /> -->
<td class="ColumnHeading"><font face="Verdana" size="2">Scheme Name </font></td>
<td><input onchange="this.setAttribute('value', this.value);" disabled value="" class="DBfields inputTXT  Lkclr " onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="EditLRCN_SchmName" name="EditLRCN_SchmName"/>&nbsp;<span id="" style="COLOR: red" /></span></td>
</tr>


<tr><td class="ColumnHeading"><font face="Verdana" size="2">Minimum Loan Amount</font></td>
<td><input class=" DBfields  Mndtry inputTXT IsNumberFields IsCURCommaFields Editval" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this);MaxAmtChk('EditLRCN_MaxLonAmt','EditLRCN_MinLonAmt','EditLRCN_MinLonAmt')" onfocus="fnOnFocus(this)"  id="EditLRCN_MinLonAmt" name="EditLRCN_MinLonAmt" value="0" />&nbsp;<span id="" style="COLOR: red" />*</span></td>
<td class="ColumnHeading"><font face="Verdana" size="2">Maximum Loan Amount </font></td>
<td><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"  class=" DBfields Mndtry inputTXT IsNumberFields IsCURCommaFields  Editval" onblur="fnOnFocusOut(this);MaxAmtChk('EditLRCN_MaxLonAmt','EditLRCN_MinLonAmt','EditLRCN_MinLonAmt')" onfocus="fnOnFocus(this)" maxlength="100" id="EditLRCN_MaxLonAmt" name="EditLRCN_MaxLonAmt" value="0"/>&nbsp;<span id="" style="COLOR: red" />*</span></td>
</tr>
<tr><td class="ColumnHeading"><font face="Verdana" size="2">Minimum Term</font></td>
<td><input class=" DBfields Mndtry inputTXT IsNumberFields  Editval"  onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this);MaxTermChk('EditLRCN_MaxTerms','EditLRCN_MinTerms','EditLRCN_MinTerms')" onfocus="fnOnFocus(this)"  id="EditLRCN_MinTerms" name="EditLRCN_MinTerms" value="0" />&nbsp;<span id="" style="COLOR: red" />*</span></td>
<td class="ColumnHeading"><font face="Verdana" size="2">Maximum Term </font></td>
<td><input onchange="this.setAttribute('value', this.value);"   class="Mndtry DBfields IsNumberFields inputTXT  Editval " onblur="fnOnFocusOut(this);MaxTermChk('EditLRCN_MaxTerms','EditLRCN_MinTerms','EditLRCN_MinTerms')" onfocus="fnOnFocus(this)" maxlength="100" id="EditLRCN_MaxTerms" name="EditLRCN_MaxTerms" value="0"/>&nbsp;<span id="" style="COLOR: red" />*</span></td>
</tr>
<tr><td class="ColumnHeading"><font face="Verdana" size="2">Base Rate</font></td>
<td><input class="Mndtry DBfields inputTXT IsNumberFields  Editval"  onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="EditLRCN_BaseRate" name="EditLRCN_BaseRate" value="0" />&nbsp;<span id="" style="COLOR: red" />*</span></td>
<td class="ColumnHeading"><font face="Verdana" size="2">Level1</font></td>
<td><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"  class="Mndtry DBfields IsNumberFields inputTXT  Editval " onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="EditLRCN_Level1" name="EditLRCN_Level1"  value="0"/>&nbsp;<span id="" style="COLOR: red" />*</span></td>
</tr>
<tr><td class="ColumnHeading"><font face="Verdana" size="2">Level2</font></td>
<td><input class="Mndtry DBfields inputTXT IsNumberFields  Editval" style="TEXT-ALIGN:right"  onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="EditLRCN_Level2" name="EditLRCN_Level2" value="0" />&nbsp;<span id="" style="COLOR: red" />*</span></td>
<td class="ColumnHeading"><font face="Verdana" size="2">Level3</font></td>
<td><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"  class="Mndtry DBfields IsNumberFields inputTXT   Editval" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="EditLRCN_Level3" name="EditLRCN_Level3" value="0"/>&nbsp;<span id="" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td class="ColumnHeading"><font face="Verdana" size="2">Level4</font></td>
<td><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"  class="Mndtry DBfields IsNumberFields  inputTXT  Editval" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="EditLRCN_Level4" name="EditLRCN_Level4"  value="0"/>&nbsp;<span id="" style="COLOR: red" />*</span></td>
</tr>
<tr><td class="ColumnHeading"><font face="Verdana" size="2">Start Date</font></td>
<td><input class="Mndtry DBfields inputTXT IsNumberFields Editval ISDatefield DateFields ISPastDateFields" style="TEXT-ALIGN:left"  onchange="this.setAttribute('value', this.value);CompareDateFields('EditLRCN_StartDt','EditLRCN_EndDt')" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="EditLRCN_StartDt" name="EditLRCN_StartDt" value="" />&nbsp;<span id="" style="COLOR: red" />*</span>
<td class="ColumnHeading"><font face="Verdana" size="2">End Date</font></td>
<td><input onchange="this.setAttribute('value', this.value);CompareDateFields('EditLRCN_StartDt','EditLRCN_EndDt')" style="TEXT-ALIGN:left"  class="Mndtry DBfields  inputTXT  ISDatefield DateFields Editval ISPastDateFields" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="EditLRCN_EndDt" name="EditLRCN_EndDt" value=""/>&nbsp;<span id="Editenddtspan" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td class="ColumnHeading"><font face="Verdana" size="2">Flag</font></td>
<td><select onchange="this.setAttribute('value', this.value);AddFlagBasedMntry('EditLRCN_EndDt','EditLRCN_Flag','Editenddtspan')" style="TEXT-ALIGN:left"  class="Mndtry DBfields   inputTXT  Editval" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="EditLRCN_Flag" name="EditLRCN_Flag" value="">
<option value="">--Select--</option>
<option value="Active">Active</option>
<option value="InActive">InActive</option>
</select>&nbsp;<span id="" style="COLOR: red" />*</span></td>
</tr>
</tbody>
          
        <tr></tr>   
           <td style="width:25%" ></td>
            <td style="width:20%" ></td>
            <td style="width:25%" >
            
        <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="Update" type="button" value="Update"  />
            <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="Delete" type="button" value="Delete"  />
           
            </td> 
                 
                
        
  </tr>
  
  
  
</table></center>  
   <!--  <input type="button" style="display:none" onclick="FncallPageGrid(this,'Table2',{spname:'SAM_SFetchConfigGridData',Param:'',brid:'LSW_tMasLonRoiConfig|',MnuId:''},{0:$('#EditLRCN_PrCode'),1:$('#EditLRCN_PrName'),2:$('#EditLRCN_PurpCode'),3:$('#EditLRCN_PurpName'),4:$('#EditLRCN_MinLonAmt'),5:$('#EditLRCN_MaxLonAmt'),6:$('#EditLRCN_MinTerms'),7:$('#EditLRCN_MaxTerms'),8:$('#EditLRCN_BaseRate'),9:('#EditLRCN_Level1'),10:('#EditLRCN_Level2'),11:('#EditLRCN_Level3'),12:('#EditLRCN_Level4')});" id="BTNRoi" name="BTNRoi" />
<table id="Table2" name="Table2" class="display" border="0"></table> -->

    </div>
      </div>
     </div>
	 <input type="button" style="display:none" onclick="FncallPageGrid(this,'Table2',{spname:'LSW_SFetchRoiConfigGridData',Param:$('#EditLRCN_PrCode').val(),brid:$('#EditLRCN_PurpCode').val(),MnuId:$('#EditLRCN_SchmCode').val()},{0:$('#EditLRCN_Pkid'),1:$('#EditLRCN_PrCode'),2:$('#EditLRCN_PrName'),3:$('#EditLRCN_PurpCode'),4:$('#EditLRCN_PurpName'),5:$('#EditLRCN_SchmCode'),6:$('#EditLRCN_SchmName'),7:$('#EditLRCN_MinLonAmt'),8:$('#EditLRCN_MaxLonAmt'),9:$('#EditLRCN_MinTerms'),10:$('#EditLRCN_MaxTerms'),11:$('#EditLRCN_BaseRate'),12:('#EditLRCN_Level1'),13:('#EditLRCN_Level2'),14:('#EditLRCN_Level3'),15:('#EditLRCN_Level4'),16:('#EditLRCN_DtCreated'),17:('#EditLRCN_CreatedBy'),18:('#EditLRCN_DtModified'),19:('#EditLRCN_ModifiedBy'),20:('#EditLRCN_StartDt'),21:('#EditLRCN_EndDt'),22:('#EditLRCN_Flag')});" id="BTNRoi" name="BTNRoi" />
<table id="Table2" name="LoanRoiConfig|MasterGridLabel" class="display" style="width:100%"  border="0"></table>
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



<div style="display:none">
<table id="LoanRoiConfigGrdLbl">
<tr role="row"><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">ID</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="LRCN_PrCode: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Product Code</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="LRCN_PrName: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Product Name</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="LRCN_PurpCode: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Purpose Code</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="LRCN_PurpName: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Purpose Name</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="LRCN_MinLonAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Minimum Loan Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="LRCN_MaxLonAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Maximum Loan Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="LRCN_MinTerms: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Minimum Term</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="LRCN_MaxTerms: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Maximum Term</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="LRCN_BaseRate: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Base Rate</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="LRCN_Level1: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Level1</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="LRCN_Level2: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper"> Level2</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="LRCN_Level3: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Level3</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="LRCN_Level4: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Level4</div></th></tr>
</table>
</div>

<div id="popup" class="SearchList">
            <table id="Table1" class="display" border="0"></table>
        </div>
    </form>
</body>
</html>