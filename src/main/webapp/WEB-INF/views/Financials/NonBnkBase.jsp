 <!-- card -->
      <div class="card">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                  <input type="text" id="NBNK_PRCSID" hidden="hidden" name="NBNK_PRCSID" class="form-control NBNKDBfields">
                  <input type="text" id="NBNK_ACTIVITYID" hidden="hidden" name="NBNK_ACTIVITYID" class="form-control NBNKDBfields">
                  <input type="text" id="NBNK_CREATEDBY" hidden="hidden" name="NBNK_CREATEDBY" class="form-control NBNKDBfields"> 
                  <input type="text" id="NBNK_DTCREATED" hidden="hidden" name="NBNK_DTCREATED" class="form-control NBNKDBfields">
                  <input type="text" id="NBNK_MODIFIEDBY" hidden="hidden" name="NBNK_MODIFIEDBY" class="form-control NBNKDBfields">
                  <input type="text" id="NBNK_DTMODIFIED" hidden="hidden" name="NBNK_DTMODIFIED" class="form-control NBNKDBfields">
				  <input type="text" id="NBNK_SCHEMENAME" hidden="hidden" name="NBNK_SCHEMENAME" class="form-control NBNKDBfields">
				  <input type="text" id="NBNK_SCHEMEID" hidden="hidden" name="NBNK_SCHEMEID" class="form-control NBNKDBfields">
				  <!--<input type="text" id="NBNK_CASHNBNK" hidden="hidden" name="NBNK_CASHNBNK" class="form-control NBNKDBfields">-->
				  <input type="text" id="NBNK_CASHFLOW" hidden="hidden" name="NBNK_CASHFLOW" class="form-control NBNKDBfields">
                   
				 </br>
				 <div class="form-row">
			    <div class="Btxt10">Non Banking Based</div>
			</div>
			</br>
				   <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_PROINTRATE" disabled maxlength="30"  name="NBNK_PROINTRATE" class="form-control NBNKMndtry IsCURCommaFields NBNKDBfields" >
                      <label for="NBNK_PROINTRATE" class="">Proposed interest rate<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_PROTENTURE" disabled maxlength="30"  name="NBNK_PROTENTURE" class="form-control NBNKMndtry IsCURCommaFields NBNKDBfields" >
                      <label for="NBNK_PROTENTURE" class="">Proposed tenure<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <select class="mdb-select md-form colorful-select dropdown-primary NBNKDBfields"id="NBNK_BILLSVALID"
				  name="NBNK_BILLSVALID">
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
             <input type="button" style="display:none" class="DashTrg"  onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SGETNONBANKMONTH',DBSrc:'currentProfile',TableHeader:
			 'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#NBNK_SCHEMEID').val(),MnuId:''},
			 {0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||2','MONTHSHEETGRD');" id="BTMONTHSHEETGRD" name="BTMONTHSHEETGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid " id="Table3">
             </table>
           </div>
        </div>  */	-->

		<div class="form-row">
				<div class="col-md-12">
					<input type="button" class="DashTrg" style="display:none" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SGETNONBANKMONTH',DBSrc:
						'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#NBNK_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),
						1:$('#LOCC_BrName')},'||2','NONBNKBASEDGRD');" id="NONBNKBASEDGRD" name="NONBNKBASEDGRD" />
							<table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table3">
							</table>
				</div>
		    </div>		
				 
			 <div class="form-row">
            <div class="col-md-6 BluShd"> 
                   <label for="" class="Btxt10">Total Bills Validated &#8377;<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="NBNK_AVERAGE" disabled name="NBNK_AVERAGE" value="0" class="form-control  Btxt04 IsCURCommaFields  IsNumberFields NoSpecialChar  NBNKDBfields">
              </div>
			</div>
				 
				
			 <div class="form-row">
			 <div class="col-md-4">
           		<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary NBNKDBfields" onchange="Chkprofit();" id="NBNK_TYPEBUSS" name="NBNK_TYPEBUSS">
                  	<option value="">Select</option>
  					 	<option value="">Bussiness</option>
  					
				</select>
				<label class="mdb-main-label BTxt9">Type of Bussinesss<span class="MndtryAstr">*</span></label>
             </div>
            </div>
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_GROSSPRO" disabled maxlength="30"  name="NBNK_GROSSPRO" 
					  class="form-control NBNKMndtry  IsCURCommaFields NBNKDBfields">
                      <label for="NBNK_GROSSPRO" class="">Gross Profit <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_GROSSPROMON" disabled  maxlength="30" onblur="Chkprofit();" name="NBNK_GROSSPROMON" class="form-control NBNKMndtry IsCURCommaFields  NBNKDBfields">
                      <label for="NBNK_GROSSPROMON" class="">Gross Profit per month<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           
				</div>
		<div class="form-row"> 
		 <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_RENTPERMON"  maxlength="30" onblur="Chkprofit();"  name="NBNK_RENTPERMON" class="form-control NBNKMndtry  IsCURCommaFields NBNKDBfields">
                      <label for="NBNK_RENTPERMON" class="">Rent Paid per month<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_SALAPERMON"  maxlength="30" onblur="Chkprofit();" name="NBNK_SALAPERMON" class="form-control NBNKMndtry IsCURCommaFields NBNKDBfields">
                      <label for="NBNK_SALAPERMON" class="">Salary paid per month<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
			<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_OTHFIXCOST"  maxlength="30" onblur="Chkprofit();"  name="NBNK_OTHFIXCOST" class="form-control NBNKMndtry IsCURCommaFields NBNKDBfields">
                      <label for="NBNK_OTHFIXCOST" class="">Other Fixed Cost<span class="MndtryAstr">*</span></label>
                  </div>
                </div>	
           
            
				</div>
			<div class="form-row">
			 <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_NETPROFIT" disabled maxlength="30"  name="NBNK_NETPROFIT" class="form-control NBNKMndtry IsCURCommaFields NBNKDBfields">
                      <label for="NBNK_NETPROFIT" class="">Net Profit<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_DSR" disabled maxlength="30"  name="NBNK_DSR" class="form-control NBNKMndtry  IsCURCommaFields NBNKDBfields">
                      <label for="NBNK_DSR" class="">DSR 60% <span class="MndtryAstr">*</span></label>
                  </div>
                </div>			
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_EXISTEMIOBLI"  maxlength="30" onblur="Existemi();"  name="NBNK_EXISTEMIOBLI" class="form-control NBNKMndtry IsCURCommaFields NBNKDBfields">
                      <label for="NBNK_EXISTEMIOBLI" class="">Existing EMI Obligation <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
            
           <!-- <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_ABB" disabled maxlength="30"  name="NBNK_ABB" class="form-control NBNKMndtry IsCURCommaFields NBNKDBfields">
                      <label for="NBNK_ABB" class="">90% of ABB <span class="MndtryAstr">*</span></label>
                  </div>
                </div>-->
				</div>
			<div class="form-row">	 	 
          <!--  <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_EMITRACK" disabled  maxlength="30"  name="NBNK_EMITRACK" class="form-control NBNKMndtry IsCURCommaFields NBNKDBfields">
                      <label for="NBNK_EMITRACK" class="">Twice of 12  months EMI track<span class="MndtryAstr">*</span></label>
                  </div>
                </div>-->
				 <!-- <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_FUNDEMI" maxlength="30"  name="NBNK_FUNDEMI" class="form-control NBNKMndtry IsCURCommaFields NBNKDBfields" Onchange ="EMIPERLAK">
                      <label for="NBNK_FUNDEMI" class="">Fund for EMI<span class="MndtryAstr">*</span></label>
                  </div>
                </div>-->
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_AVALFUND" disabled maxlength="30"  name="NBNK_AVALFUND" class="form-control NBNKMndtry IsCURCommaFields NBNKDBfields">
                      <label for="NBNK_AVALFUND" class="">Available Fund<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				  <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_EMIPERLAKH" disabled  maxlength="30"  name="NBNK_EMIPERLAKH" class="form-control NBNKMndtry IsCURCommaFields NBNKDBfields">
                      <label for="NBNK_EMIPERLAKH" class="">EMI Per Lakh<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="NBNK_LOANEGBLAKH" disabled maxlength="30"  name="NBNK_LOANEGBLAKH" class="form-control NBNKMndtry IsCURCommaFields NBNKDBfields">
                      <label for="NBNK_LOANEGBLAKH" class="">Loan Eligibility in Lakh<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				</div>
		
			 
				  </br>
                  <div class="form-row"style="display:none">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TNONBANK|NBNK" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TNONBANK|NBNK" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
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
<th>NBMO_MONTH</th> 
<th>NBMO_AMOUNT</th> 
<th>NBMO_SCHEMEID</th> 

   </thead> 
    </table> 
	
<script type="text/javascript" src="ThemeproLO/Financials/Script/NonBnkBase/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Financials/Script/NonBnkBase/Validation.js${DMY13}"></script>                            
 