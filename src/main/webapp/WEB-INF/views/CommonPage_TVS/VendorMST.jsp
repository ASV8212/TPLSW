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
           
       
	   <div class="form-row">
        		<div class="col Btxt3">Vendor Creation </div>
        	</div>
                <div class="form-row ">
		 <div class="col-md-3">
		 </div>
       
                <div class="col-md-9">
             
       <div class="HyperControls FltRight" > 
      <a class="Btxt4 ADDBTN FltRight NEWVENT NEWDEPT"  href="#">Create New Vendor</a>
	  <a class="Btxt4 ADDBTN FltRight EXPORT "  href="#">Export</a>
	   <a class="Btxt4 ADDBTN FltRight" onclick="ShowImportPopUp()"  href="#">Import</a> 
     </div> 
      </div>
          </div>
   <div class="">
        <input type="text" id="LEVD_PRCSID" hidden="hidden" name="LEVD_PRCSID" class="form-control LEVDDBfields">
         <input type="text" id="LEVD_ACTIVITYID" hidden="hidden" name="LEVD_ACTIVITYID" class="form-control LEVDDBfields">
         <input type="text" id="LEVD_CREATEDBY" hidden="hidden" name="LEVD_CREATEDBY" class="form-control LEVDDBfields">
         <input type="text" id="LEVD_DTCREATED" hidden="hidden" name="LEVD_DTCREATED" class="form-control LEVDDBfields">
         <input type="text" id="LEVD_MODIFIEDBY" hidden="hidden" name="LEVD_MODIFIEDBY" class="form-control LEVDDBfields">
         <input type="text" id="LEVD_DTMODIFIED" hidden="hidden" name="LEVD_DTMODIFIED" class="form-control LEVDDBfields">
         <input type="text" id="LEVD_PROPERTYNO" hidden="hidden" name="LEVD_PROPERTYNO" class="form-control LEVDDBfields">
         <!--  -->
         
         <!--
     <div class="form-row ">
        <div class="col-md-9">
              </div>
                <div class="col-md-3">       
           
 <div class="HyperControls FltRight" > 
      <a onclick="AddPageMultiData('','','','VENDORBANK','VEBNDBfields')" class="Btxt4 ADDBTN FltRight"  href="#">+ Add bank Details</a>
     </div> 
     </div>
     </div>
     
 
     <div data-for="VENDORBANK" class="VENDORBANK"> 
      </div>
       <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="VENDORBANK" style="display:none">
        <div data-row="" class="card-body px-lg-5 pt-0  DYNROW">
          <input type="text" id="VEBN_PRCSID" hidden="hidden" name="VEBN_PRCSID" class="form-control VEBNDBfields">
         <input type="text" id="VEBN_ACTIVITYID" hidden="hidden" name="VEBN_ACTIVITYID" class="form-control VEBNDBfields">
         <input type="text" id="VEBN_DTCREATED" hidden="hidden" name="VEBN_DTCREATED" class="form-control VEBNDBfields">
         <input type="text" id="VEBN_CREATEDBY" hidden="hidden" name="VEBN_CREATEDBY" class="form-control VEBNDBfields">
         <input type="text" id="VEBN_DTMODIFIED" hidden="hidden" name="VEBN_DTMODIFIED" class="form-control VEBNDBfields">
         <input type="text" id="VEBN_MODIFIEDBY" hidden="hidden" name="VEBN_MODIFIEDBY" class="form-control VEBNDBfields">
         
       <div class="form-row">
               <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_USERNAME" maxlength="25" name="VEBN_USERNAME" class="form-control NoSpecialChar OWNADBfields">
                    <label for="VEBN_USERNAME" class="">User Name<span class="MndtryAstr"></span></label>
                  </div>
                 </div>
 
           <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_BNKNAME " maxlength="25" name="VEBN_BNKNAME " class="form-control NoSpecialChar OWNADBfields">
                    <label for="VEBN_BNKNAME " class="">Bank Name<span class="MndtryAstr"></span></label>
                  </div>
                 </div>
              <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_ACCTNO" maxlength="25" name="VEBN_ACCTNO" class="form-control NoSpecialChar OWNADBfields">
                    <label for="VEBN_ACCTNO" class="">Account Number<span class="MndtryAstr"></span></label>
                  </div>
                 </div>
          </div>
           <div class="form-row">
               <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_ACCTNAME" maxlength="25" name="VEBN_ACCTNAME" class="form-control NoSpecialChar OWNADBfields">
                    <label for="VEBN_ACCTNAME" class="">Account Name<span class="MndtryAstr"></span></label>
                  </div>
                 </div>
 
           <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_BNKBRANCH " maxlength="25" name="VEBN_BNKBRANCH " class="form-control NoSpecialChar OWNADBfields">
                    <label for="VEBN_BNKBRANCH " class="">Bank Branch Name<span class="MndtryAstr"></span></label>
                  </div>
                 </div>
              <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_IFSC" maxlength="25" name="VEBN_IFSC" class="form-control NoSpecialChar OWNADBfields">
                    <label for="VEBN_IFSC" class="">IFSC Code<span class="MndtryAstr"></span></label>
                  </div>
                 </div>
          </div>
          
          
             <div class="form-row">
               <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_MICRCODE" maxlength="25" name="VEBN_MICRCODE" class="form-control NoSpecialChar OWNADBfields">
                    <label for="VEBN_MICRCODE" class="">Micro Code<span class="MndtryAstr"></span></label>
                  </div>
                 </div>
 
           <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="VEBN_PAYMENTMODE " maxlength="25" name="VEBN_PAYMENTMODE " class="form-control NoSpecialChar OWNADBfields">
                    <label for="VEBN_PAYMENTMODE " class="">Payment mode<span class="MndtryAstr"></span></label>
                  </div>
                 </div>

          </div>
          
          
           </div>    
      </div>  -->  
       <div class="form-row">
		  <div class="col-md-3">
              <div class="md-form">
                <select class="mdb-select md-form colorful-select dropdown-primary " id="SRCCATRY" name="SRCCATRY">
				</select>
				<label class="mdb-main-label BTxt9">Sourcing Category<span class="MndtryAstr"></span></label>
              </div>
		   </div>
		    <div class="col-md-3">
			   <input type="text" id="SearchField" maxlength="10" class="form-control NoSpecialChar"  name="SearchField">			   
			   <img src="ThemeproLO/Common/Images/search.png" style="display" onclick="ChkCategory();" class="FieldIcon"/>
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
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMyAppl(this,'Table2',{spname:'LSW_SGETVENDORMST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Load',brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','VENDORMST');" id="BTNRCUGRD" name="BTNRCUGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
             </table>
          </div>
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
        <div class="Btxt8">Vendor Creation</div> 
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
   <img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="Upload" attr-upd="" width="20" height="20">
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
Download Templates
</a> 
</table>



<div class="UploadPageData" style="display:none">
 <div class="card CardNS">
       
   <div class="card-body px-lg-5 pt-0 BSbrdlight">
     
     <div class="row">
	<div class="col-lg-12">
		</br>
		 <ul class="nav PageScreenTab">      
          <li id="SheetI" value="VendorMST" title="DSA Connecter Vendor" class="nav-item active">
               <a>
                  <div class="nav-link" href="#">DSA Connecter Vendor</div>
               </a>
            </li>
            <li id="SheetII" value="VendorMST" title="User Bank Details" class="nav-item">
               <a>
                  <div class="nav-link" href="#">User Bank Details</div>
               </a>
            </li>
            <li id="SheetIII" value="VendorMST" title="Branch Mapping" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Branch Mapping</div>
               </a>
            </li>
            <li id="SheetIV" value="VendorMST" title="Employee Mapping" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Employee Mapping</div>
               </a>
            </li>
			<li id="SheetV" value="VendorMST" title="Additional Role" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Additional Role</div>
               </a>
            </li>
			<li id="SheetVI" value="VendorMST" title="Update Vendor Code" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Update Vendor Code</div>
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
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table4',{spname:'LSW_SGETUPLDINVLDDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#PrMs6').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','IVLDVDRDATA');" id="BTNIVLDVDRGRD" name="BTNIVLDVDRGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table4">
             </table>
          </div>
        </div>        
    </div>
	
	       <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="" onclick="VENDDATAINSERT();" style="width: 280px;"
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
    
   <a type="button" id="VENEXPORT" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#CUSSELECTIONModal">
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
                  <select class="mdb-select md-form colorful-select dropdown-primary " id="VENDORTYPE" name="VENDORTYPE">
				</select>
				<label class="mdb-main-label BTxt9">Vendor Type<span class="MndtryAstr"></span></label>
                </div>
                </div> 
              </div>
			  
			   <div class="form-row"  style="display:none">
					<div class="col-md-6">
                    <div class="md-form">
                    <div class="select-radio "> 
                       <div class="custom-control custom-radio custom-control-inline col-md-6">
                          <input type="radio" class="custom-control-input CBSIDBfields" value="Vendor Details" id="VENDET" name="VENDORDETAILS">
                        <label class="custom-control-label" for="VENDET">Vendor Details</label>
                       </div>
					    <div class="custom-control custom-radio custom-control-inline col-md-6">
                          <input type="radio" class="custom-control-input CBSIDBfields" value="Bank Details" id="BANDET" name="VENDORDETAILS">
                        <label class="custom-control-label" for="BANDET">Bank Details</label>
                       </div>
					    <div class="custom-control custom-radio custom-control-inline ">
                          <input type="radio" class="custom-control-input CBSIDBfields" value="Employment Mapping" id="EMPDET" name="VENDORDETAILS">
                        <label class="custom-control-label" for="EMPDET">Employment Mapping</label>
                       </div>
					    <div class="custom-control custom-radio custom-control-inline ">
                          <input type="radio" class="custom-control-input CBSIDBfields" value="Branch Mapping" id="BRNDET" name="VENDORDETAILS">
                        <label class="custom-control-label" for="BRNDET">Branch Mapping</label>
                       </div>
                   </div>
                   <label class="mdb-main-label BTxt9"><span class="MndtryAstr"></span></label>      
               </div>
           </div>
		   </div>
		<!--
		 <div class="form-row">
					<div class="col-md-6">
                    <div class="md-form">
                    <div class="select-radio "> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="VENDETYES" name="VENDORDETAILS">
                        <label class="custom-control-label" for="VENDETYES">Yes</label>
                       </div>
					    <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input CBSIDBfields" value="No" id="VENDETNO" name="VENDORDETAILS">
                        <label class="custom-control-label" for="VENDETNO">No</label>
                       </div>
                   </div>
                   <label class="mdb-main-label BTxt9">Vendor Details<span class="MndtryAstr"></span></label>      
               </div>
           </div>
		
		 <div class="col-md-6">
                    <div class="md-form">
                    <div class="select-radio "> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="BANKYES" name="BANKDETAILS">
                        <label class="custom-control-label" for="BANKYES">Yes</label>
                       </div>
					    <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input CBSIDBfields" value="No" id="BANKNO" name="BANKDETAILS">
                        <label class="custom-control-label" for="BANKNO">No</label>
                       </div>
                   </div>
                   <label class="mdb-main-label BTxt9">Bank Details<span class="MndtryAstr"></span></label>      
               </div>
           </div>
		    </div>
		 
		 <div class="form-row">
		    <div class="col-md-6">
                    <div class="md-form">
                    <div class="select-radio "> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="EMPYES" name="EMPDETAILS">
                        <label class="custom-control-label" for="EMPYES">Yes</label>
                       </div>
					    <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input CBSIDBfields" value="No" id="EMPNO" name="EMPDETAILS">
                        <label class="custom-control-label" for="EMPNO">No</label>
                       </div>
                   </div>
                   <label class="mdb-main-label BTxt9">Employment Mapping<span class="MndtryAstr"></span></label>      
               </div>
           </div>
		
		  <div class="col-md-6">
                    <div class="md-form">
                    <div class="select-radio "> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="BRANCHYES" name="BRANCHDET">
                        <label class="custom-control-label" for="BRANCHYES">Yes</label>
                       </div>
					    <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input CBSIDBfields" value="No" id="BRANCHNO" name="BRANCHDET">
                        <label class="custom-control-label" for="BRANCHNO">No</label>
                       </div>
                   </div>
                   <label class="mdb-main-label BTxt9">Branch Mapping<span class="MndtryAstr"></span></label>      
               </div>
           </div>
		 </div>  -->
		 
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
    
    
     
    
    
    
    
    
    <script type="text/javascript" src="ThemeproLO/Commonpage/VendorMST/LoadSubmit.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/Commonpage/VendorMST/Validation.js${DMY13}"></script> 

    
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>  

                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           