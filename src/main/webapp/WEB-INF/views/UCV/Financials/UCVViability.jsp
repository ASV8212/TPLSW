   
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        </br>
                        <div class="">
                            <!--Admin panel-->
                            <div class="admin-panel">
                        
</br>
<div class="card CardNS">
    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0">
        <form>
             <input type="text" id="VIAA_PRCSID" hidden="hidden" name="VIAA_PRCSID" class="form-control VIAADBfields">
             <input type="text" id="VIAA_ACTIVITYID" hidden="hidden" name="VIAA_ACTIVITYID" class="form-control VIAADBfields">
             <input type="text" id="VIAA_DTCREATED" hidden="hidden" name="VIAA_DTCREATED" class="form-control VIAADBfields"> 
             <input type="text" id="VIAA_CREATEDBY" hidden="hidden" name="VIAA_CREATEDBY" class="form-control VIAADBfields">
             <input type="text" id="VIAA_MODIFIEDBY" hidden="hidden" name="VIAA_MODIFIEDBY" class="form-control VIAADBfields">
             <input type="text" id="VIAA_DTMODIFIED" hidden="hidden" name="VIAA_DTMODIFIED" class="form-control VIAADBfields">
        	<!-- LSW_TRATIOCOMPDETAILS -->
        	  
             <input type="text" id="VIAB_VIABILITY" hidden="hidden" name="VIAB_VIABILITY" class="form-control VIABDBfields">
			 <input type="text" id="VIIN_SEQUENCENO" hidden="hidden" name="VIIN_SEQUENCENO" class="form-control VIABDBfields">
			  
			 <input type="text" id="VIAA_INCOME" hidden="hidden" name="VIAA_INCOME" class="form-control VIAADBfields">
			 <input type="text" id="VIAA_EXPENSE" hidden="hidden" name="VIAA_EXPENSE" class="form-control VIAADBfields">
			 <!--  <input type="text" id="SIND_DEDUCTION" hidden="hidden" name="SIND_DEDUCTION" class="form-control SINDDBfields">  -->
			   
        	</br>
		<!--	<table>
					 <tr>
					 <td>
					  <div id="EXCELUPLOAD"  class="file-field DDU FltRight ">
						<a class="">
						  <i class="fa imgAdd" aria-hidden=""></i>
						  <input type="file"  name="datafile" onchange="UploadData(EXCELUPLOAD)" class="EXCELUPLOAD"  >
						</a>
						<input type="text" id="EXCELUPLOAD" hidden="hidden" data-Validate="EXCELUPLOAD"  name="EXCELUPLOAD" class="form-control File "/>
					  <span class="name Btxt4  FltRight ">Choose File
					  <img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-upd="" width="20" height="20">
					  </span> 
					  
					  </div> 
					 </td>
					  <!-- <div class="md-form DDV">
					<div class="md-form Formcol-mdLR">
					<div class="EXCELUPLOAD" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile(EXCELUPLOAD);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('PFDT_COLLATTACHMENT')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
					</div>
					</div>  --> 
					<!--</tr>
					 <div class="HyperControls FltRight" > 
					<a class="Btxt4 ADDBTN FltRight" onclick="FormatEXCELDocDwnld()" href="#">
					<img src="ThemeproLO/Common/Images/download.png" class="GridDocUpd" title="Download" attr-upd="" width="20" height="20">
					Download Template
					</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					</div>
					 <div class="HyperControls FltRight" > 
											<a class="Btxt4 ADDBTN FltRight EXPORT" href="#">Export</a>
											</div> 
					</table>
						</br>
						</br> -->
			  
			<!--onchange="GrdLoadOnYrChng()" -->
			<div class="VIABILITY">
	<!-- 		<div class="form-row">
			    <div class="Btxt10">Viability</div>
			</div>
		  <div class="form-row">
           <div class="col-md-12">
             <input type="button" class="DashTrg" style="display:none" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SVIABILITYGRD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#VIAB_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1','VIABILITYGRD');" id="BTNVIABILITYGRD" name="BTNVIABILITYGRD" />
              <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table3">
             </table>
           </div>
		   </div>  -->
			<div class="form-row">
			    <div class="Btxt10">INCOME</div>
			</div> 
		<div class="form-row">
           <div class="col-md-12">
             <input type="button" class="DashTrg" style="display:none" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_SVIABINCOMEGRD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#VIAA_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||2','VIABINCOMEGRD');" id="BTNVIABINCOMEGRD" name="BTNVIABINCOMEGRD" />
              <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table4">
             </table>
           </div>
		</div> 
		</br>
			<div class="form-row">
			    <div class="Btxt10">EXPENSES</div>
			</div>
		<div class="form-row">
           <div class="col-md-12">
             <input type="button" class="DashTrg" style="display:none" onclick="FncallDocChkLst(this,'Table5',{spname:'LSW_SVIABEXPENSEGRD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#VIAA_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||2','VIABEXPENSEGRD');" id="BTNVIABEXPENSEGRD" name="BTNVIABEXPENSEGRD" />
              <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table5">
             </table>
           </div>
		</div> 
		   
		   
		     <!--<div class="form-row">
		    <div class="col-md-4">
                  <div class="md-form">
                  	 
                      <label for="VIAB_AVGFCFMONTH" class="">		Average FCF per Month<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 <div class="col-md-2">
                  <div class="md-form">
                  	 
                       <input type="text" id="VIAB_AVGFCFMONTH" disabled maxlength="30"  name="VIAB_AVGFCFMONTH" class="form-control  VIABMndtry IsAlphaFields IsCURCommaFields VIABDBfields">
                  </div>
                </div>
				 
          
		  
			</div>-->
		  </br>
	       <div class="form-row">
             <div class="col d-flex justify-content-center"><!--LSW_TVIABILITYDETL-->
                <button type="button" id="Save1" data-aria="LSW_TVIABDETL|VIAA" data-form="VIABILITY"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>    
                <button type="button" data-aria="LSW_TVIABDETL|VIAA" data-form="VIABILITY" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
             </div>
            </div> 
		   </div>
		   <div class="card CardNS  NODATA" style="display:none">
         <div class="form-row" style="text-align: center;">
            <div class="col">
                <div class="md-form">
                    <input type="text" id="" style="text-align: center;" disabled="" value="No Data Available in Viability" name="" class="DSVLBL  Btxt7 form-control">
               </div>
            </div>
           </div>
         </div>
        </form>
      </div>
    </div>
<!-- Start -->
<!--Accordion wrapper-->
  
 <!-- Accordion card -->
</div>
<!-- Accordion wrapper -->
<!-- END -->
 </div>
 <script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/Viability/Validation.js${DMY13}"></script> 
 <script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/Viability/LoadSubmit.js${DMY13}"></script>
 
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
  
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>       
 
<table style="display:none" id="GridTable4">
   <thead>
<th>VIIN_PARTICULAR</th>
<th>VIIN_DESCRIPTION</th>
<th>VIIN_SEQUENCENO</th>


 
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
<th>VIEX_PARTICULAR</th>
<th>VIEX_DESCRIPTION</th>
<th>VIEX_SEQUENCENO</th>


 
<!-- 
<th>FRCC_PRCSID</th>
<th>FRCC_ACTIVITYID</th>
<th>FRCC_DTCREATED</th>
<th>FRCC_CREATEDBY</th>
<th>FRCC_DTMODIFIED</th>
<th>FRCC_MODIFIEDBY</th>  -->
   </thead> 
    </table> 
             <!--   </div>
                                </div>   -->      
                                <style>
                                .form-row>.col, .form-row>[class*=col-] {
                                   padding-right: 5px;
                                    }
                                </style>
                                                     