
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
			   <input type="text" id="DRAW_PRCSID" hidden="hidden" name="DRAW_PRCSID" class="form-control DRAWDBfields">
               <input type="text" id="DRAW_ACTIVITYID" hidden="hidden" name="DRAW_ACTIVITYID" class="form-control DRAWDBfields">
               <input type="text" id="DRAW_DTCREATED" hidden="hidden" name="DRAW_DTCREATED" class="form-control DRAWDBfields">
               <input type="text" id="DRAW_CREATEDBY" hidden="hidden" name="DRAW_CREATEDBY" class="form-control DRAWDBfields">
               <input type="text" id="DRAW_DTMODIFIED" hidden="hidden" name="DRAW_DTMODIFIED" class="form-control DRAWDBfields">
               <input type="text" id="DRAW_MODIFIEDBY" hidden="hidden"  name="DRAW_MODIFIEDBY" class="form-control DRAWDBfields">
           
				<div class="form-row">
					<div class="col-md-4">
						<div class="md-form">
							<select class="mdb-select md-form colorful-select dropdown-primary DRAWMndtry DRAWDBfields" searchable="Search here.."  id="DRAW_ACCNTID" name="DRAW_ACCNTID">
						   
						</select>
						<label class="mdb-main-label BTxt9">Account ID<span class="MndtryAstr">*</span></label>
						  </div>
					</div>
					<div class="col-md-4">
						<div class="md-form">
                           <input type="text" id="DRAW_DRAWDOWNAMT" maxlength="60"  class="form-control DRAWMndtry DRAWDBfields IsCURCommaFields IsNumberFields" name="DRAW_DRAWDOWNAMT" title="">
                           <label for="DRAW_DRAWDOWNAMT"  >Draw Down Amount<span class="MndtryAstr">*</span></label>
                        </div>
					</div>
					<div class="col-md-4">
						<div class="md-form">
                           <input type="text" id="DRAW_DRAWDOWNDT" maxlength="60" disabled class="form-control DRAWMndtry DRAWDBfields IsCURCommaFields IsNumberFields" name="DRAW_DRAWDOWNDT" title="">
                           <label for="DRAW_DRAWDOWNDT"  >Draw Down Date<span class="MndtryAstr">*</span></label>
                        </div>
					</div>
				</div>
				
				<div class="form-row">
					<div class="col-md-4">
						<div class="md-form">
                           <input type="text" id="DRAW_PAYEENAME" maxlength="60"  class="form-control DRAWMndtry DRAWDBfields IsAlphaFields NoSpecialChar" name="DRAW_PAYEENAME" title="">
                           <label for="DRAW_PAYEENAME"  >Payee Name<span class="MndtryAstr">*</span></label>
                        </div>
					</div>
					<div class="col-md-4">
						<div class="md-form">
                           <input type="text" id="DRAW_PAYEEACCTNO" maxlength="60"  class="form-control DRAWMndtry DRAWDBfields NoSpecialChar" name="DRAW_PAYEEACCTNO" title="">
                           <label for="DRAW_PAYEEACCTNO"  >Payee Account No<span class="MndtryAstr">*</span></label>
                        </div>
					</div>
					<div class="col-md-4">
						<div class="md-form">
                           <input type="text" id="DRAW_IFSCCODE" maxlength="60" onblur="Ifscdetls(this,'DRAW_BANKNAME','DRAW_BRANCHNAME')" class="form-control DRAWMndtry DRAWDBfields NoSpecialChar" name="DRAW_IFSCCODE" title="">
                           <label for="DRAW_IFSCCODE"  >IFSC Code<span class="MndtryAstr">*</span></label>
                        </div>
					</div>
				</div>
				
				<div class="form-row">
					<div class="col-md-4">
						<div class="md-form">
                           <input type="text" id="DRAW_BANKNAME" maxlength="60" disabled class="form-control DRAWMndtry DRAWDBfields  NoSpecialChar" name="DRAW_BANKNAME" title="">
                           <label for="DRAW_BANKNAME"  >Bank Name<span class="MndtryAstr">*</span></label>
                        </div>
					</div>
					<div class="col-md-4">
						<div class="md-form">
                           <input type="text" id="DRAW_BRANCHNAME" maxlength="60" disabled class="form-control DRAWMndtry DRAWDBfields  NoSpecialChar" name="DRAW_BRANCHNAME" title="">
                           <label for="DRAW_BRANCHNAME"  >Branch Name<span class="MndtryAstr">*</span></label>
                        </div>
					</div>
					<div class="col-md-4" style="display:none">
						<div class="md-form">
                           <input type="text" id="DRAW_UTRNUMBER" maxlength="50" class="form-control  DRAWDBfields  NoSpecialChar" name="DRAW_UTRNUMBER" title="">
                           <label for="DRAW_UTRNUMBER"  >UTR Number<span class="MndtryAstr">*</span></label>
                        </div>
					</div>
				</div>
				<div class="form-row">
					<div class="col d-flex justify-content-center">
						<button type="button" data-aria="LSW_TDRAWDOWNREQMN|DRAW" style="display:none;" data-card="0"  id="Save"  class="btn btn-Syeloutline1 waves-effect waves-light FormSave">Save</button>
						<button type="button" data-aria="LSW_TDRAWDOWNREQMN|DRAW" style="display:none;" data-card="0"  id="Forward"  class="btn btn-Syeloutline1 waves-effect waves-light FormSave">Forward</button>
						<button type="button" data-aria="LSW_TDRAWDOWNREQMN|DRAW" style="display:none;" data-card="0"  id="SendBack"  class="btn btn-Syeloutline1 waves-effect waves-light FormSave">Send Back</button>
						<button type="button" data-aria="LSW_TDRAWDOWNREQMN|DRAW" style="display:none;" data-card="0"  id="Approve"  class="btn btn-Syeloutline1 waves-effect waves-light FormSave">Approve</button>
						<button type="button" data-aria="LSW_TDRAWDOWNREQMN|DRAW" style="display:none;" data-card="0"  id="Reject"  class="btn btn-Syeloutline1 waves-effect waves-light FormSave">Reject</button>
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
<script type="text/javascript" src="ThemeproLO/DrawDown/TransactionDradown/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/DrawDown/TransactionDradown/Validation.js${DMY13}"></script>                            