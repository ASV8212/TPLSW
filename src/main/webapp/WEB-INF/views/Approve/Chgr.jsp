</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
      </br>
      <!-- card -->
      <div class="card">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
               <input type="text" id="APCM_PRCSID" hidden="hidden" name="APCM_PRCSID" class="form-control APCMDBfields">
               <input type="text" id="APCM_ACTIVITYID" hidden="hidden" name="APCM_ACTIVITYID" class="form-control APCMDBfields">
               <input type="text" id="APCM_DTCREATED" hidden="hidden" name="APCM_DTCREATED" class="form-control APCMDBfields">
               <input type="text" id="APCM_CREATEDBY" hidden="hidden" name="APCM_CREATEDBY" class="form-control APCMDBfields">
               <input type="text" id="APCM_DTMODIFIED" hidden="hidden" name="APCM_DTMODIFIED" class="form-control APCMDBfields">
               <input type="text" id="APCM_MODIFIEDBY" hidden="hidden"  name="APCM_MODIFIEDBY" class="form-control APCMDBfields">
               <input type="text" id="APCM_LOANAMT" hidden="hidden"  name="APCM_LOANAMT" class="form-control APCMDBfields IsNumberFields IsCURCommaFields">
               
               <input type="text" id="APCM_AECHRGAMTN" hidden="hidden"  name="APCM_AECHRGAMTN" class="form-control APCMDBfields IsNumberFields IsCURCommaFields">
			   <input type="text" id="APCM_WOEFFCTCGRGAMTCERSAI" hidden="hidden"  name="APCM_WOEFFCTCGRGAMTCERSAI" class="form-control APCMDBfields IsNumberFields IsCURCommaFields">
			   
			   
			   
               
               <input type="text" id="APCM_PROPGRD" hidden="hidden"  name="APCM_PROPGRD" class="form-control APCMDBfields">
			   <input type="text" id="APCM_ROI" hidden="hidden"  name="APCM_ROI" class="form-control APCMDBfields">
               
               </br>
               <div class = "ROOT">
               <div class="form-row">
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="APCM_EFFCTVINTRST" name="APCM_EFFCTVINTRST" onchange="ChkEffectiveRate();"  maxlength="5" class="IsPercentageSPL form-control  form-control APCMDBfields IsNumberFields   ">
                        <label for="APCM_EFFCTVINTRST" class="">Effective Interest Rate (%)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                  </div>
                  <div class="col-md-4">
                  </div>
               </div>
               <div class="form-row">
                  <div class="col Btxt10">ADMIN FEE</div>
               </div>
			<div class="ADMINMND">
               <div class="form-row">
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="APCM_ACHRGRT" value="2" name="APCM_ACHRGRT" onchange="CalcEffectChargAmt();"  maxlength="5" class="form-control APCMMndtry ADONLINE form-control IsPercentageSPL APCMDBfields  IsNumberFields">
                        <label for="APCM_ACHRGRT" class="">Charge Rate (%)<span class="MndtryAstr">*</span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="md-form"> 
                        <input type="text" id="APCM_WOGSTCHRGAMT" disabled name="APCM_WOGSTCHRGAMT"  maxlength="10" class="form-control DSVLBL  form-control  APCMDBfields IsNumberFields  IsCURCommaFields ">
                        <label for="APCM_WOGSTCHRGAMT" class="">Effective Charge Amount<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="md-form">
                        <div id="" class="select-radio APCMMndtry">
                           <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" class="custom-control-input APCMDBfields ADONLINE" onclick="CheckADMINFEECHK();LoadGSTtoEfct();"	value="Collectible" id="ARECVAMTBYYes" name="APCM_ARECVAMTBY">
                              <label class="custom-control-label" for="ARECVAMTBYYes">Collectible</label>
                           </div>
                           <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" class="custom-control-input APCMDBfields ADONLINE" onclick="CheckADMINFEECHK();LoadGSTtoEfct();" value="Deductible" id="ARECVAMTBYNo" name="APCM_ARECVAMTBY">
                              <label class="custom-control-label" for="ARECVAMTBYNo">Deductible</label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
           <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form ADFEE">
               <div class="select-radio  ADRedioMNDRY"> 
                    <div class="custom-control custom-radio custom-control-inline">
                       <input type="radio" class="custom-control-input APCMDBfields ADONLINE ADFEERADIO CHNGE"  onclick="CheckADMINFEE();" disabled onchange="ChKModeDataClear($(this).closest('.ROOT'));" value="Cheque" id="ChqRadio" name="APCM_MODE">
                       <label class="custom-control-label" for="ChqRadio">Cheque</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input APCMDBfields ADONLINE ADFEERADIO CHNGE" disabled  onclick="CheckADMINFEE();" onchange="ChKModeDataClear($(this).closest('.ROOT'));" value="Online" id="OnlRadio" name="APCM_MODE">
                        <label class="custom-control-label" for="OnlRadio">Online</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input APCMDBfields ADONLINE ADFEERADIO CHNGE" onclick="CheckADMINFEE();" onchange="ChKModeDataClear($(this).closest('.ROOT'));" value="DD" id="DDRadio" name="APCM_MODE">
                        <label class="custom-control-label" for="DDRadio">DD</label>
                   </div>
              </div>
                   <label class="mdb-main-label BTxt9">Mode <span class="MndtryAstr">*</span></label>      
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="APCM_AAMNT" name="APCM_AAMNT" maxlength="8" onchange="CheckDmndAmt('PFDT_DEMANDAMT','PFDT_AMOUNT')" disabled class="form-control IsNumberFields DSVLBL IsCURCommaFields NoSpecialChar PFDTMndtry APCMDBfields">
                    <label for="APCM_AAMNT" class="">Amount (incl GST) (Rs.) <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                
           
          
           </div>
           
            <div class="OnlineMode  ADOnlineMode" style="display:none">
             <div class="form-row">
                <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary OnlineModeFld ADONLINE  ADOnlineModeFld APCMDBfields" id="APCM_ONLINEMOD" name="APCM_ONLINEMOD">
                  	<option value="">Select</option>
  					<option value="Paytm">Paytm</option>
  					<option value="UPI">UPI</option>
  					<option value="Debit card">Debit card</option>
 					 <option value="Net Banking">Net Banking</option>				
				</select>
				<label class="mdb-main-label BTxt9">Online Mode <span class="MndtryAstr">*</span></label>
                </div>
           		</div>
           		 <div class="col">
                     <div class="md-form">
                         <button type="button" id="CTPAF" onclick="ChkPayAmt();CollectionINTRCHRG('APCM_ONLINEMOD','APCM_AAMNT','APCM_ARECVAMTBY','AF')" class="btn btn-yel Btxt2 CTP">Click To Pay</button>
                     </div>
           		</div>
           		<div class="col" style="display:none">
           			 <div class="md-form">
                                <!--  <label class="mdb-main-label BTxt9">Send link to</label> -->
                           <button type="button" id="Collected" onclick="ClickCollectedBtn();" class="btn btn-yel Btxt2">Collected</button>
                    </div>
           		</div>
           </div>
           </div>     
           <div class="CHK ADCHK" style="display:none">
            <div class="form-row  ADONLINEBNK">
              <div class="col">
            	<div class="md-form">
                  	<input type="text" id="APCM_IFSC" onblur="Ifscdetls(this,'APCM_ABANKNAME','APCM_BNKBRCH')" maxlength="11" name="APCM_IFSC" class="AFSTA form-control ADONLINE ADCHKCHAGE CHKCHAGE Mndtry IsIFSCFields OCRDSBL NoSpecialChar APCMDBfields">
                    <label for="APCM_IFSC" class="">IFSC <span class="MndtryAstr">*</span></label>
             </div>
            </div> 
              <div class="col">
            	<div class="md-form">
                  	<input type="text" id="APCM_ABANKNAME" disabled name="APCM_ABANKNAME" class="AFSTA form-control Mndtry ADCHKCHAGE CHKCHAGE DSVLBL OCRDSBL APCMDBfields">
                    <label for="APCM_ABANKNAME" class="">Bank Name <span class="MndtryAstr">*</span></label>
                  </div>
              </div>
              <div class="col">
              	  <div class="md-form">
                  	<input type="text" id="APCM_BNKBRCH" disabled name="APCM_BNKBRCH" class="AFSTA form-control Mndtry OCRDSBL DSVLBL ADCHKCHAGE CHKCHAGE APCMDBfields">
                    <label for="APCM_BNKBRCH" class="">Bank Branch <span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           </div>
           <div class="form-row">	
              <div class="col">
                 <div class="md-form">
                  	<input type="text" id="APCM_ADDDT" name="APCM_ADDDT" onblur="INSTRUMENTDATE('APCM_ADDDT')" maxlength="10" class="ADONLINE AFSTA form-control ADCHKCHAGE CHKCHAGE IsNumberFields ISDatefield ISFutureDateFields Mndtry APCMDBfields ">
                    <label for="APCM_ADDDT" class="">Instrument Date <span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                 </div>
             </div>
             <div class="col">
            	    <div class="md-form">
                  	<input type="text" id="APCM_ADDNO" maxlength="6" name="APCM_ADDNO" class="ADONLINE IsChequeFields  AFSTA form-control IsNumberFields CHKCHAGE NoSpecialChar ADCHKCHAGE OCRDSBL Mndtry APCMDBfields">
                        <label for="APCM_ADDNO" class="">Instrument Number <span class="MndtryAstr">*</span></label>
                   </div>
             </div>
            <div class="col">
            	<div class="md-form">
            	   <input type="text" id="APCM_STATUS" name="APCM_STATUS" disabled value="Not Known" class="form-control DSVLBL IsNumberFields APCMDBfields">
                   <label for="APCM_STATUS" class="">Status<span class="MndtryAstr"></span></label>
             </div>
            </div> 
           </div>
           <div class="form-row ADONLINEBNK ADONLINEBNKONL">	
           <div class="col-md-4">
            	<div class="md-form">
            	   <input type="text" id="APCM_RecptNum" name="APCM_RecptNum" disabled value="" class="form-control DSVLBL IsNumberFields APCMDBfields active">
                   <label for="APCM_RecptNum" class="">Receipt Number<span class="MndtryAstr"></span></label>
             </div>
            </div> 
           <div class="col-md-4  ADBTN">
                 <button type="button" class="btn Collected  waves-effect btn-yelInplain btn-sm BTNVerify">Click To Collect</button>
           </div>
		   <div class="col-md-4 RECIPT" style="display:none">
                 <div class="HyperControls form-row FltRight"> 
	                  <a onclick="GetCERSAIReciptDetl('AF')" class="Btxt4 FltRight BTNHIDE" data-toggle="modal" name="AFReciept" data-target="#AFModal" href="#">View Receipt</a>
                 </div>
            </div>
           </div>
        </div>  
       </div>
           <div class="form-row">
             <div class="col-md-4">
                     <!-- <div class="md-form">
                        <input type="text" id="APCM_ADDDT" name="APCM_ADDDT"  maxlength="10" class="form-control form-control APCMDBfields NoSpecialChar IsNumberFields ISDatefield  ">
                        <label for="APCM_ADDDT" class="">DD Date<span class="MndtryAstr"></span></label>
                        <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                     </div>-->
            </div>
            <div class="col-md-7 "> 
               <div class="md-form">
                  <div class="HyperControls FltRight BTNHIDE"> 
                     <a type="button" style="display:none;" class="Btxt4 FltLeft VIEWRPTPopup FCBDDBfields" data-toggle="modal" name="UpdateBalance" data-target="#UpdateBalance" href="#">View Report</a>
                  </div>
              </div>
           </div>
           <div class="col-md-1">
           </div>
        </div>
        <div class="form-row" style="display:none">
                  <div class="col d-flex justify-content-center">
                     <button type="button" data-aria="LSW_TAPPRCHRGHDR|APCM" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Collect</button> 
                  </div>
       </div>
       <div class="form-row">
                 <div class="col-md-3 BluShd">
                     <div class="md-form">
          <input type="text" disabled  maxlength="10" value="CROSS SELL 1 - LIFE" class="Btxt17 DSVLBL form-control form-control">
                     </div>
                  </div>

                      <div class="col-md-9 BluShd">
                     <div class="md-form">
                        <div id="" class="select-radio ">
                           <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" class="custom-control-input APCMDBfields" disabled onclick="CROSSCELLI()"	value="Yes" id="ISCROSSELL1APPLYYes" name="APCM_ISCROSSELL1APPLY">
                              <label class="custom-control-label" for="ISCROSSELL1APPLYYes">Yes</label>
                           </div>
                           <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" class="custom-control-input APCMDBfields" disabled onclick="CROSSCELLI()"  value="No" id="ISCROSSELL1APPLYNo" name="APCM_ISCROSSELL1APPLY">
                              <label class="custom-control-label" for="ISCROSSELL1APPLYNo">No</label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="form-row  CRSELLI">
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="APCM_CROSSELL1YR" name="APCM_CROSSELL1YR" disabled  maxlength="10" class="form-control DSVLBL  form-control APCMDBfields  IsNumberFields ">
                        <label for="APCM_CROSSELL1YR" class="">No. of Years Opted<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="APCM_CROSSEL1TNR"  name="APCM_CROSSEL1TNR" disabled maxlength="10" class="form-control DSVLBL form-control APCMDBfields  IsNumberFields ">
                        <label for="APCM_CROSSELL1TNR" class="">Loan Tenure<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                  <div class="md-form">
                        <input type="text" id="APCM_CROSSELPREMAMT"  name="APCM_CROSSELPREMAMT" disabled maxlength="10" class="form-control DSVLBL form-control APCMDBfields  IsCURCommaFields IsNumberFields ">
                        <label for="APCM_CROSSELPREMAMT" class="">Premium Amount<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
               </div>
               
               
               <div class="form-row">
                  <div class="col-md-3 BluShd">
                     <div class="md-form">
           <input type="text" disabled  maxlength="10" value="CROSS SELL 2 - COMBO" class="Btxt17 DSVLBL form-control form-control    ">
                     </div>
                  </div>
                      <div class="col-md-9 BluShd">
                     <div class="md-form">
                        <div id="" class="select-radio ">
                           <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" class="custom-control-input APCMDBfields" 	disabled onclick="CROSSCELLIIAPPLY();" value="Yes" id="ISCROSSELL2APPLYYes" name="APCM_ISCROSSELL2APPLY">
                              <label class="custom-control-label" for="ISCROSSELL2APPLYYes">Yes</label>
                           </div>
                           <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" class="custom-control-input APCMDBfields" disabled onclick="CROSSCELLIIAPPLY();"   value="No" id="ISCROSSELL2APPLYNo" name="APCM_ISCROSSELL2APPLY">
                              <label class="custom-control-label" for="ISCROSSELL2APPLYNo">No</label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div class="form-row CRSELLII">
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="APCM_CROSSELL2YR" name="APCM_CROSSELL2YR" disabled maxlength="10" class="form-control form-control DSVLBL APCMDBfields  IsNumberFields ">
                        <label for="APCM_CROSSELL2YR" class="">No. of Years Opted<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="APCM_CROSSELL2TNR"  name="APCM_CROSSELL2TNR" disabled  maxlength="10" class="form-control DSVLBL form-control APCMDBfields   ">
                        <label for="APCM_CROSSELL2TNR" class="">Loan Tenure<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                    <div class="md-form">
                        <input type="text" id="APCM_CROSSELLCOMPRAAMT"  name="APCM_CROSSELLCOMPRAAMT" disabled  maxlength="10" class="form-control DSVLBL form-control IsCURCommaFields APCMDBfields   ">
                        <label for="APCM_CROSSELLCOMPRAAMT" class="">Premium Amount<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
               </div>
               <div class="form-row">
		        <div data-for="PROPERTYINSURANCE" class="col PROPERTYINSURANCE"> 
		        </div>
		         </div>
		         <div class="DynamicPageGrid" data-val="PROPTXTHDR|PROPERTY INSURANCE" id="PROPERTYINSURANCE" style="display:none">
		         <div data-row="" class="DYNROW">
		         <input type="text" id="APRC_PRCSID" hidden="hidden" name="APRC_PRCSID" class="form-control APRCDBfields">
		        <input type="text" id="APRC_ACTIVITYID" hidden="hidden" name="APRC_ACTIVITYID" class="form-control APRCDBfields">
		        <input type="text" id="APRC_DTCREATED" hidden="hidden" name="APRC_DTCREATED" class="form-control APRCDBfields">
		        <input type="text" id="APRC_CREATEDBY" hidden="hidden" name="APRC_CREATEDBY" class="form-control APRCDBfields">
		        <input type="text" id="APRC_DTMODIFIED" hidden="hidden" name="APRC_DTMODIFIED" class="form-control APRCDBfields">
		        <input type="text" id="APRC_MODIFIEDBY" hidden="hidden" name="APRC_MODIFIEDBY" class="form-control APRCDBfields">
		         <input type="text" id="APRC_LOCATN" hidden="hidden" name="APRC_LOCATN" class="form-control APRCDBfields">
		        
		        <div class="form-row">
               
                 <div class="col-md-3 BluShd">
                     <div class="md-form">
        <input type="text" disabled maxlength="10" value=" PROPERTY INSURANCE" class="Btxt17 DSVLBL form-control form-control    ">
                     </div>
                  </div>
                     <div class="col-md-9 BluShd">
                     <div class="md-form">
                      <div id="" class="select-radio ">
                           <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" class="custom-control-input APRCDBfields" disabled onclick="PROPERTYINS();"	value="Yes" id="ISPROPAPPLYYes" name="APRC_ISPROPAPPLY">
                              <label class="custom-control-label" for="ISPROPAPPLYYes">Yes</label>
                           </div>
                           <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" class="custom-control-input APRCDBfields" disabled onclick="PROPERTYINS();" value="No" id="ISPROPAPPLYNo" name="APRC_ISPROPAPPLY">
                              <label class="custom-control-label" for="ISPROPAPPLYNo">No</label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="form-row PROINSU">
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="APRC_PROPYR" name="APRC_PROPYR"  maxlength="10" class="form-control form-control DSVLBL APRCDBfields  IsNumberFields ">
                        <label for="APRC_PROPYR" class="">No. of Years Opted<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="APRC_PROPTNR"  name="APRC_PROPTNR" disabled maxlength="10" class="form-control DSVLBL form-control APRCDBfields   ">
                        <label for="APRC_PROPTNR" class="">Loan Tenure<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                   <div class="md-form">
                        <input type="text" id="APRC_PRIMUMAMT"  name="APRC_PRIMUMAMT" disabled maxlength="10" class="form-control DSVLBL form-control IsNumberFields  IsCURCommaFields APRCDBfields   ">
                        <label for="APRC_PRIMUMAMT" class="">Premium Amount<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
               </div>
		        
		         </div>
		         </div>
          <div class = "ROOT CERSAIMND">
               <div class="form-row BluShd">
                  <div class="col-md-3 ">
                       <div class="md-form">
            <input type="text"  disabled maxlength="10" value=" CERSAI" disabled class="Btxt17 DSVLBL form-control form-control">
                       </div>
                  </div>
               </div>
               <div class="form-row">
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="APCM_NOOFCERSAI"  name="APCM_NOOFCERSAI" disabled maxlength="10" class="form-control DSVLBL form-control APCMDBfields   ">
                        <label for="APCM_NOOFCERSAI" class="">No. of Collateral<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="APCM_EFFCTCGRGAMTCERSAI" disabled name="APCM_EFFCTCGRGAMTCERSAI"  maxlength="10" class="form-control DSVLBL form-control APCMDBfields IsCURCommaFields IsNumberFields ">
                        <label for="APCM_EFFCTCGRGAMTCERSAI" class="">Effective Charge Amount(incl GST)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="md-form">
                        <div id="" class="select-radio APCMMndtry">
                           <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" class="custom-control-input APCMDBfields CERONL" onclick="CheckCERSAICHK()"	value="Collectible" id="CERSAIRECVBYCollectible" name="APCM_CERSAIRECVBY">
                              <label class="custom-control-label" for="CERSAIRECVBYCollectible">Collectible</label>
                           </div>
                           <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" class="custom-control-input APCMDBfields CERONL" onclick="CheckCERSAICHK()" value="Deductible" id="CERSAIRECVBYDeductible" name="APCM_CERSAIRECVBY">
                              <label class="custom-control-label" for="CERSAIRECVBYDeductible">Deductible</label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form CERSAI">
               <div class="select-radio  CERedioMNDRY"> 
                    <div class="custom-control custom-radio custom-control-inline">
                       <input type="radio" class="custom-control-input APCMDBfields  CERMODE" onclick="CheckCERSAI()" onchange="ChKModeDataClear($(this).closest('.ROOT'));" disabled value="Cheque" id="CERSAIChqRadio" name="APCM_CERSAIMODE">
                       <label class="custom-control-label" for="CERSAIChqRadio">Cheque</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input APCMDBfields CERONL CERMODE " onclick="CheckCERSAI()" disabled onchange="ChKModeDataClear($(this).closest('.ROOT'));" value="Online" id="CERSAIOnlRadio" name="APCM_CERSAIMODE">
                        <label class="custom-control-label" for="CERSAIOnlRadio">Online</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input APCMDBfields CERONL CERMODE" onclick="CheckCERSAI()" onchange="ChKModeDataClear($(this).closest('.ROOT'));" value="DD" id="CERSAIDDRadio" name="APCM_CERSAIMODE">
                        <label class="custom-control-label" for="CERSAIDDRadio">DD</label>
                   </div>
              </div>
                   <label class="mdb-main-label BTxt9">Mode <span class="MndtryAstr">*</span></label>      
                  </div>
                </div>
                </div>
                <div class="CEOnlineMode" style="display:none">
           <div class="form-row">
                <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary OnlineModeFld CEOnlineModeFld APCMDBfields CERONL" id="APCM_CERSAIONLINEMOD" name="APCM_CERSAIONLINEMOD">
                  	<option value="">Select</option>
  					<option value="Paytm">Paytm</option>
  					<option value="UPI">UPI</option>
  					<option value="Debit card">Debit card</option>
 					 <option value="Net Banking">Net Banking</option>				
				</select>
				<label class="mdb-main-label BTxt9">Online Mode <span class="MndtryAstr">*</span></label>
                </div>
           		</div>
           		 <div class="col">
                     <div class="md-form ">
                         <button type="button" id="CTPC" onclick="ChkPayAmt();CollectionINTRCHRG('APCM_CERSAIONLINEMOD','APCM_EFFCTCGRGAMTCERSAI','APCM_CERSAIRECVBY','CERSAI')" class="btn btn-yel Btxt2 CTP">Click To Pay</button>
                     </div>
           		</div>
           		<div class="col" style="display:none">
           			 <div class="md-form">
                                <!--  <label class="mdb-main-label BTxt9">Send link to</label> -->
                           <button type="button" id="Collected" onclick="ClickCollectedBtn();" class="btn btn-yel Btxt2">Collected</button>
                    </div>
           		</div>
           </div>
           </div>     
           <div class="CECHK" style="display:none">
            <div class="form-row  CERONLINEBNK">
              <div class="col">
            	<div class="md-form">
                  	<input type="text" id="APCM_CERSAIIFSC" onblur="Ifscdetls(this,'APCM_CERSAIABANKNAME','APCM_CERSAIBNKBRCH')" maxlength="11" name="APCM_CERSAIIFSC" class="CESTA form-control CECHKCHAGE CHKCHAGE Mndtry IsIFSCFields CERONL OCRDSBL NoSpecialChar APCMDBfields">
                    <label for="APCM_CERSAIIFSC" class="">IFSC <span class="MndtryAstr">*</span></label>
             </div>
            </div> 
              <div class="col">
            	<div class="md-form">
                  	<input type="text" id="APCM_CERSAIABANKNAME" disabled name="APCM_CERSAIABANKNAME" class="form-control CESTA Mndtry DSVLBL CECHKCHAGE CHKCHAGE OCRDSBL APCMDBfields">
                    <label for="APCM_CERSAIABANKNAME" class="">Bank Name <span class="MndtryAstr">*</span></label>
                  </div>
              </div>
              <div class="col">
              	  <div class="md-form">
                  	<input type="text" id="APCM_CERSAIBNKBRCH" disabled name="APCM_CERSAIBNKBRCH" class="form-control Mndtry CESTA DSVLBL CECHKCHAGE OCRDSBL CHKCHAGE APCMDBfields">
                    <label for="APCM_CERSAIBNKBRCH" class="">Bank Branch <span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           </div>
           <div class="form-row">	
              <div class="col">
                 <div class="md-form">
                  	<input type="text" id="APCM_CERSAIADDDT" name="APCM_CERSAIADDDT"  onblur="INSTRUMENTDATE('APCM_CERSAIADDDT')"   maxlength="10" class="CERONL CESTA form-control CECHKCHAGE  CHKCHAGE ISFutureDateFields IsNumberFields ISDatefield  Mndtry APCMDBfields ">
                    <label for="APCM_CERSAIADDDT" class="">Instrument Date <span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                 </div>
             </div>
             <div class="col">
            	    <div class="md-form">
                  	<input type="text" id="APCM_CERSAIADDNO" maxlength="6" name="APCM_CERSAIADDNO" class="CERONL form-control IsChequeFields  IsNumberFields CESTA CHKCHAGE CECHKCHAGE NoSpecialChar OCRDSBL Mndtry APCMDBfields">
                        <label for="APCM_CERSAIADDNO" class="">Instrument Number <span class="MndtryAstr">*</span></label>
                   </div>
             </div>
            <div class="col">
            	<div class="md-form">
            	   <input type="text" id="APCM_CERSAISTATUS" name="APCM_CERSAISTATUS" disabled value="Not Known" class="form-control DSVLBL IsNumberFields APCMDBfields">
                   <label for="APCM_CERSAISTATUS" class="">Status<span class="MndtryAstr"></span></label>
             </div>
            </div> 
           </div>
           <div class="form-row CERONLINEBNK CERONLINEBNKONL">	
           <div class="col-md-4">
           <div class="md-form">
                 <input type="text" id="APCM_RecptNum1" name="APCM_RecptNum1" disabled value="" class="form-control DSVLBL IsNumberFields APCMDBfields active">
                   <label for="APCM_RecptNum1" class="">Receipt Number<span class="MndtryAstr"></span></label>
          </div>
           </div>
           <div class="col-md-4 btnCERSAI">
                 <button type="button" class="btn Collected1  waves-effect btn-yelInplain btn-sm BTNVerify">Click To Collect</button>
           </div>
		   <div class="col-md-4 CERSRECIPT" style="display:none">
                 <div class="HyperControls form-row FltRight"> 
	                  <a onclick="GetCERSAIReciptDetl('')" class="Btxt4 FltRight" data-toggle="modal" name="CERSAIReciept" data-target="#CERSAIModal" href="#">View Reciept</a>
                 </div>
            </div>
           </div>
        </div>  
        </div>
        <div class = "ROOT  PFMNDCHK">
               <div class="form-row BluShd">
                 <div class="col-md-3">
                     <div class="md-form">
                        <input type="text"  maxlength="10" value="PENDING PROCESSING FEE" disabled class="Btxt17 DSVLBL form-control form-control    ">
                     </div>
                </div>
              </div>
               <div class="form-row">
                  <div class="col-md-4" style="display:none">
                     <div class="md-form" >
                        <input type="text" id="APCM_PENDNGAMT"  name="APCM_PENDNGAMT" disabled  maxlength="10" class="form-control DSVLBL form-control APCMDBfields IsCURCommaFields IsNumberFields ">
                        <label for="APCM_PENDNGAMT" class="">Pending Amount (incl GST)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
				   <div class="col-md-4" style="">
                     <div class="md-form">
                        <input type="text" id="APCM_PFWAIVERAMT"  name="APCM_PFWAIVERAMT"  maxlength="10" onblur="GETPFCOLLAMT();" class="form-control PFSTA form-control APCMDBfields IsCURCommaFields IsNumberFields ">
                        <label for="APCM_PFWAIVERAMT" class="">Waiver Amount <span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="md-form">
                        <input type="text" id="APCM_AMNTCOLLCT" disabled name="APCM_AMNTCOLLCT"  maxlength="10" class="form-control DSVLBL form-control APCMDBfields IsCURCommaFields IsNumberFields ">
                        <label for="APCM_AMNTCOLLCT" class="">Amount To be Collected (incl GST)<span class="MndtryAstr"></span></label>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="md-form ">
                        <div id="" class="select-radio APCMMndtry">
                           <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" class="custom-control-input APCMDBfields PFONL" onclick="CheckPENDINGCHK()"	value="Collectible" id="PFCollectedCollectible" name="APCM_PFCOLLECTED">
                              <label class="custom-control-label" for="PFCollectedCollectible">Collectible</label>
                           </div>
                           <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" class="custom-control-input APCMDBfields PFONL" onclick="CheckPENDINGCHK()" value="Deductible" id="PFCollectedDeductible" name="APCM_PFCOLLECTED">
                              <label class="custom-control-label" for="PFCollectedDeductible">Deductible</label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
      <div class="form-row">
            <div class="col-md-4">
                  <div class="md-form PEFEE ">
               <div class="select-radio  PFRedioMNDRY"> 
                    <div class="custom-control custom-radio custom-control-inline">
                       <input type="radio" class="custom-control-input APCMDBfields PEFEMODE PFONL" onclick="CheckPENDINGFEE()" onchange="ChKModeDataClear($(this).closest('.ROOT'));" disabled value="Cheque" id="PFChqRadio" name="APCM_PFMODE">
                       <label class="custom-control-label" for="PFChqRadio">Cheque</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input APCMDBfields PEFEMODE PFONL" onclick="CheckPENDINGFEE()"  disabled onchange="ChKModeDataClear($(this).closest('.ROOT'));" value="Online" id="PFOnlRadio" name="APCM_PFMODE">
                        <label class="custom-control-label" for="PFOnlRadio">Online</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input APCMDBfields PEFEMODE PFONL" onclick="CheckPENDINGFEE()" onchange="ChKModeDataClear($(this).closest('.ROOT'));" value="DD" id="PFDDRadio" name="APCM_PFMODE">
                        <label class="custom-control-label" for="PFDDRadio">DD</label>
                   </div>
              </div>
                   <label class="mdb-main-label BTxt9">Mode <span class="MndtryAstr">*</span></label>      
                  </div>
                </div>
                </div>
                
        <div class="PFOnlineMode" style="display:none">
           <div class="form-row">
                <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary APCMDBfields PFOnlineModeFld OnlineModeFld PFONL" id="APCM_PFONLINEMOD" name="APCM_PFONLINEMOD">
                  	<option value="">Select</option>
  					<option value="Paytm">Paytm</option>
  					<option value="UPI">UPI</option>
  					<option value="Debit card">Debit card</option>
 					 <option value="Net Banking">Net Banking</option>				
				</select>
				<label class="mdb-main-label BTxt9">Online Mode <span class="MndtryAstr">*</span></label>
                </div>
           		</div>
           		 <div class="col">
                     <div class="md-form">
                         <button type="button" id="CTPPF" onclick="ChkPayAmt();CollectionINTRCHRG('APCM_PFONLINEMOD','APCM_AMNTCOLLCT','APCM_PFCOLLECTED','PF')" class="btn btn-yel Btxt2 ">Click To Pay</button>
                     </div>
           		</div>
           		<div class="col" style="display:none">
           			 <div class="md-form ">
                                <!--  <label class="mdb-main-label BTxt9">Send link to</label> -->
                           <button type="button" id="Collected" onclick="ClickCollectedBtn();" class="btn btn-yel Btxt2">Collected</button>
                    </div>
           		</div>
           </div>
         </div>     
           <div class="PFCHK" style="display:none">
            <div class="form-row  PFONBNK">
              <div class="col">
            	<div class="md-form">
                  	<input type="text" id="APCM_PFIFSC" onblur="Ifscdetls(this,'APCM_PFBANKNAME','APCM_PFBNKBRCH')" maxlength="11" name="APCM_PFIFSC" class="PFSTA form-control PFCHKCHAGE CHKCHAGE Mndtry IsIFSCFields OCRDSBL NoSpecialChar APCMDBfields PFONL">
                    <label for="APCM_PFIFSC" class="">IFSC <span class="MndtryAstr">*</span></label>
             </div>
            </div> 
              <div class="col">
            	<div class="md-form">
                  	<input type="text" id="APCM_PFBANKNAME" disabled name="APCM_PFBANKNAME" class="PFSTA form-control Mndtry CHKCHAGE PFCHKCHAGE OCRDSBL APCMDBfields">
                    <label for="APCM_PFBANKNAME" class="">Bank Name <span class="MndtryAstr">*</span></label>
                  </div>
              </div>
              <div class="col">
              	  <div class="md-form">
                  	<input type="text" id="APCM_PFBNKBRCH" disabled name="APCM_PFBNKBRCH" class="PFSTA form-control Mndtry OCRDSBL PFCHKCHAGE CHKCHAGE APCMDBfields">
                    <label for="APCM_PFBNKBRCH" class="">Bank Branch <span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           </div>
           <div class="form-row">	
              <div class="col">
                 <div class="md-form">
                  	<input type="text" id="APCM_PFADDDT" name="APCM_PFADDDT" onblur="INSTRUMENTDATE('APCM_PFADDDT')" maxlength="10" class="PFONL PFSTA form-control PFCHKCHAGE CHKCHAGE ISFutureDateFields IsNumberFields ISDatefield  Mndtry APCMDBfields PFONL">
                    <label for="APCM_PFADDDT" class="">Instrument Date <span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                 </div>
             </div>
             <div class="col">
            	    <div class="md-form">
                  	<input type="text" id="APCM_PFADDNO" maxlength="6" name="APCM_PFADDNO" class="PFONL PFSTA form-control IsChequeFields IsNumberFields PFCHKCHAGE CHKCHAGE NoSpecialChar OCRDSBL Mndtry APCMDBfields PFONL">
                        <label for="APCM_PFADDNO" class="">Instrument Number <span class="MndtryAstr">*</span></label>
                   </div>
             </div>
            <div class="col">
            	<div class="md-form">
            	   <input type="text" id="APCM_PFSTATUS" name="APCM_PFSTATUS" disabled value="Not Known" class="form-control DSVLBL IsNumberFields APCMDBfields">
                   <label for="APCM_PFSTATUS" class="">Status<span class="MndtryAstr"></span></label>
             </div>
            </div> 
           </div>
           <div class="form-row PFONBNK PFONBNKONL">	
           <div class="col-md-4">
            	<div class="md-form">
            	   <input type="text" id="APCM_RecptNum2" name="APCM_RecptNum2" disabled value="" class="form-control DSVLBL IsNumberFields APCMDBfields active">
                   <label for="APCM_RecptNum2" class="">Receipt Number<span class="MndtryAstr"></span></label>
             </div>
            </div> 
           <div class="col-md-4 btnPF">
                 <button type="button" class="btn Collected2  waves-effect btn-yelInplain btn-sm BTNVerify">Click To Collect</button>
           </div>
          </div>
        </div>  
        </div>
		
		 <input type="text"  id="PayType"  hidden="hidden"  name="PayType" class="Btxt10  form-control">
		
        <div class="BT BTMNDCHK">
                <div class="form-row">
                  <div class="col-md-3 BluShd">
                     <div class="md-form">
                        <input type="text"  maxlength="10" value="BT COMMITMENT CHARGES" class="Btxt17 DSVLBL form-control form-control    ">
                     </div>
                  </div>
                      <div class="col-md-9 BluShd">
                     <div class="md-form">
                        <div id="" class="select-radio BTRADIO ">
                           <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" class="custom-control-input APCMDBfields " onclick="BTCOMMITMENT();CheckBTCHARGE();"  value="Yes" id="ISBTCMNTCHRGAPPLYYes" name="APCM_ISBTCMNTCHRGAPPLY">
                              <label class="custom-control-label" for="ISBTCMNTCHRGAPPLYYes">Yes</label>
                           </div>
                           <div class="custom-control custom-radio custom-control-inline">
                              <input type="radio" class="custom-control-input APCMDBfields" onclick="BTCOMMITMENT();CheckBTCHARGE();"  value="No" id="ISBTCMNTCHRGAPPLYNo" name="APCM_ISBTCMNTCHRGAPPLY">
                              <label class="custom-control-label" for="ISBTCMNTCHRGAPPLYNo">No</label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="form-row">
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="APCM_BTAMNT" name="APCM_BTAMNT"  disabled maxlength="10" class="BTCHAGS form-control DSVLBL form-control APCMDBfields IsCURCommaFields IsNumberFields ">
                              <label for="APCM_BTAMNT" class="">BT Amount<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="APCM_BTPAMNT"  name="APCM_BTPAMNT" disabled maxlength="10" class="BTCHAGS form-control DSVLBL form-control APCMDBfields IsCURCommaFields IsNumberFields ">
                              <label for="APCM_BTPAMNT" class="">Amount<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
                        <div class="col-md-4">
                           
                        </div>
                     </div>
                     
               <div class="BTCHARGE">
                     <div class="form-row">
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="APCM_BTDDNO" name="APCM_BTDDNO"  maxlength="6" class="BTSTA  IsChequeFields  BTCHAGS BTCHAGS1 APCMMndtry form-control BTSTA form-control APCMDBfields   ">
                              <label for="APCM_BTDDNO" class="">DD No.<span class="MndtryAstr">*</span></label>
							  
							 
							  
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="md-form">
                              <input type="text" id="APCM_BTDDNAME" onchange="CalcDDPercnt();" name="APCM_BTDDNAME" disabled maxlength="10" class="BTSTA BTCHAGS BTCHAGS1 APCMMndtry form-control form-control APCMDBfields IsCURCommaFields IsNumberFields ">
                              <label for="APCM_BTDDNAME" class="">DD Amount<span class="MndtryAstr">*</span></label>
                           </div>
                        </div>
                         <div class=" col-md-4">
			                 <div class="md-form">
			                    <input type="text" id="APCM_DDPERCNT" disabled name="APCM_DDPERCNT"  class="form-control APCMDBfields  Btxt20  ">
			                 </div>
			              </div>
                   
                    </div>
                    
            <div class="form-row">
              <div class="col">
            	<div class="md-form">
                  	<input type="text" id="APCM_BTIFSC" onblur="Ifscdetls(this,'APCM_BTBNKNAME','APCM_BTBNKBRCH');" maxlength="11"  name="APCM_BTIFSC" class="BTSTA APCMDBfields APCMMndtry BTCHAGS BTCHAGS1 form-control CHKCHAGE Mndtry IsIFSCFields OCRDSBL NoSpecialChar ">
                    <label for="APCM_BTIFSC" class="">IFSC <span class="MndtryAstr">*</span></label>
             </div>
            </div> 
              <div class="col">
                           <div class="md-form">
                              <input type="text" id="APCM_BTBNKNAME" name="APCM_BTBNKNAME" disabled  maxlength="25" class="BTCHAGS DSVLBL form-control form-control  APCMDBfields   ">
                              <label for="APCM_BTBNKNAME" class="">Bank Name<span class="MndtryAstr"></span></label>
                           </div>
                        </div>
              <div class="col">
              	  <div class="md-form">
                  	<input type="text" id="APCM_BTBNKBRCH" disabled name="APCM_BTBNKBRCH" class="form-control Mndtry DSVLBL BTCHAGS OCRDSBL CHKCHAGE APCMDBfields">
                    <label for="APCM_BTBNKBRCH" class="">Bank Branch <span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           </div>
            <div class="form-row">
            <div class="col-md-4">
            	<div class="md-form">
            	   <input type="text" id="APCM_RecptNum3" name="APCM_RecptNum3" disabled value="" class="form-control DSVLBL IsNumberFields APCMDBfields active">
                   <label for="APCM_RecptNum3" class="">Receipt Number<span class="MndtryAstr"></span></label>
             </div>
            </div> 
            <div class="col-md-4 btnBT">
                 <button type="button" class="btn Collected3  waves-effect btn-yelInplain btn-sm BTNVerify">Click To Collect</button>
           </div>
		     <div class="col-md-4">
            	<div class="md-form">
            	   <input type="text" id="APCM_BTSTATUS" name="APCM_BTSTATUS" disabled value="Not Known" class="form-control DSVLBL IsNumberFields APCMDBfields">
                   <label for="APCM_BTSTATUS" class="">Status<span class="MndtryAstr"></span></label>
             </div>
            </div> 
            </div>
            
             <input type="text" id="APCM_BTDDDT"  hidden="hidden"  name="APCM_BTDDDT"  maxlength="10" class="form-control form-control APCMDBfields   ">
           
         <!--   <div class="form-row">	
              <div class="col">
                 <div class="md-form">
                  	<input type="text" id="APCM_CERSAIADDDT" name="APCM_CERSAIADDDT" onblur="CheckInstrumntDate();" maxlength="10" class="form-control CHKCHAGE IsNumberFields ISDatefield  Mndtry APCMDBfields ">
                    <label for="APCM_CERSAIADDDT" class="">Instrument Date <span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                 </div>
             </div>
             <div class="col">
            	    <div class="md-form">
                  	<input type="text" id="APCM_CERSAIADDNO" maxlength="6" name="APCM_CERSAIADDNO" class="form-control IsNumberFields CHKCHAGE NoSpecialChar OCRDSBL Mndtry APCMDBfields">
                        <label for="APCM_CERSAIADDNO" class="">Instrument Number <span class="MndtryAstr">*</span></label>
                   </div>
             </div>
            <div class="col">
            	<div class="md-form">
            	   <input type="text" id="APCM_CERSAISTATUS" name="APCM_CERSAISTATUS" disabled value="Not Known" class="form-control DSVLBL IsNumberFields APCMDBfields">
                   <label for="APCM_CERSAISTATUS" class="">Status<span class="MndtryAstr"></span></label>
             </div>
            </div> 
           </div> -->
        </div>  
        </div>
               <div class="form-row">
                  <div class="col d-flex justify-content-center">
                     <button type="button" id="Save1" data-aria="LSW_TAPPRCHRGHDR|APCM"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" data-aria="LSW_TAPPRCHRGHDR|APCM" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Submit</button> 
					 <button type="button" id="SendBack" data-aria="LSW_TAPPRCHRGHDR|APCM" style="display:none;" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave StageReversal">Send Back</button> 
                  </div>
               </div>
			   </div>
			   </div>
            </form>
         </div>
      </div>
   </div>
   <!-- card -->
   
           <a type="button" id="AFPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#AFModal">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade" id="AFModal" tabindex="-1" role="dialog" aria-labelledby="AFModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:848px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt8">Admin Fee Collection Receipt</div> 
   
   <a href="#"><img id="AFPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form >
        	</br>
                <div class="form-row">
                    <div class="col-md-4">
                       <div class="md-form">
                          <input type="text" id="RECIEPRNO" disabled name="RECIEPRNO" class="form-control DSVLBL AFDBfields">
                          <label for="RECIEPRNO" class="">Receipt Number<span class="MndtryAstr"></span></label>
                       </div>
                   </div>
                   <div class="col-md-4">
                      <div class="md-form">
                          <input type="text" id="MODE" disabled name="MODE" class="form-control DSVLBL AFDBfields">
                          <label for="MODE" class="">Mode<span class="MndtryAstr"></span></label>
                       </div>
                  </div>
                  <div class="col-md-4">
                      <div class="md-form">
                          <input type="text" id="GSTAMT" disabled name="GSTAMT" class="form-control DSVLBL IsCURCommaFields AFDBfields">
                          <label for="GSTAMT" class="">Amount (incl GST) (Rs.)<span class="MndtryAstr"></span></label>
                       </div>
                  </div>
              </div>
               <div class="form-row">
                    <div class="col-md-4">
                       <div class="md-form">
                          <input type="text" id="REFNUM" disabled name="REFNUM" class="form-control DSVLBL AFDBfields">
                          <label for="REFNUM" class="">Reference Number<span class="MndtryAstr"></span></label>
                       </div>
                   </div>
                   <div class="col-md-4">
                      <div class="md-form">
                          <input type="text" id="TRANSDATE" disabled name="TRANSDATE" class="form-control DSVLBL AFDBfields">
                          <label for="TRANSDATE" class="">Transaction Date<span class="MndtryAstr"></span></label>
                       </div>
                  </div>
                  <div class="col-md-4">
                      <div class="md-form">
                          <input type="text" id="STATUS" disabled name="STATUS" class="form-control DSVLBL AFDBfields">
                          <label for="STATUS" class="">Status<span class="MndtryAstr"></span></label>
                       </div>
                  </div>
              </div>
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
              <!-- <button type="button" id="MobIotp" onclick="CheckMobValidKyc('MobOTP','status','CADI_MOBNOIVERIFY',this,'','','')" class="btn btn-yel Btxt2">Confirm</button>-->
       </div>
    </div>
  </div>
  </div>
  <!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/Approve/Script/Chgr/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Approve/Script/Chgr/Validation.js${DMY13}"></script>  

 <a type="button" id="Reassign" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#CERSAIModal">
            <i class="fa fa-plus"></i>
        </a>
<div class="modal fade" id="CERSAIModal" tabindex="-1" role="dialog" aria-labelledby="CERSAIModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:800px" role="document">
    <div class="modal-content">
       <div class="modal-header">
        <div class="Btxt8">CERSAI Collection Receipt</div> 
        <a href="#"><img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
      </div>  
      <div class="modal-body">
   <div class="">
    <!-- Card body -->
     <div class="">  
         <form>
             <div class="form-row">
           		<div class="col-md-4">
           			<div class="md-form">
           <input type="text"  id="CRECIEPRNO"   name="CRECIEPRNO" class="DSVLBL CDBfields form-control active">
            <label for="CRECIEPRNO" class="" >Receipt Number<span class="MndtryAstr"></span></label>
           </div>
           		</div>
           		   <div class="col-md-4">
           			<div class="md-form">
           <input type="text"  id="CMODE"  name="CMODE" class="DSVLBL CDBfields form-control">
            <label for="CMODE" class="" >Mode<span class="MndtryAstr"></span></label>
           </div>
           		</div>
           		
           		   <div class="col-md-4">
           			<div class="md-form">
           <input type="text"  id="CGSTAMT"  name="CGSTAMT"class="DSVLBL CDBfields form-control">
            <label for="CGSTAMT" class="" >Amount (incl GST)<span class="MndtryAstr"></span></label>
           </div>
           		</div>
                </div>
                
                
                    <div class="form-row">
           		<div class="col-md-4">
           			<div class="md-form">
           <input type="text"   id="CREFNUM"  name="CREFNUM" class="  DSVLBL CDBfields form-control">
            <label for="CREFNUM" class="" >Reference Number<span class="MndtryAstr"></span></label>
           </div>
           		</div>
           		
           		   <div class="col-md-4">
           			<div class="md-form">
           <input type="text"   id="CTRANSDATE"  name="CTRANSDATE" class="  DSVLBL CDBfields form-control">
            <label for="CTRANSDATE" class="" >Transaction Date<span class="MndtryAstr"></span></label>
           </div>
           		</div>
           		
           		   <div class="col-md-4">
           			<div class="md-form">
           <input type="text"  id="CSTATUS"  name="CSTATUS" class=" DSVLBL CDBfields form-control">
            <label for="CSTATUS" class="" >Status<span class="MndtryAstr"></span></label>
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
