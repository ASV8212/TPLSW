$(document).ready(function () {
	
	

	FormDataFromDB("LSW_TROLECREATION","ROCR_","ROCRDBfields", "");
	
	var activityname = GetActivityName();
	var BTN =UI_getdata(activityname,"Role Master","","","","LSW_SMSTRBTNHNDLR");
	if($(BTN).find("Result").text() != "")
	{
	for(var i=0;i<$(BTN).find("Result").text().split(',').length;i++)
	{
		$("#"+$(BTN).find("Result").text().split(',')[i]).show();
	}
	}
	
      $('.FormPageTab').hide()
	  
	  
	     $("#BTNDIRBRMAPMAINGRD").click();
    $("#BTNUSRBRGRD").click();
	
	  if($("#ROCR_UNIQID").val()=="")
	  {
     $("#ROCR_UNIQID").val($("#PrcsID").val())
     
	  }
	  
	  
	 oTable = $('#Table5').DataTable();
		$('#SearchTable5').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	
		
		
	if(activityname=="Checker")
	 {
		 
		 DSVLBLALLWS(); 
		 $(".mdb-select").attr('disabled',true);
	 }	

	$('.FormSave').on('click', function() {
		

		if($(this).text() == "Submit")
			{

			var MndtryChk = ChkMandatoryFlds("ROCRMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
			}
		
	
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#ROCR_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
			
			if (CHKresult == "Fail")
			{
			  alert("Submission Failed");
			   return false;			
			}
			
			var XML = "<Data><row><PRCSID>"+$("#PrcsID").val()+"</PRCSID><ACTIVITYID>"+$("#ActvID").val()+"</ACTIVITYID><MENU>M0002</MENU><USRID>"+$("#LogUsr").val()+"</USRID><UNIQID>"+$("#ROCR_UNIQID").val()+"</UNIQID><ButtonName>"+$(this).text()+"</ButtonName></row></Data>";
		var WFOPT =UI_getdata(XML,"","","","","LSW_SUSRMANGMNTWFPCKR");
		var pattern = /var_/;
		var exists = pattern.test($(WFOPT).find("WFVAR").text());
		if(exists) {
		   WFComplete_V1 ($("#ActvID").val(),$(WFOPT).find("WFVAR").text(),"","RoleMST");
		}
		else{
			alert($(WFOPT).find("WFVAR").text());
		}

		
		});
	
	
		$(document).on("click", "#UserModalSmt" , function() {
		
		var data1=popTableModPageGrid1.$('input:checkbox:checked').map( function () {
		return $(this).attr('title');
			}).get().join();
			
		var op = UI_getdata(data1,"Branch",'<Data><row><PRCSID>'+$("#PrcsID").val()+'</PRCSID><ACTVTYID>'+$("#ActvID").val()+'</ACTVTYID><USRID>'+$("#ROUS_ROLEID").val()+'</USRID><USRNAME>'+$("#ROUS_ROLENAME").val()+'</USRNAME><UNIQID>'+$("#ROUS_UNIQID").val()+'</UNIQID></row></Data>',"","","LSW_SPUSHDATATOROLLTEMPGTBL")
		if($(op).find("RESULT").text()=="SUCCESS"){
			
			
			 FncallMultiPagingGrd(this,'Table5',{spname:'LSW_SGETFINLROLEUSER',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','ROLEUSERMAPMAIN');
			$("#UserModalClose").click();
		}
		else{
			alert($(op).find("RESULT").text());
			return;
		}
	});
		
		
	
});
