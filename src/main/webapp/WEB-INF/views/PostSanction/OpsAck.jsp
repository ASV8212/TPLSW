</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
      <div class="form-row">
         <div class="col-lg-12">
            <ul title="Tranche" data-aria="LSW_TLONBANKDTLS|BKDT|" data-popup="No"  class="nav FormPageMultiTab">
               <%-- ${SUBPAGETABDATA} --%>
               <!-- <li id="Tranche1" value="OpsAck" title="Tranche 1" class="nav-item active">
               <a>
                  <div class="nav-link" href="#">Tranche 1</div>
               </a>
            </li>
            <li id="Tranche2" value="OpsAck" title="Tranche 2" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Tranche 2</div>
               </a>
            </li> 
            <li id="Tranche3" value="OpsAck" title="Tranche 3" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Tranche 3</div>
               </a>
            </li> 
            <li id="Tranche4" value="OpsAck" title="Tranche 4" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Tranche 4</div>
               </a>
            </li> 
            <li id="Tranche5" value="OpsAck" title="Tranche 5" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Tranche 5</div>
               </a>
            </li>  -->
            </ul>
         </div>
      </div>
      </br>
      <div class="card CardNS">
       
   <div class="card-body px-lg-5 pt-0 BSbrdlight">
     
     <div class="row">
	<div class="col-lg-12">
		</br>
		  <ul class="nav FormPageSubTab FormPageSubTab1">      
       <li id="DisbursementChecklist" value="Disbrsmnt" title="Disbursement Checklist" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Disbursement Checklist</div>
               </a>
            </li>
            <li id="OpsAcknowledgement" value="OpsAck" title="Ops Acknowledgement" class="nav-item active">
               <a>
                  <div class="nav-link" href="#">Ops Acknowledgement</div>
               </a>
            </li>
            <li id="DisbursementMemo" value="DisbMemo" title="Disbursement Memo" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Disbursement Memo</div>
               </a>
            </li>
            <li id="OTC" value="OTC" title="OTC" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">OTC</div>
               </a>
            </li>
            <li id="PDD" value=PDD title="PDD" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">PDD</div>
               </a>
            </li>

      </ul>
	

	
	</div>
</div>
     
     
      </div>
   </div>
      <div class="card CardNS">
         <!-- Card header -->
         <!-- Card body -->
		 <div class="HyperControls"> 
                        <a type="button" class="Btxt4 FltRight" onclick="GenAckRpt()" href="#">OPS Acknowledgement.pdf</a>
                     </div>
         <div data-row="" class="card-body px-lg-5 pt-0  ">
		 
            </br>
            <form>

					  
               <input type="text" id="DOAH_PRCSID" hidden="hidden" name="DOAH_PRCSID" value="" class="form-control DOAHDBfields">
               <input type="text" id="DOAH_ACTIVITYID" hidden="hidden" name="DOAH_ACTIVITYID" class="form-control DOAHDBfields">
               <input type="text" id="DOAH_DTCREATED" hidden="hidden" name="DOAH_DTCREATED" class="form-control DOAHDBfields">
               <input type="text" id="DOAH_CREATEDBY" hidden="hidden" name="DOAH_CREATEDBY" class="form-control DOAHDBfields">
               <input type="text" id="DOAH_DTMODIFIED" hidden="hidden" name="DOAH_DTMODIFIED" class="form-control DOAHDBfields">
               <input type="text" id="DOAH_MODIFIEDBY" hidden="hidden" name="DOAH_MODIFIEDBY" class="form-control DOAHDBfields">
               <input type="text" id="DOAH_OPSACKDTL" hidden="hidden" name="DOAH_OPSACKDTL" class="form-control DOAHDBfields">
			   
			   <input type="text" id="HiddenActID" hidden="hidden" name="HiddenActID" class="form-control ">
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SGETOPSACK',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1','OPSASK');" id="BTNTOPACK" name="BTNTOPACK" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                     </table>
                  </div>
               </div>
               <div class="form-row">
                  <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="LSW_TDISBOPSACKHDR|DOAH"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TDISBOPSACKHDR|DOAH" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
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
<table style="display:none" id="GridTable2">
   <thead>
      <th>DDMD_MSTHAV</th>
      <th>DDMD_PROPID</th>
      <th>DDMD_TITLE</th>
      <th>DDMD_DOCMODE</th>
      <th>DDMD_DOCTYP</th>
      <th>DDMD_DOCNO</th>
      <th>DDMD_DOCDT</th>
      <th>DDMD_STATUS</th>
      <th>DDMD_DEFDT</th>
	  <th>DDMD_RECDT</th>
      <th>DDMD_RRMRK</th>
      <th>DDMD_SEQNO</th>
	  <th>OTCPDDSTUS</th>
	   <th>DDMD_WVRMRK</th>
      <!-- <th>DDMD_OTCPDDSTUS</th> -->
      
   </thead>
</table>
<script type="text/javascript" src="ThemeproLO/PostSanction/Script/PostSanctionTab.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/PostSanction/Script/OpsAck/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/PostSanction/Script/OpsAck/Validation.js${DMY13}"></script>                            
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>