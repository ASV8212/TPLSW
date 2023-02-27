        <!--Main row-->
        </br>
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="">
                            <!--Admin panel-->
                            <div class="admin-panel">
                             <div class="row">
         <div class="col-lg-12">
            <ul title="Existing Loan" data-aria="LSW_TFINANCEXISTDETL|FELD|" data-popup="No"  class="nav FormPageMultiTab">
               ${SUBPAGETABDATA}
               <!-- <li id="Co-Applicant1" value="" title = "Co-Applicant1" class="nav-item  active">
                  <a> <div class="nav-link" href="#">Co-Applicant 1</div></a>
                  </li>      
                     
                  <li id=""  value="Add" title = "" class="nav-item FormPageMultiTabAdd">
                  <a> <div class="nav-link" href="#">+ Add</div>  </a>
                  </li>
                  --> 
            </ul>
         </div>
      </div>
  <div class="HyperControls form-row FltRight" > 
	 <a onclick="AddPageMultiData('',$('#FELD_PRCSID').val(),'','ExistingLoan1','FELDDBfields')" class="Btxt4 ADDBTN FltRight"  href="#">+ Another Existing Loan</a>
			<!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
 </div>
<!--Accordion wrapper-->
 <div class="card CardNS">
<div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
  <!-- Accordion card -->
  
   <div data-for="ExistingLoan1" class="ExistingLoan1"> 

   </div>
 </div>
  
 <div class="DynamicPageGrid" data-val="PROPTXTHDR|Existing Loan" id="ExistingLoan1" style="display:none"> 
  
 <div class="card DYNROW" >
 <div class="FormaccordionSUB">
    <!-- Card header -->
    <div class="card-header Btxt7 active" role="tab" id="headingOne1">
      <a data-toggle="collapse" data-aria="LSW_TFINANCEXISTDETL|FELD|FELD_CUSID"  data-multidata="Yes" data-load="" class="Btxt8 AFormaccordion" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
        aria-controls="collapseOne1">       
        <span id="PROPTXTHDR"> Existing Loan</span><i class="fa fa-minus-circle rotate-icon"></i>
      </a>
    </div>
    <!-- Card body -->
    <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
       
       <div > 
       <div class="card-body px-lg-5 pt-0 BSbrd"> 
         </br>
        <form>
        <input type="text" id="FELD_PRCSID"  name="FELD_PRCSID" hidden="hidden" class="form-control FELDDBfields" value="" >
        <input type="text" id="FELD_ACTIVITYID"  name="FELD_ACTIVITYID" hidden="hidden"  class="form-control FELDDBfields" value="">
        <input type="text" id="FELD_CREATEDBY"  name="FELD_CREATEDBY" hidden="hidden"  class="form-control FELDDBfields" value="">
        <input type="text" id="FELD_DTCREATED"  name="FELD_DTCREATED" hidden="hidden"  class="form-control FELDDBfields" value="">
        <input type="text" id="FELD_MODIFIEDBY"  name="FELD_MODIFIEDBY" hidden="hidden"  class="form-control FELDDBfields" value="">
        <input type="text" id="FELD_DTMODIFIED"  name="FELD_DTMODIFIED" hidden="hidden"  class="form-control FELDDBfields" value="">
        <input type="text" id="FELD_CUSID"  name="FELD_CUSID" hidden="hidden"  class="form-control FELDDBfields" value="">
        <input type="text" id="FELD_CUSNAME"  name="FELD_CUSNAME" hidden="hidden"  class="form-control FELDDBfields" value="">
         
        <input type="text" id="FELD_EXLONNO"  name="FELD_EXLONNO" hidden="hidden"  class="form-control FELDDBfields" value="">
				
          <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>
         </br>
          <div class="form-row">
           <div class="col ">
           <div class="FltRight DELBTNTXT">
           Delete Existing Loan
           <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="FELD_PRCSID|FELD_EXLONNO|EXISTINGLOAN" class="DELBTN DELETEEXISLOAN"/>
           </div>    
           </div>     
           </div> 
            <form>
           <div class="form-row OEXL" style="display:none">
			<div class="col-md-3">
                 <div class="md-form">
                     <div class="md-form">
                    <div  class="select-radio"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input FELDDBfields" value="Yes" id="ISEXCHOLALNY" name="FELD_ISEXCHOLALN">
                          <label class="custom-control-label" for="ISEXCHOLALNY">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" checked class="custom-control-input FELDDBfields" value="No" id="ISEXCHOLALNN" name="FELD_ISEXCHOLALN">
                           <label class="custom-control-label" for="ISEXCHOLALNN">No</label>
                       </div>
                   </div>   
				<label for="mdb-main-label BTxt9" class="Btxt10">Internal chola LAP Loan<span class="MndtryAstr"></span></label>				   
               </div>
                 </div>
              </div>
			   <div class="col-md-8">
			   </div>
		   </div>
		   </form>
           <div class="form-row">
                <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="FELD_INSINAME"  maxlength="25" name="FELD_INSINAME" class="form-control IsAlphaFields  FELDDBfields ">
                     <label for="FELD_INSINAME" class="">Name of Institution<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="col-md-4">
                   <div class="md-form">
                     <select class="md-form colorful-select dropdown-primary FELDDBfields " id="FELD_EXLONTYP" name="FELD_EXLONTYP">
                  	    <option value="">--Select--</option>
  					    <option value="Home Loan">Home Loan</option>
  					    <option value="LAP">LAP</option>
  					    <option value="Auto Loan">Auto Loan</option>
  					    <option value="Personal Loan">Personal Loan</option>
  					    <option value="Gold Loan">Gold Loan</option>
  					    <option value="Business Loan">Business Loan</option>
  					    <option value="Term Loan">Term Loan</option>
  					    <option value="Consumer Loan">Consumer Loan</option>
  					    <option value="Auto Loan Refinance">Auto Loan Refinance</option>
  					    <option value="Education loan">Education loan</option>
						<option value="Commercial vehicle loan">Commercial vehicle loan</option>
						<option value="Two Wheeler loan">Two Wheeler loan</option>
						<option value="Machinery loan">Machinery loan</option>
						<option value="OverDraft/cash credit ">OverDraft/cash credit </option>
						<option value="Others">Others</option>
				     </select>
                     <label class="mdb-main-label BTxt9" >Existing Loan Type<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="col-md-4">
                   <div class="md-form">
                      <input type="text" id="FELD_LONAMT" name="FELD_LONAMT" maxlength="30" class="form-control IsCURCommaFields IsGreaterThoundsFld IsNumberFields NoSpecialChar  FELDDBfields ">
                      <label for="FELD_LONAMT" class="">Loan Amount &#x20b9;<span class="MndtryAstr"></span></label>
                   </div>
                </div>
           </div>
           <div class="form-row">
                <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="FELD_ROI" maxlength="5" data-field="FELD_ROI|ROI|Yes" name="FELD_ROI" class="form-control  IsPercentageFld IsNumberFields NoSpecialChar  FELDDBfields">
                     <label for="FELD_ROI" class="">ROI (In %)<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="FELD_EMIAMT" maxlength="30"  name="FELD_EMIAMT"   class=" form-control IsCURCommaFields IsGreaterThoundsFld IsNumberFields NoSpecialChar  FELDDBfields">
                     <label for="FELD_EMIAMT" class="">EMI Amount &#x20b9;<span class="MndtryAstr"></span></label>
                   </div>
                </div>
               <!-- <div class="col-md-4">
                   <div class="md-form">
                      <input type="text" id="FELD_EMIBNKACCT" maxlength="20"  name="FELD_EMIBNKACCT" class="form-control IsNumberFields NoSpecialChar  FELDDBfields FELDMndtry">
                      <label for="FELD_EMIBNKACCT" class="">EMI Debit Bank Account<span class="MndtryAstr">*</span></label>
                   </div>
                </div>-->
				<div class="col-md-4">
                 <div class="md-form">
                   <select class="md-form colorful-select dropdown-primary  FELDDBfields " id="FELD_EMIBNKACCT" name="FELD_EMIBNKACCT">
                   </select>
                 <label class="mdb-main-label BTxt9">EMI Debit Bank Account<span class="MndtryAstr"></span></label>
               </div>
               </div>
           </div>
           <div class="form-row">
                <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="FELD_POS" maxlength="30"  name="FELD_POS"    class="form-control  IsNumberFields IsGreaterzeroFld NoSpecialChar IsCURCommaFields FELDDBfields">
                     <label for="FELD_POS" class="">POS &#x20b9;<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="FELD_LONTENURE" maxlength="4" name="FELD_LONTENURE" class="form-control IsNumberFields NoSpecialChar IsGreaterzeroFld  FELDDBfields">
                     <label for="FELD_LONTENURE" class="">Loan Tenure (In Months)<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="col-md-4">
                   <div class="md-form">
                      <input type="text" id="FELD_EMIBEGNDAT" maxlength="10"  name="FELD_EMIBEGNDAT" onblur="CALCULATEMOB('FELD_EMIBEGNDAT'+$(this).closest('.DYNROW').attr('data-row'),'FELD_MOB'+$(this).closest('.DYNROW').attr('data-row'),'FELD_LONSTATUS'+$(this).closest('.DYNROW').attr('data-row'),'FELD_CLOSEDATE'+$(this).closest('.DYNROW').attr('data-row'));"
                      class="form-control ISFutureDateFields IsNumberFields NoSpecialChar  ISDatefield FELDDBfields ">
                      <label for="FELD_EMIBEGNDAT" class="">EMI Beginning Date<span class="MndtryAstr"></span></label>
                      <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                   </div>
                </div>
           </div>
           <div class="form-row">
                <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="FELD_MOB" maxlength="5" disabled name="FELD_MOB" class="form-control IsNumberFields NoSpecialChar  FELDDBfields">
                     <label for="FELD_MOB" class="">MOB<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="FELD_NUMOFBOUNCE" maxlength="4" name="FELD_NUMOFBOUNCE"  onblur="CHKNOBOUNCE();" class="form-control IsNumberFields  NoSpecialChar  FELDDBfields">
                     <label for="FELD_NUMOFBOUNCE" class="">Number of Bounces<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="col-md-2">
                   <div class="md-form">
                   	  <select class="md-form colorful-select dropdown-primary FELDDBfields BONMNTRY" id="FELD_LSTMONBOUNCED" onchange="ChangeMonth('FELD_LSTMONBOUNCED'+$(this).closest('.DYNROW').attr('data-row'),'FELD_LSTMONYRBOUNCED'+$(this).closest('.DYNROW').attr('data-row'));CHECKBOUNCEDDT('FELD_LSTMONBOUNCED'+$(this).closest('.DYNROW').attr('data-row'),'FELD_LSTMONYRBOUNCED'+$(this).closest('.DYNROW').attr('data-row'),'FELD_EMIBEGNDAT'+$(this).closest('.DYNROW').attr('data-row'));" name="FELD_LSTMONBOUNCED">
                  	    <option value="">--Select--</option>
  					    <option value="January">January</option>
  					    <option value="February">February</option>
  					    <option value="March">March</option>
  					    <option value="April">April</option>
  					    <option value="May">May</option>
  					    <option value="June">June</option>
  					    <option value="July">July</option>
  					    <option value="August">August</option>
  					    <option value="September">September</option>
  					    <option value="October">October</option>
  					    <option value="November">November</option>
  					    <option value="December">December</option>
				     </select>
                      <!-- <input type="text" id="" maxlength="10"  name="FELD_LSTMONBOUNCED" class="form-control ISPastDateFields IsNumberFields NoSpecialChar ISDatefield FELDDBfields"> -->
                      <label class="mdb-main-label BTxt9">Last Month Bounced<span class="MndtryAstr"></span></label>
                      <!-- <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/> -->
                   </div>
                </div>
                <div class="col-md-2">
                	<div class="md-form">
                   	  <select class="md-form colorful-select dropdown-primary FELDDBfields BONYEARS   BONMNTRY" onchange= "ChangeMonth('FELD_LSTMONBOUNCED'+$(this).closest('.DYNROW').attr('data-row'),'FELD_LSTMONYRBOUNCED'+$(this).closest('.DYNROW').attr('data-row'));CHECKBOUNCEDDT('FELD_LSTMONBOUNCED'+$(this).closest('.DYNROW').attr('data-row'),'FELD_LSTMONYRBOUNCED'+$(this).closest('.DYNROW').attr('data-row'),'FELD_EMIBEGNDAT'+$(this).closest('.DYNROW').attr('data-row')); CACLYEAR('FELD_EMIBEGNDAT','FELD_LSTMONYRBOUNCED');"  id="FELD_LSTMONYRBOUNCED" name="FELD_LSTMONYRBOUNCED">
                      </select>
                      <!-- <input type="text" id="" maxlength="10"  name="FELD_LSTMONBOUNCED" class="form-control ISPastDateFields IsNumberFields NoSpecialChar ISDatefield FELDDBfields"> -->
                      <!-- <label for="FELD_LSTMONBOUNCED" class="">Last Month Bounced<span class="MndtryAstr"></span></label> -->
                      <!-- <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/> -->
                   </div>
                </div>
           </div>
           <div class="form-row">
                <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="FELD_DPD" maxlength="4"   name="FELD_DPD" class="form-control IsNumberFields NoSpecialChar  FELDDBfields">
                     <label for="FELD_DPD" class="">No. of times in DPD<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="col-md-4">
                   <div class="md-form">
                    <select class="md-form colorful-select dropdown-primary FELDDBfields "  onchange="CHKLOANSTATUS();CALCULATEMOB('FELD_EMIBEGNDAT'+$(this).closest('.DYNROW').attr('data-row'),'FELD_MOB'+$(this).closest('.DYNROW').attr('data-row'),'FELD_LONSTATUS'+$(this).closest('.DYNROW').attr('data-row'),'FELD_CLOSEDATE'+$(this).closest('.DYNROW').attr('data-row'));"  id="FELD_LONSTATUS" name="FELD_LONSTATUS">
                  	    <option value="">--Select--</option>
  					    <option value="Active">Active</option>
  					    <option value="Closed">Closed</option>
  					    <option value="Duplicate">Duplicate</option>
				     </select>
                     <label  class="mdb-main-label BTxt9" >Status of Loan<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="col-md-4">
                   <div class="md-form">
                      <select class="md-form colorful-select dropdown-primary FELDDBfields " id="FELD_LONTYP" name="FELD_LONTYP">
                  	    <option value="">--Select--</option>
  					    <option value="Joint">Joint</option>
  					     <option value="Sole">Sole</option>
				      </select>
                      <label class="mdb-main-label BTxt9" >Loan Type<span class="MndtryAstr"></span></label>
                   </div>
                </div>
           </div>
		   
		        <div class="form-row LONACT">
                <div class="col-md-4">
                   <div class="md-form">
                      <input type="text" id="FELD_CLOSEDATE" maxlength="10"  name="FELD_CLOSEDATE" onblur="CALCULATEMOB('FELD_EMIBEGNDAT'+$(this).closest('.DYNROW').attr('data-row'),'FELD_MOB'+$(this).closest('.DYNROW').attr('data-row'),'FELD_LONSTATUS'+$(this).closest('.DYNROW').attr('data-row'),'FELD_CLOSEDATE'+$(this).closest('.DYNROW').attr('data-row'));"
                      class="form-control ISFutureDateFields IsNumberFields NoSpecialChar LONACTMND ISDatefield FELDDBfields ">
                      <label for="FELD_CLOSEDATE" class="">Closed date<span class="MndtryAstr">*</span></label>
                      <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                   </div>
                </div>
                 <div class="col-md-4">
                 <div class="md-form">
                    <div class="select-radio LONACTMND"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input FELDDBfields" value="Yes" id="MULTIYES" name="FELD_MULTIPLIER">
                          <label class="custom-control-label" for="MULTIYES">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input FELDDBfields" value="No" id="MULTINO" name="FELD_MULTIPLIER">
                           <label class="custom-control-label" for="MULTINO">No</label>
                       </div>

                   </div>
                   <label class="mdb-main-label BTxt9">Consider for Multiplier<span class="MndtryAstr">*</span></label>      
               </div>
               </div>
           </div>
		   <form>
		    <div class="form-row">
                <div class="col-md-4">
                     <div class="md-form">
                    <div id="gstRAD" class="select-radio FELDMndtry	"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input   FELDDBfields"  value="Yes" id="RTRYes" name="FELD_RTRAVAILB">
                          <label class="custom-control-label" for="RTRYes">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input  FELDDBfields"  value="No" id="RTRNo" name="FELD_RTRAVAILB">
                           <label class="custom-control-label" for="RTRNo">No</label>
                       </div>
                   </div>
                   <label class="mdb-main-label BTxt9">RTR Availability<span class="MndtryAstr">*</span></label>      
               </div>
                </div>
          
           </div>
		   </form>
		   
		   

		   
           </br>
             <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save1" data-aria="LSW_TFINANCEXISTDETL|FELD|FELD_EXLONNO" data-form="PersonalInfo" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TFINANCEXISTDETL|FELD|FELD_EXLONNO" data-form="PersonalInfo" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave NXTBTNF">Next</button> 
                </div>
            </div>
        </form>
       </div>
     </div>
   </div>
 </div>
 </div>
 </div>
  <!-- Accordion card -->

 </div>
  <!-- Accordion card -->
</div>
<!-- Accordion wrapper -->
<!-- END -->
 </div>
 <script type="text/javascript" src="ThemeproLO/Financials/Script/ExstLon/LoadSubmit.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/Financials/Script/ExstLon/Validation.js${DMY13}"></script> 
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
          