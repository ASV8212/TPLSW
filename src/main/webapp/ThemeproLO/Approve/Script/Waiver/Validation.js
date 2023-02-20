
function GridControlDetail (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
      			 targets: 4,
      			"render": function(data, type, row, meta) {
      				var rowno = meta.row;
      				//if(row[5]=="Approve"){
      					var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this)" class="" width="35" height="25">';
      		       		HTML =  HTML + '<input type="text" style="display:none;" id="APCD_REMARK'+rowno+'"  name="APCD_REMARK'+rowno+'" disabled class="form-control DSVLBL form-control     ">';
      		       		HTML = HTML + '</span>';	
      		       		var htmldata = $(HTML);
						$(htmldata).find('[name=APCD_REMARK'+rowno+']').attr("value",data);
	    	   			return htmldata[0].outerHTML;
      				/*}
      				else{
      					var	HTML =  '<span style="display:none;" id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this)" class="" width="35" height="25">';
      		       		HTML =  HTML + '<input type="text" style="display:none;" id="APCD_REMARK'+rowno+'"  name="APCD_REMARK'+rowno+'" disabled class="form-control DSVLBL form-control     ">';
      		       		HTML = HTML + '</span>';	
      		       		var htmldata = $(HTML);
						$(htmldata).find('[name=APCD_REMARK'+rowno+']').attr("value",data);
	    	   			return htmldata[0].outerHTML;
      				}*/
      				
      			}
      		   },
      		 {
                   targets: 5,
                   "render": function(data, type, row, meta) {
                	   if(row[5]!="Approved" && row[8]=="Y"){
                   		var rowno = meta.row;
                           var HTML = '<span><div class="HyperControls "><i class="fa fa-check"></i><a  class="Btxt4 APCDSTATUS" id="Approve'+ rowno +'" name="Approve'+ rowno +'" data-value="Approve" data-table="TableRR" href="#">Approve</a></div>';
                          
						  if (row[5] =="Rejected")
						  {
						HTML = HTML + '<div class="HyperControls"><i class="fa fa fa-times"></i><a  class="Btxt27 APCDSTATUS" id="Reject'+ rowno +'" name="Reject'+ rowno +'"  data-table="TableRR" href="#">Reject</a></div>';
						  }
						  else
						  {
							   HTML = HTML + '<div class="HyperControls"><i class="fa fa fa-times"></i><a  class="Btxt4 APCDSTATUS" id="Reject'+ rowno +'" name="Reject'+ rowno +'"  data-table="TableRR" href="#">Reject</a></div>';
						  }
					   HTML = HTML + '<input type="text" style="display:none;" disabled id="APCD_STAUS'+rowno+'"  name="APCD_STAUS'+rowno+'" maxlength="10" class="form-control DSVLBL form-control   "></span>'
                           // $('[name='+name+'][value="'+val+'"]').prop('checked', true);

                           var htmldata = $(HTML);

                           $(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

                           return htmldata[0].outerHTML;


                           return HTML;
                	   }
                	   else{
                   		var rowno = meta.row;
             	 			var HTML = '<span><input type="text" id="APCD_STAUS' + rowno + '"  name="APCD_STAUS' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                           var htmldata = $(HTML);
                           if ($(htmldata).find('[name=APCD_STAUS' + rowno + ']').hasClass("IsCURCommaFields")) {
                               data = CURCommaSep(data);
                           }

                           $(htmldata).find('[name=APCD_STAUS' + rowno + ']').attr("value", data);
                           return htmldata[0].outerHTML;
                   	}
                   }
               },
               {
            	   targets: 6,
                   "render": function(data, type, row, meta) {
                	   var rowno = meta.row;
        	 			var HTML = '<span><input type="text" disabled id="APCD_UPDTON' + rowno + '"  name="APCD_UPDTON' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                      var htmldata = $(HTML);
                      if ($(htmldata).find('[name=APCD_UPDTON' + rowno + ']').hasClass("IsCURCommaFields")) {
                          data = CURCommaSep(data);
                      }

                      $(htmldata).find('[name=APCD_UPDTON' + rowno + ']').attr("value", data);
                      return htmldata[0].outerHTML;
                	   
                   }
               },
      		{ targets: 9, "render": function ( data, type,  row, meta ) {                            
  	 		 
   			var rowno = meta.row;	
   			
   			var Addvalue = "";
   			
   			if (data == "")
   				{
   				data = Addvalue;
   				}
   		var	HTML =  '<span id=""><img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35" height="25">';
   						HTML = HTML + '</span>';		 
   		  
   		    	 
   			 return HTML;
            } 
   		 }
          	
          	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	 
}