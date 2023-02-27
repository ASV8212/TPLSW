$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));
	
	
	$("#OPDD_TRNCH").val($(".FormPageMultiTab li.active a div").text())
	$("#OPDD_TRNCHName").val($(".FormPageMultiTab li.active a div").text())

    FormDataFromDB("LSW_TOPSOTCHDR", "OPDD_", "OPDDDBfields", $("#OPDD_TRNCH").val()+"|OPDD_TRNCH");
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
	 if(activityname=="PDD"){
		  $("#Save").hide();
		 $("#SaveNxt").hide();
		 $("#Submit").show();
	 }

    $(document).on("click", ".FormSave", function() {
		if($(this).text() == "Submit"){
			var apprvCNTP=0;
			var rejtCNTP=0;
			var apprvCNTW=0;
			var rejtCNTW=0;
			for(var lp=0;lp<$("#Table2").find('.tbodytr').length;lp++){
				if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('[name=OOPD_ACTN'+lp+']').is('select')==true){
					if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('select').val()=="Approved" && $($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[13]).text()=="PDD")
					{
						apprvCNTP=parseInt(apprvCNTP)+1;
					}
					else if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('select').val()=="Approved" && $($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[13]).text()=="Waiver")
					{
						apprvCNTW=parseInt(apprvCNTW)+1;
					}
					else if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('select').val()=="Rejected"  && $($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[13]).text()=="PDD")
					{
						rejtCNTP=parseInt(rejtCNTP)+1;
					}
					else if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('select').val()=="Rejected"  && $($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[13]).text()=="Waiver")
					{
						rejtCNTW=parseInt(rejtCNTW)+1;
					}
				}
				else if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('[name=OOPD_ACTN'+lp+']').is('input')==true){
					if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('input').val()=="Approved" && $($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[13]).text()=="PDD")
					{
						apprvCNTP=parseInt(apprvCNTP)+1;
					}
					else if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('input').val()=="Rejected"  && $($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[13]).text()=="PDD")
					{
						rejtCNTP=parseInt(rejtCNTP)+1;
					}
					else if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('input').val()=="Approved" && $($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[13]).text()=="Waiver")
					{
						apprvCNTW=parseInt(apprvCNTW)+1;
					}
					else if($($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[3]).find('input').val()=="Rejected"  && $($($("#Table2").find('.tbodytr')[lp]).find('.tbodytrtd')[13]).text()=="Waiver")
					{
						rejtCNTW=parseInt(rejtCNTW)+1;
					}
				}
			}
			var x = confirm("Approved PDD Count : "+apprvCNTP+"\nApproved Waiver Count : "+apprvCNTW+"\nRejected PDD Count : "+rejtCNTP+"\nRejected Waiver Count : "+rejtCNTW+"\n Kindly Confirm to proceed")
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
                alert("Fill the Mandatory Fields / Document(s)");
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
        	 GRDDTL = TxtGridsubmitdata_V1("Table2", "OOPD_", "OPDD_");
        	}
        else if($(op).find('RESULT').text()=="BRANCH")
        	{
        	GRDDTL = TxtGridsubmitdata_V1("Table3", "OOPD_", "OPDD_");
        	}
        else if($(op).find('RESULT').text() == "OPS")
        	{
        	GRDDTL = TxtGridsubmitdata_V1("Table4", "OOPD_", "OPDD_");
        	}
        AssignGridXmltoField("OPDD_GRDDTL", GRDDTL)
        var CHKresult=FormDataToDB(tbl, prfx,$("#OPDD_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
        
        if(CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
		UI_getdata($("#PrcsID").val(), $(".FormPageMultiTab li.active a div").text(), "PDDCHK", "", "", "LSW_SDETLDISBCHKLST");
        // Tab Header Change End


        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
		if ($(this).text() == "Submit") {
			 $(location).attr('href',window.location.origin + "/TPLSW/ManagePDD")   
		}
    });
    
    $(".OTCSTATUS").on('click', function() {
    	/*var Val = "";
    	
    	if(activityname=="PDD" && $(this).closest('.tbodytrtd').prev().prev().find('input').val()==""){
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
    	if(this.text == "Resend for PDD")
    		{
    		$(this).parent().hide();
    		$(this).closest('.tbodytrtd').prev().prev().text('Pending');
			$($(this).closest('.tbodytr').find('.tbodytrtd')[11]).text('Pending with NCM');
    		}

    });
	$(document).on("click",".OOTDRADIOCHK",function(){
		if(this.value=="Waiver" && $(this).closest('.tbodytrtd').next().find('input').val()=="")
		{
			$(this).prop("checked", false);
			alert("Kindly fill the remarks")
			return;
		}
	});
	$(document).on("click",".RaiseQry",function() {
		 var op=UI_getdata("PDD",$("#PrcsID").val(),"PDD"+$($(this).closest('.tbodytr').find('.tbodytrtd')[8]).text(),"","","LSW_SCHKQURYRAISED")
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
			$("#MNGQ_UNIQID").val("PDD"+$($(this).closest('.tbodytr').find('.tbodytrtd')[8]).text())
			
			
			 $("#RAISEQUERY").click();
		}
		else{
			alert($(op).find("RESULT").text());
			return;
		}
				});	

});