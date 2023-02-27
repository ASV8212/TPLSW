

function GridControlDetailSALESGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
				var HTML =	'<span><input type="text" disabled id="SALS_MONTH'+rowno+'" style="width:200px"  name="SALS_MONTH'+rowno+'"  class="form-control DSVLBL SALSDBfields form-control">';			 
				HTML = HTML + '</span>'; 
					 
					var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=SALS_MONTH'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=SALS_MONTH'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
		           } 
				 },
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="SALS_AMOUNT'+rowno+'" style="width:200px" data-item="Amount" data-scr="AMOUNT"  data-field="SALS_AMOUNT'+rowno+'|" data-to="SALE_SALESSUM" name="SALS_AMOUNT'+rowno+'"  data-total="SALE_SALESSUM" maxlength="30" class="form-control NoSpecialChar IsNumberFields SALES SALSDBfields IsCURCommaFields form-control ">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=SALS_AMOUNT'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=SALS_AMOUNT'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
		         } 
				 } 


    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}




$(document).on("blur", ".SALES", function() {
	
	var AMOUNTLEN =$(this).closest('.tbody').find('tr').length;
	var Amount = 0;
	var val="";
	var GetDataItem = $(this).attr("data-scr");
	for (i=0;i<AMOUNTLEN;i++)
		{
		val = $($(this).closest('.tbody').find('tr')[i]).find('[data-scr="'+GetDataItem+'"]').val().replace(/,/g,'');
		if (val == "")
		{
		val = 0;
		}
		Amount = parseFloat(Amount) + parseFloat(val);
		}
	
	var toval = $(this).attr('data-to');
	$('input[name="'+toval+'"]').val(CURINRCommaSep(Amount));
	$("#SALE_SALESAVG").val('');
	$('#SALE_SALESAVG').val(CURINRCommaSep(parseFloat(Amount/12).toFixed(2)));
	
});


 