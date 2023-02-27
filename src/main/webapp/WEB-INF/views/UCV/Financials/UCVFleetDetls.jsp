</br>
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="">


                            <!--Admin panel-->
                            <div class="admin-panel">


<div class="row">
	<div class="col-lg-12">
		
		  <ul title="PF" class="nav FormPageMultiTab" data-popup="No" data-aria="LSW_TFLEETDETLS|FLET|FLET_PFNO">   
		  
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
</br>
  <!--  card -->
  <div class="card CardNS">
 
 
  <!---      -->
      <div class="card-header Btxt7 active" role="tab" id="headingOne1">
          <a class="collapsed Btxt8 AFormaccordion" data-toggle="collapse" data-load="Yes" data-aria="LSW_TFLEETDETLS|FLET|FLET_PFNO" data-parent="#accordionEx" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
             FLEET Details <i class="fa fa-plus-circle rotate-icon"></i>
               </a>
                <i class="fa rotate-icon fa-minus-circle"></i>
 
          </div>
 
 
 
    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0">
        <form>
         <input type="text" id="FLET_PRCSID" hidden="hidden" name="FLET_PRCSID" class="form-control FLETDBfields">
          <input type="text" id="FLET_ACTIVITYID" hidden="hidden" name="FLET_ACTIVITYID" class="form-control FLETDBfields">
           <input type="text" id="FLET_DTCREATED" hidden="hidden" name="FLET_DTCREATED" class="form-control FLETDBfields"> 
           <input type="text" id="FLET_CREATEDBY" hidden="hidden" name="FLET_CREATEDBY" class="form-control FLETDBfields">
            <input type="text" id="FLET_MODIFIEDBY" hidden="hidden" name="FLET_MODIFIEDBY" class="form-control FLETDBfields">
             <input type="text" id="FLET_DTMODIFIED" hidden="hidden" name="FLET_DTMODIFIED" class="form-control FLETDBfields">
        	
			  
        	</br>
			
			
			<div id="EXCELUPLOAD"  class="file-field DDU FltRight ">
    <a class="">
      <i class="fa imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="UploadData(EXCELUPLOAD)" class="EXCELUPLOAD"  >
    </a>
    <input type="text" id="EXCELUPLOAD" hidden="hidden" data-Validate="EXCELUPLOAD"  name="EXCELUPLOAD" class="form-control File "/>
  <span class="name Btxt4  FltRight ">Click Here to Upload
  <img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-upd="" width="20" height="20">
  </span> 
  
  </div> 
  
  		 <div class="HyperControls FltRight"  > 
<a class="Btxt4 ADDBTN FltRight  " onclick="FormatEXCELDocDwnld()" href="#">
<img src="ThemeproLO/Common/Images/download.png" class="GridDocUpd" title="Download" attr-upd="" width="20" height="20">
Download Template
</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>
			
  
		
			 			 
		
		 <div class="Btxt8" > </div>
		  <br>
		   <div class="form-row">
           <div class="col-md-12">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_SGETFINANCEGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#FIMA_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4','FINANACESHEET');" id="BTNFINANACESHEET" name="BTNFINANACESHEET" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid " id="Table4">
             </table>
           </div>
        </div> 
		
		 
		  </br>
	       <div class="form-row">
             <div class="col d-flex justify-content-center">
                     <button type="button" id="Save1" data-aria="LSW_TFLEETDETLS|FLET|FLET_PFNO" data-form="ExistingLoan" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>
                         
                     <button type="button" data-aria="LSW_TFLEETDETLS|FLET|FLET_PFNO" next-form="TAB|" data-form="ExistingLoan" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
                     
             </div>
            </div> 
        </form>
      </div>
    </div>

      
      

   </div>                           
</div>
 
        	
         <div class="">
    <!-- Card body -->
     <div class=""> 
         <form >
        	</br>
        	</br>
           <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
                    
					<table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="CBRTable">
                     </table>
					
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
       <!-- <button type="button" id="Defferment"  class="btn btn-yel Btxt2">Initiate Deferement</button>-->
      </div>
    </div>
  </div>
  </div>  
  
  <!--<table style="display:none" id="GridTable4">
<thead>
<th>FINT_FINYEAR</th>
<th>FINT_YEAR1</th>
<th>FINT_YEAR2</th>
<th>FINT_YEAR3</th>
<th>FINT_CUSID</th>
-->

<!-- <th>RPLS_PRCSID</th>
<th>RPLS_ACTIVITYID</th>
<th>RPLS_CREATEDBY</th>
<th>RPLS_DTCREATED</th>
<th>RPLS_MODIFIEDBY</th>
<th>RPLS_DTMODIFIED</th>
 
</thead> 
</table> -->

 
   <script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/FleetDetails/LoadSubmit.js${DMY13}"></script>
   <script type="text/javascript" src="ThemeproLO/UCV/Financials/Script/FleetDetails/Validation.js${DMY13}"></script>                            
     
                                  <!--   </div>
                                </div>   -->    
                                
                                
<script>

/* $(document).ready(function(){
	
	$("input[name='PFDT_MODE']").change(function(){
	    if($('#OnlRadio').prop('checked')){
	    	$("#OnlinePayCollapse").addClass("show");
	    }
	    else{
	    	$("#OnlinePayCollapse").removeClass("show");
	    }
	    if($('#ChqRadio').prop('checked')){
	    	$("#ChequePayCollapse").addClass("show");
	    }
	    else{
	    	$("#ChequePayCollapse").removeClass("show");
	    }
	});
	
	
});
	*/
</script>

<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>