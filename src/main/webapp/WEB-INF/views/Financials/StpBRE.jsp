
 
  <!-- Accordion card -->
  <div class="card">
    <!-- Card header -->
	<div class="card-body px-lg-5 pt-0" >
            </br>
        <form>
			<!--<input type="text" id="CRSM_PRCSID" hidden="hidden" name="CRSM_PRCSID" class="form-control CRSMDBfields">
			<input type="text" id="CRSM_ACTIVITYID" hidden="hidden" name="CRSM_ACTIVITYID" class="form-control CRSMDBfields">
			<input type="text" id="CRSM_CREATEDBY" hidden="hidden" name="CRSM_CREATEDBY" class="form-control CRSMDBfields"> 
			<input type="text" id="CRSM_DTCREATED" hidden="hidden" name="CRSM_DTCREATED" class="form-control CRSMDBfields">
			<input type="text" id="CRSM_MODIFIEDBY" hidden="hidden" name="CRSM_MODIFIEDBY" class="form-control CRSMDBfields">
			<input type="text" id="CRSM_DTMODIFIED" hidden="hidden" name="CRSM_DTMODIFIED" class="form-control CRSMDBfields">
		
			<input type="text" id="CRSM_SCOREDET" hidden="hidden" name="CRSM_SCOREDET" class="form-control CRSMDBfields">-->       
		</br>
		<!--<div class="form-row">
		<div class="col Btxt3">Applicant</div>
			</div>-->
			<div class="form-row">
				  <div class="md-form">
                           <div id="flowtype" class="select-radio LODEMndtry ">
                              <div class="custom-control custom-radio custom-control-inline">
                                 <input type="radio" class="custom-control-input LODEDBfields " disabled  value="Yes" id="FLOWTYPEYES" name="LODE_FLOWTYP">
                                 <label class="custom-control-label" for="FLOWTYPEYES">STP</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline LODEDBfields">
                                 <input type="radio" class="custom-control-input LODEDBfields " disabled value="No" id="FLOWTYPENO" name="LODE_FLOWTYP">
                                 <label class="custom-control-label" for="FLOWTYPENO">BAU</label>
                              </div>
                           </div>
                           <label class="mdb-main-label BTxt9">Flow Type<span class="MndtryAstr">*</span></label>      
                        </div>
				  </div>
				  
		 <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'TableSTP',{spname:'LSW_SSTPBREGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,2','STPBRE');" id="BTNSTPBREGRD" name="BTNSTPBREGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="TableSTP">
             </table>
          </div>
        </div>  
		</br>
		<!--<div class="form-row">
		<div class="col Btxt3">Co-Applicant</div>
			</div>
		 <div class="form-row T316" style="display:none;">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SGETBREDETAILS_COAPPLN',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||2','BRE');" id="BTNBREGRD1" name="BTNBREGRD1" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
             </table>
          </div>
        </div>--> 
		
	 </br>
       
             
        </form>
    </div>
		  

    <!-- Card body -->
   
  </div>
							 
							 
 <table style="display:none" id="GridTable2">
   <thead>
<th>CRSC_UNIQID</th>
<th>CRSC_PARTICULAR</th>
<th>CRSC_WEIGHT</th>
<th>CRSC_SCORE</th>
<th>CRSC_FINALSCORE</th>
<!-- <th>RCUS_PRCSID</th>
<th>RCUS_ACTIVITYID</th>
<th>RCUS_DTCREATED</th>
<th>RCUS_CREATEDBY</th>
<th>RCUS_DTMODIFIED</th>
<th>RCUS_MODIFIEDBY</th> -->
   
   </thead>
   
    </table>
<script type="text/javascript" src="ThemeproLO/Financials/Script/StpBRE/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Financials/Script/StpBRE/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div>
                                </div>   -->                           