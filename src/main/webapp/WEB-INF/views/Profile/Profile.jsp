</br>
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="">
                            <!--Admin panel-->
     <div class="">
	 <a type="button" id="GoBack" onclick="goBack()" class="Btxt4 " href="#"><- BACK</a>
         </br>
         </br>
		 
 <div class="card CardNS">
    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0">
        <form>
           
           
        <input type="text" id="ROCR_PRCSID" hidden="hidden" name="ROCR_PRCSID" class="form-control ROCRDBfields">
            <input type="text" id="ROCR_ACTIVITYID" hidden="hidden" name="ROCR_ACTIVITYID" class="form-control ROCRDBfields">
            <input type="text" id="ROCR_DTCREATED" hidden="hidden" name="ROCR_DTCREATED" class="form-control ROCRDBfields"> 
            <input type="text" id="ROCR_CREATEDBY" hidden="hidden" name="ROCR_CREATEDBY" class="form-control ROCRDBfields">
            <input type="text" id="ROCR_DTMODIFIED" hidden="hidden" name="ROCR_DTMODIFIED" class="form-control ROCRDBfields">
            <input type="text" id="ROCR_MODIFIEDBY" hidden="hidden" name="ROCR_MODIFIEDBY" class="form-control ROCRDBfields">

        <!--	<input type="text" id="ROCR_ROLEID" hidden="hidden" name="ROCR_ROLEID" class="form-control ROCRDBfields">
        	<input type="text" id="ROCR_ROLENAME" hidden="hidden" name="ROCR_ROLENAME" class="form-control ROCRDBfields">-->
			
				
        	
        	<div class="form-row">
        		<div class="col Btxt3">User Configuration</div>
        	</div>
			
			       <div class="form-row">
       
                 <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="USERID" disabled name="USERID" class=" form-control NoSpecialChar ROCRMndtry ROCRDBfields">
                    <label for="ROCR_USERID" class="">User ID<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                
            <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="NAME" name="NAME" class="  form-control NoSpecialChar  ROCRMndtry ROCRDBfields">
                    <label for="ROCR_NAME" class="">User Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           
            <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="MobileNO" maxlength="10" name="MobileNO" class="form-control IsMobileFields NoSpecialChar ROCRMndtry ROCRDBfields">
                    <label for="ROCR_MobileNO" class="">Mobile No<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
				     
            </div> 
			

        <div class="form-row">
               <div class="col-md-4">
                <div class="md-form">
                     <input type="text" id="EMAIL" name="EMAIL" class="form-control  IsEmailFields ROCRMndtry ROCRDBfields">
                    <label for="ROCR_EMAIL" class="">EmailID<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
        </div>
          
		  <div class="form-row">
		       <div class="Btxt10">Change Password</div>
		   </div>
		    <div class="form-row">
            <div class="col-md-4">
                 <div class="md-form">
                        <input type="password" id="CurPassword" maxlength="100"  name="CurPassword" class="form-control">
						<label for="CurPassword" class="">Current Password<span class="MndtryAstr"></span></label>
                  </div>
               </div>
         
            <div class="col-md-4">
                 <div class="md-form">
                        <input type="password" id="NewPassword" maxlength="100"  name="NewPassword" class="form-control">
						<label for="NewPassword" class="">New Password<span class="MndtryAstr"></span></label>
                  </div>
               </div>
          
            <div class="col-md-4">
                 <div class="md-form">
                        <input type="text" id="ConfPassword" maxlength="100"  name="ConfPassword" class="form-control">
						<label for="ConfPassword" class="">Confirm Password<span class="MndtryAstr"></span></label>
                  </div>
               </div>
           </div>
    <!--
            <div class="col-md-4">
               <div class="md-form">
              
                  <input type="text" id="ROCR_ACTIVEDT" name="ROCR_ACTIVEDT"  maxlength="10" class="form-control form-control ROCRMndtry IsNumberFields NoSpecialChar  ISDatefield  ROCRDBfields ">
                    <label for="ROCR_ACTIVEDT" class="">Active Date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>
                </div>
          
             <div class="form-row">
 
             <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="ROCR_ROLESTAT" name="ROCR_ROLESTAT" class="form-control NoSpecialChar ROCRMndtry ROCRDBfields">
                    <label for="ROCR_ROLESTAT" class="">Role Status<span class="MndtryAstr">*</span></label>
                  </div>
                  </div>
                
                <div class="col-md-4">
               <div class="md-form">
              
                  <input type="text" id="ROCR_INACTIVEDT" name="ROCR_INACTIVEDT"  maxlength="10" class="form-control form-control ROCRMndtry IsNumberFields NoSpecialChar  ISDatefield  ROCRDBfields ">
                    <label for="ROCR_INACTIVEDT" class="">InActive Date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>
           </div>
           </div>
 
          

           
         
      
      
           -->
           
              

		 
              
     
        
      </div>
    </div>
	
	         <!--<div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" data-aria="LSW_TROLECREATION|ROCR"  data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Submit</button>    
                  
                  </div>
              </div>-->
        <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button"  data-aria="LSW_TROLECREATION|ROCR"  id="Submit" class="btn btn-Syel waves-effect waves-light FormSave" >Confirm</button> 					 
                  </div>
              </div>
     

        </div>
   
  <a type="button" id="UserModalPop" class="btn btn-floating btn-large red waves-effect waves-light" style="display:none" data-toggle="modal" data-target="#UserModal">
 <i class="fa fa-plus" style="display: none;"></i> </a>  
 
<div class="modal fade" id="UserModal" tabindex="-1" role="dialog" aria-labelledby="UserModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1000px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">User  Mapping</div> 
         <a href="#"><img id="UserModalClose" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form>
        	</br>
        	</br>
            <input type="text" id="ROUS_ROLEID"  name="ROUS_ROLEID" hidden="hidden"  class="form-control ROUSDBfields" value="">
			<input type="text" id="ROUS_UNIQID"  name="ROUS_UNIQID" hidden="hidden"  class="form-control ROUSDBfields" value="">
     	
           <input type="text" id="ROUS_ROLENAME"  maxlength="25" hidden="hidden" class="form-control ROUSDBfields" name="ROUS_ROLENAME">
           
           <div class="card-headerBlack white-text">    
         <div class="row">       
         <div class="col-md-2 ">
         </div>
         <div class="col-md-5"> 
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTable2" name="SearchTable2" class="Ntxt3" title="">
         </div> 
         </div>                     
</div>
          <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table2',{spname:'LSW_SGETROLEUSERDETAIL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','ROLEUSERMAP');" id="BTNUSRBRGRD" name="BTNUSRBRGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
             </table>
          </div>
        </div> 
      <!-- grid  show -->
    <!--Main layout-->
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
        <button type="button" id="UserModalSmt" onclick="" class="btn btn-yel Btxt2">Confirm</button>
      </div>
    </div>
  </div>
  </div> 
   
   
   
 <table style="display:none" id="GridTable2">
   <thead>
<th>ROUS_USERID</th>
<th>ROUS_USERNAME</th>
<th>ROUS_ROLE</th>
<th>ROUS_ROLEID</th>

   </thead> 
    </table>     
    
    
    <script type="text/javascript" src="ThemeproLO/Commonpage/Profile/LoadSubmit.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/Commonpage/Profile/Validation.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Commonpage/Profile/Validation.js${DMY13}"></script>

<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/Base64.js${DMY13}"></script>
    
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>  

                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           