$(document).ready(function() {

	$("#OUBL_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#OUBL_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
    
    $("#OUBL_PRCSID").attr("value", $("#PrcsID").val());
	  //GetBorowClass();
      //GetSector();
	  //HandlePropDtl();
	Checkinst();
	GetBusiness();
	Profit();
    FormDataFromDB("LSW_TTAKEOVERUBL", "OUBL_", "OUBLDBfields", "OUBL_SCHEMEID");
    $("#OUBL_PRCSID").val($("#PrcsID").val())

	$("#OUBL_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#OUBL_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
    
 
    
    
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