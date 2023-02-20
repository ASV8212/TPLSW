




$(document).ready(function () {

	var IOP = window.location.origin + '/jw';


	///$("#FSN").click();
	
	if($(window.parent.document).find("#NxAction").val()=='New')
	{
	InitWFPrcs('RINV')
	}
	
	GetDrpDwnVal();
	GetMenuDrpDwnVal();
	AppndCmpnyUsr();

	
	var opxml = UI_getdata($(window.parent.parent.document).find("#CpmCd").val(),"","","","","SCF_sChkCmpyExstLvlHdr")
	if($(opxml).find("Result").text()=="New")
	{
	$("#BTNREIVsuance").trigger("click");
	}
	else
	{
		$("#BTNREIVsuance1").trigger("click");
	}
	$("#RMLH_CmpnyCde").val($(window.parent.parent.document).find("#CpmCd").val());
	$("#RMLH_CrBy").val(GetCurrentUser());

	$('.assignmentComplete').click(function () {
	
	
	if($("#RMLH_MenuName").val()=="")
	{
	alert("Choose Menu");
	return
	}
	
	if($("#RMLH_LvlName").val()=="")
	{
	alert("Choose Level");
	return
	}
	
	
		 /**
		 var RINV_PoInvceDetl = Gridsubmitdata("Table2");
	         AssignGridXmltoField("RINV_PoInvceDetl", RINV_PoInvceDetl);
		 
		 var BTNName=$(this).find('a').attr('data-original-title');
		 
		 if($('main').attr('class')=='REGINVPAY')
		 {
		 BTNName='Approve';
		 }
		 
		 	 
		 if($("#RINV_BatchId").val()=="")
		 {
		 var op= UI_getdata("BATCH","","Yes","","","Sam_sGetBTCHSeqID")
		 
		 $("#RINV_BatchId").val($(op).find('Val3').text());
		 }
		 
		 
		 var tablenameins = "LSW_tRegInvce";
                var subChk = FormDataToDB(tablenameins);
				

				
				var op= UI_getdata($("#RINV_PrcsID").val(),"","","","","SCF_sGetCopcodeVal")
				
				var USR=UI_IntrData($("#RINV_PrgID").val(),$(window.parent.parent.document).find("#CpmCd").val(),"",op,"","SCF_FEPPickWFVar","INTR1")
				//USR=$(USR).find('WFUsr').text()
				
				var RtnVal=	CmpleteWFPrcs('RINV',BTNName,USR)
			
		
		
		
		
			if(RtnVal=='Success'&&BTNName=='Approve')
			{
			UI_getdata($("#RINV_PrcsID").val(),"","","","","SCF_SRegFinlINS")
			}
			if(RtnVal=='Success'&&BTNName=='Reject')
			{
			UI_getdata($("#RINV_PrcsID").val(),"","","","","SCF_SRegFinlINS")
			}
			if(RtnVal=='Success')
			{
			$(".fa-home").click();
			}
**/
		var xml = submitdata("SRCH");
		 var GrdDtl = Gridsubmitdata("Table2");
		 var op = UI_getdata(GrdDtl,xml,"","","","SCF_sWFRcmDtlIns");
		 if($(op).find("Result").text()=="Success")
		 {
			 alert('Success');
		 }
		 else
		 {
			 alert('Failed');
		 }
		 
	});

 
});


