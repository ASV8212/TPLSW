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
 var Prcsid=$("#PrcsID").val();
 document.getElementById("processId").value=Prcsid;
  </script>
<% editData.ClearMtd(); %>
<% 


String Prcsid=request.getParameter("PrcsID")+"|"+request.getParameter("PrMs3");
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
<!--<li id="ApprlNt" value="ApprlNt" title="ApprlNt" class="nav-item active"><a><div class="nav-link" href="#">Approval Note</div></a></li>	-->	  
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
			    <input type="text" id="MAED_PRCSID" hidden="hidden" name="MAED_PRCSID" class="form-control MAEDDBfields ">
                <input type="text" id="MAED_ACTIVITYID" hidden="hidden" name="MAED_ACTIVITYID" class="form-control MAEDDBfields ">
                <input type="text" id="MAED_CREATEDBY" hidden="hidden" name="MAED_CREATEDBY" class="form-control MAEDDBfields ">
                <input type="text" id="MAED_DTCREATED" hidden="hidden" name="MAED_DTCREATED" class="form-control  MAEDDBfields">
                <input type="text" id="MAED_MODIFIEDBY" hidden="hidden" name="MAED_MODIFIEDBY" class="form-control MAEDDBfields ">
                <input type="text" id="MAED_DTMODIFIED" hidden="hidden"  name="MAED_DTMODIFIED" class="form-control MAEDDBfields ">
				<input type="text" id="MAED_SCHEMEID" hidden="hidden"  name="MAED_SCHEMEID" class="form-control MAEDDBfields ">
				<input type="text" id="MAED_SCHEMENAME" hidden="hidden"  name="MAED_SCHEMENAME" class="form-control MAEDDBfields ">
				<input type="text" id="MAED_MANUALEDIT" hidden="hidden"  name="MAED_MANUALEDIT" class="form-control MAEDDBfields ">
           
      
                        </br>
						
                        
						<div class="form-row PARTNERFARM" style="display:none">						
                            <div class="col">
                               <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'MAEDTable',{spname:'LSW_SLPDSGRDDETL1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#MAED_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5,6','LPDSGRID');" id="BTNMAEDGRD" name="BTNMAEDGRD" />
                               <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display ABFDDBfields DataGrid" name="LPDSTable" id="LPDSTable">
                               </table>
                           </div> 
                         </div>
                     
                        
                        <div class="form-row">
                           <div class="col Btxt10">MANUAL ASSESSMENT</div>
                        </div>
                        <!--<div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 <textarea id="MAED_BUSNESSPROG" name="MAED_BUSNESSPROG" class="form-control MAEDDBfields btxt24"  maxlength="4000" style="height: 130px;width:1150px;"></textarea>
                              </div>
                           </div>
                        </div>-->
					 <div class="adjoined-bottom">
		<div class="grid-container">
			<div class="grid-width-100">
		
				<textarea style="" id="MAED_TEBUSNESSPROG"	placeholder="Type the content here!"  class="Edtr Text TEXTEDITDSBL" name="MAED_TEBUSNESSPROG" data-maxlen="10000" maxlength="10000">
				 <%= editData.getTxt1() %>  
				
				 </textarea>

				<div class="invalid-tooltip"></div>
			</div>
			
		</div>
	</div>
	</br>
                        
						</form>
                        </br>
                        <div class="form-row">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="Save2" data-aria="LSW_TMANUALEDITOR|MAED|MAED_SCHEMEID"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                              <button type="button" data-aria="LSW_TMANUALEDITOR|MAED|MAED_SCHEMEID" data-card="1" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                           </div>
                        </div>
         <!-- Business Details End -->
         </div>
      </div>
   </div>
</div>

<table style="display:none" id="GridMAEDTable">
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
initSample("MAED_TEBUSNESSPROG");
</script>
</form>
    <script type="text/javascript" src="ThemeproLO/Financials/Script/AllianceMA/LoadSubmit.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Financials/Script/AllianceMA/Validation.js${DMY13}"></script> 
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
         