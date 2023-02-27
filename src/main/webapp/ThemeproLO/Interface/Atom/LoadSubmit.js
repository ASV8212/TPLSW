$(document).ready(function() {
    	
      if($("#Status").val() == "Ok")
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
    
			if($("#Status").val() == "Ok")
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
				
				$(".CollectedPage", window.opener.document).trigger("click");			
				}
			} 
} 
    });