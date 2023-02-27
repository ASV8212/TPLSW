   
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
             <input type="text" id="SALE_PRCSID" hidden="hidden" name="SALE_PRCSID" class="form-control SALEDBfields">
             <input type="text" id="SALE_ACTIVITYID" hidden="hidden" name="SALE_ACTIVITYID" class="form-control SALEDBfields">
             <input type="text" id="SALE_DTCREATED" hidden="hidden" name="SALE_DTCREATED" class="form-control SALEDBfields"> 
             <input type="text" id="SALE_CREATEDBY" hidden="hidden" name="SALE_CREATEDBY" class="form-control SALEDBfields">
             <input type="text" id="SALE_MODIFIEDBY" hidden="hidden" name="SALE_MODIFIEDBY" class="form-control SALEDBfields">
             <input type="text" id="SALE_DTMODIFIED" hidden="hidden" name="SALE_DTMODIFIED" class="form-control SALEDBfields">
        	<!-- LSW_TRATIOCOMPDETAILS -->
        	  
              <input type="text" id="SALE_SALES" hidden="hidden" name="SALE_SALES" class="form-control SALEDBfields">
			  <input type="text" id="SALE_TRANSFLG" hidden="hidden" name="SALE_TRANSFLG" class="form-control SALEDBfields">
			  <input type="text" id="SALE_COMPTRANSFLG" hidden="hidden" name="SALE_COMPTRANSFLG" class="form-control SALEDBfields">
			  
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
			<div class="Sales">
			<div class="form-row">
			    <div class="Btxt10">Sales</div></br></br>
			</div>
		<!-- -->	
			 
			<div class="form-row">
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="SALE_GSTNO" disabled  maxlength="30"  name="SALE_GSTNO" class="form-control NoSpecialChar SALEDBfields">
                      <label for="SALE_GSTNO" class="">GST No.<span class="MndtryAstr"></span></label>
                  </div>
                </div>
			    <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="SALE_CUSNAME"  disabled  maxlength="30"  name="SALE_CUSNAME" class="form-control NoSpecialChar SALEDBfields">
                      <label for="SALE_CUSNAME" class="">Customer Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 <!--<div class="col-md-1" style="display:none">
                  <div class="md-form">
                  	  <input type="text" id="SALE_USERID"  maxlength="30" name="SALE_USERID" class="form-control underscorehiphendot SALEDBfields">
                      <label for="SALE_USERID" class="">User ID<span class="MndtryAstr">*</span></label>
                  </div>
                </div>-->
			</div>
				<div class="form-row"  >
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="SALE_FROMDATE"  maxlength="30"  name="SALE_FROMDATE" class="form-control ISDatefield NoSpecialChar SALEMndtry SALEDBfields">
                      <label for="SALE_FROMDATE" class="">From Date<span class="MndtryAstr"></span></label>
                  <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
				  
				  </div>
                </div>
			
			<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="SALE_TODATE"   maxlength="30" onblur="DateValidate('SALE_FROMDATE','SALE_TODATE');" name="SALE_TODATE" class="form-control  ISDatefield NoSpecialChar    SALEMndtry  SALEDBfields">
                      <label for="SALE_TODATE" class="">To Date<span class="MndtryAstr"></span></label>
					  <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                  	  <select class="mdb-select md-form colorful-select dropdown-primary SALEDBfields" onchange="decideinterface();" id="SALE_MODE" name="SALE_MODE">
					  <option value="">Select</option>
					  <option value="Manual">Manual</option>
					  <option value="Upload">Upload</option>
					  </select>
                      <label for="SALE_MODE" class="mdb-main-label BTxt9">Mode<span class="MndtryAstr"></span></label>
                  </div>
                </div>
			</div>
			
			
   <div class="form-row">
	 <div class="col-md-4">
           <div class="md-form">   <!--,'SALE_USERID'--> 
               <button type="button" id="gstbtn" onclick="GSTAnalysisFn('SALE_GSTNO','SALE_FROMDATE','SALE_TODATE');" style="display:none;" class="btn btn-yel BTNHIDE Btxt2 waves-effect waves-light">GST Analysis</button>
		    </div>
           </div> 
        </div> 
     </div> 	
			
			
			<!-- -->
		  <div class="form-row">
           <div class="col-md-12">
             <input type="button" class="DashTrg" style="display:none" onclick="FncallDocChkLst(this,'Table1',{spname:'LSW_SGETSALESGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#SALE_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','SALESGRD');" id="BTNSALESGRD" name="BTNSALESGRD" />
              <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table1">
             </table>
           </div>
		   </div> 
		     <div class="form-row">
                <div class="col-md-6 BluShd"> 
                   <label for="" class="Btxt10">&nbsp; Total Sum &#8377;<span class="MndtryAstr"></span></label>
                </div>
                <div class="col-md-2 BluShd"> 
                   <input type="text" id="SALE_SALESSUM" disabled name="SALE_SALESSUM" value="0" class="form-control   Btxt04 IsCURCommaFields  IsNumberFields NoSpecialChar SALEMndtry SALEDBfields">
                </div>
            </div>
		    <div class="form-row" style="Display:none" >
				<div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="SALE_SALESAVG"  disabled maxlength="30"  name="SALE_SALESAVG" class="form-control NoSpecialChar IsCURCommaFields IsNumberFields SALEDBfields">
                      <label for="SALE_SALESAVG" class="">Sales Average<span class="MndtryAstr"></span></label>
                  </div>
                </div>
			</div>	
			<div class="form-row">
			   <div class="SALE_GSTATTACHMENT"> 
			     <span class="name1">GST Analysis Document</span>
			     <input type="text" id="SALE_GSTATTACHMENT" hidden="hidden" name="SALE_GSTATTACHMENT" class="form-control SALEDBfields">
                 <img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" class="rounded  ReUpld" title="UPLOAD" onclick="ReuploadFile(SALE_GSTATTACHMENT);" alt="Cinque Terre" width="20" height="20">  
				 <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('SALE_GSTATTACHMENT')" class="rounded" alt="Cinque Terre" width="35" height="25"> 
               </div>
            </div>
		<!--     <div class="form-row">
		    <div class="col-md-4">
                  <div class="md-form">
                  	 
                      <label for="SALE_AVGFCFMONTH" class="">		Average FCF per Month<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 <div class="col-md-2">
                  <div class="md-form">
                  	 
                       <input type="text" id="SALE_AVGFCFMONTH" disabled maxlength="30"  name="SALE_AVGFCFMONTH" class="form-control  VIABMndtry IsAlphaFields IsCURCommaFields SALEDBfields">
                  </div>
                </div>
				 
          
		  
			</div>-->
		  </br>
	       <div class="form-row">
             <div class="col d-flex justify-content-center">
				<button type="button" id="Complete" data-aria="LSW_TSALESDETL|SALE" style="display:none;" data-form="SALES"  class="btn btn-Syeloutline waves-effect waves-light CompleteTransaction FormSave">Complete GST</button>
                <button type="button" id="Save1" data-aria="LSW_TSALESDETL|SALE" data-form="SALES"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>    
                <button type="button" data-aria="LSW_TSALESDETL|SALE" data-form="SALES" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
             </div>
            </div> 
		   </div>
		   <div class="card CardNS  NODATA" style="display:none">
         <div class="form-row" style="text-align: center;">
            <div class="col">
                <div class="md-form">
                    <input type="text" id="" style="text-align: center;" disabled="" value="No Data Available in Sales" name="" class="DSVLBL  Btxt7 form-control">
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
 <script type="text/javascript" src="ThemeproLO/Financials/Script/Sales/Validation.js${DMY13}"></script> 
 <script type="text/javascript" src="ThemeproLO/Financials/Script/Sales/LoadSubmit.js${DMY13}"></script>
 
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
  
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>       
 
<table style="display:none" id="GridTable1">
   <thead>
<th>SALS_MONTH</th>
<th>SALS_AMOUNT</th>
<th>GSTAMOUNT</th>
<th>ROWNUM</th>
<th>SALS_UPLD</th>
<th>SALS_UPLDFLG</th>
 
 
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
                                                     