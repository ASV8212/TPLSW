$(document).ready(function () {
	
	
	
	$("#CTLN_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#CTLN_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
	/* $("#RCCM_UNIQUID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#RCCM_SCHEME").attr("value",$(".FormPageMultiTab li.active").text());
	 */
	
	//FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	CheckLoan();
	//FormDataFromDB("LSW_TTERMLNDETAILS","CTLN_", "CTLNDBfields", "CTLN_SCHEMEID")
	
	FormDataFromDB("LSW_TTERMLNDETAILS","CTLN_","CTLNDBfields", $("#CTLN_SCHEMEID").val()+"|CTLN_SCHEMEID");
	
	//FormDataFromDB("LSW_TRTRCAMCHECKLISTMAIN","RCCM_","RCCMDBfields", $("#RCCM_UNIQUID").val()+"|RCCM_UNIQUID");
	$("#CTLN_PRCSID").val($("#PrcsID").val())
	
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
		var NetLTV=$("#CTLN_NETLTV").val();
		if(parseFloat(NetLTV)<=0)
		{
		alert ("Value of NetLTV should not be zero");
		}
		
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
	       var OP=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),$("#VERTICAL").val(),"","LSW_SSTRCAMMAINTABLE")
           
		   if($(OP).find("SCHEMEID").text()!="")
		   {
		     $("#RCCM_LOANUNIQID").val($(OP).find("SCHEMEID").text());
		   }
		}
		
		var CHKresult = FormDataToDB(tbl,prfx,$("#CTLN_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		 
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

