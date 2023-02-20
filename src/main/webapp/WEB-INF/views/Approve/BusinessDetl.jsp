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
 <link href="ThemeproLO/Common/Alert/sweetalert.css" rel="stylesheet" />
<!--<link rel="stylesheet" href="ThemeproLO/Common/scripts/UI/queuefrwd/ionicons.min.css">-->

<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.bootstrap.css">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.core.css">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.default.css">

  <link href="ThemeproLO/Common/jw/js/boxy/stylesheets/boxy.css" rel="stylesheet" type="text/css" />
 <link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css" rel="stylesheet" type="text/css" />
 
<script type="text/javascript" src="ThemeproLO/Common/Alert/sweetalert.min.js"></script>
	
 <!--Alert-->


 <!--Text Editor-->
 
 <script src="ThemeproLO/ckeditor/ckeditor.js"></script>
<script src="ThemeproLO/ckeditor/BrowserIdentity.js"></script>
<script src="ThemeproLO/ckeditor/samples/js/sample.js"></script>

<!--FEB-->


	<link href="ThemeproLO/Common/FEP/css/bootstrap.min.css" rel="stylesheet"> 
	
	<!-- Material Design Bootstrap --> 
	<link href="ThemeproLO/Common/FEP/css/mdb.min.css" rel="stylesheet"> 
	
	<!-- Customizer --> 
	<link rel="stylesheet" href="ThemeproLO/Common/FEP/css/customizer.min.css"> 
	
	
	<!-- Your custom styles (optional) --> 
	<link href="ThemeproLO/Common/FEP/css/style.css" rel="stylesheet"> 
	
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
 var Prcsid=$("#PrcsID").val();
 document.getElementById("processId").value=Prcsid;
  </script>
<% editData.ClearMtd(); %>
<% 
String Prcsid=request.getParameter("PrcsID")+"|"+request.getParameter("PrMs6");
String TblName="LSW_tTEAPPRBUSIFIRM";
String Spname="Sam_sFetRichTxtEdt";
String AcvtID="";
String HistVar="";
editData.setTblName(TblName);
editData.setPrcsid(Prcsid); 
editData.setSpname(Spname);
editData.setAcvtID(AcvtID);
editData.setHistVar(HistVar); %>
<% editData.EditData1(); %>





		</br>
					   <div class="">
                            <!--Admin panel-->
     <div class="admin-panel">
	  <div class="row">
	<div class="col-lg-12">
		  <ul title="Firm" data-popup="No" class="nav FormPageMultiTab">
<li id="ApprlNt" value="ApprlNt" title="ApprlNt" class="nav-item active"><a><div class="nav-link" href="#">Approval Note</div></a></li>		  
    ${SUBPAGETABDATA}
       <!-- <li id="Co-Applicant1" value="" title = "Co-Applicant1" class="nav-item  active">
       <a> <div class="nav-link" href="#">Co-Applicant 1</div></a>
      </li>        
      <li id=""  value="Add" title = "" class="nav-item FormPageMultiTabAdd">
     <a> <div class="nav-link" href="#">+ Add</div>  </a>
      </li>
      --> 
      </ul>
	</div>
</div>
</br> 
 <div class="card CardNS">
    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0">
      </br></br>
            <form> 
			    <input type="text" id="ABFD_PRCSID" hidden="hidden" name="ABFD_PRCSID" class="form-control ABFDDBfields ">
                <input type="text" id="ABFD_ACTIVITYID" hidden="hidden" name="ABFD_ACTIVITYID" class="form-control ABFDDBfields ">
                <input type="text" id="ABFD_CREATEDBY" hidden="hidden" name="ABFD_CREATEDBY" class="form-control ABFDDBfields ">
                <input type="text" id="ABFD_DTCREATED" hidden="hidden" name="ABFD_DTCREATED" class="form-control  ABFDDBfields">
                <input type="text" id="ABFD_MODIFIEDBY" hidden="hidden" name="ABFD_MODIFIEDBY" class="form-control ABFDDBfields ">
                <input type="text" id="ABFD_DTMODIFIED" hidden="hidden"  name="ABFD_DTMODIFIED" class="form-control ABFDDBfields ">
                <input type="text" id="ABFD_FIRMCONT" hidden="hidden"  name="ABFD_FIRMCONT" class="form-control ABFDDBfields ">
                <input type="text" id="ABFD_FIRMNAMEVAL" hidden="hidden"  name="ABFD_FIRMNAMEVAL" class="form-control ABFDDBfields ">
                <input type="text" id="ABFD_LPDSGRD" hidden="hidden"  name="ABFD_LPDSGRD" class="form-control ABFDDBfields ">
				<input type="text" id="ABFD_CUSTYPE" hidden="hidden"  name="ABFD_CUSTYPE" class="form-control ABFDDBfields ">
                        </br>
						<div class="form-row">
           <div class="col ">
           <div class="FltRight DELBTNTXT">
           Delete Firm
           <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="ABFD_PRCSID|ABFD_FIRMCONT|Firm" class="DELBTN DELETETAP">
           </div>    
           </div>     
           </div>
                 <div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 <select class=" md-form colorful-select dropdown-primary ABFDDBfields DataToFld" onchange="GetInduestry(this,'ABFD_INDUSCATRY','ABFD_INDUSCATRY','Page','','ABFD_CONSTITUTION','ABFD_CUSTYPE')" data-change="ABFD_FIRMNAMEVAL" id="ABFD_FIRMNAME" name="ABFD_FIRMNAME">
                                 </select>
                                 <label class="mdb-main-label BTxt9">Name of Firm<span class="MndtryAstr">*</span></label>
                              </div>
                           </div>
                           <div class="col">
                              <div class="md-form">
                                 <select class=" md-form colorful-select dropdown-primary CONSM ABFDDBfields" disabled onchange="CheckConsti('ABFD_FIRMNAME',this,'Page','')" id="ABFD_CONSTITUTION" name="ABFD_CONSTITUTION">
                                    <option value="" >--Select--</option>
                                    <!--<option value="Partnership firms">Partnership firms</option>
                                    <option value="LLP">LLP</option>
                                    <option value="HUF">HUF</option>
			      			        <option value="Private Ltd">Private Ltd</option>
			      			        <option value="Public Ltd">Public Ltd</option>
			      			        <option value="Proprietorship">Proprietorship</option>-->
                                 </select>
                                 <label class="mdb-main-label BTxt9">Constitution<span class="MndtryAstr">*</span></label>
                              </div>
                           </div>
                           <!-- col-md-1 -->
                        </div>
                        <div class="form-row OTHFIRM" style="display:none">
                           <div class="col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_OTHFIRM" maxlength="30" onchange="getOthname(this,'ABFD_INDUSCATRY')"  name="ABFD_OTHFIRM" class="form-control NoSpecialChar ABFDDBfields">
                                 <label for="ABFD_OTHFIRM" class="">Others<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
                        </div>
                        <div class="form-row PARTNERFARM" style="display:none">
                           <div class="col Btxt10">LIST OF PARTNERS / DIRECTOR / SHAREHOLDER</div>
                        </div>
						
                         <div class="form-row PARTNERFARM" style="display:none">						
                            <div class="col">
                               <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'LPDSTable',{spname:'LSW_SLPDSGRDDETL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#ABFD_FIRMCONT').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5,6','LPDSGRID');" id="BTNLPDSGRD" name="BTNLPDSGRD" />
                               <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display ABFDDBfields DataGrid" name="LPDSTable" id="LPDSTable">
                               </table>
                           </div> 
                         </div>
                         <div class="form-row PARTNERFARM" style="display:none">
                             <div class="col-md-4">
                                 <div class="md-form">
                                      <div class="HyperControls"> 
                                           <a class="Btxt4 AddLPDS ADDBTN  ABFDDBfields" name="AddLPDSTable"  data-table="LPDSTable" href="#">+ Add</a>
                                      </div>
                                 </div>
                             </div>
                         </div>
                        <div class="form-row">
                         <input type="text" id="ABFD_INDUSCATRY" disabled  name="ABFD_INDUSCATRY" class="form-control Btxt17  DSVLBL ABFDDBfields ">
                           <!-- <div class="col Btxt10">Manufacturing</div>-->
                        </div>
                        <div class="form-row">
                           <div class="col Btxt10">BUSINESS PROCESS</div>
                        </div>
                        <!--<div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 <textarea id="ABFD_BUSNESSPROG" name="ABFD_BUSNESSPROG" class="form-control ABFDDBfields btxt24"  maxlength="4000" style="height: 130px;width:1150px;"></textarea>
                              </div>
                           </div>
                        </div>-->
							 <div class="adjoined-bottom">
		<div class="grid-container">
			<div class="grid-width-100">
		
				<textarea style="" id="ABFD_TEBUSNESSPROG"	placeholder="Type the content here!"  class="Edtr Text TEXTEDITDSBL" name="ABFD_TEBUSNESSPROG" data-maxlen="10000" maxlength="10000">
				 <%= editData.getTxt1() %>  
				
				 </textarea>

				<div class="invalid-tooltip"></div>
			</div>
			
		</div>
	</div>
                        <div class="form-row">
                           <div class="col Btxt10">NO. OF SKILLED</div>
                        </div>
                        <div class="form-row">
                           <div class="col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_SKILLED" maxlength="3"  name="ABFD_SKILLED" class="form-control IsNumberFields NoSpecialChar FBCLR ABFDDBfields">
                                 <label for="ABFD_SKILLED" class="">Skilled<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
                           <div class="col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_UNSKILLED" maxlength="3"  name="ABFD_UNSKILLED" class="form-control IsNumberFields NoSpecialChar FBCLR ABFDDBfields">
                                 <label for="ABFD_UNSKILLED" class="">Unskilled<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
                           <div class="col-md-4">
                           </div>
                        </div>
                        <div class="form-row">
                           <div class="col Btxt10">WORKING CYCLE</div>
                        </div>
                        <div class="form-row">
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <div class="col Btxt15">Stages</div>
                                 <!-- <label for="" class="Btxt4">Particulars<span class="MndtryAstr"></span></label> -->
                              </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                              
                                 <div class="col Btxt15">No. of Days</div>
                                 <!-- <label for="" class="Btxt4">As Per Site<span class="MndtryAstr"></span></label> -->
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
                        </br>
                        <div class="form-row ABFD_INDUSCATRY" style="display:none">
                           <div class=" col-md-4 GryShd">
                              <div class="md-form">
                                 <input type="text" id="" disabled value="Raw Materials"  maxlength="3"  name="" class="form-control DSVLBL Btxt17 NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_RAWDAYS" style="width:150"  maxlength="3"  name="ABFD_RAWDAYS" class="form-control FBCLR ABFDDBfields IsNumberFields NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
                        <div class="form-row ABFD_INDUSCATRY" style="display:none">
                           <div class=" col-md-4 GryShd">
                              <div class="md-form">
                              <input type="text" id="" disabled  value="WIP"  maxlength="3"  name="" class="form-control DSVLBL Btxt17 NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_WIPDAYS" style="width:150"  maxlength="3"  name="ABFD_WIPDAYS" class="form-control ABFDDBfields FBCLR IsNumberFields NoSpecialChar">
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
                        <div class="form-row ABFD_INDUSCATRY" style="display:none">
                           <div class=" col-md-4 GryShd">
                              <div class="md-form">
                              <input type="text" id=""  disabled value="Finished Product"  maxlength="3"  name="" class="form-control DSVLBL Btxt17  NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_PRODDAYS" style="width:150"  maxlength="3"  name="ABFD_PRODDAYS" class="form-control ABFDDBfields IsNumberFields FBCLR NoSpecialChar">
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
                        <div class="form-row">
                           <div class=" col-md-4 GryShd">
                              <div class="md-form">
                              <input type="text" id="" disabled value="Debitor Credit Period"  maxlength="3"  name="" class="form-control DSVLBL Btxt17 NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_DEBITORDAYS" style="width:150"  maxlength="3"  name="ABFD_DEBITORDAYS" class="form-control ABFDDBfields FBCLR RELMND IsNumberFields NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
                        <div class="form-row">
                           <div class=" col-md-4 GryShd">
                              <div class="md-form">
                                <input type="text" id="" disabled value="Creditor Credit Period"  maxlength="3"  name="" class="form-control DSVLBL Btxt17 NoSpecialChar ">
                               </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_CREDITDAYS" style="width:150"  maxlength="3"  name="ABFD_CREDITDAYS" class="form-control ABFDDBfields RELMND FBCLR IsNumberFields NoSpecialChar">
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
                        <div class="form-row">
                           <div class=" col-md-4 GryShd" >
                              <div class="md-form">
                                  <input type="text" id="" disabled value="No. of Clients / Supplies"  maxlength="3"  name="" class="form-control DSVLBL Btxt17 NoSpecialChar ">
                               </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_SUPPLIESDAYS" style="width:150"  maxlength="3"  name="ABFD_SUPPLIESDAYS" class="form-control ABFDDBfields RELMND FBCLR IsNumberFields NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
                        <div class="form-row">
                           <div class=" col-md-4 GryShd">
                              <div class="md-form">
                                   <input type="text" id=""  disabled value="Sister Concern"  maxlength="3"  name="" class="form-control DSVLBL Btxt17 NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_SISTERDAYS" style="width:250" maxlength="25" name="ABFD_SISTERDAYS" class="form-control  ABFDDBfields FBCLR RELMND NoSpecialChar">
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
						</form>
                        </br>
                        <div class="form-row">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="Save2" data-aria="LSW_TAPRBUSNFIRMDETL|ABFD|ABFD_FIRMCONT"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                              <button type="button" data-aria="LSW_TAPRBUSNFIRMDETL|ABFD|ABFD_FIRMCONT" data-card="1" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                           </div>
                        </div>
         <!-- Business Details End -->
         </div>
      </div>
   </div>
</div>

<table style="display:none" id="GridLPDSTable">
<thead>
<tr><th>ACTION</th>
<th>LPDS_NAME</th>
<th>LPDS_SHAREHOLD</th>
<th>LPDS_BRNIOWNER</th>
<th>LPDS_LONSTRU</th>
<th>LPDS_KYC</th>
<th>LPDS_FIRMCONT</th>
<!--<th>LPDS_PRCSID</th>
<th>LPDS_ACTIVITYID</th>
<th>LPDS_CREATEDBY</th>
<th>LPDS_DTCREATED</th>
<th>LPDS_MODIFIEDBY</th>
<th>LPDS_DTMODIFIED</th>-->
   </tr></thead> 
    </table>

<!--</body>-->
  <script>
initSample("ABFD_TEBUSNESSPROG");
</script>
</form>
    <script type="text/javascript" src="ThemeproLO/Approve/Script/BusinessDetl/LoadSubmit.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Approve/Script/BusinessDetl/Validation.js${DMY13}"></script> 
	<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>
 <style>
   .form-row>.col, .form-row>[class*=col-] {
        padding-right: 5px;
      }
 </style>
         