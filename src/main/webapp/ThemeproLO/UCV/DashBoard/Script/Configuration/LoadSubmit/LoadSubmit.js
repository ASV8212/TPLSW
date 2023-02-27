$(document).ready(function () {

	var IOP = window.location.origin + '/jw';

	var URL = window.location.href;
	
	URL = URL.split("TPLSW")[1].replace('/','');
	
	
	$(".ULHdrLS").find("[href='"+URL+"']").removeClass("Btxt16Inactive");
	$(".ULHdrLS").find("[href='"+URL+"']").addClass("Btxt16");
	
	$("#FSN").click();
	
	
	//LoadDashBord();
	CheckCusType();
	GETDROPDOWNVAL("Load");
	getBranch();
	$(".fixed-action-btn").show();
	
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
			$("#LBSI_BRANCH").empty();
			$("#LBSI_BRANCH").val('');			
			$("#LBSI_BRANCH").material_select();
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
	            	 var output=UI_getdata(OldProcessID,ProcessID,lonType,PRIMLONID,BranchID+'|'+Branchname,'LSW_SGETExistApplicantDet');
	            	 }
	            	$(location).attr('href',window.location.origin + "/TPLSW/Applcnt?PrcsID="+res.split("~")[1]+"&ActvID="+res.split("~")[2]+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1");         	
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
			/*var op = UI_getdata($($(this).parent().parent().find('td')[10]).text(),$($(this).parent().parent().find('td')[11]).text(),"","","","LSW_SCHKMULTIACESS")
			if($(op).find("RESULT").text()=="SUCCESS"){*/
			$(location).attr('href',window.location.origin + "/TPLSW/"+$($(this).parent().parent().find('td')[9]).text()+"?PrcsID="+$($(this).parent().parent().find('td')[6]).text()+"&ActvID="+$($(this).parent().parent().find('td')[7]).text()+"&PrMs9=&PrMs10=&PrMs7="+$($(this).parent().parent().find('td')[8]).text());
			/*}
			else{
				alert($(op).find("RESULT").text());
				$(".FormPageTab li.active").click();
			}*/
			 
		});
		$(document).on("click",".InitWF2",function() {
				
			//$(".InitWF1").click(function () {
						
			$(location).attr('href',window.location.origin + "/TPLSW/"+$($(this).parent().parent().find('td')[5]).text()+"?PrcsID="+$($(this).parent().parent().find('td')[2]).text()+"&ActvID="+$($(this).parent().parent().find('td')[3]).text()+"&PrMs9=FormPageTab1&PrMs10=FormMainTab8");
						 
					});
		
		  $(document).on("click",".InitWFview",function() {
				
			//$(".InitWF1").click(function () {
						
			$(location).attr('href',window.location.origin + "/TPLSW/Applcnt?PrcsID="+$($(this).parent().parent().find('td')[10]).text()+"&ActvID="+$($(this).parent().parent().find('td')[11]).text()+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1&PrMs1=View");
						 
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
		   

			 $(document).on("click",".PODSave",function() {
				 
				 
				 var Param1 = $($(this).closest('.tbodytr').find('.tbodytrtd')[1]).find('input[type=text]').val();
				 var Param2 = $($(this).closest('.tbodytr').find('.tbodytrtd')[2]).find('input[type=text]').val();
				 var Param3 = $($(this).closest('.tbodytr').find('.tbodytrtd')[3]).find('input[type=text]').val();
				 var Param4 = $($(this).closest('.tbodytr').find('.tbodytrtd')[0]).text();
				 
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
			

			
			
			var output=UI_getdata(result,"","","","",'LSW_SOPSFILEUPDT');
				 
				 if ($(output).find("RESULT").text() == "Success")
					 {
					 alert("Files Sent to Credit Ops");
					 $(".FormPageTab").find("li.active").trigger("click");
					 }
				 else
					 {
					 alert("File Update Failed");
					 }
				 
				 
				
				 
				});
			 
		
			 $(document).on("click",".QDTO",function() {
					var tbl = $("#Table3").find('.tbody');
					var rowLn =	 $(tbl).find('tr').find('input[type=checkbox]:checked').length;
						 
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
					var output=UI_getdata(result,"","","","",'LSW_SQDUPDT');
						 
						 if ($(output).find("RESULT").text() == "Success")
							 {
							 alert("Files Initiated for Quick Disbursement ");
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
	
	if ($(evnt).attr("value") == "UserMasterAssigned")
	{
	
	FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLMSTRPENDNG',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$(evnt).attr("value"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||',$(evnt).attr("value"));
	
	}
	else if ($(evnt).attr("value") == "RoleMasterAssigned")
	{
	FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLMSTRPENDNG',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$(evnt).attr("value"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7',$(evnt).attr("value"));
	
	}
	else if ($(evnt).attr("value") == "BranchMasterAssigned")
	{
	
	FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLMSTRPENDNG',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$(evnt).attr("value"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||',$(evnt).attr("value"));
	
	}
	else if ($(evnt).attr("value") == "VendorEmpanelmentAssigned")
	{
		FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLMSTRPENDNG',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$(evnt).attr("value"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||',$(evnt).attr("value"));
	} 
	
	 
}

 


