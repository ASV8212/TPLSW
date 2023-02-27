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
		
		  <ul title="PF" class="nav FormPageMultiTab" data-popup="No" data-aria="LSW_TFINANDTLS|FINT|FINT_PFNO">   
		  
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
 
 
    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0">
        <form>
         <input type="text" id="FIMA_PRCSID" hidden="hidden" name="FIMA_PRCSID" class="form-control FIMADBfields">
          <input type="text" id="FIMA_ACTIVITYID" hidden="hidden" name="FIMA_ACTIVITYID" class="form-control FIMADBfields">
           <input type="text" id="FIMA_DTCREATED" hidden="hidden" name="FIMA_DTCREATED" class="form-control FIMADBfields"> 
           <input type="text" id="FIMA_CREATEDBY" hidden="hidden" name="FIMA_CREATEDBY" class="form-control FIMADBfields">
            <input type="text" id="FIMA_MODIFIEDBY" hidden="hidden" name="FIMA_MODIFIEDBY" class="form-control FIMADBfields">
             <input type="text" id="FIMA_DTMODIFIED" hidden="hidden" name="FIMA_DTMODIFIED" class="form-control FIMADBfields">
        	<!-- LSW_TRATIOCOMPDETAILS -->
        	  <input type="text" id="FIMA_CUSID" hidden="hidden" name="FIMA_CUSID"   class="form-control FIMADBfields">
			  <input type="text" id="FIMA_CUSNAME" hidden="hidden" name="FIMA_CUSNAME"   class="form-control FIMADBfields">
			  <input type="text" id="FIMA_XMLMAIN" hidden="hidden" name="FIMA_XMLMAIN" class="form-control FIMADBfields">
			  
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
       <div class="form-row">
            <div class="col-md-6"> 
                <div class="md-form">
                     <select class="md-form colorful-select dropdown-primary RAIOYEAR FIMADBfields" onchange="GrdLoadOnYrChng()" id="FIMA_YEAR" name="FIMA_YEAR">
  					   <option value="">Select</option>
					   <option  value="2020-2021" >2020-2021</option>
  					   <option  value="2019-2020" selected>2019-2020</option>
					   <option  value="2018-2019">2018-2019</option>
				     </select>
				       <label class="mdb-main-label BTxt9">LATEST YEAR<span class="MndtryAstr"></span></label>
                </div>
             </div>
		</div>
			 </br>
		 <div class="Btxt8" > </div>
		  <br>
		   <div class="form-row">
           <div class="col-md-12">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_SGETFINANCEGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'FD|'+$('#FIMA_CUSID').val(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4','FINANACESHEET');" id="BTNFINANACESHEET" name="BTNFINANACESHEET" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid " id="Table4">
             </table>
           </div>
        </div> 
		  </br>
	       <div class="form-row">
             <div class="col d-flex justify-content-center">
                     <button type="button" id="Save1" data-aria="LSW_TFINANCEMAIN|FIMA|FIMA_CUSID" data-form="ExistingLoan" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>
                         
                     <button type="button" data-aria="LSW_TFINANCEMAIN|FIMA|FIMA_CUSID" next-form="TAB|" data-form="ExistingLoan" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
                     
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
  
  <table style="display:none" id="GridTable4">
<thead>
<th>FINT_FINYEAR</th>
<th>FINT_YEAR1</th>
<th>FINT_YEAR2</th>
<th>FINT_YEAR3</th>
<th>FINT_CUSID</th>
<!-- <th>RPLS_PRCSID</th>
<th>RPLS_ACTIVITYID</th>
<th>RPLS_CREATEDBY</th>
<th>RPLS_DTCREATED</th>
<th>RPLS_MODIFIEDBY</th>
<th>RPLS_DTMODIFIED</th>
 -->
</thead> 
</table> 
 
   <script type="text/javascript" src="ThemeproLO/UCV/PFBank/Script/FinDtls/LoadSubmit.js${DMY13}"></script>
   <script type="text/javascript" src="ThemeproLO/UCV/PFBank/Script/FinDtls/Validation.js${DMY13}"></script>                            
     
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