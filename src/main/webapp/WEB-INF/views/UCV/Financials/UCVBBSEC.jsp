
 
  <!-- Accordion card -->
  <div class="card">
    <!-- Card header -->
	<div class="card-body px-lg-5 pt-0" >
            </br>
        <form>
			<input type="text" id="BBSE_PRCSID" hidden="hidden" name="BBSE_PRCSID" class="form-control BBSEDBfields">
			<input type="text" id="BBSE_ACTIVITYID" hidden="hidden" name="BBSE_ACTIVITYID" class="form-control BBSEDBfields">
			<input type="text" id="BBSE_CREATEDBY" hidden="hidden" name="BBSE_CREATEDBY" class="form-control BBSEDBfields"> 
			<input type="text" id="BBSE_DTCREATED" hidden="hidden" name="BBSE_DTCREATED" class="form-control BBSEDBfields">
			<input type="text" id="BBSE_MODIFIEDBY" hidden="hidden" name="BBSE_MODIFIEDBY" class="form-control BBSEDBfields">
			<input type="text" id="BBSE_DTMODIFIED" hidden="hidden" name="BBSE_DTMODIFIED" class="form-control BBSEDBfields">
			<input type="text" id="BBSE_SCHEMEID" hidden="hidden" name="BBSE_SCHEMEID" class="form-control  BBSEDBfields">
			<input type="text" id="BBSE_LOANID" hidden="hidden" name="BBSE_LOANID" class="form-control  BBSEDBfields">
			<input type="text" id="BBSE_SCHEMENAME" hidden="hidden" name="BBSE_SCHEMENAME" class="form-control BBSEDBfields">       
		</br>
		<div class="form-row">
			<div class="col Btxt3">BB Secured Loan</div>
        </div>
		</br>
		
		<div class="form-row">
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="BBSE_LTVALLOWED"  maxlength="5" disabled name="BBSE_LTVALLOWED" class="form-control IsNumberFields BBSEMndtry IsPercentageSPL BBSEDBfields">
                    <label for="BBSE_LTVALLOWED" class="">LTV allowed for Asset<span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="BBSE_GRIDVAL"  maxlength="25" disabled name="BBSE_GRIDVAL" class="form-control IsNumberFields BBSEMndtry BBSEDBfields">
                    <label for="BBSE_GRIDVAL" class="">Grid Value<span class="MndtryAstr">*</span></label>
                </div>
            </div>	
			<div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="BBSE_VALUATIONAMT"  maxlength="30" disabled name="BBSE_VALUATIONAMT" class="form-control IsNumberFields BBSEMndtry BBSEDBfields">
                    <label for="BBSE_VALUATIONAMT" class="">Valuation Amount<span class="MndtryAstr">*</span></label>
                </div>
            </div>			      					
		</div>
		<div class="form-row">
		    <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="BBSE_IDV"  maxlength="25" disabled name="BBSE_IDV" class="form-control IsCURCommaFields IsNumberFields BBSEDBfields">
                    <label for="BBSE_IDV" class="">IDV<span class="MndtryAstr">*</span></label>
                </div>
            </div>	
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="BBSE_COSTOFASSET"  maxlength="30" disabled name="BBSE_COSTOFASSET" class="form-control IsCURCommaFields IsNumberFields BBSEDBfields">
                    <label for="BBSE_COSTOFASSET" class="">Cost of Asset<span class="MndtryAstr">*</span></label>
                </div>
            </div>
			<div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="BBSE_MAXFUNDLTV"  maxlength="30" disabled name="BBSE_MAXFUNDLTV" class="form-control BBSEMndtry IsCURCommaFields IsNumberFields BBSEDBfields">
                    <label for="BBSE_MAXFUNDLTV" class="">Max funding basis LTV<span class="MndtryAstr">*</span></label>
                </div>
            </div>
		</div>
			<div class="form-row">
			
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="BBSE_LOANAMTREQ"  maxlength="30" disabled name="BBSE_LOANAMTREQ" class="form-control IsCURCommaFields IsNumberFields BBSEDBfields">
                    <label for="BBSE_LOANAMTREQ" class="">Loan amount Requested<span class="MndtryAstr">*</span></label>
                </div>
            </div>
			
		    <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="BBSE_KLIAMT"  maxlength="30" disabled name="BBSE_KLIAMT" class="form-control IsCURCommaFields IsNumberFields BBSEMndtry BBSEDBfields">
                    <label for="BBSE_KLIAMT" class="">KLI Amount<span class="MndtryAstr">*</span></label>
                </div>
            </div>	   
			
			<div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="BBSE_HOSPICASH"  maxlength="30" disabled name="BBSE_HOSPICASH" class="form-control IsCURCommaFields IsNumberFields BBSEMndtry BBSEDBfields">
                    <label for="BBSE_HOSPICASH" class="">Hospi Cash<span class="MndtryAstr">*</span></label>
                </div>
			</div>	
			</div>
			<div class="form-row">	
				<div class="col-md-4">
                    <div class="md-form">
                       <input type="text" id="BBSE_ELIGLOANAMT"  maxlength="30" disabled name="BBSE_ELIGLOANAMT" class="form-control IsNumberFields   BBSEDBfields BBSEMndtry">
                       <label for="BBSE_ELIGLOANAMT" class="">Eligible loan amount<span class="MndtryAstr">*</span></label>
                    </div>
                </div>	
			 <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="BBSE_FUNDEDLTV" disabled maxlength="5" disabled name="BBSE_FUNDEDLTV" class="form-control IsCURCommaFields IsPercentageSPL IsNumberFields BBSEDBfields BBSEMndtry">
                    <label for="BBSE_FUNDEDLTV" class="">Funded LTV<span class="MndtryAstr">*</span></label>
                </div>
           </div>
			</div>
	 

</div>
    		
     </br>
        <div class="form-row"style="display:none">
		
            <div class="col d-flex justify-content-center">
                <button type="button" id="Save" data-aria="LSW_TBBSECURED|BBSE|BBSE_SCHEMEID" data-form="BBSecured" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                <button type="button" data-aria="LSW_TBBSECURED|BBSE|BBSE_SCHEMEID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
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

<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/UCVBBSEC/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/UCVBBSEC/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div>
                                </div>   -->                           