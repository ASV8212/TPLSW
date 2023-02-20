


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

 <div class="row FormRows m-b-0 KYCInfo">

                                    <!--First column-->
<div class="col-md-12 Formcol-mdLR Btxt1 ">Fill KYC Details</div>
 </div>

<div>
 <div class="row FormRows FormRowsNS m-b-0">
       <div class="col-md-12" >
       <div class="row" >
                       <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="CBSI_PAN" name="CBSI_PAN" data-link="CBSI_PAN|CBSI_PANVERIFY|pan|panupload|panview|CBSI_PANATTACHMENT|Upload PAN ID" onblur="InactivePanCheck();" onchange="DupPanval('CBSI_PRCSID','CBSI_PAN','CBSI_CONSTITUTION','CBSI_CUSID')" data-validate="CBSI_CUSTYPE|CBSI_CONSTITUTION"  maxlength="10" class="form-control datalink NoSpecialChar IsPanFields CBSIMndtry CBSIDBfields validate">
<label for="CBSI_PAN" class="">PAN <span class="MndtryAstr">*</span></label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="CBSI_PANVERIFY" hidden="hidden" name="CBSI_PANVERIFY" class="form-control CBSIDBfields">
<button type="button" onclick="CheckValidPanKyc('CBSI_PAN','CBSI_PANVERIFY','CBSI_CUSFISNAM','CBSI_CUSLSTNAM','CBSI_CUSTYPE','CBSI_CUSID','CADI_ADDRLINI','CADI_ADDRLINII','CEMI_INCCONSID','CDOG_INCCONSID','CBSI_PROFILE');FncallDocChkLst(this,'Table3',{spname:'LSW_SNONIGSTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','PANKARZAGRD');" data-Validatearia="CBSI_PANVERIFY" data-validate="pan" class="btn CBSI_PAN waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
</div>
</div>  
</div> 
 <div class="row pan" style="display:none" >
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR panupload">
<div class="md-form">
<!--  <div id="PANUPLOAD" > <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="DocFldUpldHndlr(CBSI_PANAttachment,id)" id="PAN" class="rounded" alt="Cinque Terre" width="20" height="20"> Upload PAN ID </div>-->
 <table>
 <tr>
 <td>
  <div id="CBSI_PANATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_PANATTACHMENT,'CBSI_PANATTACHMENT','PAN','panview')" class="CBSI_PANATTACHMENT"  >
    </a>
    <input type="text" id="CBSI_PANATTACHMENT" data-val="PAN ID" hidden="hidden" data-Validate="CBSI_PANATTACHMENT"  name="CBSI_PANATTACHMENT" class="form-control pan File CBSIDBfields">
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
<div class="CBSI_PANATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded  ReUpld" title="UPLOAD" onclick="ReuploadFile(CBSI_PANATTACHMENT);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('CBSI_PANATTACHMENT')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div>
</div>  
</div> 
</br>

<div class="row" > 
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="CBSI_CKYC" maxlength="14" data-link="CBSI_CKYC|CBSI_CKYCVERIFY" name="CBSI_CKYC" disabled class="CBSIDBfields datalink NoSpecialChar IsNumberFields form-control validate">
<label for="CBSI_CKYC" data-error="wrong" data-success="right" class="">CKYC Number</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="CBSI_CKYCVERIFY" hidden="hidden" name="CBSI_CKYCVERIFY" class="form-control CBSIDBfields">
<button type="button" data-Validatearia="CBSI_CKYCVERIFY"  data-validate="CKYC" class="btn CBSI_CKYC waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button>
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
 <div class="col-md-12" >  
    <div class="row" >                                 <!--First column-->
<div class="col-md-8  Formcol-mdLR">
<div class="md-form">
<input type="text" id="CBSI_VOTERID" name="CBSI_VOTERID" data-FetchValidateArea="voter" data-FetchValidate="CBSI_VOTERID" data-link="CBSI_VOTERID|CBSI_VOTERIDVEIRFY|voter1|voterupload|voterview|CBSI_VOTERATTACHMENT" maxlength="10" onblur="CHKSAMEKYC('CBSI_VOTERID','voter');" class="CBSIDBfields datalink IsVoterFields form-control validate">
<label for="CBSI_VOTERID"  class="">Voter ID *</label>
</div>    
</div>  

<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="CBSI_VOTERIDVEIRFY" hidden="hidden" name="CBSI_VOTERIDVEIRFY" class="form-control File CBSIDBfields">
<button type="button" data-Validatearia="CBSI_VOTERIDVEIRFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('CBSI_VOTERID','voter','CBSI_VOTERIDVEIRFY','','','','','CBSI_CUSID')" data-Validatearia="CBSI_VOTERIDVEIRFY" data-validate="voter" class="btn CBSI_VOTERID  waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('CBSI_VOTERIDVEIRFY','CBSI_VOTERID','voter','CBSI_VOTERATTACHMENT','CBSI_CUSID',' Upload Voters ID')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 
</div>
</div>  
</div>  

 <div class="row voter voter1" style="display:none" >
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR voterupload">

<div class="md-form">
<!--<div id="VOTERUPLOAD"><img src="ThemeproLO/Common/Images/UploadImg.png" onclick="DocFldUpldHndlr(CBSI_VoterIDAttachment,id)" id="VOTER" class="rounded" alt="Cinque Terre" width="20" height="20"> Upload Voter ID </div>-->
<!-- <input type="file" name="datafile"  class="APP"  onchange="DocFldUpldHndlr(CBSI_VoterIDAttachment)">-->
<table><tr>
<td>
<div id="CBSI_VOTERATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_VOTERATTACHMENT,'CBSI_VOTERATTACHMENT','Voter ID','voterview')" class="CBSI_VOTERATTACHMENT"  >
    </a> 
<input type="text" id="CBSI_VOTERATTACHMENT" data-val="Voter ID" hidden="hidden" data-Validate="CBSI_VOTERATTACHMENT"  name="CBSI_VOTERATTACHMENT" class="form-control voter File CBSIDBfields">
<span class="name1"> Upload Voter's ID</span>
 </div>
</td>
</tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter voterview">
<div class="md-form">
<div class="CBSI_VOTERATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(CBSI_VOTERATTACHMENT);" title="UPLOAD  "  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('CBSI_VOTERATTACHMENT')" alt="Cinque Terre" width="35" height="25"> </div>
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
<input type="text" id="CBSI_AADHAR" maxlength="12" value="" data-FetchValidateArea="AADHAR" data-FetchValidate="CBSI_AADHAR" data-link="CBSI_AADHAR|CBSI_AADHARVERIFY|AADHAR1|AADHARupload|AADHARview|CBSI_AADHARATTACHMENT"   name="CBSI_AADHAR" class="CBSIDBfields IsNumberFields IsAadharFields form-control validate">
<label for="CBSI_AADHAR" class="">Aadhar *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="CBSI_AADHARVERIFY" hidden="hidden" name="CBSI_AADHARVERIFY" class="form-control CBSIDBfields">
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('CBSI_AADHARVERIFY','CBSI_AADHAR','AADHAR','CBSI_AADHARATTACHMENT','CBSI_CUSID','Upload Aadhar ID')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 

<!-- <button type="button" data-Validatearia="CBSI_AADHARVERIFY" data-validate="AADHAR" class="btn  waves-effect btn-yelInplain btn-sm BTNVerify">Verify</button> -->
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
<div id="CBSI_AADHARATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_AADHARATTACHMENT,'CBSI_AADHARATTACHMENT','Aadhar','AADHARview');" class="CBSI_AADHARATTACHMENT" >
    </a>
      <input type="text" id="CBSI_AADHARATTACHMENT" hidden="hidden" data-Validate="CBSI_AADHARATTACHMENT" name="CBSI_AADHARATTACHMENT" class="form-control File AADHARMndtry CBSIDBfields">
    
<span class="name"> Upload Aadhar's ID</span>
  </div>

</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter AADHARview">
<div class="md-form">
<div class="CBSI_AADHARATTACHMENT" style="display:none" > <img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD"  onclick="ReuploadFile(CBSI_AADHARATTACHMENT);" class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW"  class="rounded " onclick="GrdDocDwnld('CBSI_AADHARATTACHMENT')" alt="Cinque Terre" width="35" height="25"> </div>

</div>
</div>  
</div>  
</div> 
</div>        
     </br>       
 <div class="row FormRows FormRowsNS m-b-0 dl" style="display:none">

<div class="col-md-12">
  <div class="row" >                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR">

<div class="md-form">
<input type="text" id="CBSI_DRIVLICNS" data-FetchValidateArea="dl" data-FetchValidate="CBSI_DRIVLICNS" data-link="CBSI_DRIVLICNS|CBSI_DRIVLICNSVERIFY|dl1|dlupload|dlview|CBSI_DRIVINGLICATTACHMENT"  onblur="CHKSAMEKYC('CBSI_DRIVLICNS','DL');" maxlength="20" name="CBSI_DRIVLICNS" class="CBSIDBfields datalink form-control validate">
<label for="CBSI_DRIVLICNS" class="">Driving License *</label>
</div>    

</div>  

<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="CBSI_DRIVLICNSVERIFY" hidden="hidden" name="CBSI_DRIVLICNSVERIFY" class="form-control CBSIDBfields">
<button type="button" data-Validatearia="CBSI_DRIVLICNSVERIFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('CBSI_DRIVLICNS','dl','CBSI_DRIVLICNSVERIFY','','','','CBSI_DOB','CBSI_CUSID')" data-Validatearia="CBSI_DRIVLICNSVERIFY" data-validate="dl"  class="btn  waves-effect CBSI_DRIVLICNS btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('CBSI_DRIVLICNSVERIFY','CBSI_DRIVLICNS','dl','CBSI_DRIVINGLICATTACHMENT','CBSI_CUSID','Upload Driving License ID')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 
</div>
</div>  
</div>

<div class="row dl dl1" style="display:none" >
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR dlupload">

<div class="md-form">


<table>
<tr>
<td>
<div id="CBSI_DRIVINGLICATTACHMENTUPLOAD"  class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_DRIVINGLICATTACHMENT,'CBSI_DRIVINGLICATTACHMENT','Driving License','dlview')" class="CBSI_DRIVINGLICATTACHMENT" >
    </a>
    <input type="text" id="CBSI_DRIVINGLICATTACHMENT" data-val="Driving License ID" hidden="hidden" data-Validate="CBSI_DRIVINGLICATTACHMENT"  name="CBSI_DRIVINGLICATTACHMENT" class="form-control dl File CBSIDBfields">
    
   <span class="name1"> Upload Driving License ID</span>
  </div>
</td></tr></table>

</div>    
</div>  

<div class="col-md-4 Formcol-mdLR TxtCenter dlview">
<div class="md-form">
<div class="CBSI_DRIVINGLICATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD" onclick="ReuploadFile(CBSI_DRIVINGLICATTACHMENT);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW" onclick="GrdDocDwnld('CBSI_DRIVINGLICATTACHMENT')" class="rounded " alt="Cinque Terre" width="35" height="25"> </div>
 
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
<input type="text" id="CBSI_PASSPORT" data-FetchValidateArea="Passport" data-FetchValidate="CBSI_PASSPORT" maxlength="24" data-link="CBSI_PASSPORT|CBSI_PASSPORTVERIFY|passport1|passportupload|passportview|CBSI_PASSPORTATTACHMENT" name="CBSI_PASSPORT" onblur="CHKSAMEKYC('CBSI_PASSPORT','PASSPORT');"  class="CBSIDBfields datalink form-control validate">
<label for="CBSI_PASSPORT" class="">File No./Passport No. *</label>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter">
<div class="md-form">
<input type="text" id="CBSI_PASSPORTVERIFY" hidden="hidden" name="CBSI_PASSPORTVERIFY" class="form-control CBSIDBfields">
<button type="button"  data-Validatearia="CBSI_PASSPORTVERIFY" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#CBSI_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD');CheckValidKyc('CBSI_PASSPORT','passport','CBSI_PASSPORTVERIFY','CBSI_CUSFISNAM','CBSI_CUSLSTNAM','','CBSI_DOB','CBSI_CUSID')"  data-Validatearia="CBSI_PASSPORTVERIFY"  data-validate="passport"  class="btn CBSI_PASSPORT waves-effect btn-yelInplain btn-sm BTNVerify INTDSBV">Verify</button>
<img src="ThemeproLO/Common/Images/delete.png"  title="Delete" onclick="KYCDELETE('CBSI_PASSPORTVERIFY','CBSI_PASSPORT','passport','CBSI_PASSPORTATTACHMENT','CBSI_CUSID','Upload Passport')"  class="rounded KYCDEL" alt="Cinque Terre" width="20" height="20"> 

</div>
</div>  
</div>
<div class="row passport passport1" style="display:none" >
                                    <!--First column-->
<div class="col-md-8  Formcol-mdLR passportupload">
<div class="md-form">
<table>
<tr>
<td>
<div id="CBSI_PASSPORTATTACHMENTUPLOAD" class="file-field">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(CBSI_PASSPORTATTACHMENT,'CBSI_PASSPORTATTACHMENT','Passport','passportview')" class="CBSI_PASSPORTATTACHMENT"  >
    </a>
  <input type="text" id="CBSI_PASSPORTATTACHMENT" data-val="Passport" hidden="hidden" data-Validate="CBSI_PASSPORTATTACHMENT" name="CBSI_PASSPORTATTACHMENT" class="form-control passport File CBSIDBfields">
   <span class="name1"> Upload Passport</span>
  </div>
</td></tr></table>
</div>    
</div>  
<div class="col-md-4 Formcol-mdLR TxtCenter passportview">
<div class="md-form">
<div class="CBSI_PASSPORTATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png"  title="UPLOAD " onclick="ReuploadFile(CBSI_PASSPORTATTACHMENT);"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png"  title="VIEW"  onclick="GrdDocDwnld('CBSI_PASSPORTATTACHMENT')" class="rounded " alt="Cinque Terre" width="35" height="25"> </div>
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
        <button type="button" id="KarzaPopup" data-aria="CBSI_CUSFISNAM|CBSI_CUSLSTNAM|CBSI_FATHRNAM|CBSI_DOB|CADI_ADDRLINI|CADI_ADDRLINII|CBSI_GENTER" class="btn btn-yel FCBDDBfields Btxt2 KarzaSmt">Submit</button>
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