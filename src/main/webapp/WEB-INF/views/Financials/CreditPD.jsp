 <!-- card -->
      <div class="card">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                  <input type="text" id="CRPD_PRCSID" hidden="hidden" name="CRPD_PRCSID" class="form-control CRPDDBfields">
                  <input type="text" id="CRPD_ACTIVITYID" hidden="hidden" name="CRPD_ACTIVITYID" class="form-control CRPDDBfields">
                  <input type="text" id="CRPD_CREATEDBY" hidden="hidden" name="CRPD_CREATEDBY" class="form-control CRPDDBfields"> 
                  <input type="text" id="CRPD_CREATEDBY" hidden="hidden" name="CRPD_CREATEDBY" class="form-control CRPDDBfields">
                  <input type="text" id="CRPD_MODIFIEDBY" hidden="hidden" name="CRPD_MODIFIEDBY" class="form-control CRPDDBfields">
                  <input type="text" id="CRPD_DTMODIFIED" hidden="hidden" name="CRPD_DTMODIFIED" class="form-control CRPDDBfields">
				  <input type="text" id="CRPD_DTCREATED" hidden="hidden" name="CRPD_DTCREATED" class="form-control CRPDDBfields">
				  <input type="text" id="CRPD_SCHEMENAME" hidden="hidden" name="CRPD_SCHEMENAME" class="form-control CRPDDBfields">
				  <input type="text" id="CRPD_SCHEMEID" hidden="hidden" name="CRPD_SCHEMEID" class="form-control CRPDDBfields">
				  <input type="text" id="CRPD_CREDITPD" hidden="hidden" name="CRPD_CREDITPD" class="form-control CRPDDBfields">
				  <input type="text" id="CRPD_LOANUNIQID" hidden="hidden" name="CRPD_LOANUNIQID" class="form-control CRPDDBfields">
				 
                   
				 </br>
				 <div class="form-row">
			    <div class="Btxt10">CREDIT PD</div>
			</div>
			</br>
		<div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRPD_PROINTRATE" disabled maxlength="30"  name="CRPD_PROINTRATE" class="form-control CRPDMndtry IsCURCommaFields CRPDDBfields EMIPERLAK" >
                      <label for="CRPD_PROINTRATE" class="">Proposed interest rate<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRPD_PROTENTURE" disabled maxlength="30"  name="CRPD_PROTENTURE" class="form-control CRPDMndtry IsCURCommaFields CRPDDBfields EMIPERLAK" >
                      <label for="CRPD_PROTENTURE" class="">Proposed tenure<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
           		<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary CRPDDBfields" onchange="GROSSPROFIT();" id="CRPD_TYPEBUSS" name="CRPD_TYPEBUSS">
                  	<option value="">Select</option>
  					 	<option value="Kirana / Grocery">Kirana / Grocery</option>
						<option value="Hardware">Hardware</option>
  					
				</select>
				<label class="mdb-main-label BTxt9">Type of Bussinesss<span class="MndtryAstr">*</span></label>
             </div>
            </div>
        </div>
		<div class="form-row">
            <div class="col-md-4">
                        <div class="md-form">
                           <div id="Customer House" class="select-radio CRPDMndtry">
                              <div class="custom-control custom-radio custom-control-inline">
                                 <input type="radio" class="custom-control-input CRPDDBfields" onclick="NETPROFIT();" value="Yes" id="OWNYES" name="CRPD_OWNHOUSE">
                                 <label class="custom-control-label" for="OWNYES">Yes</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline CRPDDBfields">
                                 <input type="radio" class="custom-control-input CRPDDBfields" onclick="NETPROFIT();" value="No" id="OWNNO" name="CRPD_OWNHOUSE">
                                 <label class="custom-control-label" for="OWNNO">No</label>
                              </div>
                           </div>
                           <label class="mdb-main-label BTxt9">Customer Staying in Own House<span class="MndtryAstr">*</span></label>      
                        </div>
            </div>
			<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRPD_CREDITDEBIT" maxlength="30"  name="CRPD_CREDITDEBIT" class="form-control CRPDMndtry CRPDDBfields">
                      <label for="CRPD_CREDITDEBIT" class="">Banking Norms - Total No of Credits/Debits in last 3 months<span class="MndtryAstr">*</span></label>
                  </div>
            </div>
			<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRPD_CIBILSCORE" maxlength="30" name="CRPD_CIBILSCORE" class="form-control CRPDMndtry CRPDDBfields TOTAMT">
                      <label for="CRPD_CIBILSCORE" class="">CIBIL Score<span class="MndtryAstr">*</span></label>
                  </div>
            </div>

		</div>

		<!--<div class="form-row">
				<div class="col-md-12">
					<input type="button" class="DashTrg" style="display:none" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SGETCASHMONTH',DBSrc:
						'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#FLOW_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),
						1:$('#LOCC_BrName')},'||2','MONTHSHEETGRD');" id="BTMONTHSHEETGRD" name="BTMONTHSHEETGRD" />
							<table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table3">
							</table>
				</div>
		    </div>-->		
				 
	<div class="modal-body"> 
		<div class="">
    <!-- Card body -->
		<div class="">  
        <form>
		<div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'TablePD',{spname:'LSW_SCREDITPD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Credit PD',MnuId:$('.FormPageMultiTab li.active').attr('id')+'|'+$('#CRPD_LOANUNIQID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5,6','CREDITPD');" id="CREDITPD" name="CREDITPD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid " id="TablePD">
             </table>
           </div>
        </div>
		<div class="form-row">
              <div class="col-md-10 BluShd"> 
                   <label for="" class="Btxt10">Total Stock Value <span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="CRPD_TOTSTOCKVAL" disabled name="CRPD_TOTSTOCKVAL" value="0" class="form-control DSVLBL Btxt04 IsCURCommaFields  IsNumberFields NoSpecialChar  CRPDDBfields">
              </div>
         </div>
		 <div class="form-row">
              <div class="col-md-10 BluShd"> 
                   <label for="" class="Btxt10">Arrived Sales <span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="CRPD_ARRIVEDSALE" disabled name="CRPD_ARRIVEDSALE" value="0" class="form-control DSVLBL Btxt04 IsCURCommaFields  IsNumberFields NoSpecialChar  CRPDDBfields">
              </div>
         </div>
		</form>
        </div>
		</div>
    </div>  
				 
				
		<div class="form-row">
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRPD_GROSSPRO" disabled maxlength="30"  name="CRPD_GROSSPRO" class="form-control CRPDMndtry  IsCURCommaFields CRPDDBfields">
                      <label for="CRPD_GROSSPRO" class="">Gross Profit <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRPD_RENTPERMON"  maxlength="30"  name="CRPD_RENTPERMON" onchange="NETPROFIT();" class="form-control CRPDMndtry  IsCURCommaFields CRPDDBfields">
                      <label for="CRPD_RENTPERMON" class="">Rent Paid per month<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
					<div class="md-form">
                  	  <input type="text" id="CRPD_SALAPERMON"  maxlength="30"  name="CRPD_SALAPERMON" onchange="NETPROFIT();" class="form-control CRPDMndtry IsCURCommaFields CRPDDBfields">
                      <label for="CRPD_SALAPERMON" class="">Salary paid per month<span class="MndtryAstr">*</span></label>
                    </div>
				</div>
		</div>
		<div class="form-row"> 
            
			<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRPD_OTHERFXCOST"  maxlength="30"  name="CRPD_OTHERFXCOST" onchange="NETPROFIT();" class="form-control CRPDMndtry IsCURCommaFields CRPDDBfields">
                      <label for="CRPD_OTHERFXCOST" class="">Other fixed cost<span class="MndtryAstr">*</span></label>
                  </div>
            </div>	
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRPD_NETPROFIT" disabled maxlength="30"  name="CRPD_NETPROFIT" class="form-control CRPDMndtry IsCURCommaFields CRPDDBfields">
                      <label for="CRPD_NETPROFIT" class="">Net Profit per month<span class="MndtryAstr">*</span></label>
                  </div>
            </div>
			<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRPD_DSR" disabled maxlength="30"  name="CRPD_DSR" class="form-control CRPDMndtry  IsCURCommaFields CRPDDBfields">
                      <label for="CRPD_DSR" class="">DSR <span class="MndtryAstr">*</span></label>
                  </div>
            </div>
			</div>
		<div class="form-row">
			
					
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRPD_EXISTEMIOBLI" maxlength="30"  name="CRPD_EXISTEMIOBLI" onchange="FUNDAVAILEMI();" class="form-control CRPDMndtry IsCURCommaFields CRPDDBfields">
                      <label for="CRPD_EXISTEMIOBLI" class="">Existing EMI Obligation <span class="MndtryAstr">*</span></label>
                  </div>
            </div>
			<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRPD_AVALFUND" disabled maxlength="30"  name="CRPD_AVALFUND" class="form-control CRPDMndtry IsCURCommaFields CRPDDBfields">
                      <label for="CRPD_AVALFUND" class="">Fund available for EMI<span class="MndtryAstr">*</span></label>
                  </div>
            </div>
			<div class="col-md-4">
					<div class="md-form">
                  	  <input type="text" id="CRPD_EMIPERLAKH" disabled  maxlength="30"  name="CRPD_EMIPERLAKH" class="form-control CRPDMndtry IsCURCommaFields CRPDDBfields">
                      <label for="CRPD_EMIPERLAKH" class="">EMI Per Lakh<span class="MndtryAstr">*</span></label>
					</div>
                </div>
		</div>
			<div class="form-row">	
				<div class="col-md-4">
					<div class="md-form">
                  	  <input type="text" id="CRPD_LOANEGBLAKH" disabled maxlength="30"  name="CRPD_LOANEGBLAKH" class="form-control CRPDMndtry CRPDDBfields">
                      <label for="CRPD_LOANEGBLAKH" class="">Loan Eligibility in Lakh<span class="MndtryAstr">*</span></label>
					</div>
                </div>
			</div>
		
				  </br>
                  <div class="form-row"style="display:none">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TCREDITPD|CRPD|CRPD_LOANUNIQID" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TCREDITPD|CRPD" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                     </div>
                  </div>
             
            </form>
         </div>
      </div>
      <!-- card -->
<!--   </div>
   </div>   -->  
<!--  <table style="display:none" id="GridTable3">
<thead>
<th>CASH_MONTH</th>
<th>CASH_AMOUNT</th>

 
</thead> 
</table>   -->

<table style="display:none" id="GridTablePD">
   <thead>
<th>CPDG_SlNo</th>
<th>CPDG_PRODUCTS</th>
<th>CPDG_QUANTITY</th>
<th>CPDG_RATE</th>
<th>CPDG_AMOUNT</th>
<th>CPDG_SCHEMEID</th>
<th>CPDG_LOANUNIQID</th>
   </thead> 
    </table> 
	
<script type="text/javascript" src="ThemeproLO/Financials/Script/CreditPD/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Financials/Script/CreditPD/Validation.js${DMY13}"></script>                            
 