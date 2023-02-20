$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));
	
	
	$("#OOTC_TRNCH").val($(".FormPageMultiTab li.active a div").text())
	$("#OOTC_TRNCHName").val($(".FormPageMultiTab li.active a div").text())

    FormDataFromDB("LSW_TOPSOTCHDR", "OOTC_", "OOTCDBfields", $("#OOTC_TRNCH").val()+"|OOTC_TRNCH");
   // var UsrID = GetCurrentUser()
    var activityname = GetActivityName();
	$("#HiddenActID").val(activityname);
    var op = UI_getdata(activityname,"","","","","LSW_SGETUSRROLE")
    GridDecider($(op).find('RESULT').text())
    /**Grid Trigger Start **/
    //$("#BTNSALES").click();
    // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/
    
    
    
    if(activityname=="BranchOPS" || activityname=="CreditOPS")
	 {
	  $("#Save1111").show();
	 }
	 if(activityname=="OPS"){
		 $("#RaiseQuery").show();
	 }
	if(activityname=="OTC"){
		$("#Save").hide();
		$("#SaveNxt").hide();
		$("#Submit").show();
	}
    $(document).on("click", ".FormSave", function() {
		
		if($(this).text() == "Submit"){
			var apprvCNT=0;
			var rejtCNT=0;
			for(var lp=0;lp<$("#Table2").find('.tbodytr').length;lp++){
				if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('[name=OOTD_ACTN'+lp+']').is('select')==true){
					if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('select').val()=="Approved")
					{
						apprvCNT=parseInt(apprvCNT)+1;
					}
					else if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('select').val()=="Rejected")
					{
						rejtCNT=parseInt(rejtCNT)+1;
					}
				}
				else if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('[name=OOTD_ACTN'+lp+']').is('input')==true){
					if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('input').val()=="Approved")
					{
						apprvCNT=parseInt(apprvCNT)+1;
					}
					else if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('input').val()=="Rejected")
					{
						rejtCNT=parseInt(rejtCNT)+1;
					}
				}
			}
			
			var x = confirm("Approved OTC Count : "+apprvCNT+"\n Rejected OTC Count : "+rejtCNT+"\n Kindly Confirm to proceed")
			if(x==false){
				return;
			}
		}

        var html = $(this).closest('.DYNROW')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];
        var activityname = GetActivityName();

        if ($(this).text() == "Save & Next") {
            var MndtryChk = ChkMandatoryFlds(prfx + "Mndtry");
            if (MndtryChk == "Mandatory") {
                alert("Fill the Mandatory Fields");
                return false;
            }
        }
        if ($(this).text() == "Send to OPS" && activityname=="BranchOPS"){
        	var WFACTVINIT1 = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|CreditOPS|Vendor||ADMIN","LSW_SWFACTVINITCALL");
        	var WFACTVINIT2 = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|OTC|Vendor||ADMIN","LSW_SWFACTVINITCALL");
        	var WFACTVINIT3 = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|PDD|Vendor||ADMIN","LSW_SWFACTVINITCALL");
        	
        	if (WFACTVINIT1 == "Success" && WFACTVINIT2 == "Success" && WFACTVINIT3 == "Success")
        	{
        	alert("File Assigned");
        	}
        }
        if ($(this).text() == "Send to OPS" && activityname=="CreditOPS"){
        	var WFACTVINIT1 = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|OPS|Vendor||ADMIN","LSW_SWFACTVINITCALL");
        	if (WFACTVINIT1 == "Success")
        	{
        	alert("File Assigned");
        	}
        }
        // Customer Seq ID Gen Start		
        /*if ($(html).find("[name=BKDT_BNKNO]").val() == "") {
            var CUSID = UI_getdata("BNK", "", "Yes", "", "", "Sam_sGetSeqID");
            $(html).find("[name=BKDT_BNKNO]").val($(CUSID).find("Val1").text());
        }*/
        // Customer Seq ID Gen End 

        /*$("#BKDT_BNKREFNAME").val($(".FormPageMultiTab li.active a div").text())*/
        
        var activityname = GetActivityName();
        var op = UI_getdata(activityname,"","","","","LSW_SGETUSRROLE")
        var GRDDTL = "";
        if($(op).find('RESULT').text()=="SALES")
        	{
        	 GRDDTL = TxtGridsubmitdata_V1("Table2", "OOTD_", "OOTC_");
        	}
        else if($(op).find('RESULT').text()=="BRANCH")
        	{
        	GRDDTL = TxtGridsubmitdata_V1("Table3", "OOTD_", "OOTC_");
        	}
        else if($(op).find('RESULT').text() == "OPS")
        	{
        	GRDDTL = TxtGridsubmitdata_V1("Table4", "OOTD_", "OOTC_");
        	}
        AssignGridXmltoField("OOTC_GRDDTL", GRDDTL)
        
        var CHKresult=FormDataToDB(tbl, prfx,$("#OOTC_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);

        if (CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
        UI_getdata($("#PrcsID").val(), $(".FormPageMultiTab li.active a div").text(), "OTCCHK", "", "", "LSW_SDETLDISBCHKLST");
        // Tab Header Change End


        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
		if($(this).text() == "Submit"){
			$(location).attr('href',window.location.origin + "/TPLSW/ManageOTC")   
		}
    });
    
    $(".OTCSTATUS").on('click', function() {
    	/*var Val = "";
    	var activityname = GetActivityName();
    	
    	if(activityname=="OTC" && $(this).closest('.tbodytrtd').prev().prev().find('input').val()==""){
    		alert("Kindly fill Remarks");
    		return;
    	}
    	
    	if(this.text=="Reject")
    		{
    		Val="Rejected"
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
    	$(this).closest('span').find('input').show();*/

    });
    
    $('.OTCSTATUS1').on('click', function() {
    	if(this.text == "Resend for OTC")
    		{
    		$(this).parent().hide();
    		$(this).closest('.tbodytrtd').prev().prev().text('Pending');
			$($(this).closest('.tbodytr').find('.tbodytrtd')[12]).text('Pending with ZSM')
    		}

    });
$(document).on("click",".RaiseQry",function() {
		var op=UI_getdata("OTC",$("#PrcsID").val(),"OTC"+$($(this).closest('.tbodytr').find('.tbodytrtd')[8]).text(),"","","LSW_SCHKQURYRAISED")
		if($(op).find("RESULT").text()=="ALLOW"){
		var xml = UI_getdata("",$("#PrcsID").val(),$('#LogUsr').val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[9]).text(),$($(this).closest('.tbodytr').find('.tbodytrtd')[8]).text(),"LSW_SGETQURYTYP");
		var secid = $(xml).find("SECTNID").text();
		if(secid == "")
			{
			alert("Incorrect Section ID")
			return
			}
		
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
	        
			$("#MNGQ_ATTCHURLUPLOAD").show();
			$('.rounded').hide();
			$("#MNGQ_ATTCHURL").val('');
			$("input[name=datafile]").attr('disabled',false);
			$("input[name=datafile]").attr('display','block');
	  
			$('.FIDU').find('.name').text('Click Here to Upload')
			
			
			//push data to hidden
			$("#MNGQ_SECTNID").val(secid);
			
			//$('#MNGQ_TYP').find("option[value='"+$(xml).find("TYP").text()+ "']").attr("selected","selected");
			$('#MNGQ_TYP').val($(xml).find("TYP").text());
			$("#MNGQ_QURYNAME").val($(xml).find("QURYNAME").text());
			$("#MNGQ_UNIQID").val("OTC"+$($(this).closest('.tbodytr').find('.tbodytrtd')[8]).text())
			
			 $("#RAISEQUERY").click();
		}
			else{
			alert($(op).find("RESULT").text());
			return;
		}
				});	

});