</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
      <div class="row">
         <div class="col-lg-12">
            <ul title="Bank" data-aria="LSW_TLANDHOLDING|LDHL|" data-popup="No"  class="nav FormPageMultiTab">
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
      </br>
      <!-- card -->
 <div class="HyperControls form-row FltRight" > 
			      <a onclick="AddPageMultiData_Onscreen('',$('#LDHL_PRCSID').val(),'','LANDHOLDING','LDHLDBfields')" class="Btxt4 FltRight ADDBTN"  href="#">+ Add</a>
			<!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
			      </div>
      <div class="card CardNS">
         <div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
            <div class="card active">
               <!-- Card header -->
               <div class="card-header Btxt7 active" role="tab" id="heading1">
                  <a class="collapsed Btxt8 AFormaccordion" data-toggle="collapse" data-load="Yes" data-aria="LSW_TLANDHOLDING|LDHL|LDHL_LNDUNIQNO" data-parent="#accordionEx" href="#collapse1"
                     aria-expanded="true" aria-controls="collapse1">
                  Land Holding Details <i class="fa fa-plus-circle rotate-icon"></i>
                  </a>
               </div>
               <!-- Card body -->
               <div id="collapse1" class="collapse show" role="tabpanel" aria-labelledby="heading1" data-parent="#accordionEx">
               <button type="button" style="display:none" class="btn CollectedPage  waves-effect btn-yelInplain btn-sm BTNVerify">CollectedPage</button>
                  <div data-for="LANDHOLDING" class="LANDHOLDING"> 
                  
                  </div>
                  <div class="DynamicPageGrid" data-val="PROPTXTHDR|Land" id="LANDHOLDING" style="display:none">
                     <div data-row="" class="card-body px-lg-5 pt-0 BSbrd DYNROW">
                        </br>
                     <form>
                        <input type="text" id="LDHL_PRCSID" hidden="hidden" name="LDHL_PRCSID" value="PRCSID" class="form-control LDHLDBfields">
                        <input type="text" id="LDHL_ACTIVITYID" hidden="hidden" name="LDHL_ACTIVITYID" class="form-control LDHLDBfields">
                        <input type="text" id="LDHL_DTCREATED" hidden="hidden" name="LDHL_DTCREATED" class="form-control LDHLDBfields">
                        <input type="text" id="LDHL_CREATEDBY" hidden="hidden" name="LDHL_CREATEDBY" class="form-control LDHLDBfields">
                        <input type="text" id="LDHL_DTMODIFIED" hidden="hidden" name="LDHL_DTMODIFIED" class="form-control LDHLDBfields">
                        <input type="text" id="LDHL_MODIFIEDBY" hidden="hidden" name="LDHL_MODIFIEDBY" class="form-control LDHLDBfields">
                        <input type="text" id="LDHL_LNDUNIQNO" hidden="hidden" name="LDHL_LNDUNIQNO" class="form-control LDHLDBfields">
                        
						
                        <!-- </br>
                           <div class="form-row">
                           	<div class="col Btxt3"></div>
                           </div> -->
                        </br>
                        <div class="form-row">
                         <div class="col-md-5">
                           <div id="PROPTXTHDR" class="col Btxt10"></div> 
                         </div>
                         
                         <!--<div>
                            <div class="col-md-7" style="display:none">
                           <button type="button" style="width: 250px; height: 24px;" class="FltRight btn btn-Verify CADI_EMAILID waves-effect btn-yelInplain btn-sm BTNVerify">Send Link for Bank Statements</button>
                            </div></div>-->
                        </div>
                        <div class="form-row">
                            <div class="col ">
                                   <div class="FltRight DELBTNTXT">
                                     Delete Land Holding Details
                                 <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="LDHL_PRCSID|LDHL_LNDUNIQNO|LANDHOLDING" class="DELBTN DELETEBNKDET"/>
                              </div>    
                           </div>     
                          </div>
                        </br>
                        <div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 
                                 <input type="text" maxlength="25" id="LDHL_OWNRNAME" name="LDHL_OWNRNAME" class="form-control NoSpecialChar LDHLMndtry LDHLDBfields">
                                 <label for="LDHL_OWNRNAME" class="">Owner Name <span class="MndtryAstr">*</span></label>
                                  
                              </div>
                           </div>
                           <div class="col">
                           </div>
                        </div>
						<div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 
                                 <input type="text" maxlength="25" id="LDHL_SURVEYNUM" name="LDHL_SURVEYNUM" class="form-control NoSpecialChar LDHLMndtry LDHLDBfields">
                                 <label for="LDHL_SURVEYNUM" class="">Survey Number <span class="MndtryAstr">*</span></label>
                                  
                              </div>
                           </div>
                           <div class="col">
                           </div>
                        </div>
						<div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 
                                 <input type="text" maxlength="25" id="LDHL_LNDACRES" name="LDHL_LNDACRES" class="form-control NoSpecialChar LDHLMndtry LDHLDBfields">
                                 <label for="LDHL_LNDACRES" class="">Land in Acres <span class="MndtryAstr">*</span></label>
                                  
                              </div>
                           </div>
                           <div class="col">
                           </div>
                        </div>
						
                        <div class="form-row">
                           <div class="col d-flex justify-content-center">
						   <!--<button type="button" id="CompleteTrans" data-aria="LSW_TLANDHOLDING|LDHL|LDHL_LNDUNIQNO" style="height:2rem;width:15rem" onclick="ManualStatementCompTrans(this)" class="btn btn-Syeloutline waves-effect waves-light Save  FormSave">Complete Transaction</button>-->
                              <button type="button" id="Save" data-aria="LSW_TLANDHOLDING|LDHL|LDHL_LNDUNIQNO"  class="btn btn-Syeloutline waves-effect waves-light Save  FormSave">Save</button>   
                              <button type="button" data-aria="LSW_TLANDHOLDING|LDHL|LDHL_LNDUNIQNO" data-card="0" class="btn btn-Syel waves-effect waves-light Formnxt FormSave">Save & Next</button> 
                           </div>
                        </div>
                     </form>
                     </div>
                  </div>
				  
				 <!-- <div class="form-row GenApplForm1" style="display:none">
                                  <span class="HyperControls FltRight">
		                             <a onclick="GentrateApplicform();" class="Btxt4 FltRight" href="#">Application Form.pdf</a>
		                         </span>
			                     <span class="HyperControls FltRight">
		                             <a onclick="GentrateEndUse();" class="Btxt4 FltRight" href="#">End Use.pdf</a>
		                        </span>
                     </div>
				  
				  <div  class="APPSHOW1">
				        <div class="form-row">
                           <div class="col d-flex justify-content-center">
                             <button type="button" data-aria="LSW_TLONBANKDTLS|BKDT|BKDT_BNKNO" data-card="0" class="btn btn-Syel waves-effect waves-light BTNHIDE SNDCRD">Send to Credit</button> 
                             <button type="button" style="display:none;" id="Reject" data-aria="LSW_TUPLOADDOCUMENT|UPDC|UPDC_CUSID" data-card="0" class="btn btn-Syel BTNHIDE  Rejct waves-effect BTNDOCMVL waves-light">Reject</button> 
						     <button type="button" style="display:none;" id="ApplForm" onclick="GentrateApplicform()" data-form="CAM" data-card="0" class="btn btn-Syel waves-effect BTNHIDE waves-light ApplForm ">Application form</button> 		 
		                      <button type="button" style="display:none;" id="EndUse" onclick="GentrateEndUse()" data-form="CAM" data-card="0" class="btn btn-Syel waves-effect BTNHIDE waves-light ApplForm" >End Use</button> 
		                       
						   </div>
                        </div>
				  </div>  -->
               </div>
            </div>
         </div>
      </div>
      <!-- card -->
   </div>
</div>
<!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/LoanProperty/Script/LandHolding/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/LoanProperty/Script/LandHolding/Validation.js${DMY13}"></script>                            


