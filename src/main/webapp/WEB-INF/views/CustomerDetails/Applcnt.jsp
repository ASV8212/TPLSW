<button type="button" data-Validatearia="Dedupe" data-Validatedata="CBSI_DEDUPEVERIFY" onclick="PosdxChk('CBSI_CUSID','CBSI_DEDUPEVERIFY','Applicant','CBSI_EXISTLONID','CBSI_CUSFISNAM');" data-validate="CBSI|DEDUPE" class="btn  waves-effect btn-yelInplain btn-sm BTNDedupe liSubpageTabIcons"><i class="fa fa-check"></i>Dedupe Check</button>
       
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="">


                            <!--Admin panel-->
                            <div class="admin-panel">
<!-- Start -->
<!--Accordion wrapper-->
<!-- Start -->
      <div class="HiddenBTN">
         <input type="button" style="display:none" class="DashTrg"  id="BTNEMPMULTIDATA" name="BTNEMPMULTIDATA" /><!-- Employment Details -->
      </div>
<div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

  <!-- Accordion card -->
 <div class="card" >
    <!-- Card header -->
    <div class="card-header Btxt7 active" role="tab" id="headingOne1">
      <a data-toggle="collapse" data-aria="LSW_TCUSBASICINFO|CBSI|CBSI_CUSID|CBSI_CUSID" data-multidata="" data-load="" class="Btxt8 AFormaccordion" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
        aria-controls="collapseOne1">       
         Personal Info <i class="fa fa-minus-circle rotate-icon"></i>
      </a>
    </div>
    <!-- Card body -->
    <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
      data-parent="#accordionEx">
      <div class="card-body px-lg-5 pt-0">
        <form>
        <input type="text" id="CBSI_PRCSID"  name="CBSI_PRCSID" hidden="hidden" class="form-control CBSIDBfields" value="" >
        <input type="text" id="CBSI_ACTIVITYID"  name="CBSI_ACTIVITYID" hidden="hidden"  class="form-control CBSIDBfields" value="">
        <input type="text" id="CBSI_CREATEDBY"  name="CBSI_CREATEDBY" hidden="hidden"  class="form-control CBSIDBfields" value="">
        <input type="text" id="CBSI_DTCREATED"  name="CBSI_DTCREATED" hidden="hidden"  class="form-control CBSIDBfields" value="">
        <input type="text" id="CBSI_MODIFIEDBY"  name="CBSI_MODIFIEDBY" hidden="hidden"  class="form-control CBSIDBfields" value="">
        <input type="text" id="CBSI_DTMODIFIED"  name="CBSI_DTMODIFIED" hidden="hidden"  class="form-control CBSIDBfields" value="">
        
        <input type="text" id="CBSI_DEDUPEVERIFY"  name="CBSI_DEDUPEVERIFY" hidden="hidden"  class="form-control CBSIDBfields" value="">
        
        
        <input type="text" id="CBSI_APPLCUSTYPE"  name="CBSI_APPLCUSTYPE" hidden="hidden"  class="form-control CBSIDBfields" value="">
        <input type="text" id="CBSI_CUSID"  name="CBSI_CUSID" hidden="hidden"  class="form-control CBSIDBfields" value="">
         
        <input type="text" id="CBSI_CUSTYPE"  name="CBSI_CUSTYPE" hidden="hidden"  class="form-control CBSIDBfields" value="">
        <input type="text" id="CBSI_BRANCH"  name="CBSI_BRANCH" hidden="hidden"  class="form-control CBSIDBfields" value="">
        <input type="text" id="CBSI_LONTYPE"  name="CBSI_LONTYPE" hidden="hidden"  class="form-control CBSIDBfields" value="">
        <input type="text" id="CBSI_SUBLONTYPE"  name="CBSI_SUBLONTYPE" hidden="hidden"  class="form-control CBSIDBfields" value="">
         
        <input type="text" id="CBSI_APPLCNTNO" hidden="hidden" name="CBSI_APPLCNTNO" class="form-control CBSIDBfields">
        <input type="text" id="CBSI_CIN" hidden="hidden" name="CBSI_CIN" class="form-control CBSIDBfields">
		<input type="text" id="CBSI_BRID" hidden="hidden" name="CBSI_BRID" class="form-control CBSIDBfields">
		
		<input type="text" id="CBSI_FICOMPETED"  name="CBSI_FICOMPETED" hidden="hidden"  class="form-control CBSIDBfields" value="">
		
		<input type="text" id="CBSI_RESCOMPETED"  name="CBSI_RESCOMPETED" hidden="hidden"  class="form-control CBSIDBfields" value="">
		<input type="text" id="CBSI_FILESTATUS"  name="CBSI_FILESTATUS" hidden="hidden"  class="form-control CBSIDBfields" value="">
		
		<input type="text" id="CBSI_EXISTLONID" hidden="hidden" name="CBSI_EXISTLONID" class="form-control CBSIDBfields">


       <input type="text" id="CBSI_APPLCNTDATE"  name="CBSI_APPLCNTDATE" hidden="hidden"  class="form-control CBSIDBfields" value="">
		<input type="text" id="CBSI_BUSINESSDT"  name="CBSI_BUSINESSDT" hidden="hidden"  class="form-control CBSIDBfields" value="">
		
		<input type="text" id="CBSI_PROFILE"  name="CBSI_PROFILE" hidden="hidden"  class="form-control CBSIDBfields" value="">
		<input type="text" id="CBSI_NATURBUS"  name="CBSI_NATURBUS" hidden="hidden"  class="form-control CBSIDBfields" value="">
		<input type="text" id="CBSI_RPTID"  name="CBSI_RPTID" hidden="hidden"  class="form-control CBSIDBfields" value="">
		<input type="text" id="CBSI_CURUSROLE"  name="CBSI_CURUSROLE" hidden="hidden"  class="form-control CBSIDBfields" value="">
		
         <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>
         <div class="Btxt15 CBSI_CUSID">Customer ID</div>
         <div class="form-row">
              <div class="col-md-3 INDU">
                 <table class="xdTable tablezoom" cellspacing="2" cellpadding="2" width="100%">
                   <tbody>
                     <tr>
                        <td style="width:75%"><input class="ColumnHeading" disabled  border="" id="CUSPHOTO" value="" onclick="GrdDocDwnld('CBSI_CUSPHOTO')" name="CUSPHOTO" src="" style="margin-top:10px; margin-bottom:5px; height:100px; width:100px; background-color:#f4f4f4; border-radius:5px; border: 1px solid #e4e4e4;" type="image" /></br></td>
                     </tr>
                   </tbody>
                 </table>
                 <table>
                  <tbody>
                  <tr>
                    <td>
                        <input type="file" style="display:none" name="datafile" id="Photo" data-photo="PHOTO" onchange="PhSignFldUpldHndlr(this,'CBSI_CUSPHOTO','CUSPHOTO','CBSI_','Customer Photo','CBSI_CUSID')">
                        <input type="hidden" class="inputTXT DocImg DOCU DSAC VAL CBSIDBfields" data-val="Customer Photo" id="CBSI_CUSPHOTO" name="CBSI_CUSPHOTO" value="">
                     </td>
                 </tr>
                 </tbody>
                 </table>
                 <!-- <div style="margin-top:10px; margin-bottom:5px; height:100px; width:100px; background-color:#f4f4f4; border-radius:5px; border: 1px solid #e4e4e4;"></div> -->
                <!-- <div class="Btxt4" onclick="Click()" href="#">Upload Photo</div> -->
                 <a type="button" onclick="Click()" class="Btxt4" href="#">Upload Photo</a> 
                 <script>
                   function Click(){$("#Photo").click()}
                 </script>
                </div>
                <div class="col">
                  <div class="md-form" style="margin-top: 50px;">
                    <select class="mdb-select md-form colorful-select dropdown-primary CBSIDBfields CBSIMndtry" onchange="CheckGenter()" id="CBSI_TITLE" name="CBSI_TITLE">
                  	<option value="">Select</option>
  					<option class="INDMiss" value="Mr">Mr</option>
  					<option class="INDMiss" value="Mrs">Mrs</option>
 					 <option class="INDMiss" value="Miss">Miss</option>
 					 <option  class="INDMS"   value="M/s">M/s</option>
				</select>
				<label class="mdb-main-label BTxt9">Title<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col INDU">
				
				</div>
                <div class="col-md-6 NINDU" style="margin-top: 50px;">
				    <div class="md-form">
                    <input type="text" id="CBSI_UAMNO" maxlength="19"  name="CBSI_UAMNO" class="form-control IsUpprCse IsUAMFields Udayamfield  CBSIDBfields">
                    <label for="CBSI_UAMNO" class="">Udyam Registration No<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div>
           </br>
		   <div class="form-row NINDU" >
                <div class="col-md-6 ">
				<div class="">Udyam Registration Certificate Document</div>
                <div class="row UAMN" >
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR UAMNupload">
<div class="md-form">
<table><tr>
<td>
<div id="CBSI_UPDUAMNOUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_UPDUAMNO,'CBSI_UPDUAMNO','Udyam','Udyam')" class="CBSI_UPDUAMNO"  >
    </a> 
<input type="text" id="CBSI_UPDUAMNO" data-val="Upload Udyam Registration Certificate"  hidden="hidden" data-Validate="CBSI_UPDUAMNO"  name="CBSI_UPDUAMNO" class="form-control voter File CBSIDBfields">
<span class="name1">Upload</span>
 </div>
</td>
</tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter Udyam">
<div class="md-form">
<div class="CBSI_UPDUAMNO" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(CBSI_UPDUAMNO);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('CBSI_UPDUAMNO')" alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div>  
</div>
</div>
			   <div class="col-md-6">
           		<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary CBSIDBfields" id="CBSI_ENTTYPE" name="CBSI_ENTTYPE">
                  	<option value="">Select</option>
  					<option value="MICRO">MICRO</option>
  					<option value="MEDIUM">MEDIUM</option>
  					<option value="SMALL">SMALL</option>
				</select>
				<label class="mdb-main-label BTxt9">Enterprises Type<span class="MndtryAstr"></span></label>
             </div>
            </div>
           </div>
		   <div class="form-row GSTF" style="display:none">
		      <div class="col-md-6">
                   <div class="md-form">
                     <input type="text" id="CBSI_GSTVERIFY" hidden="hidden" maxlength="30" name="CBSI_GSTVERIFY" class="form-control GST CBSIDBfields">
                     <button type="button" data-Validatearia="CBSI_GSTVERIFY" onclick="CheckValidPanKyc('CBSI_GSTNUM','CBSI_GSTVERIFY','CBSI_CUSFISNAM','CBSI_CUSTYPE','gstdetailed','CBSI_CUSID','CADI_ORGADDRLINI','CADI_ORGADDRLINII','','','','CEMI_ADDRLINEI','CEMI_ADDRLINEII','CBSI_NATURBUS');" data-validate="gstin"  class="btn btn-Verify CBSI_GSTNUM waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
                     <input type="text" id="CBSI_GSTNUM" maxlength="60" disabled name="CBSI_GSTNUM" class="form-control GST CBSIDBfields">
                     <label for="CBSI_GSTNUM" class="">GST Number<span class="MndtryAstr"></span></label>
                   </div>
               </div>
		   </div>
           <div class="form-row">
                <div class="col-md-6">
                  <div class="md-form">
                    <input type="text" id="CBSI_FETCHFSTNAME" hidden="hidden" name="CBSI_FETCHFSTNAME" class="form-control CBSIDBfields">
                    <input type="text" id="CBSI_CUSFISNAM" maxlength="25"  name="CBSI_CUSFISNAM" class="form-control IsAlphaFields IsUpprCse CBSIDBfields CBSIMndtry">
                    <label for="CBSI_CUSFISNAM" class="">First Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-6 INDU">
                  <div class="md-form">
                    <input type="text" id="CBSI_FETCHLSTNAME" hidden="hidden" name="CBSI_FETCHLSTNAME" class="form-control CBSIDBfields">
                    <input type="text" id="CBSI_CUSLSTNAM" maxlength="25" name="CBSI_CUSLSTNAM" class="form-control IsAlphaFields IsUpprCse CBSIDBfields CBSIMndtry">
                    <label for="CBSI_CUSLSTNAM" class="">Last Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-6 NINDU">
                    <div class="md-form">
                    
                       <input type="text" id="CBSI_CONSTITUTION" maxlength="25" disabled name="CBSI_CONSTITUTION" class="form-control CBSIDBfields IsAlphaFields">
                       <label for="CBSI_CONSTITUTION" class="">Constitution Name<span class="MndtryAstr"></span></label>
                    </div>
                </div>
           </div>
           <div class="form-row INDU">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="CBSI_FETCHFATHNAME" hidden="hidden" name="CBSI_FETCHFATHNAME" class="form-control CBSIDBfields">
                    <input type="text" id="CBSI_FATHRNAM" maxlength="25" name="CBSI_FATHRNAM" class="form-control IsAlphaFields IsUpprCse INDM CBSIDBfields CBSIMndtry">
                    <label for="CBSI_FATHRNAM" class="">Father's Name<span class="MndtryAstr">*</span></label>
                  </div>
           	</div>
           	<div class="col">
                 <div class="md-form">
                    <div id="RadINDU" class="select-radio CBSIMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input CBSIDBfields" onclick="AppTitle()" value="Male" id="GenMale" name="CBSI_GENTER">
                          <label class="custom-control-label" for="GenMale">Male</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input CBSIDBfields" onclick="AppTitle()" value="Female" id="GenFemale" name="CBSI_GENTER">
                           <label class="custom-control-label" for="GenFemale">Female</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                             <input type="radio" class="custom-control-input CBSIDBfields" onclick="CheckGender();" value="Transgender" id="GenTrancs" name="CBSI_GENTER">
                             <label class="custom-control-label" for="GenTrancs">Transgender</label>
                       </div>
                   </div>
                   <label class="mdb-main-label BTxt9">Gender<span class="MndtryAstr">*</span></label>      
               </div>
           </div>
           </div>
           <div class="form-row INDU">
            <div class="col">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="CBSI_FETCHDOBNAME" hidden="hidden" name="CBSI_FETCHDOBNAME" class="form-control CBSIDBfields">
                    <input type="text" id="CBSI_DOB" name="CBSI_DOB" onblur="AgeVal(this,CBSI_AGE);ChkDOBTOJOINDATE();" maxlength="10" class="form-control form-control CEMIDBfields IsNumberFields NoSpecialChar INDM ISDatefield  CBSIDBfields CBSIMndtry">
                    <label for="CBSI_DOB" class="">DOB<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>
                <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                    <input type="text" id="CBSI_AGE" name="CBSI_AGE" disabled class="form-control CBSIDBfields NoSpecialChar INDM CBSIMndtry">
                    <label for="CBSI_AGE" class="AGE">Age<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div>
            <div class="form-row INDU">
            <div class="col">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary INDM CBSIDBfields CBSIMndtry" id="CBSI_CATEGORY" name="CBSI_CATEGORY">
                  	<option value="">Select</option>
  					<option value="SC">SC</option>
 					 <option value="ST">ST</option>
 					 <option value="OBC">OBC</option>
  					<option value="General">General</option>
  					<option value="Others">Others</option>
				</select>
				<label class="mdb-main-label BTxt9">Category<span class="MndtryAstr">*</span></label>
             </div>
            </div>
           	<div class="col">
           		<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary INDM CBSIDBfields CBSIMndtry" onchange="CheckMarStatus();" id="CBSI_MARITSTUS" name="CBSI_MARITSTUS">
                  	<option value="">Select</option>
  					<option value="Married">Married</option>
  					<option value="Single">Single</option>
  					<option value="Divorce">Divorce</option>
  					<option value="Widow">Widow</option>
				</select>
				<label class="mdb-main-label BTxt9">Marital Status<span class="MndtryAstr">*</span></label>
             </div>
            </div>
           
            </div>
            <div class="form-row">
                <div class="col-md-6 INDU">
                  <div class="md-form ">
                    <input type="text" id="CBSI_SPOUSNAME" maxlength="20" name="CBSI_SPOUSNAME" class="form-control CBSIDBfields INDM IsAlphaFields NoSpecialChar">
                    <label for="CBSI_SPOUSNAME" class="">Spouse Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="PROFILE col-md-6 ">
                  	<div class="md-form">
                     <select class="mdb-select md-form colorful-select dropdown-primary NINDM PROFILEVAL CBSIDBfields" data-change="CBSI_PROFILE"  onchange="DataToProfFld(this);CheckProfile();"  id="CBSI_NPROFILE" name="CBSI_NPROFILE">
                  	 <option value="">Select</option>
  				     <option class="GSTSAL" disabled value="Salaried">Salaried</option>
 					 <option value="SEP">SEP</option>
  					 <option  value="SENP">SENP</option>
 					 <option disabled value="Retired">Retired</option>
 					 <option disabled value="Housewife">Housewife</option>
					 <option disabled value="Student">Student</option>
				     </select>
				      <label class="mdb-main-label BTxt9">Profile<span class="MndtryAstr">*</span></label>
                    </div>
                </div>
           </div>
           <div class="form-row INDU">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="CBSI_NOOFDEPEND" maxlength="2" name="CBSI_NOOFDEPEND" class="form-control CBSIDBfields NoSpecialChar INDM IsNumberFields CBSIMndtry">
                    <label for="CBSI_NOOFDEPEND" class="">No of Dependents<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  	<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary CBSIDBfields INDM CBSIMndtry" id="CBSI_QUALIFICATION" name="CBSI_QUALIFICATION" >
                  	<option value="">Select</option>
  					<option value="Matriculation">Matriculation</option> 
  					<option value="UG">UG</option>
 					 <option value="Graduate">Graduate</option>
 					 <option value="PG">PG</option>
				</select>
				<label class="mdb-main-label BTxt9">Qualifications<span class="MndtryAstr">*</span></label>
             </div>
             </div>
           </div>
           </br>
             <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save1" data-aria="LSW_TCUSBASICINFO|CBSI" data-form="PersonalInfo" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TCUSBASICINFO|CBSI" data-form="PersonalInfo" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                </div>
            </div>
        </form>
      </div>
    </div>
    </div>
  <!-- Accordion card -->
  <!-- Accordion card -->
  <div class="card">
    <!-- Card header -->
    <div class="card-header Btxt7" role="tab" id="headingTwo2">
      <a class="collapsed Btxt7 AFormaccordion DedupeSmt ACCRDISB CONLOAD" data-form="Contact Details" data-aria="LSW_TCUSADDRINFO|CADI|CADI_CUSID|CBSI_CUSID" data-load="" data-multidata="" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
        aria-expanded="false" aria-controls="collapseTwo2">
          Contact Details <i class="fa fa-plus-circle rotate-icon"></i>
      </a>
    </div>
    <!-- Card body -->
    <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
      data-parent="#accordionEx">
      <div class="card-body px-lg-5 pt-0">
        <form>
        <input type="text" id="CADI_PRCSID" hidden="hidden" name="CADI_PRCSID" class="form-control CADIDBfields">
         <input type="text" id="CADI_ACTIVITYID" hidden="hidden" name="CADI_ACTIVITYID" class="form-control CADIDBfields">
         <input type="text" id="CADI_CREATEDBY" hidden="hidden" name="CADI_CREATEDBY" class="form-control CADIDBfields">
         <input type="text" id="CADI_DTCREATED" hidden="hidden" name="CADI_DTCREATED" class="form-control CADIDBfields">
         <input type="text" id="CADI_MODIFIEDBY" hidden="hidden" name="CADI_MODIFIEDBY" class="form-control CADIDBfields">
         <input type="text" id="CADI_DTMODIFIED" hidden="hidden"  name="CADI_DTMODIFIED" class="form-control CADIDBfields">
         
         <input type="text" id="CADI_CUSID"  name="CADI_CUSID" hidden="hidden"  class="form-control CADIDBfields" value="">
        
        <div class="form-row">
            <div class="col">   
               <div class="md-form">
                   <input type="text" id="CADI_EMAILVERIFY" hidden="hidden" maxlength="30" name="CADI_EMAILVERIFY" class="form-control CADIDBfields">
                   <button type="button" data-Validatearia="CADI_EMAILVERIFY" onclick="VerfyMail(this,$('#CADI_EMAILID').val(),$('#CBSI_CUSID').val());" data-validate="email"  class="btn btn-Verify CADI_EMAILID waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>
                  
				   <input type="text" id="CADI_EMAILID" maxlength="60"  data-link="CADI_EMAILID|CADI_EMAILVERIFY" onchange="ClrSpanVal();" name="CADI_EMAILID" class="form-control datalink CADIDBfields IsEmailFields CADIMndtry">
                   <label for="CADI_EMAILID" class="">Email ID<span class="MndtryAstr">*</span></label>
				    <span class="EMAILLINK Btxt29" ></span>
              </div>
              </div>
              <div class="col">
                 <div class="md-form">
                    <input type="text" id="CADI_MOBIVERIFY"  hidden="hidden" name="CADI_MOBIVERIFY" class="form-control CADIDBfields">
                    <button type="button" data-Validatearia="CADI_MOBIVERIFY" onclick="CheckMobValidKyc('CADI_MOBNOI','otp','CADI_MOBIVERIFY','MOBI','MobIotp','MobIIotp')" data-validate="otp"  class="btn btn-Verify CADI_MOBNOI waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>
                    <input type="text" id="CADI_MOBNOI" data-link="CADI_MOBNOI|CADI_MOBIVERIFY"  onchange="CheckDupMobNo('CADI_MOBNOI','CADI_MOBNOII','Mobile Number');DupMOBval('CADI_PRCSID','CADI_MOBNOI','CADI_CUSID');" maxlength="10" name="CADI_MOBNOI" class="form-control datalink CADIDBfields IsNumberFields NoSpecialChar IsMobileFields CADIMndtry">
                    <label for="CADI_MOBNOI" class="">Mobile Number 1<span class="MndtryAstr">*</span></label>
                 </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col-md-6">
                  <div class="md-form">
                    <input type="text" id="CADI_MOBIIVERIFY" hidden="hidden" name="CADI_MOBIIVERIFY" class="form-control CADIDBfields">
                    <button type="button" data-Validatearia="CADI_MOBIIVERIFY" onclick="CheckMobValidKyc('CADI_MOBNOII','otp','CADI_MOBIIVERIFY','MOBII','MobIotp','MobIIotp')" data-validate="otp"  class="btn  CADI_MOBNOII btn-Verify waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>
                    <input type="text" id="CADI_MOBNOII" data-link="CADI_MOBNOII|CADI_MOBIIVERIFY" maxlength="10" onchange="CheckDupMobNo('CADI_MOBNOII','CADI_MOBNOI','Mobile Number');" name="CADI_MOBNOII" class="form-control  CADIDBfields datalink NoSpecialChar IsNumberFields IsMobileFields">
                    <label for="CADI_MOBNOII" class="">Mobile Number 2</label>
                  </div>
            </div>
            <!--  <div class="col">
                  <div class="md-form INDU">
                    <input type="text" id="CADI_OTP"  name="CADI_OTP" class="form-control CADIDBfields IsNumberFields">
                    <label for="CADI_OTP" class="">Enter OTP</label>
                  </div>
             </div> -->
           
        </div>
  <div class="INDU">
        <div class="form-row">
        	<div class="col Btxt10">RESIDENCE ADDRESS</div>
        </div>
        </br>
        
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_ADDRLINI" maxlength="30" name="CADI_ADDRLINI" class="form-control RSADDR AddrNoSpecialChar RESSTAT CADIDBfields CADIMndtry">
                    <label for="CADI_ADDRLINI" class="">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_ADDRLINII" maxlength="30" name="CADI_ADDRLINII" class="form-control AddrNoSpecialChar RESSTAT RSADDR CADIDBfields">
                    <label for="CADI_ADDRLINII" class="">Address Line 2</label>
                  </div>
               </div>        
        </div>
        
        <div class="form-row">
           
            <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="CADI_PINCODE" maxlength="6" name="CADI_PINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'CADI_STATE','CADI_CITY','CADI_STDC')" class="form-control RSADDR RESSTAT CADIDBfields IsNumberFields NoSpecialChar IsPinFielde CADIMndtry">
                    <label for="CADI_PINCODE" class="">Pin Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_CITY" disabled name="CADI_CITY" class="form-control RSADDR RESSTAT  CADIDBfields CADIMndtry">
                    <label for="CADI_CITY" class="">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        
        <div class="form-row">
           
            <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="CADI_STATE" disabled name="CADI_STATE" class="form-control RSADDR RESSTAT CADIDBfields CADIMndtry">
                    <label for="CADI_STATE" class="">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="CADI_LNDMARK" maxlength="20" name="CADI_LNDMARK" class="form-control RESSTAT IsAlphaFields RSADDR CADIDBfields CADIMndtry">
                    <label for="CADI_LNDMARK" class="">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row"> 
            <div class="col-md-6">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary RSADDR CADIDBfields" id="CADI_RESIDTYPE" name="CADI_RESIDTYPE">
                  	<option value="">--Select--</option>
  					<option value="Self Owned">Self Owned</option>
 					 <option value="Rented">Rented</option>
 					 <option value="Owned by Relative">Owned by Relative</option>
 					 <option value="Company Provided">Company Provided</option>
 					 <option value="Family Owned">Family Owned</option>
 					 <option value="Leased">Leased</option>
 					 
				</select>
				<label class="mdb-main-label BTxt9">Residence Type<span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col-md-1">
                   <div class="md-form">
                        <input type="text" id="CADI_STDC" maxlength="11" style="width:75px"  name="CADI_STDC" class="form-control RSADDR CADIDBfields IsNumberFields IsLandlneFields"> 
                        <label for="CADI_STDC" class="">STD</label>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                    <input type="text" id="CADI_LNDLINENO" maxlength="11"  name="CADI_LNDLINENO" class="form-control RSADDR CADIDBfields IsNumberFields IsLandlneFields">
                    <label for="CADI_LNDLINENO" class="">Landline No</label>
                 </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col">
                <div class="md-form">
                    <input type="text" id="CADI_YEAROFRESID" maxlength="2" name="CADI_YEAROFRESID" class="form-control RSADDR CADIDBfields NoSpecialChar IsNumberFields CADIMndtry">
                    <label for="CADI_YEAROFRESID" class="">Years of Residence<span class="MndtryAstr">*</span></label>
                  </div> 
                </div>
                <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary RSADDR CADIDBfields IsNumberFields" id="CADI_MONTHS" name="CADI_MONTHS">
                  	<option value="0">0</option>
  					<option value="1">1</option>
  					<option value="2">2</option>
  					<option value="3">3</option>
  					<option value="4">4</option>
  					<option value="5">5</option>
  					<option value="6">6</option>
  					<option value="7">7</option>
  					<option value="8">8</option>
  					<option value="9">9</option>
  					<option value="10">10</option>
  					<option value="11">11</option>
 					
				</select>
				<label class="mdb-main-label BTxt9">Months</label>
             </div>
               </div>
        </div>
        
        <div class="form-row">
            <div class="col-md-5">
            	<div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input CADIDBfields" id="CADI_KYCDOCAVAIL" name="CADI_KYCDOCAVAIL">
  					<label class="custom-control-label" for="CADI_KYCDOCAVAIL">KYC document available</label>
				</div>
				</div>
            </div>
			<div class="col-md-2 Formcol-mdLR TxtCenter ADDRVI" style="display:none">
                <div class="md-form">
                     <input type="text" id="CADI_ADDRPROOF1" data-val="UAM document"  hidden="hidden" data-Validate="CADI_ADDRPROOF1"  name="CADI_ADDRPROOF1" class="form-control voter File CBSIDBfields">
                     <div class="CADI_ADDRPROOF1" style="display">  
                         <img src="ThemeproLO/Common/Images/Eyeview.png" title="Address Proof One View"  class="rounded" onclick="GrdDocDwnld('CADI_ADDRPROOF1')" alt="Cinque Terre" width="35" height="25"> 
				     </div>
                </div>
            </div> 
            <div class="col-md-5">
            </div>
        </div>
        <div class="form-row">
        	<div class="col Btxt10">PERMANENT ADDRESS</div>
        </div>
        </br>
        <div class="form-row">
            <div class="col-md-5">
            	<div class="md-form">
            	  <div class="custom-control custom-radio custom-control-inline">
 					  <input type="checkbox" class="custom-control-input  CADIDBfields" onclick="CheckAddrMndtry();" id="CADI_SAMRESIDADDR" name="CADI_SAMRESIDADDR">
  					  <label class="custom-control-label" for="CADI_SAMRESIDADDR">Same as Residence Address</label>
				  </div>
				</div>
            </div>
			<div class="col-md-2 Formcol-mdLR TxtCenter ADDRVII" style="display:none">
<div class="md-form">
<input type="text" id="CADI_ADDRPROOF2" data-val="UAM document"  hidden="hidden" data-Validate="CADI_ADDRPROOF2"  name="CADI_ADDRPROOF2" class="form-control voter File CBSIDBfields">
<div class="CADI_ADDRPROOF2" style="display">  
<img src="ThemeproLO/Common/Images/Eyeview.png" title="Address Proof Two View"  class="rounded" onclick="GrdDocDwnld('CADI_ADDRPROOF2')" alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div> 
<div class="col-md-5">
</div>

        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_PREMADDRLINI" maxlength="30" name="CADI_PREMADDRLINI" class="form-control AddrNoSpecialChar PRADDR CADIDBfields CADIMndtry">
                    <label for="CADI_PREMADDRLINI" class="ADDR">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_PERMADDRLINII" maxlength="30" name="CADI_PERMADDRLINII" class="form-control AddrNoSpecialChar PRADDR CADIDBfields">
                    <label for="CADI_PERMADDRLINII" class="ADDR">Address Line 2</label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_PERMPINCODE" maxlength="6" name="CADI_PERMPINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'CADI_PERMSTATE','CADI_PERMCITY','CADI_PSTDC')" class="form-control PRADDR IsNumberFields NoSpecialChar IsPinFielde CADIDBfields CADIMndtry">
                    <label for="CADI_PERMPINCODE" class="ADDR">Pin Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_PERMCITY" disabled name="CADI_PERMCITY" class="form-control PRADDR CADIDBfields IsAlphaFields CADIMndtry">
                    <label for="CADI_PERMCITY" class="ADDR">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div> 
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_PERMSTATE" disabled name="CADI_PERMSTATE" class="form-control PRADDR CADIDBfields IsAlphaFields CADIMndtry">
                    <label for="CADI_PERMSTATE" class="ADDR PERP">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_PERMLNDMARK" name="CADI_PERMLNDMARK" class="form-control IsAlphaFields PRADDR CADIDBfields CADIMndtry">
                    <label for="CADI_PERMLNDMARK" class="ADDR">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
          </div> 
          <div class="form-row">
            <div class="col-md-6"> 
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary PRADDR CADIMndtry CADIDBfields " id="CADI_PERMRESIDTYPE" name="CADI_PERMRESIDTYPE">
                  	<option value="" selected>--Select--</option>
  					<option value="Self Owned">Self Owned</option>
 					 <option value="Rented">Rented</option>
 					 <option value="Owned by Relative">Owned by Relative</option>
 					 <option value="Company Provided">Company Provided</option>
 					 <option value="Family Owned">Family Owned</option>	 
				</select>
				<label class="mdb-main-label BTxt9">Residence Type<span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col-md-1">
                   <div class="md-form">
                        <input type="text" id="CADI_PSTDC" maxlength="11" style="width:75px"  name="CADI_PSTDC" class="form-control PRADDR CADIDBfields IsNumberFields IsLandlneFields"> 
                        <label for="CADI_PSTDC" class="ADDR">STD</label>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                    <input type="text" id="CADI_PERMLNDLINENO" maxlength="11"  name="CADI_PERMLNDLINENO" class="form-control PRADDR CADIDBfields IsNumberFields IsLandlneFields">
                    <label for="CADI_PERMLNDLINENO" class="ADDR">Landline No</label>
                  </div>
               </div>
        </div>
        <div class="form-row">
           
            <div class="col">
                  <div class="md-form">  
				<input type="text" id="CADI_PERMYEAROFRESID" maxlength="2" name="CADI_PERMYEAROFRESID" class="form-control PRADDR CADIDBfields NoSpecialChar IsNumberFields CADIMndtry">
                    <label for="CADI_PERMYEAROFRESID" class="ADDR">Years of Residence<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary PRADDR CADIDBfields" id="CADI_PERMMONTHS" name="CADI_PERMMONTHS">
                  	<option value="0">0</option>
  					<option value="1">1</option>
  					<option value="2">2</option>
  					<option value="3">3</option>
  					<option value="4">4</option>
  					<option value="5">5</option>
  					<option value="6">6</option>
  					<option value="7">7</option>
  					<option value="8">8</option>
  					<option value="9">9</option>
  					<option value="10">10</option>
  					<option value="11">11</option>
 					
				</select>
				<label class="mdb-main-label BTxt9">Months</label>
             </div>
               </div>
           
        </div>
     </div>
     <div class="NINDU">  
        <div class="form-row">
        	<div class="col-md-4 Btxt10">ORGANIZATION ADDRESS</div>
			<div class="col-md-2 Formcol-mdLR TxtCenter ADDRVI" style="display:none">
              <div class="md-form">
 <input type="text" id="CADI_NIADDRPROOF1" data-val=""  hidden="hidden" data-Validate="CADI_NIADDRPROOF1"  name="CADI_NIADDRPROOF1" class="form-control voter File">
             <div class="CADI_NIADDRPROOF1" style="display">  
                    <img src="ThemeproLO/Common/Images/Eyeview.png" title="Address Proof One View"  class="rounded" onclick="GrdDocDwnld('CADI_NIADDRPROOF1')" alt="Cinque Terre" width="35" height="25"> </div>
              </div>
            </div> 
            <div class="col-md-6">
            </div>
        </div>     
        <div class="form-row">
              <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="CADI_ORGADDRLINI" maxlength="30"  name="CADI_ORGADDRLINI" class="form-control  ORGADD AddrNoSpecialChar CADIDBfields CADIMndtry">
                    <label for="CADI_ORGADDRLINI" class="">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="CADI_ORGADDRLINII" maxlength="30"  name="CADI_ORGADDRLINII" class="form-control ORGADD AddrNoSpecialChar CADIDBfields">
                    <label for="CADI_ORGADDRLINII" class="">Address Line 2</label>
                  </div>
               </div>
           
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_ORGPINCODE" maxlength="6" name="CADI_ORGPINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'CADI_ORGSTATE','CADI_ORGCITY','CADI_ORGSTDC')" class="form-control  ORGADD CADIDBfields IsNumberFields NoSpecialChar IsPinFielde CADIMndtry">
                    <label for="CADI_ORGPINCODE" class="">Pin Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_ORGCITY" disabled name="CADI_ORGCITY" class="form-control IsAlphaFields ORGADD CADIDBfields CADIMndtry">
                    <label for="CADI_ORGCITY" class="ORGP">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_ORGSTATE" disabled name="CADI_ORGSTATE" class="form-control IsAlphaFields ORGADD CADIDBfields CADIMndtry">
                    <label for="CADI_ORGSTATE" class="ORGP">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_ORGLNDMARK" maxlength="30"  name="CADI_ORGLNDMARK" class="form-control IsAlphaFields ORGADD CADIDBfields CADIMndtry">
                    <label for="CADI_ORGLNDMARK" class="">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col-md-6">
              <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary CADIDBfields " id="CADI_ORGRESIDTYPE" name="CADI_ORGRESIDTYPE">
                  	<option value="" selected >--Select--</option>
  					<option value="Self Owned">Self Owned</option>
 					 <option value="Rented">Rented</option>
					  <option value="Leased">Leased</option>
					 
				</select>
				<label class="mdb-main-label BTxt9">Residence Type<span class="MndtryAstr"></span></label>
             </div>
          </div>
          <div class="col-md-1">
                   <div class="md-form">
                        <input type="text" id="CADI_ORGSTDC" maxlength="11" style="width:75px"  name="CADI_ORGSTDC" class="form-control PRADDR CADIDBfields IsNumberFields IsLandlneFields"> 
                        <label for="CADI_ORGSTDC" class="">STD</label>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                      <input type="text" id="CADI_ORGLNDLINENO" maxlength="11"  name="CADI_ORGLNDLINENO" class="form-control CADIDBfields IsNumberFields IsLandlneFields">
                      <label for="CADI_ORGLNDLINENO" class="">Landline No</label>
                  </div>
               </div>
        </div>
        <div class="form-row INDU">
            <div class="col">
                  <div class="md-form">
				<input type="text" id="CADI_ORGYEAROFRESID" maxlength="2" name="CADI_ORGYEAROFRESID" class="form-control RSADDR CADIDBfields NoSpecialChar IsNumberFields CADIMndtry">
                    <label for="CADI_ORGYEAROFRESID" class="">Years of Residence<span class="MndtryAstr">*</span></label>
                  </div>
                  </div>
                <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary CADIDBfields" id="CADI_ORGMONTHS" name="CADI_ORGMONTHS">
                  	<option value="0">0</option>
  					<option value="1">1</option>
  					<option value="2">2</option>
  					<option value="3">3</option>
  					<option value="4">4</option>
  					<option value="5">5</option>
  					<option value="6">6</option>
  					<option value="7">7</option>
  					<option value="8">8</option>
  					<option value="9">9</option>
  					<option value="10">10</option>
  					<option value="11">11</option>
 					
				</select>
				<label class="mdb-main-label BTxt9">Months</label>
             </div>
               </div>
           </div>
        </div>
       	</br>
       	    <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save2" data-aria="LSW_TCUSADDRINFO|CADI" data-form="ContactDetails" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TCUSADDRINFO|CADI" data-form="ContactDetails" data-card="1"  class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                </div>
            </div>
        </form>
   </div>
      </div>
    </div>
  <!-- Accordion card -->
          <div class="card INDU EMP">
            <!-- Card header -->
            <!-- Card body -->
                     <!-- Card header -->
                     <div class="card-header Btxt7" role="tab" id="headingThree3">
                        <a class="collapsed Btxt7 AFormaccordion EMPDLOAD ACCRDISB" data-toggle="collapse" data-form="Employment Details" data-load="" data-multidata="BTNEMPMULTIDATA" data-aria="LSW_TCUSEMPINFO|CEMI|CEMI_CUSID|CBSI_CUSID" data-parent="#accordionEx" href="#collapseThree3"
                           aria-expanded="true" aria-controls="collapseThree3">
                        Employment Details<i class="fa fa-plus-circle rotate-icon"></i>
                        </a>
                     </div>
                     <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
                        data-parent="#accordionEx">
                           <span class="HyperControls FltRight" >
		               <a onclick="AddPageMultiData('',$('#BKDT_PRCSID').val(),'','BankDetail1','CEMIDBfields');RmoveEmpFlds();CheckPan();" class="Btxt4 ADDBTN FltRight"  href="#">+ Add Employment</a>
		               <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
		            </span>
                        </br>
                        
                        <div data-for="BankDetail1" class="BankDetail1"> 
                        </div>
                        <div class="DynamicPageGrid" data-val="PROPTXTHDR|Employment" id="BankDetail1" style="display:none">
                           <div class="card-body px-lg-5 pt-0 BSbrd DYNROW" >
                              <form>
                                 <input type="text" id="CEMI_PRCSID" hidden="hidden" name="CEMI_PRCSID" class="form-control CEMIDBfields">
                                 <input type="text" id="CEMI_ACTIVITYID" hidden="hidden" name="CEMI_ACTIVITYID" class="form-control CEMIDBfields">
                                 <input type="text" id="CEMI_CREATEDBY" hidden="hidden" name="CEMI_CREATEDBY" class="form-control CEMIDBfields">
                                 <input type="text" id="CEMI_DTCREATED" hidden="hidden" name="CEMI_DTCREATED" class="form-control CEMIDBfields">
                                 <input type="text" id="CEMI_MODIFIEDBY" hidden="hidden" name="CEMI_MODIFIEDBY" class="form-control CEMIDBfields">
                                 <input type="text" id="CEMI_DTMODIFIED" hidden="hidden"  name="CEMI_DTMODIFIED" class="form-control CEMIDBfields">
                                 <input type="text" id="CEMI_CUSID"  name="CEMI_CUSID" hidden="hidden"  class="form-control CEMIDBfields" value="">
                                 <input type="text" id="CEMI_EMPID"  name="CEMI_EMPID" hidden="hidden"  class="form-control CEMIDBfields" value="">
								  <input type="text" id="CEMI_OFFICESTATUS"  name="CEMI_OFFICESTATUS" hidden="hidden"  class="form-control CEMIDBfields" value="">
                                 </br>
                                 
                                 <div class="form-row DLTICON" style="display:none">
                                  <div class="col ">
                                    <div class="FltRight DELBTNTXT">
                                         Delete Employment Details
                                          <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="CEMI_PRCSID|CEMI_EMPID|APPLEMPDETAILS" class="DELBTN DELETEAPPEMP"/>
                                      </div>    
                                 </div>     
                                </div> 
                                 
                                 <div class="form-row">
		                           <div id="PROPTXTHDR" class="col Btxt10"></div>
		                        </div>
		                        <div class="form-row">
					        	<div class="col Btxt10">ORGANISATION DETAILS</div>
					        </div>
                                 <div class="form-row SEP">
                                    <div class="col-md-6">
                                       <div class="md-form">
                                          <div class="select-radio SEPM">
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input CEMIDBfields OFFTYPE" onclick="GetOfficaddr();" value="Owned" id="OrgOwned" name="CEMI_ORGANIADDR">
                                                <label class="custom-control-label" for="OrgOwned">Owned</label>
                                             </div>
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input CEMIDBfields OFFTYPE" onclick="GetOfficaddr();"  value="Rented" id="OrgRent" name="CEMI_ORGANIADDR">
                                                <label class="custom-control-label" for="OrgRent">Rented</label>
                                             </div>
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input CEMIDBfields OFFTYPE" onclick="GetOfficaddr();" value="Resi-cum-office" id="OrgResOff" name="CEMI_ORGANIADDR">
                                                <label class="custom-control-label" for="OrgResOff">Resi-cum-office</label>
                                             </div>
                                          </div>
										  <label class="mdb-main-label BTxt9">Address type<span class="MndtryAstr">*</span></label> 
                                       </div>
                                    </div>
                                 </div>
                                
                                 </br>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_ORGANINAME" maxlength="30" name="CEMI_ORGANINAME" class="form-control CEMIDBfields IsAlphaFields CEMIMndtry NoSpecialChar">
                                          <label for="CEMI_ORGANINAME" class="">Organization Name<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">    
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_ADDRLINEI" maxlength="30" name="CEMI_ADDRLINEI" class="form-control CEMIDBfields OFFADDR CEMIMndtry AddrNoSpecialChar CEMIMndtry">
                                          <label for="CEMI_ADDRLINEI" class="OADDR">Address Line 1<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_ADDRLINEII" maxlength="30" name="CEMI_ADDRLINEII" class="form-control CEMIDBfields OFFADDR AddrNoSpecialChar">
                                          <label for="CEMI_ADDRLINEII" class="OADDR">Address Line 2</label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_PINCODE" maxlength="6" name="CEMI_PINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'CEMI_STATE'+$(this).closest('.DYNROW').attr('data-row'),'CEMI_CITY'+$(this).closest('.DYNROW').attr('data-row'),'CEMI_STDC'+$(this).closest('.DYNROW').attr('data-row'))" class="form-control OFFADDR IsNumberFields IsPinFielde NoSpecialChar CEMIDBfields CEMIMndtry">
                                          <label for="CEMI_PINCODE" class="OADDR">Pin Code<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_CITY" disabled name="CEMI_CITY" class="form-control OFFADDR CEMIDBfields CEMIMndtry">
                                          <label for="CEMI_CITY" class="OADDR">City<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_STATE"  disabled name="CEMI_STATE" class="form-control OFFADDR CEMIDBfields CEMIMndtry">
                                          <label for="CEMI_STATE" class="OADDR">State<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_LNDMARK" maxlength="20" name="CEMI_LNDMARK" class="form-control OFFADDR IsAlphaFields CEMIDBfields CEMIMndtry">
                                          <label for="CEMI_LNDMARK" class="OADDR">Landmark<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col-md-1 SEP">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_STDC" maxlength="11" style="width:75px" disabled name="CEMI_STDC" class="form-control OFFADDR CEMIDBfields IsNumberFields"> 
                                          <label for="CEMI_STDC" class="OADDR">STD</label>
                                       </div>
                                    </div>
                                    <div class="col-md-5 SEP">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_LNDLINENO" maxlength="11"  name="CEMI_LNDLINENO" class="form-control OFFADDR CEMIDBfields IsNumberFields IsLandlneFields">
                                          <label for="CEMI_LNDLINENO" class="OADDR">Landline No<span class="MndtryAstr"></span></label>
                                       </div>
                                    </div>
                                    <div class="col-md-6 SEP">
                                       <div class="md-form">
                                          <select class=" md-form colorful-select SEPM dropdown-primary CEMIDBfields" onchange="GetNaturBusness(this,'CEMI_NATRBUSINESS','CEMI_CLUSTER')" id="CEMI_INDUSCATRGORY" name="CEMI_INDUSCATRGORY">
                                             <option value="" selected>--Select--</option>
                                             <option value="Accommodation and food service activities">Accommodation and food service activities</option>
                                             <option value="Agriculture">Agriculture</option>
                                             <option value="Agriculture, forestry and fishing">Agriculture, forestry and fishing</option>
                                             <option value="Arts, entertainment and recreation">Arts, entertainment and recreation</option>
                                             <option value="Construction">Construction</option>
                                             <option value="Consultancy / Professional Services">Consultancy / Professional Services</option>
                                             <option value="Education">Education</option>
                                             <option value="Electricity, Gas, Steam">Electricity, Gas, Steam</option>
                                             <option value="Financial and Insurance Activities">Financial and Insurance Activities</option>
                                             <option value="Forestry and Fishery">Forestry and Fishery</option>
                                             <option value="Human health and social work activities">Human health and social work activities</option>
                                             <option value="Information and Communication">Information and Communication</option>
                                             <option value="Job Work">Job Work</option>
                                             <option value="Manufacturing">Manufacturing</option>
                                             <option value="Mining and Quarrying">Mining and Quarrying</option>
                                             <option value="Non Categorised">Non Categorised</option>
                                             <option value="Other Service Activities">Other Service Activities</option>
                                             <option value="Professional, Scientific and Technical Activities">Professional, Scientific and Technical Activities</option>
                                             <option value="Real Estate Activities">Real Estate Activities</option>
                                             <option value="Repair of Motor Vehicles and Motorcycles">Repair of Motor Vehicles and Motorcycles</option>
                                             <option value="Retail / Wholesale Trade">Retail / Wholesale Trade</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">Industry Category<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row SEP">
                                    <div class="col-md-6">
                                       <div class="md-form">
                                          <select class="md-form colorful-select SEPM dropdown-primary CEMIDBfields" onchange="GetClusterBusness('CEMI_INDUSCATRGORY',this,'CEMI_CLUSTER')" id="CEMI_NATRBUSINESS" name="CEMI_NATRBUSINESS">
                                          <option value="" selected>--Select--</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9" >Nature of Business/Industry<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_CLUSTER" disabled name="CEMI_CLUSTER" class="form-control SEPM CEMIDBfields">
                                          <label for="CEMI_CLUSTER" class="">Cluster<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row OEMPONE">
                                    <div class="col">
                                       <div class="md-form">
                                          <div class="custom-control custom-radio custom-control-inline">
                                             <input type="checkbox" class="custom-control-input CEMIDBfields" id="CEMI_KYCDOCAVAIL" name="CEMI_KYCDOCAVAIL">
                                             <label class="custom-control-label" for="CEMI_KYCDOCAVAIL">KYC document available</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col Btxt10">Organization Details</div>
                                 </div>
                                 </br>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_DATOFESTABLIS" maxlength="10" onblur="CompareJointoDOB(this,CBSI_DOB,CEMI_NOOFYERBUSINESS,'CBSI_PROFILE');ExpYearvalid(this,CEMI_NOOFYERBUSINESS);" name="CEMI_DATOFESTABLIS" class="form-control ISFutureDateFields JOINDATE CEMIDBfields CEMIMndtry IsNumberFields  ISDatefield">
                                          <label for="CEMI_DATOFESTABLIS" class="">Date of Establishment<span class="MndtryAstr">*</span></label>
                                          <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"   />
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_NOOFYERBUSINESS" disabled maxlength="2" name="CEMI_NOOFYERBUSINESS" class="form-control IsNumberFields NoSpecialChar CEMIDBfields">
                                          <label for="CEMI_NOOFYERBUSINESS" class="AGE">No. of Years in Business</label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row SEP OEMPONE">
                                    <div class="col-md-6">
                                       <div class="md-form">
                                           <select class="md-form colorful-select dropdown-primary CEMIDBfields EMPI" disabled id="CEMI_NEGATLIST" name="CEMI_NEGATLIST">
                                            <option value="">--Select--</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">Negative List<span class="MndtryAstr"></span></label>
                                      
                                       </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="md-form">
                                         <select class="md-form colorful-select dropdown-primary CEMIDBfields EMPI" disabled id="CEMI_CAUTLIST" name="CEMI_CAUTLIST">
                                         <option value="">--Select--</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">Caution List<span class="MndtryAstr"></span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row SAL OEMPONE">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_TOTEXPER" name="CEMI_TOTEXPER" maxlength="2" onblur="yearsCompare('CEMI_TOTEXPER'+$(this).closest('.DYNROW').attr('data-row'),'CEMI_NOOFYERBUSINESS'+$(this).closest('.DYNROW').attr('data-row'),'Current Experience Years Should not greater than Total Experience years');ExperYrsCompareAge('CBSI_AGE','CEMI_TOTEXPER'+$(this).closest('.DYNROW').attr('data-row'));" class="form-control SALM  CEMIDBfields NoSpecialChar IsNumberFields">
                                          <label for="CEMI_TOTEXPER" class="">Total Experience<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_DESIGNATION" maxlength="25" name="CEMI_DESIGNATION" class="form-control  SALM IsAlphaFields CEMIDBfields">
                                          <label for="CEMI_DESIGNATION" class="">Designation<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row OEMPONE">
                                    <div class="col-md-6 SAL">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_LANDLNO" maxlength="11" name="CEMI_LANDLNO" class="form-control IsNumberFields CEMIDBfields">
                                          <label for="CEMI_LANDLNO" class="">Landline No<span class="MndtryAstr"></span></label>
                                       </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="md-form">
                                          <select class="md-form colorful-select dropdown-primary CEMIDBfields EMPI" id="CEMI_KYCCATEGORY" name="CEMI_KYCCATEGORY">
                                             <option value="">Select</option>
                                             <option value="Low 1">Low</option>
                                             <option value="Medium">Medium</option>
                                             <option value="High">High</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">KYC Category<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
									<div class="col-md-6 SEP OEMPONE">
                                       <div class="md-form">
                                           <select class="md-form colorful-select dropdown-primary SEPM CEMIDBfields EMPI" id="CEMI_PAR" name="CEMI_PAR">
                                            <option value="">--Select--</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">PAR<span class="MndtryAstr">*</span></label>
                                      
                                       </div>
                                    </div>
                                 </div>
                                 <div  class="form-row SEP PRECOMM OEMPONE">
                                    <div class="col">
                                       <div class="md-form">
                                          <div id="ORGSEP" class="select-radio EMPI">
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input CEMIDBfields"  value="Permanent Residence" id="PrePerRes" name="CEMI_PREFCOMMUADDR">
                                                <label class="custom-control-label" for="PrePerRes">Permanent Residence</label>
                                             </div>
                                             <div class="custom-control custom-radio custom-control-inline CEMIDBfields">
                                                <input type="radio" class="custom-control-input CEMIDBfields" value="Current Residence" id="PreCurRes" name="CEMI_PREFCOMMUADDR">
                                                <label class="custom-control-label" for="PreCurRes">Current Residence</label>
                                             </div>
                                             <div class="custom-control custom-radio custom-control-inline CEMIDBfields">
                                                <input type="radio" class="custom-control-input CEMIDBfields" value="Office" id="PreOff" name="CEMI_PREFCOMMUADDR">
                                                <label class="custom-control-label" for="PreOff">Office</label>
                                             </div>
                                          </div>
                                          <label class="mdb-main-label BTxt9">Preferred Communication Address<span class="MndtryAstr">*</span></label>      
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row OEMPONE">
                                    <div class="col">
                                       <div class="md-form">
                                          <div class="custom-control custom-radio custom-control-inline ">
                                             <input type="checkbox" class="custom-control-input CEMIMndtry CEMIDBfields EMPI" disabled id="CEMI_INCCONSID" name="CEMI_INCCONSID">
                                             <label class="custom-control-label" for="CEMI_INCCONSID">Income to be considered<span class="MndtryAstr">*</span></label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 </br>
                                 <div class="form-row">
                                    <div class="col d-flex justify-content-center">
                                       <button type="button" id="Save3" data-aria="LSW_TCUSEMPINFO|CEMI|CEMI_EMPID" data-form="EmployementDetails" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                                       <button type="button" data-aria="LSW_TCUSEMPINFO|CEMI|CEMI_EMPID" data-card="2" data-form="EmployementDetails" data-for="SAVENEXT"  class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
   
              
           
			</div>
  <!-- Accordion card -->
  
  <div class="card NINDU ORG">
    <!-- Card header -->
    <div class="card-header Btxt7" role="tab" id="headingFour4">
      <a class="collapsed Btxt7 AFormaccordion ACCRDISB" data-toggle="collapse" data-multidata="" data-form="Organisation Details" data-aria="LSW_TCUSORGDTL|CDOG|CDOG_CUSID|CBSI_CUSID" data-load="" data-parent="#accordionEx" href="#collapseFour4"
        aria-expanded="false" aria-controls="collapseFour4">
          Organisation Details <i class="fa fa-plus-circle rotate-icon"></i>
      </a>
    </div>
    <!-- Card body -->
    <div id="collapseFour4" class="collapse" role="tabpanel" aria-labelledby="headingFour4"
      data-parent="#accordionEx">
      <div class="card-body px-lg-5 pt-0">
      	<form>
      	 <input type="text" id="CDOG_PRCSID" hidden="hidden" name="CDOG_PRCSID" class="form-control CDOGDBfields">
         <input type="text" id="CDOG_ACTIVITYID" hidden="hidden" name="CDOG_ACTIVITYID" class="form-control CDOGDBfields">
         <input type="text" id="CDOG_CREATEDBY" hidden="hidden" name="CDOG_CREATEDBY" class="form-control CDOGDBfields">
         <input type="text" id="CDOG_DTCREATED" hidden="hidden" name="CDOG_DTCREATED" class="form-control CDOGDBfields">
         <input type="text" id="CDOG_MODIFIEDBY" hidden="hidden" name="CDOG_MODIFIEDBY" class="form-control CDOGDBfields">
         <input type="text" id="CDOG_DTMODIFIED" hidden="hidden"  name="CDOG_DTMODIFIED" class="form-control CDOGDBfields">
         <input type="text" id="CDOG_CUSID" hidden="hidden"  name="CDOG_CUSID" class="form-control CDOGDBfields">
      	    <div class="form-row">
      			<!-- <div class="col" id="CDOG_GSTNUM" name="CDOG_GSTNUM" >GST Number <b>2635276</b>, Tamil Nadu</div> -->
      		</div>
      		</br>
            <div class="form-row">
               <div class="col">
                   <div class="md-form">
                      <input type="text" id="CDOG_CIN" maxlength="22" name="CDOG_CIN" class="form-control IsCINno CDOGDBfields NoSpecialChar">
                      <label for="CDOG_CIN" class="">CIN<span class="MndtryAstr"></span></label>
                   </div>
                </div>
               <div class="col">
                  <div class="md-form">
                    <input type="text" id="CDOG_INCORPDT" name="CDOG_INCORPDT" maxlength="10" class="form-control ISFutureDateFields IsNumberFields ISDatefield CDOGDBfields CDOGMndtry">
                    <label for="CDOG_INCORPDT" class="">Date Of Incorporation<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
              </div>
        </div>
        
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary CDOGDBfields" onchange="GetNaturBusness_V1(this,'CDOG_NATRBUSINESS','CDOG_CLUSTER')" id="CDOG_INDUSCATRGORY" name="CDOG_INDUSCATRGORY">
                  	<option value="" selected >--Select--</option>
  					<option value="Accommodation and food service activities">Accommodation and food service activities</option>
  					<option value="Agriculture">Agriculture</option>
  					<option value="Agriculture, forestry and fishing">Agriculture, forestry and fishing</option>
  					<option value="Arts, entertainment and recreation">Arts, entertainment and recreation</option>
  					<option value="Construction">Construction</option>
  					<option value="Consultancy / Professional Services">Consultancy / Professional Services</option>
  					<option value="Education">Education</option>
  					<option value="Electricity, Gas, Steam">Electricity, Gas, Steam</option>
  					<option value="Financial and Insurance Activities">Financial and Insurance Activities</option>
  					<option value="Forestry and Fishery">Forestry and Fishery</option>
  					<option value="Human health and social work activities">Human health and social work activities</option>
  					<option value="Information and Communication">Information and Communication</option>
  					<option value="Job Work">Job Work</option>
  					<option value="Manufacturing">Manufacturing</option>
  					<option value="Mining and Quarrying">Mining and Quarrying</option>
  					<option value="Non Categorised">Non Categorised</option>
  					<option value="Other Service Activities">Other Service Activities</option>
  					<option value="Professional, Scientific and Technical Activities">Professional, Scientific and Technical Activities</option>
  					<option value="Real Estate Activities">Real Estate Activities</option>
  					<option value="Repair of Motor Vehicles and Motorcycles">Repair of Motor Vehicles and Motorcycles</option>
  					<option value="Retail / Wholesale Trade">Retail / Wholesale Trade</option>
				</select>
				<label class="mdb-main-label BTxt9">Industry Category<span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary CDOGDBfields CDOGMndtry" onchange="GetClusterBusness_V1('CDOG_INDUSCATRGORY',this,'CDOG_CLUSTER')" id="CDOG_NATRBUSINESS" name="CDOG_NATRBUSINESS">
                  	</select>
                   <label class="">Nature Of Business/Industry<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div> 
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="CDOG_CLUSTER" disabled name="CDOG_CLUSTER" class="form-control CDOGDBfields CDOGMndtry">
                    <label for="CDOG_CLUSTER" class="">Cluster<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
               </div>
        </div>
        <div class="form-row">
            <div class="col">
                 <div class="md-form">
                       <div class="custom-control custom-radio custom-control-inline ">
                               <input type="checkbox" class="custom-control-input CDOGDBfields CDOGMndtry" disabled  id="CDOG_INCCONSID" name="CDOG_INCCONSID">
                               <label class="custom-control-label" for="CDOG_INCCONSID">Income to be considered<span class="MndtryAstr">*</span></label>
                       </div>
                 </div>
             </div>
         </div>
      	 <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save4" data-aria="LSW_TCUSORGDTL|CDOG" data-form="OrganisationDetails" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TCUSORGDTL|CDOG" data-form="OrganisationDetails" data-card="3" data-for="SAVENEXT"  class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                </div>
            </div>
       	</form>
      </div>
    </div>
  </div>
   </div>
  <!-- Accordion card -->
</div>
<!-- Accordion wrapper -->

<!-- END -->

                            </div>
                             </div>
 <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Applcnt/LoadSubmit.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Applcnt/Validation.js${DMY13}"></script> 
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
       
        <a type="button" id="Popup" class="btn btn-floating btn-large CusTypeDetl red" style="display:none" data-toggle="modal" data-target="#CUSSELECTIONModal">
            <i class="fa fa-plus"></i>
        </a>
                             
<!-- Modal -->
<div class="modal fade" id="CUSSELECTIONModal" tabindex="-1" role="dialog" aria-labelledby="CUSSELECTIONModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">SELECT DETAILS</div> 
   
   <a href="#">  <img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">  
         <form >
        	</br>
        	</br>
 <div class="form-row">       
      <input type="text" id="NextPageID" hidden="hidden" name="NextPageID" class="form-control">     
  <div class="col">
    <div class="md-form">
      <div class="select-radio COAPMndtry"> 
               <div class="custom-control custom-radio custom-control-inline">
                   <input type="radio" class="custom-control-input" value="Individual" onclick="CheckCusType();" id="CoAppIndi" name="CoAppType">
                   <label class="custom-control-label" for="CoAppIndi">Individual</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" class="custom-control-input" value="Non-Individual" onclick="CheckCusType();" id="CoAppNonIndi" name="CoAppType">
                    <label class="custom-control-label" for="CoAppNonIndi">Non-Individual</label>
              </div>
         </div>
                 <label class="mdb-main-label BTxt9 CLABEL">Co-Applicant Type<span class="MndtryAstr">*</span></label>      
      </div>
    </div>
  </div>
           <div class="form-row Constitution" style="display:none">
           		<div class="col">
           			<div class="md-form">
           			<select id="CoAppConsti" class="mdb-select md-form colorful-select dropdown-primary" name="Constitution" onchange="">
                        <option value="" selected>--Select--</option>
                              <!-- <option value="Partnership firms">Partnership firms</option>
                              <option value="LLP">LLP</option>
                              <option value="HUF">HUF</option>
			      			  <option value="Private Ltd">Private Ltd</option>
			      			  <option value="Public Ltd">Public Ltd</option>
			      			  <option value="Proprietorship">Proprietorship</option>-->
                        	</select>
                        <label class="mdb-main-label BTxt9">Constitution <span class="MndtryAstr">*</span></label>
           			</div>
           		</div>
           </div>
          
            <!-- <div class="form-row">
           		<div class="col">
           			<div class="md-form">
           				<select id="ExistingCus"  onchange="CheckExsCust();" class="mdb-select md-form colorful-select dropdown-primary">
                        <option value="" selected>Select</option>
                               <option value="Yes">Yes</option>
                              <option value="No">No</option>
                         
                        	</select>
                    <label for="cin" class="">Existing Customer<span class=""></span></label>
           			</div>
           		
           		</div>
           </div> 
           
           <div class="form-row  EXCUS">
           		<div class="col">
           			<div class="md-form">
           				<select id="BranchID" class="mdb-select md-form colorful-select dropdown-primary">
                        <option value="" selected>Select</option>
                               <option value="101">101</option>
                              <option value="102">102</option>
                         
                        	</select>
                    <label for="cin" class="">Branch ID<span class=""></span></label>
           			</div>
           		
           		</div>
           </div> 
           
           <div class="form-row EXCUS ">
           		<div class="col">
           			<div class="md-form">

                    <label for="cin" class="">Existing Applicant ID<span class=""></span></label>
           			</div>
           		
           		</div>
           </div>
           <br>
             <div class="form-row EXCUS ">
           		<div class="col">
           			<div class="md-form">
           			   <span id="" class="fa fa-search FieldIcon" onclick="ExstAppNo();"  data-toggle="modal" data-target="#CUSExtngModalLabel"></span>
           				<input type="text" id="ExsCusID" class="form-control">
           			</div>
           		
           		</div> 
           </div>
           
           <div class="form-row">
           	  <div class="col">
           		    <input type="button" style="display:none" class="DashTrg" onclick="FncallFEPDashLrgDataWP(this,'Table2',{spname:'LSW_SGetExistCustDet',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'',MnuId:''},{0:$('#ExsCusID')});" id="BTNAcctRecv" name="BTNAcctRecv" />
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                    </table>
           	  </div>
           </div> -->
           
      <!-- grid  show -->

    <!--Main layout-->
    
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="CusAdd" class="btn btn-yel Btxt2">Done</button>
      </div>
    </div>
    </div>
    </div>
    <script>

 </script>
  </div>

<a type="button" id="MobPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#MobModal">
 <i class="fa fa-plus"></i> </a>
                             
<div class="modal fade" id="MobModal" tabindex="-1" role="dialog" aria-labelledby="MobModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:350px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">Mobile OTP Verification</div> 
   
   <a href="#"><img id="MOBPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
        
      </div>  
      <div class="modal-body">
        
         <div class="">


    <!-- Card body -->
     <div class="">
            
         <form >
        	</br>
        	</br>
           <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
           			  <input type="text" id="RequestId" hidden="hidden" class="form-control">
           			  <input type="text" id="HdnFieldId" hidden="hidden" class="form-control">
           			  <input type="text" maxlength="10" id="MobOTP" class="form-control NoSpecialChar">
                      <label for="cin" class="">Enter the OTP<span class="MndtryAstr">*</span></label>
           			</div>
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
        <button type="button" id="Mobotp" onclick="CheckMobValidKyc('MobOTP','status','CADI_MOBNOIVERIFY','MOBI','','','')" class="btn btn-yel Btxt2">Confirm</button>
      </div>
    </div>
  </div>
  </div>
  
 <a type="button" id="MobIPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#MobIModal">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade" id="MobIModal" tabindex="-1" role="dialog" aria-labelledby="MobIModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">Mobile OTP Verification</div> 
   
   <a href="#"><img id="MOBIPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form >
        	</br>
        	</br>
           <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
           			  <input type="text" id="RequestId" hidden="hidden" class="form-control">
           			  <input type="text" id="HdnFieldId" hidden="hidden" class="form-control">
           			  <input type="text" id="RequestId" hidden="hidden" class="form-control">
           			  <input type="text" id="MobOTP" maxlength="10" class="form-control NoSpecialChar">
                      <label for="cin" class="">Enter the OTP<span class="MndtryAstr">*</span></label>
           			</div>
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
        <button type="button" id="MobIotp" onclick="CheckMobValidKyc('MobOTP','status','CADI_MOBNOIVERIFY',this,'','','')" class="btn btn-yel Btxt2">Confirm</button>
         <button type="button" id="MobIIotp" onclick="CheckMobValidKyc('MobOTP','status','CADI_MOBNOIIVERIFY',this,'','','')" class="btn btn-yel Btxt2">Confirm</button>
      </div>
    </div>
  </div>
  </div>
  

                
                                  <!--   </div>
                                </div>   -->                           