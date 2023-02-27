
$(document).ready(function() {
	$("#BTNSANCCONFR").click()
	$(".ApplTitle").text('\n DRAW DOWN\n')
    
	var EditAccess =UI_getdata($("#LogUsr").val(),"","","","","LSW_SUSRACCESS2EDITUAMDRAWDOWN")
	if($(EditAccess).find('RESULT').text()=='N'){
		$('.NEWDRAWDOWN').hide()
	}
	
	$(".DRAWDOWN").click(function () {
		$(location).attr('href',window.location.origin + "/TPLSW/TransactionDradown?PrcsID="+$($(this).closest("tr").find("td")[3]).text()+"&ActvID="+$($(this).closest("tr").find("td")[4]).text()+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1&PrMs3=");
	});
	
});