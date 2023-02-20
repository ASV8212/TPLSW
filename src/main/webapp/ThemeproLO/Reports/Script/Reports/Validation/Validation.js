function GenerateReport(){
	/*var BatchID = $('#QTRA_BatchID').val();
	var IOP=window.location.origin;
	var RedirectURL ="/Birt/frameset?__report=report/CSCF/SCF_FInstrRegisTransaction.rptdesign&__format=html&__pageoverflow=1&__overwrite=false";
	RedirectURL = RedirectURL+"&param1="+BatchID;
	$('#ReportIframe').prop('src', RedirectURL);
	*/
	FncallModPageGridLrgData(this,'Table2',{spname:'SCF_sGetRepayStateGrid',Param:$('#QTRA_BatchID').val(),brid:'',MnuId:''},{0:$(''),1:$('')});
}
//GridRerun
//GridComp
 $(document).on('click', '#GridRerun', function () {
	 
	ajaxindicatorstart("Please wait...");

	var param2 = $(this).closest('tr').find('td')[3].innerHTML;

	$.ajax({

               //url: "/ThemePro_SCF/SCFInstrBatchExec",
               //data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5, spname2: "CORE_STACCTCREATION",spname: "SAM_sGetInstrCount" },
			url: "/TestThread/SCFInstrBatchExec",
			data: { param1: "", param2: param2, param3: "200", param4: "", param5: "",spname: "SAM_sGetRepayCount50",spname2: "CORE_STBulkRepaymentPosting",Prvnt:$(window.parent.parent.parent.parent.document).find("#Prvnt").val() },
			dataType: "text",
            type: 'POST',
            success: function(data)
			{
				ajaxindicatorstop();
				swal("Repayment", "Submitted Successfully!", "success");
            },
          	failure:function(data)
            {
				ajaxindicatorstop();
				swal("Repayment", "Submission Failed!", "error");
				OP="Fail";
			}
                                  
    });
	ajaxindicatorstop();
 });
 
 
 function AutoValidate(PRCSID,PRGMID)
{

var RTNVAL="";
	ajaxindicatorstart("Generating, Please wait...");
	var opxml= UI_getdata(PRCSID,"","","","","SCF_sGetFINCPostINPT");
	var op1= UI_IntrData(PRCSID,opxml,"","Invoice",PRGMID,"LSW_SFEPInstrmntExcelUpload",'INTR1');
	//if($(op1).find("Result").text() =="Success")
	//{
	//var op2= UI_IntrData($("#RINV_PrcsID").val(),"","","","","SCF_sFEPValidateEligibilityGrid",'INTR1');
	var op3= UI_getdata(PRCSID,op1,"","","","SCF_sFINCInvcDtlUpdt");
	/*if($(op3).find("Result").text() =="Success")
	{
		FncallwebserviceGrid(this,'Table2',{spname:'SAM_SFetchGridData',Mode:'NOEDT|Medium',Param:$('#RINV_PrcsID').val()+'|'+$('#RINV_ActivityID').val(),brid:'LSW_tRegInvceDetl_Temp|LSW_tRegInvce',MnuId:'POIS_PoInvceDetl|'+$('#SubmitSuccess').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});
	}*/
	if($(op3).find("Result").text() !="Success")
	{
		RTNVAL=$(op3).find("Result").text()+'|'+$(op3).find("Fail").text()
	}
	else
	{
		RTNVAL=$(op3).find("Result").text()+'|'+$(op3).find("Fail").text()
	}
	//}
	
	
	ajaxindicatorstop();
return 	RTNVAL
	
}


function GetDrpDwnVal()
 {
	 var URLNAVCHK = UI_IntrData($(window.parent.document).find("#CpmCd").val(),"","","","","SCF_SFEPGetPrgName","INTR1")
	 var DrpVal=''
	 for ( i=0;i<$(URLNAVCHK).find('a').length;i++)
	 {
		DrpVal= '<option value='+$($(URLNAVCHK).find('a')[i]).find('PRGMID').text() +'>'+ $($(URLNAVCHK).find('a')[i]).find('PRGMNAME').text()+'</option>'
		 $("#RINV_PrgID").append(DrpVal)
	 }
 }
 
 function GetBusnsDt()
 {
	  var URLNAVCHK = UI_IntrData("","","","","","SCF_sGetBussDate","INTR1")
	  $("#REIV_ToDate").val($(URLNAVCHK).find("BussDt").text())
 }
 
 function OnChngeSetVal(FldVal,AssgnVal)
{
$("#"+AssgnVal).val($("#"+FldVal+" option[value='" + $( "#"+FldVal).val() + "']").text())
}


function CompareDateFields(startDate, endDate) {
    var end = endDate.id;
	var start = startDate.id;
    var startDate = startDate.value;
    //document.getElementById("#" +startDate).value;
    var endDate = endDate.value;
    //document.getElementById("#" + endDate).value;
    var one_day = 1000 * 60 * 60 * 24;
    var x = startDate.split("-");
    var y = endDate.split("-");
    var date1 = new Date(x[2], (x[1] - 1), x[0]);
    var date2 = new Date(y[2], (y[1] - 1), y[0])
    Diff = Math.ceil((date2.getTime() - date1.getTime()) / (one_day));
    if (Diff > 30) {
     //alertify.alert("End date is greater than Start Date");
   //window.alert(LoadFrmXML("V0130"));
if((start=='REIV_FrmDate')&&(end=='REIV_ToDate'))
{  
alert("From Date Should not be less than 30days from To Date"); 
document.getElementById(start).value = ""; 
return "No"; 
 }
    //return document.getElementById(end).value = "";
 }
 
 }
 
 function Download(){
	 var IOP = window.location.protocol+'//'+window.location.hostname+':'+LoadFrmXML("PT003");
	 /*var MndtChk=ChkMandatoryFields("Mndtry");
		if(MndtChk=="No")
		{
			return
		}
		else
		{*/
			var UserID = GetCurrentUser();
			var PrgmID = $('#RINV_PrgID').val();
			var AnchorID = '';
			var ExposureOn = 'CP';
			var Statement = '';
			var CounterPartyID = $(window.parent.document).find("#CpmCd").val();
			var fromDt = $('#REIV_FrmDate').val();
			var toDt = $('#REIV_ToDate').val();
			var Format = 'pdf';
			
			
			
			if(Format == "pdf")
			{
				var configXml = LoadFrmXML("RT044");
				//var Format = $("#RSOA_Format").val();
				var RedirectURL= configXml+"&__format="+Format+"&__pageoverflow=1&__overwrite=false";
				RedirectURL = IOP+RedirectURL+"&Param1="+PrgmID+"&Param2="+AnchorID+"&Param3="+ExposureOn+"&Param4="+Statement+"&Param5="+CounterPartyID+"&Param6="+fromDt+"&Param7="+toDt+"&UserID="+UserID;
				
				//WintabsCtrl(RedirectURL,'SOA','','yes');
				var link = document.createElement("a");
				link.download = 'Report';
				link.href = RedirectURL;
				link.target='_blank';
				link.click();
			}
		//}
 }