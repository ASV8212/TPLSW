
 
  <!-- Accordion card -->
  <div class="card">
    <!-- Card header -->
    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0">
        <form>
         <input type="text" id="FLET_PRCSID" hidden="hidden" name="FLET_PRCSID" class="form-control FLETDBfields">
          <input type="text" id="FLET_ACTIVITYID" hidden="hidden" name="FLET_ACTIVITYID" class="form-control FLETDBfields">
           <input type="text" id="FLET_DTCREATED" hidden="hidden" name="FLET_DTCREATED" class="form-control FLETDBfields"> 
           <input type="text" id="FLET_CREATEDBY" hidden="hidden" name="FLET_CREATEDBY" class="form-control FLETDBfields">
            <input type="text" id="FLET_MODIFIEDBY" hidden="hidden" name="FLET_MODIFIEDBY" class="form-control FLETDBfields">
             <input type="text" id="FLET_DTMODIFIED" hidden="hidden" name="FLET_DTMODIFIED" class="form-control FLETDBfields">
			 <input type="text" id="FLET_GRIDF" hidden="hidden" name="FLET_GRIDF" class="form-control FLETDBfields">
			 <input type="text" id="FLGR_FREEFINAN" hidden="hidden" name="FLGR_FREEFINAN" class="form-control FLETDBfields">
			
        	
			  
        	</br>
			
			
			<div id="EXCELUPLOAD"  class="file-field DDU FltLeft ">
    <a class="">
      <i class="fa imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="UploadData(EXCELUPLOAD)" class="EXCELUPLOAD"  >
    </a>
    <input type="text" id="EXCELUPLOAD" hidden="hidden" data-Validate="EXCELUPLOAD"  name="EXCELUPLOAD" class="form-control File "/>
  <span class="name Btxt4  FltLeft ">Choose File
  <img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-upd="" width="20" height="20">
  </span> 
  
  </div> 
   <div class="HyperControls FltRight"  > 
<a class="Btxt4 ADDBTN FltRight  " onclick="FormatEXCELDocDwnld()" href="#">
<img src="ThemeproLO/Common/Images/download.png" class="GridDocUpd" title="Download" attr-upd="" width="20" height="20">
Download Template
</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>
    </br>	
		 <div class="Btxt10" > </div>
		  <br>
		<div class="form-row">
           <div class="col-md-12" style="overflow-x: auto;"><!--LSW_SGETFLEETGRID-->
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_SGETFLEET',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:'Page'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','FLEETSHEET');" id="BTNFLEETSHEET" name="BTNFLEETSHEET" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid " name="Table4" id="Table4">
             </table>
           </div>
        </div> 
		
		
		</br>
		<div class="form-row" >
            <div class="col-md-4">
                <div class="md-form">
                    <div class="HyperControls"> 
                        <a class="Btxt4 AddLPDS ADDBTN  FLETDBfields" name="AddLPDSTable"  data-table="Table4" href="#">+ Add</a>
                    </div>
                </div>
            </div>
		</div>
		<div class="form-row" >
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="FLET_FREE" disabled maxlength="3" name="FLET_FREE" class="form-control IsNumberFields FLETDBfields">
                    <label for="FLET_FREE" class="">Free<span class="MndtryAstr"></span></label>
                </div>
            </div>	
           			
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="FLET_FINANCE" disabled maxlength="3" name="FLET_FINANCE" class="form-control IsNumberFields FLETDBfields">
                    <label for="FLET_FINANCE" class="">Finance<span class="MndtryAstr"></span></label>
                </div>
            </div>
		
       			
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="FLET_PROPOSEFIN"  maxlength="3"  name="FLET_PROPOSEFIN" class="form-control IsNumberFields FLETDBfields">
                    <label for="FLET_PROPOSEFIN" class="">Proposed Finance<span class="MndtryAstr"></span></label>
                </div>
            </div>	
		</div>
		<div class="form-row" > 
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="FLET_TOTAL" disabled maxlength="3" name="FLET_TOTAL" class="form-control IsNumberFields FLETDBfields">
                    <label for="FLET_TOTAL" class="">Total<span class="MndtryAstr"></span></label>
                </div>
            </div>	
           			
			<div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="FLET_FFR" disabled maxlength="5" name="FLET_FFR" class="form-control IsNumberFields FLETDBfields">
                    <label for="FLET_FFR" class="">FFR %<span class="MndtryAstr"></span></label>
                </div>
            </div>	
		</div>
           			

		 
		  </br>
	       <div class="form-row">
             <div class="col d-flex justify-content-center">
                    <!-- <button type="button" id="Save1" data-aria="LSW_TFLEETDETLS|FLET" data-form="ExistingLoan" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>
                         
                     <button type="button" data-aria="LSW_TFLEETDETLS|FLET" next-form="TAB|" data-form="ExistingLoan" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
                      --><button type="button" id="Save1" data-aria="LSW_TFLEETDETLS|FLET"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                              <button type="button" data-aria="LSW_TFLEETDETLS|FLET" data-card="1" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                          
             </div>
            </div> 
        </form>
      </div>
	  </div>
	  
							 
 <table style="display:none" id="GridTable4">
<thead>
<th>ACTION</th>
<th>FLGR_SRNO</th>
<th>FLGR_REGOWNAME</th>
<th>FLGR_RELATION</th>
<th>FLGR_MFG</th>
<th>FLGR_ASSET</th>
<th>FLGR_BODY</th>
<th>FLGR_RCNO</th>
<th>FLGR_YOM</th>
<th>FLGR_TAKEN</th>
<th>FLGR_FREEFINAN</th>
<th>FLGR_FINANAME</th>
<th>FLGR_LOANAMT</th>
<th>FLGR_TENOR</th>
<th>FLGR_EMIPAID</th>
<th>FLGR_AD</th>
<th>FLGR_PD</th>
<th>FLGR_TRSTATUS</th>
<th>FLGR_EMIAMT</th>
<th>FLGR_REMARK</th>

<!-- <th>RPLS_PRCSID</th>
<th>RPLS_ACTIVITYID</th>
<th>RPLS_CREATEDBY</th>
<th>RPLS_DTCREATED</th>
<th>RPLS_MODIFIEDBY</th>
<th>RPLS_DTMODIFIED</th>
 -->
</thead> 
</table> 
   <script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/FleetDetails/LoadSubmit.js${DMY13}"></script>
   <script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/FleetDetails/Validation.js${DMY13}"></script>  
<!-- <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script>  -->
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

                                  <!--   </div>
                                </div>   -->                           