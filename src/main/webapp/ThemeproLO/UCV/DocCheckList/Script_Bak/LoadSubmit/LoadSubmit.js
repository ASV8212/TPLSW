$(document).ready(function () {

	
	$("#BNKS_PRCSID").attr("value",$("#PrcsID").val());
	$("#DCLQ_PRCSID").attr("value",$("#PrcsID").val());
	 if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
	 {
	$("#UPDC_CUSID").val($(".FormPageMultiTab li.active").attr("id"))
	 }
	/*if ($("#UPDC_CUSID").val() != "")
	 {
	$(".UPDC_CUSID").text($("#UPDC_CUSID").val());
	 }*/
	 
	 
	//if($(".FormPageTab li.active").text() != 'Applicant')
	//  {
		// $(".ApplForm").show()
	    var Role=$("#DMY5").val().split("|")[1]
	
	    if(Role=="Yes")
		  {
		    $(".GenApplForm").show()
		  }
		  else if($("#PrMs1").val()=="View")
		{
			$(".GenApplForm").show()
		}
		 else if($("#DMY5").val().split("|")[2]!="PreLogin")
		  {
			  $(".GenApplForm").show()
		  }
	  else
		 {
		   $(".GenApplForm").hide()
		 }
	  //}
	 
	 var GetCusTyp = UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_SGETCUSTTYP");
	 $("#HIDDENCUSTYP").val($(GetCusTyp).find("CUSTYPE").text());
	 $("#HIDDENCONST").val($(GetCusTyp).find("CONSTITUTION").text())
	 DATA = $("#UPDC_CUSID").val()+"|" + 'UPDC_CUSID';
	 FormDataFromDB("LSW_TUPLOADDOCUMENT","UPDC_","UPDCDBfields", DATA);
	 
	 
	 
	 $("#BNKS_CUSID").attr("value",$("#UPDC_CUSID").val());
	 $("#DCLQ_CUSID").attr("value",$("#UPDC_CUSID").val());
	 var op = UI_getdata($("#LogUsr").val(),$("#PrcsID").val(),"","","","LSW_SGETUSRGRP1")
	 $("#HIDDENID").val($(op).find("groupId").text());
	 LoadMultiData("",$("#PrcsID").val(),$("#BNKS_CUSID").val(),"BankDetail1","BNKSDBfields","LSW_SGETCUSWSACCNT");
	 
	 if($(".PropertyDocuments").is(":visible"))
		 {
		 LoadMultiData("",$("#PrcsID").val(),$("#BNKS_CUSID").val(),"BankDetail2","DOCPDBfields","LSW_SGETDOCPROPDTL");
		 }
	 else{
		 LoadMultiData("",$("#PrcsID").val(),'',"BankDetail2","DOCPDBfields","LSW_SGETDOCPROPDTL");
	 }
	 
	 LoadMultiData("",$("#PrcsID").val(),$("#BNKS_CUSID").val(),"ApproveDetail12","DCLQDBfields","LSW_SGETDOCQURYDTL");
	 var activityname1 = GetActivityName();
	 $("#hIDDNACT").val(activityname1);
	 
	 if((activityname1=="BranchOPS") && ($("#HIDDENID").val()=="CPA" || $("#HIDDENID").val()=="BCM")){
		 DSVLBLALLWS();
		 
		 $("#HIDDENACT").val('Y');
		 $("#SaveTrnch3Nxt").hide();
	 }
	 if(activityname1=="SendToCredit"){
		 $("#HIDDENACT").val('Y');
	 }
	 if(activityname1 != "PreLoginSB" && activityname1 != "PreLogin")
	 {
		 if($("#UPDC_FINANCCOLLCT").val()=="Last 1 year"){
		 $("#UPDC_FINANCCOLLCT").attr("disabled","disabled");
		 $("#UPDC_FINANCCOLLCT").addClass("DSVLBL");
		 $("#UPDC_FINANCCOLLCT").material_select("destroy");
		 $("#UPDC_FINANCCOLLCT").material_select();
		 $("#UPDC_FINANOSV").attr("disabled","disabled");
		 //$("#UPDC_FINCVERIFY").closest('.md-form').hide();
		 }
	 }
	 if($("#UPDC_FINANCCOLLCT").val()=="Last 1 year"){
		 $("#UPDC_FINANOSV").prop("checked",false);
		$("#UPDC_FINANOSV").closest('.md-form').hide();
	 }
	 if(activityname1 != "PreLoginSB" && activityname1 != "PreLogin"  && activityname1 != "SendToCredit" && activityname1 != "BranchOPS"){
		 $("#NewlyAddedDoc").hide();
	 }
	 else{
		 $("#NewlyAddedDoc").show();
		 if(activityname1=="BranchOPS"){
		 $(".BranchOPSNotDSBL").removeAttr("disabled");
		 $(".BranchOPSNotDSBL").show();
		 }
	 }
	 
	 var DATA=["BankDetail1","BankDetail2"];
	 for (j=0;j<DATA.length;j++)
	 {
     var ValuationID = DATA[j]
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	if(DATA[j] == "BankDetail1")
		{
		LoadVefyHndlr (HTML,"BNKS_PROVERIFY");
		if(($(HTML).find('select[name=BNKS_FINANCCOLLCT]').val()=="Last 6 months")&&(activityname1 != "PreLoginSB" && activityname1 != "PreLogin"))
			{
				$(HTML).find("[name='BNKS_FINANCCOLLCT']").attr("disabled","disabled");
				$(HTML).find("[name='BNKS_FINANCCOLLCT']").addClass("DSVLBL");
				$(HTML).find("[name='BNKS_FINANCCOLLCT']").material_select("destroy");
				$(HTML).find("[name='BNKS_FINANCCOLLCT']").material_select();
				$(HTML).find("[name='BNKS_FINANOSV']").attr("disabled",true);
				//$(HTML).find("[name='BNKS_PROVERIFY']").closest('.md-form').hide();
				//$(HTML).find('.PODSave').hide()
			//$(HTML).find('.DYNROW').hide();
			}
			if($(HTML).find('select[name=BNKS_FINANCCOLLCT]').val()=="Last 6 months"){
				//$(HTML).find('input[name=BNKS_FINANOSV]').prop("checked",false);
				//$(HTML).find('input[name=BNKS_FINANOSV]').closest('.md-form').hide();
			}
		}
	else{
		LoadVefyHndlr (HTML,"DOCP_PROVERIFY");
	}
	 }
	}
	for(var i=0;i<$('.BankDetail1').find('.DYNROW').length;i++)
	{
		if($($('.BankDetail1').find('.DYNROW')[i]).find('[name=BNKS_BNKNAME]').val() == "")
		 {
		   //$(".NBNKD").hide();
		   //$('.NBNKD').find('.UPDCMndtry').removeClass('UPDCMndtry');
		   $($('.BankDetail1').find('.DYNROW')[i]).hide();
		   $($('.BankDetail1').find('.DYNROW')[i]).find('.UPDCMndtry').removeClass('UPDCMndtry');
		 }
	 else
		 {
		   //$(".NBNKD").show();
		   $($('.BankDetail1').find('.DYNROW')[i]).show();
		 }
	}
	 
	
	if($("#UPDC_FINCVERIFY").closest('.md-form').is(":visible")==true)
		{
		if($("#UPDC_FINCVERIFY").prop("checked") == true)
		{
			$("#FINCRAISEQU").hide();
		}
		else
		{
			$("#FINCRAISEQU").show();
		}
		}
	else{
		$("#FINCRAISEQU").hide();
	}
	if($("#UPDC_APLNVERFY").closest('.md-form').is(":visible")==true)
		{
			if($("#DMY5").val().split("|")[2] == "PLVer"){
		if($("#UPDC_APLNVERFY").prop("checked") == true)
		{
			$("#PLVERFYRAISEQU").hide();
		}
		else
		{
			$("#PLVERFYRAISEQU").show();
		}
			}
			else{
				if($("#UPDC_APLNVERFY").prop("checked") == true)
		{
			$("#PLVERFYRAISEQU").hide();
		}
		else
		{
			$("#PLVERFYRAISEQU").show();
		}
				$("#UPDC_APLNVERFY").removeAttr("disabled");
				$("#PLVERFYRAISEQU").removeAttr("disabled");
			}
		}
	else{
		$("#PLVERFYRAISEQU").hide();
	}
	 
	 var xml=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_SGETINCMCNSDR")
	
	 if($(xml).find('RESULT').text()=="Y")
		 {
		  $(".FinancialsCollected").show();
		  $("#UPDC_FINANCCOLLCT").addClass('UPDCMndtry')
		 }
	 else
		 {
		   $(".FinancialsCollected").hide();
		   $("#UPDC_FINANCCOLLCT").removeClass('UPDCMndtry')
		 }
	 
	 if(($(op).find("groupId").text()=="BSM")&&(activityname1=="PreLogin"))
		 {
		 $("#HIDDENCOL").val('9,10,11,12')
		 FncallDocChkLst(this,'Table2',{spname:'LSW_TKYCDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'KYCDOC',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckList');
		 FncallDocChkLst(this,'Table3',{spname:'LSW_TKYCDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckListOthers');
		 FncallDocChkLst(this,'Table4',{spname:'LSW_SGETDEFRPFDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','PFDEFR');
		 
		 $("#FormPageTab4").remove()
		 //$('.OtherQueries').hide()
		 $('.CREDIT').hide()
		 }
	 else if(($(op).find("groupId").text()=="BSM")&&(activityname1=="PreLoginSB"))
	 {
	 $("#HIDDENCOL").val('9,10,11')
	 FncallDocChkLst(this,'Table2',{spname:'LSW_TKYCDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'KYCDOC',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckList');
	 FncallDocChkLst(this,'Table3',{spname:'LSW_TKYCDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckListOthers');
	 FncallDocChkLst(this,'Table4',{spname:'LSW_SGETDEFRPFDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','PFDEFR');
	 
	 $("#FormPageTab4").remove()
	 //$('.OtherQueries').hide()
	 $('.CREDIT').hide()
	 $('.PLSendBack').show();
	 }
	 else if(($(op).find("groupId").text()=="ASM")&&(activityname1=="DEFAppr"))
		 {
		 $("#HIDDENCOL").val('9,10,11')
		 FncallDocChkLst(this,'Table2',{spname:'LSW_TKYCDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'KYCDOC',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckList');
		 FncallDocChkLst(this,'Table3',{spname:'LSW_TKYCDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckListOthers');
		 FncallDocChkLst(this,'Table4',{spname:'LSW_SGETDEFRPFDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','PFDEFR');
		 //$('.OtherQueries').hide()
		 $('.CREDIT').hide()
		 $(".PFDeferment").show();
		 }
	 else if(($(op).find("groupId").text()=="BSM")&&(activityname1=="Login")){
		 $("#HIDDENCOL").val('4,7,9,12')
		 FncallDocChkLst(this,'Table2',{spname:'LSW_TKYCDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'KYCDOC',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckList');
		 FncallDocChkLst(this,'Table3',{spname:'LSW_TKYCDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckListOthers');
		 FncallDocChkLst(this,'Table4',{spname:'LSW_SGETDEFRPFDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','PFDEFR');
		 
		 $("#FormPageTab4").remove()
		 //$('.OtherQueries').hide()
		 $('.CREDIT').hide()
	 }
	 else if(activityname1=="SendToCredit"){
		 $("#HIDDENCOL").val('9,12')
		 FncallDocChkLst(this,'Table2',{spname:'LSW_TKYCDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'KYCDOC',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckList');
		 FncallDocChkLst(this,'Table3',{spname:'LSW_TKYCDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckListOthers');
		 FncallDocChkLst(this,'Table4',{spname:'LSW_SGETDEFRPFDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','PFDEFR');
		 //$("#UPDC_PROPOSV").addClass('DSVLBL')  
		 $("#UPDC_FINANOSV").addClass('DSVLBL') 
         //$('.CREDIT').show()
         //$('.BankDetail1').find("[name='BNKS_FINANOSV']").attr("disabled",true)
	 }
	 else{
		 $("#HIDDENCOL").val('4,7,9,12')
		 FncallDocChkLst(this,'Table2',{spname:'LSW_TKYCDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'KYCDOC',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckList');
		 FncallDocChkLst(this,'Table3',{spname:'LSW_TKYCDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckListOthers');
		 FncallDocChkLst(this,'Table4',{spname:'LSW_SGETDEFRPFDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','PFDEFR');
		 //$("#UPDC_PROPOSV").addClass('DSVLBL')  
		 $("#UPDC_FINANOSV").addClass('DSVLBL') 
         //$('.CREDIT').show()
         //$('.BankDetail1').find("[name='BNKS_FINANOSV']").attr("disabled",true)
	 }
	 if($(".FormPageTab li.active").text() != "Applicant"){
		 $("#UPDC_APLNVERFY").closest(".form-row").hide();
	 }
	 
	 var PrcsId=$("#PrcsID").val();
	 var CUSID=$("#UPDC_CUSID").val();
	 var ACTID=$("#ActvID").val();
	 var activityname = GetActivityName();
	 var xml=UI_getdata(PrcsId,CUSID,ACTID,activityname,"","LSW_SCHECKFILELOGIN2")
	  
	 
	 CheckProStatus();
	 if($(".FormPageTab li.active").text() != 'Applicant')
	  {
	  $('.PropertyDocuments').hide();
	  $('.BankDetail2').find('.DOCPMndtry').removeClass('DOCPMndtry');
	  }
	  if($(".FormPageTab li.active").text() == 'Guarantor')
		 {
		 $(".UPDCMndtry").removeClass("UPDCMndtry");
		 }
		 
		 
		 if(activityname=="BranchOPS"){
			 $(".Deferred").attr("disabled","disabled");
		 }

	 $(document).on("click", ".DeleteQUERY" , function() {

         
		  if(confirm('Delete QUERY') == true)
	 		{
	     $(this).closest('.DYNROW').remove()	
		var k= $('.ApproveDetail12').find('.DYNROW').length
		for(i=0;i<k;i++)
			{
			//('.BankDetail1').find('.DYNROW')[i]
		    var	j=i+1
          $($('.ApproveDetail12').find('.DYNROW')[i]).find('#PROPTXTHDR').text('QUERY '+j)
			}
			}

})
    
	
	  var ButtonName= $(xml).find('BUTTONNAME').text()
	  
	  $("#MoveToLogin").text(ButtonName);
	if(ButtonName=="Save & Submit"){
		 $("#Reject").show();
		  $("#ApplForm").show();
		   $("#EndUse").show();
	 }
	 else{
		  $("#ApplForm").hide();
		   $("#EndUse").hide();
	 }
		 if(activityname=="PLVer"){
			 $("#Reject").hide();
		 }			 
	  
	  if(activityname=="DEFAppr")
		  {
		  $("#SendBack").show();
		  //$('.PropertyDocuments').hide();
		  //$('.FinancialsCollected').hide();
		  //$('.OtherQueries').hide();
		  }
		 if(activityname=="PreLogin")
			 {
	            $("#FormPageTab4").remove()
	            $("#FormPageTab5").hide()
	         }
	 
		 if(($(op).find("groupId").text()=="CPA" )&& $('.BTNDOCMVL').text() == "Send to Credit" && activityname=="Login")	 
			{
		         $('.BTNDOCMVL').hide()
		    }

            			
		 if($(op).find("COAPPLI").text()=="NO")
		 {
		 $("#FormPageTab2").hide()
		 }
	 if($(op).find("GUARANTOR").text()=="NO")
	    {
	 
		 $("#FormPageTab3").remove()
	   }
		$('#AddKYCDoc').on('click', function() {
            
			
			if($(this).text() == "Confirm")
		    {
			var MndtryChk = ChkMandatoryFlds("KYCDMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields");
			return false;
			}
		   }
			
			var TableID = "";
			
		if($("#DOCU_KYC").val() == "KYC")
			{
			
			TableID = "Table2"	
			
			}
		else
			{
			TableID = "Table3"
			}
			
		var rowCnt = $("#"+TableID).find("tbody tr").length;
		var ColumnCnt = $($("#"+TableID).find('thead tr')).find('th').length;
		
		var HTML="";
		
		var atLeastOneChecked=false;
		var checkcount = "";
		if (TableID == "Table2")
			{
		$('[name=CBSI_ProofAs]').each(function() {
	         if ($(this).prop("checked") == true) {
	             atLeastOneChecked = true;
	             
	             checkcount = $('[name=CBSI_ProofAs]').length;
	         }
	         
	     });
			}
		else
			{
			atLeastOneChecked = true;
			checkcount = 1;
			}
		
		if (atLeastOneChecked == true)
			{
		
		for (var j=0;j<checkcount;j++) 
			{

			if ($($('[name=CBSI_ProofAs]')[j]).prop('checked') == true || TableID == "Table3")
				{
			
				var table = $("#"+TableID).DataTable();
				 
				var rowNode = table
				    .row.add( [ '', '', '','','', '', '','','', '', '','','','','','','','','' ] )
				    .draw()
				    .node();
				

				if(TableID == "Table2")
					{
				value=$($('[name=CBSI_ProofAs]')[j]).siblings().text();
					}
				else
					{
					value = "Others";
					}
				var NewrowCnt = $("#"+TableID).find("tbody tr").length;
				
				HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);
				$($(HTML).find('td')[0]).find('img').show()
				$($(HTML).find('td')[1]).text(value);
				$($(HTML).find('td')[2]).text($("#KYCD_DOCNAME").val());
				if($("#DMY5").val().split('|')[2]=="BranchOPS"){
				$($(HTML).find('td')[6]).find('.Deferred').attr("disabled","disabled")
				}
				$(HTML).addClass("tbodytr");
				$(HTML).find("td").addClass("tbodytrtd");

			if ($("#KYCD_DOCATTACHMENT").val() != "")
			{				

				$($(HTML).find('td')[3]).find("[type=text]").val($("#KYCD_DOCATTACHMENT").val());
				var op = UI_getdata("","","","","","LSW_SGETTYMONSTUS");
				$($(HTML).find('td')[4]).find("[type=text]").val($(op).find("DT").text());
				//$($(HTML).find('td')[6]).find('input[type=radio]:first').prop('checked', true);
				$($(HTML).find('td')[6]).find('input:radio:first').prop("checked", true).trigger("click");
				if($("#DOCU_KYC").val()=="Others"){
				$($($(HTML).find('td')).find('input[type=checkbox]')[0]).addClass("OKYDGRDMNDTRY");
				}
				else if($("#DOCU_KYC").val()=="KYC"){
				$($($(HTML).find('td')).find('input[type=checkbox]')[0]).addClass("KYCDGRDMNDTRY");
				}
			}
				$($(HTML).find('td')[9]).text($("#UPDC_CUSID").val());
				
				
				// Field Initialisation Start
	            
				
				
				// Dropdown
				//$('#'+TableID+' .Gridmdb-select').append('<option value="'+$("#KYCD_DOCNAME").val()+'">'+$("#KYCD_DOCNAME").val()+'</option>');  
				//$("#"+TableID+" .Gridmdb-select option:contains("+$("#KYCD_DOCNAME").val()+")").attr("selected","selected")
				$('#'+TableID+' .Gridmdb-select').material_select("destroy");    
				
				$('#'+TableID+' .Gridmdb-select').material_select();               

				// Calendar

				var $input = $(document).find('.Griddatepicker').pickadate({
				    //editable: 'true',
					format: 'dd/mm/yyyy',
					selectYears: 150,
					selectMonths: true
					
				})
				.on("change", function() {
				  
					
					   $(this).prev().val($(this).val());
					   $(this).prev().focus();
				   
				});


			 
				
				//Field Initialisation End
				
			}
			}
		$("#ADDKYCDOCCLOSE").click();
			}
		else
			{
			alert("Select Any One Proof");
			}
		});
	
		$(".APCDSTATUS").on('click', function() {
	    	var Val = "";
	    	if(this.text=="Reject")
	    		{
	    		Val="Rejected"
	    		}
	    	else if(this.text=="Approve")
	    		{
	    		Val="Approved"
	    		
	    		}
	    	$(this).closest('span').find('input:hidden').val(Val);
	    	$(this).closest('span').find('div').hide()
	    	$(this).closest('span').find('input:hidden').attr('type', 'text');

	    });
		
		$(document).on("click", "#Reject", function() {
			$("#REJECTREMARKSPopup").click();
			
		});
	$('.FormSave').on('click', function() {
		
		//var FormXML =	submitdata("CBSIDBfields");
		var html1=$('.BankDetail2').find('.DYNROW')
		if($(this).text() == "Save & Next")
		{
			$("#BNKS_FINANCCOLLCT").removeClass('UPDCMndtry');
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields");
			return false;
			}
		var MndtryChk = ChkMandatoryFlds_V1("DOCPMndtry",html1);
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields");
			return false;
			}
		 // NXTTAB(this);
		MndtryChk = CheckDocMndtry("Table2","KYCDGRDMNDTRY","KYC");
		if(MndtryChk != "")
			{
			alert(MndtryChk);
			return;
			}
		MndtryChk = CheckDocMndtry("Table3","OKYDGRDMNDTRY","Others");
		if(MndtryChk != "")
			{
			alert(MndtryChk);
			return;
			}
       
		}
		
		
		
		
		// Mandatory Check Start
		if($(this).text() == "Move to Login" || $(this).text() == "Save & Next" ||  $(this).text() == "Save & Submit")
			{
			$("#BNKS_FINANCCOLLCT").removeClass('UPDCMndtry');
			var prfx = $(this).attr("data-aria").split("|")[1];
			var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
			var MndtryChk = ChkMandatoryFlds_V1("DOCPMndtry",html1);
		
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}	
			MndtryChk = CheckDocMndtry("Table2","KYCDGRDMNDTRY","KYC");
			if(MndtryChk != "")
				{
				alert(MndtryChk);
				return;
				}
			MndtryChk = CheckDocMndtry("Table3","OKYDGRDMNDTRY","Others");
			if(MndtryChk != "")
				{
				alert(MndtryChk);
				return;
				}
				
				if(($("#UPDC_FINANCCOLLCT").val()!="Last 1 year"&& $("#UPDC_FINANCCOLLCT").val()!="") && $('input[name="UPDC_FINANOSV"]:checked').length==0){
					alert("Financial OSV is mandatory");
					return
				}
				if($('.NBNKD').is(':visible')==true){
			   for(var i=0;i<$('.BankDetail1').find('.DYNROW').length;i++){
				   if(($($('.BankDetail1').find('.DYNROW')[i]).find('[name="BNKS_FINANCCOLLCT"]').val()!="Last 6 months"&& $($('.BankDetail1').find('.DYNROW')[i]).find('[name="BNKS_FINANCCOLLCT"]').val()!="") && $($('.BankDetail1').find('.DYNROW')[i]).find('[name="BNKS_FINANOSV"]:checked').length==0)
					   {
					   alert("Banking OSV is mandatory");
					   return
					   }
			   }
				}
			
			}
			
			
			
	/*	if($(this).text() == "Send for Approval")
		{    
	       
		   
	         var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_CHECKINCBNK")
			
			var FINCBNKDETAILS=$(xml).find('BNKDETAILS').text()
			
		    if(FINCBNKDETAILS=="NO")
		    	{
		          alert("Cabture banking Details for for income consider")
		    	}
		
	
			var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKSCHEMECOUNT")
			
			var RESULT=$(xml).find('RESULT').text()
	
						if(RESULT != "")
				{
			    var Alert2=''
				var nameArr = RESULT.split(',')
                 k=nameArr.length
				 for(i=0;i<k;i++)
				 {
					var Alert1= nameArr[i]
					var Alert2 = Alert2 +'\r\n'+Alert1
				 }
				   alert(Alert2)
				   return false;
				}
		
		}
		
		*/
		if($(this).text() == "Send to Credit" || $(this).text() == "Send for Approval" || $(this).text() == "Save & Submit")
			{
			$("#BNKS_FINANCCOLLCT").removeClass('UPDCMndtry');
			var prfx = $(this).attr("data-aria").split("|")[1];
			var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
			var MndtryChk = ChkMandatoryFlds_V1("DOCPMndtry",html1);
		
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}	
			MndtryChk = CheckDocMndtry("Table2","KYCDGRDMNDTRY","KYC");
			if(MndtryChk != "")
				{
				alert(MndtryChk);
				return;
				}
			MndtryChk = CheckDocMndtry("Table3","OKYDGRDMNDTRY","Others");
			if(MndtryChk != "")
				{
				alert(MndtryChk);
				return;
				}
			}
			var PrcsId=$("#PrcsID").val();
			
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			
			var KYCDOCGRID = TxtGridsubmitdata_SV1("Table2","KYCD_","UPDC_");
			AssignGridXmltoField("UPDC_KYCDOC", KYCDOCGRID);
			
			
			var KYCOTHRDOCGRID = TxtGridsubmitdata_SV1("Table3","OKYD_","UPDC_");
			AssignGridXmltoField("UPDC_OTHERDOC", KYCOTHRDOCGRID);
			
			var UPDC_PFDEFR = TxtGridsubmitdata_V1("Table4","DFPD_","UPDC_");
			AssignGridXmltoField("UPDC_PFDEFR", UPDC_PFDEFR);
			
			var UPDC_PROPGRD = TxtGridsubmitdata_V2("BankDetail2","DOCP_","UPDC_","DOCPDBfields");
			AssignGridXmltoField("UPDC_PROPGRD", UPDC_PROPGRD);
			
			var UPDC_BNKSTMNT = TxtGridsubmitdata_V2("BankDetail1","BNKS_","UPDC_","BNKSDBfields");
			AssignGridXmltoField("UPDC_BNKSTMNT", UPDC_BNKSTMNT);
			
			var UPDC_QURYDTL = TxtGridsubmitdata_V2("ApproveDetail12","DCLQ_","UPDC_","DCLQDBfields");
			AssignGridXmltoField("UPDC_QURYDTL", UPDC_QURYDTL);
			
			FormDataToDB(tbl,prfx,$("#UPDC_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
			
			var activityname = GetActivityName();
			
			
			
			/*if(($(this).text() == "Save & Submit") && (activityname == "PreLogin"))
			{
			
			 // NXTTAB(this);
	
		
		// Mandatory Check End
		
			
			// For Workflow Submission Start
		
			var Button = "Frwd";
			// To be Placed At Last Start
			
			WFComplete ($("#ActvID").val(),"var_status="+Button,"");			
			// To be Placed At Last End
				}
			
			else */
			if(($(this).text() == "Save & Submit") && (activityname == "Login"))
			{
					var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHECKDOCPROPDETL")
					
					if($(xml).find('RESULT').text() != "SUCCESS")
					{
						alert($(xml).find('RESULT').text())
						return false
					}
					else
				     {
						var Button = "Frwd"; 
						// To be Placed At Last Start
						WFComplete ($("#ActvID").val(),"var_status="+Button,"");
					}
			}
		/*	else if ($(this).text() == "Send for Approval")
			{			
       var Button = "ToRCMD";
				// To be Placed At Last Start
	   WFComplete ($("#ActvID").val(),"var_status="+Button+"&var_RcmdUsr=CM","");
			}  */
			if(($(this).text() == "Save & Submit") && (activityname == "PreLogin" || activityname == "PreLoginSB"))
				{
					
				   var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHECKPFCOLLECTION")
					
					var Collection=$(xml).find('RESULT').text()
					
					
					
						if(($("#DMY7").val().split("|")[0]=="Registered Mortgage")||($("#DMY7").val().split("|")[0]=="Re-Punch"))
						{
                         Collection='SUCCESS'
						}
					
					if(Collection != 'SUCCESS')
						{
						  
						  var Alert2=''
								var nameArr = Collection.split(',')
						         k=nameArr.length
								 for(i=0;i<k;i++)
								 {
									var Alert1= nameArr[i]
									var Alert2 = Alert2 +'\r\n'+Alert1
								 }
						  
						  alert(Alert2);
						   return false;
						   
						   
						}
				 
				 
					
			    var CheckPhoto=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHECKCUSPHAPPL")

				var BANK=UI_getdata($("#PrcsID").val(),"","","","","LSW_SChkBankDetails")
				
			     var BANKDETAILS=$(BANK).find('BANKDETAILS').text()
			
			     if($(CheckPhoto).find('RESULT').text() == "N")
			       {
			    	   alert('Upload Applicant Photo');
				       return false;
			       }
			     else if(BANKDETAILS == "NO")
				   {
				     alert('Fill the Primary Acccount Bank Details for the Applicant(s) whose Income considered is selected as Yes');
				     return false;
				   }
					
					
				/*var BANK=UI_getdata($("#PrcsID").val(),"","","","","LSW_SChkBankDetails")
				
			     var BANKDETAILS=$(BANK).find('BANKDETAILS').text()
			
			   if(BANKDETAILS == "NO")
				  {
				     alert('Fill the Bank Details for Income Consider Applicant');
				     return false;
				   }*/
			

              var MILESTONE=UI_getdata('PRELOGIN',$("#PrcsID").val(),"","","","LSW_SGETMILESTONEUPDATE")
			
				var activityname1 = GetActivityName();
				var xml=UI_getdata($("#PrcsID").val(),activityname1,"","","","LSW_SWFVARDECIDE");
				
				var Button = $(xml).find("WFVAR").text();
				
				WFComplete ($("#ActvID").val(),"var_status="+Button,"");	
			}
			 if(($(this).text() == "Save & Submit") && (activityname == "DEFAppr"))
				 {
				 var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SHNDLSTATS")
				 if($(xml).find('RESULT').text() == 'FAIL')
					 {
					 alert("File can't be submitted with reject status. Kindly send back the file.")
					 return;
					 }
				 else{
					 
					 UI_getdata($("#PrcsID").val(),activityname,"","","","LSW_SUPDTPFSTST");
					 var activityname1 = GetActivityName();
						var xml=UI_getdata($("#PrcsID").val(),activityname1,"","","","LSW_SWFVARDECIDE");
						
						var Button = $(xml).find("WFVAR").text();
						
						WFComplete ($("#ActvID").val(),"var_status="+Button,"");
				 }
				 }
			 if(($(this).text() == "Send Back") && (activityname == "DEFAppr"))
				 {
				UI_getdata($("#PrcsID").val(),activityname,"","","","LSW_SUPDTPFSTST");
				 var Button = "DAS";
				 WFComplete ($("#ActvID").val(),"var_status="+Button,"");
				 
				 }
			 if(($(this).text() == "Save & Submit") && (activityname == "PLVer"))
			 {
				 

				 var PrcsId=$("#PrcsID").val();

				 var xml=UI_getdata(PrcsId,"","","","","LSW_SCHECKCIVILPENDING")
				  
				  var FILESTATUS= $(xml).find('FILESTATUS').text()
				  FILESTATUS='';
				  if(FILESTATUS=="PENDING")
					  {
					  
					    alert('CIBIL Status is pending not allow Credit Stage');
					   return false;
					  }
				 
				 var activityname1 = GetActivityName();
					var xml=UI_getdata($("#PrcsID").val(),activityname1,"","","","LSW_SWFVARDECIDE");
					
					var Button = $(xml).find("WFVAR").text();
					if(Button=="SC" || Button=="Login"){
						WFComplete ($("#ActvID").val(),"var_status="+Button,"");
					}
					else{
						alert(Button);
						return;
					}
			 
			 }
			 
			// For Workflow Submission Start
			
			// Tab Header Change Start
			
			//$(".FormPageMultiTab li.active").attr("id",$("#CBSI_CUSID").val());
		    //$(".FormPageMultiTab li.active").attr("title",$("#CBSI_CUSID").val());
			//$(".FormPageMultiTab li.active a div").text($("#UPDC_CUSID").val());
			
			// Tab Header Change End
			
			if($(this).text() == "Save & Next")
			{
				NXTTAB(this);
			}

		});
	
	/*$(".GridDocFil").on('change', function() {
    	var op = UI_getdata("","","","","","LSW_SGETTYMONSTUS")
    	$(this).closest('td').next().find('input[type=text]').val($(op).find("DT").text())

    });*/
	$(document).on("change", ".VRFY", function() {
		var secid = $(this).attr("data-quey-sec");
			if(secid == "")
			{
			alert("Incorrect Section ID")
			return
			}
			var op=""
				if(secid=="S03")
				{
				op=UI_getdata("Document Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find('[name=DOCP_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('[name=DOCP_PROPID]').val(),"","","LSW_SCHKQURYRAISED");
				}
				if(secid=="S08")
				{
					op=UI_getdata("Document Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).text(),"","","LSW_SCHKQURYRAISED");
				}
				if(secid=="S01")
				{
					op=UI_getdata("Document Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).find('[name=KYCD_DOCNAME'+$(this).closest('.tbodytr').index()+']').val(),"","","LSW_SCHKQURYRAISED");
				}
				if(secid=="S02"){
					op=UI_getdata("Document Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find('[name=BNKS_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('#PROPTXTHDR').text()+'-'+$(this).closest('.DYNROW').find('[name=BNKS_BNKNAME]').val()+'-'+$(this).closest('.DYNROW').find('[name=BNKS_ACCNTNO]').val(),"","","LSW_SCHKQURYRAISED");
				}
				if(secid=="S04"){
					op=UI_getdata("Document Checklist",$("#PrcsID").val(),$('#UPDC_CUSID').val()+'-Financial',"","","LSW_SCHKQURYRAISED");
				}
				if($(op).find("RESULT").text()!="ALLOW"){
					$(this). prop("checked", false);
					alert($(op).find("RESULT").text());
					return;
				}
		if($(this).prop("checked")==true)
			{
			$(this).closest('td').next().find('button').hide();
			}
		else{
			$(this).closest('td').next().find('button').show();
		}
});
	$(document).on("change", ".VRFY1", function() {
		var secid = $(this).attr("data-quey-sec");
	if(secid == "")
	{
	alert("Incorrect Section ID")
	return
	}
	var op=""
		if(secid=="S03")
		{
		op=UI_getdata("Document Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find('[name=DOCP_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('[name=DOCP_PROPID]').val(),"","","LSW_SCHKQURYRAISED");
		}
		if(secid=="S08")
		{
			op=UI_getdata("Document Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).text(),"","","LSW_SCHKQURYRAISED");
		}
		if(secid=="S01")
		{
			op=UI_getdata("Document Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).find('[name=KYCD_DOCNAME'+$(this).closest('.tbodytr').index()+']').val(),"","","LSW_SCHKQURYRAISED");
		}
		if(secid=="S02"){
			op=UI_getdata("Document Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find('[name=BNKS_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('#PROPTXTHDR').text()+'-'+$(this).closest('.DYNROW').find('[name=BNKS_BNKNAME]').val()+'-'+$(this).closest('.DYNROW').find('[name=BNKS_ACCNTNO]').val(),"","","LSW_SCHKQURYRAISED");
		}
		if(secid=="S04"){
			op=UI_getdata("Document Checklist",$("#PrcsID").val(),$('#UPDC_CUSID').val()+'-Financial',"","","LSW_SCHKQURYRAISED");
		}
		if($(op).find("RESULT").text()!="ALLOW"){
			$(this). prop("checked", false);
			alert($(op).find("RESULT").text());
			return;
		}
		if($(this).prop("checked")==true)
			{
			$(this).closest('.CREDIT').next().find('button').hide();
			}
		else{
			$(this).closest('.CREDIT').next().find('button').show();
		}
});
	
	$(document).on("change", ".VRFY2", function() {
	var secid = $(this).attr("data-quey-sec");
	if(secid == "")
	{
	alert("Incorrect Section ID")
	return
	}
	var op=""
	if(secid=="SSPL"){
		op=UI_getdata("Document Checklist",$("#PrcsID").val(),$('#UPDC_CUSID').val()+'-Verification',"","","LSW_SCHKQURYRAISED");
	}
		if($(op).find("RESULT").text()!="ALLOW"){
			$(this). prop("checked", false);
			alert($(op).find("RESULT").text());
			return;
		}
	if($(this).prop("checked")==true)
			{
			$(this).closest('.CREDIT').next().find('button').hide();
			}
		else{
			$(this).closest('.CREDIT').next().find('button').show();
		}
});

$(document).on("click", ".DOCSTATUS" , function() {

$(this).closest('.tbodytrtd').next().next().next().next().next().next().find('input').val('')
if($("#HIDDENACT").val()!="Y"){
//$(".DOCSTATUS").on('click', function() {
	
var Val = $("input[name="+$(this).attr("name")+"]:checked").val();
    	if(Val == "Collected")
    		{

$(this).closest('.tbodytrtd').next().find('input[type=text]').val("");
$(this).closest('td').next().find('input[type=text]').attr( "disabled", "disabled" )
    		$(this).closest('td').next().find('input[type=text]').addClass("DSVLBL")
$(this).closest('td').next().find('input[type=text]').next().hide();

	if($(".FormPageTab li.active").text() != "Guarantor")
			{
			if($(this).closest('.tbodytrtd').prev().prev().find('input[type=text]').val() == "" || $(this).closest('.tbodytrtd').prev().prev().prev().find('input[type=text]').val() == "" || $(this).closest('.tbodytrtd').prev().prev().prev().prev().find('select').val() =="")
			{
			$(this).prop('checked', false)
			if($(this).closest('.tbodytrtd').prev().prev().prev().prev().find('select').val() == "" || $(this).closest('.tbodytrtd').prev().prev().prev().prev().text() == "")
				{
				
				alert("NAME OF DOCUMENT is Mandatory")
				return;
				}
			else if($(this).closest('.tbodytrtd').prev().prev().prev().find('input[type=text]').val() == "")
				{
				alert("UPLOAD is Mandatory")
				return;
				}
			else if($(this).closest('.tbodytrtd').prev().prev().find('input[type=text]').val() == "")
			{
			alert("DATE OF UPLOAD is Mandatory")
			return;
			}
			}
			}
		else
{
			if($(this).closest('.tbodytrtd').prev().prev().find('input[type=text]').val() == "" || $(this).closest('.tbodytrtd').prev().prev().prev().find('input[type=text]').val() == "" || $(this).closest('.tbodytrtd').prev().prev().prev().prev().find('select').val() =="")
			{
			$(this).prop('checked', false)
			if($(this).closest('.tbodytrtd').prev().prev().prev().prev().find('select').val() == "" || $(this).closest('.tbodytrtd').prev().prev().prev().prev().text() == "")
				{
				
				alert("NAME OF DOCUMENT is Mandatory")
				return;
				}
			else if($(this).closest('.tbodytrtd').prev().prev().prev().find('input[type=text]').val() == "")
				{
				alert("UPLOAD is Mandatory")
				return;
				}
			else if($(this).closest('.tbodytrtd').prev().prev().find('input[type=text]').val() == "")
			{
			alert("DATE OF UPLOAD is Mandatory")
			return;
			}
			}
		}
		
		}
		
    	var Val = $("input[name="+$(this).attr("name")+"]:checked").val();
    	if(Val == "Deferred")
    		{
    		//var op = UI_getdata("","","","","","LSW_SGETTYMONSTUS")
        	//$(this).closest('td').next().find('input[type=text]').val($(op).find("DT").text())
    		$(this).closest('td').next().find('input[type=text]').removeAttr("disabled")
    		$(this).closest('td').next().find('input[type=text]').removeClass("DSVLBL")
    		$(this).closest('td').next().find('input[type=text]').next().show()
    		$($(this).closest('tr').find('.tbodytrtd')[3]).find('input[type=text]').val('');
    		$($($(this).closest('tr').find('.tbodytrtd')[3]).find('img')[1]).hide();
    		$($(this).closest('tr').find('.tbodytrtd')[4]).find('input').val('');
    		
    		$($(this).closest('.tbodytr').find('input[type=checkbox]')[0]).parent().hide();
			$($(this).closest('.tbodytr').find('input[type=checkbox]')[1]).attr( "disabled", "disabled" );
			$($(this).closest('.tbodytr').find('input[type=checkbox]')[1]).prop('checked',false);
			$($($(this).closest('.tbodytr').find('.tbodytrtd'))[11]).find('button').hide();
    		$($(this).closest('.tbodytr').find('input[type=checkbox]')[0]).removeClass("KYCDGRDMNDTRY");
    		}
    	else {
    		$(this).closest('td').next().find('input[type=text]').val('')
    		$(this).closest('td').next().find('input[type=text]').attr( "disabled", "disabled" )
    		$(this).closest('td').next().find('input[type=text]').addClass("DSVLBL")
    		$(this).closest('td').next().find('input[type=text]').next().hide();
    		
    		$(this).closest('.tbodytr').find('input[type=checkbox]').parent().show();
			$(this).closest('.tbodytr').find('input[type=checkbox]').removeAttr("disabled")
    		$($(this).closest('.tbodytr').find('input[type=checkbox]')[0]).addClass("KYCDGRDMNDTRY");
    	}
}
else{
	var Val = $("input[name="+$(this).attr("name")+"]:checked").val();
	if(Val == "Collected"){
		$(this).closest('.tbodytrtd').next().find('input[type=text]').val("");
		$(this).closest('td').next().find('input[type=text]').attr( "disabled", "disabled" )
		$(this).closest('td').next().find('input[type=text]').addClass("DSVLBL")
		$(this).closest('td').next().find('input[type=text]').next().hide();
		
		
		if($($(this).closest('.tbodytr').find('.tbodytrtd')[2]).find('input[type=text]').val() == "" || $($(this).closest('.tbodytr').find('.tbodytrtd')[3]).find('input[type=text]').val() =="")
			{
			$(this).prop('checked', false)
			if($($(this).closest('.tbodytr').find('.tbodytrtd')[2]).find('input[type=text]').val() == "")
				{
				
				alert("NAME OF DOCUMENT is Mandatory")
				return;
				}
			else if($($(this).closest('.tbodytr').find('.tbodytrtd')[3]).find('input[type=text]').val() == "")
				{
				alert("UPLOAD is Mandatory")
				return;
				}
			}
		
	}
    	if(Val == "Deferred")
    		{
    		//var op = UI_getdata("","","","","","LSW_SGETTYMONSTUS")
        	//$(this).closest('td').next().find('input[type=text]').val($(op).find("DT").text())
    		$(this).closest('td').next().find('input[type=text]').removeAttr("disabled")
    		$(this).closest('td').next().find('input[type=text]').removeClass("DSVLBL")
    		$(this).closest('td').next().find('input[type=text]').next().show()
    		$($(this).closest('tr').find('.tbodytrtd')[3]).find('input[type=text]').val('');
    		$($($(this).closest('tr').find('.tbodytrtd')[3]).find('img')[1]).hide();
    		$($(this).closest('tr').find('.tbodytrtd')[4]).find('input').val('');
    		
    		$($(this).closest('.tbodytr').find('input[type=checkbox]')[0]).parent().hide();
			$($(this).closest('.tbodytr').find('input[type=checkbox]')[1]).prop('checked',false);
			$($($(this).closest('.tbodytr').find('.tbodytrtd'))[11]).find('button').hide();
			$($(this).closest('.tbodytr').find('input[type=checkbox]')[1]).attr( "disabled", "disabled" );
    		$($(this).closest('.tbodytr').find('input[type=checkbox]')[0]).removeClass("KYCDGRDMNDTRY");
    		}
    	else {
    		$(this).closest('td').next().find('input[type=text]').val('')
    		$(this).closest('td').next().find('input[type=text]').attr( "disabled", "disabled" )
    		$(this).closest('td').next().find('input[type=text]').addClass("DSVLBL")
    		$(this).closest('td').next().find('input[type=text]').next().hide();
    		
    		$(this).closest('.tbodytr').find('input[type=checkbox]').parent().show();
			$(this).closest('.tbodytr').find('input[type=checkbox]').removeAttr("disabled")
    		$($(this).closest('.tbodytr').find('input[type=checkbox]')[0]).addClass("KYCDGRDMNDTRY");
    	}
}
    });
	
	$(document).on("click",".RaiseQry",function() {
	
	var secid = $(this).attr("data-quey-sec");
	var secid1 = $(this).attr("data-quey-sec");
	if(secid == "")
		{
		alert("Incorrect Section ID")
		return
		}
	var op=""
	if(secid=="S03")
	{
	op=UI_getdata("Document Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find('[name=DOCP_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('[name=DOCP_PROPID]').val(),"","","LSW_SCHKQURYRAISED");
	}
	if(secid=="S08")
	{
		op=UI_getdata("Document Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).text(),"","","LSW_SCHKQURYRAISED");
	}
	if(secid=="S01")
	{
		op=UI_getdata("Document Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).find('[name=KYCD_DOCNAME'+$(this).closest('.tbodytr').index()+']').val(),"","","LSW_SCHKQURYRAISED");
	}
	if(secid=="S02"){
		op=UI_getdata("Document Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find('[name=BNKS_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('#PROPTXTHDR').text()+'-'+$(this).closest('.DYNROW').find('[name=BNKS_BNKNAME]').val()+'-'+$(this).closest('.DYNROW').find('[name=BNKS_ACCNTNO]').val(),"","","LSW_SCHKQURYRAISED");
	}
	if(secid=="S04"){
		op=UI_getdata("Document Checklist",$("#PrcsID").val(),$('#UPDC_CUSID').val()+'-Financial',"","","LSW_SCHKQURYRAISED");
	}
	if(secid=="SSPL"){
		op=UI_getdata("Document Checklist",$("#PrcsID").val(),$('#UPDC_CUSID').val()+'-Verification',"","","LSW_SCHKQURYRAISED");
	}
	if($(op).find("RESULT").text()=="ALLOW"){
		if(secid=="SSPL"){
			secid="S08";
		}
	var xml = UI_getdata(secid,$("#PrcsID").val(),$('#LogUsr').val(),"","","LSW_SGETQURYTYP");
	/*var xml=UI_getdata($("#PrcsID").val(),$('#LogUsr').val(),"","","","LSW_SGETQUERYTO");*/
		$('.RAISE').find("#MNGQ_TOUSRIDI").empty();
		$('.RAISE').find("#MNGQ_TOUSRIDI").append($(xml).find("RESULT").html());
		$('.RAISE').find("#MNGQ_TOUSRIDI").material_select(); 
        
		$('.RAISE').find(".QRYDETAILS").hide()
        
        $('.RAISE').find("#MNGQ_SECTNID").val('');
		$('.RAISE').find("#MNGQ_SECTNID").material_select(); 
        
		$('.RAISE').find("#MNGQ_TYP").val('');
		$('.RAISE').find("#MNGQ_TYP").material_select(); 
        
		$('.RAISE').find("#MNGQ_APPLNO").val('');
		if($(xml).find("TYP").text()=="Application"){
			$('#MNGQ_APPLNO').append('<option value="'+$("#DMY7").val().split('|')[7]+'">"'+$("#DMY7").val().split('|')[7]+'"</option>');
			$('#MNGQ_APPLNO').find("option[value='"+$("#DMY7").val().split('|')[7]+ "']").attr("selected","selected");
		}
		else{
			$('#MNGQ_APPLNO').append('<option value="'+$(".FormPageMultiTab").find('li.active').attr("id")+'">"'+$(".FormPageMultiTab").find('li.active').attr("id")+'"</option>');
			$('#MNGQ_APPLNO').find("option[value='"+$(".FormPageMultiTab").find('li.active').attr("id")+ "']").attr("selected","selected");
			
			//$("#MNGQ_APPLNO").val($(".FormPageMultiTab").find('li.active').attr("id"));
		}
		$('.RAISE').find("#MNGQ_APPLNO").material_select(); 
		$('.RAISE').find("#MNGQ_DESC").val('');
        
		  //Attach clear	start	   
            $('.RAISE').find("#MNGQ_ATTCHURLIUPLOAD").show();
            $('.RAISE').find('.rounded1').hide();
            $('.RAISE').find("#MNGQ_ATTCHURLI").val('');
            $('.RAISE').find("input[name=datafile]").attr('disabled',false);
            $('.RAISE').find("input[name=datafile]").attr('display','block');
  
            $('.RAISE').find('.FIDU').find('.name').text('Click Here to Upload')
			//attach Clear end
		
		
		//push data to hidden
		if(secid1 != "SSPL"){
		$("#MNGQ_SECTNID").val(secid);
		}
		else{
			$("#MNGQ_SECTNID").val("S08");
			secid=secid1;
		}
		
		//$('#MNGQ_TYP').find("option[value='"+$(xml).find("TYP").text()+ "']").attr("selected","selected");
		$('#MNGQ_TYP').val($(xml).find("TYP").text());
		
		if(secid=="S08")
		{
			$("#MNGQ_QURYNAME").val($($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text());
			$("#MNGQ_UNIQID").val($($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).text());
		}
		if(secid=="S01")
		{
			$("#MNGQ_QURYNAME").val($($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text());
			$("#MNGQ_UNIQID").val($($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).find('[name=KYCD_DOCNAME'+$(this).closest('.tbodytr').index()+']').val());
		}
		if(secid=="S02"){
			$("#MNGQ_QURYNAME").val($(this).closest('.DYNROW').find("[name=BNKS_BNKNAME]").val()+"-"+$(this).closest('.DYNROW').find("[name=BNKS_ACCNTNO]").val().substr($(this).closest('.DYNROW').find("[name=BNKS_ACCNTNO]").val().length - 4));
			$("#MNGQ_UNIQID").val($(this).closest('.DYNROW').find('[name=BNKS_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('#PROPTXTHDR').text()+'-'+$(this).closest('.DYNROW').find('[name=BNKS_BNKNAME]').val()+'-'+$(this).closest('.DYNROW').find('[name=BNKS_ACCNTNO]').val());
		}
		if(secid=="S04"){
			$("#MNGQ_QURYNAME").val("Financial-"+$(this).closest('.form-row').find("[name=UPDC_FINANCCOLLCT]").val());
			$("#MNGQ_UNIQID").val($('#UPDC_CUSID').val()+'-Financial');
		}
		if(secid=="S03"){
			$("#MNGQ_QURYNAME").val($(this).closest('.DYNROW').find('#PROPTXTHDR').text());
			$("#MNGQ_UNIQID").val($(this).closest('.DYNROW').find('[name=DOCP_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('[name=DOCP_PROPID]').val());
		}
		if(secid=="SSPL"){
			$("#MNGQ_QURYNAME").val($("#UPDC_APLNVERFY").next().text());
			$("#MNGQ_UNIQID").val($('#UPDC_CUSID').val()+'-Verification');
		}
		
		
		$('.RAISE').find("#MNGQ_DESC").addClass('MNGOMndtry');
		
		$('.RASHW').hide();
		
		$('.RAISE').find("#MNGQ_SECTNID").removeClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_TYP").removeClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_QURYNAME").removeClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_APPLNO").removeClass('MNGOMndtry');
		
		 $("#RAISEQUERY").click();
				 
				 
	}
	else{
			alert($(op).find("RESULT").text());
			return;
		}
			});	

});


