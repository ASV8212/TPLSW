<!--Main row-->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
      <!-- Start -->
     <%--  <div class="row">
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
      </div> --%>
    <input type="text" style="display:none"  id="BRID" name="BRID" />
    <input type="text" style="display:none"  id="LEDID" name="LEDID" />
    <input type="text" style="display:none"  id="CUSNAME" name="CUSNAME" />
    <input type="text" style="display:none"  id="lNAMT" name="lNAMT" />
    <input type="text" style="display:none"  id="MOBNO" name="MOBNO" />
   
      <!--  card -->
      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
            </br>
            </br>
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="" id="BTNKYCDOC" name="BTNKYCDOC" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                     </table>
                  </div>
               </div>
               
               </br>
               <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="LSW_TLOANDETAILS|LODE" class="btn btn-Syel waves-effect waves-light FormSave">Save</button>   
                  </div>
              </div>
            </form>
         </div>
      </div>
      <!-- card -->

      </br>
   </div>
   <!-- Admin Panel -->
   <table style="display:none" id="GridTable2">
      <thead>
      	<th>LEAD_LEADID</th>
         <th>LEAD_CUSNAME</th>
         <th>LEAD_MOBNO</th>
         <th>LEAD_LONNO</th>
         <th>LEAD_SRC</th>
         <th>LEAD_AGE</th>
         <th>LEAD_ACTN</th>
         <th>LEAD_REMRK</th>
         <th>LEAD_SRCID</th>
         <th>LEAD_SRCTYP</th>
         <th>LEAD_BRID</th>
         <th>LEAD_ALLOCTO</th>
         <th>LEAD_PRCSID</th>
      </thead>
   </table>
   <div class="fixed-action-btn FileInitiation" id="draggable" style="bottom: 45px; right: 24px;display:none">
        <a type="button" id="LCR" class="btn-floating btn-large red">
            <i class="fa fa-plus"></i>
        </a></div>
	<a type="button" id="Popup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#basicExampleModal">
            <i class="fa fa-plus"></i>
        </a>
        <!-- Modal -->
<!-- Modal -->
<div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:840px" role="document">
    <div class="modal-content">
       <div class="modal-header">
        <div class="Btxt10">SELECT DETAILS</div>
   
   <a href="#">  <img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
        
      </div>  
      <div class="modal-body">
        
         <div class="">


    <!-- Card body -->
     <div class="">
            
        <form>          
            <input type="text" id="LBSI_PRCSID" hidden="hidden" name="LBSI_PRCSID" class=" LBSIDBfields ">
            <input type="text" id="LBSI_ACTIVITYID" hidden="hidden"  name="LBSI_ACTIVITYID" class=" LBSIDBfields ">
            <input type="text" id="LBSI_CREATEDBY" hidden="hidden"  name="LBSI_CREATEDBY" class=" LBSIDBfields ">
            <input type="text" id="LBSI_DTCREATED" hidden="hidden"  name="LBSI_DTCREATED" class=" LBSIDBfields ">
            <input type="text" id="LBSI_MODIFIEDBY" hidden="hidden"  name="LBSI_MODIFIEDBY" class=" LBSIDBfields ">
            <input type="text" id="LBSI_DTMODIFIED" hidden="hidden"  name="LBSI_DTMODIFIED" class=" LBSIDBfields ">
	        <input type="text" id="LBSI_BRID" hidden="hidden"  name="LBSI_BRID" class=" LBSIDBfields ">
			<input type="text" id="LBSI_SOURCEID" hidden="hidden"  name="LBSI_SOURCEID" class=" LBSIDBfields ">
			
			<input type="text" id="LBSI_LEADID" hidden="hidden"  name="LBSI_LEADID" class=" LBSIDBfields ">
			<input type="text" id="LBSI_CUSNAME" hidden="hidden"  name="LBSI_CUSNAME" class=" LBSIDBfields ">
			<input type="text" id="LBSI_MOBNO" hidden="hidden"  name="LBSI_MOBNO" class=" LBSIDBfields ">
			<input type="text" id="LBSI_LNAMT" hidden="hidden"  name="LBSI_LNAMT" class=" LBSIDBfields ">
          
           <div class="form-row">
           
            <div class="col">
                 
            <div class="md-form  MNST">
               <div class="select-radio INDIMNDRY "> 
                    <div class="custom-control custom-radio custom-control-inline">
                         <input type="radio" class="custom-control-input LBSIDBfields" onclick="CheckCusType();" value="Individual" id="Indvdl" name="LBSI_CUSTYPE">
                         <label class="custom-control-label" for="Indvdl">Individual</label>
                   </div>
                   <div class="custom-control custom-radio custom-control-inline">
                         <input type="radio" class="custom-control-input LBSIDBfields" onclick="CheckCusType();" value="Non-Individual" id="NonIndvdl" name="LBSI_CUSTYPE">
                         <label class="custom-control-label" for="NonIndvdl">Non-Individual</label>
                  </div>
              </div>
                  <label class="mdb-main-label BTxt9">Customer Type <span class="MndtryAstr">*</span></label>      
           </div>
                </div>
                 <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields LBSIMndtry " id="LBSI_PRODUCT" name="LBSI_PRODUCT">
                        <!-- <option value="" selected>--Select--</option>-->
                         <option value="HE01">Home Equity</option>
                  </select>
                        <label class="mdb-main-label BTxt9">Product <span class="MndtryAstr">*</span></label>
                </div>
                </div>
           </div>
           <div class="form-row">
                <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields LBSIMndtry DataToFld" disabled searchable="Search here.." data-change="LBSI_BRID"  id="LBSI_BRANCH" name="LBSI_BRANCH">
                        <!--  <option value="" selected>--Select--</option>
                              <option value="Perangudi">Perangudi</option>
                              <option value="Anakapalli">Anakapalli</option> -->
                        </select>
                        <label class="mdb-main-label BTxt9">Branch <span class="MndtryAstr">*</span></label>
                </div>
                </div> 
                <div class="col">
                <div class="md-form">
                        <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields LBSIMndtry" onchange="GETDROPDOWNVAL('Page')" id="LBSI_LONTYPE" name="LBSI_LONTYPE">
                        </select>
                        <label class="mdb-main-label BTxt9">Type of Loan <span class="MndtryAstr">*</span></label>
                </div>  
                </div>
           </div>
           <div class="form-row">
            <div class="col-md-6 SUBLON">
                 <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields  " id="LBSI_SUBLONTYPE" name="LBSI_SUBLONTYPE">
                        <option value="" selected>--Select--</option>
                        </select>
                        <label class="mdb-main-label BTxt9">Sub Loan Type <span class="MndtryAstr">*</span></label> 
                  </div>
               </div>
               <div class="col-md-6 PRIME">
                   <div class="md-form">
                         <input type="text" id="LBSI_PRIMLONID" maxlength="18" class="form-control NoSpecialChar LBSIDBfields" onblur="ChkPrimLoanID();GetOldPrcsid();" name="LBSI_PRIMLONID">
                         <input type="text" id="OLDPRCSID" class="form-control LBSIDBfields" hidden="hidden" name="OLDPRCSID">
                         <label for="LBSI_PRIMLONID" class="">Primary Loan ID/Application ID<span class="MndtryAstr">*</span></label>
                         <img src="ThemeproLO/Common/Images/search.png" style="display:none" onclick="GetExistApplcant();" class="FieldIcon"/>
                    </div>
               </div>
           </div>
           <div class="form-row">
             <div class="col-md-6">
                  <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields LBSIMndtry "    onchange="CheckDirect();CheckSource();"  id="LBSI_SOURCBY" name="LBSI_SOURCBY">
                        <option value="" selected>--Select--</option>
                        <option value="Connector">Connector</option>
                        <option value="DST">DST</option>
                        <option value="DSA">DSA</option>
                        <option value="Direct">Direct</option>
                        </select>
                  <label class="mdb-main-label BTxt9">Sourced By <span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-6 DIRDISB" style="display:none">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields DataToFld" searchable="Search here.." data-change="LBSI_SOURCEID"   id="LBSI_CONECTNAME" name="LBSI_CONECTNAME">
 
                        </select>
                     <label for="" class="mdb-main-label BTxt9">Source Name <span class="MndtryAstr">*</span></label>
                   
                   <!-- <div class="collapse" id="SourceNameCollapse">
                        <input type="text" id="LBSI_SOURCNAME" class="form-control LBSIDBfields ">
                        <label for="LBSI_SOURCNAME" class="">Source Name *</label>
                    </div> --> 
                 </div>
             </div>
           </div>
          <div class="form-row">
            <div class="col-md-6 CONS">
                <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields " id="LBSI_CONSTITUTION" name="LBSI_CONSTITUTION">
                        <option value="" selected>--Select--</option>
                             <!--<option value="Partnership firms">Partnership firms</option>
                              <option value="LLP">LLP</option>
                              <option value="HUF">HUF</option>
			      			  <option value="Private Ltd">Private Ltd</option>
			      			  <option value="Public Ltd">Public Ltd</option>
			      			  <option value="Proprietorship">Proprietorship</option>-->
                        </select>
                        <label class="mdb-main-label BTxt9">Constitution <span class="MndtryAstr">*</span></label>
                   </div>
               </div>
           </div> 
      <!--  <div class="form-row">
                <div class="col Grid">
                 <input type="button" style="display:none" class="DashTrg" onclick="FncallFEPDashLrgDataWP(this,'Table2',{spname:'LSW_SGetApplDetls',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'',MnuId:''},{0:$('#LBSI_PRIMLONID'),2:$('#OLDPRCSID')});" id="BTNTRIGAPPL" name="BTNTRIGAPPL" />
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                    </table>
                </div> 
            </div> -->
        </form>
      </div>
    </div>
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="InitWF" class="btn btn-yel Btxt2">Done</button>
      </div>
    </div>
  </div>
</div>

  <button type="button" style="display:none" id="InitWF1" class="btn btn-yel Btxt2">Done</button>
   <!-- END -->
</div>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/DashBoard/Script/MyApplication/ManageLead/Script/LoadSubmit/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/DashBoard/Script/MyApplication/ManageLead/Script/Validation/Validation.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>