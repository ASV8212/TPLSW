 <!--Main layout-->
    <main class="">
       
	   
	   <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right BlueGreen" id="sidebar-wrapper" >
     <!-- <div class="sidebar-heading">Start Bootstrap </div>-->
      <div class="list-group list-group-flush">
      <ul id="slide-out" class="side-nav fixed custom-scrollbar BlueGreen" style="width: 240px; transform: translateX(0px);">
         
		 	<input id="MnuId" class="inputTXT" name="MnuId" type="hidden" value=""/>
				<input id="PrcsID" class="inputTXT" name="PrcsID" type="hidden" value=""/>
					<input id="ActivityID" class="inputTXT" name="ActivityID" type="hidden" value=""/>
		 
<li>
                <div class="user-box">
                    <!--<img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="img-fluid rounded-circle d-block mx-auto">-->
                    <p class="user text-center white-text" style="font-size: 21px;">My Action Items</p>
                </div>
            </li>
		 
		   <li>
                <ul class="collapsible collapsible-accordion Blue" style="margin-left:0.9rem" >
                    
                   
					<li class="30a"><a href="#" class="collapsible-header waves-effect arrow-r WhiteTxt"><i class="fa fa-code WhiteTxt"></i> Purchase Orders<i class="fa fa-angle-down rotate-icon WhiteTxt"></i></a>
                        <div class="collapsible-body">
                            <ul class="ULLeftMrg">
                                <li name="30a" id="BTNInbox" class="LiNav CNT 30a" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_sPOMyAccptDtlMKR',Mode:'',Param:$('#LogUsr').val(),brid:$('#CpmCd').val(),MnuId:'MP'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5,8,9,10,11');ChngnavHrd('Approve','Accept')"><a href="#"  value="As Buyer" class="waves-effect WhiteTxt">As Buyer<span  class="30a badge badge-danger ml-2">0</span></a>
                                </li>
                                <li  name="30c" class="LiNav CNT 30c" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_sPOMyAccptDtl',Mode:'',Param:$('#LogUsr').val(),brid:$('#CpmCd').val(),MnuId:'MP'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5,6,9,10,11,12');ChngnavHrd('Approve','Accept')"><a href="#" value="From Buyer" class="waves-effect WhiteTxt">From Buyer<span  class="30c badge badge-danger ml-2">0</span></a>
                                </li>
                            </ul>
                        </div>
                    </li>
					<li class="30b"><a class="collapsible-header waves-effect arrow-r WhiteTxt"><i class="fa fa-code WhiteTxt"></i> Invoices<i class="fa fa-angle-down rotate-icon WhiteTxt"></i></a>
                        <div class="collapsible-body">
                            <ul class="ULLeftMrg">
                                <li name="30b" class="LiNav CNT 30b" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_sREGMyAccptDtlMKR',Mode:'',Param:$('#LogUsr').val(),brid:$('#CpmCd').val(),MnuId:'MP'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5,8,9,10,11');ChngnavHrd('Approve','Accept')"><a href="#" value="As Seller" class="waves-effect WhiteTxt">As Seller<span  class="30b badge badge-danger ml-2">0</span></a>
                                </li>
                                <li name="30d" class="LiNav CNT 30d" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_sREGMyAccptDtl',Mode:'',Param:$('#LogUsr').val(),brid:$('#CpmCd').val(),MnuId:'MP'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5,8,9,10,11');ChngnavHrd('Approve','Accept')"><a href="#" value="From Seller" class="waves-effect WhiteTxt">From Seller<span  class="30d badge badge-danger ml-2">0</span></a>
                                </li>
                            </ul>
                        </div>
                    </li>
					<!-- <li class="MainLiNav"><a href="#" class="collapsible-header waves-effect arrow-r WhiteTxt"><i class="fa fa-pie-chart"></i> Sales Orders</a>
                    </li>-->
					 <li name="30g" class="MainLiNav CNT 30g" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_sREGMyAccptINVPAYDtlMKR',Mode:'',Param:$('#LogUsr').val(),brid:$('#CpmCd').val(),MnuId:'MP'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5,8,9,10,11');ChngnavHrd('Approve','Accept')"><a href="#" value="Invoice Payables" class="collapsible-header waves-effect arrow-r WhiteTxt"><i class="fa fa-pie-chart WhiteTxt"></i> Invoice Payables<span  class="30g badge badge-danger ml-2">0</span></a>
                    </li>
					 <li name="30e" class="MainLiNav CNT 30e" onclick="FncallFEPQueueLrgData(this,'Table1',{spname:'SCF_sFinclReqDTL',Mode:'',Param:$('#LogUsr').val(),brid:$('#CpmCd').val(),MnuId:'MP'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7,8,9,10,11');ChngnavHrd('Finance','Finance')"><a href="#" value="Finance Requested" class="collapsible-header waves-effect arrow-r WhiteTxt"><i class="fa fa-pie-chart WhiteTxt"></i> Finance Requested<span  class="30e badge badge-danger ml-2">0</span></a>
                    </li>
                    
                    
                    </ul>
            </li>
            
        </ul>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">

	
	

  <!-- <div class="container-fluid">	-->
     <nav class="navbar navbar-light white mb-4" style="margin-bottom: 0rem!important;padding: .1rem .2rem;">

	 <div id="menu-toggle"><a id="INBXHDR" class="navbar-brand" href="#" >My Action Items</a></div>

<div class="btn-sm navbar-toggler toggler-example">
<button type="button" value="View" class="btn btn-primary btn-sm BtnPrcs DarkBlue">View</button>
<button type="button" value="Accept" id="BtnChng" class="btn btn-primary btn-sm BtnPrcs DarkBlue">Approve</button>
<button type="button" value="Reject" class="btn btn-primary btn-sm BtnPrcs DarkBlue">Reject</button>
</div>

  </nav>

  <div class="table-responsive">
<table cellpadding="0" cellspacing="0" border="0"  class="display" width="100%" id="Table1">
    </table>
 </div>
	 
	<!--   </div> -->
    <!-- /#page-content-wrapper -->

  </div>
	   
    </main>
    <!--/Main layout-->







 <!-- SCRIPTS -->

    <!-- JQuery -->

 

 <script>
     
        // Material Select Initialization
        $(document).ready(function() {
          //  $('#SideNavclick').click();
		 // $("#slide-out").css("width","200px");
		  
		  	
InbxRghts()
	
		  
		  
		  $(".LiNav").click(function(){
   
    $(".LiNav").removeClass("active");
	$(this).addClass("active");
	
	$("#INBXHDR").text($($(this).parent().parent().parent().parent().find(".active").find('a')[0]).text() + ' - ' + $(this).find("a").attr("value"));
	   
   
});
	
		  $(".MainLiNav").click(function(){
   
    $(".LiNav").removeClass("active");
	//$(this).addClass("active");
	$("#INBXHDR").text($($(this).find('a')[0]).attr("value"));
	   
   
});
		
		  
		  
		  
		  
        });
 </script> 
 
 <script type="text/javascript">
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  </script>
 
   <link href="ThemeproLO/Common/FEP/css/sidebar.css${DMY13}" rel="stylesheet">
 

 
   <script type="text/javascript" src="ThemeproLO/UCV/nbox/Script/Inbox/LoadSubmit/LoadSubmit.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/UCV/Inbox/Script/Inbox/Validation/Validation.js${DMY13}"></script>

  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> 


	  
   
   