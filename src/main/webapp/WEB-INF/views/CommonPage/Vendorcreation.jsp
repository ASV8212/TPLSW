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
           
           
        <input type="text" id="VECR_PRCSID" hidden="hidden" name="VECR_PRCSID" class="form-control VECRDBfields">
            <input type="text" id="VECR_ACTIVITYID" hidden="hidden" name="VECR_ACTIVITYID" class="form-control VECRDBfields">
            <input type="text" id="VECR_DTCREATED" hidden="hidden" name="VECR_DTCREATED" class="form-control VECRDBfields"> 
            <input type="text" id="VECR_CREATEDBY" hidden="hidden" name="VECR_CREATEDBY" class="form-control VECRDBfields">
            <input type="text" id="VECR_DTMODIFIED" hidden="hidden" name="VECR_DTMODIFIED" class="form-control VECRDBfields">
            <input type="text" id="VECR_MODIFIEDBY" hidden="hidden" name="VECR_MODIFIEDBY" class="form-control VECRDBfields">
             <input type="text" id="VECR_BANKDETAILS" hidden="hidden" name="VECR_BANKDETAILS" class="form-control VECRDBfields">
			 
			 	<input type="text" id="VECR_PASSWORD" hidden="hidden" value="themepass" name="VECR_PASSWORD" class="form-control VECRDBfields">
			 
			 <input type="text" id="VECR_UNIQID" hidden="hidden" name="VECR_UNIQID" class="form-control VECRDBfields">
			 
			 <input type="text" id="VECR_BROKERCODE" hidden="hidden" name="VECR_BROKERCODE" class="form-control VECRDBfields">
        	 
			 <input type="text" id="VECR_ADDROLEDET" hidden="hidden" name="VECR_ADDROLEDET" class="form-control VECRDBfields">
			 
			 <input type="text" id="VECR_DOCUMENTS" hidden="hidden" name="VECR_DOCUMENTS" class="form-control VECRDBfields">
			 
			<!-- <input type="text" id="VECR_ADDTIONALROLEHDN" hidden="hidden" name="VECR_ADDTIONALROLEHDN" class="form-control VECRDBfields">-->
			  <input type="text" id="VECR_TAPIMEI" hidden="hidden" name="VECR_TAPIMEI" class="form-control VECRDBfields">
			   <input type="text" id="VECR_TAPIMEII" hidden="hidden" name="VECR_TAPIMEII" class="form-control VECRDBfields">
			   
			   <input type="text" id="DOCVERSION" hidden="hidden" name="DOCVERSION" class="form-control VECRDBfields">
			   
			   <input type="text" id="VECR_ADDVALGROUP" hidden="hidden" name="VECR_ADDVALGROUP" class="form-control VECRDBfields">
			
        	<div class="form-row">
        		<div class="col Btxt3">Vendor Creation</div>
        	</div>

           <div class="form-row">
           
          
                
                
            <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="VECR_USERNAME"   name="VECR_USERNAME" disabled class="form-control NoSpecialChar   VECRDBfields">
                    <label for="id" class="">Vendor ID<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                
                
             <!--  <div class="col-md-4"   style="display:none">
                <div class="md-form">
                     <input type="text" id="VECR_BROKERCODE" name="VECR_BROKERCODE" class="form-control NoSpecialChar  VECRDBfields">
                    <label for="VECR_BROKERCODE" class="">Broke Code<span class="MndtryAstr"></span></label>
                  </div>
                </div>-->
                
                
             <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="VECR_VENDORCODE"  name="VECR_VENDORCODE" class="form-control NoSpecialChar VECRDBfields">
                    <label for="VECR_VENDORCODE" class="">Vendor Code<span class="MndtryAstr"></span></label>
                  </div>
                </div>
             
			 <div class="col-md-4">
                    <div class="md-form">
                     <input type="text" id="VECR_VENDORNAME" name="VECR_VENDORNAME" class="form-control VECRMndtry VECRDBfields">
                    <label for="VECR_VENDORNAME" class="">Vendor Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                
                 </div>
           
           <div class="form-row">
                   
                
              <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  VECRMndtry VECRDBfields" id="VECR_CHANNELTYP" name="VECR_CHANNELTYP">
				</select>
				<label class="mdb-main-label BTxt9">Vendor Type<span class="MndtryAstr">*</span></label>
             </div>
            </div> 

               
                <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  VECRMndtry VECRDBfields"  onchange="CHKSTATUS();BLOCKLISTSTATUS();" id="VECR_STATUS" name="VECR_STATUS">
                  	<option value="">Select</option>
  					<option value="Active">Active</option>
  					<option value="InActive">InActive</option>
				</select>
				<label class="mdb-main-label BTxt9">Status<span class="MndtryAstr">*</span></label>
             </div>
            </div> 
                
                 
            <div class="col-md-4">
                <div class="md-form">
                     <input type="text" id="VECR_STATUSREAS" name="VECR_STATUSREAS" class="form-control NoSpecialChar  VECRDBfields">
                    <label for="VECR_STATUSREAS" class="">Status Reason<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				
				 </div>
                  
                  
              <div class="form-row">     
               <div class="col-md-4">
                 <div class="md-form">
            
                  <input type="text" id="VECR_VALIDITYEXPIRY" name="VECR_VALIDITYEXPIRY"  maxlength="10" class="form-control form-control VECRMndtry  IsNumberFields NoSpecialChar  ISDatefield  VECRDBfields ">
                    <label for="VECR_VALIDITYEXPIRY" class="">Validity Expiry<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                  </div>
                  
                  
                   <div class="col-md-4">
                  <div class="md-form">
                  <input type="text" id="VECR_ACTIVEDATE" name="VECR_ACTIVEDATE"  disabled maxlength="10" class="form-control form-control  VECRMndtry IsNumberFields NoSpecialChar  ISDatefield  VECRDBfields ">
                    <label for="VECR_ACTIVEDATE" class="">Active Date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon actdt datepicker"/>
                  </div>
                  </div>
                  
				  <div class="col-md-4">
                  <div class="md-form">
                  <input type="text" id="VECR_INACTIVEDATE" name="VECR_INACTIVEDATE"  maxlength="10" class="form-control form-control  VECRMndtry IsNumberFields NoSpecialChar  ISDatefield  VECRDBfields ">
                    <label for="VECR_INACTIVEDATE" class="">In Active Date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon Inactdt datepicker"/>
                  </div>
                  </div>
				  
                </div>
         
          <div class="form-row"> 
               <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="VECR_CONNECTORTYPE" name="VECR_CONNECTORTYPE" class="form-control VECRMndtry VECRDBfields">
                    <label for="VECR_CONNECTORTYPE" class="">Connector Type<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
              <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="VECR_PAN" maxlength="10" onblur="VENPanValid(this);"   name="VECR_PAN" class="form-control VECRMndtry  NoSpecialChar VECRDBfields">
                    <label for="VECR_PAN" class="">PAN<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
				 <div class="col-md-4">
                <div class="md-form">
                     <input type="text" id="VECR_OFFICEGST" name="VECR_OFFICEGST" class="form-control   IsGSTINFields VECRDBfields">
                    <label for="VECR_OFFICEGST" class="">Office GST<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                </div>
                
                  
                <div class="form-row">   
              
         
              
			   <div class="col-md-4">
               <div class="md-form">
              
                  <input type="text" id="VECR_EMPANELDATE" name="VECR_EMPANELDATE"  maxlength="10" class="form-control form-control VECRMndtry IsNumberFields NoSpecialChar  ISDatefield  VECRDBfields ">
                    <label for="VECR_EMPANELDATE" class="">Empanel Date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>
  
            <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="VECR_CONTPERSON" name="VECR_CONTPERSON" class="form-control VECRMndtry VECRDBfields">
                    <label for="VECR_CONTPERSON" class="">Contact Person Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="VECR_LANDLINE" maxlength="10" name="VECR_LANDLINE" class="form-control IsNumberFields NoSpecialChar   VECRDBfields">
                    <label for="VECR_LANDLINE" class="">Landline<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				
           </div>     
                
         <div class="form-row">
         
            
               <div class="col-md-4">
                <div class="md-form">
                     <input type="text" id="VECR_MOBILE" maxlength="10" name="VECR_MOBILE" class="form-control VECRMndtry IsNumberFields NoSpecialChar IsMobileFields  VECRDBfields">
                    <label for="VECR_MOBILE" class="">Mobile<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
               <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="VECR_EMAIL" name="VECR_EMAIL" class="form-control IsEmailFields  VECRDBfields">
                    <label for="VECR_EMAIL" class="">E-Mail<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				
				<div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="VECR_RESIDPIN" maxlength="6" onchange="fnOnFocusOut(this);Pindetls(this,'BRCR_STATE','BRCR_CITY','BRCRH_STATECODE')"    name="VECR_RESIDPIN" class="form-control IsNumberFields IsPinFielde NoSpecialChar VECRDBfields">
                    <label for="VECR_RESIDPIN" class="">Residential Pin Code<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                </div>
                
             <div class="form-row">
             <div class=" col-md-8">
                 <div class="md-form">
				     <input type="text" id="VECR_RESIDADDR" name="VECR_RESIDADDR" class="form-control VECRMndtry VECRDBfields">
                     <label for="VECR_RESIDADDR" class="">Residential Address<span class="MndtryAstr">*</span></label>
                 </div>
             </div>
            
                <div class="col-md-4">
                <div class="md-form">
                     <input type="text" id="VECR_RESIDLANDM" name="VECR_RESIDLANDM" class="form-control  VECRDBfields">
                    <label for="VECR_RESIDLANDM" class="">Residential Landmark<span class="MndtryAstr"></span></label>
                  </div>
                </div>  
           
          </div>
          <div class="form-row">
            

            <div class="col-md-4">
                   <div class="md-form">
                     <input type="text" id="VECR_COMPANYNAME" name="VECR_COMPANYNAME" class="form-control  VECRDBfields">
                    <label for="VECR_COMPANYNAME" class="">Company Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>
   
          
            
               <div class="col-md-4">
              <div class="md-form">
                     <input type="text" id="VECR_CURRPROFE" name="VECR_CURRPROFE" class="form-control VECRMndtry VECRDBfields">
                    <label for="VECR_CURRPROFE" class="">Current Profession<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
				 <div class="col-md-4">
              <div class="md-form">
                     <input type="text" id="VECR_OFFLANDLINE" maxlength="10" name="VECR_OFFLANDLINE" class="form-control IsNumberFields NoSpecialChar    VECRDBfields">
                    <label for="VECR_OFFLANDLINE" class="">Official Landline<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                
                 </div>
           <div class="form-row">
                
            <div class="col-md-4">
              <div class="md-form">
                     <input type="text" id="VECR_OFFEMAILID" name="VECR_OFFEMAILID" class="form-control   IsEmailFields  VECRDBfields">
                    <label for="VECR_OFFEMAILID" class="">Official Email ID<span class="MndtryAstr"></span></label>
                  </div>
                </div>
          
            
            <div class="col-md-4">
              <div class="md-form">
                     <input type="text" id="VECR_OFFPINCODE" maxlength="6" onblur="fnOnFocusOut(this);Pindetls(this,'BRCR_STATE','BRCR_CITY','BRCRH_STATECODE')"   name="VECR_OFFPINCODE" class="form-control IsPinFielde IsNumberFields NoSpecialChar VECRDBfields">
                    <label for="VECR_OFFPINCODE" class="">Official Pincode<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				
				 <div class="col-md-4">
              <div class="md-form">
                     <input type="text" id="VECR_OFFLANDMARK" name="VECR_OFFLANDMARK" class="form-control  VECRDBfields">
                    <label for="VECR_OFFLANDMARK" class="">Official Landmark<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                
     </div>
          
          
           
           
           <div class="form-row">
              <div class="col-md-8">
                 <div class="md-form">
				    <input type="text" id="VECR_OFFADDRESS" name="VECR_OFFADDRESS" class="form-control VECRMndtry VECRDBfields">
                    <label for="VECR_OFFADDRESS" class="">Office Address<span class="MndtryAstr">*</span></label>
                 </div>
              </div>
			  
			  <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  VECRMndtry VECRDBfields" id="VECR_MAILINGPREF" name="VECR_MAILINGPREF">
                  	<option value="">Select</option>
  					<option value="Office Address">Office Address</option>
					<option value="Residential address">Residential address</option>
				</select>
				<label class="mdb-main-label BTxt9">Mailing Preference<span class="MndtryAstr">*</span></label>
             </div>
            </div>   
              

             </div>
          <div class="form-row">  
          
           <!--    <div class="col-md-4">
              <div class="md-form">
                     <input type="text" id="VECR_ADDRTYPE" name="VECR_ADDRTYPE" class="form-control  VECRDBfields">
                    <label for="VECR_ADDRTYPE" class="">Address Type<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
              
                <div class="col-md-4">
              <div class="md-form">
                     <input type="text" id="VECR_ADDRNUMBER" name="VECR_ADDRNUMBER" class="form-control   VECRDBfields">
				
                    <label for="VECR_ADDRNUMBER" class="">Address Number<span class="MndtryAstr">*</span></label>
                  </div>
                </div>-->
                <div class="col-md-4" style="display:none">
                   <div class="md-form">
				      <select class="mdb-select md-form colorful-select dropdown-primary  VECRDBfields" searchable="Search here.." id="VECR_PRIMBRANCH" name="VECR_PRIMBRANCH">
                  	  <option value="">Select</option>
				      </select>
				      <label class="mdb-main-label BTxt9">Primary Branch<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
				
				 <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  VECRMndtry VECRDBfields"  onchange="RCUSTATUS();"  id="VECR_RCUSTATUS" name="VECR_RCUSTATUS">
                  	<option value="">Select</option>
  					<option value="Need to Initiate">Need to Initiate</option>
  					<option value="Positive">Positive</option>
  					<option value="Negative">Negative</option>
					<option value="Pending">Pending</option>
				</select>
				<label class="mdb-main-label BTxt9">RCU Status<span class="MndtryAstr">*</span></label>
             </div>
            </div> 
              
                <div class="col-md-4">
              <div class="md-form">
                     <input type="text" id="VECR_RCUREMARKS" name="VECR_RCUREMARKS" class="form-control  VECRDBfields">
                    <label for="VECR_RCUREMARKS" class="">RCU Remarks<span class="MndtryAstr"></span></label>
                  </div>
                </div>
              <div class="col-md-4">
              <div class="md-form">
                     <input type="text" id="VECR_SAPCODE" name="VECR_SAPCODE" onchange="chksapcodeex()" class="form-control VECRMndtry VECRDBfields">
                    <label for="VECR_SAPCODE" class="">SAP Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                
           </div>
		   
		   <div class="form-row">
		   <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary   VECRDBfields" onchange="CHKBLOCKLIST();REASONCHANGE();"  id="VECR_BLOCKLIST" name="VECR_BLOCKLIST">
                  	<option value="">Select</option>
  					<option value="Yes">Yes</option>
  					<option value="No">No</option>
				</select>
				<label class="mdb-main-label BTxt9">Blacklist<span class="MndtryAstr"></span></label>
             </div>
            </div> 
			
			<div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary   VECRDBfields" onchange="REASONCHANGE();"  id="VECR_REASONCHANGE" name="VECR_REASONCHANGE">
                  	<option value="">Select</option>
  					<option value="Role Mapping">Role Mapping</option>
  					<option value="Branch Mapping">Branch Mapping</option>
					<option value="Hierarchy Change">Hierarchy Change</option>
					<option value="Others">Others</option>
				</select>
				<label class="mdb-main-label BTxt9">Reason for Change<span class="MndtryAstr"></span></label>
             </div>
            </div> 
			
           <div class="col-md-4">
                 <div class="md-form">
				    <input type="text" id="VECR_OTHERS" name="VECR_OTHERS" class="form-control  VECRDBfields">
                    <label for="VECR_OTHERS" class="">Others<span class="MndtryAstr"></span></label>
                 </div>
              </div>
			  
			  
			  </div>
         <div class="form-row">
        	<div class="col Btxt8">Branch Mapping</div>
          </div>
		  <div class="form-row">
               <div class="col-md-9">
               </div>
			    <div class="col-md-3">
                     <div class="HyperControls FltRight"> 
                         <a class="Btxt4 ADDBTN FltRight NEWDEPT"  href="#" onclick="GetVndUserMap();">+ Add Branch</a>
                     </div> 
				</div>
          </div>
		   <div class="card-headerBlack white-text">    
         <div class="row">       
         <div class="col-md-2 ">
         </div>
         <div class="col-md-5"> 
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTableVdrBr" name="SearchTableVdrBr" class="Ntxt3" title="">
         </div> 
         </div>                     
</div>
            <div class="form-row">
               <div class="col">
                    <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'TableVdrBr',{spname:'LSW_SGETFINLVDRBRGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#URCR_USRTYPE').val(),MnuId:$('#URCR_CATEGORY').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,4,5,6,7','VDRBRMAPMAIN');" id="BTNVDRBRMAPMAINGRD" name="BTNVDRBRMAPMAINGRD" />
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="TableVdrBr">
                    </table>
                </div>
            </div> 
                  
                  
           <div class="form-row">
        	<div class="col Btxt8">Employee Mapping</div>
          </div>
		  <div class="form-row">
               <div class="col-md-9">
               </div>
			    <div class="col-md-3">
                     <div class="HyperControls FltRight"> 
                         <a class="Btxt4 ADDBTN FltRight NEWDEPT"  href="#" onclick="GetUserMap();">+ Add Employee</a>
                     </div> 
				</div>
          </div>
		  
		  <div class="card-headerBlack white-text">    
         <div class="row">       
         <div class="col-md-2 ">
         </div>
         <div class="col-md-5"> 
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTable5" name="SearchTable5" class="Ntxt3" title="">
         </div> 
         </div>                     
</div>
            <div class="form-row">
               <div class="col">
                    <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table5',{spname:'LSW_SGETFINLVENDORBRGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','VENDORBRANHMAPMAIN');" id="BTNDIRBRMAPMAINGRD" name="BTNDIRBRMAPMAINGRD" />
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table5">
                    </table>
                </div>
            </div>  
           <div class="form-row">
        		<div class="col Btxt8">Bank Details</div>
        	</div>
          <div class="form-row ">
        <div class="col-md-9">
              </div>
                <div class="col-md-3">       
           
 <div class="HyperControls FltRight" > 
      <a onclick="AddPageMultiData('','','','VENDORBANK','VEBNDBfields')" class="Btxt4 ADDBTN FltRight" style="display:none" href="#">+ Add Bank Details</a>
     </div> 
     </div>
     </div>
     
 
     <div data-for="VENDORBANK" class="VENDORBANK"> 
      </div>
       <div class="DynamicPageGrid" data-val="PROPTXTHDR|Bank Details" id="VENDORBANK" style="display:none">
        <div data-row="" class="card-body px-lg-5 pt-0  DYNROW">
          <input type="text" id="VEBN_PRCSID" hidden="hidden" name="VEBN_PRCSID" class="form-control VEBNDBfields">
         <input type="text" id="VEBN_ACTIVITYID" hidden="hidden" name="VEBN_ACTIVITYID" class="form-control VEBNDBfields">
         <input type="text" id="VEBN_DTCREATED" hidden="hidden" name="VEBN_DTCREATED" class="form-control VEBNDBfields">
         <input type="text" id="VEBN_CREATEDBY" hidden="hidden" name="VEBN_CREATEDBY" class="form-control VEBNDBfields">
         <input type="text" id="VEBN_DTMODIFIED" hidden="hidden" name="VEBN_DTMODIFIED" class="form-control VEBNDBfields">
         <input type="text" id="VEBN_MODIFIEDBY" hidden="hidden" name="VEBN_MODIFIEDBY" class="form-control VEBNDBfields">
          
           <input type="text" id="VEBN_USERNAME" hidden="hidden" name="VEBN_USERNAME" class="form-control VEBNDBfields"> 
		   <input type="text" id="VEBN_UNIQID" hidden="hidden" name="VEBN_UNIQID" class="form-control VEBNDBfields"> 
          <!-- LSW_TVENDORBANKDETAILS -->
		  
		  
          
              <div class=" col-md-12" style="display:none">
                 <div class="md-form">
                    <span id="PROPTXTHDR" class="Btxt10"></span>
                  </div>
              </div>
                  <div class="form-row" style="display:none">
                                   <div class="col ">
                                    <div class="FltRight ">
                                         Delete Bank Details
                                      <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px"  class="  DELETEVENBANK"/>
                                     </div>    
                                 </div>     
                                </div> 
       <div class="form-row">
            <!--   <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_USERNAME" maxlength="25" name="VEBN_USERNAME" class="form-control NoSpecialChar VEBNDBfields">
                    <label for="VEBN_USERNAME" class="">User Name<span class="MndtryAstr"></span></label>
                  </div>
                 </div>-->
                 
                  <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_IFSC" maxlength="25" name="VEBN_IFSC" onblur="Ifscdetls(this,'VEBN_BNKNAME','VEBN_BNKBRANCH')"   class="BANKMndtry  form-control IsIFSCFields  NoSpecialChar  NoSpecialChar VEBNDBfields">
                    <label for="VEBN_IFSC" class="">IFSC Code<span class="MndtryAstr">*</span></label>
                  </div>
                 </div>
                 
                  <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_BNKNAME" maxlength="25" disabled name="VEBN_BNKNAME" class="BANKMndtry  form-control NoSpecialChar VEBNDBfields">
                    <label for="VEBN_BNKNAME" class="">Bank Name<span class="MndtryAstr">*</span></label>
                  </div>
                 </div>
                 
              <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_ACCTNO" maxlength="25" name="VEBN_ACCTNO" onblur="ACCNOValida('VEBN_ACCTNO'+$(this).closest('.DYNROW').attr('data-row'))"   class="BANKMndtry  form-control NoSpecialChar IsNumberFields VEBNDBfields">
                    <label for="VEBN_ACCTNO" class="">Account Number<span class="MndtryAstr">*</span></label>
                  </div>
                 </div>
                 
                 
          </div>
          
          
           <div class="form-row">
               <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_ACCTNAME" maxlength="25" name="VEBN_ACCTNAME" class="BANKMndtry    form-control NoSpecialChar VEBNDBfields">
                    <label for="VEBN_ACCTNAME" class="">Account Name<span class="MndtryAstr">*</span></label>
                  </div>
                 </div>
                 
                   
               <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_BNKBRANCH" maxlength="25" disabled name="VEBN_BNKBRANCH" class="BANKMndtry form-control NoSpecialChar VEBNDBfields">
                    <label for="VEBN_BNKBRANCH" class="">Bank Branch Name<span class="MndtryAstr">*</span></label>
                  </div>
                 </div>
                 
                 <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_MICRCODE" maxlength="9" name="VEBN_MICRCODE" class="form-control NoSpecialChar VEBNDBfields">
                    <label for="VEBN_MICRCODE" class="">Micr Code<span class="MndtryAstr"></span></label>
                  </div>
                 </div>

             
          </div>
          
          
             <div class="form-row">
               
 
                 
                   <!-- <div class=" col-md-4">
					 <div class="md-form">
                    <input type="text" id="VEBN_PAYMENTMODE" maxlength="25" name="VEBN_PAYMENTMODE" class="BANKMndtry  form-control NoSpecialChar VEBNDBfields">
                    <label for="VEBN_PAYMENTMODE" class="">Payment mode<span class="MndtryAstr">*</span></label>
                  </div>
                 </div>-->
				 
				 
				 <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  BANKMndtry VEBNDBfields" id="VEBN_PAYMENTMODE" name="VEBN_PAYMENTMODE">
                  	<option value="">Select</option>
  					<option value="DD">DD</option>
  					<option value="Cheque">Cheque</option>
					<option value="NEFT">NEFT</option>
					<option value="RTGS">RTGS</option>
					<option value="IMPS">IMPS</option>
				</select>
				<label class="mdb-main-label BTxt9">Payment mode<span class="MndtryAstr">*</span></label>
             </div>
            </div> 

          </div>
          
          
           </div>    
      </div> 
        
 <div class="HyperControls">
         <a type="button" class="Btxt4 FltRight ADDBTN" id="NewlyAddedDoc" onclick="ChecklistDropdownvalue();" data-toggle="modal" data-target="#ADDKYCDocModal" href="#">+ Add Document</a>
         
      </div>

      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
               </br>
               <div class="form-row">
                  <div class="col Btxt3">Documents</div>
               </div>
               </br>
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_TGETDOCUMTEMPLE',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','VENDDOCUPLOAD');" id="BTNKYCOthers" name="BTNKYCOthers" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
                     </table>
                  </div>
               </div>
            </form>
         </div>
      </div>


<!--ADDITION ROLE-->	
      <div class="HyperControls">
         <a type="button" class="Btxt4 FltRight ADDBTN" id="NewlyAddedROLE" onclick="ADDTIONALDROPDOWN();" data-toggle="modal" data-target="#ADDROLEModal" href="#">+ Add Additional Role</a>
         
      </div>

      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
               </br>
               <div class="form-row">
                  <div class="col Btxt3">Addtitional Role</div>
               </div>
               </br>
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_TGETDOCUMTEMPLE',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','VENDDOCUPLOAD');" id="BTNKYCOthers" name="BTNKYCOthers" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table4">
                     </table>
                  </div>
               </div>
            </form>
         </div>
      </div>	



<!--ADDITION ROLE-->	
      <div class="HyperControls">
         <a type="button" class="Btxt4 FltRight ADDBTN" id="NewlyAddedGROUP" onclick="VENDORGROUPMAP();" data-toggle="modal" data-target="#ADDVALGROUPModal" href="#">+ Add Valuation</a>
         
      </div>

      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
               </br>
               <div class="form-row">
                  <div class="col Btxt3">Valuation sub group</div>
               </div>
               </br>
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table51',{spname:'LSW_TGETDOCUMTEMPLE',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','VENDDOCUPLOAD');" id="BTNKYCOthers" name="BTNKYCOthers" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table51">
                     </table>
                  </div>
               </div>
            </form>
         </div>
      </div>





	  
           
               <div class="form-row">
                   <div class="col d-flex justify-content-center">
					 <button type="button" id="Submit" data-aria="LSW_TVENDORCREATION|VECR" class="btn btn-Syel waves-effect waves-light FormSave" style="display:none">Submit</button>
                     <button type="button" id="Approve"  data-aria="LSW_TVENDORCREATION|VECR" class="btn btn-Syel waves-effect waves-light FormSave" style="display:none">Approve</button>
					 <button type="button" id="Reject"  data-aria="LSW_TVENDORCREATION|VECR" class="btn btn-Syel waves-effect waves-light FormSave" style="display:none">Reject</button>
                     <button type="button" id="SendBack" data-aria="LSW_TVENDORCREATION|VECR" class="btn btn-Syel waves-effect waves-light FormSave" style="display:none">Send Back</b
                  
                  </div>
              </div>
     
          </form>
        </div>
     </div>
      </div>   
      </div>
    </div>
  </div>  
    
    
    
    <a type="button" id="UserModalPop" class="btn btn-floating btn-large red waves-effect waves-light" style="display:none" data-toggle="modal" data-target="#UserModal">
 <i class="fa fa-plus" style="display: none;"></i> </a>  
<div class="modal fade" id="UserModal" tabindex="-1" role="dialog" aria-labelledby="UserModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1000px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">Employee Mapping</div> 
         <a href="#"><img id="UserModalClose" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form>
        	</br>
        	</br>
          <input type="text" id="VEUR_ROLEID"  name="VEUR_ROLEID" hidden="hidden"  class="form-control VEURDBfields" value="">
			<input type="text" id="VEUR_UNIQID"  name="VEUR_UNIQID" hidden="hidden"  class="form-control VEURDBfields" value="">
     	
           <input type="text" id="VEUR_ROLENAME"  maxlength="25" hidden="hidden" class="form-control VEURDBfields" name="UCBM_ROLENAME">
     <!--  	<div class="form-row">
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="UCBM_ROLENAME"  maxlength="25" disabled class="form-control UCBMDBfields" name="UCBM_ROLENAME">
                    <label for="UCBM_ROLENAME" class="">Vendor Name<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
          </div> -->
		  <div class="card-headerBlack white-text">    
         <div class="row">       
         <div class="col-md-2 ">
         </div>
         <div class="col-md-5"> 
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTable2" name="SearchTable2" class="Ntxt3" title="">
         </div> 
         </div>                     
</div>
          <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table2',{spname:'LSW_SGETVENBRMAPDETL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','VENDORBRANHMAP');" id="BTNUSRBRGRD" name="BTNUSRBRGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
             </table>
          </div>
        </div> 
      <!-- grid  show -->
    <!--Main layout-->
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="UserModalSmt" onclick="" class="btn btn-yel Btxt2">Confirm</button>
      </div>
    </div>
  </div>
  </div> 
   
   
    
      <div class="modal fade" id="ADDKYCDocModal" tabindex="-1" role="dialog" aria-labelledby="ADDKYCDocModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" style="max-width:900px" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <div class="Btxt10">ADD DOCUMENTS</div>
               <a href="#">  <img id="ADDKYCDOCCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
            </div>
            <div class="modal-body">
               <div class="">
                  <!-- Card body -->
                  <div class="">
                     <form>
                        <div class="form-row">
                          <div class="col">
                              <div class="md-form">
                                 <div class="" id="">
                                    <input type="text" id="KYCD_DOCTYPE" name="KYCD_DOCTYPE" data-aria="2" class="form-control  KYCDMndtry PGToGRID">
                                    <label for="KYCD_DOCTYPE" class="">Document Type <span class="MndtryAstr">*</span></label>
                                 </div>
                              </div>
                           </div>
                           <div class="col">
                              <div class="md-form">
                                 <div class="" id="">
                                    <input type="text" id="KYCD_DOCNAME" name="KYCD_DOCNAME" data-aria="2" class="form-control  KYCDMndtry PGToGRID">
                                    <label for="KYCD_DOCNAME" class="">Document Name <span class="MndtryAstr">*</span></label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="form-row">

                           <div class="col">
                              <div class="row" >
                                 <!--First column-->
                                 <div class="col-md-8  Formcol-mdLR">
                                    <div class="md-form">
                                       <table>
                                          <tr>
                                             <td>
                                                <div id="KYCD_DOCATTACHMENTUPLOAD"  class="file-field DDU">
                                                   <a class="">
                                                   <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                                   <input type="file"  name="datafile" onchange="DocFldUpldHndlr(KYCD_DOCATTACHMENT,'KYCD_DOCATTACHMENT')" class="KYCD_DOCATTACHMENT"  >
                                                   </a>
                                                   <input type="text" id="KYCD_DOCATTACHMENT" hidden="hidden" data-Validate="KYCD_DOCATTACHMENT"  name="KYCD_DOCATTACHMENT" class="form-control File KYCDDBfields">
                                                   <span class="name">Upload Document</span>
                                                </div>
                                             </td>
                                          </tr>
                                       </table>
                                    </div>
                                 </div>
                                 <div class="col-md-4 DDV">
                                    <div class="md-form Formcol-mdLR TxtCenter">
                                       <div class="KYCD_DOCATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile(KYCD_DOCATTACHMENT);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld1('KYCD_DOCATTACHMENT')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                         
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div class="modal-footer align-middle">
               <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
               <button type="button" id="AddKYCDoc" class="btn btn-yel Btxt2">Confirm</button>
            </div>
         </div>
      </div>
   </div>
   
   
   
   <div class="modal fade" id="ADDROLEModal" tabindex="-1" role="dialog" aria-labelledby="ADDROLEModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" style="max-width:900px" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <div class="Btxt10">ADDTIONAL ROLE</div>
               <a href="#">  <img id="ADDROLECLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
            </div>
            <div class="modal-body">
               <div class="">
                  <!-- Card body -->
                  <div class="">
                     <form>
                        <div class="form-row">
                          <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary"    id="VECR_ADDTIONALROLE" name="VECR_ADDTIONALROLE">
				</select>
				<label class="mdb-main-label BTxt9">Additional Role<span class="MndtryAstr">*</span></label>
             </div>
            </div>
                        </div>

                     </form>
                  </div>
               </div>
            </div>
            <div class="modal-footer align-middle">
               <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
               <button type="button" id="AddROLE" class="btn btn-yel Btxt2">Confirm</button>
            </div>
         </div>
      </div>
   </div>
   
   
   
   
     <div class="modal fade" id="ADDVALGROUPModal" tabindex="-1" role="dialog" aria-labelledby="ADDVALGROUPModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" style="max-width:900px" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <div class="Btxt10">Valuation Group Mapping</div>
               <a href="#">  <img id="ADDVALGROUPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
            </div>
            <div class="modal-body">
               <div class="">
                  <!-- Card body -->
                  <div class="">
                     <form>
                        <div class="form-row">
                          <div class="col-md-4">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary"    id="VECR_VALUATIONGROUP" name="VECR_VALUATIONGROUP">
				</select>
				<label class="mdb-main-label BTxt9">Valuation Group <span class="MndtryAstr">*</span></label>
             </div>
            </div>
                        </div>

                     </form>
                  </div>
               </div>
            </div>
            <div class="modal-footer align-middle">
               <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
               <button type="button" id="AddVALUGROUP" class="btn btn-yel Btxt2">Confirm</button>
            </div>
         </div>
      </div>
   </div>
   
   
   
   
   
   
   
    <table style="display:none" id="GridTable3">
      <thead>
      	<th>ACTION</th>
         <th>VEDO_TYPE</th>
         <th>VEDO_NAME</th>
         <th>VEDO_UPLOAD</th>
		 <th>VEDO_USERNAME</th>
		 <th>VEDO_DOCID</th>
		 <th>VEDO_UNIQID</th>


      </thead>
   </table>
   
   <table style="display:none" id="GridTable4">
      <thead>
      	<th>ACTION</th>
         <th>VEAD_ROLE</th>
		 <th>VEAD_USERNAME</th>
		 <th>VEAD_UNIQID</th>


      </thead>
   </table>
   
    <table style="display:none" id="GridTable51">
      <thead>
      	<th>ACTION</th>
         <th>VETE_ROLE</th>
		 <th>VETE_USERNAME</th>
		 <th>VETE_UNIQID</th>

</thead>
   </table>
   
   
 <table style="display:none" id="GridTable2">
   <thead>
<th>VEUR_VENDORUSERID</th>
<th>VEUR_USERNAME</th>
<th>VEUR_NAME</th>
<!--<th>UPFD_PRCSID</th>
<th>UPFD_ACTIVITYID</th>
<th>UPFD_CREATEDBY</th>
<th>UPFD_DTCREATED</th>
<th>UPFD_MODIFIEDBY</th>
<th>UPFD_DTMODIFIED</th>-->
   </thead> 
    </table>     
    
	<a type="button" id="VendorBrModalPop" class="btn btn-floating btn-large red waves-effect waves-light" style="display:none" data-toggle="modal" data-target="#VendorBrModal">
 <i class="fa fa-plus" style="display: none;"></i> </a>  
<div class="modal fade" id="VendorBrModal" tabindex="-1" role="dialog" aria-labelledby="VendorBrModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1000px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">Branch Mapping</div> 
         <a href="#"><img id="VendorBrModalClose" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form>
        	</br>
        	</br>
        	<input type="text" id="VCBM_ROLEID"  name="VCBM_ROLEID" hidden="hidden"  class="form-control VCBMDBfields" value="">
			<input type="text" id="VCBM_UNIQID"  name="VCBM_UNIQID" hidden="hidden"  class="form-control VCBMDBfields" value="">
			
			<input type="text" id="BRMAP"  name="BRMAP" hidden="hidden"  class="form-control" value="">
			<input type="text" id="CATEGORY"  name="CATEGORY" hidden="hidden"  class="form-control" value="">
        	<div class="form-row">
               <div class="col-md-4" style="display:none">
                  <div class="md-form">
                    <input type="text" id="VCBM_ROLENAME"  maxlength="25" disabled class="form-control VCBMDBfields" name="VCBM_ROLENAME">
                    <label for="VCBM_ROLENAME" class="">User Name<span class="MndtryAstr"></span></label>
                  </div>
               </div> 
               </div>
			    <div class="card-headerBlack white-text">    
         <div class="row">       
         <div class="col-md-2 ">
         </div>
         <div class="col-md-5"> 
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTableBr" name="SearchTableBr" class="Ntxt3" title="">
         </div> 
         </div>                     
</div>
             <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'TableBr',{spname:'LSW_SGETVDRBRMAPDETL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1,2','VDRBRMAP');" id="BTNVDRBRGRD" name="BTNVDRBRGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="TableBr">
             </table>
          </div>
        </div> 
      <!-- grid  show -->
    <!--Main layout-->
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="VendorBrModalSmt" onclick="" class="btn btn-yel Btxt2">Confirm</button>
      </div>
    </div>
  </div>
  </div> 
    
    <script type="text/javascript" src="ThemeproLO/Commonpage/VendorCreation/LoadSubmit.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/Commonpage/VendorCreation/Validation.js${DMY13}"></script>

    
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>  

                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           