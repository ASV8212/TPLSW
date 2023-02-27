var CusID123 ="";
var CusName123 ="";
var FirmID ="";
var FirmName ="";
$(document).ready(function () {
		var result=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKVIABILITYTAB");
	var chk=$(result).find("RESULT").text();
	 
	if(chk=='Y')	
	{
		$("#FormPageTab9").remove()
	}


	//$("#RACD_UNIQID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	//$("#RCCM_SCHEME").attr("value",$(".FormPageMultiTab li.active").text());
	$("#RACD_UNIQID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#RACD_REFNAME").val($(".FormPageMultiTab li.active a div").text())
	
	if($("#RACD_REFNAME").val().replace(" ","")==$("#RACD_UNIQID").val())
		{
		var CUSID = UI_getdata("RATIO","","Yes","","","Sam_sGetSeqID");
        $("#RACD_UNIQID").val($(CUSID).find("Val1").text());
        }
	GetCustomerName();
	GetFinclYr();
	
	var tbl = "LSW_TRATIOCOMPDETAILS"
	var prfx ="RACD"
	var DATA ="RACD_UNIQID"

	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
		
        var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETAPPLNAME")
        var APPLNAME=$(xml).find('CUSTNAME').text()
        var CUSID=$(xml).find('CUSID').text()
        //$("#RACD_COMPANY").val(APPLNAME) 
        $("#RACD_CUSID").val(CUSID) 
		$("#RACD_CUSNAME").val(APPLNAME) 
		
        
       // DATA = "RAT000120|RACD_UNIQID"
        	//$("#RACD_UNIQID").val('RAT000120');
			
 
   
    //$("#BTNFINCSUMMARY").click();
   
    $('input[id="Ratio"]').prop('checked', true);
  GetConslList();
	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	  GetEmploymentNameLoad();
	//$("#RACD_CUSID").val('C000401')
	  CheckDocType();
/*	  
	if($("#RACD_UNIQID").val() == "")
	{
		
		var CUSID = UI_getdata("RATIO","","Yes","","","Sam_sGetSeqID");
         $("#RACD_UNIQID").val($(CUSID).find("Val1").text());
    }	
	
*/
	
	var sel = $("#RACD_CMPNYID");
	sel.data("prev",sel.val());
	
    
    // $("#BTNFINCSUMMARY").click();
	
		if($("input:radio[name=RACD_TYP]:checked").val() !=undefined && $("input:radio[name=RACD_TYP]:checked").val()=="Consolidated"){
		if($("input:radio[name=RACD_TYP]:checked").val()=="Consolidated"){ //eql consolidate
			FncallDocChkLst(this,'Table4',{spname:'LSW_SGETROBALSHTGRID1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'BS|'+$('#RACD_UNIQID').val()+'|'+$("#RACD_UNIQID").val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5,6','RATIOBALSHEET');
			FncallDocChkLst(this,'Table3',{spname:'LSW_SGETROPROFLOSS1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'PL|'+$('#RACD_UNIQID').val()+'|'+$("#RACD_UNIQID").val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5,6','RATIOPROFITLOSS');
			
			FncallDocChkLst(this,'Table6',{spname:'LSW_SGETRATIOASSETS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'ASSETS|'+$('#RACD_UNIQID').val()+'|'+$("#RACD_UNIQID").val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5,6','BTNRATIOASSETS');
			
			$("#BTNFNBALSHT").click();
				$("#BTNFNCASHFLOW1").click();
			
			LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"PROFITABILITY RATIOS","PROFITRATIO","RAPRDBfields","LSW_SGETPROPBILITYRATIO");
			LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"COVERAGE RATIOS","COVERAGERATIO","RACODBfields","LSW_SGETCOVERAGERATIO");
			LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"ACTIVITY RATIOS","ACTIVITYRATIO","RAACDBfields","LSW_SGETACTIVITYRATIO");
			LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"SHORT TERM LIQUIDITY","SHORTTERMRATIO","RASTDBfields","LSW_SGETSHORTTERMRATIO");
			LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"OTHER RATIOS","OTHERRATIO","RAOTDBfields","LSW_SGETOTHERRATIO");
			LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"CASH FLOW","CASHFLOW","RACFDBfields","LSW_SGETCASHFLOW");
			
			
		}
		}
		else{
			$("#BTNRATIOBALSHEET").click();
			$("#BTNPROFITLOSS").click();
			$("#BTNFINCSUMMARY").click();
			$("#BTNRATIOASSETS").click();
			
			$("#BTNFNBALSHT").click();
				$("#BTNFNCASHFLOW1").click();
			
			//FncallDocChkLst(this,'Table5',{spname:'LSW_SGETROFINSMRY',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'FS|'+$('#RACD_CUSID').val()+'|'+$('#RACD_UNIQID').val(),MnuId:GetLatestFincSumYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1,5,6,7','FINCSUMMARY');
			
			LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"PROFITABILITY RATIOS","PROFITRATIO","RAPRDBfields","LSW_SGETPROPBILITYRATIO");
			LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"COVERAGE RATIOS","COVERAGERATIO","RACODBfields","LSW_SGETCOVERAGERATIO");
			LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"ACTIVITY RATIOS","ACTIVITYRATIO","RAACDBfields","LSW_SGETACTIVITYRATIO");
			LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"SHORT TERM LIQUIDITY","SHORTTERMRATIO","RASTDBfields","LSW_SGETSHORTTERMRATIO");
			LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"OTHER RATIOS","OTHERRATIO","RAOTDBfields","LSW_SGETOTHERRATIO");
			LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"CASH FLOW","CASHFLOW","RACFDBfields","LSW_SGETCASHFLOW");
			
		}
	
	
	var op = UI_getdata($("#RACD_FINYEAR").val(),"","","","","LSW_SSTNDRYR")
	$("#RACD_RADYEARI").val($(op).find("RACD_RADYEARI").text())
	$("#RACD_RADYEARII").val($(op).find("RACD_RADYEARII").text())
	$("#RAPR_REMARKS").val($(op).find("RAPR_REMARKS").text())
	
	profitlose('Load');
    HndlFirmOnLoad();
    
   //
    if(($(".admin-panel").find('.col-lg-12').find('ul li.active').not('.FormPageMultiTabAdd').prevAll().length>=2))
    	{
    	    $("#FirmHndlr").show();
    	}
		else
		{
			$("#FirmHndlr").hide();
		}
	if($('input[name="RACD_DOCUMTYPE"]').is(":checked")==false)
		{
		$(".UPDOC").hide();
		}
	
	var Ratio=$("#RACD_CONSRATIONAME").val()
	 var RatioVal=Ratio.split(",");
	 var row = $(RatioVal).length;
	 for (i=0;i<row;i++)
	 {
		 if(RatioVal[i] !="")
		 {
	   $("#RACD_Ratio  option:contains("+RatioVal[i]+")").attr("selected","selected")
	   //$("#RACD_Ratio option[value='"+RatioVal[i]+"']").attr("selected","selected")
		 }
	 }
	 
	 
	  if($("input:radio[name=RACD_TYP]:checked").val()=="Consolidated" || $("input:radio[name=RACD_TYP]:checked").val()=="Add Firm")
		 {
			 $($('input:radio[name=RACD_TYP]')[0]).attr('disabled',true)
		     $($('input:radio[name=RACD_TYP]')[1]).attr('disabled',true)
		 }
	
	$(document).on("click", ".DELETEDOCUMNETS" , function() {
		$(".DELETEDOCUMNETS").parent().hide();
		$(".DELETEDOCUMNETS").closest(".col-md-4").prev().find("table div").show();
		if($(".DELETEDOCUMNETS").closest(".col-md-4").prev().find("#RACD_PERFIOSATTACHUPLOAD").find("span").length == 0)
		{
			$(".DELETEDOCUMNETS").closest(".col-md-4").prev().find("#RACD_PERFIOSATTACHUPLOAD").append('<span class="name1">Upload Updated FSA File</span>');
		}
		$(".DELETEDOCUMNETS").closest(".col-md-4").prev().find(".name").remove();
		$("#RACD_PERFIOSATTACH").val('');
		$("#Save2").click();
	});
	
	$(document).on("change", "#RACD_Ratio" , function() {
		if($(event.srcElement).is('span')==false){
			if($(event.srcElement).prev().prop("checked")==false){
				
				/*if($(event.srcElement).closest('ul').find('input[type=checkbox]:checked').length>1){*/
					if($("#RACD_CONSLSTS").val()=="Consolidated"){
					UI_getdata($("#PrcsID").val(),$("#RACD_UNIQID").val(),"","","","LSW_SCLRPREVCONSLDTREC");
					
					$('.PROFITRATIO').empty();
					$(".COVERAGERATIO").empty();
					$(".ACTIVITYRATIO").empty();
					$('.SHORTTERMRATIO').empty();
					$('.OTHERRATIO').empty();
					$('.CASHFLOW').empty();
					
					FncallDocChkLst(this,'Table4',{spname:'LSW_SGETROBALSHTGRID1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'BS|'+$('#RACD_UNIQID').val()+'|'+$("#RACD_UNIQID").val(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','RATIOBALSHEET');
					FncallDocChkLst(this,'Table3',{spname:'LSW_SGETROPROFLOSS1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'PL|'+$('#RACD_UNIQID').val()+'|'+$("#RACD_UNIQID").val(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5,6','RATIOPROFITLOSS');
					
					
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"PROFITABILITY RATIOS","PROFITRATIO","RAPRDBfields","LSW_SGETPROPBILITYRATIO");
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"COVERAGE RATIOS","COVERAGERATIO","RACODBfields","LSW_SGETCOVERAGERATIO");
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"ACTIVITY RATIOS","ACTIVITYRATIO","RAACDBfields","LSW_SGETACTIVITYRATIO");
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"SHORT TERM LIQUIDITY","SHORTTERMRATIO","RASTDBfields","LSW_SGETSHORTTERMRATIO");
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"OTHER RATIOS","OTHERRATIO","RAOTDBfields","LSW_SGETOTHERRATIO");
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"CASH FLOW","CASHFLOW","RACFDBfields","LSW_SGETCASHFLOW");
					
					$("#RACD_CONSLSTS").val("NotConsolidated");
					$("#Save2").click();
					}
				//}
				/*else{
					alert("Atleast select two sheets to consolidate");
					$(event.srcElement).prev().prop( "checked", true ).click();
					return;
				}*/
			}
		}
		else if($(event.srcElement).is('span')==true){
			if($(event.srcElement).find('input[type=checkbox]').prop("checked")==false){
				
				//if($(event.srcElement).closest('ul').find('input[type=checkbox]:checked').length>1){
					if($("#RACD_CONSLSTS").val()=="Consolidated"){
					UI_getdata($("#PrcsID").val(),$("#RACD_UNIQID").val(),"","","","LSW_SCLRPREVCONSLDTREC");
					
					$('.PROFITRATIO').empty();
					$(".COVERAGERATIO").empty();
					$(".ACTIVITYRATIO").empty();
					$('.SHORTTERMRATIO').empty();
					$('.OTHERRATIO').empty();
					$('.CASHFLOW').empty();
					
					FncallDocChkLst(this,'Table4',{spname:'LSW_SGETROBALSHTGRID1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'BS|'+$('#RACD_UNIQID').val()+'|'+$("#RACD_UNIQID").val(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','RATIOBALSHEET');
					FncallDocChkLst(this,'Table3',{spname:'LSW_SGETROPROFLOSS1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'PL|'+$('#RACD_UNIQID').val()+'|'+$("#RACD_UNIQID").val(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5,6','RATIOPROFITLOSS');
					
					
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"PROFITABILITY RATIOS","PROFITRATIO","RAPRDBfields","LSW_SGETPROPBILITYRATIO");
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"COVERAGE RATIOS","COVERAGERATIO","RACODBfields","LSW_SGETCOVERAGERATIO");
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"ACTIVITY RATIOS","ACTIVITYRATIO","RAACDBfields","LSW_SGETACTIVITYRATIO");
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"SHORT TERM LIQUIDITY","SHORTTERMRATIO","RASTDBfields","LSW_SGETSHORTTERMRATIO");
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"OTHER RATIOS","OTHERRATIO","RAOTDBfields","LSW_SGETOTHERRATIO");
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"CASH FLOW","CASHFLOW","RACFDBfields","LSW_SGETCASHFLOW");
					
					$("#RACD_CONSLSTS").val("NotConsolidated");
					$("#Save2").click();
					}
				//}
				/*else{
					alert("Atleast select two sheets to consolidate");
					$(event.srcElement).find('input[type=checkbox]').prop("checked",true).click();
					return;
				}*/
			}
		}
	});
	
	
	$(document).on("click", ".DELETERATIO" , function() {

	 	var PrcsId=$(this).attr("data-tab").split("|")[0];
	 	var UNIQID=$(this).attr("data-tab").split("|")[1];
	 	PrcsId=$("#"+PrcsId).val();
	 	UNIQID=$("#"+UNIQID).val();
	 if(confirm('Delete Ratio Details') == true)
	 		{
	 		  var xml=UI_getdata(PrcsId,UNIQID,"","","","LSW_SCLEARRATIODETAILS");
	 		 
		 		 if($(".FormPageMultiTab li.active").prev().attr('id')==undefined&&$(".FormPageMultiTab li.active").next().attr('id')==undefined)
	 			{
                location.reload(true);
	 			}
		 		 else  if($(".FormPageMultiTab li.active").prev().attr('id')==undefined&&$(".FormPageMultiTab li.active").next().attr('id')=="")
	 		    {
		 	     location.reload(true);
	 		    }
	    	   else  if($(".FormPageMultiTab li.active").next().attr('id')!="")
		 	   {
		 		$(".FormPageMultiTab li.active").next().click()
		 	    }

	 		else
	 			{
	 			$(".FormPageMultiTab li.active").prev().click()
             	}
	 		 
	 		}
	 })
	
	if($("input:radio[name=RACD_TYP]:checked").val()!="Consolidated")
	{
	  var xml=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr('id'),"","","","LSW_SCHKIFRATIOCONSL")
	
	    if($(xml).find('RESULT').text()=="NOTALLOW")
     	{
	    	DSVLBLALL('')
			$('.mdb-select').attr('disabled',true);
			$('.FormPageMultiTabAdd').show();
	    }
	}
   if($("#DMY10").val().split("|")[2] == "N")
   {
	   $("#RACD_PERFIOSTEMPLATE").next().next().hide();
	   $("#RACD_PERFIOSTEMPLATE").next().text("FSA Template Not Yet Received From Perfios");
	   $("#RACD_PERFIOSTEMPLATE").next().css("color", "red");
   }
   else{
	   $("#RACD_PERFIOSTEMPLATE").val($("#DMY10").val().split("|")[3])
   }
  
  $('#BTNPROFITLOSE').on('click', function() {
	  if($("input:radio[name=RACD_TYP]:checked").val()=="Consolidated")
       {
	  //$("#RACD_FINYEAR").attr('disabled',true);
	  $('.RAIOYEAR').find('.select-dropdown').attr('disabled',true)
       }
  });
  
	  
	$('.FormSave').on('click', function() {
			if($("input:radio[name=RACD_TYP]:checked").val()!="Consolidated"){
				if($("#RACD_CMPNYID").val()==""){
					alert("Kindly choose Firm before save");
					return;
				}
			}
		
			/*if($('input[name=RACD_PROFIT]:checked').val()!="Financial Summary")
			{
				FncallDocChkLst(this,'Table5',{spname:'LSW_SGETROFINSMRYONCLICK',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'FS|'+$('#RACD_CUSID').val()+'|'+$('#RACD_UNIQID').val(),MnuId:$("#RACD_FINYEAR").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1,5,6,7','FINCSUMMARY');
			}*/
			
			if($(this).text() == "Save & Next")
			{
				
			var prfx = $(this).attr("data-aria").split("|")[1];
			var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields / Document(s)");
				return false;
				}
			if($("input[name=RACD_PROFIT]:checked").val() == 'Ratio Sheet')
				{
				var GrdMndtryChk=ChkGridMndtry("Table3","Profit and Loss A/C")
				if(GrdMndtryChk != "")
				{
				alert(GrdMndtryChk);
				return false;
				}
				}
			
			if($("input[name=RACD_PROFIT]:checked").val() == 'Financial Summary')
				{
				GrdMndtryChk=ChkGridMndtry("Table5","Financial Summary")
				if(GrdMndtryChk != "")
				{
				alert(GrdMndtryChk);
				return false;
				}
				}
			 
			
			}
			if($("#RACD_UNIQID").val() == "")
			{
				
				var CUSID = UI_getdata("RATIO","","Yes","","","Sam_sGetSeqID");
		         $("#RACD_UNIQID").val($(CUSID).find("Val1").text());
		    }	
			
			
				if($("#RACD_COMPANY").val()!="")
				{
			    $("#RACD_REFNAME").val($("#RACD_COMPANY").val())
				}
				
				
			var FormName=$(this).attr("data-form")

			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			
			var RACD_PROFITLOSSGRID = TxtGridsubmitdata_V1("Table3","RPLS_","RACD_");
			AssignGridXmltoField("RACD_PROFITLOSSGRID", RACD_PROFITLOSSGRID)
			var RACD_BALSHEETGRID = TxtGridsubmitdata_V1("Table4","RBSL_","RACD_");
			AssignGridXmltoField("RACD_BALSHEETGRID", RACD_BALSHEETGRID)
			
			var RACD_FINCSUMMGRID = TxtGridsubmitdata_V1("Table5","RFNS_","RACD_");
			AssignGridXmltoField("RACD_FINCSUMMGRID", RACD_FINCSUMMGRID)
			
			var RACD_ASSETSGRID = TxtGridsubmitdata_V1("Table6","RAAS_","RACD_");
			AssignGridXmltoField("RACD_ASSETSGRID", RACD_ASSETSGRID)
			
			var RACD_SUMBALSHTGRID = TxtGridsubmitdata_V1("Table7","RBAL_","RACD_");
			AssignGridXmltoField("RACD_SUMBALSHTGRID", RACD_SUMBALSHTGRID)
			
			var RACD_SUMCASHFLOW = TxtGridsubmitdata_V1("Table8","RCFL_","RACD_");
			AssignGridXmltoField("RACD_SUMCASHFLOW", RACD_SUMCASHFLOW)
			
			
		
			 var RACD_PROBIRADIOGRID = TxtGridsubmitdata_V2("PROFITRATIO","RAPR_","RACD_","RAPRDBfields"); 
	         AssignGridXmltoField("RACD_PROBIRADIOGRID", RACD_PROBIRADIOGRID)
	         
	         var RACD_COVERRADIOGRID = TxtGridsubmitdata_V2("COVERAGERATIO","RACO_","RACD_","RACODBfields"); 
	         AssignGridXmltoField("RACD_COVERRADIOGRID", RACD_COVERRADIOGRID)
			
	         var RACD_ACTIVIRADIOGRID = TxtGridsubmitdata_V2("ACTIVITYRATIO","RAAC_","RACD_","RAACDBfields"); 
	         AssignGridXmltoField("RACD_ACTIVIRADIOGRID", RACD_ACTIVIRADIOGRID)
	         
	         var RACD_SHORTTERMGRID = TxtGridsubmitdata_V2("SHORTTERMRATIO","RAST_","RACD_","RASTDBfields"); 
	         AssignGridXmltoField("RACD_SHORTTERMGRID", RACD_SHORTTERMGRID)
	         
	         var RACD_OTHERRADIOGRID = TxtGridsubmitdata_V2("OTHERRATIO","RAOT_","RACD_","RAOTDBfields"); 
	         AssignGridXmltoField("RACD_OTHERRADIOGRID", RACD_OTHERRADIOGRID)
			 
			 var RACD_CASHFLOWGRID = TxtGridsubmitdata_V2("CASHFLOW","RACF_","RACD_","RACFDBfields"); 
	         AssignGridXmltoField("RACD_CASHFLOWGRID", RACD_CASHFLOWGRID)
	         
	         
	         
	         
			var CHKresult=FormDataToDB(tbl,prfx,$("#RACD_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
	         if(CHKresult == "Fail")
		   		{
		   		  alert("Submission Failed");
		   		   return false;			
		   		}
	         //	FormDataToDB(tbl,prfx,$("#LEVD_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		 
			 $(".FormPageMultiTab li.active").attr("id",$("#RACD_UNIQID").val());
		 	 $(".FormPageMultiTab li.active").attr("title",$("#RACD_UNIQID").val());
			 
			 	if($("#RACD_COMPANY").val()!="")
			{
             $(".FormPageMultiTab li.active a div").text($("#RACD_REFNAME").val())
			}
			
			/*
			if($(this).text() == "Calculate")
			{
				if($("input:radio[name=RACD_TYP]:checked").val() !=undefined && $("input:radio[name=RACD_TYP]:checked").val()=="Consolidated"){
				if($("input:radio[name=RACD_TYP]:checked").val()=="Consolidated"){
					FncallDocChkLst(this,'Table3',{spname:'LSW_SPRFTNDLOSSCALC',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'PL|'+$('#RACD_UNIQID').val()+'|'+$("#RACD_UNIQID").val(),MnuId:$("#RACD_FINYEAR").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','RATIOPROFITLOSS');
					FncallDocChkLst(this,'Table4',{spname:'LSW_SGETROBALSHTGRIDCALC',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'BS|'+$('#RACD_UNIQID').val()+'|'+$('#RACD_UNIQID').val(),MnuId:$("#RACD_FINYEAR").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','RATIOBALSHEET');
					$('.PROFITRATIO').empty();
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"PROFITABILITY RATIOS","PROFITRATIO","RAPRDBfields","LSW_SGETPROPBILITYRATIOCALC");
					$(".COVERAGERATIO").empty();
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"COVERAGE RATIOS","COVERAGERATIO","RACODBfields","LSW_SCOVRGRRATOCALC");
					$(".ACTIVITYRATIO").empty();
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"ACTIVITY RATIOS","ACTIVITYRATIO","RAACDBfields","LSW_SGETACTIVITYRATIOCALC");
					$('.SHORTTERMRATIO').empty();
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"SHORT TERM LIQUIDITY","SHORTTERMRATIO","RASTDBfields","LSW_SGETSHORTTERMRATIOCALC");
					$('.OTHERRATIO').empty();
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"OTHER RATIOS","OTHERRATIO","RAOTDBfields","LSW_SGETOTHERRATIOCALC");
					$('.CASHFLOW').empty();
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_UNIQID").val()+"|"+$("#RACD_UNIQID").val(),"CASH FLOW","CASHFLOW","RACFDBfields","LSW_SGETCASHFLOWCALC");
				}
				}
				else{
					FncallDocChkLst(this,'Table3',{spname:'LSW_SPRFTNDLOSSCALC',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'PL|'+$('#RACD_CUSID').val()+'|'+$("#RACD_UNIQID").val(),MnuId:$("#RACD_FINYEAR").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','RATIOPROFITLOSS');
					FncallDocChkLst(this,'Table4',{spname:'LSW_SGETROBALSHTGRIDCALC',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'BS|'+$('#RACD_CUSID').val()+'|'+$('#RACD_UNIQID').val(),MnuId:$("#RACD_FINYEAR").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','RATIOBALSHEET');
					$('.PROFITRATIO').empty();
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"PROFITABILITY RATIOS","PROFITRATIO","RAPRDBfields","LSW_SGETPROPBILITYRATIOCALC");
					$(".COVERAGERATIO").empty();
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"COVERAGE RATIOS","COVERAGERATIO","RACODBfields","LSW_SCOVRGRRATOCALC");
					$(".ACTIVITYRATIO").empty();
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"ACTIVITY RATIOS","ACTIVITYRATIO","RAACDBfields","LSW_SGETACTIVITYRATIOCALC");
					$('.SHORTTERMRATIO').empty();
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"SHORT TERM LIQUIDITY","SHORTTERMRATIO","RASTDBfields","LSW_SGETSHORTTERMRATIOCALC");
					$('.OTHERRATIO').empty();
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"OTHER RATIOS","OTHERRATIO","RAOTDBfields","LSW_SGETOTHERRATIOCALC");
					$('.CASHFLOW').empty();
					LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"CASH FLOW","CASHFLOW","RACFDBfields","LSW_SGETCASHFLOWCALC");
				}
				
			}
			
			//FormDataToDB(tbl,prfx,$("#RACD_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
			
			if($('input[name=RACD_PROFIT]:checked').val()!="Financial Summary"){
			UI_getdata($('#PrcsID').val(),'FS|'+$('#RACD_CUSID').val()+'|'+$('#RACD_UNIQID').val(),$("#RACD_FINYEAR").val(),"","","LSW_SGETROFINSMRYONCLICK1")
		 }*/
		 
		 if($("input:radio[name=RACD_TYP]:checked").val()=="Consolidated" || $("input:radio[name=RACD_TYP]:checked").val()=="Add Firm")
		 {
			 $($('input:radio[name=RACD_TYP]')[0]).attr('disabled',true)
		     $($('input:radio[name=RACD_TYP]')[1]).attr('disabled',true)
		 }
		 
			if($(this).text() == "Save & Next" && $(this).attr('next-form').split("|")[0]=="TAB" )
			{
				  
				  NXTTABA(this,'TAB');
			}
			else if($(this).text() == "Save & Next" && $(this).attr('next-form').split("|")[0]=="" )
			{
				NXTTAB(this);
			}
		});
	

// Add Another Income Start
	$(document).on("change", ".DataToFld1" , function() {
		$("#"+$(this).attr("data-change")).val($(this).find('option:selected').text());
		//$(this).val($(this).find('option:selected').text());
		
	});
	
/*$("#BTNBALANCESHEET").on('click', function() {
	if($("input:radio[name=RACD_TYP]:checked").val() !=undefined && $("input:radio[name=RACD_TYP]:checked").val()!="Consolidated"){
		if($("input:radio[name=RACD_TYP]:checked").val()!="Consolidated"){
			$("#BTNRATIOBALSHEET").click();
		}
		else{
			FncallDocChkLst(this,'Table4',{spname:'LSW_SGETROBALSHTGRID1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'BS|'+$('#RACD_CUSID').val()+'|'+$("#RACD_RatioHidden").val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','RATIOBALSHEET');
			
		}
	}
});*/

/*$("#BTNPROFITLOSE").on('click', function() {
	//GetFinclYr()
	if($("input:radio[name=RACD_TYP]:checked").val() !=undefined && $("input:radio[name=RACD_TYP]:checked").val()!="Consolidated"){
		if($("input:radio[name=RACD_TYP]:checked").val()!="Consolidated"){
			$("#BTNPROFITLOSS").click();
		}
		else{
			FncallDocChkLst(this,'Table3',{spname:'LSW_SGETROPROFLOSS1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'PL|'+$('#RACD_CUSID').val()+'|'+$("#RACD_RatioHidden").val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','RATIOPROFITLOSS');
			
		}
	}
	
	
	
	
});*/


$(document).on("change", "input:radio[name=RACD_TYP]:checked", function(){
/*$('input:radio[name=RACD_TYP]:checked').change(function () {*/
	
	if($("input:radio[name=RACD_TYP]:checked").val()!=""){
		var cls=$("input:radio[name=RACD_TYP]:checked").val().replace(/ /g, "");
		if(cls=="Consolidated"){
			$('.Consolidated').show();
			$('.AddFirm').hide();
		}
		else{
			$('.Consolidated').hide();
			$('.AddFirm').show();
		}
		//GetConslList();
	}
	
	
	
	
   /* if ($("input[name='RACD_TYP']:checked").val() == 'Add Firm') {
        alert("Allot Thai Gayo Bhai");
    }
    if ($("input[name='RACD_TYP']:checked").val() == 'Consolidated') {
        alert("Transfer Thai Gayo");
    }*/
});
/*$(document).on("change", "input", function(){
	$("#CheckAnyChngInData").val('1');
	alert("Reached")
});*/
$(document).on("change", "select", function(){
	//$('select').not('#RACD_Ratio').not('#RACD_FINYEAR')
	//This will execute only when Consolidated is not selected.
	if(this.id == "RACD_CMPNYID" || this.id == "RACD_CUSID"){
		//alert("Reached");
		if(this.id == "RACD_CUSID")
		{
			if(this.value==CusID123){
				return;
			}
		}
		else if(this.id == "RACD_CMPNYID")
		{
			if(this.value==FirmID){
				return;
			}
		}
		var jqThis = $(this);
		//alert(jqThis.data("prev"));
		if(this.id == "RACD_CMPNYID")
		{
			var chk = 'N'
			chk=ChkifCusExst(this.value,this.id,'RACD_CMPNYID');
			if(chk=="Y"){
				return
			}
		}
		if(jqThis.data("prev")!="")
		{
			
		var x =""
		if(this.id == "RACD_CMPNYID"){
		x= confirm("Are you sure to change Firm details?, On changing the existing firm details will be removed");
		}
		else if(this.id == "RACD_CUSID")
		{
		x= confirm("Are you sure to change Customer details?, On changing the existing customer details will be removed");
		}
		
		if (x)
		{
			var op = UI_getdata($("#PrcsID").val(),$("#RACD_CUSID").val(),$("#RACD_UNIQID").val(),"","","LSW_SREFRSHRATIODTL");
			if($(op).find("RESULT").text()=="SUCCESS"){
				
				$('.PROFITRATIO').empty();
				$(".COVERAGERATIO").empty();
				$(".ACTIVITYRATIO").empty();
				$('.SHORTTERMRATIO').empty();
				$('.OTHERRATIO').empty();
				$('.CASHFLOW').empty();

				LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"PROFITABILITY RATIOS","PROFITRATIO","RAPRDBfields","LSW_SGETPROPBILITYRATIO");
				LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"COVERAGE RATIOS","COVERAGERATIO","RACODBfields","LSW_SGETCOVERAGERATIO");
				LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"ACTIVITY RATIOS","ACTIVITYRATIO","RAACDBfields","LSW_SGETACTIVITYRATIO");
				LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"SHORT TERM LIQUIDITY","SHORTTERMRATIO","RASTDBfields","LSW_SGETSHORTTERMRATIO");
				LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"OTHER RATIOS","OTHERRATIO","RAOTDBfields","LSW_SGETOTHERRATIO");
				LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"CASH FLOW","CASHFLOW","RACFDBfields","LSW_SGETCASHFLOW");
				
				FncallDocChkLst(this,'Table4',{spname:'LSW_SGETROBALSHTGRID1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'BS|'+$('#RACD_CUSID').val()+'|'+$("#RACD_UNIQID").val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','RATIOBALSHEET');
				FncallDocChkLst(this,'Table3',{spname:'LSW_SGETROPROFLOSS1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'PL|'+$('#RACD_CUSID').val()+'|'+$("#RACD_UNIQID").val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5,6','RATIOPROFITLOSS');
				FncallDocChkLst(this,'Table5',{spname:'LSW_SGETROFINSMRY',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'FS|'+$('#RACD_CUSID').val()+'|'+$('#RACD_UNIQID').val(),MnuId:$('#RACD_FINSUMYEAR').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1,5,6,7','FINCSUMMARY');
				
			}
			else if($(op).find("RESULT").text()=="FAILED"){
				alert($(op).find("RESULT").text());
			}
			else{
				$('.PROFITRATIO').empty();
				$(".COVERAGERATIO").empty();
				$(".ACTIVITYRATIO").empty();
				$('.SHORTTERMRATIO').empty();
				$('.OTHERRATIO').empty();
				$('.CASHFLOW').empty();

				LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"PROFITABILITY RATIOS","PROFITRATIO","RAPRDBfields","LSW_SGETPROPBILITYRATIO");
				LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"COVERAGE RATIOS","COVERAGERATIO","RACODBfields","LSW_SGETCOVERAGERATIO");
				LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"ACTIVITY RATIOS","ACTIVITYRATIO","RAACDBfields","LSW_SGETACTIVITYRATIO");
				LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"SHORT TERM LIQUIDITY","SHORTTERMRATIO","RASTDBfields","LSW_SGETSHORTTERMRATIO");
				LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"OTHER RATIOS","OTHERRATIO","RAOTDBfields","LSW_SGETOTHERRATIO");
				LoadMultiData("",$("#PrcsID").val()+"|" + $("#RACD_CUSID").val()+"|"+$("#RACD_UNIQID").val(),"CASH FLOW","CASHFLOW","RACFDBfields","LSW_SGETCASHFLOW");
				
				FncallDocChkLst(this,'Table4',{spname:'LSW_SGETROBALSHTGRID1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'BS|'+$('#RACD_CUSID').val()+'|'+$("#RACD_UNIQID").val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','RATIOBALSHEET');
				FncallDocChkLst(this,'Table3',{spname:'LSW_SGETROPROFLOSS1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'PL|'+$('#RACD_CUSID').val()+'|'+$("#RACD_UNIQID").val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5,6','RATIOPROFITLOSS');
				FncallDocChkLst(this,'Table5',{spname:'LSW_SGETROFINSMRY',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'FS|'+$('#RACD_CUSID').val()+'|'+$('#RACD_UNIQID').val(),MnuId:$('#RACD_FINSUMYEAR').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1,5,6,7','FINCSUMMARY');
				
				//ChkifCusExst(this.value,this.id,'RACD_CMPNYID');
			}
			CusID123 =$("#RACD_CUSID").val();
			 CusName123 =$("#RACD_CUSNAME").val();
			 FirmID =$("#RACD_CMPNYID").val();
			 FirmName =$("#RACD_COMPANY").val();
			
		}
	  else
	  {
		  var id=this.id;
		  var CUSRFRMID ="";
		  var CUSRFRMNAME ="";
		  if(id=="RACD_CUSID")
		  {
			  CUSRFRMID=CusID123;
			  CUSRFRMNAME=CusName123;
			  $("#RACD_CUSNAME").val(CUSRFRMNAME);
		  }
		  else if(id=="RACD_CMPNYID"){
			  CUSRFRMID=FirmID;
			  CUSRFRMNAME=FirmName;
			  $("#RACD_COMPANY").val(FirmName);
		  }
		  $('select[name="'+id+'"]').material_select("destroy");
		  $('select[name="'+id+'"]').val(CUSRFRMID)
		  $('select[name="'+id+'"]').find("option[value='"+CUSRFRMID+ "']").attr("selected","selected");
		  $('select[name="'+id+'"]').material_select();
		  return false;
	  }
	}
		jqThis.data("prev",jqThis.val());
		CusID123 =$("#RACD_CUSID").val();
		 CusName123 =$("#RACD_CUSNAME").val();
		 FirmID =$("#RACD_CMPNYID").val();
		 FirmName =$("#RACD_COMPANY").val();		
	}
	
});

 CusID123 =$("#RACD_CUSID").val();
 CusName123 =$("#RACD_CUSNAME").val();
 FirmID =$("#RACD_CMPNYID").val();
 FirmName =$("#RACD_COMPANY").val();
});

