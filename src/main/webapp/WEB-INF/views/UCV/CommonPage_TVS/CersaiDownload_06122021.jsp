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
        		<div class="col Btxt3">Cersai Download</div>
        	</div>
			
			
            <div class="form-row" style="display:none">
    
               <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="FromDate" name="FromDate"  maxlength="10" class="form-control form-control  IsNumberFields NoSpecialChar ISDatefield ">
                    <label for="FromDate" class="">From Date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                </div>
                <div class="col-md-4">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="ToDate" name="ToDate"  maxlength="10" class="form-control form-control  IsNumberFields NoSpecialChar ISDatefield ">
                    <label for="ToDate" class="">To Date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png"  class="FieldIcon datepicker"/>
                  </div>
                </div>
				
				</div>  	
               
                  <div class="form-row">
            <div class="col">
                
            </div>
            <div class="col">
           	  <div class="md-form">
                <div class="BTxt9 UPLOAD" id="" value=""></div>
                   <div class="md-form DDU">
              <table>
               <tr>
                  <td>
                    <div id="RCUI_UPLDDOCUPLOAD"  class="file-field  DDU">
                     <a class=""><i class="fa fa-plus imgAdd" aria-hidden=""></i>
                       <input type="file"  name="datafile" onchange="UploadData(RCUI_UPLDDOC)" class="RCUI_UPLDDOC"  >
                     </a>
                       <input type="text" id="RCUI_UPLDDOC" hidden="hidden" data-Validate="RCUI_UPLDDOC"  name="RCUI_UPLDDOC" class="form-control File RCUIDBfields">
                       <span class="nameUpload">Click Here to Upload</span> 
                   </div> 
                 </td>
             
          </tr>
     </table>
        </div> 
      </div>
      </div>
	  
	  
	  <a class="Btxt4 ADDBTN FltRight" onclick="EXCELFORMAT()" href="#">
<img src="ThemeproLO/Common/Images/download.png" class="GridDocUpd" title="Download" attr-upd="" width="20" height="20">
Download Template
</a> 
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
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table2',{spname:'LSW_SGETCERSAIDOWNLOAD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||6','CERSAIDOWNLOAD');" id="BTNMONTH" name="BTNMONTH" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
             </table>
          </div>
        </div>   

<div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="" onclick="GENERATE_CERSAI();"  style="width: 280px;"
 class="btn btn-Syeloutline waves-effect waves-light ">Process With Successful Entry</button>   
                   
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
    </div>

    
 
   

    <script type="text/javascript" src="ThemeproLO/UCV/Commonpage/CersaiDownload/LoadSubmit.js"></script>
 <script type="text/javascript" src="ThemeproLO/UCV/Commonpage/CersaiDownload/Validation.js"></script> 

    
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js"></script>  

                            </div>
                            
                                  <!--   </div>
                                </div>   -->                           