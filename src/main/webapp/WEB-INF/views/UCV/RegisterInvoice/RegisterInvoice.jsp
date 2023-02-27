 <!--Main layout-->
    <main class="">
        <div class="container-fluid">

                
            <section class="section">

                <!--Main row-->
                <div class="row">

                    <div class="col-md-12">
                        <!--Card-->
                        <div class="card card-cascade narrower">

                            <!--Admin panel-->
                            <div class="admin-panel">

                                <!--Main First row-->
                                <div class="row m-b-0">

                                    <!--First column-->
                                    <div class="col-md-12">

                                        <!--Panel title-->
                                        <div class="card-header white-text">
                                          Invoice Registration
                                        </div>
										
							
                                        <!--/Panel title-->
										<input id="MnuId" class="inputTXT" name="MnuId" type="hidden" value="30b"/>	
    <input id="RINV_PrcsID" class="RINV DBfields inputTXT" name="RINV_PrcsID" type="hidden" value="${PrcsID}"/>
	<input id="RINV_ActivityID" class="RINV DBfields inputTXT" name="RINV_ActivityID" type="hidden" value="${ActvID}"/>
    <input id="RINV_ModifiedBy" class="RINV DBfields" name="RINV_ModifiedBy" type="hidden" value=""/>
    <input id="RINV_CreatedBy" class="RINV DBfields" name="RINV_CreatedBy" type="hidden" value=""/>
    <input id="RINV_DtCreated" class="RINV DBfields" name="RINV_DtCreated" type="hidden" value=""/>
    <input id="RINV_DtModified" class="RINV DBfields" name="RINV_DtModified" type="hidden" value=""/>   
	<input id="RINV_PoInvceDetl" class="RINV DBfields" name="RINV_PoInvceDetl" type="hidden" value=""/>   
	<input id="RINV_BatchId" class="RINV DBfields" name="RINV_BatchId" type="hidden" value=""/>  
	<input id="RINV_CopCode" class="RINV DBfields" name="RINV_CopCode" type="hidden" value=""/>  
    	<input id="SubmitSuccess" class="" name="SubmitSuccess" type="hidden" value=""/>   
		<input id="RINV_CmpyCode" class="RINV DBfields" name="RINV_CmpyCode" type="hidden" value="${CpmCd}"/>  
		<input id="ChkValdtCmplt" class="POIS" name="ChkValdtCmplt" type="hidden" value="0"/>  
		
		
		<input id="REIV_PrcsTyp" class="RINV  " name="REIV_PrcsTyp" type="hidden" value="Invoice"/>   
    
                                        <!--Panel data-->
            <!-- First Row -->                            
                                        
                                        <div class="row card-body pt-3">
	
                                            <!--First column-->
                                            <div class="col-md-6">
                                              
                                               </br>
                                               <div class="md-form">
                                                   <select id="RINV_PrgID" name="RINV_PrgID" onchange="OnChngeSetVal('RINV_PrgID','RINV_PrgName');ChngValidSt();"  searchable="Search here.." class="RINV mdb-select colorful-select dropdown-primary DBfields">
                                                    <option value="" disabled selected>Choose Program</option>
                                                   
                                                </select>
                                                    <label for="RINV_PrgID">Program Name</label>
                                                </div>                                               
                                            </div>
                                            <!--/First column-->

                                            <!--Second column-->
                                            <div class="col-md-6 text-center">
											
												
												<div class="md-form">
                                                    <input type="hidden" id="RINV_PrgName" name="RINV_PrgName" disabled class="DBfields RINV form-control validate">
                                                   
                                                </div>    
												

                                        </div>
                                        </div>
           <!-- First Row -->
           <!-- Second Row -->
              
                  <div class="row card-body pt-3">
	
                                            <!--First column-->
                                            <div class="col-md-6">
                                              
                                               <div class="md-form">
                                                    <select id="RINV_POIssuType" name="RINV_POIssuType" onchange="FileUpldShw(this);ChngValidSt();" class="mdb-select colorful-select dropdown-primary RINV DBfields">
                                                    <option value="" disabled selected>Choose Invoice Type</option>
                                                    <option value="Manual">Manual</option>
                                                    <option value="Upload">Upload</option>
                                                </select>
                                                    <label for="RINV_POIssuType">Invoice Type</label>
                                                </div>                                              
                                            </div>
                                            <!--/First column-->

                                            <div>
			<input style="display:none" type="file" id="FileUpload" class="RINV_POIssuType_file btn btn-primary" name="datafile" onchange="InsExclFldUpldHndlr(this);">
			<input type="hidden" class="inputTXT RINV DBfields" id="RINV_POIssUpload" name="RINV_POIssUpload" value="">
			<input style="display:none" type="button" id="Validate1" name="Validate1" value="Add Invoice" onclick="Validate12();" class=" RINV btn btn-primary validate">
		
												</div>	
                                        </div>
										
										
                                        <div class="row card-body pt-3">
	
                                            <!--First column-->
                                            <div class="col-md-6">
                                              
                                               </br>
                                               <div class="md-form">
                                                    <input type="button" id="Validate" name="Validate" value="Validate" onclick="Validate();" class=" RINV btn btn-primary validate">
                                                   <!--<label for="Validate">Validate</label>-->
                                                </div>                                               
                                            </div>
                                            <!--/First column-->

                                            <!--Second column-->
                                           <!-- <div class="col-md-6 text-center">
											
												
												<div class="md-form">
                                                    <input type="hidden" id="Validate" name="Validate" disabled class="DBfields RINV form-control validate">
                                                   <label for="Validate">Program Name</label>
                                                </div>    
												

                                        </div>
                                        </div>-->
                           
						   
						  
												

                                        </div>
						   
                                        <!-- Second Row -->
                                        <!--/Panel data-->
                                    </div>
                                    <!--/First column-->

                                   

                                </div>
                                <!--Main First row-->
                        
        <!--Main Second row-->
                                <div class="row m-b-0">     
        <div class="row card-body pt-3">      
          <div class="col-md-12">                        

<input type="button" style="display:none" onclick="FncallInstrRegGridLrgData_FinanceASync(this,'Table12',{spname:'SCF_sGetRegInvcTempValData',Param:$('#RINV_PrcsID').val(),brid:'',MnuId:''},{0:'',1:''},'||9,10,11,12,13,14,15,16');" id="BTNREIVsuance" name="BTNREIVsuance" />                                            


 <table id="Table12" name="PoIssuanceGrid|CHFLGridLabel" title="Invoice" class="display gridtblmndtry" border="0"></table>                        

</div></div>

                            
                             </div>
                            
                             <!--Main Second row-->
                            
                            </div>
                            <!--/Admin panel-->



                <!--/Main row-->

            </section>
            <!--/Section: Main chart-->

           
            <!--Section: Notifications-->
            


        </div>
    </main>
    <!--/Main layout-->

    <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
        <a class="btn-floating btn-large red">
            <i class="fa fa-pencil"></i>
        </a>

        <ul>
			<li class="assignmentComplete"><a data-toggle="tooltip" data-placement="left" title="" data-original-title="Save"  style="width: 120px;height: 30px;border-radius: 0%;" class="btn-floating btn btn-primary btn-sm">Save</a></li>
            <li class="assignmentComplete"><a data-toggle="tooltip" data-placement="left" title="" data-original-title="Submit"  style="width: 120px;height: 30px;border-radius: 0%;" class="btn-floating btn btn-primary btn-sm">Submit</a></li>
        </ul>
    </div>


<div style="display:none">


<table id="PoIssuanceGridGrdLbl">
<tr role="row">
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">Action</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_CorpCode: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">Corporate Code</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_PONo: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">Invoice Number</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_PODate: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">Invoice Date</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_Currency: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">Currency</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_POAmount: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">Invoice Amount</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_PODueDate: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">Invoice DueDate</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_BEPStatus: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Status</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_Rmrk: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Remark</div></th>
<!--<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_PoolCounterPartyName: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Pool Counter Party Name</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_AdjstAmt: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Adjustment Amount</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_BenName: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Beneficiary Name</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_BnkName: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Bank Name</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_AccNo: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Account No</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_IFSC: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">IFSC</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table12" rowspan="1" colspan="1" aria-label="REIV_AccountType: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Account Type</div></th>
-->

</table>

</div>



<div class="modal fade" style="display:none" id="Table12GridPop"  tabindex="-1" role="dialog" aria-labelledby="Table12GridPop" aria-hidden="true">

  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="Table12GridPopLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>		
	 <div class="modal-body">	 
	<input id="REIV_PrcsID" class="REIV gridDBfields gridClrfields inputTXT" name="REIV_PrcsID" type="hidden" value=""/>
	<input id="REIV_ActivityID" class="REIV gridDBfields gridClrfields inputTXT" name="REIV_ActivityID" type="hidden" value=""/>
    <input id="REIV_ModifiedBy" class="REIV gridDBfields gridClrfields" name="REIV_ModifiedBy" type="hidden" value=""/>
    <input id="REIV_CreatedBy" class="REIV gridDBfields gridClrfields" name="REIV_CreatedBy" type="hidden" value=""/>
    <input id="REIV_DtCreated" class="REIV gridDBfields gridClrfields" name="REIV_DtCreated" type="hidden" value=""/>
    <input id="REIV_DtModified" class="REIV gridDBfields gridClrfields" name="REIV_DtModified" type="hidden" value=""/>   
	<input id="REIV_PKID" class="REIV gridDBfields gridClrfields" name="REIV_PKID" type="hidden" value=""/>   
	<input id="REIV_AdjstAmt" class="REIV gridDBfields gridClrfields" name="REIV_AdjstAmt" type="hidden" value="0"/>   

       <div class="row card-body pt-3">
        <!--First column-->
                                            
                                            <div class="col-md-6">                                             
                                               
                                               <div class="md-form">
											   
											   
											   <select id="REIV_CorpCode" name="REIV_CorpCode"  searchable="Search here.." class="GridMndtry gridDBfields gridClrfields mdb-select colorful-select dropdown-primary ">
                                                    <option value="" disabled selected>Choose Corporate Code</option>
                                                   
                                                </select>
                                                    <label for="REIV_CorpCode">Choose Corporate Code</label>
                                                  
                                                </div>                                               
                                            </div>
                                            <!--/First column-->

                                            <!--Second column-->
                                            <div class="col-md-6 text-center">											
												
												<div class="md-form">
                                                    <input type="text" id="REIV_PONo" name="REIV_PONo" class="GridMndtry gridDBfields gridClrfields form-control validate">
                                                    <label for="REIV_PONo" data-error="wrong" data-success="right" class="">Invoice Number</label>
                                                </div>    
												

                                        </div>
										
                                        </div>

 <div class="row card-body pt-3">
        <!--First column-->
                                            <div class="col-md-6">                                             
                                               
                                               <div class="md-form">
                                                  <input placeholder="dd-mm-yyyy" type="text" id="REIV_PODate" onchange="DueDtChk('REIV_PODueDate','REIV_PODate',this)" name="REIV_PODate" class="GridMndtry gridClrfields form-control datepicker DateFields ISDateField" readonly="" >
                                                    <label for="REIV_PODate" class="active">Invoice Date</label>                                                   
                                                </div>                                               
                                            </div>
                                            <!--/First column-->

                                            <!--Second column-->
                                            <div class="col-md-6 text-center">											
												
												<div class="md-form">
                                                   <input type="text" id="REIV_Currency" name="REIV_Currency" disabled value="INR" placeholder="INR" class="gridDBfields form-control validate">
                                                    <label for="REIV_Currency" data-error="wrong" data-success="right" class="active">Currency</label>
                                                </div>    
												

                                        </div>
                                        </div>
										
										
									
										

 <div class="row card-body pt-3">
        <!--First column-->
                                            <div class="col-md-6">                                             
                                               
                                               <div class="md-form">
                                                     <input type="text" id="REIV_POAmount" name="REIV_POAmount" class="GridMndtry gridDBfields gridClrfields GridCurrMndtry IsNumberFields IsCURCommaFields form-control validate">
                                                    <label for="REIV_POAmount" data-error="wrong" data-success="right" class="">Invoice Amount</label>                                                 
                                                </div>                                               
                                            </div>
                                            <!--/First column-->

                                          <!--Second column-->
											<div class="col-md-6">                                             
                                               
                                               <div class="md-form">
                                                  <input placeholder="Selected date" disabled type="text" id="REIV_PODueDate" onchange="DueDtChk('REIV_PODueDate','REIV_PODate',this)" name="REIV_PODueDate" class=" gridDBfields gridClrfields form-control datepicker picker__input" readonly="" >
                                                    <label for="REIV_PODueDate" class="active">Invoice DueDate</label>                                                   
                                                </div>                                               
                                            </div>
             
                                        </div>
											 <div class="row card-body pt-3">
        <!--First column-->
                                            <div class="col-md-6">                                             
                                               
                                               <div class="md-form">
                                                     <input type="text" id="REIV_PoolCounterPartyName" name="REIV_PoolCounterPartyName" class="GridMndtry gridDBfields gridClrfields form-control validate">
                                                    <label for="REIV_PoolCounterPartyName" data-error="wrong" data-success="right" class="">Pool CounterParty Name</label>                                                 
                                                </div>                                               
                                            </div>
                                            <!--/First column-->

                                          <!--Second column-->
											<div class="col-md-6">                                             
                                               
                                               <div class="md-form">
                                                  <input type="text" id="REIV_BenName"  name="REIV_BenName" class="GridMndtry gridDBfields gridClrfields form-control "  >
                                                    <label for="REIV_BenName" data-error="wrong" data-success="right" class="">Beneficiary Name</label>                                                   
                                                </div>                                               
                                            </div>
             
                                        </div>
										
											 <div class="row card-body pt-3">
        <!--First column-->
                                            
                                            <!--/First column-->

                                          <!--Second column-->
											<div class="col-md-6">                                             
                                               
                                               <div class="md-form">
                                                  <input type="text" id="REIV_AccNo"  name="REIV_AccNo" class="GridMndtry gridDBfields gridClrfields form-control "  >
                                                    <label for="REIV_AccNo" data-error="wrong" data-success="right" class="">Account No</label>                                                   
                                                </div>                                               
                                            </div>
											
											
											 <div class="col-md-6">                                             
                                               
                                               <div class="md-form">
                                                     <input type="text" id="REIV_IFSC" name="REIV_IFSC" class="GridMndtry gridDBfields gridClrfields form-control validate">
                                                    <label for="REIV_IFSC" data-error="wrong" data-success="right" class="">IFSC Code</label>                                                 
                                                </div>                                               
                                            </div>
             
                                        </div>
										
										
										 <div class="row card-body pt-3">
        <!--First column-->
                                           
                                            <!--/First column-->
											<div class="col-md-6">                                             
                                               
                                               <div class="md-form">
                                                     <input type="text" id="REIV_BnkName" name="REIV_BnkName" class="GridMndtry gridDBfields gridClrfields form-control validate">
                                                    <label for="REIV_BnkName" data-error="wrong" data-success="right" class="">Bank Name</label>                                                 
                                                </div>                                               
                                            </div>
                                          <!--Second column-->
											<div class="col-md-6">                                             
                                               
                                               <div class="md-form">
                                                    <select id="REIV_AccountType" name="REIV_AccountType"  class="mdb-select colorful-select dropdown-primary GridMndtry gridDBfields gridClrfields">
                                                    <option value="" disabled selected>Choose Account Type</option>
                                                    <option value="Savings">Savings</option>
                                                    <option value="Current">Current</option>
                                                </select>
                                                    <label for="REIV_AccountType">Account Type</label>
                                                </div>                                                 
                                            </div>
             
                                        </div>
										
										
										

										<div class="row card-body pt-3">
        <!--First column-->
                                            <div class="col-md-6">                                             
                                               
                                               <div class="md-form">
                                                     <input type="text" disabled id="REIV_BEPStatus" name="REIV_BEPStatus" class="gridDBfields form-control validate">
                                                    <label for="REIV_BEPStatus" data-error="wrong" data-success="right" class="">Status</label>                                                 
                                                </div>                                               
                                            </div>
                                            <!--/First column-->

                                          <!--Second column-->
											<div class="col-md-6">                                             
                                               
                                               <div class="md-form">
                                                  <input type="text" disabled id="REIV_Rmrk" name="REIV_Rmrk" class="gridDBfields form-control validate">
                                                    <label for="REIV_Rmrk" class="active">Remark</label>                                                   
                                                </div>                                               
                                            </div>
             
                                        </div>

 </div>
      <div class="modal-footer" style="align-self: baseline;">
        <button type="button"  id="GridBTNCn" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" id="GridBTNSb" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


 <!-- SCRIPTS -->

    <!-- JQuery -->
   <script type="text/javascript" src="ThemeproLO/UCV/RegisterInvoice/Script/RegisterInvoice/LoadSubmit/LoadSubmit.js${DMY13}"></script>
      <script type="text/javascript" src="ThemeproLO/UCV/RegisterInvoice/Script/RegisterInvoice/Validation/Validation.js${DMY13}"></script>
	  <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/jquery.dataTables.min_BAK.js${DMY13}"></script>
<!-- <script>
        // Data Picker Initialization
        $('.datepicker').pickadate();

        // Material Select Initialization
        $(document).ready(function() {
            $('.mdb-select').material_select();
        });

        
    </script> -->
   