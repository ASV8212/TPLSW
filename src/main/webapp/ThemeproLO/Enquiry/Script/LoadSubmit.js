$(document).ready(function () {

	getPrdVal();
	//GetBusnsDt();
	
	
var IOP = window.location.origin + '/jw';

	var URL = window.location.href;
	
	URL = URL.split("TPLSW")[1].replace('/','');
	
	
	$(".ULHdrLS").find("[href='"+URL+"']").removeClass("Btxt16Inactive");
	$(".ULHdrLS").find("[href='"+URL+"']").addClass("Btxt16");
	
	var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
today = dd+'/'+mm+'/'+yyyy;
	
	$("#ToDate").val(today)
	
	addMonths()
	
	$("#BTNENQUIRYTAB").click();
	
	$(document).on("click",".InitWFview",function() {
				
			//$(".InitWF1").click(function () {
						
			$(location).attr('href',window.location.origin + "/TPLSW/Applcnt?PrcsID="+$($(this).parent().parent().find('td')[10]).text()+"&ActvID="+$($(this).parent().parent().find('td')[11]).text()+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1&PrMs1=View");
						 
					});

 $(document).on("click","#Search",function() {

         if($('#ApplNo').val()=="" && $('#AggrNo').val()=="" && $('#PAN').val()=="" && $('#MOB').val()=="" && $('#CKYC').val()=="" && $('#Name').val()=="" &&
             $('#DOB').val() !="")
			 {
				alert('Please add one more search criteria( i.e. Application ID/agreement Id/Name/PAN/CKYC or mobile No) to search.'); 
			 }
			 else
			 {
	FncallMyAppl(this,'Table3',{spname:'LSW_SENQUIRYVIEWTAB',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',
	Param:$('#LogUsr').val(),brid:'Loan|'+$('#FromDate').val()+'|'+$('#ToDate').val()+'|'+$('#ApplNo').val()+'|'+$('#AggrNo').val()
	+'|'+$('#DOB').val()+'|'+$('#PAN').val()+'|'+$('#MOB').val()+'|'+$('#CKYC').val()+'|'+$('#Name').val()+'|'+$('#CusType').val()+'|'+$('#PrdName').val()+'|'+$('#VERTICAL').val(),MnuId:'Search'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,10','ENQUIRTYTAB');
			 }
 });

});

