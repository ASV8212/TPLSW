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
	
	/* var xmlSTPVAL=UI_getdata($("#PrcsID").val(),"","","","","LSW_SSTPCREDSUMDET")
	var STPRES=$(xmlSTPVAL).find('RESULT').text()
	var SECTOR=$(xmlSTPVAL).find('SECTOR').text()
	var OWNERSHIP=$(xmlSTPVAL).find('OWNERSHIP').text()
	var BRANCH=$(xmlSTPVAL).find('BRANCH').text()
	var BANKNO=$(xmlSTPVAL).find('BANKNUM').text()
	if(STPRES=='YES')
	{
		$("input[name=CRSU_OWNHOUSE][value='"+OWNERSHIP+"']").prop('checked', true);
		$("input[name=CRSU_OWNHOUSE]").attr('disabled',true)
		
		$("#CRSU_NOBANKACC").val(BANKNO);
		$("#CRSU_NOBANKACC").material_select();
		$('#CRSU_NOBANKACC').attr('disabled',true)
		
		$("#CRSU_TYPEINDUS").val(SECTOR);
		$("#CRSU_TYPEINDUS").material_select();
		$('#CRSU_TYPEINDUS').attr('disabled',true)
		
		$("#CRSU_BRANCHLOC").val(BRANCH);
		$("#CRSU_BRANCHLOC").material_select();
		$('#CRSU_BRANCHLOC').attr('disabled',true)
		
		$("input[name=CRSU_CREDITSUM]").attr('disabled',true)
	} */
	//passfail();
	$("#CREDITSUMMATION").click();
	BANKSUMAVG()
 //FINALABB();
 loan();
 LOANCS();
	//	var xmlSTATUS=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETACCESSCREADATA")
    	

		$(document).on("click", ".FormSave", function(){	
	
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
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
		if($("#CRSU_LOANUNIQID").length != 0)
		{
		$("#CRSU_LOANUNIQID").val($(OP).find("LOANID").text());
		}
		}
		  
		var CRSU_CREDSUMGRID = TxtGridsubmitdata_V1("TableCS","CRSG_","CRSU_");
			AssignGridXmltoField("CRSU_CREDSUMGRID", CRSU_CREDSUMGRID)
			
			
		
			
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
