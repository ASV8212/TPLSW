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
<a id="INBXHDR" class="navbar-brand" href="#">${FormName}</a>
<div style="width:100%;">

</div>
<div class="col-md-6">
 <label for="PayAmt">Payment Amount&emsp;&emsp;&emsp;&emsp;&emsp;:</label>
  <span  id='PayAmt'>-</span>
</div>

<div class="btn-sm navbar-toggler toggler-example">
<button type="button" id="ViewBtn" value="View" class="btn btn-primary btn-sm BtnPrcs waves-effect waves-light">View</button>
<!--<select  id="dwntyp" name="dwntyp" style="display:none" class="mdb-select md-form validate" >
												<option value="" disabled selected>Download Type</option>
													<option value="Excel">Excel</option>
                                                    <option value="CSV">CSV</option>
                                                    <option value="PDF">PDF</option>
                                                </select>-->
<button type="button" id="ClickToPayBtn" style="display:none" onclick="ClickToPay();" value="ClickToPay" class="btn btn-primary btn-sm BtnPrcs waves-effect waves-light">Proceed to Pay</button>

</div>
  </nav>
                            <!--Admin panel-->
                            <div class="admin-panel">
							
	<input id="PrcsID" class="inputTXT" name="PrcsID" type="hidden" value="${PrcsID}"/>
	<input id="ActivityID" class="inputTXT" name="ActivityID" type="hidden" value="${ActvID}"/>
	<input id="FormAction" name="FormAction" type="hidden" value="${FormAction}"/>
	<input id="FormColor" name="FormColor" type="hidden" value="${FormColor}"/>
	<input id="FormName" name="FormName" type="hidden" value="${FormName}"/>
	<input id="CpmCd" name="CpmCd" type="hidden" value="${CpmCd}"/>
	<input id="PrMs1" name="PrMs1" type="hidden" value="${PrMs1}"/>
	 

	
	
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
	
	
                                <!--Main Second row-->
                                <div class="row m-b-0">
<div class="col-md-12">
<input type="button" style="display:none" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_SFEPRepyAccList',Mode:'',Param:$('#CpmCd').val(),brid:'All',MnuId:$('#PrMs1').val(),DBSrc:'INTR1'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,8');" id="BTNInbox" name="BTNInbox" />
<input type="button" style="display:none" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_SFEPRepyAccList',Mode:'',Param:$('#CpmCd').val(),brid:'All',MnuId:$('#PrMs1').val(),DBSrc:'INTR1'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,8');" id="BTNInbox7" name="BTNInbox7" />
<input type="button" style="display:none" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_sGetTOTPurchaseORDR',Mode:'',Param:$('#CpmCd').val(),brid:$('#FormAction').val(),MnuId:$('#PrcsID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,1,2,4,5');" id="BTNInbox1" name="BTNInbox1" />
<input type="button" style="display:none" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_sGetTOTRegInv',Mode:'',Param:$('#CpmCd').val(),brid:$('#FormAction').val(),MnuId:$('#PrcsID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,1,2,4,5');" id="BTNInbox2" name="BTNInbox2" />
<input type="button" style="display:none" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_sGetEOFDtl',Mode:'',Param:$('#LogUsr').val(),brid:$('#CpmCd').val(),MnuId:'CP'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7,8,9');" id="BTNInbox3" name="BTNInbox3" />
<input type="button" style="display:none" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_sGetEOFDtl1',Mode:'',Param:$('#CpmCd').val(),brid:$('#FormAction').val(),MnuId:$('#PrcsID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,1,2,4,5');" id="BTNInbox4" name="BTNInbox4" />
<input type="button" style="display:none" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_sGetEOFMyAccptDtl',Mode:'',Param:$('#LogUsr').val(),brid:$('#CpmCd').val(),MnuId:'CP'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7,8,9');" id="BTNInbox5" name="BTNInbox5" />
<input type="button" style="display:none" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_sGetEOFMyAccptDtl1',Mode:'',Param:$('#CpmCd').val(),brid:$('#FormAction').val(),MnuId:$('#PrcsID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,1,2,4,5');" id="BTNInbox6" name="BTNInbox6" />

    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table1">
    </table>
</div>
                                </div>
                                <!--Main Second row-->

                            
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
   <script type="text/javascript" src="ThemeproLO/ClickToRepay/Script/ClickToRepay/LoadSubmit/LoadSubmit.js${DMY13}"></script>
   <script type="text/javascript" src="ThemeproLO/ClickToRepay/Script/ClickToRepay/Validation/Validation.js${DMY13}"></script>

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
   