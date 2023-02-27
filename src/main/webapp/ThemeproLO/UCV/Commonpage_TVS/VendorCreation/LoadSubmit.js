$(document).ready(function () {
	
	

    var Br = UI_getdata("","","","","","LSW_SGETBRLIST");
	
	
	var activityname = GetActivityName();
	var BTN =UI_getdata(activityname,"Vendor Empanelment","","","","LSW_SMSTRBTNHNDLR");
	if($(BTN).find("Result").text() != "")
	{
	for(var i=0;i<$(BTN).find("Result").text().split(',').length;i++)
	{
		$("#"+$(BTN).find("Result").text().split(',')[i]).show();
	}
	}

	$("#VECR_PRIMBRANCH").html("")
	$("#VECR_PRIMBRANCH").append($(Br).find("RESULT").html());

  var Channel=UI_getdata("","","","","","LSW_SGETCHANNEL")
    $("#VECR_CHANNELTYP").append($(Channel).find("RESULT").html());	
	 $("#VECR_ADDTIONALROLE").append($(Channel).find("RESULT").html());	
	
	
	FormDataFromDB("LSW_TVENDORCREATION","VECR_","VECRDBfields", "");
	
	
	
	$("#HIDDENCOL").val('4,5,6')
	//$("#HIDDENCOL").val('')
	 FncallDocChkLst(this,'Table3',{spname:'LSW_SGETVENDOCUUPLOAD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'VENDDOCUPLOAD');

    $("#HIDDENCOL").val('')
	 FncallDocChkLst(this,'Table4',{spname:'LSW_SGETVENADDROLE',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||2,3'+$("#HIDDENCOL").val(),'VENDADDROLE');

	 if($("#VECR_UNIQID").val()=="")
	  {
       $("#VECR_UNIQID").val($("#PrcsID").val())
      }
	  
	  
	
	  
	  
	  $("#VEBN_UNIQID").attr("value",$("#VECR_UNIQID").val())
	  
	  
	LoadMultiData("",$("#PrcsID").val(),"","VENDORBANK","VEBNDBfields","LSW_SVENDORBANKDETAILS");
	
	//$("#BTNRCUGRD").click();

      $('.FormPageTab').hide()
	  
     $("#BTNVDRBRMAPMAINGRD").click();
	 
	 
	 oTable = $('#TableVdrBr').DataTable();
		$('#SearchTableVdrBr').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})
	  
	 
	 $("#BTNDIRBRMAPMAINGRD").click();
     $("#BTNUSRBRGRD").click();
	
oTable = $('#Table5').DataTable();
		$('#SearchTable5').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})
	  
	  if($("#PrMs3").val()=="EDIT")
	  {
	//  $("#VECR_VENDORCODE").attr("disabled",true)
	   $("#VECR_USERNAME").attr("disabled",true)
	
      }
	  
  if($("#PrMs3").val()=="NEW")
  {
   $("#VECR_STATUS").val('Active')
   $("#VECR_STATUS").attr("disabled",true)
     var Today=ToDay();
   $("#VECR_ACTIVEDATE").val(Today)
   $("#VECR_ACTIVEDATE").attr("disabled",true)
   $("#VECR_ACTIVEDATE").next().addClass('active');
    $('.actdt').hide()
	
	$("#Reject").hide()
  }
  
	  CHKSTATUS();
	  RCUSTATUS();
	  
	  BLOCKLISTSTATUS();
	  CHKBLOCKLIST();
	  REASONCHANGE();
	  
	 if($("#VECR_VENDORCODE").val()!="")
	  {
     $("#VECR_VENDORCODE").attr("disabled",true)
      }
	  
	  
	  

	$(document).on("click", "#VendorBrModalSmt" , function() {
		
		var data1=popTableModPageGrid1.$('input:checkbox:checked').map( function () {
		return $(this).attr('title');
			}).get().join();
			
		var op = UI_getdata(data1,"Branch",'<Data><row><PRCSID>'+$("#PrcsID").val()+'</PRCSID><ACTVTYID>'+$("#ActvID").val()+'</ACTVTYID><USRID>'+$("#VCBM_ROLEID").val()+'</USRID><USRNAME>'+$("#VCBM_ROLENAME").val()+'</USRNAME><UNIQID>'+$("#VCBM_UNIQID").val()+'</UNIQID></row></Data>',"","","LSW_SPUSHDATATOVNDTEMPGTBL")
		if($(op).find("RESULT").text()=="SUCCESS"){	
	       $("#BTNDIRBRMAPMAINGRD").click();
		   FncallMultiPagingGrd(this,'TableVdrBr',{spname:'LSW_SGETFINLVDRBRGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#BRMAP').val(),MnuId:$('#CATEGORY').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,4,5,6,7','VDRBRMAPMAIN');
			$("#VendorBrModalClose").click();
		
	
	oTable = $('#TableVdrBr').DataTable();
		$('#SearchTableVdrBr').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	
		}
		else{
			alert($(op).find("RESULT").text());
			return;
		}
	});			
	  
	  
 $(document).on("click", ".DELETEVENBANK" , function() {

       if(confirm('Delete Bank Details') == true)
	 		{
	   $(this).closest('.DYNROW').remove()	
		var k= $('.VENDORBANK').find('.DYNROW').length
		for(i=0;i<k;i++)
			{
			
		    var	j=i+1
          $($('.VENDORBANK').find('.DYNROW')[i]).find('#PROPTXTHDR').text('Bank Details '+j)
			}
			}

})	  
	

if(activityname=="Checker")
	 {
		 
		 DSVLBLALLWS(); 
		 $(".mdb-select").attr('disabled',true);
	 }	
	 
	 
	
  $('#AddKYCDoc').on('click', function() {
            
			
			if($(this).text() == "Confirm")
		    {
			var MndtryChk = ChkMandatoryFlds("KYCDMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields");
			return false;
			}
		   }
			
			if ($("#KYCD_DOCATTACHMENT").val() == "")
			{	
		        alert("Upload the documents");
			return false;
			}
			var TableID = "";
			
	
			TableID = "Table3"
			
			
		var rowCnt = $("#"+TableID).find("tbody tr").length;
		var ColumnCnt = $($("#"+TableID).find('thead tr')).find('th').length;
		
		var HTML="";
		
		var atLeastOneChecked=false;
		var checkcount = "";
		if (TableID == "Table2")
			{
		$('[name=CBSI_ProofAs]').each(function() {
	         if ($(this).prop("checked") == true) {
	             atLeastOneChecked = true;
	             
	             checkcount = $('[name=CBSI_ProofAs]').length;
	         }
	         
	     });
			}
		else
			{
			atLeastOneChecked = true;
			checkcount = 1;
			}
		
		if (atLeastOneChecked == true)
			{
		
		for (var j=0;j<checkcount;j++) 
			{

			if ($($('[name=CBSI_ProofAs]')[j]).prop('checked') == true || TableID == "Table3")
				{
			
				var table = $("#"+TableID).DataTable();
				 
				var rowNode = table
				.row.add( [ '', '', '','','', '', '','','','', '', '',''] )
				    .draw()
				    .node();
				

		
				var NewrowCnt = $("#"+TableID).find("tbody tr").length;
				
				HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);
				$($(HTML).find('td')[0]).find('img').show()
				//$($(HTML).find('td')[1]).text($("#KYCD_DOCNAME").val());
				//$($(HTML).find('td')[2]).text($("#KYCD_DOCID").val());
				$($(HTML).find('td')[1]).find("[type=text]").val($("#KYCD_DOCTYPE").val());
				$($(HTML).find('td')[2]).find("[type=text]").val($("#KYCD_DOCNAME").val());
				$($(HTML).find('td')[5]).find("[type=text]").val($("#DOCVERSION").val());
				$($(HTML).find('td')[6]).find("[type=text]").val($("#VECR_UNIQID").val());
				
				
				$(HTML).addClass("tbodytr");
				$(HTML).find("td").addClass("tbodytrtd");

			if ($("#KYCD_DOCATTACHMENT").val() != "")
			{				

				$($(HTML).find('td')[3]).find("[type=text]").val($("#KYCD_DOCATTACHMENT").val());
         	}
				

				$('#'+TableID+' .Gridmdb-select').material_select("destroy");    
				
				$('#'+TableID+' .Gridmdb-select').material_select();               

				// Calendar

				var $input = $(document).find('.Griddatepicker').pickadate({
				    //editable: 'true',
					format: 'dd/mm/yyyy',
					selectYears: 150,
					selectMonths: true
					
				})
				.on("change", function() {
				  
					
					   $(this).prev().val($(this).val());
					   $(this).prev().focus();
				   
				});

		
			}
			}
		$("#ADDKYCDOCCLOSE").click();
	
			}
		else
			{
			alert("Select Any One Proof");
			}
		});
		
	





 $('#AddROLE').on('click', function() {
            
			
			
			
			if ($("#VECR_ADDTIONALROLE").val() == "")
			{	
		        alert("Fill the Additional ROLE");
			return false;
			}
			var TableID = "";
			
	
			TableID = "Table4"
			
			
		var rowCnt = $("#"+TableID).find("tbody tr").length;
		var ColumnCnt = $($("#"+TableID).find('thead tr')).find('th').length;
		
		var HTML="";
		
		var atLeastOneChecked=false;
		var checkcount = "";
		if (TableID == "Table2")
			{
		$('[name=CBSI_ProofAs]').each(function() {
	         if ($(this).prop("checked") == true) {
	             atLeastOneChecked = true;
	             
	             checkcount = $('[name=CBSI_ProofAs]').length;
	         }
	         
	     });
			}
		else
			{
			atLeastOneChecked = true;
			checkcount = 1;
			}
		
		if (atLeastOneChecked == true)
			{
		
		for (var j=0;j<checkcount;j++) 
			{

			if ($($('[name=CBSI_ProofAs]')[j]).prop('checked') == true || TableID == "Table4")
				{
			
				var table = $("#"+TableID).DataTable();
				 
				var rowNode = table
				.row.add( [ '', '', '', '', '','','', '', '', ''] )
				    .draw()
				    .node();
				

		
				var NewrowCnt = $("#"+TableID).find("tbody tr").length;
				
				HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);
				$($(HTML).find('td')[0]).find('img').show()
				//$($(HTML).find('td')[1]).text($("#KYCD_DOCNAME").val());
				//$($(HTML).find('td')[2]).text($("#KYCD_DOCID").val());
				$($(HTML).find('td')[1]).find("[type=text]").val($("#VECR_ADDTIONALROLE").val());
				$($(HTML).find('td')[3]).find("[type=text]").val($("#VECR_UNIQID").val());
			
				$(HTML).addClass("tbodytr");
				$(HTML).find("td").addClass("tbodytrtd");

			
				

				$('#'+TableID+' .Gridmdb-select').material_select("destroy");    
				
				$('#'+TableID+' .Gridmdb-select').material_select();               

				// Calendar

				var $input = $(document).find('.Griddatepicker').pickadate({
				    //editable: 'true',
					format: 'dd/mm/yyyy',
					selectYears: 150,
					selectMonths: true
					
				})
				.on("change", function() {
				  
					
					   $(this).prev().val($(this).val());
					   $(this).prev().focus();
				   
				});

		
			}
			}
		$("#ADDROLECLOSE").click();
	
			}
		else
			{
			alert("Select Any One Proof");
			}
		});	 
	 
	$('.FormSave').on('click', function() {
		var ChkFlow = UI_getdata($("#ActvID").val(),"","","","","LSW_SCHKACTCMPLT")
		if($(ChkFlow).find('RESULT').text() != "ALLOW"){
			alert($(ChkFlow).find('RESULT').text());
			$(location).attr('href',window.location.origin + "/TPLSW/VendorMST")
		}

		if($(this).text() == "Submit" || $(this).text() == "Approve")
			{

			var MndtryChk = ChkMandatoryFlds("VECRMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
				
		  var html = $('.VENDORBANK')
		
		  var  MndtryChk1 = ChkMandatoryFlds_V1("BANKMndtry",html);
          
          if (MndtryChk1 == "Mandatory") 
          {
              alert("Fill the Mandatory Fields");
              return false;
          }
          
				
				
				var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKVDRBRROLEMNDTRY")
				
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
						
						
						
			var VALIDATIONCHK=UI_getdata('Vendor Creation',$("#VECR_UNIQID").val(),$("#VECR_PRCSID").val(),"","","LSW_SCHKFILEINFLOW")
			var RESULT=$(VALIDATIONCHK).find('RESULT').text();
			if(RESULT!="SUCCESS")
			{
			 alert(RESULT)
             return false;	
			}
						
		var BanlDetailsVal=$("#VEBN_ACCTNO1").val()+'|'+$("#VEBN_IFSC1").val()+'|'+$("#VECR_USERNAME").val()
		 var xml=UI_getdata(BanlDetailsVal,$("#VECR_USERNAME").val(),$("#VECR_PAN").val(),$("#VECR_OFFICEGST").val(),$("#VECR_MOBILE").val(),"LSW_SCHKVENDORMOBIL")
					
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
			
		
		
		
		

     
    		
			
		if($(this).text() == "Approve" && $("#VECR_USERNAME").val()=="")
			{
			var xml = UI_getdata($("#VECR_CHANNELTYP").val(),"","Yes","","","Sam_sGetVndSeqID");
			
			$("#VECR_USERNAME").val($(xml).find("Val1").text());
			
			$("#VECR_BROKERCODE").val($(xml).find("Val1").text());
			
			var ID=$(xml).find("Val1").text()
			
             alert('Vendor ID - '+ID)
			
		    }
		var VECR_BANKDETAILS = TxtGridsubmitdata_V2("VENDORBANK","VEBN_","VECR_","VEBNDBfields"); 
		AssignGridXmltoField("VECR_BANKDETAILS", VECR_BANKDETAILS) 
		
		 var VECR_DOCUMENTS = TxtGridsubmitdata_SV1("Table3","VEDO_","VECR_");
          AssignGridXmltoField("VECR_DOCUMENTS", VECR_DOCUMENTS);		
			
		 var VECR_ADDROLEDET = TxtGridsubmitdata_SV1("Table4","VEAD_","VECR_");
          AssignGridXmltoField("VECR_ADDROLEDET", VECR_ADDROLEDET);		
				
			
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#VECR_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
			
			if (CHKresult == "Fail")
			{
			  alert("Submission Failed");
			   return false;			
			}
			
			var XML = "<Data><row><PRCSID>"+$("#PrcsID").val()+"</PRCSID><ACTIVITYID>"+$("#ActvID").val()+"</ACTIVITYID><MENU>M0004</MENU><USRID>"+$("#LogUsr").val()+"</USRID><UNIQID>"+$("#VECR_UNIQID").val()+"</UNIQID><ButtonName>"+$(this).text()+"</ButtonName></row></Data>";
		var WFOPT =UI_getdata(XML,$("#LogUsr").val(),"","","","LSW_SUSRMANGMNTWFPCKR");
		var pattern = /var_/;
		var exists = pattern.test($(WFOPT).find("WFVAR").text());
		if(exists) {
		   WFComplete_V1 ($("#ActvID").val(),$(WFOPT).find("WFVAR").text(),"","VendorMST");
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
					
				var op = UI_getdata(data1,"Employment",'<Data><row><PRCSID>'+$("#PrcsID").val()+'</PRCSID><ACTVTYID>'+$("#ActvID").val()+'</ACTVTYID><USRID>'+$("#VEUR_ROLEID").val()+'</USRID><USRNAME>'+$("#VEUR_ROLENAME").val()+'</USRNAME><UNIQID>'+$("#VEUR_UNIQID").val()+'</UNIQID></row></Data>',"","","LSW_SPUSHDATATOVNDTEMPGTBL")
				if($(op).find("RESULT").text()=="SUCCESS"){
					FncallMultiPagingGrd(this,'Table5',{spname:'LSW_SGETFINLVENDORBRGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','VENDORBRANHMAPMAIN');
					$("#UserModalClose").click();
					oTable = $('#Table5').DataTable();
		$('#SearchTable5').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	
				}
				else{
					alert($(op).find("RESULT").text());
					return;
				}
			});
				
});
