</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
      </br>
      <!-- card -->
      <div class="card">
            <!-- Card header -->
            
          <!--   <div id="collapseEleven11" class="collapse" role="tabpanel" aria-labelledby="headingEleven11"
               data-parent="#accordionEx"> -->
               <div class="card-body px-lg-5 pt-0 " >
               </br>
               <div class="form-row">
        		<div class="col Btxt3">System Empowerment</div>
        	</div>
                  <form>
                     <input type="text" id="APEM_PRCSID" hidden="hidden" name="APEM_PRCSID" class="form-control APEMDBfields">
                     <input type="text" id="APEM_ACTIVITYID" hidden="hidden" name="APEM_ACTIVITYID" class="form-control APEMDBfields">
                     <input type="text" id="APEM_DTCREATED" hidden="hidden" name="APEM_DTCREATED" class="form-control APEMDBfields">
                     <input type="text" id="APEM_CREATEDBY" hidden="hidden" name="APEM_CREATEDBY" class="form-control APEMDBfields">
                     <input type="text" id="APEM_DTMODIFIED" hidden="hidden" name="APEM_DTMODIFIED" class="form-control APEMDBfields">
                     <input type="text" id="APEM_MODIFIEDBY" hidden="hidden"  name="APEM_MODIFIEDBY" class="form-control APEMDBfields">
                     <input type="text" id="APEM_EMPRMNT" hidden="hidden"  name="APEM_EMPRMNT" class="form-control APEMDBfields">
                     <div class="form-row">
                        <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_SGETFIXEMPRMNTDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4','EMPOWERMNTGRD');" id="BTNEMPOWERMNT" name="BTNEMPOWERMNT" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table4">
                           </table>
                        </div>
                     </div>
					 <div class="form-row">
        		        <div class="col Btxt3">Manual Empowerment</div>
        	         </div>
					 <div class="form-row">
                        <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table5',{spname:'LSW_SEMPWMDDATAGRD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4','MNUEMPOWERMNT');" id="BTNMANUEMPOWERMNT" name="BTNMANUEMPOWERMNT" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table5">
                           </table>
                        </div>
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
         <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a>-->
                              </div>
                          </div>
						  </br>
						  <div class="form-row">
							<div class=" col-md-4" style="display:none">
							<select class="md-form colorful-select dropdown-primary APEMDBfields " onchange="RechkApprlNote()" id="APEM_360EMPWRUSR" name="APEM_360EMPWRUSR">
							
						 </select>
						 <label class="mdb-main-label BTxt9" >360 Degree<span class="MndtryAstr">*</span></label>
							</div>
						  </div>
                     <div class="form-row">
                        <div class="col d-flex justify-content-center">
                        	<button type="button" id="SaveE11" data-aria="LSW_TAPPREMPR|APEM" data-form="FamilyBackground" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>
                            <button type="button" id="SaveE11" data-aria="LSW_TAPPREMPR|APEM" data-form="FamilyBackground" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
						</div>
                     </div>
                  </form>
               </div>
          <!--   </div> -->
         </div>
      <!-- card -->
   </div>
</div>
<!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/UCV/Approve/Script/Empwr/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Approve/Script/Empwr/Validation.js${DMY13}"></script>      
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>                      
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