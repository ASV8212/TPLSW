

$(document).ready(function () {
	
	
	

});




function GetPremium()
{
	
	var param1='45997_LoanCreation_LoanCr';
	var param2='<Data><row><FIPC_BrwrId>C17000207</FIPC_BrwrId><FIPC_BrwrName>Mahesh  Saxena</FIPC_BrwrName><FIPC_BnftOptn>Death and TPD</FIPC_BnftOptn><FIPC_sumAssrd>1000000</FIPC_sumAssrd><FIPC_PrcsID>45997_LoanCreation_LoanCr</FIPC_PrcsID><FIPC_ActivityID>90767_45997_LoanCreation_LoanCr_Fincl</FIPC_ActivityID><FIPC_DtModified>13-07-2017</FIPC_DtModified><FIPC_DtCreated>03-07-2017</FIPC_DtCreated><FIPC_ModifiedBy>Rishabh Verma</FIPC_ModifiedBy><FIPC_CreatedBy>Rishabh Verma</FIPC_CreatedBy></row><row><FIPC_BrwrId>C17000188</FIPC_BrwrId><FIPC_BrwrName>Vinod Kumar</FIPC_BrwrName><FIPC_BnftOptn>Death and TPD</FIPC_BnftOptn><FIPC_sumAssrd>1000000</FIPC_sumAssrd><FIPC_PrcsID>45997_LoanCreation_LoanCr</FIPC_PrcsID><FIPC_ActivityID>91002_45997_LoanCreation_LoanCr_Fincl</FIPC_ActivityID><FIPC_DtModified>17-07-2017</FIPC_DtModified><FIPC_DtCreated>03-07-2017</FIPC_DtCreated><FIPC_ModifiedBy>Rishabh Verma</FIPC_ModifiedBy><FIPC_CreatedBy>Rishabh Verma</FIPC_CreatedBy></row></Data>';
	var param3='240';
	var param4='';
	var spname='LSW_SPrmCalcAutm';
	//var spname='LSW_SGetSoapRequest';
	
	$.ajax({

	    url: "/LSW/SOAPClientSAAJ",
	    data: {param1:param1,param2:param2,param3:param3,param4:param4,param5:'',spname:spname},
	    async: false,
	   // dataType: "json",
	    type: 'POST',
	    success: function OnSuccess_submit(data) {
			
			
			window.alert(data);
		
	    },
	    error: function OnError_submit(xmlRequest) {
		window.alert(data);
	    }

	});	
}







	

