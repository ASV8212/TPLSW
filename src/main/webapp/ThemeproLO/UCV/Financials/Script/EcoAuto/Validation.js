
 function LIMITELIGIBLE()
{
	
	var NOOFVECHILE=$("#ECOA_NOOFACTLONS").val()
	var VECHILAMT=0;
	/* if(TYPEVECHILE=="LCV")
	{
	VECHILAMT=25000	
	}
	else if(TYPEVECHILE=="ICV")
	{
	VECHILAMT=40000	
	}
	else if(TYPEVECHILE=="HCV")
	{
	VECHILAMT=50000
	} */
	
	var XMLPRODUCTID=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSCHEMID")
	var PRODUCT=$(XMLPRODUCTID).find('PRODUCT').text();
	if(PRODUCT=='T307' || PRODUCT=='T308')
	{
	VECHILAMT=60000
	}
	else
	{
	VECHILAMT=50000
	}
	var MAXFUND=$("#ECOA_MAXFUNSCHME").val().replace(/,/g,'');
	if(MAXFUND>500000)
	{
		alert("Amount should enter below 500000")
		$("#ECOA_MAXFUNSCHME").val('');
	}
	
	var TOTAL=parseFloat(NOOFVECHILE)*parseFloat(VECHILAMT);
	var FUNDAMT=$("#ECOA_MAXFUNSCHME").val().replace(/,/g,'');
	var LONAMT=$("#DMY3").val().split('|')[0]
	
	
	if(isNaN(FUNDAMT))
	{
		FUNDAMT=0;
	}
	
	
	
	if(isNaN(TOTAL))
	{
		TOTAL=0;
	}
	
	if(isNaN(LONAMT))
	{
		LONAMT=0;
	}
	
	
	
	//var num4 = Math.min(FUNDAMT, TOTAL, LONAMT);
	
	$("#ECOA_LIMTELIGBLE").val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	$("#ECOA_LIMTELIGBLE").next().addClass('active');
	
	/* $("#ECOM_MAXFUNDALLOW").val(CURINRCommaSep(parseFloat(num4).toFixed(2)));
	$("#ECOM_MAXFUNDALLOW").next().addClass('active'); */
	

}




 /* function GetLoanamt()
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
	/*svar Min=Math.min($("#ECOA_LNAMTREQ").val().replace(/,/g,''),$("#ECOA_MAXFUNSCHME").val().replace(/,/g,''),$("#ECOA_LIMTELIGBLE").val().replace(/,/g,''));
	if(Min=='')
	{
		Min=0;
	}
	if(isNaN(Min))
	{
		Min=0;
	}
	$("#ECOA_PROPOSEAMT").val(CURINRCommaSep(parseFloat(Min).toFixed(0)));
	
} */