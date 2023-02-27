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
      <div class="card-body px-lg-5 pt-0">
        <form>
        
            <input type="text" id="BRCR_PRCSID" hidden="hidden" name="BRCR_PRCSID" class="form-control BRCRDBfields">
            <input type="text" id="BRCR_ACTIVITYID" hidden="hidden" name="BRCR_ACTIVITYID" class="form-control BRCRDBfields">
            <input type="text" id="BRCR_DTCREATED" hidden="hidden" name="BRCR_DTCREATED" class="form-control BRCRDBfields"> 
            <input type="text" id="BRCR_CREATEDBY" hidden="hidden" name="BRCR_CREATEDBY" class="form-control BRCRDBfields">
            <input type="text" id="BRCR_DTMODIFIED" hidden="hidden" name="BRCR_DTMODIFIED" class="form-control BRCRDBfields">
            <input type="text" id="BRCR_MODIFIEDBY" hidden="hidden" name="BRCR_MODIFIEDBY" class="form-control BRCRDBfields">
           
           <input type="text" id="BRCR_UNIQID" hidden="hidden" name="BRCR_UNIQID" class="form-control BRCRDBfields">
           <input type="text" id="BRCR_FLAG" hidden="hidden" name="BRCR_FLAG" class="form-control BRCRDBfields">
           <input type="text" id="BRCR_BRVERTI" hidden="hidden" name="BRCR_BRVERTI" class="form-control BRCRDBfields">
        	
			
			<div class="form-row">
        		<div class="col Btxt3">Branch Creation </div>
        	</div>

           <div class="form-row">
            <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="BRCR_BRANCHID"  name="BRCR_BRANCHID" class="form-control NoSpacFields NoSpecialCharNOTDOT BRCRMndtry BRCRDBfields">
                    <label for="BRCR_BRANCHID" class="">Branch ID<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
               <div class="col-md-4">
                <div class="md-form">
                     <input type="text" id="BRCR_BRANCHNAME" name="BRCR_BRANCHNAME" class="form-control NoSpecialCharNOTDOT  BRCRMndtry BRCRDBfields">
                    <label for="BRCR_BRANCHNAME" class="">Branch Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
          
               <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary INDM BRCRMndtry BRCRDBfields" id="BRCR_ORGID" name="BRCR_ORGID">
  					<option value="Loan">Loan</option>
				</select>
				<label class="mdb-main-label BTxt9">Organization Id<span class="MndtryAstr">*</span></label>
             </div>
            </div>
                
                </div>

 
            <div class="form-row">

                <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  BRCRMndtry BRCRDBfields" id="BRCR_ZONE" name="BRCR_ZONE">
				</select>
				<label class="mdb-main-label BTxt9">Zone<span class="MndtryAstr">*</span></label>
             </div>
            </div> 
                
               
               <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  BRCRMndtry BRCRDBfields" id="BRCR_REGION" name="BRCR_REGION">
				</select>
				<label class="mdb-main-label BTxt9">Region<span class="MndtryAstr">*</span></label>
             </div>
            </div> 
            
           
          <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  BRCRMndtry BRCRDBfields" id="BRCR_AREA" name="BRCR_AREA">
				</select>
				<label class="mdb-main-label BTxt9">Area<span class="MndtryAstr">*</span></label>
             </div>
            </div>   
            
        </div>
        
            <div class="form-row">
			
			<div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="BRCR_DESCRIPTION" name="BRCR_DESCRIPTION" maxlength="3" class="form-control  NoSpecialCharNOTDOT BRCRMndtry BRCRDBfields">
                    <label for="BRCR_DESCRIPTION" class="">Description<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                    
            <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="BRCR_ADDRESS" name="BRCR_ADDRESS" class="form-control AddrNoSpecialChar BRCRMndtry BRCRDBfields">
                    <label for="BRCR_ADDRESS" class="">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                
                      <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="BRCR_ADDRESSII" name="BRCR_ADDRESSII" class="form-control AddrNoSpecialChar  BRCRDBfields">
                    <label for="BRCR_ADDRESSII" class="">Address Line 2<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           
       </div>
             <div class="form-row">
                
             <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="BRCR_PIN" name="BRCR_PIN" onblur="fnOnFocusOut(this);Pindetls(this,'BRCR_STATE','BRCR_CITY','BRCRH_STATECODE');StateCode();" class="form-control IsNumberFields NoSpecialChar IsPinFielde  BRCRDBfields">
                    <label for="BRCR_PIN" class="">Pin code<span class="MndtryAstr"></span></label>
                  </div>
                </div>

          
                <div class="col-md-4">
                <div class="md-form">
                     <input type="text" id="BRCR_CITY" disabled  name="BRCR_CITY"   class="form-control BRCRMndtry BRCRDBfields">
                    <label for="BRCR_CITY" class="">City<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
               <div class="col-md-4">
                <div class="md-form">
                     <input type="text" id="BRCR_STATE" disabled name="BRCR_STATE" class="form-control BRCRMndtry BRCRDBfields">
                    <label for="BRCR_STATE" class="">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div>
           
             <div class="form-row">
            <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="BRCR_STATECODE"  disabled name="BRCR_STATECODE" class="form-control IsNumberFields  BRCRMndtry NoSpecialCharNOTDOT BRCRDBfields">
                    <label for="BRCR_STATECODE" class="">State Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>

            <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary INDM BRCRMndtry BRCRDBfields"  onchange="CHKSTATUS();" id="BRCR_STATUS" name="BRCR_STATUS">
                  	<option value="">Select</option>
  					<option value="Active">Active</option>
  					<option value="InActive">InActive</option>
				</select>
				<label class="mdb-main-label BTxt9">Status<span class="MndtryAstr">*</span></label>
             </div>
            </div> 
         
            <div class="col-md-4">
                      <div class="md-form">
                  <input type="text" id="BRCR_ACTIVEDT" name="BRCR_ACTIVEDT"  maxlength="10" class="form-control form-control   IsNumberFields NoSpecialChar  ISDatefield  BRCRDBfields ">
                    <label for="BRCR_ACTIVEDT" class="">Active Date<span class="MndtryAstr"></span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon actdt datepicker"/>
                  </div>
                </div>
                
                  </div>
             
         <div class="form-row">
               <div class="col-md-4">
                  <div class="md-form">
                  <input type="text" id="BRCR_INACTIVEDT" name="BRCR_INACTIVEDT"  maxlength="10" class="form-control form-control  IsNumberFields NoSpecialChar  ISDatefield  BRCRDBfields ">
                    <label for="BRCR_INACTIVEDT" class="">In Active Date<span class="MndtryAstr"></span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon Inactdt datepicker"/>
                  </div>
                </div>
        

        <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  BRCRMndtry BRCRDBfields" id="BRCR_COUNTRY" name="BRCR_COUNTRY">
  					<option value="India">India</option>
				</select>
				<label class="mdb-main-label BTxt9">Country<span class="MndtryAstr">*</span></label>
             </div>
            </div>
            <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="BRCR_CONTACTPER" name="BRCR_CONTACTPER" class="form-control NoSpecialCharNOTDOT  IsAlphaFields  BRCRMndtry BRCRDBfields">
                    <label for="BRCR_CONTACTPER" class="">Contact Person<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                
      </div>
           
           <div class="form-row">

               <div class="col-md-4">
                <div class="md-form">
                     <input type="text" id="BRCR_MOBILE" name="BRCR_MOBILE" maxlength="10" class="form-control BRCRMndtry IsNumberFields NoSpecialChar IsMobileFields BRCRDBfields">
                    <label for="BRCR_MOBILE" class="">Mobile<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
         
            <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="BRCR_EMAIL" name="BRCR_EMAIL" class="form-control IsEmailFields BRCRMndtry BRCRDBfields">
                    <label for="BRCR_EMAIL" class="">Email ID<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                
              <div class="col-md-4">
                <div class="md-form">
                     <input type="text" id="BRCR_LATITUDE" name="BRCR_LATITUDE" class="form-control  BRCRDBfields">
                    <label for="BRCR_LATITUDE" class="">Latitude<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                
                  </div>
           
            <div class="form-row">
            
      
        
            <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="BRCR_LONGTITUTE" name="BRCR_LONGTITUTE" class="form-control  BRCRDBfields">
                    <label for="BRCR_LONGTITUTE" class="">Longitude<span class="MndtryAstr"></span></label>
                  </div>
                </div>
               <div class="col-md-4">
                <div class="md-form">
                     <input type="text" id="BRCR_GEOLIMIT" name="BRCR_GEOLIMIT" class="form-control  BRCRDBfields">
                    <label for="BRCR_GEOLIMIT" class="">Geo Limit<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                
               <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  BRCRMndtry BRCRDBfields" id="BRCR_PROFITCEN" name="BRCR_PROFITCEN">
				</select>
				<label class="mdb-main-label BTxt9">Profit Center<span class="MndtryAstr">*</span></label>
             </div>
            </div> 
                
           </div>
          <div class="form-row">
		   <div class="col-md-4">
                     <div class="md-form">
						<label for="BRCR_REMARK" class="active">Remarks<span class="MndtryAstr"></span></label>
						 <br>
                          <textarea class="form-control BRCRDBfields" id="BRCR_REMARK" name="BRCR_REMARK" style="height: 100px;width:380px;"></textarea>					
                     </div>
                  </div>
			 </div>
			 
			<div class="form-row">
        	<div class="col Btxt8">Vertical Mapping</div>
          </div>
		  <div class="form-row">
               <div class="col-md-9">
               </div>
                <div class="col-md-3">
                    <div class="HyperControls FltRight"> 
                        <a class="Btxt4 ADDBTN FltRight" onclick="GetRoleMap();" href="#">+ Add Vertical</a>
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
                    <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table6',{spname:'LSW_SGETVERTICALGRD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0','BRVERTICAL');" id="BTNDBRVERTICALGRD" name="BTNDBRVERTICALGRD" />
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table6">
                    </table>
                </div>
            </div>  
         <div class="form-row" style="display:none">
        	<div class="col Btxt8">User Mapping</div>
          </div>
		  <div class="form-row" style="display:none">
               <div class="col-md-9">
               </div>
			    <div class="col-md-3">
                     <div class="HyperControls FltRight"> 
                         <a class="Btxt4 ADDBTN FltRight NEWDEPT"  href="#" onclick="GetUserMap();">+ Add User</a>
                     </div> 
				</div>
          </div>
		   <div class="card-headerBlack white-text" style="display:none">    
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
            <div class="form-row" style="display:none">
               <div class="col">
                    <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table5',{spname:'LSW_SGETFINLBRANUSERGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5,6','DIRBRUSERMAPMAIN');" id="BTNDIRBRMAPMAINGRD" name="BTNDIRBRMAPMAINGRD" />
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table5">
                    </table>
                </div>
            </div>  
               <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Submit" data-aria="Lsw_tbranchcreation|BRCR" class="btn btn-Syel waves-effect waves-light FormSave" style="display:none">Submit</button>
                     <button type="button" id="Approve"  data-aria="Lsw_tbranchcreation|BRCR" class="btn btn-Syel waves-effect waves-light FormSave" style="display:none">Approve</button>
					 <button type="button" id="Reject"  data-aria="Lsw_tbranchcreation|BRCR" class="btn btn-Syel waves-effect waves-light FormSave" style="display:none">Reject</button>
                     <button type="button" id="SendBack"  data-aria="Lsw_tbranchcreation|BRCR" class="btn btn-Syel waves-effect waves-light FormSave" style="display:none">Send Back</button> 	    
                  
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
       <div class="Btxt10">User Mapping</div> 
         <a href="#"><img id="UserModalClose" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form>
        	</br>
        	</br>
        	<input type="text" id="BRUS_USERID"  name="BRUS_USERID" hidden="hidden"  class="form-control BRUSDBfields" value="">
			<input type="text" id="BRUS_USERNAME"  name="BRUS_USERNAME" hidden="hidden"  class="form-control BRUSDBfields" value="">
			<input type="text" id="BRUS_UNIQID"  name="BRUS_UNIQID" hidden="hidden"  class="form-control BRUSDBfields" value="">
        <!--	<div class="form-row"  style="disaplay:none">
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="UCBM_ROLENAME"  maxlength="25" disabled class="form-control UCBMDBfields" name="UCBM_ROLENAME">
                    <label for="UCBM_ROLENAME" class="">Branch Name<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               </div>-->
			   
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
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table2',{spname:'LSW_SGETBRANCHUSERMAP',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','DIRBRUSERMAP');" id="BTNUSRBRGRD" name="BTNUSRBRGRD" />
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
  
  
<a type="button" id="VertiModalPop" class="btn btn-floating btn-large red waves-effect waves-light" style="display:none" data-toggle="modal" data-target="#VertiModal">
<i class="fa fa-plus" style="display: none;"></i> </a>  
<div class="modal fade" id="VertiModal" tabindex="-1" role="dialog" aria-labelledby="VertiModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1000px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">Veritical Mapping</div> 
         <a href="#"><img id="VertiModalClose" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form>
		 
		<input type="text" id="BRID"  name="BRID" hidden="hidden"  class="form-control" value="">
		<input type="text" id="BRNAME"  name="BRNAME" hidden="hidden"  class="form-control" value="">
        	</br>
        	</br>
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
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table4',{spname:'LSW_SGETVERTICALMAP',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','VERTICALMAP');" id="BTNVERTICALMAPGRD" name="BTNVERTICALMAPGRD" />
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
        <button type="button" id="VertiModalSmt" onclick="" class="btn btn-yel Btxt2">Confirm</button>
      </div>
    </div>
  </div>
  </div> 

    <table style="display:none" id="GridTable2">
   <thead>
<th>BRUS_USERID</th>
<th>BRUS_USERNAME</th>
<th>BRUS_NAME</th>
<!--<th>UPFD_PRCSID</th>
<th>UPFD_ACTIVITYID</th>
<th>UPFD_CREATEDBY</th>
<th>UPFD_DTCREATED</th>
<th>UPFD_MODIFIEDBY</th>
<th>UPFD_DTMODIFIED</th>-->
   </thead> 
    </table>   
    
   
 <table style="display:none" id="GridTable6">
   <thead>
<th>BVRG_BRID</th>
<th>BVRG_BRNAME</th>
<th>BVRG_VERTICAL</th>
<!--<th>UPFD_PRCSID</th>
<th>UPFD_ACTIVITYID</th>
<th>UPFD_CREATEDBY</th>
<th>UPFD_DTCREATED</th>
<th>UPFD_MODIFIEDBY</th>
<th>UPFD_DTMODIFIED</th>-->
   </thead> 
    </table>   
    
    <script type="text/javascript" src="ThemeproLO/Commonpage/DirDepartment/LoadSubmit.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/Commonpage/DirDepartment/Validation.js${DMY13}"></script> 

    
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>  

                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           