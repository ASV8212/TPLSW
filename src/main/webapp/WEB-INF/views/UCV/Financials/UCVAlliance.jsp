</br>
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="">


                            <!--Admin panel-->
                            <div class="admin-panel">
				
</br>

<div class="card CardNS">
    <!-- Card body -->
    <div>
      <div class="card-body px-lg-5 pt-0">
     	<form>
      	<input type="text" id="CAMA_PRCSID" hidden="hidden" name="CAMA_PRCSID" class="form-control CAMADBfields">
         <input type="text" id="CAMA_ACTIVITYID" hidden="hidden" name="CAMA_ACTIVITYID" class="form-control CAMADBfields">
         <input type="text" id="CAMA_CREATEDBY" hidden="hidden" name="CAMA_CREATEDBY" class="form-control CAMADBfields">
         <input type="text" id="CAMA_DTCREATED" hidden="hidden" name="CAMA_DTCREATED" class="form-control CAMADBfields">
         <input type="text" id="CAMA_MODIFIEDBY" hidden="hidden" name="CAMA_MODIFIEDBY" class="form-control CAMADBfields">
         <input type="text" id="CAMA_DTMODIFIED" hidden="hidden" name="CAMA_DTMODIFIED" class="form-control CAMADBfields">
		 <input type="text" hidden="hidden" id="CAMA_SCHEMEID" value="S00001" name="CAMA_SCHEMEID" class="form-control CAMADBfields">
	     <input type="text" id="CAMA_SCHEMENAME" hidden="hidden" name="CAMA_SCHEMENAME" class="form-control CAMADBfields">
		 
		 <input type="text" id="CAMA_MPBFMRTHODI" hidden="hidden" name="CAMA_MPBFMRTHODI" class="form-control CAMADBfields">
         <input type="text" id="CAMA_MPBFMRTHODII" hidden="hidden" name="CAMA_MPBFMRTHODII" class="form-control CAMADBfields">
         <input type="text" id="CAMA_TOMTHODI" hidden="hidden" name="CAMA_TOMTHODI" class="form-control CAMADBfields">
         <input type="text" id="CAMA_TOMTHODII" hidden="hidden" name="CAMA_TOMTHODII" class="form-control CAMADBfields">
		 <input type="text" id="CAMA_TOMTHODIII" hidden="hidden" name="CAMA_TOMTHODIII" class="form-control CAMADBfields">
		 <input type="text" hidden="hidden" id="CAMA_ELIGCALCI" name="CAMA_ELIGCALCI" class="form-control CAMADBfields">
	     <input type="text" id="CAMA_ELIGCALCII" hidden="hidden" name="CAMA_ELIGCALCII" class="form-control CAMADBfields">
      	</br>
		
		<div class="form-row">
           <div class="col Btxt3">Aliance</div>
        </div>
        </br>
        <div class="form-row">
        	<div class="col Btxt10">MPBF Method - Tandons 1st method of lending</div>
        </div>
      	</br>
       <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SMPBFMRTHODI',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CAMA_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4','MPBFI');" id="BTNMPBFIGRD" name="BTNMPBFIGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table2">
             </table>
           </div>
        </div> 
		 <div class="form-row">
        	<div class="col Btxt10">MPBF Method - Tandons 2nd method of lending</div>
        </div>
      	</br>
       <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SMPBFMRTHODII',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CAMA_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4','MPBFII');" id="BTNMPBFIIGRD" name="BTNMPBFIIGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table3">
             </table>
           </div>
        </div> 
		 <div class="form-row">
        	<div class="col Btxt10">TurnOver Method - originally suggested by Nayak Committee for SSI units</div>
        </div>
      	</br>
       <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_STURNOVERI',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CAMA_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4','TRNOVERI');" id="BTNTRNOVERIGRD" name="BTNTRNOVERIGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table4">
             </table>
           </div>
        </div> 
		 <div class="form-row">
        	<div class="col Btxt10">TurnOver Method - originally suggested by Nayak Committee for SSI units</div>
        </div>
      	</br>
       <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table5',{spname:'LSW_STURNOVERII',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CAMA_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4','TRNOVERII');" id="BTNTRNOVERIIGRD" name="BTNTRNOVERIIGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table5">
             </table>
           </div>
        </div> 
      	</br>
		 <div class="form-row">
        	<div class="col Btxt10">TurnOver Method - originally suggested by Nayak Committee for SSI units</div>
        </div>
      	</br>
       <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table6',{spname:'LSW_STURNOVERIII',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CAMA_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4','TRNOVERIII');" id="BTNTRNOVERIIIGRD" name="BTNTRNOVERIIIGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table6">
             </table>
           </div>
        </div> 
      	</br>
		<div class="form-row">
        	<div class="col Btxt10">Eligibility Calculation - Actual/Existing Purchase Method</div>
        </div>
      	</br>
       <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table7',{spname:'LSW_SELIGCALCI',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CAMA_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4','ELIGCALCI');" id="BTNELIGCALCIGRD" name="BTNELIGCALCIGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table7">
             </table>
           </div>
        </div> 
      	</br>
		</br>
		<div class="form-row">
        	<div class="col Btxt10">Eligibility Calculation - Projected Purchase Method</div>
        </div>
      	</br>
       <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table8',{spname:'LSW_SELIGCALCII',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CAMA_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4','ELIGCALCII');" id="BTNELIGCALCIIGRD" name="BTNELIGCALCIIGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table8">
             </table>
           </div>
        </div> 
      	</br>
      	    <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="LSW_TMPBFMETODFST|CAMA|CAMA_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TMPBFMETODFST|CAMA|CAMA_SCHEMEID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                </div>
            </div>
       	</form>
      </div>
    </div>
  </div>
 </div>
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
<table style="display:none" id="GridTable3">
   <thead>
<th>MPII_PARTICULARS</th>
<th>MPII_VALUEI</th>
<th>MPII_VALUEII</th>
<th>MPII_SCHEMEID</th>
<th>MPII_SEQID</th>
<!-- 
<th>FRCC_PRCSID</th>
<th>FRCC_ACTIVITYID</th>
<th>FRCC_DTCREATED</th>
<th>FRCC_CREATEDBY</th>
<th>FRCC_DTMODIFIED</th>
<th>FRCC_MODIFIEDBY</th>  -->
   </thead> 
    </table> 
<table style="display:none" id="GridTable4">
   <thead>
<th>TOMI_PARTICULARS</th>
<th>TOMI_VALUEI</th>
<th>TOMI_VALUEII</th>
<th>TOMI_SCHEMEID</th>
<th>TOMI_SEQID</th>
<!-- 
<th>FRCC_PRCSID</th>
<th>FRCC_ACTIVITYID</th>
<th>FRCC_DTCREATED</th>
<th>FRCC_CREATEDBY</th>
<th>FRCC_DTMODIFIED</th>
<th>FRCC_MODIFIEDBY</th>  -->
   </thead> 
    </table>	
	<table style="display:none" id="GridTable5">
   <thead>
<th>TOII_PARTICULARS</th>
<th>TOII_VALUEI</th>
<th>TOII_VALUEII</th>
<th>TOII_SCHEMEID</th>
<th>TOII_SEQID</th>
<!-- 
<th>FRCC_PRCSID</th>
<th>FRCC_ACTIVITYID</th>
<th>FRCC_DTCREATED</th>
<th>FRCC_CREATEDBY</th>
<th>FRCC_DTMODIFIED</th>
<th>FRCC_MODIFIEDBY</th>  -->
</thead> 
</table>	
<table style="display:none" id="GridTable6">
<thead>
<th>TIII_PARTICULARS</th>
<th>TIII_VALUEI</th>
<th>TIII_VALUEII</th>
<th>TIII_SCHEMEID</th>
<th>TIII_SEQID</th>
<!-- 
<th>FRCC_PRCSID</th>
<th>FRCC_ACTIVITYID</th>
<th>FRCC_DTCREATED</th>
<th>FRCC_CREATEDBY</th>
<th>FRCC_DTMODIFIED</th>
<th>FRCC_MODIFIEDBY</th>  -->
 </thead> 
 </table>	
 <table style="display:none" id="GridTable7">
<thead>
<th>EGCI_PARTICULARS</th>
<th>EGCI_VALUEI</th>
<th>EGCI_VALUEII</th>
<th>EGCI_SCHEMEID</th>
<th>EGCI_SEQID</th>
<!-- 
<th>FRCC_PRCSID</th>
<th>FRCC_ACTIVITYID</th>
<th>FRCC_DTCREATED</th>
<th>FRCC_CREATEDBY</th>
<th>FRCC_DTMODIFIED</th>
<th>FRCC_MODIFIEDBY</th>  -->
 </thead> 
 </table>

 <table style="display:none" id="GridTable8">
<thead>
<th>ECII_PARTICULARS</th>
<th>ECII_VALUEI</th>
<th>ECII_VALUEII</th>
<th>ECII_SCHEMEID</th>
<th>ECII_SEQID</th>
<!-- 
<th>FRCC_PRCSID</th>
<th>FRCC_ACTIVITYID</th>
<th>FRCC_DTCREATED</th>
<th>FRCC_CREATEDBY</th>
<th>FRCC_DTMODIFIED</th>
<th>FRCC_MODIFIEDBY</th>  -->
 </thead> 
 </table>	 
						 
						  
   <script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/Aliance/LoadSubmit.js${DMY13}"></script>
   <script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/Aliance/Validation.js${DMY13}"></script>
                                  <!--   </div>
                                </div>   -->                           