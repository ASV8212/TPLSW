$(document).ready(function () {
	
	
	$(".FormMainTab1").hide();
	
	var LoanType = UI_getdata("Vertical","","","","","LSW_SGETPRODVAL");

 	 $("#URCR_MODULE").html("")
 	 $("#URCR_MODULE").append($(LoanType).find("RESULT").html());
	 $("#URCR_MODULE").material_select();
	
	FormDataFromDB("LSW_TUSERCREATION","URCR_","URCRDBfields", "");
	
	var activityname = GetActivityName();
	var BTN =UI_getdata(activityname,"User Master","","","","LSW_SMSTRBTNHNDLR");
	if($(BTN).find("Result").text() != "")
	{
	for(var i=0;i<$(BTN).find("Result").text().split(',').length;i++)
	{
		$("#"+$(BTN).find("Result").text().split(',')[i]).show();
	}
	}
	//checkType()
	$("#BTNUSRROLGRD").click();
	$("#BTNUSRBRGRD").click();
	$("#BTNDIRBRMAPMAINGRD").click();
	$("#BTNDIRROLEMAPMAINGRD").click();
	//$("#BTNRPTUSRID").click();
	
	GetUserCategory('Load');
	
	if($("#URCR_UNIQID").val()=="")
	{
		$("#URCR_UNIQID").val($("#PrcsID").val())
	}
	
	if($("#PrMs3").val()=="EDIT")
	{
		$("#URCR_NAME").attr('disabled',true);
	}
	
	
	  if($("#PrMs3").val()=="NEW")
	  {
       $("#URCR_ACTIVE").val('Active')
       $("#URCR_ACTIVE").attr("disabled",true)
	  }
    
	
	
		
		oTable1 = $('#Table5').DataTable();
		$('#SearchTable5').keyup(function(){
		      oTable1.search($(this).val()).draw() ;
		})	
		
		oTable2 = $('#Table6').DataTable();
		$('#SearchTable6').keyup(function(){
		      oTable2.search($(this).val()).draw() ;
		})	
	


 var CATAGORY=$("#URCR_BRMAPPINGCA").val()
	 var CATAGORYVal=CATAGORY.split(",");
	 var row = $(CATAGORYVal).length;
	 for (i=0;i<row;i++)
	 {
		 if(CATAGORYVal[i] !="")
		 {
	   $("#URCR_CATEGORY option:contains("+CATAGORYVal[i]+")").attr("selected","selected")
		 }
	 }
	 
	
	 
	 
	 if(activityname=="Checker")
	 {
		 
		 DSVLBLALLWS(); 
		 $(".mdb-select").attr('disabled',true);
	 }
		
	$(".FormSave").click(function () {
		var ChkFlow = UI_getdata($("#ActvID").val(),"","","","","LSW_SCHKACTCMPLT")
		
		if($(ChkFlow).find('RESULT').text() != "ALLOW"){
			alert($(ChkFlow).find('RESULT').text());
			$(location).attr('href',window.location.origin + "/TPLSW/DirUserMST")
		}
		
           
					
				
		//var ID=$("#id").val()
		//var output=UI_getdata(ApplicationNo,LoanType,'','','','LSW_SCHECKEXISTCUSSTATUS');
	// var Result=$(output).find('RESULT').text();
	//	if(Result=="OK")
	// {*/
		//var XML = submitdata("URCRDBfields");
		
		if($(this).text()=="Approve"||$(this).text() == "Submit" )
		{
			
		 var MndtryChk = ChkMandatoryFlds("URCRMndtry");
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
				
				var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKBRROLEMNDTRY")
				
					var Primary=$(xml).find('RESULT').text()
					
					if(Primary != 'SUCCESS')
						{
						  
						  var Alert2=''
								var nameArr = Primary.split(',')
						         k=nameArr.length
								 for(i=0;i<k;i++)
								 {
									var Alert1= nameArr[i]
									var Alert2 = Alert2 +'\r\n'+Alert1
								 }
						  
						  alert(Alert2);
						   return false;
						   
						   
						}	
			
		var VALIDATIONCHK=UI_getdata('User Creation',$("#URCR_UNIQID").val(),$("#URCR_PRCSID").val(),"","","LSW_SCHKFILEINFLOW")
			var RESULT=$(VALIDATIONCHK).find('RESULT').text();
			if(RESULT!="SUCCESS")
			{
				alert(RESULT)
             return false;	
			}
		}
		
		if($(this).text()=="Approve" && $("#URCR_NAME").val()=="")
		{
			
			   var xml=UI_getdata("USERCRE","","Yes",$("#URCR_FSTNAME").val(),"","Sam_sGetUsrIdSeqID")
			   $("#URCR_NAME").val($(xml).find('Val1').text())
			   $("#URCR_NAME").next().addClass('active');
			   $("#URCR_ID").val($(xml).find('Val1').text())
			   
			   var ID=$(xml).find('Val1').text()
			
             alert('User ID - '+ID)
			
		}
		
		if($(this).text()=="Approve"||$(this).text() == "Submit" )
		{
			 var xml=UI_getdata($("#URCR_ID").val(),$("#URCR_MOBILE").val(),$("#PrMs3").val(),"","","LSW_SCHKUSRDUPDATA")
					
			 var Collection=$(xml).find('RESULT').text()
					
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
		}
		
		var CHKresult=FormDataToDB("LSW_TUSERCREATION","URCR",$("#URCR_PRCSID").val()+"|"+"|")
			
			if (CHKresult == "Fail")
			{
			  alert("Submission Failed");
			   return false;			
			}
		var XML = "<Data><row><PRCSID>"+$("#PrcsID").val()+"</PRCSID><ACTIVITYID>"+$("#ActvID").val()+"</ACTIVITYID><MENU>M0001</MENU><USRID>"+$("#LogUsr").val()+"</USRID><UNIQID>"+$("#URCR_UNIQID").val()+"</UNIQID><ButtonName>"+$(this).text()+"</ButtonName></row></Data>";
		var WFOPT =UI_getdata(XML,"","","","","LSW_SUSRMANGMNTWFPCKR");
		var pattern = /var_/;
		var exists = pattern.test($(WFOPT).find("WFVAR").text());
		if(exists) {
		   WFComplete_V1 ($("#ActvID").val(),$(WFOPT).find("WFVAR").text(),"","DirUserMST");
		}
		else{
			alert($(WFOPT).find("WFVAR").text());
		}
		
		
		//var SP="LSW_SDIRUSERSUBMIT";

		/*var xml=UI_getdata(ID,XML,"","","","LSW_SDIRUSERSUBMIT")
		
		if($(xml).find('Result').text()=="Success")
		  {
			alert("User Creation Successfully"); 		            	
        	return;
		  }
		else
		 {
			alert("User Creation Failed"); 		            	
        	return;
		 }
	$.ajax({
            url: "/TPLSW/DIRINS",
            //dataType: "json",
            data: {SP : SP,ID : ID,XML : XML,Prvnt : $("#Prvnt").val()},
            async: true,	      
            type: "POST",
            success: function(res) {
            	alert("Form Saved Successfully"); 		            	
            	return;
            },
            error: function(res) {
            	alert("Form Submission Failed"); 
            	return;
	            }
        });*/
	});
	
	$(document).on("click", "#UserModalSmt" , function() {
		
		var data1=popTableModPageGrid1.$('input:checkbox:checked').map( function () {
		return $(this).attr('title');
			}).get().join();
			
		var op = UI_getdata(data1,"Branch",'<Data><row><PRCSID>'+$("#PrcsID").val()+'</PRCSID><ACTVTYID>'+$("#ActvID").val()+'</ACTVTYID><USRID>'+$("#UCBM_ROLEID").val()+'</USRID><USRNAME>'+$("#UCBM_ROLENAME").val()+'</USRNAME><UNIQID>'+$("#UCBM_UNIQID").val()+'</UNIQID></row></Data>',"","","LSW_SPUSHDATATOTEMPGTBL")
		if($(op).find("RESULT").text()=="SUCCESS"){	
	       $("#BTNDIRBRMAPMAINGRD").click();
		   //FncallMultiPagingGrd(this,'Table5',{spname:'LSW_SBRMAPLOADDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#BRMAP').val(),MnuId:$('#URCR_BRMAPPINGCA').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,4,5,6,7','DIRBRMAPMAIN');
			$("#UserModalClose").click();
		
		}
		else{
			alert($(op).find("RESULT").text());
			return;
		}
		oTable1 = $('#Table5').DataTable();
		$('#SearchTable5').keyup(function(){
		      oTable1.search($(this).val()).draw() ;
		})
	});
	$(document).on("click", "#RoleModalSmt" , function() {
		
		var data1=popTableModPageGrid1.$('input:checkbox:checked').map( function () {
		return $(this).attr('title');
			}).get().join();
			
		var op = UI_getdata(data1,"Role",'<Data><row><PRCSID>'+$("#PrcsID").val()+'</PRCSID><ACTVTYID>'+$("#ActvID").val()+'</ACTVTYID><USRID>'+$("#URCM_ROLEID").val()+'</USRID><USRNAME>'+$("#URCM_ROLENAME").val()+'</USRNAME><UNIQID>'+$("#URCM_UNIQID").val()+'</UNIQID></row></Data>',"","","LSW_SPUSHDATATOTEMPGTBL")
		if($(op).find("RESULT").text()=="SUCCESS"){
			$("#BTNDIRROLEMAPMAINGRD").click();
			$("#RoleModalClose").click();
		}
		else{
			alert($(op).find("RESULT").text());
			return;
		}
		
		oTable2 = $('#Table6').DataTable();
		$('#SearchTable6').keyup(function(){
		      oTable2.search($(this).val()).draw() ;
		})	
	});
	
	$(document).on("click", "#RptUsrModalSmt" , function() {
		
		var RptUsrId=$($("input[name='URCM_RPTID']:checked").closest('tbody tr').find('td')[0]).find('input[type=text]').val()
		var RptId=$($("input[name='URCM_RPTID']:checked").closest('tbody tr').find('td')[1]).find('input[type=text]').val()
		$("#URCR_RPTUSRID").val(RptUsrId)
		$("#URCR_RPTID").val(RptId)
		$("#URCR_RPTID").next().addClass('active');
		$("#RptIDModalClose").click();

		var xml=UI_getdata($("#PrcsID").val(),RptUsrId,"","","","LSW_SRPTIDREBRMAP")
		$("#BTNDIRBRMAPMAINGRD").click();
	});
	
});

