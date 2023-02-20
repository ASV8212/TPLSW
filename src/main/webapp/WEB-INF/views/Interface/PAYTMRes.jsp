<html>
   <head>
   <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/jquery-ui.css${DMY13}">
 <!-- <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/prettify.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/ui.jqgrid.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/NewGrid.css${DMY13}"> --> 

 <link href="ThemeproLO/Common/CSS/dataTables.jqueryui.css${DMY13}" rel="stylesheet" type="text/css" />  


<!--  <link href="ThemeproLO/Common/CSS/responsive.dataTables.min.css${DMY13}" rel="stylesheet" type="text/css" />--> 

  <!-- Font Awesome -->
   <link rel="stylesheet" href="ThemeproLO/Common/FEP/css/font-awesome.min.css${DMY13}">
   <link href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="ThemeproLO/Common/FEP/css/bootstrap.min.css${DMY13}" rel="stylesheet">

    <!-- Material Design Bootstrap -->
    <link href="ThemeproLO/Common/FEP/css/mdb.min.css${DMY13}" rel="stylesheet">

    <!-- Customizer -->
    <link rel="stylesheet" href="ThemeproLO/Common/FEP/css/customizer.min.css${DMY13}">
	

    <!-- Your custom styles (optional) -->
    <link href="ThemeproLO/Common/FEP/css/style.css${DMY13}" rel="stylesheet">
    <link href="ThemeproLO/Common/FEP/css/Dashboard.css${DMY13}" rel="stylesheet">
	
 <!--<link href="ThemeproLO/Common/FEP/css/Grid/datatables.min.css${DMY13}" rel="stylesheet">
	<link href="ThemeproLO/Common/FEP/css/Grid/datatables-select.min.css${DMY13}" rel="stylesheet">-->
	
 <!-- SCRIPTS -->
    <!-- JQuery -->
   <script type="text/javascript" src="ThemeproLO/Common/FEP/js/jquery-3.1.1.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/UI/jquery-ui.js${DMY13}" ></script>
<!-- <script type="text/javascript" src="ThemeproLO/Common/popup/js/script.js${DMY13}"></script>-->
<!--<script type="text/javascript" src="ThemeproLO/Common/scripts/UI/jquery.dataTables.min_BAK.js${DMY13}"></script>-->
<!-- <script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/dataTables.responsive.min.js${DMY13}"></script> -->

 <script src="ThemeproLO/Common/scripts/Commonfiles/jquery.formgrid.js${DMY13}" type="text/javascript"></script> 
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng_V1.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Forms/Script/Tabs.js${DMY13}"></script>
    
	      <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui.js${DMY13}" ></script>        		
		  <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui_ext.js${DMY13}" ></script>
		  <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}" ></script>	
      <title>Transaction Summary</title>
   </head>
   <body>
      <center>
         <!-- <h1>Please do not refresh this page...</h1> -->
      </center>
      <form method="post" action="" name="paytm">
               <div  class="card CardNS">
      <div class="card-body px-lg-5 pt-0">
    <!-- Card body -->   
    </br>   
           <div class="form-row">
        		<div class="col Btxt3">Transaction Summary</div>
           </div>           
           <div class="form-row">
        		<img src="ThemeproLO/Common/Images/FEP/success-trans.png" style="height:150px;width:150px;display:none" class="Success">
        		<img src="ThemeproLO/Common/Images/FEP/fail-trans.png" style="height:150px;width:150px;display:none" class="Fail">
           </div>
           <div class="form-row">
              <div class="col-md-4">
               <div class="md-form">
                 <input type="text" id="Status" name="Status" value="${Status}" disabled class="Btxt14 DSVLBL form-control">
                  <label for="STATUS"  class="Btxt9 active">Transaction Status</label>
              </div>
            </div> 
           <div class="col-md-4" style="display:none">
             <div class="md-form">
               <input type="text" id="Message" name="Message" value="${Message}" disabled class="Btxt14 DSVLBL IsAlphaFields form-control">
                <label for="MESSAGE"  class="Btxt9 active">Message</label>
             </div>
           </div> 
          </div>
           <div class="form-row">
              <div class="col-md-4" style="display:none">
               <div class="md-form">
                 <input type="text" class="Btxt14 IsAlphaFields DSVLBL form-control" value="${GATEWAYNAME}" disabled id="GATEWAYNAME" name="GATEWAYNAME" >
                  <label for="GATEWAYNAME" class="Btxt9 active">Gate Way Name</label>
              </div>
            </div> 
           <div class="col-md-4">
             <div class="md-form">
               <input type="text" class="Btxt14 IsAlphaFields DSVLBL form-control" value="${BANKNAME}"  disabled  id="BANKNAME" name="BANKNAME">
                <label for="BANKNAME" class="Btxt9 active">Bank Name</label>
             </div>
           </div> 
       <div class="col-md-4">
            <div class="md-form">
             <input type="text" id="TXNID" disabled name="TXNID" value="${TXNID}"  class="Btxt14 DSVLBL IsNumberFields NoSpecialChar form-control">
             <label for="TXNID"  class="Btxt9 active">Transaction ID</label>
            </div>
          </div> 
       </div> 
       <div class="form-row">
              <div class="col-md-4">
               <div class="md-form">
                 <input type="text" id="BANKTXNID" disabled value="${BANKTXNID}" name="BANKTXNID" class="Btxt14 DSVLBL IsNumberFields NoSpecialChar form-control">
                  <label for="BANKTXNID"  class="Btxt9 active">Bank Transaction No.</label>
              </div>
          </div> 
          <div class="col-md-4">
             <div class="md-form">
               <input type="text" id="TXNAMOUNT" disabled name="TXNAMOUNT" value="${TXNAMOUNT}" class="Btxt14 DSVLBL NoSpecialChar IsCURCommaFields form-control">
                <label for="TXNAMOUNT"  class="Btxt9 active">Transaction Amount</label>
             </div>
           </div> 
           <div class="col-md-4">
            <div class="md-form">
             <input type="text" id="TXNDATE" name="TXNDATE"  value="${TXNDATE}" disabled class="Btxt14 DSVLBL IsNumberFields NoSpecialChar form-control">
             <label for="TXNDATE" class="Btxt9 active">Transaction Date</label>
            </div>
          </div> 
     </div>     
     <div class="form-row">
              <div class="col d-flex justify-content-center">
               <div class="md-form">
                <button type="button" data-card="0" class="btn btn-Syel waves-effect waves-light TXNClose">Continue...</button> 
              </div>
            </div> 
           
     </div>
    </div>  
  </div>
</form>
   </body>
   
    <script>
$(document).ready(function() {
    	
    	if ($("#Status").val() == "Success")
    		{
    		$(".Success").show()
    		}
    	else
    		{
    		$(".Fail").show()
    		}

    	$('.TXNClose').on('click', function() {
    	
    	window.close();
    		
    	 });
		 
	window.onbeforeunload = function() {
    
			if($("#Status").val() == "Success")
			{
				
				if ($("#PayType", window.opener.document).length > 0)
				{
				
				if ($("#PayType", window.opener.document).val() == "AF" )						
				{
					
				$("#APCM_ADDNO", window.opener.document).val($("#BANKTXNID").val());
				$("#APCM_ADDDT", window.opener.document).val($("#TXNDATE").val());
				$("#APCM_STATUS", window.opener.document).val("Payment Success");	

						$(".Collected", window.opener.document).trigger("click");	
				}
				else if ($("#PayType", window.opener.document).val() == "CERSAI" )						
				{
					
				$("#APCM_CERSAIADDNO", window.opener.document).val($("#BANKTXNID").val());
				$("#APCM_CERSAIADDDT", window.opener.document).val($("#TXNDATE").val());
				$("#APCM_CERSAISTATUS", window.opener.document).val("Payment Success");	

					$(".Collected1", window.opener.document).trigger("click");	
				}
				else if ($("#PayType", window.opener.document).val() == "PF" )						
				{
					
				$("#APCM_PFADDNO", window.opener.document).val($("#BANKTXNID").val());
				$("#APCM_PFADDDT", window.opener.document).val($("#TXNDATE").val());
				$("#APCM_PFSTATUS", window.opener.document).val("Payment Success");	

					$(".Collected2", window.opener.document).trigger("click");	
				}
				else if ($("#PayType", window.opener.document).val() == "BT" )						
				{
					
				$("#APCM_BTDDNO", window.opener.document).val($("#BANKTXNID").val());
				$("#APCM_BTDDDT", window.opener.document).val($("#TXNDATE").val());
				$("#APCM_BTSTATUS", window.opener.document).val("Payment Success");	

					
				}
				
				}
				else
				{
					
					//window.opener.documentCollected
				$("#PFDT_TRANSREFNO", window.opener.document).val($("#BANKTXNID").val());
				$("#PFDT_TRANSREFDATE", window.opener.document).val($("#TXNDATE").val());
				$("#PFDT_TRANSSTATUS", window.opener.document).val($("#Status").val());	
				$("#PFDT_PFCOLLECT", window.opener.document).val("Collected");	 // Added for P2 DElivery on ONline Payment 16042020
				
				$(".Collected", window.opener.document).trigger("click");		
				
					
					
				}
			} 
} 
    });
    </script>
   
</html>