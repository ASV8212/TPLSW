var previous="";
var RLE = "";
var QueryResult = '<option value="">Select</option><option value="DEFERRAL">DEFERRAL</option><option value="NO DEFERRAL">NO DEFERRAL</option>';
var ScreenedResult = '<option value="">Select</option><option value="NOT SCREENED">NOT SCREENED</option>';
var SampledResult = '<option value="">Select</option><option value="POSITIVE">POSITIVE</option><option value="FAILED">FAILED</option><option value="NEGATIVE">NEGATIVE</option><option value="RISK ALERT">RISK ALERT</option>';
var SampledResult1 = '<option value="">Select</option><option value="POSITIVE">POSITIVE</option><option value="FAILED">FAILED</option><option value="NEGATIVE">NEGATIVE</option><option value="RISK ALERT">RISK ALERT</option>';
var SampledInitiate = '<option value="">Select</option><option value="DEFERRAL">DEFERRAL</option><option value="NO DEFERRAL">NO DEFERRAL</option>';
var ScreenedResult2 = '<option value="">Select</option><option value="SCREENED">SCREENED</option>';


$(document).ready(function () {

	
	$("#RCBK_PRCSID").attr("value",$("#PrcsID").val());
	$("#RCDQ_PRCSID").attr("value",$("#PrcsID").val());
	
 var GetGROUP = UI_getdata($("#PrcsID").val(),"","",$("#PrMs5").val(),"","LSW_SCHKEXTERNALRCU");
 RLE = $(GetGROUP).find("GROUPN").text();
 if(RLE == "ERCU")
 {
 $(".ApplTitle").text('\n External Review\n')
 }
 else
 {
	$(".ApplTitle").text('\n Internal Review\n') 
 }
	  if($(GetGROUP).find("GROUPN").text()=="ERCU")
	  {
		  $("#FormPageTab1").hide()
		   $("#FormPageTab2").hide()
		    $("#FormPageTab3").hide();
			$("#"+$(GetGROUP).find("PAGEURL").text()).show()
			$('.InitBTN').hide()
			$("#"+$(GetGROUP).find("PAGEURL").text()).addClass('active')
			$("#"+$(GetGROUP).find("CUSID").text()).addClass('active')
			$("#"+$(GetGROUP).find("CUSID").text()).show()
			//$("#"+$(GetGROUP).find("PAGEURL").text()).addClass('active')
			//$('.nav-item').addClass('DSVLBL')
		  //$('.nav-item').attr('disabled',true)
		  $("#IRCM_CUSID").val($(GetGROUP).find("CUSID").text());
		  $("#"+$(GetGROUP).find("APPCUSID").text()).text($(GetGROUP).find("CUSNAME").text())
		  
		  $("#RCUGROUP").val($(GetGROUP).find("GROUPN").text())
		  $("#SUBMIT").show();
		  $("#IRCM_MODE").closest(".cardNS").hide();
	  }
	  
	  else if 
	  ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
	 {
	$("#IRCM_CUSID").val($(".FormPageMultiTab li.active").attr("id"))
	
	 } 
	  
	 
//	 $("#IRCM_CUSID").val('C1104578')
	 
	 
	 
	 
	
	  if($("#DMY7").val().split('|')[8]=="HE02")
	 {
		 $(".NGECL").hide();
		 $("#RPRD_PROPSTATUS").removeClass('RPRDMndtry')
		 $("#RCBK_FINANCCOLLCT").removeClass('IRCMMndtry')
	 }
	 else
	 {
		 $(".NGECL").show();
         $("#RPRD_PROPSTATUS").addClass('RPRDMndtry')
         $("#RCBK_FINANCCOLLCT").addClass('IRCMMndtry')		 
	 }
	 
	 if($("#DMY3").val().split('|')[3]>10000000 && $("#DMY7").val().split('|')[13]=="S00007")
	 {
	    $(".BSO").attr("disabled",false)
		$(".BSO").removeClass('disabled');
	 }
	 
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
	 
	 var GetCusTyp = UI_getdata($("#PrcsID").val(),$("#IRCM_CUSID").val(),"","","","LSW_SGETCUSTTYP");
	 $("#HIDDENCUSTYP").val($(GetCusTyp).find("CUSTYPE").text());
	 $("#HIDDENCONST").val($(GetCusTyp).find("CONSTITUTION").text())
	 DATA = $("#IRCM_CUSID").val()+"|" + 'IRCM_CUSID';
	 FormDataFromDB("LSW_TIRCUDOCUMENT","IRCM_","IRCMDBfields", DATA);
	 
	 
	 
	 $("#RCBK_CUSID").attr("value",$("#IRCM_CUSID").val());
	 $("#RCDQ_CUSID").attr("value",$("#IRCM_CUSID").val());
	 var op = UI_getdata($("#LogUsr").val(),$("#PrcsID").val(),$("#IRCM_CUSID").val(),"","","LSW_SGETUSRGRP1")
	 $("#HIDDENID").val($(op).find("groupId").text());
	 $("#HIDDENSAMEADDR").val($(op).find("SAMEADDRFLG").text());
	 //LoadMultiData("",$("#PrcsID").val(),$("#RCBK_CUSID").val()+'|'+$("#RCUGROUP").val(),"BankDetail1","RCBKDBfields","LSW_SGETRCUCUSWSACCNT");
	  //LoadMultiData("",$("#PrcsID").val(),$("#RCBK_CUSID").val()+'|'+$("#RCUGROUP").val(),"BankDetail2","RPRDDBfields","LSW_SRCURPRDROPDTL");
				
//var row=$($('.BankDetail2').find(event.target).closest('.DYNROW')[0]).attr('data-row');
/* var Resi=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find("input[name='RPRD_PROPERTYDOC']:checked").val();

if(Resi=="")
 { *//* 
	 if($('#RPRD_PROPERTYDOC'+row).val() == "")
	 {
			//$(HTML).find(".UPLD").hide(); 
			$('.BankDetail2').find(".DYNROW").find(".UPLD").hide(); 
			
		}
		else
		{
			//$(HTML).find(".UPLD").show();
			$('.BankDetail2').find(".DYNROW").find(".UPLD").show(); 
		}  */
		
			
/* var row=$($('.FIOfficeVerify').find(event.target).closest('.DYNROW')[0]).attr('data-row');
	var BranchID=$(BranchID).val();
	var xml=UI_getdata("FI",BranchID,$("#PrcsID").val(),"","","LSW_SGETVALUATION")
	$("#"+BranchName+row).html("") */
		 /*  
		var row = $('.BankDetail2').find(".DYNROW").length;
	 
	 for (i=0;i<row;i++)
	 {
		 if(i>0)
		  {
		  	$($('.BankDetail2').find(".DYNROW")[i]).find(".UPLD").hide(); 
			$($('.BankDetail2').find(".DYNROW")[i]).find(".UPLD").show();
			}
else
{

} */
/* 	

if($("#RPRD_PROPERTYDOC").val()=='')
		{ 
			$(".UPLD").hide();
		}
		else
		{
			$(".UPLD").show();
		}  */

	for(var i=0;i<$('.BankDetail2').find('.DYNROW').length;i++)
	{
		if($($('.BankDetail2').find('.DYNROW')[i]).find('[name=RPRD_PROPERTYDOC]').val() == '')
		 {
		   //$(".NBNKD").hide();
		   //$('.NBNKD').find('.IRCMMndtry').removeClass('IRCMMndtry');
		   $($('.BankDetail2').find('.DYNROW')[i]).find(".UPLD").hide();
		 }
	 else
		 {
		   //$(".NBNKD").show();
		   $($('.BankDetail2').find('.DYNROW')[i]).find(".UPLD").show();
		 }
	}
		
/* 
	 else
		{
			LoadMultiData("",$("#PrcsID").val(),'',"BankDetail2","RPRDDBfields","LSW_SRCURPRDROPDTL");
		} */
	 
	 LoadMultiData("",$("#PrcsID").val(),$("#RCBK_CUSID").val(),"ApproveDetail12","RCDQDBfields","LSW_SRCUGETDOCQURYDTL");
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
		 if($("#IRCM_FINANCCOLLCT").val()=="Last 1 year"){
		 $("#IRCM_FINANCCOLLCT").attr("disabled","disabled");
		 $("#IRCM_FINANCCOLLCT").addClass("DSVLBL");
		 $("#IRCM_FINANCCOLLCT").material_select("destroy");
		 $("#IRCM_FINANCCOLLCT").material_select();
		 $("#IRCM_FINANOSV").attr("disabled","disabled");
		 //$("#IRCM_FINCVERIFY").closest('.md-form').hide();
		 }
	 }
	 
	 if($("#IRCM_FINANCCOLLCT").val()=="Last 1 year"){
		 $("#IRCM_FINANOSV").prop("checked",false);
		$("#IRCM_FINANOSV").closest('.md-form').hide();
	 }
	
		 $("#NewlyAddedDoc").hide();
		 
	 
	 
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
		LoadVefyHndlr (HTML,"RCBK_PROVERIFY");
		if(($(HTML).find('select[name=RCBK_FINANCCOLLCT]').val()=="Last 6 months")&&(activityname1 != "PreLoginSB" && activityname1 != "PreLogin"))
			{
				$(HTML).find("[name='RCBK_FINANCCOLLCT']").attr("disabled","disabled");
				$(HTML).find("[name='RCBK_FINANCCOLLCT']").addClass("DSVLBL");
				$(HTML).find("[name='RCBK_FINANCCOLLCT']").material_select("destroy");
				$(HTML).find("[name='RCBK_FINANCCOLLCT']").material_select();
				//$(HTML).find("[name='RCBK_FINANOSV']").attr("disabled",true);
				//$(HTML).find("[name='RCBK_PROVERIFY']").closest('.md-form').hide();
				//$(HTML).find('.PODSave').hide()
			//$(HTML).find('.DYNROW').hide();
			}
			if($(HTML).find('select[name=RCBK_FINANCCOLLCT]').val()=="Last 6 months"){
				//$(HTML).find('input[name=RCBK_FINANOSV]').prop("checked",false);
				//$(HTML).find('input[name=RCBK_FINANOSV]').closest('.md-form').hide();
			}
		}
	else{
		LoadVefyHndlr (HTML,"RPRD_PROVERIFY");
	}
	 }
	}
	for(var i=0;i<$('.BankDetail1').find('.DYNROW').length;i++)
	{
		if($($('.BankDetail1').find('.DYNROW')[i]).find('[name=RCBK_BNKNAME]').val() == "")
		 {
		   //$(".NBNKD").hide();
		   //$('.NBNKD').find('.IRCMMndtry').removeClass('IRCMMndtry');
		   $($('.BankDetail1').find('.DYNROW')[i]).hide();
		   $($('.BankDetail1').find('.DYNROW')[i]).find('.IRCMMndtry').removeClass('IRCMMndtry');
		 }
	 else
		 {
		   //$(".NBNKD").show();
		   $($('.BankDetail1').find('.DYNROW')[i]).show();
		 }
	}
	 
	
	if($("#IRCM_FINCVERIFY").closest('.md-form').is(":visible")==true)
		{
		if($("#IRCM_FINCVERIFY").prop("checked") == true)
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
	if($("#IRCM_APLNVERFY").closest('.md-form').is(":visible")==true)
		{
			if($("#DMY5").val().split("|")[2] == "PLVer"){
		if($("#IRCM_APLNVERFY").prop("checked") == true)
		{
			$("#PLVERFYRAISEQU").hide();
		}
		else
		{
			$("#PLVERFYRAISEQU").show();
		}
			}
			else{
				if($("#IRCM_APLNVERFY").prop("checked") == true)
		{
			$("#PLVERFYRAISEQU").hide();
		}
		else
		{
			$("#PLVERFYRAISEQU").show();
		}
				$("#IRCM_APLNVERFY").removeAttr("disabled");
				$("#PLVERFYRAISEQU").removeAttr("disabled");
			}
		}
	else{
		$("#PLVERFYRAISEQU").hide();
	}
	 if($("#DMY7").val().split('|')[8] != "HE02")
	{
	 var xml=UI_getdata($("#PrcsID").val(),$("#IRCM_CUSID").val(),"","","","LSW_SGETINCMCNSDR")
	
	 if($(xml).find('RESULT').text()=="Y")
		 {
		  $(".FinancialsCollected").show();
		  $("#IRCM_FINANCCOLLCT").addClass('IRCMMndtry')
		 }
	 else
		 {
		   $(".FinancialsCollected").hide();
		   $("#IRCM_FINANCCOLLCT").removeClass('IRCMMndtry')
		 }
	}
	
	
	/* --9,10,11,12,14,15 */
	     $("#HIDDENCOL").val('5,7,8,9,10,11,12,13,14,15,22')
		 FncallDocChkLst(this,'Table2',{spname:'LSW_TRCUKYCDOCUMENTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'KYCDOC',brid:$('#PrcsID').val(),MnuId:$('#IRCM_CUSID').val()+'|'+$("#RCUGROUP").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckList');
		 FncallDocChkLst(this,'Table3',{spname:'LSW_TRCUKYCDOCUMENTLIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Others',brid:$('#PrcsID').val(),MnuId:$('#IRCM_CUSID').val()+'|'+$("#RCUGROUP").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckListOthers');
		 FncallDocChkLst(this,'Table4',{spname:'LSW_SRCUGETDEFRPFDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'',brid:$('#PrcsID').val(),MnuId:$('#IRCM_CUSID').val()+'|'+$("#RCUGROUP").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','PFDEFR');
		 FncallDocChkLst(this,'Table5',{spname:'LSW_SRCUGETDOCUUPLOAD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$("#RCUGROUP").val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+'5,7,14,15,16,17,18,19','DOCUPLOAD');
		 $("#FormPageTab4").remove()
		 //$('.OtherQueries').hide()
		 $('.CREDIT').hide()
		 
	
	 var GetGROUP = UI_getdata($("#PrcsID").val(),"","",$("#PrMs5").val(),"","LSW_SCHKEXTERNALRCU");
	  if($(GetGROUP).find("GROUPN").text()=="ERCU")
	  {
		  
	  }
	  
	  /* else if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
	   {
	    /* var FRZ = UI_getdata($("#PrcsID").val(),$("#PrMs6").val(),$('#IRCM_CUSID').val(),$("#PrMs5").val(),"","LSW_SCHKRCUONLOAD");
	          if($(FRZ).find("FREZZE").text()=="Y")
	          {
		         DSVLBLALL('') 
				 $(".banner").show();
	          } */
			  /*for(i=0;i<$('.ERCUSAMPLE').find('[name=RCKY_RCUSTATUS]').length;i++)
			  {
				  if(($('.ERCUSAMPLE').find('[id=RCKY_RCUSTATUS'+i+']').val()=='Sample Initiated') && ($("#RCUGROUP").val() != "ERCU"))
				  {
					  
					  $('.ERCUSAMPLE').find('[id=RCKY_RCUSTATUS'+i+']').attr("disabled","disabled");
					  $('.ERCUSAMPLE').find('[id=RCKY_RCUSTATUS'+i+']').material_select();
					  
					  $('.ERCUSAMPLE').find('[id=RCKY_RESULT'+i+']').attr("disabled","disabled");
					  $('.ERCUSAMPLE').find('[id=RCKY_RESULT'+i+']').material_select();
					  
					  $('.ERCUSAMPLE').find('[id=RCKY_REMARK'+i+']').attr("disabled",true);
					  
					  //$('.ERCUSAMPLE').find('[id=RCKY_REMARK'+i+']').hide();
					  //$("#POPUPRemarks").attr('disabled',true);
					  $('.ERCUSAMPLE').find('[id=QureySave'+i+']').attr("disabled","disabled");
					  $('.ERCUSAMPLE').find('[id=RCKY_INITIATE'+i+']').attr("disabled","disabled");
					  
					  
					  
				  }
			  }
			  
	   } */    
	
             CheckRCUINTI();
	        /*  if($(FRZ).find("INTISHOW").text()=="N")
	          {
		      $(".BTNINTERNAl").hide();
	          } */
	 
	 
	 
	 if($(".FormPageTab li.active").text() != "Applicant"){
		 $("#IRCM_APLNVERFY").closest(".form-row").hide();
	 }
	 
	 var PrcsId=$("#PrcsID").val();
	 var CUSID=$("#IRCM_CUSID").val();
	 var ACTID=$("#ActvID").val();
	 var activityname = GetActivityName();
	 var xml=UI_getdata(PrcsId,CUSID,ACTID,activityname,"","LSW_SCHECKFILELOGIN2")
	  
	 
	 CheckProStatus();
	 if($(".FormPageTab li.active").text() != 'Applicant')
	  {
	  $('.PropertyDocuments').hide();
	  $('.BankDetail2').find('.RPRDMndtry').removeClass('RPRDMndtry');
	  }
	  if($(".FormPageTab li.active").text() == 'Guarantor')
		 {
		 $(".IRCMMndtry").removeClass("IRCMMndtry");
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
		   if(activityname=="PLVer")
		   {
			 $("#SendBack").show();  
		   }
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
		$('#AddRCKYoc').on('click', function() {
            
			
			if($(this).text() == "Confirm")
		    {
			var MndtryChk = ChkMandatoryFlds("RCKYMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
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
				    .row.add( [ '', '', '','','', '', '','','', '', '','','','','','','','','','','',''  ] )
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
				$($(HTML).find('td')[2]).text($("#RCKY_DOCNAME").val());
				if($("#DMY5").val().split('|')[2]=="BranchOPS"){
				$($(HTML).find('td')[6]).find('.Deferred').attr("disabled","disabled")
				}
				$(HTML).addClass("tbodytr");
				$(HTML).find("td").addClass("tbodytrtd");

			if ($("#RCKY_DOCATTACHMENT").val() != "")
			{				

				$($(HTML).find('td')[3]).find("[type=text]").val($("#RCKY_DOCATTACHMENT").val());
				var op = UI_getdata("","","","","","LSW_SGETTYMONSTUS");
				$($(HTML).find('td')[4]).find("[type=text]").val($(op).find("DT").text());
				//$($(HTML).find('td')[6]).find('input[type=radio]:first').prop('checked', true);
				$($(HTML).find('td')[6]).find('input:radio:first').prop("checked", true).trigger("click");
				if($("#DOCU_KYC").val()=="Others"){
				$($($(HTML).find('td')).find('input[type=checkbox]')[0]).addClass("RCODGRDMNDTRY");
				}
				else if($("#DOCU_KYC").val()=="KYC"){
				$($($(HTML).find('td')).find('input[type=checkbox]')[0]).addClass("RCKYGRDMNDTRY");
				}
			}
				$($(HTML).find('td')[9]).text($("#IRCM_CUSID").val());
				
				
				// Field Initialisation Start
	            
				
				
				// Dropdown
				//$('#'+TableID+' .Gridmdb-select').append('<option value="'+$("#RCKY_DOCNAME").val()+'">'+$("#RCKY_DOCNAME").val()+'</option>');  
				//$("#"+TableID+" .Gridmdb-select option:contains("+$("#RCKY_DOCNAME").val()+")").attr("selected","selected")
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
		$("#ADDRCKYOCCLOSE").click();
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
			$("#RCBK_FINANCCOLLCT").removeClass('IRCMMndtry');
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
			
		var MndtryChk = ChkMandatoryFlds_V1("RPRDMndtry",html1);
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
			
			
			var html2=$('.BankDetail1').find('.DYNROW')
			var MndtryChk = ChkMandatoryFlds_V1("RCBKMndtry",html2);
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
			
			
			
			
			
			
			
		 // NXTTAB(this);
		 
		
		
		
		
		
		
		MndtryChk = CheckKYCMANDRY("Table2","RCKYGRDMNDTRY","KYC");
		if(MndtryChk != "")
			{
			alert(MndtryChk);
			return;
			}
		MndtryChk = CheckKYCMANDRY("Table3","RCODGRDMNDTRY","Others");
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
			
			
			var IRCM_KYCDOC = TxtGridsubmitdata_SV1("Table2","RCKY_","IRCM_");
			AssignGridXmltoField("IRCM_KYCDOC", IRCM_KYCDOC);
			
			
			var KYCOTHRDOCGRID = TxtGridsubmitdata_SV1("Table3","RCOD_","IRCM_");
			AssignGridXmltoField("IRCM_OTHERDOC", KYCOTHRDOCGRID);
			
			var IRCM_PFDEFR = TxtGridsubmitdata_V1("Table4","RCDF_","IRCM_");
			AssignGridXmltoField("IRCM_PFDEFR", IRCM_PFDEFR);
			
			var IRCM_PROPGRD = TxtGridsubmitdata_V2("BankDetail2","RPRD_","IRCM_","RPRDDBfields");
			AssignGridXmltoField("IRCM_PROPGRD", IRCM_PROPGRD);
			
			var IRCM_BNKSTMNT = TxtGridsubmitdata_V2("BankDetail1","RCBK_","IRCM_","RCBKDBfields");
			AssignGridXmltoField("IRCM_BNKSTMNT", IRCM_BNKSTMNT);
			
			var IRCM_QURYDTL = TxtGridsubmitdata_V2("ApproveDetail12","RCDQ_","IRCM_","RCDQDBfields");
			AssignGridXmltoField("IRCM_QURYDTL", IRCM_QURYDTL);
			
			var IRCM_DOCUMNTS = TxtGridsubmitdata_SV1("Table5","RCUD_","IRCM_");
			AssignGridXmltoField("IRCM_DOCUMNTS", IRCM_DOCUMNTS);
			
			
			if($("#RCUGROUP").val()=="ERCU")
			{
			   var GetGROUP = UI_getdata($("#PrcsID").val(),IRCM_KYCDOC,KYCOTHRDOCGRID,IRCM_PROPGRD,IRCM_BNKSTMNT,"LSW_SINSERTERCUNANUAL");
	           alert('Form saved Successfully')
		         
	         }
			else
			{
			FormDataToDB(tbl,prfx,$("#IRCM_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
			}
			
			var activityname = GetActivityName();
			
			
		
			if(($(this).text() == "Submit") )
			{
			if($("#RCUGROUP").val()!="ERCU")
			{
				var valdt = UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKEXVENDRCOMP");
				if($(valdt).find("RESULT").text()!="ALLOW")
				{
					alert($(valdt).find("RESULT").text())
					 return
				}
			}
			var ALTERPROPNO=UI_getdata($("#IRCM_ACTIVITYID").val(),$("#DMY10").val().split('|')[1].split('(')[1].replace(")",""),"","","","LSW_SALTERPROPNUM");
			ALTERPROPNO=$(ALTERPROPNO).find("ALTERNATEPROPNO").text()
		      var GetGROUP = UI_getdata($("#PrcsID").val(),$("#PrMs6").val(),$("#LogUsr").val(),ALTERPROPNO,"","LSW_SCHKRCUSUBMIT");
	          if($(GetGROUP).find("RESULT").text()=="N")
	          {
		         alert($(GetGROUP).find("MSG").text())
		         return
	          }
				var GetGROUP = UI_getdata($("#PrcsID").val(),"","",ALTERPROPNO,"","LSW_SCHKEXTERNALRCU");
				if($(GetGROUP).find("GROUPN").text()!="ERCU")
				{
					UI_getdata($("#PrcsID").val(),$("#IRCM_CUSID").val(),"","","","LSW_SUPDTRCUCOMPLT")
				
				var Push = UI_getdata($("#PrcsID").val(),"","","","","LSW_SPUSHCUSTWSDATA");
				if($(Push).find("STATUS").text()!="Y")
				{
					alert($(Push).find("DESCR").text())
					return;
				}
				else
				{
					if($(Push).find("DESCR").text() != "")
					{
					alert($(Push).find("DESCR").text())
					}
				}
				}
				var vendr = "";
				if($("#RCUGROUP").val() == "")
				{
					vendr = "IRCU";
				}
				else
				{
					vendr = "ERCU";
				}
				var xml=UI_getdata($("#PrcsID").val(),ALTERPROPNO,vendr,$("#LogUsr").val(),"","LSW_SSTATUSUPDATE")
			       WFComplete ($("#ActvID").val(),"",""); 
			}
			
			
		
			
			if($(this).text() == "Save & Next")
			{
				NXTTAB(this);
			}

		});
	
	/*$(".GridDocFil").on('change', function() {
    	var op = UI_getdata("","","","","","LSW_SGETTYMONSTUS")
    	$(this).closest('td').next().find('input[type=text]').val($(op).find("DT").text())

    });*/
	
	
	$( ".VRFYz" ).not("div").change(function(){
		var secid = $(this).attr("data-quey-sec");
			if(secid == "")
			{
			alert("Incorrect Section ID")
			return
			}
			var op=""
				if(secid=="S03")
				{
				op=UI_getdata("Document Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find('[name=RPRD_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('[name=RPRD_PROPID]').val(),"","","LSW_SCHKQURYRAISED");
				}
				if(secid=="S08")
				{
					op=UI_getdata("Document Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).text(),"","","LSW_SCHKQURYRAISED");
				}
				if(secid=="S01")
				{
					op=UI_getdata("Document Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).find('[name=RCKY_DOCNAME]').val(),"","","LSW_SCHKQURYRAISED");
				}
				if(secid=="S02"){
					op=UI_getdata("Document Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find('[name=RCBK_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('#PROPTXTHDR').text()+'-'+$(this).closest('.DYNROW').find('[name=RCBK_BNKNAME]').val()+'-'+$(this).closest('.DYNROW').find('[name=RCBK_ACCNTNO]').val(),"","","LSW_SCHKQURYRAISED");
				}
				if(secid=="S04"){
					op=UI_getdata("Document Checklist",$("#PrcsID").val(),$('#IRCM_CUSID').val()+'-Financial',"","","LSW_SCHKQURYRAISED");
				}
				if($(op).find("RESULT").text()!="ALLOW"){
					this.value=$(this).attr("prevvalue");
					$(this).material_select("destroy");
					$(this).material_select();
					/*for(var i=0;i<sel.length;i++)
    				{
						var name = this.name;
						if(sel[i].name==name){
							this.value=sel[i].value;
							$(this).material_select("destroy");
							$(this).material_select();
							break;
						}
					}*/
					alert($(op).find("RESULT").text());
					return;
				}
				else{
					$(this).attr('prevvalue', this.value);
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
		op=UI_getdata("Document Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find('[name=RPRD_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('[name=RPRD_PROPID]').val(),"","","LSW_SCHKQURYRAISED");
		}
		if(secid=="S08")
		{
			op=UI_getdata("Document Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).text(),"","","LSW_SCHKQURYRAISED");
		}
		if(secid=="S01")
		{
			op=UI_getdata("Document Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).find('[name=RCKY_DOCNAME]').val(),"","","LSW_SCHKQURYRAISED");
		}
		if(secid=="S02"){
			op=UI_getdata("Document Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find('[name=RCBK_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('#PROPTXTHDR').text()+'-'+$(this).closest('.DYNROW').find('[name=RCBK_BNKNAME]').val()+'-'+$(this).closest('.DYNROW').find('[name=RCBK_ACCNTNO]').val(),"","","LSW_SCHKQURYRAISED");
		}
		if(secid=="S04"){
			op=UI_getdata("Document Checklist",$("#PrcsID").val(),$('#IRCM_CUSID').val()+'-Financial',"","","LSW_SCHKQURYRAISED");
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
		op=UI_getdata("Document Checklist",$("#PrcsID").val(),$('#IRCM_CUSID').val()+'-Verification',"","","LSW_SCHKQURYRAISED");
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
	
var Val = $(this).val();
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
		
    	var Val = $(this).val();
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
			if($($(this).closest('.form-row').prev().prev()).find('.Btxt3').text() == "KYC")
			{
    		$($(this).closest('.tbodytr').find('input[type=checkbox]')[0]).removeClass("RCKYGRDMNDTRY");
			}
			else if($($(this).closest('.form-row').prev().prev()).find('.Btxt3').text()=="Other Documents"){
				$($(this).closest('.tbodytr').find('input[type=checkbox]')[0]).removeClass("RCODGRDMNDTRY");
			}
    		}
    	else {
    		$(this).closest('td').next().find('input[type=text]').val('')
    		$(this).closest('td').next().find('input[type=text]').attr( "disabled", "disabled" )
    		$(this).closest('td').next().find('input[type=text]').addClass("DSVLBL")
    		$(this).closest('td').next().find('input[type=text]').next().hide();
    		
    		$(this).closest('.tbodytr').find('input[type=checkbox]').parent().show();
			$(this).closest('.tbodytr').find('input[type=checkbox]').removeAttr("disabled")
			if($($(this).closest('.form-row').prev().prev()).find('.Btxt3').text() == "KYC")
			{
    		$($(this).closest('.tbodytr').find('input[type=checkbox]')[0]).addClass("RCKYGRDMNDTRY");
			}
			else if($($(this).closest('.form-row').prev().prev()).find('.Btxt3').text()=="Other Documents"){
				$($(this).closest('.tbodytr').find('input[type=checkbox]')[0]).addClass("RCODGRDMNDTRY");
			}
    	}
}
else{
	var Val = $(this).val();
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
			if($($(this).closest('.form-row').prev().prev()).find('.Btxt3').text() == "KYC")
			{
    		$($(this).closest('.tbodytr').find('input[type=checkbox]')[0]).removeClass("RCKYGRDMNDTRY");
			}
			else if($($(this).closest('.form-row').prev().prev()).find('.Btxt3').text()=="Other Documents"){
			$($(this).closest('.tbodytr').find('input[type=checkbox]')[0]).removeClass("RCODGRDMNDTRY");	
			}
    		}
    	else {
    		$(this).closest('td').next().find('input[type=text]').val('')
    		$(this).closest('td').next().find('input[type=text]').attr( "disabled", "disabled" )
    		$(this).closest('td').next().find('input[type=text]').addClass("DSVLBL")
    		$(this).closest('td').next().find('input[type=text]').next().hide();
    		
    		$(this).closest('.tbodytr').find('input[type=checkbox]').parent().show();
			$(this).closest('.tbodytr').find('input[type=checkbox]').removeAttr("disabled")
			if($($(this).closest('.form-row').prev().prev()).find('.Btxt3').text() == "KYC")
			{
    		$($(this).closest('.tbodytr').find('input[type=checkbox]')[0]).addClass("RCKYGRDMNDTRY");
			}
			else if($($(this).closest('.form-row').prev().prev()).find('.Btxt3').text()=="Other Documents"){
				$($(this).closest('.tbodytr').find('input[type=checkbox]')[0]).addClass("RCODGRDMNDTRY");
			}
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
	op=UI_getdata("Document Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find('[name=RPRD_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('[name=RPRD_PROPID]').val(),"","","LSW_SCHKQURYRAISED");
	}
	if(secid=="S08")
	{
		op=UI_getdata("Document Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).text(),"","","LSW_SCHKQURYRAISED");
	}
	if(secid=="S01")
	{
		op=UI_getdata("Document Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).find('[name=RCKY_DOCNAME]').val(),"","","LSW_SCHKQURYRAISED");
	}
	if(secid=="S02"){
		op=UI_getdata("Document Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find('[name=RCBK_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('#PROPTXTHDR').text()+'-'+$(this).closest('.DYNROW').find('[name=RCBK_BNKNAME]').val()+'-'+$(this).closest('.DYNROW').find('[name=RCBK_ACCNTNO]').val(),"","","LSW_SCHKQURYRAISED");
	}
	if(secid=="S04"){
		op=UI_getdata("Document Checklist",$("#PrcsID").val(),$('#IRCM_CUSID').val()+'-Financial',"","","LSW_SCHKQURYRAISED");
	}
	if(secid=="SSPL"){
		op=UI_getdata("Document Checklist",$("#PrcsID").val(),$('#IRCM_CUSID').val()+'-Verification',"","","LSW_SCHKQURYRAISED");
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
		
		
		//Added  for   Details hide

        $('.RAISE').find("#MNGQ_SECTNID").removeClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_TYP").removeClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_QURYNAME").removeClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_DESC").removeClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_APPLNO").removeClass('MNGOMndtry');
         $('.RASHW').hide();
		 
		
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
			$("#MNGQ_UNIQID").val($($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(this).closest('.tbodytr').find('.tbodytrtd')[2]).find('[name=RCKY_DOCNAME]').val());
		}
		if(secid=="S02"){
			$("#MNGQ_QURYNAME").val($(this).closest('.DYNROW').find("[name=RCBK_BNKNAME]").val()+"-"+$(this).closest('.DYNROW').find("[name=RCBK_ACCNTNO]").val().substr($(this).closest('.DYNROW').find("[name=RCBK_ACCNTNO]").val().length - 4));
			$("#MNGQ_UNIQID").val($(this).closest('.DYNROW').find('[name=RCBK_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('#PROPTXTHDR').text()+'-'+$(this).closest('.DYNROW').find('[name=RCBK_BNKNAME]').val()+'-'+$(this).closest('.DYNROW').find('[name=RCBK_ACCNTNO]').val());
		}
		if(secid=="S04"){
			$("#MNGQ_QURYNAME").val("Financial-"+$(this).closest('.form-row').find("[name=IRCM_FINANCCOLLCT]").val());
			$("#MNGQ_UNIQID").val($('#IRCM_CUSID').val()+'-Financial');
		}
		if(secid=="S03"){
			$("#MNGQ_QURYNAME").val($(this).closest('.DYNROW').find('#PROPTXTHDR').text());
			$("#MNGQ_UNIQID").val($(this).closest('.DYNROW').find('[name=RPRD_CUSID]').val()+'-'+$(this).closest('.DYNROW').find('[name=RPRD_PROPID]').val());
		}
		if(secid=="SSPL"){
			$("#MNGQ_QURYNAME").val($("#IRCM_APLNVERFY").next().text());
			$("#MNGQ_UNIQID").val($('#IRCM_CUSID').val()+'-Verification');
		}
		
		
		$('.RAISE').find("#MNGQ_DESC").addClass('MNGOMndtry');
		 $("#RAISEQUERY").click();
				 
				 
	}
	else{
			alert($(op).find("RESULT").text());
			return;
		}
			});	



   $(document).on("click", "#WFCONF", function() {
	   
	   if($("#RECMTO").val()=="")
	   {
		   alert ("Assign User Mandatory")
		   return 
	   }
	   
	   var xml=UI_getdata($("#PrcsID").val(),$("#IRCM_CUSID").val(),"","","","LSW_SCHKIRCUINITI")
			
			var RESULT=$(xml).find('RESULT').text()
	
				if(RESULT != "SUCCESS")
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
				   $("#MOBIPOPCLOSE").click();
				   return false;
				}
	   
	   
   
	var UNIQid = $("#PrMs6").val();
	var UNIQid1 = $("#PrMs5").val()+$("#IRCM_CUSID").val();
	
	var userid=$("#RECMTO").val()
	var actvid=$("#ActvID").val()
	var cusid=$("#IRCM_CUSID").val()
	var docname=$("#DOCTYPE").val()+'|'+$("#DOCNAME").val()
	$.ajax({
		url: "/TPLSW/RcuInitiation",
		data: {prcsid:$("#PrcsID").val(),userid:userid,actvid:actvid,cusid:cusid,docname:docname,Prvnt:$("#Prvnt").val()},
		async:false,
		type: 'POST',
		success: function(xml1)
		{
			if(xml1.split("~")[0]=="Success")
			{
				alert("File Assigned");
				$("#MOBIPOPCLOSE").click()
				window.location.reload();
			}
			else
			{
				alert("Initiation Failed");
				return;
			}
		},
		error: function (xml1)
	   {
			alert("RCU Initiation - Error Occurred, Contact ID");
	   }
	   });
	
	/* var WFVndACTVINIT1 = WFVndActvInit($("#ActvID").val(),$("#PrcsID").val()+"|VendorInitiate|Vendor|var_status=EXF&var_statusHES="+USERID+"&var_INFO1="+USERID+"~"+USERID+"~"+UNIQid+"~"+UNIQid1+"|ADMIN","LSW_SWFACTVINITCALL");	
	if (WFVndACTVINIT1 == "Success")
			{
			var xml=UI_getdata($("#PrcsID").val()+'|'+$("#ActvID").val()+'|'+$("#DOCTYPE").val()+'|'+$("#DOCNAME").val(),$("#IRCM_CUSID").val(),$("#PrMs6").val(),$("#PrMs5").val()+$("#IRCM_CUSID").val(),$("#RECMTO").val(),"LSW_SINSERTRCUINT")
			alert("File Assigned");
			$("#MOBIPOPCLOSE").click()
			window.location.reload();
			}
		else
			{
			alert("Initiation Failed");
			} */
		
	      });	
	$(document).on("click", ".SampledInit", function() {
			
		});
		
		if(RLE == "ERCU")
		{
			$("#Forward").hide();
		}
	if(RLE == "ERCU")
	{
	var x = $("#APPINFOTXT").val()
	var op = UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"RCU",$('#DMY7').val().split('|')[7],$(x).find('APFI_APPLSTATUS').text(),"LSW_SGETVENDRHDR")
	$("#FormPage1").next().empty();
	op = op.replace('<Resultset><a><RESULT>','');
	op = op.replace('</RESULT></a></Resultset>','');
	$("#FormPage1").next().append(op);
	}
});


