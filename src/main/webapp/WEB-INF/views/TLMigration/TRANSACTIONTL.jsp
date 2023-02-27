
<!--Main row-->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">

      </br>
      <!-- card -->
      <div class="card CardNS">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
			   <input type="text" id="TLTR_PRCSID" hidden="hidden" name="TLTR_PRCSID" class="form-control TLTRDBfields">
               <input type="text" id="TLTR_ACTIVITYID" hidden="hidden" name="TLTR_ACTIVITYID" class="form-control TLTRDBfields">
               <input type="text" id="TLTR_DTCREATED" hidden="hidden" name="TLTR_DTCREATED" class="form-control TLTRDBfields">
               <input type="text" id="TLTR_CREATEDBY" hidden="hidden" name="TLTR_CREATEDBY" class="form-control TLTRDBfields">
               <input type="text" id="TLTR_DTMODIFIED" hidden="hidden" name="TLTR_DTMODIFIED" class="form-control TLTRDBfields">
               <input type="text" id="TLTR_MODIFIEDBY" hidden="hidden"  name="TLTR_MODIFIEDBY" class="form-control TLTRDBfields">
           
				<div class="form-row">
					<div class="col-md-4">
						<div class="md-form">
							<select class="mdb-select md-form colorful-select dropdown-primary TLTRMndtry TLTRDBfields" searchable="Search here.."  id="TLTR_ACCNTID" name="TLTR_ACCNTID">
						   
						</select>
						<label class="mdb-main-label BTxt9">Account ID<span class="MndtryAstr">*</span></label>
						  </div>
					</div>
					<div class="col-md-4">
						<div class="md-form">
                           <input type="text" id="TLTR_DRAWDOWNAMT" maxlength="60" onchange="onchng(this)" class="form-control TLTRMndtry TLTRDBfields IsCURCommaFields IsNumberFields" name="TLTR_DRAWDOWNAMT" title="">
                           <label for="TLTR_DRAWDOWNAMT"  >Disbursement Request Amount<span class="MndtryAstr">*</span></label>
                        </div>
					</div>
					<!--<div class="col-md-4">
						<div class="md-form">
                           <input type="text" id="DRAW_DRAWDOWNDT" maxlength="60" disabled class="form-control DRAWMndtry DRAWDBfields IsCURCommaFields IsNumberFields" name="DRAW_DRAWDOWNDT" title="">
                           <label for="DRAW_DRAWDOWNDT"  >Draw Down Date<span class="MndtryAstr">*</span></label>
                        </div>
					</div>-->
				</div>
				
				<div class="form-row">
					<div class="col-md-4">
						<div class="md-form">
                           <input type="text" id="TLTR_PAYEENAME" maxlength="60"  class="form-control TLTRMndtry TLTRDBfields IsAlphaFields NoSpecialChar" name="TLTR_PAYEENAME" title="">
                           <label for="TLTR_PAYEENAME"  >Payee Name<span class="MndtryAstr">*</span></label>
                        </div>
					</div>
					<div class="col-md-4">
						<div class="md-form">
                           <input type="text" id="TLTR_PAYEEACCTNO" maxlength="60"  class="form-control TLTRMndtry TLTRDBfields NoSpecialChar" name="TLTR_PAYEEACCTNO" title="">
                           <label for="TLTR_PAYEEACCTNO"  >Payee Account No<span class="MndtryAstr">*</span></label>
                        </div>
					</div>
					<div class="col-md-4">
						<div class="md-form">
                           <input type="text" id="TLTR_IFSCCODE" maxlength="60" onblur="Ifscdetls(this,'TLTR_BANKNAME','TLTR_BRANCHNAME')" class="form-control TLTRMndtry TLTRDBfields NoSpecialChar" name="TLTR_IFSCCODE" title="">
                           <label for="TLTR_IFSCCODE"  >IFSC Code<span class="MndtryAstr">*</span></label>
                        </div>
					</div>
				</div>
				
				<div class="form-row">
					<div class="col-md-4">
						<div class="md-form">
                           <input type="text" id="TLTR_BANKNAME" maxlength="60" disabled class="form-control TLTRMndtry TLTRDBfields  NoSpecialChar" name="TLTR_BANKNAME" title="">
                           <label for="TLTR_BANKNAME"  >Bank Name<span class="MndtryAstr">*</span></label>
                        </div>
					</div>
					<div class="col-md-4">
						<div class="md-form">
                           <input type="text" id="TLTR_BRANCHNAME" maxlength="60" disabled class="form-control TLTRMndtry TLTRDBfields  NoSpecialChar" name="TLTR_BRANCHNAME" title="">
                           <label for="TLTR_BRANCHNAME"  >Branch Name<span class="MndtryAstr">*</span></label>
                        </div>
					</div>
				</div>
				<div class="form-row">
					<div class="col d-flex justify-content-center">
						<button type="button" data-aria="LSW_TLPUSHTOLMS|TLTR" style="display:none;" data-card="0"  id="Save"  class="btn btn-Syeloutline1 waves-effect waves-light FormSave">Save</button>
						<button type="button" data-aria="LSW_TLPUSHTOLMS|TLTR" style="display:none;" data-card="0"  id="Forward"  class="btn btn-Syeloutline1 waves-effect waves-light FormSave">Forward</button>
						<button type="button" data-aria="LSW_TLPUSHTOLMS|TLTR" style="display:none;" data-card="0"  id="SendBack"  class="btn btn-Syeloutline1 waves-effect waves-light FormSave">Send Back</button>
						<button type="button" data-aria="LSW_TLPUSHTOLMS|TLTR" style="display:none;" data-card="0"  id="Approve"  class="btn btn-Syeloutline1 waves-effect waves-light FormSave">Approve</button>
						<button type="button" data-aria="LSW_TLPUSHTOLMS|TLTR" style="display:none;" data-card="0"  id="Reject"  class="btn btn-Syeloutline1 waves-effect waves-light FormSave">Reject</button>
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
<script type="text/javascript" src="ThemeproLO/MigratedTL/TransactionMigratedTL/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/MigratedTL/TransactionMigratedTL/Validation.js${DMY13}"></script>                            