$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));

    $("#CRSC_PRCSID").attr("value", $("#PrcsID").val());
	
    FormDataFromDB("LSW_TSCORECARD", "CRSM_", "CRSMDBfields", "");
     $("#BTNRCUGRD").click();	 
 
    
    
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