</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<div class="">
<!--Admin panel-->
<div class="admin-panel">
   <div class="form-row">
      <div class="col-lg-12">
         <ul title="Bank" data-aria="LSW_TLONBANKDTLS|BKDT|" data-popup="No"  class="nav FormPageMultiTab">
            <%-- ${SUBPAGETABDATA} --%>
            <li id="LifeInsurance" value="CrsSel" title="Life Insurance" class="nav-item active">
               <a>
                  <div class="nav-link" href="#">Life Insurance</div>
               </a>
            </li>
            <li id="PropertyHealthPacInsurance" value="CrsSelProp" title="Property, Health & Pac Insurance" class="nav-item active">
               <a>
                  <div class="nav-link" href="#">Property, Health & Pac Insurance</div>
               </a>
            </li>
         </ul>
      </div>
   </div>
   </br>
   <!-- Start -->
   <!--Accordion wrapper-->
   <div class="HiddenBTN">
      <input type="button" style="display:none" class="DashTrg"  id="BTNLYFINSRNCDATA" name="BTNLYFINSRNCDATA" /><!-- Life Insurance -->
   </div>
      <div class="card CardNS">
<div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
  <!-- Accordion card -->
  
  
  
  
   <div data-for="ApproveNote2" class="ApproveNote2"> 

   </div>
 </div>
  
 <div class="DynamicPageGrid" data-val="PROPTXTHDR|Existing Loan" id="ApproveNote2" style="display:none"> 
  
 <div class="card DYNROW" >
 <div class="FormaccordionSUB">
    <!-- Card header -->
            <div class="card-header Btxt7 active" role="tab" id="headingOne1">
                  <a data-toggle="collapse" data-aria="" data-multidata="Yes" data-load="" class="Btxt8 AFormaccordion" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                     aria-controls="collapseOne1">
                     <span>
                         <input type="text" id="ALIH_CUSNAME"  name="ALIH_CUSNAME" class="form-control DSVLBL Btxt04 ALIHDBfields" value="">  
                     <i class="fa fa-minus-circle rotate-icon"></i></span>   
                  </a>
               </div>
    <!-- Card body -->
    <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
       
       <div > 
       <div class="card-body px-lg-5 pt-0 BSbrd"> 
         </br>
          <form>
                     <input type="text" id="ALIH_PRCSID"  name="ALIH_PRCSID" hidden="hidden" class="form-control ALIHDBfields" value="" >
                     <input type="text" id="ALIH_ACTIVITYID"  name="ALIH_ACTIVITYID" hidden="hidden"  class="form-control ALIHDBfields" value="">
                     <input type="text" id="ALIH_CREATEDBY"  name="ALIH_CREATEDBY" hidden="hidden"  class="form-control ALIHDBfields" value="">
                     <input type="text" id="ALIH_DTCREATED"  name="ALIH_DTCREATED" hidden="hidden"  class="form-control ALIHDBfields" value="">
                     <input type="text" id="ALIH_MODIFIEDBY"  name="ALIH_MODIFIEDBY" hidden="hidden"  class="form-control ALIHDBfields" value="">
                     <input type="text" id="ALIH_DTMODIFIED"  name="ALIH_DTMODIFIED" hidden="hidden"  class="form-control ALIHDBfields" value="">
                     <input type="text" id="ALIH_INSDTL"  name="ALIH_INSDTL" hidden="hidden"  class="form-control ALIHDBfields" value="">
                     <input type="text" id="ALIH_CUSID"  name="ALIH_CUSID" hidden="hidden"  class="form-control ALIHDBfields" value="">
                     <input type="text" id="ALIH_INSPTNRHIDDEN"  name="ALIH_INSPTNRHIDDEN" hidden="hidden"  class="form-control ALIHDBfields" value="">
                     <input type="text" id="ALIH_MNMFORM"  name="ALIH_MNMFORM" hidden="hidden"  class="form-control ALIHDBfields" value="">
                     <input type="text" id="FILESTATUS"  name="FILESTATUS" hidden="hidden"  class="form-control ALIHDBfields" value="">
                     <input type="text" id="ICICIGRDVAL" name="ICICIGRDVAL" hidden="hidden" class="form-control ALIHDBfields" value="">

				<div class="form-row">
                    <div class="col-md-4">
                          <div class="md-form">
                              <select class="md-form colorful-select dropdown-primary ALIHMndtry  ALIHDBfields " onchange="CheckApplicable(this,'Change');" id="ALIH_APPCONSIDER" name="ALIH_APPCONSIDER">
                                 <!--<option value="" >--Select--</option>-->
                                     <option value="Yes">Yes</option>
                					 <option value="No">No</option>
                              </select>
                              <label class="mdb-main-label BTxt9">Applicable<span class="MndtryAstr">*</span></label>
                           </div>
                        </div>
						 <div class="col-md-4" style="display:none">
                          <div class="md-form">
                              <select class="md-form colorful-select dropdown-primary  ALIHDBfields"  id="ALIH_LOANID" name="ALIH_LOANID">
                               
                              </select>
                              <label class="mdb-main-label BTxt9">Loan Type<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                </div>
         
         <div  class="Applicable">
               <div class="form-row">
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="ALIH_SUMASRD" maxlength="11"  name="ALIH_SUMASRD" class="form-control ALIHDBfields  IsNumberFields IsCURCommaFields">
                              <label for="ALIH_SUMASRD" class="">Sum Assured<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="ALIH_LONTNR" maxlength="2" disabled name="ALIH_LONTNR" class="form-control ALIHDBfields DSVLBL IsNumberFields">
                              <label for="ALIH_LONTNR" class="">Loan Tenure in Months<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="ALIH_INSTNR" maxlength="2"  onblur="INSURTENURE('ALIH_INSTNR'+$(this).closest('.DYNROW').attr('data-row'),this)"   name="ALIH_INSTNR" class="APPSTA ALIHMndtry form-control ALIHDBfields  IsNumberFields">
                              <label for="ALIH_INSTNR" class="">Premium Tenure in Years<span class="MndtryAstr">*</span></label>
                           </div>
                        </div>
                     </div>
                     <div class="form-row">
						<div class="col-md-4">
						   <div class="md-form">
                              <input type="text" id="ALIH_INSPTNR" maxlength="40"  onblur=""   name="ALIH_INSPTNR" class="APPSTA ALIHMndtry form-control ALIHDBfields IsAlphaFields">
                              <label for="ALIH_INSPTNR" class="">Insurance Partner<span class="MndtryAstr">*</span></label>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="ALIH_INSAMOUNT"  maxlength="11"  name="ALIH_INSAMOUNT" class=" form-control ALIHMndtry ALIHDBfields PMAMT IsNumberFields IsCURCommaFields">
                              <label for="ALIH_INSAMOUNT" class="">Premium Amount<span class="MndtryAstr">*</span></label>
                           </div>
                      </div>
					  <div class="col-md-4 HDFC" style="display:none"> 
                         <div class="md-form">
                            <div class="HyperControls"> 
                                <a type="button" class="Btxt4 FltLeft  ALIHDBfields"  onclick="generatePDF('ALIH_CUSID'+$(this).closest('.DYNROW').attr('data-row'),'ALIH_INSPTNR',$(this).closest('.DYNROW')[0])" href="#" >HDFC Policy Insured.pdf</a>
                            </div>
                          </div>
                      </div>
					 <div class="col-md-4 ICICI" style="display:none"> 
                         <div class="md-form">
                            <div class="HyperControls"> 
                                <a type="button" class="Btxt4 FltLeft  ALIHDBfields" onclick="generatePDF('ALIH_CUSID'+$(this).closest('.DYNROW').attr('data-row'),'ALIH_INSPTNR',$(this).closest('.DYNROW')[0])" href="#" >ICICI Policy Insured.pdf</a>
                            </div>
                         </div>
                     </div>
                  </div>
                  <div class="form-row">
                  <div class="col-md-4 "> 
                  </div>
                  <div class="col-md-4 "> 
                  </div>    
                <div class="col-md-4 "> 
                  <div class="md-form">
                  <div class="HyperControls FltRight"> 
                  <a type="button" class="Btxt4 FltLeft BALANCE ALIHDBfields" style="display:none;" onclick="" data-toggle="modal" name="UpdateBalance" data-target="#UpdateBalance" href="#">Generate</a>
                </div>
                  </div>
                  </div>
                  </div>
                     <div class="form-row">
                        <div class="col Btxt10">Health details of life to be assured</div>
                     </div>
                     <div class="form-row">
                        <div class="col">
                           <input type="button" data-button="GridButton" data-value="Table2|LSW_SGETQNFRMMSTR|PrcsID|ALIH_INSPTNRHIDDEN~PrcsID|ALIH_CUSID|0,3,4,5|LINS" style="display:none" class="DashTrg ALIHDBfields MultiGridTrg" id="BTNLYFINSRNC" name="BTNLYFINSRNC" />
                           <!-- <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SGETQNFRMMSTR',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#ALIH_INSPTNR').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4,5','LINS');" id="BTNRTRCAMGRD" name="BTNRTRCAMGRD" /> -->
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display ALIHDBfields DataGrid" name="Table2" id="Table2">
                           </table>
                        </div>
                     </div>
                     <div class="form-row">
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="ALIH_CONTCTDTL"    maxlength="100" name="ALIH_CONTCTDTL" class=" APPSTA form-control  ALIHMndtry ALIHDBfields  IsAlphaFields IsUpprCse ">
                              <label for="ALIH_CONTCTDTL" class="">Nominee Name<span class="MndtryAstr">*</span></label>
                           </div>
                        </div>
                        
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="ALIH_DOB" name="ALIH_DOB"  maxlength="10" onblur="AgeVal(this,ALIH_AGE);" class="APPSTA ALIHMndtry form-control ISFutureDateFields form-control ALIHDBfields IsNumberFields NoSpecialChar  ISDatefield">
                              <label for="ALIH_DOB" class="">Date of Birth<span class="MndtryAstr">*</span></label>
                              <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                           </div>
                        </div>
                        
                          <input type="text" id="ALIH_AGE"  name="ALIH_AGE" hidden="hidden"  class="form-control ALIHDBfields" value="">
                        <div class="col-md-4">
                           <div class="md-form">
                              <div id="" class="select-radio Applradio">
                                 <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input ALIHDBfields" onclick="CheckGender(this,'ALIH_RELVID'+$(this).closest('.DYNROW').attr('data-row'),'Page')" value="Male" id="GenMale" name="ALIH_GENDR">
                                    <label class="custom-control-label" for="GenMale">Male</label>
                                 </div>
                                 <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input ALIHDBfields" onclick="CheckGender(this,'ALIH_RELVID'+$(this).closest('.DYNROW').attr('data-row'),'Page')" value="Female" id="GenFemale" name="ALIH_GENDR">
                                    <label class="custom-control-label" for="GenFemale">Female</label>
                                 </div>
                                 <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input ALIHDBfields" onclick="CheckGender(this,'ALIH_RELVID'+$(this).closest('.DYNROW').attr('data-row'),'Page')" value="Transgender" id="GenTransgender" name="ALIH_GENDR">
                                    <label class="custom-control-label" for="GenTransgender">Transgender</label>
                                 </div>
                              </div>
                              <label class="mdb-main-label BTxt9">Gender<span class="MndtryAstr">*</span></label>      
                           </div>
                        </div>
                     </div>
                     <div class="form-row">
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="ALIH_MOBILNO"    maxlength="10" name="ALIH_MOBILNO" class=" APPSTA form-control  ALIHMndtry ALIHDBfields IsNumberFields NoSpecialChar IsMobileFields">
                              <label for="ALIH_MOBILNO" class="">Mobile Number<span class="MndtryAstr">*</span></label>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="md-form">
                              <select class="md-form colorful-select dropdown-primary APPSTA  ALIHMndtry ALIHDBfields APPDROPDOWN" onchange="" id="ALIH_RELVID" name="ALIH_RELVID">
                                 <option value="" >--Select--</option>
                                      <!--   <option value="Mother">Mother</option>
                					    <option value="Father">Father</option>
                  					   <option value="Brother">Brother</option>
             					 	   <option value="Spouse">Spouse</option>
    			   						<option value="Sister">Sister</option>
                                        <option value="Brother In-Law">Brother In-Law</option>
              							 <option value="Sister In-Law">Sister In-Law</option>
     									  <option value="Neice">Neice</option>
      									 <option value="Nephew">Nephew</option>
     									  <option value="Uncle">Uncle</option>
    							    	   <option value="Aunty">Aunty</option>
    								      <option value="Other">Other</option> -->
                                 
                              </select>
                              <label class="mdb-main-label BTxt9">Relationship with Insurer<span class="MndtryAstr">*</span></label>
                           </div>
                        </div>
                        <div class="col-md-4">
                        </div>
                     </div>
					 <div class="col-md-4 HDFCMRPT justify-content-center" style="display:none"> 
                         <div class="md-form">
                            <div class="HyperControls"> 
                                <a type="button" class="Btxt4 FltLeft"  onclick="GentrateHDFCMedical('ALIH_CUSID'+$(this).closest('.DYNROW').attr('data-row'),'Page');GentrateHDFCCovid('ALIH_CUSID'+$(this).closest('.DYNROW').attr('data-row'),'Page')" href="#">HDFC Medical Form.pdf</a>
                            </div>
                         </div>
                     </div>
					 </br>
					 <div class="col-md-4 HDFCNMRPT justify-content-center" style="display:none"> 
                         <div class="md-form">
                            <div class="HyperControls"> 
                                <a type="button" class="Btxt4 FltLeft"  onclick="GentrateHDFCNonMedical('ALIH_CUSID'+$(this).closest('.DYNROW').attr('data-row'),'Page');GentrateHDFCCovid('ALIH_CUSID'+$(this).closest('.DYNROW').attr('data-row'),'Page')" href="#">HDFC Non-Medical Form.pdf</a>
                            </div>
                         </div>
                     </div>
					  </br>
					 <div class="col-md-4 ICICIRPT justify-content-center" style="display:none"> 
                         <div class="md-form">
                            <div class="HyperControls"> 
                                <a type="button" class="Btxt4 FltLeft" onclick="GentrateICICIMedical('ALIH_CUSID'+$(this).closest('.DYNROW').attr('data-row'),'Page')" href="#">ICICI Form.pdf</a>
                            </div>
                         </div>
                     </div>
					  </br>
                     <div class="form-row">
                        <div class="col d-flex justify-content-center">
                           <button id="Save" type="button" data-aria="LSW_TLYFINSRNCHDR|ALIH|ALIH_CUSID" data-form="CAM" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Generate</button> 
                           <button id="LISave" style="display:none" type="button" data-aria="LSW_TLYFINSRNCHDR|ALIH|ALIH_CUSID" data-form="CAM" data-card="0" class="btn btn-Syel waves-effect waves-light LIFormSave">Save</button> 
                        
						</div>
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
 </div>
 </div>
<script type="text/javascript" src="ThemeproLO/UCV/Approve/Script/CrsSel/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Approve/Script/CrsSel/Validation.js${DMY13}"></script>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>  
<table style="display:none" id="GridTable2">
   <thead>
      <th>APQA_QN</th>
      <th>APQA_QNID</th>
      <th>APQA_OPTN</th>
      <th>APQA_INSRNCPTNR</th>
      <th>APQA_CUSID</th>

      <!--<th>FPOI_PRCSID</th>
         <th>FPOI_ACTIVITYID</th>
         <th>FPOI_CREATEDBY</th>
         <th>FPOI_DTCREATED</th>
         <th>FPOI_MODIFIEDBY</th>
         <th>FPOI_DTMODIFIED</th>-->
   </thead>
</table>