$(document).ready(function() {

$("#FLOW_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#FLOW_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
    
    $("#FLOW_PRCSID").attr("value", $("#PrcsID").val());
	  //GetBorowClass();
      //GetSector();
	
  Checkinst();
  Getbussiness();
  
    FormDataFromDB("LSW_TCASHFLOWUBL", "FLOW_", "FLOWDBfields", "FLOW_SCHEMEID");
    $("#FLOW_PRCSID").val($("#PrcsID").val())
      	
	$("#BTMONTHSHEETGRD").click();
	
	$("#FLOW_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#FLOW_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
 
    
    
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
        var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
			var FLOW_CASHFLOW = TxtGridsubmitdata_V1("Table3","CASH_","FLOW_");
		    AssignGridXmltoField("FLOW_CASHFLOW", FLOW_CASHFLOW)
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