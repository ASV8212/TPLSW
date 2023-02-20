</br>
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="">


                            <!--Admin panel-->
                            <div class="admin-panel">

<div class="row">
	<div class="col-lg-12">
		
		  <ul title="Property" data-popup="No" data-aria="LSW_TLONPROPDTLS|LPDT|" class="nav FormPageMultiTab">   
		  
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
</div>

</br>

   <!-- card -->
  <div class="card CardNS">

    

    <!-- Card body -->
    <div>
      <div class="card-body px-lg-5 pt-0">
        
        
        <form>
         <input type="text" id="LPDT_PRCSID" hidden="hidden" name="LPDT_PRCSID" class="form-control LPDTDBfields">
         <input type="text" id="LPDT_ACTIVITYID" hidden="hidden" name="LPDT_ACTIVITYID" class="form-control LPDTDBfields">
         <input type="text" id="LPDT_CREATEDBY" hidden="hidden" name="LPDT_CREATEDBY" class="form-control LPDTDBfields">
         <input type="text" id="LPDT_DTCREATED" hidden="hidden" name="LPDT_DTCREATED" class="form-control LPDTDBfields">
         <input type="text" id="LPDT_MODIFIEDBY" hidden="hidden" name="LPDT_MODIFIEDBY" class="form-control LPDTDBfields">
         <input type="text" id="LPDT_DTMODIFIED" hidden="hidden" name="LPDT_DTMODIFIED" class="form-control LPDTDBfields">
        
        <input type="text" id="LPDT_PROPERTYNO" hidden="hidden" name="LPDT_PROPERTYNO" class="form-control LPDTDBfields">
        <input type="text" id="LPDT_PROPERTYNAME" hidden="hidden" name="LPDT_PROPERTYNAME" class="form-control LPDTDBfields">
		
		  <input type="text" id="LPDT_FILESTATUS" hidden="hidden" name="LPDT_FILESTATUS" class="form-control LPDTDBfields">
		
		  <!--<input type="text" id="LPDT_DEMANTAMT" hidden="hidden" name="LPDT_DEMANTAMT" class="form-control LPDTDBfields"> 
         <input type="text" id="LPDT_DEMANTAMTGST" hidden="hidden" name="LPDT_DEMANTAMTGST" class="form-control LPDTDBfields"> 
          -->
           </br>
          <div class="form-row">
           <div class="col ">
           <div class="FltRight DELBTNTXT">
           Delete Property
           <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="LPDT_PRCSID|LPDT_PROPERTYNO|PROPERTY" class="DELBTN DELETETAP"/>
           </div>    
           </div>     
           </div>
       
        	<div class="form-row">
        		<div class="col Btxt3">Enter Property Details</div>
        	</div>
        	</br>
			<div class="form-row  ">
            <div class="col-md-6 ADDPROPERT">
              <div class="md-form">
                  <div class="select-radio"> 
                      <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input AddPro LPDTDBfields" value="Yes" id="ADDPROYES" name="LPDT_ADDITIOPROP">
                      <label class="custom-control-label" for="ADDPROYES">Yes</label>
                 </div>
          <div class="custom-control custom-radio custom-control-inline">
         <input type="radio" class="custom-control-input AddPro LPDTDBfields" value="No" id="ADDPRONO" name="LPDT_ADDITIOPROP">
        <label class="custom-control-label" for="ADDPRONO">No</label>
          </div>
          </div>
                  <label class="mdb-main-label BTxt9">Additional Property<span class="MndtryAstr"></span></label>      
                  </div>
             </div>
			 <div class="col-md-6 COLLATLON" style="display:none">
                  <div class="md-form">
               <div class="select-radio"> 
                 <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" class="custom-control-input LPDTDBfields" value="Yes" id="COLLYES" name="LPDT_COLLATLON">
                    <label class="custom-control-label" for="COLLYES">Yes</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input LPDTDBfields" value="No" id="COLLNO" name="LPDT_COLLATLON">
                  <label class="custom-control-label" for="COLLNO">No</label>
               </div>
             </div>
                  <label class="mdb-main-label BTxt9">Loan on same collateral<span class="MndtryAstr">*</span></label>      
                  </div>
             </div>
        </div>
			
			
        </br>
		 <div class="form-row">
            <div class="col-md-6">
            	<div class="md-form">
            	    <input type="text" id="LPDT_DEMANTAMT" disabled name="LPDT_DEMANTAMT" class="form-control IsCURCommaFields  LPDTDBfields"> 
            	    <label for="LPDT_DEMANTAMT" class="">Property Amount (PF)<span class="MndtryAstr"></span></label>
            	 </div>
             </div>
             <div class="col-md-6">
            	<div class="md-form">
            	    <input type="text" id="LPDT_DEMANTAMTGST" disabled name="LPDT_DEMANTAMTGST" class="form-control IsCURCommaFields  LPDTDBfields"> 
            	    <label for="LPDT_DEMANTAMTGST" class="">Property Amount Incl. GST<span class="MndtryAstr"></span></label>
            	 </div>
             </div>
         </div>
        <div class="form-row">
           
            <div class="col">
                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary AddPro LPDTDBfields LPDTMndtry" onchange="GetPropType()" id="LPDT_PROPUSAGE" name="LPDT_PROPUSAGE">
                  	<option value="">Select</option>
  					<option value="Self Occupied">Self Occupied</option>
 					<option value="Rented">Rented</option>
 					<option value="Vacant">Vacant</option>
  				    </select>
                    <label class="mdb-main-label BTxt9">Property Usage <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary AddPro LPDTDBfields LPDTMndtry " id="LPDT_PROPTYPE" name="LPDT_PROPTYPE">
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
  					
				</select>
				<label class="mdb-main-label BTxt9">Property Type <span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           
        </div>
        
        <div class="form-row">
           
            <div class="col">
                  <div class="md-form">
          
               <div class="select-radio LPDTMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input AddPro LPDTDBfields" value="Freehold" id="FreeHold" name="LPDT_PROPTITLE">
  <label class="custom-control-label" for="FreeHold">Freehold</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input AddPro LPDTDBfields" value="Leasehold" id="LeaseHold" name="LPDT_PROPTITLE">
  <label class="custom-control-label" for="LeaseHold">Leasehold</label>
</div>


</div>
                  <label class="mdb-main-label BTxt9">Property Title <span class="MndtryAstr">*</span></label>      
                  </div>
             </div>
             
             <div class="col">
                  <div class="md-form">
          
               <div class="select-radio LPDTMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input AddPro LPDTDBfields" onclick="CheckPropOwner();" value="Sole" id="Sole" name="LPDT_PROPOWNSHIP">
  <label class="custom-control-label" for="Sole">Sole</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input AddPro  LPDTDBfields" onclick="CheckPropOwner();"  value="Joint" id="Joint" name="LPDT_PROPOWNSHIP">
  <label class="custom-control-label" for="Joint">Joint</label>
</div>
</div>
        <label class="mdb-main-label BTxt9">Property Ownership <span class="MndtryAstr">*</span></label>      
     </div>
 </div>      
       	</div>
       	<div class="form-row">
                <div class="col-md-6">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary AddPro LPDTDBfields" onchange="getCusNames();" multiple id="LPDT_PROPOWNER" name="LPDT_PROPOWNER">
				 <option value="" disabled>--Select--</option>
				</select>
				<label class="mdb-main-label BTxt9">Property Owner <span class="MndtryAstr"></span></label>
                  </div>
               </div>
             <div class="col-md-6">
              <div class="md-form">
                <label for="" class="active">Customer Name</label>
                <br>
               
           		<textarea class="form-control LPDTDBfields DSVLBL Btxt10" rows="5"  id="LPDT_CUSTNAME" name="LPDT_CUSTNAME" style="height: 100px;width:380px;"></textarea>
           		 </div> 
             </div>
        </div>
		<div class="form-row">
		    <div class="col-md-6 GPP" style="display:none">
              <div class="md-form">
                  <div class="select-radio GPPM"> 
                      <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input AddPro LPDTDBfields" value="Yes" id="GRAMYES" name="LPDT_GRAMMET">
                      <label class="custom-control-label" for="GRAMYES">Yes</label>
                 </div>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input AddPro LPDTDBfields" value="No" id="GRAMNO" name="LPDT_GRAMMET">
                      <label class="custom-control-label" for="GRAMNO">No</label>
                  </div>
               </div>
                  <label class="mdb-main-label BTxt9">GRAM PANCHAYAT SOP NORMS  MET<span class="MndtryAstr">*</span></label>      
                  </div>
             </div>
		</div>
        <div class="form-row">
        	<div class="col Btxt10">COLLATERAL ADDRESS</div>
        </div>
        </br>
        
        <div class="form-row">
           
            <div class="col">
            	<div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" onclick="ChkPerson();" class="custom-control-input LPDTDBfields" id="LPDT_SAMADDR" name="LPDT_SAMADDR">
  					<label class="custom-control-label" for="LPDT_SAMADDR">Same Address as</label>
				</div>
				</div>
            </div>
   
        </div>
        
        <div class="form-row ADDDET">
                <div class="col">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary  LPDTDBfields " onchange="getaddresstype();" id="LPDT_PERSONS" name="LPDT_PERSONS">
				 <option value="" disabled>--Select--</option>
				</select>
				<label class="mdb-main-label BTxt9">Person's <span class="MndtryAstr"></span></label>
                  
                  </div>
               </div>
               <div class="col">
                 <div class="md-form">
               <div id="ADDRADIO" class="select-radio"> 
 <div class="custom-control custom-radio custom-control-inline PROADD">
     <input type="radio" class="custom-control-input LPDTDBfields" value="Residence" onclick="getPersonsAddrs();" id="Resdnc" name="LPDT_ADDRTYPE">
     <label class="custom-control-label" for="Resdnc">Residence</label>
</div>
<div class="custom-control custom-radio custom-control-inline PROADD">
  <input type="radio" class="custom-control-input LPDTDBfields" value="Permanent" onclick="getPersonsAddrs();" id="Permnt" name="LPDT_ADDRTYPE">
  <label class="custom-control-label" for="Permnt">Permanent</label>
</div>
<div class="custom-control custom-radio custom-control-inline RETIADD">
   <input type="radio" class="custom-control-input LPDTDBfields" value="Office" onclick="getPersonsAddrs();" id="Office" name="LPDT_ADDRTYPE">
   <label class="custom-control-label" for="Office">Office</label>
</div>
</div>
        <label class="mdb-main-label BTxt9">Address Type <span class="MndtryAstr">*</span></label>      
        </div>
      </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                  	<input type="text" id="LPDT_ADDTLINEI" name="LPDT_ADDTLINEI" class="form-control ADDAC COLAD LPDTMndtry LPDTDBfields PERCHG">
                    <label for="LPDT_ADDTLINEI" class="ADDAL">Address Line 1 <span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="LPDT_ADDRLINEII" name="LPDT_ADDRLINEII" class="form-control ADDAC COLAD NoSpecialChar LPDTDBfields PERCHG">
                    <label for="LPDT_ADDRLINEII" class="ADDAL">Address Line 2</label>
                  </div>
                </div>
           </div>
           <div class="form-row">
           
            <div class="col">
                 
                  <div class="md-form">
                  	<input type="text" id="LPDT_PINCODE" maxlength="6" name="LPDT_PINCODE" onblur="fnOnFocusOut(this);Pindetls(this,'LPDT_STATE','LPDT_CITY')" class="form-control ADDAC IsNumberFields NoSpecialChar IsPinFielde COLAD LPDTMndtry PERCHG LPDTDBfields">
                    <label for="LPDT_PINCODE" class="ADDAL">Pin Code <span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="LPDT_CITY" name="LPDT_CITY" disabled class="form-control COLAD ADDAC PERCHG LPDTMndtry LPDTDBfields">
                    <label for="LPDT_CITY" class="ADDAL">City <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div>
           <div class="form-row">
            <div class="col">
                <div class="md-form">
                  	<input type="text" id="LPDT_STATE" name="LPDT_STATE" disabled class="form-control COLAD ADDAC LPDTMndtry LPDTDBfields">
                    <label for="LPDT_STATE" class="ADDAL">State <span class="MndtryAstr">*</span></label>
                </div>
                </div>
                <div class="col"></div>
           </div>
           <div class="form-row">
            <div class="col">
                <div class="md-form">
                  	<input type="text" id="LPDT_YERADDR" maxlength="2" onblur="yearsCompare('LPDT_YEAATCITY','LPDT_YERADDR','Years at address value cannot be greater than Years at city')"  name="LPDT_YERADDR" class="form-control COLAD ADDAC  IsNumberFields NoSpecialChar PERCHG LPDTMndtry LPDTDBfields">
                    <label for="LPDT_YERADDR" class="ADDAL">Years at Address <span class="MndtryAstr">*</span></label>
                </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="LPDT_YEAATCITY" maxlength="2" onblur="yearsCompare('LPDT_YEAATCITY','LPDT_YERADDR','Years at address value cannot be greater than Years at city')"  name="LPDT_YEAATCITY" class="form-control IsNumberFields LPDTMndtry NoSpecialChar PERCHG LPDTDBfields">
                    <label for="LPDT_YEAATCITY" class="">Years at City 	<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div>
           <div class="form-row">
            <div class="col">
            	<div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input LPDTDBfields" id="LPDT_PROPDOCCOLL" name="LPDT_PROPDOCCOLL">
  					<label class="custom-control-label" for="LPDT_PROPDOCCOLL">Property Documents Collected</label>
				</div>
				</div>
            </div>
          </div>
		 
        </br>
       	    <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="LSW_TLONPROPDTLS|LPDT|LPDT_PROPERTYNO" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TLONPROPDTLS|LPDT|LPDT_PROPERTYNO" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                </div>
            </div>
        
        </form>
        
        
      </div>
    </div>

  </div>
   
                            </div>
                             </div>
    <script type="text/javascript" src="ThemeproLO/LoanProperty/Script/PropDtls/LoadSubmit.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/LoanProperty/Script/PropDtls/Validation.js${DMY13}"></script> 
       
                                  <!--   </div>
                                </div>   -->                           