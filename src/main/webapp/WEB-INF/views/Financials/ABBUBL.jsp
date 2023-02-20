 <!-- card -->
      <div class="card">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                  <input type="text" id="ABBL_PRCSID" hidden="hidden" name="ABBL_PRCSID" class="form-control ABBLDBfields">
                  <input type="text" id="ABBL_ACTIVITYID" hidden="hidden" name="ABBL_ACTIVITYID" class="form-control ABBLDBfields">
                  <input type="text" id="ABBL_CREATEDBY" hidden="hidden" name="ABBL_CREATEDBY" class="form-control ABBLDBfields"> 
                  <input type="text" id="ABBL_DTCREATED" hidden="hidden" name="ABBL_DTCREATED" class="form-control ABBLDBfields">
                  <input type="text" id="ABBL_MODIFIEDBY" hidden="hidden" name="ABBL_MODIFIEDBY" class="form-control ABBLDBfields">
                  <input type="text" id="ABBL_DTMODIFIED" hidden="hidden" name="ABBL_DTMODIFIED" class="form-control ABBLDBfields">
				  <input type="text" id="ABBL_SCHEMENAME" hidden="hidden" name="ABBL_SCHEMENAME" class="form-control ABBLDBfields">
				  <input type="text" id="ABBL_SCHEMEID" hidden="hidden" name="ABBL_SCHEMEID" class="form-control 
				  ABBLDBfields">
				  
                   
				 </br>
				 <div class="form-row">
			    <div class="Btxt10">ABB-UBL</div>
			</div>
			</br>
				   <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_NAMEBORRO"  maxlength="30"  name="ABBL_NAMEBORRO" class="form-control ABBLMndtry IsAlphaFields NoSpecialChar  ABBLDBfields">
                      <label for="ABBL_NAMEBORRO" class="">Name of the Borrower<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_LOANAMT"  maxlength="30"  name="ABBL_LOANAMT" class="form-control ABBLMndtry IsNumberFields  IsCURCommaFields ABBLDBfields">
                      <label for="ABBL_LOANAMT" class="">Loan Amount Requested<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
			<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_LOANTENT"  maxlength="30"  name="ABBL_LOANTENT" class="form-control ABBLMndtry  IsNumberFields ABBLDBfields">
                      <label for="ABBL_LOANTENT" class="">Proposed Loan Tenure<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
            
  
             </div>
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_LOANINREST"  maxlength="30"  name="ABBL_LOANINREST" 
					      class="form-control     ABBLMndtry  IsNumberFields ABBLDBfields">
                      <label for="ABBL_LOANINREST" class="">Proposed Interest Rate<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
										
                 <div class="col-md-4">
                  <div class="md-form">
				  <select class="mdb-select md-form colorful-select dropdown-primary  SABBDBfields"   id="ABBL_NUMBNKACC" name="ABBL_NUMBNKACC">
                           <option value="" selected>--Select--</option>
						   <option value="Single">Single</option>
                           <option value="Multiple">Multiple</option>
                          
                        </select>
                  	 
                      <label for="ABBL_NUMBNKACC" class="">Number of Bank accounts considered for Eligibility<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				  <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_NOOFCREDMON"  maxlength="30"  name="ABBL_NOOFCREDMON" 
					      class="form-control  IsNumberFields   ABBLMndtry  ABBLDBfields">
                      <label for="ABBL_NOOFCREDMON" class="">No of Credit /per month<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
				</div>
		 
				
				 
				
			 <div class="form-row">
			  <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_NOOFDEBMON"  maxlength="5"  name="ABBL_NOOFDEBMON" 
					      class="form-control  IsNumberFields   ABBLMndtry  ABBLDBfields">
                      <label for="ABBL_NOOFDEBMON" class="">No of Debit/ per month<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_SUMAVG"  maxlength="30"  name="ABBL_SUMAVG" 
					  class="form-control ABBLMndtry IsNumberFields IsCURCommaFields ABBLDBfields">
                      <label for="ABBL_SUMAVG" class="">Sum of Averages<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_LOANDISBURSE"   maxlength="30"  name="ABBL_LOANDISBURSE" class="form-control ABBLMndtry IsNumberFields IsCURCommaFields ABBLDBfields">
                      <label for="ABBL_LOANDISBURSE" class="">Total of Loan Disbursed in Last 6 months<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           
				</div>
		<div class="form-row"> 
		 <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_TOTAVG"  maxlength="30"  name="ABBL_TOTAVG" class="form-control ABBLMndtry IsNumberFields IsCURCommaFields ABBLDBfields">
                      <label for="ABBL_TOTAVG" class="">Adjusted total of Averages<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_MONTHABB"  maxlength="30"  name="ABBL_MONTHABB" class="form-control ABBLMndtry IsCURCommaFields IsNumberFields ABBLDBfields">
                      <label for="ABBL_MONTHABB" class="">Monthly ABB<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_MONTHEMI"  maxlength="30"  name="ABBL_MONTHEMI" class="form-control ABBLMndtry IsCURCommaFields IsNumberFields ABBLDBfields">
                      <label for="ABBL_MONTHEMI" class="">Monthly EMI Paid in last 12 months<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
            
				</div>
			<div class="form-row">	 
			<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_TCRESUMBNKAC"  maxlength="30"  name="ABBL_TCRESUMBNKAC" class="form-control ABBLMndtry IsCURCommaFields  IsNumberFields  ABBLDBfields">
                      <label for="ABBL_TCRESUMBNKAC" class="">Total Credit Summation in last 6 months<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_LOANCRELAST"  maxlength="30"  name="ABBL_LOANCRELAST" class="form-control ABBLMndtry IsNumberFields ABBLDBfields">
                      <label for="ABBL_LOANCRELAST" class="">Loan Credits in Last 6 months <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_NONBUSCRE"  maxlength="30"  name="ABBL_NONBUSCRE" class="form-control ABBLMndtry  ABBLDBfields">
                      <label for="ABBL_NONBUSCRE" class="">Other Non-Business Creditss<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				</div>
				<div class="form-row">	
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_REVCRESUM"  maxlength="30"  name="ABBL_REVCRESUM" class="form-control ABBLMndtry  IsNumberFields ABBLDBfields">
                      <label for="ABBL_REVCRESUM" class="">Revised Credit Summation<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="ABBL_LOANEG"  maxlength="30"  name="ABBL_LOANEG" class="form-control ABBLMndtry  ABBLDBfields">
                      <label for="ABBL_LOANEG" class="">Loan Eligibility<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				</div>
				  </br>
                  <div class="form-row">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TABBUBLSCREEN|ABBL|ABBL_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TABBUBLSCREEN|ABBL|ABBL_SCHEMEID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                     </div>
                  </div>
             
            </form>
         </div>
      </div>
      <!-- card -->
<!--   </div>
   </div>   -->  
   
<script type="text/javascript" src="ThemeproLO/Financials/Script/ABBUBL/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Financials/Script/ABBUBL/Validation.js${DMY13}"></script>                            
 