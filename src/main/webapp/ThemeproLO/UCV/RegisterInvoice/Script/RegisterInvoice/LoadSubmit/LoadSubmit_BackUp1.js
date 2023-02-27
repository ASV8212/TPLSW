




$(document).ready(function () {

	var IOP = window.location.origin + '/jw';


	///$("#FSN").click();
	
	if($(window.parent.document).find("#NxAction").val()=='New')
	{
	InitWFPrcs('RINV')
	}
	
	GetDrpDwnVal()
	FormDataFromDB("LSW_tRegInvce", "RINV_", "RINV", "");
	
	UI_getdata($('#RINV_PrcsID').val(),"","","","","SCF_sRegInvcMnToTmp")
	
	 
	//	WfUpdVal($("#POIS_PrcsID").val(),ActvtyIdVal($("#POIS_PrcsID").val()))
	OnChngeSetVal('RINV_PrgID','RINV_PrgName')
	if($('#RINV_POIssuType').val()=="Manual"){
		$('#Validate1').show();
		$('.RINV_POIssuType_file').hide();
	}
	else if($('#RINV_POIssuType').val()=="Upload"){
		$('.RINV_POIssuType_file').show();
		$('#Validate1').hide();
	}
	
	
	$("#BTNREIVsuance").trigger("click");

	$('.assignmentComplete').click(function () {
	
	 var BTNName=$(this).find('a').attr('data-original-title');
	if(BTNName=='Save')
	{
	
	 if($("#RINV_BatchId").val()=="")
		 {
		 
		 if($("#MnuId").val()=='30g')
		 {
		 var op= UI_getdata("INVCPAY","","Yes","","","Sam_sGetBTCHSeqID")
		 }
		 else
		 {
		 var op= UI_getdata("BATCH","","Yes","","","Sam_sGetBTCHSeqID")
		 }
		 $("#RINV_BatchId").val($(op).find('Val3').text());
		 }
		 
		 
		 //var tablenameins = "LSW_tRegInvce";
         //var subChk = FormDataToDB(tablenameins);
		 var RINV_PoInvceDetl = Gridsubmitdata("Table12");
	        // AssignGridXmltoField("RINV_PoInvceDetl", RINV_PoInvceDetl);
			var subChk = "";
			if( $("#RINV_POIssuType").val()=="Manual")
		  {
			subChk=UI_getdata(RINV_PoInvceDetl,'Manual',$("#RINV_PrcsID").val(),'','','SCF_sDataToTempRegInvc')
		  }
		  
		 var xml = submitdata("RINV");
		 var op= UI_getdata(xml,$('#RINV_PrcsID').val(),"","","","SCF_sRegInvcINS");
	
		alert("Reference Batch No : "+$("#RINV_BatchId").val());
		
		
			$(".fa-home").click();
		
	}
	
		else
		{
			if($('#ChkValdtCmplt').val()=='1')
		{
			var GridTblMndtryVal= GridTblMndtry("Table12");
    if (GridTblMndtryVal== "GridMandatory") {
           return;
        }
		 var RINV_PoInvceDetl = Gridsubmitdata("Table12");
	         AssignGridXmltoField("RINV_PoInvceDetl", RINV_PoInvceDetl);
		 
		
		 
		 if($('main').attr('class')=='REGINVPAY')
		 {
		 BTNName='Approve';
		 }
		 
		 	 
		 if($("#RINV_BatchId").val()=="")
		 {
		 
		 if($("#MnuId").val()=='30g')
		 {
		 var op= UI_getdata("INVCPAY","","Yes","","","Sam_sGetBTCHSeqID")
		 }
		 else
		 {
		 var op= UI_getdata("BATCH","","Yes","","","Sam_sGetBTCHSeqID")
		 }
		 $("#RINV_BatchId").val($(op).find('Val3').text());
		 }
		 
		 
		 //var tablenameins = "LSW_tRegInvce";
                //var subChk = FormDataToDB(tablenameins);
				
				var xml = submitdata("RINV");
				var op11= UI_getdata(xml,$('#RINV_PrcsID').val(),"","","","SCF_sRegInvcINS");

				
				var op= UI_getdata($("#RINV_PrcsID").val(),"","","","","SCF_sGetCopcodeVal")
				
				var USR=UI_IntrData($("#RINV_PrgID").val(),$(window.parent.parent.document).find("#CpmCd").val(),"",op,$("#RINV_BatchId").val(),"SCF_FEPPickWFVar","INTR1")
				//USR=$(USR).find('WFUsr').text()
				
				var RtnVal=	CmpleteWFPrcs('RINV',BTNName,USR)
			var Pstng=RtnVal.split('|')[0]
			var PrcsID=$("#RINV_PrcsID").val();
			var Chk=RtnVal.split('|')[1]
			
							
if($(Pstng).length>=1)	
{
				var op =UI_getdata(PrcsID,$("#LogUsr").val(),"","","","SCF_sGetXMLDataPOInvc");
				var op1= UI_IntrData("<Tab><Content>"+op+"</Content></Tab>","Approve",$("#LogUsr").val(),PrcsID,Pstng,"SCF_SInsRegIns",'INTR1');
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
			data: { param1: "", param2: PrcsID, param3: "200", param4: "", param5: "",spname: "SAM_sGetInstrCount50",spname2: "CORE_STACCTCREATION",spname3: "LON_SREPAY_ALLOCATION_POSTING_POST_PRE" },
	
			 
			  // async: false,
               //dataType: "json",
			   dataType: "text",
               type: 'POST',
               success: function(data)
			   {
			   
            	   	OP=data.responseText;
					ajaxindicatorstop();

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
				ajaxindicatorstop();
					//swal("Instrument Registration", "Submission Failed!", "failure");
			//}
							
							
							//ajaxindicatorstop();
					},
					
					failure:function(data)
					{
						//alertify.alert(LoadFrmXML("V0126"));
						ajaxindicatorstop();
								//swal("Instrument Registration", "Submission Failed!", "error");
							//window.alert(LoadFrmXML("V0126"));
						OP="Fail";
						
						//ajaxindicatorstop();
					}
										  
					   
				   });
				}
				else
				{
					alert("Data not saved");
				}
				
				
		
			}
		
		
		alert("Reference Batch No : "+$("#RINV_BatchId").val());
		
			
			if(Chk=='Success')
			{
			$(".fa-home").click();
			}
		}
		else{
			alert('Click Validate');
		}
		 

		 }
	});

 
});


