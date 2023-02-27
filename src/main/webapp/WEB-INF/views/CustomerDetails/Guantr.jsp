<button type="button" data-Validatearia="Dedupe" data-Validatedata="GRBI_DEDUPEVERIFY" onclick="PosdxChk('GRBI_CUSID','GRBI_CUSTYPE','GRBI_DEDUPEVERIFY','Guarantor','','GRBI_CUSFISNAM');"  data-validate="CGBI|DEDUPE" class="btn GRBI_DEDUPEVERIFY waves-effect btn-yelInplain btn-sm BTNDedupe liSubpageTabIcons"><i class="fa fa-check"></i>Dedupe Check</button>
<button type="button" class="btn  waves-effect  btn-yelInplain btn-sm liSubpageTabIcons APPVIEWDEDUPE VIEWDISABLE" onclick="viewposidex('GRBI_CUSID','GRBI_CUSTYPE','GRBI_DEDUPEVERIFY','Guarantor','','GRBI_CUSFISNAM')"><i class="fa fa-eye"></i>View Dedupe</button>
       
   
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="">


                            <!--Admin panel-->
                            <div class="admin-panel">

<div class="row"> 
	<div class="col-lg-12">
		
		  <ul title="Gaurantor" data-popup="Yes" class="nav FormPageMultiTab">   
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
      <a data-toggle="collapse" class="Btxt8 AFormaccordion" data-multidata="" data-aria="LSW_TGURCUSBASICINFO|GRBI|GRBI_CUSID" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
        aria-controls="collapseOne1">       
         Personal Info <i class="fa fa-minus-circle rotate-icon"></i>
       
      </a>
    </div>

    <!-- Card body -->
    <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
      data-parent="#accordionEx">
      <div class="card-body px-lg-5 pt-0">
        
        <form >
        <input type="text" id="GRBI_PRCSID" hidden="hidden" name="GRBI_PRCSID" class="form-control GRBIDBfields">
        <input type="text" id="GRBI_ACTIVITYID" hidden="hidden" name="GRBI_ACTIVITYID" class="form-control GRBIDBfields">
        <input type="text" id="GRBI_CREATEDBY" hidden="hidden" name="GRBI_CREATEDBY" class="form-control GRBIDBfields">
        <input type="text" id="GRBI_DTCREATED" hidden="hidden" name="GRBI_DTCREATED" class="form-control GRBIDBfields">
        <input type="text" id="GRBI_MODIFIEDBY" hidden="hidden" name="GRBI_MODIFIEDBY" class="form-control GRBIDBfields">
        <input type="text" id="GRBI_DTMODIFIED" hidden="hidden" name="GRBI_DTMODIFIED" class="form-control GRBIDBfields">
        
        <input type="text" id="GRBI_CUSID" hidden="hidden" name="GRBI_CUSID" class="form-control GRBIDBfields">
        <input type="text" id="GRBI_CUSTYPE" hidden="hidden" name="GRBI_CUSTYPE" class="form-control GRBIDBfields">
        <input type="text" id="GRBI_CIN" hidden="hidden" name="GRBI_CIN" class="form-control GRBIDBfields">
       
          <input type="text" id="GRBI_FETCHFSTNAME" hidden="hidden" name="GRBI_FETCHFSTNAME" class="form-control GRBIDBfields">
          <input type="text" id="GRBI_FETCHLSTNAME" hidden="hidden" name="GRBI_FETCHLSTNAME" class="form-control GRBIDBfields">
        <input type="text" id="GRBI_FETCHDOBNAME" hidden="hidden" name="GRBI_FETCHDOBNAME" class="form-control GRBIDBfields">
         <input type="text" id="GRBI_FETCHFATHNAME" hidden="hidden" name="GRBI_FETCHFATHNAME" class="form-control GRBIDBfields">
        <input type="text" id="GRBI_DEDUPEVERIFY" hidden="hidden" name="GRBI_DEDUPEVERIFY" class="form-control GRBIDBfields">
		  <input type="text" id="GRBI_FILESTATUS" hidden="hidden" name="GRBI_FILESTATUS" class="form-control GRBIDBfields">    
       <input type="text" id="GRBI_PROFILE" hidden="hidden" name="GRBI_PROFILE" class="form-control GRBIDBfields">
	       <input type="text" id="GRBI_NATURBUS"  name="GRBI_NATURBUS" hidden="hidden"  class="form-control GRBIDBfields" value="">
		   <input type="text" id="GRBI_IMGSCORE" hidden="hidden" name="GRBI_IMGSCORE" class="form-control GRBIDBfields" value="">
		   <input type="text" id="GRBI_GSTMULTI" hidden="hidden" name="GRBI_GSTMULTI" class="form-control GRBIDBfields" value="">
		   
		   
        <div class="form-row">
           <div class="col ">
           <div class="FltRight DELBTNTXT">
           Delete Guarantor
           <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="GRBI_PRCSID|GRBI_CUSID|GUARANTOR" class="DELBTN DELETETAP"/>
           </div>    
           </div>     
           </div>
           <div class="Btxt15 GRBI_CUSID">Customer ID</div>
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
                        <input type="file" style="display:none" name="datafile" id="Photo" data-photo="PHOTO"  data-field="GRBI_CUSFISNAM|GRBI_CUSLSTNAM|GRBI_CUSTYPE|GRBI_CUSID|GRBI_IMGSCORE|" onchange="PhSignFldUpldHndlr(this,'GRBI_CUSPHOTO','CUSPHOTO','GRBI_','Customer Photo','GRBI_CUSID');CheckKYCUPLOADDOC(this,'GRBI_CUSPHOTO','GRBI_CUSPHOTOPEC','FACE LIVENESS');">
                        <input type="hidden" class="inputTXT DocImg GRBIDBfields" data-val="Customer Photo" id="GRBI_CUSPHOTO" name="GRBI_CUSPHOTO" value="">
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
				<div class="col INDU">
					<div class="ImgScore">
					   Image Score : 
					</div>
                </div>
                <div class="col-md-6">
                  
                 <div class="md-form" style="margin-top: 50px;">
                    <select class="mdb-select md-form colorful-select dropdown-primary GRBIDBfields GRBIMndtry" onchange=" CheckGenter(); ChkGrProf();" id="GRBI_TITLE" name="GRBI_TITLE">
                  	<option value="" selected>--Select--</option>
  					<option class="INDMiss" value="Mr">Mr</option>
  					<option class="INDMiss" value="Mrs">Mrs</option>
 					 <option class="INDMiss" value="Miss">Miss</option>
 					 <option class="INDMS" value="M/s">M/s</option>
					 <option class="INDMiss"  value="NA">NA</option>
				</select>
				<label class="mdb-main-label BTxt9">Title<span class="MndtryAstr">*</span></label>
                  </div> 
                </div>

				</br>
                </div>
				 <div class="form-row">
		   
				<div class="col-md-6 CKMSME">
						<div class="md-form" >
				    
							<select class="mdb-select md-form colorful-select dropdown-primary GRBIDBfields GRBIMndtry" onchange="GuCheckborrower();" id="GRBI_GBORROWER" name="GRBI_GBORROWER">
								<option value="">Select</option>
								<option value="Yes">Yes</option>
								<option value="No">No</option>
							</select>
							<label class="mdb-main-label BTxt9">Is borrower Classified under MSME<span class="MndtryAstr">*</span></label>
						</div>
					</div>
					
			  	<div class="col-md-6 NINDU">
                 <div class="md-form">
                    <div id="gstRAD" class="select-radio NINDM"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input GRBIDBfields"  onclick="GCheckNumber()" value="Yes" id="GSTRYes" name="GRBI_GGST">
                          <label class="custom-control-label" for="GSTRYes">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input GRBIDBfields" onclick="GCheckNumber()" value="No" id="GSTRNo" name="GRBI_GGST">
                           <label class="custom-control-label" for="GSTRNo">No</label>
                       </div>
                     
                   </div>
                   <label class="mdb-main-label BTxt9">GST Registered <span class="MndtryAstr">*</span></label>      
               </div>
			</div>
		   
		  </div>
             <!--<div class="col-md-6 NINDU" style="margin-top: 50px;">
				    <div class="md-form">
                    <input type="text" id="GRBI_UAMNO" maxlength="19" name="GRBI_UAMNO" class="form-control IsUpprCse IsUAMFields Udayamfield GRBIDBfields">
                    <label for="GRBI_UAMNO" class="">Udyam Registration No<span class="MndtryAstr"></span></label>
                  </div>
                </div>-->
        <div class="form-row" >
			<div class="col-md-6 GSTAPP" style="display:none">
				<div class="md-form ">
                    <select class="mdb-select md-form colorful-select dropdown-primary GRBIDBfields" onchange="Checkgstapp();"  id="GRBI_GSTAPPLILE" name="GRBI_GSTAPPLILE">
						<option value="">Select</option>
						<option value="Single">Single</option>
						<option value="Multiple">Multiple</option>
					</select>
				<label class="mdb-main-label BTxt9">GST Applicable In Multiple States<span class="MndtryAstr"></span></label>
                </div>
            </div>
			<div class="col-md-6 EXEM" style="display:none">
				<div class="md-form ">
				    
                    <select class="mdb-select md-form colorful-select dropdown-primary GRBIDBfields"   id="GRBI_GEXEMPTED" name="GRBI_GEXEMPTED">
						<option value="">Select</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
					<label class="mdb-main-label BTxt9">GST Exempted<span class="MndtryAstr">*</span></label>
                </div>
            </div>
		</div>
		<div class="form-row GUNON">
				<div class="col-md-6 "style = "display:none">
                    <div class="md-form">
                       <div class="custom-control custom-radio custom-control-inline ">
                               <input type="checkbox" class="custom-control-input CUDHA GRBIDBfields" onchange="Chkudha();" id="GRBI_GCUAMNO" name="GRBI_GCUAMNO">
                               <label class="custom-control-label" for="GRBI_GCUAMNO">Applied for Udyam Number<span class="MndtryAstr"></span></label>
                       </div>
                    </div>
				</div>
				<div class="col-md-6 " >
                    <div class="md-form">
                       <input type="text" id="GRBI_UDYAMVERI" hidden="hidden" maxlength="30" name="GRBI_UDYAMVERI" class="form-control GRBIDBfields">
                       <button type="button" data-Validatearia="GRBI_UDYAMVERI" onclick="CheckKYCDetl(this,'GRBI_GUAMNO','GRBI_UDYAMVERI','UDYAM');Chkudha();" data-field="GRBI_UDYAMVERI|GRBI_UPDUAMNO|GRBI_CUSTYPE|GRBI_CUSID|MULTIEMP|UdyamView1|GRBI_CUSFISNAM|GUOA_SECTOR|GUOA_INCORPDT||" data-validate="gstin"  class="btn btn-Verify GRBI_UDYAMVERI waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV veri">Verify</button>
                       <input type="text" id="GRBI_GUAMNO" maxlength="60" data-link="GRBI_GUAMNO|GRBI_UDYAMVERI|Udyam|GRBI_UPDUAMNO||||" name="GRBI_GUAMNO" class="form-control datalink IsUpprCse IsUAMFields Udayamfield URNFld GRBIDBfields" onchange="Checkudym('GRBI_PRCSID','GRBI_GUAMNO','GRBI_CUSID');">
                       <label for="GRBI_GUAMNO" class="">Udyam Registration No<span class="MndtryAstr"></span></label>
                    </div>
                 </div>
			</div>
          <div class="form-row GSTF" style="display:none">
                <div class="col-md-6 " >
                   <div class="md-form ">
                     <input type="text" id="GRBI_GSTVERIFY" hidden="hidden" maxlength="30" name="GRBI_GSTVERIFY" class="form-control GST GRBIDBfields">
                     <!--<button type="button" data-Validatearia="GRBI_GSTVERIFY" onclick="CheckValidPanKyc('GRBI_GSTNUM','GRBI_GSTVERIFY','GRBI_CUSFISNAM','GRBI_CUSTYPE','gstdetailed','GRBI_CUSID','GRAI_ORGADDRLINI','GRAI_ORGADDRLINII','','','','GREI_ADDRLINEI','GREI_ADDRLINEI','GRBI_CONSTITUTION','GRBI_NATURBUS');SavePersInfo();" data-validate="gstin"  class="btn btn-Verify GRBI_GSTNUM waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
                     <input type="text" id="GRBI_GSTNUM" maxlength="15" disabled name="GRBI_GSTNUM" onchange="CheckGst('GRBI_PRCSID','GRBI_GSTNUM','GRBI_CUSID');" class="form-control IsGstValid NoSpecialChar GST GRBIDBfields">
                     <label for="GRBI_GSTNUM" class="">GST Number<span class="MndtryAstr">*</span></label>
                   </div>
               </div>

           </div>
		   
		   
		   <div class="form-row " >
		   <div class="col-md-6 GUNON">
				<div class="UdyamView1">Udyam Registration Certificate Document</div>
                <div class="row UNMN" >
                                    <!--First column-->
				<div class="col-md-8  Formcol-mdLR UAMNupload1" style="display:none">
				
				<div class="md-form">
				<!--<div id="VOTERUPLOAD"><img src="ThemeproLO/Common/Images/UploadImg.png" onclick="DocFldUpldHndlr(CBSI_VoterIDAttachment,id)" id="VOTER" class="rounded" alt="Cinque Terre" width="20" height="20"> Upload Voter ID </div>-->
				<!-- <input type="file" name="datafile"  class="APP"  onchange="DocFldUpldHndlr(CBSI_VoterIDAttachment)">-->
				<table><tr>
				<td>
				<div id="GRBI_UPDUAMNOUPLOAD"  class="file-field">
					<a class="">
					<i class="fa fa-plus imgAdd" aria-hidden=""></i>
					<input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_UPDUAMNO,'GRBI_UPDUAMNO','Udyam','Udyam')" class="GRBI_UPDUAMNO"  >
					</a> 
				<input type="text" id="GRBI_UPDUAMNO" data-val="Upload Udyam Registration Certificate" hidden="hidden" data-Validate="GRBI_UPDUAMNO"  name="GRBI_UPDUAMNO" class="form-control voter File GRBIDBfields">
				<span class="name1">Upload</span>
				</div>
				</td>
				</tr></table>
				</div>    
				</div>  
				<div class="col-md-4 Formcol-mdLR TxtCenter UdyamView1">
				<div class="md-form">
				<div class="GRBI_UPDUAMNO" style="display:none"> 
				<img src="ThemeproLO/Common/Images/UploadImg.png"  style="display:none" onclick="ReuploadFile(GRBI_UPDUAMNO);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
				<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('GRBI_UPDUAMNO')" alt="Cinque Terre" width="35" height="25">
				<img src="ThemeproLO/Common/Images/Delete_Img.png" width="35" style="display:none" height="25" data-hide="GRBI_UPDUAMNO" data-show="GRBI_UPDUAMNOUPLOAD"  class="DELBTN DELETEUPLDDTL DELETEEVENT"/></div>
				</div>
				</div>  
				</div>
			</div>
			</div>
		   
		       <div data-for="BankDetail2" class="BankDetail2"> 
                     </div>
                     <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="BankDetail2" style="display:none">
                    <div data-row="" class="card-body px-lg-5 pt-0 DYNROW">
                           </br>
                           </br>
                           <input type="text" id="GGST_PRCSID" hidden="hidden" name="GGST_PRCSID" value="" class="form-control GGSTDBfields">
                           <input type="text" id="GGST_ACTIVITYID" hidden="hidden" name="GGST_ACTIVITYID" class="form-control GGSTDBfields">
                           <input type="text" id="GGST_DTCREATED" hidden="hidden" name="GGST_DTCREATED" class="form-control GGSTDBfields">
                           <input type="text" id="GGST_CREATEDBY" hidden="hidden" name="GGST_CREATEDBY" class="form-control GGSTDBfields">
                           <input type="text" id="GGST_MODIFIEDBY" hidden="hidden" name="GGST_MODIFIEDBY" class="form-control GGSTDBfields">
                           <input type="text" id="GGST_DTMODIFIED" hidden="hidden" name="GGST_DTMODIFIED" class="form-control GGSTDBfields">
						   <input type="text" id="GGST_CUSID" hidden="hidden" name="GGST_CUSID" class="form-control GGSTDBfields">
						   
                           <div class="form-row CHKBOX">
                              <div class="col-md-6">
							  <div class="md-form ">
													<input type="text" id="GGST_GSTVERIFY" hidden="hidden" maxlength="30" name="GGST_GSTVERIFY" class="form-control GST GGSTDBfields">
													<!-- <button type="button" data-Validatearia="CBSI_GSTVERIFY" onclick="CheckKYCDetl(this,'CBSI_GSTVERIFY','CBSI_GSTNUM','GST');" data-validate="gstin"  class="btn btn-Verify CBSI_GSTNUM waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>   onchange="Checkgst(this.id);" IsGstValid-->
													<input type="text" id="GGST_GSTNUM" maxlength="15"  name="GGST_GSTNUM" onchange="Chkgst(this,'GGST_GSTNUM'+$(this).closest('.DYNROW').attr('data-row'));" class="form-control IsUpprCse  GST NoSpecialChar GGSTDBfields">
														<label for="GGST_GSTNUM" class="">GST Number<span class="MndtryAstr"></span></label>
												</div>
												
												</div>
									
												
												
												
												
												
												 <div class="col-md-6">
												<div class="md-form ">
													<div class="custom-control custom-radio custom-control-inline">
														<input type="checkbox" class="custom-control-input GGSTDBfields" onclick="ChkGstPrimary('GGST_GSTNUM'+$(this).closest('.DYNROW').attr('data-row'),'GGST_GSTCHK'+$(this).closest('.DYNROW').attr('data-row'))" id="GGST_GSTCHK" name="GGST_GSTCHK">
														<label class="custom-control-label" for="GGST_GSTCHK">Primary GST</label>
													</div>
												</div>
												</div>
								</div>
							     
							  
                               
								 
                              <!--</div>-->
                 
                     </div>
					 </div>
                     <div class="HyperControls form-row CHKBOX" >
                        <a onclick="AddPageMultiData('',$('#GGST_PRCSID').val(),'','BankDetail2','GGSTDBfields');" class="Btxt4 FltRight ADDBTN "  href="#">+ Add</a>
                        <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                     </div>
		   
           <div class="form-row">
               <div class="col-md-6">
                  <div class="md-form">
                    <input type="text" id="GRBI_CUSFISNAM" maxlength="75" name="GRBI_CUSFISNAM" class="form-control GRBIDBfields IsUpprCse IsAlphaFields GRBIMndtry">
                    <label for="GRBI_CUSFISNAM" class="">First Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-6 INDU">
                  <div class="md-form">
                    <input type="text" id="GRBI_CUSLSTNAM"  maxlength="25" name="GRBI_CUSLSTNAM" class="form-control GRBIDBfields IsUpprCse IsAlphaFields GRBIMndtry">
                    <label for="GRBI_CUSLSTNAM" class="">Last Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-6 NINDU">
                  <div class="md-form">
                    <input type="text" id="GRBI_CONSTITUTION" disabled maxlength="25" name="GRBI_CONSTITUTION" class="form-control GRBIDBfields IsAlphaFields">
                    <label for="GRBI_CONSTITUTION" class="">Constitution Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div>
           <div class="form-row INDU">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="GRBI_FATHRNAM"  maxlength="25" name="GRBI_FATHRNAM" class="form-control GRBIDBfields IsUpprCse GRBIMndtry IsAlphaFields">
                    <label for="GRBI_FATHRNAM" class="">Father's Name<span class="MndtryAstr">*</span></label>
                  </div>
           	</div>
           	<div class="col">
                  <div class="md-form">        
               <div id="RadINDU" class="select-radio GRBIMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
                       <input type="radio" class="custom-control-input GRBIDBfields" value="Male" id="MaleGen" onclick="AppTitle(); ChkGrProf();" name="GRBI_GENTER">
                       <label class="custom-control-label" for="MaleGen">Male</label>
                   </div>
                   <div class="custom-control custom-radio custom-control-inline">
                       <input type="radio" class="custom-control-input GRBIDBfields" value="Female" onclick="AppTitle(); ChkGrProf();" id="FemGen" name="GRBI_GENTER">
                       <label class="custom-control-label" for="FemGen">Female</label>
                   </div>
                 <div class="custom-control custom-radio custom-control-inline"><!--onclick="CheckGender();"-->
                     <input type="radio" class="custom-control-input GRBIDBfields" value="Transgender" id="TransGen" name="GRBI_GENTER">
                     <label class="custom-control-label" for="TransGen">Other</label>
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
                    <input type="text" id="GRBI_DOB" name="GRBI_DOB" maxlength="10" onblur="AgeVal(this,GRBI_AGE);" class="form-control IsNumberFields ISDatefield  GRBIDBfields GRBIMndtry">
                    <label for="GRBI_DOB" class="">DOB<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"   />
                  </div>
                </div>
                <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                    <input type="text" id="GRBI_AGE"  name="GRBI_AGE"  disabled class="form-control NoSpecialChar GRBIDBfields GRBIMndtry">
                    <label for="GRBI_AGE" class="AGE">Age<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div>
            <div class="form-row INDU">
            <div class="col">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary GRBIDBfields" id="GRBI_CATEGORY" name="GRBI_CATEGORY">
                  	<option value="" selected>Select</option>
  					<option value="SC">SC</option>
 					 <option value="ST">ST</option>
 					 <option value="OBC">OBC</option>
  					<option value="General">General</option>
  					<option value="Others">Others</option>
				</select>
				<label class="mdb-main-label BTxt9">Category</label>
             </div>
            </div>
           	<div class="col">
           		<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary GRBIDBfields GRBIMndtry" onchange="CheckMarStatus();ChkGrProf()" id="GRBI_MARITSTUS" name="GRBI_MARITSTUS">
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
                  <div class="md-form ">
                    <input type="text" id="GRBI_SPOUSNAME"  maxlength="25" name="GRBI_SPOUSNAME" class="form-control GRBIDBfields IsAlphaFields NoSpecialChar">
                    <label for="GRBI_SPOUSNAME" class="">Spouse Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           <div class="col-md-6  PROFILE">
              <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary PROFILEVAL GRBIDBfields GRBIMndtry" onchange="DataToProfFld(this);CheckProfile();" data-change="GRBI_PROFILE" id="GRBI_NPROFILE" name="GRBI_NPROFILE">
                  	<option value="" selected>--Select--</option>
  				    <option class="GSTSAL" disabled value="Salaried">Salaried</option>
 					 <option value="SEP">SEP</option>
  					<option value="SENP">SENP</option>
 					 <option disabled value="Retired">Retired</option>
 					 <option class="HSWF" disabled value="Housewife">Housewife</option>
					 <option disabled value="Student">Student</option>
				</select>
				<label class="mdb-main-label BTxt9">Profile<span class="MndtryAstr">*</span></label>
             </div>
             </div>
			 
			 	<div class="col-md-6 PARTTYPE"  style="display:none">
				  <div class="md-form ">
                    <select class="mdb-select md-form colorful-select dropdown-primary GRBIDBfields"   id="GRBI_PARTNERSHPTY" name="GRBI_PARTNERSHPTY">
						<option value="Unregistered">Unregistered</option>
						<option value="Registered">Registered</option>
						
					</select>
						<label class="mdb-main-label BTxt9">Partnership Type<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div>
		   
		   
           <div class="form-row INDU">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="GRBI_NOOFDEPEND" maxlength="2"  name="GRBI_NOOFDEPEND" class="form-control NoSpecialChar GRBIDBfields GRBIMndtry IsNumberFields">
                    <label for="GRBI_NOOFDEPEND" class="">No of Dependents<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  	<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary GRBIDBfields GRBIMndtry" onchange="Chkqualify('GRBI_QUALIFICATION','GRBI_GOTHER','Category','Page')" id="GRBI_QUALIFICATION" name="GRBI_QUALIFICATION">
                  	<option value="" selected>--Select--</option>
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
		   <div class="col-md-6  OTHERS">
		          <div class="md-form">
                    <input type="text" id="GRBI_GOTHER" maxlength="20" name="GRBI_GOTHER" class="form-control GRBIDBfields NoSpecialChar  IsAlphaFields GRBIMndtry">
                    <label for="GRBI_GOTHER" class="">Others<span class="MndtryAstr">*</span></label>
                  </div>
				</div>
		   </div>
		   
		   
            </br>
                <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save1" data-form="PersonalInfo"  data-aria="LSW_TGURCUSBASICINFO|GRBI|GRBI_CUSID" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-form="PersonalInfo"  data-aria="LSW_TGURCUSBASICINFO|GRBI|GRBI_CUSID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
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
      <a class="collapsed Btxt7 AFormaccordion ACCRDISB  CONLOAD " data-toggle="collapse" data-form="Contact Details" data-multidata="" data-load="Yes" data-aria="LSW_TGURCUSADDRINFO|GRAI|GRAI_CUSID|GRBI_CUSID" data-parent="#accordionEx" href="#collapseTwo2"
        aria-expanded="false" aria-controls="collapseTwo2">
          Contact Details <i class="fa fa-plus-circle rotate-icon"></i>
      </a> 
    </div>
    <!-- Card body -->
    <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
      data-parent="#accordionEx">
      <div class="card-body px-lg-5 pt-0">
        <form>
        <input type="text" id="GRAI_PRCSID" hidden="hidden" name="GRAI_PRCSID" class="form-control GRAIDBfields">
        <input type="text" id="GRAI_ACTIVITYID" hidden="hidden" name="GRAI_ACTIVITYID" class="form-control GRAIDBfields">
        <input type="text" id="GRAI_CREATEDBY" hidden="hidden" name="GRAI_CREATEDBY" class="form-control GRAIDBfields">
        <input type="text" id="GRAI_DTCREATED" hidden="hidden" name="GRAI_DTCREATED" class="form-control GRAIDBfields">
        <input type="text" id="GRAI_MODIFIEDBY" hidden="hidden" name="GRAI_MODIFIEDBY" class="form-control GRAIDBfields">
        <input type="text" id="GRAI_DTMODIFIED" hidden="hidden" name="GRAI_DTMODIFIED" class="form-control GRAIDBfields">
        
        <input type="text" id="GRAI_CUSID" hidden="hidden" name="GRAI_CUSID" class="form-control GRAIDBfields">
        <div class="form-row">
             <div class="col-md-6 VERIFYBTNPOSITION">  
                  <div class="md-form">
				   <input type="text" id="GRAI_EMAILVERIFY" hidden="hidden" name="GRAI_EMAILVERIFY" class="form-control GRAIDBfields">
                    <!--<input type="text" id="GRAI_EMAILID"  maxlength="60"   name="GRAI_EMAILID" class="form-control IsEmailFields GRAIDBfields">-->
                     <!--<button type="button" data-Validatearia="GRAI_EMAILVERIFY" onclick="VerfyMail(this,$('#GRAI_EMAILID').val(),$('#GRAI_CUSID').val());SaveContDetl();" data-validate="email"  class="btn btn-Verify GRAI_EMAILID waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>-->
					   <button type="button"   data-Validatearia="GRAI_EMAILVERIFY" onclick="CheckMobValidKyc('GRAI_EMAILID','OTP','GRAI_CUSID','GRAI_EMAILVERIFY','EMAIL')" data-validate="otp"  class="btn btn-Verify GRAI_EMAILVERIFY waves-effect btn-yelInplain btn-sm BTNVerify VERIFYBTNPOSITIONRIGHT">Verify</button>
                   <input type="text" id="GRAI_EMAILID" maxlength="100"  data-link="GRAI_EMAILID|GRAI_EMAILVERIFY" name="GRAI_EMAILID" class="form-control datalink GRAIDBfields IsEmailFields GRAIMndtry">
					<label for="GRAI_EMAILID" class="">Email ID<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                   <div class="col-md-6 VERIFYBTNPOSITION">  
                  <div class="md-form">
				  <input type="text" id="GRAI_MOBIVERIFY" hidden="hidden" name="GRAI_MOBIVERIFY" class="form-control GRAIDBfields">
                   <!--<input type="text" id="GRAI_MOBNOI" maxlength="10" onchange="CheckDupMobNo('GRAI_MOBNOI','GRAI_MOBNOII','Mobile Number');DupMOBval('GRAI_PRCSID','GRAI_MOBNOI','GRAI_CUSID');" name="GRAI_MOBNOI" class="form-control GRAIDBfields IsNumberFields NoSpecialChar IsMobileFields">-->
				     <button type="button"  data-Validatearia="GRAI_MOBIVERIFY" onclick="CheckMobValidKyc('GRAI_MOBNOI','OTP','GRAI_CUSID','GRAI_MOBIVERIFY','SMS')" data-validate="otp"  class="btn btn-Verify GRAI_MOBNOI waves-effect btn-yelInplain btn-sm BTNVerify VERIFYBTNPOSITIONRIGHT">Verify</button>
                    <input type="text" id="GRAI_MOBNOI" data-link="GRAI_MOBNOI|GRAI_MOBIVERIFY"  onchange="CheckDupMobNo('GRAI_MOBNOI','GRAI_MOBNOII','Mobile Number');DupMOBval('GRAI_PRCSID','GRAI_MOBNOI','GRAI_CUSID');" maxlength="10" name="GRAI_MOBNOI" class="form-control datalink GRAIDBfields IsNumberFields NoSpecialChar IsMobileFields GRAIMndtry">
                    <label for="GRAI_MOBNOI" class="">Mobile Number 1<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
          </div>
          <div class="form-row">
                  <div class="col-md-6 VERIFYBTNPOSITION">  
                  <div class="md-form">
				  <input type="text" id="GRAI_MOBIIVERIFY" hidden="hidden" name="GRAI_MOBIIVERIFY" class="form-control GRAIDBfields">
                   <!-- <input type="text" id="GRAI_MOBNOII" maxlength="10" onchange="CheckDupMobNo('GRAI_MOBNOII','GRAI_MOBNOI','Mobile Number');" name="GRAI_MOBNOII" class="form-control GRAIDBfields NoSpecialChar IsNumberFields IsMobileFields">-->
                    <button type="button"  data-Validatearia="GRAI_MOBIIVERIFY"  onclick="CheckMobValidKyc('GRAI_MOBNOII','OTP','GRAI_CUSID','GRAI_MOBIIVERIFY','SMSII','Y')" data-validate="otp"  class="btn  GRAI_MOBNOII btn-Verify waves-effect btn-yelInplain btn-sm BTNVerify VERIFYBTNPOSITIONRIGHT ">Verify</button>
                    <input type="text" id="GRAI_MOBNOII" data-link="GRAI_MOBNOII|GRAI_MOBIIVERIFY" maxlength="10" onchange="CheckDupMobNo('GRAI_MOBNOII','GRAI_MOBNOI','Mobile Number');DupMOBval('GRAI_PRCSID','GRAI_MOBNOII','GRAI_CUSID');" name="GRAI_MOBNOII" class="form-control  GRAIDBfields datalink NoSpecialChar IsNumberFields IsMobileFields">
				   <label for="GRAI_MOBNOII" class="">Mobile Number 2</label>
                  </div>
                </div>
                <!--  <div class="col">
                  <div class="md-form INDU">
                    <input type="text" id="GRAI_OTP" name="GRAI_OTP" class="form-control GRAIDBfields IsNumberFields">
                    <label for="GRAI_OTP" class="">Enter OTP</label>
               </div>
            </div> -->
        </div>
       <div class="INDU">  
        <div class="form-row">
        	<div class="col Btxt10">CURRENT ADDRESS</div>
        </div>
        </br>
        
        <div class="form-row">
           
            <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_ADDRLINI" maxlength="60" name="GRAI_ADDRLINI" class="form-control AddrNoSpecialChar RSADDR GRAIDBfields GRAIMndtry">
                    <label for="GRAI_ADDRLINI" class="">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_ADDRLINII" maxlength="60" name="GRAI_ADDRLINII" class="form-control AddrNoSpecialChar RSADDR GRAIMndtry GRAIDBfields">
                    <label for="GRAI_ADDRLINII" class="">Address Line 2<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="GRAI_PINCODE" maxlength="6" name="GRAI_PINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'GRAI_STATE','GRAI_CITY','GRAI_STDC')" class="form-control RSADDR GRAIDBfields NoSpecialChar IsNumberFields IsPinFielde GRAIMndtry">
                    <label for="GRAI_PINCODE" class="">Pin Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_CITY" disabled name="GRAI_CITY" class="form-control ALLDIS RSADDR IsAlphaFields GRAIDBfields GRAIMndtry">
                    <label for="GRAI_CITY" class="">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="GRAI_STATE" disabled name="GRAI_STATE" class="form-control ALLDIS IsAlphaFields RSADDR GRAIDBfields GRAIMndtry">
                    <label for="GRAI_STATE" class="ADDR">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="GRAI_LNDMARK" maxlength="40" name="GRAI_LNDMARK" onchange="ChkLanMark(this,'GRAI_LNDMARK');" class="form-control  RSADDR GRAIDBfields GRAIMndtry">
                    <label for="GRAI_LNDMARK" class="">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary RSADDR GRAIDBfields GRAIMndtry" id="GRAI_RESIDTYPE" name="GRAI_RESIDTYPE" >
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
                        <input type="text" id="GRAI_STDC" maxlength="11" style="width:75px"  name="GRAI_STDC" class="form-control RSADDR GRAIDBfields IsNumberFields IsLandlneFields"> 
                        <label for="GRAI_STDC" class="">STD</label>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                    <input type="text" id="GRAI_LNDLINENO" maxlength="11"  name="GRAI_LNDLINENO" class="form-control RSADDR GRAIDBfields IsNumberFields IsLandlneFields">
                    <label for="GRAI_LNDLINENO" class="">Landline No</label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
				<input type="text" id="GRAI_YEAROFRESID" maxlength="2"  name="GRAI_YEAROFRESID" class="form-control RSADDR GRAIDBfields NoSpecialChar IsNumberFields GRAIMndtry">
                    <label for="GRAI_YEAROFRESID" class="">Years of Residence<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary RSADDR GRAIDBfields" onchange="Chkresi()" id="GRAI_MONTHS" name="GRAI_MONTHS">
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
            <!--<div class="col-md-5">
            	<div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input GRAIDBfields" id="GRAI_KYCDOCAVAIL" name="GRAI_KYCDOCAVAIL">
  					<label class="custom-control-label" for="GRAI_KYCDOCAVAIL">KYC document available</label>
				</div>
				</div>
            </div>-->
			<div class="col-md-2 Formcol-mdLR TxtCenter ADDRVI" style="display:none">
              <div class="md-form">
                   <input type="text" id="GRAI_ADDRPROOF1" data-val=""  hidden="hidden" data-Validate="GRAI_ADDRPROOF1"  name="GRAI_ADDRPROOF1" class="form-control voter File">
                     <div class="GRAI_ADDRPROOF1" style="display">  
                    <img src="ThemeproLO/Common/Images/Eyeview.png" title="Address Proof One View"  class="rounded" onclick="GrdDocDwnld('GRAI_ADDRPROOF1')" alt="Cinque Terre" width="35" height="25">Address Proof 1</div>
              </div>
            </div> 
            <div class="col-md-5">
            </div>
        </div>
        <div class="form-row">
        	<div class="col Btxt10">CORRESPONDENCE ADDRESS</div>
        </div>
        </br>
        <div class="form-row">
            <div class="col-md-5">
            	<div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input GRAIDBfields" onclick="CheckAddrMndtry()" id="GRAI_SAMRESIDADDR" name="GRAI_SAMRESIDADDR">
  					<label class="custom-control-label" for="GRAI_SAMRESIDADDR">Same as Current Address</label>
				</div>
				</div>
            </div>
			<div class="col-md-2 Formcol-mdLR TxtCenter ADDRVII" style="display:none">
              <div class="md-form">
                <input type="text" id="GRAI_ADDRPROOF2" data-val=""  hidden="hidden" data-Validate="GRAI_ADDRPROOF2"  name="GRAI_ADDRPROOF2" class="form-control voter File">
                 <div class="GRAI_ADDRPROOF2" style="display">  
                   <img src="ThemeproLO/Common/Images/Eyeview.png" title="Address Proof Two View"  class="rounded" onclick="GrdDocDwnld('GRAI_ADDRPROOF2')" alt="Cinque Terre" width="35" height="25">Address Proof 2</div>
              </div>
            </div> 
            <div class="col-md-5">
            </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="GRAI_PREMADDRLINI" maxlength="60"  name="GRAI_PREMADDRLINI" class="form-control PRADDR AddrNoSpecialChar GRAIDBfields GRAIMndtry">
                    <label for="GRAI_PREMADDRLINI" class="ADDR">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_PERMADDRLINII" maxlength="60" name="GRAI_PERMADDRLINII" class="form-control AddrNoSpecialChar PRADDR GRAIMndtry GRAIDBfields">
                    <label for="GRAI_PERMADDRLINII" class="ADDR">Address Line 2<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col"> 
                  <div class="md-form">
                    <input type="text" id="GRAI_PERMPINCODE" maxlength="6" name="GRAI_PERMPINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'GRAI_PERMSTATE','GRAI_PERMCITY','GRAI_PSTDC')" class="form-control PRADDR GRAIDBfields NoSpecialChar IsNumberFields IsPinFielde GRAIMndtry">
                    <label for="GRAI_PERMPINCODE" class="ADDR">Pin Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_PERMCITY" disabled name="GRAI_PERMCITY"  class="form-control ALLDIS IsAlphaFields PRADDR GRAIDBfields GRAIMndtry">
                    <label for="GRAI_PERMCITY" class="ADDR">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           
        </div>
        
        <div class="form-row">
           
            <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_PERMSTATE" disabled name="GRAI_PERMSTATE" class="form-control ALLDIS PRADDR IsAlphaFields GRAIDBfields GRAIMndtry">
                    <label for="GRAI_PERMSTATE" class="ADDR">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_PERMLNDMARK" maxlength="40" name="GRAI_PERMLNDMARK" onchange="ChkLanMark(this,'GRAI_PERMLNDMARK');" class="form-control  PRADDR GRAIDBfields GRAIMndtry">
                    <label for="GRAI_PERMLNDMARK" class="ADDR">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           
        </div>
        
        <div class="form-row">
           
            <div class="col-md-6">
                  
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary PRADDR GRAIDBfields GRAIMndtry" id="GRAI_PERMRESIDTYPE" name="GRAI_PERMRESIDTYPE">
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
                        <input type="text" id="GRAI_PSTDC" maxlength="11" style="width:75px"  name="GRAI_PSTDC" class="form-control PRADDR GRAIDBfields IsNumberFields IsLandlneFields"> 
                        <label for="GRAI_PSTDC" class="ADDR">STD</label>
                </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                    <input type="text" id="GRAI_PERMLNDLINENO" maxlength="11"  name="GRAI_PERMLNDLINENO" class="form-control PRADDR GRAIDBfields IsNumberFields IsLandlneFields">
                    <label for="GRAI_PERMLNDLINENO" class="ADDR">Landline No</label>
                  </div>
               </div>
           
        </div>
        
        <div class="form-row">
           
            <div class="col">
                  <div class="md-form">
				 <input type="text" id="GRAI_PERMYEAROFRESID" maxlength="2"  name="GRAI_PERMYEAROFRESID" class="form-control  PRADDR GRAIDBfields NoSpecialChar IsNumberFields GRAIMndtry">
                    <label for="GRAI_PERMYEAROFRESID" class="ADDR">Years of Residence<span class="MndtryAstr">*</span></label>
                  </div>
                  
                </div>
                <div class="col">
                  
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary PRADDR GRAIDBfields" id="GRAI_PERMMONTHS" name="GRAI_PERMMONTHS">
                  	<option value="" selected>--Select--</option>
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
		<!--NEWLY CURRENT ADDRESS ADDED FOR OVD CHANGES START-->
		 <div class="form-row" Style="display:none">
        	<div class="col Btxt10">CURRENT ADDRESS</div>
        </div>
        </br>
        
        <div class="form-row" Style="display:none">
           
            <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_CURADDRLINI" maxlength="60" name="GRAI_CURADDRLINI" class="form-control AddrNoSpecialChar RSADDR GRAIDBfields GRAIMndtry">
                    <label for="GRAI_CURADDRLINI" class="">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_CURADDRLINII" maxlength="60" name="GRAI_CURADDRLINII" class="form-control AddrNoSpecialChar RSADDR GRAIMndtry GRAIDBfields">
                    <label for="GRAI_CURADDRLINII" class="">Address Line 2<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row" Style="display:none">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="GRAI_CURPINCODE" maxlength="6" name="GRAI_CURPINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'GRAI_CURSTATE','GRAI_CURCITY','GRAI_STDC')" class="form-control RSADDR GRAIDBfields NoSpecialChar IsNumberFields IsPinFielde GRAIMndtry">
                    <label for="GRAI_CURPINCODE" class="">Pin Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_CURCITY" disabled name="GRAI_CURCITY" class="form-control ALLDIS RSADDR IsAlphaFields GRAIDBfields GRAIMndtry">
                    <label for="GRAI_CURCITY" class="">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row" Style="display:none">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="GRAI_CURSTATE" disabled name="GRAI_CURSTATE" class="form-control ALLDIS IsAlphaFields RSADDR GRAIDBfields GRAIMndtry">
                    <label for="GRAI_CURSTATE" class="ADDR">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="GRAI_CURLNDMARK" maxlength="40" name="GRAI_CURLNDMARK" onchange="ChkLanMark(this,'GRAI_CURLNDMARK');" class="form-control  RSADDR GRAIDBfields GRAIMndtry">
                    <label for="GRAI_CURLNDMARK" class="">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
              </div>
              <div class="form-row" Style="display:none">
                <div class="col-md-6">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary RSADDR GRAIDBfields GRAIMndtry" id="GRAI_CURRESIDTYPE" name="GRAI_CURRESIDTYPE" >
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
                        <input type="text" id="GRAI_CURSTDC" maxlength="11" style="width:75px"  name="GRAI_CURSTDC" class="form-control RSADDR GRAIDBfields IsNumberFields IsLandlneFields"> 
                        <label for="GRAI_CURSTDC" class="">STD</label>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                    <input type="text" id="GRAI_CURLNDLINENO" maxlength="11"  name="GRAI_CURLNDLINENO" class="form-control RSADDR GRAIDBfields IsNumberFields IsLandlneFields">
                    <label for="GRAI_CURLNDLINENO" class="">Landline No</label>
                  </div>
               </div>
        </div>
        <div class="form-row" Style="display:none">
            <div class="col">
                  <div class="md-form">
				<input type="text" id="GRAI_CURYEAROFRESID" maxlength="2"  name="GRAI_CURYEAROFRESID" class="form-control RSADDR GRAIDBfields NoSpecialChar IsNumberFields GRAIMndtry">
                    <label for="GRAI_CURYEAROFRESID" class="">Years of Residence<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary RSADDR GRAIDBfields" onchange="Chkresi()" id="GRAI_CURMONTHS" name="GRAI_CURMONTHS">
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
		<!--NEWLY CURRENT ADDRESS ADDED FOR OVD CHANGES END-->
        </div>
		</div>
        
        <div class="NINDU">  
        <div class="form-row">
        	<div class="col Btxt10">ORGANIZATION ADDRESS</div>
			<div class="col-md-2 Formcol-mdLR TxtCenter ADDRVI" style="display:none">
              <div class="md-form">
                   <input type="text" id="GRAI_NIADDRPROOF1" data-val=""  hidden="hidden" data-Validate="GRAI_NIADDRPROOF1"  name="GRAI_NIADDRPROOF1" class="form-control voter File">
                     <div class="GRAI_NIADDRPROOF1" style="display">  
                    <img src="ThemeproLO/Common/Images/Eyeview.png" title="Address Proof One View"  class="rounded" onclick="GrdDocDwnld('GRAI_NIADDRPROOF1')" alt="Cinque Terre" width="35" height="25"> </div>
              </div>
            </div> 
            <div class="col-md-5">
            </div>
        </div>
              
        <div class="form-row">
           
            <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_ORGADDRLINI"  maxlength="60" name="GRAI_ORGADDRLINI" class="form-control AddrNoSpecialChar  ORGADD GRAIDBfields GRAIMndtry">
                    <label for="GRAI_ORGADDRLINI" class="">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_ORGADDRLINII" maxlength="60"  name="GRAI_ORGADDRLINII" class="form-control AddrNoSpecialChar ORGADD GRAIMndtry GRAIDBfields">
                    <label for="GRAI_ORGADDRLINII" class="">Address Line 2<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           
        </div>
        
        <div class="form-row">
           
            <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_ORGPINCODE" maxlength="6" name="GRAI_ORGPINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'GRAI_ORGSTATE','GRAI_ORGCITY','GRAI_ORGSTDC')" class="form-control  NoSpecialChar GRAIDBfields IsNumberFields IsPinFielde GRAIMndtry">
                    <label for="GRAI_ORGPINCODE" class="">Pin Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_ORGCITY" disabled name="GRAI_ORGCITY" class="form-control GRAIDBfields GRAIMndtry">
                    <label for="GRAI_ORGCITY" class="">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           
        </div>
        
        <div class="form-row">
           
            <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_ORGSTATE" disabled name="GRAI_ORGSTATE" class="form-control GRAIDBfields GRAIMndtry">
                    <label for="GRAI_ORGSTATE" class="">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="GRAI_ORGLNDMARK" onchange="ChkLanMark(this,'GRAI_ORGLNDMARK');" maxlength="40" name="GRAI_ORGLNDMARK" class="form-control ORGADD GRAIDBfields GRAIMndtry">
                    <label for="GRAI_ORGLNDMARK" class="">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           
        </div>
        
        <div class="form-row">
           
            <div class="col-md-6">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary GRAIDBfields " id="GRAI_ORGRESIDTYPE" name="GRAI_ORGRESIDTYPE">
                  	<option value="">Select</option>
  					<option value="Self Owned">Self Owned</option>
 					 <option value="Rented">Rented</option>
					  <option value="Leased">Leased</option>
				</select>
				<label class="mdb-main-label BTxt9">Ownership status<span class="MndtryAstr"></span></label>
             </div>
                </div>
                <div class="col-md-1">
                   <div class="md-form">
                        <input type="text" id="GRAI_ORGSTDC" maxlength="4" style="width:75px"  name="GRAI_ORGSTDC" class="form-control PRADDR GRAIDBfields IsNumberFields GRAIMndtry"> 
                        <label for="GRAI_ORGSTDC" class="">STD</label>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                    <input type="text" id="GRAI_ORGLNDLINENO" maxlength="11"  name="GRAI_ORGLNDLINENO" class="form-control GRAIDBfields IsNumberFields IsLandlneFields GRAIMndtry">
                    <label for="GRAI_ORGLNDLINENO" class="">Landline No</label>
                  </div>
               </div>
        </div>
        <div class="form-row INDU">
            <div class="col">
                  <div class="md-form">
				<input type="text" id="GRAI_ORGYEAROFRESID" maxlength="2" name="GRAI_ORGYEAROFRESID" class="form-control RSADDR GRAIDBfields NoSpecialChar IsNumberFields GRAIMndtry">
                    <label for="GRAI_ORGYEAROFRESID" class="">Years of Residence<span class="MndtryAstr">*</span></label>
                  </div>
                  </div>
               <div class="col">   
                <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary GRAIDBfields" id="GRAI_ORGMONTHS" name="GRAI_ORGMONTHS">
                  	<option value="" selected>--Select--</option>
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
                     <button type="button" id="Save2" data-form="ContactDetails" data-aria="LSW_TGURCUSADDRINFO|GRAI|GRAI_CUSID" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-form="ContactDetails" data-aria="LSW_TGURCUSADDRINFO|GRAI|GRAI_CUSID" data-card="1" data-for="SAVENEXT"  class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
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
                        <a class="collapsed Btxt7 AFormaccordion ACCRDISB EMPDLOAD" data-load="Employment Details" data-multidata="BTNEMPMULTIDATA" data-aria="LSW_TGURCUSEMPINFO|GREI|GREI_CUSID|GRBI_CUSID" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                           aria-expanded="false" aria-controls="collapseThree3">
                        Employment Details <i class="fa fa-plus-circle rotate-icon"></i>
                        </a>
                     </div>
                    
                     <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
                        data-parent="#accordionEx">
                       
                        <span class="HyperControls FltRight" >
                        <a onclick="AddPageMultiData('',$('#GRBI_PRCSID').val(),'','BankDetail1','GREIDBfields')" class="Btxt4 FltRight"  href="#">+ Add Employment</a>
                        <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                       </span>
                       </br>
                        <div data-for="BankDetail1" class="BankDetail1"> 
                        </div>
                        <div class="DynamicPageGrid" data-val="PROPTXTHDR|Employment" id="BankDetail1" style="display:none">
                        	<div class="card-body px-lg-5 pt-0 BSbrd DYNROW" >
                           <form>
                              <input type="text" id="GREI_PRCSID" hidden="hidden" name="GREI_PRCSID" class="form-control GREIDBfields">
                              <input type="text" id="GREI_ACTIVITYID" hidden="hidden" name="GREI_ACTIVITYID" class="form-control GREIDBfields">
                              <input type="text" id="GREI_CREATEDBY" hidden="hidden" name="GREI_CREATEDBY" class="form-control GREIDBfields">
                              <input type="text" id="GREI_DTCREATED" hidden="hidden" name="GREI_DTCREATED" class="form-control GREIDBfields">
                              <input type="text" id="GREI_MODIFIEDBY" hidden="hidden" name="GREI_MODIFIEDBY" class="form-control GREIDBfields">
                              <input type="text" id="GREI_DTMODIFIED" hidden="hidden" name="GREI_DTMODIFIED" class="form-control GREIDBfields">
                              <input type="text" id="GREI_CUSID" hidden="hidden" name="GREI_CUSID" class="form-control GREIDBfields">
                              <input type="text" id="GREI_EMPID" hidden="hidden" name="GREI_EMPID" class="form-control GREIDBfields">
                              </br>
							               <div class="form-row DLTICON" style="display:none">
           <div class="col ">
           <div class="FltRight DELBTNTXT ">
           Delete Employment Details
           <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="GREI_PRCSID|GREI_EMPID|COAPPEMPDETAILS" class="DELBTN  DELETECOAPPEMP"/>
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
                                       <div  class="select-radio SEPM">
                                          <div class="custom-control custom-radio custom-control-inline">
                                             <input type="radio" class="custom-control-input GREIDBfields" onclick="GetOfficaddr();" value="Owned" id="OrgOwned" name="GREI_ORGANIADDR">
                                             <label class="custom-control-label" for="OrgOwned">Owned</label>
                                          </div>
                                          <div class="custom-control custom-radio custom-control-inline">
                                             <input type="radio" class="custom-control-input GREIDBfields"  onclick="GetOfficaddr();" value="Rented" id="OrgRent" name="GREI_ORGANIADDR">
                                             <label class="custom-control-label" for="OrgRent">Rented</label>
                                          </div>
                                          <div class="custom-control custom-radio custom-control-inline">
                                             <input type="radio" class="custom-control-input GREIDBfields"  onclick="GetOfficaddr();" value="Resi-cum-office" id="OrgResOff" name="GREI_ORGANIADDR">
                                             <label class="custom-control-label" for="OrgResOff">Resi-cum-office</label>
                                          </div>
                                       </div>
									   <label class="mdb-main-label BTxt9">Office type<span class="MndtryAstr">*</span></label> 
                                    </div>
                                 </div>
                              </div>
                              <div class="form-row" style="display:none">
                                 <div class="col GREIDBfields" id="GREI_GSTNUM" name="GREI_GSTNUM" >GST Number <b>2635276</b>, Tamil Nadu</div> 
                              </div>
                              </br>
                              <div class="form-row">
                                 <div class="col">
                                    <div class="md-form">
                                       <input type="text" id="GREI_ORGANINAME" maxlength="75"  name="GREI_ORGANINAME" class="form-control GREIDBfields IsAlphaFields GREIMndtry NoSpecialChar PROCHGS">
                                       <label for="GREI_ORGANINAME" class="PROCHGAC">Organisation Name<span class="MndtryAstr">*</span></label>
                                    </div>
                                 </div>
                                 <div class="col">
                                 </div>
                              </div>
                              <div class="form-row">
                                 <div class="col">
                                    <div class="md-form">
                                       <input type="text" id="GREI_ADDRLINEI" maxlength="60"  name="GREI_ADDRLINEI" class="form-control AddrNoSpecialChar OFFADDR GREIDBfields GREIMndtry PROCHGS">
                                       <label for="GREI_ADDRLINEI" class="OADDR PROCHGAC">Address Line 1<span class="MndtryAstr">*</span></label>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="md-form">
                                       <input type="text" id="GREI_ADDRLINEII" maxlength="60"  name="GREI_ADDRLINEII" class="form-control AddrNoSpecialChar OFFADDR GREIDBfields GREIMndtry PROCHGS">
                                       <label for="GREI_ADDRLINEII" class="OADDR PROCHGAC">Address Line 2<span class="MndtryAstr">*</span></label>
                                    </div>
                                 </div>
                              </div>
                              <div class="form-row">
                                 <div class="col">
                                    <div class="md-form">
                                       <input type="text" id="GREI_PINCODE" maxlength="6" name="GREI_PINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'GREI_STATE'+$(this).closest('.DYNROW').attr('data-row'),'GREI_CITY'+$(this).closest('.DYNROW').attr('data-row'))" class="form-control GREIDBfields OFFADDR NoSpecialChar IsNumberFields IsPinFielde GREIMndtry PROCHGS">
                                       <label for="GREI_PINCODE" class="OADDR PROCHGAC">Pin Code<span class="MndtryAstr">*</span></label>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="md-form">
                                       <input type="text" disabled id="GREI_CITY" name="GREI_CITY" class="form-control GREIDBfields GREIMndtry PROCHGS">
                                       <label for="GREI_CITY" class="OADDR PROCHGAC">City<span class="MndtryAstr">*</span></label>
                                    </div>
                                 </div>
                              </div>
                              <div class="form-row">
                                 <div class="col">
                                    <div class="md-form">
                                       <input type="text" disabled id="GREI_STATE" name="GREI_STATE" class="form-control GREIDBfields GREIMndtry PROCHGS">
                                       <label for="GREI_STATE" class="OADDR PROCHGAC">State<span class="MndtryAstr">*</span></label>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="md-form">
                                       <input type="text" id="GREI_LNDMARK" name="GREI_LNDMARK" onchange="ChkLanMark(this,'GREI_LNDMARK'+$(this).closest('.DYNROW').attr('data-row'));" class="form-control   OFFADDR GREIDBfields GREIMndtry PROCHGS">
                                       <label for="GREI_LNDMARK" class="OADDR PROCHGAC">Landmark<span class="MndtryAstr">*</span></label>
                                    </div>
                                 </div>
                              </div>
                              <div class="form-row">
							  <div class="col-md-1 SEP">
                                       <div class="md-form">
                                          <input type="text" id="GREI_STDC" maxlength="4" style="width:75px" name="GREI_STDC" class="form-control OFFADDR GREIDBfields IsNumberFields PROCHGS"> 
                                          <label for="GREI_STDC" class="OADDR PROCHGS">STD</label>
                                       </div>
                                    </div>
                                 <div class="col-md-5 SEP">
                                    <div class="md-form SEP">
                                       <input type="text" id="GREI_LNDLINENO" maxlength="11"  name="GREI_LNDLINENO" class="form-control GREIDBfields OFFADDR IsNumberFields PROCHGS">
                                       <label for="GREI_LNDLINENO" class="OADDR PROCHGAC">Landline No</label>
                                    </div>
                                 </div>
                                 <div class="col-md-6 SEP">
                                    <div class="md-form">
                                       <select class="md-form colorful-select dropdown-primary GREIDBfields SEPM" onchange="GetNaturBusness(this,'GREI_NATRBUSINESS','GREI_CLUSTER')" id="GREI_INDUSCATRGORY" name="GREI_INDUSCATRGORY">
                                        
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
                                          <option value="Forestry & Fishery">Forestry & Fishery</option>
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
                                       <select class=" md-form colorful-select dropdown-primary GREIDBfields SEPM" onchange="GetClusterBusness('GREI_INDUSCATRGORY',this,'GREI_CLUSTER')" id="GREI_NATRBUSINESS" name="GREI_NATRBUSINESS">
										<option value="" selected>--Select--</option>
                                       </select>
                                       <label class="">Nature of Business/Industry<span class="MndtryAstr">*</span></label>
                                    </div>
                                 </div>
                                 <div class="col-md-6">
                                    <div class="md-form">
                                       <input type="text" id="GREI_CLUSTER" disabled name="GREI_CLUSTER" class="form-control GREIDBfields SEPM">
                                       <label for="GREI_CLUSTER" class="">Cluster<span class="MndtryAstr">*</span></label>
                                    </div>
                                 </div>
                              </div>
                         <!--      <div class="form-row" style="display:none">
                                 <div class="col">
                                    <div class="md-form">
                                       <div class="custom-control custom-radio custom-control-inline">
                                          <input type="checkbox" class="custom-control-input GREIDBfields" id="GREI_KYCDOCAVAIL" name="GREI_KYCDOCAVAIL">
                                          <label class="custom-control-label" for="GREI_KYCDOCAVAIL">KYC document available</label>
                                       </div>
                                    </div>
                                 </div>
                              </div> -->
                              <div class="form-row">
                                 <div class="col Btxt10">ORGANISATION DETAILS</div>
                              </div>
                              </br>
                              <div class="form-row">
                                 <div class="col">
                                    <div class="md-form">
                                       <input type="text" id="GREI_DATOFESTABLIS" maxlength="10" onblur="CompareJointoDOB(this,GRBI_DOB,GREI_NOOFYERBUSINESS,'GRBI_PROFILE');ExpYearvalid(this,GREI_NOOFYERBUSINESS);" name="GREI_DATOFESTABLIS" class="form-control NoSpecialChar ISFutureDateFields GREIDBfields IsNumberFields ISDatefield ">
                                       <label for="GREI_DATOFESTABLIS" class="">Date of Establishment<span class="MndtryAstr">*</span></label>
                                       <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"   />
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="md-form">
                                       <input type="text" id="GREI_NOOFYERBUSINESS" maxlength="2" name="GREI_NOOFYERBUSINESS" disabled class="form-control GREIDBfields NoSpecialChar IsNumberFields">
                                       <label for="GREI_NOOFYERBUSINESS" class="AGE">No. of Years in Business</label>
                                    </div>
                                 </div>
                              </div>
                             <div class="form-row SEP OEMPONE">
                                    <div class="col">
                                       <div class="md-form">
                                          <select class="md-form colorful-select dropdown-primary SEPM GREIDBfields EMPI"  id="GREI_NEGATLIST" name="GREI_NEGATLIST">
                                            <option value="">--Select--</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">Negative List<span class="MndtryAstr">*</span></label>
                                      
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                         <select class="md-form colorful-select dropdown-primary SEPM GREIDBfields EMPI"  id="GREI_CAUTLIST" name="GREI_CAUTLIST">
                                          <option value="">--Select--</option>
                                         </select>
                                          <label class="mdb-main-label BTxt9">Caution List<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                              <div class="form-row SAL OEMPONE">
                                 <div class="col">
                                    <div class="md-form">
                                       <input type="text" id="GREI_TOTEXPER" name="GREI_TOTEXPER" maxlength="2" onblur="yearsCompare('GREI_TOTEXPER'+$(this).closest('.DYNROW').attr('data-row'),'GREI_NOOFYERBUSINESS'+$(this).closest('.DYNROW').attr('data-row'),'Current Experience Years Should not greater than Total Experience years')" class="form-control SALM GREIDBfields NoSpecialChar IsNumberFields">
                                       <label for="GREI_TOTEXPER" class="">Total Experience<span class="MndtryAstr">*</span></label>
                                    </div>
                                 </div>
                                 <div class="col">
                                    <div class="md-form">
                                       <input type="text" id="GREI_DESIGNATION" maxlength="25"  name="GREI_DESIGNATION" class="form-control SALM  IsAlphaFields GREIDBfields">
                                       <label for="GREI_DESIGNATION" class="">Designation<span class="MndtryAstr">*</span></label>
                                    </div>
                                 </div>
                              </div>
                              <div class="form-row">
                                 <div class="col-md-6 SAL">
                                    <div class="md-form">
                                       <input type="text" id="GREI_LANDLNO" maxlength="11" name="GREI_LANDLNO" class="form-control IsNumberFields GREIDBfields">
                                       <label for="GREI_LANDLNO" class="">Landline No<span class="MndtryAstr"></span></label>
                                    </div>
                                 </div>
                                 <div class="col-md-6">
                                    <div class="md-form">
                                       <select class="md-form colorful-select dropdown-primary GREIDBfields" id="GREI_KYCCATEGORY" name="GREI_KYCCATEGORY" >
                                          <option value="" selected>--Select--</option>
                                          <option value="Low 1">Low</option>
                                          <option value="Medium 2">Medium</option>
                                          <option value="High">High</option>
                                       </select>
                                       <label class="mdb-main-label BTxt9">KYC Category<span class="MndtryAstr"></span></label>
                                    </div>
                                 </div>
									<div class="col-md-6 SEP OEMPONE">
                                       <div class="md-form">
                                           <select class="md-form colorful-select dropdown-primary SEPM GREIDBfields EMPI" id="GREI_PAR" name="GREI_PAR">
                                            <option value="">--Select--</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">PAR<span class="MndtryAstr">*</span></label>
                                      
                                       </div>
                                    </div>
                              </div>
							   <div class="form-row">
									<div class="col-md-6">				
										<div class="md-form">
										   <div class="custom-control custom-radio custom-control-inline ">
												   <input type="checkbox" class="custom-control-input GREIDBfields" id="GREI_GPLOANS" name="GREI_GPLOANS">
												   <label class="custom-control-label" for="GREI_GPLOANS">Part of Loan Structure</label>
										   </div>
										 </div>  
									 </div>
									 <div class="col-md-6">
											<div class="md-form">
												<input type="text" id="GREI_GSTAKE" maxlength="5"  name="GREI_GSTAKE" class="form-control IsNumberFields IsPercentageSPL GREIDBfields">
												<label for="GREI_GSTAKE" class="">% of Stake</label>
											</div>
									</div>
							  </div>
								<!-- <div class="form-row " style="display:none">
										<div class="col-md-6" >
											<div class="md-form">
												<input type="text" id="GREI_GEUAMNO" maxlength="19"  name="GREI_GEUAMNO" class="form-control IsUpprCse IsUAMFields Udayamfield GUEUDHA GREIDBfields">
												<label for="GREI_GEUAMNO" class="">Udyam Registration No<span class="MndtryAstr"></span></label>
											</div>
										</div>
									<div class="col-md-6">
									 <div class="md-form">
										   <div class="custom-control custom-radio custom-control-inline ">
												   <input type="checkbox" class="custom-control-input GREIDBfields" id="GREI_GECUAMNO" name="GREI_GECUAMNO">
												   <label class="custom-control-label" for="GREI_GECUAMNO">Applied for Udyam Number<span class="MndtryAstr"></span></label>
										   </div>
									 </div>
									</div>
								</div> -->
								
                              <div class="form-row SEP PRECOMM">
                                 <div class="col">
                                    <div class="md-form">
                                       <div id="ORGSEP" class="select-radio GREIMndtry">
                                          <div class="custom-control custom-radio custom-control-inline">
                                             <input type="radio" class="custom-control-input GREIDBfields" value="Permanent Residence" id="PrePerRes" name="GREI_PREFCOMMUADDR">
                                             <label class="custom-control-label" for="PrePerRes">Correspondence Address</label>
                                          </div>
                                          <div class="custom-control custom-radio custom-control-inline">
                                             <input type="radio" class="custom-control-input GREIDBfields" value="Current Residence" id="PreCurRes" name="GREI_PREFCOMMUADDR">
                                             <label class="custom-control-label" for="PreCurRes">Current Address</label>
                                          </div>
                                          <div class="custom-control custom-radio custom-control-inline">
                                             <input type="radio" class="custom-control-input GREIDBfields" value="Office" id="PreOff" name="GREI_PREFCOMMUADDR">
                                             <label class="custom-control-label" for="PreOff">Office Address</label>
                                          </div>
                                       </div>
                                       <label class="mdb-main-label BTxt9">Preferred Communication Address *</label>      
                                    </div>
                                 </div>
                              </div>
                              <!--<div class="form-row" style="display:none">
                                 <div class="col">
                                    <div class="md-form">
                                       <div class="custom-control custom-radio custom-control-inline">
                                          <input type="checkbox" class="custom-control-input GREIDBfields" id="GREI_INCCONSID" name="GREI_INCCONSID">
                                          <label class="custom-control-label" for="GREI_INCCONSID">Income to be considered<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                              </div>-->
                              </br>
                              <div class="form-row">
                                 <div class="col d-flex justify-content-center">
                                    <button type="button" id="Save3" data-aria="LSW_TGURCUSEMPINFO|GREI|GREI_EMPID" data-for="SAVENEXT" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                                    <button type="button" data-aria="LSW_TGURCUSEMPINFO|GREI|GREI_EMPID" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                                 </div>
                              </div>
                           </form>
                  </div>
               </div>
            </div>
         </div>
  <div class="card NINDU ORG">
    <!-- Card header -->
    <div class="card-header Btxt7" role="tab" id="headingFour4">
      <a class="collapsed Btxt7 AFormaccordion ORGDETAL ACCRDISB" data-toggle="collapse" data-multidata="" data-aria="LSW_TCUSORGDTLGUR|GUOA|GUOA_CUSID|GRBI_CUSID" data-load="Yes" data-parent="#accordionEx" href="#collapseFour4"
        aria-expanded="false" aria-controls="collapseFour4">
          Organisation Details <i class="fa fa-plus-circle rotate-icon"></i>
      </a>
    </div> 
    <!-- Card body -->
    <div id="collapseFour4" class="collapse" role="tabpanel" aria-labelledby="headingFour4"
      data-parent="#accordionEx">
      <div class="card-body px-lg-5 pt-0">
      	<form>
      	 <input type="text" id="GUOA_PRCSID" hidden="hidden" name="GUOA_PRCSID" class="form-control GUOADBfields">
         <input type="text" id="GUOA_ACTIVITYID" hidden="hidden" name="GUOA_ACTIVITYID" class="form-control GUOADBfields">
         <input type="text" id="GUOA_CREATEDBY" hidden="hidden" name="GUOA_CREATEDBY" class="form-control GUOADBfields">
         <input type="text" id="GUOA_DTCREATED" hidden="hidden" name="GUOA_DTCREATED" class="form-control GUOADBfields">
         <input type="text" id="GUOA_MODIFIEDBY" hidden="hidden" name="GUOA_MODIFIEDBY" class="form-control GUOADBfields">
         <input type="text" id="GUOA_DTMODIFIED" hidden="hidden"  name="GUOA_DTMODIFIED" class="form-control GUOADBfields">
         <input type="text" id="GUOA_CUSID" hidden="hidden"  name="GUOA_CUSID" class="form-control GUOADBfields">
      	    <div class="form-row">
      			<!-- <div class="col" id="GUOA_GSTNUM" name="GUOA_GSTNUM" >GST Number <b>2635276</b>, Tamil Nadu</div> -->
      		</div>
      		</br>
        <div class="form-row">
            <div class="col">
                <div class="md-form">
                    <input type="text" id="GUOA_CIN" maxlength="22" name="GUOA_CIN" onchange="Checkcin('GUOA_PRCSID','GUOA_CIN','GUOA_CUSID');" class="form-control GUOADBfields IsCINno NoSpecialChar">
                    <label for="GUOA_CIN" class="">CIN<span class="MndtryAstr"></span></label>
                  </div>
               </div>
               <div class="col">
                  <div class="md-form">
                    <input type="text" id="GUOA_INCORPDT" maxlength="10"  name="GUOA_INCORPDT" class="form-control NoSpecialChar ISFutureDateFields GUOADBfields IsNumberFields ISDatefield  NoSpecialChar GUOAMndtry">
                    <label for="GUOA_INCORPDT" class="">Date Of Incorporation<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"   />
                  </div>
             </div>
        </div>
		<!--<div class="form-row GUNON">
				<div class="col-md-6 ">
                    <div class="md-form">
                       <div class="custom-control custom-radio custom-control-inline ">
                               <input type="checkbox" class="custom-control-input CUDHA GUOADBfields" onchange="Chkudha();" id="GUOA_GCUAMNO" name="GUOA_GCUAMNO">
                               <label class="custom-control-label" for="GUOA_GCUAMNO">Applied for Udyam Number<span class="MndtryAstr"></span></label>
                       </div>
                    </div>
				</div>
				<div class="col-md-6 " >
                    <div class="md-form">
                       <input type="text" id="GUOA_UDYAMVERI" hidden="hidden" maxlength="30" name="GUOA_UDYAMVERI" class="form-control GUOADBfields">
                       <button type="button" data-Validatearia="GUOA_UDYAMVERI" onclick="CheckKYCDetl(this,'GUOA_GUAMNO','GUOA_UDYAMVERI','UDYAM');Chkudha();" data-field="GUOA_UDYAMVERI|GUOA_UPDUAMNO|GRBI_CUSTYPE|GRBI_CUSID|" data-validate="gstin"  class="btn btn-Verify GUOA_UDYAMVERI waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV veri">Verify</button>
                       <input type="text" id="GUOA_GUAMNO" maxlength="60" data-link="GUOA_GUAMNO|GUOA_UDYAMVERI|Udyam|GUOA_UPDUAMNO||||" name="GUOA_GUAMNO" class="form-control datalink IsUpprCse IsUAMFields Udayamfield URNFld GUOADBfields" onchange="Checkudym('GUOA_PRCSID','GUOA_GUAMNO','GUOA_CUSID');">
                       <label for="GUOA_GUAMNO" class="">Udyam Registration No<span class="MndtryAstr"></span></label>
                    </div>
                 </div>
			</div>-->
        <div class="form-row">
          <div class="col">
            <div class="md-form">
                 <select class="mdb-select md-form colorful-select dropdown-primary GUOADBfields GUOAMndtry"  onchange="GetNaturBusness_V1(this,'GUOA_NATRBUSINESS','COOA_CLUSTER');" id="GUOA_INDUSCATRGORY" name="GUOA_INDUSCATRGORY">
                  	<option value="">--Select--</option>
                  	<!--<option value="Accommodation and food service activities">Accommodation and food service activities</option>
  					<option value="Agriculture">Agriculture</option>
  					<option value="Agriculture, forestry and fishing">Agriculture, forestry and fishing</option>
  					<option value="Arts, entertainment and recreation">Arts, entertainment and recreation</option>
  					<option value="Construction">Construction</option>
  					<option value="Consultancy / Professional Services">Consultancy / Professional Services</option>
  					<option value="Education">Education</option>
  					<option value="Electricity, Gas, Steam">Electricity, Gas, Steam</option>
  					<option value="Financial and Insurance Activities">Financial and Insurance Activities</option>
  					<option value="Forestry & Fishery">Forestry & Fishery</option>
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
         <div class="col">
            <div class="md-form">
              <select class="mdb-select md-form colorful-select dropdown-primary GUOADBfields GUOAMndtry" onchange="GetClusterBusness_V1('GUOA_INDUSCATRGORY',this,'GUOA_CLUSTER');" id="GUOA_NATRBUSINESS" name="GUOA_NATRBUSINESS">
              <option value="" selected>--Select--</option>
              </select>
                    <label class="">Nature Of Business/Industry<span class="MndtryAstr">*</span></label>
            </div>
         </div>
        </div>
        <div class="form-row">
            <div class="col-md-6">
                  <div class="md-form">
                    <input type="text" id="GUOA_CLUSTER" disabled name="GUOA_CLUSTER" class="form-control GUOADBfields GUOAMndtry">
                    <label for="GUOA_CLUSTER" class="">Cluster<span class="MndtryAstr">*</span></label>
                  </div>
            </div>
			<div class="col-md-6">
            <div class="md-form">
                <select class="mdb-select md-form colorful-select dropdown-primary GUOADBfields GUOAMndtry"   id="GUOA_SECTOR" name="GUOA_SECTOR">
					<option value="" selected >--Select--</option>							
				</select>
                <label class="">Sector<span class="MndtryAstr">*</span></label>  
				</div>				
            </div>			
        </div>  
		<div class="form-row " >
			<!--<div class="col-md-6 GUNON">
				<div class="">Udyam Registration Certificate Document</div>
                <div class="row UNMN" >
                                    <!--First column-->
				<!--<div class="col-md-8  Formcol-mdLR UAMNupload1" style="display:none">
				
				<div class="md-form">
				<!--<div id="VOTERUPLOAD"><img src="ThemeproLO/Common/Images/UploadImg.png" onclick="DocFldUpldHndlr(CBSI_VoterIDAttachment,id)" id="VOTER" class="rounded" alt="Cinque Terre" width="20" height="20"> Upload Voter ID </div>-->
				<!-- <input type="file" name="datafile"  class="APP"  onchange="DocFldUpldHndlr(CBSI_VoterIDAttachment)">-->
				<!--<table><tr>
				<td>
				<div id="GUOA_UPDUAMNOUPLOAD"  class="file-field">
					<a class="">
					<i class="fa fa-plus imgAdd" aria-hidden=""></i>
					<input type="file"  name="datafile" onchange="DocFldUpldHndlr(GUOA_UPDUAMNO,'GUOA_UPDUAMNO','Udyam','Udyam')" class="GUOA_UPDUAMNO"  >
					</a> 
				<input type="text" id="GUOA_UPDUAMNO" data-val="Upload Udyam Registration Certificate" hidden="hidden" data-Validate="GUOA_UPDUAMNO"  name="GUOA_UPDUAMNO" class="form-control voter File GUOADBfields">
				<span class="name1">Upload</span>
				</div>
				</td>
				</tr></table>
				</div>    
				</div>  
				<div class="col-md-4 Formcol-mdLR TxtCenter UdyamView1">
				<div class="md-form">
				<div class="GUOA_UPDUAMNO" style="display:none"> 
				<img src="ThemeproLO/Common/Images/UploadImg.png"  style="display:none" onclick="ReuploadFile(GUOA_UPDUAMNO);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
				<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('GUOA_UPDUAMNO')" alt="Cinque Terre" width="35" height="25">
				<img src="ThemeproLO/Common/Images/Delete_Img.png" width="35" style="display:none" height="25" data-hide="GUOA_UPDUAMNO" data-show="GUOA_UPDUAMNOUPLOAD"  class="DELBTN DELETEUPLDDTL DELETEEVENT"/></div>
				</div>
				</div>  
				</div>
			</div> -->               
			<div class="col-md-6">
           		<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary GUOADBfields" id="GUOA_ENTTYPE" name="GUOA_ENTTYPE">
                  	<option value="">Select</option>
  					<option value="Micro">Micro</option>
  					<option value="Medium">Medium</option>
  					<option value="Small">Small</option>
				</select>
				<label class="mdb-main-label BTxt9">Enterprise Type<span class="MndtryAstr"></span></label>
                </div>
            </div>
		</div>
			<div class="form-row">
                <div class="col-md-6 NINDM">
                  <div class="md-form">
                    <input type="text" id="GUOA_UDADHAR" maxlength="100" name="GUOA_UDADHAR" class="form-control GUOADBfields NoSpecialChar   ">
                    <label for="GUOA_UDADHAR" class="">Udyog aadhar<span class="MndtryAstr"></span></label>
                  </div>
                </div>			
				 <div class="col-md-6 NINDM">
                  <div class="md-form">
                    <input type="text" id="GUOA_SHOPNUM" maxlength="100" name="GUOA_SHOPNUM" class="form-control GUOADBfields NoSpecialChar   ">
                    <label for="GUOA_SHOPNUM" class="">Shop establishment number<span class="MndtryAstr"></span></label>
                  </div>
                </div>
			</div>
			<div class="form-row">
                <div class="col-md-6 NINDM">
                  <div class="md-form">
                    <input type="text" id="GUOA_LEINUMBER" maxlength="100" name="GUOA_LEINUMBER" class="form-control GUOADBfields NoSpecialChar   ">
                    <label for="GUOA_LEINUMBER" class="">Lei Number<span class="MndtryAstr"></span></label>
                  </div>
                </div>				
				 <div class="col-md-6 NINDM">
                  <div class="md-form">
                    <input type="text" id="GUOA_IMPORTCODE" maxlength="100" name="GUOA_IMPORTCODE" class="form-control GUOADBfields NoSpecialChar   ">
                    <label for="GUOA_IMPORTCODE" class="">Import Export Code<span class="MndtryAstr"></span></label>
                  </div>
                </div>
			</div>
		   
			<div class="form-row">
				<div class="col-md-6">
					<div class="md-form">
					<select class="md-form colorful-select dropdown-primary  GUOADBfields" id="GUOA_KYCCATEGORY" name="GUOA_KYCCATEGORY">
                                             <option value="">Select</option>
                                             <option value="Low">Low</option>
                                             <option value="Medium">Medium</option>
                                             <option value="High">High</option>
                                          </select>
                    <label for="GUOA_KYCCATEGORY" class="">KYC Category<span class="MndtryAstr"></span></label>
					</div>
					</div>
				</div>
	
		<!--<div class="form-row">
		  <div class="col-md-6 ">
                 <div class="md-form">
                       <div class="custom-control custom-radio custom-control-inline ">
                               <input type="checkbox" class="custom-control-input GUOADBfields" id="GUOA_GINCOME" name="GUOA_GINCOME">
                               <label class="custom-control-label" for="GUOA_GINCOME">Income to be considered<span class="MndtryAstr">*</span></label>
                       </div>
                 </div>
				</div>
				</div>-->
      	    <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save4" data-aria="LSW_TCUSORGDTLGUR|GUOA|GUOA_CUSID|"  data-form="OrganisationDetails" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TCUSORGDTLGUR|GUOA|GUOA_CUSID|" data-form="OrganisationDetails" data-card="3"  class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
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
</div>
                             </div>
							 </div>
							 
<script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/Guantr/Validation.js${DMY13}"></script> 
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
     <label class="mdb-main-label BTxt9">Guarantor Type*</label>      
</div>
</div>	
           </div>
           <div class="form-row Constitution" style="display:none">
           		<div class="col">
           			<div class="md-form">
           			<select id="CoAppConsti" class="mdb-select md-form colorful-select dropdown-primary" id="Constitution" name="Constitution" onchange="">
                        <option value="" selected>--Select--</option>
                              <!--<option value="Partnership firms">Partnership firms</option>
                              <option value="LLP">LLP</option>
                              <option value="HUF">HUF</option>
			      			  <option value="Private Ltd">Private Ltd</option>
			      			  <option value="Public Ltd">Public Ltd</option>
			      			  <option value="Proprietorship">Proprietorship</option>-->
                        	</select>
                        <label class="mdb-main-label BTxt9">Constitution<span class="MndtryAstr">*</span></label>
           			</div>
           		</div>
           </div>
          
         	 <!--  <div class="form-row">
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
           				<input type="text" id="GurExsCusID" class="form-control">
           			</div>
           		</div>
           </div> -->
           <div class="form-row">
           	  <div class="col">
           		    <input type="button" style="display:none" class="DashTrg" onclick="FncallFEPDashLrgDataWP(this,'Table2',{spname:'LSW_SGetExistCustDet',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'',MnuId:''},{0:$('#GurExsCusID')});" id="BTNEXTGUR" name="BTNEXTGUR" />
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
        <button type="button" id="Mobotp" data-field="GRBI_UTILITYVERIFY|EBRequestId|GRBI_CUSTYPE|GRBI_CUSID|"  onclick="CheckKYCDetl(this,'EBMobOTP','GRBI_UTILITYVERIFY','MOBILE STATUS','');" class="btn btn-yel Btxt2">Confirm</button>
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
           			  <input type="text" id="HdnFieldId" hidden="hidden" class="form-control">
					  <input type="text" id="FldVal" hidden="hidden" class="form-control">
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
        <button type="button" id="EMAILOTP" onclick="CheckMobValidKyc('MobOTP','status','MOBI','GRAI_EMAILVERIFY','EMAIL','','')" class="btn btn-yel Btxt2">Confirm</button>
		<button type="button" id="MOBOTP" onclick="CheckMobValidKyc('MobOTP','status','MOBI','GRAI_MOBIVERIFY','SMS','','')" class="btn btn-yel Btxt2">Confirm</button>
		<button type="button" id="MOBOTPII" onclick="CheckMobValidKyc('MobOTP','status','MOBI','GRAI_MOBIIVERIFY','SMSII','','')" class="btn btn-yel Btxt2">Confirm</button>
      </div>
    </div>
  </div>
  </div>						 
   

                      
                                  <!--   </div>
                                </div>   -->                           