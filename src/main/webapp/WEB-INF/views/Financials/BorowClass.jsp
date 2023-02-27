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
                           <label class="mdb-main-label BTxt9">Borrower Classification<span class="MndtryAstr">*</span></label>
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
				   <div class="col-md-6 PSL">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary  BOCLDBfields BOCLMndtry"   id="BOCL_PSLCLASS" name="BOCL_PSLCLASS">
                           <option value="">--Select--</option>
                           <option value="Yes">Yes</option>
                           <option value="No">No</option>
                            
						   </select>
                           <label class="mdb-main-label BTxt9">PSL Classification <span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
					<div class="col-md-6 RATING" >
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary  BOCLDBfields BOCLMndtry" onchange="Chkrating()"  id="BOCL_RATINGDTLS" name="BOCL_RATINGDTLS">                   
                           <option value="">--Select--</option>
                           <option value="Yes">Yes</option>
                           <option value="No">No</option>
                            
						   </select>
                           <label class="mdb-main-label BTxt9">Rating Details<span class="MndtryAstr">*</span></label>
                        </div>
                    </div>
					
				<div class="col-md-6 RAT">
                   <div class="md-form">
                     <input type="text" id="BOCL_RATING"  maxlength="25" name="BOCL_RATING" class="form-control   BOCLDBfields ">
                     <label for="BOCL_RATING" class="">Rating<span class="MndtryAstr">*</span></label>
                   </div>
                </div>				
			</div>
			<div class="form-row">
				<div class="col-md-6">
                    <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary  BOCLDBfields BOCLMndtry"   id="BOCL_RISKSHARE" name="BOCL_RISKSHARE">                    
                           <option value="Referral">Referral</option>
                           <option value="Risk Share">Risk Share</option>
						   <option value="Direct">Direct</option>                                                      
						   </select>
                           <label class="mdb-main-label BTxt9">Risk Sharing<span class="MndtryAstr">*</span></label>
                     </div>
                </div>
					
				<div class="col-md-6">
				   <div class="md-form">
						<label for="BOCL_PSLREMARK" class="">Remarks</label>
						</br>
							<textarea class="form-control btxt24 AddrNoSpecialChar BOCLDBfields  " rows="5" id="BOCL_PSLREMARK" name="BOCL_PSLREMARK" data-to="" style="height: 130px;width:502px;"></textarea>						
					</div>
				</div>		
			</div>
	<div class="form-row RATING">
		<div class="col-md-6">
			<div class="md-form">
				<div class="md-form">
                    <div  class="select-radio"> 
						<div class="custom-control custom-radio custom-control-inline">
							<input type="radio" class="custom-control-input BOCLDBfields" onclick="CheckAmt()" value="Plant and Machinery" id="PLANT" name="BOCL_BORWERRADIO">
							<label class="custom-control-label" for="PLANT">Plant and Machinery</label>
						</div>
						<div class="custom-control custom-radio custom-control-inline">
							<input type="radio"  class="custom-control-input BOCLDBfields" onclick="CheckAmt()" value="Turnover" id="TURNOVER" name="BOCL_BORWERRADIO">
							<label class="custom-control-label" for="TURNOVER">Turnover</label>
						</div>
                   </div>   
				<!--<label for="mdb-main-label BTxt9" class="Btxt10">Borrower<span class="MndtryAstr"></span></label>				   -->
				</div>
            </div>
		</div>
		<div class="col-md-6 AMT" style="display:none">
            <div class="md-form">
                <input type="text" id="BOCL_AMT"  maxlength="25" name="BOCL_AMT" class="form-control IsNumberFields IsGreaterzeroFld IsCURCommaFields BOCLDBfields ">
					<label for="BOCL_AMT" class="">Amount<span class="MndtryAstr">*</span></label>
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
 