 
 </br>
 </br>
<!--Copyright-->
<!--<div class="footer-copyright">
<div class="container-fluid">
©2019 Adani Capital </a>
</div>
</div>-->
<!--/.Copyright-->


<input type="text" id="APPINFOTXT" hidden="hidden" value="${AppInfo}" name="APPINFOTXT" class="LBSI">
<input type="text" id="HIDDENCOL" hidden="hidden" value="" name="HIDDENCOL" class="">

<div class="modal fade" id="KYCDocModal" tabindex="-1" role="dialog" aria-labelledby="KYCDocModalLabel" aria-hidden="true">
<div class="modal-dialog" style="max-width:500px" role="document">
 <div class="modal-content">
   <div class="modal-header">
     <div class="Btxt10">SELECT KYC DOCUMENT</div>
        <a href="#"><img id="KYCDOCCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
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
                        <select class="mdb-select md-form colorful-select dropdown-primary DOCU" onchange="CheckVeriType()" id="DOCU_KYC" name="DOCU_KYC">
                            <option value="" selected>Select</option>
                              <!-- <option value="Public Limited Company - Listed">PAN</option> -->
                              <option value="voter">Voter ID</option>
                              <option value="Aadhar">Aadhar</option> 
			                  <option value="dl">Driving License</option>
			                  <option value="Passport">Passport</option>
			                  <option value="Utility">Utility Bill Authentication</option>
                         </select>
                        <label class="mdb-main-label BTxt9">Document *</label>
                    </div>
                   </div>
                </div>
             </div>
			 <div class="form-row Utility1" style="display:none">
               <div class="col">
                 <div class="md-form">
                    <div id="gstRAD" class="select-radio UtilityMnd"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input" value="Electricity Bill" id="EB" onclick="GetServicePro()" name="KYCVeriType">
                          <label class="custom-control-label" for="EB">Electricity Bill</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input" value="Mobile Authentication with OTP"  onclick="GetServicePro()" id="MA" name="KYCVeriType">
                           <label class="custom-control-label" for="MA">Mobile Authentication with OTP</label>
                       </div>
					   <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input" value="Landline Authentication (BSNL/MTNL only)" onclick="GetServicePro()" id="LA" name="KYCVeriType">
                           <label class="custom-control-label" for="LA">Landline Authentication (BSNL/MTNL only)</label>
                       </div>
                   </div>
                   <label class="mdb-main-label BTxt9">Verification Type<span class="MndtryAstr">*</span></label>      
                 </div>
			  </div>
		   </div>
		    <div class="form-row UtilityPro" style="display:none">
			  <div class="col">
                   <div class="md-form">
                     <div class="" id="">
                        <select class="mdb-select md-form colorful-select dropdown-primary UtilityProMnd" onchange="GetServicePro1()" id="UBState" name="UBState">
                            <option value="" selected>Select</option>  
                         </select>
                        <label class="mdb-main-label BTxt9">State *</label>
                    </div>
                   </div>
                </div>
		    </div>
			<div class="form-row UtilityPro" style="display:none">
			  <div class="col">
                   <div class="md-form">
                     <div class="" id="">
                        <select class="mdb-select md-form colorful-select dropdown-primary UtilityProMnd" onchange="" id="ServicePro" name="ServicePro">
                            <option value="" selected>Select</option>
                         </select>
                        <label class="mdb-main-label BTxt9">Service Provider *</label>
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
        <button type="button" id="KYCDoc" class="btn btn-yel Btxt2">Confirm</button>
      </div>
    </div>
  </div>
</div>


<a type="button" id="Popup3" class="btn btn-floating DedupePopup btn-large red" style="display:none" data-toggle="modal" data-target="#DEDUPEPOPUP">
 <i class="fa fa-plus"></i></a>                         
<div class="modal fade" id="DEDUPEPOPUP" tabindex="-1" role="dialog" aria-labelledby="DEDUPEPOPUPLabel" aria-hidden="true">
   <div class="modal-dialog" style="max-width:1000px" role="document">
     <div class="modal-content">
        <div class="modal-header">
         <div class="Btxt8">Dedupe Details</div> 
             <a href="#"><img id="DEDUPEPOPCLOSE" class="close DedupeClose" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
          </div>  
         <div class="modal-body">
          <div class="">
    <!-- Card body -->
            <div class="">
             <form>
        	   </br>
               <div class="Btxt10">Personal Info</div>
               </br>
                   <div class="form-row">
                       <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'DedupeBIFTable',{spname:'LSW_SGETDEDUOEDETL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#DMY6').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7,9','DEDUPEBIFGRD');" id="BTNDEDUPEIGRD" name="BTNDEDUPEIGRD" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="DedupeBIFTable">
                           </table>
                        </div>
                    </div> 
                </br>
                <div class="Btxt10">Contact Details</div>
                </br>
                   <div class="form-row">
                      <div class="col">
                          <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'DedupeCIFTable',{spname:'LSW_SGETDEDUOECONDETL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#DMY6').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||2','DEDUPECIFGRD');" id="BTNDEDUPEIIGRD" name="BTNDEDUPEIIGRD" />
                          <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="DedupeCIFTable">
                          </table>
                       </div>
                    </div> 
                 </br>
                   <div class="Btxt10">Address Details</div>
                  </br>
                    <div class="form-row">
                       <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'DedupeAIFTable',{spname:'LSW_SGETDEDUOEADDRDETL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#DMY6').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','DEDUPEAIFGRD');" id="BTNDEDUPEIIIGRD" name="BTNDEDUPEIIIGRD" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="DedupeAIFTable">
                           </table>
                       </div>
                    </div>   
                      </br>
                   <div class="Btxt10">Agreement Details</div>
                  </br>
                    <div class="form-row">
                       <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'DedupeAGIFTable',{spname:'LSW_SGETDEDUPEAGREEDETL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#DMY6').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},$('#HIDDENCOL').val(),'DEDUPEAGREEGRD');" id="BTNDEDUPEIVGRD" name="BTNDEDUPEIVGRD" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="DedupeAGIFTable">
                           </table>
                       </div>
                    </div>    
					<div class="Btxt10">Internal Dedupe</div>
                  </br>
				  <!--<div class="col-md-3">
                      <span class="Ntxt4">Search</span>
                          <input type="text" id="SearchLSWITable" name="SearchLSWITable" class="Ntxt3 DataNormal" title="">
                  </div>-->
                    <div class="form-row">
                       <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallMyAppl(this,'LSWITable',{spname:'LSW_SGETINTCUSDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#DMY6').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','INTERDEDUPE');" id="BTNLSWINTER" name="BTNLSWINTER" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="LSWITable">
                           </table>
                       </div>
                    </div>
                   <div class="Btxt10">RBI Terrorist Dedupe</div>
                  </br>
                    <div class="form-row">
                       <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallMyAppl(this,'RBITable',{spname:'LSW_SRBITERDEDUPE',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#DMY6').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','RBIDEDUPE');" id="BTNRBIDEDUPE" name="BTNRBIDEDUPE" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="RBITable">
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
        <button type="button" data-form="" class="btn btn-yel DedupeSmt Btxt2">Confirm</button>
      </div>
    </div>
  </div>
  </div>

 <a type="button" id="AUDITPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#AUDITModal">
 <i class="fa fa-plus"></i></a>
    
  
<div class="modal fade" id="AUDITModal" tabindex="-1" role="dialog" aria-labelledby="AUDITModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1200px" role="document">
    <div class="modal-content">
       <div class="modal-header">
          <div class="Btxt10"></div> 
          <a href="#"><img id="AUDITPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div> 
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class=""> 
         <form >
        	</br>
        	</br>
             <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
                    <button type="button" style="display:none" id="AuditGRD" onclick="FncallDocChkLst(this,'AuditTable',{spname:'LSW_SAUDITTRAIL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','AUDITTRAIL');"  ></button>
					<table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="AuditTable">
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
      </div>
    </div>
  </div>
  </div> 
  <input type="text" id="SaveField"  name="SaveField" hidden="hidden"  class="form-control" value="">
  <!-- REMARKS STARTS -->
   <a type="button" id="REMARKSPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#REMARKSModal">
 <i class="fa fa-plus"></i></a>
 
 <div class="modal fade" id="REMARKSModal" tabindex="-1" role="dialog" aria-labelledby="REMARKSModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">REMARKS</div> 
   
   <a href="#"><img id="REMARKSPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div> 
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class=""> 
         <form >
        	</br>
        	</br>
           <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
                        <div class="form-group">
                          <label for="POPUPRemarks"></label></br>
                      <textarea class="form-control btxt24" rows="5" id="POPUPRemarks" name="POPUPRemarks" data-to="" style="height: 130px;width:502px;"></textarea>
                      
                        </div>
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
       <button type="button" id="RemarksCONFIRM" onclick = "CLOSEREMARKCONFIRM(this)" class="btn btn-yel Rmrkh">Confirm</button>
      </div>
    </div>
  </div>
  </div> 
  
  <!-- REMARKS END -->
  
  
   <!-- REMARKS STARTS -->
   <a type="button" id="PageREMARKSPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#PageREMARKSModal">
 <i class="fa fa-plus"></i></a>
 
 <div class="modal fade" id="PageREMARKSModal" tabindex="-1" role="dialog" aria-labelledby="PageREMARKSModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">REMARKS</div> 
   
   <a href="#"><img id="PAGEREMARKSPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div> 
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class=""> 
         <form >
        	</br>
        	</br>
           <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
                        <div class="form-group">
                          <label for="POPUPRemarks"></label></br>
                      <textarea class="form-control btxt24" rows="5" disabled id="PagePOPUPRemarks" name="PagePOPUPRemarks" data-to="" style="height: 130px;width:502px;"></textarea>
                      
                        </div>
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
       <!--<button type="button" id="RemarksClose" onclick = "RemarksClose()" class="btn btn-yel Rmrkh">Confirm</button>-->
      </div>
    </div>
  </div>
  </div> 
  
  <!-- REMARKS END -->
  
  
  
  <!--REJECT REMARKS STARTS -->
   <a type="button" id="REJECTREMARKSPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#REJECTREMARKSModal">
 <i class="fa fa-plus"></i></a>
 
 <div class="modal fade" id="REJECTREMARKSModal" tabindex="-1" role="dialog" aria-labelledby="REJECTREMARKSModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">REJECT REMARKS</div> 
   
   <a href="#"><img id="REJECTREMARKSPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div> 
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class=""> 
         <form >
        	</br>
        	</br>
           <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
                        <div class="form-group">
                          <label for="POPUPREJECTRemarks"></label></br>
                      <textarea class="form-control btxt24" rows="5" id="POPUPREJECTRemarks" name="POPUPREJECTRemarks" data-to="" style="height: 130px;width:502px;"></textarea>
                      
                        </div>
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
       <button type="button" id="REJECTRemarksCONFIRM"  class="btn btn-yel Rmrkh">Confirm</button>
      </div>
    </div>
  </div>
  </div> 
  
  <!--REJECT REMARKS END -->
  
   <!-- Unique No PopUp STARTS -->
   <a type="button" id="UniqNoPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#UniqNoModal">
 <i class="fa fa-plus"></i></a>
 
 <div class="modal fade" id="UniqNoModal" tabindex="-1" role="dialog" aria-labelledby="UniqNoModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">UNIQUE NUMBER</div> 
   
   <a href="#"><img id="UniqNoModalCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div> 
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class=""> 
         <form >
        	</br>
        	</br>
           <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
                        <div class="form-group">
                              <label for="POPUPRemarks"></label></br>
							  <input type="text" id="Consis" hidden="hidden" name="Consis" value="Individual" class="form-control NoSpecialChar">
							    <input type="text" id="CusT" hidden="hidden" name="CusT" value="Individual" class="form-control NoSpecialChar">
                              <textarea class="form-control btxt24" data-validate="CusT|Consis" rows="5" id="UniqNumber" name="UniqNumber" data-to="" style="height: 130px;width:502px;"></textarea>
                        </div>
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
       <button type="button" id="UniqNoClose" onclick = "UniqNoConf(this)" class="btn btn-yel Rmrkh">Confirm</button>
      </div>
    </div>
  </div>
  </div> 
  
  <!-- Unique No PopUp END -->
  
  <!-- RAISE QUERY START -->
   <a type="button" id="RAISEQUERY" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#RAISEQUERYModal">
      <i class="fa fa-plus"></i>
  </a>
<div class="modal fade RAISE" id="RAISEQUERYModal" tabindex="-1" role="dialog" aria-labelledby="RAISEQUERYModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1000px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">RAISE A QUERY</div> 
   <a href="#">  <img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
      </div>  
      <div class="modal-body"> 
   <div class="">
    <!-- Card body -->
     <div class="">  
       <form>
          <input type="text" id="MNGQ_PRCSID" hidden="hidden"  name="MNGQ_PRCSID" class="form-control MNGODBfields">
          <input type="text" id="MNGQ_FRMUSRID" hidden="hidden"  name="MNGQ_FRMUSRID" class="form-control MNGODBfields">
          <input type="text" id="MNGQ_TOUSRID" hidden="hidden"  name="MNGQ_TOUSRID" class="form-control MNGODBfields">
          <input type="text" id="MNGQ_TOUSRNAME" hidden="hidden"  name="MNGQ_TOUSRNAME" class="form-control MNGODBfields">
          <input type="text" id="MNGQ_TOUSRROLE" hidden="hidden"  name="MNGQ_TOUSRROLE" class="form-control MNGODBfields">
          <input type="text" id="MNGQ_APPLNNAME" hidden="hidden"   name="MNGQ_APPLNNAME" class="form-control MNGODBfields"> 
		  <input type="text" id="MNGQ_ATTCHURL" hidden="hidden"   name="MNGQ_ATTCHURL" class="form-control MNGODBfields">  
		  <input type="text" id="MNGQ_UNIQID" hidden="hidden"   name="MNGQ_UNIQID" class="form-control MNGODBfields"> 
		  <input type="text" id="MNGQ_CATGRY" hidden="hidden"   name="MNGQ_CATGRY" class="form-control MNGODBfields"> 
          <!-- <input type="text" id="MNGQ_QURYNAME" hidden="hidden"   name="MNGQ_QURYNAME" class="form-control MNGODBfields"> -->
          <div class="form-row">
                <div class="col-md-6">
           			<div class="md-form">
           			<select  class="mdb-select md-form colorful-select dropdown-primary  MNGOMndtry MNGODBfields" searchable="Search here.."    id="MNGQ_TOUSRIDI" name="MNGQ_TOUSRIDI">
                        <option value="" selected>--Select--</option>
                    </select>
                        <label class="mdb-main-label BTxt9">Query To<span class="MndtryAstr">*</span></label>
           			</div>
           		</div>
           		 <div class="col-md-6  RASHW" style="display:none">
           			<div class="md-form">
           			<select  class="mdb-select md-form colorful-select dropdown-primary  MNGODBfields"    id="MNGQ_SECTNID" name="MNGQ_SECTNID">
                        <option value="" selected>--Select--</option>
                         <option value="S01" >KYC</option>
                          <option value="S02">Banking</option>
                           <option class="NGECL" value="S03">Property</option>
                           <option class="NGECL" value="S04">Financials</option>
                            <option value="S05">CAM and Approval</option>
                             <option value="S06">Documents</option>
                              <option  class="NGECL" value="S07">Reports</option> 
                              <option value="S08">Others</option> 
                       </select>
                        <label class="mdb-main-label BTxt9">Query Type<span class="MndtryAstr">*</span></label>
           			</div>
           		</div>
           </div>
            <div class="form-row RASHW" style="display:none">
            <div class="col-md-6">
           			<div class="md-form">
           			<select  class="mdb-select md-form colorful-select dropdown-primary MNGODBfields"   onchange="QUERYAPPLICNTS();"  id="MNGQ_TYP" name="MNGQ_TYP">
                        <option value="" selected>--Select--</option>
                         <option value="Application" >Application</option>
                          <option value="Applicant">Applicant</option>
                       </select>
                       <label class="mdb-main-label BTxt9">Query For<span class="MndtryAstr">*</span></label>
           			</div>
           	 </div>
           	 
           	    <div class="col-md-6 QRYDETAILS"  style="display:none">
           			<div class="md-form  ">
           			<select  class="mdb-select md-form colorful-select dropdown-primary MNGODBfields"    data-change="MNGQ_APPLNNAME"  id="MNGQ_APPLNO" name="MNGQ_APPLNO">
                        <option value="" selected>--Select--</option>
                        
                       </select>
                       <label class="mdb-main-label BTxt9">Applicants<span class="MndtryAstr">*</span></label>
           			</div>
           	   </div>
			   
			
				 <div class="col-md-6">
                  <div class="md-form">
                    <input type="text" id="MNGQ_QURYNAME" maxlength="25"  name="MNGQ_QURYNAME" class="form-control  MNGODBfields ">
                    <label for="MNGQ_QURYNAME" class="">Query Details<span class="MndtryAstr">*</span></label>
                  </div>
                </div>  
				  
                 
           	 
            </div>
            <div class="OPSQRY">
             <div class="form-row">
             <div class="col-md-12">
               <div class="md-form">
                    <label for="FIOV_UPLOAD" class="active">Query Attachment<span class="MndtryAstr"></span></label>
               </div>
               </br>
	 <div class="md-form FIDU">
<table>
 <tr>
 <td>
<div id="MNGQ_ATTCHURLIUPLOAD"  class="file-field">
<a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlrRAISEQRY(MNGQ_ATTCHURLI,'MNGQ_ATTCHURLI','QUERYATTCH')" class="MNGQ_ATTCHURLI"  >
    </a>
    <input type="text" id="MNGQ_ATTCHURLI" hidden="hidden" data-Validate="MNGQ_ATTCHURLI"  name="MNGQ_ATTCHURLI" class=" form-control File MNGODBfields">
  <span class="name">Click Here to Upload</span> 
  </div> 
</td>
 <div class="MNGQ_ATTCHURLI" style="display:none">
<img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded1" title="UPLOAD" onclick="ReuploadFile(MNGQ_ATTCHURLI);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('MNGQ_ATTCHURLI')" class="rounded1" alt="Cinque Terre" width="35" height="25"> 
</div>
</tr>
</table>
</div>
</div> 
</div>
  <div class="modal-header">
       <div class="Btxt10">Remarks *</div>   
      </div>  
   <div class="form-row">
     <div class="col-md-12">
         <div class="md-form">
           	  <textarea class="form-control btxt24 MNGODBfields" maxlength="1000" id="MNGQ_DESC" name="MNGQ_DESC" Placeholder="Type Here.."  style="height: 130px;width:450px;"></textarea>
          </div>
      </div>
  </div>
  </div>
            <div class="modal-footer align-middle">              
                <button type="button" id="RAISEQRYDONE" onclick="RAISEQUERY(this)" class="btn btn-Syel waves-effect waves-light ">Raise Query</button>
           </div>
         </form>
        </div>
     </div>
      </div>   
      </div>
    </div>
  </div>    
    
    
      <!-- RAISE QUERY END --> 
	  
	 <!--SEND BACK REMARKS STARTS -->
   <a type="button" id="SENDBACKREMARKSPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#SENDBACKREMARKSModal">
 <i class="fa fa-plus"></i></a>
 
 <div class="modal fade" id="SENDBACKREMARKSModal" tabindex="-1" role="dialog" aria-labelledby="SENDBACKREMARKSModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">STAGE REVERSAL REMARKS</div> 
   
   <a href="#"><img id="SENDBACKREMARKSPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div> 
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class=""> 
         <form >
        	</br>
        	<input type="text" id="SENDBCKACTNM" hidden="hidden"  name="SENDBCKACTNM" class="">
        	</br>
        	<div class="form-row">
           		 <div class="col">
           	     <div class="md-form">
                    <select class="mdb-select md-form colorful-select APPR dropdown-primary" id="SENDBCKACT" name="SENDBCKACT">
                    
                    
				   <option value="" disabled>Select</option>
                  
				</select>
				<label class="mdb-main-label BTxt9">SEND TO<span class="MndtryAstr"></span></label>
                  </div>
           		 </div>
           		  </div>
           <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
                        <div class="form-group">
                          <label for="POPUPSENDBACKRemarks"></label></br>
                      <textarea class="form-control btxt24" rows="5" id="POPUPSENDBACKRemarks" name="POPUPSENDBACKRemarks" data-to="" style="height: 130px;width:502px;"></textarea>
                      
                        </div>
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
       <button type="button" id="SENDBACKRemarksCONFIRM" onclick = "" class="btn btn-yel Rmrkh">Confirm</button>
      </div>
    </div>
  </div>
  </div> 
  
  <!--SEND BACK REMARKS END -->
  
  <!--Reopen REMARKS STARTS -->
   <a type="button" id="ReopenREMARKSPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#ReopenREMARKSModal">
 <i class="fa fa-plus"></i></a>
 
 <div class="modal fade" id="ReopenREMARKSModal" tabindex="-1" role="dialog" aria-labelledby="ReopenREMARKSModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">RE-OPEN REMARKS</div> 
   
   <a href="#"><img id="ReopenREMARKSPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div> 
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class=""> 
         <form >
        	</br>
        	</br>
			<div class="form-row" style="display:none;">
           		 <div class="col">
				 <div class="md-form">
                     <div class="" id="">
                        <select class="mdb-select md-form colorful-select dropdown-primary" id="ReopenPOPUPStage" name="ReopenPOPUPStage">
                         </select>
                        <label class="mdb-main-label BTxt9">Stage *</label>
                    </div>
                   </div>
           		 </div>
           </div>
           <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
                        <div class="form-group">
                          <label for="POPUPRemarks"></label></br>
                      <textarea class="form-control btxt24" rows="5" id="ReopenPOPUPRemarks" name="ReopenPOPUPRemarks" data-to="" style="height: 130px;width:502px;"></textarea>
                      
                        </div>
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
       <button type="button" id="ReopenRemarksCONFIRM" onclick = "" class="btn btn-yel Rmrkh">Confirm</button>
      </div>
    </div>
  </div>
  </div> 
  
  <!--Reopen REMARKS END -->
  
  <a type="button" id="LoadCustyp" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#LoadCustypPopupModal">
            <i class="fa fa-plus"></i>
        </a>
  <div class="modal fade" id="LoadCustypPopupModal" tabindex="-1" role="dialog" aria-labelledby="LoadCustypPopupModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">SELECT DETAILS</div> 
   
   <a href="#">  <img id="LoadPopCls" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
        
      </div>  
      <div class="modal-body">
        
         <div class="">
    <!-- Card body -->
     <div class="">
            
         <form >
        	</br>
        	</br>
           
           <div class="form-row">    
         <input type="text" id="NextPageID" hidden="hidden" name="NextPageID" class="form-control">      
         <div class="col">
             <div class="md-form">
               <div class="select-radio LDCOMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" value="Individual" onclick="CheckCusType1();" id="CoAppIndi1" name="CoAppType1">
                        <label class="custom-control-label" for="CoAppIndi1">Individual</label>
                     </div>
                     <div class="custom-control custom-radio custom-control-inline">
                         <input type="radio" class="custom-control-input" value="Non-Individual"  onclick="CheckCusType1();" id="CoAppNonIndi1" name="CoAppType1">
                         <label class="custom-control-label" for="CoAppNonIndi1">Non-Individual</label>
                     </div>
                 </div>
                  <label class="mdb-main-label BTxt9 CLABEL">Co-Applicant Type<span class="MndtryAstr">*</span></label>      
             </div>
           </div>	
           </div>
           <div class="form-row Constitution" style="display:none">
           		<div class="col">
           			<div class="md-form">
           			<select  class="mdb-select md-form colorful-select dropdown-primary" id="Constitution1" name="Constitution1" onchange="">
                        <option value="" selected>--Select--</option>
                              
                        	</select>
                        <label class="mdb-main-label BTxt9">Constitution <span class="MndtryAstr">*</span></label>
           			</div>
           		</div>
           </div>
        </form>
      </div>
    </div>
   </div>
      <div class="modal-footer align-middle">
        <button type="button" id="LoadCusAdd" class="btn btn-yel Btxt2">Done</button>
      </div>
    </div>
  </div>
 </div>
    <script>
        $("#navigation").load("components/navigation.html");
    </script>

    <!-- Bootstrap dropdown -->
    <script type="text/javascript" src="ThemeproLO/Common/FEP/js/popper.min.js${DMY13}"></script>

    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="ThemeproLO/Common/FEP/js/bootstrap.min.js${DMY13}"></script>

    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="ThemeproLO/Common/FEP/js/mdb.min.js${DMY13}"></script>
    
    <!-- Customizer -->
    <script type="text/javascript" src="ThemeproLO/Common/FEP/js/customizer.min.js${DMY13}"></script>
 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> -->
 
 <script src="ThemeproLO/Common/scripts/UI/jquery.xml2json.js${DMY13}" type="text/javascript"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/loadjson_V_19.js${DMY13}"></script>
 
 <script>
	/******Flow Handler********/
	var StartProcess = "";
	var InProgress = "";
	var EndProcess = "";
	/******Flow Handler********/
 //$("#TxtCpmName").html(GetCurrentUserFName());
 
 
        // Data Picker Initialization
       

$(function(){
     // $(".datepicker").datepicker();
	  // $('.datepicker').pickadate({editable:true,selectYears:true,selectMonths:true,format: 'dd-mm-yyyy'});
	   
	   var $input = $('.datepicker').pickadate({
		    //editable: 'true',
			format: 'dd/mm/yyyy',
			selectYears: 200,
			selectMonths: true
			/*onSelect: function() {
		        $(this).change();
		       // alert($(this));
		    }*/
		   /* onClose: function() {
		        //$('.datepicker').focus();
		        $(this).prev().prev().focus();
		    }*/
		})
		.on("change", function() {
		   //alert($(this).val());
		   $(this).prev().prev().focus();
		   $(this).prev().prev().val($(this).val());
		   
		});

		/*var picker = $input.pickadate('picker');
		$input.on('click', function(event) {
		    if (picker.get('open')) {
		        picker.close();
		    } else {
		        picker.open();
		    }                        
		    event.stopPropagation();
		});*/
	   
});

// Formsave fn Start

$(document).on('change', '[type=text]', function() {   
    $("#SaveField").val('1')
});

$(document).on('mouseleave', '.mdb-select', function()  {   
    $("#SaveField").val('1')
});

$(document).on('click', '[type=radio]', function() {   
    $("#SaveField").val('1')
});

$(document).on('click', '.FormSave', function () {
	$("#SaveField").val('0')
});
$(document).on('click', '.StageReversal', function () {
	$("#SENDBACKREMARKSPopup").click();
	
});
//Re-Open Remark Start
$(document).on('click', '.ReopenRemsarksPopup', function () {
	$("#ReopenREMARKSPopup").click();
	if($("#DMY10").val().split('|')[0].split('~')[0]=="Y"){
		$('#ReopenPOPUPStage').empty()
		$("#ReopenPOPUPStage").closest(".form-row").show();
		var USRDRPDWN = UI_getdata($("#LogUsr").val(), "", "", "", "", "LSW_SGETREOPENSTGDRPDN");
		$("#ReopenPOPUPStage").material_select("destroy");
		$('#ReopenPOPUPStage').append($(USRDRPDWN).find('RESULT').html());
		$('#ReopenPOPUPStage').material_select();
	}
});
//Re-Open Remark End
$(document).on('click', '#SENDBACKRemarksCONFIRM', function () {
	var OP="";
	if($("#POPUPSENDBACKRemarks").val()==""){
		alert("Kindly fill the Remarks");
		return;
	}
	var Token=$(window.parent.parent.document).find("#Prvnt").val();
	$("#SENDBCKACTNM").val($("#SENDBCKACT").find('option:selected').text());
	var xml = "<UsrID>"+$("#LogUsr").val()+"</UsrID><PrcsID>"+$("#PrcsID").val()+"</PrcsID><ActvID>"+$("#ActvID").val()+"</ActvID><NXTACTDEFID>"+$("#SENDBCKACT").val()+"</NXTACTDEFID><NXTACTDEFNAME>"+$("#SENDBCKACTNM").val()+"</NXTACTDEFNAME><REMARK>"+$("#POPUPSENDBACKRemarks").val()+"</REMARK><APPLNNO>"+$("#DMY7").val().split('|')[7]+"</APPLNNO>"
	
	$.ajax({
		url: "/TPLSW/UI_GetData",
		data: { param1: xml, param2: $("#DMY5").val().split('|')[2], param3: "", param4: "", param5: "",spname: "LSW_SPushDatatoTCRTBL",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
	       async: true,
	       //dataType: "json",
		    dataType: "text",
	       type: 'POST',
	       complete: function OnSuccess_submit(xml1) {
	    	   	OP=xml1.responseText;
	    	   	var pattern = /var_/;
	    	   	var exists = pattern.test($(OP).find("WFVAR").text());
	    	   	if($("#DMY5").val().split('|')[2] == "Waiver"){
	    	   	if(exists) {
					   WFComplete ($("#ActvID").val(),$(OP).find("WFVAR").text(),"");
					   UI_getdata($("#PrcsID").val(), "", "", "", "", "LSW_SUPDTPRCSDATA");
					   
					   var CurntACTVTY=$(OP).find("INITWFVAR").text();
					   WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
					   if(WFACTVINIT != "Success")
						   {
						   alert("File Assignment Failed");
						   return
						   }
					   else{
						   alert("File Assigned");
						   $(location).attr('href',window.location.origin + "/TPLSW/MyApplication");
					   }
					}
					else{
						alert($(OP).find("WFVAR").text());
						return
					}
	    	   	}
	    	   	else if($("#DMY5").val().split('|')[2] == "OPS"||$("#DMY5").val().split('|')[2] == "OPSQD"){
	    	   		if($(OP).find("WFVAR").text()=="File Assigned"){
	    	   			var parser = new DOMParser();
	    	   			var xmlDoc= parser.parseFromString(OP,"text/xml");
	    	   			if(xmlDoc.getElementsByTagName('INITWFVAR').length > 0)
	    	   			{
							
	    	   				var CurntACTVTY=$(OP).find("INITWFVAR").text();
	 					   WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
	 					   if(WFACTVINIT != "Success")
	 						   {
	 						   alert("File Assignment Failed");
	 						  return
	 						   }
	 					   else{
	 						   alert("File Assigned");
	 						  $(location).attr('href',window.location.origin + "/TPLSW/MyApplication");
	 					   }
	    	   			}
	    	   			else{
	    	   				alert($(OP).find("WFVAR").text());
							$(location).attr('href',window.location.origin + "/TPLSW/MyApplication");
	    	   				return
	    	   			}
	    	   			
	    	   		}
	    	   		else{
	    	   			alert($(OP).find("WFVAR").text());
	    	   			return
	    	   		}
	    	   	}
	    	   	else if($("#DMY5").val().split('|')[2] == "BranchOPS"){
	    	   		if($(OP).find("WFVAR").text()=="File Assigned"){
						
	    	   			var CurntACTVTY=$(OP).find("INITWFVAR").text();
						   WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
						   if(WFACTVINIT != "Success")
							   {
							   alert("File Assignment Failed");
							   return
							   }
						   else{
							   alert("File Assigned");
							   $(location).attr('href',window.location.origin + "/TPLSW/MyApplication");
						   }	
	    	   		}
	    	   		else{
	    	   			alert("File Assignment Failed");
	    	   			return
	    	   		}
	    	   	}
	       },
	       error: function (xml1)
	       {
	    	   alert("Send Back Submission Failed");
	    	   return;
	       }
	});
});

//Re-Open Remark Start
$(document).on('click', '#ReopenRemarksCONFIRM', function () {
	if(($("#DMY10").val().split('|')[0].split('~')[0]=="Y")&&($("#ReopenPOPUPStage").val()=="" || $("#ReopenPOPUPStage").val()==null))
	{
		alert("Kindly choose the Stage")
		return;
	}
	if($("#ReopenPOPUPRemarks").val()==""){
		alert("Kindly fill the Remark")
		return;
	}
	var CnfrmMSG = "File will be Re-Open at "
	if($("#DMY10").val().split('|')[0].split('~')[0]=="Y"){
		CnfrmMSG = CnfrmMSG+$("#ReopenPOPUPStage option:selected").text();
	}
	else{
		CnfrmMSG = CnfrmMSG+$("#DMY10").val().split('|')[0].split('~')[1];
	}
	var x = confirm(CnfrmMSG);
	if(x == true){
	var OP="";
    var Token=$(window.parent.parent.document).find("#Prvnt").val();
    var PrcsID = $("#PrcsID").val();
    var remrk = $("#ReopenPOPUPRemarks").val();
    var usrid = $("#LogUsr").val()
   $.ajax({

       url: "/TPLSW/UI_GetData",
       data: { param1: PrcsID, param2: remrk, param3: usrid, param4: "", param5: "",spname: "LSW_SREOPENREJCTFL",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
       async: true,
       //dataType: "json",
	    dataType: "text",
       type: 'POST',
       complete: function OnSuccess_submit(xml1) {
		   if($(xml1.responseText).find("RESULT").text()=="SUCCESS"){
    	   	OP=xml1.responseText;
			//ajaxindicatorstop();
			var WFACTVINIT = "";
			var CurntACTVTY="";
			var ApprlFlg = ""
			if($("#DMY10").val().split('|')[0].split('~')[0]=="Y"){
				if($("#ReopenPOPUPStage").val()=="RCMDI"){
				ApprlFlg = "Y"
				var _routop = UI_getdata($("#PrcsID").val()+'|'+$("#ActvID").val(), "DEVIATIONS", $("#LogUsr").val(), "", "", "LSW_SDRRCMDREOPEN");
				var pattern = /var_/;
				var exists = pattern.test($(_routop).find("WFVAR").text());
				if(exists) {
					//CurntACTVTY=$(_routop).find("WFVAR").text();
					CurntACTVTY=$("#ReopenPOPUPStage").val()
				}
				else{
					UI_getdata($("#ActvID").val(),$("#PrcsID").val(), "", "", "", "LSW_SACTVTTERMREJ");
					alert($(_routop).find("WFVAR").text());
					return;
				}
				}
				else{
					CurntACTVTY=$("#ReopenPOPUPStage").val()
				}
			}
			else{
				CurntACTVTY=$("#DMY10").val().split('|')[0].split('~')[0]
			}
			WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
			if(WFACTVINIT=="Success"){
			alert("File Assigned");
			if(ApprlFlg=="Y"){
				var _actid = UI_getdata($("#PrcsID").val(),$("#LogUsr").val(), "", "", "", "LSW_SGETACTIDFRPN");
				var _pattern = /_/;
				var _exists = _pattern.test($(_actid).find("ACTID").text());
				if(_exists) {
				$(location).attr('href',window.location.origin + "/TPLSW/Appr?PrcsID="+$("#PrcsID").val()+"&ActvID="+$(_actid).find("ACTID").text()+"&PrMs9=FormPageTab5&PrMs10=FormMainTab7");
				}
				else{
					alert($(_actid).find("ACTID").text());
					return;
				}
			}
			else{
			$(location).attr('href',window.location.origin + "/TPLSW/MyApplication") 
			}
			}
			else{
				UI_getdata($("#ActvID").val(),$("#PrcsID").val(), "", "", "", "LSW_SACTVTTERMREJ");
				alert("File Assignment Failed, Kindly retry");
			}
	   }
	   else if($(xml1.responseText).find("RESULT").text()=="ALREADYREOPEN"){
		   alert("File Already Re-Opened");
		   $(location).attr('href',window.location.origin + "/TPLSW/MyApplication") ;
	   }
	   else{
		   UI_getdata($("#ActvID").val(),$("#PrcsID").val(), "", "", "", "LSW_SACTVTTERMREJ");
		   alert("Re-open Failed, Kindly retry");
	   }
    },
	
    error: function (xml1)
    {
		//alertify.alert(LoadFrmXML("V0126"));
			window.alert(LoadFrmXML("V0126"));
		OP="Fail";
		//ajaxindicatorstop();
    }
   });
	}
});
//Re-Open Remark End
// End

        
        
        
        

        // Material Select Initialization
        $(document).ready(function() {
			
			
			if($("#DMY7").val().split("|")[8]=="HE02")
			{
				$(".NGECL").attr('disabled',true)
			}
			else
			{
			    $(".NGECL").attr('disabled',false)
			}
		
			
					
        	 $('.mdb-select').material_select('destroy'); 
            $('.mdb-select').material_select();
			
		/*	$(".datepicker").click(function() {
        $(this).datepicker().datepicker( "show" )
    });*/
		
    getBaseInfo("CBSIAPPINFO","APIF");
    
			$("body").removeClass("fixed-sn");
			
			if($("#NoofIns").length >= 1)
			{
				if($("#NoofIns").text() == 0)
				{
				$("#NoofIns").parent().hide();
				$("#TotAmt").parent().hide();
				}
				else
				{
						$("#NoofIns").parent().show();
				$("#TotAmt").parent().show();
				}
			}
			
				$(".fixed-action-btn ul").hide();
				
				
								
				 $(document).on("click", "#mycalendar .monthly-event-list .item-has-event .listed-event" , function() {

											

					var IOP1 = window.location.origin;

					var Mnuid='30j';

					var FormColor='DarkBlue';

					var FormName="Due Date - "+$(this).parent('div').attr("data-number")+ '-' +$(".monthly-header-title-date").text().replace(" ","-");

					var FormAction='Calender';

					var PrMs1='';

					

					var RedirectURL = IOP1+"/TPLSW/GetNextNavAction?MnuID="+Mnuid+"&Action=View&FormColor="+FormColor+"&FormName="+FormName+"&FormAction="+FormAction+"&PrMs1="+PrMs1+"&PrMs2="+$(this).parent('div').attr("data-number")+ '-' +$(".monthly-header-title-date").text().replace(" ","-");

					$(location).attr('href',RedirectURL);
			});

				 $('.AddKYC').on('click', function() {
					 $("#DOCU_KYC").val('');
					 $('#DOCU_KYC').material_select("destroy");	
					 $('#DOCU_KYC').material_select();
				 });
				 
				 
				 
					$('#AudTrl').on('click', function() {
						
						       $("#AUDITPopup").click();
				               $("#AuditGRD").trigger('click')		
							})	
							
					$('#KYCDoc').on('click', function() {
				  		if($("#DOCU_KYC").val()!=""){
				  	
				  			if($("." + $("#DOCU_KYC").val()).is(':visible'))
				  				{				  			
				  			alert("Document already added");
				  				}
				  			else
				  				{	
                                 /*if($("#DOCU_KYC").val()=="Aadhar")
								   {
                                     $("[data-FetchValidateArea=AADHAR]").val('XXXXXXXX')
									 $("[data-FetchValidateArea=AADHAR]").next().addClass('active');
								   }*/
                                 if($("#DOCU_KYC").val()=="Utility") 
								 {
									 var VeriType=$("input[name='KYCVeriType']:checked"). val();
									 if(VeriType=="Electricity Bill")
									 {
									   if($("#ServicePro").val()=="" || $("#UBState").val()=="")
									    {
										   alert("Kindly enter the Mandatory Fields"); 
										   return false;
									    }
									 }
									   $("[data-FetchValidateArea=VERIFYTYPE]").val(VeriType);
									   $("[data-FetchValidateArea=PROVIDER]").val($("#ServicePro").val());
									   $("[data-FetchValidateArea=STATE]").val($("#UBState").val());
								 }
								   
				  				$("." + $("#DOCU_KYC").val()).show();
								$("." + $("#DOCU_KYC").val()+'upload').hide();
				  				$("." + $("#DOCU_KYC").val()+'view').hide();
				  				$(".OtherKYCInfo").show();
				  				$("#KYCDOCCLOSE").click();
				  				}
				  		}
				  		else
				  			{
				  			alert("Select a document");
				  			}
				  		
					});
					// For Grid Upload Start
					 $(document).on("click", ".GridDocUpd" , function() {
					// $(document).find('.GridDocUpd').on('click', function() {
				
						$("#" + $(this).attr("attr-Upd")).click();				
				  		
					});
					// For Grid Upload End
					
	$('.HyperControls a').on('click', function(e) {
						
						if($(this).attr("href")=="#")
						{
						        e.preventDefault();
						}
							})		

	
	// Disable Page Top Panel Menus
	
	if ($("#FormPage1").length > 0)
		{     
		
		$(".ULHdrLS").find("li a").removeClass("Btxt16Inactive");
		$(".ULHdrLS").find("li a").removeClass("Btxt16");
		$(".ULHdrLS").find("li a").addClass("Btxt16Inactive");
		}
	else
		{
		
		$(".ULHdrLS").find('li').first().removeClass("Btxt16Inactive");
		$(".ULHdrLS").find('li').first().addClass("Btxt16");
	     
		}

					

// Loader Start

// Verification Start
/*
$($(".KYCInfo").next()).find(".BTNVerify").on('click', function() {

	
	$("#"+$(this).attr("data-validatearia")).val("Verified")
	
$(this).removeClass("btn-yelInplain");
$(this).addClass("btn-GrnInplain");

$(this).text("Verified")	
	
});*/
// Verification End

$(document).on('mouseenter', '.mdb-select', function() {


       $(this).attr("title",$(this).find('select').val());

});

 
$(document).on('mouseenter', '[type=text]', function() {

    $(this).attr("title",$(this).val());

});


$(document).on('mouseleave', '[type=text]', function() {

      $(this).attr("title","");

});

$(document).on('mouseleave', '.mdb-select', function() {

         $(this).attr("title","");

});


$(document).on('change', '[type=text]', function() {
    
    $(this).addClass("DataNormal");
    $(this).removeClass("DataInValid");

});

$(document).on('blur', '[type=text]', function() {   
    $(this).addClass("DataNormal");
    $(this).removeClass("DataInValid");
});

$(document).on('click', '#REJECTRemarksCONFIRM', function() {   
    //alert("Reached");
    var OP="";
    var Token=$(window.parent.parent.document).find("#Prvnt").val();
    var PrcsID = $("#PrcsID").val();
    var remrk = $("#POPUPREJECTRemarks").val();
    var usrid = $("#LogUsr").val()
	if(remrk==""){
		alert("Kindly fill the Remark");
		return;
	}
   $.ajax({

       url: "/TPLSW/UI_GetData",
       data: { param1: PrcsID, param2: remrk, param3: usrid, param4: $("#DMY5").val().split('|')[2], param5: "",spname: "LSW_SUPDATEREJCTRMRK",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
       async: true,
       //dataType: "json",
	    dataType: "text",
       type: 'POST',
       complete: function OnSuccess_submit(xml1) {
    	   	OP=xml1.responseText;
			//ajaxindicatorstop();
			if($("#DMY5").val().split('|')[2]=="PreLogin" || $("#DMY5").val().split('|')[2]=="Login" || $("#DMY5").val().split('|')[2]=="SendToCredit")
			{
				WFComplete ($("#ActvID").val(),"var_status=Cancel","");
			}
    },
	
    error: function (xml1)
    {
		//alertify.alert(LoadFrmXML("V0126"));
			window.alert(LoadFrmXML("V0126"));
		OP="Fail";
		//ajaxindicatorstop();
    }
                          
       
   });     
  // ajaxindicatorstop();
   return OP;
    $("#REJECTREMARKSPOPCLOSE").click();
});



/*
$(document).on('change', '.mdb-select', function() {

	 $(this).addClass("DataNormal");
	 $(this).removeClass("DataInValid");

});*/

	  $(document).ajaxStart(function(){
		//  if (!window.onload)
			//{
		  $(".loader").show();
			//}
	  });
	  $(document).ajaxStop(function(){
		  //if (!window.onload)
			//{
		  $(".loader").fadeOut("slow");
			//}
	  });

// Loader End


// POPUP CLOSE START

$(".modal").attr("data-backdrop","static");

// POPUP CLOSE END

// Page Body Start

if($(".ApplInfo").text() == "")
	{
	$(".ApplInfo").remove();
	$(".ApplBody").removeClass("col-md-8");
	$(".ApplBody").addClass("col-md-12");
	}	

// Page Body End

// Form Page Tab Hide Start
if(window.location.search != "" && getUrlParam("VERTICAL") == "")
	{
if ($("#PrMs9").val() == "")
	{
	$(".FormPageTab").parent().parent().remove();
	}
	}
//Form Page Tab Hide End



				 
        });

        // Sidenav Initialization
        $(".button-collapse").sideNav();

		$('#draggable').draggable();
		
        // Tooltips Initialization
        $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        })
		
	      $(function() {

	    	
if(document.readyState === 'complete') {
    //write code here
	//$(".spinner-grow").hide();
	$(".loader").fadeOut("slow");
}

if(document.readyState === 'interactive') {
    //write code here
	//$(".spinner-grow").hide();
	$(".loader").fadeOut("slow");
}

//Auto Complete Off START

$("form").attr('autocomplete', 'off'); 	

//Auto Complete Off END
	
// Readonly DSBL Fields START
//$(".DSVLBL").attr("readonly",true);

$(document).on("keypress",".DSVLBL", function(e) {
    e.preventDefault();
});

$(".FormSave").click(function(){
	$(".loader1").show();
    //$(this).attr("disabled","disabled");
	const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
	wait(5*1000).then(() => $(".loader1").fadeOut("slow")); 
	
	/******Flow Handler********/
/*	StartProcess = function() {
		var r = $.Deferred();
		$(".loader1").show();
		return r;
};
	EndProcess = function() {
		$(".loader1").fadeOut("slow");
};
	StartProcess().done( InProgress($(this)) );
	InProgress($(this)).done( EndProcess() );
	StartProcess = "";
	InProgress = "";
	EndProcess = "";*/
	/******Flow Handler********/
});

$(".STANDALONEDELAY").click(function(){
	$(".loader1").show();
    //$(this).attr("disabled","disabled");
	const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
	wait(5*1000).then(() => $(".loader1").fadeOut("slow")); 
});

//$(".DSVLBL").attr('tabindex','-1');

// ReadOnly DSBL Fields ENd 

//DISABLE BASED ON CONDITION START 
/*
if($("#DMY7").val().split("|")[0]=="Registered Mortgage")
		{
          
		  if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab5")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab6"))
		  {
			  
		  }
		  else if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab7")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab7"))
		  {
			  
		  }
		  else if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab5")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab7"))
		  {
			  
		  }
		  else if((($(".FormMainTab1 li.active").attr("id")=="FormPageTab1") || ($(".FormMainTab1 li.active").attr("id")=="FormPageTab2"))&&($(".FormMainTabs li.active").attr("id")=="FormMainTab8"))
		  {
			  
		  }
		  else
		  {
           // DSVLBLALL()
			DSVLBLALLWS()
		  }
        }
if($("#DMY7").val().split("|")[0]=="Registered Mortgage")
	{
	
	$("#POPUPREJECTRemarks").attr('disabled',false)
	}
*/
/*if($("#DMY7").val().split("|")[0]=="Registered Mortgage"||$("#DMY7").val().split("|")[0]=="Existing Loans"||$("#DMY7").val().split("|")[0]=="Re-Punch" )
		{
          
		  if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab5")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab7"))
		  {
			  
		  }
		// else if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab1")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab8")&&($(".FormPageSubTab li.active").attr("id")=="OTC"||$(".FormPageSubTab li.active").attr("id")=="PDD"))
		//  {
			  
		//  }
		else if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab1")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab8"))
		 {
			  
		  }
		  else if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab7")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab7"))
		  {
			  
		  }
		  else
		  {
           // DSVLBLALL()
			DSVLBLALLWS()
		  }
        }*/
		
	if($("#DMY7").val().split('|')[8]=="HE02")
		 {
          if($(".FormMainTabs li.active").attr("id") =="FormMainTab7" && $(".FormMainTab1 li.active").attr("id")=="FormPageTab9")
			 {
				  if($("#DMY5").val().split('|')[2]=="SendToCredit")
				 {
					
				 } 
				 else
				 {
					  DSVLBLALL('')
				 }
			 }
		 }	
		

if(($("#DMY5").val().split("|")[1]=="Yes")||$("#PrMs1").val()=="View")
		{
		  if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab1")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab5"))
		  {
			  
		  }	
		  else if($("#PrMs3").val().indexOf('heading')!=-1)
		  {
			  
		  }
		  else if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab4")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab8"))
		  {
				 
		  }
		   else if($("#DMY7").val().split('|')[8]=="HE02")
		 {
			 if($(".FormMainTabs li.active").attr("id") =="FormMainTab7" && $(".FormMainTab1 li.active").attr("id")=="FormPageTab8")
			 {
				 if($("#PrMs1").val()=="View")
				 {
					 DSVLBLALL('')
				 }
				 else if($("#DMY5").val().split('|')[2]=="BranchOPS")
				 {
					 
				 }
				 else
				 {
					 DSVLBLALL('')
				 }
			 }
			 
			 else
			 {
				 DSVLBLALL('')
			 }
		 }
		/*else if($(".FormMainTabs li.active").attr("id") =="FormMainTab7" && $(".FormMainTab1 li.active").attr("id")=="FormPageTab9" && $("#DMY5").val().split('|')[2]=="BranchOPS")
			 {
				
			 }*/
      else
	     {
          DSVLBLALL('')
         }
		}
		//Re-Open Remark Start
			   if(($("#DMY10").val().split("|")[0]!="")&&($("#PrMs1").val()=="View")){
				   $(".ReopenRemsarksPopup").removeAttr("disabled");
				   $(".ReopenRemsarksPopup").show();
				   $("#ReopenPOPUPRemarks").removeAttr("disabled");
			   }
				//Re-Open Remark End  
//	ENABLEALL()	
//HNDL RPT SCREEN START
if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab1")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab5")&&($("#PrMs1").val()=="View"))
		  {
			  if($("#DMY7").val().split("|")[3]=="SFA") 
			{
			  DSBVLTECH()
			}  
			
		   if($("#DMY7").val().split("|")[3]=="STP") 
			 {
			  DSVLBLALL('')
			 } 
		  }	
//HNDL RPT SCREEN END		
////HNDL OPS VALIDATION
if($("#DMY5").val().split('|')[2]!="")
	{
		var activityname=$("#DMY5").val().split('|')[2]
	}
	else
	{
      var activityname = GetActivityName();
	}
	
if((activityname == "BranchOPS" || activityname == "CreditOPS" || activityname == "DisbAppr"||activityname=="OTC"||activityname=="PDD" ||  activityname == "OPSQD")){
	if((activityname == "BranchOPS" || activityname == "CreditOPS" || activityname == "DisbAppr" ||  activityname == "OPSQD")&&($('.FormPageSubTab .active').attr("id")!="OTC" && $('.FormPageSubTab .active').attr("id")!="PDD")){
		var op = UI_getdata($("#PrcsID").val(), $("#ActvID").val(), $(".FormPageMultiTab li.active a div").text(), activityname, $(".FormPageSubTab").find("li.active").attr("id"), "LSW_SDISBSTAGECHECK1");
		if($(op).find("RESULT").text()=="Y"){
			DSVLBLALL('WA');
			DIBDMBTN();
		}
		else if($(op).find("RESULT").text()=="YA")
			{
				if(activityname=="OPS")
				{
					$("#CompleteTranche").show();
					$("#SaveBR").hide();
				}
				DSVLBLALLWS();
			}
		
	}
	else if(activityname == "CreditOPS" && ($('.FormPageSubTab .active').attr("id")=="OTC" || $('.FormPageSubTab .active').attr("id")=="PDD"))
			{
				var op = UI_getdata($("#PrcsID").val(), $("#ActvID").val(), $(".FormPageMultiTab li.active a div").text(), activityname, $(".FormPageSubTab").find("li.active").attr("id"), "LSW_SDISBSTAGECHECK1");
			if($(op).find("RESULT").text()=="Y"){
				DSVLBLALL('WA');
			}
			else if($(op).find("RESULT").text()=="YA")
			{
				DSVLBLALLWS();
			}
			}
	else if((activityname=="OTC")&&($('.FormPageSubTab .active').attr("id")!="OTC")){
		DSVLBLALL('WA');
	}
	else if((activityname=="PDD")&&($('.FormPageSubTab .active').attr("id")!="PDD")){
		DSVLBLALL('WA');
	}
	if($(".FormPageTab li.active").text()=="Repayment"){
		var op = UI_getdata($("#PrcsID").val(),$("#ActvID").val(),"Tranche 1","","Repayment","LSW_SDISBSTAGECHECK2")
		if($(op).find("RESULT").text()=="Y"){
			DSVLBLALL('');
		}
	}
}

function DIBDMBTN()
{
	if($("#DBMM_ACTUDISBAMT").is(":disabled")==true)
	{
      $(".GenDM").show()
      $(".DMG").hide();
    }
	else
	{
	  $(".GenDM").hide()
      $(".DMG").show();
	}
}
////HNDL OPS VALIDATION
////DISABLE BASED ON CONDITION END 

/* Popup Scroll Issue Start*/
$('body').on('hidden.bs.modal', function () {
    if($('.modal.show').length > 0)
    {
        $('body').addClass('modal-open');
    }
	else{
		$('body').css("padding-right","0px");
		
	}
});
/* Popup Scroll Issue End*/

//// Side Navbar Start

$("#slide-out").attr("style","transform: translateX(-100%)");

//// Side NavBar End

	
 window.onunload = function() {

   // AppliLogout();
	
}
	 })	
		
    </script>
	
	<script>
	
/*	 if($("#slide-out").length == 1)
 {
    jQuery(jQuery(document).find("#slide-out").find("ul").find('li').find('a')[0]).trigger("click");	
	$($("#slide-out").find("ul").find('li').find('ul').find('li')[0]).click();
 }*/
	
function goBack() {
  window.history.back();
}


function GridControlDetailAUDITTRAIL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,
	   "bSort" : false,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        
        
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
   	  
		  
		    { targets: 0,"width": "20%", "render": function ( data, type, row, meta ) {                            
				
				 var rowno = meta.row;	 
					var HTML =	'<span id="ACTIVITY'+rowno+'"  style="" name="ACTIVITY'+rowno+'" maxlength="40" class=" Btxt10 DSVLBL ">';			 
					HTML = HTML + data + '</span>'; 
						 
					var htmldata = $(HTML);
					
						return htmldata[0].outerHTML;   		
						
			         } 
					 },
		    { targets: 1,"width": "20%", "render": function ( data, type, row, meta ) {                            
				
				 var rowno = meta.row;	 
					var HTML =	'<span  id="PERFORMEDBY'+rowno+'"  style="" name="PERFORMEDBY'+rowno+'" maxlength="40" class="Btxt10 DSVLBL ">';			 
					HTML = HTML + data + '</span>'; 
						 
					var htmldata = $(HTML);
					
						return htmldata[0].outerHTML;   		
						
			         } 
					 },
		    { targets: 2,"width": "20%", "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span id="STARTDT'+rowno+'"  style="" name="STARTDT'+rowno+'" maxlength="40" class=" Btxt10 DSVLBL ">';			 
				HTML = HTML + data + '</span>'; 
					 
				var htmldata = $(HTML);
				
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
	   { targets: 3,"width": "20%", "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span id="ENDDT'+rowno+'"  style="" name="ENDDT'+rowno+'" maxlength="40" class=" Btxt10 DSVLBL ">';			 
				HTML = HTML + data + '</span>'; 
					 
				var htmldata = $(HTML);
					

					return htmldata[0].outerHTML;   		
					
		         } 
				 },
	   { targets: 5,"width": "5%", "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	
			 var	HTML="";
			if(data != ""){
			HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUPDSBLFTR(this)" class="" width="35" height="25">';
			}
			else{
			HTML =  '<span id="" style="display:none;"><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUPDSBLFTR(this)" class="" width="35" height="25">';	
			}
			HTML =  HTML + '<input type="text" style="display:none;" id="REMRK'+rowno+'"  name="REMRK'+rowno+'" disabled class="form-control DSVLBL form-control     "></span>';		 
			var htmldata = $(HTML);
			$(htmldata).find('[name=REMRK'+rowno+']').attr("value",data);
			return htmldata[0].outerHTML;
		 } 
	 }
		

    	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        }); 
}

function CheckVeriType()
{
	var KycType=$("#DOCU_KYC").val()
	
	if(KycType=="Utility")
	{
		$(".UtilityMnd").addClass('Mndtry');
		$(".Utility1").show();
	}
	else
	{
	  $(".UtilityMnd").removeClass('Mndtry');
      $(".Utility1").hide();
	}
}

function GetServicePro()
{
  var VeriType=$("input[name='KYCVeriType']:checked"). val();	
  
  if(VeriType=="Electricity Bill")
  {
	  $(".UtilityPro").show();
	  $(".UtilityProMnd").addClass('Mndtry');
  }
  else
  {
	 $(".UtilityPro").hide(); 
	 $(".UtilityProMnd").removeClass('Mndtry');
  }
}

function GetServicePro1()
{
	
  var ServicePro=UI_getdata("Provider",$("#UBState").val(),"","","","LSW_SGetProdVal")	
  $("#ServicePro").append($(ServicePro).find("RESULT").html());
  $("#ServicePro").material_select();
}

//ServicePro

 $(document).ready(function() {
if($(".FormMainTabs li.active").attr("id")=="FormMainTab1")
{
	if($(".FormMainTab1 li.active").attr("id")=="FormPageTab2")
	{
		if($("#MaleGen").is(':enabled')==true)
		{
         if($("#COBI_CUSTYPE").val()=="")
	      {
			  $(".CLABEL").text('Co-Applicant Type*')
		    $("#LoadCustyp").click()
	      }
		}
	}
	else if($(".FormMainTab1 li.active").attr("id")=="FormPageTab3")
	{
	  if($("#MaleGen").is(':enabled')==true)
	   {
		if($("#GRBI_CUSTYPE").val()=="")
	     {
			 $(".CLABEL").text('Guarantor Type*')
		   $("#LoadCustyp").click()
	     }
	   }
	}	
	
	var State=UI_getdata("UBState","","","","","LSW_SGetProdVal")
	
	$("#UBState").append($(State).find("RESULT").html())
	$("#UBState").material_select();
}
 });

</script>

<div>
<iframe src="" id="DocView" style="display:none" height="315" width="560"  frameborder="0">
</iframe>
</div>

 <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
  
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>    
<script type="text/javascript" src="ThemeproLO/ManageQuery/Script/MnagQuery/Raiseqryvalidation.js${DMY13}"></script>   
 