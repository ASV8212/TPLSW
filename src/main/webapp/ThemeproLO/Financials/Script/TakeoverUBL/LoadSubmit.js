$(document).ready(function() {

	$("#OUBL_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#OUBL_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
    
    $("#OUBL_PRCSID").attr("value", $("#PrcsID").val());
	  //GetBorowClass();
      //GetSector();
	  //HandlePropDtl();
	
	GetBusiness();
	Profit();
    FormDataFromDB("LSW_TTAKEOVERUBL", "OUBL_", "OUBLDBfields", "OUBL_SCHEMEID");
    $("#OUBL_PRCSID").val($("#PrcsID").val())

	$("#OUBL_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#OUBL_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
	Checkinst();
    
 
    
    
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
		
       var OP=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")

        if($(OP).find("LOANID").text()!="")
		{			
		  $("#RCCM_LOANUNIQID").val($(OP).find("LOANID").text());
		}

		var CHKresult=FormDataToDB(tbl, prfx, $("#OUBL_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		if(CHKresult == "Fail")
	   		{
	   		  alert("Submission Failed");
	   		   return false;			
	   		}
			else{
				alert("Form saved Successfullly");
			}
			
			$(".ELIGHSCHEME").html('');
   LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME"); 
	EnableFnlElgFld();


        // Tab Header Change End


        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
    });


});