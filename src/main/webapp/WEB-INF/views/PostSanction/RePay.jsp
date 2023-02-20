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
        <form >
         <input type="text" id="PRPM_PRCSID" hidden="hidden" name="PRPM_PRCSID" class="form-control PRPMDBfields">
          <input type="text" id="PRPM_ACTIVITYID" hidden="hidden" name="PRPM_ACTIVITYID" class="form-control PRPMDBfields">
           <input type="text" id="PRPM_CREATEDBY" hidden="hidden" name="PRPM_CREATEDBY" class="form-control PRPMDBfields"> 
           <input type="text" id="PRPM_DTCREATED" hidden="hidden" name="PRPM_DTCREATED" class="form-control PRPMDBfields">
            <input type="text" id="PRPM_MODIFIEDBY" hidden="hidden" name="PRPM_MODIFIEDBY" class="form-control PRPMDBfields">
             <input type="text" id="PRPM_DTMODIFIED" hidden="hidden" name="PRPM_DTMODIFIED" class="form-control PRPMDBfields">
        	
        	<input type="text" id="PRPM_CHQUDETL" hidden="hidden" name="PRPM_CHQUDETL" class="form-control PRPMDBfields">
        	<input type="text" id="PRPM_MLTBNKDETL" hidden="hidden" name="PRPM_MLTBNKDETL" class="form-control PRPMDBfields">
        	<input type="text" id="PRPM_BNKCHQDETL" hidden="hidden" name="PRPM_BNKCHQDETL" class="form-control PRPMDBfields">
        	</br>
        	</br>
        <div class="form-row">
            <div class="col-md-4"> 
              <div class="md-form">
                  <input type="text" id="PRPM_EMI"  value="" maxlength="15" class="form-control DSVLBL IsCURCommaFields PRPMDBfields NoSpecialChar" name="PRPM_EMI">
                   <label for="PRPM_EMI" class="">EMI Amount (Rs.)<span class="MndtryAstr"></span></label>
              </div>
            </div>
            <div class="col-md-4">
               <div class="md-form">
                  <input type="text" id="PRPM_REPAY"  value="" maxlength="15" class="form-control DSVLBL PRPMDBfields NoSpecialChar" name="PRPM_REPAY">
                   <label for="PRPM_REPAY" class="">Re-payable (In Months)<span class="MndtryAstr"></span></label>
                </div>
            </div>
            <div class="col-md-4">
             <div class="md-form">
                    <div class="select-radio PRPMMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input PRPMDBfields" onclick="ChkEnachReson()" value="PDC" id="MODEPDC" name="PRPM_MODE">
                          <label class="custom-control-label" for="MODEPDC">PDC</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input PRPMDBfields" onclick="ChkEnachReson()"  value="ACH" id="MODEACH" name="PRPM_MODE">
                           <label class="custom-control-label" for="MODEACH">ACH</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                             <input type="radio" class="custom-control-input PRPMDBfields" onclick="ChkEnachReson()" value="E-NACH" id="MODENACH" name="PRPM_MODE">
                             <label class="custom-control-label" for="MODENACH">E-NACH</label>
                       </div>
                   </div>
                   <label class="mdb-main-label BTxt9">Mode of Re-payment<span class="MndtryAstr">*</span></label>      
               </div>
                </div>
            </div>
        	<div class="form-row">
        		<div class="col Btxt3">Re-Payment Bank Details</div>
        	</div>
        	</br>
        <div class="BSbrd"> 
         <div class="form-row">
            <div class="col-md-4">
              <div class="md-form">
                  <input type="text" id="PRPM_IFSC"  value="" maxlength="11" class="form-control DSVLBL PRPMDBfields APPRBNK NoSpecialChar" name="PRPM_IFSC">
                   <label for="PRPM_IFSC" class="">IFSC Code<span class="MndtryAstr"></span></label>
              </div>
            </div>
            <div class="col-md-4">
               <div class="md-form">
                  <input type="text" id="PRPM_BNKNAME"  value="" maxlength="15" class="form-control IsAlphaFields DSVLBL APPRBNK PRPMDBfields NoSpecialChar" name="PRPM_BNKNAME">
                   <label for="PRPM_BNKNAME" class="">Bank Name<span class="MndtryAstr"></span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                  <input type="text" id="PRPM_BRNAME"  value="" maxlength="15" class="form-control DSVLBL IsAlphaFields APPRBNK PRPMDBfields NoSpecialChar" name="PRPM_BRNAME">
                   <label for="PRPM_BRNAME" class="">Branch Name<span class="MndtryAstr"></span></label>
                </div>
            </div>
       </div>
        <div class="form-row">
            <div class="col-md-4">
              <div class="md-form">
                  <input type="text" id="PRPM_CITY"  value="" maxlength="20" class="form-control IsAlphaFields DSVLBL APPRBNK PRPMDBfields NoSpecialChar" name="PRPM_CITY">
                   <label for="PRPM_CITY" class="">City<span class="MndtryAstr"></span></label>
              </div>
            </div>
            <div class="col-md-4">
               <div class="md-form">
                  <input type="text" id="PRPM_ACCTYPE"  value="" maxlength="15" class="form-control IsAlphaFields DSVLBL APPRBNK PRPMDBfields NoSpecialChar" name="PRPM_ACCTYPE">
                   <label for="PRPM_ACCTYPE" class="">Account type<span class="MndtryAstr"></span></label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="md-form">
                  <input type="text" id="PRPM_ACCNUM"  value="" maxlength="25" class="form-control DSVLBL IsNumberFields APPRBNK PRPMDBfields NoSpecialChar" name="PRPM_ACCNUM">
                   <label for="PRPM_ACCNUM" class="">Account Number<span class="MndtryAstr"></span></label>
                </div>
            </div>
       </div>
         <div class="form-row">
            <div class="col-md-4">
              <div class="md-form">
                  <input type="text" id="PRPM_ACCHNAME"  value="" maxlength="20" class="form-control IsAlphaFields DSVLBL APPRBNK PRPMDBfields NoSpecialChar" name="PRPM_ACCHNAME">
                   <label for="PRPM_ACCHNAME" class="">Account Holder Name<span class="MndtryAstr"></span></label>
              </div>
            </div>
            <div class="col-md-4">
                 <label for="LODE_REQLONAMT" class="">Upload Cheques<span class="MndtryAstr"></span></label>
               <div class="row pan">
                   <div class="col-md-8  Formcol-mdLR">
                      <div class="md-form">
                           <table>
                              <tr>
                                  <td>
                                <div id="PRPM_UPLDCHQUUPLOAD"  class="file-field">
                           <a class="">
                              <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                              <input type="file"  name="datafile" onchange="DocFldUpldHndlr(PRPM_UPLDCHQU,'PRPM_UPLDCHQU','CHEQUES')" class="CBSI_PANATTACHMENT"  >
                           </a>
                               <input type="text" id="PRPM_UPLDCHQU" hidden="hidden" data-Validate="PRPM_UPLDCHQU"  name="PRPM_UPLDCHQU" class="form-control File PRPMDBfields">
                               <span class="name">Click Here to Upload Document</span>
                               </div> 
                                  </td> 
                              </tr>
                          </table>
                     </div>    
                 </div>  
                 <div class="col-md-4 ">
                     <div class="md-form Formcol-mdLR TxtCenter">
                          <div class="md-form">
                             <div class="PRPM_UPLDCHQU" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded ReUpld" title="UPLOAD" onclick="ReuploadFile(PRPM_UPLDCHQU);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('PRPM_UPLDCHQU')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
                         </div>
                     </div>
               </div>  
          </div>
      </div>
      <div class="col-md-4">
            <div class="md-form">
               <input type="text" id="PRPM_NOCHQU"  value="" maxlength="3" class="form-control DSVLBL IsNumberFields PRPMDBfields NoSpecialChar" name="PRPM_NOCHQU">
                <label for="PRPM_NOCHQU" class="">No. of Cheques<span class="MndtryAstr"></span></label>
           </div>
      </div>
   </div>
    <div class="form-row">
            <div class="col-md-4">
              <div class="md-form">
                  <input type="text" id="PRPM_URMNNO"  value="" maxlength="20" class="form-control DSVLBL PRPMDBfields NoSpecialChar" name="PRPM_URMNNO">
                   <label for="PRPM_URMNNO" class="">URMN Number<span class="MndtryAstr"></span></label>
              </div>
            </div>
			<div class="col-md-4">
                 <div class="md-form">
                    <select class="md-form colorful-select dropdown-primary PRPMDBfields" disabled id="PRPM_BNKRESON" name="PRPM_BNKRESON">
                         <option value="" >--Select--</option>
						 <option value="Reason 1" >Reason 1</option>
                    </select>
                    <label class="mdb-main-label BTxt9">Banking Reson<span class="MndtryAstr">*</span></label>
                 </div>
           </div>
	</div>
    <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SGETREPAYCHQUDETL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5,6','REPAYCHQ');" id="BTNRPCHQGRD" name="BTNRPCHQGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table2">
             </table>
           </div>
    </div>
    </br>
                           <div class="HyperControls">
                              <a type="button" class="Btxt4 " data-toggle="modal" id="AnotherChequeDetails" data-target="" href="#">+ Another Cheque Details</a>
                              <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                           </div>
                           </br>
 </div>
 </br>
     <div class="HyperControls form-row FltRight" > 
	    <a onclick="AddPageMultiData('',$('#RPBD_PRCSID').val(),'','Repayment','RPBDDBfields');GetCustomerName('','Click')" class="Btxt4 FltRight ADDBTN"  href="#">+ Another Bank Details</a>
			<!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
	 </div>
      <div data-for="Repayment" class="Repayment">        
       </div>
       <div class="DynamicPageGrid" data-val="PROPTXTHDR|Bank Details" id="Repayment" style="display:none">
                     <div data-row="" class=" BSbrd DYNROW">
                        </br>
                     <form>
                        <input type="text" id="RPBD_PRCSID" hidden="hidden" name="RPBD_PRCSID"  class="form-control RPBDDBfields">
                        <input type="text" id="RPBD_ACTIVITYID" hidden="hidden" name="RPBD_ACTIVITYID" class="form-control RPBDDBfields">
                        <input type="text" id="RPBD_DTCREATED" hidden="hidden" name="RPBD_DTCREATED" class="form-control RPBDDBfields">
                        <input type="text" id="RPBD_CREATEDBY" hidden="hidden" name="RPBD_CREATEDBY" class="form-control RPBDDBfields">
                        <input type="text" id="RPBD_DTMODIFIED" hidden="hidden" name="RPBD_DTMODIFIED" class="form-control RPBDDBfields">
                        <input type="text" id="RPBD_MODIFIEDBY" hidden="hidden" name="RPBD_MODIFIEDBY" class="form-control RPBDDBfields">

                        <input type="text" id="RPBD_UNIQUID" hidden="hidden" name="RPBD_UNIQUID"  class="form-control RPBDDBfields">
                        <input type="text" id="RPBD_BNKCHQDETL" hidden="hidden" name="RPBD_BNKCHQDETL" class="form-control RPBDDBfields">
                        <input type="text" id="RPBD_BNKDETLVAL" hidden="hidden" name="RPBD_BNKDETLVAL" class="form-control RPBDDBfields">

                        <!-- </br>
                           <div class="form-row">
                           	<div class="col Btxt3"></div>
                           </div> -->
                        </br>
                        <div class="form-row">
                           <div id="PROPTXTHDR" class="col Btxt10"></div>
                        </div>
						
						        <div class="form-row">
                                  <div class="col ">
                                    <div class="FltRight DELBTNTXT">
                                         Delete Bank Details
                                          <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="" class="DELBTN DELREPAYBNKDET"/>
                                      </div>    
                                 </div>     
                                </div> 
						
						
						
                        </br>
                        <div class="form-row">
                           <div class="col-md-4">
                              <div class="md-form">
                              		<select class="md-form colorful-select dropdown-primary RPBDDBfields" onchange="GetBnkName($(this).closest('.DYNROW'),'Change',this.value)" id="RPBD_PDCPROVIDE" name="RPBD_PDCPROVIDE">
					  					<option  value="" selected>--Select--</option>
									  </select>
                                   <label  class="">PDC Provided by<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
                           <div class="col-md-4">
                               <div class="md-form">
                               		<select class="md-form colorful-select dropdown-primary DataToFld RPBDDBfields" data-change="RPBD_BNKDETLVAL" onchange="BnkAccntOnChng($(this).closest('.DYNROW'),this.value);GetAcctNo($(this).closest('.DYNROW'),'Change',this.value)" id="RPBD_BNKDETL" name="RPBD_BNKDETL">
					  					<option  value="" selected>--Select--</option>
									  </select>
                                    <label  class="">Bank Details<span class="MndtryAstr"></span></label>
                               </div>
                            </div>
                            <div class="col-md-4">
                               <div class="md-form">
                                   <input type="text" id="RPBD_IFSC"  value="" maxlength="25" class="form-control DSVLBL RPBDDBfields NoSpecialChar" name="RPBD_IFSC">
                                   <label for="RPBD_IFSC" class="">IFSC Code<span class="MndtryAstr"></span></label>
                               </div>
                           </div>
                       </div>
                        <div class="form-row">
                           <div class="col-md-4">
                              <div class="md-form">
                                   <input type="text" id="RPBD_BNKNAME"  value="" maxlength="20" class="form-control IsAlphaFields DSVLBL RPBDDBfields NoSpecialChar" name="RPBD_BNKNAME">
                                   <label for="RPBD_BNKNAME" class="">Bank Name<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
                           <div class="col-md-4">
                               <div class="md-form">
                                    <input type="text" id="RPBD_BRNAME"  value="" maxlength="15" class="form-control DSVLBL RPBDDBfields IsAlphaFields NoSpecialChar" name="RPBD_BRNAME">
                                    <label for="RPBD_BRNAME" class="">Branch Name<span class="MndtryAstr"></span></label>
                               </div>
                            </div>
                            <div class="col-md-4">
                               <div class="md-form">
                                   <input type="text" id="RPBD_CITY"  value="" maxlength="25" class="form-control DSVLBL RPBDDBfields IsAlphaFields NoSpecialChar" name="RPBD_CITY">
                                   <label for="RPBD_CITY" class="">City<span class="MndtryAstr"></span></label>
                               </div>
                           </div>
                       </div>
                        <div class="form-row">
                           <div class="col-md-4">
                              <div class="md-form">
                                   <input type="text" id="RPBD_ACCHNAME"  value="" maxlength="20" class="form-control IsAlphaFields DSVLBL RPBDDBfields NoSpecialChar" name="RPBD_ACCHNAME">
                                   <label for="RPBD_ACCHNAME" class="">Account Holder Name<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
                           <div class="col-md-4">
                               <div class="md-form">
                                    <input type="text" id="RPBD_ACCTYPE"  value="" maxlength="15" class="form-control DSVLBL RPBDDBfields IsAlphaFields NoSpecialChar" name="RPBD_ACCTYPE">
                                    <label for="RPBD_ACCTYPE" class="">Account Type<span class="MndtryAstr"></span></label>
                               </div>
                            </div>
                            <div class="col-md-4">
                               <div class="md-form">
                                   <input type="text" id="RPBD_ACCNUM"  value="" maxlength="25" class="form-control IsNumberFields DSVLBL RPBDDBfields NoSpecialChar" name="RPBD_ACCNUM">
                                   <label for="RPBD_ACCNUM" class="">Account Number<span class="MndtryAstr"></span></label>
                               </div>
                           </div>
                       </div>
                        <div class="form-row">
                           <div class="col-md-4">
                                 <label  class="">Upload Passbook<span class="MndtryAstr"></span></label>
                                  <div class="row">
                                     <div class="col-md-8  Formcol-mdLR">
                                            <div class="md-form">
                                                <table>
                                                    <tr>
                                                        <td><div id="RPBD_UPLDPBOOKUPLOAD"  class="file-field">
                                                              <a class=""><i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                                                     <input type="file"  name="datafile" onchange="DocFldUpldHndlr(RPBD_UPLDPBOOK,'RPBD_UPLDPBOOK','PAN')" class="RPBD_UPLDPBOOK"  >
                                                               </a>
                                                       <input type="text" id="RPBD_UPLDPBOOK" hidden="hidden" data-Validate="RPBD_UPLDPBOOK"  name="RPBD_UPLDPBOOK" class="form-control File RPBDDBfields">
                                                        <span class="name">Click Here to Upload Document</span>
                                                      </div> 
                                                    </td> 
                                                  </tr>
                                               </table>
                                            </div>    
                                      </div>  
                                       <div class="col-md-4 ">
                                           <div class="md-form Formcol-mdLR TxtCenter">
                                               <div class="md-form">
                                                  <div class="RPBD_UPLDPBOOK" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded ReUpld" title="UPLOAD" onclick="ReuploadFile(RPBD_UPLDPBOOK);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('RPBD_UPLDPBOOK')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
                                               </div>
                                           </div>
                                       </div>  
                                   </div>
                           </div>
                          <div class="col-md-4">
                                 <label class="">Upload Cheques<span class="MndtryAstr"></span></label>
                                  <div class="row">
                                     <div class="col-md-8  Formcol-mdLR">
                                            <div class="md-form">
                                                <table>
                                                    <tr>
                                                        <td><div id="RPBD_UPLDCHEQUUPLOAD"  class="file-field">
                                                              <a class=""><i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                                                     <input type="file"  name="datafile" onchange="DocFldUpldHndlr(RPBD_UPLDCHEQU,'RPBD_UPLDCHEQU','PAN')" class="RPBD_UPLDCHEQU"  >
                                                               </a>
                                                       <input type="text" id="RPBD_UPLDCHEQU" hidden="hidden" data-Validate="RPBD_UPLDCHEQU"  name="RPBD_UPLDCHEQU" class="form-control File RPBDDBfields">
                                                        <span class="name">Click Here to Upload Document</span>
                                                      </div> 
                                                    </td> 
                                                  </tr>
                                               </table>
                                            </div>    
                                      </div>  
                                       <div class="col-md-4 ">
                                           <div class="md-form Formcol-mdLR TxtCenter">
                                               <div class="md-form">
                                                  <div class="RPBD_UPLDCHEQU" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile(RPBD_UPLDCHEQU);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('RPBD_UPLDCHEQU')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
                                               </div>
                                           </div>
                                       </div>  
                                   </div>
                           </div>
                            <div class="col-md-4">
                               <div class="md-form">
                                   <input type="text" id="RPBD_NOOFCHQU"  value="" maxlength="3" class="form-control IsNumberFields DSVLBL RPBDDBfields NoSpecialChar" name="RPBD_NOOFCHQU">
                                   <label for="RPBD_NOOFCHQU" class="">No. of Cheques<span class="MndtryAstr"></span></label>
                               </div>
                           </div>
                       </div>
                        <div class="form-row">
                            <div class="col">
                               <input type="button" data-button="GridButton" data-value="RPBDTable|LSW_SGETREPAYCHQUDETL1|PrcsID|RPBD_ACCNUM||5,6|REPAYCHQMULTI" style="display:none" class="DashTrg RPBDDBfields MultiGridTrg" id="BTNLPDSGRD" name="BTNLPDSGRD" />
                               <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display RPBDDBfields DataGrid" name="RPBDTable" id="RPBDTable">
                               </table>
                           </div>
                         </div>
                         <div class="HyperControls">
                              <a type="button" class="Btxt4 BNKAnotherCheque" data-table="RPBDTable"  data-toggle="modal" id="BNKAnotherChequeDetails" data-target="" href="#">+ Another Cheque Details</a>
                              <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
                           </div>
                     </form>
                     </div>
                  </div>
           </br>
                <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="LSW_TPOATREPAY|PRPM|PRPM_ACCNUM" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TPOATREPAY|PRPM|PRPM_ACCNUM" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                </div>
            </div>
        </form>
      </div>
    </div>
    <script type="text/javascript" src="ThemeproLO/PostSanction/Script/RePay/LoadSubmit.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/PostSanction/Script/RePay/Validation.js${DMY13}"></script>  
   </div>
 </div>
 
 <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>  
     
     <table style="display:none" id="GridTable2">
   <thead>
<th>RPCD_STACHQNUM</th>
<th>RPCD_ENDCHQNUM</th>
<th>RPCD_NOFCHQ</th>
<th>RPCD_PDCTYPE</th>
<th>RPCD_UNIQNO</th>
<!--<th>RPCD_PRCSID</th>
<th>RPCD_ACTIVITYID</th>
<th>RPCD_CREATEDBY</th>
<th>RPCD_DTCREATED</th>
<th>RPCD_MODIFIEDBY</th>
<th>RPCD_DTMODIFIED</th>-->
   </thead> 
    </table>  
    
      <table style="display:none" id="GridRPBDTable">
   <thead>
<th>BMTD_STACHQNUM</th>
<th>BMTD_ENDCHQNUM</th>
<th>BMTD_NOFCHQ</th>
<th>BMTD_PDCTYPE</th>
<th>ACTION</th>
<th>BMTD_UNIQNO</th>
<!--<th>RPCD_PRCSID</th>
<th>RPCD_ACTIVITYID</th>
<th>RPCD_CREATEDBY</th>
<th>RPCD_DTCREATED</th>
<th>RPCD_MODIFIEDBY</th>
<th>RPCD_DTMODIFIED</th>-->
   </thead> 
    </table>  
      
                                  <!--   </div>
                                </div>   -->                           