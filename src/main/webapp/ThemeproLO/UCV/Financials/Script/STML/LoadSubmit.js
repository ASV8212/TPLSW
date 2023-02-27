$(document).ready(function () {
	
	
	
	//$("#FCBD_PRCSID").attr("value",$("#PrcsID").val());
	//$("#FCBD_CUSID").attr("value",$(".FormPageMultiTab li.active").attr("id"));

	$("#STML_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#STML_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());

	var DATA = $("#STML_SCHEMEID").val()+"|STML_SCHEMEID" ;

	
	FormDataFromDB("LSW_TCAMSTML", "STML_", "STMLDBfields", DATA);
	
	$("#STML_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#STML_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());


	 $(document).on("click", ".FormSave", function(){
		

		if($(this).text() == "Save & Next")
		{
		
		var MndtryChk = ChkMandatoryFlds("FCBDMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		}

		
	//	$("#BKDT_BNKREFNAME").val($(".FormPageMultiTab li.active a div").text())
		//var html=this.closest('#UpdateBalance')
		
		
				var tbl = $(this).attr("data-aria").split("|")[0];
				var prfx = $(this).attr("data-aria").split("|")[1];
				var DATA = $(this).attr("data-aria").split("|")[2];
UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")

				
				var CHKresult=FormDataToDB(tbl,prfx,$("#STML_SCHEMEID").val()+"|"+$("#"+DATA).val()+"|" + DATA);

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

