var lnamt=50000;
if($("#DMY7").val().split("|")[8] == "T307" || $("#DMY7").val().split("|")[8] == "T308")
{
	lnamt=60000;
}
$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));

    $("#ECOA_PRCSID").attr("value", $("#PrcsID").val());
	 
    FormDataFromDB("LSW_TECOAUTO", "ECOA_", "ECOADBfields", "");
	$("#ECOA_MAXFUNSCHME").val("500000")
	LIMITELIGIBLE();
    //LoadMultiData("",$("#PrcsID").val(),"","BankDetail1","APDGDBfields","LSW_SGETPDUPLDDATA");
    /**Grid Trigger Start **/
    //$("#BTNBUSNSDTL").click();
    // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/
/* GetLoanamt();
GetLimitEli();
GetMin();
ChkMaxLoad(); */
$("#ECOA_UNIQID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	
    
 
    
    
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
       //          UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")
    
	
	var OP=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")
      if($(OP).find("LOANID").text()!="")
		  {
		  $("#ECOA_LOANID").val($(OP).find("LOANID").text());
		  $("#RCCM_LOANUNIQID").val($(OP).find("LOANID").text());
		  }
		  
		  
		   var CHKresult=FormDataToDB(tbl,prfx,$("#ECOA_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
			if(CHKresult == "Fail")
	   		{
	   		  alert("Submission Failed");
	   		   return false;			
	   		}
			else
			{
				alert("Form saved Successfullly");
			}
		  
		
        // Tab Header Change End


        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
    });


});