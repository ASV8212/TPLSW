</br>
<button type="button" data-Validatearia="ENACH" data-Validatedata="AEND_ENACHVERIFY" onclick="ChkENACH('AEND_ENACHVERIFY','AEND_ENACHUNIQID','AEND_ENACHURMNO','AEND_ENACHSTATUS');" data-validate="AEND|ENACH" class="btn ENACH waves-effect btn-yelInplain btn-sm  liSubpageTabIcons">Initiate E-NACH</button>
 
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
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
               <input type="text" id="AEND_PRCSID" hidden="hidden" name="AEND_PRCSID" class="form-control AENDDBfields">
               <input type="text" id="AEND_ACTIVITYID" hidden="hidden" name="AEND_ACTIVITYID" class="form-control AENDDBfields">
               <input type="text" id="AEND_DTCREATED" hidden="hidden" name="AEND_DTCREATED" class="form-control AENDDBfields">
               <input type="text" id="AEND_CREATEDBY" hidden="hidden" name="AEND_CREATEDBY" class="form-control AENDDBfields">
               <input type="text" id="AEND_DTMODIFIED" hidden="hidden" name="AEND_DTMODIFIED" class="form-control AENDDBfields">
               <input type="text" id="AEND_MODIFIEDBY" hidden="hidden"  name="AEND_MODIFIEDBY" class="form-control AENDDBfields">
			   <input type="text" id="AEND_ENACHVERIFY" hidden="hidden" name="AEND_ENACHVERIFY" class="form-control AENDDBfields">
			   <input type="text" id="AEND_ENACHUNIQID" hidden="hidden" name="AEND_ENACHUNIQID" class="form-control AENDDBfields">
			   <input type="text" id="AEND_ENACHSTATUS" hidden="hidden"  name="AEND_ENACHSTATUS" class="form-control AENDDBfields">
               <div class="form-row">
        		<div class="col Btxt3">E-REGISTRATION</div>
        		</div>
        		</br>
        		<div class="form-row">
        		<div class="col-md-4">
        		</div>
        		<div class="col-md-8">
        		<div class="HyperControls">
                    <a type="button" class="Btxt4" onclick="" data-toggle="modal" style="display:none" data-target="#ADDKYCDocModal" href="#">Link</a>
               </div>
               </div>
               </div>
        	</br>
               <div class="form-row">
                        <div class="col-md-4">
                           <div class="md-form">
                              <select class="md-form colorful-select dropdown-primary AENDDBfields" disabled onchange="AccntOnChng()" id="AEND_ACCNTNO" name="AEND_ACCNTNO">
                                 <option value="" >--Select--</option>
                              </select>
                              <label class="mdb-main-label BTxt9">Bank Account for Repayment</label>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="AEND_BANKNAME" disabled name="AEND_BANKNAME" class="form-control AENDDBfields ">
                              <label for="AEND_BANKNAME" class="">Bank Name<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="AEND_ACCNTHLDRNAME" disabled name="AEND_ACCNTHLDRNAME" class="form-control AENDDBfields ">
                              <label for="AEND_ACCNTHLDRNAME" class="">Account Holder Name<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                     </div>
					 <div class="form-row">
           <div class="col-md-4">
               <div class="md-form">
	                <input type="text" id="AEND_ENACHURMNO" disabled name="AEND_ENACHURMNO" class="form-control AENDDBfields"> 
					<label for="AEND_ENACHURMNO"  class="Btxt9 ">UMRN Number</label>
	           </div>
			</div>
			<div class="col-md-4">
               <div class="md-form">
	                <input type="text" id="AEND_SATDATE" disabled name="AEND_SATDATE" class="form-control AENDDBfields"> 
					<label for="AEND_SATDATE"  class="Btxt9 ">EMI Start Date</label>
	           </div>
			</div>
			<div class="col-md-4">
               <div class="md-form">
	                <input type="text" id="AEND_ENDDATE" disabled name="AEND_ENDDATE" class="form-control AENDDBfields"> 
					<label for="AEND_ENDDATE"  class="Btxt9 ">EMI End date</label>
	           </div>
			</div>
	   </div>
	   <div class="form-row">
           <div class="col-md-4">
               <div class="md-form">
	                <input type="text" id="AEND_EMI" disabled name="AEND_EMI" class="form-control IsCURCommaFields  AENDDBfields"> 
					<label for="AEND_EMI"  class="Btxt9 ">EMI Amount</label>
	           </div>
			</div>
			<div class="col-md-4">
               <div class="md-form">
	                <input type="text" id="AEND_REPAYMONTH" disabled name="AEND_REPAYMONTH" class="form-control AENDDBfields"> 
					<label for="AEND_REPAYMONTH"  class="Btxt9 ">Repayment in months</label>
	           </div>
			</div>
			</div>
                      <div class="form-row">
                         <div class="HyperControls">
                            <a type="button" class="Btxt4" onclick="GentrateENACH()" href="#">Print ACH</a>
                         </div>
                     </div>
                     <div class="form-row">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="Save1" data-aria="LSW_TENACHDTL|AEND"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                              <button type="button" data-aria="LSW_TENACHDTL|AEND" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Submit</button> 
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
<script type="text/javascript" src="ThemeproLO/Approve/Script/ENach/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Approve/Script/ENach/Validation.js${DMY13}"></script>                            
