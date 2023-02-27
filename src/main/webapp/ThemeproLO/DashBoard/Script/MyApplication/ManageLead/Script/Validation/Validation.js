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
	 var CusType=$("input[name='LPOP_CUSTYPE']:checked"). val();
	  if(CusType=="Non-Individual")
		  {
		   $(".CONS").show();
		   $(".CONS").val('');
		   $("#LPOP_CONSTITUTION").parent().next().find(".MndtryAstr").html("*");
		   $("#LPOP_CONSTITUTION").addClass('LPOPMndtry');
		   //$(".PROP").val('');
		   //$(".PROP").show();
		   //$(".PROP").val('');
		   
		  }
	  else
		  {
		   $(".CONS").hide();
		   $("#LPOP_CONSTITUTION").parent().next().find(".MndtryAstr").html("");
		   $("#LPOP_CONSTITUTION").removeClass('LPOPMndtry');
		   //(".PROP").hide();
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

function getProductOpt()
{
    var type=$("#LPOP_LONTYPE").val();
	var xml=UI_getdata("Product",type,$("#LPOP_VERTICAL").val(),"","","LSW_SGETPRODVAL");

	$("#LPOP_PRODUCT").material_select("destroy");	
	$("#LPOP_PRODUCT").html("");
	$("#LPOP_PRODUCT").append($(xml).find("RESULT").html());
	$("#LPOP_PRODUCT").material_select();	
}




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
 		var SubLoanType = UI_getdata("LONSUBTYPE",$("#LPOP_LONTYPE").val(),"","","","LSW_SGETPRODVAL");

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
  var Branch=UI_getdata(branch,$("#LogUsr").val(),$("#LPOP_VERTICAL").val(),"","","LSW_SGETBENCH")
  $("#LPOP_BRANCH").append($(Branch).find("RESULT").html());
  $("#LPOP_BRANCH").val($("#BRID").val())
  $("#LPOP_BRID").val($("#LPOP_BRANCH").find('option:selected').text());
  $('#LPOP_BRANCH').material_select(); 
}  

/*  function getBranch()
 {
	 
	 var branch=$("#DMY4").val().split("|")[0]
	 var Branch=UI_getdata(branch,$("#LogUsr").val(),"","","","LSW_SGETBENCH")
	 $("#LPOP_BRANCH").append($(Branch).find("RESULT").html());
	 $('#LPOP_BRANCH').material_select(); 
 } */
 function CheckSource()
 {
	var SourceBy=$("#LPOP_SOURCEBY").val();
	var BranchID=$("#LPOP_BRANCH").val();
	if(SourceBy=="Direct")
		{
		    $("#LPOP_SOURCENAME").addClass('LPOPMndtry');
			$("#LPOP_SOURCENAME").parent().next().find(".MndtryAstr").html("*");
			$("#LPOP_SOURCENAME").val('');
			$("#LPOP_SOURCENAME").find('option').remove()
			$("#LPOP_SOURCENAME").material_select("destroy");
			$("#LPOP_SOURCENAME").material_select(); 
	 
			var SourceName = UI_getdata("SourceName",$("#LogUsr").val(),"","","","LSW_SGETPRODVAL");
	     	$("#LPOP_SOURCENAME").append($(SourceName).find("RESULT").html());
			$('#LPOP_SOURCENAME').material_select();
			//$(".DIRDISB").hide();
			//$("#LPOP_SOURCENAME").removeClass('LPOPMndtry');
			//$("#LPOP_SOURCENAME").parent().next().find(".MndtryAstr").html("");
        }
	else
	{
		
    $("#LPOP_SOURCENAME").val('');
	$("#LPOP_SOURCENAME").find('option').remove()
	$("#LPOP_SOURCENAME").material_select("destroy");
	$("#LPOP_SOURCENAME").material_select(); 
	 
    var FRWDRESULT=UI_getdata("",SourceBy,BranchID,$("#LogUsr").val(),"","LSW_SGETSRCDATA")
	 $("#LPOP_SOURCENAME").append($(FRWDRESULT).find("FRWDRESULT").html());
	 $('#LPOP_SOURCENAME').material_select(); 
 	}
 }

/* function CheckSource()
{
	var SourceBy=$("#LPOP_SOURCEBY").val();
	var BranchID=$("#LPOP_BRANCH").val();
	
    $("#LPOP_SOURCENAME").val('');
	$("#LPOP_SOURCENAME").find('option').remove()
	$("#LPOP_SOURCENAME").material_select("destroy");
	$("#LPOP_SOURCENAME").material_select(); 
	
   var FRWDRESULT=UI_getdata("",SourceBy,BranchID,"","","LSW_SGETSRCDATA")
	 $("#LPOP_SOURCENAME").append($(FRWDRESULT).find("FRWDRESULT").html());
	 $("#LPOP_SOURCENAME").material_select(); 
	
} */

/* function CheckDirect()
{
	 var SourceBy=$("#LPOP_SOURCEBY").val()
     if(SourceBy=="Direct")
		{
		    $("#LPOP_SOURCENAME").addClass('LPOPMndtry');
			$("#LPOP_SOURCENAME").parent().next().find(".MndtryAstr").html("*");
			$("#LPOP_SOURCENAME").val('');
			$("#LPOP_SOURCENAME").find('option').remove()
			$("#LPOP_SOURCENAME").material_select("destroy");
			$("#LPOP_SOURCENAME").material_select(); 
	 
			var SourceName = UI_getdata("SourceName",$("#LogUsr").val(),"","","","LSW_SGETPRODVAL");
	     	$("#LPOP_SOURCENAME").append($(SourceName).find("RESULT").html());
			$('#LPOP_SOURCENAME').material_select();
			//$(".DIRDISB").hide();
			//$("#LPOP_SOURCENAME").removeClass('LPOPMndtry');
			//$("#LPOP_SOURCENAME").parent().next().find(".MndtryAstr").html("");
        }
       else
      {
         $(".DIRDISB").show();
         $("#LPOP_SOURCENAME").addClass('LPOPMndtry');
         $("#LPOP_SOURCENAME").parent().next().find(".MndtryAstr").html("*");
      } 
}
 */

function getPrdVal()
{

var PrdType = UI_getdata("PRODUCT","","","","","LSW_SGETPRODVAL");

	$("#LDIN_PRODUCT").html("")
	$("#LDIN_PRODUCT").append($(PrdType).find("RESULT").html());
//	document.getElementById("LDIN_PRODUCT").options[2].disabled=true
	
	 $('#LDIN_PRODUCT').material_select(); 
	
}

function getStatus()
{

var StatusType = UI_getdata("STATUS","","","","","LSW_SGETPRODVAL");

	$("#TEST_STATUS").html("");
	$("#TEST_STATUS").append($(StatusType).find("RESULT").html()); 
	 $('#TEST_STATUS').material_select(); 
	 
}	

function getConstitution()
{

var StatusType = UI_getdata("Constitution","","","","","LSW_SGETPRODVAL");

	$("#LPOP_CONSTITUTION").html("");
	$("#LPOP_CONSTITUTION").append($(StatusType).find("RESULT").html()); 
	 $('#LPOP_CONSTITUTION').material_select(); 
	
}	
 
/*  function FindConstDropDown()
{
	var stm=$("#DMY14").val()	
	var obj= JSON.parse(stm)
	
	
	$("#LPOP_CONSTITUTION").empty();
			$("#LPOP_CONSTITUTION").val('');			
			$("#LPOP_CONSTITUTION").material_select();
	
	/* 	$("#LBSI_SOURCBY").empty();
			$("#LBSI_SOURCBY").val('');			
			$("#LBSI_SOURCBY").material_select(); 
	
	//$("#CoAppConsti").html("")
//	$("#LBSI_CONSTITUTION").append('<option value="" selected>--Select--</option>') 
    
    $("#LPOP_CONSTITUTION").append('<option value="" selected>--Select--</option>') 	
	$("#LPOP_CONSTITUTION").append(obj.Constitution);
	$("#LPOP_CONSTITUTION").material_select();
 $("#LBSI_SOURCBY").append('<option value="" selected>--Select--</option>') 
    $("#LBSI_SOURCBY").append(obj.SRCBY);
	$("#LBSI_SOURCBY").material_select() ;
}*/
 

function ChangeProduct()
{
	
	var Data1 =$($("#LPOP_PRODUCT").find('active').prevObject["0"].selectedOptions).find('option').prevObject[0].text
	$("#LPOP_PRDID").val(Data1)
	if($("#LPOP_PRODUCT").val()=="HE02")
	{
		$('input:radio[name=LPOP_CUSTYPE]')[1].checked = true;
		
		   $(".CONS").show();
		   $(".CONS").val('');
		   $("#LPOP_CONSTITUTION").parent().next().find(".MndtryAstr").html("*");
		   $("#LPOP_CONSTITUTION").addClass('LPOPMndtry');
		
		
		$('input[name="LPOP_CUSTYPE"]').attr("disabled",true)
		
		$("#LPOP_SOURCBY").val('Direct')
        $("#LPOP_SOURCBY").material_select("destroy");	
	    $("#LPOP_SOURCBY").material_select();
		
		$("#LPOP_LONTYPE").val('Existing Loans')
        $("#LPOP_LONTYPE").material_select("destroy");	
	    $("#LPOP_LONTYPE").material_select();
		
		
		var SubLoanType = UI_getdata("LONSUBTYPE",$("#LPOP_LONTYPE").val(),"","","","LSW_SGETPRODVAL");

 		$("#LPOP_SUBLONTYPE").html("")
 		$("#LPOP_SUBLONTYPE").append($(SubLoanType).find("RESULT").html());
 		$('#LPOP_SUBLONTYPE').material_select();
		
		
		
		$("#LPOP_SUBLONTYPE").val('Normal top-up')
        $("#LPOP_SUBLONTYPE").material_select("destroy");	
	    $("#LPOP_SUBLONTYPE").material_select();
	
		$('.PROIIDROP').find('.select-dropdown').attr('disabled',true)
		
		 //Direct
		 $(".DIRDISB").hide();
         $("#LPOP_SOURCENAME").removeClass('LPOPMndtry');
         $("#LPOP_SOURCENAME").parent().next().find(".MndtryAstr").html("");
		 
	//Existing Loans	
	$(".SUBLON").hide();
    $(".PRIME").hide();
    $(".Grid").hide();	
    $("#LPOP_PRIMLONID").val('');
    $("#LPOP_PRIMLONID").removeClass('LPOPMndtry');
    $("#LPOP_SUBLONTYPE").removeClass('LPOPMndtry');
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
function GridControlDetailLGRIGRID(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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

            { targets: 0, "render": function ( data, type, row, meta ) {                            	
                      var rowno = TableID+meta.row;	
                      var HTML =	'<span id=""> <img src="ThemeproLO/Common/Images/Delete_Img.png"  data-tableid="Table3"" class="DelGridrow" title="Delete" attr-Upd="APAG_ACTION'+rowno+'"  width="20" height="20"/>';
                         '</span>';		 
                         return HTML;
                         } 
                		 },
            
            {
                targets: 1,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:200px" id="LGRI_NAME' + rowno + '"  name="LGRI_NAME' + rowno + '" maxlength="25" class="form-control GCLR IsAlphaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=LGRI_NAME' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=LGRI_NAME' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 2,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:100px" id="LGRI_SHAREHOLD' + rowno + '" data-field="LGRI_SHAREHOLD'+rowno+'|Percentage"  name="LGRI_SHAREHOLD' + rowno + '" maxlength="5" class="form-control IsNumberFields GCLR IsPercentageFld NoSpecialChar">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=LGRI_SHAREHOLD' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=LGRI_SHAREHOLD' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            { targets: 3, "render": function ( data, type, row, meta ) {                            
	 			
   			 var rowno = meta.row;		 
   		 		var HTML =	'<span><input type="radio" class="custom-control-input GCLR CBSIDBfields" value="Yes" id="ACTIONY'+rowno+'" name="LGRI_BRNIOWNER'+rowno+'"><label class="custom-control custom-control-label" for="ACTIONY'+rowno+'">Yes</label>';			 
   		 		HTML = HTML + '<input type="radio" class="custom-control-input GCLR CBSIDBfields" value="No" id="ACTIONN'+rowno+'" name="LGRI_BRNIOWNER'+rowno+'"><label class="custom-control custom-control-label" for="ACTIONN'+rowno+'">No</label></span>';			  
   		 		
   		 		var htmldata = $(HTML);
   					
   					$(htmldata).find('[name=LGRI_BRNIOWNER'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

   					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
   					//alert(htmldata[0].outerHTML);
   					
   		        return htmldata[0].outerHTML;   		
   					
   		         } 
   				 },
   				{ targets: 4, "render": function ( data, type, row, meta ) {                            
   		 			
   				 var rowno = meta.row;		 
   			 		var HTML =	'<span><input type="radio" class="custom-control-input GCLR CBSIDBfields" value="Yes" id="STRY'+rowno+'" name="LGRI_LONSTRU'+rowno+'"><label class="custom-control custom-control-label" for="STRY'+rowno+'">Yes</label>';			 
   			 		HTML = HTML + '<input type="radio" class="custom-control-input GCLR CBSIDBfields" value="No" id="STRN'+rowno+'" name="LGRI_LONSTRU'+rowno+'"><label class="custom-control custom-control-label" for="STRN'+rowno+'">No</label></span>';			  
   			 		
   			 		var htmldata = $(HTML);
   						
   						$(htmldata).find('[name=LGRI_LONSTRU'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

   						//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
   						//alert(htmldata[0].outerHTML);
   						
   			        return htmldata[0].outerHTML;   		
   						
   			         } 
   					 }
                    /*  { targets: 5, "render": function ( data, type, row, meta ) {                            
     							var rowno = meta.row;		 
     					  		var HTML =	'<span><input type="checkbox" class="custom-control-input GCLR" value="'+data+'" name="LGRI_KYC'+rowno+'" id="LGRI_KYC'+rowno+'">';			 
     					  		HTML = HTML + '<label class="custom-control-label GridLabel" for="LGRI_KYC'+rowno+'"></label></span>';			  
     					  		    
     					  		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
     					  		
     					  		var htmldata = $(HTML);
     					 			
     					 			$(htmldata).find('[name=LGRI_KYC'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
     					 			
     						 return htmldata[0].outerHTML;
     					  		
     					  		
     					  			 return HTML;
     	     			    } 
     	     		     } */
        ],
        "fnDrawCallback": function(oSettings) {
        }
    });
}

 
function LEADINIT()
{
	
	
     var Code="C008";
     var NAME="WFINIT";
     var OldPrcsID= "";
     var SPNAME="";
     $.ajax({
     
       url: "/TPLSW/WFINITV1",
       //dataType: "json",
       data: {CODE : Code,NAME : NAME,OldPrcsID : OldPrcsID,SPNAME : SPNAME,Prvnt : $("#Prvnt").val()},
       async: true,      
       type: "POST",
       success: function(res)     {
                   
       if (res.split("~")[0] == "Workflow Initiated")
         { 

        var xml = submitdata("LPOP"+"DBfields");
	    var output=UI_getdata(xml,res.split("~")[1],$("#LPOP_LEADID").val(),$("#LPOP_LNAMT").val(),"","LSW_SLEADINITINS1")
	   if($(output).find("RESULT").text() == "SUCCESS")
	    {
		
		$("#TEST_LEADID").val($("#LPOP_LEADID").val());
	    $('#TEST_LEADID').next().addClass('active');
		$("#TEST_LEADID").val($("#TEST_LEADID").val());
		$("#TEST_PRCSID").val($("#TEST_LEADID").val());
        $("#TEST_AMOUNTREQUIREMENT").val($("#LPOP_LNAMT").val());
	    $('#TEST_AMOUNTREQUIREMENT').next().addClass('active');
		$("#LeadPopupClose").click();
		$(location).attr('href',window.location.origin + "/TPLSW/ManageLead?PrcsID="+res.split("~")[1]+"&ActvID="+res.split("~")[2]+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1&PrMs3=NEW");
		}
	    else
	    {
		   alert($(output).find("RESULT").text());
		   return;
	    }          
        } 
       else
        {
        alert("Flow Initiation Failed");
        }
           //console.log(res)
       },
       error: function(res) {
       
        alert("Flow Initiation Failed");
           }
   });

}
function ChkAmt(){
	var lnamt=$("#LPOP_LNAMT").val();
	if(lnamt<=0)
	{
		$("#LPOP_LNAMT").val('');
		alert("Kindly Enter Greater Than 0");
	}
}
function GetSubLoan()
{
	var LnType=$("#LPOP_LONTYPE").val();
	var xml=UI_getdata("SUBLOAN",LnType,"","","","LSW_SGETPRODVAL");
	
	$("#LPOP_SUBLONTYPE").material_select("destroy");	
	$("#LPOP_SUBLONTYPE").html("");
	$("#LPOP_SUBLONTYPE").append($(xml).find("RESULT").html());
	$("#LPOP_SUBLONTYPE").material_select();	
}

function ChkPrvDt()
{
	var NCom=$("#TEST_NCOMDOB").val();
	var xml=UI_getdata($("#TEST_LEADID").val(),NCom,"","","","LSW_SLEADCHKDATE");
	$("#TEST_PRVDT").val($(xml).find("PRVDT").html());
}

function Checkconstion()
{
	 var CusType=$("input[name='LPOP_CUSTYPE']:checked"). val();
	  if(CusType=="Non-Individual")
	  {
		  
		   $(".PROP").show();
		   $(".PROP").val('');
	var pro=$("#LPOP_CONSTITUTION").val();
	if(pro=="Proprietorship")
	{
		  $(".PROP").show();
		  $("#LPOP_PROPRISHIP").parent().next().find(".MndtryAstr").html("*");
		  $("#LPOP_PROPRISHIP").addClass('LPOPMndtry');
	}
	else
	{
		  $(".PROP").hide();
		  $("#LPOP_PROPRISHIP").removeClass('LPOPMndtry');
          $("#LPOP_PROPRISHIP").parent().next().find(".MndtryAstr").html("");
	}
	  }
	  
	  else
	  {
		  $(".PROP").hide();
	  }
}

	function Saveverify()
	{
	$("#HiddenSave").click();
	}
	