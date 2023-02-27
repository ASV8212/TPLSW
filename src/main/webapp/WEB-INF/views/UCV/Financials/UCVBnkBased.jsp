<!-- Start -->
<!--Accordion wrapper-->
  <!-- Accordion card -->
  <div class="card">

    <!-- Card header -->
   
	  
	 <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                <input type="text" id="CBBA_PRCSID" hidden="hidden" name="CBBA_PRCSID" class="form-control CBBADBfields">
                <input type="text" id="CBBA_ACTIVITYID" hidden="hidden" name="CBBA_ACTIVITYID" class="form-control CBBADBfields">
                <input type="text" id="CBBA_CREATEDBY" hidden="hidden" name="CBBA_CREATEDBY" class="form-control CBBADBfields"> 
                <input type="text" id="CBBA_DTCREATED" hidden="hidden" name="CBBA_DTCREATED" class="form-control CBBADBfields">
                <input type="text" id="CBBA_MODIFIEDBY" hidden="hidden" name="CBBA_MODIFIEDBY" class="form-control CBBADBfields">
                <input type="text" id="CBBA_DTMODIFIED" hidden="hidden" name="CBBA_DTMODIFIED" class="form-control CBBADBfields">
				<input type="text" id="CBBA_SCHEMEID" hidden="hidden" name="CBBA_SCHEMEID" class="form-control  CBBADBfields">
				<input type="text" id="CBBA_SCHEMENAME" hidden="hidden" name="CBBA_SCHEMENAME" class="form-control CBBADBfields">  
				<input type="text" id="CBBA_GRIDMNTH" hidden="hidden" name="CBBA_GRIDMNTH" class="form-control CBBADBfields">
				<input type="text" id="CBBA_PRODUCTID" hidden="hidden" name="CBBA_PRODUCTID" class="form-control CBBADBfields">  
				<input type="text" id="CBBA_PRODUCTNAME" hidden="hidden" name="CBBA_PRODUCTNAME" class="form-control CBBADBfields">
				 <!--value="S00001"--> 
                   
				</br>
			<div class="form-row">
                <div class="col Btxt3">Banking Based</div>
            </div>
				  </br>
				  
  
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_BPROPOSEINR" disabled maxlength="30"  name="CBBA_BPROPOSEINR" class="form-control    CBBADBfields">
						<label for="CBBA_BPROPOSEINR" class="">Proposed interest rate </label>
					</div>
                </div>
				 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_BPROTENOR"  disabled maxlength="30"  name="CBBA_BPROTENOR" class="form-control    CBBADBfields">
						<label for="CBBA_BPROTENOR" class="">Proposed tenure </label>
					</div>
                </div>
				
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_BPROVAL"    maxlength="30" name="CBBA_BPROVAL" class="form-control PROVAL  IsCURCommaFields CBBADBfields">
						<label for="CBBA_BPROVAL" class="">Property Value (as per valuation report)</label>
					</div>
                </div>
			</div>
				
			<div class="form-row">
				<div class="col-md-4">
                    <div class="md-form">
                        <select class="md-form colorful-select dropdown-primary  CBBADBfields  "   id="CBBA_BTYOFPRO" name="CBBA_BTYOFPRO"> 
							<option value="" selected>--Select--</option>						
						</select>
							<label class="mdb-main-label BTxt9">Type of Property </label>
                    </div>
                </div>
				<div class="col-md-4">
                    <div class="md-form">
                        <select class="md-form colorful-select dropdown-primary  CBBADBfields  " onchange="GetMarginVal();"  id="CBBA_BTYOFBUS" name="CBBA_BTYOFBUS"> 
							 <option value="" selected>--Select--</option>
						</select>
							<label class="mdb-main-label BTxt9">Type of business </label>
                    </div>
                </div>
					 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_MONYEAR" disabled maxlength="10"  name="CBBA_MONYEAR" class="form-control NoSpecialChar ISFutureDateFields IsNumberFields ISDatefield   CBBADBfields">
						<label for="CBBA_MONYEAR" class="">Month and year of incorporation </label>
					</div>
                </div>
					 
  
            </div>
			 
				<div class="form-row">
					<div class="col-md-4">
						<div class="md-form">
							<input type="text" id="CBBA_INDUS" disabled maxlength="30"  name="CBBA_INDUS" class="form-control  IsCURCommaFields  CBBADBfields">
								<label for="CBBA_INDUS" class="">Industry Margin </label>
						</div>
					</div>
				</div>
           
				</br>
			<div class="form-row">
                <div class="col Btxt10">Monthly Sales/Purchases for Last 12 months, as per credits/debits in Banking (Only identifitable sales/purchases in banking will be considered)</div>
			</div>			  
			</br>
				  
			<div class="form-row">
				<div class="col-md-12">
					<input type="button" class="DashTrg" style="display:none" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SBANKBASEDGRD',DBSrc:
						'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBBA_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),
						1:$('#LOCC_BrName')},'||2','BNKBASEDGRD');" id="BTNBNKBASEDGRD" name="BTNBNKBASEDGRD" />
							<table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table3">
							</table>
				</div>
		    </div>
			
			<!-- <div class="form-row">
           <div class="col-md-12">
             <input type="button" class="DashTrg" style="display:none" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SGETBNTBALANCEGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#BNKG_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','BNKBASEDGRD');" id="BTNBNKBASEDGRD" name="BTNBNKBASEDGRD" />
              <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table3">
             </table>
           </div>
		    </div>
			
		   <div class="form-row">
          <div class="col-md-12">
             <input type="button" data-button="GridButton" data-value="BALANCETable|LSW_SGETBNTBALANCEGRID|PrcsID|FCBD_ACCTNUM|FCBD_BNKNO|8,9,10|BNKBASEDGRD" style="display:none" class="DashTrg FCBDDBfields BalancGrdTrg  MultiGridTrg" id="BTNBALANCEGRD" name="BTNBALANCEGRD" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display FCBDDBfields DataGrid" name="Table3" id="Table3">
             </table>
          </div>
      </div>-->
		   
		   <!-- MULIN -->
				  
				   </br>
			<div class="form-row">
                <div class="col Btxt10">Net Margin</div>
            </div>
			</br>
				  
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_BUYSUPPLY"  disabled  maxlength="30"  name="CBBA_BUYSUPPLY" class="form-control  IsCURCommaFields  CBBADBfields">
						<label for="CBBA_BUYSUPPLY" class="">Average of Last 12 months Sales/Purchases</label>
					</div>
                </div>
				 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_NETPRFT" disabled maxlength="30"  name="CBBA_NETPRFT" class="form-control IsCURCommaFields   CBBADBfields">
							<label for="CBBA_NETPRFT" class="">Net Profit</label>
					</div>
				</div>
				
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_ADDMONTH"    maxlength="30"  name="CBBA_ADDMONTH" class="form-control  IsCURCommaFields PERCEN SURPLUS CBBADBfields">
							<label for="CBBA_ADDMONTH" class="">Additional Income - Monthly</label>
					</div>
				</div>
  
            </div>
	 
			 
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_ADDCONS" disabled maxlength="30"  name="CBBA_ADDCONS" class="form-control   IsCURCommaFields CBBADBfields">
						<label for="CBBA_ADDCONS" class="">Additional Income Considered</label>
					</div>
                </div>
				 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_SURPLUSEMI" disabled maxlength="30"  name="CBBA_SURPLUSEMI" class="form-control   IsCURCommaFields CBBADBfields">
						<label for="CBBA_SURPLUSEMI" class="">Surplus Available for EMI Servicing</label>
					</div>
                </div>
				
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_EXISTEMI"    maxlength="30"  name="CBBA_EXISTEMI" class="form-control  IsCURCommaFields CALCMINIMUM  CBBADBfields">
						<label for="CBBA_EXISTEMI" class="">Existing EMI Obligations (Total)</label>
					</div>
                </div>
  
            </div>
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_PROPOSEEMI" disabled maxlength="30"  name="CBBA_PROPOSEEMI" class="form-control  IsCURCommaFields  CBBADBfields">
						<label for="CBBA_PROPOSEEMI" class="">Proposed EMI</label>
					</div>
                </div>
				 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_EMIPLAKH" disabled maxlength="30"  name="CBBA_EMIPLAKH" class="form-control  IsCURCommaFields  CBBADBfields">
						<label for="CBBA_EMIPLAKH" class="">EMI Per Lakh</label>
					</div>
                </div>
				
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_LNELIGI"  disabled  maxlength="30"  name="CBBA_LNELIGI" class="form-control IsCURCommaFields   CBBADBfields">
						<label for="CBBA_LNELIGI" class="">Loan Eligibility</label>
					</div>
                </div>
  
            </div> 
			<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_PROPOSELN" disabled maxlength="30"  name="CBBA_PROPOSELN" class="form-control  IsCURCommaFields   CBBADBfields">
						<label for="CBBA_PROPOSELN" class="">Proposed Loan</label>
					</div>
                </div>
		 
				<div class="col-md-4">
					<div class="md-form">
						<input type="text" id="CBBA_FINLLTV" disabled maxlength="30"  name="CBBA_FINLLTV" class="form-control  IsCURCommaFields    CBBADBfields">
						<label for="CBBA_FINLLTV" class="">Final LTV(%)</label>
					</div>
                </div>
			</div>
				
			</br>
            <div class="form-row">
                <div class="col d-flex justify-content-center">
                    <button type="button" id="Save" data-aria="LSW_TBANKINGBASED|CBBA|CBBA_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                  <!--  <button type="button" data-aria="LSW_TBANKINGBASED|CBBA|CBBA_SCHEMEID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> -->
                </div>
            </div>
             
            </form>
        </div>
		  

    <!-- Card body  EMIP FINLOAN PROPOSELN FINALLTV -->
   
  </div>
 
  <!-- Accordion card -->

 
<!-- <table style="display:none" id="GridTable2">
<thead>
<th>PVCS_APPLNAME</th>
<th>PVCS_CIBILSTATUS</th>
<th>PVCS_DEDUBESTAUS</th>
<th>PVCS_PROFCHECK</th>
<th>PVCS_CUSID</th>
</thead>
</table>-->
  <script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/BNKBased/LoadSubmit.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/BNKBased/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

<table style="display:none" id="GridTable3">
   <thead>
<th>BNKG_PARTICULAR</th> 
<th>BNKG_AMOUNT</th> 
<th>BNKG_SCHEMEID</th> 

   </thead> 
    </table> 

                                  <!--   </div></script>               