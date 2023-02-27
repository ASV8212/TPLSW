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
	<input type="text" id="READ_PRCSID" hidden="hidden" name="READ_PRCSID" class="form-control READDBfields">
    <input type="text" id="READ_ACTIVITYID" hidden="hidden" name="READ_ACTIVITYID" class="form-control READDBfields">
    <input type="text" id="READ_CREATEDBY" hidden="hidden" name="READ_CREATEDBY" class="form-control READDBfields"> 
    <input type="text" id="READ_DTCREATED" hidden="hidden" name="READ_DTCREATED" class="form-control READDBfields">
    <input type="text" id="READ_MODIFIEDBY" hidden="hidden" name="READ_MODIFIEDBY" class="form-control READDBfields">
    <input type="text" id="READ_DTMODIFIED" hidden="hidden" name="READ_DTMODIFIED" class="form-control READDBfields">
   <input type="text" id="READ_LPDSGRID" hidden="hidden" name="READ_LPDSGRID" class="form-control READDBfields">  --%>
      <!--  card -->
      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
            </br> 
			</br> 
			</br> 
			</br> 
			</br>
            
	
			
               <div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
                   <input type="text" id="READ_LEADID" disabled maxlength="30"  class="form-control READDBfields READMndtry" name="READ_LEADID"> 
					 <label for ="READ_LEADID" class="mdb-main-label BTxt9">LEAD ID <span class="MndtryAstr">*</span></label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="READ_FIRSTNAME"  maxlength="30"   class="form-control READDBfields READMndtry " name="READ_FIRSTNAME " >
                      <label for ="READ_FIRSTNAME" class="mdb-main-label BTxt9">FIRST NAME <span class="MndtryAstr">*</span></label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="READ_SECONDNAME"  maxlength="30"  class="form-control READDBfields READMndtry" name="READ_SECONDNAME ">
                      <label for ="READ_SECONDNAME" class="mdb-main-label BTxt9">SECOND NAME<span class="MndtryAstr">*</span></label>
                  </div>
				</div>
			    </div>
			    <div class="form-row">
				 <div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="READ_TYPEOFEMPLOYMENT"  maxlength="30"   class="form-control READDBfields READMndtry" name="READ_TYPEOFEMPLOYMENT">
                     <label for="READ_TYPEOFEMPLOYMENT"class="mdb-main-label BTxt9">TYPE OF EMPLOYMENT <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="READ_AMOUNTREQUIREMENT"  maxlength="30"  onchange="CheckAmount();" disabled class="form-control IsCURCommaFields READDBfields NoSpecialChar READDBfields LEADMndtry" name="READ_AMOUNTREQUIREMENT">
                     <label for ="READ_TYPEOFEMPLOYMENT"class="mdb-main-label BTxt9">AMOUNT REQUIREMENT <span class="MndtryAstr">*</span> </label>
                  </div> 
				</div>
				<div class="col-md-4">
				</div>
				</div>
			    <div class="form-row">
				 <div class="col-md-4">
					<div class="md-form">
                    <input type="text" id="READ_DOB" name="READ_DOB" onblur="AgeVal(this,LEAD_AGE);" maxlength="10" class="form-control form-control READDBfields IsNumberFields NoSpecialChar INDM ISDatefield  READDBfields READMndtry">
                    <label for="READ_DOB" class="">DOB<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                     
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="READ_AGE"  maxlength="30"  class="form-control READDBfields READMndtry" name="READ_AGE">
                      <label for="READ_TYPEOFEMPLOYMENT" class="mdb-main-label BTxt9 AGE"> AGE <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="READ_MOBNO"  maxlength="10" class="form-control IsNumberFields READDBfields READMndtry" name="READ_MOBNO">
                      <label for ="READ_MOBNO" class="mdb-main-label BTxt9 ">MOBILE NO <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				</div>
				<div class="form-row">
				 <div class="col-md-4">
					<div class="md-form">
                    <input type="text" id="READ_EMAILID"  maxlength="30" class="form-control IsEmailFields READMndtry" name="READ_EMAILID">
                     <label for ="READ_EMAILID"class="mdb-main-label BTxt9">EMAIL ID <span class="MndtryAstr ">*</span> </label>
					 
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="READ_ADDRESSLINE1"  maxlength="30"  class="form-control READDBfields LEADMndtry" name="READ_ADDRESSLINE1">
                      <label for ="READ_ADDRESSLINE1"class="mdb-main-label BTxt9">ADDRESS LINE 1 <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="READ_ADDRESSLINE2"  maxlength="30" class="form-control READDBfields LEADMndtry" name="READ_ADDRESSLINE2">
                      <label for="READ_ADDRESSLINE2" class="mdb-main-label BTxt9">ADDRESS LINE 2 <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				</div>
				<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
                    <input type="text" id="READ_ADDRESSLINE3"  maxlength="30"  class="form-control READDBfields LEADMndtry" name="READ_ADDRESSLINE3">
                     <label for ="READ_ADDRESSLINE3"class="mdb-main-label BTxt9">ADDRESS LINE 3 <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="READ_PINCODE"  maxlength="30" onchange= "fnOnFocusOut(this);Pindetls(this,'READ_STATE','READ_CITY')" class="form-control IsNumberFields IsPinFielde READDBfields READMndtry" name="READ_PINCODE">
                      <label for ="READ_ADDRESSLINE3"class="mdb-main-label BTxt9">PINCODE <span class="MndtryAstr">*</span> </label>  
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="READ_CITY"  maxlength="30"  class="form-control READDBfields READMndtry" name="READ_CITY">
                      <label for ="READ_CITY" class="mdb-main-label BTxt9">CITY <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				</div>
				<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="READ_STATE"  maxlength="30" class="form-control READDBfields READMndtry" name="READ_STATE">
                      <label for="READ_CITY" class="mdb-main-label BTxt9">STATE <span class="MndtryAstr">*</span> </label> 
                   </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="READ_PAN" data-validate="LDIN_CUSTYPE|LDIN_CONSTITUTION" maxlength="30" class="form-control IsPanFields READDBfields READMndtry" name="READ_PAN">
                      <label for ="READ_PAN"class="mdb-main-label BTxt9">PAN <span class="MndtryAstr">*</span> </label>
					  
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="READ_LOANUSAGE"  maxlength="30"  class="form-control READDBfields READMndtry" name="READ_LOANUSAGE">
                      <label for="READ_LOANUSAGE"class="mdb-main-label BTxt9">LOAN USAGE <span class="MndtryAstr">*</span> </label> 
                   </div>
				</div>
				</div>
				<!--<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LODE_REQLONAMT"  maxlength="30"  onchange="CheckAmount();" class="form-control IsCURCommaFields LODEDBfields NoSpecialChar LODEMndtry" name="LODE_REQLONAMT">
                     <label for="LODE_REQLONAMT" class="">slkc <span class="MndtryAstr">*</span></label>
                  </div>
				</div>
			   </div>--
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
						 
						   
                        </div> -->
			   </div>
               <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Submit" data-aria="LSW_TLEADCR|LEAD" class="btn btn-Syel waves-effect waves-light FormSave">SUBMIT</button>   
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
	
    <!-- <div class="">
            
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
                         <option value="HE01">Home Equity</option>
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
                              <option value="Anakapalli">Anakapalli</option> 
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
           </div>  
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
                    <!--    </select>
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
            </div> 
        </form>
      </div> 
    </div>
      </div> 
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-
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
<script type="text/javascript" src="ThemeproLO/UCV/DashBoard/Script/MyApplication/ManageLead/Script/LoadSubmit/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/DashBoard/Script/MyApplication/ManageLead/Script/Validation/Validation.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>