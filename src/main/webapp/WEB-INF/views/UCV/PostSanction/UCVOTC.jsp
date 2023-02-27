</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
      <div class="form-row">
         <div class="col-lg-12">
            <ul title="Tranche" data-aria="LSW_TLONBANKDTLS|BKDT|" data-popup="No"  class="nav FormPageMultiTab">
               <%-- ${SUBPAGETABDATA} --%>
               <!-- <li id="Tranche1" value="OTC" title="Tranche 1" class="nav-item active">
               <a>
                  <div class="nav-link" href="#">Tranche 1</div>
               </a>
            </li>
            <li id="Tranche2" value="OTC" title="Tranche 2" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Tranche 2</div>
               </a>
            </li> 
            <li id="Tranche3" value="OTC" title="Tranche 3" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Tranche 3</div>
               </a>
            </li> 
            <li id="Tranche4" value="OTC" title="Tranche 4" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Tranche 4</div>
               </a>
            </li> 
            <li id="Tranche5" value="OTC" title="Tranche 5" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Tranche 5</div>
               </a>
            </li>  -->
            </ul>
         </div>
      </div>
      </br>
      <div class="card CardNS">
       
   <div class="card-body px-lg-5 pt-0 BSbrdlight">
     
     <div class="row">
	<div class="col-lg-12">
		</br>
		  <ul class="nav FormPageSubTab FormPageSubTab1">      
       <li id="DisbursementChecklist" value="UCVDisbrsmnt" title="Disbursement Checklist" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Disbursement Checklist</div>
               </a>
            </li>
            <li id="OpsAcknowledgement" value="UCVOpsAck" title="Ops Acknowledgement" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Ops Acknowledgement</div>
               </a>
            </li>
            <li id="DisbursementMemo" value="UCVDisbMemo" title="Disbursement Memo" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Disbursement Memo</div>
               </a>
            </li>
            <li id="OTC" value="UCVOTC" title="OTC" class="nav-item active">
               <a>
                  <div class="nav-link" href="#">OTC</div>
               </a>
            </li>
            <li id="PDD" value="UCVPDD" title="PDD" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">PDD</div>
               </a>
            </li>

      </ul>
	

	
	</div>
</div>
     
     
      </div>
   </div>
      <div class="card CardNS">
         <!-- Card header -->
         <!-- Card body -->
         <div data-row="" class="card-body px-lg-5 pt-0  ">
            </br>
            <form>
               <input type="text" id="OOTC_PRCSID" hidden="hidden" name="OOTC_PRCSID" value="" class="form-control OOTCDBfields">
               <input type="text" id="OOTC_ACTIVITYID" hidden="hidden" name="OOTC_ACTIVITYID" class="form-control OOTCDBfields">
               <input type="text" id="OOTC_CREATEDBY" hidden="hidden" name="OOTC_CREATEDBY" class="form-control OOTCDBfields">
               <input type="text" id="OOTC_DTCREATED" hidden="hidden" name="OOTC_DTCREATED" class="form-control OOTCDBfields">
               <input type="text" id="OOTC_MODIFIEDBY" hidden="hidden" name="OOTC_MODIFIEDBY" class="form-control OOTCDBfields">
               <input type="text" id="OOTC_DTMODIFIED" hidden="hidden" name="OOTC_DTMODIFIED" class="form-control OOTCDBfields">
               <input type="text" id="OOTC_GRDDTL" hidden="hidden" name="OOTC_GRDDTL" class="form-control OOTCDBfields">
               
               <input type="text" id="OOTC_TRNCH" hidden="hidden" name="OOTC_TRNCH" class="form-control OOTCDBfields">
               <input type="text" id="OOTC_TRNCHName" hidden="hidden" name="OOTC_TRNCHName" class="form-control OOTCDBfields">
			   
			   <input type="text" id="HiddenActID" hidden="hidden" name="HiddenActID" class="form-control ">
               <div class="form-row">
                  <div class="col">
                     <!-- <input type="button" style="display:none" class="DashTrg" onclick="" id="BTNSALES" name="BTNSALES" /> -->
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                     </table>
                  </div>
               </div>
               <div class="form-row">
                  <div class="col">
                     <!-- <input type="button" style="display:none" class="DashTrg" onclick="" id="BTNSALES" name="BTNSALES" /> -->
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
                     </table>
                  </div>
               </div>
               <div class="form-row">
                  <div class="col">
                     <!-- <input type="button" style="display:none" class="DashTrg" onclick="" id="BTNSALES" name="BTNSALES" /> -->
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table4">
                     </table>
                  </div>
               </div>
               <div class="form-row">
                  <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="LSW_TOPSOTCHDR|OOTC|OOTC_TRNCH"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
					 <!--<button type="button" style="display:none;width:250px" id="RaiseQuery" data-aria="LSW_TOPSOTCHDR|OOTC|OOTC_TRNCH"  class="btn btn-Syeloutline waves-effect waves-light ">Raise Query & Save</button>   -->
                     <button type="button" id="SaveNxt" data-aria="LSW_TOPSOTCHDR|OOTC|OOTC_TRNCH" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
					 <button type="button" id="Submit" style="display:none;" data-aria="LSW_TOPSOTCHDR|OOTC|OOTC_TRNCH" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Submit</button>
                     
                  </div>
               </div>
            </form>
         </div>
      </div>
      <!-- card -->
   </div>
</div>
<!--   </div>
   </div>   -->   
<table style="display:none" id="GridTable2">
   <thead>
      <th>OOTD_DESCRPTN</th>
      <th>OOTD_SALSREMRK</th>
      <th>OOTD_TRDT</th>
      <th>OOTD_ACTN</th>
      <th>OOTD_VERFY</th>
      <th>OOTD_RSQRY</th>
      <th>OOTD_SRNO</th>
      <th>OOTD_CATGRY</th>
	  <th>OOTD_STUS</th>
	  <th>OOTD_BRREMRK</th>
	  <th>OOTD_TRNCH</th>
	  <th>PDDSTATUSONOTC</th>
	  <th>OOTD_ACTNBY</th>
	  <th>OOTD_ACTNTYMSTMP</th>
	  <th>OOTD_RAISDTYP</th>
   </thead>
</table>
<table style="display:none" id="GridTable3">
   <thead>
      <th>OOTD_DESCRPTN</th>
      <th>OOTD_ACTN</th>
      <th>OOTD_TRDT</th>
      <th>OOTD_STUS</th>
      <th>OOTD_SALSREMRK</th>
      <th>OOTD_BRREMRK</th>
      <th>OOTD_VERFY</th>
      <th>OOTD_RSQRY</th>
      <th>OOTD_SRNO</th>
      <th>OOTD_CATGRY</th>
      <th>OOTD_TRNCH</th>
	  <th>PDDSTATUSONOTC</th>
	  <th>OOTD_ACTNBY</th>
	  <th>OOTD_ACTNTYMSTMP</th>
	  <th>OOTD_RAISDTYP</th>
   </thead>
</table>
<table style="display:none" id="GridTable4">
   <thead>
      <th>OOTD_DESCRPTN</th>
      <th>OOTD_ACTN</th>
       <th>OOTD_BRREMRK</th>
      <th>OOTD_TRDT</th>
      <th>OOTD_STUS</th>
      <th>OOTD_VERFY</th>
      <th>OOTD_RSQRY</th>
      <th>OOTD_SALSREMRK</th>
      <th>OOTD_SRNO</th>
      <th>OOTD_CATGRY</th>
      <th>OOTD_TRNCH</th>
	  <th>PDDSTATUSONOTC</th>
	  <th>OOTD_ACTNBY</th>
	  <th>OOTD_ACTNTYMSTMP</th>
	  <th>OOTD_RAISDTYP</th>
   </thead>
</table>
<script type="text/javascript" src="ThemeproLO/PostSanction/Script/PostSanctionTab.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/PostSanction/Script/OTC/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/PostSanction/Script/OTC/Validation.js${DMY13}"></script>                            
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>