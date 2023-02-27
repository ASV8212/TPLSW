$(document).ready(function () {
	FncallDocChkLst(this,'Table2',{spname:'LSW_SMYAPPLNDEV',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$("#LogUsr").val(),brid:$(".FormPageTab li.active").attr("id"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5,8,9,10,11,12,13,14,15,16,17,18','MNGDEV');

	//$(".OTCSTATUS").on('click', function() {
		$(document).on("click", ".OTCSTATUS", function() {
    	var Val = "";
    	
    	/*if($(this).closest('.tbodytrtd').prev().find('input').val()==""){
    		alert("Kindly fill Remarks");
    		return;
    	}*/
    	var actid = "";
    	if(this.text=="Reject")
    		{
    		Val="Rejected"
			if($($(this).closest(".tbodytr").find(".tbodytrtd")[$("#Table2").find("thead th:contains('Deviation Desc')").index()]).text().includes("RCU Flow "))
			{
			var op_chk = UI_getdata($($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('DEVT_PRCSID')").index()]).text(),"","","","","LSW_SCHECKANYACTIVEUSR");
			if($(op_chk).find("RESULT").text() != "")
			{
				alert($(op_chk).find("RESULT").text());
				return;
			}
			else{
				actid = $(op_chk).find("TOP1ACTID").text()
			}
			}
    		}
    	else if(this.text=="Approve")
    		{
    		Val="Approved"
    		
    		}
    	else{
    		Val=this.text
    	}
    	$(this).closest('span').find('input').val(Val);
    	$(this).closest('span').find('div').hide()
    	$(this).closest('span').find('input').show();
    	var op = UI_getdata($($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('DEVT_PRCSID')").index()]).text(),$($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('DEVIATION RAISEDBY')").index()]).text(),$($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('DEVT_EXTRPARAM4')").index()]).text(),$($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('REMARKS')").index()]).find('input').val(),this.text,"LSW_SONDEVAUTHR");
    	if($(op).find("RESULT").text()=="Success")
    		{
				if(this.text=="Approve"){
				alert("Deviation Approved")
				}
				else if(this.text=="Reject"){
				alert("Deviation Rejected")
				var WFACTVINIT = WFActvInit(actid,$($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('DEVT_PRCSID')").index()]).text()+"|Cancelled|Vendor||ADMIN","LSW_SWFACTVINITCALL");
				if(WFACTVINIT != "Success")
						   {
						   alert("File Assignment Failed");
						   return
						   }
					   else{
							UI_getdata($($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('DEVT_PRCSID')").index()]).text(),"","","","","LSW_STERMINATEEXACT");
						   alert("Application has been Rejected");
					   }
				
				}
			FncallDocChkLst(this,'Table2',{spname:'LSW_SMYAPPLNDEV',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$("#LogUsr").val(),brid:$(".FormPageTab li.active").attr("id"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5,8,9,10,11,12,13,14,15,16,17,18','MNGDEV');
    		//FncallDocChkLst(this,'Table2',{spname:'LSW_SMYAPPLNDEV',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$("#LogUsr").val(),brid:$(".FormPageTab li.active").attr("id"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||2,5,6,7,8,9,10,11,12,13,14,15','MNGDEV');
    		}
    	else if($(op).find("RESULT").text()!="Success")
    		{
    		alert($(op).find("RESULT").text())
    		}
    	

    });

});


 


