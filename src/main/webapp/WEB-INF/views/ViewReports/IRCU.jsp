<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%@ page import = "ckeditor.EditData" %>
<%@page language="java" import="java.util.*" %>

<jsp:useBean id="editData" class="ckeditor.EditData" scope="session"/>
<jsp:setProperty name="editData" property="*"/>

<jsp:useBean id="engine" class="ckeditor.EditEngine" scope="session"/>
<jsp:setProperty name="engine" property="*"/>



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
      <input type="text" id="IRCM_PRCSID" hidden="hidden" name="IRCM_PRCSID" class="form-control IRCMDBfields">
      <input type="text" id="IRCM_ACTIVITYID" hidden="hidden" name="IRCM_ACTIVITYID" class="form-control IRCMDBfields">
      <input type="text" id="IRCM_DTCREATED" hidden="hidden" name="IRCM_DTCREATED" class="form-control IRCMDBfields">
      <input type="text" id="IRCM_CREATEDBY" hidden="hidden" name="IRCM_CREATEDBY" class="form-control IRCMDBfields">
      <input type="text" id="IRCM_DTMODIFIED" hidden="hidden" name="IRCM_DTMODIFIED" class="form-control IRCMDBfields">
      <input type="text" id="IRCM_MODIFIEDBY" hidden="hidden" name="IRCM_MODIFIEDBY" class="form-control IRCMDBfields">
      <input type="text" id="IRCM_KYCDOC" hidden="hidden" name="IRCM_KYCDOC" class="form-control IRCMDBfields">
      <input type="text" id="IRCM_OTHERDOC" hidden="hidden" name="IRCM_OTHERDOC" class="form-control IRCMDBfields">
      <input type="text" id="IRCM_CUSID" hidden="hidden" name="IRCM_CUSID" class="form-control IRCMDBfields">
      <input type="text" id="IRCM_BNKSTMNT" hidden="hidden" name="IRCM_BNKSTMNT" class="form-control IRCMDBfields">
      <input type="text" id="IRCM_PROPGRD" hidden="hidden" name="IRCM_PROPGRD" class="form-control IRCMDBfields">
      <input type="text" id="IRCM_QURYDTL" hidden="hidden" name="IRCM_QURYDTL" class="form-control IRCMDBfields">
      <input type="text" id="IRCM_PFDEFR" hidden="hidden" name="IRCM_PFDEFR" class="form-control IRCMDBfields">
        <input type="text" id="RCUGROUP" hidden="hidden" name="RCUGROUP" class="form-control ">
      
      
      <input type="text" id="HIDDENCOL" hidden="hidden" name="HIDDENCOL" class="form-control IRCMDBfields">
      <input type="text" id="HIDDENID" hidden="hidden" name="HIDDENID" class="form-control IRCMDBfields">
      <input type="text" id="HIDDENIPLDST" hidden="hidden" name="HIDDENIPLDST" class="form-control IRCMDBfields">
      
      <input type="text" id="HIDDENCUSTYP" hidden="hidden" name="HIDDENCUSTYP" class="form-control IRCMDBfields">
      <input type="text" id="HIDDENCONST" hidden="hidden" name="HIDDENCONST" class="form-control IRCMDBfields">
      
      <input type="text" id="HIDDENACT" hidden="hidden" name="HIDDENACT" class="form-control IRCMDBfields">
	  <input type="text" id="HIDDENSAMEADDR" hidden="hidden" name="HIDDENSAMEADDR" class="form-control IRCMDBfields">
	  
    <form class="needs-validation" novalidate>
			<input id="processId"  name="processId" type="hidden" value=""/>
			   <script type="text/javascript">
 var Prcsid=getUrlParam("PrcsID");
 document.getElementById("processId").value=Prcsid;
  </script>
<% editData.ClearMtd(); %>
<% String Prcsid=request.getParameter("PrcsID");
String TblName="LSW_tTEARCUDETAILS";
String Spname="Sam_sFetRichTxtEdt";
String AcvtID="";
String HistVar="";
editData.setTblName(TblName);
editData.setPrcsid(Prcsid); 
editData.setSpname(Spname);
editData.setAcvtID(AcvtID);
editData.setHistVar(HistVar); %>
<% editData.EditData1(); %>
</br>

</br>	  
	  
	  
	  
	  
	  
	  
	  
	<!--  
	   <div class="HyperControls" style="display:none">
         <a type="button" class="Btxt4 FltRight " id="DOWNDT" onclick="DOWNLOADALLDOC();" href="#"> Download Documents</a>
       
      </div>-->
	  
	  
	  
      <div class="HyperControls">
         <a type="button" class="Btxt4 FltRight ADDBTN" id="NewlyAddedDoc" onclick="ChecklistDropdownvalue();" data-toggle="modal" data-target="#ADDRCKYocModal" href="#">+ Add Document</a>
         <!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
      </div>
      <!--  card -->
      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
            <form >
			<div style="display:none;color:red;" class="banner">The Screen Will be Freezed untill External RCU Process Complete</div>
               </br>
               <div class="form-row">
                  <div class="col Btxt3">KYC</div>
                  <!--<div class="col Btxt14 TxtRight">Note: All the OSV needs to be done by employee only</div> -->
               </div>
               </br>
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_TRCURCKYOCUMENTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'RCKYOC',brid:$('#PrcsID').val(),MnuId:$('#IRCM_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','DocumentCheckList');" id="BTNRCKYOC" name="BTNRCKYOC" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                     </table>
                  </div>
               </div>
            </form>
         </div>
      </div>
      <!-- card -->
      <!--</br>-->
	  <div class="NGECL" style="display:none">
      <!--  card -->
     <!-- <div class="card cardNS PropertyDocuments">
         
         <div class="card-body px-lg-5 pt-0">
            </br>
            <div class="form-row">
               <div class="col Btxt3">Property Documents</div>
            </div>
            </br>
            <div class="form-row">
               <div class="col">
                  
                  <div data-for="BankDetail2" class="BankDetail2"> 
                  </div>
                  <div class="DynamicPageGrid" data-val="PROPTXTHDR|Property" id="BankDetail2" style="display:none">
                     <div class="  BSbrd DYNROW">
                        
                        <form>
                           <input type="text" id="RPRD_PRCSID" hidden="hidden" name="RPRD_PRCSID" class="form-control RPRDDBfields">
                           <input type="text" id="RPRD_ACTIVITYID" hidden="hidden" name="RPRD_ACTIVITYID" class="form-control RPRDDBfields">
                           <input type="text" id="RPRD_CREATEDBY" hidden="hidden" name="RPRD_CREATEDBY" class="form-control RPRDDBfields">
                           <input type="text" id="RPRD_DTCREATED" hidden="hidden" name="RPRD_DTCREATED" class="form-control RPRDDBfields">
                           <input type="text" id="RPRD_MODIFIEDBY" hidden="hidden" name="RPRD_MODIFIEDBY" class="form-control RPRDDBfields">
                           <input type="text" id="RPRD_DTMODIFIED" hidden="hidden"  name="RPRD_DTMODIFIED" class="form-control RPRDDBfields">
                           <input type="text" id="RPRD_CUSID"  name="RPRD_CUSID" hidden="hidden"  class="form-control RPRDDBfields" value="">
                           <input type="text" id="RPRD_PROPID"  name="RPRD_PROPID" hidden="hidden"  class="form-control RPRDDBfields" value="">
                           </br>
                           <div class="form-row">
                              <div id="PROPTXTHDR" class="col Btxt10"></div>
                           </div>
                           <div class="form-row">
                              <div class="col-md-6">
                                 <div class="md-form">
                                    <select class="mdb-select md-form colorful-select dropdown-primary RPRDMndtry RPRDDBfields" disabled=disabled onchange="CheckProStatus();" id="RPRD_PROPSTATUS" name="RPRD_PROPSTATUS" >
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
                           <input type="checkbox" class="custom-control-input RPRDDBfields VRFY1" data-quey-sec="S03" id="RPRD_PROVERIFY" name="RPRD_PROVERIFY">
                           <label class="custom-control-label" for="RPRD_PROVERIFY">Verify</label>
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
                    <input type="hidden" id="RPRD_REMRK"  name="RPRD_REMRK" disabled class="form-control DSVLBL form-control    RPRDDBfields ">
                    </div>
                  </div>
                           <!--    <div class="col">
                                 <div class="md-form">
                                    <div class="custom-control custom-radio custom-control-inline">
                                       <input type="checkbox" class="custom-control-input RPRDDBfields" id="RPRD_PROPOSV" name="RPRD_PROPOSV">
                                       <label class="custom-control-label" for="RPRD_PROPOSV">OSV</label>
                                    </div>
                                 </div>
                              </div> 
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
							<div id="RPRD_PROPERTYDOCUPLOAD"  class="file-field" >
								 
							<input type="text" id="RPRD_PROPERTYDOC" data-val="Upload Document"    data-Validate="RPRD_PROPERTYDOC"  name="RPRD_PROPERTYDOC" class="form-control voter File RPRDDBfields">
							
							</div>
							</td>
							</tr></table>
							</div>    
							</div>  
							<div class="md-form">
							  <span class="name1">&nbsp;&nbsp;&nbsp;Property Document</span> 
							<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW"  class="rounded" onclick="GrdDocDwnld('RPRD_PROPERTYDOC1')" alt="Cinque Terre" width="35" height="25"> </div>
							</div>
							</div>  
							</div>
							
							 <div class="col-md-6">
                                 <div class="md-form">
                                    <select class="mdb-select md-form colorful-select dropdown-primary RPRDMndtry RPRDDBfields" onchange="CheckRCUINTI();" id="RPRD_RCUSTATUS" name="RPRD_RCUSTATUS" >
                                       <option value="">Select</option>
                                      <option value="Query">Query</option>
                                      <option value="Not Screened">Not Screened</option>
									  <option  value="Screened" >Screened</option>
									 <option value="Sample Initiated">Sample Initiated</option>
									 <option  value="Sampled" >Sampled</option>
                                    </select>
                                    <label class="mdb-main-label BTxt9">RCU Status<span class="MndtryAstr">*</span></label>
                                 </div>
                              </div>
							  
							  
							  
							</div>
					<div class="form-row">
						<div class="col-md-6">
						
                              <div class="md-form">
                                 <input type="text" id="RPRD_PROPREMARK"  name="RPRD_PROPREMARK" class="form-control RPRDDBfields ">
                                 <label for="RPRD_PROPREMARK" class="">Remark<span class="MndtryAstr"></span></label>
                              </div>
                        
                       
                     </div>
					 </div>
					 </div>
					 
					 
							</div>
							  
							  
                           </div>
                        </form>
                     </div>
                  </div>
               </div>-->
            </div>
         </div>
      </div>
	  
      <!-- card -->
      <!--</br>-->
      <!--  card -->
      <!--<div class="card cardNS NBNKD"  >
         <div class="card-body px-lg-5 pt-0">
            </br>
            <div class="form-row">
               <div class="col Btxt3">Banking Statement</div>
            </div>
         </div>
         <div class="form-row">
            <div class="col">
               <div data-for="BankDetail1" class="BankDetail1"> 
               </div>
               <div class="DynamicPageGrid" data-val="PROPTXTHDR|Bank Account" id="BankDetail1" style="display:none">
                  <div class="card-body px-lg-5 pt-0  BSbrd DYNROW">
                     <form>
                        <input type="text" id="RCBK_PRCSID" hidden="hidden" name="RCBK_PRCSID" class="form-control RCBKDBfields">
                        <input type="text" id="RCBK_ACTIVITYID" hidden="hidden" name="RCBK_ACTIVITYID" class="form-control RCBKDBfields">
                        <input type="text" id="RCBK_DTCREATED" hidden="hidden" name="RCBK_DTCREATED" class="form-control RCBKDBfields">
                        <input type="text" id="RCBK_CREATEDBY" hidden="hidden" name="RCBK_CREATEDBY" class="form-control RCBKDBfields">
                        <input type="text" id="RCBK_DTMODIFIED" hidden="hidden" name="RCBK_DTMODIFIED" class="form-control RCBKDBfields">
                        <input type="text" id="RCBK_MODIFIEDBY" hidden="hidden"  name="RCBK_MODIFIEDBY" class="form-control RCBKDBfields">
                        <input type="text" id="RCBK_CUSID"  name="RCBK_CUSID" hidden="hidden"  class="form-control RCBKDBfields" value="">
                        <input type="text" id="hIDDNACT"  name="hIDDNACT" hidden="hidden"  class="form-control RCBKDBfields" value="">
                        </br>
                        <div class="form-row">
                           <div id="PROPTXTHDR" class="col Btxt10"></div>
                        </div>
                        <div class="form-row">
                           <div class="col">
                              <div class="md-form">
                                 <input type="text" id="RCBK_BNKNAME" disabled name="RCBK_BNKNAME" class="form-control RCBKDBfields ">
                                 <label for="RCBK_BNKNAME" class="">Bank Name<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
                           <div class="col">
                              <div class="md-form">
                                 <input type="text" id="RCBK_ACCNTNO" disabled name="RCBK_ACCNTNO" class="form-control RCBKDBfields ">
                                 <label for="RCBK_ACCNTNO" class="">Bank Account Number<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
                        </div>
                        <div class="form-row">
                           <div class="col-md-6">
                              <div class="md-form">
                                 <select class="md-form colorful-select dropdown-primary RCBKMndtry RCBKDBfields" disabled onchange="UpdtDefrFlg(this,'RCBK_DEFRSTUS')" id="RCBK_FINANCCOLLCT" name="RCBK_FINANCCOLLCT">
                                    <option value="">Select</option>
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
                                    <input type="checkbox" class="custom-control-input RCBKDBfields" disabled id="RCBK_FINANOSV" name="RCBK_FINANOSV">
                                    <label class="custom-control-label" for="RCBK_FINANOSV">OSV</label>
                                 </div>
                              </div>
                           </div>
                          <div class="col-md-2 CREDIT">
                     <div class="md-form">
                        <div class="custom-control custom-radio custom-control-inline">
                           <input type="checkbox" class="custom-control-input RCBKDBfields VRFY1" data-quey-sec="S02" id="RCBK_PROVERIFY" name="RCBK_PROVERIFY">
                           <label class="custom-control-label" for="RCBK_PROVERIFY">Verify</label>
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
                    <input type="hidden" id="RCBK_REMRK"  name="RCBK_REMRK" disabled class="form-control DSVLBL form-control    RCBKDBfields ">
                    </div>
                  </div> 
                        </div>
                        <div class="form-row ">
                        	<div class="col-md-6">
                        		 <div class="md-form">
	                                 <input type="text" id="RCBK_DEFRSTUS" disabled name="RCBK_DEFRSTUS" class="form-control RCBKDBfields ">
	                                 <label for="RCBK_DEFRSTUS" class="">Deferment Status<span class="MndtryAstr"></span></label>
                              </div>
                        	</div>
							
							 <div class="col-md-6">
                              <div class="md-form">
                                 <select class="md-form colorful-select dropdown-primary  RCBKDBfields RCBKMndtry" onchange="CheckRCUINTI();"  id="RCBK_RCUSTATUS" name="RCBK_RCUSTATUS">
                                    <option value="">Select</option>
                                  <option value="Query">Query</option>
                                    <option value="Not Screened">Not Screened</option>
									<option  value="Screened" >Screened</option>
									 <option value="Sample Initiated">Sample Initiated</option>
									 <option  value="Sampled" >Sampled</option>
                                 </select>
                                 <label class="mdb-main-label BTxt9">RCU Status</label>
                              </div>
                           </div>
						   
                        </div>
						
						   <div class="form-row">
                           <div class="col-md-6">
                              <div class="md-form">
                                 <input type="text" id="RCBK_BNKREMARK"  name="RCBK_BNKREMARK" class="form-control RCBKDBfields ">
                                 <label for="RCBK_BNKREMARK" class="">Remark<span class="MndtryAstr"></span></label>
                              </div>
                           </div>
                          
                        </div>
						
						
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>-->
	  
      <!-- card -->
      <!--</br>-->
      <!--  card -->
      <!--<div class="card cardNS FinancialsCollected">
         
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
                        <select class="mdb-select md-form colorful-select dropdown-primary IRCMDBfields" onchange="UpdtDefrFlg(this,'IRCM_DEFRSTUS')" id="IRCM_FINANCCOLLCT" name="IRCM_FINANCCOLLCT">
                           <option value="">Select</option>
                           <!-- <option value="Last 12 Months">Last 12 Months</option>
                           <option value="2 Years">2 Years</option>
                           <option value="5 Years">5 Years</option>
                           <option value="10 Years">10 Years</option>
                           <option value="10+ Years">10+ Years</option> 
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
                           <input type="checkbox" class="custom-control-input IRCMDBfields" id="IRCM_FINANOSV" name="IRCM_FINANOSV">
                           <label class="custom-control-label" for="IRCM_FINANOSV">OSV</label>
                        </div>
                     </div>
                      
                  </div>
                  <div class="col-md-2 CREDIT">
                     <div class="md-form">
                        <div class="custom-control custom-radio custom-control-inline">
                           <input type="checkbox" class="custom-control-input IRCMDBfields VRFY1" data-quey-sec="S04" id="IRCM_FINCVERIFY" name="IRCM_FINCVERIFY">
                          <label class="custom-control-label" for="IRCM_FINCVERIFY">Verify</label>
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
	                                 <input type="text" id="IRCM_DEFRSTUS" disabled name="IRCM_DEFRSTUS" class="form-control IRCMDBfields ">
	                                 <label for="IRCM_DEFRSTUS" class="">Deferment Status<span class="MndtryAstr"></span></label>
                              </div>
                        	</div>
                        </div>
						<div class="form-row APLNTPLVERFY " >
					<div class="col-md-6 CREDIT">
						<div class="md-form">
								<div class="custom-control custom-radio custom-control-inline">
								   <input type="checkbox" class="custom-control-input IRCMDBfields VRFY2" data-quey-sec="SSPL" id="IRCM_APLNVERFY" name="IRCM_APLNVERFY">
								  <label class="custom-control-label" for="IRCM_APLNVERFY">Ensure all Applicant and Co-Applicant datas are verified</label>
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
      </div>-->
      <!-- card -->
	
	   
							
							
							
      
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
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table3',{spname:'LSW_TRCUKYCDOCUMENTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#IRCM_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','DocumentCheckList');" id="BTNKYCOthers" name="BTNKYCOthers" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
                     </table>
                  </div>
               </div>
            </form>
       
		<!-- <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
					  <label for="" class="active Btxt3">Remark</label>
                <br>
					 <textarea class="form-control IsRmkField IRCMDBfields"   id="IRCM_REMARK" name="IRCM_REMARK" style="height: 130px;width:1200px;"></textarea>
           			</div>
           		 </div>
           </div>-->
		   </div>
		   
		   
      </div>
	  <br>
	  <div class="card cardNS">
	        <div class="card-body px-lg-5 pt-0">
			<br>
			<div class="form-row">
                  <div class="col Btxt3">Overall Verification Result</div>
               </div>
			   <br>
	  <div class="form-row">
				   	 
					  <div class="col-md-6">
                                 <div class="md-form">
                                    <select class="mdb-select md-form colorful-select dropdown-primary  IRCMMndtry  IRCMDBfields"  id="IRCM_MODE" name="IRCM_MODE" >
                                       <option value="">Select</option>
                                       <option  value="Query">Query</option>
									   <option  value="Recommended">Recommended</option>
									   <option  value="Deferral">Deferral</option>
									   <option  value="No Deferral">No Deferral</option>
									   <option  value="Not Recommended">Not Recommended</option>
									   <option  value="Failed">Failed</option>
                                    </select>
                                    <label class="mdb-main-label BTxt9">Mode<span class="MndtryAstr">*</span></label>
                                 </div>
                              </div>
							  
							</div>
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
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table4',{spname:'LSW_TRCUKYCDOCUMENTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#IRCM_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','DocumentCheckList');" id="BTNKYCOthers" name="BTNKYCOthers" />
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
			      <a onclick="AddPageMultiData('',$('#RCDQ_PRCSID').val(),'','ApproveDetail12','RCDQDBfields')" class="Btxt4 FltRight ADDBTN"  href="#">+ Add a Query</a>
			<!-- <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> -->
			      </div>
			      <div data-for="ApproveDetail12" class="ApproveDetail12"> 
                        </div>
                        <div class="DynamicPageGrid" data-val="PROPTXTHDR|QUERY" id="ApproveDetail12" style="display:none">
                        <div data-row="" class="  DYNROW">
                        <input type="text" id="RCDQ_PRCSID" hidden="hidden" name="RCDQ_PRCSID" class="form-control RCDQDBfields">
		                <input type="text" id="RCDQ_ACTIVITYID" hidden="hidden" name="RCDQ_ACTIVITYID" class="form-control RCDQDBfields">
		                <input type="text" id="RCDQ_CREATEDBY" hidden="hidden" name="RCDQ_CREATEDBY" class="form-control RCDQDBfields">
		                <input type="text" id="RCDQ_DTCREATED" hidden="hidden" name="RCDQ_DTCREATED" class="form-control RCDQDBfields">
		                <input type="text" id="RCDQ_MODIFIEDBY" hidden="hidden"  name="RCDQ_MODIFIEDBY" class="form-control RCDQDBfields">
		                <input type="text" id="RCDQ_DTMODIFIED" hidden="hidden"  name="RCDQ_DTMODIFIED" class="form-control RCDQDBfields">
		                <input type="text" id="RCDQ_CUSID" hidden="hidden"  name="RCDQ_CUSID" class="form-control RCDQDBfields">
                        <div class="form-row">
                              <div id="PROPTXTHDR" class="col Btxt10"></div>
                           </div>
                            <div class="form-row">
                                 <div class=" col-md-11">
                                    <div class="md-form">
                                       <input type="text" id="RCDQ_QURY"  name="RCDQ_QURY" class="form-control NoSpecialChar RCDQDBfields  ">
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
         </div>
		 
		 
		 
		 
		 
		 
		   
		   
		   
		      
          <!-- card -->
      <div class="form-row">
         <div class="col d-flex justify-content-center">
            <button type="button" id="Save4" data-aria="LSW_TIRCUDOCUMENT|IRCM|IRCM_CUSID"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
            <button type="button" id="MoveToLogin" data-aria="LSW_TIRCUDOCUMENT|IRCM|IRCM_CUSID" data-card="0" class="InitBTN btn btn-Syel waves-effect BTNDOCMVL waves-light FormSave">Move to Login</button>
            <button type="button" style="display:none;" id="SendBack" data-aria="LSW_TIRCUDOCUMENT|IRCM|IRCM_CUSID" data-card="0" class="btn btn-Syel waves-effect BTNDOCMVL waves-light FormSave">Send Back</button>
             <!--<button type="button" style="display:none;" id="Reject" data-aria="LSW_TIRCUDOCUMENT|IRCM|IRCM_CUSID" data-card="0" class="btn btn-Syel waves-effect BTNDOCMVL waves-light">Reject</button> 
             <button type="button" style="display:none;" id="ApplForm" onclick="GentrateApplicform()" data-form="CAM" data-card="0" class="btn btn-Syel waves-effect waves-light ApplForm FormSave">Application form</button> 		 
		     <button type="button" style="display:none;" id="EndUse" onclick="GentrateEndUse()" data-form="CAM" data-card="0" class="btn btn-Syel waves-effect waves-light ApplForm FormSave">End Use</button> -->
			 <button type="button" id="Forward" data-aria="LSW_TIRCUDOCUMENT|IRCM|IRCM_CUSID" id="Forward" onclick="PopFldToDrpDwn(this)" style="display:none;"  class="InitBTN btn btn-Syeloutline waves-effect waves-light FormSave  BTNINTERNAl">Initiate</button>  
			 
			 <button type="button"  data-aria="LSW_TIRCUDOCUMENT|IRCM|IRCM_CUSID" id="SUBMIT" style="display:none;"  class=" btn btn-Syeloutline waves-effect waves-light FormSave">Submit</button> 
			   
		
		</div>
      </div>
      </br>
   </div>
   <!-- Admin Panel -->
   <div class="modal fade" id="ADDRCKYocModal" tabindex="-1" role="dialog" aria-labelledby="ADDRCKYocModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" style="max-width:900px" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <div class="Btxt10">ADD DOCUMENTS</div>
               <a href="#">  <img id="ADDRCKYOCCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
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
                                    <select class="mdb-select md-form colorful-select dropdown-primary RCKYMndtry DOCU BranchOPSNotDSBL" onchange="CheckDocType();" id="DOCU_KYC" name="DOCU_KYC">
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
                                    <input type="text" id="RCKY_DOCNAME" name="RCKY_DOCNAME" data-aria="2" class="form-control NoSpecialChar BranchOPSNotDSBL RCKYMndtry PGToGRID">
                                    <label for="RCKY_DOCNAME" class="">Document Name <span class="MndtryAstr">*</span></label>
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
                                                <div id="RCKY_DOCATTACHMENTUPLOAD"  class="file-field DDU">
                                                   <a class="">
                                                   <i class="fa fa-plus imgAdd BranchOPSNotDSBL" aria-hidden=""></i>
                                                   <input type="file"  name="datafile" onchange="DocFldUpldHndlr(RCKY_DOCATTACHMENT,'RCKY_DOCATTACHMENT')" class="RCKY_DOCATTACHMENT"  >
                                                   </a>
                                                   <input type="text" id="RCKY_DOCATTACHMENT" hidden="hidden" data-Validate="RCKY_DOCATTACHMENT"  name="RCKY_DOCATTACHMENT" class="form-control File RCKYDBfields">
                                                   <span class="name">Upload Document</span>
                                                </div>
                                             </td>
                                          </tr>
                                       </table>
                                    </div>
                                 </div>
                                 <div class="col-md-4 DDV">
                                    <div class="md-form Formcol-mdLR TxtCenter">
                                       <div class="RCKY_DOCATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile(RCKY_DOCATTACHMENT);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('RCKY_DOCATTACHMENT')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
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
               <button type="button" id="AddRCKYoc" class="btn btn-yel Btxt2">Confirm</button>
            </div>
         </div>
      </div>
   </div>
   
   
   
   
   <a type="button" id="MobIPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#MobIModal">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade" id="MobIModal" tabindex="-1" role="dialog" aria-labelledby="MobIModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:800px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10 HEADTEXT">Forward</div> 
   
   <a href="#"><img id="MOBIPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form >
        	</br>
        	</br>
           <div class="form-row">
           		 <div class="col">
           	     <div class="md-form" >
                    <select class="mdb-select md-form colorful-select dropdown-primary" id="RECMTO" name="RECMTO">
				   <option value="" disabled>Select</option>
                  
				</select>
				<label class="mdb-main-label BTxt9">SEND TO<span class="MndtryAstr"></span></label>
                  </div>
           		 </div>
           		  </div>
           		    <div class="form-row">
           		 	 <div class="col">
           	     <div class="md-form" style="display:none">
       <textarea id="RDESC" name="RDESC" class="form-control  IRCMDBfields btxt24"   style="height:200px"></textarea>
				<!-- <label class="mdb-main-label BTxt9 active ">Remarks<span class="MndtryAstr"></span></label> -->
                  </div>
           		 
           		 
           		 <div class="adjoined-bottom">
		      <div class="grid-container">
			  <div class="grid-width-100">
		
				<textarea style="" id="IRCM_DESCRIPTION"	placeholder="Type the content here!"  class="Edtr Text" name="IRCM_DESCRIPTION" data-maxlen="10000" maxlength="10000">
				 <%= editData.getTxt9() %>  
				
				 </textarea>

				<div class="invalid-tooltip"></div>
			</div>
			
		</div>
	</div> 
           </div>
      <!-- grid  show -->

    <!--Main layout-->
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">

        <button type="button" id="WFCONF"  class="btn btn-yel Btxt2">Confirm</button>
        
      </div>
    </div>
  </div>
  </div>
   </div>
  
  
   
   
   <table style="display:none" id="GridTable2">
      <thead>
      	<th>ACTION</th>
         <th>RCKY_DOC</th>
         <th>RCKY_DOCNAME</th>
         <th>RCKY_UPLOAD</th>
         <th>RCKY_UPLOADDT</th>
         <th>RCKY_OSV</th>
         <th>RCKY_DOCSTATUS</th>
         <th>RCKY_TARGETDT</th>
         <th>RCKY_REMARKS</th>
         <th>RCKY_CUSID</th>
         <th>RCKY_VRFY</th>
         <th>RCKY_RSQURY</th>
         <th>RCKY_DEFRSTATS</th>
		 <th>RCKY_UNIQID</th>
         <th>RCKY_AUTODD</th>
         <th>RCKY_CUSTYPE</th>
		  <th>RCKY_RCUSTATUS</th>
		  <th>RCKY_QUERY</th>
		  <th>RCKY_RESULT</th>
		  <th>RCKY_VERFBY</th>
		   <th>RCKY_REMARK</th>
         <!-- <th>RCKY_PRCSID</th>
            <th>RCKY_ACTIVITYID</th>
            <th>RCKY_DTCREATED</th>
            <th>RCKY_CREATEDBY</th>
            <th>RCKY_DTMODIFIED</th>
            <th>RCKY_MODIFIEDBY</th> -->
      </thead>
   </table>
   <table style="display:none" id="GridTable3">
      <thead>
      	<th>ACTION</th>
         <th>RCOD_DOC</th>
         <th>RCOD_DOCNAME</th>
         <th>RCOD_UPLOAD</th>
         <th>RCOD_UPLOADDT</th>
         <th>RCOD_OSV</th>
         <th>RCOD_DOCSTATUS</th>
         <th>RCOD_TARGETDT</th>
         <th>RCOD_REMARKS</th>
         <th>RCOD_CUSID</th>
         <th>RCOD_VRFY</th>
         <th>RCOD_RSQURY</th>
         <th>RCOD_DFRSTATUS</th>
         <th>RCOD_UNIQNO</th>
         <th>RCOD_AUTODD</th>
         <th>RCOD_CUSTYPE</th>
		  <th>RCOD_RCUSTATUS</th>
		   <th>RCOD_QUERY</th>
		  <th>RCOD_RESULT</th>
		  <th>RCOD_VERFBY</th>
		  
		   <th>RCOD_REMARK</th>
         <!-- <th>RCOD_PRCSID</th>
            <th>RCOD_ACTIVITYID</th>
            <th>RCOD_DTCREATED</th>
            <th>RCOD_CREATEDBY</th>
            <th>RCOD_DTMODIFIED</th>
            <th>RCOD_MODIFIEDBY</th> -->
      </thead>
   </table>
   <table style="display:none" id="GridTable4">
      <thead>
      	<th>RCDF_PFDEMAMNT</th>
         <th>RCDF_RMRK</th>
         <th>RCDF_DEFRAMNT</th>
         <th>RCDF_REFRID</th>
         <th>RCDF_STATUS</th>
         
         <!-- <th>RCOD_PRCSID</th>
            <th>RCOD_ACTIVITYID</th>
            <th>RCOD_DTCREATED</th>
            <th>RCOD_CREATEDBY</th>
            <th>RCOD_DTMODIFIED</th>
            <th>RCOD_MODIFIEDBY</th> -->
      </thead>
   </table>
   <!-- END -->
  
  
  
  <!-- REMARKS STARTS -->
   <a type="button" id="REMARKS1Popup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#REMARKS1Modal">
 <i class="fa fa-plus"></i></a>
 
 <div class="modal fade" id="REMARKS1Modal" tabindex="-1" role="dialog" aria-labelledby="REMARKS1ModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">REMARKS</div> 
   
   <a href="#"><img id="REMARKS1POPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div> 
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class=""> 
         <form >
        	</br>
        	</br>
                     <div class="form-row">
           		 <div class="col">
           			<div class="md-form">
                        <div class="form-group">
                              <label for="POPUPRemarks"></label></br>
							  <input type="text" id="IRCUUNIQID" hidden="hidden" name="IRCUUNIQID"  class="form-control NoSpecialChar">
						
                              <textarea class="form-control btxt24"  rows="5" id="IRCUREMAKDATA" name="IRCUREMAKDATA" data-to="" style="height: 130px;width:502px;"></textarea>
                        </div>
           			</div>
           		 </div>
           </div>
      <!-- grid  show -->
    <!--Main layout-->
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
       <button type="button" id="IRCUREMARKDATA" onclick = "IRCUREMARKSUBMIT(this)" class="btn btn-yel ">Confirm</button>
      </div>
    </div>
  </div>
  </div> 
  
  <!-- REMARKS END -->
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/ViewRpt/Script/VdrRCU/LoadSubmit/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/ViewRpt/Script/VdrRCU/Validation/Validation.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>


 <!--Text Editor-->
 
 <script src="ThemeproLO/ckeditor/ckeditor.js${DMY13}"></script>
<script src="ThemeproLO/ckeditor/BrowserIdentity.js${DMY13}"></script>
<script src="ThemeproLO/ckeditor/samples/js/sample.js${DMY13}"></script>

  <script>
initSample("IRCM_DESCRIPTION");
</script>	
<% editData.ClearMtd(); %>  


