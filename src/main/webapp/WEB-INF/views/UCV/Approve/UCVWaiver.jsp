</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">

      </br>
      <!-- card -->

      <div class="card">
               <!-- Card header -->
               
               <!-- Card body -->
                     <div data-row="" class="card-body px-lg-5 pt-0  ">
                        </br>
                     <form>
                        <div class="form-row">
                          <div class="col">
                          </div>
                          <div style="display:none" class="col">
                             <div class="HyperControls form-row FltRight" > 
	                         <a onclick="" class="Btxt4 FltRight"  href="#"><i class="fa fa fa-times"></i> Reject All</a>
                         </div>
                             <div class="HyperControls form-row FltRight" > 
	                         <a onclick="" class="Btxt4 FltRight"  href="#"><i class="fa fa-check"></i> Approve All</a>
                          </div>
                        </div>
                        </div>
                        <input type="text" id="APCH_PRCSID" hidden="hidden" name="APCH_PRCSID" value="PRCSID" class="form-control APCHDBfields">
                        <input type="text" id="APCH_ACTIVITYID" hidden="hidden" name="APCH_ACTIVITYID" class="form-control APCHDBfields">
                        <input type="text" id="APCH_CREATEDBY" hidden="hidden" name="APCH_CREATEDBY" class="form-control APCHDBfields">
                        <input type="text" id="APCH_DTCREATED" hidden="hidden" name="APCH_DTCREATED" class="form-control APCHDBfields">
                        <input type="text" id="APCH_MODIFIEDBY" hidden="hidden" name="APCH_MODIFIEDBY" class="form-control APCHDBfields">
                        <input type="text" id="APCH_DTMODIFIED" hidden="hidden" name="APCH_DTMODIFIED" class="form-control APCHDBfields">
                        <input type="text" id="APCH_CHRGGRD" hidden="hidden" name="APCH_CHRGGRD" class="form-control APCHDBfields">
						
						
						
						<div class="form-row">
							 <div class="col">
                              <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SGETCHRGDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#DMY6').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,7,8,9','CHRGDTL');" id="BTNCHRGDTL" name="BTNCHRGDTL" />
                              <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                              </table>
                           </div>
						</div>
                        <div class="form-row">
                           <div class="col d-flex justify-content-center">
                              <!-- <button type="button" id="Save" data-aria="LSW_TCHRGHDR|APCH"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                              <button type="button" data-aria="LSW_TCHRGHDR|APCH" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> --> 
                               <button type="button" data-aria="LSW_TCHRGHDR|APCH" data-card="0" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button> 
							  <button type="button" data-aria="LSW_TCHRGHDR|APCH" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
                             
                              <!-- <button type="button" id="Waiver" data-aria="LSW_TCHRGHDR|APCH" style="display:none;" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Approve</button> -->
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
      <th>APCD_CHRGID</th>
      <th>APCD_CHRGNAME</th>
      <th>APCD_NORMS</th>
      <th>APCD_ACTUAL</th>
      <th>APCD_REMARK</th>
      <th>APCD_STAUS</th>
      <th>APCD_UPDTON</th>
      <th>APCD_DEVLVL</th>
	  <th>HDNCTRL</th>
	  <th>HDNCTRL1</th>
	  <th>APCD_RAISDTO</th>
      <th>APCD_ACTNBY</th>
   </thead>
</table>   
<script type="text/javascript" src="ThemeproLO/UCV/Approve/Script/Waiver/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Approve/Script/Waiver/Validation.js${DMY13}"></script>                            
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>