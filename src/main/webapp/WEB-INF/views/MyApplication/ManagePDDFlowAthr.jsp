<!--Main row-->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
      <!-- Start -->
     <%--  <div class="row">
         <div class="col-lg-12">
            <ul title="DocumentDetails" data-popup="" class="nav FormPageMultiTab">
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
      </div> --%>
      </br>
      </br>
     <!-- <div class="row">
	<div class="col-lg-12">
		
		  <ul class="nav FormPageTab FormMainTab1">      
      <li id="Assigned" value="ManageDev" data-value="" data-required="" class="nav-item RoundTabs Btxt6 active"><a>
      <div class="nav-link active" href="#">Assigned</div></a>
      </li>
      <li id="View" value="ManageDev" data-value="" data-required="" class="nav-item RoundTabs Btxt6"><a>
      <div class="nav-link active" href="#">View</div></a></li>
   	</ul>
	</div>
</div>-->
</br>
      </br>
  
      <!--  card -->
      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
               </br>
               <div class="form-row">
                  <div class="col Btxt3">Manage PDD Flow </div>
                  <!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
               </div>
               </br>
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="" id="BTNKYCDOC" name="BTNKYCDOC" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                     </table>
                  </div>
               </div>
			   <div class="form-row">
                  <div class="col d-flex justify-content-center">
					  <button type="button" id="Submit"  data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Submit</button> 
					  <button type="button" id="Reject"  data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Reject</button> 
                  </div>
               </div>
            </form>
         </div>
      </div>
      <!-- card -->

      </br>
   </div>
   <!-- Admin Panel -->
   <table style="display:none" id="GridTable2">
      <thead>
      	<th>OOPD_DESCRPTN</th>
      <th>OOPD_ACTN</th>
       <th>OOPD_BRREMRK</th>
      <th>OOPD_TRDT</th>
      <th>OOPD_STUS</th>
      <th>OOPD_VERFY</th>
      <th>OOPD_RSQRY</th>
      <th>OOPD_SALSREMRK</th>
      <th>OOPD_SRNO</th>
      <th>OOPD_CATGRY</th>
       <th>OOPD_TRNCH</th>
	   <th>OOPD_ACTNBY</th>
	  <th>OOPD_ACTNTYMSTMP</th>
	  <th>OOPD_RAISDTYP</th>
	  <th>OOPD_PDDDOCUPLOAD</th>
	  <th>OOPD_PDDDOCUAPPRSTATUS</th>
	  <th>OOPD_PDDDOCURCUAPPRSTATUS</th>
	  
      </thead>
   </table>

   <!-- END -->
</div>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/DashBoard/Script/MyApplication/ManagePDDFlowAthr/Script/LoadSubmit/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/DashBoard/Script/MyApplication/ManagePDDFlowAthr/Script/Validation/Validation.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>