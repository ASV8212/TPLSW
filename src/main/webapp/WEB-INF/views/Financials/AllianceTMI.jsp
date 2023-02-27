</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<!--<div class="">-->
   <!--Admin panel-->
   <!--<div class="admin-panel">-->
     
      </br>
      <!-- card -->
      <div class="card">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
                  <input type="text" id="ATMI_PRCSID" hidden="hidden" name="ATMI_PRCSID" class="form-control ATMIDBfields">
                  <input type="text" id="ATMI_ACTIVITYID" hidden="hidden" name="ATMI_ACTIVITYID" class="form-control ATMIDBfields">
                  <input type="text" id="ATMI_CREATEDBY" hidden="hidden" name="ATMI_CREATEDBY" class="form-control ATMIDBfields"> 
                  <input type="text" id="ATMI_DTCREATED" hidden="hidden" name="ATMI_DTCREATED" class="form-control ATMIDBfields">
                  <input type="text" id="ATMI_MODIFIEDBY" hidden="hidden" name="ATMI_MODIFIEDBY" class="form-control ATMIDBfields">
                  <input type="text" id="ATMI_DTMODIFIED" hidden="hidden" name="ATMI_DTMODIFIED" class="form-control ATMIDBfields">
				  <input type="text" id="ATMI_SCHEMENAME" hidden="hidden" name="ATMI_SCHEMENAME" class="form-control ATMIDBfields">
				  <input type="text" id="ATMI_SCHEMEID" hidden="hidden" name="ATMI_SCHEMEID" class="form-control ATMIDBfields">
				  <input type="text" id="ATMI_ALLIANCETMI" hidden="hidden" name="ATMI_ALLIANCETMI" class="form-control ATMIDBfields">
				  <input type="text" id="ATMI_LOANID" hidden="hidden" name="ATMI_LOANID" class="form-control ATMIDBfields">
				  
                   
				 </br>
				 <div class="form-row">
        	<div class="col Btxt10">MPBF Method - Tandons 1st method of lending</div>
        </div>
		 </br>
		 <div class="form-row">
        	<div class="col Btxt10" style="color: rgb(255, 0, 0);">Details to be entered in actuals (Rs)</div>
        </div>
		
		<div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SMPBFMRTHODI',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#ATMI_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||2,3,4','MPBFI');" id="BTNMPBFIGRD" name="BTNMPBFIGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table2">
             </table>
           </div>
        </div> 
			</br>
				   
				  </br>
                  <div class="form-row">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TALLIANCETMI|ATMI|ATMI_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                      <!--  <button type="button" data-aria="LSW_TTAKEOVERUBL|ATMI" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> -->
                     </div>
                  </div>
             
            </form>
         </div>
		 <table style="display:none" id="GridTable2">
   <thead>
<th>MPMI_PARTICULARS</th>
<th>MPMI_VALUEI</th>
<th>MPMI_VALUEII</th>
<th>MPMI_SCHEMEID</th>
<th>MPMI_SEQID</th>
<!-- 
<th>FRCC_PRCSID</th>
<th>FRCC_ACTIVITYID</th>
<th>FRCC_DTCREATED</th>
<th>FRCC_CREATEDBY</th>
<th>FRCC_DTMODIFIED</th>
<th>FRCC_MODIFIEDBY</th>  -->
   </thead> 
    </table> 
	</div>
       <!--  </div>
    card 
   </div>
</div>-->
<!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/Financials/Script/AllianceTMI/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Financials/Script/AllianceTMI/Validation.js${DMY13}"></script>                            
 