 <!-- card -->
      <div class="card">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                  <input type="text" id="CAFL_PRCSID" hidden="hidden" name="CAFL_PRCSID" class="form-control CAFLDBfields">
                  <input type="text" id="CAFL_ACTIVITYID" hidden="hidden" name="CAFL_ACTIVITYID" class="form-control CAFLDBfields">
                  <input type="text" id="CAFL_CREATEDBY" hidden="hidden" name="CAFL_CREATEDBY" class="form-control CAFLDBfields"> 
                  <input type="text" id="CAFL_DTCREATED" hidden="hidden" name="CAFL_DTCREATED" class="form-control CAFLDBfields">
                  <input type="text" id="CAFL_MODIFIEDBY" hidden="hidden" name="CAFL_MODIFIEDBY" class="form-control CAFLDBfields">
                  <input type="text" id="CAFL_DTMODIFIED" hidden="hidden" name="CAFL_DTMODIFIED" class="form-control CAFLDBfields">
				  <input type="text" id="CAFL_SCHEMENAME" hidden="hidden" name="CAFL_SCHEMENAME" class="form-control CAFLDBfields">
				  <input type="text" id="CAFL_SCHEMEID" hidden="hidden" name="CAFL_SCHEMEID" class="form-control CAFLDBfields">
				  <input type="text" id="CAFL_CASHGRID" hidden="hidden" name="CAFL_CASHGRID" class="form-control CAFLDBfields">
                   
				 </br>
				 <div class="form-row">
			    <div class="Btxt10">CASH FLOW</div>
			</div>
			</br>
				   <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CAFL_INTERATE" disabled maxlength="30"  name="CAFL_INTERATE" class="form-control CAFLMndtry IsCURCommaFields CAFLDBfields" >
                      <label for="CAFL_INTERATE" class="">Proposed interest rate<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CAFL_PROPOSEDTENU" disabled maxlength="30"  name="CAFL_PROPOSEDTENU" class="form-control CAFLMndtry IsCURCommaFields CAFLDBfields" >
                      <label for="CAFL_PROPOSEDTENU" class="">Proposed tenure<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
           		<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary Cashflow CAFLDBfields" onchange="GetMarginVal();" id="CAFL_TYPEBUSINESS" name="CAFL_TYPEBUSINESS">
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
                  	  <select class="mdb-select md-form colorful-select dropdown-primary CAFLDBfields" id="CAFL_BILLVAL"
				  name="CAFL_BILLVAL">
                  	<option value="">Select</option>
  					 	<option value="Sales">Sales</option>
						<option value="Purchased">Purchased</option>
  					
				</select>
                      <label  class="mdb-main-label BTxt9">Bills validated for<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <select class="mdb-select md-form colorful-select dropdown-primary CAFLDBfields"   id="CAFL_TYPEPRO" name="CAFL_TYPEPRO">
                  	<option value="">Select</option>
  					
				</select>
                      <label  class="mdb-main-label BTxt9">Type of Property<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CAFL_PROPVALUE"  maxlength="30"  name="CAFL_PROPVALUE" class="form-control CAFLMndtry IsCURCommaFields CAFLDBfields" >
                      <label for="CAFL_PROPVALUE" class="">Property Value<span class="MndtryAstr">*</span></label>
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

		<!--/* <div class="form-row">
				<div class="col-md-12">
					<input type="button" class="DashTrg" style="display:none" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SGETCASHOVER',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CAFL_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID')1:$('#LOCC_BrName')},'||2','CASHMONTHGRD');" id="BTMONTHCASHGRD" name="BTMONTHCASHGRD" />
							<table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table3">
							</table>
				</div>
		    </div>	 */-->
			
					<div class="form-row">
				<div class="col-md-12">
					<input type="button" class="DashTrg" style="display:none" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SGETCASHOVER',DBSrc:
						'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CAFL_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),
						1:$('#LOCC_BrName')},'||2','CASHMONTHGRD');" id="BTMONTHCASHGRD" name="BTMONTHCASHGRD" />
							<table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table3">
							</table>
				</div>
		    </div>		

		  			
				 
			 
				 <div class="form-row">
              <div class="col-md-6 BluShd"> 
                   <label for="" class="Btxt10">Total of Bills Validated &#8377;<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="CAFL_AVERAGE" disabled name="CAFL_AVERAGE" value="0" class="form-control  Btxt04 IsCURCommaFields  IsNumberFields NoSpecialChar  CAFLDBfields">
              </div>
         </div>
				
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CAFL_MARGIN"  maxlength="30" disabled name="CAFL_MARGIN" class="form-control CAFLMndtry  IsCURCommaFields CAFLDBfields">
                      <label for="CAFL_MARGIN" class="">Industry Margin <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CAFL_NETPROFIT" disabled maxlength="30"  name="CAFL_NETPROFIT" class="form-control CAFLMndtry IsCURCommaFields CAFLDBfields">
                      <label for="CAFL_NETPROFIT" class="">Net Profit<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CAFL_DSR" disabled maxlength="30"  name="CAFL_DSR" class="form-control CAFLMndtry  IsCURCommaFields CAFLDBfields">
                      <label for="CAFL_DSR" class="">DSR <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				</div>
		<div class="form-row"> 
            <div class="col-md-4">
                  <div class="md-form"><!--Chkprofit()-->
                  	  <input type="text" id="CAFL_SURPLUSSERV"  maxlength="30" onblur=""  name="CAFL_SURPLUSSERV" class="form-control CAFLMndtry IsCURCommaFields CAFLDBfields">
                      <label for="CAFL_SURPLUSSERV" class="">Surplus available for loan servicing <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form"><!--Exifund();Chckminvalue()-->
                  	  <input type="text" id="CAFL_EXISTEMI"  maxlength="30" onchange="EMIOBILIFLOW();"  name="CAFL_EXISTEMI" class="form-control CAFLMndtry IsCURCommaFields CAFLDBfields">
                      <label for="CAFL_EXISTEMI" class="">Existing EMI Obligation <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
           <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CAFL_AVAILEMI" disabled maxlength="30"  name="CAFL_AVAILEMI" class="form-control CAFLMndtry IsCURCommaFields CAFLDBfields">
                      <label for="CAFL_AVAILEMI" class="">Available Fund for EMI<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				</div>
			<div class="form-row">	 
            <!--<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_EXISTEMIOBLI"  maxlength="30" onblur="Existemi();"  name="FLOW_EXISTEMIOBLI" class="form-control FLOWMndtry IsCURCommaFields FLOWDBfields">
                      <label for="FLOW_EXISTEMIOBLI" class="">Existing EMI Obligation <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FLOW_AVALFUND" disabled maxlength="30"  name="FLOW_AVALFUND" class="form-control FLOWMndtry IsCURCommaFields FLOWDBfields">
                      <label for="FLOW_AVALFUND" class="">Available Fund for EMI<span class="MndtryAstr">*</span></label>
                  </div>
                </div>-->
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CAFL_TWOTIMEABB" disabled maxlength="30"  name="CAFL_TWOTIMEABB" class="form-control CAFLMndtry IsCURCommaFields CAFLDBfields">
                      <label for="CAFL_TWOTIMEABB" class="">2 times of ABB <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
				 <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CAFL_MONTHEMI" disabled  maxlength="30"  name="CAFL_MONTHEMI" class="form-control CAFLMndtry IsCURCommaFields CAFLDBfields">
                      <label for="CAFL_MONTHEMI" class="">Twice of 12  months EMI track<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				  <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CAFL_ADJUCTEMI" disabled maxlength="30"  name="CAFL_ADJUCTEMI" class="form-control CAFLMndtry IsCURCommaFields CAFLDBfields" Onchange ="EMIPERLAK">
                      <label for="CAFL_ADJUCTEMI" class="">Adjusted Fund for EMI<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				</div>
			<div class="form-row">	 	 
           
				  <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CAFL_EMI" disabled  maxlength="30"  name="CAFL_EMI" class="form-control CAFLMndtry IsCURCommaFields CAFLDBfields">
                      <label for="CAFL_EMI" class="">EMI Per Lakh<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CAFL_LOANELIGIBIL" disabled maxlength="30" onchange="Chckloan();" name="CAFL_LOANELIGIBIL" class="form-control CAFLMndtry IsCURCommaFields CAFLDBfields">
                      <label for="CAFL_LOANELIGIBIL" class="">Loan Eligibility in Lakh<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CAFL_PROPOSLOAN" disabled  maxlength="30"  name="CAFL_PROPOSLOAN" class="form-control CAFLMndtry IsCURCommaFields  CAFLDBfields">
                      <label for="CAFL_PROPOSLOAN" class="">Proposed Loan<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				</div>
				<div class="form-row">	
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CAFL_FINALLTV"  maxlength="30"  name="CAFL_FINALLTV" class="form-control CAFLMndtry  IsCURCommaFields CAFLDBfields">
                      <label for="CAFL_FINALLTV" class="">Final LTV<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
				</div>
		
			 
				  </br>
                  <div class="form-row"style="display:none">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TCASHFLOW|CAFL" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TCASHFLOW|CAFL" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
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
<th>CASF_MONTH</th> 
<th>CASF_AMOUNT</th> 
<th>CASF_SCHEMEID</th> 

   </thead> 
    </table> 
	
<script type="text/javascript" src="ThemeproLO/Financials/Script/CashFlow/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Financials/Script/CashFlow/Validation.js${DMY13}"></script>                            
 