$(document).ready(function () {
	
	
	
	 
	$("#CRSU_SHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#CRSU_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
    $("#CRSU_PRCSID").attr("value", $("#PrcsID").val());
	
	$(".FormPageMultiTabAdd").hide();
	
	
	Getbussiness();
	
	FormDataFromDB("LSW_TCREDITSUMUBL","CRSU_","CRSUDBfields", "");
	$("#CRSU_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#CRSU_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	Checkinst();
	loan();
	passfail();
	
 FINALABB();
	//	var xmlSTATUS=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETACCESSCREADATA")
    	

		$(document).on("click", ".FormSave", function(){	
	
			
			var html=$(this).closest('.DYNROW')
		
		if($(this).text() == "Save & Next")
			{
			  var MndtryChk = ChkMandatoryFlds("CRSUMndtry");
			
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
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#ASST_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
			
			

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
