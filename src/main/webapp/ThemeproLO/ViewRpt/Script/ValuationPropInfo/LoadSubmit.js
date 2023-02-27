$(document).ready(function () {
	
	
	//$($('.AFormaccordion')[0]).click();

	/*if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		{
	$("#COBI_CUSID").val($(".FormPageMultiTab li.active").attr("id"))
		}
	if ($("#COBI_CUSID").val() != "")
		{
	$(".COBI_CUSID").text($("#COBI_CUSID").val());
		} */
	//LoadMultiData("",$("#PrcsID").val(),$("#PrMs6").val(),"NICETOHAVE","TVRLDBfields","LSW_STVREMARKLINE");
	
	var DATA=$("#PrMs6").val();
	var ALTNDATA=$("#PrMs5").val();
	var PrcsID=$("#PrcsID").val()
	$("#TVPI_PRCSID").val(PrcsID);
	$("#TVPI_PROREFID").val(DATA);
	$("#TVPI_ALTERPROREFID").val(ALTNDATA)
	
	var RfID=$("#TVPI_ALTERPROREFID").val();
	
	if($("#DMY7").val().split("|")[8]=="ML01")
	{
	var mySelect = document.getElementById('TVPI_PROPERTYPE'),
    newOption = document.createElement('option');

newOption.value = 'Tiled Roof';

// FF does not support innerText, have to handle that separately
if (typeof newOption.innerText === 'undefined')
{
    newOption.textContent = 'Tiled Roof';
}
else
{
    newOption.innerText = 'Tiled Roof';
}

mySelect.appendChild(newOption);
	}
	
	FormDataFromDB("LSW_TECHVALPROINF", "TVPI_","TVPIDBfields",RfID +"|TVPI_ALTERPROREFID");
	LoadMultiData("",$("#PrcsID").val(),$("#PrMs6").val(),"BankDetail1","PRDODBfields","LSW_SGETPROPUPDDT");
    //$("#heading1 a").attr("data-load","Yes");
	
	if($("input[name='TVPI_MINAREA']:checked"). val() == undefined)
		{
		 $('input:radio[name=TVPI_MINAREA]')[0].checked = true;
		}
	
	RfID=RfID.substring(9);
	if(RfID=="VAL1")
		{
		GetPropAddress();
		}
	else if(RfID=="VAL2")
		{
		 GetPropIIAddress()
		}
	else
		{
		GetPropIIIAddress()
		}

	  var xml=UI_getdata($("#PrcsID").val(),$("#PrMs5").val(),"","","","LSW_SVALUERDATEOFCOMP")
      var DTINSPECT=$(xml).find('TEVD_DTINSPECT').text()
	   $("#TVPI_INSPECTIONDATE").val(DTINSPECT)
	
	$("#BTNLNDGRD").click();
	$("#BTNBUILDGRD").click();
	$("#BTNAMINGRD").click();
	// New Applicant Details Start
	residentaddr();
	     var STATUS=$(xml).find('STATUS').text() 
		 	  if(STATUS=="Completed"||STATUS=="Verified")
	  {
        $('.TVPIDBfields').attr('disabled',true)
        $('.DISCOM').attr('disabled',true)
         $('.btn').hide()
         $("#AddFloor").hide()
		 $("#AddAMENTIES").hide()
		 $('.Reuplod').hide()
		 $(".form-control").attr('disabled',true);
	  }
	
	
	 if($("#DMY7").val().split("|")[3]=="STP"||$("#DMY7").val().split("|")[3]=="SFA") 
     {
       $('.TVPIDBfields').attr('disabled',true)
        $('.DISCOM').attr('disabled',true)
         $('.btn').hide()
         $("#AddFloor").hide()
		 $("#AddAMENTIES").hide()
		  $('.Reuplod').hide()
		 $(".form-control").attr('disabled',true);
     }  	
	
	
	
	
		CheckDEV("TVPI_ANYDEVIATION","TVPI_SPECIFYDEVI")
	
	
$(document).on("click", ".DELETEFLOOR", function() {
		
var r = confirm("Are you sure!! to delete the record");
if (r == true) {
 oTable = $('#'+ $(this).closest("table").attr("id")).DataTable();
 oTable.row($(this).closest('.tbodytr').index()).remove().draw();
 
 var TableID = "";
	
 TableID = "Table3"

 var rowCnt = $("#"+TableID).find("tbody tr").length;
 var ColumnCnt = $($("#"+TableID).find('thead tr')).find('th').length;
 var NewrowCnt = $("#"+TableID).find("tbody tr").length;
 
 var K=$("#"+TableID).find("tbody tr").length;
 for(var i=0;i<K;i++)
	{
	  var    R=i+1
      value = inWords(R - 3) + " Floor";
	  if(R==1)
			{
			value='Basement'	
			}
			else if(R==2)
			{
			value='Stilt area'	
			}
			else if(R==3)
			{
			value='Ground Floor'	
			}
      HTML = $($("#"+TableID).find('tbody tr')[R-1]);
      if($("#Table3").find("tbody tr td").text()!="No data available in table")
    	  {
      $($(HTML).find('td')[0]).text(value);	
    	  }
	}
 
 $($("#"+TableID).find('tbody tr')[0]).find('input').focusout()
 

} 

if($("#Table3").find("tbody tr td").text()=="No data available in table")
{

$("#TVPI_CONSASPERDOC").val(parseFloat(0))
$("#TVPI_CONSASPERACTUAL").val(parseFloat(0))
$("#TVPI_CONSAREACONS").val(parseFloat(0))
$("#TVPI_CONSASPERRATE").val(parseFloat(0))
$("#TVPI_CONSTOTVAL").val(parseFloat(0))
//var Land=$("#PIAG_LNDTOTVAL0").val().replace(/,/g,'')
//$("#TVPI_TOTEXTIMVAL").val(CURINRCommaSep(Land))

var Land=$("#PIAG_LNDTOTVAL0").val().replace(/,/g,'')
var Amtival=$("#TVPI_AMENTIESVAL").val().replace(/,/g,'')

if (Amtival=="")
		{
		Amtival=0;
       }
$("#TVPI_TOTEXTIMVAL").val(CURINRCommaSep(parseFloat(Land)+parseFloat(Amtival)))

}

})
	   

	   

$(document).on("click", ".DELETEAMTIES", function() {
		
var r = confirm("Are you sure!! to delete the record");
if (r == true) {
 oTable = $('#'+ $(this).closest("table").attr("id")).DataTable();
 oTable.row($(this).closest('.tbodytr').index()).remove().draw();
 
 var TableID = "";
	
 TableID = "Table4"


 $($("#"+TableID).find('tbody tr')[0]).find('input').focusout()
 

} 

if($("#Table4").find("tbody tr td").text()=="No data available in table")
{


$("#TVPI_AMENTIESVAL").val(parseFloat(0))
var Land=$("#PIAG_LNDTOTVAL0").val().replace(/,/g,'')
var Constructval=$("#TVPI_CONSTOTVAL").val().replace(/,/g,'')

$("#TVPI_TOTEXTIMVAL").val(CURINRCommaSep(parseFloat(Land)+parseFloat(Constructval)))

}

})
	  
	 
	 
	//Add Another Floor Start

	$(document).on("click", "#AddFloor", function() {
		
		    var TableID = "";
		
		    TableID = "Table3"

	        var rowCnt = $("#"+TableID).find("tbody tr").length;
	        var ColumnCnt = $($("#"+TableID).find('thead tr')).find('th').length;

	        var HTML="";

			var table = $("#"+TableID).DataTable();
			 
			var rowNode = table
			    .row.add( ['','', '', '','','', '', '', '', '','','', '', '',''] )
			    .draw()
			    .node();

			var NewrowCnt = $("#"+TableID).find("tbody tr").length;
			
			value = inWords($("#"+TableID).find("tbody tr").length - 3) + " Floor";
			
			
			if(NewrowCnt==1)
			{
			value='Basement'	
			}
			else if(NewrowCnt==2)
			{
			value='Stilt area'	
			}
			else if(NewrowCnt==3)
			{
			value='Ground Floor'	
			}
			
			
			HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);
			   
		    $($(HTML).find('td')[0]).text(value);	    
			$($(HTML).find('td')[6]).text($("#TVPI_ALTERPROREFID").val());			
			
			//For Data Population in Grid Columns End
			
			//Field Initialisation Start
	        
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

	// Add Another Floor End
	
	
		
	//Add AMENTIES  Start

	$(document).on("click", "#AddAMENTIES", function() {
		
		    var TableID = "";
		
		    TableID = "Table4"

	        var rowCnt = $("#"+TableID).find("tbody tr").length;
	        var ColumnCnt = $($("#"+TableID).find('thead tr')).find('th').length;

	        var HTML="";

			var table = $("#"+TableID).DataTable();
			 
			var rowNode = table
			    .row.add( ['', '', '', '', '','','', '', '',''] )
			    .draw()
			    .node();

			var NewrowCnt = $("#"+TableID).find("tbody tr").length;
			
		//	value = inWords($("#"+TableID).find("tbody tr").length - 1) + " Floor";
			
			HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);
			   
		//    $($(HTML).find('td')[0]).text(value);	    
			$($(HTML).find('td')[2]).text($("#TVPI_ALTERPROREFID").val());			
			
			//For Data Population in Grid Columns End
			
			//Field Initialisation Start
	        
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

	// Add AMENTIES  End
	
	
	$('.FormSave').on('click', function() {

		
		if($(this).text() == "Submit")
		{
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
			
			 var DocMndtry=ChkMandatoryFlds_Doc("DOCMndtry")
				  
				  if(DocMndtry != "")
					  {
					    alert('Upload the documents');
					    return false;
					  }
			if(MndtryChk=="")
			{
				MndtryChk=CheckMndtryTotAmenities("Table4","AMENAME","")
			}
			
			if(MndtryChk!="")
			{
				alert(MndtryChk);
				return false;
			}
			
		}

		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];

		var PROPINFOLNDGRD = TxtGridsubmitdata_V1("Table2","PIAG_","TVPI_");
		AssignGridXmltoField("TVPI_LANDPARTICUL", PROPINFOLNDGRD);
		var PROPINFOBUILDGRD = TxtGridsubmitdata_SV1("Table3","PIFG_","TVPI_");
		AssignGridXmltoField("TVPI_BUILDCONSTRU", PROPINFOBUILDGRD);
		
		
		
		var TVPI_AMENTIES = TxtGridsubmitdata_SV1("Table4","TEUP_","TVPI_");
		AssignGridXmltoField("TVPI_AMENTIES", TVPI_AMENTIES);
		

		var CHKresult=FormDataToDB(tbl,prfx,$("#TVPI_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		if(CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
		
		if($(this).text() == "Submit")
		{  
	
	 var xml1=UI_getdata($("#PrcsID").val(),$("#TVPI_ALTERPROREFID").val(),"","","","LSW_SCHKVENDORCOMP")
             var VENCOMSTA=$(xml1).find('RESULT').text()
			 if(VENCOMSTA=="YES")
			 {
				 alert($(xml1).find('alert').text())
				  var ACCORD=''
		  ACCORD=$("#PrMs3").val()
		  RedirectURL=""
	  //   RedirectURL = document.referrer+"&PrMs3="+ACCORD;
	 //    $(location).attr('href',encodeURI(RedirectURL));
	      var   PAGENAME="ViewRpts"
	     RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9=FormPageTab1"+"&PrMs10="+$("#PrMs10").val()+"&PrMs3="+ACCORD+"&PrMs1="+$("#PrMs1").val();
          $(location).attr('href',encodeURI(RedirectURL));

			 }
			else
			
			{
            var xml=UI_getdata($("#TVPI_PRCSID").val(),$("#TVPI_ALTERPROREFID").val(),"VALUER",$("#LogUsr").val(),"","LSW_SSTATUSUPDATE")
           // RedirectURL = window.location.origin+"/TPLSW/MyApplication"
			//$(location).attr('href',encodeURI(RedirectURL));
		  var ACCORD=''
		  ACCORD=$("#PrMs3").val()
		  RedirectURL=""
	  //   RedirectURL = document.referrer+"&PrMs3="+ACCORD;
	 //    $(location).attr('href',encodeURI(RedirectURL));
	      var   PAGENAME="ViewRpts"
	     RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9=FormPageTab1"+"&PrMs10="+$("#PrMs10").val()+"&PrMs3="+ACCORD+"&PrMs1="+$("#PrMs1").val();
          $(location).attr('href',encodeURI(RedirectURL));
			}
		}
		
	});	
	
	$(document).on('click', '.GoBack', function () {
    var ACCORD=''
		  ACCORD=$("#PrMs3").val()
		  RedirectURL=""
    var   PAGENAME="ViewRpts"
	      RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9=FormPageTab1"+"&PrMs10="+$("#PrMs10").val()+"&PrMs3="+ACCORD+"&PrMs1="+$("#PrMs1").val();
         $(location).attr('href',encodeURI(RedirectURL));
	})
	
});

