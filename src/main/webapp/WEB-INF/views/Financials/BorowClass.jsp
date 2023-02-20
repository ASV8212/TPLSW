 <!-- card -->
 </br>
          <div class="card CardNS">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                  <input type="text" id="BOCL_PRCSID" hidden="hidden" name="BOCL_PRCSID" class="form-control BOCLDBfields">
                  <input type="text" id="BOCL_ACTIVITYID" hidden="hidden" name="BOCL_ACTIVITYID" class="form-control BOCLDBfields">
                  <input type="text" id="BOCL_CREATEDBY" hidden="hidden" name="BOCL_CREATEDBY" class="form-control BOCLDBfields"> 
                  <input type="text" id="BOCL_DTCREATED" hidden="hidden" name="BOCL_DTCREATED" class="form-control BOCLDBfields">
                  <input type="text" id="BOCL_MODIFIEDBY" hidden="hidden" name="BOCL_MODIFIEDBY" class="form-control BOCLDBfields">
                  <input type="text" id="BOCL_DTMODIFIED" hidden="hidden" name="BOCL_DTMODIFIED" class="form-control BOCLDBfields">
                   
				 </br>
				 
				   <div class="form-row">
				   <div class="col-md-6">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary  BOCLDBfields BOCLMndtry"     id="BOCL_BOROWCLASS" name="BOCL_BOROWCLASS">
                           <!--<option value="">--Select--</option>
						   <option value="Micro">Micro</option>
						   <option value="Small">Small</option>
						   <option value="Medium">Medium</option>
						   <option value="NA">NA</option>-->
						   </select>
                           <label class="mdb-main-label BTxt9">Borower Classification<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
					 <div class="col-md-6">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary  BOCLDBfields BOCLMndtry"    id="BOCL_SECTOR" name="BOCL_SECTOR">
                          <!-- <option value="">--Select--</option>
                           <option value="Manufacturing">Manufacturing</option>
                           <option value="Trade">Trade</option>
                           <option value="Services">Services</option>-->
						   </select>
                           <label class="mdb-main-label BTxt9">Sector<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
				   
				   
				   
				   </div>
				   <div class="form-row">
				   <div class="col-md-6">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary  BOCLDBfields BOCLMndtry"   id="BOCL_PSLCLASS" name="BOCL_PSLCLASS">
                           <option value="">--Select--</option>
                           <option value="Yes">Yes</option>
                           <option value="No">No</option>
                            
						   </select>
                           <label class="mdb-main-label BTxt9">PSL Classification <span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
					 
				   <div class="col-md-6">
				   <div class="md-form">
						<label for="BOCL_PSLREMARK" class="">PSL Remarks</label>
						</br>
							<textarea class="form-control btxt24 AddrNoSpecialChar BOCLDBfields  " rows="5" id="BOCL_PSLREMARK" name="BOCL_PSLREMARK" data-to="" style="height: 130px;width:502px;"></textarea>
						
						</div>
						</div>
				 </div>
				 
				 
  
                  </br>
				  </br>
                  <div class="form-row">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TBOROWCLASS|BOCL" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TBOROWCLASS|BOCL" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                     </div>
                  </div>
             
            </form>
         </div>
      </div>
      <!-- card -->
<!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/Financials/Script/BorowClass/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Financials/Script/BorowClass/Validation.js${DMY13}"></script>                            
 