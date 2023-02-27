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
	<input type="text" id="ABCD_PRCSID" hidden="hidden" name="ABCD_PRCSID" class="form-control ABCDDBfields">
    <input type="text" id="ABCD_ACTIVITYID" hidden="hidden" name="ABCD_ACTIVITYID" class="form-control ABCDDBfields">
    <input type="text" id="ABCDD_CREATEDBY" hidden="hidden" name="ABCD_CREATEDBY" class="form-control ABCDDBfields"> 
    <input type="text" id="ABCD_DTCREATED" hidden="hidden" name="ABCD_DTCREATED" class="form-control ABCDDBfields">
    <input type="text" id="ABCD_MODIFIEDBY" hidden="hidden" name="ABCD_MODIFIEDBY" class="form-control ABCDDBfields">
    <input type="text" id="ABCD_DTMODIFIED" hidden="hidden" name="ABCD_DTMODIFIED" class="form-control ABCDDBfields">
   <input type="text" id="ABCD_LPDSGRID" hidden="hidden" name="ABCD_LPDSGRID" class="form-control ABCDDBfields">  
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
			</br>
               <div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
                   <input type="text" id="ABCD_LEADID" disabled maxlength="30"  class="form-control ABCDDBfields ABCDMndtry" name="ABCD_LEADID"> 
					 <label for ="ABCD_LEADID" class="mdb-main-label BTxt9">LEAD ID <span class="MndtryAstr">*</span></label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="ABCD_FIRSTNAME"  maxlength="30"   class="form-control ABCDDBfields ABCDMndtry " name="ABCD_FIRSTNAME " >
                      <label for ="ABCD_FIRSTNAME" class="mdb-main-label BTxt9">FIRST NAME <span class="MndtryAstr">*</span></label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="ABCD_SECONDNAME"  maxlength="30"  class="form-control ABCDDBfields ABCDMndtry" name="ABCD_SECONDNAME ">
                      <label for ="ABCD_SECONDNAME" class="mdb-main-label BTxt9">SECOND NAME<span class="MndtryAstr">*</span></label>
                  </div>
				</div>
			    </div>
			    <div class="form-row">
				 <div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="ABCD_TYPEOFEMPLOYMENT"  maxlength="30"   class="form-control ABCDDBfields ABCDMndtry" name="ABCD_TYPEOFEMPLOYMENT">
                     <label for="ABCD_TYPEOFEMPLOYMENT"class="mdb-main-label BTxt9">TYPE OF EMPLOYMENT <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="ABCD_AMOUNTREQUIREMENT"  maxlength="30"  onchange="CheckAmount();"   class="form-control IsCURCommaFields ABCDDBfields NoSpecialChar ABCDDBfields ABCDMndtry" name="ABCD_AMOUNTREQUIREMENT">
                     <label for ="ABCD_TYPEOFEMPLOYMENT"class="mdb-main-label BTxt9">AMOUNT REQUIREMENT <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
				</div>
				</div>
			    <div class="form-row">
				 <div class="col-md-4">
					<div class="md-form">
                    <input type="text" id="ABCD_DOB" name="ABCD_DOB" onblur="AgeVal(this,ABCD_AGE);" maxlength="10" class="form-control form-control ABCDDBfields IsNumberFields NoSpecialChar INDM ISDatefield  ABCDDBfields ABCDMndtry">
                    <label for="ABCD_DOB" class="">DOB<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                     
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="ABCD_AGE"  maxlength="30"  class="form-control ABCDDBfields ABCDMndtry" name="ABCD_AGE">
                      <label for="ABCD_TYPEOFEMPLOYMENT" class="mdb-main-label BTxt9 AGE"> AGE <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="ABCD_MOBNO"  maxlength="10" class="form-control IsNumberFields ABCDDBfields ABCDMndtry" name="ABCD_MOBNO">
                      <label for ="ABCD_MOBNO" class="mdb-main-label BTxt9 ">MOBILE NO <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				</div>
				<div class="form-row">
				 <div class="col-md-4">
					<div class="md-form">
                    <input type="text" id="ABCD_EMAILID"  maxlength="30" class="form-control ABCDDBfields ABCDMndtry" name="ABCD_EMAILID">
                     <label for ="ABCD_EMAILID"class="mdb-main-label BTxt9">EMAIL ID <span class="MndtryAstr ">*</span> </label>
					 
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="ABCD_ADDRESSLINE1"  maxlength="30"  class="form-control ABCDDBfields ABCDMntry" name="ABCD_ADDRESSLINE1">
                      <label for ="ABCD_ADDRESSLINE1"class="mdb-main-label BTxt9">ADDRESS LINE 1 <span class="MndtryAstr">*</span> </label>
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="ABCD_ADDRESSLINE2"  maxlength="30" class="form-control ABCDDBfields ABCDMntry" name="ABCD_ADDRESSLINE2">
                      <label for="ABCD_ADDRESSLINE2" class="mdb-main-label BTxt9">ADDRESS LINE 2 <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				</div>
				<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
                    <input type="text" id="ABCD_ADDRESSLINE3"  maxlength="30"  class="form-control ABCDDBfields ABCDMntry" name="ABCD_ADDRESSLINE3">
                     <label for ="ABCD_ADDRESSLINE3"class="mdb-main-label BTxt9">ADDRESS LINE 3 <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="ABCD_PINCODE"  maxlength="30" onchange= "fnOnFocusOut(this);Pindetls(this,'ABCD_STATE','ABCD_CITY')" class="form-control IsNumberFields IsPinFielde ABCDDBfields ABCDMntry" name="ABCD_PINCODE">
                      <label for ="ABCD_ADDRESSLINE3"class="mdb-main-label BTxt9">PINCODE <span class="MndtryAstr">*</span> </label>  
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="ABCD_CITY"  maxlength="30"  class="form-control ABCDDBfields ABCDMntry" name="ABCD_CITY">
                      <label for ="ABCD_CITY" class="mdb-main-label BTxt9">CITY <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				</div>
				<div class="form-row">
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="ABCD_STATE"  maxlength="30" class="form-control ABCDDBfields ABCDMntry" name="ABCD_STATE">
                      <label for="ABCD_CITY" class="mdb-main-label BTxt9">STATE <span class="MndtryAstr">*</span> </label> 
                   </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="ABCD_PAN" data-validate="LDIN_CUSTYPE|LDIN_CONSTITUTION" maxlength="30" class="form-control IsPanFields ABCDDBfields ABCDMntry" name="ABCD_PAN">
                      <label for ="ABCD_PAN"class="mdb-main-label BTxt9">PAN <span class="MndtryAstr">*</span> </label>
					  
                  </div>
				</div>
				<div class="col-md-4">
					<div class="md-form">
                     <input type="text" id="ABCD_LOANUSAGE"  maxlength="30"  class="form-control ABCDDBfields ABCDMntry" name="ABCD_LOANUSAGE">
                      <label for="ABCD_LOANUSAGE"class="mdb-main-label BTxt9">LOAN USAGE <span class="MndtryAstr">*</span> </label> 
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
			  
			   </div>
               <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Submit" data-aria="LSW_TLEAD2CR|ABCD" class="btn btn-Syel waves-effect waves-light FormSave">SUBMIT</button>   
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
      	<th>ABCD_LEADID</th>
         <th>ABCD_CUSNAME</th>
         <th>ABCD_MOBNO</th>
         <th>ABCD_LONNO</th>
         <th>ABCD_SRC</th>
         <th>ABCD_AGE</th>
         <th>ABCD_ACTN</th>
         <th>ABCD_REMRK</th>
         <th>ABCD_SRCID</th>
         <th>ABCD_SRCTYP</th>
         <th>ABCD_BRID</th>
         <th>ABCD_ALLOCTO</th>
         <th>ABCD_PRCSID</th>
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
   
</div> 
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/DashBoard/Script/MyApplication/ManageOTC/Script/LoadSubmit/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/DashBoard/Script/MyApplication/ManageOTC/Script/Validation/Validation.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>