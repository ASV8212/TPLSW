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
    <div>
      <div class="card-body px-lg-5 pt-0">
     	<form>
      	<input type="text" id="RCBP_PRCSID" hidden="hidden" name="RCBP_PRCSID" class="form-control RCBPDBfields">
         <input type="text" id="RCBP_ACTIVITYID" hidden="hidden" name="RCBP_ACTIVITYID" class="form-control RCBPDBfields">
         <input type="text" id="RCBP_CREATEDBY" hidden="hidden" name="RCBP_CREATEDBY" class="form-control RCBPDBfields">
         <input type="text" id="RCBP_DTCREATED" hidden="hidden" name="RCBP_DTCREATED" class="form-control RCBPDBfields">
         <input type="text" id="RCBP_MODIFIEDBY" hidden="hidden" name="RCBP_MODIFIEDBY" class="form-control RCBPDBfields">
         <input type="text" id="RCBP_DTMODIFIED" hidden="hidden" name="RCBP_DTMODIFIED" class="form-control RCBPDBfields">
         <!-- <input type="text" id="RCBP_CIBILGRD" hidden="hidden" name="RCBP_CIBILGRD" class="form-control RCBPDBfields">-->
         <input type="text" id="HIDDENIPLDST" hidden="hidden" name="HIDDENIPLDST" class="form-control RCBPDBfields">
       <br>
      	<div  class="col Btxt8">CIBIL Reports</div>
      	<br>
		<div class="form-row"  style="display:none" >
         	   <div class="col-md-4">
           			<div class="md-form">
           			<select id="RCBP_NOFEIBILENQ" class="mdb-select md-form colorful-select dropdown-primary RCBPDBfields RCBPMndtry" name="RCBP_NOFEIBILENQ" onchange="">
                        <option value="" selected>--Select--</option>
                        <option value="1" >1</option> 
                        <option value="2" >2</option> 
                        <option value="3" >3</option> 
                        <option value="4" >4</option> 
                        <option value="5" >5</option> 
                        <option value="6" >6</option> 
                        <option value="7" >7</option> 
                        <option value="8" >8</option> 
                        <option value="9" >9</option> 
                        <option value="10" >10</option> 
                        <option value="11" >11</option> 
                        <option value="12" >12</option> 	
                        <option value="Above 12" >Above 12</option> 						
                    </select>
                   <label class="mdb-main-label BTxt9">No.of CIBIL Enquiry last 3 months<span class="MndtryAstr">*</span></label>
           			</div>
           		</div>
           		<div class="col-md-4 BTSP" style="display:none">
                      <div class="md-form">
                    <div  class="select-radio BTM"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input RCBPDBfields" value="Yes" id="BTYES" name="RCBP_BTLONCIBIL">
                          <label class="custom-control-label" for="BTYES">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input RCBPDBfields" value="No" id="BTNO" name="RCBP_BTLONCIBIL">
                           <label class="custom-control-label" for="BTNO">No</label>
                       </div>
                   </div>     
                      <label for="RCBP_BTLONCIBIL" class="">BT loan reflecting in CIBIL<span class="MndtryAstr">*</span></label>
                   </div>
			    </div>
			    <!--<div class="col-md-4">
      	          <div class="HyperControls form-row FltRight"> 
			           <a  class="Btxt4 FltRight ADDBTN CIBIL" data-toggle="modal" name="CIBILModal" data-target="#CIBILModal" href="#" >Upload CIBIL Report</a>
			      </div>
			    </div>-->
			 </div>
         	<div class="form-row">
         	   <div class="col-md-6">
      	          
			    </div>
			    <div class="col-md-6">
      	          <div class="HyperControls form-row FltRight"> 
			           <a  class="Btxt4 FltRight ADDBTN CIBIL" data-toggle="modal" name="CIBILModal" data-target="#CIBILModal" href="#" >Upload CIBIL Report</a>
			      </div>
			    </div>
			 </div>
            <div class="form-row">
               <div class="col">
                    <button type="button" style="display:none" id="CBLViewRpt" onclick="FncallDocChkLst(this,'CBRTable',{spname:'LSW_SCIBILRPTDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||6','CIBILReportDUDUPE');"  class="btn waves-effect btn-yelInplain btn-sm"></button>
	                <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="CBRTable">
                    </table>
	           </div>
	        </div>
	        <div class="form-row">
                  <div class="col d-flex justify-content-center">
	                  <button type="button" data-aria="LSW_TRPTCIBILPAGE|RCBP" data-form="" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Next</button>
                      <button type="button" id="Save" data-aria="LSW_TRPTCIBILPAGE|RCBP" style="display:none" data-form="" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save</button> 							
       	          </div>
       	    </div>
       	</form>
      </div>
    </div>
  </div>
 </div>
</div>
       
       
 <table style="display:none" id="GridCBRTable">
   <thead>
<th>FIEG_APPLNAME</th>
<th>FIEG_DATEOFINIT</th>
<th>FIEG_CIBILSCOREI</th>
<th>FIEG_CIBILSCOREII</th>
<th>FIEG_STATUE</th>
<th>FIEG_ACTION</th>
<th>FIEG_UPLOAD</th>
<th>FIEG_DOCURL</th>
<th>FIEG_APPLID</th>
<th>FIEG_APPLNO</th>
<th>FIEG_CUSID</th>
<!--<th>UPFD_PRCSID</th>
<th>UPFD_ACTIVITYID</th>
<th>UPFD_CREATEDBY</th>
<th>UPFD_DTCREATED</th>
<th>UPFD_MODIFIEDBY</th>
<th>UPFD_DTMODIFIED</th>-->
   </thead> 
    </table>  
                             
   <script type="text/javascript" src="ThemeproLO/ViewRpt/Script/Cibil/LoadSubmit.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/ViewRpt/Script/Cibil/Validation.js${DMY13}"></script>
    <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
  
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>  

<a type="button" id="CIBILPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#CIBILModal">
 <i class="fa fa-plus"></i></a>                         
<div class="modal fade" id="CIBILModal" tabindex="-1" role="dialog" aria-labelledby="CIBILModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:847px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">UPLOAD CIBIL REPORT</div> 
   
   <a href="#"><img id="CIBILLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form >
        	</br>
           <div class="form-row">
           		<div class="col-md-6">
           			<div class="md-form">
           			<select id="FIEG_CUSID" class="mdb-select md-form colorful-select dropdown-primary FIEGDBfields CIBILMndtry" onchange=" CheckCusType();" name="FIEG_CUSID" onchange="">
                        <option value="" selected>--Select--</option>  
                    </select>
                   <label class="mdb-main-label BTxt9">Party Name<span class="MndtryAstr">*</span></label>
           			</div>
           		</div>
           		<div class="col-md-6">
           		   <div class="md-form">
                      <input type="text" id="FIEG_CIBILSCOREI" name="FIEG_CIBILSCOREI" maxlength="3" class="form-control NoSpecialCharNOTHYPHEN IsNumberFields CCLR FIEGDBfields">
                      <label for="FIEG_CIBILSCOREI" class="">Transunion Score<span class="MndtryAstr"></span></label>
                   </div>
           		</div>
           </div>
           <div class="form-row">
           		<div class="col-md-6">
           		   <div class="md-form">
                      <input type="text" id="FIEG_CIBILSCOREII" name="FIEG_CIBILSCOREII" maxlength="3" class="form-control IsNumberFields CCLR FIEGDBfields">
                      <label for="FIEG_CIBILSCOREII" class="">PL Score<span class="MndtryAstr"></span></label>
                   </div>
           		</div>
           		<div class="col-md-6">
           		 <div class="md-form">
                     <table>
                       <tr>
                         <td> 
                           <div id="FIEG_UPLOADUPLOAD"  class="file-field DDU">
                             <a class="">
                               <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                  <input type="file"  name="datafile" onchange="DocFldUpldHndlr(FIEG_UPLOAD,'FIEG_UPLOAD','CIBIL')" class="RCBP_UPLOADRPT"  >
                              </a>
                                  <input type="text" id="FIEG_UPLOAD" hidden="hidden" data-Validate="FIEG_UPLOAD"  name="FIEG_UPLOAD" class="form-control CCLR File FIEGDBfields CIBILMndtry"/>
                                  <span class="name">Click Here to Upload</span> 
                           </div> 
                        </td>
                          <div class="md-form DDV">
                             <div class="md-form Formcol-mdLR">
                                  <div class="FIEG_UPLOAD" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile(FIEG_UPLOAD);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('FIEG_UPLOAD')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
                              </div>
                         </div>   
                     </tr>
               </table>
           </div> 
         </div>
       </div>
	    <div class="form-row">
           	<div class="col-md-6">
				<div class="md-form"><!--onblur="CompareJointoDOB(this,CBSI_DOB,CEMI_NOOFYERBUSINESS,'CBSI_PROFILE');ExpYearvalid(this,CEMI_NOOFYERBUSINESS);"-->
                       <input type="text" id="FIEG_DATEOFINIT" maxlength="10"  name="FIEG_DATEOFINIT" class="form-control NoSpecialChar ISFutureDateFields  FIEGDBfields CIBILMndtry IsNumberFields  ISDatefield">
                      <label for="FIEG_DATEOFINIT" class="">Date of Initiation<span class="MndtryAstr">*</span></label>
                      <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"   />
                </div>
			</div>
       </div>
      <!-- grid  show -->
    <!--Main layout-->
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="CIBILSave" onclick="" data-aria="LSW_TRPTCIBILPAGE|RCBP" class="btn btn-yel Btxt2 FormSave">Done</button>
      </div>
    </div>
  </div>
  </div>

                                  <!--   </div>
                                </div>   -->                           