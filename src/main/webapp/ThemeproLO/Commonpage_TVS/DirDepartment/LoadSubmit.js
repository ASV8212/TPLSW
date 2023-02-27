$(document).ready(function () {
	
	

	FormDataFromDB("LSW_TBRANCHCREATION","BRCR_","BRCRDBfields", "");
	
	var activityname = GetActivityName();
	var BTN =UI_getdata(activityname,"Branch Master","","","","LSW_SMSTRBTNHNDLR");
	if($(BTN).find("Result").text() != "")
	{
	for(var i=0;i<$(BTN).find("Result").text().split(',').length;i++)
	{
		$("#"+$(BTN).find("Result").text().split(',')[i]).show();
	}
	}
	
	var Branch=UI_getdata("","","","","","LSW_SGETBRANCHDROPDOWN")
	
	
	 $("#BRCR_ZONE").append($(Branch).find("ZONE").html());	
    $("#BRCR_REGION").append($(Branch).find("REGION").html());	
    $("#BRCR_AREA").append($(Branch).find("RESULT").html());	
	$("#BRCR_PROFITCEN").append($(Branch).find("PROFIT").html());	
	
	    if($("#PrMs3").val()=="NEW")
	  {
       $("#BRCR_STATUS").val('Active')
       $("#BRCR_STATUS").attr("disabled",true)
	   $('.actdt').hide()
		  
		   
		  var Today=ToDay();
   $("#BRCR_ACTIVEDT").val(Today)
   $("#BRCR_ACTIVEDT").attr("disabled",true)
   $("#BRCR_ACTIVEDT").next().addClass('active');
   
   $("#BRCR_FLAG").val('New')
	  }
	  
	  
	  
	  if($("#BRCR_UNIQID").val()=="")
	  {
       $("#BRCR_UNIQID").val($("#PrcsID").val())

	  }
    
    //$("#BTNUSRBRGRD").click();
    $("#BTNVERTICALMAPGRD").click();
    $("#BTNDBRVERTICALGRD").click();
    
    CHKSTATUS()
    
	oTable = $('#Table6').DataTable();
		$('#SearchTable6').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	
		
		
	
	
      $('.FormPageTab').hide()

     if($("#PrMs3").val()=="EDIT")
	  {
	  $("#BRCR_BRANCHID").attr("disabled",true)
	  $("#BRCR_DESCRIPTION").attr("disabled",true)
	  
	 //  $("#BRCR_BRANCHNAME").attr("disabled",true)
      }
	  
	  if($("#BRCR_BRANCHID").val()!="")
	  {
       $("#BRCR_BRANCHID").attr("disabled",true)
      }
	  
	  
	  if($("#BRCR_DESCRIPTION").val()!="")
	  {
       $("#BRCR_DESCRIPTION").attr("disabled",true)
      }
	  
	  
	  
	  if(activityname=="Checker")
	 {
		 
		 DSVLBLALLWS(); 
		 $(".mdb-select").attr('disabled',true);
	 }
	 
	 $(document).on("click", "#VertiModalSmt" , function() {
		
		var data1=popTableModPageGrid1.$('input:checkbox:checked').map( function () {
		return $(this).attr('title');
			}).get().join();
			
		var op = UI_getdata(data1,"Vertical",'<Data><row><PRCSID>'+$("#PrcsID").val()+'</PRCSID><ACTVTYID>'+$("#ActvID").val()+'</ACTVTYID><USRID>'+$("#BRID").val()+'</USRID><USRNAME>'+$("#BRNAME").val()+'</USRNAME><UNIQID>'+$("#PrcsID").val()+'</UNIQID></row></Data>',"","","LSW_SPUSHDATATOTEMPGTBL")
		if($(op).find("RESULT").text()=="SUCCESS"){	
	       $("#BTNDBRVERTICALGRD").click();
		   //FncallMultiPagingGrd(this,'Table5',{spname:'LSW_SBRMAPLOADDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#BRMAP').val(),MnuId:$('#URCR_BRMAPPINGCA').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,4,5,6,7','DIRBRMAPMAIN');
			$("#VertiModalClose").click();
		
		}
		else{
			alert($(op).find("RESULT").text());
			return;
		}
		oTable1 = $('#Table6').DataTable();
		$('#SearchTable6').keyup(function(){
		      oTable1.search($(this).val()).draw() ;
		})
	});
	 
	  
	$('.FormSave').on('click', function() {
		var ChkFlow = UI_getdata($("#ActvID").val(),"","","","","LSW_SCHKACTCMPLT")
		if($(ChkFlow).find('RESULT').text() != "ALLOW"){
			alert($(ChkFlow).find('RESULT').text());
			$(location).attr('href',window.location.origin + "/TPLSW/DirDepartmentMST")
		}

		if($(this).text() == "Approve"||$(this).text() == "Submit")
			{

			var MndtryChk = ChkMandatoryFlds("BRCRMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
				
				
			var VALIDATIONCHK=UI_getdata('Branch Creation',$("#BRCR_UNIQID").val(),$("#BRCR_PRCSID").val(),"","","LSW_SCHKFILEINFLOW")
			var RESULT=$(VALIDATIONCHK).find('RESULT').text();
			if(RESULT!="SUCCESS")
			{
                alert(RESULT)
                return false;		
			}		

			}
		
            
			
			
		if($(this).text() == "Approve" && $("#BRCR_BRANCHID").val()=="")
			{
				
            var BRANCHID = UI_getdata("BRANCHID","","Yes","","","Sam_sGetBRANCHSeqID");
			
			$("#BRCR_BRANCHID").val($(BRANCHID).find("Val1").text());
			
			var ID=$(BRANCHID).find("Val1").text()
			
             alert('Branch ID - '+ID)
		    }
		if($(this).text() == "Approve"||$(this).text() == "Submit")
		{
			
			
			 var xml=UI_getdata($("#BRCR_BRANCHID").val(),$("#BRCR_MOBILE").val(),$("#PrMs3").val(),$("#BRCR_FLAG").val(),$("#BRCR_DESCRIPTION").val(),"LSW_SCHKBRDUPDATA")
					
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
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			var BRVERTI = TxtGridsubmitdata_SV1("Table6","BVRG_","BRCR_");
			AssignGridXmltoField("BRCR_BRVERTI", BRVERTI);

			var CHKresult=FormDataToDB(tbl,prfx,$("#BRCR_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
			
			if (CHKresult == "Fail")
			{
			  alert("Submission Failed");
			   return false;			
			}
			var XML = "<Data><row><PRCSID>"+$("#PrcsID").val()+"</PRCSID><ACTIVITYID>"+$("#ActvID").val()+"</ACTIVITYID><MENU>M0003</MENU><USRID>"+$("#LogUsr").val()+"</USRID><UNIQID>"+$("#BRCR_UNIQID").val()+"</UNIQID><ButtonName>"+$(this).text()+"</ButtonName></row></Data>";
		var WFOPT =UI_getdata(XML,"","","","","LSW_SUSRMANGMNTWFPCKR");
		var pattern = /var_/;
		var exists = pattern.test($(WFOPT).find("WFVAR").text());
		if(exists) {
			
			if($(this).text() == "Approve")
            {
             var LMSBRANCREATION = UI_getdata($("#BRCR_BRANCHID").val(),"",$("#BRCR_BRANCHNAME").val(),$("#BRCR_DESCRIPTION").val(),$("#BRCR_STATE").val(),"LSW_SBRANCHCREALMS");				
			}
			
		   WFComplete_V1 ($("#ActvID").val(),$(WFOPT).find("WFVAR").text(),"","DirDepartmentMST");
		}
		else{
			alert($(WFOPT).find("WFVAR").text());
		}
		});
	
	
	$(".EMMAP").click(function()
			{
		$("#VENEMP").click();
	
			})	
			
			
			$(document).on("click", "#UserModalSmt" , function() {
		
		var data1=popTableModPageGrid1.$('input:checkbox:checked').map( function () {
		return $(this).attr('title');
			}).get().join();
			
		var op = UI_getdata(data1,"Branch",'<Data><row><PRCSID>'+$("#PrcsID").val()+'</PRCSID><ACTVTYID>'+$("#ActvID").val()+'</ACTVTYID><USRID>'+$("#BRUS_USERID").val()+'</USRID><USRNAME>'+$("#BRUS_USERNAME").val()+'</USRNAME><UNIQID>'+$("#BRUS_UNIQID").val()+'</UNIQID></row></Data>',"","","LSW_SPUSHDATATOBRTEMPGTBL")
		if($(op).find("RESULT").text()=="SUCCESS"){	
	       //$("#BTNDIRBRMAPMAINGRD").click();
		   FncallMultiPagingGrd(this,'Table5',{spname:'LSW_SGETFINLBRANUSERGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5,6','DIRBRUSERMAPMAIN');
			$("#UserModalClose").click();
		
		}
		else{
			alert($(op).find("RESULT").text());
			return;
		}
		
		
		
	});
			
	
});
