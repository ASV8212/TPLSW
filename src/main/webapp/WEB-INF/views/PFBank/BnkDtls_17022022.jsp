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
            <ul title="Bank" data-aria="LSW_TLONBANKDTLS|BKDT|" data-popup="No"  class="nav FormPageMultiTab">
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
			      <a onclick="AddPageMultiData('',$('#BKDT_PRCSID').val(),'','BankDetail1','BKDTDBfields')" class="Btxt4 FltRight ADDBTN"  href="#">+ Add Account</a>
			<!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
			      </div>
      <div class="card CardNS">
         <div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
            <div class="card active">
               <!-- Card header -->
               <div class="card-header Btxt7 active" role="tab" id="heading1">
                  <a class="collapsed Btxt8 AFormaccordion" data-toggle="collapse" data-load="Yes" data-aria="LSW_TLONBANKDTLS|BKDT|BKDT_BNKNO" data-parent="#accordionEx" href="#collapse1"
                     aria-expanded="true" aria-controls="collapse1">
                  Bank Details <i class="fa fa-plus-circle rotate-icon"></i>
                  </a>
               </div>
               <!-- Card body -->
               <div id="collapse1" class="collapse show" role="tabpanel" aria-labelledby="heading1" data-parent="#accordionEx">
               
                  <div data-for="BankDetail1" class="BankDetail1"> 
                  
                  </div>
                  <div class="DynamicPageGrid" data-val="PROPTXTHDR|Account" id="BankDetail1" style="display:none">
                     <div data-row="" class="card-body px-lg-5 pt-0 BSbrd DYNROW">
                        </br>
                     <form>
                        <input type="text" id="BKDT_PRCSID" hidden="hidden" name="BKDT_PRCSID" value="PRCSID" class="form-control BKDTDBfields">
                        <input type="text" id="BKDT_ACTIVITYID" hidden="hidden" name="BKDT_ACTIVITYID" class="form-control BKDTDBfields">
                        <input type="text" id="BKDT_DTCREATED" hidden="hidden" name="BKDT_DTCREATED" class="form-control BKDTDBfields">
                        <input type="text" id="BKDT_CREATEDBY" hidden="hidden" name="BKDT_CREATEDBY" class="form-control BKDTDBfields">
                        <input type="text" id="BKDT_DTMODIFIED" hidden="hidden" name="BKDT_DTMODIFIED" class="form-control BKDTDBfields">
                        <input type="text" id="BKDT_MODIFIEDBY" hidden="hidden" name="BKDT_MODIFIEDBY" class="form-control BKDTDBfields">
                        <input type="text" id="BKDT_BNKNO" hidden="hidden" name="BKDT_BNKNO" class="form-control BKDTDBfields">
                        <input type="text" id="BKDT_CUSID" hidden="hidden" name="BKDT_CUSID" value="CGSD" class="form-control BKDTDBfields">
                        <input type="text" id="BKDT_BNKREFNAME" hidden="hidden" name="BKDT_BNKREFNAME" class="form-control BKDTDBfields">
                        <!-- </br>
                           <div class="form-row">
                           	<div class="col Btxt3"></div>
                           </div> -->
                        </br>
                        <div class="form-row">
                         <div class="col-md-5">
                           <div id="PROPTXTHDR" class="col Btxt10"></div> 
                         </div>
                         
                         <div>
                            <div class="col-md-7" style="display:none">
                           <button type="button" style="width: 250px; height: 24px;" class="FltRight btn btn-Verify CADI_EMAILID waves-effect btn-yelInplain btn-sm BTNVerify">Send Link for Bank Statements</button>
                            </div></div>
                        </div>
                        <div class="form-row">
                            <div class="col ">
                                   <div class="FltRight DELBTNTXT">
                                     Delete Bank Details
                                 <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="BKDT_PRCSID|BKDT_BNKNO|BANKDETAILS" class="DELBTN DELETEBNKDET"/>
                              </div>    
                           </div>     
                          </div>
                        </br>
                        <div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 <div class="select-radio BKDTMndtry">
                                    <div class="custom-control custom-radio custom-control-inline">
                                       <input type="radio" class="custom-control-input PrimAcct BKDTDBfields" onclick="CheckPrimAcct($(this).closest('.DYNROW')[0],this.id,'Page');" value="Yes" id="PriYes" name="BKDT_PRIMARYACCT">
                                       <label class="custom-control-label" for="PriYes">Yes</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                       <input type="radio" class="custom-control-input PrimAcct BKDTDBfields" onclick="CheckPrimAcct($(this).closest('.DYNROW')[0],this.id,'Page');" value="No" id="PriNo" name="BKDT_PRIMARYACCT">
                                       <label class="custom-control-label" for="PriNo">No</label>
                                    </div>
                                    <input type="text" id="BKDT_PRIMARYACCT" hidden="hidden" name="BKDT_PRIMARYACCT" class="form-control IsNumberFields BKDTDBfields">
                                 </div>
                                 <label class="mdb-main-label BTxt9">Primary Account *</label>      
                              </div>
                           </div>
                           <div class="col">
                           </div>
                        </div>
                        <div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 <div class="select-radio BKDTMndtry">
                                    <div class="custom-control custom-radio custom-control-inline">
                                       <input type="radio" class="custom-control-input BKDTDBfields" onclick="ChequeAvailable($(this).closest('.DYNROW')[0],this.id);" value="Yes" id="ChqYes" name="BKDT_CHEQAVAILABLE">
                                       <label class="custom-control-label" for="ChqYes">Yes</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                       <input type="radio" class="custom-control-input BKDTDBfields" onclick="ChequeAvailable($(this).closest('.DYNROW')[0],this.id);" value="No" id="ChqNo" name="BKDT_CHEQAVAILABLE">
                                       <label class="custom-control-label" for="ChqNo">No</label>
                                    </div>
                                    <input type="text" id="BKDT_CHEQAVAILABLE" hidden="hidden" name="BKDT_CHEQAVAILABLE" class="form-control BKDTDBfields">
                                 </div>
                                 <label class="mdb-main-label BTxt9">Cheque Available *</label>      
                              </div>
                           </div>
                           <div class="col">
                              <div class="md-form  ChqAvail " style="display:none">
                                 <table>
                                    <tr>
                                       <td>
                                          <div id="BKDT_COLLATTACHMENTUPLOAD"  class="file-field">
                                             <a class="">
                                             <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                             <input type="file"  name="datafile" onchange="DocFldUpldHndlr_V1(this,'BKDT_COLLATTACHMENT'+$(this).closest('.DYNROW').attr('data-row'),'BKDT_COLLATTACHMENT','BankDetails','Collection','PF',$(this).closest('.DYNROW'))" class="BKDT_COLLATTACHMENT"  >
                                             </a>
                                             <input type="text" id="BKDT_COLLATTACHMENT" hidden="hidden" data-Validate="BKDT_COLLATTACHMENT"  name="BKDT_COLLATTACHMENT" class="form-control File BKDTDBfields">
                                             <span class="name">Click Here to Upload</span> 
                                          </div>
                                       </td>
                                       <div class="md-form">
                                          <div class="md-form Formcol-mdLR">
                                             <div class="BKDT_COLLATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded BTNHIDE" title="UPLOAD" onclick="ReuploadFile($('#BKDT_COLLATTACHMENT'+$(event.target).closest('.DYNROW').attr('data-row')));" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('BKDT_COLLATTACHMENT'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
                                          </div>
                                       </div>
                                    </tr>
                                 </table>
                              </div>
                           </div>
                        </div>
                                   <div class="form-row ChqAvail" style="display:none" >
             		<div class="col" style="Display:none">
            	<div class="md-form">
                  	<button type="button" disabled id="GETOCR" onclick="GetFullOCRDetls('BKDT_COLLATTACHMENT','CHEQUE','BKDT_BNKNAME,BKDT_IFSC,BKDT_BNKBRCH,BKDT_CITY,BKDT_STATE,BKDT_ACCTNO',this);" class="btn btn-yel Btxt2 BTNHIDE">Get Cheque Details</button>
             </div>
            </div>
            <div class="col">
            </div>
           </div>
                   <div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 <select class="md-form colorful-select dropdown-primary BKDTMndtry BKDTDBfields" id="BKDT_ACCTTYPE" name="BKDT_ACCTTYPE">
                                    <option value="">Select</option>
                                    <option  value="Savings account">Savings account</option>
                                    <option  value="Current Account">Current Account</option>
                                    <option   value="Over Draft Account">Over Draft Account</option>
                                    <option  value="Cash Credit">Cash Credit</option>
      <!--class="MODE"-->           <option  value="Others">Others</option>
                                 </select>
                                 <label class="mdb-main-label BTxt9">Account Type <span class="MndtryAstr">*</span></label>
                              </div>
                           </div>
                           <div class="col">
                              <div class="md-form">
                                 <input type="text" id="BKDT_ACCTHOLDRNAME" maxlength="40" name="BKDT_ACCTHOLDRNAME" class="form-control IsUpprCse IsAlphaFields NoSpecialChar BKDTMndtry BKDTDBfields">
                                 <label for="BKDT_ACCTHOLDRNAME" class="">Account Holder Name <span class="MndtryAstr">*</span></label>
                              </div>
                           </div>
                        </div>
                        <div class="form-row">
						   <div class="col-md-6">
                              <div class="md-form">
                                 <input type="text" maxlength="25" id="BKDT_ACCTNO" name="BKDT_ACCTNO" data-link="BKDT_IFSC|BKDT_IFSCVERIFY|IFSC|Multi||BKDT_IFSCVERIFY||" onblur="ACCNOValida('BKDT_ACCTNO'+$(this).closest('.DYNROW').attr('data-row'))"   class="form-control OCRDSBL NoSpecialChar ACCNO datalink IsNumberFields BKDTMndtry BKDTDBfields">
                                 <label for="BKDT_ACCTNO" class="">Account Number <span class="MndtryAstr">*</span></label>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="md-form">
                                 <input type="text" id="BKDT_IFSCVERIFY" hidden="hidden" maxlength="30" name="BKDT_IFSCVERIFY" class="form-control IFSC BKDTDBfields">
                                 <button style="display:none" type="button" data-Validatearia="BKDT_IFSCVERIFY" onclick="CheckKYCDetl(this,'BKDT_IFSC'+$(this).closest('.DYNROW').attr('data-row'),'BKDT_IFSCVERIFY'+$(this).closest('.DYNROW').attr('data-row'),'IFSC',$(this).closest('.DYNROW'));" data-field="BKDT_IFSCVERIFY|BKDT_ACCTNO|BKDT_BNKNO||MULTIEMP" data-validate="IFSC"  class="btn btn-Verify BKDT_IFSCVERIFY waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
								 <input type="text" id="BKDT_IFSC"  maxlength="11"  data-link="BKDT_IFSC|BKDT_IFSCVERIFY|IFSC|Multi||BKDT_IFSCVERIFY||"  name="BKDT_IFSC" onblur="Ifscdetls(this,'BKDT_BNKNAME','BKDT_BNKBRCH','BKDT_CITY','BKDT_STATE')" class="form-control IsIFSCFields datalink OCRDSBL NoSpecialChar BKDTMndtry BKDTDBfields">
                                 <label for="BKDT_IFSC" class="">IFSC <span class="MndtryAstr">*</span></label>
                              </div>
                           </div> 
                        </div>
                        <div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 <input type="text" id="BKDT_BNKBRCH" disabled name="BKDT_BNKBRCH" class="form-control BKDTMndtry OCRDSBL BKDTDBfields">
                                 <label for="BKDT_BNKBRCH" class="">Bank Branch <span class="MndtryAstr">*</span></label>
                              </div>
                           </div>
                           <div class="col">
                              <div class="md-form">
                                 <input type="text" id="BKDT_BNKNAME" disabled name="BKDT_BNKNAME" class="form-control OCRDSBL  BKDTMndtry BKDTDBfields">
                                 <label for="BKDT_BNKNAME" class="">Bank Name <span class="MndtryAstr">*</span></label>
                              </div>
                           </div>
                        </div>
                        <div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 <input type="text" id="BKDT_CITY" disabled name="BKDT_CITY" class="form-control IsAlphaFields BKDTMndtry BKDTDBfields">
                                 <label for="BKDT_CITY" class="">City <span class="MndtryAstr">*</span></label>
                              </div>
                           </div>
                           <div class="col">
                              <div class="md-form">
                                 <input type="text" id="BKDT_STATE" disabled name="BKDT_STATE" class="form-control BKDTMndtry IsAlphaFields BKDTDBfields">
                                 <label for="BKDT_STATE" class="">State <span class="MndtryAstr">*</span></label>
                              </div>
                           </div>
                        </div>
                        <div class="form-row">
                           <div class="col-md-6">
                              <div class="md-form">
                                 <input type="text" id="BKDT_ACCTOPENINGDT"  maxlength="10"  name="BKDT_ACCTOPENINGDT" class="form-control IsNumberFields  ISFutureDateFields BKDTDBfields ISDatefield">
                                 <label for="BKDT_ACCTOPENINGDT" class="">Date of account opening</label>
                                 <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"   />
                              </div>
                           </div>
						 
                                    
						 


						<div class="col-md-6 ">
											<!--<div class="">Upload Statement</div>-->
											<div class="row UAMN " >
							<div class="col-md-8  Formcol-mdLR  UAMNupload">
							<div class="md-form">
							<table><tr>
							<td>
							<div id="BKDT_STATEMENTUPLOAD"  class="file-field">
								<a class="">
								<i class="fa fa-plus imgAdd" aria-hidden=""></i>
								<input type="file"  name="datafile" onchange="DocFldUpldHndlr(BKDT_STATEMENT,'BKDT_STATEMENT','BankDetails','BankDetails')" class="BKDT_STATEMENT"  >
								</a> 
							<input type="text" id="BKDT_STATEMENT" data-val="Upload Statement" hidden="hidden" data-Validate="BKDT_STATEMENT"  name="BKDT_STATEMENT" class="form-control   File BKDTMndtry BKDTDBfields">
							<span class="name1">Upload Statement*</span>
							</div>
							
		
							
							</td>
							</tr></table>
							</div>    
							</div>  
							<div class="col-md-2 Formcol-mdLR TxtCenter BankDetails">
							<div class="md-form">
							<div class="BKDT_STATEMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(BKDT_STATEMENT);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
							<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('BKDT_STATEMENT'+$(this).closest('.DYNROW').attr('data-row'))" alt="Cinque Terre" width="35" height="25"> </div>
							</div>
							</div>  

							
							</div>
							</div>						
						  
						 
					 
						   
						   
                   <!--        <div class="col-md-3">
						    <table>
 <tr>
 <td>
 <!-- <div id="EXCELUPLOAD"  class="file-field DDU FltRight ">
    <a class="">
      <i class="fa imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="UploadData(EXCELUPLOAD)" class="EXCELUPLOAD"  >
    </a>
    <input type="text" id="EXCELUPLOAD" hidden="hidden" data-Validate="EXCELUPLOAD"  name="EXCELUPLOAD" class="form-control File "/>
  <span class="name Btxt4  FltRight ">Upload Statement<img src="ThemeproLO/Common/Images/UploadImg.png" 
  class="GridDocUpd" title="UPLOAD" attr-upd="" width="20" height="20">
  </span> 
  
  </div> 
  <div id="BKDT_STATEMENTUPLOAD"  class="file-field">
                                             <a class="">
                                             <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                             <input type="file"  name="datafile" onchange="DocFldUpldHndlr_V1(this,'BKDT_STATEMENT'+$(this).closest('.DYNROW').attr('data-row'),'BKDT_STATEMENT','BankDetails','Collection','PF',$(this).closest('.DYNROW'))" class="BKDT_STATEMENT"  >
                                             </a>
                                             <input type="text" id="BKDT_STATEMENT" hidden="hidden" data-Validate="BKDT_STATEMENT"  name="BKDT_STATEMENT" class="form-control File BKDTDBfields">
                                             <span class="name">Upload Statement</span> 
                                          </div>
 </td>
  
</tr>

</table>
 
	
 
  
  </div> -->
                              <!--<div class="md-form">
                               	<input type="text" id="BKDT_BNKSTATAVAIL" name="BKDT_BNKSTATAVAIL"  maxlength="10" class="DetRpt form-control IsNumberFields BKDTMndtry NoSpecialChar BKDTDBfields ISDatefield">
                                <label for="BKDT_BNKSTATAVAIL" class="">Bank statement available from<span class="MndtryAstr">*</span></label>
                                <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                            </div>-->
                          </div>
                        
                        </br>
                        <div class="form-row">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="Save" data-aria="LSW_TLONBANKDTLS|BKDT|BKDT_BNKNO"  class="btn btn-Syeloutline waves-effect waves-light Save  FormSave">Save</button>   
                              <button type="button" data-aria="LSW_TLONBANKDTLS|BKDT|BKDT_BNKNO" data-card="0" class="btn btn-Syel waves-effect waves-light Formnxt FormSave">Save & Next</button> 
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
<script type="text/javascript" src="ThemeproLO/PFBank/Script/BnkDtls/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/PFBank/Script/BnkDtls/Validation.js${DMY13}"></script>                            
<script>
   $(document).ready(function(){
   	$("input[name='ChqAvailRadio']").change(function(){
   	    if($('#ChqYes').prop('checked')){
   	    	$("#ShowUplChq").addClass("show");
   	    }
   	    else{
   	    	$("#ShowUplChq").removeClass("show");
   	    }
   	});
   });
   	
</script>