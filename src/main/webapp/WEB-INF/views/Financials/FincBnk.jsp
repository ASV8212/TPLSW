</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
      <div class="row">
         <div class="col-lg-12">
            <ul title="Bank" data-aria="LSW_TFINANCBNKDETL|FCBD|" data-popup="No"  class="nav FormPageMultiTab">
               ${SUBPAGETABDATA}
               <!-- <li id="Co-Applicant1" value="" title = "Co-Applicant1" class="nav-item  active">
                  <a> <div class="nav-link" href="#">Co-Applicant 1</div></a>
                  </li>      
                     
                  <li id=""  value="Add" title = "" class="nav-item FormPageMultiTabAdd">
                  <a> <div class="nav-link" href="#">+ Add</div>  </a>
                  </li>
                  --> 
            </ul>
         </div>
      </div>
      </br>
      <!-- card -->
 <div class="HyperControls form-row FltRight" > 
			    <!--  <a onclick="AddPageMultiData('',$('#FCBD_PRCSID').val(),'','BankDetail1','FCBDDBfields');getCusName();" class="Btxt4 FltRight"  href="#">+ Add Account</a>-->
			<!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
			      </div>
      <div class="card CardNS">
      
      <div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
  <!-- Accordion card -->
  <button type="button" style="display:none" class="btn CollectedPage  waves-effect btn-yelInplain btn-sm BTNVerify">CollectedPage</button>
   <div data-for="BankDetail1" class="BankDetail1"> 

   </div>
 </div>
      
  <div class="DynamicPageGrid" data-val="PROPTXTHDR|Banking Details" id="BankDetail1" style="display:none"> 
  
 <div class="card DYNROW" >
 <div class="FormaccordionSUB">
    <!-- Card header -->
    <div class="card-header Btxt7 active" role="tab" id="headingOne1">
      <a data-toggle="collapse" data-aria="LSW_TFINANCBNKDETL|FCBD|FCBD_BNKNO"  data-multidata="Yes" data-load="" class="Btxt8 AFormaccordion" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
        aria-controls="collapseOne1">       
        <span id="PROPTXTHDR"> Banking Details </span><i class="fa fa-minus-circle rotate-icon"></i>
      </a>
    </div>  
<div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
       <div> 
       <div class="card-body px-lg-5 pt-0 BSbrd"> 
                        </br>
                     <form>
         <input type="text" id="FCBD_PRCSID" hidden="hidden" name="FCBD_PRCSID" class="form-control FCBDDBfields">
         <input type="text" id="FCBD_ACTIVITYID" hidden="hidden" name="FCBD_ACTIVITYID" class="form-control FCBDDBfields">
         <input type="text" id="FCBD_CREATEDBY" hidden="hidden" name="FCBD_CREATEDBY" class="form-control FCBDDBfields">
         <input type="text" id="FCBD_DTCREATED" hidden="hidden" name="FCBD_DTCREATED" class="form-control FCBDDBfields">
         <input type="text" id="FCBD_MODIFIEDBY" hidden="hidden" name="FCBD_MODIFIEDBY" class="form-control FCBDDBfields">
         <input type="text" id="FCBD_DTMODIFIED" hidden="hidden" name="FCBD_DTMODIFIED" class="form-control FCBDDBfields">
        
         <input type="text" id="FCBD_CUSID" hidden="hidden" name="FCBD_CUSID" class="form-control FCBDDBfields">
         <input type="text" id="FCBD_ACCNTSEQNO" hidden="hidden" name="FCBD_ACCNTSEQNO" class="form-control UNIQNO FCBDDBfields">
         <input type="text" id="FCBD_BNKNO" hidden="hidden" name="FCBD_BNKNO" class="form-control FCBDDBfields">
         <input type="text" id="FCBD_BNKBALANCE" hidden="hidden" name="FCBD_BNKBALANCE" class="form-control FCBDDBfields">
         <input type="text" id="FCBD_INFLOW" hidden="hidden" name="FCBD_INFLOW" class="form-control FCBDDBfields">
		 
		 <input type="text" id="FCBD_NETBNKDATA" hidden="hidden" name="FCBD_NETBNKDATA" class="form-control FCBDDBfields">
		 <input type="text" id="FCBD_CHKBOUNCES" hidden="hidden" name="FCBD_CHKBOUNCES" class="form-control FCBDDBfields">
		 <input type="text" id="FCBD_EMILOAN" hidden="hidden" name="FCBD_EMILOAN" class="form-control FCBDDBfields">
		 
        <!-- <input type="text" id="FCBD_SUMAVG" hidden="hidden" name="FCBD_SUMAVG" class="form-control FCBDDBfields">-->
         <input type="text" id="Hiddenrow" hidden="hidden" name="Hiddenrow" value="">
     
	   </br>  
               <div class="form-row">
                                  <div class="col ">
                                    <div class="FltRight DELBTNTXT">
                                         Delete Bank Details
                                          <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="FCBD_PRCSID|FCBD_ACCNTSEQNO|DELETEFINCBANKDET" class="DELBTN DELETEFINCBANKDET"/>
                                      </div>    
                                 </div>     
                                </div> 
	 
	 <div class="form-row">
       <div id="PROPTXTHDR" class="col Btxt10"></div>
             </div>
       <div class="form-row">
            <div class="col-md-4" style="display:none">
                  <div class="md-form">
               <div class="select-radio FCBDMndtry BnkMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline"><!--onclick="ManualAvailable($(this).closest('.DYNROW')[0],this.id);"-->
  <input type="radio" class="custom-control-input FCBDDBfields"  value="Manual" id="Manual" name="FCBD_RPTGENR">
  <label class="custom-control-label" for="Manual">Manual</label>
</div>
<div class="custom-control custom-radio custom-control-inline"><!--onclick="ManualAvailable($(this).closest('.DYNROW')[0],this.id);"-->
<input type="radio" class="custom-control-input FCBDDBfields"   value="Auto" id="Auto" name="FCBD_RPTGENR">
<label class="custom-control-label" for="Auto">Auto</label>
</div>
</div>
                  <label class="mdb-main-label BTxt9">Report Generation<span class="MndtryAstr">*</span></label>      
                  </div>
                </div>
				</div>
			<div class="form-row"><!--ManualRpt-->
                 <div class="col-md-4 "> 
                  <div class="md-form">
                  <div class="HyperControls"> 
                  <a type="button" class="Btxt4 FltLeft BALANCE FCBDDBfields" data-toggle="modal" name="UpdateBalance" data-target="#UpdateBalance" href="#">Update Balance</a>
                </div>
                  </div>
                  </div><!--ManualRpt-->
                  <div class="col-md-4 ">
                  <div class="md-form">
                   <div class="HyperControls"> 
                  <a type="button" class="Btxt4 FltLeft UPDateFlow FCBDDBfields" data-toggle="modal" name="UPDATEINFLOW" data-target="#UPDATEINFLOW" href="#">Update Inflow</a>
                  </div>
                  </div>
                  </div>   
			</div>				  
         <div class="form-row AutoRpt" style="display:none">
              <div class="col">
			   <div class="md-form">
					<button type="button" onclick="NetBankingInteg('Statement','FCBD_BNKNO'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_STDATE'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_ENDDATE'+$(this).closest('.DYNROW').attr('data-row'))" class="btn btn-Syel waves-effect waves-light">Upload</button> 
				</div>
              </div>
			  <div class="col">
                  <div class="md-form">
					<button type="button" onclick="NetBankingInteg('NetBanking','FCBD_BNKNO'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_STDATE'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_ENDDATE'+$(this).closest('.DYNROW').attr('data-row'))" class="btn btn-Syel waves-effect waves-light">Net Banking</button> 
				  </div>
              </div>
        </div>
         </br>
		 </br>
        <div class="form-row DetailRpt ">
            <div class="col-md-4">
                <div class="md-form">
                  	<input type="text" id="FCBD_STDATE" name="FCBD_STDATE"  maxlength="10" class=" form-control DetRpt ISFutureDateFields IsNumberFields  NoSpecialChar FCBDDBfields ISDatefield">
                    <label for="FCBD_STDATE" class="">Start Date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
				</div>
            </div> 
            <div class="col-md-4">
                <div class="md-form">
                  	<input type="text" id="FCBD_ENDDATE" name="FCBD_ENDDATE" onblur="DateValidate('FCBD_STDATE'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_ENDDATE'+$(this).closest('.DYNROW').attr('data-row'));"  maxlength="10"  class="form-control DetRpt  ISFutureDateFields IsNumberFields NoSpecialChar  FCBDDBfields ISDatefield">
                    <label for="FCBD_ENDDATE" class="">End Date<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
				</div>
            </div>
            <div class="col-md-4">
                   <select class="md-form colorful-select dropdown-primary FCBDMndtry FCBDDBfields" disabled id="FCBD_ACCTTYPE" name="FCBD_ACCTTYPE">
                                    <option value="">Select</option>
                                    <option  value="Savings account">Savings account</option>
                                    <option  value="Current Account">Current Account</option>
                                    <option    value="Over Draft Account">Over Draft Account</option>
                                    <option   value="Cash Credit">Cash Credit</option>
                                    <option  value="Others">Others</option>
                                 </select>
                    <label class="mdb-main-label BTxt9">Account Type <span class="MndtryAstr">*</span></label>
               </div>
         </div>
         <div class="form-row DetailRpt">
            <div class="col-md-4">
                  <div class="md-form">
                  	  <input type="text" id="FCBD_ACCTHOLDNAME" disabled maxlength="30"  name="FCBD_ACCTHOLDNAME" class="form-control BnkMndtry IsAlphaFields FCBDDBfields">
                      <label for="FCBD_ACCTHOLDNAME" class="">Account Holder Name<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="FCBD_ACCTNUM" disabled maxlength="15" onchange="GetAccountField('FCBD_ACCTNUM'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_EACCTNUM'+$(this).closest('.DYNROW').attr('data-row'))" name="FCBD_ACCTNUM" class="form-control  FCBDMndtry  IsNumberFields BnkMndtry NoSpecialChar  FCBDDBfields">
                    <label for="FCBD_ACCTNUM" class="">Acccount Number <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="FCBD_BNKNAMBR" disabled maxlength="30"  name="FCBD_BNKNAMBR" class="form-control IsAlphaFields  FCBDMndtry BnkMndtry NoSpecialChar   FCBDDBfields">
                    <label for="FCBD_BNKNAMBR" class="">Bank Name & Branch  <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
          </div>
          <div class="form-row DetailRpt">
			<div class="col ODCC">
                <div class="md-form">
                    <input type="text" id="FCBD_SANCTIONLIM" disabled maxlength="40" name="FCBD_SANCTIONLIM" class="form-control FCBDMndtry FCBDDBfields">
                    <label for="FCBD_SANCTIONLIM" class="">Sanctioned Limit<span class="MndtryAstr">*</span></label>
                </div>
			</div>
			<div class="col ODCC">
                <div class="md-form">
                    <input type="text" id="FCBD_DRAWPWR" disabled maxlength="40" name="FCBD_DRAWPWR" class="form-control FCBDMndtry FCBDDBfields">
                    <label for="FCBD_DRAWPWR" class="">Drawing Power<span class="MndtryAstr">*</span></label>
                </div>
			</div>
            <div class="col-md-4">
                  <div class="md-form">
                  	<input type="text" id="FCBD_INWCHQBOUNS" onchange="CalcInOutCkhPerc('FCBD_INWCHQBOUNS'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_OUTWCHQBOUNS'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_TOTINWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_TOTOUTWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_PERCINWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_PERCOUTWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'Inward Transaction')" maxlength="3"  name="FCBD_INWCHQBOUNS" class="DetRpt form-control IsNumberFields FCBDMndtry BnkMndtry NoSpecialChar  FCBDDBfields">
                    <label for="FCBD_INWCHQBOUNS" class="BNKL">No. of Inward Cheque Bounce<span class="MndtryAstr">*</span></label>
             </div>
                </div>
                
         </div>
         <div class="form-row  DetailRpt">
		 <div class="col-md-4">
                  
                  <div class="md-form">
                    <input type="text" id="FCBD_OUTWCHQBOUNS" onchange="CalcInOutCkhPerc('FCBD_INWCHQBOUNS'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_OUTWCHQBOUNS'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_TOTINWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_TOTOUTWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_PERCINWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_PERCOUTWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'Inward Transaction')" maxlength="3" name="FCBD_OUTWCHQBOUNS" class="DetRpt form-control  IsNumberFields FCBDMndtry BnkMndtry NoSpecialChar FCBDDBfields">
                    <label for="FCBD_OUTWCHQBOUNS" class="BNKL">No. of Outward Cheque Bounce<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                
                 <div class="col-md-4">
                  
                  <div class="md-form">
                    <input type="text" id="FCBD_MINBALCHARGE" maxlength="5"  name="FCBD_MINBALCHARGE" class="DetRpt form-control IsNumberFields  NoSpecialChar  FCBDDBfields">
                    <label for="FCBD_MINBALCHARGE" class="BNKL">No. of Minimum Balance Charges <span class="MndtryAstr"></span></label>
                  </div>
                </div>
            <div class="col-md-4">
                  <div class="md-form">
                  	<input type="text" id="FCBD_STOPPAY" maxlength="3" name="FCBD_STOPPAY" class="DetRpt form-control BnkMndtry FCBDMndtry IsNumberFields  NoSpecialChar  FCBDDBfields">
                    <label for="FCBD_STOPPAY" class="BNKL">No. of Stop Payments<span class="MndtryAstr">*</span></label>
                 </div>
                </div> 
                 <!--   <div class="col-md-4">
                  <div class="md-form">
               <div class="select-radio FCBDMndtry BnkMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input DetRpt FCBDDBfields" value="Yes" id="RetYes" name="FCBD_EMIRUTN">
  <label class="custom-control-label" for="RetYes">Yes</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
<input type="radio" class="custom-control-input DetRpt FCBDDBfields" value="No" id="RetNo" name="FCBD_EMIRUTN">
<label class="custom-control-label" for="RetNo">No</label>
</div>
 <input type="text" id="FCBD_EMIRUTN" hidden="hidden" name="FCBD_EMIRUTN" class="form-control  FCBDDBfields">
</div>
                  <label class="mdb-main-label BTxt9">EMI Returns<span class="MndtryAstr">*</span></label>      
                  </div> 
                </div>-->
                
 
                </div> 
               <div class="form-row DetailRpt">   
					<div class="col-md-4">                 
						<div class="md-form">          
							<div class="select-radio FCBDMndtry BnkMndtry"> 
								<div class="custom-control custom-radio custom-control-inline">
									<input type="radio" class="custom-control-input DetRpt FCBDDBfields" value="Yes" id="MatchYes" name="FCBD_NAMEMATCH">
									<label class="custom-control-label" for="MatchYes">Yes</label>
								</div>
								<div class="custom-control custom-radio custom-control-inline">
									<input type="radio" class="custom-control-input DetRpt FCBDDBfields" value="No" id="MatchNo" name="FCBD_NAMEMATCH">
									<label class="custom-control-label" for="MatchNo">No</label>
								</div>
									<input type="text" id="FCBD_NAMEMATCH" hidden="hidden" name="FCBD_NAMEMATCH" class="form-control  FCBDDBfields">
							</div>
								<label class="mdb-main-label BTxt9">If the Front Page/Name Matching<span class="MndtryAstr">*</span></label>      
						</div>
					</div>
				<div class="col-md-4">			   
                  <div class="md-form">
                    <input type="text" id="FCBD_AVGMONBLNC" value="0" maxlength="10" name="FCBD_AVGMONBLNC" disabled class="DetRpt DSVLBL form-control ABBMndtry BnkMndtry IsNumberFields IsCURCommaFields NoSpecialChar  FCBDDBfields">
                    <label for="FCBD_AVGMONBLNC" class="BNKL">Average Monthly Balance<span class="MndtryAstr">*</span></label>
                  </div>
				  </div>
				  <!--<div class="col-md-4">	
					 <div class="md-form">
               <div class="select-radio"> 
                  <div class="custom-control custom-radio custom-control-inline">
                       <input type="radio" class="custom-control-input DetRpt FCBDDBfields"  onclick="" value="Yes" id="BNKSRGYES" name="FCBD_BNKSRG">
                       <label class="custom-control-label" for="BNKSRGYES">Yes</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input DetRpt FCBDDBfields" onclick="" value="No" id="BNKSRGNO" name="FCBD_BNKSRG">
                        <label class="custom-control-label" for="BNKSRGNO">No</label>
                  </div>
               </div>
                 <label class="mdb-main-label BTxt9">Consider for Banking Surrogate<span class="MndtryAstr"></span></label>      
            </div> 
				  </div>-->
				  	    <div class="form-row">
			   <div class="FCBD_NETBNKDATA"> 
			     <span class="name1 ">Banking Document</span>
			     <input type="text" id="FCBD_NETBNKDATA" hidden="hidden" name="FCBD_NETBNKDATA" class="form-control  DetRpt FCBDDBfields">
                 <img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" class="rounded  ReUpld" title="UPLOAD" onclick="ReuploadFile(FCBD_NETBNKDATA);" alt="Cinque Terre" width="20" height="20">  
				 <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('FCBD_NETBNKDATA'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded " alt="Cinque Terre" width="35" height="25"> 
               </div>
            </div>
				  <div class="col-md-4 AutoOnly" style="display:none">
                  <div class="md-form">
                  	<input type="text" id="FCBD_SANLIMIT" maxlength="15" name="FCBD_SANLIMIT" class="form-control AutoOnlyMnd IsCURCommaFields IsNumberFields FCBDDBfields">
                    <label for="FCBD_SANLIMIT" class="BNKL">Sanction Limit<span class="MndtryAstr">*</span></label>
                 </div>
                </div> 
             </div>
			  <div class="form-row DetailRpt">
			  <div class="col-md-4">
                  <div class="md-form">
                  	<input type="text" id="FCBD_TOTINWTRANC"  maxlength="3"  onchange="CalcInOutCkhPerc('FCBD_INWCHQBOUNS'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_OUTWCHQBOUNS'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_TOTINWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_TOTOUTWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_PERCINWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_PERCOUTWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'Inward Transaction')" name="FCBD_TOTINWTRANC" class="DetRpt form-control IsNumberFields FCBDMndtry  NoSpecialChar  FCBDDBfields">
                    <label for="FCBD_TOTINWTRANC" class="">Total Cheques Issued<span class="MndtryAstr">*</span></label>
             </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="FCBD_INSTRUCLRINDYS" maxlength="5" onchange="CalcperinChqBounc('FCBD_EMILOAN'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_INWCHQBOUNS'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_TOTINWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_INSTRUCLRINDYS'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_PERCINWTRANC'+$(this).closest('.DYNROW').attr('data-row'))" name="FCBD_INSTRUCLRINDYS" class="DetRpt PERCEN form-control  IsNumberFields  FCBDMndtry NoSpecialChar FCBDDBfields">
                    <label for="FCBD_INSTRUCLRINDYS" class="">Instruments cleared within 7 days<span class="MndtryAstr">*</span></label>
                  </div>
                </div>				
	
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="FCBD_PERCINWTRANC" maxlength="5" disabled name="FCBD_PERCINWTRANC" class="DetRpt PERCEN form-control  IsNumberFields  FCBDMndtry NoSpecialChar FCBDDBfields">
                    <label for="FCBD_PERCINWTRANC" class="">Percentage of inward cheque bounce<span class="MndtryAstr">*</span></label>
                  </div>
                </div>

         </div>
		 <div class="form-row DetailRpt">
		     <div class="col-md-4">
                  <div class="md-form">
                  	<input type="text" id="FCBD_TOTOUTWTRANC"  maxlength="3" onchange="CalcInOutCkhPerc('FCBD_INWCHQBOUNS'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_OUTWCHQBOUNS'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_TOTINWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_TOTOUTWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_PERCINWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'FCBD_PERCOUTWTRANC'+$(this).closest('.DYNROW').attr('data-row'),'Outward Transaction')" name="FCBD_TOTOUTWTRANC" class="DetRpt form-control IsNumberFields FCBDMndtry  NoSpecialChar  FCBDDBfields">
                    <label for="FCBD_TOTOUTWTRANC" class="">Total outward transaction<span class="MndtryAstr">*</span></label>
             </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="FCBD_PERCOUTWTRANC" maxlength="5" disabled name="FCBD_PERCOUTWTRANC" class="DetRpt PERCEN form-control IsNumberFields  FCBDMndtry NoSpecialChar  FCBDDBfields">
                    <label for="FCBD_PERCOUTWTRANC" class="">Percentage of outward cheque bounce <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
				<div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="FCBD_CASHTRPERC" maxlength="5"  name="FCBD_CASHTRPERC" class="form-control DetRpt IsNumberFields NoSpecialChar IsPercentageSPLCashTr FCBDDBfields">
                    <label for="FCBD_CASHTRPERC" class="">Cash Transaction %<span class="MndtryAstr"></span></label>
                  </div>
                </div>
		 </div>
     <a type="button" id="Popup" class="btn btn-floating btn-large red FCBDDBfields" style="display:none" name="UpdateBalance" data-toggle="modal" data-target="#UpdateBalance">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade FCBDDBfields" id="UpdateBalance" data-info="ModalWindow" name="UpdateBalanceModal" tabindex="-1" role="dialog" aria-labelledby="UpdateBalanceLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1250px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10"></div> 
   <a href="#"><img id="UpdateBalanceCLOSE" class="close BalanceClose" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form>
         <div class="form-row">
             <div class="col-md-6"> 
              <input type="text" id="FCBD_EACCTNUM"  name="FCBD_EACCTNUM" class="form-control DSVLBL Btxt04 FCBDDBfields" value="">
             </div>
<!--			  <div class="col-md-6 Btxt10 BnkNotes"> 
			    Note: For Banking Surrogate, if Loan Amount is Greater Than 100Lakhs then the ABB computation will happen based on Total Daily Balance; apart from that, the ABB computation will happen based on Amount on 10th, 20th and 30th.
			  </div> -->
         </div>
      <div class="form-row">
          <div class="col">
             <input type="button" data-button="GridButton" data-value="BALANCETable|LSW_SGETBNTBALANCEGRID|PrcsID|FCBD_ACCTNUM|FCBD_BNKNO|11,12,13|BALANCEGRID" style="display:none" class="DashTrg FCBDDBfields BalancGrdTrg  MultiGridTrg" id="BTNBALANCEGRD" name="BTNBALANCEGRD" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display FCBDDBfields DataGrid" name="BALANCETable" id="BALANCETable">
             </table>
          </div>
      </div>
       <div class="form-row">
              <div class="col-md-10 BluShd"> 
                   <label for="" class="Btxt10">Average Monthly Balance &#8377;<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="FCBD_AVG" disabled name="FCBD_AVG" value="0" class="form-control DSVLBL Btxt04 IsCURCommaFields  IsNumberFields NoSpecialChar  FCBDDBfields">
              </div>
         </div>
         </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="BalanceSmt" class="btn btn-yel FCBDDBfields Btxt2 Balance">Submit</button>
      </div>
    </div>
  </div>
  </div>
  
  
   <a type="button" id="Popup" class="btn btn-floating btn-large red FCBDDBfields" style="display:none" name="BnkRepGen" data-toggle="modal" data-target="#BnkRepGen">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade FCBDDBfields" id="BnkRepGen" data-info="ModalWindow" name="BnkRepGenModal" tabindex="-1" role="dialog" aria-labelledby="BnkRepGenLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1250px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10"></div> 
   <a href="#"><img id="BnkRepGenCLOSE" class="close BnkRepGenClose" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form>
        <!-- <div class="form-row">
             <div class="col-md-6"> 
              <input type="text" id="FCBD_EACCTNUM"  name="FCBD_EACCTNUM" class="form-control DSVLBL Btxt04 FCBDDBfields" value="">
             </div>
			  <div class="col-md-6 Btxt10 BnkNotes"> 
			    Note: For Banking Surrogate, if Loan Amount is Greater Than 100Lakhs then the ABB computation will happen based on Total Daily Balance; apart from that, the ABB computation will happen based on Amount on 10th, 20th and 30th.
			  </div> 
         </div>-->
		  <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form">
               <div class="select-radio"> 
                    <div class="custom-control custom-radio custom-control-inline">
                       <input type="radio" class="custom-control-input FCBDDBfields" onclick="" value="Net Banking" id="NetBnk" name="FCBD_RPTGENRTYP">
                       <label class="custom-control-label" for="NetBnk">Net Banking</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                       <input type="radio" class="custom-control-input FCBDDBfields"  onclick="" value="Auto Upload" id="AutoUpd" name="FCBD_RPTGENRTYP">
                       <label class="custom-control-label" for="AutoUpd">Statemenmt Upload</label>
                    </div>
                </div>
                  <label class="mdb-main-label BTxt9">Report Generation Type<span class="MndtryAstr">*</span></label>      
                  </div>
            </div>
		 </div>
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="BnkRepGenCnf" class="btn btn-yel FCBDDBfields Btxt2 RptConfirm">Confirm</button>
      </div>
    </div>
  </div>
  </div>
  
  
  <a type="button" id="Popup1" class="btn btn-floating FCBDDBfields btn-large red"  name="UPDATEINFLOW" style="display:none" data-toggle="modal" data-target="#UPDATEINFLOW">
      <i class="fa fa-plus"></i>
  </a>
<div class="modal fade FCBDDBfields" id="UPDATEINFLOW" data-info="ModalWindow" name="UPDATEINFLOWModal" tabindex="-1" role="dialog" aria-labelledby="UPDATEINFLOWLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1000px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10"></div> 
   <a href="#">  <img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
      </div>  
      <div class="modal-body"> 
   <div class="">
       <form>
    <!-- Card body -->
       <!--  LSW_TFINBNKUPDATEFLOW -->  
          <div class="form-row">
             <div class="col"> 
              <input type="text" id="FCBD_EACCTNUM"  name="FCBD_EACCTNUM" class="form-control DSVLBL Btxt04 FCBDDBfields" value="">
             </div>
          </div> 
          <div class="form-row">
            <div class="col">
                <input type="button" data-button="GridButton" data-value="FLOWTable|LSW_SGETUPDATEFLOWGRID|PrcsID|FCBD_ACCTNUM|FCBD_BNKNO|7|UPDATEFLOWGRID" style="display:none" class="DashTrg FCBDDBfields AddMultiGridTrg MultiGridTrg" id="BTNINCMGRD" name="BTNINCMGRD" />
                <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display FCBDDBfields DataGrid" name="FLOWTable" id="FLOWTable">
                </table>
            </div>
          </div>
          <div class="form-row ">
              <div class="col-md-3 BluShd"> 
                   <label for="" class="Btxt10">Total &#8377;<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="FCBD_INFLWSUM" disabled name="FCBD_INFLWSUM" value="0" class="form-control DSVLBL Btxt04 IsCURCommaFields  IsNumberFields NoSpecialChar  FCBDDBfields">
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="FCBD_OUTFLWSUM" disabled name="FCBD_OUTFLWSUM" value="0" class="form-control DSVLBL Btxt04 IsCURCommaFields  IsNumberFields NoSpecialChar  FCBDDBfields">
              </div>
         </div>
          <div class="modal-footer align-middle">              
                <button type="button" id="OFFVER"  class="UPFLOWSUBMIT btn btn-Syel FCBDDBfields waves-effect waves-light ">SUBMIT</button>
           </div>
           </form>
          </div>
          </div>
          </div>
          </div> 
      </div>
  <div class="form-row">
          <div class="col d-flex justify-content-center">
              <button type="button" id="Save" data-aria="LSW_TFINANCBNKDETL|FCBD|FCBD_BNKNO"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>
              <button type="button" data-aria="LSW_TFINANCBNKDETL|FCBD|FCBD_BNKNO" data-card="0"  class="btn btn-Syel waves-effect waves-light FormSave NXTBTNF">Save & Next</button> 
        </div>
 </div>
   </form>
  </div>
</div>  
    </div>
      </div>
</div>
</div>
 </div>
 
        <div class="card CardNS  NODATA"  style="display:none" >
         <div class="form-row" style="text-align: center;">
            <div class="col">
                <div class="md-form">
                    <input type="text" id="" style="text-align: center;" disabled value="No Data Available in Bank Details" name="" class="DSVLBL  Btxt7 form-control AddrNoSpecialChar FIRVDBfields">

               </div>
            </div>
           </div>
         </div>  
 
</div>
 </div> 
<script type="text/javascript" src="ThemeproLO/Financials/Script/FincBnk/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Financials/Script/FincBnk/Validation.js${DMY13}"></script>  

  <table style="display:none" id="GridBALANCETable">
   <thead>
<th>BUBM_MONTH</th>
<th>BUBM_DADE5TH</th>
<th>BUBM_DADE10TH</th>
<th>BUBM_DADE15TH</th>
<th>BUBM_DADE20TH</th>
<th>BUBM_DADE25TH</th>
<th>BUBM_DADE30TH</th>
<th>BUBM_DAILYBAL</th>
<th>BUBM_SUBAMT</th>
<th>BUBM_REMARK</th>
<th>BUBM_ANG</th>
<th>BUBM_DADE</th>
<th>BUBM_BNKNO</th>
<!--<th>BUBM_PRCSID</th>
<th>BUBM_ACTIVITYID</th>
<th>BUBM_CREATEDBY</th>
<th>BUBM_DTCREATED</th>
<th>BUBM_MODIFIEDBY</th>
<th>BUBM_DTMODIFIED</th>-->
   </thead> 
    </table> 
     <table style="display:none" id="GridFLOWTable">
   <thead>
<th>UPFD_MOUNTH</th>
<th>UPFD_INFLOW</th>
<th>UPFD_OUTFLOW</th>
<th>UPFD_TOTALINFLOW</th>
<th>UPFD_TOTALOUTFLOW</th>
<th>UPFD_CASHDEP</th>
<th>UPFD_CASHWITDRA</th>
<th>UPFD_UNIQID</th>
<!--<th>UPFD_PRCSID</th>
<th>UPFD_ACTIVITYID</th>
<th>UPFD_CREATEDBY</th>
<th>UPFD_DTCREATED</th>
<th>UPFD_MODIFIEDBY</th>
<th>UPFD_DTMODIFIED</th>-->
   </thead> 
    </table>                   
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>      
     