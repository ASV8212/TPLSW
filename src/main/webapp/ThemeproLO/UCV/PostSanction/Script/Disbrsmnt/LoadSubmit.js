var sel ="";
var ChklstMstrXML = "";
var GridTgrTyp = "";
var CtgryXML = "";
$(document).ready(function() {
	if($("#DMY5").val().split('|')[2]=="OPSQD"){
		$(".NormalFld1").remove();
	}
	else{
		$(".GECLNormalFld1").remove();
	}
	
	if($("#VERTICAL").val()=="UCV Eco")
	{
		$("#OTC").hide()
		$("#PDD").hide()
	}
	else
	{
		$("#OTC").show()
		$("#PDD").show()
	}

   if($("#DMY7").val().split("|")[8]=="HE02")
   {
	  // $($(".FormPageSubTab").find('li')[1]).hide()
	 //  $($(".FormPageSubTab").find('li')[3]).hide()
	 //  $($(".FormPageSubTab").find('li')[4]).hide()
	 $('.FormPageMultiTab').find('li').last().hide()
	 $($(".FormPageSubTab").find('li')[4]).remove()
	 $($(".FormPageSubTab").find('li')[3]).remove()
	 $($(".FormPageSubTab").find('li')[1]).remove()
   }
   else if($("#DMY7").val().split("|")[8]=="ML01")
   {
	  // $($(".FormPageSubTab").find('li')[1]).hide()
	 //  $($(".FormPageSubTab").find('li')[3]).hide()
	 //  $($(".FormPageSubTab").find('li')[4]).hide()
	 //$('.FormPageMultiTab').find('li').last().hide()
	 $($(".FormPageSubTab").find('li')[4]).remove()
	 $($(".FormPageSubTab").find('li')[3]).remove()
	 //$($(".FormPageSubTab").find('li')[1]).remove()
   }

    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));
	
	
	/*if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
	{*/
		$("#ODCH_TRNCHID").val($(".FormPageMultiTab li.active a div").text())
		$("#ODCH_TRNCHNAME").val($(".FormPageMultiTab li.active a div").text())
	/*}*/
    
	if($("#DMY7").val().split('|')[10]=="HEGECL"){
		LoadCheckLSTDropDown();
		if($("#DMY7").val().split('|')[10]=="HEGECL" && $("#DMY5").val().split('|')[2]=="BranchOPS"){
			$(".GECLBROPSMNDTRY").addClass("ODCHMndtry");
		}
	}
	
    FormDataFromDB("LSW_TOPSDISBCHKLSTHDR", "ODCH_", "ODCHDBfields", $("#ODCH_TRNCHID").val()+"|ODCH_TRNCHID");
    
	if($("#DMY7").val().split('|')[10]=="HEGECL" && $("#ODCH_INSSECTR").val()!=""){
		CheckLSTDropDownOnChng1();
	}
	
	$("#HiddenActID").val(activityname);
	
    
	if(activityname=="DisbAppr"&& $(".FormPageMultiTab li.active").attr("id")=="Tranche 1")
   {
	   //$('.ODCHDBfields').attr('disabled',true); 
		//DSVLBLALL('')  	   
   }
	
    /**Grid Trigger Start **/
    //$("#BTNCHRGDTL").click();
    // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/

    $(document).on("click", ".FormSave", function() {

        var html = $(this).closest('.DYNROW')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];
        var activityname = GetActivityName();
		if ($(this).text() == "Save"){
			var MndtryGrdChk = ChkGrdMandatoryFlds("GridMndtryTrDt");
            if (MndtryGrdChk != "" && MndtryGrdChk != undefined) {
                alert(MndtryGrdChk);
                return false;
            }
		}
        if ($(this).text() == "Save & Next") {
            var MndtryChk = ChkMandatoryFlds(prfx + "Mndtry");
            if (MndtryChk == "Mandatory") {
                alert("Fill the Mandatory Fields / Document(s)");
                return false;
            }
			
			var MndtryGrdChk = ChkGrdMandatoryFlds("GridMndtry");
            if (MndtryGrdChk != "" && MndtryGrdChk != undefined) {
                alert(MndtryGrdChk);
                return false;
            }
			
			MndtryGrdChk = ChkGrdMandatoryFlds("GridMndtryTrDt");
            if (MndtryGrdChk != "" && MndtryGrdChk != undefined) {
                alert(MndtryGrdChk);
                return false;
            }
        }
        // Customer Seq ID Gen Start		
        /*if ($(html).find("[name=BKDT_BNKNO]").val() == "") {
            var CUSID = UI_getdata("BNK", "", "Yes", "", "", "Sam_sGetSeqID");
            $(html).find("[name=BKDT_BNKNO]").val($(CUSID).find("Val1").text());
        }*/
        // Customer Seq ID Gen End 

        /*$("#BKDT_BNKREFNAME").val($(".FormPageMultiTab li.active a div").text())*/
        var TableID="";
        var GRDDTL=TxtGridsubmitdata_V5("DisbChkTable","ODCL_","ODCH_");
		AssignGridXmltoField("ODCH_GRDDTL", GRDDTL)
      var CHKresult=FormDataToDB(tbl, prfx,$("#ODCH_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
         
		 if (CHKresult == "Fail")
			{
			  alert("Submission Failed");
			   return false;			
			}
		UI_getdata($("#PrcsID").val(), $(".FormPageMultiTab li.active a div").text(), "DISBCHK", "", "", "LSW_SDETLDISBCHKLST");
        // Tab Header Change End
		
		
        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
        if(activityname=="BranchOPS"){
        	$('.GridMndtryTrDt').addClass('DSVLBL');
        	$('.GridMndtryTrDt').parent().find('img').hide();
        	
        }
    });
    $(document).on("click", "input[type=radio]", function() {
    	if($("#DMY5").val().split('|')[2]=="OPS" || $("#DMY5").val().split('|')[2]=="OPSQD"){
    		var op=UI_getdata("Disbursement Checklist1",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).text(),"","","LSW_SCHKQURYRAISED");
    		if($(op).find("RESULT").text()!="ALLOW"){
    			for(var i=0;i<=sel.length;i++)
    				{
    				var name = this.name;
    				if(sel[i].name==name){
    					$(this). prop("checked", false);
    					$('#'+sel[i].id). prop("checked", true);
    					break;
    				}
    				}
    			alert($(op).find("RESULT").text());
    			//return;
    		}
    		sel = $('input[type=radio]:checked');
    	}
    	
    });
    $(document).on("click", "#BTNBranchCheckList", function() {
	GridTgrTyp="Branch";
	//ChklstMstrXML = UI_getdata($("#PrcsID").val(), $(".FormPageMultiTab li.active a div").text()+'|'+GridTgrTyp+'|'+$("#DMY7").val().split("|")[8], "", "", "", "LSW_SGETTRNCHDISBCHKLST1");
    ChklstMstrXML = UI_GetData_Disb($("#PrcsID").val(), $(".FormPageMultiTab li.active a div").text()+'|'+GridTgrTyp+'|'+$("#DMY7").val().split("|")[8], "", "", "", "LSW_SGETTRNCHDISBCHKLST2");
	for(var i = 0;i<$("#"+$(this).attr('data')).find('.BluShd').length;i++)
	{
	CtgryXML=ChklstMstrXML.split('|')[i].replace('<Resultset><a><XMLLRGResult>','').replace('</XMLLRGResult></a></Resultset>','');
	CtgryXML='<Resultset><a><XMLLRGResult>'+CtgryXML+'</XMLLRGResult></a></Resultset>';
	$('#'+$($('#'+$("#BTNBranchCheckList").attr('data')).find('.BluShd')[i]).parent().next().find('.DashTrg').attr('id')).click();
	}
    });
    $(document).on("click", "#BTNCreditOpsChecklist", function() {
		GridTgrTyp="CREDIT OPS";
		//ChklstMstrXML = UI_getdata($("#PrcsID").val(), $(".FormPageMultiTab li.active a div").text()+'|'+GridTgrTyp+'|'+$("#DMY7").val().split("|")[8], "", "", "", "LSW_SGETTRNCHDISBCHKLST1");
    	ChklstMstrXML = UI_GetData_Disb($("#PrcsID").val(), $(".FormPageMultiTab li.active a div").text()+'|'+GridTgrTyp+'|'+$("#DMY7").val().split("|")[8], "", "", "", "LSW_SGETTRNCHDISBCHKLST2");
		for(var i = 0;i<$("#"+$(this).attr('data')).find('.BluShd').length;i++)
    	{
		CtgryXML=ChklstMstrXML.split('|')[i].replace('<Resultset><a><XMLLRGResult>','').replace('</XMLLRGResult></a></Resultset>','');
		CtgryXML='<Resultset><a><XMLLRGResult>'+CtgryXML+'</XMLLRGResult></a></Resultset>';
    	$('#'+$($('#'+$("#BTNCreditOpsChecklist").attr('data')).find('.BluShd')[i]).parent().next().find('.DashTrg').attr('id')).click();
    	}
        });
    $(document).on("click", "#BTNOpsChecklist", function() {
		GridTgrTyp="OPS";
		//ChklstMstrXML = UI_getdata($("#PrcsID").val(), $(".FormPageMultiTab li.active a div").text()+'|'+GridTgrTyp+'|'+$("#DMY7").val().split("|")[8], "", "", "", "LSW_SGETTRNCHDISBCHKLST1");
    	ChklstMstrXML = UI_GetData_Disb($("#PrcsID").val(), $(".FormPageMultiTab li.active a div").text()+'|'+GridTgrTyp+'|'+$("#DMY7").val().split("|")[8], "", "", "", "LSW_SGETTRNCHDISBCHKLST2");
		for(var i = 0;i<$("#"+$(this).attr('data')).find('.BluShd').length;i++)
    	{
		CtgryXML=ChklstMstrXML.split('|')[i].replace('<Resultset><a><XMLLRGResult>','').replace('</XMLLRGResult></a></Resultset>','');
		CtgryXML='<Resultset><a><XMLLRGResult>'+CtgryXML+'</XMLLRGResult></a></Resultset>';
    	$('#'+$($('#'+$("#BTNOpsChecklist").attr('data')).find('.BluShd')[i]).parent().next().find('.DashTrg').attr('id')).click();
    	}
		sel = $('input[type=radio]:checked');
        });
    $(document).on("click", "#BTNOpsMINICl", function() {
		if($("#DMY7").val().split("|")[8]=="ML01")
		{
			GridTgrTyp="OPSMC";
			//ChklstMstrXML = UI_getdata($("#PrcsID").val(), $(".FormPageMultiTab li.active a div").text()+'|'+GridTgrTyp+'|'+$("#DMY7").val().split("|")[8], "", "", "", "LSW_SGETTRNCHDISBCHKLST1");
			ChklstMstrXML = UI_GetData_Disb($("#PrcsID").val(), $(".FormPageMultiTab li.active a div").text()+'|'+GridTgrTyp+'|'+$("#DMY7").val().split("|")[8], "", "", "", "LSW_SGETTRNCHDISBCHKLST2");
			for(var i = 0;i<$("#"+$(this).attr('data')).find('.BluShd').length;i++)
			{
			CtgryXML=ChklstMstrXML.split('|')[i].replace('<Resultset><a><XMLLRGResult>','').replace('</XMLLRGResult></a></Resultset>','');
			CtgryXML='<Resultset><a><XMLLRGResult>'+CtgryXML+'</XMLLRGResult></a></Resultset>';
			$('#'+$($('#'+$("#BTNOpsMINICl").attr('data')).find('.BluShd')[i]).parent().next().find('.DashTrg').attr('id')).click();
			}
		}
		else{
    	for(var i = 0;i<$("#"+$(this).attr('data')).find('.BluShd').length;i++)
    	{
    	$('#'+$($('#'+$("#BTNOpsMINICl").attr('data')).find('.BluShd')[i]).parent().next().find('.DashTrg').attr('id')).click();
    	}
		}
		sel = $('input[type=radio]:checked');
        });
    $(document).on("click", ".FRSTDISB", function() {
    	if(this.value == "OTC" || this.value == "PDD"){
    		$(this).closest('.tbodytrtd').next().find('input').val('');
    		$(this).closest('.tbodytrtd').next().find('input').show();
    		$(this).closest('.tbodytrtd').next().find('input').removeClass("DSVLBL");
    		$(this).closest('.tbodytrtd').next().find('img').show();
    		$(this).closest('.tbodytrtd').next().find('input').prop("disabled", false);
			$(this).closest('.tbodytrtd').next().find('input').addClass("GridMndtryTrDt");
    	}
    	else{
    		$(this).closest('.tbodytrtd').next().find('input').val('');
    		$(this).closest('.tbodytrtd').next().find('img').hide();
    		$(this).closest('.tbodytrtd').next().find('input').hide();
    		$(this).closest('.tbodytrtd').next().find('input').prop("disabled", true);
			$(this).closest('.tbodytrtd').next().find('input').removeClass("GridMndtryTrDt");
    	}
    });
	
	if($("#DMY5").val().split('|')[2]!="")
	{
		var activityname=$("#DMY5").val().split('|')[2]
	}
	else
	{
      var activityname = GetActivityName();
	}
    
    	if(activityname == "CreditOPS"){
			$('#headingOne1').parent().hide();
        	$('#headingOne1').remove();
        	$('#collapseOne1').remove();
        	$('#headingTwo2').show();
        	$('#collapseThree3').remove();
			$('#headingThree3').parent().hide();
        	$('#headingThree3').remove();
			$('#headingFour4').parent().hide();
        	$('#headingFour4').remove();
        	$('#collapseFour4').remove();
        	$("#hiddenid").val('0,1,5,6,9');
        	$("#hiddenactivity").val(activityname);
        	if($(".FormPageMultiTab li.active").attr("id")=="Tranche1"){
				if($("#DMY7").val().split("|")[10]=="HEACTUAL"){
            	$('.Formaccordion').find('.AFormaccordion')[0].click();
				//$('#T2').parent().hide();
            	$("#T2").remove();
				$("#GECL").remove();
				}
				else if($("#DMY7").val().split("|")[10]=="HEGECL"){
					$("#T2").remove();
					$('#headingTwo2').parent().hide();
            		$('#headingTwo2').remove();
					$("#BTNTGECL").click();
					$("#GECL").find('.NormalFld').find('.ODCHDBfields').attr("disabled","disabled");
				}
            	}
				else if($(".FormPageMultiTab li.active").attr("id")!="Tranche1" && $("#DMY7").val().split("|")[8]=="ML01")
				{
					$("#T2").remove();
					$("#GECL").remove();
					$("#Credit").find(".form-row").not(".ML01").remove();
					$($("#Credit").find(".form-row")[0]).find("label").text("Approvals/Acceptance")
					$($("#Credit").find(".form-row")[2]).find("label").text("Legal")
					$($("#Credit").find(".form-row")[4]).find("label").text("Disbursement Request Form")
					$($("#Credit").find(".form-row")[6]).find("label").text("Disbursement MEMO")
					$('.Formaccordion').find('.AFormaccordion')[0].click();
				}
            	else{
            		$("#BTNT2").click();
					$('#headingTwo2').parent().hide();
            		$('#headingTwo2').remove();
					$("#GECL").remove();
            	}
        	$("#SaveCROPS").show();
        }
        else if(activityname == "OPS"){
        	$('#collapseOne1').remove();
			$('#headingOne1').parent().hide();
        	$('#headingOne1').remove();
        	$('#headingTwo2').show();
        	$('#headingThree3').show();
			$('#headingFour4').parent().hide();
        	$('#headingFour4').remove();
        	$('#collapseFour4').remove();
        	$("#hiddenid").val('0,1,5,6,9');
        	$("#hiddenactivity").val(activityname);
        	if($(".FormPageMultiTab li.active").attr("id")=="Tranche1"){
				if($("#DMY7").val().split("|")[10]=="HEACTUAL"){
        	$('.Formaccordion').find('.AFormaccordion')[0].click();
			//$('#T2').parent().hide();
        	$("#T2").remove();
			$("#GECL").remove();
				}
				else if($("#DMY7").val().split("|")[10]=="HEGECL"){
					$("#T2").remove();
					$('#headingTwo2').parent().hide();
					$('#headingTwo2').remove();
					$('#headingThree3').parent().hide();
					$('#headingThree3').remove();
					$("#BTNTGECL").click();
					$("#RaiseQueryGECL").show();
					$("#GECL").find('.NormalFld').find('.ODCHDBfields').attr("disabled","disabled");
				}
        	}
			else if($(".FormPageMultiTab li.active").attr("id")!="Tranche1" && $("#DMY7").val().split("|")[8]=="ML01"){
				$("#T2").remove();
				$("#GECL").remove();
				$('#headingTwo2').parent().hide();
				$('#headingTwo2').remove();
				$("#OPS").find(".form-row").not(".ML01").remove();
				$($("#OPS").find(".form-row")[0]).find("label").text("Approvals/Acceptance")
				$($("#OPS").find(".form-row")[2]).find("label").text("Legal")
				$($("#OPS").find(".form-row")[4]).find("label").text("Disbursement Request Form")
				$($("#OPS").find(".form-row")[6]).find("label").text("Disbursement MEMO")
				$("#OPS #RaiseQueryCo2").hide();
				$('.Formaccordion').find('.AFormaccordion')[0].click();
			}
        	else{
        		$("#BTNT2").click();
				$('#headingTwo2').parent().hide();
        		$('#headingTwo2').remove();
				$('#headingThree3').parent().hide();
            	$('#headingThree3').remove();
				$("#GECL").remove();
        	}
			sel = $('input[type=radio]:checked');
        	
        }
        else if(activityname == "OPSMC" || activityname == "OPSQD"){
			if(($("#DMY7").val().split("|")[8]!="ML01") || ($("#DMY7").val().split("|")[8]=="ML01" && $(".FormPageMultiTab li.active").attr("id")=="Tranche1")){
				$("#OPSMINI").find(".form-row.ML01").remove();
			}
        	$('#collapseOne1').remove();
			$('#headingOne1').parent().hide();
        	$('#headingOne1').remove();
			$('#headingTwo2').parent().hide();
        	$('#headingTwo2').remove();
        	$('#collapseTwo2').remove();
			$('#headingThree3').parent().hide();
        	$('#headingThree3').remove();
        	$('#collapseThree3').remove();
        	$('#headingFour4').show();
        	$('#collapseFour4').show();
        	$("#hiddenid").val('0,1,5,6,9');
        	$("#hiddenactivity").val(activityname);
        	if($(".FormPageMultiTab li.active").attr("id")=="Tranche1"){
				if($("#DMY7").val().split("|")[10]=="HEACTUAL"){
        	$('.Formaccordion').find('.AFormaccordion')[0].click();
			//$('#T2').parent().hide();
        	$("#T2").remove();
			$("#GECL").remove();
				}
				else if($("#DMY7").val().split("|")[10]=="HEGECL"){
					$("#GECLPOPUP1").show();
        	$('.Formaccordion').find('.AFormaccordion')[0].click();
			//$('#T2').parent().hide();
        	$("#T2").remove();
			$("#GECL").remove();
					//$("#GECL").find(".form-row").not('.NormalFld').remove();
					//$("#GECL").hide();
					$("#OPSMINI").find('.NormalFld').find('.ODCHDBfields').attr("disabled","disabled");
				}
        	}
			else if($(".FormPageMultiTab li.active").attr("id")!="Tranche1" && $("#DMY7").val().split("|")[8]=="ML01")
				{
					$("#T2").remove();
					$("#GECL").remove();
					$("#OPSMINI").find(".form-row").not(".ML01").not(".OPSMINISAVE").remove();
					$($("#OPSMINI").find(".form-row")[0]).find("label").text("Approvals/Acceptance")
					$($("#OPSMINI").find(".form-row")[2]).find("label").text("Legal")
					$($("#OPSMINI").find(".form-row")[4]).find("label").text("Disbursement Request Form")
					$($("#OPSMINI").find(".form-row")[6]).find("label").text("Disbursement MEMO")
					$("#OPSMINI #RaiseQueryCo2").hide();
					$('.Formaccordion').find('.AFormaccordion')[0].click();
				}
        	else{
        		$("#BTNT2").click();
				$('#headingFour4').parent().hide();
        		$('#headingFour4').remove();
            	$('#collapseFour4').remove();
				$("#GECL").remove();
				//$("#GECL").find(".form-row").not('.NormalFld').remove().remove();
				//$("#GECL").hide();
        	}
        	
        }
        else{/** this else is for BranchOPS**/
        	$('#headingOne1').show();
        	//$('#headingTwo2').click()
        	$('#collapseTwo2').remove();
			$('#headingTwo2').parent().hide();
        	$('#headingTwo2').remove();
			$('#headingThree3').parent().hide();
        	$('#headingThree3').remove();
        	$('#collapseThree3').remove();
			$('#headingFour4').parent().hide();
        	$('#headingFour4').remove();
        	$('#collapseFour4').remove();
        	$("#hiddenid").val('0,1,7,8,9');
        	$("#hiddenactivity").val(activityname);
        	if($(".FormPageMultiTab li.active").attr("id")=="Tranche1"){
				if($("#DMY7").val().split("|")[10]=="HEACTUAL"){
            	$('.Formaccordion').find('.AFormaccordion')[0].click();
				//$('#T2').parent().hide();
            	$("#T2").remove();
				$("#GECL").remove();
				}
				else if($("#DMY7").val().split("|")[10]=="HEGECL"){
					$("#hiddenid").val('0,1,5,7,8,9');
					$("#T2").remove();
					$('#headingOne1').parent().hide();
            		$('#headingOne1').remove();
					$("#BTNTGECL").click();
					$("#GECL").find('.NormalFld').find('.ODCHDBfields').attr("disabled","disabled");
				}
            	}
				else if($(".FormPageMultiTab li.active").attr("id")!="Tranche1" && $("#DMY7").val().split("|")[8]=="ML01")
				{
					$("#T2").remove();
					$("#GECL").remove();
					$("#Branch").find(".form-row").not(".ML01").remove();
					$($("#Branch").find(".form-row")[0]).find("label").text("Approvals/Acceptance")
					$($("#Branch").find(".form-row")[2]).find("label").text("Legal")
					$($("#Branch").find(".form-row")[4]).find("label").text("Disbursement Request Form")
					$($("#Branch").find(".form-row")[6]).find("label").text("Disbursement MEMO")
					$('.Formaccordion').find('.AFormaccordion')[0].click();
					//$('#T2').parent().hide();
					
				}
            	else{
            		$("#BTNT2").click();
					$('#headingOne1').parent().hide();
            		$('#headingOne1').remove();
					$("#GECL").remove();
            	}
        	
        	/*if(activityname=="BranchOPS")
        		{
        		$("#SaveBR").show();
        		}*/
				
				
					if($("#DMY7").val().split("|")[8]=="T201"||$("#DMY7").val().split("|")[8]=="T204"||$("#DMY7").val().split("|")[8]=="T205"||$("#DMY7").val().split("|")[8]=="T206"||$("#DMY7").val().split("|")[8]=="T207"||$("#DMY7").val().split("|")[8]=="T208"||$("#DMY7").val().split("|")[8]=="T209"||$("#DMY7").val().split("|")[8]=="T210"||$("#DMY7").val().split("|")[8]=="T211")
				{  
					$($("#Branch").find(".SANHEAD")[0]).text("Additional Documents")
					$($("#Branch").find(".SANHEAD")[1]).text("Pre Sanction Documents")
					$($("#Branch").find(".SANHEAD")[2]).text("Post sanction Documents")
					$($("#Branch").find(".SANHEAD")[3]).text("Repayment Instruments")
					$($("#Branch").find(".SANHEAD")[4]).text("Reports")
					$($("#Branch").find(".SANHEAD")[5]).text("Sanction Conditions")	
					$($("#Branch").find(".SANHEAD")[6]).text("")	
					$($("#Branch").find(".SANHEAD")[7]).text("")	
					$($("#Branch").find(".SANHEAD")[8]).text("")	
					$($("#Branch").find(".SANHEAD")[9]).text("")	
					$($("#Branch").find(".SANHEAD")[10]).text("")
				}
				
				
				if($("#DMY7").val().split("|")[8]=="T202")
				{
					$($("#Branch").find(".SANHEAD")[0]).text("Balance Transfer")
					$($("#Branch").find(".SANHEAD")[1]).text("Additional Documents")
					$($("#Branch").find(".SANHEAD")[2]).text("Other Collateral")
					$($("#Branch").find(".SANHEAD")[3]).text("Pre Sanction Documents")
					$($("#Branch").find(".SANHEAD")[4]).text("Reports")
					$($("#Branch").find(".SANHEAD")[5]).text("Sanction Conditions")	
					$($("#Branch").find(".SANHEAD")[6]).text("")	
					$($("#Branch").find(".SANHEAD")[7]).text("")	
					$($("#Branch").find(".SANHEAD")[8]).text("")	
					$($("#Branch").find(".SANHEAD")[9]).text("")	
					$($("#Branch").find(".SANHEAD")[10]).text("")
				}
				
				if($("#DMY7").val().split("|")[8]=="T203")
				{
					$($("#Branch").find(".SANHEAD")[0]).text("Additional Documents")
					$($("#Branch").find(".SANHEAD")[1]).text("Balance Transfer")
					$($("#Branch").find(".SANHEAD")[2]).text("Collateral")
					$($("#Branch").find(".SANHEAD")[3]).text("Other Collateral")
					$($("#Branch").find(".SANHEAD")[4]).text("PDD")
					$($("#Branch").find(".SANHEAD")[5]).text("Pre Sanction Documents")	
					$($("#Branch").find(".SANHEAD")[6]).text("Reports")	
					$($("#Branch").find(".SANHEAD")[7]).text("Repayment Instruments")	
					$($("#Branch").find(".SANHEAD")[8]).text("Sanction Conditions")	
					$($("#Branch").find(".SANHEAD")[9]).text("")	
					$($("#Branch").find(".SANHEAD")[10]).text("")
				}
				
				if($("#DMY7").val().split("|")[8]=="T301"||$("#DMY7").val().split("|")[8]=="T302"||$("#DMY7").val().split("|")[8]=="T303"||$("#DMY7").val().split("|")[8]=="T311"||$("#DMY7").val().split("|")[8]=="T312"||$("#DMY7").val().split("|")[8]=="T313")
				{
					$($("#Branch").find(".SANHEAD")[0]).text("Additional Documents")
					$($("#Branch").find(".SANHEAD")[1]).text("Pre Sanction Documents")
					$($("#Branch").find(".SANHEAD")[2]).text("Post sanction Documents")
					$($("#Branch").find(".SANHEAD")[3]).text("Reports")
					$($("#Branch").find(".SANHEAD")[4]).text("Repayment Instruments")
					$($("#Branch").find(".SANHEAD")[5]).text("Sanction Conditions")	
					$($("#Branch").find(".SANHEAD")[6]).text("")	
					$($("#Branch").find(".SANHEAD")[7]).text("")	
					$($("#Branch").find(".SANHEAD")[8]).text("")	
					$($("#Branch").find(".SANHEAD")[9]).text("")	
					$($("#Branch").find(".SANHEAD")[10]).text("")
				}
				if($("#DMY7").val().split("|")[8]=="T304"||$("#DMY7").val().split("|")[8]=="T305"||$("#DMY7").val().split("|")[8]=="T306"||$("#DMY7").val().split("|")[8]=="T307"||$("#DMY7").val().split("|")[8]=="T308"||$("#DMY7").val().split("|")[8]=="T309"||$("#DMY7").val().split("|")[8]=="T310")
				{
					$($("#Branch").find(".SANHEAD")[0]).text("Pre Sanction Documents")
					$($("#Branch").find(".SANHEAD")[1]).text("Post sanction Documents")
					$($("#Branch").find(".SANHEAD")[2]).text("Repayment Instruments")
					$($("#Branch").find(".SANHEAD")[3]).text("")
					$($("#Branch").find(".SANHEAD")[4]).text("")
					$($("#Branch").find(".SANHEAD")[5]).text("")	
					$($("#Branch").find(".SANHEAD")[6]).text("")	
					$($("#Branch").find(".SANHEAD")[7]).text("")	
					$($("#Branch").find(".SANHEAD")[8]).text("")	
					$($("#Branch").find(".SANHEAD")[9]).text("")	
					$($("#Branch").find(".SANHEAD")[10]).text("")
				}
				
				
				
				
				
				
				
				
				
        }
		$(document).on("click",".RaiseQry",function() {
		
         $("#OPSSave").click();
		var op=UI_getdata("Disbursement Checklist",$("#PrcsID").val(),"","",$("#DMY5").val().split('|')[2],"LSW_SCHKQURYRAISED")
		if($(op).find("RESULT").text()=="ALLOW"){
		QueryTypFlg=$(this).attr("querytype");
	    var xml=UI_getdata($("#PrcsID").val(),$('#LogUsr').val(),"","","","LSW_SGETQUERYTO");
		$('.RAISE').find("#MNGQ_TOUSRIDI").empty();
		$('.RAISE').find("#MNGQ_TOUSRIDI").append($(xml).find("RESULT").html());
		$('.RAISE').find("#MNGQ_TOUSRIDI").material_select(); 
		
		
        
		$('.RAISE').find(".QRYDETAILS").hide()
        
        $('.RAISE').find("#MNGQ_SECTNID").val('');
		$('.RAISE').find("#MNGQ_SECTNID").material_select(); 
        
		$('.RAISE').find("#MNGQ_TYP").val('');
		$('.RAISE').find("#MNGQ_TYP").material_select(); 
        
		$('.RAISE').find("#MNGQ_APPLNO").val('');
		$('.RAISE').find("#MNGQ_APPLNO").material_select(); 
		$('.RAISE').find("#MNGQ_DESC").val('');
		$('.RAISE').find("#MNGQ_QURYNAME").val('');
		
	
       //Added  for   Details hide

        $('.RAISE').find("#MNGQ_SECTNID").removeClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_TYP").removeClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_QURYNAME").removeClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_DESC").removeClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_APPLNO").removeClass('MNGOMndtry');
         $('.RASHW').hide();
			
	
  $('.RAISE').find("#MNGQ_ATTCHURLIUPLOAD").show();
  $('.RAISE').find('.rounded1').hide();
  $('.RAISE').find("#MNGQ_ATTCHURLI").val('');
  $('.RAISE').find("input[name=datafile]").attr('disabled',false);
  $('.RAISE').find("input[name=datafile]").attr('display','block');
  
  $('.RAISE').find('.FIDU').find('.name').text('Click Here to Upload')
		
	$(".OPSQRY").hide();
			
			
			 $("#RAISEQUERY").click();
		}
		else{
			alert($(op).find("RESULT").text());
			return;
		}
					 
				});	
});