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
        		<div class="col Btxt3">Monthly Report</div>
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
    
     <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SMonthlyRPT',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','MonthRpt');" id="BTNMONTH" name="BTNMONTH" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
             </table>
          </div>
     </div>  
         
   
 </form>
      </div>
    </div>

    
 
   

    <script type="text/javascript" src="ThemeproLO/Commonpage/MonthRpt/LoadSubmit.js"></script>
 <script type="text/javascript" src="ThemeproLO/Commonpage/MonthRpt/Validation.js"></script> 

    
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js"></script>  

                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           