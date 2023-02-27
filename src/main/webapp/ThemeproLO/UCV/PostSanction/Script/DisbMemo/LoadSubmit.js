$(document).ready(function() {


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
	 $('.FormPageMultiTab').find('li').last().hide()
	 $($(".FormPageSubTab").find('li')[4]).remove()
	 $($(".FormPageSubTab").find('li')[3]).remove()
	 $($(".FormPageSubTab").find('li')[1]).remove()
	  // $(".ADDBTN").hide();
	  // $(".DELFAV").hide();
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
   
    
   var Tranche= $(".FormPageMultiTab li.active a div").text();
	
	if(Tranche!="Tranche 1")
	{
	  var Loanxml=UI_getdata($("#PrcsID").val(),Tranche.replace("Tranche ",""),"","","","LSW_SGETDISBLONID")
	
	  $("#TRANCHELON").val($(Loanxml).find("LONID").text())
	}
	
	if($("#DMY5").val().split('|')[2]=="DisbAppr" && $(".FormPageMultiTab li.active a div").text()=="Tranche 1")
	{
		
		 $("#APPR").attr('disabled',true);
	}
    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));
	var activityname123 = GetActivityName();
	if($("#DMY5").val().split('|')[2]=="DisbAppr" && $(".FormPageMultiTab li.active a div").text()=="Tranche 1")
	   {
	   $("#SendBack").show();
	  
	   var op = UI_getdata($("#DMY5").val().split('|')[2],$("#DMY7").val().split("|")[8],"","","","LSW_SGETSTAGEREVACT");
	   $("#SENDBCKACT").append($(op).find('RESULT').html());
	   }
	else if($("#DMY5").val().split('|')[2]=="OPS" && $(".FormPageMultiTab li.active a div").text()=="Tranche 1")
	   {
	   $("#SendBack").show();
	   var op = UI_getdata($("#DMY5").val().split('|')[2],$("#DMY7").val().split("|")[8],"","","","LSW_SGETSTAGEREVACT");
	   $("#SENDBCKACT").append($(op).find('RESULT').html());
	   }
	else if($("#DMY5").val().split('|')[2]=="OPSQD" && $(".FormPageMultiTab li.active a div").text()=="Tranche 1")
	   {
	   $("#SendBack").show();
	   var op = UI_getdata($("#DMY5").val().split('|')[2],$("#DMY7").val().split("|")[8],"","","","LSW_SGETSTAGEREVACT");
	   $("#SENDBCKACT").append($(op).find('RESULT').html());
	   }
	   
	if(activityname123=="BranchOPS"){
		$("#SaveBR").text('Send to OPS');
	}
	else if(activityname123=="CreditOPS"){
		$("#SaveBR").text('Handover to OPS');
		DSVLBLALLWS();
	}
	else{
		$("#SaveBR").text('Disburse');
		$("#SaveBR").show();
	}
	GetCustomerName();

	$("#DBMM_TRANCHID").attr("value",$(".FormPageMultiTab li.active a div").text());
	$("#DBMM_TRANCHNAME").attr("value",$(".FormPageMultiTab li.active a div").text());
	$("#DBFD_TRANCHID").attr("value",$(".FormPageMultiTab li.active a div").text());
	/*$("#DBFD_TRANCHID").attr("value",$(".FormPageMultiTab li.active a div").text());
	$("#DBFD_TRANCHNAME").attr("value",$(".FormPageMultiTab li.active a div").text());*/
	
	//$("#DBMM_ACTUDISBAMT").val(CURCommaSep($("#DMY3").val().split("|")[3]));
	
	var XML=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETLOANDTL")
	$("#DBFD_LOANTYPE").append($(XML).find("RESULT").html())
	
	$("#DBMM_DSANCAMT").text(CURCommaSep($("#DMY3").val().split("|")[3]));
	$("#DBMM_TOTALSANAMT").val(CURCommaSep($("#DMY3").val().split("|")[3]));
	
	
	if($(".FormPageMultiTab li.active a div").text()=="Tranche 1")
	{
	LoadMultiData("",$("#PrcsID").val(),$("#DBMM_TRANCHID").val(),"DISB","DISBDBfields","LSW_SDISBGRIDDETAILSUCV");
	LoadMultiData("",$("#PrcsID").val(),$("#DBMM_TRANCHID").val(),"Memo","DBFDDBfields","LSW_SUCVDISBMEMOFAVOURDATA");
	}
	else
	{
	LoadMultiData($("#DMY5").val().split('|')[3],$("#PrcsID").val(),$("#DBMM_TRANCHID").val(),"DISB","DISBDBfields","LSW_SDISBGRIDDETAILSUCV");
	LoadMultiData($("#DMY5").val().split('|')[3],$("#PrcsID").val(),$("#DBMM_TRANCHID").val(),"Memo","DBFDDBfields","LSW_SUCVDISBMEMOFAVOURDATA");
		
	}
	
	//LoadMultiData("",$("#PrcsID").val(),"","","DBMMDBfields","LSW_SDISBMEMODETL");
	//getPFData();
	
	FormDataFromDB("LSW_TDISBURMEMO", "DBMM_", "DBMMDBfields", $("#DBMM_TRANCHID").val()+"|DBMM_TRANCHID");
   // $("#BTNREPAYGRD").click();
	
        
   	var opCH = UI_getdata($("#PrcsID").val(),$("#DBMM_TRANCHID").val(),"","","","LSW_SCHKTOTALDISBAMT");
   	$("#DBMM_DTOTALDISBAMT").val($(opCH).find("TOTALDISBAMT").text())
  	$("#DBMM_DDISBURAMT").text(CURCommaSep($(opCH).find("TOTALDISBAMT").text()))
       
	 if($("#PrMs1").val() == "View"){
	
	if($(opCH).find("ENACHRSLT").text()=="FAILURE")
	{
	   $(".EnachReTrigger").show();	
	}
	else
	{
		$(".EnachReTrigger").hide();	
	}
}	  
	   
    	  // Added for P2 Delivery 45 START
		  
		  
	
	$("#DBMM_CANCELAMT").text(CURCommaSep($(opCH).find("CANCELAMT").text()))
	
	
	  //$("#BTNREPAYGRD").click();
	
	
	// Added for P2 Delivery 45 END
	
	 var DATA=["DISB|"];
	 var MemoData=DATA[0].split("|")[0];
	 var row = $("." + MemoData).find(".DYNROW").length;
	 for (i=0;i<row;i++)
		 {
			 var HTML=$("." + MemoData).find(".DYNROW")[i]
			 
		    $(HTML).find('input:radio[name=DISB_PEMID]')[1].checked = true;
	        $(HTML).find('input:radio[name=DISB_PEMID][value=No]').click();
	        $(HTML).find('input[name="DISB_PEMID"]').attr('disabled',true)
		  
		     HndlPEMI(HTML,i)
			 
	var HHYPERLINK=	$(HTML).find("[name='DISB_LONDETAIL']").val() 
		if(HHYPERLINK=="Term Loan")
		{  
	    $(HTML).find(".REPAYDET").show();
		$(HTML).find("[name=DISB_ACTUDISBAMT]").attr('disabled',false);
		}
		else
		{
		 $(HTML).find(".REPAYDET").hide();
		 $(HTML).find("[name=DISB_ACTUDISBAMT]").attr('disabled',true);
		}
		/*if($("#DMY7").val().split('|')[0]=="Term Loan")
		{
		$("#DISB_ACTUDISBAMT"+row).attr('disabled',false);
		}
		else
		{
		$("#DISB_ACTUDISBAMT"+row).attr('disabled',true);
		}	*/ 	 
	     }
 
 if($("#DBMM_TRANCHID").val()!="Tranche 1")
  {
    var DisbAmt=UI_getdata($("#PrcsID").val(),$("#DBMM_TRANCHID").val(),"",$("#DMY5").val().split('|')[3],"","LSW_TGETTOTDISAMT")
    $("#DBMM_DDISBURAMT").text($(DisbAmt).find("DISBAMT").text())
	$("#DBMM_DSANCAMT").text($(DisbAmt).find("SANAMT").text())
	$("#DBMM_CANCELAMT").text($(DisbAmt).find("CANAMT").text())
	$("#DBMM_DREMAINGAMT").text($(DisbAmt).find("REMAINAMT").text())
  }
	
    
    var DATA=["Memo|"];
	 var MemoData=DATA[0].split("|")[0];
	       var row = $("." + MemoData).find(".DYNROW").length;
	 for (j=0;j<row;j++)
		 {
		 $("#RPBD_BNKDETL"+[j+1]).empty();
		 var PrcsID=$("#PrcsID").val();
		 var val=$("#RPBD_PDCPROVIDE"+[j+1]).val()
	var xml=UI_getdata(PrcsID,val,"","","","LSW_SGETBANKDTLCUSWS")
	var CusName=$(xml).find('RESULT').html();	
	     $("#RPBD_BNKDETL"+[j+1]).append(CusName)
		 var Data=$("#RPBD_BNKDETLVAL"+[j+1]).val()
		 $("#RPBD_BNKDETL option:contains("+Data+")").attr("selected","selected")
	     }
    
	
	var DATA=["Memo|"];
	 for (j=0;j<DATA.length;j++)
		 {
		   var MemoData=DATA[j].split("|")[0];
	       var row = $("." + MemoData).find(".DYNROW").length;
	       for (i=0;i<row;i++)
	       {
	         var HTML = $("." + MemoData).find(".DYNROW")[i];
	         CheckPayMode(HTML,"DBFD_PAYMODE"+(parseInt([i])+1),"DBFD_FAVOURTYPE"+(parseInt([i])+1));
			 DataToFavrFld(HTML,'Load')
	      //   GetCustomerName(HTML,'Load');
	         
	       if($(HTML).find('select[name=DBFD_FAVOURTYPE]').val()=="Others")
	         {
	  		   $(HTML).find(".OTHERACCT").show();
	  		   $(HTML).find(".CUSACCT").hide();
	         	
	         }
			 
			       var CrChequeName=$(HTML).find('select[name=DBFD_CHEQNAM]').val()
	               var xml=UI_getdata("",$(HTML).find('select[name=DBFD_PAYMODE]').val(),"","","","LSW_SGETCHEQUENAME")
	               var ChequeName=$(xml).find('RESULT').html();
			   $(HTML).find('select[name=DBFD_CHEQNAM]').empty()
	           $(HTML).find('select[name=DBFD_CHEQNAM]').append(ChequeName)
			   $(HTML).find('select[name=DBFD_CHEQNAM]').val(CrChequeName)  
	       }
	}

	if($('input:radio[name=DBMM_PEMID]')[0].checked == false && $('input:radio[name=DBMM_PEMID]')[1].checked == false)
	{
	  $('input:radio[name=DBMM_PEMID]')[0].checked = true;
	  $('input:radio[name=DBMM_PEMID][value=Yes]').click();
	}
	
	
	
		var activityname = GetActivityName();
	
	var op = UI_getdata($("#PrcsID").val(), $("#ActvID").val(), $(".FormPageMultiTab li.active a div").text(), activityname, $(".FormPageSubTab").find("li.active").attr("id"), "LSW_SDISBSTAGECHECK1");
	if($(op).find("RESULT").text() =="N" && $("#PrMs1").val() !="View")
	{	

     // LoadOverDueAMTAPI();
	 // HndlPEMI($("input[name='DBMM_PEMID']:checked"). val());
	  //GETREMAINGAMT();
	  /*if($("#DMY5").val().split("|")[2]!="BranchOPS")
	 	{
		  $(".GenDM").show()
		  $(".DMG").hide();
	 	}
	  else
		  {
		    $(".DMG").show();
		    $(".GenDM").hide()
		  }
	  */
	}
	else
	{
		//$(".GenDM").show()
	}
	
	 if(activityname=="BranchOPS" || activityname=="CreditOPS" || activityname=="OPS")
     {
       $("#SaveBR").show();
       if(activityname=="OPS"){
		   $("#SaveBR").text('Disburse');
    	  /* var op =UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active a div").text(),"","","","LSW_SCHKTRNCHCMPLT");
			
			if($(op).find("RESULT").text()=="Y"){
				$("#CompleteTranche").show();
			}
			else{
				$("#SaveBR").text('Disburse');
			}
			DSVLBLALLWS();*/
       }
     }
	 else if(activityname=="OPSQD"){
	 		$("#SaveBR").show();
			$("#SaveBR").text('Disburse');
			$("#Save").hide();
			$("#SaveNxt").hide();
		}
		
		// Added for HE02 Start
   
   if($("#DMY7").val().split("|")[8]=="HE02")
   {
	   $("#DBMM_ACTUDISBAMT").attr('disabled',true);
   }
   
   // Added for HE02 End
      if(activityname=="DisbAppr"&& Tranche=="Tranche 1")
   {
	   $('.DBFDDBfields').attr('disabled',true);
	   $('.DISBDBfields').attr('disabled',true);
   }
	
	//EMIDEDUCT();
	$(document).on("click", "input[name='DBMM_PEMID']", function() {
		HndlPEMI($("input[name='DBMM_PEMID']:checked"). val());
	});
	$(document).on("blur", "input[name='DBFD_PAYAMT']", function() {
		var id = "#"+$(event.target).attr("id");
		//TalleyPayeeNDisbAmt(id);
	});
	
	$(document).on("click", "#CompleteTranche", function() {
		//var activityname1 = GetActivityName();
		var activityname1 = $("#DMY5").val().split('|')[2];
		var op = UI_getdata($("#PrcsID").val(),$('.FormPageMultiTab .active').text(),activityname1,"","","LSW_SCHKIFALLFLAPPR");
		if($(op).find("RESULT").text() != "SUCCESS"){
			alert($(op).find("RESULT").text());
			return;
		}
		UI_getdata($("#PrcsID").val(), $("#ActvID").val(), $(".FormPageMultiTab li.active a div").text(), activityname1, $("#LogUsr").val(), "LSW_SDISBSTAGECHECK");
		$(location).attr('href',window.location.origin + "/TPLSW/MyApplication") 
	});
	
    $(document).on("click", ".FormSave", function() {

        var html = $(this).closest('.DYNROW')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];

        if ($(this).text() == "Save & Next" || $(this).text() == "Send to OPS" || $(this).text() == "Handover to OPS" || $(this).text()== "Disburse" )  {
           
		   var op = UI_getdata($("#PrcsID").val(), $("#ActvID").val(), $(".FormPageMultiTab li.active a div").text(), $("#DMY5").val().split('|')[2], $(".FormPageSubTab").find("li.active").attr("id"), "LSW_SDISBSTAGECHECK1");
		   
		   if($(op).find("RESULT").text()!="YA")
		   {
		   var MndtryChk = ChkMandatoryFlds(prfx + "Mndtry");
            if (MndtryChk == "Mandatory") {
                alert("Fill the Mandatory Fields / Document(s)");
                return false;
            }
			
			var html1= $('.Memo')
		    MndtryChk = ChkMandatoryFlds_V1("DBFDMndtry",html1)
			if(MndtryChk == "Mandatory")
				{
				 alert("Fill the Mandatory Fields / Document(s)");
				 return false;
				}
		   }				
			 
        }
		
		
		
		if ($(this).text() == "Save & Next" || $(this).text() == "Send to OPS" || $(this).text() == "Handover to OPS" || $(this).text()== "Disburse" )  {
			
		var DisbAmt =0;
		var DeductionAmt =0;
		var TotalDisb=0;
        for(var i =0;i<$('.DISB').find('.DYNROW').length;i++)
		{
		DisbAmt = parseFloat(DisbAmt) + parseFloat($($('.DISB').find("input[name='DISB_DISBAMT']")[i]).val().replace(/,/g, ""));
		DeductionAmt = parseFloat(DeductionAmt) + parseFloat($($('.DISB').find("input[name='DISB_TOTDEDUC']")[i]).val().replace(/,/g, ""));
		}
		
      var amt=0;
	for(var i =0;i<$('.Memo').find('.DYNROW').length;i++)
		{
		amt = parseFloat(amt) + parseFloat($($('.Memo').find("input[name='DBFD_PAYAMT']")[i]).val().replace(/,/g, ""));
		}
		
		var TotalDisb=parseFloat(amt)
		//+parseFloat(DeductionAmt)
	if(DisbAmt<TotalDisb)
		{
		alert('Payee Amount  should not be greater than Disbursement amount');
		return 
		}
		else if(DisbAmt>TotalDisb)
		{
		alert('Payee Amount  should not be less than Disbursement amount');
		return 
		}
		
		var  DBMM_TOTALSANAMT =$("#DBMM_TOTALSANAMT").val().replace(/,/g, "");
		
		if(parseFloat(DisbAmt)>parseFloat(DBMM_TOTALSANAMT))
		{
		alert('Disbursement Amount  should not be greater than Sanction amount');
		return 
		}
		var Disamt=0;
		var Lntyamt=0;
		var Lnid='';
		
		
		for(var i =0;i<$('.DISB').find('.DYNROW').length;i++)
		{
				var Lnid=$($('.DISB').find("input[name='DISB_LOANID']")[i]).val()
				if(Lnid==$($('.DISB').find("input[name='DISB_LOANID']")[i]).val())
				{
					Disamt= parseFloat(Disamt) + parseFloat($($('.DISB').find("input[name='DISB_DISBAMT']")[i]).val().replace(/,/g, ""));
				}
			for(var j =0;j<$('.Memo').find('.DYNROW').length;j++)
			{

				if(Lnid==$($('.Memo').find('select[name=DBFD_LOANTYPE]')[j]).val())
				{		
					var Lntyamt=parseFloat(Lntyamt)+parseFloat($($('.Memo').find("input[name='DBFD_PAYAMT']")[j]).val().replace(/,/g, ""));
				}										
			}
			if(Disamt<Lntyamt)
				{
					alert('Payee Amount  should not be greater than Disbursement amount');
					return 
				}
				else if(Disamt>Lntyamt)
				{
					alert('Payee Amount  should not be less than Disbursement amount');
					return 
				}
		}
		
		
		
		
		
		
		
		
		}
		
		
		
		
		
		
		
       
        var TableID="";
        var MEMODATA = TxtGridsubmitdata_V2("Memo","DBFD_","DBMM_","DBFDDBfields"); 
        AssignGridXmltoField("DBMM_FAVOUROAGE", MEMODATA)
		
		var DISBDATA = TxtGridsubmitdata_V2("DISB","DISB_","DBMM_","DISBDBfields"); 
        AssignGridXmltoField("DBMM_DISBDATA", DISBDATA)
		
		
      var CHKresult= FormDataToDB(tbl, prfx,$("#DBMM_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)

        if (CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
        else
		{
			if($(this).text()== "Generate DM")
			{
			  GentrateDisbMemo("CAM");
			}
		}
        // Tab Header Change End


        

        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
		if($(this).text() == "Send to OPS" && $("#DMY5").val().split("|")[2]=="BranchOPS")
		{
			var HARDSTP = UI_getdata($("#PrcsID").val(),"BRANCH OPS","","","","LSW_SOVERALLSTAGVALDT ");
			if($(HARDSTP).find("RESULT").text() != "")
			{
				 alert('Complete the below Mandatory actionables \r\n'+$(HARDSTP).find("RESULT").text())
				return;
			}
		}
		if($(this).text() == "Send to OPS" || $(this).text() == "Handover to OPS"){
		
          var op = UI_getdata($("#PrcsID").val(), $("#ActvID").val(), $(".FormPageMultiTab li.active a div").text(), $("#DMY5").val().split('|')[2], $(".FormPageSubTab").find("li.active").attr("id"), "LSW_SDISBSTAGECHECK1");
		   
		   if($(op).find("RESULT").text()!="YA")
		   {		
			var html1= $('.Memo')
		    MndtryChk = ChkMandatoryFlds_V1("DBFDMndtry",html1)
			if(MndtryChk == "Mandatory")
				{
				 alert("Fill the Mandatory Fields / Document(s)");
				 return false;
				}
           }
		   else
		   {
			  if($("#DBMM_DISBAMT").val()=="" || $("#DBMM_DISBAMT").val()=="0"
			  || $("#DBMM_DISBREQDATE").val()=="" || $("#DBMM_ACTUDISBAMT").val()==""
			  || $("#DBMM_ACTUDISBAMT").val()=="0" || $("#DBFD_FAVOURTYPE1").val()=="") 
			  {
				  alert("Fill the Mandatory Fields / Document(s)");
				 return false;
			  }
		   }
		   
            /*  if($("#DMY5").val().split("|")[2]=="BranchOPS")
            	{
            	 if($("#DBMM_DMRPTF").val() != "Yes")
   			       {
   				    alert("Generate Disbursement Memo");
   				    return false;
   			       }	
            	}	*/		
			   var xml=UI_getdata($("#PrcsID").val(),"PDC","","","","LSW_SCHECKREPAYDATA")
				if($(xml).find('RESULT').text() != "OK")
				{
					alert($(xml).find('RESULT').text());
					return false;
				}
			var DisbAmt = $("#DBMM_DISBAMT").val().replace(/,/g, "");
     	/*if(DisbAmt=="")
		{
		DisbAmt=0;
		alert('Enter Valid Disbursement Amount');
        return false;
		}
	var amt=0;
	for(var i =0;i<$('.Memo').find('.DYNROW').length;i++)
		{
		amt = parseFloat(amt) + parseFloat($($('.Memo').find("input[name='DBFD_PAYAMT']")[i]).val().replace(/,/g, ""));
		}
	if(DisbAmt!=amt)
		{
		alert('Payee Amount  should be equal to Disbursement amount');
      
		return false;
		}*/
			
			
			if($(this).text() == "Send to OPS" && $("#PrMs5").val().split("|")[0]=="Tranche1")
			{
				/************if($("#DMY7").val().split('|')[11] != "")
				{
	                  var PRCSID = $("#PrcsID").val();
	            $.ajax({
	              url: "/TPLSW/ENACHFETCH",
	              type: 'POST',
	              data: {PRCSID:PRCSID,UID:$("#DMY7").val().split('|')[11],Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	              async:false,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	           success: function(stm){
			if(stm == "")
	    		{
					alert('E-NACH Failed')
					return false;
				}
             else if (stm.split("|")[0]=="FAILURE" || stm.split("|")[0]=="No Data")
	    		{
                  alert(stm.split("|")[3])
				  return false;
				}
				else if (stm.split("|")[0]=="SUCCESS")
	    		{
					if(stm.split("|")[2]!="")
					{
				      $("#DBMM_ENACHURMNO").val(stm.split("|")[2])
                      alert(stm.split("|")[3]+'. UMR No -'+stm.split("|")[2])
					}
					else
					{
					  alert(stm.split("|")[3])	
					}
				}				   
			   },
	             error: function(stm) {
		              //window.alert(LoadFrmXML("V0125"))
		                 alert("E-NACH Failed.");
						 	return false;
		                   }
	               });
			   }************/
			   /*************** OVER ALL COLLECTION STRT **********/
			var op_get_chrg_data = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETCOLLECTION_PRCS");
			if($(op_get_chrg_data).find("COLLECTIONAVL").text() == "YES")
			{
				if(confirm("Please make sure the details filled in charges screen, once the application moved to disbursement approval stage the details will be freeze (PF details/ Cross sell 1 – life and Cross sell 2 – Health)Do you want to continue to submit disbursement initiation stage."))
				{
				var PFNO1 = $(op_get_chrg_data).find("LOANUNIQID").text();
				var components=UI_getdata($("#PrcsID").val(),$(op_get_chrg_data).find("LOANUNIQID").text(),"","","","LSW_SGETCOMPONENT");
	                var PRCSID1 = $("#PrcsID").val();
	                var RECEIPTNO=""
                $.ajax({
		            url: "/TPLSW/LMSPF",
		            type: 'POST',
		            data: {PRCSID:PRCSID1,PFNO:PFNO1,RECEIPTNO:RECEIPTNO,COMPONENT:$(components).find("RESULT").text(),Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
		            async:true,
		   // dataType: 'json',
		   // contentType:'application/json',
		    
		            success: function(stm){        
		   // var obj = JSON.parse(JSON.stringify(stm))
		    	   if(stm == "")
		    		{
		    		  alert("Customer Creation/Updation failed. Contant IT!!!");
					  
					  UI_getdata($("#PrcsID").val(),PFNO1,stm,"","","LSW_SPUSHPFINTRRESULT");
					  //$("#APCM_PFCOLLECTFLG").val(stm);
		    		  return;
		    		}
		    	  else if(stm.split("|")[0] == "Fail")
	    			{
	    			  alert("Customer Creation/Updation failed. " + stm.split("|")[1]);
					  UI_getdata($("#PrcsID").val(),PFNO1,stm,"","","LSW_SPUSHPFINTRRESULT");
					  //$("#APCM_PFCOLLECTFLG").val(stm);
		    		  return;
	    			}
		    	   else if (stm.split("|")[0] == "Success")
	    			{
						UI_getdata($("#PrcsID").val(),PFNO1,stm,"","","LSW_SPUSHPFINTRRESULT");
						//$("#APCM_PFCOLLECTFLG").val(stm);
					}
			      }
				})
				}
				else{
					return;
				}
			}
			/*************** OVER ALL COLLECTION END **********/
			}
			
			
			var activityname = GetActivityName();
			var ACTVTY="";
			var OverAllStatus="";
			var WFACTVINIT = "";
			var op = UI_getdata(PrcsID,$('.FormPageMultiTab .active').text(),activityname,$(this).text(),"","LSW_SCHKIFALLFLAPPR");
			if($(op).find("RESULT").text() != "SUCCESS"){
				alert($(op).find("RESULT").text());
				return;
			}
			else if($(op).find("RESULT").text() == "SUCCESS" && $("#PrMs5").val().split("|")[0]=="Tranche1")
			{
				var RCUUNIQID=UI_getdata($("#PrcsID").val(),"","","","","LSW_SPUSHDATATORCUTBL");
					 if($(RCUUNIQID).find("RESULT").text() == "Y")
					 {
						 if(!InitRCU())
						 {
							 return;
						 }
						 UI_getdata($("#PrcsID").val(),"","","","","LSW_SUPDTINITSTATUS");
					 }
					 
			}
		   /*if(activityname =="BranchOPS")
				{
				ACTVTY=["CreditOPS"]
				}
			else if(activityname =="CreditOPS")
				{
				ACTVTY=["OPS"];
				}
			for(var j=0;j<ACTVTY.length;j++)
				{
				var CurntACTVTY=ACTVTY[j];
				WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
				var ChkFlowInit = UI_getdata($("#PrcsID").val(),CurntACTVTY,"","","","LSW_SCHKACTVITYASSIGNPROP");
				if($(ChkFlowInit).find("RESULT").text() != "SUCCESS")
				{
					alert($(ChkFlowInit).find("RESULT").text());
					return;
				}
				ChkFlowInit="";
				if(OverAllStatus != "" && WFACTVINIT != "Success")
					{
					OverAllStatus="Fail";
					}
				}*/
			
             if(activityname =="BranchOPS")
				{
				  ACTVTY=["DisbAppr"]
				}
			for(var j=0;j<ACTVTY.length;j++)
				{
				var CurntACTVTY=ACTVTY[j];
				WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
				var ChkFlowInit = UI_getdata($("#PrcsID").val(),CurntACTVTY,"","","","LSW_SCHKACTVITYASSIGNPROP");
				if($(ChkFlowInit).find("RESULT").text() != "SUCCESS")
				{
					alert($(ChkFlowInit).find("RESULT").text());
					return;
				}
				ChkFlowInit="";
				if(OverAllStatus != "" && WFACTVINIT != "Success")
					{
					OverAllStatus="Fail";
					}
				}		
		
			
			// WFComplete ($("#ActvID").val(),"var_rstatus=DISBSUBMIT","");	
				
				
			if(OverAllStatus == "Fail")
				{
				alert("File Assignment Failed");
				}
			else
				{
				if(activityname =="BranchOPS"||activityname =="CreditOPS"||activityname =="OPS" || activityname =="OPSQD")
					{
					if(activityname =="BranchOPS"){
						UI_getdata($("#PrcsID").val(), $(".FormPageMultiTab li.active a div").text(), activityname, "", "", "LSW_SOPSMSTRINSTR");
					}
					UI_getdata($("#PrcsID").val(), $("#ActvID").val(), $(".FormPageMultiTab li.active a div").text(), activityname, $("#LogUsr").val(), "LSW_SDISBSTAGECHECK");
					}
				
				alert("File Assigned");
				$(location).attr('href',window.location.origin + "/TPLSW/MyApplication") 
				}
		}
		if ($(this).text() == "Push to LMS" || $(this).text() == "Disburse") {
				
				var xml=UI_getdata($("#PrcsID").val(),"PDC","","","","LSW_SCHECKREPAYDATA")
				
				if($(xml).find('RESULT').text() != "OK")
				{
					alert($(xml).find('RESULT').text());
					return false;
				}
				var activityname = GetActivityName();
				var op = UI_getdata($("#PrcsID").val(),$('.FormPageMultiTab .active').text(),activityname,$(this).text(),"","LSW_SCHKIFALLFLAPPR");
				if($(op).find("RESULT").text() != "SUCCESS"){
					alert($(op).find("RESULT").text());
					return;
				}
				
				
				var html1= $('.Memo')
		        MndtryChk = ChkMandatoryFlds_V1("DBFDMndtry",html1)
			    if(MndtryChk == "Mandatory")
				{
				 alert("Fill the Mandatory Fields / Document(s)");
				 return false;
				}
			var HARDSTP = UI_getdata($("#PrcsID").val(),"DISBURSEMENT","","","","LSW_SOVERALLSTAGVALDT ");
				if($(HARDSTP).find("RESULT").text() != "")
				{
				 alert('Complete the below Mandatory actionables \r\n'+$(HARDSTP).find("RESULT").text())
					return;
				}
			if($(this).text() == "Disburse")
			{
			/************if($("#DMY7").val().split('|')[11] != "")
			{
			 var PRCSID = $("#PrcsID").val();
	            $.ajax({
	              url: "/TPLSW/ENACHFETCH",
	              type: 'POST',
	              data: {PRCSID:PRCSID,UID:$("#DMY7").val().split('|')[11],Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	              async:false,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	           success: function(stm){
			if(stm == "")
	    		{
					alert('E-NACH Failed')
					return false;
				}
             else if (stm.split("|")[0]=="FAILURE" || stm.split("|")[0]=="No Data")
	    		{
                  alert(stm.split("|")[3])
				  return false;
				}
				else if (stm.split("|")[0]=="SUCCESS")
	    		{
					if(stm.split("|")[2]!="")
					{
				      $("#DBMM_ENACHURMNO").val(stm.split("|")[2])
                      alert(stm.split("|")[3]+'. UMR No -'+stm.split("|")[2])
					}
					else
					{
					  alert(stm.split("|")[3])	
					}
				}				   
			   },
	             error: function(stm) {
		              //window.alert(LoadFrmXML("V0125"))
		                 alert("E-NACH Failed.");
						 	return false;
		                   }
	               });
			   }************/
			}
			
			if($(this).text()== "Disburse")
			{
			if (confirm("Do you want to Disburse?") == false)
				{
					return;
				}
			}
			
			var op = PushtoLMS();
			if(op !=""){
				return;
			}
			if($(this).text()== "Disburse" && $("#PrMs5").val().split("|")[0]=="Tranche1")
			{
				ACHImageProcess();
				if($("#DMY7").val().split('|')[20] == "Y")
				{
				LeadSQRStatusPush("Disbursed");
				}
				perodickyc();
			var GETCUSID = UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKLONTYPE");
			var CUSID=$(GETCUSID).find("CUSID").text()
				UI_getdata($("#PrcsID").val(),"DATAPUSHTOStagingCustom217");
				UI_getdata($("#PrcsID").val(),CUSID,"DATAPUSHTOStagingCustom246");
			}
			var activityname1 = GetActivityName();
			UI_getdata($("#PrcsID").val(), $("#ActvID").val(), $(".FormPageMultiTab li.active a div").text(), activityname1, $("#LogUsr").val(), "LSW_SDISBSTAGECHECK");
        	
			$(location).attr('href',window.location.origin + "/TPLSW/MyApplication")      
        }
    });
 



	$(document).on("click", ".DELETEBNKDET" , function() {

 	//var PrcsId=$(this).attr("data-tab").split("|")[0];
 	//var Type=$(this).attr("data-tab").split("|")[2];
 	//PrcsId=$("#"+PrcsId).val();
// var html=$(this).closest('.DYNROW')
   //  var UNIQID=$(html).find("[name=CEMI_EMPID]").val() 

 	 if(confirm('Delete Favouring Details') == true)
 		{
 		 // var xml=UI_getdata(PrcsId,UNIQID,Type,"","","LSW_SCLEARCUSDATA");

 	 	   $(this).closest('.DYNROW').remove()	
 	 		var k= $('.Memo').find('.DYNROW').length
 	 		for(i=0;i<k;i++)
 	 			{
 	 			//('.BankDetail1').find('.DYNROW')[i]
 	 		    var	j=i+1
 	            $($('.Memo').find('.DYNROW')[i]).find('#PROPTXTHDR').text('FAVOURING '+j)
 	 			}
 		}
 });
 

});