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
                  <div class="col Btxt3">KYC</div>
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
      <!--  card -->
      <div class="card cardNS">
         <div class="card-body px-lg-5 pt-0">
            </br>
            <div class="form-row">
               <div class="col Btxt3">Banking Statement</div>
            </div>
            <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="" id="BTNKYCDOC" name="BTNKYCDOC" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table5">
                     </table>
                  </div>
               </div>
         </div>
         <!-- </div> -->
      </div>
      <!-- card -->
      </br>
      <!--  card -->
      <div class="card cardNS">
         <div class="card-body px-lg-5 pt-0">
            </br>
            <div class="form-row">
               <div class="col Btxt3">Financials Collected</div>
            </div>
            <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="" id="BTNFINCCOL" name="BTNFINCCOL" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table6">
                     </table>
                  </div>
               </div>
         </div>
         <!-- </div> -->
      </div>
      <!-- card -->
      </br>
      <!--  card -->
      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
               </br>
               <div class="form-row">
                  <div class="col Btxt3">Other Documents</div>
               </div>
               </br>
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_TKYCDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','DocumentCheckList');" id="BTNKYCOthers" name="BTNKYCOthers" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
                     </table>
                  </div>
               </div>
            </form>
         </div>
      </div>
      <!-- card -->
      </br>
      <!--  card -->
      <div class="card cardNS PFDeferment" >
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
               </br>
               <div class="form-row">
                  <div class="col Btxt3">PF Deferment</div>
               </div>
               </br>
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="" id="BTNKYCOthers1" name="BTNKYCOthers1" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table4">
                     </table>
                  </div>
               </div>
            </form>
         </div>
      </div>
      <!-- card -->
      </br>
      <div class="form-row">
         <div class="col d-flex justify-content-center">
            <button type="button" id="Save4" data-aria="LSW_TDEFRMNTHDR|DMTH"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
            <button type="button" id="MoveToLogin" data-aria="LSW_TDEFRMNTHDR|DMTH" data-card="0" class="btn btn-Syel waves-effect BTNDOCMVL waves-light FormSave">Move to Login</button>
            <button type="button" style="display:none;" id="SendBack" data-aria="LSW_TDEFRMNTHDR|DMTH" data-card="0" class="btn btn-Syel waves-effect BTNDOCMVL waves-light FormSave">Send Back</button> 
         </div>
      </div>
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
   <table style="display:none" id="GridTable3">
      <thead>
      	<th>OKYD_DOCUMENT</th>
         <th>OKYD_DOCNAME</th>
         <th>OKYD_TARGETDT</th>
         <th>OKYD_ACTN</th>
         <th>OKYD_STATUS</th>
         <th>OKYD_DOCREFID</th>
         <th>OKYD_DOCREFCUSID</th>
         <th>OKYD_DOCREFCUSNAME</th>
         <!-- <th>OKYD_PRCSID</th>
            <th>OKYD_ACTIVITYID</th>
            <th>OKYD_DTCREATED</th>
            <th>OKYD_CREATEDBY</th>
            <th>OKYD_DTMODIFIED</th>
            <th>OKYD_MODIFIEDBY</th> -->
      </thead>
   </table>
   <table style="display:none" id="GridTable5">
      <thead>
      	<th>DBKD_BNKACCNTNO</th>
         <th>DBKD_BNKACCNTNM</th>
         <th>DBKD_TYMPRD</th>
         <th>DBKD_DEFRSTATS</th>
         <th>DBKD_BNKREFID</th>
          <th>DBKD_BNKREFCUSID</th>
         <th>DBKD_BNKREFCUSNAME</th>
         <!-- <th>OKYD_PRCSID</th>
            <th>OKYD_ACTIVITYID</th>
            <th>OKYD_DTCREATED</th>
            <th>OKYD_CREATEDBY</th>
            <th>OKYD_DTMODIFIED</th>
            <th>OKYD_MODIFIEDBY</th> -->
      </thead>
   </table>
   <table style="display:none" id="GridTable4">
      <thead>
      	<th>DFPD_PFDEMAMNT</th>
         <th>DFPD_RMRK</th>
         <th>DFPD_DEFRAMNT</th>
         <th>DFPD_REFRID</th>
         <th>DFPD_STATUS</th>
         
         
         
         <!-- <th>OKYD_PRCSID</th>
            <th>OKYD_ACTIVITYID</th>
            <th>OKYD_DTCREATED</th>
            <th>OKYD_CREATEDBY</th>
            <th>OKYD_DTMODIFIED</th>
            <th>OKYD_MODIFIEDBY</th> -->
      </thead>
   </table>
   <table style="display:none" id="GridTable6">
   	<thead>
   		<th>DFCD_FINANCCOLLCT</th>
         <th>DFCD_DEFRSTATS</th>
         <th>DFCD_FINREFCUSNAME</th>
         <th>DFCD_FINREFCUSID</th>
         <th>DFCD_FINREFCUSNAME</th>
   	</thead>
   </table>
   <!-- END -->
</div>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/DocCheckList/DefrMnt/Script/LoadSubmit/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/DocCheckList/DefrMnt/Script/Validation/Validation.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>