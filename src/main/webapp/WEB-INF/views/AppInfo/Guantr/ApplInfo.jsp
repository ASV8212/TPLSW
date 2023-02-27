


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
<div class="Btxt5 CBSIAPPINFO" id="APFI_SUBLONTYPE" name="APFI_SUBLONTYPE" value=""></div>
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

<div class="row FormRows m-b-0">
  
<div class="col-md-8  Formcol-mdLR">
  <select class="mdb-select md-form colorful-select dropdown-primary GRBIDBfields GRBIMndtry" onchange="CheckRelatOther();" id="GRBI_RELATIONSHIP" name="GRBI_RELATIONSHIP">
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
<input type="text" id="GRBI_OTHERRELATION" maxlength="25" name="GRBI_OTHERRELATION" class="GRBIDBfields IsAlphaFields form-control validate">
<label for="GRBI_OTHERRELATION" class="">Other*</label>
</div> 
</div> 
</div>

</div>
<div class="">
<input type="text" id="GRBI_HIDPROFTYP" name="GRBI_HIDPROFTYP" hidden="hidden" class="form-control DataNormal GRBIDBfields" value="">
 <div class="row FormRows m-b-0 KYCInfo">

                                    <!--First column-->
<div class="col-md-12 Formcol-mdLR Btxt1 ">Fill KYC Details</div>
 </div>

<div>
 <div class="row FormRows FormRowsNS m-b-0">
       <div class="col-md-12" >
       <div class="row" >
                       <!--First column onblur="InactivePanCheck()"-->
					              	<div class="col-md-12">
                 <div class="md-form">
                    <div id="" class="select-radio PANTYP"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input GRBIDBfields PANVTyp" onclick="Chkdirect()" value="OCR" id="Panocr" name="GRBI_PANTYPE">
                          <label class="custom-control-label" for="Panocr">OCR</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input GRBIDBfields PANVTyp" onclick="Chkdirect()" value="Direct" id="Pandirect" name="GRBI_PANTYPE">
                           <label class="custom-control-label" for="Pandirect">Direct</label>
                       </div>
 
                   </div>
                   <label class="mdb-main-label BTxt9">Pan Verification Type<span class="MndtryAstr">*</span></label>      
               </div>
           </div>

			<div class="col-md-8 KYCPROOF"style="display:none">
		<div class="md-form">
                     <div class="" id="">
                        <select class="mdb-select md-form colorful-select dropdown-primary GRBIDBfields" multiple id="GRBI_KYCPROOFTYP" onchange="GETPROOFTYP();" name="GRBI_KYCPROOFTYP">
                         <option value=""disabled>Select</option>
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
<input type="text" id="GRBI_PAN" data-FetchValidateArea="pan" data-FetchValidate="GRBI_PAN"  onchange="DupPanval('GRBI_PRCSID','GRBI_PAN','GRBI_CONSTITUTION','GRBI_CUSID')" name="GRBI_PAN" data-link="GRBI_PAN|GRBI_PANVERIFY|pan|panupload|panview|GRBI_PANATTACHMENT|Upload PAN ID|GRBI_DEDUPEVERIFY"  data-validate="GRBI_CUSTYPE|GRBI_CONSTITUTION"  maxlength="10" class="form-control datalink NoSpecialChar IsPanFields GRBIMndtry GRBIDBfields validate">
<label for="GRBI_PAN" class="">PAN <span class="MndtryAstr">*</span></label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter TYP" style="display:none">
<div class="md-form">
<input type="text" id="GRBI_PANVERIFY" hidden="hidden" name="GRBI_PANVERIFY" class="form-control GRBIDBfields">
<!--<button type="button" onclick="CheckValidPanKyc('GRBI_PAN','GRBI_PANVERIFY','GRBI_CUSFISNAM','GRBI_CUSLSTNAM','GRBI_CUSTYPE','GRBI_CUSID','CADI_ADDRLINI','CADI_ADDRLINII','CEMI_INCCONSID','CDOG_INCCONSID','GRBI_PROFILE');FncallDocChkLst(this,'Table3',{spname:'LSW_SNONIGSTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','PANKARZAGRD');ChkCusConti('GRBI_CUSTYPE','GRBI_CONSTITUTION','GRBI_CUSFISNAM');" data-Validatearia="GRBI_PANVERIFY" data-validate="pan" class="btn GRBI_PAN waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->

<button type="button" onclick="CheckKYCDetl(this,'GRBI_PAN','GRBI_PANVERIFY','PAN');FncallDocChkLst(this,'Table3',{spname:'LSW_SNONIGSTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','PANKARZAGRD');" data-field="GRBI_CUSFISNAM|GRBI_CUSLSTNAM|GRBI_CUSTYPE|GRBI_CUSID|pan|panupload|panview|GRBI_PANATTACHMENT|GRBI_CONSTITUTION" data-Validatearia="GRBI_PANVERIFY" data-validate="pan" class="btn GRBI_PAN waves-effect btn-yelInplain btn-sm BTNVerify CHEK INTDSBV">Verify</button>
</div>
</div>  
</div> 
 <div class="row pan pan1 UPLD" style="display:none" >
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR panupload">
<div class="md-form">
<!--  <div id="PANUPLOAD" > <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="DocFldUpldHndlr(GRBI_PANAttachment,id)" id="PAN" class="rounded" alt="Cinque Terre" width="20" height="20"> Upload PAN ID </div>-->
 <table>
 <tr>
 <td>
  <!--<div id="GRBI_PANATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('PAN',this)"></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_PANATTACHMENT,'GRBI_PANATTACHMENT','PAN','panview')" class="GRBI_PANATTACHMENT" style="display:none" >
    </a>
    <input type="text" id="GRBI_PANATTACHMENT" data-val="PAN ID" hidden="hidden" data-Validate="GRBI_PANATTACHMENT" data-field="GRBI_PANUPLOADVERIFY"  name="GRBI_PANATTACHMENT" class="form-control pan File GRBIDBfields">
    <span class="name1">Upload PAN ID</span>
  </div> -->
  
  
   <div id="GRBI_PANATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('PAN',this)"></i>
      <input type="file"  name="datafile"  onchange="DocFldUpldHndlr(GRBI_PANATTACHMENT,'GRBI_PANATTACHMENT','PAN','panview')" class="GRBI_PANATTACHMENT">
    </a>
    <input type="text" id="GRBI_PANATTACHMENT" data-val="PAN ID" hidden="hidden" data-Validate="GRBI_PANATTACHMENT"  data-field="GRBI_PANUPLOADVERIFY" name="GRBI_PANATTACHMENT" class="form-control pan File GRBIDBfields">
    <span class="name1">Upload PAN ID</span>
  </div> 
  
  
  
  
  
</td> 
</tr>
</table>
</div>    
</div>  

<div class="col-md-4 panview" >
<div class="md-form Formcol-mdLR TxtCenter">
<div class="md-form">
<div class="GRBI_PANATTACHMENT" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded  ReUpld" title="UPLOAD" onclick="ReuploadFile(GRBI_PANATTACHMENT);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('GRBI_PANATTACHMENT')" class="rounded" alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="GRBI_PANUPLOADVERIFY" hidden="hidden" name="GRBI_PANUPLOADVERIFY" class="form-control GRBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'GRBI_PANATTACHMENT','GRBI_PANUPLOADVERIFY','KYC OCR');" data-field="GRBI_CUSFISNAM|GRBI_CUSLSTNAM|GRBI_CUSTYPE|GRBI_CUSID|PAN|GRBI_PAN|GRBI_CONSTITUTION|GRBI_FATHRNAM" data-Validatearia="GRBI_PANUPLOADVERIFY" data-validate="pan" class="btn GRBI_PANATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>
</div>  
</div> 
</br>
<div class="row DPAN">
   <div class="col">
     <div class="md-form">
          <div class="custom-control custom-radio custom-control-inline">
 			 <input type="checkbox" class="custom-control-input GRBIDBfields" onclick="checkPAN();"  id="GRBI_PANNAVAIL" name="GRBI_PANNAVAIL">
  			 <label class="custom-control-label" for="GRBI_PANNAVAIL">PAN Not Available</label>
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
 
 
 
 
    <div id="GRBI_FORM60AUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('GRBI_FORM60A',this)"></i>
      <input type="file"  name="datafile"  onchange="DocFldUpldHndlr(GRBI_FORM60A,'GRBI_FORM60A')" class="GRBI_FORM60A">
    </a>
    <input type="text" id="GRBI_FORM60A"  hidden="hidden" data-Validate="GRBI_FORM60A"   name="GRBI_FORM60A" class="form-control pan File GRBIDBfields">
    <span class="name1">Upload Form 60</span>
  </div> 
  
 
 <!--
  <div id="GRBI_FORM60AUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('GRBI_FORM60A',this)"></></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_FORM60A,'GRBI_FORM60A')" class="GRBI_FORM60A" style="display:none" >
    </a>
    <input type="text" id="GRBI_FORM60A" hidden="hidden" data-Validate="GRBI_FORM60A"  name="GRBI_FORM60A" class="form-control GRBIDBfields">  
 <span class="name">Upload Form 60</span>
  </div> -->
  
 
  
  </td>
</tr>
</table>
</div>    
</div>  
<div class="col-md-4 ">
<div class="md-form Formcol-mdLR TxtCenter">
<div class="GRBI_FORM60A" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded ReUpld" title="UPLOAD" onclick="ReuploadFile(GRBI_FORM60A);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="rounded " onclick="GrdDocDwnld('GRBI_FORM60A')"  alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div>  
</div>
</br>
<div class="row" > 
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="GRBI_CKYC" maxlength="14" data-link="GRBI_CKYC|GRBI_CKYCVERIFY" name="GRBI_CKYC" class="GRBIDBfields datalink NoSpecialChar IsNumberFields form-control validate">
<label for="GRBI_CKYC" data-error="wrong" data-success="right" class="">CKYC Number</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="GRBI_CKYCVERIFY" hidden="hidden" name="GRBI_CKYCVERIFY" class="form-control GRBIDBfields">
<!--<button type="button" data-Validatearia="GRBI_CKYCVERIFY" disabled data-validate="CKYC" class="btn GRBI_CKYC waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>-->
</div>
</div>  
</div>
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
<input type="text" id="GRBI_VOTERIDTYPE" data-FetchValidateArea="VOTER" name="GRBI_VOTERIDTYPE" disabled class="form-control GRBIDBfields DSVLBL" value="">
<label for="GRBI_VOTERIDTYPE" class="">Voter ID Verification Type</label>
</div>
</div>


<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="GRBI_VOTERIDPROOF" data-FetchValidateArea="VOTERPROOF" name="GRBI_VOTERIDPROOF" disabled class="form-control GRBIDBfields DSVLBL" value="">
<label for="GRBI_VOTERIDPROOF" class="">Proof type</label>
</div>
</div>



 <div class="col-md-12" >  
    <div class="row VERIFY VoterFld">                                 <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="GRBI_VOTERID" name="GRBI_VOTERID" data-FetchValidateArea="voter" data-FetchValidate="GRBI_VOTERID" data-link="GRBI_VOTERID|GRBI_VOTERIDVEIRFY|voter1|voterupload|voterview|GRBI_VOTERATTACHMENT" maxlength="20" onblur="CHKSAMEKYC('GRBI_VOTERID','voter');" class="GRBIDBfields datalink NewVoterField form-control validate">
<label for="GRBI_VOTERID"  class="">Voter ID *</label>
</div>    
</div>  

<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="GRBI_VOTERIDVEIRFY" hidden="hidden" name="GRBI_VOTERIDVEIRFY" class="form-control File GRBIDBfields">
<!--<button type="button" data-Validatearia="GRBI_VOTERIDVEIRFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('GRBI_VOTERID','voter','GRBI_VOTERIDVEIRFY','','','','','GRBI_CUSID');SavePersInfo()" data-Validatearia="GRBI_VOTERIDVEIRFY" data-validate="voter" class="btn GRBI_VOTERID  waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button" data-Validatearia="GRBI_VOTERIDVEIRFY" onclick="CheckKYCDetl(this,'GRBI_VOTERID','GRBI_VOTERIDVEIRFY','VOTER ID');FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');" data-field="GRBI_CUSFISNAM|GRBI_CUSLSTNAM|GRBI_CUSTYPE|GRBI_CUSID|voter|voterupload|voterview|GRBI_VOTERIDATTACHMENT"  data-Validatearia="GRBI_VOTERIDVEIRFY" data-validate="voter" class="btn GRBI_VOTERID  waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>

</div>
</div>  
</div>  

<div class="row voter UPLOD" style="display:none" >
                                    <!--First column-->
<div class="col-md-2  Formcol-mdLR voterupload">
<div class="md-form">
<!--<div id="VOTERUPLOAD"><img src="ThemeproLO/Common/Images/UploadImg.png" onclick="DocFldUpldHndlr(GRBI_VoterIDAttachment,id)" id="VOTER" class="rounded" alt="Cinque Terre" width="20" height="20"> Upload Voter ID </div>-->
<!-- <input type="file" name="datafile"  class="APP"  onchange="DocFldUpldHndlr(GRBI_VoterIDAttachment)">-->
<table><tr>
<td>
<div id="GRBI_VOTERIDATTACHMENTUPLOAD"  class="file-field UPLODD">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_VOTERIDATTACHMENT,'GRBI_VOTERIDATTACHMENT','Voter ID','voterview')" class="GRBI_VOTERATTACHMENT"  >
    </a> 
<input type="text" id="GRBI_VOTERIDATTACHMENT" data-val="Voter ID" hidden="hidden" data-Validate="GRBI_VOTERIDATTACHMENT" data-field="GRBI_VOTERUPLOADVERIFY"  name="GRBI_VOTERIDATTACHMENT" class="form-control voter File GRBIDBfields">
<span class="name1"> Upload Voter's ID Frontside</span>
 </div>
</td>
</tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter voterview">
<div class="md-form">
<div class="GRBI_VOTERIDATTACHMENT" style="display:none">
<img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(GRBI_VOTERIDATTACHMENT);" title="UPLOAD  "  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('GRBI_VOTERIDATTACHMENT')" alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="GRBI_VOTERUPLOADVERIFY" hidden="hidden" name="GRBI_VOTERUPLOADVERIFY" class="form-control GRBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'GRBI_VOTERIDATTACHMENT','GRBI_VOTERUPLOADVERIFY','KYC OCR');" data-field="GRBI_CUSFISNAM|GRBI_CUSLSTNAM|GRBI_CUSTYPE|GRBI_CUSID|VoterID|GRBI_VOTERID" data-Validatearia="GRBI_VOTERUPLOADVERIFY" data-validate="voter" class="btn GRBI_VOTERIDATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>  

<!-- Second Upload Start-->
<div class="col-md-2  Formcol-mdLR voterupload">
<div class="md-form">
<!--<div id="VOTERUPLOAD"><img src="ThemeproLO/Common/Images/UploadImg.png" onclick="DocFldUpldHndlr(CBSI_VoterIDAttachment,id)" id="VOTER" class="rounded" alt="Cinque Terre" width="20" height="20"> Upload Voter ID </div>-->
<!-- <input type="file" name="datafile"  class="APP"  onchange="DocFldUpldHndlr(CBSI_VoterIDAttachment)">-->
<table><tr>
<td>
<div id="GRBI_VOTERATTACHMENTIIUPLOAD"  class="file-field UPLODD">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_VOTERATTACHMENTII,'GRBI_VOTERATTACHMENTII','Voter ID','voterviewII')" class="GRBI_VOTERATTACHMENTII"  >
    </a> 
<input type="text" id="GRBI_VOTERATTACHMENTII" data-val="Voter ID" hidden="hidden" data-FetchValidateArea="voter" data-FetchValidate="GRBI_VOTERATTACHMENTII" data-Validate="GRBI_VOTERATTACHMENTII" data-field="GRBI_VOTERUPLOADIIVERIFY"  name="GRBI_VOTERATTACHMENTII" class="form-control voter File GRBIDBfields">
<span class="name1"> Upload Voter's ID Backside</span>
 </div>
</td>
</tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter voterviewII">
<div class="md-form">
<div class="GRBI_VOTERATTACHMENTII" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(GRBI_VOTERATTACHMENTII);" title="UPLOAD  "  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('GRBI_VOTERATTACHMENTII')" alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="GRBI_VOTERUPLOADIIVERIFY" hidden="hidden" name="GRBI_VOTERUPLOADIIVERIFY" class="form-control GRBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'GRBI_VOTERATTACHMENTII','GRBI_VOTERUPLOADIIVERIFY','KYC OCR');" data-field="GRBI_CUSFISNAM|GRBI_CUSLSTNAM|GRBI_CUSTYPE|GRBI_CUSID|VoterID|GRBI_VOTERID" data-Validatearia="GRBI_VOTERUPLOADIIVERIFY" data-validate="voter" class="btn GRBI_VOTERATTACHMENTII waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div> 
<!-- Second Upload End-->

</div>
</br>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('GRBI_VOTERIDVEIRFY','GRBI_VOTERID','voter','GRBI_VOTERIDATTACHMENT','GRBI_CUSID',' Upload Voters ID','GRBI_VOTERUPLOADVERIFY','Voter ID')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 
</div>  
</div>  
</br>  
<div class="row FormRows FormRowsNS m-b-0 AADHAR" style="display:none">
 <div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="GRBI_AADHARTYPE" data-FetchValidateArea="AADHAAR" name="GRBI_AADHARTYPE" disabled class="form-control GRBIDBfields DSVLBL" value="">
<label for="GRBI_AADHARTYPE" class="">Aadhar Verification Type</label>
</div>
</div>

<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="GRBI_AADHARPROOF" data-FetchValidateArea="AADHARPROOF" name="GRBI_AADHARPROOF" disabled class="form-control GRBIDBfields DSVLBL" value="">
<label for="GRBI_AADHARPROOF" class="">Proof type</label>
</div>
</div>



 <div class="col-md-12 AadhaarZip" style="display:none">
 <div class="md-form"> 
<input type="text" id="GRBI_SHARECODE" data-FetchValidateArea1="AADHAAR" name="GRBI_SHARECODE" disabled class="form-control GRBIDBfields DSVLBL" value="">
<label for="GRBI_SHARECODE" class="">Share Code</label>
</div>
</div>
 <div class="col-md-12 AadhaarZip" style="display:none">
 <div class="md-form"> 
<input type="text" id="GRBI_AADHARMOB" data-FetchValidateArea2="AADHAAR" name="GRBI_AADHARMOB" disabled class="form-control GRBIDBfields DSVLBL" value="">
<label for="GRBI_AADHARMOB" class="">Aadhar Linked MOB</label>
</div>
</div>

<div class="col-md-12">
   <div class="row AVER" >
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="GRBI_AADHAR" maxlength="12" value="" disabled data-FetchValidateArea="AADHAR" data-FetchValidate="GRBI_AADHAR" data-link="GRBI_AADHAR|GRBI_AADHARVERIFY|AADHAR1|AADHARupload|AADHARview|GRBI_AADHARATTACHMENT"   name="GRBI_AADHAR" class="GRBIDBfields IsNumberFields IsAadharFields form-control validate">
<label for="GRBI_AADHAR" class="">Aadhar *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="GRBI_AADHARVERIFY" hidden="hidden" name="GRBI_AADHARVERIFY" class="form-control GRBIDBfields">
<!--<button type="button" data-Validatearia="GRBI_AADHARVERIFY" onclick="CheckKYCDetl(this,'GRBI_AADHARATTACHMENT','GRBI_AADHARVERIFY','AADHAAR XML VERIFY');" data-field="GRBI_DOB||GRBI_CUSTYPE|GRBI_CUSID|" data-validate="AADHAR" class="btn  waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>-->

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
<div id="GRBI_AADHARATTACHMENTUPLOAD"  class="file-field AUPLD AUPLDXML">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('Aadhar',this)"></i><!--style="display:none"-->
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_AADHARATTACHMENT,'GRBI_AADHARATTACHMENT','Aadhar','AADHARview');" class="GRBI_AADHARATTACHMENT"  >
    </a>
      <input type="text" id="GRBI_AADHARATTACHMENT" hidden="hidden" data-Validate="GRBI_AADHARATTACHMENT" data-field="GRBI_AADHARUPLOADVERIFY"  name="GRBI_AADHARATTACHMENT" class="form-control File AADHARMndtry GRBIDBfields">   
<span class="name1"> Upload Aadhar's ID Front side</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter AADHARview AUPLDXML">
<div class="md-form">
<div class="GRBI_AADHARATTACHMENT" style="display:none" >
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD"  onclick="ReuploadFile(GRBI_AADHARATTACHMENT);" class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW"  class="rounded AadharViewImg" onclick="GrdDocDwnld('GRBI_AADHARATTACHMENT')" alt="Cinque Terre" width="35" height="25"> 
<img src="ThemeproLO/Common/Images/Eyeview.png" style="display:none"  title="Marking Aadhar Image" class="rounded AadharMskImg" onclick="DirImgDown('GRBI_MSKAADHARATTACHMENT')" alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="GRBI_AADHARUPLOADVERIFY" hidden="hidden" name="GRBI_AADHARUPLOADVERIFY" class="form-control GRBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'GRBI_AADHARATTACHMENT','GRBI_AADHARUPLOADVERIFY','KYC OCR');" data-field="GRBI_SHARECODE|GRBI_AADHARMOB|GRBI_CUSTYPE|GRBI_CUSID|Aadhar|GRBI_AADHAR|GRBI_AADHARTYPE|GRBI_MSKAADHARATTACHMENT" data-Validatearia="GRBI_AADHARUPLOADVERIFY" data-validate="aadhar" class="btn GRBI_AADHARATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>


<div class="col-md-2  Formcol-mdLR Aadharupload ">
<div class="md-form">
<table>
<tr>
<td>
<div id="GRBI_AADHARATTACHMENTIIUPLOAD" class="file-field AUPLD AUPLDXMLII">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden="" onclick="Filesizepop('Aadhar',this)"></i><!--style="display:none"-->
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_AADHARATTACHMENTII,'GRBI_AADHARATTACHMENTII','Aadhar','AADHARviewII');" class="GRBI_AADHARATTACHMENTII"  >
    </a>
      <input type="text" id="GRBI_AADHARATTACHMENTII" hidden="hidden" data-Validate="GRBI_AADHARATTACHMENTII" name="GRBI_AADHARATTACHMENTII"  data-field="GRBI_AADHARUPLOADVERIFYII"  class="form-control File AADHARMndtry GRBIDBfields">  	  
<span class="name1"> Upload Aadhar's ID Back side</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter AADHARviewII AUPLDXMLII">
<div class="md-form">
<div class="GRBI_AADHARATTACHMENTII" style="display:none" > 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD"  onclick="ReuploadFile(GRBI_AADHARATTACHMENTII);" class="rounded ReUpld" alt="Cinque Terre" width="20" height="20"> 
<img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW"  class="rounded AadharViewImgII" onclick="GrdDocDwnld('GRBI_AADHARATTACHMENTII')" alt="Cinque Terre" width="35" height="25"> 

<img src="ThemeproLO/Common/Images/Eyeview.png" style="display:none"  title="Marking Aadhar Image" class="rounded AadharMskImgII" onclick="DirImgDown('GRBI_MSKAADHARATTACHMENTII')" alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="GRBI_AADHARUPLOADVERIFYII" hidden="hidden" name="GRBI_AADHARUPLOADVERIFYII" class="form-control GRBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'GRBI_AADHARATTACHMENTII','GRBI_AADHARUPLOADVERIFYII','KYC OCR');" data-field="GRBI_SHARECODE|GRBI_AADHARMOB|GRBI_CUSTYPE|GRBI_CUSID|Aadhar|GRBI_AADHAR|GRBI_AADHARTYPE|GRBI_MSKAADHARATTACHMENTII" data-Validatearia="GRBI_AADHARUPLOADVERIFYII" data-validate="aadhar" class="btn GRBI_AADHARATTACHMENTII waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>

<input type="text" id="GRBI_MSKAADHARATTACHMENTII" hidden="hidden" data-Validate="GRBI_MSKAADHARATTACHMENTII" name="GRBI_MSKAADHARATTACHMENTII"  data-field=""  class="form-control File AADHARMndtry GRBIDBfields"> 



<input type="text" id="GRBI_MSKAADHARATTACHMENT" hidden="hidden" data-Validate="GRBI_MSKAADHARATTACHMENT" name="GRBI_MSKAADHARATTACHMENT"  data-field=""  class="form-control File AADHARMndtry GRBIDBfields">    
</div>
</br>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('GRBI_AADHARVERIFY','GRBI_AADHAR','AADHAR','GRBI_AADHARATTACHMENT','GRBI_CUSID','Upload Aadhar ID','GRBI_AADHARUPLOADVERIFY','Aadhar')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20">   
</div> 
</div>    
</br>       
 <div class="row FormRows FormRowsNS m-b-0 dl" style="display:none">
  <div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="GRBI_DRIVNGTYPE" data-FetchValidateArea="DRVGLINCSE" name="GRBI_DRIVNGTYPE" disabled class="form-control GRBIDBfields DSVLBL" value="">
<label for="GRBI_DRIVNGTYPE" class="">Driving License Verification Type</label>
</div>
</div>


<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="GRBI_DLPROOF" data-FetchValidateArea="DLPROOF" name="GRBI_DLPROOF" disabled class="form-control GRBIDBfields DSVLBL" value="">
<label for="GRBI_DLPROOF" class="">Proof type</label>
</div>
</div>




<div class="col-md-12">
  <div class="row DVER" >                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">

<div class="md-form">
<input type="text" id="GRBI_DRIVLICNS"  data-FetchValidateArea="dl" data-FetchValidate="GRBI_DRIVLICNS" data-link="GRBI_DRIVLICNS|GRBI_DRIVLICNSVERIFY|dl1|dlupload|dlview|GRBI_DRIVINGLICATTACHMENT"  onblur="CHKSAMEKYC('GRBI_DRIVLICNS','DL');" maxlength="20" name="GRBI_DRIVLICNS" class="GRBIDBfields datalink form-control validate">
<label for="GRBI_DRIVLICNS" class="">Driving License *</label>
</div>    

</div>  

<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="GRBI_DRIVLICNSVERIFY" hidden="hidden" name="GRBI_DRIVLICNSVERIFY" class="form-control GRBIDBfields">
<!--<button type="button" data-Validatearia="GRBI_DRIVLICNSVERIFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('GRBI_DRIVLICNS','dl','GRBI_DRIVLICNSVERIFY','','','','GRBI_DOB','GRBI_CUSID');SavePersInfo()" data-Validatearia="GRBI_DRIVLICNSVERIFY" data-validate="dl"  class="btn  waves-effect GRBI_DRIVLICNS btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button" data-Validatearia="GRBI_DRIVLICNSVERIFY" onclick="CheckKYCDetl(this,'GRBI_DRIVLICNS','GRBI_DRIVLICNSVERIFY','DRIVING LICENSE');FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');" data-field="GRBI_DOB||GRBI_CUSTYPE|GRBI_CUSID|dl|dlupload|dlview|GRBI_DRIVINGLICATTACHMENT" data-Validatearia="GRBI_DRIVLICNSVERIFY" data-validate="dl"  class="btn  waves-effect GRBI_DRIVLICNS btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>

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
<div id="GRBI_DRIVELICATTACHMENTUPLOAD"  class="file-field DUPLD">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_DRIVELICATTACHMENT,'GRBI_DRIVELICATTACHMENT','Driving License','dlview')" class="GRBI_DRIVELICATTACHMENT" >
    </a>
    <input type="text" id="GRBI_DRIVELICATTACHMENT" data-val="Driving License ID" hidden="hidden" data-Validate="GRBI_DRIVELICATTACHMENT" data-field="GRBI_DLUPLOADVERIFY" name="GRBI_DRIVELICATTACHMENT" class="form-control dl File GRBIDBfields">
    
   <span class="name1"> Upload DL</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter dlview">
<div class="md-form">
<div class="GRBI_DRIVELICATTACHMENT" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD" onclick="ReuploadFile(GRBI_DRIVELICATTACHMENT);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW" onclick="GrdDocDwnld('GRBI_DRIVELICATTACHMENT')" class="rounded " alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="GRBI_DLUPLOADVERIFY" hidden="hidden" name="GRBI_DLUPLOADVERIFY" class="form-control GRBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'GRBI_DRIVELICATTACHMENT','GRBI_DLUPLOADVERIFY','KYC OCR');" data-field="GRBI_CUSFISNAM|GRBI_CUSLSTNAM|GRBI_CUSTYPE|GRBI_CUSID|DL|GRBI_DRIVLICNS" data-Validatearia="GRBI_DLUPLOADVERIFY" data-validate="UpdDL" class="btn GRBI_DRIVELICATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div> 
</div>
</div> 

<!-- Second Upload Start-->
<div class="col-md-2  Formcol-mdLR dlupload DUPL" style="display:none">
<div class="md-form">
<table>
<tr>
<td>
<div id="GRBI_DRIVINGLICATTACHMENTIIUPLOAD"  class="file-field DUPLD" style="display:none">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_DRIVINGLICATTACHMENTII,'GRBI_DRIVINGLICATTACHMENTII','Driving License','dlviewII')" class="GRBI_DRIVINGLICATTACHMENTII" >
    </a>
    <input type="text" id="GRBI_DRIVINGLICATTACHMENTII" data-FetchValidateArea="dl" data-FetchValidate="GRBI_DRIVINGLICATTACHMENTII" data-val="Driving License ID" hidden="hidden" data-Validate="GRBI_DRIVINGLICATTACHMENTII" data-field="GRBI_DLUPLOADIIVERIFY"   name="GRBI_DRIVINGLICATTACHMENTII" class="form-control dl File GRBIDBfields"> 
   <span class="name1">Upload DL Backside</span>
  </div>
</td></tr>
</table>
</div>    
</div>  

<div class="col-md-4 Formcol-mdLR TxtCenter dlviewII" style="display:none">
<div class="md-form">
<div class="GRBI_DRIVINGLICATTACHMENTII" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD" onclick="ReuploadFile(GRBI_DRIVINGLICATTACHMENTII);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW" onclick="GrdDocDwnld('GRBI_DRIVINGLICATTACHMENTII')" class="rounded " alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="GRBI_DLUPLOADIIVERIFY" hidden="hidden" name="GRBI_DLUPLOADIIVERIFY" class="form-control GRBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'GRBI_DRIVINGLICATTACHMENTII','GRBI_DLUPLOADIIVERIFY','KYC OCR');" data-field="GRBI_CUSFISNAM|GRBI_CUSLSTNAM|GRBI_CUSTYPE|GRBI_CUSID|DL|GRBI_DRIVLICNS" data-Validatearia="GRBI_DLUPLOADIIVERIFY" data-validate="UpdDL" class="btn GRBI_DRIVINGLICATTACHMENTII waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>
<!-- Second Upload End-->

 
</div> 
</br>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('GRBI_DRIVLICNSVERIFY','GRBI_DRIVLICNS','dl','GRBI_DRIVINGLICATTACHMENT','GRBI_CUSID','Upload Driving License ID','GRBI_DLUPLOADVERIFY','Driving License')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 
</div>        
  </div>  
  </br>    
    <div class="row FormRows FormRowsNS m-b-0 passport" style="display:none">
		 <div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="GRBI_PASPRTTYPE" data-FetchValidateArea="PASSPRT" name="GRBI_PASPRTTYPE" disabled class="form-control GRBIDBfields DSVLBL" value="">
<label for="GRBI_PASPRTTYPE" class="">Passport Verification Type</label>
</div>
</div>

<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="GRBI_PASSPORTPROOF" data-FetchValidateArea="PASSPORTPROOF" name="GRBI_PASSPORTPROOF" disabled class="form-control GRBIDBfields DSVLBL" value="">
<label for="GRBI_PASSPORTPROOF" class="">Proof type</label>
</div>
</div>


<div class="col-md-12">
  <div class="row PVER" >                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="GRBI_PASSPORT" data-FetchValidateArea="passport" data-FetchValidate="GRBI_PASSPORT"  maxlength="24" data-link="GRBI_PASSPORT|GRBI_PASSPORTVERIFY|passport1|passportupload|passportview|GRBI_PASSPORTATTACHMENT" name="GRBI_PASSPORT" onblur="CHKSAMEKYC('GRBI_PASSPORT','PASSPORT');"  class="GRBIDBfields datalink form-control validate">
<label for="GRBI_PASSPORT" class="">File No. - Passport No. *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="GRBI_PASSPORTVERIFY" hidden="hidden" name="GRBI_PASSPORTVERIFY" class="form-control GRBIDBfields">
<!--<button type="button"  data-Validatearia="GRBI_PASSPORTVERIFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('GRBI_PASSPORT','passport','GRBI_PASSPORTVERIFY','GRBI_CUSFISNAM','GRBI_CUSLSTNAM','','GRBI_DOB','GRBI_CUSID');SavePersInfo()"  data-Validatearia="GRBI_PASSPORTVERIFY"  data-validate="passport"  class="btn GRBI_PASSPORT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button"  data-Validatearia="GRBI_PASSPORTVERIFY" onclick="CheckKYCDetl(this,'GRBI_PASSPORT','GRBI_PASSPORTVERIFY','PASSPORT');FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');" data-field="GRBI_DOB||GRBI_CUSTYPE|GRBI_CUSID|passport|passportupload|passportview|GRBI_PASSPORTATTACHMENT"  data-Validatearia="GRBI_PASSPORTVERIFY"  data-validate="passport"  class="btn GRBI_PASSPORT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>

</div>
</div>  
</div>
<div class="row passport PUPL" style="display:none" >
                                    <!--First column-->
<div class="col-md-2  Formcol-mdLR passportupload">
<div class="md-form">
<table>
<tr>
<td>
<div id="GRBI_PASSPORTATTACHMENTUPLOAD" class="file-field PUPLD">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_PASSPORTATTACHMENT,'GRBI_PASSPORTATTACHMENT','Passport','passportview')" class="GRBI_PASSPORTATTACHMENT"  >
    </a>
  <input type="text" id="GRBI_PASSPORTATTACHMENT" data-val="Passport" hidden="hidden" data-Validate="GRBI_PASSPORTATTACHMENT" data-field="GRBI_PASSUPLOADVERIFY" name="GRBI_PASSPORTATTACHMENT" class="form-control passport File GRBIDBfields">
   <span class="name1"> Upload Passport Frontside</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter passportview">
<div class="md-form">
<div class="GRBI_PASSPORTATTACHMENT" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD " onclick="ReuploadFile(GRBI_PASSPORTATTACHMENT);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW"  onclick="GrdDocDwnld('GRBI_PASSPORTATTACHMENT')" class="rounded " alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="GRBI_PASSUPLOADVERIFY" hidden="hidden" name="GRBI_PASSUPLOADVERIFY" class="form-control GRBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'GRBI_PASSPORTATTACHMENT','GRBI_PASSUPLOADVERIFY','KYC OCR');" data-field="GRBI_CUSFISNAM|GRBI_CUSLSTNAM|GRBI_CUSTYPE|GRBI_CUSID|PASSPORT|COBI_PASSPORT" data-Validatearia="GRBI_PASSUPLOADVERIFY" data-validate="UpdPassport" class="btn GRBI_PASSPORTATTACHMENT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>

<!-- Second Upload Start-->
<div class="col-md-2  Formcol-mdLR passportupload">
<div class="md-form">
<table>
<tr>
<td>
<div id="GRBI_PASSPORTATTACHMENTIIUPLOAD" class="file-field PUPLD">
  <a class="">
  <i class="fa fa-plus imgAdd" aria-hidden=""></i>
  <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_PASSPORTATTACHMENTII,'GRBI_PASSPORTATTACHMENTII','Passport','passportviewII')" class="GRBI_PASSPORTATTACHMENTII"  >
 </a>
 <input type="text" id="GRBI_PASSPORTATTACHMENTII" data-val="Passport" hidden="hidden" data-Validate="GRBI_PASSPORTATTACHMENTII" data-field="GRBI_PASSUPLOADIIVERIFY" name="GRBI_PASSPORTATTACHMENTII" class="form-control passport File GRBIDBfields">
 <span class="name1">Upload Passport Backside</span>
</div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter passportviewII">
<div class="md-form">
<div class="GRBI_PASSPORTATTACHMENTII" style="display:none"> 
<img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD " onclick="ReuploadFile(GRBI_PASSPORTATTACHMENTII);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW"  onclick="GrdDocDwnld('GRBI_PASSPORTATTACHMENTII')" class="rounded " alt="Cinque Terre" width="35" height="25"> 
<input type="text" id="GRBI_PASSUPLOADIIVERIFY" hidden="hidden" name="GRBI_PASSUPLOADIIVERIFY" class="form-control GRBIDBfields">
<button type="button" onclick="CheckKYCUPLOADDOC(this,'GRBI_PASSPORTATTACHMENTII','GRBI_PASSUPLOADIIVERIFY','KYC OCR');" data-field="GRBI_CUSFISNAM|GRBI_CUSLSTNAM|GRBI_CUSTYPE|GRBI_CUSID|PASSPORT|GRBI_PASSPORT" data-Validatearia="GRBI_PASSUPLOADIIVERIFY" data-validate="UpdPassport" class="btn GRBI_PASSPORTATTACHMENTII waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Upload Verify</button>
</div>
</div>
</div>
  <!-- Second Upload End-->
  
</div> 
</br>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('GRBI_PASSPORTVERIFY','GRBI_PASSPORT','passport','GRBI_PASSPORTATTACHMENT','GRBI_CUSID','Upload Passport','GRBI_PASSUPLOADVERIFY','Passport')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 
</div>        
  </div>  
<br>
<div class="row FormRows FormRowsNS m-b-0 Utility" style="display:none">
<div class="col-md-12">
<div class="md-form">
<input type="text" id="GRBI_UBVERIFYTYPE" data-FetchValidateArea="VERIFYTYPE" name="GRBI_UBVERIFYTYPE" disabled class="form-control GRBIDBfields DSVLBL" value="">
<label for="GRBI_UBVERIFYTYPE" class="">Utility Bill Verification Type</label>
</div>
</div>

<div class="col-md-12">
 <div class="md-form"> 
<input type="text" id="GRBI_UTILITYPROOF" data-FetchValidateArea="UTILITYPROOF" name="GRBI_UTILITYPROOF" disabled class="form-control GRBIDBfields DSVLBL" value="">
<label for="GRBI_UTILITYPROOF" class="">Proof type</label>
</div>
</div>




<div class="col-md-12">
  <div class="row" >                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="GRBI_SERVICEPRO" data-FetchValidateArea="PROVIDER" name="GRBI_SERVICEPRO" hidden="hidden"  class="form-control GRBIDBfields" value="">
<input type="text" id="GRBI_UBSTATE" data-FetchValidateArea="STATE" name="GRBI_UBSTATE" hidden="hidden"  class="form-control GRBIDBfields" value="">
<input type="text" id="GRBI_LLCITY" data-FetchValidateArea="CITY" name="GRBI_LLCITY" hidden="hidden"  class="form-control GRBIDBfields" value="">
<input type="text" id="GRBI_UTILITY"  data-FetchValidateArea="Utility" data-FetchValidate="GRBI_UTILITY" data-link="GRBI_UTILITY|GRBI_UTILITYVERIFY|Utility1|Utilityupload|Utilityview|GRBI_UTILITYATTACHMENT"  onblur="CHKSAMEKYC('GRBI_UTILITY','Utility');" maxlength="20" name="GRBI_UTILITY" class="GRBIDBfields datalink form-control validate">
<label for="GRBI_UTILITY" class="UtilityLable">Utility Bill *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="GRBI_UTILITYVERIFY" hidden="hidden" name="GRBI_UTILITYVERIFY" class="form-control GRBIDBfields">
<!--<button type="button" data-Validatearia="GRBI_DRIVLICNSVERIFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('GRBI_DRIVLICNS','dl','GRBI_DRIVLICNSVERIFY','','','','GRBI_DOB','GRBI_CUSID');SavePersInfo()" data-Validatearia="GRBI_DRIVLICNSVERIFY" data-validate="dl"  class="btn  waves-effect GRBI_DRIVLICNS btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button" data-Validatearia="GRBI_UTILITYVERIFY" data-field="GRBI_UBVERIFYTYPE|GRBI_SERVICEPRO|GRBI_CUSTYPE|GRBI_CUSID|GRBI_LLCITY" onclick="CheckKYCDetl(this,'GRBI_UTILITY','GRBI_UTILITYVERIFY','ELECTRICITY BILL');" data-field="GRBI_DOB||GRBI_CUSTYPE|GRBI_CUSID" data-Validatearia="GRBI_UTILITYVERIFY" data-validate="Utility"  class="btn  waves-effect GRBI_UTILITY btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
<!--<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('GRBI_UTILITYVERIFY','GRBI_UTILITY','Utility','GRBI_UTILITYATTACHMENT','GRBI_CUSID','Upload Utility Bill','UTILITY BILL')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> -->
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
<div id="GRBI_UTILITYATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_UTILITYATTACHMENT,'GRBI_UTILITYATTACHMENT','Driving License','Utilityview')" class="GRBI_UTILITYATTACHMENT" >
    </a>
    <input type="text" id="GRBI_UTILITYATTACHMENT" data-val="Utility Bill Authentication" hidden="hidden" data-Validate="GRBI_UTILITYATTACHMENT" data-field="GRBI_UTILITYUPLOADVERIFY"  name="GRBI_UTILITYATTACHMENT" class="form-control Utility File GRBIDBfields">
   <span class="name1"> Upload Utility Bill</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter Utilityview">
<div class="md-form">
<div class="GRBI_UTILITYATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD" onclick="ReuploadFile(GRBI_UTILITYATTACHMENT);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW" onclick="GrdDocDwnld('GRBI_UTILITYATTACHMENT')" class="rounded " alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div>  
</div> 
</br>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('GRBI_UTILITYVERIFY','GRBI_UTILITY','Utility','GRBI_UTILITYATTACHMENT','GRBI_CUSID','Upload Utility Bill','GRBI_UTILITYUPLOADVERIFY','Utility Bills')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 

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
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');" id="BTNKARZAGRD" name="BTNKARZAGRD" />
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
        <button type="button" id="KarzaPopup" data-aria="GRBI_CUSFISNAM|GRBI_CUSLSTNAM|GRBI_FATHRNAM|GRBI_DOB|CADI_ADDRLINI|CADI_ADDRLINII|GRBI_GENTER" class="btn btn-yel FCBDDBfields Btxt2 KarzaSmt">Submit</button>
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
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SNONIGSTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','PANKARZAGRD');" id="BTNPANKARZAGRD" name="BTNPANKARZAGRD" />
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
        <button type="button" id="GSTKarzaPopup" data-aria="GRBI_GSTNUM" class="btn btn-yel FCBDDBfields Btxt2 GstKarzaSmt">Submit</button>
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