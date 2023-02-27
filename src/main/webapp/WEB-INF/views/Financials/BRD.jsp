<!--Accordion wrapper-->
</br>
<div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
  <!-- Accordion card -->
  <div class="card CardNS">

    <!-- Card header -->
      <div class="card-body px-lg-5 pt-0" >
</br>
    </br>
	     <div class="Btxt10 ">ABB</div>
		   </br>
         <input type="text" id="SABB_PRCSID" hidden="hidden" name="SABB_PRCSID" class="form-control SABBDBfields">
         <input type="text" id="SABB_ACTIVITYID" hidden="hidden" name="SABB_ACTIVITYID" class="form-control SABBDBfields">
         <input type="text" id="SABB_DTCREATED" hidden="hidden" name="SABB_DTCREATED" class="form-control SABBDBfields">
         <input type="text" id="SABB_CREATEDBY" hidden="hidden" name="SABB_CREATEDBY" class="form-control SABBDBfields">
         <input type="text" id="SABB_DTMODIFIED" hidden="hidden" name="SABB_DTMODIFIED" class="form-control SABBDBfields">
         <input type="text" id="SABB_MODIFIEDBY" hidden="hidden" name="SABB_MODIFIEDBY" class="form-control SABBDBfields">
         <input type="text" id="SABB_SHEMEID" hidden="hidden" name="SABB_SHEMEID" class="form-control SABBDBfields">
		 <input type="text" id="SABB_SCHEMENAME" hidden="hidden" name="SABB_SCHEMENAME" class="form-control SABBDBfields">
	
		        <div class="form-row ">
		         <div class="col-md-4">
                     <div class="md-form">
                        <select class="mdb-select md-form colorful-select dropdown-primary  SABBDBfields"  onchange="BANKSUMAVG();" id="SABB_NOBANKACC" name="SABB_NOBANKACC">
                           <option value="" selected>--Select--</option>
						   <option value="Single">Single</option>
                           <option value="Multiple">Multiple</option>
                          
                        </select>
                        <label class="mdb-main-label BTxt9">Number of Bank accounts considered for eigibiity<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				   <div class="col-md-4">
                     <div class="md-form">
                        <select class="mdb-select md-form colorful-select dropdown-primary  SABBDBfields"  onchange="BANKSUMAVG();" id="SABB_BANKMONTHS" name="SABB_BANKMONTHS">
                           <option value="" selected>--Select--</option>
						   <option value="6 Month">6 Month</option>
                           <option value="12 Month">12 Month</option>
                          
                        </select>
                        <label class="mdb-main-label BTxt9">Banking Months<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_SUMAVG" disabled  maxlength="200"  class="form-control   IsCURCommaFields IsNumberFields NoSpecialChar  SABBDBfields " name="SABB_SUMAVG">
                        <label for ="SABB_SUMAVG" class="">Sum of Averages <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				    </div>
			   <div class="form-row ">
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_MONTHABB"  disabled maxlength="200"  class="form-control   IsCURCommaFields IsNumberFields NoSpecialChar  SABBDBfields " name="SABB_MONTHABB">
                        <label for ="SABB_MONTHABB" class="">Monthly ABB<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
             
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_TOTCREBANKACC"  onblur="SUBTRACTIONAMOUNT(); PERNONBUSINESS()"  maxlength="200"  class="form-control   IsCURCommaFields IsNumberFields NoSpecialChar  SABBDBfields " name="SABB_TOTCREBANKACC">
                        <label for ="SABB_TOTCREBANKACC" class="">Total credit summation in Bank Account<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_BUSINCRESUM"  onblur="SUBTRACTIONAMOUNT();PERNONBUSINESS(); AJUSTABB();" maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar SABBDBfields  " name="SABB_BUSINCRESUM">
                        <label for ="SABB_BUSINCRESUM" class="">Total non-business credit summation<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				   </div>
              <div class="form-row ">
			  
			  
			  
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_REVBUSICRESUM"  disabled  maxlength="200" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar SABBDBfields" name="SABB_REVBUSICRESUM">
                        <label for ="SABB_REVBUSICRESUM" class="">Revised Credit Summation (Business)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
			 
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_PRCNONSUM"  disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  SABBDBfields "  name="SABB_PRCNONSUM">
                        <label for ="SABB_PRCNONSUM" class="">% of non-business credit summation<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_ADJUCTABB"  disabled onblur="FINALABB();  " maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar SABBDBfields  " name="SABB_ADJUCTABB">
                        <label for ="SABB_ADJUCTABB" class="">Adjusted ABB <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				    </div>       
               <div class="form-row ">
			   
			      <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_EMILASTSIXMONTH"   onblur="FINALABB();" maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  SABBDBfields "  name="SABB_EMILASTSIXMONTH">
                        <label for ="SABB_EMILASTSIXMONTH" class="">EMI of Loan takenwithin last  6 months<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
			 
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_EMICLOSIXMONTH"  onblur="FINALABB();" maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar SABBDBfields  " name="SABB_EMICLOSIXMONTH">
                        <label for ="SABB_EMICLOSIXMONTH" class="">EMI of loan to be closed within next 6 Months<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_FINALABB"  disabled maxlength="200"   class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  SABBDBfields " name="SABB_FINALABB">
                        <label for ="SABB_FINALABB" class="">Final ABB for eligibility <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  </div>  
				  
				<div class="form-row" >
				  
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_EMIPAIDSIXMONTH"  onblur="GetEmiperlakh(); GetMaxEmi();" maxlength="200" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  SABBDBfields " name="SABB_EMIPAIDSIXMONTH">
                        <label for ="SABB_EMIPAIDSIXMONTH" style="word-wrap: break-word;" class="">EMI Paid in the last 12 months (of Loan EMI Vintage of 12 months or more)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				</div>  
				<div class="form-row" style="display:none">
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_EMI" disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar SABBDBfields  " name="SABB_EMI">
                        <label for ="SABB_EMI" class="">Per Lakh EMI<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_MAXEMI" disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  SABBDBfields " name="SABB_MAXEMI">
                        <label for ="SABB_MAXEMI" class="">Maximum EMI Possible<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_LOANELIGH" disabled maxlength="200"   class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar SABBDBfields  " name="SABB_LOANELIGH">
                        <label for ="SABB_LOANELIGH" class="">Loan Eligibility<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  </div>  
				 <div class="form-row " style="display:none">
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_PROPLOAN" disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  SABBDBfields " name="SABB_PROPLOAN">
                        <label for ="SABB_PROPLOAN" class="">Proposed Loan <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				 <!--  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_TURNOVERVAL"  maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  SABBDBfields " name="SABB_TURNOVERVAL">
                        <label for ="SABB_TURNOVERVAL" class="">Turn Over Validation<span class="MndtryAstr"></span></label>
                     </div>
                  </div>--> 
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_EXITLOAN"  maxlength="200"  onblur="GetOutStand(); GetLoanexpos();" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  SABBDBfields " name="SABB_EXITLOAN">
                        <label for ="SABB_EXITLOAN" class="">Outstanding of Existing Loans (including LAP/CC/OD)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_ODLIMIT"  maxlength="200"  onblur="GetOutStand(); GetLoanexpos();"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar SABBDBfields  " name="SABB_ODLIMIT">
                        <label for ="SABB_ODLIMIT" class="">CC/OD Limit<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				</div>  
                <div class="form-row " style="display:none"> 
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_LAPOS"   maxlength="200"  onblur="GetOutStand(); GetLoanexpos();"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar SABBDBfields  " name="SABB_LAPOS">
                        <label for ="SABB_LAPOS" class="">LAP O/s (only LAP with balance tenure of > 5 years to be considered)<span class="MndtryAstr"></span></label>
                     </div>
                  </div> 
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_OUTEXITLAON" disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields IsCURCommaFields IsNumberFields NoSpecialChar  SABBDBfields " name="SABB_OUTEXITLAON">
                        <label for ="SABB_OUTEXITLAON" class="">Outstanding Considered of Existing Loan<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_TOTLOANEXP"  disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  SABBDBfields " name="SABB_TOTLOANEXP">
                        <label for ="SABB_TOTLOANEXP" class="">Total Loan Exposure<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				 </div>  
				 <div class="form-row " style="display:none">
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_PERTOTLAONEXP" disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  SABBDBfields " name="SABB_PERTOTLAONEXP">
                        <label for ="SABB_PERTOTLAONEXP" class="">Total Loan Exposure (as a % of Business Credit Summation) <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="SABB_TURNOVERVALI" disabled maxlength="200"  class="form-control  IsAlphaFields    NoSpecialChar  SABBDBfields " name="SABB_TURNOVERVALI">
                        <label for ="SABB_TURNOVERVALI" class="">Turnover Validation<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				</div>  
                <div class="form-row">
                    <div class="col d-flex justify-content-center">
                        <button type="button" id="save3" data-form="LSW_TSCHEMEABB"  data-aria="LSW_TSCHEMEABB|SABB|SABB_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                        <button type="button" data-form="LSW_TSCHEMEABB"  data-aria="LSW_TSCHEMEABB|SABB|SABB_SCHEMEID"data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                     </div>
                </div>
        <!-- Short Term Liquidity end -->  
        </form>
     </div>
    </div>
  </div>
 
  <!-- Accordion card -->

  <!-- Accordion card -->

  <!-- Accordion card -->

 
  <!-- Accordion card -->

<!-- Accordion wrapper -->
<!-- END -->
                         
							 

  <script type="text/javascript" src="ThemeproLO/Financials/Script/ABB/LoadSubmit.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/Financials/Script/ABB/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div>
                                </div>   -->                           