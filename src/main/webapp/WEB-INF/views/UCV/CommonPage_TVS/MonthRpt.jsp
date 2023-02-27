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
        
            <input type="text" id="BRCR_PRCSID" hidden="hidden" name="BRCR_PRCSID" class="form-control BRCRDBfields">
            <input type="text" id="BRCR_ACTIVITYID" hidden="hidden" name="BRCR_ACTIVITYID" class="form-control BRCRDBfields">
            <input type="text" id="BRCR_DTCREATED" hidden="hidden" name="BRCR_DTCREATED" class="form-control BRCRDBfields"> 
            <input type="text" id="BRCR_CREATEDBY" hidden="hidden" name="BRCR_CREATEDBY" class="form-control BRCRDBfields">
            <input type="text" id="BRCR_DTMODIFIED" hidden="hidden" name="BRCR_DTMODIFIED" class="form-control BRCRDBfields">
            <input type="text" id="BRCR_MODIFIEDBY" hidden="hidden" name="BRCR_MODIFIEDBY" class="form-control BRCRDBfields">
           
   
        	<div class="form-row">
        		<div class="col Btxt3">Monthly Target</div>
        	</div>
			
			 <div class="form-row ">
		 <div class="col-md-5">
		 </div>
		 
		  <div class="col-md-5">
		 </div>
        <div class="col-md-1">
             
       <div class="HyperControls FltRight" > 
	  <a class="Btxt4 ADDBTN FltRight  EXPORT"  href="#">Export</a>
	  </div>
	  </div>
       <div class="col-md-1">
             
       <div class="HyperControls FltRight" > 
	  <a class="Btxt4 ADDBTN FltRight  DOWNLOAD"  href="#">Download</a>
	  </div>
	  </div>
	  </div>
        	
           <div class="form-row">
            <div class="col">
                <div class="md-form">
                    <input type="text" disabled id="DATE" name="DATE"  class="form-control ">
               </div>
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
    </div> 
    <!--
     <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SMonthlyRPT',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','MonthRpt');" id="BTNMONTH" name="BTNMONTH" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
             </table>
          </div>
     </div>  -->
	 
	  <div class="form-row" >
                   <div class="col-md-3">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary" onchange="MONTHLYROLEDROPDOWN();" id="MORP_RPTTYPE" name="MORP_RPTTYPE">
				  <option value="">--Select--</option>
  					<option value="CREDIT">CREDIT</option>
  					<option value="SALES">SALES</option>
				</select>
				<label class="mdb-main-label BTxt9">Type<span class="MndtryAstr"></span></label>
                </div>
                </div> 
              
                   <div class="col-md-3">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary " onchange="GRIDTRIGGER();" id="MORP_ROLE" name="MORP_ROLE">
				  <option value="">--Select--</option>
  					
				</select>
				<label class="mdb-main-label BTxt9">Role<span class="MndtryAstr"></span></label>
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
             <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table2',{spname:'LSW_SMonthlyRPT',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#MORP_ROLE').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||6','MonthRpt');" id="BTNMONTH" name="BTNMONTH" />
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

    
 
     <a type="button" id="VENEXPORT" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#CUSSELECTIONModal">
   <i class="fa fa-plus"></i>
        </a>
<div class="modal fade" id="CUSSELECTIONModal" tabindex="-1" role="dialog" aria-labelledby="CUSSELECTIONModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:800px" role="document">
    <div class="modal-content">
       <div class="modal-header">
        <div class="Btxt8">Download</div> 
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
                  <select class="mdb-select md-form colorful-select dropdown-primary " id="RPTTYPE" name="RPTTYPE">
				  <option value="">--Select--</option>
  					<option value="CREDIT">CREDIT</option>
  					<option value="SALES">SALES</option>
				</select>
				<label class="mdb-main-label BTxt9">Type<span class="MndtryAstr"></span></label>
                </div>
                </div> 
              </div>
			  

		 
              <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="" onclick="EXCELDocDwnld();EXCELFORMAT();" class="btn btn-Syeloutline waves-effect waves-light ">Confirm</button>   
                   
                  </div>
              </div>        
             
          


         </form>
        </div>
     </div>
      </div>   
      </div>
    </div>
  </div> 

 
<a type="button" id="EXPORT" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#EXPORTModal">
   <i class="fa fa-plus"></i>
        </a>
<div class="modal fade" id="EXPORTModal" tabindex="-1" role="dialog" aria-labelledby="EXPORTModalLabel"
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
          
                <div class="form-row" >
                   <div class="col-md-6">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary" onchange="ROLEDROPDOWN();" id="EXPT_RPTTYPE" name="EXPT_RPTTYPE">
				  <option value="">--Select--</option>
  					<option value="CREDIT">CREDIT</option>
  					<option value="SALES">SALES</option>
				</select>
				<label class="mdb-main-label BTxt9">Type<span class="MndtryAstr"></span></label>
                </div>
                </div> 
              
                   <div class="col-md-6">
                 <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary " id="EXPT_ROLE" name="EXPT_ROLE">
				  <option value="">--Select--</option>
  					
				</select>
				<label class="mdb-main-label BTxt9">Role<span class="MndtryAstr"></span></label>
                </div>
                </div> 
              </div>
			  

		 
              <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="" onclick="EXPORTDETAILS();" class="btn btn-Syeloutline waves-effect waves-light ">Confirm</button>   
                   
                  </div>
              </div>        
             
          


         </form>
        </div>
     </div>
      </div>   
      </div>
    </div>
  </div> 


 <script type="text/javascript" src="ThemeproLO/UCV/Commonpage/MonthRpt/LoadSubmit.js"></script>
 <script type="text/javascript" src="ThemeproLO/UCV/Commonpage/MonthRpt/Validation.js"></script> 

    
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js"></script>  

                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           