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
    </br>
      <div class="card-body px-lg-5 pt-0">
        <form>
        <div class="form-row">
        	<div class="col Btxt8">User Creation</div>
          </div>
        <input type="text" id="id" hidden="hidden" name="id" class="form-control DBfields">
        <input type="text" id="role" hidden="hidden"  class="form-control  DBfields" name="role">
                    <input type="text" id="gradeId" hidden="hidden"  class="form-control  DBfields" name="gradeId">
            <div class="form-row">
               <div class="col-md-4">
                 <div class="md-form">
                    <div id="RadINDU" class="select-radio CBSIMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input DBfields" onclick="checkType();" value="New" id="TypNew" name="USERTYPE">
                          <label class="custom-control-label" for="TypNew">New</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input DBfields" onclick="checkType();"  value="Update" id="TypEdit" name="USERTYPE">
                           <label class="custom-control-label" for="TypEdit">Update</label>
                       </div>
                   </div>
                   <label class="mdb-main-label BTxt9">Type<span class="MndtryAstr">*</span></label>      
                </div>
             </div>
           </div>
           <div class="New" style="display:none">
          <div class="form-row">
        	<div class="col Btxt10">User Details</div>
          </div>
           <div class="form-row">
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="username" onchange="getUserName()" maxlength="18"  class="form-control DBfields" name="username">
                    <label for="username" class="">User Name<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="firstName"  maxlength="30" class="form-control DBfields NoSpecialChar" name="firstName">
                    <label for="firstName" class="">First Name<span class="MndtryAstr"></span></label>
                  </div>
               </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="lastName"  maxlength="30" class="form-control DBfields NoSpecialChar" name="lastName">
                    <label for="lastName" class="">Last Name<span class="MndtryAstr"></span></label>
                  </div>
               </div>
           </div>
            <div class="form-row">
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="email"  maxlength="30" class="form-control IsEmailFields DBfields" name="email">
                    <label for="email" class="">Email<span class="MndtryAstr"></span></label>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="password" id="password"  maxlength="30"  class="form-control  DBfields NoSpecialChar" name="password">
                    <label for="password" class="">Password<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="active"  maxlength="30" class="form-control  DBfields NoSpecialChar" name="active">
                    <label for="active" class="">Active<span class="MndtryAstr"></span></label>
                  </div>
               </div>
           </div>
              <div class="form-row">
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="timeZone"  maxlength="30" class="form-control  DBfields NoSpecialChar" name="timeZone">
				     <label for="timeZone" class="">Time Zone<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="Mobile"  maxlength="10"  class="form-control IsMobileFields IsNumberFields DBfields NoSpecialChar" name="Mobile">
                    <label for="Mobile" class="">Mobile Number<span class="MndtryAstr"></span></label>
                  </div>
               </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="PAN" data-validate="CUSTYPE|CONSTITUTION"  maxlength="10" class="form-control IsPanFields  DBfields NoSpecialChar" name="PAN">
				    <label for="PAN" class="">PAN<span class="MndtryAstr"></span></label>
                  </div>
               </div>
           </div>
            <div class="form-row">
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="GST"  maxlength="20"  class="form-control DBfields NoSpecialChar" name="GST">
                     <label for="GST" class="">GST<span class="MndtryAstr"></span></label>
                  </div>
               </div>
                <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="ADDRESS1"  maxlength="30" class="form-control  DBfields NoSpecialChar" name="ADDRESS1">
				     <label for="ADDRESS1" class="">Address Line 1<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="ADDRESS2"  maxlength="10"  class="form-control  DBfields NoSpecialChar" name="ADDRESS2">
                    <label for="ADDRESS2" class="">Address Line 2<span class="MndtryAstr"></span></label>
                  </div>
               </div>
           </div>
           <div class="form-row">
              <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="PINCODE" onchange="Pindetls(this,'STATE','CITY')"  maxlength="30" class="form-control IsPinFielde DBfields NoSpecialChar" name="PINCODE">
				    <label for="PINCODE" class="">Pin Code<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="CITY"  maxlength="30"  class="form-control  DBfields NoSpecialChar" name="CITY">
                    <label for="CITY" class="">City<span class="MndtryAstr"></span></label>
                  </div>
               </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="STATE"  maxlength="30" class="form-control  DBfields NoSpecialChar" name="STATE">
				    <label for="STATE" class="">State<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
           </div>
            <div class="form-row">
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="CODE"  maxlength="10"  class="form-control  DBfields NoSpecialChar" name="CODE">
                    <label for="CODE" class="">Code<span class="MndtryAstr"></span></label>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="ALTNAME"  maxlength="30" class="form-control  DBfields NoSpecialChar" name="ALTNAME">
				     <label for="ALTNAME" class="">Alternative Name<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
           </div>
           <div class="form-row">
        	<div class="col Btxt10">Employee Detail</div>
          </div>
           <div class="form-row">
              <div class="col-md-4">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary DBfields" id="organizationId" name="organizationId">
                  	   <option value="">Select</option>
  					   <option value="CFSL">CFSL</option>
 					   <option value="CSCF">CSCF</option>
				    </select>
				    <label class="mdb-main-label BTxt9">Organization Id<span class="MndtryAstr"></span></label>  
                  </div>
               </div> 
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="startDate"  maxlength="30"  class="form-control ISDatefield  DBfields NoSpecialChar" name="startDate">
                    <label for="startDate" class="">Start Date<span class="MndtryAstr"></span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
               </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="endDate"  maxlength="30" class="form-control  DBfields ISDatefield NoSpecialChar" name="endDate">
				    <label for="endDate" class="">End Date<span class="MndtryAstr"></span></label>
				    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
               </div> 
           </div>
           <div class="form-row">
              <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="employeeCode"  maxlength="30" class="form-control DBfields NoSpecialChar" name="employeeCode">
				    <label for="employeeCode" class="">Employee Code<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
            <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="departmentId"  maxlength="30" class="form-control DBfields NoSpecialChar" name="departmentId">
				    <label for="departmentId" class="">Department Id<span class="MndtryAstr"></span></label>
                  </div>
               </div>
           </div>
          </div>
          <div class="Update" style="display:none">
                    <div class="form-row">
                       <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallFEPDashLrgDataWP(this,'UserUpdateTable',{spname:'LSW_SDIRUSERGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'',brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0','USRUPDGRD');" id="BTNUSRUPDGRD" name="BTNUSRUPDGRD" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="UserUpdateTable">
                           </table>
                       </div>
                    </div>  
          </div>
           </br>
               <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="UserSave" class="btn btn-Syel waves-effect waves-light">Save</button>    
                  </div>
              </div>
        </form>
      </div>
    </div>
    
    
    
    
 <div class="modal fade" id="MobIModal" tabindex="-1" role="dialog" aria-labelledby="MobIModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">Mobile OTP Verification</div> 
   
   <a href="#"><img id="MOBIPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form>
        	</br>
        	</br>
           <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
           			  <input type="text" id="RequestId" hidden="hidden" class="form-control">
           			  <input type="text" id="HdnFieldId" hidden="hidden" class="form-control">
           			  <input type="text" id="RequestId" hidden="hidden" class="form-control">
           			  <input type="text" id="MobOTP" maxlength="10" class="form-control NoSpecialChar">
                      <label for="cin" class="">Enter the OTP<span class="MndtryAstr">*</span></label>
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
        <button type="button" id="MobIotp" onclick="CheckMobValidKyc('MobOTP','status','CADI_MOBNOIVERIFY',this,'','','')" class="btn btn-yel Btxt2">Confirm</button>
         <button type="button" id="MobIIotp" onclick="CheckMobValidKyc('MobOTP','status','CADI_MOBNOIIVERIFY',this,'','','')" class="btn btn-yel Btxt2">Confirm</button>
      </div>
    </div>
  </div>
  </div> 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <script type="text/javascript" src="ThemeproLO/UCV/CommonPage/script/diruser/LoadSubmit.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/UCV/CommonPage/script/diruser/Validation.js${DMY13}"></script>
     
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