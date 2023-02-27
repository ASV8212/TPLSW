
 
  <!-- Accordion card -->
  <div class="card">
    <!-- Card header -->
	<div class="card-body px-lg-5 pt-0" >
            </br>
        <form>
			<input type="text" id="CRSM_PRCSID" hidden="hidden" name="CRSM_PRCSID" class="form-control CRSMDBfields">
			<input type="text" id="CRSM_ACTIVITYID" hidden="hidden" name="CRSM_ACTIVITYID" class="form-control CRSMDBfields">
			<input type="text" id="CRSM_CREATEDBY" hidden="hidden" name="CRSM_CREATEDBY" class="form-control CRSMDBfields"> 
			<input type="text" id="CRSM_DTCREATED" hidden="hidden" name="CRSM_DTCREATED" class="form-control CRSMDBfields">
			<input type="text" id="CRSM_MODIFIEDBY" hidden="hidden" name="CRSM_MODIFIEDBY" class="form-control CRSMDBfields">
			<input type="text" id="CRSM_DTMODIFIED" hidden="hidden" name="CRSM_DTMODIFIED" class="form-control CRSMDBfields">
		
			<input type="text" id="CRSM_SCOREDET" hidden="hidden" name="CRSM_SCOREDET" class="form-control CRSMDBfields">       
		</br>
		 <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SGETSCORECARDDETMSMEALLIANCE',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4','RCU');" id="BTNRCUGRD" name="BTNRCUGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
             </table>
          </div>
        </div>  
		<div class="form-row">
			<div class="col-md-6 BluShd"> 
                   <label for="" class="Btxt10">Final Score<span class="MndtryAstr"></span></label>
                </div>
			<div class="col-md-6 BluShd"> 
                   <input type="text" id="CRSM_FINLSCR" disabled="" name="CRSM_FINLSCR" value="0" class="form-control   Btxt04 IsCURCommaFields  IsNumberFields NoSpecialChar  CRSMDBfields">
                </div>
		</div>
		
	 </br>
        <div class="form-row">
            <div class="col d-flex justify-content-center">
                <button type="button" id="Save" data-aria="LSW_TSCORECARD|CRSM|" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                <button type="button" data-aria="LSW_TSCORECARD|CRSM|" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
            </div>
        </div>
             
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
<script type="text/javascript" src="ThemeproLO/Financials/Script/ScorecardAlliance/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Financials/Script/ScorecardAlliance/Validation.js${DMY13}"></script>
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div>
                                </div>   -->                           