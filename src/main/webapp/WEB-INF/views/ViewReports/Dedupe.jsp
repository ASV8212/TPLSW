</br>
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="">


                            <!--Admin panel-->
     <div class="admin-panel">
 <div class="card CardNS">
    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0">
        <form>
           <input type="text" id="DEDE_PRCSID" hidden="hidden" name="DEDE_PRCSID" class="form-control DEDEDBfields">
           <input type="text" id="DEDE_ACTIVITYID" hidden="hidden" name="DEDE_ACTIVITYID" class="form-control DEDEDBfields">
           <input type="text" id="DEDE_DTCREATED" hidden="hidden" name="DEDE_DTCREATED" class="form-control DEDEDBfields"> 
           <input type="text" id="DEDE_CREATEDBY" hidden="hidden" name="DEDE_CREATEDBY" class="form-control DEDEDBfields">
           <input type="text" id="DEDE_DTMODIFIED" hidden="hidden" name="DEDE_DTMODIFIED" class="form-control DEDEDBfields">
           <input type="text" id="DEDE_MODIFIEDBY" hidden="hidden" name="DEDE_MODIFIEDBY" class="form-control DEDEDBfields">
             
           <input type="text" id="DEDE_CUSID" hidden="hidden" name="DEDE_CUSID" class="form-control DEDEDBfields">
           <input type="text" id="DEDE_APPDETAILS" hidden="hidden" name="DEDE_APPDETAILS" class="form-control DEDEDBfields">
           <input type="text" id="DEDE_APPGRIDETAILS" hidden="hidden" name="DEDE_APPGRIDETAILS" class="form-control DEDEDBfields">
         <div class="form-row">
           <div data-for="APPDE" class="col APPDE"> 
           </div>
         </div>
        <div class="DynamicPageGrid" data-val="PROPTXTHDR|PROPERTY" id="APPDE" style="display:none">
        <div data-row="" class="DYNROW">
        <form>
        <input type="text" id="APDU_PRCSID" hidden="hidden" name="APDU_PRCSID" class="form-control APDUDBfields">
        <input type="text" id="APDU_ACTIVITYID" hidden="hidden" name="APDU_ACTIVITYID" class="form-control APDUDBfields">
        <input type="text" id="APDU_DTCREATED" hidden="hidden" name="APDU_DTCREATED" class="form-control APDUDBfields">
        <input type="text" id="APDU_CREATEDBY" hidden="hidden" name="APDU_CREATEDBY" class="form-control APDUDBfields">
        <input type="text" id="APDU_DTMODIFIED" hidden="hidden" name="APDU_DTMODIFIED" class="form-control APDUDBfields">
        <input type="text" id="APDU_MODIFIEDBY" hidden="hidden" name="APDU_MODIFIEDBY" class="form-control APDUDBfields">
        <input type="text" id="APDU_CUSID" hidden="hidden" name="APDU_CUSID" class="form-control APDUDBfields">
       
       <input type="text" id="APDU_DUPEVERITY" hidden="hidden" name="APDU_DUPEVERITY" class="form-control APDUDBfields">
         <!-- LSW_TDEDUBEAPPLDETAILS -->
         <br>
           <div class="form-row">
             <div class="col-md-6"> 
               <input type="text" id="APDU_NAME"  name="APDU_NAME" class="form-control DSVLBL Btxt04 APDUDBfields" >
             </div>
             <div class="col-md-6"> 
             <button type="button" onclick="DedupeChk('APDU_CUSID'+$(this).closest('.DYNROW').attr('data-row'),'BTNDEDUPEGRD'+$(this).closest('.DYNROW').attr('data-row'),'APDU_DUPEVERITY'+$(this).closest('.DYNROW').attr('data-row'),this)" data-Validatearia="APDU_DUPEVERITY"  class="FltRight APDU_DUPEVERITY waves-effect btn-yelInplain btn-sm">Re Initiate Dedupe</button>
             </div>
           </div>
    <!--    <div class="form-row">
           <div class="col">
             <input type="button" data-button="GridButton" data-value="APPLGRIDTable|LSW_SGETDEDUEGRID|PrcsID|||7|DEDUBEGRID" style="display:none" class="DashTrg DEGRBfields MultiGridTrg" id="BTNINCMGRD" name="BTNINCMGRD" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display DEGRDBfields DataGrid" name="APPLGRIDTable" id="APPLGRIDTable">
             </table>
           </div>
        </div> -->  
        <div class="form-row">
           <div class="col">
             <input type="button" data-button="GridButton" data-value="APPLGRIDTable|LSW_SGETDEDUEGRID|PrcsID|APDU_CUSID||8,9,10,11,12|DEDUBEGRID" style="display:none" class="DashTrg APDUDBfields MultiGridTrg" id="BTNDEDUPEGRD" name="BTNDEDUPEGRD" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display APDUDBfields DataGrid" name="APPLGRIDTable" id="APPLGRIDTable">
             </table>
           </div>
        </div>
   </form>
 </div>
</div>
            <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save3" data-aria="LSW_TDEDUBEDETAILS|DEDE|DEDE_CUSID" data-form="ELIGBL"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TDEDUBEDETAILS|DEDE|DEDE_CUSID" data-form="ELIGBL"  data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                </div>
            </div>	
        	
        </form>
      </div>
    </div>
    <table style="display:none" id="GridAPPLGRIDTable">
   <thead>
<th>DEGR_LONTYPE</th>
<th>DEGR_AGREEMENTNO</th>
<th>DEGR_LONAMT</th>
<th>DEGR_POS</th>
<th>DEGR_MOB</th>
<th>DEGR_NOOFBOUNCE</th>
<th>DEGR_CURRESTATUS</th>
<th>DEGR_EXISTINGCUS</th>
<th>DEGR_CUSID</th>
<th>DEGR_DIFFER</th>
<th>DEGR_EXSTATUS</th>
<th>DEGR_VALUAMT</th>
<!--<th>DEGR_PRCSID</th>
<th>DEGR_ACTIVITYID</th>
<th>DEGR_CREATEDBY</th>
<th>DEGR_DTCREATED</th>
<th>DEGR_MODIFIEDBY</th>
<th>DEGR_DTMODIFIED</th>-->
   </thead> 
    </table>    
 <!-- LSW_TDEDUBEGRID -->   
    
    <script type="text/javascript" src="ThemeproLO/ViewRpt/Script/Dedupe/LoadSubmit.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/ViewRpt/Script/Dedupe/Validation.js${DMY13}"></script> 
  
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
  
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>    
    

                            
                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           