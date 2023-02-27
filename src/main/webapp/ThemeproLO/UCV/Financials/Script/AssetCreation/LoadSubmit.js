$(document).ready(function () {
	
	
	$("#ASST_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#ASST_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
	GetTyProperty();
	FormDataFromDB("LSW_TASSETCREATION","ASST_","ASSTDBfields", "ASST_SCHEMEID");
	   $("#ASST_PRCSID").val($("#PrcsID").val())
	
	$("#ASST_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#ASST_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());

		var xmlSTATUS=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETACCESSCREADATA")
    	$("#ASST_NAMEENTITY").val($(xmlSTATUS).find('NAME').text())
		$("#ASST_MONTHYEAR").val($(xmlSTATUS).find('INCORDATE').text())
		$("#ASST_INTERATE").val($(xmlSTATUS).find('INTER').text())
		$("#ASST_PROPOSEDTENU").val($(xmlSTATUS).find('TENURE').text())

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
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#ASST_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
			
			

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
