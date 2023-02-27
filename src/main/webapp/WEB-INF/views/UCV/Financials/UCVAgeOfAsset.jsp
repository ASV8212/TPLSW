<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
   <div class="row">
         <div class="col-lg-12">
            <ul title="Bank" data-aria="LSW_TAGEOFASSETDTLS|AGEA|" data-popup="No"  class="nav FormPageMultiTab">
               ${SUBPAGETABDATA}
               <!-- <li id="Co-Applicant1" value="" title = "Co-Applicant1" class="nav-item  active">
                  <a> <div class="nav-link" href="#">Co-Applicant 1</div></a>
                  </li>      
                     
                  <li id=""  value="Add" title = "" class="nav-item FormPageMultiTabAdd">
                  <a> <div class="nav-link" href="#">+ Add</div>  </a>
                  </li>
                  --> 
            </ul>
         </div>
      </div>
 
  <!-- Accordion card -->
  <div class="card">
    <!-- Card header -->
	<div class="card-body px-lg-5 pt-0" >
            </br>
        <form>
			<input type="text" id="AGEA_PRCSID" hidden="hidden" name="AGEA_PRCSID" class="form-control AGEADBfields">
			<input type="text" id="AGEA_ACTIVITYID" hidden="hidden" name="AGEA_ACTIVITYID" class="form-control AGEADBfields">
			<input type="text" id="AGEA_CREATEDBY" hidden="hidden" name="AGEA_CREATEDBY" class="form-control AGEADBfields"> 
			<input type="text" id="AGEA_DTCREATED" hidden="hidden" name="AGEA_DTCREATED" class="form-control AGEADBfields">
			<input type="text" id="AGEA_MODIFIEDBY" hidden="hidden" name="AGEA_MODIFIEDBY" class="form-control AGEADBfields">
			<input type="text" id="AGEA_DTMODIFIED" hidden="hidden" name="AGEA_DTMODIFIED" class="form-control AGEADBfields">
			<input type="text" id="AGEA_SCHEMEID" hidden="hidden" name="AGEA_SCHEMEID" class="form-control  AGEADBfields">
			<input type="text" id="AGEA_LOANID" hidden="hidden" name="AGEA_LOANID" class="form-control  AGEADBfields">
			<input type="text" id="AGEA_SCHEMENAME" hidden="hidden" name="AGEA_SCHEMENAME" class="form-control AGEADBfields">       
		</br>
		<div class="form-row">
			<div class="col Btxt3">AGE OF ASSET CALCULATION</div>
        </div>
		</br>
	
		
		<div class="form-row">
		    <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="AGEA_MAFCMONTH"  maxlength="25" disabled name="AGEA_MAFCMONTH" class="form-control  IsNumberFields AGEADBfields">
                    <label for="AGEA_MAFCMONTH" class="">Mfc Month & Year<span class="MndtryAstr">*</span></label>
                </div>
            </div>	
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="AGEA_CURNTDATE"  maxlength="30" disabled name="AGEA_CURNTDATE" class="form-control  IsNumberFields AGEADBfields">
                    <label for="AGEA_CURNTDATE" class="">Current Date<span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="AGEA_PROPOSETENU"  maxlength="30" disabled name="AGEA_PROPOSETENU" class="form-control  IsNumberFields ADDDAYS EOTDATE AGEADBfields">
                    <label for="AGEA_PROPOSETENU" class="">Proposed tenure in months<span class="MndtryAstr">*</span></label>
                </div>
            </div>	
            		
		</div>
		<div class="form-row">
		    <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="AGEA_DAYS"  maxlength="5" disabled name="AGEA_DAYS" class="form-control IsNumberFields AGEADBfields">
                    <label for="AGEA_DAYS" class="">Days<span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="AGEA_EOTDATE" disabled maxlength="30" name="AGEA_EOTDATE" class="form-control  IsNumberFields AGEADBfields">
                    <label for="AGEA_EOTDATE" class="">EOT Date<span class="MndtryAstr">*</span></label>
                </div>
           </div>
           <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="AGEA_AGEOFASSET" disabled maxlength="30" name="AGEA_AGEOFASSET" class="form-control   IsNumberFields AGEADBfields">
                    <label for="AGEA_AGEOFASSET" class="">Age of Asset<span class="MndtryAstr">*</span></label>
                </div>
           </div>		
	    </div>
       <div class="form-row">		
         <div class="col-md-4">
           <div class="md-form">
              <input type="text" id="AGEA_AGEOFASSTEOT" disabled maxlength="5" name="AGEA_AGEOFASSTEOT" class="form-control IsNumberFields   AGEADBfields">
              <label for="AGEA_AGEOFASSTEOT" class="">Age of asset EOT<span class="MndtryAstr">*</span></label>
           </div>
         </div>	
       </div>		
     </br>
        <div class="form-row">
            <div class="col d-flex justify-content-center">
                <button type="button" id="Save" data-aria="LSW_TAGEOFASSETDTLS|AGEA" data-form="AGEOFASSET" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                <button type="button" data-aria="LSW_TAGEOFASSETDTLS|AGEA" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
            </div>
        </div>
             
        </form>
    </div>
		  

    <!-- Card body -->
   
  </div>
  </div>
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
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/AgeOfAsset/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/AgeOfAsset/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div>
                                </div>   -->                           