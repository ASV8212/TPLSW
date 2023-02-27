 <!-- card -->
      <div class="card">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                  <input type="text" id="ECOA_PRCSID"     hidden="hidden" name="ECOA_PRCSID"     class="form-control ECOADBfields">
                  <input type="text" id="ECOA_ACTIVITYID" hidden="hidden" name="ECOA_ACTIVITYID" class="form-control ECOADBfields">
                  <input type="text" id="ECOA_CREATEDBY"  hidden="hidden" name="ECOA_CREATEDBY"  class="form-control ECOADBfields"> 
                  <input type="text" id="ECOA_DTCREATED"  hidden="hidden" name="ECOA_DTCREATED"  class="form-control ECOADBfields">
                  <input type="text" id="ECOA_MODIFIEDBY" hidden="hidden" name="ECOA_MODIFIEDBY" class="form-control ECOADBfields">
                  <input type="text" id="ECOA_DTMODIFIED" hidden="hidden" name="ECOA_DTMODIFIED" class="form-control ECOADBfields">
                  <input type="text" id="ECOA_CUSID" hidden="hidden" name="ECOA_CUSID" class="form-control ECOADBfields">
				  <input type="text" id="ECOA_UNIQID" hidden="hidden" name="ECOA_UNIQID" class="form-control ECOADBfields">
                   <input type="text" id="ECOA_LOANID" hidden="hidden" name="ECOA_LOANID" class="form-control ECOADBfields"> 				 
			</br>
		<div class="form-row">
			<div class="col Btxt3">Eco System Auto</div>
        </div>
		</br>
		<div class="form-row">
			
			<div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="ECOA_NOOFACTLONS" name="ECOA_NOOFACTLONS" onchange="LIMITELIGIBLE();" maxlength="10"  class="form-control IsNumberFields NoSpecialChar  ECOADBfields ">
                   <label for="ECOA_NOOFACTLONS" class="">No of Active Loans considered<span class="MndtryAstr">*</span></label>
				</div>
            </div>
			<div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="ECOA_LNAMTREQ" name="ECOA_LNAMTREQ"  maxlength="10"  class="form-control IsCURCommaFields NoSpecialChar  ECOADBfields ">
                   <label for="ECOA_LNAMTREQ" class="">Loan amount Requested<span class="MndtryAstr">*</span></label>
				</div>
            </div>
			<div class="col-md-4">
                <div class="md-form">	<!--onchange="Chkmax();"  -->
                   <input type="text" id="ECOA_MAXFUNSCHME" name="ECOA_MAXFUNSCHME" maxlength="15" onchange="LIMITELIGIBLE();"  class="form-control IsCURCommaFields NoSpecialChar  ECOADBfields ">
                   <label for="ECOA_MAXFUNSCHME" class="">Max funding under the scheme<span class="MndtryAstr">*</span></label>
                </div>
            </div>
		</div>
		<div class="form-row">
			<div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="ECOA_LIMTELIGBLE" name="ECOA_LIMTELIGBLE" maxlength="15"    class="form-control IsCURCommaFields NoSpecialChar  ECOADBfields ">
                   <label for="ECOA_LIMTELIGBLE" class="">Limit Eligible<span class="MndtryAstr">*</span></label>
                </div>
            </div>	
			<div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="ECOA_PROPOSEAMT" name="ECOA_PROPOSEAMT" maxlength="15"    class="form-control IsCURCommaFields NoSpecialChar  ECOADBfields ">
                   <label for="ECOA_PROPOSEAMT" class="">Proposed Amount<span class="MndtryAstr">*</span></label>
                </div>
            </div>
							
		</div>
                  </br>
				  </br>
                  <div class="form-row"style="display:none">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TECOAUTO|ECOA|ECOA_UNIQID" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TECOAUTO|ECOA|ECOA_UNIQID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                     </div>
                  </div>
             
            </form>
         </div>
      </div>
      <!-- card -->
<!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/EcoAuto/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/EcoAuto/Validation.js${DMY13}"></script>                            
 