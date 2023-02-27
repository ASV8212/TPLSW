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
                  <input type="text" id="TOMF_PRCSID" hidden="hidden" name="TOMF_PRCSID" class="form-control TOMFDBfields">
                  <input type="text" id="TOMF_ACTIVITYID" hidden="hidden" name="TOMF_ACTIVITYID" class="form-control TOMFDBfields">
                  <input type="text" id="TOMF_CREATEDBY" hidden="hidden" name="TOMF_CREATEDBY" class="form-control TOMFDBfields"> 
                  <input type="text" id="TOMF_DTCREATED" hidden="hidden" name="TOMF_DTCREATED" class="form-control TOMFDBfields">
                  <input type="text" id="TOMF_MODIFIEDBY" hidden="hidden" name="TOMF_MODIFIEDBY" class="form-control TOMFDBfields">
                  <input type="text" id="TOMF_DTMODIFIED" hidden="hidden" name="TOMF_DTMODIFIED" class="form-control TOMFDBfields">
				  <input type="text" id="TOMF_SCHEMENAME" hidden="hidden" name="TOMF_SCHEMENAME" class="form-control TOMFDBfields">
				  <input type="text" id="TOMF_SCHEMEID" hidden="hidden" name="TOMF_SCHEMEID" class="form-control TOMFDBfields">
				  <input type="text" id="TOMF_TURNOVERFIN" hidden="hidden" name="TOMF_TURNOVERFIN" class="form-control TOMFDBfields">
				  
                   
				 </br>
				  <div class="form-row">
        	<div class="col Btxt10">TurnOver Method - originally suggested by Nayak Committee for SSI units</div>
        </div>
      	</br>
       <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_STURNOVERI',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#TOMF_SCHEMEID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4','TRNOVERI');" id="BTNTRNOVERIGRD" name="BTNTRNOVERIGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table4">
             </table>
           </div>
        </div> 
			</br>
				   
				  </br>
                  <div class="form-row">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TTURNOVERFIN|TOMF|TOMF_SCHEMEID" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                      <!--  <button type="button" data-aria="LSW_TTAKEOVERUBL|TOMF" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> -->
                     </div>
                  </div>
             
            </form>
         </div>
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
       <!--  </div>
    card 
   </div>
</div>-->
<!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/AllianceTMF/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/AllianceTMF/Validation.js${DMY13}"></script>                            
 