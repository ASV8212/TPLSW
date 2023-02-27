
<!--Main row-->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">

      </br>
      <!-- card -->
      <div class="card CardNS">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
               <input type="text" id="IPRS_PRCSID" hidden="hidden" name="IPRS_PRCSID" class="form-control IPRSDBfields">
               <input type="text" id="IPRS_ACTIVITYID" hidden="hidden" name="IPRS_ACTIVITYID" class="form-control IPRSDBfields">
               <input type="text" id="IPRS_DTCREATED" hidden="hidden" name="IPRS_DTCREATED" class="form-control IPRSDBfields">
               <input type="text" id="IPRS_CREATEDBY" hidden="hidden" name="IPRS_CREATEDBY" class="form-control IPRSDBfields">
               <input type="text" id="IPRS_DTMODIFIED" hidden="hidden" name="IPRS_DTMODIFIED" class="form-control IPRSDBfields">
               <input type="text" id="IPRS_MODIFIEDBY" hidden="hidden"  name="IPRS_MODIFIEDBY" class="form-control IPRSDBfields">
               <input type="text" id="IPRS_XML" hidden="hidden"  name="IPRS_XML" class="form-control IPRSDBfields">
			   <input type="text" id="ACTIONTAKEN" hidden="hidden"  name="ACTIONTAKEN" class="form-control">
			   </br>
               <div class="form-row">
                  <div class="col Btxt3">Sanction Confirmation</div>
               </div>
               </br>
               <div class="form-row">
                  <div class="col">
                     <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SFETCHSANCCONFRM_DTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,3','SANCCONFR');" id="BTNSANCCONFR" name="BTNSANCCONFR" />
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                     </table>
                  </div>
               </div>
               <div class="form-row">
                           <div class="col d-flex justify-content-center">
						   <button type="button" data-aria="LSW_TINPRINCSANC|IPRS" data-card="0"  id="Recredit" style="display:none" class="btn btn-Syeloutline1 waves-effect waves-light FormSave UCVWFRECMFLOW">Send to credit</button>
							<button type="button" data-aria="LSW_TINPRINCSANC|IPRS" data-card="0"  id="PDisb" style="display:none" onclick="" class="btn btn-Syel1 waves-effect waves-light FormSave UCVWFRECMFLOW">Proceed Post-Sanction</button>
							<button type="button" data-aria="LSW_TINPRINCSANC|IPRS" data-card="0"  id="Save"  onclick="" class="btn btn-Syel1 waves-effect waves-light FormSave">Save</button>
                              <!--<button type="button" id="Save1" data-aria="LSW_TPDDTLS|APDD"  class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>   
                              <button type="button" data-aria="LSW_TPDDTLS|APDD" data-card="2" class="btn btn-Syel waves-effect waves-light FormSave">Save & Next</button> -->
                           </div>
                        </div>
            </form>
         </div>
      </div>
      <!-- card -->
   </div>
   
    <a type="button" id="GetRemarks" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#GetRemarksModal">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade" id="GetRemarksModal" tabindex="-1" role="dialog" aria-labelledby="GetRemarksModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:800px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10 HEADTEXT">REMARKS</div> 
   
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
           	     <div class="md-form">
       <textarea id="INPRINCRDESC" name="INPRINCRDESC" class="form-control  btxt24"   style="height:200px"></textarea>
				<!-- <label class="mdb-main-label BTxt9 active ">Remarks<span class="MndtryAstr"></span></label> -->
                  </div>
           		 
           </div>
      <!-- grid  show -->

    <!--Main layout-->
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">

        <button type="button" id="INPRINCRDESCSUBMIT"  class="btn btn-yel Btxt2">Confirm</button>
        
      </div>
    </div>
  </div>
  </div>
  </div>
   <table style="display:none" id="GridTable2">
      <thead>
		 <th>IPRG_CODE</th>
         <th>IPRG_DELMATRIX</th>
         <th>IPRG_TYPCHNG</th>
         <th>IPRG_OVERWRITE</th>
         <th>IPRG_FLOWTO</th>
		 <th>IPRG_DOWNSTRM</th>
      </thead>
   </table>
</div>
<!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/Approve/Script/InprncSanc/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Approve/Script/InprncSanc/Validation.js${DMY13}"></script>                            