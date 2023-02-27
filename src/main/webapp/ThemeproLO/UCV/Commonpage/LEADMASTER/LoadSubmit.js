

$(document).ready(function () {
	
	
	$("#BTNRCUGRD").click();
	
	oTable = $('#Table2').DataTable();
		$('#SearchTable2').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})


		
	
	$(".UPDTEDEP").on('click', function() {
		  $("#UPDATEDEPART").click();  
	 })


	

		
	oTable = $('#Table2').DataTable();
		$('#SearchTable2').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	
		
$(document).on("click", ".InitWF", function() {		
	
	var LeadID=$(this).closest('.tbodytr').find('.LEADID').val();

	var xml = UI_getdata(LeadID,"","","","","LSW_SPUSHLEADDATA")
      xml=xml.replace('<Resultset><a><>','');
	  xml=xml.replace('</></a></Resultset>','');
	//submitdata(Prifix+"DBfields");
	$.ajax({
       
        url: "/TPLSW/WFINIT",
        //dataType: "json",
        data: {XML : xml,Prvnt : $("#Prvnt").val()},
        async: true,	      
        type: "POST",
        success: function(res) {
        		            	
        if(res.split("~")[0] == "Workflow Initiated")
        	{
        	 var ProcessID = res.split("~")[1]
             var ActivityID = res.split("~")[2]
             
    		var output=UI_getdata(ProcessID,ActivityID,xml,'Lead','','LSW_sInsLoanBaseInfo');

        	 if($("#LBSI_LONTYPE").val()=="Registered Mortgage"||$("#LBSI_LONTYPE").val()=="Re-Punch")
        	 { 
        		 var lonType=$("#LBSI_LONTYPE").val()
        		 var OldProcessID=$("#OLDPRCSID").val(); 
        		 var PRIMLONID=$("#LBSI_PRIMLONID").val();
        		  var BranchID=$("#LBSI_BRANCH").val();
        	     var Branchname=$("#LBSI_BRID").val();
        		 var ProcessID = res.split("~")[1]
        	 var output=UI_getdata(OldProcessID,ProcessID,lonType,PRIMLONID,BranchID+'|'+Branchname,'LSW_SGETExistApplicantDet');
        	 }
        	$(location).attr('href',window.location.origin + "/TPLSW/Applcnt?PrcsID="+res.split("~")[1]+"&ActvID="+res.split("~")[2]+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1");         	
        	}
        else
        	{
        	alert("Loan Initiation Failed");
        	}
        },
        error: function(res) {
        	
        	alert("Loan Initiation Failed");
            }
    });
})
		
		
		
$(document).on("click", ".UpdteUser", function(e) {
	
	            var Oldprcsid1=$($(this).closest('tbody tr').find('td')[0]).find('input[type=text]').val()
	        	$(location).attr('href',window.location.origin + "/TPLSW/ManageLead?PrcsID="+Oldprcsid1+"&PrMs3=UPDATE")
				
			})
			
		$(".EXPORT").click(function()
			{
		        $("#USEREXPORT").click();
				var xml=UI_getdata("","","","","","LSW_SGETLSTOFGROP")
	               var Group=$(xml).find('RESULT').html();				   
	            $("#URCR_USRTYPE").append(Group)
				//$("#URCR_USRTYPE").val('')
				$("#URCR_USRTYPE").material_select();
			})		
		
});
