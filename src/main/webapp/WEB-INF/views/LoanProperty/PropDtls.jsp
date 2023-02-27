
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
		
		  <ul title="Security" data-popup="No" data-aria="LSW_TLONPROPDTLS|LPDT|" class="nav FormPageMultiTab">   
		  
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
		<input type="text" id="LPDT_OWNERCUSID" hidden="hidden" name="LPDT_OWNERCUSID" class="form-control LPDTDBfields">
		<input type="text" id="LPDT_GRDFILE" hidden="hidden" name="LPDT_GRDFILE" class="form-control LPDTDBfields"> 
	 
		  <!--<input type="text" id="LPDT_DEMANTAMT" hidden="hidden" name="LPDT_DEMANTAMT" class="form-control LPDTDBfields"> 
         <input type="text" id="LPDT_DEMANTAMTGST" hidden="hidden" name="LPDT_DEMANTAMTGST" class="form-control LPDTDBfields"> 
          -->
           </br>
          <div class="form-row">
           <div class="col ">
           <div class="FltRight DELBTNTXT">
           Delete Security
           <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="LPDT_PRCSID|LPDT_PROPERTYNO|SECURITY" class="DELBTN DELETETAP"/>
           </div>    
           </div>     
           </div>
       
        	<div class="form-row">
        		<div class="col Btxt3">Enter Security Details</div>
        	</div>
        	</br>
        </br>
		
		
	 <div class="form-row">
           
            <div class="col-md-6 ADDPROPERT">
                  <div class="md-form">
          
               <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input ADDPro  LPDTDBfields" value="Yes" id="ADDPROYES" name="LPDT_ADDITIOPROP">
  <label class="custom-control-label" for="ADDPROYES">Yes</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input ADDPro  LPDTDBfields" value="No" id="ADDPRONO" name="LPDT_ADDITIOPROP">
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
	<div class="form-row  ">
		<div class="col-md-6">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro LPDTDBfields LPDTMndtry " onchange="CheckSecurityType(); CheckChange(); Chkmnd();"  id="LPDT_SECURITYTYPE" name="LPDT_SECURITYTYPE">
                  	   <option value="">Select</option>
				    </select>
				       <label class="mdb-main-label BTxt9">Securities<span class="MndtryAstr">*</span></label>
                  </div>
		</div>
		<div class="col-md-6">
           <div class="md-form">
               <div class="select-radio LPDTMndtry  " > 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input ADDPro LPDTDBfields"  value="Primary" id="Primary" name="LPDT_SECCATEGORY">
  <label class="custom-control-label" for="Primary">Primary</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input ADDPro LPDTDBfields"    value="Collateral" id="Collateral" name="LPDT_SECCATEGORY">
  <label class="custom-control-label" for="Collateral">Collateral</label>
</div>
</div>
        <label class="mdb-main-label BTxt9">Security Category <span class="MndtryAstr">*</span></label>      
     </div>
 </div> 	  
		</div>
		<div class="vehicle PARENTCLASS" style="display:none">
		    <div class="form-row">
        		<div class="col Btxt3">Asset Details - Vehicle</div>
        	</div>
		 	<div class="form-row">
<div class="col-md-6">
      <div class="md-form">
	    <input type="text" id="LPDT_REGNOVERI" hidden="hidden" maxlength="30" name="LPDT_REGNOVERI" class="form-control LPDTDBfields">
        <button type="button" data-Validatearia="LPDT_REGNOVERI" onclick="CheckKYCDetl(this,'LPDT_VREGNO','LPDT_REGNOVERI','VEHICLE');" data-field="LPDT_REGNOVERI|LPDT_VREGNO||LPDT_PROPERTYNO|" data-validate="gstin"  class="btn btn-Verify LPDT_REGNOVERI waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
        <input type="text" id="LPDT_VREGNO" name="LPDT_VREGNO" data-link="LPDT_VREGNO|LPDT_REGNOVERI|VEHICLE|||||" class="form-control datalink ADDPro LPDTDBfields VEMVAL NoSpecialChar vehile">
        <label for="LPDT_VREGNO" class="ADDACTVEC">Reg No <span class="MndtryAstr">*</span> </label>
      </div>
	         </div>
				<div class="col-md-6">
				<div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro LPDTDBfields VEMVAL  vehile" onchange="Chkscvveh();" id="LPDT_VEHILECLASS" name="LPDT_VEHILECLASS">
                  	<option value="">Select</option>	
					<option value="M and HCV">M and HCV </option>
					<option value="LCV">LCV</option>
					<option value="SCV">SCV</option>
					<option value="ICV">ICV</option>
					<option value="M and HCV Bus">M and HCV Bus</option>
					<option value="LCV Bus">LCV Bus</option>
				</select>
				<label class="mdb-main-label BTxt9">Vehicle Class<span class="MndtryAstr">*</span></label>
                  </div>				  
				  </div>
					
		</div>
		<div class="form-row">
<div class="col-md-6">
				<div class="md-form">
                   <select class="mdb-select md-form colorful-select dropdown-primary ADDPro LPDTDBfields VEMVAL vehile"  id="LPDT_VBODYTYPE" name="LPDT_VBODYTYPE">
                  	<option value="">Select</option>	
					<option value="M and HCV">M and HCV </option>
					<option value="LCV">LCV</option>
					<option value="SCV">SCV</option>
					<option value="ICV">ICV</option>
					<option value="M and HCV Bus">M and HCV Bus</option>
					<option value="LCV Bus">LCV Bus</option>
				   </select>
				   <label class="mdb-main-label BTxt9">Body Type<span class="MndtryAstr">*</span></label>
                </div>  
		      </div>
							<div class="col-md-6">
							<div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro LPDTDBfields LPDTMndtry VEMVAL vehile"  id="LPDT_VMANUFACT" name="LPDT_VMANUFACT">
                  	<option value="">Select</option>
					<option value="M and HCV">M and HCV </option>
					<option value="LCV">LCV</option>
					<option value="SCV">SCV</option>
					<option value="ICV">ICV</option>
					<option value="M and HCV Bus">M and HCV Bus</option>
					<option value="LCV Bus">LCV Bus</option>
				</select>
				<label class="mdb-main-label BTxt9" >Manufactured<span class="MndtryAstr">*</span></label>
                  </div>				  
				  </div>  
		</div>
		
		<div class="form-row">
		  <div class="col-md-6">
							<div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro LPDTDBfields VEMVAL  vehile"  id="LPDT_VMODEL" name="LPDT_VMODEL">
                  	<option value="">Select</option>
					<option value="M and HCV">M and HCV </option>
					<option value="LCV">LCV</option>
					<option value="SCV">SCV</option>
					<option value="ICV">ICV</option>
					<option value="M and HCV Bus">M and HCV Bus</option>
					<option value="LCV Bus">LCV Bus</option>
				</select>
				<label class="mdb-main-label BTxt9" >Model<span class="MndtryAstr">*</span></label>
                  </div>				  
				  </div>
		<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VMKMODEL" name="LPDT_VMKMODEL"  class="form-control ADDPro VEMVAL LPDTDBfields vehile">
                    <label for="LPDT_VMKMODEL" class="ADDACTVEC">Asset (Make Model)<span class="MndtryAstr">*</span></label>
             </div>
              
		</div>
		
		
		
		</div>
		<div class="form-row">
		
		<div class="col-md-6">
                  <!-- First name -->
                  <div class="md-form">
                    
                    <input type="text" id="LPDT_VMANUDATE" name="LPDT_VMANUDATE"   maxlength="10" class="form-control LPDTDBfields VEMVAL ADDPro IsNumberFields NoSpecialChar INDM ISDatefield  ISFutureDateFields vehile ">
                    <label for="LPDT_VMANUDATE" class="ADDACTVEC">Manufacture date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>
				
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VASSETDESC" name="LPDT_VASSETDESC"  class="form-control ADDPro  VEMVAL LPDTDBfields">
                    <label for="LPDT_VASSETDESC" class="ADDACTVEC">Asset Description  </label>
             </div>
              
				</div>	
				
		</div>
	<div class="form-row">
	<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VASSETCOST" name="LPDT_VASSETCOST" maxlength="15"  class="form-control vehile ADDPro LPDTDBfields VEMVAL IsCURCommaFields IsGreaterzeroFld IsNumberFields">
                    <label for="LPDT_VASSETCOST" class="ADDACTVEC">Asset Cost  </label>
             </div>
              
				</div>	
	<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VENGNO" name="LPDT_VENGNO"  maxlength="30"  class="form-control ADDPro LPDTDBfields  VEMVAL NoSpecialChar    ">
                    <label for="LPDT_VENGNO" class="ADDACTVEC">Engine No<span class="MndtryAstr">*</span> </label>
             </div>
				</div>	
	</div>
  <div class="form-row">
	<div class="col-md-6">
		<div class="md-form">
                  	<input type="text" id="LPDT_VCHASISNO" name="LPDT_VCHASISNO"  maxlength="30"  class="form-control ADDPro LPDTDBfields VEMVAL NoSpecialChar   ">
                    <label for="LPDT_VCHASISNO" class="ADDACTVEC">Chassis No <span class="MndtryAstr">*</span> </label>
        </div>
   </div>
      	<div class="col-md-6">
		<div class="md-form">
           <input type="text" id="LPDT_VNAMEOFOWN" name="LPDT_VNAMEOFOWN"   maxlength="30"  class="form-control ADDPro LPDTDBfields VEMVAL NoSpecialChar   ">
           <label for="LPDT_VNAMEOFOWN" class="ADDACTVEC">Name Of Owner</label>
        </div>
    </div>

  </div>	

  
  	    <div class="form-row">
			<div class="col-md-6">
				<div class="md-form">
					<input type="text" id="LPDT_VMAKERMODEL" name="LPDT_VMAKERMODEL"   maxlength="30"  class="form-control ADDPro LPDTDBfields VEMVAL NoSpecialChar   ">
					<label for="LPDT_VMAKERMODEL" class="ADDACTVEC">Maker Model</label>
				</div>
			</div>
			
			<div class="col-md-6">
				<div class="md-form">
					<input type="text" id="LPDT_VREGDATE" name="LPDT_VREGDATE"   maxlength="30"  class="form-control ADDPro LPDTDBfields VEMVAL NoSpecialChar   ">
					<label for="LPDT_VREGDATE" class="ADDACTVEC">Registration Date</label>
				</div>
			</div>

		</div>	
	    <div class="form-row">
			<div class="col-md-6">
				<div class="md-form">
					<input type="text" id="LPDT_VFINANCIER" name="LPDT_VFINANCIER"   maxlength="30"  class="form-control ADDPro LPDTDBfields VEMVAL NoSpecialChar   ">
					<label for="LPDT_VFINANCIER" class="ADDACTVEC">Financier</label>
				</div>
			</div>
			
			<div class="col-md-6">
				<div class="md-form">
					<input type="text" id="LPDT_VVEHICLECLASS" name="LPDT_VVEHICLECLASS"   maxlength="30"  class="form-control ADDPro LPDTDBfields VEMVAL NoSpecialChar   ">
					<label for="LPDT_VVEHICLECLASS" class="ADDACTVEC">Vehicle Class Description</label>
				</div>
			</div>

		</div>	

  
		<div class="form-row">
			<div class="col-md-6">
				<div class="md-form">
					<input type="text" id="LPDT_VOWNERSERNO" name="LPDT_VOWNERSERNO"   maxlength="30"  class="form-control ADDPro LPDTDBfields VEMVAL NoSpecialChar   ">
					<label for="LPDT_VOWNERSERNO" class="ADDACTVEC">Owner Serial Number</label>
				</div>
			</div>		
	<div class="col-md-6">
		<div class="md-form">
           <input type="text" id="LPDT_VQUOTEVAL" name="LPDT_VQUOTEVAL"  maxlength="15"  class="form-control ADDPro LPDTDBfields VEMVAL  IsCURCommaFields IsNumberFields">
           <label for="LPDT_VQUOTEVAL" class="ADDACTVEC">Dealer/ Valuer Quoted Value </label>
        </div>
    </div>
	</div>


	
		<div class="form-row">
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VPROVECLAMT" name="LPDT_VPROVECLAMT" maxlength="15"  class="form-control ADDPro LPDTDBfields VEMVAL IsCURCommaFields IsNumberFields IsGreaterzeroFld vehile">
                    <label for="LPDT_VPROVECLAMT" class="ADDACTVEC">Proposed Vehicle Loan Amount<span class="MndtryAstr">*</span> </label>
             </div>
              
				</div>
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VINITIALHIRE" name="LPDT_VINITIALHIRE"  maxlength="15"  class="form-control VEMVAL ADDPro LPDTDBfields ">
                    <label for="LPDT_VINITIALHIRE" class="ADDACTVEC">Initial Hire</label>
             </div>
              
				</div>
		
		</div>
		
		<div class="form-row">
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VINSURAMT" name="LPDT_VINSURAMT" maxlength="15"   class="form-control ADDPro VEMVAL LPDTDBfields IsCURCommaFields IsNumberFields">
                    <label for="LPDT_VINSURAMT" class="ADDACTVEC">Insurance amount</label>
             </div>
              
				</div>
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VBASEPRICE" name="LPDT_VBASEPRICE"  maxlength="15"  class="form-control ADDPro  VEMVAL LPDTDBfields IsCURCommaFields IsNumberFields">
                    <label for="LPDT_VBASEPRICE" class="ADDACTVEC">Base Price</label>
             </div>
              
				</div>
		
		
		</div>
		<div class="form-row">
		     <div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VRTO" name="LPDT_VRTO" maxlength="15"  class="form-control ADDPro  VEMVAL LPDTDBfields">
                    <label for="LPDT_VRTO" class="ADDACTVEC">RTO</label>
                 </div>
			</div>
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VOTHERACCES" name="LPDT_VOTHERACCES"  maxlength="25"  class="form-control VEMVAL ADDPro LPDTDBfields  ">
                    <label for="LPDT_VOTHERACCES" class="ADDACTVEC">Other Accessories</label>
                </div>
			</div>
		</div>
		<div class="form-row">
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VVERSION" name="LPDT_VVERSION" maxlength="15"  class="form-control ADDPro VEMVAL LPDTDBfields ">
                    <label for="LPDT_VVERSION" class="ADDACTVEC">Version</label>
               </div>
			</div>
			<!-- <div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VFCVALIDITY" name="LPDT_VFCVALIDITY"  class="form-control ADDPro VEMVAL LPDTDBfields vehile">
                    <label for="LPDT_VFCVALIDITY" class="ADDACTVEC">FC Validity<span class="MndtryAstr">*</span></label>
                </div>
			</div>-->
			
			<div class="col-md-6">
                  <!-- First name -->
                <div class="md-form">                   
                    <input type="text" id="LPDT_VFCVALIDITY" name="LPDT_VFCVALIDITY"  maxlength="10" class="form-control LPDTDBfields VEMVAL ADDPro IsNumberFields NoSpecialChar INDM ISDatefield   vehile ">
                    <label for="LPDT_VFCVALIDITY" class="ADDACTVEC">FC Validity<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                </div>
            </div>
			
			
		</div>
		    <div class="form-row">
		      <!--<div class="col-md-6">
				 <div class="md-form">
                  	<input type="text" id="LPDT_VTAXVALIDITY" name="LPDT_VTAXVALIDITY"  class="form-control VEMVAL ADDPro LPDTDBfields vehile ">
                    <label for="LPDT_VTAXVALIDITY" class="ADDACTVEC">Tax Validity<span class="MndtryAstr">*</span></label>
                  </div>
			  </div>-->
			  
			  <div class="col-md-6">
                  <!-- First name -->
                  <div class="md-form"> 
                    <input type="text" id="LPDT_VTAXVALIDITY" name="LPDT_VTAXVALIDITY"  maxlength="10" class="form-control LPDTDBfields VEMVAL ADDPro IsNumberFields NoSpecialChar INDM ISDatefield   vehile ">
                    <label for="LPDT_VTAXVALIDITY" class="ADDACTVEC">Tax Validity<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>
					
				<div class="col-md-6 TAX" style="display:none">
							<div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary  LPDTDBfields   " id="LPDT_VLIFETIMETAX" name="LPDT_VLIFETIMETAX">
                  	<option value="">Select</option>
					<option value="Yes">Yes</option>
					<option value="No">No</option>

				</select>
				<label class="mdb-main-label BTxt9" >Life Time Tax paid<span class="MndtryAstr"></span></label>
                  </div>				  
				  </div>
				
		    </div>
			
			<div class="form-row">
		<div class="col-md-6 ">
											
											<div class="row" >
							<div class="col-md-8  Formcol-mdLR  UAMNupload">
							<div class="md-form">
							<table><tr>
							<td>
							<div id="LPDT_RCUPLOAD"  class="file-field">
								<a class="">
								<i class="fa fa-plus imgAdd" aria-hidden=""></i>
								<input type="file"  name="datafile" onchange="DocFldUpldHndlr(LPDT_RC,'LPDT_RC','LoanDetails','LoanDetails')" class="LPDT_RC"  >
								</a> 
							<input type="text" id="LPDT_RC" data-val="Upload Statement" hidden="hidden" data-Validate="LPDT_RC"  name="LPDT_RC" class="form-control File LPDTDBfields">
							<span class="name1">Upload RC Copy</span>
							</div>
							</td>
							</tr></table>
							</div>    
							</div>  
							<div class="col-md-2 Formcol-mdLR TxtCenter LoanDetails">
							<div class="md-form">
							<div class="LPDT_RC" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(LPDT_RC);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
							<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('LPDT_RC')" alt="Cinque Terre" width="35" height="25"> </div>
							</div>
							</div>  
							</div>
							</div>						
			<div class="col-md-6 ">
											
											<div class="row" >
							<div class="col-md-8  Formcol-mdLR  UAMNupload">
							<div class="md-form">
							<table><tr>
							<td>
							<div id="LPDT_FCUPLOAD"  class="file-field">
								<a class="">
								<i class="fa fa-plus imgAdd" aria-hidden=""></i>
								<input type="file"  name="datafile" onchange="DocFldUpldHndlr(LPDT_FC,'LPDT_FC','LoanDetails','LoanDetails')" class="LPDT_FC"  >
								</a> 
							<input type="text" id="LPDT_FC" data-val="Upload Statement" hidden="hidden" data-Validate="LPDT_FC"  name="LPDT_FC" class="form-control File LPDTDBfields">
							<span class="name1">Upload FC Copy</span>
							</div>
							</td>
							</tr></table>
							</div>    
							</div>  
							<div class="col-md-2 Formcol-mdLR TxtCenter LoanDetails">
							<div class="md-form">
							<div class="LPDT_FC" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(LPDT_FC);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
							<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('LPDT_FC')" alt="Cinque Terre" width="35" height="25"> </div>
							</div>
							</div>  
							</div>
							</div>
							</div>	  
		<!---- -->		  
		     <div class="form-row">
        		<div class="col Btxt3">Insurance Details</div>
        	</div>
				<div class="form-row">
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VFINANCNAME" name="LPDT_VFINANCNAME"  class="form-control VEMVAL ADDPro LPDTDBfields  vehile">
                    <label for="LPDT_VFINANCNAME" class="ADDACTVEC">Financier Name<span class="MndtryAstr">*</span></label>
             </div>
			 </div>
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VNAMEOFCOM" name="LPDT_VNAMEOFCOM"  class="form-control NONumber  VEMVAL ADDPro LPDTDBfields  vehile">
                    <label for="LPDT_VNAMEOFCOM" class="ADDACTVEC">Name of the Company<span class="MndtryAstr">*</span></label>
             </div>
			 </div>
			 
			 </div>
			 <div class="form-row">
			 <div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_VPOLICYNO" name="LPDT_VPOLICYNO" maxlength="15" class="form-control ADDPro VEMVAL LPDTDBfields NoSpecialChar    vehile ">
                    <label for="LPDT_VPOLICYNO" class="ADDACTVEC">Policy Number<span class="MndtryAstr">*</span></label>
             </div>
			 </div>
              <div class="col-md-6">
                <div class="md-form">
                    <input type="text" id="LPDT_VPOLICYISSUEDT" name="LPDT_VPOLICYISSUEDT" onblur="POLICYISSUEDT();"   maxlength="10" class="form-control VEMVAL LPDTDBfields ADDPro ISFutureDateFields IsNumberFields NoSpecialChar INDM ISDatefield vehile">
                    <label for="LPDT_VPOLICYISSUEDT" class="ADDACTVEC">Policy Issued Date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                </div>
				</div>
		</div>
	    
		<div class="form-row">
		<div class="col-md-6">
				  <div class="md-form">
                  	<input type="text" id="LPDT_VPREMIUMPAID" name="LPDT_VPREMIUMPAID" maxlength="6"  class="IsGreaterzeroFld form-control ADDPro VEMVAL LPDTDBfields IsCURCommaFields IsNumberFields vehile">
                    <label for="LPDT_VPREMIUMPAID" class="ADDACTVEC">Premium Paid<span class="MndtryAstr">*</span></label>
                  </div>
			    </div>
		</div>
		
		 <div class="form-row">
			<div class="col Btxt10">Period of Insurance </div>
			</div>
			 <div class="form-row">	 
			    <div class="col-md-6">
                  <div class="md-form">
                      <input type="text" id="LPDT_VPEROIDFRDT" name="LPDT_VPEROIDFRDT"  onblur="CompareDateFields('LPDT_VPEROIDFRDT','LPDT_VPEROIDTODT')" maxlength="10" class="form-control LPDTDBfields VEMVAL IsNumberFields  NoSpecialChar INDM ISDatefield ADDPro vehile">
					  <label for="LPDT_VPEROIDFRDT" class="ADDACTVEC">From date <span class="MndtryAstr">*</span></label>	
					   <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
				   </div>
			    </div>
				<div class="col-md-6">	 
					 <div class="md-form">
					 <input type="text" id="LPDT_VPEROIDTODT" name="LPDT_VPEROIDTODT" onblur="CompareDateFields('LPDT_VPEROIDFRDT','LPDT_VPEROIDTODT')"  maxlength="10" class="form-control LPDTDBfields VEMVAL ADDPro IsNumberFields  NoSpecialChar INDM ISDatefield vehile">
						<label for="LPDT_VPEROIDTODT" class="ADDACTVEC">To date <span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>
		    </div>
		    <div class="form-row"> 
			   <div class="col-md-6">
				  <div class="md-form">
                  	<input type="text" id="LPDT_VIDV" name="LPDT_VIDV" maxlength="11"  class="IsGreaterzeroFld form-control ADDPro VEMVAL IsCURCommaFields LPDTDBfields vehile ">
                    <label for="LPDT_VIDV" class="ADDACTVEC">IDV<span class="MndtryAstr">*</span></label>
                 </div>
			   </div>
		    </div>
		</div>
		
	<!--   -->
		
		
		<div class="machinery PARENTCLASS" style="display:none" >
		<div class="form-row">
        		<div class="col Btxt3">Machinery Details</div>
        		
        	</div>
			<div class="form-row">
			
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_MMANUFACTCOM" name="LPDT_MMANUFACTCOM"  class="form-control MachineMANT ADDPro MEMVAL LPDTDBfields ">
                    <label for="LPDT_MMANUFACTCOM" class="ADDACTMAC">Name of Manufacturing Company<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_MMODELNO" name="LPDT_MMODELNO" maxlength="15" class="form-control MachineMANT ADDPro NoSpecialChar MEMVAL LPDTDBfields    ">
                    <label for="LPDT_MMODELNO" class="ADDACTMAC">Model No<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				</div>
				<div class="form-row">
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_MDESCOFASSET" name="LPDT_MDESCOFASSET"  class="form-control MachineMANT ADDPro MEMVAL LPDTDBfields ">
                    <label for="LPDT_MDESCOFASSET" class="ADDACTMAC">Description of the Asset<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_MNAMEOFSUP" name="LPDT_MNAMEOFSUP"  class="form-control MachineMANT ADDPro MEMVAL LPDTDBfields ">
                    <label for="LPDT_MNAMEOFSUP" class="ADDACTMAC">Name of the Supplier<span class="MndtryAstr">*</span></label>
             </div>
				</div>
		
			
			</div>
			<div class="form-row">
			
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_MORIGIPRICE" name="LPDT_MORIGIPRICE"  maxlength="15" class="form-control ADDPro MachineMANT LPDTDBfields MEMVAL IsGreaterzeroFld IsCURCommaFields">
                    <label for="LPDT_MORIGIPRICE" class="ADDACTMAC">Original Price<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_MQUANTITY" name="LPDT_MQUANTITY" maxlength="5" class="form-control ADDPro MachineMANT LPDTDBfields MEMVAL IsNumberFields ">
                    <label for="LPDT_MQUANTITY" class="ADDACTMAC">Quantity<span class="MndtryAstr">*</span></label>
             </div>
				</div>
			
			
			
			</div>
			<div class="form-row">
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_MMANUFACTYR" name="LPDT_MMANUFACTYR" maxlength="4"  class="form-control ADDPro MachineMANT LPDTDBfields MEMVAL IsNumberFields   ">
                    <label for="LPDT_MMANUFACTYR" class="ADDACTMAC">Manufacturing Year<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_MMACHINECAT" name="LPDT_MMACHINECAT"  class="form-control MachineMANT ADDPro MEMVAL LPDTDBfields ">
                    <label for="LPDT_MMACHINECAT" class="ADDACTMAC">Machinery Category<span class="MndtryAstr">*</span></label>
             </div>
				</div>
			</div>
			
			<div class="form-row">
			<div class="col-md-6">
				<div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro LPDTDBfields"   id="LPDT_MACHINETYPE" name="LPDT_MACHINETYPE">
                  	   <option value="Select">Select</option>
					   <option value="Fresh">Fresh</option>
					   <option value="Old">Old</option>
				    </select>
				       <label class="mdb-main-label BTxt9">Machinery Type<span class="MndtryAstr"></span></label>
                  </div>
				</div>
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_LTV" name="LPDT_LTV" maxlength="5" Onchange="ChkLTV()" class="form-control MachineMANT ADDPro  MEMVAL IsNumberFields LPDTDBfields    ">
                    <label for="LPDT_LTV" class="ADDACTMAC">LTV<span class="MndtryAstr">*</span></label>
                  </div>
				 </div>
			
                  
			</div>
			
			
			
			<div class="form-row">
        		<div class="col Btxt3">Address Machinery Installed</div>
        		
        	</div>
			<div class="form-row">
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_MADDRESS1" name="LPDT_MADDRESS1"  class="form-control MachineMANT ADDPro MEMVAL LPDTDBfields ">
                    <label for="LPDT_MADDRESS1" class="ADDACTMAC">Address 1<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_MADDRESS2" name="LPDT_MADDRESS2"  class="form-control MachineMANT ADDPro MEMVAL LPDTDBfields ">
                    <label for="LPDT_MADDRESS2" class="ADDACTMAC">Address 2<span class="MndtryAstr">*</span></label>
             </div>
				</div>
			
			
			
			
			</div>
			<div class="form-row">
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_MPINCODE" name="LPDT_MPINCODE" maxlength="6" onblur="fnOnFocusOut(this);Pindetls(this,'LPDT_MSTATE','LPDT_MCITY')" class="form-control ADDPro MEMVAL LPDTDBfields IsPinFielde MachineMANT IsNumberFields">
                    <label for="LPDT_MPINCODE" class="ADDACTMAC">Pincode<span class="MndtryAstr">*</span></label>
             </div>
				</div>
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_MCITY" name="LPDT_MCITY"  class="form-control MachineMANT ADDPro MEMVAL LPDTDBfields ">
                    <label for="LPDT_MCITY" class="ADDACTMAC">City<span class="MndtryAstr">*</span></label>
             </div>
				</div> 
				<div class="col-md-6" style="display:none">
				<div class="md-form"> <!--MachineMANT-->
                  	<input type="text" id="LPDT_MSTATE" name="LPDT_MSTATE"  class="form-control  LPDTDBfields ">
                    <label for="LPDT_MCITY" class="ADDACTMAC">State<span class="MndtryAstr">*</span></label>
             </div>
				</div> 
			</div> 
			<div class="form-row"   >
			 <div class="col-md-6 machinery " style="display:none">
			 <div class="md-form">
											<div class=""> </div>
											<div class="row UAMN" >
							<div class="col-md-8  Formcol-mdLR Machinery">
							<div class="md-form">
							<table><tr>
							<td>
							<div id="LPDT_MACHINERYDOCUPLOAD"  class="file-field">
								<a class="">
								<i class="fa fa-plus imgAdd" aria-hidden=""></i>
								<input type="file"  name="datafile" onchange="DocFldUpldHndlr(LPDT_MACHINERYDOC,'LPDT_MACHINERYDOC','MachineryDoc','MachineryDocview')" class="LPDT_MACHINERYDOC"  >
								</a> 
							<input type="text" id="LPDT_MACHINERYDOC" data-val="Upload Document" hidden="hidden" data-Validate="LPDT_MACHINERYDOC"  name="LPDT_MACHINERYDOC" class="form-control voter File LPDTDBfields">
							<span class="name1">Upload Document <span class="MndtryAstr">*</span></span>
							</div>
							</td>
							</tr></table>
							</div>    
							</div>  
							<div class="col-md-2 Formcol-mdLR TxtCenter MachineryDocview">
							<div class="md-form">
							<div class="LPDT_MACHINERYDOC" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(LPDT_MACHINERYDOC);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
							<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('LPDT_MACHINERYDOC')" alt="Cinque Terre" width="35" height="25"> </div>
							</div>
							</div>  
							</div>
							</div>
							</div>
			</br>
			</br>
			</br>
			</div>
			</div>
		
		
		
			
			
			<div class="gold PARENTCLASS" style="display:none">
		<div class="form-row">
        		<div class="col Btxt3">Gold Details</div>
        		
        	</div>
			<div class="form-row">
			
		 
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_GTYPORNAMENT" name="LPDT_GTYPORNAMENT"  class="form-control GoldMANT GEMVAL  ADDPro LPDTDBfields ">
                    <label for="LPDT_GTYPORNAMENT" class="ADDACTGOL">Type of Ornament<span class="MndtryAstr">*</span></label>
             </div>
			 </div>
			 <div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_GGOLDQUAL" name="LPDT_GGOLDQUAL"  maxlength="15" class="form-control ADDPro GoldMANT GEMVAL LPDTDBfields ">
                    <label for="LPDT_GGOLDQUAL" class="ADDACTGOL">Gold Quality<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				 
			
		
		</div>
		 
			<div class="form-row">
			
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_GQUANTITY" name="LPDT_GQUANTITY" maxlength="15"  class="form-control ADDPro GoldMANT LPDTDBfields GEMVAL IsNumberFields IsCURCommaFields ">
                    <label for="LPDT_GQUANTITY" class="ADDACTGOL">Gold Quantity( In Gms)<span class="MndtryAstr">*</span></label>
             </div>
				</div>
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_GPREMARVAL" name="LPDT_GPREMARVAL"  maxlength="15" class="form-control ADDPro GoldMANT LPDTDBfields GEMVAL IsNumberFields   IsCURCommaFields">
                    <label for="LPDT_GPREMARVAL" class="ADDACTGOL">Present Market Value (per Gm)<span class="MndtryAstr">*</span></label>
             </div>
				</div>
			
			
			
			</div>
		<div class="form-row">
			
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_GVALOFGOLD" name="LPDT_GVALOFGOLD" maxlength="15"  class="form-control ADDPro GoldMANT LPDTDBfields GEMVAL IsGreaterzeroFld IsNumberFields IsCURCommaFields">
                    <label for="LPDT_GVALOFGOLD" class="ADDACTGOL">Value of Gold<span class="MndtryAstr">*</span></label>
             </div>
				</div>
			
			
			
			
			</div>
		</div>
		<div class="deposit PARENTCLASS" style="display:none">
		<div class="form-row">
        		<div class="col Btxt3">Deposit Details</div>
        		
        	</div>
			
						<div class="form-row">
			
			<div class="col-md-6">
					<div class="md-form">
						<input type="text" id="LPDT_DLOANAMT" name="LPDT_DLOANAMT"  data-field="LPDT_DLOANAMT|LOANAMT|Yes" onchange="Chkmnd();" maxlength="4" class="form-control ADDPro DEPOSITM DEMVAL LPDTDBfields IsPercentageFld IsNumberFields  ">
						<label for="LPDT_DLOANAMT" class="ADDACTSEC">% of Loan Amount<span class="MndtryAstr"></span></label>
					</div>
			</div>
					
			<div class="col-md-6">
				<div class="md-form">
						<input type="text" id="LPDT_DSECAMT" name="LPDT_DSECAMT" maxlength="15" class="form-control ADDPro DEPOSITM DEMVAL IsNumberFields IsGreaterzeroFld IsCURCommaFields LPDTDBfields ">
						<label for="LPDT_DSECAMT" class="ADDACTSEC">Security Amount (in Rs)<span class="MndtryAstr"></span></label>
				</div>
			</div>
			
		
		
			</div>
			
			<div class="form-row">
			<div class="col-md-6">                  
					<div class="md-form">
						<select class="mdb-select md-form colorful-select dropdown-primary ADDPro DEPOSITM DEMVAL  LPDTDBfields " onchange="Chkdepo();" id="LPDT_DDEPOSIT" name="LPDT_DDEPOSIT">
						<option value="">Select</option>
						<option value="Fixed Deposit">Fixed Deposit</option>
						<option value="Security Deposit">Security Deposit</option>		
					</select>
					<label class="mdb-main-label BTxt9">Deposits<span class="MndtryAstr"></span></label>
					</div>
				</div>					
			</div>
			
			<div class="form-row FIXDEP">
				<div class="col-md-6 ">
					<div class="md-form">
						<input type="text" id="LPDT_DDEPAMT" name="LPDT_DDEPAMT" maxlength="15" class="form-control  ADDPro DEPOSITM DEMVAL IsNumberFields IsGreaterzeroFld IsCURCommaFields LPDTDBfields ">
						<label for="LPDT_DDEPAMT" class="ADDACTSEC">Deposit Amount<span class="MndtryAstr"></span></label>
					</div>
				</div>
				<div class="col-md-6">
					<!-- First name -->
					<div class="md-form">                  
						<input type="text" id="LPDT_DDEPOOPNDATE" name="LPDT_DDEPOOPNDATE"   maxlength="10" class="form-control LPDTDBfields DEMVAL ADDPro IsNumberFields NoSpecialChar  ISDatefield  ISFutureDateFields  ">
						<label for="LPDT_DDEPOOPNDATE" class="ADDACTVEC">Deposit Open Date<span class="MndtryAstr"></span></label>
						<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
					</div>
                </div>
			</div>
			<div class="form-row FIXDEP">
				<div class="col-md-6">
					<!-- First name -->
					<div class="md-form">                  
						<input type="text" id="LPDT_DMATURIYDATE" name="LPDT_DMATURIYDATE"   maxlength="10" class="form-control LPDTDBfields DEMVAL ADDPro IsNumberFields NoSpecialChar  ISDatefield  ISFutureDateFields  ">
						<label for="LPDT_DMATURIYDATE" class="ADDACTVEC">Maturity Date<span class="MndtryAstr"></span></label>
						<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
					</div>
                </div>	
                <div class="col-md-6">
                   <div class="md-form">
                      <input type="text" id="LPDT_DBNKNAME"  name="LPDT_DBNKNAME" class="form-control ADDPro DEPOSITM DEMVAL  IsAlphaFields LPDTDBfields">
                      <label for="LPDT_DBNKNAME" class="ADDACTSEC">Bank Name<span class="MndtryAstr"></span></label>
                   </div>
                </div>				
			</div>
			<div class="form-row FIXDEP">
				<div class="col-md-6">
						<div class="md-form">
							<input type="text" id="LPDT_DIFSC"  name="LPDT_DIFSC" onchange="GETIFSC();" class="form-control ADDPro DEPOSITM DEMVAL IsIFSCFields  LPDTDBfields">
							<label for="LPDT_DIFSC" class="ADDACTSEC">IFSC <span class="MndtryAstr"></span></label>
						</div>
				</div>
			
				<div class="col-md-6">
					<div class="md-form">
						<input type="text" id="LPDT_DBRANCH" disabled name="LPDT_DBRANCH" class="form-control ADDPro BRANVAL DEPOSITM DEMVAL   LPDTDBfields">
						<label for="LPDT_DBRANCH" class="ADDACTSEC">Bank Branch <span class="MndtryAstr"></span></label>
					</div>
				</div>	
			</div>	
			<div class="form-row FIXDEP">
				<div class="col-md-6 ">
					<div class="md-form">
						<input type="text" id="LPDT_DMATURTYAMT" name="LPDT_DMATURTYAMT" maxlength="15" class="form-control  ADDPro DEPOSITM DEMVAL IsNumberFields IsGreaterzeroFld IsCURCommaFields LPDTDBfields ">
						<label for="LPDT_DMATURTYAMT" class="ADDACTSEC">Maturity Amount<span class="MndtryAstr"></span></label>
					</div>
				</div>
				<div class="col-md-6 ">
					<div class="md-form">
						<input type="text" id="LPDT_DROI" name="LPDT_DROI" maxlength="3" class="form-control  ADDPro DEPOSITM DEMVAL IsNumberFields IsGreaterzeroFld IsCURCommaFields LPDTDBfields ">
						<label for="LPDT_DROI" class="ADDACTSEC">ROI<span class="MndtryAstr"></span></label>
					</div>
				</div>				
			</div>
			
			<div class="form-row SECUDEP">
				<div class="col-md-6 ">
					<div class="md-form">
						<input type="text" id="LPDT_DSECDEPAMT" name="LPDT_DSECDEPAMT" maxlength="15" class="form-control  ADDPro DEPOSITM DEMVAL IsNumberFields IsGreaterzeroFld IsCURCommaFields LPDTDBfields ">
						<label for="LPDT_DSECDEPAMT" class="ADDACTSEC">Security Deposit Amount<span class="MndtryAstr"></span></label>
					</div>
				</div>
				<div class="col-md-6">
					<!-- First name -->
					<div class="md-form">                  
						<input type="text" id="LPDT_DDEPDATE" name="LPDT_DDEPDATE"   maxlength="10" class="form-control LPDTDBfields DEMVAL ADDPro IsNumberFields NoSpecialChar  ISDatefield  ISFutureDateFields  ">
						<label for="LPDT_DDEPDATE" class="ADDACTVEC">Deposit Date<span class="MndtryAstr"></span></label>
						<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
					</div>
                </div>
			</div>	
			<div class="form-row SECUDEP">
                <div class="col-md-6">
                   <div class="md-form">
                      <input type="text" id="LPDT_DSECBNKNAME"  name="LPDT_DSECBNKNAME" class="form-control ADDPro DEPOSITM DEMVAL  IsAlphaFields LPDTDBfields">
                      <label for="LPDT_DSECBNKNAME" class="ADDACTSEC">Bank Name<span class="MndtryAstr"></span></label>
                   </div>
                </div>				
				<div class="col-md-6">
						<div class="md-form">
							<input type="text" id="LPDT_DSECIFSC"  name="LPDT_DSECIFSC" onchange="GETSECIFSC();" class="form-control ADDPro DEPOSITM DEMVAL IsIFSCFields  LPDTDBfields">
							<label for="LPDT_DSECIFSC" class="ADDACTSEC">IFSC <span class="MndtryAstr"></span></label>
						</div>
				</div>
			</div>
			<div class="form-row SECUDEP">
				<div class="col-md-6">
					<div class="md-form">
						<input type="text" id="LPDT_DSECBRANCH" disabled name="LPDT_DSECBRANCH" class="form-control ADDPro BRANVAL DEPOSITM DEMVAL   LPDTDBfields">
						<label for="LPDT_DSECBRANCH" class="ADDACTSEC">Bank Branch <span class="MndtryAstr"></span></label>
					</div>
				</div>	
				<div class="col-md-6 ">
					<div class="md-form">
						<input type="text" id="LPDT_DUTRNO" name="LPDT_DUTRNO" maxlength="20" class="form-control  ADDPro DEPOSITM DEMVAL IsNumberFields IsGreaterzeroFld IsCURCommaFields LPDTDBfields ">
						<label for="LPDT_DUTRNO" class="ADDACTSEC">UTR Number<span class="MndtryAstr"></span></label>
					</div>
				</div>					
			</div>			
		<!--<div class="form-row">
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_DINSTINAME" name="LPDT_DINSTINAME"  class="form-control DEPOSITM DEMVAL ADDPro LPDTDBfields ">
                    <label for="LPDT_DINSTINAME" class="ADDACTDEP">Name of the Financial Institute<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_DACCNUMBER" name="LPDT_DACCNUMBER"  maxlength="20" class="form-control DEPOSITM ADDPro DEMVAL LPDTDBfields IsNumberFields   ">
                    <label for="LPDT_DACCNUMBER" class="ADDACTDEP">Account Number<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				
			
				</div> 
				<div class="form-row" >
			<div class="col-md-6">
                  
                  <div class="md-form">
                    
                    <input type="text" id="LPDT_DDATEOFOPEN" name="LPDT_DDATEOFOPEN"   maxlength="10" class="form-control DEPOSITM DEMVAL ISFutureDateFields  IsNumberFields NoSpecialChar INDM ISDatefield LPDTDBfields ADDPro ">
                    <label for="LPDT_DDATEOFOPEN" class="ADDACTDEP">Date of Opening<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_DVALOFDEPO" name="LPDT_DVALOFDEPO" maxlength="15"class="form-control ADDPro DEPOSITM LPDTDBfields DEMVAL IsGreaterzeroFld IsNumberFields IsCURCommaFields ">
                    <label for="LPDT_DVALOFDEPO" class="ADDACTDEP">Value of the Deposit<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				
			</div>	
							<div class="form-row" >
			<div class="col-md-6">
                  
                  <div class="md-form">
                    
                    <input type="text" id="LPDT_DMATURITYDT" name="LPDT_DMATURITYDT"   maxlength="10" class="form-control DEPOSITM DEMVAL ISPastDateFields  IsNumberFields NoSpecialChar INDM ISDatefield LPDTDBfields ADDPro ">
                    <label for="LPDT_DMATURITYDT" class="ADDACTDEP">Maturity Date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_DVALOFMATUTY" name="LPDT_DVALOFMATUTY" onchange="Chkdep();"  maxlength="15" class="form-control DEPOSITM ADDPro LPDTDBfields DEMVAL IsNumberFields IsCURCommaFields ">
                    <label for="LPDT_DVALOFMATUTY" class="ADDACTDEP">Value of Maturity<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				
			</div>	-->
			</div>
		<div class="guarentee PARENTCLASS"  style="display:none">
		<div class="form-row">
        		<div class="col Btxt3">Guarentee Details</div>
        		
        	</div>
			<div class="form-row">
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_GUARANNAME" name="LPDT_GUARANNAME"  class="form-control GUEMVAL GURANTYMANT ADDPro LPDTDBfields ">
                    <label for="LPDT_GUARANNAME" class="ADDACTGUA">Name of the Guarantor<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_RELATIONAPPLI" name="LPDT_RELATIONAPPLI"  class="form-control GUEMVAL GURANTYMANT ADDPro LPDTDBfields ">
                    <label for="LPDT_RELATIONAPPLI" class="ADDACTGUA">Relation Ship with Applicant<span class="MndtryAstr">*</span></label>
             </div>
				</div>
			
			
			
			
			</div>
			
			<div class="form-row">
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_NETWORTHGUAR" name="LPDT_NETWORTHGUAR"  class="form-control ADDPro GUEMVAL GURANTYMANT LPDTDBfields IsGreaterzeroFld IsNumberFields IsCURCommaFields">
                    <label for="LPDT_NETWORTHGUAR" class="ADDACTGUA">Networth of the Guarantor<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				 
				<div class="col-md-6">
                  <div class="md-form">
          
               <div class="select-radio   GURANTYMANT" id="LPDT_TYPEOFGU"> 
                    <div class="custom-control custom-radio custom-control-inline  ">
  <input type="radio" class="custom-control-input ADDPro LPDTDBfields"  value="Third party" id="Thirdparty" name="LPDT_TYPEOFGUAR">
  <label class="custom-control-label" for="Thirdparty">Third party</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input ADDPro LPDTDBfields"    value="Personal" id="Personal" name="LPDT_TYPEOFGUAR">
  <label class="custom-control-label" for="Personal">Personal</label>
</div>
</div>
        <label class="mdb-main-label BTxt9">Type of Guarantor  <span class="MndtryAstr">*</span></label>      
     </div>
 </div>  
				
				
				
				</div>
				
				<div class="form-row">
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_NETWORTDERIVE" name="LPDT_NETWORTDERIVE"  class="form-control ADDPro GURANTYMANT GUEMVAL LPDTDBfields ">
                    <label for="LPDT_NETWORTDERIVE" class="ADDACTGUA">Networth derived from<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				
				
				
				</div>
				 
					
			
			</div>
		<div class="securities PARENTCLASS" style="display:none">
			
			
		<div class="form-row"  >
        		<div class="col Btxt3">Security Details</div>
        		
        	</div>
			<div class="form-row">
			<!--<div class="col-md-6">
                  <div class="md-form">
          
               <div class="select-radio   SECURITYMANT " id="LPDT_STYPESEC"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input ADDPro LPDTDBfields"  value="Shares" id="Shares" name="LPDT_STYPEOFSEC">
  <label class="custom-control-label" for="Shares">Shares</label>
</div>


<div class="custom-control custom-radio custom-control-inline ">
  <input type="radio" class="custom-control-input ADDPro LPDTDBfields"    value="Mutual Funds" id="MutualFunds" name="LPDT_STYPEOFSEC">
  <label class="custom-control-label" for="MutualFunds">Mutual Funds</label>
</div>
</div>
        <label class="mdb-main-label BTxt9">Type of Security <span class="MndtryAstr">*</span></label>      
     </div>
 </div>-->
 
 				<div class="col-md-6">                  
					<div class="md-form">
						<select class="mdb-select md-form colorful-select dropdown-primary ADDPro SECURITYMANT SEMVAL LPDTDBfields " onchange="TYPOFSEC();" id="LPDT_STYPEOFSEC" name="LPDT_STYPEOFSEC">
						<option value="">Select</option>
						<option value="Shares">Shares</option>		
						<option value="Mutual Funds">Mutual Funds</option>							
						<option value="Bank Guarantee">Bank Guarantee</option>		
						<option value="SBLC (Standby Letter of Credit)">SBLC (Standby Letter of Credit)</option>
						<option value="LIC Policies">LIC Policies</option>
						<option value="Bonds">Bonds</option>
						<option value="NCD (Non convertible Debentures)">NCD (Non convertible Debentures)</option>					
					</select>
					<label class="mdb-main-label BTxt9">Type of Security<span class="MndtryAstr"></span></label>
					</div>
				</div>	
			
			<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_SNAMEOFCOM" name="LPDT_SNAMEOFCOM"  class="form-control SECURITYMANT SEMVAL ADDPro LPDTDBfields ">
                    <label for="LPDT_SNAMEOFCOM" class="ADDACTSEC">Name of the Company<span class="MndtryAstr">*</span></label>
             </div>
				</div>
			
			
		</div>
		
		<div class="form-row">
		
		<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_SNOOFUNITS" name="LPDT_SNOOFUNITS" maxlength="3" class="form-control ADDPro SECURITYMANT SEMVAL LPDTDBfields IsNumberFields ">
                    <label for="LPDT_SNOOFUNITS" class="ADDACTSEC">No of units<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_SPREMARKETVAL" name="LPDT_SPREMARKETVAL" maxlength="15" class="form-control ADDPro SEMVAL SECURITYMANT LPDTDBfields IsNumberFields IsGreaterzeroFld IsCURCommaFields">
                    <label for="LPDT_SPREMARKETVAL" class="ADDACTSEC">Present market value of each unit<span class="MndtryAstr">*</span></label>
             </div>
				</div>
			
		
		
		</div>
		
		<div class="form-row">
		
		<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_STOTVALOFSEC" name="LPDT_STOTVALOFSEC" maxlength="15" class="form-control ADDPro SECURITYMANT SEMVAL LPDTDBfields IsNumberFields IsGreaterzeroFld IsCURCommaFields ">
                    <label for="LPDT_STOTVALOFSEC" class="ADDACTSEC">Total value of the secuirty<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				
				<div class="col-md-6">
				<div class="md-form">
                  	<input type="text" id="LPDT_SDEMATNO" name="LPDT_SDEMATNO" maxlength="15" class="form-control ADDPro SECURITYMANT SEMVAL LPDTDBfields ">
                    <label for="LPDT_SDEMATNO" class="ADDACTSEC">Demat Number<span class="MndtryAstr">*</span></label>
             </div>
				</div>
		</div>
		
		<div class="form-row">
				<!--<div class="col-md-6">                  
					<div class="md-form">
						<select class="mdb-select md-form colorful-select dropdown-primary ADDPro SECURITYMANT SEMVAL LPDTDBfields " onchange="TYPOFSEC();" id="LPDT_STYPOFSEC" name="LPDT_STYPOFSEC">
						<option value="">Select</option>
						<option value="Bank Guarantee">Bank Guarantee</option>		
						<option value="SBLC (Standby Letter of Credit)">SBLC (Standby Letter of Credit)</option>
						<option value="LIC Policies">LIC Policies</option>
						<option value="Bonds">Bonds</option>
						<option value="NCD (Non convertible Debentures)">NCD (Non convertible Debentures)</option>					
					</select>
					<label class="mdb-main-label BTxt9">Type of Security<span class="MndtryAstr"></span></label>
					</div>
				</div>	-->
				<div class="col-md-6">                  
					<div class="md-form">
						<select class="mdb-select md-form colorful-select dropdown-primary ADDPro SECURITYMANT SEMVAL LPDTDBfields " onchange="CHKCHRGTYP();" id="LPDT_SCHRGTYP" name="LPDT_SCHRGTYP">
						<option value="">Select</option>
						<option value="Pari-passo - 1st charge">Pari-passo - 1st charge</option>
						<option value="Pari-passo - 2nd charge">Pari-passo - 2nd charge</option>
						<option value="Exclusive">Exclusive</option>
						<option value="Subservient">Subservient</option>
						<option value="Consortium">Consortium</option>
						<option value="others">others</option>					
					</select>
					<label class="mdb-main-label BTxt9">Charge Type<span class="MndtryAstr"></span></label>
					</div>
				</div>
			<div class="col-md-6 SOTHR">
                <div class="md-form">
                  	<input type="text" id="LPDT_SOTHER" name="LPDT_SOTHER"  class="form-control ADDPro SEMVAL    LPDTDBfields">
                    <label for="LPDT_SOTHER" class="ADDAL ACTVALADD">Others<span class="MndtryAstr"></span></label>
                </div>
            </div>
		</div>	
		<div class="form-row BNKGRA">
			<div class="col-md-6">
					<!-- First name -->
					<div class="md-form">                  
						<input type="text" id="LPDT_SDTOFDOCU" name="LPDT_SDTOFDOCU"   maxlength="10" class="form-control LPDTDBfields SEMVAL SECURITYMANT ADDPro IsNumberFields NoSpecialChar  ISDatefield  ISFutureDateFields  ">
						<label for="LPDT_SDTOFDOCU" class="ADDACTSEC">Date of Document<span class="MndtryAstr"></span></label>
						<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
					</div>
            </div>
            <div class="col-md-6">
                   <div class="md-form">
                      <input type="text" id="LPDT_SNAMEOFBNK"  name="LPDT_SNAMEOFBNK" class="form-control ADDPro  SEMVAL  IsAlphaFields LPDTDBfields">
                      <label for="LPDT_SNAMEOFBNK" class="ADDACTSEC">Name of Issuing Bank<span class="MndtryAstr"></span></label>
                   </div>
            </div>				
		
		</div>	
	<div class="form-row BNKGRA">
	       <div class="col-md-6">
                   <div class="md-form">
                      <input type="text" id="LPDT_SBENEFINAME"  name="LPDT_SBENEFINAME" class="form-control ADDPro  SEMVAL  IsAlphaFields LPDTDBfields">
                      <label for="LPDT_SBENEFINAME" class="ADDACTSEC">Beneficiary Name<span class="MndtryAstr"></span></label>
                   </div>
            </div>
			<div class="col-md-6">
					<!-- First name -->
					<div class="md-form">                  
						<input type="text" id="LPDT_SDATEEXPRY" name="LPDT_SDATEEXPRY"   maxlength="10" class="form-control LPDTDBfields SEMVAL SECURITYMANT ADDPro IsNumberFields NoSpecialChar  ISDatefield  ISFutureDateFields  ">
						<label for="LPDT_SDATEEXPRY" class="ADDACTSEC">Expiry date<span class="MndtryAstr"></span></label>
						<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
					</div>
            </div>			
	
	</div>	
	<div class="form-row BNKGRA">
	       <div class="col-md-6">
                   <div class="md-form">
                      <input type="text" id="LPDT_SVALUEINRS"  name="LPDT_SVALUEINRS" class="form-control ADDPro  SEMVAL  IsAlphaFields LPDTDBfields">
                      <label for="LPDT_SVALUEINRS" class="ADDACTSEC">Value in Rs.<span class="MndtryAstr"></span></label>
                   </div>
            </div>
	       <div class="col-md-6">
                   <div class="md-form">
                      <input type="text" id="LPDT_SCLAIMPEROD"  name="LPDT_SCLAIMPEROD" class="form-control ADDPro  SEMVAL  IsAlphaFields LPDTDBfields">
                      <label for="LPDT_SCLAIMPEROD" class="ADDACTSEC">Claim Period-in days/months<span class="MndtryAstr"></span></label>
                   </div>
            </div>		
	</div>
	<div class="form-row LIC">
	       <div class="col-md-6">
                   <div class="md-form">
                      <input type="text" id="LPDT_SSHARESFUND"  name="LPDT_SSHARESFUND" class="form-control ADDPro  SEMVAL  IsAlphaFields LPDTDBfields">
                      <label for="LPDT_SSHARESFUND" class="ADDACTSEC">Same as Shares & Mutual Funds<span class="MndtryAstr"></span></label>
                   </div>
            </div>
	       <div class="col-md-6">
                   <div class="md-form">
                      <input type="text" id="LPDT_SPOLICYNO"  name="LPDT_SPOLICYNO" class="form-control ADDPro  SEMVAL  IsAlphaFields LPDTDBfields">
                      <label for="LPDT_SPOLICYNO" class="ADDACTSEC">Policy Number - LIC Policy<span class="MndtryAstr"></span></label>
                   </div>
            </div>		
	</div>	
	<div class="form-row LIC">
			<div class="col-md-6">
					<!-- First name -->
					<div class="md-form">                  
						<input type="text" id="LPDT_SINCLDEXPDT" name="LPDT_SINCLDEXPDT"   maxlength="10" class="form-control LPDTDBfields SEMVAL SECURITYMANT ADDPro IsNumberFields NoSpecialChar  ISDatefield  ISFutureDateFields  ">
						<label for="LPDT_SINCLDEXPDT" class="ADDACTSEC">Expiry date<span class="MndtryAstr"></span></label>
						<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
					</div>
            </div>		
	</div>

</div>	

		<div class="Cashcollateral PARENTCLASS" style="display:none">
			
			
			<div class="form-row"  >
				<div class="col Btxt3">Cash collateral</div>
					
			</div>
			<div class="form-row">
			
			<div class="col-md-6">
					<div class="md-form">
						<input type="text" id="LPDT_CLOANAMT" name="LPDT_CLOANAMT" data-field="LPDT_CLOANAMT|LOANAMT|Yes" onchange="Chkmnd();" maxlength="4" class="form-control ADDPro  SECURITYMANT CASVAL LPDTDBfields IsNumberFields IsPercentageFld    ">
						<label for="LPDT_CLOANAMT" class="ADDACTSEC">% of Loan Amount<span class="MndtryAstr"></span></label>
					</div>
			</div>
					
			<div class="col-md-6">
				<div class="md-form">
						<input type="text" id="LPDT_CSECAMT" name="LPDT_CSECAMT" maxlength="15" class="form-control ADDPro SECURITYMANT CASVAL IsNumberFields IsGreaterzeroFld IsCURCommaFields LPDTDBfields ">
						<label for="LPDT_CSECAMT" class="ADDACTSEC">Security Amount (in Rs)<span class="MndtryAstr"></span></label>
				</div>
			</div>
			
		
		
			</div>
		</div>
		
				<div class="Hypothecation PARENTCLASS" style="display:none">
			
			
			<div class="form-row"  >
				<div class="col Btxt3">Hypothecation - Stocks/Current Assets</div>
					
			</div>
			<div class="form-row">
			
			<div class="col-md-6">
					<div class="md-form">
						<input type="text" id="LPDT_HLOANAMT" name="LPDT_HLOANAMT" data-field="LPDT_HLOANAMT|LOANAMT|Yes" onchange="Chkmnd()" maxlength="4" class="form-control ADDPro SECURITYMANT HYPVAL LPDTDBfields IsNumberFields IsPercentageFld   ">
						<label for="LPDT_HLOANAMT" class="ADDACTSEC">% of Loan Amount<span class="MndtryAstr"></span></label>
					</div>
			</div>
					
			<div class="col-md-6">
				<div class="md-form">
						<input type="text" id="LPDT_HSECAMT" name="LPDT_HSECAMT" maxlength="15" class="form-control ADDPro SECURITYMANT HYPVAL IsNumberFields IsGreaterzeroFld IsCURCommaFields LPDTDBfields ">
						<label for="LPDT_HSECAMT" class="ADDACTSEC">Security Amount (in Rs)<span class="MndtryAstr"></span></label>
				</div>
			</div>
			
		
		
			</div>
			<div class="form-row">		
				<div class="col-md-6">                  
					<div class="md-form">
						<select class="mdb-select md-form colorful-select dropdown-primary ADDPro SECURITYMANT HYPVAL LPDTDBfields "  id="LPDT_HHYPOTYPE" name="LPDT_HHYPOTYPE">
						<option value="">Select</option>
						<option value="Current Assets">Current Assets</option>
						<option value="Movable Fixed Assets">Movable Fixed Assets</option>
					</select>
					<label class="mdb-main-label BTxt9 ADDACTSEC">Hypothecation Type<span class="MndtryAstr"></span></label>
					</div>
				</div>	
				<div class="col-md-6 " >                  
					<div class="md-form">
						<select class="mdb-select md-form colorful-select dropdown-primary ADDPro SECURITYMANT HYPVAL LPDTDBfields " onchange="CHKCHRGTYP();" id="LPDT_HCHRGTYP" name="LPDT_HCHRGTYP">
						<option value="">Select</option>
						<option value="Pari-passo - 1st charge">Pari-passo - 1st charge</option>
						<option value="Pari-passo - 2nd charge">Pari-passo - 2nd charge</option>
						<option value="Exclusive">Exclusive</option>
						<option value="Subservient">Subservient</option>
						<option value="Consortium">Consortium</option>
						<option value="others">others</option>
					</select>
					<label class="mdb-main-label BTxt9 ADDACTSEC">Charge Type<span class="MndtryAstr"></span></label>
					</div>
				</div>	
				
			</div>	
			<div class="form-row HOTHR">
			<div class="col-md-6">
                <div class="md-form">
                  	<input type="text" id="LPDT_HOTHER" name="LPDT_HOTHER"  class="form-control ADDPro HYPVAL    LPDTDBfields">
                    <label for="LPDT_HOTHER" class="ADDACTSEC">Others<span class="MndtryAstr"></span></label>
                </div>
            </div>
			</div>			
		</div>


	
 <div class="form-row  ADDFIELDS" >
 <div class="col-md-6">
 <div class="md-form" >
                  	<input type="text" id="LPDT_VALOFSECURITY" name="LPDT_VALOFSECURITY"  maxlength="15" class="form-control ADDPro LPDTDBfields EMVALADD IsGreaterzeroFld IsNumberFields IsCURCommaFields ADDFIELDSMND LPDTMndtry">
                    <label for="LPDT_VALOFSECURITY" class="ADDAL ACTVALADD">Value of the Security <span class="MndtryAstr">*</span></label>
             </div>
              
		</div>
		<div class="col-md-6">
                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro LPDTDBfields EMVALADD  ADDFIELDSMND" id="LPDT_PROPUSAGE" onchange="GetPropType();" name="LPDT_PROPUSAGE">
                  	<option value="">Select</option>
  					<option value="Self Occupied">Self Occupied</option>
 					<option value="Rented">Rented</option>
 					<option value="Vacant">Vacant</option>
  				    </select>
                    <label class="mdb-main-label BTxt9">Property Usage<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
		<div class="col-md-6  PROPDISB ">
                  
                  <div class="md-form" style="display:none">
                    
                    <input type="text" id="LPDT_MATURDATE"  name="LPDT_MATURDATE"   maxlength="10" class="form-control LPDTDBfields ADDPro  EMVALADD IsNumberFields NoSpecialChar INDM ISDatefield ">
                    <label for="LPDT_MATURDATE" class="ADDPro ACTVALADD">Maturity date</label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
     </div>
				
		
	</div>
		<div class="form-row PROPDISB ADDFIELDS ">
			
				<div class="col-md-6">
				<div class="md-form" style="display:none">
                  	<input type="text" id="LPDT_VALONMATURITY" name="LPDT_VALONMATURITY" maxlength="15" class="form-control ADDPro LPDTDBfields  EMVALADD IsNumberFields IsCURCommaFields">
                    <label for="LPDT_VALONMATURITY" class="ADDPro ACTVALADD">Value on Maturity</label>
             </div>
				</div>
				<div class="col-md-6">
            	<div class="md-form" style="display:none">
            	    <input type="text" id="LPDT_DEMANTAMT" disabled name="LPDT_DEMANTAMT" maxlength="15" class="form-control IsCURCommaFields  EMVALADD LPDTDBfields IsNumberFields IsCURCommaFields"> 
            	    <label for="LPDT_DEMANTAMT" class="ACTVALADD">Property Amount (PF)<span class="MndtryAstr"></span></label>
            	 </div>
             </div>
				
				
		
		</div>
		
		
		
		 
		 
		
		 <div class="form-row ADDFIELDS">
            
			<div class="col-md-6 PROENABLE  " >
            	<div class="md-form" >
            	    <input type="text" id="LPDT_PROJECTNAMEPRO"  name="LPDT_PROJECTNAMEPRO" class="form-control   EMVALADD LPDTDBfields"> 
            	    <label for="LPDT_PROJECTNAMEPRO" class="ACTVALADD">Project Name<span class="MndtryAstr"></span></label>
            	 </div>
             </div>
			 
			 
             <div class="col-md-6 PROPDISB " >
            	<div class="md-form" style="display:none">
            	    <input type="text" id="LPDT_DEMANTAMTGST" disabled name="LPDT_DEMANTAMTGST" class="form-control IsNumberFields EMVALADD IsCURCommaFields  LPDTDBfields"> 
            	    <label for="LPDT_DEMANTAMTGST" class="ACTVALADD">Property Amount Incl. GST<span class="MndtryAstr"></span></label>
            	 </div>
             </div>
			 
         </div>
		 
        <div class="form-row  ADDFIELDS">
           
            
                <div class="col-md-6">
                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro LPDTDBfields EMVALADD ADDFIELDSMND "  id="LPDT_PROPTYPE" name="LPDT_PROPTYPE">
                  	<option value="">Select</option>
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
 					<option value="Mixed (Resi cum Commercial)">Mixed (Resi cum Commercial)</option>
  					
				</select>
				<label class="mdb-main-label BTxt9">Property Type <span class="MndtryAstr">*</span></label>
                  </div>
               </div>
			   <div class="col-md-6">
                  <div class="md-form">
          
               <div class="select-radio  ADDFIELDSMND"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input  ADDPro LPDTDBfields" value="Freehold" id="FreeHold" name="LPDT_PROPTITLE">
  <label class="custom-control-label" for="FreeHold">Freehold</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input ADDPro LPDTDBfields" value="Leasehold" id="LeaseHold" name="LPDT_PROPTITLE">
  <label class="custom-control-label" for="LeaseHold">Leasehold</label>
</div>


</div>
                  <label class="mdb-main-label BTxt9">Property Title <span class="MndtryAstr">*</span></label>      
                  </div>
             </div>
           
        </div>
        
       	 
			<div class="form-row  ADDFIELDS">
				<div class="col-md-6">
					<div class="md-form">          
						<div class="select-radio  ADDFIELDSMND"> 
							<div class="custom-control custom-radio custom-control-inline">
								<input type="radio" class="custom-control-input ADDPro LPDTDBfields" onclick="CheckPropOwner();" value="Sole" id="Sole" name="LPDT_PROPOWNSHIP">
								<label class="custom-control-label" for="Sole">Sole</label>
							</div>


							<div class="custom-control custom-radio custom-control-inline">
								<input type="radio" class="custom-control-input ADDPro LPDTDBfields" onclick="CheckPropOwner();"  value="Joint" id="Joint" name="LPDT_PROPOWNSHIP">
								<label class="custom-control-label" for="Joint">Joint</label>
							</div>
						</div>
							<label class="mdb-main-label BTxt9">Property Ownership <span class="MndtryAstr">*</span></label>      
					</div>
				</div>
		
				<div class="col-md-6">
					<div class="md-form">
						<input type="text" id="LPDT_PROJECTNAME" name="LPDT_PROJECTNAME"  class="form-control NoSpecialChar  LPDTDBfields">
						<label for="LPDT_PROJECTNAME" class="ADDPro ACTVALADD">Project Name</label>
					</div>
				</div>
			</div>
	
		
        <div class="form-row  ADDFIELDS">
           
            
             
            
 <div class="col-md-6">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro EMVALADD LPDTDBfields" onchange="getCusNames();GetOwnerCusId();" multiple id="LPDT_PROPOWNER" name="LPDT_PROPOWNER">
				 <option value="" disabled>--Select--</option>
				</select>
				<label class="mdb-main-label BTxt9">Property Owner <span class="MndtryAstr"></span></label>
                  </div>
               </div>
 
<div class="col-md-6">
              <div class="md-form">
                <label for="" class="active">Customer Name</label>
                <br>
               
           		<textarea class="form-control LPDTDBfields EMVALADD DSVLBL Btxt10" rows="5"  id="LPDT_CUSTNAME" name="LPDT_CUSTNAME" style="height: 100px;width:380px;"></textarea>
           		 </div> 
             </div>
 
       	</div>
		<div class="form-row  ADDFIELDS">
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
        <div class="form-row ADDFIELDS">
        	<div class="col Btxt10">COLLATERAL ADDRESS</div>
        </div>
        </br>
        
        <div class="form-row ADDFIELDS">
           
            <div class="col">
            	<div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" onclick="ChkPerson();" class="custom-control-input  LPDTDBfields" id="LPDT_SAMADDR" name="LPDT_SAMADDR">
  					<label class="custom-control-label" for="LPDT_SAMADDR">Same Address as</label>
				</div>
				</div>
            </div>
   
        </div>
        
        <div class="form-row ADDDET ADDFIELDS">
                <div class="col">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select EMVALADD dropdown-primary  LPDTDBfields" onchange="getaddresstype();Getcusid();" id="LPDT_PERSONS" name="LPDT_PERSONS">
				 <option value="" selected >--Select--</option>
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
        <div class="form-row ADDFIELDS">
            <div class="col">
                  <div class="md-form">
                  	<input type="text" id="LPDT_ADDTLINEI" name="LPDT_ADDTLINEI" disabled class="form-control ADDAC COLAD EMVALADD ADDFIELDSMND LPDTDBfields PERCHG">
                    <label for="LPDT_ADDTLINEI" class="ADDAL ACTVALADD">Address Line 1 <span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="LPDT_ADDRLINEII" name="LPDT_ADDRLINEII" disabled class="form-control ADDAC COLAD EMVALADD  LPDTDBfields PERCHG">
                    <label for="LPDT_ADDRLINEII" class="ADDAL ACTVALADD">Address Line 2</label>
                  </div>
                </div>
           </div>
           <div class="form-row ADDFIELDS" >
           
            <div class="col">
                 
                  <div class="md-form">
                  	<input type="text" id="LPDT_PINCODE" maxlength="6" disabled name="LPDT_PINCODE" onblur="fnOnFocusOut(this);Pindetls(this,'LPDT_STATE','LPDT_CITY')" class="form-control ADDAC IsNumberFields NoSpecialChar IsPinFielde EMVALADD COLAD  ADDFIELDSMND PERCHG LPDTDBfields">
                    <label for="LPDT_PINCODE" class="ADDAL ACTVALADD">Pin Code <span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="LPDT_CITY" name="LPDT_CITY" disabled class="form-control COLAD ADDAC PERCHG EMVALADD  ADDFIELDSMND  LPDTDBfields">
                    <label for="LPDT_CITY" class="ADDAL ACTVALADD">City <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div>
           <div class="form-row ADDFIELDS">
            <div class="col">
                <div class="md-form">
                  	<input type="text" id="LPDT_STATE" name="LPDT_STATE" disabled class="form-control COLAD ADDAC EMVALADD  ADDFIELDSMND LPDTDBfields">
                    <label for="LPDT_STATE" class="ADDAL ACTVALADD">State <span class="MndtryAstr">*</span></label>
                </div>
                </div>
                <div class="col"></div>
           </div>
           <div class="form-row ADDFIELDS">
            <div class="col">
                <div class="md-form">
                  	<input type="text" id="LPDT_YERADDR" maxlength="2" disabled onblur="yearsCompare('LPDT_YEAATCITY','LPDT_YERADDR','Years at address value cannot be greater than Years at city')"  name="LPDT_YERADDR" class="form-control COLAD ADDAC EMVALADD IsNumberFields NoSpecialChar PERCHG  ADDFIELDSMND LPDTDBfields">
                    <label for="LPDT_YERADDR" class="ACTVALADD ADDAL">Years at Address <span class="MndtryAstr">*</span></label>
                </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="LPDT_YEAATCITY" maxlength="2" onblur="yearsCompare('LPDT_YEAATCITY','LPDT_YERADDR','Years at address value cannot be greater than Years at city')"  name="LPDT_YEAATCITY" class="form-control IsNumberFields  NoSpecialChar ADDFIELDSMND PERCHG EMVALADD LPDTDBfields">
                    <label for="LPDT_YEAATCITY" class="ACTVALADD">Years at City 	<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div>
		   
		           <div class="form-row ADDFIELDS">
            <div class="col">
                  <div class="md-form">
                  	<input type="text" id="LPDT_LANDINSQFT" name="LPDT_LANDINSQFT" disabled class="form-control ADDAC COLAD EMVALADD IsNumberFields ADDFIELDSMND LPDTDBfields PERCHG">
                    <label for="LPDT_LANDINSQFT" class="ADDAL ACTVALADD">Land Area in sqft<span class="MndtryAstr"></span></label>
					</div>
            </div>
            <div class="col">
                  <div class="md-form">
                  	<input type="text" id="LPDT_BULDINSQFT" name="LPDT_BULDINSQFT" disabled class="form-control ADDAC COLAD EMVALADD IsNumberFields ADDFIELDSMND LPDTDBfields PERCHG">
                    <label for="LPDT_BULDINSQFT" class="ADDAL ACTVALADD">Buildup area in sqft<span class="MndtryAstr"></span></label>
					</div>
            </div>			
		</div>	
		<div class="form-row ADDFIELDS">
			<div class="col-md-6">                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro LPDTDBfields EMVALADD ADDFIELDSMND " onchange="MORTGETYP();" id="LPDT_MORTTYPE" name="LPDT_MORTTYPE">
						<option value="">Select</option>  			
						<option value="Single">Single</option>
						<option value="Joint">Joint</option>
					</select>
						<label class="mdb-main-label BTxt9">Mortgage Type<span class="MndtryAstr"></span></label>
                  </div>
            </div>		
			<div class="col-md-6">                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro LPDTDBfields EMVALADD ADDFIELDSMND " onchange="CHKCHRGTYP();" id="LPDT_CHRGTYPE" name="LPDT_CHRGTYPE">
                  	<option value="">Select</option>
  					<option value="Pari-passo - 1st charge">Pari-passo - 1st charge</option>
 					<option value="Pari-passo - 2nd charge">Pari-passo - 2nd charge</option>
					<option value="Exclusive">Exclusive</option>
					<option value="Subservient">Subservient</option>
					<option value="Consortium">Consortium</option>
					<option value="others">others</option>
					

				</select>
				<label class="mdb-main-label BTxt9">Charge Type<span class="MndtryAstr"></span></label>
                  </div>
               </div>
		</div>
		
		<div class="form-row ADDFIELDS BNKGRA">
					<div class="col-md-6">                  
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro LPDTDBfields EMVALADD ADDFIELDSMND "  id="LPDT_PBNKNAME" name="LPDT_PBNKNAME">
						<option value="">Select</option>  			
						<option value="Multiple Banking Arrangement">Multiple Banking Arrangement</option>
						<option value="Consortium">Consortium</option>
					</select>
						<label class="mdb-main-label BTxt9">Bank name<span class="MndtryAstr"></span></label>
                  </div>
            </div>	
		</div>
		<div class="form-row ADDFIELDS OTHR">		
            <div class="col-md-6">
                <div class="md-form">
                  	<input type="text" id="LPDT_OTHER" name="LPDT_OTHER" disabled class="form-control COLAD ADDAC EMVALADD   LPDTDBfields">
                    <label for="LPDT_OTHER" class="ADDAL ACTVALADD">Others<span class="MndtryAstr"></span></label>
                </div>
            </div>
		</div>
           <div class="form-row ADDFIELDS VECH CHKBX">
            <div class="col-md-6">
            	<div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input EMVALADD  LPDTDBfields" id="LPDT_PROPDOCCOLL" onchange="DocView();" name="LPDT_PROPDOCCOLL">
  					<label class="custom-control-label" for="LPDT_PROPDOCCOLL">Property Documents Collected</label>
				</div>
				</div>
            </div>
			 <div class="col-md-6 VECHID">
                    <div class="col Btxt10">Upload Documents</div>
                     <div data-for="BankDetail1" class="BankDetail1"> 
                     </div>
                     <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="BankDetail1" style="display:none">
                        <div data-row="" class="card-body px-lg-5 pt-0 DYNROW">
                           </br>
                           <input type="text" id="PRDO_PRCSID" hidden="hidden" name="PRDO_PRCSID" value="" class="form-control PRDODBfields">
                           <input type="text" id="PRDO_ACTIVITYID" hidden="hidden" name="PRDO_ACTIVITYID" class="form-control PRDODBfields">
                           <input type="text" id="PRDO_DTCREATED" hidden="hidden" name="PRDO_DTCREATED" class="form-control PRDODBfields">
                           <input type="text" id="PRDO_CREATEDBY" hidden="hidden" name="PRDO_CREATEDBY" class="form-control PRDODBfields">
                           <input type="text" id="PRDO_DTMODIFIED" hidden="hidden" name="PRDO_DTMODIFIED" class="form-control PRDODBfields">
                           <input type="text" id="PRDO_MODIFIEDBY" hidden="hidden" name="PRDO_MODIFIEDBY" class="form-control PRDODBfields">
                           <input type="text" id="PRDO_PROPNUM" hidden="hidden" name="PRDO_PROPNUM" class="form-control PRDODBfields">
						   <div class="form-row">
                              <div class="col">
                                 <div class="md-form " >
                                    <table>
                                       <tr>
                                          <td>
                                             <div id="PRDO_DOCUMENTUPLOAD"  class="file-field">
                                                <a class="">
                                                <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                                <input type="file"  name="datafile" onchange="DocFldUpldHndlr_V1(this,'PRDO_DOCUMENT'+$(this).closest('.DYNROW').attr('data-row'),'PRDO_DOCUMENT','PDDetails','PDDate','PD',$(this).closest('.DYNROW'))" class="PRDO_DOCUMENT"  >
                                                </a>
                                                <input type="text" id="PRDO_DOCUMENT" hidden="hidden" data-Validate="PRDO_DOCUMENT"  name="PRDO_DOCUMENT" class="form-control File PRDODBfields PRDOMndtry">
                                                <span class="name">Upload Documents</span> 
                                             </div>
                                          </td>
                                          <div class="md-form">
                                             <div class="md-form Formcol-mdLR">
                                                <div class="PRDO_DOCUMENT" style="display:none"> 
                                                <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="" class=" DELBTN DELETEDOCUMNETS"/>      
                                       
                                        <!--  <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile($('#PRDO_PDATTACHMNT'+$(event.target).closest('.DYNROW').attr('data-row')));" 
                                                alt="Cinque Terre" width="20" height="20">   -->
                                                <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" 
                                                onclick="GrdDocDwnld('PRDO_DOCUMENT'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" 
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
                        <a onclick="AddPageMultiData('',$('#PRDO_PRCSID').val(),$('#LPDT_PROPERTYNO').val(),'BankDetail1','PRDODBfields');" class="Btxt4 FltRight ADDBTN "  href="#">+ Add</a>
                        <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                     </div>
                  </div>	 
			<!-- <div class="col-md-6 ADDFIELDS PropertyDoc ">
			 <div class="md-form">
											<div class=""> </div>
											<div class="row UAMN" >
							<div class="col-md-8  Formcol-mdLR UAMNupload">
							<div class="md-form">
							<table><tr>
							<td>
							<div id="LPDT_PROPERTYDOCUPLOAD"  class="file-field">
								<a class="">
								<i class="fa fa-plus imgAdd" aria-hidden=""></i>
								<input type="file"  name="datafile" onchange="DocFldUpldHndlr(LPDT_PROPERTYDOC,'LPDT_PROPERTYDOC','PropertyDoc','PropertyDocview')" class="LPDT_PROPERTYDOC"  >
								</a> 
							<input type="text" id="LPDT_PROPERTYDOC" data-val="Upload Document" hidden="hidden" data-Validate="LPDT_PROPERTYDOC"  name="LPDT_PROPERTYDOC" class="form-control voter File LPDTMndtry LPDTDBfields">
							<span class="name1">Upload Document*</span>
							</div>
							</td>
							</tr></table>
							</div>    
							</div>  
							<div class="col-md-2 Formcol-mdLR TxtCenter PropertyDocview">
							<div class="md-form">
							<div class="LPDT_PROPERTYDOC" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(LPDT_PROPERTYDOC);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
							<div class="HyperControls form-row" >
							<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('LPDT_PROPERTYDOC')" alt="Cinque Terre" width="35" height="25"> </div>
							<a onclick="AddPageMultiData('',$('#PRDO_PRCSID').val(),'','BankDetail1','PRDODBfields');" class="Btxt4 FltRight ADDBTN "  href="#">+ Add another document</a>
                         <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a>
                     </div>
							</div>
							</div>  
							</div>
							</div>
							</div> -->
			</br>
		
		</br>
		</br>
			</div>
	 <div class="form-row IMPLEMENT">
		<div class="col-md-6">
            <div class="md-form">
                <select class="mdb-select md-form colorful-select dropdown-primary LPDTDBfields IMPLEMND"  id="LPDT_IMPCATEGORY" name="LPDT_IMPCATEGORY">
                <option value="">Select</option>
				<option value="Small">Small</option>
				<option value="Medium">Medium</option>
				<option value="Big">Big</option>
				</select>
				<label class="mdb-main-label BTxt9">Category<span class="MndtryAstr"></span></label>
            </div>
		</div>
		<div class="col-md-6">
            <div class="md-form">
                <select class="mdb-select md-form colorful-select dropdown-primary LPDTDBfields IMPLEMND"  id="LPDT_IMPLEMENT" name="LPDT_IMPLEMENT">
                <option value="">Select</option>
				<option value="Rotavator">Rotavator</option>
				<option value="Power Harrow">Power Harrow</option>
				<option value="Compost Shredder">Compost Shredder</option>
				</select>
				<label class="mdb-main-label BTxt9">Implement<span class="MndtryAstr"></span></label>
            </div>
		</div>
		 	  
	</div>
	<div class="form-row IMPLEMENT">
		<!--<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLMANUF" name="LPDT_IMPLMANUF" class="form-control LPDTDBfields IMPLEMND">
                <label for="LPDT_IMPLMANUF" class="ADDAL ACTVALADD">Manufacturer <span class="MndtryAstr"></span></label>
            </div>
		</div>
		<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLMODEL" name="LPDT_IMPLMODEL" class="form-control LPDTDBfields IMPLEMND">
                <label for="LPDT_IMPLMODEL" class="ADDAL ACTVALADD">Model <span class="MndtryAstr"></span></label>
            </div>
		</div>		-->
		<div class="col-md-6">
            <div class="md-form">
                <select class="mdb-select md-form colorful-select dropdown-primary LPDTDBfields IMPLEMND" onchange="GETMODEL()" id="LPDT_IMPLMANUF" name="LPDT_IMPLMANUF">
                <option value="">Select</option>

				</select>
				<label class="mdb-main-label BTxt9">Manufacturer<span class="MndtryAstr"></span></label>
            </div>
		</div>
				<div class="col-md-6">
            <div class="md-form">
                <select class="mdb-select md-form colorful-select dropdown-primary LPDTDBfields IMPLEMND" onchange="GETVARIANT()" id="LPDT_IMPLMODEL" name="LPDT_IMPLMODEL">
                <option value="">Select</option>

				</select>
				<label class="mdb-main-label BTxt9">Model<span class="MndtryAstr"></span></label>
            </div>
		</div>

		 	  
	</div>
	<div class="form-row IMPLEMENT">
		<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLVARIANT" name="LPDT_IMPLVARIANT" class="form-control LPDTDBfields IMPLEMND">
                <label for="LPDT_IMPLVARIANT" class="ADDAL ACTVALADD">Variant <span class="MndtryAstr"></span></label>
            </div>
		</div>
		<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLASTDESC" name="LPDT_IMPLASTDESC" class="form-control LPDTDBfields IMPLEMND">
                <label for="LPDT_IMPLASTDESC" class="ADDAL ACTVALADD">Asset description <span class="MndtryAstr"></span></label>
            </div>
		</div>
		 	  
	</div>
	<div class="form-row IMPLEMENT">
		<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLASTCOST" name="LPDT_IMPLASTCOST" class="form-control LPDTDBfields IMPLEMND IsNumberFields">
                <label for="LPDT_IMPLASTCOST" class="ADDAL ACTVALADD">Asset Cost <span class="MndtryAstr"></span></label>
            </div>
		</div>
		<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLMARGMONY" name="LPDT_IMPLMARGMONY" class="form-control LPDTDBfields IMPLEMND IsNumberFields">
                <label for="LPDT_IMPLMARGMONY" class="ADDAL ACTVALADD">Margin Money <span class="MndtryAstr"></span></label>
            </div>
		</div>
		 	  
	</div>
	<div class="form-row IMPLEMENT">
		<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLDEALNAME" name="LPDT_IMPLDEALNAME" class="form-control LPDTDBfields IMPLEMND">
                <label for="LPDT_IMPLDEALNAME" class="ADDAL ACTVALADD">Dealer Name <span class="MndtryAstr"></span></label>
            </div>
		</div>
		 	  
	</div>
	<div class="form-row IMPLEMENT">
		<div class="col Btxt3">RC Details</div>				
	</div>
	<div class="form-row IMPLEMENT">
		<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLREGNO" name="LPDT_IMPLREGNO" class="form-control LPDTDBfields">
                <label for="LPDT_IMPLREGNO" class="ADDAL ACTVALADD">Reg No <span class="MndtryAstr"></span></label>
            </div>
		</div>
		<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLNAMEOWN" name="LPDT_IMPLNAMEOWN" class="form-control LPDTDBfields">
                <label for="LPDT_IMPLNAMEOWN" class="ADDAL ACTVALADD">Name of Owner <span class="MndtryAstr"></span></label>
            </div>
		</div>
		 	  
	</div>
	<div class="form-row IMPLEMENT">
		<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLMAKE" name="LPDT_IMPLMAKE" class="form-control LPDTDBfields">
                <label for="LPDT_IMPLMAKE" class="ADDAL ACTVALADD">Make <span class="MndtryAstr"></span></label>
            </div>
		</div>
		<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLRCMODEL" name="LPDT_IMPLRCMODEL" class="form-control LPDTDBfields">
                <label for="LPDT_IMPLRCMODEL" class="ADDAL ACTVALADD">Model <span class="MndtryAstr"></span></label>
            </div>
		</div>
		 	  
	</div>
	<div class="form-row IMPLEMENT">
		<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLENGNO" name="LPDT_IMPLENGNO" class="form-control LPDTDBfields">
                <label for="LPDT_IMPLENGNO" class="ADDAL ACTVALADD">Eng No <span class="MndtryAstr"></span></label>
            </div>
		</div>
		<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLCHASNO" name="LPDT_IMPLCHASNO" class="form-control LPDTDBfields">
                <label for="LPDT_IMPLCHASNO" class="ADDAL ACTVALADD">Chasis No <span class="MndtryAstr"></span></label>
            </div>
		</div>
		 	  
	</div>
	<div class="form-row IMPLEMENT">
		<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLMANUMONYR" name="LPDT_IMPLMANUMONYR" class="form-control LPDTDBfields">
                <label for="LPDT_IMPLMANUMONYR" class="ADDAL ACTVALADD">Manufactured Month & Year <span class="MndtryAstr"></span></label>
            </div>
		</div>
		<div class="col-md-6">
            <div class="md-form">
                <input type="text" id="LPDT_IMPLVEHIAGE" name="LPDT_IMPLVEHIAGE" class="form-control LPDTDBfields IsNumberFields">
                <label for="LPDT_IMPLVEHIAGE" class="ADDAL ACTVALADD">Vehicle Age <span class="MndtryAstr"></span></label>
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
