


                <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="card card-cascade narrower FormCardContent">

</br>
                            <!--Admin panel-->
                            <div class="admin-panel">

<div class="">
                                <!--Main First row-->
                                <div class="row FormRows m-b-0">

                                    <!--First column-->
<div class="col-md-12 Formcol-mdLR Btxt1 ">
Application Info
</div>
</div>
                                
                                <div class="row FormRows m-b-0">

                                    <!--First column-->
<div class="col-md-3 Formcol-mdLR">
<div class="Ntxt6" >Customer Type</div>
<div class="Btxt5 CBSIAPPINFO LSbrd" id="APFI_CUSTYPE" name="APFI_CUSTYPE" value=""></div>
</div>  

<div class="col-md-3 Formcol-mdLR">
<div class="Ntxt6">Branch</div>
<div class="Btxt5 CBSIAPPINFO LSbrd" id="APFI_BRANCH" name="APFI_BRANCH" value="" ></div>
</div>  

<div class="col-md-3 Formcol-mdLR">
<div class="Ntxt6">Loan Type</div>
<div class="Btxt5 CBSIAPPINFO LSbrd" id="APFI_LONTYPE" name="APFI_LONTYPE" value="" ></div>
</div>  

<div class="col-md-3 Formcol-mdLR">
<div class="Ntxt6">Sub Loan Type</div>
<div class="Btxt5 CBSIAPPINFO " id="APFI_SUBLONTYPE" name="APFI_SUBLONTYPE" value=""></div>
</div>  

</div>  
<div class="row FormRows m-b-0">
                                  <!--First column-->
<div class="col-md-3 Formcol-mdLR">
<div class="Ntxt6" >Customer Profile</div>
<div class="Btxt5 CBSIAPPINFO LSbrd" id="APFI_CUSPROFILE" name="APFI_CUSPROFILE" value=""></div>
</div>   
</div> 
   </div>
</br>
</br>
<div class="RejRmk" style="display:none">
<div class="col-md-12 Formcol-mdLR Btxt1 ">Reject Reason</div>
<div class="md-form">
    <textarea id="REJRMK" name="REJRMK" maxlength="4000" disabled class="form-control AAPRDBfields btxt24" style="height: 100px;width:400px;"></textarea>
</div>
<div class="md-form">
<button type="button" onclick="" style="display:none;" class="btn ReopenRemsarksPopup waves-effect btn-yelInplain btn-sm BTNVerify">Re-Open</button>
</div>
</div>
<input type="text" id="KARZASTATUS" name="KARZASTATUS" hidden="hidden" class="form-control DataNormal" value="">

<div class="">

<input type="text" id="CBSI_VOTERIDDOCCHK" name="CBSI_VOTERIDDOCCHK" hidden="hidden" class="form-control DataNormal CBSIDBfields" value="">
<input type="text" id="CBSI_AADHARDOCCHK" name="CBSI_AADHARDOCCHK" hidden="hidden" class="form-control DataNormal CBSIDBfields" value="">
<input type="text" id="CBSI_DLDOCCHK" name="CBSI_DLDOCCHK" hidden="hidden" class="form-control DataNormal CBSIDBfields" value="">
<input type="text" id="CBSI_PASSPORTDOCCHK" name="CBSI_PASSPORTDOCCHK" hidden="hidden" class="form-control DataNormal CBSIDBfields" value="">
<input type="text" id="CBSI_PANDOCCHK" name="CBSI_PANDOCCHK" hidden="hidden" class="form-control DataNormal CBSIDBfields" value="">
<input type="text" id="CBSI_HIDPROFTYP" name="CBSI_HIDPROFTYP" hidden="hidden" class="form-control DataNormal CBSIDBfields" value="">

 <div class="row FormRows m-b-0 KYCInfo">

                                    <!--First column-->
<div class="col-md-12 Formcol-mdLR Btxt1 ">Fill KYC Details</div>
 </div>

<div>
 <div class="row FormRows FormRowsNS m-b-0">
       <div class="col-md-12" >
       <div class="row" >
                       <!--First column-->
					   
           	<div class="col-md-12">
                 <div class="md-form">
                    <div id="" class="select-radio CBSIMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input CBSIDBfields PANVTyp" onclick="Chkdirect()" value="OCR" id="Panocr" name="CBSI_PANTYPE">
                          <label class="custom-control-label" for="Panocr">OCR</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input CBSIDBfields PANVTyp" onclick="Chkdirect()" value="Direct" id="Pandirect" name="CBSI_PANTYPE">
                           <label class="custom-control-label" for="Pandirect">Direct</label>
                       </div>
 
                   </div>
                   <label class="mdb-main-label BTxt9">Pan Verification Type<span class="MndtryAstr">*</span></label>      
               </div>
           </div>

     <div class="col-md-8 KYCPROOF"style="display:none">
		<div class="md-form">
                     <div class="" id="">
                        <select class="mdb-select md-form colorful-select dropdown-primary CBSIDBfields" multiple id="CBSI_KYCPROOFTYP" onchange="GETPROOFTYP();" name="CBSI_KYCPROOFTYP">
                         <option value="">Select</option>
                              <!-- <option value="Public Limited Company - Listed">PAN</option> -->
                              <option value="ID PROOF">ID PROOF</option>
                              <option value="SIGN PROOF">SIGN PROOF</option> 
			                  <option value="DOB PROOF">DOB PROOF</option>
			                  <!--<option value="ADDRESS PROOF 1">ADDRESS PROOF 1</option>
			                  <option value="ADDRESS PROOF 2">ADDRESS PROOF 2</option>-->
                         </select>
                        <label class="mdb-main-label BTxt9">Proof Type *</label>
                    </div>
                   </div>
		</div>		   
<div class="col-md-8  Formcol-mdLR TYP" style="display:none">
<div class="md-form"><!--onblur="InactivePanCheck()"-->
<input type="text" id="CBSI_PAN" data-FetchValidateArea="pan" data-FetchValidate="CBSI_PAN"  onchange="DupPanval('CBSI_PRCSID','CBSI_PAN','CBSI_CONSTITUTION','CBSI_CUSID')" name="CBSI_PAN" data-link="CBSI_PAN|CBSI_PANVERIFY|pan|panupload|panview|CBSI_PANATTACHMENT|Upload PAN ID|CBSI_DEDUPEVERIFY"  data-validate="CBSI_CUSTYPE|CBSI_CONSTITUTION"  maxlength="10" class="form-control datalink NoSpecialChar IsPanFields  CBSIDBfields validate">
<label for="CBSI_PAN" class="">PAN <span class="MndtryAstr">*</span></label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter TYP" style="display:none">
<div class="md-form">
<input type="text" id="CBSI_PANVERIFY" hidden="hidden" name="CBSI_PANVERIFY" class="form-control CBSIDBfields">
<!--<button type="button" onclick="CheckValidPanKyc('CBSI_PAN','CBSI_PANVERIFY','CBSI_CUSFISNAM','CBSI_CUSLSTNAM','CBSI_CUSTYPE','CBSI_CUSID','CADI_ADDRLINI','CADI_ADDRLINII','CEMI_INCCONSID','CDOG_INCCONSID','CBSI_PROFILE');FncallDocChkLst(this,'Table3',{spname:'LSW_SNONIGSTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','PANKARZAGRD');ChkCusConti('CBSI_CUSTYPE','CBSI_CONSTITUTION','CBSI_CUSFISNAM');" data-Validatearia="CBSI_PANVERIFY" data-validate="pan" class="btn CBSI_PAN waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->

<button type="button" onclick="CheckKYCDetl(this,'CBSI_PAN','CBSI_PANVERIFY','PAN');FncallDocChkLst(this,'Table3',{spname:'LSW_SNONIGSTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','PANKARZAGRD');" data-field="CBSI_CUSFISNAM|CBSI_CUSLSTNAM|CBSI_CUSTYPE|CBSI_CUSID|pan|panupload|panview|CBSI_PANATTACHMENT|CBSI_CONSTITUTION" data-Validatearia="CBSI_PANVERIFY" data-validate="pan" class="btn CBSI_PAN waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
</div>
</div>  
</div> 
 <div class="row pan pan1 UPLD" style="display:none" >
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR panupload ">
<div class="md-form">
<!--  <div id="PANUPLOAD" > <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="DocFldUpldHndlr(CBSI_PANAttachment,id)" id="PAN" class="rounded" alt="Cinque Terre" width="20" height="20"> Upload PAN ID </div>-->
 <table>
 <tr>
 <td>
  <div id="CBSI_PANATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('PAN',this)"></i>
      <input type="file"  name="datafile"  onchange="DocFldUpldHndlr(CBSI_PANATTACHMENT,'CBSI_PANATTACHMENT','PAN','panview')" class="CBSI_PANATTACHMENT">
    </a>
    <input type="text" id="CBSI_PANATTACHMENT" data-val="PAN ID" hidden="hidden" data-Validate="CBSI_PANATTACHMENT"  data-field="CBSI_PANUPLOADVERIFY" name="CBSI_PANATTACHMENT" class="form-control pan File CBSIDBfields">
    <span class="name1">Upload PAN ID</span>
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
<div class="CBSI_PANATTACHMENT" style="display:none">  
<img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded  ReUpld" title="UPLOAD"     onclick="ReuploadFile(CBSI_PANATTACHMENT);" alt="Cinque Terre" width="20" height="20">  
<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('CBSI_PANATTACHMENT');" class="rounded" alt="Cinque Terre" width="35" height="25"> 
<button type="button" onclick="CheckKYCUPLOADDOC(this,'CBSI_PANATTACHMENT','CBSI_PANUPLOADVERIFY','KYC OCR');" data-field="CBSI_CUSFISNAM|CBSI_CUSLSTNAM|CBSI_CUSTYPE|CBSI_CUSID|PAN|CBSI_PAN|CBSI_CONSTITUTION|CBSI_FATHRNAM" data-Validatearia="CBSI_PANUPLOADVERIFY" data-validate="pan" class="btn CBSI_PANATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>
</div>  
</div> 
</br>

<div class="row" > 
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="CBSI_CKYC" maxlength="14"  data-link="CBSI_CKYC|CBSI_CKYCVERIFY" name="CBSI_CKYC" class="CBSIDBfields datalink NoSpecialChar IsNumberFields form-control validate">
<label for="CBSI_CKYC" data-error="wrong" data-success="right" class="">CKYC Number</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="CBSI_CKYCVERIFY" hidden="hidden" name="CBSI_CKYCVERIFY" class="form-control CBSIDBfields">
<!--<button type="button" data-Validatearia="CBSI_CKYCVERIFY" disabled data-validate="CKYC" class="btn CBSI_CKYC waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>-->
</div>
</div>  
</div>

<!-- <div class="row" > 
                                    <!--First column
   <div class="md-form">
                       <input type="text" id="CEMI_UDYAMVERI" hidden="hidden" maxlength="30" name="CEMI_UDYAMVERI" class="form-control  CEMIDBfields">
                       <button type="button" data-Validatearia="CEMI_UDYAMVERI" onclick="CheckKYCDetl(this,'CEMI_EUAMNO'+$(this).closest('.DYNROW').attr('data-row'),'CEMI_UDYAMVERI'+$(this).closest('.DYNROW').attr('data-row'),'UDYAM',$(this).closest('.DYNROW'));Cochk();" data-field="CEMI_UDYAMVERI|CEMI_UPDUAMNO||CBSI_CUSID|MULTIEMP" data-validate="gstin" class="btn btn-Verify CEMI_UDYAMVERI waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV veri">Verify</button>
					   <input type="text" id="CEMI_EUAMNO" maxlength="60" data-link="CEMI_EUAMNO|CEMI_UDYAMVERI|Udyam|Multi|CBSI_CUSID|CEMI_UDYAMVERI|CEMI_UPDUAMNO|"  name="CEMI_EUAMNO" class="form-control datalink IsUpprCse IsUAMFields Udayamfield URNFld  CEMIDBfields">
                       <label for="CEMI_EUAMNO" class="">Udyam Registration No<span class="MndtryAstr"></span></label>
                    </div>
</div> -->

</div>    
</div>                                                   
 </br>
  <div class="row FormRows m-b-0 OtherKYCInfo" style="display:none">
                            <!--First column-->
<div class="col-md-12 Formcol-mdLR Btxt1 OKYCD">Other KYC Details</div>
 </div>              
<div class="row FormRows FormRowsNS m-b-0 voter" style="display:none">
 <div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="CBSI_VOTERIDTYPE" data-FetchValidateArea="VOTER" name="CBSI_VOTERIDTYPE" disabled class="form-control CBSIDBfields DSVLBL" value="">
<label for="CBSI_VOTERIDTYPE" class="">Voter ID Verification Type</label>
</div>
</div>


<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="CBSI_VOTERIDPROOF" data-FetchValidateArea="VOTERPROOF" name="CBSI_VOTERIDPROOF" disabled class="form-control CBSIDBfields DSVLBL" value="">
<label for="CBSI_VOTERIDPROOF" class="">Proof type</label>
</div>
</div>



<div class="col-md-12"> 
<div class="row VERIFY VoterFld" >                                 <!--First column-->
<div class="col-md-8  Formcol-mdLR ">
<div class="md-form">   
<input type="text" id="CBSI_VOTERID" name="CBSI_VOTERID" data-FetchValidateArea="voter" data-FetchValidate="CBSI_VOTERID" data-link="CBSI_VOTERID|CBSI_VOTERIDVEIRFY|voter1|voterupload|voterview|CBSI_VOTERATTACHMENT" maxlength="20" onblur="CHKSAMEKYC('CBSI_VOTERID','voter');" class="CBSIDBfields datalink NewVoterField form-control validate">
<label for="CBSI_VOTERID"  class="">Voter ID *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter ">
<div class="md-form">
<input type="text" id="CBSI_VOTERIDVEIRFY" hidden="hidden" name="CBSI_VOTERIDVEIRFY" class="form-control File CBSIDBfields">
<!--<button type="button" data-Validatearia="CBSI_VOTERIDVEIRFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('CBSI_VOTERID','voter','CBSI_VOTERIDVEIRFY','','','','','CBSI_CUSID');SavePersInfo()" data-Validatearia="CBSI_VOTERIDVEIRFY" data-validate="voter" class="btn CBSI_VOTERID  waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button" data-Validatearia="CBSI_VOTERIDVEIRFY" onclick="CheckKYCDetl(this,'CBSI_VOTERID','CBSI_VOTERIDVEIRFY','VOTER ID');FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');" data-field="CBSI_CUSFISNAM|CBSI_CUSLSTNAM|CBSI_CUSTYPE|CBSI_CUSID|voter|voterupload|voterview|CBSI_VOTERATTACHMENT"  data-Validatearia="CBSI_VOTERIDVEIRFY" data-validate="voter" class="btn CBSI_VOTERID  waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
</div>
</div>  
</div>  

<div class="row voter UPLOD" style="display:none" >
                                    <!--First column-->
									
<!-- First Upload Start-->
<div class="col-md-2  Formcol-mdLR voterupload ">
<div class="md-form ">
<!--<div id="VOTERUPLOAD"><img src="ThemeproLO/Common/Images/UploadImg.png" onclick="DocFldUpldHndlr(CBSI_VoterIDAttachment,id)" id="VOTER" class="rounded" alt="Cinque Terre" width="20" height="20"> Upload Voter ID </div>-->
<!-- <input type="file" name="datafile"  class="APP"  onchange="DocFldUpldHndlr(CBSI_VoterIDAttachment)">-->
<table><tr>
<td>
<div id="CBSI_VOTERATTACHMENTUPLOAD"  class="file-field UPLODD">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_VOTERATTACHMENT,'CBSI_VOTERATTACHMENT','Voter ID','voterview')" class="CBSI_VOTERATTACHMENT"  >
    </a> 
<input type="text" id="CBSI_VOTERATTACHMENT" data-val="Voter ID" hidden="hidden" data-FetchValidateArea="voter" data-FetchValidate="CBSI_VOTERATTACHMENT" data-Validate="CBSI_VOTERATTACHMENT" data-field="CBSI_VOTERUPLOADVERIFY"  name="CBSI_VOTERATTACHMENT" class="form-control voter File CBSIDBfields">
<span class="name1"> Upload Voter's ID Frontside</span>
 </div>
</td>
</tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter voterview">
<div class="md-form">
<div class="CBSI_VOTERATTACHMENT" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(CBSI_VOTERATTACHMENT);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('CBSI_VOTERATTACHMENT')" alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="CBSI_VOTERUPLOADVERIFY" hidden="hidden" name="CBSI_VOTERUPLOADVERIFY" class="form-control CBSIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'CBSI_VOTERATTACHMENT','CBSI_VOTERUPLOADVERIFY','KYC OCR');" data-field="CBSI_CUSFISNAM|CBSI_CUSLSTNAM|CBSI_CUSTYPE|CBSI_CUSID|VoterID|CBSI_VOTERID" data-Validatearia="CBSI_VOTERUPLOADVERIFY" data-validate="voter" class="btn CBSI_VOTERATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div> 

<!-- First Upload End-->
<!-- Second Upload Start-->
<div class="col-md-2  Formcol-mdLR voterupload">
<div class="md-form ">
<!--<div id="VOTERUPLOAD"><img src="ThemeproLO/Common/Images/UploadImg.png" onclick="DocFldUpldHndlr(CBSI_VoterIDAttachment,id)" id="VOTER" class="rounded" alt="Cinque Terre" width="20" height="20"> Upload Voter ID </div>-->
<!-- <input type="file" name="datafile"  class="APP"  onchange="DocFldUpldHndlr(CBSI_VoterIDAttachment)">-->
<table><tr>
<td>
<div id="CBSI_VOTERATTACHMENTIIUPLOAD"  class="file-field UPLODD">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_VOTERATTACHMENTII,'CBSI_VOTERATTACHMENTII','Voter ID','voterviewII')" class="CBSI_VOTERATTACHMENTII"  >
    </a> 
<input type="text" id="CBSI_VOTERATTACHMENTII" data-val="Voter ID" hidden="hidden" data-FetchValidateArea="voter" data-FetchValidate="CBSI_VOTERATTACHMENTII" data-Validate="CBSI_VOTERATTACHMENTII" data-field="CBSI_VOTERUPLOADIIVERIFY"  name="CBSI_VOTERATTACHMENTII" class="form-control voter File CBSIDBfields">
<span class="name1"> Upload Voter's ID Backside</span>
 </div>
</td>
</tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter voterviewII">
<div class="md-form">
<div class="CBSI_VOTERATTACHMENTII" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(CBSI_VOTERATTACHMENTII);" title="UPLOAD  "  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('CBSI_VOTERATTACHMENTII')" alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="CBSI_VOTERUPLOADIIVERIFY" hidden="hidden" name="CBSI_VOTERUPLOADIIVERIFY" class="form-control CBSIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'CBSI_VOTERATTACHMENTII','CBSI_VOTERUPLOADIIVERIFY','KYC OCR');" data-field="CBSI_CUSFISNAM|CBSI_CUSLSTNAM|CBSI_CUSTYPE|CBSI_CUSID|VoterID|CBSI_VOTERID" data-Validatearia="CBSI_VOTERUPLOADIIVERIFY" data-validate="voter" class="btn CBSI_VOTERATTACHMENTII waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div> 
<!-- Second Upload End-->

 
</div>
</div>
</br>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('CBSI_VOTERIDVEIRFY','CBSI_VOTERID','voter','CBSI_VOTERATTACHMENTII','CBSI_CUSID',' Upload Voters ID','CBSI_VOTERUPLOADVERIFY','Voter ID')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20">   
</div>  
</br>  
<div class="row FormRows FormRowsNS m-b-0 AADHAR" style="display:none">
 <div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="CBSI_AADHARTYPE" data-FetchValidateArea="AADHAAR" name="CBSI_AADHARTYPE" disabled class="form-control CBSIDBfields DSVLBL" value="">
<label for="CBSI_AADHARTYPE" class="">Aadhar Verification Type</label>
</div>
</div>

<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="CBSI_AADHARPROOF" data-FetchValidateArea="AADHARPROOF" name="CBSI_AADHARPROOF" disabled class="form-control CBSIDBfields DSVLBL" value="">
<label for="CBSI_AADHARPROOF" class="">Proof type</label>
</div>
</div>



 <div class="col-md-12 AadhaarZip" style="display:none">
 <div class="md-form"> 
<input type="text" id="CBSI_SHARECODE" data-FetchValidateArea1="AADHAAR" name="CBSI_SHARECODE" disabled class="form-control CBSIDBfields DSVLBL" value="">
<label for="CBSI_SHARECODE" class="">Share Code</label>
</div>
</div>
 <div class="col-md-12 AadhaarZip" style="display:none">
 <div class="md-form"> 
<input type="text" id="CBSI_AADHARMOB" data-FetchValidateArea2="AADHAAR" name="CBSI_AADHARMOB" disabled class="form-control CBSIDBfields DSVLBL" value="">
<label for="CBSI_AADHARMOB" class="">Aadhar Linked MOB</label>
</div>
</div>
<div class="col-md-12">
<div class="row AVER" >
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="CBSI_AADHAR" maxlength="12" value=""  data-FetchValidateArea="AADHAR" data-FetchValidate="CBSI_AADHAR" data-link="CBSI_AADHAR|CBSI_AADHARVERIFY|AADHAR1|AADHARupload|AADHARview|CBSI_AADHARATTACHMENT"   name="CBSI_AADHAR" class="CBSIDBfields IsNumberFields IsAadharFields form-control validate">
<label for="CBSI_AADHAR" class="">Aadhar *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="CBSI_AADHARVERIFY" hidden="hidden" name="CBSI_AADHARVERIFY" class="form-control CBSIDBfields">
<button type="button" data-Validatearia="CBSI_AADHARVERIFY" onclick="CheckKYCDetl(this,'CBSI_AADHARATTACHMENT','CBSI_AADHARVERIFY','AADHAAR XML VERIFY');" data-field="CBSI_DOB||CBSI_CUSTYPE|CBSI_CUSID|" data-validate="AADHAR" class="btn  waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>

</div>
</div>  
</div> 

<div class="row AUPL">
                                    <!--First column-->
<div class="col-md-2  Formcol-mdLR Aadharupload ">
<div class="md-form">
<table>
<tr>
<td>
<div id="CBSI_AADHARATTACHMENTUPLOAD" class="file-field AUPLD AUPLDXML">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('Aadhar',this)"></i><!--style="display:none"-->
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_AADHARATTACHMENT,'CBSI_AADHARATTACHMENT','Aadhar','AADHARview');" class="CBSI_AADHARATTACHMENT"  >
    </a>
      <input type="text" id="CBSI_AADHARATTACHMENT" hidden="hidden" data-Validate="CBSI_AADHARATTACHMENT" name="CBSI_AADHARATTACHMENT"  data-field="CBSI_AADHARUPLOADVERIFY"  class="form-control File AADHARMndtry CBSIDBfields">  	  
<span class="name1"> Upload Aadhar's ID Front side</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter AADHARview AUPLDXML">
<div class="md-form">
<div class="CBSI_AADHARATTACHMENT" style="display:none" > 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD"  onclick="ReuploadFile(CBSI_AADHARATTACHMENT);" class="rounded ReUpld" alt="Cinque Terre" width="20" height="20"> 
<img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW"  class="rounded AadharViewImg" onclick="GrdDocDwnld('CBSI_AADHARATTACHMENT')" alt="Cinque Terre" width="35" height="25"> 

<img src="ThemeproLO/Common/Images/Eyeview.png" style="display:none"  title="Marking Aadhar Image" class="rounded AadharMskImg" onclick="DirImgDown('CBSI_MSKAADHARATTACHMENT')" alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="CBSI_AADHARUPLOADVERIFY" hidden="hidden" name="CBSI_AADHARUPLOADVERIFY" class="form-control CBSIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'CBSI_AADHARATTACHMENT','CBSI_AADHARUPLOADVERIFY','KYC OCR');" data-field="CBSI_SHARECODE|CBSI_AADHARMOB|CBSI_CUSTYPE|CBSI_CUSID|Aadhar|CBSI_AADHAR|CBSI_AADHARTYPE|CBSI_MSKAADHARATTACHMENT" data-Validatearia="CBSI_AADHARUPLOADVERIFY" data-validate="aadhar" class="btn CBSI_AADHARATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>  




<div class="col-md-2  Formcol-mdLR Aadharupload AUPLDXMLII">
<div class="md-form">
<table>
<tr>
<td>
<div id="CBSI_AADHARATTACHMENTIIUPLOAD" class="file-field AUPLD">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('Aadhar',this)"></i><!--style="display:none"-->
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_AADHARATTACHMENTII,'CBSI_AADHARATTACHMENTII','Aadhar','AADHARviewII');" class="CBSI_AADHARATTACHMENTII"  >
    </a>
      <input type="text" id="CBSI_AADHARATTACHMENTII" hidden="hidden" data-Validate="CBSI_AADHARATTACHMENTII" name="CBSI_AADHARATTACHMENTII"  data-field="CBSI_AADHARUPLOADVERIFYII"  class="form-control File AADHARMndtry CBSIDBfields">  	  
<span class="name1"> Upload Aadhar's ID Back side</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter AADHARviewII AUPLDXMLII">
<div class="md-form">
<div class="CBSI_AADHARATTACHMENTII" style="display:none" > 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD"  onclick="ReuploadFile(CBSI_AADHARATTACHMENTII);" class="rounded ReUpld" alt="Cinque Terre" width="20" height="20"> 
<img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW"  class="rounded AadharViewImgII" onclick="GrdDocDwnld('CBSI_AADHARATTACHMENTII')" alt="Cinque Terre" width="35" height="25"> 

<img src="ThemeproLO/Common/Images/Eyeview.png" style="display:none"  title="Marking Aadhar Image" class="rounded AadharMskImgII" onclick="DirImgDown('CBSI_MSKAADHARATTACHMENTII')" alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="CBSI_AADHARUPLOADVERIFYII" hidden="hidden" name="CBSI_AADHARUPLOADVERIFYII" class="form-control CBSIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'CBSI_AADHARATTACHMENTII','CBSI_AADHARUPLOADVERIFYII','KYC OCR');" data-field="CBSI_SHARECODE|CBSI_AADHARMOB|CBSI_CUSTYPE|CBSI_CUSID|Aadhar|CBSI_AADHAR|CBSI_AADHARTYPE|CBSI_MSKAADHARATTACHMENTII" data-Validatearia="CBSI_AADHARUPLOADVERIFYII" data-validate="aadhar" class="btn CBSI_AADHARATTACHMENTII waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>

<input type="text" id="CBSI_MSKAADHARATTACHMENTII" hidden="hidden" data-Validate="CBSI_MSKAADHARATTACHMENTII" name="CBSI_MSKAADHARATTACHMENTII"  data-field=""  class="form-control File AADHARMndtry CBSIDBfields"> 

<input type="text" id="CBSI_MSKAADHARATTACHMENT" hidden="hidden" data-Validate="CBSI_MSKAADHARATTACHMENT" name="CBSI_MSKAADHARATTACHMENT"  data-field=""  class="form-control File AADHARMndtry CBSIDBfields"> 
</div>
</br>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('CBSI_AADHARVERIFY','CBSI_AADHAR','AADHAR','CBSI_AADHARATTACHMENT','CBSI_CUSID','Upload Aadhar ID','CBSI_AADHARUPLOADVERIFY','Aadhar')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20">   
</div> 
</div> 

   
</br>       
 <div class="row FormRows FormRowsNS m-b-0 dl" style="display:none">
 <div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="CBSI_DRIVNGTYPE" data-FetchValidateArea="DRVGLINCSE" name="CBSI_DRIVNGTYPE" disabled class="form-control CBSIDBfields DSVLBL" value="">
<label for="CBSI_DRIVNGTYPE" class="">Driving License Verification Type</label>
</div>
</div>

<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="CBSI_DLPROOF" data-FetchValidateArea="DLPROOF" name="CBSI_DLPROOF" disabled class="form-control CBSIDBfields DSVLBL" value="">
<label for="CBSI_DLPROOF" class="">Proof type</label>
</div>
</div>



<div class="col-md-12">
<div class="row DVER" >                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="CBSI_DRIVLICNS"  data-FetchValidateArea="dl" data-FetchValidate="CBSI_DRIVLICNS" data-link="CBSI_DRIVLICNS|CBSI_DRIVLICNSVERIFY|dl1|dlupload|dlview|CBSI_DRIVINGLICATTACHMENT"  onblur="CHKSAMEKYC('CBSI_DRIVLICNS','DL');" maxlength="20" name="CBSI_DRIVLICNS" class="CBSIDBfields datalink form-control validate">
<label for="CBSI_DRIVLICNS" class="">Driving License *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="CBSI_DRIVLICNSVERIFY" hidden="hidden" name="CBSI_DRIVLICNSVERIFY" class="form-control CBSIDBfields">
<!--<button type="button" data-Validatearia="CBSI_DRIVLICNSVERIFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('CBSI_DRIVLICNS','dl','CBSI_DRIVLICNSVERIFY','','','','CBSI_DOB','CBSI_CUSID');SavePersInfo()" data-Validatearia="CBSI_DRIVLICNSVERIFY" data-validate="dl"  class="btn  waves-effect CBSI_DRIVLICNS btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button" data-Validatearia="CBSI_DRIVLICNSVERIFY" onclick="CheckKYCDetl(this,'CBSI_DRIVLICNS','CBSI_DRIVLICNSVERIFY','DRIVING LICENSE');FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');" data-field="CBSI_DOB||CBSI_CUSTYPE|CBSI_CUSID|dl|dlupload|dlview|CBSI_DRIVINGLICATTACHMENT" data-Validatearia="CBSI_DRIVLICNSVERIFY" data-validate="dl"  class="btn  waves-effect CBSI_DRIVLICNS btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
</div>
</div>  
</div>
<div class="row dl" style="display:none" >
                                    <!--First column-->
<!-- First Upload Start-->
<div class="col-md-2  Formcol-mdLR dlupload DUPL">
<div class="md-form">
<table>
<tr>
<td>
<div id="CBSI_DRIVINGLICATTACHMENTUPLOAD"  class="file-field DUPLD">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_DRIVINGLICATTACHMENT,'CBSI_DRIVINGLICATTACHMENT','Driving License','dlview')" class="CBSI_DRIVINGLICATTACHMENT" >
    </a>
    <input type="text" id="CBSI_DRIVINGLICATTACHMENT" data-FetchValidateArea="dl" data-FetchValidate="CBSI_DRIVINGLICATTACHMENT" data-val="Driving License ID" hidden="hidden" data-Validate="CBSI_DRIVINGLICATTACHMENT" data-field="CBSI_DLUPLOADVERIFY"   name="CBSI_DRIVINGLICATTACHMENT" class="form-control dl File CBSIDBfields">
    
   <span class="name1"> Upload DL</span>
  </div>
</td></tr>
</table>
</div>    
</div>  

<div class="col-md-4 Formcol-mdLR TxtCenter dlview">
<div class="md-form">
<div class="CBSI_DRIVINGLICATTACHMENT" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD" onclick="ReuploadFile(CBSI_DRIVINGLICATTACHMENT);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW" onclick="GrdDocDwnld('CBSI_DRIVINGLICATTACHMENT')" class="rounded " alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="CBSI_DLUPLOADVERIFY" hidden="hidden" name="CBSI_DLUPLOADVERIFY" class="form-control CBSIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'CBSI_DRIVINGLICATTACHMENT','CBSI_DLUPLOADVERIFY','KYC OCR');" data-field="CBSI_CUSFISNAM|CBSI_CUSLSTNAM|CBSI_CUSTYPE|CBSI_CUSID|DL|CBSI_DRIVLICNS" data-Validatearia="CBSI_DLUPLOADVERIFY" data-validate="UpdDL" class="btn CBSI_DRIVINGLICATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>  
<!-- First Upload End-->
<!-- Second Upload Start-->
<div class="col-md-2  Formcol-mdLR dlupload DUPL" style="display:none">
<div class="md-form">
<table>
<tr>
<td>
<div id="CBSI_DRIVINGLICATTACHMENTIIUPLOAD"  class="file-field DUPLD" style="display:none">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_DRIVINGLICATTACHMENTII,'CBSI_DRIVINGLICATTACHMENTII','Driving License','dlviewII')" class="CBSI_DRIVINGLICATTACHMENTII" >
    </a>
    <input type="text" id="CBSI_DRIVINGLICATTACHMENTII" data-FetchValidateArea="dl" data-FetchValidate="CBSI_DRIVINGLICATTACHMENTII" data-val="Driving License ID" hidden="hidden" data-Validate="CBSI_DRIVINGLICATTACHMENTII" data-field="CBSI_DLUPLOADIIVERIFY"   name="CBSI_DRIVINGLICATTACHMENTII" class="form-control dl File CBSIDBfields">
    
   <span class="name1">Upload DL Backside</span>
  </div>
</td></tr>
</table>
</div>    
</div>  

<div class="col-md-4 Formcol-mdLR TxtCenter dlviewII" style="display:none">
<div class="md-form">
<div class="CBSI_DRIVINGLICATTACHMENTII" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD" onclick="ReuploadFile(CBSI_DRIVINGLICATTACHMENTII);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW" onclick="GrdDocDwnld('CBSI_DRIVINGLICATTACHMENTII')" class="rounded " alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="CBSI_DLUPLOADIIVERIFY" hidden="hidden" name="CBSI_DLUPLOADIIVERIFY" class="form-control CBSIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'CBSI_DRIVINGLICATTACHMENTII','CBSI_DLUPLOADIIVERIFY','KYC OCR');" data-field="CBSI_CUSFISNAM|CBSI_CUSLSTNAM|CBSI_CUSTYPE|CBSI_CUSID|DL|CBSI_DRIVLICNS" data-Validatearia="CBSI_DLUPLOADIIVERIFY" data-validate="UpdDL" class="btn CBSI_DRIVINGLICATTACHMENTII waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>
<!-- Second Upload End-->

</div> 
</br>

<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('CBSI_DRIVLICNSVERIFY','CBSI_DRIVLICNS','dl','CBSI_DRIVINGLICATTACHMENT','CBSI_CUSID','Upload Driving License ID','CBSI_DLUPLOADVERIFY','Driving License')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 
</div>        
</div>  
</br>    
<div class="row FormRows FormRowsNS m-b-0 passport" style="display:none">
<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="CBSI_PASPRTTYPE" data-FetchValidateArea="PASSPRT" name="CBSI_PASPRTTYPE" disabled class="form-control CBSIDBfields DSVLBL" value="">
<label for="CBSI_PASPRTTYPE" class="">Passport Verification Type</label>
</div>
</div>


<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="CBSI_PASSPORTPROOF" data-FetchValidateArea="PASSPORTPROOF" name="CBSI_PASSPORTPROOF" disabled class="form-control CBSIDBfields DSVLBL" value="">
<label for="CBSI_PASSPORTPROOF" class="">Proof type</label>
</div>
</div>



<div class="col-md-12">
  <div class="row PVER" >                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="CBSI_PASSPORT" data-FetchValidateArea="passport" data-FetchValidate="CBSI_PASSPORT"  maxlength="24" data-link="CBSI_PASSPORT|CBSI_PASSPORTVERIFY|passport1|passportupload|passportview|CBSI_PASSPORTATTACHMENT" name="CBSI_PASSPORT" onblur="CHKSAMEKYC('CBSI_PASSPORT','PASSPORT');"  class="CBSIDBfields datalink form-control validate">
<label for="CBSI_PASSPORT" class="">File No. - Passport No. *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="CBSI_PASSPORTVERIFY" hidden="hidden" name="CBSI_PASSPORTVERIFY" class="form-control CBSIDBfields">
<!--<button type="button"  data-Validatearia="CBSI_PASSPORTVERIFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('CBSI_PASSPORT','passport','CBSI_PASSPORTVERIFY','CBSI_CUSFISNAM','CBSI_CUSLSTNAM','','CBSI_DOB','CBSI_CUSID');SavePersInfo()"  data-Validatearia="CBSI_PASSPORTVERIFY"  data-validate="passport"  class="btn CBSI_PASSPORT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button"  data-Validatearia="CBSI_PASSPORTVERIFY" onclick="CheckKYCDetl(this,'CBSI_PASSPORT','CBSI_PASSPORTVERIFY','PASSPORT');FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');" data-field="CBSI_DOB||CBSI_CUSTYPE|CBSI_CUSID|passport|passportupload|passportview|CBSI_PASSPORTATTACHMENT"  data-Validatearia="CBSI_PASSPORTVERIFY"  data-validate="passport"  class="btn CBSI_PASSPORT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
</div>
</div>  
</div>
<div class="row passport PUPL" style="display:none" >
                                    <!--First column-->
<!-- First Upload Start-->									
<div class="col-md-2  Formcol-mdLR passportupload">
<div class="md-form">
<table>
<tr>
<td>
<div id="CBSI_PASSPORTATTACHMENTUPLOAD" class="file-field PUPLD">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_PASSPORTATTACHMENT,'CBSI_PASSPORTATTACHMENT','Passport','passportview')" class="CBSI_PASSPORTATTACHMENT"  >
    </a>
  <input type="text" id="CBSI_PASSPORTATTACHMENT" data-val="Passport" hidden="hidden" data-Validate="CBSI_PASSPORTATTACHMENT" data-field="CBSI_PASSUPLOADVERIFY" name="CBSI_PASSPORTATTACHMENT" class="form-control passport File CBSIDBfields">
   <span class="name1"> Upload Passport Frontside</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter passportview">
<div class="md-form">
<div class="CBSI_PASSPORTATTACHMENT" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD " onclick="ReuploadFile(CBSI_PASSPORTATTACHMENT);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW"  onclick="GrdDocDwnld('CBSI_PASSPORTATTACHMENT')" class="rounded " alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="CBSI_PASSUPLOADVERIFY" hidden="hidden" name="CBSI_PASSUPLOADVERIFY" class="form-control CBSIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'CBSI_PASSPORTATTACHMENT','CBSI_PASSUPLOADVERIFY','KYC OCR');" data-field="CBSI_CUSFISNAM|CBSI_CUSLSTNAM|CBSI_CUSTYPE|CBSI_CUSID|PASSPORT|CBSI_PASSPORT" data-Validatearia="CBSI_PASSUPLOADVERIFY" data-validate="UpdPassport" class="btn CBSI_PASSPORTATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>
<!-- First Upload End-->
<!-- Second Upload Start-->
<div class="col-md-2  Formcol-mdLR passportupload">
<div class="md-form">
<table>
<tr>
<td>
<div id="CBSI_PASSPORTATTACHMENTIIUPLOAD" class="file-field PUPLD">
  <a class="">
  <i class="fa fa-plus imgAdd" aria-hidden=""></i>
  <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_PASSPORTATTACHMENTII,'CBSI_PASSPORTATTACHMENTII','Passport','passportviewII')" class="CBSI_PASSPORTATTACHMENTII"  >
 </a>
 <input type="text" id="CBSI_PASSPORTATTACHMENTII" data-val="Passport" hidden="hidden" data-Validate="CBSI_PASSPORTATTACHMENTII" data-field="CBSI_PASSUPLOADIIVERIFY" name="CBSI_PASSPORTATTACHMENTII" class="form-control passport File CBSIDBfields">
 <span class="name1">Upload Passport Backside</span>
</div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter passportviewII">
<div class="md-form">
<div class="CBSI_PASSPORTATTACHMENTII" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD " onclick="ReuploadFile(CBSI_PASSPORTATTACHMENTII);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW"  onclick="GrdDocDwnld('CBSI_PASSPORTATTACHMENTII')" class="rounded " alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="CBSI_PASSUPLOADIIVERIFY" hidden="hidden" name="CBSI_PASSUPLOADIIVERIFY" class="form-control CBSIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'CBSI_PASSPORTATTACHMENTII','CBSI_PASSUPLOADIIVERIFY','KYC OCR');" data-field="CBSI_CUSFISNAM|CBSI_CUSLSTNAM|CBSI_CUSTYPE|CBSI_CUSID|PASSPORT|CBSI_PASSPORT" data-Validatearia="CBSI_PASSUPLOADIIVERIFY" data-validate="UpdPassport" class="btn CBSI_PASSPORTATTACHMENTII waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>
  <!-- Second Upload End-->
</div> 
</br>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('CBSI_PASSPORTVERIFY','CBSI_PASSPORT','passport','CBSI_PASSPORTATTACHMENT','CBSI_CUSID','Upload Passport','CBSI_PASSUPLOADVERIFY','Passport')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 
</div>        
</div>  
<br>
<div class="row FormRows FormRowsNS m-b-0 Utility" style="display:none">
<div class="col-md-12">
<div class="md-form">
<input type="text" id="CBSI_UBVERIFYTYPE" data-FetchValidateArea="VERIFYTYPE" name="CBSI_UBVERIFYTYPE" disabled class="form-control CBSIDBfields DSVLBL" value="">
<label for="CBSI_UBVERIFYTYPE" class="">Utility Bill Verification Type</label>
</div>
</div>


<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="CBSI_UTILITYPROOF" data-FetchValidateArea="UTILITYPROOF" name="CBSI_UTILITYPROOF" disabled class="form-control CBSIDBfields DSVLBL" value="">
<label for="CBSI_UTILITYPROOF" class="">Proof type</label>
</div>
</div>


<div class="col-md-12">
<div class="row" >                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="CBSI_SERVICEPRO" data-FetchValidateArea="PROVIDER" name="CBSI_SERVICEPRO" hidden="hidden"  class="form-control CBSIDBfields" value="">
<input type="text" id="CBSI_UBSTATE" data-FetchValidateArea="STATE" name="CBSI_UBSTATE" hidden="hidden"  class="form-control CBSIDBfields" value="">
<input type="text" id="CBSI_LLCITY" data-FetchValidateArea="CITY" name="CBSI_LLCITY" hidden="hidden"  class="form-control CBSIDBfields" value="">
<input type="text" id="CBSI_UTILITY"  data-FetchValidateArea="Utility" data-FetchValidate="CBSI_UTILITY" data-link="CBSI_UTILITY|CBSI_UTILITYVERIFY|Utility1|Utilityupload|Utilityview|CBSI_UTILITYATTACHMENT"  onblur="CHKSAMEKYC('CBSI_UTILITY','Utility');" maxlength="20" name="CBSI_UTILITY" class="CBSIDBfields datalink form-control validate">
<label for="CBSI_UTILITY" class="UtilityLable">Utility Bill *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="CBSI_UTILITYVERIFY" hidden="hidden" name="CBSI_UTILITYVERIFY" class="form-control CBSIDBfields">
<!--<button type="button" data-Validatearia="CBSI_DRIVLICNSVERIFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('CBSI_DRIVLICNS','dl','CBSI_DRIVLICNSVERIFY','','','','CBSI_DOB','CBSI_CUSID');SavePersInfo()" data-Validatearia="CBSI_DRIVLICNSVERIFY" data-validate="dl"  class="btn  waves-effect CBSI_DRIVLICNS btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button" data-Validatearia="CBSI_UTILITYVERIFY" data-field="CBSI_UBVERIFYTYPE|CBSI_SERVICEPRO|CBSI_CUSTYPE|CBSI_CUSID|CBSI_LLCITY" onclick="CheckKYCDetl(this,'CBSI_UTILITY','CBSI_UTILITYVERIFY','ELECTRICITY BILL');" data-field="CBSI_DOB||CBSI_CUSTYPE|CBSI_CUSID" data-Validatearia="CBSI_UTILITYVERIFY" data-validate="Utility"  class="btn  waves-effect CBSI_UTILITY btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
<!--<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('CBSI_UTILITYVERIFY','CBSI_UTILITY','Utility','CBSI_UTILITYATTACHMENT','CBSI_CUSID','Upload Driving License ID')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> -->
</br>
</div>
</div>  
</div>
<div class="row Utility Utility1" style="display:none" >
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR Utilityupload">
<div class="md-form">
<table>
<tr>
<td>
<div id="CBSI_UTILITYATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_UTILITYATTACHMENT,'CBSI_UTILITYATTACHMENT','Driving License','Utilityview')" class="CBSI_UTILITYATTACHMENT" >
    </a>
    <input type="text" id="CBSI_UTILITYATTACHMENT" data-val="Utility Bill Authentication" hidden="hidden" data-Validate="CBSI_UTILITYATTACHMENT" data-field="CBSI_UTILITYUPLOADVERIFY"  name="CBSI_UTILITYATTACHMENT" class="form-control Utility File CBSIDBfields">
   <span class="name1"> Upload Utility Bill</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter Utilityview">
<div class="md-form">
<div class="CBSI_UTILITYATTACHMENT" style="display:none">
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD" onclick="ReuploadFile(CBSI_UTILITYATTACHMENT);" class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
<img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW" onclick="GrdDocDwnld('CBSI_UTILITYATTACHMENT')" class="rounded " alt="Cinque Terre" width="35" height="25"> 
</div>
</div>
</div>  
</div>
</br> 
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('CBSI_UTILITYVERIFY','CBSI_UTILITY','Utility','CBSI_UTILITYATTACHMENT','CBSI_CUSID','Upload Utility Bill','CBSI_UTILITYUPLOADVERIFY','Utility Bills')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 

</div>        
  </div>   
 </div>        
  </br>                                 
 <div class="row FormRows m-b-0">
                                    <!--First column-->
<div class="col-md-12  Formcol-mdLR">

<div class="TxtCenter">
<a type="button" class="Btxt4 AddKYC" data-toggle="modal"  data-target="#KYCDocModal" href="#">+ Another KYC Documents</a>
</div>  
</br>
</div>  
</div>                                                            
  </div>                              
                                <!--Main First row-->
                            </div>
                             </div>
                             
<a type="button" id="Popup1" class="btn btn-floating btn-large red KrazaPopup" style="display:none"  data-toggle="modal" data-target="#KarzaPopup">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade" id="KarzaPopup" tabindex="-1" role="dialog" aria-labelledby="KarzaPopupLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1250px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10"></div> 
   <a href="#"><img id="KarzaPopupClose" class="close KarzaPopup" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form> 
        <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7,'KARZAGRD');" id="BTNKARZAGRD" name="BTNKARZAGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table2">
             </table>
           </div>
        </div>
         </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="KarzaPopup" data-aria="CBSI_CUSFISNAM|CBSI_CUSLSTNAM|CBSI_FATHRNAM|CBSI_DOB|CADI_ADDRLINI|CADI_ADDRLINII|CBSI_GENTER|CBSI_VOTERIDDOCCHK|CBSI_AADHARDOCCHK|CBSI_DLDOCCHK|CBSI_PASSPORTDOCCHK|CBSI_PANDOCCHK" class="btn btn-yel FCBDDBfields Btxt2 KarzaSmt">Submit</button>
      </div>
    </div>
  </div>
  </div>
<a type="button" id="Popup2" class="btn btn-floating btn-large red GSTKrazaPopup" style="display:none"  data-toggle="modal" data-target="#GSTKarzaPopup">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade" id="GSTKarzaPopup" tabindex="-1" role="dialog" aria-labelledby="GSTKarzaPopupLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1250px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10"></div> 
   <a href="#"><img id="GSTKarzaPopupClose" class="close KarzaPopup" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form> 
        <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SNONIGSTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','PANKARZAGRD');" id="BTNPANKARZAGRD" name="BTNPANKARZAGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table3">
             </table>
           </div>
        </div>
         </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="GSTKarzaPopup" data-aria="CBSI_GSTNUM" class="btn btn-yel FCBDDBfields Btxt2 GstKarzaSmt">Submit</button>
      </div>
    </div>
  </div>
  </div>
  
 
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>  

 <table style="display:none" id="GridTable3">
   <thead>
<th>GSTID</th>
<th>GSTACTION</th>
<th>CUSID</th>
<!--<th>PRCSID</th>
<th>UPFD_ACTIVITYID</th>
<th>UPFD_DTCREATED</th>
<th>UPFD_CREATEDBY</th>
<th>UPFD_DTMODIFIED</th>
<th>UPFD_MODIFIEDBY</th>-->
   </thead> 
    </table>
                                  <!--   </div>
                                </div>   -->