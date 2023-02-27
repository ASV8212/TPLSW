   
                <!--Main row-->
             <!--Card-->
 <div class="">
                            <!--Admin panel-->
  <div class="admin-panel">

<!-- Start -->
         <a type="button" id="GoBack"class="Btxt4 GoBack" href="#"><- BACK</a>
         </br>
         </br>
         <input type="text" id="LERP_PRCSID" hidden="hidden" name="LERP_PRCSID" class="form-control LERPDBfields">
         <input type="text" id="LERP_ACTIVITYID" hidden="hidden" name="LERP_ACTIVITYID" class="form-control LERPDBfields">
         <input type="text" id="LERP_CREATEDBY" hidden="hidden" name="LERP_CREATEDBY" class="form-control LERPDBfields">
         <input type="text" id="LERP_DTCREATED" hidden="hidden" name="LERP_DTCREATED" class="form-control LERPDBfields">
         <input type="text" id="LERP_MODIFIEDBY" hidden="hidden" name="LERP_MODIFIEDBY" class="form-control LERPDBfields">
         <input type="text" id="LERP_DTMODIFIED" hidden="hidden" name="LERP_DTMODIFIED" class="form-control LERPDBfields">
         <input type="text" id="LERP_PROPERTYNO" hidden="hidden" name="LERP_PROPERTYNO" class="form-control LERPDBfields">
        
		
		<input type="text" id="LERP_MAXTEXTROW" hidden="hidden" name="LERP_MAXTEXTROW" class="form-control LERPDBfields">
          <input type="text" id="LERP_MUSTTO" hidden="hidden" name="LERP_MUSTTO" class="form-control LERPDBfields">
          <input type="text" id="LERP_NICETO" hidden="hidden" name="LERP_NICETO" class="form-control LERPDBfields">
        
  <!--  card -->
  <div class="card cardNS">
    <!-- Card body -->
        <div class="card-body px-lg-5 pt-0">
        <form>
        </br>	
            <div class="form-row">
        		<div class="col Btxt3">Legal Details</div>
        	</div>
        	<div class="form-row">
        		<div class="col Btxt10">PROPERTY DETAILS AS PER DOCUMENT </div>
        	</div>
                        <div class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LERP_PROPADDR1" maxlength="30"   name="LERP_PROPADDR1" class="form-control LERPMndtry AddrNoSpecialChar LERPDBfields">
                    <label for="LERP_PROPADDR1" class="">Plot Number<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LERP_PROPADDR2" maxlength="30"   name="LERP_PROPADDR2" class="form-control LERPMndtry AddrNoSpecialChar LERPDBfields">
                    <label for="LERP_PROPADDR2" class="">Door Number<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                  <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LERP_BUILDNAME" maxlength="100" name="LERP_BUILDNAME" class="form-control  AddrNoSpecialChar LERPDBfields">
                    <label for="LERP_BUILDNAME" class="">Building Name/House Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>
            </div>
			
			
			
			
          <div class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LERP_STREETNAME" maxlength="100"   name="LERP_STREETNAME" class="form-control LERPMndtry AddrNoSpecialChar LERPDBfields">
                    <label for="LERP_STREETNAME" class="">Street Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
               <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LERP_DISTICT" maxlength="100"  name="LERP_DISTICT" class="form-control LERPMndtry NoSpecialChar  LERPDBfields">
                    <label for="LERP_DISTICT" class="">Locality<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                  <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LERP_SURVEYNO" maxlength="30"   name="LERP_SURVEYNO" class="form-control LERPMndtry AddrNoSpecialChar LERPDBfields">
                    <label for="LERP_SURVEYNO" class="">Survey Number<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
            </div>
		   
		     <div class="form-row"> 
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LERP_PINCODE" name="LERP_PINCODE" maxlength="6" onblur="Pindetls(this,'LERP_STATE','LERP_CITY','LPHE_DISTICT')"class="IsNumberFields NoSpecialChar LERPMndtry  IsPinFielde  form-control LERPDBfields  ">
                    <label for="LERP_PINCODE" class="">Pin code<span class="MndtryAstr">*</span></label>
                  </div>
                </div>

                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LERP_CITY" disabled name="LERP_CITY" class="form-control IsAlphaFields NoSpecialChar LERPDBfields">
                    <label for="LERP_CITY" class="">City<span class="MndtryAstr"></span></label>
                  </div>
                </div>
                <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LERP_STATE" disabled name="LERP_STATE" class="form-control IsAlphaFields NoSpecialChar LERPDBfields  ">
                    <label for="LERP_STATE" class="">State<span class="MndtryAstr"></span></label>
                  </div>
                </div>
           </div>  
		   
             <div class="form-row ">
             <div class="col-md-4">     
             <div class="md-form">
               <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" class="custom-control-input LERPDBfields" value="Yes" id="ClearYes" name="LERP_MARKATABE">
     <label class="custom-control-label" for="ClearYes">Yes</label>
   </div>
  <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input LERPDBfields" value="No" id="ClearNO" name="LERP_MARKATABE">
    <label class="custom-control-label" for="ClearNO">No</label>
   </div>
</div>
                  <label class="mdb-main-label BTxt9">Clear & Marketable<span class="MndtryAstr"></span></label>      
                  </div>
                </div> 
                 <div class="col-md-4">     
      <div class="md-form">
               <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" class="custom-control-input LERPDBfields" value="Yes" id="AgriYes" name="LERP_AGRICULAT">
     <label class="custom-control-label" for="AgriYes">Yes</label>
   </div>
  <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input LERPDBfields" value="No" id="AgriNo" name="LERP_AGRICULAT">
    <label class="custom-control-label" for="AgriNo">No</label>
   </div>
</div>
                  <label class="mdb-main-label BTxt9">Non-agricultural Property<span class="MndtryAstr"></span></label>      
                  </div>
                </div> 
      <div class="col-md-4">
          <label class="">Upload Document<span class="MndtryAstr">*</span></label>
          <div class="md-form">
     <div>
    <table>
    <tr>
     <td>
       <div id="LERP_ATTACHMENTUPLOAD"  class="file-field">
         <a class=""> 
            <i class="fa fa-plus imgAdd" aria-hidden=""></i>
            <input type="file"  name="datafile" onchange="DocFldUpldHndlr(LERP_ATTACHMENT,'LERP_ATTACHMENT','LEGAL')" class="LERP_ATTACHMENT"  >
          </a> 
           <input type="text" id="LERP_ATTACHMENT" hidden="hidden" data-Validate="LERP_ATTACHMENT"  name="LERP_ATTACHMENT" class="form-control File DOCMndtry  LERPDBfields">
           <span class="name">Click Here to Upload</span>
      </div>
    </td>
    </tr>
   </table>
  </div> 
    <div class="LERP_ATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(LERP_ATTACHMENT);" title="UPLOAD"  class="rounded BTNHIDE" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('LERP_ATTACHMENT')" alt="Cinque Terre" width="35" height="25"> </div> 
      </div>      
        </div> 
    </div>
	       <div class="form-row">
               <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LERP_SRO" name="LERP_SRO" maxlength="50" class="form-control LERPMndtry  NoSpecialChar LERPDBfields">
                    <label for="LERP_SRO" class="">SRO<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				 <div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LERP_TITLEDOCNAME" maxlength="100"  name="LERP_TITLEDOCNAME" class="form-control LERPMndtry NoSpecialChar LERPDBfields">
                    <label for="LERP_TITLEDOCNAME" class="">Title Document Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class=" col-md-4">
                  <div class="md-form">
                    <input type="text" id="LERP_TITLEDOCNO" maxlength="100"  name="LERP_TITLEDOCNO" class="form-control LERPMndtry  NoSpecialChar LERPDBfields">
                    <label for="LERP_TITLEDOCNO" class="">Title Document Number<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
            </div>
			
			
			<div class="form-row">
	<div class=" col-md-4">
	   <div class="md-form">				  
<input type="text" id="LERP_UCVPROPDOC" data-val="UAM document"  hidden="hidden" data-Validate="LERP_UCVPROPDOC"  name="LERP_UCVPROPDOC" class="form-control voter File LERPDBfields">
<div class="LERP_UCVPROPDOC" style="display">  
<img src="ThemeproLO/Common/Images/Eyeview.png" title="UCV PROP DOC"  class="rounded" onclick="GrdDocDwnld('LERP_UCVPROPDOC')" alt="Cinque Terre" width="35" height="25"><span>Uploaded Security Document</div>
</div>
</div>
</div>
			
			
			
			
               <div class="form-row">
        		<div class="col Btxt10">MUST TO HAVE</div>
        	</div>
         <div class="HyperControls form-row"> 
   <a onclick="AddPageMultiData('','','','MUSTTOHAVE','LEMUDBfields');ADDROWNO();" class="Btxt4 FltRight BTNHIDE"  href="#">+ Add a Point</a>
  </div>	
        <div data-for="MUSTTOHAVE" class="MUSTTOHAVE"> 
      </div>
      
       <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="MUSTTOHAVE" style="display:none">
       <div data-row="" class="card-body px-lg-5 pt-0 DYNROW">
          <input type="text" id="LEMU_PRCSID" hidden="hidden" name="LEMU_PRCSID" class="form-control LEMUDBfields">
         <input type="text" id="LEMU_ACTIVITYID" hidden="hidden" name="LEMU_ACTIVITYID" class="form-control LEMUDBfields">
         <input type="text" id="LEMU_CREATEDBY" hidden="hidden" name="LEMU_CREATEDBY" class="form-control LEMUDBfields">
         <input type="text" id="LEMU_DTCREATED" hidden="hidden" name="LEMU_DTCREATED" class="form-control LEMUDBfields">
         <input type="text" id="LEMU_MODIFIEDBY" hidden="hidden" name="LEMU_MODIFIEDBY" class="form-control LEMUDBfields">
         <input type="text" id="LEMU_DTMODIFIED" hidden="hidden" name="LEMU_DTMODIFIED" class="form-control LEMUDBfields">
         <input type="text" id="LEMU_PROPERTYNO"  hidden="hidden" name="LEMU_PROPERTYNO" class="form-control LEMUDBfields">
           <input type="text" id="LEMU_UNIQID"  hidden="hidden" name="LEMU_UNIQID" class="form-control LEMUDBfields">
		   
		    <input type="text" id="LEMU_OTCPDD" hidden="hidden"  name="LEMU_OTCPDD" class="form-control LEMUDBfields">
           <input type="text" id="LEMU_APPROVE" hidden="hidden"  name="LEMU_APPROVE" class="form-control LEMUDBfields">
		         <input type="text" id="LEMU_TXTROW" hidden="hidden"  name="LEMU_TXTROW" class="form-control LEMUDBfields">
       <div class="form-row">
         <div class=" col-md-11">
                 <div class="md-form">
                <span id="PROPTXTHDR" class="Btxt10"></span>    <input type="text" id="LEMU_TEXTVAL" maxlength="200"  name="LEMU_TEXTVAL" class="form-control MUSTMndtry LEMUDBfields  ">
                  </div>
              </div>
			  <div class=" col-md-1"> 
                  <div class="md-form">
                   <img src="ThemeproLO/Common/Images/Delete_Img.png"   class="DeleteMUST BTNHIDE DELBTN" alt="Cinque Terre" width="20" height="20"> 
                   </div>
                   </div>
           </div>    
      </div>
      </div>
           <div class="form-row">
        		<div class="col Btxt10">NICE TO HAVE</div>
        	   </div>  
 <div class="HyperControls form-row"> 
   <a onclick="AddPageMultiData('','','','NICETOHAVE','LRNDDBfields');ADDROWNONICE()" class="Btxt4 FltRight BTNHIDE"  href="#">+ Add a Point</a>
  </div>	
        <div data-for="NICETOHAVE" class="NICETOHAVE"> 
      </div>
       <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="NICETOHAVE" style="display:none">
       <div data-row="" class="card-body px-lg-5 pt-0  DYNROW">
         <input type="text" id="LRND_PRCSID" hidden="hidden" name="LRND_PRCSID" class="form-control LRNDDBfields">
         <input type="text" id="LRND_ACTIVITYID" hidden="hidden" name="LRND_ACTIVITYID" class="form-control LRNDDBfields">
         <input type="text" id="LRND_CREATEDBY" hidden="hidden" name="LRND_CREATEDBY" class="form-control LRNDDBfields">
         <input type="text" id="LRND_DTCREATED" hidden="hidden" name="LRND_DTCREATED" class="form-control LRNDDBfields">
         <input type="text" id="LRND_MODIFIEDBY" hidden="hidden" name="LRND_MODIFIEDBY" class="form-control LRNDDBfields">
         <input type="text" id="LRND_DTMODIFIED" hidden="hidden" name="LRND_DTMODIFIED" class="form-control LRNDDBfields">
         <input type="text" id="LRND_PROPERTYNO" hidden="hidden" name="LRND_PROPERTYNO" class="form-control LRNDDBfields">
		 
		  <input type="text" id="LRND_UNIQID" hidden="hidden" name="LRND_UNIQID" class="form-control LRNDDBfields">
		  <input type="text" id="LRND_TXTROW" hidden="hidden" name="LRND_TXTROW" class="form-control LRNDDBfields">
         <div class="form-row">
             <div class=" col-md-11">
                 <div class="md-form">
                  <span id="PROPTXTHDR" class="Btxt10"></span><input type="text" id="LRND_TEXTVAL" maxlength="200"   name="LRND_TEXTVAL" class="form-control NICEMndtry  LRNDDBfields  ">
                  </div>
              </div>
			  	<div class=" col-md-1"> 
                  <div class="md-form">
                   <img src="ThemeproLO/Common/Images/Delete_Img.png"   class="DeleteNICE BTNHIDE DELBTN" alt="Cinque Terre" width="20" height="20"> 
                   </div>
                   </div>
           </div>    
      </div></div>  
       <div class="modal-footer align-middle">
              <button type="button" id="save" data-aria="LSW_TLEGALDETAILS|LERP|LERP_PROPERTYNO|" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>
              <button type="button" id="Submit" data-for="FIOfficeVerify" data-row="" data-aria="LSW_TLEGALDETAILS|LERP|LERP_PROPERTYNO" class="btn btn-Syel waves-effect waves-light FormSave">Submit</button> 
           </div> 
       </form>     	
    </div>
 </div>
<!-- card -->
</div>
</div>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/UCV/ViewRpt/Script/LegalUpdateReport/LoadSubmit.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/UCV/ViewRpt/Script/LegalUpdateReport/Validation.js${DMY13}"></script> 
  
 <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
 <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
 <!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>   

               
                                  