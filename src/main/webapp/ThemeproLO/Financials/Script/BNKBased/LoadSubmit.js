$(document).ready(function () {
	
	
	$("#CBBA_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#CBBA_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
	Checkinst();
	GetTyBusiness();
	GetTyProperty();
	GetDateOfInco();
	
	//FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	
	FormDataFromDB("LSW_TBANKINGBASED","CBBA_", "CBBADBfields", "CBBA_SCHEMEID")
	$("#CBBA_PRCSID").val($("#PrcsID").val())
	
	$("#CBBA_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#CBBA_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
	$("#BTNBNKBASEDGRD").click();
	$(document).on("click", ".FormSave", function(){
		if($(this).text() == "Save & Next")
		{	
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields");
			return false;
			}
		}
			var CBBA_GRIDMNTH = TxtGridsubmitdata_V1("Table3","BNKG_","CBBA_");
			AssignGridXmltoField("CBBA_GRIDMNTH", CBBA_GRIDMNTH)
			
		
    /*    var FormName=$(this).attr("data-form")
		
		if(FormName=="PROPERTYAPPRASIAL")
			{ */
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
		var OP=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")
         if($(OP).find("LOANID").text()!="")
		{			
		  $("#RCCM_LOANUNIQID").val($(OP).find("LOANID").text());
		}
		  
		var CHKresult = FormDataToDB(tbl,prfx,$("#CBBA_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		if(CHKresult == "Fail")
	   		{
	   		  alert("Submission Failed");
	   		   return false;			
	   		}
	$(".ELIGHSCHEME").html('');
   LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME"); 
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

