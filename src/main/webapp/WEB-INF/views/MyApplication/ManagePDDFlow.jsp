
    <!--Main layout-->
    <main class="">
        <div class="container-fluid ">

            <!--Section: Main Chart-->
            <section class="section DashPrp1">

</br>
 <div class="row ">

<div class="col-md-6">

<div class="Btxt19  ApplTitle">
 Manage PDD
</div>

</div>
<!-- <div class="col-md-9 ml-auto1 my-auto">

<div class="">
<div class="HyperControls">
 ${CONTROLDATA}

</div>

</div>

</div> -->

</div>


  <!--First row-->
</br>
<div class="row">
	<!--<div class="col-lg-12">
		
		  <ul class="nav FormPageTab FormMainTab1">      
      ${PAGETABDATA}
   	</ul>
	</div>-->
</div>


</br>
     <div class="row DashPrp4row">   
     <div class="col-md-12">  
  <div class="card card-cascade narrower">
  
  
   
  
  
 <!--  <div class="row">
  <div class="col-md-12">   -->
  <div class="card-headerBlack white-text">
              
         <div class="row">
                   
         <div class="col-md-2 ">
         <!--<span class="Ntxt4">Branch</span>
         <select id="GridBranch" name="GridBranch" onchange="OnChngeSetVal('GridBranch','');"  searchable="Search here.." class="RINV mdb-select colorful-select dropdown-primary Ntxt3">
                                                    <option value="" selected>All</option>
                                                    </select>-->
       
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
  <input type="button" style="display:none" class="DashTrg" onclick="FncallFEPDashLrgDataWP(this,'Table3',{spname:'LSW_SMYAPPLNOTC',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||');" id="BTNAcctRecv" name="BTNAcctRecv" />

    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table3">
    </table>
    
    </div>
   </div>



                            
    </div>
    
   <!--  </div>
  </div> -->
    
  </div>
</div>
         
        </div> 
     
    
       
        </br>
          </br>
      <div class="row DashPrp5row ">
      
      <div class="col-md-12 d-flex justify-content-center">
      <div class="">
      <button type="button" style="display:none" data-card="1" class="btn btn-Syel waves-effect waves-light OPSCRTO">Send to Credit Ops</button>
<button type="button" style="display:none" data-card="1" class="btn btn-Syel waves-effect waves-light QDTO">Send to Quick Disbursement</button>
        <button type="button" style="display:none"  class="btn btn-secondary btn-sm btn-yel Btxt2">View All Branches</button>
        
      </div>
      </div>   
         </div>  
       
       </br>
          </br>
         
              </section>
            <!--/Section: Main chart-->
         

            <!--Section: Notifications-->
          


        </div>
    </main>
    <!--/Main layout-->

     <div class="fixed-action-btn" id="draggable" style="bottom: 45px; right: 24px;display:none">
        <a type="button" id="LCR" class="btn-floating btn-large red" style="display:none">
            <i class="fa fa-plus"></i>
        </a>

        <ul  class="TransMnu">
            <!--<li Class="FltMnu" name="GetNextNavAction?MnuID=30e&Action=View" id="30e"  ><a data-toggle="tooltip" data-placement="left" title="" data-original-title="Finance Request" class="btn-floating red"><i class="fa fa-star"></i></a></li>
            <li Class="FltMnu" name="GetNextNavAction?MnuID=30d&Action=View" id="30d"  ><a data-toggle="tooltip" data-placement="left" title="" data-original-title="Invoice Acceptance" class="btn-floating red"><i class="fa fa-star"></i></a></li>
			<li Class="FltMnu" name="GetNextNavAction?MnuID=30b&Action=New" id="30b" ><a data-toggle="tooltip" data-placement="left" title="" data-original-title="Register Invoice" class="btn-floating yellow darken-1"><i class="fa fa-user"></i></a></li>
			<li Class="FltMnu" name="GetNextNavAction?MnuID=30b&Action=New" id="30b" ><a data-toggle="tooltip" data-placement="left" title="" data-original-title="Register Invoice Payable" class="btn-floating yellow darken-1"><i class="fa fa-user"></i></a></li>
            <li Class="FltMnu" name="GetNextNavAction?MnuID=30c&Action=View" id="30c" ><a data-toggle="tooltip" data-placement="left" title="" data-original-title="PO Acceptance" class="btn-floating green"><i class="fa fa-envelope"></i></a></li>
            <li Class="FltMnu" name="GetNextNavAction?MnuID=30a&Action=New" id="30a" ><a data-toggle="tooltip" data-placement="left" title="" data-original-title="PO Issuance" class="btn-floating blue"><i class="fa fa-shopping-cart"></i></a></li>-->
        </ul>
    </div>

  <a type="button" id="Popup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#basicExampleModal">
            <i class="fa fa-plus"></i>
        </a>

<!-- Modal -->
<div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:840px" role="document">
    <div class="modal-content">
       <div class="modal-header">
        <div class="Btxt10">SELECT DETAILS</div>
   
   <a href="#">  <img id="" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>     
        
      </div>  
      <div class="modal-body">
        
         <div class="">


    <!-- Card body -->
     <div class="">
            
        <form>          
            <input type="text" id="LBSI_PRCSID" hidden="hidden" name="LBSI_PRCSID" class=" LBSIDBfields ">
            <input type="text" id="LBSI_ACTIVITYID" hidden="hidden"  name="LBSI_ACTIVITYID" class=" LBSIDBfields ">
            <input type="text" id="LBSI_CREATEDBY" hidden="hidden"  name="LBSI_CREATEDBY" class=" LBSIDBfields ">
            <input type="text" id="LBSI_DTCREATED" hidden="hidden"  name="LBSI_DTCREATED" class=" LBSIDBfields ">
            <input type="text" id="LBSI_MODIFIEDBY" hidden="hidden"  name="LBSI_MODIFIEDBY" class=" LBSIDBfields ">
            <input type="text" id="LBSI_DTMODIFIED" hidden="hidden"  name="LBSI_DTMODIFIED" class=" LBSIDBfields ">
          
           <div class="form-row">
           
            <div class="col">
                 
                   <div class="md-form">
          
               <div class="select-radio LBSIMndtry"> 
                    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input LBSIDBfields" onclick="CheckCusType();" value="Individual" id="Indvdl" name="LBSI_CUSTYPE">
  <label class="custom-control-label" for="Indvdl">Individual</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input LBSIDBfields" onclick="CheckCusType();" value="Non-Individual" id="NonIndvdl" name="LBSI_CUSTYPE">
  <label class="custom-control-label" for="NonIndvdl">Non-Individual</label>
</div>


</div>
                  <label class="mdb-main-label BTxt9">Customer Type <span class="MndtryAstr">*</span></label>      
                  </div>
                </div>
                 <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields LBSIMndtry " id="LBSI_PRODUCT" name="LBSI_PRODUCT">
                        <!-- <option value="" selected>--Select--</option>-->
                         <option value="Home Equity">Home Equity</option>
                  </select>
                        <label class="mdb-main-label BTxt9">Product <span class="MndtryAstr">*</span></label>
                </div>
                </div>
           </div>
           <div class="form-row">
                <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields LBSIMndtry" id="LBSI_BRANCH" name="LBSI_BRANCH">
                        <!--  <option value="" selected>--Select--</option>
                              <option value="Perangudi">Perangudi</option>
                              <option value="Anakapalli">Anakapalli</option> -->
                        </select>
                        <label class="mdb-main-label BTxt9">Branch <span class="MndtryAstr">*</span></label>
                </div>
                </div> 
                <div class="col">
                <div class="md-form">
                        <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields LBSIMndtry" onchange="GETDROPDOWNVAL('Page')" id="LBSI_LONTYPE" name="LBSI_LONTYPE">
                        </select>
                        <label class="mdb-main-label BTxt9">Type of Loan <span class="MndtryAstr">*</span></label>
                </div>  
                </div>
           </div>
           <div class="form-row">
            <div class="col-md-6 SUBLON">
                 <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields  " id="LBSI_SUBLONTYPE" name="LBSI_SUBLONTYPE">
                        <option value="" selected>--Select--</option>
                        </select>
                        <label class="mdb-main-label BTxt9">Sub Loan Type <span class="MndtryAstr">*</span></label> 
                  </div>
               </div>
               <div class="col-md-6 PRIME">
                   <div class="md-form">
                         <input type="text" id="LBSI_PRIMLONID" maxlength="18" class="form-control LBSIDBfields " name="LBSI_PRIMLONID">
                         <input type="text" id="OLDPRCSID" class="form-control LBSIDBfields" hidden="hidden" name="OLDPRCSID">
                         <label for="LBSI_PRIMLONID" class="">Primary Loan ID <span class="MndtryAstr">*</span></label>
                         <!-- <img src="ThemeproLO/Common/Images/search.png"  onclick="GetExistApplcant();" class="FieldIcon"/>  -->
                    </div>
               </div>
           </div>
           <div class="form-row">
             <div class="col-md-6">
                  <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields LBSIMndtry" onchange="CheckSource();CheckDirect();"  id="LBSI_SOURCBY" name="LBSI_SOURCBY">
                        <option value="" selected>--Select--</option>
                        <option value="Connector">Connector</option>
                        <option value="DST">DST</option>
                        <option value="DSA">DSA</option>
                        <option value="Direct">Direct</option>
                        </select>
                  <label class="mdb-main-label BTxt9">Sourced By <span class="MndtryAstr">*</span></label>
                </div>
            </div>
            <div class="col-md-6 DIRDISB" style="display:none">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields"   id="LBSI_CONECTNAME" name="LBSI_CONECTNAME">
                         <option value="" selected>--Select--</option>
                         <option class="CON" disabled value="Connector 1">Connector 1</option>
                         <option class="DST" disabled value="DST 1">DST 1</option>
                         <option class="DSA" disabled value="DSA 1">DSA 1</option>
                        </select>
                     <label for="" class="mdb-main-label BTxt9">Source Name <span class="MndtryAstr">*</span></label>
                   
                   <!--  <div class="collapse" id="SourceNameCollapse">
                        <input type="text" id="LBSI_SOURCNAME" class="form-control LBSIDBfields ">
                        <label for="LBSI_SOURCNAME" class="">Source Name *</label>
                    </div> --> 
                 </div>
             </div>
           </div>
          <div class="form-row">
            <div class="col-md-6 CONS">
                <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields " id="LBSI_CONSTITUTION" name="LBSI_CONSTITUTION">
                        <option value="" selected>--Select--</option>
                             <option value="Partnership firms">Partnership firms</option>
                              <option value="LLP">LLP</option>
                              <option value="HUF">HUF</option>
			      			  <option value="Private Ltd.">Private Ltd.</option>
			      			  <option value="Public Ltd">Public Ltd</option>
			      			  <option value="Proprietorship">Proprietorship</option>
                        </select>
                        <label class="mdb-main-label BTxt9">Constitution <span class="MndtryAstr">*</span></label>
                   </div>
               </div>
           </div> 
           <div class="form-row">
                <div class="col ">
                 <input type="button" style="display:none" class="DashTrg" onclick="FncallFEPDashLrgDataWP(this,'Table2',{spname:'LSW_SGetApplDetls',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'',MnuId:''},{0:$('#LBSI_PRIMLONID'),2:$('#OLDPRCSID')});" id="BTNTRIGAPPL" name="BTNTRIGAPPL" />
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                    </table>
                </div> 
            </div> 
        </form>
      </div>
    </div>
   </div>
      <div class="modal-footer align-middle">
      <!--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
        <button type="button" id="InitWF" class="btn btn-yel Btxt2">Done</button>
      </div>
    </div>
  </div>
</div>

  <button type="button" style="display:none" id="InitWF1" class="btn btn-yel Btxt2">Done</button>


 <script>
 
 
        $(function() {
        	
		 //  var opjson = UI_IntrData($("#CpmCd").val(),"","","","","LSW_sGETLiabilities","INTR1");   		   
		   
            // Get the context of the canvas element we want to select
            // var ctx = document.getElementById("sales").getContext('2d');
            // var myLineChart = new Chart(ctx).Line(data, option); //'Line' defines type of the chart.
           // var ctxL = document.getElementById("Liabilities").getContext('2d');
			//var json = $(opjson).find("Result").text();
			//var tmpData = JSON.parse(json);
            /*var myLineChart = new Chart(ctxL, {
                type: 'line',
                data: {
                    labels: ["1", "2", "3", "4", "5", "6", "7","8","9","10","11","12","13","14","15"],
                    datasets: [
                        {
                            label: "My Liabilities",
                            fillColor: "#fff",
                            strokeColor: "#fff",
                            pointColor: "#fff",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "#fff",
                            data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,8],
                            backgroundColor: [
                                'rgba(105, 0, 132, .2)',
                              ],
                              borderColor: [
                                  'rgba(200, 99, 132, .7)',
                                ],
                                borderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true
                  }
            });*/
			/*var myLineChart = new Chart(ctxL, {
                type: 'line',
                data: JSON.parse(json),
                options: {
                    responsive: true
                  }
            });*/
        });
    </script>
   
    <link href="ThemeproLO/Common/FEP/Calendar/css/monthly.css${DMY13}" rel="stylesheet">
<script type="text/javascript" src="ThemeproLO/Common/FEP/Calendar/js/monthly.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/DashBoard/Script/MyApplication/ManagePDDFlow/Script/LoadSubmit/LoadSubmit.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/DashBoard/Script/MyApplication/ManagePDDFlow/Script/Validation/Validation.js${DMY13}"></script> 
  
    <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 

 <script>
 $(document).ready(function () {


  /*var OPJSON= UI_IntrData($("#CpmCd").val(),'','','','','SCF_SFEPMyLiabilitiesCalendr',"INTR1")
    var Month=$(OPJSON).find('Result').text();

	var sampleEvents =  JSON.parse(Month)
	
	

	//$(window).load( function() {
		$('#mycalendar').monthly({
			mode: 'event',
			dataType: 'json',
			events: sampleEvents
		});*/
	//});
 
   
});
    </script>
