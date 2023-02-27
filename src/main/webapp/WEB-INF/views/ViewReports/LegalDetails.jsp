   
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
         <input type="text" id="LEVD_PRCSID" hidden="hidden" name="LEVD_PRCSID" class="form-control LEVDDBfields">
         <input type="text" id="LEVD_ACTIVITYID" hidden="hidden" name="LEVD_ACTIVITYID" class="form-control LEVDDBfields">
         <input type="text" id="LEVD_CREATEDBY" hidden="hidden" name="LEVD_CREATEDBY" class="form-control LEVDDBfields">
         <input type="text" id="LEVD_DTCREATED" hidden="hidden" name="LEVD_DTCREATED" class="form-control LEVDDBfields">
         <input type="text" id="LEVD_MODIFIEDBY" hidden="hidden" name="LEVD_MODIFIEDBY" class="form-control LEVDDBfields">
         <input type="text" id="LEVD_DTMODIFIED" hidden="hidden" name="LEVD_DTMODIFIED" class="form-control LEVDDBfields">
         <input type="text" id="LEVD_PROPERTYNO" hidden="hidden" name="LEVD_PROPERTYNO" class="form-control LEVDDBfields">
        <input type="text" id="LEVD_ALTNPROPERTYNO" hidden="hidden" name="LEVD_ALTNPROPERTYNO" class="form-control LEVDDBfields">
          <input type="text" id="LEVD_MUSTTO" hidden="hidden" name="LEVD_MUSTTO" class="form-control LEVDDBfields">
          <input type="text" id="LEVD_NICETO" hidden="hidden" name="LEVD_NICETO" class="form-control LEVDDBfields">
           <input type="text" id="LEVD_OWNERNAME" hidden="hidden" name="LEVD_OWNERNAME" class="form-control LEVDDBfields">
		   <input type="text" id="LEVD_DATEINIT" hidden="hidden" name="LEVD_DATEINIT" class="form-control LEVDDBfields">
		   
		   
  <!--  card -->
  <div class="card cardNS">
    <!-- Card body -->
		          <div class="card-body px-lg-5 pt-0">
            <div class="form-row">
        		<div class="col Btxt3">Legal Details</div>
        	</div>
        	<div class="form-row">
        		<div class="col Btxt10">OWNER'S NAME</div>
        	</div>
        	</div>
        	
       <div class="HyperControls FltRight" > 
      <a onclick="AddPageMultiData('','','','OWNERNAME','OWNADBfields')" class="Btxt4 ADDBTN FltRight BTNHIDE"  href="#">+ Add Owner's Name</a>
     </div> 
        <div class="card-body px-lg-5 pt-0">
        <form>

        <div data-for="OWNERNAME" class="OWNERNAME"> 
      </div>
       <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="OWNERNAME" style="display:none">
        <div data-row="" class="card-body px-lg-5 pt-0  DYNROW">
          <input type="text" id="OWNA_PRCSID" hidden="hidden" name="OWNA_PRCSID" class="form-control OWNADBfields">
         <input type="text" id="OWNA_ACTIVITYID" hidden="hidden" name="OWNA_ACTIVITYID" class="form-control OWNADBfields">
         <input type="text" id="OWNA_CREATEDBY" hidden="hidden" name="OWNA_CREATEDBY" class="form-control OWNADBfields">
         <input type="text" id="OWNA_DTCREATED" hidden="hidden" name="OWNA_DTCREATED" class="form-control OWNADBfields">
         <input type="text" id="OWNA_MODIFIEDBY" hidden="hidden" name="OWNA_MODIFIEDBY" class="form-control OWNADBfields">
         <input type="text" id="OWNA_DTMODIFIED" hidden="hidden" name="OWNA_DTMODIFIED" class="form-control OWNADBfields">
         <input type="text" id="OWNA_PROPERTYNO" hidden="hidden" name="OWNA_PROPERTYNO" class="form-control OWNADBfields">
           <!-- LSW_TLEGALOWNERNAME -->
       <div class="form-row">
               <div class=" col-md-6">
                 <div class="md-form">
                 
                   <input type="text" id="OWNA_OWNERNAME" maxlength="100" name="OWNA_OWNERNAME" class="form-control NoSpecialChar OWNADBfields">
                    <label for="OWNA_OWNERNAME" class="">Name<span class="MndtryAstr"></span></label>
                  </div>

                  </div>
              </div>
           </div>    
      </div> 
           <div class="form-row">
        		<div class="col Btxt10">PROPERTY  DETAILS AS PER THE DOCUMENT</div>
        	</div>
            <div class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_DOCPLOTNO" maxlength="30"   name="LEVD_DOCPLOTNO" class="form-control LEVDMndtry  AddrNoSpecialChar SMADDR LEVDDBfields">
                    <label for="LEVD_DOCPLOTNO" class="">Plot Number<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                   <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_DOCDOORNO" maxlength="30"  name="LEVD_DOCDOORNO" class="form-control AddrNoSpecialChar  LEVDMndtry  SMADDR LEVDDBfields">
                    <label for="LEVD_PROPADDR2" class="">Door Number<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_DOCBUILDNAME" maxlength="100"  name="LEVD_DOCBUILDNAME" class="form-control LEVDMndtry AddrNoSpecialChar SMADDR LEVDDBfields  ">
                    <label for="LEVD_DOCBUILDNAME" class="">Building Name/House Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div> 
              <div class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_DOCSTREET" maxlength="100"  name="LEVD_DOCSTREET" class="form-control LEVDMndtry AddrNoSpecialChar SMADDR LEVDDBfields">
                    <label for="LEVD_DOCSTREET" class="">Street Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                   <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_DOCLOCALITY" maxlength="100"  name="LEVD_DOCLOCALITY" class="form-control LEVDMndtry  NoSpecialChar SMADDR LEVDDBfields">
                    <label for="LEVD_DOCLOCALITY" class="">Locality<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_DOCSURYNO" maxlength="30"  name="LEVD_DOCSURYNO" class="form-control  LEVDMndtry SMADDR AddrNoSpecialChar LEVDDBfields  ">
                    <label for="LEVD_DOCSURYNO" class="">Survey Number<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div> 
             <div class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_DOCPINCOD" maxlength="6"  name="LEVD_DOCPINCOD" onchange="fnOnFocusOut(this);Pindetls(this,'LEVD_DOCSTATE','LEVD_DOCCITY')" class="form-control SMADDR LEVDMndtry IsNumberFields NoSpecialChar LEVDDBfields">
                    <label for="LEVD_DOCPINCOD" class="">Pin code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                   <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_DOCCITY" disabled name="LEVD_DOCCITY" class="form-control IsAlphaFields NoSpecialChar LEVDDBfields">
                    <label for="LEVD_DOCCITY" class="">City<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_DOCSTATE" disabled name="LEVD_DOCSTATE" class="form-control IsAlphaFields NoSpecialChar LEVDDBfields  ">
                    <label for="LEVD_DOCSTATE" class="">State<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div> 
            <div class="form-row ">
                <div class=" col-md-12">
                  <div class="md-form">
                    <input type="text" id="LEVD_DOCLANDMARK" maxlength="100"  name="LEVD_DOCLANDMARK" class="form-control LEVDMndtry AddrNoSpecialChar SMADDR LEVDDBfields  ">
                    <label for="LEVD_DOCLANDMARK" class="">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div> 
             <div class="form-row">
        		<div class="col Btxt10">BOUNDARIES</div>
        	</div>
            <div  class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_DOCNORTH" maxlength="300" name="LEVD_DOCNORTH" class="form-control LEVDMndtry NoSpecialChar LEVDDBfields">
                    <label for="LEVD_DOCNORTH" class="">North By<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                   <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_DOCSOUTH" maxlength="300" name="LEVD_DOCSOUTH" class="form-control LEVDMndtry NoSpecialChar LEVDDBfields">
                    <label for="LEVD_DOCSOUTH" class="">South By<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_DOCEAST" maxlength="300" name="LEVD_DOCEAST" class="form-control LEVDMndtry NoSpecialChar LEVDDBfields  ">
                    <label for="LEVD_DOCEAST" class="">East By<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div> 
           <div class="form-row ">
            <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_DOCWEST" maxlength="300" name="LEVD_DOCWEST" class="form-control LEVDMndtry NoSpecialChar LEVDDBfields  ">
                    <label for="LEVD_DOCWEST" class="">West By<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div> 
     <div class="form-row ">
        <div class=" col-md-4">
             <div class="md-form">
                 <input type="text" id="LEVD_DOCSRO" maxlength="50" name="LEVD_DOCSRO" class="form-control LEVDMndtry NoSpecialChar LEVDDBfields  ">
                 <label for="LEVD_DOCSRO" class="">SRO<span class="MndtryAstr">*</span></label>
              </div>
        </div>   
        <div class="col-md-4">     
          <div class="md-form">
             <div class="select-radio"> 
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" class="custom-control-input LEVDDBfields" value="Yes" id="AgriYes" name="LEVD_DOCAGIPROP">
                    <label class="custom-control-label" for="AgriYes">Yes</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                     <input type="radio" class="custom-control-input LEVDDBfields" value="No" id="AgriNo" name="LEVD_DOCAGIPROP">
                     <label class="custom-control-label" for="AgriNo">No</label>
                </div>
             </div>
                  <label class="mdb-main-label BTxt9">Non-agricultural Property<span class="MndtryAstr"></span></label>      
          </div>
       </div>    
   </div>  
          <div class="form-row">
        		<div class="col Btxt10">PROPERTY  DETAILS AS PER THE SITE</div>
        	</div>
			
			<div class="form-row">
                <div class="col-md-12">
                  <div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input LEVDDBfields" onclick="SAMEADDRS();" id="LEVD_SAMEASADDE" name="LEVD_SAMEASADDE">
  					<label class="custom-control-label" for="LEVD_SAMEASADDE">Same as Address of Property as per Document</label>
				</div>
				</div>
                </div>
           </div>
		   
		   
            <div class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_SITEPLOTNO" maxlength="30" name="LEVD_SITEPLOTNO" class="form-control  LEVDMndtry SMADDR SMDOC AddrNoSpecialChar LEVDDBfields">
                    <label for="LEVD_SITEPLOTNO" class="ADDR ">Plot Number<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_SITEDOORNO" maxlength="30" name="LEVD_SITEDOORNO" class="form-control  LEVDMndtry SMADDR SMDOC AddrNoSpecialChar LEVDDBfields">
                    <label for="LEVD_SITEDOORNO" class="ADDR">Door Number<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_SITEBUILDNAME" maxlength="100" name="LEVD_SITEBUILDNAME" class="form-control SMADDR LEVDMndtry SMDOC AddrNoSpecialChar  LEVDDBfields  ">
                    <label for="LEVD_SITEBUILDNAME" class="ADDR">Building Name/House Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div> 
           <div class="form-row">
             <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="LEVD_SITESTREET" maxlength="100" name="LEVD_SITESTREET" class="form-control  SMADDR SMDOC LEVDMndtry AddrNoSpecialChar LEVDDBfields">
                    <label for="LEVD_SITESTREET" class="ADDR">Street Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_SITELOCALITY" maxlength="100" name="LEVD_SITELOCALITY" class="form-control SMADDR SMDOC LEVDMndtry NoSpecialChar LEVDDBfields">
                    <label for="LEVD_SITELOCALITY" class="ADDR">Locality<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_SITESURYNO" maxlength="30" name="LEVD_SITESURYNO" class="form-control  LEVDMndtry SMDOC SMADDR AddrNoSpecialChar LEVDDBfields  ">
                    <label for="LEVD_SITESURYNO" class="ADDR">Survey Number<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div> 
             <div class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_SITEPINCOD" maxlength="6" name="LEVD_SITEPINCOD" onchange="fnOnFocusOut(this);Pindetls(this,'LEVD_SITESTATE','LEVD_SITECITY')" class="form-control LEVDMndtry SMADDR SMDOC LEVDMndtry IsNumberFields NoSpecialChar LEVDDBfields">
                    <label for="LEVD_SITEPINCOD" class="ADDR">Pin code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_SITECITY" disabled name="LEVD_SITECITY" class="form-control NoSpecialChar SMDOC IsAlphaFields LEVDDBfields">
                    <label for="LEVD_SITECITY" class="ADDR">City<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_SITESTATE" disabled name="LEVD_SITESTATE" class="form-control NoSpecialChar SMDOC IsAlphaFields LEVDDBfields  ">
                    <label for="LEVD_SITESTATE" class="ADDR">State<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div> 
           <div class="form-row ">
                <div class=" col-md-12">
                  <div class="md-form">
                    <input type="text" id="LEVD_SITELANDMARK" maxlength="100" name="LEVD_SITELANDMARK" class="form-control LEVDMndtry AddrNoSpecialChar SMDOC SMADDR LEVDDBfields  ">
                    <label for="LEVD_SITELANDMARK" class="ADDR">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div> 
             <div class="form-row">
        		<div class="col Btxt10">BOUNDARIES</div>
        	</div>
            <div  class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_SITENORTH" maxlength="300" name="LEVD_SITENORTH" class="form-control LEVDMndtry  NoSpecialChar LEVDDBfields">
                    <label for="LEVD_SITENORTH" class="">North By<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_SITESOUTH" maxlength="300" name="LEVD_SITESOUTH" class="form-control LEVDMndtry NoSpecialChar LEVDDBfields">
                    <label for="LEVD_SITESOUTH" class="">South By<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_SITEEAST" maxlength="300" name="LEVD_SITEEAST" class="form-control LEVDMndtry NoSpecialChar LEVDDBfields  ">
                    <label for="LEVD_SITEEAST" class="">East By<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div> 
           <div class="form-row ">
            <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_SITEWEST" maxlength="300" name="LEVD_SITEWEST" class="form-control LEVDMndtry NoSpecialChar LEVDDBfields  ">
                    <label for="LEVD_SITEWEST" class="">West By<span class="MndtryAstr"></span>*</label>
                  </div>
                </div>
           </div> 
           <div class="form-row ">
             <div class=" col-md-4">
               <div class="md-form">
                    <input type="text" id="LEVD_SITESRO"  maxlength="50" name="LEVD_SITESRO" class="form-control LEVDMndtry NoSpecialChar LEVDDBfields  ">
                    <label for="LEVD_SITESRO" class="">SRO<span class="MndtryAstr">*</span></label>
                  </div>
            </div>        
    <div class="col-md-4">     
     <div class="md-form">
         <div class="select-radio"> 
           <div class="custom-control custom-radio custom-control-inline">
               <input type="radio" class="custom-control-input LEVDDBfields" value="Yes" id="siteAgriYes" name="LEVD_SITEAGIPROP">
               <label class="custom-control-label" for="siteAgriYes">Yes</label>
           </div>
           <div class="custom-control custom-radio custom-control-inline">
               <input type="radio" class="custom-control-input LEVDDBfields" value="No" id="siteAgriNo" name="LEVD_SITEAGIPROP">
               <label class="custom-control-label" for="siteAgriNo">No</label>
           </div>
         </div>
              <label class="mdb-main-label BTxt9">Non-agricultural Property<span class="MndtryAstr"></span></label>      
      </div>
      </div>    
         </div> 


 <div class="form-row">
		  <div class="col-md-6">
                    <div class="col Btxt10">Uploaded Security Documents</div>
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
        		<div class="col Btxt10">DOCUMENTS PRODUCED</div>
        	</div>  
        	  <div class="form-row">
        	   <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
                      <textarea id="LEVD_DOCPRODU" name="LEVD_DOCPRODU" maxlength="5000"  class="form-control AddrNoSpecialChar IsRmkField LEVDDBfields"   style="height: 160px;width:1200px;"></textarea>
           			</div>
           		 </div>
           </div>
           </div>
            <div class="form-row">
        		<div class="col Btxt10">MUST TO HAVE</div>
        	</div>
               
     <div class="HyperControls  " > 
   <a onclick="AddPageMultiData('','','','MUSTTOHAVE','LMUDDBfields');ADDROWNO()" class="Btxt4 BTNHIDE"  href="#">+ Add a Point</a>
  </div>	
  
        <div data-for="MUSTTOHAVE" class="MUSTTOHAVE"> 
      </div>
       <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="MUSTTOHAVE" style="display:none">
        <div data-row="" class="card-body px-lg-5 pt-0  DYNROW">
          <input type="text" id="LMUD_PRCSID" hidden="hidden" name="LMUD_PRCSID" class="form-control LMUDDBfields">
         <input type="text" id="LMUD_ACTIVITYID" hidden="hidden" name="LMUD_ACTIVITYID" class="form-control LMUDDBfields">
         <input type="text" id="LMUD_CREATEDBY" hidden="hidden" name="LMUD_CREATEDBY" class="form-control LMUDDBfields">
         <input type="text" id="LMUD_DTCREATED" hidden="hidden" name="LMUD_DTCREATED" class="form-control LMUDDBfields">
         <input type="text" id="LMUD_MODIFIEDBY" hidden="hidden" name="LMUD_MODIFIEDBY" class="form-control LMUDDBfields">
         <input type="text" id="LMUD_DTMODIFIED" hidden="hidden" name="LMUD_DTMODIFIED" class="form-control LMUDDBfields">
         <input type="text" id="LMUD_PROPERTYNO" hidden="hidden" name="LMUD_PROPERTYNO" class="form-control LMUDDBfields">
 
 
      <input type="text" id="LMUD_TXTROW" hidden="hidden" name="LMUD_TXTROW" maxlength="200" class="form-control LMUDDBfields">
       <div class="form-row">


              <div class=" col-md-11">
                 <div class="md-form">
                    <span id="PROPTXTHDR" class="Btxt10"></span> <input type="text" id="LMUD_TEXTVAL" name="LMUD_TEXTVAL" class="form-control MUSTMndtry AddrNoSpecialChar LMUDDBfields ">
                  </div>
				  </div>
				  			  <div class=" col-md-1"> 
                  <div class="md-form">
                   <img src="ThemeproLO/Common/Images/Delete_Img.png"   class="DeleteMUST DELBTN" alt="Cinque Terre" width="20" height="20"> 
                   </div>
                   </div>
              
           </div>    
      </div>
      </div>
           <div class="form-row">
        		<div class="col Btxt10">NICE TO HAVE</div>
        	   </div>           
           
 <div class="HyperControls "> 
   <a onclick="AddPageMultiData('','','','NICETOHAVE','LNIDDBfields');ADDROWNONICE()" class="Btxt4 BTNHIDE"  href="#">+ Add a Point</a>
  </div>
 	
        <div data-for="NICETOHAVE" class="NICETOHAVE"> 
      </div>
    <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="NICETOHAVE" style="display:none">
        <div data-row="" class="card-body px-lg-5 pt-0  DYNROW">
        <input type="text" id="LNID_PRCSID" hidden="hidden" name="LNID_PRCSID" class="form-control LNIDDBfields">
         <input type="text" id="LNID_ACTIVITYID" hidden="hidden" name="LNID_ACTIVITYID" class="form-control LNIDDBfields">
         <input type="text" id="LNID_CREATEDBY" hidden="hidden" name="LNID_CREATEDBY" class="form-control LNIDDBfields">
         <input type="text" id="LNID_DTCREATED" hidden="hidden" name="LNID_DTCREATED" class="form-control LNIDDBfields">
         <input type="text" id="LNID_MODIFIEDBY" hidden="hidden" name="LNID_MODIFIEDBY" class="form-control LNIDDBfields">
         <input type="text" id="LNID_DTMODIFIED" hidden="hidden" name="LNID_DTMODIFIED" class="form-control LNIDDBfields">
         <input type="text" id="LNID_PROPERTYNO" hidden="hidden" name="LNID_PROPERTYNO" class="form-control LNIDDBfields">
        
		<input type="text" id="LNID_TXTROW" hidden="hidden" name="LNID_TXTROW" class="form-control LNIDDBfields">
           <div class="form-row">
              <div class=" col-md-11">
                 <div class="md-form">
                     <span id="PROPTXTHDR" class="Btxt10"></span><input type="text" id="LNID_TEXTVAL" maxlength="200" name="LNID_TEXTVAL" class="form-control NICEMndtry AddrNoSpecialChar LNIDDBfields  ">
                  </div>
              </div>
			  <div class=" col-md-1"> 
                  <div class="md-form">
                   <img src="ThemeproLO/Common/Images/Delete_Img.png"   class="DeleteNICE DELBTN" alt="Cinque Terre" width="20" height="20"> 
                   </div>
                   </div>
         </div>    
      </div>
  </div>
             <div class="form-row">
        		<div class="col Btxt10">FLOW OF TITLE</div>
        	</div>  
        	  <div class="form-row">
        	    <div class="form-row">
           			<div class="md-form">
                      <textarea  placeholder="Type Here..."  id="LEVD_FLOWTITLE" name="LEVD_FLOWTITLE" maxlength="5000" class="form-control AddrNoSpecialChar IsRmkField btxt24 LEVDDBfields"   style="height: 160px;width:1200px;"></textarea>
           			</div>
                </div>
             </div>   
            <div class="form-row">
        		<div class="col Btxt10">FINAL LEGAL OPINION</div>
        	</div>  
        	  <div class="form-row">
        	   <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
                      <textarea placeholder="Type Here..."  id="LEVD_FINLEGALOPINON" name="LEVD_FINLEGALOPINON" maxlength="5000" class="form-control btxt24 NoSpecialChar IsRmkField LEVDDBfields"   style="height: 160px;width:1200px;"></textarea>
           			</div>
           		 </div>
           </div>
           </div>    
               <div class="form-row"> 
           		  <div class="col-md-4">
                   <div class="md-form">
                    <input type="text" id="LEVD_DTREPORT" maxlength="10" name="LEVD_DTREPORT" onblur="DateInspect(this,'LEVD_DATEINIT')"   class="form-control ISFutureDateFields IsNumberFields NoSpecialChar LEVDMndtry ISDatefield LEVDDBfields">
                    <label for="LEVD_DTREPORT" class="">Date of Report<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker" />
               </div>
            </div>
			 <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_TITLEDOCNAME" name="LEVD_TITLEDOCNAME" maxlength="100" class="form-control LEVDMndtry NoSpecialChar LEVDDBfields">
                    <label for="LEVD_TITLEDOCNAME" class="">Title Document Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LEVD_TITLEDOCNO" name="LEVD_TITLEDOCNO" maxlength="100" class="form-control LEVDMndtry NoSpecialChar LEVDDBfields">
                    <label for="LEVD_TITLEDOCNO" class="">Title Document Number<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
            </div>    
               <div class="modal-footer align-middle">
              <button type="button" id="save" data-aria="LSW_TFILEGALVENDETAILS|LEVD|LEVD_ALTNPROPERTYNO|" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>
              <button type="button" id="Submit" data-for="FIOfficeVerify" data-row="" data-aria="LSW_TFILEGALVENDETAILS|LEVD|LEVD_ALTNPROPERTYNO" class="btn btn-Syel waves-effect waves-light FormSave">Submit</button> 
           </div>  
        </form>	
    </div>
<!-- card -->
</br>
</div>
   </div>
      </div>
      <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/ViewRpt/Script/LegalDetails/LoadSubmit.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/ViewRpt/Script/LegalDetails/Validation.js${DMY13}"></script>
  
 <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
 <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
 <!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>   

               
                                  