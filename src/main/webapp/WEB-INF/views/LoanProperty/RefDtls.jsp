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
		
		  <ul title="Reference" data-popup="No" data-aria="LSW_TLONREFDTLS|LRDT|" class="nav FormPageMultiTab">   
		  
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

<div class="card CardNS">
    <!-- Card body -->
    <div>
      <div class="card-body px-lg-5 pt-0">
     	<form>
      	<input type="text" id="LRDT_PRCSID" hidden="hidden" name="LRDT_PRCSID" class="form-control LRDTDBfields">
         <input type="text" id="LRDT_ACTIVITYID" hidden="hidden" name="LRDT_ACTIVITYID" class="form-control LRDTDBfields">
         <input type="text" id="LRDT_CREATEDBY" hidden="hidden" name="LRDT_CREATEDBY" class="form-control LRDTDBfields">
         <input type="text" id="LRDT_DTCREATED" hidden="hidden" name="LRDT_DTCREATED" class="form-control LRDTDBfields">
         <input type="text" id="LRDT_MODIFIEDBY" hidden="hidden" name="LRDT_MODIFIEDBY" class="form-control LRDTDBfields">
         <input type="text" id="LRDT_DTMODIFIED" hidden="hidden" name="LRDT_DTMODIFIED" class="form-control LRDTDBfields">
		  	<input type="text"   hidden="hidden" id="LRDT_REFID" name="LRDT_REFID" class="form-control LRDTDBfields">
			<input type="text" id="LRDT_REFNAME" hidden="hidden" name="LRDT_REFNAME" class="form-control LRDTDBfields">
      	</br>
      	      	          <div class="form-row">
           <div class="col ">
           <div class="FltRight DELBTNTXT">
           Delete Reference
           <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="LRDT_PRCSID|LRDT_REFID|Reference" class="DELBTN DELETETAP"/>
           </div>    
           </div>     
           </div>
        	<div class="form-row">
        		<div class="col Btxt3">Enter Reference Details</div>
        	</div>
        	</br>
      	
      	</br>
      	
      	<div class="form-row">
        	<div class="col Btxt10">REFERENCE ADDRESS</div>
        </div>
      	</br>
      	
      	<div class="form-row">
           
            <div class="col">
                 
                  <div class="md-form">
                  	<input type="text" id="LRDT_FIRREFNAME" maxlength="25" name="LRDT_FIRREFNAME" class="form-control IsAlphaFields LRDTDBfields LRDTMndtry">
                    <label for="LRDT_FIRREFNAME" class="">Name <span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary   LRDTDBfields LRDTMndtry "   id="LRDT_FIRREFREL" name="LRDT_FIRREFREL">
                  <!--	<option value="">Select</option>
  				    <option value="Buyer">Buyer</option>
					<option value="Vehicles">Seller</option>
					<option value="Relative">Relative</option>
					<option value="Friend">Friend</option>-->
					 
 					 
  					
				</select>
				<label class="mdb-main-label BTxt9">Relationship<span class="MndtryAstr">*</span></label>
                  </div>
				  </div>
           
           </div>
      	
      	<div class="form-row">
           
            <div class="col">
                 
                  <div class="md-form">
                  	<input type="text" id="LRDT_FIRREFMOBILE" maxlength="10" onchange="DupMOBval('LRDT_PRCSID','LRDT_FIRREFMOBILE','LRDT_REFID');"  name="LRDT_FIRREFMOBILE" class="form-control IsMobileFields IsNumberFields LRDTMndtry LRDTDBfields">
                    <label for="LRDT_FIRREFMOBILE" class="">Mobile No <span class="MndtryAstr">*</span></label>
             </div>
                </div>
                       
             <div class="col">
             </div>
             
           </div>
           
           <div class="form-row">
           
            <div class="col">
                 
                  <div class="md-form">
                  	<input type="text" id="LRDT_FIRREFADDRI" maxlength="40" name="LRDT_FIRREFADDRI" class="form-control AddrNoSpecialChar LRDTMndtry LRDTDBfields">
                    <label for="LRDT_FIRREFADDRI" class="">Address Line 1 <span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="LRDT_FIRREFADDRII" maxlength="40" name="LRDT_FIRREFADDRII" class="form-control AddrNoSpecialChar LRDTDBfields">
                    <label for="LRDT_FIRREFADDRII" class="">Address Line 2</label>
                  </div>
                </div>
           
           </div>
           
           <div class="form-row">
           
            <div class="col">
                 
                  <div class="md-form">
                  	<input type="text" id="LRDT_FIRREFPIN" maxlength="6" name="LRDT_FIRREFPIN" onchange="fnOnFocusOut(this);Pindetls(this,'LRDT_FIRREFSTATE','LRDT_FIRREFCITY')" class="form-control NoSpecialChar IsNumberFields LRDTMndtry LRDTDBfields">
                    <label for="LRDT_FIRREFPIN" class="">Pin Code <span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="LRDT_FIRREFCITY" disabled name="LRDT_FIRREFCITY" class="form-control LRDTMndtry LRDTDBfields">
                    <label for="LRDT_FIRREFCITY" class="">City <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div>
           
           <div class="form-row">
           
            <div class="col">
                 
                  <div class="md-form">
                  	<input type="text" id="LRDT_FIRREFSTATE" disabled name="LRDT_FIRREFSTATE" class="form-control LRDTMndtry LRDTDBfields">
                    <label for="LRDT_FIRREFSTATE" class="">State <span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col"></div>
           
           </div>
		   <div class="form-row  MSMEDETAILS">
           
            <div class="col-md-6">
                 
                  <div class="md-form">
                  	<input type="text" id="LRDT_REFFROM"  name="LRDT_REFFROM" maxlength="30"  class="form-control NoSpecialChar LRDTDBfields">
                    <label for="LRDT_REFFROM" class="">Reference taken from <span class="MndtryAstr"></span></label>
             </div>
                </div>
				
				 <div class="col-md-6">
                 
                  <div class="md-form">
                  	<input type="text" id="LRDT_YEARSREL"  name="LRDT_YEARSREL"  maxlength="2"   class="form-control  IsNumberFields  LRDTDBfields">
                    <label for="LRDT_YEARSREL" class="">Years of relationship <span class="MndtryAstr"></span></label>
             </div>
                </div>
		    </div>
		   
		     <div class="form-row MSMEDETAILS">
           
            <div class="col-md-6">
                 
                  <div class="md-form">
                  	<input type="text" id="LRDT_TURNOVERPER" maxlength="5" name="LRDT_TURNOVERPER"    class="form-control IsPercentageSPL IsNumberFields LRDTDBfields">
                    <label for="LRDT_TURNOVERPER" class=""> % Turnover in last one year <span class="MndtryAstr"></span></label>
             </div>
                </div>
				
				 <div class="col-md-6">
                 
                  <div class="md-form">
                  	<input type="text" id="LRDT_REMARK"  name="LRDT_REMARK"    class="form-control NoSpecialChar LRDTDBfields">
                    <label for="LRDT_REMARK" class="">Remarks<span class="MndtryAstr"></span></label>
             </div>
                </div>
		    </div>
		   
           
      		<!--<div class="form-row"  >
        	<div class="col Btxt10">REFERENCE ADDRESS 2</div>
        </div>
      	</br>
      	
      	<div class="form-row">
           
            <div class="col">
                 
                  <div class="md-form">
                  	<input type="text" id="LRDT_SECREFNAME" maxlength="25" name="LRDT_SECREFNAME" class="form-control IsAlphaFields LRDTMndtry LRDTDBfields">
                    <label for="LRDT_SECREFNAME" class="">Name <span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
          
               <div class="select-radio LRDTMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input LRDTDBfields" onclick="checkRadio(this)"  value="Friend" id="Friend2" name="LRDT_SECREFREL">
  <label class="custom-control-label" for="Friend2">Friend</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input LRDTDBfields" onclick="checkRadio(this)"  value="Relative" id="Relative2" name="LRDT_SECREFREL">
  <label class="custom-control-label" for="Relative2">Relative</label>
</div>


</div>
                  <label class="mdb-main-label BTxt9">Relationship <span class="MndtryAstr">*</span></label>      
                  </div>
                </div>
           
           </div>
      	
      	<div class="form-row">
           
            <div class="col">
                 
                  <div class="md-form">
                  	<input type="text" id="LRDT_SECREFMOBILE" maxlength="10"  name="LRDT_SECREFMOBILE" onchange="CheckMobNo();CheckRefNo();" class="form-control IsMobileFields LRDTDBfields NoSpecialChar IsNumberFields LRDTMndtry">
                    <label for="LRDT_SECREFMOBILE" class="">Mobile No <span class="MndtryAstr">*</span></label>
                 </div>
            </div>        
            <div class="col">
            </div>
           </div>
           <div class="form-row">
            <div class="col">
                <div class="md-form">
                  	<input type="text" id="LRDT_SECREFADDRI" maxlength="40" name="LRDT_SECREFADDRI" class="form-control AddrNoSpecialChar LRDTDBfields LRDTMndtry">
                    <label for="LRDT_SECREFADDRI" class="">Address Line 1 <span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col">
               <div class="md-form">
                    <input type="text" id="LRDT_SECREFADDRII" maxlength="40" name="LRDT_SECREFADDRII" class="form-control AddrNoSpecialChar   LRDTDBfields">
                    <label for="LRDT_SECREFADDRII" class="">Address Line 2</label>
               </div>
            </div>
           </div>
           
           <div class="form-row">
           
            <div class="col">
                 
                  <div class="md-form">
                  	<input type="text" id="LRDT_SECREFPIN" maxlength="6" name="LRDT_SECREFPIN" onchange="fnOnFocusOut(this);Pindetls(this,'LRDT_SECREFSTATE','LRDT_SECREFCITY')" class="form-control NoSpecialChar IsNumberFields LRDTDBfields LRDTMndtry">
                    <label for="LRDT_SECREFPIN" class="">Pin Code <span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="LRDT_SECREFCITY" disabled name="LRDT_SECREFCITY" class="form-control LRDTDBfields LRDTMndtry">
                    <label for="LRDT_SECREFCITY" class="">City <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           
           </div>
           
           <div class="form-row">
           
            <div class="col">
                 
                  <div class="md-form">
                  	<input type="text" id="LRDT_SECREFSTATE" disabled name="LRDT_SECREFSTATE" class="form-control LRDTDBfields LRDTMndtry">
                    <label for="LRDT_SECREFSTATE" class="">State <span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col"></div>
           
           </div>-->
      		</br>
      	    <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="LSW_TLONREFDTLS|LRDT|LRDT_REFID" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TLONREFDTLS|LRDT|LRDT_REFID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                </div>
            </div>
       	</form>
      </div>
    </div>
  </div>
 </div>
</div>
                             
   <script type="text/javascript" src="ThemeproLO/LoanProperty/Script/RefDtls/LoadSubmit.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/LoanProperty/Script/RefDtls/Validation.js${DMY13}"></script>
                                  <!--   </div>
                                </div>   -->                           