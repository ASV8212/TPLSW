


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
<div class="col-md-3  Formcol-mdLR">
<div class="Ntxt6 " >Customer Type</div>
<div class="Btxt5 CBSIAPPINFO LSbrd" id="APFI_CUSTYPE" name="APFI_CUSTYPE"></div>
</div>  

<div class="col-md-3 Formcol-mdLR">
<div class="Ntxt6 " >Branch</div>
<div class="Btxt5 CBSIAPPINFO LSbrd" id="APFI_BRANCH" name="APFI_BRANCH"></div>
</div>  

<div class="col-md-3 Formcol-mdLR">
<div class="Ntxt6" >Loan Type</div>
<div class="Btxt5 CBSIAPPINFO LSbrd" id="APFI_LONTYPE" name="APFI_LONTYPE"></div>
</div>  

<div class="col-md-3 Formcol-mdLR">
<div class="Ntxt6" >Sub Loan Type</div>
<div class="Btxt5 CBSIAPPINFO" id="APFI_SUBLONTYPE" name="APFI_SUBLONTYPE"></div>
</div>  

</div>  

   </div>
</br>
</br>
<input type="text" id="KARZASTATUS" name="KARZASTATUS" hidden="hidden" class="form-control DataNormal" value="">
<div class="">

<div class="row FormRows m-b-0">
  
<div class="col-md-8  Formcol-mdLR">
  <select class="mdb-select md-form colorful-select dropdown-primary GRBIDBfields GRBIMndtry" onchange="CheckRelatOther();" id="GRBI_RELATIONSHIP" name="GRBI_RELATIONSHIP">
                        <option value="" selected>--Select--</option>
                              <option value="Brother">Brother</option>
                              <option value="Friend">Friend</option>
                              <option value="Father">Father</option>
			                  <option value="Mother">Mother</option>
			                  <option value="Other">Other</option>
                        </select>
    <label class="mdb-main-label BTxt9">Relationship with Applicant *</label>
</div>  
</div>

</div>
<div class="Relationother">

<div class="row FormRows m-b-0">
  
<div class="md-form">
<input type="text" id="GRBI_OTHERRELATION" maxlength="25" name="GRBI_OTHERRELATION" class=" GRBIDBfields  IsAlphaFields  form-control validate">
<label for="GRBI_OTHERRELATION" class="">Other*</label>
</div>  
</div>

</div>
<div class="">

 <div class="row FormRows m-b-0 KYCInfo">
                                    <!--First column-->
                                    <div class="col-md-12 Formcol-mdLR Btxt1 OKYCD">
Fill KYC Details
 </div>
 </div>

<div>

 <div class="row FormRows FormRowsNS m-b-0">
<div class="col-md-12">
  <div class="row"> 
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="GRBI_PAN" data-FetchValidateArea="pan" data-FetchValidate="GRBI_PAN" maxlength="10" data-link="GRBI_PAN|GRBI_PANVERIFY|pan|panupload|panview|GRBI_PANATTACHMENT|Upload PAN ID|GRBI_DEDUPEVERIFY" name="GRBI_PAN" data-validate="GRBI_CUSTYPE|GRBI_CONSTITUTION"   class="GRBIDBfields datalink NoSpecialChar form-control IsPanFields validate" onchange="DupPanval('GRBI_PRCSID','GRBI_PAN','GRBI_CONSTITUTION','GRBI_CUSID');" >
<label for="GRBI_PAN" data-error="wrong" data-success="right" class="">PAN*</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="GRBI_PANVERIFY" hidden="hidden" name="GRBI_PANVERIFY" class="form-control GRBIDBfields">
<!--<button type="button" data-Validatearia="GRBI_PANVERIFY" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SNONIGSTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4,5','PANKARZAGRD');CheckValidPanKyc('GRBI_PAN','GRBI_PANVERIFY','GRBI_CUSFISNAM','GRBI_CUSLSTNAM','GRBI_CUSTYPE','GRBI_CUSID','','','GREI_INCCONSID','GREI_INCCONSID','GRBI_PROFILE');ChkCusConti('GRBI_CUSTYPE','GRBI_CONSTITUTION','GRBI_CUSFISNAM');" data-validate="pan" class="btn GRBI_PAN waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button" data-Validatearia="GRBI_PANVERIFY" onclick="CheckKYCDetl(this,'GRBI_PAN','GRBI_PANVERIFY','PAN');" data-field="GRBI_CUSFISNAM|GRBI_CUSLSTNAM|GRBI_CUSTYPE|GRBI_CUSID" data-validate="pan" class="btn GRBI_PAN waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
</div>
</div>  
</div>                                                          
<div class="row pan pan1" style="display:none">
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR panupload">
<div class="md-form">
 <table>
 <tr>
 <td>
  <div id="GRBI_PANATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_PANATTACHMENT,'GRBI_PANATTACHMENT','PAN','panview')" class="GRBI_PANATTACHMENT"  >
    </a>
    <input type="text" id="GRBI_PANATTACHMENT" data-val="PAN ID" hidden="hidden" data-Validate="GRBI_PANATTACHMENT"  name="GRBI_PANATTACHMENT" class="form-control pan GRBIDBfields">
    <span class="name1"> Upload PAN ID </span> 
  </div> 
  </td> 
</tr>
</table>
</div>    
</div>  
<div class="col-md-4 panview">
<div class="md-form Formcol-mdLR TxtCenter">
<div class="GRBI_PANATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded ReUpld" title="UPLOAD" onclick="ReuploadFile(GRBI_PANATTACHMENT);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('GRBI_PANATTACHMENT')" class="rounded " alt="Cinque Terre " width="35" height="25"> </div>

</div>
</div>  
</div>
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
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_FORM60A,'GRBI_FORM60A')" class="GRBI_FORM60A"  >
    </a>
    <input type="text" id="GRBI_FORM60A" hidden="hidden" data-Validate="GRBI_FORM60A"  name="GRBI_FORM60A" class="form-control GRBIDBfields">  
 <span class="name">Upload Form 60</span>
  </div> 
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
<input type="text" id="GRBI_CKYC" maxlength="14" disabled data-link="GRBI_CKYC|GRBI_CKYCVERIFY|voter|voterupload|voterview" name="GRBI_CKYC" class="GRBIDBfields datalink NoSpecialChar IsNumberFields form-control validate">
<label for="GRBI_CKYC" data-error="wrong" data-success="right" class="">CKYC Number</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="GRBI_CKYCVERIFY" hidden="hidden" name="GRBI_CKYCVERIFY" class="form-control GRBIDBfields">
<button type="button" data-Validatearia="GRBI_CKYCVERIFY" disabled data-validate="CKYC" class="btn GRBI_CKYC waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>
</div>
</div>  
</div>
  </div>
  </div>
 </br>
  <div class="row FormRows m-b-0 OtherKYCInfo" style="display:none">

                            <!--First column-->
 <div class="col-md-12 Formcol-mdLR Btxt1 "> Other KYC Details </div>
 </div> 
  
     
<div class="row FormRows FormRowsNS m-b-0 voter" style="display:none">
<div class="col-md-12">
  <div class="row" > 
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="GRBI_VOTERID" data-FetchValidateArea="voter" data-FetchValidate="GRBI_VOTERID" data-link="GRBI_VOTERID|GRBI_VOTERIDVEIRFY|voter|voterupload|voterview|GRBI_VOTERIDATTACHMENT" maxlength="20" name="GRBI_VOTERID" class="GRBIDBfields datalink NewVoterField form-control validate">
<label for="GRBI_VOTERID"  class="">Voter ID *</label>
</div>    
</div>  

<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="GRBI_VOTERIDVEIRFY" hidden="hidden" name="GRBI_VOTERIDVEIRFY" class="form-control GRBIDBfields">
<!--<button type="button" data-Validatearia="GRBI_VOTERIDVEIRFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('GRBI_VOTERID','voter','GRBI_VOTERIDVEIRFY','','','','','GRBI_CUSID');SavePersInfo()" data-validate="voter"  class="btn GRBI_VOTERID waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button" data-Validatearia="GRBI_VOTERIDVEIRFY" onclick="CheckKYCDetl(this,'GRBI_VOTERID','GRBI_VOTERIDVEIRFY','VOTER ID');" data-field="GRBI_CUSFISNAM|GRBI_CUSLSTNAM|GRBI_CUSTYPE|GRBI_CUSID"  data-validate="voter"  class="btn GRBI_VOTERID waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
<!--<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('GRBI_VOTERIDVEIRFY','GRBI_VOTERID','voter','GRBI_VOTERIDATTACHMENT','GRBI_CUSID',' Upload Voters ID')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> -->
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('GRBI_VOTERIDVEIRFY','GRBI_VOTERID','voter','GRBI_VOTERIDATTACHMENT','GRBI_CUSID','Upload Voters ID','GRBI_VOTERUPLOADVERIFY','Voter ID')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20">  
</div>
</div>  
</div>
<div class="row voter voter1" style="display:none">                                 <!--First column-->
<div class="col-md-8  Formcol-mdLR voterupload">

<div class="md-form">
<table><tr>
<td>
<div id="GRBI_VOTERIDATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_VOTERIDATTACHMENT,'GRBI_VOTERIDATTACHMENT','Voter ID','voterview')" class="GRBI_VOTERIDATTACHMENT" >
    </a>
    <input type="text" id="GRBI_VOTERIDATTACHMENT" data-val="Voter's ID" hidden="hidden" data-Validate="GRBI_VOTERIDATTACHMENT" name="GRBI_VOTERIDATTACHMENT" class="form-control voter GRBIDBfields">
    
<span class="name1"> Upload Voter's ID</span>
 </div>
</td>
</tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter voterview">
<div class="md-form">
<div class="GRBI_VOTERIDATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(GRBI_VOTERIDATTACHMENT);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('GRBI_VOTERIDATTACHMENT')"  class="rounded " alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div>  
</div> 

</div>
</div>        
</br>     
<div class="row FormRows FormRowsNS m-b-0 AADHAR" style="display:none">
<div class="col-md-12">
  <div class="row" >
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">

<div class="md-form">
<input type="text" id="GRBI_AADHAR"  data-FetchValidateArea="AADHAR" data-FetchValidate="GRBI_AADHAR" data-link="GRBI_AADHAR|GRBI_AADHARVERIFY|AADHAR1|AADHARupload|AADHARview|GRBI_AADHARATTACHMENT" name="GRBI_AADHAR" value="" class="GRBIDBfields IsNumberFields IsAadharFields  form-control validate">
<label for="GRBI_AADHAR" class="">Aadhar *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="GRBI_AADHARVERIFY" hidden="hidden" name="GRBI_AADHARVERIFY" class="form-control GRBIDBfields">
<!--<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('GRBI_AADHARVERIFY','GRBI_AADHAR','AADHAR','GRBI_AADHARATTACHMENT','GRBI_CUSID','Upload Aadhar ID')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> -->
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('GRBI_AADHARVERIFY','GRBI_AADHAR','AADHAR','GRBI_AADHARATTACHMENT','GRBI_CUSID','Upload Aadhar ID','GRBI_AADHARUPLOADVERIFY','Aadhar')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 
<!-- <button type="button" data-Validatearia="GRBI_AADHARVERIFY" data-validate="AADHAR" class="btn  waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button> -->
</div>
</div> 
</div> 
<div class="row">
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">

<div class="md-form">
<table>
<tr>
<td>
<div id="GRBI_AADHARATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_AADHARATTACHMENT,'GRBI_AADHARATTACHMENT','Aadhar')" class="GRBI_AADHARATTACHMENT"  >
    </a>
    <input type="text" id="GRBI_AADHARATTACHMENT" hidden="hidden" data-Validate="GRBI_AADHARATTACHMENT"  name="GRBI_AADHARATTACHMENT" class="form-control AADHARMndtry GRBIDBfields">
    
<span class="name1"> Upload Aadhar's ID</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<div class="GRBI_AADHARATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD"  onclick="ReuploadFile(GRBI_AADHARATTACHMENT);" class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW" onclick="GrdDocDwnld('GRBI_AADHARATTACHMENT')" class="rounded " alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div>  
</div> 
</div>
</div>  
</br>              
 <div class="row FormRows FormRowsNS m-b-0 dl" style="display:none">
<div class="col-md-12">
<div class="row" >                                 <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="GRBI_DRIVLICNS"  data-FetchValidateArea="dl" data-FetchValidate="GRBI_DRIVLICNS" maxlength="20" data-link="GRBI_DRIVLICNS|GRBI_DRIVLICNSVERIFY|dl|dlupload|dlview|GRBI_DRIVELICATTACHMENT" name="GRBI_DRIVLICNS" class="GRBIDBfields datalink form-control validate">
<label for="GRBI_DRIVLICNS" class="">Driving License *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="GRBI_DRIVLICNSVERIFY" hidden="hidden" name="GRBI_DRIVLICNSVERIFY" class="form-control GRBIDBfields">
<!--<button type="button" data-Validatearia="GRBI_DRIVLICNSVERIFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('GRBI_DRIVLICNS','dl','GRBI_DRIVLICNSVERIFY','','','','GRBI_DOB','GRBI_CUSID');SavePersInfo()" data-validate="dl"  class="btn GRBI_DRIVLICNS waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button" data-Validatearia="GRBI_DRIVLICNSVERIFY" onclick="CheckKYCDetl(this,'GRBI_DRIVLICNS','GRBI_DRIVLICNSVERIFY','DRIVING LICENSE');" data-field="GRBI_DOB||GRBI_CUSTYPE|GRBI_CUSID" data-validate="dl"  class="btn GRBI_DRIVLICNS waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
<!--<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('GRBI_DRIVLICNSVERIFY','GRBI_DRIVLICNS','dl','GRBI_DRIVELICATTACHMENT','GRBI_CUSID','Upload Driving License ID')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> -->
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('GRBI_DRIVLICNSVERIFY','GRBI_DRIVLICNS','dl','GRBI_DRIVELICATTACHMENT','GRBI_CUSID','Upload Driving License ID','GRBI_DLUPLOADVERIFY','Driving License')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 
</div>
</div> 
</div>
<div class="row dl dl1" style="display:none">
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR dlupload">
<div class="md-form">
<table>
<tr>
<td>
<div id="GRBI_DRIVELICATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_DRIVELICATTACHMENT,'GRBI_DRIVELICATTACHMENT','Driving License','dlview')" class="GRBI_DRIVELICATTACHMENT"  >
    </a>
    <input type="text" id="GRBI_DRIVELICATTACHMENT" data-val="Driving License ID"  data-Validate="GRBI_DRIVELICATTACHMENT" hidden="hidden"  name="GRBI_DRIVELICATTACHMENT" class="form-control dl GRBIDBfields">
    
<span class="name1"> Upload Driving License ID</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter dlview">
<div class="md-form">
<div class="GRBI_DRIVELICATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD" onclick="ReuploadFile(GRBI_DRIVELICATTACHMENT);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW"  onclick="GrdDocDwnld('GRBI_DRIVELICATTACHMENT')" class="rounded " alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div>  
</div> 
</div> 
</div> 
</br>
<div class="row FormRows FormRowsNS m-b-0 passport" style="display:none">
<div class="col-md-12">
  <div class="row" >                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="GRBI_PASSPORT" data-FetchValidateArea="passport" data-FetchValidate="GRBI_PASSPORT" maxlength="24" onblur="CHKSAMEKYC('GRBI_PASSPORT','PASSPORT');" data-link="GRBI_PASSPORT|GRBI_PASSPORTVERIFY|passport|passportupload|passportview|GRBI_PASSPORTATTACHMENT"  name="GRBI_PASSPORT" class="GRBIDBfields form-control validate">
<label for="GRBI_PASSPORT"  class="">File No.- Passport No. *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="GRBI_PASSPORTVERIFY" hidden="hidden" name="GRBI_PASSPORTVERIFY" class="form-control GRBIDBfields">
<!--<button type="button" data-Validatearia="GRBI_PASSPORTVERIFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('GRBI_PASSPORT','passport','GRBI_PASSPORTVERIFY','GRBI_CUSFISNAM','GRBI_CUSLSTNAM','','GRBI_DOB','GRBI_CUSID');SavePersInfo()" data-validate="Passport"  class="btn GRBI_PASSPORT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>-->
<button type="button" data-Validatearia="GRBI_PASSPORTVERIFY" onclick="CheckKYCDetl(this,'GRBI_PASSPORT','GRBI_PASSPORTVERIFY','PASSPORT');" data-field="GRBI_DOB||GRBI_CUSTYPE|GRBI_CUSID" data-validate="Passport"  class="btn GRBI_PASSPORT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
<!--<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('GRBI_PASSPORTVERIFY','GRBI_PASSPORT','Passport','GRBI_PASSPORTATTACHMENT','GRBI_CUSID','Upload Passport')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> -->
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('GRBI_PASSPORTVERIFY','GRBI_PASSPORT','passport','COBI_PASSPORTATTACHMENT','GRBI_CUSID','Upload Passport','GRBI_PASSUPLOADVERIFY','Passport')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 
</div>
</div>  
</div>
<div class="row passport passport1" style="display:none">                                   <!--First column-->
<div class="col-md-8  Formcol-mdLR passportupload">
<div class="md-form">
<table>
<tr>
<td>
<div id="GRBI_PASSPORTATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(GRBI_PASSPORTATTACHMENT,'GRBI_PASSPORTATTACHMENT','Passport')" class="GRBI_PASSPORTATTACHMENT"  >
    </a>
    <input type="text" id="GRBI_PASSPORTATTACHMENT" data-val="Passport" hidden="hidden" data-Validate="GRBI_PASSPORTATTACHMENT" name="GRBI_PASSPORTATTACHMENT" class="form-control passport GRBIDBfields">
<span class="name1"> Upload Passport</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter passportview">
<div class="md-form">
<div class="GRBI_PASSPORTATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD" onclick="ReuploadFile(GRBI_PASSPORTATTACHMENT);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW" onclick="GrdDocDwnld('GRBI_PASSPORTATTACHMENT')" class="rounded " alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div>  
</div> 
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
  </div>                                                            <!--Main First row-->
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
        <button type="button" id="KarzaPopup" data-aria="GRBI_CUSFISNAM|GRBI_CUSLSTNAM|GRBI_FATHRNAM|GRBI_DOB|GRAI_ADDRLINI|GRAI_ADDRLINII|GRBI_GENTER"" class="btn btn-yel FCBDDBfields Btxt2 KarzaSmt">Submit</button>
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
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SNONIGSTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#GRBI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4,5','PANKARZAGRD');" id="BTNPANKARZAGRD" name="BTNPANKARZAGRD" />
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
                                  <!--   </div>
                                </div>   -->