$(document).ready(function () {
	
	//$("#CAFL_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	//$("#CAFL_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
	//Checkint();
	//GetBusns();
	//GetProp();
	//getproperty();
	
	//FormDataFromDB("LSW_TCASHFLOW","CAFL_","CAFLDBfields", "CAFL_SCHEMEID");
	//$("#CAFL_PRCSID").val($("#PrcsID").val())

		//var xmlSTATUS=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETACCESSCREADATA")
    	//$("#ASST_NAMEENTITY").val($(xmlSTATUS).find('NAME').text())
		//$("#ASST_MONTHYEAR").val($(xmlSTATUS).find('INCORDATE').text())
		//$("#CAFL_INTERATE").val($(xmlSTATUS).find('INTER').text())
		//$("#CAFL_PROPOSEDTENU").val($(xmlSTATUS).find('TENURE').text())
//$("#BTNFINANACESHEET").click();

$("#CAFL_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#CAFL_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
    
    $("#CAFL_PRCSID").attr("value", $("#PrcsID").val());
	  //GetBorowClass();
      //GetSector();
	
		var check1=UI_getdata($("#PrcsID").val(),$("#CAFL_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
		var pro3=($(check1).find('PRODUCT').text());
	
	Getbussiness();
	GetMarginVal() ;
	
 /*  Checkinst();
	if(pro3=='T201')
	{
		GetbussinessUBL();
		
	}
	else
	{
		 Getbussiness();
		 GetMarginVal() ;
	} */
 
 getproperty();
  //GetMarginVal() ;
  //Checkemiamt();
  
    FormDataFromDB("LSW_TCASHFLOW", "CAFL_", "CAFLDBfields", "CAFL_SCHEMEID");
	Checkinst();
    $("#CAFL_PRCSID").val($("#PrcsID").val())
      	
	$("#BTMONTHCASHGRD").click();
	
	$("#CAFL_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#CAFL_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
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
			
			var CAFL_CASHGRID = TxtGridsubmitdata_V1("Table3","CASF_","CAFL_");
		    AssignGridXmltoField("CAFL_CASHGRID", CAFL_CASHGRID)
			
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			
		var OP=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")
          if($(OP).find("LOANID").text()!="")
		{			
		  $("#RCCM_LOANUNIQID").val($(OP).find("LOANID").text());
		}
		  

			
			var CHKresult=FormDataToDB(tbl,prfx,$("#CAFL_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
			
			

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
