$(document).ready(function () {

	GETDROPDOWNVAL("Load");
	
	CheckCusType();
	getStatus();
	getConstitution();
	//Checkconstion();
	
   var Vertical=UI_getdata("Vertical","","","","","LSW_SGetProdVal")
   

  $("#LPOP_VERTICAL").html();
  $("#LPOP_VERTICAL").append($(Vertical).find("RESULT").html())
  $("#LPOP_VERTICAL").val($("#VERTICAL").val());
  $("#LPOP_VERTICAL").attr('disabled',true);
  $("#LPOP_VERTICAL").material_select(); 


   getBranch();
			if($("#VERTICAL").val()=='MSME'||$("#VERTICAL").val()=='MSME Alliance')
			{
				$('input[id="Indvdl"]').attr("disabled", true);	
			}
			else
			{
				$('input[id="Indvdl"]').attr("disabled", false);	
			} 
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
	
	if($("#TEST_SAVEORSUBMIT").val()=="Submit")
	{
		  $("#LeadSave").hide();
	}
//	$("#TEST_PRVDT").val($("#TEST_NCOMDOB").val())
	
	if($("#PrMs3").val()=="NEW")
	{
		if($("#TEST_LEADID").val()=="")
		{
		  $("#Popup").click();
		}
	}
	else if($("#PrMs3").val()=="EDIT")
	{
	  //$("#Submit").hide();
	  $(".TESTDBfields").attr('disabled',false);	
	  $(".BTNVerify").attr('disabled',false);
	  $("#cke_TEST_TEBUSNESSPROG").attr("disabled",false);
	}
	else
	{
	  $("#Save").hide();
	  $(".TESTDBfields").attr('disabled',true);	
	  $(".BTNVerify").attr('disabled',true);  
	  $(".EDT").attr('disabled',false);  
	  $("#cke_TEST_TEBUSNESSPROG").attr("disabled",true);
	}
	
 if($("#TEST_CUSTYPE").val()=="Non-Individual")
   {
	   $(".INDF").hide();
	   $(".INDM").removeClass('TESTMndtry');
	   $(".ReName").text("ORGANISATION NAME");
	   $("#TEST_FIRSTNAME").removeClass('IsAlphaFields');
	   $("#TEST_FIRSTNAME").removeClass('IsUpprCse');
	   $("#TEST_FIRSTNAME").removeClass('NoSpecialChar');
   }
   else
   {
	  $(".INDF").show();
      $(".INDM").addClass('TESTMndtry');
	  $("#TEST_FIRSTNAME").addClass('IsAlphaFields');
	  $("#TEST_FIRSTNAME").addClass('IsUpprCse');
	  $("#TEST_FIRSTNAME").addClass('NoSpecialChar');
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
	
	/* if(($(this).text() == "Submit" || $(this).text() == "Save") && (event.target.id != "InitWF")){
		if($("#TEST_TEBUSNESSPROG").val() == "\t\t\t\t  \n\t\t\t\t"||$("#TEST_TEBUSNESSPROG").val() == "")
		{
			alert("Business process description is Mandatory");
			return;
		}
	} */
	
	 $("#cke_TEST_TEBUSNESSPROG").find(".cke_toolbar").find(".cke_button__save").click()
	 
	if($(this).text() == "Submit" || $(this).text() == "Save")
	{
	if(event.target.id != "InitWF")
	{
	var LoanType=UI_getdata($("#TEST_LEADID").val(),"","","","","LSW_SCHKLEADTEXTEDITOR")
		if($(LoanType).find("RESULT").text()=='NO'){
			alert("Business process description is Mandatory");
			return;
		}
		
		if($(event.srcElement).parent().prev().find('iframe').contents().find("body").html()=="")
		{
			alert("Business process description is Mandatory.")
			return false;
		}	
	}
	}
					
	
	if($(this).text() == "Submit")
	{
		$("#TEST_SAVEORSUBMIT").val($(this).text())
	}
	if($(this).text() == "Save" && $("#TEST_SAVEORSUBMIT").val()!="Submit")
	{
		$("#TEST_SAVEORSUBMIT").val($(this).text())
	}
	if(($(this).text() == "Submit" || $(this).text() == "Save") && (event.target.id != "InitWF")){
		if($('#TEST_AUREPCFP').is(":checked") == false)
		{
			alert("Kindly authorise representative to contact for further proceedings.");
			return;
		}
	}
	
	
	
	
   if($(this).text() == "Submit")
			{

			var MndtryChk = ChkMandatoryFlds("TESTMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
				
	if($("#TEST_MOBIVERIFY").val()!="Verified")		
	{
        alert("Kindly Verify the Mobile Number");
		return false;
	}
	if($("#TEST_EMAILVERIFY").val()!="Verified")		
	{
        alert("Kindly Verify the Email");
		return false;
	}	
			}
		
		var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
		var LPDSTable = TxtGridsubmitdata_V1("LPDSTable","LGRI_","TEST_");
				     AssignGridXmltoField("TEST_LPDSGRID",LPDSTable);  

        $("#cke_TEST_TEBUSNESSPROG").find(".cke_toolbar").find(".cke_button__save").click()		
		
	     var CHKresult=FormDataToDB(tbl,prfx,$("#TEST_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)

			if(CHKresult == "Fail")
			{
			  alert("Submission Failed");
			   return false;			
			}
if($(this).text() == "Submit")
	{
        var LinkSend=UI_getdata($("#TEST_PRCSID").val(),"LEAD",$("#TEST_PRCSID").val(),"EMAIL","","LSW_SSMSEMAILLINKSND");		
	   $(location).attr('href',window.location.origin + "/TPLSW/CersaiDownload")
	}
/* 		if($(this).text() == "Submit")
	{
		$("#LeadSave").hide();
	}	 */	
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
$("#PrcsID").val($(leadid).find("Val1").text())
}
	

   var Prifix="LPOP"
   var MndtryChk = ChkMandatoryFlds("LPOPMndtry");
if(MndtryChk == "Mandatory")
{
alert("Fill the Mandatory Fields");
return false;
}

   $("#TEST_CUSTYPE").val($("input[name='LPOP_CUSTYPE']:checked"). val());
   $("#TEST_CONSTITUTION").val($("#LPOP_CONSTITUTION").val());

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
   
   if($("#TEST_CUSTYPE").val()=="Non-Individual")
   {
	   $(".INDF").hide();
	   $(".INDM").removeClass('TESTMndtry');
	   $(".ReName").text("ORGANISATION NAME");
   }
   else
   {
	  $(".INDF").show();
      $(".INDM ").addClass('TESTMndtry');	  
   }
  $("#LeadSave").click();
  
  $(location).attr('href',window.location.origin + "/TPLSW/ManageLead?PrcsID="+$("#TEST_LEADID").val()+"&PrMs3=NEW")
//$("#LeadPopupClose").click();
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
 


