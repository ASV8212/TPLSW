<button type="button" data-Validatearia="Dedupe" data-validatedata="COBI_DEDUPEVERIFY" onclick="PosdxChk('COBI_CUSID','COBI_DEDUPEVERIFY','Co-Applicant','','COBI_CUSFISNAM');"   data-validate="COBI|DEDUPE" class="btn  waves-effect btn-yelInplain btn-sm BTNDedupe liSubpageTabIcons"><i class="fa fa-check"></i>Dedupe Check</button>
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        </br>
                        <div class="">
                            <!--Admin panel-->
                            <div class="admin-panel">
<div class="row">
	<div class="col-lg-12">
		  <ul title="Co-Applicant" data-popup="Yes" class="nav FormPageMultiTab">   	  
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

<!-- Start -->

<!--Accordion wrapper-->
<div class="HiddenBTN">
         <input type="button" style="display:none" class="DashTrg"  id="BTNEMPMULTIDATA" name="BTNEMPMULTIDATA" /><!-- Employment Details -->
      </div>
<div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

  <!-- Accordion card -->
  <div class="card active">

    <!-- Card header -->
    <div class="card-header Btxt7 active" role="tab" id="headingOne1">
      <a data-toggle="collapse" class="Btxt8 AFormaccordion" data-multidata="" data-aria="LSW_TCOCUSBASICINFO|COBI|COBI_CUSID" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
        aria-controls="collapseOne1">       
         Personal Info <i class="fa fa-minus-circle rotate-icon"></i>    
      </a>
    </div>
    <!-- Card body -->
    <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
      data-parent="#accordionEx">
      <div class="card-body px-lg-5 pt-0">
        <form>
        <input type="text" id="COBI_PRCSID" hidden="hidden" name="COBI_PRCSID" class="form-control COBIDBfields">
        <input type="text" id="COBI_ACTIVITYID" hidden="hidden" name="COBI_ACTIVITYID" class="form-control COBIDBfields">
        <input type="text" id="COBI_CREATEDBY" hidden="hidden" name="COBI_CREATEDBY" class="form-control COBIDBfields">
        <input type="text" id="COBI_DTCREATED" hidden="hidden" name="COBI_DTCREATED" class="form-control COBIDBfields">
        <input type="text" id="COBI_MODIFIEDBY" hidden="hidden" name="COBI_MODIFIEDBY" class="form-control COBIDBfields">
        <input type="text" id="COBI_DTMODIFIED" hidden="hidden" name="COBI_DTMODIFIED" class="form-control COBIDBfields">
        <input type="text" id="COBI_CUSID" hidden="hidden" name="COBI_CUSID" class="form-control COBIDBfields">
        <input type="text" id="COBI_CUSTYPE" hidden="hidden" name="COBI_CUSTYPE" class="form-control COBIDBfields">
         <input type="text" id="COBI_DEDUPEVERIFY" hidden="hidden" name="COBI_DEDUPEVERIFY" class="form-control COBIDBfields">
        
          <input type="text" id="COBI_FILESTATUS" hidden="hidden" name="COBI_FILESTATUS" class="form-control COBIDBfields">
        <input type="text" id="COBI_RESCOMPETED" hidden="hidden" name="COBI_RESCOMPETED" class="form-control COBIDBfields">
         <input type="text" id="COBI_FICOMPETED" hidden="hidden" name="COBI_FICOMPETED" class="form-control COBIDBfields">
        <input type="text" id="COBI_CIN" hidden="hidden" name="COBI_CIN" class="form-control COBIDBfields">
		<input type="text" id="COBI_PROFILE" hidden="hidden" name="COBI_PROFILE" class="form-control COBIDBfields"> 
		<input type="text" id="COBI_NATURBUS"  name="COBI_NATURBUS" hidden="hidden"  class="form-control COBIDBfields" value="">
          <input type="text" id="COBI_FETCHFSTNAME" hidden="hidden" name="COBI_FETCHFSTNAME" class="form-control COBIDBfields">
          <input type="text" id="COBI_FETCHLSTNAME" hidden="hidden" name="COBI_FETCHLSTNAME" class="form-control COBIDBfields">
        <input type="text" id="COBI_FETCHDOBNAME" hidden="hidden" name="COBI_FETCHDOBNAME" class="form-control COBIDBfields">
         <input type="text" id="COBI_FETCHFATHNAME" hidden="hidden" name="COBI_FETCHFATHNAME" class="form-control COBIDBfields">
         
           <div class="form-row">
            <div class="col-md-6 ">
           <div class="SWAPTXT BTNHIDE">
           Swap the Co-Applicant
           <img src="ThemeproLO/Common/Images/swap-arrows-refresh.png" style="height:25px;width:25px" data-tab="COBI_PRCSID|COBI_CUSID|CO-APPLICANT" class="BTNHIDE SWAP SWAPAPPLICANT"/>
           </div>    
           </div>  
           <div class="col-md-6">
           <div class="FltRight DELBTNTXT">
           Delete Co-Applicant
           <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="COBI_PRCSID|COBI_CUSID|CO-APPLICANT" class="DELBTN DELETETAP"/>
           </div>    
           </div>     
           </div>
		   
		   
            <div class="Btxt15 COBI_CUSID">Customer ID</div>
        <div class="form-row">
             <div class="col-md-3 INDU">
                 <table class="xdTable tablezoom" cellspacing="2" cellpadding="2" width="100%">
                  <tbody>
                    <tr>
                        <td style="width:75%"><input class="ColumnHeading" border="" disabled id="CUSPHOTO" value="" name="CUSPHOTO" src="" style="margin-top:10px; margin-bottom:5px; height:100px; width:100px; background-color:#f4f4f4; border-radius:5px; border: 1px solid #e4e4e4;" type="image" /></br></td>
                    </tr>
                  </tbody>
                 </table>
                 <table>
                  <tbody>
                  <tr>
                    <td>
                        <input type="file" style="display:none" name="datafile" id="Photo" data-photo="PHOTO" onchange="PhSignFldUpldHndlr(this,'COBI_CUSPHOTO','CUSPHOTO','COBI_','Customer Photo','COBI_CUSID')">
                        <input type="hidden" class="inputTXT DocImg COBIDBfields" data-val="Customer Photo" id="COBI_CUSPHOTO" name="COBI_CUSPHOTO" value="">
                     </td>
                 </tr>
                 </tbody>
                 </table>
                 <!-- <div style="margin-top:10px; margin-bottom:5px; height:100px; width:100px; background-color:#f4f4f4; border-radius:5px; border: 1px solid #e4e4e4;"></div> -->
                 <a type="button" onclick="Click()" class="Btxt4" href="#">Upload Photo</a> 
                 <script>
                   function Click(){$("#Photo").click()}
                 </script>
                </div>
                <div class="col">
                  
                  <div class="md-form" style="margin-top: 50px;">
                    <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields COBIMndtry" onchange="CheckGenter();" id="COBI_TITLE" name="COBI_TITLE">
                  	<option value="" selected>--Select--</option>
  					<option class="INDMiss" value="Mr">Mr</option>
  					<option class="INDMiss" value="Mrs">Mrs</option>
 					 <option class="INDMiss" value="Miss">Miss</option>
 					 <option class="INDMS"  value="M/s">M/s</option>
				</select>
				<label class="mdb-main-label BTxt9">Title<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col INDU">
				
				</div>
               <div class="col-md-6 NINDU" style="margin-top: 50px;">
				    <div class="md-form">
                    <input type="text" id="COBI_UAMNO" maxlength="19" name="COBI_UAMNO" class="form-control IsUpprCse IsUAMFields Udayamfield COBIDBfields">
                    <label for="COBI_UAMNO" class="">Udyam Registration No<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div>
		   <div class="form-row NINDU" >
                <div class="col-md-6 ">
				<div class="">Udyam Registration Certificate Document</div>
                <div class="row UAMN" >
<div class="col-md-8  Formcol-mdLR UAMNupload">
<div class="md-form">
<table><tr>
<td>
<div id="COBI_UPDUAMNOUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(COBI_UPDUAMNO,'COBI_UPDUAMNO','Udyam','Udyam')" class="COBI_UPDUAMNO"  >
    </a> 
<input type="text" id="COBI_UPDUAMNO" data-val="Upload Udyam Registration Certificate" hidden="hidden" data-Validate="COBI_UPDUAMNO"  name="COBI_UPDUAMNO" class="form-control voter File COBIDBfields">
<span class="name1">Upload</span>
 </div>
</td>
</tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter Udyam">
<div class="md-form">
<div class="COBI_UPDUAMNO" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(COBI_UPDUAMNO);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('COBI_UPDUAMNO')" alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div>  
</div>
</div>
			   <div class="col-md-6">
           		<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields" id="COBI_ENTTYPE" name="COBI_ENTTYPE">
                  	<option value="">Select</option>
  					<option value="MICRO">MICRO</option>
  					<option value="MEDIUM">MEDIUM</option>
  					<option value="SMALL">SMALL</option>
				</select>
				<label class="mdb-main-label BTxt9">Enterprises Type<span class="MndtryAstr"></span></label>
             </div>
            </div>
           </div>
		   <div class="form-row">
		 	<div class="col-md-6 GSTF" style="display:none">
                 <div class="md-form">
                     <input type="text" id="COBI_GSTVERIFY"  hidden="hidden" name="COBI_GSTVERIFY" class="form-control GST COBIDBfields">
                     <button type="button" data-Validatearia="COBI_GSTVERIFY" onclick="CheckValidPanKyc('COBI_GSTNUM','COBI_GSTVERIFY','COBI_CUSFISNAM','COBI_CUSTYPE','gstdetailed','COBI_CUSID','COAI_ADDRLINI','COAI_ADDRLINII','','','','COEI_ADDRLINEI','COEI_ADDRLINEII','COBI_NATURBUS');" data-validate="gstin"  class="btn btn-Verify COBI_GSTNUM waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
                     <input type="text" id="COBI_GSTNUM" maxlength="30" disabled name="COBI_GSTNUM" class="form-control datalink GST COBIDBfields NoSpecialChar">
                     <label for="COBI_GSTNUM" class="">GST Number<span class="MndtryAstr"></span></label>
                 </div>
            </div>
         </div>			
         </br>
           <div class="form-row">
                <div class="col-md-6">
                  <div class="md-form">
                  
                    <input type="text" id="COBI_CUSFISNAM" maxlength="25" name="COBI_CUSFISNAM" class="form-control IsAlphaFields IsUpprCse COBIDBfields COBIMndtry">
                    <label for="COBI_CUSFISNAM" class="">First Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div> 
                <div class="col-md-6 INDU">
                  <div class="md-form">
                 
                    <input type="text" id="COBI_CUSLSTNAM"  maxlength="25"  name="COBI_CUSLSTNAM" class="form-control IsAlphaFields IsUpprCse COBIDBfields COBIMndtry">
                    <label for="COBI_CUSLSTNAM" class="">Last Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-6 NINDU">
                  <div class="md-form">
                    <input type="text" id="COBI_CONSTITUTION"  maxlength="25" disabled  name="COBI_CONSTITUTION" class="form-control IsAlphaFields COBIDBfields">
                    <label for="COBI_CONSTITUTION" class="">Constitution Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div>
           <div class="form-row INDU">
           
            <div class="col">
                 
                  <div class="md-form">
                 
                    <input type="text" id="COBI_FATHRNAM"  maxlength="25"  name="COBI_FATHRNAM" class="form-control IsUpprCse COBIDBfields IsAlphaFields">
                    <label for="COBI_FATHRNAM" class="">Father's Name<span class="MndtryAstr">*</span></label>
                  </div>
           	</div>
           	<div class="col">
               
                  <div class="md-form">
          
               <div id="RadINDU" class="select-radio COBIMndtry"> 
    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input COBIDBfields" value="Male" onclick="AppTitle()" id="MaleGen" name="COBI_GENTER">
  <label class="custom-control-label" for="MaleGen">Male</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input COBIDBfields" onclick="AppTitle()" value="Female" id="FemGen" name="COBI_GENTER">
  <label class="custom-control-label" for="FemGen">Female</label>
</div>

<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input COBIDBfields"  onclick="CheckGender();" value="Transgender"  id="TransGen" name="COBI_GENTER">
  <label class="custom-control-label" for="TransGen">Transgender</label>
</div>
<input type="text" id="COBI_GENTER" hidden="hidden" name="COBI_GENTER" class="form-control COBIDBfields">
</div>
                  <label class="mdb-main-label BTxt9">Gender<span class="MndtryAstr">*</span></label>      
                  </div>
                </div>
           </div>
           
           <div class="form-row INDU">
           
            <div class="col">
                  <!-- First name -->
                  <div class="md-form">
                  
                    <input type="text" id="COBI_DOB"  name="COBI_DOB" onblur="AgeVal(this,COBI_AGE);ChkDOBTOJOINDATE();" maxlength="10" class="form-control IsNumberFields ISDatefield COBIDBfields COBIMndtry ">
                    <label for="COBI_DOB" class="">DOB<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"   />
                  </div>
                </div>
                <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                    <input type="text" id="COBI_AGE" disabled name="COBI_AGE" class="form-control COBIDBfields COBIMndtry">
                    <label for="COBI_AGE" class="AGE">Age<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           
           </div>
           
           
            <div class="form-row INDU">
           
            <div class="col">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields COBIMndtry" id="COBI_CATEGORY" name="COBI_CATEGORY">
                  	<option value="" selected >--Select--</option>
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
                  <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields COBIMndtry" onchange="CheckMarStatus();" id="COBI_MARITSTUS" name="COBI_MARITSTUS">
                  	<option value="" selected>--Select--</option>
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
                  <div class="md-form">
                    <input type="text" id="COBI_SPOUSNAME"  maxlength="25" name="COBI_SPOUSNAME" class="form-control COBIDBfields IsAlphaFields NoSpecialChar">
                    <label for="COBI_SPOUSNAME" class="">Spouse Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
             <div class="col-md-6 PROFILE">
                  	<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary PROFILEVAL COBIDBfields COBIMndtry" data-change="COBI_PROFILE" onchange="DataToProfFld(this);CheckProfile();DELEMPDETAILS();" id="COBI_NPROFILE" name="COBI_NPROFILE">
                  	<option value="" selected>--Select--</option>
                  	<option class="GSTSAL" disabled value="Salaried">Salaried</option>
 					 <option value="SEP">SEP</option>
  					<option value="SENP">SENP</option>
 					 <option value="Retired">Retired</option>
 					 <option value="Housewife">Housewife</option>
					 <option value="Student">Student</option>
				</select>
				<label class="mdb-main-label BTxt9">Profile<span class="MndtryAstr">*</span></label>
             </div>
                </div>
				
           </div>
           <div class="form-row INDU">
               <div class="col">
                  <div class="md-form">
                    <input type="text" id="COBI_NOOFDEPEND" name="COBI_NOOFDEPEND" maxlength="2" class="form-control COBIDBfields NoSpecialChar IsNumberFields COBIMndtry">
                    <label for="COBI_NOOFDEPEND" class="">No of Dependents *</label>
                  </div>
                </div>
                <div class="col">
                 <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields COBIMndtry" id="COBI_QUALIFICATION" name="COBI_QUALIFICATION">
                  	  <option value="" selected >--Select--</option>
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
                     <button type="button" id="Save1" data-aria="LSW_TCOCUSBASICINFO|COBI|COBI_CUSID" data-form="PersonalInfo" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button"  data-aria="LSW_TCOCUSBASICINFO|COBI|COBI_CUSID" data-form="PersonalInfo" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
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
      <a class="collapsed Btxt7 AFormaccordion CONLOAD ACCRDISB DedupeSmt" data-multidata="" data-form="Contact Details" data-aria="LSW_TCOCUSADDRINFO|COAI|COAI_CUSID|COBI_CUSID" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
        aria-expanded="false" aria-controls="collapseTwo2">
          Contact Details <i class="fa fa-plus-circle rotate-icon"></i>
      </a>
    </div>

    <!-- Card body -->
    <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
      data-parent="#accordionEx">
      <div class="card-body px-lg-5 pt-0">
        
        <form>
       
         <input type="text" id="COAI_PRCSID" hidden="hidden" name="COAI_PRCSID" class="form-control COAIDBfields">
         <input type="text" id="COAI_ACTIVITYID" hidden="hidden" name="COAI_ACTIVITYID" class="form-control COAIDBfields">
         <input type="text" id="COAI_CREATEDBY" hidden="hidden" name="COAI_CREATEDBY" class="form-control COAIDBfields">
         <input type="text" id="COAI_DTCREATED" hidden="hidden" name="COAI_DTCREATED" class="form-control COAIDBfields">
         <input type="text" id="COAI_MODIFIEDBY" hidden="hidden" name="COAI_MODIFIEDBY" class="form-control COAIDBfields">
         <input type="text" id="COAI_DTMODIFIED" hidden="hidden" name="COAI_DTMODIFIED" class="form-control COAIDBfields">
        
        <input type="text" id="COAI_CUSID" hidden="hidden" name="COAI_CUSID" class="form-control COAIDBfields">
        
        <div class="form-row">
           
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_EMAILID" name="COAI_EMAILID"  maxlength="60"  class="form-control IsEmailFields COAIDBfields">
                    <label for="COAI_EMAILID" class="">Email ID<span class="MndtryAstr"></span></label>
                  </div>
           </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_MOBNOI" maxlength="10" onchange="CheckDupMobNo('COAI_MOBNOI','COAI_MOBNOII','Mobile Number');DupMOBval('COAI_PRCSID','COAI_MOBNOI','COAI_CUSID');" name="COAI_MOBNOI" maxlength="10" class="form-control COAIDBfields IsNumberFields NoSpecialChar IsMobileFields">
                    <label for="COAI_MOBNOI" class="">Mobile Number 1<span class="MndtryAstr"></span></label>
                  </div>
               </div>
          </div>
         <div class="form-row">
                <div class="col-md-6">
                  <div class="md-form">
                     <input type="text" id="COAI_MOBNOII" maxlength="10" name="COAI_MOBNOII" onchange="CheckDupMobNo('COAI_MOBNOII','COAI_MOBNOI','Mobile Number');" maxlength="10" class="form-control COAIDBfields NoSpecialChar IsNumberFields IsMobileFields">
                     <label for="COAI_MOBNOII" class="">Mobile Number 2</label>
                  </div>
                </div>
                <!-- <div class="col">
                 
                  <div class="md-form INDU">
                    <input type="text" id="COAI_OTP" name="COAI_OTP" class="form-control COAIDBfields IsNumberFields">
                    <label for="COAI_OTP" class="">Enter OTP</label>
                  </div>
               </div> -->
        </div>
        <div class="INDU">
        <div class="form-row">
        	<div class="col Btxt10">RESIDENCE ADDRESS</div>
        </div>
        <div class="form-row">
            <div class="col">
            	<div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class=" custom-control-input COAIDBfields RESSTAT" onclick="getSameaApplAddr()"  id="COAI_SAMAPPLADDR" name="COAI_SAMAPPLADDR">
  					<label class="custom-control-label" for="COAI_SAMAPPLADDR">Same as Applicant Address</label>
				</div>
				</div>
            </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_ADDRLINI" name="COAI_ADDRLINI"  maxlength="25" class="form-control APADDR RESSTAT  AddrNoSpecialChar COAIDBfields CAOIMndtry">
                    <label for="COAI_ADDRLINI" class="APDR">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_ADDRLINII"  maxlength="25" name="COAI_ADDRLINII" class="form-control AddrNoSpecialChar APADDR RESSTAT COAIDBfields">
                    <label for="COAI_ADDRLINII" class="APDR">Address Line 2</label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_PINCODE" maxlength="6" name="COAI_PINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'COAI_STATE','COAI_CITY','COAI_STDC')" class="form-control NoSpecialChar RESSTAT APADDR COAIDBfields COAIMndtry IsNumberFields IsPinFielde">
                    <label for="COAI_PINCODE" class="APDR">Pin Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="COAI_CITY" disabled name="COAI_CITY" class="form-control APADDR RESSTAT COAIDBfields COAIMndtry">
                    <label for="COAI_CITY" class="APDR">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_STATE" disabled name="COAI_STATE" class="form-control APADDR RESSTAT COAIDBfields COAIMndtry">
                    <label for="COAI_STATE" class="APDR">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_LNDMARK"  maxlength="20" name="COAI_LNDMARK" class="form-control APADDR IsAlphaFields RESSTAT COAIDBfields COAIMndtry">
                    <label for="COAI_LNDMARK" class="APDR">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col-md-6">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary APADDR COAIDBfields  COAIMndtry" id="COAI_RESIDTYPE" name="COAI_RESIDTYPE">
                  	<option value="" selected >--Select--</option>
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
                        <input type="text" id="COAI_STDC" maxlength="11" style="width:75px"  name="COAI_STDC" class="form-control APADDR COAIDBfields IsNumberFields  IsLandlneFields"> 
                        <label for="COAI_STDC" class="APDR">STD</label>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                    <input type="text" id="COAI_LNDLINENO" maxlength="11"  name="COAI_LNDLINENO" class="form-control APADDR COAIDBfields  IsNumberFields IsLandlneFields">
                    <label for="COAI_LNDLINENO" class="APDR">Landline No</label>
                  </div>
               </div>
        </div>
        <div class="form-row INDU">
            <div class="col">
                  <div class="md-form">
               <input type="text" id="COAI_YEAROFRESID" maxlength="2" name="COAI_YEAROFRESID" class="form-control APADDR COAIDBfields   NoSpecialChar IsNumberFields COAIMndtry">
                    <label for="COAI_YEAROFRESID" class="APDR">Years of Residence<span class="MndtryAstr">*</span></label>
                  </div>
                  
                </div>
                <div class="col">
                  
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary APADDR COAIDBfields " id="COAI_MONTHS" name="COAI_MONTHS">
                  	<option value="" selected >--Select--</option>
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
            <div class="col-md-4">
            	<div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input COAIDBfields" id="COAI_KYCDOCAVAIL" name="COAI_KYCDOCAVAIL">
  					<label class="custom-control-label" for="COAI_KYCDOCAVAIL">KYC document available</label>
				</div>
				</div>
            </div>
			<div class="col-md-2 Formcol-mdLR TxtCenter ADDRVI" style="display:none">
              <div class="md-form">
                   <input type="text" id="COAI_ADDRPROOF1" data-val=""  hidden="hidden" data-Validate="COAI_ADDRPROOF1"  name="COAI_ADDRPROOF1" class="form-control voter File">
                     <div class="COAI_ADDRPROOF1" style="display">  
                    <img src="ThemeproLO/Common/Images/Eyeview.png" title="Address Proof One View"  class="rounded" onclick="GrdDocDwnld('COAI_ADDRPROOF1')" alt="Cinque Terre" width="35" height="25"> </div>
              </div>
            </div> 
            <div class="col-md-6">
            </div>
        </div>
        <div class="form-row">
        	<div class="col-md-4 Btxt10">PERMANENT ADDRESS</div>
			<div class="col-md-2 Formcol-mdLR TxtCenter ADDRVII" style="display:none">
<div class="md-form">
<input type="text" id="COAI_ADDRPROOF2" data-val=""  hidden="hidden" data-Validate="COAI_ADDRPROOF2"  name="COAI_ADDRPROOF2" class="form-control voter File">
<div class="COAI_ADDRPROOF2" style="display">  
<img src="ThemeproLO/Common/Images/Eyeview.png" title="Address Proof Two View"  class="rounded" onclick="GrdDocDwnld('COAI_ADDRPROOF2')" alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div> 
<div class="col-md-6">
</div>
        </div>
          <div class="form-row">
            <div class="col">
            	<div class="md-form">
            	   <div class="select-radio"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input PremAddr   COAIDBfields" onclick="residentaddr();" value="Applicant Permanent Address" id="PermAddr" name="COAI_SAMRESIDADDR">
                          <label class="custom-control-label" for="PermAddr">Applicant Permanent Address</label>
                       </div>
                   </div>
            	<!-- <div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input COAIDBfields" onclick="residentaddr();ChkBoxdisbAppAddr();"  id="COAI_SAMRESIDADDR" name="COAI_SAMRESIDADDR">
  					<label class="custom-control-label active" for="COAI_SAMRESIDADDR">Same as Applicant Permanent Address</label>
				</div>-->
				</div>
            </div>
          <div class="col">
            	<div class="md-form">
            	<div class="select-radio"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input COAIDBfields " onclick="CHKSameCoAppresiaddr();" value="Co-Applicant Residence Address" id="ResiYes" name="COAI_SAMRESIDADDR">
                          <label class="custom-control-label" for="ResiYes">Co-Applicant Residence Address</label>
                       </div>
                   </div>
            	
            	<!-- <div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input COAIDBfields" onclick="CHKSameCoAppresiaddr();ChkBoxdisbCoAppAddr();"  id="COAI_SAMCOAPPRESIDADDR" name="COAI_SAMCOAPPRESIDADDR">
  					<label class="custom-control-label active" for="COAI_SAMCOAPPRESIDADDR">Same as  Co-Applicant Residence Address</label>
				</div>-->
				</div>
            </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_PREMADDRLINI"  maxlength="30" name="COAI_PREMADDRLINI" class="form-control PRADDR AddrNoSpecialChar COAIDBfields COAIMndtry">
                    <label for="COAI_PREMADDRLINI" class="ADDR">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_PERMADDRLINII"  maxlength="30" name="COAI_PERMADDRLINII" class="form-control AddrNoSpecialChar PRADDR COAIDBfields">
                    <label for="COAI_PERMADDRLINII" class="ADDR">Address Line 2</label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_PERMPINCODE" maxlength="6"  name="COAI_PERMPINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'COAI_PERMSTATE','COAI_PERMCITY','COAI_PSTDC')" class="form-control NoSpecialChar PRADDR COAIDBfields COAIMndtry IsNumberFields IsPinFielde">
                    <label for="COAI_PERMPINCODE" class="ADDR">Pin Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_PERMCITY" disabled name="COAI_PERMCITY" class="form-control IsAlphaFields PRADDR COAIDBfields COAIMndtry">
                    <label for="COAI_PERMCITY" class="ADDR">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_PERMSTATE" disabled  name="COAI_PERMSTATE" class="form-control IsAlphaFields PRADDR COAIDBfields COAIMndtry">
                    <label for="COAI_PERMSTATE" class="ADDR">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_PERMLNDMARK"  maxlength="25" name="COAI_PERMLNDMARK" class="form-control PRADDR IsAlphaFields COAIDBfields COAIMndtry">
                    <label for="COAI_PERMLNDMARK" class="ADDR">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col-md-6">
               <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary PRADDR COAIDBfields COAIMndtry" id="COAI_PERMRESIDTYPE" name="COAI_PERMRESIDTYPE">
                  	 <option value="" selected >--Select--</option>
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
                        <input type="text" id="COAI_PSTDC" maxlength="11" style="width:75px"  name="COAI_PSTDC" class="form-control PRADDR COAIDBfields IsNumberFields IsLandlneFields"> 
                        <label for="COAI_PSTDC" class="ADDR">STD</label>
                   </div>
          </div>
          <div class="col-md-5">
              <div class="md-form">
                  <input type="text" id="COAI_PERMLNDLINENO" maxlength="11"  name="COAI_PERMLNDLINENO" class="form-control PRADDR IsNumberFields COAIDBfields">
                  <label for="COAI_PERMLNDLINENO" class="ADDR">Landline No</label>
              </div>
          </div>
        </div>
        <div class="form-row " >
            <div class="col">
                <div class="md-form">
				    <input type="text" id="COAI_PERMYEAROFRESID" maxlength="2"  name="COAI_PERMYEAROFRESID" class="form-control PRADDR COAIDBfields NoSpecialChar IsNumberFields COAIMndtry">
                    <label for="COAI_PERMYEAROFRESID" class="ADDR">Years of Residence<span class="MndtryAstr">*</span></label>
                 </div>
             </div>
                <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary PRADDR COAIDBfields" id="COAI_PERMMONTHS" name="COAI_PERMMONTHS">
                  	<option value="" selected >--Select--</option>
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
        	<div class="col Btxt10">ORGANIZATION ADDRESS</div>
			<div class="col-md-2 Formcol-mdLR TxtCenter ADDRVI" style="display:none">
              <div class="md-form">
                   <input type="text" id="COAI_NIADDRPROOF1" data-val=""  hidden="hidden" data-Validate="COAI_NIADDRPROOF1"  name="COAI_NIADDRPROOF1" class="form-control voter File">
                     <div class="COAI_NIADDRPROOF1" style="display">  
                    <img src="ThemeproLO/Common/Images/Eyeview.png" title=" Address Proof One View"  class="rounded" onclick="GrdDocDwnld('COAI_NIADDRPROOF1')" alt="Cinque Terre" width="35" height="25"> </div>
              </div>
            </div> 
            <div class="col-md-6">
            </div>
        </div>
              
        <div class="form-row">
           
            <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="COAI_ORGADDRLINI"  maxlength="30" name="COAI_ORGADDRLINI" class="form-control AddrNoSpecialChar ORGADD COAIDBfields COAIMndtry">
                    <label for="COAI_ORGADDRLINI" class="">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="COAI_ORGADDRLINII"  maxlength="30" name="COAI_ORGADDRLINII" class="form-control ORGADD AddrNoSpecialChar COAIDBfields">
                    <label for="COAI_ORGADDRLINII" class="">Address Line 2</label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_ORGPINCODE" maxlength="6" name="COAI_ORGPINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'COAI_ORGSTATE','COAI_ORGCITY','COAI_ORGSTDC')" class="form-control ORGADD COAIDBfields NoSpecialChar IsNumberFields IsPinFielde COAIMndtry">
                    <label for="COAI_ORGPINCODE" class="">Pin Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="COAI_ORGCITY" disabled name="COAI_ORGCITY" class="form-control IsAlphaFields COAIDBfields COAIMndtry">
                    <label for="COAI_ORGCITY" class="">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_ORGSTATE" disabled name="COAI_ORGSTATE" class="form-control IsAlphaFields COAIDBfields COAIMndtry">
                    <label for="COAI_ORGSTATE" class="">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_ORGLNDMARK" maxlength="20" name="COAI_ORGLNDMARK" class="form-control ORGADD IsAlphaFields COAIDBfields COAIMndtry">
                    <label for="COAI_ORGLNDMARK" class="">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        
        <div class="form-row">
           
            <div class="col-md-6">
                  
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary COAIDBfields " id="COAI_ORGRESIDTYPE" name="COAI_ORGRESIDTYPE">
                  	<option value="">Select</option>
  					<option value="Self Owned">Self Owned</option>
 					 <option value="Rented">Rented</option>
					  <option value="Leased">Leased</option>
				</select>
				<label class="mdb-main-label BTxt9">Residence Type<span class="MndtryAstr"></span></label>
             </div>
                </div>
                 <div class="col-md-1">
                   <div class="md-form">
                        <input type="text" id="COAI_ORGSTDC" maxlength="4" style="width:75px"  name="COAI_ORGSTDC" class="form-control PRADDR COAIDBfields IsNumberFields"> 
                        <label for="COAI_ORGSTDC" class="">STD</label>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                    <input type="text" id="COAI_ORGLNDLINENO" maxlength="11"  name="COAI_ORGLNDLINENO" class="form-control COAIDBfields IsNumberFields IsLandlneFields">
                    <label for="COAI_ORGLNDLINENO" class="">Landline No</label>
                  </div>
               </div>
           
        </div>
        
        <div class="form-row INDU">
           
            <div class="col">
                  <div class="md-form">
				<input type="text" id="COAI_ORGYEAROFRESID" maxlength="2"  name="COAI_ORGYEAROFRESID" class="form-control RSADDR NoSpecialChar COAIDBfields IsNumberFields">
                    <label for="COAI_ORGYEAROFRESID" class="">Years of Residence<span class="MndtryAstr">*</span></label>
                  </div>
                  </div>
                <div class="col">
                  
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary COAIDBfields" id="COAI_ORGMONTHS" name="COAI_ORGMONTHS">
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
                     <button type="button" data-aria="LSW_TCOCUSADDRINFO|COAI|COAI_CUSID" data-form="ContactDetails" id="save2" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TCOCUSADDRINFO|COAI|COAI_CUSID" data-form="ContactDetails"   data-card="1" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                </div>
            </div>
        </form>
        
        
      </div>
    </div>

  </div>
  <!-- Accordion card -->

  <!-- Accordion card -->
   <div class="card INDU EMP">
            <!-- Card header -->
            <!-- Card body -->
                     <div class="card-header Btxt7" role="tab" id="headingThree3">
                        <a class="collapsed Btxt7 AFormaccordion ACCRDISB  EMPDLOAD"  data-toggle="collapse" data-form="Employment Details" data-load="" data-multidata="BTNEMPMULTIDATA" data-aria="LSW_TCUSEMPINFO|CEMI|CEMI_CUSID|CBSI_CUSID" data-parent="#accordionEx" href="#collapseThree3"
                           aria-expanded="true" aria-controls="collapse1">
                        Employment Details<i class="fa fa-plus-circle rotate-icon"></i>
                        </a>
                     </div>
                   
                     <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
                        data-parent="#accordionEx">
                        
                         <span class="HyperControls FltRight">
                        <a onclick="AddPageMultiData('',$('#COBI_PRCSID').val(),'','BankDetail1','COEIDBfields');RmoveEmpFlds();CheckPan();" class="Btxt4 FltRight ADDBTN"  href="#">+ Add Employment</a>
                        <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                     </span>
                         </br>
                        <div data-for="BankDetail1" class="BankDetail1"> 
                        </div>
                        <div class="DynamicPageGrid" data-val="PROPTXTHDR|Employment" id="BankDetail1" style="display:none">
                           <div class="card-body px-lg-5 pt-0 BSbrd DYNROW">
                              <form>
                                 <input type="text" id="COEI_PRCSID" hidden="hidden" name="COEI_PRCSID" class="form-control COEIDBfields">
                                 <input type="text" id="COEI_ACTIVITYID" hidden="hidden" name="COEI_ACTIVITYID" class="form-control COEIDBfields">
                                 <input type="text" id="COEI_CREATEDBY" hidden="hidden" name="COEI_CREATEDBY" class="form-control COEIDBfields">
                                 <input type="text" id="COEI_DTCREATED" hidden="hidden" name="COEI_DTCREATED" class="form-control COEIDBfields">
                                 <input type="text" id="COEI_MODIFIEDBY" hidden="hidden" name="COEI_MODIFIEDBY" class="form-control COEIDBfields">
                                 <input type="text" id="COEI_DTMODIFIED" hidden="hidden" name="COEI_DTMODIFIED" class="form-control COEIDBfields">
                                 <input type="text" id="COEI_CUSID" hidden="hidden" name="COEI_CUSID" class="form-control COEIDBfields">
                                 <input type="text" id="COEI_EMPID"   hidden="hidden" name="COEI_EMPID" class="form-control COEIDBfields" value="">
								  <input type="text" id="COEI_OFFICESTATUS"   hidden="hidden" name="COEI_OFFICESTATUS" class="form-control COEIDBfields" value="">
                                 </br>
                                 
                                 <div class="form-row DLTICON" style="display:none">
           <div class="col ">
           <div class="FltRight DELBTNTXT ">
           Delete Employment Details
           <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="COEI_PRCSID|COEI_EMPID|COAPPEMPDETAILS" class="DELBTN  DELETECOAPPEMP"/>
           </div>    
           </div>     
           </div> 
                <div class="form-row">
                                    <div id="PROPTXTHDR" class="col Btxt10"></div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col Btxt10">ORGANISATION ADDRESS</div>
                                 </div>
                                 <div class="form-row SEP">
                                    <div class="col">
                                       <div class="md-form">
                                          <div class="select-radio SEPM">
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input COEIDBfields OFFTYPE" value="Owned" onclick="GetOfficaddr()" id="OrgOwned" name="COEI_ORGANIADDR">
                                                <label class="custom-control-label" for="OrgOwned">Owned</label>
                                             </div>
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input COEIDBfields OFFTYPE" value="Rented" onclick="GetOfficaddr()" id="OrgRent" name="COEI_ORGANIADDR">
                                                <label class="custom-control-label" for="OrgRent">Rented</label>
                                             </div>
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input COEIDBfields OFFTYPE" onclick="GetOfficaddr()" value="Resi-cum-office" id="OrgResOff" name="COEI_ORGANIADDR">
                                                <label class="custom-control-label" for="OrgResOff">Resi-cum-office</label>
                                             </div>
                                          </div>
										  <label class="mdb-main-label BTxt9">Address type<span class="MndtryAstr">*</span></label> 
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row" style="display:none">
                                    <div class="col COEIDBfields" id="COEI_GSTNUM" name="COEI_GSTNUM">GST Number <b>2635276</b>, Tamil Nadu</div> 
                                 </div>
                                 </br>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_ORGANINAME" name="COEI_ORGANINAME"  maxlength="25" class="form-control COEIDBfields IsAlphaFields NoSpecialChar COEIMndtry">
                                          <label for="COEI_ORGANINAME" class="">Organization Name<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_ADDRLINEI" maxlength="30" name="COEI_ADDRLINEI" class="form-control OFFADDR AddrNoSpecialChar COEIDBfields COEIMndtry">
                                          <label for="COEI_ADDRLINEI" class="OADDR">Address Line 1<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_ADDRLINEII" maxlength="30" name="COEI_ADDRLINEII" class="form-control OFFADDR AddrNoSpecialChar COEIDBfields">
                                          <label for="COEI_ADDRLINEII" class="OADDR">Address Line 2</label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_PINCODE" maxlength="6" name="COEI_PINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'COEI_STATE'+$(this).closest('.DYNROW').attr('data-row'),'COEI_CITY'+$(this).closest('.DYNROW').attr('data-row'),'COEI_STDC'+$(this).closest('.DYNROW').attr('data-row'))" class="form-control COEIDBfields COEIMndtry NoSpecialChar OFFADDR IsNumberFields IsPinFielde">
                                          <label for="COEI_PINCODE" class="OADDR">Pin Code<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_CITY" disabled name="COEI_CITY" class="form-control OFFADDR COEIDBfields COEIMndtry">
                                          <label for="COEI_CITY" class="OADDR">City<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_STATE" disabled name="COEI_STATE" class="form-control OFFADDR COEIDBfields COEIMndtry">
                                          <label for="COEI_STATE" class="OADDR">State<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_LNDMARK" maxlength="20" name="COEI_LNDMARK" class="form-control IsAlphaFields OFFADDR COEIDBfields COEIMndtry">
                                          <label for="COEI_LNDMARK" class="OADDR">Landmark<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col-md-1 SEP">
                                       <div class="md-form">
                                          <input type="text" id="COEI_STDC" maxlength="11" style="width:75px" disabled name="COEI_STDC" class="form-control OFFADDR COEIDBfields IsNumberFields"> 
                                          <label for="COEI_STDC" class="OADDR">STD</label>
                                       </div>
                                    </div>
                                    <div class="col-md-5 SEP">
                                       <div class="md-form">
                                          <input type="text" id="COEI_LNDLINENO" maxlength="11"  name="COEI_LNDLINENO" class="form-control COEIDBfields OFFADDR IsNumberFields IsLandlneFields ">
                                          <label for="COEI_LNDLINENO" class="OADDR">Landline No</label>
                                       </div>
                                    </div>
                                    <div class="col-md-6 SEP">
                                       <div class="md-form">
                                          <select class="md-form colorful-select dropdown-primary COEIDBfields SEPM" onchange="GetNaturBusness(this,'COEI_NATRBUSINESS','COEI_CLUSTER')"  id="COEI_INDUSCATRGORY" name="COEI_INDUSCATRGORY">
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
                                 </div>
                                 <div class="form-row SEP">
                                    <div class="col-md-6">
                                       <div class="md-form">
                                          <select class="md-form colorful-select dropdown-primary COEIDBfields SEPM" onchange="GetClusterBusness('COEI_INDUSCATRGORY',this,'COEI_CLUSTER')"  id="COEI_NATRBUSINESS" name="COEI_NATRBUSINESS">
                                          <option value="" selected>--Select--</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9" >Nature of Business/Industry<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="md-form">
                                          <input type="text" id="COEI_CLUSTER" disabled name="COEI_CLUSTER" class="form-control SEPM COEIDBfields">
                                          <label for="COEI_CLUSTER" class="">Cluster<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row OEMPONE">
                                    <div class="col">
                                       <div class="md-form">
                                          <div class="custom-control custom-radio custom-control-inline">
                                             <input type="checkbox" class="custom-control-input COEIDBfields" id="COEI_KYCDOCAVAIL" name="COEI_KYCDOCAVAIL">
                                             <label class="custom-control-label" for="COEI_KYCDOCAVAIL">KYC document available</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col Btxt10">ORGANISATION DETAILS</div>
                                 </div>
                                 </br>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_DATOFESTABLIS" maxlength="10" onblur="CompareJointoDOB(this,COBI_DOB,COEI_NOOFYERBUSINESS,'COBI_PROFILE');ExpYearvalid(this,COEI_NOOFYERBUSINESS);" name="COEI_DATOFESTABLIS" class="form-control ISFutureDateFields JOINDATE COEIDBfields IsNumberFields  ISDatefield ">
                                          <label for="COEI_DATOFESTABLIS" class="">Date of Establishment<span class="MndtryAstr">*</span></label>
                                          <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_NOOFYERBUSINESS" disabled maxlength="2" name="COEI_NOOFYERBUSINESS" class="form-control NoSpecialChar IsNumberFields COEIDBfields">
                                          <label for="COEI_NOOFYERBUSINESS" class="AGE">No. of Years in Business</label>
                                       </div>
                                    </div>
                                 </div>
                                 
                                 
                                 <div class="form-row SEP OEMPONE">
                                    <div class="col">
                                       <div class="md-form">
                                          <select class="md-form colorful-select dropdown-primary COEIDBfields EMPI" disabled id="COEI_NEGATLIST" name="COEI_NEGATLIST">
                                            <option value="">--Select--</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">Negative List<span class="MndtryAstr"></span></label>
                                      
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                         <select class="md-form colorful-select dropdown-primary COEIDBfields EMPI" disabled id="COEI_CAUTLIST" name="COEI_CAUTLIST">
                                          <option value="">--Select--</option>
                                         </select>
                                          <label class="mdb-main-label BTxt9">Caution List<span class="MndtryAstr"></span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row SAL OEMPONE">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_TOTEXPER" name="COEI_TOTEXPER" maxlength="2" onblur="yearsCompare('COEI_TOTEXPER'+$(this).closest('.DYNROW').attr('data-row'),'COEI_NOOFYERBUSINESS'+$(this).closest('.DYNROW').attr('data-row'),'Current Experience Years Should not greater than Total Experience years');ExperYrsCompareAge('COBI_AGE','COEI_TOTEXPER'+$(this).closest('.DYNROW').attr('data-row'));" class="form-control SALM   COEIDBfields NoSpecialChar IsNumberFields">
                                          <label for="COEI_TOTEXPER" class="">Total Experience<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_DESIGNATION" maxlength="25"  name="COEI_DESIGNATION" class="form-control  SALM IsAlphaFields COEIDBfields">
                                          <label for="COEI_DESIGNATION" class="">Designation<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row OEMPONE">
                                    <div class="col-md-6 SAL">
                                       <div class="md-form">
                                          <input type="text" id="COEI_LANDLNO" maxlength="11" name="COEI_LANDLNO" class="form-control  IsNumberFields COEIDBfields">
                                          <label for="COEI_LANDLNO" class="">Landline No<span class="MndtryAstr"></span></label>
                                       </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="md-form">
                                          <select class="md-form colorful-select dropdown-primary COEIDBfields EMPI" id="COEI_KYCCATEGORY" name="COEI_KYCCATEGORY">
                                             <option value="">Select</option>
                                             <option value="Low">Low</option>
                                             <option value="Medium">Medium</option>
                                             <option value="High">High</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">KYC Category<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
									<div class="col-md-6 SEP OEMPONE">
                                       <div class="md-form">
                                           <select class="md-form colorful-select dropdown-primary SEPM COEIDBfields EMPI" id="COEI_PAR" name="COEI_PAR">
                                            <option value="">--Select--</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">PAR<span class="MndtryAstr">*</span></label>
                                      
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row PRECOMM SEP OEMPONE">
                                    <div class="col">
                                       <div class="md-form">
                                          <div  id="ORGSEP" class="select-radio EMPI">
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input COEIDBfields" value="Permanent Residence" id="PrePerRes" name="COEI_PREFCOMMUADDR">
                                                <label class="custom-control-label" for="PrePerRes">Permanent Residence</label>
                                             </div>
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input COEIDBfields" value="Current Residence" id="PreCurRes" name="COEI_PREFCOMMUADDR">
                                                <label class="custom-control-label" for="PreCurRes">Current Residence</label>
                                             </div>
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input COEIDBfields" value="Office" id="PreOff" name="COEI_PREFCOMMUADDR">
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
                                          <div class="custom-control custom-radio custom-control-inline">
                                             <input type="checkbox" class="custom-control-input COEIDBfields" disabled id="COEI_INCCONSID" name="COEI_INCCONSID" >
                                             <label class="custom-control-label" for="COEI_INCCONSID">Income to be considered</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 </br>
                                 <div class="form-row">
                                    <div class="col d-flex justify-content-center">
                                       <button type="button" id="save3" data-aria="LSW_TCOCUSEMPINFO|COEI|COEI_EMPID" data-form="EmployementDetails"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                                       <button type="button" data-aria="LSW_TCOCUSEMPINFO|COEI|COEI_EMPID" data-card="2" data-form="EmployementDetails" data-for="SAVENEXT"  class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                                    </div>
                                 </div>
                              </form>
                  </div>
               </div>
            </div>
            <!-- Card body -->
         </div>     
  <div class="card NINDU ORG">

    <!-- Card header -->
    <div class="card-header Btxt7" role="tab" id="headingFour4">
      <a class="collapsed Btxt7 AFormaccordion ACCRDISB  OrgDetlShip" data-form="Organisation Details" data-toggle="collapse" data-multidata="" data-aria="LSW_TCUSORGDTLCOAPLCT|COOA|COOA_CUSID|COBI_CUSID" data-load="" data-parent="#accordionEx" href="#collapseFour4"
        aria-expanded="false" aria-controls="collapseFour4">
          Organisation Details <i class="fa fa-plus-circle rotate-icon"></i>
      </a>
    </div> 

    <!-- Card body -->
    <div id="collapseFour4" class="collapse" role="tabpanel" aria-labelledby="headingFour4"
      data-parent="#accordionEx">
      <div class="card-body px-lg-5 pt-0">
      
      	<form>
      	 <input type="text" id="COOA_PRCSID" hidden="hidden" name="COOA_PRCSID" class="form-control COOADBfields">
         <input type="text" id="COOA_ACTIVITYID" hidden="hidden" name="COOA_ACTIVITYID" class="form-control COOADBfields">
         <input type="text" id="COOA_CREATEDBY" hidden="hidden" name="COOA_CREATEDBY" class="form-control COOADBfields">
         <input type="text" id="COOA_DTCREATED" hidden="hidden" name="COOA_DTCREATED" class="form-control COOADBfields">
         <input type="text" id="COOA_MODIFIEDBY" hidden="hidden" name="COOA_MODIFIEDBY" class="form-control COOADBfields">
         <input type="text" id="COOA_DTMODIFIED" hidden="hidden"  name="COOA_DTMODIFIED" class="form-control COOADBfields">
         
         <input type="text" id="COOA_CUSID" hidden="hidden"  name="COOA_CUSID" class="form-control COOADBfields">
         
   
      	    <div class="form-row">
      			<!-- <div class="col" id="COOA_GSTNUM" name="COOA_GSTNUM" >GST Number <b>2635276</b>, Tamil Nadu</div>-->
      		</div>
      		</br>
        <div class="form-row">
                <div class="col-md-6">
                   <div class="md-form">
                     <input type="text" id="COOA_CIN" name="COOA_CIN" maxlength="22" class="form-control IsCINno COOADBfields NoSpecialChar">
                     <label for="COOA_CIN" class="">CIN<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="col-md-6">
                  <div class="md-form">
                    <input type="text" id="COOA_INCORPDT" maxlength="10"  name="COOA_INCORPDT" class="form-control ISFutureDateFields COOADBfields IsNumberFields ISDatefield COOAMndtry ">
                    <label for="COOA_INCORPDT" class="">Date Of Incorporation<span class="MndtryAstr">*</span></label>
                  <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"   />
                  </div>
               </div>
        </div>
        <div class="form-row"> 
            <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary COOADBfields COOAMndtry" onchange="GetNaturBusness_V1(this,'COOA_NATRBUSINESS','COOA_CLUSTER')" id="COOA_INDUSCATRGORY" name="COOA_INDUSCATRGORY">
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
                   <select class="mdb-select md-form colorful-select dropdown-primary COOADBfields COOAMndtry" onchange="GetClusterBusness_V1('COOA_INDUSCATRGORY',this,'COOA_CLUSTER')"  id="COOA_NATRBUSINESS" name="COOA_NATRBUSINESS">
                  	
                  	</select>
                    <label class="">Nature Of Business/Industry<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col"> 
                  <div class="md-form">
                    <input type="text" id="COOA_CLUSTER" disabled name="COOA_CLUSTER" class="form-control COOADBfields COOAMndtry">
                    <label for="COOA_CLUSTER" class="">Cluster<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
               </div>
        </div>
        <div class="form-row">
                 <div class="col">
                     <div class="md-form">
                         <div class="custom-control custom-radio custom-control-inline ">
                              <input type="checkbox" class="custom-control-input COOADBfields" disabled  id="COOA_INCCONSID" name="COOA_INCCONSID">
                              <label class="custom-control-label" for="COOA_INCCONSID">Income to be considered<span class="MndtryAstr"></span></label>
                         </div>
                    </div>
               </div>
         </div>
      	    <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save4" data-aria="LSW_TCUSORGDTLCOAPLCT|COOA|COOA_CUSID" data-form="OrganisationDetails"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TCUSORGDTLCOAPLCT|COOA|COOA_CUSID" data-form="OrganisationDetails" data-card="3" data-for="SAVENEXT" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                </div>
            </div>
       	</form>
      </div>
    </div>
  </div>
  <!-- Accordion card -->

</div>
<!-- Accordion wrapper -->

<!-- END -->


 <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/CoApplcnt/LoadSubmit.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/CoApplcnt/Validation.js${DMY13}"></script> 
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
                            </div>
                             </div>
   
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
                         <input type="radio" class="custom-control-input" value="Non-Individual"  onclick="CheckCusType();" id="CoAppNonIndi" name="CoAppType">
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
           			<select id="CoAppConsti" class="mdb-select md-form colorful-select dropdown-primary" id="Constitution" name="Constitution" onchange="">
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

                    <label for="cin" class="">Existing Customer ID<span class=""></span></label>
           			</div>
           		
           		</div>
           </div>
           <br>
             <div class="form-row EXCUS ">
           		<div class="col">
           			<div class="md-form">
           			   <span id="" class="fa fa-search FieldIcon" onclick="ExstCusDetl();"  data-toggle="modal" data-target="#CUSExtngModalLabel"></span>
           				<input type="text" id="ExsCusID" class="form-control">
           			</div>
           		
           		</div>  
           </div> -->
           <div class="form-row">
           	  <div class="col">
           		    <input type="button" style="display:none" class="DashTrg" onclick="FncallFEPDashLrgDataWP(this,'Table2',{spname:'LSW_SGetExistCustDet',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'',MnuId:''},{0:$('#ExsCusID')});" id="BTNEXTCOAPPL" name="BTNEXTCOAPPL" />
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                    </table>
           	  </div>
           </div>       
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
  
  
 
  
  <script>
 
 </script>
</div>                             
                                  <!--   </div>
                                </div>   -->                           