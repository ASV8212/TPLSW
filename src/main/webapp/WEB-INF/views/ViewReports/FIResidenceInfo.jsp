</br>
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="">
<div class="form-row FltRight">
               <div class=" col-md-12">
                  <div class="md-form">
				  <label for="" class="">Remark<span class="MndtryAstr"></span></label>
				  </br></br>
				     <span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="PAGEREMARKPOPUP('REMARKS',PrcsID,PrMs6,PrMs5);" class="FltRight" width="35" height="25"></span>
                     <input type="text" id="REMARKS" data-to="REMARKS" hidden="hidden" name="REMARKS" class="form-control">
                    
                  </div>
                </div>
           </div>
     <div class="admin-panel">
							
                            <!--Admin panel-->
                       
 <!-- card -->
  <div class="card CardNS">
    <!-- Card body -->
    <div>
      <div class="card-body px-lg-5 pt-0">
        <form>
        <input type="text" id="FIAD_PRCSID" hidden="hidden" name="FIAD_PRCSID" class="form-control FIADDBfields">
         <input type="text" id="FIAD_ACTIVITYID" hidden="hidden" name="FIAD_ACTIVITYID" class="form-control FIADDBfields">
         <input type="text" id="FIAD_DTCREATED" hidden="hidden" name="FIAD_DTCREATED" class="form-control FIADDBfields">
         <input type="text" id="FIAD_CREATEDBY" hidden="hidden" name="FIAD_CREATEDBY" class="form-control FIADDBfields">
         <input type="text" id="FIAD_DTMODIFIED" hidden="hidden" name="FIAD_DTMODIFIED" class="form-control FIADDBfields">
         <input type="text" id="FIAD_MODIFIEDBY" hidden="hidden" name="FIAD_MODIFIEDBY" class="form-control FIADDBfields">
         
         <input type="text" id="FIAD_UNIQEID" hidden="hidden" name="FIAD_UNIQEID" class="form-control FIADDBfields">
         <input type="text" id="FIAD_DATEINIT" hidden="hidden" name="FIAD_DATEINIT" class="form-control FIADDBfields">
		 
         <input type="text" id="FIAD_ALTNUNIQEID" hidden="hidden" name="FIAD_ALTNUNIQEID" class="form-control FIADDBfields">
        <input type="text" id="FIAD_EXTERCOMMMI" hidden="hidden" name="FIAD_EXTERCOMMMI" class="form-control FIADDBfields">
<input type="text" id="FIAD_INTERERRESIDI" hidden="hidden" name="FIAD_INTERERRESIDI" class="form-control FIADDBfields">
<input type="text" id="FIAD_ASSTSEENRESIDI" hidden="hidden" name="FIAD_ASSTSEENRESIDI" class="form-control FIADDBfields">
<input type="text" id="FIAD_REASONSI" hidden="hidden" name="FIAD_REASONSI" class="form-control FIADDBfields">

<input type="text" id="FIAD_UPLOAD" hidden="hidden" name="FIAD_UPLOAD" class="form-control FIADDBfields">
		
        </br>
        	<div class="form-row">
        		<div class="col Btxt3">Residence Information</div>
        	</div>
        	</br>
            <div class="form-row">
               <div class=" col-md-8">
                  <div class="md-form">
                    <input type="text" id="FIAD_RESADDRESS" maxlength="200" name="FIAD_RESADDRESS" class="form-control AddrNoSpecialChar  FIADDBfields">
                    <label for="FIAD_RESADDRESS" class="">Residence Address<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="FIAD_LANDMARK" name="FIAD_LANDMARK" class="form-control FIADDBfields ">
                    <label for="FIAD_LANDMARK" class="">Land Mark<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div>  
             <div class="form-row ">
             <div class="col-md-4">     
              <div class="md-form">
               <div class="select-radio FIADMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input FIADDBfields" value="Yes" id="ADDRYES" name="FIAD_ADDRCONFORM">
                        <label class="custom-control-label" for="ADDRYES">Yes</label>
                     </div>
                     <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input FIADDBfields" value="No" id="ADDRNO" name="FIAD_ADDRCONFORM">
                          <label class="custom-control-label" for="ADDRNO">No</label>
                    </div>
                </div>
                  <label class="mdb-main-label BTxt9">Address Confirmed<span class="MndtryAstr">*</span></label>      
               </div>
              </div>
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="FIAD_DTVISIT" name="FIAD_DTVISIT" maxlength="10"  onblur="DateInspect(this,'FIAD_DATEINIT')" class="form-control ISFutureDateFields ISDatefield  FIADDBfields IsNumberFields NoSpecialChar  ">
                    <label for="FIAD_DTVISIT" class="">Date Of Visit<span class="MndtryAstr"></span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>  
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="FIAD_TIMEVISIT" maxlength="10"  name="FIAD_TIMEVISIT" class="form-control IsTimeField FIADDBfields  ">
                    <label for="FIAD_TIMEVISIT" class="">Time of Visit (HH:MM AM/PM)<span class="MndtryAstr"></span></label>
                  </div>
                </div> 
           </div>  
        	<div class="form-row">
             <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="FIAD_PERCONTACT" maxlength="20" name="FIAD_PERCONTACT" class="form-control IsAlphaFields NoSpecialChar FIADDBfields">
                    <label for="GRBI_CUSFISNAM" class="">Person Contacted<span class="MndtryAstr"></span></label>
                  </div>
                </div>  
                <div class="col-md-4">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary  FIADDBfields" id="FIAD_RELAPPLICANT" name="FIAD_RELAPPLICANT">
                  	<option value="" selected>--Select--</option>
  					 <option  value="Father">Father</option>
  					<option  value="Mother">Mother</option>
  					<option  value="Brother">Brother</option>
  					<option  value="Friend">Friend</option>
					<option  value="Others">Others</option>
				</select>
				<label class="mdb-main-label BTxt9">Relationship with Applicant<span class="MndtryAstr"></span></label>
                  </div>
               </div>
                 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="FIAD_AGEAPPLIC" name="FIAD_AGEAPPLIC" onblur="AgeVal(this,FIAD_AGE);" maxlength="10"   class="form-control ISDatefield FIADDBfields IsNumberFields NoSpecialChar">
                    <label for="FIAD_AGEAPPLIC" class="">Date of Birth<span class="MndtryAstr"></span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>   
        </div>
		
			    <div class="form-row">
                <div class="col-md-4">
                  <!-- Last name -->
                  <div class="md-form">
                    <input type="text" id="FIAD_AGE" name="FIAD_AGE" disabled class="form-control FIADDBfields   ">
                    <label for="FIAD_AGE" class="AGE">Age<span class="MndtryAstr"></span></label>
                  </div>
                </div>
            </div>
		  
        <div class="form-row">
                <div class="col-md-4">
            	<div class="md-form">
                  	<input type="text" id="FIAD_YRLIVEDADDR" maxlength="2" name="FIAD_YRLIVEDADDR" onblur="AgeCompare('FIAD_AGE','FIAD_YRLIVEDADDR','Year Live at Current Address should not greater than Age')" class="form-control   IsNumberFields NoSpecialChar  FIADDBfields">
                    <label for="FIAD_ACCTNO" class="">Years Lived at current address<span class="MndtryAstr"></span></label>
             </div>
            </div>
             <div class="col-md-4">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIADMndtry  FIADDBfields" id="FIAD_RESIDSTATUS" name="FIAD_RESIDSTATUS">
                  	<option value="">Select</option>
  					<option  value="Self owned">Self owned</option>
  					<option  value="Owned by relatives">Owned by relatives</option>
  					<option  value="Rented">Rented</option>
  					<option  value="Paying Guest">Paying Guest</option>
  					<option  value="Owned by Parents">Owned by Parents</option>
  					<option  value="Owned by Friends">Owned by Friends</option>
  					<option  value="Company Accomodation">Company Accomodation</option>
  					<option  value="Lodging">Lodging</option>
				</select>
				<label class="mdb-main-label BTxt9">Residential status<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
             <div class="col-md-4">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIADMndtry FIADDBfields" id="FIAD_EDUQUALIF" name="FIAD_EDUQUALIF">
                    <option value="">Select</option>
  					<option value="Matric">Matric</option>
 					<option value="Undergraduate">Undergraduate</option>
 					<option value="Post Graduate">Post Graduate</option>
 					<option value="Professional">Professional</option>
 					<option value="Others">Others</option>
				</select>
				<label class="mdb-main-label BTxt9">Education Qualification<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
		
	
		  
        <div class="form-row">
           <div class="col-md-4">
             <div class="md-form">
                  <input type="text" id="FIAD_TYPEEDUCATION"  name="FIAD_TYPEEDUCATION" class="form-control NoSpecialChar FIADDBfields">
                  <label for="FIAD_BNKNAME" class="">Type of Degree<span class="MndtryAstr"></span></label>
             </div>
          </div>
                   <div class="col-md-4">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIADMndtry FIADDBfields" id="FIAD_MARITALSTATUS" name="FIAD_MARITALSTATUS">
                  	<option value="">Select</option>
                  	<option value="Single">Single</option>
  					<option  value="Married">Married</option>
  					<option value="Divorce">Divorce</option>
  	               <option  value="Widow">Widow</option>
                    </select>
				<label class="mdb-main-label BTxt9">Marital Status<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
               
                <div class="col-md-4">
                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIADDBfields"  id="FIAD_FAMILYMENBERWORK" name="FIAD_FAMILYMENBERWORK">
                  	<option value="">Select</option>
  					<option  value="1">1</option>
  					<option  value="2">2</option>
  					<option  value="3">3</option>
  					<option  value="4">4</option>
  					<option  value="5">5</option>
				</select>
				<label class="mdb-main-label BTxt9">No of Family member Working<span class="MndtryAstr"></span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
                  	<input type="text" id="FIAD_NOCHILDREN" maxlength="2" name="FIAD_NOCHILDREN" class="IsNumberFieldsSpl form-control NoSpecialChar  FIADDBfields">
                    <label for="FIAD_NOCHILDREN" class="">No of Children<span class="MndtryAstr"></span></label>
             </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="FIAD_NOADULT" maxlength="2" name="FIAD_NOADULT" class="form-control IsNumberFields NoSpecialChar FIADDBfields">
                    <label for="FIAD_NOADULT" class="">Dependent Adults <span class="MndtryAstr"></span></label>
                  </div>
                </div>
    <div class="col-md-4">     
      <div class="md-form">
           <div class="select-radio "> 
               <div class="custom-control custom-radio custom-control-inline">
                 <input type="radio" class="custom-control-input FIADDBfields" value="Yes" id="SPOUYES" name="FIAD_SPOUSWORK">
                 <label class="custom-control-label" for="SPOUYES">Yes</label>
               </div>
               <div class="custom-control custom-radio custom-control-inline">
                   <input type="radio" class="custom-control-input FIADDBfields" value="No" id="SPOUNO" name="FIAD_SPOUSWORK">
                   <label class="custom-control-label" for="SPOUNO">No</label>
               </div>
            </div>
                  <label class="mdb-main-label BTxt9">Spouse Working?<span class="MndtryAstr"></span></label>      
         </div>
      </div>   
    </div>
           <div class="form-row">
        		<div class="col Btxt1">EMPLOYMENT DETAILS</div>
        		<!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
        	</div>        
</br>

 <div class="form-row">
              <div class="col-md-4">     
      <div class="md-form">
              <div class="select-radio"> 
                  <div class="custom-control custom-radio custom-control-inline">
                     <input type="radio" class="custom-control-input FIADDBfields" value="Yes" id="ApplYes" name="FIAD_APPLCREDITCARD">
                     <label class="custom-control-label" for="ApplYes">Yes</label>
                 </div>
                 <div class="custom-control custom-radio custom-control-inline">
                     <input type="radio" class="custom-control-input FIADDBfields" value="No" id="ApplNo" name="FIAD_APPLCREDITCARD">
                     <label class="custom-control-label" for="ApplNo">No</label>
                </div>
            </div>
                  <label class="mdb-main-label BTxt9">Does  Applicant have Credit card<span class="MndtryAstr"></span></label>      
                  </div>
                </div>
             <div class="col-md-4">
                  <div class="md-form">
                  	<input type="text" id="FIAD_ISSUEBANK" name="FIAD_ISSUEBANK" class="form-control  FIADDBfields">
                    <label for="FIAD_ISSUEBANK" class="">Issue Bank<span class="MndtryAstr"></span></label>
                 </div>
             </div>
             <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="FIAD_REMARKS" name="FIAD_REMARKS" class="form-control  FIADDBfields">
                     <label for="FIAD_REMARKS" class="">Remarks<span class="MndtryAstr"></span></label>
                  </div>
             </div>
         </div>
        <div class="form-row">
                <div class="col-md-4">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIADMndtry FIADDBfields" id="FIAD_ENDUSERASST" name="FIAD_ENDUSERASST">
                  	<option value="">Select</option>
  					<option  value="Applicant">Applicant</option>
  					<option  value="Relative">Relative</option>
  					<option  value="Family Member">Family Member</option>
  					<option  value="Friend">Friend</option>
                 </select>
				<label class="mdb-main-label BTxt9">End User of Asset<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
               
               <div class="col-md-4">
                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIADMndtry FIADDBfields" id="FIAD_LOCATIONASST" onchange="OtherLocat();" name="FIAD_LOCATIONASST">
                  	<option value="">Select</option>
  					<option  value="Residence">Residence</option>
  					<option  value="Factory">Factory</option>
  					<option  value="Office">Office</option>
  					<option  value="Others">Others</option>
                   </select>
				<label class="mdb-main-label BTxt9">Location of Asset<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
              <div class="col-md-4">
            	<div class="md-form">
                  	<input type="text" id="FIAD_OTHERLOCAT"  name="FIAD_OTHERLOCAT" class="form-control NoSpecialChar IsAlphaFields FIADDBfields">
                    <label for="FIAD_OTHERLOCAT" class="">Other Location<span class="MndtryAstr">*</span></label>
                 </div>
             </div>
        </div>
      <div class="form-row">
          <div class="col Btxt9">Present Vehicle</div>
       </div>   
    <div class="form-row">
    <div class="col-md-4">
     </div> 
    </div>            
              <div class="form-row">
                <div class="col-md-4">
                  <div class="md-form">
            	     <div class="custom-control custom-radio custom-control-inline">
 					    <input type="checkbox" class="custom-control-input FIADDBfields" id="FIAD_VEHIWHELLER" name="FIAD_VEHIWHELLER">
  					     <label class="custom-control-label" for="FIAD_VEHIWHELLER">2 Wheeler</label>
				     </div>
				</div>
				</div>
                <div class="col-md-4">
                  <div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input FIADDBfields" id="FIAD_VEHICAR" name="FIAD_VEHICAR">
  					<label class="custom-control-label" for="FIAD_VEHICAR">Car</label>
				</div>
				</div>
                  </div>
                <div class="col-md-4">
                  <div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input FIADDBfields" id="FIAD_VEHIOTHER" name="FIAD_VEHIOTHER">
  					<label class="custom-control-label" for="FIAD_VEHIOTHER">Other</label>
				</div>
                 </div>
                </div> 
           </div>
           
           <div class="form-row">
               <div class="col-md-4">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary  FIADDBfields" onchange="CheckFincTWOWheeler();" id="FIAD_VEHISTAGEFINA" name="FIAD_VEHISTAGEFINA">
                  	<option value="">Select</option>
  					<option  value="Financed">Financed</option>
  					<option  value="Owned">Owned</option>
  					<option  value="Company Provided">Company Provided</option>
				</select>
				<label class="mdb-main-label BTxt9">Vehicle Stage<span class="MndtryAstr"></span></label>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="md-form">
                      <select class="mdb-select md-form colorful-select dropdown-primary  FIADDBfields" onchange="CheckFincCAR();" id="FIAD_VEHISTAGEPERSON" name="FIAD_VEHISTAGEPERSON">
                      	<option value="">Select</option>
  					    <option  value="Financed">Financed</option>
  					    <option  value="Owned">Owned</option>
  					     <option  value="Company Provided">Company Provided</option>
				     </select>
				<label class="mdb-main-label BTxt9">Vehicle Stage<span class="MndtryAstr"></span></label>
                  </div>
               </div>
        </div>
       <div class="form-row">
                 <div class="col-md-4">
            	<div class="md-form">
                  	<input type="text" id="FIAD_FINANCERNAME" maxlength="20"  name="FIAD_FINANCERNAME" class=" FINTWO   form-control IsAlphaFields  FIADDBfields">
                    <label for="FIAD_FINANCERNAME" class="">Financier Name<span class="MndtryAstr"></span></label>
             </div>
            </div> 
            <div class="col-md-4">
            	<div class="md-form">
                  	<input type="text" id="FIAD_FINANCERNAMECAR" maxlength="20"  name="FIAD_FINANCERNAMECAR" class=" FINCAR form-control IsAlphaFields  FIADDBfields">
                    <label for="FIAD_FINANCERNAMECAR" class="">Financier Name<span class="MndtryAstr"></span></label>
             </div>
            </div>
          </div>  
           <div class="form-row">
             <div class="col-md-4">
            	<div class="md-form">
                  	<input type="text" id="FIAD_LOANNUMBER" maxlength="15"  name="FIAD_LOANNUMBER" class=" FINTWO form-control NoSpecialChar  FIADDBfields">
                    <label for="FIAD_LOANNUMBER" class="">Loan Number<span class="MndtryAstr"></span></label>
             </div>
            </div>
             <div class="col-md-4">
            	<div class="md-form">
                  	<input type="text" id="FIAD_LOANNUMBERCAR" maxlength="15"  name="FIAD_LOANNUMBERCAR" class=" FINCAR form-control NoSpecialChar  FIADDBfields">
                    <label for="FIAD_LOANNUMBERCAR" class="">Loan Number<span class="MndtryAstr"></span></label>
             </div>
            </div>
          </div>  
           <div class="form-row">
             <div class="col-md-4">
            	<div class="md-form">
                  	<input type="text" id="FIAD_EMI"  maxlength="30" name="FIAD_EMI" class=" FINTWO form-control IsNumberFields NoSpecialChar IsCURCommaFields FIADDBfields">
                    <label for="FIAD_EMI" class="">EMI<span class="MndtryAstr"></span></label>
                </div>
            </div>
            <div class="col-md-4">
            	<div class="md-form">
                  	<input type="text" id="FIAD_EMICAR"  maxlength="30" name="FIAD_EMICAR" class=" FINCAR form-control IsNumberFields NoSpecialChar IsCURCommaFields FIADDBfields">
                    <label for="FIAD_EMICAR" class="">EMI<span class="MndtryAstr"></span></label>
                </div>
            </div>
          </div>
                     <div class="form-row">
        		<div class="col Btxt1">VERIFIER'S OBSERVATIONS </div>
        		<!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
        	</div> 
          </br>
           <div class="form-row">
            <div class="col-md-4">     
      <div class="md-form">
               <div class="select-radio FIADMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Polite" id="CoOPPolit" name="FIAD_COOPERCUSTOMER">
  <label class="custom-control-label" for="CoOPPolit">Polite</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Rude" id="CoOPRude" name="FIAD_COOPERCUSTOMER">
  <label class="custom-control-label" for="CoOPRude">Rude</label>
</div>
</div>
                  <label class="mdb-main-label BTxt9">How Co-operative was the Customer?<span class="MndtryAstr">*</span></label>      
                  </div>
                </div>
                
           <div class="col-md-4">     
      <div class="md-form">
               <div class="select-radio FIADMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Positive" id="NegPositive" name="FIAD_NEIGHREFER">
  <label class="custom-control-label" for="NegPositive">Positive</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Negative" id="NegNegative" name="FIAD_NEIGHREFER">
  <label class="custom-control-label" for="NegNegative">Negative</label>
</div>
</div>
                  <label class="mdb-main-label BTxt9">Neighbours Reference<span class="MndtryAstr">*</span></label>      
                  </div>
                </div>     
               <div class="col-md-4">
                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIADMndtry FIADDBfields" id="FIAD_CHECKWITH" name="FIAD_CHECKWITH">
                  	<option value="">Select</option>
  					<option  value="Neighbour">Neighbour</option>
  					<option  value="Watchman">Watchman</option>
  					<option  value="Name Plate">Name Plate</option>
  					<option  value="Society Board">Society Board</option>
  					<option  value="Company Board">Company Board</option>

				</select>
				<label class="mdb-main-label BTxt9">Checked With<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
               </div>
               
                  <div class="form-row">
                 <div class="col-md-4">
                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIADMndtry FIADDBfields" onchange="NOTenants();" id="FIAD_TYPERESIDENCE" name="FIAD_TYPERESIDENCE">
                  	<option value="">Select</option>
  					<option  value="Independent House">Independent House</option>
  					<option  value="Multi tenant house">Multi tenant house</option>
  					<option  value="Part of Independent House">Part of Independent House</option>
  					<option  value="Flat">Flat</option>
  					<option  value="Standing Chawl- Janata Flat">Standing Chawl- Janata Flat</option>
  					<option  value="Hutment-Sitting Chawl">Hutment-Sitting Chawl</option>
  					<option  value="Row House">Row House</option>

				</select>
				<label class="mdb-main-label BTxt9">Type of Residence<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
                   
               <div class="col-md-4">

            	<div class="md-form">
                  	<input type="text" id="FIAD_NOTENENTS" maxlength="2"  name="FIAD_NOTENENTS" class="form-control IsNumberFields NoSpecialChar FIADDBfields">
                    <label for="FIAD_NOTENENTS" class="">No of Tenants<span class="MndtryAstr"></span></label>
             </div>
            </div>
               
                <div class="col-md-4">
                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIADMndtry FIADDBfields" id="FIAD_LOCALITYRES" name="FIAD_LOCALITYRES">
                  	<option value="">Select</option>
  					<option  value="Posh Locality">Posh Locality</option>
  					<option  value="Village Area">Village Area</option>
  					<option  value="Upper Middle Class">Upper Middle Class</option>
  					<option  value="Slums">Slums</option>
  					<option  value="Middle Class">Middle Class</option>
  					<option  value="Lower Middle Class">Lower Middle Class</option>
  					<option  value="Others">Others</option>
                 	</select>
				<label class="mdb-main-label BTxt9">Locality of Residence<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           
               </div>
               
               
                 <div class="form-row">
               <div class="col-md-4">     
      <div class="md-form">
          
               <div class="select-radio FIADMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Easy" id="Easy" name="FIAD_lOCADDRESS">
  <label class="custom-control-label" for="Easy">Easy</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Difficult" id="Difficult" name="FIAD_lOCADDRESS">
  <label class="custom-control-label" for="Difficult">Difficult</label>
</div>

<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Untraceable" id="Untraceable" name="FIAD_lOCADDRESS">
  <label class="custom-control-label" for="Untraceable">Untraceable</label>
</div>
</div>
                  <label class="mdb-main-label BTxt9">Ease of Location Address<span class="MndtryAstr">*</span></label>      
                  </div>
                </div> 
               
               <div class="col-md-4">     
      <div class="md-form">
          
               <div class="select-radio FIADMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Pukka" id="Pukka" name="FIAD_CONSTRESIDE">
  <label class="custom-control-label" for="Pukka">Pukka</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Semi-Pukka" id="Semi-Pukka" name="FIAD_CONSTRESIDE">
  <label class="custom-control-label" for="Semi-Pukka">Semi-Pukka</label>
</div>

<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Temporary" id="Temporary" name="FIAD_CONSTRESIDE">
  <label class="custom-control-label" for="Temporary">Temporary</label>
</div>
</div>
                  <label class="mdb-main-label BTxt9">Construction of Residence<span class="MndtryAstr">*</span></label>      
                  </div>
                </div> 
        <div class="col-md-4">
                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIADDBfields FIADMndtry" onchange="getExterior()" multiple id="FIAD_EXTERCOMMM" name="FIAD_EXTERCOMMM">
				   <option value="" disabled>Select</option>
				    <option  value="Garden">Garden</option>
  					<option  value="Elevator">Elevator</option>
  					<option  value="Car Park">Car Park</option>
  					<option  value="Security">Security</option>
  					<option  value="Building Wall">Building Wall</option>
  					<option  value="Fenced-Compound Wall">Fenced-Compound Wall</option>
  					<option  value="Others">Others</option>
				</select>
				<label class="mdb-main-label BTxt9">Exterior Comments<span class="MndtryAstr">*</span></label>
                  </div>
               </div>       
                </div>
                
                
                    <div class="form-row">
               <div class="col-md-4">     
      <div class="md-form">
          
               <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Patchy" id="BuildingPatchy" name="FIAD_BUILDWALL">
  <label class="custom-control-label" for="BuildingPatchy">Patchy</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Clean" id="BuildingClean" name="FIAD_BUILDWALL">
  <label class="custom-control-label" for="BuildingClean">Clean</label>
</div>

</div>
                  <label class="mdb-main-label BTxt9">Building Wall<span class="MndtryAstr"></span></label>      
                  </div>
                </div> 
               
               <div class="col-md-4">     
      <div class="md-form">
          
               <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Patchy" id="compPatchy" name="FIAD_COMPOUNDWALLL">
  <label class="custom-control-label" for="compPatchy">Patchy</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="compClean" id="compClean" name="FIAD_COMPOUNDWALLL">
  <label class="custom-control-label" for="compClean">Clean</label>
</div>

</div>
                  <label class="mdb-main-label BTxt9">Fenced/Compound Wall<span class="MndtryAstr"></span></label>      
                  </div>
                </div> 
                
                
       <div class="col-md-4">

            	<div class="md-form">
                  	<input type="text" id="FIAD_CERPETSQ" maxlength="6" name="FIAD_CERPETSQ" class="form-control IsNumberFields NoSpecialChar FIADDBfields">
                    <label for="FIAD_NOTENENTS" class="">Carpet Area in Sq.ft<span class="MndtryAstr"></span></label>
             </div>
            </div>         
                
                
                
                
                </div>
           <div class="form-row">      
        <div class="col-md-4">
                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIADDBfields " onchange="getInterior();" multiple id="FIAD_INTERERRESID" name="FIAD_INTERERRESID">
				   <option value="" disabled>Select</option>
				   <option  value="Semi-Pukka">Semi-Pukka</option>
  					<option  value="Temporary">Temporary</option>
  					<option  value="Curtains">Curtains</option>
  					<option  value="Sofa">Sofa</option>
  					<option  value="Venetian Blinds">Venetian Blinds</option>
				</select>
				<label class="mdb-main-label BTxt9">Interior Conditions<span class="MndtryAstr"></span></label>
                  </div>
               </div>       
                <div class="col-md-4">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIADDBfields " onchange="getAssets();" multiple id="FIAD_ASSTSEENRESID" name="FIAD_ASSTSEENRESID">
				    <option value="" disabled>Select</option>
				    <option  value="Television">Television</option>
				     <option  value="Refrigerator">Refrigerator</option>
				      <option  value="Music System">Music System</option>
				       <option  value="PC">PC</option>
				        <option  value="Two Wheeler">Two Wheeler</option>
				         <option  value="Card">Card</option>
				          <option  value="Air Conditioner">Air Conditioner</option>
  				
				</select>
				<label class="mdb-main-label BTxt9">Assets seen at Residence<span class="MndtryAstr"></span></label>
                  </div>
               </div>
               
                <div class="col-md-4">     
      <div class="md-form">
          
               <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Yes" id="PolityYes" name="FIAD_POLITYSEEN">
  <label class="custom-control-label" for="PolityYes">Yes</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="No" id="PolityNo" name="FIAD_POLITYSEEN">
  <label class="custom-control-label" for="PolityNo">No</label>
</div>

</div>
                  <label class="mdb-main-label BTxt9">Picture/Potrait of Political Leader seen<span class="MndtryAstr"></span></label>      
                  </div>
                </div> 
                
                
             </div>
                 <div class="form-row">
        		<div class="col Btxt1">INFORMATION OBTAINED FROM NEIGHBOUR APPLICANT ADDRESS IS LOCKED</div>
        		<!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
        	</div>    
          </br>
           <div class="form-row">
          <div class="col-md-4">     
          <div class="md-form">
            <div class="select-radio"> 
               <div class="custom-control custom-radio custom-control-inline">
                   <input type="radio" class="custom-control-input FIADDBfields" value="Yes" id="APPResYes" name="FIAD_APPLICASTAYRES">
                   <label class="custom-control-label" for="APPResYes">Yes</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                 <input type="radio" class="custom-control-input FIADDBfields" value="No" id="APPResNo" name="FIAD_APPLICASTAYRES">
                <label class="custom-control-label" for="APPResNo">No</label>
              </div>
          </div>
       <label class="mdb-main-label BTxt9">Does the Applicant Stay at his Residence<span class="MndtryAstr"></span></label>      
        </div>
       </div> 
            <div class="col-md-4">

            	<div class="md-form">
                  	<input type="text" id="FIAD_APPRAGEAPPL" maxlength="2" name="FIAD_APPRAGEAPPL" class="form-control IsNumberFields NoSpecialChar FIADDBfields">
                    <label for="FIAD_BNKNAME" class="">Approximate age of the Applicant<span class="MndtryAstr"></span></label>
             </div>
            </div>
            <div class="col-md-4">
            	<div class="md-form">
                  	<input type="text" id="FIAD_APPLHOMETIME" maxlength="10" name="FIAD_APPLHOMETIME" class="form-control  IsTimeField   FIADDBfields">
                    <label for="FIAD_APPLHOMETIME" class="">Approximate time when Applicant is available at home (HH:MM AM/PM)<span class="MndtryAstr"></span></label>
             </div>
            </div>
             </div>    

             <div class="form-row">
            <div class="col-md-4">
            	<div class="md-form">
                  	<input type="text" id="FIAD_BNKNAME" maxlength="2" name="FIAD_BNKNAME" class="form-control IsNumberFields NoSpecialChar  FIADDBfields">
                    <label for="FIAD_BNKNAME" class="">Number of family Member in the house<span class="MndtryAstr"></span></label>
             </div>
            </div>
               <div class="col-md-4">     
      <div class="md-form">
               <div class="select-radio FIADBKDTMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="Yes" id="RecYes" onclick="RecommReason();"  name="FIAD_RECOMMENDED">
  <label class="custom-control-label" for="RecYes">Yes</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIADDBfields" value="No" id="RecNo" onclick="RecommReason();"  name="FIAD_RECOMMENDED">
  <label class="custom-control-label" for="RecNo">No</label>
</div>
</div>
                  <label class="mdb-main-label BTxt9">Recommended<span class="MndtryAstr">*</span></label>      
                  </div>
                </div> 
                 <div class="col-md-4"> 
                <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIADDBfields " multiple onchange="getReasons()" id="FIAD_REASONS" name="FIAD_REASONS">
                    <option value="" disabled>Select</option>
                    <option  value="Residence cum office">Residence cum office</option>
  					<option  value="Defaulter">Defaulter</option>
  					<option  value="Not Targeted Area">Not Targeted Area</option>
  					<option  value="Person does not exist">Person does not exist</option>
  					<option  value="Outside Geo limits">Outside Geo limits</option>
  					<option  value="Address not traceable">Address not traceable</option>
  					<option  value="Applicant or family member not met">Applicant or family member not met</option>
  					<option  value="Details mismatch">Details mismatch</option>
  					<option  value="Door Locked">Door Locked</option>
  					<option  value="Negative Neighbourhood check">Negative Neighbourhood check</option>
  					<option  value="poor Living Conditions">poor Living Conditions</option>
				</select>
				<label class="mdb-main-label BTxt9">Reasons<span class="MndtryAstr">*</span></label>
                  </div>
                  </div>
               </div>
             <div class="form-row">
             <div class="col-md-4">
            	<div class="md-form">
                  	<input type="text" id="FIAD_ANYOTHERRESONS"  name="FIAD_ANYOTHERRESONS" class="form-control  FIADDBfields">
                    <label for="FIAD_ANYOTHERRESONS" class="">Any Other Reasons<span class="MndtryAstr"></span></label>
             </div>
            </div>
            </div>
			
			<div class="form-row ">
                  <div class="col-md-4">
                    <div class="col Btxt10">Upload Photos</div>
                     <div data-for="BankDetail1" class="BankDetail1"> 
                     </div>
                     <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="BankDetail1" style="display:none">
                        <div data-row="" class="card-body px-lg-5 pt-0 DYNROW">
                           </br>
                           <input type="text" id="FIUP_PRCSID" hidden="hidden" name="FIUP_PRCSID" value="" class="form-control FIUPDBfields">
                           <input type="text" id="FIUP_ACTIVITYID" hidden="hidden" name="FIUP_ACTIVITYID" class="form-control FIUPDBfields">
                           <input type="text" id="FIUP_DTCREATED" hidden="hidden" name="FIUP_DTCREATED" class="form-control FIUPDBfields">
                           <input type="text" id="FIUP_CREATEDBY" hidden="hidden" name="FIUP_CREATEDBY" class="form-control FIUPDBfields">
                           <input type="text" id="FIUP_DTMODIFIED" hidden="hidden" name="FIUP_DTMODIFIED" class="form-control FIUPDBfields">
                           <input type="text" id="FIUP_MODIFIEDBY" hidden="hidden" name="FIUP_MODIFIEDBY" class="form-control FIUPDBfields">
						   
						   <input type="text" id="FIUP_UNIQEID" hidden="hidden" name="FIUP_UNIQEID" class="form-control FIUPDBfields">
                           <input type="text" id="FIUP_ALTNUNIQEID" hidden="hidden" name="FIUP_ALTNUNIQEID" class="form-control FIUPDBfields">
                           <div class="form-row">
                              <div class="col">
                                 <div class="md-form " >
                                    <table>
                                       <tr>
                                          <td>
                                             <div id="FIUP_ATTACHMENTUPLOAD"  class="file-field">
                                                <a class="">
                                                <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                                <input type="file"  name="datafile" onchange="DocFldUpldHndlr_V1(this,'FIUP_ATTACHMENT'+$(this).closest('.DYNROW').attr('data-row'),'FIUP_ATTACHMENT','FIRES','FIRES','FIRES',$(this).closest('.DYNROW'))" class="FIUP_ATTACHMENT"  >
                                                </a>
                                                <input type="text" id="FIUP_ATTACHMENT" hidden="hidden" data-Validate="FIUP_ATTACHMENT"  name="FIUP_ATTACHMENT" class="form-control PHUPLOAD  File FIUPDBfields">
                                                <span class="name">Upload Photos</span> 
                                             </div>
                                          </td>
                                          <div class="md-form">
                                             <div class="md-form Formcol-mdLR">
                                                <div class="FIUP_ATTACHMENT" style="display:none"> 
                                                <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="" class=" DELBTN DELETEDOCUMNETS"/>      
                                       
                                        <!--  <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile($('#APDG_PDATTACHMNT'+$(event.target).closest('.DYNROW').attr('data-row')));" 
                                                alt="Cinque Terre" width="20" height="20">   -->
                                                <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" 
                                                onclick="GrdDocDwnld('FIUP_ATTACHMENT'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" 
                                                alt="Cinque Terre" width="35" height="25"> </div>
                                             </div>
                                          </div>
                                       </tr>
                                    </table>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="HyperControls form-row" >
                        <a onclick="AddPageMultiData('',$('#PrcsID').val(),'','BankDetail1','FIUPDBfields');" class="Btxt4 FltRight ADDBTN "  href="#">+ Add</a>
                        <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                     </div>
                  </div>
             </div>
			
			
			
             <div class="form-row Initiate">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save1" data-aria="LSW_TFIAPPLDETAILS|FIAD|FIAD_ALTNUNIQEID" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button> 
                     <button type="button" id="Save1" data-aria="LSW_TFIAPPLDETAILS|FIAD|FIAD_ALTNUNIQEID" class="btn btn-Syel waves-effect waves-light FormSave">Submit</button>  
                 </div>
            </div>
        </form>
        </div>
      </div>
    </div>
  </div>
  <!-- card -->

 </div>
 </div>
                                    
    <script type="text/javascript" src="ThemeproLO/ViewRpt/Script/FIResidenceInfo/LoadSubmit.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/ViewRpt/Script/FIResidenceInfo/Validation.js${DMY13}"></script>      -    





                                                  