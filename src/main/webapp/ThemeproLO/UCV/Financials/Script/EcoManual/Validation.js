


function LIMITELIGIBLE()
{
	
	var TYPEVECHILE=$("#ECOM_TYOFVEHICLE").val()
	var NOOFVECHILE=$("#ECOM_NOOFVEHICLE").val()
	var VECHILAMT=0;
	if(TYPEVECHILE=="LCV")
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
	}
	var MAXFUND=$("#ECOM_MAXFUNSCH").val().replace(/,/g,'');
	if(MAXFUND>500000)
	{
		alert("Amount should enter below 500000")
		$("#ECOM_MAXFUNSCH").val('');
	}
	
	var TOTAL=parseFloat(NOOFVECHILE)*parseFloat(VECHILAMT);
	var FUNDAMT=$("#ECOM_MAXFUNSCH").val().replace(/,/g,'');
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
	
	
	
	var num4 = Math.min(FUNDAMT, TOTAL, LONAMT);
	
	$("#ECOM_LIMITELIGI").val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	$("#ECOM_LIMITELIGI").next().addClass('active');
	
	$("#ECOM_MAXFUNDALLOW").val(CURINRCommaSep(parseFloat(num4).toFixed(2)));
	$("#ECOM_MAXFUNDALLOW").next().addClass('active');
	

}