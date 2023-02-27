$(document).ready(function() {

$("#NBNK_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#NBNK_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
    
    $("#NBNK_PRCSID").attr("value", $("#PrcsID").val());
	  //GetBorowClass();
      //GetSector();
	
  Checkinst();
  Getbussiness();
  //getproperty();
  GetMarginVal() ;
  //Checkemiamt();
  
    FormDataFromDB("LSW_TNONBANK", "NBNK_", "NBNKDBfields", "NBNK_SCHEMEID");
	
    $("#NBNK_PRCSID").val($("#PrcsID").val())
      	
	$("#NONBNKBASEDGRD").click();
	
	$("#NBNK_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#NBNK_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	Checkinst();
	
	Existemi();
 
    
    
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
		
			var NBNK_CASHFLOW = TxtGridsubmitdata_V1("Table3","NBMO_","NBNK_");
		    AssignGridXmltoField("NBNK_CASHFLOW", NBNK_CASHFLOW)
			
		var OP=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")
        if($(OP).find("LOANID").text()!="")
		{			
		  $("#RCCM_LOANUNIQID").val($(OP).find("LOANID").text());
		}
		  
		var CHKresult=FormDataToDB(tbl, prfx, $("#NBNK_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
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