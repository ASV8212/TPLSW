</br>
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="">
                            <!--Admin panel-->
     <div class="">
 <div class="card CardNS">
    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0">
        <form>
           
        		<div class="form-row">
        		<div class="col Btxt3">User Creation</div>
        	</div>

           <div class="form-row ">
        <div class="col-md-3">
              </div>
                <div class="col-md-9">
                   <div class="HyperControls FltRight" > 
                       <a class="Btxt4 ADDBTN FltRight NEWDEPT" onclick="InitNewUser();"  href="#">Create New User</a>
					    <a class="Btxt4 ADDBTN FltRight EXPORT" href="#">Export</a>
						<a class="Btxt4 ADDBTN FltRight" onclick="ShowImportPopUp()"  href="#">Import</a>
					<!--	 <table>
 <tr>
 <td>
  <div id="EXCELUPLOAD"  class="file-field DDU FltRight ">
    <a class="">
      <i class="fa imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onclick="ShowImportPopUp()" class="EXCELUPLOAD"  >
    </a>
    <input type="text" id="EXCELUPLOAD" hidden="hidden" data-Validate="EXCELUPLOAD"  name="EXCELUPLOAD" class="form-control File "/>
  <span class="name Btxt4  FltRight ">Import</span> 
  </div> 
 </td>
  <!-- <div class="md-form DDV">
<div class="md-form Formcol-mdLR">
<div class="EXCELUPLOAD" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile(EXCELUPLOAD);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('PFDT_COLLATTACHMENT')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div>  -- 
</tr>
</table>-->
     </div> 
      </div>
          </div>
		  <div class="">
		  <div class="card-headerBlack white-text">    
         <div class="row">       
         <div class="col-md-2 ">
         </div>
         <div class="col-md-5"> 
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTable2" name="SearchTable2" class="Ntxt3" title="">
         </div> 
         </div>                     
</div>
         <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table2',{spname:'LSW_SDIRUSERGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||6','DIRUSER');" id="BTNRCUGRD" name="BTNRCUGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
             </table>
          </div>
        </div>     
    
       <!--   <div class="row m-b-0">
<div class="col-md-12">
  <input type="button" style="display:none" class="DashTrg" onclick="FncallFEPDashLrgDataWP(this,'Table3',{spname:'LSW_SMYAPPLICATIONDTLS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3');" id="BTNAcctRecv" name="BTNAcctRecv" />

    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
    </table>
    
    </div>
   </div>-->
      </div>
 </form>
      </div>
    </div>
   
   
   <a type="button" id="USERIMPORT" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#USERIMPORTModal">
   <i class="fa fa-plus"></i>
        </a>
<div class="modal fade" id="USERIMPORTModal" tabindex="-1" role="dialog" aria-labelledby="USERIMPORTModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1250px" role="document">
    <div class="modal-content">
       <div class="modal-header">
        <div class="Btxt8">User Creation</div> 
        <a href="#"><img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
      </div>  
      <div class="modal-body">
   <div class="">
    <!-- Card body -->
     <div class="">  
         <form>
         
		  <table>
 <tr>
 <td>
  <div id="EXCELUPLOAD"  class="file-field DDU FltRight ">
    <a class="">
      <i class="fa imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="UploadData(EXCELUPLOAD)" class="EXCELUPLOAD"  >
    </a>
    <input type="text" id="EXCELUPLOAD" hidden="hidden" data-Validate="EXCELUPLOAD"  name="EXCELUPLOAD" class="form-control File "/>
  <span class="name Btxt4  FltRight ">Choose File
  <img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-upd="" width="20" height="20">
  </span> 
  
  </div> 
 </td>
  <!-- <div class="md-form DDV">
<div class="md-form Formcol-mdLR">
<div class="EXCELUPLOAD" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile(EXCELUPLOAD);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('PFDT_COLLATTACHMENT')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div>  --> 
</tr>

<a class="Btxt4 ADDBTN FltRight" onclick="FormatEXCELDocDwnld()" href="#">
<img src="ThemeproLO/Common/Images/download.png" class="GridDocUpd" title="Download" attr-upd="" width="20" height="20">
Download Template
</a> 
</table>
<div class="UploadPageData" style="display:none">		 
<div class="card CardNS">   
   <div class="card-body px-lg-5 pt-0 BSbrdlight">
     
     <div class="row">
	<div class="col-lg-12">
		</br>
		 <ul class="nav PageScreenTab">      
          <li id="SheetI" value="DirUserMST" title="User Creation" class="nav-item active">
               <a>
                  <div class="nav-link" href="#">User Creation</div>
               </a>
            </li>
            <li id="SheetII" value="DirUserMST" title="User Branch Mapping" class="nav-item">
               <a>
                  <div class="nav-link" href="#">User Branch Mapping</div>
               </a>
            </li>
            <li id="SheetIII" value="DirUserMST" title="User Role Mapping" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">User Role Mapping</div>
               </a>
            </li>
        </ul>
	</div>
</div>
      </div>
   </div>
   </br>
   <div class="card CardNS">
   <div class="row FormRows m-b-0">
                                    <!--First column-->
<div class="col-md-2 Formcol-mdLR LSbrd">
<div class="Btxt5" >Success Records</div>
<div class="Btxt10  " id="SuccessCnt" name="SuccessCnt" value=""></div>
</div>  

<div class="col-md-2 Formcol-mdLR LSbrd">
<div class="Btxt5">Failed Records</div>
<div class="Btxt10 " id="FailedCnt" name="FailedCnt" value="" ></div>
</div>  
</div>
</div> 
   <div class="admin-panel">
    
	 <input type="text" hidden="hidden" id="CntStatus" name="CntStatus" class="" title="">
                                <!--Main First row-->
								<div class="card-headerBlack white-text">    
         <div class="row">       
         <div class="col-md-2 ">
         </div>
         <div class="col-md-5"> 
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTable4" name="SearchTable4" class="Ntxt3" title="">
         </div> 
         </div>                     
</div>
                                <div class="row m-b-0">
<div class="col-md-12">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table4',{spname:'LSW_SGETUPLDINVLDUSRDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#PrMs6').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','IVLDUSRDATA');" id="BTNIVLDUSRGRD" name="BTNIVLDUSRGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table4">
             </table>
          </div>
        </div>        
    </div>
	
	<div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="" onclick="USRDATAINSERT();"  style="width: 280px;"
 class="btn btn-Syeloutline waves-effect waves-light ">Process With Successful Entry</button>   
                   
                  </div>
              </div> 
	</div>		  
         </form>
        </div>
     </div>
      </div>   
      </div>
    </div>
  </div>  


 <a type="button" id="USEREXPORT" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#CUSSELECTIONModal">
   <i class="fa fa-plus"></i>
        </a>
<div class="modal fade" id="CUSSELECTIONModal" tabindex="-1" role="dialog" aria-labelledby="CUSSELECTIONModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:800px" role="document">
    <div class="modal-content">
       <div class="modal-header">
        <div class="Btxt8">Export</div> 
        <a href="#"><img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
      </div>  
      <div class="modal-body">
   <div class="">
    <!-- Card body -->
     <div class="">  
         <form>
          
  <div class="form-row">
					<div class="col-md-6">
                    <div class="md-form">
					 <input type="text" hidden="hidden" id="URCR_USRTYPEI" name="URCR_USRTYPEI" class="" title="">
                      <select class="mdb-select md-form colorful-select dropdown-primary URCRDBfields" onchange="getType()" multiple id="URCR_USRTYPE" name="URCR_USRTYPE">
				         <option value="" disabled>--Select--</option>
				     </select>
				       <label class="mdb-main-label BTxt9">User Type<span class="MndtryAstr"></span></label>     
               </div>
           </div>
		   </div>
              <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="" onclick="EXCELDocDwnld()" class="btn btn-Syeloutline waves-effect waves-light ">Download</button>   
                   
                  </div>
              </div>        
         </form>
        </div>
     </div>
      </div>   
      </div>
    </div>
  </div>  
    
    
   
 <script type="text/javascript" src="ThemeproLO/Commonpage/DirUserMST/LoadSubmit.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/Commonpage/DirUserMST/Validation.js${DMY13}"></script> 

    
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>  

                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           