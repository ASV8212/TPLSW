$(document).ready(function() {

	if($("#DMY7").val().split("|")[8]=="ML01")
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
	
	/*$("#DOAH_TRNCH").val($(".FormPageMultiTab li.active a div").text())
	$("#DOAH_TRNCHName").val($(".FormPageMultiTab li.active a div").text())*/
	
	$("#DOAH_TRNCH").attr("value",$(".FormPageMultiTab li.active a div").text());
	$("#DOAH_TRNCHName").attr("value",$(".FormPageMultiTab li.active a div").text());
	

    FormDataFromDB("LSW_TDISBOPSACKHDR", "DOAH_", "DOAHDBfields", $("#DOAH_TRNCH").val()+"|DOAH_TRNCH");
	var activityname = GetActivityName();
	$("#HiddenActID").val(activityname);
	$("#HiddenActID").val("BranchOPS");
    /**Grid Trigger Start **/
	if(activityname == "BranchOPS")
	{
		FncallDocChkLst(this,'Table2',{spname:'LSW_SGETOPSACK',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1,9,10,11,12,14','OPSASK');
	}
	else if(activityname == "OPS")
	{
		FncallDocChkLst(this,'Table2',{spname:'LSW_SGETOPSACK',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1,8,11,12,13,14','OPSASK');
	}
	else if(activityname == "OPSQD"){
		FncallDocChkLst(this,'Table2',{spname:'LSW_SGETOPSACK',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1,9,10,11,12,13,14','OPSASK');
		DSVLBLALL();
	}
	else{
		FncallDocChkLst(this,'Table2',{spname:'LSW_SGETOPSACK',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('.FormPageMultiTab li.active a div').text(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1,9,10,11,12,13,14','OPSASK');
	}
    
    // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/
	/*if(activityname=="BranchOPS"){
        for(var n=0;n<$("#Table2").find('.tbodytr').length;n++){
        	if(($($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')[7]).find('select').val()=="PDD" || $($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')[7]).find('select').val()=="OTC")&&($($($("#Table2").find('.tbodytr')[1]).find('.tbodytrtd')[12]).text() !="Rejected")){
        		$($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')).not($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')[8]).find('input').addClass('DSVLBL');
        		$($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')).not($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')[8]).find('img').hide();
        		$($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')).not($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')[8]).find('input[type=checkbox]').attr("disabled", true);

        	}
        }
        }*/
	
	/*Added for Grid Dropdown hide issue Start */
	$("#Table2").parent().css("overflow","visible");
	/*Added for Grid Dropdown hide issue End */
	
    $(document).on("click", ".FormSave", function() {

        var html = $(this).closest('.DYNROW')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];
        var activitynames = GetActivityName();
		
        if(activitynames=="BranchOPS"){
			for(var m=0;m<$("#Table2").find('.tbodytr').length;m++){
				if($($($("#Table2").find('.tbodytr')[m]).find('.tbodytrtd')[7]).find('select').val()=="PDD" || $($($("#Table2").find('.tbodytr')[m]).find('.tbodytrtd')[7]).find('select').val()=="OTC"){
					if($($($("#Table2").find('.tbodytr')[m]).find('.tbodytrtd')[8]).find('input').val()==""){
						alert("Kindly choose Deferred Date for "+$($($("#Table2").find('.tbodytr')[m]).find('.tbodytrtd')[0]).text());
						return
					}
					
				}
				else if($($($("#Table2").find('.tbodytr')[m]).find('.tbodytrtd')[7]).find('select').val()==""){
					alert("Kindly choose Branch Status for "+$($($("#Table2").find('.tbodytr')[m]).find('.tbodytrtd')[0]).text());
					return
				}
			}
			}
        
        if ($(this).text() == "Save & Next") {
            var MndtryChk = ChkMandatoryFlds(prfx + "Mndtry");
            if (MndtryChk == "Mandatory") {
                alert("Fill the Mandatory Fields / Document(s)");
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

        var OPSACKDTL = TxtGridsubmitdata_V1("Table2", "DDMD_", "DOAH_");
        AssignGridXmltoField("DOAH_OPSACKDTL", OPSACKDTL)
        var CHKresult=FormDataToDB(tbl, prfx, $("#PrcsID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		
        if (CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
        
		UI_getdata($("#PrcsID").val(), $(".FormPageMultiTab li.active a div").text(), "OPSACK", "", "", "LSW_SDETLDISBCHKLST");
        // Tab Header Change End
        /*if(activitynames=="BranchOPS"){
        for(var n=0;n<$("#Table2").find('.tbodytr').length;n++){
        	if($($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')[7]).find('select').val()=="PDD" || $($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')[7]).find('select').val()=="OTC"){
        		$($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')).not($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')[8]).find('input').addClass('DSVLBL');
        		$($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')).not($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')[8]).find('img').hide();
        		$($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')).not($($("#Table2").find('.tbodytr')[n]).find('.tbodytrtd')[8]).find('input[type=checkbox]').attr("disabled", true);

        	}
        }
        }*/
        
        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
    });


});