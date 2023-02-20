$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));

    $("#APDG_PRCSID").attr("value", $("#PrcsID").val());
	 getPDApprove();
    FormDataFromDB("LSW_TPDDTLS", "APDD_", "APDDDBfields", "");
    LoadMultiData("",$("#PrcsID").val(),"","BankDetail1","APDGDBfields","LSW_SGETPDUPLDDATA");
    /**Grid Trigger Start **/
    //$("#BTNBUSNSDTL").click();
    // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/

 RECOMMENDHIDE()
	
    

    $(document).on("click", ".DELETEDOCUMNETS" , function() {
    	
        if(confirm('Delete Photos') == true)
    	 		{
                 $(this).closest('.DYNROW').remove()	
                }
    	 })

    
    
    $(document).on("click", ".FormSave", function() {

        var html = $('.BankDetail1')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];

        if ($(this).text() == "Save & Next") {
            var MndtryChk = ChkMandatoryFlds(prfx + "Mndtry");
            if (MndtryChk == "Mandatory") 
            {
                alert("Fill the Mandatory Fields");
                return false;
            }
            
            var  MndtryChk1 = ChkMandatoryFlds_V1("APDGMndtry",html);
           
           if (MndtryChk1 == "Mandatory") 
           {
               alert("Upload the Photos");
               return false;
           }
        }
        // Customer Seq ID Gen Start		
        /*if ($(html).find("[name=BKDT_BNKNO]").val() == "") {
            var CUSID = UI_getdata("BNK", "", "Yes", "", "", "Sam_sGetSeqID");
            $(html).find("[name=BKDT_BNKNO]").val($(CUSID).find("Val1").text());
        }*/
        // Customer Seq ID Gen End 

        /*$("#BKDT_BNKREFNAME").val($(".FormPageMultiTab li.active a div").text())*/

        var PDGRDDATA = TxtGridsubmitdata_V2("BankDetail1","APDG_","APDD_","APDGDBfields");
		AssignGridXmltoField("APDD_PDGRDDATA", PDGRDDATA)
        var CHKresult=FormDataToDB(tbl, prfx, '');

		
		 if(CHKresult == "Fail")
	   		{
	   		  alert("Submission Failed");
	   		   return false;			
	   		}

        // Tab Header Change End


        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
    });


});