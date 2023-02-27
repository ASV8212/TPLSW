<button type="button" data-Validatearia="Dedupe" data-validatedata="COBI_DEDUPEVERIFY" onclick="PosdxChk('COBI_CUSID','COBI_CUSTYPE','COBI_DEDUPEVERIFY','Co-Applicant','','COBI_CUSFISNAM');"   data-validate="COBI|DEDUPE" class="btn  COBI_DEDUPEVERIFY waves-effect btn-yelInplain btn-sm BTNDedupe liSubpageTabIcons"><i class="fa fa-check"></i>Dedupe Check</button>
<button type="button" class="btn  waves-effect  btn-yelInplain btn-sm liSubpageTabIcons APPVIEWDEDUPE VIEWDISABLE" onclick="viewposidex('COBI_CUSID','COBI_CUSTYPE','COBI_DEDUPEVERIFY','Co-Applicant','','COBI_CUSFISNAM')"><i class="fa fa-eye"></i>View Dedupe</button>
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
        
		<input type="text" id="COBI_RESCOMPETED" hidden="hidden" name="COBI_FICOMPETED" class="form-control COBIDBfields">
         <input type="text" id="COBI_FICOMPETED" hidden="hidden" name="COBI_FICOMPETED" class="form-control COBIDBfields">
        <input type="text" id="COBI_CIN" hidden="hidden" name="COBI_CIN" class="form-control COBIDBfields">
            <input type="text" id="COBI_PROFILE" hidden="hidden" name="COBI_PROFILE" class="form-control COBIDBfields">			
			<input type="text" id="COBI_NATURBUS"  name="COBI_NATURBUS" hidden="hidden"  class="form-control COBIDBfields" value="">
			<input type="text" id="COBI_IMGSCORE" hidden="hidden" name="COBI_IMGSCORE" class="form-control COBIDBfields" value="">
			<input type="text" id="COBI_GSTMULTI" hidden="hidden" name="COBI_GSTMULTI" class="form-control COBIDBfields" value="">
			
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
                        <input type="file" style="display:none" name="datafile" id="Photo" data-photo="PHOTO"  data-field="COBI_CUSFISNAM|COBI_CUSLSTNAM|COBI_CUSTYPE|COBI_CUSID|COBI_IMGSCORE|" onchange="PhSignFldUpldHndlr(this,'COBI_CUSPHOTO','CUSPHOTO','COBI_','Customer Photo','COBI_CUSID');CheckKYCUPLOADDOC(this,'COBI_CUSPHOTO','COBI_CUSPHOTOPEC','FACE LIVENESS')">
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
				<div class="col INDU">
					<div class="ImgScore">
					   Image Score : 
					</div>
                </div>
                <div class="col-md-6">
                  
                  <div class="md-form" style="margin-top: 50px;">
                    <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields COBIMndtry" onchange="CheckGenter(); ChkProf();" id="COBI_TITLE" name="COBI_TITLE">
                  	<option value="" selected>--Select--</option>
  					<option class="INDMiss" value="Mr">Mr</option>
  					<option class="INDMiss" value="Mrs">Mrs</option>
 					 <option class="INDMiss" value="Miss">Miss</option>
 					 <option class="INDMS"  value="M/s">M/s</option>
					 <option class="INDMiss" value="NA">NA</option>
				</select>
				<label class="mdb-main-label BTxt9">Title<span class="MndtryAstr">*</span></label>
                  </div>
                </div>

				</br>
				</div>
				</br>
				<div class="form-row">
				<div class="col-md-6 NINDU">
					<div class="md-form" >
				        <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields COBIMndtry" onchange="CoCheckborrower();" id="COBI_BORROWER" name="COBI_BORROWER">
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
                          <input type="radio" class="custom-control-input COBIDBfields"  onclick="CheckNumber()" value="Yes" id="GSTRYes" name="COBI_GST">
                          <label class="custom-control-label" for="GSTRYes">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input COBIDBfields" onclick="CheckNumber()" value="No" id="GSTRNo" name="COBI_GST">
                           <label class="custom-control-label" for="GSTRNo">No</label>
                       </div>
                     
                   </div>
                   <label class="mdb-main-label BTxt9">GST Registered <span class="MndtryAstr">*</span></label>      
               </div>
			</div>
		  </div>
				
				<!--<div class="col-md-6 NINDU" style="margin-top: 50px;">
				    <div class="md-form">
                    <input type="text" id="COBI_UAMNO" maxlength="19" name="COBI_UAMNO" class="form-control IsUpprCse IsUAMFields Udayamfield COBIDBfields">
                    <label for="COBI_UAMNO" class="">Udyam Registration No<span class="MndtryAstr"></span></label>
                  </div>
                </div>-->
          
		   </br>
		 <!--  <div class="form-row NINDU" >
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
<div class="col-md-2 Formcol-mdLR TxtCenter Udyam">
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
           </div>-->
		    <div class="form-row GSTAPP"style="display:none" >
			   <div class="col-md-6 " >
				  <div class="md-form ">
                    <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields" onchange="Checkgstapp();"  id="COBI_GSTAPPLILE" name="COBI_GSTAPPLILE">
                  	<option value="">Select</option>
  					<option value="Single">Single</option>
  					<option value="Multiple">Multiple</option>
				</select>
				<label class="mdb-main-label BTxt9">GST Applicable In Multiple States<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				<div class="col-md-6 EXEM" style="display:none">
				  <div class="md-form ">
				    
                    <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields"   id="COBI_EXEMPTED" name="COBI_EXEMPTED">
                  	<option value="">Select</option>
  					<option value="Yes">Yes</option>
  					<option value="No">No</option>
				</select>
				<label class="mdb-main-label BTxt9">GST Exempted<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
			</div>
            
              <div class="form-row COAP" >
					<div class="col-md-6" style = "display:none">
						<div class="md-form">
						  <div class="custom-control custom-radio custom-control-inline ">
							<input type="checkbox" class="custom-control-input  COBIDBfields" onchange="Chkudyam();" id="COBI_CUAMNO" name="COBI_CUAMNO">
							<label class="custom-control-label" for="COBI_CUAMNO">Applied for Udyam Number<span class="MndtryAstr"></span></label>
						  </div>
					   </div>
					</div>
					<div class="col-md-6 " >
                    <div class="md-form">
                       <input type="text" id="COBI_UDYAMVERI" hidden="hidden" maxlength="30" name="COBI_UDYAMVERI" class="form-control  COBIDBfields">
                       <button type="button" data-Validatearia="COBI_UDYAMVERI" onclick="CheckKYCDetl(this,'COBI_UAMNO','COBI_UDYAMVERI','UDYAM');Chkudyam();" data-field="COBI_UDYAMVERI|COBI_UPDUAMNO|COBI_CUSTYPE|COBI_CUSID|MULTIEMP|UdyamView1|COBI_CUSFISNAM|COOA_SECTOR|COOA_INCORPDT||" data-validate="gstin" class="btn btn-Verify COBI_UDYAMVERI waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV veri">Verify</button>
					   <input type="text" id="COBI_UAMNO" maxlength="60" data-link="COBI_UAMNO|COBI_UDYAMVERI|Udyam|Multi|COBI_CUSID|COBI_UDYAMVERI|COBI_UPDUAMNO|"  name="COBI_UAMNO" class="form-control datalink IsUpprCse IsUAMFields Udayamfield URNFld  COBIDBfields">
                       <label for="COBI_UAMNO" class="">Udyam Registration No<span class="MndtryAstr"></span></label>
                    </div>
                 </div>
			   </div>
		   <div class="form-row GSTF" style="display:none">
               <div class="col-md-6 " >
                 <div class="md-form">
                     <input type="text" id="COBI_GSTVERIFY"  hidden="hidden" name="COBI_GSTVERIFY" class="form-control GST COBIDBfields">
                     <!--<button type="button" data-Validatearia="COBI_GSTVERIFY" onclick="CheckValidPanKyc('COBI_GSTNUM','COBI_GSTVERIFY','COBI_CUSFISNAM','COBI_CUSTYPE','gstdetailed','COBI_CUSID','COAI_ORGADDRLINI','COAI_ORGADDRLINII','','','','COEI_ADDRLINEI','COEI_ADDRLINEII','COBI_CONSTITUTION','COBI_NATURBUS');SavePersInfo();" data-validate="gstin"  class="btn btn-Verify COBI_GSTNUM waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
                     <input type="text" id="COBI_GSTNUM" maxlength="15" disabled name="COBI_GSTNUM" onchange="CheckGst('COBI_PRCSID','COBI_GSTNUM','COBI_CUSID');" class="form-control datalink GST IsGstValid COBIDBfields NoSpecialChar" >
                     <label for="COBI_GSTNUM" class="">GST Number<span class="MndtryAstr"></span></label>
                 </div>
            </div> 
			</div>
			<div class="form-row " >
			<div class="col-md-6 COAP VerifyUdyam">
    				<div class="UdyamView1">Udyam Registration Certificate Document</div>
						<div class="row UAMN" >
							<div class="col-md-8  Formcol-mdLR UAMNupload1" style="display:none">
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
    		                <div class="col-md-4 Formcol-mdLR TxtCenter UdyamView1">
								<div class="md-form">
									<div class="COBI_UPDUAMNO" style="display:none">
										<img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" onclick="ReuploadFile(COBI_UPDUAMNO);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
										<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded DELETEEVENT" onclick="GrdDocDwnld('COBI_UPDUAMNO')" alt="Cinque Terre" width="35" height="25"> 
									    <img src="ThemeproLO/Common/Images/Delete_Img.png" style="display:none" width="35" height="25" data-hide="COBI_UPDUAMNO" data-show="COBI_UPDUAMNOUPLOAD"  class="DELBTN DELETEUPLDDTL DELETEEVENT"/>
								    </div>
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
                           <input type="text" id="COGS_PRCSID" hidden="hidden" name="COGS_PRCSID" value="" class="form-control COGSDBfields">
                           <input type="text" id="COGS_ACTIVITYID" hidden="hidden" name="COGS_ACTIVITYID" class="form-control COGSDBfields">
                           <input type="text" id="COGS_DTCREATED" hidden="hidden" name="COGS_DTCREATED" class="form-control COGSDBfields">
                           <input type="text" id="COGS_CREATEDBY" hidden="hidden" name="COGS_CREATEDBY" class="form-control COGSDBfields">
                           <input type="text" id="COGS_MODIFIEDBY" hidden="hidden" name="COGS_MODIFIEDBY" class="form-control COGSDBfields">
                           <input type="text" id="COGS_DTMODIFIED" hidden="hidden" name="COGS_DTMODIFIED" class="form-control COGSDBfields">
						   <input type="text" id="COGS_CUSID" hidden="hidden" name="COGS_CUSID" class="form-control COGSDBfields">
                          
                           <div class="form-row CHKBOX">
                              <div class="col-md-6">
							  <div class="md-form ">
													<input type="text" id="COGS_GSTVERIFY" hidden="hidden" maxlength="30" name="COGS_GSTVERIFY" class="form-control GST COGSDBfields">
													<!-- <button type="button" data-Validatearia="CBSI_GSTVERIFY" onclick="CheckKYCDetl(this,'CBSI_GSTVERIFY','CBSI_GSTNUM','GST');" data-validate="gstin"  class="btn btn-Verify CBSI_GSTNUM waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>   onchange="Checkgst(this.id);" IsGstValid  onclick="ChkGstPrimary('COGS_GSTCHK'+$(this).closest('.DYNROW').attr('data-row'))"-->
													<input type="text" id="COGS_GSTNUM" maxlength="15"  name="COGS_GSTNUM"  onchange="Chkcogst(this,'COGS_GSTNUM'+$(this).closest('.DYNROW').attr('data-row'));"  class="form-control IsUpprCse GSTCLER  NoSpecialChar COGSDBfields">
														<label for="COGS_GSTNUM" class="">GST Number<span class="MndtryAstr"></span></label>
												</div>
												
												</div>
									
												
												
												
												
												
												 <div class="col-md-6">
												<div class="md-form ">
													<div class="custom-control custom-radio custom-control-inline">
														<input type="checkbox" class="custom-control-input CHKCLER COGSDBfields" onclick="ChkGstPrimary('COGS_GSTNUM'+$(this).closest('.DYNROW').attr('data-row'),'COGS_GSTCHK'+$(this).closest('.DYNROW').attr('data-row'))" id="COGS_GSTCHK" name="COGS_GSTCHK">
														<label class="custom-control-label" for="COGS_GSTCHK">Primary GST</label>
													</div>
												</div>
												</div>
								</div>
							     
							  
                               
							</div>	 
                              <!--</div>-->
                  	
                     </div>
				
                     <div class="HyperControls form-row CHKBOX" >
                        <a onclick="AddPageMultiData('',$('#COGS_PRCSID').val(),'','BankDetail2','COGSDBfields');" class="Btxt4 FltRight ADDBTN "  href="#">+ Add</a>
                        <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                     </div>
         </br>
		 
		
          <input type="text" id="COBI_FETCHFSTNAME" hidden="hidden" name="COBI_FETCHFSTNAME" class="form-control COBIDBfields">
          <input type="text" id="COBI_FETCHLSTNAME" hidden="hidden" name="COBI_FETCHLSTNAME" class="form-control COBIDBfields">
        <input type="text" id="COBI_FETCHDOBNAME" hidden="hidden" name="COBI_FETCHDOBNAME" class="form-control COBIDBfields">
         <input type="text" id="COBI_FETCHFATHNAME" hidden="hidden" name="COBI_FETCHFATHNAME" class="form-control COBIDBfields">
        
        
           <div class="form-row">
                <div class="col-md-6">
                  <div class="md-form">
                  
                    <input type="text" id="COBI_CUSFISNAM" maxlength="75" name="COBI_CUSFISNAM" class="form-control IsAlphaFields  IsUpprCse COBIDBfields COBIMndtry">
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
                 
                    <input type="text" id="COBI_FATHRNAM"  maxlength="30"  name="COBI_FATHRNAM" class="form-control IsUpprCse COBIDBfields COBIMndtry IsAlphaFields">
                    <label for="COBI_FATHRNAM" class="">Father's Name<span class="MndtryAstr">*</span></label>
                  </div>
           	</div>
           	<div class="col">
               
                  <div class="md-form">
          
               <div id="RadINDU" class="select-radio COBIMndtry"> 
    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input COBIDBfields" value="Male" onclick="AppTitle(); ChkProf();" id="MaleGen" name="COBI_GENTER">
  <label class="custom-control-label" for="MaleGen">Male</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input COBIDBfields" onclick="AppTitle(); ChkProf();" value="Female" id="FemGen" name="COBI_GENTER">
  <label class="custom-control-label" for="FemGen">Female</label>
</div>

<div class="custom-control custom-radio custom-control-inline"><!--onclick="CheckGender();"-->
  <input type="radio" class="custom-control-input COBIDBfields" value="Transgender"  id="TransGen" name="COBI_GENTER">
  <label class="custom-control-label" for="TransGen">Other</label>
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
                  <div class="md-form"><!--ChkDOBTOJOINDATE-->
                  
                    <input type="text" id="COBI_DOB"  name="COBI_DOB" onblur="AgeVal(this,COBI_AGE);" maxlength="10" class="form-control IsNumberFields ISDatefield COBIDBfields COBIMndtry ">
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
                  <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields" id="COBI_CATEGORY" name="COBI_CATEGORY">
                  	<option value="" selected >--Select--</option>
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
                  <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields COBIMndtry" onchange="CheckMarStatus(); ChkProf()" id="COBI_MARITSTUS" name="COBI_MARITSTUS">
                  	<option value="" selected>Select</option>
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
                  <div class="md-form">
                    <input type="text" id="COBI_SPOUSNAME"  maxlength="25" name="COBI_SPOUSNAME" class="form-control COBIDBfields IsAlphaFields NoSpecialChar">
                    <label for="COBI_SPOUSNAME" class="">Spouse Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>
             <div class="col-md-6 PROFILE">
               <div class="md-form">
                <select class="mdb-select md-form colorful-select dropdown-primary PROFILEVAL COBIDBfields COBIMndtry" onchange="DataToProfFld(this);CheckProfile('Change');DELEMPDETAILS();" data-change="COBI_PROFILE" id="COBI_NPROFILE" name="COBI_NPROFILE">
						<option value="" selected>--Select--</option>
						<option class="HSWF" disabled value="Housewife">Housewife</option>			
						<option disabled value="Retired">Retired</option>
						<option class="GSTSAL" disabled value="Salaried">Salaried</option>
						<option value="SEP">SEP</option>
						<option value="SENP">SENP</option>
						<option disabled value="Student">Student</option>
				</select>
				<label class="mdb-main-label BTxt9">Profile<span class="MndtryAstr">*</span></label>
               </div>
             </div>
			 	<div class="col-md-6 PARTTYPE" style="display:none">
				  <div class="md-form ">
                    <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields"   id="COBI_PARTNERSHPTY" name="COBI_PARTNERSHPTY">
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
                    <input type="text" id="COBI_NOOFDEPEND" name="COBI_NOOFDEPEND" maxlength="2" class="form-control COBIDBfields NoSpecialChar IsNumberFields COBIMndtry">
                    <label for="COBI_NOOFDEPEND" class="">No of Dependents *</label>
                  </div>
                </div>
                <div class="col">
                 <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields COBIMndtry" onchange="Chkqualify('COBI_QUALIFICATION','COBI_OTHER','Category','Page')" id="COBI_QUALIFICATION" name="COBI_QUALIFICATION">
						<option value="" selected >--Select--</option>
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
		   <div class="form-row INDU">
				<div class="col-md-6">
					<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields INDM COBIMndtry" onchange="" id="COBI_NATIONALITY" name="COBI_NATIONALITY" >
                  	<option value="">Select</option>
					<option value="Resident Indian">Resident Indian</option> 
  					<option value="NRI">NRI</option>
				</select>
				<label class="mdb-main-label BTxt9">Nationality<span class="MndtryAstr">*</span></label>
             </div>
				</div>
		   </div>
		   <div class="form-row ">
		   <div class="col-md-6  OTHERS">
		          <div class="md-form">
                    <input type="text" id="COBI_OTHER" maxlength="20" name="COBI_OTHER" class="form-control COBIDBfields NoSpecialChar  IsAlphaFields COBIMndtry">
                    <label for="COBI_OTHER" class="">Others<span class="MndtryAstr">*</span></label>
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
      <a class="collapsed Btxt7 AFormaccordion CONLOAD ACCRDISB " data-multidata="" data-load="Yes" data-form="Contact Details" data-aria="LSW_TCOCUSADDRINFO|COAI|COAI_CUSID|COBI_CUSID" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
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
		<input type="text" id="COAI_GEOFLDGHTMLTOAPI" hidden="hidden" name="COAI_GEOFLDGHTMLTOAPI" class="form-control COAIDBfields">
        
        <div class="form-row">
           
             <div class="col-md-6 VERIFYBTNPOSITION">  
                  <div class="md-form">
                   <input type="text" id="COAI_EMAILVERIFY" name="COAI_EMAILVERIFY" hidden="hidden"  maxlength="60"  class="form-control  COAIDBfields">
				 <!-- <button type="button" data-Validatearia="COAI_EMAILVERIFY" onclick="VerfyMail(this,$('#COAI_EMAILID').val(),$('#CBSI_CUSID').val());SaveContDetl();" data-validate="email"  class="btn btn-Verify COAI_EMAILID waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>-->
				   <button type="button" data-Validatearia="COAI_EMAILVERIFY" onclick="CheckMobValidKyc('COAI_EMAILID','OTP','COAI_CUSID','COAI_EMAILVERIFY','EMAIL')" data-validate="otp"  class="btn btn-Verify COAI_EMAILVERIFY waves-effect btn-yelInplain btn-sm BTNVerify VERIFYBTNPOSITIONRIGHT ">Verify</button>
                   
                   <input type="text" id="COAI_EMAILID" maxlength="100"  data-link="COAI_EMAILID|COAI_EMAILVERIFY" name="COAI_EMAILID" class="form-control datalink COAIDBfields IsEmailFields COAIMndtry">
                  
				  <label for="COAI_EMAILID" class="">Email ID<span class="MndtryAstr">*</span></label>
                  </div>
           </div>
                 <div class="col-md-6 VERIFYBTNPOSITION">  
                <!--   <div class="md-form">
                   <input type="text" id="COAI_MOBIVERIFY" maxlength="10" onchange="CheckDupMobNo('COAI_MOBNOI','COAI_MOBNOII','Mobile Number');DupMOBval('COAI_PRCSID','COAI_MOBNOI','COAI_CUSID');" name="COAI_MOBNOI" maxlength="10" class="form-control COAIDBfields IsNumberFields NoSpecialChar IsMobileFields">
                     <button type="button" data-Validatearia="COAI_MOBIVERIFY" onclick="CheckMobValidKyc('COAI_MOBNOI','otp','COAI_MOBIVERIFY','MOBI','MobIotp','MobIIotp')" data-validate="otp"  class="btn btn-Verify COAI_MOBNOI waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>
                    <input type="text" id="COAI_MOBNOI" data-link="COAI_MOBNOI|COAI_MOBIVERIFY"  onchange="CheckDupMobNo('COAI_MOBNOI','COAI_MOBNOII','Mobile Number');DupMOBval('COAI_PRCSID','COAI_MOBNOI','COAI_CUSID');" maxlength="10" name="COAI_MOBNOI" class="form-control datalink COAIDBfields IsNumberFields NoSpecialChar IsMobileFields COAIMndtry">
					<label for="COAI_MOBNOI" class="">Mobile Number 1<span class="MndtryAstr">*</span></label>
                  </div> -->
				  
				<div class="md-form">
                    <input type="text" id="COAI_MOBIVERIFY"  hidden="hidden" name="COAI_MOBIVERIFY" class="form-control COAIDBfields">
                    <button type="button" data-Validatearia="COAI_MOBIVERIFY" onclick="CheckMobValidKyc('COAI_MOBNOI','OTP','COAI_CUSID','COAI_MOBIVERIFY','SMS')" data-validate="otp" class="btn btn-Verify COAI_MOBNOI waves-effect btn-yelInplain btn-sm BTNVerify VERIFYBTNPOSITIONRIGHT ">Verify</button>
                    <input type="text" id="COAI_MOBNOI" data-link="COAI_MOBNOI|COAI_MOBIVERIFY"  onchange="CheckDupMobNo('COAI_MOBNOI','COAI_MOBNOII','Mobile Number');DupMOBval('COAI_PRCSID','COAI_MOBNOI','COAI_CUSID');" maxlength="10" name="COAI_MOBNOI" class="form-control datalink COAIDBfields IsNumberFields NoSpecialChar IsMobileFields COAIMndtry">
                    <label for="COAI_MOBNOI" class="">Mobile Number 1<span class="MndtryAstr">*</span></label>
                 </div>
               </div>
          </div>
		  <div class="form-row">
			<div class="col-md-6">
				<div class="md-form">
                    <input type="text" id="COAI_LAT" maxlength="20" name="COAI_LAT" disabled class="form-control  COAIDBfields  NoSpecialChar   ">
					<button type="button" class=" btn   btn-Verify waves-effect btn-yelInplain btn-sm BTNVerify VERIFYBTNPOSITIONRIGHT " onclick="getLocation('COAI_CUSID','COAI_LAT','COAI_LONG','')" ><i class="fa fa-map-marker"></i> Initiate Geo Tagging</button>
                    <label for="COAI_LAT" class="">Latitude<span class="MndtryAstr"></span></label>
                  </div>
			</div>
			<div class="col-md-6">
				<div class="md-form">
                    <input type="text" id="COAI_LONG" maxlength="20" name="COAI_LONG" disabled class="form-control  COAIDBfields  NoSpecialChar   ">
                    <label for="COAI_LONG" class="">Longitude<span class="MndtryAstr"></span></label>
                  </div>
			</div>
		</div>
         <div class="form-row">
                 <div class="col-md-6 VERIFYBTNPOSITION">  
                  <div class="md-form">
				   <input type="text" id="COAI_MOBIIVERIFY"  hidden="hidden" name="COAI_MOBIIVERIFY" class="form-control COAIDBfields">
                    <!-- <input type="text" id="COAI_MOBNOII" maxlength="10" name="COAI_MOBNOII" onchange="CheckDupMobNo('COAI_MOBNOII','COAI_MOBNOI','Mobile Number');" maxlength="10" class="form-control COAIDBfields NoSpecialChar IsNumberFields IsMobileFields">-->
                    <button type="button" data-Validatearia="COAI_MOBIIVERIFY" onclick="CheckMobValidKyc('COAI_MOBNOII','OTP','COAI_CUSID','COAI_MOBIIVERIFY','SMSII','Y')" data-validate="otp"  class="btn  COAI_MOBNOII btn-Verify waves-effect btn-yelInplain btn-sm BTNVerify VERIFYBTNPOSITIONRIGHT">Verify</button>
                    <input type="text" id="COAI_MOBNOII" data-link="COAI_MOBNOII|COAI_MOBIIVERIFY" maxlength="10" onchange="CheckDupMobNo('COAI_MOBNOII','COAI_MOBNOI','Mobile Number');DupMOBval('COAI_PRCSID','COAI_MOBNOII','COAI_CUSID');" name="COAI_MOBNOII" class="form-control  COAIDBfields datalink NoSpecialChar IsNumberFields IsMobileFields">
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
        	<div class="col Btxt10">CURRENT ADDRESS</div>
        </div>
        <div class="form-row">
            <div class="col">
            	<div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input COAIDBfields RESSTAT" onclick="getSameaApplAddr()"  id="COAI_SAMAPPLADDR" name="COAI_SAMAPPLADDR">
  					<label class="custom-control-label" for="COAI_SAMAPPLADDR">Same as Applicant Address</label>
				</div>
				</div>
            </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_ADDRLINI" name="COAI_ADDRLINI"  maxlength="60" class="form-control APADDR RESSTAT  AddrNoSpecialChar COAIDBfields CAOIMndtry">
                    <label for="COAI_ADDRLINI" class="APDR">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_ADDRLINII"  maxlength="60" name="COAI_ADDRLINII" class="form-control AddrNoSpecialChar APADDR RESSTAT CAOIMndtry COAIDBfields">
                    <label for="COAI_ADDRLINII" class="APDR">Address Line 2<span class="MndtryAstr">*</span></label>
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
                    <input type="text" id="COAI_CITY" disabled name="COAI_CITY" class="form-control APADDR RESSTAT ALLDIS COAIDBfields COAIMndtry">
                    <label for="COAI_CITY" class="APDR">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_STATE" disabled name="COAI_STATE" class="form-control APADDR RESSTAT ALLDIS COAIDBfields COAIMndtry">
                    <label for="COAI_STATE" class="APDR">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_LNDMARK"  maxlength="40" name="COAI_LNDMARK" onchange="ChkLanMark(this,'COAI_LNDMARK');" class="form-control APADDR  RESSTAT COAIDBfields COAIMndtry">
                    <label for="COAI_LNDMARK" class="APDR">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
            <div class="col-md-6">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary APADDR COAIDBfields COAIMndtry" id="COAI_RESIDTYPE" name="COAI_RESIDTYPE">
                  	<option value="" selected >--Select--</option>
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
                        <input type="text" id="COAI_STDC" maxlength="11" style="width:75px"  name="COAI_STDC" class="form-control APADDR COAIDBfields IsNumberFields IsLandlneFields"> 
                        <label for="COAI_STDC" class="APDR">STD</label>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                    <input type="text" id="COAI_LNDLINENO" maxlength="11"  name="COAI_LNDLINENO" class="form-control APADDR COAIDBfields IsNumberFields IsLandlneFields">
                    <label for="COAI_LNDLINENO" class="APDR">Landline No</label>
                  </div>
               </div>
        </div>
        <div class="form-row INDU">
            <div class="col">
                  <div class="md-form">
               <input type="text" id="COAI_YEAROFRESID" maxlength="2" name="COAI_YEAROFRESID" class="form-control APADDR COAIDBfields  NoSpecialChar IsNumberFields COAIMndtry">
                    <label for="COAI_YEAROFRESID" class="APDR">Years of Residence<span class="MndtryAstr">*</span></label>
                  </div>
                  
                </div>
                <div class="col">
                  
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary APADDR COAIDBfields" onchange="Chkresi()" id="COAI_MONTHS" name="COAI_MONTHS">
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
           
          <!--  <div class="col-md-4 " >
            	<div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input COAIDBfields" id="COAI_KYCDOCAVAIL" name="COAI_KYCDOCAVAIL">
  					<label class="custom-control-label" for="COAI_KYCDOCAVAIL">KYC document available</label>
				</div>
				</div>
            </div>-->
			<div class="col-md-2 Formcol-mdLR TxtCenter ADDRVI" style="display:none">
              <div class="md-form">
                   <input type="text" id="COAI_ADDRPROOF1" data-val=""  hidden="hidden" data-Validate="COAI_ADDRPROOF1"  name="COAI_ADDRPROOF1" class="form-control voter File">
                     <div class="COAI_ADDRPROOF1" style="display">  
                    <img src="ThemeproLO/Common/Images/Eyeview.png" title="Address Proof One View"  class="rounded" onclick="GrdDocDwnld('COAI_ADDRPROOF1')" alt="Cinque Terre" width="35" height="25">Address Proof 1</div>
              </div>
            </div> 
            <div class="col-md-6">
            </div>
        </div>
        <div class="form-row">
        	<div class="col Btxt10">CORRESPONDENCE ADDRESS</div>
        </div>
		<div class="form-row">
            <div class="col-md-4">
            	<div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input COAIDBfields" onclick="getSameAs('Page')"  id="COAI_SAMEAS" name="COAI_SAMEAS">
  					<label class="custom-control-label" for="COAI_SAMEAS">Same as</label>
				</div>
				</div>
            </div>
			<div class="col-md-2 Formcol-mdLR TxtCenter ADDRVII" style="display:none">
              <div class="md-form">
                <input type="text" id="COAI_ADDRPROOF2" data-val=""  hidden="hidden" data-Validate="COAI_ADDRPROOF2"  name="COAI_ADDRPROOF2" class="form-control voter File">
                  <div class="COAI_ADDRPROOF2" style="display">  
                     <img src="ThemeproLO/Common/Images/Eyeview.png" title="Address Proof Two View"  class="rounded" onclick="GrdDocDwnld('COAI_ADDRPROOF2')" alt="Cinque Terre" width="35" height="25">Address Proof 2</div>
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
                          <input type="radio" class="custom-control-input PremAddr COAIDBfields" onclick="residentaddr();" value="Applicant Permanent Address" id="PermAddr" name="COAI_SAMRESIDADDR">
                          <label class="custom-control-label" for="PermAddr">Applicant Correspondence Address</label>
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
                          <input type="radio" class="custom-control-input COAIDBfields" onclick="CHKSameCoAppresiaddr();" value="Co-Applicant Residence Address" id="ResiYes" name="COAI_SAMRESIDADDR">
                          <label class="custom-control-label" for="ResiYes">Co-Applicant Current Address</label>
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
                    <input type="text" id="COAI_PREMADDRLINI"  maxlength="60" name="COAI_PREMADDRLINI" class="form-control PRADDR AddrNoSpecialChar COAIDBfields COAIMndtry">
                    <label for="COAI_PREMADDRLINI" class="ADDR">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_PERMADDRLINII"  maxlength="60" name="COAI_PERMADDRLINII" class="form-control AddrNoSpecialChar PRADDR COAIMndtry COAIDBfields">
                    <label for="COAI_PERMADDRLINII" class="ADDR">Address Line 2<span class="MndtryAstr">*</span></label>
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
                    <input type="text" id="COAI_PERMCITY" disabled name="COAI_PERMCITY" class="form-control IsAlphaFields ALLDIS PRADDR COAIDBfields COAIMndtry">
                    <label for="COAI_PERMCITY" class="ADDR">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row">
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_PERMSTATE" disabled  name="COAI_PERMSTATE" class="form-control IsAlphaFields ALLDIS PRADDR COAIDBfields COAIMndtry">
                    <label for="COAI_PERMSTATE" class="ADDR">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_PERMLNDMARK"  maxlength="40" name="COAI_PERMLNDMARK" onchange="ChkLanMark(this,'COAI_PERMLNDMARK');" class="form-control PRADDR  COAIDBfields COAIMndtry">
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
					  <option value="Leased">Leased</option>
				 </select>
				<label class="mdb-main-label BTxt9">Ownership status<span class="MndtryAstr">*</span></label>
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
			  
			   <!--NEWLY CURRENT ADDRESS ADDED FOR OVD CHANGES START-->
			   <div class="form-row" Style="display:none">
        	<div class="col Btxt10">CURRENT ADDRESS</div>
        </div>
        <div class="form-row" Style="display:none">
            <div class="col">
            	<div class="md-form">
            	<div class="custom-control custom-radio custom-control-inline">
 					<input type="checkbox" class="custom-control-input COAIDBfields RESSTAT" onclick="getSameaApplAddr()"  id="COAI_CURSAMAPPLADDR" name="COAI_CURSAMAPPLADDR">
  					<label class="custom-control-label" for="COAI_CURSAMAPPLADDR">Same as Applicant Address</label>
				</div>
				</div>
            </div>
        </div>
        <div class="form-row" Style="display:none">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_CURADDRLINI" name="COAI_CURADDRLINI"  maxlength="60" class="form-control APADDR RESSTAT  AddrNoSpecialChar COAIDBfields CAOIMndtry">
                    <label for="COAI_CURADDRLINI" class="APDR">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_CURADDRLINII"  maxlength="60" name="COAI_CURADDRLINII" class="form-control AddrNoSpecialChar APADDR RESSTAT CAOIMndtry COAIDBfields">
                    <label for="COAI_CURADDRLINII" class="APDR">Address Line 2<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row" Style="display:none">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_CURPINCODE" maxlength="6" name="COAI_CURPINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'COAI_CURSTATE','COAI_CURCITY','COAI_CURSTDC')" class="form-control NoSpecialChar RESSTAT APADDR COAIDBfields COAIMndtry IsNumberFields IsPinFielde">
                    <label for="COAI_CURPINCODE" class="APDR">Pin Code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="COAI_CURCITY" disabled name="COAI_CURCITY" class="form-control APADDR RESSTAT ALLDIS COAIDBfields COAIMndtry">
                    <label for="COAI_CURCITY" class="APDR">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row" Style="display:none">
            <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_CURSTATE" disabled name="COAI_CURSTATE" class="form-control APADDR RESSTAT ALLDIS COAIDBfields COAIMndtry">
                    <label for="COAI_CURSTATE" class="APDR">State<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                    <input type="text" id="COAI_CURLNDMARK"  maxlength="40" name="COAI_CURLNDMARK" onchange="ChkLanMark(this,'COAI_CURLNDMARK');" class="form-control APADDR  RESSTAT COAIDBfields COAIMndtry">
                    <label for="COAI_CURLNDMARK" class="APDR">Landmark<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
        </div>
        <div class="form-row" Style="display:none">
            <div class="col-md-6">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary APADDR COAIDBfields COAIMndtry" id="COAI_CURRESIDTYPE" name="COAI_CURRESIDTYPE">
                  	<option value="" selected >--Select--</option>
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
                        <input type="text" id="COAI_CURSTDC" maxlength="11" style="width:75px"  name="COAI_CURSTDC" class="form-control APADDR COAIDBfields IsNumberFields IsLandlneFields"> 
                        <label for="COAI_CURSTDC" class="APDR">STD</label>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                    <input type="text" id="COAI_CURLNDLINENO" maxlength="11"  name="COAI_CURLNDLINENO" class="form-control APADDR COAIDBfields IsNumberFields IsLandlneFields">
                    <label for="COAI_CURLNDLINENO" class="APDR">Landline No</label>
                  </div>
               </div>
        </div>
        <div class="form-row " Style="display:none">
            <div class="col">
                  <div class="md-form">
               <input type="text" id="COAI_CURYEAROFRESID" maxlength="2" name="COAI_CURYEAROFRESID" class="form-control APADDR COAIDBfields  NoSpecialChar IsNumberFields COAIMndtry">
                    <label for="COAI_CURYEAROFRESID" class="APDR">Years of Residence<span class="MndtryAstr">*</span></label>
                  </div>
                  
                </div>
                <div class="col">
                  
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary APADDR COAIDBfields" onchange="Chkresi()" id="COAI_CURMONTHS" name="COAI_CURMONTHS">
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
                    <input type="text" id="COAI_ORGADDRLINI"  maxlength="60" name="COAI_ORGADDRLINI" class="form-control AddrNoSpecialChar ORGADD COAIDBfields COAIMndtry">
                    <label for="COAI_ORGADDRLINI" class="">Address Line 1<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="md-form">
                    <input type="text" id="COAI_ORGADDRLINII"  maxlength="60" name="COAI_ORGADDRLINII" class="form-control ORGADD AddrNoSpecialChar COAIMndtry COAIDBfields">
                    <label for="COAI_ORGADDRLINII" class="">Address Line 2<span class="MndtryAstr">*</span></label>
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
                    <input type="text" id="COAI_ORGLNDMARK" maxlength="40"  name="COAI_ORGLNDMARK" onchange="ChkLanMark(this,'COAI_ORGLNDMARK');" class="form-control ORGADD  COAIDBfields COAIMndtry">
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
                        <input type="text" id="COAI_ORGSTDC" maxlength="4" style="width:75px"  name="COAI_ORGSTDC" class="form-control PRADDR COAIDBfields IsNumberFields COAIMndtry"> 
                        <label for="COAI_ORGSTDC" class="">STD</label>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="md-form">
                    <input type="text" id="COAI_ORGLNDLINENO" maxlength="11"  name="COAI_ORGLNDLINENO" class="form-control COAIDBfields IsNumberFields IsLandlneFields COAIMndtry">
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
                     <button type="button" data-aria="LSW_TCOCUSADDRINFO|COAI|COAI_CUSID" data-form="ContactDetails" id="Save2" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TCOCUSADDRINFO|COAI|COAI_CUSID" data-card="1" data-form="ContactDetails" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
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
										  <label class="mdb-main-label BTxt9">Office type<span class="MndtryAstr">*</span></label> 
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
                                          <input type="text" id="COEI_ORGANINAME" name="COEI_ORGANINAME"  maxlength="75" class="form-control COEIDBfields NoSpecialChar COEIMndtry PROCHGS">
                                          <label for="COEI_ORGANINAME" class="PROCHGAC">Organization Name<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_ADDRLINEI" maxlength="60" name="COEI_ADDRLINEI" class="form-control OFFADDR AddrNoSpecialChar COEIDBfields COEIMndtry PROCHGS">
                                          <label for="COEI_ADDRLINEI" class="OADDR PROCHGAC">Address Line 1<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_ADDRLINEII" maxlength="60" name="COEI_ADDRLINEII" class="form-control OFFADDR AddrNoSpecialChar COEIDBfields COEIMndtry PROCHGS">
                                          <label for="COEI_ADDRLINEII" class="OADDR PROCHGAC">Address Line 2<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_PINCODE" maxlength="6" name="COEI_PINCODE" onchange="fnOnFocusOut(this);Pindetls(this,'COEI_STATE'+$(this).closest('.DYNROW').attr('data-row'),'COEI_CITY'+$(this).closest('.DYNROW').attr('data-row'),'COEI_STDC'+$(this).closest('.DYNROW').attr('data-row'))" class="form-control COEIDBfields COEIMndtry NoSpecialChar OFFADDR IsNumberFields IsPinFielde PROCHGS">
                                          <label for="COEI_PINCODE" class="OADDR PROCHGAC">Pin Code<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_CITY" disabled name="COEI_CITY" class="form-control  COEIDBfields COEIMndtry PROCHGS">
                                          <label for="COEI_CITY" class="OADDR PROCHGAC">City<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_STATE" disabled name="COEI_STATE" class="form-control COEIDBfields COEIMndtry PROCHGS">
                                          <label for="COEI_STATE" class="OADDR PROCHGAC">State<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_LNDMARK" maxlength="40" name="COEI_LNDMARK" onchange="ChkLanMark(this,'COEI_LNDMARK'+$(this).closest('.DYNROW').attr('data-row'));" class="form-control  OFFADDR COEIDBfields COEIMndtry PROCHGS">
                                          <label for="COEI_LNDMARK" class="OADDR PROCHGAC">Landmark<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row">
                                    <div class="col-md-1 SEP">
                                       <div class="md-form">
                                          <input type="text" id="COEI_STDC" maxlength="11" style="width:75px" disabled name="COEI_STDC" class="form-control OFFADDR COEIDBfields IsNumberFields PROCHGS"> 
                                          <label for="COEI_STDC" class="OADDR PROCHGS">STD</label>
                                       </div>
                                    </div>
                                    <div class="col-md-5 SEP">
                                       <div class="md-form">
                                          <input type="text" id="COEI_LNDLINENO" maxlength="11"  name="COEI_LNDLINENO" class="form-control COEIDBfields OFFADDR IsNumberFields IsLandlneFields PROCHGS">
                                          <label for="COEI_LNDLINENO" class="OADDR PROCHGAC">Landline No</label>
                                       </div>
                                    </div>
                                    <div class="col-md-6 SEP">
                                       <div class="md-form">
                                          <select class="md-form colorful-select dropdown-primary COEIDBfields SEPM" onchange="GetNaturBusness(this,'COEI_NATRBUSINESS','COEI_CLUSTER')"  id="COEI_INDUSCATRGORY" name="COEI_INDUSCATRGORY">
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
                                             <option value="Retail / Wholesale Trade">Retail / Wholesale Trade</option>-->
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
								    
                               <!--   <div class="form-row" style="display:none">
                                    <div class="col">
                                       <div class="md-form">
                                          <div class="custom-control custom-radio custom-control-inline">
                                             <input type="checkbox" class="custom-control-input COEIDBfields" id="COEI_KYCDOCAVAIL" name="COEI_KYCDOCAVAIL">
                                             <label class="custom-control-label" for="COEI_KYCDOCAVAIL">KYC document available</label>
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
                                          <input type="text" id="COEI_DATOFESTABLIS" maxlength="10" onblur="CompareJointoDOB(this,COBI_DOB,COEI_NOOFYERBUSINESS,'COBI_PROFILE');ExpYearvalid(this,COEI_NOOFYERBUSINESS);" name="COEI_DATOFESTABLIS" class="form-control NoSpecialChar ISFutureDateFields JOINDATE COEIDBfields IsNumberFields COEIMndtry ISDatefield PROCHGS">
                                          <label for="COEI_DATOFESTABLIS" class="PROCHGAC">Date of Establishment<span class="MndtryAstr">*</span></label>
                                          <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_NOOFYERBUSINESS" disabled maxlength="2" name="COEI_NOOFYERBUSINESS" class="form-control NoSpecialChar IsNumberFields COEIDBfields PROCHGS">
                                          <label for="COEI_NOOFYERBUSINESS" class="AGE PROCHGS">No. of Years in Business</label>
                                       </div>
                                    </div>
                                 </div>
                                 
                                 
                                 <div class="form-row SEP OEMPONE">
                                    <div class="col">
                                       <div class="md-form">
                                          <select class="md-form colorful-select dropdown-primary SEPM COEIDBfields EMPI"  id="COEI_NEGATLIST" name="COEI_NEGATLIST">
                                            <option value="">--Select--</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">Negative List<span class="MndtryAstr"></span></label>
                                      
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                         <select class="md-form colorful-select dropdown-primary SEPM COEIDBfields EMPI"  id="COEI_CAUTLIST" name="COEI_CAUTLIST">
                                          <option value="">--Select--</option>
                                         </select>
                                          <label class="mdb-main-label BTxt9">Caution List<span class="MndtryAstr"></span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row SAL OEMPONE">
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_TOTEXPER" name="COEI_TOTEXPER" maxlength="2" onblur="yearsCompare('COEI_TOTEXPER'+$(this).closest('.DYNROW').attr('data-row'),'COEI_NOOFYERBUSINESS'+$(this).closest('.DYNROW').attr('data-row'),'Current Experience Years Should not greater than Total Experience years');ExperYrsCompareAge('COBI_AGE','COEI_TOTEXPER'+$(this).closest('.DYNROW').attr('data-row'));" class="form-control SALM   COEIDBfields NoSpecialChar IsNumberFields PROCHGS">
                                          <label for="COEI_TOTEXPER" class="PROCHGAC">Total Experience<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div class="md-form">
                                          <input type="text" id="COEI_DESIGNATION" maxlength="25"  name="COEI_DESIGNATION" class="form-control  SALM IsAlphaFields COEIDBfields PROCHGS">
                                          <label for="COEI_DESIGNATION" class="PROCHGAC">Designation<span class="MndtryAstr">*</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-row OEMPONE">
                                    <div class="col-md-6 SAL">
                                       <div class="md-form">
                                          <input type="text" id="COEI_LANDLNO" maxlength="11" name="COEI_LANDLNO" class="form-control  IsNumberFields COEIDBfields PROCHGS">
                                          <label for="COEI_LANDLNO" class="PROCHGAC">Landline No<span class="MndtryAstr"></span></label>
                                       </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="md-form">
                                          <select class="md-form colorful-select dropdown-primary OEMPM COEIDBfields" id="COEI_KYCCATEGORY" name="COEI_KYCCATEGORY">
                                             <option value="">Select</option>
                                             <option value="Low">Low</option>
                                             <option value="Medium">Medium</option>
                                             <option value="High">High</option>
                                          </select>
                                          <label class="mdb-main-label BTxt9">KYC Category<span class="MndtryAstr"></span></label>
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
								 
								<!-- <div class="form-row " style="display:none" >
										<div class="col-md-6" >
											<div class="md-form">
												<input type="text" id="COEI_EUAMNO" maxlength="19"  name="COEI_EUAMNO" class="form-control IsUpprCse IsUAMFields Udayamfield COEIDBfields">
												<label for="COEI_EUAMNO" class="">Udyam Registration No<span class="MndtryAstr"></span></label>
											</div>
										</div>
									<div class="col-md-6">
									 <div class="md-form">
										   <div class="custom-control custom-radio custom-control-inline ">
												   <input type="checkbox" class="custom-control-input COEIDBfields" id="COEI_ECUAMNO" name="COEI_ECUAMNO">
												   <label class="custom-control-label" for="COEI_ECUAMNO">Applied for Udyam Number<span class="MndtryAstr"></span></label>
										   </div>
									 </div>
									</div>
								</div>-->
								
								 <div class="form-row ">
								    <div class="col-md-6">				
										<div class="md-form">
										   <div class="custom-control custom-radio custom-control-inline ">
												   <input type="checkbox" class="custom-control-input COEIDBfields" id="COEI_PLOANS" name="COEI_PLOANS">
												   <label class="custom-control-label" for="COEI_PLOANS">Part of Loan Structure</label>
										   </div>
										 </div>  
									 </div>
									 <div class="col-md-6">
											<div class="md-form">
												<input type="text" id="COEI_STAKE" maxlength="5"  name="COEI_STAKE" class="form-control IsNumberFields IsPercentageSPL COEIDBfields">
												<label for="COEI_STAKE" class="">% of Stake</label>
											</div>
										</div>
								 </div>	
                                <div class="form-row ">
                                  <div class="col PRECOMM SEP OEMPONE">
                                       <div class="md-form">
                                          <div  id="ORGSEP" class="select-radio EMPI">
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input COEIDBfields" value="Permanent Residence" id="PrePerRes" name="COEI_PREFCOMMUADDR">
                                                <label class="custom-control-label" for="PrePerRes">Correspondence Address</label>
                                             </div>
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input COEIDBfields" value="Current Residence" id="PreCurRes" name="COEI_PREFCOMMUADDR">
                                                <label class="custom-control-label" for="PreCurRes">Current Address</label>
                                             </div>
                                             <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input COEIDBfields" value="Office" id="PreOff" name="COEI_PREFCOMMUADDR">
                                                <label class="custom-control-label" for="PreOff">Office Address</label>
                                             </div>
                                          </div>
                                          <label class="mdb-main-label BTxt9">Preferred Communication Address<span class="MndtryAstr">*</span></label>      
                                       </div>
                                    </div>
                             <div class="col-md-6">
						        <div class="md-form" >
							        <select class="mdb-select md-form colorful-select dropdown-primary COEIDBfields COEIMndtry" id="COEI_BENEFIOWN" name="COEI_BENEFIOWN">
								        <option value="">Select</option>
								        <option value="Yes">Yes</option>
								        <option value="No">No</option>
							        </select>
							<label class="mdb-main-label BTxt9">Beneficial Owner<span class="MndtryAstr">*</span></label>
						    </div>
				            </div>									
                                 </div>									 
                                <!-- <div class="form-row " style="display:none" >
                                    <div class="col">
                                       <div class="md-form">
                                          <div class="custom-control custom-radio custom-control-inline">
                                             <input type="checkbox" class="custom-control-input COEIDBfields" disabled id="COEI_INCCONSID" name="COEI_INCCONSID" >
                                             <label class="custom-control-label" for="COEI_INCCONSID">Income to be considered<span class="MndtryAstr">*</span></label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>-->
                                 </br>
                                 <div class="form-row">
                                    <div class="col d-flex justify-content-center">
                                       <button type="button" id="save3" data-aria="LSW_TCOCUSEMPINFO|COEI|COEI_EMPID" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
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
      <a class="collapsed Btxt7 AFormaccordion ACCRDISB ORGD OrgDetlShip" data-form="Organisation Details" data-toggle="collapse" data-multidata="" data-aria="LSW_TCUSORGDTLCOAPLCT|COOA|COOA_CUSID|COBI_CUSID" data-load="Yes" data-parent="#accordionEx" href="#collapseFour4"
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
                     <input type="text" id="COOA_CIN" name="COOA_CIN" maxlength="22"  onchange="Checkcin('COOA_PRCSID','COOA_CIN','COOA_CUSID');" class="form-control IsCINno COOADBfields NoSpecialChar">
                     <label for="COOA_CIN" class="">CIN<span class="MndtryAstr"></span></label>
                   </div>
                </div>
                <div class="col-md-6">
                  <div class="md-form">
                    <input type="text" id="COOA_INCORPDT" maxlength="10"  name="COOA_INCORPDT" class="form-control NoSpecialChar ISFutureDateFields COOADBfields IsNumberFields ISDatefield COOAMndtry ">
                    <label for="COOA_INCORPDT" class="">Date Of Incorporation<span class="MndtryAstr">*</span></label>
                  <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"   />
                  </div>
               </div>
        </div>
		
		<!--<div class="form-row COAP">
		         <div class="col-md-6 ">
                   <div class="md-form">
                       <div class="custom-control custom-radio custom-control-inline ">
                               <input type="checkbox" class="custom-control-input CUDHA COOADBfields" onchange="Chkudyam();" id="COOA_CUAMNO" name="COOA_CUAMNO">
                               <label class="custom-control-label" for="COOA_CUAMNO">Applied for Udyam Number <span class="MndtryAstr"></span></label>
                       </div>
                   </div>
				</div>
		         <div class="col-md-6 " >
                    <div class="md-form"><!--onchange="Checkudym('COOA_PRCSID','COOA_UAMNO','COOA_CUSID');"-->
                       <!--<input type="text" id="COOA_UDYAMVERI" hidden="hidden" maxlength="30" name="COOA_UDYAMVERI" class="form-control  COOADBfields">
                       <button type="button" data-Validatearia="COOA_UDYAMVERI" onclick="CheckKYCDetl(this,'COOA_UAMNO','COOA_UDYAMVERI','UDYAM');Chkudyam();"   data-field="COOA_UDYAMVERI|COOA_UPDUAMNO|COBI_CUSTYPE|COBI_CUSID|" data-validate="gstin"  class="btn btn-Verify COOA_UDYAMVERI waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV veri">Verify</button>
                       <input type="text" id="COOA_UAMNO"  data-link="COOA_UAMNO|COOA_UDYAMVERI|Udyam|COOA_UPDUAMNO||||"  maxlength="60" name="COOA_UAMNO"  class="form-control datalink IsUpprCse IsUAMFields Udayamfield URNFld COOADBfields" onchange="Checkudym('COOA_PRCSID','COOA_UAMNO','COOA_CUSID');">                     					
					   <label for="COOA_UAMNO" class="">Udyam Registration No<span class="MndtryAstr"></span></label>
                    </div>
                 </div>
	    </div>-->
        <div class="form-row"> 
            <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary COOADBfields COOAMndtry" onchange="GetNaturBusness_V1(this,'COOA_NATRBUSINESS','COOA_CLUSTER')" id="COOA_INDUSCATRGORY" name="COOA_INDUSCATRGORY">
                  	<option value="" selected >--Select--</option>
                   <!-- <option value="Accommodation and food service activities">Accommodation and food service activities</option>
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
                <div class="col">
                  
                  <div class="md-form">
                   <select class="mdb-select md-form colorful-select dropdown-primary COOADBfields COOAMndtry" onchange="GetClusterBusness_V1('COOA_INDUSCATRGORY',this,'COOA_CLUSTER')"  id="COOA_NATRBUSINESS" name="COOA_NATRBUSINESS">
                  	<option value="" selected>--Select--</option>
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
		   <div class="col-md-6 ">
			    <div class="md-form"> 
                    <select class="mdb-select md-form colorful-select dropdown-primary COOADBfields COOAMndtry"   id="COOA_SECTOR" name="COOA_SECTOR">
					<option value="" selected >--Select--</option>				
					</select>
					<label class="">Sector<span class="MndtryAstr">*</span></label>
                </div>
			</div>
        </div> 
		<div class="form-row  " >
                <!--<div class="col-md-6 ">
    				<div class="">Udyam Registration Certificate Document</div>
						<div class="row UAMN" >
							<div class="col-md-8  Formcol-mdLR UAMNupload1" style="display:none">
								<div class="md-form">
									<table><tr>
									<td>
									<div id="COOA_UPDUAMNOUPLOAD"  class="file-field">
									<a class="">
									<i class="fa fa-plus imgAdd" aria-hidden=""></i>
									<input type="file"  name="datafile" onchange="DocFldUpldHndlr(COOA_UPDUAMNO,'COOA_UPDUAMNO','Udyam','Udyam')" class="COOA_UPDUAMNO"  >
									</a> 
									<input type="text" id="COOA_UPDUAMNO" data-val="Upload Udyam Registration Certificate" hidden="hidden" data-Validate="COOA_UPDUAMNO"  name="COOA_UPDUAMNO" class="form-control voter File COOADBfields">
									<span class="name1">Upload</span>
									</div>
									</td>
									</tr></table>
								</div>    
							</div>  
    		                <div class="col-md-4 Formcol-mdLR TxtCenter UdyamView1">
								<div class="md-form">
									<div class="COOA_UPDUAMNO" style="display:none">
										<img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" onclick="ReuploadFile(COOA_UPDUAMNO);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
										<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded DELETEEVENT" onclick="GrdDocDwnld('COOA_UPDUAMNO')" alt="Cinque Terre" width="35" height="25"> 
									    <img src="ThemeproLO/Common/Images/Delete_Img.png" style="display:none" width="35" height="25" data-hide="COOA_UPDUAMNO" data-show="COOA_UPDUAMNOUPLOAD"  class="DELBTN DELETEUPLDDTL DELETEEVENT"/>
								    </div>
								</div>
    		                </div>  
						</div>
    		    </div> -->			
			   <div class="col-md-6">
           		<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary COOADBfields" id="COOA_ENTTYPE" name="COOA_ENTTYPE">
                  	<option value="">Select</option>
  					<option value="Micro">Micro</option>
  					<option value="Medium">Medium</option>
  					<option value="Small">Small</option>
				</select>
				<label class="mdb-main-label BTxt9">Enterprise Type<span class="MndtryAstr"></span></label>
             </div>
            </div>
		</div>
			<div class="form-row" >
				 <div class="col-md-6 NINDM">
                  <div class="md-form">
                    <input type="text" id="COOA_UDADHAR" maxlength="100" name="COOA_UDADHAR" class="form-control COOADBfields NoSpecialChar   ">
                    <label for="COOA_UDADHAR" class="">Udyog aadhar<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 <div class="col-md-6 NINDM">
                  <div class="md-form">
                    <input type="text" id="COOA_SHOPNUM" maxlength="100" name="COOA_SHOPNUM" class="form-control COOADBfields NoSpecialChar   ">
                    <label for="COOA_SHOPNUM" class="">Shop establishment number<span class="MndtryAstr"></span></label>
                  </div>
                </div>
			</div>
			<div class="form-row" >
				<div class="col-md-6 NINDM">
                  <div class="md-form">
                    <input type="text" id="COOA_LEINUMBER" maxlength="100" name="COOA_LEINUMBER" class="form-control COOADBfields NoSpecialChar   ">
                    <label for="COOA_LEINUMBER" class="">Lei Number<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				 <div class="col-md-6 NINDM">
                  <div class="md-form">
                    <input type="text" id="COOA_IMPORTCODE" maxlength="100" name="COOA_IMPORTCODE" class="form-control COOADBfields NoSpecialChar   ">
                    <label for="COOA_IMPORTCODE" class="">Import Export Code<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				</div>
		   	<div class="form-row">
				<div class="col-md-6">
					<div class="md-form">
					<select class="md-form colorful-select dropdown-primary  COOADBfields" id="COOA_KYCCATEGORY" name="COOA_KYCCATEGORY">
                                             <option value="">Select</option>
                                             <option value="Low">Low</option>
                                             <option value="Medium">Medium</option>
                                             <option value="High">High</option>
                                          </select>
                    <label for="COOA_KYCCATEGORY" class="">KYC Category<span class="MndtryAstr"></span></label>
					</div>
					</div>
				</div>
    <!--    <div class="form-row">
                 <div class="col">
                     <div class="md-form">
                         <div class="custom-control custom-radio custom-control-inline ">
                              <input type="checkbox" class="custom-control-input COOADBfields" disabled  id="COOA_INCCONSID" name="COOA_INCCONSID">
                              <label class="custom-control-label" for="COOA_INCCONSID">Income to be considered<span class="MndtryAstr">*</span></label>
                         </div>
                    </div>
               </div>
         </div>-->
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
  </div>
  
  <!-- Accordion card -->
</div>

<!-- Accordion wrapper -->

<!-- END -->
</div>

 <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/CoApplcnt/LoadSubmit.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/CustomerDetails/Script/CoApplcnt/Validation.js${DMY13}"></script> 
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
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
        <button type="button" id="Mobotp" data-field="COBI_UTILITYVERIFY|EBRequestId|COBI_CUSTYPE|COBI_CUSID|"  onclick="CheckKYCDetl(this,'EBMobOTP','COBI_UTILITYVERIFY','MOBILE STATUS','');" class="btn btn-yel Btxt2">Confirm</button>
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
        <button type="button" id="EMAILOTP" onclick="CheckMobValidKyc('MobOTP','status','MOBI','COAI_EMAILVERIFY','EMAIL','','')" class="btn btn-yel Btxt2">Confirm</button>
		<button type="button" id="MOBOTP" onclick="CheckMobValidKyc('MobOTP','status','MOBI','COAI_MOBIVERIFY','SMS','','')" class="btn btn-yel Btxt2">Confirm</button>
		<button type="button" id="MOBOTPII" onclick="CheckMobValidKyc('MobOTP','status','MOBI','COAI_MOBIIVERIFY','SMSII','','')" class="btn btn-yel Btxt2">Confirm</button>
	  </div>
    </div>
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
                              <!--<option value="Partnership firms">Partnership firms</option>
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
<script>

function getLocation(cusid,Lat,Long,DistanceFld) {
	$("#"+Lat).val("");
	$("#"+Long).val("");
	$("#collapseTwo2").find("#Save2").click()
	var op1 = UI_getdata($("#PrcsID").val(),$("#"+cusid).val(),"","","","LSW_SGEOTAGGINGVALIDATOR");
	if($(op1).find("RESULT").text() == "N")
	{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
	setTimeout (function() {
		if((($("#"+Lat).val()) !=  "") && (($("#"+Long).val()) != ""))
	{
		$("#collapseTwo2").find("#Save2").click()
		var APIData=GeoTagging($("#PrcsID").val(),$("#"+cusid).val(),"getLatLngByAddress");
		var obj= JSON.parse(APIData)
		GetCoordinateDistance(Lat+"~"+obj.data.lat,Long+"~"+obj.data.lang,"COAI_GEOFLDGHTMLTOAPI","HTML TO API");
		
		$("#collapseTwo2").find("#Save2").click()
	} 
		
	}, 2000)
	
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
	}
	else{
		alert("Fill the Address Fields to Initiate Geo Tagging");
		return;
	}
}

function showPosition(position) {
  $("#COAI_LAT").val(position.coords.latitude);
  $("#COAI_LAT").next().next().addClass("active");
  $("#COAI_LONG").val(position.coords.longitude);
  $("#COAI_LONG").next().addClass("active");
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.")
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.")
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.")
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.")
      break;
  }
}
</script>                             
                                  <!--   </div>
                                </div>   -->                           