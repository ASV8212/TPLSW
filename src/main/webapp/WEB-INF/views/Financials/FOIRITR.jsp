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
        <input type="text" id="FOIR_PRCSID" hidden="hidden" name="FOIR_PRCSID" class="form-control FOIRDBfields">
        <input type="text" id="FOIR_ACTIVITYID" hidden="hidden" name="FOIR_ACTIVITYID" class="form-control FOIRDBfields">
        <input type="text" id="FOIR_CREATEDBY" hidden="hidden" name="FOIR_CREATEDBY" class="form-control FOIRDBfields"> 
        <input type="text" id="FOIR_DTCREATED" hidden="hidden" name="FOIR_DTCREATED" class="form-control FOIRDBfields">
        <input type="text" id="FOIR_MODIFIEDBY" hidden="hidden" name="FOIR_MODIFIEDBY" class="form-control FOIRDBfields">
        <input type="text" id="FOIR_DTMODIFIED" hidden="hidden" name="FOIR_DTMODIFIED" class="form-control FOIRDBfields">
		<input type="text" id="FOIR_SCHEMENAME" hidden="hidden" name="FOIR_SCHEMENAME" class="form-control FOIRDBfields">
		<input type="text" id="FOIR_SCHEMEID" hidden="hidden" name="FOIR_SCHEMEID" class="form-control FOIRDBfields">
		
        <input type="text" id="FOIR_PRODUCT" hidden="hidden" name="FOIR_PRODUCT" class="form-control FOIRDBfields">		
				 </br>
				 <div class="form-row">
			    <div class="Btxt10">FOIR-ITR</div>
			</div>
			</br>
			<div class="form-row ALLI">
        	<div class="col Btxt10" style="color: rgb(255, 0, 0);">Details to be entered in actuals (Rs)</div>
        </div>
			<div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_PRDNAME" disabled maxlength="30"  name="FOIR_PRDNAME" class="form-control  FOIRMndtry  FOIRDBfields"onchange= "Product()">
                      <label for="FOIR_PRDNAME" class="">Product<span class="MndtryAstr">*</span></label>
                  </div>
            </div>
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_FOIRPER"  maxlength="30"  name="FOIR_FOIRPER" class="form-control FOIRMndtry IsNumberFields Charges FOIRDBfields   DataNormal">
                      <label for="FOIR_FOIRPER" class="">FOIR %<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
           		<div class="md-form">
                  <input type="text" id="FOIR_INAPPROIPRO" disabled maxlength="30"  name="FOIR_INAPPROIPRO" class="form-control FOIRMndtry IsNumberFields FOIRDBfields"onchange= "Product()">
                  <label for="FOIR_INAPPROIPRO" class="">Input Applicable ROI proposed <span class="MndtryAstr">*</span></label>    
				
             </div>
            </div>
            
  
             </div>
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_SETENUREPRO"  maxlength="30" disabled name="FOIR_SETENUREPRO"  class="form-control   IsNumberFields  FOIRMndtry  FOIRDBfields"onchange= "Product()">
                      <label for="FOIR_SETENUREPRO" class="">Select Tenure Proposed <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_PAT"  maxlength="30"  name="FOIR_PAT" 
					  class="form-control FOIRMndtry Charges IsNumberFields IsCURCommaFields NoSpecialChar FOIRDBfields">
                      <label for="FOIR_PAT" class="">PAT  <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_DEP"   maxlength="30"  name="FOIR_DEP" class="form-control IsNumberFields IsCURCommaFields NoSpecialChar FOIRMndtry Charges  FOIRDBfields">
                      <label for="FOIR_DEP" class="">Dep<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
  
             </div>
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_INEXCPART"  maxlength="30"  name="FOIR_INEXCPART" class="form-control FOIRMndtry IsNumberFields IsCURCommaFields NoSpecialChar Charges FOIRDBfields">
                      <label for="FOIR_INEXCPART" class="">Interest excluding interest paid to related party<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_REMPARTNER"  maxlength="30"  name="FOIR_REMPARTNER" class="form-control FOIRMndtry IsNumberFields IsCURCommaFields NoSpecialChar Charges FOIRDBfields">
                      <label for="FOIR_REMPARTNER" class="">Remuneration<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_OTHNONBUS"  maxlength="30"  name="FOIR_OTHNONBUS" class="form-control FOIRMndtry Charges IsNumberFields IsCURCommaFields NoSpecialChar FOIRDBfields">
                      <label for="FOIR_OTHNONBUS" class="">Other Non-Business Income<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
  
             </div>
			 
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_AGROTHERINC"  maxlength="30"  name="FOIR_AGROTHERINC" class="form-control FOIRMndtry IsNumberFields IsCURCommaFields NoSpecialChar Charges FOIRDBfields">
                      <label for="FOIR_AGROTHERINC" class="">Agri income / Other Income  <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_INDIVITAX"  maxlength="30"  name="FOIR_INDIVITAX" class="form-control FOIRMndtry IsNumberFields IsCURCommaFields NoSpecialChar Charges  FOIRDBfields">
                      <label for="FOIR_INDIVITAX" class="">Individual Tax <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_TOEGPERANM"  maxlength="30" disabled name="FOIR_TOEGPERANM" class="form-control FOIRMndtry IsNumberFields IsCURCommaFields NoSpecialChar MENU FOIRDBfields">
                      <label for="FOIR_TOEGPERANM" class="">Total eligible income p.a<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
  
             </div>
			 
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_TOEGPERMON"  maxlength="30" disabled name="FOIR_TOEGPERMON" class="form-control FOIRMndtry IsNumberFields IsCURCommaFields NoSpecialChar Charges FOIRDBfields">
                      <label for="FOIR_TOEGPERMON" class="">Total eligible income p.m <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_FOIREGINC"  maxlength="30" disabled name="FOIR_FOIREGINC" class="form-control IsNumberFields IsCURCommaFields NoSpecialChar FOIRMndtry SCROLL FOIRDBfields">
                      <label for="FOIR_FOIREGINC" class="">FOIR applied eligible income<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_EXEMIBORFUN"  maxlength="30" disabled name="FOIR_EXEMIBORFUN" class="form-control IsNumberFields IsCURCommaFields NoSpecialChar FOIRMndtry  FOIRDBfields" onchange="" >
                      <label for="FOIR_EXEMIBORFUN" class="">Existing EMI <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
				</div>
					 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_PREFUNFCF"  maxlength="30" disabled name="FOIR_PREFUNFCF" class="form-control IsNumberFields IsCURCommaFields NoSpecialChar FOIRMndtry FOIRDBfields">
                      <label for="FOIR_PREFUNFCF" class="">Pre funding FCF <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_EMIASPRO"  maxlength="30" disabled name="FOIR_EMIASPRO" class="form-control FOIRMndtry IsNumberFields IsCURCommaFields NoSpecialChar FOIRDBfields">
                      <label for="FOIR_EMIASPRO" class="">EMI p.m for 1 Lac <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_LOANEGBI"  maxlength="30" disabled name="FOIR_LOANEGBI" class="form-control FOIRMndtry IsNumberFields IsCURCommaFields NoSpecialChar FOIRDBfields">
                      <label for="FOIR_LOANEGBI" class="">Loan Eligibility<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
				</div>
						 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_LOANPROP"  maxlength="30" disabled name="FOIR_LOANPROP" class="form-control IsNumberFields IsCURCommaFields NoSpecialChar FOIRMndtry  FOIRDBfields">
                      <label for="FOIR_LOANPROP" class="">Loan Proposed <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_PREFUNDSCR"  maxlength="30" disabled name="FOIR_PREFUNDSCR" class="form-control IsNumberFields IsCURCommaFields NoSpecialChar FOIRMndtry  FOIRDBfields">
                      <label for="FOIR_PREFUNDSCR" class="">Pre funding DSCR  <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FOIR_POSTFUNDSCR"  maxlength="30" disabled name="FOIR_POSTFUNDSCR" class="form-control IsNumberFields IsCURCommaFields NoSpecialChar FOIRMndtry  FOIRDBfields">
                      <label for="FOIR_POSTFUNDSCR" class="">Post funding DSCR <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
				</div>
			 
				  </br>
                  <div class="form-row"style="display:none">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TFOIRMETHOD|FOIR|FOIR_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                       <!-- <button type="button" data-aria="LSW_TFOIRMETHOD|FOIR" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> -->
                     </div>
                  </div>
             
            </form>
         </div>
      </div>
      <!-- card -->
   <!--</div>-->
<!--</div>-->
<!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/Financials/Script/FOIRITR/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Financials/Script/FOIRITR/Validation.js${DMY13}"></script>                            
 