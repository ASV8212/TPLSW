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
	<input type="text" id="TEST_PRCSID" hidden="hidden" name="TEST_PRCSID" class="form-control TESTDBfields">
    <input type="text" id="TEST_ACTIVITYID" hidden="hidden" name="TEST_ACTIVITYID" class="form-control TESTDBfields">
    <input type="text" id="TEST_CREATEDBY" hidden="hidden" name="TEST_CREATEDBY" class="form-control TESTDBfields"> 
    <input type="text" id="TEST_DTCREATED" hidden="hidden" name="TEST_DTCREATED" class="form-control TESTDBfields">
    <input type="text" id="TEST_MODIFIEDBY" hidden="hidden" name="TEST_MODIFIEDBY" class="form-control TESTDBfields">
    <input type="text" id="TEST_DTMODIFIED" hidden="hidden" name="TEST_DTMODIFIED" class="form-control TESTDBfields">
    <input type="text" id="TEST_LPDSGRID" hidden="hidden" name="TEST_LPDSGRID" class="form-control TESTDBfields">  
      <!--  card -->
      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
            </br>
			<div class="Btxt10">ENTER CUSTOMER DETAILS </div>
            </br>
               <div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
                   <input type="text" id="TEST_LEADID" disabled maxlength="30"  class="form-control TESTDBfields TESTMndtry" name="TEST_LEADID"> 
					 <label for ="TEST_LEADID" class="mdb-main-label BTxt9">LEAD ID <span class="MndtryAstr">*</span></label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_AMOUNTREQUIREMENT"  maxlength="30" disabled    class="form-control    NoSpecialChar TESTDBfields IsCURCommaFields  TESTMndtry" name="TEST_AMOUNTREQUIREMENT">
                     <label for ="TEST_TYPEOFEMPLOYMENT"class="mdb-main-label BTxt9">AMOUNT REQUIREMENT <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_PAN" data-validate="LDIN_CUSTYPE|LDIN_CONSTITUTION" maxlength="30" class="form-control IsPanFields TESTDBfields 

TESTMndtry" name="TEST_PAN">
                      <label for ="TEST_PAN"class="mdb-main-label BTxt9">PAN <span class="MndtryAstr">*</span> </label>
					  
                  </div>
				</div>
				
			    </div>
			   <div class="form-row">
				 <!-- <div class="col-md-4">
					// <div class="md-form">
                     // <input type="text" id="TEST_TYPEOFEMPLOYMENT"  maxlength="30"   class="form-control TESTDBfields TESTMndtry" name="TEST_TYPEOFEMPLOYMENT">
                     // <label for="TEST_TYPEOFEMPLOYMENT"class="mdb-main-label BTxt9">TYPE OF EMPLOYMENT <span class="MndtryAstr">*</span> </label>
                  // </div>
				// </div> -->
			 <div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_FIRSTNAME"  maxlength="30" class="form-control  TESTDBfields TESTMndtry" name="TEST_FIRSTNAME">
                      <label for ="TEST_FIRSTNAME"class="mdb-main-label BTxt9">FIRST NAME  <span class="MndtryAstr">*</span> </label>
					  
                  </div>
				</div>
				
					 <div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_SECONDNAME"  maxlength="30" class="form-control  TESTDBfields TESTMndtry" name="TEST_SECONDNAME">
                      <label for ="TEST_SECONDNAME"class="mdb-main-label BTxt9">SECOND NAME <span class="MndtryAstr">*</span> </label>
					  
                  </div>
				</div>
				
				
				  <div class="col-md-4">
					<div class="md-form">
                    <input type="text" id="TEST_DOB" name="TEST_DOB" onblur="AgeVal(this,TEST_AGE);" maxlength="10" class="form-control TESTDBfields 

IsNumberFields NoSpecialChar INDM ISDatefield  TESTDBfields TESTMndtry">
                    <label for="TEST_DOB" class="">DOB<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
				</div>
				</div>
			    <div class="form-row">				 
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_AGE"  maxlength="30"  disabled  class="form-control TESTDBfields TESTMndtry" name="TEST_AGE">
                      <label for="TEST_TYPEOFEMPLOYMENT" class="mdb-main-label BTxt9 AGE"> AGE <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_MOBNO"  maxlength="10" class="form-control IsNumberFields TESTDBfields TESTMndtry" name="TEST_MOBNO">
                      <label for ="TEST_MOBNO" class="mdb-main-label BTxt9 ">MOBILE NO <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				 <div class="col-md-4">
					<div class="md-form">
                    <input type="text" id="TEST_EMAILID"  maxlength="30" class="form-control IsEmailFields TESTDBfields TESTMndtry" name="TEST_EMAILID">
                     <label for ="TEST_EMAILID"class="mdb-main-label BTxt9">EMAIL ID <span class="MndtryAstr ">*</span> </label>
					 
                  </div>
				</div>
				</div>
				<div class="form-row">

				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_ADDRESSLINE1"  maxlength="30"  class="form-control TESTDBfields TESTMndtry" name="TEST_ADDRESSLINE1">
                      <label for ="TEST_ADDRESSLINE1"class="mdb-main-label BTxt9">ADDRESS LINE 1 <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_ADDRESSLINE2"  maxlength="30" class="form-control TESTDBfields TESTMndtry" name="TEST_ADDRESSLINE2">
                      <label for="TEST_ADDRESSLINE2" class="mdb-main-label BTxt9">ADDRESS LINE 2 <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                    <input type="text" id="TEST_ADDRESSLINE3"  maxlength="30"  class="form-control TESTDBfields TESTMndtry" name="TEST_ADDRESSLINE3">
                     <label for ="TEST_ADDRESSLINE3"class="mdb-main-label BTxt9">ADDRESS LINE 3 <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				</div>
				<div class="form-row">
				
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_PINCODE"  maxlength="30" onchange= "fnOnFocusOut(this);Pindetls(this,'TEST_STATE','TEST_CITY')" class="form-control 

IsNumberFields IsPinFielde TESTDBfields TESTMndtry" name="TEST_PINCODE">
                      <label for ="TEST_ADDRESSLINE3"class="mdb-main-label BTxt9">PINCODE <span class="MndtryAstr">*</span> </label>  
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_CITY"  maxlength="30" disabled class="form-control TESTDBfields TESTMndtry" name="TEST_CITY">
                      <label for ="TEST_CITY" class="mdb-main-label BTxt9">CITY <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="TEST_STATE"  maxlength="30" disabled  class="form-control TESTDBfields TESTMndtry" name="TEST_STATE">
                      <label for="TEST_CITY" class="mdb-main-label BTxt9">STATE <span class="MndtryAstr">*</span> </label> 
                   </div>
				</div>
				</div>
				  <label class="mdb-main-label BTxt9">I hereby authorise representative to contact for further proceedings. </label> 
			   <div class="form-row">
			   <div class="col-md-4">
					<div class="md-form">
                  <!--   <input type="text" id="TEST_STATUS"  maxlength="30"  class="form-control TESTDBfields TESTMndtry" name="TEST_STATUS">-->
				  <select class="mdb-select md-form colorful-select dropdown-primary TESTDBfields TESTMndtry DataToFld"  id="TEST_STATUS" 

name="TEST_STATUS">
                         <option value="" selected>--Select--</option>
                              <option value="Hot"> Hot</option>
							  <option value="Warm"> Warm</option> 
                              <option value="Cool"> Cool</option> 
                        </select>
                      <label for="TEST_STATUS" class="mdb-main-label BTxt9">Lead status <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				 
				 <div class="col-md-4">
					<div class="md-form">
                      <input type="text" id="TEST_NCOMDOB" name="TEST_NCOMDOB" onblur="" maxlength="10"  class="form-control form-control ISPastDateFields TESTDBfields 

IsNumberFields NoSpecialChar  ISDatefield  TESTMndtry">
                    <label for="DOB" class="">Next comm date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
				</div>
			   </div>
				<!--<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="LODE_REQLONAMT"  maxlength="30"  onchange="CheckAmount();" class="form-control IsCURCommaFields LODEDBfields NoSpecialChar 

LODEMndtry" name="LODE_REQLONAMT">
                     <label for="LODE_REQLONAMT" class="">slkc <span class="MndtryAstr">*</span></label>
                  </div>
				</div>
			   </div>-->
			  
			   </div>
               <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Submit" data-aria="LSW_TLEAD5CR|TEST|TEST_LEADID" class="btn btn-Syel waves-effect waves-light FormSave">SUBMIT</button>   
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
   
   <a href="#">  <img id="LeadPopupClose" style="display:none" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" 

alt="DashSearch"></img></a>     
        
      </div>  
      <div class="modal-body">
        
         <div class="">


    <!-- Card body -->
	
     <div class="">  
        <form>          
	      <input type="text" id="LPOP_BRID" hidden="hidden"  name="LPOP_BRID" class="LPOPDBfields ">
		  <input type="text" id="LPOP_SOURCEID" hidden="hidden"  name="LPOP_SOURCEID" class=" LPOPDBfields ">
		  <input type="text" id="LPOP_LEADID" hidden="hidden"  name="LPOP_LEADID" class=" LPOPDBfields ">
		  <input type="text" id="LPOP_PRDID" hidden="hidden"  name="LPOP_PRDID" class=" LPOPDBfields ">
           <div class="form-row">
            <div class="col">
            <div class="md-form  MNST">
               <div class="select-radio INDIMNDRY "> 
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCusType();" value="Individual" id="Indvdl" name="LPOP_CUSTYPE">
                      <label class="custom-control-label" for="Indvdl">Individual</label>
                   </div>
                   <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCusType();getConstitution();" value="Non-Individual" id="NonIndvdl" name="LPOP_CUSTYPE">
                      <label class="custom-control-label" for="NonIndvdl">Non-Individual</label>
                  </div>
              </div>
               <label class="mdb-main-label BTxt9">Customer Type <span class="MndtryAstr">*</span></label>      
           </div>
          </div>
	     <div class="col">
           <div class="md-form">
              <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields LPOPMndtry " onchange="getPurposeofLoan()" id="LPOP_VERTICAL" name="LPOP_VERTICAL">
                 <option value="" selected>--Select--</option>
         <!--  <option value="MSME">MSME</option>
		  <option value="MSME - ALLIANCE">MSME_Alliance</option>
		  <option value="UCV">UCV</option>
		  <option value="UCV - ECOSYSTEM">UCV_Ecosystem </option>-->
              </select>
                <label class="mdb-main-label BTxt9">Vertical <span class="MndtryAstr">*</span></label>
           </div>
        </div>
       </div>
           <div class="form-row">
				<div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields LPOPMndtry DataToFld" onchange="CheckSource();" searchable="Search here.." data-change="LPOP_BRID"  id="LPOP_BRANCH" name="LPOP_BRANCH">
                        <!--  <option value="" selected>--Select--</option>
                              <option value="Perangudi">Perangudi</option>
                              <option value="Anakapalli">Anakapalli</option> -->
                        </select>
                        <label class="mdb-main-label BTxt9">Branch <span class="MndtryAstr">*</span></label>
                </div>
                </div> 
                <div class="col">
                <div class="md-form">
                        <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields PROIIDROP LPOPMndtry" onchange="getProductOpt()" id="LPOP_LONTYPE" name="LPOP_LONTYPE">
                        <!--<option value="" selected>--Select--</option>
                        <option value="Term Loan">Term Loan</option>
                        <option value="Overdraft">Overdraft</option>
                        <option value="Bill discounting">Bill discounting</option>
                        <option value="WCDL & DLOD">WCDL and DLOD</option>-->
						</select>
                        <label class="mdb-main-label BTxt9">Type of Loan <span class="MndtryAstr">*</span></label>
                </div>  
                </div>
           </div>
           <div class="form-row">
		        <div class="col-md-6">
                 <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields DataToFld"  data-change="LPOP_PRDID" id="LPOP_PRODUCT" name="LPOP_PRODUCT">
                           <option value="" selected>--Select--</option> 
                        </select>
                        <label class="mdb-main-label BTxt9">Product<span class="MndtryAstr">*</span></label> 
                  </div>
               </div>
				<div class="col-md-6">
                 <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields  " id="LPOP_SUBLONTYPE" name="LPOP_SUBLONTYPE">
                        <option value="" selected>--Select--</option> 
						<option value="">Adhoc</option>
						<option value="">Balance Transfer</option>
						<option value="">Fresh</option>
						<option value="">Renewal at Existing</option>
						<option value="">Renewal with enhancement</option>
						<option value="">Renewal with limit Decrease</option>
                        </select>
                        <label class="mdb-main-label BTxt9">Sub Loan Type <span class="MndtryAstr">*</span></label> 
                  </div>
               </div>
			</div>
			<div class="form-row">
			   <div class="col-md-6">
                <div class="md-form">
				<input type="text" id="LPOP_LNAMT"  maxlength="30"  class="form-control IsCURCommaFields LPOPDBfields NoSpecialChar LPOPMndtry" name="LPOP_LNAMT">
                 <label class="mdb-main-label BTxt9">Loan Amount <span class="MndtryAstr">*</span></label>
                   </div>
               </div>
			   <div class="col-md-6">
                  <div class="md-form">
                    <input type="text" id="LPOP_PURPOSEOFLN"  maxlength="30"  class="form-control LPOPDBfields NoSpecialChar LPOPMndtry IsAlphaFields" name="LPOP_PURPOSEOFLN">
                    <label class="mdb-main-label BTxt9">Purpose of Loan <span class="MndtryAstr">*</span></label>
                 </div>
               </div>
			</div>
			
			<!-- <div class="col-md-6 DIRDISB" style="display:none">
                   <div class="md-form">
                   <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields DataToFld" searchable="Search here.." data-change="LDIN_SOURCEID"   

id="LDIN_CONECTNAME" name="LDIN_CONECTNAME">
                   <option value="" selected>--Select--</option>
                         </select>
                     <label for="" class="mdb-main-label BTxt9">Source Name <span class="MndtryAstr">*</span></label>
                   
                   
                  </div>
              </div> 
			   </div>
              <div class="col-md-6 PRIME">
                   <div class="md-form">
                         <input type="text" id="LDIN_PRIMLONID" maxlength="18" class="form-control NoSpecialChar LPOPDBfields" onblur="ChkPrimLoanID();GetOldPrcsid();" 

name="LDIN_PRIMLONID">
                         <input type="text" id="OLDPRCSID" class="form-control LPOPDBfields" hidden="hidden" name="OLDPRCSID">
                         <label for="LDIN_PRIMLONID" class="">Primary Loan ID/Application ID<span class="MndtryAstr">*</span></label>
                         <img src="ThemeproLO/Common/Images/search.png" style="display:none" onclick="GetExistApplcant();" class="FieldIcon"/>
                    </div>
               </div>
           </div>  
		   <div class="form-row">
			<div class="col-md-6 PRIME">
                   <div class="md-form">
                         <input type="text" id="LDIN_PRIMLONID" maxlength="18" class="form-control NoSpecialChar LPOPDBfields" onblur="ChkPrimLoanID();GetOldPrcsid();" 

name="LDIN_PRIMLONID">
                         <input type="text" id="OLDPRCSID" class="form-control LPOPDBfields" hidden="hidden" name="OLDPRCSID">
                         <label for="LDIN_PRIMLONID" class="">Primary Loan ID/Application ID<span class="MndtryAstr">*</span></label>
                         <img src="ThemeproLO/Common/Images/search.png" style="display:none" onclick="GetExistApplcant();" class="FieldIcon"/>
                    </div>
               </div>
		   </div>
           <div class="form-row">
             <div class="col-md-6 CONS">
                <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields " id="LDIN_CONSTITUTION" name="LDIN_CONSTITUTION">
                        <option value="" selected>--Select--</option>
                             <option value="Partnership firms">Partnership firms</option>
                              <option value="LLP">LLP</option>
                              <option value="HUF">HUF</option>
			      			  <option value="Private Ltd">Private Ltd</option>
			      			  <option value="Public Ltd">Public Ltd</option>
			      			  <option value="Proprietorship">Proprietorship</option>
                        </select>
                        <label class="mdb-main-label BTxt9">Constitution <span class="MndtryAstr"></span></label>
                   </div>
               </div>
				
           </div>-->
		  <div class="form-row">
		      <div class="col-md-6">
                  <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields PROIIDROP LPOPMndtry "  onchange="CheckSource();"  id="LPOP_SOURCEBY" name="LPOP_SOURCEBY">
                        <option value="" selected>--Select--</option>
                        <option value="Connector">Connector</option>
                        <option value="DSA">DSA</option>
                        <option value="DST">DST</option>
                        <option value="Direct">Direct</option>
                        </select>
                  <label class="mdb-main-label BTxt9">Sourced By <span class="MndtryAstr">*</span></label>
                </div>
			  </div>
		      <div class="col-md-6 DIRDISB">
                 <div class="md-form">
                      <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields" id="LPOP_SOURCENAME" name="LPOP_SOURCENAME">
                       <!-- <option value="" selected></option> -->
                        </select>
                        <label class="mdb-main-label BTxt9">Source Name  <span class="MndtryAstr">*</span></label> 
                  </div>
               </div>
			   <div class="col-md-6 CONS">
                 <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LPOPDBfields" id="LPOP_CONSTITUTION" name="LPOP_CONSTITUTION">
                        <option value="" selected>--Select--</option> 
                        </select>
                        <label class="mdb-main-label BTxt9">Constitution <span class="MndtryAstr">*</span></label> 
                  </div>
               </div>       
           </div> 
       <div class="form-row">
                <div class="col Grid">
                 <input type="button" style="display:none" class="DashTrg" onclick="FncallFEPDashLrgDataWP(this,'Table2',

{spname:'LSW_SGetApplDetls',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'',MnuId:''},{0:$('#LPOP_PRIMLONID'),2:

$('#OLDPRCSID')});" id="BTNTRIGAPPL" name="BTNTRIGAPPL" />
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                    </table>
                </div> 
            </div> 
        </form>
      </div> 
    </div>
      </div> 
      <div class="modal-footer align-middle">
     <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
      <button type="button" id="InitWF"   class="btn btn-yel Btxt2">Done</button>
      </div>
    </div>
  </div>
</div>

 <!-- <button type="button" style="display:none" id="InitWF1" class="btn btn-yel Btxt2">Done</button>
   END -->
</div> 
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/DashBoard/Script/MyApplication/ManageLead/Script/LoadSubmit/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/DashBoard/Script/MyApplication/ManageLead/Script/Validation/Validation.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>

