$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));

    $("#BOCL_PRCSID").attr("value", $("#PrcsID").val());
	  GetBorowClass();
      GetSector();
    FormDataFromDB("LSW_TBOROWCLASS", "BOCL_", "BOCLDBfields", "");
    //LoadMultiData("",$("#PrcsID").val(),"","BankDetail1","APDGDBfields","LSW_SGETPDUPLDDATA");
    /**Grid Trigger Start **/
    //$("#BTNBUSNSDTL").click();
    // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/


	
      if($("#VERTICAL").val()!="UCV Eco")
	{
	   var StrCAMData=UI_getdata($("#PrcsID").val(),"","",$("#VERTICAL").val(),"First","LSW_SSTRCAMMAINTABLE");
	}
 
    
    
    $(document).on("click", ".FormSave", function() {

       // var html = $('.BankDetail1')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];

        if ($(this).text() == "Save & Next") {
            var MndtryChk = ChkMandatoryFlds(prfx + "Mndtry");
            if (MndtryChk == "Mandatory") 
            {
                alert("Fill the Mandatory Fields / Document(s)");
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
 
      //  var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);
UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")

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