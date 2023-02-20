    
   
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                       <!--   <div class="">


                            <!--Admin panel-->
                            <!--  <div class="admin-panel">-->

 

</br>

<!-- Start -->

<!--Accordion wrapper-->

 
  <!-- Accordion card -->
  <div class="card">

    <!-- Card header -->
   
	  
	 <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                  <input type="text" id="CGST_PRCSID" hidden="hidden" name="CGST_PRCSID" class="form-control CGSTDBfields">
                  <input type="text" id="CGST_ACTIVITYID" hidden="hidden" name="CGST_ACTIVITYID" class="form-control CGSTDBfields">
                  <input type="text" id="CGST_CREATEDBY" hidden="hidden" name="CGST_CREATEDBY" class="form-control CGSTDBfields"> 
                  <input type="text" id="CGST_DTCREATED" hidden="hidden" name="CGST_DTCREATED" class="form-control CGSTDBfields">
                  <input type="text" id="CGST_MODIFIEDBY" hidden="hidden" name="CGST_MODIFIEDBY" class="form-control CGSTDBfields">
                  <input type="text" id="CGST_DTMODIFIED" hidden="hidden" name="CGST_DTMODIFIED" class="form-control CGSTDBfields">
				  <input type="text"  id="CGST_SCHEMEID" hidden="hidden" name="CGST_SCHEMEID" class="form-control  CGSTDBfields">
				  <input type="text" id="CGST_SCHEMENAME" hidden="hidden" name="CGST_SCHEMENAME" class="form-control CGSTDBfields">
				  <input type="text" id="CGST_PRODUCTID" hidden="hidden" name="CGST_PRODUCTID" class="form-control CGSTDBfields">
                   <input type="text" id="CGST_PRODUCTNAME" hidden="hidden" name="CGST_PRODUCTNAME" class="form-control CGSTDBfields">
				 </br>
				 <div class="form-row">
                     <div class="col Btxt3">GST Based</div>
                  </div>
				  </br> 
				   <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_PROPOSEINR" disabled maxlength="30" onchange="CheckLoan();" name="CGST_PROPOSEINR" class="form-control  IsNumberFields  CGSTDBfields">
                      <label for="CGST_PROPOSEINR" class="">Proposed interest rate (%)<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_PROTENOR"  disabled  maxlength="30" onchange="CheckLoan();" name="CGST_PROTENOR" class="form-control  IsNumberFields  CGSTDBfields">
                      <label for="CGST_PROTENOR" class="">Proposed tennure<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_PROVAL"    maxlength="30"  name="CGST_PROVAL" class="form-control  IsNumberFields IsCURCommaFields INCOM CGSTDBfields">
                      <label for="CGST_PROVAL" class="">Property Value as per valuation report<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
  
             </div>
			 <div class="form-row">
         
				  <div class="col-md-4">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary  CGSTDBfields"  id="CGST_TYOFPROPERTY" name="CGST_TYOFPROPERTY">
                          <!-- <option value="">--Select--</option>
						    <option value="SORP/SOCP">SORP/SOCP</option>
						   <option value="Resi - 50% Rented/50% Self-Occupied">Resi - 50% Rented/50% Self-Occupied</option>
						   <option value="Comm - 50% Rented/50% Self-Occupied">Comm - 50% Rented/50% Self-Occupied</option>
						   <option value="Resi/Comm - 100% Rented">Resi/Comm - 100% Rented</option> 
						   <option value="Industrial property">Industrial property</option> 
						   <option value="Non-agri vacant plots">Non-agri vacant plots</option>  -->
						   </select>
                           <label class="mdb-main-label BTxt9">Type of Property<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
					   <div class="col-md-4">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary     CGSTDBfields" ONCHANGE="GetMarginVal();"     id="CGST_TYOFBUSINESS" name="CGST_TYOFBUSINESS">
                           <!-- <option value="">--Select--</option>
						    <option value="Trading - Kirana">Trading - Kirana</option>
						  <option value="Trading - Pharma">Trading - Pharma</option>
						   <option value="Tading Others">Tading - Others</option>
						   <option value="Manuf - Drugs/Pharma">Manuf - Drugs/Pharma</option> 
						   <option value="Manuf - Metal Casting/Forging">Manuf - Metal Casting/Forging</option> 
						   <option value="Manuf-Auto Ancilliary">Manuf-Auto Ancilliary</option> 
						   <option value="Manuf - Electrical Equipments">Manuf - Electrical Equipments</option> 
						   <option value="Manuf - Consumer Electronics">Manuf - Consumer Electronics</option> 
						   <option value="Manuf - Domestic Appliance">Manuf - Domestic Appliance</option> 
						   <option value="Manuf - Personal Care Pdts">Manuf - Personal Care Pdts</option> 
						   <option value="Manuf - Others">Manuf - Others</option>-->  
						 
						   </select>
                           <label class="mdb-main-label BTxt9">Type of business<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
					  <div class="col">
              <div class="md-form">
                    
                    <input type="text" id="CGST_MOYRINCORPOR" name="CGST_MOYRINCORPOR" disabled  maxlength="10" class="form-control  CGSTDBfields IsNumberFields NoSpecialChar INDM ISDatefield     ">
                    <label for="CGST_MOYRINCORPOR" class="">Month and year of incorporation<span class="MndtryAstr"></span></label>
                    <!--<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/> -->
                  </div>
                </div> 
             </div> 
			 <div class="form-row">
			  <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_INDUSMARGIN" disabled  maxlength="30"  name="CGST_INDUSMARGIN" class="form-control   IsNumberFields  CGSTDBfields">
                      <label for="CGST_INDUSMARGIN" class="">Industry Margin (%)<span class="MndtryAstr"></span></label>
                  </div>
                </div>
          
             </div> 
			 <div class="form-row">
                     <div class="col Btxt10">Profit Multiplier</div>
                  </div>
				  </br>
				  
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_AVGOF12MONSAL"    maxlength="30" onchange="GetNetProfit();" name="CGST_AVGOF12MONSAL" class="form-control  IsCURCommaFields IsNumberFields  CGSTDBfields">
                      <label for="CGST_AVGOF12MONSAL" class="">Average of Last 12 months GST Sales<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_NETPROFIT" disabled maxlength="30"  name="CGST_NETPROFIT" class="form-control IsCURCommaFields IsNumberFields   CGSTDBfields">
                      <label for="CGST_NETPROFIT" class="">Net Profit<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_ADDITIONINCM"    maxlength="30"  name="CGST_ADDITIONINCM" class="form-control IsCURCommaFields IsNumberFields INCOM  CGSTDBfields">
                      <label for="CGST_ADDITIONINCM" class="">Additional Income<span class="MndtryAstr"></span></label>
                  </div>
                </div>
  
             </div>
	 
			 
			  <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_ADDINCMCONSIDER" disabled maxlength="30"  name="CGST_ADDINCMCONSIDER" class="form-control IsCURCommaFields IsNumberFields  INCOM  CGSTDBfields">
                      <label for="CGST_ADDINCMCONSIDER" class="">Additional Income Considered<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_SURAVLFREMISER" disabled maxlength="30"  name="CGST_SURAVLFREMISER" class="form-control   IsCURCommaFields IsNumberFields INCOM CGSTDBfields">
                      <label for="CGST_SURAVLFREMISER" class="">Surplus Available for EMI Servicing<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_EXISTEMIOBLI"    maxlength="30"  name="CGST_EXISTEMIOBLI" class="form-control  IsCURCommaFields IsNumberFields INCM CGSTDBfields">
                      <label for="CGST_EXISTEMIOBLI" class="">Existing EMI Obligations (Total)<span class="MndtryAstr"></span></label>
                  </div>
                </div>
  
             </div>
			  <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_PROPSEDEMI" disabled maxlength="30"  name="CGST_PROPSEDEMI" class="form-control IsCURCommaFields IsNumberFields   INCM  CGSTDBfields">
                      <label for="CGST_PROPSEDEMI" class="">Proposed EMI<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				</div>
				</br>				
				
				  <div class="form-row">
                     <div class="col Btxt10">Loan Eligibility</div>
                  </div>
				  </br>
          
             
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_EMIPRLAKH"  maxlength="30" disabled name="CGST_EMIPRLAKH" class="form-control IsCURCommaFields IsNumberFields    CGSTDBfields">
                      <label for="CGST_EMIPRLAKH" class="">EMI Per Lakh<span class="MndtryAstr"></span></label>
                  </div>
                </div>
		 
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_LOANELIGIBIL"  maxlength="30"  disabled name="CGST_LOANELIGIBIL" class="form-control IsCURCommaFields IsNumberFields   CGSTDBfields">
                      <label for="CGST_LOANELIGIBIL" class="">Loan Eligibility<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_PROPOSEDLOAN" disabled   maxlength="30"  name="CGST_PROPOSEDLOAN" class="form-control IsCURCommaFields IsNumberFields  CGSTDBfields">
                      <label for="CGST_PROPOSEDLOAN" class="">Proposed Loan<span class="MndtryAstr"></span></label>
                  </div>
                </div>
  
             </div> 
			 <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CGST_FINALLTV" disabled  maxlength="30"  name="CGST_FINALLTV" class="form-control IsPercentageFld  IsNumberFields CGSTDBfields">
                      <label for="CGST_FINALLTV" class="">Final LTV (%)<span class="MndtryAstr"></span></label>
                  </div>
                </div> 
             </div>
			 
				  </br>
                  <div class="form-row">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TGSTBASEDDTLS|CGST|CGST_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                     <!--   <button type="button" data-aria="LSW_TGSTBASEDDTLS|CGST|CGST_SCHEMEID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> -->
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
        <!--                      </div>
                              
							 
							 
<!-- <table style="display:none" id="GridTable2">
<thead>
<th>PVCS_APPLNAME</th>
<th>PVCS_CIBILSTATUS</th>
<th>PVCS_DEDUBESTAUS</th>
<th>PVCS_PROFCHECK</th>
<th>PVCS_CUSID</th>
</thead>
</table>-->
  <script type="text/javascript" src="ThemeproLO/Financials/Script/GSTBased/LoadSubmit.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/Financials/Script/GSTBased/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div></script>               