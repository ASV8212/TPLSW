

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

    var LeadID=$(this).closest('.tbody tr').find('.LEADID').val();
	 var REFID = UI_getdata(LeadID,"","","","","LSW_SGETLEADDETAILS");
			 var ref=$(REFID).find("RESULT").text();
			 if(ref!='SUCCESS')
			 {
				 alert (ref);
				 return false;
			 }
			 else
			 {
				 alert (ref);
				 UI_getdata($("#PrcsID").val(),"LEAD","","","LEAD","LSW_SSMSEMAILLINKSND");
			 }
	
	
    var LeadID=$(this).closest('.tbody tr').find('.LEADID').val();
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

$(document).on("click", ".pagination li", function(e) {
//$(".pagination li").click(function()	{
		$("#Table2_wrapper").find(".Gridmdb-select").material_select("destroy");
		$("#Table2_wrapper").find(".Gridmdb-select").material_select();
	});
	$(document).on("click", ".sorting", function(e) {
//$(".pagination li").click(function()	{
		$("#Table2_wrapper").find(".Gridmdb-select").material_select("destroy");
		$("#Table2_wrapper").find(".Gridmdb-select").material_select();
	});
	$(document).on("click", ".sorting_asc", function(e) {
//$(".pagination li").click(function()	{
		$("#Table2_wrapper").find(".Gridmdb-select").material_select("destroy");
		$("#Table2_wrapper").find(".Gridmdb-select").material_select();
	});
	$(document).on("click", ".sorting_desc", function(e) {
//$(".pagination li").click(function()	{
		$("#Table2_wrapper").find(".Gridmdb-select").material_select("destroy");
		$("#Table2_wrapper").find(".Gridmdb-select").material_select();
	});
	
	$(document).on("keypress", "#SearchTable2", function(e) {
//$(".pagination li").click(function()	{
		$("#Table2_wrapper").find(".Gridmdb-select").material_select("destroy");
		$("#Table2_wrapper").find(".Gridmdb-select").material_select();
	});
	$(document).on("click", "#LEADDone", function(e) {
		if($("#MNGD_DESC").val() == ""){
			alert("Comment is Mandatory")
			return;
		}
		if($("#LEADID").val() == "")
		{
			alert("Mandatory Field are missing, Contact IT")
			return;
		}
		UI_getdata($("#MNGD_DESC").val(),$("#LogUsr").val(),$("#LEADID").val(),"","","LSW_SSCORELEADREMARK");
		$(".ResolutionClose").click();
	});
	
	$(document).on("click", ".RejLink", function(e) {
		
		if(confirm('Are you sure to Reject the Lead') == true)
		{
			UI_getdata("",$("#LogUsr").val(),$($(this).closest("tr").find("td")[0]).find('input').val(),"","","LSW_SLEADREJECT");
			$("#BTNRCUGRD").click();
		}
	});
	
	
});

