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
        <input type="text" id="FELD_RTRDETAILS"  name="FELD_RTRDETAILS" hidden="hidden"  class="form-control FELDDBfields " value="">
        
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
		     <div class="col-md-6">
		        <div class="md-form">
				  <div class="custom-control custom-radio custom-control-inline ">
                   <input type="checkbox" class="custom-control-input FELDDBfields" onclick="CheckInsitute('FELD_OURINS'+$(this).closest('.DYNROW').attr('data-row'),'FELD_INSINAME'+$(this).closest('.DYNROW').attr('data-row'));" id="FELD_OURINS" name="FELD_OURINS" title="">
                   <label class="custom-control-label" for="FELD_OURINS">Our Insitution<span class="MndtryAstr"></span></label>
                 </div>
			   </div>
		     </div>
		     <div class="col-md-6 ManualRpt" > 
                <div class="md-form">
                  <div class="HyperControls"> 
                     <a type="button" class="Btxt4 FltLeft RTRDetl FELDDBfields" data-toggle="modal" name="RTR" data-target="#RTR" href="#">RTR</a>
                  </div>
                </div>
            </div>
		   </div>
           <div class="form-row">
                <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="FELD_INSINAME"  maxlength="25" name="FELD_INSINAME" class="form-control IsAlphaFields  FELDDBfields FELDMndtry">
                     <label for="FELD_INSINAME" class="">Name of Institution<span class="MndtryAstr">*</span></label>
                   </div>
                </div>
                <div class="col-md-4">
                   <div class="md-form">
                     <select class="md-form colorful-select dropdown-primary FELDDBfields FELDMndtry" id="FELD_EXLONTYP" name="FELD_EXLONTYP">
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
                     <label class="mdb-main-label BTxt9" >Existing Loan Type<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                   <div class="md-form">
                      <input type="text" id="FELD_LONAMT" name="FELD_LONAMT" maxlength="30" class="form-control IsCURCommaFields IsGreaterThoundsFld IsNumberFields NoSpecialChar  FELDDBfields FELDMndtry">
                      <label for="FELD_LONAMT" class="">Loan Amount &#x20b9;<span class="MndtryAstr">*</span></label>
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
                     <input type="text" id="FELD_EMIAMT" maxlength="30"  name="FELD_EMIAMT"   class="FELDMndtry form-control IsCURCommaFields  IsGreaterThoundsFld IsNumberFields NoSpecialChar  FELDDBfields">
                     <label for="FELD_EMIAMT" class="">EMI Amount &#x20b9;<span class="MndtryAstr">*</span></label>
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
                   <select class="md-form colorful-select dropdown-primary  FELDDBfields FELDMndtry" id="FELD_EMIBNKACCT" name="FELD_EMIBNKACCT">
                   </select>
                 <label class="mdb-main-label BTxt9">EMI Debit Bank Account<span class="MndtryAstr">*</span></label>
               </div>
               </div>
           </div>
           <div class="form-row">
                <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="FELD_POS" maxlength="30"  name="FELD_POS"    class="form-control IsNumberFields IsGreaterzeroFld NoSpecialChar IsCURCommaFields FELDDBfields">
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
                   	  <select class="md-form colorful-select dropdown-primary FELDDBfields BONYEARS  BONMNTRY" onchange="ChangeMonth('FELD_LSTMONBOUNCED'+$(this).closest('.DYNROW').attr('data-row'),'FELD_LSTMONYRBOUNCED'+$(this).closest('.DYNROW').attr('data-row'));CHECKBOUNCEDDT('FELD_LSTMONBOUNCED'+$(this).closest('.DYNROW').attr('data-row'),'FELD_LSTMONYRBOUNCED'+$(this).closest('.DYNROW').attr('data-row'),'FELD_EMIBEGNDAT'+$(this).closest('.DYNROW').attr('data-row'));" id="FELD_LSTMONYRBOUNCED" name="FELD_LSTMONYRBOUNCED">
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
                    <select class="md-form colorful-select dropdown-primary FELDDBfields FELDMndtry"  onchange="CHKLOANSTATUS();CALCULATEMOB('FELD_EMIBEGNDAT'+$(this).closest('.DYNROW').attr('data-row'),'FELD_MOB'+$(this).closest('.DYNROW').attr('data-row'),'FELD_LONSTATUS'+$(this).closest('.DYNROW').attr('data-row'),'FELD_CLOSEDATE'+$(this).closest('.DYNROW').attr('data-row'));"  id="FELD_LONSTATUS" name="FELD_LONSTATUS">
                  	    <option value="">--Select--</option>
  					    <option value="Active">Active</option>
  					    <option value="Closed">Closed</option>
  					    <option value="Duplicate">Duplicate</option>
				     </select>
                     <label  class="mdb-main-label BTxt9" >Status of Loan<span class="MndtryAstr">*</span></label>
                   </div>
                </div>
                <div class="col-md-4">
                   <div class="md-form">
                      <select class="md-form colorful-select dropdown-primary FELDDBfields FELDMndtry" id="FELD_LONTYP" name="FELD_LONTYP">
                  	    <option value="">--Select--</option>
  					    <option value="Joint">Joint</option>
  					     <option value="Sole">Sole</option>
				      </select>
                      <label class="mdb-main-label BTxt9" >Loan Type<span class="MndtryAstr">*</span></label>
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
		   
		   
		   
		   
<a type="button" id="Popup" class="btn btn-floating btn-large red FELDDBfields" style="display:none" name="RTR" data-toggle="modal" data-target="#RTR">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade FELDDBfields" id="RTR" data-info="ModalWindow" name="RTRModal" tabindex="-1" role="dialog" aria-labelledby="RTRLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1250px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10"></div> 
   <a href="#"><img id="RTRCLOSE" class="close RTRClose" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form>
         <div class="form-row">
		    <div class="Btxt8"> 
			    RTR Details
			</div>
         </div>
		<input type="text" id="ERTR_PRCSID"  name="ERTR_PRCSID" hidden="hidden" class="form-control FELDDBfields ERTRDBfields" value="" >
        <input type="text" id="ERTR_ACTIVITYID"  name="ERTR_ACTIVITYID" hidden="hidden"  class="form-control FELDDBfields ERTRDBfields" value="">
        <input type="text" id="ERTR_CREATEDBY"  name="ERTR_CREATEDBY" hidden="hidden"  class="form-control FELDDBfields ERTRDBfields" value="">
        <input type="text" id="ERTR_DTCREATED"  name="ERTR_DTCREATED" hidden="hidden"  class="form-control FELDDBfields ERTRDBfields" value="">
        <input type="text" id="ERTR_MODIFIEDBY"  name="ERTR_MODIFIEDBY" hidden="hidden"  class="form-control FELDDBfields ERTRDBfields" value="">
        <input type="text" id="ERTR_DTMODIFIED"  name="ERTR_DTMODIFIED" hidden="hidden"  class="form-control FELDDBfields ERTRDBfields" value="">
       
		<input type="text" id="ERTR_CUSID"  name="ERTR_CUSID" hidden="hidden"  class="form-control FELDDBfields ERTRDBfields" value="">
        <input type="text" id="ERTR_EXISLONNO"  name="ERTR_EXISLONNO" hidden="hidden"  class="form-control FELDDBfields ERTRDBfields" value="">
		<input type="text" id="PAGETYPE"  name="PAGETYPE" hidden="hidden"  class="form-control FELDDBfields" value="Load">
		 <!-- -->
		 <div class="form-row">
		      <div class="col-md-4">
                <div class="md-form">
                  <input type="text" id="ERTR_CLINTNAME"  disabled maxlength="30"   class="form-control ERTRDBfields FELDDBfields NoSpecialChar ERTRMndtry" name="ERTR_CLINTNAME">
                  <label for="ERTR_CLINTNAME" class="">Name of the Client <span class="MndtryAstr">*</span></label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="ERTR_FINNAME" name="ERTR_FINNAME" maxlength="30" class="form-control  NoSpecialChar  ERTRMndtry ERTRDBfields FELDDBfields">
                   <label for="ERTR_FINNAME" class="">Name of the Financier<span class="MndtryAstr">*</span></label>
                </div>
              </div>
			  <div class="col-md-4">
                <div class="md-form">
                  <input type="text" id="ERTR_ASSETFIN"  maxlength="30"   class="form-control FELDDBfields NoSpecialChar ERTRDBfields ERTRMndtry" name="ERTR_ASSETFIN">
                  <label for="ERTR_ASSETFIN" class="">Asset Financed <span class="MndtryAstr">*</span></label>
                </div>
             </div>
		  </div>
		 <div class="form-row">
		     <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="ERTR_REPYMODE" name="ERTR_REPYMODE" maxlength="30" class="form-control  NoSpecialChar  ERTRMndtry ERTRDBfields FELDDBfields">
                    <label for="ERTR_REPYMODE" class="">Repayment Mode<span class="MndtryAstr">*</span></label>
                </div>
             </div>
		      <div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="ERTR_VECLENO"  maxlength="30"   class="form-control ERTRDBfields NoSpecialChar ERTRMndtry FELDDBfields" name="ERTR_VECLENO">
                   <label for="ERTR_VECLENO" class="">Vehicle No<span class="MndtryAstr">*</span></label>
                 </div>
              </div>
              <div class="col-md-4">
                 <div class="md-form">
                   <input type="text" id="ERTR_TYPEFIN" name="ERTR_TYPEFIN" maxlength="30"    class="form-control  NoSpecialChar  ERTRMndtry ERTRDBfields FELDDBfields">
                   <label for="ERTR_TYPEFIN" class="">Type of Finance<span class="MndtryAstr">*</span></label>
                 </div>
             </div>
		</div>
		<div class="form-row">
		    <div class="col-md-4">
               <div class="md-form">
                 <input type="text" id="ERTR_TOTEMI"  maxlength="5" onchange="Subemi($(this).closest('.DYNROW').attr('data-row'))" class="form-control ERTRDBfields NoSpecialChar ERTRMndtry FELDDBfields IsNumberFields" name="ERTR_TOTEMI">
                 <label for="ERTR_TOTEMI" class="">Total no. of EMI's<span class="MndtryAstr">*</span></label>
               </div>
            </div>
            <div class="col-md-4">
               <div class="md-form">
                  <input type="text" id="ERTR_PAIDDUE" name="ERTR_PAIDDUE" maxlength="30" onchange="Subemi($(this).closest('.DYNROW').attr('data-row'))"   class="form-control IsCURCommaFields NoSpecialChar  ERTRMndtry ERTRDBfields FELDDBfields">
                  <label for="ERTR_PAIDDUE" class="">Paid/Due<span class="MndtryAstr">*</span></label>
               </div>
            </div>
			<div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="ERTR_BALTENURE"  maxlength="5"   class="form-control ERTRDBfields NoSpecialChar ERTRMndtry FELDDBfields IsNumberFields" name="ERTR_BALTENURE">
                   <label for="ERTR_BALTENURE" class="">Balance Tenure<span class="MndtryAstr">*</span></label>
                </div>
            </div>
		</div>
		<div class="form-row">
		   <div class="col-md-4">
              <div class="md-form">
                    <input type="text" id="ERTR_TOTDELAY" name="ERTR_TOTDELAY" maxlength="30"    class="form-control IsCURCommaFields NoSpecialChar ERTRMndtry ERTRDBfields FELDDBfields IsNumberFields">
                    <label for="ERTR_TOTDELAY" class="">Total Delay<span class="MndtryAstr">*</span></label>
              </div>
           </div>
	        <div class="col-md-4">
               <div class="md-form">
                  <input type="text" id="ERTR_FINAMT"  maxlength="30"   class="form-control IsCURCommaFields ERTRDBfields NoSpecialChar ERTRMndtry FELDDBfields" name="ERTR_FINAMT">
                  <label for="ERTR_FINAMT" class="">Finance Amount<span class="MndtryAstr">*</span></label>
               </div>
             </div>
             <div class="col-md-4">
                 <div class="md-form">
                    <input type="text" id="ERTR_FINCHARGE" name="ERTR_FINCHARGE" maxlength="30"    class="form-control IsCURCommaFields NoSpecialChar FELDDBfields  ERTRMndtry ERTRDBfields">
                    <label for="ERTR_FINCHARGE" class="">Finance Charges<span class="MndtryAstr">*</span></label>
                 </div>
             </div>
		</div>
		<div class="form-row">
		    <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="ERTR_CONTRTVAL"  maxlength="30"   class="form-control IsCURCommaFields ERTRDBfields NoSpecialChar ERTRMndtry FELDDBfields" name="ERTR_CONTRTVAL">
                    <label for="ERTR_CONTRTVAL" class="">Contract Value<span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="ERTR_LOANNO" name="ERTR_LOANNO" maxlength="25"    class="form-control  NoSpecialChar  ERTRMndtry ERTRDBfields FELDDBfields">
                   <label for="ERTR_LOANNO" class="">Loan No.<span class="MndtryAstr">*</span></label>
                </div>
            </div>
			<div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="ERTR_LONSRTDT"  maxlength="30"   class="form-control ERTRDBfields NoSpecialChar ERTRMndtry FELDDBfields ISDatefield" name="ERTR_LONSRTDT">
                     <label for="ERTR_LONSRTDT" class="">Loan Start Date<span class="MndtryAstr">*</span></label>
					 <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
            </div>
		</div> 
		<div class="form-row">
		     <div class="col-md-4">
                  <div class="md-form">
                      <input type="text" id="ERTR_LONMATDT" name="ERTR_LONMATDT" maxlength="30"    class="form-control ISDatefield NoSpecialChar ERTRMndtry ERTRDBfields FELDDBfields">
                      <label for="ERTR_LONMATDT" class="">Loan Maturity Date<span class="MndtryAstr">*</span></label>
					  <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                   </div>
            </div>
		    <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="ERTR_PEAKDLY"  maxlength="30"   class="form-control  ERTRDBfields NoSpecialChar IsCURCommaFields ERTRMndtry FELDDBfields IsNumberFields" name="ERTR_PEAKDLY">
                    <label for="ERTR_PEAKDLY" class="">Peak Delay<span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                  <input type="text" id="ERTR_AVGDLY" name="ERTR_AVGDLY" maxlength="30"    class="form-control  NoSpecialChar IsCURCommaFields ERTRMndtry ERTRDBfields FELDDBfields IsNumberFields">
                  <label for="ERTR_AVGDLY" class="">Avg.Delay<span class="MndtryAstr">*</span></label>
                </div>
            </div>
		 </div>
		 <div class="form-row">
		    <div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="ERTR_TRACKSTS"  maxlength="30"   class="form-control  ERTRDBfields NoSpecialChar ERTRMndtry FELDDBfields" name="ERTR_TRACKSTS">
                   <label for="ERTR_TRACKSTS" class="">Track Status<span class="MndtryAstr">*</span></label>
                 </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                  <input type="text" id="ERTR_TOTAMT" name="ERTR_TOTAMT" maxlength="30"    class="form-control IsCURCommaFields NoSpecialChar  ERTRMndtry ERTRDBfields FELDDBfields">
                  <label for="ERTR_TOTAMT" class="">Total Amount<span class="MndtryAstr">*</span></label>
                 </div>
            </div>
		  </div>
		<!-- --> 
      <!-- <div class="form-row">
          <div class="col">
              <input type="button" data-button="GridButton" data-value="BALANCETable|LSW_SGETUCVBNTBALANCEGRID|PrcsID|FCBD_ACCTNUM|FCBD_BNKNO|11,12,13|BALANCEGRID"
			  style="display:none" class="DashTrg FCBDDBfields BalancGrdTrg  MultiGridTrg" id="BTNBALANCEGRD" name="BTNBALANCEGRD" />
              <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display FCBDDBfields DataGrid" name="BALANCETable" id="BALANCETable">
              </table>
          </div>
       </div> -->
	   			<table>
					 <tr>
					 <td>
					  <div id="EXCELUPLOAD"  class="file-field DDU FltRight ">
						<a class="">
						  <i class="fa imgAdd" aria-hidden=""></i>
						  <input type="file"  name="datafile" onchange="UploadData(EXCELUPLOAD,$(this).closest('.DYNROW').attr('data-row'))" class="EXCELUPLOAD"  >
						</a>
						<input type="text" id="EXCELUPLOAD" hidden="hidden" data-Validate="EXCELUPLOAD"   name="EXCELUPLOAD" class="form-control FELDDBfields File "/>
					  <span class="name Btxt4  FltRight ">Choose File
					  <img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-upd="" width="20" height="20">
					  </span> 
					  
					  </div> 
					 </td>
					  <!-- <div class="md-form DDV">
					<div class="md-form Formcol-mdLR">
					<div class="EXCELUPLOAD" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile(EXCELUPLOAD);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('PFDT_COLLATTACHMENT')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
					</div>
					</div>  --> 
					</tr>
					 <div class="HyperControls FltRight" > 
					<a class="Btxt4 ADDBTN FltRight" onclick="FormatEXCELDocDwnld()" href="#">
					<img src="ThemeproLO/Common/Images/download.png" class="GridDocUpd" title="Download" attr-upd="" width="20" height="20">
					Download Template
					</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					</div>

					</table>
					
		 <div class="form-row">
          <div class="col">
              <input type="button" data-button="GridButton" data-value="RTRTable|LSW_SRTRGRD|PrcsID|FELD_EXLONNO|PAGETYPE|6,7|RTRGRD"
			  style="display:none" class="DashTrg FELDDBfields BalancGrdTrg  MultiGridTrg" id="BTNBALANCEGRD" name="BTNBALANCEGRD" />
              <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display FELDDBfields DataGrid" name="RTRTable" id="RTRTable">
              </table>
          </div>
       </div>
		<!--  <div class="form-row">
          <div class="col">
              <input type="button" data-button="GridButton" data-value="RTRTable|LSW_SRTRGRD|PrcsID|FELD_CUSID|FELD_EXLONNO|6|RTRGRD"
			  style="display:none" class="DashTrg  FELDDBfields BalancGrdTrg  MultiGridTrg" id="BTNRTRGRD" name="BTNRTRGRD" />
              <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display FELDDBfields DataGrid" name="RTRTable" id="RTRTable">
              </table>
          </div>
       </div>-->

     <!--  <div class="form-row">
              <div class="col-md-10 BluShd"> 
                   <label for="" class="Btxt10">Average Monthly Balance &#8377;<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="FCBD_AVG" disabled name="FCBD_AVG" value="0" class="form-control DSVLBL Btxt04 IsCURCommaFields  IsNumberFields NoSpecialChar  FELDDBfields">
              </div>
         </div>  -->
         </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="RTRSmt" data-aria="LSW_TEXISTLONRTR|ERTR|ERTR_EXISLONNO" class="btn btn-yel FELDDBfields Btxt2 RTRSub">Submit</button>
      </div>
    </div>
  </div>
  </div>
		   
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
 <script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/ExstLon/LoadSubmit.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/ExstLon/Validation.js${DMY13}"></script> 
 
  <table style="display:none" id="GridRTRTable">
   <thead>
<th>RTRG_Installno</th>
<th>RTRG_Installamt</th>
<th>RTRG_Duedate</th>
<th>RTRG_Amountpaid</th>
<th>RTRG_PaymentDate</th>
<th>RTRG_DelayDays</th>
<th>RTRG_CUSID</th>
<th>RTRG_UNIQUEID</th>

<!--<th>BUBM_PRCSID</th>
<th>BUBM_ACTIVITYID</th>
<th>BUBM_CREATEDBY</th>
<th>BUBM_DTCREATED</th>
<th>BUBM_MODIFIEDBY</th>
<th>BUBM_DTMODIFIED</th>-->
   </thead> 
    </table>
	
	<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>      
	

          