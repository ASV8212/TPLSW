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

            </ul>
         </div>
      </div>

      <div class="card cardNS">
         <!-- Card body -->
         <div class="card-body px-lg-5 pt-0">
		 </br>
            <div class="col-md-12">  
              <div class="form-row" style="">
               <div class="col-md-4" style="display:none">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="FromDate" name="FromDate" disabled maxlength="10" class="form-control form-control CEMIDBfields IsNumberFields NoSpecialChar ISDatefield ">
                    <label for="FromDate" class="">From<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" style="display:none" class="FieldIcon datepicker"/>
                  </div>
                </div>
                <div class="col-md-4" style="display:none">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="ToDate" name="ToDate" disabled maxlength="10" class="form-control form-control CEMIDBfields IsNumberFields NoSpecialChar ISDatefield ">
                    <label for="ToDate" class="">To<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" style="display:none" class="FieldIcon datepicker"/>
                  </div>
                </div>
				<div class="col-md-4">
				<div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary" id="PrdName" name="PrdName">
                        <!-- <option value="" selected>--Select--</option>  s-->
                         <option value="HE01">Home Equity</option>
						  <option value="HE02">Home Equity - New Product</option>
                  </select>
                        <label class="mdb-main-label BTxt9">Product <span class="MndtryAstr"></span></label>
                </div>
				</div>
				<div class="col-md-4">
                  <!-- Last name -->
                  <div class="md-form">
                    <input type="text" id="ApplNo" name="ApplNo"  class="form-control IsNumberFields NoSpecialChar">
                    <label for="ApplNo" class="">Application No<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				
				<div class="col-md-4">
                  <!-- Last name -->
                  <div class="md-form">
                    <input type="text" id="AggrNo" name="AggrNo"  class="form-control IsUpprCse NoSpecialChar">
                    <label for="AggrNo" class="">Agreement No<span class="MndtryAstr"></span></label>
                  </div>
                </div>
			  </div>
              <div class="form-row ViewOnly" style="">
			  <div class="col-md-4">
                  <!-- Last name -->
                  <div class="md-form">
                    <input type="text" id="Name" name="Name"  class="form-control IsUpprCse IsAlphaFields  NoSpecialChar">
                    <label for="Name" class="">Name<span class="MndtryAstr"></span></label>
                  </div>
                </div>
				<div class="col-md-4">
				<div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary"    id="CusType" name="CusType">
                        <!-- <option value="" selected>--Select--</option>  s-->
                         <option value="Applicant">Applicant</option>
						 <option value="Co Applicant">Co Applicant</option>
						 <option value="Both">Both</option>
                     </select>
                        <label class="mdb-main-label BTxt9">Customer Type<span class="MndtryAstr">*</span></label>
                </div>
				</div>
                <div class="col-md-4">
                  <!-- Last name -->
                  <div class="md-form">
                    <input type="text" id="PAN" name="PAN" maxlength="10" class="form-control IsUpprCse NoSpecialChar">
                    <label for="PAN" class="">PAN<span class="MndtryAstr"></span></label>
                  </div>
                </div>
             </div>
			 <div class="form-row ViewOnly" style="">
			    <div class="col-md-4">
                  <!-- Last name -->
                  <div class="md-form">
                    <input type="text" id="DOB" name="DOB" maxlength="10" class="form-control IsNumberFields NoSpecialChar ISDatefield DataNormal">
                    <label for="DOB" class="">DOB<span class="MndtryAstr"></span></label>
					<img src="ThemeproLO/Common/Images/calendar.png" class="FieldIcon datepicker picker__input" id="P1631730378" aria-haspopup="true" aria-expanded="false" aria-readonly="false" aria-owns="P1631730378_root">
                  </div>
                </div>
			    <div class="col-md-4">
                  <!-- Last name -->
                  <div class="md-form">
                    <input type="text" id="MOB" name="MOB" maxlength="10" class="form-control IsNumberFields NoSpecialChar">
                    <label for="MOB" class="">Mobile Number<span class="MndtryAstr"></span></label>
                  </div>
                </div>
			     <div class="col-md-4">
                  <div class="md-form">
                    <input type="text" id="CKYC" name="CKYC" maxlength="10" class="form-control NoSpecialChar">
                    <label for="CKYC" class="">CKYC<span class="MndtryAstr"></span></label>
                  </div>
                 </div>
                  <div class="col-md-4">
				    <button type="button" id="Search" class="btn btn-Syeloutline waves-effect waves-light">Search</button>
				</div>
		    </div>
 <!--  <div class="row">
  <div class="col-md-12">   -->
  <div class="card-headerBlack white-text">
              
        <div class="row">
         <div class="col-md-2 Ntxt4" style="display:none">
         Total no of files :
         <span class="Ntxt3">100</span>
         </div>                 
         <div class="col-md-2 " >
         <span class="Ntxt4" style="display:none;">Address Type</span>
         <select id="GridBranch" name="GridBranch" onchange="OnChngeSetVal('GridBranch','');"  searchable="Search here.." class="RINV colorful-select dropdown-primary Ntxt3">
                                                    <option value="" selected>All</option>
                                                    </select>
		 <select id="GridCategory" name="GridCategory" onchange="TgrGrid();" style="display:none;"  searchable="Search here.." class="RINV  colorful-select dropdown-primary Ntxt3">
                                                    <option value="Residence" selected>Residence</option>
													<option value="Office" >Office</option>
                                                    </select>
       
         </div>
         <div class="col-md-5">
         
         </div>  
         <div class="col-md-3">
           <span class="Ntxt4">Search</span>
          <input type="text" id="SearchTable3" name="SearchTable3" class="Ntxt3">
         </div> 
         </div>   
              
                       
</div>
  
 
  <!-- </div>
  </div>
  
 <div class="row">
  <div class="col-md-12">  	
   -->
  <div class="admin-panel">

                                <!--Main First row-->
                                <div class="row m-b-0">
<div class="col-md-12">
  <input type="button" style="display:none" class="DashTrg" onclick="FncallMyAppl(this,'Table3',{spname:'LSW_SENQUIRYVIEWTAB',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'Loan|'+$('#FromDate').val()+'|'+$('#ToDate').val()+'|||||||',MnuId:'Load'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,10','ENQUIRTYTAB');" id="BTNENQUIRYTAB" name="BTNENQUIRYTAB" />

    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
    </table>
    
    </div>
   </div>



                            
    </div>
   
  </div>

         </div>
      </div>
      </br>
 
      </br>
   </div>

   <!-- END -->
</div>
<link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/jquery.dataTables.min.js${DMY13}"></script>-->   
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/dataTables.cellEdit.js${DMY13}"></script> 
 



 <!-- SCRIPTS -->

    <!-- JQuery -->
   <script type="text/javascript" src="ThemeproLO/Enquiry/Script/LoadSubmit.js${DMY13}"></script>
   <script type="text/javascript" src="ThemeproLO/Enquiry/Script/Validation.js${DMY13}"></script>

 

<!-- <script>
        // Data Picker Initialization
        $('.datepicker').pickadate();

        // Material Select Initialization
        $(document).ready(function() {
            $('.mdb-select').material_select();
        });

        
    </script> -->
   