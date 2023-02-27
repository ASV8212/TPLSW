function GridControlMANGPDDFLOW (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
                targets: 14,
                "render": function(data, type, row, meta) {
					var rowno = meta.row;	
    			
    			var Addvalue = row[14];
    			
    			if (data == "")
    				{
    				data = Addvalue;
    				}
				
    			if(data=="")
    				{
    				var HTML="";
    				HTML =	'<span id="">'
					HTML = HTML + '</span>';	
    				}
    			else if(data!=""){
    				var HTML="";
    				HTML =	'<span id="">'
    	    		HTML = HTML + '<input style="display:none" id="OOPD_1PDDDOCUPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(OOPD_PDDDOCUPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch1" width="35"  height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="OOPD_PDDDOCUPLOAD'+rowno+'" hidden="hidden" name="OOPD_PDDDOCUPLOAD'+rowno+'" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    			}
				else{
					var HTML="";
    				HTML =	'<span id="">'
					HTML = HTML + '</span>';	
				}
    			 
    		  
    		    	 
    			 return HTML;
                }
            },
			{
                targets: 15,
                "render": function(data, type, row, meta) {
					var rowno = meta.row;	
					if(row[14] != "" && row[15] == "")
					{
						var rowno = meta.row;
                        /*var HTML = '<span><div class="HyperControls " style="display:none;"><i class="fa fa-check"></i><a  class="Btxt4 OTCSTATUS" id="Approve'+ rowno +'" name="Approve'+ rowno +'" data-value="Approve" data-table="TableRR" href="#">Approve</a></div>';
                        HTML = HTML + '<div class="HyperControls"><i class="fa fa fa-times"></i><a  class="Btxt4 OTCSTATUS" id="Reject'+ rowno +'" name="Reject'+ rowno +'"  data-table="TableRR" href="#">Reject</a></div>';
                        HTML = HTML + '<input type="text" style="display:none;" id="OOPD_ACTN'+rowno+'"  name="OOPD_ACTN'+rowno+'" maxlength="10" class="form-control DSVLBL form-control   "></span>'
                        // $('[name='+name+'][value="'+val+'"]').prop('checked', true);
						*/
						var rowno = meta.row;
						var HTML = '<span><select class="Gridmdb-select md-form colorful-select  dropdown-primary" id="OOPD_PDDDOCUAPPRSTATUS' + rowno + '" name="OOPD_PDDDOCUAPPRSTATUS' + rowno + '">';
						HTML = HTML + '<option value="Approved">Approve</option>';
						HTML = HTML + '<option value="Rejected">Reject</option></select></span>';
                        var htmldata = $(HTML);

                        $(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

                        //return htmldata[0].outerHTML;


                        return HTML;
					}
					else if((row[14] != "" && row[15] != "") || (row[14] == ""))
					{
						var rowno = meta.row;
          	 			var HTML = '<span><input type="text" id="OOPD_PDDDOCUAPPRSTATUS' + rowno + '"  name="OOPD_PDDDOCUAPPRSTATUS' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=OOPD_PDDDOCUAPPRSTATUS' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=OOPD_PDDDOCUAPPRSTATUS' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
						//return HTML;
					}
			}
			},
			{
                targets: 16,
                "render": function(data, type, row, meta) {
					var rowno = meta.row;	
					if(row[14] != "" && row[16] == "")
					{
						var rowno = meta.row;
                        /*var HTML = '<span><div class="HyperControls " style="display:none;"><i class="fa fa-check"></i><a  class="Btxt4 OTCSTATUS" id="Approve'+ rowno +'" name="Approve'+ rowno +'" data-value="Approve" data-table="TableRR" href="#">Approve</a></div>';
                        HTML = HTML + '<div class="HyperControls"><i class="fa fa fa-times"></i><a  class="Btxt4 OTCSTATUS" id="Reject'+ rowno +'" name="Reject'+ rowno +'"  data-table="TableRR" href="#">Reject</a></div>';
                        HTML = HTML + '<input type="text" style="display:none;" id="OOPD_ACTN'+rowno+'"  name="OOPD_ACTN'+rowno+'" maxlength="10" class="form-control DSVLBL form-control   "></span>'
                        // $('[name='+name+'][value="'+val+'"]').prop('checked', true);
						*/
						var rowno = meta.row;
						var HTML = '<span><select class="Gridmdb-select md-form colorful-select  dropdown-primary" id="OOPD_PDDDOCURCUAPPRSTATUS' + rowno + '" name="OOPD_PDDDOCURCUAPPRSTATUS' + rowno + '">';
						HTML = HTML + '<option value="Approved">Approve</option>';
						HTML = HTML + '<option value="Rejected">Reject</option></select></span>';
                        var htmldata = $(HTML);

                        $(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

                        //return htmldata[0].outerHTML;


                        return HTML;
					}
					else if((row[14] != "" && row[16] != "") || (row[14] == ""))
					{
						var rowno = meta.row;
          	 			var HTML = '<span><input type="text" id="OOPD_PDDDOCURCUAPPRSTATUS' + rowno + '"  name="OOPD_PDDDOCURCUAPPRSTATUS' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=OOPD_PDDDOCURCUAPPRSTATUS' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=OOPD_PDDDOCURCUAPPRSTATUS' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
						//return HTML;
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


function Datains(){
	var op = TxtGridsubmitdata_V1("Table2", "OOPD_", "OPDD_");
	
	var insp = UI_getdata(op,getUrlParam("ActvID"),$("#LogUsr").val(),"","","LSW_SPDDFLOW_INS")
}