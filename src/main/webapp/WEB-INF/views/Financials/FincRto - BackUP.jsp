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
		  <ul title="Ratio" data-popup="No" class="nav FormPageMultiTab">     
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
     
  
      <div class="HiddenBTN">
         <input type="button" style="display:none" class="DashTrg"  id="BTNPROFITLOSE" name="BTNPROFITLOSE" /><!-- Employment Details -->
      </div>
       <div class="HiddenBTN">
         <input type="button" style="display:none" class="DashTrg"  id="BTNBALANCESHEET" name="BTNBALANCESHEET" /><!-- Employment Details -->
      </div>
 <div class="card CardNS">
    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0">
        <form >
         <input type="text" id="RACD_PRCSID" hidden="hidden" name="RACD_PRCSID" class="form-control RACDDBfields">
          <input type="text" id="RACD_ACTIVITYID" hidden="hidden" name="RACD_ACTIVITYID" class="form-control RACDDBfields">
           <input type="text" id="RACD_DTCREATED" hidden="hidden" name="RACD_DTCREATED" class="form-control RACDDBfields"> 
           <input type="text" id="RACD_CREATEDBY" hidden="hidden" name="RACD_CREATEDBY" class="form-control RACDDBfields">
            <input type="text" id="RACD_DTMODIFIED" hidden="hidden" name="RACD_DTMODIFIED" class="form-control RACDDBfields">
             <input type="text" id="RACD_MODIFIEDBY" hidden="hidden" name="RACD_MODIFIEDBY" class="form-control RACDDBfields">
        	<!-- LSW_TRATIOCOMPDETAILS -->
        	
        	  <input type="text" id="RACD_CUSNAME" hidden="hidden" name="RACD_CUSNAME"   class="form-control RACDDBfields">
			  <input type="text" id="RACD_COMPANY" hidden="hidden" name="RACD_COMPANY"   class="form-control RACDDBfields">
        	  <!--<input type="text" id="RACD_COMPANY" hidden="hidden" name="RACD_COMPANY"   class="form-control RACDDBfields">-->
              <input type="text" id="RACD_UNIQID" hidden="hidden" name="RACD_UNIQID" class="form-control RACDDBfields">
              <input type="text" id="RACD_REFNAME" hidden="hidden" name="RACD_REFNAME" class="form-control RACDDBfields">
       
              <input type="text" id="RACD_PROFITLOSSGRID" hidden="hidden" name="RACD_PROFITLOSSGRID" class="form-control RACDDBfields">
               <input type="text" id="RACD_BALSHEETGRID" hidden="hidden" name="RACD_BALSHEETGRID" class="form-control RACDDBfields">
                <input type="text" id="RACD_FINCSUMMGRID" hidden="hidden" name="RACD_FINCSUMMGRID" class="form-control RACDDBfields">
               
                <input type="text" id="RACD_PROBIRADIOGRID" hidden="hidden" name="RACD_PROBIRADIOGRID" class="form-control RACDDBfields">
        	     <input type="text" id="RACD_COVERRADIOGRID" hidden="hidden" name="RACD_COVERRADIOGRID" class="form-control RACDDBfields">
        	     <input type="text" id="RACD_ACTIVIRADIOGRID" hidden="hidden" name="RACD_ACTIVIRADIOGRID" class="form-control RACDDBfields">
                 <input type="text" id="RACD_SHORTTERMGRID" hidden="hidden" name="RACD_SHORTTERMGRID" class="form-control RACDDBfields">
        	     <input type="text" id="RACD_OTHERRADIOGRID" hidden="hidden" name="RACD_OTHERRADIOGRID" class="form-control RACDDBfields">
				  <input type="text" id="RACD_CASHFLOWGRID" hidden="hidden" name="RACD_CASHFLOWGRID" class="form-control RACDDBfields">
        	    
				<input type="text" id="RACD_CONSRATIOID" hidden="hidden" name="RACD_CONSRATIOID" class="form-control RACDDBfields">
        	     <input type="text" id="RACD_CONSRATIONAME" hidden="hidden" name="RACD_CONSRATIONAME" class="form-control RACDDBfields">
				 
				 <input type="text" id="RACD_CONSLSTS" hidden="hidden" name="RACD_CONSLSTS" class="form-control RACDDBfields">
        	
				<input type="text" id="CheckAnyChngInData" hidden="hidden" name="CheckAnyChngInData" value="0" class="form-control ">
        	
        	</br>
        	<!-- profitlose(); -->
        	<div class="form-row" id="FirmHndlr" style="display:none">
        		 <div class="col">
                  <div class="md-form">
                    <div class="select-radio"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input RACDDBfields" value="Add Firm" onclick="" id="AddFirm" name="RACD_TYP">
                          <label class="custom-control-label" for="AddFirm">Add Firm</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input RACDDBfields" value="Consolidated"  onclick="" id="Consolidated" name="RACD_TYP">
                           <label class="custom-control-label" for="Consolidated">Consolidated</label>
                       </div>
                     </div>
                 </div>
               </div>
        	</div>
            <div class="form-row">
            <div class="col-md-4 AddFirm">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary DataToFld1  RACDDBfields" data-change="RACD_CUSNAME" onchange="GetEmploymentName('Change');"  id="RACD_CUSID" name="RACD_CUSID">
				 <option value="" >--Select--</option>
				</select>
				<label class="mdb-main-label BTxt9">Customer Name<span class="MndtryAstr"></span></label>
                  </div>
               </div>
                <div class="col-md-4 AddFirm">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary DataToFld1  RACDDBfields"   data-change="RACD_COMPANY" id="RACD_CMPNYID" name="RACD_CMPNYID">
				 <option value="" >--Select--</option>
				</select>
				<label class="mdb-main-label BTxt9">Firm Name<span class="MndtryAstr"></span></label>
                  </div>
               </div>

                <!-- <div class="col-md-8">
                   <div class="md-form">
                     <input type="text" id="RACD_COMPANY"  name="RACD_COMPANY" class="form-control DSVLBL  Btxt8 RACDDBfields ">
                    </div>
                </div> -->
               <div class="col-md-4">
                  <div class="md-form">
                    <div class="select-radio AddFirm"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input RACDDBfields" value="Ratio Sheet" onclick="profitlose('Change');" id="Ratio" name="RACD_PROFIT">
                          <label class="custom-control-label" for="Ratio">Ratio Sheet</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input RACDDBfields" value="Financial Summary"  onclick="profitlose('Change');" id="Financial" name="RACD_PROFIT">
                           <label class="custom-control-label" for="Financial">Financial Summary</label>
                       </div>
                     </div>
                      <label class="mdb-main-label BTxt9"><span class="MndtryAstr"></span></label>      
                 </div>
               </div>
           </div>
           <div class="RS" > 
           <div class="form-row">
                <div class="col-md-4">
                  <div class="md-form DocumentUploadType AddFirm">
                    <div class="select-radio"> 
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input RACDDBfields" onclick="CheckDocType();" value="Auto" id="Auto" name="RACD_DOCUMTYPE">
                          <label class="custom-control-label" for="Auto">Auto</label>
                       </div>
                       <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input RACDDBfields" onclick="CheckDocType();" value="Manual" id="Manual" name="RACD_DOCUMTYPE">
                           <label class="custom-control-label" for="Manual">Manual</label>
                       </div>
                     </div>
                      <label class="mdb-main-label BTxt9">Document Upload Type<span class="MndtryAstr"></span></label>      
                 </div>
               </div>
               <div class="col-md-8 UPDOC AddFirm">
                  <div class="md-form">
                  <div class="" ></div>
                     <div class="col-md-8  Formcol-mdLR">
                       <div class="md-form">
                         <table>
                            <tr>
                             <td>
                                <div id="RACD_DOCUPLOADUPLOAD"  class="file-field">
                                    <a class="">
                                      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                          <input type="file"  name="datafile" onchange="DocFldUpldHndlr(RACD_DOCUPLOAD,'RACD_DOCUPLOAD','RATIODOCU')" class="RACD_DOCUPLOAD"  >
                                      </a>
                                         <input type="text" id="RACD_DOCUPLOAD" hidden="hidden" data-Validate="RACD_DOCUPLOAD"  name="RACD_DOCUPLOAD" class="form-control File RACDDBfields">
                                         <span class="name">Click Here to Upload</span>
                                   </div> 
                               </td> 
                             </tr>
                         </table>
                       </div>    
                    </div>  
                    <div class="col-md-4 ">
                       <div class="md-form Formcol-mdLR TxtCenter">
                           <div class="md-form">
                             <div class="RACD_DOCUPLOAD" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile(RACD_DOCUPLOAD);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('RACD_DOCUPLOAD')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
                        </div>
                         </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="md-form">
                  </div>
               </div>
           </div>
           </div>
		   
		               <div class="form-row DLTICON">
                          <div class="col ">
                            <div class="FltRight DELBTNTXT">
                              Delete Ratio Details
                                <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="RACD_PRCSID|RACD_UNIQID" class="DELBTN DELETERATIO"/>
                              </div>    
                           </div>     
              </div> 
			  
			  
            <div class="form-row Consolidated">
            <div class="col-md-4 ">
            <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary   RACDDBfields" multiple onchange="getRatioVal();"   data-change="" onfocusout="" id="RACD_Ratio" name="RACD_Ratio">
				 <option value="" disabled>--Select--</option>
				</select>
				 
				<label class="mdb-main-label BTxt9">Ratio<span class="MndtryAstr"></span></label>
                  </div>
				  <input type="text" id="RACD_RatioHidden" hidden="hidden" name="RACD_RatioHidden" class="form-control RACDDBfields">
            </div>
			<div class="col-md-4 ">
			<div class="md-form">
			<button type="button" onclick="ConslBtnOnClick();" style="" class="btn waves-effect btn-yelInplain btn-sm BTNVerify">Consolidate</button>
			</div>
			</div>
            </div>
        </form>
      </div>
    </div> 
    </br>
    <div class="RS" >
    <div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
  <!-- Accordion card -->
  <div class="PROFITLOSS"  >
 <div class="card" >
    <!-- Card header -->
    <div class="card-header Btxt8" role="tab" id="headingOne1">
      
   <!--    <a data-toggle="collapse" data-aria="||"  data-multidata="BTNPROFITLOSE" data-load="" class="Btxt8 AFormaccordion" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="false"
        aria-controls="collapseOne1">       
         Profit and Loss A/C<i class="fa fa-minus-circle rotate-icon"></i>
      </a> --> 
     <a class="collapsed Btxt7 AFormaccordion" data-aria="" data-load="" data-multidata="BTNPROFITLOSE" data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1"
        aria-expanded="false" aria-controls="collapseOne1">
          Profit and Loss A/C<i class="fa fa-plus-circle rotate-icon"></i>
      </a> 
  
      
    </div>
    <!-- Card body -->
    <div id="collapseOne1" class="collapse" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
       <div class="card-body px-lg-5 pt-0 BSbrd DYNROW"> 
         </br>
        <form>
  <!--     <input type="text" id="RPOL_PRCSID"  name="RPOL_PRCSID" hidden="hidden" class="form-control RPOLDBfields" value="" >
        <input type="text" id="RPOL_ACTIVITYID"  name="RPOL_ACTIVITYID" hidden="hidden"  class="form-control RPOLDBfields" value="">
        <input type="text" id="RPOL_CREATEDBY"  name="RPOL_CREATEDBY" hidden="hidden"  class="form-control RPOLDBfields" value="">
        <input type="text" id="RPOL_DTCREATED"  name="RPOL_DTCREATED" hidden="hidden"  class="form-control RPOLDBfields" value="">
        <input type="text" id="RPOL_MODIFIEDBY"  name="RPOL_MODIFIEDBY" hidden="hidden"  class="form-control RPOLDBfields" value="">
        <input type="text" id="RPOL_DTMODIFIED"  name="RPOL_DTMODIFIED" hidden="hidden"  class="form-control RPOLDBfields" value="">
        <input type="text" id="RPOL_CUSID"  name="RPOL_CUSID" hidden="hidden"  class="form-control RPOLDBfields" value="">
        <input type="text" id="RPOL_UNIQID"  name="RPOL_UNIQID" hidden="hidden"  class="form-control RPOLDBfields" value="">
         <!-- LSW_TRATIOPROFITLOSS 
         <input type="text" id="RPOL_PROFLOSSDET"  name="RPOL_PROFLOSSDET" hidden="hidden"  class="form-control RPOLDBfields" value="">
         <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>-->
           
           
             <div class="form-row">
                     <div class="col-md-2"> 
                  <div class="md-form">
                    <select class="md-form colorful-select dropdown-primary RAIOYEAR RACDDBfields" onchange="GrdLoadOnYrChng()" id="RACD_FINYEAR" name="RACD_FINYEAR">
  					<option value="">Select</option>
					<option  value="2020-2021" >2020-2021</option>
  					<option  value="2019-2020" selected>2019-2020</option>
					<option  value="2018-2019">2018-2019</option>
				</select>
				<label class="mdb-main-label BTxt9">LATEST YEAR<span class="MndtryAstr"></span></label>
                  </div>
             </div>
            </div>
          <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SGETROPROFLOSS1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'PL|'+$('#RACD_CUSID').val()+'|'+$('#RACD_UNIQID').val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','RATIOPROFITLOSS');" id="BTNPROFITLOSS" name="BTNPROFITLOSS" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid " id="Table3">
             </table>
           </div>
          </div> 
     
       	    <div class="form-row">
             <div class="col d-flex justify-content-center">
                     <button type="button" id="Save2" data-aria="LSW_TRATIOCOMPDETAILS|RACD|RACD_UNIQID" data-form="ExistingLoan" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>
                         
                     <button type="button" data-aria="LSW_TRATIOCOMPDETAILS|RACD|RACD_UNIQID" next-form="|" data-form="ExistingLoan" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
                     
             </div>
            </div>
        </form>
       </div>
   </div>
 </div>
 </div>
 <div class="BALSHEET" >
 <div class="card" >
 
    <!-- Card header -->
    <div class="card-header Btxt8" role="tab" id="headingTwo2">
    <!--    <a data-toggle="collapse" data-aria="||"  data-multidata="BTNBALANCESHEET" data-load="||||" class="Btxt7 AFormaccordion collapsed" data-parent="#accordionEx" href="#collapseTwo2" aria-expanded="false"
        aria-controls="collapseTwo2">       
         Balance Sheet<i class="fa fa-minus-circle rotate-icon"></i>
      </a> -->
      
        <a class="collapsed Btxt7 AFormaccordion" data-aria="" data-load="" data-multidata="BTNBALANCESHEET" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
        aria-expanded="false" aria-controls="collapseTwo2">
          Balance Sheet<i class="fa fa-plus-circle rotate-icon"></i>
      </a> 
      
      
    </div>
    <!-- Card body -->
    <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
     <div class="card-body px-lg-5 pt-0 BSbrd DYNROW"> 
       </br>
        <form>
   <!--   <input type="text" id="RBST_PRCSID"  name="RBST_PRCSID" hidden="hidden" class="form-control RBSTDBfields" value="" >
        <input type="text" id="RBST_ACTIVITYID"  name="RBST_ACTIVITYID" hidden="hidden"  class="form-control RBSTDBfields" value="">
        <input type="text" id="RBST_CREATEDBY"  name="RBST_CREATEDBY" hidden="hidden"  class="form-control RBSTDBfields" value="">
        <input type="text" id="RBST_DTCREATED"  name="RBST_DTCREATED" hidden="hidden"  class="form-control RBSTDBfields" value="">
        <input type="text" id="RBST_MODIFIEDBY"  name="RBST_MODIFIEDBY" hidden="hidden"  class="form-control RBSTDBfields" value="">
        <input type="text" id="RBST_DTMODIFIED"  name="RBST_DTMODIFIED" hidden="hidden"  class="form-control RBSTDBfields" value="">
        <input type="text" id="RBST_CUSID"  name="RBST_CUSID" hidden="hidden"  class="form-control RBSTDBfields" value="">
        <input type="text" id="RBST_UNIQID"  name="RBST_UNIQID" hidden="hidden"  class="form-control RBSTDBfields" value="">
         <!-- LSW_TRATIOBALSHEET 
         <input type="text" id="RBST_RATBALSHEETDEL"  name="RBST_RATBALSHEETDEL" hidden="hidden"  class="form-control RBSTDBfields" value="">
         <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>  -->
  
          <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_SGETROBALSHTGRID1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'BS|'+$('#RACD_CUSID').val()+'|'+$('#RACD_UNIQID').val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','RATIOBALSHEET');" id="BTNRATIOBALSHEET" name="BTNRATIOBALSHEET" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid " id="Table4">
             </table>
           </div>
        </div> 
     
       	    <div class="form-row">
                 <div class="col d-flex justify-content-center">
                 <!-- LSW_TRATIOCOMPDETAILS -->
                     <button type="button" id="Save3" data-aria="LSW_TRATIOCOMPDETAILS|RACD|RACD_UNIQID" data-form="ExistingLoan" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" id="CalculatePrft" data-aria="LSW_TRATIOCOMPDETAILS|RACD|RACD_UNIQID" data-form="ExistingLoan" style="display:none;" class="btn btn-Syeloutline waves-effect waves-light FormSave">Calculate</button>
                     <button type="button" data-aria="LSW_TRATIOCOMPDETAILS|RACD|RACD_UNIQID" next-form="|" data-form="ExistingLoan" data-card="1" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                </div>
            </div>
        </form>
       </div> 
   
</div>
 </div>
 </div>
  <!-- Accordion card --> 
 <div class="RADIO">
   <div class="card CardNS">
    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0">
        <form >
     <!--     <input type="text" id="RDET_PRCSID" hidden="hidden" name="RDET_PRCSID" class="form-control RDETDBfields">
          <input type="text" id="RDET_ACTIVITYID" hidden="hidden" name="RDET_ACTIVITYID" class="form-control RDETDBfields">
           <input type="text" id="RDET_CREATEDBY" hidden="hidden" name="RDET_CREATEDBY" class="form-control RDETDBfields"> 
           <input type="text" id="RDET_DTCREATED" hidden="hidden" name="RDET_DTCREATED" class="form-control RDETDBfields">
            <input type="text" id="RDET_MODIFIEDBY" hidden="hidden" name="RDET_MODIFIEDBY" class="form-control RDETDBfields">
             <input type="text" id="RDET_DTMODIFIED" hidden="hidden" name="RDET_DTMODIFIED" class="form-control RDETDBfields">
        	
            <input type="text" id="RDET_PROBILRATION" hidden="hidden" name="RDET_PROBILRATION" class="form-control RDETDBfields">
            <input type="text" id="RDET_COVERRATIO" hidden="hidden" name="RDET_COVERRATIO" class="form-control RDETDBfields">
             <input type="text" id="RDET_ACTIVITYRATIO" hidden="hidden" name="RDET_ACTIVITYRATIO" class="form-control RDETDBfields"> 
             <input type="text" id="RDET_SHORTTERMRATIO" hidden="hidden" name="RDET_SHORTTERMRATIO" class="form-control RDETDBfields">
              <input type="text" id="RDET_OTHERRATIO" hidden="hidden" name="RDET_OTHERRATIO" class="form-control RDETDBfields">
               <input type="text" id="RDET_CUSID" hidden="hidden" name="RDET_CUSID" class="form-control RDETDBfields">
        	    <input type="text" id="RDET_UNIQID" hidden="hidden" name="RDET_UNIQID" class="form-control RDETDBfields">  -->

       <!-- SCHEME -->
    
    
    
    
    
     <div class="form-row">
     <div class=" col-md-4">
      <div class="md-form">
       <input type="text" id="PRORATI" disabled name="PRORATI" value="PROFITABILITY RATIOS" class="form-control Btxt17 DSVLBL   ">
        </div>
         </div>
    
      
          <div class=" col-md-2">
          <div class="md-form">
                 <input type="text" id="STANDAERD" disabled name="STANDAERD" value="Standards" class="form-control Btxt17 DSVLBL   ">
                 </div>
         </div>
         
            <div class=" col-md-2 ">
                 <div class="md-form">
                 <input type="text" id="RACD_RADYEARI" disabled name="RACD_RADYEARI" value="2019-2020" class="form-control   Btxt17 DSVLBL RACDDBfields  ">
                 </div>
             </div> 

               <div class=" col-md-2 ">
                 <div class="md-form">
               <input type="text" id="RACD_RADYEARII" disabled name="RACD_RADYEARII" value="2018-2019" class=" form-control  Btxt17 DSVLBL   RACDDBfields  ">
              </div>
              </div>
              <div class=" col-md-2 ">
          
              </div>
     
      </div>
      
      <div data-for="PROFITRATIO" class="PROFITRATIO"> 
      </div>
      <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="PROFITRATIO" style="display:none">
       <div data-row="" class=" DYNROW">
          <input type="text" id="RAPR_PRCSID" hidden="hidden" name="RAPR_PRCSID" class="form-control RAPRDBfields">
         <input type="text" id="RAPR_ACTIVITYID" hidden="hidden" name="RAPR_ACTIVITYID" class="form-control RAPRDBfields">
         <input type="text" id="RAPR_DTCREATED" hidden="hidden" name="RAPR_DTCREATED" class="form-control RAPRDBfields">
         <input type="text" id="RAPR_CREATEDBY" hidden="hidden" name="RAPR_CREATEDBY" class="form-control RAPRDBfields">
         <input type="text" id="RAPR_DTMODIFIED" hidden="hidden" name="RAPR_DTMODIFIED" class="form-control RAPRDBfields">
         <input type="text" id="RAPR_MODIFIEDBY" hidden="hidden" name="RAPR_MODIFIEDBY" class="form-control RAPRDBfields">
        
         <input type="text" id="RAPR_CUSID"  hidden="hidden" name="RAPR_CUSID" class="form-control RAPRDBfields">
          <input type="text" id="RAPR_UNIQID"  hidden="hidden" name="RAPR_UNIQID" class="form-control RAPRDBfields">
           
            <div class="form-row">
              <div class=" col-md-4 GryShd">
                 <div class="md-form">
                 <input type="text" id="RAPR_CATEGORY" disabled name="RAPR_CATEGORY" class="form-control Btxt17 DSVLBL RAPRDBfields  ">
                 </div>
              </div> 
              <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAPR_STANDARTS" disabled name="RAPR_STANDARTS" class="form-control Btxt17 RAPRDBfields DSVLBL ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAPR_YERSI" name="RAPR_YERSI" class="form-control  IsNumberFields IsCURCommaFields  RAPRDBfields  ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAPR_YERSII" name="RAPR_YERSII" class="form-control  IsNumberFields IsCURCommaFields   RAPRDBfields  ">
              </div>
              </div>
               <div class=" col-md-2">
    
                 <div class="md-form">
               <input type="text" id="RAPR_REMARKS" name="RAPR_REMARKS" class="form-control NoSpecialChar RAPRDBfields  ">
                <label for="RAPR_REMARKS" class="">Remarks<span class="MndtryAstr"></span></label>
              </div>
              </div>
            </div>
          </div>
         </div>
       
        <!-- SCHEME end -->
      
      <!-- Coverage RATIOS -->
     <div class="form-row">
     <div class="Btxt10" >Coverage RATIOS</div>
      </div>
      
      <div data-for="COVERAGERATIO" class="COVERAGERATIO"> 
      </div>
      <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="COVERAGERATIO" style="display:none">
       <div data-row="" class=" DYNROW">
          <input type="text" id="RACO_PRCSID" hidden="hidden" name="RACO_PRCSID" class="form-control RACODBfields">
         <input type="text" id="RACO_ACTIVITYID" hidden="hidden" name="RACO_ACTIVITYID" class="form-control RACODBfields">
         <input type="text" id="RACO_DTCREATED" hidden="hidden" name="RACO_DTCREATED" class="form-control RACODBfields">
         <input type="text" id="RACO_CREATEDBY" hidden="hidden" name="RACO_CREATEDBY" class="form-control RACODBfields">
         <input type="text" id="RACO_DTMODIFIED" hidden="hidden" name="RACO_DTMODIFIED" class="form-control RACODBfields">
         <input type="text" id="RACO_MODIFIEDBY" hidden="hidden" name="RACO_MODIFIEDBY" class="form-control RACODBfields">
        
         <input type="text" id="RACO_CUSID"  hidden="hidden" name="RACO_CUSID" class="form-control RACODBfields">
          <input type="text" id="RACO_UNIQID"  hidden="hidden" name="RACO_UNIQID" class="form-control RACODBfields">
           
            <div class="form-row">
              <div class=" col-md-4 GryShd">
                 <div class="md-form">
                 <input type="text" id="RACO_CATEGORY" disabled name="RACO_CATEGORY" class="form-control Btxt17 DSVLBL RACODBfields  ">
                 </div>
              </div> 
              <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RACO_STANDARTS" disabled name="RACO_STANDARTS" class="form-control Btxt17 RACODBfields DSVLBL ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RACO_YERSI" name="RACO_YERSI" class="form-control IsCURCommaFields   IsNumberFields RACODBfields  ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RACO_YERSII" name="RACO_YERSII" class="form-control IsCURCommaFields  IsNumberFields RACODBfields  ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RACO_REMARKS" name="RACO_REMARKS" class="form-control NoSpecialChar RACODBfields  ">
               <label for="RACO_REMARKS" class="">Remarks<span class="MndtryAstr"></span></label>
              </div>
              </div>
            </div>
          </div>
         </div>
       
        <!-- Coverage RATIOS end --> 
       
       
       <!-- Activity RATIOS -->
     <div class="form-row">
     <div class="Btxt10" >Activity RATIOS</div>
      </div>
      
      <div data-for="ACTIVITYRATIO" class="ACTIVITYRATIO"> 
      </div>
      <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="ACTIVITYRATIO" style="display:none">
       <div data-row="" class=" DYNROW">
          <input type="text" id="RAAC_PRCSID" hidden="hidden" name="RAAC_PRCSID" class="form-control RAACDBfields">
         <input type="text" id="RAAC_ACTIVITYID" hidden="hidden" name="RAAC_ACTIVITYID" class="form-control RAACDBfields">
         <input type="text" id="RAAC_DTCREATED" hidden="hidden" name="RAAC_DTCREATED" class="form-control RAACDBfields">
         <input type="text" id="RAAC_CREATEDBY" hidden="hidden" name="RAAC_CREATEDBY" class="form-control RAACDBfields">
         <input type="text" id="RAAC_DTMODIFIED" hidden="hidden" name="RAAC_DTMODIFIED" class="form-control RAACDBfields">
         <input type="text" id="RAAC_MODIFIEDBY" hidden="hidden" name="RAAC_MODIFIEDBY" class="form-control RAACDBfields">
        
         <input type="text" id="RAAC_CUSID"  hidden="hidden" name="RAAC_CUSID" class="form-control RAACDBfields">
          <input type="text" id="RAAC_UNIQID"  hidden="hidden" name="RAAC_UNIQID" class="form-control RAACDBfields">
           
            <div class="form-row">
              <div class=" col-md-4 GryShd ">
                 <div class="md-form">
                 <input type="text" id="RAAC_CATEGORY" disabled name="RAAC_CATEGORY" class="form-control Btxt17 DSVLBL RAACDBfields  ">
                 </div>
              </div> 
              <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAAC_STANDARTS" disabled name="RAAC_STANDARTS" class="form-control Btxt17 RAACDBfields DSVLBL ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAAC_YERSI" name="RAAC_YERSI" class="form-control  IsCURCommaFields  IsNumberFields RAACDBfields  ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAAC_YERSII" name="RAAC_YERSII" class="form-control IsCURCommaFields   IsNumberFields RAACDBfields  ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAAC_REMARKS" name="RAAC_REMARKS" class="form-control NoSpecialChar  RAACDBfields  ">
               <label for="RAAC_REMARKS" class="">Remarks<span class="MndtryAstr"></span></label>
              </div>
              </div>
            </div>
          </div>
         </div>
       
        <!-- Activity RATIO end -->  
       
    <!--  Short Term Liquidity   -->
          <div class="form-row">
     <div class="Btxt10" >Short Term Liquidity</div>
      </div>
      
      <div data-for="SHORTTERMRATIO" class="SHORTTERMRATIO"> 
      </div>
      <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="SHORTTERMRATIO" style="display:none">
       <div data-row="" class=" DYNROW">
          <input type="text" id="RAST_PRCSID" hidden="hidden" name="RAST_PRCSID" class="form-control RASTDBfields">
         <input type="text" id="RAST_ACTIVITYID" hidden="hidden" name="RAST_ACTIVITYID" class="form-control RASTDBfields">
         <input type="text" id="RAST_DTCREATED" hidden="hidden" name="RAST_DTCREATED" class="form-control RASTDBfields">
         <input type="text" id="RAST_CREATEDBY" hidden="hidden" name="RAST_CREATEDBY" class="form-control RASTDBfields">
         <input type="text" id="RAST_DTMODIFIED" hidden="hidden" name="RAST_DTMODIFIED" class="form-control RASTDBfields">
         <input type="text" id="RAST_MODIFIEDBY" hidden="hidden" name="RAST_MODIFIEDBY" class="form-control RASTDBfields">
        
         <input type="text" id="RAST_CUSID"  hidden="hidden" name="RAST_CUSID" class="form-control RASTDBfields">
          <input type="text" id="RAST_UNIQID"  hidden="hidden" name="RAST_UNIQID" class="form-control RASTDBfields">
           
            <div class="form-row">
              <div class=" col-md-4 GryShd ">
                 <div class="md-form">
                 <input type="text" id="RAST_CATEGORY" disabled name="RAST_CATEGORY" class="form-control Btxt17  DSVLBL RASTDBfields  ">
                 </div>
              </div> 
              <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAST_STANDARTS" disabled name="RAST_STANDARTS" class="form-control Btxt17 RASTDBfields DSVLBL ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAST_YERSI" name="RAST_YERSI" class="form-control  IsCURCommaFields  IsNumberFields RASTDBfields  ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAST_YERSII" name="RAST_YERSII" class="form-control IsCURCommaFields  IsNumberFields  RASTDBfields  ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAST_REMARKS" name="RAST_REMARKS" class="form-control NoSpecialChar RASTDBfields  ">
                <label for="RAST_REMARKS" class="">Remarks<span class="MndtryAstr"></span></label>
              </div>
              </div>
            </div>
          </div>
         </div>
       
        <!-- Short Term Liquidity end -->  
        
        <!--  Short Term Liquidity   -->
          <div class="form-row">
     <div class="Btxt10" >OTHER RATIO</div>
      </div>
      
      <div data-for="OTHERRATIO" class="OTHERRATIO"> 
      </div>
      <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="OTHERRATIO" style="display:none">
       <div data-row="" class=" DYNROW">
          <input type="text" id="RAOT_PRCSID" hidden="hidden" name="RAOT_PRCSID" class="form-control RAOTDBfields">
         <input type="text" id="RAOT_ACTIVITYID" hidden="hidden" name="RAOT_ACTIVITYID" class="form-control RAOTDBfields">
         <input type="text" id="RAOT_DTCREATED" hidden="hidden" name="RAOT_DTCREATED" class="form-control RAOTDBfields">
         <input type="text" id="RAOT_CREATEDBY" hidden="hidden" name="RAOT_CREATEDBY" class="form-control RAOTDBfields">
         <input type="text" id="RAOT_DTMODIFIED" hidden="hidden" name="RAOT_DTMODIFIED" class="form-control RAOTDBfields">
         <input type="text" id="RAOT_MODIFIEDBY" hidden="hidden" name="RAOT_MODIFIEDBY" class="form-control RAOTDBfields">
        
         <input type="text" id="RAOT_CUSID"  hidden="hidden" name="RAOT_CUSID" class="form-control RAOTDBfields">
          <input type="text" id="RAOT_UNIQID"  hidden="hidden" name="RAOT_UNIQID" class="form-control RAOTDBfields">
           
            <div class="form-row">
              <div class=" col-md-4 GryShd">
                 <div class="md-form">
                 <input type="text" id="RAOT_CATEGORY" disabled name="RAOT_CATEGORY" class="form-control Btxt17 DSVLBL RAOTDBfields  ">
                 </div>
              </div> 
              <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAOT_STANDARTS" disabled name="RAOT_STANDARTS" class="form-control Btxt17 RAOTDBfields DSVLBL ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAOT_YERSI" name="RAOT_YERSI" class="form-control IsCURCommaFields  IsNumberFields  RAOTDBfields  ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAOT_YERSII" name="RAOT_YERSII" class="form-control IsCURCommaFields  IsNumberFields  RAOTDBfields  ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RAOT_REMARKS" name="RAOT_REMARKS" class="form-control NoSpecialChar RAOTDBfields  ">
                <label for="RAOT_REMARKS" class="">Remarks<span class="MndtryAstr"></span></label>
              </div>
              </div>
            </div>
          </div>
     </div>
        <!-- Short Term Liquidity end -->  
		<!-- CASH FLOW START -->
        <div class="form-row">
     <div class="Btxt10" >BUSINESS CASH FLOWS</div>
      </div>
      
      <div data-for="CASHFLOW" class="CASHFLOW"> 
      </div>
      <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="CASHFLOW" style="display:none">
       <div data-row="" class=" DYNROW">
          <input type="text" id="RACF_PRCSID" hidden="hidden" name="RACF_PRCSID" class="form-control RACFDBfields">
         <input type="text" id="RACF_ACTIVITYID" hidden="hidden" name="RACF_ACTIVITYID" class="form-control RACFDBfields">
         <input type="text" id="RACF_DTCREATED" hidden="hidden" name="RACF_DTCREATED" class="form-control RACFDBfields">
         <input type="text" id="RACF_CREATEDBY" hidden="hidden" name="RACF_CREATEDBY" class="form-control RACFDBfields">
         <input type="text" id="RACF_DTMODIFIED" hidden="hidden" name="RACF_DTMODIFIED" class="form-control RACFDBfields">
         <input type="text" id="RACF_MODIFIEDBY" hidden="hidden" name="RACF_MODIFIEDBY" class="form-control RACFDBfields">
        
         <input type="text" id="RACF_CUSID"  hidden="hidden" name="RACF_CUSID" class="form-control RACFDBfields">
          <input type="text" id="RACF_UNIQID"  hidden="hidden" name="RACF_UNIQID" class="form-control RACFDBfields">
           
            <div class="form-row">
              <div class=" col-md-4 GryShd">
                 <div class="md-form">
                 <input type="text" id="RACF_CATEGORY" disabled name="RACF_CATEGORY" class="form-control Btxt17 DSVLBL RACFDBfields  ">
                 </div>
              </div> 
              <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RACF_STANDARTS" disabled name="RACF_STANDARTS" class="form-control Btxt17 RACFDBfields DSVLBL ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RACF_YERSI" name="RACF_YERSI" class="form-control IsCURCommaFields  IsNumberFields  RACFDBfields  ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RACF_YERSII" name="RACF_YERSII" class="form-control IsCURCommaFields  IsNumberFields  RACFDBfields  ">
              </div>
              </div>
               <div class=" col-md-2">
                 <div class="md-form">
               <input type="text" id="RACF_REMARKS" name="RACF_REMARKS" class="form-control NoSpecialChar  RACFDBfields  ">
                <label for="RACF_REMARKS" class="">Remarks<span class="MndtryAstr"></span></label>
              </div>
              </div>
            </div>
          </div>
     </div>
        <!-- CASH FLOW END -->
     <div class="form-row OTHUPLOD" style="display:none">
  <div class="col-md-12">
                  <div class="md-form">
                  <div class="" >Upload Excel</div>
                     <div class="col-md-8  Formcol-mdLR">
                       <div class="md-form">
                         <table>
                            <tr>
                             <td>
                                <div id="RACD_OTHERUPLOADUPLOAD"  class="file-field">
                                    <a class="">
                                      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
                                          <input type="file"  name="datafile" onchange="DocFldUpldHndlr(RACD_OTHERUPLOAD,'RACD_OTHERUPLOAD','RACD_OTHERUPLOAD')" class="RACD_DOCUPLOAD"  >
                                      </a>
                                         <input type="text" id="RACD_OTHERUPLOAD" hidden="hidden" data-Validate="RACD_OTHERUPLOAD"  name="RACD_OTHERUPLOAD" class="form-control File RACDDBfields">
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
                             <div class="RACD_OTHERUPLOAD" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile(RACD_OTHERUPLOAD);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('RACD_OTHERUPLOAD')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
                        </div>
                         </div>
                     </div>
                  </div>
               </div>
      </div>
	  <div class="card">
         </br>
  	      <div class="form-row">
              <span class="HyperControls FltRight">
		         <a onclick="GenRatioSheet();" class="Btxt4 FltRight" href="#">Ratio Sheet.pdf</a>
		      </span>
          </div>
      	</div>
	      <div class="form-row">
             <div class="col d-flex justify-content-center">
                     <button type="button" id="Save1" data-aria="LSW_TRATIOCOMPDETAILS|RACD|RACD_UNIQID" data-form="ExistingLoan" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>
                         
                     <button type="button" data-aria="LSW_TRATIOCOMPDETAILS|RACD|RACD_UNIQID" next-form="TAB|" data-form="ExistingLoan" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
                     
             </div>
            </div> 
	  
	  
  </form>
  </div>
  </div>
 </div>
 
  
 
 
 
 
 
  
 <div class="FINSUMM">
  <div class="card CardNS">
    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0">
       <form>
        <!--  <input type="text" id="RFIS_PRCSID"  name="RFIS_PRCSID" hidden="hidden" class="form-control RFISDBfields" value="" >
        <input type="text" id="RFIS_ACTIVITYID"  name="RFIS_ACTIVITYID" hidden="hidden"  class="form-control RFISDBfields" value="">
        <input type="text" id="RFIS_CREATEDBY"  name="RFIS_CREATEDBY" hidden="hidden"  class="form-control RFISDBfields" value="">
        <input type="text" id="RFIS_DTCREATED"  name="RFIS_DTCREATED" hidden="hidden"  class="form-control RFISDBfields" value="">
        <input type="text" id="RFIS_MODIFIEDBY"  name="RFIS_MODIFIEDBY" hidden="hidden"  class="form-control RFISDBfields" value="">
        <input type="text" id="RFIS_DTMODIFIED"  name="RFIS_DTMODIFIED" hidden="hidden"  class="form-control RFISDBfields" value="">
        <input type="text" id="RFIS_CUSID"  name="RFIS_CUSID" hidden="hidden"  class="form-control RFISDBfields" value="">
        <input type="text" id="RFIS_UNIQID"  name="RFIS_UNIQID" hidden="hidden"  class="form-control RFISDBfields" value="">
         <!-- LSW_TRATIOBALSHEET 
         <input type="text" id="RFIS_RATFINSUMMDEL"  name="RFIS_RATFINSUMMDEL" hidden="hidden"  class="form-control RFISDBfields" value="">
         
       
         <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>  -->
           <input type="text" id="HiddenVal" hidden="hidden" name="HiddenVal" value="Net profit as per P/L|Tax Paid As Per ITR,Net Profile After Tax" class="form-control RFISDBfields">
        <input type="text" id="HiddenCashPrft" hidden="hidden" name="HiddenCashPrft" value="Depreciation|,Cash Profit" class="form-control RFISDBfields">
  
           <div class="form-row">
                     <div id="PROPTXTHDR" class="col Btxt10">Financial Summary</div>
                </div>
				<div class="form-row">
                     <div class="col-md-2"> 
                  <div class="md-form">
                    <select class="md-form colorful-select dropdown-primary RACDDBfields" onchange="GrdLoadOnFincSum()" id="RACD_FINSUMYEAR" name="RACD_FINSUMYEAR">
  					<option value="">Select</option>
					<option  value="2020-2021" >2020-2021</option>
  					<option  value="2019-2020" selected>2019-2020</option>
					<option  value="2018-2019">2018-2019</option>
				</select>
				<label class="mdb-main-label BTxt9">LATEST YEAR<span class="MndtryAstr"></span></label>
                  </div>
             </div>
            </div>
          <div class="form-row">
           <div class="col">
             <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table5',{spname:'LSW_SGETROFINSMRY',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'FS|'+$('#RACD_CUSID').val()+'|'+$('#RACD_UNIQID').val(),MnuId:$('#RACD_FINSUMYEAR').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1,5,6,7','FINCSUMMARY');" id="BTNFINCSUMMARY" name="BTNFINCSUMMARY" />
             <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid " id="Table5">
             </table>
           </div>
        </div> 
           
           
            <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save8" data-aria="LSW_TRATIOCOMPDETAILS|RACD|RACD_UNIQID" data-form="PersonalInfo" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                    <button type="button"  data-aria="LSW_TRATIOCOMPDETAILS|RACD|RACD_UNIQID" next-form="TAB" data-form="PersonalInfo" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>   
                </div>
            </div>
            
            
        </form>
      </div>
    </div> 
 </div>
 
 
    <table style="display:none" id="GridTable3">
   <thead>
<th>RPLS_FINYEAR</th>
<th>RPLS_YEAR1</th>
<th>RPLS_YEAR2</th>
<th>RPLS_YEAR3</th>




<th>RPLS_CUSID</th>
<th>RPLS_UNIQID</th>
<!-- <th>RPLS_PRCSID</th>
<th>RPLS_ACTIVITYID</th>
<th>RPLS_CREATEDBY</th>
<th>RPLS_DTCREATED</th>
<th>RPLS_MODIFIEDBY</th>
<th>RPLS_DTMODIFIED</th>
 -->
   </thead> 
    </table> 
 
 
     <table style="display:none" id="GridTable4">
   <thead>
<th>RBSL_FINYEAR</th>
<th>RBSL_YEAR1</th>
<th>RBSL_YEAR2</th>
<th>RBSL_YEAR3</th>




<th>RBSL_CUSID</th>
<th>RBSL_UNIQID</th>
<!-- <th>RBSL_PRCSID</th>
<th>RBSL_ACTIVITYID</th>
<th>RBSL_CREATEDBY</th>
<th>RBSL_DTCREATED</th>
<th>RBSL_MODIFIEDBY</th>
<th>RBSL_DTMODIFIED</th>
 -->
   </thead> 
    </table> 
 
   <table style="display:none" id="GridTable5">
   <thead>
<th>RFNS_FINYEAR</th>
<th>RFNS_PERC</th>
<th>RFNS_YEAR1</th>
<th>RFNS_YEAR2</th>
<th>RFNS_YEAR3</th>
<th>RFNS_AVERAGE</th>
<th>RFNS_CUSID</th>
<th>RFNS_UNIQID</th>


<!-- <th>RFIS_PRCSID</th>
<th>RFIS_ACTIVITYID</th>
<th>RFIS_CREATEDBY</th>
<th>RFIS_DTCREATED</th>
<th>RFIS_MODIFIEDBY</th>
<th>RFIS_DTMODIFIED</th>
 -->
   </thead> 
    </table> 
  
   </div>
    </br>

    </div>
   </br>
  
    
    </div>
    </div>

     <script type="text/javascript" src="ThemeproLO/Financials/Script/FincRatio/LoadSubmit.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Financials/Script/FincRatio/Validation.js${DMY13}"></script>
  
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
  
  <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>   

                                  <!--   </div>
                                </div>   -->                           















                                       