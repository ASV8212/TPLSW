 function GetLoanamt()
{
	
	
	//var check=UI_getdata($("#PrcsID").val(),$("#ECOA_UNIQID").val(),"","","","LSW_SGETLOANDETAILS");
	var LONAMT=$("#DMY3").val().split('|')[0]
	//i var Amt=$(LONAMT).find("LOANAMOUNT").text();

	if(isNaN(LONAMT))
	{
		LONAMT=0;
	}
	 $("#ECOA_LNAMTREQ").val(CURINRCommaSep(parseFloat(LONAMT).toFixed(0)));
	 
}

function Chkmax()
{
	var max=$("#ECOA_MAXFUNSCHME").val().replace(/,/g,'');
	if(max>500000)
	{
		alert("Amount should enter below 500000")
		$("#ECOA_MAXFUNSCHME").val('');
	}
	GetMin();
}
function ChkMaxLoad()
{
	var max=$("#ECOA_MAXFUNSCHME").val().replace(/,/g,'');
	if(max>500000)
	{
		alert("Amount should enter below 500000")
		$("#ECOA_MAXFUNSCHME").val('');
	}
	GetMin();
}

function GetLimitEli()
{
	var ActLoan=$("#ECOA_NOOFACTLONS").val()
	var Loanmul=parseInt(ActLoan)*lnamt;
	if(Loanmul=='')
	{
		Loanmul=0;
	}
	if(isNaN(Loanmul))
	{
		Loanmul=0;
	}
	$("#ECOA_LIMTELIGBLE").val(CURINRCommaSep(parseFloat(Loanmul).toFixed(0)));
}
function GetMin()
{
	/* 
	var b=$("#ECOA_LNAMTREQ").val()
	var c=$("#ECOA_MAXFUNSCHME").val()
	var d=$("#ECOA_LIMTELIGBLE").val() */
	var Min=Math.min($("#ECOA_LNAMTREQ").val().replace(/,/g,''),$("#ECOA_MAXFUNSCHME").val().replace(/,/g,''),$("#ECOA_LIMTELIGBLE").val().replace(/,/g,''));
	if(Min=='')
	{
		Min=0;
	}
	if(isNaN(Min))
	{
		Min=0;
	}
	$("#ECOA_PROPOSEAMT").val(CURINRCommaSep(parseFloat(Min).toFixed(0)));
	
}