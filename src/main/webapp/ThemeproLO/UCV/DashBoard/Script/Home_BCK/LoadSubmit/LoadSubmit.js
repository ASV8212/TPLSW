$(document).ready(function () {

	var IOP = window.location.origin + '/jw';

	$("#FSN").click();
	
	
	LoadDashBord();
	

	
	
	$(".FltMnu").click(function () {


		 $(location).attr('href',$(this).attr("name"));
		

	    });
	
	
		$(".InbxRdct").click(function () {

		
		var IOP1 = window.location.origin;
		
		var Mnuid=$(this).attr('name').split(',')[0];
		var FormColor=$(this).attr('name').split(',')[1];
		var FormName=$(this).attr('name').split(',')[2];
		var FormAction=$(this).attr('name').split(',')[3];
		var PrMs1=$(this).attr('name').split(',')[4];
		FormName=FormName+' - '+PrMs1
		
		
		 var RedirectURL = IOP1+"/TPLSW/GetNextNavAction?MnuID="+Mnuid+"&Action=View&FormColor="+FormColor+"&FormName="+FormName+"&FormAction="+FormAction+"&PrMs1="+PrMs1;
		$(location).attr('href',RedirectURL);

		
	    });
		
		
		
		$(".MnuDshBrd").click(function () {

		
		var IOP1 = window.location.origin;
		
		var Mnuid="30j";
		var FormColor=$(this).find('i').attr('name');
		var FormName=$(this).find('.data').find('p').text();
		var FormAction="All";
		var PrcsID="Limit";
		var PrMs1="All"
		FormName=FormName///+' - '+PrMs1
		
		 var RedirectURL = IOP1+"/TPLSW/GetNextNavAction?MnuID="+Mnuid+"&Action=View&FormColor="+FormColor+"&FormName="+FormName+"&FormAction="+FormAction+"&PrcsID="+PrcsID+"&PrMs1="+PrMs1;
		$(location).attr('href',RedirectURL);

		
	    });
		
		 window.onunload = function() {
    AppliLogout();
	//window.close();
}
 
});


