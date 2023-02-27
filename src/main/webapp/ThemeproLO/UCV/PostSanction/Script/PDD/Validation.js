function GridControlDetailSALES(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
            
            { targets: 1, "render": function ( data, type, row, meta ) {                            
     	 		 
       			var rowno = meta.row;	
       			
       			var Addvalue = "";
       			
       			if (data == "")
       				{
       				data = Addvalue;
       				}
				var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUPDSBL(this)" class="" width="35" height="25">';
				var	HTML =  HTML + '<input type="text" style="display:none;" id="OOPD_SALSREMRK'+rowno+'"  name="OOPD_SALSREMRK'+rowno+'" disabled class="form-control DSVLBL form-control     ">';		 
				var htmldata = $(HTML);
       			$(htmldata).find('[name=OOPD_SALSREMRK'+rowno+']').attr("value",data);
				return htmldata[0].outerHTML;
                } 
       		 },
            
            {
                targets: 3,
                "render": function(data, type, row, meta) {
                	if((row[3] == ""||row[3] == "Pending") && $("#HiddenActID").val()=="PDD"){
						
						if(data=="" || data == "Pending"){
							data="Approved"
						}
                		var rowno = meta.row;
                        /*var HTML = '<span><div class="HyperControls " style="display:none;"><i class="fa fa-check"></i><a  class="Btxt4 OTCSTATUS" id="Approve'+ rowno +'" name="Approve'+ rowno +'" data-value="Approve" data-table="TableRR" href="#">Approve</a></div>';
                        HTML = HTML + '<div class="HyperControls"><i class="fa fa fa-times"></i><a  class="Btxt4 OTCSTATUS" id="Reject'+ rowno +'" name="Reject'+ rowno +'"  data-table="TableRR" href="#">Reject</a></div>';
                        HTML = HTML + '<input type="text" style="display:none;" id="OOPD_ACTN'+rowno+'"  name="OOPD_ACTN'+rowno+'" maxlength="10" class="form-control DSVLBL form-control   "></span>'
                        // $('[name='+name+'][value="'+val+'"]').prop('checked', true);
						*/
						var rowno = meta.row;
						var HTML = '<span><select class="Gridmdb-select md-form colorful-select OTCSTATUS dropdown-primary" id="OOPD_ACTN' + rowno + '" name="OOPD_ACTN' + rowno + '">';
						HTML = HTML + '<option value="Approved">Approve</option>';
						HTML = HTML + '<option value="Rejected">Reject</option></select></span>';
                        var htmldata = $(HTML);

                        $(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

                        return htmldata[0].outerHTML;


                        return HTML;
                	}
                	else{
                		var rowno = meta.row;
          	 			var HTML = '<span><input type="text" id="OOPD_ACTN' + rowno + '"  name="OOPD_ACTN' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                        var htmldata = $(HTML);
                        if ($(htmldata).find('[name=OOPD_ACTN' + rowno + ']').hasClass("IsCURCommaFields")) {
                            data = CURCommaSep(data);
                        }

                        $(htmldata).find('[name=OOPD_ACTN' + rowno + ']').attr("value", data);
                        return htmldata[0].outerHTML;
                	}
                }
            }

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}

function GridControlDetailBRANCH(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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

            { targets: 3, "render": function ( data, type, row, meta ) {                            
      	 		 if(row[1] == "Approved" && row[3]=="" )
      	 			 {
      	 			var rowno = meta.row;	
      	 			var HTML =	'<span><input type="radio" class="custom-control-input OOTDRADIOCHK OOPDDBfields" value="Collected" id="Collected'+rowno+'" name="OOPD_STUS'+rowno+'"><label class="custom-control-label" for="Collected'+rowno+'">Collected</label>';
      	 			HTML = HTML + '<input type="radio" class="custom-control-input OOTDRADIOCHK OOPDDBfields" value="Waiver" id="Waiver'+rowno+'" name="OOPD_STUS'+rowno+'"><label class="custom-control-label" for="Waiver'+rowno+'">Waiver</label>'
      	      		HTML = HTML + '</span>';			  
      	      		var htmldata = $(HTML);
      	  			$(htmldata).find('[name=OOPD_STUS'+rowno+'][value="'+data+'"]').attr('checked', 'checked');
      	  			return htmldata[0].outerHTML;
      	 			 }
      	 		else if(row[1] == "Rejected"){
      	 			var rowno = meta.row;
                    var HTML = '<span><div class="HyperControls "><i class=""></i><a  class="Btxt4 OTCSTATUS1" id="RESEND'+ rowno +'" name="RESEND'+ rowno +'" data-value="Approve" data-table="TableRR" href="#">Resend for PDD</a></div>';
                    HTML = HTML + '<input type="text" style="display:none;" id="OOPD_STUS'+rowno+'"  name="OOPD_STUS'+rowno+'" maxlength="10" class="form-control DSVLBL form-control   "></span>'
                    // $('[name='+name+'][value="'+val+'"]').prop('checked', true);

                    var htmldata = $(HTML);

                    $(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

                    return htmldata[0].outerHTML;


                    return HTML;
      	 		 }
      	 		 else{
       	 			var rowno = meta.row;
       	 			var HTML = '<span><input type="text" id="OOPD_STUS' + rowno + '"  name="OOPD_STUS' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                     var htmldata = $(HTML);
                     if ($(htmldata).find('[name=OOPD_STUS' + rowno + ']').hasClass("IsCURCommaFields")) {
                         data = CURCommaSep(data);
                     }

                     $(htmldata).find('[name=OOPD_STUS' + rowno + ']').attr("value", data);
                     return htmldata[0].outerHTML;
       	 		 }
                } 
       		 },
			{
                targets: 4,
                "render": function(data, type, row, meta) {
					var rowno = meta.row;
					var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this)" class="" width="35" height="25">';
					var	HTML =  HTML + '<input type="text" style="display:none;" id="OOPD_SALSREMRK'+rowno+'"  name="OOPD_SALSREMRK'+rowno+'" disabled class="form-control DSVLBL form-control     ">';		 
					var htmldata = $(HTML);
					$(htmldata).find('[name=OOPD_SALSREMRK'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;
                }
            }
        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}

function GridControlDetailOPS(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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

            { targets: 5, "render": function ( data, type, row, meta ) {                            
            	if(row[4] == "Collected")
      	 			 {
      	 			var rowno = meta.row;	
      	 			var HTML =	'<span><input type="radio" class="custom-control-input OOPDDBfields" onclick="VerfyOnChng(this);" value="Yes" id="VERFYYes'+rowno+'" name="OOPD_VERFY'+rowno+'"><label class="custom-control-label" for="VERFYYes'+rowno+'">Yes</label>';
      	      		HTML = HTML + '<input type="radio" class="custom-control-input OOPDDBfields" onclick="VerfyOnChng(this);" value="No" id="VERFYNo'+rowno+'" name="OOPD_VERFY'+rowno+'"><label class="custom-control-label" for="VERFYNo'+rowno+'">No</label></span>';			  
      	      		var htmldata = $(HTML);
      	  			$(htmldata).find('[name=OOPD_VERFY'+rowno+'][value="'+data+'"]').attr('checked', 'checked');
      	  			return htmldata[0].outerHTML;
      	 			 }
            	else{
      	 			var HTML = '<span style="display:none;"><input type="text" disabled style = "width:100px" id="OOPD_VERFY' + rowno + '"  name="OOPD_VERFY' + rowno + '" maxlength="100" class="form-control form-control  DSVLBL IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=OOPD_VERFY' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=OOPD_VERFY' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
      	 		 }
                } 
       		 },
       		{ targets: 6, "render": function ( data, type, row, meta ) {                            
      	 		 if(row[5] == "No" && (row[4] == "Collected"))
				 {
					/*var rowno = meta.row;		 
				var HTML =	'<span><input type="checkbox" class="custom-control-input" value="'+data+'" name="OOPD_RSQRY'+rowno+'" id="OOPD_RSQRY'+rowno+'">';			 
				HTML = HTML + '<label class="custom-control-label GridLabel" for="OOPD_RSQRY'+rowno+'"></label></span>';			  
				// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
				var htmldata = $(HTML);
      			$(htmldata).find('[name=OOPD_RSQRY'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
				return htmldata[0].outerHTML;
       			 return HTML;*/ 
      	 			var rowno = meta.row;	 
					var HTML =	'<span><button type="button" id="RaiseQuery'+rowno+'" data-aria="" data-form="PersonalInfo"  style="height:15px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">RQ</button>';			 
					HTML = HTML + '</span>'; 
					var htmldata = $(HTML);							
					return htmldata[0].outerHTML; 
				 }
				 else{
					/* var rowno = meta.row;		 
				var HTML =	'<span style="display:none;"><input type="checkbox" class="custom-control-input" value="'+data+'" name="OOPD_RSQRY'+rowno+'" id="OOPD_RSQRY'+rowno+'">';			 
				HTML = HTML + '<label class="custom-control-label GridLabel" for="OOPD_RSQRY'+rowno+'"></label></span>';			  
				// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
				var htmldata = $(HTML);
      			$(htmldata).find('[name=OOPD_RSQRY'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
				return htmldata[0].outerHTML;
       			 return HTML;*/ 
					 var rowno = meta.row;	 
						var HTML =	'<span><button type="button" style="display:none" id="RaiseQuery'+rowno+'" data-aria=""  data-form="PersonalInfo" style="height:15px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">RQ</button>';			 
						HTML = HTML + '</span>'; 
						var htmldata = $(HTML);							
						return htmldata[0].outerHTML;
				 }
       			
                } 
       		 }
        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}


function GridDecider(Role)
{
	if(Role == "SALES")
	{
	FncallDocChkLst(this,'Table2',{spname:'LSW_SGETPDDFRPRCS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'SALES',MnuId:$(".FormPageMultiTab li.active a div").text()+'|'+$("#LogUsr").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5,6,7,8,9,10,11,12','SALES');
	}
	else if(Role == "BRANCH")
	{
		FncallDocChkLst(this,'Table3',{spname:'LSW_SGETPDDFRPRCS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'BRANCH',MnuId:$(".FormPageMultiTab li.active a div").text()+'|'+$("#LogUsr").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5,6,7,8,9,10,12','BRANCH');
	}
	else if(Role == "OPS")
	{
		FncallDocChkLst(this,'Table4',{spname:'LSW_SGETPDDFRPRCS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'OPS',MnuId:$(".FormPageMultiTab li.active a div").text()+'|'+$("#LogUsr").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7,8,9,10,11,12','OPS');
	}
	
}

function VerfyOnChng(Evnt){
	var op=UI_getdata("PDD",$("#PrcsID").val(),"PDD"+$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[8]).text(),"","","LSW_SCHKQURYRAISED")
	if($(op).find("RESULT").text()!="ALLOW"){
		$(Evnt). prop("checked", false);
		$('[name='+Evnt.name+']').not(Evnt).prop("checked", true);
		alert($(op).find("RESULT").text());
		return;
	}
	if(Evnt.value == "Yes"){
		$(Evnt).closest('.tbodytrtd').next().find('button').hide();
	}
	else if(Evnt.value == "No"){
		$(Evnt).closest('.tbodytrtd').next().find('button').show();
	}
}

function REMARKPOPUPDSBL(Evnt){
	var ClosID = $(Evnt).next()
	var val =ClosID.val()
	
	$("#REMARKSPopup").click();
	$("#REMARKSModal").find("#RemarksCONFIRM").attr("data-to",$(ClosID).attr("id"))
	$("#RemarksCONFIRM").hide();
	if(val != ""){
		$("#POPUPRemarks").val(val);
		$("#POPUPRemarks").attr("disabled","disabled")
		$("#POPUPRemarks").next().addClass('active');
		
	}
	else{
		$("#POPUPRemarks").val("");
		$("#POPUPRemarks").attr("disabled","disabled")
		$("#POPUPRemarks").next().addClass('active');
	}
}