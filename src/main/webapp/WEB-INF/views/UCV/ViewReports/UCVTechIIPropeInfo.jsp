   
                <!--Main row-->
             <!--Card-->
                        <div class="">


                            <!--Admin panel-->
                            <div class="admin-panel">
<!-- Start -->
         <a type="button" id="GoBack"class="Btxt4 GoBack" href="#"><- BACK</a>
         </br> 
          </br> 
         <input type="text" id="TVPI_PRCSID" hidden="hidden" name="TVPI_PRCSID" class="form-control TVPIDBfields">
         <input type="text" id="TVPI_ACTIVITYID" hidden="hidden" name="TVPI_ACTIVITYID" class="form-control TVPIDBfields">
         <input type="text" id="TVPI_CREATEDBY" hidden="hidden" name="TVPI_CREATEDBY" class="form-control TVPIDBfields">
         <input type="text" id="TVPI_DTCREATED" hidden="hidden" name="TVPI_DTCREATED" class="form-control TVPIDBfields">
         <input type="text" id="TVPI_MODIFIEDBY" hidden="hidden" name="TVPI_MODIFIEDBY" class="form-control TVPIDBfields">
         <input type="text" id="TVPI_DTMODIFIED" hidden="hidden" name="TVPI_DTMODIFIED" class="form-control TVPIDBfields">
         <input type="text" id="TVPI_LANDPARTICUL" hidden="hidden" name="TVPI_LANDPARTICUL" class="form-control TVPIDBfields">
         <input type="text" id="TVPI_BUILDCONSTRU" hidden="hidden" name="TVPI_BUILDCONSTRU" class="form-control TVPIDBfields">
         <input type="text" id="TVPI_PROREFID" hidden="hidden" name="TVPI_PROREFID" class="form-control TVPIDBfields">
         <input type="text" id="TVPI_ALTERPROREFID" hidden="hidden" name="TVPI_ALTERPROREFID" class="form-control TVPIDBfields">
         
          <input type="text" id="TVPI_INSPECTIONDATE" hidden="hidden" name="TVPI_INSPECTIONDATE" class="form-control TVPIDBfields"> 
           <input type="text" id="TVPI_AMENTIES" hidden="hidden" name="TVPI_AMENTIES" class="form-control TVPIDBfields"> 
         
  <!--  card -->
  <div class="card cardNS">
    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0">
      	
        <form>
        
        	</br>
        	<div class="form-row">
        		<div class="col Btxt3">Property Information</div>
        		<!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
        	</div>
           <div class="form-row">
               <div class=" col-md-12">
                  <div class="md-form">
                    <input type="text" id="TVPI_ADDPROPERTY" maxlength="200" disabled name="TVPI_ADDPROPERTY" class="form-control TVPIDBfields DSVLBL AddrNoSpecialChar">
                    <label for="TVPI_ADDPROPERTY" class=""> Address of Property<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div>   
        <div class="form-row">
        		<div class="col Btxt10"> ADDRESS OF PROPERTY AS PER THE SITE</div>
        		<!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
        	</div>
              <div class="form-row">
               <div class=" col-md-12">
                  <div class="md-form">
                    <input type="text" id="TVPI_ADDPROSITE" maxlength="200" name="TVPI_ADDPROSITE" class="form-control AddrNoSpecialChar TVPIMndtry SMADDR TVPIDBfields">
                    <label for="TVPI_ADDPROSITE" class=""> Address <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
               </div>  
           <div class="form-row">
                <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="TVPI_PINCODE" maxlength="6" onchange="fnOnFocusOut(this);Pindetls(this,'TVPI_STATE','TVPI_CITY')"  name="TVPI_PINCODE" class="SMADDR form-control TVPIDBfields  TVPIMndtry NoSpecialChar IsNumberFields">
                     <label for="TVPI_PINCODE" class="">Pin code<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="TVPI_CITY" disabled name="TVPI_CITY" class="form-control TVPIMndtry SMADDR NoSpecialChar TVPIDBfields">
                    <label for="TVPI_CITY" class="">City<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                     <input type="text" id="TVPI_STATE" disabled  name="TVPI_STATE" class="form-control TVPIMndtry SMADDR NoSpecialChar TVPIDBfields">
                     <label for="TVPI_STATE" class="">State<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           </div>
           <div class="form-row">
              <div class=" col-md-12">
                  <div class="md-form">
                    <input type="text" id="TVPI_LANDMARK" name="TVPI_LANDMARK" class="form-control  TVPIMndtry SMADDR AddrNoSpecialChar TVPIDBfields">
                    <label for="TVPI_LANDMARK" class="">LandMark<span class="MndtryAstr">*</span></label>
                 </div>
             </div>
         </div>  
		 
		 
		 <div class="form-row">
	<div class=" col-md-4">
	   <div class="md-form">				  
<input type="text" id="TVPI_UCVPROPDOC" data-val="UAM document"  hidden="hidden" data-Validate="TVPI_UCVPROPDOC"  name="TVPI_UCVPROPDOC" class="form-control voter File TVPIDBfields">
<div class="TVPI_UCVPROPDOC" style="display">  
<img src="ThemeproLO/Common/Images/Eyeview.png" title="UCV PROP DOC"  class="rounded" onclick="GrdDocDwnld('TVPI_UCVPROPDOC')" alt="Cinque Terre" width="35" height="25"><span>Uploaded Security Document</div>
</div>
</div>
</div>
		 
		 
		 
		 
        <div class="form-row">
        		<div class="col Btxt10">ADDRESS OF PROPERTY AS PER DOCUMENT</div>
        		<!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
        	</div>
         <div class="form-row">
                <div class="col-md-12">
                  <div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input TVPIDBfields" onclick="residentaddr();" id="TVPI_SAMEASADDRE" name="TVPI_SAMEASADDRE">
  					<label class="custom-control-label" for="TVPI_SAMEASADDRE">Same as Address of Property as per the valuation</label>
				</div>
				</div>
                </div>
           </div>
             <div class="form-row">
               <div class=" col-md-12">
                  <div class="md-form">
                    <input type="text" id="TVPI_ADDPROPER1" name="TVPI_ADDPROPER1" class="SMDOC form-control AddrNoSpecialChar SMADDR TVPIDBfields">
                    <label for="TVPI_ADDPROPER1" class="ADDR"> Address <span class="MndtryAstr"></span></label>
                  </div>
                </div>
               </div>  
           <div class="form-row">
                <div class="col-md-4">
                  <div class="md-form">
                   <input type="text" id="TVPI_PINCODE1" maxlength="6" onchange="fnOnFocusOut(this);Pindetls(this,'TVPI_STATE1','TVPI_CITY1')" name="TVPI_PINCODE1" class="SMDOC SMADDR form-control TVPIDBfields NoSpecialChar IsNumberFields">
                    <label for="TVPI_PINCODE1" class="ADDR">Pin code<span class="MndtryAstr"></span></label>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="TVPI_CITY1" name="TVPI_CITY1" class=" SMDOC form-control NoSpecialChar SMADDR TVPIDBfields">
                    <label for="TVPI_CITY1" class="ADDR">City<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                   <input type="text" id="TVPI_STATE1" maxlength=""  name="TVPI_STATE1" class="form-control SMDOC NoSpecialChar SMADDR TVPIDBfields ">
                    <label for="TVPI_STATE1" class="ADDR">State<span class="MndtryAstr"></span></label>
                  </div>
               </div>
          </div>  
           <div class="form-row">
        		<div class="col Btxt10">TECHNICAL VALUATION DETAILS</div>
        		<!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
        	</div>  
		 <div class="form-row">

          <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  TVPIMndtry TVPIDBfields" id="TVPI_PROPERTYPE" name="TVPI_PROPERTYPE">
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
				<label class="mdb-main-label BTxt9">Property type<span class="MndtryAstr">*</span></label>
             </div>
            </div>   
               <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary TVPIMndtry TVPIDBfields" id="TVPI_BUILDTYPE" name="TVPI_BUILDTYPE">
                  	<option value="" selected>--Select--</option>
  					<option value="Commercial">Commercial</option> 
  					<option value="Residential">Residential</option> 
  					<option value="Industrial">Industrial</option> 
  					<option value="Farming">Farming</option> 
  					<option value="Mixed">Mixed</option> 
				</select>
				<label class="mdb-main-label BTxt9">Building type<span class="MndtryAstr">*</span></label>
             </div>
            </div>     
     </div>
       
			
			
          <div class="form-row">
            <div class="col-md-4">
                  <!-- First name -->
            <div class="md-form">
                    <input type="text" id="TVPI_DATEOFINS" name="TVPI_DATEOFINS" maxlength="10" onblur="DateInspect(this,'TVPI_INSPECTIONDATE')"    class="form-control ISDatefield NoSpecialChar IsNumberFields TVPIDBfields TVPIMndtry">
                    <label for="TVPI_DATEOFINS" class="">Date Of Inspection<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker" />
              </div>
          </div>
          <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary TVPIMndtry TVPIDBfields" id="TVPI_LOCATPROPERT" name="TVPI_LOCATPROPERT">
                  	<option value="" selected>--Select--</option>
  					<option value="Rural">Rural</option> 
  					<option value="Semi-Rural">Semi-Rural</option>
  					<option value="Town">Town</option>
  					<option value="Urban">Urban</option>
  					<option value="Semi-Urban">Semi-Urban</option>
				</select>
				<label class="mdb-main-label BTxt9">Location of Property<span class="MndtryAstr">*</span></label>
             </div>
            </div>   
               <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary TVPIMndtry TVPIDBfields" id="TVPI_LOCATNEIGH" name="TVPI_LOCATNEIGH">
                  	<option value="" selected>--Select--</option>
  					<option value="Commercial">Commercial</option> 
  					<option value="Residential">Residential</option> 
  					<option value="Industrial">Industrial</option> 
  					<option value="Farming">Farming</option> 
  					<option value="Mixed">Mixed</option> 
				</select>
				<label class="mdb-main-label BTxt9">Locality for Neighbourhood<span class="MndtryAstr">*</span></label>
             </div>
            </div>     
            </div>
          <div class="form-row ">
              <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary TVPIMndtry TVPIDBfields" id="TVPI_ACTUALPRO" name="TVPI_ACTUALPRO">
                  	<option value="" selected>--Select--</option>
                  	<option value="Commercial">Commercial</option>
  					<option value="Residential">Residential</option>
  					<option value="Industrial">Industrial</option>
  					<option value="Mixed">Mixed</option>
	               </select>
				<label class="mdb-main-label BTxt9">Actual Property Usage<span class="MndtryAstr">*</span></label>
             </div>
            </div>      
          <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary TVPIMndtry TVPIDBfields" id="TVPI_APPRPROUSAGE" name="TVPI_APPRPROUSAGE">
                  	<option value="" selected>--Select--</option>
  					<option value="Commercial">Commercial</option>
  					<option value="Residential">Residential</option>
  					<option value="Industrial">Industrial</option>
  					<option value="Mixed">Mixed</option>
                  </select>
				<label class="mdb-main-label BTxt9">Approved Property Usage<span class="MndtryAstr">*</span></label>
             </div>
            </div>   
               <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary TVPIMndtry TVPIDBfields" id="TVPI_TYPECONSTRU" name="TVPI_TYPECONSTRU">
                  	<option value="" selected>--Select--</option>
  					<option value="RCC (Pucca)">RCC (Pucca)</option>	
  					<option value="Asbestos (Pucca)">Asbestos (Pucca)</option>
  					<option value="Mixed - RCC cum Asbestos">Mixed - RCC cum Asbestos</option>
  					<option value="Thatched (Katccha)">Thatched (Katccha)</option>
					<option value="Madras Terrace Building">Madras Terrace Building</option>
  					<option value="Others">Others</option>    
				</select>
				<label class="mdb-main-label BTxt9">Type Of Construction<span class="MndtryAstr">*</span></label>
             </div>
            </div>     
            </div>   
           <div class="form-row ">
              <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary TVPIMndtry TVPIDBfields" id="TVPI_STAGEPRO" name="TVPI_STAGEPRO">
                  	<option value="" selected>--Select--</option>
                  	<option value="Free hold">Free hold</option>
                  	<option value="Lease hold">Lease hold</option>
	               </select>
				<label class="mdb-main-label BTxt9">Status of Property<span class="MndtryAstr">*</span></label>
             </div>
            </div>  
             <div class="col-md-4">
                  <div class="md-form">
                   <input type="text" id="TVPI_NOOFFLOOR" maxlength="2"  name="TVPI_NOOFFLOOR" class="form-control TVPIDBfields NoSpecialChar IsNumberFields">
                    <label for="TVPI_NOOFFLOOR" class="">No of floor<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
                <div class="col-md-4">
                  <div class="md-form">
                   <input type="text" id="TVPI_UNITSINFLOOR" maxlength="2"  name="TVPI_UNITSINFLOOR" class="form-control TVPIDBfields NoSpecialChar IsNumberFields">
                    <label for="TVPI_UNITSINFLOOR" class="">Total number of units<span class="MndtryAstr"></span></label>
                  </div>
               </div>   
            </div> 
                  <div class="form-row ">
             <div class="col-md-12">     
      <div class="md-form">
          <div class="select-radio"> 
    <div class="custom-control custom-radio custom-control-inline">
       <input type="radio" class="custom-control-input TVPIDBfields" value="Yes" id="DemoYes" name="TVPI_DEMOLISLIST">
       <label class="custom-control-label" for="DemoYes">Yes</label>
   </div>
   <div class="custom-control custom-radio custom-control-inline">
       <input type="radio" class="custom-control-input TVPIDBfields" value="No" id="DemoNo" name="TVPI_DEMOLISLIST">
       <label class="custom-control-label" for="DemoNo">No</label>
   </div>
</div>
     <label class="mdb-main-label BTxt9">Whether Property falls within Demolition List<span class="MndtryAstr"></span></label>      
                  </div>
                </div>
           </div>
        <div class="form-row">
        		<div class="col Btxt10">STRUCTURAL DETAILS</div>
           </div>
           </br>
        <div class="form-row ">     
          <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary TVPIMndtry TVPIDBfields" id="TVPI_QUALITYCONS" name="TVPI_QUALITYCONS">
                  	<option value="" selected>--Select--</option>
                  	<option value="Poor">Poor</option>
                  	<option value="Average">Average</option>
                  	<option value="Good">Good</option>
                  	<option value="Excellent">Excellent</option>
                  </select>
				<label class="mdb-main-label BTxt9">Quality of Construction<span class="MndtryAstr">*</span></label>
             </div>
            </div>   
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="TVPI_PRESEAGE" maxlength="2"  name="TVPI_PRESEAGE" class="form-control TVPIMndtry NoSpecialChar IsNumberFields TVPIDBfields">
                    <label for="TVPI_PRESEAGE" class="">Present age of the Property<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
          <div class="col-md-4">
              <div class="md-form">
                    <input type="text" id="TVPI_RESIDALAGE" maxlength="2"  name="TVPI_RESIDALAGE" class="form-control TVPIMndtry NoSpecialChar IsNumberFields TVPIDBfields">
                    <label for="TVPI_RESIDALAGE" class="">Residual Age Of Property<span class="MndtryAstr">*</span></label>
             </div>
         </div>    
    </div>  
     <div class="form-row">
        		<div class="col Btxt10">AREA DETAILS</div>
        		<!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
    </div>
    <div class="form-row">
        <div class="col">
           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_STECHVALIIPROLANDGRD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#TVPI_ALTERPROREFID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||6','ValuaUptProInfoI');" id="BTNLNDGRD" name="BTNLNDGRD" />
           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
          </table>
       </div>
    </div>   
    <div class="form-row">
    <div class="col-md-4">
         <div class="md-form">
              <select class="mdb-select md-form colorful-select dropdown-primary TVPIDBfields" id="TVPI_BUILDCONSTR" name="TVPI_BUILDCONSTR">
  			      <option value="BuiltUp">BuiltUp</option>
				  <option value="Carpet">Carpet</option>
				  <option value="SuperBuiltUp">SuperBuiltUp</option>
               </select>
			   <label class="mdb-main-label BTxt9">Build Up Construction<span class="MndtryAstr"></span></label>
		</div>
   </div> 
      <div class="col-md-4">
      </div>
       <div class="col-md-4">
           <div class="md-form">
             <div class="HyperControls"> 
                  <a type="button" class="Btxt4 FltRight" data-toggle="modal" id="AddFloor" data-target="#AddFloorModal" href="#">+ Add Another Floor</a>
             </div>
          </div>
      </div>
   </div>
   <div class="form-row">
        <div class="col">
           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_STECHVALUIIPROINFIFLOORGRD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#TVPI_ALTERPROREFID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||6','ValuaUptProInfoII');" id="BTNBUILDGRD" name="BTNBUILDGRD" />
           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
          </table>
       </div>
    </div> 
	
	
	
	<div class="form-row">
        <div class="col-md-2">
           <div class="md-form">
              <label class="">Total Construction<span class="MndtryAstr"></span></label>
           </div>
        </div>
        <div class="col-md-2">
           <div class="md-form">
            <input type="text" id="TVPI_CONSASPERDOC" maxlength="30" disabled name="TVPI_CONSASPERDOC" class="form-control DOCU DSVLBL IsCURCommaFields IsNumberFields NoSpecialChar TVPIDBfieldS">
            </div>
        </div>
        <div class="col-md-2">
           <div class="md-form">
              <input type="text" id="TVPI_CONSASPERACTUAL" maxlength="30" disabled name="TVPI_CONSASPERACTUAL" class="form-control IsCURCommaFields DSVLBL IsNumberFields NoSpecialChar TVPIDBfieldS">
           </div>
        </div>
        <div class="col-md-2">
           <div class="md-form">
             <input type="text" id="TVPI_CONSAREACONS" maxlength="30" disabled name="TVPI_CONSAREACONS" class="form-control DSVLBL IsCURCommaFields IsNumberFields NoSpecialChar TVPIDBfieldS">
           </div>
        </div>
         <div class="col-md-2">
           <div class="md-form">
            <input type="text" id="TVPI_CONSASPERRATE"  maxlength="30" disabled name="TVPI_CONSASPERRATE" class="form-control DSVLBL IsCURCommaFields IsNumberFields NoSpecialChar TVPIDBfieldS">
            </div>
        </div>
        <div class="col-md-2">
           <div class="md-form">
              <input type="text" id="TVPI_CONSTOTVAL" maxlength="30" disabled name="TVPI_CONSTOTVAL" class="form-control DSVLBL IsCURCommaFields IsNumberFields NoSpecialChar TVPIDBfieldS">
           </div>
        </div>
    </div> 
	
	
	
	    <div class="form-row">
         <div class="col-md-12">
           <div class="md-form">
             <div class="HyperControls"> 
                  <a type="button" class="Btxt4 FltRight " data-toggle="modal" id="AddAMENTIES" data-target="#AddAMENTIESModal" href="#">+ Add Amenities</a>
             </div>
          </div>
      </div>
      </div>
    <div class="form-row">
        <div class="col">
           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_STECHUPDATEAMENTIEVALUE',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#TVPI_ALTERPROREFID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||2','ValuaUptAMENITIES');" id="BTNAMINGRD" name="BTNAMINGRD" />
           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table4">
          </table>
       </div>
    </div>    
    
        <div class="form-row">
        <div class="col-md-4">
           <div class="md-form">
              <label class="">Total Amenities value<span class="MndtryAstr"></span></label>
           </div>
        </div>
        <div class="col-md-4">
           <div class="md-form">
            <input type="text" id="TVPI_AMENTIESVAL" maxlength="30" disabled name="TVPI_AMENTIESVAL" class="form-control DOCU DSVLBL IsCURCommaFields NoSpecialChar IsNumberFields TVPIDBfieldS">
            </div>
        </div>
         <div class="col-md-4">
         </div>
        </div>
	
    
    <div class="form-row">
         <div class="col-md-3">
        		<div class="col Btxt10">Total Estimate Value</div>
        </div>
        <div class="col-md-1">
        </div>
        <div class="col-md-2">
        </div>
        <div class="col-md-2">
        </div>
        <div class="col-md-2">
        </div>
        <div class="col-md-2">
           <input type="text" id="TVPI_TOTEXTIMVAL" disabled name="TVPI_TOTEXTIMVAL" maxlength="12" data-estim="TVPI_TOTEXTIMVAL" class="form-control DSVLBL NoSpecialChar IsCURCommaFields IsNumberFields TVPIMndtry  TVPIDBfieldS">
        </div>
     </div>
   <div class="form-row ">
         <div class="col-md-4">
           <div class="md-form">
               <input type="text" id="TVPI_DISSTRUSSVALUE" name="TVPI_DISSTRUSSVALUE" maxlength="30" class="form-control NoSpecialChar TVPIMndtry IsCURCommaFields IsNumberFields TVPIDBfieldS">
               <label for="TVPI_DISSTRUSSVALUE" class="">Distress Sale Value<span class="MndtryAstr">*</span></label>
           </div>
        </div>
        <div class="col-md-4">
              <div class="md-form">
                    <input type="text" id="TVPI_GUIDELINEVALUE" maxlength="30" name="TVPI_GUIDELINEVALUE" class="form-control NoSpecialChar TVPIMndtry IsCURCommaFields IsNumberFields TVPIDBfields">
                    <label for="TVPI_GUIDELINEVALUE" class="">Total Guideline Value<span class="MndtryAstr">*</span></label>
              </div>
        </div> 
        <div class="col-md-4">
              <div class="md-form">
                    <input type="text" id="TVPI_PROPINS" maxlength="30" onchange="CheckPropIns();" name="TVPI_PROPINS" class="form-control NoSpecialChar TVPIMndtry IsCURCommaFields IsNumberFields TVPIDBfields">
                    <label for="TVPI_PROPINS" class="">Property Insurance Value<span class="MndtryAstr">*</span></label>
             </div>
        </div>		
    </div>  
    <div class="form-row">
       <div class="col Btxt10">CONSTRUCTION STAGE</div>
    </div>
    <div class="form-row ">
        <div class="col-md-4">
           <div class="md-form">
                <select class="mdb-select md-form colorful-select dropdown-primary TVPIDBfields TVPIMndtry" id="TVPI_STAGECONSTR" name="TVPI_STAGECONSTR">
                    <option value="" selected>--Select--</option>
  			         <option value="Fully Constructed">Fully Constructed</option>
  			         <option value="Under Construction">Under Construction</option>
                 </select>
                <label class="mdb-main-label BTxt9">Stage Of Construction<span class="MndtryAstr">*</span></label>
           </div>
       </div>
       <div class="col-md-4">
            <div class="md-form">
                 <input type="text" id="TVPI_PERCOMPLETED" maxlength="5"  data-field="TVPI_PERCOMPLETED|" name="TVPI_PERCOMPLETED" class="form-control NoSpecialChar TVPIMndtry IsPercentageFld IsNumberFields TVPIDBfields">
                 <label for="TVPI_PERCOMPLETED" class="">Percentage Completed<span class="MndtryAstr">*</span></label>
             </div>
       </div>   
        <div class="col-md-4">
            <div class="md-form">
                <input type="text" id="TVPI_ADDICONSSITE" maxlength="5" name="TVPI_ADDICONSSITE" data-field="TVPI_ADDICONSSITE|"  class="form-control NoSpecialChar  IsPercentageFld IsNumberFields TVPIDBfields">
                <label for="TVPI_ADDICONSSITE" class="">Additional Construction at Site (in %)<span class="MndtryAstr"></span></label>
            </div>
       </div>    
  </div>  
  <div class="form-row">
       <div class="col-md-4">
            <div class="md-form">
               <input type="text" id="TVPI_RECMDISBAMT" maxlength="30" onchange="DisburseAmtChk('TVPI_RECMDISBAMT')" name="TVPI_RECMDISBAMT" class="form-control  TVPIDBfields NoSpecialChar IsNumberFields IsCURCommaFields ">
               <label for="TVPI_RECMDISBAMT" class="">Disbursement Recommended Amount (Rs.)<span class="MndtryAstr"></span></label>
            </div>
       </div>
 </div>
 <div class="form-row">
    <div class=" col-md-4">
         <div class="md-form">
             <input type="text" id="TVPI_OVERALLREMARK" maxlength="300"   name="TVPI_OVERALLREMARK" class="form-control TVPIMndtry AddrNoSpecialChar  TVPIDBfields">
             <label for="TVPI_OVERALLREMARK" class="">Overall Remarks<span class="MndtryAstr">*</span></label>
         </div>
   </div>
   <div class="col-md-4">
   		<div class="md-form">
			<select  class="mdb-select md-form colorful-select dropdown-primary NoSpecialChar TVPIDBfields TVPIMndtry" id="TVPI_PROPSTATUS" name="TVPI_PROPSTATUS">
				<option value="" selected>--Select--</option>
                    <option value="Positive">Positive</option>
                    <option value="Negative">Negative</option>				
            </select>
              <label class="mdb-main-label BTxt9">Status<span class="MndtryAstr">*</span></label>
   		</div>
   </div>
</div>     
 <div class="form-row ">
     <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="TVPI_LATTITUTE" maxlength="10" name="TVPI_LATTITUTE" class="form-control NoSpecialChar TVPIDBfields">
                    <label for="TVPI_LATTITUTE" class="">Lattitude<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                  <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="TVPI_LONGITUDE" maxlength="10" name="TVPI_LONGITUDE" class="form-control NoSpecialChar TVPIDBfields">
                    <label for="TVPI_LONGITUDE" class="">Longitude<span class="MndtryAstr"></span></label>
                  </div>
                </div>   
          <div class="col-md-4">
          <label class="">Upload Document<span class="MndtryAstr">*</span></label>
          <div class="md-form">
     <div>
    <table>
    <tr>
     <td>
       <div id="TVPI_ATTACHMENTUPLOAD"  class="file-field">
         <a class=""> 
            <i class="fa fa-plus imgAdd" aria-hidden=""></i>
            <input type="file"  name="datafile" onchange="DocFldUpldHndlr(TVPI_ATTACHMENT,'TVPI_ATTACHMENT','Voter ID')" class="TVPI_ATTACHMENT"  >
          </a> 
           <input type="text" id="TVPI_ATTACHMENT" hidden="hidden" data-Validate="TVPI_ATTACHMENT"  name="TVPI_ATTACHMENT" class="form-control File DOCMndtry  TVPIDBfields">
           <span class="name">Click Here to Upload</span>
      </div>
    </td>
    </tr>
   </table>
  </div> 
    <div class="TVPI_ATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(TVPI_ATTACHMENT);" title="UPLOAD"  class="rounded Reuplod" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('TVPI_ATTACHMENT')" alt="Cinque Terre" width="35" height="25"> </div> 
      </div>      
        </div>    
            </div>
           <div class="form-row ">  
		   <div class=" col-md-4">
            <div class="md-form">
                <select class="mdb-select md-form colorful-select dropdown-primary TVPIDBfields TVPIMndtry" onchange="CheckDEV('TVPI_ANYDEVIATION','TVPI_SPECIFYDEVI')"  id="TVPI_ANYDEVIATION" name="TVPI_ANYDEVIATION">
                    <option value="" selected>--Select--</option>
  			         <option value="Yes">Yes</option>
  			         <option value="No">No</option>
                 </select>
                <label class="mdb-main-label BTxt9">Any Deviation in Construction<span class="MndtryAstr">*</span></label>
            </div>
			</div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="TVPI_SPECIFYDEVI" maxlength="100" name="TVPI_SPECIFYDEVI" class="form-control AddrNoSpecialChar TVPIDBfields">
                    <label for="TVPI_SPECIFYDEVI" class="">If, Yes Specify the Deviation<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				<div class="col-md-4" >
                      <div class="md-form">
                    <div  class="select-radio TVPIMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input TVPIDBfields" value="Yes" id="MINAREAYES" name="TVPI_MINAREA">
                          <label class="custom-control-label" for="MINAREAYES">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input TVPIDBfields" value="No" id="MINAREANO" name="TVPI_MINAREA">
                           <label class="custom-control-label" for="MINAREANO">No</label>
                       </div>
                   </div>     
                      <label class="mdb-main-label BTxt9" >Min Area norm Met<span class="MndtryAstr">*</span></label>
                   </div>
			    </div>
             </div>
             <div class="form-row">
			    <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="TVPI_MLTITENANT" maxlength="3" onchange="ChkMultiTenant(this)" name="TVPI_MLTITENANT" class="form-control NoSpecialChar TVPIMndtry IsNumberFields  TVPIDBfields">
                    <label for="TVPI_MLTITENANT" class="">Multi Tenant<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
			</div>	




<br>
<br>


		    <div class="form-row">
        		<div class="col Btxt3">Asset Details - Vehicle</div>
        	</div>
			
<br>
		 	<div class="form-row">

							<div class="col-md-4">
							<div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro TVPIDBfields   vehile"  id="TVPI_CLASS" name="TVPI_CLASS">
                  	<option value="">Select</option>	
					<option value="M and HCV">M and HCV </option>
					<option value="LCV">LCV</option>
					<option value="SCV">SCV</option>
					<option value="ICV">ICV</option>
					<option value="M and HCV Bus">M and HCV Bus</option>
					<option value="LCV Bus">LCV Bus</option>
				</select>
				<label class="mdb-main-label BTxt9">Vehicle Class<span class="MndtryAstr"></span></label>
                  </div>				  
				  </div>
				<div class="col-md-4">
				   	<div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro TVPIDBfields   vehile"  id="TVPI_BODY" name="TVPI_BODY">
                  	<option value="">Select</option>	
					<option value="Goods">Goods</option>	
					<option value="MS Tanker">MS Tanker</option>	
					<option value="SS Tanker">SS Tanker</option>	
					<option value="LPS Tanker">LPS Tanker</option>	
					<option value="Trailer">Trailer</option>	
					<option value="Bus">Bus</option>
					<option value="Tipper">Tipper</option>
					<!--<option value="M and HCV">M and HCV </option>
					<option value="LCV">LCV</option>
					<option value="SCV">SCV</option>
					<option value="ICV">ICV</option>
					<option value="M and HCV Bus">M and HCV Bus</option>
					<option value="LCV Bus">LCV Bus</option>-->
				</select>
				<label class="mdb-main-label BTxt9">Body Type<span class="MndtryAstr"></span></label>
                  </div>  
		      </div>	
	

							<div class="col-md-4">
							<div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro TVPIDBfields  VEMVAL vehile"  id="TVPI_MENUFAC" name="TVPI_MENUFAC">
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
		
		
				  <div class="col-md-4">
							<div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro TVPIDBfields VEMVAL  vehile"  id="TVPI_MODEL" name="TVPI_MODEL">
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
				  
				  
	
		<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_ASSET" name="TVPI_ASSET"  class="form-control ADDPro VEMVAL TVPIDBfields vehile">
                    <label for="TVPI_ASSET" class="">Asset (Make Model)<span class="MndtryAstr">*</span></label>
             </div>
              
		</div>
		<div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                    
                    <input type="text" id="TVPI_MENUDATE" name="TVPI_MENUDATE"   maxlength="10" class="form-control TVPIDBfields VEMVAL ADDPro IsNumberFields NoSpecialChar INDM ISDatefield  ISFutureDateFields vehile ">
                    <label for="TVPI_MENUDATE" class="ADDACTVEC">Manufactured date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>
		
		
		</div>
		<div class="form-row">
		
			<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_ASSETDESC" name="TVPI_ASSETDESC"  class="form-control ADDPro  VEMVAL TVPIDBfields">
                    <label for="TVPI_ASSETDESC" class="ADDACTVEC">Asset Description  </label>
             </div>
              
				</div>	
				<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_ASSETCOST" name="TVPI_ASSETCOST"  class="form-control ADDPro TVPIDBfields VEMVAL IsCURCommaFields IsNumberFields">
                    <label for="TVPI_ASSETCOST" class="">Asset Cost  </label>
             </div>
              </div>	
		
		
		
	
	           <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_ENGINNO" name="TVPI_ENGINNO"  class="form-control ADDPro TVPIDBfields  VEMVAL NoSpecialChar   vehile ">
                    <label for="TVPI_ENGINNO" class="">Enigine No<span class="MndtryAstr">*</span> </label>
             </div>
              
				</div>	
				
				
				</div>
		
	<div class="form-row">
	         <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_CHASENO" name="TVPI_CHASENO"  class="form-control ADDPro TVPIDBfields VEMVAL NoSpecialChar   vehile">
                    <label for="TVPI_CHASENO" class="">Chasis No <span class="MndtryAstr"></span> </label>
             </div>
              
				</div>	
	
	
	
	         <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_REGNO" name="TVPI_REGNO"  class="form-control ADDPro TVPIDBfields VEMVAL NoSpecialChar vehile">
                    <label for="TVPI_REGNO" class="">Reg No <span class="MndtryAstr"></span> </label>
               </div>
              
				</div>
				<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_REGOWNERNAME" name="TVPI_REGOWNERNAME" class="form-control ADDPro TVPIDBfields VEMVAL">
                    <label for="TVPI_REGOWNERNAME" class="">Register Owner Name </label>
             </div>
              
				</div>
				
				
			</div>	
		
		<div class="form-row">
		
		<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_PROPSERNAME" name="TVPI_PROPSERNAME"  class="form-control ADDPro TVPIDBfields VEMVAL">
                    <label for="TVPI_PROPSERNAME" class="">Proposer Name</label>
             </div>
              
				</div>
				
				<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_HUYPDETA" name="TVPI_HUYPDETA"  class="form-control ADDPro TVPIDBfields VEMVAL">
                    <label for="TVPI_HUYPDETA" class="">Hypothecation details</label>
             </div>
              
				</div>
				
			
	
		     <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_ODDMETER" name="TVPI_ODDMETER"  class="form-control ADDPro  VEMVAL TVPIDBfields">
                    <label for="TVPI_ODDMETER" class="">ODO Meter Reading</label>
                 </div>
			</div>
			
				</div>
		<div class="form-row">
		
		
			
			  <div class="col-md-4">
                  
                  <div class="md-form">
                    
                    <input type="text" id="TVPI_REGDATE" name="TVPI_REGDATE"   maxlength="10" class="form-control VEMVAL TVPIDBfields ADDPro ISFutureDateFields IsNumberFields NoSpecialChar INDM ISDatefield vehile">
                    <label for="TVPI_REGDATE" class="ADDACTVEC">Date Of Registration<span class="MndtryAstr"></span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
				  </div>
				  
				  
			
	
			
			<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_FCVALDITY" name="TVPI_FCVALDITY"  class="form-control ADDPro VEMVAL TVPIDBfields vehile">
                    <label for="TVPI_FCVALDITY" class="ADDACTVEC">FC Validity<span class="MndtryAstr"></span></label>
                </div>
			</div>
		
		      <div class="col-md-4">
				 <div class="md-form">
                  	<input type="text" id="TVPI_TAXALDITY" name="TVPI_TAXALDITY"  class="form-control VEMVAL ADDPro TVPIDBfields vehile ">
                    <label for="TVPI_TAXALDITY" class="ADDACTVEC">Tax Validity<span class="MndtryAstr"></span></label>
                  </div>
			  </div>
			  
			  <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_PERMITVALDITY" name="TVPI_PERMITVALDITY"  class="form-control ADDPro VEMVAL TVPIDBfields vehile">
                    <label for="TVPI_PERMITVALDITY" class="ADDACTVEC">Permit Validity<span class="MndtryAstr"></span></label>
                </div>
			</div>
			
			
		    </div>
			
			
			 <div class="form-row">
        		<div class="col Btxt3">Insurance Details</div>
        	</div>
				<div class="form-row">
			<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_NAMECOMP" name="TVPI_NAMECOMP"  class="form-control VEMVAL ADDPro TVPIDBfields  vehile">
                    <label for="TVPI_NAMECOMP" class="ADDACTVEC">Name of the Company<span class="MndtryAstr"></span></label>
             </div>
			 </div>
			 <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_POLICYNO" name="TVPI_POLICYNO"  class="form-control ADDPro VEMVAL TVPIDBfields NoSpecialChar    vehile ">
                    <label for="TVPI_POLICYNO" class="ADDACTVEC">Policy Number<span class="MndtryAstr"></span></label>
             </div>
			 </div>
		
              <div class="col-md-4">
                  
                  <div class="md-form">
                    
                    <input type="text" id="TVPI_PLYISSUEDT" name="TVPI_PLYISSUEDT"   maxlength="10" class="form-control VEMVAL TVPIDBfields ADDPro ISFutureDateFields IsNumberFields NoSpecialChar INDM ISDatefield vehile">
                    <label for="TVPI_PLYISSUEDT" class="ADDACTVEC">Policy Issued Date<span class="MndtryAstr"></span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
				  </div>
				  <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_PERINS" name="TVPI_PERINS"  class="form-control ADDPro VEMVAL TVPIDBfields IsCURCommaFields IsNumberFields vehile">
                    <label for="TVPI_PERINS" class="ADDACTVEC">Premium Paid<span class="MndtryAstr"></span></label>
             </div>
			 </div>
       </div>
	   
	   
		 <div class="form-row">
			<div class="col Btxt10">Period of Insurance </div>
			</div>
			 <div class="form-row">	 
			    <div class="col-md-4">
                  <div class="md-form">
                      <input type="text" id="TVPI_INSFRDT" name="TVPI_INSFRDT"   maxlength="10" class="form-control TVPIDBfields VEMVAL IsNumberFields ISFutureDateFields NoSpecialChar INDM ISDatefield ADDPro vehile">
					  <label for="TVPI_INSFRDT" class="ADDACTVEC">From date <span class="MndtryAstr"></span></label>	
					   <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
				   </div>
			    </div>
				<div class="col-md-4">	 
					 <div class="md-form">
					 <input type="text" id="TVPI_INSTODT" name="TVPI_INSTODT"   maxlength="10" class="form-control TVPIDBfields VEMVAL ADDPro IsNumberFields ISPastDateFields NoSpecialChar INDM ISDatefield vehile">
						<label for="TVPI_INSTODT" class="ADDACTVEC">To date <span class="MndtryAstr"></span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>
		    
			   <div class="col-md-4">
				  <div class="md-form">
                  	<input type="text" id="TVPI_IDV" name="TVPI_IDV"  class="form-control ADDPro VEMVAL TVPIDBfields vehile ">
                    <label for="TVPI_IDV" class="ADDACTVEC">IDV<span class="MndtryAstr"></span></label>
                 </div>
			   </div>
		    </div>
		
			
			
             <div class="form-row">
        		<div class="col Btxt3">Others</div>
        	</div>
				<div class="form-row">
			<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_ASSANY" name="TVPI_ASSANY"  class="form-control VEMVAL ADDPro TVPIDBfields  vehile">
                    <label for="TVPI_ASSANY" class="ADDACTVEC">Acccidents if any<span class="MndtryAstr">*</span></label>
             </div>
			 </div>
			 <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_LIFECYLE" name="TVPI_LIFECYLE"  class="form-control ADDPro VEMVAL TVPIDBfields NoSpecialChar    vehile ">
                    <label for="TVPI_LIFECYLE" class="ADDACTVEC">Estimate further life cycle of vehicle<span class="MndtryAstr"></span></label>
             </div>
			 </div>
			
			<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_ALLCOND" name="TVPI_ALLCOND"  class="form-control VEMVAL ADDPro TVPIDBfields  vehile">
                    <label for="TVPI_ALLCOND" class="ADDACTVEC">Over all condition of the vehicle<span class="MndtryAstr"></span></label>
             </div>
			 </div>
			 <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_REBUNCH" name="TVPI_REBUNCH"  class="form-control ADDPro VEMVAL TVPIDBfields NoSpecialChar    vehile ">
                    <label for="TVPI_REBUNCH" class="ADDACTVEC">Chassics re-punched In any<span class="MndtryAstr"></span></label>
             </div>
			 </div>
			 
		
		        <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_MARKETVALUE" name="TVPI_MARKETVALUE"  class="form-control ADDPro TVPIDBfields VEMVAL IsCURCommaFields IsNumberFields">
                    <label for="TVPI_MARKETVALUE" class="ADDACTVEC">Market value of vehicle as on data of inspection</label>
                   </div>
              
				</div>	
				
				<div class="col-md-4">	 
					 <div class="md-form">
					 <input type="text" id="TVPI_DTINSPECT" name="TVPI_DTINSPECT"   maxlength="10" class="form-control TVPIDBfields VEMVAL ADDPro IsNumberFields ISPastDateFields NoSpecialChar INDM ISDatefield vehile">
						<label for="TVPI_DTINSPECT" class="ADDACTVEC">Data of inspection<span class="MndtryAstr"></span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>
				
				
				<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="TVPI_LOCATIVAL" name="TVPI_LOCATIVAL"  class="form-control ADDPro VEMVAL TVPIDBfields NoSpecialChar    vehile ">
                    <label for="TVPI_LOCATIVAL" class="ADDACTVEC">Location  valuation<span class="MndtryAstr"></span></label>
             </div>
			 </div>
		
		
		</div>
		
		
		


			
             <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save1" data-aria="LSW_TECHVALPROINF|TVPI|TVPI_ALTERPROREFID"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TECHVALPROINF|TVPI|TVPI_ALTERPROREFID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Submit</button> 
                </div>
            </div>     
        </form>  
      </div>
    </div>
<!-- card -->
</br>
</br>
</br>
</br>
      </div>
    </div>
     <table style="display:none" id="GridTable2">
   <thead>
<th>PIAG_LNDPARTICULAR</th>
<th>PIAG_LNDASPERDOC</th>
<th>PIAG_LNDACTUAL</th>
<th>PIAG_LNAAREACONSD</th>
<th>PIAG_LNDRATSQFT</th>
<th>PIAG_LNDTOTVAL</th>
<th>PIAG_LNDREFID</th>
<!-- <th>PIAG_PRCSID</th>
<th>PIAG_ACTIVITYID</th>
<th>PIAG_DTCREATED</th>
<th>PIAG_CREATEDBY</th>
<th>PIAG_DTMODIFIED</th>
<th>PIAG_MODIFIEDBY</th> -->
   
   </thead>
   
    </table>
    
    <table style="display:none" id="GridTable3">
   <thead>
<th>PIFG_BUILDPARTICULAR</th>
<th>PIFG_BUILDASPERDOC</th>
<th>PIFG_BUILDACTUAL</th>
<th>PIFG_BUILDAREACONSD</th>
<th>PIFG_BUILDRATSQFT</th>
<th>PIFG_BUILDTOTVAL</th>
<th>PIFG_LNDREFID</th>
<th>ACTION</th>
<!-- <th>PIFG_PRCSID</th>
<th>PIFG_ACTIVITYID</th>
<th>PIFG_DTCREATED</th>
<th>PIFG_CREATEDBY</th>
<th>PIFG_DTMODIFIED</th>
<th>PIFG_MODIFIEDBY</th> -->
   </thead>
   
    </table>
	
	 <table style="display:none" id="GridTable4">
   <thead>
<th>TEUP_AMENTIESNAME</th>
<th>TEUP_AMENTIESVALUE</th>
<th>TEUP_REFID</th>
<th>ACTION</th>
<!-- <th>PIFG_PRCSID</th>
<th>PIFG_ACTIVITYID</th>
<th>PIFG_DTCREATED</th>
<th>PIFG_CREATEDBY</th>
<th>PIFG_DTMODIFIED</th>
<th>PIFG_MODIFIEDBY</th> -->
   </thead>
   
    </table>
	
<!-- END -->

                            </div>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/ViewRpt/Script/ValuationPropInfo/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/ViewRpt/Script/ValuationPropInfo/Validation.js${DMY13}"></script>
  
 <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
 <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
 <!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
 <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>   

               
                                  