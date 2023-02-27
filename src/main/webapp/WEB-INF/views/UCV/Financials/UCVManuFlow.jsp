 <!-- card -->
      <div class="card">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                  <input type="text" id="MANU_PRCSID"     hidden="hidden" name="MANU_PRCSID"     class="form-control MANUDBfields">
                  <input type="text" id="MANU_ACTIVITYID" hidden="hidden" name="MANU_ACTIVITYID" class="form-control MANUDBfields">
                  <input type="text" id="MANU_CREATEDBY"  hidden="hidden" name="MANU_CREATEDBY"  class="form-control MANUDBfields"> 
                  <input type="text" id="MANU_DTCREATED"  hidden="hidden" name="MANU_DTCREATED"  class="form-control MANUDBfields">
                  <input type="text" id="MANU_MODIFIEDBY" hidden="hidden" name="MANU_MODIFIEDBY" class="form-control MANUDBfields">
                  <input type="text" id="MANU_DTMODIFIED" hidden="hidden" name="MANU_DTMODIFIED" class="form-control MANUDBfields">
                  <input type="text" id="MANU_CUSID" hidden="hidden" name="MANU_CUSID" class="form-control MANUDBfields">
				  <input type="text" id="MANU_UNIQID" hidden="hidden" name="MANU_UNIQID" class="form-control MANUDBfields">
                   <input type="text" id="MANU_LOANID" hidden="hidden" name="MANU_LOANID" class="form-control MANUDBfields"> 				 
			</br>
		<div class="form-row">
			<div class="col Btxt3">Manual Flow</div>
        </div>
		</br>
		<div class="form-row">
				   <div class="col-md-4">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary  MANUDBfields MANUMndtry"  onchange="LIMITELIGIBLE();"   id="MANU_TYOFVEHICLE" name="MANU_TYOFVEHICLE">
                           <option value="">--Select--</option>
						   <option value="LCV">LCV</option>
						   <option value="ICV">ICV</option>
						   <option value="HCV">HCV</option>				
						   </select>
                           <label class="mdb-main-label BTxt9">Type Of Vehicle<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
				   
			<div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="MANU_NOOFVEHICLE" name="MANU_NOOFVEHICLE" onchange="LIMITELIGIBLE();" maxlength="10"  class="form-control IsNumberFields NoSpecialChar  MANUDBfields ">
                   <label for="MANU_NOOFVEHICLE" class="">No of Vehicle<span class="MndtryAstr">*</span></label>
				</div>
            </div>
			<div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="MANU_MAXFUNSCH" name="MANU_MAXFUNSCH" maxlength="15"  onchange="LIMITELIGIBLE();"  class="form-control IsCURCommaFields NoSpecialChar  MANUDBfields ">
                   <label for="MANU_MAXFUNSCH" class="">Max funding under Scheme<span class="MndtryAstr">*</span></label>
                </div>
            </div>
		</div>
		<div class="form-row">
			<div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="MANU_LIMITELIGI" name="MANU_LIMITELIGI" maxlength="15"   disabled class="form-control IsCURCommaFields NoSpecialChar  MANUDBfields ">
                   <label for="MANU_LIMITELIGI" class="">Limit eligible<span class="MndtryAstr">*</span></label>
                </div>
            </div>	
			<div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="MANU_MAXFUNDALLOW" name="MANU_MAXFUNDALLOW" maxlength="15"   disabled class="form-control IsCURCommaFields NoSpecialChar  MANUDBfields ">
                   <label for="MANU_MAXFUNDALLOW" class="">Max Funding allowed<span class="MndtryAstr">*</span></label>
                </div>
            </div>
			<div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="MANU_PROPOSEAMT" name="MANU_PROPOSEAMT" maxlength="15"    class="form-control IsCURCommaFields NoSpecialChar  MANUDBfields ">
                   <label for="MANU_PROPOSEAMT" class="">Proposed Amount<span class="MndtryAstr">*</span></label>
                </div>
            </div>						
		</div>
                  </br>
				  </br>
                  <div class="form-row">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TMANUALFLOW|MANU|MANU_UNIQID" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TMANUALFLOW|MANU|MANU_UNIQID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                     </div>
                  </div>
             
            </form>
         </div>
      </div>
      <!-- card -->
<!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/ManuFlow/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/ManuFlow/Validation.js${DMY13}"></script>                            
 