
 
  <!-- Accordion card -->
  <div class="card">
    <!-- Card header -->
	<div class="card-body px-lg-5 pt-0" >
            </br>
        <form>
			<input type="text" id="CTLN_PRCSID" hidden="hidden" name="CTLN_PRCSID" class="form-control CTLNDBfields">
			<input type="text" id="CTLN_ACTIVITYID" hidden="hidden" name="CTLN_ACTIVITYID" class="form-control CTLNDBfields">
			<input type="text" id="CTLN_CREATEDBY" hidden="hidden" name="CTLN_CREATEDBY" class="form-control CTLNDBfields"> 
			<input type="text" id="CTLN_DTCREATED" hidden="hidden" name="CTLN_DTCREATED" class="form-control CTLNDBfields">
			<input type="text" id="CTLN_MODIFIEDBY" hidden="hidden" name="CTLN_MODIFIEDBY" class="form-control CTLNDBfields">
			<input type="text" id="CTLN_DTMODIFIED" hidden="hidden" name="CTLN_DTMODIFIED" class="form-control CTLNDBfields">
			<input type="text" id="CTLN_SCHEMEID" hidden="hidden" name="CTLN_SCHEMEID" class="form-control  CTLNDBfields">
			<input type="text" id="CTLN_LOANID" hidden="hidden" name="CTLN_LOANID" class="form-control  CTODDBfields">
			<input type="text" id="CTLN_SCHEMENAME" hidden="hidden" name="CTLN_SCHEMENAME" class="form-control CTLNDBfields">       
		</br>
		<div class="form-row">
			<div class="col Btxt3">Term Loan</div>
        </div>
		</br>
		<div class="form-row">
            <div class="col-md-4">
           		<div class="md-form">
					<select class="mdb-select md-form colorful-select dropdown-primary CTLNDBfields CTLNMndtry" onchange="CheckDCIIBSts('DC')" id="CTLN_DECODESTUS" name="CTLN_DECODESTUS">
						<option value="">Select</option>
						<option value="Positive">Positive</option>
						<option value="Negative">Negative</option>
					</select>
					<label class="mdb-main-label BTxt9">Decoder Status<span class="MndtryAstr">*</span></label>
				</div>
            </div>
			<div class="col-md-4 DCRMK">
              <div class="md-form">
                <input type="text" id="CTLN_DCREMARK"  maxlength="5000" name="CTLN_DCREMARK" class="form-control CTLNDBfields ">
                <label for="CTLN_DCREMARK" class="">Decoder Remark<span class="MndtryAstr">*</span></label>
			  </div> 
             </div>
			 <div class="col-md-4 ADDFIELDS DC">
			 <div class="md-form">
				<div class="row DC" >
					<div class="col-md-8 Formcol-mdLR DCupload">
						<div class="md-form">
						<table><tr>
							<td>
							<div id="CTLN_DCUPLOADUPLOAD"  class="file-field">
								<a class="">
								<i class="fa fa-plus imgAdd" aria-hidden=""></i>
								<input type="file"  name="datafile" onchange="DocFldUpldHndlr(CTLN_DCUPLOAD,'CTLN_DCUPLOAD','DC','DCview')" class="CTLN_DCUPLOAD"  >
								</a> 
							<input type="text" id="CTLN_DCUPLOAD" data-val="Upload Document" hidden="hidden" data-Validate="CTLN_DCUPLOAD"  name="CTLN_DCUPLOAD" class="form-control DC File CTLNDBfields">
							<span class="name1">Decoder Upload Document*</span>
							</div>
							</td>
						</tr></table>
						</div>    
					</div>  
					<div class="col-md-2 Formcol-mdLR TxtCenter DCview">
					<div class="md-form">
					   <div class="CTLN_DCUPLOAD" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(CTLN_DCUPLOAD);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
					   <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('CTLN_DCUPLOAD')" alt="Cinque Terre" width="35" height="25"> </div>
					</div>
				  </div>  
				 </div>
			   </div>
			</div>
            <div class="col-md-4">
           		<div class="md-form">
					<select class="mdb-select md-form colorful-select dropdown-primary CTLNDBfields CTLNMndtry" onchange="CheckDCIIBSts('IIB')" id="CTLN_IIBSTUS" name="CTLN_IIBSTUS">
						<option value="">Select</option>
						<option value="Positive">Positive</option>
						<option value="Negative">Negative</option>
					</select>
					<label class="mdb-main-label BTxt9">IIB Status<span class="MndtryAstr">*</span></label>
				</div>
            </div>
			<div class="col-md-4 IIBRMK">
              <div class="md-form">
                <input type="text" id="CTLN_IIBREMARK"  maxlength="5000" name="CTLN_IIBREMARK" class="form-control CTLNDBfields">
                <label for="CTLN_IIBREMARK" class="">IIB Remark<span class="MndtryAstr">*</span></label>
			  </div> 
             </div>
			 <div class="col-md-4 ADDFIELDS IIB">
			 <div class="md-form">
				<div class="row IIB" >
					<div class="col-md-8  Formcol-mdLR IIBupload">
						<div class="md-form">
						<table><tr>
							<td>
							<div id="CTLN_IIBUPLOADUPLOAD"  class="file-field">
								<a class="">
								<i class="fa fa-plus imgAdd" aria-hidden=""></i>
								<input type="file"  name="datafile" onchange="DocFldUpldHndlr(CTLN_IIBUPLOAD,'CTLN_IIBUPLOAD','IIB','IIBview')" class="CTLN_IIBUPLOAD"  >
								</a> 
							<input type="text" id="CTLN_IIBUPLOAD" data-val="Upload Document" hidden="hidden" data-Validate="CTLN_IIBUPLOAD"  name="CTLN_IIBUPLOAD" class="form-control IIB File CTLNDBfields">
							<span class="name1">IIB Upload Document*</span>
							</div>
							</td>
						</tr></table>
						</div>    
					</div>  
					<div class="col-md-2 Formcol-mdLR TxtCenter PropertyDocview">
					<div class="md-form">
					   <div class="CTLN_IIBUPLOAD" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(CTLN_IIBUPLOAD);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
					   <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('CTLN_IIBUPLOAD')" alt="Cinque Terre" width="35" height="25"> </div>
					</div>
				  </div>  
				 </div>
			   </div>
			</div>	
		</div>
		<div class="form-row">
		    <div class="col-md-4">
           		<div class="md-form">
					<select class="mdb-select md-form colorful-select dropdown-primary CTLNDBfields CTLNMndtry"  id="CTLN_TOLLOSS" name="CTLN_TOLLOSS">
						<option value="">Select</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
					<label class="mdb-main-label BTxt9">Total Loss Observed<span class="MndtryAstr">*</span></label>
				</div>
            </div>	
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTLN_PREFUNDFFR"  maxlength="5" name="CTLN_PREFUNDFFR" class="form-control IsNumberFields CTLNMndtry IsPercentageSPL CTLNDBfields">
                    <label for="CTLN_PREFUNDFFR" class="">Pre Funding FFR %<span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTLN_AGEOFASSET"  maxlength="5" name="CTLN_AGEOFASSET" class="form-control IsNumberFields CTLNMndtry CTLNDBfields">
                    <label for="CTLN_AGEOFASSET" class="">Age of asset EOT<span class="MndtryAstr">*</span></label>
                </div>
            </div>	
           					
		</div>
		<div class="form-row">
		    <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTLN_GRIDVAL"  maxlength="25" disabled name="CTLN_GRIDVAL" class="form-control IsCURCommaFields IsNumberFields CTLNDBfields">
                    <label for="CTLN_GRIDVAL" class="">Grid Value<span class="MndtryAstr">*</span></label>
                </div>
            </div>	
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTLN_VALUTNAMT"  maxlength="30" disabled name="CTLN_VALUTNAMT" class="form-control IsCURCommaFields IsNumberFields CTLNDBfields">
                    <label for="CTLN_VALUTNAMT" class="">Valuation Amount<span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTLN_LNAMTREQ"  maxlength="30" disabled name="CTLN_LNAMTREQ" class="form-control IsCURCommaFields IsNumberFields CTLNDBfields">
                    <label for="CTLN_LNAMTREQ" class="">Loan amount Requested<span class="MndtryAstr">*</span></label>
                </div>
            </div>	
            		
		</div>
		<div class="form-row">
		    <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTLN_MAXPERAMT" disabled maxlength="25" name="CTLN_MAXPERAMT" class="form-control IsCURCommaFields IsNumberFields CTLNDBfields">
                    <label for="CTLN_MAXPERAMT" class="">Max Permisible amount<span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTLN_KLIAMT"  maxlength="30" name="CTLN_KLIAMT" class="form-control IsCURCommaFields IsNumberFields CTLNMndtry CTLNDBfields">
                    <label for="CTLN_KLIAMT" class="">KLI Amount<span class="MndtryAstr">*</span></label>
                </div>
           </div>
           <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTLN_PROPOSEAMT"  maxlength="30" name="CTLN_PROPOSEAMT" class="form-control IsCURCommaFields PropAmt IsNumberFields CTLNDBfields CTLNMndtry">
                    <label for="CTLN_PROPOSEAMT" class="">Proposed amount<span class="MndtryAstr">*</span></label>
                </div>
           </div>		
	    </div>
       <div class="form-row">		
         <div class="col-md-4">
           <div class="md-form">
              <input type="text" id="CTLN_NETLTV"  maxlength="5" disabled name="CTLN_NETLTV" class="form-control IsNumberFields IsPercentageSPL  CTLNDBfields CTLNMndtry">
              <label for="CTLN_NETLTV" class="">Net LTV%<span class="MndtryAstr">*</span></label>
           </div>
         </div>	
		 <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="CTLN_HOSICASH"  maxlength="30" name="CTLN_HOSICASH" class="form-control IsCURCommaFields IsNumberFields CTLNMndtry CTLNDBfields">
                    <label for="CTLN_HOSICASH" class="">Hospital Cash<span class="MndtryAstr">*</span></label>
                </div>
           </div>
       </div>		
     </br>
        <div class="form-row">
            <div class="col d-flex justify-content-center">
                <button type="button" id="Save" data-aria="LSW_TTERMLNDETAILS|CTLN|CTLN_SCHEMEID" data-form="TermLoan" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                <button type="button" data-aria="LSW_TTERMLNDETAILS|CTLN|CTLN_SCHEMEID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
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
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/TermLoan/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/TermLoan/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div>
                                </div>   -->                           