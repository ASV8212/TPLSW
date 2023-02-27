$(document).ready(function () {
	FncallDocChkLst(this,'Table2',{spname:'LSW_SGETLEADDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$("#LogUsr").val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,10,11','MNGLEAD');

	$(".OTCSTATUS1").on('click', function() {
		$("#Save").click();
		$("#BRID").val($($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('LEAD_BRID')").index()]).text());
		$("#LEDID").val($($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('LEAD ID')").index()]).text());
		$("#CUSNAME").val($($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('CUSTOMER NAME')").index()]).text());
		$("#lNAMT").val($($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('LOAN AMOUNT')").index()]).find('input').val());
		$("#MOBNO").val($($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('MOBILE NUMBER')").index()]).text());
    	$("#LCR").click();
    });
	
	FindConstDropDown()
	
	$(document).on("click", ".FormSave", function() {
		var GetXMLFrmTbl = GetGrdXML("Table2");
		var op = UI_getdata(GetXMLFrmTbl,"","","","","LSW_SLEADUPDT");
		if($(op).find("RESULT").text()=="SUCCESS"){
			toastr.success("File save successfully")
		}
		else{
			toastr.error("File submission failed");
			return;
		}
		
	});
	$("#LCR").click(function () {
		
		//$(document).on('click', '#LCR', function () {
			
			$('input[name="LBSI_CUSTYPE"]').prop('checked', false);
			 $('input[name="LBSI_CUSTYPE"]').attr("disabled",false)	
	         $('.PROIIDROP').find('.select-dropdown').attr('disabled',false)
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
			$("#LBSI_LEADID").val('');
			$("#LBSI_CUSNAME").val('');
			$("#LBSI_MOBNO").val('');
			$("#LBSI_LNAMT").val('');
			
			
			$("#LBSI_PRODUCT").val('');			
			$("#LBSI_PRODUCT").material_select();
			
			
		//	LoadDashBord();
	        CheckCusType();
	        GETDROPDOWNVAL("Load");
	        getBranch();
			
	        
			CheckSource();
			getPrdVal();
			$("#Popup").click();
			//$(location).attr('href',window.location.origin + "/TPLSW/Applcnt?PrcsID=74537_CustomerOnBoarding_CusOnBoard&ActvID=145505_74537_CustomerOnBoarding_CusOnBoard_CustomerMaker&PrMs9=FormPageTab1&PrMs10=FormMainTab1");
			
		});
});

$("#InitWF").click(function () {
	
	var Prifix="LBSI"
		$("#LBSI_LEADID").val($("#LEDID").val());
		$("#LBSI_CUSNAME").val($("#CUSNAME").val());
		$("#LBSI_MOBNO").val($("#MOBNO").val());
		$("#LBSI_LNAMT").val($("#lNAMT").val().replace(/,/g, ""));
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
 


