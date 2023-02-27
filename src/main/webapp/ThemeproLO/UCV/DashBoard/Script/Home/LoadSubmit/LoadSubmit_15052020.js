$(document).ready(function () {

	var IOP = window.location.origin + '/jw';

	$("#FSN").click();
	
	var URL = window.location.href;
	
	URL = URL.split("TPLSW")[1].replace('/','');
	
	
	$(".ULHdrLS").find("[href='"+URL+"']").removeClass("Btxt16Inactive");
	$(".ULHdrLS").find("[href='"+URL+"']").addClass("Btxt16");
	
	
	
	LoadDashBord();
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
			LoadDashBord();
	        CheckCusType();
	        GETDROPDOWNVAL("Load");
	        getBranch();
			CheckSource();
			$("#Popup").click();
			//$(location).attr('href',window.location.origin + "/TPLSW/Applcnt?PrcsID=74537_CustomerOnBoarding_CusOnBoard&ActvID=145505_74537_CustomerOnBoarding_CusOnBoard_CustomerMaker&PrMs9=FormPageTab1&PrMs10=FormMainTab1");
			
		});
		
		$(".ManageDeferment").click(function () {
			var IOP1 = window.location.origin;
			var RedirectURL = IOP1+"/TPLSW/ManageDeferment";
			$(location).attr('href',RedirectURL);
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
			var output=UI_getdata(ApplicationNo,LoanType,'','','','LSW_SCHECKEXISTCUSSTATUS');
			 var Result=$(output).find('RESULT').text();
			if(Result=="OK")
			 {
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
	            		 
	            		 var ProcessID = res.split("~")[1]
	            	 var output=UI_getdata(OldProcessID,ProcessID,lonType,PRIMLONID,'','LSW_SGETExistApplicantDet');
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
			 }
			else
				{
				  alert(Result);
				  return false;
				}
		});
		
$("#InitWF1").click(function () {
			
$(location).attr('href',window.location.origin + "/TPLSW/Applcnt?PrcsID=82546_Loan_process&ActvID=155914_82546_Loan_process_LonInit&PrMs9=FormPageTab1&PrMs10=FormMainTab1");         	
			 
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
		   
			if($("#DMY2").val()=="") 
				{
				 $(".FileInitiation").remove()
				}

 
});
