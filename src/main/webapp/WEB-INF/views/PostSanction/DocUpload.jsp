<!--Main row-->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
      <!-- Start -->
      <div class="row">
         <div class="col-lg-12">
            <ul title="DocumentDetails" data-popup="" class="nav FormPageMultiTab">
               ${SUBPAGETABDATA}
               <!-- <li id="Co-Applicant1" value="" title = "Co-Applicant1" class="nav-item  active">
                  <a> <div class="nav-link" href="#">Co-Applicant 1</div></a>
                  </li>      
                     
                  <li id=""  value="Add" title = "" class="nav-item FormPageMultiTabAdd">
                  <a> <div class="nav-link" href="#">+ Add</div>  </a>
                  </li>
                  --> 
            </ul>
         </div>
      </div>
      <input type="text" id="DCUL_PRCSID" hidden="hidden" name="DCUL_PRCSID" class="form-control DCULDBfields">
      <input type="text" id="DCUL_ACTIVITYID" hidden="hidden" name="DCUL_ACTIVITYID" class="form-control DCULDBfields">
      <input type="text" id="DCUL_DTCREATED" hidden="hidden" name="DCUL_DTCREATED" class="form-control DCULDBfields">
      <input type="text" id="DCUL_CREATEDBY" hidden="hidden" name="DCUL_CREATEDBY" class="form-control DCULDBfields">
      <input type="text" id="DCUL_DTMODIFIED" hidden="hidden" name="DCUL_DTMODIFIED" class="form-control DCULDBfields">
      <input type="text" id="DCUL_MODIFIEDBY" hidden="hidden" name="DCUL_MODIFIEDBY" class="form-control DCULDBfields">
     
      
        <input type="text" id="DCUL_DOCUMNTS" hidden="hidden" name="DCUL_DOCUMNTS" class="form-control DCULDBfields">

      <div class="HyperControls">
         <a type="button" class="Btxt4 FltRight ADDBTN" id="NewlyAddedDoc" onclick="ChecklistDropdownvalue();" data-toggle="modal" data-target="#ADDKYCDocModal" href="#">+ Add Document</a>
         
      </div>

      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
               </br>
               <div class="form-row">
                  <div class="col Btxt3">Documents</div>
               </div>
               </br>
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_TGETDOCUMTEMPLE',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','DocumentTEMPLATES');" id="BTNKYCOthers" name="BTNKYCOthers" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
                     </table>
                  </div>
               </div>
            </form>
         </div>
      </div>
      <!-- card -->
      </br>
      <!--  card -->

          <!-- card -->
      <div class="form-row" Style="display:none">
         <div class="col d-flex justify-content-center">
             <button type="button" id="Save" data-aria="LSW_TDOCUMENTUPLOAD|DCUL" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>  
         </div>
      </div>
      </br>
   </div>
   <!-- Admin Panel -->
   <div class="modal fade" id="ADDKYCDocModal" tabindex="-1" role="dialog" aria-labelledby="ADDKYCDocModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" style="max-width:900px" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <div class="Btxt10">ADD DOCUMENTS</div>
               <a href="#">  <img id="ADDKYCDOCCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
            </div>
            <div class="modal-body">
               <div class="">
                  <!-- Card body -->
                  <div class="">
                     <form>
                        <div class="form-row">
                          <div class="col">
                              <div class="md-form">
                                 <div class="" id="">
                                    <input type="text" id="KYCD_DOCTYPE" name="KYCD_DOCTYPE" data-aria="2" class="form-control  KYCDMndtry PGToGRID">
                                    <label for="KYCD_DOCTYPE" class="">Document Type <span class="MndtryAstr">*</span></label>
                                 </div>
                              </div>
                           </div>
                           <div class="col">
                              <div class="md-form">
                                 <div class="" id="">
                                    <input type="text" id="KYCD_DOCNAME" name="KYCD_DOCNAME" data-aria="2" class="form-control  KYCDMndtry PGToGRID">
                                    <label for="KYCD_DOCNAME" class="">Document Name <span class="MndtryAstr">*</span></label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="form-row">

                           <div class="col">
                              <div class="row" >
                                 <!--First column-->
                                 <div class="col-md-8  Formcol-mdLR">
                                    <div class="md-form">
                                       <table>
                                          <tr>
                                             <td>
                                                <div id="KYCD_DOCATTACHMENTUPLOAD"  class="file-field DDU">
                                                   <a class="">
                                                   <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                                   <input type="file"  name="datafile" onchange="DocFldUpldHndlr(KYCD_DOCATTACHMENT,'KYCD_DOCATTACHMENT')" class="KYCD_DOCATTACHMENT"  >
                                                   </a>
                                                   <input type="text" id="KYCD_DOCATTACHMENT" hidden="hidden" data-Validate="KYCD_DOCATTACHMENT"  name="KYCD_DOCATTACHMENT" class="form-control File KYCDDBfields">
                                                   <span class="name">Upload Document</span>
                                                </div>
                                             </td>
                                          </tr>
                                       </table>
                                    </div>
                                 </div>
                                 <div class="col-md-4 DDV">
                                    <div class="md-form Formcol-mdLR TxtCenter">
                                       <div class="KYCD_DOCATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile(KYCD_DOCATTACHMENT);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('KYCD_DOCATTACHMENT')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                         
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div class="modal-footer align-middle">
               <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
               <button type="button" id="AddKYCDoc" class="btn btn-yel Btxt2">Confirm</button>
            </div>
         </div>
      </div>
   </div>
   
   <table style="display:none" id="GridTable3">
      <thead>
      	<th>ACTION</th>
         <th>DULD_TYPE</th>
         <th>DULD_NAME</th>
         <th>DULD_UPLOAD</th>


      </thead>
   </table>

   <!-- END -->
</div>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js"></script>
<script type="text/javascript" src="ThemeproLO/PostSanction/Script/DocUpload/LoadSubmit/LoadSubmit.js"></script>
<script type="text/javascript" src="ThemeproLO/PostSanction/Script/DocUpload/Validation/Validation.js"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js"></script>