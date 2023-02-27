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
               <input type="text" id="GECL_PRCSID" hidden="hidden" name="GECL_PRCSID" class="form-control GECLDBfields">
               <input type="text" id="GECL_ACTIVITYID" hidden="hidden" name="GECL_ACTIVITYID" class="form-control GECLDBfields">
               <input type="text" id="GECL_DTCREATED" hidden="hidden" name="GECL_DTCREATED" class="form-control GECLDBfields">
               <input type="text" id="GECL_CREATEDBY" hidden="hidden" name="GECL_CREATEDBY" class="form-control GECLDBfields">
               <input type="text" id="GECL_DTMODIFIED" hidden="hidden" name="GECL_DTMODIFIED" class="form-control GECLDBfields">
               <input type="text" id="GECL_MODIFIEDBY" hidden="hidden"  name="GECL_MODIFIEDBY" class="form-control GECLDBfields">

			   
              <div class="form-row NormalFld">
			                 <div class="Btxt10">GECL Additional CheckList</div>
			  </div>
						 
									<div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="UDYOG AADHAR No" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class=" col-md-4">
										 <div class="md-form">
											<input type="text" id="GECL_UDYAADHAR" name="GECL_UDYAADHAR" value="XXXXXXXX" maxlength="12"  class="form-control IsNumberFields NoSpecialChar IsAadharFields GECLDBfields  ">   
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="Industry Nature" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class="col-md-4">
										 <div class="md-form">
											<select class="mdb-select md-form colorful-select dropdown-primary GECLMndtry GECLDBfields GECLDROPDOWN"  onchange="CheckLSTDropDownOnChng(this.value)" id="GECL_INDUSNATUR" name="GECL_INDUSNATUR">
											</select>
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="Industry Sector" style="height: 130px;width:300px;" disabled class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class="col-md-4">
										 <div class="md-form">
											<select class="mdb-select md-form colorful-select dropdown-primary GECLMndtry GECLDBfields GECLDROPDOWN"  onchange="" id="GECL_INDUSSEC" name="GECL_INDUSSEC">
											</select>
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="No. of Empoyees" style="height: 130px;width:300px;" disabled class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class="col-md-4">
										 <div class="md-form">
											<input type="text" id="GECL_NOOFEMP" name="GECL_NOOFEMP" maxlength='6' class="form-control GECLMndtry GECLDBfields IsNumberFields"> 
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class="col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="AADHAR Number" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class="col-md-4">
										 <div class="md-form">
											<input type="text" id="GECL_AADHAR" name="GECL_AADHAR" value="XXXXXXXX" maxlength="12" class="form-control IsNumberFields IsAadharFields GECLDBfields"> 
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="Chief Promoter Gender" style="height: 130px;width:300px;" disabled class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class=" col-md-4">
										 <div class="md-form">
											<select class="mdb-select md-form colorful-select dropdown-primary GECLMndtry GECLDBfields GECLDROPDOWN"  onchange="" id="GECL_CHIEFPROMO" name="GECL_CHIEFPROMO">
											</select>
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="Type of Entity" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class=" col-md-4">
										 <div class="md-form">
											<select class="mdb-select md-form colorful-select dropdown-primary GECLDBfields GECLMndtry GECLDROPDOWN"  onchange="" id="GECL_ENTITYTYPE" name="GECL_ENTITYTYPE">
											</select>
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="Sales Turnover of Last F.Y (Rs.)" style="height: 130px;width:300px;" disabled class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class=" col-md-4">
										 <div class="md-form">
											<input type="text" id="GECL_SALESTURNOVER" name="GECL_SALESTURNOVER"  class="form-control GECLMndtry IsCURCommaFields NoSpecialChar GECLDBfields  "> 
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="Type of Borrower" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class=" col-md-4">
										 <div class="md-form">
											<select class="mdb-select md-form colorful-select dropdown-primary GECLDBfields GECLMndtry GECLDROPDOWN"  onchange="" id="GECL_BORROWTYPE" name="GECL_BORROWTYPE">
											</select>
										 </div>
									  </div>
								   </div>
				</div>
               <div class="form-row">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="Save1" data-aria="LSW_TGECLCKLST|GECL"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                              <button type="button" data-aria="LSW_TGECLCKLST|GECL" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
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
<script type="text/javascript" src="ThemeproLO/UCV/Approve/Script/GECLCklst/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Approve/Script/GECLCklst/Validation.js${DMY13}"></script>                            
