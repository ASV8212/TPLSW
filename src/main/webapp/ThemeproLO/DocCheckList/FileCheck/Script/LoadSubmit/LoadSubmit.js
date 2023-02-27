$(document).ready(function () {

	
	$("#UCLH_PRCSID").attr("value",$("#PrcsID").val());

	 RECOMMENDHIDE()

	 FormDataFromDB("LSW_UPFLCHCKLSTHDR","UCLH_","UCLHDBfields", "");
	 if($("#UCLH_SCHEM").val()=="")
		 {
		 var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSCHMCODE")
		 $("#UCLH_SCHEM").val($(xml).find('SCHEME').text())
		 }
	
    var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETPRODUCTNAME")
    var CROSS=$(xml).find('PRODUCT').text() 
	if(CROSS=='T316')
	{
	$("#FormPageTab6").show()
	}
	else
	{
	$("#FormPageTab6").hide()
	}
	 var op = UI_getdata($("#LogUsr").val(),$("#PrcsID").val(),"","","","LSW_SGETUSRGRP1")

	 if($(op).find("COAPPLI").text()=="NO")
		 {
		 
		 $("#FormPageTab2").hide()
		 
		 }
	 
	 if($(op).find("GUARANTOR").text()=="NO")
	 {
	 
		 $("#FormPageTab3").hide()
	 
	 }
	 
  var activityname = GetActivityName();
	 
  if (activityname=="SendToCredit")
    {
        $("#MoveToLogin").text('Send for Approval'); 
    }
  if(activityname=="Login")
	 {
       $('.MVLBTN').hide()
     }


  LoadMultiData("",$("#PrcsID").val(),$("#UCLH_SCHEM").val(),"COAPPCAMChecklist","FICLDBfields","LSW_SGETFILECKLISTCOAPP");
	// LoadMultiData("",$("#PrcsID").val(),$("#BNKS_CUSID").val(),"BankDetail1","BNKSDBfields","LSW_SGETCUSWSACCNT");
	 $("#BTNUPLDFILECHECK").click();
	 
		 
		  getApplName()
CheckRadio();
	 var DATA=["COAPPCAMChecklist|"];
	 for (j=0;j<DATA.length;j++)
		 {
		   var CAM=DATA[j].split("|")[0];
	       var row = $("." + CAM).find(".DYNROW").length;
	       for (i=0;i<row;i++)
	       {
	         var HTML = $("." + CAM).find(".DYNROW")[i];
	         SchemeBasedCAM(HTML,"FICL_INCCONSID"+(parseInt([i])+1));
	       }
	     }
	 
	 DATA = ["COAPPCAMChecklist|"]
	 for (j=0;j<DATA.length;j++)
		 {
		 var CAM1=DATA[j].split("|")[0];
		 var row1 = $("." + CAM).find(".DYNROW").length;
		 for (i=0;i<row;i++)
	       {
	         var HTML = $("." + CAM1).find(".DYNROW")[i];
	         HndlPartclr(HTML,"FICL_SAMDATE");
	         HndlPartclr(HTML,"FICL_MINLATEST");
	         HndlPartclr(HTML,"FICL_CARPT");
	       }
		 }
	 HndlPartclr('',"UCLH_SAMEDATE");
     HndlPartclr('',"UCLH_APPLACTION");
     HndlPartclr('',"UCLH_CARPT");
	
	 
	 //SchemeBasedCAM()
	$('.FormSave').on('click', function() {
			
		if($(this).text() == "Move to Login")
		{
		
		Button = "Frwd";
		
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		 
		/*var DocMndtry=CheckDocMndtry()
		
		if(DocMndtry!="")
		{
			alert(DocMndtry)
			return false;
		}*/
		}
		
			
			
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			
			var GRDDATA = TxtGridsubmitdata_V1("Table2","UCLD_","UCLH_");
			AssignGridXmltoField("UCLH_GRDDATA", GRDDATA);
			
			 var UCLH_COAPPCAM = TxtGridsubmitdata_V2("COAPPCAMChecklist","FICL_","UCLH_","FICLDBfields"); 
	         AssignGridXmltoField("UCLH_COAPPCAM", UCLH_COAPPCAM)
			
			
			FormDataToDB(tbl, prfx, '');
			
			
			if($(this).text() == "Move to Login")
			{
			var xml=UI_getdata(PrcsId,"","","","","LSW_SCHECKPFCOLLECTION")
			
			var Collection=$(xml).find('RESULT').text()
			
			if(Collection != 'SUCCESS')
				{
				   alert(Collection);
				   return false;
				}
			 // NXTTAB(this);

		
		// Mandatory Check End
		
			
			// For Workflow Submission Start
		
			var Button = "Frwd";
			// To be Placed At Last Start
			
			WFComplete ($("#ActvID").val(),"var_status="+Button,"");			
			// To be Placed At Last End
				}
			else if($(this).text() == "Send to Credit")
			{
			var Button = "Frwd";
			// To be Placed At Last Start
			WFComplete ($("#ActvID").val(),"var_status="+Button,"");	
			}
			else if ($(this).text() == "Send for Approval")
			{			
	   //var Button = "ToRCMD";
				// To be Placed At Last Start
	   //WFComplete ($("#ActvID").val(),"var_status="+Button+"&var_rcmdu=bcm1","");
	   
				var op = UI_getdata($("#PrcsID").val()+'|'+$("#ActvID").val(),"DEVIATIONS","","","","LSW_SONSUBMTWFDTLINS");
				var pattern = /var_/;
				var exists = pattern.test($(op).find("WFVAR").text());
				if(exists) {
				   WFComplete ($("#ActvID").val(),$(op).find("WFVAR").text(),"");
				}
				else{
					alert($(op).find("WFVAR").text());
				}
			}
			   if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
		});
	
	$('.RADIOACTNCHK').on('change', function() {
		var UniqTyp = $(this).attr("data-uniq-type");
		var op=""
		if(UniqTyp=="CAM Checklist")
		{
		  op=UI_getdata("File Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[5]).text(),"","","LSW_SCHKQURYRAISED");
		}
		else if(UniqTyp=="CAM Checklist Fields"){
			op=UI_getdata("File Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find("[name=FICL_CUSID]").val()+'-'+$(this).closest('.form-row').find('.md-form:first label').text(),"","","LSW_SCHKQURYRAISED");
		}
		else if(UniqTyp=="CAM Checklist FieldsA"){
			op=UI_getdata("File Checklist",$("#PrcsID").val(),$("#UCLH_CUSID").val()+'-'+$(this).closest('.form-row').find('.md-form:first label').text(),"","","LSW_SCHKQURYRAISED");
		}
		if($(op).find("RESULT").text()!="ALLOW"){
			$(this). prop("checked", false);
			$('[name='+this.name+']').not(this).prop("checked", true);
			alert($(op).find("RESULT").text());
			return;
		}
		if($(this).val() == "No")
			{
			$(this).closest('td').next().find('button').show()
			}
		else{
			$(this).closest('td').next().find('button').hide()
		}
	});
	
	$('.RADIOACTNCHK1').on('change', function() {
		var UniqTyp = $(this).attr("data-uniq-type");
		var op=""
		if(UniqTyp=="CAM Checklist")
		{
		  op=UI_getdata("File Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[5]).text(),"","","LSW_SCHKQURYRAISED");
		}
		else if(UniqTyp=="CAM Checklist Fields"){
			op=UI_getdata("File Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find("[name=FICL_CUSID]").val()+'-'+$(this).closest('.form-row').find('.md-form:first label').text(),"","","LSW_SCHKQURYRAISED");
		}
		else if(UniqTyp=="CAM Checklist FieldsA"){
			op=UI_getdata("File Checklist",$("#PrcsID").val(),$("#UCLH_CUSID").val()+'-'+$(this).closest('.form-row').find('.md-form:first label').text(),"","","LSW_SCHKQURYRAISED");
		}
		if($(op).find("RESULT").text()!="ALLOW"){
			$(this). prop("checked", false);
			$('[name='+this.name+']').not(this).prop("checked", true);
			alert($(op).find("RESULT").text());
			return;
		}
		if($(this).val() == "No")
			{
			$(this).closest('.col-md-3').next().find('button').show();
			}
		else{
			$(this).closest('.col-md-3').next().find('button').hide()
		}
	});
	 $(document).on("click",".RaiseQry",function() {
		var UniqTyp = $(this).attr("data-uniq-type");
		var op=""
		if(UniqTyp=="CAM Checklist")
		{
		  op=UI_getdata("File Checklist",$("#PrcsID").val(),$($(this).closest('.tbodytr').find('.tbodytrtd')[5]).text(),"","","LSW_SCHKQURYRAISED");
		}
		else if(UniqTyp=="CAM Checklist Fields"){
			op=UI_getdata("File Checklist",$("#PrcsID").val(),$(this).closest('.DYNROW').find("[name=FICL_CUSID]").val()+'-'+$(this).closest('.form-row').find('.md-form:first label').text(),"","","LSW_SCHKQURYRAISED");
		}
		else if(UniqTyp=="CAM Checklist FieldsA"){
			op=UI_getdata("File Checklist",$("#PrcsID").val(),$("#UCLH_CUSID").val()+'-'+$(this).closest('.form-row').find('.md-form:first label').text(),"","","LSW_SCHKQURYRAISED");
		}
		if($(op).find("RESULT").text()=="ALLOW"){
		var secid = $(this).attr("data-quey-sec");
		if(secid == "")
			{
			alert("Incorrect Section ID")
			return
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
			$('.RAISE').find("#MNGQ_DESC").val($($(this).closest('.tbodytr').find('.tbodytrtd')[0]).text());
	       
           //Attach clear	start	   
            $('.RAISE').find("#MNGQ_ATTCHURLIUPLOAD").show();
            $('.RAISE').find('.rounded1').hide();
            $('.RAISE').find("#MNGQ_ATTCHURLI").val('');
            $('.RAISE').find("input[name=datafile]").attr('disabled',false);
            $('.RAISE').find("input[name=datafile]").attr('display','block');
  
            $('.RAISE').find('.FIDU').find('.name').text('Click Here to Upload')
			//attach Clear end
			
			//push data to hidden
			$("#MNGQ_SECTNID").val(secid);
			
			//$('#MNGQ_TYP').find("option[value='"+$(xml).find("TYP").text()+ "']").attr("selected","selected");
			$('#MNGQ_TYP').val($(xml).find("TYP").text());
			$("#MNGQ_QURYNAME").val("CAM Checklist");
			
			if(UniqTyp=="CAM Checklist")
			{
			  $("#MNGQ_UNIQID").val($($(this).closest('.tbodytr').find('.tbodytrtd')[5]).text())
			}
			else if(UniqTyp=="CAM Checklist Fields"){
				$("#MNGQ_UNIQID").val($(this).closest('.DYNROW').find("[name=FICL_CUSID]").val()+'-'+$(this).closest('.form-row').find('.md-form:first label').text());
			}
			else if(UniqTyp=="CAM Checklist FieldsA"){
				$("#MNGQ_UNIQID").val($("#UCLH_CUSID").val()+'-'+$(this).closest('.form-row').find('.md-form:first label').text());
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


