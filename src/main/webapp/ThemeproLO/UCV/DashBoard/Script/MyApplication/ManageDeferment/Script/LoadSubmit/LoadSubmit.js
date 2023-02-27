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
		
		
		$("#LCR").click(function () {
		
		//$(document).on('click', '#LCR', function () {
			
			$("#Popup").click();
			
			//$(location).attr('href',window.location.origin + "/TPLSW/Applcnt?PrcsID=74537_CustomerOnBoarding_CusOnBoard&ActvID=145505_74537_CustomerOnBoarding_CusOnBoard_CustomerMaker&PrMs9=FormPageTab1&PrMs10=FormMainTab1");
			
		});
		
		$("#InitWF").click(function () {
			
			var Prifix="LBSI"
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
		 
		});
		
		
		  $(document).on("click",".MANAGEDEFR",function() {
		
//$(".InitWF1").click(function () {
			
$(location).attr('href',window.location.origin + "/TPLSW/DefrMnt?PrcsID="+$($(this).parent().parent().find('td')[5]).text()+"&ActvID="+$($(this).parent().parent().find('td')[6]).text()+"&PrMs4="+$($(this).parent().parent().find('td')[2]).text()+"&PrMs5=DEFR&PrMs9=&PrMs10=FormMainTab1");         	
			 
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
				 
				 
			var rowLn =	 $("#Table3").find(".tbodytr").length;
				 
			var result = "<DATA>"
			
				var ApplNo = "";
				var st="";
				
			for(i=0;i<rowLn;i++)
				{
				
				result = result + "<row>"
				
				st= $($($("#Table3").find(".tbodytr")[0]).find(".tbodytrtd")[6]).find('input[type=checkbox]').prop("checked");				
				ApplNo= $($($("#Table3").find(".tbodytr")[0]).find(".tbodytrtd")[0]).text();
				 
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
				 
				 
					var rowLn =	 $("#Table3").find(".tbodytr").length;
						 
					var result = "<DATA>"
					
						var ApplNo = "";
						var st="";
						
					for(i=0;i<rowLn;i++)
						{
						
						result = result + "<row>"
						
						st= $($($("#Table3").find(".tbodytr")[0]).find(".tbodytrtd")[6]).find('input[type=checkbox]').prop("checked");				
						ApplNo= $($($("#Table3").find(".tbodytr")[0]).find(".tbodytrtd")[0]).text();
						 
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
						 
							result = result + "</row>"
						 
						}
						 
					result = result + "</DATA>"
					
					
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
 
	oTable = $('#Table3').DataTable();
	$('#SearchTable3').keyup(function(){
	      oTable.search($(this).val()).draw() ;
	})	
});


function GridTrg(evnt)
{
	$(".OPSCRTO").hide();
	$(".QDTO").hide(); 
	
	/*if ($(evnt).attr("value") == "GENERAL")
		{
		
		FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLICATIONDTLS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3',$(evnt).attr("value"));
		
		}
	else if ($(evnt).attr("value") == "BRANCHOPS")
		{
		
		FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLICATIONOPSDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$(evnt).attr("value"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||',$(evnt).attr("value"));
		
		}
	else if ($(evnt).attr("value") == "DISPATCHOPS")
	{
		$(".OPSCRTO").show();
	FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLDISPOPSDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$(evnt).attr("value"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||',$(evnt).attr("value"));
	
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
	FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLOPSQD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$(evnt).attr("value"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||',$(evnt).attr("value"));
	
	}
	else if ($(evnt).attr("value") == "OPSQDFOR")
	{
	
	FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLOPSQDFOR',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$(evnt).attr("value"),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||',$(evnt).attr("value"));
	
	}*/
	/*FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLNGETMANGDEFR',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','MANAGEDEFR');*/
	FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLICATIONDTLS1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$('#DMY4').val().split("|")[0],MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','MANAGEDEFR');
	 
}

 


