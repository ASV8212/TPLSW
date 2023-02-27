$(document).ready(function () {

	var IOP = window.location.origin + '/jw';
	
	if(($('#FormAction').val()!="EOF")&&($('#FormAction').val()!="EOFM"))
	{
		$("#ViewBtn").hide()
	}
	if($("#FormAction").val()!="My Liabilities")
	{
	$('.fixed-action-btn').hide();
	}
if($('#FormAction').val() =="PO"){
	$("#BTNInbox1").trigger("click");
	
}
else if($('#FormAction').val() =="Calender"){
	$('#DownloadBtn').show();
	
	$("#BTNInbox7").trigger("click");
	
	var Cnt=0
	var Amt=0
	var op= UI_IntrData($('#CpmCd').val(),"All",$('#PrcsID').val()+'|'+$('#PrMs2').val(),"","","SCF_SFEPLimitListingCNT",'INTR1');
		if($(op).find('Cnt').text()=='')
			 {
			Cnt =0
			Amt= 0
			 }
			 else
			 {
			 Cnt =$(op).find('Cnt').text()
			Amt= $(op).find('TotAmt').text()
			 }
	$("#NoofIns").text(Cnt);
	$("#TotAmt").text(CURCommaSep(Amt));
	
}
else if($('#FormAction').val()=="Invce")
{
	$("#BTNInbox2").trigger("click");
	
	var Cnt=0
	var Amt=0
	var op= UI_getdata($('#PrcsID').val(),"","","","","SCF_sREGMyAccptDtlCNT");
		if($(op).find('Cnt').text()=='')
			 {
			Cnt =0
			Amt= 0
			 }
			 else
			 {
			 Cnt =$(op).find('Cnt').text()
			Amt= $(op).find('TotAmt').text()
			 }
	$("#NoofIns").text(Cnt);
	$("#TotAmt").text(CURCommaSep(Amt));
}
else if($('#FormAction').val()=="EOF"){
	$("#BTNInbox3").trigger("click");
	var Cnt=0
	var Amt=0
	var op= UI_getdata($('#PrcsID').val(),"","","","","SCF_sGetEOFDtlCnt");
		if($(op).find('Cnt').text()=='')
			 {
			Cnt =0
			Amt= 0
			 }
			 else
			 {
			 Cnt =$(op).find('Cnt').text()
			Amt= $(op).find('TotAmt').text()
			 }
	$("#NoofIns").text(Cnt);
	$("#TotAmt").text(CURCommaSep(Amt));
}
else if($('#FormAction').val()=="FinlView"){
	$("#BTNInbox4").trigger("click");
}
else if($('#FormAction').val()=="FinlView1"){
	$("#BTNInbox6").trigger("click");
	var Cnt=0
	var Amt=0
	var op= UI_getdata($('#PrcsID').val(),"","","","","SCF_sGetEOFMyAccptDtlCNT");
		if($(op).find('Cnt').text()=='')
			 {
			Cnt =0
			Amt= 0
			 }
			 else
			 {
			 Cnt =$(op).find('Cnt').text()
			Amt= $(op).find('TotAmt').text()
			 }
	$("#NoofIns").text(Cnt);
	$("#TotAmt").text(CURCommaSep(Amt));
}
else if($('#FormAction').val()=="EOFM"){
	$("#BTNInbox5").trigger("click");
}



else{
	$('#DownloadBtn').show();
	$("#BTNInbox").trigger("click");
	
		var Cnt=0
		var Amt=0
	
	 var op= UI_IntrData("","","","","","SCF_sFEPGetRepayMntBtchDetl",'INTR1');
	//$("#PrgmNme").text($(op).find('PrgrmNme').text());
	//$("#BtchId").text($(op).find('BtchId').text());
	//$("#NoofIns").text($(op).find('Cnt').text());
	//$("#TotAmt").text($(op).find('TotAmt').text());
		
		if($(op).find('Cnt').text()=='')
			 {
			Cnt =0
			Amt= 0
			 }
			 else
			 {
			 Cnt =$(op).find('Cnt').text()
			Amt= $(op).find('TotAmt').text()
			 }
	$("#NoofIns").text(Cnt);
	$("#TotAmt").text(CURCommaSep(Amt));
}
 
 
 
$('.ChkdRow').click(function () {
		
		var InvcNo=$(this).closest('tr').find('td:eq('+$($('th:contains("Instrument Ref")')[0]).index()+')').text();
		var Actn='';
			var Cnt=0
		var Amt=0
		
		if($(this).prop("checked")==false)
		{
		Actn='UNCHK';
		}
		if($(this).prop("checked")==true)
		{
		Actn='CHK';
		}
		
		var op= UI_IntrData("",Actn,"",InvcNo,"","SCF_sFEPGetRepayMntBtchDetl",'INTR1');
			 
			 
			 if($(op).find('Cnt').text()=='')
			 {
			Cnt =0
			Amt= 0
			 }
			 else
			 {
			 Cnt =$(op).find('Cnt').text()
			Amt= $(op).find('TotAmt').text()
			 }
	$("#NoofIns").text(Cnt);
	$("#TotAmt").text(CURCommaSep(Amt));

 });
 $(document).on('click', '.BtnPrcs', function () {
	 var Actnval=$(this).val();
  var PrcsVal=$(this).attr('id');
 	var IOP=window.location.origin;

	var activityID=$('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	var PrcsID= $('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("ProcessID")')[0]).index()+')').text();
    var AppID = $('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("mode")')[0]).index()+')').text();
     var FormColor = $(window.parent.parent.document).find("#FormColor").val();
	 var PrgmId = $('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("Program ID")')[0]).index()+')').text();
	 var ReqCmpny = $('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("Request Company")')[0]).index()+')').text();
	 var CorpCde = $('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("CorpCde")')[0]).index()+')').text();
	 var PrgmName = $('#INBXHDR').text()//+' : Batch No/Program ID - '+$('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("Batch ID")')[0]).index()+')').text()+"/"+$('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("Program ID")')[0]).index()+')').text();
	 
	 var FormAction=$(this).attr('name')
	  if(Actnval=='View')
{
var FormColor1=$(window.parent.parent.document).find("#FormColor").val();
var FormName1= $(window.parent.parent.document).find("#FormName").val();
var FormAction1= 'FinlView';
if(FormName1 == "My Accepted Receivables - Eligible For Finance")
{
	var FormAction1= 'FinlView1';
}

 
 var Mnuid="30j";
 var RedirectURL = IOP+"/TPLSW/GetNextNavAction?MnuID="+Mnuid+"&Action=View&PrcsID="+PrcsID+"&ActvID="+activityID+"&FormColor="+FormColor1+"&FormAction="+FormAction1+"&FormName="+PrgmName+"&PrMs1="+PrgmName;
 $(location).attr('href',RedirectURL);
}
 });
 
 
 
$('.assignmentComplete').click(function () {
 
 
alert ('Payment done!!')
			
 });
});


