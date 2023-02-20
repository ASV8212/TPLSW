</br>
         <!--Main row-->
               <!--  <div class="row FormRows"> 

                      <div class="col-md-12"> -->
                        <!--Card-->
                        <div class="">
                            <!--Admin panel-->
     <div class="admin-panel">
 <div class="card CardNS">
    <!-- Card body -->
    </br>
      <div class="card-body px-lg-5 pt-0">
        <form>
        <div class="form-row">
        	<div class="col Btxt8">IFSC Master</div>
          </div>
        <input type="text" id="CRATBY" hidden="hidden" name="CRATBY" class="form-control DBfields">
		<input type="text" id="DATECREAT"  name="DATECREAT" hidden="hidden" class="form-control DBfields" value="" >
        <input type="text" id="MODFYBY"  name="MODFYBY" hidden="hidden"  class="form-control DBfields" value="">
        <input type="text" id="DATEMODIFY"  name="DATEMODIFY" hidden="hidden"  class="form-control DBfields" value="">

          <div class="form-row">
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="IFSC" onchange="ChkIFSCCode();" maxlength="11"  class="form-control DBfields Mndtry NoSpecialChar" name="IFSC">
                    <label for="IFSC" class="">IFSC Code<span class="MndtryAstr">*</span></label>
                  </div>
               </div> 
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="BANK"  maxlength="40" class="form-control IFSCD DBfields IsAlphaFields  Mndtry NoSpecialChar" name="BANK">
                    <label for="BANK" class="">Bank Name<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="BRANCH"  maxlength="40" class="form-control IFSCD DBfields Mndtry NoSpecialChar" name="BRANCH">
                    <label for="BRANCH" class="">Branch Name<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           </div>
            <div class="form-row">
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="CITY"  maxlength="40" class="form-control IFSCD IsAlphaFields  DBfields Mndtry NoSpecialChar" name="CITY">
                    <label for="CITY" class="">City<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
                <div class="col-md-4">
                   <div class="md-form">
                     <select class="mdb-select md-form colorful-select dropdown-primary IFSCD DBfields Mndtry" searchable="Search here.."   id="STATE" name="STATE">
				     </select>
				       <label class="mdb-main-label BTxt9">State<span class="MndtryAstr">*</span> </label>
                   </div>
                </div>
           <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="MICRNO"  maxlength="40" class="form-control IFSCD DBfields IsNumberFields  Mndtry NoSpecialChar" name="MICRNO">
                    <label for="CITY" class="">MICR No<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           </div>
		   
		    <div class="form-row">
               <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="BANKCODE"  maxlength="40" class="form-control IFSCD DBfields Mndtry NoSpecialChar" name="BANKCODE">
                    <label for="CITY" class="">Bank Code<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
                 <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="BRANCHCODE"  maxlength="40" class="form-control IFSCD DBfields Mndtry NoSpecialChar" name="BRANCHCODE">
                    <label for="CITY" class="">Branch Code<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
				
				<div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="CITYCODE"  maxlength="40" class="form-control IFSCD DBfields Mndtry NoSpecialChar" name="CITYCODE">
                    <label for="CITY" class="">City Code<span class="MndtryAstr">*</span></label>
                  </div>
               </div>
           </div>
		   </br>
               <div class="form-row">
                   <div class="col d-flex justify-content-center">
                     <button type="button" id="UserSave" class="btn btn-Syeloutline waves-effect waves-light FormSave">Save</button>
                     <button type="button" id="Delete" class="btn btn-Syel waves-effect waves-light FormSave">Delete</button>						 
                  </div>
              </div>
			  </br>
		   <div class="form-row">
        	  <div class="col Btxt8">IFSC Details</div>
           </div>
		  <div class="form-row">
		   <div class="col-md-4">
                   <div class="md-form">
                     <select class="mdb-select md-form colorful-select dropdown-primary IFSCD DBfields Mndtry" onchange="FilterBnkIfsc();" searchable="Search here.."   id="BNKNAME" name="BNKNAME">
				     </select>
				       <label class="mdb-main-label BTxt9">Bank Name<span class="MndtryAstr">*</span> </label>
                   </div>
                </div>
			</div>
		   <div class="card-headerBlack white-text">    
         <div class="row">       
         <div class="col-md-2 ">
         </div>
         <div class="col-md-5"> 
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTable2" name="SearchTable2" class="Ntxt3" title="">
         </div> 
         </div>                     
</div>
			 <div class="form-row">
               <div class="col">
                    <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table2',{spname:'LSW_SGETBNKDETL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#BNKNAME').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','IFSCMST');" id="BTNIFSCMST" name="BTNIFSCMST" />
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                    </table>
                </div>
            </div> 
			
        </form>
      </div>
    </div>
    
    <script type="text/javascript" src="ThemeproLO/Commonpage/IFSCMaster/LoadSubmit.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Commonpage/IFSCMaster/Validation.js${DMY13}"></script>
     
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>

<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script>    


                            </div>
                             </div>
                                  <!--   </div>
                                </div>   -->                           