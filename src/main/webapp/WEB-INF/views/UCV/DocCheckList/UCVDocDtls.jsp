<!--Main row-->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
      <!-- Start -->
      <div class="row">
         <div class="col-lg-12">
            <ul title="DocumentDetails" data-popup="" class="nav FormPageMultiTab">
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
      <input type="text" id="UPDC_PRCSID" hidden="hidden" name="UPDC_PRCSID" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_ACTIVITYID" hidden="hidden" name="UPDC_ACTIVITYID" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_DTCREATED" hidden="hidden" name="UPDC_DTCREATED" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_CREATEDBY" hidden="hidden" name="UPDC_CREATEDBY" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_DTMODIFIED" hidden="hidden" name="UPDC_DTMODIFIED" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_MODIFIEDBY" hidden="hidden" name="UPDC_MODIFIEDBY" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_KYCDOC" hidden="hidden" name="UPDC_KYCDOC" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_OTHERDOC" hidden="hidden" name="UPDC_OTHERDOC" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_CUSID" hidden="hidden" name="UPDC_CUSID" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_BNKSTMNT" hidden="hidden" name="UPDC_BNKSTMNT" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_PROPGRD" hidden="hidden" name="UPDC_PROPGRD" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_QURYDTL" hidden="hidden" name="UPDC_QURYDTL" class="form-control UPDCDBfields">
      <input type="text" id="UPDC_PFDEFR" hidden="hidden" name="UPDC_PFDEFR" class="form-control UPDCDBfields">
      
      
      
      <input type="text" id="HIDDENCOL" hidden="hidden" name="HIDDENCOL" class="form-control UPDCDBfields">
      <input type="text" id="HIDDENID" hidden="hidden" name="HIDDENID" class="form-control UPDCDBfields">
      <input type="text" id="HIDDENIPLDST" hidden="hidden" name="HIDDENIPLDST" class="form-control UPDCDBfields">
      
      <input type="text" id="HIDDENCUSTYP" hidden="hidden" name="HIDDENCUSTYP" class="form-control UPDCDBfields">
      <input type="text" id="HIDDENCONST" hidden="hidden" name="HIDDENCONST" class="form-control UPDCDBfields">
      
      <input type="text" id="HIDDENACT" hidden="hidden" name="HIDDENACT" class="form-control UPDCDBfields">
	  <input type="text" id="HIDDENSAMEADDR" hidden="hidden" name="HIDDENSAMEADDR" class="form-control UPDCDBfields">
      <div class="HyperControls">
         <a type="button" class="Btxt4 FltRight ADDBTN" id="NewlyAddedDoc" onclick="ChecklistDropdownvalue();" data-toggle="modal" data-target="#ADDKYCDocModal" href="#">+ Add Document</a>
         <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
      </div>
      <!--  card -->
      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
               </br>
               <div class="form-row">
			   <div class="col-md-6">
			   <div class="md-form">
                  <div class="col Btxt3">KYC</div>
                  <!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
               </div>
               </div>
			   <div class="col-md-6">
			   </div>
			   <div class="col-md-6">
			   </div>
			   <div class="col-md-6">
			   <div class="md-form">
                  <button type="button" id="MULTIDOWNLOADER" class="btn  waves-effect  btn-yelInplain btn-sm liSubpageTabIcons VIEWDISABLE" onclick="MULTIDOWNLOADER1('UPDC_CUSID')"><i class="fa fa-eye"></i>View All Documents</button>
               </div>
			   </div>
			   </div>
               </br>
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SUCVKYCDOCCHKLST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'KYCDOC',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','DocumentCheckList');" id="BTNKYCDOC" name="BTNKYCDOC" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                     </table>
                  </div>
               </div>
            </form>
         </div>
      </div>
      <!-- card -->
      </br>
	  <div class="NGECL" style="display:none">
      <!--  card -->
      <div class="card cardNS PropertyDocuments">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            </br>
            <div class="form-row">
               <div class="col Btxt3">Property Documents</div>
            </div>
            </br>
            <div class="form-row">
               <div class="col">
                  <!-- Card header -->
                  <div data-for="BankDetail2" class="BankDetail2"> 
                  </div>
                  <div class="DynamicPageGrid" data-val="PROPTXTHDR|Property" id="BankDetail2" style="display:none">
                     <div class="  BSbrd DYNROW">
                        <!-- Card body -->
                        <form>
                           <input type="text" id="DOCP_PRCSID" hidden="hidden" name="DOCP_PRCSID" class="form-control DOCPDBfields">
                           <input type="text" id="DOCP_ACTIVITYID" hidden="hidden" name="DOCP_ACTIVITYID" class="form-control DOCPDBfields">
                           <input type="text" id="DOCP_CREATEDBY" hidden="hidden" name="DOCP_CREATEDBY" class="form-control DOCPDBfields">
                           <input type="text" id="DOCP_DTCREATED" hidden="hidden" name="DOCP_DTCREATED" class="form-control DOCPDBfields">
                           <input type="text" id="DOCP_MODIFIEDBY" hidden="hidden" name="DOCP_MODIFIEDBY" class="form-control DOCPDBfields">
                           <input type="text" id="DOCP_DTMODIFIED" hidden="hidden"  name="DOCP_DTMODIFIED" class="form-control DOCPDBfields">
                           <input type="text" id="DOCP_CUSID"  name="DOCP_CUSID" hidden="hidden"  class="form-control DOCPDBfields" value="">
                           <input type="text" id="DOCP_PROPID"  name="DOCP_PROPID" hidden="hidden"  class="form-control DOCPDBfields" value="">
                           </br>
                           <div class="form-row">
                              <div id="PROPTXTHDR" class="col Btxt10"></div>
                           </div>
                           <div class="form-row">
                              <div class="col-md-6">
                                 <div class="md-form">
                                    <select class="mdb-select md-form colorful-select dropdown-primary DOCPMndtry DOCPDBfields" disabled=disabled onchange="CheckProStatus();" id="DOCP_PROPSTATUS" name="DOCP_PROPSTATUS" >
                                       <option value="">Select</option>
                                       <option value="Collected">Collected</option>
                                       <option value="Not Collected">Not Collected</option>
                                    </select>
                                    <label class="mdb-main-label BTxt9">Status</label>
                                 </div>
                              </div>
                              <div class="col-md-1">
                              </div>
                              <div class="col-md-2 CREDIT">
                     <div class="md-form">
                        <div class="custom-control custom-radio custom-control-inline">
                           <input type="checkbox" class="custom-control-input DOCPDBfields VRFY1" data-quey-sec="S03" id="DOCP_PROVERIFY" name="DOCP_PROVERIFY">
                           <label class="custom-control-label" for="DOCP_PROVERIFY">Verify</label>
                        </div>
                     </div>
                  </div>
                  
                  <div class="col-md-2 CREDIT">
                     <div class="md-form">
                      <button type="button" id="PRORAISEQU" data-quey-sec="S03" data-aria="" data-form="PersonalInfo" style="width:160px;height:35px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>
                     </div>
                  </div>
                  
                 <div class="col-md-1 CREDIT">
                     <div class="md-form">
                    <img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this)" class=" VIEWRMKS" width="35" height="25">
                    <input type="hidden" id="DOCP_REMRK"  name="DOCP_REMRK" disabled class="form-control DSVLBL form-control    DOCPDBfields ">
                    </div>
                  </div>
                           <!--    <div class="col">
                                 <div class="md-form">
                                    <div class="custom-control custom-radio custom-control-inline">
                                       <input type="checkbox" class="custom-control-input DOCPDBfields" id="DOCP_PROPOSV" name="DOCP_PROPOSV">
                                       <label class="custom-control-label" for="DOCP_PROPOSV">OSV</label>
                                    </div>
                                 </div>
                              </div> -->
							  </div>
				  <div class="form-row">
							   <div class="col-md-6 UPLD">
							<div class="md-form">
											<div class=""> </div>
											<div class="row UAMN" >
							<div class="col-md-8  Formcol-mdLR UAMNupload"style="display:none">
							<div class="md-form">
							<table><tr>
							<td>
							<div id="DOCP_PROPERTYDOCUPLOAD"  class="file-field" >
								 
							<input type="text" id="DOCP_PROPERTYDOC" data-val="Upload Document"    data-Validate="DOCP_PROPERTYDOC"  name="DOCP_PROPERTYDOC" class="form-control voter File DOCPDBfields">
							
							</div>
							</td>
							</tr></table>
							</div>    
							</div>  
							<div class="md-form">
							  <span class="name1">&nbsp;&nbsp;&nbsp;Property Document</span> 
							<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('DOCP_PROPERTYDOC1')" alt="Cinque Terre" width="35" height="25"> </div>
							</div>
							</div>  
							</div>
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
	  
      <!-- card -->
      </br>
      <!--  card -->
      <div class="card cardNS NBNKD"  >
         <div class="card-body px-lg-5 pt-0">
            </br>
            <div class="form-row">
               <div class="col Btxt3">Banking Statement</div>
            </div>
         </div>
         <div class="form-row">
            <div class="col">
               <!-- Card header -->
               <div data-for="BankDetail1" class="BankDetail1"> 
               </div>
               <div class="DynamicPageGrid" data-val="PROPTXTHDR|Bank Account" id="BankDetail1" style="display:none">
                  <div class="card-body px-lg-5 pt-0  BSbrd DYNROW">
                     <!-- Card body -->
                     <form>
                        <input type="text" id="BNKS_PRCSID" hidden="hidden" name="BNKS_PRCSID" class="form-control BNKSDBfields">
                        <input type="text" id="BNKS_ACTIVITYID" hidden="hidden" name="BNKS_ACTIVITYID" class="form-control BNKSDBfields">
                        <input type="text" id="BNKS_DTCREATED" hidden="hidden" name="BNKS_DTCREATED" class="form-control BNKSDBfields">
                        <input type="text" id="BNKS_CREATEDBY" hidden="hidden" name="BNKS_CREATEDBY" class="form-control BNKSDBfields">
                        <input type="text" id="BNKS_DTMODIFIED" hidden="hidden" name="BNKS_DTMODIFIED" class="form-control BNKSDBfields">
                        <input type="text" id="BNKS_MODIFIEDBY" hidden="hidden"  name="BNKS_MODIFIEDBY" class="form-control BNKSDBfields">
                        <input type="text" id="BNKS_CUSID"  name="BNKS_CUSID" hidden="hidden"  class="form-control BNKSDBfields" value="">
                        <input type="text" id="hIDDNACT"  name="hIDDNACT" hidden="hidden"  class="form-control BNKSDBfields" value="">
                        </br>
                        <div class="form-row">
                           <div id="PROPTXTHDR" class="col Btxt10"></div>
                        </div>
                        <div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 <input type="text" id="BNKS_BNKNAME" disabled name="BNKS_BNKNAME" class="form-control BNKSDBfields ">
                                 <label for="BNKS_BNKNAME" class="">Bank Name<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
                           <div class="col">
                              <div class="md-form">
                                 <input type="text" id="BNKS_ACCNTNO" disabled name="BNKS_ACCNTNO" class="form-control BNKSDBfields ">
                                 <label for="BNKS_ACCNTNO" class="">Bank Account Number<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
                        </div>
                        <div class="form-row">
                           <div class="col-md-6">
                              <div class="md-form">
                                 <select class="md-form colorful-select dropdown-primary UPDCMndtry BNKSDBfields" onchange="UpdtDefrFlg(this,'BNKS_DEFRSTUS')" id="BNKS_FINANCCOLLCT" name="BNKS_FINANCCOLLCT">
                                    <option value="">Select</option>
                                    <!-- <option value="Last 12 Months">Last 12 Months</option>
                                    <option value="2 Years">2 Years</option>
                                    <option value="5 Years">5 Years</option>
                                    <option value="10 Years">10 Years</option>
                                    <option value="10+ Years">10+ Years</option> -->
                                    <option value="Last 6 months">Last 6 months</option>
                                    <option value="Last 12 months">Last 12 months</option>
									<option disabled value="Last 24 months" class="BSO" >Last 24 months</option>
                                 </select>
                                 <label class="mdb-main-label BTxt9">Time Period *</label>
                              </div>
                           </div>
                           <div class="col-md-1">
                              <div class="md-form">
                                 <div class="custom-control custom-radio custom-control-inline">
                                    <input type="checkbox" class="custom-control-input BNKSDBfields" id="BNKS_FINANOSV" name="BNKS_FINANOSV">
                                    <label class="custom-control-label" for="BNKS_FINANOSV">OSV</label>
                                 </div>
                              </div>
                           </div>
                          <div class="col-md-2 CREDIT">
                     <div class="md-form">
                        <div class="custom-control custom-radio custom-control-inline">
                           <input type="checkbox" class="custom-control-input BNKSDBfields VRFY1" data-quey-sec="S02" id="BNKS_PROVERIFY" name="BNKS_PROVERIFY">
                           <label class="custom-control-label" for="BNKS_PROVERIFY">Verify</label>
                        </div>
                     </div>
                  </div>
                  
                  <div class="col-md-1 CREDIT">
                     <div class="md-form">
                      <button type="button" id="PRORAISEQU" data-aria="" data-quey-sec="S02" data-form="PersonalInfo" style="width:160px;height:35px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>
                     </div>
                  </div>
                  
                <!--  <div class="col-md-2 CREDIT">
                     <div class="md-form">
                    <img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this)" class=" VIEWRMKS" width="35" height="25">
                    <input type="hidden" id="BNKS_REMRK"  name="BNKS_REMRK" disabled class="form-control DSVLBL form-control    BNKSDBfields ">
                    </div>
                  </div> -->
                        </div>
                        <div class="form-row ">
                        	<div class="col-md-6">
                        		 <div class="md-form">
	                                 <input type="text" id="BNKS_DEFRSTUS" disabled name="BNKS_DEFRSTUS" class="form-control BNKSDBfields ">
	                                 <label for="BNKS_DEFRSTUS" class="">Deferment Status<span class="MndtryAstr"></span></label>
                              </div>
                        	</div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <!-- </div> -->
      </div>
	  
      <!-- card -->
      </br>
      <!--  card -->
      <div class="card cardNS FinancialsCollected">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
               </br>
               <div class="form-row">
                  <div class="col Btxt3">Financials Collected</div>
               </div>
               </br>
               <div class="form-row">
                  <div class="col-md-6">
                     <div class="md-form">
                        <select class="mdb-select md-form colorful-select dropdown-primary UPDCDBfields" onchange="UpdtDefrFlg(this,'UPDC_DEFRSTUS')" id="UPDC_FINANCCOLLCT" name="UPDC_FINANCCOLLCT">
                           <option value="">Select</option>
                           <!-- <option value="Last 12 Months">Last 12 Months</option>
                           <option value="2 Years">2 Years</option>
                           <option value="5 Years">5 Years</option>
                           <option value="10 Years">10 Years</option>
                           <option value="10+ Years">10+ Years</option> -->
                           <option value="Last 1 year">Last 1 year</option>
                           <option value="Last 2 year">Last 2 year</option>
                           <option value="Last 3 year">Last 3 year</option>
                        </select>
                        <label class="mdb-main-label BTxt9">Time Period *</label>
                     </div>
                  </div>
                  <div class="col-md-1">
                     <div class="md-form">
                        <div class="custom-control custom-radio custom-control-inline">
                           <input type="checkbox" class="custom-control-input UPDCDBfields" id="UPDC_FINANOSV" name="UPDC_FINANOSV">
                           <label class="custom-control-label" for="UPDC_FINANOSV">OSV</label>
                        </div>
                     </div>
                      
                  </div>
                  <div class="col-md-2 CREDIT">
                     <div class="md-form">
                        <div class="custom-control custom-radio custom-control-inline">
                           <input type="checkbox" class="custom-control-input UPDCDBfields VRFY1" data-quey-sec="S04" id="UPDC_FINCVERIFY" name="UPDC_FINCVERIFY">
                          <label class="custom-control-label" for="UPDC_FINCVERIFY">Verify</label>
                        </div>
                     </div>
                  </div>
                  
                  <div class="col-md-2 CREDIT">
                     <div class="md-form">
                        <button type="button" id="FINCRAISEQU" data-quey-sec="S04" data-aria="" data-form="PersonalInfo" style="width:160px;height:35px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>
                     </div>
                  </div>
                  <div class="col-md-1">
                  </div>
               </div>
               <div class="form-row"  >
                        	<div class="col-md-6">
                        		 <div class="md-form">
	                                 <input type="text" id="UPDC_DEFRSTUS" disabled name="UPDC_DEFRSTUS" class="form-control UPDCDBfields ">
	                                 <label for="UPDC_DEFRSTUS" class="">Deferment Status<span class="MndtryAstr"></span></label>
                              </div>
                        	</div>
                        </div>
						<div class="form-row APLNTPLVERFY " >
					<div class="col-md-6 CREDIT">
						<div class="md-form">
								<div class="custom-control custom-radio custom-control-inline">
								   <input type="checkbox" class="custom-control-input UPDCDBfields VRFY2" data-quey-sec="SSPL" id="UPDC_APLNVERFY" name="UPDC_APLNVERFY">
								  <label class="custom-control-label" for="UPDC_APLNVERFY">Ensure all Applicant and Co-Applicant datas are verified</label>
								</div>
						</div>
					</div>
					<div class="col-md-2 CREDIT">
                     <div class="md-form">
                        <button type="button" id="PLVERFYRAISEQU" data-quey-sec="SSPL" data-aria="" data-form="PersonalInfo" style="width:160px;height:35px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>
                     </div>
                  </div>
				</div>
            </form>
         </div>
      </div>
      <!-- card -->
	</div>
      </br>
      <!--  card -->
      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
               </br>
               <div class="form-row">
                  <div class="col Btxt3">Other Documents</div>
               </div>
               </br>
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_SUCVKYCDOCCHKLST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','DocumentCheckList');" id="BTNKYCOthers" name="BTNKYCOthers" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
                     </table>
                  </div>
               </div>
            </form>
         </div>
      </div>
      <!-- card -->
      </br>
      <!--  card -->
      <div class="card cardNS PFDeferment" style="display:none">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
               </br>
               <div class="form-row">
                  <div class="col Btxt3">PF Deferment</div>
               </div>
               </br>
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_TRCUDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','DocumentCheckList');" id="BTNKYCOthers" name="BTNKYCOthers" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table4">
                     </table>
                  </div>
               </div>
            </form>
         </div>
      </div>
      <!-- card -->
      </br>
      <!--  card -->
      <div class="card cardNS OtherQueries" style="display:none;">
         <!-- Card body -->
         	<div class="card-body px-lg-5 pt-0">
         	 <form >
         	 </br>
               <div class="form-row">
                  <div class="col Btxt3">Other Queries</div>
               </div>
               
                
                        <div class="HyperControls form-row FltRight" > 
			      <a onclick="AddPageMultiData('',$('#DCLQ_PRCSID').val(),'','ApproveDetail12','DCLQDBfields')" class="Btxt4 FltRight ADDBTN"  href="#">+ Add a Query</a>
			<!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
			      </div>
			      <div data-for="ApproveDetail12" class="ApproveDetail12"> 
                        </div>
                        <div class="DynamicPageGrid" data-val="PROPTXTHDR|QUERY" id="ApproveDetail12" style="display:none">
                        <div data-row="" class="  DYNROW">
                        <input type="text" id="DCLQ_PRCSID" hidden="hidden" name="DCLQ_PRCSID" class="form-control DCLQDBfields">
		                <input type="text" id="DCLQ_ACTIVITYID" hidden="hidden" name="DCLQ_ACTIVITYID" class="form-control DCLQDBfields">
		                <input type="text" id="DCLQ_CREATEDBY" hidden="hidden" name="DCLQ_CREATEDBY" class="form-control DCLQDBfields">
		                <input type="text" id="DCLQ_DTCREATED" hidden="hidden" name="DCLQ_DTCREATED" class="form-control DCLQDBfields">
		                <input type="text" id="DCLQ_MODIFIEDBY" hidden="hidden"  name="DCLQ_MODIFIEDBY" class="form-control DCLQDBfields">
		                <input type="text" id="DCLQ_DTMODIFIED" hidden="hidden"  name="DCLQ_DTMODIFIED" class="form-control DCLQDBfields">
		                <input type="text" id="DCLQ_CUSID" hidden="hidden"  name="DCLQ_CUSID" class="form-control DCLQDBfields">
                        <div class="form-row">
                              <div id="PROPTXTHDR" class="col Btxt10"></div>
                           </div>
                            <div class="form-row">
                                 <div class=" col-md-11">
                                    <div class="md-form">
                                       <input type="text" id="DCLQ_QURY"  name="DCLQ_QURY" class="form-control NoSpecialChar DCLQDBfields  ">
                                    </div>
                                 </div>
                                 
                                   <div class=" col-md-1"> 
                                 <div class="md-form">
                                <img src="ThemeproLO/Common/Images/Delete_Img.png"   class="DeleteQUERY DELBTN" alt="Cinque Terre" width="20" height="20"> 
                                 </div>
                                 </div>
                         </div>
                        </div>
                        </div>
         	 </form>
         	</div>
         </div><!--GenApplForm-->
		      <div class="form-row " >
              <span class="HyperControls FltRight">
		         <a onclick="GentrateApplicform();" class="Btxt4 FltRight" href="#">Application Form.pdf</a>
		    <!--  </span>
			     <span class="HyperControls FltRight">
		         <a onclick="GentrateEndUse();" class="Btxt4 FltRight" href="#">End Use.pdf</a>
		      </span>-->
          </div>
          <!-- card -->
		  
		    <div class="form-row"  style="display:none;" >
		   <button type="button" style="display:none;" id="SendBackCon" data-aria="LSW_TUPLOADDOCUMENT|UPDC|UPDC_CUSID" data-card="0" class="btn btn-Syel waves-effect BTNDOCMVL waves-light FormSave">Send Back</button>
		   </div>
		   
		   
      <div class="form-row">
         <div class="col d-flex justify-content-center">
            <button type="button" id="Save4" data-aria="LSW_TUPLOADDOCUMENT|UPDC|UPDC_CUSID"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
            <button type="button" id="MoveToLogin" data-aria="LSW_TUPLOADDOCUMENT|UPDC|UPDC_CUSID" data-card="0" class="btn btn-Syel waves-effect BTNDOCMVL waves-light FormSave">Move to Login</button>
            <button type="button" style="display:none;" id="SendBack" data-aria="LSW_TUPLOADDOCUMENT|UPDC|UPDC_CUSID" data-card="0" class="btn btn-Syel waves-effect BTNDOCMVL waves-light BTNHIDE SendPOPUP">Send Back</button>
             <button type="button" style="display:none;" id="Reject" data-aria="LSW_TUPLOADDOCUMENT|UPDC|UPDC_CUSID" data-card="0" class="btn btn-Syel waves-effect BTNDOCMVL waves-light ">Reject</button> 
             <button type="button" style="display:none;" id="ApplForm" onclick="GentrateApplicform()" data-form="CAM" data-card="0" class="btn btn-Syel waves-effect waves-light ApplForm FormSave">Application form</button> 		 
		     <!--<button type="button" style="display:none;" id="EndUse" onclick="GentrateEndUse()" data-form="CAM" data-card="0" class="btn btn-Syel waves-effect waves-light ApplForm FormSave">End Use</button> -->
		
		</div>
      </div>
      </br>
   </div>
   <!-- Admin Panel -->
   <div class="modal fade" id="ADDKYCDocModal" tabindex="-1" role="dialog" aria-labelledby="ADDKYCDocModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" style="max-width:900px" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <div class="Btxt10">ADD DOCUMENTS</div>
               <a href="#">  <img id="ADDKYCDOCCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
            </div>
            <div class="modal-body">
               <div class="">
                  <!-- Card body -->
                  <div class="">
                     <form>
                        <div class="form-row">
                
                           <div class="col">
                              <div class="md-form">
                                 <div class="" id="">
                                    <select class="mdb-select md-form colorful-select dropdown-primary KYCDMndtry DOCU BranchOPSNotDSBL" onchange="CheckDocType();" id="DOCU_KYC" name="DOCU_KYC">
                                       <option value="" selected>--Select--</option>
                                       <!-- <option value="Public Limited Company - Listed">PAN</option> -->
                                       <option value="KYC">KYC</option>
                                       <option value="Others">Others</option>
                                    </select>
                                    <label class="mdb-main-label BTxt9">Document Type*</label>
                                 </div>
                              </div>
                           </div>
                           <div class="col">
                              <div class="md-form">
                                 <div class="" id="">
                                    <input type="text" id="KYCD_DOCNAME" name="KYCD_DOCNAME" data-aria="2" class="form-control NoSpecialChar BranchOPSNotDSBL KYCDMndtry PGToGRID">
                                    <label for="KYCD_DOCNAME" class="">Document Name <span class="MndtryAstr">*</span></label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="form-row">
                           <!-- <div class="col">
                              <div class="md-form">
                              <div class="" id="">
                              
                              <label class="mdb-main-label BTxt9">Upload</label>
                              </div>
                              </div>
                              </div> -->
                           <div class="col">
                              <div class="row" >
                                 <!--First column-->
                                 <div class="col-md-8  Formcol-mdLR">
                                    <div class="md-form">
                                       <table>
                                          <tr>
                                             <td>
                                                <div id="KYCD_DOCATTACHMENTUPLOAD"  class="file-field DDU">
                                                   <a class="">
                                                   <i class="fa fa-plus imgAdd BranchOPSNotDSBL" aria-hidden=""></i>
                                                   <input type="file"  name="datafile" onchange="DocFldUpldHndlr(KYCD_DOCATTACHMENT,'KYCD_DOCATTACHMENT')" class="KYCD_DOCATTACHMENT"  >
                                                   </a>
                                                   <input type="text" id="KYCD_DOCATTACHMENT" hidden="hidden" data-Validate="KYCD_DOCATTACHMENT"  name="KYCD_DOCATTACHMENT" class="form-control File KYCDDBfields">
                                                   <span class="name">Upload Document</span>
                                                </div>
                                             </td>
                                          </tr>
                                       </table>
                                    </div>
                                 </div>
                                 <div class="col-md-4 DDV">
                                    <div class="md-form Formcol-mdLR TxtCenter">
                                       <div class="KYCD_DOCATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile(KYCD_DOCATTACHMENT);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('KYCD_DOCATTACHMENT')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col OKYC">
                              <div class="md-form">
                                 <div class="" id="">
                                    <div class="select-radio">
                                       <div class="custom-control custom-radio custom-control-inline">
                                          <input type="checkbox" class="custom-control-input PGToGRID DocChkBox CBSI_ProofAs BranchOPSNotDSBL" data-aria="1" id="CBSI_ID" name="CBSI_ProofAs">
                                          <label class="custom-control-label" for="CBSI_ID">ID</label>
                                       </div>
                                       <div class="custom-control custom-radio custom-control-inline">
                                          <input type="checkbox" class="custom-control-input PGToGRID DocChkBox CBSI_ProofAs BranchOPSNotDSBL" data-aria="1" id="CBSI_SIGN" name="CBSI_ProofAs">
                                          <label class="custom-control-label" for="CBSI_SIGN">SIGN</label>
                                       </div>
                                       <div class="custom-control custom-radio custom-control-inline">
                                          <input type="checkbox" class="custom-control-input PGToGRID DocChkBox CBSI_ProofAs BranchOPSNotDSBL" data-aria="1" id="CBSI_DOB" name="CBSI_ProofAs">
                                          <label class="custom-control-label" for="CBSI_DOB">DOB</label>
                                       </div>
                                       <div class="custom-control custom-radio custom-control-inline">
                                          <input type="checkbox" class="custom-control-input PGToGRID DocChkBox CBSI_ProofAs BranchOPSNotDSBL" data-aria="1" id="CBSI_ADDRESS" name="CBSI_ProofAs">
                                          <label class="custom-control-label" for="CBSI_ADDRESS">ADDRESS</label>
                                       </div>
                                    </div>
                                    <label class="mdb-main-label BTxt9">Proof As<span class="MndtryAstr">*</span></label>      
                                 </div>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div class="modal-footer align-middle">
               <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
               <button type="button" id="AddKYCDoc" class="btn btn-yel Btxt2">Confirm</button>
            </div>
         </div>
      </div>
   </div>
   
   
   
    <a type="button" id="SENDOPUP" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#SENDPOPModal">
   <i class="fa fa-plus"></i>
        </a>
<div class="modal fade" id="SENDPOPModal" tabindex="-1" role="dialog" aria-labelledby="SENDPOPModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:600px" role="document">
    <div class="modal-content">
       <div class="modal-header">
        <div class="Btxt8">Send Back</div> 
        <a href="#"><img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
      </div>  
      <div class="modal-body">
   <div class="">
    <!-- Card body -->
     <div class="">  
         <form>
           <div class="form-row">
		   
                     <div class="md-form">
						<label for="URCR_REMARK" class="active">Remarks<span class="MndtryAstr"></span>*</label>
						 <br><br>
                          <textarea class="form-control URCRDBfields" id="REMARKF" name="REMARKF" style="height: 100px;width:500px;"></textarea>					
                     </div>
               
				  </div>
				 
 
              <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="Save" data-aria="" onclick="Sendbackcall()" class="btn btn-Syeloutline waves-effect waves-light ">Confirm</button>   
                   
                  </div>
              </div>        
         </form>
        </div>
     </div>
      </div>   
      </div>
    </div>
  </div> 
  
  
  
  
  
  
  
   <table style="display:none" id="GridTable2">
      <thead>
      	<th>ACTION</th>
         <th>KYCD_DOC</th>
         <th>KYCD_DOCNAME</th>
         <th>KYCD_UPLOAD</th>
         <th>KYCD_UPLOADDT</th>
         <th>KYCD_OSV</th>
         <th>KYCD_DOCSTATUS</th>
         <th>KYCD_TARGETDT</th>
         <th>KYCD_REMARKS</th>
         <th>KYCD_CUSID</th>
         <th>KYCD_VRFY</th>
         <th>KYCD_RSQURY</th>
         <th>KYCD_DEFRSTATS</th>
		 <th>KYCD_UNIQID</th>
         <th>KYCD_AUTODD</th>
         <th>KYCD_CUSTYPE</th>
         <!-- <th>KYCD_PRCSID</th>
            <th>KYCD_ACTIVITYID</th>
            <th>KYCD_DTCREATED</th>
            <th>KYCD_CREATEDBY</th>
            <th>KYCD_DTMODIFIED</th>
            <th>KYCD_MODIFIEDBY</th> -->
      </thead>
   </table>
   <table style="display:none" id="GridTable3">
      <thead>
      	<th>ACTION</th>
         <th>OKYD_DOC</th>
         <th>OKYD_DOCNAME</th>
         <th>OKYD_UPLOAD</th>
         <th>OKYD_UPLOADDT</th>
         <th>OKYD_OSV</th>
         <th>OKYD_DOCSTATUS</th>
         <th>OKYD_TARGETDT</th>
         <th>OKYD_REMARKS</th>
         <th>OKYD_CUSID</th>
         <th>OKYD_VRFY</th>
         <th>OKYD_RSQURY</th>
         <th>OKYD_DFRSTATUS</th>
         <th>OKYD_UNIQID</th>
         <th>OKYD_AUTODD</th>
         <th>OKYD_CUSTYPE</th>
         <!-- <th>OKYD_PRCSID</th>
            <th>OKYD_ACTIVITYID</th>
            <th>OKYD_DTCREATED</th>
            <th>OKYD_CREATEDBY</th>
            <th>OKYD_DTMODIFIED</th>
            <th>OKYD_MODIFIEDBY</th> -->
      </thead>
   </table>
   <table style="display:none" id="GridTable4">
      <thead>
      	<th>DFPD_PFDEMAMNT</th>
         <th>DFPD_RMRK</th>
         <th>DFPD_DEFRAMNT</th>
         <th>DFPD_REFRID</th>
         <th>DFPD_STATUS</th>
         
         <!-- <th>OKYD_PRCSID</th>
            <th>OKYD_ACTIVITYID</th>
            <th>OKYD_DTCREATED</th>
            <th>OKYD_CREATEDBY</th>
            <th>OKYD_DTMODIFIED</th>
            <th>OKYD_MODIFIEDBY</th> -->
      </thead>
   </table>
   <!-- END -->
</div>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/DocCheckList/Script/LoadSubmit/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/UCV/DocCheckList/Script/Validation/Validation.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>