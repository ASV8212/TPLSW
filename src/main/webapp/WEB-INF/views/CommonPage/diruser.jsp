</br>
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="">
                            <!--Admin panel-->
     <div class="">
 <div class="card CardNS">
    <!-- Card body -->
    </br>
      <div class="card-body px-lg-5 pt-0">
        <form>
        <div class="form-row">
        	<div class="col Btxt8">User Creation</div>
          </div>
        <input type="text" id="URCR_ID" hidden="hidden" name="URCR_ID" class="form-control URCRDBfields">
		<input type="text" id="URCR_PRCSID"  name="URCR_PRCSID" hidden="hidden" class="form-control URCRDBfields" value="" >
        <input type="text" id="URCR_ACTIVITYID"  name="URCR_ACTIVITYID" hidden="hidden"  class="form-control URCRDBfields" value="">
        <input type="text" id="URCR_CREATEDBY"  name="URCR_CREATEDBY" hidden="hidden"  class="form-control URCRDBfields" value="">
        <input type="text" id="URCR_DTCREATED"  name="URCR_DTCREATED" hidden="hidden"  class="form-control URCRDBfields" value="">
        <input type="text" id="URCR_MODIFIEDBY"  name="URCR_MODIFIEDBY" hidden="hidden"  class="form-control URCRDBfields" value="">
        <input type="text" id="URCR_DTMODIFIED"  name="URCR_DTMODIFIED" hidden="hidden"  class="form-control URCRDBfields" value="">
        <input type="text" id="URCR_PASSWORD"  name="URCR_PASSWORD" hidden="hidden"  class="form-control URCRDBfields" value="themepass">
        <input type="text" id="URCR_UNIQID"  name="URCR_UNIQID" hidden="hidden"  class="form-control URCRDBfields" value="">
		<input type="text" id="URCR_ACTDAT"  name="URCR_ACTDAT" hidden="hidden"  class="form-control URCRDBfields" value="">
		<input type="text" id="URCR_INACTDAT"  name="URCR_INACTDAT" hidden="hidden"  class="form-control URCRDBfields" value="">
		
		 <input type="text" id="URCR_BRMAPXML"  name="URCR_BRMAPXML" hidden="hidden"  class="form-control URCRDBfields" value="">
        <input type="text" id="URCR_ROLEMAP"  name="URCR_ROLEMAP" hidden="hidden"  class="form-control URCRDBfields" value="">
		
		<input type="text" id="URCR_TYPE"  value="ROLE_USER"  hidden="hidden"  class="form-control URCRDBfields NoSpecialChar" name="URCR_TYPE">
		
		 <input type="text" id="URCR_BRMAPPINGCA"  maxlength="30" hidden="hidden" class="form-control  URCRDBfields " name="URCR_BRMAPPINGCA">
		
           <div class="New">
           <div class="form-row">
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="URCR_NAME" onchange="getUserName()" maxlength="25"  class="form-control NoSpacFields URCRMndtry URCRDBfields" name="URCR_NAME">
                    <label for="username" class="">Username/EmployeeId<span class="MndtryAstr">*</span></label>
                  </div>
               </div> 
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="URCR_FSTNAME"  maxlength="30" class="form-control URCRDBfields URCRMndtry NoSpecialChar" name="URCR_FSTNAME">
                    <label for="URCR_FSTNAME" class="">Name<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="URCR_EMAIL"  maxlength="50" class="form-control IsEmailFields URCRDBfields" name="URCR_EMAIL">
                    <label for="URCR_EMAIL" class="">Email ID<span class="MndtryAstr"></span></label>
                  </div>
               </div>
           </div>
            <div class="form-row">
               
               <div class="col-md-4">
                  <div class="md-form">
				      <select class="mdb-select md-form colorful-select dropdown-primary URCRMndtry URCRDBfields" id="URCR_ACTIVE" name="URCR_ACTIVE">
				         <option value="" selected>--Select--</option>
				         <option value="Active">Active</option>
				         <option value="Inactive">Inactive</option>
				     </select>
				       <label class="mdb-main-label BTxt9">Active<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="URCR_MOBILE"  maxlength="10"  class="form-control IsMobileFields IsNumberFields URCRDBfields NoSpecialChar" name="URCR_MOBILE">
                    <label for="URCR_MOBILE" class="">Mobile Number<span class="MndtryAstr"></span></label>
                  </div>
               </div>
			   <div class="col-md-4" style="display:none">
                  <div class="md-form">
                    <input type="text" id="URCR_PAN" data-validate="CUSTYPE|CONSTITUTION"  maxlength="10" class="form-control IsPanFields  URCRDBfields NoSpecialChar" name="URCR_PAN">
				    <label for="URCR_PAN" class="">PAN<span class="MndtryAstr"></span></label>
                  </div>
               </div>
           
              
                
               <div class="col-md-4" style="display:none" >
                  <div class="md-form">
                     <input type="text" id="URCR_GST"  maxlength="20"  class="form-control URCRDBfields NoSpecialChar" name="URCR_GST">
                     <label for="URCR_GST" class="">GST<span class="MndtryAstr"></span></label>
                  </div>
               </div>
                <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="URCR_ADDRI"  maxlength="30" class="form-control  URCRDBfields NoSpecialChar" name="URCR_ADDRI">
				     <label for="URCR_ADDRI" class="">Address Line 1<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
			   
			   </div>
              <div class="form-row">
			  
			  
			   <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="URCR_ADDRII"  maxlength="30"  class="form-control  URCRDBfields NoSpecialChar" name="URCR_ADDRII">
                    <label for="URCR_ADDRII" class="">Address Line 2<span class="MndtryAstr"></span></label>
                  </div>
               </div>
           
               
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="URCR_PINCODE" onblur="Pindetls(this,'URCR_STATE','URCR_CITY');StateCode();"  maxlength="30" class="form-control  IsPinFielde URCRDBfields NoSpecialChar" name="URCR_PINCODE">
				    <label for="URCR_PINCODE" class="">Pin Code<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="URCR_CITY" disabled maxlength="30"  class="form-control  URCRDBfields NoSpecialChar" name="URCR_CITY">
                    <label for="URCR_CITY" class="">City<span class="MndtryAstr"></span></label>
                  </div>
               </div>
			   
			   </div>
            <div class="form-row">
			
			   <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="URCR_STATE" disabled maxlength="30" class="form-control  URCRDBfields NoSpecialChar" name="URCR_STATE">
				    <label for="URCR_STATE" class="">State<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
           
                
              <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="URCR_CODE"  maxlength="30" disabled  class="form-control  URCRDBfields NoSpecialChar" name="URCR_CODE">
				    <label for="URCR_CODE" class="">State Code<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
			   
               <div class="col-md-4" style="display:none">
                  <div class="md-form">
                     <input type="text" id="URCR_ALTNAME"  maxlength="30" class="form-control  URCRDBfields NoSpecialChar" name="URCR_ALTNAME">
				     <label for="URCR_ALTNAME" class="">Alternative Name<span class="MndtryAstr"></span></label>
                  </div>
               </div>
			   <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="URCR_RPTID" disabled maxlength="30" class="form-control URCRMndtry URCRDBfields NoSpecialChar" name="URCR_RPTID">
				    <label for="URCR_RPTID" class="">Reporting To<span class="MndtryAstr">*</span></label>
					<img src="ThemeproLO/Common/Images/search.png" style="" onclick="getUserIdPop();" class="FieldIcon">
                  </div>
               </div> 
          
		   <input type="text" id="URCR_PRIMBR"  maxlength="10" hidden="hidden" class="form-control  URCRDBfields NoSpecialChar" name="URCR_PRIMBR">
		   <input type="text" id="URCR_PRIMROLE"  maxlength="30" hidden="hidden" class="form-control  URCRDBfields NoSpecialChar" name="URCR_PRIMROLE">
		   <input type="text" id="URCR_RPTUSRID"  maxlength="30" hidden="hidden" class="form-control  URCRDBfields NoSpecialChar" name="URCR_RPTUSRID">
            
			 
				</div>
			<div class="form-row">
			
			   <div class="col-md-4">
                   <div class="md-form">
                     <select class="mdb-select md-form colorful-select dropdown-primary URCRDBfields" onchange="GetUserCategory();RefresGrid();"   id="URCR_USRTYPE" name="URCR_USRTYPE">
				         <option value="" selected>--Select--</option>
				         <option value="ALL">ALL</option>
				         <option value="Zone">Zone</option>
				         <option value="Region">Region</option>
				         <option value="Area">Area</option>
				     </select>
				       <label class="mdb-main-label BTxt9">Branch Mapping<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="col-md-4 NAB" style="display:none">
                   <div class="md-form">
                     <select class="mdb-select md-form colorful-select dropdown-primary CATEGORY URCRDBfields" multiple  onchange="RefresGrid();" searchable="Search here.."  id="URCR_CATEGORY" name="URCR_CATEGORY">
				         <option value="" selected>--Select--</option>
				     </select>
				       <label class="mdb-main-label CATNAME BTxt9">Category<span class="MndtryAstr">*</span></label>
                   </div>
                </div>
				
				<div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="URCR_TABEMPIDI"  maxlength="16"  class="form-control  URCRDBfields IsNumberFields  NoSpecialChar" name="URCR_TABEMPIDI">
                    <label for="URCR_TABEMPIDI" class="">IMEI ID 1<span class="MndtryAstr"></span></label>
                  </div>
               </div>
			   <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="URCR_TABEMPIDII"   maxlength="16" class="form-control URCRDBfields IsNumberFields NoSpecialChar" name="URCR_TABEMPIDII">
				    <label for="URCR_TABEMPIDII" class="">IMEI ID 2<span class="MndtryAstr"></span></label>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="URCR_ASSETID"   maxlength="16" class="form-control URCRDBfields NoSpecialChar" name="URCR_ASSETID">
				    <label for="URCR_ASSETID" class="">Asset ID<span class="MndtryAstr"></span></label>
                  </div>
               </div> 			   
           </div>
		   <div class="form-row">
		   <div class="col-md-4">
                     <div class="md-form">
						<label for="URCR_REMARK" class="active">Remarks<span class="MndtryAstr"></span></label>
						 <br><br>
                          <textarea class="form-control URCRDBfields" id="URCR_REMARK" name="URCR_REMARK" style="height: 100px;width:380px;"></textarea>					
                     </div>
                  </div>
			 </div>
         </div>
		   <div class="form-row">
        	<div class="col Btxt8">Branch Mapping</div>
          </div>
		  <div class="form-row">
               <div class="col-md-9">
               </div>
			    <div class="col-md-3">
                     <div class="HyperControls FltRight"> 
                         <a class="Btxt4 ADDBTN FltRight NEWDEPT"  href="#" onclick="GetUserMap();">+ Add Branch</a>
                     </div> 
				</div>
          </div>
		   <div class="card-headerBlack white-text">    
         <div class="row">       
         <div class="col-md-2 ">
         </div>
         <div class="col-md-5"> 
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTable5" name="SearchTable5" class="Ntxt3" title="">
         </div> 
         </div>                     
</div>
            <div class="form-row">
               <div class="col">
                    <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table5',{spname:'LSW_SBRMAPLOADDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#URCR_USRTYPE').val(),MnuId:$('#URCR_BRMAPPINGCA').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,4,5,6,7','DIRBRMAPMAIN');" id="BTNDIRBRMAPMAINGRD" name="BTNDIRBRMAPMAINGRD" />
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table5">
                    </table>
                </div>
            </div>  
			<div class="form-row">
        	<div class="col Btxt8">Role Mapping</div>
          </div>
		  <div class="form-row">
               <div class="col-md-9">
               </div>
                <div class="col-md-3">
                    <div class="HyperControls FltRight"> 
                        <a class="Btxt4 ADDBTN FltRight" onclick="GetRoleMap();" href="#">+ Add Role</a>
                   </div> 
               </div>
          </div>
		   <div class="card-headerBlack white-text">    
         <div class="row">       
         <div class="col-md-2 ">
         </div>
         <div class="col-md-5"> 
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTable6" name="SearchTable6" class="Ntxt3" title="">
         </div> 
         </div>                     
</div>
			 <div class="form-row">
               <div class="col">
                    <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table6',{spname:'LSW_SGETFINLROLEGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,4,5','DIRROLEMAPMAIN');" id="BTNDIRROLEMAPMAINGRD" name="BTNDIRROLEMAPMAINGRD" />
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table6">
                    </table>
                </div>
            </div> 
           </br>
               <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Submit" class="btn btn-Syel waves-effect waves-light FormSave" style="display:none">Submit</button>
                     <button type="button" id="Approve" class="btn btn-Syel waves-effect waves-light FormSave" style="display:none">Approve</button>
					 <button type="button" id="Reject" class="btn btn-Syel waves-effect waves-light FormSave" style="display:none">Reject</button>
                     <button type="button" id="SendBack" class="btn btn-Syel waves-effect waves-light FormSave" style="display:none">Send Back</button> 	 					 
                  </div>
              </div>
        </form>
      </div>
    </div>

  <a type="button" id="UserModalPop" class="btn btn-floating btn-large red waves-effect waves-light" style="display:none" data-toggle="modal" data-target="#UserModal">
 <i class="fa fa-plus" style="display: none;"></i> </a>  
<div class="modal fade" id="UserModal" tabindex="-1" role="dialog" aria-labelledby="UserModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1000px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">Branch Mapping</div> 
         <a href="#"><img id="UserModalClose" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form>
        	</br>
        	</br>
        	<input type="text" id="UCBM_ROLEID"  name="UCBM_ROLEID" hidden="hidden"  class="form-control UCBMDBfields" value="">
			<input type="text" id="UCBM_UNIQID"  name="UCBM_UNIQID" hidden="hidden"  class="form-control UCBMDBfields" value="">
			
			<input type="text" id="BRMAP"  name="BRMAP" hidden="hidden"  class="form-control" value="">
			<input type="text" id="CATEGORY"  name="CATEGORY" hidden="hidden"  class="form-control" value="">
			<input type="text" id="RPTID"  name="RPTID" hidden="hidden"  class="form-control" value="">
        	<div class="form-row">
               <div class="col-md-4" style="display:none">
                  <div class="md-form">
                    <input type="text" id="UCBM_ROLENAME"  maxlength="25" disabled class="form-control UCBMDBfields" name="UCBM_ROLENAME">
                    <label for="UCBM_ROLENAME" class="">User Name<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               </div>
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
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table2',{spname:'LSW_SGETBRMAPDETL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#RPTID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1,2','DIRBRMAP');" id="BTNUSRBRGRD" name="BTNUSRBRGRD" />
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
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="UserModalSmt" onclick="" class="btn btn-yel Btxt2">Confirm</button>
      </div>
    </div>
  </div>
  </div> 
  
   <a type="button" id="RoleModalPop" class="btn btn-floating btn-large red waves-effect waves-light" style="display:none" data-toggle="modal" data-target="#RoleModal">
 <i class="fa fa-plus" style="display: none;"></i> </a> 
 <div class="modal fade" id="RoleModal" tabindex="-1" role="dialog" aria-labelledby="RoleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1000px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">Role Mapping</div> 
         <a href="#"><img id="RoleModalClose" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form>
        	</br>
        	</br>
        	<input type="text" id="URCM_ROLEID"  name="URCM_ROLEID" hidden="hidden"  class="form-control URCMDBfields" value="">
			<input type="text" id="URCM_UNIQID"  name="URCM_UNIQID" hidden="hidden"  class="form-control URCMDBfields" value="">
        	<div class="form-row">
               <div class="col-md-4" style="display:none">
                  <div class="md-form">
                    <input type="text" id="URCM_ROLENAME"  maxlength="25" disabled class="form-control URCMDBfields" name="URCM_ROLENAME">
                    <label for="URCM_ROLENAME" class="">User Name<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               </div>
			    <div class="card-headerBlack white-text">    
         <div class="row">       
         <div class="col-md-2 ">
         </div>
         <div class="col-md-5"> 
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTable4" name="SearchTable4" class="Ntxt3" title="">
         </div> 
         </div>                     
</div>
           <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table4',{spname:'LSW_SGETROLEMAPDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','DIRUSERROLEMAP');" id="BTNUSRROLGRD" name="BTNUSRROLGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table4">
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
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="RoleModalSmt" onclick="" class="btn btn-yel Btxt2">Confirm</button>
      </div>
    </div>
  </div>
  </div> 
  
  <a type="button" id="RptIDModalPop" class="btn btn-floating btn-large red waves-effect waves-light" style="display:none" data-toggle="modal" data-target="#RptIDModal">
 <i class="fa fa-plus" style="display: none;"></i> </a> 
 <div class="modal fade" id="RptIDModal" tabindex="-1" role="dialog" aria-labelledby="RptIDModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1000px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">Reporting User</div> 
         <a href="#"><img id="RptIDModalClose" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form>
        	</br>
        	</br>
        	<input type="text" id="URCM_ROLEID"  name="URCM_ROLEID" hidden="hidden"  class="form-control URCMDBfields" value="">
			<input type="text" id="URCM_UNIQID"  name="URCM_UNIQID" hidden="hidden"  class="form-control URCMDBfields" value="">
			
			<input type="text" id="RPTUSRID"  name="RPTUSRID" hidden="hidden"  class="form-control URCMDBfields" value="">

			    <div class="card-headerBlack white-text">    
         <div class="row">       
         <div class="col-md-2 ">
         </div>
         <div class="col-md-5"> 
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTable7" name="SearchTable7" class="Ntxt3" title="">
         </div> 
         </div>                     
</div>
           <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table7',{spname:'LSW_SGETRPTIDDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#RPTUSRID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','RPTUSRID');" id="BTNRPTUSRID" name="BTNRPTUSRID" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table7">
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
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="RptUsrModalSmt" onclick="" class="btn btn-yel Btxt2">Confirm</button>
      </div>
    </div>
  </div>
  </div> 
  
  <table style="display:none" id="GridTable2">
   <thead>
<th>UCBM_ROLEID</th>
<th>UCBM_ROLENAME</th>
<th>UCBM_USERID</th>
<th>UCBM_USERNAME</th>
<th>UCBM_BRMAP</th>
<th>UCBM_BRMAPC</th>
<th>UCBM_PRIMARY</th>
<th>UCBM_UNIQID</th>
<!--<th>UPFD_PRCSID</th>
<th>UPFD_ACTIVITYID</th>
<th>UPFD_CREATEDBY</th>
<th>UPFD_DTCREATED</th>
<th>UPFD_MODIFIEDBY</th>
<th>UPFD_DTMODIFIED</th>-->
   </thead> 
    </table>  
	<table style="display:none" id="GridTable4">
   <thead>
<th>URCM_ROLEID</th>
<th>URCM_ROLENAME</th>
<th>URCM_USERID</th>
<th>URCM_USERNAME</th>
<th>URCM_UNIQID</th>
<!--<th>UPFD_PRCSID</th>
<th>UPFD_ACTIVITYID</th>
<th>UPFD_CREATEDBY</th>
<th>UPFD_DTCREATED</th>
<th>UPFD_MODIFIEDBY</th>
<th>UPFD_DTMODIFIED</th>-->
   </thead> 
    </table>  
	
	 <table style="display:none" id="GridTable5">
   <thead>
<th>UCBM_ROLEID</th>
<th>UCBM_ROLENAME</th>
<th>UCBM_USERID</th>
<th>UCBM_USERNAME</th>
<th>UCBM_BRMAP</th>
<th>UCBM_BRMAPC</th>
<th>UCBM_PRIMARY</th>
<th>UCBM_UNIQID</th>
<!--<th>UPFD_PRCSID</th>
<th>UPFD_ACTIVITYID</th>
<th>UPFD_CREATEDBY</th>
<th>UPFD_DTCREATED</th>
<th>UPFD_MODIFIEDBY</th>
<th>UPFD_DTMODIFIED</th>-->
   </thead> 
    </table> 
	
	 <table style="display:none" id="GridTable5">
   <thead>
<th>URCM_ROLEID</th>
<th>URCM_ROLENAME</th>
<th>URCM_USERID</th>
<th>URCM_USERNAME</th>
<th>URCM_PRIMARY</th>
<th>URCM_UNIQID</th>
<!--<th>UPFD_PRCSID</th>
<th>UPFD_ACTIVITYID</th>
<th>UPFD_CREATEDBY</th>
<th>UPFD_DTCREATED</th>
<th>UPFD_MODIFIEDBY</th>
<th>UPFD_DTMODIFIED</th>-->
   </thead> 
    </table>
	
    <script type="text/javascript" src="ThemeproLO/Commonpage/diruser/LoadSubmit.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Commonpage/diruser/Validation.js${DMY13}"></script>
     
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>    


                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           