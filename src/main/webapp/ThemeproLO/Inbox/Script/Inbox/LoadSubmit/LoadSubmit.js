$(document).ready(function () {

	var IOP = window.location.origin + '/jw';
	
		
	//	$("#30a").trigger("click");
		
$(document).on('click', '.BtnPrcs', function () {


if($('#Table1 tbody').find('.selected').length==0)
{
alert("Select a Record to " + $(this).text() );
return;
}


  //$('#btn-one').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Loading...').addClass('disabled');

 var Actnval=$(this).val();
  var PrcsVal=$('#Table1 tbody').find('.selected').closest('tr').find('input[type="button"][value='+Actnval+']').attr('id');
 	var IOP=window.location.origin;

	var activityID=$('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	var PrcsID= $('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("ProcessID")')[0]).index()+')').text();
    var AppID = $('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("mode")')[0]).index()+')').text();
     var FormColor = $(window.parent.parent.document).find("#FormColor").val();
	 var PrgmId = $('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("Program ID")')[0]).index()+')').text();
	 var ReqCmpny =$('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("Request Company")')[0]).index()+')').text();
	 var CorpCde = $('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("CorpCde")')[0]).index()+')').text();
	 var MnuId = $('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("MnuId")')[0]).index()+')').text();
	 var BatchID = $('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("Batch ID")')[0]).index()+')').text();
		 
	 var Hdr = $(".collapsible-body li.active a").attr("value");
	 var PrgmName = $('#INBXHDR').text()//+' : Batch No/Program ID - '+$('#Table1 tbody').find('.selected').closest('tr').find('td:eq('+$($('th:contains("Batch ID")')[0]).index()+')').text()+'/'+PrgmId;
	
	 
	 var USR="";
	  var ApprFlg="";
var BoCkrFlg="";
var asyncFlg="";
var FnlFlg="";
	 
	 if(MnuId=="30g")
	 {
	 Hdr="As Seller";
	 }
	 
	 
	 $("#MnuId").val(MnuId)
	 var FormAction=$('#Table1 tbody').find('.selected').closest('tr').find('input[type="button"][value='+Actnval+']').attr('name')
	 
	  var Vald="";
	
	 
if(Actnval=='Reject')  
{
PrcsVal=$('#Table1 tbody').find('.selected').closest('tr').find('input[type="button"][value=Accept]').attr('id');

if(PrcsVal == null)
{
PrcsVal="|"
}

if(PrcsVal.split('|')[0]=='New')
{
var Rtnval=ChckrInitWFPrcs();

if(Rtnval=='Success')
{

var op= UI_getdata($("#PrcsID").val(),$("#ActivityID").val(),PrcsID,$(window.parent.parent.document).find("#CpmCd").val(),"","SCF_SUpdateWFPrcsVal")

PrcsID=$("#PrcsID").val()
activityID=$("#ActivityID").val()
var BTNName="Reject"
WfUpdVal(PrcsID,ActvtyIdVal(PrcsID))
var RtnVal=	DrctCmpleteWFPrcs(PrcsID,activityID,BTNName+"|"+PrcsVal.split('|')[1],USR,PrgmId)	
RtnVal = DrctCmpleteWFlowPrcs(PrcsID,activityID,BTNName+"|"+PrcsVal.split('|')[1],USR,RtnVal)
alert("Rejected Batch No : "+BatchID);
location.reload();
}	 
}
else
{
var BTNName="Reject"
WfUpdVal(PrcsID,ActvtyIdVal(PrcsID))
var RtnVal=	DrctCmpleteWFPrcs(PrcsID,activityID,BTNName+"|"+PrcsVal.split('|')[1],USR,PrgmId)	
RtnVal = DrctCmpleteWFlowPrcs(PrcsID,activityID,BTNName+"|"+PrcsVal.split('|')[1],USR,RtnVal)
alert("Rejected Batch No : "+BatchID);
location.reload();  
}	 	 
} 
	 
	 
	 
	 
	 
	 
	
  if(Actnval=='View')
{
 
 if(PrcsVal!= undefined)
 {
 if(PrcsVal!= "")
 {
 if(PrcsVal.split('|')[0]=='New')
{
var Rtnval=ChckrInitWFPrcs();

if(Rtnval=='Success')
{

var op= UI_getdata($("#PrcsID").val(),$("#ActivityID").val(),PrcsID,$(window.parent.parent.document).find("#CpmCd").val(),"","SCF_SUpdateWFPrcsVal")

PrcsID=$("#PrcsID").val()
activityID=$("#ActivityID").val()
}
}
}
}

 var RedirectURL = IOP+"/TPLSW/GetNextNavAction?MnuID="+AppID+"&Action=View&PrcsID="+PrcsID+"&ActvID="+activityID+"&FormColor="+FormColor+"&FormAction="+FormAction+"&PrMs1="+PrgmName+"&PrMs2="+Hdr+"&PrMs6="
 +PrgmId+"&PrMs7="+ReqCmpny+"&PrMs8="+PrcsVal+"&PrMs3="+MnuId
 $(location).attr('href',RedirectURL);


}
if(Actnval=='Accept')  
{
//var BTNName='Approve'

if(PrcsVal.split('|')[0]=='New')
{


var Rtnval=ChckrInitWFPrcs();

if(Rtnval=='Success')
{

var op= UI_getdata($("#PrcsID").val(),$("#ActivityID").val(),PrcsID,$(window.parent.parent.document).find("#CpmCd").val(),"","SCF_SUpdateWFPrcsVal")

PrcsID=$("#PrcsID").val()
activityID=$("#ActivityID").val()
var BTNName="Submit"

  Vald=AutoValidate(PrcsID,PrgmId)
	 
	 




if(Vald.split('|')[0]=='Success')
 {

if(PrcsVal.split('|')[1]=='Checker')
{
 var op= UI_getdata(PrcsID,$(window.parent.parent.document).find("#CpmCd").val(),"","","","SCF_sGetCopcodeValChkr")
 USR=UI_IntrData(PrgmId,ReqCmpny,"",op,BatchID,"SCF_FEPPickWFVar","INTR1")
 


}
 if(PrcsVal.split('|')[1]=='Maker')
{
var op= UI_getdata(PrcsID,$(window.parent.parent.document).find("#CpmCd").val(),"","","","SCF_sGetCopcodeVal")
 USR=UI_IntrData(PrgmId,$(window.parent.parent.document).find("#CpmCd").val(),"",op,BatchID,"SCF_FEPPickWFVar","INTR1")

}
 
var RtnVal=	DrctCmpleteWFPrcs(PrcsID,activityID,BTNName+"|"+PrcsVal.split('|')[1],USR,PrgmId)
var Chk =RtnVal.split('|')[1]
var Pstng=$(RtnVal).find('Pstng').html();
var FNCKR=$(RtnVal).find('FNCKR').text();
	}
else
{
var confrm=confirm("No of Instrument failed: "+Vald.split('|')[1]);
    if (confrm==true) {	
	if(PrcsVal.split('|')[1]=='Checker')
{
 var op= UI_getdata(PrcsID,$(window.parent.parent.document).find("#CpmCd").val(),"","","","SCF_sGetCopcodeValChkr")
 USR=UI_IntrData(PrgmId,ReqCmpny,"",op,BatchID,"SCF_FEPPickWFVar","INTR1")
 


}
 if(PrcsVal.split('|')[1]=='Maker')
{
var op= UI_getdata(PrcsID,$(window.parent.parent.document).find("#CpmCd").val(),"","","","SCF_sGetCopcodeVal")
 USR=UI_IntrData(PrgmId,$(window.parent.parent.document).find("#CpmCd").val(),"",op,BatchID,"SCF_FEPPickWFVar","INTR1")

}
 
var RtnVal=	DrctCmpleteWFPrcs(PrcsID,activityID,BTNName+"|"+PrcsVal.split('|')[1],USR,PrgmId)
var Chk =RtnVal.split('|')[1]
var Pstng=$(RtnVal).find('Pstng').html();
var FNCKR=$(RtnVal).find('FNCKR').text();
	}
	else {
      return
    }
}


if($(Pstng).length>=1)	
{	
if(FNCKR=='Yes')
{
ApprFlg="Approve";
BoCkrFlg="Yes"
asyncFlg=false;
}
else
{
ApprFlg="Approve";
BoCkrFlg="";
asyncFlg=true;
}



		//if(Chk=='Success' && $(Pstng).find('CorpCde').text()!='')
			if($(Pstng).find('CorpCde').text()!='')
			{
				var op =UI_getdata(PrcsID,$("#LogUsr").val(),"","","","SCF_sGetXMLDataPOInvc");
				var op1= UI_IntrData("<Tab><Content>"+op+"</Content></Tab>",ApprFlg,$("#LogUsr").val(),PrcsID,Pstng,"SCF_SInsRegIns",'INTR1');
				if($(op1).find("result").text()=="success")
				{
					var IOP=window.location.origin+'/jw';
					var Username = GetCurrentUser();
					var param1=$('#INRG_PrgmID').val();
					var param2=$('#INRG_PrcsID').val();
					var param3=$('#INRG_BatchID').val();
					var param4=Username;
					var param5="";
					var op2="";
					$.ajax({

               //url: "/ThemePro_SCF/SCFInstrBatchExec",
               //data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5, spname2: "CORE_STACCTCREATION",spname: "SAM_sGetInstrCount" },
			url: "/TPLSW/DisbPostingCall",
			data: { param1: "", param2: PrcsID, param3: "200", param4: "", param5: BoCkrFlg,spname: "SAM_sGetInstrCount50",spname2: "CORE_STACCTCREATION",spname3: "LON_SREPAY_ALLOCATION_POSTING_POST_PRE",Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
	
			 
			   async: asyncFlg,
               //dataType: "json",
			   dataType: "text",
               type: 'POST',
               success: function(data)
			   {
			   
			    if(asyncFlg==false)
			   {
            	   	if(data=="WFSuccess")
					{
					RtnVal = DrctCmpleteWFlowPrcs(PrcsID,activityID,BTNName+"|"+PrcsVal.split('|')[1],USR,RtnVal)
					Chk=RtnVal.split('|')[1]
					if(Chk=='Success')
					{
					$(".fa-home").click();
					}
					if(Chk!='Success')
					{
					UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
					}
					ajaxindicatorstop();
					}
					else{
					alert("Checker Initiation failed")
					UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
					ajaxindicatorstop();
					}
				}
					
					//var OpResult=$(OP).find("Result").text();
			//Exec CORE_STACCTCREATION 'PRG000376','51845_InstrumentRegistration_INSREG','INSTR000005','Checker1',''
			//alert(OP+d.getTime());
			//if(data!="Fail")
			//{
				//	swal("Process "+param3+" about to end", "Please wait...", "success");
				
				
			//alertify.alert("Success - "+data+d.getTime());

			//}
			//else
			//{
				ajaxindicatorstop();
					//swal("Instrument Registration", "Submission Failed!", "failure");
			//}
							
							
							//ajaxindicatorstop();
					},
					
					failure:function(data)
					{
						//alertify.alert(LoadFrmXML("V0126"));
						ajaxindicatorstop();
						alert("Posting Failed")
						UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
							//	swal("Instrument Registration", "Submission Failed!", "error");
							//window.alert(LoadFrmXML("V0126"));
						OP="Fail";
						
						//ajaxindicatorstop();
					}
										  
					   
				   });
				   if(asyncFlg==true)
			   {
			   RtnVal = DrctCmpleteWFlowPrcs(PrcsID,activityID,BTNName+"|"+PrcsVal.split('|')[1],USR,RtnVal)
					Chk=RtnVal.split('|')[1]
					if(Chk=='Success')
					{
					$(".fa-home").click();
					}
					if(Chk!='Success')
					{
					UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
					}
					ajaxindicatorstop();
			   }
				}
				else
				{
					alert($(op1).find("result").text());
					UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
				}
				
				
		
			}
	}
	else{
		RtnVal = DrctCmpleteWFlowPrcs(PrcsID,activityID,BTNName+"|"+PrcsVal.split('|')[1],USR,RtnVal)
					Chk=RtnVal.split('|')[1]
	}

alert("Reference Batch No : "+BatchID);	
	location.reload();
}
}

else
{


 Vald=AutoValidate(PrcsID,PrgmId)
if(Vald.split('|')[0]=='Success')
 { 
	 
WfUpdVal(PrcsID,ActvtyIdVal(PrcsID))
var BTNName="Submit"


if(PrcsVal.split('|')[1]=='Checker')
{
 var op= UI_getdata(PrcsID,$(window.parent.parent.document).find("#CpmCd").val(),"","","","SCF_sGetCopcodeValChkr")
 USR=UI_IntrData(PrgmId,ReqCmpny,"",op,BatchID,"SCF_FEPPickWFVar","INTR1")

}
 if(PrcsVal.split('|')[1]=='Maker' || PrcsVal.split('|')[1]=='')
{
var op= UI_getdata(PrcsID,$(window.parent.parent.document).find("#CpmCd").val(),"","","","SCF_sGetCopcodeVal");
USR=UI_IntrData(PrgmId,$(window.parent.parent.document).find("#CpmCd").val(),"",op,BatchID,"SCF_FEPPickWFVar","INTR1")

}

 	
	var RtnVal=	DrctCmpleteWFPrcs(PrcsID,activityID,BTNName+"|"+PrcsVal.split('|')[1],USR,PrgmId)
var Chk =RtnVal.split('|')[1]
var Pstng=$(RtnVal).find('Pstng').html();
var FNCKR=$(RtnVal).find('FNCKR').text();
}
else
{
var confrm=confirm("No of Instrument failed: "+Vald.split('|')[1]);
    if (confrm==true) {	
WfUpdVal(PrcsID,ActvtyIdVal(PrcsID))
var BTNName="Submit"


if(PrcsVal.split('|')[1]=='Checker')
{
 var op= UI_getdata(PrcsID,$(window.parent.parent.document).find("#CpmCd").val(),"","","","SCF_sGetCopcodeValChkr")
 USR=UI_IntrData(PrgmId,ReqCmpny,"",op,BatchID,"SCF_FEPPickWFVar","INTR1")

}
 if(PrcsVal.split('|')[1]=='Maker' || PrcsVal.split('|')[1]=='')
{
var op= UI_getdata(PrcsID,$(window.parent.parent.document).find("#CpmCd").val(),"","","","SCF_sGetCopcodeVal");
 USR=UI_IntrData(PrgmId,$(window.parent.parent.document).find("#CpmCd").val(),"",op,BatchID,"SCF_FEPPickWFVar","INTR1")

}



	var RtnVal=	DrctCmpleteWFPrcs(PrcsID,activityID,BTNName+"|"+PrcsVal.split('|')[1],USR,PrgmId)
var Chk =RtnVal.split('|')[1]
var Pstng=$(RtnVal).find('Pstng').html();
var FNCKR=$(RtnVal).find('FNCKR').text();		
	}
else
{

 return
}
}







if($(Pstng).length>=1)	
{	
if(FNCKR=='Yes')
{
ApprFlg="Approve";
BoCkrFlg="Yes"
asyncFlg=false;
}
else
{
ApprFlg="Approve";
BoCkrFlg="";
asyncFlg=true;
}



		//if(Chk=='Success' && $(Pstng).find('CorpCde').text()!='')
			if($(Pstng).find('CorpCde').text()!='')
			{
				var op =UI_getdata(PrcsID,$("#LogUsr").val(),"","","","SCF_sGetXMLDataPOInvc");
				var op1= UI_IntrData("<Tab><Content>"+op+"</Content></Tab>",ApprFlg,$("#LogUsr").val(),PrcsID,Pstng,"SCF_SInsRegIns",'INTR1');
				if($(op1).find("result").text()=="success")
				{
					var IOP=window.location.origin+'/jw';
					var Username = GetCurrentUser();
					var param1=$('#INRG_PrgmID').val();
					var param2=$('#INRG_PrcsID').val();
					var param3=$('#INRG_BatchID').val();
					var param4=Username;
					var param5="";
					var op2="";
					$.ajax({

               //url: "/ThemePro_SCF/SCFInstrBatchExec",
               //data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5, spname2: "CORE_STACCTCREATION",spname: "SAM_sGetInstrCount" },
			url: "/TPLSW/DisbPostingCall",
			data: { param1: "", param2: PrcsID, param3: "200", param4: "", param5: BoCkrFlg,spname: "SAM_sGetInstrCount50",spname2: "CORE_STACCTCREATION",spname3: "LON_SREPAY_ALLOCATION_POSTING_POST_PRE",Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
	
			 
			   async: asyncFlg,
               //dataType: "json",
			   dataType: "text",
               type: 'POST',
               success: function(data)
			   {
			   
			    if(asyncFlg==false)
			   {
            	   	if(data=="WFSuccess")
					{
					RtnVal = DrctCmpleteWFlowPrcs(PrcsID,activityID,BTNName+"|"+PrcsVal.split('|')[1],USR,RtnVal)
					Chk=RtnVal.split('|')[1]
					if(Chk=='Success')
					{
					$(".fa-home").click();
					}
					if(Chk!='Success')
					{
					UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
					}
					ajaxindicatorstop();
					}
					else{
					alert("Checker Initiation failed")
					UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
					ajaxindicatorstop();
					}
				}
					
					//var OpResult=$(OP).find("Result").text();
			//Exec CORE_STACCTCREATION 'PRG000376','51845_InstrumentRegistration_INSREG','INSTR000005','Checker1',''
			//alert(OP+d.getTime());
			//if(data!="Fail")
			//{
				//	swal("Process "+param3+" about to end", "Please wait...", "success");
				
				
			//alertify.alert("Success - "+data+d.getTime());

			//}
			//else
			//{
				ajaxindicatorstop();
					//swal("Instrument Registration", "Submission Failed!", "failure");
			//}
							
							
							//ajaxindicatorstop();
					},
					
					failure:function(data)
					{
						//alertify.alert(LoadFrmXML("V0126"));
						ajaxindicatorstop();
						alert("Posting Failed")
						UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
								//swal("Instrument Registration", "Submission Failed!", "error");
							//window.alert(LoadFrmXML("V0126"));
						OP="Fail";
						
						//ajaxindicatorstop();
					}
										  
					   
				   });
				   if(asyncFlg==true)
			   {
			   RtnVal = DrctCmpleteWFlowPrcs(PrcsID,activityID,BTNName+"|"+PrcsVal.split('|')[1],USR,RtnVal)
					Chk=RtnVal.split('|')[1]
					
					if(Chk=='Success')
					{
					$(".fa-home").click();
					}
					if(Chk!='Success')
					{
					UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
					}
					ajaxindicatorstop();
			   }
				}
				else
				{
					alert($(op1).find("result").text());
					UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
				}
				
				
		
			}
	}
	else{
		RtnVal = DrctCmpleteWFlowPrcs(PrcsID,activityID,BTNName+"|"+PrcsVal.split('|')[1],USR,RtnVal)
					Chk=RtnVal.split('|')[1]
					if(Chk!='Success')
					{
					UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
					}
	}

alert("Reference Batch No : "+BatchID);	
	location.reload();

}



}
  
  
  
  if(Actnval=='Finance')  
{

var BTNName="Submit"
var RtnVal="";

var CTOFFTYM= UI_IntrData(PrgmId,"","","","","SCF_SFEPFNCCUTOFTYM","INTR1")	
	
if($(CTOFFTYM).find('Result').text()=="No" && Actnval=="Finance")
{
	alert($(CTOFFTYM).find('Msg').text());
	return;
}

Vald=AutoFINCValidate(PrcsID,PrgmId)


if(Vald.split('|')[0]=='Success')
{
 
WfUpdVal(PrcsID,ActvtyIdVal(PrcsID))

var op1= UI_getdata(PrcsID,$(window.parent.parent.document).find("#CpmCd").val(),"","","","SCF_sGetCopcodeVal")
 USR=UI_IntrData(PrgmId,$(window.parent.parent.document).find("#CpmCd").val(),"",op1,BatchID,"SCF_FEPPickWFVar","INTR1")



RtnVal=	DrctFINCCmpleteWFPrcs(PrcsID,activityID,BTNName+"|"+MnuId,USR)
	
var Chk =RtnVal.split('|')[1]
var Pstng=$(RtnVal).find('Pstng').html();

}

else
{
var confrm=confirm("No of Instrument failed: "+Vald.split('|')[1]);
    if (confrm==true) {	
	WfUpdVal(PrcsID,ActvtyIdVal(PrcsID))
	var op1= UI_getdata(PrcsID,$(window.parent.parent.document).find("#CpmCd").val(),"","","","SCF_sGetCopcodeVal")
 USR=UI_IntrData(PrgmId,$(window.parent.parent.document).find("#CpmCd").val(),"",op1,BatchID,"SCF_FEPPickWFVar","INTR1")

RtnVal=	DrctFINCCmpleteWFPrcs(PrcsID,activityID,BTNName+"|",USR)
	var Chk =RtnVal.split('|')[1]
var Pstng=$(RtnVal).find('Pstng').html();


	}
	else {
      return
    }
}
	
	if($(Pstng).length>=1)	
{


if($(USR).find('FC').text()=='Yes')
{
ApprFlg="Approve";
BoCkrFlg="Yes"
asyncFlg=false;
}
else
{
ApprFlg="Approve";
BoCkrFlg="";
asyncFlg=true;
}


		if( $(Pstng).find('CorpCde').text()!='')
			{
				var op =UI_getdata(PrcsID,$("#LogUsr").val(),"","","","SCF_sGetXMLDataFINCInvc");
				var op1= UI_IntrData("<Tab><Content>"+op+"</Content></Tab>",ApprFlg,$("#LogUsr").val(),PrcsID,Pstng,"SCF_SInsRegIns",'INTR1');
				if($(op1).find("result").text()=="success")
				{
					var IOP=window.location.origin+'/jw';
					var Username = GetCurrentUser();
					var param1=$('#INRG_PrgmID').val();
					var param2=$('#INRG_PrcsID').val();
					var param3=$('#INRG_BatchID').val();
					var param4=Username;
					var param5="";
					var op2="";
					$.ajax({

               //url: "/ThemePro_SCF/SCFInstrBatchExec",
               //data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5, spname2: "CORE_STACCTCREATION",spname: "SAM_sGetInstrCount" },
			url: "/TPLSW/DisbPostingCall",
			data: { param1: "", param2: PrcsID, param3: "200", param4: "", param5: BoCkrFlg,spname: "SAM_sGetInstrCount50",spname2: "CORE_STACCTCREATION",spname3: "LON_SREPAY_ALLOCATION_POSTING_POST_PRE" ,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	
			 
			   async: asyncFlg,
               //dataType: "json",
			   dataType: "text",
               type: 'POST',
               success: function(data)
			   {
			   if(asyncFlg==false)
			   {
            	   	if(data=="WFSuccess")
					{
					RtnVal = DrctFINCCmpleteWFlowPrcs(PrcsID,activityID,BTNName+"|",USR,RtnVal)
					Chk=RtnVal.split('|')[1];
					if(Chk=='Success')
					{
					$(".fa-home").click();
					}
					if(Chk!='Success')
					{
					UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
					}
					ajaxindicatorstop();
					}
					else{
					alert("Checker Initiation failed")
					UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
					ajaxindicatorstop();
					}
				}
					//var OpResult=$(OP).find("Result").text();
			//Exec CORE_STACCTCREATION 'PRG000376','51845_InstrumentRegistration_INSREG','INSTR000005','Checker1',''
			//alert(OP+d.getTime());
			//if(data!="Fail")
			//{
					//swal("Process "+param3+" about to end", "Please wait...", "success");
				
				
			//alertify.alert("Success - "+data+d.getTime());

			//}
			//else
			//{
				//ajaxindicatorstop();
					//swal("Instrument Registration", "Submission Failed!", "failure");
			//}
							
							
							//ajaxindicatorstop();
					},
					
					failure:function(data)
					{
						//alertify.alert(LoadFrmXML("V0126"));
						ajaxindicatorstop();
						alert("Posting Failed")
						UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
								//swal("Instrument Registration", "Submission Failed!", "error");
							//window.alert(LoadFrmXML("V0126"));
						OP="Fail";
						
						//ajaxindicatorstop();
					}
										  
					   
				   });
				   
				    if(asyncFlg==true)
			   {
					RtnVal = DrctFINCCmpleteWFlowPrcs(PrcsID,activityID,BTNName+"|",USR,RtnVal)
					Chk=RtnVal.split('|')[1];
					if(Chk=='Success')
					{
					$(".fa-home").click();
					}
					
					if(Chk!='Success')
					{
					UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
					}
					ajaxindicatorstop();
					
				}
				   
				   
				}
				else
				{
					alert($(op1).find("result").text());
					UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
				}
				
				
		
			}
	}
	else
	{
		RtnVal = DrctFINCCmpleteWFlowPrcs(PrcsID,activityID,BTNName+"|",USR,RtnVal)
					Chk=RtnVal.split('|')[1]
			if(Chk!='Success')
			{
			UI_getdata(PrcsID,"","","","","SCF_SREUpdEXcptnBtch");
			}
	}
	alert("Reference Batch No : "+BatchID);	
	location.reload();
}
  
  
  
  
  });

  var Len = $('.cnt').length
	var munid = '';
	for(var i=0;i<Len;i++)
	{
		munid=munid+$($('.cnt')[i]).attr('name')+',';
	}
	var Menu = UI_getdata(munid,GetCurrentUser(),$(window.parent.parent.document).find("#CpmCd").val(),"","","SCF_sGetPndngBbl");
	var munid1 = $(Menu).find('MnuID').length
	for(var j=0;j<munid1;j++)
	{
	$('.'+$($(Menu).find('MnuID')[j]).text()).find('span').text($($(Menu).find('CNT')[j]).text())
	}


});

