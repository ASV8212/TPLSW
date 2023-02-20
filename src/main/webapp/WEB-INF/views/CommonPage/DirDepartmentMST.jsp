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
        		<div class="col Btxt3">Branch Creation </div>
        	</div>   

        <div class="form-row ">
        <div class="col-md-6">
              </div>
    <div class="col-md-6">
     <div class="HyperControls FltRight" > 
      <a class="Btxt4 ADDBTN FltRight NEWDEPT "  href="#">Create New Branch</a>
	  <a class="Btxt4 ADDBTN FltRight  EXPORT" style="" href="#">Export</a>
	  <a class="Btxt4 ADDBTN FltRight" onclick="ShowImportPopUp()"  href="#">Import</a>
     </div> 
    </div>
          </div>
              
                 <div class="card-headerBlack white-text">
              
         <div class="row">
                        
         <div class="col-md-2 ">
         
       
         </div>
         <div class="col-md-5">
         
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTable2" name="SearchTable2" class="Ntxt3">
         </div> 
         </div>     
              
                       
</div>
        
        
        <div class="admin-panel">

                                <!--Main First row-->
                                <div class="row m-b-0">
<div class="col-md-12">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMyAppl(this,'Table2',{spname:'LSW_SGETBRANCHMST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5','DEPARTMST');" id="BTNRCUGRD" name="BTNRCUGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
             </table>
           
    </div>
   </div>
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
        <div class="Btxt8">Branch Creation</div> 
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
      <i class="fa  imgAdd" aria-hidden=""></i>
	  
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
          <li id="SheetI" value="DirDepartmentMST" title="Branch Creation" class="nav-item active">
               <a>
                  <div class="nav-link" href="#">Branch Creation</div>
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
<div class="Btxt5" >Success Count</div>
<div class="Btxt10  " id="SuccessCnt" name="SuccessCnt" value=""></div>
</div>  

<div class="col-md-2 Formcol-mdLR LSbrd">
<div class="Btxt5">Failed Count</div>
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
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table4',{spname:'LSW_SGETUPLDINVLDBRDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#PrMs6').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','IVLDBRDATA');" id="BTNIVLDBRGRD" name="BTNIVLDBRGRD" />
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
    
    
 <a type="button" id="DEPTEXPORT" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#CUSSELECTIONModal">
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
                    <div class="select-radio "> 
                      
					   <div class="custom-control custom-radio custom-control-inline ">
                          <input type="radio" class="custom-control-input CBSIDBfields" value="Branch" id="BRNDET" name="BRDETAILS">
                        <label class="custom-control-label" for="BRNDET">Branch</label>
                       </div>
					    <div class="custom-control custom-radio custom-control-inline col-md-6">
                          <input type="radio" class="custom-control-input CBSIDBfields" value="User Mapping" id="USERDET" name="BRDETAILS">
                        <label class="custom-control-label" for="USERDET">User Mapping</label>
                       </div>
					    
					    
                   </div>
                   <label class="mdb-main-label BTxt9"><span class="MndtryAstr"></span></label>      
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
    
  
   
    
    
    
    
    <script type="text/javascript" src="ThemeproLO/Commonpage/DirDepartmentMST/LoadSubmit.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/Commonpage/DirDepartmentMST/Validation.js${DMY13}"></script> 

    
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>  

                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           