$(document).ready(function () {
	
	$("#FOGS_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#FOGS_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
    $("#FOGS_PRCSID").attr("value", $("#PrcsID").val());
	if($("#VERTICAL").val()=="MSME Alliance")
	 {
		 $(".ALLI").show()
	 }
	 else
	 {
		 $(".ALLI").hide()
	 }

	FormDataFromDB("LSW_TFOIRGST","FOGS_","FOGSDBfields", "");
	
       Product();
	   GetSector();
	   GetMarginVal();

		$(document).on("click", ".FormSave", function(){	
	
			
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
			
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#FOGS_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
			
			

			if (CHKresult == "Fail")
			{
			  alert("Submission Failed");
			  return false;			
			}
    $(".ELIGHSCHEME").html('');
    LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME"); 
	EnableFnlElgFld();	



			if($(this).text() == "Save & Next")
			{
				  NXTTAB(this);
			}
			
		});
		
	
		
	
	
});
