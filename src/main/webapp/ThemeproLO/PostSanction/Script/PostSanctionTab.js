$(document).ready(function() {
	var activityname = GetActivityName();
	var op = UI_getdata($("#PrMs10").val(), $("#PrMs9").val(),$("#PrcsID").val(), activityname+'|'+$("#PrMs8").val(), $(window.location.pathname.split('/')).last()[0], "LSW_SGETTRNCHDTL");
	
	$('.FormPageMultiTab').append(op.replace('<Resultset><a><TRNCH>','').replace('</TRNCH></a></Resultset>',''));
	//$('.FormPageMultiTab').find('.nav-item').first().addClass('active');
	if ($('.FormPageMultiTab').length > 0)
	{
		
		$('.FormPageMultiTab li').removeClass('active');
		
		if($("#PrMs5").val() != ""){
			$("#"+ $("#PrMs5").val().split('|')[0]).addClass("active");
			$("#"+ $("#PrMs5").val().split('|')[1]).addClass("active");
		}
		else if($("#PrMs6").val() != "")
		{
		$("#"+ $("#PrMs6").val()).addClass("active");
		}
		
		else if($("#PrMs8").val() != "")
		{
	
		var ms = $("#PrMs8").val();
		
		if (ms.indexOf('|')>=0)
			{
			$("#"+ ms.split('|')[0]+ms.split('|')[1]).addClass("active");
			}
		else
			{
			$("#"+ $("#PrMs6").val()).addClass("active");
			}
	
	 
		}
	
	else
		{
		$('.FormPageMultiTab li:first').addClass("active");
		}
		
		if  ($('.FormPageMultiTab li').hasClass("active") == false)
			{
			$('.FormPageMultiTab li:first').addClass("active");
			}
	}
	if(activityname != "BranchOPS"){
		$('.FormPageMultiTabAdd').hide();
	}
});