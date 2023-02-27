<!-- Start -->
<!--Accordion wrapper-->
  <!-- Accordion card -->
  <div class="card">

    <!-- Card header -->
      <div class="card-body px-lg-5 pt-0" >
</br>
    </br>
		   <div class="Btxt10 ">Asset Creation</div>
		   </br>
         <input type="text" id="ASST_PRCSID" hidden="hidden" name="ASST_PRCSID" class="form-control ASSTDBfields">
         <input type="text" id="ASST_ACTIVITYID" hidden="hidden" name="ASST_ACTIVITYID" class="form-control ASSTDBfields">
         <input type="text" id="ASST_DTCREATED" hidden="hidden" name="ASST_DTCREATED" class="form-control ASSTDBfields">
         <input type="text" id="ASST_CREATEDBY" hidden="hidden" name="ASST_CREATEDBY" class="form-control ASSTDBfields">
         <input type="text" id="ASST_DTMODIFIED" hidden="hidden" name="ASST_DTMODIFIED" class="form-control ASSTDBfields">
         <input type="text" id="ASST_MODIFIEDBY" hidden="hidden" name="ASST_MODIFIEDBY" class="form-control ASSTDBfields">
         <input type="text" id="ASST_CUSID" hidden="hidden" name="ASST_CUSID" class="form-control ASSTDBfields">
		 <input type="text" id="ASST_SCHEMEID" hidden="hidden"  name="ASST_SCHEMEID" class="form-control ASSTDBfields">
		 <input type="text" id="ASST_SCHEMENAME" hidden="hidden" name="ASST_SCHEMENAME" class="form-control ASSTDBfields">
	
		  <div class="form-row ">
                  
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_NAMEENTITY" disabled maxlength="200"  class="form-control  NoSpecialChar  ASSTDBfields " name="ASST_NAMEENTITY">
                        <label for ="ASST_NAMEENTITY" class="">Name of the Entity<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				   <div class="col-md-4">
                     <!-- First name -->
                     <div class="md-form">
                        <input type="text" id="ASST_MONTHYEAR" disabled name="ASST_MONTHYEAR" maxlength="10" class="form-control IsNumberFields ISDatefield   ASSTDBfields">
                        <label for="ASST_MONTHYEAR" class="">Month and year of incorporation<span class="MndtryAstr"></span></label>
                        <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"   />
                     </div>
                  </div>
				  
				   <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_INTERATE"  disabled maxlength="200"  class="form-control  NoSpecialChar  ASSTDBfields " name="ASST_INTERATE">
                        <label for ="ASST_INTERATE" class="">Proposed interest rate<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
               </div>
			   
			   
			   <div class="form-row ">
                  
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_PROPOSEDTENU" disabled  maxlength="200"  class="form-control  NoSpecialChar  ASSTDBfields " name="ASST_PROPOSEDTENU">
                        <label for ="ASST_PROPOSEDTENU" class="">Proposed tenure<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  
				  <div class="col-md-4 CHKLNTY">
                     <div class="md-form">
                        <select class="mdb-select md-form colorful-select dropdown-primary  ASSTDBfields"  id="ASST_TYPEPROPE" name="ASST_TYPEPROPE">
                           <option value="" selected>--Select--</option>
                          
                          
                        </select>
                        <label class="mdb-main-label BTxt9">Type of Property<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  <div class="col-md-4 CHKLNTY">
                     <div class="md-form">
                        <input type="text" id="ASST_PROPVALUATION"  maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar ASSTDBfields  " name="ASST_PROPVALUATION">
                        <label for ="ASST_PROPVALUATION" class="">Property Valuation (as per Valuation report)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
               </div>
			   
			     <div class="Btxt10 ">Assets</div>
			   </br>
            <div class="form-row ">
                  
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_VEHICLE"  maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar ASSTDBfields" onchange="SUBTRACTIONAMOUNT('ASST_VEHICLE','ASST_LOANVEHCILE','ASST_VEHICLEASSETS')" name="ASST_VEHICLE">
                        <label for ="ASST_VEHICLE" class="">Vehicle Purchased<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_LOANVEHCILE"  maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  ASSTDBfields " onchange="SUBTRACTIONAMOUNT('ASST_VEHICLE','ASST_LOANVEHCILE','ASST_VEHICLEASSETS')"name="ASST_LOANVEHCILE">
                        <label for ="ASST_LOANVEHCILE" class="">Loan taken for Vehicle<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_VEHICLEASSETS" disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar ASSTDBfields  " name="ASST_VEHICLEASSETS">
                        <label for ="ASST_VEHICLEASSETS" class="">Asset created for<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				</div>  
				  
				  
				     
            <div class="form-row ">
                  
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_HOUSE"  maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  ASSTDBfields " onchange="SUBTRACTIONAMOUNT('ASST_HOUSE','ASST_LOANHOUSE','ASST_HOUSEASSETES')" name="ASST_HOUSE">
                        <label for ="ASST_HOUSE" class="">House property purchased<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_LOANHOUSE"  maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar ASSTDBfields  " onchange="SUBTRACTIONAMOUNT('ASST_HOUSE','ASST_LOANHOUSE','ASST_HOUSEASSETES')" name="ASST_LOANHOUSE">
                        <label for ="ASST_LOANHOUSE" class="">Loan Taken for House Purchased<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_HOUSEASSETES"  maxlength="200"  disabled class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  ASSTDBfields " name="ASST_HOUSEASSETES">
                        <label for ="ASST_HOUSEASSETES" class="">Asset created for<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				</div>  
				  
				  
				  <div class="form-row ">
                  
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_HOUSRENV"  maxlength="200" onchange="SUBTRACTIONAMOUNT('ASST_HOUSRENV','ASST_LOANHOUSRENV','ASST_HOUSRENVASSETES')" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  ASSTDBfields " name="ASST_HOUSRENV">
                        <label for ="ASST_HOUSRENV" class="">House Renovation (Cost capping at Rs. 2000 per sft)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_LOANHOUSRENV"  maxlength="200" onchange="SUBTRACTIONAMOUNT('ASST_HOUSRENV','ASST_LOANHOUSRENV','ASST_HOUSRENVASSETES')" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar ASSTDBfields  " name="ASST_LOANHOUSRENV">
                        <label for ="ASST_LOANHOUSRENV" class="">Loan taken for renovation<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_HOUSRENVASSETES"  maxlength="200" disabled class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  ASSTDBfields " name="ASST_HOUSRENVASSETES">
                        <label for ="ASST_HOUSRENVASSETES" class="">Asset created for<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				</div>  
				    
				  
				   <div class="form-row ">
                  
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_GOLD"  maxlength="200"  onchange="TOTALASSCTCREATED()" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar ASSTDBfields  " name="ASST_GOLD">
                        <label for ="ASST_GOLD" class="">Gold purchased (Backed by proper invoice)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_POSTALDEP"  maxlength="200" onchange="TOTALASSCTCREATED()" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  ASSTDBfields " name="ASST_POSTALDEP">
                        <label for ="ASST_POSTALDEP" class="">FD / RD / Postal Deposits <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_MUTUALFUND"  maxlength="200" onchange="TOTALASSCTCREATED()" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  ASSTDBfields " name="ASST_MUTUALFUND">
                        <label for ="ASST_MUTUALFUND" class="">Mutual Fund / Equity investment<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				</div>  
				  
             <div class="form-row ">
                  
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_INSUPOLICY"  maxlength="200" onchange="TOTALASSCTCREATED()" class="form-control  IsCURCommaFields TIMSABB   NoSpecialChar  ASSTDBfields " name="ASST_INSUPOLICY">
                        <label for ="ASST_INSUPOLICY" class="">Insurance policy (Non-term plan)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_TOTALASSETS" disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar ASSTDBfields  " name="ASST_TOTALASSETS">
                        <label for ="ASST_TOTALASSETS" class="">Total asset created<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_MONTHCONTR"  disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar ASSTDBfields  " name="ASST_MONTHCONTR">
                        <label for ="ASST_MONTHCONTR" class="">Monthly contribution<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				</div>  
				
				
				 <div class="form-row ">
                  
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_TIMEABB" disabled  maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields IsCURCommaFields IsNumberFields NoSpecialChar  ASSTDBfields " name="ASST_TIMEABB">
                        <label for ="ASST_TIMEABB" class="">Times ABB<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_TWICETRACKER" disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  ASSTDBfields " name="ASST_TWICETRACKER">
                        <label for ="ASST_TWICETRACKER" class="">Twice of Track Record for last 12 months <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_ASSTSFUN" disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  ASSTDBfields " name="ASST_ASSTSFUN">
                        <label for ="ASST_ASSTSFUN" class="">Adjusted Fund Available<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				</div>  
				
				 <div class="form-row ">
                  
				    <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_EMI" disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  ASSTDBfields " name="ASST_EMI">
                        <label for ="ASST_EMI" class="">EMI Per Lakh<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  
				  
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_LOANELIGIBIL" disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  ASSTDBfields " name="ASST_LOANELIGIBIL">
                        <label for ="ASST_LOANELIGIBIL" class="">Loan Eligibility in Rs. Lakh<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="ASST_PROPOSLOAN" disabled  maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar ASSTDBfields  " name="ASST_PROPOSLOAN">
                        <label for ="ASST_PROPOSLOAN" class="">Proposed Loan<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  <div class="col-md-4 CHKLNTY">
                     <div class="md-form">
                        <input type="text" id="ASST_FINALLTV" disabled maxlength="200"  class="form-control   IsNumberFields NoSpecialChar ASSTDBfields  " name="ASST_FINALLTV">
                        <label for ="ASST_FINALLTV" class="">Final LTV(%)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				</div>  
				
				
                <div class="form-row">
                    <div class="col d-flex justify-content-center">
                        <button type="button" id="save3" data-form="LSW_TASSETCREATION"  data-aria="LSW_TASSETCREATION|ASST|ASST_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                        <!--<button type="button" data-form="LSW_TASSETCREATION"  data-aria="LSW_TASSETCREATION|ASST|ASST_SCHEMEID"data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> -->
                     </div>
                </div>
       
        <!-- Short Term Liquidity end -->  
        </form>
     </div>
    </div>
  <!-- Accordion card -->
  <!-- Accordion card -->
  <!-- Accordion card -->
  <!-- Accordion card -->
  <script type="text/javascript" src="ThemeproLO/Financials/Script/AssetCreation/LoadSubmit.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/Financials/Script/AssetCreation/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div>
                                </div>   -->                           