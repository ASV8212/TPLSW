$(document).ready(function() {

if($("#VERTICAL").val()=="UCV Eco")
	{
	   var StrCAMData=UI_getdata($("#PrcsID").val(),"","",$("#VERTICAL").val(),"First","LSW_SSTRCAMMAINTABLE");
	}
    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));

    $("#PrcsID").attr("value", $("#PrcsID").val());
	
   // FormDataFromDB("LSW_TSCORECARD", "CRSM_", "CRSMDBfields", "");
     $("#BTNBREGRD").click();	
			if($("#DMY7").val().split("|")[8] == "T316")
			{	 
				$("#BTNBREGRD1").closest(".form-row").show();
				$("#BTNBREGRD1").click();
				$(".T316").show();
			}
 
    if($("#VERTICAL").val() == "UCV Eco")
	{
		if($("#DMY7").val().split("|")[8] != "T305" && $("#DMY7").val().split("|")[8] != "T306")
		{
			$("#FormPageTab10").remove();
		}
		if($($("#Table2").find(".tbodytr")[0]).text() == "No data available in table")
		{
			UI_getdata($("#PrcsID").val(),"","","","","LSW_SAUTOFLOW_BREHANDLER");
			UI_getdata($("#PrcsID").val(),"","","","","LSW_SGENSCORECARD");
			$("#BTNBREGRD").click();	 
			
			if($("#DMY7").val().split("|")[8] == "T316")
			{
				UI_getdata($("#PrcsID").val(),"","","","","LSW_SAUTOFLOW_BREHANDLER_COAPPLN");
				$("#BTNBREGRD1").closest(".form-row").show();
				$("#BTNBREGRD1").click();
				$(".T316").show();
			}
		}
	}
    
    $(document).on("click", ".FormSave", function() {

       // var html = $('.BankDetail1')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];

       var CRSM_SCOREDET = TxtGridsubmitdata_V1("Table2","CRSC_","CRSM_");
				   AssignGridXmltoField("CRSM_SCOREDET", CRSM_SCOREDET)
       

		var CHKresult=FormDataToDB(tbl, prfx, '');
		if(CHKresult == "Fail")
	   		{
	   		  alert("Submission Failed");
	   		   return false;			
	   		}
			else{
				alert("Form saved Successfullly");
			}

        // Tab Header Change End


        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
    });


});