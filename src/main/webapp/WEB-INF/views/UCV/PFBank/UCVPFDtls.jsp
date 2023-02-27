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
		
		  <ul title="PF" class="nav FormPageMultiTab" data-popup="No" data-aria="LSW_TLONPFDTLS|PFDT|PFDT_PFNO">   
		  
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
  <!--  card -->
  <div class="card CardNS">


    <!-- Card body -->
      <div class="card-body px-lg-5 pt-0 PF">
      	
        <form>
        
        <input type="text" id="PFDT_PRCSID" hidden="hidden" name="PFDT_PRCSID" class="form-control PFDTDBfields">
         <input type="text" id="PFDT_ACTIVITYID" hidden="hidden" name="PFDT_ACTIVITYID" class="form-control PFDTDBfields">
         <input type="text" id="PFDT_DTCREATED" hidden="hidden" name="PFDT_DTCREATED" class="form-control PFDTDBfields">
         <input type="text" id="PFDT_CREATEDBY" hidden="hidden" name="PFDT_CREATEDBY" class="form-control PFDTDBfields">
         <input type="text" id="PFDT_DTMODIFIED" hidden="hidden" name="PFDT_DTMODIFIED" class="form-control PFDTDBfields">
         <input type="text" id="PFDT_MODIFIEDBY" hidden="hidden" name="PFDT_MODIFIEDBY" class="form-control PFDTDBfields">
        
        <input type="text" id="PFDT_PFNO" hidden="hidden" name="PFDT_PFNO" class="form-control PFDTDBfields">
        <input type="text" id="PFDT_PFREFNAME" hidden="hidden" name="PFDT_PFREFNAME" class="form-control PFDTDBfields">
        
        <input type="text" id="PFDT_TRANSREFNO" hidden="hidden" name="PFDT_TRANSREFNO" class="form-control PFDTDBfields">
        <input type="text" id="PFDT_TRANSREFDATE" hidden="hidden" name="PFDT_TRANSREFDATE" class="form-control PFDTDBfields">
        
        <input type="text" id="PFDT_TRANSSTATUS" hidden="hidden" name="PFDT_TRANSSTATUS" class="form-control PFDTDBfields">
        
          <input type="text" id="PFDT_PFCOLLECT" hidden="hidden" name="PFDT_PFCOLLECT" class="form-control PFDTDBfields">
        	<input type="text" id="PFDT_RECIPTNUM" hidden="hidden" name="PFDT_RECIPTNUM" class="form-control PFDTDBfields">
        	<input type="text" id="PFDT_WIOUTGSTDEMAMT" hidden="hidden" name="PFDT_WIOUTGSTDEMAMT" class="form-control PFDTDBfields">
        	   <input type="text" id="PFDT_STATE" hidden="hidden" name="PFDT_STATE" class="form-control PFDTDBfields">
        	<input type="text" id="PFDT_CITY" hidden="hidden" name="PFDT_CITY" class="form-control PFDTDBfields">
        	<input type="text" id="PFDT_ACCOUNTNO" hidden="hidden" name="PFDT_ACCOUNTNO" class="form-control PFDTDBfields">
			
			<input type="text" id="PFDT_SMSVARIFY" hidden="hidden" name="PFDT_SMSVARIFY" class="form-control PFDTDBfields">
        	<input type="text" id="PFDT_EMAILVARIFY" hidden="hidden" name="PFDT_EMAILVARIFY" class="form-control PFDTDBfields">
        	 
        	 
        	 </br>
        	 <div class="form-row">
           <div class="col ">
           <div class="FltRight DELBTNTXT">
           Delete Processing Fee
           <img src="ThemeproLO/Common/Images/Delete_Img.png" style="height:25px;width:25px" data-tab="PFDT_PRCSID|PFDT_PFNO|PF" class="DELBTN DELETETAP"/>
           </div>    
           </div>     
           </div>
        	</br>
        
        	<div class="form-row">
        		<div class="col Btxt3">Processing Fee Collection</div>
        	</div>
        	
        	
        	
           <div class="form-row">
           
            <div class="col">
                   <div class="md-form">
                    <input type="text" id="PFDT_DEMANDAMT" name="PFDT_DEMANDAMT" disabled maxlength="30" class="form-control  IsCURCommaFields NoSpecialChar PFDTMndtry PFDTDBfields">
                    <label for="PFDT_DEMANDAMT" class="">Demand Amount (Rs.)<span class="MndtryAstr">*</span></label>
                  </div>
                </div>
                <div class="col">
                  <div class="md-form">
                  <div class="select-radio PFDTMndtry"> 
                     <div class="custom-control custom-radio custom-control-inline">
                       <input type="radio" class="custom-control-input  PFDTDBfields COLLDISB" onchange="CHKCOLLECTIONChange();" value="Collectible" id="coll" name="PFDT_COLECTIONTYP">
                       <label class="custom-control-label" for="coll">Collectible</label>
                     </div>
                     <div class="custom-control custom-radio custom-control-inline">
                           <input type="radio" class="custom-control-input PFDTDBfields" onclick="ClrMndtry();" value="Deferred" id="Def" name="PFDT_COLECTIONTYP">
                           <label class="custom-control-label" for="Def">Deferred</label>
                     </div>
                  </div>
                  <label class="mdb-main-label BTxt9">Collection Type <span class="MndtryAstr">*</span></label>      
                  </div>
                </div>
           </div>
           <div class="form-row">
            <div class="col-md-6 DEFER">
                  <div class="md-form">
               <div class="select-radio PFDTMndtry RedioMNDRY"> 
                    <div class="custom-control custom-radio custom-control-inline">
                       <input type="radio" class="custom-control-input PFDTDBfields" onclick="CheckMode();ClearUpload();" onchange="ChKModeDataClear();" value="Cheque" id="ChqRadio" name="PFDT_MODE">
                       <label class="custom-control-label" for="ChqRadio">Cheque</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input PFDTDBfields" onclick="CheckMode();ClearUpload();" onchange="ChKModeDataClear();" value="Online" id="OnlRadio" name="PFDT_MODE">
                        <label class="custom-control-label" for="OnlRadio">Online</label>
                  </div>
                   <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input PFDTDBfields" disabled onclick="CheckMode();ClearUpload();" onchange="ChKModeDataClear();" value="DD" id="DDRadio" name="PFDT_MODE">
                        <label class="custom-control-label" for="DDRadio">DD</label>
                   </div> 
              </div>
                   <label class="mdb-main-label BTxt9">Mode <span class="MndtryAstr">*</span></label>      
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="md-form">
                    <input type="text" id="PFDT_AMOUNT" name="PFDT_AMOUNT" maxlength="30" onchange="CheckDmndAmt('PFDT_DEMANDAMT','PFDT_AMOUNT')" class="form-control IsCURCommaFields NoSpecialChar PFDTMndtry PFDTDBfields">
                    <label for="PFDT_AMOUNT" class="">Amount (incl GST) (Rs.) <span class="MndtryAstr">*</span></label>
                  </div>
                </div>
           </div>
           <div class="form-row Defrmnt">
           	<div class="col-md-6" style="display:none">
           		<div class="md-form">
           			<select class="mdb-select md-form colorful-select dropdown-primary DSVLBL PFDTDBfields" disabled id="PFDT_DEFRTO" name="PFDT_DEFRTO">
			              	<option value="">--Select--</option>
							</select>
							<label class="mdb-main-label BTxt9">Deferred To<span class="MndtryAstr"></span></label>
           		</div>
           		</div>
           		<div class="col-md-6">
           		<div class="md-form">
           			<input type="text" id="PFDT_DEFRSTATUS" name="PFDT_DEFRSTATUS" disabled maxlength="" class="form-control DSVLBL PFDTDBfields ">
                    <label for="PFDT_DEFRSTATUS" class="">Deferred Status<span class="MndtryAstr"></span></label>
                    </div>
           		</div>
           	
           </div>
            <div class="form-row Defrmnt">
           	<div class="col">
           		<div class="md-form">
                        <label >Remarks</label>
           		<br>
           		<br>
           		<textarea class="form-control PFDTDBfields DSVLBL Btxt10" rows="5" disabled id="PFDT_DEFRCMNT" name = "PFDT_DEFRCMNT" style="height: 130px;width:502px;"></textarea>
                        
           		</div>
           	</div>
           </div>
            <div class="form-row" style="display:none">
           <div class="col">
                 <button type="button" class="btn Collected  waves-effect btn-yelInplain btn-sm BTNVerify">Collected</button>
				 <button type="button" class="btn CollectedPage  waves-effect btn-yelInplain btn-sm BTNVerify">CollectedPage</button>
                 <button type="button" class="btn PartiCollected waves-effect btn-yelInplain btn-sm BTNVerify">Partially Collected</button>
           </div>
           </div>
           <div class="OnlineMode">
           <div class="form-row">
                <div class="col-md-3">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary PFDTDBfields" id="PFDT_ONLINEMOD" name="PFDT_ONLINEMOD">
                  	<option value="">Select</option>
  					<option value="Paytm">Paytm</option>
  					<!--<option value="UPI">UPI</option>
  					<option value="Debit card">Debit card</option>
 					 <option value="Net Banking">Net Banking</option>	-->			
				</select>
				<label class="mdb-main-label BTxt9">Online Mode <span class="MndtryAstr">*</span></label>
                </div>
           		</div>
           		 <div class="col-md-3">
                     <div class="md-form">
                         <button type="button" id="Collected" onclick="ChkPayAmt();CollectionINTRPF('PFDT_ONLINEMOD','PFDT_AMOUNT')" class="btn btn-yel BTNHIDE Btxt2">Click To Pay</button>
                     
                      </div>
           		</div>
           	   <div class="col-md-6">
                  <div class="md-form">
                     <div class="HyperControls">
                        <a class="Btxt4 BTNHIDE SMSLINK" id="PSndLnk" style="display:none" onclick="ChkPayAmt();PSendLink('PFDT_ONLINEMOD','PFDT_AMOUNT','SMS','PFDT_SMSVARIFY')" href="#">Send Link :  </a>               <span style="display:none" class="SMS Btxt29"></span>
						</br>
                        <a class="Btxt4 BTNHIDE EMAILLINK" id="PSndLnk"  onclick="ChkPayAmt();PSendLink('PFDT_ONLINEMOD','PFDT_AMOUNT','EMAIL','PFDT_EMAILVARIFY')" href="#">Send Link : </a>              <span class="EMAIL Btxt29"></span>
                    </div>
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
           <div class="CHK">
           <div class="form-row">
           	   		<div class="col">
           			<div class="md-form">
                  	<div class="BTxt9 UPLOAD" id="" value=""></div>
                    <!-- <label class="mdb-main-label BTxt9">Upload Cheque</label>  -->
 <div class="md-form">
<!--  <div id="PANUPLOAD" > <img src="ThemeproLO/Common/Images/UploadImg.png" onclick="DocFldUpldHndlr(CBSI_PANAttachment,id)" id="PAN" class="rounded" alt="Cinque Terre" width="20" height="20"> Upload PAN ID </div>-->
 <table>
 <tr>
 <td>
  <div id="PFDT_COLLATTACHMENTUPLOAD"  class="file-field DDU">
    <a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(PFDT_COLLATTACHMENT,'PFDT_COLLATTACHMENT','PF')" class="PFDT_COLLATTACHMENT"  >
    </a>
    <input type="text" id="PFDT_COLLATTACHMENT" hidden="hidden" data-Validate="PFDT_COLLATTACHMENT"  name="PFDT_COLLATTACHMENT" class="form-control File PFDTDBfields"/>
  <span class="name" Style="color:blue">Click Here to Upload</span> 
  </div> 
 </td>
   <div class="md-form DDV">
<div class="md-form Formcol-mdLR">
<div class="PFDT_COLLATTACHMENT" style="display:none"> <img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile(PFDT_COLLATTACHMENT);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('PFDT_COLLATTACHMENT')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
</div>
</div>   
</tr>
</table>
</div> 
      </div>
      </div>
           		<div class="col NDD" style="display:none">
           			 <div class="md-form">
                    <!--  <label class="mdb-main-label BTxt9">Send link to</label> -->
                           <button type="button" id="ChkCollected" onclick="ClickCollectedBtn();" class="btn btn-yel Btxt2">Collected</button>
                    </div>
           		</div>
           </div>
           </br>
           
             <div class="form-row  CHKHOLDER">
             		<div class="col">
            	<div class="md-form">
                  	<button type="button" id="GETOCR" onclick="GetOCRDetls('PFDT_COLLATTACHMENT','CHEQUE');" class="btn btn-yel Btxt2">Get Cheque Details</button>
             </div>
            </div>
            <div class="col">
            	
            </div>
           
           </div>
            <div class="form-row CHKHOLDER">
                <div class="col">
                  <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary PFDTDBfields"  id="PFDT_CHEHOLDERNAME" name="PFDT_CHEHOLDERNAME">
				 <option value="" disabled>--Select--</option>
				</select>
				<label class="mdb-main-label BTxt9">Cheque holder Name<span class="MndtryAstr"></span></label>
                  </div>
               </div>
               <div class="col"></div>
            </div>
            <div class="form-row">
              <div class="col">
            	<div class="md-form">
                  	<input type="text" id="PFDT_IFSC" onblur="Ifscdetls(this,'PFDT_BNKNAME','PFDT_BNKBRCH','PFDT_CITY','PFDT_STATE')"  name="PFDT_IFSC" class="form-control CHKCHAGE Mndtry IsIFSCFields OCRDSBL NoSpecialChar PFDTDBfields">
                    <label for="PFDT_IFSC" class="">IFSC <span class="MndtryAstr">*</span></label>
             </div>
            </div> 
              
              <div class="col">
            	<div class="md-form">
                  	<input type="text" id="PFDT_BNKNAME" disabled name="PFDT_BNKNAME" class="form-control Mndtry CHKCHAGE OCRDSBL PFDTDBfields">
                    <label for="PFDT_BNKNAME" class="">Bank Name <span class="MndtryAstr">*</span></label>
                  </div>
              </div>
             </div>
           <div class="form-row">
           		<div class="col">
            	<div class="md-form">
                  	<input type="text" id="PFDT_BNKBRCH" disabled name="PFDT_BNKBRCH" class="form-control Mndtry OCRDSBL CHKCHAGE PFDTDBfields">
                    <label for="PFDT_BNKBRCH" class="">Bank Branch <span class="MndtryAstr">*</span></label>
             </div>
            </div>
            <div class="col">
            <div class="md-form">
                  	<input type="text" id="PFDT_INSTRUMNTDT" name="PFDT_INSTRUMNTDT" onblur="CheckInstrumntDate();" maxlength="10" class="form-control CHKCHAGE IsNumberFields ISDatefield  Mndtry PFDTDBfields ">
                    <label for="PFDT_INSTRUMNTDT" class="">Instrument Date <span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker"/>
             </div>
            </div>
           </div>
           <div class="form-row">
                <div class="col">
            	    <div class="md-form">
                  	<input type="text" id="PFDT_INSTRUMNTNO" maxlength="6" name="PFDT_INSTRUMNTNO" class="form-control IsNumberFields CHKCHAGE IsChequeFields  NoSpecialChar OCRDSBL Mndtry PFDTDBfields">
                        <label for="PFDT_INSTRUMNTNO" class="">Instrument Number <span class="MndtryAstr">*</span></label>
                   </div>
              </div>
            <div class="col">
            	<div class="md-form">
            	   <input type="text" id="PFDT_STATUS" name="PFDT_STATUS" disabled value="Not Known" class="form-control DSVLBL IsNumberFields PFDTDBfields">
                   <label for="PFDT_STATUS" class="">Status<span class="MndtryAstr"></span></label>
             </div>
            </div> 
           </div>
           </div>
           </br>
           <div class="form-row">
                 <div class="col d-flex justify-content-center">
                     <button type="button" id="Save1" data-aria="LSW_TLONPFDTLS|PFDT|PFDT_PFNO" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                     <button type="button" id="Save2" data-card="0" data-aria="LSW_TLONPFDTLS|PFDT|PFDT_PFNO" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> 
                 <button type="button" id="Save3" data-aria="LSW_TLONPFDTLS|PFDT|PFDT_PFNO" style="display:none" class="btn btn-Syeloutline waves-effect waves-light FormSave3">HDNSave 3</button>   
				</div>
            </div> 
            </form>    
         </div>
   
      </div>
    
<div  class="card CardNS" id="OnlineModal" >

      <div class="card-body px-lg-5 pt-0">
    <!-- Card body -->   
    </br>  
        <form>          
            <div class="form-row">
        		<div class="col Btxt3">Processing Fee Collection</div>
           </div>
           <div class="form-row">
              <div class="col-md-4">
               <div class="md-form">
                 <input type="text" readonly class="Btxt14 ONLINE form-control" disabled id="RRECPTNO" name="RRECPTNO" >
                  <label for="RRECPTNO" class="Btxt9 ">Receipt Number</label>
              </div>
            </div> 

           <div class="col-md-4">
             <div class="md-form">
               <input type="text" readonly class="Btxt14 ONLINE form-control" disabled id="MODE" name="MODE">
                <label for="PFDT_RMODE" class="Btxt9 ">Mode</label>
             </div>
           </div> 

           <div class="col-md-4">
            <div class="md-form">
             <input type="text" id="ONLINEMOD" name="ONLINEMOD" readonly disabled class="Btxt14 ONLINE form-control">
             <label for="ONLINEMOD"  class="Btxt9 ">Online Mode</label>
            </div>
          </div> 
     </div> 
     <div class="form-row">
              <div class="col-md-4">
               <div class="md-form">
                 <input type="text" id="AMOUNTINGST" name="AMOUNTINGST" disabled readonly class="Btxt14 ONLINE form-control">
                  <label for="AMOUNTINGST"  class="Btxt9 ">Amount (incl GST)</label>
              </div>
          </div> 
       <div class="col-md-4">
             <div class="md-form">
               <input type="text" id="MOBLNO" name="MOBLNO" readonly disabled class="Btxt14 ONLINE form-control">
                <label for="MOBLNO"  class="Btxt9 ">Mobile Number</label>
             </div>
           </div> 

           <div class="col-md-4 TRANSONLINE">
            <div class="md-form">
             <input type="text" id="TRANSREFNO" name="TRANSREFNO" readonly disabled class="Btxt14 ONLINE form-control ">
             <label for="TRANSREFNO" class="Btxt9 ">Transaction Reference Number</label>
            </div>
          </div> 
     </div>
     <div class="form-row">
              <div class="col-md-4 TRANSONLINE">
               <div class="md-form">
                 <input type="text" id="TRANSDT" name="TRANSDT" readonly disabled class="Btxt14 IsNumberFields ISDatefield ONLINE form-control">
                  <label for="TRANSDT"  class="Btxt9 ">Transaction Date</label>
              </div>
            </div> 
           <div class="col-md-4">
             <div class="md-form">
               <input type="text" id="STATUS" name="STATUS" readonly disabled class="Btxt14 ONLINE form-control">
                <label for="STATUS"  class="Btxt9 ">Status</label>
             </div>
           </div> 
		   <div class="col-md-4">
             <div class="md-form">
			   <span class="RMK Btxt29"> </span>
             </div>
           </div> 
     </div>
	 <div class="form-row PFCIBILA" style="display:none">
	        <div class="col-md-3">
               <div class="md-form">
	               <button type="button" onclick="CIBILValidate(this);" id="CIBIL" class="btn waves-effect btn-yelInplain btn-sm">Initiate CIBIL</button>
	          </div>
	        </div>
	        <div class="col-md-4">
               <div class="md-form">
			       

		 <button type="button"  onclick="ViewCblRPT('CIBIL')" class="btn waves-effect btn-yelInplain btn-sm">View Report</button>		   
				   
	               <button type="button" style="display:none" id="CBLViewRpt" onclick="FncallDocChkLst(this,'CBRTable',{spname:'LSW_SCIBILRPTDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','CIBILReport');"  class="btn waves-effect btn-yelInplain btn-sm">View Report</button>
	            </div>
	        </div>
	         <div class="col-md-5">
	             <div class="md-form">
	              </div>
	         </div>
	 </div>
   </form>
 </div>  
         <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
            <button type="button" data-card="1" id=""onclick="NXTTAB(this)" class="btn btn-yel Btxt2  BTNHIDE">Next</button>
			<button type="button"  id="InitColcRe" onclick="REinitCol()" class="btn btn-yel Btxt2  BTNHIDE STANDALONEDELAY">Initiate Collections</button>
         </div>
      </div>
      
      
      <div  class="card CardNS" id="CheckModal" >

      <div class="card-body px-lg-5 pt-0">
    <!-- Card body -->   
    </br>  
        <form>    
            <div class="form-row">
        		<div class="col Btxt3">Processing Fee Collection</div>
           </div>
           <div class="form-row">
              <div class="col-md-4">
               <div class="md-form">
                 <input type="text" readonly class="Btxt14 CHECK form-control" disabled id="CHECKRRECPTNO" name="CHECKRRECPTNO" >
                  <label for="CHECKRRECPTNO" class="Btxt9 ">Receipt Number</label>
              </div>
            </div> 

           <div class="col-md-4">
             <div class="md-form">
               <input type="text" readonly class="Btxt14 CHECK form-control" disabled id="CHECKMODE" name="CHECKMODE">
                <label for="CHECKMODE" class="Btxt9 ">Mode</label>
             </div>
           </div> 

           <div class="col-md-4">
            <div class="md-form">
             <input type="text" id="CHECKIFSC" name="CHECKIFSC" readonly disabled class="Btxt14 CHECK form-control">
             <label for="CHECKIFSC"  class="Btxt9 ">IFSC</label>
            </div>
          </div> 
     </div> 
     <div class="form-row">
              <div class="col-md-4">
               <div class="md-form">
                 <input type="text" id="CHECKAMOUNTINGST" name="CHECKAMOUNTINGST" disabled readonly class="Btxt14 CHECK form-control">
                  <label for="CHECKAMOUNTINGST"  class="Btxt9 ">Amount (incl GST)</label>
              </div>
          </div> 
       <div class="col-md-4">
             <div class="md-form">
               <input type="text" id="CHECKMOBLNO" name="MCHECKOBLNO" readonly disabled class="Btxt14 CHECK form-control">
                <label for="CHECKMOBLNO"  class="Btxt9 ">Mobile Number</label>
             </div>
           </div> 

           <div class="col-md-4 TRANSONLINE">
            <div class="md-form">
             <input type="text" id="CHECKTRANSREFNO" name="CHECKTRANSREFNO" readonly disabled class="Btxt14 CHECK form-control">
             <label for="CHECKTRANSREFNO" class="Btxt9 ">Transaction Reference Number</label>
            </div>
          </div> 
     </div>   
     <div class="form-row">
              <div class="col-md-4 TRANSONLINE">
               <div class="md-form">
                 <input type="text" id="CHECKTRANSDT" name="CHECKTRANSDT" readonly disabled class="Btxt14 CHECK form-control">
                  <label for="CHECKTRANSDT"  class="Btxt9 ">Transaction Date</label>
              </div>
            </div> 
           <div class="col-md-4">
             <div class="md-form">
               <input type="text" id="CHECKSTATUS" name="CHECKSTATUS" readonly disabled class="Btxt14 CHECK form-control">
                <label for="CHECKSTATUS"  class="Btxt9 ">Status</label>
             </div>
           </div> 
           <div class="col-md-4">
             <div class="md-form">
			 <label for="CHECKSTATUS"  class="Btxt9 ">Cheque</label>
			 </br> </br> 
                <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="ChequeView('PFDT_COLLATTACHMENT')" class="rounded" alt="Cinque Terre" width="35" height="25">
             </div>
           </div> 
     </div>
	 <div class="form-row PFCIBILA" style="display:none">
	        <div class="col-md-3">
               <div class="md-form">
	               <button type="button" onclick="CIBILValidate(this);" id="CIBIL" class="btn waves-effect btn-yelInplain btn-sm">Initiate CIBIL</button>
	          </div>
	        </div>
	        <div class="col-md-4">
               <div class="md-form">
		 <button type="button"  onclick="ViewCblRPT('CIBIL')" class="btn waves-effect btn-yelInplain btn-sm">View Report</button>		   
				   
	               <button type="button" style="display:none" id="CBLViewRpt" onclick="FncallDocChkLst(this,'CBRTable',{spname:'LSW_SCIBILRPTDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','CIBILReport');"  class="btn waves-effect btn-yelInplain btn-sm">View Report</button>
	            </div>
	        </div>
	         <div class="col-md-5">
	             <div class="md-form">
	              </div>
	         </div>
	 </div>
   </form>
 </div>  
         <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
            <button type="button" id="" data-card="2" onclick="NXTTAB(this)" class="btn btn-yel Btxt2 ADDBTN">Next</button>
			<!--<button type="button"  id="" onclick="REinitCol()" class="btn btn-yel Btxt2  BTNHIDE">Initiate Collections</button>-->
         </div>
      </div>  
   </div>                           
</div>
 <a type="button" id="MobIPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#MobIModal">
 <i class="fa fa-plus"></i></a>
    
  
<div class="modal fade" id="MobIModal" tabindex="-1" role="dialog" aria-labelledby="MobIModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">DEFERRED</div> 
   
   <a href="#"><img id="MOBIPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div> 
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class=""> 
         <form >
        	
        	<div class="form-row"  style="display:none">
        		<div class="col">
        			<div class="md-form">
        				<div class="form-group">
        					 <select class="mdb-select md-form colorful-select dropdown-primary " id="DeferredTo" name="DeferredTo">
			                  	<option value="">Select</option>
							</select>
							<label class="mdb-main-label BTxt9">Deferred To<span class="MndtryAstr"></span></label>
        				</div>
        			</div>
        		</div>
        	</div>
                   <div class="form-row">
                  <div class="col">
                  <div class="md-form">
                  <label >Remarks</label>
                  <br>
                  <textarea class="form-control Btxt10 " rows="5" id="comment" style="height: 130px;width:502px;"></textarea>
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
       <button type="button" id="Defferment" onclick="InitDiffrmnt()" class="btn btn-yel Btxt2">Initiate Deferment</button>
      </div>
    </div>
  </div>
  </div> 
  
	
	 <a type="button" id="CCCibilRptModal" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#CibilRptModal">
 <i class="fa fa-plus"></i></a>
	
  <div class="modal fade" id="CibilRptModal" tabindex="-1" role="dialog" aria-labelledby="CibilRptModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:1200px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">CIBIL Reports</div> 
   
   <a href="#"><img id="CibilRptPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
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
                    
					<table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="CBRTable">
                     </table>
					
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
       <!-- <button type="button" id="Defferment"  class="btn btn-yel Btxt2">Initiate Deferement</button>-->
      </div>
    </div>
  </div>
  </div>  
 
   <script type="text/javascript" src="ThemeproLO/UCV/PFBank/Script/PFDtls/LoadSubmit.js${DMY13}"></script>
   <script type="text/javascript" src="ThemeproLO/UCV/PFBank/Script/PFDtls/Validation.js${DMY13}"></script>                            
     
                                  <!--   </div>
                                </div>   -->    
                                
                                
<script>

/* $(document).ready(function(){
	
	$("input[name='PFDT_MODE']").change(function(){
	    if($('#OnlRadio').prop('checked')){
	    	$("#OnlinePayCollapse").addClass("show");
	    }
	    else{
	    	$("#OnlinePayCollapse").removeClass("show");
	    }
	    if($('#ChqRadio').prop('checked')){
	    	$("#ChequePayCollapse").addClass("show");
	    }
	    else{
	    	$("#ChequePayCollapse").removeClass("show");
	    }
	});
	
	
});
	*/
</script>

<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>