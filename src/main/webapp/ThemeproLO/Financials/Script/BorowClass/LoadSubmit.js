$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));
	var result=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKVIABILITYTAB");
	var chk=$(result).find("RESULT").text();
	 
	if(chk=='Y')	
	{
		$("#FormPageTab9").remove()
	}
	
	if($("#VERTICAL").val()!="UCV")
	{
	   var StrCAMData=UI_getdata($("#PrcsID").val(),"","",$("#VERTICAL").val(),"First","LSW_SSTRCAMMAINTABLE");
	}
	
    $("#BOCL_PRCSID").attr("value", $("#PrcsID").val());
	  GetBorowClass();
      GetSector();
    FormDataFromDB("LSW_TBOROWCLASS", "BOCL_", "BOCLDBfields", "");
    //LoadMultiData("",$("#PrcsID").val(),"","BankDetail1","APDGDBfields","LSW_SGETPDUPLDDATA");
    /**Grid Trigger Start **/
    //$("#BTNBUSNSDTL").click();
    // $("#BTNEMPOWERMNT").click();
	CheckAmt();
	Chkrating();
    /**Grid Trigger End **/
		/* if($("#VERTICAL").val()=="MSME Alliance" || $("#VERTICAL").val()=="MSME")
		{			
			$(".RATING").show();
			$(".PSL").hide();
			//$(".RAT").show();
			
			$("#BOCL_PSLCLASS").removeClass('BOCLMndtry');
			$("#BOCL_PSLCLASS").next().find(".MndtryAstr").html("");
			
			$("#BOCL_RATINGDTLS").addClass('BOCLMndtry');
			$("#BOCL_RATINGDTLS").next().find(".MndtryAstr").html("*");
			
		}
		else
		{
			$(".RATING").hide();
			$(".PSL").show();
		   // $(".RAT").hide();
			$("#BOCL_PSLCLASS").addClass('BOCLMndtry');
			$("#BOCL_PSLCLASS").next().find(".MndtryAstr").html("*");
			
			$("#BOCL_RATINGDTLS").removeClass('BOCLMndtry');
			$("#BOCL_RATINGDTLS").next().find(".MndtryAstr").html("");
			
		} */

	
    
 Chkrating();
    
    
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
//$(".ELIGHSCHEME").html('');
	//	 LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME"); 
	//EnableFnlElgFld();		

        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
    });


});