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
	LoadMultiData("",$("#PrcsID").val(),$("#PrMs5").val(),"NICETOHAVE","TVRLDBfields","LSW_STVREMARKLINE");
	
	 
	
	$("#TPIF_PROPERTYNO").val($("#PrMs6").val());
	$("#TPIF_ALTNPROPERTYNO").val($("#PrMs5").val());
	$("#TVRL_REFNO").attr("value",$("#PrMs5").val())
	$("#TRPU_UNIDID").val($("#PrMs6").val());
	$("#TRPU_ALTUNIQID").attr("value",$("#PrMs5").val())
	$("#TDSU_REFNO").attr("value",$("#PrMs5").val())
	
   LoadMultiData("",$("#PrcsID").val(),$("#PrMs5").val(),"BankDetail1","TRPUDBfields","LSW_STECHRMKPHS");
   
  LoadMultiData("",$("#PrcsID").val(),$("#PrMs5").val(),"DOCUSUB","TDSUDBfields","LSW_STECHDOCSUBMIT");

	var tbl = $("#heading1 a").attr("data-aria").split("|")[0];	
	var prfx = $("#heading1 a").attr("data-aria").split("|")[1];
	var DATA = $("#heading1 a").attr("data-aria").split("|")[2];
	var CusID =$("#heading1 a").attr("data-aria").split("|")[2];
	var CusID1 =$("#heading1 a").attr("data-aria").split("|")[3];
     
	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
	
	if($("#DMY7").val().split("|")[8]=="ML01")
	{
	var mySelect = document.getElementById('TPIF_PROPERTYPE'),
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
	
	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
    $("#heading1 a").attr("data-load","Yes");
   
    var DATA = $("#heading1 a").attr("data-aria").split("|")[2];
    DATA = $("#"+DATA).val()
    DATA=DATA.substring(9);
	if(DATA=="VAL1")
		{
		GetPropAddress();
		}
	else
		{
		 GetPropIIAddress()
		}

	$("#BTNLNDGRDI").click();
	
	$("#BTNBUILDGRD").click();
	
	$("#BTNAMINGRD").click();
	
	
	 $(document).on("click", ".DELETEDOCUMNETS" , function() {
    	
        if(confirm('Delete Photos') == true)
    	 		{
                 $(this).closest('.DYNROW').remove()	
                }
    	 })

	
	// Add Property Start
	
	
	  var xml=UI_getdata($("#PrcsID").val(),$("#PrMs5").val(),"","","","LSW_SVALUERDATEOFCOMP")
      var DTINSPECT=$(xml).find('TEVD_DTINSPECT').text()
	$("#TPIF_INSPECTIONDATE").val(DTINSPECT)
	
	  CheckDEV("TPIF_ANYDEVIATION","TPIF_SPECIFYDEVI")
	  
	  
	var x = $("#APPINFOTXT").val()
     var op = UI_getdata($("#PrcsID").val(),$("#TPIF_ALTNPROPERTYNO").val(),$("#TPIF_PROPERTYNO").val(),$('#DMY7').val().split('|')[7],$(x).find('APFI_APPLSTATUS').text(),"LSW_SGETVENDRHDR")
	$("#FormPage1").next().empty();
	op = op.replace('<Resultset><a><RESULT>','');
	op = op.replace('</RESULT></a></Resultset>','');
	$("#FormPage1").next().append(op);
	$("#AudTrl").hide();
	
	//$("#TPIF_PROXIMITY").attr()
	var PROXIMITY=$("#TPIF_PROXIMITYI").val()
	 var PROXIMITYVal=PROXIMITY.split(",");
	 var row = $(PROXIMITYVal).length;
	 for (i=0;i<row;i++)
	 {
		 if(PROXIMITYVal[i] !="")
		 {
	   //$("#TPIF_PROXIMITY option:contains("+PROXIMITYVal[i]+")").attr("selected","selected")
	   $("#TPIF_PROXIMITY option[value='"+PROXIMITYVal[i]+"']").attr("selected","selected")
		 }
	 }
$(document).on("click", ".Structural", function() {	
var AMENITIESPROI=$("#THSD_AMENITIESPROI").val()
	 var AMENITIESPROIVal=AMENITIESPROI.split(",");
	 var row = $(AMENITIESPROIVal).length;
	 for (i=0;i<row;i++)
	 {
		 if(AMENITIESPROIVal[i] != "")
		 {
	   //$("#THSD_AMENITIESPRO option:contains("+AMENITIESPROIVal[i]+")").attr("selected","selected")
	   $("#THSD_AMENITIESPRO option[value='"+AMENITIESPROIVal[i]+"']").attr("selected","selected")
		 }
	 }
	 
	  
	 $("#THSD_AMENITIESPRO ").material_select();
	 
	 if($("#PrMs1").val()=="View")
	 {
		  $('.select-dropdown').attr('disabled',true)
	 }
	
});	
	   
	   
	   
	   		
	 $(document).on("click", ".DELDOCU" , function() {

	         
			  if(confirm('Delete Document Submitted') == true)
		 		{
		     $(this).closest('.DYNROW').remove()	
			var k= $('.DOCUSUB').find('.DYNROW').length
			for(i=0;i<k;i++)
				{
				//('.BankDetail1').find('.DYNROW')[i]
			    var	j=i+1
	         $($('.DOCUSUB').find('.DYNROW')[i]).find('#PROPTXTHDR').text(j)
				}
				}
          })
	   
			
          $(document).on("click", ".DELREMARKS" , function() {

	         
			  if(confirm('Delete Remarks') == true)
		 		{
		     $(this).closest('.DYNROW').remove()	
			var k= $('.NICETOHAVE').find('.DYNROW').length
			for(i=0;i<k;i++)
				{
				//('.BankDetail1').find('.DYNROW')[i]
			    var	j=i+1
	         $($('.NICETOHAVE').find('.DYNROW')[i]).find('#PROPTXTHDR').text(j)
				}
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


$("#THVD_AMENTIESVAL").val(parseFloat(0))
var Land=$("#PLAG_LNDTOTVAL0").val().replace(/,/g,'')
var Constructval=$("#THVD_CONSTOTVAL").val().replace(/,/g,'')
	if (Land=="")
		{
		Land=0;
       }
	
if (Constructval=="")
{
	Constructval=0;
}

$("#THVD_TOTEXTIMVAL").val(CURINRCommaSep(parseFloat(Land)+parseFloat(Constructval)))

}

})
	  
	  
	  
	  
	  
	
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

$("#THVD_CONSASPERDOC").val(parseFloat(0))
$("#THVD_CONSASPERACTUAL").val(parseFloat(0))
$("#THVD_CONSAREACONS").val(parseFloat(0))
$("#THVD_CONSASPERRATE").val(parseFloat(0))
$("#THVD_CONSTOTVAL").val(parseFloat(0))
var Land=$("#PLAG_LNDTOTVAL0").val().replace(/,/g,'')
//$("#THVD_TOTEXTIMVAL").val(CURINRCommaSep(Land))

var Amtival=$("#THVD_AMENTIESVAL").val().replace(/,/g,'')

if (Amtival=="")
		{
	Amtival=0;
       }
$("#THVD_TOTEXTIMVAL").val(CURINRCommaSep(parseFloat(Land)+parseFloat(Amtival)))

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
		    .row.add( ['', '', '','','', '', '', '', '','','', '', '','',''] )
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
		$($(HTML).find('td')[6]).text($("#TPIF_ALTNPROPERTYNO").val());			
		
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
				$($(HTML).find('td')[2]).text($("#TPIF_ALTNPROPERTYNO").val());			
				
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
		
		
		var xml=UI_getdata($("#PrcsID").val(),$("#PrMs6").val(),$("#PrMs5").val(),"Valuation","","LSW_SCHKPROPERTY");
		
		if($(xml).find("RESULT").text()!="Yes")
		{
			alert($(xml).find("RESULT").text());
			var RedirectURL=""
              var   PAGENAME="MyApplication"
	          RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME;
               $(location).attr('href',encodeURI(RedirectURL));
			   return false;
		}
        
		var MndtryChk="";
		
		var GridData = $(this).attr("data-aria").split("|")[3];
		
		if(GridData=="Valuation")
		{
		   if($(this).text() == "Save & Next" || $(this).text() == "Save")
		     {
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
		}
		
		if($(this).text() == "Save & Next")
		{
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		}
         
		if($(this).text() == "Submit")
		{
			
			 var html = $('.BankDetail1')
			 
			 
			var MndtryChk = ChkMandatoryFlds("THVRMndtry");
			var MndtryChk1 = ChkMandatoryFlds("THVDMndtry");
			var MndtryChk2 = ChkMandatoryFlds("THSDMndtry");
			var MndtryChk3 = ChkMandatoryFlds("TPIFMndtry");
			if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
			else if(MndtryChk1 == "Mandatory")
			{
				alert("Fill the Mandatory Fields / Document(s)");
				return false;
			}
			else if(MndtryChk2 == "Mandatory")
		    {
				alert("Fill the Mandatory Fields / Document(s)");
				return false;
			}
			else if(MndtryChk3 == "Mandatory")
			{
				alert("Fill the Mandatory Fields / Document(s)");
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
			
			 var DocMndtry=ChkMandatoryFlds_Doc("DOCMndtry")
				  
				  if(DocMndtry != "")
					  {
					    alert('Upload the Map');
					    return false;
					  }
					  
					  
					  
					  var  MndtryChk1 = ChkMandatoryFlds_V1("PHUPLOAD",html);
           
           if (MndtryChk1 == "Mandatory") 
           {
               alert("Upload the Photos");
               return false;
           }
		}
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		var GridData = $(this).attr("data-aria").split("|")[3];
		
		if(GridData=="Valuation")
			{
		var PROPINFOLNDGRD = TxtGridsubmitdata_V1("Table2","PLAG_","THVD_");
		AssignGridXmltoField("THVD_VALUBUILTCONSGRD", PROPINFOLNDGRD);
		var PROPINFOBUILDGRD = TxtGridsubmitdata_SV1("Table3","PBDG_","THVD_");
		AssignGridXmltoField("THVD_VALUAREADETLDRD", PROPINFOBUILDGRD);
		
		var THVD_AMENTIES = TxtGridsubmitdata_SV1("Table4","TEVL_","THVD_");
		AssignGridXmltoField("THVD_AMENTIES", THVD_AMENTIES);
		
		
			}
		else if(GridData=="Remarks")
			{
               
			var THVR_GENREMARKI = TxtGridsubmitdata_V2("NICETOHAVE","TVRL_","THVR_","TVRLDBfields"); 
			AssignGridXmltoField("THVR_GENREMARKI", THVR_GENREMARKI)
			
			var THVR_UPLODPHS = TxtGridsubmitdata_V2("BankDetail1","TRPU_","THVR_","TRPUDBfields");
		    AssignGridXmltoField("THVR_UPLODPHS", THVR_UPLODPHS)
			
			var THVR_DOCUSUB = TxtGridsubmitdata_V2("DOCUSUB","TDSU_","THVR_","TDSUDBfields");
		    AssignGridXmltoField("THVR_DOCUSUB", THVR_DOCUSUB)
			
			
			}
		
		var CHKresult=FormDataToDB(tbl,prfx,$("#TPIF_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		
		if(CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
		
		if($(this).text() == "Save & Next")
		{
			 NXTTAB(this);
		}
		if($(this).text() == "Submit")
		{
			
			var xml1=UI_getdata($("#TPIF_PRCSID").val(),$("#TPIF_ALTNPROPERTYNO").val(),"","","","LSW_SCHKVENDORCOMP")
             var VENCOMSTA=$(xml1).find('RESULT').text()
			 if(VENCOMSTA=="YES")
			 {
				 alert($(xml1).find('alert').text())
                RedirectURL=""
              var   PAGENAME="MyApplication"
	          RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME;
               $(location).attr('href',encodeURI(RedirectURL));
			 }
			else
			{
			var xml=UI_getdata($("#TPIF_PRCSID").val(),$("#TPIF_ALTNPROPERTYNO").val(),"VALUERVENDOR",$("#LogUsr").val(),"","LSW_SSTATUSUPDATE")
			WFComplete ($("#ActvID").val(),"",""); 
			}
		}
		
	});	
});

