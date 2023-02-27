function GridControlDetailMNGDEV (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
 {
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

         'aaData': dtData,
         "aoColumns": dtcolumn,  
         
         "bAutoWidth": false,

         "autoWidth": false,

         'bPaginate': false,

        "aaSorting": [],

        // "pageLength": 5,

         "bDeferRender": true,

         'bInfo': true,

         'bFilter': true,

         "bDestroy": true,

         "bJQueryUI": true,

        //"scrollY": true,

        // "scrollX": "200px",

         "sPaginationType": "full_numbers",

         
         
"aoColumnDefs": [ 
       		   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
       		{
                   targets: 3,
                   "render": function(data, type, row, meta) {
   						var rowno = meta.row;
   						var HTML = '<span><input type="text" disabled id="LEAD_LONNO' + rowno + '"  name="LEAD_LONNO' + rowno + '" maxlength="100" class="form-control IsCURCommaFields form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=LEAD_LONNO' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=LEAD_LONNO' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
                   }
               },
       		{
                   targets: 6,
                   "render": function(data, type, row, meta) {
   						var rowno = meta.row;
   						var HTML = '<span><select class="Gridmdb-select md-form colorful-select GridFld dropdown-primary" onchange="ACTNONCHNG(this,this.value)" id="LEAD_ACTN' + rowno + '" name="LEAD_ACTN' + rowno + '">';
   						HTML = HTML + '<option value="">Select</option>';
   						HTML = HTML + '<option value="Converted">Converted</option>';
   						HTML = HTML + '<option value="Hot">Hot</option>';
   						HTML = HTML + '<option value="Warm">Warm</option>';
   						HTML = HTML + '<option value="Cold">Cold</option>';
   						HTML = HTML + '<option value="Rejected">Rejected</option></select></span>';

   						// $('[name='+name+'][value="'+val+'"]').prop('checked', true);

   						var htmldata = $(HTML);

   						$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

   						return htmldata[0].outerHTML;
   						return HTML;
                   }
               },
               {
                   targets: 7,
                   "render": function(data, type, row, meta) {
   						if(row[6] == "Converted")
   							{
   							var rowno = meta.row;
   							var Addvalue = "";
   							if (data == "")
   		       				{
   		       				data = Addvalue;
   		       				}
   		                    var HTML = '<span><div class="HyperControls "><i class=""></i><a  class="Btxt4 OTCSTATUS1" id="Submit'+ rowno +'" name="Submit'+ rowno +'" data-value="Approve" data-table="TableRR" href="#">Submit</a></div>';
   		                    HTML = HTML+'<img style="display:none;" src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this)" class="" width="35" height="25">';
   		                    HTML = HTML + '<input type="text" style="display:none;" id="LEAD_REMRK'+rowno+'"  name="LEAD_REMRK'+rowno+'" maxlength="10" class="form-control DSVLBL form-control   "></span>'
   		                    
   		                    var htmldata = $(HTML);
   							$(htmldata).find('[name=LEAD_REMRK'+rowno+']').attr("value",data);
   							return htmldata[0].outerHTML;
   							return HTML;

   		           }
   						else if(row[6] !=""){
   							var rowno = meta.row;
   							var Addvalue = "";
   							if (data == "")
   		       				{
   		       				data = Addvalue;
   		       				}
   		                    var HTML = '<span><div class="HyperControls " style="display:none;"><i class=""></i><a  class="Btxt4 OTCSTATUS1" id="Submit'+ rowno +'" name="Submit'+ rowno +'" data-value="Approve" data-table="TableRR" href="#">Submit</a></div>';
   		                    HTML = HTML+'<img  src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this)" class="" width="35" height="25">';
   		                    HTML = HTML + '<input type="text" style="display:none;" id="LEAD_REMRK'+rowno+'"  name="LEAD_REMRK'+rowno+'" maxlength="10" class="form-control DSVLBL form-control   "></span>'
   		                    
   		                    var htmldata = $(HTML);
   							$(htmldata).find('[name=LEAD_REMRK'+rowno+']').attr("value",data);
   							return htmldata[0].outerHTML;
   						}
   						else if(row[6]==""){
   							var rowno = meta.row;
   							var Addvalue = "";
   							if (data == "")
   		       				{
   		       				data = Addvalue;
   		       				}
   		                    var HTML = '<span><div class="HyperControls " style="display:none;"><i class=""></i><a  class="Btxt4 OTCSTATUS1" id="Submit'+ rowno +'" name="Submit'+ rowno +'" data-value="Approve" data-table="TableRR" href="#">Submit</a></div>';
   		                    HTML = HTML+'<img style="display:none;" src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this)" class="" width="35" height="25">';
   		                    HTML = HTML + '<input type="text" style="display:none;" id="LEAD_REMRK'+rowno+'"  name="LEAD_REMRK'+rowno+'" maxlength="10" class="form-control DSVLBL form-control   "></span>'
   		                    
   		                    var htmldata = $(HTML);
   							$(htmldata).find('[name=LEAD_REMRK'+rowno+']').attr("value",data);
   							return htmldata[0].outerHTML;
   						}
                   }
               }
           	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 
 }


function ACTNONCHNG(Evnt,val){
	if(val=="Converted"){
		$(Evnt).closest('.tbodytrtd').next().find('div').show()
		$(Evnt).closest('.tbodytrtd').next().find('img').hide()
	}
	else if(val!=""){
		$(Evnt).closest('.tbodytrtd').next().find('div').hide()
		$(Evnt).closest('.tbodytrtd').next().find('img').show()
	}
	else if(val==""){
		$(Evnt).closest('.tbodytrtd').next().find('div').hide()
		$(Evnt).closest('.tbodytrtd').next().find('img').hide()
	}
}


function GetGrdXML(Tbl){
	var XMLHdrID = "Grid"+Tbl
	var XMLTagID="";
	var XML="<Data>";
	var value="";
	
	if($("#"+Tbl).find('.tbodytrtd').text()=="No data available in table"){
		XML+='</row></Data>';
		return;
	}
	for(var j=0;j<$("#"+Tbl).find('.tbodytr').length;j++)
		{
		XML=XML+"<row>"
		for(var i = 0;i<$("#"+XMLHdrID).find('th').length;i++){
			XMLTagID=$($("#"+XMLHdrID).find('th')[i]).text();
			var rowwise = $("#"+Tbl).find('.tbody').find('.tbodytr')[j];
			
			if ($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+XMLTagID+j+']').length > 0){
				//value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+XMLTagID+j+']').val();
				if ($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+XMLTagID+j+']').hasClass("IsCURCommaFields")) {
		            value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+XMLTagID+j+']').val().replace(/,/g, "");
		        }
		        else {

		            value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+XMLTagID+j+']').val();
		 
		        }
			}
			else
	    	{
	    	 value= $($(rowwise).find('.tbodytrtd')[i]).text();
	    	}
			var formxml="<"+XMLTagID+">"+ value  +"</"+XMLTagID+">";
			XML =XML+ formxml
			}
		XML =XML+ "</row>"
		}
	XML =XML+   "</Data>";
	return XML;
}


function CheckCusType()
{
	 var CusType=$("input[name='LDIN_CUSTYPE']:checked"). val();
	  if(CusType=="Non-Individual")
		  {
		   $(".CONS").show();
		   $(".CONS").val('');
		   $("#LDIN_CONSTITUTION").parent().next().find(".MndtryAstr").html("*");
		   $("#LDIN_CONSTITUTION").addClass('LDINMndtry');
		  }
	  else
		  {
		   $(".CONS").hide();
		   $("#LDIN_CONSTITUTION").parent().next().find(".MndtryAstr").html("");
		   $("#LDIN_CONSTITUTION").removeClass('LDINMndtry');
		  }
}


/***function GETDROPDOWNVAL(event)
{ 	
	if (event == "Load")
		{
		if($("#LDIN_PRODUCT").val()=="")
			{$(".DUP").show();}
	 var LoanType = UI_getdata("PRODUCT","","","","","LSW_SGETPRODVAL");

	 $("#LDIN_PRODUCT").html("")
	 $("#LDIN_PRODUCT").append($(LoanType).find("RESULT").html());
	 $(".SUBLON").hide();
    $(".PRIME").hide();
 //   $("#BTNTRIGAPPL").hide();	
    $(".Grid").show();
    $('#LDIN_PRODUCT').material_select();
	
	var Typeofloan = UI_getdata("LONTYPE","","","","","LSW_SGETPRODVAL");
	$("#LDIN_LONTYPE").html("")
	$("#LDIN_LONTYPE").append($(Typeofloan).find("RESULT").html());
	$('#LDIN_LONTYPE').material_select();
	
	
		}
	else if (event == "Page")
		{
		var SubLoanType = UI_getdata("LONSUBTYPE",$("#LDIN_LONTYPE").val(),"","","","LSW_SGETPRODVAL");

		$("#LDIN_SUBLONTYPE").html("")
		$("#LDIN_SUBLONTYPE").append($(SubLoanType).find("RESULT").html());
		$('#LDIN_SUBLONTYPE').material_select();
		$(".Grid").show();
		
		if($(SubLoanType).find("RESULT").html() == '<option value="">Select</option>')
			{ 			
			$(".SUBLON").hide();
			$(".PRIME").hide();
			$(".DUP").show();
			$("#LDIN_SUBLONTYPE").parent().next().find(".MndtryAstr").html("");
			$("#LDIN_SUBLONTYPE").removeClass('LDINMndtry');
			$(".Grid").show();
			//$("#LDIN_SUBLONTYPE").parent().next().find(".MndtryAstr").html("");
			}
		   else
			{
		   	 //$(".SUBLON").show();
			 //$(".PRIME").show();
			 $(".DUP").hide();
			 $("#LDIN_PRIMLONID").val('');
			 $("#LDIN_SUBLONTYPE").parent().next().find(".MndtryAstr").html("*");
			 $("#LDIN_SUBLONTYPE").addClass('LDINMndtry');
			 $("#LDIN_PRIMLONID").next().find(".MndtryAstr").html("*");
			 $("#LDIN_PRIMLONID").addClass('LDINMndtry');
			 $(".Grid").show();
			//$("#LDIN_SUBLONTYPE").parent().next().find(".MndtryAstr").html("*");
			}
		}
	if($("#LDIN_LONTYPE").val()=="Registered Mortgage")
		{
		  $(".PRIME").show();
		 $(".SUBLON").hide();
		 $("#LDIN_PRIMLONID").val('');
		 $("#LDIN_PRIMLONID").next().find(".MndtryAstr").html("*");
		 $("#LDIN_PRIMLONID").addClass('LDINMndtry');
		 $(".Grid").show();
        $('input[name="LDIN_CUSTYPE"]').prop('checked', false);
		 $('input[name="LDIN_CUSTYPE"]').attr("disabled",true)
		 $('.INDIMNDRY').removeClass('LDINMndtry');
		 $('.MNST').find('.MndtryAstr').html("")
		 
		}
	else if($("#LDIN_LONTYPE").val()=="Re-Punch")
	  {
	  $(".PRIME").show();
	  $(".SUBLON").hide();
	  $("#LDIN_PRIMLONID").val('');
	  $("#LDIN_PRIMLONID").next().find(".MndtryAstr").html("*");
	  $("#LDIN_PRIMLONID").addClass('LDINMndtry');
	  $(".Grid").show();
        $('input[name="LDIN_CUSTYPE"]').prop('checked', false);
		 $('input[name="LDIN_CUSTYPE"]').attr("disabled",true)
		 $('.INDIMNDRY').removeClass('LDINMndtry');
		 $('.MNST').find('.MndtryAstr').html("")
	 }
	else if($("#LDIN_LONTYPE").val()=="Fresh Loans")
		{
       $(".SUBLON").hide();
	     $(".PRIME").hide();
	     $(".Grid").hide();	
	    $("#LDIN_PRIMLONID").val('');
	    $("#LDIN_PRIMLONID").removeClass('LDINMndtry');
	    $("#LDIN_SUBLONTYPE").removeClass('LDINMndtry');
		 $('input[name="LDIN_CUSTYPE"]').attr("disabled",false)
		 $('.INDIMNDRY').addClass('LDINMndtry');
		  $('.MNST').find('.MndtryAstr').html("*")
		}
	else if($("#LDIN_LONTYPE").val()=="BT")
	{
  // $(".SUBLON").hide();
    $(".PRIME").hide();
    $(".Grid").hide();	
   $("#LDIN_PRIMLONID").val('');
   $("#LDIN_PRIMLONID").removeClass('LDINMndtry');
  // $("#LDIN_SUBLONTYPE").removeClass('LDINMndtry');
   $('input[name="LDIN_CUSTYPE"]').attr("disabled",false)
	$('.INDIMNDRY').addClass('LDINMndtry');
	$('.MNST').find('.MndtryAstr').html("*")
	}
	else if($("#LDIN_LONTYPE").val()=="Existing Loans")
	{
  // $(".SUBLON").hide();
   $(".PRIME").hide();
   $(".Grid").hide();	
   $("#LDIN_PRIMLONID").val('');
   $("#LDIN_PRIMLONID").removeClass('LDINMndtry');
   $("#LDIN_SUBLONTYPE").removeClass('LDINMndtry');
	$('input[name="LDIN_CUSTYPE"]').attr("disabled",false)
	$('.INDIMNDRY').addClass('LDINMndtry');
	$('.MNST').find('.MndtryAstr').html("*")
	}
}***/

function GETDROPDOWNVAL(event)
 { 	
 if($("#LDIN_PRODUCT").val()!="HE02")
	  {
 	if (event == "Load")
 		{
			 var Product = UI_getdata("PRODUCT","","","","","LSW_SGETPRODVAL");

		 $("#LDIN_PRODUCT").html("")
		 $("#LDIN_PRODUCT").append($(Product).find("RESULT").html());
		 $('#LDIN_PRODUCT').material_select();
 		if($("#LDIN_LONTYPE").val()=="")
 			{$(".DUP").show();}
 	 var LoanType = UI_getdata("LONTYPE","","","","","LSW_SGETPRODVAL");

 	 $("#LDIN_LONTYPE").html("")
 	 $("#LDIN_LONTYPE").append($(LoanType).find("RESULT").html());
 	 $(".SUBLON").hide();
     $(".PRIME").hide();
  //   $("#BTNTRIGAPPL").hide();	
     $(".Grid").show();
 		}
 	else if (event == "Page")
 		{
 		var SubLoanType = UI_getdata("LONSUBTYPE",$("#LDIN_LONTYPE").val(),"","","","LSW_SGETPRODVAL");

 		$("#LDIN_SUBLONTYPE").html("")
 		$("#LDIN_SUBLONTYPE").append($(SubLoanType).find("RESULT").html());
 		$('#LDIN_SUBLONTYPE').material_select();
 		$(".Grid").show();
 		
 		if($(SubLoanType).find("RESULT").html() == '<option value="">Select</option>')
 			{ 			
 			$(".SUBLON").hide();
 			$(".PRIME").hide();
 			$(".DUP").show();
 			$("#LDIN_SUBLONTYPE").parent().next().find(".MndtryAstr").html("");
			$("#LDIN_SUBLONTYPE").removeClass('LDINMndtry');
			$(".Grid").show();
 			//$("#LDIN_SUBLONTYPE").parent().next().find(".MndtryAstr").html("");
 			}
 		   else
			{
		   	 $(".SUBLON").show();
			 $(".PRIME").show();
			 $(".DUP").hide();
			 $("#LDIN_PRIMLONID").val('');
			 $("#LDIN_SUBLONTYPE").parent().next().find(".MndtryAstr").html("*");
			 $("#LDIN_SUBLONTYPE").addClass('LDINMndtry');
			 $("#LDIN_PRIMLONID").next().find(".MndtryAstr").html("*");
			 $("#LDIN_PRIMLONID").addClass('LDINMndtry');
			 $(".Grid").show();
			//$("#LDIN_SUBLONTYPE").parent().next().find(".MndtryAstr").html("*");
			}
 		}
 	if($("#LDIN_LONTYPE").val()=="Registered Mortgage")
		{
		  $(".PRIME").show();
		 $(".SUBLON").hide();
		 $(".CONS").hide();
		 $("#LDIN_PRIMLONID").val('');
		 $("#LDIN_PRIMLONID").next().find(".MndtryAstr").html("*");
		 $("#LDIN_PRIMLONID").addClass('LDINMndtry');
		 $(".Grid").show();
         $('input[name="LDIN_CUSTYPE"]').prop('checked', false);
		 $('input[name="LDIN_CUSTYPE"]').attr("disabled",true)
		 $('.INDIMNDRY').removeClass('LDINMndtry');
		 $('#LDIN_CONSTITUTION').removeClass('LDINMndtry');
		 
		 $('.MNST').find('.MndtryAstr').html("")
		 
		}
 	else if($("#LDIN_LONTYPE").val()=="Re-Punch")
	  {
	  $(".PRIME").show();
	  $(".SUBLON").hide();
	  $(".CONS").hide();
	  $("#LDIN_PRIMLONID").val('');
	  $("#LDIN_PRIMLONID").next().find(".MndtryAstr").html("*");
	  $("#LDIN_PRIMLONID").addClass('LDINMndtry');
	  $(".Grid").show();
         $('input[name="LDIN_CUSTYPE"]').prop('checked', false);
		 $('input[name="LDIN_CUSTYPE"]').attr("disabled",true)
		 $('.INDIMNDRY').removeClass('LDINMndtry');
		 $('#LDIN_CONSTITUTION').removeClass('LDINMndtry');
		 $('.MNST').find('.MndtryAstr').html("")
	 }
 	else if($("#LDIN_LONTYPE").val()=="Fresh Loans" ||$("#LDIN_LONTYPE").val()=="Purchase of property" 
	|| $("#LDIN_LONTYPE").val()=="Grampanchayt property")
 		{
        $(".SUBLON").hide();
 	     $(".PRIME").hide();
 	     $(".Grid").hide();	
 	    $("#LDIN_PRIMLONID").val('');
 	    $("#LDIN_PRIMLONID").removeClass('LDINMndtry');
 	    $("#LDIN_SUBLONTYPE").removeClass('LDINMndtry');
		 $('input[name="LDIN_CUSTYPE"]').attr("disabled",false)
		 $('.INDIMNDRY').addClass('LDINMndtry');
		  $('.MNST').find('.MndtryAstr').html("*")
 		}
 	else if($("#LDIN_LONTYPE").val()=="BT")
	{
   // $(".SUBLON").hide();
     $(".PRIME").hide();
     $(".Grid").hide();	
    $("#LDIN_PRIMLONID").val('');
    $("#LDIN_PRIMLONID").removeClass('LDINMndtry');
   // $("#LDIN_SUBLONTYPE").removeClass('LDINMndtry');
    $('input[name="LDIN_CUSTYPE"]').attr("disabled",false)
	$('.INDIMNDRY').addClass('LDINMndtry');
	$('.MNST').find('.MndtryAstr').html("*")
	}
 	else if($("#LDIN_LONTYPE").val()=="Existing Loans")
	{
   // $(".SUBLON").hide();
    $(".PRIME").hide();
    $(".Grid").hide();	
    $("#LDIN_PRIMLONID").val('');
    $("#LDIN_PRIMLONID").removeClass('LDINMndtry');
    $("#LDIN_SUBLONTYPE").removeClass('LDINMndtry');
	$('input[name="LDIN_CUSTYPE"]').attr("disabled",false)
	$('.INDIMNDRY').addClass('LDINMndtry');
	$('.MNST').find('.MndtryAstr').html("*")
	}
	}
  else
  {
	  if (event == "Load")
 		{
 		if($("#LDIN_LONTYPE").val()=="")
 			{$(".DUP").show();}
 	 var LoanType = UI_getdata("LONTYPE","","","","","LSW_SGETPRODVAL");

 	 $("#LDIN_LONTYPE").html("")
 	 $("#LDIN_LONTYPE").append($(LoanType).find("RESULT").html());
 	 $(".SUBLON").hide();
     $(".PRIME").hide();
  //   $("#BTNTRIGAPPL").hide();	
     $(".Grid").show();
 		}
     $("#LDIN_SUBLONTYPE").val('');
	 $("#LDIN_CONECTNAME").val('');
  }
 }

function getPurposeofLoan()
{
	var opxml = UI_getdata("LONPURPOS","",$("#LDIN_PRODUCT").val(),"","","LSW_SGETPRODVAL");
	$("#LDIN_PURPOSEOFLN").find('option').remove()
	$('#LDIN_PURPOSEOFLN').material_select("destroy"); 
	$("#LDIN_PURPOSEOFLN").val('');
	$("#LDIN_PURPOSEOFLN").append($(opxml).find("RESULT").html());
	$('#LDIN_PURPOSEOFLN').material_select(); 
}


function getBranch()
{
	 
	 var branch=$("#DMY4").val().split("|")[0]
	 var Branch=UI_getdata(branch,$("#LogUsr").val(),"","","","LSW_SGETBENCH")
	 $("#LDIN_BRANCH").append($(Branch).find("RESULT").html());
	 $("#LDIN_BRANCH").val($("#BRID").val())
	 $("#LDIN_BRID").val($("#LDIN_BRANCH").find('option:selected').text());
	 $('#LDIN_BRANCH').material_select(); 
}


function CheckSource()
{
	var SourceBy=$("#LDIN_SOURCBY").val();
	var BranchID=$("#LDIN_BRANCH").val();
	
   $("#LDIN_CONECTNAME").val('');
	$("#LDIN_CONECTNAME").find('option').remove()
	$("#LDIN_CONECTNAME").material_select("destroy");
	$('#LDIN_CONECTNAME').material_select(); 
	
   var FRWDRESULT=UI_getdata("",SourceBy,BranchID,"","","LSW_SGETSRCDATA")
	 $("#LDIN_CONECTNAME").append($(FRWDRESULT).find("FRWDRESULT").html());
	 $('#LDIN_CONECTNAME').material_select(); 
	
}

function CheckDirect()
{
	 var SourceBy=$("#LDIN_SOURCBY").val()
     if(SourceBy=="Direct")
		{
		$("#LDIN_CONECTNAME").val('');
		$("#LDIN_SOURCEID").val('');
		$('#LDIN_CONECTNAME').material_select(); 
        $(".DIRDISB").hide();
        $("#LDIN_CONECTNAME").removeClass('LDINMndtry');
        $("#LDIN_CONECTNAME").parent().next().find(".MndtryAstr").html("");
        }
     else
      {
         $(".DIRDISB").show();
         $("#LDIN_CONECTNAME").addClass('LDINMndtry');
         $("#LDIN_CONECTNAME").parent().next().find(".MndtryAstr").html("*");
      }
}


function getPrdVal()
{

var PrdType = UI_getdata("PRODUCT","","","","","LSW_SGETPRODVAL");

	$("#LDIN_PRODUCT").html("")
	$("#LDIN_PRODUCT").append($(PrdType).find("RESULT").html());
	document.getElementById("LDIN_PRODUCT").options[2].disabled=true
	
	 $('#LDIN_PRODUCT').material_select(); 
}	



function ChangeProduct()
{
	
	var Data1 =$($("#LDIN_PRODUCT").find('active').prevObject["0"].selectedOptions).find('option').prevObject[0].text
	$("#LDIN_PRDID").val(Data1)
	if($("#LDIN_PRODUCT").val()=="HE02")
	{
		$('input:radio[name=LDIN_CUSTYPE]')[1].checked = true;
		
		   $(".CONS").show();
		   $(".CONS").val('');
		   $("#LDIN_CONSTITUTION").parent().next().find(".MndtryAstr").html("*");
		   $("#LDIN_CONSTITUTION").addClass('LDINMndtry');
		
		
		$('input[name="LDIN_CUSTYPE"]').attr("disabled",true)
		
		$("#LDIN_SOURCBY").val('Direct')
        $("#LDIN_SOURCBY").material_select("destroy");	
	    $("#LDIN_SOURCBY").material_select();
		
		$("#LDIN_LONTYPE").val('Existing Loans')
        $("#LDIN_LONTYPE").material_select("destroy");	
	    $("#LDIN_LONTYPE").material_select();
		
		
		var SubLoanType = UI_getdata("LONSUBTYPE",$("#LDIN_LONTYPE").val(),"","","","LSW_SGETPRODVAL");

 		$("#LDIN_SUBLONTYPE").html("")
 		$("#LDIN_SUBLONTYPE").append($(SubLoanType).find("RESULT").html());
 		$('#LDIN_SUBLONTYPE').material_select();
		
		
		
		$("#LDIN_SUBLONTYPE").val('Normal top-up')
        $("#LDIN_SUBLONTYPE").material_select("destroy");	
	    $("#LDIN_SUBLONTYPE").material_select();
	
		$('.PROIIDROP').find('.select-dropdown').attr('disabled',true)
		
		 //Direct
		 $(".DIRDISB").hide();
         $("#LDIN_CONECTNAME").removeClass('LDINMndtry');
         $("#LDIN_CONECTNAME").parent().next().find(".MndtryAstr").html("");
		 
	//Existing Loans	
	$(".SUBLON").hide();
    $(".PRIME").hide();
    $(".Grid").hide();	
    $("#LDIN_PRIMLONID").val('');
    $("#LDIN_PRIMLONID").removeClass('LDINMndtry');
    $("#LDIN_SUBLONTYPE").removeClass('LDINMndtry');
	$('.INDIMNDRY').addClass('LDINMndtry');
	$('.MNST').find('.MndtryAstr').html("*")		
	}
	else
	{
	  $('input[name="LDIN_CUSTYPE"]').attr("disabled",false)	
	  $('.PROIIDROP').find('.select-dropdown').attr('disabled',false)
		
	}
}

function FindConstDropDown()
{
	var stm=$("#DMY14").val()	
	var obj= JSON.parse(stm)
	
	//$("#CoAppConsti").html("")
	$("#LDIN_CONSTITUTION").append(obj.Constitution);
}



function GridControlDetailLPDSGRID(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

    popTableModPageGrid1 = $('#' + TableID).DataTable({
        'aaData': dtData,
        "aoColumns": dtcolumn,
        "bAutoWidth": false,
        "autoWidth": false,
        'bPaginate': false,
        "aaSorting": [],
        // "pageLength": 5,
        "bDeferRender": true,
        'bInfo': true,
        'bFilter': true,
        "bDestroy": true,
        "bJQueryUI": true,
        //"scrollY": true,
        // "scrollX": "200px",
        "sPaginationType": "full_numbers",
       "aoColumnDefs": [{
                "sClass": "dpass",
                "aTargets": jQuery.parseJSON(hideClm)
            },

          
            
            {
                targets: 0,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:200px" id="LPSE_NAME' + rowno + '"  name="LPSE_NAME' + rowno + '" maxlength="25" class="form-control GCLR IsAlphaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=LPSE_NAME' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=LPSE_NAME' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 1,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:100px" id="LPSE_SHAREHOLD' + rowno + '" data-field="LPSE_SHAREHOLD'+rowno+'|Percentage"  name="LPSE_SHAREHOLD' + rowno + '" maxlength="5" class="form-control IsNumberFields GCLR IsPercentageFld NoSpecialChar">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=LPSE_SHAREHOLD' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=LPSE_SHAREHOLD' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            { targets: 2, "render": function ( data, type, row, meta ) {                            
	 			
   			    var rowno = meta.row;		 
   		 		var HTML =	'<span><input type="radio" class="custom-control-input GCLR CBSIDBfields" value="Yes" id="ACTIONY'+rowno+'" name="LPSE_BRNIOWNER'+rowno+'"><label class="custom-control custom-control-label" for="ACTIONY'+rowno+'">Yes</label>';			 
   		 		HTML = HTML + '<input type="radio" class="custom-control-input GCLR CBSIDBfields" value="No" id="ACTIONN'+rowno+'" name="LPSE_BRNIOWNER'+rowno+'"><label class="custom-control custom-control-label" for="ACTIONN'+rowno+'">No</label></span>';			  
   		 		
   		 		var htmldata = $(HTML);
   					
   					$(htmldata).find('[name=LPSE_BRNIOWNER'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

   					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
   					//alert(htmldata[0].outerHTML);
   					
   		        return htmldata[0].outerHTML;   		
   					
   		         } 
   				 },
   				{ targets: 3, "render": function ( data, type, row, meta ) {                            
   		 			
   				 var rowno = meta.row;		 
   			 		var HTML =	'<span><input type="radio" class="custom-control-input GCLR CBSIDBfields" value="Yes" id="STRY'+rowno+'" name="LPSE_LONSTRU'+rowno+'"><label class="custom-control custom-control-label" for="STRY'+rowno+'">Yes</label>';			 
   			 		HTML = HTML + '<input type="radio" class="custom-control-input GCLR CBSIDBfields" value="No" id="STRN'+rowno+'" name="LPSE_LONSTRU'+rowno+'"><label class="custom-control custom-control-label" for="STRN'+rowno+'">No</label></span>';			  
   			 		
   			 		var htmldata = $(HTML);
   						
   						$(htmldata).find('[name=LPSE_LONSTRU'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

   						//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
   						//alert(htmldata[0].outerHTML);
   						
   			        return htmldata[0].outerHTML;   		
   						
   			         } 
   					 }
                    
        ],
        "fnDrawCallback": function(oSettings) {
        }
		
    });
	
}

function Pindetls(idval,state,city)
{
var val=GetPin($(idval).val());

if($(val).find("statename").text()!="")
{
$('#'+state).attr('disabled',true)
$('#'+state).val($(val).find("statename").text());
$('#'+state).next().addClass('active');
}
else
{
$('#'+state).attr('disabled',true)
$('#'+state).val('');
$('#'+state).next().removeClass('active');
$(idval).val('');
}

if($(val).find("Districtname").text()!="")
{
$('#'+city).attr('disabled',true)
$('#'+city).val($(val).find("Districtname").text());
$('#'+city).next().addClass('active');
}
else
{
$('#'+city).attr('disabled',true)
$('#'+city).val('');
$('#'+city).next().removeClass('active');
$(idval).val('');
}
}