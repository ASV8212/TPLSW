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
            <li id="PropertyHealthPacInsurance" value="CrsSelProp" title="Property, Health & Pac Insurance" class="nav-item">
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
      <input type="button" style="display:none" class="DashTrg"  id="BTNHEALTHDATA" name="BTNHEALTHDATA" /><!-- Health & Pac -->
      <input type="button" style="display:none" class="DashTrg"  id="BTNPropertyInsurance" name="BTNPropertyInsurance" /><!-- Health & Pac -->
   </div>
   <div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
      <!-- Property Insurance Start -->
      <div class="card card123">
         <div class="card-header Btxt7" role="tab" id="headingOne1">
            <a data-toggle="collapse" data-aria="" data-multidata="BTNPropertyInsurance" data-load="" class="Btxt8 AFormaccordion" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
               aria-controls="collapseOne1">Property Insurance<i class="fa fa-minus-circle rotate-icon"></i></a>
         </div>
         <div id="collapseOne1" class="collapse" role="tabpanel" aria-labelledby="headingOne1"
               data-parent="#accordionEx">
               <div class="card-body px-lg-5 pt-0" >
            <input type="text" id="ACSP_PRCSID"  name="ACSP_PRCSID" hidden="hidden" class="form-control ACSPDBfields" value="" >
            <input type="text" id="ACSP_ACTIVITYID"  name="ACSP_ACTIVITYID" hidden="hidden"  class="form-control ACSPDBfields" value="">
            <input type="text" id="ACSP_DTCREATED"  name="ACSP_DTCREATED" hidden="hidden"  class="form-control ACSPDBfields" value="">
            <input type="text" id="ACSP_CREATEDBY"  name="ACSP_CREATEDBY" hidden="hidden"  class="form-control ACSPDBfields" value="">
            <input type="text" id="ACSP_DTMODIFIED"  name="ACSP_DTMODIFIED" hidden="hidden"  class="form-control ACSPDBfields" value="">
            <input type="text" id="ACSP_MODIFIEDBY"  name="ACSP_MODIFIEDBY" hidden="hidden"  class="form-control ACSPDBfields" value="">
            <input type="text" id="ACSP_PROPDTL"  name="ACSP_PROPDTL" hidden="hidden"  class="form-control ACSPDBfields" value="">
            <div class="form-row" style="display:none" >
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="ACSP_SUMASSURD" maxlength="11" disabled name="ACSP_SUMASSURD" class="form-control ACSPDBfields IsCURCommaFields IsNumberFields">
                     <label for="ACSP_SUMASSURD" class="">Sum Assured<span class="MndtryAstr"></span></label>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="ACSP_LONTENRINYR" maxlength="2" disabled name="ACSP_LONTENRINYR" class="form-control DSBBPL ACSPDBfields IsNumberFields">
                     <label for="ACSP_LONTENRINYR" class="">Loan Tenure in years<span class="MndtryAstr"></span></label>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="ACSP_REMRK" maxlength="100"  name="ACSP_REMRK" class="form-control ACSPDBfields ">
                     <label for="ACSP_REMRK" class="">Details of Proposal<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
            </div>
            <div class="form-row"  style="display:none" >
               <div class="col Btxt10">Policy Period</div>
            </div>
            <div class="form-row" style="display:none" >
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="ACSP_PLCYFRM" maxlength="10"  onblur="CompareFROMDATE('ACSP_PLCYFRM','ACSP_PLCYTO');"  name="ACSP_PLCYFRM" class="form-control  ACSPDBfields ISFutureDateFields ISDatefield IsNumberFields  ">
                     <label for="ACSP_PLCYFRM" class="">From<span class="MndtryAstr">*</span></label>
                     <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="ACSP_PLCYTO" maxlength="10"  onblur="CompareTODATE('ACSP_PLCYFRM','ACSP_PLCYTO');"   name="ACSP_PLCYTO" class="form-control  ACSPDBfields ISDatefield IsNumberFields  ">
                     <label for="ACSP_PLCYTO" class="">To<span class="MndtryAstr">*</span></label>
                     <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
               </div>
               <div class="col-md-4">
               </div>
            </div>
            <div class="form-row">
               <div class="col Btxt10">Mandatory coverage details</div>
			   <div class="col-md-3">
                 <div class="md-form FltRight">
                       <div class="custom-control custom-radio custom-control-inline ">
                               <input type="checkbox" class="custom-control-input ACSPDBfields" onclick="CheckMDCDetl(this,'Change')" id="ACSP_MNDCGAPPLIC" name="ACSP_MNDCGAPPLIC">
                               <label class="custom-control-label" for="ACSP_MNDCGAPPLIC">Insurance Applicable<span class="MndtryAstr"></span></label>
                       </div>
                 </div>
             </div>
            </div>
            </br>
			<div class="MDCD"> 
            <div class="form-row">
               <div class=" col-md-4 Btxt17 GryShd">
                  Product
               </div>
               <div class=" col-md-1">
               </div>
               <div class=" col-md-3">
                  <div class="md-form">
                     <input type="text" id="ACSP_MPROD" name="ACSP_MPROD" value="Chola Group Hospital" class="form-control DSVLBL  ACSPDBfields  ">
                  </div>
               </div>
            </div>
            <div class="form-row">
               <div class=" col-md-4 Btxt17  GryShd">
                  Policy Tenure
               </div>
               <div class=" col-md-1">
               </div>
               <div class=" col-md-3">
                  <div class="md-form">
                     <input type="text" id="ACSP_MPOLCYTNR" name="ACSP_MPOLCYTNR" disabled  maxlength="2" class="form-control RMCD IsNumberFields  ACSPDBfields  ">
                  </div>
               </div>
            </div>
			
			  <div class="form-row" style="display:none">
               <div class=" col-md-4 Btxt17  GryShd">
                  Sum Insured
               </div>
               <div class=" col-md-1">
               </div>
               <div class=" col-md-3">
                  <div class="md-form">
                     <input type="text" id="ACSP_MSUMINSRD" name="ACSP_MSUMINSRD"  class="form-control DSVLBL IsCURCommaFields IsNumberFields ACSPDBfields  ">
                  </div>
               </div>
            </div>
			
      
            <div class="form-row">
               <div class=" col-md-4 Btxt17  GryShd">
                  Premium Inclusive of GST
               </div>
               <div class=" col-md-1">
               </div>
               <div class=" col-md-3">
                  <div class="md-form">
                     <input type="text" id="ACSP_MPREMINCLDGST" name="ACSP_MPREMINCLDGST" value="" disabled class="form-control  RMCD IsCURCommaFields IsNumberFields ACSPDBfields  ">
                  </div>
               </div>
            </div>
			
			 <div class="form-row">
               <div class=" col-md-4 Btxt17  GryShd">
                  Insurer <span class="MndtryAstr">*</span>
               </div>
               <div class=" col-md-1">
               </div>
               <div class=" col-md-3">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ACSPMndtry ACSPDBfields RMCDD"  id="ACSP_INSURERNAME" name="ACSP_INSURERNAME">
				 <option value="">--Select--</option>
				</select>
                  
                  </div>
               </div>
            </div>
            </br>
            <div class="form-row">
               <div class="col Btxt10">NOMINEE DETAILS</div>
            </div>
            <br>
            <div class="form-row">
              
         <!--       <div class="md-form">
                     <select class="md-form colorful-select dropdown-primary ACSPMndtry ACSPDBfields" id="ACSP_NOMNYNAME" name="ACSP_NOMNYNAME">
                        <option value="">Select</option>
                     </select>
                     <label for="ACSP_NOMNYNAME" class="">Nominee Name<span class="MndtryAstr">*</span></label>
                  </div>
               </div>-->
               
                   <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="ACSP_NOMNYNAME"  onchange="ChkNomiName('ACSP_INSURERNAME','ACSP_NOMNYNAME')"  maxlength="100" name="ACSP_NOMNYNAME" class="form-control RMCD ACSPMndtry ACSPDBfields  IsAlphaFields IsUpprCse ">
                              <label for="ACSP_NOMNYNAME" class="">Nominee Name<span class="MndtryAstr">*</span></label>
                           </div>
                        </div>
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="ACSP_DOB" maxlength="11"  name="ACSP_DOB" onblur="AgeVal(this,ACSP_AGE);"   class="form-control RMCD ACSPMndtry ACSPDBfields ISFutureDateFields  IsNumberFields NoSpecialChar ISDatefield  ">
                     <label for="ACSP_DOB" class="">Date of Birth<span class="MndtryAstr">*</span></label>
                     <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                   
                  </div>
				    <input type="text" id="ACSP_AGE"  name="ACSP_AGE" hidden="hidden"  class="form-control ACSPDBfields" >
               </div>
               <div class="col-md-4">
                  <div class="md-form">
                     <div id="" class="select-radio ">
                        <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input ACSPDBfields" onclick="CheckGender1('Page')" value="Male" id="GenMale1" name="ACSP_GENDR">
                           <label class="custom-control-label" for="GenMale1">Male</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input ACSPDBfields" onclick="CheckGender1('Page')" value="Female" id="GenFemale1" name="ACSP_GENDR">
                           <label class="custom-control-label" for="GenFemale1">Female</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input ACSPDBfields" onclick="CheckGender1('Page')"  value="Transgender" id="GenTrancs1" name="ACSP_GENDR">
                           <label class="custom-control-label" for="GenTrancs1">Transgender</label>
                        </div>
                     </div>
                     <label  class="mdb-main-label BTxt9">Gender<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
            </div>
            <div class="form-row">
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="ACSP_MBLNO" maxlength="10"  name="ACSP_MBLNO" class="form-control ACSPMndtry RMCD ACSPDBfields IsNumberFields IsMobileFields ">
                     <label for="ACSP_MBLNO" class="">Contact Number<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="md-form">
                     <select class="md-form colorful-select dropdown-primary RMCDD ACSPDBfields ACSPMndtry" id="ACSP_RELVIDINSR" name="ACSP_RELVIDINSR">
                                 <option value="" >--Select--</option>
                                         <!--<option value="Mother">Mother</option>
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
    								      <option value="Other">Other</option>-->
                     </select>
                     <label  class="mdb-main-label BTxt9">Relationship with Insurer<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
               <div class="col-md-4">
               </div>
            </div>
            <div class="form-row">
                        <div class="col d-flex justify-content-center">
                           <button type="button" data-aria="LSW_TCRSSELPROPTY|ACSP||PROINSUR" data-form="Property Insurance" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Generate</button> 
                            <button type="button" data-aria="LSW_TCRSSELPROPTY|ACSP||PROINSUR" style="display:none" data-form="CAM" data-card="0" class="btn btn-Syel waves-effect waves-light MCFormSave">Save</button> 
					   </div>
                     </div>
		  
            <div class="form-row">
               <div class="col">
                  <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_SMNDTRYCVRGINSR',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','MNDTRYPROPGRID');" id="BTNMNDTRYPROPGRID" name="BTNMNDTRYPROPGRID" />
                  <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table4">
                  </table>
               </div>
            </div>
           <!--   <div class="HyperControls form-row FltRight" >
               <a onclick="AddPageMultiData('',$('#BKDT_PRCSID').val(),'','BankDetail1','AMPIDBfields');GetCustomerName();" class="Btxt4 FltRight ADDBTN"  href="#">+Add Property</a>
            </div>-->
            <div class="card CardNS">
               <div data-for="BankDetail1" class="BankDetail1"> 
               </div>
               <div class="DynamicPageGrid" data-val="PROPTXTHDR|Property" id="BankDetail1" style="display:none">
                  <div data-row="" class=" BSbrd DYNROW">
                     <form>
                        <input type="text" id="AMPI_PRCSID" hidden="hidden" name="AMPI_PRCSID" class="form-control AMPIDBfields">
                        <input type="text" id="AMPI_ACTIVITYID" hidden="hidden" name="AMPI_ACTIVITYID" class="form-control AMPIDBfields">
                        <input type="text" id="AMPI_DTCREATED" hidden="hidden" name="AMPI_DTCREATED" class="form-control AMPIDBfields">
                        <input type="text" id="AMPI_CREATEDBY" hidden="hidden" name="AMPI_CREATEDBY" class="form-control AMPIDBfields">
                        <input type="text" id="AMPI_DTMODIFIED" hidden="hidden" name="AMPI_DTMODIFIED" class="form-control AMPIDBfields">
                        <input type="text" id="AMPI_MODIFIEDBY" hidden="hidden" name="AMPI_MODIFIEDBY" class="form-control AMPIDBfields">
                        
                      <input type="text" id="AMPI_LOCATN" hidden="hidden" name="AMPI_LOCATN" class="form-control AMPIDBfields">
                      <input type="text" id="AMPI_APPRUSAGE" hidden="hidden" name="AMPI_APPRUSAGE" class="form-control AMPIDBfields">
					  <input type="text" id="AMPI_PROFLAG"  name="AMPI_PROFLAG" hidden="hidden"  class="form-control AMPIDBfields" value="">

                        <div class="form-row">
                           <div id="PROPTXTHDR" class="col Btxt10"></div>
                        </div>
                        
                        <!--     <div class="form-row DLTICON" >
                                  <div class="col ">
                                    <div class="FltRight DELBTNTXT">
                                         Delete Property
                                          <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="CEMI_PRCSID|CEMI_EMPID|APPLEMPDETAILS" class="DELBTN DELETECROSSPRO"/>
                                      </div>    
                                 </div>     
                             </div> -->
                        
                        
                 <div class="form-row" >
                <div class="col-md-9">

                  <div class="md-form">
                     <input type="text" id="AMPI_PRONO" maxlength="11" disabled name="AMPI_PRONO" class=" DSVLBL form-control AMPIDBfields">
                     <label for="AMPI_PRONO" class="active">Location<span class="MndtryAstr"></span></label>
                  </div>
    
               </div>

            <div class="col-md-3">
                 <div class="md-form FltRight  ">
                       <div class="custom-control custom-radio custom-control-inline ">
                               <input type="checkbox" class="custom-control-input AMPIDBfields  " onclick="ChkApplicable();Applicablesave(this);" id="AMPI_PROAPPLICABLE" name="AMPI_PROAPPLICABLE">
                               <label class="custom-control-label" for="AMPI_PROAPPLICABLE">Insurance Applicable<span class="MndtryAstr"></span></label>
                       </div>
                 </div>
             </div>
         </div>
         
         <div Class="Applicable">
		 <div class="form-row">
		               <div class="col-md-8 PolicyProperty" style="display:none"> 
					   </div>
		               <div class="col-md-4 PolicyProperty" style="display:none"> 
                            <div class="md-form">
                             <div class=" "> 
 <a type="button" class="Btxt4 FltLeft  ALIHDBfields"  onclick="generatePDF('AMPI_INSURERNAME'+$(this).closest('.DYNROW').attr('data-row'),'AMPI_LOCATN'+$(this).closest('.DYNROW').attr('data-row'),'PolicyProperty',$(this).closest('.DYNROW')[0])">Property Policy Insured.pdf</a>
                            </div>
                              </div>
                             </div>
                        </div>
                        <div class="form-row">
                           <div class=" col-md-4 Btxt17 GryShd">
                              Product
                           </div>
                           <div class=" col-md-1">
                           </div>
                           <div class=" col-md-4 Btxt17  GryShd">
                              <div class="md-form">
                                 <input type="text" id="AMPI_PROD" name="AMPI_PROD" value="" class="form-control DSVLBL  AMPIDBfields  ">
                              </div>
                           </div>
                        </div>
                        <div class="form-row">
                           <div class=" col-md-4 Btxt17  GryShd">
                              Policy Tenure
                           </div>
                           <div class=" col-md-1">
                           </div>
                           <div class=" col-md-4    ">
                              <div class="md-form">
                                 <input type="text" id="AMPI_PLCYTNR" name="AMPI_PLCYTNR" disabled  maxlength="2"class="form-control Tenure IsNumberFields  AMPIDBfields  ">
                              </div>
                           </div>
                        </div>
                        <div class="form-row">
                           <div class=" col-md-4 Btxt17  GryShd">
                              Sum Insured
                           </div>
                           <div class=" col-md-1">
                           </div>
                           <div class=" col-md-4 Btxt17">
                              <div class="md-form">
                                 <input type="text" id="AMPI_SUMINSRD" name="AMPI_SUMINSRD" value="" disabled class="form-control IsCURCommaFields DSVLBL IsNumberFields AMPIDBfields  ">
                              </div>
                           </div>
                        </div>
                        <div class="form-row">
                           <div class=" col-md-4 Btxt17  GryShd">
                              Premium Inclusive of GST
                           </div>
                           <div class=" col-md-1">
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="AMPI_PRMINCLDGST" name="AMPI_PRMINCLDGST" value="" maxlength="10" disabled class="form-control RMCD PremiumEnabled IsCURCommaFields IsNumberFields AMPIDBfields  ">
                              </div>
                           </div>
                        </div>
						<div class="form-row">
               <div class=" col-md-4 Btxt17  GryShd">
                  Insurer <span class="MndtryAstr">*</span>
               </div>
               <div class=" col-md-1">
               </div>
               <div class=" col-md-4">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary AMPIMndtry AMPIDBfields RMCDD"  id="AMPI_INSURERNAME" name="AMPI_INSURERNAME">
				 <option value="">--Select--</option>
				</select>
                  
                  </div>
               </div>
            </div>
                </div>
                
               <div class="form-row">
                        <div class="col d-flex justify-content-center">
                           <button type="button" data-aria="LSW_TADPROPINSRNC|AMPI|AMPI_LOCATN|COAPPINSUR" data-form="Property Insurance" data-hit="Property" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save</button> 
                          <button type="button" style="display:none" data-aria="LSW_TADPROPINSRNC|AMPI|AMPI_LOCATN|COAPPINSUR" data-form=""  data-card="0" class="btn btn-Syel waves-effect waves-light PIFormSave">Save</button> 
						</div>
                     </div>
                     </form>
                  </div>
               </div>
            </div>
            
         </div>
		 </div>
               </div>
         
      
	  </div>
      <!-- Property Insurance End -->
      <div class="card ">
         <div class="card-header Btxt7" role="tab" id="headingOne1">
            <a data-toggle="collapse" data-aria="" data-multidata="BTNPropertyInsurance" data-load="" class="Btxt8 AFormaccordion" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
               aria-controls="collapseOne1">Health & Pac Insurance</a>
         </div>   
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
                         <input type="text" id="ACHP_CUSNAME"  name="ACHP_CUSNAME" class="form-control DSVLBL Btxt04 ACHPDBfields" value="">  
                     <i class="fa fa-minus-circle rotate-icon"></i></span>   
                  </a>
               </div>
    <!-- Card body -->
    <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
       
       <div > 
       <div class="card-body px-lg-5 pt-0 BSbrd"> 
         </br>
          <form>
            <input type="text" id="ACHP_PRCSID"  name="ACHP_PRCSID" hidden="hidden" class="form-control ACHPDBfields" value="" >
            <input type="text" id="ACHP_ACTIVITYID"  name="ACHP_ACTIVITYID" hidden="hidden"  class="form-control ACHPDBfields" value="">
            <input type="text" id="ACHP_DTCREATED"  name="ACHP_DTCREATED" hidden="hidden"  class="form-control ACHPDBfields" value="">
            <input type="text" id="ACHP_CREATEDBY"  name="ACHP_CREATEDBY" hidden="hidden"  class="form-control ACHPDBfields" value="">
            <input type="text" id="ACHP_DTMODIFIED"  name="ACHP_DTMODIFIED" hidden="hidden"  class="form-control ACHPDBfields" value="">
            <input type="text" id="ACHP_MODIFIEDBY"  name="ACHP_MODIFIEDBY" hidden="hidden"  class="form-control ACHPDBfields" value="">
            <input type="text" id="ACHP_COMBOGRD"  name="ACHP_COMBOGRD" hidden="hidden"  class="form-control ACHPDBfields" value="">
             <input type="text" id="ACHP_CUSID"  name="ACHP_CUSID" hidden="hidden"  class="form-control ACHPDBfields" value="">
            <input type="text" id="ACHP_FAIMILYGRD"  name="ACHP_FAIMILYGRD" hidden="hidden"  class="form-control ACHPDBfields" value="">
			 <input type="text" id="ACHP_HPFLAG"  name="ACHP_HPFLAG" hidden="hidden"  class="form-control ACHPDBfields" value="">
             <div class="card-body px-lg-5 pt-0" >
              <div class="form-row">  
               <div class="col-md-4">
                <div class="md-form">
                      <select class="md-form colorful-select dropdown-primary  ACHPMndtry  ACHPDBfields " onchange="CheckApplicable(this,'Change');" id="ACHP_APPCONSIDER" name="ACHP_APPCONSIDER">
                            <!--<option value="" >--Select--</option>-->
                              <option value="Yes">Yes</option>
                		      <option value="No">No</option>
                       </select>
                              <label class="mdb-main-label BTxt9">Applicable<span class="MndtryAstr">*</span></label>
                           </div>
                        </div>
						 <div class="col-md-4 HealthPac" style="display:none">
						 <div class="md-form">
                             <div class=" "> 
 <a type="button" class="Btxt4 FltLeft  ALIHDBfields"  onclick="generatePDF('ACHP_CUSID'+$(this).closest('.DYNROW').attr('data-row'),'','HealthPac',$(this).closest('.DYNROW')[0],'Health')">Health Policy Insured.pdf</a>
                            </div>
                              </div>
						 </div>
						 <div class="col-md-4 HealthPac" style="display:none"> 
                            <div class="md-form">
                             <div class=" "> 
 <a type="button" class="Btxt4 FltLeft  ALIHDBfields"  onclick="generatePDF('ACHP_CUSID'+$(this).closest('.DYNROW').attr('data-row'),'','HealthPac',$(this).closest('.DYNROW')[0],'Pac')">Pac Policy Insured.pdf</a>
                            </div>
                              </div>
                             </div>
                   </div>
            
            <div class="Applicable">   
            <div class="form-row">
               <div class="col-md-4" style="display:none">
                  <div class="md-form">
                     <input type="text" id="ACHP_SUMINSRD" maxlength="11"  name="ACHP_SUMINSRD" disabled class="form-control ACHPDBfields IsNumberFields IsLandlneFields ">
                     <label for="ACHP_SUMINSRD" class="">Sum Assured<span class="MndtryAstr"></span></label>
                  </div>
               </div>
               <div class="col-md-4" style="display:none">
                  <div class="md-form">
                     <input type="text" id="ACHP_LONTNR" maxlength="2" disabled  name="ACHP_LONTNR" class="form-control DSBBPL ACHPDBfields IsNumberFields IsLandlneFields ">
                     <label for="ACHP_LONTNR" class="">Loan Tenure in years<span class="MndtryAstr"></span></label>
                  </div>
               </div>
               <div class="col-md-4" style="display:none">
                  <div class="md-form">
                     <input type="text" id="ACHP_RMRK" maxlength="100"  name="ACHP_RMRK" class="  form-control  ACHPDBfields   ">
                     <label for="ACHP_RMRK" class="">Details of Proposal<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
            </div>
            <div class="form-row" style="display:none">
               <div class="col Btxt10">Policy period</div>
            </div>
            <div class="form-row" style="display:none">
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="ACHP_PLCYFROM" maxlength="11"  onblur="CompareFROMDATE('ACHP_PLCYFROM'+$(this).closest('.DYNROW').attr('data-row'),'ACHP_PLCYTO'+$(this).closest('.DYNROW').attr('data-row'));"  name="ACHP_PLCYFROM" class=" form-control   ACHPDBfields  ISFutureDateFields ISDatefield ">
                     <label for="ACHP_PLCYFROM" class="">From<span class="MndtryAstr">*</span></label>
                     <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="ACHP_PLCYTO" maxlength="10"   onblur="CompareTODATE('ACHP_PLCYFROM'+$(this).closest('.DYNROW').attr('data-row'),'ACHP_PLCYTO'+$(this).closest('.DYNROW').attr('data-row'));" name="ACHP_PLCYTO" class="  form-control ACHPDBfields  ISDatefield  ">
                     <label for="ACHP_PLCYTO" class="">To<span class="MndtryAstr">*</span></label>
                     <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
               </div>

            
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="ACHP_INSAMOUNT" maxlength="11"  name="ACHP_INSAMOUNT" disabled class="form-control ACHPDBfields   IsNumberFields IsCURCommaFields">
                              <label for="ACHP_INSAMOUNT" class="">Premium Amount<span class="MndtryAstr"></span></label>
                           </div>
                      </div>
                        </div>
                      
            <div class="form-row">
               <div class="col Btxt10">Combo 1</div>
            </div>
                   <div class="form-row">
                        <div class="col">
                           <input type="button" data-button="GridButton" data-value="Table7|LSW_SMNDTRYCVRGINSR|PrcsID|ACHP_CUSID||4|HEALTHCOMBOGRD" style="display:none" class="DashTrg ACHPDBfields MultiGridTrg" id="BTNLYFINSRNC" name="BTNLYFINSRNC" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display ACHPDBfields DataGrid" name="Table7" id="Table7">
                           </table>
                        </div>
                     </div>
           <br>      

              <div class="form-row">
               <div class="col Btxt10">Family Details</div>
            </div>
                   <div class="form-row">
                        <div class="col">
                           <input type="button" data-button="GridButton" data-value="Table8|LSW_SFAMILYCOMOGRID|PrcsID|ACHP_CUSID||4|FAMILYCOMBOGRD" style="display:none" class="DashTrg ACHPDBfields MultiGridTrg" id="BTNFAMILY" name="BTNFAMILY"/>
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display ACHPDBfields DataGrid" name="Table8" id="Table8">
                           </table>
                        </div>
                     </div>		

            <br> 
           <div class="form-row">
               <div class="col Btxt10">NOMINEE DETAILS</div>
            </div>	


                <div class="form-row">
               <div class="col-md-4">
                 <div class="md-form">
                     <input type="text" id="ACHP_NOMINENAME" maxlength="100" onchange="ChkNomiName('ACHP_CUSID'+$(this).closest('.DYNROW').attr('data-row'),'ACHP_NOMINENAME'+$(this).closest('.DYNROW').attr('data-row'))" name="ACHP_NOMINENAME"  class="APPSTA form-control ACHPMndtry ACHPDBfields  IsAlphaFields IsUpprCse">
                     <label for="ACHP_NOMINENAME" class="">Nominee Name<span class="MndtryAstr">*</span></label>
                  </div>
                  </div>
               
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="ACHP_NOMINEDOB" maxlength="10"  name="ACHP_NOMINEDOB" onblur="AgeVal(this,ACHP_AGE);"  class="APPSTA ACHPMndtry ISFutureDateFields form-control ACHPDBfields  IsNumberFields NoSpecialChar ISDatefield  ">
                     <label for="ACHP_NOMINEDOB" class="">Date of Birth<span class="MndtryAstr">*</span></label>
                     <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
               </div>
                        <input type="text" id="ACHP_AGE"  name="ACHP_AGE" hidden="hidden"  class="form-control ACHPDBfields" value="">
               <div class="col-md-4">

                           <div class="md-form">
                              <div id="" class="select-radio Applradio ">
                                 <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input ACHPDBfields" onclick="CheckGender(this,'ACHP_NOMINERELTN'+$(this).closest('.DYNROW').attr('data-row'),'Page')" value="Male" id="GMale" name="ACHP_NOMINEGENDR">
                                    <label class="custom-control-label" for="GMale">Male</label>
                                 </div>
                                 <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input ACHPDBfields" onclick="CheckGender(this,'ACHP_NOMINERELTN'+$(this).closest('.DYNROW').attr('data-row'),'Page')" value="Female" id="GFemale" name="ACHP_NOMINEGENDR">
                                    <label class="custom-control-label" for="GFemale">Female</label>
                                 </div>
                                  <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input ACHPDBfields" onclick="CheckGender(this,'ACHP_NOMINERELTN'+$(this).closest('.DYNROW').attr('data-row'),'Page')" value="Transgender" id="GTrans" name="ACHP_NOMINEGENDR">
                                    <label class="custom-control-label" for="GTrans">Transgender</label>
                                 </div>
                              </div>
                              <label class="mdb-main-label BTxt9">Gender<span class="MndtryAstr">*</span></label>      
                           </div>
                        </div>

               </div>
         
            <div class="form-row">
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="ACHP_NOMINECNTCTNO" maxlength="10"  name="ACHP_NOMINECNTCTNO" class="APPSTA ACHPMndtry form-control ACHPDBfields IsNumberFields IsMobileFields ">
                     <label for="ACHP_NOMINECNTCTNO" class="">Contact Number<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="md-form">
                     <select class="md-form colorful-select dropdown-primary ACHPDBfields APPDROPDOWN APPSTA ACHPMndtry " id="ACHP_NOMINERELTN" name="ACHP_NOMINERELTN">
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
    								      <option value="Other">Other</option>-->
                     </select>
                     <label  class="mdb-main-label BTxt9">Relationship with Insurer<span class="MndtryAstr">*</span></label>
                  </div>
               </div>

            </div>
			<div class="form-row">
                 <div class="col d-flex justify-content-center">
				      <button type="button" id="HPSave" data-aria="LSW_TCRSSELGLTHPAC|ACHP|ACHP_CUSID|COAPPINSUR" data-form="Health & Pac Insurance" data-hit="Health" data-card="" class="btn btn-Syel waves-effect waves-light FormSave">Generate Health Premium</button> 
				      <button type="button" id="HPSave" data-aria="LSW_TCRSSELGLTHPAC|ACHP|ACHP_CUSID|COAPPINSUR" data-form="Health & Pac Insurance" data-hit="Pac" data-card="" class="btn btn-Syel waves-effect waves-light FormSave">Generate Pac Premium</button> 
                      <button type="button" id="HPSave" data-aria="LSW_TCRSSELGLTHPAC|ACHP|ACHP_CUSID|COAPPINSUR" data-form="Health & Pac Insurance" data-card="1" class="btn btn-Syel waves-effect waves-light FormSave">Save</button> 
                 </div>
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
<script type="text/javascript" src="ThemeproLO/Approve/Script/CrsSelProp/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Approve/Script/CrsSelProp/Validation.js${DMY13}"></script>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>
<table style="display:none" id="GridTable7">
   <thead>
      <th>AMPI_PROD</th>
      <th>AMPI_PLCYTNR</th>
      <th>AMPI_SUMINSRD</th>
      <th>AMPI_PRMINCLDGST</th>
      <th>AMPI_CUSID</th>
      <!--<th>FPOI_PRCSID</th>
         <th>FPOI_ACTIVITYID</th>
         <th>FPOI_CREATEDBY</th>
         <th>FPOI_DTCREATED</th>
         <th>FPOI_MODIFIEDBY</th>
         <th>FPOI_DTMODIFIED</th>-->
   </thead>
</table>

<table style="display:none" id="GridTable8">
   <thead>
      <th>HPFA_TYPE</th>
      <th>HPFA_NAME</th>
      <th>HPFA_GENDOR</th>
      <th>HPFA_DOB</th>
      <th>HPFA_CUSID</th>
      <!--<th>FPOI_PRCSID</th>
         <th>FPOI_ACTIVITYID</th>
         <th>FPOI_CREATEDBY</th>
         <th>FPOI_DTCREATED</th>
         <th>FPOI_MODIFIEDBY</th>
         <th>FPOI_DTMODIFIED</th>-->
   </thead>
</table>