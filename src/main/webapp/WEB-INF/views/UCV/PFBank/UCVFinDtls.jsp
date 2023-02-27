</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
      <div class="row">
         <div class="col-lg-12">
            <ul title="PF" class="nav FormPageMultiTab" data-popup="No" data-aria="LSW_TFINANDTLS|FINT|FINT_PFNO">
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
      <!--  card -->
      <div class="card CardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form>
               <input type="text" id="FIMA_PRCSID" hidden="hidden" name="FIMA_PRCSID" class="form-control FIMADBfields">
               <input type="text" id="FIMA_ACTIVITYID" hidden="hidden" name="FIMA_ACTIVITYID" class="form-control FIMADBfields">
               <input type="text" id="FIMA_DTCREATED" hidden="hidden" name="FIMA_DTCREATED" class="form-control FIMADBfields"> 
               <input type="text" id="FIMA_CREATEDBY" hidden="hidden" name="FIMA_CREATEDBY" class="form-control FIMADBfields">
               <input type="text" id="FIMA_MODIFIEDBY" hidden="hidden" name="FIMA_MODIFIEDBY" class="form-control FIMADBfields">
               <input type="text" id="FIMA_DTMODIFIED" hidden="hidden" name="FIMA_DTMODIFIED" class="form-control FIMADBfields">
               <!-- LSW_TRATIOCOMPDETAILS -->
               <input type="text" id="FIMA_CUSID" hidden="hidden" name="FIMA_CUSID"   class="form-control FIMADBfields">
               <input type="text" id="FIMA_CUSNAME" hidden="hidden" name="FIMA_CUSNAME"   class="form-control FIMADBfields">
               <input type="text" id="FIMA_XMLMAIN" hidden="hidden" name="FIMA_XMLMAIN" class="form-control FIMADBfields">
			   
			    <input type="text" id="FIMA_ATTACHGRID" hidden="hidden" name="FIMA_ATTACHGRID" class="form-control FIMADBfields">
				<input type="text" id="FIMA_TRANSACTIONREC" hidden="hidden" name="FIMA_TRANSACTIONREC" class="form-control FIMADBfields">
				<input type="text" id="FIMA_COMPLTFLG" hidden="hidden" name="FIMA_COMPLTFLG" class="form-control FIMADBfields">
               </br>
               <!-- 	<div id="EXCELUPLOAD"  class="file-field DDU FltRight ">
                  <a class="">
                    <i class="fa imgAdd" aria-hidden=""></i>
                    <input type="file"  name="datafile" onchange="UploadData(EXCELUPLOAD)" class="EXCELUPLOAD"  >
                  </a>
                  <input type="text" id="EXCELUPLOAD" hidden="hidden" data-Validate="EXCELUPLOAD"  name="EXCELUPLOAD" class="form-control File "/>
                  <span class="name Btxt4  FltRight ">Click Here to Upload
                  <img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-upd="" width="20" height="20">
                  </span> 
                  
                  </div>  -->
               </br>
               <div class="form-row">
                  <div class="col-md-6">
                     <div class="md-form">
                        <select class="md-form colorful-select dropdown-primary RAIOYEAR FIMAMndtry FIMADBfields" onchange="ChkITR()" id="FIMA_ITRCHK" name="FIMA_ITRCHK">
                           <option value="">Select</option>
                           <option  value="Yes" >Yes</option>
                           <option  value="No">No</option>
						   <option  value="NA">NA</option>
                        </select>
                        <label class="mdb-main-label BTxt9">ITR Available<span class="MndtryAstr">*</span></label>
                     </div>
                  </div>
				  
			
                  <div class="col-md-6 CHKITR">
                     <div class="md-form">
                        <select class="md-form colorful-select dropdown-primary RAIOYEAR CHKITRM FIMADBfields" onchange="CHKMULTIULOAD();" id="FIMA_FINYEAR" name="FIMA_FINYEAR">
                           <option value="">Select</option>
                           <option  value="1" >1</option>
                           <option  value="2" >2</option>
                           <option  value="3">3</option>
                        </select>
                        <label class="mdb-main-label BTxt9">Years<span class="MndtryAstr">*</span></label>
                     </div>
                  </div>
           
			   
			   
				  <div style="display:none">
                  <div class="col-md-6 FinExcl CHKITR">
                     <!--<div class="">Upload Statement</div>-->
                     <div class="col-md-8  Formcol-mdLR panupload ">
                        <div class="md-form">
                           <!--  <div id="PANUPLOAD" > <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="DocFldUpldHndlr(CBSI_PANAttachment,id)" id="PAN" class="rounded" alt="Cinque Terre" width="20" height="20"> Upload PAN ID </div>-->
                           <table>
                              <tr>
                                 <td>
                                    <div id="FIMA_ITRFILEUPLOAD"  class="file-field">
                                       <a class="">
                                       <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('ITRFILE',this)"></i>
                                       <input type="file"  name="datafile"  onchange="DocFldUpldHndlr(FIMA_ITRFILE,'FIMA_ITRFILE','ITRFILE','ITRFILEview')" class="FIMA_ITRFILE">
                                       </a>
                                       <input type="text" id="FIMA_ITRFILE" data-val="ITR FILE" hidden="hidden" data-Validate="FIMA_ITRFILE"  data-field="FIMA_ITRFILEVERIFY" name="FIMA_ITRFILE" class="form-control pan File CBSIDBfields">
                                       <span class="name1">ITR Upload</span>
                                    </div>
                                 </td>
                              </tr>
                           </table>
                        </div>
                     </div>
                     <input type="text" id="CBSI_PANUPLOADVERIFY" hidden="hidden" name="CBSI_PANUPLOADVERIFY" class="form-control CBSIDBfields">
                     <div class="col-md-4 panview" >
                        <div class="md-form Formcol-mdLR TxtCenter">
                           <div class="md-form">
                              <div class="FIMA_ITRFILE" style="display:none"> 
                                 <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded  ReUpld" title="UPLOAD"     onclick="ReuploadFile(FIMA_ITRFILE);" alt="Cinque Terre" width="20" height="20">  
                                 <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('FIMA_ITRFILE');" class="rounded" alt="Cinque Terre" width="35" height="25"> 
                                 <button type="button" onclick="CheckKYCUPLOADDOC(this,'FIMA_ITRFILE','FIMA_ITRFILEVERIFY','ITR-V OCR');" data-field="CBSI_CUSFISNAM|CBSI_CUSLSTNAM|CBSI_CUSTYPE|CBSI_CUSID|PAN|CBSI_PAN" data-Validatearia="FIMA_ITRFILEVERIFY" data-validate="pan" class="btn FIMA_ITRFILE waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
				  </div>
               </div>
               <div class="form-row " style="display:none;">
                  <div class="col-md-6">
                     <div class="md-form">
                        <select class="md-form colorful-select dropdown-primary RAIOYEAR CHKITRM FIMADBfields" onchange="GrdLoadOnYrChng()" id="FIMA_YEAR" name="FIMA_YEAR">
                           <option value="">Select</option>
                          
                        </select>
                        <label class="mdb-main-label BTxt9">Financial Year<span class="MndtryAstr">*</span></label>
                     </div>
                  </div>
               </div>
			   <div class="form-row TWEONE CHKITR">
				  <div class="col-md-4">
			        <div class="md-form">
					  <button type="button" id="InitiateFSA" onclick="FinancialInteg('startTransaction','FIMA_CUSID')" class="btn btn-Syel waves-effect waves-light">Initiate FSA</button> 
				    </div>
                </div>
				 </div>
			     <div style="display:none">
               <div class="form-row TWEONE CHKITR">
                  <div class="col-md-6 FinExcl">
                     <!--<div class="">Upload Statement</div>-->
                     <div class="row UAMN " >
                        <div class="col-md-8  Formcol-mdLR  UAMNupload">
                           <div class="md-form">
                              <table>
                                 <tr>
                                    <td>
                                       <div id="FIMA_EXCELUPLOAD"  class="file-field">
                                          <a class="">
                                          <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                          <input type="file"  name="datafile" onchange="DocFldUpldHandler(FIMA_EXCEL,'FIMA_EXCEL','FinExclView','FinExclView')" class=""><!--CHKITRM-->
                                          </a> 
                                          <input type="text" id="FIMA_EXCEL" data-val="Upload Statement" hidden="hidden" data-Validate="FIMA_EXCEL"  name="FIMA_EXCEL" class="form-control   File  FIMADBfields">
                                          <span class="name1">Excel Upload</span>
                                       </div>
                                    </td>
                                 </tr>
                              </table>
                           </div>
                        </div>
                        <div class="col-md-2 Formcol-mdLR TxtCenter FinExclView">
                           <div class="md-form">
                              <div class="FIMA_EXCEL" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(FIMA_EXCEL);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
                                 <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('FIMA_EXCEL')" alt="Cinque Terre" width="35" height="25"> 
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  </br>
                  
               </div>
			   </div>
			     <div style="display:none">
			   <div class="form-row TWEONE CHKITR">
			   <div class="col Btxt10">Supporting Documents</div>
			   </div>
			   	  
			   <div class="form-row TWEONE CHKITR">
				<div class="col-md-6 FinanDoc ">
                     <!--<div class="">Upload Statement</div>-->
                     <div class="row UAMN " >
                        <div class="col-md-8  Formcol-mdLR  UAMNupload">
                           <div class="md-form">
                              <table>
                                 <tr>
                                    <td>
                                       <div id="FIMA_UPLDUPLOAD"  class="file-field">
                                          <a class="">
                                          <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                          <input type="file"  name="datafile" onchange="DocFldUpldHndlr(FIMA_UPLD,'FIMA_UPLD','FinanDocView','FinanDocView')" class=""  >
                                          </a> 
                                          <input type="text" id="FIMA_UPLD" data-val="Upload Statement" hidden="hidden" data-Validate="FIMA_UPLD"  name="FIMA_UPLD" class="form-control File  FIMADBfields">
                                          <span class="name1">Upload Document *</span>
                                       </div>
                                    </td>
                                 </tr>
                              </table>
                           </div>
                        </div>
                        <div class="col-md-2 Formcol-mdLR TxtCenter FinanDocView">
                           <div class="md-form">
                              <div class="FIMA_UPLD" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(FIMA_UPLD);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
                                 <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('FIMA_UPLD')" alt="Cinque Terre" width="35" height="25"> 
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
				 
			   </div>
			    </div>
				
				   <div class="form-row ">
				 <div class="col-md-12 TWEONE CHKITR">
                    <div class="col Btxt10">Upload Documents</div>
                     <div data-for="BankDetail1" class="BankDetail1">
					 
                     </div>
                     <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="BankDetail1" style="display:none">
                        <div data-row="" class="card-body px-lg-5 pt-0 DYNROW">
                           </br>
                           <input type="text" id="APDG_PRCSID" hidden="hidden" name="APDG_PRCSID" value="" class="form-control APDGDBfields">
                           <input type="text" id="APDG_ACTIVITYID" hidden="hidden" name="APDG_ACTIVITYID" class="form-control APDGDBfields">
                           <input type="text" id="APDG_DTCREATED" hidden="hidden" name="APDG_DTCREATED" class="form-control APDGDBfields">
                           <input type="text" id="APDG_CREATEDBY" hidden="hidden" name="APDG_CREATEDBY" class="form-control APDGDBfields">
                           <input type="text" id="APDG_DTMODIFIED" hidden="hidden" name="APDG_DTMODIFIED" class="form-control APDGDBfields">
                           <input type="text" id="APDG_MODIFIEDBY" hidden="hidden" name="APDG_MODIFIEDBY" class="form-control APDGDBfields">
						   <input type="text" id="APDG_UPLDFL" hidden="hidden" name="APDG_UPLDFL" class="form-control APDGDBfields">
						   <input type="text" id="APDG_CUSID" hidden="hidden" name="APDG_CUSID" class="form-control APDGDBfields">
                           <div class="form-row">
						   <div class="col">
                              <div class="md-form">
                                 <select class="md-form colorful-select dropdown-primary  APDGDBfields" id="APDG_YEAR" name="APDG_YEAR">
                                    <option value="">Select</option>
                                   
                                 </select>
                                 <label class="mdb-main-label BTxt9">Financial Years<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
						   
						   
                               <div class="col">
                                 <div class="md-form " >
                                    <table>
                                       <tr>
                                          <td>
                                          	
                                             <div id="APDG_PDATTACHMNTUPLOAD"  class="file-field">
                                                <a class="">
                                                <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                                <input type="file"  name="datafile" onchange="DocFldUpldHndlr_Finc(this,'APDG_PDATTACHMNT'+$(this).closest('.DYNROW').attr('data-row'),'APDG_PDATTACHMNT','FSA','FSA','FSA',$(this).closest('.DYNROW')) " class="APDG_PDATTACHMNT"  >
                                                </a>
                                                <input type="text" id="APDG_PDATTACHMNT" hidden="hidden" data-Validate="APDG_PDATTACHMNT"  name="APDG_PDATTACHMNT" class="form-control File APDGDBfields APDGMndtry">
                                                <span class="name">Upload Document</span> 
                                             </div>
                                          </td>
                                          <div class="md-form">
                                             <div class="md-form Formcol-mdLR">
                                                <div class="APDG_PDATTACHMNT DELVIEW" style="display:none"> 
                                                <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="" onclick="Chkdel($(this).closest('.DYNROW'),'APDG_PDATTACHMNT'+$(this).closest('.DYNROW').attr('data-row'),'DELVIEW')" class=" DELBTN DELETEDOCUMNETS"/>      
                                       
                                        <!--  <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile($('#APDG_PDATTACHMNT'+$(event.target).closest('.DYNROW').attr('data-row')));" 
                                                alt="Cinque Terre" width="20" height="20">   -->
                                                <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" 
                                                onclick="GrdDocDwnld('APDG_PDATTACHMNT'+$(this).closest('.DYNROW').attr('data-row'))" class="  rounded" 
                                                alt="Cinque Terre" width="35" height="25"> </div>
                                             </div>
                                          </div>
                                       </tr>
                                    </table>
                                 </div>
                              </div>
                           </div>
						   <div class="form-row">
							  <div class="col-md-4">
								<div class="md-form">
								  <button type="button" id="AddFSA" onclick="AddInteg('addFinancialYear','FIMA_CUSID',this)" class="btn btn-Syel waves-effect waves-light">Add Financial Year</button> 
								</div>
							</div>
							 </div>
                        </div>
                     </div>
                  </div>
				</div>
				
				
			     
		
               <!--	<div class="form-row TWENTY" style="display:none">
                  <div class="col-md-6 ">
                  		<!--<div class="">Upload Statement</div>
                  		<div class="row UAMN " >
                  <div class="col-md-8  Formcol-mdLR  UAMNupload">
                  <div class="md-form">
                  <table><tr>
                  <td>
                  <div id="FIMA_EXCELTWOUPLOAD"  class="file-field">
                  <a class="">
                  <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                  <input type="file"  name="datafile" onchange="DocFldUpldHandler(FIMA_EXCELTWO,'FIMA_EXCELTWO','FinSecExclView','FinanSecExcelView')" class="FIMA_EXCEL"  >
                  </a> 
                  <input type="text" id="FIMA_EXCELTWO" data-val="Upload Statement" hidden="hidden" data-Validate="FIMA_EXCELTWO"  name="FIMA_EXCELTWO" class="form-control   File TWENT FIMADBfields">
                  <span class="name1">Excel Upload*</span>
                  </div>
                  
                  
                  
                  </td>
                  </tr></table>
                  </div>    
                  </div>  
                  <div class="col-md-2 Formcol-mdLR TxtCenter FinanSecExcelView">
                  <div class="md-form">
                  <div class="FIMA_EXCELTWO" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(FIMA_EXCELTWO);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
                  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('FIMA_EXCELTWO')" alt="Cinque Terre" width="35" height="25"> </div>
                  </div>
                  </div>  
                  
                  
                  </div>
                  </div>	
                  
                  </br>
                  				<div class="col-md-6 ">
                  		<!--<div class="">Upload Statement</div>-
                  		<div class="row UAMN " >
                  <div class="col-md-8  Formcol-mdLR  UAMNupload">
                  <div class="md-form">
                  <table><tr>
                  <td>
                  <div id="FIMA_UPLDTWOUPLOAD"  class="file-field">
                  <a class="">
                  <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                  <input type="file"  name="datafile" onchange="DocFldUpldHndlr(FIMA_UPLDTWO,'FIMA_UPLDTWO','FinanSecView','FinanSecDocView')" class="FIMA_UPLDTWO"  >
                  </a> 
                  <input type="text" id="FIMA_UPLDTWO" data-val="Upload Statement" hidden="hidden" data-Validate="FIMA_UPLDTWO"  name="FIMA_UPLDTWO" class="form-control   File TWENT FIMADBfields">
                  <span class="name1">Upload Document*</span>
                  </div>
                  
                  
                  
                  </td>
                  </tr></table>
                  </div>    
                  </div>  
                  <div class="col-md-2 Formcol-mdLR TxtCenter FinanSecDocView">
                  <div class="md-form">
                  <div class="FIMA_UPLDTWO" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(FIMA_UPLDTWO);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
                  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('FIMA_UPLDTWO')" alt="Cinque Terre" width="35" height="25"> </div>
                  </div>
                  </div>  
                  
                  
                  </div>
                  </div>	
                  </div>
                  
                  <div class="form-row NINTY" style="display:none">
                  <div class="col-md-6 ">
                  		<!--<div class="">Upload Statement</div>-
                  		<div class="row UAMN " >
                  <div class="col-md-8  Formcol-mdLR  UAMNupload">
                  <div class="md-form">
                  <table><tr>
                  <td>
                  <div id="FIMA_EXCELTRDUPLOAD"  class="file-field">
                  <a class="">
                  <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                  <input type="file"  name="datafile" onchange="DocFldUpldHandler(FIMA_EXCELTRD,'FIMA_EXCELTRD','FinTrdExclView','FinanTrdExcelView')" class="FIMA_EXCEL"  >
                  </a> 
                  <input type="text" id="FIMA_EXCELTRD" data-val="Upload Statement" hidden="hidden" data-Validate="FIMA_EXCELTRD"  name="FIMA_EXCELTRD" class="form-control   File NINT FIMADBfields">
                  <span class="name1">Excel Upload*</span>
                  </div>
                  
                  
                  
                  </td>
                  </tr></table>
                  </div>    
                  </div>  
                  <div class="col-md-2 Formcol-mdLR TxtCenter FinanTrdExcelView">
                  <div class="md-form">
                  <div class="FIMA_EXCELTRD" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(FIMA_EXCELTRD);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
                  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('FIMA_EXCELTRD')" alt="Cinque Terre" width="35" height="25"> </div>
                  </div>
                  </div>  
                  
                  
                  </div>
                  </div>	
                  
                  </br>
                  				<div class="col-md-6 ">
                  		<!--<div class="">Upload Statement</div>-
                  		<div class="row UAMN " >
                  <div class="col-md-8  Formcol-mdLR  UAMNupload">
                  <div class="md-form">
                  <table><tr>
                  <td>
                  <div id="FIMA_UPLDTRDUPLOAD"  class="file-field">
                  <a class="">
                  <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                  <input type="file"  name="datafile" onchange="DocFldUpldHndlr(FIMA_UPLDTRD,'FIMA_UPLDTRD','FinanTrdView','FinanTrdDocView')" class="FIMA_UPLDTRD"  >
                  </a> 
                  <input type="text" id="FIMA_UPLDTRD" data-val="Upload Statement" hidden="hidden" data-Validate="FIMA_UPLDTRD"  name="FIMA_UPLDTRD" class="form-control   File NINT FIMADBfields">
                  <span class="name1">Upload Document*</span>
                  </div>
                  
                  
                  
                  </td>
                  </tr></table>
                  </div>    
                  </div>  
                  <div class="col-md-2 Formcol-mdLR TxtCenter FinanTrdDocView">
                  <div class="md-form">
                  <div class="FIMA_UPLDTRD" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(FIMA_UPLDTRD);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
                  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('FIMA_UPLDTRD')" alt="Cinque Terre" width="35" height="25"> </div>
                  </div>
                  </div>  
                  
                  
                  </div>
                  </div>	
                  </div>-->
               <div class="Btxt8" > </div>
               <br>
               <!--    <div class="form-row">
                  <div class="col-md-12">
                    <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_SGETFINANCEGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'FD|'+$('#FIMA_CUSID').val(),MnuId:'FD~'+GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4','FINANACESHEET');" id="BTNFINANACESHEET" name="BTNFINANACESHEET" />
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid " id="Table4">
                    </table>
                  </div>
                  </div>  -->
               </br>
               <div class="form-row">
                  <div class="col d-flex justify-content-center">
				  <button type="button" id="CompleteFSA" style="display:none;" onclick="CompleteInteg('completeTransaction','FIMA_CUSID')" class="btn btn-Syeloutline waves-effect waves-light  TWEONE ">Complete FSA</button> 
                     <button type="button" id="Save1" data-aria="LSW_TFINANCEMAIN|FIMA|FIMA_CUSID" data-form="ExistingLoan" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>
                     <button type="button" data-aria="LSW_TFINANCEMAIN|FIMA|FIMA_CUSID" next-form="TAB|" data-form="ExistingLoan" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
</div>
<div class="">
   <!-- Card body -->
   <div class="">
      <form >
         </br>
         </br>
         <div class="form-row">
            <div class="col">
               <div class="md-form">
                  <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="CBRTable">
                  </table>
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
   <!-- <button type="button" id="Defferment"  class="btn btn-yel Btxt2">Initiate Deferement</button>-->
</div>
</div>
</div>
</div>  
<table style="display:none" id="GridTable4">
   <thead>
      <th>FINT_FINYEAR</th>
      <th>FINT_YEAR1</th>
      <th>FINT_YEAR2</th>
      <th>FINT_YEAR3</th>
      <th>FINT_CUSID</th>
      <!-- <th>RPLS_PRCSID</th>
         <th>RPLS_ACTIVITYID</th>
         <th>RPLS_CREATEDBY</th>
         <th>RPLS_DTCREATED</th>
         <th>RPLS_MODIFIEDBY</th>
         <th>RPLS_DTMODIFIED</th>
          -->
   </thead>
</table>
<script type="text/javascript" src="ThemeproLO/PFBank/Script/FinDtls/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/PFBank/Script/FinDtls/Validation.js${DMY13}"></script>                            
<!--   </div>
   </div>   -->    
<script>
   /* $(document).ready(function(){
   	
   	$("input[name='PFDT_MODE']").change(function(){
   	    if($('#OnlRadio').prop('checked')){
   	    	$("#OnlinePayCollapse").addClass("show");
   	    }
   	    else{
   	    	$("#OnlinePayCollapse").removeClass("show");
   	    }
   	    if($('#ChqRadio').prop('checked')){
   	    	$("#ChequePayCollapse").addClass("show");
   	    }
   	    else{
   	    	$("#ChequePayCollapse").removeClass("show");
   	    }
   	});
   	
   	
   });
   	*/
</script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>