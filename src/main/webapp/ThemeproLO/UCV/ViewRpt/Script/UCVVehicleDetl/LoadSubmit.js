$(document).ready(function () {
	

	$("#UCVD_PROPNO").val($("#PrMs6").val());
	$("#UCVD_ALTERPROPNO").val($("#PrMs5").val());
	
	if($("#DMY5").val().split("|")[2]=="Vendor")
	{
	  $(".GoBack").hide();
	}
	
	/*$("#TVRL_REFNO").attr("value",$("#PrMs5").val())
	$("#TRPU_UNIDID").val($("#PrMs6").val());
	$("#TRPU_ALTUNIQID").attr("value",$("#PrMs5").val())
	$("#TDSU_REFNO").attr("value",$("#PrMs5").val())*/

	GetCategory();
	
	var DATA = $("#UCVD_ALTERPROPNO").val()+"|UCVD_ALTERPROPNO" ;

	FormDataFromDB("LSW_TUCVVEHICLEDETL","UCVD_", "UCVDDBfields", DATA);
	
    $("#heading1 a").attr("data-load","Yes");
   
   /* var DATA = $("#heading1 a").attr("data-aria").split("|")[2];
    DATA = $("#"+DATA).val()
    DATA=DATA.substring(9);
	if(DATA=="VAL1")
		{
		GetPropAddress();
		}
	else
		{
		 GetPropIIAddress()
		}*/

	
	// Add Property Start
	
	/*
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
	   
	   */
	   
	   		
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
		
		
		/*var xml=UI_getdata($("#PrcsID").val(),$("#PrMs6").val(),$("#PrMs5").val(),"Valuation","","LSW_SCHKPROPERTY");
		
		if($(xml).find("RESULT").text()!="Yes")
		{
			alert($(xml).find("RESULT").text());
			var RedirectURL=""
              var   PAGENAME="MyApplication"
	          RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME;
               $(location).attr('href',encodeURI(RedirectURL));
			   return false;
		}*/
        
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
		
		if($(this).text() == "Submit")
		{
		//var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds("UCVDMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			  alert("Fill the Mandatory Fields / Document(s)");
			  return false;
			}
		}
         
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];

		var CHKresult=FormDataToDB(tbl,prfx,$("#UCVD_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		
		if(CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
		if($(this).text() == "Submit")
		{
			var xml1=UI_getdata($("#LERP_PRCSID").val(),$("#LERP_PROPERTYNO").val(),"","","","LSW_SCHKVENDORCOMP")
             var VENCOMSTA=$(xml1).find('RESULT').text()
			 if(VENCOMSTA=="YES")
			 {
				 alert($(xml1).find('alert').text())
				 var ACCORD=''
		          ACCORD=$("#PrMs3").val()
		        RedirectURL=""
	 
	           var   PAGENAME="UCVViewRpts"
	          RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9=FormPageTab1"+"&PrMs10="+$("#PrMs10").val()+"&PrMs3="+ACCORD+"&PrMs1="+$("#PrMs1").val();
               $(location).attr('href',encodeURI(RedirectURL));
			 }
			else
			{
			var xml=UI_getdata($("#UCVD_PRCSID").val(),$("#UCVD_ALTERPROPNO").val(),"VALUER",$("#LogUsr").val(),"","LSW_SSTATUSUPDATE")
			
			var xml=UI_getdata($("#UCVD_PRCSID").val(),$("#UCVD_ALTERPROPNO").val(),"","","","LSW_SCHKMUSTINSERTDATA")
          //  RedirectURL = window.location.origin+"/TPLSW/MyApplication"
		//	$(location).attr('href',encodeURI(RedirectURL));
		// window.history.back();
		  var ACCORD=''
		  ACCORD=$("#PrMs3").val()
		  RedirectURL=""
	  //   RedirectURL = document.referrer+"&PrMs3="+ACCORD;
	 //    $(location).attr('href',encodeURI(RedirectURL));
	      var   PAGENAME="UCVViewRpts"
	      RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9=FormPageTab1"+"&PrMs10="+$("#PrMs10").val()+"&PrMs3="+ACCORD+"&PrMs1="+$("#PrMs1").val();
          $(location).attr('href',encodeURI(RedirectURL));
			}
		}
		
	});	
});

