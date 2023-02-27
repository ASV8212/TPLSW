</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<!--<div class="">-->
   <!--Admin panel-->
   <!--<div class="admin-panel">-->
     
      </br>
      <!-- card -->
      <div class="card">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                  <input type="text" id="OUBL_PRCSID" hidden="hidden" name="OUBL_PRCSID" class="form-control OUBLDBfields">
                  <input type="text" id="OUBL_ACTIVITYID" hidden="hidden" name="OUBL_ACTIVITYID" class="form-control OUBLDBfields">
                  <input type="text" id="OUBL_CREATEDBY" hidden="hidden" name="OUBL_CREATEDBY" class="form-control OUBLDBfields"> 
                  <input type="text" id="OUBL_DTCREATED" hidden="hidden" name="OUBL_DTCREATED" class="form-control OUBLDBfields">
                  <input type="text" id="OUBL_MODIFIEDBY" hidden="hidden" name="OUBL_MODIFIEDBY" class="form-control OUBLDBfields">
                  <input type="text" id="OUBL_DTMODIFIED" hidden="hidden" name="OUBL_DTMODIFIED" class="form-control OUBLDBfields">
				  <input type="text" id="OUBL_SCHEMENAME" hidden="hidden" name="OUBL_SCHEMENAME" class="form-control OUBLDBfields">
				  <input type="text" id="OUBL_SCHEMEID" hidden="hidden" name="OUBL_SCHEMEID" class="form-control 
				  OUBLDBfields">
				  
                   
				 </br>
				 <div class="form-row">
			    <div class="Btxt10">Take Over Method</div>
			</div>
			</br>
				   <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="OUBL_PROINTRT" disabled maxlength="30"  name="OUBL_PROINTRT" class="form-control OUBLMndtry  OUBLDBfields">
                      <label for="OUBL_PROINTRT" class="">Proposed interest rate<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="OUBL_PROTENURE" disabled maxlength="30"  name="OUBL_PROTENURE" class="form-control OUBLMndtry  OUBLDBfields">
                      <label for="OUBL_PROTENURE" class="">Proposed tenure<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
           		<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary OUBLDBfields" onchange="Profit();" id="OUBL_TYPOBUSS"
				  name="OUBL_TYPOBUSS">
                  	<option value="" selected>Select</option>
  					
				</select>
				<label class="mdb-main-label BTxt9">Type of business<span class="MndtryAstr"></span></label>
             </div>
            </div>
            
  
             </div>
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="OUBL_YEARSALES"  maxlength="30"  name="OUBL_YEARSALES" 
					  class="form-control  Calculate Division Instant IsCURCommaFields OUBLMndtry  OUBLDBfields">
                      <label for="OUBL_YEARSALES" class="">Yearly Sales <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="OUBL_PROFIT" disabled maxlength="30"  name="OUBL_PROFIT" 
					  class="form-control OUBLMndtry Calculate Division  OUBLDBfields">
                      <label for="OUBL_PROFIT" class="">Profit % <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="OUBL_YEARPROFIT"  disabled maxlength="30"  name="OUBL_YEARPROFIT" class="form-control OUBLMndtry  IsCURCommaFields OUBLDBfields">
                      <label for="OUBL_YEARPROFIT" class="">Yearly Profit<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
  
             </div>
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="OUBL_MONTHPROFIT" disabled maxlength="30"  name="OUBL_MONTHPROFIT" class="form-control OUBLMndtry IsCURCommaFields Instant OUBLDBfields">
                      <label for="OUBL_MONTHPROFIT" class="">Monthly Profit<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="OUBL_FOIR" disabled maxlength="30"  name="OUBL_FOIR" class="form-control OUBLMndtry IsCURCommaFields  OUBLDBfields">
                      <label for="OUBL_FOIR" class="">FOIR<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="OUBL_PROAVAEMI" disabled maxlength="30"  name="OUBL_PROAVAEMI" class="form-control IsCURCommaFields OUBLMndtry  OUBLDBfields">
                      <label for="OUBL_PROAVAEMI" class="">Profit Available for EMI<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
  
             </div>
			 
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="OUBL_EXISTEMI"  maxlength="30"  name="OUBL_EXISTEMI" class="form-control OUBLMndtry IsCURCommaFields Medium OUBLDBfields">
                      <label for="OUBL_EXISTEMI" class="">Existing EMI <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="OUBL_PROEXISTEMI" disabled maxlength="30"  name="OUBL_PROEXISTEMI" class="form-control IsCURCommaFields OUBLMndtry  OUBLDBfields">
                      <label for="OUBL_PROEXISTEMI" class="">Profit Post Existing EMI <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="OUBL_EMILAKH" disabled  maxlength="30"  name="OUBL_EMILAKH" class="form-control OUBLMndtry IsCURCommaFields  OUBLDBfields">
                      <label for="OUBL_EMILAKH" class="">EMI Per Lakh<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
  
             </div>
			 
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="OUBL_LOAMORDISB"  maxlength="30"  name="OUBL_LOAMORDISB" class="form-control OUBLMndtry ELIGI IsCURCommaFields OUBLDBfields">
                      <label for="OUBL_LOAMORDISB" class="">Loan Amount Originally Disbursed <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="OUBL_MAXLOAELY" disabled maxlength="30"  name="OUBL_MAXLOAELY" class="form-control OUBLMndtry IsCURCommaFields OUBLDBfields">
                      <label for="OUBL_MAXLOAELY" class="">Maximum Loan Eligibility<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				</div>
			 
				  </br>
                  <div class="form-row">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TTAKEOVERUBL|OUBL" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                      <!--  <button type="button" data-aria="LSW_TTAKEOVERUBL|OUBL" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> -->
                     </div>
                  </div>
             
            </form>
         </div>
       <!--  </div>
    card 
   </div>
</div>-->
<!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/TakeoverUBL/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/TakeoverUBL/Validation.js${DMY13}"></script>                            
 