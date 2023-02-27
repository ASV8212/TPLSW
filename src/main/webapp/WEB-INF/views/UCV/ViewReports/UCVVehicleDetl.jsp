</br>
<div class="">				  
<div class="admin-panel">
<a type="button" id="GoBack" class="Btxt4 GoBack" href="#">&lt;- BACK</a>
 <div class="Card CardNS">
    <!-- Card header -->
    <div class="card-body px-lg-5 pt-0">
        <form>
        <input type="text" id="UCVD_PRCSID" hidden="hidden" name="UCVD_PRCSID" class="form-control UCVDDBfields">
        <input type="text" id="UCVD_ACTIVITYID" hidden="hidden" name="UCVD_ACTIVITYID" class="form-control UCVDDBfields">
        <input type="text" id="UCVD_CREATEDBY" hidden="hidden" name="UCVD_CREATEDBY" class="form-control UCVDDBfields">
        <input type="text" id="UCVD_DTCREATED" hidden="hidden" name="UCVD_DTCREATED" class="form-control UCVDDBfields">
        <input type="text" id="UCVD_MODIFIEDBY" hidden="hidden" name="UCVD_MODIFIEDBY" class="form-control UCVDDBfields">
        <input type="text" id="UCVD_DTMODIFIED" hidden="hidden" name="UCVD_DTMODIFIED" class="form-control UCVDDBfields">
        <input type="text" id="UCVD_PROPNO" name="UCVD_PROPNO" hidden="hidden" class="form-control UCVDDBfields">
		<input type="text" id="UCVD_MACHINERYDOC" name="UCVD_MACHINERYDOC" hidden="hidden" class="form-control UCVDDBfields">
		<input type="text" id="UCVD_VEHICFCDOC" name="UCVD_VEHICFCDOC" hidden="hidden" class="form-control UCVDDBfields">
		<input type="text" id="UCVD_VEHICRCDOC" name="UCVD_VEHICRCDOC" hidden="hidden" class="form-control UCVDDBfields">

        <input type="text" id="UCVD_ALTERPROPNO" hidden="hidden" name="UCVD_ALTERPROPNO" class="form-control UCVDDBfields">   

           </br>
		<div class="form-row">   
			<div class="col-md-4"style="display:none;">
				<div class="md-form">
                  	<input type="text" id="UCVD_PROPTYPE" name="UCVD_PROPTYPE"  class="form-control UCVDDBfields">
                    <label for="UCVD_PROPTYPE" class="">Property Type</label>
                </div>
			</div>		   
		</div>   
		   
<div class ="vehicles">		   
           <div class="form-row">
        		<div class="col Btxt10">Vehicle Details</div>
        	</div>
           <div class="form-row">
                <div class=" col-md-4">
                  <div class="md-form">
                      <select class="mdb-select md-form colorful-select dropdown-primary ADDPro UCVDMndtry UCVDDBfields vehiclmndry" onchange="GetBodyTy()" id="UCVD_VEHICLASS" name="UCVD_VEHICLASS">
                  	      <option value="">Select</option>	
				      </select>
				    <label class="mdb-main-label BTxt9">Vehicle Class<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  	<div class="md-form">
                     <select class="mdb-select md-form colorful-select dropdown-primary ADDPro UCVDMndtry UCVDDBfields vehiclmndry" onchange="GetManufacture()"  id="UCVD_BODYTYPE" name="UCVD_BODYTYPE">
                  	  <option value="">Select</option>	
				     </select>
				      <label class="mdb-main-label BTxt9">Body Type<span class="MndtryAstr">*</span></label>
                  </div> 
                </div>
				<div class="col-md-4">
                   <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary ADDPro UCVDDBfields UCVDMndtry VEMVAL vehile vehiclmndry" onchange="GetModel()"  id="UCVD_MANUFATURE" name="UCVD_MANUFATURE">
                  	  <option value="">Select</option>
				    </select>
				     <label class="mdb-main-label BTxt9" >Manufactured<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div>    
        <div class="form-row ">
             <div class="col-md-4">
				<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary ADDPro UCVDMndtry UCVDDBfields VEMVAL  vehile vehiclmndry" onchange="GetGrade();" id="UCVD_MODEL" name="UCVD_MODEL">
                  	   <option value="">Select</option>
				  </select>
				   <label class="mdb-main-label BTxt9" >Model<span class="MndtryAstr">*</span></label>
                </div>				  
			</div>
            <div class="col-md-4">
                 <div class="md-form">
                  	<select class="mdb-select md-form colorful-select dropdown-primary ADDPro UCVDDBfields UCVDMndtry VEMVAL vehile vehiclmndry" onchange="" id="UCVD_ASSET" name="UCVD_ASSET">
					   <option value="">Select</option>
					</select>
					<label class="mdb-main-label BTxt9" >Asset (Make Model)<span class="MndtryAstr">*</span></label>
			    </div>
            </div>
			<div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="UCVD_MANUFDT" name="UCVD_MANUFDT" onblur=""  maxlength="10" class="form-control UCVDDBfields VEMVAL ADDPro UCVDMndtry IsNumberFields NoSpecialChar INDM ISDatefield  ISFutureDateFields vehile vehiclmndry">
                    <label for="UCVD_MANUFDT" class="ADDACTVEC">Manufactured date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
           </div>
        </div> 
        <div class="form-row ">
            <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_ASSETDECP" name="UCVD_ASSETDECP"  class="form-control UCVDDBfields ">
                    <label for="UCVD_ASSETDECP" class="">Asset Description</label>
                </div>
			</div>	
            <div class="col-md-4">
				<div class="md-form">
                  	<input type="text"  id="UCVD_ASSETCOST" name="UCVD_ASSETCOST"  class="form-control UCVDDBfields IsCURCommaFields IsNumberFields">
                    <label for="UCVD_ASSETCOST" class="">Asset Cost  </label>
                </div>
			</div>	
        </div>
		
		<div class="form-row">
	<div class=" col-md-4">
	   <div class="md-form">				  
<input type="text" id="UCVD_VEHICRCDOC" data-val="UAM document"  hidden="hidden" data-Validate="UCVD_VEHICRCDOC"  name="UCVD_VEHICRCDOC" class="form-control voter File UCVDDBfields">
<div class="UCVD_VEHICRCDOC" style="display">  
<img src="ThemeproLO/Common/Images/Eyeview.png" title="VEHICLE RC"  class="rounded" onclick="GrdDocDwnld('UCVD_VEHICRCDOC')" alt="Cinque Terre" width="35" height="25"><span>Uploaded RC Document</div>
</div> 
</div> 
     <div class=" col-md-4">
	   <div class="md-form">				  
<input type="text" id="UCVD_VEHICFCDOC" data-val="UAM document"  hidden="hidden" data-Validate="UCVD_VEHICFCDOC"  name="UCVD_VEHICFCDOC" class="form-control voter File UCVDDBfields">
<div class="UCVD_VEHICFCDOC" style="display">  
<img src="ThemeproLO/Common/Images/Eyeview.png" title="VEHICLE FC"  class="rounded" onclick="GrdDocDwnld('UCVD_VEHICFCDOC')" alt="Cinque Terre" width="35" height="25"><span>Uploaded FC Document</div>
</div>
</div> 
</div> 
		
		
		
		<div class="form-row">
        		<div class="col Btxt10">Registration Details</div>
        </div>
        <div class="form-row ">
            <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_ENGINNO" name="UCVD_ENGINNO"  class="form-control UCVDDBfields UCVDMndtry  NoSpecialChar vehiclmndry">
                    <label for="UCVD_ENGINNO" class="">Enigine No<span class="MndtryAstr">*</span> </label>
                </div> 
			</div>	
			<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_CHASISNO" name="UCVD_CHASISNO"  class="form-control UCVDDBfields UCVDMndtry NoSpecialChar vehiclmndry">
                    <label for="UCVD_CHASISNO" class="">Chasis No <span class="MndtryAstr">*</span> </label>
                </div>
	 	    </div>	
            <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_REGNO" name="UCVD_REGNO"  class="form-control UCVDMndtry UCVDDBfields NoSpecialChar vehiclmndry">
                    <label for="UCVD_REGNO" class="">Reg No <span class="MndtryAstr">*</span> </label>
                </div>
			</div>
        </div>  
        <div class="form-row">
           <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_REGOWNNAME" name="UCVD_REGOWNNAME"  class="form-control UCVDDBfields UCVDMndtry IsAlphaFields NoSpecialChar vehiclmndry ">
                    <label for="UCVD_REGOWNNAME" class="">Registered Owner Name<span class="MndtryAstr">*</span> </label>
                </div> 
			</div>	
			<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_PROPNAME" name="UCVD_PROPNAME"  class="form-control UCVDDBfields UCVDMndtry IsAlphaFields NoSpecialChar vehiclmndry">
                    <label for="UCVD_PROPNAME" class="">Proposer Name<span class="MndtryAstr">*</span> </label>
                </div>
	 	    </div>	
            <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_HYPODETL" name="UCVD_HYPODETL"  class="form-control UCVDDBfields UCVDMndtry NoSpecialChar vehiclmndry">
                    <label for="UCVD_HYPODETL" class="">Hypothecation Details<span class="MndtryAstr">*</span> </label>
                </div>
			</div>     
        </div>
		 <div class="form-row">
           <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_ODOMETRED" name="UCVD_ODOMETRED"  class="form-control UCVDDBfields UCVDMndtry IsNumberFields NoSpecialChar vehiclmndry">
                    <label for="UCVD_ODOMETRED" class="">ODO Meter Reading<span class="MndtryAstr">*</span> </label>
                </div> 
			</div>	
			<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_DATEOFREG" name="UCVD_DATEOFREG"  class="form-control UCVDDBfields  UCVDMndtry IsNumberFields ISDatefield NoSpecialChar vehiclmndry">
                    <label for="UCVD_DATEOFREG" class="">Date of Registration<span class="MndtryAstr">*</span> </label>
					<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                </div>
	 	    </div>	
            <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_FCVALID" name="UCVD_FCVALID" onchange="Datecheck('UCVD_DATEOFREG','UCVD_FCVALID','FC validity Date should be greater than Date of registration');" class="form-control UCVDDBfields  IsNumberFields ISDatefield  NoSpecialChar ">
                    <label for="UCVD_FCVALID" class="">FC Validitity<span class="MndtryAstr"></span> </label>
					<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                </div>
			</div>     
        </div>
		 <div class="form-row">
           <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_TAXVALID" name="UCVD_TAXVALID" onchange="Datecheck('UCVD_DATEOFREG','UCVD_TAXVALID','Tax validity Date should be greater than Date of registration');" class="form-control UCVDDBfields  IsNumberFields ISDatefield  NoSpecialChar ">
                    <label for="UCVD_TAXVALID" class="">Tax Validitity<span class="MndtryAstr"></span> </label>
					<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                </div> 
			</div>	
			<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_PERMVALID" name="UCVD_PERMVALID" onchange="Datecheck('UCVD_DATEOFREG','UCVD_PERMVALID','Permit validity Date should be greater than Date of registration');" class="form-control UCVDDBfields  IsNumberFields ISDatefield  NoSpecialChar ">
                    <label for="UCVD_PERMVALID" class="">Permit Validitity<span class="MndtryAstr"></span> </label>
					<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                </div>
	 	    </div>	    
        </div>
           <div class="form-row">
        		<div class="col Btxt10">Insurance Details</div>
        	</div> 
			<div class="form-row">
           <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_COMNAME" name="UCVD_COMNAME"  class="form-control UCVDDBfields IsAlphaFields NoSpecialChar ">
                    <label for="UCVD_COMNAME" class="">Name of the Company<span class="MndtryAstr"></span> </label>
                </div> 
			</div>	
			<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_POLICYNUM" name="UCVD_POLICYNUM"  class="form-control UCVDDBfields NoSpecialChar ">
                    <label for="UCVD_POLICYNUM" class="">Policy Number<span class="MndtryAstr"></span> </label>
                </div>
	 	    </div>	
            <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_POLICYISSUEDT" name="UCVD_POLICYISSUEDT"  class="form-control  UCVDDBfields IsNumberFields ISDatefield  NoSpecialChar ">
                    <label for="UCVD_POLICYISSUEDT" class="">Policy Issued Date<span class="MndtryAstr"></span> </label>
					<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                </div>
			</div>     
        </div>
		 <div class="form-row">
           <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_PERIODINSFROM" name="UCVD_PERIODINSFROM" onchange="Datecheck('UCVD_POLICYISSUEDT','UCVD_PERIODINSFROM','Period of Insurance From Date should be greater than Policy Issued Date');" class="form-control UCVDDBfields IsNumberFields ISDatefield  NoSpecialChar  ">
                    <label for="UCVD_PERIODINSFROM" class="">Period of Insurance From<span class="MndtryAstr"></span> </label>
					<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                </div> 
			</div>	
			<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_PERIODINSTO" name="UCVD_PERIODINSTO" onchange="Datecheck('UCVD_POLICYISSUEDT','UCVD_PERIODINSTO','Period of Insurance To Date should be greater than Policy Issued Date');" class="form-control  UCVDDBfields IsNumberFields ISDatefield  NoSpecialChar ">
                    <label for="UCVD_PERIODINSTO" class="">Period of Insurance To<span class="MndtryAstr"></span> </label>
					<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                </div>
	 	    </div>	 
            <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_PERIMPAID" name="UCVD_PERIMPAID"  class="form-control IsCURCommaFields  IsNumberFields  UCVDDBfields NoSpecialChar ">
                    <label for="UCVD_PERIMPAID" class="">Premium Paid<span class="MndtryAstr"></span> </label>
                </div>
	 	    </div>				
        </div>
		<div class="form-row">
           <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_IDV" name="UCVD_IDV"  class="form-control UCVDDBfields  IsCURCommaFields IsNumberFields NoSpecialChar ">
                    <label for="UCVD_IDV" class="">IDV<span class="MndtryAstr"></span> </label>
                </div> 
			</div>	
	    </div>
        <div class="form-row">
           <div class="col Btxt10">Others</div>
       </div> 	
		<div class="form-row">
           <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_ACCIDENTS" name="UCVD_ACCIDENTS"  class="form-control UCVDDBfields UCVDMndtry NoSpecialChar vehiclmndry">
                    <label for="UCVD_ACCIDENTS" class="">Accidents if Any<span class="MndtryAstr">*</span> </label>
                </div> 
			</div>	
			<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_ESTIMATE" name="UCVD_ESTIMATE"  class="form-control IsNumberFields  UCVDDBfields NoSpecialChar ">
                    <label for="UCVD_ESTIMATE" class="">Estimated Further life cycle of Vehicle<span class="MndtryAstr"></span> </label>
                </div>
	 	    </div>	 
            <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_OVERALLCONDI" name="UCVD_OVERALLCONDI"  class="form-control UCVDDBfields UCVDMndtry NoSpecialChar vehiclmndry">
                    <label for="UCVD_OVERALLCONDI" class="">Over all Condition of the Vehicle<span class="MndtryAstr">*</span> </label>
                </div>
	 	    </div>				
        </div>
        <div class="form-row">
           <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_CHASSIS" name="UCVD_CHASSIS"  class="form-control UCVDDBfields UCVDMndtry NoSpecialChar vehiclmndry">
                    <label for="UCVD_CHASSIS" class="">Chassis re-punched In any<span class="MndtryAstr">*</span> </label>
                </div> 
			</div>	
			<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_MARKETVALUE" name="UCVD_MARKETVALUE"  class="form-control UCVDDBfields IsCURCommaFields UCVDMndtry IsNumberFields NoSpecialChar vehiclmndry">
                    <label for="UCVD_MARKETVALUE" class="">Market Value of vehicle as on date of Inspection<span class="MndtryAstr">*</span> </label>
                </div>
	 	    </div>	 
            <div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_DATEOFINS" name="UCVD_DATEOFINS" onchange="Datecheckinsp('','UCVD_DATEOFINS');" class="form-control UCVDDBfields UCVDMndtry ISDatefield NoSpecialChar vehiclmndry">
                    <label for="UCVD_DATEOFINS" class="">Date of Inspection<span class="MndtryAstr">*</span> </label>
					<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                </div>
	 	    </div>				
        </div>		
		 <div class="form-row">
			<div class="col-md-4">
				<div class="md-form">
                  	<input type="text" id="UCVD_LOCAVALU" name="UCVD_LOCAVALU"  class="form-control IsAlphaFields UCVDMndtry UCVDDBfields NoSpecialChar vehiclmndry">
                    <label for="UCVD_LOCAVALU" class="">Location Valuation<span class="MndtryAstr">*</span> </label>
                </div>
	 	    </div>	
				<div class="col-md-4">
          <label class="">Upload Report<span class="MndtryAstr">*</span></label>
          <div class="md-form">
     <div>
    <table>
    <tr>
     <td>
       <div id="UCVD_ATTACHMENTUPLOAD"  class="file-field">
         <a class=""> 
            <i class="fa fa-plus imgAdd" aria-hidden=""></i>
            <input type="file"  name="datafile" onchange="DocFldUpldHndlr(UCVD_ATTACHMENT,'UCVD_ATTACHMENT','Voter ID')" class="UCVD_ATTACHMENT"  >
          </a> 
           <input type="text" id="UCVD_ATTACHMENT" hidden="hidden" data-Validate="UCVD_ATTACHMENT"  name="UCVD_ATTACHMENT" class="form-control File UCVDMndtry UCVDDBfields">
           <span class="name">Click Here to Upload</span>
      </div>
    </td>
    </tr>
   </table>
  </div> 
    <div class="UCVD_ATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(UCVD_ATTACHMENT);" title="UPLOAD"  class="rounded Reuplod" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('UCVD_ATTACHMENT')" alt="Cinque Terre" width="35" height="25"> </div> 
      </div>      
        </div> 
 		</div>
</div>

<div class ="Machinery">	
<div class="form-row">
    <div class="col Btxt10">Machinery Details</div>
</div>
<div class="form-row">
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_NAMEMANUCOMP" name="UCVD_NAMEMANUCOMP"  class="form-control UCVDDBfields UCVDMndtry machinmndry">
            <label for="UCVD_NAMEMANUCOMP" class="">Name of Manufactoring Company<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_MODELNO" name="UCVD_MODELNO"  class="form-control UCVDDBfields UCVDMndtry  NoSpecialChar machinmndry">
            <label for="UCVD_MODELNO" class="">Model No<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_ASSETDESCRP" name="UCVD_ASSETDESCRP"  class="form-control UCVDDBfields UCVDMndtry machinmndry">
            <label for="UCVD_ASSETDESCRP" class="">Description of the Asset<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
</div>


<div class="form-row">
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_NAMESUPP" name="UCVD_NAMESUPP"  class="form-control UCVDDBfields UCVDMndtry machinmndry">
            <label for="UCVD_NAMESUPP" class="">Name of the Supplier<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_ORGIPRICE" name="UCVD_ORGIPRICE"  class="form-control UCVDDBfields UCVDMndtry  NoSpecialChar IsCURCommaFields machinmndry">
            <label for="UCVD_ORGIPRICE" class="">Original Price<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_QUANT" name="UCVD_QUANT"  class="form-control UCVDDBfields UCVDMndtry NoSpecialChar machinmndry">
            <label for="UCVD_QUANT" class="">Quantity<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
</div>



<div class="form-row">
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_MANUFYEAR" name="UCVD_MANUFYEAR" maxlength="4" class="form-control UCVDDBfields UCVDMndtry IsNumberFields machinmndry">
            <label for="UCVD_MANUFYEAR" class="">Manufacturing Year<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_MACHICATGRY" name="UCVD_MACHICATGRY"  class="form-control UCVDDBfields UCVDMndtry  NoSpecialChar machinmndry">
            <label for="UCVD_MACHICATGRY" class="">Machinery  Category<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_SERIALNO" name="UCVD_SERIALNO"  class="form-control UCVDDBfields UCVDMndtry NoSpecialChar machinmndry">
            <label for="UCVD_SERIALNO" class="">Serial No<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
</div>



<!--<div class="form-row">
		  <div class="col-md-6">
                    <div class="col Btxt10">Uploaded Security Documents</div>
                     <div data-for="BankDetail1" class="BankDetail1"> 
                     </div>
                     <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="BankDetail1" >
                        <div data-row="" class="card-body px-lg-5 pt-0 DYNROW">
                           </br>
                           <input type="text" id="UCVD_PRCSID" hidden="hidden" name="UCVD_PRCSID" value="" class="form-control UCVDDBfields">
                           <input type="text" id="UCVD_ACTIVITYID" hidden="hidden" name="UCVD_ACTIVITYID" class="form-control UCVDDBfields">
                           <input type="text" id="UCVD_DTCREATED" hidden="hidden" name="UCVD_DTCREATED" class="form-control UCVDDBfields">
                           <input type="text" id="UCVD_CREATEDBY" hidden="hidden" name="UCVD_CREATEDBY" class="form-control UCVDDBfields">
                           <input type="text" id="UCVD_DTMODIFIED" hidden="hidden" name="UCVD_DTMODIFIED" class="form-control UCVDDBfields">
                           <input type="text" id="UCVD_MODIFIEDBY" hidden="hidden" name="UCVD_MODIFIEDBY" class="form-control UCVDDBfields">
                           <input type="text" id="UCVD_PROPNUM" hidden="hidden" name="UCVD_PROPNUM" class="form-control UCVDDBfields">
						   <div class="form-row">
                              <div class="col">
                                 <div class="md-form " >
                                    <table>
                                       <tr>
                                          <td>
                                             <div id="UCVD_DOCUMENTUPLOAD"  class="file-field" style="display:none">
                                                <a class="">
                                                <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                                <input type="file"  name="datafile" onchange="DocFldUpldHndlr_V1(this,'UCVD_DOCUMENT'+$(this).closest('.DYNROW').attr('data-row'),'UCVD_DOCUMENT','PDDetails','PDDate','PD',$(this).closest('.DYNROW'))" class="UCVD_DOCUMENT"  >
                                                </a>
                                                <input type="text" id="UCVD_DOCUMENT" hidden="hidden" data-Validate="UCVD_DOCUMENT"  name="UCVD_DOCUMENT" class="form-control File UCVDDBfields UCVDMndtry">
                                                <span class="name">Upload Documents</span> 
                                             </div>
                                          </td>
                                          <div class="md-form" >
                                             <div class="md-form Formcol-mdLR">
                                                
												 <div class="UCVD_DOCUMENT"> 
												 <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" 
                                                onclick="GrdDocDwnld('UCVD_DOCUMENT'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" 
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
                        <a onclick="AddPageMultiData('',$('#UCVD_PRCSID').val(),$('#LPDT_PROPERTYNO').val(),'BankDetail1','UCVDDBfields');" class="Btxt4 FltRight ADDBTN "  href="#">+ Add</a>
                        <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                     <!--</div>
                  </div>
				  </div>-->
<div class="form-row">
	<div class=" col-md-4">
	   <div class="md-form">				  
<input type="text" id="UCVD_MACHINERYDOC" data-val="UAM document"  hidden="hidden" data-Validate="UCVD_MACHINERYDOC"  name="UCVD_MACHINERYDOC" class="form-control voter File UCVDDBfields">
<div class="UCVD_MACHINERYDOC" style="display">  
<img src="ThemeproLO/Common/Images/Eyeview.png" title="MACHINERY DOC"  class="rounded" onclick="GrdDocDwnld('UCVD_MACHINERYDOC')" alt="Cinque Terre" width="35" height="25"><span>Uploaded Security Document</div>
</div>
</div> 
</div> 


<div class="form-row">
    <div class="col Btxt10">Address Machinery Installed</div>
</div>

<div class="form-row">
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_ADDRLINI" maxlength="40" name="UCVD_ADDRLINI" class="form-control  AddrNoSpecialChar RSADDR RESSTAT UCVDDBfields UCVDMndtry machinmndry">
            <label for="UCVD_ADDRLINI" class="">Address Line 1<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
	<div class=" col-md-4">
	   <div class="md-form">
		    <input type="text" id="UCVD_ADDRLINII" maxlength="40" name="UCVD_ADDRLINII" class="form-control AddrNoSpecialChar RSADDR RESSTAT  UCVDDBfields UCVDMndtry machinmndry">
            <label for="UCVD_ADDRLINII" class="">Address Line 2<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
</div>


<div class="form-row">
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_PINCODE" maxlength="6" name="UCVD_PINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'UCVD_STATE','UCVD_CITY','')" class="form-control  RESSTAT UCVDDBfields IsNumberFields NoSpecialChar RSADDR IsPinFielde UCVDMndtry machinmndry">
            <label for="UCVD_PINCODE" class="">Pin Code<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
	<div class=" col-md-4">
	   <div class="md-form">
		    <input type="text" id="UCVD_CITY" disabled name="UCVD_CITY" class="form-control ALLDIS RSADDR RESSTAT UCVDDBfields UCVDMndtry machinmndry">
            <label for="UCVD_CITY" class="">City<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
	<div class=" col-md-4" style="display:none;">
	   <div class="md-form">
		    <input type="text" id="UCVD_STATE" disabled name="UCVD_STATE" class="form-control ALLDIS RSADDR RESSTAT UCVDDBfields">
            <label for="UCVD_STATE" class="">State<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
</div>


<div class="form-row">
    <div class="col Btxt10">Location of the Unit</div>
</div>

<div class="form-row">
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_LONGITD" name="UCVD_LONGITD" class="form-control UCVDDBfields IsNumberFields">
            <label for="UCVD_LONGITD" class="">Longitude</label>
	   </div>
	</div>
	<div class=" col-md-4">
	   <div class="md-form">
		    <input type="text" id="UCVD_LATITD" name="UCVD_LATITD" class="form-control UCVDDBfields IsNumberFields">
            <label for="UCVD_LATITD" class="">Latitude</label>
	   </div>
	</div>
</div>


<div class="form-row">
    <div class="col Btxt10">Others</div>
</div>



<div class="form-row">
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_AGEOFMACHI" name="UCVD_AGEOFMACHI" class="form-control UCVDDBfields UCVDMndtry IsNumberFields machinmndry">
            <label for="UCVD_AGEOFMACHI" class="">Age of Machine<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_RESILIFEMACHI" name="UCVD_RESILIFEMACHI"  class="form-control UCVDDBfields UCVDMndtry machinmndry">
            <label for="UCVD_RESILIFEMACHI" class="">Residual life of Machine<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_CONDIOFMACHI" name="UCVD_CONDIOFMACHI"  class="form-control UCVDDBfields UCVDMndtry machinmndry">
            <label for="UCVD_CONDIOFMACHI" class="">Condition of the Machine<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
</div>




<div class="form-row">
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_PRESMARKVAL" name="UCVD_PRESMARKVAL" class="form-control UCVDDBfields UCVDMndtry IsCURCommaFields machinmndry">
            <label for="UCVD_PRESMARKVAL" class="">Present Market Value<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_FORCSALEVAL" name="UCVD_FORCSALEVAL" class="form-control UCVDDBfields UCVDMndtry IsCURCommaFields machinmndry">
            <label for="UCVD_FORCSALEVAL" class="">Forced Sale Value<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_TOTVALMACHI" name="UCVD_TOTVALMACHI" class="form-control UCVDDBfields UCVDMndtry IsCURCommaFields machinmndry">
            <label for="UCVD_TOTVALMACHI" class="">Total value of Machinery<span class="MndtryAstr">*</span></label>
	   </div>
	</div>
</div>



<div class="form-row">
	<div class=" col-md-4">
	   <div class="md-form">
			<input type="text" id="UCVD_DATEOFINSPEC" name="UCVD_DATEOFINSPEC" onchange="Datecheckinsp('','UCVD_DATEOFINSPEC');" class="form-control UCVDDBfields UCVDMndtry ISDatefield NoSpecialChar machinmndry">
            <label for="UCVD_DATEOFINSPEC" class="">Date of Inspection<span class="MndtryAstr">*</span> </label>
			<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
	   </div>
	</div>
</div>
</div>



		
           <div class="form-row">
               <div class="col d-flex justify-content-center">
                  <button type="button" id="save4" data-aria="LSW_TUCVVEHICLEDETL|UCVD|UCVD_ALTERPROPNO|" class= "btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                  <button type="button" data-aria="LSW_TUCVVEHICLEDETL|UCVD|UCVD_ALTERPROPNO|" data-card="3"  class=" btn btn-Syel waves-effect waves-light FormSave">Submit</button> 
              </div>
           </div>  
        </form>
      </div>
    </div>
  </div>
 </div>    

<!-- END -->  
<script type="text/javascript" src="ThemeproLO/UCV/ViewRpt/Script/UCVVehicleDetl/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/ViewRpt/Script/UCVVehicleDetl/Validation.js${DMY13}"></script>
  
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>   
  

    

                            
                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           