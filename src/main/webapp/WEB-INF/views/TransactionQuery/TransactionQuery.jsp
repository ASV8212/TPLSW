 <!--Main layout-->
    <main class="">
        <div class="container-fluid">

                
            <section class="section">

                <!--Main row-->
             <div class="row">

                    <div class="col-md-12">
                        <!--Card-->
                        <div class="card card-cascade narrower">
<nav class="navbar navbar-light white mb-4" style="margin-bottom: 0rem!important;padding: .1rem .2rem;">
<a id="INBXHDR" class="navbar-brand" href="#">Status Enquiry</a>


<!--<div class="btn-sm navbar-toggler toggler-example">
<button type="button" id="ViewBtn" value="View" class="btn btn-primary btn-sm BtnPrcs waves-effect waves-light">View</button>
</div>-->
  </nav>
                            <!--Admin panel-->
                            <div class="admin-panel">
							
	<input id="PrcsID" class="inputTXT" name="PrcsID" type="hidden" value="${PrcsID}"/>
	<input id="ActivityID" class="inputTXT" name="ActivityID" type="hidden" value="${ActvID}"/>
	<input id="FormAction" name="FormAction" type="hidden" value="${FormAction}"/>
	<input id="FormColor" name="FormColor" type="hidden" value="${FormColor}"/>
	<input id="FormName" name="FormName" type="hidden" value="${FormName}"/>
	 <input id="CpmCd" name="CpmCd" type="hidden" value="${CpmCd}"/>
	 

	
	
	 <!--Main First row-->
			<!--	<div class="card-headerAbvGrid row m-b-0">

<div class="col-md-6">
 <label for="NoofIns">No of Instruments :</label>
  <span class="badge badge-light" id='NoofIns'></span>
</div>
<div class="col-md-6">
 <label for="TotAmt">Total Amount :</label>
  <span class="badge badge-light" id='TotAmt'></span>
</div>

					</div>-->
                                <!--Main First row-->
	</br>
	<div class="card-body pt-3">
	   <div class="row m-b-0">
<div class="col-md-6">
<div class="md-form">


    <select id="RMLH_PrgmID" name="RMLH_PrgmID" onchange="OnChngeSetVal('POIS_PrgID','POIS_PrgName');PrgmOnChng();"  searchable="Search here.." class="RINV SRCH mdb-select colorful-select dropdown-primary ">
                                                    <option value="" disabled selected>Choose Program</option>
                                                   
                                                </select>
                                                    <label for="RMLH_PrgmID">Program Name</label>
	
												    <input type="hidden" id="RMLH_PrgmName" name="RMLH_PrgmName" disabled class="SRCH  RINV form-control validate">
</div>
</div>

<div class="col-md-6">
  <div class="md-form">
 
      <select id="RMLH_BtchNo" name="RMLH_BtchNo"  searchable="Search here.." class="SRCH mdb-select colorful-select dropdown-primary RINV " onchange="">
                                                    <option value="" disabled selected>Choose Batch No</option>
													
                                                    
                                                </select>
                                                    <label for="RMLH_BtchNo">Batch No</label>
   </div>
</div>

                                </div>
								
								  <div class="row m-b-0">
<div class="col-md-6">

  <div class="md-form">

   <input type="button" id="Fetch" name="Fetch" value="Fetch" onclick="FetchTranState();" class=" RINV btn btn-primary btn-sm validate">
   
   </div>
</div>

<div class="col-md-6">
   
     
   
</div>

                                </div>
	
	
                                <!--Main Second row-->
                                <div class="row m-b-0">
<div class="col-md-12">
<input type="button" style="display:none" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_sGetBtchWsTrnsList',DBSrc:'INTR1',Mode:'',Param:$('#RMLH_PrgmID').val(),brid:$('#RMLH_BtchNo').val(),MnuId:$('#PrcsID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});" id="BTNTranQr" name="BTNTranQr" />

    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table1">
    </table>
</div>
                                </div>
                                <!--Main Second row-->

                            </div>
                            </div>
                            <!--/Admin panel-->

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
   <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
        <a class="btn-floating btn-large red">
            <i class="fa fa-pencil"></i>
        </a>

       <ul>
            <li class="assignmentComplete"><a data-toggle="tooltip" data-placement="left" title="" data-original-title="Submit" style="width: 120px;height: 30px;border-radius: 0%;" class="btn-floating btn btn-primary btn-sm">Submit</a></li>
         </ul>
    </div>




 <!-- SCRIPTS -->

    <!-- JQuery -->
   <script type="text/javascript" src="ThemeproLO/TransactionQuery/Script/TransactionQuery/LoadSubmit/LoadSubmit.js${DMY13}"></script>
      <script type="text/javascript" src="ThemeproLO/TransactionQuery/Script/TransactionQuery/Validation/Validation.js${DMY13}"></script>

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
   