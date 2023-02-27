</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<div class="">
<!--Admin panel-->
<div class="admin-panel">
   <div class="form-row">
      <div class="col-lg-12">
         <ul title="Tranche" data-aria="LSW_TLONBANKDTLS|BKDT|" data-popup="No"  class="nav FormPageMultiTab">
            <%-- ${SUBPAGETABDATA}  --%>
          <!--  <li id="Tranche1" value="Disbrsmnt" title="Tranche 1" class="nav-item active">
               <a>
                  <div class="nav-link" href="#">Tranche 1</div>
               </a>
            </li> 
            <li id="Tranche2" value="Disbrsmnt" title="Tranche 2" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Tranche 2</div>
               </a>
            </li> 
            <li id="Tranche3" value="Disbrsmnt" title="Tranche 3" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Tranche 3</div>
               </a>
            </li> 
            <li id="Tranche4" value="Disbrsmnt" title="Tranche 4" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Tranche 4</div>
               </a>
            </li> 
            <li id="Tranche5" value="Disbrsmnt" title="Tranche 5" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Tranche 5</div>
               </a>
            </li>  -->
         </ul>
      </div>
   </div>
   </br>
 
 <div class="card CardNS">
       
   <div class="card-body px-lg-5 pt-0 BSbrdlight">
     
     <div class="row">
	<div class="col-lg-12">
		</br>
		  <ul class="nav FormPageSubTab FormPageSubTab1">      
       <li id="DisbursementChecklist" value="UCVDisbrsmnt" title="Disbursement Checklist" class="nav-item active">
               <a>
                  <div class="nav-link" href="#">Disbursement Checklist</div>
               </a>
            </li>
            <li id="OpsAcknowledgement" value="UCVOpsAck" title="Ops Acknowledgement" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Ops Acknowledgement</div>
               </a>
            </li>
            <li id="DisbursementMemo" value="UCVDisbMemo" title="Disbursement Memo" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Disbursement Memo</div>
               </a>
            </li>
            <li id="OTC" value="UCVOTC" title="OTC" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">OTC</div>
               </a>
            </li>
            <li id="PDD" value="UCVPDD" title="PDD" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">PDD</div>
               </a>
            </li>
      </ul>
	</div>
</div>
     
     
      </div>
   </div>
   
   
   <!-- Start -->
   <!--Accordion wrapper-->
   <div class="HiddenBTN">
      <input type="button" style="display:none" class="DashTrg" data="Branch"  id="BTNBranchCheckList" name="BTNBranchCheckList" /><!-- Life Insurance -->
      <input type="button" style="display:none" class="DashTrg" data="Credit"  id="BTNCreditOpsChecklist" name="BTNCreditOpsChecklist" /><!-- Life Insurance -->
      <input type="button" style="display:none" class="DashTrg" data="OPS"  id="BTNOpsChecklist" name="BTNOpsChecklist" /><!-- Life Insurance -->
      <input type="button" style="display:none" class="DashTrg" data="OPSMINI"  id="BTNOpsMINICl" name="BTNOpsMINICl" />
   </div>
   <input type="text" id="ODCH_PRCSID" hidden="hidden" name="ODCH_PRCSID" value="" class="form-control ODCHDBfields">
    <input type="text" id="ODCH_ACTIVITYID" hidden="hidden" name="ODCH_ACTIVITYID" class="form-control ODCHDBfields">
    <input type="text" id="ODCH_CREATEDBY" hidden="hidden" name="ODCH_CREATEDBY" class="form-control ODCHDBfields">
    <input type="text" id="ODCH_DTCREATED" hidden="hidden" name="ODCH_DTCREATED" class="form-control ODCHDBfields">
    <input type="text" id="ODCH_MODIFIEDBY" hidden="hidden" name="ODCH_MODIFIEDBY" class="form-control ODCHDBfields">
    <input type="text" id="ODCH_DTMODIFIED" hidden="hidden" name="ODCH_DTMODIFIED" class="form-control ODCHDBfields">
    <input type="text" id="ODCH_GRDDTL" hidden="hidden" name="ODCH_GRDDTL" class="form-control ODCHDBfields">
    
    <input type="text" id="ODCH_TRNCHID" hidden="hidden" name="ODCH_TRNCHID" class="form-control ODCHDBfields">
    <input type="text" id="ODCH_TRNCHNAME" hidden="hidden" name="ODCH_TRNCHNAME" class="form-control ODCHDBfields">
    
    <input type="text" id="hiddenid" hidden="hidden" name="hiddenid" class="form-control ODCHDBfields">
    <input type="text" id="hiddenactivity" hidden="hidden" name="hiddenactivity" class="form-control ODCHDBfields">
    
    <input type="text" id="HiddenActID" hidden="hidden" name="HiddenActID" class="form-control ">
    
    
   <div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
      <!-- Branch Start -->
     
      <div id = "Branch">
      <div class = "card">
         <div class="card-header Btxt7 active" role="tab" id="headingOne1">
            <!-- data-multidata="|PrcsID||ApproveNote1|AAPRDBfields|LSW_SGETFMLYDTL" -->
            <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNBranchCheckList" data-aria="" data-parent="#accordionEx" href="#collapseOne1"
               aria-expanded="false" aria-controls="collapse1">
            Branch CheckList<i class="fa fa-plus-circle rotate-icon"></i>
            </a>
         </div>
         <div id="collapseOne1" class="collapse " role="tabpanel" aria-labelledby="headingOne1"
            data-parent="#accordionEx">
            <div class="card-body px-lg-5 pt-0  ">
               </br>
               <form>
                  
                  <div class="form-row ML01">
                     <div class="col  BluShd">
                        <label class="Btxt10"> KYC </label>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable2A',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text()+'|Branch',MnuId:'KYC'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'KYCDTL');" id="BTNKYCDTL" name="BTNKYCDTL" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display"  name="DisbChkTable" id="DisbChkTable2A">
                        </table>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col  BluShd">
                        <label class="Btxt10"> Credit KYC </label>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable3A',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text()+'|Branch',MnuId:'Credit KYC'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'SANCTIONFILEDTL');" id="BTNSANCTIONFILEDTL" name="BTNSANCTIONFILEDTL" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable3A">
                        </table>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col  BluShd">
                        <label class="Btxt10">PF</label>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable4',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text()+'|Branch',MnuId:'PF'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'TechGDTL');" id="BTNTechGDTL" name="BTNTechDTL" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable4">
                        </table>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col  BluShd">
                        <label class="Btxt10">Application Form</label>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable5',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text()+'|Branch',MnuId:'Applicationform'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'Applnnform');" id="BTNApplnnform" name="BTNApplnnform" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable5">
                        </table>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save1" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="CAM" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="CAM" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
                      </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
      </div>
      <!-- Branch End -->
      <!--  Credit Ops Checklist Start -->
      <div id = "Credit">
      	<div class="card">
      	<div class="card-header Btxt7" role="tab" id="headingTwo2">
      	<a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNCreditOpsChecklist" data-aria="" data-parent="#accordionEx" href="#collapseTwo2"
               aria-expanded="false" aria-controls="collapse2">
            Credit Ops Checklist<i class="fa fa-plus-circle rotate-icon"></i>
            </a>
      	</div>
      	<div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
            data-parent="#accordionEx">
            <div class="card-body px-lg-5 pt-0" >
            	<div class="form-row ML01">
                     <div class="col  BluShd">
                        <label class="Btxt10"> Credit KYC </label>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable3A',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|CREDIT OPS',MnuId:'Credit KYC'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'SANCTIONFILEDTL');" id="BTNSANCTIONFILEDTLCOps" name="BTNSANCTIONFILEDTLCOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable3A">
                        </table>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col  BluShd">
                        <label class="Btxt10">Application Form</label>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable5',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|CREDIT OPS',MnuId:'Applicationform'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'Applnnform');" id="BTNApplnnformCOps" name="BTNApplnnformCOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable5">
                        </table>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col  BluShd">
                        <label class="Btxt10">Other File</label>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable6',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|CREDIT OPS',MnuId:'OtherFile'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'OthrFile');" id="BTNOthrFileCOps" name="BTNOthrFileCOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable6">
                        </table>
                     </div>
                  </div>
                   <div class="form-row ML01">
                     <div class="col  BluShd">
                        <label class="Btxt10">FI Reports</label>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable7',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|CREDIT OPS',MnuId:'Fi reports'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'FIRprt');" id="BTNFIRprtCOps" name="BTNFIRprtCOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable7">
                        </table>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col  BluShd">
                        <label class="Btxt10">RCU Report</label>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable8',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|CREDIT OPS',MnuId:'Rcu report'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'RCURprt');" id="BTNRCURprtCOps" name="BTNRCURprtCOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable8">
                        </table>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col  BluShd">
                        <label class="Btxt10">Property visit report</label>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable9',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|CREDIT OPS',MnuId:'Property visit report'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'PropVst');" id="BTNPropVstCOps" name="BTNPropVstCOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable9">
                        </table>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col  BluShd">
                        <label class="Btxt10">Cibil reports</label>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable10',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|CREDIT OPS',MnuId:'Cibil reports'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'Cibil');" id="BTNCibilCOps" name="BTNCibilCOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable10">
                        </table>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col  BluShd">
                        <label class="Btxt10">TECH REPORTS</label>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable11',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|CREDIT OPS',MnuId:'TECH REPORTS'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'TechRPRT');" id="BTNTechRPRTCOps" name="BTNTechRPRTCOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable11">
                        </table>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col  BluShd">
                        <label class="Btxt10">BT process</label>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable14',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|CREDIT OPS',MnuId:'BT process'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'BTPrcs');" id="BTNBTPrcsCOps" name="BTNBTPrcsCOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable14">
                        </table>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col  BluShd">
                        <label class="Btxt10">legal report and property document</label>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable17',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|CREDIT OPS',MnuId:'legal report and property document'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'Legl');" id="BTNLeglCOps" name="BTNLeglCOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable17">
                        </table>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col  BluShd">
                        <label class="Btxt10">Income AND CAM</label>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable12',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text()+'|Branch',MnuId:'Income AND CAM'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'Incm');" id="BTNIncm" name="BTNIncm" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable12">
                        </table>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col  BluShd">
                        <label class="Btxt10">Approvals</label>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable13',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text()+'|Branch',MnuId:'Approvals'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'Apprvl');" id="BTNApprvl" name="BTNApprvl" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable13">
                        </table>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col  BluShd">
                        <label class="Btxt10">Sanction letter</label>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable15',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text()+'|Branch',MnuId:'Sanction letter'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'SancLtr');" id="BTNSancLtr" name="BTNSancLtr" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable15">
                        </table>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save2" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="CAM" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="CAM" data-card="1" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button>
                         <!--  <button type="button" id="SaveCROPS" style="display:none;" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="CAM" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Send to OPS</button>-->
                     </div>
                  </div>
            </div>
            </div>
      </div>
      </div>
      <!--  Credit Ops Checklist End -->
      <!--  Ops Checklist Start -->
      <div id = "OPS">
      <div class="card">
      	<div class="card-header Btxt7" role="tab" id="headingThree3">
      	<a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNOpsChecklist" data-aria="" data-parent="#accordionEx" href="#collapseThree3"
               aria-expanded="false" aria-controls="collapse3">
            Ops Checklist<i class="fa fa-plus-circle rotate-icon"></i>
            </a>
      	</div>
      	<div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
            data-parent="#accordionEx">
            <div class="card-body px-lg-5 pt-0" >
            	 <div class="form-row ML01">
                     <div class="col  BluShd">
                        <label class="Btxt10"> KYC </label>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable2A',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|OPS',MnuId:'KYC'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'KYCDTL');" id="BTNKYCDTLOps" name="BTNKYCDTLOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display"  name="DisbChkTable" id="DisbChkTable2A">
                        </table>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col  BluShd">
                        <label class="Btxt10">PF</label>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable4',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|OPS',MnuId:'PF'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'TechGDTL');" id="BTNTechGDTLOps" name="BTNTechDTLOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable4">
                        </table>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col  BluShd">
                        <label class="Btxt10">DM</label>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable18',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|OPS',MnuId:'DM'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'DM');" id="BTNDMOps" name="BTNDMOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable18">
                        </table>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col  BluShd">
                        <label class="Btxt10">Loan agreement</label>
                     </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable19',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|OPS',MnuId:'Loan agreement'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'LonAgr');" id="BTNLonAgrOps" name="BTNLonAgrOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable19">
                        </table>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col  BluShd">
                        <label class="Btxt10">Cross sell</label>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable20',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|OPS',MnuId:'Cross sell'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'CrsSell');" id="BTNCrsSellOps" name="BTNCrsSellOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable20">
                        </table>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col  BluShd">
                        <label class="Btxt10">BT Process - Ops</label>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable21',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|OPS',MnuId:'BT Process - Ops'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'BTOPS');" id="BTNBTOPSOps" name="BTNBTOPSOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable21">
                        </table>
                     </div>
                  </div>
                  </div>
				  <div class="form-row">
                     <div class="col  BluShd">
                        <label class="Btxt10">Repayment kit</label>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable24',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text()+'|Branch',MnuId:'Repayment kit'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'Repaymentkit');" id="BTNRepaymentkit" name="BTNRepaymentkit" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable24">
                        </table>
                      </div>
                  </div>
                  <div class="form-row ML01">
                     <div class="col d-flex justify-content-center">
                          <button type="button" id="RaiseQueryCo2" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="PersonalInfo" QueryType="DisbChkLst" style="height:35px" class="btn btn-Syeloutline waves-effect waves-light FormSave PODSave RaiseQry">Raise Query</button>
                        <button type="button" id="OPSSave" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="CAM" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="CAM" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                      </div>
                  </div>
                  
            </div>
      </div>
      </div>
      
      <!--  Credit Ops Checklist End -->
      
       <!--  Ops MINI Checklist Start -->
       <div id = "OPSMINI">
       	<div class="card">
       	<div class="card-header Btxt7" role="tab" id="headingFour4">
      	<a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNOpsMINICl" data-aria="" data-parent="#accordionEx" href="#collapseFour4"
               aria-expanded="false" aria-controls="collapse4">
            Branch Checklist<i class="fa fa-plus-circle rotate-icon"></i>
            </a>
      	</div>
		<div class="HyperControls card-body px-lg-5 pt-0" style="display:none" id="GECLPOPUP1"> 
                        <a type="button" class="Btxt4 FltRight" onclick='$("#GECLPOPUP").click()' href="#">View GECL Additional CheckList</a>
                     </div>
      	<div id="collapseFour4" class="collapse" role="tabpanel" aria-labelledby="headingFour4"
            data-parent="#accordionEx">
            <div class="card-body px-lg-5 pt-0" >
            	<div class="form-row">
                     <div class="col  BluShd">
                        <label class="Btxt10"> MINI CheckList KYC </label>
						<!--MINI CheckList KYC-->
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'DisbChkTable25',{spname:'LSW_SGETTRNCHDISBCHKLST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|OPSMC|'+$('#DMY7').val().split('|')[8],MnuId:'MINI CheckList KYC'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'MINIKYCDTL');" id="BTNKYCDTLOps" name="BTNKYCDTLOps" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display"  name="DisbChkTable" id="DisbChkTable25">
                        </table>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col  BluShd">
                        <label class="Btxt10">Mini CheckList</label>
                     </div>
                  </div>
                  <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'DisbChkTable22',{spname:'LSW_SGETTRNCHDISBCHKLST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'Tranche 1|OPSMC|'+$('#DMY7').val().split('|')[8],MnuId:'MINI CheckList'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'MINChkLst');" id="BTNMINChkLst" name="BTNMINChkLst" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display"  name="DisbChkTable" id="DisbChkTable22">
                        </table>
                     </div>
                  </div>
                   <div class="form-row ML01">
                        <div class="col  BluShd">
                           <label class="Btxt10"> KYC </label>
                        </div>
                     </div>
                     <div class="form-row ML01">
                        <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable2A',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text()+'|Branch',MnuId:'KYC'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'KYCDTL');" id="BTNKYCDTL" name="BTNKYCDTL" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display"  name="DisbChkTable" id="DisbChkTable2A">
                           </table>
                        </div>
                     </div>
                     <div class="form-row ML01">
                        <div class="col  BluShd">
                           <label class="Btxt10"> Credit KYC </label>
                        </div>
                     </div>
                     <div class="form-row ML01">
                        <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable3A',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text()+'|Branch',MnuId:'Credit KYC'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'SANCTIONFILEDTL');" id="BTNSANCTIONFILEDTL" name="BTNSANCTIONFILEDTL" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable3A">
                           </table>
                        </div>
                     </div>
                     <div class="form-row ML01">
                        <div class="col  BluShd">
                           <label class="Btxt10">PF</label>
                        </div>
                     </div>
                     <div class="form-row ML01">
                        <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable4',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text()+'|Branch',MnuId:'PF'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'TechGDTL');" id="BTNTechGDTL" name="BTNTechDTL" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable4">
                           </table>
                        </div>
                     </div>
                     <div class="form-row ML01">
                        <div class="col  BluShd">
                           <label class="Btxt10">Application Form</label>
                        </div>
                     </div>
                     <div class="form-row ML01">
                        <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst_v1(this,'DisbChkTable5',{XML:CtgryXML,DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text()+'|Branch',MnuId:'Applicationform'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'Applnnform');" id="BTNApplnnform" name="BTNApplnnform" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" name="DisbChkTable" id="DisbChkTable5">
                           </table>
                        </div>
                     </div>
                  <div class="form-row OPSMINISAVE">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="RaiseQueryCo2" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="PersonalInfo" QueryType="DisbChkLst" style="height:35px" class="btn btn-Syeloutline waves-effect waves-light PODSave FormSave RaiseQry ">Raise Query</button>
                        <button type="button" id="OPSSave" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="CAM" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="CAM" data-card="3" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                     </div>
                  </div>
				  <a type="button" id="GECLPOPUP" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#GECLPOPUPModal">
					  <i class="fa fa-plus"></i>
				  </a>
				  
				  <div class="GECLNormalFld1">
			   <div class="modal fade GECLCHECKLISTPOPUP" id="GECLPOPUPModal" tabindex="-1" role="dialog" aria-labelledby="GECLPOPUPModalLabel"
				   aria-hidden="true">
				   <div class="modal-dialog" style="max-width:1000px" role="document">
					  <div class="modal-content">
						 <div class="modal-header">
							<div class="Btxt10">GECL Additional CheckList</div>
							<a href="#">  <img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
						 </div>
						 <div class="modal-body">
							<div class="">
							   <!-- Card body -->
								  <form>
									<div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="UDYOG AADHAR No" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class=" col-md-4">
										 <div class="md-form">
											<input type="text" id="ODCH_UDAADHAR" name="ODCH_UDAADHAR" maxlength='12' class="form-control  IsNumberFields IsAadharFields  ODCHDBfields  ">   
										 </div>
									  </div>
									  
								   </div>
								   <div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="Industry Nature" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class="col-md-4">
										 <div class="md-form">
											<select class="mdb-select md-form colorful-select dropdown-primary ODCHDBfields GECLDROPDOWN"  onchange="CheckLSTDropDownOnChng(this.value)" id="ODCH_INSNATR" name="ODCH_INSNATR">
											</select>
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="Industry Sector" style="height: 130px;width:300px;" disabled class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class="col-md-4">
										 <div class="md-form">
											<select class="mdb-select md-form colorful-select dropdown-primary ODCHDBfields GECLDROPDOWN"  onchange="" id="ODCH_INSSECTR" name="ODCH_INSSECTR">
											</select>
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="No. of Empoyees" style="height: 130px;width:300px;" disabled class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class="col-md-4">
										 <div class="md-form">
											<input type="text" id="ODCH_NOEMPLY" name="ODCH_NOEMPLY" maxlength='6' class="form-control ODCHDBfields IsNumberFields"> 
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class="col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="AADHAR Number" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class="col-md-4">
										 <div class="md-form">
											<input type="text" id="ODCH_AADRNO" name="ODCH_AADRNO" maxlength='12' class="form-control IsNumberFields IsAadharFields ODCHDBfields  "> 
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="Chief Promoter Gender" style="height: 130px;width:300px;" disabled class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class=" col-md-4">
										 <div class="md-form">
											<select class="mdb-select md-form colorful-select dropdown-primary ODCHDBfields GECLDROPDOWN"  onchange="" id="ODCH_CHFPROMTGEN" name="ODCH_CHFPROMTGEN">
											</select>
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="Type of Entity" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class=" col-md-4">
										 <div class="md-form">
											<select class="mdb-select md-form colorful-select dropdown-primary ODCHDBfields GECLDROPDOWN"  onchange="" id="ODCH_TYPENTITY" name="ODCH_TYPENTITY">
											</select>
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="Sales Turnover of Last F.Y (Rs.)" style="height: 130px;width:300px;" disabled class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class=" col-md-4">
										 <div class="md-form">
											<input type="text" id="ODCH_SALESTURNOVR" name="ODCH_SALESTURNOVR"  class="form-control IsCURCommaFields NoSpecialChar ODCHDBfields  "> 
										 </div>
									  </div>
								   </div>
								   <div class="form-row NormalFld">
									  <div class=" col-md-4 GryShd ">
										 <div class="md-form">
											<input type="text" value="Type of Borrower" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
										 </div>
									  </div>
									  <div class=" col-md-1">
									  </div>
									  <div class=" col-md-4">
										 <div class="md-form">
											<select class="mdb-select md-form colorful-select dropdown-primary ODCHDBfields GECLDROPDOWN"  onchange="" id="ODCH_TYPBORROWR" name="ODCH_TYPBORROWR">
											</select>
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
            </div>
            </div>
       	</div>
       </div>
        <!--  Ops MINI Checklist END -->
        <!--  T2 Checklist Start -->
         <div id = "T2">
         <div class="card">
         </br>
		 
         <div class="card-body px-lg-5 pt-0" >
         <div class="form-row">
                     <div class="col">
                        <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'DisbChkTable23',{spname:'LSW_SGETTRNCHDISBCHKLST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text()+'|OPSMC'+'|'+$('#DMY7').val().split('|')[8],MnuId:'T2'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'T2CheckLst');" id="BTNT2" name="BTNT2" />
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display"  name="DisbChkTable" id="DisbChkTable23">
                        </table>
                     </div>
                  </div>
      		      <div class="form-row">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="SaveTrnch2" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="CAM" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                        <button type="button" id="SaveTrnch2Nxt" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="CAM" data-card="4" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
					  </div>
                  </div>
                  </div>
                  </div>
      </div>
	  <!--  GECL Checklist Start -->
      <div id = "GECL">
         <div class="card">
            </br>
            <div class="card-body px-lg-5 pt-0" >
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'DisbChkTable26',{spname:'LSW_SGETTRNCHDISBCHKLSTGECL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text()+'|GECL',MnuId:'GECL'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$('#hiddenid').val(),'GECLCheckLst');" id="BTNTGECL" name="BTNTGECL" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display"  name="DisbChkTable" id="DisbChkTable26">
                     </table>
                  </div>
               </div>
               <!--  Normal Fields Start -->
			   <div class="NormalFld1">
					<div class="form-row NormalFld">
						<div class="col Btxt10">GECL Additional CheckList</div>
					</div>
					</br>
					<div class="form-row NormalFld">
					  <div class=" col-md-4 GryShd ">
						 <div class="md-form">
							<input type="text" value="UDYOG AADHAR No" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
						 </div>
					  </div>
					  <div class=" col-md-1">
					  </div>
					  <div class=" col-md-4">
						 <div class="md-form">
							<input type="text" id="ODCH_UDAADHAR" name="ODCH_UDAADHAR" class="form-control  NoSpecialChar ODCHDBfields  ">   
						 </div>
					  </div>
					  
				   </div>
				   <div class="form-row NormalFld">
					  <div class=" col-md-4 GryShd ">
						 <div class="md-form">
							<input type="text" value="Industry Nature" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
						 </div>
					  </div>
					  <div class=" col-md-1">
					  </div>
					  <div class="col-md-4">
						 <div class="md-form">
							<select class="mdb-select md-form colorful-select dropdown-primary ODCHDBfields GECLBROPSMNDTRY GECLDROPDOWN"  onchange="CheckLSTDropDownOnChng(this.value)" id="ODCH_INSNATR" name="ODCH_INSNATR">
							</select>
						 </div>
					  </div>
				   </div>
				   <div class="form-row NormalFld">
					  <div class=" col-md-4 GryShd ">
						 <div class="md-form">
							<input type="text" value="Industry Sector" style="height: 130px;width:300px;" disabled class="form-control Btxt17  DSVLBL   ">
						 </div>
					  </div>
					  <div class=" col-md-1">
					  </div>
					  <div class="col-md-4">
						 <div class="md-form">
							<select class="mdb-select md-form colorful-select dropdown-primary ODCHDBfields GECLBROPSMNDTRY GECLDROPDOWN"  onchange="" id="ODCH_INSSECTR" name="ODCH_INSSECTR">
							</select>
						 </div>
					  </div>
				   </div>
				   <div class="form-row NormalFld">
					  <div class=" col-md-4 GryShd ">
						 <div class="md-form">
							<input type="text" value="No. of Empoyees" style="height: 130px;width:300px;" disabled class="form-control Btxt17  DSVLBL   ">
						 </div>
					  </div>
					  <div class=" col-md-1">
					  </div>
					  <div class="col-md-4">
						 <div class="md-form">
							<input type="text" id="ODCH_NOEMPLY" name="ODCH_NOEMPLY" maxlength='6' class="form-control ODCHDBfields GECLBROPSMNDTRY IsNumberFields"> 
						 </div>
					  </div>
				   </div>
				   <div class="form-row NormalFld">
					  <div class="col-md-4 GryShd ">
						 <div class="md-form">
							<input type="text" value="AADHAR Number" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
						 </div>
					  </div>
					  <div class=" col-md-1">
					  </div>
					  <div class="col-md-4">
						 <div class="md-form">
							<input type="text" id="ODCH_AADRNO" name="ODCH_AADRNO"  class="form-control IsNumberFields IsAadharFields ODCHDBfields  "> 
						 </div>
					  </div>
				   </div>
				   <div class="form-row NormalFld">
					  <div class=" col-md-4 GryShd ">
						 <div class="md-form">
							<input type="text" value="Chief Promoter Gender" style="height: 130px;width:300px;" disabled class="form-control Btxt17  DSVLBL   ">
						 </div>
					  </div>
					  <div class=" col-md-1">
					  </div>
					  <div class=" col-md-4">
						 <div class="md-form">
							<select class="mdb-select md-form colorful-select dropdown-primary ODCHDBfields GECLDROPDOWN GECLBROPSMNDTRY"  onchange="" id="ODCH_CHFPROMTGEN" name="ODCH_CHFPROMTGEN">
							</select>
						 </div>
					  </div>
				   </div>
				   <div class="form-row NormalFld">
					  <div class=" col-md-4 GryShd ">
						 <div class="md-form">
							<input type="text" value="Type of Entity" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
						 </div>
					  </div>
					  <div class=" col-md-1">
					  </div>
					  <div class=" col-md-4">
						 <div class="md-form">
							<select class="mdb-select md-form colorful-select dropdown-primary ODCHDBfields GECLDROPDOWN GECLBROPSMNDTRY"  onchange="" id="ODCH_TYPENTITY" name="ODCH_TYPENTITY">
							</select>
						 </div>
					  </div>
				   </div>
				   <div class="form-row NormalFld">
					  <div class=" col-md-4 GryShd ">
						 <div class="md-form">
							<input type="text" value="Sales Turnover of Last F.Y (Rs.)" style="height: 130px;width:300px;" disabled class="form-control Btxt17  DSVLBL   ">
						 </div>
					  </div>
					  <div class=" col-md-1">
					  </div>
					  <div class=" col-md-4">
						 <div class="md-form">
							<input type="text" id="ODCH_SALESTURNOVR" name="ODCH_SALESTURNOVR"  class="form-control IsCURCommaFields GECLBROPSMNDTRY NoSpecialChar ODCHDBfields  "> 
						 </div>
					  </div>
				   </div>
				   <div class="form-row NormalFld">
					  <div class=" col-md-4 GryShd ">
						 <div class="md-form">
							<input type="text" value="Type of Borrower" disabled style="height: 130px;width:300px;" class="form-control Btxt17  DSVLBL   ">
						 </div>
					  </div>
					  <div class=" col-md-1">
					  </div>
					  <div class=" col-md-4">
						 <div class="md-form">
							<select class="mdb-select md-form colorful-select dropdown-primary ODCHDBfields GECLDROPDOWN GECLBROPSMNDTRY"  onchange="" id="ODCH_TYPBORROWR" name="ODCH_TYPBORROWR">
							</select>
						 </div>
					  </div>
				   </div>
			   </div>
               <div class="form-row">
                  <div class="col d-flex justify-content-center">
                     <button type="button" id="RaiseQueryGECL" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="PersonalInfo" QueryType="DisbChkLst" style="height:35px;display:none;" class="btn btn-Syeloutline waves-effect waves-light PODSave FormSave RaiseQry ">Raise Query</button>
                     <button type="button" id="SaveGECL" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="CAM" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" id="SaveTGECLNxt" data-aria="LSW_TOPSDISBCHKLSTHDR|ODCH|ODCH_TRNCHID" data-form="CAM" data-card="4" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- GRID START -->
   <!-- GRID END -->
</div>
<script type="text/javascript" src="ThemeproLO/PostSanction/Script/PostSanctionTab.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/PostSanction/Script/Disbrsmnt/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/PostSanction/Script/Disbrsmnt/Validation.js${DMY13}"></script>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>
<table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display"  name="DisbChkTable" id="DisbChkTable"></table>
<table style="display:none" id="GridDisbChkTable"  >
   <thead>
      <th>ODCL_Tranche</th>
      <th>ODCL_CATEGORY</th>
      <th>ODCL_SRNO</th>
      <th>ODCL_PARTICULARS</th>
      <th>ODCL_FRSTDISB</th>
      <th>ODCL_TRDT</th>
      <th>ODCL_REMRK</th>
      <th>ODCL_OTHRSTATS</th>
       <th>ODCL_OTHRREMRK</th>
   </thead>
</table>