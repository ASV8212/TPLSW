$(document).ready(function () {
	
	$("#FOGS_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#FOGS_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
    $("#FOGS_PRCSID").attr("value", $("#PrcsID").val());

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
		
		
		UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")

			
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#FOGS_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
			
			

			if (CHKresult == "Fail")
			{
			  alert("Submission Failed");
			  return false;			
			}
			

			if($(this).text() == "Save & Next")
			{
				  NXTTAB(this);
			}
			
		});
		
	
		
	
	
});
