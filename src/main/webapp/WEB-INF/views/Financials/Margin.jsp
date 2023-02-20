<!-- card -->
      <div class="card">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                  <input type="text" id="MARG_PRCSID" hidden="hidden" name="MARG_PRCSID" class="form-control MARGDBfields">
                  <input type="text" id="MARG_ACTIVITYID" hidden="hidden" name="MARG_ACTIVITYID" class="form-control MARGDBfields">
                  <input type="text" id="MARG_CREATEDBY" hidden="hidden" name="MARG_CREATEDBY" class="form-control MARGDBfields"> 
                  <input type="text" id="MARG_DTCREATED" hidden="hidden" name="MARG_DTCREATED" class="form-control MARGDBfields">
                  <input type="text" id="MARG_MODIFIEDBY" hidden="hidden" name="MARG_MODIFIEDBY" class="form-control MARGDBfields">
                  <input type="text" id="MARG_DTMODIFIED" hidden="hidden" name="MARG_DTMODIFIED" class="form-control MARGDBfields">
				  <input type="text" id="MARG_SCHEMENAME" hidden="hidden" name="MARG_SCHEMENAME" class="form-control MARGDBfields">
				  <input type="text" id="MARG_SCHEMEID" hidden="hidden" name="MARG_SCHEMEID" class="form-control 
				  MARGDBfields">
				  
                   
				 </br>
				 <div class="form-row">
			    <div class="Btxt10"></div>
			</div>
			</br>
				   <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
					  <select class="mdb-select md-form colorful-select dropdown-primary MARGDBfields MARGMndtry" 
					  onchange="GetNaturBusness_V1(this,'MARG_BUSSINDUS','MARG_CLUSTER')" 
					  id="MARG_INDUCAT" name="MARG_INDUCAT">
								<option value="">Select</option>
							</select>
                      <label for="MARG_INDUCAT" class="">Industry Category<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 <div class="col-md-4">
                  <div class="md-form">
					  <select class="mdb-select md-form colorful-select dropdown-primary MARGDBfields MARGMndtry" 
					   onchange="GetAllServices();"id="MARG_BUSSINDUS" name="MARG_BUSSINDUS">
								<option value="">Select</option>
							</select>
                      <label for="MARG_BUSSINDUS" class="">Nature of Business/ Industry<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				</div>
				
				
				   <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="MARG_MANUFACT"  maxlength="30"  name="MARG_MANUFACT" class="form-control MARGMndtry  MARGDBfields">
                      <label for="MARG_MANUFACT" class="">Manufacturer<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="MARG_TRADER"  maxlength="30"  name="MARG_TRADER" class="form-control MARGMndtry  MARGDBfields">
                      <label for="MARG_TRADER" class="">Trader<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="MARG_SERVICE"  maxlength="30"  name="MARG_SERVICE" class="form-control MARGMndtry  MARGDBfields">
                      <label for="MARG_SERVICE" class="">Service<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				</div>
				 
          
          
				  </br>
                  <div class="form-row">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TMARGINSCREEN|MARG" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TMARGINSCREEN|MARG" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                     </div>
                  </div>
             
            </form>
         </div>
      </div>
      <!-- card -->
  
<script type="text/javascript" src="ThemeproLO/Financials/Script/Margin/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Financials/Script/Margin/Validation.js${DMY13}"></script>                            
 