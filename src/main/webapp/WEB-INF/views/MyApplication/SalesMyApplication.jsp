
    <!--Main layout-->
    <main class="">
        <div class="container-fluid ">

            <!--Section: Main Chart-->
            <section class="section DashPrp1">

</br>
 <div class="row ">

<div class="col-md-6">

<div class="Btxt19  ApplTitle">
 ${FORMHEADING}
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
	<div class="col-lg-12">
		
		  <ul class="nav FormPageTab FormMainTab1">      
      ${PAGETABDATA}
   	</ul>
	</div>
</div>


</br>
     <div class="row DashPrp4row">   
     <div class="col-md-12">  
  <div class="card card-cascade narrower">
  
 <br>
   <div class="form-row ViewOnly" style="display:none">
    
               <div class="col-md-3" style="display:none">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="FromDate" name="FromDate" disabled maxlength="10" class="form-control form-control CEMIDBfields IsNumberFields NoSpecialChar ISDatefield ">
                    <label for="FromDate" class="">From<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" style="display:none" class="FieldIcon datepicker"/>
                  </div>
                </div>
                <div class="col-md-3" style="display:none">
                  <!-- First name -->
                  <div class="md-form">
                    <input type="text" id="ToDate" name="ToDate" disabled maxlength="10" class="form-control form-control CEMIDBfields IsNumberFields NoSpecialChar ISDatefield ">
                    <label for="ToDate" class="">To<span class="MndtryAstr">*</span></label>
                    <img src="ThemeproLO/Common/Images/calendar.png" style="display:none" class="FieldIcon datepicker"/>
                  </div>
                </div>
				<div class="col-md-3">
                  <!-- Last name -->
                  <div class="md-form">
                    <input type="text" id="ApplNo" name="ApplNo"  class="form-control   NoSpecialChar">
                    <label for="ApplNo" class="">Application No<span class="MndtryAstr">*</span></label>
                  </div>
				  	
                </div>
				<div class="col-md-3">
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
         <div class="col-md-2 ">
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
  <input type="button" style="display:none" class="DashTrg" onclick="FncallFEPDashLrgDataWP(this,'Table3',{spname:'LSW_SMYAPPLICATIONDTLS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,7');" id="BTNAcctRecv" name="BTNAcctRecv" />

    <table cellpadding="0" cellspacing="0" border="0" style="width: 80%;zoom: 80%" class="display" id="Table3">
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
 
 <div class="fixed-action-btn FileInitiation" id="draggable" style="bottom: 45px; right: 24px;display:none">
        <a type="button" id="LCR" class="btn-floating btn-large red">
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
	        <input type="text" id="LBSI_BRID" hidden="hidden"  name="LBSI_BRID" class=" LBSIDBfields ">
			<input type="text" id="LBSI_SOURCEID" hidden="hidden"  name="LBSI_SOURCEID" class=" LBSIDBfields ">
			<input type="text" id="LBSI_PRDID" hidden="hidden"  name="LBSI_PRDID" class=" LBSIDBfields ">
 		    <input type="text" id="LBSI_PRDNAME"  hidden="hidden"  name="LBSI_PRDNAME" class=" LBSIDBfields ">
 
           <div class="form-row">
           
            <div class="col">
                 
            <div class="md-form  MNST">
               <div class="select-radio INDIMNDRY LBSIMndtry "> 
                    <div class="custom-control custom-radio custom-control-inline">
                         <input  type="radio"  class="custom-control-input  LBSIDBfields"  onclick="CheckCusType();" value="Individual" id="Indvdl" name="LBSI_CUSTYPE">
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
                  <!--<select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields LBSIMndtry" disabled id="LBSI_VERTICAL" name="LBSI_VERTICAL"> <!-- onchange="ChangeProduct();" 
                        <option value="" selected>--Select--</option>
                         <option value="HE01">Home Equity</option>
                  </select>-->
				    <input type="text" id="LBSI_VERTICAL" disabled maxlength="30" name="LBSI_VERTICAL" class="form-control LBSIDBfields  ">
                    
                        <label class="mdb-main-label BTxt9">Vertical <span class="MndtryAstr">*</span></label>
                </div>
                </div>
           </div>
           <div class="form-row">
                <div class="col">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields LBSIMndtry DataToFld" onchange="" searchable="Search here.." data-change="LBSI_BRID"  id="LBSI_BRANCH" name="LBSI_BRANCH">
                         <option value="" selected>--Select--</option>
                              <!--<option value="Perangudi">Perangudi</option>
                              <option value="Anakapalli">Anakapalli</option> -->
                        </select>
                        <label  class="mdb-main-label BTxt9">Branch <span class="MndtryAstr">*</span></label>
	
                </div>
                </div> 
                <div class="col">
                <div class="md-form">
                        <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields  LBSIMndtry" onchange="GetNaturProduct(); GetSubLoan();" id="LBSI_LONTYPE" name="LBSI_LONTYPE">
                        </select>
                        <label class="mdb-main-label BTxt9">Type Of Loan <span class="MndtryAstr">*</span></label>
						<!--onchange="GETDROPDOWNVAL('Page')"-->
                </div>  
                </div>
           </div>
           <div class="form-row">
		     <div class="col-md-6">
                  <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary  LBSIDBfields LBSIMndtry DataToFld" data-change="LBSI_PRDNAME"  onchange="CheckSource();GetPrdagaScheme();"  id="LBSI_PRODUCT" name="LBSI_PRODUCT">
                        <option value="" selected>--Select--</option>
                        </select>
                  <label class="mdb-main-label BTxt9">Product <span class="MndtryAstr">*</span></label>
                </div>
            </div><!--SUBLON-----PROIIDROP-->
            <div class="col-md-6 ">
                 <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary  LBSIDBfields  " id="LBSI_SUBLONTYPE" name="LBSI_SUBLONTYPE">
                        <option value="" selected>--Select--</option>
						<!--<option value="">Fresh</option>
						<option value="">Renewal at Existing</option>
						<option value="">Renewal with enhancement</option>
						<option value="">Renewal with limit Decrease</option>
						<option value="">Adhoc</option>
						<option value="">Balance Transfer</option>
						<option value="">Enhancement</option>-->
						
						
                        </select>
                        <label class="mdb-main-label BTxt9">Sub Loan Type <span class="MndtryAstr">*</span></label> 
                  </div>
               </div>
              <!-- <div class="col-md-6 PRIME" style="display:none">
                   <div class="md-form">
                         <input type="text" id="LBSI_PRIMLONID" maxlength="18" class="form-control NoSpecialChar LBSIDBfields" onblur="ChkPrimLoanID();GetOldPrcsid();" name="LBSI_PRIMLONID">
                         <input type="text" id="OLDPRCSID" class="form-control LBSIDBfields" hidden="hidden" name="OLDPRCSID">
                         <label for="LBSI_PRIMLONID" class="">Primary Loan ID/Application ID<span class="MndtryAstr">*</span></label>
                         <img src="ThemeproLO/Common/Images/search.png" style="display:none" onclick="GetExistApplcant();" class="FieldIcon"/>
                    </div>
               </div>-->
           </div>
          <div class="form-row">
		  <div class="col-md-6">
                  <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary PROIIDROP LBSIDBfields LBSIMndtry "    onchange="CheckSource();"  id="LBSI_SOURCBY" name="LBSI_SOURCBY">
					   
                        <option value="" selected>--Select--</option>
                        <option value="Connector">Connector</option>
                        <option value="DST">DST</option>
                        <option value="DSA">DSA</option>
                        <option value="Direct">Direct</option>
                        </select>
                  <label class="mdb-main-label BTxt9">Sourced By <span class="MndtryAstr">*</span></label>
                </div>
            </div>
			    <div class="col-md-6 DIRDISB">
                  <div class="md-form">
                  <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields LBSIMndtry DataToFld" searchable="Search here.." data-change="LBSI_SOURCEID"   id="LBSI_CONECTNAME" name="LBSI_CONECTNAME">
                   <option value="" selected>--Select--</option>
                        </select>
                     <label for="" class="mdb-main-label BTxt9">Source Name <span class="MndtryAstr">*</span></label>
                   
                   <!--<div class="collapse" id="SourceNameCollapse">
                        <input type="text" id="LBSI_SOURCNAME" class="form-control LBSIDBfields ">
                        <label for="LBSI_SOURCNAME" class="">Source Name *</label>
                    </div>-->
                 </div>
             </div>
           </div> 
		   <div class="form-row">
		       <div class="col-md-6 CONS">
                  <div class="md-form">
                     <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields " id="LBSI_CONSTITUTION" name="LBSI_CONSTITUTION">
                        <option value="" selected>--Select--</option>
                        </select>
                        <label class="mdb-main-label BTxt9">Constitution <span class="MndtryAstr">*</span></label>
                   </div>
               </div>
			   
			    <div class="col-md-6 " style="display:none">
                 <div class="md-form">
                       <select class="mdb-select md-form colorful-select dropdown-primary LBSIDBfields" onchange="" id="LBSI_SCHEMEID" name="LBSI_SCHEMEID">
                            <option value="" selected>--Select--</option>
					     	<option value="">Fresh</option>
                        </select>
                        <label class="mdb-main-label BTxt9">Scheme ID<span class="MndtryAstr">*</span></label> 
                  </div>
               </div>
			 </div>
        </form>
      </div>
    </div>
      </div>
      <div class="modal-footer align-middle">
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
 <script type="text/javascript" src="ThemeproLO/DashBoard/Script/MyApplication/LoadSubmit/LoadSubmit.js${DMY13}"></script>
  <script type="text/javascript" src="ThemeproLO/DashBoard/Script/MyApplication/Validation/Validation.js${DMY13}"></script> 
  
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
