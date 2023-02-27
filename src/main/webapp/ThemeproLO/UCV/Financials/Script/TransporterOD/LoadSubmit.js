$(document).ready(function () {
	
	
	
	$("#CTOD_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#CTOD_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	//FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);

	CheckLoan();
	FormDataFromDB("LSW_TTRANSODDETAILS","CTOD_", "CTODDBfields", $("#CTOD_SCHEMEID").val()+"|CTOD_SCHEMEID")
	$("#CTOD_PRCSID").val($("#PrcsID").val())
	
	var xml=UI_getdata($("#PrcsID").val(),$("#CTOD_SCHEMEID").val(),"","","","LSW_SGETSECDETL")
	
	$("#CTOD_NOOFVEHICLE").val($(xml).find("SECCNT").text());
	$("#CTOD_NOOFVEHICLE").next().addClass('active');
	
	var PropAsset=CURINRCommaSep(parseFloat($(xml).find("ASSETVALUE").text()).toFixed(0));
	
	$("#CTOD_PROPOSEASST").val(PropAsset);
	$("#CTOD_PROPOSEASST").next().addClass('active');
	
	var PropAsstValue=$("#CTOD_PROPOSEASST").val().replace(/,/g,''); 
	PropAsstValue=parseFloat(PropAsstValue)*95/100
	
	PropAsstValue=CURINRCommaSep(parseFloat(PropAsstValue).toFixed(0));
	
	$("#CTOD_NETELINLAMT").val(PropAsstValue);
	
	
	
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
	
	if($(this).attr("data-form")=="OD")
		{
	       var OP=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),$("#VERTICAL").val(),"","LSW_SSTRCAMMAINTABLE")
           
		   if($(OP).find("SCHEMEID").text()!="")
		   {
		     $("#RCCM_LOANUNIQID").val($(OP).find("SCHEMEID").text());
		   }
		}	
		
	var CHKresult = FormDataToDB(tbl,prfx,$("#CTOD_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		 
		if(CHKresult == "Fail")
	   	{
	   	  alert("Submission Failed");
	   	   return false;			
	   	}
		
	$(".ELIGHSCHEME").html('');
	
    LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SUCVGETELIGHSCHEME"); 
	
	 EnableFnlElgFld();
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

