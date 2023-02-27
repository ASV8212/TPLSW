function  GridEnableControl(popTableModPageGrid1)
{
	popTableModPageGrid1.MakeCellsEditable({
           // "onUpdate": myCallbackFunction,
            "inputCss":'my-input-class',
            "columns": [1,2,3,4,5],
            /*"allowNulls": {
                "columns": [1],
                "errorClass": 'error'
            },*/
            "confirmationButton": { 
                "confirmCss": 'my-confirm-class',
                "cancelCss": 'my-cancel-class'
            },
    		"inputTypes": [
    			{
                    "column":1, 
                    "type": "text",
                    "options":{ }
                },
                {
                    "column":2, 
                    "type": "text",
                    "options":{ }
                },
                {
                	 "column":3, 
                     "type": "radio",
                     "options":[
                         { "value": "Yes", "display": "OWNERYES","name":"OWNER" },
                         { "value": "No", "display": "OWNERNO","name":"OWNER" },
                    
                     ]
                },
                {
                	 "column":4, 
                     "type": "radio",
                     "options":[
                         { "value": "Yes", "display": "LISTYES","name":"LIST" },
                         { "value": "No", "display": "LISTNO","name":"LIST" },
                    
                     ]
                }
            ]
        });
}

function  GridEnableControl_OthrIncome(popTableModPageGrid1)
{
	popTableModPageGrid1.MakeCellsEditable({
           // "onUpdate": myCallbackFunction,
            "inputCss":'my-input-class',
            "columns": [1,2,3,4],
            /*"allowNulls": {
                "columns": [1],
                "errorClass": 'error'
            },*/
            "confirmationButton": { 
                "confirmCss": 'my-confirm-class',
                "cancelCss": 'my-cancel-class'
            },
    		"inputTypes": [
    			{
                    "column":1, 
                    "type": "text",
                    "options":{ }
                },
                {
                    "column":2, 
                    "type": "text",
                    "options":{ }
                },
                {
                    "column":3, 
                    "type": "text",
                    "options":{ }
                },
                {
                	 "column":3, 
                     "type": "radio",
                     "options":[
                         { "value": "Cheque", "display": "CHEQUE","name":"PAYMENTMODE" },
                         { "value": "CASH", "display": "CASH","name":"PAYMENTMODE" },
                    
                     ]
                }
            ]
        });
	
}

function  GridEnableControl_EMPOWERMNT(popTableModPageGrid1){
	popTableModPageGrid1.MakeCellsEditable({
        // "onUpdate": myCallbackFunction,
         "inputCss":'my-input-class',
         "columns": [2],
         /*"allowNulls": {
             "columns": [1],
             "errorClass": 'error'
         },*/
         "confirmationButton": { 
             "confirmCss": 'my-confirm-class',
             "cancelCss": 'my-cancel-class'
         },
 		"inputTypes": [
             {
                 "column":2, 
                 "type": "text",
                 "options":{ }
             }
         ]
     });
}



/*function GridControlDetail (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
          	  
      		 { targets: 1, "render": function ( data, type, row, meta ) {                            

      			var rowno = meta.row;       			 
      			 
      		var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" id="KYCD_DOCNAME'+rowno+'" name="KYCD_DOCNAME'+rowno+'">';
      			HTML = HTML + '<option value="">Select</option>';
      			HTML = HTML + '<option value="PAN">PAN</option>';
      			HTML = HTML + '<option value="Voter ID">Voter ID</option>';
      			HTML = HTML + '<option value="Driving License">Driving License</option>';
      			HTML = HTML + '<option value="Aadhar">Aadhar</option>';
      			HTML = HTML + '<option value="Passport">Passport</option>';
      			HTML = HTML + '<option value="Electricity Bill">Electricity Bill</option>';
      			HTML = HTML + '<option value="Utility Bill">Utility Bill</option></select></span>';
			          			
      			var htmldata = $(HTML);
      			
      			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

 	 return htmldata[0].outerHTML;
               } 
      		 },
      		 
      		{ targets: 2, "render": function ( data, type, row, meta ) {                            
  	 		 
   			var rowno = meta.row;	
   			
   			var Addvalue = $("#KYCD_DOCATTACHMENT").val();
   			
   			if (data == "")
   				{
   				data = Addvalue;
   				}
   			
   		var HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="KYCD_1UPLOAD'+rowno+'"  width="20" height="20"/>';
   		HTML = HTML + '<input style="display:none" id="KYCD_1UPLOAD'+rowno+'" onchange="GridDocFldUpldHndlr(KYCD_UPLOAD'+rowno+',id)" type="file" />';
   			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35" height="25">';
   				HTML = HTML + '<input type="text" value="'+data+'" id="KYCD_UPLOAD'+rowno+'" hidden="hidden" name="KYCD_UPLOAD'+rowno+'" class="form-control"/>';
   						HTML = HTML + '</span>';		 
   		  
   		    	 
   			 return HTML;
            } 
   		 },
      		 
   		 { targets: 4, "render": function ( data, type, row, meta ) {                            
   	 		 
       			var rowno = meta.row;		 
       		var HTML =	'<span><input type="checkbox" class="custom-control-input" value="'+data+'" name="KYCD_OSV'+rowno+'" id="KYCD_OSV'+rowno+'">';			 
       		HTML = HTML + '<label class="custom-control-label GridLabel" for="KYCD_OSV'+rowno+'"></label></span>';			  
       		    
       		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
       		
       		var htmldata = $(HTML);
      			
      			$(htmldata).find('[name=KYCD_OSV'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
      			
   	 return htmldata[0].outerHTML;
       		
       		
       			 return HTML;
                } 
       		 },
      		
      		 { targets: 5, "render": function ( data, type, row, meta ) {                            
		 
      			var rowno = meta.row;		 
      		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields" value="Collected" id="DOCStc'+rowno+'" name="KYCD_DOCSTATUS'+rowno+'"><label class="custom-control-label" for="DOCStc'+rowno+'">Collected</label>';			 
      		HTML = HTML + '<input type="radio" class="custom-control-input CBSIDBfields" value="Deferred" id="DOCStd'+rowno+'" name="KYCD_DOCSTATUS'+rowno+'"><label class="custom-control-label" for="DOCStd'+rowno+'">Deferred</label></span>';			  
      		
      		var htmldata = $(HTML);
  			
  			$(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

  			//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
  			//alert(htmldata[0].outerHTML);
  			
	 return htmldata[0].outerHTML;

               } 
      		 }
      		,
     		 { targets: 6, "render": function ( data, type, row, meta ) {                            
      			
     		var rowno = meta.row;	 
     		var HTML =	'<span><input type="text" id="KYCD_TARGETDT'+rowno+'"  name="KYCD_TARGETDT'+rowno+'" maxlength="10" class="form-control form-control IsNumberFields ISDatefield ">';			 
     		HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>'; 
     			 
     		var htmldata = $(HTML);
  			

			if ($(htmldata).find('[name=KYCD_TARGETDT'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
  			$(htmldata).find('[name=KYCD_TARGETDT'+rowno+']').attr("value",data);

  			
  			return htmldata[0].outerHTML;      		
     			
              } 
     		 }
      		,
    		 { targets: 6, "render": function ( data, type, row, meta ) {                            
     			
    			var rowno = meta.row;	 
    		var HTML =	'<input type="text" id="DOCval'+rowno+'" name="DOCval'+rowno+'" maxlength="100" class="form-control form-control">';			 
    		
    			 
    			 return HTML;
             } 
    		 }
          	
          	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	 
}*/

function GridControlDetail_FINANCIAL(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 1,
                "render": function(data, type, row, meta) {

                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:100px" id="APFD_FINCYRONE' + rowno + '"  name="APFD_FINCYRONE' + rowno + '" maxlength="10" class="form-control form-control  IsNumberFields IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    
                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=APFD_FINCYRONE' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=APFD_FINCYRONE' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 2,
                "render": function(data, type, row, meta) {

                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:100px" id="APFD_FINCYRTWO' + rowno + '"  name="APFD_FINCYRTWO' + rowno + '" maxlength="10" class="form-control form-control  IsNumberFields IsCURCommaFields">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=APFD_FINCYRTWO' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=APFD_FINCYRTWO' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 3,
                "render": function(data, type, row, meta) {

                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:100px" id="APFD_FINCYRTHREE' + rowno + '"  name="APFD_FINCYRTHREE' + rowno + '" maxlength="10" class="form-control form-control  IsNumberFields IsCURCommaFields">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=APFD_FINCYRTHREE' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=APFD_FINCYRTHREE' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            }


        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}

function GridControlDetail_OthrIncome(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
     	 		 
    			var rowno = meta.row;	
          var HTML =	'<span id=""> <img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DelGridrow" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';
             '</span>';		 
             return HTML;
             } 
    		 },   
            

           {
                targets: 1,
                "render": function(data, type, row, meta) {

                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:250px" id="APRD_ADDR' + rowno + '"  name="APRD_ADDR' + rowno + '" maxlength="40" class="form-control form-control">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=APRD_ADDR' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=APRD_ADDR' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 2,
                "render": function(data, type, row, meta) {

                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:100px" id="APRD_RENTPEROD' + rowno + '"  name="APRD_RENTPEROD' + rowno + '" maxlength="10" class="form-control form-control  IsNumberFields ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=APRD_RENTPEROD' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=APRD_RENTPEROD' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 3,
                "render": function(data, type, row, meta) {

                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:100px" id="APRD_MNTHRENT' + rowno + '"  name="APRD_MNTHRENT' + rowno + '" maxlength="10" class="form-control form-control IsNumberFields  IsCURCommaFields">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=APRD_MNTHRENT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=APRD_MNTHRENT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            { targets: 4, "render": function ( data, type, row, meta ) {                            
          		 
      			var rowno = meta.row;		 
      		var HTML =	'<span><input type="radio" class="custom-control-input APFDDBfields" value="Cheque" id="OthrIncmChq'+rowno+'" name="APRD_PAYMNTMODE'+rowno+'"><label class="custom-control-label" for="OthrIncmChq'+rowno+'">Cheque</label>';			 
      		HTML = HTML + '<input type="radio" class="custom-control-input APFDDBfields" value="Cash" id="OthrIncmCs'+rowno+'" name="APRD_PAYMNTMODE'+rowno+'"><label class="custom-control-label" for="OthrIncmCs'+rowno+'">Cash</label></span>';			  
      		
      		var htmldata = $(HTML);
  			
  			$(htmldata).find('[name=APRD_PAYMNTMODE'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

  			//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
  			//alert(htmldata[0].outerHTML);
  			
	 return htmldata[0].outerHTML;

               } 
      		 }


        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}
function GridControlDetail_EMPOWERMNT(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 2,
                "render": function(data, type, row, meta) {

                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "" id="APED_REMARK' + rowno + '"  name="APED_REMARK' + rowno + '" maxlength="300" class="form-control form-control ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=APED_REMARK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=APED_REMARK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}


function GridControlDetail_EMPOWERMNTI(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 2,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:300px" id="APED_REMARK' + rowno + '"  name="APED_REMARK' + rowno + '" maxlength="300" class="form-control MATI form-control ">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=APED_REMARK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=APED_REMARK' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            }
        ],
        "fnDrawCallback": function(oSettings) {
        }
    });
}

function GridControlDetail_REPORT(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
            }
        ],
        "fnDrawCallback": function(oSettings) {
        }
    });
}

function GridControlDetail_ASSET(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                  	 		 
                			var rowno = meta.row;	
                       var HTML =	'<span id=""> <img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DelGridrow" title="Delete" attr-Upd="APAG_ACTION'+rowno+'"  width="20" height="20"/>';
                         '</span>';		 
                         return HTML;
                         } 
                		 }, 
            
            {
                targets: 1,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:350px" id="APAG_ASSTTYP' + rowno + '"  name="APAG_ASSTTYP' + rowno + '" maxlength="30" class="form-control form-control ">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=APAG_ASSTTYP' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=APAG_ASSTTYP' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            { targets: 2, "render": function ( data, type, row, meta ) {                            

      			var rowno = meta.row;       			 
      			 
      		var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" id="APAG_OWNER'+rowno+'" name="APAG_OWNER'+rowno+'">';
      		var PrcsID=$("#APAS_PRCSID").val();
      		var xml=UI_getdata(PrcsID,"","","","","LSW_SGETCUSTOMERNAMES")
      		var CusName=$(xml).find('RESULT').html();	
      		HTML = HTML + '<option value="">Select</option>';
      		HTML = HTML + CusName
      		//$('#LPDT_PROPOWNER').materialSelect();
      	    //$('#LPDT_PERSONS').materialSelect();	
      		
      			var htmldata = $(HTML);
      			
      			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

 	 return htmldata[0].outerHTML;
               } 
      		 },
            {
                targets: 3,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:250px" id="APAG_MRKTVAL' + rowno + '"  name="APAG_MRKTVAL' + rowno + '" maxlength="20" class="form-control form-control IsNumberFields IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=APAG_MRKTVAL' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=APAG_MRKTVAL' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            }
        ],
        "fnDrawCallback": function(oSettings) {
        }
    });
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
                    var HTML = '<span><input type="text" style = "width:200px" id="LPDS_NAME' + rowno + '"  name="LPDS_NAME' + rowno + '" maxlength="25" class="form-control GCLR IsAlphaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=LPDS_NAME' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=LPDS_NAME' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 2,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:100px" id="LPDS_SHAREHOLD' + rowno + '" data-field="LPDS_SHAREHOLD'+rowno+'|Percentage"  name="LPDS_SHAREHOLD' + rowno + '" maxlength="5" class="form-control IsNumberFields GCLR IsPercentageFld NoSpecialChar">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=LPDS_SHAREHOLD' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=LPDS_SHAREHOLD' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            { targets: 3, "render": function ( data, type, row, meta ) {                            
    			
     		   var rowno = meta.row;		 
     	 		var HTML =	'<span><input type="radio" class="custom-control-input GCLR CBSIDBfields" value="Yes" id="OWNERYES'+rowno+TableID+'" name="LPDS_BRNIOWNER'+rowno+'"><label class="custom-control custom-control-label" for="OWNERYES'+rowno+TableID+'">Yes</label>';			 
     	 		HTML = HTML + '<input type="radio" class="custom-control-input GCLR CBSIDBfields" value="No" id="OWNERNO'+rowno+TableID+'" name="LPDS_BRNIOWNER'+rowno+'"><label class="custom-control custom-control-label" for="OWNERNO'+rowno+TableID+'">No</label></span>';			  
     	 		
     	 		var htmldata = $(HTML);
     				
     				$(htmldata).find('[name=LPDS_BRNIOWNER'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

     				//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
     				//alert(htmldata[0].outerHTML);
     				
     	           return htmldata[0].outerHTML;   		
     					
     		    } 
     		},
     		{ targets: 4, "render": function ( data, type, row, meta ) {                            
     					
     				    var rowno = meta.row;		 
     			 		var HTML =	'<span><input type="radio" class="custom-control-input GCLR CBSIDBfields" value="Yes" id="LOANYES'+rowno+TableID+'" name="LPDS_LONSTRU'+rowno+'"><label class="custom-control custom-control-label" for="LOANYES'+rowno+TableID+'">Yes</label>';			 
     			 		    HTML = HTML + '<input type="radio" class="custom-control-input GCLR CBSIDBfields" value="No" id="LOANNO'+rowno+TableID+'" name="LPDS_LONSTRU'+rowno+'"><label class="custom-control custom-control-label" for="LOANNO'+rowno+TableID+'">No</label></span>';			  
     			 		
     			 	    var htmldata = $(HTML);
     						
     						$(htmldata).find('[name=LPDS_LONSTRU'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

     						//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
     						//alert(htmldata[0].outerHTML);
     			        return htmldata[0].outerHTML;   		   							
     				         } 
     						 },
     						{ targets: 5, "render": function ( data, type, row, meta ) {                            
     							var rowno = meta.row;		 
     					  		var HTML =	'<span><input type="checkbox" class="custom-control-input GCLR" value="'+data+'" name="LPDS_KYC'+rowno+'" id="LPDS_KYC'+rowno+'">';			 
     					  		HTML = HTML + '<label class="custom-control-label GridLabel" for="LPDS_KYC'+rowno+'"></label></span>';			  
     					  		    
     					  		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
     					  		
     					  		var htmldata = $(HTML);
     					 			
     					 			$(htmldata).find('[name=LPDS_KYC'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
     					 			
     						 return htmldata[0].outerHTML;
     					  		
     					  		
     					  			 return HTML;
     	     			    } 
     	     		     }
        ],
        "fnDrawCallback": function(oSettings) {
        }
    });
}


function GridControlDetailAPPRLOANGRID(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                    var HTML = '<span><input type="text" style = "width:400px" id="LCDT_INSTNAME' + rowno + '"  name="LCDT_INSTNAME' + rowno + '" maxlength="25" class="form-control DSVLBL  NoSpecialChar">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=LCDT_INSTNAME' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=LCDT_INSTNAME' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            /* {
                targets: 1,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:400px" id="LCDT_LONTYPE' + rowno + '"  name="LCDT_LONTYPE' + rowno + '" maxlength="25"  class="form-control DSVLBL  NoSpecialChar">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=LCDT_LONTYPE' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=LCDT_LONTYPE' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            }, */
            {
                targets: 2,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:150px" id="LCDT_EMI' + rowno + '"  name="LCDT_EMI' + rowno + '" maxlength="25" data-item="EMI" class="form-control DSVLBL IsCURCommaFields NoSpecialChar">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=LCDT_EMI' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=LCDT_EMI' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 3,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:150px" id="LCDT_LONAMT' + rowno + '"  name="LCDT_LONAMT' + rowno + '" maxlength="25" data-item="LoanAmt" class="form-control DSVLBL IsCURCommaFields NoSpecialChar">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=LCDT_LONAMT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=LCDT_LONAMT' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 4,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:100px" id="LCDT_MOB' + rowno + '"  name="LCDT_MOB' + rowno + '" maxlength="25" data-item="MOB" class="form-control DSVLBL  NoSpecialChar">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=LCDT_MOB' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=LCDT_MOB' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:200px" id="LCDT_ENDUSE' + rowno + '"  name="LCDT_ENDUSE' + rowno + '" maxlength="25" class="form-control EndUse NoSpecialChar">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=LCDT_ENDUSE' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=LCDT_ENDUSE' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            }
        ],
        "fnDrawCallback": function(oSettings) {
        }
    });
}


function GridControlDetailENDUSEGRID(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                    var HTML = '<span><input type="text" style = "width:200px" id="AEUG_ENDUSE' + rowno + '" data-item="" name="AEUG_ENDUSE' + rowno + '" maxlength="15" class="form-control DSVLBL IsNumberFields NoSpecialChar">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=AEUG_ENDUSE' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=AEUG_ENDUSE' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 1,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:200px" id="AEUG_POS' + rowno + '" data-item="POS" name="AEUG_POS' + rowno + '" maxlength="15" class="form-control DSVLBL IsNumberFields IsCURCommaFields NoSpecialChar">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=AEUG_POS' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=AEUG_POS' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            }
        ],
        "fnDrawCallback": function(oSettings) {
        }
    });
}

/*
function AccntOnChng(){
	var op = UI_getdata($("#PrcsID").val(),$("#APBD_ACCNTNO").val(),"","","","LSW_SGETACCNTNO1");
	$("#APBD_BANKNAME").val($($(op).find("BNKNAME")[0]).text());
	$('#APBD_BANKNAME').next().addClass('active');
	$("#APBD_ACCNTHLDRNAME").val($($(op).find("ACCTHOLDRNAME")[0]).text());
	$('#APBD_ACCNTHLDRNAME').next().addClass('active');
}*/

function AccntOnChng(){
	
	var ACCTNO=$("#APBD_ACCNTNO").val()

	var op = UI_getdata($("#PrcsID").val(),ACCTNO,"","","","LSW_SGETACCNTNO1");
	$("#APBD_BANKNAME").val($($(op).find("BNKNAME")[0]).text());
	$('#APBD_BANKNAME').next().addClass('active');
	//$("#APBD_ACCNTHLDRNAME").val($($(op).find("ACCTHOLDRNAME")[0]).text());
	//var ACCNAME=$($(op).find("ACCTHOLDRNAME")[0]).text()
	//var ACCLASTNO=  $("#APBD_ACCNTNO").val().substr(-4, 4)
	//  ACCNAME=ACCNAME+' '+ACCLASTNO
	$("#APBD_ACCNTHLDRNAME").val($($(op).find("ACCTNUM")[0]).text());
	$('#APBD_ACCNTHLDRNAME').next().addClass('active');
}

function GridControlDetailFINCSUMGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
				var HTML =	'<span><input type="text" id="APFD_FINCYRDTL'+rowno+'" style=""  name="APFD_FINCYRDTL'+rowno+'"  class="form-control DSVLBL form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=APFD_FINCYRDTL'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=APFD_FINCYRDTL'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="APFD_FINCYRONE'+rowno+'" style="width:100px" data-field="APFD_FINCYRONE'+rowno+'" name="APFD_FINCYRONE'+rowno+'" data-item="Percentage" data-total="EGCD_FINYRTOT" maxlength="3" class="form-control IsCURCommaFields NoSpecialChar DSVLBL IsNumberFields form-control FinYrIncm">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=APFD_FINCYRONE'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=APFD_FINCYRONE'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 { targets: 2, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="APFD_FINCYRTWO'+rowno+'" style="width:100px"  name="APFD_FINCYRTWO'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="EGCD_FINYRTOT" maxlength="15" class="form-control NoSpecialChar DSVLBL IsCURCommaFields form-control FinYrIncm">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=APFD_FINCYRTWO'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=APFD_FINCYRTWO'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
							
				         } 
						 },
						 { targets: 3, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="APFD_FINCYRTHREE'+rowno+'" style="width:100px" name="APFD_FINCYRTHREE'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" maxlength="15" data-total="EGCD_FINYRTOT" class="form-control NoSpecialChar DSVLBL IsCURCommaFields form-control FinYrIncm">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=APFD_FINCYRTHREE'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=APFD_FINCYRTHREE'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
									
						  } 
					 },
					 { targets: 4, "render": function ( data, type, row, meta ) {                            
				 			
						 var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="APFD_CUSID'+rowno+'" style="width:100px" name="APFD_CUSID'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="EGCD_FINYRTOT" maxlength="15" class="form-control NoSpecialChar DSVLBL form-control FinYrIncm">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=APFD_CUSID'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=APFD_CUSID'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   		
								
					  } 
				 },
						 { targets: 5, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="APFD_SCHMID'+rowno+'" style="width:100px" name="APFD_SCHMID'+rowno+'" data-item="Average" maxlength="15" class="form-control NoSpecialChar form-control DSVLBL">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=APFD_SCHMID'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=APFD_SCHMID'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
									
						  } 
					 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}

function GentrateApprNote()
{
	var IOP=window.location.origin;
	
	var PrcsId=$("#PrcsID").val()
	
	var xml=UI_getdata(PrcsId,"","","","","LSW_SGETCUSSCHEME")
       var Scheme=$(xml).find('LODE_SCHEME').text()
    ajaxindicatorstart("Downloading.. Please wait");
	
	var LonType=$("#DMY7").val().split("|")[0]
	LonType=LonType.replace('%','')
	
	var PrcsId=$("#DMY7").val().split("|")[7]
	/*var flname = IOP+LoadFrmXML("RT085")+"&__format=pdf&param1="+PrcsId+"&param2="+Scheme+"&param3="+LonType+"&param4="+$("#DMY7").val().split("|")[8]+"&__filename=ApproveNote-"+$("#DMY7").val().split("|")[7]+".pdf";*/
	var flname = IOP+LoadFrmXML("RT0109")+"&__format=pdf&param1="+PrcsId+"&__filename=CAMUCV_"+$(".FormPageMultiTab li.active").text()+".pdf";
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
			
	$("#AAPR_APROVBTN").val('Yes')		
}

function CheckDocMndtryEndUse(TableID,FldClas,HDR)
{
	  var Doclength=$("#"+TableID).find(".tbodytr").length
	  
	  var RTNVAL="";
	  
	  if(RTNVAL=="")
		  {
	  for(i=0;i<Doclength;i++)
		  {
		  var tdcount=$($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd').length
		   
		  for(j=0;j<tdcount;j++)
			 {
			  if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).length>0)
				  {
          if(j==6){
	           if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j-2]).find('input[type=text]').val()<24){
		          if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[6]).find('input[type=text]').val()=="")
		             {
			          RTNVAL = "End Use is mandatory when MOB is less than 24";
				    		return RTNVAL;
		             }
	              }
                 }
				}
			 }
		  }
		 }
	 return RTNVAL;
}

function GETFIRMDROPDOWNVAL()
{
	var LoanType = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETBRROWERNAME");

	$("#ABFD_FIRMNAME").html("")
	$("#ABFD_FIRMNAME").append($(LoanType).find("RESULT").html());
}

function GETSCHEME()
{
	var Scheme = UI_getdata($("#PrcsID").val(),"","","","","LSW_GETELIGSCHEME");

	$("#APFS_SCHEME").val($(Scheme).find('Scheme').text())

}

function GridControlDetailAPPRRTRFINANC (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
	   
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}
/*
function GetInduestry(FIRM,CATEGORY,CLASS,EVENT,HTML)
{
	
if(EVENT=="Load")	
	{
	  if($(HTML).find("input[name=ABFD_INDUSCATRY]").val() =="Manufacturing")
      {
        $(HTML).find('.ABFD_INDUSCATRY').show()
      }
      else
      {
 	   $(HTML).find('.ABFD_INDUSCATRY').hide()
      }
	  if( $(HTML).find("input[name=ABFD_FIRMNAMEVAL]").val()=="Others")
		 {
		  $(HTML).find('.OTHFIRM').show()
		 }
	  else
		 {
		  $(HTML).find('.OTHFIRM').hide()
		 }
	}
else
	{
	var FIRMID=$(FIRM).attr('id')
	
	if($("#"+FIRMID).val()=="Others")
		{
		 var row = $(FIRM).closest(".DYNROW").length;
         for (i = 0; i < row; i++) {
            var HTML = $(FIRM).closest(".DYNROW")[i];
            $(HTML).find("input[name=ABFD_OTHFIRM]").val('');
            $(HTML).find("input[name=ABFD_OTHFIRM]").next().removeClass('active')
            $(HTML).find('.OTHFIRM').show()
            $(HTML).find("input[name=ABFD_INDUSCATRY]").val('');  
         }
		}
	else
		{
         var FIRM1=$("#"+FIRMID).val()
         var CusID=FIRM1.split('-')[0]
         var EMPID=FIRM1.split('-')[1]

        var xml=UI_getdata($("#PrcsID").val(),EMPID,CusID,"","","LSW_SAPPRNOTBUSDETL")
	
      $("#"+CATEGORY).val($(xml).find('ABFD_INDUSCATRY').text())
 
       var DATA=["ApproveNote2|"];
       var ValuationID=DATA[0].replace("|","")
       var HTML = $(FIRM).closest(".DYNROW");
    //var html1 = $(this).closest(".DYNROW");
    
      var row = $(FIRM).closest(".DYNROW").length;
         for (i = 0; i < row; i++) {
            var HTML = $(FIRM).closest(".DYNROW")[i];
            $(HTML).find("input[name=ABFD_OTHFIRM]").val('');
            $(HTML).find('.OTHFIRM').hide()
    	        if($(HTML).find("input[name=ABFD_INDUSCATRY]").val() =="Manufacturing")
                  {
    	            $(HTML).find('.FBCLR').val('')
                    $(HTML).find('.'+CLASS).show()
                  }
                else
                 {
                   $(HTML).find('.FBCLR').val('')
     	           $(HTML).find('.'+CLASS).hide()
                 }
             }
	}
  }
	//var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SAPPRNOTBUSDETL")	
}

*/

function GetInduestry(FIRM,CATEGORY,CLASS,EVENT,HTML,CONSTITUTION)
{
	
if(EVENT=="Load")	
	  {
	  if($(HTML).find("input[name=ABFD_INDUSCATRY]").val() =="Manufacturing")
      {
        $(HTML).find('.ABFD_INDUSCATRY').show()
      }
      else
      {
 	   $(HTML).find('.ABFD_INDUSCATRY').hide()
      }
	  if( $(HTML).find("input[name=ABFD_FIRMNAMEVAL]").val()=="Others")
		 {
		  $(HTML).find('.OTHFIRM').show()
		   var j=i+1
		   $("#ABFD_CONSTITUTION"+j).attr('disabled',false) 
    		$("#ABFD_CONSTITUTION"+j).material_select();
		 }
	  else
		 {
		  $(HTML).find('.OTHFIRM').hide()
		 }
	}
else
	{
	var FIRMID=$(FIRM).attr('id')
	
	if($("#"+FIRMID).val()=="Others")
		{
		  $("#"+CONSTITUTION).attr('disabled',false) 
		   $("#"+CONSTITUTION).val('')
		   $("#"+CONSTITUTION).material_select("destroy");	
    		$("#"+CONSTITUTION).material_select();
    		
    	         
	     
		 var row = $(FIRM).closest(".DYNROW").length;
         for (i = 0; i < row; i++) {
            var HTML = $(FIRM).closest(".DYNROW")[i];
            $(HTML).find("input[name=ABFD_OTHFIRM]").val('');
            $(HTML).find("input[name=ABFD_OTHFIRM]").next().removeClass('active')
            $(HTML).find('.OTHFIRM').show()
            $(HTML).find("input[name=ABFD_INDUSCATRY]").val('');    
         }
		}
	else
		{
         var FIRM1=$("#"+FIRMID).val()
         var CusID=FIRM1.split('-')[0]
         var EMPID=FIRM1.split('-')[1]

        var xml=UI_getdata($("#PrcsID").val(),EMPID,CusID,"","","LSW_SAPPRNOTBUSDETL")
	
      $("#"+CATEGORY).val($(xml).find('ABFD_INDUSCATRY').text())
      $("#"+CONSTITUTION).val($(xml).find('CONSTITUTION').text())
     
	 if($("#"+CONSTITUTION).val() != "")
	 {
     $("#"+CONSTITUTION).attr('disabled',true) 
     $("#"+CONSTITUTION).closest('.select-dropdown').attr('disabled',true) 
     $("#"+CONSTITUTION).material_select();
	 }
	 else
	 {
	  $("#"+CONSTITUTION).attr('disabled',false) 
      $("#"+CONSTITUTION).closest('.select-dropdown').attr('disabled',false) 
      $("#"+CONSTITUTION).material_select(); 
	 }
       var DATA=["ApproveNote2|"];
       var ValuationID=DATA[0].replace("|","")
       var HTML = $(FIRM).closest(".DYNROW");
    //var html1 = $(this).closest(".DYNROW");
    
      var row = $(FIRM).closest(".DYNROW").length;
         for (i = 0; i < row; i++) {
            var HTML = $(FIRM).closest(".DYNROW")[i];
            $(HTML).find("input[name=ABFD_OTHFIRM]").val('');
            $(HTML).find('.OTHFIRM').hide()
    	        if($(HTML).find("input[name=ABFD_INDUSCATRY]").val() =="Manufacturing")
                  {
    	            $(HTML).find('.FBCLR').val('')
                    $(HTML).find('.'+CLASS).show()
                  }
                else
                 {
                   $(HTML).find('.FBCLR').val('')
     	           $(HTML).find('.'+CLASS).hide()
                 }
            if($(xml).find('CONSTITUTION').text()=="HUF" || $(xml).find('CONSTITUTION').text()=="Proprietorship" )
            {
            	$(HTML).find('.PARTNERFARM').hide()		
            }
            else
            	{
            	$(HTML).find('.PARTNERFARM').show()	
            	}
             }
	}
  }
	//var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SAPPRNOTBUSDETL")	
}



function CheckConsti(FIRMID,CONSTITUTION,EVENT,HTML)
{
	if(EVENT=="Load")
		{
		if($(HTML).find("[name='ABFD_CONSTITUTION']").val() == "Proprietorship" || $(HTML).find("[name='ABFD_CONSTITUTION']").val() == "HUF")
		{
		  $(HTML).find('.PARTNERFARM').hide() 
		  $(HTML).find(".CONSM").removeClass('ABFDMndtry');
		}
		else
		{
		  $(HTML).find('.PARTNERFARM').show() 
		  $(HTML).find(".CONSM").addClass('ABFDMndtry');
		}
		}
	else
		{
	    var FIRM=$("#"+FIRMID).val()
	    var CusID=FIRM.split('-')[0]
	    var EMPID=FIRM.split('-')[1]
	    
	    var CONSTITUTIONID=$(CONSTITUTION).attr('id')
	    var CONSTITUTIONval=$("#"+CONSTITUTIONID).val()
	//var xml=UI_getdata($("#PrcsID").val(),CusID,"","","","LSW_SGETBusinesFarm")
   // var CONSTITUTION=$(xml).find('CONSTITUTION').text()
	  
	var DATA=["ApproveNote2|"];
    var ValuationID=DATA[0].replace("|","")
    var HTML = $(CONSTITUTION).closest(".DYNROW");
    //var html1 = $(this).closest(".DYNROW");
    var row = $(CONSTITUTION).closest(".DYNROW").length;
    for (i = 0; i < row; i++) {
        var HTML = $(CONSTITUTION).closest(".DYNROW")[i];
     if(CONSTITUTION.value=="Proprietorship" || CONSTITUTION.value=="HUF")
    	 {
    	     $(HTML).find('.PARTNERFARM').next().find('.GCLR').val('')
    	     $(HTML).find("input[name='"+$($(HTML).find('.PARTNERFARM').next().find('.GCLR')[3]).attr('name')+"']:checked").prop('checked',false)
    	     $(HTML).find("input[name='"+$($(HTML).find('.PARTNERFARM').next().find('.GCLR')[4]).attr('name')+"']:checked").prop('checked',false)
    		 $(HTML).find('.PARTNERFARM').hide() 
		     $(HTML).find(".CONSM").removeClass('ABFDMndtry');
         }
       else
    	 {
    	  $(HTML).find('.PARTNERFARM').next().find('.GCLR').val('')
  	      $(HTML).find("input[name='"+$($(HTML).find('.PARTNERFARM').next().find('.GCLR')[3]).attr('name')+"']:checked").prop('checked',false)
  	      $(HTML).find("input[name='"+$($(HTML).find('.PARTNERFARM').next().find('.GCLR')[4]).attr('name')+"']:checked").prop('checked',false)
    	  $(HTML).find('.PARTNERFARM').show()
          $(HTML).find(".CONSM").addClass('ABFDMndtry');		  
         }	
      } 
    }
}


function CheckDocMndtry()
{
	  var Doclength=$("#EmpovTable4").find(".tbodytr").length
	  
	  var RTNVAL="";
	  
	  if(RTNVAL=="")
		  {
	  for(i=0;i<Doclength;i++)
		  {
		  var tdcount=$($("#EmpovTable4").find(".tbodytr")[i]).find('.tbodytrtd').length
		   
		  for(j=0;j<tdcount;j++)
			 {
			  if($($($("#EmpovTable4").find(".tbodytr")[i]).find('.tbodytrtd')[j]).find(".MATI").length>0)
				  {
          if(j==2){
	           if($($($("#EmpovTable4").find(".tbodytr")[i]).find('.tbodytrtd')[j]).find('input[type=text]').val()==""){

			          RTNVAL = "Fill the Mitigants";
				    		return RTNVAL;
	              }
                 }
				}
			 }
		  }
		 }
	 return RTNVAL;
}

function getOthname(id,Indus)
{
	var Others=$(id).attr("id");
	$("#"+Indus).val($("#"+Others).val())	
}

function redirectURL(id)
{
	//var URL=$(id).attr('id')
	var RedirectURL=$("#"+id).val();
	
	window.open(RedirectURL);
}


function GridControlDetailMNUEMPOWERMNT (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	var Level = UI_getdata($("#PrcsID").val(),"","","","","LSW_SMUNDEVILVEL");
	Level=$(Level).find("RESULT").html();
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
				var HTML =	'<span><input type="text" id="AEMD_EMPOWTYP'+rowno+'" style=""  name="AEMD_EMPOWTYP" disabled class="form-control ManuMiti NoSpecialChar">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=AEMD_EMPOWTYP]').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=AEMD_EMPOWTYP]').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;       			 
			   var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" disabled id="AEMD_LEVEL'+rowno+'" name="AEMD_LEVEL">';
	                   HTML = HTML + '<option value="">Select</option>';
	                   HTML = HTML + Level     			
		 			var htmldata = $(HTML);
		 			
		 			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

		          return htmldata[0].outerHTML;  
					
		         } 
				 },
				 { targets: 2, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="AEMD_METIGANTS'+rowno+'" style=""  name="AEMD_METIGANTS"  maxlength="100" disabled class="form-control ManuMiti NoSpecialChar form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=AEMD_METIGANTS]').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=AEMD_METIGANTS]').attr("value",data);
							return htmldata[0].outerHTML;   		
							
				         } 
						 },
						  { targets: 3, "render": function ( data, type, row, meta )
		       			 {
		       				var rowno = meta.row; 
                            var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DelGridrow DELBTN" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
		        				HTML = HTML + '</span>';  
		        				var htmldata = $(HTML);				
		        				return htmldata[0].outerHTML;
		       				

		       				  
		       			 }
		           	  }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}


function CheckManualEmpowMndtry(TableID,FldClas,HDR)
{
	  var Doclength=$("#"+TableID).find(".tbodytr").length
	  
	  var RTNVAL="";
	  
	  if(RTNVAL=="")
		  {
	  for(i=0;i<Doclength;i++)
		  {
		  var tdcount=$($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd').length
		   
		  for(j=0;j<tdcount;j++)
			 {
			  if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).length>0)
				  {
			if(j==0){
		          if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[0]).find('input[type=text]').val()=="")
		             {
			             RTNVAL = "Fill the Mitigant for Manual Empowerment";
				    		return RTNVAL;
		             }
                 }
          else if(j==2){
		          if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[2]).find('input[type=text]').val()=="")
		             {
			             RTNVAL = "Fill the Mitigant for Manual Empowerment";
				    		return RTNVAL;
		             }
                 }
				}
			 }
		  }
		 }
	 return RTNVAL;
}

function RechkApprlNote()
{
	$("#AAPR_APROVBTN").val("");
}


function SUBMITABIFILE()
{
	var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKAPIREFNO")
	var reqmapping = "";
	if($("#VERTICAL").val() == "UCV")
	{
		xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKAPIREFNO_UCV");
		reqmapping = "processBBAutoFlow";
	}
	else if($("#VERTICAL").val() == "UCV Eco")
	{
		xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKAPIREFNO");
		reqmapping = "processAutoFlow";
	}
		
	    var REFNO=$(xml).find('REFNO').text()
	ajaxindicatorstart("Uploading.. Please wait");
	
	$.ajax({
					   url: "/TPLSW/"+reqmapping,
					   type: 'POST',
					   data: {prcsid:$("#PrcsID").val(),refno:REFNO,reqfrm:"WEB",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
					   async:false,
					   success: function(stm){ 
					   
		if (stm == "")
			    {
			      ajaxindicatorstop(); 
			      alert("Failed");
			      return false;    
			    }
			    else  if(stm == "Success")
			    {
			 ajaxindicatorstop(); 
			 alert ('File Submitted Successfully')
			  var	  RedirectURL=""
              var   PAGENAME="MyApplication"
	          RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME;
               $(location).attr('href',encodeURI(RedirectURL));
			    }
			    else
			    {
					ajaxindicatorstop(); 
					 var obj = JSON.parse(stm)
					 var DataFlag=obj["Status"]
					 var RST=obj["Result"]
					 var RST1=RST[0]
					 var MSG=RST1['Msg']
					 if(MSG=="")
                     {
                      MSG=obj
					 }						 
			    	var pattern = /BRE Rule Failed/;
				var exists = pattern.test(MSG);	
				if(exists) {
					alert(MSG);					
					 var   PAGENAME="MyApplication"
					  RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME;
					   $(location).attr('href',encodeURI(RedirectURL));
				}
				else{
			    	alert(MSG);
				}
				    return false;   	
			    }  
			 },
			 error: function(stm) {
               ajaxindicatorstop(); 
			    alert("Failed");
			    return false; 
			  }
			 })
			 
			 ajaxindicatorstop(); 
}

function Rtramount()
{
	var PrcsId=$("#AAPR_PRCSID").val()
	var xml=UI_getdata(PrcsId,"","","","","LSW_SGETRTRAMOUNT")
	$("#ALNM_RTRAMOUNT").val($(xml).find("RESULT").text());
 
}