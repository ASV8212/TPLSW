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
            <ul title="Approval Note" data-aria="LSW_TAPPLNAPPROV|AAPR|" data-popup="No"  class="nav FormPageMultiTab">
               ${SUBPAGETABDATA}
            </ul>
         </div>
      </div>
      </br>
      <!-- Start -->
      <div class="HiddenBTN">
         <input type="button" style="display:none" class="DashTrg"  id="BTNLOADMULTIDATA" name="BTNLOADMULTIDATA" /><!-- Other Income -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNLOADBNKMULTIDATA" name="BTNLOADBNKMULTIDATA" /><!-- Banking -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNFINANCLDATA" name="BTNFINANCLDATA" /><!-- Financial -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNEMPWRDATA" name="BTNEMPWRDATA" /><!-- Empowerment -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNASSTDATA" name="BTNASSTDATA" /><!-- Asset -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNREPTDATA" name="BTNREPTDATA" /><!-- Report -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNSANCCONDDATA" name="BTNSANCCONDDATA" /><!-- Sanction Condition -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNBUSINESSDATA" name="BTNBUSINESSDATA" /><!-- Business Details -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNLOANSDATA" name="BTNLOANSDATA" /><!-- Loans Details -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNEUDATA" name="BTNEUDATA" /><!-- EndUse Details -->
		 <input type="button" style="display:none" class="DashTrg"  id="BTNMITIGDATA" name="BTNMITIGDATA" /><!-- Strengths & Mitigants -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNREFERDATA" name="BTNREFERDATA" /><!-- Reference Check -->
         
      </div>
      <div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
         <!-- Family Background Start -->
         <div class="card ">
            <!-- Card header -->
            <div class="card-header Btxt7 active" role="tab" id="headingOne1">
               <!-- data-multidata="|PrcsID||ApproveNote1|AAPRDBfields|LSW_SGETFMLYDTL" -->
               <a class="collapsed Btxt8 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="" data-aria="LSW_TAPPLNAPPROV|AAPR" data-parent="#accordionEx" href="#collapseOne1"
                  aria-expanded="true" aria-controls="collapse1">
               Family Background<i class="fa rotate-icon fa-minus-circle"></i>
               </a>
            </div>
            <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
               data-parent="#accordionEx">
               <!-- <div class="DynamicPageGrid" data-val="PROPTXTHDR|Employment" id="ApproveNote1" style="display:none"> -->
               <div class="card-body px-lg-5 pt-0" >
                  </br>
                  <form>
                     <input type="text" id="AAPR_PRCSID" hidden="hidden" name="AAPR_PRCSID" class="form-control AAPRDBfields">
                     <input type="text" id="AAPR_ACTIVITYID" hidden="hidden" name="AAPR_ACTIVITYID" class="form-control AAPRDBfields">
                     <input type="text" id="AAPR_CREATEDBY" hidden="hidden" name="AAPR_CREATEDBY" class="form-control AAPRDBfields">
                     <input type="text" id="AAPR_DTCREATED" hidden="hidden" name="AAPR_DTCREATED" class="form-control AAPRDBfields">
                     <input type="text" id="AAPR_MODIFIEDBY" hidden="hidden" name="AAPR_MODIFIEDBY" class="form-control AAPRDBfields">
                     <input type="text" id="AAPR_DTMODIFIED" hidden="hidden"  name="AAPR_DTMODIFIED" class="form-control AAPRDBfields">
                     <input type="text" id="AAPR_APROVBTN" hidden="hidden"  name="AAPR_APROVBTN" class="form-control">
					 <div class="form-row">
                        <div class="col">
                           <div class="md-form">
                              <textarea id="AAPR_DESC" name="AAPR_DESC" maxlength="4000" class="form-control AAPRDBfields btxt24"   style="height: 130px;width:1150px;"></textarea>
                           </div>
                        </div>
                     </div>
                     </br>
                     <div class="form-row">
                        <div class="col d-flex justify-content-center">
                           <button type="button" id="Save1" data-aria="LSW_TAPPLNAPPROV|AAPR" data-form="FamilyBackground" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                           <button type="button" data-aria="LSW_TAPPLNAPPROV|AAPR" data-form="FamilyBackground" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                        </div>
                     </div>
                  </form>
               </div>
               <!--  </div> -->
            </div>
         </div>
         <!-- Family Background End -->
         <!-- Business Details Start -->
         <div class="card BUSINESS">
            <div class="card-header Btxt7" role="tab" id="heading2">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNBUSINESSDATA" data-aria="" data-parent="#accordionEx" href="#collapseTwo2"
                  aria-expanded="true" aria-controls="collapse1">
               Business Details<i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <input type="text" id="ABND_PRCSID" hidden="hidden" name="ABND_PRCSID" class="form-control ABNDDBfields ">
            <input type="text" id="ABND_ACTIVITYID" hidden="hidden" name="ABND_ACTIVITYID" class="form-control ABNDDBfields ">
            <input type="text" id="ABND_CREATEDBY" hidden="hidden" name="ABND_CREATEDBY" class="form-control ABNDDBfields ">
            <input type="text" id="ABND_DTCREATED" hidden="hidden" name="ABND_DTCREATED" class="form-control  ABNDDBfields">
            <input type="text" id="ABND_MODIFIEDBY" hidden="hidden" name="ABND_MODIFIEDBY" class="form-control ABNDDBfields ">
            <input type="text" id="ABND_DTMODIFIED" hidden="hidden"  name="ABND_DTMODIFIED" class="form-control ABNDDBfields ">
            <input type="text" id="ABND_FIRMPAGE" hidden="hidden"  name="ABND_FIRMPAGE" class="form-control ABNDDBfields ">
             <input type="text" id="ABND_LPDSGRD" hidden="hidden"  name="ABND_LPDSGRD" class="form-control ABNDDBfields ">
           


             <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
               <span class="HyperControls FltRight" >
		               <a onclick="AddPageMultiData('ABFD_FIRMCONT',$('#ABFD_PRCSID').val(),'FIRM','ApproveNote2','ABFDDBfields')" id="FIRM" class="Btxt4 FltRight ADDBTN"  href="#">+ Add a Firm</a>
		               <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
		            </span>
                        </br>
               <div data-for="ApproveNote2" class="ApproveNote2"> 
               </div>
                     </br>
                    
                     <div class="DynamicPageGrid" data-val="PROPTXTHDR|FIRM" id="ApproveNote2" style="display:none">
                       <div class="card-body px-lg-5 pt-0 DYNROW" >
                       <form> 
					   <input type="text" id="ABFD_PRCSID" hidden="hidden" name="ABFD_PRCSID" class="form-control ABFDDBfields ">
                        <input type="text" id="ABFD_ACTIVITYID" hidden="hidden" name="ABFD_ACTIVITYID" class="form-control ABFDDBfields ">
                        <input type="text" id="ABFD_CREATEDBY" hidden="hidden" name="ABFD_CREATEDBY" class="form-control ABFDDBfields ">
                        <input type="text" id="ABFD_DTCREATED" hidden="hidden" name="ABFD_DTCREATED" class="form-control  ABFDDBfields">
                        <input type="text" id="ABFD_MODIFIEDBY" hidden="hidden" name="ABFD_MODIFIEDBY" class="form-control ABFDDBfields ">
                        <input type="text" id="ABFD_DTMODIFIED" hidden="hidden"  name="ABFD_DTMODIFIED" class="form-control ABFDDBfields ">
                        <input type="text" id="ABFD_FIRMCONT" hidden="hidden"  name="ABFD_FIRMCONT" class="form-control ABFDDBfields ">
                        <input type="text" id="ABFD_FIRMNAMEVAL" hidden="hidden"  name="ABFD_FIRMNAMEVAL" class="form-control ABFDDBfields ">
                        </br>
						         <div class="form-row">
                                   <div class="col ">
                                    <div class="FltRight DELBTNTXT">
                                         Delete Firm Details
                                      <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="FCBD_PRCSID|FCBD_ACCNTSEQNO|DELETEFIRMDETAILS" class="DELBTN   DELETEFIRMDETAILS"/>
                                     </div>    
                                 </div>     
                                </div> 
                        <div class="form-row">
                           <div id="PROPTXTHDR" class="col Btxt10"></div>
                        </div>
                        <div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 <select class=" md-form colorful-select dropdown-primary ABFDDBfields DataToFld" onchange="GetInduestry(this,'ABFD_INDUSCATRY'+$(this).closest('.DYNROW').attr('data-row'),'ABFD_INDUSCATRY','Page','','ABFD_CONSTITUTION'+$(this).closest('.DYNROW').attr('data-row'))" data-change="ABFD_FIRMNAMEVAL" id="ABFD_FIRMNAME" name="ABFD_FIRMNAME">
                                 </select>
                                 <label class="mdb-main-label BTxt9">Name of Firm<span class="MndtryAstr">*</span></label>
                              </div>
                           </div>
                           <div class="col">
                              <div class="md-form">
                                 <select class=" md-form colorful-select dropdown-primary CONSM ABFDDBfields" disabled onchange="CheckConsti('ABFD_FIRMNAME'+$(this).closest('.DYNROW').attr('data-row'),this,'Page','')" id="ABFD_CONSTITUTION" name="ABFD_CONSTITUTION">
                                    <option value="" >--Select--</option>
                                    <option value="Partnership firms">Partnership firms</option>
                                    <option value="LLP">LLP</option>
                                    <option value="HUF">HUF</option>
			      			        <option value="Private Ltd">Private Ltd</option>
			      			        <option value="Public Ltd">Public Ltd</option>
			      			        <option value="Proprietorship">Proprietorship</option>
                                 </select>
                                 <label class="mdb-main-label BTxt9">Constitution<span class="MndtryAstr">*</span></label>
                              </div>
                           </div>
                           <!-- col-md-1 -->
                        </div>
                        <div class="form-row OTHFIRM" style="display:none">
                           <div class="col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_OTHFIRM" maxlength="30" onchange="getOthname(this,'ABFD_INDUSCATRY'+$(this).closest('.DYNROW').attr('data-row'))"  name="ABFD_OTHFIRM" class="form-control NoSpecialChar ABFDDBfields">
                                 <label for="ABFD_OTHFIRM" class="">Others<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
                        </div>
                        <div class="form-row PARTNERFARM" style="display:none">
                           <div class="col Btxt10">LIST OF PARTNERS / DIRECTOR / SHAREHOLDER</div>
                        </div>
						
                         <div class="form-row PARTNERFARM" style="display:none">						
                            <div class="col">
                               <input type="button" data-button="GridButton" data-value="LPDSTable|LSW_SLPDSGRDDETL|PrcsID|ABFD_FIRMCONT||5,6|LPDSGRID" style="display:none" class="DashTrg ABFDDBfields MultiGridTrg" id="BTNLPDSGRD" name="BTNLPDSGRD" />
                               <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display ABFDDBfields DataGrid" name="LPDSTable" id="LPDSTable">
                               </table>
                           </div> 
                         </div>
                         <div class="form-row PARTNERFARM" style="display:none">
                             <div class="col-md-4">
                                 <div class="md-form">
                                      <div class="HyperControls"> 
                                           <a class="Btxt4 AddLPDS ADDBTN  ABFDDBfields" name="AddLPDSTable"  data-table="LPDSTable" href="#">+ Add</a>
                                      </div>
                                 </div>
                             </div>
                         </div>
                        <div class="form-row">
                         <input type="text" id="ABFD_INDUSCATRY" disabled  name="ABFD_INDUSCATRY" class="form-control Btxt17  DSVLBL ABFDDBfields ">
                           <!-- <div class="col Btxt10">Manufacturing</div>-->
                        </div>
                        <div class="form-row">
                           <div class="col Btxt10">BUSINESS PROCESS</div>
                        </div>
                        <div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 <textarea id="ABFD_BUSNESSPROG" name="ABFD_BUSNESSPROG" class="form-control ABFDDBfields btxt24"  maxlength="4000" style="height: 130px;width:1150px;"></textarea>
                              </div>
                           </div>
                        </div>
                        <div class="form-row">
                           <div class="col Btxt10">NO. OF SKILLED</div>
                        </div>
                        <div class="form-row">
                           <div class="col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_SKILLED" maxlength="3"  name="ABFD_SKILLED" class="form-control IsNumberFields NoSpecialChar FBCLR ABFDDBfields">
                                 <label for="ABFD_SKILLED" class="">Skilled<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
                           <div class="col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_UNSKILLED" maxlength="3"  name="ABFD_UNSKILLED" class="form-control IsNumberFields NoSpecialChar FBCLR ABFDDBfields">
                                 <label for="ABFD_UNSKILLED" class="">Unskilled<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
                           <div class="col-md-4">
                           </div>
                        </div>
                        <div class="form-row">
                           <div class="col Btxt10">WORKING CYCLE</div>
                        </div>
                        <div class="form-row">
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <div class="col Btxt15">Stages</div>
                                 <!-- <label for="" class="Btxt4">Particulars<span class="MndtryAstr"></span></label> -->
                              </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                              
                                 <div class="col Btxt15">No. of Days</div>
                                 <!-- <label for="" class="Btxt4">As Per Site<span class="MndtryAstr"></span></label> -->
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
                        </br>
                        <div class="form-row ABFD_INDUSCATRY" style="display:none">
                           <div class=" col-md-4 GryShd">
                              <div class="md-form">
                                 <input type="text" id="" disabled value="Raw Materials"  maxlength="3"  name="" class="form-control DSVLBL Btxt17 NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_RAWDAYS" style="width:150"  maxlength="3"  name="ABFD_RAWDAYS" class="form-control FBCLR ABFDDBfields IsNumberFields NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
                        <div class="form-row ABFD_INDUSCATRY" style="display:none">
                           <div class=" col-md-4 GryShd">
                              <div class="md-form">
                              <input type="text" id="" disabled  value="WIP"  maxlength="3"  name="" class="form-control DSVLBL Btxt17 NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_WIPDAYS" style="width:150"  maxlength="3"  name="ABFD_WIPDAYS" class="form-control ABFDDBfields FBCLR IsNumberFields NoSpecialChar">
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
                        <div class="form-row ABFD_INDUSCATRY" style="display:none">
                           <div class=" col-md-4 GryShd">
                              <div class="md-form">
                              <input type="text" id=""  disabled value="Finished Product"  maxlength="3"  name="" class="form-control DSVLBL Btxt17  NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_PRODDAYS" style="width:150"  maxlength="3"  name="ABFD_PRODDAYS" class="form-control ABFDDBfields IsNumberFields FBCLR NoSpecialChar">
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
                        <div class="form-row">
                           <div class=" col-md-4 GryShd">
                              <div class="md-form">
                              <input type="text" id="" disabled value="Debitor Credit Period"  maxlength="3"  name="" class="form-control DSVLBL Btxt17 NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_DEBITORDAYS" style="width:150"  maxlength="3"  name="ABFD_DEBITORDAYS" class="form-control ABFDDBfields FBCLR RELMND IsNumberFields NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
                        <div class="form-row">
                           <div class=" col-md-4 GryShd">
                              <div class="md-form">
                                <input type="text" id="" disabled value="Creditor Credit Period"  maxlength="3"  name="" class="form-control DSVLBL Btxt17 NoSpecialChar ">
                               </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_CREDITDAYS" style="width:150"  maxlength="3"  name="ABFD_CREDITDAYS" class="form-control ABFDDBfields RELMND FBCLR IsNumberFields NoSpecialChar">
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
                        <div class="form-row">
                           <div class=" col-md-4 GryShd" >
                              <div class="md-form">
                                  <input type="text" id="" disabled value="No. of Clients / Supplies"  maxlength="3"  name="" class="form-control DSVLBL Btxt17 NoSpecialChar ">
                               </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_SUPPLIESDAYS" style="width:150"  maxlength="3"  name="ABFD_SUPPLIESDAYS" class="form-control ABFDDBfields RELMND FBCLR IsNumberFields NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
                        <div class="form-row">
                           <div class=" col-md-4 GryShd">
                              <div class="md-form">
                                   <input type="text" id=""  disabled value="Sister Concern"  maxlength="3"  name="" class="form-control DSVLBL Btxt17 NoSpecialChar ">
                              </div>
                           </div>
                           <div class=" col-md-4">
                              <div class="md-form">
                                 <input type="text" id="ABFD_SISTERDAYS" style="width:250" maxlength="25" name="ABFD_SISTERDAYS" class="form-control  ABFDDBfields FBCLR RELMND NoSpecialChar">
                              </div>
                           </div>
                           <div class=" col-md-4">
                           </div>
                        </div>
						</form>
                        </div>
                        </div>
						
                        </br>
                        <div class="form-row">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="Save2" data-aria="LSW_TAPRBUSNESSDETL|ABND|"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                              <button type="button" data-aria="LSW_TAPRBUSNESSDETL|ABND|" data-card="1" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                           </div>
                        </div>
                     
                  </div>
               </div>
         <!-- Business Details End -->
         <!-- Other Income Start -->

               <div class="card ">
                  <!-- Card header -->
                  <div class="card-header Btxt7" role="tab" id="heading1">
                     <!-- |PrcsID||ApproveNote3|APOIDBfields|LSW_SGETAPPLNTEMPDTL -->
                     <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNLOADMULTIDATA" data-aria="LSW_TCUSEMPINFO|CEMI|CEMI_CUSID|CBSI_CUSID" data-parent="#accordionEx" href="#collapseThree3"
                        aria-expanded="true" aria-controls="collapse1">
                     Other Income<i class="fa fa-plus-circle rotate-icon"></i>
                     </a>
                  </div>
                  <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
                     data-parent="#accordionEx">
                     <div class="card-body px-lg-5 pt-0" >
                        </br>
                        <form>
                           <input type="text" id="APOI_PRCSID" hidden="hidden" name="APOI_PRCSID" class="form-control APOIDBfields">
                           <input type="text" id="APOI_ACTIVITYID" hidden="hidden" name="APOI_ACTIVITYID" class="form-control APOIDBfields">
                           <input type="text" id="APOI_CREATEDBY" hidden="hidden" name="APOI_CREATEDBY" class="form-control APOIDBfields">
                           <input type="text" id="APOI_DTCREATED" hidden="hidden" name="APOI_DTCREATED" class="form-control APOIDBfields">
                           <input type="text" id="APOI_MODIFIEDBY" hidden="hidden" name="APOI_MODIFIEDBY" class="form-control APOIDBfields">
                           <input type="text" id="APOI_DTMODIFIED" hidden="hidden"  name="APOI_DTMODIFIED" class="form-control APOIDBfields">
                           <input type="text" id="APOI_RENTDATA" hidden="hidden" name="APOI_RENTDATA" class="form-control APOIDBfields">
                           <input type="text" id="APOI_OTHRINCM" hidden="hidden"  name="APOI_OTHRINCM" class="form-control APOIDBfields">
                           <div class="form-row">
                              <div class="col Btxt10">RENT DATA</div>
                           </div>
                           </br>
                           <div class="form-row">
                              <div class="col">
                                 <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SGETRENTDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','RENTDATA');" id="BTNRENTDATA" name="BTNRENTDATA" />
                                 <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
                                 </table>
                              </div>
                           </div>
                           </br>
                           <div class="HyperControls">
                              <a type="button" class="Btxt4 ADDBTN" data-toggle="modal" id="PropertyGrid" data-target="" href="#">+ Add a Property</a>
                              <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                           </div>
                           </br>
                           <div class="form-row">
                              <div class="col-md-4">
                                 <div class="md-form">
                                    <div class="select-radio CEMIMndtry">
                                       <div class="custom-control custom-radio custom-control-inline">
                                          <input type="radio" class="custom-control-input APOIDBfields" 	value="Yes" id="AGRINCMYes" name="APOI_AGRINCM">
                                          <label class="custom-control-label" for="AGRINCMYes">Yes</label>
                                       </div>
                                       <div class="custom-control custom-radio custom-control-inline">
                                          <input type="radio" class="custom-control-input APOIDBfields" value="No" id="AGRINCMNo" name="APOI_AGRINCM">
                                          <label class="custom-control-label" for="AGRINCMNo">No</label>
                                       </div>
                                    </div>
                                    <label class="mdb-main-label BTxt9">Agriculture Income</label>
                                 </div>
                              </div>
                              <div class="col-md-4">
                                 <div class="md-form">
                                    <div class="select-radio CEMIMndtry">
                                       <div class="custom-control custom-radio custom-control-inline">
                                          <input type="radio" class="custom-control-input APOIDBfields" 	value="Yes" id="COLLCTEDFRMITRYes" name="APOI_COLLCTEDFRMITR">
                                          <label class="custom-control-label" for="COLLCTEDFRMITRYes">Yes</label>
                                       </div>
                                       <div class="custom-control custom-radio custom-control-inline">
                                          <input type="radio" class="custom-control-input APOIDBfields" value="No" id="COLLCTEDFRMITRNo" name="APOI_COLLCTEDFRMITR">
                                          <label class="custom-control-label" for="COLLCTEDFRMITRNo">No</label>
                                       </div>
                                    </div>
                                    <label class="mdb-main-label BTxt9">Proof Collected Form(7/12) or ITR</label>
                                 </div>
                              </div>
                              <div class="col-md-4">
                                 <div class="md-form">
                                    <input type="text" id="APOI_REMARK" name="APOI_REMARK" class="form-control APOIDBfields   ">
                                    <label for="APOI_REMARK" class="">Remarks<span class="MndtryAstr"></span></label>
                                 </div>
                              </div>
                           </div>
                           <div class="form-row">
                              <div class="col Btxt10">INCOME FROM OTHER FIRM</div>
                           </div>
                           <div data-for="ApproveNote3" class="ApproveNote3"></div>
                           <div class="DynamicPageGrid" data-val="PROPTXTHDR|Firm" id="ApproveNote3" style="display:none">
                              <div class="DYNROW" >
                        <form>
                        <input type="text" id="APIF_PRCSID" hidden="hidden" name="APIF_PRCSID" class="form-control APIFDBfields">
                        <input type="text" id="APIF_ACTIVITYID" hidden="hidden" name="APIF_ACTIVITYID" class="form-control APIFDBfields">
                        <input type="text" id="APIF_DTCREATED" hidden="hidden" name="APIF_DTCREATED" class="form-control APIFDBfields">
                        <input type="text" id="APIF_CREATEDBY" hidden="hidden" name="APIF_CREATEDBY" class="form-control APIFDBfields">
                        <input type="text" id="APIF_DTMODIFIED" hidden="hidden" name="APIF_DTMODIFIED" class="form-control APIFDBfields">
                        <input type="text" id="APIF_MODIFIEDBY" hidden="hidden"  name="APIF_MODIFIEDBY" class="form-control APIFDBfields">
                        <div class="form-row">
                        <div class="col-md-4">
                        <div class="md-form">
                        <input type="text" id="APIF_FRMNAME" name="APIF_FRMNAME" class="form-control APIFDBfields   ">
                        <label for="APIF_FRMNAME" id="PROPTXTHDR" class=""><span class="MndtryAstr"></span></label>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="md-form">
                        <input type="text" id="APIF_FRMREMARK" name="APIF_FRMREMARK" class="form-control APIFDBfields ">
                        <label for="APIF_FRMREMARK" class="">Remarks<span class="MndtryAstr"></span></label>
                        </div>
                        </div>
                        <div class="col-md-2">
                        <div class="md-form DELBTNTXT">
                        <img src="ThemeproLO/Common/Images/Delete_Img.png"   class="DeleteFirm DELBTN" alt="Cinque Terre" width="20" height="20"> 
                        </div>
                        </div>
                        </div>
                        </form>
                        </div>
                        </div>
                        <div class="HyperControls form-row " >
                           <a onclick="AddPageMultiData('',$('#APIF_PRCSID').val(),'','ApproveNote3','APIFDBfields')" class="Btxt4 ADDBTN FltRight"  href="#">+ Add Another Firm</a>
                           <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                        </div>
                        <div class="form-row">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="LSW_TOTHRINCM|APOI"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                              <button type="button" data-aria="LSW_TOTHRINCM|APOI" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                           </div>
                        </div>
                        </form>
                     </div>
                  </div>
               </div>
         
         <!-- Other Income End -->
         <!-- Financials Start -->

         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="headingFour4">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNFINANCLDATA" data-aria="LSW_TFINCLSUMMRY|APFS" data-parent="#accordionEx" href="#collapseFour4"
                  aria-expanded="false" aria-controls="collapseFour4">
               Financials<i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="collapseFour4" class="collapse" role="tabpanel" aria-labelledby="headingFour4"
               data-parent="#accordionEx">
               <div class="card-body px-lg-5 pt-0" >
                  </br>
                  <form>
                     <input type="text" id="APFS_PRCSID" hidden="hidden" name="APFS_PRCSID" class="form-control APFSDBfields">
                     <input type="text" id="APFS_ACTIVITYID" hidden="hidden" name="APFS_ACTIVITYID" class="form-control APFSDBfields">
                     <input type="text" id="APFS_DTCREATED" hidden="hidden" name="APFS_DTCREATED" class="form-control APFSDBfields">
                     <input type="text" id="APFS_CREATEDBY" hidden="hidden" name="APFS_CREATEDBY" class="form-control APFSDBfields">
                     <input type="text" id="APFS_DTMODIFIED" hidden="hidden" name="APFS_DTMODIFIED" class="form-control APFSDBfields">
                     <input type="text" id="APFS_MODIFIEDBY" hidden="hidden"  name="APFS_MODIFIEDBY" class="form-control APFSDBfields">
                     <input type="text" id="APFS_GFINCSUMMRY" hidden="hidden"  name="APFS_GFINCSUMMRY" class="form-control APFSDBfields">
                      <input type="text" id="APFS_SCHEME" hidden="hidden"  name="APFS_SCHEME" class="form-control APFSDBfields">
                     
                     <div class="form-row">
                        <div class="col Btxt10">FINANCIAL SUMMARY</div>
                     </div>
                     
                     <div class="form-row">
                        <div data-for="FINCSUM" class="col FINCSUM"> 
                        </div>
                   </div>
                   <div class="DynamicPageGrid" data-val="PROPTXTHDR|PROPERTY" id="FINCSUM" style="display:none">
                      <div data-row="" class="DYNROW">
                         <form>
                           <input type="text" id="EGCD_PRCSID" hidden="hidden" name="EGCD_PRCSID" class="form-control EGCDDBfields">
                           <input type="text" id="EGCD_ACTIVITYID" hidden="hidden" name="EGCD_ACTIVITYID" class="form-control EGCDDBfields">
                           <input type="text" id="EGCD_DTCREATED" hidden="hidden" name="EGCD_DTCREATED" class="form-control EGCDDBfields">
                           <input type="text" id="EGCD_CREATEDBY" hidden="hidden" name="EGCD_CREATEDBY" class="form-control EGCDDBfields">
                           <input type="text" id="EGCD_DTMODIFIED" hidden="hidden" name="EGCD_DTMODIFIED" class="form-control EGCDDBfields">
                           <input type="text" id="EGCD_MODIFIEDBY" hidden="hidden" name="EGCD_MODIFIEDBY" class="form-control EGCDDBfields">
                           <input type="text" id="EGCD_CUSID" hidden="hidden" name="EGCD_CUSID" class="form-control EGCDDBfields">
        <input type="text" id="TYPE" hidden="hidden" name="TYPE" class="form-control EGCDDBfields">
       <!--  <input type="text" id="EGCD_CUSNAME" name="EGCD_CUSNAME" hidden="hidden" class="form-control EGCDDBfields">  -->
                          <input type="text" id="EGCD_SCHEME" name="EGCD_SCHEME" hidden="hidden" class="form-control EGCDDBfields">
                          <input type="text" id="EGCD_PROFILE"  name="EGCD_PROFILE" hidden="hidden"  class="form-control EGCDDBfields" value="">
                          <input type="text" id="EGCD_YEAR"  name="EGCD_YEAR" hidden="hidden" value="P"  class="form-control EGCDDBfields" value="">
                          
                          <input type="text" id="EGCD_CUSNAME"  name="EGCD_CUSNAME"  class="form-control DSVLBL Btxt04  EGCDDBfields" value="">
                          <input type="text" id="EGCD_FIRMID"  name="EGCD_FIRMID"  hidden="hidden" class="form-control DSVLBL Btxt04  EGCDDBfields" value="">
                          
                     <div class="NSAL">
                     <div class="form-row">
                         <div class="col">
                            <input type="button" data-button="GridButton" data-value="FINANCTable|LSW_SGETAPPRFINSMRY|PrcsID|EGCD_CUSID~EGCD_FIRMID~P||4,5,6|FINCSUMGRID" style="display:none" class="DashTrg EGCDDBfields MultiGridTrg" id="BTNINCMGRD" name="BTNINCMGRD" />
                            <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display EGCDDBfields DataGrid" name="FINANCTable" id="FINANCTable">
                            </table>
                       </div>
                     </div>
                     </div>
                     
                    <!--  
                     <div class="form-row">
                        <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table5',{spname:'LSW_SGETFINCLMSTRSUMMRY',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'',brid:$('#PrcsID').val(),MnuId:'FS'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','FINANCIAL');" id="BTNFINCLMSTDTL" name="BTNFINCLMSTDTL" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table5">
                           </table>
                        </div>
                     </div>-->
                </form>
                </div>
                </div>  
                     <div class="form-row">
                        <div class="col Btxt10">COMMENT</div>
                     </div>
                     <div class="form-row">
                        <div class="col">
                           <div class="md-form">
                              <textarea id="APFS_FINCCMNT" name="APFS_FINCCMNT" class="form-control APFSDBfields btxt24" maxlength="40000"  style="height: 130px;width:1150px;"></textarea>
                           </div>
                        </div>
                     </div>
                     <div class="form-row">
                        <div class="col d-flex justify-content-center">
                           <button type="button" id="Save4" data-aria="LSW_TFINCLSUMMRY|APFS"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                           <button type="button" data-aria="LSW_TFINCLSUMMRY|APFS" data-card="3" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <!-- Financials End -->
         <!-- Banking Start -->
         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="heading1">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNLOADBNKMULTIDATA" data-aria="LSW_TAPPBANKINGDTL|APBD" data-parent="#accordionEx" href="#collapseFive5"
                  aria-expanded="false" aria-controls="collapse1">
               Banking<i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="collapseFive5" class="collapse" role="tabpanel" aria-labelledby="headingFive5"
               data-parent="#accordionEx">
               <div class="card-body px-lg-5 pt-0" >
                  </br>
                  <form>
                     <input type="text" id="APBD_PRCSID" hidden="hidden" name="APBD_PRCSID" class="form-control APBDDBfields">
                     <input type="text" id="APBD_ACTIVITYID" hidden="hidden" name="APBD_ACTIVITYID" class="form-control APBDDBfields">
                     <input type="text" id="APBD_DTCREATED" hidden="hidden" name="APBD_DTCREATED" class="form-control APBDDBfields">
                     <input type="text" id="APBD_CREATEDBY" hidden="hidden" name="APBD_CREATEDBY" class="form-control APBDDBfields">
                     <input type="text" id="APBD_DTMODIFIED" hidden="hidden" name="APBD_DTMODIFIED" class="form-control APBDDBfields">
                     <input type="text" id="APBD_MODIFIEDBY" hidden="hidden"  name="APBD_MODIFIEDBY" class="form-control APBDDBfields">
                     <div class="form-row">
                        <div class="col">
                           <div class="md-form">
                              <textarea id="APBD_CMNT" name="APBD_CMNT" class="form-control APBDDBfields btxt24" maxlength="4000"  style="height: 130px;width:1150px;"></textarea>
                           </div>
                        </div>
                     </div>
                      <div class="form-row">
                     <div class="col-md-8">
                           <div class="md-form">
                              <select class="md-form colorful-select dropdown-primary APBDDBfields" data-change="APBD_BNKDETL" onchange="AccntOnChng()" id="APBD_ACCNTNO" name="APBD_ACCNTNO">
                                 <option value="" >--Select--</option>
                              </select>
                              <label class="mdb-main-label BTxt9">Bank details for Repayment</label>
                           </div>
                        </div>
                        </div>
                     <div class="form-row">
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="APBD_BANKNAME" disabled name="APBD_BANKNAME" class="form-control APBDDBfields ">
                              <label for="APBD_BANKNAME" class="">Bank Name<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="APBD_ACCNTHLDRNAME" disabled name="APBD_ACCNTHLDRNAME" class="form-control APBDDBfields ">
                              <label for="APBD_ACCNTHLDRNAME" class="">Bank Account for Repayment<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                     </div>
                     <div class="form-row">
                        <div class="col d-flex justify-content-center">
                           <button type="button" id="SaveBNK" data-aria="LSW_TAPPBANKINGDTL|APBD"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                           <button type="button" data-aria="LSW_TAPPBANKINGDTL|APBD" data-card="4" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <!-- Banking End -->
         <!-- Loan Start -->
         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="heading1">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNLOANSDATA" data-aria="LSW_TCUSEMPINFO|CEMI|CEMI_CUSID|CBSI_CUSID" data-parent="#accordionEx" href="#collapseSix6"
                  aria-expanded="true" aria-controls="collapse1">
               Loans<i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="collapseSix6" class="collapse" role="tabpanel" aria-labelledby="headingSix6"
               data-parent="#accordionEx">
               <div class="card-body px-lg-5 pt-0">
               <form> 
                <input type="text" id="ALNM_PRCSID" hidden="hidden" name="ALNM_PRCSID" class="form-control ALNMDBfields">
                <input type="text" id="ALNM_ACTIVITYID" hidden="hidden" name="ALNM_ACTIVITYID" class="form-control ALNMDBfields">
                <input type="text" id="ALNM_CREATEDBY" hidden="hidden" name="ALNM_CREATEDBY" class="form-control ALNMDBfields">
                <input type="text" id="ALNM_DTCREATED" hidden="hidden" name="ALNM_DTCREATED" class="form-control ALNMDBfields">
                <input type="text" id="ALNM_MODIFIEDBY" hidden="hidden" name="ALNM_MODIFIEDBY" class="form-control ALNMDBfields">
                <input type="text" id="ALNM_DTMODIFIED" hidden="hidden"  name="ALNM_DTMODIFIED" class="form-control ALNMDBfields">
                
                <input type="text" id="ALNM_CUSDATA" hidden="hidden" name="ALNM_CUSDATA" class="form-control ALNMDBfields">
                <input type="text" id="ALNM_CUSDATAGED" hidden="hidden"  name="ALNM_CUSDATAGED" class="form-control ALNMDBfields">
                        
               <div data-for="ApproveNote6" class="ApproveNote6"> 
               </div>
               <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="ApproveNote6" style="display:none">
                  <div class="DYNROW" >
                     </br>
                     <form>
                        <input type="text" id="ALCD_PRCSID" hidden="hidden" name="ALCD_PRCSID" class="form-control ALCDDBfields">
                        <input type="text" id="ALCD_ACTIVITYID" hidden="hidden" name="ALCD_ACTIVITYID" class="form-control ALCDDBfields">
                        <input type="text" id="ALCD_CREATEDBY" hidden="hidden" name="ALCD_CREATEDBY" class="form-control ALCDDBfields">
                        <input type="text" id="ALCD_DTCREATED" hidden="hidden" name="ALCD_DTCREATED" class="form-control ALCDDBfields">
                        <input type="text" id="ALCD_MODIFIEDBY" hidden="hidden" name="ALCD_MODIFIEDBY" class="form-control ALCDDBfields">
                        <input type="text" id="ALCD_DTMODIFIED" hidden="hidden"  name="ALCD_DTMODIFIED" class="form-control ALCDDBfields">
                        
                         <input type="text" id="ALCD_CUSID" hidden="hidden"  name="ALCD_CUSID" class="form-control ALCDDBfields">
                        </br>
                        <div class="form-row">
                            <div class="col-md-6"> 
                               <input type="text" id="ALCD_CUSNAME" disabled name="ALCD_CUSNAME" class="form-control DSVLBL Btxt04 ALCDDBfields" value="">
                             </div>
                             <div class="col-md-6"> 
                             </div>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                 <input type="button" data-button="GridButton" data-value="LoansTable|LSW_SAPPRLONSGRDDATA|PrcsID|ALCD_CUSID||7|APPRLOANGRID" style="display:none" class="DashTrg ALCDDBfields LoansTable MultiGridTrg" id="BTNLOANGRD" name="BTNLOANGRD" />
                                 <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display ALCDDBfields DataGrid" name="LoansTable" id="LoansTable">
                                 </table>
                            </div>
                        </div>
                        <div class="form-row">
                           <div class="col-md-4 BluShd"> 
                                <label for="" class="Btxt10">Total<span class="MndtryAstr"></span></label>
                           </div>
                           <div class="col-md-2 BluShd"> 
                                <input type="text" id="ALCD_TOTEMI" maxlength="15" name="ALCD_TOTEMI" value="0" class="form-control DSVLBL Btxt10 IsCURCommaFields IsNumberFields NoSpecialChar  ALCDDBfields">
                           </div>
                            <div class="col-md-1 BluShd"> 
                                <input type="text" id="ALCD_TOTLONAMT" maxlength="15"  name="ALCD_TOTLONAMT" value="0" class="form-control DSVLBL Btxt10 IsCURCommaFields IsNumberFields NoSpecialChar  ALCDDBfields">
                           </div>
                           <div class="col-md-5 BluShd"> 
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
               <div class="form-row">
        	        <div class="col Btxt10">COMMENTS</div>
               </div>
               <div class="form-row">
                    <div class="col">
                         <div class="md-form">
                              <textarea id="ALNM_COMMENT" name="ALNM_COMMENT" class="form-control ALNMDBfields btxt24" maxlength="4000"  style="height: 130px;width:1150px;"></textarea>
                         </div>
                     </div>
                 </div>
                 <div class="form-row">
                     <div class="col d-flex justify-content-center">
                         <button type="button" id="Save3" data-aria="LSW_TAPPRLOANSMAIN|ALNM"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                         <button type="button" data-aria="LSW_TAPPRLOANSMAIN|ALNM" data-card="5" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                     </div>
                 </div>
              </form>
             </div>
          </div>
         </div>
         <!-- Loan End -->
         <!-- Report Start -->
         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="headingSeven7">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNREPTDATA" data-aria="LSW_TCUSEMPINFO|CEMI|CEMI_CUSID|CBSI_CUSID" data-parent="#accordionEx" href="#collapseSeven7"
                  aria-expanded="true" aria-controls="collapse1">
               Reports<i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="collapseSeven7" class="collapse" role="tabpanel" aria-labelledby="headingSeven7"
               data-parent="#accordionEx">
               <div class="card-body px-lg-5 pt-0" >
                  </br>
                  <form>
                     <input type="text" id="APRT_PRCSID" hidden="hidden" name="APRT_PRCSID" class="form-control APRTDBfields">
                     <input type="text" id="APRT_ACTIVITYID" hidden="hidden" name="APRT_ACTIVITYID" class="form-control APRTDBfields">
                     <input type="text" id="APRT_DTCREATED" hidden="hidden" name="APRT_DTCREATED" class="form-control APRTDBfields">
                     <input type="text" id="APRT_CREATEDBY" hidden="hidden" name="APRT_CREATEDBY" class="form-control APRTDBfields">
                     <input type="text" id="APRT_DTMODIFIED" hidden="hidden" name="APRT_DTMODIFIED" class="form-control APRTDBfields">
                     <input type="text" id="APRT_MODIFIEDBY" hidden="hidden"  name="APRT_MODIFIEDBY" class="form-control APRTDBfields">
                     <input type="text" id="APRT_PROPGRD" hidden="hidden"  name="APRT_PROPGRD" class="form-control APRTDBfields">
                     <input type="text" id="APRT_APPLN" hidden="hidden"  name="APRT_APPLN" class="form-control APRTDBfields">
                     <input type="text" id="APRT_RESN" hidden="hidden"  name="APRT_RESN" class="form-control APRTDBfields">
					 <input type="text" id="APRT_COMLINK" hidden="hidden"  name="APRT_COMLINK" class="form-control APRTDBfields">
                     <div class="form-row">
                        <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table7',{spname:'LSW_SGETRPT',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||6','REPORT');" id="BTNREPT" name="BTNREPT" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table7">
                           </table>
                        </div>
                     </div>
                     <div class="form-row">
                        <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table8',{spname:'LSW_SGETAPPLNT',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5','APPLICANT');" id="BTNREPT1" name="BTNREPT1" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table8">
                           </table>
                        </div>
                     </div>
					 <div class="form-row">
              <div class=" col-md-4">
                <div class="md-form">
                   
                  <span type="text" class="DataFld Btxt10 ARCLDBfields">Reference Links</span>
				 </div>
              </div>
              
            </div>
			<div data-for="CommonLink" class="CommonLink"> 
         </div>
         <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="CommonLink" style="display:none">
         <div data-row="" class=" DYNROW">
         <input type="text" id="ARCL_PRCSID" hidden="hidden" name="ARCL_PRCSID" class="form-control ARCLDBfields">
         <input type="text" id="ARCL_ACTIVITYID" hidden="hidden" name="ARCL_ACTIVITYID" class="form-control ARCLDBfields">
         <input type="text" id="ARCL_CREATEDBY" hidden="hidden" name="ARCL_CREATEDBY" class="form-control ARCLDBfields">
         <input type="text" id="ARCL_DTCREATED" hidden="hidden" name="ARCL_DTCREATED" class="form-control ARCLDBfields">
         <input type="text" id="ARCL_MODIFIEDBY" hidden="hidden" name="ARCL_MODIFIEDBY" class="form-control ARCLDBfields">
         <input type="text" id="ARCL_DTMODIFIED" hidden="hidden" name="ARCL_DTMODIFIED" class="form-control ARCLDBfields">
         <input type="text" id="ARCL_LINKURL" hidden="hidden" name="ARCL_LINKURL" class="form-control ARCLDBfields">
            
            <div class="form-row">
              <div class=" col-md-4">
                <div class="md-form"> 
				   <!--<input type="text" id="ARCL_LINKNAME" onclick="redirectURL('ARCL_LINKURL'+$(this).closest('.DYNROW').attr('data-row'));" href="#" name="ARCL_LINKNAME" class="form-control Btxt4 DSVLBL ARCLDBfields">-->
          
                    <span onclick="redirectURL('ARCL_LINKURL'+$(this).closest('.DYNROW').attr('data-row'));" href="#"  class="DataFld Btxt4  ARCLDBfields" id="ARCL_LINKNAME" name="ARCL_LINKNAME"></span>
				 </div>
              </div>
              
            </div>
          </div>
         </div>
                     <div class="form-row">
                        <div class=" col-md-4">
                           <div class="md-form">
                              <label for="" class="Btxt4">Google Search<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                        <div class=" col-md-4">
                           <div class="md-form">
                              <div  class="select-radio ">
                                 <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input APRTDBfields" value="Yes" id="GOOGLESRCHYES" name="APRT_GOOGLESRCH">
                                    <label class="custom-control-label" for="GOOGLESRCHYES">Yes</label>
                                 </div>
                                 <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input APRTDBfields" value="No" id="GOOGLESRCHNO" name="APRT_GOOGLESRCH">
                                    <label class="custom-control-label" for="GOOGLESRCHNO">No</label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class=" col-md-4">
                        </div>
                     </div>
                     <div class="form-row">
                        <div class=" col-md-4">
                           <div class="md-form">
                              <label for="" class="Btxt4">Commercial CIBIL<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                        <div class=" col-md-4">
                           <div class="md-form">
                              <div  class="select-radio ">
                                 <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input APRTDBfields" value="Yes" id="CMRSCIBILYES" name="APRT_CMRSCIBIL">
                                    <label class="custom-control-label" for="CMRSCIBILYES">Yes</label>
                                 </div>
                                 <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input APRTDBfields" value="No" id="CMRSCIBILNO" name="APRT_CMRSCIBIL">
                                    <label class="custom-control-label" for="CMRSCIBILNO">No</label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class=" col-md-4">
                        </div>
                     </div>
                     <div class="form-row">
                        <div class=" col-md-4">
                           <div class="md-form">
                              <label for="" class="Btxt4">Credit Score<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                        <div class=" col-md-4">
                           <div class="md-form">
                              <input type="text" id="APRT_CRDTSCR" disabled name="APRT_CRDTSCR" class="form-control APRTDBfields">
                           </div>
                        </div>
                        <div class=" col-md-4">
                        </div>
                     </div>
                     <div class="form-row">
                        <div class=" col-md-4">
                           <div class="md-form">
                              <label for="" class="Btxt4">Decision as per Credit Model<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                        <div class=" col-md-4">
                           <div class="md-form">
                              <input type="text" id="APRT_CRMDL" disabled name="APRT_CRMDL" class="form-control APRTDBfields">
                           </div>
                        </div>
                        <div class=" col-md-4">
                        </div>
                     </div>
                     <div class="form-row">
                        <div class="col Btxt10">REASONS</div>
                        </div>
                        <div data-for="MUSTTOHAVE" class="MUSTTOHAVE"> 
                        </div>
                        <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="MUSTTOHAVE" style="display:none">
                           <div data-row="" class="card-body px-lg-5 pt-0 DYNROW">
                              <div class="form-row">
                                 <div class=" col-md-12">
                                    <div class="md-form">
                                       <span id="PROPTXTHDR" class="Btxt10"></span>    
                                       <input type="text" id="APRG_RESN" disabled maxlength="600" name="APRG_RESN" class="form-control NoSpecialChar APRGDBfields  ">
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     <div class="form-row">
                        <div class="col d-flex justify-content-center">
						     <button type="button" id="Save7" data-aria="LSW_APPRREPORT|APRT" style="display:none" data-card="6" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                        
                           <button type="button" id="Save" data-aria="LSW_APPRREPORT|APRT" data-card="6" class="btn btn-Syeloutline waves-effect waves-light FormSave">Next</button>   
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <!-- Report End -->
         <!-- Collateral Start -->
         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="heading1">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="" data-aria="LSW_TAPPRCOLLATERAL|APPC" data-parent="#accordionEx" href="#collapseEight8"
                  aria-expanded="false" aria-controls="collapse1">
               Collateral<i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="collapseEight8" class="collapse" role="tabpanel" aria-labelledby="headingEight8"
               data-parent="#accordionEx">
               <div class="card-body px-lg-5 pt-0 " >
                  </br>
                  <form>
                     <input type="text" id="APPC_PRCSID" hidden="hidden" name="APPC_PRCSID" class="form-control APPCDBfields">
                     <input type="text" id="APPC_ACTIVITYID" hidden="hidden" name="APPC_ACTIVITYID" class="form-control APPCDBfields">
                     <input type="text" id="APPC_DTCREATED" hidden="hidden" name="APPC_DTCREATED" class="form-control APPCDBfields">
                     <input type="text" id="APPC_CREATEDBY" hidden="hidden" name="APPC_CREATEDBY" class="form-control APPCDBfields">
                     <input type="text" id="APPC_DTMODIFIED" hidden="hidden" name="APPC_DTMODIFIED" class="form-control APPCDBfields">
                     <input type="text" id="APPC_MODIFIEDBY" hidden="hidden"  name="APPC_MODIFIEDBY" class="form-control APPCDBfields">
                     <div class="form-row">
                        <div class="col">
                           <div class="md-form">
                              <textarea id="APPC_COLLCMNT" name="APPC_COLLCMNT" class="form-control APPCDBfields btxt24" maxlength="4000"  style="height: 130px;width:1150px;"></textarea>
                           </div>
                        </div>
                     </div>
                     </br>
                     <div class="form-row">
                        <div class="col d-flex justify-content-center">
                           <button type="button" id="Save8" data-aria="LSW_TAPPRCOLLATERAL|APPC" data-form="FamilyBackground" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                           <button type="button" data-aria="LSW_TAPPRCOLLATERAL|APPC" data-form="FamilyBackground" data-card="7" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <!-- Collateral End -->
         <!-- End Use Start -->
         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="heading1">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNEUDATA" data-aria="LSW_TCUSEMPINFO|CEMI|CEMI_CUSID|CBSI_CUSID" data-parent="#accordionEx" href="#collapseNine9"
                  aria-expanded="true" aria-controls="collapse1">
               End Use<i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="collapseNine9" class="collapse" role="tabpanel" aria-labelledby="headingNine9"  data-parent="#accordionEx">
               <div class="card-body px-lg-5 pt-0">
               <form>
                 <input type="text" id="AEUM_PRCSID" hidden="hidden" name="AEUM_PRCSID" class="form-control AEUMDBfields">
                 <input type="text" id="AEUM_ACTIVITYID" hidden="hidden" name="AEUM_ACTIVITYID" class="form-control AEUMDBfields">
                 <input type="text" id="AEUM_CREATEDBY" hidden="hidden" name="AEUM_CREATEDBY" class="form-control AEUMDBfields">
                 <input type="text" id="AEUM_DTCREATED" hidden="hidden" name="AEUM_DTCREATED" class="form-control AEUMDBfields">
                 <input type="text" id="AEUM_MODIFIEDBY" hidden="hidden" name="AEUM_MODIFIEDBY" class="form-control AEUMDBfields">
                 <input type="text" id="AEUM_DTMODIFIED" hidden="hidden"  name="AEUM_DTMODIFIED" class="form-control AEUMDBfields">
                        
                 <input type="text" id="AEUM_ENDUSEBTGRD" hidden="hidden" name="AEUM_ENDUSEBTGRD" class="form-control AEUMDBfields">
                 <input type="text" id="AEUM_ENDUSEOTHGRD" hidden="hidden" name="AEUM_ENDUSEOTHGRD" class="form-control AEUMDBfields">

               
               <div data-for="ApproveNote9" class="ApproveNote9"> 
               </div>
               <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="ApproveNote9" style="display:none">
                  <div class="DYNROW" >
                     </br>
                     <form>
                        <input type="text" id="AEUP_PRCSID" hidden="hidden" name="AEUP_PRCSID" class="form-control AEUPDBfields">
                        <input type="text" id="AEUP_ACTIVITYID" hidden="hidden" name="AEUP_ACTIVITYID" class="form-control AEUPDBfields">
                        <input type="text" id="AEUP_CREATEDBY" hidden="hidden" name="AEUP_CREATEDBY" class="form-control AEUPDBfields">
                        <input type="text" id="AEUP_DTCREATED" hidden="hidden" name="AEUP_DTCREATED" class="form-control AEUPDBfields">
                        <input type="text" id="AEUP_MODIFIEDBY" hidden="hidden" name="AEUP_MODIFIEDBY" class="form-control AEUPDBfields">
                        <input type="text" id="AEUP_DTMODIFIED" hidden="hidden"  name="AEUP_DTMODIFIED" class="form-control AEUPDBfields">
                        <input type="text" id="AEUP_EXLONNO" hidden="hidden"  name="AEUP_EXLONNO" class="form-control AEUPDBfields">
                        <input type="text" id="AEUP_UNIQUID" hidden="hidden"  name="AEUP_UNIQUID" class="form-control AEUPDBfields">
                       
                       <div class="form-row">
                           	<div class="col Btxt10"><input type="text" id="AEUP_CLOUSERTYPE"  name="AEUP_CLOUSERTYPE" class="form-control DSVLBL Btxt04 AEUPDBfields" value=""></div>
                       </div>
                       <div class="form-row">
                          <div class="col">
                               <input type="button" data-button="GridButton" data-value="EUTable|LSW_SENDUSEGRDDATA|PrcsID|AEUP_CLOUSERTYPE|AEUP_EXLONNO|2,3,4|ENDUSEGRID" style="display:none" class="DashTrg AEUPDBfields MultiGridTrg" id="BTNIEUGRD" name="BTNEUGRD" />
                               <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display AEUPDBfields DataGrid" name="EUTable" id="EUTable">
                               </table>
                         </div>
                       </div>
                       <div class="form-row" style="display:none">
                           <div class="col-md-6 BluShd"> 
                                <label for="" class="Btxt10">Total<span class="MndtryAstr"></span></label>
                           </div>
                           <div class="col-md-2 BluShd"> 
                                <input type="text" id="AEUP_TOTPOI" maxlength="15" name="AEUP_TOTPOI" value="0" class="form-control DSVLBL Btxt10 IsCURCommaFields IsNumberFields NoSpecialChar AEUPDBfields">
                           </div>
                           <div class="col-md-4 BluShd"> 
                           </div>
                        </div>
                  </div>
               </div>
                      <div class="form-row">
                           <div class="col-md-6 BluShd"> 
                                <label for="" class="Btxt10">Total<span class="MndtryAstr"></span></label>
                           </div>
                           <div class="col-md-2 BluShd"> 
                                <input type="text" id="AEUM_CLOSERTOTPOI" maxlength="15" name="AEUM_CLOSERTOTPOI" value="0" class="form-control DSVLBL Btxt10 IsCURCommaFields IsNumberFields NoSpecialChar AEUMDBfields">
                           </div>
                           <div class="col-md-4 BluShd"> 
                           </div>
                        </div>
						<div class="form-row">
                           <div class="col-md-6 BluShd"> 
                                <label for="" class="Btxt10">Balance Top Up<span class="MndtryAstr"></span></label>
                           </div>
                           <div class="col-md-2 BluShd"> 
                                <input type="text" id="AEUM_BALTOPUP" maxlength="15" name="AEUM_BALTOPUP" value="0" class="form-control DSVLBL Btxt10 IsCURCommaFields IsNumberFields NoSpecialChar AEUMDBfields">
                           </div>
                           <div class="col-md-4 BluShd"> 
                           </div>
                        </div>
                  <div class="form-row">
        	        <div class="col Btxt10">COMMENTS</div>
               </div>
               <div class="form-row">
                    <div class="col">
                         <div class="md-form">
                              <textarea id="AEUM_COMMENTS" name="AEUM_COMMENTS" class="form-control AEUMDBfields btxt24" maxlength="4000"  style="height: 130px;width:1150px;"></textarea>
                         </div>
                     </div>
                 </div>
                  </br>
                   <div class="form-row">
                         <div class="col d-flex justify-content-center">
                              <button type="button" id="Save9" data-aria="LSW_APPRENDUSE|AEUM" data-form="EndUse" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                              <button type="button" data-aria="LSW_APPRENDUSE|AEUM" data-form="EndUse" data-card="8" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                        </div>
                    </div>
                </form>
                </div>
            </div>
         </div>
         <!-- End Use End -->
         <!-- Asset Details Start -->
         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="headingTen10">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNASSTDATA" data-aria="" data-parent="#accordionEx" href="#collapseTen10"
                  aria-expanded="false" aria-controls="collapseTen10">
               Asset Details<i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="collapseTen10" class="collapse" role="tabpanel" aria-labelledby="headingTen10" data-parent="#accordionEx">
                  </br>
                   <div class="card-body px-lg-5 pt-0">
                  <form>
                     <input type="text" id="APAS_PRCSID" hidden="hidden" name="APAS_PRCSID" class="form-control APASDBfields">
                     <input type="text" id="APAS_ACTIVITYID" hidden="hidden" name="APAS_ACTIVITYID" class="form-control APASDBfields">
                     <input type="text" id="APAS_DTCREATED" hidden="hidden" name="APAS_DTCREATED" class="form-control APASDBfields">
                     <input type="text" id="APAS_CREATEDBY" hidden="hidden" name="APAS_CREATEDBY" class="form-control APASDBfields">
                     <input type="text" id="APAS_DTMODIFIED" hidden="hidden" name="APAS_DTMODIFIED" class="form-control APASDBfields">
                     <input type="text" id="APAS_MODIFIEDBY" hidden="hidden"  name="APAS_MODIFIEDBY" class="form-control APASDBfields">
                     <input type="text" id="APAS_ASSETGRD" hidden="hidden"  name="APAS_ASSETGRD" class="form-control APASDBfields">
                     <div class="form-row">
                        <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table6',{spname:'LSW_SGETASSTDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','ASSET');" id="BTNASST" name="BTNASST" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table6">
                           </table>
                        </div>
                     </div>
                     <div class="HyperControls">
                        <a type="button" class="Btxt4 ADDBTN" data-toggle="modal" id="AssetGrid" data-target="" href="#">+ Add an Asset</a>
                        <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                     </div>
                     </br>
                     <div class="form-row">
                        <div class="col d-flex justify-content-center">
                           <button type="button" id="Save10" data-aria="LSW_TAPPRASSET|APAS" data-form="AssetDetails" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                           <button type="button" data-aria="LSW_TAPPRASSET|APAS" data-form="AssetDetails" data-card="9" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                        </div>
                     </div>
                  </form>
                  </div>
            </div>
         </div>
         <!-- Asset Details End -->
		 
		 <!-- Strengths  & Mitigants Start -->
         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="headingTen13">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNMITIGDATA" data-aria="" data-parent="#accordionEx" href="#collapseTen13"
                  aria-expanded="false" aria-controls="collapseTen13">
               Strengths  & Mitigants<i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="collapseTen13" class="collapse" role="tabpanel" aria-labelledby="headingTen13" data-parent="#accordionEx">
                  </br>
               <div class="card-body px-lg-5 pt-0">
                  <form>
                     <input type="text" id="APSM_PRCSID" hidden="hidden" name="APSM_PRCSID" class="form-control APSMDBfields">
                     <input type="text" id="APSM_ACTIVITYID" hidden="hidden" name="APSM_ACTIVITYID" class="form-control APSMDBfields">
                     <input type="text" id="APSM_DTCREATED" hidden="hidden" name="APSM_DTCREATED" class="form-control APSMDBfields">
                     <input type="text" id="APSM_CREATEDBY" hidden="hidden" name="APSM_CREATEDBY" class="form-control APSMDBfields">
                     <input type="text" id="APSM_DTMODIFIED" hidden="hidden" name="APSM_DTMODIFIED" class="form-control APSMDBfields">
                     <input type="text" id="APSM_MODIFIEDBY" hidden="hidden"  name="APSM_MODIFIEDBY" class="form-control APSMDBfields">
                      <div class="form-row">
        	              <div class="col Btxt10">COMMENTS</div>
                      </div>
                      <div class="form-row">
                         <div class="col">
                             <div class="md-form">
                                <textarea id="APSM_COMMENTS" name="APSM_COMMENTS" class="form-control APSMDBfields btxt24" maxlength="4000"  style="height: 130px;width:1150px;"></textarea>
                              </div>
                          </div>
                       </div>
                     <div class="form-row">
                        <div class="col d-flex justify-content-center">
                           <button type="button" id="Save10" data-aria="LSW_TAPPRSTRMITIG|APSM" data-form="Strengths" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                           <button type="button" data-aria="LSW_TAPPRSTRMITIG|APSM" data-form="Strengths" data-card="10" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                        </div>
                     </div>
                  </form>
                </div>
            </div>
         </div>
         <!-- Strengths  & Mitigants End -->
         
          <!-- Strengths  & Mitigants Start -->
         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="headingTen14">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNREFERDATA" data-aria="" data-parent="#accordionEx" href="#collapseTen14"
                  aria-expanded="false" aria-controls="collapseTen14">
               Reference Checks<i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="collapseTen14" class="collapse" role="tabpanel" aria-labelledby="headingTen14" data-parent="#accordionEx">
                  </br>
               <div class="card-body px-lg-5 pt-0">
                  <form>
                     <input type="text" id="APRC_PRCSID" hidden="hidden" name="APRC_PRCSID" class="form-control APRCDBfields">
                     <input type="text" id="APRC_ACTIVITYID" hidden="hidden" name="APRC_ACTIVITYID" class="form-control APRCDBfields">
                     <input type="text" id="APRC_DTCREATED" hidden="hidden" name="APRC_DTCREATED" class="form-control APRCDBfields">
                     <input type="text" id="APRC_CREATEDBY" hidden="hidden" name="APRC_CREATEDBY" class="form-control APRCDBfields">
                     <input type="text" id="APRC_DTMODIFIED" hidden="hidden" name="APRC_DTMODIFIED" class="form-control APRCDBfields">
                     <input type="text" id="APRC_MODIFIEDBY" hidden="hidden"  name="APRC_MODIFIEDBY" class="form-control APRCDBfields">
                      <div class="form-row">
        	              <div class="col Btxt10">COMMENTS</div>
                      </div>
                      <div class="form-row">
                         <div class="col">
                             <div class="md-form">
                                <textarea id="APRC_COMMENTS" name="APRC_COMMENTS" class="form-control APRCDBfields btxt24"  maxlength="4000" style="height: 130px;width:1150px;"></textarea>
                              </div>
                          </div>
                       </div>
                     <div class="form-row">
                        <div class="col d-flex justify-content-center">
                           <button type="button" id="Save10" data-aria="LSW_TAPPRREFRRNCE|APRC" data-form="Reference" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                           <button type="button" data-aria="LSW_TAPPRREFRRNCE|APRC" data-form="Reference" data-card="11" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                        </div>
                     </div>
                  </form>
                </div>
            </div>
         </div>
         <!-- Strengths  & Mitigants End -->
		 
         <!-- Empowerment Start -->
         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="heading1">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNEMPWRDATA" data-aria="LSW_TAPPREMPR|APEM" data-parent="#accordionEx" href="#collapseEleven11"
                  aria-expanded="false" aria-controls="collapse1">
               Empowerment<i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="collapseEleven11" class="collapse" role="tabpanel" aria-labelledby="headingEleven11"
               data-parent="#accordionEx">
               <div class="card-body px-lg-5 pt-0 " >
                  <form>
                     <input type="text" id="APEM_PRCSID" hidden="hidden" name="APEM_PRCSID" class="form-control APEMDBfields">
                     <input type="text" id="APEM_ACTIVITYID" hidden="hidden" name="APEM_ACTIVITYID" class="form-control APEMDBfields">
                     <input type="text" id="APEM_DTCREATED" hidden="hidden" name="APEM_DTCREATED" class="form-control APEMDBfields">
                     <input type="text" id="APEM_CREATEDBY" hidden="hidden" name="APEM_CREATEDBY" class="form-control APEMDBfields">
                     <input type="text" id="APEM_DTMODIFIED" hidden="hidden" name="APEM_DTMODIFIED" class="form-control APEMDBfields">
                     <input type="text" id="APEM_MODIFIEDBY" hidden="hidden"  name="APEM_MODIFIEDBY" class="form-control APEMDBfields">
                     <input type="text" id="APEM_EMPRMNT" hidden="hidden"  name="APEM_EMPRMNT" class="form-control APEMDBfields">
					 <input type="text" id="APEM_MANEMPRMNT" hidden="hidden"  name="APEM_MANEMPRMNT" class="form-control APEMDBfields">
                     <div class="form-row">
                        <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_SGETFIXEMPRMNTDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4','EMPOWERMNT');" id="BTNEMPOWERMNT" name="BTNEMPOWERMNT" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table4">
                           </table>
                        </div>
                     </div>
					 <div class="form-row">
                          <div class="col Btxt8">Manual Empowerment</div>
                     </div>
                     <div class="form-row">
                           <div class="col">
                                 <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'MDTable',{spname:'LSW_SMANUEMPRMNTDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4','MNUEMPOWERMNT');" id="BTNMNUEMPOWERMNT" name="BTNMNUEMPOWERMNT" />
                                 <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="MDTable">
                                 </table>
                            </div>
                         </div>
                     <div class="form-row">
                         <div class="HyperControls">
                                <a type="button" class="Btxt4 ADDBTN ADDME" data-toggle="modal" id="PropertyGrid" data-target="" href="#">+ Add Empowerment</a>
         <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                              </div>
                          </div>
                     <div class="form-row">
                        <div class="col d-flex justify-content-center">
                           <button type="button" id="Save11" data-aria="LSW_TAPPREMPR|APEM"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                           <button type="button" id="SaveE11" data-aria="LSW_TAPPREMPR|APEM" data-card="12" style="padding-left: 25px;width: 166px;" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <!-- Empowerment End -->
         <!-- Sanction Condition Start -->
         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="headingTwelve12">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNSANCCONDDATA" data-aria="LSW_TCUSEMPINFO|CEMI|CEMI_CUSID|CBSI_CUSID" data-parent="#accordionEx" href="#collapseTwelve12"
                  aria-expanded="true" aria-controls="collapse1">
               Sanction Condition<i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="collapseTwelve12" class="collapse" role="tabpanel" aria-labelledby="headingTwelve12"
               data-parent="#accordionEx">
               <input type="text" id="APSD_PRCSID" hidden="hidden" name="APSD_PRCSID" class="form-control APSDDBfields">
		                     <input type="text" id="APSD_ACTIVITYID" hidden="hidden" name="APSD_ACTIVITYID" class="form-control APSDDBfields">
		                     <input type="text" id="APSD_DTCREATED" hidden="hidden" name="APSD_DTCREATED" class="form-control APSDDBfields">
		                     <input type="text" id="APSD_CREATEDBY" hidden="hidden" name="APSD_CREATEDBY" class="form-control APSDDBfields">
		                     <input type="text" id="APSD_DTMODIFIED" hidden="hidden" name="APSD_DTMODIFIED" class="form-control APSDDBfields">
		                     <input type="text" id="APSD_MODIFIEDBY" hidden="hidden"  name="APSD_MODIFIEDBY" class="form-control APSDDBfields">
		                     <input type="text" id="APSD_SANCGRD" hidden="hidden"  name="APSD_SANCGRD" class="form-control APSDDBfields">
               <div data-for="ApproveDetail12" class="ApproveDetail12"> 
                        </div>
                        <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="ApproveDetail12" style="display:none">
                        	<div class="card-body px-lg-5 pt-0  DYNROW" >
                              </br>
                              <form>
                              <input type="text" id="APSG_PRCSID" hidden="hidden" name="APSG_PRCSID" class="form-control APSGDBfields">
		                     <input type="text" id="APSG_ACTIVITYID" hidden="hidden" name="APSG_ACTIVITYID" class="form-control APSGDBfields">
		                     <input type="text" id="APSG_DTCREATED" hidden="hidden" name="APSG_DTCREATED" class="form-control APSGDBfields">
		                     <input type="text" id="APSG_CREATEDBY" hidden="hidden" name="APSG_CREATEDBY" class="form-control APSGDBfields">
		                     <input type="text" id="APSG_DTMODIFIED" hidden="hidden" name="APSG_DTMODIFIED" class="form-control APSGDBfields">
		                     <input type="text" id="APSG_MODIFIEDBY" hidden="hidden"  name="APSG_MODIFIEDBY" class="form-control APSGDBfields">
		                     
		                     <div class="form-row">
                                 <div class=" col-md-11">
                                    <div class="md-form">
                                       <span id="PROPTXTHDR" class="Btxt10"></span>    
                                       <input type="text" id="APSG_SANCCMNT"  name="APSG_SANCCMNT" class="form-control NoSpecialChar APSGDBfields  ">
                                    </div>
                                 </div>
                                 <div class="col-md-1">
                                 <div class="md-form DELBTNTXT">
                                <img src="ThemeproLO/Common/Images/Delete_Img.png"   class="DeleteSanct DELBTN" alt="Cinque Terre" width="20" height="20"> 
                                 </div>
                                </div>
                              </div>
                              
                              </form>
                              </div>
                        </div>
                        <div class="HyperControls form-row" > 
							   <a onclick="AddPageMultiData('','','','ApproveDetail12','APSGDBfields')" class="Btxt4 ADDBTN"  href="#">+ Add a Point</a>
							  </div>
                        <div class="form-row">
                        <div class="col d-flex justify-content-center">
                           <button type="button" id="Save12" data-aria="LSW_TSAPPRSANC|APSD"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                        </div>
                     </div>
            </div>
         </div>
         <!-- Sanction Condition End -->
         
              <!-- APPROV NOTEBUTTON Start -->
         <div class="card">
		 <div class="form-row GenApprNote" style="display:none">
              <span class="HyperControls FltRight">
		         <a onclick="GentrateApprNote();" class="Btxt4 FltRight" href="#">Approval Note.pdf</a>
		      </span>
          </div>
         </br>
            <!-- Card header -->
                      <div class="form-row">
                     
                        <div class="col d-flex justify-content-center">
                           <button type="button" id="Save12" onclick="" data-aria="LSW_TAPPLNAPPROV|AAPR" data-form="FamilyBackground" class="btn btn-Syel waves-effect waves-light FormSave">Generate Approval Note</button>   
                             <button type="button" id="Save12" data-aria="LSW_TAPPLNAPPROV|AAPR"   data-form="FamilyBackground" class="BTNSTA btn btn-Syel waves-effect waves-light FormSave">Send for Approval</button>  
							 <button type="button" id="Reject" data-aria="LSW_TAPPLNAPPROV|AAPR"   data-form="FamilyBackground" class="BTNSTA btn btn-Syel waves-effect waves-light">Reject</button>  
						</div>
                     </div>
         </div>
         <!-- APPROV NOTEBUTTON End -->
      </div>
      <!-- END -->
   </div>
</div>
<!--   </div>
   </div>   -->  
   
  <table style="display:none" id="GridLPDSTable">
<thead>
<th>ACTION</th>
<th>LPDS_NAME</th>
<th>LPDS_SHAREHOLD</th>
<th>LPDS_BRNIOWNER</th>
<th>LPDS_LONSTRU</th>
<th>LPDS_KYC</th>
<th>LPDS_FIRMCONT</th>
<!--<th>LPDS_PRCSID</th>
<th>LPDS_ACTIVITYID</th>
<th>LPDS_CREATEDBY</th>
<th>LPDS_DTCREATED</th>
<th>LPDS_MODIFIEDBY</th>
<th>LPDS_DTMODIFIED</th>-->
   </thead> 
    </table>    
   
    <table style="display:none" id="GridLoansTable">
<thead>
<th>LCDT_INSTNAME</th>
<th>LCDT_LONTYPE</th>
<th>LCDT_EMI</th>
<th>LCDT_LONAMT</th>
<th>LCDT_MOB</th>
<th>LCDT_OBLIGATION</th>
<th>LCDT_ENDUSE</th>
<th>LCDT_CUSID</th>
<!--<th>LCDT_PRCSID</th>
<th>LCDT_ACTIVITYID</th>
<th>LCDT_CREATEDBY</th>
<th>LCDT_DTCREATED</th>
<th>LCDT_MODIFIEDBY</th>
<th>LCDT_DTMODIFIED</th>-->
   </thead> 
    </table>    
     

<table style="display:none" id="GridTable2">
   <thead>
      <th>APBG_NAME</th>
      <th>APBG_SHARE</th>
      <th>APBG_OWNER</th>
      <th>APBG_LNSTRUCT</th>
   </thead>
</table>
<table style="display:none" id="GridTable3">
   <thead>
      <th>ACTION</th>
      <th>APRD_ADDR</th>
      <th>APRD_RENTPEROD</th>
      <th>APRD_MNTHRENT</th>
      <th>APRD_PAYMNTMODE</th>
   </thead>
</table>
<table style="display:none" id="GridTable4">
   <thead>
      <th>APED_EMPTYP</th>
      <th>APED_LEVEL</th>
      <th>APED_REMARK</th>
      <th>APED_DEVID</th>
      <th>APED_LVLID</th>
   </thead>
</table>
<table style="display:none" id="GridFINANCTable">
   <thead>
      <th>APFD_FINCYRDTL</th>
      <th>APFD_FINCYRONE</th>
      <th>APFD_FINCYRTWO</th>
      <th>APFD_FINCYRTHREE</th>
      <th>APFD_CUSID</th>
      <th>APFD_SCHMID</th>
   </thead>
</table>

<table style="display:none" id="GridTable6">
   <thead>
      <th>ACTION</th>
      <th>APAG_ASSTTYP</th>
      <th>APAG_OWNER</th>
      <th>APAG_MRKTVAL</th>
   </thead>
</table>

<table style="display:none" id="GridTable7">
   <thead>
      <th>APPR_PROP</th>
      <th>APPR_LEGSTATS</th>
      <th>APPR_VALONE</th>
      <th>APPR_VALTWO</th>
      <th>APPR_VALTHREE</th>
	  <th>APPR_LEGTWOSTATS</th>
   </thead>
</table>
<table style="display:none" id="GridTable8">
   <thead>
      <th>APPA_NAME</th>
      <th>APPA_CIBIL</th>
      <th>APPA_RCU</th>
      <th>APPA_EFI</th>
      <th>APPA_RFI</th>
   </thead>
</table>

<table style="display:none" id="GridEUTable">
   <thead>
      <th>AEUG_ENDUSE</th>
      <th>AEUG_POS</th>
      <th>AEUG_CLOSURTYPE</th>
       <th>AEUG_EXLONNO</th>
        <th>AEUG_SCHEME</th>
   </thead>
</table>

<table style="display:none" id="GridMDTable">
   <thead>
      <th>AEMD_EMPOWTYP</th>
      <th>AEMD_LEVEL</th>
      <th>AEMD_METIGANTS</th>
       <th>ACTION</th>
   </thead>
</table>


<!-- <table style="display:none" id="GridFINANCTable">
   <thead>
      <th>AEUG_ENDUSE</th>
      <th>AEUG_POS</th>
      <th>AEUG_CLOSURTYPE</th>
   </thead>
</table>-->

<div class="md-form">
    <div class="HyperControls"> 
         <a type="button" class="Btxt4 ApprNote FltLeft" data-toggle="modal" name="ApprNote" data-target="#ApprNote" href="#"></a>
     </div>
</div>
<a type="button" id="Popup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#ApprNote">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade" id="ApprNote" tabindex="-1" role="dialog" aria-labelledby="ApprNoteLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1000px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt8">Empowerment</div> 
           <a href="#"><img id="ApprNoteClose" class="Apprclose" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
       </div>  
       <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form >
        	</br>
        	</br>
           		<div class="form-row">
                   <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'EmpovTable4',{spname:'LSW_SGETEMPRMNTDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4','EMPOWERMNTI');" id="BTNEMPOWERMNTI" name="BTNEMPOWERMNTI" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="EmpovTable4">
                        </table>
                   </div>
               </div>
      <!-- grid  show -->
    <!--Main layout-->
        </form>
      </div>
    </div> 
      </div>
       <div class="modal-footer align-middle" style="display:none">
          <button type="button" id="GenApprNote" onclick="" class="btn btn-yel Btxt2 SaveAppr">Generate Approval Note</button>
      </div>
      <div class="modal-footer align-middle">
          <button type="button" id="Cancel" onclick="" class="btn btn-yel Btxt2 SaveAppr">Cancel</button>
          <button type="button" id="Confirm" onclick="" class="btn btn-yel Btxt2 SaveAppr">Confirm</button>
      </div>
    </div>
  </div>
  </div>
<table style="display:none" id="GridEmpovTable4">
   <thead>
      <th>APED_EMPTYP</th>
      <th>APED_LEVEL</th>
      <th>APED_REMARK</th>
      <th>APED_DEVID</th>
      <th>APED_LVLID</th>
   </thead>
</table>
<script type="text/javascript" src="ThemeproLO/UCV/Approve/Script/ApprlNt/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Approve/Script/ApprlNt/Validation.js${DMY13}"></script>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>
 <style>
   .form-row>.col, .form-row>[class*=col-] {
        padding-right: 5px;
      }
 </style>