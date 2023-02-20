/*function GridControlDetailDocumentTEMPLATESView (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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

         "sPaginationType": "full_numbers",

         
         
"aoColumnDefs": [ 
       		   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
      	{ targets: 2, "render": function ( data, type, row, meta ) {                            
   	 		 
    			var rowno = meta.row;	
                    	HTML =	'';	
                      HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35" height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="OKYD_UPLOAD'+rowno+'" hidden="hidden" name="OKYD_UPLOAD'+rowno+'" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
                 return HTML;
             } 
    		 }
            ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 
 }

 */
 
 
 

function GridControlDocumentTEMPLATESView (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': true,

       "aaSorting": [],

        "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,
		 "destroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        
        
"aoColumnDefs": [ 
	    { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
		
		{ targets: 2, "render": function ( data, type, row, meta ) {                            
  	 		 
			var rowno = meta.row;	
                	HTML =	'';	
                  HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35" height="25">';
	    				HTML = HTML + '<input type="text" value="'+data+'" id="OKYD_UPLOAD'+rowno+'" hidden="hidden" name="OKYD_UPLOAD'+rowno+'" class="form-control"/>';
	    						HTML = HTML + '</span>';	
             return HTML;
         } 
		 }
		  ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}


 