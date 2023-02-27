


                <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="card card-cascade narrower FormCardContent">

</br>
                            <!--Admin panel-->
                            <div class="admin-panel">

<div class="">                                <!--Main First row-->
                                <div class="row FormRows m-b-0">
                                    <!--First column-->
                                    <div class="col-md-12 Formcol-mdLR Btxt1 ">
Application Info
 </div>
 </div>
                                
                                <div class="row FormRows m-b-0">

                                    <!--First column-->
<div class="col-md-3  Formcol-mdLR">
<div class="Ntxt6" >Customer Type</div>
<div class="Btxt5 CBSIAPPINFO LSbrd" id="APFI_CUSTYPE" name="APFI_CUSTYPE"></div>
</div>  

<div class="col-md-3 Formcol-mdLR">
<div class="Ntxt6" >Branch</div>
<div class="Btxt5 CBSIAPPINFO LSbrd" id="APFI_BRANCH" name="APFI_BRANCH" ></div>
</div>  

<div class="col-md-3 Formcol-mdLR">
<div class="Ntxt6"  >Loan Type</div>
<div class="Btxt5 CBSIAPPINFO LSbrd" id="APFI_LONTYPE" name="APFI_LONTYPE"></div>
</div>  

<div class="col-md-3 Formcol-mdLR">
<div class="Ntxt6 "  >Sub Loan Type</div>
<div class="Btxt5 CBSIAPPINFO" id="APFI_SUBLONTYPE" name="APFI_SUBLONTYPE"></div>
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
<input type="text" id="KARZASTATUS" name="KARZASTATUS" hidden="hidden" class="form-control DataNormal" value="">
<div class="">

<div class="row FormRows m-b-0">
  
<div class="col-md-8  Formcol-mdLR">
  <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields COBIMndtry" onchange="CheckRelatOther();" id="COBI_RELASAPPL" name="COBI_RELASAPPL">
       <option value="" selected>--Select--</option>
       <option value="Mother">Mother</option>
       <option value="Father">Father</option>
       <option value="Brother">Brother</option>
       <option value="Spouse">Spouse</option>
       <option value="Sister">Sister</option>
       <option value="Brother In-Law">Brother In-Law</option>
       <option value="Sister In-Law">Sister In-Law</option>
       <option value="Neice">Neice</option>
       <option value="Nephew">Nephew</option>
       <option value="Uncle">Uncle</option>
       <option value="Aunty">Aunty</option>
       <option value="Other">Other</option>
     </select>
 <label class="mdb-main-label BTxt9">Relationship with Applicant *</label>
</div>  
</div>
</div>
<div class="Relationother">
<div class="row FormRows">
<div class="col-md-8 ">
<div class="md-form">
<input type="text" id="COBI_OTHERRELATION" maxlength="25" name="COBI_OTHERRELATION" class="COBIDBfields IsAlphaFields form-control validate">
<label for="COBI_OTHERRELATION" class="">Other*</label>
</div> 
</div> 
</div>

</div>
<div class="">
<input type="text" id="COBI_HIDPROFTYP" name="COBI_HIDPROFTYP" hidden="hidden" class="form-control DataNormal COBIDBfields" value="">
 <div class="row FormRows m-b-0 KYCInfo">

                                    <!--First column-->
<div class="col-md-12 Formcol-mdLR Btxt1 OKYCD">
Fill KYC Details
 </div>
 </div>

<div>

 <div class="row FormRows FormRowsNS m-b-0">
 <div class="col-md-12">
   <div class="row">           <!--First column-->
   
              	<div class="col-md-12">
                 <div class="md-form">
                    <div id="" class="select-radio PANTYPE "> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input COBIDBfields PANVTyp" onclick="Chkdirect()" value="OCR" id="Panocr" name="COBI_PANTYPE">
                          <label class="custom-control-label" for="Panocr">OCR</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input COBIDBfields PANVTyp" onclick="Chkdirect()" value="Direct" id="Pandirect" name="COBI_PANTYPE">
                           <label class="custom-control-label" for="Pandirect">Direct</label>
                       </div>
 
                   </div>
                   <label class="mdb-main-label BTxt9">Pan Verification Type<span class="MndtryAstr">*</span></label>      
               </div>
           </div>
		<div class="col-md-8 KYCPROOF"style="display:none">
		<div class="md-form">
                     <div class="" id="">
                        <select class="mdb-select md-form colorful-select dropdown-primary COBIDBfields" multiple id="COBI_KYCPROOFTYP" onchange="GETPROOFTYP();" name="COBI_KYCPROOFTYP">
                         <option value="" disabled>Select</option>
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
<div class="md-form">
<input type="text" id="COBI_PAN" name="COBI_PAN" data-FetchValidateArea="pan" onblur="InactivePanCheck()" onchange="DupPanval('COBI_PRCSID','COBI_PAN','COBI_CONSTITUTION','COBI_CUSID');" data-FetchValidate="COBI_PAN" maxlength="10" data-link="COBI_PAN|COBI_PANVERIFY|pan|panupload|panview|COBI_PANATTACHMENT|Upload PAN ID|COBI_DEDUPEVERIFY" data-validate="COBI_CUSTYPE|COBI_CONSTITUTION" class=" COBIDBfields datalink NoSpecialChar IsPanFields form-control validate" onblur="DupPanval('COBI_PRCSID','COBI_PAN','COBI_CONSTITUTION','COBI_CUSID');CheckPanORNot();">
<label for="COBI_PAN" class="">PAN*</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter  TYP" style="display:none">
<div class="md-form">
<input type="text" id="COBI_PANVERIFY" hidden="hidden" name="COBI_PANVERIFY" class="form-control COBIDBfields">
<button type="button" data-Validatearia="COBI_PANVERIFY" onclick="CheckKYCDetl(this,'COBI_PAN','COBI_PANVERIFY','PAN');FncallDocChkLst(this,'Table3',{spname:'LSW_SNONIGSTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#COBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','PANKARZAGRD');" data-field="COBI_CUSFISNAM|COBI_CUSLSTNAM|COBI_CUSTYPE|COBI_CUSID|pan|panupload|panview|COBI_PANATTACHMENT|COBI_CONSTITUTION"  data-validate="pan"   class="btn COBI_PAN waves-effect btn-yelInplain btn-sm BTNVerify CHK INTDSBV">Verify</button>
</div>
</div>  
</div>
<div class="row pan pan1 UPLD" style="display:none">
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR panupload">

<div class="md-form">
<table>
 <tr>
 <td>
 <!-- <div id="COBI_PANATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('PAN',this)"></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(COBI_PANATTACHMENT,'COBI_PANATTACHMENT','PAN','panview')" class="COBI_PANATTACHMENT" style="display:none" >
    </a>
    <input type="text" id="COBI_PANATTACHMENT" data-val="PAN ID" hidden="hidden" data-Validate="COBI_PANATTACHMENT"  data-field="COBI_PANUPLOADVERIFY" name="COBI_PANATTACHMENT" class="form-control File pan COBIDBfields">  
 <span class="name1">Upload PAN ID</span>
  </div>-->

  <div id="COBI_PANATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('PAN',this)"></i>
      <input type="file"  name="datafile"  onchange="DocFldUpldHndlr(COBI_PANATTACHMENT,'COBI_PANATTACHMENT','PAN','panview')" class="COBI_PANATTACHMENT">
    </a>
    <input type="text" id="COBI_PANATTACHMENT" data-val="PAN ID" hidden="hidden" data-Validate="COBI_PANATTACHMENT"  data-field="COBI_PANUPLOADVERIFY" name="COBI_PANATTACHMENT" class="form-control pan File COBIDBfields">
    <span class="name1">Upload PAN ID</span>
  </div> 


  
  </td>
</tr>
</table>
</div>    
</div>  
<div class="col-md-4 panview">
<div class="md-form Formcol-mdLR TxtCenter">
<div class="COBI_PANATTACHMENT" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded ReUpld" title="UPLOAD" onclick="ReuploadFile(COBI_PANATTACHMENT);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="rounded " onclick="GrdDocDwnld('COBI_PANATTACHMENT')"  alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="COBI_PANUPLOADVERIFY" hidden="hidden" name="COBI_PANUPLOADVERIFY" class="form-control COBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'COBI_PANATTACHMENT','COBI_PANUPLOADVERIFY','KYC OCR');" data-field="COBI_CUSFISNAM|COBI_CUSLSTNAM|COBI_CUSTYPE|COBI_CUSID|PAN|COBI_PAN|COBI_CONSTITUTION|COBI_FATHRNAM" data-Validatearia="COBI_PANUPLOADVERIFY" data-validate="pan" class="btn COBI_PANATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>  
</div> 
<div class="row DPAN">
   <div class="col">
     <div class="md-form">
          <div class="custom-control custom-radio custom-control-inline">
 			 <input type="checkbox" class="custom-control-input COBIDBfields" onclick="checkPAN();"  id="COBI_PANNAVAIL" name="COBI_PANNAVAIL">
  			 <label class="custom-control-label" for="COBI_PANNAVAIL">PAN Not Available</label>
		  </div>
		</div>
    </div>
</div>
<div class="row FORM" style="display:none">
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<table>
 <tr>
 <td>
 
  <div id="COBI_FORM60AUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('COBI_FORM60A',this)"></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(COBI_FORM60A,'COBI_FORM60A')" class="COBI_FORM60A">
    </a>
    <input type="text" id="COBI_FORM60A" hidden="hidden" data-Validate="COBI_FORM60A"   name="COBI_FORM60A" class="form-control pan File COBIDBfields">
    <span class="name1">Upload Form 60</span>
  </div> 
  
  <!--
  <div id="COBI_FORM60AUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('COBI_FORM60A',this)"></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(COBI_FORM60A,'COBI_FORM60A')" class="COBI_FORM60A" style="display:none" >
    </a>
    <input type="text" id="COBI_FORM60A" hidden="hidden" data-Validate="COBI_FORM60A"  name="COBI_FORM60A" class="form-control COBIDBfields">  
 <span class="name">Upload Form 60</span>
  </div> -->
  
  
  
  </td>
</tr>
</table>
</div>    
</div>  
<div class="col-md-4 ">
<div class="md-form Formcol-mdLR TxtCenter">
<div class="COBI_FORM60A" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded ReUpld" title="UPLOAD" onclick="ReuploadFile(COBI_FORM60A);" alt="Cinque Terre" width="20" height="20"> 
<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="rounded " onclick="GrdDocDwnld('COBI_FORM60A')"  alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div>  
</div>
</br>

<div class="row" > 
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="COBI_CKYC" maxlength="14"  data-link="COBI_CKYC|COBI_CKYCVERIFY" name="COBI_CKYC" class="COBIDBfields datalink NoSpecialChar IsNumberFields form-control validate">
<label for="GRBI_PAN" data-error="wrong" data-success="right" class="">CKYC Number</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="COBI_CKYCVERIFY" hidden="hidden" name="COBI_CKYCVERIFY" class="form-control CBSIDBfields">
<!--<button type="button" data-Validatearia="COBI_CKYCVERIFY" disabled data-validate="CKYC" class="btn COBI_CKYC waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>-->
</div>
</div>  
</div>
</div>
</div>                                                          
</br>
  <div class="row FormRows m-b-0 OtherKYCInfo" style="display:none">
                            <!--First column-->
<div class="col-md-12 Formcol-mdLR Btxt1 ">
Other KYC Details
 </div>
 </div>   
<div class="row FormRows FormRowsNS m-b-0 voter" style="display:none">
<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="COBI_VOTERIDTYPE" data-FetchValidateArea="VOTER" name="COBI_VOTERIDTYPE" disabled class="form-control COBIDBfields DSVLBL" value="">
<label for="COBI_VOTERIDTYPE" class="">Voter ID Verification Type</label>
</div>
</div>

<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="COBI_VOTERIDPROOF" data-FetchValidateArea="VOTERPROOF" name="COBI_VOTERIDPROOF" disabled class="form-control COBIDBfields DSVLBL" value="">
<label for="COBI_VOTERIDPROOF" class="">Proof type</label>
</div>
</div>


<div class="col-md-12" >  
<div class="row VERIFY VoterFld">                                 <!--First column-->
<div class="col-md-8  Formcol-mdLR">

<div class="md-form">
<input type="text" id="COBI_VOTERID" data-FetchValidateArea="voter" data-FetchValidate="COBI_VOTERID" data-link="COBI_VOTERID|COBI_VOTERIDVEIRFY|voter|voterupload|voterview|COBI_VOTERATTACHMENT" onblur="CHKSAMEKYC('COBI_VOTERID','VOTER');"   maxlength="20" name="COBI_VOTERID" class="COBIDBfields datalink NewVoterField form-control validate">
<label for="COBI_VOTERID" class="">Voter ID *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="COBI_VOTERIDVEIRFY" hidden="hidden" name="COBI_VOTERIDVEIRFY" class="form-control COBIDBfields">
<!--<button type="button" data-Validatearia="COBI_VOTERIDVEIRFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#COBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('COBI_VOTERID','voter','COBI_VOTERIDVEIRFY','','','','','COBI_CUSID');SavePersInfo()"  data-validate="voter" class="btn COBI_VOTERID waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button" data-Validatearia="COBI_VOTERIDVEIRFY" onclick="CheckKYCDetl(this,'COBI_VOTERID','COBI_VOTERIDVEIRFY','VOTER ID');FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#COBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');" data-field="COBI_CUSFISNAM|COBI_CUSLSTNAM|COBI_CUSTYPE|COBI_CUSID|voter|voterupload|voterview|COBI_VOTERATTACHMENT"   data-validate="voter" class="btn COBI_VOTERID waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>

</div>
</div> 
</div>

<div class="row voter UPLOD" style="display:none">
                                   <!--First column-->
<div class="col-md-2  Formcol-mdLR voterupload">
<div class="md-form">
<table>
<tr>
<td>
<div id="COBI_VOTERATTACHMENTUPLOAD"  class="file-field UPLODD">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(COBI_VOTERATTACHMENT,'COBI_VOTERATTACHMENT','Voter ID','voterview')" class="COBI_VOTERATTACHMENT"  >
    </a>
    <input type="text" id="COBI_VOTERATTACHMENT" data-val="Voter's ID" hidden="hidden" data-Validate="COBI_VOTERATTACHMENT" data-field="COBI_VOTERUPLOADVERIFY" name="COBI_VOTERATTACHMENT" class="form-control voter COBIDBfields">
    <span class="name">Upload Voter's ID Frontside</span>
 </div>
</td>
</tr>
</table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter voterview">
<div class="md-form">
<div class="COBI_VOTERATTACHMENT" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(COBI_VOTERATTACHMENT);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('COBI_VOTERATTACHMENT')" class="rounded " alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="COBI_VOTERUPLOADVERIFY" hidden="hidden" name="COBI_VOTERUPLOADVERIFY" class="form-control COBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'COBI_VOTERATTACHMENT','COBI_VOTERUPLOADVERIFY','KYC OCR');" data-field="COBI_CUSFISNAM|COBI_CUSLSTNAM|COBI_CUSTYPE|COBI_CUSID|VoterID|COBI_VOTERID" data-Validatearia="COBI_VOTERUPLOADVERIFY" data-validate="voter" class="btn COBI_VOTERATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div> 

<!-- Second Upload Start-->
<div class="col-md-2  Formcol-mdLR voterupload">
<div class="md-form ">
<!--<div id="VOTERUPLOAD"><img src="ThemeproLO/Common/Images/UploadImg.png" onclick="DocFldUpldHndlr(CBSI_VoterIDAttachment,id)" id="VOTER" class="rounded" alt="Cinque Terre" width="20" height="20"> Upload Voter ID </div>-->
<!-- <input type="file" name="datafile"  class="APP"  onchange="DocFldUpldHndlr(CBSI_VoterIDAttachment)">-->
<table><tr>
<td>
<div id="COBI_VOTERATTACHMENTIIUPLOAD"  class="file-field UPLODD">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(COBI_VOTERATTACHMENTII,'COBI_VOTERATTACHMENTII','Voter ID','voterviewII')" class="COBI_VOTERATTACHMENTII"  >
    </a> 
<input type="text" id="COBI_VOTERATTACHMENTII" data-val="Voter ID" hidden="hidden" data-FetchValidateArea="voter" data-FetchValidate="COBI_VOTERATTACHMENTII" data-Validate="COBI_VOTERATTACHMENTII" data-field="COBI_VOTERUPLOADIIVERIFY"  name="COBI_VOTERATTACHMENTII" class="form-control voter File COBIDBfields">
<span class="name1"> Upload Voter's ID Backside</span>
 </div>
</td>
</tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter voterviewII">
<div class="md-form">
<div class="COBI_VOTERATTACHMENTII" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(COBI_VOTERATTACHMENTII);" title="UPLOAD  "  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('COBI_VOTERATTACHMENTII')" alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="COBI_VOTERUPLOADIIVERIFY" hidden="hidden" name="COBI_VOTERUPLOADIIVERIFY" class="form-control COBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'COBI_VOTERATTACHMENTII','COBI_VOTERUPLOADIIVERIFY','KYC OCR');" data-field="COBI_CUSFISNAM|COBI_CUSLSTNAM|COBI_CUSTYPE|COBI_CUSID|VoterID|COBI_VOTERID" data-Validatearia="COBI_VOTERUPLOADIIVERIFY" data-validate="voter" class="btn COBI_VOTERATTACHMENTII waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div> 
<!-- Second Upload End-->
 
</div> 
</div>
</br>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('COBI_VOTERIDVEIRFY','COBI_VOTERID','voter','COBI_VOTERATTACHMENT','COBI_CUSID','Upload Voters ID','COBI_VOTERUPLOADVERIFY','Voter ID')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20">  
</div>        
  </br>   
<div class="row FormRows FormRowsNS m-b-0 AADHAR" style="display:none">
 <div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="COBI_AADHARTYPE" data-FetchValidateArea="AADHAAR" name="COBI_AADHARTYPE" disabled class="form-control COBIDBfields DSVLBL" value="">
<label for="COBI_AADHARTYPE" class="">Aadhar Verification Type</label>
</div>
</div>


<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="COBI_AADHARPROOF" data-FetchValidateArea="AADHARPROOF" name="COBI_AADHARPROOF" disabled class="form-control COBIDBfields DSVLBL" value="">
<label for="COBI_AADHARPROOF" class="">Proof type</label>
</div>
</div>


 <div class="col-md-12 AadhaarZip" style="display:none">
 <div class="md-form"> 
<input type="text" id="COBI_SHARECODE" data-FetchValidateArea1="AADHAAR" name="COBI_SHARECODE" disabled class="form-control COBIDBfields DSVLBL" value="">
<label for="COBI_SHARECODE" class="">Share Code</label>
</div>
</div>
 <div class="col-md-12 AadhaarZip" style="display:none">
 <div class="md-form"> 
<input type="text" id="COBI_AADHARMOB" data-FetchValidateArea2="AADHAAR" name="COBI_AADHARMOB" disabled class="form-control COBIDBfields DSVLBL" value="">
<label for="COBI_AADHARMOB" class="">Aadhar Linked MOB</label>
</div>
</div>
<div class="col-md-12" >  
<div class="row AVER" >
                                 <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="COBI_AADHAR" data-FetchValidateArea="AADHAR" data-FetchValidate="COBI_AADHAR" data-link="COBI_AADHAR|COBI_AADHARVERIFY|AADHAR1|AADHARupload|AADHARview|COBI_AADHARATTACHMENT" name="COBI_AADHAR" value="" class="COBIDBfields IsNumberFields IsAadharFields  form-control validate">
<label for="COBI_AADHAR" class="">Aadhar *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="COBI_AADHARVERIFY" hidden="hidden" name="COBI_AADHARVERIFY" class="form-control COBIDBfields">
<!-- <button type="button" data-Validatearia="COBI_AADHARVERIFY" data-validate="AADHAR" class="btn  waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>-->
</div>
</div>  
</div>
<div class="row AUPL">
<!--First column-->
<div class="col-md-2  Formcol-mdLR Aadharupload">
<div class="md-form">
<table>
 <tr>
  <td>
   <div id="COBI_AADHARATTACHMENTUPLOAD"  class="file-field AUPLD AUPLDXML">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('Aadhar',this)"></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(COBI_AADHARATTACHMENT,'COBI_AADHARATTACHMENT','Aadhar','AADHARview')" class="COBI_AADHARATTACHMENT"  >
    </a>
     <input type="text" id="COBI_AADHARATTACHMENT" hidden="hidden" data-Validate="COBI_AADHARATTACHMENT" data-field="COBI_AADHARUPLOADVERIFY" name="COBI_AADHARATTACHMENT" class="form-control AADHARMndtry COBIDBfields">
     <span class="name1"> Upload Aadhar's ID Front side</span>
  </div>
   </td>
  </tr>
</table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter AADHARview AUPLDXML">
<div class="md-form">
<div class="COBI_AADHARATTACHMENT" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD"  onclick="ReuploadFile(COBI_AADHARATTACHMENT);" class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW"  onclick="GrdDocDwnld('COBI_AADHARATTACHMENT')" class="rounded AadharViewImg" alt="Cinque Terre" width="35" height="25"> 
<img src="ThemeproLO/Common/Images/Eyeview.png" style="display:none"  title="Marking Aadhar Image" class="rounded AadharMskImg" onclick="DirImgDown('COBI_MSKAADHARATTACHMENT')" alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="COBI_AADHARUPLOADVERIFY" hidden="hidden" name="COBI_AADHARUPLOADVERIFY" class="form-control COBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'COBI_AADHARATTACHMENT','COBI_AADHARUPLOADVERIFY','KYC OCR');" data-field="COBI_SHARECODE|COBI_AADHARMOB|COBI_CUSTYPE|COBI_CUSID|Aadhar|COBI_AADHAR|COBI_AADHARTYPE|COBI_MSKAADHARATTACHMENT" data-Validatearia="COBI_AADHARUPLOADVERIFY" data-validate="aadhar" class="btn COBI_AADHARATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>



<div class="col-md-2  Formcol-mdLR Aadharupload AUPLDXMLII">
<div class="md-form">
<table>
<tr>
<td>
<div id="COBI_AADHARATTACHMENTIIUPLOAD" class="file-field AUPLD">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('Aadhar',this)"></i><!--style="display:none"-->
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(COBI_AADHARATTACHMENTII,'COBI_AADHARATTACHMENTII','Aadhar','AADHARviewII');" class="COBI_AADHARATTACHMENTII"  >
    </a>
      <input type="text" id="COBI_AADHARATTACHMENTII" hidden="hidden" data-Validate="COBI_AADHARATTACHMENTII" name="COBI_AADHARATTACHMENTII"  data-field="COBI_AADHARUPLOADVERIFYII"  class="form-control File AADHARMndtry COBIDBfields">  	  
<span class="name1"> Upload Aadhar's ID Back side</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter AADHARviewII AUPLDXMLII">
<div class="md-form">
<div class="COBI_AADHARATTACHMENTII" style="display:none" > 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD"  onclick="ReuploadFile(COBI_AADHARATTACHMENTII);" class="rounded ReUpld" alt="Cinque Terre" width="20" height="20"> 
<img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW"  class="rounded AadharViewImgII" onclick="GrdDocDwnld('COBI_AADHARATTACHMENTII')" alt="Cinque Terre" width="35" height="25"> 

<img src="ThemeproLO/Common/Images/Eyeview.png" style="display:none"  title="Marking Aadhar Image" class="rounded AadharMskImgII" onclick="DirImgDown('COBI_MSKAADHARATTACHMENTII')" alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="COBI_AADHARUPLOADVERIFYII" hidden="hidden" name="COBI_AADHARUPLOADVERIFYII" class="form-control COBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'COBI_AADHARATTACHMENTII','COBI_AADHARUPLOADVERIFYII','KYC OCR');" data-field="COBI_SHARECODE|COBI_AADHARMOB|COBI_CUSTYPE|COBI_CUSID|Aadhar|COBI_AADHAR|COBI_AADHARTYPE|COBI_MSKAADHARATTACHMENTII" data-Validatearia="COBI_AADHARUPLOADVERIFYII" data-validate="aadhar" class="btn COBI_AADHARATTACHMENTII waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>

<input type="text" id="COBI_MSKAADHARATTACHMENTII" hidden="hidden" data-Validate="COBI_MSKAADHARATTACHMENTII" name="COBI_MSKAADHARATTACHMENTII"  data-field=""  class="form-control File AADHARMndtry COBIDBfields"> 

 
<input type="text" id="COBI_MSKAADHARATTACHMENT" hidden="hidden" data-Validate="COBI_MSKAADHARATTACHMENT" name="COBI_MSKAADHARATTACHMENT"  data-field=""  class="form-control File AADHARMndtry COBIDBfields">  
</div>
</br>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('COBI_AADHARVERIFY','COBI_AADHAR','AADHAR','COBI_AADHARATTACHMENT','COBI_CUSID','Upload Aadhar ID','COBI_AADHARUPLOADVERIFY','Aadhar')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 

</div>
</div>
   </br>       
 <div class="row FormRows FormRowsNS m-b-0 dl" style="display:none">
  <div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="COBI_DRIVNGTYPE" data-FetchValidateArea="DRVGLINCSE" name="COBI_DRIVNGTYPE" disabled class="form-control COBIDBfields DSVLBL" value="">
<label for="COBI_DRIVNGTYPE" class="">Driving License Verification Type</label>
</div>
</div>

<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="COBI_DLPROOF" data-FetchValidateArea="DLPROOF" name="COBI_DLPROOF" disabled class="form-control COBIDBfields DSVLBL" value="">
<label for="COBI_DLPROOF" class="">Proof type</label>
</div>
</div>



<div class="col-md-12" >  
<div class="row DVER" >
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">

<div class="md-form">
<input type="text" id="COBI_DRIVLICNS"  data-FetchValidateArea="dl" data-FetchValidate="COBI_DRIVLICNS" maxlength="20"  onblur="CHKSAMEKYC('COBI_DRIVLICNS','DL');"   data-link="COBI_DRIVLICNS|COBI_DRIVLICNSVERIFY|dl|dlupload|dlview|COBI_DRIVLICATTACHMENT" name="COBI_DRIVLICNS" class="COBIDBfields datalink form-control validate">
<label for="COBI_DRIVLICNS" class="">Driving License *</label>
</div>    

</div>  

<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="COBI_DRIVLICNSVERIFY" hidden="hidden" name="COBI_DRIVLICNSVERIFY" class="form-control COBIDBfields">
<!--<button type="button" data-Validatearia="COBI_DRIVLICNSVERIFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#COBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('COBI_DRIVLICNS','dl','COBI_DRIVLICNSVERIFY','','','','COBI_DOB','COBI_CUSID');SavePersInfo()" data-validate="dl"  class="btn COBI_DRIVLICNS  waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button" data-Validatearia="COBI_DRIVLICNSVERIFY" onclick="CheckKYCDetl(this,'COBI_DRIVLICNS','COBI_DRIVLICNSVERIFY','DRIVING LICENSE');FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#COBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');" data-field="COBI_DOB||COBI_CUSTYPE|COBI_CUSID|dl|dlupload|dlview|COBI_DRIVLICATTACHMENT" data-validate="dl"  class="btn COBI_DRIVLICNS  waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
</div>
</div>  
</div>
<div class="row dl" style="display:none" >
<!--First column-->
<div class="col-md-2  Formcol-mdLR dlupload DUPL">
<div class="md-form">
<table>
<tr>
<td>
  <div id="COBI_DRIVLICATTACHMENTUPLOAD"  class="file-field DUPLD">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(COBI_DRIVLICATTACHMENT,'COBI_DRIVLICATTACHMENT','Driving License','dlview')" class="COBI_DRIVLICATTACHMENT"  >
    </a>
     <input type="text" id="COBI_DRIVLICATTACHMENT" data-val="Driving License ID" hidden="hidden" data-Validate="COBI_DRIVLICATTACHMENT" data-field="COBI_DLUPLOADVERIFY" name="COBI_DRIVLICATTACHMENT" class="form-control COBIDBfields dl">
     <span class="name1"> Upload DL</span>
  </div>
</td>
</tr>
</table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter dlview">
<div class="md-form">
  <div class="COBI_DRIVLICATTACHMENT" style="display:none"> 
   <img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD" onclick="ReuploadFile(COBI_DRIVLICATTACHMENT);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW" onclick="GrdDocDwnld('COBI_DRIVLICATTACHMENT')"  class="rounded " alt="Cinque Terre" width="35" height="25"> 
   <input type="text" id="COBI_DLUPLOADVERIFY" hidden="hidden" name="COBI_DLUPLOADVERIFY" class="form-control COBIDBfields">
   <button type="button" onclick="CheckKYCUPLOADDOC(this,'COBI_DRIVLICATTACHMENT','COBI_DLUPLOADVERIFY','KYC OCR');" data-field="COBI_CUSFISNAM|COBI_CUSLSTNAM|COBI_CUSTYPE|COBI_CUSID|DL|COBI_DRIVLICNS" data-Validatearia="COBI_DLUPLOADVERIFY" data-validate="UpdDL" class="btn COBI_DRIVLICATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
  </div>
</div>
</div>  

<!-- Second Upload Start-->
<div class="col-md-2  Formcol-mdLR dlupload DUPL" style="display:none">
<div class="md-form">
<table>
<tr>
<td>
<div id="COBI_DRIVINGLICATTACHMENTIIUPLOAD"  class="file-field DUPLD" style="display:none">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(COBI_DRIVINGLICATTACHMENTII,'COBI_DRIVINGLICATTACHMENTII','Driving License','dlviewII')" class="COBI_DRIVINGLICATTACHMENTII" >
    </a>
    <input type="text" id="COBI_DRIVINGLICATTACHMENTII" data-FetchValidateArea="dl" data-FetchValidate="COBI_DRIVINGLICATTACHMENTII" data-val="Driving License ID" hidden="hidden" data-Validate="COBI_DRIVINGLICATTACHMENTII" data-field="COBI_DLUPLOADIIVERIFY"   name="COBI_DRIVINGLICATTACHMENTII" class="form-control dl File COBIDBfields"> 
   <span class="name1">Upload DL Backside</span>
  </div>
</td></tr>
</table>
</div>    
</div>  

<div class="col-md-4 Formcol-mdLR TxtCenter dlviewII" style="display:none">
<div class="md-form">
<div class="COBI_DRIVINGLICATTACHMENTII" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD" onclick="ReuploadFile(COBI_DRIVINGLICATTACHMENTII);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW" onclick="GrdDocDwnld('COBI_DRIVINGLICATTACHMENTII')" class="rounded " alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="COBI_DLUPLOADIIVERIFY" hidden="hidden" name="COBI_DLUPLOADIIVERIFY" class="form-control COBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'COBI_DRIVINGLICATTACHMENTII','COBI_DLUPLOADIIVERIFY','KYC OCR');" data-field="COBI_CUSFISNAM|COBI_CUSLSTNAM|COBI_CUSTYPE|COBI_CUSID|DL|COBI_DRIVLICNS" data-Validatearia="COBI_DLUPLOADIIVERIFY" data-validate="UpdDL" class="btn COBI_DRIVINGLICATTACHMENTII waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>
<!-- Second Upload End-->

</div> 
</br>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('COBI_DRIVLICNSVERIFY','COBI_DRIVLICNS','dl','COBI_DRIVLICATTACHMENT','COBI_CUSID','Upload Driving License ID','COBI_DLUPLOADVERIFY','Driving License')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 
</div>
</div>   
</br>     
   <div class="row FormRows FormRowsNS m-b-0 passport" style="display:none">
	 <div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="COBI_PASPRTTYPE" data-FetchValidateArea="PASSPRT" name="COBI_PASPRTTYPE" disabled class="form-control COBIDBfields DSVLBL" value="">
<label for="COBI_PASPRTTYPE" class="">Passport Verification Type</label>
</div>
</div>


<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="COBI_PASSPORTPROOF" data-FetchValidateArea="PASSPORTPROOF" name="COBI_PASSPORTPROOF" disabled class="form-control COBIDBfields DSVLBL" value="">
<label for="COBI_PASSPORTPROOF" class="">Proof type</label>
</div>
</div>


<div class="col-md-12">
  <div class="row PVER" >                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">

<div class="md-form">
<input type="text" id="COBI_PASSPORT" data-FetchValidateArea="passport" data-FetchValidate="COBI_PASSPORT" maxlength="24" data-link="COBI_PASSPORT|COBI_PASSPORTVERIFY|passport|passportupload|passportview|COBI_PASSPORTATTACHMENT" onblur="CHKSAMEKYC('COBI_PASSPORT','PASSPORT');" name="COBI_PASSPORT" class="COBIDBfields datalink form-control validate">
<label for="COBI_PASSPORT" class="">File No.- Passport No. *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="COBI_PASSPORTVERIFY" hidden="hidden" name="COBI_PASSPORTVERIFY" class="form-control COBIDBfields">
<!--<button type="button" data-Validatearia="COBI_PASSPORTVERIFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#COBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('COBI_PASSPORT','passport','COBI_PASSPORTVERIFY','COBI_CUSFISNAM','COBI_CUSLSTNAM','','COBI_DOB','COBI_CUSID');SavePersInfo()" data-validate="passport"  class="btn  COBI_PASSPORT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button" data-Validatearia="COBI_PASSPORTVERIFY" onclick="CheckKYCDetl(this,'COBI_PASSPORT','COBI_PASSPORTVERIFY','PASSPORT');FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#COBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');" data-field="COBI_DOB||COBI_CUSTYPE|COBI_CUSID|passport|passportupload|passportview|COBI_PASSPORTATTACHMENT" data-validate="passport"  class="btn  COBI_PASSPORT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
</div>
</div>  
</div>
<div class="row passport PUPL" style="display:none">
<div class="col-md-2  Formcol-mdLR passportupload">
<div class="md-form">
<table>
<tr>
<td>
   <div id="COBI_PASSPORTATTACHMENTUPLOAD"  class="file-field PUPLD">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(COBI_PASSPORTATTACHMENT,'COBI_PASSPORTATTACHMENT','Passport','passportview')" class="COBI_PASSPORTATTACHMENT"  >
    </a>
     <input type="text" id="COBI_PASSPORTATTACHMENT"  data-val="Passport" hidden="hidden" data-Validate="COBI_PASSPORTATTACHMENT" data-field="COBI_PASSUPLOADVERIFY" name="COBI_PASSPORTATTACHMENT" class="form-control passport COBIDBfields"> 
     <span class="name1"> Upload Passport Frontside</span>
  </div>
</td>
</tr>
</table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter passportview">
<div class="md-form">
<div class="COBI_PASSPORTATTACHMENT" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD" onclick="ReuploadFile(COBI_PASSPORTATTACHMENT);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW" onclick="GrdDocDwnld('COBI_PASSPORTATTACHMENT')"  class="rounded " alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="COBI_PASSUPLOADVERIFY" hidden="hidden" name="COBI_PASSUPLOADVERIFY" class="form-control COBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'COBI_PASSPORTATTACHMENT','COBI_PASSUPLOADVERIFY','KYC OCR');" data-field="COBI_CUSFISNAM|COBI_CUSLSTNAM|COBI_CUSTYPE|COBI_CUSID|PASSPORT|COBI_PASSPORT" data-Validatearia="COBI_PASSUPLOADVERIFY" data-validate="UpdPassport" class="btn COBI_PASSPORTATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div> 
</div>
</div> 

<!-- Second Upload Start-->
<div class="col-md-2  Formcol-mdLR passportupload">
<div class="md-form">
<table>
<tr>
<td>
<div id="COBI_PASSPORTATTACHMENTIIUPLOAD" class="file-field PUPLD">
  <a class="">
  <i class="fa fa-plus imgAdd" aria-hidden=""></i>
  <input type="file"  name="datafile" onchange="DocFldUpldHndlr(COBI_PASSPORTATTACHMENTII,'COBI_PASSPORTATTACHMENTII','Passport','passportviewII')" class="COBI_PASSPORTATTACHMENTII"  >
 </a>
 <input type="text" id="COBI_PASSPORTATTACHMENTII" data-val="Passport" hidden="hidden" data-Validate="COBI_PASSPORTATTACHMENTII" data-field="COBI_PASSUPLOADIIVERIFY" name="COBI_PASSPORTATTACHMENTII" class="form-control passport File COBIDBfields">
 <span class="name1">Upload Passport Backside</span>
</div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter passportviewII">
<div class="md-form">
<div class="COBI_PASSPORTATTACHMENTII" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD " onclick="ReuploadFile(COBI_PASSPORTATTACHMENTII);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW"  onclick="GrdDocDwnld('COBI_PASSPORTATTACHMENTII')" class="rounded " alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="COBI_PASSUPLOADIIVERIFY" hidden="hidden" name="COBI_PASSUPLOADIIVERIFY" class="form-control COBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'COBI_PASSPORTATTACHMENTII','COBI_PASSUPLOADIIVERIFY','KYC OCR');" data-field="COBI_CUSFISNAM|COBI_CUSLSTNAM|COBI_CUSTYPE|COBI_CUSID|PASSPORT|COBI_PASSPORT" data-Validatearia="COBI_PASSUPLOADIIVERIFY" data-validate="UpdPassport" class="btn COBI_PASSPORTATTACHMENTII waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>
  <!-- Second Upload End-->
</div> 
</br>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('COBI_PASSPORTVERIFY','COBI_PASSPORT','passport','COBI_PASSPORTATTACHMENT','COBI_CUSID','Upload Passport','COBI_PASSUPLOADVERIFY','Passport')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 
</div>        
 </div> 
 </br>
<div class="row FormRows FormRowsNS m-b-0 Utility" style="display:none">
<div class="col-md-12">
<div class="md-form">
<input type="text" id="COBI_UBVERIFYTYPE" data-FetchValidateArea="VERIFYTYPE" name="COBI_UBVERIFYTYPE" disabled class="form-control COBIDBfields DSVLBL" value="">
<label for="COBI_UBVERIFYTYPE" class="">Utility Bill Verification Type</label>
</div>
</div>

<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="COBI_UTILITYPROOF" data-FetchValidateArea="UTILITYPROOF" name="COBI_UTILITYPROOF" disabled class="form-control COBIDBfields DSVLBL" value="">
<label for="COBI_UTILITYPROOF" class="">Proof type</label>
</div>
</div>



<div class="col-md-12">
  <div class="row" >                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="COBI_SERVICEPRO" data-FetchValidateArea="PROVIDER" name="COBI_SERVICEPRO" hidden="hidden"  class="form-control COBIDBfields" value="">
<input type="text" id="COBI_UBSTATE" data-FetchValidateArea="STATE" name="COBI_UBSTATE" hidden="hidden"  class="form-control COBIDBfields" value="">
<input type="text" id="COBI_LLCITY" data-FetchValidateArea="CITY" name="COBI_LLCITY" hidden="hidden"  class="form-control COBIDBfields" value="">
<input type="text" id="COBI_UTILITY"  data-FetchValidateArea="Utility" data-FetchValidate="COBI_UTILITY" data-link="COBI_UTILITY|COBI_UTILITYVERIFY|Utility1|Utilityupload|Utilityview|COBI_UTILITYATTACHMENT"  onblur="CHKSAMEKYC('COBI_UTILITY','Utility');" maxlength="20" name="COBI_UTILITY" class="COBIDBfields datalink form-control validate">
<label for="COBI_UTILITY" class="UtilityLable">Utility Bill *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="COBI_UTILITYVERIFY" hidden="hidden" name="COBI_UTILITYVERIFY" class="form-control COBIDBfields">
<!--<button type="button" data-Validatearia="CBSI_DRIVLICNSVERIFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('CBSI_DRIVLICNS','dl','CBSI_DRIVLICNSVERIFY','','','','CBSI_DOB','CBSI_CUSID');SavePersInfo()" data-Validatearia="CBSI_DRIVLICNSVERIFY" data-validate="dl"  class="btn  waves-effect CBSI_DRIVLICNS btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button" data-Validatearia="COBI_UTILITYVERIFY" data-field="COBI_UBVERIFYTYPE|COBI_SERVICEPRO|COBI_CUSTYPE|COBI_CUSID|COBI_LLCITY" onclick="CheckKYCDetl(this,'COBI_UTILITY','COBI_UTILITYVERIFY','ELECTRICITY BILL');" data-field="COBI_DOB||COBI_CUSTYPE|COBI_CUSID|" data-Validatearia="COBI_UTILITYVERIFY" data-validate="Utility"  class="btn  waves-effect COBI_UTILITY btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>

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
<div id="COBI_UTILITYATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(COBI_UTILITYATTACHMENT,'COBI_UTILITYATTACHMENT','Utility Bill','Utilityview')" class="COBI_UTILITYATTACHMENT" >
    </a>
    <input type="text" id="COBI_UTILITYATTACHMENT" data-val="Utility Bill Authentication" hidden="hidden" data-Validate="COBI_UTILITYATTACHMENT"  data-field="COBI_UTILITYUPLOADVERIFY" name="COBI_UTILITYATTACHMENT" class="form-control Utility File COBIDBfields">
   <span class="name1"> Upload Utility Bill</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter Utilityview">
<div class="md-form">
<div class="COBI_UTILITYATTACHMENT" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD" onclick="ReuploadFile(COBI_UTILITYATTACHMENT);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  
<img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW" onclick="GrdDocDwnld('COBI_UTILITYATTACHMENT')" class="rounded " alt="Cinque Terre" width="35" height="25"> 
<!--<input type="text" id="COBI_UTILITYUPLOADVERIFY" hidden="hidden" name="COBI_UTILITYUPLOADVERIFY" class="form-control COBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'COBI_UTILITYATTACHMENT','COBI_UTILITYUPLOADVERIFY','KYC OCR');" data-field="COBI_CUSFISNAM|COBI_CUSLSTNAM|COBI_CUSTYPE|COBI_CUSID|Utility|COBI_UTILITY" data-Validatearia="COBI_UTILITYUPLOADVERIFY" data-validate="UpdUtility" class="btn COBI_UTILITYATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>-->
</div>
</br>
</div>
</div>  
</div> 
</br>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('COBI_UTILITYVERIFY','COBI_UTILITY','Utility','COBI_UTILITYATTACHMENT','COBI_CUSID','Utility Bill','COBI_UTILITYUPLOADVERIFY','Utility Bills')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 

</div>        
</div> 
</div>    
        
  </br>   
                                
 <div class="row FormRows m-b-0">

                                    <!--First column-->
<div class="col-md-12  Formcol-mdLR">

<div class="TxtCenter">
<a type="button" class="Btxt4 AddKYC" data-toggle="modal" data-target="#KYCDocModal" href="#">+ Another KYC Documents</a>
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
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');" id="BTNKARZAGRD" name="BTNKARZAGRD" />
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
        <button type="button" id="KarzaPopup" data-aria="COBI_CUSFISNAM|COBI_CUSLSTNAM|COBI_FATHRNAM|COBI_DOB|COAI_ADDRLINI|COAI_ADDRLINII|COBI_GENTER" class="btn btn-yel FCBDDBfields Btxt2 KarzaSmt">Submit</button>
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
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SNONIGSTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#COBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','PANKARZAGRD');" id="BTNPANKARZAGRD" name="BTNPANKARZAGRD" />
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
        <button type="button" id="GSTKarzaPopup" data-aria="COBI_GSTNUM" class="btn btn-yel FCBDDBfields Btxt2 GstKarzaSmt">Submit</button>
      </div>
    </div>
  </div>
  </div>
  
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>  
                                  <!--   </div>
                                </div>   -->