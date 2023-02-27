 function GetBorowClass()
{
	  
	var borowclass = UI_getdata("BORROWCLASS","","","","","LSW_SGETPRODVAL");
    $("#BOCL_BOROWCLASS").html("");
	$("#BOCL_BOROWCLASS").append($(borowclass).find("RESULT").html());
	$("#BOCL_BOROWCLASS").material_select(); 
}
 function GetSector()
{
	  
	var borowclass = UI_getdata("SECTORBR","","","","","LSW_SGETPRODVAL");
    $("#BOCL_SECTOR").html("");
	$("#BOCL_SECTOR").append($(borowclass).find("RESULT").html());
	$("#BOCL_SECTOR").material_select(); 
}
function Chkrating()
{
	if($("#BOCL_RATINGDTLS").val()=="Yes")
	{
		$(".RAT").show();	
		$("#BOCL_RATING").addClass('BOCLMndtry');
		$("#BOCL_RATING").next().find(".MndtryAstr").html("*");
		
	}
	else
	{
		$("#BOCL_RATING").val('');
		$("#BOCL_RATING").removeClass('BOCLMndtry');
		$("#BOCL_RATING").next().find(".MndtryAstr").html("");
		$(".RAT").hide();
	}
}
function CheckAmt()
{
	var RADIO=$("input[name='BOCL_BORWERRADIO']:checked"). val();
	if(RADIO=="Plant and Machinery" || RADIO=="Turnover")
	{
		$(".AMT").show(); 
		$("#BOCL_AMT").addClass('BOCLMndtry');
		$("#BOCL_AMT").next().find(".MndtryAstr").html("*");
	}
	else
	{
		$("#BOCL_AMT").val('');
		$("#BOCL_AMT").removeClass('BOCLMndtry');
		$("#BOCL_AMT").next().find(".MndtryAstr").html("");
		$(".AMT").hide(); 
	}
	
}