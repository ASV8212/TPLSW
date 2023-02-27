    
   
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                       <!-- <div class="">-->


                            <!--Admin panel-->
                            <!-- <div class="admin-panel">-->

 

</br>

<!-- Start -->

<!--Accordion wrapper-->

 
  <!-- Accordion card -->
  <div class="card">

    <!-- Card header -->
   
	  
	 <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                  <input type="text" id="CLTV_PRCSID" hidden="hidden" name="CLTV_PRCSID" class="form-control CLTVDBfields">
                  <input type="text" id="CLTV_ACTIVITYID" hidden="hidden" name="CLTV_ACTIVITYID" class="form-control CLTVDBfields">
                  <input type="text" id="CLTV_CREATEDBY" hidden="hidden" name="CLTV_CREATEDBY" class="form-control CLTVDBfields"> 
                  <input type="text" id="CLTV_DTCREATED" hidden="hidden" name="CLTV_DTCREATED" class="form-control CLTVDBfields">
                  <input type="text" id="CLTV_MODIFIEDBY" hidden="hidden" name="CLTV_MODIFIEDBY" class="form-control CLTVDBfields">
                  <input type="text" id="CLTV_DTMODIFIED" hidden="hidden" name="CLTV_DTMODIFIED" class="form-control CLTVDBfields">
				  <input type="text"  id="CLTV_SCHEMEID" hidden="hidden" name="CLTV_SCHEMEID" class="form-control  CLTVDBfields">
				  <input type="text" id="CLTV_SCHEMENAME" hidden="hidden" name="CLTV_SCHEMENAME" class="form-control CLTVDBfields">
				   <input type="text"  id="CLTV_PRODUCTID" hidden="hidden" name="CLTV_PRODUCTID" class="form-control  CLTVDBfields">
				  <input type="text" id="CLTV_PRODUCTAME" hidden="hidden" name="CLTV_PRODUCTAME" class="form-control CLTVDBfields">
				  
                   
				 </br>
				 <div class="form-row">
                     <div class="col Btxt3">LOW LTV - Assessment</div>
                  </div>
				  </br>
				  
 

				   <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_PROPOSEINR" disabled maxlength="30" onchange="CheckLoan();" name="CLTV_PROPOSEINR" class="form-control  IsNumberFields  CLTVDBfields">
                      <label for="CLTV_PROPOSEINR" class="">Proposed interest rate (%)<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_PROTENOR"  disabled  maxlength="30" onchange="CheckLoan();" name="CLTV_PROTENOR" class="form-control  IsNumberFields  CLTVDBfields">
                      <label for="CLTV_PROTENOR" class="">Proposed tennure<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_PROVAL"    maxlength="30"  name="CLTV_PROVAL" class="form-control  IsNumberFields IsCURCommaFields CLTVDBfields">
                      <label for="CLTV_PROVAL" class="">Property Value as per valuation report<span class="MndtryAstr"></span></label>
                  </div>
                </div>
  
             </div>
			 <div class="form-row">
         
				  <div class="col-md-4">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary  CLTVDBfields"  id="CLTV_TYOFPROPERTY" name="CLTV_TYOFPROPERTY">
                           <option value="">--Select--</option>
						   <!-- <option value="Self Occupied - Residential">Self Occupied - Residential</option>
						    <option value="Self Occupied - Commercia">Self Occupied - Commercia</option>-->
						      
						   </select>
                           <label class="mdb-main-label BTxt9">Type of Property<span class="MndtryAstr"></span></label>
                        </div>
                     </div>
					   <div class="col-md-4">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary  CLTVDBfields" onchange="GetMarginVal();" id="CLTV_TYOFBUSINESS" name="CLTV_TYOFBUSINESS">
                            <!--<option value="">--Select--</option>
						    <option value="Kirana">Kirana</option>
						    <option value="Pharma">Pharma</option>
						    <option value="Others">Others</option> --->
						   </select>
                           <label class="mdb-main-label BTxt9">Type of business<span class="MndtryAstr"></span></label>
                        </div>
                     </div>
					  <div class="col-md-4 NIND " style="Display:none">
                        <div class="md-form"> 
						    <input type="text" id="CLTV_SECTOR"   maxlength="30" onchange="CheckSectorType();"    name="CLTV_SECTOR" class="form-control   CLTVDBfields">
                      <label for="CLTV_SECTOR" class="">Sector<span class="MndtryAstr"></span></label>
                          
                        </div>
                     </div>
					   
             </div>
			 
				   <div class="form-row NIND"  style="Display:none">
				   <div class="col-md-4  ">
              <div class="md-form">
                    
                    <input type="text" id="CLTV_MOYRINCORPOR" name="CLTV_MOYRINCORPOR" disabled  maxlength="10" class="form-control  CLTVDBfields IsNumberFields NoSpecialChar INDM ISDatefield ">
                    <label for="CLTV_MOYRINCORPOR" class="">Month and year of incorporation<span class="MndtryAstr"></span></label>
                     <!--<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/> -->
                  </div>
                </div> 
          
             </div>
			  <div class="TRADING">
			 <div class="form-row">
                     <div class="col Btxt10">Trading</div>
                  </div>  
			 <div class="form-row">
			 <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_STOCKVAL"   maxlength="30"   name="CLTV_STOCKVAL" class="form-control IsCURCommaFields IsNumberFields TRAD TRADIN CLTVDBfields">
                      <label for="CLTV_STOCKVAL" class="">Stock Value (as validated through PD)<span class="MndtryAstr"></span></label>
                  </div>
                </div> 
			 
			   <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_INDUSMARGIN"  disabled maxlength="30"   name="CLTV_INDUSMARGIN" class="form-control  IsNumberFields IsPercentageFld TRADIN CLTVDBfields">
                      <label for="CLTV_INDUSMARGIN" class="">Industry Margin (%)<span class="MndtryAstr"></span></label>
                  </div>
                </div> 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_MUTLIPLIER" disabled maxlength="30"  name="CLTV_MUTLIPLIER" class="form-control IsNumberFields  TRADIN CLTVDBfields">
                      <label for="CLTV_MUTLIPLIER" class="">Multiplier<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 </div>
				  <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_MONNETINCOME"  disabled maxlength="30"  name="CLTV_MONNETINCOME" class="form-control IsCURCommaFields IsNumberFields TRADIN  CLTVDBfields">
                      <label for="CLTV_MONNETINCOME" class="">Monthly Net Income<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_SURAVLFREMISER"  disabled maxlength="30"  name="CLTV_SURAVLFREMISER" class="form-control IsCURCommaFields IsNumberFields TRADIN  CLTVDBfields">
                      <label for="CLTV_SURAVLFREMISER" class="">Surplus Available for EMI Servicing<span class="MndtryAstr"></span></label>
                  </div>
                </div>
  
             </div>
			 </div>
			 <div class="MANUFACT">
			 	 <div class="form-row">
                     <div class="col Btxt10">Manufacturing</div>
                  </div>
	 
			 
			  <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_SALES"  maxlength="30"  name="CLTV_SALES" class="form-control IsCURCommaFields IsNumberFields MANU MANUFAC CLTVDBfields">
                      <label for="CLTV_SALES" class="">Sales (as validated through PD)<span class="MndtryAstr"></span></label>
                  </div>
                </div> 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_PURCHASES"  maxlength="30"  name="CLTV_PURCHASES" class="form-control  IsCURCommaFields IsNumberFields MANU  MANUFAC CLTVDBfields">
                      <label for="CLTV_PURCHASES" class="">Purchases (as validated through refence check)<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_GROSSPROFIT"  maxlength="30" disabled name="CLTV_GROSSPROFIT" class="form-control IsCURCommaFields IsNumberFields  MANUFAC  CLTVDBfields">
                      <label for="CLTV_GROSSPROFIT" class="">Gross Profit<span class="MndtryAstr"></span></label>
                  </div>
                </div>
  
             </div>
			  <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_BUSIPREMISRENTAL"  maxlength="30"  name="CLTV_BUSIPREMISRENTAL" class="form-control IsCURCommaFields IsNumberFields  FXCOST MANUFAC CLTVDBfields">
                      <label for="CLTV_BUSIPREMISRENTAL" class="">Business Premises Rental<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_LABOURCHARGE"  maxlength="30"  name="CLTV_LABOURCHARGE" class="form-control IsCURCommaFields IsNumberFields  FXCOST MANUFAC CLTVDBfields">
                      <label for="CLTV_LABOURCHARGE" class="">Labour Charges<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_OTHERMANUCOST"  maxlength="30"   name="CLTV_OTHERMANUCOST" class="form-control IsCURCommaFields IsNumberFields  FXCOST MANUFAC CLTVDBfields">
                      <label for="CLTV_OTHERMANUCOST" class="">Other Manufacturing Costs<span class="MndtryAstr"></span></label>
                  </div>
                </div>
		 
				
				
				</div>
				 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_TOTALMONFXCOST"  maxlength="30" disabled name="CLTV_TOTALMONFXCOST" class="form-control IsCURCommaFields IsNumberFields  MANUFAC  CLTVDBfields">
                      <label for="CLTV_TOTALMONFXCOST" class="">Total Monthly Fixed Cost<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_NETPROFIT"  maxlength="30" disabled name="CLTV_NETPROFIT" class="form-control IsCURCommaFields IsNumberFields  MANUFAC  CLTVDBfields">
                      <label for="CLTV_NETPROFIT" class="">Net Profit<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_DSR"  maxlength="30"  disabled name="CLTV_DSR" class="form-control  IsNumberFields  IsPercentageFld MANUFAC CLTVDBfields">
                      <label for="CLTV_DSR" class="">DSR<span class="MndtryAstr"></span></label>
                  </div>
                </div>
		 
				
				
				</div>
				<div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_MSURAVLEMISER" disabled maxlength="30"  name="CLTV_MSURAVLEMISER" class="form-control IsCURCommaFields IsNumberFields  MANUFAC  CLTVDBfields">
                      <label for="CLTV_MSURAVLEMISER" class="">Surplus available for EMI servicing<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 
                </div> 
				</div>
				</br>				
				
				  <div class="form-row">
                     <div class="col Btxt10">Adjusted Available Fund for EMI</div>
                  </div>
				  </br>
          
             
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_ASURAVLFREMISER"  maxlength="30" disabled  name="CLTV_ASURAVLFREMISER" class="form-control IsCURCommaFields   IsNumberFields    CLTVDBfields">
                      <label for="CLTV_ASURAVLFREMISER" class="">Surplus available for EMI Servicing<span class="MndtryAstr"></span></label>
                  </div>
                </div>
		 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_EXISTEMIOBLI"  maxlength="30" name="CLTV_EXISTEMIOBLI" class="form-control IsCURCommaFields IsNumberFields AVLFUND  CLTVDBfields">
                      <label for="CLTV_EXISTEMIOBLI" class="">Existing EMI Obligations (Total)<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_AVLFUNDFREMISER" disabled  maxlength="30"  name="CLTV_AVLFUNDFREMISER" class="form-control IsCURCommaFields  AVLFUND IsNumberFields  CLTVDBfields">
                      <label for="CLTV_AVLFUNDFREMISER" class="">Available Funds for EMI Servicing<span class="MndtryAstr"></span></label>
                  </div>
                </div>
  
             </div> 
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_THREETIMEABB" disabled maxlength="30"   name="CLTV_THREETIMEABB" class="form-control   IsCURCommaFields IsNumberFields  AVLFUND  CLTVDBfields">
                      <label for="CLTV_THREETIMEABB" class="">3 times ABB<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_LONTRACOFLST12MON"  disabled maxlength="30"  name="CLTV_LONTRACOFLST12MON" class="form-control   IsCURCommaFields IsNumberFields  AVLFUND  CLTVDBfields">
                      <label for="CLTV_LONTRACOFLST12MON" class="">Twice of Loan Track of Last 12 months<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_ADJUSTAVLFNDEMI"  disabled maxlength="30"   name="CLTV_ADJUSTAVLFNDEMI" class="form-control   IsCURCommaFields IsNumberFields AVLFUND  CLTVDBfields">
                      <label for="CLTV_ADJUSTAVLFNDEMI" class="">Adjusted Available Fund for EMI<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				
             </div>
			  <div class="form-row">
                     <div class="col Btxt10">Loan Eligibility</div>
                  </div>
				  </br>
          
             
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_EMIPERLAKH"  maxlength="30" disabled  name="CLTV_EMIPERLAKH" class="form-control IsCURCommaFields IsNumberFields    CLTVDBfields">
                      <label for="CLTV_EMIPERLAKH" class="">EMI Per Lakh<span class="MndtryAstr"></span></label>
                  </div>
                </div>
		 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_LOANELIGIBILITY" disabled maxlength="30" name="CLTV_LOANELIGIBILITY" class="form-control IsCURCommaFields IsNumberFields   CLTVDBfields">
                      <label for="CLTV_LOANELIGIBILITY" class="">Loan Eligibility<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_PROPOSEDLOAN"  disabled maxlength="30"  name="CLTV_PROPOSEDLOAN" class="form-control IsCURCommaFields IsNumberFields  CLTVDBfields">
                      <label for="CLTV_PROPOSEDLOAN" class="">Proposed Loan<span class="MndtryAstr"></span></label>
                  </div>
                </div>
  
             </div> 
			 <div class="form-row">
			   <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CLTV_FINALLTV" disabled  maxlength="30"  name="CLTV_FINALLTV" class="form-control IsNumberFields  CLTVDBfields">
                      <label for="CLTV_FINALLTV" class="">Final LTV (%)<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				</div>
			 
				  </br>
                  <div class="form-row"style="display:none">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TLOWLTVDTLS|CLTV|CLTV_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                        <!--<button type="button" data-aria="LSW_TLOWLTVDTLS|CLTV|CLTV_SCHEMEID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> -->
                     </div>
                  </div>
             
            </form>
         </div>
		  

    <!-- Card body -->
   
  </div>
 
  <!-- Accordion card -->
  <!-- Accordion card -->
   
  <!-- Accordion card -->

  <!-- Accordion card -->

 
  <!-- Accordion card -->
<!--</div>
<!-- Accordion wrapper -->
<!-- END -->
                       <!--     </div>-->
                              
							 
							 
<!-- <table style="display:none" id="GridTable2">
<thead>
<th>PVCS_APPLNAME</th>
<th>PVCS_CIBILSTATUS</th>
<th>PVCS_DEDUBESTAUS</th>
<th>PVCS_PROFCHECK</th>
<th>PVCS_CUSID</th>
</thead>
</table>-->
  <script type="text/javascript" src="ThemeproLO/Financials/Script/LowLTV/LoadSubmit.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/Financials/Script/LowLTV/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div></script>               