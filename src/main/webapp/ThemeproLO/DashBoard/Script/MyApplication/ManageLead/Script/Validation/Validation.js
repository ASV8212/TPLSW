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
	 var CusType=$("input[name='LBSI_CUSTYPE']:checked"). val();
	  if(CusType=="Non-Individual")
		  {
		   $(".CONS").show();
		   $(".CONS").val('');
		   $("#LBSI_CONSTITUTION").parent().next().find(".MndtryAstr").html("*");
		   $("#LBSI_CONSTITUTION").addClass('LBSIMndtry');
		  }
	  else
		  {
		   $(".CONS").hide();
		   $("#LBSI_CONSTITUTION").parent().next().find(".MndtryAstr").html("");
		   $("#LBSI_CONSTITUTION").removeClass('LBSIMndtry');
		  }
}


function GETDROPDOWNVAL(event)
{ 	
	if (event == "Load")
		{
		if($("#LBSI_LONTYPE").val()=="")
			{$(".DUP").show();}
	 var LoanType = UI_getdata("LEAD","","","","","LSW_SGETPRODVAL");

	 $("#LBSI_LONTYPE").html("")
	 $("#LBSI_LONTYPE").append($(LoanType).find("RESULT").html());
	 $(".SUBLON").hide();
    $(".PRIME").hide();
 //   $("#BTNTRIGAPPL").hide();	
    $(".Grid").show();
    $('#LBSI_LONTYPE').material_select();
		}
	else if (event == "Page")
		{
		var SubLoanType = UI_getdata("LONSUBTYPE",$("#LBSI_LONTYPE").val(),"","","","LSW_SGETPRODVAL");

		$("#LBSI_SUBLONTYPE").html("")
		$("#LBSI_SUBLONTYPE").append($(SubLoanType).find("RESULT").html());
		$('#LBSI_SUBLONTYPE').material_select();
		$(".Grid").show();
		
		if($(SubLoanType).find("RESULT").html() == '<option value="">Select</option>')
			{ 			
			$(".SUBLON").hide();
			$(".PRIME").hide();
			$(".DUP").show();
			$("#LBSI_SUBLONTYPE").parent().next().find(".MndtryAstr").html("");
			$("#LBSI_SUBLONTYPE").removeClass('LBSIMndtry');
			$(".Grid").show();
			//$("#LBSI_SUBLONTYPE").parent().next().find(".MndtryAstr").html("");
			}
		   else
			{
		   	 //$(".SUBLON").show();
			 //$(".PRIME").show();
			 $(".DUP").hide();
			 $("#LBSI_PRIMLONID").val('');
			 $("#LBSI_SUBLONTYPE").parent().next().find(".MndtryAstr").html("*");
			 $("#LBSI_SUBLONTYPE").addClass('LBSIMndtry');
			 $("#LBSI_PRIMLONID").next().find(".MndtryAstr").html("*");
			 $("#LBSI_PRIMLONID").addClass('LBSIMndtry');
			 $(".Grid").show();
			//$("#LBSI_SUBLONTYPE").parent().next().find(".MndtryAstr").html("*");
			}
		}
	if($("#LBSI_LONTYPE").val()=="Registered Mortgage")
		{
		  $(".PRIME").show();
		 $(".SUBLON").hide();
		 $("#LBSI_PRIMLONID").val('');
		 $("#LBSI_PRIMLONID").next().find(".MndtryAstr").html("*");
		 $("#LBSI_PRIMLONID").addClass('LBSIMndtry');
		 $(".Grid").show();
        $('input[name="LBSI_CUSTYPE"]').prop('checked', false);
		 $('input[name="LBSI_CUSTYPE"]').attr("disabled",true)
		 $('.INDIMNDRY').removeClass('LBSIMndtry');
		 $('.MNST').find('.MndtryAstr').html("")
		 
		}
	else if($("#LBSI_LONTYPE").val()=="Re-Punch")
	  {
	  $(".PRIME").show();
	  $(".SUBLON").hide();
	  $("#LBSI_PRIMLONID").val('');
	  $("#LBSI_PRIMLONID").next().find(".MndtryAstr").html("*");
	  $("#LBSI_PRIMLONID").addClass('LBSIMndtry');
	  $(".Grid").show();
        $('input[name="LBSI_CUSTYPE"]').prop('checked', false);
		 $('input[name="LBSI_CUSTYPE"]').attr("disabled",true)
		 $('.INDIMNDRY').removeClass('LBSIMndtry');
		 $('.MNST').find('.MndtryAstr').html("")
	 }
	else if($("#LBSI_LONTYPE").val()=="Fresh Loans")
		{
       $(".SUBLON").hide();
	     $(".PRIME").hide();
	     $(".Grid").hide();	
	    $("#LBSI_PRIMLONID").val('');
	    $("#LBSI_PRIMLONID").removeClass('LBSIMndtry');
	    $("#LBSI_SUBLONTYPE").removeClass('LBSIMndtry');
		 $('input[name="LBSI_CUSTYPE"]').attr("disabled",false)
		 $('.INDIMNDRY').addClass('LBSIMndtry');
		  $('.MNST').find('.MndtryAstr').html("*")
		}
	else if($("#LBSI_LONTYPE").val()=="BT")
	{
  // $(".SUBLON").hide();
    $(".PRIME").hide();
    $(".Grid").hide();	
   $("#LBSI_PRIMLONID").val('');
   $("#LBSI_PRIMLONID").removeClass('LBSIMndtry');
  // $("#LBSI_SUBLONTYPE").removeClass('LBSIMndtry');
   $('input[name="LBSI_CUSTYPE"]').attr("disabled",false)
	$('.INDIMNDRY').addClass('LBSIMndtry');
	$('.MNST').find('.MndtryAstr').html("*")
	}
	else if($("#LBSI_LONTYPE").val()=="Existing Loans")
	{
  // $(".SUBLON").hide();
   $(".PRIME").hide();
   $(".Grid").hide();	
   $("#LBSI_PRIMLONID").val('');
   $("#LBSI_PRIMLONID").removeClass('LBSIMndtry');
   $("#LBSI_SUBLONTYPE").removeClass('LBSIMndtry');
	$('input[name="LBSI_CUSTYPE"]').attr("disabled",false)
	$('.INDIMNDRY').addClass('LBSIMndtry');
	$('.MNST').find('.MndtryAstr').html("*")
	}
}


function getBranch()
{
	 
	 var branch=$("#DMY4").val().split("|")[0]
	 var Branch=UI_getdata(branch,$("#LogUsr").val(),"","","","LSW_SGETBENCH")
	 $("#LBSI_BRANCH").append($(Branch).find("RESULT").html());
	 $("#LBSI_BRANCH").val($("#BRID").val())
	 $("#LBSI_BRID").val($("#LBSI_BRANCH").find('option:selected').text());
	 $('#LBSI_BRANCH').material_select(); 
}


function CheckSource()
{
	var SourceBy=$("#LBSI_SOURCBY").val();
	var BranchID=$("#LBSI_BRANCH").val();
	
   $("#LBSI_CONECTNAME").val('');
	$("#LBSI_CONECTNAME").find('option').remove()
	$("#LBSI_CONECTNAME").material_select("destroy");
	$('#LBSI_CONECTNAME').material_select(); 
	
   var FRWDRESULT=UI_getdata("",SourceBy,BranchID,"","","LSW_SGETSRCDATA")
	 $("#LBSI_CONECTNAME").append($(FRWDRESULT).find("FRWDRESULT").html());
	 $('#LBSI_CONECTNAME').material_select(); 
	
}

function CheckDirect()
{
	 var SourceBy=$("#LBSI_SOURCBY").val()
     if(SourceBy=="Direct")
		{
        $(".DIRDISB").hide();
        $("#LBSI_CONECTNAME").removeClass('LBSIMndtry');
        $("#LBSI_CONECTNAME").parent().next().find(".MndtryAstr").html("");
        }
     else
      {
         $(".DIRDISB").show();
         $("#LBSI_CONECTNAME").addClass('LBSIMndtry');
         $("#LBSI_CONECTNAME").parent().next().find(".MndtryAstr").html("*");
      }
}


function FindConstDropDown()
{
	var stm=$("#DMY14").val()	
	var obj= JSON.parse(stm)
	
	//$("#CoAppConsti").html("")
	$("#LBSI_CONSTITUTION").append(obj.Constitution);
}