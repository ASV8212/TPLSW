 <!--Main layout-->
    <main class="">
        <div class="container-fluid">

                
            <section class="section">

                <!--Main row-->
             <div class="row">

			 
			 <input id="MnuId" class="inputTXT" name="MnuId" type="hidden" value=""/>
				<input id="PrcsID" class="inputTXT" name="PrcsID" type="hidden" value="${PrcsID}"/>
					<input id="ActivityID" class="inputTXT" name="ActivityID" type="hidden" value="${ActvID}"/>
					
					
                    <div class="col-md-12">
                        <!--Card-->
                   
			<ul class="nav nav-tabs md-tabs ${FormColor}" id="myTabMD" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab-md" data-toggle="tab" href="#home-md" role="tab" aria-controls="home-md"
      aria-selected="true">SOA</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab-md" data-toggle="tab" href="#profile-md" role="tab" aria-controls="profile-md"
      aria-selected="false">Disbursement Advise</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab-md" data-toggle="tab" href="#contact-md" role="tab" aria-controls="contact-md"
      aria-selected="false">Interest Advise</a>
  </li>
</ul>
<div class="tab-content card pt-5" id="myTabContentMD">
  <div class="tab-pane fade show active" id="home-md" role="tabpanel" aria-labelledby="home-tab-md">
    <p>  
                                        <div class="row card-body pt-3">
	
                                            <!--First column-->
                                            <div class="col-md-6">
                                              
                                               </br>
                                               <div class="md-form">
                                                   <select id="RINV_PrgID" name="RINV_PrgID" onchange="OnChngeSetVal('RINV_PrgID','RINV_PrgName');"  searchable="Search here.." class="RINV mdb-select colorful-select dropdown-primary DBfields">
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
                                        </div></p>
										 <p><div class="row card-body pt-3">
	
                                            <!--First column-->
                                            <div class="col-md-6">
                                              
                                               <div class="md-form">
                                                  <input placeholder="dd-mm-yyyy" type="text" id="REIV_FrmDate" onchange="CompareDateFields(REIV_FrmDate,REIV_ToDate)" name="REIV_FrmDate" class="form-control datepicker DateFields ISDateField" readonly="" >
                                                    <label for="REIV_PODate" class="active">From Date</label>                                                   
                                                </div>                                           
                                            </div>
                                            <!--/First column-->

                                            <div>
		
												</div>	
                                        </div></p>
										<p><div class="row card-body pt-3">
	
                                            <!--First column-->
                                            <div class="col-md-6">
                                              
                                               <div class="md-form">
                                                  <input placeholder="dd-mm-yyyy" type="text" disabled id="REIV_ToDate" onchange="" name="REIV_ToDate" class="form-control datepicker DateFields ISDateField" readonly="" >
                                                    <label for="REIV_PODate" class="active">To Date</label>                                                   
                                                </div>                                           
                                            </div>
                                            <!--/First column-->

                                            <div>
		
												</div>	
                                        </div></p>
										<p><div class="row card-body pt-3">
	
                                            <!--First column-->
                                            <div class="col-md-6">
                                              
                                               </br>
                                               <div class="md-form">
                                                    <input type="button" id="DownloadBtn" name="DownloadBtn" value="Download" onclick="Download();" class=" RINV btn btn-primary validate">
                                                   <!--<label for="Validate">Validate</label>-->
                                                </div>                                               
                                            </div>
                                        </div></p>
  </div>
  <div class="tab-pane fade" id="profile-md" role="tabpanel" aria-labelledby="profile-tab-md">
    <p><div class="row card-body pt-3">
	
                                            <!--First column-->
                                            <div class="col-md-6">
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
                                        </div></p>
  </div>
  <div class="tab-pane fade" id="contact-md" role="tabpanel" aria-labelledby="contact-tab-md">
    <p><div class="row card-body pt-3">
	
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
                                        </div></p></div>
										
  </div>
</div>	   
				   
				   
</div>
</div>
                <!--/Main row-->

            </section>
            <!--/Section: Main chart-->

           
            <!--Section: Notifications-->
            


        </div>
    </main>
    <!--/Main layout-->





 <!-- SCRIPTS -->

    <!-- JQuery -->
   <script type="text/javascript" src="ThemeproLO/Reports/Script/Reports/LoadSubmit/LoadSubmit.js${DMY13}"></script>
   <script type="text/javascript" src="ThemeproLO/Reports/Script/Reports/Validation/Validation.js${DMY13}"></script>

  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 
 

<!-- <script>
        // Data Picker Initialization
        $('.datepicker').pickadate();

        // Material Select Initialization
        $(document).ready(function() {
            $('.mdb-select').material_select();
        });

        
    </script> -->
   