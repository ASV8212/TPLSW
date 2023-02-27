$(document).ready(function () {

	

	/*if ($("#UPDC_CUSID").val() != "")
	 {
	$(".UPDC_CUSID").text($("#UPDC_CUSID").val());
	 }*/
	 
	
	 FormDataFromDB("LSW_TDEFRMNTHDR","DMTH_","DMTHDBfields", "");

	 FncallDocChkLst(this,'Table2',{spname:'LSW_SGETDEFRKYCDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5,6','DEFRMNTKYC');
	 FncallDocChkLst(this,'Table3',{spname:'LSW_SDEFROTHRKYC',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5,6','DEFRMNTOTHRKYC');
	 FncallDocChkLst(this,'Table4',{spname:'LSW_SGETDEFRPFDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','PFDEFR');
	 FncallDocChkLst(this,'Table5',{spname:'LSW_SGETDEFRBNKDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','DEFRMNTBANKDTL');
	 FncallDocChkLst(this,'Table6',{spname:'LSW_SGETDEFRFINCLDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','DEFRMNTFINCDTL');
	 
	 
	 var PrcsId=$("#PrcsID").val();
	 var CUSID=$("#UPDC_CUSID").val();
	 var ACTID=$("#ActvID").val();
	 var activityname = GetActivityName();
	/* var xml=UI_getdata(PrcsId,CUSID,ACTID,activityname,"","LSW_SCHECKFILELOGIN2")
	  
	 
	
	 
	  var ButtonName= $(xml).find('BUTTONNAME').text()*/
	  
	  $("#MoveToLogin").text("Save & Submit");
		 	
	  
	  if(activityname=="DEFAppr")
		  {
		  $("#SendBack").show();
		  }
		  if((activityname=="DEFAppr") &&($("#PrMs1").val()!="View"))
		  {
		  $('.BGWhite').empty()
		  }

	 
		
		
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
	    	$(this).closest('span').find('input').val(Val);
	    	$(this).closest('span').find('div').hide()
	    	$(this).closest('span').find('input').show();

	    });
	
	$('.FormSave').on('click', function() {

		
			var PrcsId=$("#PrcsID").val();
			
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			
			var DMTH_KYCDTL = TxtGridsubmitdata_V1("Table2","KDTL_","DMTH_");	//KYC
			AssignGridXmltoField("DMTH_KYCDTL", DMTH_KYCDTL);
			
			var KYCOTHRDOCGRID = TxtGridsubmitdata_V1("Table3","OKYD_","DMTH_");	//OTHR KYC
			AssignGridXmltoField("DMTH_OTHRDOC", KYCOTHRDOCGRID);
			
			var DMTH_BANKDTL = TxtGridsubmitdata_V1("Table5","DBKD_","DMTH_");	//BANK
			AssignGridXmltoField("DMTH_BANKDTL", DMTH_BANKDTL);
			
			var DMTH_PFDTL = TxtGridsubmitdata_V1("Table4","DFPD_","DMTH_");     //PF DEFR
			AssignGridXmltoField("DMTH_PFDTL", DMTH_PFDTL); 
			
			var DMTH_FINCLDTL = TxtGridsubmitdata_V1("Table6","DFCD_","DMTH_");     //FINCL
			AssignGridXmltoField("DMTH_FINCLDTL", DMTH_FINCLDTL); 
			
			FormDataToDB(tbl,prfx,"");
			
			var activityname = GetActivityName();

			 if(($(this).text() == "Save & Submit") && (activityname == "DEFAppr"))
				 {
				 var xml=UI_getdata($("#PrcsID").val(),$(this).text(),"","","","LSW_SHNDLSTATS")
				 if($(xml).find('RESULT').text() == 'FAIL')
					 {
					 alert("File can't be submitted with reject status. Kindly send back the file.")
					 return;
					 }
				 else if($(xml).find('RESULT').text() == 'FAILMNDTRY')
					 {
					 alert("Kindly update status for all Deferment")
					 return;
					 }
				 else{

					 var activityname1 = GetActivityName();
					 UI_getdata($("#PrcsID").val(),activityname1,"","","","LSW_SUPDTPFSTST");
						var xml=UI_getdata($("#PrcsID").val(),activityname1,"","","","LSW_SWFVARDECIDE");
						
						var Button = $(xml).find("WFVAR").text();
						
						WFComplete ($("#ActvID").val(),"var_status="+Button,"");
				 }
				 }
			 if(($(this).text() == "Send Back") && (activityname == "DEFAppr"))
				 {
				 var xml=UI_getdata($("#PrcsID").val(),$(this).text(),"","","","LSW_SHNDLSTATS");
				 if($(xml).find('RESULT').text() == 'FAILMNDTRY')
				 {
				 alert("Kindly update status for all Deferment")
				 return;
				 }
				UI_getdata($("#PrcsID").val(),activityname,"","","","LSW_SUPDTPFSTST");
				 var Button = "DAS";
				 WFComplete ($("#ActvID").val(),"var_status="+Button,"");
				 
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
	$(".VRFY").on('change', function() {
		if($(this).prop("checked")==true)
			{
			$(this).closest('td').next().find('button').hide();
			}
		else{
			$(this).closest('td').next().find('button').show();
		}
});
	$(".VRFY1").on('change', function() {
		if($(this).prop("checked")==true)
			{
			$(this).closest('.CREDIT').next().find('button').hide();
			}
		else{
			$(this).closest('.CREDIT').next().find('button').show();
		}
});
	

$(document).on("click", ".DOCSTATUS" , function() {


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
    		}
    	else {
    		$(this).closest('td').next().find('input[type=text]').val('')
    		$(this).closest('td').next().find('input[type=text]').attr( "disabled", "disabled" )
    		$(this).closest('td').next().find('input[type=text]').addClass("DSVLBL")
    		$(this).closest('td').next().find('input[type=text]').next().hide()
    	}
    });

});


