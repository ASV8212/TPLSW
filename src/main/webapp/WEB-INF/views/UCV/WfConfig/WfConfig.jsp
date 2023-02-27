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
                                          Config
                                        </div>
										
							
                                        <!--/Panel title-->
										<input id="MnuId" class="inputTXT" name="MnuId" type="hidden" value="30b"/>	
    <input id="RINV_PrcsID" class="RINV DBfields inputTXT" name="RINV_PrcsID" type="hidden" value="${PrcsID}"/>
	<input id="RINV_ActivityID" class="RINV DBfields inputTXT" name="RINV_ActivityID" type="hidden" value="${ActvID}"/>
    <input id="RINV_ModifiedBy" class="RINV DBfields" name="RINV_ModifiedBy" type="hidden" value=""/>
    <input id="RINV_CreatedBy" class="RINV DBfields" name="RINV_CreatedBy" type="hidden" value=""/>
    <input id="RINV_DtCreated" class="RINV DBfields" name="RINV_DtCreated" type="hidden" value=""/>
    <input id="RINV_DtModified" class="RINV DBfields" name="RINV_DtModified" type="hidden" value=""/>   
	<!--<input id="RMLH_CmpnyCde" class="RMLH SRCH DBfields" name="RMLH_CmpnyCde" type="hidden" value=""/>-->
	<input id="RMLH_CrBy" class="RINV SRCH DBfields" name="RMLH_CrBy" type="hidden" value=""/>	

    	<input id="SubmitSuccess" class="" name="SubmitSuccess" type="hidden" value=""/>   
	
    
                                        <!--Panel data-->
            <!-- First Row -->                          

											<!--First column-->
											<div class="col-md-6" id="CmpnyCode" Style="display:none">
                                              
                                               </br>
                                               <div class="md-form">
                                                   <select id="RMLH_CmpnyCde" name="RMLH_CmpnyCde" onchange="TriggerChng1()"  searchable="Search here.." class="RINV SRCH mdb-select colorful-select dropdown-primary DBfields">
                                                    <option value="" disabled selected>Company Code</option>
                                                   
                                                </select>
                                                    <label for="RMLH_CmpnyCde">Company Code</label>
                                                </div>                                               
                                            </div>
	
                                            <!--First column-->
											<div class="col-md-6">
                                              
                                               </br>
                                               <div class="md-form">
                                                   <select id="RMLH_MenuName1" name="RMLH_MenuName1" onchange="TriggerChng();OnChngeSetVal1('RMLH_MenuName1','RMLH_MenuName')"  searchable="Search here.." class="RINV SRCH mdb-select colorful-select dropdown-primary DBfields">
                                                    <option value="" disabled selected>Menu</option>
                                                   
                                                </select>
                                                    <label for="RMLH_MenuName1">Menu</label>
                                                </div>                                               
                                            </div>
                                          
                                            <!--/First column-->
											 <!--Second column-->
                                            
												
												<div class="md-form">
                                                    <input type="hidden" id="RMLH_MenuName" name="RMLH_MenuName" disabled class="SRCH DBfields RINV form-control validate">
                                                   
                                                </div>    

	

           <!-- First Row -->
           <!-- Second Row -->
              

										
								
                                    

                                            <!--Second column-->
											
		<!-- level start<div class="row card-body pt-3">
	
                                            <!--First column-->
                                          <!--  <div class="col-md-6">
                                              
                                               <div class="md-form">
                                                    <select id="RMLH_LvlName" name="RMLH_LvlName"  searchable="Search here.." class="SRCH mdb-select colorful-select dropdown-primary RINV DBfields" onchange="TriggerChng()">
                                                    <option value="" disabled selected>Level</option>
													<option value="Initiation">Initiation</option>
                                                    <option value="L1">Level1</option>
                                                    <option value="L2">Level2</option>
													<option value="L3">Level3</option>
                                                </select>
                                                    <label for="RMLH_LvlName">Level</label>
                                                </div>                                              
                                            </div>
                                            <!--/First column

                   
                                        </div>			level end	-->					
											
											
											
                                           <!-- <div class="col-md-6 text-center">
											
												
												<div class="md-form">
                                                    <input type="hidden" id="Validate" name="Validate" disabled class="DBfields RINV form-control validate">
                                                   <label for="Validate">Program Name</label>
                                                </div>    
												

                                        </div>
                                        </div>-->
                           

						   
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

<input type="button" style="display:none" onclick="FncallwebserviceGrid(this,'Table2',{spname:'SCF_sConfigWFGrd',Mode:'|Medium',Param:'',brid:'New',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});" id="BTNREIVsuance" name="BTNREIVsuance" />                                            
<!--<input type="button" style="display:none" onclick="FncallwebserviceGrid(this,'Table2',{spname:'SCF_sConfigWFGrd',Mode:'|Medium',Param:$(window.parent.parent.document).find('#CpmCd').val(),brid:'Exist',MnuId:$('#RMLH_MenuName1').val()+'|'+$('#RMLH_LvlName').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});" id="BTNREIVsuance1" name="BTNREIVsuance1" />-->
<input type="button" style="display:none" onclick="FncallwebserviceGrid(this,'Table2',{spname:'SCF_sConfigWFGrd',Mode:'|Medium',Param:$('#RMLH_CmpnyCde').val(),brid:'Exist',MnuId:$('#RMLH_MenuName1').val()+'|'+$('#RMLH_LvlName').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});" id="BTNREIVsuance1" name="BTNREIVsuance1" />                                            


 <table id="Table2" name="PoIssuanceGrid|CHFLGridLabel" title="Config" class="display gridtblmndtry" border="0"></table>                        

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
            <li class="assignmentComplete"><a data-toggle="tooltip" data-placement="left" title="" data-original-title="Submit"  style="width: 120px;height: 30px;border-radius: 0%;" class="btn-floating btn btn-primary btn-sm">Submit</a></li>
        </ul>
    </div>


<div style="display:none">


<table id="PoIssuanceGridGrdLbl">
<tr role="row">
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">Action</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="RMLH_LvlName: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">Level</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="RMLH_AprvA: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">User ID</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="RMLH_SancAmtFrm: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">Sanction Amount From</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="RMLH_SancAmtTo: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">Sanction Amount To</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="RMLH_Flag: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">Status</div></th>
<!--<th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="REIV_POAmount: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">Invoice Amount</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="REIV_PODueDate: activate to sort column ascending" style=""><div class="DataTables_sort_wrapper">Invoice DueDate</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="REIV_BEPStatus: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Status</div></th>
<th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="REIV_Rmrk: activate to sort column ascending" style="width: 0px;"><div class="DataTables_sort_wrapper">Remark</div></th>-->

</table>

</div>



<div class="modal fade" style="display:none" id="Table2GridPop"  tabindex="-1" role="dialog" aria-labelledby="Table2GridPop" aria-hidden="true">

  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="Table2GridPopLabel"></h5>
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
<input id="RMLH_AprvA" class="REIV gridDBfields gridClrfields" name="RMLH_AprvA" type="hidden" value=""/>  
	
	

	
	     <div class="row card-body pt-3">
        <!--First column-->
                                          <div class="col-md-6">
                                              
											  
											  
											  <div class="md-form">
												<select  id="RMLH_LvlName" name="RMLH_LvlName" class="mdb-select md-form validate gridClrfields GridMndtry" >
												<option value="" disabled selected>Level</option>
													<option value="Initiation">Initiation</option>
                                                    <option value="L1">Level1</option>
                                                    <option value="L2">Level2</option>
													<option value="L3">Level3</option>
                                                </select>
												<!--<label class="mdb-main-label">Label example</label>
												<button class="btn-save btn btn-primary btn-sm">Save</button>-->
												<!--<input type="text" id="RMLH_Flag" name="RMLH_Flag" class="  form-control validate gridClrfields"  >-->
												    <!--<select id="RMLH_Flag" name="RMLH_Flag"  searchable="Search here.." class="form-control validate gridClrfields">
                                                    <option value="" disabled selected>Status</option>
													<option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                </select>-->
                                                    <label for="RMLH_LvlName" data-error="wrong" data-success="right" class="active">Level</label>
                                                </div>    
												
												
											                                           
                                            </div>
	 </div>
	
	
       <div class="row card-body pt-3">
        <!--First column-->
                                            <div class="col-md-6">                                             
                                               
                                               <div class="md-form">
											       <!--<input type="text" id="RMLH_AprvA" name="RMLH_AprvA" class="form-control validate gridClrfields">-->
												   <select  id="Name" name="Name" onchange="OnChngeSetVal2('Name','RMLH_AprvA');" class="GridMndtry validate gridClrfields mdb-select md-form " multiple>
												<option value="" disabled selected>Choose User ID</option>
												
												</select>
                                                    <label for="Name" data-error="wrong" data-success="right" class="">Choose User</label>
													
                                                  
                                                </div>                                               
                                            </div>
                                            <!--/First column-->

                                            <!--Second column-->
                                            <div class="col-md-6 text-center">											
												
												<div class="md-form">
                                                    <input type="text" id="RMLH_SancAmtFrm" name="RMLH_SancAmtFrm" class="GridCurrMndtry IsNumberFields IsCURCommaFields GridMndtry form-control validate gridClrfields">
                                                    <label for="RMLH_SancAmtFrm" data-error="wrong" data-success="right" class="">Sanction Amount From</label>
                                                </div>    
												

                                        </div>
										
   </div>

 <div class="row card-body pt-3">
        <!--First column-->
                                            <div class="col-md-6">                                             
                                               
                                               <div class="md-form">
                                                  <input type="text" id="RMLH_SancAmtTo" name="RMLH_SancAmtTo" class="GridCurrMndtry IsNumberFields IsCURCommaFields GridMndtry form-control validate gridClrfields"  >
                                                    <label for="RMLH_SancAmtTo" class="">Sanction Amount To</label>                                                   
                                                </div>                                               
                                            </div>
                                            <!--/First column-->

                                            <!--Second column-->
                                            <div class="col-md-6 text-center">											
												
												<div class="md-form">
												<select  id="RMLH_Flag" name="RMLH_Flag" class="mdb-select md-form validate gridClrfields GridMndtry" >
												<option value="" disabled selected>Choose Status</option>
												<option value="Active">Active</option>
												<option value="InActive">InActive</option>
												</select>
												<!--<label class="mdb-main-label">Label example</label>
												<button class="btn-save btn btn-primary btn-sm">Save</button>-->
												<!--<input type="text" id="RMLH_Flag" name="RMLH_Flag" class="  form-control validate gridClrfields"  >-->
												    <!--<select id="RMLH_Flag" name="RMLH_Flag"  searchable="Search here.." class="form-control validate gridClrfields">
                                                    <option value="" disabled selected>Status</option>
													<option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                </select>-->
                                                    <label for="RMLH_Flag" data-error="wrong" data-success="right" class="active">Status</label>
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
   <script type="text/javascript" src="ThemeproLO/WfConfig/Script/WfConfig/LoadSubmit/LoadSubmit.js${DMY13}"></script>
      <script type="text/javascript" src="ThemeproLO/WfConfig/Script/WfConfig/Validation/Validation.js${DMY13}"></script>
	  <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/jquery.dataTables.min_BAK.js${DMY13}"></script>
<!-- <script>
        // Data Picker Initialization
        $('.datepicker').pickadate();

        // Material Select Initialization
        $(document).ready(function() {
            $('.mdb-select').material_select();
        });

        
    </script> -->
   