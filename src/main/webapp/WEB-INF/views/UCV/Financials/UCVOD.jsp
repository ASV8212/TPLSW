
 
  <!-- Accordion card -->
  <div class="card">
    <!-- Card header -->
	<div class="card-body px-lg-5 pt-0" >
            </br>
        <form>
			<input type="text" id="CTOD_PRCSID" hidden="hidden" name="CTOD_PRCSID" class="form-control CTODDBfields">
			<input type="text" id="CTOD_ACTIVITYID" hidden="hidden" name="CTOD_ACTIVITYID" class="form-control CTODDBfields">
			<input type="text" id="CTOD_CREATEDBY" hidden="hidden" name="CTOD_CREATEDBY" class="form-control CTODDBfields"> 
			<input type="text" id="CTOD_DTCREATED" hidden="hidden" name="CTOD_DTCREATED" class="form-control CTODDBfields">
			<input type="text" id="CTOD_MODIFIEDBY" hidden="hidden" name="CTOD_MODIFIEDBY" class="form-control CTODDBfields">
			<input type="text" id="CTOD_DTMODIFIED" hidden="hidden" name="CTOD_DTMODIFIED" class="form-control CTODDBfields">
			<input type="text" id="CTOD_SCHEMEID" hidden="hidden" name="CTOD_SCHEMEID" class="form-control  CTODDBfields">
			<input type="text" id="CTOD_LOANID" hidden="hidden" name="CTOD_LOANID" class="form-control  CTODDBfields">
			<input type="text" id="CTOD_SCHEMENAME" hidden="hidden" name="CTOD_SCHEMENAME" class="form-control CTODDBfields">       
		</br>
		<div class="form-row">
			<div class="col Btxt3">Transporter OD</div>
        </div>
		</br>
		<div class="form-row">
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTOD_NOOFVEHICLE" disabled maxlength="5" name="CTOD_NOOFVEHICLE" class="form-control OVEREXT IsNumberFields CTODDBfields">
                    <label for="CTOD_NOOFVEHICLE" class="">No of vehicles owned by the applicant group<span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTOD_ESTIINCM"  maxlength="30" name="CTOD_ESTIINCM" class="form-control IsCURCommaFields OVEREXT IsNumberFields CTODDBfields">
                    <label for="CTOD_ESTIINCM" class="">Estimated income per vehicle per month<span class="MndtryAstr">*</span></label>
                </div>
            </div>	
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTOD_OVERALLEST"  maxlength="25" name="CTOD_OVERALLEST" disabled class="form-control IsCURCommaFields IsNumberFields CTODDBfields">
                    <label for="CTOD_OVERALLEST" class="">Overall estimated turnover per Annam<span class="MndtryAstr">*</span></label>
                </div>
            </div>	
		</div>
		<div class="form-row">
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTOD_OVERDRFTLN"  maxlength="30" disabled name="CTOD_OVERDRFTLN" class="form-control IsCURCommaFields IsNumberFields CTODDBfields OVEREXT">
                    <label for="CTOD_OVERDRFTLN" class="">Overdraft loan eligibility<span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTOD_EXISTOVRDFT"  maxlength="30" name="CTOD_EXISTOVRDFT" class="form-control IsCURCommaFields IsNumberFields CTODDBfields OVEREXT">
                    <label for="CTOD_EXISTOVRDFT" class="">Existing Overdraft loans<span class="MndtryAstr">*</span></label>
                </div>
            </div>	
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTOD_NETELIOVRDFT"  maxlength="25" disabled name="CTOD_NETELIOVRDFT" class="form-control IsCURCommaFields IsNumberFields CTODDBfields">
                    <label for="CTOD_NETELIOVRDFT" class="">Net eligible for overdraft loan<span class="MndtryAstr">*</span></label>
                </div>
            </div>						
		</div>
		<div class="form-row">
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTOD_PROPOSEASST" disabled maxlength="30" name="CTOD_PROPOSEASST" class="form-control IsCURCommaFields IsNumberFields CTODDBfields">
                    <label for="CTOD_PROPOSEASST" class="">Proposed assets value<span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTOD_NETELINLAMT"  maxlength="30" disabled name="CTOD_NETELINLAMT" class="form-control IsCURCommaFields IsNumberFields CTODDBfields">
                    <label for="CTOD_NETELINLAMT" class="">Net eligible loan amount based on proposed asset collaterals<span class="MndtryAstr">*</span></label>
                </div>
            </div>	
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTOD_FNLLNELI" disabled maxlength="25" name="CTOD_FNLLNELI" class="form-control IsCURCommaFields IsNumberFields CTODDBfields">
                    <label for="CTOD_FNLLNELI" class="">Final loan eligibility<span class="MndtryAstr">*</span></label>
                </div>
            </div>		
		</div>		
		</br>
        <div class="form-row">
            <div class="col d-flex justify-content-center">
                <button type="button" id="Save" data-aria="LSW_TTRANSODDETAILS|CTOD|CTOD_SCHEMEID" data-form="OD" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
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
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/TransporterOD/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/TransporterOD/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div>
                                </div>   -->                           