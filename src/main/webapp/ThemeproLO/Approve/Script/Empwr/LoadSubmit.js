$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));

	//FormDataFromDB("LSW_TFINCLSUMMRY", "APFS_", "APFSDBfields", "");
	$('#BTNEMPOWERMNT').click();
    
      $('#BTNMANUEMPOWERMNT').click();
	  
	  	var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKINSFIRMDT")
    /**Grid Trigger Start **/
    //$("#BTNBUSNSDTL").click();
    // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/
 RECOMMENDHIDE()

    $(document).on("click", ".FormSave", function() {

        // Tab Header Change End


         if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
    });


});