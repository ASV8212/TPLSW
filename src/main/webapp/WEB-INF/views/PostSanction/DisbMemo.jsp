</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
   
 <div class="card CardNS">
   <div class="row FormRows m-b-0">

                                    <!--First column-->
<div class="col-md-2 Formcol-mdLR LSbrd">
<div class="Btxt5" >Sanction Amount</div>
<div class="Btxt10  " id="DBMM_DSANCAMT" name="DBMM_DSANCAMT" value=""></div>
</div>  

<div class="col-md-2 Formcol-mdLR LSbrd">
<div class="Btxt5">Disbursal Amount</div>
<div class="Btxt10 " id="DBMM_DDISBURAMT" name="DBMM_DDISBURAMT" value="" ></div>
</div>  

<div class="col-md-2 Formcol-mdLR">
<div class="Btxt5">Remaining Amount</div>
<div class="Btxt10  " id="DBMM_DREMAINGAMT" name="DBMM_DREMAINGAMT" value="" ></div>
</div> 

<div class="col-md-2 Formcol-mdLR">
<div class="Btxt5">Cancelled Amount</div>
<div class="Btxt10  " id="DBMM_CANCELAMT" name="DBMM_CANCELAMT" value="" ></div>
</div> 



</div> 


</div>  
   
      <div class="form-row">
         <div class="col-lg-12">
            <ul title="Tranche" data-aria="LSW_TLONBANKDTLS|BKDT|" data-popup="No"  class="nav FormPageMultiTab">
               <%-- ${SUBPAGETABDATA} --%>
               <!-- <li id="Tranche1" value="Tranche 1" title="Tranche 1" class="nav-item active">
               <a>
                  <div class="nav-link" href="#">Tranche 1</div>
               </a>
            </li> -->
              
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
       <li id="DisbursementChecklist" value="Disbrsmnt" title="Disbursement Checklist" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Disbursement Checklist</div>
               </a>
            </li>
            <li id="OpsAcknowledgement" value="OpsAck" title="Ops Acknowledgement" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Ops Acknowledgement</div>
               </a>
            </li>
            <li id="DisbursementMemo" value="DisbMemo" title="Disbursement Memo" class="nav-item active">
               <a>
                  <div class="nav-link" href="#">Disbursement Memo</div>
               </a>
            </li>
            <li id="OTC" value="OTC" title="OTC" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">OTC</div>
               </a>
            </li>
            <li id="PDD" value=PDD title="PDD" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">PDD</div>
               </a>
            </li>

      </ul>
	

	
	</div>
</div>
     
     
      </div>
   </div>
      <div class="card">
         <!-- Card header -->
         <!-- Card body -->
         <div data-row="" class="card-body px-lg-5 pt-0  ">
            </br>
            <form>
               <input type="text" id="DBMM_PRCSID" hidden="hidden" name="DBMM_PRCSID" value="" class="form-control DBMMDBfields">
               <input type="text" id="DBMM_ACTIVITYID" hidden="hidden" name="DBMM_ACTIVITYID" class="form-control DBMMDBfields">
               <input type="text" id="DBMM_CREATEDBY" hidden="hidden" name="DBMM_CREATEDBY" class="form-control DBMMDBfields">
               <input type="text" id="DBMM_DTCREATED" hidden="hidden" name="DBMM_DTCREATED" class="form-control DBMMDBfields">
               <input type="text" id="DBMM_MODIFIEDBY" hidden="hidden" name="DBMM_MODIFIEDBY" class="form-control DBMMDBfields">
               <input type="text" id="DBMM_DTMODIFIED" hidden="hidden" name="DBMM_DTMODIFIED" class="form-control DBMMDBfields">
               <input type="text" id="DBMM_FAVOUROAGE" hidden="hidden" name="DBMM_FAVOUROAGE" class="form-control DBMMDBfields">
               <input type="text" id="DBMM_DTOTALDISBAMT" hidden="hidden" name="DBMM_DTOTALDISBAMT" class="form-control DBMMDBfields">
           
		        <input type="text" id="DBMM_TRANCHID" hidden="hidden" name="DBMM_TRANCHID" class="form-control DBMMDBfields">
				<input type="text" id="DBMM_TRANCHNAME" hidden="hidden" name="DBMM_TRANCHNAME" class="form-control DBMMDBfields">
		        <input type="text" id="DBMM_ACCID" hidden="hidden" name="DBMM_ACCID" class="form-control DBMMDBfields">
		        <input type="text" id="DBMM_DMRPTF" hidden="hidden" name="DBMM_DMRPTF" class="form-control">
		   
		        <input type="text" id="DBMM_ENACHSTATUS" hidden="hidden" name="DBMM_ENACHSTATUS" class="form-control DBMMDBfields">
		        <input type="text" id="DBMM_OTHRDUCHIDDEN" hidden="hidden" name="DBMM_OTHRDUCHIDDEN" class="form-control DBMMDBfields">
		   
              <!--  <div class="form-row">
        	       <div class="col Btxt10">PF</div>
               </div>
          <div class="form-row">
            <div class="col-md-4">
               <div class="md-form">
                 <input type="text" class="Btxt14 DSVLBL DBMMDBfields form-control" id="DBMM_PAYMODE" name="DBMM_PAYMODE" >
                  <label for="DBMM_PAYMODE" class="Btxt9 ">Payment Mode</label>
              </div>
            </div> 
           <div class="col-md-4">
             <div class="md-form">
               <input type="text" class="Btxt14 DSVLBL NoSpecialChar DBMMDBfields IsNumberFields form-control"  id="DBMM_INSTRNUM" name="DBMM_INSTRNUM">
                <label for="DBMM_INSTRNUM" class="Btxt9 ">Instrument Number</label>
             </div>
           </div> 
           <div class="col-md-4">
            <div class="md-form">
             <input type="text" id="DBMM_BNKNAME"  maxlength="25" name="DBMM_BNKNAME"  class="Btxt14 DSVLBL DBMMDBfields IsAlphaFields form-control">
             <label for="DBMM_BNKNAME"  class="Btxt9 ">Bank Name</label>
            </div>
          </div> 
      </div> 
      <div class="form-row">
           <div class="col-md-4">
               <div class="md-form">
                 <input type="text" id="DBMM_BRNAME" maxlength="25" name="DBMM_BRNAME" class="Btxt14 DSVLBL DBMMDBfields IsAlphaFields form-control">
                  <label for="DBMM_BRNAME"  class="Btxt9 ">Branch Name</label>
              </div>
           </div> 
           <div class="col-md-4">
               <div class="md-form">
                  <input type="text" id="DBMM_TOTAMT" maxlength="15" name="DBMM_TOTAMT" class="Btxt14 DSVLBL DBMMDBfields IsNumberFields NoSpecialChar  IsCURCommaFields form-control">
                  <label for="DBMM_TOTAMT"  class="Btxt9 ">Total Amount</label>
              </div>
           </div> 
           <div class="col-md-4">
               <div class="md-form">
                  <input type="text" id="DBMM_RECPNUM" maxlength="6" name="DBMM_RECPNUM" class="Btxt14 DSVLBL DBMMDBfields NoSpecialChar form-control">
                  <label for="DBMM_RECPNUM" class="Btxt9 ">Reciept Number</label>
               </div>
          </div> 
      </div>
      <div class="form-row">
              <div class="col-md-4">
               <div class="md-form">
                 <input type="text" id="DBMM_CHALLNUM" maxlength="9" name="DBMM_CHALLNUM" class="Btxt14 DSVLBL DBMMDBfields IsNumberFields NoSpecialChar form-control">
                  <label for="DBMM_CHALLNUM"  class="Btxt9 ">Challan Number</label>
              </div>
            </div> 
           <div class="col-md-4">
             <div class="md-form">
               <input type="text" id="DBMM_CHEQSTUS"  maxlength="15"  name="DBMM_CHEQSTUS" class="Btxt14 DSVLBL DBMMDBfields IsAlphaFields form-control">
                <label for="DBMM_CHEQSTUS"  class="Btxt9 ">Cheque Status</label>
             </div>
           </div> 
           <div class="col-md-4">
             <div class="md-form">
               <input type="text" id="DBMM_COLLECSTUS" maxlength="15"  name="DBMM_COLLECSTUS" class="Btxt14 DSVLBL DBMMDBfields IsAlphaFields form-control">
                <label for="DBMM_COLLECSTUS"  class="Btxt9 ">Collection Status</label>
             </div>
           </div>
     </div> -->
     <div class="form-row">
           <div class="col Btxt10">Tranche</div>
    </div>      
       <div class="form-row">
            <div class="col-md-3">
               <div class="md-form">
                 <input type="text" maxlength="10" class="Btxt14 IsNumberFields ISPastDateFields NoSpecialChar DBMMMndtry ISDatefield DBMMDBfields form-control" id="DBMM_DISBREQDATE" name="DBMM_DISBREQDATE" >
                  <label for="DBMM_DISBREQDATE" class="Btxt9 ">Disbursal Requested Date <span class="MndtryAstr">*</span></label>
                  <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
              </div>
            </div> 
           <div class="col-md-3">
             <div class="md-form">
               <input type="text" maxlength="15"  class="Btxt14 IsNumberFields NoSpecialChar DBMMDBfields DBMMMndtry IsCURCommaFields form-control" onchange="ChkLoanAmt();GetRemainAmtChange();" id="DBMM_ACTUDISBAMT" name="DBMM_ACTUDISBAMT">
                <label for="DBMM_ACTUDISBAMT" class="Btxt9 ">Actual Disbursal Amount &#x20b9; <span class="MndtryAstr">*</span></label>
             </div>
           </div> 
           <div class="col-md-3">
           <div class="md-form">
               <div class="select-radio"> 
                  <div class="custom-control custom-radio custom-control-inline">
                       <input type="radio" class="custom-control-input DBMMDBfields"  onclick="" value="Yes" id="PEMIYES" name="DBMM_PEMID">
                       <label class="custom-control-label" for="PEMIYES">Yes</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input DBMMDBfields" onclick="" value="No" id="PEMINO" name="DBMM_PEMID">
                        <label class="custom-control-label" for="PEMINO">No</label>
                  </div>
               </div>
                 <label class="mdb-main-label BTxt9">PEMI Deduct<span class="MndtryAstr"></span></label>      
            </div>
          </div> 
          <div class="col-md-3">
              <div class="md-form">
                 <input type="text" id="DBMM_PEMIAMT" maxlength="15" name="DBMM_PEMIAMT" disabled class="PEMIDED Btxt14 DSVLBL IsNumberFields NoSpecialChar DBMMDBfields IsCURCommaFields form-control">
                  <label for="DBMM_PEMIAMT"  class="Btxt9 ">PEMI Amount &#x20b9;</label>
              </div>
           </div>
      </div> 
      <div class="form-row">
            
		   <div class="col-md-2">
                <div class="md-form">
                 <input type="text" id="DBMM_OTHRDUC" maxlength="15" name="DBMM_OTHRDUC" value="0" disabled class=" Btxt14 DSVLBL IsNumberFields NoSpecialChar DBMMDBfields IsCURCommaFields form-control">
                  <label for="DBMM_OTHRDUC"  class="Btxt9 ">Other Deduction &#x20b9;</label>
			  </div>
           </div> 
		   <div class="col-md-2">
                <div class="md-form">
				    <div class="HyperControls form-row" > 
	                    <a class="Btxt4 FltRight DeductView" data-toggle="modal" onclick="OpenDeduc()" href="#">View</a>
		             </div>
				</div>
			</div>
           <div class="col-md-3">
               <div class="md-form">
                  <input type="text" id="DBMM_TOTDEDUC" name="DBMM_TOTDEDUC" maxlength="15" disabled class="PEMIDED DSVLBL Btxt14 IsNumberFields NoSpecialChar DBMMDBfields IsCURCommaFields form-control">
                  <label for="DBMM_TOTDEDUC"  class="Btxt9 ">Total Deduction &#x20b9;</label>
              </div>
           </div> 
           <div class="col-md-2">
               <div class="md-form">
                  <input type="text" id="DBMM_DISBAMT" maxlength="15" name="DBMM_DISBAMT" disabled class="Btxt14 DSVLBL IsNumberFields NoSpecialChar  DBMMDBfields IsCURCommaFields form-control">
                  <label for="DBMM_DISBAMT" class="Btxt9 ">Disbursement Amount &#x20b9;</label>
               </div>
          </div> 
          <div class="col-md-3">
          <div class="HyperControls form-row FltRight" > 
	        <a onclick="" class="Btxt4 FltRight" data-toggle="modal" name="REPAYPOPUP" data-target="#REPAYPOPUP"  href="#">Re-Payment Schedule</a>
		 </div>
          </div>
      </div> 
	  <div class="form-row">
           <div class="col-md-4">
               <div class="md-form">
	                <input type="text" id="DBMM_ENACHURMNO" disabled name="DBMM_ENACHURMNO" class="form-control DBMMDBfields"> 
					<label for="DBMM_ENACHURMNO"  class="Btxt9">UMRN Number</label>
	           </div>
			</div>
	   </div>
        <div class="HyperControls form-row FltRight" > 
	        <a onclick="AddPageMultiData('',$('#DBFD_PRCSID').val(),'','Memo','DBFDDBfields');" class="Btxt4 FltRight ADDBTN"  href="#">+ Another Favouring</a>
		 </div>
      </br>     
      <div data-for="Memo" class="Memo"> 
      </div>
      <div class="DynamicPageGrid" data-val="PROPTXTHDR|FAVOURING" id="Memo" style="display:none">
      <div data-row="" class="DYNROW">
        <form>
        <input type="text" id="DBFD_PRCSID" hidden="hidden" name="DBFD_PRCSID" class="form-control DBFDDBfields">
        <input type="text" id="DBFD_ACTIVITYID" hidden="hidden" name="DBFD_ACTIVITYID" class="form-control DBFDDBfields">
        <input type="text" id="DBFD_CREATEDBY" hidden="hidden" name="DBFD_CREATEDBY" class="form-control DBFDDBfields">
        <input type="text" id="DBFD_DTCREATED" hidden="hidden" name="DBFD_DTCREATED" class="form-control DBFDDBfields">
        <input type="text" id="DBFD_MODIFIEDBY" hidden="hidden" name="DBFD_MODIFIEDBY" class="form-control DBFDDBfields">
        <input type="text" id="DBFD_DTMODIFIED" hidden="hidden" name="DBFD_DTMODIFIED" class="form-control DBFDDBfields">
        
        <input type="text" id="DBFD_TRANCHID" hidden="hidden" name="DBFD_TRANCHID" class="form-control DBFDDBfields">
        <input type="text" id="DBFD_TRANCHNAME" hidden="hidden" name="DBFD_TRANCHNAME" class="form-control DBFDDBfields">
          </br>
           <div class="form-row">
               <div id="PROPTXTHDR" class="col Btxt10"></div>
           </div>
           <div class="form-row">
                            <div class="col ">
                                   <div class="FltRight DELBTNTXT">
                                     Delete Favouring Details
                                 <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="DBFD_PRCSID|DBFD_ACCTNUM|Memo" class="DELBTN DELETEBNKDET"/>
                              </div>    
                           </div>     
                          </div>
          <div class="form-row">
            <div class="col-md-4">
               <div class="md-form">
                    <select class="md-form colorful-select dropdown-primary DBFDDBfields DBFDMndtry DataToFld" data-change="DBFD_FAVORINGHIDDEN"  onchange="DataToFavrFld(this,'Page');GetBnkName($(this).closest('.DYNROW'),'Change',this.value,'DBFD_PAYMODE'+$(this).closest('.DYNROW').attr('data-row'));" id="DBFD_FAVOURTYPE" name="DBFD_FAVOURTYPE">
  					<option  value="" selected>--Select--</option>
				  </select>
                  <label for="AMOUNTINGST"  class="Btxt9 ">Favouring Applicant<span class="MndtryAstr">*</span></label>
              </div>
            </div> 
          
            <div class="col-md-4">
               <div class="md-form">
                  <input type="text" id="DBFD_FAVOURNAME" disabled name="DBFD_FAVOURNAME" maxlength="100" class="Btxt14 DSVLBL DBFDMndtry DBFDDBfields form-control">
                  <label for="DBFD_FAVOURNAME"  class="Btxt9 ">Favouring Name<span class="MndtryAstr">*</span></label>
               </div>
             </div> 
             <div class="col-md-4  OTHERACCT"   style="display:none">
               <div class="md-form">
                  <input type="text" id="DBFD_ACCTNUM" maxlength="15" name="DBFD_ACCTNUM" class="Btxt14 DBFDDBfields OTHACC IsNumberFields NoSpecialChar form-control">
                  <label for="DBFD_ACCTNUM" class="Btxt9 ">Account Number<span class="MndtryAstr">*</span></label>
               </div>
             </div> 

            <div class="col-md-4  CUSACCT">
                      <div class="md-form">
                          	<select class="md-form colorful-select dropdown-primary  DBFDDBfields CUSACC" onchange="GetBnkDetl('DBFD_ACCTNUMB'+$(this).closest('.DYNROW').attr('data-row'),$(this).closest('.DYNROW').attr('data-row'))" id="DBFD_ACCTNUMB" name="DBFD_ACCTNUMB">
					  			<option  value="" selected>--Select--</option>
								  </select>
                                    <label  class="">Account Number<span class="MndtryAstr">*</span></label>
                               </div>
                      </div>
               <input type="text" id="DBFD_FAVORINGHIDDEN" hidden="hidden" name="DBFD_FAVORINGHIDDEN" class="form-control DBFDDBfields">
          </div>  
          <input type="text" id="DBMM_FAVOUROAGE" hidden="hidden" name=DBMM_FAVOUROAGE class="form-control DBMMDBfields">
          <div class="form-row">
            <div class="col-md-4">
               <div class="md-form">
                  <input type="text" id="DBFD_PAYAMT" maxlength="15" name="DBFD_PAYAMT"  onblur="DIBAMT(DBMM_DISBAMT,'DBFD_PAYAMT'+$(this).closest('.DYNROW').attr('data-row'))" class="Btxt14  NoSpecialChar DBFDMndtry DBFDDBfields  IsNumberFieldsSpl IsCURCommaFields form-control">
                  <label for="AMOUNTINGST"  class="Btxt9 ">Payee Amount &#x20b9;<span class="MndtryAstr">*</span></label>
              </div>
            </div> 
            <div class="col-md-4">
               <div class="md-form">
                    <select class="md-form colorful-select dropdown-primary DBFDMndtry DBFDDBfields" onchange="CHECKPAYMENTAMT('DBFD_PAYMODE'+$(this).closest('.DYNROW').attr('data-row'),'DBFD_PAYAMT'+$(this).closest('.DYNROW').attr('data-row'));CheckPayMode($(this).closest('.DYNROW')[0],this.id);GetChequeName('DBFD_PAYMODE'+$(this).closest('.DYNROW').attr('data-row'),'DBFD_CHEQNAM'+$(this).closest('.DYNROW').attr('data-row'));" id="DBFD_PAYMODE" name="DBFD_PAYMODE">
  					<option  value="" selected>--Select--</option>
  					<option  value="RTGS" >RTGS</option>
  					<option  value="Cheque">Cheque</option>
					<option  value="NEFT">NEFT</option>
					<option  value="DD">DD</option>
				  </select>
                  <label  class="mdb-main-label BTxt9">Mode of payment<span class="MndtryAstr">*</span></label>
              </div>
             </div> 
              <div class="col-md-4">
               <div class="md-form">
                    <select class="md-form colorful-select dropdown-primary DBFDMndtry DBFDDBfields" onchange="" id="DBFD_CHEQNAM" name="DBFD_CHEQNAM">
  					<option  value="" selected>--Select--</option>
				    </select>
                  <label  class="mdb-main-label BTxt9">Cheque Name<span class="MndtryAstr">*</span></label>
              </div>
             </div>
          </div>
          <div class="form-row RTGS" style="display:none">
		    <div class="col-md-4 " >
               <div class="md-form">
                  <input type="text" id="DBFD_IFSCCODE" maxlength="11" onblur="Ifscdetls(this,'DBFD_BNKNAME','DBFD_BRNAME','DBFD_CITY')"  name="DBFD_IFSCCODE" class="Btxt14 NoSpecialChar DBFDDBfields RTGMND IsIFSCFields form-control">
                  <label for="DBFD_IFSCCODE" class="Btxt9 ">IFSC Code<span class="MndtryAstr">*</span></label>
               </div>
             </div> 
            <div class="col-md-4">
               <div class="md-form">
                  <input type="text" id="DBFD_BNKNAME" disabled name="DBFD_BNKNAME" class="Btxt14 DBFDDBfields RTGMND form-control">
                  <label for="DBFD_BNKNAME"  class="Btxt9 ">Bank Name<span class="MndtryAstr">*</span></label>
              </div>
            </div> 
            <div class="col-md-4">
               <div class="md-form">
                  <input type="text" id="DBFD_BRNAME" disabled name="DBFD_BRNAME" class="Btxt14 DBFDDBfields RTGMND form-control">
                  <label for="DBFD_BRNAME"  class="Btxt9 ">Branch Name<span class="MndtryAstr">*</span></label>
              </div>
             </div> 
          </div>
          <div class="form-row">
		    <div class="col-md-4 RTGS" style="display:none">
               <div class="md-form">
                  <input type="text" id="DBFD_CITY" disabled name="DBFD_CITY" class="Btxt14 DBFDDBfields RTGMND form-control">
                  <label for="DBFD_CITY" class="Btxt9 ">City<span class="MndtryAstr">*</span></label>
               </div>
             </div> 
             <div class="col-md-4">
               <div class="md-form">
                  <input type="text" id="DBFD_PAYLOCATION" maxlength="20" name="DBFD_PAYLOCATION" class="Btxt14 DBFDDBfields DBFDMndtry NoSpecialChar form-control">
                  <label for="AMOUNTINGST"  class="Btxt9 ">Payable Location<span class="MndtryAstr">*</span></label>
              </div>
            </div> 
            <div class="col-md-4">
               <div class="md-form">
                  <select class="md-form colorful-select dropdown-primary DBFDMndtry DBFDDBfields" id="DBFD_PAYRMK" name="DBFD_PAYRMK">
  					<option  value="" selected>--Select--</option>
  					<option  value="BT CHEQUE" >BT CHEQUE</option>
  					<option  value="CUSTOMER CHEQUE" >CUSTOMER CHEQUE</option>
  					<option  value="OTHER FINANCIER CHEQUE" >OTHER FINANCIER CHEQUE</option>
  					<option  value="PRE EMI" >PRE EMI</option>
  					<option  value="PF / AF" >PF / AF</option>
  					<option  value="CROSS SELL SHORTFALL" >CROSS SELL SHORTFALL</option>
  					<option  value="REFUNDS" >REFUNDS</option>
  					<option  value="IBT HE" >IBT HE</option>
  					<option  value="BUILDER CHEQUE" >BUILDER CHEQUE</option>
				  </select>
                  <label for="AMOUNTINGST"  class="Btxt9 ">Payable Remarks<span class="MndtryAstr">*</span></label>
                </div>
             </div> 
          </div>
		  
        </form>
        </div>
        </div> 
        <div class="form-row GenDM" style="display:none">
              <span class="HyperControls FltRight">
		         <a onclick="GentrateDisbMemo();" class="Btxt4 FltRight" href="#">Generate Disbursement Memo.pdf</a>
		      </span>
      </div>		
     <div class="form-row">
         <div class="col d-flex justify-content-center">
               <button type="button" id="Save" data-aria="LSW_TDISBURMEMO|DBMM|DBMM_TRANCHID"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
               <button type="button" id="SaveNxt" data-aria="LSW_TDISBURMEMO|DBMM|DBMM_TRANCHID" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
               <button type="button" id = "CompleteTranche" style="display:none;" data-aria="LSW_TDISBURMEMO|DBMM|DBMM_TRANCHID" data-card="0" class="btn btn-Syel waves-effect waves-light ">Complete Tranche</button> 
			   <button type="button" id="SaveBR" style="display:none" data-aria="LSW_TDISBURMEMO|DBMM|DBMM_TRANCHID" data-form="CAM" data-card="0" class="btn btn-Syel waves-effect waves-light FormSave"></button> 
               <!-- <button type="button"  data-aria="LSW_TDISBURMEMO|DBMM"   data-card="0" class="btn btn-Syel waves-effect waves-light FormSave">Push to LMS</button> -->
               <button type="button" onclick="" data-aria="LSW_TDISBURMEMO|DBMM|DBMM_TRANCHID" class="btn btn-Syel waves-effect waves-light DMG FormSave">Generate DM</button> 
			   <button type="button" id="SendBack" onclick="" style="display:none;" class="btn btn-Syel waves-effect waves-light BTNHIDE FormSave StageReversal">Send Back</button> 
               <button type="button" style="display:none" onclick="EnachReTrigger()" class="btn btn-Syel EnachReTrigger waves-effect waves-light"> UMRN LMS Re-Trigger</button>
		  </div>
     </div>
  </form>
 </div>
</div>
      <!-- card -->
   </div>
</div>
<script type="text/javascript" src="ThemeproLO/PostSanction/Script/PostSanctionTab.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/PostSanction/Script/DisbMemo/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/PostSanction/Script/DisbMemo/Validation.js${DMY13}"></script>


 <a type="button" id="REPAY" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#REPAYPOPUP">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade" id="REPAYPOPUP" tabindex="-1" role="dialog" aria-labelledby="REPAYPOPUPLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1300px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">Re-Payment Schedule</div> 
   
   <a href="#"><img id="REPAYPOPUPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
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
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'RePayTable',{spname:'LOAN_GETEMISCHEDULE_LOS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:($('#DMY3').val().split('|')[3]) - $('#DBMM_CANCELAMT').text().replace(/,/g, ''),brid:$('#DMY3').val().split('|')[5],MnuId:CalcMnthFrRepy()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7,9','REPAYGRD');" id="BTNREPAYGRD" name="BTNREPAYGRD" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="RePayTable">
                           </table>
                        </div>
                    </div> 
      <!-- grid  show -->

    <!--Main layout-->
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <!-- <button type="button" id="MobIotp" onclick="" class="btn btn-yel Btxt2">Close</button> -->
      </div>
    </div>
  </div>
  </div>
  
  <a type="button" id="ODEDUC" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#ODEDUCPOPUP">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade" id="ODEDUCPOPUP" tabindex="-1" role="dialog" aria-labelledby="ODEDUCPOPUPLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1300px" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <div class="Btxt10">Deduction</div> 
               <a href="#"><img id="ODEDUCPOPUPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
             </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form >
		  <input type="text" id="OverDue" hidden="hidden" name="OverDue" class="form-control">
        	</br>
        	</br>
                  <div class="form-row">
                       <div class="col">
                           <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'ODeductTable',{spname:'LSW_SSHOWOTHRDUCOP',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#OverDue').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','ODEDUCTGRD');" id="BTNODEDUCTGRD" name="BTNODEDUCTGRD" />
                           <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display DataGrid" id="ODeductTable">
                           </table>
                        </div>
                    </div> 
      <!-- grid  show -->

    <!--Main layout-->
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
       <button type="button" class="btn btn-Syel waves-effect waves-light ODEDUCPOPUP" data-dismiss="modal">Close</button>
        <!-- <button type="button" id="MobIotp" onclick="" class="btn btn-yel Btxt2">Close</button> -->
      </div>
    </div>
  </div>
  </div>