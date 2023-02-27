 <!-- card -->
      <div class="card">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                  <input type="text" id="ECOM_PRCSID"     hidden="hidden" name="ECOM_PRCSID"     class="form-control ECOMDBfields">
                  <input type="text" id="ECOM_ACTIVITYID" hidden="hidden" name="ECOM_ACTIVITYID" class="form-control ECOMDBfields">
                  <input type="text" id="ECOM_CREATEDBY"  hidden="hidden" name="ECOM_CREATEDBY"  class="form-control ECOMDBfields"> 
                  <input type="text" id="ECOM_DTCREATED"  hidden="hidden" name="ECOM_DTCREATED"  class="form-control ECOMDBfields">
                  <input type="text" id="ECOM_MODIFIEDBY" hidden="hidden" name="ECOM_MODIFIEDBY" class="form-control ECOMDBfields">
                  <input type="text" id="ECOM_DTMODIFIED" hidden="hidden" name="ECOM_DTMODIFIED" class="form-control ECOMDBfields">
                  <input type="text" id="ECOM_CUSID" hidden="hidden" name="ECOM_CUSID" class="form-control ECOMDBfields">
				  <input type="text" id="ECOM_UNIQID" hidden="hidden" name="ECOM_UNIQID" class="form-control ECOMDBfields">
                   <input type="text" id="ECOM_LOANID" hidden="hidden" name="ECOM_LOANID" class="form-control ECOMDBfields"> 				 
			</br>
		<div class="form-row">
			<div class="col Btxt3">Eco System Manual</div>
        </div>
		</br>
		<div class="form-row">
				   <div class="col-md-4">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary  ECOMDBfields ECOMMndtry"  onchange="LIMITELIGIBLE();"   id="ECOM_TYOFVEHICLE" name="ECOM_TYOFVEHICLE">
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
                   <input type="text" id="ECOM_NOOFVEHICLE" name="ECOM_NOOFVEHICLE" onchange="LIMITELIGIBLE(); " maxlength="10"  class="form-control IsNumberFields NoSpecialChar  ECOMDBfields ">
                   <label for="ECOM_NOOFVEHICLE" class="">No of Vehicle<span class="MndtryAstr">*</span></label>
				</div>
            </div>
			<div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="ECOM_MAXFUNSCH" name="ECOM_MAXFUNSCH" maxlength="15"  onchange="LIMITELIGIBLE();"  class="form-control IsCURCommaFields NoSpecialChar  ECOMDBfields ">
                   <label for="ECOM_MAXFUNSCH" class="">Max funding under Scheme<span class="MndtryAstr">*</span></label>
                </div>
            </div>
		</div>
		<div class="form-row">
			<div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="ECOM_LIMITELIGI" name="ECOM_LIMITELIGI" maxlength="15"    class="form-control IsCURCommaFields NoSpecialChar  ECOMDBfields ">
                   <label for="ECOM_LIMITELIGI" class="">Limit eligible<span class="MndtryAstr">*</span></label>
                </div>
            </div>	
			<div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="ECOM_MAXFUNDALLOW" name="ECOM_MAXFUNDALLOW" maxlength="15"    class="form-control IsCURCommaFields NoSpecialChar  ECOMDBfields ">
                   <label for="ECOM_MAXFUNDALLOW" class="">Max Funding allowed<span class="MndtryAstr">*</span></label>
                </div>
            </div>
			<div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="ECOM_PROPOSEAMT" name="ECOM_PROPOSEAMT" maxlength="15"    class="form-control IsCURCommaFields NoSpecialChar  ECOMDBfields ">
                   <label for="ECOM_PROPOSEAMT" class="">Proposed Amount<span class="MndtryAstr">*</span></label>
                </div>
            </div>						
		</div>
                  </br>
				  </br>
                  <div class="form-row">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TECOMANUAL|ECOM|ECOM_UNIQID" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TECOMANUAL|ECOM|ECOM_UNIQID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                     </div>
                  </div>
             
            </form>
         </div>
      </div>
      <!-- card -->
<!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/EcoManual/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/EcoManual/Validation.js${DMY13}"></script>                            
 