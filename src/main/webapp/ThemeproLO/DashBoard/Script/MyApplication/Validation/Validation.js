$(document).ready(function () {

	var IOP = window.location.origin + '/jw';

	var URL = window.location.href;
	
	URL = URL.split("TPLSW")[1].replace('/','');
	
	
	$(".ULHdrLS").find("[href='"+URL+"']").removeClass("Btxt16Inactive");
	$(".ULHdrLS").find("[href='"+URL+"']").addClass("Btxt16");
	
	$($(".ULHdrLS").find('li')[3]).hide()
	
	$("#FSN").click();
	
	FindConstDropDown();
	//LoadDashBord();
	CheckCusType();
	GETDROPDOWNVAL("Load");
	getBranch();
	getPrdVal();
	 
	$(".fixed-action-btn").show();
	
	if($("#DMY1").val()=="FI"){
		$("#GridCategory").addClass('mdb-select');
		$("#GridCategory").parent().find('span').show();
	}
	
	$(".FltMnu").click(function () {


		 $(location).attr('href',$(this).attr("name"));
		

	    });
	
	
	
	
	
		$(".InbxRdct").click(function () {

		
		var IOP1 = window.location.origin;
		
		var Mnuid=$(this).attr('name').split(',')[0];
		var FormColor=$(this).attr('name').split(',')[1];
		var FormName=$(this).attr('name').split(',')[2];
		var FormAction=$(this).attr('name').split(',')[3];
		var PrMs1=$(this).attr('name').split(',')[4];
		FormName=FormName+' - '+PrMs1
		
		
		 var RedirectURL = IOP1+"/TPLSW/GetNextNavAction?MnuID="+Mnuid+"&Action=View&FormColor="+FormColor+"&FormName="+FormName+"&FormAction="+FormAction+"&PrMs1="+PrMs1;
		$(location).attr('href',RedirectURL);

		
	    });
		
		
		
		$(".MnuDshBrd").click(function () {

		
		var IOP1 = window.location.origin;
		
		var Mnuid="30j";
		var FormColor=$(this).find('i').attr('name');
		var FormName=$(this).find('.data').find('p').text();
		var FormAction="All";
		var PrcsID="Limit";
		var PrMs1="All"
		FormName=FormName///+' - '+PrMs1
		
		 var RedirectURL = IOP1+"/TPLSW/GetNextNavAction?MnuID="+Mnuid+"&Action=View&FormColor="+FormColor+"&FormName="+FormName+"&FormAction="+FormAction+"&PrcsID="+PrcsID+"&PrMs1="+PrMs1;
		$(location).attr('href',RedirectURL);

		
	    });
		
	

	if($("#DMY2").val()=="") 
				{
				 $(".FileInitiation").remove()
				}

	
			
		$("#LCR").click(function () {
		
		//$(document).on('click', '#LCR', function () {
			
			$('input[name="LBSI_CUSTYPE"]').prop('checked', false);
			$('input[name="LBSI_CUSTYPE"]').attr("disabled",false)
			$("#LBSI_BRANCH").empty();
			$("#LBSI_BRANCH").val('');			
			$("#LBSI_BRANCH").material_select();
			
			
			//$("#LBSI_PRODUCT").val('');			
			//$("#LBSI_PRODUCT").material_select();
			
			
			$("#LBSI_LONTYPE").val('');
			$("#LBSI_LONTYPE").material_select();
			$("#LBSI_SUBLONTYPE").val('');
			$("#LBSI_SUBLONTYPE").material_select();
			$("#LBSI_PRIMLONID").val('');
			$("#LBSI_SOURCBY").val('');
			$("#LBSI_SOURCBY").material_select();
			$("#LBSI_CONECTNAME").val('');
			$("#LBSI_CONECTNAME").material_select();
			$("#LBSI_CONSTITUTION").val('');
			$("#LBSI_CONSTITUTION").material_select();
			
			$("#LBSI_VERTICAL").val($("#VERTICAL").val());
			$("#LBSI_VERTICAL").next().addClass('active');
		//	LoadDashBord();
	        CheckCusType();
	        GETDROPDOWNVAL("Load");
	        getBranch();
			CheckSource();
			$("#Popup").click();
			//$(location).attr('href',window.location.origin + "/TPLSW/Applcnt?PrcsID=74537_CustomerOnBoarding_CusOnBoard&ActvID=145505_74537_CustomerOnBoarding_CusOnBoard_CustomerMaker&PrMs9=FormPageTab1&PrMs10=FormMainTab1");
			
		});
		
		
		
		$("#InitWF").click(function () {
			
			var Prifix="LBSI"
	            var MndtryChk = ChkMandatoryFlds("LBSIMndtry");
				if(MndtryChk == "Mandatory")
					{
					alert("Fill the Mandatory Fields");
					return false;
					}
			var ApplicationNo=$("#LBSI_PRIMLONID").val()
	    	var LoanType=$("#LBSI_LONTYPE").val()
			//var output=UI_getdata(ApplicationNo,LoanType,'','','','LSW_SCHECKEXISTCUSSTATUS');
		//	 var Result=$(output).find('RESULT').text();
		//	if(Result=="OK")
		// {*/
			var xml = submitdata(Prifix+"DBfields");
			//var xml = submitdata("DBfields");
			
		 $.ajax({
	           
	            url: "/TPLSW/WFINIT",
	            //dataType: "json",
	            data: {XML : xml,Prvnt : $("#Prvnt").val()},
	            async: true,	      
	            type: "POST",
	            success: function(res) {
	            		            	
	            if	(res.split("~")[0] == "Workflow Initiated")
	            	{
	            	//alert("Loan Initiated");
	            	 var ProcessID = res.split("~")[1]
	                 var ActivityID = res.split("~")[2]
					 
					 var Vertical=$("#LBSI_VERTICAL").val();
	                 var Page="Applcnt";
					 if(Vertical=="UCV" || Vertical=="UCV Eco")
					 {
						Page="UCVApplcnt"
					 }
					 
	        		var output=UI_getdata(ProcessID,ActivityID,xml,'','','LSW_sInsLoanBaseInfo');
	            	// var OldProcessID=$("#OLDPRCSID").val();
	            	 if($("#LBSI_LONTYPE").val()=="Registered Mortgage"||$("#LBSI_LONTYPE").val()=="Re-Punch")
	            	 { 
	            		 var lonType=$("#LBSI_LONTYPE").val()
	            		 var OldProcessID=$("#OLDPRCSID").val(); 
	            		 var PRIMLONID=$("#LBSI_PRIMLONID").val();
	            		  var BranchID=$("#LBSI_BRANCH").val();
	            	     var Branchname=$("#LBSI_BRID").val();
	            		 var ProcessID = res.split("~")[1]
	            	 var output=UI_getdata(OldProcessID,ProcessID,lonType,PRIMLONID,BranchID+'|'+Branchname+'|'+$("#LogUsr").val(),'LSW_SGETExistApplicantDet');
	            	 }
	            	$(location).attr('href',window.location.origin + "/TPLSW/"+Page+"?PrcsID="+res.split("~")[1]+"&ActvID="+res.split("~")[2]+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1");         	
	            	}
	            else
	            	{
	            	alert("Loan Initiation Failed");
	            	}
	                //console.log(res)
	            },
	            error: function(res) {
	            	
	            	alert("Loan Initiation Failed");
		            }
	        });
			/* }
			else
				{
				  alert(Result);
				  return false;
				}*/
		});
		
		
		  $(document).on("click",".InitWF1",function() {
		
//$(".InitWF1").click(function () {
	             var Vertical=$("#VERTICAL").val();
	                  var Page="Applcnt";
					  
					 if(Vertical=="UCV" || Vertical=="UCV Eco")
					 {
						Page="UCVApplcnt"
					 }
			
			var op = UI_getdata($($(this).parent().parent().find('td')[10]).text(),$($(this).parent().parent().find('td')[11]).text(),"","","","LSW_SCHKMULTIACESS")
			if($(op).find("RESULT").text()=="SUCCESS"){
			$(location).attr('href',window.location.origin + "/TPLSW/"+Page+"?PrcsID="+$($(this).parent().parent().find('td')[10]).text()+"&ActvID="+$($(this).parent().parent().find('td')[11]).text()+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1");
			}
			else{
				alert($(op).find("RESULT").text());
				$(".FormPageTab li.active").click();
			}
			 
		});
		
		
		 $(document).on("click",".InitWF3",function() {
			 var Vertical=$("#VERTICAL").val();
			 var Page="Applcnt";
					  
					 if(Vertical=="UCV" || Vertical=="UCV Eco")
					 {
						Page="UCVApplcnt"
					 }
		    
			  if (confirm("This case ("+$($(this).parent().parent().find('td')[0]).text()+") is punched in TAB, Do you want to process this case in the web? If you click ok you can use this case only in the web, and you can't process this case in TAB going forward Are you ok?") == true) {
				  var op = UI_getdata($($(this).parent().parent().find('td')[10]).text(),$($(this).parent().parent().find('td')[11]).text(),"TABCase","","","LSW_SCHKMULTIACESS")
			      if($(op).find("RESULT").text()=="SUCCESS"){
			$(location).attr('href',window.location.origin + "/TPLSW/"+Page+"?PrcsID="+$($(this).parent().parent().find('td')[10]).text()+"&ActvID="+$($(this).parent().parent().find('td')[11]).text()+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1");
			}
			else{
				alert($(op).find("RESULT").text());
				$(".FormPageTab li.active").click();
			}
			  }
		});
		
		
		$(document).on("click",".InitWF2",function() {
			var Vertical=$("#VERTICAL").val();
			    var Page="Disbrsmnt";
					  
					 if(Vertical=="UCV" || Vertical=="UCV Eco")
					 {
						Page="UCVDisbrsmnt"
					 }
					 
			var ActvIDQD = $($(this).parent().parent().find('td')[8]).text()
                  /*********INIT QD IF REQ STRT************/
			if(ActvIDQD == "")
			{
				var CHKQDINITREQ=UI_getdata($($(this).parent().parent().find('td')[7]).text(),'','','','','LSW_SCHKQDINIT');
				if($(CHKQDINITREQ).find('CHKEXST').text() == "NOTEXISTS"){
					var WFACTVINIT = WFActvInit('',$($(this).parent().parent().find('td')[7]).text()+"|OPSQD|Vendor||ADMIN","LSW_SWFACTVINITCALL");
					
					if(WFACTVINIT != "Success")
					{
						alert("Contact IT, Process ID Not Captured.");
						return;
					}
					else{
						var CHKQDINITREQ1 =UI_getdata($($(this).parent().parent().find('td')[7]).text(),'','','','','LSW_SCHKQDINIT');
						if($(CHKQDINITREQ1).find('CHKEXST').text() == "EXISTS"){
							ActvIDQD = $(CHKQDINITREQ1).find('ACTIVITYID').text()
						}
						else{
							alert("Issue Occured Contact IT.");
							return;
						}
					}
				}
				else if($(CHKQDINITREQ).find('CHKEXST').text() == "EXISTS"){
					ActvIDQD = $(CHKQDINITREQ).find('ACTIVITYID').text()
				}
				else{
					alert("Issue Occured Contact IT.");
					return;
				}
			}
			
			/*********INIT QD IF REQ END************/
				
			//$(".InitWF1").click(function () {
						
			//$(location).attr('href',window.location.origin + "/TPLSW/Disbrsmnt?PrcsID="+$($(this).parent().parent().find('td')[7]).text()+"&ActvID="+$($(this).parent().parent().find('td')[8]).text()+"&PrMs9=FormPageTab1&PrMs10=FormMainTab8");
			$(location).attr('href',window.location.origin + "/TPLSW/"+Page+"?PrcsID="+$($(this).parent().parent().find('td')[7]).text()+"&ActvID="+ActvIDQD+"&PrMs9=FormPageTab1&PrMs10=FormMainTab8");
						 
					});
		
		  $(document).on("click",".InitWFview",function() {
				
				var Vertical=$("#VERTICAL").val();
				
				     var Page="Applcnt";
					  
					 if(Vertical=="UCV" || Vertical=="UCV Eco")
					 {
						Page="UCVApplcnt"
					 }
			//$(".InitWF1").click(function () {
						
			$(location).attr('href',window.location.origin + "/TPLSW/"+Page+"?PrcsID="+$($(this).parent().parent().find('td')[10]).text()+"&ActvID="+$($(this).parent().parent().find('td')[11]).text()+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1&PrMs1=View");
						 
					});
		
		
		
		  $(document).on("click",".VendorPG",function() {
				
				//$(".InitWF1").click(function () {
							
	$(location).attr('href',window.location.origin + "/TPLSW/"
			+$($(this).parent().parent().find('td')[13]).text()+"?PrcsID="
			+$($(this).parent().parent().find('td')[10]).text()
			+"&ActvID="+$($(this).parent().parent().find('td')[11]).text()
						+"&PrMs6="+$($(this).parent().parent().find('td')[14]).text()
						+"&PrMs5="+$($(this).parent().parent().find('td')[12]).text()
						+"&PrMs9=&PrMs10=FormMainTab1");         	
							 
						});
			$(document).on("click",".VendorPG1",function() {
				
				//$(".InitWF1").click(function () {
							
	$(location).attr('href',window.location.origin + "/TPLSW/"
			+$($(this).parent().parent().parent().find('td')[13]).text()+"?PrcsID="
			+$($(this).parent().parent().parent().find('td')[10]).text()
			+"&ActvID="+$($(this).parent().parent().parent().find('td')[11]).text()
						+"&PrMs6="+$($(this).parent().parent().parent().find('td')[14]).text()
						+"&PrMs5="+$($(this).parent().parent().parent().find('td')[12]).text()
						+"&PrMs9=&PrMs10=FormMainTab1&PrMs1=View");         	
							 
						});	
$(document).on("click",".VendorPG2",function() {
	var PrMst8 = 'AdditionalURL|Appl|No Add';
	$(location).attr('href',encodeURI(window.location.origin + "/TPLSW/"
			+$($(this).parent().parent().find('td')[13]).text()+"?PrcsID="
			+$($(this).parent().parent().find('td')[10]).text()
			+"&ActvID="+$($(this).parent().parent().find('td')[11]).text()
						+"&PrMs6="+$($(this).parent().parent().find('td')[14]).text()
						+"&PrMs5="+$($(this).parent().parent().find('td')[12]).text()
						+"&PrMs8="+PrMst8+"&PrMs9=FormPageTab1&PrMs10=FormMainTab9"));     
	});								
		  
		/*$('#LBSI_LONTYPE').on('change', function() {
				
				$("#ExistLoanTypeCollapse").removeClass("show");
				$("#RegMortLoanTypeCollapse").removeClass("show");
				
		  		if($("#LBSI_LONTYPE").val()=="Existing Loans"){
		  			$("#ExistLoanTypeCollapse").addClass("show");
		  		}
		  		else if($("#LBSI_LONTYPE").val()=="Registered Mortgage"){
		  			$("#RegMortLoanTypeCollapse").addClass("show");
		  		}
			});
			*/
			$('#LBSI_SOURCBY').on('change', function() {
				// if($('#Indvdl').prop('checked')){
					 if($("#LBSI_SOURCBY").val()=="Connector"){
				  		$("#ConnectorSourceCollapse").addClass("show");
				  	}
				 // 	else{
				  //		$("#ConnectorSourceCollapse").removeClass("show");
				  //	}
				 //}
			});
			
			$("input[name='LBSI_CUSTYPE']").change(function(){
			    if($('#NonIndvdl').prop('checked')){
			    	$("#ConnectorSourceCollapse").removeClass("show");
			    	$("#NonIndiCollapse").addClass("show");
			    	//$("#SourceNameCollapse").addClass("show");
			    }
			    else{
			    	$("#NonIndiCollapse").removeClass("show");
			    	$("#SourceNameCollapse").removeClass("show");
			    	if($("#LBSI_SOURCBY").val()=="Connector"){
				  		$("#ConnectorSourceCollapse").addClass("show");
			    	}
			    }
				
				
				
				
			});
		   
           $(document).on("click","#Search",function() {
		       if($(".FormMainTab1 li.active").text()=="View")
			   {
		          FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLICATIONDTLSQ',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$('#DMY4').val().split("|")[0]+'|'+$('#FromDate').val()+'|'+$('#ToDate').val()+'|'+$('#ApplNo').val()+'|'+$('#Name').val()+'|'+$('#AggrNo').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','GENERALQUEUE');
			   }
			   else if($(".FormMainTab1 li.active").text()=="Disbursed")
			   {
				   FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLICATIONDTLSOPS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'Loan'+'|'+$('#FromDate').val()+'|'+$('#ToDate').val()+'|'+$('#ApplNo').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,8,9','OPS');
			   }
	        });
		
		
			 $(document).on("click",".PODSave",function() {
				 
				 
				 var Param1 = $(this).parent().parent().prev().prev().prev().find('input[type=text]').val();
				 var Param2 = $(this).parent().parent().prev().prev().find('input[type=text]').val();
				 var Param3 = $(this).parent().parent().prev().find('input[type=text]').val();
				 var Param4 = $(this).parent().parent().prev().prev().prev().prev().text();
				 
				 var output=UI_getdata(Param1,Param2,Param3,Param4,'','LSW_SPODUPDT');
				 
				 if ($(output).find("RESULT").text() == "Success")
					 {
					 alert("POD Details Saved");
					 $(".FormPageTab").find("li.active").trigger("click");
					 }
				 else
					 {
					 alert("POD Details Update Failed");
					 }
				 
				 
				
				 
				});
			
			  $(document).on("click",".OPSCRTO",function() {
				 
				 
				 var tbl = $("#Table3").find('.tbody');
				var rowLn =	 $("#Table3").find('.tbody').find('tr').length;
				 
			var result = "<DATA>"
			
				var ApplNo = "";
				var st="";
				var Trnch="";
				
			for(i=0;i<rowLn;i++)
				{
				
				result = result + "<row>"
				
				st= $($($("#Table3").find('.tbody').find('tr')[i]).find('td')[6]).find('input[type=checkbox]').prop("checked");				
				ApplNo= $($($("#Table3").find('.tbody').find('tr')[i]).find('td')[0]).text();
				Trnch= $($($("#Table3").find('.tbody').find('tr')[i]).find('td')[7]).text();
				 
				if (st == true)
					{
					st="Yes";
					}
				else
					{
					st="";
					}
				
				result = result + "<APPLNO>"+ApplNo+"</APPLNO>"
				result = result + "<Status>"+st+"</Status>"
				result = result + "<Tranche>"+Trnch+"</Tranche>"
				 
					result = result + "</row>"
				 
				}
				 
			result = result + "</DATA>"
			

			
			
			var output=UI_getdata(result,$("#LogUsr").val(),"","","",'LSW_SOPSFILEUPDT');
				 
				 if ($(output).find("RESULT").text() == "Success")
					 {
					 alert("Files Sent to Credit Ops");
					 $(".FormPageTab").find("li.active").trigger("click");
					 }
					 else if($(output).find("RESULT").text() != ""){
						 alert($(output).find("RESULT").text());
						$(".FormPageTab").find("li.active").trigger("click");
					 }
				 else
					 {
					 alert("File Update Failed");
					 }
				 
				 
				
				 
				});
			 
		
			 $(document).on("click",".QDTO",function() {
					var tbl = $("#Table3").find('.tbody');
					var rowLn =	 $(tbl).find('tr').find('input[type=checkbox]').length;
						 
					var result = "<DATA>"
					
						var ApplNo = "";
						var st="";
						var TrnchNo = "";
						
					for(i=0;i<rowLn;i++)
						{
						
						result = result + "<row>"
						
						st= $($($(tbl).find('tr')[i]).find('td')[6]).find('input[type=checkbox]').prop("checked");				
						ApplNo= $($($(tbl).find('tr')[i]).find('td')[0]).text();
						TrnchNo= $($($(tbl).find('tr')[i]).find('td')[7]).text();
						 
						if (st == true)
							{
							st="Yes";
							}
						else
							{
							st="";
							}
						
						result = result + "<APPLNO>"+ApplNo+"</APPLNO>"
						result = result + "<Status>"+st+"</Status>"
						result = result + "<Tranche>"+TrnchNo+"</Tranche>"
						
						 
							result = result + "</row>"
						 
						}
						 
					result = result + "</DATA>"
					
					/**/
					var output=UI_getdata(result,$("#LogUsr").val(),"","","",'LSW_SQDUPDT');
						 
						 if ($(output).find("RESULT").text() == "Success")
							 {
							 alert("Files Initiated for Quick Disbursement ");
							 $(".FormPageTab").find("li.active").trigger("click");
							 }
							 else if($(output).find("RESULT").text() != ""){
								 alert($(output).find("RESULT").text());
								 $(".FormPageTab").find("li.active").trigger("click");
							 }
						 else
							 {
							 alert("File Update Failed");
							 }
						 
						});	
			 
			 
	if ($(".FormPageTab li.active").attr("value") == "DISPATCHOPS")
		{
	$(".OPSCRTO").show();
		}
	else if ($(".FormPageTab li.active").attr("value") == "OPSQD")
	{
$(".QDTO").show();
	}
 
	/*oTable = $('#Table3').DataTable();
	$('#SearchTable3').keyup(function(){
	      oTable.search($(this).val()).draw() ;
	})	*/
});


function GridTrg(evnt)
{
	$(".OPSCRTO").hide();
	$(".QDTO").hide(); 
	$("#ApplNo").val('');
	$("#ApplNo").next().removeClass('active');
	var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
today = dd+'/'+mm+'/'+yyyy;
	
	$("#ToDate").val(today)
	
	addMonths()
	
	if ($(evnt).attr("value") == "GENERAL")
	{	
	 FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLICATIONDTLS2',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$('#DMY4').val().split("|")[0],MnuId:$('#DMY1').val()+'|'+$('#GridCategory').val()+'|'+$("#VERTICAL").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3',$(evnt).attr("value"));
	}
	if ($(evnt).attr("value") == "GENERALQUEUE")
	{
	
	FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLICATIONDTLSQ',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$('#DMY4').val().split("|")[0]+'|'+$('#FromDate').val()+'|'+$('#ToDate').val()+'|'+$('#ApplNo').val(),MnuId:$("#VERTICAL").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3',$(evnt).attr("value"));
	
	}
	else if ($(evnt).attr("value") == "GENERAL TAB CASE")
	{
		
	FncallMyAppl(this,'Table3',{spname:'LSW_SASSIGNDTABCASE',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$('#DMY4').val().split("|")[0],MnuId:$('#DMY1').val()+'|'+$('#GridCategory').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3',$(evnt).attr("value"));
		
	}
	else if ($(evnt).attr("value") == "BRANCHOPS")
		{
		
		FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLICATIONOPSDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$(evnt).attr("value"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||',$(evnt).attr("value"));
		
		}
	else if ($(evnt).attr("value") == "DISPATCHOPS")
	{
		$(".OPSCRTO").show();
	FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLDISPOPSDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$(evnt).attr("value"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7',$(evnt).attr("value"));
	
	}
	else if ($(evnt).attr("value") == "CREDITOPSQ")
	{
	
	FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLCROPSQU',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$(evnt).attr("value"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||',$(evnt).attr("value"));
	
	}
	else if ($(evnt).attr("value") == "CREDITOPSQ")
	{
	
	FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLCROPSQU',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$(evnt).attr("value"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||',$(evnt).attr("value"));
	
	}
	else if ($(evnt).attr("value") == "OPSQD")
	{
		$(".QDTO").show(); 
	FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLOPSQD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$(evnt).attr("value"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7',$(evnt).attr("value"));
	
	}
	else if ($(evnt).attr("value") == "OPSQDFOR")
	{
	
	FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLOPSQDFOR',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$(evnt).attr("value"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||',$(evnt).attr("value"));
	
	}
	 
  else if ($(evnt).attr("value") == "OPS")
	{
		//$(".QDTO").show(); 
		FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLICATIONDTLSOPS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'Loan'+'|'+$('#FromDate').val()+'|'+$('#ToDate').val()+'|'+$('#ApplNo').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,8,9',$(evnt).attr("value"));
	}
	else if ($(evnt).attr("value") == "VENDOR")
	{
		FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLICATIONDTLS2_VENDR',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'Loan',MnuId:$('#DMY1').val()+'|'+$('#GridCategory').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||',$(evnt).attr("value"));
	}
}

$("#MSInsHIt").click(function () {

   var RTNVAL="";	
   var param1="91802_HomeEqutity_process";
   var param2="C1104971";
   var param3="PRP101492|PRP101492VAL1|View|Property";
   var param4="";
   var param5="";
   var param6="";
   var param7="5";
   var spname1="LSW_SGETTOKENGENDATA";
   var spname2="LSW_SMSINSGETPREMIMDATA";
		var OP = "Success"
	//var PrimFld=$(this).closest('.DYNROW').find("[name=AMPI_PRMINCLDGST]").attr('id')
	// var PropFlg=$(this).closest('.DYNROW').find("[name=AMPI_PROFLAG]").attr('id');
			$.ajax({
			  url: "/TPLSW/MSInsrncePrmeium",
			  data: { param1: param1,param2: param2,param3: param3,param4: param4,param5: param5,param6: param6,param7: param7,spname1: spname1,spname2: spname2,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
           async: true,
			      dataType: "text",
			      type: 'POST',
			      success: function OnSuccess_submit(xml2) {
			      
			      }
			      })
		
})
 


