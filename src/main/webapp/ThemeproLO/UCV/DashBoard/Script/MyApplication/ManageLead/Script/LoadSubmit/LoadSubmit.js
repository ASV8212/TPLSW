$(document).ready(function () {

	GETDROPDOWNVAL("Load");
	
	CheckCusType();
	getStatus();
	getConstitution();
	
   var Vertical=UI_getdata("Vertical","","","","","LSW_SGetProdVal")
   

  $("#LPOP_VERTICAL").html();
  $("#LPOP_VERTICAL").append($(Vertical).find("RESULT").html())
  $("#LPOP_VERTICAL").val($("#VERTICAL").val());
  $("#LPOP_VERTICAL").attr('disabled',true);
  $("#LPOP_VERTICAL").material_select(); 


   getBranch();
	 
   var LonType=UI_getdata("LonType",$("#VERTICAL").val(),"","","","LSW_SGetProdVal")	

  $("#LPOP_LONTYPE").html();
  $("#LPOP_LONTYPE").append($(LonType).find("RESULT").html())
  $("#LPOP_LONTYPE").material_select();
  
	//FncallDocChkLst(this,'Table2',{spname:'LSW_SGETLEADDTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$("#LogUsr").val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,10,11','MNGLEAD');

	$(".OTCSTATUS1").on('click', function() {
		$("#Save").click();
		$("#BRID").val($($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('LPOP_BRID')").index()]).text());
		$("#LEDID").val($($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('LEAD ID')").index()]).text());
		$("#CUSNAME").val($($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('CUSTOMER NAME')").index()]).text());
		$("#lNAMT").val($($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('LOAN AMOUNT')").index()]).find('input').val());
		$("#MOBNO").val($($(this).closest('.tbodytr').find('.tbodytrtd')[$("#Table2").find("thead th:contains('MOBILE NUMBER')").index()]).text());
    	$("#LCR").click();
    });
	
	$("#BTNLPDSGRD").click();
	$("#TEST_LEADID").val($("#PrcsID").val())
	FormDataFromDB("LSW_TLEAD5CR","TEST_","TESTDBfields",$("#TEST_LEADID").val()+"|TEST_LEADID");
	$("#BTNLOADLEADLPDSGRD").click();
	
	if($("#PrMs3").val()=="NEW")
	{
		$("#Popup").click();
	}
	else
	{
	  $("#Submit").hide();
	  $(".TESTDBfields").attr('disabled',true);	
	}

	$(document).on("click", ".FormSave", function() {
		
		
	/* var x = document.getElementsByClassName("TESTDBfields"); */
   /*  var y = document.getElementsByTagName("select");
    var name = "";
    var fieldid = "";
    var value = "";
    var type = ""; */
	//var TEST_LEADID="1238";
    //var a = parseInt(x.length)+parseInt(y.length);
 

   /*  var formxml = "<Form><Details>";
    for (i = 0; i < x.length; i++) {
		
		if($(document.getElementsByClassName("TESTDBfields").item(i)).is("select")==true || $(document.getElementsByClassName("TESTDBfields").item(i)).is("input")==true || $(document.getElementsByClassName("TESTDBfields").item(i)).is("textarea")==true){
		
        name = document.getElementsByClassName("TESTDBfields").item(i).name;
        fieldid = document.getElementsByClassName("TESTDBfields").item(i).id;
	  
	    value = document.getElementsByClassName("TESTDBfields").item(i).value;
       
		formxml=formxml+"<"+name+">"+value+"</"+name+">";
		}
	}
	 formxml = formxml + "</Details></Form>";
		 
		//var  LEADID = UI_getdata("LeadCr","s","","","","LSW_Stestleads10");
		//var TEST_LEADID=$(LEADID).find("TEST_LEADID").text(); 
		var LoanType = UI_getdata(TEST_LEADID,formxml,"","","","LSW_Stestleads1");
		//var GetXMLFrmTbl = GetGrdXML("Table2");
		//var op = UI_getdata(GetXMLFrmTbl,"","","","","LSW_Stestleads1");
		
	/* 	 
		var prefix = "TEST";
		var xml = submitdata(prefix+"DBfields");
	var LoanType=UI_getdata($("#TEST_LEADID").val(),xml,"","","","LSW_Stestleads1")
		if($(LoanType).find("Result").text()=='Success'){
			alert("File save successfully");
			return;
		} */
		/* 
		 else if($(LoanType).find("DOBANDMOB").text()=='ALREADY EXISTS DOB AND MOBNO'){
			alert("ALREADY EXISTS DOB AND MOBNO");
			return;
		}
		else if($(LoanType).find("DOB").text()=='ALREADY EXITS DOB'){
			alert("ALREADY EXITS DOB");
			return;
		}
		else if($(LoanType).find("MOB").text()=='ALREADY EXITS MOB'){
			alert("ALREADY EXITS MOB");
			return;
		}
		else if($(LoanType).find("Result").text()=='Failed'){
			alert($(LoanType).find("ErrorMessage").text());
			return;
		}
		 
		else
		{
			alert("File submission failed");
			return;
		}
    */
		
   if($(this).text() == "Submit")
			{

			var MndtryChk = ChkMandatoryFlds("TESTMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
			}
		
		var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
		var LPDSTable = TxtGridsubmitdata_V1("LPDSTable","LGRI_","TEST_");
				     AssignGridXmltoField("TEST_LPDSGRID",LPDSTable);  
			
	     var CHKresult=FormDataToDB(tbl,prfx,$("#TEST_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)

			if(CHKresult == "Fail")
			{
			  alert("Submission Failed");
			   return false;			
			}
			
	$(location).attr('href',window.location.origin + "/TPLSW/CersaiDownload")
			
		/***var GetXMLFrmTbl = GetGrdXML("Table2");
		var op = UI_getdata(GetXMLFrmTbl,"","","","","LSW_SLEADUPDT");
		if($(op).find("RESULT").text()=="SUCCESS"){
			toastr.success("File save successfully")
		}
		else{
			toastr.error("File submission failed");
			return;
		}***/
		
	});
	$("#LCR").click(function () {
		
		//$(document).on('click', '#LCR', function () {
			
			$('input[name="LPOP_CUSTYPE"]').prop('checked', false);
			 $('input[name="LPOP_CUSTYPE"]').attr("disabled",false)	
	         $('.PROIIDROP').find('.select-dropdown').attr('disabled',false)
			$("#LPOP_BRANCH").empty();
			$("#LPOP_BRANCH").val('');			
			$("#LPOP_BRANCH").material_select();
			$("#LPOP_LONTYPE").val('');
			$("#LPOP_LONTYPE").material_select();
			$("#LPOP_SUBLONTYPE").val('');
			$("#LPOP_SUBLONTYPE").material_select();
			$("#LPOP_PRIMLONID").val('');
			$("#LPOP_SOURCBY").val('');
			$("#LPOP_SOURCBY").material_select();
			$("#LPOP_SOURCENAME").val('');
			$("#LPOP_SOURCENAME").material_select();
			$("#LPOP_CONSTITUTION").val('');
			$("#LPOP_CONSTITUTION").material_select();
			$("#LPOP_LEADID").val('');
			$("#LPOP_CUSNAME").val('');
			$("#LPOP_MOBNO").val('');
			$("#LPOP_LNAMT").val('');
			
			
			$("#LPOP_PRODUCT").val('');			
			$("#LPOP_PRODUCT").material_select();
			
			
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
	if($("#LPOP_LEADID").val() == "")
{
var leadid = UI_getdata("LeadIns","","Yes","","","LSW_SLEADIDGEN");
$("#LPOP_LEADID").val($(leadid).find("Val1").text())
$("#TEST_PRCSID").val($(leadid).find("Val1").text())


}
	

   var Prifix="LPOP"
        var MndtryChk = ChkMandatoryFlds("LPOPMndtry");
if(MndtryChk == "Mandatory")
{
alert("Fill the Mandatory Fields");
return false;
}


//LEADINIT()

//var output=UI_getdata(ApplicationNo,LoanType,'','','','LSW_SCHECKEXISTCUSSTATUS');
// var Result=$(output).find('RESULT').text();
// if(Result=="OK")
// {*/
var xml = submitdata(Prifix+"DBfields");
var output=UI_getdata(xml,"","","","","LSW_SLEADINITINS1")
if($(output).find("RESULT").text() == "SUCCESS")
{
$("#TEST_LEADID").val($("#LPOP_LEADID").val());
   $('#TEST_LEADID').next().addClass('active');
//$("#TEST_LEADID").val($("#TEST_LEADID").val());
//$("#TEST_PRCSID").val($("#TEST_LEADID").val());
        $("#TEST_AMOUNTREQUIREMENT").val($("#LPOP_LNAMT").val());
   $('#TEST_AMOUNTREQUIREMENT').next().addClass('active');
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
});002
$(document).on("click", ".AddLGRI", function() {
    	
	
    	var TableID = $(this).attr("data-table");

    var HTML="";

    	
    		var html1 = $($(this).closest(".DYNROW"));

    		var table = $("#"+TableID).DataTable();
    		 
    		var rowNode = table
    		    .row.add( [ '', '', '','','', '', '','','', '', ''] )
    		    .draw()
    		    .node();

    		var NewrowCnt = $("#"+TableID).find("tbody tr").length;
    		
    		// For Data Population in Grid Columns Start
    		
    		HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);					
    		$($(HTML).find('td')[5]).text($("#TEST_LEADID").val());			
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
 


