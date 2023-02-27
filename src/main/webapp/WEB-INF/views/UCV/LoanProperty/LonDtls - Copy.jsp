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
      <div class="card-body px-lg-5 pt-0">
        <form>
            <input type="text" id="LODE_PRCSID" hidden="hidden" name="LODE_PRCSID" class="form-control LODEDBfields">
            <input type="text" id="LODE_ACTIVITYID" hidden="hidden" name="LODE_ACTIVITYID" class="form-control LODEDBfields">
            <input type="text" id="LODE_CREATEDBY" hidden="hidden" name="LODE_CREATEDBY" class="form-control LODEDBfields"> 
            <input type="text" id="LODE_DTCREATED" hidden="hidden" name="LODE_DTCREATED" class="form-control LODEDBfields">
            <input type="text" id="LODE_MODIFIEDBY" hidden="hidden" name="LODE_MODIFIEDBY" class="form-control LODEDBfields">
            <input type="text" id="LODE_DTMODIFIED" hidden="hidden" name="LODE_DTMODIFIED" class="form-control LODEDBfields">
        	<input type="text" id="LODE_SCHEMEID" hidden="hidden" name="LODE_SCHEMEID" class="form-control LODEDBfields">
		
			<input type="text" id="LODE_CONECTID" hidden="hidden" name="LODE_CONECTID" class="form-control LODEDBfields">
			</br>
        	<div class="form-row">
        		<div class="col Btxt3">Enter Loan Details</div>
        	</div>
        	</br>
        	</br>
           <div class="form-row">
            <div class="col-md-6">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LODEDBfields LODEMndtry" onchange="CheckSource();CheckDirect();" id="LODE_SOURCBY" name="LODE_SOURCBY">
                  <!--	<option value="">--Select--</option>
                  	<option value="Connector">Connector</option>
                    <option value="DST">DST</option>
                    <option value="DSA">DSA</option>
                    <option value="Direct">Direct</option>-->
  					<!-- <option class="SRCBY" disabled value="Direct">Direct</option>
 					 <option class="SRCBY" disabled value="DSA">DSA</option>
 					 <option class="SOURC" disabled value="DST Direct">DST Direct</option>
  					<option class="SOURC" disabled value="Connector">Connector</option> -->
				</select>
				<label class="mdb-main-label BTxt9">Sourced by <span class="MndtryAstr">*</span> </label>
             </div>
                </div>
               <div class="col-md-6 SOUDIR">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LODEDBfields DataToFld" data-change="LODE_CONECTID" searchable="Search here.." id="LODE_CONECTNAME" name="LODE_CONECTNAME">
                <!--   	<option value="">--Select--</option>
                        <option class="CON" disabled value="39603">KARUNAMOORTHY RANGANATHAN HE</option>
                    <option class="DST" disabled value="CB04008">Aditya Rajendra Belkar</option>
                    <option class="DSA" disabled value="40669">S MANOHARAN</option>-->  
  					<!-- <option class="SRCBY" disabled value="Direct">Direct</option>
 					 <option class="SRCBY" disabled value="DSA">DSA</option>
 					 <option class="SOURC" disabled value="DST Direct">DST Direct</option>
  					<option class="SOURC" disabled value="Connector">Connector</option> -->
				</select>
                    <label class="mdb-main-label BTxt9" >Source Name <span class="MndtryAstr">*</span> </label>
                  </div>
                </div>
           </div>
           <div class="form-row LEAD" style="display:none">
            <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LODEDBfields" id="LODE_LEADID" name="LODE_LEADID">
                  	<option value="" >--Select--</option>
  					<option value="Lead ID 1">Lead ID 1</option>
 				    <option value="Lead ID  2">Lead ID 2</option>
				</select>
				<label class="mdb-main-label BTxt9">Lead ID <span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="LODE_LEDCHNAME" maxlength="25" name="LODE_LEDCHNAME" class="form-control IsAlphaFields LODEDBfields">
                    <label for="LODE_LEDCHNAME" class="">Lead Channel Name</label>
                  </div>
                </div>
           </div>
           <div class="form-row">
            <div class="col-md-6">
              <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LODEDBfields"  disabled onchange="GETDROPDOWNVAL('Page');PRIMARYID();" id="LODE_LONTYPE" name="LODE_LONTYPE">
                   <!--<option value="">--Select--</option>-->
                   <option value="Fresh Loans">Fresh Loans</option>
                   <option value="BT">BT</option>
                   <option value="Existing Loans">Existing Loans</option>
                   <option class="Mor" value="Re-Punch">Re-Punch</option>
                   <option class="Mor" value="Registered Mortgage">Registered Mortgage</option>
				   <option value="Purchase of property">Purchase of property</option>
				   <option value="Grampanchayt property">Grampanchayt property</option>
				   <option value="Micro LAP">Micro LAP</option>
				   <option value="GECL 3.0">GECL 3.0</option>
				   <option value="GECL Additional 10%">GECL Additional 10%</option>
				   <option value="GECL 2.0">GECL 2.0</option>
				</select>
				<label class="mdb-main-label BTxt9">Loan Type <span class="MndtryAstr">*</span> </label>
             </div>
                </div>
               
			
               <div class="col-md-3">
					<div class="md-form">
				  <select class="mdb-select md-form colorful-select dropdown-primary TESTDBfields TESTMndtry DataToFld"  id="TEST_STATUS" name="TEST_STATUS">
                         <option value="" selected>--Select--</option>
                              
							  <option value="Term Loan"> loan agianst property</option> 
                              <option value="Term Loan"> Bussiness loan</option> 
							  <option value="Term Loan"> Working capital</option>
							  <option value="Over draft"> Working capital</option>
							  
							  <option value="WCDL"> Working capital demand loan</option> 
							  <option value=" Bill Discountiing"> Invoice based funding - front end</option> 
							  <option value=" Bill Discountiing"> Working capital demand loan - Rear end</option> 
				           </select>
                      <label for="TEST_STATUS" class="mdb-main-label BTxt9">  Product <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>      
				
				
				<div class="form-row">
           
            <div class="col">
             
            <div class="md-form  MNST">
               <div class="select-radio INDIMNDRY "> 
                    <div class="custom-control custom-radio custom-control-inline">
                         <input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCusType();" value="Individual" id="Indvdl" name="LPOP_CUSTYPE">
                         <label class="custom-control-label" for="Indvdl">Secured</label>
                   </div>
				   
				   <div class="md-form  MNST">
               <div class="select-radio INDIMNDRY "> 
                   <div class="custom-control custom-radio custom-control-inline">
                         <input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCusType();" value="Non-Individual" id="NonIndvdl" name="LPOP_CUSTYPE">
                         <label class="custom-control-label" for="NonIndvdl">UnSecured</label>
                  </div>
              </div>
                       
           </div>
                </div>
				 
				

                 
				<div class="form-row">
				<div class="col-md-6 ">
					<div class="md-form">
				   <input type="text" id="LPOP_LNAMT" maxlength="60" class="form-control IsCURCommaFields LPOPDBfields NoSpecialChar LPOPMndtry DataNormal" name="LPOP_LNAMT" title="">
				   <label class="mdb-main-label BTxt9">Existing exposture<span class="MndtryAstr">*</span></label>
				   </div>
				</div>

			<!-- <div class="col-md-6 FRESUBLON">
                  <div class="md-form">
                    <select class="mdb-select md-form SUBLONTYP select-dropdown colorful-select dropdown-primary LODEDBfields" id="LODE_SUBLONTYP" name="LODE_SUBLONTYP">
				    <option value="">--Select--</option>
				    <option value="Overdraft BT">Overdraft BT</option>
				    <option value="Term Loan BT">Term Loan BT</option>
				    <option value="Top-up with additional Property">Top-up with additional Property</option>
				    <option value="Top-up with additional applicant">Top-up with additional applicant</option>
				    <option value="Normal top-up">Normal top-up</option>
				    <option value="Re-book">Re-book</option>
			   	</select>
				 <label class="mdb-main-label BTxt9">Sub Loan Type<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div>
		   
		       <!-- <div class="form-row PRIMID">
                   <div class="col-md-6">
                    <div class="md-form">
                    <input type="text" id="LODE_PRIMARYLOANID"  maxlength="18"  disabled class="form-control  LODEDBfields NoSpecialChar" name="LODE_PRIMARYLOANID">
                    <label for="LODE_PRIMARYLOANID" class="">Primary loan ID<span class="MndtryAstr">*</span></label>
                    </div>
                   </div> 
                  </div> -->
           <div class="form-row ">
            <div class="col-md-6 NEWPROD">
              <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LODEDBfields LODEMndtry DataToFld" onchange="getReqROI('LODE_SCHEME','')"  data-change="LODE_SCHEMEID"  id="LODE_SCHEME" name="LODE_SCHEME">
  					 <!-- <option value="">--Select--</option>
  					<option value="S00001">Standard Prime</option>
 					 <option value="S00002">RTR</option>
 					 <option value="S00003">LOW LTV</option>
  					 <option value="S00004">Rental Income Program</option>
  					 <option value="S00005">LIP</option>
  					 <option value="S00006">Chola Margin</option>
  					 <option value="S00007">Banking Surrogate</option>
					 <option value="S00008">PAT Multiplier</option>-->
				
			<!--	</select>
				<label class="mdb-main-label BTxt9">Scheme <span class="MndtryAstr">*</span></label>
             </div>
          </div> -->
          <div class="col-md-6">
                  <div class="md-form">
                     <input type="text" id="LODE_REQLONAMT"  maxlength="30"  onchange="CheckAmount();" class="form-control IsCURCommaFields LODEDBfields NoSpecialChar LODEMndtry" name="LODE_REQLONAMT">
                     <label for="LODE_REQLONAMT" class="">Requested Loan Amount (Rs.) <span class="MndtryAstr">*</span></label>
                  </div>
           </div>
           </div>
		<!--  <div class="form-row ML" style="display:none">
            <div class="col">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary LODEDBfields MLMndtry" onchange="GetPropType();" id="LODE_PROPUSAGE" name="LODE_PROPUSAGE">
                  	<option value="">Select</option>
  					<option value="Self Occupied">Self Occupied</option>
 					<option value="Rented">Rented</option>
 					<option value="Vacant">Vacant</option>
  				    </select>
                    <label class="mdb-main-label BTxt9">Property Usage<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary LODEDBfields MLMndtry" onchange="getReqROI('LODE_PROPUSAGE','LODE_PROPTYPE');" id="LODE_PROPTYPE" name="LODE_PROPTYPE"> -->
                  	<!--<option value="">Select</option>
  					<option value="Individual House">Individual House</option>
 					<option value="Flat">Flat</option>
  					<option value="Office">Office</option>
  					<option value="Shop">Shop</option>
 					<option value="Industrial Property">Industrial Property</option>
 					<option value="Plot">Plot</option>
  					<option value="Godown">Godown</option>
  					<option value="Hospital">Hospital</option>
  					<option value="Restaurant">Restaurant</option>
 					<option value="Farm House">Farm House</option>
 					<option value="Mixed (Resi cum Commercial)">Mixed (Resi cum Commercial)</option>-->
			<!--	</select>
				<label class="mdb-main-label BTxt9">Property Type <span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div> -->
           <div class="form-row">
            <div class="col">
                 <div class="md-form">
                  	<input type="text" id="LODE_REQTENUR" name="LODE_REQTENUR" maxlength="2" onblur="RequestTenure()"   class="form-control NoSpecialChar IsNumberFields LODEDBfields LODEMndtry">
                    <label for="LODE_REQTENUR" class="">Requested Tenure (In Years)<span class="MndtryAstr">*</span></label>
                </div>
                </div>
             <div class="col">
                  <div class="md-form">
                     <input type="text" id="LODE_REGINTSRAT" maxlength="5" name="LODE_REGINTSRAT" class="form-control NoSpecialChar IsPercentageSPL IsNumberFields LODEDBfields LODEMndtry">
                     <label for="LODE_REGINTSRAT" class="">Requested Interest Rate <span class="MndtryAstr">*</span> </label>
                  </div>
             </div>
           </div>
         <!--  <div class="form-row">
            <div class="col-md-6">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LODEDBfields LODEMndtry" onchange="GetSubloanPurpose('LODE_LONPURP','LODE_SUBLONPURP')"  id="LODE_LONPURP" name="LODE_LONPURP">
                  	<!--<option value="">--Select--</option>
  					<option value="Business Use">Business Use</option>
 					<option value="Balance Transfer">Balance Transfer</option>-->
				</select>
				<label class="mdb-main-label BTxt9">Loan Purpose <span class="MndtryAstr">*</span> </label>
             </div>
                </div> -->
               
			   <div class="form-row">
				  <div class="col-md-6">
					<div class="md-form">
				  <select class="mdb-select md-form colorful-select dropdown-primary TESTDBfields TESTMndtry DataToFld"  id="TEST_STATUS" name="TEST_STATUS">
                         <option value="" selected>--Select--</option>
                              <option value="Term Loa"> loan agianst machiner
							  </option>
							  <option value="Term Loa"> loan agianst propert
						</option> 
                              
							  <option value=" Bill Discounting"> Working capital demand loan </option> 
				           </select>
                      <label for="TEST_STATUS" class="mdb-main-label BTxt9">Purpose of loan<span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>   
			   
			   <div class="col-md-6">
					<div class="md-form">
				<select class="mdb-select md-form colorful-select dropdown-primary TESTDBfields TESTMndtry DataToFld"  id="TEST_STATUS" name="TEST_STATUS">
                         <option value="" selected>--Select--</option>
                              <option value="Term Loan"> Term Loan</option>
							  <option value="Over Draft"> Over Draft</option> 
                              <option value="Bill Discountiing"> Bill Discountiing</option> 
							  <option value="WCDL"> WCDL</option> 
							  <option value="DLOD"> DLOD</option> 
                        </select>
                      <label for="TEST_STATUS" class="mdb-main-label BTxt9"> sub loan purpose <span class="MndtryAstr">*</span> </label> 
                  </div>
				</div>
				</div>
			   
			     <br><h1> Processing fees collection </h1></br>
				 
				
            <div class="col-md-4">
                <div class="md-form">
				<input type="text" id="TEST_STATUS"  maxlength="30"  class="form-control IsCURCommaFields LPOPDBfields NoSpecialChar LPOPMndtry" name="TEST_STATUS">
                 <label class="mdb-main-label BTxt9">Demand amount (rs) <span class="MndtryAstr">*</span></label>
                   </div>
               </div>
			   
			   
			   <h5>Collcetion type<h5>
            <div class="form-row">
            <div class="col">
             
            <div class="md-form  MNST">
               <div class="select-radio INDIMNDRY "> 
                    <div class="custom-control custom-radio custom-control-inline">
                         <input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCuType();" value="Individua" id="Indvd" name="LPOP_CUSTYE">
                         <label class="custom-control-label" for="Indvdl">Upfront</label>
                   </div>
				   
				   
				   <div class="md-form  MNST">
               <div class="select-radio INDIMNDRY "> 
                   <div class="custom-control custom-radio custom-control-inline">
                         <input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCuType();" value="Non-Individua" id="NonIndvd" name="LPOP_CUSTYE">
                         <label class="custom-control-label" for="NonIndvdl">Later</label>
                       
                           
					   </div>
						
				
						</div>
						</div>
						</div>
                            
				
				
		  
					<h5> Mode </h5>
					 <div class="form-row">
            <div class="col">
             
            <div class="md-form  MNST">
					<div class = "select-radio INDIMNDRY">
					<div class = "custom-control custom-radio custom-control-inline">
					<input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCusType();" value="Individual" id="TEST_STATUS" name="LPOP_CUSTYPE">
					<label class="custom-control-label" for="Indvdl">Cheque</label>
					</label>
					</div>
					
					
					<div class="md-form">
					<div class = "select-radio INDIMNDRY">
					<div class = "custom-control custom-radio custom-control-inline">
					<input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCusType();" value="Individual" id="TEST_STATUS" name="LPOP_CUSTYPE">
					<label class="custom-control-label" for="Indvdl">DD</label>
					</label>
					</div>
					
					
					<div class="md-form">
					<div class = "select-radio INDIMNDRY">
					<div class = "custom-control custom-radio custom-control-inline">
					<input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCusType();" value="Individual" id="TEST_STATUS" name="LPOP_CUSTYPE">
					<label class="custom-control-label" for="Indvdl">online</label>
					</label>
					</div>
					
					
				 
				  <div class="col-md-4">
                <div class="md-form">
				<input type="text" id="TEST_STATUS"  maxlength="30"  class="form-control IsCURCommaFields LPOPDBfields NoSpecialChar LPOPMndtry" name="TEST_STATUS">
                 <label class="mdb-main-label BTxt9">Amount (incl gst)in (rs) <span class="MndtryAstr">*</span></label>
                   </div>
               </div>		 
			   
			   
			   
			                             --------  ----------------
			   
			   
			   
			   <!-- <div class="col-md-6  SUBLON">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary LODEDBfields" id="LODE_SUBLONPURP" name="LODE_SUBLONPURP" >
                  	<option value="">--Select--</option>
				</select>
				<label class="mdb-main-label BTxt9">Sub Loan Purpose <span class="MndtryAstr">*</span> </label>
                  </div>
                </div>
           </div> -->
		   
		  <!-- <div class="form-row">
              <div class="col-md-6">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LODEDBfields"  disabled id="LODE_PRODUCT" name="LODE_PRODUCT">
                     
                  </select>
                        <label class="mdb-main-label BTxt9">Product<span class="MndtryAstr"></span></label>
                </div>
                </div> -->
                
                
          <!--   <div class="col-md-6 INTESYR">
                  <div class="md-form">
                     <input type="text" id="LODE_INTERESTYR" maxlength="1" onblur="CheckIntestYr()"  name="LODE_INTERESTYR" class="form-control NoSpecialChar IsNumberFields LODEDBfields ">
                     <label for="LODE_INTERESTYR" class="">Interest Year<span class="MndtryAstr">*</span> </label>
                  </div>
             </div>
           </div> -->
		   
           </br>
               <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="LSW_TLOANDETAILS|LODE" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TLOANDETAILS|LODE" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                  </div>
              </div>
        </form>
      </div>
    </div>
    <script type="text/javascript" src="ThemeproLO/UCV/LoanProperty/Script/LonDtls/LoadSubmit.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/UCV/LoanProperty/Script/LonDtls/Validation.js${DMY13}"></script> 

                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           