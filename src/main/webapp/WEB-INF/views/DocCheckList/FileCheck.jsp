<!--Main row-->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
      <!-- Start -->
      <div class="row">
         <div class="col-lg-12">
            <ul title="DocumentDetails" data-popup="" class="nav FormPageMultiTab">
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
      <!-- Start -->
      <div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
         <!-- Accordion card -->
         <div class="card" >
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="headingOne1">
               <a data-toggle="collapse" data-aria="LSW_UPFLCHCKLSTHDR|UCLH" data-multidata="" data-load="" class="Btxt8 AFormaccordion" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                  aria-controls="collapseOne1">       
               CAM Checklist<i class="fa fa-minus-circle rotate-icon"></i>
               </a>
            </div>
            <!-- Card body -->
            <div id="collapseOne1" class="collapse show accordiontab" data-form="CAM" role="tabpanel" aria-labelledby="headingOne1"
               data-parent="#accordionEx">
               <div class="card-body px-lg-5 pt-0">
                  <form>
                     <input type="text" id="UCLH_PRCSID"  name="UCLH_PRCSID" hidden="hidden" class="form-control UCLHDBfields" value="" >
                     <input type="text" id="UCLH_ACTIVITYID"  name="UCLH_ACTIVITYID" hidden="hidden"  class="form-control UCLHDBfields" value="">
                     <input type="text" id="UCLH_DTCREATED"  name="UCLH_DTCREATED" hidden="hidden"  class="form-control UCLHDBfields" value="">
                     <input type="text" id="UCLH_CREATEDBY"  name="UCLH_CREATEDBY" hidden="hidden"  class="form-control UCLHDBfields" value="">
                     <input type="text" id="UCLH_DTMODIFIED"  name="UCLH_DTMODIFIED" hidden="hidden"  class="form-control UCLHDBfields" value="">
                     <input type="text" id="UCLH_MODIFIEDBY"  name="UCLH_MODIFIEDBY" hidden="hidden"  class="form-control UCLHDBfields" value="">
                     <input type="text" id="UCLH_CUSID"  name="UCLH_CUSID" hidden="hidden"  class="form-control UCLHDBfields" value="">
                     
                     <input type="text" id="UCLH_SCHEM"  name="UCLH_SCHEM" hidden="hidden"  class="form-control UCLHDBfields" value="">
                     <input type="text" id="UCLH_GRDDATA"  name="UCLH_GRDDATA" hidden="hidden"  class="form-control UCLHDBfields" value="">
                     
                     <input type="text" id="UCLH_COAPPCAM" name="UCLH_COAPPCAM" hidden="hidden" class="form-control UCLHDBfields">
                     <div class="form-row">
                        <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_UPLDFILECHECK',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#UCLH_SCHEM').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','UPLDFILECHECK');" id="BTNUPLDFILECHECK" name="BTNUPLDFILECHECK" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table2">
                           </table>
                        </div>
                     </div>
                     <div class="form-row CUSNAME">
                        <div class="col Btxt10"><input type="text" id="UCLH_APPLNAME"  name="UCLH_APPLNAME" class="form-control DSVLBL Btxt04 UCLHDBfields" value=""></div>
                     </div>
					 <form>
                     <div class="form-row AINCY" style="display:none">
                        <div class="col-md-4">
                           <div class="md-form">
                              <label for="" class="">ITRs Filled within 6 months GAP<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                        <div class="col-md-2">
                           <div class="md-form">
                           </div>
                        </div>
                        <div class="col-md-3">
                           <div class="md-form">
                              <!-- <div class="md-form"> -->
                                 <div  class="select-radio">
                                    <div class="custom-control custom-radio custom-control-inline">
                                       <input type="radio" class="custom-control-input UCLHDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist FieldsA" value="Yes" id="ITRGAPY" name="UCLH_ITRGAP">
                                       <label class="custom-control-label" for="ITRGAPY">Yes</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                       <input type="radio" class="custom-control-input UCLHDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist FieldsA" value="No" id="ITRGAPN" name="UCLH_ITRGAP">
                                       <label class="custom-control-label" for="ITRGAPN">No</label>
                                    </div>
                                 </div>
                                 
                             <!--  </div> -->
                           </div>
                        </div>
                         <div class="col-md-3">
                         <button type="button" id="RaiseQueryA1" data-aria="" data-uniq-type="CAM Checklist FieldsA" data-quey-sec="S05" data-form="PersonalInfo" style="height:35px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>
                         </div>
                     </div>
					 <div class="form-row AINCY" style="display:none">
                        <div class="col-md-4">
                           <div class="md-form">
                              <label for="" class="">ITR Filled on the same date<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                        <div class="col-md-2">
                           <div class="md-form">
                           </div>
                        </div>
                        <div class="col-md-3">
                           <div class="md-form">
                              <!-- <div class="md-form"> -->
                                 <div  class="select-radio">
                                    <div class="custom-control custom-radio custom-control-inline">
                                       <input type="radio" class="custom-control-input UCLHDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist FieldsA" value="Yes" id="SAMEDATEY" name="UCLH_SAMEDATE">
                                       <label class="custom-control-label" for="SAMEDATEY">Yes</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                       <input type="radio" class="custom-control-input UCLHDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist FieldsA" value="No" id="SAMEDATEN" name="UCLH_SAMEDATE">
                                       <label class="custom-control-label" for="SAMEDATEN">No</label>
                                    </div>
                                 </div>
                                 
                             <!--  </div> -->
                           </div>
                        </div>
                         <div class="col-md-3">
                         <button type="button" id="RaiseQueryA2" data-aria="" data-uniq-type="CAM Checklist FieldsA" data-quey-sec="S05" data-form="PersonalInfo" style="height:35px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>
                         </div>
                     </div>
                     <div class="form-row ANSRTRBS" style="display:none">
                        <div class="col-md-4">
                           <div class="md-form">
                              <label for="" class="LOWLTV"><span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                        <div class="col-md-2">
                           <div class="md-form">
                           </div>
                        </div>
                        <div class="col-md-3">
                           <div class="md-form">
                              <!-- <div class="md-form"> -->
                                 <div  class="select-radio">
                                    <div class="custom-control custom-radio custom-control-inline">
                                       <input type="radio" class="custom-control-input UCLHDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist FieldsA" value="Yes" id="ApplActionYes" name="UCLH_APPLACTION">
                                       <label class="custom-control-label" for="ApplActionYes">Yes</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                       <input type="radio" class="custom-control-input UCLHDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist FieldsA" value="No" id="ApplActionNo" name="UCLH_APPLACTION">
                                       <label class="custom-control-label" for="ApplActionNo">No</label>
                                    </div>
                                 </div>
                              <!-- </div> -->
                           </div>
                        </div>
                         <div class="col-md-3">
                         <button type="button" id="RaiseQueryA3" data-uniq-type="CAM Checklist FieldsA" data-quey-sec="S05" data-aria="" data-form="PersonalInfo" style="height:35px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>
                         </div>
                     </div>
                     <div class="form-row ASCMLIP" style="display:none">
                        <div class="col-md-4">
                           <div class="md-form">
                              <label for="" class="">CA Assessment Report<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                        <div class="col-md-2">
                           <div class="md-form">
                           </div>
                        </div>
                        <div class="col-md-3">
                           <div class="md-form">
                             <!--  <div class="md-form"> -->
                                 <div  class="select-radio">
                                    <div class="custom-control custom-radio custom-control-inline">
                                       <input type="radio" class="custom-control-input UCLHDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist FieldsA" value="Yes" id="CARPTY" name="UCLH_CARPT">
                                       <label class="custom-control-label" for="CARPTY">Yes</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                       <input type="radio" class="custom-control-input UCLHDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist FieldsA" value="No" id="CARPTN" name="UCLH_CARPT">
                                       <label class="custom-control-label" for="CARPTN">No</label>
                                    </div>
                                 </div>
                              <!-- </div> -->
                           </div>
                        </div>
                        <div class="col-md-3">
                        <button type="button" data-quey-sec="S05" data-uniq-type="CAM Checklist FieldsA"  id="RaiseQueryA3" data-aria="" data-form="PersonalInfo" style="height:35px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>
                        </div>
                     </div>
					 </form>
                     <!--Coapp CAM  start-->
         
         <div data-for="COAPPCAMChecklist" class="COAPPCAMChecklist"> 
      </div>
        <div class="DynamicPageGrid" data-val="PROPTXTHDR|PROPERTY" id="COAPPCAMChecklist" style="display:none">
      <div data-row="" class="DYNROW">
        <form>
        <input type="text" id="FICL_PRCSID" hidden="hidden" name="FICL_PRCSID" class="form-control FICLDBfields">
        <input type="text" id="FICL_ACTIVITYID" hidden="hidden" name="FICL_ACTIVITYID" class="form-control FICLDBfields">
        <input type="text" id="FICL_DTCREATED" hidden="hidden" name="FICL_DTCREATED" class="form-control FICLDBfields">
        <input type="text" id="FICL_CREATEDBY" hidden="hidden" name="FICL_CREATEDBY" class="form-control FICLDBfields">
        <input type="text" id="FICL_DTMODIFIED" hidden="hidden" name="FICL_DTMODIFIED" class="form-control FICLDBfields">
        <input type="text" id="FICL_MODIFIEDBY" hidden="hidden" name="FICL_MODIFIEDBY" class="form-control FICLDBfields">
        <input type="text" id="FICL_CUSID" hidden="hidden" name="FICL_CUSID" class="form-control FICLDBfields">
        
        <input type="text" id="FICL_SCHEME" name="FICL_SCHEME" hidden="hidden" class="form-control FICLDBfields">
        <input type="text" id="FICL_UNIQID" name="FICL_UNIQID" hidden="hidden" class="form-control FICLDBfields">
        <input type="text" id="FICL_INCCONSID" name="FICL_INCCONSID" hidden="hidden" class="form-control FICLDBfields">
       
        
        
        <div class="form-row COCUSNAME" style="display:none" >
        	<div class="col Btxt10"><input type="text" id="FICL_CUSNAME" name="FICL_CUSNAME" class="form-control DSVLBL Btxt04 FICLDBfields"></div>
        </div>
		<div class="form-row CINCY" style="display:none">
            <div class="col-md-4">   
               <div class="md-form">
                  <label for="" class="">ITRs Filled within 6 months GAP<span class="MndtryAstr"></span></label>
              </div>
              </div>
              <div class="col-md-2">
                 <div class="md-form">
                 </div>
              </div>
              <div class="col-md-3">
                 <div class="select-radio "> 
                    <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input FICLDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist Fields"  value="Yes" id="ITRGAPYes" name="FICL_ITRGAP">
                            <label class="custom-control-label" for="ITRGAPYes">Yes</label>
                     </div>
                      <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input FICLDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist Fields" value="No" id="ITRGAPNo" name="FICL_ITRGAP">
                            <label class="custom-control-label" for="ITRGAPNo">No</label>
                       </div>
                        <input type="text" id="FICL_ITRGAP" name="FICL_ITRGAP" hidden="hidden" class="form-control FICLDBfields"> 
                  </div>
              </div>
                 <div class="col-md-3">
                        <button type="button" id="RaiseQueryCO1" data-uniq-type="CAM Checklist Fields" data-quey-sec="S05" data-aria="" data-form="PersonalInfo" style="height:35px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>
                        </div>
        </div>
          <div class="form-row CINCY" style="display:none">
            <div class="col-md-4">   
               <div class="md-form">
                  <label for="" class="">ITR Filled on the same date<span class="MndtryAstr"></span></label>
              </div>
              </div>
              <div class="col-md-2">
                 <div class="md-form">
                 </div>
              </div>
              <div class="col-md-3">
                 <div class="select-radio "> 
                    <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input FICLDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist Fields"  value="Yes" id="SameYes" name="FICL_SAMDATE">
                            <label class="custom-control-label" for="SameYes">Yes</label>
                     </div>
                      <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input FICLDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist Fields" value="No" id="SameNo" name="FICL_SAMDATE">
                            <label class="custom-control-label" for="SameNo">No</label>
                       </div>
                        <input type="text" id="FICL_SAMDATE" name="FICL_SAMDATE" hidden="hidden" class="form-control FICLDBfields"> 
                  </div>
              </div>
                 <div class="col-md-3">
                        <button type="button" id="RaiseQueryCO2" data-uniq-type="CAM Checklist Fields" data-quey-sec="S05" data-aria="" data-form="PersonalInfo" style="height:35px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>
                        </div>
        </div>
         <div class="form-row NSRTRBS" style="display:none" >
            <div class="col-md-4">   
               <div class="md-form">
                  <label for="" class="LOWLTV"><span class="MndtryAstr"></span></label>
              </div>
              </div>
              <div class="col-md-2">
                 <div class="md-form">
                 </div>
              </div>
              <div class="col-md-3">
                 <div class="md-form">
                     <div class="md-form">
                    <div  class="select-radio"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input FICLDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist Fields" value="Yes" id="MINYES" name="FICL_MINLATEST">
                          <label class="custom-control-label" for="MINYES">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input FICLDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist Fields" value="No" id="MINNO" name="FICL_MINLATEST">
                           <label class="custom-control-label" for="MINNO">No</label>
                       </div>
                        <input type="text" id="FICL_MINLATEST" name="FICL_MINLATEST" hidden="hidden" class="form-control FICLDBfields"> 
                   </div>     
               </div>
                 </div>
              </div>
                 <div class="col-md-3">
                        <button type="button" id="RaiseQueryCo3" data-aria="" data-uniq-type="CAM Checklist Fields" data-quey-sec="S05" data-form="PersonalInfo" style="height:35px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>
                        </div>
        </div>
         <div class="form-row SCMLIP" style="display:none">
            <div class="col-md-4">   
               <div class="md-form">
                  <label for="" class="">CA Assessment Report<span class="MndtryAstr"></span></label>
              </div>
              </div>
              <div class="col-md-2">
                 <div class="md-form">
                 </div>
              </div>
              <div class="col-md-3">
                 <div class="md-form">
                     <div class="md-form">
                    <div  class="select-radio"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input FICLDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist Fields" value="Yes" id="COCARPTY" name="FICL_CARPT">
                          <label class="custom-control-label" for="COCARPTY">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input FICLDBfields RADIOACTNCHK1" data-uniq-type="CAM Checklist Fields" value="No" id="COCARPTN" name="FICL_CARPT">
                           <label class="custom-control-label" for="COCARPTN">No</label>
                       </div>
                          <input type="text" id="FICL_CARPT" name="FICL_CARPT" hidden="hidden" class="form-control FICLDBfields"> 
                   </div>     
               </div>
                 </div>
              </div>
                 <div class="col-md-3">
                        <button type="button" id="RaiseQueryCo4" data-aria="" data-uniq-type="CAM Checklist Fields" data-quey-sec="S05" data-form="PersonalInfo" style="height:35px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>
                  </div>
        </div>
        </form>
        </div>
        </div>
         <!-- COAPP cam end-->  
                  </form>
               </div>
            </div>
         </div>
      </div>
      <!-- End -->
      <div class="form-row">
         <div class="col d-flex justify-content-center">
            <button type="button" id="Save4" data-aria="LSW_UPFLCHCKLSTHDR|UCLH"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
            <button type="button" id="MoveToLogin" style="display:none" data-aria="LSW_UPFLCHCKLSTHDR|UCLH" data-card="0" class="btn btn-Syel MVLBTN waves-effect waves-light FormSave">Move to Login</button> 
         </div>
      </div>
      </br>
   </div>
   <!-- Admin Panel -->
   <!-- END -->
</div>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/DocCheckList/FileCheck/Script/LoadSubmit/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/DocCheckList/FileCheck/Script/Validation/Validation.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>
<table style="display:none" id="GridTable2">
   <thead>
      <th>UCLD_DOCUMENTS</th>
      <th>UCLD_CHCKINGPARAM</th>
      <th>UCLD_ACTION</th>
      <th>UCLD_RSQTY</th>
      <th>UCLD_SCHEM</th>
	  <th>UCLD_CODE</th>
   </thead>
</table>