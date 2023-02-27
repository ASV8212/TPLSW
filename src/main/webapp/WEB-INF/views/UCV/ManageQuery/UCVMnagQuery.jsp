<!--Main row-->
<!--Card-->
<div class="">
   <!--Admin panel-->
   </br>
   <div class="admin-panel">
   <a type="button" id="GoBackToAppln"class="Btxt4 GoBackToAppln" style="display:none" href="#"><- RETURN TO APPLICATION</a>
      <!-- Start -->
      <!--<div class="row">
         <div class="col-lg-12">
            <ul title="ManageQuery" data-popup="" class="nav FormPageMultiTab">
               ${SUBPAGETABDATA}
               <!-- <li id="Co-Applicant1" value="" title = "Co-Applicant1" class="nav-item  active">
                  <a> <div class="nav-link" href="#">Co-Applicant 1</div></a>
                  </li>      
                     
                  <li id=""  value="Add" title = "" class="nav-item FormPageMultiTabAdd">
                  <a> <div class="nav-link" href="#">+ Add</div>  </a>
                  </li>
                  // 
            </ul>
         </div>
      </div>-->
       <div class="HyperControls" style="display:none">
          <a type="button" class="Btxt4 RAISEQUERY FltRight" id="RQ" data-toggle="modal" data-target="#RAISEQUERYModal" href="#" >Raise a Query</a>
       </div>
	  
    <!--  <div class="HyperControls">
 <a class="Btxt4" id="RQ" class="RAISEQUERY FltRight " href="#">Raise a Query</a>
 <a class="Btxt4" id="AuditTrail" href="#">Audit Trail</a> 
</div>-->
   <div class="card CardNS">
     <div class="card-body px-lg-5 pt-0 BSbrdlight">
        <div class="row">
	       <div class="col-lg-12">
		</br>
		  <ul class="nav FormPageSubTab FormPageSubTab1">      
		   ${DMY2}
             <!--<li id="IQQR" value="" title="Queries Received" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Queries Received</div>
               </a>
             </li>
             <li id="IQQRL" value="" title="Queries Resolved" class="nav-item ">
               <a>
                  <div class="nav-link" href="#">Queries Resolved</div>
               </a>
             </li>-->
         </ul>
    </div>
</div>
    </div>
   </div>
      <!-- card -->
   </div>
</div>
</br>

     <div class="HiddenBTN">
         <input type="button" style="display:none" class="DashTrg"  id="BTNBANKING" name="BTNBANKING" /><!-- Banking -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNPROPERTY" name="BTNPROPERTY" /><!-- Property -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNFINANCIALS" name="BTNFINANCIALS" /><!-- Financials -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNCAMANDAPPR" name="BTNCAMANDAPPR" /><!-- CAM & Reports -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNDOCUMENT" name="BTNDOCUMENT" /><!-- Documents -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNREPORT" name="BTNREPORT" /><!-- Reports -->
         <input type="button" style="display:none" class="DashTrg"  id="BTNOTHERS" name="BTNOTHERS" /><!--Others -->
      </div>
<div class="Formaccordion accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
         <!-- Family Background Start -->
         <div class="card ">
            <!-- Card header -->
            <div class="card-header Btxt7 active" role="tab" id="headingOne1">
               <!-- data-multidata="|PrcsID||ApproveNote1|AAPRDBfields|LSW_SGETFMLYDTL" -->
               <a class="collapsed Btxt8 AFormaccordion" data-toggle="collapse" data-load="Yes" data-multidata="" data-aria="" data-parent="#accordionEx" href="#S01"
                  aria-expanded="true" aria-controls="collapse1">
             <span>  KYC - </span>
			  <span type="text" class="DataFld MQKMDBfields RSCNT S01" id="" name="" title=""></span>
			   <i class="fa rotate-icon fa-minus-circle"></i>
               </a>
            </div>
            <div id="S01" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
               data-parent="#accordionEx">
                  <div class="card-body px-lg-5 pt-0" >
                        </br>
                        <form>
                           <input type="text" id="MQKM_PRCSID" hidden="hidden" name="MQKM_PRCSID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_ACTIVITYID" hidden="hidden" name="MQKM_ACTIVITYID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_CREATEDBY" hidden="hidden" name="MQKM_CREATEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTCREATED" hidden="hidden" name="MQKM_DTCREATED" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_MODIFIEDBY" hidden="hidden" name="MQKM_MODIFIEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTMODIFIED" hidden="hidden"  name="MQKM_DTMODIFIED" class="form-control MQKMDBfields">

                           <div data-for="KYC" class="KYC row">
                           </div>
                           <div class="DynamicPageGrid" data-val="PROPTXTHDR|Firm" id="KYC" style="display:none">
                              <div class="DYNROW col-md-4 Qboxbrd" >
                        <form>
                        <input type="text" id="MNGQ_PRCSID" hidden="hidden" name="MNGQ_PRCSID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_ACTIVITYID" hidden="hidden" name="MNGQ_ACTIVITYID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTCREATED" hidden="hidden" name="MNGQ_DTCREATED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_CREATEDBY" hidden="hidden" name="MNGQ_CREATEDBY" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTMODIFIED" hidden="hidden" name="MNGQ_DTMODIFIED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_MODIFIEDBY" hidden="hidden"  name="MNGQ_MODIFIEDBY" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_QURYID" hidden="hidden"  name="MNGQ_QURYID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_FRMUSRID" hidden="hidden"  name="MNGQ_FRMUSRID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_TOUSRID" hidden="hidden"  name="MNGQ_TOUSRID" class="form-control MNGQDBfields">
  <input type="text" id="MNGQ_QRYSTUS" hidden="hidden"  name="MNGQ_QRYSTUS" class="form-control MNGQDBfields">
</br>
<div class="FLDCOMP">
						<div class="form-row">
                          <div class="col-md-5">
                              <div class="md-form">
                              
                              <ul class="nav FormPageTab FormMainTab1">      
      <li class="nav-item RoundTabs  Qtyprndblue"><div class="nav-link active"><span id="MNGQ_TYP" name="MNGQ_TYP" class="MNGQDBfields "></span></div></li>
      </ul>
                <!--  <input type="text" id="MNGQ_TYP" name="MNGQ_TYP" class="form-control  DSVLBL MNGQDBfields "> -->
                              </div>
                           </div>
                         
                         <div class="col-md-7">
                           <span id="MNGQ_APPLNNAME" name="MNGQ_APPLNNAME" class="MNGQDBfields QBtxt3"></span>
                           
                           </div>
                           
                           
                   <div class="col-md-4" style="display:none">        
                           
                           <div class="dotted-scrollspy hidden-sm-down">
    <ul class="nav smooth-scroll d-flex flex-column">
        <li class="nav-item"><a class="nav-link" href="#one"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#two"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#three"><span></span></a></li>

    </ul>
</div>
                           
              </div>             
                           
						 </div>
						 <div class="form-row">
						   <div class="col-md-8">
                              <div class="md-form">
                              <span id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="MNGQDBfields QBtxt2"></span>
                               <!--     <input type="text" id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="form-control DSVLBL MNGQDBfields ">-->
                              </div>
                           </div>
                           
						 </div>
						<div class="form-row">
						   <div class="col">
                            <div class="md-form">
							
                               
                                 <div> <span id="" name="" class="QBtxt5">From</span></div>
                               <div>
                                <span id="MNGQ_FRMUSRNAME" name="MNGQ_FRMUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                
                               
								
                             </div>
                             
							<!-- <input type="text" id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="form-control DSVLBL MNGQDBfields"> --> 
                           </div>
						   <div class="col">
                              <div class="md-form">
                              
                               <div> <span id="" name="" class="QBtxt5">To</span></div>
                               <div>
                                <span id="MNGQ_TOUSRNAME" name="MNGQ_TOUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_TOUSRROLE" name="MNGQ_TOUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                                           
                               
                               </div>
                           </div>
                      	</div>
                        <div class="form-row">
                        <div class="col">
                         <div class="md-form">
                        <span id="MNGQ_QURYNAME" name="MNGQ_QURYNAME" class="MNGQDBfields QBtxt6"></span>
                        </div>
                              </div>
                        </div>
                         <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                            
                              <span id="MNGQ_DESC" name="MNGQ_DESC" class="MNGQDBfields QBtxt9"></span>
                            
                                
                             </div>
                           </div>
                           </div>
						    <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                                <input type="text" id="MNGQ_ATTCHURL" hidden="hidden" name="MNGQ_ATTCHURL" class="form-control DSVLBL MNGQDBfields">
								<!-- <input type="text" id="MNGQ_URLFILENAME" disabled name="MNGQ_URLFILENAME" class="form-control DSVLBL MNGQDBfields"> --> 
								
								 <span id="MNGQ_URLFILENAME" name="MNGQ_URLFILENAME" class="MNGQDBfields QBtxt7"></span>
								<span></span>
								<span class="MNGQ_ATTCHURL" style="display:none"> 
								  <img src="ThemeproLO/Common/FEP/images/BluVwIcon.png" title="VIEW" onclick="GrdDocDwnld('MNGQ_ATTCHURL'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" alt="Cinque Terre" width="24px" height="16px"> 
                              </span>
                             </div>
                           </div>
                           </div>
                        </form>
                        
                        
                         </div>
                   
                        <div class="BTNBottomDIV">
						 <div class="form-row IQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
                           </div>
                        </div>
						<div class="form-row OQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
							  <!--IQQRBTN-->
                              <button type="button" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" id="ReAssign" data-toggle="modal" data-target="#ReAssignQry" href="#" data-card="2" style="display:none" class="btn btn-Syel waves-effect waves-light  ">Re-Assign</button> 
                           </div>
                        </div>
						<div class="form-row CQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
                           </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </form>
                     </div>
               <!--  </div> -->
            </div>
         </div>
         <!-- Family Background End -->
         <!-- Business Details Start -->
         <div class="card BUSINESS">
            <div class="card-header Btxt7" role="tab" id="heading2">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNBANKING" data-aria="" data-parent="#accordionEx" href="#S02"
                  aria-expanded="true" aria-controls="collapse1">
               <span>  Banking - </span>
			   <span type="text" class="DataFld MQKMDBfields RSCNT S02" id="" name="" title=""></span>
			   <i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>           
             <div id="S02" class="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                   <div class="card-body px-lg-5 pt-0" >
                        </br>
                        <form>
                           <input type="text" id="MQKM_PRCSID" hidden="hidden" name="MQKM_PRCSID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_ACTIVITYID" hidden="hidden" name="MQKM_ACTIVITYID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_CREATEDBY" hidden="hidden" name="MQKM_CREATEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTCREATED" hidden="hidden" name="MQKM_DTCREATED" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_MODIFIEDBY" hidden="hidden" name="MQKM_MODIFIEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTMODIFIED" hidden="hidden"  name="MQKM_DTMODIFIED" class="form-control MQKMDBfields">

                           <div data-for="BANKING" class="BANKING row">
                           </div>
                           <div class="DynamicPageGrid" data-val="PROPTXTHDR|Firm" id="BANKING" style="display:none">
                              <div class="DYNROW col-md-4 Qboxbrd" >
                        <form>
                        <input type="text" id="MNGQ_PRCSID" hidden="hidden" name="MNGQ_PRCSID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_ACTIVITYID" hidden="hidden" name="MNGQ_ACTIVITYID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTCREATED" hidden="hidden" name="MNGQ_DTCREATED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_CREATEDBY" hidden="hidden" name="MNGQ_CREATEDBY" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTMODIFIED" hidden="hidden" name="MNGQ_DTMODIFIED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_MODIFIEDBY" hidden="hidden"  name="MNGQ_MODIFIEDBY" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_QURYID" hidden="hidden"  name="MNGQ_QURYID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_FRMUSRID" hidden="hidden"  name="MNGQ_FRMUSRID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_TOUSRID" hidden="hidden"  name="MNGQ_TOUSRID" class="form-control MNGQDBfields">
  <input type="text" id="MNGQ_QRYSTUS" hidden="hidden"  name="MNGQ_QRYSTUS" class="form-control MNGQDBfields">
</br>
<div class="FLDCOMP">
						<div class="form-row">
                          <div class="col-md-5">
                              <div class="md-form">
                              
                              <ul class="nav FormPageTab FormMainTab1">      
      <li class="nav-item RoundTabs  Qtyprndblue"><div class="nav-link active"><span id="MNGQ_TYP" name="MNGQ_TYP" class="MNGQDBfields "></span></div></li>
      </ul>
                <!--  <input type="text" id="MNGQ_TYP" name="MNGQ_TYP" class="form-control  DSVLBL MNGQDBfields "> -->
                              </div>
                           </div>
                         
                         <div class="col-md-7">
                           <span id="MNGQ_APPLNNAME" name="MNGQ_APPLNNAME" class="MNGQDBfields QBtxt3"></span>
                           
                           </div>
                           
                           
                   <div class="col-md-4" style="display:none">        
                           
                           <div class="dotted-scrollspy hidden-sm-down">
    <ul class="nav smooth-scroll d-flex flex-column">
        <li class="nav-item"><a class="nav-link" href="#one"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#two"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#three"><span></span></a></li>

    </ul>
</div>
                           
              </div>             
                           
						 </div>
						 <div class="form-row">
						   <div class="col-md-8">
                              <div class="md-form">
                              <span id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="MNGQDBfields QBtxt2"></span>
                               <!--     <input type="text" id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="form-control DSVLBL MNGQDBfields ">-->
                              </div>
                           </div>
						 </div>
						<div class="form-row">
						   <div class="col">
                            <div class="md-form">
							
                               
                                 <div> <span id="" name="" class="QBtxt5">From</span></div>
                               <div>
                                <span id="MNGQ_FRMUSRNAME" name="MNGQ_FRMUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                
                               
								
                             </div>
                             
							<!-- <input type="text" id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="form-control DSVLBL MNGQDBfields"> --> 
                           </div>
						   <div class="col">
                              <div class="md-form">
                              
                               <div> <span id="" name="" class="QBtxt5">To</span></div>
                               <div>
                                <span id="MNGQ_TOUSRNAME" name="MNGQ_TOUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_TOUSRROLE" name="MNGQ_TOUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                                           
                               
                               </div>
                           </div>
                      	</div>
                        <div class="form-row">
                        <div class="col">
                         <div class="md-form">
                        <span id="MNGQ_QURYNAME" name="MNGQ_QURYNAME" class="MNGQDBfields QBtxt6"></span>
                        </div>
                              </div>
                        </div>
                         <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                            
                              <span id="MNGQ_DESC" name="MNGQ_DESC" class="MNGQDBfields QBtxt9"></span>
                            
                                
                             </div>
                           </div>
                           </div>
						    <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                                <input type="text" id="MNGQ_ATTCHURL" hidden="hidden" name="MNGQ_ATTCHURL" class="form-control DSVLBL MNGQDBfields">
								<!-- <input type="text" id="MNGQ_URLFILENAME" disabled name="MNGQ_URLFILENAME" class="form-control DSVLBL MNGQDBfields"> --> 
								
								 <span id="MNGQ_URLFILENAME" name="MNGQ_URLFILENAME" class="MNGQDBfields QBtxt7"></span>
								<span></span>
								<span class="MNGQ_ATTCHURL" style="display:none"> 
								  <img src="ThemeproLO/Common/FEP/images/BluVwIcon.png" title="VIEW" onclick="GrdDocDwnld('MNGQ_ATTCHURL'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" alt="Cinque Terre" width="24px" height="16px"> 
                              </span>
                             </div>
                           </div>
                           </div>
                        </form>
                        
                        
                         </div>
                   
                        <div class="BTNBottomDIV">
						 <div class="form-row IQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
                           </div>
                        </div>
						<div class="form-row OQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
							  <!--IQQRBTN-->
                              <button type="button" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" id="ReAssign" data-toggle="modal" data-target="#ReAssignQry" href="#" data-card="2" style="display:none" class="btn btn-Syel waves-effect waves-light  ">Re-Assign</button> 
                           </div>
                        </div>
						<div class="form-row CQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
                           </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </form>
                     </div>
                  </div>
               </div>
         <!-- Business Details End -->
         <!-- Other Income Start -->
               <div class="card ">
                  <!-- Card header -->
                  <div class="card-header Btxt7" role="tab" id="heading1">
                     <!-- |PrcsID||ApproveNote3|APOIDBfields|LSW_SGETAPPLNTEMPDTL -->
                     <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNPROPERTY" data-aria="" data-parent="#accordionEx" href="#S03"
                        aria-expanded="true" aria-controls="collapse1">
                     <span>  Property - </span>
			 <span type="text" class="DataFld MQKMDBfields RSCNT S03" id="" name="" title=""></span>
					 
					 <i class="fa fa-plus-circle rotate-icon"></i>
                     </a>
                  </div>
                  <div id="S03" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
                     data-parent="#accordionEx">
                     <div class="card-body px-lg-5 pt-0" >
                        </br>
                        <form>
                           <input type="text" id="MQKM_PRCSID" hidden="hidden" name="MQKM_PRCSID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_ACTIVITYID" hidden="hidden" name="MQKM_ACTIVITYID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_CREATEDBY" hidden="hidden" name="MQKM_CREATEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTCREATED" hidden="hidden" name="MQKM_DTCREATED" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_MODIFIEDBY" hidden="hidden" name="MQKM_MODIFIEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTMODIFIED" hidden="hidden"  name="MQKM_DTMODIFIED" class="form-control MQKMDBfields">

                           <div data-for="PROPERTY" class="PROPERTY row">
                           </div>
                           <div class="DynamicPageGrid" data-val="PROPTXTHDR|Firm" id="PROPERTY" style="display:none">
                              <div class="DYNROW col-md-4 Qboxbrd" >
                        <form>
                        <input type="text" id="MNGQ_PRCSID" hidden="hidden" name="MNGQ_PRCSID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_ACTIVITYID" hidden="hidden" name="MNGQ_ACTIVITYID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTCREATED" hidden="hidden" name="MNGQ_DTCREATED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_CREATEDBY" hidden="hidden" name="MNGQ_CREATEDBY" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTMODIFIED" hidden="hidden" name="MNGQ_DTMODIFIED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_MODIFIEDBY" hidden="hidden"  name="MNGQ_MODIFIEDBY" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_QURYID" hidden="hidden"  name="MNGQ_QURYID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_FRMUSRID" hidden="hidden"  name="MNGQ_FRMUSRID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_TOUSRID" hidden="hidden"  name="MNGQ_TOUSRID" class="form-control MNGQDBfields">
  <input type="text" id="MNGQ_QRYSTUS" hidden="hidden"  name="MNGQ_QRYSTUS" class="form-control MNGQDBfields">
</br>
<div class="FLDCOMP">
						<div class="form-row">
                          <div class="col-md-5">
                              <div class="md-form">
                              
                              <ul class="nav FormPageTab FormMainTab1">      
      <li class="nav-item RoundTabs  Qtyprndblue"><div class="nav-link active"><span id="MNGQ_TYP" name="MNGQ_TYP" class="MNGQDBfields "></span></div></li>
      </ul>
                <!--  <input type="text" id="MNGQ_TYP" name="MNGQ_TYP" class="form-control  DSVLBL MNGQDBfields "> -->
                              </div>
                           </div>
                         
                         <div class="col-md-7">
                           <span id="MNGQ_APPLNNAME" name="MNGQ_APPLNNAME" class="MNGQDBfields QBtxt3"></span>
                           
                           </div>
                           
                           
                   <div class="col-md-4" style="display:none">        
                           
                           <div class="dotted-scrollspy hidden-sm-down">
    <ul class="nav smooth-scroll d-flex flex-column">
        <li class="nav-item"><a class="nav-link" href="#one"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#two"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#three"><span></span></a></li>

    </ul>
</div>
                           
              </div>             
                           
						 </div>
						 <div class="form-row">
						   <div class="col-md-8">
                              <div class="md-form">
                              <span id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="MNGQDBfields QBtxt2"></span>
                               <!--     <input type="text" id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="form-control DSVLBL MNGQDBfields ">-->
                              </div>
                           </div>
						 </div>
						<div class="form-row">
						   <div class="col">
                            <div class="md-form">
							
                               
                                 <div> <span id="" name="" class="QBtxt5">From</span></div>
                               <div>
                                <span id="MNGQ_FRMUSRNAME" name="MNGQ_FRMUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                
                               
								
                             </div>
                             
							<!-- <input type="text" id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="form-control DSVLBL MNGQDBfields"> --> 
                           </div>
						   <div class="col">
                              <div class="md-form">
                              
                               <div> <span id="" name="" class="QBtxt5">To</span></div>
                               <div>
                                <span id="MNGQ_TOUSRNAME" name="MNGQ_TOUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_TOUSRROLE" name="MNGQ_TOUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                                           
                               
                               </div>
                           </div>
                      	</div>
                        <div class="form-row">
                        <div class="col">
                         <div class="md-form">
                        <span id="MNGQ_QURYNAME" name="MNGQ_QURYNAME" class="MNGQDBfields QBtxt6"></span>
                        </div>
                              </div>
                        </div>
                         <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                            
                              <span id="MNGQ_DESC" name="MNGQ_DESC" class="MNGQDBfields QBtxt9"></span>
                            
                                
                             </div>
                           </div>
                           </div>
						    <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                                <input type="text" id="MNGQ_ATTCHURL" hidden="hidden" name="MNGQ_ATTCHURL" class="form-control DSVLBL MNGQDBfields">
								<!-- <input type="text" id="MNGQ_URLFILENAME" disabled name="MNGQ_URLFILENAME" class="form-control DSVLBL MNGQDBfields"> --> 
								
								 <span id="MNGQ_URLFILENAME" name="MNGQ_URLFILENAME" class="MNGQDBfields QBtxt7"></span>
								<span></span>
								<span class="MNGQ_ATTCHURL" style="display:none"> 
								  <img src="ThemeproLO/Common/FEP/images/BluVwIcon.png" title="VIEW" onclick="GrdDocDwnld('MNGQ_ATTCHURL'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" alt="Cinque Terre" width="24px" height="16px"> 
                              </span>
                             </div>
                           </div>
                           </div>
                        </form>
                        
                        
                         </div>
                   
                        <div class="BTNBottomDIV">
						 <div class="form-row IQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>    
                           </div>
                        </div>
						<div class="form-row OQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>  
								<!--IQQRBTN-->							  
                              <button type="button" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" id="ReAssign" data-toggle="modal" data-target="#ReAssignQry" href="#" data-card="2" style="display:none" class="btn btn-Syel waves-effect waves-light  ">Re-Assign</button> 
                           </div>
                        </div>
						<div class="form-row CQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
                           </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </form>
                     </div>
                  </div>
               </div>
         
         <!-- Other Income End -->
         <!-- Financials Start -->

         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="headingFour4">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNFINANCIALS" data-aria="" data-parent="#accordionEx" href="#S04"
                  aria-expanded="false" aria-controls="S04">
               
			   <span>  Financials - </span>
			 <span type="text" class="DataFld MQKMDBfields RSCNT S04" id="" name="" title=""></span>
			   <i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="S04" class="collapse" role="tabpanel" aria-labelledby="headingFour4"
               data-parent="#accordionEx">
               <div class="card-body px-lg-5 pt-0" >
                  </br>
                        <form>
                           <input type="text" id="MQKM_PRCSID" hidden="hidden" name="MQKM_PRCSID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_ACTIVITYID" hidden="hidden" name="MQKM_ACTIVITYID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_CREATEDBY" hidden="hidden" name="MQKM_CREATEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTCREATED" hidden="hidden" name="MQKM_DTCREATED" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_MODIFIEDBY" hidden="hidden" name="MQKM_MODIFIEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTMODIFIED" hidden="hidden"  name="MQKM_DTMODIFIED" class="form-control MQKMDBfields">

                           <div data-for="FINANCIALS" class="FINANCIALS row">
                           </div>
                           <div class="DynamicPageGrid" data-val="PROPTXTHDR|Firm" id="FINANCIALS" style="display:none">
                              <div class="DYNROW col-md-4 Qboxbrd" >
                        <form>
                        <input type="text" id="MNGQ_PRCSID" hidden="hidden" name="MNGQ_PRCSID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_ACTIVITYID" hidden="hidden" name="MNGQ_ACTIVITYID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTCREATED" hidden="hidden" name="MNGQ_DTCREATED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_CREATEDBY" hidden="hidden" name="MNGQ_CREATEDBY" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTMODIFIED" hidden="hidden" name="MNGQ_DTMODIFIED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_MODIFIEDBY" hidden="hidden"  name="MNGQ_MODIFIEDBY" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_QURYID" hidden="hidden"  name="MNGQ_QURYID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_FRMUSRID" hidden="hidden"  name="MNGQ_FRMUSRID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_TOUSRID" hidden="hidden"  name="MNGQ_TOUSRID" class="form-control MNGQDBfields">
  <input type="text" id="MNGQ_QRYSTUS" hidden="hidden"  name="MNGQ_QRYSTUS" class="form-control MNGQDBfields">
</br>
<div class="FLDCOMP">
						<div class="form-row">
                          <div class="col-md-5">
                              <div class="md-form">
                              
                              <ul class="nav FormPageTab FormMainTab1">      
      <li class="nav-item RoundTabs  Qtyprndblue"><div class="nav-link active"><span id="MNGQ_TYP" name="MNGQ_TYP" class="MNGQDBfields "></span></div></li>
      </ul>
                <!--  <input type="text" id="MNGQ_TYP" name="MNGQ_TYP" class="form-control  DSVLBL MNGQDBfields "> -->
                              </div>
                           </div>
                         
                         <div class="col-md-7">
                           <span id="MNGQ_APPLNNAME" name="MNGQ_APPLNNAME" class="MNGQDBfields QBtxt3"></span>
                           
                           </div>
                           
                           
                   <div class="col-md-4" style="display:none">        
                           
                           <div class="dotted-scrollspy hidden-sm-down">
    <ul class="nav smooth-scroll d-flex flex-column">
        <li class="nav-item"><a class="nav-link" href="#one"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#two"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#three"><span></span></a></li>

    </ul>
</div>
                           
              </div>             
                           
						 </div>
						 <div class="form-row">
						   <div class="col-md-8">
                              <div class="md-form">
                              <span id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="MNGQDBfields QBtxt2"></span>
                               <!--     <input type="text" id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="form-control DSVLBL MNGQDBfields ">-->
                              </div>
                           </div>
						 </div>
						<div class="form-row">
						   <div class="col">
                            <div class="md-form">
							
                               
                                 <div> <span id="" name="" class="QBtxt5">From</span></div>
                               <div>
                                <span id="MNGQ_FRMUSRNAME" name="MNGQ_FRMUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                
                               
								
                             </div>
                             
							<!-- <input type="text" id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="form-control DSVLBL MNGQDBfields"> --> 
                           </div>
						   <div class="col">
                              <div class="md-form">
                              
                               <div> <span id="" name="" class="QBtxt5">To</span></div>
                               <div>
                                <span id="MNGQ_TOUSRNAME" name="MNGQ_TOUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_TOUSRROLE" name="MNGQ_TOUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                                           
                               
                               </div>
                           </div>
                      	</div>
                        <div class="form-row">
                        <div class="col">
                         <div class="md-form">
                        <span id="MNGQ_QURYNAME" name="MNGQ_QURYNAME" class="MNGQDBfields QBtxt6"></span>
                        </div>
                              </div>
                        </div>
                         <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                            
                              <span id="MNGQ_DESC" name="MNGQ_DESC" class="MNGQDBfields QBtxt9"></span>
                            
                                
                             </div>
                           </div>
                           </div>
						    <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                                <input type="text" id="MNGQ_ATTCHURL" hidden="hidden" name="MNGQ_ATTCHURL" class="form-control DSVLBL MNGQDBfields">
								<!-- <input type="text" id="MNGQ_URLFILENAME" disabled name="MNGQ_URLFILENAME" class="form-control DSVLBL MNGQDBfields"> --> 
								
								 <span id="MNGQ_URLFILENAME" name="MNGQ_URLFILENAME" class="MNGQDBfields QBtxt7"></span>
								<span></span>
								<span class="MNGQ_ATTCHURL" style="display:none"> 
								  <img src="ThemeproLO/Common/FEP/images/BluVwIcon.png" title="VIEW" onclick="GrdDocDwnld('MNGQ_ATTCHURL'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" alt="Cinque Terre" width="24px" height="16px"> 
                              </span>
                             </div>
                           </div>
                           </div>
                        </form>
                        
                        
                         </div>
                   
                        <div class="BTNBottomDIV">
						 <div class="form-row IQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>     
                           </div>
                        </div>
						<div class="form-row OQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
							   <!--IQQRBTN-->
                              <button type="button" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" id="ReAssign" data-toggle="modal" data-target="#ReAssignQry" href="#" data-card="2" style="display:none" class="btn btn-Syel waves-effect waves-light  ">Re-Assign</button> 
                           </div>
                        </div>
						<div class="form-row CQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
                           </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </form>
               </div>
            </div>
         </div>
         <!-- Financials End -->
         <!-- Banking Start -->
         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="heading1">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNCAMANDAPPR" data-aria="" data-parent="#accordionEx" href="#S05"
                  aria-expanded="false" aria-controls="collapse1">
               
			   <span>  CAM & Approval - </span>
			 <span type="text" class="DataFld MQKMDBfields RSCNT S05" id="" name="" title=""></span>
			   
			   <i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="S05" class="collapse" role="tabpanel" aria-labelledby="headingFive5"
               data-parent="#accordionEx">
               <div class="card-body px-lg-5 pt-0" >
                  </br>
                        <form>
                           <input type="text" id="MQKM_PRCSID" hidden="hidden" name="MQKM_PRCSID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_ACTIVITYID" hidden="hidden" name="MQKM_ACTIVITYID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_CREATEDBY" hidden="hidden" name="MQKM_CREATEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTCREATED" hidden="hidden" name="MQKM_DTCREATED" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_MODIFIEDBY" hidden="hidden" name="MQKM_MODIFIEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTMODIFIED" hidden="hidden"  name="MQKM_DTMODIFIED" class="form-control MQKMDBfields">

                           <div data-for="CAMAPPRV" class="CAMAPPRV row">
                           </div>
                           <div class="DynamicPageGrid" data-val="PROPTXTHDR|Firm" id="CAMAPPRV" style="display:none">
                              <div class="DYNROW col-md-4 Qboxbrd" >
                        <form>
                        <input type="text" id="MNGQ_PRCSID" hidden="hidden" name="MNGQ_PRCSID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_ACTIVITYID" hidden="hidden" name="MNGQ_ACTIVITYID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTCREATED" hidden="hidden" name="MNGQ_DTCREATED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_CREATEDBY" hidden="hidden" name="MNGQ_CREATEDBY" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTMODIFIED" hidden="hidden" name="MNGQ_DTMODIFIED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_MODIFIEDBY" hidden="hidden"  name="MNGQ_MODIFIEDBY" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_QURYID" hidden="hidden"  name="MNGQ_QURYID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_FRMUSRID" hidden="hidden"  name="MNGQ_FRMUSRID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_TOUSRID" hidden="hidden"  name="MNGQ_TOUSRID" class="form-control MNGQDBfields">
  <input type="text" id="MNGQ_QRYSTUS" hidden="hidden"  name="MNGQ_QRYSTUS" class="form-control MNGQDBfields">
</br>
<div class="FLDCOMP">
						<div class="form-row">
                          <div class="col-md-5">
                              <div class="md-form">
                              
                              <ul class="nav FormPageTab FormMainTab1">      
      <li class="nav-item RoundTabs  Qtyprndblue"><div class="nav-link active"><span id="MNGQ_TYP" name="MNGQ_TYP" class="MNGQDBfields "></span></div></li>
      </ul>
                <!--  <input type="text" id="MNGQ_TYP" name="MNGQ_TYP" class="form-control  DSVLBL MNGQDBfields "> -->
                              </div>
                           </div>
                         
                         <div class="col-md-7">
                           <span id="MNGQ_APPLNNAME" name="MNGQ_APPLNNAME" class="MNGQDBfields QBtxt3"></span>
                           
                           </div>
                           
                           
                   <div class="col-md-4" style="display:none">        
                           
                           <div class="dotted-scrollspy hidden-sm-down">
    <ul class="nav smooth-scroll d-flex flex-column">
        <li class="nav-item"><a class="nav-link" href="#one"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#two"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#three"><span></span></a></li>

    </ul>
</div>
                           
              </div>             
                           
						 </div>
						 <div class="form-row">
						   <div class="col-md-8">
                              <div class="md-form">
                              <span id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="MNGQDBfields QBtxt2"></span>
                               <!--     <input type="text" id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="form-control DSVLBL MNGQDBfields ">-->
                              </div>
                           </div>
						 </div>
						<div class="form-row">
						   <div class="col">
                            <div class="md-form">
							
                               
                                 <div> <span id="" name="" class="QBtxt5">From</span></div>
                               <div>
                                <span id="MNGQ_FRMUSRNAME" name="MNGQ_FRMUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                
                               
								
                             </div>
                             
							<!-- <input type="text" id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="form-control DSVLBL MNGQDBfields"> --> 
                           </div>
						   <div class="col">
                              <div class="md-form">
                              
                               <div> <span id="" name="" class="QBtxt5">To</span></div>
                               <div>
                                <span id="MNGQ_TOUSRNAME" name="MNGQ_TOUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_TOUSRROLE" name="MNGQ_TOUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                                           
                               
                               </div>
                           </div>
                      	</div>
                        <div class="form-row">
                        <div class="col">
                         <div class="md-form">
                        <span id="MNGQ_QURYNAME" name="MNGQ_QURYNAME" class="MNGQDBfields QBtxt6"></span>
                        </div>
                              </div>
                        </div>
                         <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                            
                              <span id="MNGQ_DESC" name="MNGQ_DESC" class="MNGQDBfields QBtxt9"></span>
                            
                                
                             </div>
                           </div>
                           </div>
						    <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                                <input type="text" id="MNGQ_ATTCHURL" hidden="hidden" name="MNGQ_ATTCHURL" class="form-control DSVLBL MNGQDBfields">
								<!-- <input type="text" id="MNGQ_URLFILENAME" disabled name="MNGQ_URLFILENAME" class="form-control DSVLBL MNGQDBfields"> --> 
								
								 <span id="MNGQ_URLFILENAME" name="MNGQ_URLFILENAME" class="MNGQDBfields QBtxt7"></span>
								<span></span>
								<span class="MNGQ_ATTCHURL" style="display:none"> 
								  <img src="ThemeproLO/Common/FEP/images/BluVwIcon.png" title="VIEW" onclick="GrdDocDwnld('MNGQ_ATTCHURL'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" alt="Cinque Terre" width="24px" height="16px"> 
                              </span>
                             </div>
                           </div>
                           </div>
                        </form>
                        
                        
                         </div>
                   
                        <div class="BTNBottomDIV">
						 <div class="form-row IQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>    
                           </div>
                        </div>
						<div class="form-row OQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>
								<!--IQQRBTN-->							  
                              <button type="button" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" id="ReAssign" data-toggle="modal" data-target="#ReAssignQry" href="#" data-card="2" style="display:none" class="btn btn-Syel waves-effect waves-light  ">Re-Assign</button> 
                           </div>
                        </div>
						<div class="form-row CQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
                           </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </form>
               </div>
            </div>
         </div>
         <!-- Banking End -->
         <!-- Loan Start -->
         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="heading1">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNDOCUMENT" data-aria="" data-parent="#accordionEx" href="#S06"
                  aria-expanded="true" aria-controls="collapse1">
               
			      <span>Documents - </span>
			 <span type="text" class="DataFld MQKMDBfields RSCNT S06" id="" name="" title=""></span>
			   
			   <i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="S06" class="collapse" role="tabpanel" aria-labelledby="headingSix6"
               data-parent="#accordionEx">
               <div class="card-body px-lg-5 pt-0">
                 </br>
                        <form>
                           <input type="text" id="MQKM_PRCSID" hidden="hidden" name="MQKM_PRCSID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_ACTIVITYID" hidden="hidden" name="MQKM_ACTIVITYID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_CREATEDBY" hidden="hidden" name="MQKM_CREATEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTCREATED" hidden="hidden" name="MQKM_DTCREATED" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_MODIFIEDBY" hidden="hidden" name="MQKM_MODIFIEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTMODIFIED" hidden="hidden"  name="MQKM_DTMODIFIED" class="form-control MQKMDBfields">

                           <div data-for="DOCUMENTS" class="DOCUMENTS row">
                           </div>
                           <div class="DynamicPageGrid" data-val="PROPTXTHDR|Firm" id="DOCUMENTS" style="display:none">
                              <div class="DYNROW col-md-4 Qboxbrd" >
                        <form>
                        <input type="text" id="MNGQ_PRCSID" hidden="hidden" name="MNGQ_PRCSID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_ACTIVITYID" hidden="hidden" name="MNGQ_ACTIVITYID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTCREATED" hidden="hidden" name="MNGQ_DTCREATED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_CREATEDBY" hidden="hidden" name="MNGQ_CREATEDBY" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTMODIFIED" hidden="hidden" name="MNGQ_DTMODIFIED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_MODIFIEDBY" hidden="hidden"  name="MNGQ_MODIFIEDBY" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_QURYID" hidden="hidden"  name="MNGQ_QURYID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_FRMUSRID" hidden="hidden"  name="MNGQ_FRMUSRID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_TOUSRID" hidden="hidden"  name="MNGQ_TOUSRID" class="form-control MNGQDBfields">
  <input type="text" id="MNGQ_QRYSTUS" hidden="hidden"  name="MNGQ_QRYSTUS" class="form-control MNGQDBfields">
</br>
<div class="FLDCOMP">
						<div class="form-row">
                          <div class="col-md-5">
                              <div class="md-form">
                              
                              <ul class="nav FormPageTab FormMainTab1">      
      <li class="nav-item RoundTabs  Qtyprndblue"><div class="nav-link active"><span id="MNGQ_TYP" name="MNGQ_TYP" class="MNGQDBfields "></span></div></li>
      </ul>
                <!--  <input type="text" id="MNGQ_TYP" name="MNGQ_TYP" class="form-control  DSVLBL MNGQDBfields "> -->
                              </div>
                           </div>
                         
                         <div class="col-md-7">
                           <span id="MNGQ_APPLNNAME" name="MNGQ_APPLNNAME" class="MNGQDBfields QBtxt3"></span>
                           
                           </div>
                           
                           
                   <div class="col-md-4" style="display:none">        
                           
                           <div class="dotted-scrollspy hidden-sm-down">
    <ul class="nav smooth-scroll d-flex flex-column">
        <li class="nav-item"><a class="nav-link" href="#one"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#two"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#three"><span></span></a></li>

    </ul>
</div>
                           
              </div>             
                           
						 </div>
						 <div class="form-row">
						   <div class="col-md-8">
                              <div class="md-form">
                              <span id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="MNGQDBfields QBtxt2"></span>
                               <!--     <input type="text" id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="form-control DSVLBL MNGQDBfields ">-->
                              </div>
                           </div>
						 </div>
						<div class="form-row">
						   <div class="col">
                            <div class="md-form">
							
                               
                                 <div> <span id="" name="" class="QBtxt5">From</span></div>
                               <div>
                                <span id="MNGQ_FRMUSRNAME" name="MNGQ_FRMUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                
                               
								
                             </div>
                             
							<!-- <input type="text" id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="form-control DSVLBL MNGQDBfields"> --> 
                           </div>
						   <div class="col">
                              <div class="md-form">
                              
                               <div> <span id="" name="" class="QBtxt5">To</span></div>
                               <div>
                                <span id="MNGQ_TOUSRNAME" name="MNGQ_TOUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_TOUSRROLE" name="MNGQ_TOUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                                           
                               
                               </div>
                           </div>
                      	</div>
                        <div class="form-row">
                        <div class="col">
                         <div class="md-form">
                        <span id="MNGQ_QURYNAME" name="MNGQ_QURYNAME" class="MNGQDBfields QBtxt6"></span>
                        </div>
                              </div>
                        </div>
                         <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                            
                              <span id="MNGQ_DESC" name="MNGQ_DESC" class="MNGQDBfields QBtxt9"></span>
                            
                                
                             </div>
                           </div>
                           </div>
						    <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                                <input type="text" id="MNGQ_ATTCHURL" hidden="hidden" name="MNGQ_ATTCHURL" class="form-control DSVLBL MNGQDBfields">
								<!-- <input type="text" id="MNGQ_URLFILENAME" disabled name="MNGQ_URLFILENAME" class="form-control DSVLBL MNGQDBfields"> --> 
								
								 <span id="MNGQ_URLFILENAME" name="MNGQ_URLFILENAME" class="MNGQDBfields QBtxt7"></span>
								<span></span>
								<span class="MNGQ_ATTCHURL" style="display:none"> 
								  <img src="ThemeproLO/Common/FEP/images/BluVwIcon.png" title="VIEW" onclick="GrdDocDwnld('MNGQ_ATTCHURL'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" alt="Cinque Terre" width="24px" height="16px"> 
                              </span>
                             </div>
                           </div>
                           </div>
                        </form>
                        
                        
                         </div>
                   
                        <div class="BTNBottomDIV">
						 <div class="form-row IQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>    
                           </div>
                        </div>
						<div class="form-row OQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
							   <!--IQQRBTN-->
                              <button type="button" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" id="ReAssign" data-toggle="modal" data-target="#ReAssignQry" href="#" data-card="2" style="display:none" class="btn btn-Syel waves-effect waves-light  ">Re-Assign</button> 
                           </div>
                        </div>
						<div class="form-row CQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
                           </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </form>
             </div>
          </div>
         </div>
         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="headingSeven7">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNREPORT" data-aria="" data-parent="#accordionEx" href="#S07"
                  aria-expanded="true" aria-controls="collapse1">
               
			    <span>Reports - </span>
			 <span type="text" class="DataFld MQKMDBfields RSCNT S07" id="" name="" title=""></span>
			   <i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="S07" class="collapse" role="tabpanel" aria-labelledby="headingSeven7"
               data-parent="#accordionEx">
               <div class="card-body px-lg-5 pt-0" >
                 </br>
                        <form>
                           <input type="text" id="MQKM_PRCSID" hidden="hidden" name="MQKM_PRCSID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_ACTIVITYID" hidden="hidden" name="MQKM_ACTIVITYID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_CREATEDBY" hidden="hidden" name="MQKM_CREATEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTCREATED" hidden="hidden" name="MQKM_DTCREATED" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_MODIFIEDBY" hidden="hidden" name="MQKM_MODIFIEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTMODIFIED" hidden="hidden"  name="MQKM_DTMODIFIED" class="form-control MQKMDBfields">

                           <div data-for="REPORTS" class="REPORTS row">
                           </div>
                           <div class="DynamicPageGrid" data-val="PROPTXTHDR|Firm" id="REPORTS" style="display:none">
                              <div class="DYNROW col-md-4 Qboxbrd" >
                        <form>
                        <input type="text" id="MNGQ_PRCSID" hidden="hidden" name="MNGQ_PRCSID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_ACTIVITYID" hidden="hidden" name="MNGQ_ACTIVITYID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTCREATED" hidden="hidden" name="MNGQ_DTCREATED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_CREATEDBY" hidden="hidden" name="MNGQ_CREATEDBY" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTMODIFIED" hidden="hidden" name="MNGQ_DTMODIFIED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_MODIFIEDBY" hidden="hidden"  name="MNGQ_MODIFIEDBY" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_QURYID" hidden="hidden"  name="MNGQ_QURYID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_FRMUSRID" hidden="hidden"  name="MNGQ_FRMUSRID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_TOUSRID" hidden="hidden"  name="MNGQ_TOUSRID" class="form-control MNGQDBfields">
  <input type="text" id="MNGQ_QRYSTUS" hidden="hidden"  name="MNGQ_QRYSTUS" class="form-control MNGQDBfields">
</br>
<div class="FLDCOMP">
						<div class="form-row">
                          <div class="col-md-5">
                              <div class="md-form">
                              
                              <ul class="nav FormPageTab FormMainTab1">      
      <li class="nav-item RoundTabs  Qtyprndblue"><div class="nav-link active"><span id="MNGQ_TYP" name="MNGQ_TYP" class="MNGQDBfields "></span></div></li>
      </ul>
                <!--  <input type="text" id="MNGQ_TYP" name="MNGQ_TYP" class="form-control  DSVLBL MNGQDBfields "> -->
                              </div>
                           </div>
                         
                         <div class="col-md-7">
                           <span id="MNGQ_APPLNNAME" name="MNGQ_APPLNNAME" class="MNGQDBfields QBtxt3"></span>
                           
                           </div>
                           
                           
                   <div class="col-md-4" style="display:none">        
                           
                           <div class="dotted-scrollspy hidden-sm-down">
    <ul class="nav smooth-scroll d-flex flex-column">
        <li class="nav-item"><a class="nav-link" href="#one"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#two"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#three"><span></span></a></li>

    </ul>
</div>
                           
              </div>             
                           
						 </div>
						 <div class="form-row">
						   <div class="col-md-8">
                              <div class="md-form">
                              <span id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="MNGQDBfields QBtxt2"></span>
                               <!--     <input type="text" id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="form-control DSVLBL MNGQDBfields ">-->
                              </div>
                           </div>
						 </div>
						<div class="form-row">
						   <div class="col">
                            <div class="md-form">
							
                               
                                 <div> <span id="" name="" class="QBtxt5">From</span></div>
                               <div>
                                <span id="MNGQ_FRMUSRNAME" name="MNGQ_FRMUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                
                               
								
                             </div>
                             
							<!-- <input type="text" id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="form-control DSVLBL MNGQDBfields"> --> 
                           </div>
						   <div class="col">
                              <div class="md-form">
                              
                               <div> <span id="" name="" class="QBtxt5">To</span></div>
                               <div>
                                <span id="MNGQ_TOUSRNAME" name="MNGQ_TOUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_TOUSRROLE" name="MNGQ_TOUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                                           
                               
                               </div>
                           </div>
                      	</div>
                        <div class="form-row">
                        <div class="col">
                         <div class="md-form">
                        <span id="MNGQ_QURYNAME" name="MNGQ_QURYNAME" class="MNGQDBfields QBtxt6"></span>
                        </div>
                              </div>
                        </div>
                         <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                            
                              <span id="MNGQ_DESC" name="MNGQ_DESC" class="MNGQDBfields QBtxt9"></span>
                            
                                
                             </div>
                           </div>
                           </div>
						    <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                                <input type="text" id="MNGQ_ATTCHURL" hidden="hidden" name="MNGQ_ATTCHURL" class="form-control DSVLBL MNGQDBfields">
								<!-- <input type="text" id="MNGQ_URLFILENAME" disabled name="MNGQ_URLFILENAME" class="form-control DSVLBL MNGQDBfields"> --> 
								
								 <span id="MNGQ_URLFILENAME" name="MNGQ_URLFILENAME" class="MNGQDBfields QBtxt7"></span>
								<span></span>
								<span class="MNGQ_ATTCHURL" style="display:none"> 
								  <img src="ThemeproLO/Common/FEP/images/BluVwIcon.png" title="VIEW" onclick="GrdDocDwnld('MNGQ_ATTCHURL'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" alt="Cinque Terre" width="24px" height="16px"> 
                              </span>
                             </div>
                           </div>
                           </div>
                        </form>
                        
                        
                         </div>
                   
                        <div class="BTNBottomDIV">
						 <div class="form-row IQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>    
                           </div>
                        </div>
						<div class="form-row OQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
							   <!--IQQRBTN-->
                              <button type="button" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" id="ReAssign" data-toggle="modal" data-target="#ReAssignQry" href="#" data-card="2" style="display:none" class="btn btn-Syel waves-effect waves-light  ">Re-Assign</button> 
                           </div>
                        </div>
						<div class="form-row CQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
                           </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </form>
               </div>
            </div>
         </div>
         <!-- Report End -->
         <!-- Collateral Start -->
         <div class="card">
            <!-- Card header -->
            <div class="card-header Btxt7" role="tab" id="heading1">
               <a class="collapsed Btxt7 AFormaccordion" data-toggle="collapse" data-load="" data-multidata="BTNOTHERS" data-aria="" data-parent="#accordionEx" href="#S08"
                  aria-expanded="false" aria-controls="collapse1">
			         <span>Others - </span>
			         <span type="text" class="DataFld MQKMDBfields RSCNT S08" id="" name="" title=""></span>
			   <i class="fa fa-plus-circle rotate-icon"></i>
               </a>
            </div>
            <div id="S08" class="collapse" role="tabpanel" aria-labelledby="headingEight8"
               data-parent="#accordionEx">
               <div class="card-body px-lg-5 pt-0 " >
                   </br>
                        <form>
                           <input type="text" id="MQKM_PRCSID" hidden="hidden" name="MQKM_PRCSID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_ACTIVITYID" hidden="hidden" name="MQKM_ACTIVITYID" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_CREATEDBY" hidden="hidden" name="MQKM_CREATEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTCREATED" hidden="hidden" name="MQKM_DTCREATED" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_MODIFIEDBY" hidden="hidden" name="MQKM_MODIFIEDBY" class="form-control MQKMDBfields">
                           <input type="text" id="MQKM_DTMODIFIED" hidden="hidden"  name="MQKM_DTMODIFIED" class="form-control MQKMDBfields">

                           <div data-for="OTHERS" class="OTHERS row">
                           </div>
                           <div class="DynamicPageGrid" data-val="PROPTXTHDR|Firm" id="OTHERS" style="display:none">
                              <div class="DYNROW col-md-4 Qboxbrd" >
                        <form>
                        <input type="text" id="MNGQ_PRCSID" hidden="hidden" name="MNGQ_PRCSID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_ACTIVITYID" hidden="hidden" name="MNGQ_ACTIVITYID" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTCREATED" hidden="hidden" name="MNGQ_DTCREATED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_CREATEDBY" hidden="hidden" name="MNGQ_CREATEDBY" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_DTMODIFIED" hidden="hidden" name="MNGQ_DTMODIFIED" class="form-control MNGQDBfields">
                        <input type="text" id="MNGQ_MODIFIEDBY" hidden="hidden"  name="MNGQ_MODIFIEDBY" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_QURYID" hidden="hidden"  name="MNGQ_QURYID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_FRMUSRID" hidden="hidden"  name="MNGQ_FRMUSRID" class="form-control MNGQDBfields">
						<input type="text" id="MNGQ_TOUSRID" hidden="hidden"  name="MNGQ_TOUSRID" class="form-control MNGQDBfields">
  <input type="text" id="MNGQ_QRYSTUS" hidden="hidden"  name="MNGQ_QRYSTUS" class="form-control MNGQDBfields">
</br>
<div class="FLDCOMP">
						<div class="form-row">
                          <div class="col-md-5">
                              <div class="md-form">
                              
                              <ul class="nav FormPageTab FormMainTab1">      
      <li class="nav-item RoundTabs  Qtyprndblue"><div class="nav-link active"><span id="MNGQ_TYP" name="MNGQ_TYP" class="MNGQDBfields "></span></div></li>
      </ul>
                <!--  <input type="text" id="MNGQ_TYP" name="MNGQ_TYP" class="form-control  DSVLBL MNGQDBfields "> -->
                              </div>
                           </div>
                         
                         <div class="col-md-7">
                           <span id="MNGQ_APPLNNAME" name="MNGQ_APPLNNAME" class="MNGQDBfields QBtxt3"></span>
                           
                           </div>
                           
                           
                   <div class="col-md-4" style="display:none">        
                           
                           <div class="dotted-scrollspy hidden-sm-down">
    <ul class="nav smooth-scroll d-flex flex-column">
        <li class="nav-item"><a class="nav-link" href="#one"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#two"><span></span></a></li>
        <li class="nav-item"><a class="nav-link" href="#three"><span></span></a></li>

    </ul>
</div>
                           
              </div>             
                           
						 </div>
						 <div class="form-row">
						   <div class="col-md-8">
                              <div class="md-form">
                              <span id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="MNGQDBfields QBtxt2"></span>
                               <!--     <input type="text" id="MNGQ_TYMSTMP" name="MNGQ_TYMSTMP" class="form-control DSVLBL MNGQDBfields ">-->
                              </div>
                           </div>
						 </div>
						<div class="form-row">
						   <div class="col">
                            <div class="md-form">
							
                               
                                 <div> <span id="" name="" class="QBtxt5">From</span></div>
                               <div>
                                <span id="MNGQ_FRMUSRNAME" name="MNGQ_FRMUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                
                               
								
                             </div>
                             
							<!-- <input type="text" id="MNGQ_FRMUSRROLE" name="MNGQ_FRMUSRROLE" class="form-control DSVLBL MNGQDBfields"> --> 
                           </div>
						   <div class="col">
                              <div class="md-form">
                              
                               <div> <span id="" name="" class="QBtxt5">To</span></div>
                               <div>
                                <span id="MNGQ_TOUSRNAME" name="MNGQ_TOUSRNAME" class="MNGQDBfields QBtxt3"></span>
                                <span id="MNGQ_TOUSRROLE" name="MNGQ_TOUSRROLE" class="MNGQDBfields QBtxt4"></span>
                                </div>
                                                           
                               
                               </div>
                           </div>
                      	</div>
                        <div class="form-row">
                        <div class="col">
                         <div class="md-form">
                        <span id="MNGQ_QURYNAME" name="MNGQ_QURYNAME" class="MNGQDBfields QBtxt6"></span>
                        </div>
                              </div>
                        </div>
                         <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                            
                              <span id="MNGQ_DESC" name="MNGQ_DESC" class="MNGQDBfields QBtxt9"></span>
                            
                                
                             </div>
                           </div>
                           </div>
						    <div class="form-row">
                         <div class="col">
                            <div class="md-form">
                                <input type="text" id="MNGQ_ATTCHURL" hidden="hidden" name="MNGQ_ATTCHURL" class="form-control DSVLBL MNGQDBfields">
								<!-- <input type="text" id="MNGQ_URLFILENAME" disabled name="MNGQ_URLFILENAME" class="form-control DSVLBL MNGQDBfields"> --> 
								
								 <span id="MNGQ_URLFILENAME" name="MNGQ_URLFILENAME" class="MNGQDBfields QBtxt7"></span>
								<span></span>
								<span class="MNGQ_ATTCHURL" style="display:none"> 
								  <img src="ThemeproLO/Common/FEP/images/BluVwIcon.png" title="VIEW" onclick="GrdDocDwnld('MNGQ_ATTCHURL'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded" alt="Cinque Terre" width="24px" height="16px"> 
                              </span>
                             </div>
                           </div>
                           </div>
                        </form>
                        
                        
                         </div>
                   
                        <div class="BTNBottomDIV">
						 <div class="form-row IQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
                           </div>
                        </div>
						<div class="form-row OQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
							   <!--IQQRBTN-->
                              <button type="button" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" id="ReAssign" data-toggle="modal" data-target="#ReAssignQry" href="#" data-card="2" style="display:none" class="btn btn-Syel waves-effect waves-light  ">Re-Assign</button>  
                           </div>
                        </div>
						<div class="form-row CQBTN " style="display:none">
                           <div class="col d-flex justify-content-center">
                              <button type="button" id="SaveOI" data-aria="MNGQ_QURYID|MNGQ_TYP|MNGQ_TYMSTMP|MNGQ_FRMUSRNAME|MNGQ_TOUSRNAME|MNGQ_QURYNAME|MNGQ_DESC|MNGQ_FRMUSRID|MNGQ_TOUSRID|MNGQ_FRMUSRROLE|MNGQ_TOUSRROLE|MNGQ_QRYSTUS" data-resolve="RESOLUTION"  class="btn RESOLUTION MNGQDBfields btn-Syeloutline waves-effect waves-light">Resolution</button>   
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
   
    <!-- RAISE QUERY START
      <a type="button" id="RAISEQUERY" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#RAISEQUERYModal">
      <i class="fa fa-plus"></i>
  </a>
<div class="modal fade" id="RAISEQUERYModal" tabindex="-1" role="dialog" aria-labelledby="RAISEQUERYModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">RAISE A QUERY</div> 
   <a href="#">  <img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
      </div>  
      <div class="modal-body"> 
   <div class="">
    <!-- Card body 
     <div class="">  
         <form>

         <div class="form-row">
                <div class="col-md-6">
           			<div class="md-form">
           			<select  class="mdb-select md-form colorful-select dropdown-primary  " id="QUERYTO" name="QUERYTO">
                        <option value="" selected>--Select--</option>
                              
                        	</select>
                        <label class="mdb-main-label BTxt9">Query To<span class="MndtryAstr"></span></label>
           			</div>
           		</div>
           		 <div class="col-md-6">
           			<div class="md-form">
           			<select  class="mdb-select md-form colorful-select dropdown-primary  " id="QUERYTYPE" name="QUERYTYPE">
                        <option value="" selected>--Select--</option>
                              
                        	</select>
                        <label class="mdb-main-label BTxt9">Query Type<span class="MndtryAstr"></span></label>
           			</div>
           		</div>
           </div>
            <div class="form-row">
            <div class="col-md-6">
           	<div class="md-form">
           <input type="text" id=QUERYFOR   name="QUERYFOR" class="form-control">
            <label for="QUERYFOR" class="" >Query for<span class="MndtryAstr"></span></label>
           </div>
           	</div>
            
             <div class="col-md-6">
               <div class="md-form">
                    <label for="FIOV_UPLOAD" class="active">Query Attachment<span class="MndtryAstr"></span></label>
               </div>
               </br>
<table>
 <tr>
 <td>
<div id="QUERYATTCHUPLOAD"  class="file-field">
<a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlr(QUERYATTCH,'QUERYATTCH','QUERYATTCH')" class="QUERYATTCH"  >
    </a>
    <input type="text" id="QUERYATTCH" hidden="hidden" data-Validate="QUERYATTCH"  name="QUERYATTCH" class=" form-control File BKDTDBfields">
  <span class="name">Click Here to Upload</span> 
  </div> 
</td>
 <div class="QUERYATTCH" style="display:none">
<img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile(QUERYATTCH);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('QUERYATTCH')" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
</tr>
</table>
</div> 
</div>
   <div class="form-row">
     <div class="col-md-12">
         <div class="md-form">
		      <div class="col Btxt10">ADD RESOLUTION</div>
		          </br>
           	  <textarea class="form-control"  id="RESOLUATION" name="RESOLUATION" Placeholder="Type Here.." class="form-control TEVDDBfields"   style="height: 130px;width:450px;"></textarea>
          </div>
      </div>
  </div>
            <div class="modal-footer align-middle">              
                <button type="button" id="Done"  class="btn btn-Syel waves-effect waves-light ">Raise Query</button>
           </div>
         </form>
        </div>
     </div>
      </div>   
      </div>
    </div>
  </div>    
     -->
    
      <!-- RAISE QUERY END --> 
    
        
      <!-- RESOLUATION START -->
      <a type="button" id="RESOLUTION" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#RESOLUTIONModal">
      <i class="fa fa-plus"></i>
  </a>
<div class="modal fade" id="RESOLUTIONModal" tabindex="-1" role="dialog" aria-labelledby="RESOLUTIONModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:600px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">RESOLUTION</div> 
   <a href="#">  <img id="" class="ResolutionClose close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
      </div>  
      <div class="modal-body"> 
   <div class="">
    <!-- Card body -->
     <div class=""> 
         <form>
         <div class="" style="display:none"> 
             <input type="text" id="MNGD_PRCSID" hidden="hidden" name="MNGD_PRCSID" class="form-control SRFDDBfields">
             <input type="text" id="MNGD_MNQID" hidden="hidden" name="MNGD_MNQID" class="form-control SRFDDBfields">
              <input type="text" id="MNGD_FRMUSRID" hidden="hidden" name="MNGD_FRMUSRID" class="form-control SRFDDBfields">
              <input type="text" id="MNGD_FRMUSRNAME" hidden="hidden" name="MNGD_FRMUSRNAME" class="form-control SRFDDBfields">
              <input type="text" id="MNGD_FRMUSRROLE" hidden="hidden" name="MNGD_FRMUSRROLE" class="form-control SRFDDBfields">
              <input type="text" id="MNGD_TOUSRID" hidden="hidden" name="MNGD_TOUSRID" class="form-control SRFDDBfields">
              <input type="text" id="MNGD_TOUSRNAME" hidden="hidden" name="MNGD_TOUSRNAME" class="form-control SRFDDBfields">
              <input type="text" id="MNGD_TOUSRROLE" hidden="hidden" name="MNGD_TOUSRROLE" class="form-control SRFDDBfields">
              <input type="text" id="MNGD_QURYSTATUS" hidden="hidden" name="MNGD_QURYSTATUS" class="form-control SRFDDBfields">     
              <input type="text" id="MNGD_ACTNTYP" hidden="hidden" name="MNGD_ACTNTYP" class="form-control SRFDDBfields"> 
			  
			   <input type="text" id="MNGD_QRYSTUS" hidden="hidden" name="MNGD_QRYSTUS" class="form-control SRFDDBfields"> 
        </div>
              <div data-for="RESOLUTIONPOP" class="RESOLUTIONPOP">  
               </div>
                  <div class="DynamicPageGrid" data-val="PROPTXTHDR|Firm" id="RESOLUTIONPOP" style="display:none">
                     <div class="DYNROW" >
                        <form>
                        <input type="text" id="MQMR_PRCSID" hidden="hidden" name="MQMR_PRCSID" class="form-control MQMRDBfields">
                        <input type="text" id="MQMR_ACTIVITYID" hidden="hidden" name="MQMR_ACTIVITYID" class="form-control MQMRDBfields">
                        <input type="text" id="MQMR_DTCREATED" hidden="hidden" name="MQMR_DTCREATED" class="form-control MQMRDBfields">
                        <input type="text" id="MQMR_CREATEDBY" hidden="hidden" name="MQMR_CREATEDBY" class="form-control MQMRDBfields">
                        <input type="text" id="MQMR_DTMODIFIED" hidden="hidden" name="MQMR_DTMODIFIED" class="form-control MQMRDBfields">
                        <input type="text" id="MQMR_MODIFIEDBY" hidden="hidden"  name="MQMR_MODIFIEDBY" class="form-control MQMRDBfields">
						<input type="text" id="MQMR_MNQID" hidden="hidden" name="MQMR_MNQID" class="form-control MQMRDBfields">
                        <input type="text" id="MQMR_FRMUSRID" hidden="hidden" name="MQMR_FRMUSRID" class="form-control MQMRDBfields">
                       
                        <input type="text" id="MQMR_TOUSRID" hidden="hidden" name="MQMR_TOUSRID" class="form-control MQMRDBfields">
                        <input type="text" id="MQMR_TOUSRROLE" hidden="hidden" name="MQMR_TOUSRROLE" class="form-control MQMRDBfields">
                        <input type="text" id="MQMR_QURYSTATUS" hidden="hidden" name="MQMR_QURYSTATUS" class="form-control MQMRDBfields">  
						<input type="text" id="MQMR_QRYSTUS" hidden="hidden" name="MQMR_QRYSTUS" class="form-control MQMRDBfields"> 						
           </br>
                         <div class="form-row">
						   <div class="col">
                            <div class="md-form">
                            
                              <ul class="nav FormPageTab FormMainTab1">      
      <li class="nav-item RoundTabs QBtxt8 Qtyprndgrey"><div class="nav-link active"><span id="MQMR_TYMSTMPDT" name="MQMR_TYMSTMPDT" class="MQMRDBfields DataGRP"></span></div></li>
      </ul>
                            
                            
                               <!-- <input type="text" id="MQMR_TYMSTMPDT" name="MQMR_TYMSTMPDT" class="form-control DSVLBL MQMRDBfields "> --> 
                             </div>
                           </div>
						 </div>
					    <div class="form-row">
						   <div class="col-md-6">
                            <div class="md-form">
                            
                            <span id="MQMR_FRMUSRNAME" name="MQMR_FRMUSRNAME" class="MQMRDBfields QBtxt10"></span>
                                <span id="MQMR_FRMUSRROLE" name="MQMR_FRMUSRROLE" class="MQMRDBfields QBtxt4"></span>
                            
                               <!-- <input type="text" id="MQMR_FRMUSRNAME" name="MQMR_FRMUSRNAME" class="form-control DSVLBL MQMRDBfields ">
								 <input type="text" id="MQMR_FRMUSRROLE" name="MQMR_FRMUSRROLE" class="form-control DSVLBL MQMRDBfields"> --> 
                             </div>
                           </div>
						   <div class="col-md-6">
                            <div class="md-form">
                                  <span id="MNGD_QURYSTATUS" name="MNGD_QURYSTATUS" class="MQMRDBfields QBtxt10"></span>
                               <!-- <input type="text" id="MQMR_FRMUSRNAME" name="MQMR_FRMUSRNAME" class="form-control DSVLBL MQMRDBfields ">
								 <input type="text" id="MQMR_FRMUSRROLE" name="MQMR_FRMUSRROLE" class="form-control DSVLBL MQMRDBfields"> --> 
                             </div>
                           </div>
						 </div>
						 <div class="form-row">
						   <div class="col">
                            <div class="md-form">
                            
                              <span id="MQMR_DESC" name="MQMR_DESC" class="MQMRDBfields QBtxt9"></span>
                            
                              <!-- <input type="text" id="MQMR_DESC" name="MQMR_DESC" class="form-control DSVLBL MQMRDBfields "> -->  
                             </div>
                           </div>
						 </div> 
						 <div class="form-row">
						   <div class="col">
                            <div class="md-form">
                                <input type="text" id="MQMR_ATTACHURL" hidden="hidden" name="MQMR_ATTACHURL" class="form-control DSVLBL MQMRDBfields">
								<div class="MQMR_ATTACHURL" style="display:none"> 
							     <!-- <input type="text" id="MQMR_URLFILENAME" name="MQMR_URLFILENAME" class="form-control DSVLBL MQMRDBfields"> --> 
								  
								  <span id="MQMR_URLFILENAME" name="MQMR_URLFILENAME" class="MQMRDBfields QBtxt7"></span>
								  
								  <img src="ThemeproLO/Common/FEP/images/BluVwIcon.png" title="VIEW" onclick="GrdDocDwnld('MQMR_ATTACHURL'+$(this).closest('.DYNROW').attr('data-row'))" class="rounded ResViewIcon" alt="Cinque Terre" width="24px" height="16px"> 
                              </div>
                             </div> 
                           </div>
						 </div>
						 <div class="form-row">
                          <div class="col">
                            <div class="md-form">
                               <span id="MQMR_TYMSTMPTYM" name="MQMR_TYMSTMPTYM" class="MQMRDBfields QBtxt5"></span>
                             <!--    <input type="text" id="MQMR_TYMSTMPTYM" name="MQMR_TYMSTMPTYM" class="form-control  DSVLBL MQMRDBfields "> -->
                             </div>
                           </div>
						 </div>
                        </form> 
                        </div>
                        </div>
						<div class="CQRES">
						   <div class="modal-header">
                              <div class="Btxt10">Comments *</div>   
                           </div>
                            <div class="form-row">
                               <div class="col-md-12">
                                    <div class="md-form">
           	                            <textarea class="form-control SRFDDBfields" maxlength="1000"  id="MNGD_DESC" name="MNGD_DESC" Placeholder="Add Comment..." class="form-control "   style="height: 130px;width:420px;"></textarea>
                                     </div>
                                </div>
                            </div>
           <div class="form-row RESUL">
           <div class="md-form">
<table>
 <tr>
 <td>
<div id="MNGD_ATTACHURLUPLOAD"  class="file-field">
<a class="">
      <i class="fa fa-plus imgAdd" aria-hidden=""></i>
      <input type="file"  name="datafile" onchange="DocFldUpldHndlrResul(MNGD_ATTACHURL,'MNGD_ATTACHURL','QUERYATTCH','MNGD_ATTACHURL')" class="MNGD_ATTACHURL"  >
    </a>
    <input type="text" id="MNGD_ATTACHURL" hidden="hidden" data-Validate="MNGD_ATTACHURL"  name="MNGD_ATTACHURL" class=" form-control File SRFDDBfields">
  <span class="name">Attachment</span> 
  </div> 
</td>
 <div class="MNGD_ATTACHURL" style="display:none">
<img src="ThemeproLO/Common/Images/UploadImg.png" class="ResViewIcon" title="UPLOAD" onclick="ReuploadFile(MNGD_ATTACHURL);" alt="Cinque Terre" width="20" height="20">  <img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld('MNGD_ATTACHURL')" class="ResViewIcon" alt="Cinque Terre" width="35" height="25"> 
</div>
</tr>
</table>
</div> 
</div>
            <div class="modal-footer align-middle">              
                 <button type="button" id="Done"  class="btn btn-Syel ResolutionSend waves-effect waves-light ">Save</button>
				 <button type="button" data-aria="" data-card="2" style="display:none" class="btn btn-Syel waves-effect waves-light NIQQRLBTN">Resolve</button>
                 <button type="button" data-aria="" data-card="2" style="display:none" class="btn btn-Syel waves-effect waves-light IQQRLBTN">Close</button>
				 <button type="button" id="Reopen" data-aria="MNGD_MNQID|MNGD_FRMUSRID|MNGD_FRMUSRNAME|MNGD_FRMUSRROLE|MNGD_TOUSRID|MNGD_TOUSRNAME|MNGD_TOUSRROLE|MNGD_QURYSTATUS|MNGD_ACTNTYP|MNGD_ATTACHURL|MNGD_DESC|MNGD_QRYSTUS" data-card="2"  class="btn btn-Syel IQReopen waves-effect waves-light">Reopen</button>			 
           </div>
		   </div>
         </form>
        </div>
     </div>
      </div>   
      </div>
    </div>
  </div>    
    
    
      <!-- RESOLUATION  END --> 
     <!-- ESCALATE QUERY START -->   
      <a type="button" id="ESCALATEQUERY" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#ESCALATEQUERYModal">
      <i class="fa fa-plus"></i>
  </a>
<div class="modal fade" id="ESCALATEQUERYModal" tabindex="-1" role="dialog" aria-labelledby="ESCALATEQUERYModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">ESCALATE QUERY TO </div> 
   <a href="#">  <img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
      </div>  
      <div class="modal-body"> 
   <div class="">
    <!-- Card body -->
     <div class="">  
         <form>

         <div class="form-row">
                <div class="col-md-6">
           			<div class="md-form">
           			<select  class="mdb-select md-form colorful-select dropdown-primary  "     searchable="Search here.."  id="QUERYTO" name="QUERYTO">
                        <option value="" selected>--Select--</option>
                              
                        	</select>
                        <label class="mdb-main-label BTxt9">Name of Handler<span class="MndtryAstr"></span></label>
           			</div>
           		</div>
           </div>
   <div class="form-row">
     <div class="col-md-12">
         <div class="md-form">
           	  <textarea class="form-control"  id="RESOLUATION" name="RESOLUATION" Placeholder="Type Here.." class="form-control TEVDDBfields"   style="height: 130px;width:720px;"></textarea>
             <label for="OFRemarks" class="">ADD RESOLUTION<span class="MndtryAstr"></span></label>
          </div>
      </div>
  </div>
            <div class="modal-footer align-middle">              
                <button type="button" id="Done"  class="btn btn-Syel waves-effect waves-light ">Escalate</button>
           </div>
         </form>
        </div>
     </div>
      </div>   
      </div>
    </div>
  </div>    
    
	<a type="button" id="ReopenQryPop" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#ReopenQry" href="#" >
      <i class="fa fa-plus"></i>
  </a>
	
    <div class="modal fade" id="ReopenQry" tabindex="-1" role="dialog" aria-labelledby="ReopenQryLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">RE-OPEN QUERY</div> 
   
   <a href="#">  <img id="" class="Reopenclose" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="REOPENQRY">  
         <form >
        	</br>
        	</br>
        <div class="" style="display:none"> 
		      <input type="text" id="MNGQ_PRCSID" hidden="hidden" name="MNGQ_PRCSID" class="form-control MQRODBfields">
              <input type="text" id="MNGQ_MNQID" hidden="hidden" name="MNGQ_MNQID" class="form-control MQRODBfields">
			   <input type="text" id="MNGQ_ACTNTYP" hidden="hidden" name="MNGQ_ACTNTYP" class="form-control MQRODBfields">
              <input type="text" id="MNGQ_FRMUSRID" hidden="hidden" name="MNGQ_FRMUSRID" class="form-control MQRODBfields">
              <input type="text" id="MNGQ_FRMUSRNAME" hidden="hidden" name="MNGQ_FRMUSRNAME" class="form-control MQRODBfields">
              <input type="text" id="MNGQ_FRMUSRROLE" hidden="hidden" name="MNGQ_FRMUSRROLE" class="form-control MQRODBfields">
              <input type="text" id="MNGQ_TOUSRID" hidden="hidden" name="MNGQ_TOUSRID" class="form-control MQRODBfields">
              <input type="text" id="MNGQ_TOUSRNAME" hidden="hidden" name="MNGQ_TOUSRNAME" class="form-control MQRODBfields">
              <input type="text" id="MNGQ_TOUSRROLE" hidden="hidden" name="MNGQ_TOUSRROLE" class="form-control MQRODBfields">
              <input type="text" id="MNGQ_QURYSTATUS" hidden="hidden" name="MNGQ_QURYSTATUS" class="form-control MQRODBfields">     
			  <input type="text" id="MNGQ_DESC" hidden="hidden" name="MNGQ_DESC" class="form-control MQRODBfields">
              <input type="text" id="MNGQ_ATTACHURL" hidden="hidden" name="MNGQ_ATTACHURL" class="form-control MQRODBfields"> 
			   <input type="text" id="MNGQ_QRYSTUS" hidden="hidden" name="MNGQ_QRYSTUS" class="form-control MQRODBfields"> 	
        </div> 
          
 <div class="form-row">            
  <div class="col">
    <div class="md-form">
      <div class="select-radio "> 
               <div class="custom-control custom-radio custom-control-inline">
                   <input type="radio" class="custom-control-input" value="To Same Person" onclick="QryTO()" id="SamePerson" name="QRYPERSON">
                   <label class="custom-control-label" for="SamePerson">To Same Person/Role</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline" style="display:none;">
                    <input type="radio" class="custom-control-input" value="To Another Person" onclick="QryTO()" id="AnoPerson" name="QRYPERSON">
                    <label class="custom-control-label" for="AnoPerson">To Another Person/Role</label>
              </div>
         </div>     
      </div>
    </div>
  </div>
  <div class="form-row QryTo" style="display:none">
           		<div class="col">
           			<div class="md-form">
           			<select id="MNGQ_TOUSRIDREOP" class="mdb-select md-form  colorful-select dropdown-primary MQRODBfields"    searchable="Search here.."   name="MNGQ_TOUSRIDREOP" onchange="">
                          <option value="" selected>--Select--</option>  
                      </select>
                   <label class="mdb-main-label BTxt9">Query To<span class="MndtryAstr">*</span></label>
           			</div>
           		</div>
           </div>
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="ReopenSend" class="btn btn-yel ReopenSend Btxt2">Send</button>
      </div>
    </div>
    </div>
    </div>
    
     <div class="modal fade REASSIGN" id="ReAssignQry" tabindex="-1" role="dialog" aria-labelledby="ReAssignQryLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:550px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">RE-ASSIGN</div> 
   
   <a href="#">  <img id="" class="ReAssignclose" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">  
         <form >
        	</br>
        	</br>
        <div class="" style="display:none"> 
             <input type="text" id="MNGQ_PRCSID" hidden="hidden" name="MNGQ_PRCSID" class="form-control MQRSDBfields">
             <input type="text" id="MNGQ_MNQID" hidden="hidden" name="MNGQ_MNQID" class="form-control MQRSDBfields">
              <input type="text" id="MNGQ_FRMUSRID" hidden="hidden" name="MNGQ_FRMUSRID" class="form-control MQRSDBfields">
              <input type="text" id="MNGQ_FRMUSRNAME" hidden="hidden" name="MNGQ_FRMUSRNAME" class="form-control MQRSDBfields">
              <input type="text" id="MNGQ_FRMUSRROLE" hidden="hidden" name="MNGQ_FRMUSRROLE" class="form-control MQRSDBfields">
              <input type="text" id="MNGQ_TOUSRID" hidden="hidden" name="MNGQ_TOUSRID" class="form-control MQRSDBfields">
              <input type="text" id="MNGQ_TOUSRNAME" hidden="hidden" name="MNGQ_TOUSRNAME" class="form-control MQRSDBfields">
              <input type="text" id="MNGQ_TOUSRROLE" hidden="hidden" name="MNGQ_TOUSRROLE" class="form-control MQRSDBfields">
              <input type="text" id="MNGQ_QURYSTATUS" hidden="hidden" name="MNGQ_QURYSTATUS" class="form-control MQRSDBfields">     
              <input type="text" id="MNGQ_ACTNTYP" hidden="hidden" name="MNGQ_ACTNTYP" class="form-control MQRSDBfields"> 
			  <input type="text" id="MNGQ_QRYSTUS" hidden="hidden" name="MNGQ_QRYSTUS" class="form-control MQRSDBfields"> 
        </div> 
         <div class="form-row">
           		<div class="col ReassignQry">
           			<div class="md-form">
           			<select id="MNGQ_TOUSRIDRE" class="mdb-select md-form colorful-select dropdown-primary MQRSDBfields"     searchable="Search here.."  name="MNGQ_TOUSRIDRE" onchange="">
                          <option value="" selected>--Select--</option>  
                      </select>
                   <label class="mdb-main-label BTxt9">Query To<span class="MndtryAstr">*</span></label>
           			</div>
           		</div>
           </div>
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="ReAssignSend" class="btn btn-yel ReAssignSend Btxt2">Send</button>
      </div>
    </div>
    </div>
    </div>
    
     <!-- ESCALATE QUERY END -->
   
   
   <script type="text/javascript" src="ThemeproLO/UCV/ManageQuery/Script/MnagQuery/LoadSubmit.js${DMY13}"></script>
   <script type="text/javascript" src="ThemeproLO/UCV/ManageQuery/Script/MnagQuery/Validation.js${DMY13}"></script>
   
<!-- <script type="text/javascript" src="ThemeproLO/PostSanction/Script/PostSanctionTab.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/PostSanction/Script/DisbMemo/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/PostSanction/Script/DisbMemo/Validation.js${DMY13}"></script>-->