<!--Main row-->
<!--Card-->
<div class="">

   <!--Admin panel-->
   <div class="admin-panel">
      <!-- Start -->  
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%@ page import = "ckeditor.EditData" %>
<%@page language="java" import="java.util.*" %>

<jsp:useBean id="editData" class="ckeditor.EditData" scope="session"/>
<jsp:setProperty name="editData" property="*"/>

<jsp:useBean id="engine" class="ckeditor.EditEngine" scope="session"/>
<jsp:setProperty name="engine" property="*"/>

<!--  <head>-->
    
   <!-- <meta http-equiv="X-UA-Compatible" content="IE=10">-->
 <!--   <title></title>-->
    <!-- Tell the browser to be responsive to screen width -->
<!--<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">-->
<!--<script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/jquery-1.11.1.min.js"></script>-->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
<!--<link href="ThemeproLO/Common/MDB/css/bootstrap.min.css" rel="stylesheet">
<link href="ThemeproLO/Common/MDB/css/mdb.min.css" rel="stylesheet">
<link href="ThemeproLO/Common/MDB/css/style.css" rel="stylesheet">
 <link href="ThemeproLO/Common/Alert/sweetalert.css" rel="stylesheet" />  
 <link href="ThemeproLO/Common/CSS/PageComments/styles.css" rel="stylesheet" />
 -->
 
 <!--Alert-->
 <link href="ThemeproLO/Common/Alert/sweetalert.css${DMY13}" rel="stylesheet" />
<!--<link rel="stylesheet" href="ThemeproLO/Common/scripts/UI/queuefrwd/ionicons.min.css">-->

<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.bootstrap.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.core.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.default.css${DMY13}">

  <link href="ThemeproLO/Common/jw/js/boxy/stylesheets/boxy.css${DMY13}" rel="stylesheet" type="text/css" />
 <link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />
 
<script type="text/javascript" src="ThemeproLO/Common/Alert/sweetalert.min.js${DMY13}"></script>
	
 <!--Alert-->


 <!--Text Editor-->
 
 <script src="ThemeproLO/ckeditor/ckeditor.js${DMY13}"></script>
<script src="ThemeproLO/ckeditor/BrowserIdentity.js${DMY13}"></script>
<script src="ThemeproLO/ckeditor/samples/js/sample.js${DMY13}"></script>

<!--FEB-->


	<link href="ThemeproLO/Common/FEP/css/bootstrap.min.css${DMY13}" rel="stylesheet"> 
	
	<!-- Material Design Bootstrap --> 
	<link href="ThemeproLO/Common/FEP/css/mdb.min.css${DMY13}" rel="stylesheet"> 
	
	<!-- Customizer --> 
	<link rel="stylesheet" href="ThemeproLO/Common/FEP/css/customizer.min.css${DMY13}"> 
	
	
	<!-- Your custom styles (optional) --> 
	<link href="ThemeproLO/Common/FEP/css/style.css${DMY13}" rel="stylesheet"> 
	
	<!-- <link href="ThemeproLO/Common/FEP/css/Grid/datatables.min.css" rel="stylesheet"> 
	<link href="ThemeproLO/Common/FEP/css/Grid/datatables-select.min.css" rel="stylesheet"> --> 
	
	<!-- SCRIPTS --> 
	
	<!-- JQuery
	<script type="text/javascript" src="ThemeproLO/Common/FEP/js/jquery-3.1.1.min.js"></script> 

<link href="ThemeproLO/Common/CSS/jquery-ui.css" rel="stylesheet" type="text/css"/>

 --> 


 <!-- </head>-->
  <!--<body>-->
   <form class="needs-validation" novalidate>
			<input id="processId"  name="processId" type="hidden" value=""/>
			   <script type="text/javascript">
			   ////request.getParameter("PrcsID")
 var Prcsid=$("#PrcsID").val();
 document.getElementById("processId").value=Prcsid;
  </script>
<% editData.ClearMtd(); %>
<% 

String Prcsid=request.getParameter("PrcsID");
String TblName="LSW_tLEATXTEDIT";
String Spname="Sam_sFetRichTxtEdt";
String AcvtID="";
String HistVar="";
editData.setTblName(TblName);
editData.setPrcsid(Prcsid); 
editData.setSpname(Spname);
editData.setAcvtID(AcvtID);
editData.setHistVar(HistVar); %>
<% editData.EditData1(); %>

    <input type="text" style="display:none"  id="BRID" name="BRID" />
    <input type="text" style="display:none"  id="LEDID" name="LEDID" />
    <input type="text" style="display:none"  id="CUSNAME" name="CUSNAME" />
    <input type="text" style="display:none"  id="lNAMT" name="lNAMT" />
    <input type="text" style="display:none"  id="MOBNO" name="MOBNO" />
	<input type="text" id="TEST_PRCSID" hidden="hidden" name="TEST_PRCSID" class="form-control TESTDBfields">
    <input type="text" id="TEST_ACTIVITYID" hidden="hidden" name="TEST_ACTIVITYID" class="form-control TESTDBfields">
    <input type="text" id="TEST_CREATEDBY" hidden="hidden" name="TEST_CREATEDBY" class="form-control TESTDBfields"> 
    <input type="text" id="TEST_DTCREATED" hidden="hidden" name="TEST_DTCREATED" class="form-control TESTDBfields">
    <input type="text" id="TEST_MODIFIEDBY" hidden="hidden" name="TEST_MODIFIEDBY" class="form-control TESTDBfields">
    <input type="text" id="TEST_DTMODIFIED" hidden="hidden" name="TEST_DTMODIFIED" class="form-control TESTDBfields">
    <input type="text" id="TEST_LPDSGRID" hidden="hidden" name="TEST_LPDSGRID" class="form-control TESTDBfields">  
    
 <input type="text" id="TEST_CUSTYPE" hidden="hidden" name="TEST_CUSTYPE" class="form-control TESTDBfields">  
 <input type="text" id="TEST_CONSTITUTION" hidden="hidden" name="TEST_CONSTITUTION" class="form-control TESTDBfields"> 
 <input type="text" id="TEST_SAVEORSUBMIT" hidden="hidden" name="TEST_SAVEORSUBMIT" class="form-control TESTDBfields"> 
 
<input type="text" id="TEST_PRVDT" hidden="hidden" name="TEST_PRVDT" class="form-control TESTDBfields"> 
	 <!--  card -->
      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
            </br>
			<div class="Btxt10">ENTER CUSTOMER DETAILS </div>
            </br>
               <div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
                   <input type="text" id="TEST_LEADID" disabled maxlength="30"  class="form-control TESTDBfields TESTMndtry " name="TEST_LEADID"> 
					 <label for ="TEST_LEADID" class="mdb-main-label BTxt9">LEAD ID <span class="MndtryAstr">*</span></label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_AMOUNTREQUIREMENT"  maxlength="30" disabled    class="form-control    NoSpecialChar TESTDBfields IsCURCommaFields  TESTMndtry" name="TEST_AMOUNTREQUIREMENT">
                     <label for ="TEST_TYPEOFEMPLOYMENT"class="mdb-main-label BTxt9">AMOUNT REQUIREMENT <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                  <input type="text" id="TEST_PAN" data-validate="TEST_CUSTYPE|TEST_CONSTITUTION" maxlength="30" class="form-control datalink NoSpecialChar IsPanFields TESTDBfields validate DataNormal valid" name="TEST_PAN">
                      <label for ="TEST_PAN"class="mdb-main-label BTxt9">PAN <span class="MndtryAstr">*</span> </label>
					  
                  </div>
				</div>
			    </div>
			<div class="form-row">
			    <div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_FIRSTNAME"  maxlength="100" class="form-control  TESTDBfields IsUpprCse NoSpecialChar IsAlphaFields TESTMndtry" name="TEST_FIRSTNAME">
                      <label for ="TEST_FIRSTNAME"class="mdb-main-label BTxt9 ReName">FIRST NAME  <span class="MndtryAstr">*</span> </label>
					  
                  </div>
				</div>
				<div class="col-md-4 INDF">
					<div class="md-form">
                     <input type="text" id="TEST_SECONDNAME"  maxlength="100" class="form-control INDM TESTDBfields TESTMndtry IsAlphaFields IsUpprCse" name="TEST_SECONDNAME">
                      <label for ="TEST_SECONDNAME"class="mdb-main-label BTxt9">LAST NAME <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				<div class="col-md-4 INDF">
			<div class="md-form">
       <input type="text" id="TEST_DOB" name="TEST_DOB" onblur="AgeVal(this,TEST_AGE);" maxlength="10" class="form-control INDM TESTDBfields IsNumberFields NoSpecialChar INDM ISDatefield  TESTDBfields TESTMndtry">
       <label for="TEST_DOB" class="">DOB<span class="MndtryAstr">*</span></label>
       <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
            </div>
				</div>
				<div class="col-md-4 INDF">
					<div class="md-form">
                     <input type="text" id="TEST_AGE"  maxlength="30"  disabled  class="form-control TESTDBfields INDM TESTMndtry" name="TEST_AGE">
                      <label for="TEST_TYPEOFEMPLOYMENT" class="mdb-main-label BTxt9 AGE"> AGE <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
					 <input type="text" id="TEST_MOBIVERIFY"  hidden="hidden" name="TEST_MOBIVERIFY" class="form-control TESTDBfields">
                     <button type="button" data-Validatearia="TEST_MOBIVERIFY" onclick="CheckMobValidKyc('TEST_MOBNO','OTP','TEST_LEADID','TEST_MOBIVERIFY','SMS')" data-validate="otp"  class="btn btn-Verify TEST_MOBNO waves-effect btn-yelInplain btn-sm  BTNVerify">Verify</button>
					 
                    <input type="text" id="TEST_MOBNO"  maxlength="10" class="form-control IsNumberFields TESTDBfields IsMobileFields TESTMndtry" name="TEST_MOBNO">
					<label for ="TEST_MOBNO" class="mdb-main-label BTxt9 ">MOBILE NO <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
					 <input type="text" id="TEST_EMAILVERIFY" hidden="hidden" maxlength="30" name="TEST_EMAILVERIFY" class="form-control TESTDBfields">
                    
					<button type="button" data-Validatearia="TEST_EMAILVERIFY" onclick="Saveverify();CheckMobValidKyc('TEST_EMAILID','OTP','TEST_LEADID','TEST_EMAILVERIFY','EMAIL')" data-validate="otp"  class="btn btn-Verify TEST_EMAILID waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>
					<!--<button type="button" data-Validatearia="TEST_EMAILVERIFY" onclick="VerfyMail(this,$('#TEST_EMAILID').val(),$('#TEST_LEADID').val());" data-validate="email"  class="btn btn-Verify TEST_EMAILID  waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>-->
                    <input type="text" id="TEST_EMAILID"  maxlength="100" class="form-control IsEmailFields TESTDBfields TESTMndtry" name="TEST_EMAILID">
                     <label for ="TEST_EMAILID"class="mdb-main-label BTxt9">EMAIL ID <span class="MndtryAstr ">*</span> </label>
                  </div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_ADDRESSLINE1"  maxlength="30"  class="form-control TESTDBfields TESTMndtry" name="TEST_ADDRESSLINE1">
                      <label for ="TEST_ADDRESSLINE1"class="mdb-main-label BTxt9">ADDRESS LINE 1 <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_ADDRESSLINE2"  maxlength="30" class="form-control TESTDBfields TESTMndtry" name="TEST_ADDRESSLINE2">
                      <label for="TEST_ADDRESSLINE2" class="mdb-main-label BTxt9">ADDRESS LINE 2 <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				<div class="col-md-4" style="display:none">
					<div class="md-form">
                    <input type="text" id="TEST_ADDRESSLINE3"  maxlength="30"  class="form-control TESTDBfields" name="TEST_ADDRESSLINE3">
                     <label for ="TEST_ADDRESSLINE3"class="mdb-main-label BTxt9">ADDRESS LINE 3 <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
        <input type="text" id="TEST_PINCODE"  maxlength="30" onchange= "fnOnFocusOut(this);Pindetls(this,'TEST_STATE','TEST_CITY')" class="form-control IsNumberFields IsPinFielde TESTDBfields TESTMndtry" name="TEST_PINCODE">
        <label for ="TEST_ADDRESSLINE3"class="mdb-main-label BTxt9">PINCODE <span class="MndtryAstr">*</span> </label>  
                  </div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_CITY"  maxlength="30" disabled class="form-control TESTDBfields TESTMndtry" name="TEST_CITY">
                      <label for ="TEST_CITY" class="mdb-main-label BTxt9">CITY <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_STATE"  maxlength="30" disabled  class="form-control TESTDBfields TESTMndtry" name="TEST_STATE">
                      <label for="TEST_CITY" class="mdb-main-label BTxt9">STATE <span class="MndtryAstr">*</span> </label> 
                   </div>
				</div>
			</div>
			<div class="form-row">
			   <div class="custom-control custom-radio custom-control-inline ">
                    <input type="checkbox" class="custom-control-input TESTDBfields"  id="TEST_AUREPCFP" name="TEST_AUREPCFP">
                    <label class="custom-control-label" for="TEST_AUREPCFP">I hereby authorise representative to contact for further proceedings.<span class="MndtryAstr"></span></label>
                </div>
			</div>		    
			<div class="form-row">
			   <div class="col-md-4">
		<div class="md-form">
                  <!--   <input type="text" id="TEST_STATUS"  maxlength="30"  class="form-control TESTDBfields TESTMndtry" name="TEST_STATUS">-->
		<select class="mdb-select md-form colorful-select dropdown-primary TESTDBfields TESTMndtry DataToFld"  id="TEST_STATUS" name="TEST_STATUS">
                         <option value="" selected>--Select--</option>
                              <option value="Hot"> Hot</option>
							  <option value="Warm"> Warm</option> 
                              <option value="Cool"> Cool</option> 
                        </select>
                      <label for="TEST_STATUS" class="mdb-main-label BTxt9">Lead status <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				 <div class="col-md-4">
					<div class="md-form">
    <input type="text" id="TEST_NCOMDOB" name="TEST_NCOMDOB"  onblur="ChkPrvDt();" maxlength="10"  class="form-control form-control ISPastDateFields TESTDBfields EDT IsNumberFields NoSpecialChar  ISDatefield  TESTMndtry">
    <label for="DOB" class="">Next comm date<span class="MndtryAstr">*</span></label>
    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
				</div>
			</div>
			<div class="form-row">
                <div class="col Btxt10">BUSINESS PROCESS</div>
            </div>
				 <div class="adjoined-bottom">
		<div class="grid-container">
			<div class="grid-width-100">
		       <textarea style="" id="TEST_TEBUSNESSPROG"	placeholder="Type the content here!"  class="Edtr Text TEXTEDITDSBL" name="TEST_TEBUSNESSPROG" data-maxlen="10000" maxlength="10000">
				<%= editData.getTxt1() %>  
				</textarea>
               <div class="invalid-tooltip"></div>
			</div>
		</div>
	</div>
		</div>
    <div class="form-row">
       <div class="col d-flex justify-content-center">
		  <button type="button" id="HiddenSave" hidden="hidden" data-aria="LSW_TLEAD5CR|TEST|TEST_LEADID" class="btn btn-Syeloutline waves-effect waves-light FormSave">EmailSave</button>
		  <button type="button" id="LeadSave" data-aria="LSW_TLEAD5CR|TEST|TEST_LEADID" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
          <button type="button" id="Submit" data-aria="LSW_TLEAD5CR|TEST|TEST_LEADID" class="btn btn-Syel waves-effect waves-light FormSave">Submit</button>   
        </div>
    </div>
<script>
initSample("TEST_TEBUSNESSPROG");
</script>
            </form>
         </div>
      </div>
      <!-- card -->

      </br>
   </div>
    <style>
   .form-row>.col, .form-row>[class*=col-] {
        padding-right: 5px;
      }
 </style>
         
   <!-- Admin Panel -->
   <table style="display:none" id="GridTable2">
      <thead>
      	<th>LEAD_LEADID</th>
         <th>LEAD_CUSNAME</th>
         <th>LEAD_MOBNO</th>
         <th>LEAD_LONNO</th>
         <th>LEAD_SRC</th>
         <th>LEAD_AGE</th>
         <th>LEAD_ACTN</th>
         <th>LEAD_REMRK</th>
         <th>LEAD_SRCID</th>
         <th>LEAD_SRCTYP</th>
         <th>LEAD_BRID</th>
         <th>LEAD_ALLOCTO</th>
         <th>LEAD_PRCSID</th>
      </thead>
   </table>
   
    <table style="display:none" id="GridLPDSTable">
      <thead>
      	 <th>LPSE_NAME</th>
         <th>LPSE_SHAREHOLD</th>
         <th>LPSE_BRNIOWNER</th>
         <th>LPSE_LONSTRU</th>
      </thead>
   </table>
   
   <div class="fixed-action-btn FileInitiation" id="draggable" style="bottom: 45px; right: 24px;display:none">
        <a type="button" id="LCR" class="btn-floating btn-large red">
            <i class="fa fa-plus"></i>
        </a></div>
	<a type="button" id="Popup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#basicExampleModal">
            <i class="fa fa-plus"></i>
        </a>
        <!-- Modal -->
<!-- Modal -->

<div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:840px" role="document">
    <div class="modal-content">
     <div class="modal-header">
        <div class="Btxt10">SELECT DETAILS</div>
        <a href="#">  
        <img id="LeadPopupClose" style="display:none" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>        
     </div>  
    <div class="modal-body">    
    <div class="">
    <!-- Card body -->
     <div class="">  
        <form>          
	      <input type="text" id="LPOP_BRID" hidden="hidden"  name="LPOP_BRID" class="LPOPDBfields ">
		  <input type="text" id="LPOP_SOURCEID" hidden="hidden"  name="LPOP_SOURCEID" class=" LPOPDBfields ">
		  <input type="text" id="LPOP_LEADID" hidden="hidden"  name="LPOP_LEADID" class=" LPOPDBfields ">
		  <input type="text" id="LPOP_PRDID" hidden="hidden"  name="LPOP_PRDID" class=" LPOPDBfields ">
           <div class="form-row">
            <div class="col">
            <div class="md-form  MNST">
               <div class="select-radio INDIMNDRY "> 
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCusType();" value="Individual" id="Indvdl" name="LPOP_CUSTYPE">
                      <label class="custom-control-label" for="Indvdl">Individual</label>
                   </div>
                   <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCusType();getConstitution();" value="Non-Individual" id="NonIndvdl" name="LPOP_CUSTYPE">
                      <label class="custom-control-label" for="NonIndvdl">Non-Individual</label>
                  </div>
              </div>
               <label class="mdb-main-label BTxt9">Customer Type<span class="MndtryAstr">*</span></label>      
           </div>
          </div>
	     <div class="col">
           <div class="md-form">
              <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields LPOPMndtry " onchange="getPurposeofLoan()" id="LPOP_VERTICAL" name="LPOP_VERTICAL">
                 <option value="" selected>--Select--</option>
         <!--  <option value="MSME">MSME</option>
		  <option value="MSME - ALLIANCE">MSME_Alliance</option>
		  <option value="UCV">UCV</option>
		  <option value="UCV - ECOSYSTEM">UCV_Ecosystem </option>-->
              </select>
                <label class="mdb-main-label BTxt9">Vertical <span class="MndtryAstr">*</span></label>
           </div>
        </div>
       </div>
           <div class="form-row">
				<div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields LPOPMndtry DataToFld" onchange="CheckSource();" searchable="Search here.." data-change="LPOP_BRID"  id="LPOP_BRANCH" name="LPOP_BRANCH">
                        <!--  <option value="" selected>--Select--</option>
                              <option value="Perangudi">Perangudi</option>
                              <option value="Anakapalli">Anakapalli</option> -->
                        </select>
                        <label class="mdb-main-label BTxt9">Branch <span class="MndtryAstr">*</span></label>
                </div>
                </div> 
                <div class="col">
                <div class="md-form">
                        <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields PROIIDROP LPOPMndtry" onchange="getProductOpt(); GetSubLoan(); " id="LPOP_LONTYPE" name="LPOP_LONTYPE">
                        <!--<option value="" selected>--Select--</option>
                        <option value="Term Loan">Term Loan</option>
                        <option value="Overdraft">Overdraft</option>
                        <option value="Bill discounting">Bill discounting</option>
                        <option value="WCDL & DLOD">WCDL and DLOD</option>-->
						</select>
                        <label class="mdb-main-label BTxt9">Type of Loan <span class="MndtryAstr">*</span></label>
                </div>  
                </div>
           </div>
           <div class="form-row">
		        <div class="col-md-6">
                 <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields DataToFld"  data-change="LPOP_PRDID" id="LPOP_PRODUCT" name="LPOP_PRODUCT">
                           <option value="" selected>--Select--</option> 
                        </select>
                        <label class="mdb-main-label BTxt9">Product<span class="MndtryAstr">*</span></label> 
                  </div>
               </div>
				<div class="col-md-6">
                 <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields  " id="LPOP_SUBLONTYPE" name="LPOP_SUBLONTYPE">
                        <option value="" selected>--Select--</option> 
				<!--	<option value="">Adhoc</option>
						<option value="">Balance Transfer</option>
						<option value="">Fresh</option>
						<option value="">Renewal at Existing</option>
						<option value="">Renewal with enhancement</option>
						<option value="">Renewal with limit Decrease</option>  -->
                        </select>
                        <label class="mdb-main-label BTxt9">Sub Loan Type <span class="MndtryAstr">*</span></label> 
                  </div>
               </div>
			</div>
			<div class="form-row">
			   <div class="col-md-6">
                <div class="md-form">
				<input type="text" id="LPOP_LNAMT"  maxlength="30" onchange="ChkAmt();"  class="form-control IsCURCommaFields LPOPDBfields NoSpecialChar LPOPMndtry" name="LPOP_LNAMT">
                 <label class="mdb-main-label BTxt9">Loan Amount <span class="MndtryAstr">*</span></label>
                   </div>
               </div>
			   <div class="col-md-6">
                  <div class="md-form">
                    <input type="text" id="LPOP_PURPOSEOFLN"  maxlength="30"  class="form-control LPOPDBfields NoSpecialChar LPOPMndtry IsAlphaFields" name="LPOP_PURPOSEOFLN">
                    <label class="mdb-main-label BTxt9">Purpose of Loan <span class="MndtryAstr">*</span></label>
                 </div>
               </div>
			</div>
			
			<!-- <div class="col-md-6 DIRDISB" style="display:none">
                   <div class="md-form">
                   <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields DataToFld" searchable="Search here.." data-change="LDIN_SOURCEID"   

id="LDIN_CONECTNAME" name="LDIN_CONECTNAME">
                   <option value="" selected>--Select--</option>
                         </select>
                     <label for="" class="mdb-main-label BTxt9">Source Name <span class="MndtryAstr">*</span></label>
                   
                   
                  </div>
              </div> 
			   </div>
              <div class="col-md-6 PRIME">
                   <div class="md-form">
                         <input type="text" id="LDIN_PRIMLONID" maxlength="18" class="form-control NoSpecialChar LPOPDBfields" onblur="ChkPrimLoanID();GetOldPrcsid();" 

name="LDIN_PRIMLONID">
                         <input type="text" id="OLDPRCSID" class="form-control LPOPDBfields" hidden="hidden" name="OLDPRCSID">
                         <label for="LDIN_PRIMLONID" class="">Primary Loan ID/Application ID<span class="MndtryAstr">*</span></label>
                         <img src="ThemeproLO/Common/Images/search.png" style="display:none" onclick="GetExistApplcant();" class="FieldIcon"/>
                    </div>
               </div>
           </div>  
		   <div class="form-row">
			<div class="col-md-6 PRIME">
                   <div class="md-form">
                         <input type="text" id="LDIN_PRIMLONID" maxlength="18" class="form-control NoSpecialChar LPOPDBfields" onblur="ChkPrimLoanID();GetOldPrcsid();" 

name="LDIN_PRIMLONID">
                         <input type="text" id="OLDPRCSID" class="form-control LPOPDBfields" hidden="hidden" name="OLDPRCSID">
                         <label for="LDIN_PRIMLONID" class="">Primary Loan ID/Application ID<span class="MndtryAstr">*</span></label>
                         <img src="ThemeproLO/Common/Images/search.png" style="display:none" onclick="GetExistApplcant();" class="FieldIcon"/>
                    </div>
               </div>
		   </div>
           <div class="form-row">
             <div class="col-md-6 CONS">
                <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields " id="LDIN_CONSTITUTION" name="LDIN_CONSTITUTION">
                        <option value="" selected>--Select--</option>
                             <option value="Partnership firms">Partnership firms</option>
                              <option value="LLP">LLP</option>
                              <option value="HUF">HUF</option>
			      			  <option value="Private Ltd">Private Ltd</option>
			      			  <option value="Public Ltd">Public Ltd</option>
			      			  <option value="Proprietorship">Proprietorship</option>
                        </select>
                        <label class="mdb-main-label BTxt9">Constitution <span class="MndtryAstr"></span></label>
                   </div>
               </div>
				
           </div>-->
		  <div class="form-row">
		      <div class="col-md-6">
                  <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields PROIIDROP LPOPMndtry "  onchange="CheckSource();"  id="LPOP_SOURCEBY" name="LPOP_SOURCEBY">
                        <option value="" selected>--Select--</option>
                        <option value="Connector">Connector</option>
                        <option value="DSA">DSA</option>
                        <option value="DST">DST</option>
                        <option value="Direct">Direct</option>
                        </select>
                  <label class="mdb-main-label BTxt9">Sourced By <span class="MndtryAstr">*</span></label>
                </div>
			  </div>
		      <div class="col-md-6 DIRDISB">
                 <div class="md-form">
                      <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields LPOPMndtry" id="LPOP_SOURCENAME" name="LPOP_SOURCENAME">
                        <option value="" selected>--Select--</option>
                        </select>
                        <label class="mdb-main-label BTxt9">Source Name  <span class="MndtryAstr">*</span></label> 
                  </div>
               </div>
			   <div class="col-md-6 CONS">
                 <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields" onchange="Checkconstion();" id="LPOP_CONSTITUTION" name="LPOP_CONSTITUTION">
                        <option value="" selected>--Select--</option> 
                        </select>
                        <label class="mdb-main-label BTxt9">Constitution <span class="MndtryAstr">*</span></label> 
                  </div>
               </div>    
              <div class="col-md-6 PROP"  style="display:none">
                <div class="md-form">
				<input type="text" id="LPOP_PROPRISHIP"  maxlength="30"  class="form-control  LPOPDBfields  NoSpecialChar " name="LPOP_PROPRISHIP">
                 <label for="LPOP_PROPRISHIP" class="mdb-main-label BTxt9">Proprietor Name<span class="MndtryAstr"></span></label>
				 
                   </div>
               </div>		   
           </div> 
		   
       <div class="form-row">
                <div class="col Grid">
                 <input type="button" style="display:none" class="DashTrg" onclick="FncallFEPDashLrgDataWP(this,'Table2',

{spname:'LSW_SGetApplDetls',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'',MnuId:''},{0:$('#LPOP_PRIMLONID'),2:

$('#OLDPRCSID')});" id="BTNTRIGAPPL" name="BTNTRIGAPPL" />
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                    </table>
                </div> 
            </div> 
        </form>
      </div> 
    </div>
      </div> 
      <div class="modal-footer align-middle">
     <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
      <button type="button" id="InitWF"   class="btn btn-yel Btxt2">Done</button>
      </div>
    </div>
  </div>
</div>


<a type="button" id="MobPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#MobModal">
 <i class="fa fa-plus"></i> </a>
                             
<div class="modal fade" id="MobModal" tabindex="-1" role="dialog" aria-labelledby="MobModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:350px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10 TILE">Mobile OTP Verification</div> 
   
   <a href="#"><img id="MOBPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
        
      </div>  
      <div class="modal-body">
        
         <div class="">


    <!-- Card body -->
     <div class="">
            
         <form >
        	</br>
        	</br>
           <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
           			  <input type="text" id="RequestId" hidden="hidden" class="form-control">
           			  <input type="text" id="HdnFieldId" hidden="hidden" class="form-control">
					  <input type="text" id="FldVal" hidden="hidden" class="form-control">
           			  <input type="text" maxlength="10" id="MobOTP" class="form-control NoSpecialChar">
                      <label for="cin" class="">Enter the OTP<span class="MndtryAstr">*</span></label>
           			</div>
           		 </div>
           </div>
      <!-- grid  show -->

    <!--Main layout-->
    
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <!--<button type="button" id="Mobotp" onclick="CheckMobValidKyc('MobOTP','status','CADI_MOBNOIVERIFY','MOBI','','','')" class="btn btn-yel Btxt2">Confirm</button>-->
		<button type="button" id="EMAILOTP" onclick="CheckMobValidKyc('MobOTP','status','MOBI','TEST_EMAILVERIFY ','EMAIL','','')" class="btn btn-yel Btxt2">Confirm</button>
		<button type="button" id="MOBOTP" onclick="CheckMobValidKyc('MobOTP','status','MOBI','TEST_MOBIVERIFY','SMS','','')" class="btn btn-yel Btxt2">Confirm</button>
  
      </div>
    </div>
  </div>
  </div>

 <!-- <button type="button" style="display:none" id="InitWF1" class="btn btn-yel Btxt2">Done</button>
   END -->
</div> 
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/DashBoard/Script/MyApplication/ManageLead/Script/LoadSubmit/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/DashBoard/Script/MyApplication/ManageLead/Script/Validation/Validation.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>

