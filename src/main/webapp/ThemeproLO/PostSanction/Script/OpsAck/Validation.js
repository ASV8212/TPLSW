function GridControlDetailOPSASK(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
					if(($("#HiddenActID").val()=="BranchOPS" && (row[7]!="OTC" && row[7]!="PDD" && row[7]!="Waiver"))||($("#HiddenActID").val()=="BranchOPS" && (row[7]=="OTC" || row[7]=="PDD" || row[7]=="Waiver")&&(row[12]=="Rejected"))){
                    var rowno = meta.row;
                    var HTML = '<span><input type="checkbox" class="custom-control-input GridFld" value="' + data + '" name="DDMD_TITLE' + rowno + '" id="DDMD_TITLE' + rowno + '">';
                    HTML = HTML + '<label class="custom-control-label GridLabel" for="DDMD_TITLE' + rowno + '"></label></span>';

                    // $('[name='+name+'][value="'+val+'"]').prop('checked', true);

                    var htmldata = $(HTML);

                    $(htmldata).find('[name=DDMD_TITLE' + rowno + '][value="true"]').attr('checked', 'checked');

                    return htmldata[0].outerHTML;


                    return HTML;
					}
					else{
						var rowno = meta.row;
                         //var HTML = '<span><input type="text" id="DDMD_TITLE' + rowno + '"  name="DDMD_TITLE' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
						 var HTML = '<span><input type="checkbox" class="custom-control-input DSVLBL " disabled value="' + data + '" name="DDMD_TITLE' + rowno + '" id="DDMD_TITLE' + rowno + '">';
                         HTML = HTML + '<label class="custom-control-label GridLabel" for="DDMD_TITLE' + rowno + '"></label></span>';
						 var htmldata = $(HTML);

						$(htmldata).find('[name=DDMD_TITLE' + rowno + '][value="true"]').attr('checked', 'checked');

						return htmldata[0].outerHTML;


						return HTML;
					}
                }
            },
            {
                targets: 3,
                "render": function(data, type, row, meta) {
                	if(($("#HiddenActID").val()=="BranchOPS" && (row[7]!="OTC" && row[7]!="PDD" && row[7]!="Waiver"))||($("#HiddenActID").val()=="BranchOPS" && (row[7]=="OTC" || row[7]=="PDD" || row[7]=="Waiver")&&(row[12]=="Rejected"))){
						var rowno = meta.row;
						var HTML = '<span><select class="Gridmdb-select md-form colorful-select GridFld dropdown-primary" id="DDMD_DOCMODE' + rowno + '" name="DDMD_DOCMODE' + rowno + '">';
						HTML = HTML + '<option value="">Select</option>';
						HTML = HTML + '<option value="Original">Original</option>';
						HTML = HTML + '<option value="Copy">Copy</option>';
						HTML = HTML + '<option value="Copy">Notarized copy</option>';
						HTML = HTML + '<option value="CC">CC</option></select></span>';

						// $('[name='+name+'][value="'+val+'"]').prop('checked', true);

						var htmldata = $(HTML);

						$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

						return htmldata[0].outerHTML;


						return HTML;
					}
					else{
						var rowno = meta.row;
                         var HTML = '<span><input type="text" id="DDMD_DOCMODE' + rowno + '"  name="DDMD_DOCMODE' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=DDMD_DOCMODE' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=DDMD_DOCMODE' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
                    
                }
            },
            {
                targets: 4,
                "render": function(data, type, row, meta) {
                	if(($("#HiddenActID").val()=="BranchOPS" && (row[7]!="OTC" && row[7]!="PDD" && row[7]!="Waiver"))||($("#HiddenActID").val()=="BranchOPS" && (row[7]=="OTC" || row[7]=="PDD" || row[7]=="Waiver")&&(row[12]=="Rejected"))){
                    var rowno = meta.row;
                    var HTML = '<span><select class="Gridmdb-select GridFld md-form colorful-select dropdown-primary" id="DDMD_DOCTYP' + rowno + '" name="DDMD_DOCTYP' + rowno + '">';
                    HTML = HTML + '<option value="">Select</option>';
                    HTML = HTML + '<option value="Sale Deed">Sale Deed</option>';
                    HTML = HTML + '<option value="Khatha Extract">Khatha Extract</option></select></span>';

                    // $('[name='+name+'][value="'+val+'"]').prop('checked', true);

                    var htmldata = $(HTML);

                    $(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

                    return htmldata[0].outerHTML;


                    return HTML;
					}
					else{
						var rowno = meta.row;
                         var HTML = '<span><input type="text" id="DDMD_DOCTYP' + rowno + '"  name="DDMD_DOCTYP' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=DDMD_DOCTYP' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=DDMD_DOCTYP' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {
                	if(($("#HiddenActID").val()=="BranchOPS" && (row[7]!="OTC" && row[7]!="PDD" && row[7]!="Waiver"))||($("#HiddenActID").val()=="BranchOPS" && (row[7]=="OTC" || row[7]=="PDD" || row[7]=="Waiver")&&(row[12]=="Rejected"))){
						var rowno = meta.row;
						var HTML = '<span><input type="text" style = "width:100px" id="DDMD_DOCNO' + rowno + '"  name="DDMD_DOCNO' + rowno + '" maxlength="10" class="form-control form-control GridFld IsNumberFields ">';
						HTML = HTML + '</span>';

						var htmldata = $(HTML);


						if ($(htmldata).find('[name=DDMD_DOCNO' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}


						$(htmldata).find('[name=DDMD_DOCNO' + rowno + ']').attr("value", data);


						return htmldata[0].outerHTML;
					}
					else{
						var rowno = meta.row;
                         var HTML = '<span><input type="text" id="DDMD_DOCNO' + rowno + '"  name="DDMD_DOCNO' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=DDMD_DOCNO' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=DDMD_DOCNO' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
                    

                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {
                	if(($("#HiddenActID").val()=="BranchOPS" && (row[7]!="OTC" && row[7]!="PDD" && row[7]!="Waiver"))||($("#HiddenActID").val()=="BranchOPS" && (row[7]=="OTC" || row[7]=="PDD" || row[7]=="Waiver")&&(row[12]=="Rejected"))){
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" id="DDMD_DOCDT' + rowno + '"  name="DDMD_DOCDT' + rowno + '" maxlength="10" class="form-control ISFutureDateFields GridFld form-control IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=DDMD_DOCDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=DDMD_DOCDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = meta.row;
                         var HTML = '<span><input type="text" id="DDMD_DOCDT' + rowno + '"  name="DDMD_DOCDT' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=DDMD_DOCDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=DDMD_DOCDT' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}

                }
            },
            {
                targets: 7,
                "render": function(data, type, row, meta) {
                	if(($("#HiddenActID").val()=="BranchOPS" && (row[7]!="OTC" && row[7]!="PDD" && row[7]!="Waiver"))||($("#HiddenActID").val()=="BranchOPS" && (row[7]=="OTC" || row[7]=="PDD" || row[7]=="Waiver")&&(row[12]=="Rejected"))){
                    var rowno = meta.row;
                    var HTML = '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" onchange="OTCAckROWMntry(this);HndlDateOnChng(this);" id="DDMD_STATUS' + rowno + '" name="DDMD_STATUS' + rowno + '">';
                    HTML = HTML + '<option value="">Select</option>';
                    HTML = HTML + '<option value="Collected">Collected</option>';
					if($("#DMY7").val().split("|")[8] != "ML01")
					{
                    HTML = HTML + '<option value="OTC">OTC</option>';
                    HTML = HTML + '<option value="PDD">PDD</option>';
                    HTML = HTML + '<option value="Waiver" >Waiver</option>';
					}
					HTML = HTML + '</select></span>';

                    // $('[name='+name+'][value="'+val+'"]').prop('checked', true);

                    var htmldata = $(HTML);

                    $(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

                    return htmldata[0].outerHTML;


                    return HTML;
					}
					else{
						var rowno = meta.row;
                         var HTML = '<span><input type="text" id="DDMD_STATUS' + rowno + '"  name="DDMD_STATUS' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=DDMD_STATUS' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=DDMD_STATUS' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}
                }
            },{
				targets: 8,
                "render": function(data, type, row, meta) {
					if($("#HiddenActID").val()=="BranchOPS"){
						if((row[7]=="OTC" || row[7]=="PDD"  || row[7]=="Waiver")&&(row[12]=="Rejected" ||row[12]==""))
						{
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" id="DDMD_DEFDT' + rowno + '"  name="DDMD_DEFDT' + rowno + '" maxlength="10" class="form-control ISPastDateFields form-control IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=DDMD_DEFDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=DDMD_DEFDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
						}
						else if((row[7]=="OTC" || row[7]=="PDD"  || row[7]=="Waiver")&&(row[12]=="Approved"))
							{
							var rowno = meta.row;
		                    var HTML = '<span><input disabled type="text" id="DDMD_DEFDT' + rowno + '"  name="DDMD_DEFDT' + rowno + '" maxlength="10" class="form-control ISPastDateFields DSVLBL form-control IsNumberFields ISDatefield ">';
		                    HTML = HTML + '</span>';

		                    var htmldata = $(HTML);


		                    if ($(htmldata).find('[name=DDMD_DEFDT' + rowno + ']').hasClass("IsCURCommaFields")) {
		                        data = CURCommaSep(data);
		                    }


		                    $(htmldata).find('[name=DDMD_DEFDT' + rowno + ']').attr("value", data);


		                    return htmldata[0].outerHTML;
							
							}
						else{
							var rowno = meta.row;
                    var HTML = '<span style="display:none;"><input type="text" id="DDMD_DEFDT' + rowno + '"  name="DDMD_DEFDT' + rowno + '" maxlength="10" class="form-control ISPastDateFields form-control IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=DDMD_DEFDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=DDMD_DEFDT' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;
						}
					}
					else{
						var rowno = meta.row;
                         var HTML = '<span><input type="text" id="DDMD_DEFDT' + rowno + '"  name="DDMD_DEFDT' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=DDMD_DEFDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=DDMD_DEFDT' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
					}

                }
			},
			{
                targets: 9,
                "render": function(data, type, row, meta) {
					if($("#HiddenActID").val()=="OPS" && row[7]=="Collected"){
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" id="DDMD_RECDT' + rowno + '"  name="DDMD_RECDT' + rowno + '" maxlength="10" class="form-control ISFutureDateFields form-control IsNumberFields ISDatefield ">';
                    HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=DDMD_RECDT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=DDMD_RECDT' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
					}
					else{
						var rowno = meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="DDMD_RECDT' + rowno + '"  name="DDMD_RECDT' + rowno + '" maxlength="10" class="form-control ISFutureDateFields form-control IsNumberFields ISDatefield ">';
						HTML = HTML + '</span>';
						var htmldata = $(HTML);
						if ($(htmldata).find('[name=DDMD_RECDT' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}
						$(htmldata).find('[name=DDMD_RECDT' + rowno + ']').attr("value", data);
						return htmldata[0].outerHTML;
					}
                }
            },
			{
                targets: 10,
                "render": function(data, type, row, meta) {
					if($("#HiddenActID").val()=="OPS" && row[7]=="Collected"){
						
						var rowno = meta.row;
						var HTML = '<span><input type="text" id="DDMD_RRMRK' + rowno + '"  name="DDMD_RRMRK' + rowno + '" maxlength="1000" class="form-control  form-control   ">';
						HTML = HTML + '</span>';
						var htmldata = $(HTML);
						if ($(htmldata).find('[name=DDMD_RRMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}
						$(htmldata).find('[name=DDMD_RRMRK' + rowno + ']').attr("value", data);
						return htmldata[0].outerHTML;
					}
					else{
						var rowno = meta.row;
						var HTML = '<span style="display:none;"><input type="text" id="DDMD_RRMRK' + rowno + '"  name="DDMD_RRMRK' + rowno + '" maxlength="1000" class="form-control  form-control   ">';
						HTML = HTML + '</span>';
						var htmldata = $(HTML);
						if ($(htmldata).find('[name=DDMD_RRMRK' + rowno + ']').hasClass("IsCURCommaFields")) {
							data = CURCommaSep(data);
						}
						$(htmldata).find('[name=DDMD_RRMRK' + rowno + ']').attr("value", data);
						return htmldata[0].outerHTML;
					}
                }
            },
			{
                targets: 13,
                "render": function(data, type, row, meta) {
					var rowno = meta.row;
					var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this)" class="" width="35" height="25">';
					var	HTML =  HTML + '<input type="text" style="display:none;" id="DDMD_WVRMRK'+rowno+'"  name="DDMD_WVRMRK'+rowno+'" disabled class="form-control DSVLBL form-control     ">';		 
					var htmldata = $(HTML);
					$(htmldata).find('[name=DDMD_WVRMRK'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;
                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}


function HndlDateOnChng(Evnt){
	if(Evnt.value=="OTC" || Evnt.value=="PDD" || Evnt.value=="Waiver"){
		if(Evnt.value=="Waiver" && $($(Evnt.closest('.tbodytr')).find('.tbodytrtd')[13]).find('input[type=text]').val()==""){
			alert("Remark is mandatory for Waiver");
			Evnt.value=""
			$(Evnt).parent().find('input').val('');
			return;
		}
		$(Evnt).closest('.tbodytrtd').next().find('span').show();
	}
	else{
		$(Evnt).closest('.tbodytrtd').next().find('span').hide();
	}
}

function OTCAckROWMntry(Evnt){
	var CrntColIndx = parseInt($(Evnt).parent().parent().parent().index())-1;
	//var CrntColIndx1 = CrntColIndx;
	//while (CrntColIndx >= 0){
		for(var z=0;z<$($(Evnt).closest('.tbodytr').find('.GridFld')).not('div').length;z++){
		if($($(Evnt).closest('.tbodytr').find('.GridFld').not('div')[z]).is('input')==true || $($(Evnt).closest('.tbodytr').find('.GridFld').not('div')[z]).is('select')==true || $($(Evnt).closest('.tbodytr').find('.GridFld').not('div')[z]).is('textarea')==true)
		{
			if($($(Evnt).closest('.tbodytr').find('.GridFld').not('div')[z]).attr('type')=="radio"){
			var name = $($(Evnt).closest('.tbodytr').find('.GridFld').not('div')[z]).attr('name')
			value=$('input[name='+name+']:checked').val();
				if(value==undefined)
				{
					value = "";
				}
			}
			else if($($(Evnt).closest('.tbodytr').find('.GridFld').not('div')[z]).attr('type')=="checkbox") 
			{
				var fieldid = $($(Evnt).closest('.tbodytr').find('.GridFld').not('div')[z]).attr('id')
				value=$('input[id='+fieldid+']').prop("checked");
				if(value==undefined)
				{
					value = "";
				}
			}
			else
			{
            //value = $($(Evnt).closest('.tbodytr').find('.tbodytrtd')[CrntColIndx]).find('.GridFld').val()//.replace(/\&/g, "and");
			value = $($(Evnt).closest('.tbodytr').find('.GridFld').not('div')[z]).val()
			}
			
			if(value == "")
			{	
				var TableID=$(Evnt).closest('table').attr("id");
				var j=$(Evnt).parent().parent().parent().index();
				var i = $(Evnt).parent().parent().parent().parent().index();
				var HDR = "OPS Acknowledgement"
				RTNVAL = "No Data Available in " + $($($("#"+TableID+" thead").find('tr')[0]).find('th')[z+2]).text()
			    		+ " for " + $($($("#"+TableID).find('.tbodytr')[i]).find('td')[0]).text() + "-"+HDR;
						Evnt.value=''
						$(Evnt).parent().find('input').val('');
						alert(RTNVAL);
			    		return RTNVAL;
			}
			
		}
	}
		//CrntColIndx=parseInt(CrntColIndx)-1;
	
}

function GenAckRpt()
{
			
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT099")+"&__format=pdf&Param1="+PrcsId+"&Param2="+$(".FormPageMultiTab li.active a div").text()+"&__filename="+$("#DMY7").val().split("|")[7]+"_OPSACK.pdf";
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}