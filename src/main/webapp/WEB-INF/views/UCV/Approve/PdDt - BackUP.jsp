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
      <div class="card">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
               <input type="text" id="APDD_PRCSID" hidden="hidden" name="APDD_PRCSID" class="form-control APDDDBfields">
               <input type="text" id="APDD_ACTIVITYID" hidden="hidden" name="APDD_ACTIVITYID" class="form-control APDDDBfields">
               <input type="text" id="APDD_DTCREATED" hidden="hidden" name="APDD_DTCREATED" class="form-control APDDDBfields">
               <input type="text" id="APDD_CREATEDBY" hidden="hidden" name="APDD_CREATEDBY" class="form-control APDDDBfields">
               <input type="text" id="APDD_DTMODIFIED" hidden="hidden" name="APDD_DTMODIFIED" class="form-control APDDDBfields">
               <input type="text" id="APDD_MODIFIEDBY" hidden="hidden"  name="APDD_MODIFIEDBY" class="form-control APDDDBfields">
               <input type="text" id="APDD_PDGRDDATA" hidden="hidden"  name="APDD_PDGRDDATA" class="form-control APDDDBfields">
			   <input type="text" id="APDD_PDDONEBYID" hidden="hidden" name="APDD_PDDONEBYID" class="form-control APDDDBfields">
			   
               <div class="form-row">
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="APDD_PDDT" name="APDD_PDDT"  maxlength="10" class="form-control form-control APDDDBfields APDDMndtry ISFutureDateFields  IsNumberFields  ISDatefield  ">
                        <label for="APDD_PDDT" class="">PD Date<span class="MndtryAstr">*</span></label>
                        <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                     </div>
                  </div>
				  <div class="col-md-4">
                     <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary APDDMndtry APDDDBfields" onchange="getPDNames();" multiple id="APDD_PDDONEBY" name="APDD_PDDONEBY">
				   <option value="" disabled>Select</option>
                   <option value="ASM">ASM</option>
					<option value="RSM">RSM</option>
                   <option value="ZSM">ZSM</option>
				</select>
				<label class="mdb-main-label BTxt9">PD Done By<span class="MndtryAstr">*</span></label>
                  </div>
               </div> 
             <!--      <div class="col-md-4">
                        <div class="md-form">
                            <select class=" md-form colorful-select dropdown-primary APDDMndtry APDDDBfields" id="APDD_PDDONEBY" name="APDD_PDDONEBY">
                                 <option value="" selected>--Select--</option>

                              </select>
                          <label class="mdb-main-label BTxt9">PD Done By<span class="MndtryAstr"></span></label>
                        </div>
                  </div> -->
                   <div class="col-md-4">
                    <div class="col Btxt10">Upload Photos</div>
                     <div data-for="BankDetail1" class="BankDetail1"> 
                     </div>
                     <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="BankDetail1" style="display:none">
                        <div data-row="" class="card-body px-lg-5 pt-0 DYNROW">
                           </br>
                           <input type="text" id="APDG_PRCSID" hidden="hidden" name="APDG_PRCSID" value="" class="form-control APDGDBfields">
                           <input type="text" id="APDG_ACTIVITYID" hidden="hidden" name="APDG_ACTIVITYID" class="form-control APDGDBfields">
                           <input type="text" id="APDG_DTCREATED" hidden="hidden" name="APDG_DTCREATED" class="form-control APDGDBfields">
                           <input type="text" id="APDG_CREATEDBY" hidden="hidden" name="APDG_CREATEDBY" class="form-control APDGDBfields">
                           <input type="text" id="APDG_DTMODIFIED" hidden="hidden" name="APDG_DTMODIFIED" class="form-control APDGDBfields">
                           <input type="text" id="APDG_MODIFIEDBY" hidden="hidden" name="APDG_MODIFIEDBY" class="form-control APDGDBfields">
                           <div class="form-row">
                              <div class="col">
                                 <div class="md-form " >
                                    <table>
                                       <tr>
                                          <td>
                                          	
                                             <div id="APDG_PDATTACHMNTUPLOAD"  class="file-field">
                                                <a class="">
                                                <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                                <input type="file"  name="datafile" onchange="DocFldUpldHndlr_V1(this,'APDG_PDATTACHMNT'+$(this).closest('.DYNROW').attr('data-row'),'APDG_PDATTACHMNT','PDDetails','PDDate','PD',$(this).closest('.DYNROW'))" class="APDG_PDATTACHMNT"  >
                                                </a>
                                                <input type="text" id="APDG_PDATTACHMNT" hidden="hidden" data-Validate="APDG_PDATTACHMNT"  name="APDG_PDATTACHMNT" class="form-control File APDGDBfields APDGMndtry">
                                                <span class="name">Upload Photos</span> 
                                             </div>
                                          </td>
                                          <div class="md-form">
                                             <div class="md-form Formcol-mdLR">
                                                <div class="APDG_PDATTACHMNT" style="display:none"> 
                                                <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="" class=" DELBTN DELETEDOCUMNETS"/>      
                                       
                                        <!--  <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile($('#APDG_PDATTACHMNT'+$(event.target).closest('.DYNROW').attr('data-row')));" 
                                                alt="Cinque Terre" width="20" height="20">   -->
                                                <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" 
                                                onclick="GrdDocDwnld('APDG_PDATTACHMNT'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" 
                                                alt="Cinque Terre" width="35" height="25"> </div>
                                             </div>
                                          </div>
                                       </tr>
                                    </table>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="HyperControls form-row" >
                        <a onclick="AddPageMultiData('',$('#APDG_PRCSID').val(),'','BankDetail1','APDGDBfields');" class="Btxt4 FltRight ADDBTN "  href="#">+ Add</a>
                        <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                     </div>
                  </div>
				  <div class="form-row">
                  <div class="col-md-4">
                     <div class="md-form">
					
						<label for="" class="active">PD Done By<span class="MndtryAstr"></span></label>
						 </br>

                          <textarea class="form-control APDDDBfields DSVLBL Btxt10 DataNormal" disabled rows="5" id="APDD_PDDONEBYNAME" name="APDD_PDDONEBYNAME" style="height: 100px;width:380px;" disabled="disabled"></textarea>
						
                     </div>
                  </div>
				  </div>
				</div>
               <div class="form-row">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="Save1" data-aria="LSW_TPDDTLS|APDD"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                              <button type="button" data-aria="LSW_TPDDTLS|APDD" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                           </div>
                        </div>
            </form>
         </div>
      </div>
      <!-- card -->
   </div>
</div>
<!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/UCV/Approve/Script/PdDt/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Approve/Script/PdDt/Validation.js${DMY13}"></script>                            
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