function GridControlDetailKYCDTL(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01"){
							HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
					else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC"  && activityname != "OPSQD")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
					if($("#DMY7").val().split("|")[8] != "ML01")
					{
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
					}
                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
                	}
                

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {
                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control DSVLBL GridMndtryTrDt ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
					else if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()!="BranchOPS"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}
                    

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						 var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
					
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}

function GridControlDetailMINChkLst(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC" && activityname != "OPSQD")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes22' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes22' + rowno + '">Yes</label>';
                    
					if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA22' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA22' + rowno + '">N/A</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC22' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC22' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD22' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD22' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA22' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA22' + rowno + '">No</label>';
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
                	}
                

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {
                	if((row[4]=="OTC")||(row[4]=="PDD"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}
                    

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes22' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes22' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo22' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo22' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA22' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA22' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes22' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes22' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo22' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo22' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA22' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA22' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}

function GridControlDetailSANCTIONFILEDTL(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes1' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes1' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA1' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA1' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC1' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC1' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD1' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD1' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA1' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA1' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
                	else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC"  && activityname != "OPSQD")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes1' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes1' + rowno + '">Yes</label>';
					if($("#DMY7").val().split("|")[8] != "ML01")
					{
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA1' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA1' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC1' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC1' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD1' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD1' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA1' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA1' + rowno + '">No</label>';
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {
                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control DSVLBL  GridMndtryTrDt form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
					else if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()!="BranchOPS"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}
                    

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
					
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes1' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes1' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo1' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo1' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA1' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA1' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes1' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes1' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo1' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo1' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA1' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA1' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                    

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
					
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}
                    

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}

function GridControlDetailTechGDTL(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
                	else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC"  && activityname != "OPSQD")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB   ODCLDBfields" value="Yes" id="FRSTDISBYes2' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes2' + rowno + '">Yes</label>';
                    if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB   ODCLDBfields" value="N/A" id="FRSTDISBNA2' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA2' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB   ODCLDBfields" value="OTC" id="FRSTDISBOTC2' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC2' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB   ODCLDBfields" value="PDD" id="FRSTDISBPDD2' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD2' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB   ODCLDBfields" value="No" id="FRSTDISBNA2' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA2' + rowno + '">No</label>';
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {
                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields  IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes2' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes2' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo2' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo2' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA2' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA2' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes2' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes2' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo2' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo2' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA2' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA2' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}


function GridControlDetailApplnnform(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
                	else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC"  && activityname != "OPSQD")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes3' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes3' + rowno + '">Yes</label>';
					if($("#DMY7").val().split("|")[8] != "ML01")
					{
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA3' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA3' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC3' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC3' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD3' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD3' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA3' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA3' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {
                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes4' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes4' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo4' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo4' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA4' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA4' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes4' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes4' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo4' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo4' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA4' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA4' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}


function GridControlDetailOthrFile(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
                	else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes4' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes4' + rowno + '">Yes</label>';
                    if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA4' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA4' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC4' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC4' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD4' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD4' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA4' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA4' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {
                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS") )
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }

                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);

                    return htmldata[0].outerHTML;
            	}
                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes5' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes5' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo5' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo5' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA5' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA5' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes5' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes5' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo5' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo5' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA5' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA5' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}


function GridControlDetailFIRprt(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
                	else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes5' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes5' + rowno + '">Yes</label>';
					if($("#DMY7").val().split("|")[8] != "ML01")
					{
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA5' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA5' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC5' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC5' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD5' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD5' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA5' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA5' + rowno + '">No</label>';
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes6' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes6' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo6' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo6' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA6' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA6' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes6' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes6' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo6' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo6' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA6' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA6' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}



function GridControlDetailRCURprt(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
                	else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes6' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes6' + rowno + '">Yes</label>';
					if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA6' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA6' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC6' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC6' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD6' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD6' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA6' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA6' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS") )
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control DSVLBL  form-control GridMndtryTrDt ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes7' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes7' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo7' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo7' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA7' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA7' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes7' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes7' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo7' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo7' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA7' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA7' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}



function GridControlDetailPropVst(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
                	else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes7' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes7' + rowno + '">Yes</label>';
                    if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA7' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA7' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC7' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC7' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD7' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD7' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA7' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA7' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS") )
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;"  src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes8' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes8' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo8' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo8' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA8' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA8' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes8' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes8' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo8' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo8' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA8' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA8' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}

function GridControlDetailCibil(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
                	else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes8' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes8' + rowno + '">Yes</label>';
                    if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA8' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA8' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC8' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC8' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD8' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD8' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA8' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA8' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS") )
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes9' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes9' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo9' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo9' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA9' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA9' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes9' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes9' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo9' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo9' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA9' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA9' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						 var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}

function GridControlDetailTechRPRT(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
                	else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes9' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes9' + rowno + '">Yes</label>';
                    if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA9' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA9' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC9' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC9' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD9' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD9' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA9' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA9' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS") )
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes10' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes10' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo10' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo10' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA10' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA10' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes10' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes10' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo10' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo10' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA10' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA10' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}


function GridControlDetailIncm(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
                	else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes10' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes10' + rowno + '">Yes</label>';
					if($("#DMY7").val().split("|")[8] != "ML01")
					{
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA10' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA10' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC10' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC10' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD10' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD10' + rowno + '">PDD</label></span>';
					}
					else ($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA10' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA10' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD")  && ($("#hiddenactivity").val()=="BranchOPS") )
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}
                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes11' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes11' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo11' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo11' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA11' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA11' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes11' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes11' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo11' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo11' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA11' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA11' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}

function GridControlDetailApprovals(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
					else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes11' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes11' + rowno + '">Yes</label>';
                    if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA11' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA11' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC11' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC11' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD11' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD11' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA11' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA11' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS") )
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;"  src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes12' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes12' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo12' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo12' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA12' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA12' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes12' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes12' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo12' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo12' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA12' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA12' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}


function GridControlDetailBTNBTPrcs(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';
						}
						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
					else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes12' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes12' + rowno + '">Yes</label>';
					if($("#DMY7").val().split("|")[8] != "ML01")
					{
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA12' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA12' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC12' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC12' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD12' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD12' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA12' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA12' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS") )
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes13' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes13' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo13' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo13' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA13' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA13' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes13' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes13' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo13' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo13' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA13' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA13' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}



function GridControlDetailSancLtr(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
					else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes13' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes13' + rowno + '">Yes</label>';
                    if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA13' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA13' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC13' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC13' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD13' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD13' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA13' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA13' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS") )
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },{
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes14' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes14' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo14' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo14' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA14' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA14' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes14' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes14' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo14' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo14' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA14' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA14' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}


function GridControlDetailLegl(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
					else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes14' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes14' + rowno + '">Yes</label>';
					if($("#DMY7").val().split("|")[8] != "ML01")
					{
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA14' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA14' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC14' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC14' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD14' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD14' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA14' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA14' + rowno + '">No</label>';
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}
                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes15' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes15' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo15' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo15' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA15' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA15' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes15' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes15' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo15' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo15' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA15' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA15' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}


function GridControlDetailDM(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
					else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes15' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes15' + rowno + '">Yes</label>';
                    if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA15' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA15' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC15' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC15' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD15' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD15' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA15' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA15' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS") )
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}
                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes16' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes16' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo16' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo16' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA16' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA16' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes16' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes16' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo16' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo16' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA16' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA16' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}



function GridControlDetailLonAgr(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
					else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes16' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes16' + rowno + '">Yes</label>';
                    if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA16' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA16' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC16' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC16' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD16' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD16' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA16' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA16' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS") )
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes17' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes17' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo17' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo17' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA17' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA17' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes17' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes17' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo17' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo17' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA17' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA17' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}


function GridControlDetailCrsSell(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
					else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes17' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes17' + rowno + '">Yes</label>';
                    if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA17' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA17' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC17' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC17' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD17' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD17' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA17' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA17' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes18' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes18' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo18' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo18' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA18' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA18' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes18' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes18' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo18' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo18' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA18' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA18' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}


function GridControlDetailBTOPS(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
					else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes18' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes18' + rowno + '">Yes</label>';
                    if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA18' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA18' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC18' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC18' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD18' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD18' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA18' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA18' + rowno + '">No</label>';
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS") )
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes19' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes19' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo19' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo19' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA19' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA19' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes19' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes19' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo19' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo19' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA19' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA19' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
				else{
					var rowno = TableID+meta.row;
                    var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
				}
				}
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}


function GridControlDetailRepaymentkit(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
					else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes18' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes18' + rowno + '">Yes</label>';
                    if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA18' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA18' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC18' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC18' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD18' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD18' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA18' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA18' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
               		 var rowno = TableID+meta.row;
                        var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
               	}

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {

                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS") )
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled  id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control GridMndtryTrDt DSVLBL ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control IsNumberFields ISPastDateFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes19' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes19' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo19' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo19' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA19' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA19' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes19' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes19' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo19' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo19' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA19' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA19' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
				else{
					var rowno = TableID+meta.row;
                    var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
				}
				}
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}

function GridControlDetailMINIKYCDTL(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC" && activityname != "OPSQD")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes22' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes22' + rowno + '">Yes</label>';
                    if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA22' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA22' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC22' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC22' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD22' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD22' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA22' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA22' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
                	}
                

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {
                	if((row[4]=="OTC")||(row[4]=="PDD"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control IsNumberFields ISPastDateFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}
                    

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes22' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes22' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo22' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo22' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA22' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA22' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes22' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes22' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo22' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo22' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA22' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA22' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}


function ChkGrdMandatoryFlds(FieldsClassName){
	var x = document.getElementsByClassName(FieldsClassName);
	var fieldid = "";
	for(var i =0;i<x.length;i++){
		if($(document.getElementsByClassName(FieldsClassName).item(i)).is("select")==true || $(document.getElementsByClassName(FieldsClassName).item(i)).is("input")==true || $(document.getElementsByClassName(FieldsClassName).item(i)).is("textarea")==true){
			fieldid = document.getElementsByClassName(FieldsClassName).item(i).id;
			name = document.getElementsByClassName(FieldsClassName).item(i).name;
			if($('#' + fieldid).attr('type')=="radio") 
			{
				value=$('input[name='+name+']:checked').val();
				if(value==undefined)
				{
					value = "";
				}
			}
			else if($('#' + fieldid).attr('type')=="checkbox") 
			{
				value=$('input[id='+fieldid+']').prop("checked");
				if(value==undefined)
				{
					value = "";
				}
			}
			else
			{
            value = document.getElementsByClassName(FieldsClassName).item(i).value//.replace(/\&/g, "and");
			}
			
			if(value == "")
			{	
				var TableID=$("#"+fieldid).closest('table').attr("id");
				var j=$("#"+fieldid).parent().parent().index();
				var i = $("#"+fieldid).parent().parent().parent().index();
				var HDR = $("#"+TableID).closest('.form-row').prev().find('label').text()
				RTNVAL = "No Data Available in " + $($($("#"+TableID+" thead").find('tr')[0]).find('th')[j]).text()
			    		+ " for " + $($($("#"+TableID).find('.tbodytr')[i]).find('td')[3]).text() + "-"+HDR;
			    		return RTNVAL;
			}
		}
	}
}

function GridControlDetailT2CheckLst(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						if($("#DMY7").val().split("|")[8] != "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
						
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						}
						else if($("#DMY7").val().split("|")[8] == "ML01")
						{
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
						}

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
					else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC" && activityname != "OPSQD")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
                    if($("#DMY7").val().split("|")[8] != "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label>';
					
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
					}
					else if($("#DMY7").val().split("|")[8] == "ML01")
					{
					HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">No</label>';	
					}

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
                	}
                

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {
                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control DSVLBL GridMndtryTrDt ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
					else if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()!="BranchOPS"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}
                    

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}

function GridControlDetailGECLCheckLst(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                targets: 4,
                "render": function(data, type, row, meta) {
                	var activityname = $("#hiddenactivity").val();
                	if(((activityname=="BranchOPS")&&(row[4] !="OTC" && row[4] !="PDD"))||((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]=="Rejected")))
					{
						var rowno = TableID+meta.row;
						var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label></span>';
						//HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
						//HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
						//HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB GridMndtry ODCLDBfields" value="No" id="FRSTDISBNO' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNO' + rowno + '">No</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}
                	else if((activityname=="BranchOPS")&&(row[4] =="OTC" || row[4] =="PDD")&&(row[9]!="Rejected"))
					{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
					else if(activityname != "CreditOPS" && activityname != "OPS"  && activityname != "OPSMC" && activityname != "OPSQD")
                	{	
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="Yes" id="FRSTDISBYes' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBYes' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="N/A" id="FRSTDISBNA' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNA' + rowno + '">N/A</label></span>';
                    //HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="OTC" id="FRSTDISBOTC' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBOTC' + rowno + '">OTC</label>';
                    //HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="PDD" id="FRSTDISBPDD' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBPDD' + rowno + '">PDD</label></span>';
					//HTML = HTML + '<input type="radio" class="custom-control-input FRSTDISB ODCLDBfields" value="No" id="FRSTDISBNo' + rowno + '" name="ODCL_FRSTDISB' + rowno + '"><label class="custom-control-label" for="FRSTDISBNo' + rowno + '">No</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
                	}
                	else{
                		 var rowno =TableID+meta.row;
                         var HTML = '<span><input type="text" id="ODCL_FRSTDISB' + rowno + '"  name="ODCL_FRSTDISB' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=ODCL_FRSTDISB' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
                	}
                

                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {
                	if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()=="BranchOPS"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control DSVLBL ISPastDateFields GridMndtryTrDt IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img style="display:none;" src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
					else if((row[4]=="OTC")||(row[4]=="PDD") && ($("#hiddenactivity").val()!="BranchOPS"))
            		{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            		}
            	else{
            		var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" style="display:none;" disabled id="ODCL_TRDT' + rowno + '"  name="ODCL_TRDT' + rowno + '" maxlength="10" class="DSVLBL form-control form-control ISPastDateFields IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png"  style="display:none;" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_TRDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_TRDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
            	}
                    

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {

                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_REMRK' + rowno + '"  name="ODCL_REMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_REMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_REMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes' + rowno + '">Yes</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo' + rowno + '">No</label>';
                    HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA' + rowno + '">N/A</label></span>';

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

                    //alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
                    //alert(htmldata[0].outerHTML);

                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="radio" class="custom-control-input ODCLDBfields" value="Yes" id="OTHRSTATSYes' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSYes' + rowno + '">Yes</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="No" id="OTHRSTATSNo' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNo' + rowno + '">No</label>';
						HTML = HTML + '<input type="radio" class="custom-control-input ODCLDBfields" value="N/A" id="OTHRSTATSNA' + rowno + '" name="ODCL_OTHRSTATS' + rowno + '"><label class="custom-control-label" for="OTHRSTATSNA' + rowno + '">N/A</label></span>';

						var htmldata = $(HTML);

						$(htmldata).find('[name=ODCL_OTHRSTATS' + rowno + '][value="' + data + '"]').attr('checked', 'checked');

						//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
						//alert(htmldata[0].outerHTML);

						return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 8,
                "render": function(data, type, row, meta) {
					if(row[4] != "OTC" && row[4] != "PDD"){
                    var rowno = TableID+meta.row;
                    var HTML = '<span><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = TableID+meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="ODCL_OTHRREMRK' + rowno + '"  name="ODCL_OTHRREMRK' + rowno + '" maxlength="500" class="form-control form-control   ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=ODCL_OTHRREMRK' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}

                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}

function LoadCheckLSTDropDown(){
	var stm=$("#DMY14").val()	
	var obj= JSON.parse(stm)
	$(".GECLDROPDOWN").append('<option value="" selected>--Select--</option>');
	
    		
	$("#ODCH_INSNATR").append(obj.INDUSTRYNATURE);
	$("#ODCH_CHFPROMTGEN").append(obj.CHIEFPROMOTERGENDER);
	$("#ODCH_TYPENTITY").append(obj.TYPEOFENTITY);
	$("#ODCH_TYPBORROWR").append(obj.TYPEOFBORROWER);
}

function CheckLSTDropDownOnChng(ChngVal){
	$("#ODCH_INSSECTR").empty();
	$("#ODCH_INSSECTR").val('');			
	$("#ODCH_INSSECTR").material_select('destory');
	var op = UI_getdata(ChngVal,"","","","","LSW_SCHKLSTDROPDWNONCHNG")
	
	$("#ODCH_INSSECTR").append('<option value="" selected>--Select--</option>') 
    		
	$("#ODCH_INSSECTR").append($(op).find("RESULT").html());
	$("#ODCH_INSSECTR").material_select();
}
function CheckLSTDropDownOnChng1(){
	var oldval = $("#ODCH_INSSECTR").val()
	$("#ODCH_INSSECTR").empty();
	$("#ODCH_INSSECTR").val('');			
	$("#ODCH_INSSECTR").material_select('destory');
	var op = UI_getdata($("#ODCH_INSNATR").val(),"","","","","LSW_SCHKLSTDROPDWNONCHNG")
	
	$("#ODCH_INSSECTR").append('<option value="">--Select--</option>') 
    		
	$("#ODCH_INSSECTR").append($(op).find("RESULT").html());
	$("#ODCH_INSSECTR").find("option[value='"+oldval+ "']").attr("selected","selected");
	$("#ODCH_INSSECTR").material_select();
}

