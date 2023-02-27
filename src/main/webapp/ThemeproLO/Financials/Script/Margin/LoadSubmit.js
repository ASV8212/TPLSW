$(document).ready(function() {


   
	$("#MARG_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#MARG_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
    $("#MARG_PRCSID").attr("value", $("#PrcsID").val());
	  
	GetNaturBusness_V1();
	 
	FormDataFromDB("LSW_TMARGINSCREEN", "MARG_", "MARGDBfields", ""); 
    
 		var xml=UI_getdata("","","","","","LSW_SGETNATUR")
	
	$("#MARG_INDUCAT").html("")
	$("#MARG_INDUCAT").append($(xml).find("Industry").html());
	$("#MARG_INDUCAT").material_select();
	$("#MARG_INDUCAT").html("")
	$("#MARG_INDUCAT").append($(xml).find("Industry").html());
	
    
 
    
    
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
		
       UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")
 if($(OP).find("LOANID").text()!="")
		{			
		  $("#RCCM_LOANUNIQID").val($(OP).find("LOANID").text());
		}

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

	$(".ELIGHSCHEME").html('');	
	LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME"); 
	EnableFnlElgFld();

        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
    });


});