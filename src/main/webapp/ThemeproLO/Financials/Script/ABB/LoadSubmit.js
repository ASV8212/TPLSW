$(document).ready(function () {
	
		var result=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKVIABILITYTAB");
	var chk=$(result).find("RESULT").text();
	 
	if(chk=='Y')	
	{
		$("#FormPageTab9").remove()
	}

	
	 
	$("#SABB_SHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#SABB_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
    $("#SABB_PRCSID").attr("value", $("#PrcsID").val());
	
	$(".FormPageMultiTabAdd").hide();
	FormDataFromDB("LSW_TSCHEMEABB","SABB_","SABBDBfields", "");
	

	//	var xmlSTATUS=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETACCESSCREADATA")
    	

		$(document).on("click", ".FormSave", function(){	
	
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			var html=$(this).closest('.DYNROW')
		
		if($(this).text() == "Save & Next")
			{
			  var MndtryChk = ChkMandatoryFlds("LODEMndtry");
			
			if(MndtryChk == "Mandatory")
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
		  
		
			
		
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#ASST_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
			
			

			if (CHKresult == "Fail")
			{
			  alert("Submission Failed");
			  return false;			
			}
			
			//$(".ELIGHSCHEME").html('');
  // LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME"); 

			//EnableFnlElgFld();

			if($(this).text() == "Save & Next")
			{
				  NXTTAB(this);
			}
			
			
			
		});
		
	
		
	
	
});
