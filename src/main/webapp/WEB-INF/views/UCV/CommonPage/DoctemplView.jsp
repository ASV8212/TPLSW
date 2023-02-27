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

            </ul>
         </div>
      </div>
      <input type="text" id="UPDC_PRCSID" hidden="hidden" name="UPDC_PRCSID" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_ACTIVITYID" hidden="hidden" name="UPDC_ACTIVITYID" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_DTCREATED" hidden="hidden" name="UPDC_DTCREATED" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_CREATEDBY" hidden="hidden" name="UPDC_CREATEDBY" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_DTMODIFIED" hidden="hidden" name="UPDC_DTMODIFIED" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_MODIFIEDBY" hidden="hidden" name="UPDC_MODIFIEDBY" class="form-control UPDCDBfields">
     
      
     

      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
               </br>
               <div class="form-row">
                  <div class="col Btxt3">Documents</div>
               </div>
               </br>
               <div class="card-headerBlack white-text">
              
         <div class="row">
                        
         <div class="col-md-2 ">
         
       
         </div>
         <div class="col-md-5">
         
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTable3" name="SearchTable3" class="Ntxt3">
         </div> 
         </div>     
              
                       
</div>
                 <div class="admin-panel">

                                <!--Main First row-->
                                <div class="row m-b-0">
<div class="col-md-12">
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallMyAppl(this,'Table3',{spname:'LSW_TGETDOCUMTEMPLEVIEW',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','DocumentTEMPLATESView');" id="BTNKYCOthers" name="BTNKYCOthers" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
                     </table>
                  </div>
               </div>
			   </div>
            </form>
         </div>
      </div>
      <!-- card -->
      </br>
      <!--  card -->

          <!-- card -->
   
      </br>
   </div>
 
   <table style="display:none" id="GridTable3">
      <thead>
      	<th>ACTION</th>
         <th>OKYD_DOCNAME</th>
         <th>OKYD_DOCNAMEID</th>
         <th>OKYD_UPLOADDT</th>
         <th>OKYD_UPLOAD</th>


      </thead>
   </table>

   <!-- END -->
</div>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Commonpage/DoctemplView/LoadSubmit/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/Commonpage/DoctemplView/Validation/Validation.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>