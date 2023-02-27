   
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        </br>
                        <div class="">
                            <!--Admin panel-->
                            <div class="admin-panel Lbl18">
                            <div class="row">
	<div class="col-lg-12">
		  <ul title="Scheme" data-popup="No" class="nav FormPageMultiTab">     
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
<!-- Start -->
<!--Accordion wrapper-->
<div class="HiddenBTN">
         <input type="button" style="display:none" class="DashTrg"  id="BTNELIGBLEDATA" name="BTNELIGBLEDATA" /><!-- Employment Details -->
      </div>
      <div class="HiddenBTN">
         <input type="button" style="display:none" class="DashTrg"  id="BTNEXISTINGDATA" name="BTNEXISTINGDATA" /><!-- Employment Details -->
      </div>
        <!--<div class="form-row">
            <div class="col ">
               <div class="FltRight DELBTNTXT">
                    Delete Scheme 
                 <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="RCCM_PRCSID|RCCM_CUSID|RCCM_UNIQUID|DELETESCHEME" class="DELBTN DELETESCHEME"/>
              </div>    
                                 </div>     
                                </div>   -->    
<div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
  <!-- Accordion card -->
  
 <div class="card CAM" >
    <!-- Card header -->
    <div class="card-header Btxt7" role="tab" id="headingOne1">
      <a data-toggle="collapse" data-aria="LSW_TRTRCAMCHECKLISTMAIN|RCCM|RCCM_UNIQUID" data-multidata="" data-load="" class="Btxt8 AFormaccordion" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
        aria-controls="collapseOne1">       
         <i class="fa fa-minus-circle rotate-icon"></i>
      </a>
    </div>
    <!-- Card body -->
    <div id="collapseOne1" class="collapse show accordiontab" data-form="CAM" role="tabpanel" aria-labelledby="headingOne1"
      data-parent="#accordionEx">
      <div class="card-body px-lg-5 pt-0">
        <form>
        <input type="text" id="RCCM_PRCSID"  name="RCCM_PRCSID" hidden="hidden" class="form-control RCCMDBfields" value="" >
        <input type="text" id="RCCM_ACTIVITYID"  name="RCCM_ACTIVITYID" hidden="hidden"  class="form-control RCCMDBfields" value="">
        <input type="text" id="RCCM_DTCREATED"  name="RCCM_DTCREATED" hidden="hidden"  class="form-control RCCMDBfields" value="">
        <input type="text" id="RCCM_CREATEDBY"  name="RCCM_CREATEDBY" hidden="hidden"  class="form-control RCCMDBfields" value="">
        <input type="text" id="RCCM_DTMODIFIED"  name="RCCM_DTMODIFIED" hidden="hidden"  class="form-control RCCMDBfields" value="">
        <input type="text" id="RCCM_MODIFIEDBY"  name="RCCM_MODIFIEDBY" hidden="hidden"  class="form-control RCCMDBfields" value="">
        <input type="text" id="RCCM_RTRCAMGRD"  name="RCCM_RTRCAMGRD" hidden="hidden"  class="form-control RCCMDBfields" value="">
        <input type="text" id="RCCM_CUSID"  name="RCCM_CUSID" hidden="hidden"  class="form-control RCCMDBfields" value="">
        <input type="text" id="RCCM_SCHEME"  name="RCCM_SCHEME" hidden="hidden"  class="form-control RCCMDBfields" value="">
        <input type="text" id="RCCM_UNIQUID"  name="RCCM_UNIQUID" hidden="hidden"  class="form-control RCCMDBfields" value="">
        <input type="text" id="RCCM_LOANUNIQID"  name="RCCM_LOANUNIQID" hidden="hidden"  class="form-control RCCMDBfields" value="">
        <input type="text" id="RCCM_PRODUCT"  name="RCCM_PRODUCT" hidden="hidden"  class="form-control RCCMDBfields" value="">
        <input type="text" id="RCCM_COAPPLIST"  name="RCCM_COAPPLIST" hidden="hidden"  class="form-control RCCMDBfields" value="">
        <input type="text" id="HiddenVal" hidden="hidden" name="HiddenVal" value="Net profit as per P/L|Tax Paid As Per ITR,Net Profile After Tax" class="form-control RCCMDBfields">
        <input type="text" id="HiddenCashPrft" hidden="hidden" name="HiddenCashPrft" value="Depreciation|,Cash Profit" class="form-control RCCMDBfields">
        <input type="text" id="HiddenINDUSCATRGORY" hidden="hidden" name="HiddenINDUSCATRGORY" value="" class="form-control ">
		
		<input type="text" id="CAM" hidden="hidden" name="CAM" value="" class="form-control ">
		<input type="text" id="ISELGBLTYCHECKED" hidden="hidden" name="ISELGBLTYCHECKED" value="1" class="form-control ">
		
		<div class="form-row loadfincscreen">
			<jsp:include page="//${DMY16}"></jsp:include>
		</div>
		<div class="BRLR"> 
       
      <div data-for="ELIGHSCHEME" class="ELIGHSCHEME"> 
      </div>
       <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="ELIGHSCHEME" style="display:none">
       <div data-row="" class=" DYNROW">
          <input type="text" id="FCEB_PRCSID" hidden="hidden" name="FCEB_PRCSID" class="form-control FCEBDBfields">
         <input type="text" id="FCEB_ACTIVITYID" hidden="hidden" name="FCEB_ACTIVITYID" class="form-control FCEBDBfields">
         <input type="text" id="FCEB_DTCREATED" hidden="hidden" name="FCEB_DTCREATED" class="form-control FCEBDBfields">
         <input type="text" id="FCEB_CREATEDBY" hidden="hidden" name="FCEB_CREATEDBY" class="form-control FCEBDBfields">
         <input type="text" id="FCEB_DTMODIFIED" hidden="hidden" name="FCEB_DTMODIFIED" class="form-control FCEBDBfields">
         <input type="text" id="FCEB_MODIFIEDBY" hidden="hidden" name="FCEB_MODIFIEDBY" class="form-control FCEBDBfields">
         <input type="text" id="FCEB_CATEGORY"  hidden="hidden" name="FCEB_CATEGORY" class="form-control FCEBDBfields">
          <input type="text" id="FCEB_SCHEME"  hidden="hidden" name="FCEB_SCHEME" class="form-control FCEBDBfields">
          <input type="text" id="FCEB_SCHEMELOAN"  hidden="hidden" name="FCEB_SCHEMELOAN" class="form-control FCEBDBfields">

            <div class="form-row">
              <div class=" col-md-4 GryShd">
                 <div class="md-form">
                 <input type="text" id="FCEB_PROFILE" disabled name="FCEB_PROFILE" class="form-control Btxt17 DSVLBL FCEBDBfields  ">
                 </div>
              </div> 
              <div class=" col-md-1">
              </div>
              <div class=" col-md-3">
                 <div class="md-form">
                    <input type="text" id="FCEB_VALUE" placeholder ="-" name="FCEB_VALUE" disabled class="form-control DSVLBL  FCEBDBfields  ">
                    <input type="text" id="FCEB_HIDDENID"  hidden="hidden" name="FCEB_HIDDENID" class="form-control FCEBDBfields">
                 </div>
              </div>
			  <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="ALERTFLD" disabled name="ALERTFLD" style="display:none" class="form-control   Btxt20  ">
                 </div>
              </div>
            </div>
			
		
          </div>
	
         </div>
         </div>
		
       <!--  <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SRTRCAMCHECKLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#RCCM_UNIQUID').val(),MnuId:$('#DMY7').val().split('|')[8]},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,4,5','FINANCCAM');" id="BTNRTRCAMGRD" name="BTNRTRCAMGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table2">
             </table>
           </div>
        </div> 
         <div class="form-row CUSNAME">
        	<div class="col Btxt10"><input type="text" id="RCCM_APPLNAME"  name="RCCM_APPLNAME" class="form-control DSVLBL FileCheckVal Btxt04 RCCMDBfields" value=""></div>
        </div>
		<form>
		<div class="form-row AINCY" style="display:none">
            <div class="col-md-4">   
               <div class="md-form">
                  <label for="" class="">ITRs Filled within 6 months GAP<span class="MndtryAstr"></span></label>
              </div>
              </div>
              <div class="col-md-5">
                 <div class="md-form">
                 </div>
              </div>
              <div class="col-md-3">
                 <div class="md-form">
                   <div class="md-form">
                    <div  class="select-radio SDMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input FileCheckVal RCCMDBfields" value="Yes" id="ITRGAPY" name="RCCM_ITRGAP">
                          <label class="custom-control-label" for="ITRGAPY">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input FileCheckVal RCCMDBfields" value="No" id="ITRGAPN" name="RCCM_ITRGAP">
                           <label class="custom-control-label" for="ITRGAPN">No</label>
                       </div>
                   </div>     
                  </div>
                 </div>
              </div>
         </div>
          <div class="form-row AINCY" style="display:none">
            <div class="col-md-4">   
               <div class="md-form">
                  <label for="" class="">ITR Filled on the same date<span class="MndtryAstr"></span></label>
              </div>
              </div>
              <div class="col-md-5">
                 <div class="md-form">
                 </div>
              </div>
              <div class="col-md-3">
                 <div class="md-form">
                   <div class="md-form">
                    <div  class="select-radio SDMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input FileCheckVal RCCMDBfields" value="Yes" id="SAMEDATEY" name="RCCM_SAMEDATE">
                          <label class="custom-control-label" for="SAMEDATEY">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input FileCheckVal RCCMDBfields" value="No" id="SAMEDATEN" name="RCCM_SAMEDATE">
                           <label class="custom-control-label" for="SAMEDATEN">No</label>
                       </div>
                   </div>     
                  </div>
                 </div>
              </div>
         </div>
         <div class="form-row ANSRTRBS" style="display:none">
            <div class="col-md-4">   
               <div class="md-form">
                  <label for="" class=""><span class="MndtryAstr LOWLTV"></span></label>
              </div>
              </div>
              <div class="col-md-5">
                 <div class="md-form">
                 </div>
              </div>
              <div class="col-md-3">
                 <div class="md-form">
                     <div class="md-form">
                    <div  class="select-radio ITRsMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input FileCheckVal RCCMDBfields" value="Yes" id="ApplActionYes" name="RCCM_APPLACTION">
                          <label class="custom-control-label" for="ApplActionYes">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input FileCheckVal RCCMDBfields" value="No" id="ApplActionNo" name="RCCM_APPLACTION">
                           <label class="custom-control-label" for="ApplActionNo">No</label>
                       </div>
                   </div>     
               </div>
                 </div>
              </div>
        </div>
         <div class="form-row ASCMLIP" style="display:none">
            <div class="col-md-4">   
               <div class="md-form">
                  <label for="" class="">CA Assessment Report<span class="MndtryAstr"></span></label>
              </div>
              </div>
              <div class="col-md-5">
                 <div class="md-form">
                 </div>
              </div>
              <div class="col-md-3">
                 <div class="md-form">
                     <div class="md-form">
                         <div  class="select-radio CAMndtry"> 
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input FileCheckVal RCCMDBfields" value="Yes" id="CARPTY" name="RCCM_CARPT">
                                <label class="custom-control-label" for="CARPTY">Yes</label>
                           </div>
                           <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input FileCheckVal RCCMDBfields" value="No" id="CARPTN" name="RCCM_CARPT">
                                <label class="custom-control-label" for="CARPTN">No</label>
                          </div>
                          </div>     
                      </div>
                 </div>
              </div>
        </div>
		</form>
        <div data-for="CAMChecklist" class="CAMChecklist"> 
      </div>
        <div class="DynamicPageGrid" data-val="PROPTXTHDR|PROPERTY" id="CAMChecklist" style="display:none">
      <div data-row="" class="DYNROW">
        <form>
        <input type="text" id="CACL_PRCSID" hidden="hidden" name="CACL_PRCSID" class="form-control CACLDBfields">
        <input type="text" id="CACL_ACTIVITYID" hidden="hidden" name="CACL_ACTIVITYID" class="form-control CACLDBfields">
        <input type="text" id="CACL_DTCREATED" hidden="hidden" name="CACL_DTCREATED" class="form-control CACLDBfields">
        <input type="text" id="CACL_CREATEDBY" hidden="hidden" name="CACL_CREATEDBY" class="form-control CACLDBfields">
        <input type="text" id="CACL_DTMODIFIED" hidden="hidden" name="CACL_DTMODIFIED" class="form-control CACLDBfields">
        <input type="text" id="CACL_MODIFIEDBY" hidden="hidden" name="CACL_MODIFIEDBY" class="form-control CACLDBfields">
        <input type="text" id="CACL_CUSID" hidden="hidden" name="CACL_CUSID" class="form-control CACLDBfields">
        
        <input type="text" id="CACL_SCHEME" name="CACL_SCHEME" hidden="hidden" class="form-control CACLDBfields">
        <input type="text" id="CACL_UNIQID" name="CACL_UNIQID" hidden="hidden" class="form-control CACLDBfields">
        <input type="text" id="CACL_INCCONSID" name="CACL_INCCONSID" hidden="hidden" class="form-control CACLDBfields">
        
        <div class="form-row COCUSNAME" style="display:none">
        	<div class="col Btxt10"><input type="text" id="CACL_CUSNAME" name="CACL_CUSNAME" class="form-control DSVLBL Btxt04 CACLDBfields"></div>
        </div>
		<div class="form-row CINCY" style="display:none">
            <div class="col-md-4">   
               <div class="md-form">
                  <label for="" class="">ITRs Filled within 6 months GAP<span class="MndtryAstr"></span></label>
              </div>
              </div>
              <div class="col-md-5">
                 <div class="md-form">
                 </div>
              </div>
              <div class="col-md-3">
                 <div class="md-form">
                   <div class="md-form">
                    <div  class="select-radio SDMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input  CACLDBfields" value="Yes" id="ITRGAPY" name="CACL_ITRGAP">
                          <label class="custom-control-label" for="ITRGAPY">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input  CACLDBfields" value="No" id="ITRGAPN" name="CACL_ITRGAP">
                           <label class="custom-control-label" for="ITRGAPN">No</label>
                       </div>
                   </div>     
                  </div>
                 </div>
              </div>
         </div>
          <div class="form-row CINCY" style="display:none" >
            <div class="col-md-4">   
               <div class="md-form">
                  <label for="" class="">ITR Filled on the same date<span class="MndtryAstr"></span></label>
              </div>
              </div>
              <div class="col-md-5">
                 <div class="md-form">
                 </div>
              </div>
              <div class="col-md-3">
                 <div class="select-radio CSDMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input CACLDBfields"  value="Yes" id="SameYes" name="CACL_SAMDATE">
                            <label class="custom-control-label" for="SameYes">Yes</label>
                     </div>
                      <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input CACLDBfields" value="No" id="SameNo" name="CACL_SAMDATE">
                            <label class="custom-control-label" for="SameNo">No</label>
                       </div>
                        <!--<input type="text" id="CACL_SAMDATE" name="CACL_SAMDATE" hidden="hidden" class="form-control CACLDBfields"> --
                  </div>
              </div>
        </div>
         <div class="form-row NSRTRBS" style="display:none">
            <div class="col-md-4">   
               <div class="md-form">
                  <label for="" class=""><span class="MndtryAstr LOWLTV"></span></label>
              </div>
              </div>
              <div class="col-md-5">
                 <div class="md-form">
                 </div>
              </div>
              <div class="col-md-3">
                 <div class="md-form">
                     <div class="md-form">
                    <div  class="select-radio CITRsMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input CACLDBfields" value="Yes" id="MINYES" name="CACL_MINLATEST">
                          <label class="custom-control-label" for="MINYES">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input CACLDBfields" value="No" id="MINNO" name="CACL_MINLATEST">
                           <label class="custom-control-label" for="MINNO">No</label>
                       </div>
                        <!--<input type="text" id="CACL_MINLATEST" name="CACL_MINLATEST" hidden="hidden" class="form-control CACLDBfields"> --
                   </div>     
               </div>
                 </div>
              </div>
        </div>
         <div class="form-row SCMLIP" style="display:none">
            <div class="col-md-4">   
               <div class="md-form">
                  <label for="" class="">CA Assessment Report<span class="MndtryAstr"></span></label>
              </div>
              </div>
              <div class="col-md-5">
                 <div class="md-form">
                 </div>
              </div>
              <div class="col-md-3">
                 <div class="md-form">
                     <div class="md-form">
                    <div  class="select-radio CCAMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input CACLDBfields" value="Yes" id="COCARPTY" name="CACL_CARPT">
                          <label class="custom-control-label" for="COCARPTY">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input CACLDBfields" value="No" id="COCARPTN" name="CACL_CARPT">
                           <label class="custom-control-label" for="COCARPTN">No</label>
                       </div>
                          <!--<input type="text" id="CACL_CARPT" name="CACL_CARPT" hidden="hidden" class="form-control CACLDBfields"> --
                   </div>     
               </div>
                 </div>
              </div>
        </div>
        </form>
        </div>
        </div>-->
			  	<div class="form-row ">
              <span class="HyperControls FltRight REPAY">
		         <a onclick="Gentraterepay();" class="Btxt4 FltRight" href="#">Re-Payment Schedule</a>
		      </span>
          </div>
	<!--	<div class="form-row">
            <div class="col d-flex justify-content-center">
      	      <button type="button"  data-aria="LSW_TRTRCAMCHECKLISTMAIN|RCCM|RCCM_UNIQUID" data-form="CAM"  class="btn btn-Syel waves-effect waves-light FormSave1">CAM Generate</button>
            </div>
        </div> -->
        <div class="form-row" >
             <div class="col d-flex justify-content-center">
                <button type="button" id="Save1" data-aria="LSW_TRTRCAMCHECKLISTMAIN|RCCM|RCCM_UNIQUID" data-form="CAM" class="btn btn-Syeloutline waves-effect waves-light FormSave1">Save</button>   
                <button type="button" data-aria="LSW_TRTRCAMCHECKLISTMAIN|RCCM|RCCM_UNIQUID" data-form="CAM" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave1">Save & Next</button> 
           </div>
       </div>
     </form>
      </div>
    </div>
    </div>
	</div>
  <!-- Accordion card -->
  <!-- Accordion card -->
  <div class="card EXITLON" style="display:none">
    <!-- Card header -->
    <div class="card-header Btxt7" role="tab" id="headingTwo2">
      <a class="collapsed Btxt7 AFormaccordion" data-multidata="BTNEXISTINGDATA" data-aria="LSW_TRTREXIXTLONMAIN|RXLM|RXLM_UNIQUID|RCCM_UNIQUID" data-load="" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
        aria-expanded="false" aria-controls="collapseTwo2">
          Existing Loan <i class="fa fa-plus-circle rotate-icon"></i>
      </a>
    </div>
    <!-- Card body -->
    <div id="collapseTwo2" class="collapse accordiontab" data-form="EXLON" role="tabpanel" aria-labelledby="headingTwo2"
      data-parent="#accordionEx">
      <div class="card-body px-lg-5 pt-0">
        <form>
        <input type="text" id="RXLM_PRCSID" hidden="hidden" name="RXLM_PRCSID" class="form-control RXLMDBfields">
         <input type="text" id="RXLM_ACTIVITYID" hidden="hidden" name="RXLM_ACTIVITYID" class="form-control RXLMDBfields">
         <input type="text" id="RXLM_CREATEDBY" hidden="hidden" name="RXLM_CREATEDBY" class="form-control RXLMDBfields">
         <input type="text" id="RXLM_DTCREATED" hidden="hidden" name="RXLM_DTCREATED" class="form-control RXLMDBfields">
         <input type="text" id="RXLM_MODIFIEDBY" hidden="hidden" name="RXLM_MODIFIEDBY" class="form-control RXLMDBfields">
         <input type="text" id="RXLM_DTMODIFIED" hidden="hidden"  name="RXLM_DTMODIFIED" class="form-control RXLMDBfields">
         
         <input type="text" id="RXLM_CUSID"  name="RXLM_CUSID" hidden="hidden"  class="form-control RXLMDBfields" value="">
        <input type="text" id="RXLM_RTREXISTGRD"  name="RXLM_RTREXISTGRD" hidden="hidden"  class="form-control RXLMDBfields" value="">
         <input type="text" id="RXLM_UNIQUID"  name="RXLM_UNIQUID" hidden="hidden"  class="form-control RXLMDBfields" value="">
		  <input type="text" id="HIDDENCOL"  name="HIDDENCOL" hidden="hidden"  class="form-control RXLMDBfields" value="">
         <div class="form-row ENBLONLYFRRTR"style="display:none;">
			<div class="col-md-4">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary RXLMDBfields" onchange="ChngExGrOnChng()"  id="RXLM_ISCHOLALN" name="RXLM_ISCHOLALN">
				 <option value="" >--Select--</option>
				 <option value="Internal Chola LAP Loan" >Internal Chola LAP Loan</option>
				 <option value="All Existing Loan" >All Existing Loan</option>
				</select>
				<label class="mdb-main-label BTxt9">Loan Type<span class="MndtryAstr"></span></label>
                  </div>
               </div>
		</div>
         <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SRTREXISTINGLOAN',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#RXLM_UNIQUID').val(),MnuId:$('#RXLM_ISCHOLALN').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},$('#HIDDENCOL').val(),'FINANCEXIXTING');" id="BTNRTREXTGRD" name="BTNRTREXTGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
             </table>
           </div>
        </div> 
       	</br>
       	    <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save2" data-aria="LSW_TRTREXIXTLONMAIN|RXLM|RXLM_UNIQUID" data-form="EXLON" class="btn btn-Syeloutline waves-effect waves-light FormSave2">Save</button>   
                     <button type="button" data-aria="LSW_TRTREXIXTLONMAIN|RXLM|RXLM_UNIQUID" data-form="EXLON" data-card="1" class="btn btn-Syel waves-effect waves-light FormSave2">Save & Next</button> 
                </div>
            </div>
			
        </form>
   </div>
      </div>
    </div>
  <!-- Accordion card -->
  <!-- Accordion card -->
  <div class="card" style="display:none">
    <!-- Card header -->
    <div class="card-header Btxt7 Eligibility" role="tab" id="headingThree3">
      <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-multidata="BTNELIGBLEDATA" data-aria="LSW_TINCELIGIBIL|ICEG|ICEG_UNIQUID|RCCM_UNIQUID" data-load="" data-parent="#accordionEx" href="#collapseThree3"
        aria-expanded="false" aria-controls="collapseThree3"> 
       Eligibility <i class="fa fa-plus-circle rotate-icon"></i>
      </a>
    </div>
    <!-- Card body -->
    <div id="collapseThree3" class="collapse accordiontab" data-form="ELIGBL" role="tabpanel" aria-labelledby="headingThree3"
      data-parent="#accordionEx">
      <div class="card-body px-lg-5 pt-0">
      	<form>
      	 <input type="text" id="ICEG_PRCSID" hidden="hidden" name="ICEG_PRCSID" class="form-control ICEGDBfields">
         <input type="text" id="ICEG_ACTIVITYID" hidden="hidden" name="ICEG_ACTIVITYID" class="form-control ICEGDBfields">
         <input type="text" id="ICEG_DTCREATED" hidden="hidden" name="ICEG_DTCREATED" class="form-control ICEGDBfields">
         <input type="text" id="ICEG_CREATEDBY" hidden="hidden" name="ICEG_CREATEDBY" class="form-control ICEGDBfields">
         <input type="text" id="ICEG_DTMODIFIED" hidden="hidden" name="ICEG_DTMODIFIED" class="form-control ICEGDBfields">
         <input type="text" id="ICEG_MODIFIEDBY" hidden="hidden"  name="ICEG_MODIFIEDBY" class="form-control ICEGDBfields">
         <input type="text" id="ICEG_UNIQUID"  name="ICEG_UNIQUID" hidden="hidden"  class="form-control ICEGDBfields" value="">
      	 <input type="text" id="ICEG_INCMG"  name="ICEG_INCMG" hidden="hidden"  class="form-control ICEGDBfields" value="">
         <input type="text" id="ICEG_OTHINCMG"  name="ICEG_OTHINCMG" hidden="hidden"  class="form-control ICEGDBfields" value="">
      	 <input type="text" id="ICEG_CUSDETL"  name="ICEG_CUSDETL" hidden="hidden"  class="form-control ICEGDBfields" value="">
      	 <input type="text" id="ICEG_FINELGB"  name="ICEG_FINELGB" hidden="hidden"  class="form-control ICEGDBfields" value="">
      	 <input type="text" id="ICEG_RRELGB"  name="ICEG_RRELGB" hidden="hidden"  class="form-control ICEGDBfields" value="">
      	 <input type="text" id="ICEG_FRTRNORMS"  name="ICEG_FRTRNORMS" hidden="hidden"  class="form-control ICEGDBfields" value="">
      	 <input type="text" id="ICEG_FRTRELIGBL"  name="ICEG_FRTRELIGBL" hidden="hidden"  class="form-control ICEGDBfields" value="">
      	 <input type="text" id="ICEG_FINCSCHEM"  name="ICEG_FINCSCHEM" hidden="hidden"  class="form-control ICEGDBfields" value="">
      	<input type="text" id="ICEG_CAMBUTTON"  name="ICEG_CAMBUTTON" hidden="hidden"  class="form-control ICEGDBfields" value="">
		
		<input type="text" id="ICEG_SEPINCMG"  name="ICEG_SEPINCMG" hidden="hidden"  class="form-control ICEGDBfields" value="">
		<input type="text" id="ICEG_SEPGRINCMG"  name="ICEG_SEPGRINCMG" hidden="hidden"  class="form-control ICEGDBfields" value="">
		
		<input type="text" id="ICEG_LAPFIRMONE"  name="ICEG_LAPFIRMONE" hidden="hidden"  class="form-control ICEGDBfields" value="">
		<input type="text" id="ICEG_LAPFIRMTWO"  name="ICEG_LAPFIRMTWO" hidden="hidden"  class="form-control ICEGDBfields" value="">
		<input type="text" id="ICEG_LAPFIRMTHREE"  name="ICEG_LAPFIRMTHREE" hidden="hidden"  class="form-control ICEGDBfields" value="">
		<input type="text" id="ICEG_LAPFIRMFOUR"  name="ICEG_LAPFIRMFOUR" hidden="hidden"  class="form-control ICEGDBfields" value="">
		<input type="text" id="ICEG_ELIGASSCLSF"  name="ICEG_ELIGASSCLSF" hidden="hidden"  class="form-control ICEGDBfields" value="">
		
		
		<input type="text" id="Hiddenrow" hidden="hidden" name="Hiddenrow" value="">
		</br>

      	<div class="RR" style="display:none">
      	<div class="form-row">
        	<div class="col Btxt10">RENTAL INCOME PROGRAM</div>
        </div>
      	<div class="form-row" >
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'TableRR',{spname:'LSW_SGETRRELIGBDETL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#ICEG_UNIQUID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||12','RRELIG');" id="BTNRRELIGGRD" name="BTNRRELIGGRD" />
                <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="TableRR">
                </table>
           </div>
        </div>
        <div class="form-row">
          <div class="col-md-4">
             <div class="md-form">
                <div class="HyperControls"> 
                   <a  class="Btxt4" id="AddPropertyTable" name="AddPropertyTable"  data-table="TableRR" href="#">+ Add a Property</a>
                </div>
              </div>
           </div>
       </div> 
		<div class="form-row">
		 <div class="col-md-5">
            <div class="md-form">
                 <label for="" class="Btxt17">Total Rental Income<span class="MndtryAstr"></span></label>
            </div>
        </div>
		<div class="col-md-2">
            <div class="md-form">
                  <input type="text" id="ICEG_TOTRENTINCM" maxlength="10" disabled name="ICEG_TOTRENTINCM" class="form-control DOCU DSVLBL IsCURCommaFields IsNumberFields ICEGDBfieldS">
            </div>
        </div>
		<div class="col-md-5">
            <div class="md-form">
                 
            </div>
        </div>
		</div>
		</div>
      	<div class="RTR" style="display:none">
          <div class="form-row" >
            <div class="col">
              <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_SRTRELIGIBLDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#ICEG_UNIQUID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8,9','RTRELIG');" id="BTNRTRELIGGRD" name="BTNRTRELIGGRD" />
                 <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table4">
                 </table>
             </div>
        </div>
      	<div class="form-row">
        	<div class="col Btxt10">NORMS</div>
        </div>
        <div class="form-row">
           <div class="col-md-6">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table5',{spname:'LSW_SGETRTRNORMS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#ICEG_UNIQUID').val(),MnuId:ViewRInavtivePGFlg},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','RTRNORMS');" id="BTNRTRNORMSGRD" name="BTNRTRNORMSGRD" />
                <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table5">
                </table>
           </div>
           <div class="col-md-6 Btxt10">
                 If the customer accept to close other loans and wants
                 top up , subject to LTV norms, can be considered
           </div>
        </div>
        </div>
      	<div class="GSL" style="display:none">
      	<div class="form-row">
        	<div class="col Btxt10"></div>
        </div>
      	<div class="form-row" style="display:none">
            <div class="col-md-4">   
               <div class="md-form">
                    <div  class="select-radio"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input ICEGDBfields" value="Yes" id="PROFITY" name="ICEG_PROFITS">
                          <label class="custom-control-label" for="PROFITY">Yes</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input ICEGDBfields" checked="checked" value="No" id="PROFITN" name="ICEG_PROFITS">
                           <label class="custom-control-label" for="PROFITN">No</label>
                       </div>
                   </div>
                  <label for="" class="">Profits in the Last Three Years<span class="MndtryAstr"></span></label>
              </div>
             </div>
        </div>
       <div class="form-row">
        <div data-for="LIP" class="col LIP"> 
        </div>
         </div>
        <div class="DynamicPageGrid" data-val="PROPTXTHDR|PROPERTY" id="LIP" style="display:none">
        <div data-row="" class="DYNROW">
        <form>
        <input type="text" id="EGCD_PRCSID" hidden="hidden" name="EGCD_PRCSID" class="form-control EGCDDBfields">
        <input type="text" id="EGCD_ACTIVITYID" hidden="hidden" name="EGCD_ACTIVITYID" class="form-control EGCDDBfields">
        <input type="text" id="EGCD_DTCREATED" hidden="hidden" name="EGCD_DTCREATED" class="form-control EGCDDBfields">
        <input type="text" id="EGCD_CREATEDBY" hidden="hidden" name="EGCD_CREATEDBY" class="form-control EGCDDBfields">
        <input type="text" id="EGCD_DTMODIFIED" hidden="hidden" name="EGCD_DTMODIFIED" class="form-control EGCDDBfields">
        <input type="text" id="EGCD_MODIFIEDBY" hidden="hidden" name="EGCD_MODIFIEDBY" class="form-control EGCDDBfields">
        <input type="text" id="EGCD_CUSID" hidden="hidden" name="EGCD_CUSID" class="form-control EGCDDBfields">
        
       <!--  <input type="text" id="EGCD_CUSNAME" name="EGCD_CUSNAME" hidden="hidden" class="form-control EGCDDBfields">  -->
        <input type="text" id="EGCD_UNIQUID" name="EGCD_UNIQUID" hidden="hidden" class="form-control EGCDDBfields">
        <input type="text" id="EGCD_PROFILE"  name="EGCD_PROFILE" hidden="hidden"  class="form-control EGCDDBfields" value="">
        <input type="text" id="EGCD_PROFILEI"  name="EGCD_PROFILEI" hidden="hidden"  class="form-control EGCDDBfields" value="">

        <input type="text" id="EGCD_MARGINGST"  name="EGCD_MARGINGST" hidden="hidden"  class="form-control EGCDDBfields" value=""> 
		<input type="text" id="GRPMULTIPLIER"  name="GRPMULTIPLIER" hidden="hidden"  class="form-control EGCDDBfields" value="GRP Multiplier">
		<input type="text" id="GRMETHOD"  name="GRMETHOD" hidden="hidden"  class="form-control EGCDDBfields" value="GP method"> 
		
				
		<input type="text" id="INDUSTRYCAT"  name="INDUSTRYCAT" hidden="hidden"  class="form-control EGCDDBfields"> 		
		
		<input type="text" id="MICROLAPIAPTYPI"  name="MICROLAPIAPTYPI" hidden="hidden"  class="form-control EGCDDBfields" value="S00009IAPTABLE1">
		<input type="text" id="MICROLAPIAPTYPII"  name="MICROLAPIAPTYPII" hidden="hidden"  class="form-control EGCDDBfields" value="S00009IAPTABLE2">
		<input type="text" id="MICROLAPIAPTYPI"  name="MICROLAPIAPTYPI" hidden="hidden"  class="form-control EGCDDBfields" value="S00009IAPTABLE1">
		<input type="text" id="MICROLAPIAPTYPII"  name="MICROLAPIAPTYPII" hidden="hidden"  class="form-control EGCDDBfields" value="S00009IAPTABLE2">
		<input type="text" id="MICROLAPIAPTYPIII"  name="MICROLAPIAPTYPIII" hidden="hidden"  class="form-control EGCDDBfields" value="S00009IAPTABLES1">
		<input type="text" id="MICROLAPIAPTYPIV"  name="MICROLAPIAPTYPIV" hidden="hidden"  class="form-control EGCDDBfields" value="S00009IAPTABLES2">
		  <div class="form-row">
             <div class="col-md-6"> 
               <input type="text" id="EGCD_CUSNAME"  name="EGCD_CUSNAME" class="form-control DSVLBL Btxt04 EGCDDBfields" value="">
             </div>
             <div class="col-md-6"> 
             </div>
           </div>
           <div class="form-row SENP RIIncome" style="display:none">
             <div class="col-md-2"> 
                  <div class="md-form">
                    <select class="md-form colorful-select dropdown-primary EGCDDBfields" disabled onchange="ChngYear($(this).closest('.DYNROW').attr('data-row'),this)" id="EGCD_FINYEAR" name="EGCD_FINYEAR">
  					<option  value="2020-2021">2020-2021</option>
					<option  value="2019-2020">2019-2020</option>
  					<option  value="2018-2019">2018-2019</option>
				</select>
				<label class="mdb-main-label BTxt9">LATEST YEAR<span class="MndtryAstr"></span></label>
                  </div>
             </div>
             <div class="col-md-10"> 
             </div>
           </div> 
             <div class="SAL" style="display:none"> 
            <div class="form-row">
              <div class="col-md-4"> 
                   <label for="" class="Btxt17">Gross Salary Per Month<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-4"> 
                  <input type="text" id="EGCD_GROSALMONTH" maxlength="15" data-Calfield="EGCD_GROSALMONTH|EGCD_DEDUCTMONTH"  data-total="EGCD_FINYRTOT" name="EGCD_GROSALMONTH" class="form-control IsNumberFields IsCURCommaFields NoSpecialChar EGCDDBfields SalComp">  
              </div>
              <div class="col-md-4"> 
              </div>
           </div>
      	   <div class="form-row">
              <div class="col-md-4"> 
                   <label for="" class="Btxt17">Deductions per month<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-4"> 
                  <input type="text" id="EGCD_DEDUCTMONTH" maxlength="15" data-Calfield="EGCD_GROSALMONTH|EGCD_DEDUCTMONTH" data-total="EGCD_FINYRTOT" name="EGCD_DEDUCTMONTH" class="form-control IsNumberFields NoSpecialChar IsCURCommaFields  EGCDDBfields SalComp">  
              </div>
              <div class="col-md-4"> 
              </div>
           </div>
		   <div class="form-row SalNotes">
		   <div class="col-md-12 Btxt20">Salaried profile will not be considered for FOIR computation</div>
		   </div>
         </div>   
<div>
		 <form>
		 </form>
		 <form autocomplete="off">
		 <div class="form-row SEPCALC" style="display:none">
			<div class="col-md-3">
                 <div class="md-form">
                   <div class="md-form">
                    <div  class="select-radio SDMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input  EGCDDBfields" onclick="MakReClickElg()" value="Method 1" id="MethodSEP1" name="EGCD_METHODSEP">
                          <label class="custom-control-label" for="MethodSEP1">Method 1 - GRP Multiplier</label>
                       </div>
                   </div>     
                  </div>
                 </div>
              </div>
			  <div class="col-md-3">
					<div class="md-form">
                    <select class="md-form colorful-select dropdown-primary EGCDDBfields" onchange ="MakReClickElg()" id="EGCD_METHODSEPOPD" name="EGCD_METHODSEPOPD">
					<option value="">Select</option>
  					<option  value="Yes">Yes</option>
  					<option  value="No">No</option>
				</select>
				<label class="mdb-main-label BTxt9">Individual OPD Consultancy Receipts<span class="MndtryAstr"></span></label>
                  </div>
			  </div>
			  <div class="col-md-6">
			  </div>
			  <div class="col-md-12">
             <input type="button" data-button="GridButton" data-value="SEPCALCPROFTable|LSW_SGETSEPINCGRD|PrcsID|EGCD_PROFILE~EGCD_CUSID~EGCD_UNIQUID~GRPMULTIPLIER|EGCD_FINYEAR|4,6,7|SEPCALCPROFINCOMEGRID" style="display:none" class="DashTrg EGCDDBfields MultiGridTrg" id="BTNINCMGRDPRSEP" name="BTNINCMGRDPRSEP" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display EGCDDBfields DataGrid" name="SEPCALCPROFTable" id="SEPCALCPROFTable">
             </table>
           </div>
		   <div class="col-md-3"> 
                   <label for="" class="Btxt17">Multiplier<span class="MndtryAstr"></span></label>
              </div>
			  <div class="col-md-2"> 
                  <input type="text" id="EGCD_MULTIPLIERSEPPR"  maxlength="5" onchange="MaxMltplr1(this)" name="EGCD_MULTIPLIERSEPPR" class="form-control IsNumberFields NoSpecialChar  EGCDDBfields">  
              </div>
			  <div class="col-md-7">
			  </div>
		</div>
		<div class="form-row SEPCALC" style="display:none">
              <div class="col-md-10 BluShd"> 
                   <label for="" class="Btxt10">Total Value<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="EGCD_SEPMT1TOTVAL" name="EGCD_SEPMT1TOTVAL" value="0" disabled class="form-control DSVLBL Btxt10 IsNumberFields NoSpecialChar DSVLBL EGCDDBfields">
              </div>
           </div>
		<div class="form-row SEPCALC" style="display:none">
			<div class="col-md-12">
                 <div class="md-form">
                   <div class="md-form">
                    <div  class="select-radio SDMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input  EGCDDBfields" onclick="MakReClickElg()" value="Method 2" id="MethodSEP2" name="EGCD_METHODSEP">
                          <label class="custom-control-label" for="MethodSEP2">Method 2 - GP method</label>
                       </div>
                   </div>     
                  </div>
                 </div>
              </div>
			  <div class="col-md-12">
             <input type="button" data-button="GridButton" data-value="SEPCALCGRPMPTable|LSW_SGETSEPINCGRD1|PrcsID|EGCD_PROFILE~EGCD_CUSID~EGCD_UNIQUID~GRMETHOD|EGCD_FINYEAR|4,6,7|SEPCALCGRMPINCOMEGRID" style="display:none" class="DashTrg EGCDDBfields MultiGridTrg" id="BTNINCMGRDGRSEP" name="BTNINCMGRDGRSEP" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display EGCDDBfields DataGrid" name="SEPCALCGRPMPTable" id="SEPCALCGRPMPTable">
             </table>
           </div>
		</div>
		<div class="form-row SEPCALC" style="display:none">
			<div class="col-md-3">
                 <div class="md-form">
                   <div class="md-form">
                    <div  class="select-radio SDMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input  EGCDDBfields" onclick="MakReClickElg()" value="Method 3" id="MethodSEP3" name="EGCD_METHODSEP">
                          <label class="custom-control-label" for="MethodSEP3">Method 3</label>
                       </div>
                   </div>     
                  </div>
                 </div>
              </div>
		</div>
		</form>
		</div>
        <div class="form-row SENP" style="display:none">
           <div class="col">
             <input type="button" data-button="GridButton" data-value="INCMTable|LSW_SGETINCOMEGRID|PrcsID|EGCD_PROFILE~EGCD_CUSID~EGCD_UNIQUID|EGCD_FINYEAR|4,6,7|PRFINCOMEGRID" style="display:none" class="DashTrg EGCDDBfields MultiGridTrg" id="BTNINCMGRD" name="BTNINCMGRD" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display EGCDDBfields DataGrid" name="INCMTable" id="INCMTable">
             </table>
           </div>
        </div>
		<div class="IAP" style="display:none">
		<div class="form-row " >
			<div class="col-md-6">
				<input type="button" data-button="GridButton" data-value="IAPFRMTable|LSW_SGETIAPFRM|PrcsID|MICROLAPIAPTYPIII~EGCD_CUSID~EGCD_UNIQUID|EGCD_FINYEAR|2,3|PRFOTHINCOMEGRIDONE" style="display:none" class="DashTrg EGCDDBfields MultiGridTrg" id="BTNIAPFRMI" name="BTNIAPFRMI" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display EGCDDBfields DataGrid" name="IAPFRMTable" id="IAPFRMTable">
             </table>
			</div>
			<div class="col-md-6">
			<input type="button" data-button="GridButton" data-value="IAPFRMTables1|LSW_SGETIAPFRM1|PrcsID|MICROLAPIAPTYPIV~EGCD_CUSID~EGCD_UNIQUID|EGCD_FINYEAR|2,3|PRFOTHINCOMEGRIDTWO" style="display:none" class="DashTrg EGCDDBfields MultiGridTrg" id="BTNIAPFRMII" name="BTNIAPFRMII" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display EGCDDBfields DataGrid" name="IAPFRMTables1" id="IAPFRMTables1">
             </table>
			</div>
		</div>
		<div class="form-row ">
			<div class="col-md-6">
			   <div class="md-form">
				  <div class="HyperControls"> 
					  <a  class="Btxt4 AddPrOthrIncome EGCDDBfields BTNHIDE " name="AddIAPFRMTable"  data-table="IAPFRMTable" 
					  href="#">+ Add</a>
				   </div>
				</div>
			 </div>
			 <div class="col-md-6">
			   <div class="md-form">
				  <div class="HyperControls"> 
					  <a  class="Btxt4 AddPrOneOthrIncome EGCDDBfields BTNHIDE " name="AddIAPFRMTable1"  data-table="IAPFRMTables1" 
					  href="#">+ Add</a>
				   </div>
				</div>
			 </div>
		  </div>
		  <div class="form-row" >
					<div class="col-md-3 BluShd" >
                   <label for="" class="Btxt10">Gross Profit<span class="MndtryAstr"></span></label>
				   </div>
				   <div class="col-md-3 BluShd"> 
                   <input type="text" id="EGCD_IAPGRSPRFT" name="EGCD_IAPGRSPRFT" value="0" disabled class="form-control DSVLBL Btxt10 IsNumberFields NoSpecialChar DSVLBL EGCDDBfields">
              </div>
			  <div class="col-md-6"> 
			  
			  </div>
		  </div>
		  <div class="form-row" >
					<div class="col-md-3 BluShd">
                   <label for="" class="Btxt10">Total (a)<span class="MndtryAstr"></span></label>
				   </div>
				   <div class="col-md-3 BluShd"> 
                   <input type="text" id="EGCD_IAPTOTA" name="EGCD_IAPTOTA" value="0" disabled class="form-control DSVLBL Btxt10 IsNumberFields NoSpecialChar DSVLBL EGCDDBfields">
              </div>
			  <div class="col-md-3 BluShd">
                   <label for="" class="Btxt10">Total (b)<span class="MndtryAstr"></span></label>
				   </div>
				   <div class="col-md-3 BluShd"> 
                   <input type="text" id="EGCD_IAPTOTB" name="EGCD_IAPTOTB" value="0" disabled class="form-control DSVLBL Btxt10 IsNumberFields NoSpecialChar DSVLBL EGCDDBfields">
              </div>
		  </div>
		  <div class="form-row" >
					<div class="col-md-3 BluShd">
                   <label for="" class="Btxt10">Gross Margin %<span class="MndtryAstr"></span></label>
				   </div>
				   <div class="col-md-3 BluShd"> 
                   <input type="text" id="EGCD_IAPGRSMRGN" name="EGCD_IAPGRSMRGN" value="0" disabled class="form-control DSVLBL Btxt10 IsNumberFields NoSpecialChar DSVLBL EGCDDBfields">
              </div>
			  <div class="col-md-6"> 
			  
			  </div>
		  </div>
		  <div class="form-row " >
			<div class="col-md-6">
				<input type="button" data-button="GridButton" data-value="IAPFRMTablez|LSW_SGETIAPFRM2|PrcsID|MICROLAPIAPTYPI~EGCD_CUSID~EGCD_UNIQUID|EGCD_FINYEAR|2,3|PRFOTHINCOMEGRIDTHREE" style="display:none" class="DashTrg EGCDDBfields MultiGridTrg" id="BTNIAPFRMIII" name="BTNIAPFRMIII" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display EGCDDBfields DataGrid" name="IAPFRMTablez" id="IAPFRMTablez">
             </table>
			</div>
			<div class="col-md-6">
			<input type="button" data-button="GridButton" data-value="IAPFRMTablesx|LSW_SGETIAPFRM3|PrcsID|MICROLAPIAPTYPII~EGCD_CUSID~EGCD_UNIQUID|EGCD_FINYEAR|2,3,4|PRFOTHINCOMEGRIDFOUR" style="display:none" class="DashTrg EGCDDBfields MultiGridTrg" id="BTNIAPFRMIV" name="BTNIAPFRMIV" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display EGCDDBfields DataGrid" name="IAPFRMTablesx" id="IAPFRMTablesx">
             </table>
			</div>
		</div>
		<div class="form-row ">
			<div class="col-md-6">
			   <div class="md-form">
				  <div class="HyperControls"> 
					  <a  class="Btxt4 AddPrOthrIncomez EGCDDBfields BTNHIDE " name="AddIAPFRMTablez"  data-table="IAPFRMTablez" 
					  href="#">+ Add</a>
				   </div>
				</div>
			 </div>
			 <!--<div class="col-md-6">
			   <div class="md-form">
				  <div class="HyperControls"> 
					  <a  class="Btxt4 AddPrOneOthrIncomex EGCDDBfields BTNHIDE " name="AddIAPFRMTablesx"  data-table="IAPFRMTablesx" 
					  href="#">+ Add</a>
				   </div>
				</div>
			 </div>-->
		  </div>
		<div class="form-row " >
			<div class="col-md-3 BluShd" >
                   <label for="" class="Btxt10">Total Expense<span class="MndtryAstr"></span></label>
				   </div>
				   <div class="col-md-3 BluShd"> 
                   <input type="text" id="EGCD_IAPTOTEXP" name="EGCD_IAPTOTEXP" value="0" disabled class="form-control DSVLBL Btxt10 IsNumberFields NoSpecialChar DSVLBL EGCDDBfields">
              </div>
			  <div class="col-md-6"> 
			  
			  </div>
		</div>
		<div class="form-row " >
			<div class="col-md-3 BluShd" >
                   <label for="" class="Btxt10">To Net Profit<span class="MndtryAstr"></span></label>
				   </div>
				   <div class="col-md-3 BluShd"> 
                   <input type="text" id="EGCD_IAPTONETPRFT" name="EGCD_IAPTONETPRFT" value="0" disabled class="form-control DSVLBL Btxt10 IsNumberFields NoSpecialChar DSVLBL EGCDDBfields">
              </div>
			  <div class="col-md-6"> 
			  
			  </div>
		</div>
		<div class="form-row " >
			<div class="col-md-3 BluShd" >
                   <label for="" class="Btxt10">Total (c)<span class="MndtryAstr"></span></label>
				   </div>
				   <div class="col-md-3 BluShd"> 
                   <input type="text" id="EGCD_IAPTOTCI" name="EGCD_IAPTOTCI" value="0" disabled class="form-control DSVLBL Btxt10 IsNumberFields NoSpecialChar DSVLBL EGCDDBfields">
              </div>
			  <div class="col-md-3 BluShd" >
                   <label for="" class="Btxt10"><span class="MndtryAstr"></span></label>
				   </div>
				   <div class="col-md-3 BluShd"> 
                   <input type="text" id="EGCD_IAPTOTCII" name="EGCD_IAPTOTCII" value="0" disabled class="form-control DSVLBL Btxt10 IsNumberFields NoSpecialChar DSVLBL EGCDDBfields">
              </div>
		</div>
		<div class="form-row " >
			<div class="col-md-3 BluShd">
                   <label for="" class="Btxt10">Net Margin %<span class="MndtryAstr"></span></label>
				   </div>
				   <div class="col-md-3 BluShd"> 
                   <input type="text" id="EGCD_IAPNETMRGN" name="EGCD_IAPNETMRGN" value="0" disabled class="form-control DSVLBL Btxt10 IsNumberFields NoSpecialChar DSVLBL EGCDDBfields">
              </div>
			  <div class="col-md-6"> 
			  
			  </div>
		</div>
		<div class="form-row ">
			<div class="col-md-3"> 
                   <div class="md-form">
                    <select class="md-form colorful-select dropdown-primary EGCDDBfields" onchange="" id="EGCD_IAPSEGMNT" name="EGCD_IAPSEGMNT">
                  	  <option value="">--Select--</option>
					  <option value="Trading">Trading</option>
					  <option value="Service">Service</option>
					  <option value="Manufacturing">Manufacturing</option>
				  </select>
				<label class="mdb-main-label BTxt9">Segment<span class="MndtryAstr"></span></label>
                  </div>
              </div>
			  <div class="col-md-3">
                <div class="md-form">			  
                     
				     <input type="text" id="EGCD_IAPCATEGORY" maxlength="100"  name="EGCD_IAPCATEGORY" class="form-control NoSpecialChar EGCDDBfields">
				      <label for="EGCD_IAPCATEGORY" class="">Category<span class="MndtryAstr"></span></label>
				</div>
              </div>
			  <div class="col-md-2">
                <div class="md-form">			  
                     
				     <input type="text" id="EGCD_IAPMNTHLYTURNOVR" maxlength="100" disabled name="EGCD_IAPMNTHLYTURNOVR" class="form-control DSVLBL EGCDDBfields">
				      <label for="EGCD_IAPMNTHLYTURNOVR" class="">Monthly Turnover<span class="MndtryAstr"></span></label>
				</div>
              </div>
			  <div class="col-md-2">
                <div class="md-form">			  
                     
				     <input type="text" id="EGCD_IAPMRGN" maxlength="100" disabled name="EGCD_IAPMRGN" class="form-control DSVLBL EGCDDBfields">
				      <label for="EGCD_IAPMRGN" class="">Margin%<span class="MndtryAstr"></span></label>
				</div>
              </div>
			  <div class="col-md-2">
                <div class="md-form">			  
                     
				     <input type="text" id="EGCD_IAPNETBUSINESS" maxlength="100" disabled name="EGCD_IAPNETBUSINESS" class="form-control DSVLBL EGCDDBfields">
				      <label for="EGCD_IAPNETBUSINESS" class="">Net Business Income<span class="MndtryAstr"></span></label>
				</div>
              </div>
		</div>
		<div class="form-row">
        	<div class="col Btxt10">Asset Creation</div>
        </div>
		<div class="form-row">
			<div class="col">
             <input type="button" data-button="GridButton" data-value="ASSETCTable|LSW_SASSETCLASSIF|PrcsID|EGCD_PROFILE~EGCD_CUSID~EGCD_UNIQUID||3,4|ASSETCLASSGRID" style="display:none" class="DashTrg EGCDDBfields MultiGridTrg" id="BTNASSETGRD" name="BTNASSETGRD" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display EGCDDBfields DataGrid" name="ASSETCTable" id="ASSETCTable">
             </table>
          </div>
		</div>
		 <div class="form-row">
          <div class="col-md-4">
             <div class="md-form">
                <div class="HyperControls"> 
                    <a  class="Btxt4 AddAssetTable EGCDDBfields BTNHIDE " name="AddAssetTable"  data-table="ASSETCTable" href="#">+ Add a Asset</a>
				</div>
              </div>
           </div>
        </div>
		<div class="form-row " >
			<div class="col-md-3 BluShd">
                   <label for="" class="Btxt10">Total Asset Creation<span class="MndtryAstr"></span></label>
				   </div>
				   <div class="col-md-3 BluShd"> 
                   <input type="text" id="EGCD_IAPTOTASSTCR" name="EGCD_IAPTOTASSTCR" value="0" disabled class="form-control DSVLBL Btxt10 IsNumberFields NoSpecialChar DSVLBL EGCDDBfields">
              </div>
			  <div class="col-md-6"> 
			  
			  </div>
		</div>		
		
		
		<div class="form-row">
			<div class="col">
             <!--<input type="button" data-button="GridButton" data-value="OTHINCMTable|LSW_SGETOTHINCOMEGRID|PrcsID|EGCD_PROFILE~EGCD_CUSID~EGCD_UNIQUID|EGCD_FINYEAR|4,6,7|PRFOTHINCOMEGRID" style="display:none" class="DashTrg EGCDDBfields MultiGridTrg" id="BTNOINCMGRD" name="BTNOINCMGRD" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display EGCDDBfields DataGrid" name="OTHINCMTable" id="OTHINCMTable">
             </table>-->
          </div>
		</div>
		<div class="form-row">
		<div class="col-md-4">
			  <div class="md-form">
				<input type="text" id="EGCD_IAPAPPLCBL"  onchange="" value = "30" name="EGCD_IAPAPPLCBL"  disabled class="form-control DSVLBL Btxt10  IsNumberFields NoSpecialChar  EGCDDBfields">  
				<label for="EGCD_IAPAPPLCBL" class="">Applicable %</label>
				</div>
			  </div>
		<div class="col-md-4">
			  <div class="md-form">
				<input type="text" id="EGCD_IAPAPPRMNTHLYINC"  onchange="" value = "0" name="EGCD_IAPAPPRMNTHLYINC"  disabled class="form-control DSVLBL Btxt10 IsCURCommaFields IsNumberFields NoSpecialChar  EGCDDBfields">  
				<label for="EGCD_IAPAPPLCBL" class="">Appraised Monthly Income</label>
				</div>
			  </div>
			  <div class="col-md-4">
			  <div class="md-form">
				<input type="text" id="EGCD_IAPASSTCRRA"  onchange="" value = "0" name="EGCD_IAPASSTCRRA"  disabled class="form-control DSVLBL Btxt10  IsNumberFields NoSpecialChar  EGCDDBfields">  
				<label for="EGCD_IAPAPPLCBL" class="">Actual Asset Creation Ratio %</label>
				</div>
			  </div>
			  
			  </div>
		</div>
           <div class="form-row SBS" style="display:none">
              <div class="col-md-10 BluShd"> 
                   <label for="" class="Btxt10">Amount Consider for Eligibility<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="EGCD_FINYRTOT" name="EGCD_FINYRTOT" value="0" disabled class="form-control DSVLBL Btxt10 IsNumberFields NoSpecialChar DSVLBL EGCDDBfields">
              </div>
           </div>
           <div class="NSAL" style="display:none">
           <div class="form-row PAT" style="display:none">
              <div class="col-md-3"> 
                   <label for="" class="Btxt17">Multiplier<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2"> 
                  <input type="text" id="EGCD_MULTIPLIERII" onchange="PATMaxMltplr(this);PATMulplrCalc(this)" maxlength="3" name="EGCD_MULTIPLIERII" data-Calfield="EGCD_UNIQUID|EGCD_PATTOTINCOM|EGCD_MULTIPLIERII"   class="form-control IsNumberFields NoSpecialChar  EGCDDBfields PATMulplrCalc">  
              </div>
              <div class="col-md-3"> 
			         
              </div>
              <div class="col-md-2"> 
                   
              </div>
              <div class="col-md-2"> 
              </div>
          </div>
		  <div class="form-row PAT" style="display:none">
              <div class="col-md-3"> 
                   <label for="" class="Btxt17">Total Income<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2"> 
                    <input type="text" id="EGCD_PATTOTINCOM" disabled name="EGCD_PATTOTINCOM" class="form-control DSVLBL IsNumberFields NoSpecialChar  EGCDDBfields">  
              </div>
              <div class="col-md-3"> 
			         
              </div>
              <div class="col-md-2"> 
                   
              </div>
              <div class="col-md-2"> 
              </div>
          </div>
		  <div class="form-row GTO" style="display:none">
              <div class="col-md-3"> 
                   <label for="" class="Btxt17">Multiplier (A)<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2"> 
                  <input type="text" id="EGCD_MULTIPLIER" onchange="MaxMltplr(this)" maxlength="5" name="EGCD_MULTIPLIER" data-Calfield="EGCD_UNIQUID|EGCD_FINYRTOT|EGCD_MULTIPLIER|EGCD_MULTIPLIERI|EGCD_CACERITFY|EGCD_LOWER"  data-total="EGCD_INCOMCONS" class="form-control IsNumberFields NoSpecialChar  EGCDDBfields MulplrCalc">  
              </div>
              <div class="col-md-1"> 
              </div>
              <div class="col-md-2"> 
                     <input type="text" id="EGCD_MULTIPLIERI" style="display:none;" name="EGCD_MULTIPLIERI" class="form-control DSVLBL IsNumberFields NoSpecialChar  EGCDDBfields">  
              </div>
              <div class="col-md-2"> 
              </div>
              <div class="col-md-2"> 
              </div>
          </div>
		   <div class="form-row GTO" style="display:none">
              <div class="col-md-2"> 
                   <label for="" class="Btxt17">Computed Chola Margin %<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2"> 
                  <input type="text" id="EGCD_COMCHOMRG" disabled onchange="" maxlength="5" name="EGCD_COMCHOMRG" data-Calfield=""  data-total="" class="form-control IsNumberFields NoSpecialChar DSVLBL EGCDDBfields ">  
              </div>
              <div class="col-md-2"> 
              </div>
              <div class="col-md-2"> 
                     
              </div>
              <div class="col-md-2"> 
              </div>
              <div class="col-md-2"> 
              </div>
          </div>
		   <div class="form-row CGTO" style="display:none">
              <div class="col-md-2"> 
                <label for="" class="Btxt17">Guideline Industry Margin<span class="MndtryAstr"></span></label>
              </div>
              <!--<div class="col-md-2"> 
                   <input type="text" id="EGCD_GLINDUSMRG" disabled onchange="" maxlength="5" name="EGCD_GLINDUSMRG" data-Calfield=""  data-total="" class="form-control IsNumberFields NoSpecialChar DSVLBL EGCDDBfields ">  
              </div>-->
              <div class="col-md-2"> 
                   <div class="md-form">
                    <select class="md-form colorful-select dropdown-primary EGCDDBfields" onchange="GetSegmDD('EGCD_INDUSTRY'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_SEGMENT'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_SEGDEFI'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_MARGIN'+$(this).closest('.DYNROW').attr('data-row'),this,'EGCD_BUSTYPE'+$(this).closest('.DYNROW').attr('data-row'))" id="EGCD_INDUSTRY" name="EGCD_INDUSTRY">
                  	  <option value="">--Select--</option>
				  </select>
				<label class="mdb-main-label BTxt9">Industry<span class="MndtryAstr">*</span></label>
                  </div>
              </div>
              <div class="col-md-2"> 
                  <div class="md-form">
                    <select class=" md-form colorful-select dropdown-primary EGCDDBfields" onchange="GetSegmDefiDD('EGCD_INDUSTRY'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_SEGMENT'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_SEGDEFI'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_MARGIN'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_BUSTYPE'+$(this).closest('.DYNROW').attr('data-row'),this)" id="EGCD_SEGMENT" name="EGCD_SEGMENT">
                  	<option value="">--Select--</option>
				</select>
				<label class="mdb-main-label BTxt9">Segment<span class="MndtryAstr">*</span></label>
                  </div>
              </div>
              <div class="col-md-2"> 
                 <div class="md-form">
                    <select class="md-form colorful-select dropdown-primary EGCDDBfields" onchange="GetSegmDefiDD1('EGCD_INDUSTRY'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_SEGMENT'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_SEGDEFI'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_MARGIN'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_BUSTYPE'+$(this).closest('.DYNROW').attr('data-row'),this)" id="EGCD_SEGDEFI" name="EGCD_SEGDEFI">
                  	<option value="">--Select--</option>
				</select>
				<label class="mdb-main-label BTxt9">Segment Definition<span class="MndtryAstr">*</span></label>
                  </div>    
              </div>
              <div class="col-md-2">
                <div class="md-form">
                 <select class="md-form colorful-select dropdown-primary EGCDDBfields" onchange="GetMarginDT('EGCD_INDUSTRY'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_SEGMENT'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_SEGDEFI'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_BUSTYPE'+$(this).closest('.DYNROW').attr('data-row'),'EGCD_MARGIN'+$(this).closest('.DYNROW').attr('data-row'),this)" id="EGCD_BUSTYPE" name="EGCD_BUSTYPE">
                  	 <option value="">--Select--</option>
  					 <option  value="Manufacturing">Manufacturing</option>
  					 <option  value="Traders">Traders</option>
 					 <option  value="Services">Services</option>
				</select>
				<label class="mdb-main-label BTxt9">Business Type<span class="MndtryAstr">*</span></label>
                  </div>			  
              </div>
              <div class="col-md-2">
                <div class="md-form">			  
                     
				     <input type="text" id="EGCD_MARGIN" maxlength="25" disabled name="EGCD_MARGIN" class="form-control DSVLBL EGCDDBfields">
				      <label for="EGCD_MARGIN" class="">Margin%<span class="MndtryAstr">*</span></label>
				</div>
              </div>
          </div>
		  <div class="form-row CGTO" style="display:none">
			<div class="col-md-3"> 
                 <label for="" class="Btxt17">Gross Profit Margin %<span class="MndtryAstr"></span></label>    
              </div>
              <div class="col-md-2">
  			      <input type="text" id="EGCD_GROSSPM"  onchange="GPMPres(this)" maxlength="5" name="EGCD_GROSSPM" data-Calfield="" data-field="EGCD_COMCHOMRG|EGCD_MARGIN|EGCD_GROSSPM|EGCD_CHOLAMEGIN" class=" form-control IsNumberFields NoSpecialChar EGCDDBfields ">  
              </div>
              <div class="col-md-7"> 
              </div>
		  </div>
		  <div class="form-row CGTO" style="display:none">
			<div class="col-md-3"> 
                 <label for="" class="Btxt17">Chola Margin %<span class="MndtryAstr"></span></label>    
              </div>
              <div class="col-md-2">
  			      <input type="text" id="EGCD_CHOLAMEGIN"  onchange="" maxlength="5" name="EGCD_CHOLAMEGIN" data-Calfield=""  data-total="" disabled class=" form-control IsNumberFields NoSpecialChar DSVLBL  EGCDDBfields ">  
              </div>
              <div class="col-md-7"> 
              </div>
		  </div>
		  <form>
		  <div class="form-row CGTO" style="display:none">
			<div class="col-md-3">
                 <div class="md-form">
                   <div class="md-form">
                    <div  class="select-radio SDMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input  EGCDDBfields" value="Method 1" onclick="MOVEAPPRTOINC(this,'EGCD_APPRMNTHINCMT1','EGCD_INCOMCONS');" id="Method1" name="EGCD_METHOD">
                          <label class="custom-control-label" for="Method1">Method 1 - Chola margin Banking</label>
                       </div>
                   </div>     
                  </div>
                 </div>
              </div>
			  <div class="col-md-3">
				<div class="md-form">
				<input type="text" id="EGCD_ELIGHCRSUMMT1"  onchange=""  name="EGCD_ELIGHCRSUMMT1" data-Calfield="" disabled  data-total=""  class=" form-control IsNumberFields NoSpecialChar DSVLBL  EGCDDBfields ">  
				<label for="EGCD_ELIGHCRSUMMT1" class="">Eligible Credit Summation</label>
			  </div>
			  </div>
			  <div class="col-md-3">
			  <div class="md-form">
				<input type="text" id="EGCD_APPRMNTHINCMT1"  onchange=""  name="EGCD_APPRMNTHINCMT1" data-Calfield=""  data-total="" disabled class=" form-control IsNumberFields NoSpecialChar DSVLBL  EGCDDBfields ">  
				<label for="EGCD_APPRMNTHINCMT1" class="">Appraised Monthly Income</label>
				</div>
			  </div>
		  </div>
		  <div class="form-row CGTO" style="display:none">
			<div class="col-md-3">
                 <div class="md-form">
                   <div class="md-form">
                    <div  class="select-radio SDMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input  EGCDDBfields" onclick="MOVEAPPRTOINC(this,'EGCD_APPRMNTHINCMT2','EGCD_INCOMCONS');" value="Method 2" id="Method2" name="EGCD_METHOD">
                          <label class="custom-control-label" for="Method2">Method 2 - Chola margin sales</label>
                       </div>
                   </div>     
                  </div>
                 </div>
              </div>
			  <div class="col-md-3">
			  <div class="md-form">
				<input type="text" id="EGCD_APPRMNTHINCMT2"  onchange=""  name="EGCD_APPRMNTHINCMT2" data-Calfield=""  data-total="" disabled class=" form-control IsNumberFields NoSpecialChar DSVLBL  EGCDDBfields ">  
				<label for="EGCD_APPRMNTHINCMT2" class="">Appraised Monthly Income</label>
				</div>
			  </div>
		  </div>
		  <div class="form-row CGTO" style="display:none">
			<div class="col-md-3">
                 <div class="md-form">
                   <div class="md-form">
                    <div  class="select-radio SDMndtry"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input  EGCDDBfields" onclick="MOVEAPPRTOINC(this,'EGCD_APPRMNTHINCMT3','EGCD_INCOMCONS');" value="Method 3" id="Method3" name="EGCD_METHOD">
                          <label class="custom-control-label" for="Method3">Method 3 - Chola margin GST</label>
                       </div>
                   </div>     
                  </div>
                 </div>
              </div>
			  <div class="col-md-4 "> 
                  <div class="md-form">
                  <div class="HyperControls"> 
                  <a type="button" class="Btxt4 FltLeft MarginMGST EGCDDBfields" data-toggle="modal" name="MarginBalance" data-target="#MarginBalance" href="#">Update Monthly GST</a>
                </div>
                  </div>
                  </div>
				  <div class="col-md-3">
			  <div class="md-form">
				<input type="text" id="EGCD_TOTGSTMT2"  onchange="" value="0" name="EGCD_TOTGSTMT2" data-Calfield=""  data-total="" disabled class=" form-control IsNumberFields NoSpecialChar DSVLBL  EGCDDBfields ">  
				<label for="EGCD_TOTGSTMT2" class="">Total Monthly GST</label>
				</div>
			  </div>
			  <div class="col-md-2">
			  <div class="md-form">
				<input type="text" id="EGCD_APPRMNTHINCMT3"  onchange="" value="0"  name="EGCD_APPRMNTHINCMT3" data-Calfield=""  data-total="" disabled class=" form-control IsNumberFields NoSpecialChar DSVLBL  EGCDDBfields ">  
				<label for="EGCD_APPRMNTHINCMT3" class="">Appraised Monthly Income</label>
				</div>
			  </div>
		  </div>
		  </form>
          <div class="form-row NGTO" style="display:none">
              <div class="col-md-3"> 
                   <label for="" class="Btxt18">CA Certified Income (B)<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-1"> 
               </div>
              <div class="col-md-2"> 
              </div>
              <div class="col-md-2"> 
                     <input type="text" id="EGCD_CACERITFY" name="EGCD_CACERITFY" data-Calfield="EGCD_UNIQUID|EGCD_FINYRTOT|EGCD_MULTIPLIER|EGCD_MULTIPLIERI|EGCD_CACERITFY|EGCD_LOWER"  data-total="EGCD_INCOMCONS" class="form-control IsNumberFields NoSpecialChar  EGCDDBfields MulplrCalc">  
              </div>
              <div class="col-md-2"> 
              </div>
              <div class="col-md-2"> 
              </div>
          </div>
          <div class="form-row NGTO" style="display:none">
              <div class="col-md-2"> 
                   <label for="" class="Btxt17">Lower of (A) or (B)<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2"> 
               </div>
              <div class="col-md-2"> 
            
              </div>
              <div class="col-md-2"> 
                     <input type="text" id="EGCD_LOWER" name="EGCD_LOWER" disabled class="form-control Btxt10 DSVLBL IsNumberFields NoSpecialChar  EGCDDBfields">  
              </div>
              <div class="col-md-2"> 
              </div>
              <div class="col-md-2"> 
              </div>
          </div>
          <div class="form-row GTO" style="display:none">
              <div class="col-md-3"> 
                   <label for="" class="Btxt17">Income to be considered<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-1"> 
               </div>
              <div class="col-md-2"> 
              </div>
              <div class="col-md-2"> 
               </div>
              <div class="col-md-2"> 
              </div>
              <div class="col-md-2"> 
                  <input type="text" id="EGCD_INCOMCONS" name="EGCD_INCOMCONS" disabled class="form-control Btxt10 IsNumberFields DSVLBL NoSpecialChar  EGCDDBfields">  
              </div>
          </div>
       </div>
      <div class="form-row RIIncome" >
          <div class="col">
             <input type="button" data-button="GridButton" data-value="OTHINCMTable|LSW_SGETOTHINCOMEGRID|PrcsID|EGCD_PROFILE~EGCD_CUSID~EGCD_UNIQUID|EGCD_FINYEAR|4,6,7|PRFOTHINCOMEGRID" style="display:none" class="DashTrg EGCDDBfields MultiGridTrg" id="BTNOINCMGRD" name="BTNOINCMGRD" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display EGCDDBfields DataGrid" name="OTHINCMTable" id="OTHINCMTable">
             </table>
          </div>
      </div>
      <div class="form-row RIIncome">
        <div class="col-md-4">
           <div class="md-form">
              <div class="HyperControls"> 
                  <a  class="Btxt4 AddOthrIncome EGCDDBfields BTNHIDE " name="AddOTHINCMTable"  data-table="OTHINCMTable" href="#">+ Add Another Income</a>
               </div>
            </div>
         </div>
      </div>
       <div class="form-row RIIncome">
              <div class="col-md-10 BluShd"> 
                   <label for="" class="Btxt10">Total<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="EGCD_FINOTHYRTOT" name="EGCD_FINOTHYRTOT" disabled value="0" class="form-control DSVLBL TOTOTHRINCM Btxt10 IsNumberFields NoSpecialChar  EGCDDBfields">
              </div>
         </div>
         </br>
   </form>

 <a type="button" id="Popup1" class="btn btn-floating btn-large red EGCDDBfields" style="display:none" name="MarginBalance" data-toggle="modal" data-target="#MarginBalance">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade EGCDDBfields" id="MarginBalance" data-info="ModalWindow" name="MarginBalanceModal" tabindex="-1" role="dialog" aria-labelledby="MarginBalanceLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:750px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10"></div> 
   <a href="#"><img id="MarginBalanceCLOSE" class="close MarginClose" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form>
         <div class="form-row">
             <div class="col-md-12"> 
			 <input type="text" id="UGST_PRCSID" hidden="hidden" name="UGST_PRCSID" class="form-control UGSTDBfields">
			<input type="text" id="UGST_ACTIVITYID" hidden="hidden" name="UGST_ACTIVITYID" class="form-control UGSTDBfields">
			<input type="text" id="UGST_DTCREATED" hidden="hidden" name="UGST_DTCREATED" class="form-control UGSTDBfields">
			<input type="text" id="UGST_CREATEDBY" hidden="hidden" name="UGST_CREATEDBY" class="form-control UGSTDBfields">
			<input type="text" id="UGST_DTMODIFIED" hidden="hidden" name="UGST_DTMODIFIED" class="form-control UGSTDBfields">
			<input type="text" id="UGST_MODIFIEDBY" hidden="hidden" name="UGST_MODIFIEDBY" class="form-control UGSTDBfields">
			<input type="text" id="UGST_CUSID" hidden="hidden" name="UGST_CUSID" class="form-control UGSTDBfields">
			<input type="text" id="UGST_UPDTGSTXML" hidden="hidden" name="UGST_UPDTGSTXML" class="form-control UGSTDBfields">
			 
              <input type="text" id="UGST_CUSNAMEM"  name="UGST_CUSNAMEM" class="form-control DSVLBL Btxt04 UGSTDBfields" value="">
			   <input type="text" id="UGST_SCHEMEID"  name="UGST_SCHEMEID" hidden="hidden" class="form-control DSVLBL Btxt04 UGSTDBfields" value="">
          
			  </div>
         </div> 
      <div class="form-row">
          <div class="col">
             <input type="button" data-button="GridButton" data-value="MGSTTable|LSW_SGETMARGINGSTGRID|PrcsID|EGCD_PROFILE|EGCD_CUSID|2,3,4|MARGINGST" style="display:none" class="DashTrg EGCDDBfields BalancGrdTrg  MultiGridTrg" id="BTNMARGINGST" name="BTNMARGINGST" />
             <table cellpadding="0"  cellspacing="0" border="0" style="width: 80%" class="display EGCDDBfields DataGrid" name="MGSTTable" id="MGSTTable">
             </table>
          </div>
      </div>
         </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="MarginSmt" data-aria="LSW_TUPDTGST|UGST|UGST_CUSID" class="btn btn-yel FCBDDBfields Btxt2 BalanceMargin">Submit</button>
      </div>
    </div>
  </div>
  </div>
  </div>
</div>
<div class="form-row">
               <button type="button" id="ELIGCHK" data-form="" style="display:none;" onclick="OnClickChkElig();" class=" BTNHIDE btn btn-Syel waves-effect waves-light">Check Eligibility</button>   
        </div> 
       <div class="form-row NRIIncome">
        	<div class="col Btxt10">Eligibility</div>
        </div>
                    
        <div class="form-row" >
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table6',{spname:'LSW_SGETELIGBLEDETL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#ICEG_UNIQUID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||6,7','FINCELIGB');" id="BTNFINCELIGBGRD" name="BTNFINCELIGBGRD" />
                <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="Table6">
                </table>
           </div>
        </div>
        <div class="form-row NRIIncome">
              <div class="col-md-2 BluShd"> 
                   <label for="" class="Btxt10">Total<span class="MndtryAstr"></span></label>
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="ICEG_MONTINCM" name="ICEG_MONTINCM" value="0" maxlength="15"  class="form-control DSVLBL Btxt10 IsCURCommaFields IsNumberFields NoSpecialChar  ICEGDBfields">
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="ICEG_OTHSRC" name="ICEG_OTHSRC" value="0" value="0" maxlength="5"  class="form-control DSVLBL Btxt10 DSVLBL IsCURCommaFields IsNumberFields NoSpecialChar  ICEGDBfields">
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="ICEG_OPPRAISEDOB" name="ICEG_OPPRAISEDOB" value="0" maxlength="15" class="form-control DSVLBL  IsCURCommaFields Btxt10 IsNumberFields NoSpecialChar  ICEGDBfields">
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="ICEG_FOIR" name="ICEG_FOIR" value="0" maxlength="3" class="form-control DSVLBL Btxt10 DSVLBL IsPercentageFld IsNumberFields NoSpecialChar  ICEGDBfields">
              </div>
              <div class="col-md-2 BluShd"> 
                   <input type="text" id="ICEG_LONELGBL" name="ICEG_LONELGBL" maxlength="15" value="0" class="form-control DSVLBL Btxt10 IsCURCommaFields IsNumberFields NoSpecialChar  ICEGDBfields">
              </div>
          </div>
     </div>
	        <div class="form-row">
               <div class="col-md-4 RMEL">
                  <div class="md-form">
                  	  <input type="text" id="ICEG_EXPOUSER"  disabled maxlength="3"  name="ICEG_EXPOUSER" class="DetRpt form-control IsNumberFields IsCURCommaFields NoSpecialChar  ICEGDBfields">
                      <label for="ICEG_EXPOUSER" class="">Existing Exposure<span class="MndtryAstr"></span></label>
                  </div>    
              </div>
              <div class="col-md-4 RMEL">
                  <div class="md-form">
                    <input type="text" id="ICEG_TOTEXPOUSER" disabled maxlength="3" name="ICEG_TOTEXPOUSER" class="DetRpt form-control  IsNumberFields IsCURCommaFields NoSpecialChar ICEGDBfields">
                    <label for="ICEG_TOTEXPOUSER" class="">Total Exposure<span class="MndtryAstr"></span></label>
                  </div>
               </div>
               <div class="col-md-4 LTV">
			    <div class="md-form">
                    <input type="text" id="ICEG_ConslLTV" disabled maxlength="10" name="ICEG_ConslLTV" class="DetRpt form-control  IsNumberFields IsCURCommaFields NoSpecialChar ICEGDBfields">
                    <label for="ICEG_ConslLTV" class="">Consolidated LTV<span class="MndtryAstr"></span></label>
                  </div>
               </div>
            </div>
           <!-- SCHEME -->
       <div class="BRLR"> 
       
      <div data-for="ELIGHSCHEME" class="ELIGHSCHEME"> 
      </div>
       <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="ELIGHSCHEME" style="display:none">
       <div data-row="" class=" DYNROW">
          <input type="text" id="FCEB_PRCSID" hidden="hidden" name="FCEB_PRCSID" class="form-control FCEBDBfields">
         <input type="text" id="FCEB_ACTIVITYID" hidden="hidden" name="FCEB_ACTIVITYID" class="form-control FCEBDBfields">
         <input type="text" id="FCEB_DTCREATED" hidden="hidden" name="FCEB_DTCREATED" class="form-control FCEBDBfields">
         <input type="text" id="FCEB_CREATEDBY" hidden="hidden" name="FCEB_CREATEDBY" class="form-control FCEBDBfields">
         <input type="text" id="FCEB_DTMODIFIED" hidden="hidden" name="FCEB_DTMODIFIED" class="form-control FCEBDBfields">
         <input type="text" id="FCEB_MODIFIEDBY" hidden="hidden" name="FCEB_MODIFIEDBY" class="form-control FCEBDBfields">
         <input type="text" id="FCEB_CATEGORY"  hidden="hidden" name="FCEB_CATEGORY" class="form-control FCEBDBfields">
         <input type="text" id="FCEB_SCHEME"  hidden="hidden" name="FCEB_SCHEME" class="form-control FCEBDBfields">
		 <input type="text" id="FCEB_SCHEMELOAN"  hidden="hidden" name="FCEB_SCHEMELOAN" class="form-control FCEBDBfields">

            <div class="form-row">
              <div class=" col-md-4 GryShd">
                 <div class="md-form">
                 <input type="text" id="FCEB_PROFILE" disabled name="FCEB_PROFILE" class="form-control Btxt17 DSVLBL FCEBDBfields  ">
                 </div>
              </div> 
              <div class=" col-md-1">
              </div>
              <div class=" col-md-3">
                 <div class="md-form">
                    <input type="text" id="FCEB_VALUE" placeholder ="-" name="FCEB_VALUE" disabled class="form-control DSVLBL  FCEBDBfields  ">
                    <input type="text" id="FCEB_HIDDENID"  hidden="hidden" name="FCEB_HIDDENID" class="form-control FCEBDBfields">
                 </div>
              </div>
			  <div class=" col-md-4">
                 <div class="md-form">
                    <input type="text" id="ALERTFLD" disabled name="ALERTFLD" style="display:none" class="form-control   Btxt20  ">
                 </div>
              </div>
            </div>
          </div>
         </div>
		 
         </div>
        <!-- SCHEME end -->
		<!-- Credit Analytics Start-->

<div  id="CreditAnalyticsST" style="display:none">

<div class="row">
<div class="col-md-12 CBTXT03" style="">
    		CREDIT DECISION
    	</div>
</div>

<div class="row" style="margin-top:20px; margin-left:0px; margin-right:0px;">
    	
    	<div class="col-md-3 ">
		
		
		    	<div class="row">
<div class="col-md-12 CrdDescUI" style="margin-left:0px; margin-right:0px;">
		
    		<div class="row CrdDescUIR">
    		
    			<div class="col-md-4 ">
    				
    				
					<div style="height:60px; width:60px; border-radius:30px; background-color:#057CB3; margin:0 auto; text-align:center;">
         							<img src="ThemeproLO/Common/FEP/images/PerfrmnceBar.png" style="height:80%; width:auto; margin-top:10%;">
         						</div>	
					
    			</div>
				
				<div class="col-md-8">
    				
    				
					<div class="CBTXT01" id="CRSCORE">-</div>
					<div class="CBTXT02">Credit Score</div>
					
					
    			</div>
    			
    			
    		</div>
		
    	</div>
    	
			</div>
			
				</br>
				<div class="row">
<div class="col-md-12 CrdDescUI" style="margin-left:0px; margin-right:0px;">
		
    		<div class="row CrdDescUIR">
    		
    			<div class="col-md-4 ">
    				
    				
					<div style="height:60px; width:60px; border-radius:30px; background-color:#057CB3; margin:0 auto; text-align:center;">
         							<img src="ThemeproLO/Common/FEP/images/PerfrmncPercentg.png" style="height:80%; width:auto; margin-top:10%;">
         						</div>	
					
					
    			</div>
				
				<div class="col-md-8">
    				
    				
					<div class="CBTXT01" id="CRD">-</div>
					<div class="CBTXT02">Decision</div>
					
    			</div>
    			
    			
    		</div>
    	</div>
    	
			</div>
			
    	</div>
		
		
		         <div class="col-md-9 CrdDescUIReas">
       
  <div class="row">
		<div class="col-md-1 CBTXT04" style="">
    					
    	</div>
    	<div class="col-md-11 CBTXT03" style="">
    		3 Reason Points
    	</div>
    	</div>
</br>
	   <div class="row CrdDescUIReasRw">
		
		
		<div class="col-md-1 CBTXT04" style="">
    		<i class="fa fa-angle-right rotate-icon"></i>  				
    	</div>
		
    	<div class="col-md-11 CBTXT05" style="" id="CRR1">
    -	
    	</div>
    	</div>
		  <div class="row CrdDescUIReasRw">
		
    	<div class="col-md-1 CBTXT04" style="">
    		<i class="fa fa-angle-right rotate-icon"></i>  				
    	</div>
		
    	<div class="col-md-11 CBTXT05" style=""  id="CRR2">
    	-
  </div>
</div>
		  <div class="row CrdDescUIReasRw">
		
    <div class="col-md-1 CBTXT04" style="">
    		<i class="fa fa-angle-right rotate-icon"></i>  				
    	</div>
		
    	<div class="col-md-11 CBTXT05" style=""  id="CRR3">
    	-
    		
    	</div>
    	</div>
    	</div>
  			
    </div>

</br>
</br>


<div class="row">
<div class="col-md-12 CBTXT03" style="">
    		CLUSTER DECISION
    	</div>
</div>

<div class="row" style="margin-top:20px; margin-left:0px; margin-right:0px;">
    	
    	<div class="col-md-3 ">
		
		
		    	<div class="row">
<div class="col-md-12 CrdDescUI" style="margin-left:0px; margin-right:0px;">
		
    		<div class="row CrdDescUIR">
    		
    			<div class="col-md-4 ">
    				
    				
					<div style="height:60px; width:60px; border-radius:30px; background-color:#057CB3; margin:0 auto; text-align:center;">
         							<img src="ThemeproLO/Common/FEP/images/PerfrmnceBar.png" style="height:80%; width:auto; margin-top:10%;">
         						</div>	
					
					
    			</div>
				
				<div class="col-md-8">
    				
    				
					<div class="CBTXT01" id="CLSCORE">-</div>
					<div class="CBTXT02">Credit Score</div>
					
					
    			</div>
    			
    			
    		</div>
		
    	</div>
    	
			</div>
			
				</br>
				<div class="row">
<div class="col-md-12 CrdDescUI" style="margin-left:0px; margin-right:0px;">
		
    		<div class="row CrdDescUIR">
    		
    			<div class="col-md-4 ">
    				
    				
					<div style="height:60px; width:60px; border-radius:30px; background-color:#057CB3; margin:0 auto; text-align:center;">
         							<img src="ThemeproLO/Common/FEP/images/PerfrmncPercentg.png" style="height:80%; width:auto; margin-top:10%;">
         						</div>	
					
					
    			</div>
				
				<div class="col-md-8">
    				
    				
					<div class="CBTXT01" id="CLD">-</div>
					<div class="CBTXT02">Decision</div>
					
    			</div>
    			
    			
    		</div>
    	</div>
    	
			</div>
			
    	</div>
		
		         <div class="col-md-9 CrdDescUIReas">
       
  <div class="row">
		<div class="col-md-1 CBTXT04" style="">
    					
    	</div>
    	<div class="col-md-11 CBTXT03" style="">
    		3 Reason Points
    	</div>
    	</div>
</br>
	   <div class="row CrdDescUIReasRw">
		
		
		<div class="col-md-1 CBTXT04" style="">
    		<i class="fa fa-angle-right rotate-icon"></i>  				
    	</div>
		
    	<div class="col-md-11 CBTXT05" style="" id="CLR1">
    -	
    	</div>
    	</div>
		  <div class="row CrdDescUIReasRw">
		
    	<div class="col-md-1 CBTXT04" style="">
    		<i class="fa fa-angle-right rotate-icon"></i>  				
    	</div>
		
    	<div class="col-md-11 CBTXT05" style=""  id="CLR2">
    	-
  </div>
</div>
		  <div class="row CrdDescUIReasRw">
		
    <div class="col-md-1 CBTXT04" style="">
    		<i class="fa fa-angle-right rotate-icon"></i>  				
    	</div>
		
    	<div class="col-md-11 CBTXT05" style=""  id="CLR3">
    	-
    		
    	</div>
    	</div>
    	</div>
    </div>

 </div>

<!-- Credit Analytics End -->
		
    </br>
    <!-- <div class="form-row">
        	<div class="col Btxt10">CREDIT DECISION</div>
        </div> -->
     <div class="form-row">
        	<div class="col-md-12">
        	<div class="form-row">
        	<div class="col-md-2 CrdDescUI">
        	</div>
        	<div class="col-md-10">
        	</div>
        	</div>
        </div>
         </div>
      	</br>
           <div class="form-row">
                 <div class="col d-flex justify-content-center">
      	             <button type="button"  data-aria="LSW_TINCELIGIBIL|ICEG|ICEG_UNIQUID" data-form="ELIGBL"  class="btn btn-Syel waves-effect waves-light FormSave2">CAM Generate</button>
                </div>
           </div>
      	    <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save3" data-aria="LSW_TINCELIGIBIL|ICEG|ICEG_UNIQUID" data-form="ELIGBL"  class="btn btn-Syeloutline waves-effect waves-light FormSave2">Save</button>   
                     <button type="button" data-aria="LSW_TINCELIGIBIL|ICEG|ICEG_UNIQUID" data-form="ELIGBL"  data-card="2" class="btn btn-Syel waves-effect waves-light FormSave2">Save & Next</button> 
                </div>
            </div>
			
      	</form>
      </div>   
    </div>
  </div><!--GENCAM-->
       <div class=" card CardNS" >
        </br>
  	      <div class="form-row GenApprNote">
              <span class="HyperControls FltRight">
		         <a onclick="GentrateCAM();" class="Btxt4 FltRight" href="#">CAM.pdf</a>
		      </span>
          </div>
      	</div>
   </div>
  <!-- Accordion card -->
</div>
<!-- Accordion wrapper -->
<!-- END -->
 </div>
 <script type="text/javascript" src="ThemeproLO/Financials/Script/Fincs/Validation.js${DMY13}"></script> 
 <script type="text/javascript" src="ThemeproLO/Financials/Script/Fincs/LoadSubmit.js${DMY13}"></script>
 
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
  
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>       
 
<table style="display:none" id="GridTable2">
   <thead>
<th>FRCC_DOCUMENTS</th>
<th>FRCC_CHCKINGPARAM</th>
<th>FRCC_ACTION</th>
<th>FRCC_UNIQUID</th>
<th>FRCC_CODE</th>
<!-- 
<th>FRCC_PRCSID</th>
<th>FRCC_ACTIVITYID</th>
<th>FRCC_DTCREATED</th>
<th>FRCC_CREATEDBY</th>
<th>FRCC_DTMODIFIED</th>
<th>FRCC_MODIFIEDBY</th>  -->
   </thead> 
    </table> 
    
    <table style="display:none" id="GridTable3">
   <thead>
<th>RXLD_APPLNAME</th>
<th>RXLD_INSTINAME</th>
<th>RXLD_LONTYPE</th>
<th>RXLD_EMI</th>
<th>RXLD_MOB</th>
<th>RXLD_MULTIPLIER</th>
<th>RXLD_CLOSERTYPE</th>
<th>RXLD_OTHERS</th>
<th>RXLD_POS</th>
<th>RXLD_BDA</th>
<th>RXLD_CUSID</th>
<th>RXLD_UNIQUID</th>
<th>RXLD_EXLONNO</th>
<!-- 
<th>RXLD_UNIQUID</th>
<th>RXLD_PRCSID</th>
<th>RXLD_ACTIVITYID</th>
<th>RXLD_CREATEDBY</th>
<th>RXLD_DTCREATED</th>
<th>RXLD_MODIFIEDBY</th>
<th>RXLD_DTMODIFIED</th>  -->
   </thead> 
    </table> 
 
 <table style="display:none" id="GridTableRR">
   <thead>
<th>FRRE_SNO</th>
<th>FRRE_NOCTENANTS</th>
<th>FRRE_PROPADDR</th>
<th>FRRE_OWNER</th>
<th>FRRE_RRAVALIB</th>
<th>FRRE_CONSRI</th>
<th>FRRE_MONTHRENT</th>
<th>FRRE_ITR</th>
<th>FRRE_REMAINYER</th>
<th>FRRE_VEIRFYBY</th>
<th>FRRE_VEIRFYPERS</th>
<th>ACTION</th>
<th>FRRE_SCHEME</th>

<!-- 
<th>FRRE_PRCSID</th>
<th>FRRE_ACTIVITYID</th>
<th>FRRE_CREATEDBY</th>
<th>FRRE_DTMODIFIED</th>
<th>FRRE_MODIFIEDBY</th>
<th>FRRE_DTMODIFIED</th>
 -->
   </thead> 
    </table>   
    
        <table style="display:none" id="GridTable4">
   <thead>
<th>RTEG_SOURCELON</th>
<th>RTEG_LONTYPE</th>
<th>RTEG_AVAILEDBY</th>
<th>RTEG_EMI</th>
<th>RTEG_VINTAGE</th>
<th>RTEG_BOUNCES</th>
<th>RTEG_MULTIPLIER</th>
<th>RTEG_AMOUNT</th>
<th>RTEG_UNIQUEID</th>
<th>RTEG_RTREXSTLN</th>
<!-- 
<th>RTEG_PRCSID</th>
<th>RTEG_ACTIVITYID</th>
<th>RTEG_DTCREATED</th>
<th>RTEG_CREATEDBY</th>
<th>RTEG_DTMODIFIED</th>
<th>RTEG_MODIFIEDBY</th>
 -->
   </thead> 
    </table>  
   
<table style="display:none" id="GridTable5">
   <thead>
<th>FRTN_VINTAGE</th>
<th>FRTN_CHQRTNS</th>
<th>FRTN_MULTIPL</th>
<th>FRTN_SCHEME</th>
<!-- 
<th>FRTN_PRCSID</th>
<th>FRTN_ACTIVITYID</th>
<th>FRTN_DTCREATED</th>
<th>FRTN_CREATEDBY</th>
<th>FRTN_DTMODIFIED</th>
<th>FRTN_MODIFIEDBY</th>
 -->
   </thead> 
    </table> 
    
    
<table style="display:none" id="GridTable6">
<thead>
<th>FIEG_APPLNAME</th>
<th>FIEG_MONTHINC</th>
<th>FIEG_OTHSRC</th>
<th>FIEG_OBLIGATION</th>
<th>FIEG_FOIR</th>
<th>FIEG_LONELGBLE</th>
<th>FIEG_CUSID</th>
<th>FIEG_SCHEME</th>
<!-- 
<th>FIEG_PRCSID</th>
<th>FIEG_ACTIVITYID</th>
<th>FIEG_DTCREATED</th>
<th>FIEG_CREATEDBY</th>
<th>FIEG_DTMODIFIED</th>
<th>FIEG_MODIFIEDBY</th>
 -->
   </thead> 
    </table>    
 
    <table style="display:none" id="GridINCMTable">
   <thead>
<th>FPFI_FINYEAR</th>
<th>FPFI_PERC</th>
<th>FPFI_YEAR1</th>
<th>FPFI_YEAR2</th>
<th>FPFI_YEAR3</th>
<th>FPFI_AVERAGE</th>
<th>FPFI_CUSID</th>
<th>FPFI_SCHEME</th>
<!--<th>FPFI_PRCSID</th>
<th>FPFI_ACTIVITYID</th>
<th>FPFI_CREATEDBY</th>
<th>FPFI_DTCREATED</th>
<th>FPFI_MODIFIEDBY</th>
<th>FPFI_DTMODIFIED</th>-->
   </thead> 
    </table>    
	
	<table style="display:none" id="GridMGSTTable">
   <thead>
<th>MGST_MONTH</th>
<th>MGST_GSTVAL</th>
<th>MGST_CUSID</th>
<th>ROWNUM</th>
<th>MGST_SCHEMEID</th>

   </thead> 
    </table>
 
     <table style="display:none" id="GridOTHINCMTable">
   <thead>
<th>FPOI_FINYEAR</th>
<th>FPOI_PERC</th>
<th>FPOI_YEAR1</th>
<th>FPOI_YEAR2</th>
<th>FPOI_YEAR3</th>
<th>FPOI_AVERAGE</th>
<th>FPOI_CUSID</th>
<th>FPOI_SCHEME</th>
<th>ACTION</th>
<!--<th>FPOI_PRCSID</th>
<th>FPOI_ACTIVITYID</th>
<th>FPOI_CREATEDBY</th>
<th>FPOI_DTCREATED</th>
<th>FPOI_MODIFIEDBY</th>
<th>FPOI_DTMODIFIED</th>-->
   </thead> 
    </table>    
	
	<table style="display:none" id="GridSEPCALCPROFTable">
   <thead>
<th>SEPP_FINYEAR</th>
<th>SEPP_PERC</th>
<th>SEPP_YEAR1</th>
<th>SEPP_YEAR2</th>
<th>SEPP_YEAR3</th>
<th>SEPP_AVERAGE</th>
<th>SEPP_CUSID</th>
<th>SEPP_SCHEME</th>
<!--<th>SEPP_PRCSID</th>
<th>SEPP_ACTIVITYID</th>
<th>SEPP_CREATEDBY</th>
<th>SEPP_DTCREATED</th>
<th>SEPP_MODIFIEDBY</th>
<th>SEPP_DTMODIFIED</th>-->
   </thead> 
    </table> 
<table style="display:none" id="GridSEPCALCGRPMPTable">
   <thead>
<th>SEPG_FINYEAR</th>
<th>SEPG_PERC</th>
<th>SEPG_YEAR1</th>
<th>SEPG_YEAR2</th>
<th>SEPG_YEAR3</th>
<th>SEPG_AVERAGE</th>
<th>SEPG_CUSID</th>
<th>SEPG_SCHEME</th>
<!--<th>SEPG_PRCSID</th>
<th>SEPG_ACTIVITYID</th>
<th>SEPG_CREATEDBY</th>
<th>SEPG_DTCREATED</th>
<th>SEPG_MODIFIEDBY</th>
<th>SEPG_DTMODIFIED</th>-->
   </thead> 
    </table>
<table style="display:none" id="GridIAPFRMTable">
   <thead>
<th>FRMI_FIRMLOC</th>
<th>FRMI_CUSINCM</th>
<th>FRMI_CUSID</th>
<th>FRMI_SCHEME</th>
<th>ACTION</th>
<!--<th>SEPG_PRCSID</th>
<th>SEPG_ACTIVITYID</th>
<th>SEPG_CREATEDBY</th>
<th>SEPG_DTCREATED</th>
<th>SEPG_MODIFIEDBY</th>
<th>SEPG_DTMODIFIED</th>-->
   </thead> 
    </table> 	
	<table style="display:none" id="GridIAPFRMTables1">
   <thead>
<th>FRII_FIRMLOC</th>
<th>FRII_CUSINCM</th>
<th>FRII_CUSID</th>
<th>FRII_SCHEME</th>
<th>ACTION</th>
<!--<th>SEPG_PRCSID</th>
<th>SEPG_ACTIVITYID</th>
<th>SEPG_CREATEDBY</th>
<th>SEPG_DTCREATED</th>
<th>SEPG_MODIFIEDBY</th>
<th>SEPG_DTMODIFIED</th>-->
   </thead> 
    </table> 


<table style="display:none" id="GridIAPFRMTablez">
   <thead>
<th>FRMI_FIRMLOC</th>
<th>FRMI_CUSINCM</th>
<th>FRMI_CUSID</th>
<th>FRMI_SCHEME</th>
<th>ACTION</th>
<!--<th>SEPG_PRCSID</th>
<th>SEPG_ACTIVITYID</th>
<th>SEPG_CREATEDBY</th>
<th>SEPG_DTCREATED</th>
<th>SEPG_MODIFIEDBY</th>
<th>SEPG_DTMODIFIED</th>-->
   </thead> 
    </table> 	
	<table style="display:none" id="GridIAPFRMTablesx">
   <thead>
<th>FRII_FIRMLOC</th>
<th>FRII_CUSINCM</th>
<th>FRII_CUSID</th>
<th>FRII_SCHEME</th>
<th>ACTION</th>
<!--<th>SEPG_PRCSID</th>
<th>SEPG_ACTIVITYID</th>
<th>SEPG_CREATEDBY</th>
<th>SEPG_DTCREATED</th>
<th>SEPG_MODIFIEDBY</th>
<th>SEPG_DTMODIFIED</th>-->
   </thead> 
    </table> 	
<table style="display:none" id="GridASSETCTable">
   <thead>
<th>EGAC_ASSETCLASFI</th>
<th>EGAC_YRPURCHASED</th>
<th>EGAC_PURCHASEVAL</th>
<th>EGAC_SCHEMEID</th>
<th>EGAC_CUSID</th>
<th>ACTION</th>
<!--<th>FPOI_PRCSID</th>
<th>FPOI_ACTIVITYID</th>
<th>FPOI_CREATEDBY</th>
<th>FPOI_DTCREATED</th>
<th>FPOI_MODIFIEDBY</th>
<th>FPOI_DTMODIFIED</th>-->
   </thead> 
    </table> 	
           
 <a type="button" id="Popup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#CUSSELECTIONModal">
<i class="fa fa-plus"></i>
</a>
<!-- Modal -->
<div class="modal fade" id="CUSSELECTIONModal" tabindex="-1" role="dialog" aria-labelledby="CUSSELECTIONModalLabel"
   aria-hidden="true">
   <div class="modal-dialog" style="max-width:550px" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <div class="Btxt10">SELECT DETAILS</div>
            <a href="#">  <img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
         </div>
         <div class="modal-body">
            <div class="">
               <!-- Card body -->
               <div class="">
                  <form >
                     </br>
                     </br>
                     <div class="form-row">
                        <input type="text" id="NextPageID" hidden="hidden" name="NextPageID" class="form-control">      
                        <div class="col">
                           <!--  <div class="md-form">
                              <div class="select-radio COAPMndtry"> 
                                   <div class="custom-control custom-radio custom-control-inline">
                                       <input type="radio" class="custom-control-input" value="Individual" onclick="CheckCusType();" id="CoAppIndi" name="CoAppType">
                                       <label class="custom-control-label" for="CoAppIndi">Individual</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" class="custom-control-input" value="Non-Individual"  onclick="CheckCusType();" id="CoAppNonIndi" name="CoAppType">
                                        <label class="custom-control-label" for="CoAppNonIndi">Non-Individual</label>
                                    </div>
                                </div>
                                 <label class="mdb-main-label BTxt9 CLABEL">Co-Applicant Type<span class="MndtryAstr">*</span></label>      
                              </div> -->
                           <div class="md-form">
                              <select class="mdb-select md-form colorful-select dropdown-primary  COAPMndtry" id="SCHEME" name="SCHEME">
                                 <!--<option value="">Select</option>
                                 <option value="S00001">Standard Prime</option>
                                 <option value="S00002">RTR</option>
                                 <option value="S00003">LOW LTV</option>
                                 <option value="S00004">Rental Income Program</option>
                                 <option value="S00005">LIP</option>
                                 <option value="S00006">Chola Margin</option>
                                 <option value="S00007">Banking Surrogate</option>
								 <option value="S00008">PAT Multiplier</option>-->
                              </select>
                              <label class="mdb-main-label BTxt9">Scheme <span class="MndtryAstr">*</span></label>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div class="modal-footer align-middle">
            <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
            <button type="button" id="SchemeAdd" class="btn btn-yel Btxt2">Done</button>
         </div>
      </div>
   </div>
   <script></script>
</div>


<a type="button" id="DeletePopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#DELCUSSELECTIONModal">
<i class="fa fa-plus"></i>
</a>
<!-- Modal -->
<div class="modal fade" id="DELCUSSELECTIONModal" tabindex="-1" role="dialog" aria-labelledby="DELCUSSELECTIONModalLabel"
   aria-hidden="true">
   <div class="modal-dialog" style="max-width:550px" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <div class="Btxt10">DELETE SCHEME DETAILS</div>
            <a href="#">  <img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
         </div>
         <div class="modal-body">
            <div class="">
               <!-- Card body -->
               <div class="">
                  <form >
                        <div class="md-form">
                             <select class="mdb-select md-form colorful-select dropdown-primary" multiple id="SCHEMEDEL" name="SCHEMEDEL">
                                 <option value="">Select</option>
  
                              </select>
                              <label class="mdb-main-label BTxt9">Scheme <span class="MndtryAstr"></span></label>
                           </div>
                  </form>
               </div>
            </div>
         </div>
         <div class="modal-footer align-middle">
            <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
            <button type="button" id="DELET" class="DELDONE  btn btn-yel Btxt2">Done</button>
         </div>
      </div>
   </div>
</div>


   <a type="button" id="FIOFFICEUPDATE" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#FIOFFICEUPDATEModal">
      <i class="fa fa-plus"></i>
  </a>
<div class="modal fade" id="FIOFFICEUPDATEModal" tabindex="-1" role="dialog" aria-labelledby="FIOFFICEUPDATEModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1300px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">Re-payment Schedule</div> 
   <a href="#">  <img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
      </div>  
      <div class="modal-body"> 
   <div class="">
    <!-- Card body -->
     <div class="">  
         <form>
            
          <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LOAN_SGETEMISCHEDULE_LOS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#RCCM_LOANUNIQID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1','REPAYGRD');" id="BTNRCUGRD" name="BTNRCUGRD" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
             </table>
          </div>
        </div> 
  
            
         </form>
        </div>
     </div>
      </div>   
      </div>
    </div>
  </div>



                                  <!--   </div>
                                </div>   -->      
                                <style>
                                .form-row>.col, .form-row>[class*=col-] {
                                   padding-right: 5px;
                                    }
                                </style>
                                                     