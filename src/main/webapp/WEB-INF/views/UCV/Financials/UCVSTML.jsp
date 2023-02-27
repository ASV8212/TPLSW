
<div class="card CardNS">
    <!-- Card body -->
    <div>
      <div class="card-body px-lg-5 pt-0">
     	<form>
      	<input type="text" id="STML_PRCSID" hidden="hidden" name="STML_PRCSID" class="form-control STMLDBfields">
         <input type="text" id="STML_ACTIVITYID" hidden="hidden" name="STML_ACTIVITYID" class="form-control STMLDBfields">
         <input type="text" id="STML_CREATEDBY" hidden="hidden" name="STML_CREATEDBY" class="form-control STMLDBfields">
         <input type="text" id="STML_DTCREATED" hidden="hidden" name="STML_DTCREATED" class="form-control STMLDBfields">
         <input type="text" id="STML_MODIFIEDBY" hidden="hidden" name="STML_MODIFIEDBY" class="form-control STMLDBfields">
         <input type="text" id="STML_DTMODIFIED" hidden="hidden" name="STML_DTMODIFIED" class="form-control STMLDBfields">
		 <input type="text" hidden="hidden" id="STML_SCHEMEID" value="S00001" name="STML_SCHEMEID" class="form-control STMLDBfields">
	     <input type="text" id="STML_SCHEMENAME" hidden="hidden" name="STML_SCHEMENAME" class="form-control STMLDBfields">
		 
      	</br>
		
		<div class="form-row">
           <div class="col Btxt3">STML</div>
        </div>
        </br>
		    <div class="form-row">
                <div class="col-md-4">
           		<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary STMLDBfields" onchange="BANKSUMAVG(); UPINFLOWSUMAVG();" id="STML_NUMBNKACCT" name="STML_NUMBNKACCT">
                  	<option value="">Select</option>
  					<option value="Single">Single</option>
  					<option value="Multiple">Multiple</option>
				</select>
				<label class="mdb-main-label BTxt9">Number of Bank accounts considered for eligibility<span class="MndtryAstr">*</span></label>
             </div>
            </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_SUMAVG" disabled maxlength="25" name="STML_SUMAVG" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_SUMAVG" class="">Sum of Averages <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                    <div class="md-form">
                       <input type="text" id="STML_MONTHABB" disabled maxlength="25" name="STML_MONTHABB" class="form-control STMLDBfields IsCURCommaFields">
                       <label for="STML_MONTHABB" class="">Monthly ABB<span class="MndtryAstr"></span></label>
                    </div>
                </div>
           </div><!-- onchange="STMLPageCalc();"-->
		    <div class="form-row">
                 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_TOTCRDSUM" disabled maxlength="25"  name="STML_TOTCRDSUM" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_TOTCRDSUM" class="">Total credit summation in Bank Account<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_TOTNONBCRDSUM" disabled maxlength="25"  name="STML_TOTNONBCRDSUM" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_TOTNONBCRDSUM"  class="">Total non-business credit summation<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                    <div class="md-form">
                       <input type="text" id="STML_REVCRDSUM" disabled maxlength="25" name="STML_REVCRDSUM" class="form-control STMLDBfields IsCURCommaFields">
                       <label for="STML_REVCRDSUM" class="">Revised Credit Summation (Business)<span class="MndtryAstr"></span></label>
                    </div>
                </div>
           </div>
		    <div class="form-row">
                 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_PERCNBCRDSUM" disabled maxlength="25" name="STML_PERCNBCRDSUM" class="form-control IsNumberFields STMLDBfields">
                    <label for="STML_PERCNBCRDSUM" class="">% of non-business credit summation<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_LST12MONSALE" maxlength="25" onchange="Creditsum();" name="STML_LST12MONSALE" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_LST12MONSALE" class="">Last 12 months sales (as validated from GST)<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                    <div class="md-form">
                       <input type="text" id="STML_PERCCRDSUM" disabled maxlength="25" name="STML_PERCCRDSUM" class="form-control IsNumberFields STMLDBfields ">
                       <label for="STML_PERCCRDSUM" class="">% Credit summation (excluding non-business transaction)<span class="MndtryAstr"></span></label>
                    </div>
                </div>
           </div>
            <div class="form-row">
                 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_ADJUABB" disabled maxlength="25" name="STML_ADJUABB" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_ADJUABB" class="">Adjusted ABB<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_EMIOFLONMON" maxlength="25"  name="STML_EMIOFLONMON" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_EMIOFLONMON" class="">EMI of loan taken within last 3 months<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_EMIOFLON" maxlength="25" onblur="Finalabb();" name="STML_EMIOFLON" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_EMIOFLON" class="">EMI of loan to be closed within next 6 Months<span class="MndtryAstr">*</span></label>
                  </div>
                </div>

           </div>
		   <div class="form-row">
		        <div class="col-md-4">
                    <div class="md-form">
                       <input type="text" id="STML_FINLABB" disabled maxlength="25"  name="STML_FINLABB" class="form-control STMLDBfields IsCURCommaFields">
                       <label for="STML_FINLABB" class="">Final ABB for eligibility<span class="MndtryAstr"></span></label>
                    </div>
                </div>
                 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_PERLAKHEMI" disabled maxlength="25" name="STML_PERLAKHEMI" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_PERLAKHEMI" class="">Per Lakh EMI<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_MAXEMIPOS" disabled maxlength="25" name="STML_MAXEMIPOS" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_MAXEMIPOS" class="">Maximum EMI Possible<span class="MndtryAstr">*</span></label>
                  </div>
                </div>

           </div>
		   <div class="form-row">
		        <div class="col-md-4">
                    <div class="md-form">
                       <input type="text" id="STML_LOANELIGIB" disabled maxlength="25"  name="STML_LOANELIGIB" class="form-control STMLDBfields IsCURCommaFields">
                       <label for="STML_LOANELIGIB" class="">Loan Eligibility<span class="MndtryAstr"></span></label>
                    </div>
                </div>
                 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_PROPLOAN" disabled maxlength="25" name="STML_PROPLOAN" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_PROPLOAN" class="">Proposed Loan <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
			</div>
			<div class="form-row">
        	<div class="col Btxt10">Turnover Validation</div>
        </div>
		 <div class="form-row">
		 <div class="col-md-4">
		     <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary STMLDBfields"   id="STML_PRIMNATBUS" name="STML_PRIMNATBUS">
                  	<option value="">Select</option>
  					<option value="Manufacturing">Manufacturing</option>
  					<option value="Job Works">Job Works</option>
				</select>
				<label class="mdb-main-label BTxt9">Primary Nature of Business<span class="MndtryAstr">*</span></label>
             </div>
			 </div>
               <!--  <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_PRIMNATBUS" maxlength="25" name="STML_PRIMNATBUS" class="form-control IsNoSpcharFields STMLDBfields">
                    <label for="STML_PRIMNATBUS" class="">Primary Nature of Business<span class="MndtryAstr">*</span></label>
                  </div>
                </div>-->
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_OUTSEXLON" maxlength="25" name="STML_OUTSEXLON" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_OUTSEXLON" class="">Outstanding of Existing Loans (including LAP/CC/OD)<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                    <div class="md-form">
                       <input type="text" id="STML_CCODLIMIT" maxlength="25" name="STML_CCODLIMIT" class="form-control STMLDBfields IsCURCommaFields">
                       <label for="STML_CCODLIMIT" class="">CC/OD Limit<span class="MndtryAstr"></span></label>
                    </div>
                </div>
           </div>
		    <div class="form-row">
                 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_LAPOS" maxlength="25" onblur="lapos();" name="STML_LAPOS" class="form-control IsCURCommaFields  STMLDBfields">
                    <label for="STML_LAPOS" class="">LAP O/s<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_OUTSCONS" disabled maxlength="25" name="STML_OUTSCONS" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_OUTSCONS" class="">Outstanding Considered of Existing Loan<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                    <div class="md-form">
                       <input type="text" id="STML_TOTLONEXP" disabled maxlength="25"  name="STML_TOTLONEXP" class="form-control STMLDBfields IsCURCommaFields">
                       <label for="STML_TOTLONEXP" class="">Total Loan Exposure<span class="MndtryAstr"></span></label>
                    </div>
                </div>
           </div>
		    <div class="form-row">
                 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_PERCTOTLONEXP" disabled maxlength="5" name="STML_PERCTOTLONEXP" class="form-control IsNumberFields STMLDBfields">
                    <label for="STML_PERCTOTLONEXP" class="">Total Loan Exposure (as a % of Sales)<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_TURNOVALID" disabled maxlength="50" name="STML_TURNOVALID" class="form-control   STMLDBfields">
                    <label for="STML_TURNOVALID" class="">Turnover Validation<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div>
		   <div class="form-row">
        	  <div class="col Btxt10">If Primary Business is Job Works & only Job Work Charges Appear as Sales in GST return</div>
           </div>
		   <div class="form-row">
                 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_SALESMATCOST" maxlength="25" onblur="salsincl();" name="STML_SALESMATCOST" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_SALESMATCOST" class="">Sales including material cost<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_SALESCONS" disabled maxlength="25" name="STML_SALESCONS" class="form-control IsCURCommaFields  STMLDBfields">
                    <label for="STML_SALESCONS" class="">Sales Considered <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                    <div class="md-form">
                       <input type="text" id="STML_PRIMOUTSEXLOAN" maxlength="25"  name="STML_PRIMOUTSEXLOAN" class="form-control STMLDBfields IsCURCommaFields">
                       <label for="STML_PRIMOUTSEXLOAN" class="">Outstanding of Existing Loans<span class="MndtryAstr"></span></label>
                    </div>
                </div>
           </div>
		   <div class="form-row">
                 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_PRIMCCODLIMIT" maxlength="25" name="STML_PRIMCCODLIMIT" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_PRIMCCODLIMIT" class="">CC/OD Limit<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_PRIMLAPOS" maxlength="25" onblur="outstand();"; name="STML_PRIMLAPOS" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_PRIMLAPOS" class="">LAP O/s<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                    <div class="md-form">
                       <input type="text" id="STML_PRIMOUTSCONS" disabled maxlength="25"  name="STML_PRIMOUTSCONS" class="form-control STMLDBfields IsCURCommaFields">
                       <label for="STML_PRIMOUTSCONS" class="">Outstanding Considered of Existing Loan<span class="MndtryAstr"></span></label>
                    </div>
                </div>
           </div>
		   <div class="form-row">
                 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_PRIMTOTLONEXP" disabled maxlength="25" name="STML_PRIMTOTLONEXP" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_PRIMTOTLONEXP" class="">Total Loan Exposure<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_PRIMTOTALLOAN" disabled maxlength="5" name="STML_PRIMTOTALLOAN" class="form-control IsNumberFields STMLDBfields">
                    <label for="STML_PRIMTOTALLOAN" class="">Total Loan Exposure (as a % of Sales)<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                    <div class="md-form">
                       <input type="text" id="STML_PRIMTURNOVALID" disabled maxlength="50"  name="STML_PRIMTURNOVALID" class="form-control STMLDBfields  ">
                       <label for="STML_PRIMTURNOVALID" class="">Turnover Validation<span class="MndtryAstr"></span></label>
                    </div>
                </div>
           </div>
		    <div class="form-row">
                 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_VALOFWORK"  maxlength="25"onblur="valueofwrk();" name="STML_VALOFWORK" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_VALOFWORK" class="">Value of Work Orders<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STML_WORKORDER" disabled maxlength="30" name="STML_WORKORDER" class="form-control IsCURCommaFields STMLDBfields">
                    <label for="STML_WORKORDER" class="">Work Order as % of sales<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                    <div class="md-form">
                       <input type="text" id="STML_WORKORDERVALID" disabled maxlength="50"  name="STML_WORKORDERVALID" class="form-control STMLDBfields ">
                       <label for="STML_WORKORDERVALID" class="">Work order Validation<span class="MndtryAstr"></span></label>
                    </div>
                </div>
           </div>
		   </br>
		    <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="LSW_TCAMSTML|STML|STML_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <!--<button type="button" data-aria="LSW_TCAMSTML|STML|STML_SCHEMEID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> -->
                </div>
            </div>
       	</form>
      </div>
    </div>
  </div>
             
<table style="display:none" id="GridTable2">
   <thead>
<th>MPMI_PARTICULARS</th>
<th>MPMI_VALUEI</th>
<th>MPMI_VALUEII</th>
<th>MPMI_SCHEMEID</th>
<th>MPMI_SEQID</th>
<!-- 
<th>FRCC_PRCSID</th>
<th>FRCC_ACTIVITYID</th>
<th>FRCC_DTCREATED</th>
<th>FRCC_CREATEDBY</th>
<th>FRCC_DTMODIFIED</th>
<th>FRCC_MODIFIEDBY</th>  -->
   </thead> 
    </table> 				 
						  
   <script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/STML/LoadSubmit.js${DMY13}"></script>
   <script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/STML/Validation.js${DMY13}"></script>
                                  <!--   </div>
                                </div>   -->                           