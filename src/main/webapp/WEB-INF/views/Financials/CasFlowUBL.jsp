 <!-- card -->
      <div class="card">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                  <input type="text" id="FLOW_PRCSID" hidden="hidden" name="FLOW_PRCSID" class="form-control FLOWDBfields">
                  <input type="text" id="FLOW_ACTIVITYID" hidden="hidden" name="FLOW_ACTIVITYID" class="form-control FLOWDBfields">
                  <input type="text" id="FLOW_CREATEDBY" hidden="hidden" name="FLOW_CREATEDBY" class="form-control FLOWDBfields"> 
                  <input type="text" id="FLOW_DTCREATED" hidden="hidden" name="FLOW_DTCREATED" class="form-control FLOWDBfields">
                  <input type="text" id="FLOW_MODIFIEDBY" hidden="hidden" name="FLOW_MODIFIEDBY" class="form-control FLOWDBfields">
                  <input type="text" id="FLOW_DTMODIFIED" hidden="hidden" name="FLOW_DTMODIFIED" class="form-control FLOWDBfields">
				  <input type="text" id="FLOW_SCHEMENAME" hidden="hidden" name="FLOW_SCHEMENAME" class="form-control FLOWDBfields">
				  <input type="text" id="FLOW_SCHEMEID" hidden="hidden" name="FLOW_SCHEMEID" class="form-control FLOWDBfields">
				  <input type="text" id="FLOW_CASHFLOW" hidden="hidden" name="FLOW_CASHFLOW" class="form-control FLOWDBfields">
				  <input type="text" id="FLOW_LOANID" hidden="hidden" name="FLOW_LOANID" class="form-control FLOWDBfields">
                   
				 </br>
				 <div class="form-row">
			    <div class="Btxt10">CASH FLOW-UBL</div>
			</div>
			</br>
				   <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_PROINTRATE" disabled maxlength="30"  name="FLOW_PROINTRATE" class="form-control FLOWMndtry IsCURCommaFields FLOWDBfields" >
                      <label for="FLOW_PROINTRATE" class="">Proposed interest rate<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_PROTENTURE" disabled maxlength="30"  name="FLOW_PROTENTURE" class="form-control FLOWMndtry IsCURCommaFields FLOWDBfields" >
                      <label for="FLOW_PROTENTURE" class="">Proposed tenure<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
           		<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary FLOWDBfields"  id="FLOW_TYPEBUSS" name="FLOW_TYPEBUSS">
                  	<option value="">Select</option>
  					 	<option value="">Bussiness</option>
  					
				</select>
				<label class="mdb-main-label BTxt9">Type of Bussinesss<span class="MndtryAstr">*</span></label>
             </div>
            </div>
            
  
             </div>
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <select class="mdb-select md-form colorful-select dropdown-primary FLOWDBfields" id="FLOW_BILLSVALID"
				  name="FLOW_BILLSVALID">
                  	<option value="">Select</option>
  					 	<option value="Sales">Sales</option>
						<option value="Purchased">Purchased</option>
  					
				</select>
                      <label  class="mdb-main-label BTxt9">Bills validated for<span class="MndtryAstr">*</span></label>
                  </div>
                </div>

				</div>
<!--		<div class="form-row">
           <div class="col-md-12">
             <input type="button" style="display:none" class="DashTrg"  onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SGETCASHMONTH',DBSrc:'currentProfile',TableHeader:
			 'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#FLOW_SCHEMEID').val(),MnuId:''},
			 {0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||2','MONTHSHEETGRD');" id="BTMONTHSHEETGRD" name="BTMONTHSHEETGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid " id="Table3">
             </table>
           </div>
        </div>  */	-->

		<div class="form-row">
				<div class="col-md-12">
					<input type="button" class="DashTrg" style="display:none" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SGETCASHMONTH',DBSrc:
						'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#FLOW_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),
						1:$('#LOCC_BrName')},'||2','MONTHSHEETGRD');" id="BTMONTHSHEETGRD" name="BTMONTHSHEETGRD" />
							<table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table3">
							</table>
				</div>
		    </div>		
				 
			 
				 
				
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_GROSSPRO" disabled maxlength="30"  name="FLOW_GROSSPRO" 
					  class="form-control FLOWMndtry  IsCURCommaFields FLOWDBfields">
                      <label for="FLOW_GROSSPRO" class="">Gross Profit <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_GROSSPROMON" disabled  maxlength="30"  name="FLOW_GROSSPROMON" class="form-control FLOWMndtry IsCURCommaFields  FLOWDBfields">
                      <label for="FLOW_GROSSPROMON" class="">Gross Profit per month<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_RENTPERMON"  maxlength="30"  name="FLOW_RENTPERMON" class="form-control FLOWMndtry  IsCURCommaFields FLOWDBfields">
                      <label for="FLOW_RENTPERMON" class="">Rent Paid per month<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				</div>
		<div class="form-row"> 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_SALAPERMON"  maxlength="30" onblur="Chkprofit();"  name="FLOW_SALAPERMON" class="form-control FLOWMndtry IsCURCommaFields FLOWDBfields">
                      <label for="FLOW_SALAPERMON" class="">Salary paid per month<span class="MndtryAstr">*</span></label>
                  </div>
            </div>
			<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_OTHERFXCOST"  maxlength="30" onblur="Chkprofit();"  name="FLOW_OTHERFXCOST" class="form-control FLOWMndtry IsCURCommaFields FLOWDBfields">
                      <label for="FLOW_OTHERFXCOST" class="">Other fixed cost<span class="MndtryAstr">*</span></label>
                  </div>
            </div>	
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_NETPROFIT" disabled maxlength="30"  name="FLOW_NETPROFIT" class="form-control FLOWMndtry IsCURCommaFields FLOWDBfields">
                      <label for="FLOW_NETPROFIT" class="">Net Profit<span class="MndtryAstr">*</span></label>
                  </div>
            </div>
  
				</div>
		<div class="form-row">	
			<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_DSR" disabled maxlength="30"  name="FLOW_DSR" class="form-control FLOWMndtry  IsCURCommaFields FLOWDBfields">
                      <label for="FLOW_DSR" class="">DSR 60% <span class="MndtryAstr">*</span></label>
                  </div>
            </div>		
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_EXISTEMIOBLI"  maxlength="30" onblur="Existemi();"  name="FLOW_EXISTEMIOBLI" class="form-control FLOWMndtry IsCURCommaFields FLOWDBfields">
                      <label for="FLOW_EXISTEMIOBLI" class="">Existing EMI Obligation <span class="MndtryAstr">*</span></label>
                  </div>
            </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_AVALFUND" disabled maxlength="30"  name="FLOW_AVALFUND" class="form-control FLOWMndtry IsCURCommaFields FLOWDBfields">
                      <label for="FLOW_AVALFUND" class="">Available Fund<span class="MndtryAstr">*</span></label>
                  </div>
            </div>
 
		</div>
		<div class="form-row">	
			<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_ABB" disabled maxlength="30"  name="FLOW_ABB" class="form-control FLOWMndtry IsCURCommaFields FLOWDBfields">
                      <label for="FLOW_ABB" class="">90% of ABB <span class="MndtryAstr">*</span></label>
                  </div>
            </div>		
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_EMITRACK" disabled  maxlength="30"  name="FLOW_EMITRACK" class="form-control FLOWMndtry IsCURCommaFields FLOWDBfields">
                      <label for="FLOW_EMITRACK" class="">Twice of 12  months EMI track<span class="MndtryAstr">*</span></label>
                  </div>
            </div>
			<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_FUNDEMI" disabled maxlength="30"  name="FLOW_FUNDEMI" class="form-control FLOWMndtry IsCURCommaFields FLOWDBfields" Onchange ="EMIPERLAK">
                      <label for="FLOW_FUNDEMI" class="">Fund for EMI<span class="MndtryAstr">*</span></label>
                  </div>
			</div>

		</div>
			<div class="form-row">	
				<div class="col-md-4">
					<div class="md-form">
                  	  <input type="text" id="FLOW_EMIPERLAKH" disabled  maxlength="30"  name="FLOW_EMIPERLAKH" class="form-control FLOWMndtry IsCURCommaFields FLOWDBfields">
                      <label for="FLOW_EMIPERLAKH" class="">EMI Per Lakh<span class="MndtryAstr">*</span></label>
					</div>
                </div>
				<div class="col-md-4">
					<div class="md-form">
                  	  <input type="text" id="FLOW_LOANEGBLAKH" disabled maxlength="30"  name="FLOW_LOANEGBLAKH" class="form-control FLOWMndtry IsCURCommaFields FLOWDBfields">
                      <label for="FLOW_LOANEGBLAKH" class="">Loan Eligibility in Lakh<span class="MndtryAstr">*</span></label>
					</div>
                </div>
			</div>
		
			 
				  </br>
                  <div class="form-row">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TCASHFLOWUBL|FLOW" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TCASHFLOWUBL|FLOW" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
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

<table style="display:none" id="GridTable3">
   <thead>
<th>CASH_MONTH</th> 
<th>CASH_AMOUNT</th> 
<th>CASH_SCHEMEID</th> 

   </thead> 
    </table> 
	
<script type="text/javascript" src="ThemeproLO/Financials/Script/CashflowUBL/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Financials/Script/CashflowUBL/Validation.js${DMY13}"></script>                            
 