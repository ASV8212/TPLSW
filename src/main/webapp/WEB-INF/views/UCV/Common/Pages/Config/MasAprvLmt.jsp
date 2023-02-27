<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Master Approval Limit</title>
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

<script src="ThemeproLO/Common/scripts/Config/MasAprvLmt/LoadSubmit/LoadSubmit.js${DMY13}" type="text/javascript"></script>

<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/QueueTabs.js${DMY13}"></script>
<script src="ThemeproLO/Common/scripts/Config/MasAprvLmt/Validation/Validation.js${DMY13}" type="text/javascript"></script>

</head>
<body bgcolor="white">
<form id="MasterApvlLmt "  height:640px" name="Approval Limit "  action=""  method="POST">
       <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                <span>Master Approval Limit </span></div>
             <input id="LoggedInUser" class="DBfields " name="LoggedInUser" type="hidden" value=""/>
             <input id="APLT_DtModified" class="DBfields " name="APLT_DtModified" type="hidden" value=""/>
             <input id="APLT_DtCreated" class="DBfields " name="APLT_DtCreated" type="hidden" value=""/>
             <input id="APLT_ModifiedBy" class="DBfields " name="APLT_ModifiedBy" type="hidden" value=""/>
             <input id="APLT_CreatedBy" class="DBfields " name="APLT_CreatedBy" type="hidden" value=""/>
			  <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>      
			 <input id="ActivityID" class="DBfields"  name="ActivityID" type="hidden"  value=""/>
		          
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
<tr><td width="25%" class="ColumnHeading"><font face="Verdana" size="2">Product Code </font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields Newdetls" disabled onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="NewAPLT_PrCode" name="NewAPLT_PrCode" value="" />&nbsp;<img src="ThemeproLO/Common/Images/search1.png" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'LSW_sMasProd',Param:'',brid:'',MnuId:''},{0:$('#NewAPLT_PrCode'),1:$('#NewAPLT_PrName')});" /><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">Product Name </font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" disabled value="" class="DBfields inputTXT" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="NewAPLT_PrName" name="NewAPLT_PrName"/></td>
</tr>
<tr><td width="25%" class="ColumnHeading"><font face="Verdana" size="2">Purpose Code </font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields Newdetls" disabled onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="NewAPLT_PurpCode" name="NewAPLT_PurpCode" value="" />&nbsp;<img src="ThemeproLO/Common/Images/search1.png" class="find1" onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'LSW_sMasPurp',Param:$('#NewAPLT_PrCode').val(),brid:'',MnuId:''},{0:$('#NewAPLT_PurpCode'),1:$('#NewAPLT_PurpName')});" /><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">Purpose Name</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" disabled value="" class="DBfields inputTXT" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="NewAPLT_PurpName" name="NewAPLT_PurpName"/></td>
</tr>
<tr><td width="25%" class="ColumnHeading"><font face="Verdana" size="2">BM Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="NewAPLT_BMSancAmt" name="NewAPLT_BMSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">BM Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"   class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" onkeyup="this.setAttribute('value', this.value);" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="NewAPLT_BMRejAmt" name="NewAPLT_BMRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">CO Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="NewAPLT_COSancAmt" name="NewAPLT_COSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td class="ColumnHeading"><font face="Verdana" size="2">CO Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"   class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" onblur="fnOnFocusOut(this)" onkeyup="this.setAttribute('value', this.value);" onfocus="fnOnFocus(this)" maxlength="100" id="NewAPLT_CORejAmt" name="NewAPLT_CORejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">AGM Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="NewAPLT_AGMSancAmt" name="NewAPLT_AGMSancAmt" value="0"/>&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">AGM Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"  class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" onkeyup="this.setAttribute('value', this.value);" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="NewAPLT_AGMRejAmt" name="NewAPLT_AGMRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">DGM Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="NewAPLT_DGMSancAmt" name="NewAPLT_DGMSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">DGM Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"  class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" onkeyup="this.setAttribute('value', this.value);" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="NewAPLT_DGMRejAmt" name="NewAPLT_DGMRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">GM Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="NewAPLT_GMSancAmt" name="NewAPLT_GMSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td class="ColumnHeading"><font face="Verdana" size="2">GM Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right" class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" onkeyup="this.setAttribute('value', this.value);" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="NewAPLT_GMRejAmt" name="NewAPLT_GMRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">CGM Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="NewAPLT_CGMSancAmt" name="NewAPLT_CGMSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">CGM Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right" class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="NewAPLT_CGMRejAmt" name="NewAPLT_CGMRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">ED Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="NewAPLT_EDSancAmt" name="NewAPLT_EDSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">ED Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right" class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" onkeyup="this.setAttribute('value', this.value);" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="NewAPLT_EDRejAmt" name="NewAPLT_EDRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">MD Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="NewAPLT_MDSancAmt" name="NewAPLT_MDSancAmt" value="0"/>&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">MD Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right" class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" onkeyup="this.setAttribute('value', this.value);" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="NewAPLT_MDRejAmt" name="NewAPLT_MDRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">Committe Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="NewAPLT_CommitteSancAmt" name="NewAPLT_CommitteSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">Committe Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right" class="DBfields inputTXT IsNumberFields IsCURCommaFields Newdetls AddZero" onkeyup="this.setAttribute('value', this.value);" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="NewAPLT_CommitteRejAmt" name="NewAPLT_CommitteRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>

<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">Start Date</font></td>
<td width="25%"><input class="DBfields DateFields inputTXT ISPastDateFields Newdetls"  onchange="this.setAttribute('value', this.value);CompareDateFields(NewAPLT_StartDt,NewAPLT_EndDt);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="NewAPLT_StartDt" name="NewAPLT_StartDt" value="" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">End Date</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);CompareDateFields(NewAPLT_StartDt,NewAPLT_EndDt);"  class="DBfields DateFields inputTXT ISPastDateFields Newdetls" onkeyup="this.setAttribute('value', this.value);" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="NewAPLT_EndDt" name="NewAPLT_EndDt" value=""/><span id="Newenddtmndtry" style="COLOR: red" />*</span></td>
</tr>


<tr>
<td class="ColumnHeading" width="25%"><font face="Verdana" size="2">Flag</font></td>
                     <td width="25%"><select onchange="this.setAttribute('value', this.value);mndtry($('#NewAPLT_EndDt'),$('#NewAPLT_Flag').val(),$('#Newenddtmndtry'));" class=" DBfields Newdetls inputTXT" onblur="fnOnFocusOut(this)"  onfocus="fnOnFocus(this)" size="1" id="NewAPLT_Flag" name="NewAPLT_Flag" value="">
                    <option value="">--Select--</option>
                     <option value="Active">Active</option>
                     <option value="Inactive">Inactive</option>              
                     </select><span id="span_imgproductid" style="COLOR: red" />*</span></td></tr>
  <tr></tr>   
  <tr></tr>   
 <tr>
          <tr></tr>   
          
           <td style="width:25%">
            
            </td>
           <td style="width:5%">
        </td>
       
            <td style="width:25%" >
          <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="save" type="button" value="SAVE"  />
            </td> 
            
             <td style="width:5%">
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
 <center>
<table class="xdTable" cellspacing="2" cellpadding="2" width="100%" border="0">
<tr><td width="25%" class="ColumnHeading"><font face="Verdana" size="2">Product Code </font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields  Editdetls" disabled onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="APLT_PrCode" name="APLT_PrCode" value="" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">Product Name </font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" disabled value="" class="DBfields inputTXT" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="APLT_PrName" name="APLT_PrName"/></td>
</tr>
<tr><td width="25%" class="ColumnHeading"><font face="Verdana" size="2">Purpose Code </font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields Editdetls" disabled onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="APLT_PurpCode" name="APLT_PurpCode" value="" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">Purpose Name</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" disabled value="" class="DBfields inputTXT" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="APLT_PurpName" name="APLT_PurpName"/></td>
</tr>
<tr><td width="25%" class="ColumnHeading"><font face="Verdana" size="2">BM Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="APLT_BMSancAmt" name="APLT_BMSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">BM Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"   class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" onkeyup="this.setAttribute('value', this.value);" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="APLT_BMRejAmt" name="APLT_BMRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">CO Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="APLT_COSancAmt" name="APLT_COSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td class="ColumnHeading"><font face="Verdana" size="2">CO Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right" class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" onblur="fnOnFocusOut(this)" onkeyup="this.setAttribute('value', this.value);" onfocus="fnOnFocus(this)" maxlength="100" id="APLT_CORejAmt" name="APLT_CORejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">AGM Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="APLT_AGMSancAmt" name="APLT_AGMSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">AGM Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right" class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" onkeyup="this.setAttribute('value', this.value);" maxlength="100" id="APLT_AGMRejAmt" name="APLT_AGMRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">DGM Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="APLT_DGMSancAmt" name="APLT_DGMSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">DGM Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right" class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" onkeyup="this.setAttribute('value', this.value);" maxlength="100" id="APLT_DGMRejAmt" name="APLT_DGMRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">GM Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="APLT_GMSancAmt" name="APLT_GMSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td class="ColumnHeading"><font face="Verdana" size="2">GM Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right" class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" onkeyup="this.setAttribute('value', this.value);" maxlength="100" id="APLT_GMRejAmt" name="APLT_GMRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">CGM Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="APLT_CGMSancAmt" name="APLT_CGMSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">CGM Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right" class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero"  onkeyup="this.setAttribute('value', this.value);" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" maxlength="100" id="APLT_CGMRejAmt" name="APLT_CGMRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">ED Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="APLT_EDSancAmt" name="APLT_EDSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">ED Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"  class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" onkeyup="this.setAttribute('value', this.value);" maxlength="100" id="APLT_EDRejAmt" name="APLT_EDRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">MD Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="APLT_MDSancAmt" name="APLT_MDSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">MD Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"  class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" onkeyup="this.setAttribute('value', this.value);" maxlength="100" id="APLT_MDRejAmt" name="APLT_MDRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">Committe Sanction Amount</font></td>
<td width="25%"><input class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" style="TEXT-ALIGN:right" onchange="this.setAttribute('value', this.value);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="APLT_CommitteSancAmt" name="APLT_CommitteSancAmt" value="0" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">Committe Rejection Amount</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);" style="TEXT-ALIGN:right"  class="DBfields inputTXT IsNumberFields IsCURCommaFields Editdetls AddZero" onblur="fnOnFocusOut(this)" onkeyup="this.setAttribute('value', this.value);" onfocus="fnOnFocus(this)" maxlength="100" id="APLT_CommitteRejAmt" name="APLT_CommitteRejAmt" value="0"/><span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
</tr>
<tr>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">Start Date</font></td>
<td width="25%"><input class="DBfields DateFields inputTXT  Editdetls ISPastDateFields"  onchange="this.setAttribute('value', this.value);CompareDateFields(APLT_StartDt,APLT_EndDt);" onkeyup="this.setAttribute('value', this.value);" onblur=" fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="APLT_StartDt" name="APLT_StartDt" value="" />&nbsp;<span id="span_imgcustbrname" style="COLOR: red" />*</span></td>
<td width="25%" class="ColumnHeading"><font face="Verdana" size="2">End Date</font></td>
<td width="25%"><input onchange="this.setAttribute('value', this.value);CompareDateFields(APLT_StartDt,APLT_EndDt);"  class="DBfields DateFields inputTXT  Editdetls ISPastDateFields" onkeyup="this.setAttribute('value', this.value);" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)"  id="APLT_EndDt" name="APLT_EndDt" value=""/><span id="Editenddtmndtry" style="COLOR: red" />*</span></td>
</tr>


<tr>
<td class="ColumnHeading" width="25%"><font face="Verdana" size="2">Flag</font></td>
                     <td width="25%"><select onchange="this.setAttribute('value', this.value);mndtry($('#APLT_EndDt'),$('#APLT_Flag').val(),$('#Editenddtmndtry'));" class="DBfields inputTXT Editdetls" onblur="fnOnFocusOut(this)" onfocus="fnOnFocus(this)" size="1" id="APLT_Flag" name="APLT_Flag" value="">
                    <option value="">--Select--</option>
                     <option value="Active">Active</option>
                     <option value="Inactive">Inactive</option>              
                     </select><span id="span_imgproductid" style="COLOR: red" />*</span></td></tr>
    <tr></tr>      

 <tr> 
        
         <td style="width:25%">
            
            </td>
           <td style="width:5%">
        </td>
       
            <td style="width:25%" >
            
        <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="Update" type="button" value="Update"  />
            <input onkeyup="this.setAttribute('value', this.value);" class="buttonPRS" id="Delete" type="button" value="Delete"  />
           
            </td>     
  </tr>
  
</table></center>  
   
      </div>
      </div>
     </div>
	  <input type="button" style="display:none" onclick="FncallPageGrid(this,'Table2',{spname:'SAM_SFetchConfigGridData',Param:'',brid:'LSW_tMasAprvLmt|',MnuId:''},{0:$('#APLT_PrCode'),1:$('#APLT_PrName'),2:$('#APLT_PurpCode'),3:$('#APLT_PurpName'),4:$('#APLT_BMSancAmt'),5:$('#APLT_BMRejAmt'),6:$('#APLT_COSancAmt'),7:$('#APLT_CORejAmt'),8:$('#APLT_AGMSancAmt'),9:$('#APLT_AGMRejAmt'),10:$('#APLT_DGMSancAmt'),11:$('#APLT_DGMRejAmt'),12:$('#APLT_GMSancAmt'),13:$('#APLT_GMRejAmt'),14:$('#APLT_CGMSancAmt'),15:$('#APLT_CGMRejAmt'),16:$('#APLT_EDSancAmt'),17:$('#APLT_EDRejAmt'),18:$('#APLT_MDSancAmt'),19:$('#APLT_MDRejAmt'),20:$('#APLT_CommitteSancAmt'),21:$('#APLT_CommitteRejAmt'),26:$('#APLT_StartDt'),27:$('#APLT_EndDt'),28:$('#APLT_Flag')});" id="BTNMasAprvLmt" name="BTNMasAprvLmt" />
	  <table id="Table2"  class="display" name="MasterAproLimit|MasterGridLabel" border="0"></table>
    </article>
    
  </section>
</section>
     
     <div class="Scroll" id="Outer-Div">
      <div class="cls_Table1Container" id="table-scroll">
    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Tablename">
    </table>
    </div>
    </div>
	
	
	
<div style="display:none">
<table id="MasterAproLimitGrdLbl">
<tr role="row"><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_PrCode: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Product Code</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_PrName: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Product Name</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_PurpCode: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Purpose Code</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_PurpName: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Purpose Name</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_BMSancAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">BM Sanction Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_BMRejAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">BM Rejection Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_COSancAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">CO Sanction Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_CORejAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">CO Rejection Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_AGMSancAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">AGM Sanction Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_AGMRejAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">AGM Rejection Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_DGMSancAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">DGM Sanction Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_DGMRejAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">DGM Rejection Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_GMSancAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">GM Sanction Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_GMRejAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">GM Rejection Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_CGMSancAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">CGM Sanction Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_CGMRejAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">CGM Rejection Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_EDSancAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">ED Sanction Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_EDRejAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">ED Rejection Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_MDSancAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">MD Sanction Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_MDRejAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">MD Rejection Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_CommitteSancAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Committe Sanction Amount</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="APLT_CommitteRejAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Committe Rejection Amount</div></th></tr>
</table>
</div>


<div id="popup" class="SearchList">
            <table id="Table1" class="display" border="0"></table>
        </div>
        </div>
    </form>
</body>
</html>