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
	<input type="text" id="LEAD_PRCSID" hidden="hidden" name="LEAD_PRCSID" class="form-control LEADDBfields">
    <input type="text" id="LEAD_ACTIVITYID" hidden="hidden" name="LEAD_ACTIVITYID" class="form-control LEADDBfields">
    <input type="text" id="LEAD_CREATEDBY" hidden="hidden" name="LEAD_CREATEDBY" class="form-control LEADDBfields"> 
    <input type="text" id="LEAD_DTCREATED" hidden="hidden" name="LEAD_DTCREATED" class="form-control LEADDBfields">
    <input type="text" id="LEAD_MODIFIEDBY" hidden="hidden" name="LEAD_MODIFIEDBY" class="form-control LEADDBfields">
    <input type="text" id="LEAD_DTMODIFIED" hidden="hidden" name="LEAD_DTMODIFIED" class="form-control LEADDBfields">
   <input type="text" id="LEAD_LPDSGRID" hidden="hidden" name="LEAD_LPDSGRID" class="form-control LEADDBfields">
      <!--  card -->
      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
            </br>
            </br>
               <div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LEAD_LEADID" disabled maxlength="30"  class="form-control LEADDBfields LEADMndtry" name="LEAD_LEADID">
					 <label for ="LEAD_LEADID" class="mdb-main-label BTxt9">Lead ID <span class="MndtryAstr">*</span></label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LEAD_FIRSTNAME"  maxlength="30"   class="form-control LEADDBfields LEADMndtry " name="LEAD_FIRSTNAME " >
                      <label for ="LEAD_FIRSTNAME" class="mdb-main-label BTxt9">First name <span class="MndtryAstr">*</span></label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="SLEAD_SECONDNAME"  maxlength="30"  class="form-control LEADDBfields LEADMndtry" name="LEAD_SECONDNAME ">
                      <label for ="SLEAD_SECONDNAME" class="mdb-main-label BTxt9"> Second name<span class="MndtryAstr">*</span></label>
                  </div>
				</div>
			    </div>
			    <div class="form-row">
				 <div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LEAD_TYPEOFEMPLOYMENT"  maxlength="30"   class="form-control LEADDBfields LEADMndtry" name="LEAD_TYPEOFEMPLOYMENT">
                     <label for="LEAD_TYPEOFEMPLOYMENT"class="mdb-main-label BTxt9">Type of employment <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LEAD_AMOUNTREQUIREMENT"  maxlength="30"  onchange="CheckAmount();" disabled class="form-control IsCURCommaFields LEADDBfields NoSpecialChar LEADDBfields LEADMndtry" name="LEAD_AMOUNTREQUIREMENT">
                     <label for ="LEAD_TYPEOFEMPLOYMENT"class="mdb-main-label BTxt9">Amount requirement <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
				</div>
				</div>
			    <div class="form-row">
				 <div class="col-md-4">
					<div class="md-form">
                    <input type="text" id="LEAD_DOB" name="LEAD_DOB" onblur="AgeVal(this,LEAD_AGE);" maxlength="10" class="form-control form-control LEADDBfields IsNumberFields NoSpecialChar INDM ISDatefield  LEADDBfields LEADMndtry">
                    <label for="LEAD_DOB" class="">DOB<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                     
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LEAD_AGE"  maxlength="30"  class="form-control LEADDBfields LEADMndtry" name="LEAD_AGE">
                      <label for="LEAD_TYPEOFEMPLOYMENT" class="mdb-main-label BTxt9 AGE"> Age <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LEAD_MOBNO"  maxlength="10" class="form-control IsNumberFields LEADDBfields LEADMndtry" name="LEAD_MOBNO">
                      <label for ="LEAD_MOBNO" class="mdb-main-label BTxt9 ">Mobileno <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				</div>
				<div class="form-row">
				 <div class="col-md-4">
					<div class="md-form">
                    <input type="text" id="LEAD_EMAILID"  maxlength="30" class="form-control IsEmailFields LEADMndtry" name="LEAD_EMAILID">
                     <label for ="LEAD_EMAILID"class="mdb-main-label BTxt9">Email id <span class="MndtryAstr ">*</span> </label>
					 
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LEAD_ADDRESSLINE1"  maxlength="30"  class="form-control LEADDBfields LEADMndtry" name="LEAD_ADDRESSLINE1">
                      <label for ="LEAD_ADDRESSLINE1"class="mdb-main-label BTxt9">Address line1 <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LEAD_ADDRESSLINE2"  maxlength="30" class="form-control LEADDBfields LEADMndtry" name="LEAD_ADDRESSLINE2">
                      <label for="LEAD_ADDRESSLINE2" class="mdb-main-label BTxt9">Address line2 <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				</div>
				<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
                    <input type="text" id="LEAD_ADDRESSLINE3"  maxlength="30"  class="form-control LEADDBfields LEADMndtry" name="LEAD_ADDRESSLINE3">
                     <label for ="LEAD_ADDRESSLINE3"class="mdb-main-label BTxt9">Address line3 <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LEAD_PINCODE"  maxlength="30" onchange= "fnOnFocusOut(this);Pindetls(this,'LEAD_STATE','LEAD_CITY')" class="form-control IsNumberFields IsPinFielde LEADDBfields LEADMndtry" name="LEAD_PINCODE">
                      <label for ="LEAD_ADDRESSLINE3"class="mdb-main-label BTxt9">Pincode <span class="MndtryAstr">*</span> </label>  
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LEAD_CITY"  maxlength="30"  class="form-control LEADDBfields LEADMndtry" name="LEAD_CITY">
                      <label for ="LEAD_CITY" class="mdb-main-label BTxt9">City <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				</div>
				<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LEAD_STATE"  maxlength="30" class="form-control LEADDBfields LEADMndtry" name="LEAD_STATE">
                      <label for="LEAD_CITY" class="mdb-main-label BTxt9">State <span class="MndtryAstr">*</span> </label> 
                   </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LEAD_PAN" data-validate="LDIN_CUSTYPE|LDIN_CONSTITUTION" maxlength="30" class="form-control IsPanFields LEADDBfields LEADMndtry" name="LEAD_PAN">
                      <label for ="LEAD_PAN"class="mdb-main-label BTxt9">Pan <span class="MndtryAstr">*</span> </label>
					  
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LEAD_LOANUSAGE"  maxlength="30"  class="form-control LEADDBfields LEADMndtry" name="LEAD_LOANUSAGE">
                      <label for="LEAD_LOANUSAGE"class="mdb-main-label BTxt9">Loan usage <span class="MndtryAstr">*</span> </label> 
                   </div>
				</div>
				</div>
				<!--<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LODE_REQLONAMT"  maxlength="30"  onchange="CheckAmount();" class="form-control IsCURCommaFields LODEDBfields NoSpecialChar LODEMndtry" name="LODE_REQLONAMT">
                     <label for="LODE_REQLONAMT" class="">slkc <span class="MndtryAstr">*</span></label>
                  </div>
				</div>
			   </div>-->
			   <label class="mdb-main-label BTxt9">I hereby authorise representative to contact for further proceedings </label> 
			   <div class="form-row">
			   <div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LEAD_STATUS"  maxlength="30"  class="form-control LEADDBfields LEADMndtry" name="LEAD_STATUS">
                      <label for="LEAD_STATUS" class="mdb-main-label BTxt9">Lead status <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				 <div class="col-md-4">
					<div class="md-form">
                      <input type="text" id="DOB" name="DOB" onblur="" maxlength="10" class="form-control form-control LODEDBfields IsNumberFields NoSpecialChar  ISDatefield  LEADMndtry">
                    <label for="DOB" class="">Next comm date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
				</div>
			   </div>
			  <div>
			  <div class="form-row">
			  <div class="form-row PARTNERFARM" style="display">
                           <div class="col Btxt10">LIST OF PARTNERS / DIRECTOR / SHAREHOLDER</div>
                        </div>
			  </div>
			    <div class="form-row PARTNERFARM" style="">						
                            <div class="col">
                               <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'LPDSTable',{spname:'LSW_SLEADSEC',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','LPDSGRID');" id="BTNLOADLEADLPDSGRD" name="BTNLOADLEADLPDSGRD" />
                               <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display LEADDBfields DataGrid" name="LPDSTable" id="LPDSTable">
                               </table>
                           </div> 
                         </div>
						  <div class="form-row PARTNERFARM" style="">
                             <div class="col-md-4">
                                 <div class="md-form">
                                      <div class="HyperControls"> 
                                           <a class="Btxt4 AddLPDS ADDBTN  LEADDBfields" name="AddLPDSTable"  data-table="LPDSTable" href="#">+ Add</a>
                                      </div>
                                 </div>
                             </div>
                         </div>
						 
						   
                        </div> 
			   </div>
               <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Submit" data-aria="LSW_TLEADCR|LEAD" class="btn btn-Syel waves-effect waves-light FormSave">Submit</button>   
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
   
    <table style="display:none" id="GridLPDSTable">
      <thead>
      	 <th>LPSE_NAME</th>
         <th>LPSE_SHAREHOLD</th>
         <th>LPSE_BRNIOWNER</th>
         <th>LPSE_LONSTRU</th>
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
   
   <a href="#">  <img id="LeadPopupClose" style="display:none" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
        
      </div>  
      <div class="modal-body">
        
         <div class="">


    <!-- Card body -->
     <div class="">
            
        <form>          
            
	        <input type="text" id="LDIN_BRID" hidden="hidden"  name="LDIN_BRID" class=" LDINDBfields ">
			<input type="text" id="LDIN_SOURCEID" hidden="hidden"  name="LDIN_SOURCEID" class=" LDINDBfields ">
			
			<input type="text" id="LDIN_LEADID" hidden="hidden"  name="LDIN_LEADID" class=" LDINDBfields ">
			
          
		  <input type="text" id="LDIN_PRDID" hidden="hidden"  name="LDIN_PRDID" class=" LDINDBfields ">
		  
		  
           <div class="form-row">
           
            <div class="col">
             
            <div class="md-form  MNST">
               <div class="select-radio INDIMNDRY "> 
                    <div class="custom-control custom-radio custom-control-inline">
                         <input type="radio" class="custom-control-input LDINDBfields" onclick="CheckCusType();" value="Individual" id="Indvdl" name="LDIN_CUSTYPE">
                         <label class="custom-control-label" for="Indvdl">Individual</label>
                   </div>
                   <div class="custom-control custom-radio custom-control-inline">
                         <input type="radio" class="custom-control-input LDINDBfields" onclick="CheckCusType();" value="Non-Individual" id="NonIndvdl" name="LDIN_CUSTYPE">
                         <label class="custom-control-label" for="NonIndvdl">Non-Individual</label>
                  </div>
              </div>
                  <label class="mdb-main-label BTxt9">Customer Type <span class="MndtryAstr">*</span></label>      
           </div>
                </div>
                 <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LDINDBfields LDINMndtry " onchange="getPurposeofLoan()" searchable="Search here.."  id="LDIN_PRODUCT" name="LDIN_PRODUCT">
                        <!-- <option value="" selected>--Select--</option>
                         <option value="HE01">Home Equity</option>-->
                        </select>
                        <label class="mdb-main-label BTxt9">Vertical <span class="MndtryAstr">*</span></label>
                </div>
                </div>
           </div>
           <div class="form-row">
                <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LDINDBfields LDINMndtry DataToFld" onchange searchable="Search here.." data-change="LDIN_BRID"  id="LDIN_BRANCH" name="LDIN_BRANCH">
                         <!--<option value="" selected>--Select--</option>
                              <option value="Perangudi">Perangudi</option>
                              <option value="Anakapalli">Anakapalli</option> -->
                        </select>
                        <label class="mdb-main-label BTxt9">Branch <span class="MndtryAstr">*</span></label>
                </div>
                </div> 
                <div class="col">
                <div class="md-form">
                        <select class="mdb-select md-form colorful-select dropdown-primary LDINDBfields PROIIDROP LDINMndtry" onchange="GETDROPDOWNVAL('Page')" searchable="Search here.."  id="LDIN_LONTYPE" name="LDIN_LONTYPE">
                        </select>
                        <label class="mdb-main-label BTxt9">Type of Loan <span class="MndtryAstr">*</span></label>
                </div>  
                </div>
           </div>
           <div class="form-row">
		   <div class="col-md-6">
                  <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LDINDBfields PROIIDROP LDINMndtry "  onchange="CheckDirect();CheckSource();"   id="LDIN_SOURCBY" name="LDIN_SOURCBY">
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
                  <select class="mdb-select md-form colorful-select dropdown-primary LDINDBfields DataToFld" searchable="Search here.." data-change="LDIN_SOURCEID"   id="LDIN_CONECTNAME" name="LDIN_CONECTNAME">
                  <option value="" selected>--Select--</option>
                        </select>
                     <label for="" class="mdb-main-label BTxt9">Source Name <span class="MndtryAstr">*</span></label>
                   
                   
                 </div>
             </div>
			   </div>
              <!-- <div class="col-md-6 PRIME">
                   <div class="md-form">
                         <input type="text" id="LDIN_PRIMLONID" maxlength="18" class="form-control NoSpecialChar LDINDBfields" onblur="ChkPrimLoanID();GetOldPrcsid();" name="LDIN_PRIMLONID">
                         <input type="text" id="OLDPRCSID" class="form-control LDINDBfields" hidden="hidden" name="OLDPRCSID">
                         <label for="LDIN_PRIMLONID" class="">Primary Loan ID/Application ID<span class="MndtryAstr">*</span></label>
                         <img src="ThemeproLO/Common/Images/search.png" style="display:none" onclick="GetExistApplcant();" class="FieldIcon"/>
                    </div>
               </div>
           </div>  -->
		   <div class="form-row">
			<div class="col-md-6 PRIME">
                   <div class="md-form">
                         <input type="text" id="LDIN_PRIMLONID" maxlength="18" class="form-control NoSpecialChar LDINDBfields" onblur="ChkPrimLoanID();GetOldPrcsid();" name="LDIN_PRIMLONID">
                         <input type="text" id="OLDPRCSID" class="form-control LDINDBfields" hidden="hidden" name="OLDPRCSID">
                         <label for="LDIN_PRIMLONID" class="">Primary Loan ID/Application ID<span class="MndtryAstr">*</span></label>
                         <img src="ThemeproLO/Common/Images/search.png" style="display:none" onclick="GetExistApplcant();" class="FieldIcon"/>
                    </div>
               </div>
		   </div>
           <div class="form-row">
             <div class="col-md-6 CONS">
                <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LDINDBfields " id="LDIN_CONSTITUTION" name="LDIN_CONSTITUTION">
                        <option value="" selected>--Select--</option>
                            <!-- <option value="Partnership firms">Partnership firms</option>
                              <option value="LLP">LLP</option>
                              <option value="HUF">HUF</option>
			      			  <option value="Private Ltd">Private Ltd</option>
			      			  <option value="Public Ltd">Public Ltd</option>
			      			  <option value="Proprietorship">Proprietorship</option>-->
                        </select>
                        <label class="mdb-main-label BTxt9">Constitution <span class="MndtryAstr"></span></label>
                   </div>
               </div>
				<div class="col-md-6 SUBLON">
                 <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LDINDBfields  " id="LDIN_SUBLONTYPE" name="LDIN_SUBLONTYPE">
                        <option value="" selected>--Select--</option>
                        </select>
                        <label class="mdb-main-label BTxt9">Sub Loan Type <span class="MndtryAstr">*</span></label> 
                  </div>
               </div>
           </div>
		  <div class="form-row">
            <div class="col-md-6 ">
                <div class="md-form">
				<input type="text" id="LDIN_LNAMT"  maxlength="30"  class="form-control IsCURCommaFields LDINDBfields NoSpecialChar LDINMndtry" name="LDIN_LNAMT">
                 <label class="mdb-main-label BTxt9">Loan Amount <span class="MndtryAstr">*</span></label>
                   </div>
               </div>
			   <div class="col-md-6">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LDINDBfields"  id="LDIN_PURPOSEOFLN" name="LDIN_PURPOSEOFLN">
                        </select>
                     <label for="" class="mdb-main-label BTxt9">Purpose of Loan <span class="MndtryAstr">*</span></label>
                   
                   <!-- <div class="collapse" id="SourceNameCollapse">
                        <input type="text" id="LDIN_SOURCNAME" class="form-control LDINDBfields ">
                        <label for="LDIN_SOURCNAME" class="">Source Name *</label>
                    </div> --> 
                 </div>
             </div>
           </div> 
                    

      <!--  <div class="form-row">
                <div class="col Grid">
                 <input type="button" style="display:none" class="DashTrg" onclick="FncallFEPDashLrgDataWP(this,'Table2',{spname:'LSW_SGetApplDetls',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'',MnuId:''},{0:$('#LDIN_PRIMLONID'),2:$('#OLDPRCSID')});" id="BTNTRIGAPPL" name="BTNTRIGAPPL" />
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