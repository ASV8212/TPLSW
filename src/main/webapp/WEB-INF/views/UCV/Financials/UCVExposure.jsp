 <div class="">
 <div class="admin-panel">
  <!-- Accordion card -->
  <div class="card CardNS">
    <!-- Card header -->
	<div class="card-body px-lg-5 pt-0" >
            </br>
        <form>
			<input type="text" id="EXPO_PRCSID" hidden="hidden" name="EXPO_PRCSID" class="form-control EXPODBfields">
			<input type="text" id="EXPO_ACTIVITYID" hidden="hidden" name="EXPO_ACTIVITYID" class="form-control EXPODBfields">
			<input type="text" id="EXPO_CREATEDBY" hidden="hidden" name="EXPO_CREATEDBY" class="form-control EXPODBfields"> 
			<input type="text" id="EXPO_DTCREATED" hidden="hidden" name="EXPO_DTCREATED" class="form-control EXPODBfields">
			<input type="text" id="EXPO_MODIFIEDBY" hidden="hidden" name="EXPO_MODIFIEDBY" class="form-control EXPODBfields">
			<input type="text" id="EXPO_DTMODIFIED" hidden="hidden" name="EXPO_DTMODIFIED" class="form-control EXPODBfields">
<input type="text" id="EXPO_EXPGRIDDETL" hidden="hidden" name="EXPO_EXPGRIDDETL" class="form-control EXPODBfields"> 			
		</br>
		<div class="form-row">
			<div class="col Btxt3">EXPOSURE</div>
        </div>
		</br>
		 <div class="form-row">
           <div class="col" style="overflow-x: auto;">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SGETEXPOSUREGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||15','EXPOSURE');" id="BTNEXPOSURE" name="BTNEXPOSURE" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
             </table>
           </div>
        </div> 	
		<BR>
		<!------ -->
		<div class="form-row">
			<div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="EXPO_PROEXPAMT"  maxlength="30"  disabled class="form-control IsCURCommaFields EXPODBfields NoSpecialChar EXPOMndtry" name="EXPO_PROEXPAMT">
                    <label for="EXPO_PROEXPAMT" class="">Proposed Exposure Amount <span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="EXPO_PROEXPDGV" name="EXPO_PROEXPDGV" maxlength="30"   disabled class="form-control IsCURCommaFields NoSpecialChar  EXPODBfields ">
                   <label for="EXPO_PROEXPDGV" class="">Proposed Exposure DGV<span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
              <div class="md-form">
                <input type="text" id="EXPO_PRINPAL"  maxlength="30" disabled  class="form-control IsCURCommaFields EXPODBfields NoSpecialChar " name="EXPO_PRINPAL">
                <label for="EXPO_PRINPAL" class="">Principal O/s <span class="MndtryAstr">*</span></label>
              </div>
            </div>  
		</div>
		<div class="form-row">
            <div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="EXPO_GROSSEXPO" name="EXPO_GROSSEXPO" maxlength="30" disabled class="form-control NoSpecialChar IsCURCommaFields IsNumberFields EXPODBfields EXPOMndtry CalcGROSS">
                   <label for="EXPO_GROSSEXPO" class="">Gross Exposure<span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
               <div class="md-form">
                  <input type="text" id="EXPO_NETEXPO" disabled maxlength="30" class="form-control IsCURCommaFields EXPODBfields NoSpecialChar EXPOMndtry" name="EXPO_NETEXPO">
                  <label for="EXPO_NETEXPO" class="">Net Exposure <span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                   <input type="text" id="EXPO_DEFCLRSTATS" name="EXPO_DEFCLRSTATS" maxlength="30"  class="form-control NoSpecialChar EXPODBfields EXPOMndtry">
                   <label for="EXPO_DEFCLRSTATS" class="">Exsisting Exposure Deferral Clearance Status<span class="MndtryAstr">*</span></label>
                </div>
            </div> 
		</div>
		<div class="form-row">
			<div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="EXPO_PHYBYCOPS" name="EXPO_PHYBYCOPS" maxlength="30"    class="form-control NoSpecialChar EXPODBfields EXPOMndtry">
                    <label for="EXPO_PHYBYCOPS" class="">Existing Exposure Physical file Received by Cops<span class="MndtryAstr">*</span></label>
                </div>
            </div>
			<div class="col-md-4">
              <div class="md-form">
				 <select class="mdb-select md-form colorful-select dropdown-primary EXPODBfields EXPOMndtry"  onchange=""  id="EXPO_QURYPENCUS" name="EXPO_QURYPENCUS">
				    <option value="" >--Select--</option>
				    <option value="Yes" >Yes</option>
				    <option value="No" >No</option>
				  </select>
				 <label class="mdb-main-label BTxt9">Exsisting Exposure Files any Query Pending from Customer's <span class="MndtryAstr"></span></label>
			   </div>
			</div>
			<div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="EXPO_EXPRATIO"  maxlength="30" disabled  class="form-control IsCURCommaFields EXPODBfields NoSpecialChar " name="EXPO_EXPRATIO">
                    <label for="EXPO_EXPRATIO" class="">DGV / Exposure Ratio <span class="MndtryAstr">*</span></label>
                </div>
            </div>
		</div>
		 <div class="form-row">
            <div class="col d-flex justify-content-center">
                <button type="button" id="Save" data-aria="LSW_TEXPOSURE|EXPO|"  class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
             <button type="button" data-aria="LSW_TEXPOSURE|EXPO|" data-card="2"  class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
            </div>
        </div>
   </form>
 </div>
</div>
    <!-- Card body -->
   
  </div>
							 
							 
 <table style="display:none" id="GridTable3">
<thead>
<th>EXPS_SrNo</th>
<th>EXPS_NAME</th>
<th>EXPS_LOANAGGNUM</th>
<th>EXPS_VEHICLENO</th>
<th>EXPS_ASSETNAME</th>
<th>EXPS_MFGYEAR</th>
<th>EXPS_LOANAMT</th>
<th>EXPS_EMI</th>
<th>EXPS_TENURE</th>
<th>EXPS_CLEAR</th>
<Th>EXPS_PEAKDELAY</th>
<th>EXPS_AVGDELAY</th>
<th>EXPS_STATUS</th>
<th>EXPS_PRIN</th>
<th>EXPS_CURRENTDGV</th>
<th>EXPS_EXNO</th>
</thead>
</table>
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/Exposure/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/Exposure/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
</div>