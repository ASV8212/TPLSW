
<!-- Start -->
<!--Accordion wrapper-->
  <!-- Accordion card -->
  <div class="card">
    <!-- Card header -->
	 <div class="card-body px-lg-5 pt-0" >
        </br>
			<form>
                <input type="text" id="CITR_PRCSID" hidden="hidden" name="CITR_PRCSID" class="form-control CITRDBfields">
                <input type="text" id="CITR_ACTIVITYID" hidden="hidden" name="CITR_ACTIVITYID" class="form-control CITRDBfields">
                <input type="text" id="CITR_CREATEDBY" hidden="hidden" name="CITR_CREATEDBY" class="form-control CITRDBfields"> 
                <input type="text" id="CITR_DTCREATED" hidden="hidden" name="CITR_DTCREATED" class="form-control CITRDBfields">
                <input type="text" id="CITR_MODIFIEDBY" hidden="hidden" name="CITR_MODIFIEDBY" class="form-control CITRDBfields">
                <input type="text" id="CITR_DTMODIFIED" hidden="hidden" name="CITR_DTMODIFIED" class="form-control CITRDBfields">
				<input type="text" id="CITR_SCHEMEID" hidden="hidden" name="CITR_SCHEMEID" class="form-control  CITRDBfields">
				<input type="text" id="CITR_SCHEMENAME" hidden="hidden" name="CITR_SCHEMENAME" class="form-control CITRDBfields">  
		</br>
			<div class="form-row">
				<div class="col Btxt3">ITR Based Eligibility Calculator</div>
			</div>
			</br>
			
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_PROPOSEINR" disabled maxlength="30" onchange="Checkint();" name="CITR_PROPOSEINR" class="form-control    CITRDBfields">
						<label for="CITR_PROPOSEINR" class="">Proposed interest rate </label>
					</div>
				</div>
					 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_PROTENOR"  disabled maxlength="30" onchange="Checkint();" name="CITR_PROTENOR" class="form-control    CITRDBfields">
						<label for="CITR_PROTENOR" class="">Proposed tenure </label>
					</div>
				</div>
					
				<!--<div class="col-md-4">
					  <div class="md-form">
						  <input type="text" id="CITR_TYOFBUS"  disabled maxlength="30" onchange="checkloan();" name="CITR_TYOFBUS" class="form-control    CITRDBfields">
						  <label for="CITR_TYOFBUS" class="">Type of business </label>
					  </div>
					</div>					
					<div class="form-row">-->
				<div class="col-md-4">
					<div class="md-form">
						<select class="md-form colorful-select dropdown-primary  CITRDBfields  "    id="CITR_TYOFBUS" name="CITR_TYOFBUS">
						</select>
							<label class="mdb-main-label BTxt9">Type of business </label>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
						<select class="md-form colorful-select dropdown-primary  CITRDBfields  "   id="CITR_TYOFPRO" name="CITR_TYOFPRO">
                        </select>
							<label class="mdb-main-label BTxt9">Type of Property </label>
                    </div>
                </div>
				 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_PROVAL"  maxlength="30"  name="CITR_PROVAL" class="form-control CHECKIF IsCURCommaFields CITRDBfields">
						<label for="CITR_PROVAL" class="">Property Value </label>
					</div>
                </div>
			
            </div>
				</br>
				<div class="form-row">
                    <div class="col Btxt10">Profit Multiplier</div>
                </div>
				</br>
				  
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_PATLAST"  maxlength="30"  name="CITR_PATLAST" class="form-control IsNumberFields CHECKIF IsCURCommaFields NoSpecialChar CITRDBfields">
						<label for="CITR_PATLAST" class="">PAT (Latest Year,N) </label>
					</div>
                </div>
				 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_PATN"  maxlength="30"  name="CITR_PATN" class="form-control IsNumberFields IsCURCommaFields NoSpecialChar CHECKIF CITRDBfields">
						<label for="CITR_PATN" class="">PAT (N-1 year) </label>
					</div>
                </div>
				
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_MULTIPLIER"  disabled  maxlength="30"  name="CITR_MULTIPLIER" class="form-control  IsCURCommaFields CHECKIF NoSpecialChar CITRDBfields">
						<label for="CITR_MULTIPLIER" class="">Multiplier (%)</label>
					</div>
                </div>
            </div>
	  
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_ADJUSTPAT" disabled maxlength="30"  name="CITR_ADJUSTPAT" class="form-control   IsCURCommaFields CHECKIF NoSpecialChar CITRDBfields">
						<label for="CITR_ADJUSTPAT" class="">Adjusted PAT </label>
					</div>
                </div>
				 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_ADJUSTMUL" disabled maxlength="30"  name="CITR_ADJUSTMUL" class="form-control   IsCURCommaFields CHECKIF NoSpecialChar CITRDBfields">
						<label for="CITR_ADJUSTMUL" class="">Adjusted PAT with Multiplier </label>
					</div>
                </div>
				
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_DEPRECIA"    maxlength="30"  name="CITR_DEPRECIA" class="form-control CHECKIF  IsCURCommaFields NoSpecialChar CITRDBfields">
						<label for="CITR_DEPRECIA" class="">Depreciation </label>
					</div>
                </div>
  
            </div>
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_INTEREST"  maxlength="30"  name="CITR_INTEREST" class="form-control IsCURCommaFields IsNumberFields    NoSpecialChar  CHECKIF   CITRDBfields">
						<label for="CITR_INTEREST" class="">Interest </label>
					</div>
                </div>
				 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_PARTNER"  maxlength="30"  name="CITR_PARTNER" class="form-control CHECKIF IsCURCommaFields  CITRDBfields">
						<label for="CITR_PARTNER" class="">Partner's Remuneration </label>
					</div>
                </div>
				
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_INTERESTCAP"    maxlength="30"  name="CITR_INTERESTCAP" class="form-control      IsNumberFields CHECKIF IsCURCommaFields NoSpecialChar  CITRDBfields">
						<label for="CITR_INTERESTCAP" class="">Interest on Capital </label>
					</div>
                </div>
  
            </div>
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_DIVIDEND"  maxlength="30"  name="CITR_DIVIDEND" class="form-control    IsCURCommaFields CHECKIF CITRDBfields">
						<label for="CITR_DIVIDEND" class="">Dividend </label>
					</div>
                </div>
		 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_REVISEDANN" disabled  maxlength="30"  name="CITR_REVISEDANN" class="form-control  IsCURCommaFields CHECKIF NoSpecialChar CITRDBfields">
						<label for="CITR_REVISEDANN" class="">Revised Cash Profit - Annual </label>
					</div>
                </div>
				
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_REVISEDMON"  disabled  maxlength="30"  name="CITR_REVISEDMON" class="form-control IsCURCommaFields CHECKIF NoSpecialChar CITRDBfields">
						<label for="CITR_REVISEDMON" class="">Revised Cash Profit - Monthly </label>
					</div>
                </div>
  
            </div>
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_ADDMONTHLY"  maxlength="30"  name="CITR_ADDMONTHLY" class="form-control  IsCURCommaFields CHECKIF NoSpecialChar CITRDBfields">
						<label for="CITR_ADDMONTHLY" class="">Additional Income - Monthly </label>
					</div>
                </div>
				 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_ADDCONSI" disabled maxlength="30"  name="CITR_ADDCONSI" class="form-control IsCURCommaFields CHECKIF NoSpecialChar CITRDBfields">
						<label for="CITR_ADDCONSI" class="">Additional Income Considered </label>
					</div>
                </div>
				
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_SURPLUSLOAN"  disabled  maxlength="30"  name="CITR_SURPLUSLOAN" class="form-control IsCURCommaFields CHECKIF NoSpecialChar CITRDBfields">
						<label for="CITR_SURPLUSLOAN" class="">Surplus Available for Loan Servicing </label>
					</div>
                </div>
  
            </div> 
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_EXISTINGLN"  maxlength="30"  name="CITR_EXISTINGLN" class="form-control  IsCURCommaFields CHECKIF NoSpecialChar CITRDBfields">
						<label for="CITR_EXISTINGLN" class="">Existing Loan Obligations </label>
					</div>
                </div>
				 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_PROPOSEEMI" disabled maxlength="30"  name="CITR_PROPOSEEMI" class="form-control IsCURCommaFields CHECKIF NoSpecialChar CITRDBfields">
						<label for="CITR_PROPOSEEMI" class="">Proposed EMI </label>
					</div>
                </div>
				
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_EMILAKH"  disabled  maxlength="30"  name="CITR_EMILAKH" class="form-control  IsCURCommaFields CHECKIF NoSpecialChar CITRDBfields">
						<label for="CITR_EMILAKH" class="">EMI Per Lakh </label>
					</div>
                </div>
  
            </div>
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_FINALLOAN" disabled maxlength="30"  name="CITR_FINALLOAN" class="form-control  IsCURCommaFields CHECKIF NoSpecialChar CITRDBfields">
						<label for="CITR_FINALLOAN" class="">Final Loan Eligibility </label>
					</div>
                </div>
				 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_PROPOSELN" disabled maxlength="30"  name="CITR_PROPOSELN" class="form-control  IsCURCommaFields CHECKIF NoSpecialChar CITRDBfields">
						<label for="CITR_PROPOSELN" class="">Proposed Loan </label>
					</div>
                </div>
				
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CITR_FINALLTV" disabled   maxlength="30"  name="CITR_FINALLTV" class="form-control  IsCURCommaFields CHECKIF NoSpecialChar CITRDBfields">
						<label for="CITR_FINALLTV" class="">Final LTV  (%) </label>
					</div>
                </div>
            </div>
			</br>
            <div class="form-row"style="display:none">
                <div class="col d-flex justify-content-center">
                    <button type="button" id="Save" data-aria="LSW_TITRBASEDDETAILS|CITR|CITR_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                   <!-- <button type="button" data-aria="LSW_TITRBASEDDETAILS|CITR|CITR_SCHEMEID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> -->
				</div>
            </div>  
           </form>
        </div>
    <!-- Card body   EMILAK FINLN PROPOSE LTV -->
  </div>
  <!-- Accordion card -->

<!-- <table style="display:none" id="GridTable2">
<thead>
<th>PVCS_APPLNAME</th>
<th>PVCS_CIBILSTATUS</th>
<th>PVCS_DEDUBESTAUS</th>
<th>PVCS_PROFCHECK</th>
<th>PVCS_CUSID</th>
</thead>
</table>-->
  <script type="text/javascript" src="ThemeproLO/Financials/Script/ITRBased/LoadSubmit.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/Financials/Script/ITRBased/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div></script>               