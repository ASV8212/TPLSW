$(document).ready(function () {
	
	
	
	//$("#AGEA_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	//$("#AGEA_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	//FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	
	//CheckTenure();
	;
	
	FormDataFromDB("LSW_TAGEOFASSETDTLS","AGEA_", "AGEADBfields", "")
	
	CheckLoan();
	CheckDate();
	checkDays()
	$("#AGEA_PRCSID").val($("#PrcsID").val())
		
	GetDetails();
	
	CheckDCIIBSts('DC');
	CheckDCIIBSts('IIB');
	
	//LoadMultiData("",$("#PrcsID").val(),"","PROPEAPPRI","PAPDDBfields","LSW_SPROPEAPPRISAL");
	
	//getRadioVal();	
	//LoadMultiData("",$("#PrcsID").val(),"","APPVERIFICATION","PRVEDBfields","LSW_SGETAPPVERFI");
	
	//LoadMultiData("",$("#PrcsID").val(),"","COAPPVERIFICATION","PVCODBfields","LSW_SGETCOAPPVERFI");
	
    //$("#BTNRCUGRD").click();
	$(document).on("click", ".FormSave", function(){

		if($(this).text() == "Save & Next")
		{	
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		}
		
    /*    var FormName=$(this).attr("data-form")
		
		if(FormName=="PROPERTYAPPRASIAL")
			{ */
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
		if($(this).attr("data-form")=="TermLoan")
		{
	       var OP=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")
           $("#RCCM_LOANUNIQID").val($(OP).find("LOANID").text());
		}
		
		var CHKresult = FormDataToDB(tbl,prfx,$("#AGEA_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		 
		if(CHKresult == "Fail")
	   	{
	   	  alert("Submission Failed");
	   	   return false;			
	   	}
		/* 
   $(".ELIGHSCHEME").html('');
   LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME");  */
	
		/* 
		var TECHNICAL = TxtGridsubmitdata_V2("PROPEAPPRI","PAPD_","PRAP_","PAPDDBfields"); 
        AssignGridXmltoField("PRAP_PROPDETAILS", TECHNICAL); */
		
        /*    }
		else
		   {
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
            var PVER_CHECKSTATUS = TxtGridsubmitdata_V1("Table2","PVCS_","PVER_");
			   AssignGridXmltoField("PVER_CHECKSTATUS", PVER_CHECKSTATUS)
		     FormDataToDB(tbl,prfx,$("#PVER_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		   }
	 */
		if($(this).text() == "Save & Next")
		{
			  NXTTAB(this);
		}
	});
});

