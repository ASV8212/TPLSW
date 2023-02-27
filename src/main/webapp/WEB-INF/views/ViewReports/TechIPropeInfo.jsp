</br>
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
<div class="">
                            <!--Admin panel-->
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
 <!-- <div class="card CardNS">-->
    <!-- Card body -->
 <div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
   <div class="card active">
    <!-- Card header -->
    <div class="card-header Btxt7 active" role="tab" id="heading1">
      <a class="collapsed Btxt8 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="" data-aria="LSW_TTECHPROPINFO|TPIF|TPIF_ALTNPROPERTYNO"  data-parent="#accordionEx" href="#collapse1"
        aria-expanded="true" aria-controls="collapse1">
          Property Details<i class="fa fa-plus-circle rotate-icon"></i>
      </a>
    </div>
    <!-- Card body -->
    <div id="collapse1" class="collapse show" role="tabpanel" aria-labelledby="heading1" data-parent="#accordionEx">
        <div class="card-body px-lg-5 pt-0">
        <form>
        <input type="text" id="TPIF_PRCSID" hidden="hidden" name="TPIF_PRCSID" class="form-control TPIFDBfields">
        <input type="text" id="TPIF_ACTIVITYID" hidden="hidden" name="TPIF_ACTIVITYID" class="form-control TPIFDBfields">
        <input type="text" id="TPIF_CREATEDBY" hidden="hidden" name="TPIF_CREATEDBY" class="form-control TPIFDBfields">
        <input type="text" id="TPIF_DTCREATED" hidden="hidden" name="TPIF_DTCREATED" class="form-control TPIFDBfields">
        <input type="text" id="TPIF_MODIFIEDBY" hidden="hidden" name="TPIF_MODIFIEDBY" class="form-control TPIFDBfields">
        <input type="text" id="TPIF_DTMODIFIED" hidden="hidden" name="TPIF_DTMODIFIED" class="form-control TPIFDBfields">
        <input type="text" id="TPIF_PROPERTYNO" name="TPIF_PROPERTYNO" hidden="hidden" class="form-control TPIFDBfields">
        <input type="text" id="TPIF_DEMARCATIONSUB" hidden="hidden" name="TPIF_DEMARCATIONSUB" class="form-control TPIFDBfields">   
         
        <input type="text" id="TPIF_ALTNPROPERTYNO" hidden="hidden" name="TPIF_ALTNPROPERTYNO" class="form-control TPIFDBfields">   
          
      <input type="text" id="TPIF_INSPECTIONDATE" hidden="hidden" name="TPIF_INSPECTIONDATE" class="form-control TPIFDBfields"> 
          <input type="text" id="TPIF_PROXIMITYI" hidden="hidden" name="TPIF_PROXIMITYI" class="form-control TPIFDBfields">  



		  
           </br>
           <div class="form-row">
        		<div class="col Btxt3">Property Information</div>
        	</div>
           <div class="form-row">
               <div class=" col-md-12">
                  <div class="md-form">
                    <input type="text" id="TPIF_ADDRPRPTY" disabled name="TPIF_ADDRPRPTY" class="form-control AddrNoSpecialChar DSVLBL TPIFDBfields">
                    <label for="TPIF_ADDRPRPTY" class=""> Address of Property<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div>
             <div class="form-row">
        		<div class="col Btxt10"> ADDRESS OF PROPERTY AS PER THE SITE</div>
        		<!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
        	</div>    
        <div class="form-row ">
             <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="TPIF_PLOTNO" name="TPIF_PLOTNO" maxlength="30"  class="form-control SMADDR AddrNoSpecialChar TPIFDBfields">
                    <label for="TPIF_PLOTNO" class="">Plot Number<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="col-md-4">
                   <div class="md-form">
                       <input type="text" id="TPIF_DOORNO" name="TPIF_DOORNO"  maxlength="30"  class="form-control SMADDR AddrNoSpecialChar TPIFDBfields">
                       <label for="TPIF_DOORNO" class="">Door Number<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                 <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="TPIF_BUIDNAME" maxlength="100" name="TPIF_BUIDNAME" class="form-control AddrNoSpecialChar SMADDR TPIFDBfields">
                       <label for="TPIF_BUIDNAME" class="">Building Name/House Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>
        </div> 
             <div class="form-row ">
             <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="TPIF_STREETNAME" maxlength="100" name="TPIF_STREETNAME"  class="form-control IsAlphaFields SMADDR TPIFDBfields">
                    <label for="TPIF_STREETNAME" class="">Street Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="TPIF_LOCALITY" maxlength="100" name="TPIF_LOCALITY" class="form-control SMADDR AddrNoSpecialChar TPIFDBfields">
                       <label for="TPIF_LOCALITY" class="">Locality<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                 <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="TPIF_SERVEYNO" maxlength="30" name="TPIF_SERVEYNO" class="form-control SMADDR AddrNoSpecialChar TPIFDBfields">
                       <label for="TPIF_SERVEYNO" class="">Survey Number<span class="MndtryAstr"></span></label>
                  </div>
                </div>
        </div>
           <div class="form-row ">
             <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="TPIF_PINCODE" maxlength="6" name="TPIF_PINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'TPIF_STATE','TPIF_CITY')" class="form-control SMADDR NoSpecialChar IsNumberFields TPIFDBfields">
                    <label for="TPIF_PINCODE" class="">Pin code<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="TPIF_CITY" disabled name="TPIF_CITY" class="form-control IsAlphaFields TPIFDBfields">
                       <label for="TPIF_CITY" class="">City<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                 <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="TPIF_STATE" disabled name="TPIF_STATE" class="form-control IsAlphaFields TPIFDBfields">
                       <label for="TPIF_STATE" class="">State<span class="MndtryAstr"></span></label>
                  </div>
                </div>
            </div>  
            <div class="form-row">
               <div class=" col-md-12">
                  <div class="md-form">
                    <input type="text" id="TPIF_LANDMARK" maxlength="100"  name="TPIF_LANDMARK" class="form-control AddrNoSpecialChar TPIFDBfields">
                    <label for="TPIF_LANDMARK" class="">Land Mark<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div>
           <div class="form-row">
        		<div class="col Btxt10"> ADDRESS OF PROPERTY AS PER DOCUMENT</div>
        	</div> 
        	<div class="form-row">
                <div class="col-md-12">
                  <div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input TPIFDBfields" onclick="residentaddr();" id="TPIF_SAMEASADDE" name="TPIF_SAMEASADDE">
  					<label class="custom-control-label" for="TPIF_SAMEASADDE">Same as Address of Property as per Site</label>
				</div>
				</div>
                </div>
           </div>
            <div class="form-row ">
             <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="TPIF_DOCPLOTNO" maxlength="30" name="TPIF_DOCPLOTNO"  class="form-control SMDOC SMADDR AddrNoSpecialChar TPIFDBfields">
                    <label for="TPIF_DOCPLOTNO" class="ADDR">Plot Number<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="TPIF_DOCDOORNO" maxlength="30" name="TPIF_DOCDOORNO" class="form-control SMDOC SMADDR AddrNoSpecialChar TPIFDBfields">
                       <label for="TPIF_DOCDOORNO" class="ADDR">Door Number<span class="MndtryAstr"></span></label>
                   </div>
                </div>
              <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="TPIF_DOCBUILDNAME" maxlength="100" name="TPIF_DOCBUILDNAME" class="form-control SMDOC IsAlphaFields SMADDR TPIFDBfields">
                       <label for="TPIF_DOCBUILDNAME" class="ADDR">Building Name/House Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>
              </div> 
             <div class="form-row ">
             <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="TPIF_DOCSTREETNAME" maxlength="100" name="TPIF_DOCSTREETNAME"  class="form-control SMDOC IsAlphaFields SMADDR TPIFDBfields">
                    <label for="TPIF_DOCSTREETNAME" class="ADDR">Street Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="TPIF_DOCLOCALITY" maxlength="100" name="TPIF_DOCLOCALITY" class="form-control SMDOC AddrNoSpecialChar SMADDR TPIFDBfields">
                       <label for="TPIF_DOCLOCALITY" class="ADDR">Locality<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                 <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="TPIF_DOCSERVEYNO" maxlength="30" name="TPIF_DOCSERVEYNO" class="form-control AddrNoSpecialChar SMDOC SMADDR TPIFDBfields">
                       <label for="TPIF_DOCSERVEYNO" class="ADDR">Survey Number<span class="MndtryAstr"></span></label>
                  </div>
                </div>
        </div>
           <div class="form-row ">
             <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="TPIF_DOCPINCODE" maxlength="6" name="TPIF_DOCPINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'TPIF_DOCSTATE','TPIF_DOCCITY')"  class="form-control SMDOC SMADDR NoSpecialChar IsNumberFields TPIFDBfields">
                    <label for="TPIF_DOCPINCODE" class="ADDR">Pin code<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="TPIF_DOCCITY" disabled name="TPIF_DOCCITY" class="form-control IsAlphaFields SMDOC TPIFDBfields">
                       <label for="TPIF_DOCCITY" class="ADDR">City<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                 <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="TPIF_DOCSTATE" disabled name="TPIF_DOCSTATE" class="form-control IsAlphaFields SMDOC TPIFDBfields">
                       <label for="TPIF_DOCSTATE" class="ADDR">State<span class="MndtryAstr"></span></label>
                  </div>
                </div>
            </div>  
			
			<div class="form-row">
		  <div class="col-md-6">
                    <div class="col Btxt10">Uploaded Security Documents</div>
                     <div data-for="UploadSecurityDoc" class="UploadSecurityDoc"> 
                     </div>
                     <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="UploadSecurityDoc" style="display:none">
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
                                             <div id="PRDO_DOCUMENTUPLOAD"  class="file-field" style="display:none">
                                                <a class="">
                                                <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                                <input type="file"  name="datafile" onchange="DocFldUpldHndlr_V1(this,'PRDO_DOCUMENT'+$(this).closest('.DYNROW').attr('data-row'),'PRDO_DOCUMENT','PDDetails','PDDate','PD',$(this).closest('.DYNROW'))" class="PRDO_DOCUMENT"  >
                                                </a>
                                                <input type="text" id="PRDO_DOCUMENT" hidden="hidden" data-Validate="PRDO_DOCUMENT"  name="PRDO_DOCUMENT" class="form-control File PRDODBfields PRDOMndtry">
                                                <span class="name">Upload Documents</span> 
                                             </div>
                                          </td>
                                          <div class="md-form" >
                                             <div class="md-form Formcol-mdLR">
												 <div class="PRDO_DOCUMENT"> 
												 <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" 
                                                onclick="GrdDocDwnld('PRDO_DOCUMENT'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" 
                                                alt="Cinque Terre" width="35" height="25">
												</div>
                                             </div>
                                          </div>
                                       </tr>
                                    </table>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="HyperControls form-row" style="display:none" >
                        <a onclick="AddPageMultiData('',$('#PRDO_PRCSID').val(),$('#LPDT_PROPERTYNO').val(),'BankDetail1','PRDODBfields');" class="Btxt4 FltRight ADDBTN "  href="#">+ Add</a>
                        <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                     </div>
                  </div>
				  </div>
			
			
			
			
			
			
			
           <div class="form-row">
        		<div class="col Btxt10">TECHNICAL VALUATION DETAILS</div>
        	</div> 
			

			
			<div class="form-row">

          <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  TPIFMndtry TPIFDBfields" id="TPIF_PROPERTYPE" name="TPIF_PROPERTYPE">
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
                  <select class="mdb-select md-form colorful-select dropdown-primary TPIFMndtry TPIFDBfields" id="TPIF_BUILDTYPE" name="TPIF_BUILDTYPE">
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
             <div class="col-md-4">
		       <div class="md-form">
                  <input type="text" id="TPIF_MLTITENANT" maxlength="3" onchange="ChkMultiTenant(this)" name="TPIF_MLTITENANT" class="form-control NoSpecialChar TPIFMndtry IsNumberFields  TPIFDBfields">
                  <label for="TPIF_MLTITENANT" class="">Multi Tenant<span class="MndtryAstr">*</span></label>
               </div>	
           </div>
               <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="TPIF_PROPERTYOWNNAME" maxlength="100" name="TPIF_PROPERTYOWNNAME" class="form-control  NoSpecialChar  TPIFDBfields">
                       <label for="TPIF_PROPERTYOWNNAME" class="">Property Owner Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>			
     </div>
			
           <div class="form-row ">
            <div class="col-md-4">
                  <!-- First name -->
           <div class="md-form">
                    <input type="text" id="TPIF_DATEOFINSP" name="TPIF_DATEOFINSP" maxlength="10" onblur="DateInspect(this,'TPIF_INSPECTIONDATE')" class="form-control ISDatefield NoSpecialChar IsNumberFields TPIFMndtry TPIFDBfields">
                    <label for="TPIF_DATEOFINSP" class="">Date Of Inspection<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
          </div>
          <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary TPIFMndtry TPIFDBfields" id="TPIF_LOCAOFPRPTY" name="TPIF_LOCAOFPRPTY">
                  	<option value="" selected>--Select--</option>
  					<option value="Rural">Rural</option> 
  					<option value="Semi-Rural">Semi-Rural</option>
  					<option value="Town">Town</option>
  					<option value="Urban">Urban</option>
  					<option value="Semi-Urban">Semi-Urban</option>
				</select>
				<label class="mdb-main-label BTxt9">Location of the Property<span class="MndtryAstr">*</span></label>
             </div>
            </div>   
               <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary TPIFMndtry TPIFDBfields" onchange="getCivic();" multiple id="TPIF_PROXIMITY" name="TPIF_PROXIMITY">
                  	<option value="" selected disabled >--Select--</option>
  					<option value="School">School</option>
  					<option value="Hospitals">Hospitals</option>
  					<option value="Office">Office</option>	
  					<option value="Market">Market</option>	
  					<option value="Bus Station">Bus Station</option>	
  					<option value="Railway Station">Railway Station</option>	
  					<option value="Airport">Airport</option>		 
				</select>
				<label class="mdb-main-label BTxt9">Proximity to Civic Amenities Within 3kms<span class="MndtryAstr">*</span></label>
             </div>
            </div>     
            </div>
           <div class="form-row ">
            <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary TPIFMndtry TPIFDBfields" id="TPIF_NEIGHBOURHOOD" name="TPIF_NEIGHBOURHOOD">
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
               <div class="col-md-4">
                 <div class="md-form">
                  <input type="text" id="TPIF_NEIGHCOMMNTS" name="TPIF_NEIGHCOMMNTS" class="form-control AddrNoSpecialChar TPIFDBfields">
				<label class="mdb-main-label BTxt9">Comments<span class="MndtryAstr"></span></label>
             </div>
            </div> 
             <div class="col-md-4">
                 <div class="md-form">
                  <input type="text" id="TPIF_OCCUPANCDETAILS" name="TPIF_OCCUPANCDETAILS" class="form-control AddrNoSpecialChar TPIFDBfields">
				<label class="mdb-main-label BTxt9">Occupancy Details<span class="MndtryAstr"></span></label>
             </div>
            </div>     
            </div>
          <div class="form-row ">
            <div class="col-md-4">
               <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  TPIFDBfields" id="TPIF_PROPUSAGE" name="TPIF_PROPUSAGE">
                  <option value="" selected>--Select--</option>
                  <option value="Commercial">Commercial</option>
  					<option value="Residential">Residential</option>
  					<option value="Industrial">Industrial</option>
  					<option value="Mixed">Mixed</option>
				  </select>
				  <label class="mdb-main-label BTxt9">Actual Property Usage<span class="MndtryAstr"></span></label>
             </div>
            </div>   
               <div class="col-md-4">
                 <div class="md-form">
                  <input type="text" id="TPIF_PROPCOMMNTS" name="TPIF_PROPCOMMNTS" class="form-control AddrNoSpecialChar TPIFDBfields">
				<label class="mdb-main-label BTxt9">Comments<span class="MndtryAstr"></span></label>
             </div>
            </div> 
             <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  TPIFDBfields" id="TPIF_APPROPROUSAGE" name="TPIF_APPROPROUSAGE">
                  	<option value="" selected>--Select--</option>
                  	<option value="Commercial">Commercial</option>
  					<option value="Residential">Residential</option>
  					<option value="Industrial">Industrial</option>
  					<option value="Mixed">Mixed</option>
                 </select>
				<label class="mdb-main-label BTxt9">Approved Property Usage<span class="MndtryAstr"></span></label>
             </div>
            </div>  
            </div>
            <div class="form-row ">
            <div class="col-md-4">
                 <div class="md-form">
                 <select class="mdb-select md-form colorful-select dropdown-primary TPIFMndtry TPIFDBfields" id="TPIF_TYPCONSTRU" name="TPIF_TYPCONSTRU">
                  	<option value="" selected>--Select--</option>
                  	<option value="RCC (Pucca)">RCC (Pucca)</option>	
  					<option value="Asbestos (Pucca)">Asbestos (Pucca)</option>
  					<option value="Mixed - RCC cum Asbestos">Mixed - RCC cum Asbestos</option>
  					<option value="Thatched (Katccha)">Thatched (Katccha)</option>
					<option value="Madras Terrace Building">Madras Terrace Building</option>
  					<option value="Others">Others</option> 
				</select>
				<label class="mdb-main-label BTxt9">Type of Construction<span class="MndtryAstr">*</span></label>
             </div>
            </div>     
            <div class="col-md-4">
                 <div class="md-form">
                 <input type="text" id="TPIF_CONTRUCOMMNRS" name="TPIF_CONTRUCOMMNRS" class="form-control AddrNoSpecialChar TPIFDBfields">
				<label class="mdb-main-label BTxt9">Comments<span class="MndtryAstr"></span></label>
             </div>
            </div> 
               <div class="col-md-4">
                 <div class="md-form">
                 <select class="mdb-select md-form colorful-select dropdown-primary TPIFDBfields" id="TPIF_STAGOFPROP" name="TPIF_STAGOFPROP">
                  	<option value="" selected>--Select--</option>
                  	<option value="Free hold">Free hold</option>
                  	<option value="Lease hold">Lease hold</option>
				</select>
				<label class="mdb-main-label BTxt9">Status of Property<span class="MndtryAstr"></span></label>
             </div>
            </div> 
            </div>  
            <div class="form-row ">
            <div class="col-md-4">
                 <div class="md-form">
                 <input type="text" id="TPIF_NOOFFLOOR" name="TPIF_NOOFFLOOR" maxlength="2"  class="form-control IsNumberFields NoSpecialChar TPIFDBfields">
				<label class="mdb-main-label BTxt9" for="TPIF_NOOFFLOOR" >No of Floor<span class="MndtryAstr"></span></label>
             </div>
            </div>     
            <div class="col-md-4">
                 <div class="md-form">
                 <input type="text" id="TPIF_NOOFUNITS" name="TPIF_NOOFUNITS" maxlength="2"  class="form-control NoSpecialChar IsNumberFields TPIFDBfields">
				<label class="mdb-main-label BTxt9" for="TPIF_NOOFUNITS">Total number of units<span class="MndtryAstr"></span></label>
             </div>
            </div>
        
            <div class="col-md-4">
            <div class="md-form">
          <div class="select-radio "> 
             <div class="custom-control custom-radio custom-control-inline">
             <input type="radio" class="custom-control-input TPIFDBfields" value="Yes" id="DemoYes" name="TPIF_WHETHERPRPTY">
             <label class="custom-control-label" for="DemoYes">Yes</label> 
           </div>
           <div class="custom-control custom-radio custom-control-inline">
           <input type="radio" class="custom-control-input TPIFDBfields" value="No" id="DemoNo" name="TPIF_WHETHERPRPTY">
          <label class="custom-control-label" for="DemoNo">No</label>
         </div>
          </div>
         <label class="mdb-main-label BTxt9">Whether Property falls within Demolition List<span class="MndtryAstr"></span></label>      
                  </div> 
              </div>
            </div>    
          <div class="form-row">
        		<div class="col Btxt10">DISTANCE OF SUBJECT PROPERTY FROM MOJAR TRANSPORTATION MODES</div>
        	</div> 
          <div class="form-row ">
              <div class="col-md-4">
                 <div class="md-form">
                  <input type="text" id="TPIF_RAILWAYSTATION" maxlength="3" name="TPIF_RAILWAYSTATION" class="form-control NoSpecialChar IsNumberFields TPIFDBfields">
				<label  for="TPIF_RAILWAYSTATION" >Railway Station (In km's)<span class="MndtryAstr"></span></label>
             </div>
            </div>
            <div class="col-md-4">
                 <div class="md-form">
                  <input type="text" id="TPIF_BUSSTATION" maxlength="3" name="TPIF_BUSSTATION" class="form-control NoSpecialChar IsNumberFields TPIFDBfields">
				<label  for="TPIF_BUSSTATION">Bus Station (In km's)<span class="MndtryAstr"></span></label>
             </div>
            </div>
            <div class="col-md-4">
                 <div class="md-form">
                  <input type="text" id="TPIF_AIRPORT" maxlength="3" name="TPIF_AIRPORT" class="form-control NoSpecialChar IsNumberFields TPIFDBfields">
				  <label  for="TPIF_AIRPORT" >Airport (In km's)<span class="MndtryAstr"></span></label>
             </div>
            </div>
          </div>
          <div class="form-row">
        		<div class="col Btxt10">PLAN APPROVAL DETAILS</div>
        	</div> 
          <div class="form-row ">
              <div class="col-md-4">
                 <div class="md-form">
                  <input type="text" id="TPIF_LAYOUTPLAN" maxlength="100" name="TPIF_LAYOUTPLAN" class="form-control AddrNoSpecialChar TPIFDBfields">
				<label  for="TPIF_LAYOUTPLAN">Layout Plan Details<span class="MndtryAstr"></span></label>
             </div>
            </div>
            <div class="col-md-4">
                 <div class="md-form">
                  <input type="text" id="TPIF_BUILDPLAN" maxlength="100" name="TPIF_BUILDPLAN" class="form-control AddrNoSpecialChar TPIFDBfields">
				<label  for="TPIF_BUILDPLAN">Building Plan Details<span class="MndtryAstr"></span></label>
             </div>
            </div>
            <div class="col-md-4">
                 <div class="md-form">
                  <input type="text" id="TPIF_SALEDEEDNO" maxlength="15" name="TPIF_SALEDEEDNO" class="form-control NoSpecialChar IsNumberFields TPIFDBfields">
				<label for="TPIF_SALEDEEDNO">Sale Deed Number<span class="MndtryAstr"></span></label>
             </div>
            </div>
          </div>
          <div class="form-row">
               <div class=" col-md-12">
                  <div class="md-form">
                    <input type="text" id="TPIF_CONTRUCTIONDETLS" maxlength="100" name="TPIF_CONTRUCTIONDETLS" class="form-control NoSpecialChar TPIFDBfields ">
                    <label for="TPIF_CONTRUCTIONDETLS" class="">Construction Permission Details<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div>
           <div class="form-row">
               <div class=" col-md-12">
                  <div class="md-form">
                    <input type="text" id="TPIF_VALUAPPRCH" maxlength="500" name="TPIF_VALUAPPRCH" class="form-control NoSpecialChar TPIFDBfields">
                    <label for="TPIF_VALUAPPRCH" class="">Valuation Approach<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div>
           <div class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="TPIF_DATOFCOMMENCE" maxlength="10" name="TPIF_DATOFCOMMENCE" class="form-control NoSpecialChar IsNumberFields ISDatefield TPIFDBfields">
                    <label for="TPIF_DATOFCOMMENCE" class="">Date of Commencement of Construction<span class="MndtryAstr"></span></label>
                     <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"   />
                  </div>
                </div>
                <div class=" col-md-4">
				 <div class="md-form">
                <select class="mdb-select md-form colorful-select dropdown-primary TPIFDBfields TPIFMndtry" onchange="CheckDEV('TPIF_ANYDEVIATION','TPIF_SPECIFYDEVI')"  id="TPIF_ANYDEVIATION" name="TPIF_ANYDEVIATION">
                    <option value="" selected>--Select--</option>
  			         <option value="Yes">Yes</option>
  			         <option value="No">No</option>
                 </select>
                <label class="mdb-main-label BTxt9">Any Deviation in Construction<span class="MndtryAstr">*</span></label>
           </div>
		   </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="TPIF_SPECIFYDEVI" maxlength="100" name="TPIF_SPECIFYDEVI" class="form-control NoSpecialChar TPIFDBfields">
                    <label for="TPIF_SPECIFYDEVI" class="">If, Yes Specify the Deviation<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div>
          <div class="form-row">
        		<div class="col Btxt10">DEMARCATION OF SUBJECT PROPERTY</div>
        	</div>
              <div class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <div class="col Btxt15">Particulars</div>
                   <!-- <label for="" class="Btxt4">Particulars<span class="MndtryAstr"></span></label> -->
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                  <div class="col Btxt15">As Per Site</div>
                     <!-- <label for="" class="Btxt4">As Per Site<span class="MndtryAstr"></span></label> -->
                      </div>
                </div>
                 <div class=" col-md-4">
                   <div class="md-form">
                   <div class="col Btxt15">As Per Document</div>
                     <!-- <label for="" class="Btxt4">As Per Document<span class="MndtryAstr"></span></label> -->
                    </div>
                </div>
              </div>
              </br>
              <div class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <label for="" class="Btxt4">North<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="TPIF_NORTHSITE" name="TPIF_NORTHSITE" maxlength="300" class="form-control TPIFDBfields">
                   </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="TPIF_NORTHDOC" name="TPIF_NORTHDOC" maxlength="300" class="form-control TPIFDBfields">
                  </div>
                </div>
           </div>
           <div class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <label for="" class="Btxt4">South<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="TPIF_SOUTHSITE" name="TPIF_SOUTHSITE" maxlength="300" class="form-control TPIFDBfields">
                   </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="TPIF_SOUTHDOC" name="TPIF_SOUTHDOC" maxlength="300" class="form-control TPIFDBfields">
                  </div>
                </div>
           </div>
           <div class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <label for="" class="Btxt4">East<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="TPIF_EASTSITE" name="TPIF_EASTSITE" maxlength="300" class="form-control TPIFDBfields">
                   </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="TPIF_EASTDOC" name="TPIF_EASTDOC" maxlength="300" class="form-control TPIFDBfields">
                  </div>
                </div>
           </div>
           <div class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <label for="" class="Btxt4">West<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="TPIF_WESTSITE" name="TPIF_WESTSITE" maxlength="300"  class="form-control TPIFDBfields">
                   </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="TPIF_WESTDOC" name="TPIF_WESTDOC" maxlength="300" class="form-control TPIFDBfields">
                  </div>
                </div>
           </div>
          <div class="form-row" >
              <div class="col d-flex justify-content-center">
                  <button type="button" id="save1" data-aria="LSW_TTECHPROPINFO|TPIF|TPIF_ALTNPROPERTYNO|" class= "btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                  <button type="button" data-aria="LSW_TTECHPROPINFO|TPIF|TPIF_ALTNPROPERTYNO|" data-card="0" class=" btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
              </div>
          </div>  
        </form>
        </div>
    </div>
  </div>
    <!-- Property Details End -->

   <!--Structural Details Start -->
  <div class="card">
    <!-- Card header -->
    <div class="card-header Btxt7" role="tab" id="heading2">
      <a class="collapsed Btxt7 AFormaccordion Structural" data-toggle="collapse" data-multidata="" data-load="" data-aria="LSW_TTECHSTARUCTUALDETL|THSD|THSD_ALTNPROPERTYNO|TPIF_ALTNPROPERTYNO|THSD_PROPERTYNO|TPIF_PROPERTYNO" data-parent="#accordionEx" href="#collapse2"
        aria-expanded="false" aria-controls="collapse2">
        Structural Details <i class="fa fa-plus-circle rotate-icon"></i>
      </a>
    </div>
    <!-- Card body -->
    <div id="collapse2" class="collapse" role="tabpanel" aria-labelledby="heading2" data-parent="#accordionEx">
       <div class="card-body px-lg-5 pt-0">
        <form>
       <input type="text" id="THSD_PRCSID" hidden="hidden" name="THSD_PRCSID" class="form-control THSDDBfields">
        <input type="text" id="THSD_ACTIVITYID" hidden="hidden" name="THSD_ACTIVITYID" class="form-control THSDDBfields">
        <input type="text" id="THSD_CREATEDBY" hidden="hidden" name="THSD_CREATEDBY" class="form-control THSDDBfields">
        <input type="text" id="THSD_DTCREATED" hidden="hidden" name="THSD_DTCREATED" class="form-control THSDDBfields">
        <input type="text" id="THSD_MODIFIEDBY" hidden="hidden" name="THSD_MODIFIEDBY" class="form-control THSDDBfields">
        <input type="text" id="THSD_DTMODIFIED" hidden="hidden" name="THSD_DTMODIFIED" class="form-control THSDDBfields">
        <input type="text" id="THSD_PROPERTYNO" hidden="hidden" name="THSD_PROPERTYNO" class="form-control THSDDBfields">
         
         <input type="text" id="THSD_ALTNPROPERTYNO" hidden="hidden" name="THSD_ALTNPROPERTYNO" class="form-control THSDDBfields">   

          </br>
            <div class="form-row ">
             <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary THSDMndtry THSDDBfields" id="THSD_CONSQUALITY" name="THSD_CONSQUALITY">
                  	<option value="" selected>--Select--</option>
  					<option value="Poor">Poor</option>
                  	<option value="Average">Average</option>
                  	<option value="Good">Good</option>
                  	<option value="Excellent">Excellent</option> 
				   </select>
                    <label class="mdb-main-label BTxt9" >Quality of Construction<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="THSD_NATURBUILD" maxlength="100" name="THSD_NATURBUILD" class="form-control NoSpecialChar IsAlphaFields THSDDBfields">
                       <label for="THSD_NATURBUILD" class="">Nature of Building<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                 <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="THSD_FLOORWISHUSAGE" maxlength="2" name="THSD_FLOORWISHUSAGE" class="form-control NoSpecialChar IsNumberFields THSDDBfields">
                       <label for="THSD_FLOORWISHUSAGE" class="">Floor wish usage (On site)<span class="MndtryAstr"></span></label>
                  </div>
                </div>
          </div> 
          <div class="form-row ">
             <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                   <select class="mdb-select md-form colorful-select dropdown-primary THSDDBfields" id="THSD_MAINTANPRPTY" name="THSD_MAINTANPRPTY">
                  	<option value="" selected>--Select--</option>
  					<option value="Poor">Poor</option> 
  					<option value="Average">Average</option> 
  					<option value="Good">Good</option> 
  					<option value="Excellent">Excellent</option> 
				    </select>
                   <label class="mdb-main-label BTxt9" >Maintenance of Property<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="THSD_PRESENTAGEPTY" name="THSD_PRESENTAGEPTY" maxlength="2" class="form-control THSDMndtry  NoSpecialChar IsNumberFields THSDDBfields">
                       <label for="THSD_PRESENTAGEPTY" class="">Present Age of the Property<span class="MndtryAstr">*</span></label>
                   </div>
                </div>
                 <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="THSD_RESIDUALAGEPTY" name="THSD_RESIDUALAGEPTY" maxlength="2" class="form-control THSDMndtry NoSpecialChar IsNumberFields THSDDBfields">
                       <label for="THSD_RESIDUALAGEPTY" class="">Residual Age of the Property<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
        </div> 
        <div class="form-row ">
             <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="THSD_YEARCONSTRU" name="THSD_YEARCONSTRU" maxlength="4" class="form-control THSDMndtry NoSpecialChar IsNumberFields THSDDBfields">
                    <label for="THSD_YEARCONSTRU" class="">Year of Construction<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="THSD_FLOORING" maxlength="25" name="THSD_FLOORING" class="form-control NoSpecialChar THSDDBfields">
                       <label for="THSD_FLOORING" class="">Flooring<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                 <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="THSD_FINISHING" maxlength="25" name="THSD_FINISHING" class="form-control NoSpecialChar THSDDBfields">
                       <label for="THSD_FINISHING" class="">Finishing<span class="MndtryAstr"></span></label>
                  </div>
                </div>
        </div>
        <div class="form-row">
             <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="THSD_DOORSANWINDOW" maxlength="25" name="THSD_DOORSANWINDOW"  class="form-control NoSpecialChar THSDDBfields">
                    <label for="THSD_DOORSANWINDOW" class="">Doors and Windows<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="THSD_ROOF" maxlength="25" name="THSD_ROOF" class="form-control NoSpecialChar THSDDBfields">
                       <label for="THSD_ROOF" class="">Roof<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                 <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary THSDDBfields" onchange="Amenities();" multiple id="THSD_AMENITIESPRO" name="THSD_AMENITIESPRO">
                  	         <option value="" selected disabled>--Select--</option>
  					         <option value="Swimming Pool">Swimming Pool</option> 
  					         <option value="Parking">Parking</option> 
  					         <option value="Park">Park</option> 
  					         <option value="Library">Library</option> 
  					         <option value="Club">Club</option> 
  					         <option value="Gym">Gym</option> 
  					         <option value="Function Halls">Function Halls</option> 
				         </select>
                         <label class="mdb-main-label BTxt9" >Amenities Provided<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 <input type="text" id="THSD_AMENITIESPROI" hidden="hidden" name="THSD_AMENITIESPROI" class="form-control THSDDBfields">  
           </div>
           <div class="form-row ">        
            <div class="col-md-12">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="THSD_DETLOFENCROACH" maxlength="100" name="THSD_DETLOFENCROACH" class="form-control NoSpecialChar THSDDBfields">
                       <label for="THSD_DETLOFENCROACH" class="">Details of Encroachment<span class="MndtryAstr"></span></label>
                   </div>
                </div>      
               </div>     
            <div class="form-row" >
              <div class="col d-flex justify-content-center">
                  <button type="button" id="save2" data-aria="LSW_TTECHSTARUCTUALDETL|THSD|THSD_ALTNPROPERTYNO|" class= "btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                  <button type="button" data-aria="LSW_TTECHSTARUCTUALDETL|THSD|THSD_ALTNPROPERTYNO|"  data-card="1" class=" btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
              </div>
          </div>  
        </form>
        </div>
    </div>
  </div>
    <!--Structural details End-->

  <!--  Valuation Start  -->
  
  <div class="card">
    <!-- Card header -->
    <div class="card-header Btxt7" role="tab" id="heading3">
      <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-multidata="" data-load=""  data-aria="LSW_TTECHVALUATIONDETL|THVD|THVD_ALTNPROPERTYNO|TPIF_ALTNPROPERTYNO|THVD_PROPERTYNO|TPIF_PROPERTYNO" data-parent="#accordionEx" href="#collapse3"
        aria-expanded="false" aria-controls="collapse3"> Valuation<i class="fa fa-plus-circle rotate-icon"></i>
      </a>
    </div>
    <!-- Card body -->
    <div id="collapse3" class="collapse" role="tabpanel" aria-labelledby="heading3" data-parent="#accordionEx">
       <div class="card-body px-lg-5 pt-0">
        <form>
        <input type="text" id="THVD_PRCSID" hidden="hidden" name="THVD_PRCSID" class="form-control THVDDBfields">
        <input type="text" id="THVD_ACTIVITYID" hidden="hidden" name="THVD_ACTIVITYID" class="form-control THVDDBfields">
        <input type="text" id="THVD_CREATEDBY" hidden="hidden" name="THVD_CREATEDBY" class="form-control THVDDBfields">
        <input type="text" id="THVD_DTCREATED" hidden="hidden" name="THVD_DTCREATED" class="form-control THVDDBfields">
        <input type="text" id="THVD_MODIFIEDBY" hidden="hidden" name="THVD_MODIFIEDBY" class="form-control THVDDBfields">
        <input type="text" id="THVD_DTMODIFIED" hidden="hidden" name="THVD_DTMODIFIED" class="form-control THVDDBfields">
        <input type="text" id="THVD_VALUBUILTCONSGRD" hidden="hidden" name="THVD_VALUBUILTCONSGRD" class="form-control THVDDBfields">
        <input type="text" id="THVD_PROPERTYNO" hidden="hidden" name="THVD_PROPERTYNO" class="form-control THVDDBfields">
        <input type="text" id="THVD_VALUAREADETLDRD" hidden="hidden" name="THVD_VALUAREADETLDRD" class="form-control THVDDBfields">
         
		      <input type="text" id="THVD_AMENTIES" hidden="hidden" name="THVD_AMENTIES" class="form-control THVDDBfields">
         <input type="text" id="THVD_ALTNPROPERTYNO" hidden="hidden" name="THVD_ALTNPROPERTYNO" class="form-control THVDDBfields">   
         
           </br>
           <div class="form-row">
        		<div class="col Btxt1">AREA DETAILS</div>
           </div>
          <div class="form-row">
             <div class="col">
               <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SLANDAREDETAILS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#TPIF_ALTNPROPERTYNO').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||6','ValuaUptProInfoI');" id="BTNLNDGRDI" name="BTNLNDGRDI" />
               <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
               </table>
            </div>
         </div>
         
         <div class="form-row">   
         <div class="col-md-4">
          <div class="md-form">
            <select class="mdb-select md-form colorful-select dropdown-primary THVDDBfields" id="THVD_BUILDCONSTR" name="THVD_BUILDCONSTR">
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
                    <a type="button" class="Btxt4 BTNHIDE FltRight" data-toggle="modal" id="AddFloor" data-target="#AddFloorModal" href="#">+ Add Another Floor</a>
                 </div>
              </div>
            </div>
         </div> 
         <div class="form-row">
            <div class="col">
              <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SLANDAREABUILDDETAILS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#TPIF_ALTNPROPERTYNO').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||6','ValuaUptProInfoII');" id="BTNBUILDGRD" name="BTNBUILDGRD" />
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
            <input type="text" id="THVD_CONSASPERDOC" disabled name="THVD_CONSASPERDOC" class="form-control NoSpecialChar IsCURCommaFields IsNumberFields DSVLBL THVDDBfieldS">
            </div>
        </div>
        <div class="col-md-2">
           <div class="md-form">
              <input type="text" id="THVD_CONSASPERACTUAL" disabled name="THVD_CONSASPERACTUAL" class="form-control NoSpecialChar IsCURCommaFields IsNumberFields DSVLBL THVDDBfieldS">
           </div>
        </div>
        <div class="col-md-2">
           <div class="md-form">
             <input type="text" id="THVD_CONSAREACONS" disabled name="THVD_CONSAREACONS" class="form-control NoSpecialChar IsCURCommaFields IsNumberFields DSVLBL THVDDBfieldS">
           </div>
        </div>
         <div class="col-md-2">
           <div class="md-form">
            <input type="text" id="THVD_CONSASPERRATE" disabled name="THVD_CONSASPERRATE" class="form-control NoSpecialChar IsCURCommaFields IsNumberFields DSVLBL THVDDBfieldS">
            </div>
        </div>
        <div class="col-md-2">
           <div class="md-form">
              <input type="text" id="THVD_CONSTOTVAL" disabled name="THVD_CONSTOTVAL" class="form-control NoSpecialChar IsCURCommaFields IsNumberFields DSVLBL THVDDBfieldS">
           </div>
        </div>
     </div> 
	  <div class="form-row">
         <div class="col-md-12">
           <div class="md-form">
             <div class="HyperControls"> 
                  <a type="button" class="Btxt4 FltRight" data-toggle="modal" id="AddAMENTIES" data-target="#AddAMENTIESModal" href="#">+ Add Amenities</a>
             </div>
          </div>
      </div>
      </div>
     
     
        <div class="form-row">
        <div class="col">
           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_STECHVALUEAMENTIEVALUE',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#TPIF_ALTNPROPERTYNO').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||2','ValuarAMENITIES');" id="BTNAMINGRD" name="BTNAMINGRD" />
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
            <input type="text" id="THVD_AMENTIESVAL" maxlength="30" disabled name="THVD_AMENTIESVAL" class="form-control DOCU DSVLBL IsCURCommaFields NoSpecialChar IsNumberFields THVDDBfieldS">
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
           <input type="text" id="THVD_TOTEXTIMVAL" disabled name="THVD_TOTEXTIMVAL" class="form-control DSVLBL NoSpecialChar THVDMndtry IsCURCommaFields IsNumberFields THVDDBfieldS">
        </div>
     </div>
     <div class="form-row ">
           <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="THVD_DISTREESSALEVAL" name="THVD_DISTREESSALEVAL" maxlength="30"  class="form-control NoSpecialChar IsNumberFields IsCURCommaFields THVDDBfields">
                    <label for="THVD_DISTREESSALEVAL" class="">Distress Sale Value<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="THVD_TOTGUIDLVAL" name="THVD_TOTGUIDLVAL"  maxlength="30"  class="form-control NoSpecialChar IsNumberFields IsCURCommaFields THVDDBfields">
                       <label for="THVD_TOTGUIDLVAL" class="">Total Guideline Value<span class="MndtryAstr"></span></label>
                   </div>
                </div>
				<div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="THVD_PROPINS" name="THVD_PROPINS" onchange="CheckPropIns();" maxlength="30"  class="form-control NoSpecialChar THVDMndtry IsNumberFields IsCURCommaFields THVDDBfields">
                       <label for="THVD_PROPINS" class="">Property Insurance Value<span class="MndtryAstr">*</span></label>
                   </div>
                </div>
           </div>
            <div class="form-row ">
               <div class="col-md-12">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="THVD_REMARKS" maxlength="300" name="THVD_REMARKS"  class="form-control NoSpecialChar THVDDBfields">
                    <label for="THVD_REMARKS" class="">Remark<span class="MndtryAstr"></span></label>
                  </div>
                </div>
            </div>
            <div class="form-row">
        		<div class="col Btxt10">CONSTRUCTION STAGE</div>
        	 </div>
        	 <div class="form-row ">
             <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                     <select class="mdb-select md-form colorful-select dropdown-primary THVDDBfields" id="THVD_STAGEOFCONSTRU" name="THVD_STAGEOFCONSTRU">
                         <option value="" selected>--Select--</option>
  			              <option value="Fully Constructed">Fully Constructed</option>
  			              <option value="Under Construction">Under Construction</option>
                    </select>
                    <label class="mdb-main-label BTxt9" >Stage of Construction<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="THVD_PERSENTAGECOMPL" maxlength="5" data-field="THVD_PERSENTAGECOMPL|" name="THVD_PERSENTAGECOMPL" class="form-control IsPercentageFld IsNumberFields NoSpecialChar THVDDBfields">
                       <label for="THVD_PERSENTAGECOMPL" class="">Percentage Completed<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="THVD_FSIASPERLAW" maxlength="4" name="THVD_FSIASPERLAW" class="form-control NoSpecialChar IsNumberFields THVDDBfields">
                       <label for="THVD_FSIASPERLAW" class="">FSI as Per Law<span class="MndtryAstr"></span></label>
                   </div>
                </div>
           </div>
           <div class="form-row ">
                <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="THVD_ACTUALFSI" maxlength="4" name="THVD_ACTUALFSI" class="form-control NoSpecialChar IsNumberFields THVDDBfields"> 
                    <label for="THVD_ACTUALFSI" class="">Actual FSI<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" maxlength="3" data-field="THVD_ADDITIONLACONS|Additional Construction"  id="THVD_ADDITIONLACONS" name="THVD_ADDITIONLACONS" class="form-control IsPercentageFld NoSpecialChar IsNumberFields THVDDBfields">
                       <label for="THVD_ADDITIONLACONS" class="">Additional Construction at Site (in %) <span class="MndtryAstr"></span></label>
                   </div>
                </div>
           </div>
            <div class="form-row">
             <div class="col d-flex justify-content-center">
                  <button type="button" id="save3" data-aria="LSW_TTECHVALUATIONDETL|THVD|THVD_ALTNPROPERTYNO|Valuation"  class= "btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                  <button type="button" data-aria="LSW_TTECHVALUATIONDETL|THVD|THVD_ALTNPROPERTYNO|Valuation" data-card="2" class=" btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
              </div>
           </div>  
        </form>
        </div>
    </div>
  </div>
  
  <!-- Legal End -->
 <!-- Property Visit Start -->
  <div class="card">
    <!-- Card header -->
    <div class="card-header Btxt7" role="tab" id="heading4">
      <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-multidata="" data-load="" data-aria="LSW_TTECHVALURRMK|THVR|THVR_ALTNPROPERTYNO|TPIF_ALTNPROPERTYNO|THVR_PROPERTYNO|TPIF_PROPERTYNO" data-parent="#accordionEx" href="#collapse4"
        aria-expanded="false" aria-controls="collapse4">
          Remarks<i class="fa fa-plus-circle rotate-icon"></i>
      </a>
    </div>
    <!-- Card body -->
    <div id="collapse4" class="collapse" role="tabpanel" aria-labelledby="heading4" data-parent="#accordionEx">
        <div class="card-body px-lg-5 pt-0">
        <form>
        <input type="text" id="THVR_PRCSID" hidden="hidden" name="THVR_PRCSID" class="form-control THVRDBfields">
        <input type="text" id="THVR_ACTIVITYID" hidden="hidden" name="THVR_ACTIVITYID" class="form-control THVRDBfields">
        <input type="text" id="THVR_CREATEDBY" hidden="hidden" name="THVR_CREATEDBY" class="form-control THVRDBfields">
        <input type="text" id="THVR_DTCREATED" hidden="hidden" name="THVR_DTCREATED" class="form-control THVRDBfields">
        <input type="text" id="THVR_MODIFIEDBY" hidden="hidden" name="THVR_MODIFIEDBY" class="form-control THVRDBfields">
        <input type="text" id="THVR_DTMODIFIED" hidden="hidden" name="THVR_DTMODIFIED" class="form-control THVRDBfields">
        <input type="text" id="THVR_PROPERTYNO" hidden="hidden" name="THVR_PROPERTYNO"  class="form-control THVRDBfields">
         
         <input type="text" id="THVR_GENREMARKI" hidden="hidden" name="THVR_GENREMARKI" class="form-control THVRDBfields">
		 
		   <input type="text" id="THVR_DOCUSUB" hidden="hidden" name="THVR_DOCUSUB" class="form-control THVRDBfields">
		   
         <input type="text" id="THVR_ALTNPROPERTYNO" hidden="hidden" name="THVR_ALTNPROPERTYNO" class="form-control THVRDBfields">   
          <input type="text" id="THVR_UPLODPHS" hidden="hidden" name="THVR_UPLODPHS" class="form-control THVRDBfields">
         </br>
            <div class="form-row">
        		<div class="col Btxt1">GENERAL</div>
        	 </div>
			 
		 <div class="form-row">
        		<div class="col Btxt10">Document Submitted</div>
        	 </div>
             
                 <div class="HyperControls form-row"> 
   <a onclick="AddPageMultiData('','','','DOCUSUB','TDSUDBfields');" class="Btxt4 FltRight BTNHIDE"  href="#">+ Add a Point</a>
  </div>	
        <div data-for="DOCUSUB" class="DOCUSUB"> 
      </div>
       <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="DOCUSUB" style="display:none">
        <div data-row="" class="card-body px-lg-5 pt-0  DYNROW">
         <input type="text" id="TDSU_PRCSID" hidden="hidden" name="TDSU_PRCSID" class="form-control TDSUDBfields">
         <input type="text" id="TDSU_ACTIVITYID" hidden="hidden" name="TDSU_ACTIVITYID" class="form-control TDSUDBfields">
         <input type="text" id="TDSU_DTCREATED" hidden="hidden" name="TDSU_DTCREATED" class="form-control TDSUDBfields">
         <input type="text" id="TDSU_CREATEDBY" hidden="hidden" name="TDSU_CREATEDBY" class="form-control TDSUDBfields">
         <input type="text" id="TDSU_DTMODIFIED" hidden="hidden" name="TDSU_DTMODIFIED" class="form-control TDSUDBfields">
         <input type="text" id="TDSU_MODIFIEDBY" hidden="hidden" name="TDSU_MODIFIEDBY" class="form-control TDSUDBfields">
         <input type="text" id="TDSU_REFNO" hidden="hidden" name="TDSU_REFNO" class="form-control TDSUDBfields">
        
		
			
       <div class="form-row">
         <div class=" col-md-11">
                 <div class="md-form">
                 <span id="PROPTXTHDR" class="Btxt10"></span> <input type="text" id="TDSU_TEXTVAL" name="TDSU_TEXTVAL" class="form-control NoSpecialChar TDSUDBfields">
                  </div>
              </div>
			  
			    <div class=" col-md-1"> 
                  <div class="md-form">
                   <img src="ThemeproLO/Common/Images/Delete_Img.png"   class="DELDOCU BTNHIDE" alt="Cinque Terre" width="20" height="20"> 
                   </div>
                   </div>
              </div>
         </div>
         </div>	 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
        	 <div class="form-row">
        		<div class="col Btxt10">REMARKS</div>
        	 </div>
             
                 <div class="HyperControls form-row"> 
   <a onclick="AddPageMultiData('','','','NICETOHAVE','TVRLDBfields');ADDREMARKROWNO();" class="Btxt4 FltRight BTNHIDE"  href="#">+ Add a Point</a>
  </div>	
        <div data-for="NICETOHAVE" class="NICETOHAVE"> 
      </div>
       <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="NICETOHAVE" style="display:none">
        <div data-row="" class="card-body px-lg-5 pt-0  DYNROW">
         <input type="text" id="TVRL_PRCSID" hidden="hidden" name="TVRL_PRCSID" class="form-control TVRLDBfields">
         <input type="text" id="TVRL_ACTIVITYID" hidden="hidden" name="TVRL_ACTIVITYID" class="form-control TVRLDBfields">
         <input type="text" id="TVRL_CREATEDBY" hidden="hidden" name="TVRL_CREATEDBY" class="form-control TVRLDBfields">
         <input type="text" id="TVRL_DTCREATED" hidden="hidden" name="TVRL_DTCREATED" class="form-control TVRLDBfields">
         <input type="text" id="TVRL_MODIFIEDBY" hidden="hidden" name="TVRL_MODIFIEDBY" class="form-control TVRLDBfields">
         <input type="text" id="TVRL_DTMODIFIED" hidden="hidden" name="TVRL_DTMODIFIED" class="form-control TVRLDBfields">
         <input type="text" id="TVRL_REFNO" hidden="hidden" name="TVRL_REFNO" class="form-control TVRLDBfields">
         <input type="text" id="TVRL_TXTROW" hidden="hidden" name="TVRL_TXTROW" class="form-control TVRLDBfields">
		
			
       <div class="form-row">
         <div class=" col-md-11">
                 <div class="md-form">
                 <span id="PROPTXTHDR" class="Btxt10"></span> <input type="text" id="TVRL_TEXTVAL" name="TVRL_TEXTVAL" class="form-control NoSpecialChar TVRLDBfields">
                  </div>
              </div>
			  
			  <div class=" col-md-1"> 
                  <div class="md-form">
                   <img src="ThemeproLO/Common/Images/Delete_Img.png"   class="DELREMARKS BTNHIDE" alt="Cinque Terre" width="20" height="20"> 
                   </div>
                   </div>
              </div>
         </div>
         </div>
               <div class="form-row">
        		   <div class="col Btxt10">DECLARARION</div>
        	   </div>
        	   <div class="form-row">
        	   <div class="col-md-7">
                  <!-- First name -->
                   <div class="md-form">
                       <label class="">I/WE hereby declare that, The property is inspected by our representative<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="col-md-5">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="THVR_DECLARRESPECT" maxlength="100" name="THVR_DECLARRESPECT" class="form-control NoSpecialChar THVRDBfields">
                   </div>
                </div>
                </div>
                <div class="form-row">
                <div class="col-md-7">
                  <!-- First name -->
                   <div class="md-form">
                       <label class="">I/WE here no Direct or Indirect Interest in the property valued <span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="col-md-5">
                  <!-- First name -->
                   <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input THVRDBfields" value="Yes" id="IntrstYes" name="THVR_DECLARPROPVALD">
                          <label class="custom-control-label" for="IntrstYes">Yes</label> 
                   </div>
                  <div class="custom-control custom-radio custom-control-inline">
                       <input type="radio" class="custom-control-input THVRDBfields" value="No" id="IntrstNo" name="THVR_DECLARPROPVALD">
                        <label class="custom-control-label" for="IntrstNo">No</label>
                   </div>
                </div>
                </div>
                </div>
                <div class="form-row">
                <div class="col-md-7">
                  <!-- First name -->
                   <div class="md-form">
                       <label for="TEVD_DTCOMPLETED" class="">The information furnished above is true and correct to my/our knowledge and belief <span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="select-radio"> 
                 <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input THVRDBfields" value="Yes" id="InfoYes" name="THVR_DECLARKNOWLG">
                          <label class="custom-control-label" for="InfoYes">Yes</label> 
                   </div>
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input THVRDBfields" value="No" id="InfoNo" name="THVR_DECLARKNOWLG">
                           <label class="custom-control-label" for="InfoNo">No</label>
                     </div>
                  </div>
                </div>
                 <div class="form-row">
           		    <div class="col">
           			   <div class="md-form">
                           <textarea id="THVR_REMARKS" name="THVR_REMARKS" maxlength="2000" class="form-control NoSpecialChar THVRDBfields"   style="height: 130px;width:1150px;"></textarea>
           			  </div>
           		   </div>
               </div>
                <div class="form-row ">
                <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="THVR_LATITUDE" maxlength="10" name="THVR_LATITUDE" class="form-control IsNumberFields NoSpecialChar THVRDBfields"> 
                    <label for="THVR_LATITUDE" class="">Lattitude<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                   <div class="md-form">
                       <input type="text" id="THVR_LONGITUDE" maxlength="10" name="THVR_LONGITUDE" class="form-control IsNumberFields NoSpecialChar THVRDBfields">
                       <label for="THVR_LONGITUDE" class="">Longitude<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                 <div class="col-md-4">
                 <label class="">Upload Map<span class="MndtryAstr"></span></label>
                 <div class="md-form">
               <table>
              <tr>
              <td>
                <div id="THVR_UPLOADMAPUPLOAD"  class="file-field">
                <a class="">
                   <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                     <input type="file"  name="datafile" onchange="DocFldUpldHndlr(THVR_UPLOADMAP,'THVR_UPLOADMAP','Valuation')" class="THVR_UPLOADMAP"  >
                </a>
                 <input type="text" id="THVR_UPLOADMAP" hidden="hidden" data-Validate="THVR_UPLOADMAP"  name="THVR_UPLOADMAP" class="form-control DOCMndtry File THVRDBfields">
                <span class="name">Click Here to Upload</span> 
                </div> 
                 </td>
              <div class="md-form">
              <div class="md-form Formcol-mdLR">
               <div class="THVR_UPLOADMAP" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded BTNHIDE" title="UPLOAD" onclick="ReuploadFile(THVR_UPLOADMAP);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('THVR_UPLOADMAP')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
              </div>
             </div>   
           </tr>
          </table>
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
                           <input type="text" id="TRPU_PRCSID" hidden="hidden" name="TRPU_PRCSID" value="" class="form-control TRPUDBfields">
                           <input type="text" id="TRPU_ACTIVITYID" hidden="hidden" name="TRPU_ACTIVITYID" class="form-control TRPUDBfields">
                           <input type="text" id="TRPU_DTCREATED" hidden="hidden" name="TRPU_DTCREATED" class="form-control TRPUDBfields">
                           <input type="text" id="TRPU_CREATEDBY" hidden="hidden" name="TRPU_CREATEDBY" class="form-control TRPUDBfields">
                           <input type="text" id="TRPU_DTMODIFIED" hidden="hidden" name="TRPU_DTMODIFIED" class="form-control TRPUDBfields">
                           <input type="text" id="TRPU_MODIFIEDBY" hidden="hidden" name="TRPU_MODIFIEDBY" class="form-control TRPUDBfields">
						   
						   <input type="text" id="TRPU_UNIDID" hidden="hidden" name="TRPU_UNIDID" class="form-control TRPUDBfields">
                           <input type="text" id="TRPU_ALTUNIQID" hidden="hidden" name="TRPU_ALTUNIQID" class="form-control TRPUDBfields">
                           <div class="form-row">
                              <div class="col">
                                 <div class="md-form " >
                                    <table>
                                       <tr>
                                          <td>
                                             <div id="TRPU_PDATTACHMNTUPLOAD"  class="file-field">
                                                <a class="">
                                                <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                                <input type="file"  name="datafile" onchange="DocFldUpldHndlr_V1(this,'TRPU_PDATTACHMNT'+$(this).closest('.DYNROW').attr('data-row'),'TRPU_PDATTACHMNT','PDDetails','PDDate','PD',$(this).closest('.DYNROW'))" class="TRPU_PDATTACHMNT"  >
                                                </a>
                                                <input type="text" id="TRPU_PDATTACHMNT" hidden="hidden" data-Validate="TRPU_PDATTACHMNT"  name="TRPU_PDATTACHMNT" class="form-control PHUPLOAD  File TRPUDBfields">
                                                <span class="name">Upload Photos</span> 
                                             </div>
                                          </td>
                                          <div class="md-form">
                                             <div class="md-form Formcol-mdLR">
                                                <div class="TRPU_PDATTACHMNT" style="display:none"> 
                                                <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="" class=" DELBTN DELETEDOCUMNETS"/>      
                                       
                                        <!--  <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile($('#APDG_PDATTACHMNT'+$(event.target).closest('.DYNROW').attr('data-row')));" 
                                                alt="Cinque Terre" width="20" height="20">   -->
                                                <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" 
                                                onclick="GrdDocDwnld('TRPU_PDATTACHMNT'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" 
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
                        <a onclick="AddPageMultiData('',$('#PrcsID').val(),$('#THVR_ALTNPROPERTYNO').val(),'BankDetail1','TRPUDBfields');" class="Btxt4 FltRight ADDBTN "  href="#">+ Add</a>
                        <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                     </div>
                  </div>
             </div>
              <div class="form-row">
               <div class="col d-flex justify-content-center">
                  <button type="button" id="save4" data-aria="LSW_TTECHVALURRMK|THVR|THVR_ALTNPROPERTYNO|Remarks" class= "btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                  <button type="button" data-aria="LSW_TTECHVALURRMK|THVR|THVR_ALTNPROPERTYNO|Remarks" data-card="3"  class=" btn btn-Syel waves-effect waves-light FormSave">Submit</button> 
              </div>
           </div>  
        </form>
      </div>
    </div>
  </div>
  <!-- Remarks End -->
  </div>    
   <!-- </div>-->
   </div>
   </div> 

 <table style="display:none" id="GridTable2">
   <thead>
<th>PLAG_LNDPARTICULAR</th>
<th>PLAG_LNDASPERDOC</th>
<th>PLAG_LNDACTUAL</th>
<th>PLAG_LNAAREACONSD</th>
<th>PLAG_LNDRATSQFT</th>
<th>PLAG_LNDTOTVAL</th>
<th>PLAG_LNDREFID</th>

<!-- <th>PLAG_PRCSID</th>
<th>PLAG_ACTIVITYID</th>
<th>PLAG_DTCREATED</th>
<th>PLAG_CREATEDBY</th>
<th>PLAG_DTMODIFIED</th>
<th>PLAG_MODIFIEDBY</th> -->
   
   </thead>
   
    </table>
    
    
     <table style="display:none" id="GridTable3">
   <thead>
<th>PBDG_BUILDPARTICULAR</th>
<th>PBDG_BUILDASPERDOC</th>
<th>PBDG_BUILDACTUAL</th>
<th>PBDG_BUILDAREACONSD</th>
<th>PBDG_BUILDRATSQFT</th>
<th>PBDG_BUILDTOTVAL</th>
<th>PBDG_LNDREFID</th>
<th>ACTION</th>
<!-- <th>PBDG_PRCSID</th>
<th>PBDG_ACTIVITYID</th>
<th>PBDG_DTCREATED</th>
<th>PBDG_CREATEDBY</th>
<th>PBDG_DTMODIFIED</th>
<th>OKYD_MODIFIEDBY</th> -->
   
   </thead>
   
    </table>

 </table>
    <table style="display:none" id="GridTable4">
   <thead>
<th>TEVL_AMENTIESNAME</th>
<th>TEVL_AMENTIESVALUE</th>
<th>TEVL_REFID</th>
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
   
<script type="text/javascript" src="ThemeproLO/ViewRpt/Script/TechIValuation/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/ViewRpt/Script/TechIValuation/Validation.js${DMY13}"></script>
  
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>   
  

    

                            
                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           