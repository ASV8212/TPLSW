<!--<div class="HyperControls">-->
 
<!--</div>-->
<button type="button" data-Validatearia="Dedupe" data-Validatedata="CBSI_DEDUPEVERIFY" onclick="PosdxChk('CBSI_CUSID','CBSI_CUSTYPE','CBSI_DEDUPEVERIFY','Applicant','CBSI_EXISTLONID','CBSI_CUSFISNAM');" data-validate="CBSI|DEDUPE" class="btn  waves-effect CBSI_DEDUPEVERIFY btn-yelInplain btn-sm BTNDedupe liSubpageTabIcons"><i class="fa fa-check"></i>Dedupe Check</button>
<button type="button" class="btn  waves-effect  btn-yelInplain btn-sm liSubpageTabIcons" onclick="viewposidex('CBSI_CUSID','CBSI_CUSTYPE','CBSI_DEDUPEVERIFY','Applicant','CBSI_EXISTLONID','CBSI_CUSFISNAM')"><i class="fa fa-eye"></i>View Dedupe</button>
  <!--<span class="HyperControls FltRight" >
		               <a onclick="ViewDedupe();" class="Btxt4 ADDBTN FltRight"  href="#">View Dedupe</a>
		              
		            </span>-->
       
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
		
		<input type="text" id="CBSI_RESCOMPETED"  name="CBSI_RESCOMPETED" hidden="hidden"  class="form-control CBSIDBfields" value="">
		<input type="text" id="CBSI_FICOMPETED"  name="CBSI_FICOMPETED" hidden="hidden"  class="form-control CBSIDBfields" value="">
		<input type="text" id="CBSI_FILESTATUS"  name="CBSI_FILESTATUS" hidden="hidden"  class="form-control CBSIDBfields" value="">
		
		<input type="text" id="CBSI_EXISTLONID" hidden="hidden" name="CBSI_EXISTLONID" class="form-control CBSIDBfields">

        <input type="text" id="CBSI_APPLCNTDATE"  name="CBSI_APPLCNTDATE" hidden="hidden"  class="form-control CBSIDBfields" value="">
		<input type="text" id="CBSI_BUSINESSDT"  name="CBSI_BUSINESSDT" hidden="hidden"  class="form-control CBSIDBfields" value="">
		
		<input type="text" id="CBSI_PROFILE"  name="CBSI_PROFILE" hidden="hidden"  class="form-control CBSIDBfields" value="">
		<input type="text" id="CBSI_CUSPHOTOPEC"  name="CBSI_CUSPHOTOPEC" hidden="hidden"  class="form-control CBSIDBfields" value="">
		
		<input type="text" id="CBSI_RPTID"  name="CBSI_RPTID" hidden="hidden"  class="form-control CBSIDBfields" value="">
		<input type="text" id="CBSI_CURUSROLE"  name="CBSI_CURUSROLE" hidden="hidden"  class="form-control CBSIDBfields" value="">
		<input type="text" id="CBSI_NATURBUS"  name="CBSI_NATURBUS" hidden="hidden"  class="form-control CBSIDBfields" value="">
		<input type="text" id="CBSI_IMGSCORE"  name="CBSI_IMGSCORE" hidden="hidden"  class="form-control CBSIDBfields" value="">
		
		<input type="text" id="CBSI_GSTMULTI"  name="CBSI_GSTMULTI" hidden="hidden"  class="form-control CBSIDBfields" value="">
		
		
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
                        <input type="file" style="display:none" name="datafile" id="Photo" data-photo="PHOTO" data-field="CBSI_CUSFISNAM|CBSI_CUSLSTNAM|CBSI_CUSTYPE|CBSI_CUSID|CBSI_IMGSCORE|"  onchange="PhSignFldUpldHndlr(this,'CBSI_CUSPHOTO','CUSPHOTO','CBSI_','Customer Photo','CBSI_CUSID');CheckKYCUPLOADDOC(this,'CBSI_CUSPHOTO','CBSI_CUSPHOTOPEC','FACE LIVENESS')">
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
				 <div class="col INDU">
				    <div class="ImgScore">
					   Image Score : 
					</div>
                </div>
                <div class="col-md-6">
                  <div class="md-form" style="margin-top: 50px;">
                    <select class="mdb-select md-form colorful-select dropdown-primary CBSIDBfields CBSIMndtry" onchange="CheckGenter(); ChkApProf();" id="CBSI_TITLE" name="CBSI_TITLE">
                  	<option value="">Select</option>
  					<option class="INDMiss" value="Mr">Mr</option>
  					<option class="INDMiss" value="Mrs">Mrs</option>
 					 <option class="INDMiss" value="Miss">Miss</option>
 					 <option  class="INDMS"   value="M/s">M/s</option>
					 <option class="INDMiss" value="NA">NA</option>
				</select>
				<label class="mdb-main-label BTxt9">Title<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				
				</br>
           </div>
           </br>
		   <div class="form-row">
				<div class="col-md-6">
						<div class="md-form" >
							<select class="mdb-select md-form colorful-select dropdown-primary CBSIDBfields CBSIMndtry" onchange="Checkborrower();" id="CBSI_BORROWER" name="CBSI_BORROWER">
								<option value="">Select</option>
								<option value="Yes">Yes</option>
								<option value="No">No</option>
							</select>
							<label class="mdb-main-label BTxt9">Is borrower Classified under MSME<span class="MndtryAstr">*</span></label>
						</div>
				</div>
<!--/* 			  	<div class="col-md-6 NINDU">
                 <div class="md-form">
                    <div id="gstRAD" class="select-radio NINDM"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input CBSIDBfields"  onclick="CheckGstNumber()" value="Yes" id="GSTYes" name="CBSI_GST">
                          <label class="custom-control-label" for="GSTYes">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input CBSIDBfields" onclick="CheckGstNumber()" value="No" id="GSTNo" name="CBSI_GST">
                           <label class="custom-control-label" for="GSTNo">No</label>
                       </div>
             
                   <label class="mdb-main-label BTxt9">GST Registered <span class="MndtryAstr">*</span></label>      
               </div>
			</div>
		  </div> */-->
		  
		  		 <div class="col-md-6 NINDU">
                 <div class="md-form">
                    <div id="gstRAD" class="select-radio NINDM"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input  GYES CBSIDBfields"  onclick="CheckGstNumber()" value="Yes" id="GSTYes" name="CBSI_GST">
                          <label class="custom-control-label" for="GSTYes">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input GNO CBSIDBfields" onclick="CheckGstNumber()" value="No" id="GSTNo" name="CBSI_GST">
                           <label class="custom-control-label" for="GSTNo">No</label>
                       </div>
                   </div>
                   <label class="mdb-main-label BTxt9">GST Registered <span class="MndtryAstr">*</span></label>      
               </div>
			</div>
			
			
		</div>
		 <!--  <div class="form-row">
		   <div class="col-md-6 INDUI" style="margin-top: 50px;" >
				    <div class="md-form">
                    <input type="text"  maxlength="19" class="form-control IsUpprCse IsUAMFields Udayamfield  CBSIDBfields" id="CBSI_UAMNO"  name="CBSI_UAMNO">
                    <label for="CBSI_UAMNOI" class="">Udyam Registration No<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
		   
		   </div>
		   -->
		   
		   
		   <div class="form-row" >
			   <div class="col-md-6 GSTAPP" style="display:none">
				  <div class="md-form ">
                    <select class="mdb-select md-form colorful-select dropdown-primary CBSIDBfields" onchange="Checkgstapp();"  id="CBSI_GSTAPPLILE" name="CBSI_GSTAPPLILE">
                  	<option value="">Select</option>
  					<option value="Single">Single</option>
  					<option value="Multiple">Multiple</option>
				</select>
				<label class="mdb-main-label BTxt9">GST Applicable In Multiple States<span class="MndtryAstr"></span></label>
                  </div>
                </div>
 
			   <div class="col-md-6 EXEM" style="display:none">
				  <div class="md-form ">
                    <select class="mdb-select md-form colorful-select dropdown-primary CBSIDBfields"   id="CBSI_EXEMPTED" name="CBSI_EXEMPTED">
                  	<option value="">Select</option>
  					<option value="Yes">Yes</option>
  					<option value="No">No</option>
				</select>
				<label class="mdb-main-label BTxt9">GST Exempted<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				</div>
                
                <div class="form-row APPSHOW" >
					<div class="col-md-6">
						<div class="md-form">
						  <div class="custom-control custom-radio custom-control-inline ">
							<input type="checkbox" class="custom-control-input  CBSIDBfields" onchange="Udyamcheckorg();" id="CBSI_ECUAMNO" name="CBSI_ECUAMNO">
							<label class="custom-control-label" for="CBSI_ECUAMNO">Applied for Udyam Number<span class="MndtryAstr"></span></label>
						  </div>
					   </div>
					</div>
					<div class="col-md-6 " >
                    <div class="md-form">
                       <input type="text" id="CBSI_UDYAMVERI" hidden="hidden" maxlength="30" name="CBSI_UDYAMVERI" class="form-control  CBSIDBfields">
                       <button type="button" data-Validatearia="CBSI_UDYAMVERI" onclick="CheckKYCDetl(this,'CBSI_EUAMNO','CBSI_UDYAMVERI','UDYAM');Udyamcheckorg();" data-field="CBSI_UDYAMVERI|CBSI_UPDUAMNO|CBSI_CUSTYPE|CBSI_CUSID|MULTIEMP|UdyamView1|CBSI_CUSFISNAM|CDOG_SECTOR|CDOG_INCORPDT|CEMI_ORGANINAME1|CEMI_DATOFESTABLIS1" data-validate="gstin" class="btn btn-Verify CBSI_UDYAMVERI waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV veri">Verify</button>
					   <input type="text" id="CBSI_EUAMNO" maxlength="60" data-link="CBSI_EUAMNO|CBSI_UDYAMVERI|Udyam|Multi|CBSI_CUSID|CBSI_UDYAMVERI|CBSI_UPDUAMNO|"  name="CBSI_EUAMNO" class="form-control datalink IsUpprCse IsUAMFields Udayamfield URNFld  CBSIDBfields">
                       <label for="CBSI_EUAMNO" class="">Udyam Registration No<span class="MndtryAstr"></span></label>
                    </div>
                 </div>
			   </div>  
                
                
			<div class="form-row GSTF" style="display:none">

		
				<div class="col-md-6 " >
                   <div class="md-form">
                     <input type="text" id="CBSI_GSTVERIFY" hidden="hidden" maxlength="30" name="CBSI_GSTVERIFY" class="form-control GST CBSIDBfields">
                    <!-- <button type="button" data-Validatearia="CBSI_GSTVERIFY" onclick="CheckKYCDetl(this,'CBSI_GSTVERIFY','CBSI_GSTNUM','GST');" data-validate="gstin"  class="btn btn-Verify CBSI_GSTNUM waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
                     <input type="text" id="CBSI_GSTNUM" maxlength="15" disabled name="CBSI_GSTNUM" class="form-control IsUpprCse IsGstValid GST NoSpecialChar CBSIDBfields">
                     <label for="CBSI_GSTNUM" class="">GST Number<span class="MndtryAstr"></span></label>
                   </div>
                </div>		  
           </div>
	<div class="form-row " >
		<div class="col-md-6 APPSHOW VerifyUdyam">
					<div class="UdyamView1" style="display:none">Udyam Registration Certificate Document</div>
						<div class="row UAMN" >
														<!--First column -->
					<div class="col-md-8  Formcol-mdLR UAMNupload1" style="display:none">
					<div class="md-form">
					<table><tr>
					<td>
					<div id="CBSI_UPDUAMNOUPLOAD"  class="file-field">
						<a class="">
						<i class="fa fa-plus imgAdd" aria-hidden=""></i>
						<input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_UPDUAMNO,'CBSI_UPDUAMNO','Udyam','Udyam')" class="CBSI_UPDUAMNO"  >
						</a> 
					<input type="text" id="CBSI_UPDUAMNO" data-val="Upload Udyam Registration Certificate"  hidden="hidden" data-Validate="CBSI_UPDUAMNO"  name="CBSI_UPDUAMNO" class="form-control voter File CBSIDBfields  ">
					<span class="name1">Upload</span>
					</div>
					</td>
					</tr></table>
					</div>    
					</div>  
					<div class="col-md-4 Formcol-mdLR TxtCenter UdyamView1" style="display:none">
					<div class="md-form">
					<div class="CBSI_UPDUAMNO" style="display:none"> 
					<img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" onclick="ReuploadFile(CBSI_UPDUAMNO);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
					<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded DELETEEVENT" onclick="GrdDocDwnld('CBSI_UPDUAMNO')" alt="Cinque Terre" width="35" height="25"> 
					<img src="ThemeproLO/Common/Images/Delete_Img.png" width="35" style="display:none" height="25" data-hide="CBSI_UPDUAMNO" data-show="CBSI_UPDUAMNOUPLOAD"  class="DELBTN DELETEUPLDDTL DELETEEVENT"/>
					</div>
					</div>
					</div>  
					</div>
					</div> 
		</div> 
			
                   <!-- <div class="col Btxt10">Upload Documents</div>-->
                     <div data-for="BankDetail2" class="BankDetail2"> 
                     </div>
                     <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="BankDetail2" style="display:none">
                    <div data-row="" class="card-body px-lg-5 pt-0 DYNROW">
                           </br>
                           </br>
                           <input type="text" id="CGST_PRCSID" hidden="hidden" name="CGST_PRCSID" value="" class="form-control CGSTDBfields">
                           <input type="text" id="CGST_ACTIVITYID" hidden="hidden" name="CGST_ACTIVITYID" class="form-control CGSTDBfields">
                           <input type="text" id="CGST_DTCREATED" hidden="hidden" name="CGST_DTCREATED" class="form-control CGSTDBfields">
                           <input type="text" id="CGST_CREATEDBY" hidden="hidden" name="CGST_CREATEDBY" class="form-control CGSTDBfields">
                           <input type="text" id="CGST_MODIFIEDBY" hidden="hidden" name="CGST_MODIFIEDBY" class="form-control CGSTDBfields">
                           <input type="text" id="CGST_DTMODIFIED" hidden="hidden" name="CGST_DTMODIFIED" class="form-control CGSTDBfields">
						   <input type="text" id="CGST_CUSID" hidden="hidden" name="CGST_CUSID" class="form-control CGSTDBfields">
						   
                           <div class="form-row CHKBOX">
                              <div class="col-md-6">
							  <div class="md-form ">
													<input type="text" id="CGST_GSTVERIFY" hidden="hidden" maxlength="30" name="CGST_GSTVERIFY" class="form-control GST CGSTDBfields">
													<!-- <button type="button" data-Validatearia="CBSI_GSTVERIFY" onclick="CheckKYCDetl(this,'CBSI_GSTVERIFY','CBSI_GSTNUM','GST');" data-validate="gstin"  class="btn btn-Verify CBSI_GSTNUM waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>   onchange="Checkgst(this.id);" IsGstValid-->
													<input type="text" id="CGST_GSTNUM" maxlength="15"  name="CGST_GSTNUM" onchange="Checkgst(this,'CGST_GSTNUM'+$(this).closest('.DYNROW').attr('data-row'));" class="form-control IsUpprCse GSTCLER GST NoSpecialChar CGSTDBfields">
														<label for="CGST_GSTNUM" class="">GST Number<span class="MndtryAstr"></span></label>
												</div>
												
												</div>
									
												
												
												
												
												
												 <div class="col-md-6">
												<div class="md-form ">
													<div class="custom-control custom-radio custom-control-inline">
														<input type="checkbox" class="custom-control-input CHKCLER CGSTDBfields" onclick="ChkGstPrimary('CGST_GSTNUM'+$(this).closest('.DYNROW').attr('data-row'),'CGST_GSTCHK'+$(this).closest('.DYNROW').attr('data-row'))" id="CGST_GSTCHK" name="CGST_GSTCHK">
														<label class="custom-control-label" for="CGST_GSTCHK">Primary GST</label>
													</div>
												</div>
												</div>
								</div>
							     
							  
                               
								 
                              <!--</div>-->
                 
                     </div>
					 </div>
                     <div class="HyperControls form-row CHKBOX" >
                        <a onclick="AddPageMultiData('',$('#CGST_PRCSID').val(),'','BankDetail2','CGSTDBfields');" class="Btxt4 FltRight ADDBTN "  href="#">+ Add</a>
                        <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                     </div>
               
				

           <div class="form-row">
                <div class="col-md-6">
                  <div class="md-form">
                    <input type="text" id="CBSI_FETCHFSTNAME" hidden="hidden" name="CBSI_FETCHFSTNAME" class="form-control CBSIDBfields">
                    <input type="text" id="CBSI_CUSFISNAM" maxlength="100"  name="CBSI_CUSFISNAM" class="form-control IsUpprCse IsAlphaFields  CBSIDBfields CBSIMndtry">
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
                          <input type="radio" class="custom-control-input CBSIDBfields" onclick="AppTitle(); ChkApProf();" value="Male" id="GenMale" name="CBSI_GENTER">
                          <label class="custom-control-label" for="GenMale">Male</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input CBSIDBfields" onclick="AppTitle(); ChkApProf();" value="Female" id="GenFemale" name="CBSI_GENTER">
                           <label class="custom-control-label" for="GenFemale">Female</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline"><!--onclick="CheckGender();"-->
                             <input type="radio" class="custom-control-input CBSIDBfields"  value="Transgender" id="GenTrancs" name="CBSI_GENTER">
                             <label class="custom-control-label" for="GenTrancs">Other</label>
                       </div>
                   </div>
                   <label class="mdb-main-label BTxt9">Gender<span class="MndtryAstr">*</span></label>      
               </div>
           </div>
           </div>
		
		   
           <div class="form-row INDU">
            <div class="col">
                  <!-- First name -->
                  <div class="md-form"><!--ChkDOBTOJOINDATE-->
                    <input type="text" id="CBSI_FETCHDOBNAME" hidden="hidden" name="CBSI_FETCHDOBNAME" class="form-control CBSIDBfields">
                    <input type="text" id="CBSI_DOB" name="CBSI_DOB" onblur="AgeVal(this,CBSI_AGE);" maxlength="10" class="form-control IsNumberFields NoSpecialChar INDM ISDatefield CBSIDBfields CBSIMndtry">
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
                  <select class="mdb-select md-form colorful-select dropdown-primary INDM CBSIDBfields" id="CBSI_CATEGORY" name="CBSI_CATEGORY">
                  	<option value="">Select</option>
					<option value="General">General</option>
					<option value="OBC">OBC</option>
					<option value="Others">Others</option>
  					<option value="SC">SC</option>
 					<option value="ST">ST</option>
				</select>
				<label class="mdb-main-label BTxt9">Category</label>
             </div>
            </div>
           	<div class="col">
           		<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary INDM CBSIDBfields CBSIMndtry" onchange="CheckMarStatus(); ChkApProf();" id="CBSI_MARITSTUS" name="CBSI_MARITSTUS">
                  	<option value="">Select</option>
						<option value="Divorce">Divorce</option>
  					<option value="Married">Married</option>
  					<option value="Single">Single</option>
  					<option value="Widow">Widow</option>
				</select>
				<label class="mdb-main-label BTxt9">Marital Status<span class="MndtryAstr">*</span></label>
             </div>
            </div>
           
            </div>
            <div class="form-row">
                <div class="col-md-6 INDU">
                  <div class="md-form ">
                    <input type="text" id="CBSI_SPOUSNAME" maxlength="20" name="CBSI_SPOUSNAME" class="form-control CBSIDBfields  IsAlphaFields NoSpecialChar">
                    <label for="CBSI_SPOUSNAME" class="">Spouse Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class="PROFILE col-md-6 ">
                  	<div class="md-form">
                     <select class="mdb-select md-form colorful-select dropdown-primary   PROFILEVAL CBSIDBfields CBSIMndtry" onchange="DataToProfFld(this); CheckProfile('Change'); DELEMPDETAILS();" data-change="CBSI_PROFILE" id="CBSI_NPROFILE" name="CBSI_NPROFILE">
						 <option value="">Select</option>
						 <option class="HSWF" disabled  value="Housewife">Housewife</option>
						 <option disabled value="Retired">Retired</option>
						 <option class="GSTSAL" disabled value="Salaried">Salaried</option>
						 <option value="SEP">SEP</option>
						 <option  value="SENP">SENP</option>
						 <option disabled value="Student">Student</option>
				     </select>
				      <label class="mdb-main-label BTxt9">Profile<span class="MndtryAstr">*</span></label>
                    </div>
                </div>
				<div class="col-md-6 PARTTYPE"  style="display:none">
				  <div class="md-form ">
                    <select class="mdb-select md-form colorful-select dropdown-primary CBSIDBfields"   id="CBSI_PARTNERSHPTY" name="CBSI_PARTNERSHPTY">
                  	<option value="Unregistered">Unregistered</option>
  					<option value="Registered">Registered</option>
  					
				</select>
				<label class="mdb-main-label BTxt9">Partnership Type<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                
           </div>
		<!--CheckProfile('Change');-->
		   
		   
           <div class="form-row INDU">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="CBSI_NOOFDEPEND" maxlength="2" name="CBSI_NOOFDEPEND" class="form-control CBSIDBfields NoSpecialChar INDM IsNumberFields CBSIMndtry">
                    <label for="CBSI_NOOFDEPEND" class="">No of Dependents<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  	<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary CBSIDBfields INDM CBSIMndtry" onchange="Chkqualify('CBSI_QUALIFICATION','CBSI_OTHERS','Category','Page')" id="CBSI_QUALIFICATION" name="CBSI_QUALIFICATION" >
                  	<option value="">Select</option>
					<option value="Matriculation">Matriculation</option> 
  					<option value="UG">UG</option>
 					<option value="Graduate">Graduate</option>
 					<option value="PG">PG</option>
					<option value="High School">High School</option>					
  					<option value="School">School</option> 
					<option value="Others">Others</option>
				</select>
				<label class="mdb-main-label BTxt9">Qualifications<span class="MndtryAstr">*</span></label>
             </div>
             </div>
           </div>
		   <div class="form-row ">
				<div class="col-md-6  INDU">
					<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary CBSIDBfields INDM CBSIMndtry" onchange="" id="CBSI_NATIONALITY" name="CBSI_NATIONALITY" >
                  	<option value="">Select</option>
					<option value="Resident Indian">Resident Indian</option> 
  					<option value="NRI">NRI</option>
				</select>
				<label class="mdb-main-label BTxt9">Nationality<span class="MndtryAstr">*</span></label>
             </div>
				</div>
				<div class="col-md-6" style="display:none;">
				<div class="md-form" >
			
                    <input type="text" id="CBSI_SAPCDE" maxlength="50" name="CBSI_SAPCDE" class="form-control  CBSIDBfields">
                    <label for="CBSI_SAP" class="">SAP CODE<span class="MndtryAstr"></span></label>
				</div>
				</div>
		   </div>
		   <div class="form-row ">
		   <div class="col-md-6  OTHER">
		                     <div class="md-form">
                    <input type="text" id="CBSI_OTHERS" maxlength="20" name="CBSI_OTHERS" class="form-control CBSIDBfields NoSpecialChar INDM IsAlphaFields CBSIMndtry">
                    <label for="CBSI_OTHERS" class="">Others<span class="MndtryAstr">*</span></label>
                  </div>
				</div>
<!-- 			 <div class="col-md-6  INDU">
		                     <div class="md-form">
                    <input type="text" id="CBSI_GEOLIMIT" maxlength="20" name="CBSI_GEOLIMIT" class="form-control CBSIDBfields NoSpecialChar  ">
                    <label for="CBSI_GEOLIMIT" class="">Geo limit from SCE Branch<span class="MndtryAstr"></span></label>
                  </div>
				</div>	 -->
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
      <a class="collapsed Btxt7 AFormaccordion  ACCRDISB CONLOAD" data-form="Contact Details" data-aria="LSW_TCUSADDRINFO|CADI|CADI_CUSID|CBSI_CUSID" data-load="Yes" data-multidata="" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
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
            <div class="col-md-6 VERIFYBTNPOSITION">   
               <div class="md-form">
                   <input type="text" id="CADI_EMAILVERIFY" hidden="hidden" maxlength="30" name="CADI_EMAILVERIFY" class="form-control CADIDBfields">
                  <!-- <button type="button" data-Validatearia="CADI_EMAILVERIFY" onclick="VerfyMail(this,$('#CADI_EMAILID').val(),$('#CBSI_CUSID').val());SaveContDetl();" data-validate="email"  class="btn btn-Verify CADI_EMAILID waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>-->
				  <button type="button" data-Validatearia="CADI_EMAILVERIFY" onclick="CheckMobValidKyc('CADI_EMAILID','OTP','CADI_CUSID','CADI_EMAILVERIFY','EMAIL')" data-validate="otp"  class="btn btn-Verify  CADI_EMAILVERIFY waves-effect btn-yelInplain btn-sm BTNVerify VERIFYBTNPOSITIONRIGHT">Verify</button>
                   <input type="text" id="CADI_EMAILID" maxlength="100"  data-link="CADI_EMAILID|CADI_EMAILVERIFY" name="CADI_EMAILID" class="form-control datalink CADIDBfields IsEmailFields CADIMndtry">
                   <label for="CADI_EMAILID" class="">Email ID<span class="MndtryAstr">*</span></label>
				    <span class="EMAILLINK Btxt29" ></span>
              </div>
              </div>
              <div class="col-md-6 VERIFYBTNPOSITION ">
                 <div class="md-form">
                    <input type="text" id="CADI_MOBIVERIFY"  hidden="hidden" name="CADI_MOBIVERIFY" class="form-control CADIDBfields">
                    <button type="button"  data-Validatearia="CADI_MOBIVERIFY" onclick="CheckMobValidKyc('CADI_MOBNOI','OTP','CADI_CUSID','CADI_MOBIVERIFY','SMS')" data-validate="otp"  class="btn btn-Verify CADI_MOBNOI waves-effect btn-yelInplain btn-sm BTNVerify VERIFYBTNPOSITIONRIGHT ">Verify</button>
                    <input type="text" id="CADI_MOBNOI" data-link="CADI_MOBNOI|CADI_MOBIVERIFY"  onchange="CheckDupMobNo('CADI_MOBNOI','CADI_MOBNOII','Mobile Number');DupMOBval('CADI_PRCSID','CADI_MOBNOI','CADI_CUSID');" maxlength="10" name="CADI_MOBNOI" class="form-control datalink CADIDBfields IsNumberFields NoSpecialChar IsMobileFields CADIMndtry">
                    <label for="CADI_MOBNOI" class="">Mobile Number 1<span class="MndtryAstr">*</span></label>
                 </div>
               </div>
        </div>
        <div class="form-row VERIFYBTNPOSITION ">
            <div class="col-md-6">
                  <div class="md-form">
                    <input type="text" id="CADI_MOBIIVERIFY" hidden="hidden" name="CADI_MOBIIVERIFY" class="form-control CADIDBfields">
                    <button type="button"  data-Validatearia="CADI_MOBIIVERIFY" onclick="CheckMobValidKyc('CADI_MOBNOII','OTP','CADI_CUSID','CADI_MOBIIVERIFY','SMSII','Y')" data-validate="otp"  class="btn  CADI_MOBNOII btn-Verify waves-effect btn-yelInplain btn-sm BTNVerify VERIFYBTNPOSITIONRIGHT ">Verify</button>
                    <input type="text" id="CADI_MOBNOII" data-link="CADI_MOBNOII|CADI_MOBIIVERIFY" maxlength="10" onchange="CheckDupMobNo('CADI_MOBNOI','CADI_MOBNOII','Mobile Number');DupMOBval('CADI_PRCSID','CADI_MOBNOII','CADI_CUSID');" name="CADI_MOBNOII" class="form-control  CADIDBfields datalink NoSpecialChar IsNumberFields IsMobileFields">
                    <label for="CADI_MOBNOII" class="">Mobile Number 2</label>
                  </div>
            </div>
			
			<div class="col-md-6  ">
		            <div class="md-form">
                    <input type="text" id="CADI_CGEOLIMIT" maxlength="20" name="CADI_CGEOLIMIT" class="form-control IsNumberFields IsCURCommaFields CADIDBfields CADIMndtry NoSpecialChar   ">
                    <label for="CADI_CGEOLIMIT" class="">Geo limit from SCE Branch<span class="MndtryAstr">*</span></label>
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
                    <input type="text" id="CADI_ADDRLINI" maxlength="60" name="CADI_ADDRLINI" class="form-control  AddrNoSpecialChar RSADDR RESSTAT CADIDBfields CADIMndtry">
                    <label for="CADI_ADDRLINI" class="">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_ADDRLINII" maxlength="60" name="CADI_ADDRLINII" class="form-control AddrNoSpecialChar RSADDR RESSTAT  CADIDBfields">
                    <label for="CADI_ADDRLINII" class="">Address Line 2</label>
                  </div>
               </div>        
        </div>
        
        <div class="form-row">
           
            <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="CADI_PINCODE" maxlength="6" name="CADI_PINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'CADI_STATE','CADI_CITY','CADI_STDC')" class="form-control  RESSTAT CADIDBfields IsNumberFields NoSpecialChar RSADDR IsPinFielde CADIMndtry">
                    <label for="CADI_PINCODE" class="">Pin Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_CITY" disabled name="CADI_CITY" class="form-control ALLDIS RSADDR RESSTAT CADIDBfields CADIMndtry">
                    <label for="CADI_CITY" class="">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        
        <div class="form-row">
           
            <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="CADI_STATE" disabled name="CADI_STATE" class="form-control ALLDIS RSADDR RESSTAT CADIDBfields CADIMndtry">
                    <label for="CADI_STATE" class="">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="CADI_LNDMARK" maxlength="40" name="CADI_LNDMARK" onchange="ChkLanMark(this,'CADI_LNDMARK');" class="form-control RESSTAT RSADDR  CADIDBfields CADIMndtry">
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
				<label class="mdb-main-label BTxt9">Ownership status<span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col-md-1">
                   <div class="md-form">
                        <input type="text" id="CADI_STDC" maxlength="4" style="width:75px"  name="CADI_STDC" class="form-control RSADDR CADIDBfields IsNumberFields IsLandlneFields"> 
                        <label for="CADI_STDC" class="">STD</label>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                    <input type="text" id="CADI_LNDLINENO" maxlength="10"  name="CADI_LNDLINENO" class="form-control RSADDR CADIDBfields IsNumberFields IsLandlneFields">
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
                  <select class="mdb-select md-form colorful-select dropdown-primary RSADDR CADIDBfields IsNumberFields" onchange="Chkresi()" id="CADI_MONTHS" name="CADI_MONTHS">
                  	 <option value="">--Select--</option>
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
           
   <!--        <div class="col-md-5" >
            	<div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input CADIDBfields" id="CADI_KYCDOCAVAIL" name="CADI_KYCDOCAVAIL">
  					<label class="custom-control-label" for="CADI_KYCDOCAVAIL">KYC document available</label>
				</div>
				</div>
            </div> -->
			<div class="col-md-2 Formcol-mdLR TxtCenter ADDRVI" style="display:none">
                <div class="md-form">
                     <input type="text" id="CADI_ADDRPROOF1" data-val="UAM document"  hidden="hidden" data-Validate="CADI_ADDRPROOF1"  name="CADI_ADDRPROOF1" class="form-control voter File CBSIDBfields">
                     <div class="CADI_ADDRPROOF1" style="display">  
                         <img src="ThemeproLO/Common/Images/Eyeview.png" title="Address Proof One View"  class="rounded" onclick="GrdDocDwnld('CADI_ADDRPROOF1')" alt="Cinque Terre" width="35" height="25">Address Proof 1</div>
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
 					  <input type="checkbox" class="custom-control-input  CADIDBfields RESSTAT" onclick="CheckAddrMndtry();" id="CADI_SAMRESIDADDR" name="CADI_SAMRESIDADDR">
  					  <label class="custom-control-label" for="CADI_SAMRESIDADDR">Same as Residence Address</label>
				  </div>
				</div>
            </div>
			<div class="col-md-2 Formcol-mdLR TxtCenter ADDRVII" style="display:none">
<div class="md-form">
<input type="text" id="CADI_ADDRPROOF2" data-val="UAM document"  hidden="hidden" data-Validate="CADI_ADDRPROOF2"  name="CADI_ADDRPROOF2" class="form-control voter File CBSIDBfields">
<div class="CADI_ADDRPROOF2" style="display">  
<img src="ThemeproLO/Common/Images/Eyeview.png" title="Address Proof Two View"  class="rounded" onclick="GrdDocDwnld('CADI_ADDRPROOF1')" alt="Cinque Terre" width="35" height="25"><span>Address proof 2</div>
</div>
</div> 
<div class="col-md-5">
</div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_PREMADDRLINI" maxlength="60" name="CADI_PREMADDRLINI" class="form-control AddrNoSpecialChar PRADDR CADIDBfields CADIMndtry">
                    <label for="CADI_PREMADDRLINI" class="ADDR">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_PERMADDRLINII" maxlength="60" name="CADI_PERMADDRLINII" class="form-control AddrNoSpecialChar PRADDR CADIDBfields">
                    <label for="CADI_PERMADDRLINII" class="ADDR">Address Line 2</label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_PERMPINCODE" maxlength="6" name="CADI_PERMPINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'CADI_PERMSTATE','CADI_PERMCITY','CADI_PSTDC')" class="form-control  IsNumberFields NoSpecialChar IsPinFielde CADIDBfields PRADDR CADIMndtry">
                    <label for="CADI_PERMPINCODE" class="ADDR">Pin Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_PERMCITY" disabled name="CADI_PERMCITY" class="form-control ALLDIS  CADIDBfields  PRADDR IsAlphaFields CADIMndtry">
                    <label for="CADI_PERMCITY" class="ADDR">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div> 
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_PERMSTATE" disabled name="CADI_PERMSTATE" class="form-control ALLDIS  CADIDBfields PRADDR IsAlphaFields CADIMndtry">
                    <label for="CADI_PERMSTATE" class="ADDR PERP">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="CADI_PERMLNDMARK" maxlength="40" name="CADI_PERMLNDMARK" onchange="ChkLanMark(this,'CADI_PERMLNDMARK');"  class="form-control  PRADDR CADIDBfields CADIMndtry">
                    <label for="CADI_PERMLNDMARK" class="ADDR">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
          </div> 
          <div class="form-row">
            <div class="col-md-6"> 
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary  CADIMndtry CADIDBfields PRADDR" id="CADI_PERMRESIDTYPE" name="CADI_PERMRESIDTYPE">
                  	<option value="" selected>--Select--</option>
  					<option value="Self Owned">Self Owned</option>
 					 <option value="Rented">Rented</option>
 					 <option value="Owned by Relative">Owned by Relative</option>
 					 <option value="Company Provided">Company Provided</option>
 					 <option value="Family Owned">Family Owned</option>	
                     <option value="Leased">Leased</option>					 
				</select>
				<label class="mdb-main-label BTxt9">Ownership status<span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col-md-1">
                   <div class="md-form">
                        <input type="text" id="CADI_PSTDC" maxlength="4" style="width:75px"  name="CADI_PSTDC" class="form-control PRADDR CADIDBfields IsNumberFields IsLandlneFields"> 
                        <label for="CADI_PSTDC" class="ADDR">STD</label>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                    <input type="text" id="CADI_PERMLNDLINENO" maxlength="10"  name="CADI_PERMLNDLINENO" class="form-control PRADDR CADIDBfields IsNumberFields IsLandlneFields">
                    <label for="CADI_PERMLNDLINENO" class="ADDR">Landline No</label>
                  </div>
               </div>
        </div>
        <div class="form-row">
           
            <div class="col">
                  <div class="md-form">  
				<input type="text" id="CADI_PERMYEAROFRESID" maxlength="2" name="CADI_PERMYEAROFRESID" class="form-control  CADIDBfields NoSpecialChar PRADDR IsNumberFields CADIMndtry">
                    <label for="CADI_PERMYEAROFRESID" class="ADDR">Years of Residence<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary PRADDR CADIDBfields"  onchange="Chkresi()" id="CADI_PERMMONTHS" name="CADI_PERMMONTHS">
                  	<option value="">--Select--</option>
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
                    <input type="text" id="CADI_ORGADDRLINI" maxlength="60"  name="CADI_ORGADDRLINI" class="form-control  ORGADD AddrNoSpecialChar CADIDBfields CADIMndtry">
                    <label for="CADI_ORGADDRLINI" class="">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="CADI_ORGADDRLINII" maxlength="60"  name="CADI_ORGADDRLINII" class="form-control ORGADD AddrNoSpecialChar CADIDBfields">
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
                    <input type="text" id="CADI_ORGLNDMARK" maxlength="40" name="CADI_ORGLNDMARK" onchange="ChkLanMark(this,'CADI_ORGLNDMARK');"  class="form-control  ORGADD CADIDBfields CADIMndtry">
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
					<option value="Owned by Relative">Owned by Relative</option>
 					<option value="Company Provided">Company Provided</option>
 					<option value="Family Owned">Family Owned</option>
					<option value="Leased">Leased</option>
					 
				</select>
				<label class="mdb-main-label BTxt9">Ownership status<span class="MndtryAstr"></span></label>
             </div>
          </div>
          <div class="col-md-1">
                   <div class="md-form">
                        <input type="text" id="CADI_ORGSTDC" maxlength="4" style="width:75px"  name="CADI_ORGSTDC" class="form-control PRADDR CADIDBfields IsNumberFields IsLandlneFields CADIMndtry"> 
                        <label for="CADI_ORGSTDC" class="">STD</label>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                      <input type="text" id="CADI_ORGLNDLINENO" maxlength="10"  name="CADI_ORGLNDLINENO" class="form-control CADIDBfields IsNumberFields IsLandlneFields">
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
                  <select class="mdb-select md-form colorful-select dropdown-primary CADIDBfields"  onchange="Chkresi()" id="CADI_ORGMONTHS" name="CADI_ORGMONTHS">
                  	<option value="">--Select--</option>
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
					        	<div class="col Btxt10">	 DETAILS</div>
					        </div>
                                 <div class="form-row SEP">
                                    <div class="col-md-6">
                                       <div class="md-form">
                                          <div class="select-radio SEPM">
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input CEMIDBfields  OFFTYPE" onclick="GetOfficaddr();" value="Owned" id="OrgOwned" name="CEMI_ORGANIADDR">
                                                <label class="custom-control-label" for="OrgOwned">Owned</label>
                                             </div>
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input CEMIDBfields  OFFTYPE" onclick="GetOfficaddr();"  value="Rented" id="OrgRent" name="CEMI_ORGANIADDR">
                                                <label class="custom-control-label" for="OrgRent">Rented</label>
                                             </div>
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input CEMIDBfields  OFFTYPE" onclick="GetOfficaddr();" value="Resi-cum-office" id="OrgResOff" name="CEMI_ORGANIADDR">
                                                <label class="custom-control-label" for="OrgResOff">Resi-cum-office</label>
                                             </div>
                                          </div>
										  <label class="mdb-main-label BTxt9">Office type<span class="MndtryAstr">*</span></label> 
                                       </div>
                                    </div>
                                 </div>
                                
                                 </br>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_ORGANINAME" maxlength="75" name="CEMI_ORGANINAME" class="form-control CEMIDBfields CEMIMndtry NoSpecialChar PROCHGS">
                                          <label for="CEMI_ORGANINAME" class="PROCHGAC">Organization Name<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">    
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_ADDRLINEI" maxlength="60" name="CEMI_ADDRLINEI" class="form-control CEMIDBfields OFFADDR CEMIMndtry AddrNoSpecialChar CEMIMndtry PROCHGS">
                                          <label for="CEMI_ADDRLINEI" class="OADDR PROCHGAC">Address Line 1<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_ADDRLINEII" maxlength="60" name="CEMI_ADDRLINEII" class="form-control CEMIDBfields OFFADDR AddrNoSpecialChar PROCHGS">
                                          <label for="CEMI_ADDRLINEII" class="OADDR PROCHGAC">Address Line 2</label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_PINCODE" maxlength="6" name="CEMI_PINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'CEMI_STATE'+$(this).closest('.DYNROW').attr('data-row'),'CEMI_CITY'+$(this).closest('.DYNROW').attr('data-row'),'CEMI_STDC'+$(this).closest('.DYNROW').attr('data-row'))" class="form-control OFFADDR IsNumberFields IsPinFielde NoSpecialChar CEMIDBfields CEMIMndtry PROCHGS">
                                          <label for="CEMI_PINCODE" class="OADDR PROCHGAC">Pin Code<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_CITY" disabled name="CEMI_CITY" class="form-control CEMIDBfields CEMIMndtry PROCHGS">
                                          <label for="CEMI_CITY" class="OADDR PROCHGAC">City<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_STATE"  disabled name="CEMI_STATE" class="form-control  CEMIDBfields CEMIMndtry PROCHGS">
                                          <label for="CEMI_STATE" class="OADDR PROCHGAC">State<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_LNDMARK" maxlength="40" name="CEMI_LNDMARK" onchange="ChkLanMark(this,'CEMI_LNDMARK'+$(this).closest('.DYNROW').attr('data-row'));" class="form-control OFFADDR  CEMIDBfields CEMIMndtry PROCHGS">
                                          <label for="CEMI_LNDMARK" class="OADDR PROCHGAC">Landmark<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
									
								
								 
                                 <div class="form-row">
                                    <div class="col-md-1 SEP">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_STDC" maxlength="4" style="width:75px" disabled name="CEMI_STDC" class="form-control OFFADDR CEMIDBfields IsNumberFields PROCHGS"> 
                                          <label for="CEMI_STDC" class="OADDR PROCHGS">STD</label>
                                       </div>
                                    </div>
                                    <div class="col-md-5 SEP">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_LNDLINENO" maxlength="10"  name="CEMI_LNDLINENO" class="form-control OFFADDR CEMIDBfields IsNumberFields IsLandlneFields PROCHGS">
                                          <label for="CEMI_LNDLINENO" class="OADDR PROCHGAC">Landline No<span class="MndtryAstr"></span></label>
                                       </div>
                                    </div>
                                    <div class="col-md-6 SEP">
                                       <div class="md-form">
                                          <select class=" md-form colorful-select SEPM dropdown-primary CEMIDBfields" onchange="GetNaturBusness(this,'CEMI_NATRBUSINESS','CEMI_CLUSTER')" id="CEMI_INDUSCATRGORY" name="CEMI_INDUSCATRGORY">
                                             <option value="" selected>--Select--</option>
                                             <!--<option value="Accommodation and food service activities">Accommodation and food service activities</option>
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
                                             <option value="Retail / Wholesale Trade">Retail / Wholesale Trade</option>-->
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
								 <!--
                                 <div class="form-row" style="display:none">
                                    <div class="col">
                                       <div class="md-form">
                                          <div class="custom-control custom-radio custom-control-inline">
                                             <input type="checkbox" class="custom-control-input CEMIDBfields" id="CEMI_KYCDOCAVAIL" name="CEMI_KYCDOCAVAIL">
                                             <label class="custom-control-label" for="CEMI_KYCDOCAVAIL">KYC document available</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>-->
                                 <div class="form-row">
                                    <div class="col Btxt10">Organization Details</div>
                                 </div>
                                 </br>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_DATOFESTABLIS" maxlength="10" onblur="CompareJointoDOB(this,CBSI_DOB,CEMI_NOOFYERBUSINESS,'CBSI_PROFILE');ExpYearvalid(this,CEMI_NOOFYERBUSINESS);" name="CEMI_DATOFESTABLIS" class="form-control NoSpecialChar ISFutureDateFields JOINDATE CEMIDBfields CEMIMndtry IsNumberFields  ISDatefield PROCHGS">
                                          <label for="CEMI_DATOFESTABLIS" class="PROCHGAC">Date of Establishment<span class="MndtryAstr">*</span></label>
                                          <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"   />
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_NOOFYERBUSINESS" disabled maxlength="2" name="CEMI_NOOFYERBUSINESS" class="form-control IsNumberFields NoSpecialChar CEMIDBfields PROCHGS">
                                          <label for="CEMI_NOOFYERBUSINESS" class="AGE PROCHGS">No. of Years in Business</label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row SEP OEMPONE">
                                    <div class="col-md-6"><!--SEPM-->
                                       <div class="md-form">
                                           <select class="md-form colorful-select dropdown-primary  CEMIDBfields "  id="CEMI_NEGATLIST" name="CEMI_NEGATLIST">
                                            <option value="">--Select--</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">Negative List<span class="MndtryAstr"></span></label>
                                      
                                       </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="md-form"><!--SEPM-->
                                         <select class="md-form colorful-select dropdown-primary  CEMIDBfields " id="CEMI_CAUTLIST" name="CEMI_CAUTLIST">
                                         <option value="">--Select--</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">Caution List<span class="MndtryAstr"></span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row SAL OEMPONE">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_TOTEXPER" name="CEMI_TOTEXPER" maxlength="2" onblur="yearsCompare('CEMI_TOTEXPER'+$(this).closest('.DYNROW').attr('data-row'),'CEMI_NOOFYERBUSINESS'+$(this).closest('.DYNROW').attr('data-row'),'Current Experience Years Should not greater than Total Experience years');ExperYrsCompareAge('CBSI_AGE','CEMI_TOTEXPER'+$(this).closest('.DYNROW').attr('data-row'));" class="form-control SALM  CEMIDBfields NoSpecialChar IsNumberFields PROCHGS">
                                          <label for="CEMI_TOTEXPER" class="PROCHGAC">Total Experience<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_DESIGNATION" maxlength="25" name="CEMI_DESIGNATION" class="form-control  SALM IsAlphaFields CEMIDBfields PROCHGS">
                                          <label for="CEMI_DESIGNATION" class="PROCHGAC">Designation<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row OEMPONE">
                                    <div class="col-md-6 SAL">
                                       <div class="md-form">
                                          <input type="text" id="CEMI_LANDLNO" maxlength="11" name="CEMI_LANDLNO" class="form-control  IsNumberFields CEMIDBfields PROCHGS">
                                          <label for="CEMI_LANDLNO" class="PROCHGAC">Landline No<span class="MndtryAstr"></span></label>
                                       </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="md-form">
                                          <select class="md-form colorful-select dropdown-primary CEMIDBfields " id="CEMI_KYCCATEGORY" name="CEMI_KYCCATEGORY">
                                             <option value="">Select</option>
                                             <option value="Low">Low</option>
                                             <option value="Medium">Medium</option>
                                             <option value="High">High</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">KYC Category<span class="MndtryAstr"></span></label>
                                       </div>
                                    </div>
									<div class="col-md-6 SEP OEMPONE">
                                       <div class="md-form"><!--SEPM-->
                                           <select class="md-form colorful-select dropdown-primary  CEMIDBfields" id="CEMI_PAR" name="CEMI_PAR">
                                            <option value="">--Select--</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">PAR<span class="MndtryAstr"></span></label>
                                      
                                       </div>
                                    </div>
									</div>
                   <!--<div class="form-row APPEMP" >
					<div class="col-md-6">
						<div class="md-form">
						  <div class="custom-control custom-radio custom-control-inline ">
							<input type="checkbox" class="custom-control-input  CEMIDBfields" onchange="Cochk();" id="CEMI_ECUAMNO" name="CEMI_ECUAMNO">
							<label class="custom-control-label" for="CEMI_ECUAMNO">Applied for Udyam Number<span class="MndtryAstr"></span></label>
						  </div>
					   </div>
					</div>
					<div class="col-md-6 " >
                    <div class="md-form">
                       <input type="text" id="CEMI_UDYAMVERI" hidden="hidden" maxlength="30" name="CEMI_UDYAMVERI" class="form-control  CEMIDBfields">
                       <button type="button" data-Validatearia="CEMI_UDYAMVERI" onclick="CheckKYCDetl(this,'CEMI_EUAMNO'+$(this).closest('.DYNROW').attr('data-row'),'CEMI_UDYAMVERI'+$(this).closest('.DYNROW').attr('data-row'),'UDYAM',$(this).closest('.DYNROW'));Cochk();" data-field="CEMI_UDYAMVERI|CEMI_UPDUAMNO||CBSI_CUSID|MULTIEMP" data-validate="gstin" class="btn btn-Verify CEMI_UDYAMVERI waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV veri">Verify</button>
					   <input type="text" id="CEMI_EUAMNO" maxlength="60" data-link="CEMI_EUAMNO|CEMI_UDYAMVERI|Udyam|Multi|CBSI_CUSID|CEMI_UDYAMVERI|CEMI_UPDUAMNO|"  name="CEMI_EUAMNO" class="form-control datalink IsUpprCse IsUAMFields Udayamfield URNFld  CEMIDBfields">
                       <label for="CEMI_EUAMNO" class="">Udyam Registration No<span class="MndtryAstr"></span></label>
                    </div>
                 </div>
			   </div>-->
			   <div class="form-row">
				  <div class="col-md-6 SEP PRECOMM OEMPONE">
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
                  <div class="col-md-6 APPEMP">
				     <div class="">Udyam Registration Certificate <span class="MndtryAstr">*</span></div>
                       <div class="row UAMN" >
                         <div class="col-md-8  Formcol-mdLR UAMNupload1" style="display:none">
                           <div class="md-form ">
                             <table><tr>
                               <td>
                                 <div id="CEMI_UPDUAMNOUPLOAD"  class="file-field">
                                    <a class="">
                                      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                   <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CEMI_UPDUAMNO,'CEMI_UPDUAMNO','Udyam','UdyamView1')" class="CEMI_UPDUAMNO"  >
                                    </a> 
                   <input type="text" id="CEMI_UPDUAMNO" data-val="Upload Udyam Registration Certificate"  hidden="hidden" data-Validate="CEMI_UPDUAMNO"  name="CEMI_UPDUAMNO" class="form-control voter File CEMIDBfields">
                   <span class="name1">Upload</span>
                                </div>
                             </td>
                           </tr></table>
                         </div>    
                      </div>  
                      <div class="col-md-4 Formcol-mdLR TxtCenter UdyamView1">
                        <div class="md-form">
                          <div class="CEMI_UPDUAMNO" style="display:none"> 
                            <img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" onclick="ReuploadFile(CEMI_UPDUAMNO);" title="UPLOAD"  class="rounded UdyamReUpld ReUpld" alt="Cinque Terre" width="20" height="20">  
                            <span class="name"></span>
							<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('CEMI_UPDUAMNO'+$(this).closest('.DYNROW').attr('data-row'))" alt="Cinque Terre" width="35" height="25"> </div>
                        </div>
                      </div>  
                    </div>
                  </div>
				</div>
                                <!-- <div class="form-row" style="display:none">
                                    <div class="col">
                                       <div class="md-form">
                                          <div class="custom-control custom-radio custom-control-inline ">
                                             <input type="checkbox" class="custom-control-input CEMIDBfields" disabled id="CEMI_INCCONSID" name="CEMI_INCCONSID">
                                             <label class="custom-control-label" for="CEMI_INCCONSID">Income to be considered<span class="MndtryAstr">*</span></label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>-->
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
      <a class="collapsed Btxt7 AFormaccordion ORGDETL ACCRDISB" data-toggle="collapse" data-multidata="" data-form="Organisation Details" data-aria="LSW_TCUSORGDTL|CDOG|CDOG_CUSID|CBSI_CUSID" data-load="Yes" data-parent="#accordionEx" href="#collapseFour4"
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
                    <input type="text" id="CDOG_INCORPDT" name="CDOG_INCORPDT" maxlength="10" class="form-control NoSpecialChar ISFutureDateFields IsNumberFields ISDatefield CDOGDBfields CDOGMndtry">
                    <label for="CDOG_INCORPDT" class="">Date Of Incorporation<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                 </div>
               </div>
				<!--<div class="form-row APPSHOW">
				   <div class="col-md-6">
                      <div class="md-form">
                         <div class="custom-control custom-radio custom-control-inline ">
                               <input type="checkbox" class="custom-control-input CDHA CDOGDBfields" onchange="Chkbox();Udyamcheckorg()"; id="CDOG_CUAMNO" name="CDOG_CUAMNO">
                               <label class="custom-control-label" for="CDOG_CUAMNO">Applied for Udyam Number<span class="MndtryAstr"></span></label>
                         </div>
                      </div>
				   </div>
				   <div class="col-md-6 " >
                    <div class="md-form">
                       <input type="text" id="CDOG_UDYAMVERI" hidden="hidden" maxlength="30" name="CDOG_UDYAMVERI" class="form-control GST CDOGDBfields">
                       <button type="button" data-Validatearia="CDOG_UDYAMVERI" onclick="CheckKYCDetl(this,'CDOG_UAMNO','CDOG_UDYAMVERI','UDYAM');Udyamcheckorg();" data-field="CDOG_UDYAMVERI|CDOG_UPDUAMNO|CBSI_CUSTYPE|CBSI_CUSID|" data-validate="gstin"  class="btn btn-Verify CDOG_UDYAMVERI waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV veri">Verify</button>
                       <input type="text" id="CDOG_UAMNO" maxlength="60" data-link="CDOG_UAMNO|CDOG_UDYAMVERI|Udyam|CDOG_UPDUAMNO||||"  name="CDOG_UAMNO" class="form-control datalink IsUpprCse IsUAMFields Udayamfield   CDOGDBfields">
                       <label for="CDOG_UAMNO" class="">Udyam Registration No<span class="MndtryAstr"></span></label>
                    </div>
                 </div>
			    </div>-->
        <div class="form-row">
	
            <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary CDOGMndtry CDOGDBfields" onchange="GetNaturBusness_V1(this,'CDOG_NATRBUSINESS','CDOG_CLUSTER')" id="CDOG_INDUSCATRGORY" name="CDOG_INDUSCATRGORY">
                  	<option value="" selected >--Select--</option>
  					<!--<option value="Accommodation and food service activities">Accommodation and food service activities</option>
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
  					<option value="Retail / Wholesale Trade">Retail / Wholesale Trade</option> -->
				</select>
				<label class="mdb-main-label BTxt9">Industry Category<span class="MndtryAstr">*</span></label>
             </div>
                </div>
                <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary CDOGDBfields CDOGMndtry" onchange="GetClusterBusness_V1('CDOG_INDUSCATRGORY',this,'CDOG_CLUSTER')" id="CDOG_NATRBUSINESS" name="CDOG_NATRBUSINESS">
                  	<option value="" selected >--Select--</option>
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
                 <div class="md-form">
 
                          <select class="mdb-select md-form colorful-select dropdown-primary CDOGDBfields CDOGMndtry"   id="CDOG_SECTOR" name="CDOG_SECTOR">
							<option value="" selected >--Select--</option>
							
							</select>
                           <label class="">Sector<span class="MndtryAstr">*</span></label>
                     
                 </div>
             </div> 
                
        </div>
		<div class="form-row">
				<!--<div class="col-md-6 APPSHOW">
					<div class="">Udyam Registration Certificate Document</div>
						<div class="row UAMN" >
														<!--First column -->
					<!--<div class="col-md-8  Formcol-mdLR UAMNupload1" style="display:none">
					<div class="md-form">
					<table><tr>
					<td>
					<div id="CDOG_UPDUAMNOUPLOAD"  class="file-field">
						<a class="">
						<i class="fa fa-plus imgAdd" aria-hidden=""></i>
						<input type="file"  name="datafile" onchange="DocFldUpldHndlr(CDOG_UPDUAMNO,'CDOG_UPDUAMNO','Udyam','Udyam')" class="CDOG_UPDUAMNO"  >
						</a> 
					<input type="text" id="CDOG_UPDUAMNO" data-val="Upload Udyam Registration Certificate"  hidden="hidden" data-Validate="CDOG_UPDUAMNO"  name="CDOG_UPDUAMNO" class="form-control voter File CDOGDBfields  ">
					<span class="name1">Upload</span>
					</div>
					</td>
					</tr></table>
					</div>    
					</div>  
					<div class="col-md-4 Formcol-mdLR TxtCenter UdyamView1">
					<div class="md-form">
					<div class="CDOG_UPDUAMNO" style="display:none"> 
					<img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" onclick="ReuploadFile(CDOG_UPDUAMNO);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
					<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded DELETEEVENT" onclick="GrdDocDwnld('CDOG_UPDUAMNO')" alt="Cinque Terre" width="35" height="25"> 
					<img src="ThemeproLO/Common/Images/Delete_Img.png" width="35" style="display:none" height="25" data-hide="CDOG_UPDUAMNO" data-show="CDOG_UPDUAMNOUPLOAD"  class="DELBTN DELETEUPLDDTL DELETEEVENT"/>
					</div>
					</div>
					</div>  
					</div>
					</div> -->				
			   <div class="col-md-6">
           		<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary CDOGDBfields  " id="CDOG_ENTTYPE" name="CDOG_ENTTYPE">
                  	<option value="">Select</option>
					<option value="Medium">Medium</option>
  					<option value="Micro">Micro</option>
  					<option value="Small">Small</option>
				</select>
				<label class="mdb-main-label BTxt9">Enterprise Type<span class="MndtryAstr"></span></label>
             </div>
            </div>
           </div>
		    <div class="form-row">
                <div class="col-md-6 NINDM">
                  <div class="md-form">
                    <input type="text" id="CDOG_UDADHAR" maxlength="100" name="CDOG_UDADHAR" class="form-control CDOGDBfields NoSpecialChar  ">
                    <label for="CDOG_UDADHAR" class="">Udyog aadhar<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 <div class="col-md-6 NINDM">
                  <div class="md-form">
                    <input type="text" id="CDOG_SHOPNUM" maxlength="100" name="CDOG_SHOPNUM" class="form-control CDOGDBfields NoSpecialChar  ">
                    <label for="CDOG_SHOPNUM" class="">Shop establishment number<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				</div>
		    <div class="form-row">
                <div class="col-md-6 NINDM">
                  <div class="md-form">
                    <input type="text" id="CDOG_LEINUMBER" maxlength="100" name="CDOG_LEINUMBER" class="form-control CDOGDBfields NoSpecialChar  ">
                    <label for="CDOG_LEINUMBER" class="">Lei Number<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 <div class="col-md-6 NINDM">
                  <div class="md-form">
                    <input type="text" id="CDOG_IMPORTCODE" maxlength="100" name="CDOG_IMPORTCODE" class="form-control CDOGDBfields NoSpecialChar  ">
                    <label for="CDOG_IMPORTCODE" class="">Import Export Code<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				</div>
				<div class="form-row">
				<div class="col-md-6">
					<div class="md-form">
					<select class="md-form colorful-select dropdown-primary  CDOGDBfields" id="CDOG_KYCCATEGORY" name="CDOG_KYCCATEGORY">
                                             <option value="">Select</option>
                                             <option value="Low">Low</option>
                                             <option value="Medium">Medium</option>
                                             <option value="High">High</option>
                                          </select>
                    <label for="CDOG_KYCCATEGORY" class="">KYC Category<span class="MndtryAstr"></span></label>
					</div>
					</div>
				</div>
      <!--<div class="form-row">
            <div class="col">
                 <div class="md-form">
                       <div class="custom-control custom-radio custom-control-inline ">
                           <input type="checkbox" class="custom-control-input CDOGDBfields " disabled  id="CDOG_INCCONSID" name="CDOG_INCCONSID">
                           <label class="custom-control-label" for="CDOG_INCCONSID">Income to be considered<span class="MndtryAstr">*</span></label>
                       </div>
                 </div>
             </div>
			 
         </div>-->
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


<a type="button" id="EBMobPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#EBMobModal">
   <i class="fa fa-plus"></i> 
</a>
                             
<div class="modal fade" id="EBMobModal" tabindex="-1" role="dialog" aria-labelledby="EBMobModalLabel" aria-hidden="true">
  <div class="modal-dialog" style="max-width:350px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10 TILE">Mobile OTP Verification</div> 
           <a href="#">
		   <img id="EBMOBPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch">
		   </img>
		   </a>     
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
           			  <input type="text" id="EBRequestId" hidden="hidden" class="form-control">
           			 <!-- <input type="text" id="HdnFieldId" hidden="hidden" class="form-control"> -->
           			  <input type="text" maxlength="6" id="EBMobOTP" class="form-control NoSpecialChar">
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
        <button type="button" id="Mobotp" data-field="CBSI_UTILITYVERIFY|EBRequestId|CBSI_CUSTYPE|CBSI_CUSID|CBSI_UTILITYATTACHMENT"  onclick="CheckKYCDetl(this,'EBMobOTP','CBSI_UTILITYVERIFY','MOBILE STATUS','');" class="btn btn-yel Btxt2">Confirm</button>
      </div>
    </div>
  </div>
  </div>

<a type="button" id="MobPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#MobModal">
 <i class="fa fa-plus"></i> </a>
                             
<div class="modal fade" id="MobModal" tabindex="-1" role="dialog" aria-labelledby="MobModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:350px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10 TILE">Mobile OTP Verification</div> 
   
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
					  <input type="text" id="FldVal" hidden="hidden" class="form-control">
           			  <input type="text" id="HdnFieldId" hidden="hidden" class="form-control">
					  <input type="text" id="CusId" hidden="hidden" class="form-control">
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
        <button type="button" id="EMAILOTP" onclick="CheckMobValidKyc('MobOTP','status','MOBI','CADI_EMAILVERIFY','EMAIL','','')" class="btn btn-yel Btxt2">Confirm</button>
		<button type="button" id="MOBOTP" onclick="CheckMobValidKyc('MobOTP','status','MOBI','CADI_MOBIVERIFY','SMS','','')" class="btn btn-yel Btxt2">Confirm</button>
		<button type="button" id="MOBOTPII" onclick="CheckMobValidKyc('MobOTP','status','MOBI','CADI_MOBIIVERIFY','SMSII','','')" class="btn btn-yel Btxt2">Confirm</button>
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