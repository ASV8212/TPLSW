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
	  <ul title="Loan" data-popup="No" data-aria="LSW_TLOANDETAILS|LODE|" class="nav FormPageMultiTab">     
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
      <div class="card CardNS">
	  </br>
         <!--<span class="HyperControls FltRight">
            <a onclick="ChkLonCnt();" class="Btxt4 ADDBTN FltRight" href="#">+Add &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
            <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> --
         </span>
         <div class="DynamicPageGrid" data-val="PROPTXTHDR|Employment" id="LoanDetail">-->
            <div class="card-body px-lg-5 pt-0 BSbrd DYNROW" >
               <form>
                  <input type="text" id="LODE_PRCSID" hidden="hidden" name="LODE_PRCSID" class="form-control LODEDBfields">
                  <input type="text" id="LODE_ACTIVITYID" hidden="hidden" name="LODE_ACTIVITYID" class="form-control LODEDBfields">
                  <input type="text" id="LODE_CREATEDBY" hidden="hidden" name="LODE_CREATEDBY" class="form-control LODEDBfields"> 
                  <input type="text" id="LODE_DTCREATED" hidden="hidden" name="LODE_DTCREATED" class="form-control LODEDBfields">
                  <input type="text" id="LODE_MODIFIEDBY" hidden="hidden" name="LODE_MODIFIEDBY" class="form-control LODEDBfields">
                  <input type="text" id="LODE_DTMODIFIED" hidden="hidden" name="LODE_DTMODIFIED" class="form-control LODEDBfields">
                  <input type="text" id="LODE_SCHEMEID" hidden="hidden" name="LODE_SCHEMEID" class="form-control LODEDBfields">
                  <input type="text" id="LODE_CONECTID" hidden="hidden" name="LODE_CONECTID" class="form-control LODEDBfields">
                 <input type="text" id="LODE_LOANID" hidden="hidden" name="LODE_LOANID" class="form-control LODEDBfields">
				 <input type="text" id="LODE_PRODUCTNAME" hidden="hidden" name="LODE_PRODUCTNAME" class="form-control LODEDBfields">
				 <input type="text" id="LODE_TYPE" hidden="hidden" name="LODE_TYPE" class="form-control LODEDBfields">
				</br>
                  <div class="form-row">
                     <div class="col Btxt3">Enter Loan Details</div>
                  </div>
				  </br>
		          <div class="form-row DLTICON" style="">
                     <div class="col ">
                        <div class="FltRight DELBTNTXT">
                           Delete Loan Details
                         <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="LODE_PRCSID|LODE_LOANID|Loan Details" class="DELBTN DELETETAP DELETELONDETL">
                        </div>    
                    </div>     
                  </div>
                  </br>
                  <div class="form-row">
                     <div class="col-md-6">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary  LODEDBfields LODEMndtry" disabled onchange="CheckSource();CheckDirect();"  id="LODE_SOURCBY" name="LODE_SOURCBY">
                           </select>
                           <label class="mdb-main-label BTxt9">Source by<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
					 <div class="col-md-6 SOUDIR">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LODEDBfields DataToFld" disabled data-change="LODE_CONECTID" searchable="Search here.." id="LODE_CONECTNAME" name="LODE_CONECTNAME">
				</select>
                    <label class="mdb-main-label BTxt9" >Source Name <span class="MndtryAstr">*</span> </label>
                  </div>
                </div>
				</div>
				<div class="form-row">
                     <div class="col-md-6">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary  LODEDBfields LODEMndtry"  onchange="GetNaturProduct(this,'LODE_PRODUCT');CheckLIMITDTLS();getSchemeDetails1('Page'); getanchor();"  id="LODE_LONTYPE" name="LODE_LONTYPE">
                           </select>
                           <label class="mdb-main-label BTxt9"> Loan Type<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
					  <div class="col-md-6">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary LODEDBfields LODEMndtry DataToFld"  data-change="LODE_PRODUCTNAME" onchange="Chkproduct(); GetSecUnsec(); getSchemeDetails1('Page'); Chksecunsec(); HandlePropDtl();" onblur='chkstpflow();' id="LODE_PRODUCT" name="LODE_PRODUCT">
                           </select>
                           <label class="mdb-main-label BTxt9">Product<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
                  </div>
				  <!--onchange="Chkproduct();"-->
                  <div class="form-row">
                    
                     <div class="col-md-6">
                        <div class="md-form">
                           <div id="PRO" class="select-radio ">
                              <div 
							  class="custom-control custom-radio custom-control-inline">
                                 <input type="radio" class="custom-control-input LODEDBfields SERDISB SECUR" onchange="HandlePropDtl(); Chksecunsec();"  value="Secured" id="PrePerRes" name="LODE_SECURED">
                                 <label class="custom-control-label" for="PrePerRes">Secured</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline ">
                                 <input type="radio" class="custom-control-input LODEDBfields UNSERDISB   SECUR" onchange="HandlePropDtl(); Chksecunsec();  "  value="Unsecured" id="PreCurRes" name="LODE_SECURED">
                                 <label class="custom-control-label" for="PreCurRes">Unsecured</label>
                              </div>
							  <div class="custom-control custom-radio custom-control-inline ">
                                 <input type="radio" class="custom-control-input LODEDBfields PARSERDISB SECUR" onchange="HandlePropDtl(); Chksecunsec();"  value="PartiallySecured" id="PreRes" name="LODE_SECURED">
                                 <label class="custom-control-label" for="PreRes">Partially Secured</label>
                              </div>
                           </div>
                        </div>
                     </div>
					  <div class="col-md-6">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary LODEDBfields LODEMndtry DataToFld" onchange="" id="LODE_LONPURP" name="LODE_LONPURP">
                             <!-- <option value="" selected>--Select--</option>-->
                              <option value="Loan Against Machinery">Loan Against Machinery</option>
                              <option value="Loan Against Property">Loan Against Property</option>
                              <option value="Working Capital Demand Loan">Working Capital Demand Loan</option>
							  <option value="Working Capital">Working Capital</option>							  
							  <option value="Business">Business</option>
							  
                           </select>
                           <label class="mdb-main-label BTxt9">Purpose of Loan<span class="MndtryAstr">*</span> </label> 
                        </div>
                     </div>
                  </div>
				  <div class="form-row">
                     <div class="col-md-6">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary LODEDBfields LODEMndtry DataToFld"  id="LODE_SUBLONPURP" name="LODE_SUBLONPURP">
                              <!--<option value="" selected>--Select--</option>
                              <option value="Education">Education</option>
                              <option value="Vehicle">Vehicle</option>
                              <option value="Home">Home</option>
							  <option value="Business">Business</option>-->
							  
                           </select>
                           <label class="mdb-main-label BTxt9"> Sub Loan Purpose <span class="MndtryAstr">*</span> </label> 
                        </div>
                     </div>
					 <div class="col-md-6 NEWPROD"><!--getReqROI('LODE_SCHEME','');-->
                        <div class="md-form">
                            <select class="md-form colorful-select dropdown-primary  LODEDBfields LODEMndtry" onchange="  GetScheme('LODE_SCHEME','LODE_LOANID','LODE_SCHEMEID'); CheckAmt(); CheckTenor(); CheckRoi();ChkCam();CheckDemand();"   id="LODE_SCHEME" name="LODE_SCHEME">
						    </select>
                           <label class="mdb-main-label NLIP BTxt9">Scheme <span class="MndtryAstr">*</span></label>
                         </div>
                     </div>
                  </div>
				  <div class="form-row">
				  <div class="col-md-6">
                        <div class="md-form"><!--onchange="CheckAmount();"-->
                           <input type="text" id="LODE_REQLONAMT"  maxlength="30" onchange="CheckAmt();CheckDemand();AmountGst(); ChkCam();" onblur="chkstpflow();" class="form-control IsCURCommaFields LODEDBfields NoSpecialChar LODEMndtry" name="LODE_REQLONAMT">
                           <label for="LODE_REQLONAMT" class="">Requested Loan Amount (Rs.) <span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-form"><!--onblur="RequestTenure('LODE_REQTENUR')"-->
                           <input type="text" id="LODE_REQTENUR" name="LODE_REQTENUR" maxlength="3"  onchange="CheckTenor(); ChkCam();"  class="form-control NoSpecialChar IsNumberFields LODEDBfields LODEMndtry">
                           <label for="LODE_REQTENUR" class="">Requested Tenure (In Months)<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
                  </div>
				 <div class="form-row">
				  <div class="col-md-6">
                        <div class="md-form">
                           <input type="text" id="LODE_REGINTSRAT" maxlength="5" onchange="CheckRoi(); ChkCam();" name="LODE_REGINTSRAT" class="form-control NoSpecialChar IsPercentageSPL IsNumberFields LODEDBfields LODEMndtry">
                           <label for="LODE_REGINTSRAT" class="">Requested Interest Rate <span class="MndtryAstr">*</span> </label>
                        </div>
                     </div>
				  <div class="col-md-6 MORAT ">
                        <div class="md-form">
                           <input type="text" id="LODE_Moratoritm" maxlength="5" onchange="ChkROI();" class="form-control IsNumberFields MORT LODEDBfields NoSpecialChar LODEMndtry DataNormal" name="LODE_Moratoritm" title="">
                           <label for="LODE_Moratoritm" class="" >Moratorium (In Months)<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
                  </div>
				  <div class="form-row LMTREDUCE"> 
					  <div class="col-md-6  ">
                        <div class="md-form">
                           <div id="PRO"  class="select-radio ">
                              <div 
							  class="custom-control custom-radio custom-control-inline">
                                 <input type="radio" class="custom-control-input LODEDBfields " onclick="CheckREDUCE(this.id);" value="Percentage" id="DLODTYPEPER" name="LODE_DLODTYPE">
                                 <label class="custom-control-label" for="DLODTYPEPER">Percentage</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline ">
                                 <input type="radio" class="custom-control-input LODEDBfields " onclick="CheckREDUCE(this.id);" value="Amount" id="DLODTYPEAMT" name="LODE_DLODTYPE">
                                 <label class="custom-control-label" for="DLODTYPEAMT">Amount</label>
                              </div>
						  </div>
						    <label class="mdb-main-label BTxt9">Reduce from limit <span class="MndtryAstr">*</span></label>      
                        </div>
                     </div>
					 <div class="col-md-6 LMTREDUCEPER LMTPER">
                        <div class="md-form">
                           <input type="text" id="LODE_LIMITREDUCE" maxlength="5" class="form-control IsPercentageSPL LMTRED LODEDBfields NoSpecialChar"  name="LODE_LIMITREDUCE" title="">
                           <label for="LODE_LIMITREDUCE" class="">% of Limit to reduce<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
				   </div>
                  <div class="form-row">
				     <div class="col-md-6 LMTREDUCEAMT  LMTAMT" >
                        <div class="md-form">
                           <input type="text" id="LODE_DLODAMOUNT" maxlength="" class="form-control IsCURCommaFields IsNumberFields NoSpecialChar AMTRED CHKH LODEDBfields NoSpecialChar"  onchange="CheckLONAMT(this.id);" name="LODE_DLODAMOUNT" title="">
                           <label for="LODE_DLODAMOUNT" class="">Amount to reduce<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
                     <div class="col-md-6 ">
                        <div class="md-form">
                           <input type="text" id="LODE_Exist" maxlength="60" onchange="CheckExp();" class="form-control IsCURCommaFields LODEMndtry LODEDBfields NoSpecialChar  DataNormal" name="LODE_Exist" title="">
                           <label for="LODE_Exist" class="" >Existing exposure<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
                  </div>
                  
				  <div class="form-row">  
				  <div class="col-md-6">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary LODEDBfields LODEMndtry DataToFld" onchange="CheckStepFld('LODE_REPAYMENT','LODE_STEPUPDWNPRD','LODE_SETPUPDWNAMT')" id="LODE_REPAYMENT" name="LODE_REPAYMENT">
                           </select>
                           <label class="mdb-main-label BTxt9">Type of Repayment<span class="MndtryAstr">*</span> </label> 
                        </div>
                     </div>
				    <div class="col-md-6 FREQ">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary LODEDBfields  LODEMndtry DataToFld"   id="LODE_FREQUENCY" name="LODE_FREQUENCY">
                           </select>
                           <label class="mdb-main-label BTxt9"> Frequency <span class="MndtryAstr">*</span> </label> 
                        </div>
                     </div>
				  </div>
				  <div class="form-row STEPFLD"> 
				   <div class="col-md-6">
				      <div class="md-form">
				         <input type="text" id="LODE_STEPUPDWNPRD" maxlength="5" class="form-control IsNumberFields LODEDBfields NoSpecialChar" name="LODE_STEPUPDWNPRD" title="">
                         <label for="LODE_STEPUPDWNPRD" class="">Stepup or Step Down period<span class="MndtryAstr">*</span></label>
                      </div>
                   </div>
				   <div class="col-md-6">
                        <div class="md-form">
                           <input type="text" id="LODE_SETPUPDWNAMT" maxlength="15" class="form-control IsCURCommaFields LODEDBfields NoSpecialChar" name="LODE_SETPUPDWNAMT" title="">
                           <label class="" for="LODE_SETPUPDWNAMT">Stepup or Step Down Amount<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
				  </div>
				  <div class="form-row USAN" style="display:none">
					<div class="col-md-6">
				      <div class="md-form">
				         <input type="text" id="LODE_USANCEPRD" onchange="Chkusance();" maxlength="3" class="form-control IsNumberFields LODEDBfields NoSpecialChar" name="LODE_USANCEPRD" title="">
                         <label for="LODE_USANCEPRD" class="">Usance period (in days)<span class="MndtryAstr"></span></label>
                      </div>
                   </div>
				   	<div class="col-md-6">
				      <div class="md-form">
				         <input type="text" id="LODE_GRACEPRD"  maxlength="3" class="form-control IsNumberFields LODEDBfields NoSpecialChar" name="LODE_GRACEPRD" title="">
                         <label for="LODE_GRACEPRD" class="">Grace Period<span class="MndtryAstr"></span></label>
                      </div>
                   </div>
			
				  </div>
				  
				<div class="form-row USAN" style="display:none">
				   	<div class="col-md-6">
				      <div class="md-form">
				         <input type="text" id="LODE_PENALPRD"  maxlength="3" class="form-control IsNumberFields LODEDBfields NoSpecialChar" name="LODE_PENALPRD" title="">
                         <label for="LODE_PENALPRD" class="">Penal Charges<span class="MndtryAstr"></span></label>
                      </div>
					</div>
					<div class="col-md-6">
				      <div class="md-form">
				         <input type="text" id="LODE_MARGIN"  maxlength="3" class="form-control IsNumberFields LODEDBfields NoSpecialChar" name="LODE_MARGIN" title="">
                         <label for="LODE_MARGIN" class="">Margin<span class="MndtryAstr"></span></label>
                      </div>
					</div>
				</div>
				<div class="form-row USAN" style="display:none">
					<div class="col-md-6">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary LODEDBfields  DataToFld" onchange="" id="LODE_REPAYBY" name="LODE_REPAYBY">
                             <option value="" selected>--Select--</option>
                              <option value="Anchor">Anchor</option>
							  <option value="Borrower">Borrower</option>					  
                           </select>
                           <label class="mdb-main-label BTxt9">Repayment by<span class="MndtryAstr"></span> </label> 
                        </div>
                    </div>
				   <div class="col-md-6">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary LODEDBfields  DataToFld" onchange="" id="LODE_DISBURSETO" name="LODE_DISBURSETO">
                             <option value="" selected>--Select--</option>
                              <option value="Anchor">Anchor</option>
							  <option value="Borrower">Borrower</option>					  
                           </select>
                           <label class="mdb-main-label BTxt9">Disbursement to<span class="MndtryAstr"></span> </label> 
                        </div>
                     </div>					 
				</div>
				  
				    <div class="form-row">
                     <div class="col-md-6">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary LODEDBfields"  onchange="CheckCredit();" id="LODE_CREDITSHILD" name="LODE_CREDITSHILD">
                              <option value="" selected>--Select--</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                          </select>
                           <label class="mdb-main-label BTxt9">Credit Shield applicable<span class="MndtryAstr"></span> </label> 
                        </div>
                     </div>
				     <div class="col-md-6  CRDPRE" style="display:none">
                        <div class="md-form">
                           <input type="text" id="LODE_CREDITPREMIUM" name="LODE_CREDITPREMIUM" maxlength="30"  class="form-control IsCURCommaFields LODEDBfields NoSpecialChar  LODEDBfields ">
                           <label for="LODE_CREDITPREMIUM" class="">Premium<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
 
					 <div class="col-md-6 ALIANCE">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary  LODEDBfields "   id="LODE_ANCHORNAME" name="LODE_ANCHORNAME">
                           </select>
                           <label class="mdb-main-label BTxt9">Anchor Name<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
                  </div>
				  <div class="form-row">
				  <div class="md-form">
                           <div id="flowtype" class="select-radio LODEMndtry ">
                              <div class="custom-control custom-radio custom-control-inline">
                                 <input type="radio" class="custom-control-input LODEDBfields " disabled  value="Yes" id="FLOWTYPEYES" name="LODE_FLOWTYP">
                                 <label class="custom-control-label" for="FLOWTYPEYES">STP</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline LODEDBfields">
                                 <input type="radio" class="custom-control-input LODEDBfields " disabled value="No" id="FLOWTYPENO" name="LODE_FLOWTYP">
                                 <label class="custom-control-label" for="FLOWTYPENO">BAU</label>
                              </div>
                           </div>
                           <label class="mdb-main-label BTxt9">Flow Type<span class="MndtryAstr">*</span></label>      
                        </div>
				  </div>
	
				  
                  <!--<div class="form-row">
                     <div class="col-md-6">
                           <div class="md-form">
                           <select class="mdb-select md-form colorful-select dropdown-primary LODEDBfields LODEMndtry" onchange="GetSubloanPurpose('LODE_LONPURP','LODE_SUBLONPURP')"  id="LODE_LONPURP" name="LODE_LONPURP">
                           	<!--<option value="">--Select--</option>
                     <option value="Business Use">Business Use</option>
                     <option value="Balance Transfer">Balance Transfer</option>-->
                  <!--  </select>
                     <label class="mdb-main-label BTxt9">Loan Purpose <span class="MndtryAstr">*</span> </label>
                              </div>
                                 </div> 
                                --> 
                  <!-- -->
                  <!-- -->
				  <div class="form-row">
        	         <div class="col Btxt3">Processing fees collection</div>
                 </div>
                  <div class="form-row">
                    <div class="col-md-6">
                        <div class="md-form">
                           <input type="text" id="LODE_DEMANDamt" name="LODE_DEMANDamt" maxlength="30" onchange="AmountGst();"  class="form-control CONP IsCURCommaFields LODEDBfields NoSpecialChar LODEMndtry LODEDBfields ">
                           <label for="LODE_DEMANDamt" class="">Demand amount (rs) <span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-form">
                           <div id="COLLECTION TYPE" class="select-radio LODEMndtry ">
                              <div class="custom-control custom-radio custom-control-inline">
                                 <input type="radio" class="custom-control-input LODEDBfields CONP" disabled onclick="chkupfrnt('LODE_LONTYPE','LODE_PRODUCT')" value="Upfront" id="up" name="LODE_COLLECTIONTYPE">
                                 <label class="custom-control-label" for="up">Upfront</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline LODEDBfields">
                                 <input type="radio" class="custom-control-input LODEDBfields CONP" onclick="chkupfrnt('LODE_LONTYPE','LODE_PRODUCT')" value="Later" id="La" name="LODE_COLLECTIONTYPE">
                                 <label class="custom-control-label" for="La">Later</label>
                              </div>
                           </div>
                           <label class="mdb-main-label BTxt9">Collection Type<span class="MndtryAstr">*</span></label>      
                        </div>
                     </div>
                  </div>
                  <!--<h5>Collcetion type<h5>
                     <div class="form-row">
                     <div class="col"> -->
                  <!--  <div class="col-md-3">
                     <div class="md-form  MNST">       
                       <div class="select-radio INDIMNDRY "> 
                         <div class="custom-control custom-radio custom-control-inline">
                     	  <input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCuType();" value="Individua" id="Indvd" name="LPOP_CUSTYE">
                          <label class="custom-control-label" for="Indvdl">Upfront</label>
                         </div> 
                     	   </div>
                     	   </div>
                     	   </div>
                     	   
                     	   <div class="col-md-3">
                     	   <div class="md-form  MNST">
                                 <div class="select-radio INDIMNDRY "> 
                                     <div class="custom-control custom-radio custom-control-inline">
                                           <input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCuType();" value="Non-Individua" id="NonIndvd" name="LPOP_CUSTYE">
                                           <label class="custom-control-label" for="NonIndvdl">Later</label>
                
                     		   </div>
                     			</div>
                     			</div>
                     		</div>
                                              </div>  -->
                  <!--      <div class="col-md-2">
                     <div class="md-form  MNST">
                        <div class="select-radio INDIMNDRY "> 
                             <div class="custom-control custom-radio custom-control-inline">
                                  <input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCusType();" value="Individual" id="Indvdl" name="LPOP_CUSTYPE">
                                  <label class="custom-control-label" for="Indvdl">Upfront</label>
                            </div>
                     </div>
                                <label class="mdb-main-label BTxt9">Collection Type <span class="MndtryAstr">*</span></label>
                     </div>
                     </div>
                    
                     <div class="col-md-2">
                         
                     <div class="md-form  MNST">
                        <div class="select-radio INDIMNDRY "> 
                            <div class="custom-control custom-radio custom-control-inline">
                                  <input type="radio" class="custom-control-input LPOPDBfields" onclick="CheckCusType();" value="Non-Individual" id="NonIndvdl" name="LPOP_CUSTYPE">
                                  <label class="custom-control-label" for="NonIndvdl">Later</label>
                         
                     </div>
                       </div>
                            
                     </div>
                     
                         </div>
                     
                     </div>   
                          -->
                  <!--  <label for="TEST_STATUS" class="mdb-main-label BTxt9"> Mode  <span class="MndtryAstr">*</span> </label> -->
                    <div class="form-row">
                       <div class="col-md-6 MODE">
                          <div class="md-form">
                           <div id="MODE" class="select-radio EMPI">
                              <div class="custom-control custom-radio custom-control-inline">
                                 <input type="radio" class="custom-control-input LODEDBfields CONP" onchange="CHKCHANGE();" value="Cheque" id="che" name="LODE_Mode">
                                 <label class="custom-control-label" for="che">Cheque</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline LODEDBfields">
                                 <input type="radio" class="custom-control-input LODEDBfields CONP" onchange="CHKCHANGE();" value="Online" id="Onl" name="LODE_Mode">
                                 <label class="custom-control-label" for="Onl">Online</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline LODEDBfields ">
                                 <input type="radio" class="custom-control-input LODEDBfields CONP" onchange="CHKCHANGE();" value="DD" id="D" name="LODE_Mode">
                                 <label class="custom-control-label" for="D">DD</label>
                              </div>
                           </div>
                           <label class="mdb-main-label BTxt9">Mode<span class="MndtryAstr">*</span></label>      
                        </div>
                     </div>
                     <div class="col-md-6 ">
                        <div class="md-form">
                           <input type="text" id="LODE_AMT" maxlength="60" onchange="ChkDmtamt();" disabled class="form-control CONP IsCURCommaFields LODEDBfields NoSpecialChar LODEMndtry DataNormal" name="LODE_AMT" title="">
                           <label for="LODE_AMT" class="">Amount (INCL GST)(in Rs)<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
				   </div>
				   <button type="button" style="display:none" class="btn CollectedPage  waves-effect btn-yelInplain btn-sm BTNVerify">CollectedPage</button>
				   <div class="form-row OnlineBtn" style="display:none">
				   <div class="col-md-3">
                     <div class="md-form">
					 
                         <button type="button" id="Collected" onclick="AutomPaym('LODE_LOANID','LODE_DEMANDamt','LODE_AMT','Loan')" class="btn btn-yel BTNHIDE Btxt2">Initiate Payment</button>
                      </div>
           		    </div>
				   </div>
				   <div class="form-row PAYONLINE" style="display:none">
					 <div class="col-md-6 " >
                        <div class="md-form">
                           <input type="text" id="LODE_ONREFNUMBER" maxlength="60" disabled class="form-control LODEDBfields NoSpecialChar DataNormal" name="LODE_ONREFNUMBER" title="">
                           <label for="LODE_ONREFNUMBER" class="CHANGEFLDL" >Reference Number<span class="MndtryAstr"></span></label>
                        </div>
                     </div>
					 <div class="col-md-6">
						<div class="md-form">
                           <input type="text" id="LODE_ONTRANSDATE" name="LODE_ONTRANSDATE" disabled maxlength="10" class="form-control LODEDBfields IsNumberFields NoSpecialChar ISDatefield">
                           <label for="LODE_ONTRANSDATE" class="CHANGEFLDL">Transaction Date<span class="MndtryAstr">*</span></label>
                           <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker" style="display:none" />
                        </div>
                   </div>
                  </div>
				   <div class="form-row CHANGE">
					 <div class="col-md-6 " >
                        <div class="md-form">
                           <input type="text" id="LODE_NUMB" maxlength="6"  class="form-control  LODEDBfields NoSpecialChar IsNumberFields Chkinsnum CHANGEFLD DataNormal" name="LODE_NUMB" title="">
                           <label for="LODE_NUMB" class="CHANGEFLDL" >Instrument Number<span class="MndtryAstr"></span></label>
                        </div>
                     </div>
					 <div class="col-md-6">
						<div class="md-form">
                           <input type="text" id="LODE_INSTRUMNTDT" name="LODE_INSTRUMNTDT" onblur="INSTRUMENTDATE('LODE_INSTRUMNTDT')"  maxlength="10" class="form-control ISFutureDateFields LODEDBfields CHANGEFLD IsNumberFields NoSpecialChar ISDatefield">
                           <label for="LODE_INSTRUMNTDT" class="CHANGEFLDL">Instrument Date<span class="MndtryAstr">*</span></label>
                           <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                        </div>
                   </div>
                  </div>
				   <div class="form-row CHANGE">
				       <div class="col-md-6">
            	           <div class="md-form">
                  	         <input type="text" id="LODE_IFSC" onblur="Ifscdetls(this,'LODE_BANK','LODE_BRANCH','','')" name="LODE_IFSC" class="form-control CHANGEFLD IsIFSCFields NoSpecialChar LODEDBfields">
                             <label for="LODE_IFSC" class="CHANGEFLDL">IFSC <span class="MndtryAstr">*</span></label>
                          </div>
                     </div>
				     <div class="col-md-6" >
                        <div class="md-form">
                           <input type="text" id="LODE_BANK" maxlength="60" class="form-control  LODEDBfields NoSpecialChar CHANGEFLD DataNormal" disabled name="LODE_BANK" title="">
                           <label for="LODE_BANK" class="CHANGEFLDL">Bank<span class="MndtryAstr"></span></label>
                        </div>
                     </div>
				</div>
                <div class="form-row CHANGE">
                    <div class="col-md-6">
						<div class="md-form">
                           <input type="text" id="LODE_BRANCH" maxlength="60" class="form-control LODEDBfields CHANGEFLD DataNormal" disabled name="LODE_BRANCH" title="">
                           <label for="LODE_BRANCH" class="CHANGEFLDL">Branch<span class="MndtryAstr"></span></label>
                        </div>
					</div>
                </div>   
					 						<!--<div class="md-form">
							<select class=" md-form colorful-select dropdown-primary LODEDBfields DataToFld" onchange="" searchable="Search here.."   id="LODE_BRANCH" name="LODE_BRANCH">
								<option value="" selected>--Select--</option>                  
							</select>
                        <label  class="mdb-main-label BTxt9">Branch <span class="MndtryAstr"></span></label>
						</div>-->
				 
				<!--  <div class="form-row">
				  <div class="col-md-6 ">
                        <div class="md-form">
                           <input type="text" id="LODE_Moratoritm" maxlength="60" class="form-control IsCURCommaFields LODEDBfields NoSpecialChar LODEMndtry DataNormal" name="LODE_Moratoritm" title="">
                           <label class="mdb-main-label BTxt9">Moratorium <span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary LODEDBfields LODEMndtry DataToFld" onchange="CheckStepFld($(this).closest('.DYNROW'),'LODE_REPAYMENT'+$(this).closest('.DYNROW').attr('data-row'),'LODE_STEPUPDWNPRD'+$(this).closest('.DYNROW').attr('data-row'),'LODE_SETPUPDWNAMT'+$(this).closest('.DYNROW').attr('data-row'))" id="LODE_REPAYMENT" name="LODE_REPAYMENT">
                           </select>
                           <label class="mdb-main-label BTxt9">Type of Repayment<span class="MndtryAstr">*</span> </label> 
                        </div>
                     </div>
                  </div>
				  <div class="form-row">  
				    <div class="col-md-6">
                        <div class="md-form">
                           <select class="md-form colorful-select dropdown-primary LODEDBfields LODEMndtry DataToFld"   id="LODE_FREQUENCY" name="LODE_FREQUENCY">
                           </select>
                           <label class="mdb-main-label BTxt9"> Frequency <span class="MndtryAstr">*</span> </label> 
                        </div>
                     </div>
					  <div class="col-md-6 STEPFLD">
						<div class="md-form">
                    <input type="text" id="LODE_STEPUPDWNPRD" name="LODE_STEPUPDWNPRD" maxlength="10" class="form-control LODEDBfields IsNumberFields NoSpecialChar INDM ISDatefield">
                    <label for="LODE_STEPUPDWNPRD" class="">Stepup or Step Down period<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
                  </div>
                     </div>
				  </div>
				  <div class="form-row STEPFLD"> 
				   <div class="col-md-6">
                        <div class="md-form">
                           <input type="text" id="LODE_SETPUPDWNAMT" maxlength="15" class="form-control IsCURCommaFields LODEDBfields NoSpecialChar" name="LODE_SETPUPDWNAMT" title="">
                           <label class="" for="LODE_SETPUPDWNAMT">Stepup or Step Down Amount<span class="MndtryAstr">*</span></label>
                        </div>
                     </div>
				    </div>-->
				  <!----------- -->
                  <!-- <div class="col-md-6  SUBLON">
                     <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LODEDBfields" id="LODE_SUBLONPURP" name="LODE_SUBLONPURP" >
                     	<option value="">--Select--</option>
                     </select>
                     <label class="mdb-main-label BTxt9">Sub Loan Purpose <span class="MndtryAstr">*</span> </label>
                     </div>
                     </div>
                     </div> -->
                  <!-- <div class="form-row">
                     <div class="col-md-6">
                         <div class="md-form">
                         <select class="mdb-select md-form colorful-select dropdown-primary LODEDBfields"  disabled id="LODE_PRODUCT" name="LODE_PRODUCT">
                            
                         </select>
                               <label class="mdb-main-label BTxt9">Product<span class="MndtryAstr"></span></label>
                       </div>
                       </div> -->
                  <!--   <div class="col-md-6 INTESYR">
                     <div class="md-form">
                        <input type="text" id="LODE_INTERESTYR" maxlength="1" onblur="CheckIntestYr()"  name="LODE_INTERESTYR" class="form-control NoSpecialChar IsNumberFields LODEDBfields ">
                        <label for="LODE_INTERESTYR" class="">Interest Year<span class="MndtryAstr">*</span> </label>
                     </div>
                     </div>
                 
					</div> -->
                  </br>
				  </br>
                  <div class="form-row">
                     <div class="col d-flex justify-content-center">
                        <button type="button" id="Save" data-aria="LSW_TLOANDETAILS|LODE|LODE_LOANID" class="btn btn-Syeloutline waves-effect waves-light Save FormSave">Save</button>   
                        <button type="button" data-aria="LSW_TLOANDETAILS|LODE|LODE_LOANID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                     </div>
                  </div>
            </div>
            </form>
         </div>
      </div>
	  
      <script type="text/javascript" src="ThemeproLO/LoanProperty/Script/LonDtls/LoadSubmit.js${DMY13}"></script>
      <script type="text/javascript" src="ThemeproLO/LoanProperty/Script/LonDtls/Validation.js${DMY13}"></script> 
   </div>
</div>
<!--   </div>
   </div>   -->