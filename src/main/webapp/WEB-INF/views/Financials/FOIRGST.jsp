<!-- Accordion card -->
  <div class="card active">
    <!-- Card body -->
    <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
      data-parent="#accordionEx">
      <div class="card-body px-lg-5 pt-0">
         <br>
         <div class="Btxt10 ">FOIR GST</div>
		   </br>
		   <div class="form-row ALLI">
        	<div class="col Btxt10" style="color: rgb(255, 0, 0);">Details to be entered in actuals (Rs)</div>
        </div>
         <input type="text" id="FOGS_PRCSID" hidden="hidden" name="FOGS_PRCSID" class="form-control FOGSDBfields">
         <input type="text" id="FOGS_ACTIVITYID" hidden="hidden" name="FOGS_ACTIVITYID" class="form-control FOGSDBfields">
         <input type="text" id="FOGS_DTCREATED" hidden="hidden" name="FOGS_DTCREATED" class="form-control FOGSDBfields">
         <input type="text" id="FOGS_CREATEDBY" hidden="hidden" name="FOGS_CREATEDBY" class="form-control FOGSDBfields">
         <input type="text" id="FOGS_DTMODIFIED" hidden="hidden" name="FOGS_DTMODIFIED" class="form-control FOGSDBfields">
         <input type="text" id="FOGS_MODIFIEDBY" hidden="hidden" name="FOGS_MODIFIEDBY" class="form-control FOGSDBfields">
         <input type="text" id="FOGS_SCHEMEID"   hidden="hidden" name="FOGS_SCHEMEID" class="form-control FOGSDBfields">
         <input type="text" id="FOGS_SCHEMENAME" hidden="hidden" name="FOGS_SCHEMENAME" class="form-control FOGSDBfields">
          <input type="text" id="FOGS_PRODUCT" hidden="hidden" name="FOGS_PRODUCT" class="form-control FOGSDBfields">
		  <input type="text" id="FOGS_LOANID"   hidden="hidden" name="FOGS_LOANID" class="form-control FOGSDBfields">

			 <div class="form-row">
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_PRDNAME"  disabled maxlength="200"  class="form-control  NoSpecialChar  FOGSDBfields " name="FOGS_PRDNAME">
                        <label for ="FOGS_PRDNAME" class="">Product <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
              
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_FOIR"   maxlength="5"  class="form-control  NoSpecialChar IsNumberFields  FOGSDBfields " onblur="FoirGst();" name="FOGS_FOIR">
                        <label for ="FOGS_FOIR" class="">FOIR %<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				   <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_APPROI" disabled  maxlength="200"  class="form-control  NoSpecialChar  FOGSDBfields " name="FOGS_APPROI">
                        <label for ="FOGS_APPROI" class="">Input Applicable ROI proposed <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
               </div>
			   <div class="form-row">
			      <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_TENURE" disabled maxlength="200"  class="form-control  NoSpecialChar  FOGSDBfields " name="FOGS_TENURE">
                        <label for ="FOGS_TENURE" class="">Tenure Proposed<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
			      <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_BUSINESSTYE"  maxlength="200"  class="form-control  NoSpecialChar  FOGSDBfields " name="FOGS_BUSINESSTYE">
                        <label for ="FOGS_BUSINESSTYE" class="">Business type<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_INDGROUP"  maxlength="200"  class="form-control  NoSpecialChar  FOGSDBfields " name="FOGS_INDGROUP">
                        <label for ="FOGS_INDGROUP" class="">Industry Group<span class="MndtryAstr"></span></label>
                     </div>
                  </div> 
               </div>
			   <div class="form-row">
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_SUBINSTGROUP"  maxlength="200"  class="form-control  NoSpecialChar  FOGSDBfields " name="FOGS_SUBINSTGROUP">
                        <label for ="FOGS_SUBINSTGROUP" class="">Sub Industry Group<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
              
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_PAT"  maxlength="200" onblur="FoirGst();" class="form-control  NoSpecialChar  IsNumberFields   IsCURCommaFields  FOGSDBfields " name="FOGS_PAT">
                        <label for ="FOGS_PAT" class="">PAT<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				   <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_DEP"  maxlength="200" onblur="FoirGst();"  class="form-control  NoSpecialChar IsNumberFields   IsCURCommaFields FOGSDBfields " name="FOGS_DEP">
                        <label for ="FOGS_DEP" class="">Dep<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
               </div>
			   
			   
			   <div class="form-row">
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_INTERPAID"  maxlength="200" onblur="FoirGst();" class="form-control  IsCURCommaFields   IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_INTERPAID">
                        <label for ="FOGS_INTERPAID" class="">Interest excluding interest paid to related party<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
              
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_RECUMPARTENER"  maxlength="200" onblur="FoirGst();" class="form-control  IsCURCommaFields   IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_RECUMPARTENER">
                        <label for ="FOGS_RECUMPARTENER" class="">Remuneration to partners/ int on cap.<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				   <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_OTHERINCOME"  maxlength="200" onblur="FoirGst();"  class="form-control  IsCURCommaFields   IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_OTHERINCOME">
                        <label for ="FOGS_OTHERINCOME" class="">Other Non-Business Income<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
               </div>
			   
			   
			   
			   <div class="form-row">
			 <div class="col-md-4" style="display:none">
                     <div class="md-form">
                        <input type="text" id="FOGS_INDTAX"  disabled maxlength="200" onblur="FoirGst();"  class="form-control  IsCURCommaFields   IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_INDTAX">
                        <label for ="FOGS_INDTAX" class="">Net Sales<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_INDTAXI"   maxlength="200" onblur="FoirGst();"  class="form-control  IsCURCommaFields   IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_INDTAXI">
                        <label for ="FOGS_INDTAXI" class="">Individual Tax<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
              
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_INDMARGIN" disabled maxlength="200" onblur="FoirGst();" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_INDMARGIN">
                        <label for ="FOGS_INDMARGIN" class="">Industry Margin (%)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				   <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_GROSSPROFIT"  maxlength="200" disabled onblur="FoirGst();" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_GROSSPROFIT">
                        <label for ="FOGS_GROSSPROFIT" class="">Gross Profit<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
               </div>
			   
			   
			   <div class="form-row">
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_GROSSMARGIN"  maxlength="200" disabled onblur="FoirGst();" class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_GROSSMARGIN">
                        <label for ="FOGS_GROSSMARGIN" class="">Gross Margin (%)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
              
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_APPLMARGIN"  maxlength="200" onblur="FoirGst();" disabled class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_APPLMARGIN">
                        <label for ="FOGS_APPLMARGIN" class="">Applicable Margin (%)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				   <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_APPLPROFIT" disabled  maxlength="200" onblur="FoirGst();"   class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_APPLPROFIT">
                        <label for ="FOGS_APPLPROFIT" class="">Applicable profit<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
               </div>
      
	  
	   <div class="form-row">
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_FOIRMONTH"  maxlength="200" onblur="FoirGst();"  disabled class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_FOIRMONTH">
                        <label for ="FOGS_FOIRMONTH" class="">FOIR applied eligible income (Monthly)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
              
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_EXISTEMI"  maxlength="200" onblur="FoirGst();" disabled class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_EXISTEMI">
                        <label for ="FOGS_EXISTEMI" class="">Existing EMI + Interest on Borrowed fund excluding related party<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				   <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_PREFUNDFCF"  onblur="FoirGst();" maxlength="200" disabled class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_PREFUNDFCF">
                        <label for ="FOGS_PREFUNDFCF" class="">Pre funding FCF<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
               </div>
			   
			   
			   
			    <div class="form-row">
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_EMI"  onblur="FoirGst();" maxlength="200" disabled class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_EMI">
                        <label for ="FOGS_EMI" class="">EMI p.m for 1 Lac (as per product)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
              
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_LOANELIGI" onblur="FoirGst();" maxlength="200" disabled class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_LOANELIGI">
                        <label for ="FOGS_LOANELIGI" class="">Loan Eligibility<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				   <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_LOANPROPOSED" onblur="FoirGst();" maxlength="200" disabled class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_LOANPROPOSED">
                        <label for ="FOGS_LOANPROPOSED" class="">Loan Proposed<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
               </div>
			   
			   
			    <div class="form-row">
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_PREFUNDSCR" onblur="FoirGst();"  maxlength="200" disabled class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_PREFUNDSCR">
                        <label for ="FOGS_PREFUNDSCR" class="">Pre funding DSCR <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
              
			 <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="FOGS_POSTFUNDSCR" onblur="FoirGst();" maxlength="200" disabled class="form-control  IsCURCommaFields IsNumberFields NoSpecialChar  FOGSDBfields " name="FOGS_POSTFUNDSCR">
                        <label for ="FOGS_POSTFUNDSCR" class="">Post Funding DSCR <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				  
				  
				  
               </div>
			   
			   
	  
	  
      
                <div class="form-row">
                    <div class="col d-flex justify-content-center">
                        <button type="button" id="save3" data-form="PROPERTYAPPRASIAL"  data-aria="LSW_TFOIRGST|FOGS|FOGS_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                        <button type="button" data-form="PROPERTYAPPRASIAL"  data-aria="LSW_TFOIRGST|FOGS|FOGS_SCHEMEID"data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                     </div>
                </div>
       
        <!-- Short Term Liquidity end -->  
        </form>
      </div>
    </div>
  </div>

  <script type="text/javascript" src="ThemeproLO/Financials/Script/FOIRGST/LoadSubmit.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/Financials/Script/FOIRGST/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div>
                                </div>   -->                           