</br>
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="">
                            <!--Admin panel-->
     <div class="admin-panel">
 <div class="card CardNS">
    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0">
        <form>
            <input type="text" id="INUL_PRCSID" hidden="hidden" name="INUL_PRCSID" class="form-control INULDBfields">
            <input type="text" id="INUL_ACTIVITYID" hidden="hidden" name="INUL_ACTIVITYID" class="form-control INULDBfields">
            <input type="text" id="INUL_DTCREATED" hidden="hidden" name="INUL_DTCREATED" class="form-control INULDBfields"> 
            <input type="text" id="INUL_CREATEDBY" hidden="hidden" name="INUL_CREATEDBY" class="form-control INULDBfields">
            <input type="text" id="INUL_DTMODIFIED" hidden="hidden" name="INUL_DTMODIFIED" class="form-control INULDBfields">
            <input type="text" id="INUL_MODIFIEDBY" hidden="hidden" name="INUL_MODIFIEDBY" class="form-control INULDBfields">
        	</br>
        	<div class="form-row">
        		<div class="col Btxt3">Insurance Upload</div>
        	</div>
        	</br>
        	</br>
            </br>
           
            <div class="form-row ">
             <div class="col-md-4">
          <label class="">Health and PAC<span class="MndtryAstr"></span></label>
          <div class="md-form">
     <div>
    <table>
    <tr>
     <td>
       <div id="INUL_HEALTHATTCHUPLOAD"  class="file-field">
         <a class=""> 
            <i class="fa fa-plus imgAdd" aria-hidden=""></i>
            <input type="file"  name="datafile" onchange="DocFldUpldHndlr(INUL_HEALTHATTCH,'INUL_HEALTHATTCH','INSURENCE')" class="LERP_ATTACHMENT"  >
          </a> 
           <input type="text" id="INUL_HEALTHATTCH" hidden="hidden" data-Validate="INUL_HEALTHATTCH"  name="INUL_HEALTHATTCH" class="form-control File INULDBfields">
           <span class="name">Click Here to Upload</span>
      </div>
    </td>
    </tr>
   </table>
  </div> 
    <div class="INUL_HEALTHATTCH" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(INUL_HEALTHATTCH);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('INUL_HEALTHATTCH')" alt="Cinque Terre" width="35" height="25"> </div> 
      </div>      
        </div> 
        </div>
           
          </br> 
                 <div class="form-row ">
             <div class="col-md-4">
          <label class="">Property<span class="MndtryAstr"></span></label>
          <div class="md-form">
     <div>
    <table>
    <tr>
     <td>
       <div id="INUL_PROPERTYATTCHUPLOAD"  class="file-field">
         <a class=""> 
            <i class="fa fa-plus imgAdd" aria-hidden=""></i>
            <input type="file"  name="datafile" onchange="DocFldUpldHndlr(INUL_PROPERTYATTCH,'INUL_PROPERTYATTCH','INSURANSE')" class="INUL_PROPERTYATTCH"  >
          </a> 
           <input type="text" id="INUL_PROPERTYATTCH" hidden="hidden" data-Validate="INUL_PROPERTYATTCH"  name="INUL_PROPERTYATTCH" class="form-control File INULDBfields">
           <span class="name">Click Here to Upload</span>
      </div>
    </td>
    </tr>
   </table>
  </div> 
    <div class="INUL_PROPERTYATTCH" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(INUL_PROPERTYATTCH);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('INUL_PROPERTYATTCH')" alt="Cinque Terre" width="35" height="25"> </div> 
      </div>      
        </div> 
        </div>
    </br>    
        <div class="form-row ">
             <div class="col-md-4">
          <label class="">Life<span class="MndtryAstr"></span></label>
          <div class="md-form">
     <div>
    <table>
    <tr>
     <td>
       <div id="INUL_LIFEATTCHUPLOAD"  class="file-field">
         <a class=""> 
            <i class="fa fa-plus imgAdd" aria-hidden=""></i>
            <input type="file"  name="datafile" onchange="DocFldUpldHndlr(INUL_LIFEATTCH,'INUL_LIFEATTCH','INSURANCE')" class="INUL_LIFEATTCH"  >
          </a> 
           <input type="text" id="INUL_LIFEATTCH" hidden="hidden" data-Validate="INUL_LIFEATTCH"  name="INUL_LIFEATTCH" class="form-control File INULDBfields">
           <span class="name">Click Here to Upload</span>
      </div>
    </td>
    </tr>
   </table>
  </div> 
    <div class="INUL_LIFEATTCH" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="ReuploadFile(LERP_ATTACHMENT);" title="UPLOAD"  class="rounded ReUpld" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('INUL_LIFEATTCH')" alt="Cinque Terre" width="35" height="25"> </div> 
      </div>      
        </div> 
        </div>
        
               <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="LSW_TINSURENCEUPLOAD|INUL" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
             <!--      <button type="button" data-aria="LSW_TLOANDETAILS|LODE" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> -->    
                  </div>
              </div>
        </form>
      </div>
    </div>
    <script type="text/javascript" src="ThemeproLO/PostSanction/Script/InsurUpld/LoadSubmit.js${DMY13}"></script>
	  <script type="text/javascript" src="ThemeproLO/PostSanction/Script/InsurUpld/Validation.js${DMY13}"></script>

                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           