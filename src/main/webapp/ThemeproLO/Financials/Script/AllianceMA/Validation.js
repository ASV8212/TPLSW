
function GridControlDetailMAEDGRD(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                    var HTML = '<span><input type="text" style = "width:200px" id="MAED_NAME' + rowno + '"  name="MAED_NAME' + rowno + '" maxlength="25" class="form-control GCLR IsAlphaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=MAED_NAME' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=MAED_NAME' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 2,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:100px" id="MAED_SHAREHOLD' + rowno + '" data-field="MAED_SHAREHOLD'+rowno+'|Percentage"  name="MAED_SHAREHOLD' + rowno + '" maxlength="5" class="form-control IsNumberFields GCLR IsPercentageFld NoSpecialChar">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=MAED_SHAREHOLD' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=MAED_SHAREHOLD' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            { targets: 3, "render": function ( data, type, row, meta ) {                            
	 			
   			 var rowno = meta.row;		 
   		 		var HTML =	'<span><input type="radio" class="custom-control-input GCLR CBSIDBfields" value="Yes" id="ACTIONY'+rowno+'" name="MAED_BRNIOWNER'+rowno+'"><label class="custom-control custom-control-label" for="ACTIONY'+rowno+'">Yes</label>';			 
   		 		HTML = HTML + '<input type="radio" class="custom-control-input GCLR CBSIDBfields" value="No" id="ACTIONN'+rowno+'" name="MAED_BRNIOWNER'+rowno+'"><label class="custom-control custom-control-label" for="ACTIONN'+rowno+'">No</label></span>';			  
   		 		
   		 		var htmldata = $(HTML);
   					
   					$(htmldata).find('[name=MAED_BRNIOWNER'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

   					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
   					//alert(htmldata[0].outerHTML);
   					
   		        return htmldata[0].outerHTML;   		
   					
   		         } 
   				 },
   				{ targets: 4, "render": function ( data, type, row, meta ) {                            
   		 			
   				 var rowno = meta.row;		 
   			 		var HTML =	'<span><input type="radio" class="custom-control-input GCLR CBSIDBfields" value="Yes" id="STRY'+rowno+'" name="MAED_LONSTRU'+rowno+'"><label class="custom-control custom-control-label" for="STRY'+rowno+'">Yes</label>';			 
   			 		HTML = HTML + '<input type="radio" class="custom-control-input GCLR CBSIDBfields" value="No" id="STRN'+rowno+'" name="MAED_LONSTRU'+rowno+'"><label class="custom-control custom-control-label" for="STRN'+rowno+'">No</label></span>';			  
   			 		
   			 		var htmldata = $(HTML);
   						
   						$(htmldata).find('[name=MAED_LONSTRU'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

   						//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
   						//alert(htmldata[0].outerHTML);
   						
   			        return htmldata[0].outerHTML;   		
   						
   			         } 
   					 },
                     { targets: 5, "render": function ( data, type, row, meta ) {                            
     							var rowno = meta.row;		 
     					  		var HTML =	'<span><input type="checkbox" class="custom-control-input GCLR" value="'+data+'" name="MAED_KYC'+rowno+'" id="MAED_KYC'+rowno+'">';			 
     					  		HTML = HTML + '<label class="custom-control-label GridLabel" for="MAED_KYC'+rowno+'"></label></span>';			  
     					  		    
     					  		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
     					  		
     					  		var htmldata = $(HTML);
     					 			
     					 			$(htmldata).find('[name=MAED_KYC'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
     					 			
     						 return htmldata[0].outerHTML;
     					  		
     					  		
     					  			 return HTML;
     	     			    } 
     	     		     }
        ],
        "fnDrawCallback": function(oSettings) {
        }
    });
}
