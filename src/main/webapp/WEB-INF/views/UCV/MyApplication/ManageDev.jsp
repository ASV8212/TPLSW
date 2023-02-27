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
      <div class="row">
	<div class="col-lg-12">
		
		  <ul class="nav FormPageTab FormMainTab1">      
      <li id="Assigned" value="ManageDev" data-value="" data-required="" class="nav-item RoundTabs Btxt6 active"><a>
      <div class="nav-link active" href="#">Assigned</div></a>
      </li>
      <li id="View" value="ManageDev" data-value="" data-required="" class="nav-item RoundTabs Btxt6"><a>
      <div class="nav-link active" href="#">View</div></a></li>
   	</ul>
	</div>
</div>
</br>
      </br>
      <input type="text" id="DMTH_PRCSID" hidden="hidden" name="DMTH_PRCSID" class="form-control DMTHDBfields">
      <input type="text" id="DMTH_ACTIVITYID" hidden="hidden" name="DMTH_ACTIVITYID" class="form-control DMTHDBfields">
      <input type="text" id="DMTH_DTCREATED" hidden="hidden" name="DMTH_DTCREATED" class="form-control DMTHDBfields">
      <input type="text" id="DMTH_CREATEDBY" hidden="hidden" name="DMTH_CREATEDBY" class="form-control DMTHDBfields">
      <input type="text" id="DMTH_DTMODIFIED" hidden="hidden" name="DMTH_DTMODIFIED" class="form-control DMTHDBfields">
      <input type="text" id="DMTH_MODIFIEDBY" hidden="hidden" name="DMTH_MODIFIEDBY" class="form-control DMTHDBfields">
      <input type="text" id="DMTH_KYCDTL" hidden="hidden" name="DMTH_KYCDTL" class="form-control DMTHDBfields">
      <input type="text" id="DMTH_OTHRDOC" hidden="hidden" name="DMTH_OTHRDOC" class="form-control DMTHDBfields">
      <input type="text" id="DMTH_BANKDTL" hidden="hidden" name="DMTH_BANKDTL" class="form-control DMTHDBfields">
      <input type="text" id="DMTH_PFDTL" hidden="hidden" name="DMTH_PFDTL" class="form-control DMTHDBfields">
      <input type="text" id="DMTH_FINCLDTL" hidden="hidden" name="DMTH_FINCLDTL" class="form-control DMTHDBfields">
      <!--  card -->
      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
               </br>
               <div class="form-row">
                  <div class="col Btxt3">Manage Deviation</div>
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
            </form>
         </div>
      </div>
      <!-- card -->

      </br>
   </div>
   <!-- Admin Panel -->
   <table style="display:none" id="GridTable2">
      <thead>
      	<th>KDTL_DOCUMENT</th>
         <th>KDTL_DOCNAME</th>
         <th>KDTL_TARGETDT</th>
         <th>KDTL_ACTN</th>
         <th>KDTL_STATUS</th>
         <th>KDTL_DOCREFID</th>
         <th>KDTL_DOCREFCUSID</th>
         <th>KDTL_DOCREFCUSNAME</th>
         <!-- <th>KYCD_PRCSID</th>
            <th>KYCD_ACTIVITYID</th>
            <th>KYCD_DTCREATED</th>
            <th>KYCD_CREATEDBY</th>
            <th>KYCD_DTMODIFIED</th>
            <th>KYCD_MODIFIEDBY</th> -->
      </thead>
   </table>

   <!-- END -->
</div>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/DashBoard/Script/MyApplication/ManageDev/Script/LoadSubmit/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/DashBoard/Script/MyApplication/ManageDev/Script/Validation/Validation.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>