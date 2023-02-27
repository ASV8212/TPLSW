                <!--Main row-->
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
                            <!--Admin panel-->
                            <div class="admin-panel">
<!-- Start -->
         <input type="text" id="FIED_PRCSID" hidden="hidden" name="FIED_PRCSID" class="form-control FIEDDBfields">
         <input type="text" id="FIED_ACTIVITYID" hidden="hidden" name="FIED_ACTIVITYID" class="form-control FIEDDBfields">
         <input type="text" id="FIED_CREATEDBY" hidden="hidden" name="FIED_CREATEDBY" class="form-control FIEDDBfields">
         <input type="text" id="FIED_DTCREATED" hidden="hidden" name="FIED_DTCREATED" class="form-control FIEDDBfields">
         <input type="text" id="FIED_MODIFIEDBY" hidden="hidden" name="FIED_MODIFIEDBY" class="form-control FIEDDBfields">
         <input type="text" id="FIED_DTMODIFIED" hidden="hidden" name="FIED_DTMODIFIED" class="form-control FIEDDBfields">
         
         <input type="text" id="FIED_UNIQEID" hidden="hidden" name="FIED_UNIQEID" class="form-control FIEDDBfields">
		  <input type="text" id="FIED_DATEINIT" hidden="hidden" name="FIED_DATEINIT" class="form-control FIEDDBfields">
         
         <input type="text" id="FIED_ALTNUNIQEID" hidden="hidden" name="FIED_ALTNUNIQEID" class="form-control FIEDDBfields">
		 
<input type="text" id="FIED_ITEMSEENPREMI" hidden="hidden" name="FIED_ITEMSEENPREMI" class="form-control FIEDDBfields">
<input type="text" id="FIED_REASONSI" hidden="hidden" name="FIED_REASONSI" class="form-control FIEDDBfields">

<input type="text" id="FIED_UPLOAD" hidden="hidden" name="FIED_UPLOAD" class="form-control FIEDDBfields">

  <!--  card -->
  <div class="card cardNS">
    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0">
        <form>
        	</br>
        	<div class="form-row">
        		<div class="col Btxt3">Employment Information</div>
        		<!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
        	</div>
             <div class="form-row">
           
               <div class=" col-md-8">
                 
                  <div class="md-form">
                    <input type="text" id="FIED_OFFICEADD" name="FIED_OFFICEADD" maxlength="80" class="form-control AddrNoSpecialChar FIEDDBfields  ">
                    <label for="FIED_OFFICEADD" class="">Office Address<span class="MndtryAstr"></span></label>
                  </div>
                </div>
              <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="FIED_LANDMARK" name="FIED_LANDMARK" maxlength="25" class=" FIEDMndtry form-control FIEDDBfields  ">
                    <label for="FIED_LANDMARK" class=""> Landmark <span class="MndtryAstr">*</span></label>
                  </div>
                </div>  
                </div>   
        <div class="form-row">
              <div class="col-md-4">
            <div class="md-form">
               <div class="select-radio FIEDMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Yes" id="AddYes" name="FIED_ADDSCOMMU">
  <label class="custom-control-label" for="AddYes">Yes</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="No" id="Addno" name="FIED_ADDSCOMMU">
  <label class="custom-control-label" for="Addno">No</label>
</div>
</div>
  <label class="mdb-main-label BTxt9">Address Confirmation<span class="MndtryAstr">*</span></label>      
                  </div>
                  </div>
        <div class="col-md-4">
          <div class="md-form">
                    <input type="text" id="FIED_DTVISIT" maxlength="10" name="FIED_DTVISIT" onblur="DateInspect(this,'FIED_DATEINIT')"  class="FIEDMndtry form-control ISFutureDateFields NoSpecialChar ISDatefield FIEDDBfields">
                    <label for="FIED_DTVISIT" class="">Date of Visit<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker" />
               </div>
            </div>
          <div class="col-md-4">
                  <div class="md-form">
                   <input type="text" id="FIED_TIMEVISIT" maxlength="10"  name="FIED_TIMEVISIT" class="form-control IsTimeField FIEDDBfields">
                    <label for="FIED_TIMEVISIT" class="">Time of Visit (HH:MM AM/PM)<span class="MndtryAstr"></span></label>
                  </div>
               </div>
           </div>
           <!-- Employment Start -->
       <div class="form-row SALARY"  style="display:none" >      
     <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary FIEDDBfields " id="FIED_EMPTYPEJOP" name="FIED_EMPTYPEJOP">
                  	<option value="" selected>--Select--</option>
  					<option value="Permanent">Permanent</option>
  					<option value="Probation">Probation</option>
  					<option value="Contract Worker">Contract Worker</option>
  					<option value="Temporary Worker">Temporary Worker</option>
                  </select>
				<label class="mdb-main-label BTxt9">Type of Job<span class="MndtryAstr"></span></label>
             </div>
            </div>
            
               <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary FIEDDBfields " id="FIED_EMPWORKAS" name="FIED_EMPWORKAS">
                  	<option value="" selected>--Select--</option>
  					<option value="Assistant">Assistant</option>
  					<option value="Stenographer">Stenographer</option>
  					<option value="Clerk">Clerk</option>
  					<option value="Junior Management">Junior Management</option>
  					<option value="Skilled Labour">Skilled Labour</option>
  					<option value="Senior or Middle Management">Senior or Middle Management</option>
  					<option value="Typist">Typist</option>
  					<option value="Supervisor">Supervisor</option>
  					<option value="Others">Others</option>
                   </select>
				<label class="mdb-main-label BTxt9">Applicant Working As<span class="MndtryAstr"></span></label>
             </div>
            </div>
            <div class="col-md-4">
            <div class="md-form">
               <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Yes" id="JopYes" name="FIED_EMPJOPTRANS">
  <label class="custom-control-label" for="JopYes">Yes</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="No" id="JopNo" name="FIED_EMPJOPTRANS">
  <label class="custom-control-label" for="JopNo">No</label>
</div>
</div>
  <label class="mdb-main-label BTxt9">Applicant Job Transferable<span class="MndtryAstr"></span></label>      
                  </div>
                  </div>
            </div>
     <div class="form-row SALARY "  style="display:none">
        		<div class="col Btxt1">CURRENT ORGANIZATION</div>
        		<!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
        	</div>
        	
         <div class="form-row SALARY "  style="display:none">	               
          <div class="col-md-4">
                  
                  <div class="md-form">
                   <input type="text" id="FIED_EMPNAMECOMP" maxlength="25"  name="FIED_EMPNAMECOMP" class="form-control IsAlphaFields FIEDDBfields   ">
                    <label for="GRAI_MOBNOI" class="">Name of Company<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               
               <div class="col-md-4">
                  
                  <div class="md-form">
                   <input type="text" id="FIED_EMPYRSSEVICE" maxlength="2"  name="FIED_EMPYRSSEVICE" class="IsNumberFields NoSpecialChar form-control FIEDDBfields   ">
                    <label for="FIED_EMPYRSSEVICE" class="">No. Of Years of Service<span class="MndtryAstr">*</span></label>
                  </div>
               </div> 
               
               <div class="col-md-4">
                  
                  <div class="md-form">
                   <input type="text" id="FIED_EMPSALARYDRA" maxlength="30"  name="FIED_EMPSALARYDRA" class="IsNumberFields NoSpecialChar IsCURCommaFields form-control FIEDDBfields   ">
                    <label for="FIED_EMPSALARYDRA" class="">Salary Drawn<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               </div>  
               
               <div class="form-row SALARY "  style="display:none">	               
          <div class="col-md-4">
                  
                  <div class="md-form">
                   <input type="text" id="FIED_EMPTELEPH" maxlength="12"  name="FIED_EMPTELEPH" class="IsNumberFields NoSpecialChar form-control FIEDDBfields   ">
                    <label for="FIED_EMPTELEPH" class="">Telephone No<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               
               <div class="col-md-4">
                  
                  <div class="md-form">
                   <input type="text" id="FIED_EMPMOBILE" maxlength="10"  name="FIED_EMPMOBILE" class="IsNumberFields NoSpecialChar form-control FIEDDBfields   ">
                    <label for="FIED_EMPMOBILE" class="">Mobile No<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               
      <div class="col-md-4">
            <div class="md-form">
               <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Yes" id="VSCYes" name="FIED_EMPVISITCARDOB">
  <label class="custom-control-label" for="VSCYes">Yes</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="No" id="VSCNo" name="FIED_EMPVISITCARDOB">
  <label class="custom-control-label" for="VSCNo">No</label>
</div>
</div>
  <label class="mdb-main-label BTxt9">Visiting Card Obtained<span class="MndtryAstr"></span></label>      
                  </div>
                  </div>
               </div>    
           
       <div class="form-row SALARY"  style="display:none">
        		<div class="col Btxt1">PREVIOUS EMPLOYER DETAILS (IF WORKING < 1 YEAR IN CURRENT ORGANIZATION)</div>
       </div>
      <div class="form-row SALARY ">	               
          <div class="col-md-4">
                  
                  <div class="md-form">
                   <input type="text" id="FIED_EMPPRNAMECOMP" maxlength="25"  name="FIED_EMPPRNAMECOMP" class="form-control IsAlphaFields FIEDDBfields   ">
                    <label for="FIED_EMPPRNAMECOMP" class="">Name of Company<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               
               <div class="col-md-4">
                  
                  <div class="md-form">
                   <input type="text" id="FIED_EMPPRYRSSEVICE" maxlength="2"  name="FIED_EMPPRYRSSEVICE" class="IsNumberFields form-control FIEDDBfields   ">
                    <label for="FIED_EMPPRYRSSEVICE" class="">No. Of Years of Service<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               
               <div class="col-md-4">
                  
                  <div class="md-form">
                   <input type="text" id="FIED_EMPPRSALARYDRA" maxlength="10"  name="FIED_EMPPRSALARYDRA" class="IsNumberFields form-control FIEDDBfields   ">
                    <label for="FIED_EMPPRSALARYDRA" class="">Salary Drawn<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               </div>  
               
               <div class="form-row SALARY "  style="display:none">	               
          <div class="col-md-4">
                  
                  <div class="md-form">
                   <input type="text" id="FIED_EMPPRTELEPH" maxlength="10"  name="FIED_EMPPRTELEPH" class="IsNumberFields form-control FIEDDBfields   ">
                    <label for="FIED_EMPPRTELEPH" class="">Telephone No<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               
               <div class="col-md-4">
                  
                  <div class="md-form">
                   <input type="text" id="FIED_EMPPRMOBILE" maxlength="10"  name="FIED_EMPPRMOBILE" class="IsNumberFields form-control FIEDDBfields   ">
                    <label for="FIED_EMPPRMOBILE" class="">Mobile No<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               
      <div class="col-md-4">
            <div class="md-form">
               <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Yes" id="VSCObtYes" name="FIED_EMPPRVISITCARDOB">
  <label class="custom-control-label" for="VSCObtYes">Yes</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="No" id="VSCObtNo" name="FIED_EMPPRVISITCARDOB">
  <label class="custom-control-label" for="VSCObtNo">No</label>
</div>
</div>
  <label class="mdb-main-label BTxt9">Visiting Card Obtained<span class="MndtryAstr"></span></label>      
                  </div>
                  </div>
               </div>   

        <!-- Employment End -->
     <!-- SELF EMP START -->
         
        <div class="form-row SELFEMP"  style="display:none">
            <div class="col-md-4">
                <div class="md-form">
                    <input type="text" id="FIED_DESIAPPLI" maxlength="20" name="FIED_DESIAPPLI" class="form-control IsAlphaFields FIEDDBfields ">
                    <label for="FIED_DESIAPPLI" class="">Designation of Applicant<span class="MndtryAstr"></span></label>
                 </div>
             </div>
             <div class="col-md-4">
                  <div class="md-form">
                   <input type="text" id="FIED_PERSONMET" maxlength="20" name="FIED_PERSONMET" class="form-control IsAlphaFields FIEDDBfields ">
                    <label for="FIED_PERSONMET" class="">Person met<span class="MndtryAstr"></span></label>
                  </div>
             </div>
             <div class="col-md-4">
                  <div class="md-form">
                   <input type="text" id="FIED_DESIPERSONMET" maxlength="20"  name="FIED_DESIPERSONMET" class="form-control IsAlphaFields FIEDDBfields   ">
                    <label for="FIED_DESIPERSONMET" class="">Designation of the Person met<span class="MndtryAstr"></span></label>
                  </div>
             </div>
             </div>  
              <div class="form-row SELFEMP" style="display:none">
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="FIED_TELEPHONE" maxlength="12" name="FIED_TELEPHONE" class="form-control IsNumberFields NoSpecialChar  FIEDDBfields ">
                    <label for="FIED_TELEPHONE" class="">Telephone No<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                
                <div class="col-md-4">
                  
                  <div class="md-form">
                   <input type="text" id="FIED_MOBILE" maxlength="10"  name="FIED_MOBILE" class="form-control IsNumberFields NoSpecialChar FIEDDBfields   ">
                    <label for="FIED_MOBILE" class="">Mobile No<span class="MndtryAstr"></span></label>
                  </div>
               </div>
               
                <div class="col-md-4">
                  
                  <div class="md-form">
                   <input type="text" id="FIED_NOOFYEARSBUSIN" maxlength="2"  name="FIED_NOOFYEARSBUSIN" class="IsNumberFields form-control IsNumberFields NoSpecialChar FIEDDBfields   ">
                    <label for="FIED_NOOFYEARSBUSIN" class="">No of years Present in Business<span class="MndtryAstr"></span></label>
                  </div>
               </div>
           
        </div>  
         <div class="form-row SELFEMP "  style="display:none">
               <div class="col-md-4">
            <div class="md-form">
               <div class="select-radio  SENPMND"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Yes" id="CardYes" name="FIED_VISTINGCARDOBT">
  <label class="custom-control-label" for="CardYes">Yes</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="No" id="Cardno" name="FIED_VISTINGCARDOBT">
  <label class="custom-control-label" for="Cardno">No</label>
</div>


</div>
                  <label class="mdb-main-label BTxt9">Visting Card Obtained<span class="MndtryAstr">*</span></label>      
                  </div>
                  </div>
          <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary FIEDDBfields SENPMND" id="FIED_TYPEOFBUSINE" name="FIED_TYPEOFBUSINE">
                  	  <option value="" selected>--Select--</option>
  					  <option value="Public Ltd">Public Ltd</option>
  					  <option value="Partnership">Partnership</option>
  					  <option value="Private Ltd">Private Ltd</option>
  					  <option value="Proprietorship">Proprietorship</option>
  					  <option value="Others">Others</option>
				 </select>
				<label class="mdb-main-label BTxt9">Type of Business<span class="MndtryAstr">*</span></label>
             </div>
            </div>   
            <div class="col-md-4">
                 <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIEDDBfields SENPMND" onchange="NatureOfBuss();" id="FIED_NATUREOFBUSIN" name="FIED_NATUREOFBUSIN">
                  	   <option value="" selected>--Select--</option>
  					   <option value="Professional">Professional</option>	
  					   <option value="Manufacture">Manufacture</option>	 
  					   <option value="Trade Shopkeeper">Trade Shopkeeper</option>	 
  					   <option value="Service Provider">Service Provider</option>	  
				   </select>
				   <label class="mdb-main-label BTxt9">Nature of business<span class="MndtryAstr">*</span></label>
                </div>
           </div>             
        </div>
        <div class="form-row SELFEMP"  style="display:none">
        <div class="col-md-4">
              <div class="md-form">
                 <select class="mdb-select md-form colorful-select dropdown-primary FIEDDBfields " id="FIED_SERVICEPROV" name="FIED_SERVICEPROV">
                  	  <option value="" selected>--Select--</option>
  					  <option value="Sevice Provider">Commission Agent</option>
  					  <option value="Broker">Broker</option>
  					  <option value="Tutor or Personal Care">Tutor or Personal Care</option>
  					  <option value="LIC Agent">LIC Agent</option>
  					  <option value="Sevice Provider">STD-PCO Booth</option>
  					  <option value="Other">Other</option>		 
				</select>
				<label class="mdb-main-label BTxt9">If Service Provider<span class="MndtryAstr"></span></label>
            </div>
        </div>    
        <div class="col-md-4">
             <div class="md-form">
                  <input type="text" id="FIED_PRODUCTDEALT" maxlength="25" name="FIED_PRODUCTDEALT" class="form-control NoSpecialChar FIEDDBfields ">
                  <label for="FIED_PRODUCTDEALT" class="">Product Dealt<span class="MndtryAstr"></span></label>
             </div>
       </div>
        <div class="col-md-4">
            <div class="md-form">
               <div id="OffOwner"  class="select-radio "> 
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input FIEDDBfields" value="Owned" id="OFFOwn" name="FIED_OFFICEOWNER">
                        <label class="custom-control-label" for="OFFOwn">Owned</label>
                   </div>
                   <div class="custom-control custom-radio custom-control-inline">
                         <input type="radio" class="custom-control-input FIEDDBfields" value="Rented" id="OFFRented" name="FIED_OFFICEOWNER">
                         <label class="custom-control-label" for="OFFRented">Rented</label>
                   </div>
                   <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input FIEDDBfields" value="Pagdi" id="OffPagdi" name="FIED_OFFICEOWNER">
                        <label class="custom-control-label" for="OffPagdi">Pagdi</label>
                   </div>
              </div>
                  <label class="mdb-main-label BTxt9">Office Ownership<span class="MndtryAstr">*</span></label>      
           </div>       
       </div>
       </div>
       <div class="form-row SELFEMP " style="display:none">
            <div class=" col-md-4">
               <div class="md-form">
                  <input type="text" id="FIED_MOOFEMPWORKOFFIC" maxlength="5" name="FIED_MOOFEMPWORKOFFIC" class="form-control IsNumberFields NoSpecialChar  FIEDDBfields  ">
                  <label for="FIED_MOOFEMPWORKOFFIC" class="">No of Employees Working in Office<span class="MndtryAstr"></span></label>
               </div>
            </div>
            <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="FIED_NOOFBRANCHES" maxlength="5" name="FIED_NOOFBRANCHES" class="form-control IsNumberFields NoSpecialChar FIEDDBfields  ">
                    <label for="FIED_NOOFBRANCHES" class=""> No of Branches <span class="MndtryAstr"></span></label>
                 </div>
            </div>  
            <div class=" col-md-4">
                <div class="md-form">
                    <input type="text" id="FIED_AVGMONTHTURNOV" maxlength="30" name="FIED_AVGMONTHTURNOV" class="form-control IsNumberFields IsCURCommaFields NoSpecialChar FIEDDBfields  ">
                    <label for="FIED_AVGMONTHTURNOV" class=""> Average Monthly Turnover(if Self Employed) <span class="MndtryAstr"></span></label>
                </div>
           </div>  
      </div>  
      <div class="form-row SELFEMP" style="display:none">
           <div class=" col-md-4">
                <div class="md-form">
                    <input type="text" id="FIED_NOOFCUSTOMER" maxlength="5" name="FIED_NOOFCUSTOMER" class="form-control IsNumberFields NoSpecialChar FIEDDBfields ">
                    <label for="FIED_NOOFCUSTOMER" class="">No of Customers Per Day <span class="MndtryAstr"></span></label>
               </div>
           </div>  
      </div>
 <!-- SELF EMP    END -->
           <div class="form-row">
        		<div class="col Btxt1">VERIFIER'S OBSERVATION</div>
        		<!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
        	</div>
        	</br>
        	 <div class="form-row ">
        	 <div class="col-md-4">
            <div class="md-form">
               <div class="select-radio FIEDMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Yes" id="BusinYes" name="FIED_BUSCARDOUTSIDE">
  <label class="custom-control-label" for="BusinYes">Yes</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="No" id="BusinNo" name="FIED_BUSCARDOUTSIDE">
  <label class="custom-control-label" for="BusinNo">No</label>
</div>
</div>
      <label class="mdb-main-label BTxt9">Business Board seen Outside Office<span class="MndtryAstr">*</span></label>      
                  </div>    
               
       </div>
        <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary FIEDDBfields FIEDMndtry" id="FIED_APPLICNTVERIFIE" name="FIED_APPLICNTVERIFIE">
                  	<option value="" selected>--Select--</option>
  					<option value="Receptionist">Receptionist</option>	
  					<option value="Colleague">Colleague</option>	 
  					<option value="Security">Security</option>	 
  					<option value="Others">Others</option>	 	 
				</select>
				<label class="mdb-main-label BTxt9">Applicant Name Verified From<span class="MndtryAstr">*</span></label>
             </div>
            </div>    
       
               <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary FIEDDBfields FIEDMndtry" id="FIED_TYPEOFOFFICE" name="FIED_TYPEOFOFFICE">
                  	<option value="" selected>--Select--</option>
                  	<option value="Independent Office">Independent Office</option>	 
                  	<option value="Industry-office">Industry-office</option>	 
                  	<option value="Small scale or Shed">Small scale or Shed</option>	 
                  	<option value="Shared Office">Shared Office</option>	 
                  	<option value="Business Cente">Business Cente</option>	 
                  	<option value="Shop">Shop</option>	 
                  	<option value="Resident Cum Office">Resident Cum Office</option>	
                  	<option value="Office Complex">Office Complex</option>	
                  	<option value="Clinic">Clinic</option>
                  	<option value="Others">Others</option>
  						  
				</select>
				<label class="mdb-main-label BTxt9">Type of Office<span class="MndtryAstr">*</span></label>
             </div>
            </div>    
       </div>
        	  
       <div class="form-row ">
           
    
          <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary FIEDDBfields FIEDMndtry" id="FIED_LOCALITYOFOFFICE" name="FIED_LOCALITYOFOFFICE">
                  	<option value="" selected>--Select--</option>
  					<option value="Commercial Complex">Commercial Complex</option>
  					<option value="Residential">Residential</option>
  					<option value="Small scale Industrial area">Small scale Industrial area</option>
  					<option value="Plant">Plant</option>
  					<option value="Shop or Office Complex">Shop or Office Complex</option>
  					<option value="Residential">Residential</option>
  					<option value="Industry or Factor">Industry or Factor</option>
  					<option value="Business Centre">Business Centre</option>
  					<option value="Others">Others</option>
              </select>
				<label class="mdb-main-label BTxt9">Locality  of Office<span class="MndtryAstr">*</span></label>
             </div>
            </div>   
            <div class="col-md-4">
            <div class="md-form">
               <div class="select-radio "> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Pukka" id="Pukka" name="FIED_CONSTRUCTIONOFFI">
  <label class="custom-control-label" for="Pukka">Pukka</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Semi-Pakka" id="Semi-Pukka" name="FIED_CONSTRUCTIONOFFI">
  <label class="custom-control-label" for="Semi-Pukka">Semi-Pukka</label>
</div>

<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Temporary" id="Temporary" name="FIED_CONSTRUCTIONOFFI">
  <label class="custom-control-label" for="Temporary">Temporary</label>
</div>

</div>
                  <label class="mdb-main-label BTxt9">Construction Office<span class="MndtryAstr"></span></label>      
                  </div>    
               
       </div>
            
      <div class="col-md-4">
            <div class="md-form">
               <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Good" id="good" name="FIED_EXTERIER">
  <label class="custom-control-label" for="good">Good</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Average" id="Average" name="FIED_EXTERIER">
  <label class="custom-control-label" for="Average">Average</label>
</div>

<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Poor" id="Poor" name="FIED_EXTERIER">
  <label class="custom-control-label" for="Poor">Poor</label>
</div>

</div>
                  <label class="mdb-main-label BTxt9">Exteriors<span class="MndtryAstr"></span></label>      
                  </div>    
 </div>     
            </div>
            
          <div class="form-row ">
           
              <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary FIEDDBfields " id="FIED_INTERIER" name="FIED_INTERIER">
                  	<option value="" selected>--Select--</option>
                  	<option value="Painted">Painted</option>
                  		<option value="Carpeted" >Carpeted</option>
                  			<option value="Curtains" >Curtains</option>
                  				<option value="Clean" >Clean</option>
	               </select>
				<label class="mdb-main-label BTxt9">Interiors<span class="MndtryAstr"></span></label>
             </div>
            </div>  
            
             <div class="col-md-4">
            <div class="md-form">
               <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Easy" id="Easy" name="FIED_EASELOCATIOFF">
  <label class="custom-control-label" for="Easy">Easy</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Difficult" id="Difficult" name="FIED_EASELOCATIOFF">
  <label class="custom-control-label" for="Difficult">Difficult</label>
</div>

<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Untraceable" id="Untraceable" name="FIED_EASELOCATIOFF">
  <label class="custom-control-label" for="Untraceable">Untraceable</label>
</div>

</div>
                  <label class="mdb-main-label BTxt9">Ease of Locating Office<span class="MndtryAstr"></span></label>      
                  </div>    
 </div> 
            
              <div class="col-md-4">
            <div class="md-form">
               <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="high" id="high" name="FIED_BUSINACTLEVEL">
  <label class="custom-control-label" for="high">high</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Medium" id="Medium" name="FIED_BUSINACTLEVEL">
  <label class="custom-control-label" for="Medium">Medium</label>
</div>

<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Low" id="Low" name="FIED_BUSINACTLEVEL">
  <label class="custom-control-label" for="Low">Low</label>
</div>

</div>
                  <label class="mdb-main-label BTxt9">Business Activity level<span class="MndtryAstr"></span></label>      
                  </div>    
 </div> 
 </div>
 <div class="form-row ">
            <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="FIED_NOOFEMPPREMIER" maxlength="3" name="FIED_NOOFEMPPREMIER" class="form-control GRBIDBfields IsNumberFields NoSpecialChar FIEDDBfields">
                    <label for="FIED_NOOFEMPPREMIER" class="">No.of Employers Sighter in Premises<span class="MndtryAstr"></span></label>
                  </div>
                </div>  
       <div class=" col-md-4">
                 
                  <div class="md-form">
                    <input type="text" id="FIED_NOCUSTOMERSEEN" maxlength="3" name="FIED_NOCUSTOMERSEEN" class="form-control GRBIDBfields IsNumberFields NoSpecialChar FIEDDBfields">
                    <label for="FIED_NOCUSTOMERSEEN" class="">No.of Customer Seen<span class="MndtryAstr"></span></label>
                  </div>
                </div>  
   <div class="col-md-4">
            <div class="md-form">
               <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="Yes" id="Yes" name="FIED_POLITICALOFFSEEN">
  <label class="custom-control-label" for="Yes">Yes</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input FIEDDBfields" value="No" id="No" name="FIED_POLITICALOFFSEEN">
  <label class="custom-control-label" for="No">No</label>
</div>
</div>
                  <label class="mdb-main-label BTxt9">Whether Any Display of Affiliation of Political party Seen<span class="MndtryAstr"></span></label>      
                  </div>    
 </div> 
            </div>   
       
             <div class="form-row ">
             <div class=" col-md-4">
              <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIEDDBfields " onchange="getItem();" multiple id="FIED_ITEMSEENPREM" name="FIED_ITEMSEENPREM">
				    <option value="" selected disabled>Select</option>
					<option  value="PC">PC</option>
  					<option  value="Printers">Printers</option>
  					<option  value="AC">AC</option>
  					<option  value="XEROX">XEROX</option>
  					<option  value="Telephones">Telephones</option>
  					<option  value="Fax">Fax</option>
				</select>
				<label class="mdb-main-label BTxt9">Item Seen Premises<span class="MndtryAstr"></span></label>
                  </div>
                 </div> 
                   <div class=" col-md-4">
                 
                  <div class="md-form">
                    <input type="text" id="FIED_NUMBEROFITEMS" maxlength="3" name="FIED_NUMBEROFITEMS" class="IsNumberFields NoSpecialChar form-control FIEDDBfields ">
                    <label for="FIED_NUMBEROFITEMS" class="">No.of Items<span class="MndtryAstr"></span></label>
                  </div>
                </div> 
                   <div class="col-md-4">
            <div class="md-form">
               <div class="select-radio  FIEDMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input FIEDDBfields" onchange="RecommReason()"  value="Yes" id="RecYes" name="FIED_RECOMMENDED">
                        <label class="custom-control-label" for="RecYes">Yes</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                       <input type="radio" class="custom-control-input FIEDDBfields" onchange="RecommReason()" value="No" id="RecNo" name="FIED_RECOMMENDED">
                       <label class="custom-control-label" for="RecNo">No</label>
                  </div>
             </div>
                  <label class="mdb-main-label BTxt9">Recommended<span class="MndtryAstr">*</span></label>      
          </div>    
 </div>
 </div>  
 
         <div class="form-row ">
         
          <div class="col-md-4"> 
                <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary FIEDDBfields " onchange="getReasons();" multiple id="FIED_REASONS" name="FIED_REASONS">
                    <option value="" selected disabled>Select</option>
                    <option value="Residence cum office" >Residence cum office</option>
                  	<option value="Not targeted area" >Not targeted area</option>
                  	<option value="Outside Geo Limits" >Outside Geo Limits</option>
                  	<option value="Entry not allowed" >Entry not allowed</option>
                  	<option value="Defaulter" >Defaulter</option>
                  	<option value="Address not Traceable or does not exist">Address not Traceable or does not exist</option>
                  	<option value="Details mismatch">Details mismatch</option>
                  	<option value="Applicant does work here or person does not exist">Applicant does work here or person does not exist</option>
                  	<option value="Designation Incorrect">Designation Incorrect</option>
                  	<option value="No Business activity or infrastructure seen">No Business activity or infrastructure seen</option>
                  	<option value="Negative Neighbourhood Check">Negative Neighbourhood Check</option>
                  	<option value="Any Other Reason">Any Other Reason</option>
				</select>
				<label class="mdb-main-label BTxt9">Reasons<span class="MndtryAstr"></span></label>
                  </div>
        </div>

          <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="FIED_ANYOTHREASONS" maxlength="50" name="FIED_ANYOTHREASONS" class="form-control   FIEDDBfields">
                    <label for="FIED_ANYOTHREASONS" class="">Any Other Reasons<span class="MndtryAstr"></span></label>
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
                           <input type="text" id="FEUP_PRCSID" hidden="hidden" name="FEUP_PRCSID" value="" class="form-control FEUPDBfields">
                           <input type="text" id="FEUP_ACTIVITYID" hidden="hidden" name="FEUP_ACTIVITYID" class="form-control FEUPDBfields">
                           <input type="text" id="FEUP_DTCREATED" hidden="hidden" name="FEUP_DTCREATED" class="form-control FEUPDBfields">
                           <input type="text" id="FEUP_CREATEDBY" hidden="hidden" name="FEUP_CREATEDBY" class="form-control FEUPDBfields">
                           <input type="text" id="FEUP_DTMODIFIED" hidden="hidden" name="FEUP_DTMODIFIED" class="form-control FEUPDBfields">
                           <input type="text" id="FEUP_MODIFIEDBY" hidden="hidden" name="FEUP_MODIFIEDBY" class="form-control FEUPDBfields">
						   
						   <input type="text" id="FEUP_UNIQEID" hidden="hidden" name="FEUP_UNIQEID" class="form-control FEUPDBfields">
                           <input type="text" id="FEUP_ALTNUNIQEID" hidden="hidden" name="FEUP_ALTNUNIQEID" class="form-control FEUPDBfields">
                           <div class="form-row">
                              <div class="col">
                                 <div class="md-form " >
                                    <table>
                                       <tr>
                                          <td>
                                             <div id="FEUP_ATTACHMENTUPLOAD"  class="file-field">
                                                <a class="">
                                                <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                                <input type="file"  name="datafile" onchange="DocFldUpldHndlr_V1(this,'FEUP_ATTACHMENT'+$(this).closest('.DYNROW').attr('data-row'),'FEUP_ATTACHMENT','FIOFFICE','FIOFFICE','FIOFF',$(this).closest('.DYNROW'))" class="FEUP_ATTACHMENT"  >
                                                </a>
                                                <input type="text" id="FEUP_ATTACHMENT" hidden="hidden" data-Validate="FEUP_ATTACHMENT"  name="FEUP_ATTACHMENT" class="form-control PHUPLOAD  File FEUPDBfields">
                                                <span class="name">Upload Photos</span> 
                                             </div>
                                          </td>
                                          <div class="md-form">
                                             <div class="md-form Formcol-mdLR">
                                                <div class="FEUP_ATTACHMENT" style="display:none"> 
                                                <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="" class=" DELBTN DELETEDOCUMNETS"/>      
                                       
                                        <!--  <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile($('#APDG_PDATTACHMNT'+$(event.target).closest('.DYNROW').attr('data-row')));" 
                                                alt="Cinque Terre" width="20" height="20">   -->
                                                <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" 
                                                onclick="GrdDocDwnld('FEUP_ATTACHMENT'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" 
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
                        <a onclick="AddPageMultiData('',$('#PrcsID').val(),'','BankDetail1','FEUPDBfields');" class="Btxt4 FltRight ADDBTN "  href="#">+ Add</a>
                        <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                     </div>
					
					 
                  </div>
             </div>
					
        <div class="form-row">
               <div class="col d-flex justify-content-center">
                     <button type="button" id="Save1" data-aria="LSW_TFEMPLOYINFO|FIED|FIED_ALTNUNIQEID"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TFEMPLOYINFO|FIED|FIED_ALTNUNIQEID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Submit</button> 
              </div>
        </div>         
        </form>  
      </div>
    </div>
<!-- card -->
    </div>
    </div>
<!-- END -->                      
      <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/UCV/ViewRpt/Script/FIEmploymentInfo/LoadSubmit.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/UCV/ViewRpt/Script/FIEmploymentInfo/Validation.js${DMY13}"></script> 
  
 <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
 <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
 <!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>   

            

