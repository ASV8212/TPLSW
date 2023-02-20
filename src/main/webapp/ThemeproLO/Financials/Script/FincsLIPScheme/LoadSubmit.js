$(document).ready(function () {
	

	var tbl = $("#headingOne1 a").attr("data-aria").split("|")[0];	
	var prfx = $("#headingOne1 a").attr("data-aria").split("|")[1];
	var DATA = $("#headingOne1 a").attr("data-aria").split("|")[2];
	var CusID =$("#headingOne1 a").attr("data-aria").split("|")[2];
	var CusID1 =$("#headingOne1 a").attr("data-aria").split("|")[3];
	
	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
	
	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
    
	$("#BTNLIPCAMGRD").click();
	$("#BTNLIPEXTGRD").click();
	
	$('.FormSave').on('click', function() {
		
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
			
			if($("#LPCM_UNIQUID").val() == "")
			{
			var CUSID = UI_getdata("FINANC","","Yes","","","Sam_sGetSeqID");
			
			$("#LPCM_UNIQUID").val($(CUSID).find("Val1").text());
		//	$(".BKDT_BNKNO").text($(CUSID).find("Val1").text());
		    }

			var FormName=$(this).attr("data-form")

			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			var OP=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")
           if($(OP).find("LOANID").text()!="")
		{			
		  $("#RCCM_LOANUNIQID").val($(OP).find("LOANID").text());
		}
		  
			var SPCAMGRID = TxtGridsubmitdata_V1("Table2","LIPC_","LPCM_");
			AssignGridXmltoField("LPCM_LIPCAMGRD", SPCAMGRID)
			
			var SPEXISTGRID = TxtGridsubmitdata_V1("Table3","LPXL_","LIPM_");
			AssignGridXmltoField("LIPM_LIPEXISTGRD", SPEXISTGRID)
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#LPCM_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
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

