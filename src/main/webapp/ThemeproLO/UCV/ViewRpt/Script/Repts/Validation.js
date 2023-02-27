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
				var HTML =	'<span><input type="text" id="DEGR_LONTYPE'+rowno+'" style=""  name="DEGR_LONTYPE'+rowno+'"  class="form-control  form-control DEGRDBfields">';			 
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
				var HTML =	'<span><input type="text" id="DEGR_AGREEMENTNO'+rowno+'" style="width:100px" data-field="DEGR_AGREEMENTNO'+rowno+'|Percentage" name="DEGR_AGREEMENTNO'+rowno+'" data-item="Percentage" data-total="EGCD_FINYRTOT" maxlength="3" class="form-control  NoSpecialChar IsNumberFields form-control DEGRDBfields">';			 
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
						var HTML =	'<span><input type="text" id="DEGR_LONAMT'+rowno+'" style="width:100px"  name="DEGR_LONAMT'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="DEGR_LONAMT" maxlength="15" class="form-control NoSpecialChar IsCURCommaFields form-control DEGRDBfields">';			 
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
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="DEGR_POS'+rowno+'" style="width:100px" name="DEGR_POS'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" maxlength="15" data-total="DEGR_POS" class="form-control NoSpecialChar IsCURCommaFields form-control DEGRDBfields">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=DEGR_POS'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=DEGR_POS'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
									
						  } 
					 },
					 { targets: 4, "render": function ( data, type, row, meta ) {                            
				 			
						 var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="DEGR_MOB'+rowno+'" style="width:100px" name="DEGR_MOB'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="DEGR_MOB" maxlength="15" class="form-control NoSpecialChar IsCURCommaFields form-control DEGRDBfields">';			 
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
								var HTML =	'<span><input type="text" id="DEGR_NOOFBOUNCE'+rowno+'" style="width:100px" name="DEGR_NOOFBOUNCE'+rowno+'" data-item="Average" maxlength="15" class="form-control NoSpecialChar IsCURCommaFields form-control DEGRDBfields  ">';			 
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
							var HTML =	'<span><input type="text" id="DEGR_CURRESTATUS'+rowno+'" style="width:100px" name="DEGR_CURRESTATUS'+rowno+'" data-item="Average" maxlength="15" class="form-control NoSpecialChar  form-control DEGRDBfields ">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=DEGR_CURRESTATUS'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=DEGR_CURRESTATUS'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   		
								
					  } 
				 }
					 
					,
				 
					 { targets: 7, "render": function ( data, type, row, meta ) {                            
				 			
						 var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="DEGR_CUSID'+rowno+'" style="width:100px" name="DEGR_CUSID'+rowno+'" data-item="Average" maxlength="15" class="form-control   form-control DEGRDBfields ">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=DEGR_CUSID'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=DEGR_CUSID'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   		
								
					  } 
				 }

   
					 
					 
					 ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}


function GridControlReportValuation (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
   	  
		   { "width": "20%", "targets": 0 },
		    { "width": "15%", "targets": 1 },
		  
		    { targets: 2,"width": "15%", "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FIEG_CIBILSCOREI'+rowno+'" value="'+data+'" style="" name="FIEG_CIBILSCOREI'+rowno+'" maxlength="40" class="form-control Btxt10 DSVLBL form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
				
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
	   { targets: 3,"width": "10%", "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FIEG_CIBILSCOREII'+rowno+'" value="'+data+'" style="" name="FIEG_CIBILSCOREII'+rowno+'" maxlength="40" class="form-control Btxt10 DSVLBL form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					

					return htmldata[0].outerHTML;   		
					
		         } 
				 },
		{ "width": "15%", "targets": 4 },				 
		 { targets: 5,"width": "25%", "render": function ( data, type, row, meta ) {                            

			var rowno = meta.row;       			 
			 
			 
	var viewrpt = '<span class="HyperControls">'
   viewrpt = viewrpt + '<a type="button" onclick="GridCibilScrRpt(this)" style="padding-left: 0rem;" class="Btxt4" href="#">View Report</a>'        
   viewrpt = viewrpt + '</span>'
		
var BTN = "";
	
			if (data == "NOT GENERATED")
			 {
				BTN = '<span><button type="button" onclick="GridCIBILValidate(this);" id="GridCIBIL'+rowno+'" style="margin:1rem" class=" waves-effect btn-yelInplain btn-sm">Initiate CIBIL</button></span>' 
			 }
			else  if (data == "GENERATED")
			 {
				BTN = '<span><button type="button"  id="GridCIBIL'+rowno+'" style="margin:1rem" class=" waves-effect btn-GrnInplain btn-sm">CIBIL Initiated</button></span>' 
			 } 
			else  if (data == "FAILED")
			 {
				BTN = '<span><button type="button" onclick="GridCIBILValidate(this);" style="margin:1rem" id="GridCIBIL'+rowno+'" class=" waves-effect btn-RedInplain btn-sm">Failed</button></span>' 
			 } 
			 else  if (data == "REGENERATE")
			 {
				BTN = '<span><button type="button" onclick="GridCIBILValidate(this);" style="margin:1rem" id="GridCIBIL'+rowno+'" class=" waves-effect btn-RedInplain btn-sm">Re-Initiate CIBIL</button></span>' 
			 } 
			 
						 
		var HTML =  '<div>' +  viewrpt + BTN + '</div>';
		
		
		
		var htmldata = $(HTML);
			
return htmldata[0].outerHTML;
         } 
		 }
    	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	 
}



