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
       		{ targets: 6, "render": function ( data, type, row, meta ) {                            
    	 		 
       			var rowno = meta.row;	
       			
       			var Addvalue = "";
       			
       			if (data == "")
       				{
       				data = Addvalue;
       				}
				var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUPDSBL(this)" class="" width="35" height="25">';
				var	HTML =  HTML + '<input type="text" style="display:none;" id="DEVT_REMARK'+rowno+'"  name="DEVT_REMARK'+rowno+'" disabled class="form-control DSVLBL form-control     ">';		 
				var htmldata = $(HTML);
       			$(htmldata).find('[name=DEVT_REMARK'+rowno+']').attr("value",data);
				return htmldata[0].outerHTML;
                } 
       		 },
       		{
                 targets: 7,
                 "render": function(data, type, row, meta) {
                 	if(row[7] == "Pending" ){
                 		var rowno = meta.row;
                         var HTML = '<span><div class="HyperControls "><i class="fa fa-check"></i><a  class="Btxt4 OTCSTATUS" id="Approve'+ rowno +'" name="Approve'+ rowno +'" data-value="Approve" data-table="TableRR" href="#">Approve</a></div>';
                         HTML = HTML + '<div class="HyperControls"><i class="fa fa fa-times"></i><a  class="Btxt4 OTCSTATUS" id="Reject'+ rowno +'" name="Reject'+ rowno +'"  data-table="TableRR" href="#">Reject</a></div>';
                         HTML = HTML + '<input type="text" style="display:none;" id="DEVT_STATUS'+rowno+'"  name="DEVT_STATUS'+rowno+'" maxlength="10" class="form-control DSVLBL form-control   "></span>'
                         // $('[name='+name+'][value="'+val+'"]').prop('checked', true);

                         var htmldata = $(HTML);

                         $(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

                         return htmldata[0].outerHTML;


                         return HTML;
                 	}
                 	else{
                 		var rowno = meta.row;
           	 			var HTML = '<span><input type="text" id="DEVT_STATUS' + rowno + '"  name="DEVT_STATUS' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=DEVT_STATUS' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=DEVT_STATUS' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
                 	}
                 }
             }
           	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 
 }


function REMARKPOPUPDSBL(Evnt){
	var ClosID = $(Evnt).next()
	var val =ClosID.val()
	
	$("#REMARKSPopup").click();
	$("#REMARKSModal").find("#RemarksCONFIRM").attr("data-to",$(ClosID).attr("id"))
	$("#RemarksCONFIRM").hide();
	if(val != ""){
		$("#POPUPRemarks").val(val);
	///	$("#POPUPRemarks").attr("disabled","disabled")
		$("#POPUPRemarks").next().addClass('active');
		
	}
	else{
		$("#POPUPRemarks").val("");
	//	$("#POPUPRemarks").attr("disabled","disabled")
		$("#POPUPRemarks").next().addClass('active');
	}
	
	$("#RemarksCONFIRM").show();
}