function GridControlDetailDEDUBEGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
	   { targets: 0, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="DEGR_LONTYPE'+rowno+'" style="width:150px"  name="DEGR_LONTYPE'+rowno+'"  class="form-control DSVLBL form-control DEGRDBfields">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=DEGR_LONTYPE'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=DEGR_LONTYPE'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="DEGR_AGREEMENTNO'+rowno+'" style="width:200px" data-field="DEGR_AGREEMENTNO'+rowno+'|Percentage" name="DEGR_AGREEMENTNO'+rowno+'" data-item="Percentage" data-total="EGCD_FINYRTOT" maxlength="3" class="form-control DSVLBL NoSpecialChar IsNumberFields form-control DEGRDBfields">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=DEGR_AGREEMENTNO'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=DEGR_AGREEMENTNO'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 { targets: 2, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="DEGR_LONAMT'+rowno+'" style="width:200px"  data-item="LonAmt" name="DEGR_LONAMT'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="DEGR_LONAMT" maxlength="15" class="form-control DSVLBL NoSpecialChar IsCURCommaFields form-control DEGRDBfields">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=DEGR_LONAMT'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=DEGR_LONAMT'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
							
				         } 
						 },
						 { targets: 3, "render": function ( data, type, row, meta ) {                            
					 		if(row[9] == "POSIDEX" && row[10] == "Yes")
			 				{
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="DEGR_POS'+rowno+'" style="width:150px" name="DEGR_POS'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" maxlength="15" data-total="DEGR_POS" class="form-control POS IsCURCommaFields form-control DEGRDBfields">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=DEGR_POS'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=DEGR_POS'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML; 
							}
                            else
                            {
                                var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="DEGR_POS'+rowno+'" style="width:150px" name="DEGR_POS'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" maxlength="15" data-total="DEGR_POS" class="form-control NoSpecialChar DSVLBL IsCURCommaFields form-control DEGRDBfields">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=DEGR_POS'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=DEGR_POS'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML; 
                            }	
									
									
						  } 
					 },
					 { targets: 4, "render": function ( data, type, row, meta ) {                            
				 			
						 var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="DEGR_MOB'+rowno+'" style="width:100px" name="DEGR_MOB'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="DEGR_MOB" maxlength="15" class="form-control NoSpecialChar DSVLBL IsCURCommaFields form-control DEGRDBfields">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=DEGR_MOB'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=DEGR_MOB'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   		
								
					  } 
				 },
						 { targets: 5, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="DEGR_NOOFBOUNCE'+rowno+'" style="width:100px" name="DEGR_NOOFBOUNCE'+rowno+'" data-item="Average" maxlength="15" class="form-control NoSpecialChar DSVLBL form-control DEGRDBfields  ">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=DEGR_NOOFBOUNCE'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=DEGR_NOOFBOUNCE'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
									
						  } 
					 },
					 
					 { targets: 6, "render": function ( data, type, row, meta ) {                            
				 			
						 var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="DEGR_CURRESTATUS'+rowno+'" style="width:100px" name="DEGR_CURRESTATUS'+rowno+'" data-item="Average" maxlength="15" class="form-control NoSpecialChar DSVLBL form-control DEGRDBfields ">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=DEGR_CURRESTATUS'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=DEGR_CURRESTATUS'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   		
								
					  } 
				 },
				{ targets: 7, "render": function ( data, type, row, meta ) {                            
				 			if(row[10] == "Yes")
			 				{
						 var rowno = meta.row;	 
						 var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" id="DEGR_EXISTINGCUS'+rowno+'" name="DEGR_EXISTINGCUS'+rowno+'">';
	       	       			HTML = HTML + '<option value="">Select</option>';
	       	       			HTML = HTML + '<option value="Yes">Yes</option>';
	       	       		    HTML = HTML + '<option value="No">No</option></span>'; 
								 
                         var htmldata = $(HTML);
                         
       	       			   $(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

       	  	             return htmldata[0].outerHTML; 
							}
                        else
                           {
                             var rowno = meta.row;
							  var HTML = '';
							  var htmldata = $(HTML);
                         
       	       			   //$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

       	  	             return ''; 
                           }	
								
					  } 
				 },
					 { targets: 8, "render": function ( data, type, row, meta ) {                            
				 			
						 var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="DEGR_CUSID'+rowno+'" style="width:100px" name="DEGR_CUSID'+rowno+'" data-item="Average" maxlength="15" class="form-control DSVLBL  DEGRDBfields ">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=DEGR_CUSID'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=DEGR_CUSID'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   		
								
					  } 
				 },
					 { targets: 9, "render": function ( data, type, row, meta ) {                            
				 			
						 var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="DEGR_DIFFER'+rowno+'" style="width:100px" name="DEGR_DIFFER'+rowno+'" data-item="Average" maxlength="15" class="form-control DSVLBL  DEGRDBfields ">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=DEGR_DIFFER'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=DEGR_DIFFER'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   		
								
					  } 
				 },
				 { targets: 10, "render": function ( data, type, row, meta ) {                            
				 			
						 var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="DEGR_EXSTATUS'+rowno+'" style="width:100px" name="DEGR_EXSTATUS'+rowno+'" data-item="Average" maxlength="15" class="form-control DSVLBL  DEGRDBfields ">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=DEGR_EXSTATUS'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=DEGR_EXSTATUS'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   		
								
					  } 
				 },
				  { targets: 11, "render": function ( data, type, row, meta ) {                            
				 			
						 var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="DEGR_VALUAMT'+rowno+'" style="width:100px" name="DEGR_VALUAMT'+rowno+'" data-item="Average" maxlength="15" class="form-control IsCURCommaFields DSVLBL DEGRDBfields ">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=DEGR_VALUAMT'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=DEGR_VALUAMT'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   		
								
					  } 
				 }
				
			],
         "fnDrawCallback": function (oSettings) {
        }
        });
}

function CheckDedupe(HTML)
{
	var Cheque=$(HTML).find("input[name='APDU_DUPEVERITY']"). val();
	
	if(Cheque=="Initiated")
		{
		  $(HTML).find(".APDU_DUPEVERITY").text('Dedupe Initiated')
		  $(HTML).find(".APDU_DUPEVERITY").addClass("btn-GrnInplain");	
		  $(HTML).find(".APDU_DUPEVERITY").removeClass("btn-yelInplain");
		  $(HTML).find(".APDU_DUPEVERITY").removeClass("btn-RedInplain"); 
		}
	else if(Cheque=="Failed")
		{
		  $(HTML).find(".APDU_DUPEVERITY").text('Dedupe Failed')
		  $(HTML).find(".APDU_DUPEVERITY").removeClass("btn-GrnInplain");	
		  $(HTML).find(".APDU_DUPEVERITY").removeClass("btn-yelInplain");
		  $(HTML).find(".APDU_DUPEVERITY").addClass("btn-RedInplain"); 
		}
}



$(document).on("change", ".POS", function() {

	var LoanAmt = $($(this).closest('td')[0]).prev().find('input').val().replace(/,/g,'');
    var POS = $(this).val().replace(/,/g,'');
	if(parseFloat(LoanAmt) < parseFloat(POS))
	{
		alert('POS amount can not be greater than loan amount')
		$(this).val('')
		return false;
	}

	});


/*

function GetDedupe()
{
  var row=$($('.APPDE').find(event.target).closest('.DYNROW')[0]).attr('data-row');	
	DedupeChk('APDU_CUSID'+$(this).closest('.DYNROW').attr('data-row'),'BTNDEDUPEGRD'+$(this).closest('.DYNROW').attr('data-row'),'APDU_DUPEVERITY'+$(this).closest('.DYNROW').attr('data-row'))
}
*/

/*
function GetDedupe(param1,param2,param3,param4,param5,spname,DBSrc)
{	   
	   var OP="";	  
	   $.ajax({
        url: "/TPLSW/UI_GetData",
        data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5,spname: spname,DBSrc:DBSrc,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
        async: true,
        //dataType: "json",
        type: 'POST',
        success: function OnSuccess_submit(xml1) {
     	   	
				if(	$(xml1).find("a").text() != "")
				{
				OP=xml1;
				}
				else
				{
				OP="Success"	
				}
				//ajaxindicatorstop();
     },
     error: function (xml1)
     {
			//alertify.alert(LoadFrmXML("V0126"));
				window.alert(LoadFrmXML("V0126"));
			OP="Fail";
			//ajaxindicatorstop();
     }
                           
        
	   });     
	  // ajaxindicatorstop();
	   return OP; 
}*/