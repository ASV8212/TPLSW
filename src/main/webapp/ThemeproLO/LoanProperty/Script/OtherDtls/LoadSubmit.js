$(document).ready(function () {
	
	
	$($('.AFormaccordion')[0]).click();

	
	

	
  FormDataFromDB("LSW_TLONOTHRDTLS","LODT_","LODTDBfields", "");
	$('.FormSave').on('click', function() {
		
		if($(this).text() == "Save & Next")
		{

		var MndtryChk = ChkMandatoryFlds("LODTMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		}
		

		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		//var DATA = $(this).attr("data-aria").split("|")[2];
		
		var CHKresult=FormDataToDB(tbl,prfx,$("#LODT_PRCSID").val())//+"|"+$("#"+DATA).val()+"|" + DATA)
		
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

