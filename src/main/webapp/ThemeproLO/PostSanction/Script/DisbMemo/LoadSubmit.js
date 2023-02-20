$(document).ready(function() {

if($("#DMY7").val().split("|")[8]=="HE02")
   {
	 $('.FormPageMultiTab').find('li').last().hide()
	 $($(".FormPageSubTab").find('li')[4]).remove()
	 $($(".FormPageSubTab").find('li')[3]).remove()
	 $($(".FormPageSubTab").find('li')[1]).remove()
	   //$(".ADDBTN").hide();
	   //$(".DELFAV").hide();
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
	var activityname123 = GetActivityName();
	if($("#DMY5").val().split('|')[2]=="BranchOPS" && $(".FormPageMultiTab li.active a div").text()=="Tranche 1")
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
	}
	GetCustomerName();
	$("#DBMM_TRANCHID").attr("value",$(".FormPageMultiTab li.active a div").text());
	$("#DBMM_TRANCHNAME").attr("value",$(".FormPageMultiTab li.active a div").text());
	$("#DBFD_TRANCHID").attr("value",$(".FormPageMultiTab li.active a div").text());
	/*$("#DBFD_TRANCHID").attr("value",$(".FormPageMultiTab li.active a div").text());
	$("#DBFD_TRANCHNAME").attr("value",$(".FormPageMultiTab li.active a div").text());*/
	
	//$("#DBMM_ACTUDISBAMT").val(CURCommaSep($("#DMY3").val().split("|")[3]));
	
	$("#DBMM_DSANCAMT").text(CURCommaSep($("#DMY3").val().split("|")[3]));
	
	
	LoadMultiData("",$("#PrcsID").val(),$("#DBMM_TRANCHID").val(),"Memo","DBFDDBfields","LSW_SDISBMEMOFAVOURDATA");
	//LoadMultiData("",$("#PrcsID").val(),"","","DBMMDBfields","LSW_SDISBMEMODETL");
	//getPFData();
	
	FormDataFromDB("LSW_TDISBURMEMO", "DBMM_", "DBMMDBfields", $("#DBMM_TRANCHID").val()+"|DBMM_TRANCHID");
    
	
	//$("#BTNREPAYGRD").click();
	
	
        
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
	
	
	  $("#BTNREPAYGRD").click();
	
	
	// Added for P2 Delivery 45 END
    	
    
    
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
	         
	       if(  $(HTML).find('select[name=DBFD_FAVOURTYPE]').val()=="Others")
	         {
	  		   $(HTML).find(".OTHERACCT").show();
	  		   $(HTML).find(".CUSACCT").hide();
	         	
	         }
	       }
	}

	
	//remaining amount start	
		var ActlDisbAmt=Number($("#DBMM_DDISBURAMT").text().replace(/,/g, ""))
	var TotalDisbAmt=Number($("#DMY3").val().split("|")[3])
	
	if ($(opCH).find("RESULT").text() != "Y" )
	{
		
	ActlDisbAmt = Number(ActlDisbAmt) + Number($("#DBMM_ACTUDISBAMT").val().replace(/,/g, ""));
	
	$("#DBMM_DDISBURAMT").text(CURCommaSep(ActlDisbAmt));
	}
	
	var RemaimAmt=(TotalDisbAmt-ActlDisbAmt) - Number($("#DBMM_CANCELAMT").text().replace(/,/g, "")) // Minus Added for p2 Delivery 45 
	if(RemaimAmt==NaN)
	{
    	RemaimAmt="0"
	}
	$("#DBMM_DREMAINGAMT").text(CURCommaSep(RemaimAmt));
	
	if ($(opCH).find("RESULT").text() != "Y" )
	{
		if($("#DBMM_ACTUDISBAMT").val()== "")
		{
			$("#DBMM_ACTUDISBAMT").val(CURCommaSep(RemaimAmt));
		}
	}
	
		//remaining amount end	
		if($('input:radio[name=DBMM_PEMID]')[0].checked == false && $('input:radio[name=DBMM_PEMID]')[1].checked == false)
	{
	  $('input:radio[name=DBMM_PEMID]')[0].checked = true;
	  $('input:radio[name=DBMM_PEMID][value=Yes]').click();
	}
	
	
	if($("#DMY7").val().split("|")[8]=="HE02")
   {
	   $('input:radio[name=DBMM_PEMID]')[1].checked = true;
	  $('input:radio[name=DBMM_PEMID][value=No]').click();
	  $('input[name="DBMM_PEMID"]').attr('disabled',true)
   }
	
		var activityname = GetActivityName();
	
	var op = UI_getdata($("#PrcsID").val(), $("#ActvID").val(), $(".FormPageMultiTab li.active a div").text(), activityname,$(".FormPageSubTab").find("li.active").attr("id"), "LSW_SDISBSTAGECHECK1");
	//if($(op).find("RESULT").text() !="Y")
	//{	
   if($(op).find("RESULT").text() =="N" && $("#PrMs1").val() !="View")
	{	
		LoadOverDueAMTAPI();
	    HndlPEMI($("input[name='DBMM_PEMID']:checked"). val());
	  //$(".DeductView").show();
	  //GETREMAINGAMT();
	 /* if($("#DMY5").val().split("|")[2]!="BranchOPS")
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
		 // $(".DeductView").hide();
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
	
	
	//EMIDEDUCT();
	$(document).on("click", "input[name='DBMM_PEMID']", function() {
		HndlPEMI($("input[name='DBMM_PEMID']:checked"). val());
	});
	$(document).on("blur", "input[name='DBFD_PAYAMT']", function() {
		var id = "#"+$(event.target).attr("id");
		TalleyPayeeNDisbAmt(id);
	});
	
	$(document).on("click", "#CompleteTranche", function() {
		var activityname1 = GetActivityName();
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

        if ($(this).text() == "Save & Next" || $(this).text() == "Send to OPS" || $(this).text() == "Handover to OPS") {
            
			var op = UI_getdata($("#PrcsID").val(), $("#ActvID").val(), $(".FormPageMultiTab li.active a div").text(), $("#DMY5").val().split('|')[2], $(".FormPageSubTab").find("li.active").attr("id"), "LSW_SDISBSTAGECHECK1");
		   
		   if($(op).find("RESULT").text()!="YA")
		   {
			var MndtryChk = ChkMandatoryFlds(prfx + "Mndtry");
            if (MndtryChk == "Mandatory") {
                alert("Fill the Mandatory Fields");
                return false;
            }
			
			var html1= $('.Memo')
		    MndtryChk = ChkMandatoryFlds_V1("DBFDMndtry",html1)
			if(MndtryChk == "Mandatory")
				{
				 alert("Fill the Mandatory Fields");
				 return false;
				}
		   }				
			 
        }
       
        var TableID="";
        var MEMODATA = TxtGridsubmitdata_V2("Memo","DBFD_","DBMM_","DBFDDBfields"); 
        AssignGridXmltoField("DBMM_FAVOUROAGE", MEMODATA)
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
			  GentrateDisbMemo();
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
				 alert("Fill the Mandatory Fields");
				 return false;
				}
		   }
              if($("#DMY5").val().split("|")[2]=="BranchOPS")
            	{
            	 if($("#DBMM_DMRPTF").val() != "Yes")
   			       {
   				    alert("Generate Disbursement Memo");
   				    return false;
   			       }	
            	}			
			   var xml=UI_getdata($("#PrcsID").val(),"PDC","","","","LSW_SCHECKREPAYDATA")
				if($(xml).find('RESULT').text() != "OK")
				{
					alert($(xml).find('RESULT').text());
					return false;
				}
			var DisbAmt = $("#DBMM_DISBAMT").val().replace(/,/g, "");
     	if(DisbAmt=="")
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
		}
			
			
			
			
			
			var activityname = GetActivityName();
			var ACTVTY="";
			var OverAllStatus="";
			var WFACTVINIT = "";
			var op = UI_getdata(PrcsID,$('.FormPageMultiTab .active').text(),activityname,"","","LSW_SCHKIFALLFLAPPR");
			if($(op).find("RESULT").text() != "SUCCESS"){
				alert($(op).find("RESULT").text());
				return;
			}
			
			if($(this).text() == "Send to OPS")
			{
				if($("#DMY7").val().split('|')[11] != "")
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
			   }
			}
			
			if(activityname =="BranchOPS")
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
				if(OverAllStatus != "" && WFACTVINIT != "Success")
					{
					OverAllStatus="Fail";
					}
				}
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
				var op = UI_getdata($("#PrcsID").val(),$('.FormPageMultiTab .active').text(),activityname,"","","LSW_SCHKIFALLFLAPPR");
				if($(op).find("RESULT").text() != "SUCCESS"){
					alert($(op).find("RESULT").text());
					return;
				}
				
				
				var html1= $('.Memo')
		        MndtryChk = ChkMandatoryFlds_V1("DBFDMndtry",html1)
			    if(MndtryChk == "Mandatory")
				{
				 alert("Fill the Mandatory Fields");
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
			if($("#DMY7").val().split('|')[11] != "")
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
			   }
			}
			var op = PushtoLMS();
			if(op !=""){
				return;
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