$(document).ready(function () {
	
	$("#CAFL_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#CAFL_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
	Checkint();
	GetBusns();
	GetProp();
	
	FormDataFromDB("LSW_TCASHFLOW","CAFL_","CAFLDBfields", "CAFL_SCHEMEID");
	$("#CAFL_PRCSID").val($("#PrcsID").val())

		//var xmlSTATUS=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETACCESSCREADATA")
    	//$("#ASST_NAMEENTITY").val($(xmlSTATUS).find('NAME').text())
		//$("#ASST_MONTHYEAR").val($(xmlSTATUS).find('INCORDATE').text())
		//$("#CAFL_INTERATE").val($(xmlSTATUS).find('INTER').text())
		//$("#CAFL_PROPOSEDTENU").val($(xmlSTATUS).find('TENURE').text())
$("#BTNFINANACESHEET").click();
		$(document).on("click", ".FormSave", function(){	
	
			
			var html=$(this).closest('.DYNROW')
		
		if($(this).text() == "Save & Next")
			{
			  var MndtryChk = ChkMandatoryFlds("CAFLMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields / Document(s)");
				return false;
				}
			}
			
			var CAFL_CASHGRID = TxtGridsubmitdata_V1("Table4","CAGR_","CAFL_");
		    AssignGridXmltoField("CAFL_CASHGRID", CAFL_CASHGRID)
			
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			
		UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")


			
			var CHKresult=FormDataToDB(tbl,prfx,$("#CAFL_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
			
			

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
