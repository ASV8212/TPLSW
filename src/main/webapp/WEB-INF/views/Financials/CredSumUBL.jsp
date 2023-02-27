

    <!-- Card header -->
      <div class="card-body px-lg-5 pt-0" >
</br>
    </br>
		   <div class="Btxt10 ">Credit Summation</div>
		 </br>
         <input type="text" id="CRSU_PRCSID" hidden="hidden" name="CRSU_PRCSID" class="form-control CRSUDBfields">
         <input type="text" id="CRSU_ACTIVITYID" hidden="hidden" name="CRSU_ACTIVITYID" class="form-control CRSUDBfields">
         <input type="text" id="CRSU_DTCREATED" hidden="hidden" name="CRSU_DTCREATED" class="form-control CRSUDBfields">
         <input type="text" id="CRSU_CREATEDBY" hidden="hidden" name="CRSU_CREATEDBY" class="form-control CRSUDBfields">
         <input type="text" id="CRSU_DTMODIFIED" hidden="hidden" name="CRSU_DTMODIFIED" class="form-control CRSUDBfields">
         <input type="text" id="CRSU_MODIFIEDBY" hidden="hidden" name="CRSU_MODIFIEDBY" class="form-control CRSUDBfields">
		 <input type="text" id="CRSU_SCHEMEID" hidden="hidden" name="CRSU_SCHEMEID" class="form-control CRSUDBfields">
		 <input type="text" id="CRSU_SCHEMENAME" hidden="hidden" name="CRSU_SCHEMENAME" class="form-control CRSUDBfields">
		 <input type="text" id="CRSU_MULTIPLIER" hidden="hidden" name="CRSU_MULTIPLIER" class="form-control CRSUDBfields">
		 <input type="text" id="CRSU_LOANID" hidden="hidden" name="CRSU_LOANID" class="form-control CRSUDBfields">
	 
	 
	 
				<div class="form-row ">
		           <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_NAMECUS" disabled  maxlength="200"  class="form-control NoSpecialChar CRSUDBfields " name="CRSU_NAMECUS">
                        <label for ="CRSU_NAMECUS" class="">Name of the customer<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				<div class="col-md-4">
				<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary CRSUDBfields"  onchange="Monthavg();" id="CRSU_TYPEINDUS" name="CRSU_TYPEINDUS">
                  	<option value="">Select</option>
  					 	<option value="">Industry</option>
  					
				</select>
				<label class="mdb-main-label BTxt9">Type of Industry<span class="MndtryAstr">*</span></label>
             </div>
            </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_LOANAMTREQ" disabled  maxlength="200" class="form-control   IsCURCommaFields IsNumberFields NoSpecialChar  CRSUDBfields " name="CRSU_LOANAMTREQ">
                        <label for ="CRSU_LOANAMTREQ" class="">Loan amount Requested<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
               </div>
			   
			   
			   <div class="form-row ">
		           <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRSU_PROTENTURE" disabled maxlength="30"  name="CRSU_PROTENTURE" class="form-control CRSUMndtry IsCURCommaFields CRSUDBfields" >
                      <label for="CRSU_PROTENTURE" class="">Proposed tenure<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				  <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRSU_PROINTRATE" disabled maxlength="30"  name="CRSU_PROINTRATE" class="form-control CRSUMndtry IsCURCommaFields CRSUDBfields" >
                      <label for="CRSU_PROINTRATE" class="">Proposed interest rate<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                   <div class="md-form">
                        <select class="mdb-select md-form colorful-select dropdown-primary  CRSUDBfields"  onchange="BANKSUMAVG();" id="CRSU_NOBANKACC" name="CRSU_NOBANKACC">
                           <option value="" selected>--Select--</option>
						   <option value="Single">Single</option>
                           <option value="Multiple">Multiple</option>
                         </select>
                       <label class="mdb-main-label BTxt9">Number of Bank accounts considered for eigibiity<span class="MndtryAstr"></span></label>
                   </div>
                  </div>
               </div>
		        <div class="form-row ">
				<div class="col-md-4">
                     <div class="md-form">
                        <select class="mdb-select md-form colorful-select dropdown-primary  CRSUDBfields"  onchange="BANKSUMAVG();" id="CRSU_BANKMONTHS" name="CRSU_BANKMONTHS">
                           <option value="" selected>--Select--</option>
						   <option value="6 Month">6 Month</option>
                           <option value="12 Month">12 Month</option>
                        </select>
                        <label class="mdb-main-label BTxt9">Banking Months<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_SUMAVG" disabled  maxlength="200"  class="form-control   IsCURCommaFields IsNumberFields NoSpecialChar  CRSUDBfields " name="CRSU_SUMAVG">
                        <label for ="CRSU_SUMAVG" class="">Sum of Averages <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_MONTHABB"  disabled maxlength="200"  class="form-control   IsCURCommaFields IsNumberFields NoSpecialChar  CRSUDBfields " name="CRSU_MONTHABB">
                        <label for ="CRSU_MONTHABB" class="">Monthly ABB<span class="MndtryAstr"></span></label>
                     </div>
                  </div> 
               </div>
			   <div class="form-row ">
			   
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_TOTCREBANKACC" disabled onblur="SUBTRACTIONAMOUNT(); PERNONBUSINESS();ADJUSTEDCREDITSUM();"  maxlength="200"  class="form-control   IsCURCommaFields IsNumberFields NoSpecialChar  CRSUDBfields " name="CRSU_TOTCREBANKACC">
                        <label for ="CRSU_TOTCREBANKACC" class="">Total credit summation in Bank Account<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_BUSINCRESUM" disabled onblur="SUBTRACTIONAMOUNT();ADJUSTEDCREDITSUM();PERNONBUSINESS(); AJUSTABB();" maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields  " name="CRSU_BUSINCRESUM">
                        <label for ="CRSU_BUSINCRESUM" class="">Total non-business credit summation<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_ADJBUSICRESUM"  disabled  maxlength="200" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_ADJBUSICRESUM">
                        <label for ="CRSU_ADJBUSICRESUM" class="">Adjusted Credit Summation (Business)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
			    </div>
                <div class="form-row ">
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_PRCNONSUM"  disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  CRSUDBfields "  name="CRSU_PRCNONSUM">
                        <label for ="CRSU_PRCNONSUM" class="">% of non-business credit summation<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_ADJUCTABB"  disabled onblur="FINALABB();  " maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields  " name="CRSU_ADJUCTABB">
                        <label for ="CRSU_ADJUCTABB" class="">Adjusted ABB <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_CRDSUMFIRST3"  disabled onblur="FINALABB();" maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  CRSUDBfields "  name="CRSU_CRDSUMFIRST3">
                        <label for ="CRSU_CRDSUMFIRST3" class="">Credit Summation in first three months (C1)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				</div> 
				<div class="form-row ">
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_CRDSUMLAST3" disabled onblur="FINALABB();" maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  CRSUDBfields "  name="CRSU_CRDSUMLAST3">
                        <label for ="CRSU_CRDSUMLAST3" class="">Credit Summation in last three months (C2)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_VARIANCE" disabled maxlength="200" onblur="FINALABB(); Revisedcreditsum();"class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_VARIANCE">
                        <label for ="CRSU_VARIANCE" class="">Variance<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="md-form">
                     <select class="mdb-select md-form colorful-select dropdown-primary MULTIDIS CRSUDBfields"onchange="Revisedcreditsum();Monthavg();" id="CRSU_VARMULTI" name="CRSU_VARMULTI">
                           <option value="" selected>--Select--</option>
						   <option value="125">125</option>
                           <option value="135">135</option>
						   <option value="150">150</option>
                        </select>
					 <label for ="CRSU_VARMULTI" class="">Select multiplier<span class="MndtryAstr"></span></label>
					 </div>
                  </div>
				</div> 
				<div class="form-row ">
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_REVBUSICRESUM"  disabled  maxlength="200" onblur="Monthavg();" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_REVBUSICRESUM">
                        <label for ="CRSU_REVBUSICRESUM" class="">Revised Credit Summation<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_EMITRACKLAST12" onchange="Monthavg();" maxlength="200" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_EMITRACKLAST12">
                        <label for ="CRSU_EMITRACKLAST12" class="">EMI Track record of minimum last 12 months<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRSU_EXISTEMIOBLI"  maxlength="30" onchange="Monthavg();" name="CRSU_EXISTEMIOBLI" class="form-control CRSUMndtry IsCURCommaFields CRSUDBfields">
                      <label for="CRSU_EXISTEMIOBLI" class="">Total Existing Obligation<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				</div> 
                <div class="form-row ">
				<div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_OBLICLOSENEXT6" maxlength="200" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_OBLICLOSENEXT6">
                        <label for ="CRSU_OBLICLOSENEXT6" class="">Obligation related to loans getting closed in next 6 months<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				<div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_EMILASTSIXMONTH"   onblur="FINALABB();BANKSUMAVG();" maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  CRSUDBfields "  name="CRSU_EMILASTSIXMONTH">
                        <label for ="CRSU_EMILASTSIXMONTH" class="">EMI of Loan taken in last  6 months<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_FINALABB"  disabled maxlength="200"   class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  CRSUDBfields " name="CRSU_FINALABB">
                        <label for ="CRSU_FINALABB" class="">Final ABB for eligibility <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				</div> 
				<div class="form-row ">
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_BUSIPREMRENT" maxlength="200" onchange="Totalcost();" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_BUSIPREMRENT">
                        <label for ="CRSU_BUSIPREMRENT" class="">Business Premises Rental<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_EMPSALARY" maxlength="200"onchange="Totalcost();" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_EMPSALARY">
                        <label for ="CRSU_EMPSALARY" class="">Employee Salary<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRSU_OTHFIXCOST" maxlength="30" name="CRSU_OTHFIXCOST" onchange="Totalcost();Monthavg();" class="form-control CRSUMndtry IsCURCommaFields CRSUDBfields">
                      <label for="CRSU_OTHFIXCOST" class="">Any Other Fixed Cost<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				</div>
				<div class="form-row ">
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_TOTFIXCOST" disabled maxlength="200" onchange="Monthavg();" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_TOTFIXCOST">
                        <label for ="CRSU_TOTFIXCOST" class="">Total Fixed Cost<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  </div>
				  
				<div class="form-row ">
					<div class="col-md-4">
						<div class="Btxt10 ">Multiplier of 2</div>
					</div>
				</div>
				
				<div class="form-row ">
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_MONAVGCRESUM" disabled maxlength="200" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_MONAVGCRESUM">
                        <label for ="CRSU_MONAVGCRESUM" class="">Monthly Average Credit Summation<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRSU_GROSPROFIT" disabled maxlength="30" name="CRSU_GROSPROFIT" onblur="Monthavg();" class="form-control CRSUMndtry IsCURCommaFields CRSUDBfields">
                      <label for="CRSU_GROSPROFIT" class="">Gross Profit<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_NETPROFIT" disabled maxlength="200" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_NETPROFIT">
                        <label for ="CRSU_NETPROFIT" class="">Net Profit<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				</div> 
				<div class="form-row ">
	
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_PROAVAILLOANSERV" disabled maxlength="3" class="form-control IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_PROAVAILLOANSERV">
                        <label for ="CRSU_PROAVAILLOANSERV" class="">Profit Available for Loan Servicing (DSR @60%)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRSU_PROADDILOAN" disabled maxlength="30" name="CRSU_PROADDILOAN" class="form-control CRSUMndtry IsCURCommaFields CRSUDBfields">
                      <label for="CRSU_PROADDILOAN" class="">Profit Available for servicing of additional loan<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_PROLOANAPPL" disabled maxlength="200" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_PROLOANAPPL">
                        <label for ="CRSU_PROLOANAPPL" class="">Profit Available for servicing of loan applied with us<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				</div> 

				<div class="form-row ">
				<div class="col-md-4">
				<div class="Btxt10 ">Multiplier of 5</div>
				</div>
				</div>

			<div class="form-row ">
				<div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_MONAVGCRESUMFVE" disabled maxlength="200" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_MONAVGCRESUMFVE">
                        <label for ="CRSU_MONAVGCRESUMFVE" class="">Monthly Average Credit Summation<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRSU_GROSPROFITFVE" disabled maxlength="30" name="CRSU_GROSPROFITFVE" onblur="Monthavg();" class="form-control CRSUMndtry IsCURCommaFields CRSUDBfields">
                      <label for="CRSU_GROSPROFITFVE" class="">Gross Profit<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_NETPROFITFVE" disabled maxlength="200" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_NETPROFITFVE">
                        <label for ="CRSU_NETPROFITFVE" class="">Net Profit<span class="MndtryAstr"></span></label>
                     </div>
                 </div>
				</div> 
				<div class="form-row ">

				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_PROAVAILLOANSERVFVE" disabled maxlength="3" class="form-control IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_PROAVAILLOANSERVFVE">
                        <label for ="CRSU_PROAVAILLOANSERVFVE" class="">Profit Available for Loan Servicing (DSR @60%)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="CRSU_PROADDILOANFVE" disabled maxlength="30" name="CRSU_PROADDILOANFVE" class="form-control CRSUMndtry IsCURCommaFields CRSUDBfields">
                      <label for="CRSU_PROADDILOANFVE" class="">Profit Available for servicing of additional loan<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_PROLOANAPPLFVE" disabled maxlength="200" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_PROLOANAPPLFVE">
                        <label for ="CRSU_PROLOANAPPLFVE" class="">Profit Available for servicing of loan applied with us<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				</div> 
				<div class="form-row ">
								  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_EMI" disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields  " name="CRSU_EMI">
                        <label for ="CRSU_EMI" class="">EMI Per Lakh <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				</div>

				
				<div class="form-row ">
				<div class="col-md-4">
				<div class="Btxt10 ">Credit Summation</div>
				</div>
				</div>
				<div class="form-row ">
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_MINMONTHABB" disabled maxlength="200" class="form-control NoSpecialChar CRSUDBfields" name="CRSU_MINMONTHABB">
                        <label for ="CRSU_MINMONTHABB" class="">Minimum Monthly ABB<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_MINICRDSUM" disabled maxlength="200" class="form-control NoSpecialChar CRSUDBfields" name="CRSU_MINICRDSUM">
                        <label for ="CRSU_MINICRDSUM" class="">Minimum Credit Summation<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <!--<div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_MINICRDSUM" disabled maxlength="200" class="form-control  IsCURCommaFields NoSpecialChar CRSUDBfields" name="CRSU_MINICRDSUM">
                        <label for ="CRSU_MINICRDSUM" class="">Minimum Credit Summation</label>
                     </div>
                  </div>-->
               <!--   <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_MINIEMI" disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  CRSUDBfields " name="CRSU_MINIEMI">
                        <label for ="CRSU_MINIEMI" class="">Minimum EMI<span class="MndtryAstr"></span></label>
                     </div>
                  </div>-->
				</div> 
				<div class="form-row ">
				<!--<div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_MINCRDDEB" disabled maxlength="200" class="form-control NoSpecialChar CRSUDBfields" name="CRSU_MINCRDDEB">
                        <label for ="CRSU_MINCRDDEB" class="">Minimum credit n debit in account<span class="MndtryAstr"></span></label>
                     </div>
                  </div>-->
				  <!--<div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_MINCRDDEB" disabled maxlength="200" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_MINCRDDEB">
                        <label for ="CRSU_MINCRDDEB" class="">Minimum credit n debit in account<span class="MndtryAstr"></span></label>
                     </div>
                  </div>-->
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_LOANELIGABB" disabled maxlength="200" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_LOANELIGABB">
                        <label for ="CRSU_LOANELIGABB" class="">Loan Eligibility Based on ABB<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_LOANELIGCRDSUM" disabled maxlength="200"  class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  CRSUDBfields " name="CRSU_LOANELIGCRDSUM">
                        <label for ="CRSU_LOANELIGCRDSUM" class="">Loan Eligibility Based on Credit Summation<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				</div> 
				<div class="form-row ">
				<div class="col-md-4">
                        <div class="md-form">
                           <div id="Assessment Considered" class="select-radio CRSUMndtry ">
                              <div class="custom-control custom-radio custom-control-inline">
                                 <input type="radio" class="custom-control-input CRSUDBfields" onclick="finalloan();" value="ABB" id="ABB" name="CRSU_CREDITSUM">
                                 <label class="custom-control-label" for="ABB">ABB</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline CRSUDBfields">
                                 <input type="radio" class="custom-control-input CRSUDBfields" onclick="finalloan();" value="Credit Summation" id="CREDITSUM" name="CRSU_CREDITSUM">
                                 <label class="custom-control-label" for="CREDITSUM">Credit Summation</label>
                              </div>
                           </div>
                           <label class="mdb-main-label BTxt9">Assessment Considered<span class="MndtryAstr">*</span></label>      
                        </div>
                     </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="CRSU_FINALLOANELIG" disabled maxlength="200" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar CRSUDBfields" name="CRSU_FINALLOANELIG">
                        <label for ="CRSU_FINALLOANELIG" class="">Final loan eligible for Funding<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				</div>
                <div class="form-row">
                    <div class="col d-flex justify-content-center">
                        <button type="button" id="save3" data-form="LSW_TCREDITSUMUBL"  data-aria="LSW_TCREDITSUMUBL|CRSU|CRSU_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                        <!--<button type="button" data-form="LSW_TSCHEMEABB"  data-aria="LSW_TSCHEMEABB|CRSU|CRSU_SCHEMEID"data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> -->
                     </div>
                </div>
        <!-- Short Term Liquidity end -->  
        </form>
     </div>
  <!-- Accordion card -->
  <!-- Accordion card -->
  <!-- Accordion card -->
  <!-- Accordion card -->
<!-- Accordion wrapper -->
<!-- END -->
  <script type="text/javascript" src="ThemeproLO/Financials/Script/CredSumUBL/LoadSubmit.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/Financials/Script/CredSumUBL/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div>
                                </div>   -->                           