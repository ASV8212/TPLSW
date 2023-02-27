
 
  <!-- Accordion card -->
  <div class="card">
    <!-- Card header -->
	<div class="card-body px-lg-5 pt-0" >
            </br>
        <form>
			<input type="text" id="CRTR_PRCSID" hidden="hidden" name="CRTR_PRCSID" class="form-control CRTRDBfields">
			<input type="text" id="CRTR_ACTIVITYID" hidden="hidden" name="CRTR_ACTIVITYID" class="form-control CRTRDBfields">
			<input type="text" id="CRTR_CREATEDBY" hidden="hidden" name="CRTR_CREATEDBY" class="form-control CRTRDBfields"> 
			<input type="text" id="CRTR_DTCREATED" hidden="hidden" name="CRTR_DTCREATED" class="form-control CRTRDBfields">
			<input type="text" id="CRTR_MODIFIEDBY" hidden="hidden" name="CRTR_MODIFIEDBY" class="form-control CRTRDBfields">
			<input type="text" id="CRTR_DTMODIFIED" hidden="hidden" name="CRTR_DTMODIFIED" class="form-control CRTRDBfields">
			<input type="text" id="CRTR_SCHEMEID" hidden="hidden" name="CRTR_SCHEMEID" class="form-control  CRTRDBfields">
			<input type="text" id="CRTR_SCHEMENAME" hidden="hidden" name="CRTR_SCHEMENAME" class="form-control CRTRDBfields">       
		</br>
		<div class="form-row">
			<div class="col Btxt3">RTR</div>
        </div>
		</br>
		<div class="form-row">
            <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="CRTR_LOANAMT" disabled maxlength="30" onchange="CheckLoan();" name="CRTR_LOANAMT" class="form-control IsCURCommaFields CRTRDBfields">
                    <label for="CRTR_LOANAMT" class="">Loan amount Requested</label>
                </div>
            </div>
				 
            <div class="col-md-4">
                <div class="md-form">
                  	<input type="text" id="CRTR_ROI"  disabled maxlength="30" onchange="CheckLoan();" name="CRTR_ROI" class="form-control     CRTRDBfields">
                    <label for="CRTR_ROI" class="">ROI  </label>
				</div>
            </div>
				
            <div class="col-md-4">
                <div class="md-form">
                  	<input type="text" id="CRTR_TENOR"  disabled maxlength="30" onchange="checkloan();" name="CRTR_TENOR" class="form-control     CRTRDBfields">
                    <label for="CRTR_TENOR" class="">Tenor </label>
				</div>
			</div>
  
        </div>
		
		<div class="form-row">
            <div class="col-md-4">
                <div class="md-form">
                  	<input type="text" id="CRTR_EXISTINGLNAMT"  maxlength="30"  name="CRTR_EXISTINGLNAMT" class="form-control   IsCURCommaFields CRTRDBfields">
                    <label for="CRTR_EXISTINGLNAMT" class="">Existing Loan amount (Rs) </label>
                </div>
            </div>
				 
            <div class="col-md-4">
                <div class="md-form">
					<input type="text" id="CRTR_CURRENTOUTST"  maxlength="30"  name="CRTR_CURRENTOUTST" class="form-control  IsCURCommaFields SUB CRTRDBfields">
                    <label for="CRTR_CURRENTOUTST" class="">Current Out Standing </label>
                </div>
            </div>
				
            <div class="col-md-4">
                <div class="md-form">
					<input type="text" id="CRTR_COMPLETELNAMT" disabled maxlength="30"  name="CRTR_COMPLETELNAMT" class="form-control  IsCURCommaFields  CRTRDBfields">
                    <label for="CRTR_COMPLETELNAMT" class="">Completed Loan amount </label>
                </div>
            </div>
  
		</div>
			 
		<div class="form-row">
            <div class="col-md-4">
                <div class="md-form">
					<input type="text" id="CRTR_VINTAGELN"  maxlength="30"  name="CRTR_VINTAGELN" class="form-control  IsCURCommaFields  CRTRDBfields">
                    <label for="CRTR_VINTAGELN" class="">Vintage of Loan </label>
                </div>
            </div>
				 
            <div class="col-md-4">
                <div class="md-form">
					<input type="text" id="CRTR_MULTIPLIERLNAMT"  maxlength="30"  name="CRTR_MULTIPLIERLNAMT" class="form-control  IsCURCommaFields INMUL CRTRDBfields">
                    <label for="CRTR_MULTIPLIERLNAMT" class="">Multiplier on the completed loan amount </label>
                </div>
            </div>
				
            <div class="col-md-4">
                <div class="md-form">
                  	<input type="text" id="CRTR_ELIGIBLELNAMT"  disabled maxlength="30"  name="CRTR_ELIGIBLELNAMT" class="form-control IsCURCommaFields  MIN CRTRDBfields">
                    <label for="CRTR_ELIGIBLELNAMT" class="">Eligible loan amount </label>
                </div>
            </div>
  
             </div>
			 
		<div class="form-row">
            <div class="col-md-4">
                <div class="md-form">
					<input type="text" id="CRTR_PROPOSEDLNAMT" disabled  maxlength="30"  name="CRTR_PROPOSEDLNAMT" class="form-control IsCURCommaFields   CRTRDBfields">
					<label for="CRTR_PROPOSEDLNAMT" class="">Proposed Loan Amount </label>
				</div>
            </div>
			
        </div>
				  </br>
        <div class="form-row">
            <div class="col d-flex justify-content-center">
                <button type="button" id="Save" data-aria="LSW_TRTRDETAILS|CRTR|CRTR_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
               <!-- <button type="button" data-aria="LSW_TRTRDETAILS|CRTR|CRTR_SCHEMEID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> -->
            </div>
        </div>
             
        </form>
    </div>
		  

    <!-- Card body -->
   
  </div>
							 
							 
<!-- <table style="display:none" id="GridTable2">
<thead>
<th>PVCS_APPLNAME</th>
<th>PVCS_CIBILSTATUS</th>
<th>PVCS_DEDUBESTAUS</th>
<th>PVCS_PROFCHECK</th>
<th>PVCS_CUSID</th>
</thead>
</table>-->
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/RTR/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/RTR/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div>
                                </div>   -->                           