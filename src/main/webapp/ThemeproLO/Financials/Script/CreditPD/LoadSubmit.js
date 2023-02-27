$(document).ready(function() {

$("#CRPD_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#CRPD_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
    
    $("#CRPD_PRCSID").attr("value", $("#PrcsID").val());
	Checkinst();
  
    FormDataFromDB("LSW_TCREDITPD", "CRPD_", "CRPDDBfields", "");

	
	$("#CRPD_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#CRPD_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
	$("#CREDITPD").click();
	GetEmiperlakh()
    
    
    $(document).on("click", ".FormSave", function() {

	   var html=$(this).closest('.DYNROW')


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
		 var CRPD_CREDITPD = TxtGridsubmitdata_V1("TablePD","CPDG_","CRPD_");
		AssignGridXmltoField("CRPD_CREDITPD", CRPD_CREDITPD)
		
        var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
	
		 
		var CHKresult=FormDataToDB(tbl, prfx, $("#CRPD_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
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