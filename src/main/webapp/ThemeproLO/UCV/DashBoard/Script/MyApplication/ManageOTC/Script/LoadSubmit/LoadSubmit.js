$(document).ready(function () {
	//$("#Popup").click();
	GETDROPDOWNVAL("Load");
	getBranch();
	CheckCusType();
	//FncallDocChkLst(this,'Table2',{spname:'LSW_SGETLEADDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$("#LogUsr").val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,10,11','MNGLEAD');

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
	$("#BTNLOADLEADLPDSGRD").click();
	$(document).on("click", ".FormSave", function() {
		
	
		
		var x = document.getElementsByClassName("ABCDDBfields");
    var y = document.getElementsByTagName("select");
    var name = "";
    var fieldid = "";
    var value = "";
    var type = "";
	 
    
 

    var formxml = "<Form><Details>";
    for (i = 0; i < x.length; i++) {
		
		if($(document.getElementsByClassName("ABCDDBfields").item(i)).is("select")==true || $(document.getElementsByClassName("ABCDDBfields").item(i)).is("input")==true || $(document.getElementsByClassName("ABCDDBfields").item(i)).is("textarea")==true){
		
        name = document.getElementsByClassName("ABCDDBfields").item(i).name;
        fieldid = document.getElementsByClassName("ABCDDBfields").item(i).id;
	  
	    value = document.getElementsByClassName("ABCDDBfields").item(i).value 
       
		formxml=formxml+"<"+name+">"+value+"</"+name+">"
		}
	}
	 formxml = formxml + "</Details></Form>";
       // var fomxml = "";
	   var  LEADID = UI_getdata("LeadCr","s","","","","LSW_Stestleads3");
		var ABCD_LEADID=$(LEADID).find("ABCD_LEADID").text();
		var LoanType = UI_getdata(ABCD_LEADID,formxml,"","","","LSW_Stestleads2");
         
		 
		
		//var GetXMLFrmTbl = GetGrdXML("Table2");
		//var op = UI_getdata(GetXMLFrmTbl,"","","","","LSW_Stestleads1");
		if($(LoanType).find("Result").text()=="Success"){
			alert("File save successfully");
		}
	 
		else if($(LoanType).find("Result").text()=='Failed')
		{
			alert($(LoanType).find("ErrorMessage").text());
			return;
			 
		}
		else if($(LoanType).find("NAMEEMAILEXISTS").text()=='NAME & EMAIL ID ALREADY EXISTS')
		{
			alert("NAME & EMAIL ID ALREADY EXISTS");
			return;
			 
		}
		else if($(LoanType).find("NAMEEXISTS").text()=='NAME ALREADY EXISTS')
		{
			alert( "NAME ALREADY EXISTS");
			return;
			 
		}
		else if($(LoanType).find("EMAILEXISTS").text()=='EMAIL ID ALREADY EXISTS')
		{
			alert( "");
			return;
			 
		}
		else 
		{
			alert("File submission failed");
			return;
			 
		}
	
		
   /* if($(this).text() == "Submit")
			{

			var MndtryChk = ChkMandatoryFlds("LEADMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
			}*/
		
		/*var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
		var LPDSTable = TxtGridsubmitdata_V1("LPDSTable","LPSE_","LEAD_");
				     AssignGridXmltoField("LEAD_LPDSGRID",LPDSTable);  
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#LEAD_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
			
			if (CHKresult == "Fail")
			{
			  alert("Submission Failed");
			   return false;			
			}*/
		/***var GetXMLFrmTbl = GetGrdXML("Table2");
		var op = UI_getdata(GetXMLFrmTbl,"","","","","LSW_SLEADUPDT");
		if($(op).find("RESULT").text()=="SUCCESS"){
			toastr.success("File save successfully")
		}
		else{
			toastr.error("File submission failed");
			return;
			}***/
		
	}
	);
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
$(document).on("click", ".AddLPDS", function() {
    	
	
    	var TableID = $(this).attr("data-table");

    var HTML="";

    	
    		var html1 = $($(this).closest(".DYNROW"));

    		var table = $("#"+TableID).DataTable();
    		 
    		var rowNode = table
    		    .row.add( [ '', '', '','','', '', '','','', ''] )
    		    .draw()
    		    .node();

    		var NewrowCnt = $("#"+TableID).find("tbody tr").length;
    		
    		// For Data Population in Grid Columns Start
    		
    		HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);					
    		$($(HTML).find('td')[4]).text($("#LEAD_LEADID").val());
			
    		//$($(HTML).find('td')[7]).text($(html1).find("[name=EGCD_UNIQUID]").val());
    		
    		// For Data Population in Grid Columns End
    		
    		// Field Initialisation Start
            
    		$(HTML).addClass("tbodytr");
    		$(HTML).find("td").addClass("tbodytrtd");
    		
    		// Dropdown
    		                   
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

    		//Field Initialisation End


    });
$("#InitWF").click(function () {
	if($("#LDIN_LEADID").val() == "")
	{
	var leadid = UI_getdata("LeadIns","","Yes","","","LSW_SLEADIDGEN");
	$("#LDIN_LEADID").val($(leadid).find("Val1").text())
	}
	    var Prifix="LDIN"
        var MndtryChk = ChkMandatoryFlds("LDINMndtry");
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields");
			return false;
			}
			
	//var output=UI_getdata(ApplicationNo,LoanType,'','','','LSW_SCHECKEXISTCUSSTATUS');
//	 var Result=$(output).find('RESULT').text();
//	if(Result=="OK")
// {*/
	var xml = submitdata(Prifix+"DBfields");
	var output=UI_getdata(xml,"","","","","LSW_SLEADINITINS")
	if($(output).find("RESULT").text() == "SUCCESS")
	{
		
		$("#LEAD_LEADID").val($("#LDIN_LEADID").val());
	    $('#LEAD_LEADID').next().addClass('active');
		$("#LEAD_PRCSID").val($("#LEAD_LEADID").val());
		//$("#LPSE_PRCSID").val($("#LEAD_LEADID").val());
        $("#LEAD_AMOUNTREQUIREMENT").val($("#LDIN_LNAMT").val());
	    $('#LEAD_AMOUNTREQUIREMENT').next().addClass('active');
		$("#LeadPopupClose").click();
		
	}
	else
	{
		alert($(output).find("RESULT").text());
		return;
	}
	
	//var xml = submitdata("DBfields");
	
	/* }
	else
		{
		  alert(Result);
		  return false;
		}*/
});



