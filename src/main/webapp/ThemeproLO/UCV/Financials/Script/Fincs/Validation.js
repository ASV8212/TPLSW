function GridControlDetailFINANCCAM  (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
   
		 
		 { targets: 2, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;		 
		 		var HTML =	'<span><input type="radio" class="custom-control-input CAMMndtry CBSIDBfields" value="Yes" id="ACTIONY'+rowno+'" name="FRCC_ACTION'+rowno+'"><label class="custom-control custom-control-label" for="ACTIONY'+rowno+'">Yes</label>';			 
		 		HTML = HTML + '<input type="radio" class="custom-control-input CAMMndtry CBSIDBfields" value="No" id="ACTIONN'+rowno+'" name="FRCC_ACTION'+rowno+'"><label class="custom-control custom-control-label" for="ACTIONN'+rowno+'">No</label></span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=FRCC_ACTION'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
		        return htmldata[0].outerHTML;   		
					
		         } 
				 }
     	
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
 }

function GridControlDetailFINANCEXIXTING  (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
		 
		 { targets: 5, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;		 
		 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields RTRCONSIDR" value="Yes" id="MULTIPLY'+rowno+'" onclick="getConsider(this)" name="RXLD_MULTIPLIER'+rowno+'"><label class="custom-control custom-control-label" for="MULTIPLY'+rowno+'">Yes</label>';			 
		 		HTML = HTML + '<input type="radio" class="custom-control-input CBSIDBfields RTRCONSIDR" value="No" id="MULTIPLN'+rowno+'" onclick="getConsider(this)" name="RXLD_MULTIPLIER'+rowno+'"><label class="custom-control custom-control-label" for="MULTIPLN'+rowno+'">No</label></span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=RXLD_MULTIPLIER'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
		        return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 { targets: 6, "render": function ( data, type, row, meta ) {                            
			 			if(row[5] == "No")
			 				{
			 				 var rowno = meta.row;       			 
				 			 
						 		var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" onchange="getClosertype(this)"  id="RXLD_CLOSERTYPE'+rowno+'" name="RXLD_CLOSERTYPE'+rowno+'">';
						 			HTML = HTML + '<option value="">Select</option>';
						 			HTML = HTML + '<option value="Normal">Normal</option>';
						 			HTML = HTML + '<option value="BT">BT</option>';
						 			HTML = HTML + '<option value="Others">Others</option></span>';
								          			
						 			var htmldata = $(HTML);
						 			
						 			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

						          return htmldata[0].outerHTML;  
			 				}
			 			else
						{
			 				 var rowno = meta.row;       			 
				 			 
						 		var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" onchange="getClosertype(this)"  style="display:none" id="RXLD_CLOSERTYPE'+rowno+'" name="RXLD_CLOSERTYPE'+rowno+'">';
						 			HTML = HTML + '<option value="">Select</option>';
						 			HTML = HTML + '<option value="Normal">Normal</option>';
						 			HTML = HTML + '<option value="BT">BT</option>';
						 			HTML = HTML + '<option value="Others">Others</option></span>';
								          			
						 			var htmldata = $(HTML);
						 			
						 			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

						          return htmldata[0].outerHTML;  
			 			}
							
							
				         } 
						 },
						 { targets: 7, "render": function ( data, type, row, meta ) {                            
							 if(row[5] == "No")
								 {
								 var rowno = meta.row;	 
									var HTML =	'<span><input type="text" id="RXLD_OTHERS'+rowno+'"  name="RXLD_OTHERS'+rowno+'" maxlength="40" class="form-control NoSpecialChar form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=RXLD_OTHERS'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=RXLD_OTHERS'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;   
								 }
							 else{
								 var rowno = meta.row;	 
									var HTML =	'<span><input type="text" id="RXLD_OTHERS'+rowno+'" style="display:none"  name="RXLD_OTHERS'+rowno+'" maxlength="40" class="form-control NoSpecialChar form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=RXLD_OTHERS'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=RXLD_OTHERS'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML; 
							 }
						         } 
								 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}


function GridControlDetailINCM (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			 //Credit Policy Change Strt
			 var pattern= /Remuneration/;
			 var exists = pattern.test(data);
			 if(($(".FormPageMultiTab li.active").attr("id") == "S00006" && exists != true)||($(".FormPageMultiTab li.active").attr("id") != "S00006")){
				var HTML =	'<span><input type="text" id="FPFI_FINYEAR'+rowno+'" disabled style=""  name="FPFI_FINYEAR'+rowno+'"  class="form-control DSVLBL form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FPFI_FINYEAR'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FPFI_FINYEAR'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;  
			 }
			else{
				var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary"  onchange = "MakReClickElg()" id="FPFI_FINYEAR'+rowno+'" name="FPFI_FINYEAR'+rowno+'">';
       	       			HTML = HTML + '<option value="Partner Remuneration">Partner Remuneration</option>';
						HTML = HTML + '<option value="Director Remuneration">Director Remuneration</option>';
						if(ViewRInavtivePGFlg == "View")
						{
							HTML = HTML + '<option value="Partner/Director Remuneration">Partner/Director Remuneration</option>';
						}
						HTML=HTML+ '</select></span>'; 
						/*if(data=="Partner/Director Remuneration")
						{
							data = "Partner Remuneration";
						}*/
						var htmldata = $(HTML);
       	       			
       	       			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

						return htmldata[0].outerHTML;
			}	
					//Credit Policy Change End
		         } 
				 },
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
	 			if(row[0] != "Gross Margin as per Audit Report" && row[0] != "Gross Turnover" && row[0] != "Gross Turnover"){
					var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FPFI_PERC'+rowno+'" style="width:160px" data-field="FPFI_PERC'+rowno+'|Percentage"  name="FPFI_PERC'+rowno+'" data-item="Percentage" data-total="EGCD_FINYRTOT" data-income="EGCD_PATTOTINCOM|EGCD_MULTIPLIERII" maxlength="3" class="form-control IsPercentageSPL AUTOCOMPUTFLD NoSpecialChar IsNumberFields form-control FinYrIncm">';				 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FPFI_PERC'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FPFI_PERC'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML; 
				}
					else{
						if(data=="")
						{
							data=100;
						}
						var rowno = meta.row;	 
				var HTML =	'<span><input type="text"  style="display:none;" id="FPFI_PERC'+rowno+'" disabled style="width:160px" data-field="FPFI_PERC'+rowno+'|Percentage"  name="FPFI_PERC'+rowno+'" data-item="Percentage" data-total="EGCD_FINYRTOT" maxlength="3" class="form-control AUTOCOMPUTFLD IsPercentageSPL DSVLBL NoSpecialChar IsNumberFields form-control FinYrIncm">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FPFI_PERC'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FPFI_PERC'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML; 
					}						
				
					
		         } 
				 },
				 { targets: 2, "render": function ( data, type, row, meta ) { 
						var pattern= /Remuneration/;
						var exists = pattern.test(row[0]);
			 			if(row[0]!= "Net Profit After Tax" && row[0]!= "Cash Profit" && row[0]!= "Gross Margin as per Audit Report" && exists == false)
				{
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" disabled id="FPFI_YEAR1'+rowno+'" style="width:160px"  name="FPFI_YEAR1'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="EGCD_FINYRTOT" maxlength="30" class="form-control NoSpecialChar IsCURCommaFields DSVLBL form-control FinYrIncm">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=FPFI_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=FPFI_YEAR1'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   
				}
						else if(row[0]== "Gross Margin as per Audit Report"){
						var rowno = meta.row;	 
						var HTML =	'<span><input type="text"  id="FPFI_YEAR1'+rowno+'" onchange="CheckPerVal(this);" style="width:160px" maxlength="5" name="FPFI_YEAR1'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="EGCD_FINYRTOT"  class="form-control  NoSpecialChar IsNumberFields  form-control FinYrIncmFCUK">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=FPFI_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=FPFI_YEAR1'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;  
							}
							else if($(".FormPageMultiTab li.active").attr("id") == "S00006" && exists == true)
							{
								var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="FPFI_YEAR1'+rowno+'"  style="width:160px"  name="FPFI_YEAR1'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="EGCD_FINYRTOT" maxlength="30" class="form-control  NoSpecialChar IsCURCommaFields form-control FinYrIncm">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=FPFI_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=FPFI_YEAR1'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;
							}
else{
						var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="FPFI_YEAR1'+rowno+'" disabled style="width:160px"  name="FPFI_YEAR1'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="EGCD_FINYRTOT" maxlength="30" class="form-control DSVLBL NoSpecialChar IsCURCommaFields form-control FinYrIncm">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=FPFI_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=FPFI_YEAR1'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;  
}
							
				         } 
						 },
						 { targets: 3, "render": function ( data, type, row, meta ) {                            
					 			var pattern= /Remuneration/;
								var exists = pattern.test(row[0]);
								if(row[0]!= "Net Profit After Tax" && row[0]!= "Cash Profit" && row[0]!= "Gross Margin as per Audit Report" && exists == false)
				{
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" disabled id="FPFI_YEAR2'+rowno+'" style="width:160px" name="FPFI_YEAR2'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" maxlength="30" data-total="EGCD_FINYRTOT" class="form-control NoSpecialChar DSVLBL IsCURCommaFields form-control FinYrIncm">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FPFI_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FPFI_YEAR2'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML; 
				}
				else if(row[0]== "Gross Margin as per Audit Report"){
					var rowno = meta.row;	 
								var HTML =	'<span><input type="text"  id="FPFI_YEAR2'+rowno+'" onchange="CheckPerVal(this);" style="width:160px" name="FPFI_YEAR2'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" maxlength="30" data-total="EGCD_FINYRTOT" class="form-control NoSpecialChar IsNumberFields   form-control FinYrIncmFCUK">';
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FPFI_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FPFI_YEAR2'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;
				}
				else if($(".FormPageMultiTab li.active").attr("id") == "S00006" && exists == true){
						
					var rowno = meta.row;	
					var HTML =	'<span><input type="text" id="FPFI_YEAR2'+rowno+'"  style="width:160px" name="FPFI_YEAR2'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" maxlength="30" data-total="EGCD_FINYRTOT" class="form-control  NoSpecialChar IsCURCommaFields form-control FinYrIncm">';					
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FPFI_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FPFI_YEAR2'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML; 
				}
else{
var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FPFI_YEAR2'+rowno+'" disabled style="width:160px" name="FPFI_YEAR2'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" maxlength="30" data-total="EGCD_FINYRTOT" class="form-control DSVLBL NoSpecialChar IsCURCommaFields form-control FinYrIncm">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FPFI_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FPFI_YEAR2'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML; 
}	
									
						  } 
					 },
					 { targets: 4, "render": function ( data, type, row, meta ) {                            
				 			
							if(row[0]!= "Net Profit After Tax" && row[0]!= "Cash Profit")
				{
						 var rowno = meta.row;	 
						 /*data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="EGCD_FINYRTOT"*/
							var HTML =	'<span><input type="text" disabled id="FPFI_YEAR3'+rowno+'" style="width:160px" name="FPFI_YEAR3'+rowno+'"  maxlength="30" class="form-control NoSpecialChar DSVLBL IsCURCommaFields form-control FinYrIncm">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=FPFI_YEAR3'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=FPFI_YEAR3'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;  
				}
else{
var rowno = meta.row;	 
						 /*data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="EGCD_FINYRTOT"*/
							var HTML =	'<span><input type="text" id="FPFI_YEAR3'+rowno+'" disabled style="width:160px" name="FPFI_YEAR3'+rowno+'"  maxlength="30" class="form-control NoSpecialChar DSVLBL IsCURCommaFields form-control FinYrIncm">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=FPFI_YEAR3'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=FPFI_YEAR3'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;  
}	
								
					  } 
				 },
						 { targets: 5, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" disabled id="FPFI_AVERAGE'+rowno+'" style="width:160px" name="FPFI_AVERAGE'+rowno+'" data-item="Average" maxlength="15" class="form-control NoSpecialChar IsCURCommaFields form-control DSVLBL">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FPFI_AVERAGE'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FPFI_AVERAGE'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
									
						  } 
					 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}

function GridControlDetailIOTHNCM (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
				var HTML =	'<span>'
				if($(".FormPageMultiTab li.active").attr("id")!="S00008" && $(".FormPageMultiTab li.active").attr("id")!="S00001" && $(".FormPageMultiTab li.active").attr("id")!="S00004" && $(".FormPageMultiTab li.active").attr("id")!="S00009"){
				HTML =	HTML+'<input type="text"  id="FPOI_FINYEAR'+rowno+'" style="" name="FPOI_FINYEAR'+rowno+'" maxlength="40" class="form-control datasave NoSpecialChar form-control">';			 
				}
				else if($(".FormPageMultiTab li.active").attr("id")=="S00004"){
				HTML =	 HTML+'<select class="Gridmdb-select md-form colorful-select RIOIDD dropdown-primary datasave FinYrIncmDrpDwn"  data-perc="FPOI_PERC'+rowno+'" id="FPOI_FINYEAR'+rowno+'" name="FPOI_FINYEAR'+rowno+'">';
				HTML = HTML +OthrIncmDropDwn+'</select>';
				}
				else{
				HTML =	HTML+'<select class="Gridmdb-select md-form colorful-select dropdown-primary FinYrIncmDrpDwn datasave" id="FPOI_FINYEAR'+rowno+'" name="FPOI_FINYEAR'+rowno+'">';
				HTML = HTML +OthrIncmDropDwn+'</select>';
				}
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					if($(".FormPageMultiTab li.active").attr("id")!="S00001" && $(".FormPageMultiTab li.active").attr("id")!="S00008" && $(".FormPageMultiTab li.active").attr("id")!="S00004" && $(".FormPageMultiTab li.active").attr("id")!="S00009"){
				if ($(htmldata).find('[name=FPOI_FINYEAR'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FPOI_FINYEAR'+rowno+']').attr("value",data);
					}
					else{
						$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
					}
					return htmldata[0].outerHTML;   		
					
		         }
				 },
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;
                if(row[0]=="Agriculture")
				{
			 
				var HTML =	'<span><input type="text" id="FPOI_PERC'+rowno+'" style="width:160px" name="FPOI_PERC'+rowno+'" data-field="FPOI_PERC'+rowno+'|Percentage" data-item="Percentage" data-total="EGCD_FINOTHYRTOT" maxlength="3" class="form-control AUTOCOMPUTFLD NoSpecialChar Perc HalfIsPercentageFld IsNumberFields form-control FinYrIncm">';			 
				    HTML = HTML + '</span>'; 
				}
               else
			     {
                  var HTML =	'<span><input type="text" id="FPOI_PERC'+rowno+'" style="width:160px" name="FPOI_PERC'+rowno+'" data-field="FPOI_PERC'+rowno+'|Percentage" data-item="Percentage" data-total="EGCD_FINOTHYRTOT" maxlength="3" class="form-control AUTOCOMPUTFLD NoSpecialChar Perc IsNumberFields IsPercentageFld form-control FinYrIncm">';			 
				      HTML = HTML + '</span>'; 
                 }	
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FPOI_PERC'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FPOI_PERC'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 { targets: 2, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="FPOI_YEAR1'+rowno+'" style="width:160px"  name="FPOI_YEAR1'+rowno+'" data-item="Amount" data-total="EGCD_FINOTHYRTOT" maxlength="30" class="form-control NoSpecialChar IsCURCommaFields form-control FinYrIncm">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=FPOI_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=FPOI_YEAR1'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
				         } 
						 },
						 { targets: 3, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FPOI_YEAR2'+rowno+'" style="width:160px" data-item="Amount" name="FPOI_YEAR2'+rowno+'" data-total="EGCD_FINOTHYRTOT" maxlength="30" class="form-control NoSpecialChar IsCURCommaFields form-control FinYrIncm">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FPOI_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FPOI_YEAR2'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
						  } 
					 },
					 { targets: 4, "render": function ( data, type, row, meta ) {                            
				 			
						 var rowno = meta.row;	 
						 /*data-item="Amount" data-total="EGCD_FINOTHYRTOT"*/
							var HTML =	'<span><input type="text" id="FPOI_YEAR3'+rowno+'" style="width:160px" name="FPOI_YEAR3'+rowno+'"  maxlength="30" class="form-control NoSpecialChar IsCURCommaFields form-control FinYrIncm">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=FPOI_YEAR3'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=FPOI_YEAR3'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   		
								
					  } 
				 },
						 { targets: 5, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" disabled id="FPOI_AVERAGE'+rowno+'" style="width:160px" name="FPOI_AVERAGE'+rowno+'" data-item="Average" data-total="EGCD_FINOTHYRTOT" maxlength="15" class="form-control NoSpecialChar IsCURCommaFields DSVLBL form-control  FinYrIncm">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FPOI_AVERAGE'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FPOI_AVERAGE'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
									
						  } 
					 },
					 
		           	  {
		       			 targets: 8, "render": function ( data, type, row, meta )
		       			 {
		       				var rowno = meta.row; 
                            var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DELETINCOME DELBTN " title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
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
//*********Credit Change Strt*********
function GridControlDetailPRSEPCALC(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm){
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
		var HTML =	'<span>'
		HTML =	HTML +'<input type="text" disabled id="SEPP_FINYEAR'+rowno+'" style="" name="SEPP_FINYEAR'+rowno+'"  class="form-control  NoSpecialChar form-control DSVLBL">';
		HTML = HTML + '</span>'; 
					 
		var htmldata = $(HTML);
		if ($(htmldata).find('[name=SEPP_FINYEAR'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=SEPP_FINYEAR'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;		
	   }
	   },
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="SEPP_PERC'+rowno+'" style="width:160px" name="SEPP_PERC'+rowno+'" data-field="SEPP_PERC'+rowno+'|Percentage"  data-item="Percentage"  maxlength="3" class="form-control AUTOCOMPUTFLD FinYrIncmBCTH IsPercentageSPL NoSpecialChar Perc IsNumberFields form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=SEPP_PERC'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=SEPP_PERC'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 { targets: 2, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="SEPP_YEAR1'+rowno+'" style="width:160px"  name="SEPP_YEAR1'+rowno+'" data-item="Amount"  maxlength="15" class="form-control FinYrIncmBCTH NoSpecialChar IsCURCommaFields form-control ">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=SEPP_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=SEPP_YEAR1'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
				         } 
				},
						 { targets: 3, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="SEPP_YEAR2'+rowno+'" style="width:160px" data-item="Amount" name="SEPP_YEAR2'+rowno+'"  data-item="Amount" maxlength="15" class="form-control FinYrIncmBCTH NoSpecialChar IsCURCommaFields form-control ">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=SEPP_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=SEPP_YEAR2'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
						  } 
					 },
					 { targets: 4, "render": function ( data, type, row, meta ) {                            
				 			
						 var rowno = meta.row;	 
						 /*data-item="Amount" data-total="EGCD_FINOTHYRTOT"*/
							var HTML =	'<span><input type="text" id="SEPP_YEAR3'+rowno+'" style="width:160px" name="SEPP_YEAR3'+rowno+'"  maxlength="15" class="form-control FinYrIncmBCTH NoSpecialChar IsCURCommaFields form-control ">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=SEPP_YEAR3'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=SEPP_YEAR3'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   		
								
					  } 
				 },
						 { targets: 5, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" disabled id="SEPP_AVERAGE'+rowno+'" style="width:160px" name="SEPP_AVERAGE'+rowno+'" data-item="Average"  maxlength="15" class="form-control NoSpecialChar IsCURCommaFields DSVLBL form-control ">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=SEPP_AVERAGE'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=SEPP_AVERAGE'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
									
						  } 
					 }
					 ],

         "fnDrawCallback": function (oSettings) {
        	 

        }

        });
		}

function GridControlDetailGRSEPCALC(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm){
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
		var HTML =	'<span>'
		HTML =	HTML +'<input type="text" disabled id="SEPG_FINYEAR'+rowno+'" style="" name="SEPG_FINYEAR'+rowno+'"  class="form-control  NoSpecialChar form-control DSVLBL">';
		HTML = HTML + '</span>'; 
					 
		var htmldata = $(HTML);
		if ($(htmldata).find('[name=SEPG_FINYEAR'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=SEPG_FINYEAR'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;		
	   }
	   },
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="SEPG_PERC'+rowno+'" style="width:160px" name="SEPG_PERC'+rowno+'" data-field="SEPG_PERC'+rowno+'|Percentage"  data-item="Percentage"  maxlength="3" class="form-control AUTOCOMPUTFLD FinYrIncmBCTH IsPercentageSPL NoSpecialChar Perc IsNumberFields form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=SEPG_PERC'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=SEPG_PERC'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 { targets: 2, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="SEPG_YEAR1'+rowno+'" style="width:160px"  name="SEPG_YEAR1'+rowno+'" data-item="Amount"  maxlength="15" class="form-control FinYrIncmBCTH NoSpecialChar IsCURCommaFields form-control ">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=SEPG_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=SEPG_YEAR1'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
				         } 
				},
						 { targets: 3, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="SEPG_YEAR2'+rowno+'" style="width:160px" data-item="Amount" name="SEPG_YEAR2'+rowno+'"  data-item="Amount" maxlength="15" class="form-control FinYrIncmBCTH NoSpecialChar IsCURCommaFields form-control ">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=SEPG_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=SEPG_YEAR2'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
						  } 
					 },
					 { targets: 4, "render": function ( data, type, row, meta ) {                            
				 			
						 var rowno = meta.row;	 
						 /*data-item="Amount" data-total="EGCD_FINOTHYRTOT"*/
							var HTML =	'<span><input type="text" id="SEPG_YEAR3'+rowno+'" style="width:160px" name="SEPG_YEAR3'+rowno+'"  maxlength="15" class="form-control FinYrIncmBCTH NoSpecialChar IsCURCommaFields form-control ">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=SEPG_YEAR3'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=SEPG_YEAR3'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   		
								
					  } 
				 },
						 { targets: 5, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" disabled id="SEPG_AVERAGE'+rowno+'" style="width:160px" name="SEPG_AVERAGE'+rowno+'" data-item="Average"  maxlength="15" class="form-control NoSpecialChar IsCURCommaFields DSVLBL form-control ">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=SEPG_AVERAGE'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=SEPG_AVERAGE'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
									
						  } 
					 }
					 ],

         "fnDrawCallback": function (oSettings) {
        	 

        }

        });
		}
						 
//*********Credit Change End*********
function GridControlDetailRTRELIG (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
	   { targets: 3, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="RTEG_EMI'+rowno+'" style=""  name="RTEG_EMI'+rowno+'" maxlength="30" data-item="Amount" class="form-control NoSpecialChar IsCURCommaFields DSVLBL IsNumberFields form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=RTEG_EMI'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=RTEG_EMI'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },{ targets: 4, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="RTEG_VINTAGE'+rowno+'" style="" name="RTEG_VINTAGE'+rowno+'" maxlength="40" class="form-control NoSpecialChar DSVLBL IsNumberFields form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=RTEG_VINTAGE'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=RTEG_VINTAGE'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
	   
	   { targets: 6, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="RTEG_MULTIPLIER'+rowno+'" style="" name="RTEG_MULTIPLIER'+rowno+'" maxlength="40" class="form-control NoSpecialChar IsNumberFields form-control RTRMultp">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=RTEG_MULTIPLIER'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=RTEG_MULTIPLIER'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 { targets: 7, "render": function ( data, type, row, meta ) {                            
						
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="RTEG_AMOUNT'+rowno+'" style="" data-item="Result" name="RTEG_AMOUNT'+rowno+'" maxlength="40" class="form-control IsCURCommaFields DSVLBL  NoSpecialChar IsNumberFields form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=RTEG_AMOUNT'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=RTEG_AMOUNT'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
							
				         } 
						 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}

function GridControlDetailRTRNORMS (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
	   { targets: 2, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FRTN_MULTIPL'+rowno+'" style="" name="FRTN_MULTIPL'+rowno+'" maxlength="40" class="form-control DSVLBL NoSpecialChar form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FRTN_MULTIPL'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FRTN_MULTIPL'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
		         } 
				 }
	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}

function GridControlDetailFINCELIGB (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
				var HTML =	'<span><input type="text" id="FIEG_MONTHINC'+rowno+'" style="" data-item="MainIncome" name="FIEG_MONTHINC'+rowno+'" maxlength="40" class="form-control  DSVLBL IsNumberFieldsSpl IsCURCommaFields NoSpecialChar form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FIEG_MONTHINC'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FIEG_MONTHINC'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
	   { targets: 2, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FIEG_OTHSRC'+rowno+'" style="" data-item="OtherIncome" name="FIEG_OTHSRC'+rowno+'" maxlength="40" class="form-control IsNumberFieldsSpl IsCURCommaFields DSVLBL NoSpecialChar form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FIEG_OTHSRC'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FIEG_OTHSRC'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
	   { targets: 3, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FIEG_OBLIGATION'+rowno+'" style="" data-item="Obligation" name="FIEG_OBLIGATION'+rowno+'" maxlength="40" class="form-control DSVLBL IsNumberFieldsSpl IsCURCommaFields NoSpecialChar form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FIEG_OBLIGATION'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FIEG_OBLIGATION'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
	   { targets: 4, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FIEG_FOIR'+rowno+'" style="" name="FIEG_FOIR'+rowno+'" data-item="FOIR" maxlength="40" class="form-control DSVLBL NoSpecialChar IsNumberFieldsSpl IsCURCommaFields form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FIEG_FOIR'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FIEG_FOIR'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
	   { targets: 5, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FIEG_LONELGBLE'+rowno+'" style="" data-item="EligibleAmount" name="FIEG_LONELGBLE'+rowno+'" maxlength="40" class="form-control DSVLBL IsNumberFieldsSpl IsCURCommaFields NoSpecialChar form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FIEG_LONELGBLE'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FIEG_LONELGBLE'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 }
	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}


function GridControlDetailRRELIG (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
				var HTML =	'<span><select class="Gridmdb-select md-form colorful-select dropdown-primary RRMulti CONSRI" id="FRRE_NOCTENANTS'+rowno+'" style="" name="FRRE_NOCTENANTS" DdData="FRRE_NOCTENANTS" maxlength="80" class="form-control form-control">';			 
				HTML = HTML + '<option value="">Select</option>';
				
				HTML = HTML + '<option value="Registered Lease Agreement">Registered Lease Agreement</option><option value="Bank credit with Un-registered Lease Agreement">Bank credit with Un-registered Lease Agreement</option><option value="Cash Rental with un-registered Lease agreement">Cash Rental with un-registered Lease agreement</option></span>'; 
				var htmldata = $(HTML);
				$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
					return htmldata[0].outerHTML;  	
		         } 
				 },
	   { targets: 2, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FRRE_PROPADDR'+rowno+'" style="" name="FRRE_PROPADDR" maxlength="80" class="form-control form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FRRE_PROPADDR'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FRRE_PROPADDR]').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
	   { targets: 3, "render": function ( data, type, row, meta ) {                            
			
		   var rowno = meta.row;                                
           
           var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" id="FRRE_OWNER'+rowno+'" name="FRRE_OWNER">';
           var PrcsID=$("#RCCM_PRCSID").val();
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
	   { targets: 4, "render": function ( data, type, row, meta ) {                            
			
		   var rowno = meta.row;		 
	 		var HTML =	'<form><span><input type="radio" class="custom-control-input CBSIDBfields RRMulti" value="Yes" id="AvaliYes'+rowno+'" name="FRRE_RRAVALIB"><label class="custom-control custom-control-label" for="AvaliYes'+rowno+'">Yes</label>';			 
	 		HTML = HTML + '<input type="radio" class="custom-control-input CBSIDBfields RRMulti" value="No" id="AvaliNo'+rowno+'" name="FRRE_RRAVALIB"><label class="custom-control custom-control-label" for="AvaliNo'+rowno+'">No</label></span></form>';			  
	 		
	 		var htmldata = $(HTML);
				
				$(htmldata).find('[name=FRRE_RRAVALIB][value="'+data+'"]').attr('checked', 'checked');

				//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
				//alert(htmldata[0].outerHTML);
				
	return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 { targets: 5, "render": function ( data, type, row, meta ) {                            
			        if(row[1]=="Cash Rental with un-registered Lease agreement")
					{
						var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FRRE_CONSRI'+rowno+'" style="" data-field="FRRE_CONSRI'+rowno+'|Percentage" data-item="Percentage" name="FRRE_CONSRI" maxlength="5" data-item1="CONSRI" class="form-control Perc RRMulti IsNumberFields CalcMRent NoSpecialChar HalfIsPercentageFld form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FRRE_CONSRI]').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FRRE_CONSRI]').attr("value",data);
					return htmldata[0].outerHTML; 
					}
					else
					{
			    var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FRRE_CONSRI'+rowno+'" style="" data-field="FRRE_CONSRI'+rowno+'|Percentage" data-item="Percentage" name="FRRE_CONSRI" maxlength="5" data-item1="CONSRI" class="form-control Perc RRMulti IsNumberFields CalcMRent NoSpecialChar form-control IsPercentageFld">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FRRE_CONSRI]').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FRRE_CONSRI]').attr("value",data);
					return htmldata[0].outerHTML;  		
					}
		         } 
				 },
	   { targets: 6, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FRRE_MONTHRENT'+rowno+'" style="" name="FRRE_MONTHRENT" maxlength="40" data-item="MRENT" class="form-control RRMulti IsNumberFields CalcMRent IsCURCommaFields NoSpecialChar form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FRRE_MONTHRENT]').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FRRE_MONTHRENT]').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
	   { targets: 7, "render": function ( data, type, row, meta ) {                            
			
		   var rowno = meta.row;		 
	 		var HTML =	'<form><span><input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="ITRYes'+rowno+'" name="FRRE_ITR"><label class="custom-control custom-control-label" for="ITRYes'+rowno+'">Yes</label>';			 
	 		HTML = HTML + '<input type="radio" class="custom-control-input CBSIDBfields" value="No" id="ITRNo'+rowno+'" name="FRRE_ITR"><label class="custom-control custom-control-label" for="ITRNo'+rowno+'">No</label></span></form>';			  
	 		
	 		var htmldata = $(HTML);
				
				$(htmldata).find('[name=FRRE_ITR][value="'+data+'"]').attr('checked', 'checked');

				//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
				//alert(htmldata[0].outerHTML);
				
	return htmldata[0].outerHTML; 		
					
		         } 
				 },
				 { targets: 8, "render": function ( data, type, row, meta ) {                            
						
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="FRRE_REMAINYER'+rowno+'" style="" name="FRRE_REMAINYER" maxlength="10" class="form-control IsNumberFields LeasePeriod  NoSpecialChar form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=FRRE_REMAINYER]').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=FRRE_REMAINYER]').attr("value",data);
							return htmldata[0].outerHTML;   		
							
				         } 
						 },
						 { targets: 9, "render": function ( data, type, row, meta ) {
						            var rowno = meta.row;	 
				                    var HTML =	'<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" id="FRRE_VEIRFYBY'+rowno+'" style="" name="FRRE_VEIRFYBY" maxlength="80" class="form-control form-control">';			 
				                        HTML = HTML + '<option value="">Select</option><option value="Sales">Sales</option><option value="Credit">Credit</option><option value="Banking">Banking</option><option value="RCU">RCU</option>';	 
				                        HTML = HTML + '</span>'; 
				                    var htmldata = $(HTML);
				                       $(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
					                   return htmldata[0].outerHTML;  	
		                     }
				        },
				  { targets: 10, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FRRE_VEIRFYPERS'+rowno+'" style="" name="FRRE_VEIRFYPERS" maxlength=""  class="form-control IsAlphaFields  NoSpecialChar form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FRRE_VEIRFYPERS]').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FRRE_VEIRFYPERS]').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 
				 
				{ targets: 11, "render": function ( data, type, row, meta ) {                            
								
							 var rowno = meta.row;	 
								var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="RRDelGridrow" title="Delete" attr-Upd="ACTION'+rowno+'" CalcFld="ICEG_TOTRENTINCM|FRRE_MONTHRENT|'+rowno+'|FRRE_RRAVALIB|FRRE_NOCTENANTS|FRRE_CONSRI"  width="20" height="20"/>';			 
		        				HTML = HTML + '</span>';  
		        				var htmldata = $(HTML);				
		        				return htmldata[0].outerHTML;
									 
								var htmldata = $(HTML);
									

						         } 
								 }, 
						 
						 
						 
	   ],

         "fnDrawCallback": function (oSettings) {

        },
        

        });
}



//Calculation Start


$(document).ready(function () {	
	
	$(document).on("blur", ".FinYrIncmFCUK", function() {
		$("#ISELGBLTYCHECKED").val('0');
			var AmtLngth = $(this).closest('.tbodytr').find('[data-item=Amount]').length;
			var Amount = 0;
			var val="";
			for (i=0;i<AmtLngth;i++)
				{
				val = $($(this).closest('.tbodytr').find('[data-item=Amount]')[i]).val().replace(/,/g,'');
				if (val == "")
					{
					val = 0;
					}
				Amount = parseFloat(Amount) + parseFloat(val);
				}
			var Percentage =  $($(this).closest('.tbodytr').find('[data-item=Percentage]')[0]).val().replace(/,/g,'');
			if (Percentage == "")
			{
				Percentage = 0;
			}
			var Average = ((parseFloat(parseFloat(Amount)/100) * parseFloat(Percentage))/ parseInt(AmtLngth)).toFixed(2);
			$($(this).closest('.tbodytr').find('[data-item=Average]')[0]).val(CURINRCommaSep(parseFloat(Average).toFixed(2))); 
			
			var crntyr=$($(this).closest('.tbodytr').prev().find('.tbodytrtd')[2]).find('input').val().replace(/,/g,'')
			var prevyr = $($(this).closest('.tbodytr').prev().find('.tbodytrtd')[3]).find('input').val().replace(/,/g,'')
			var FnlVal=0;
			if(parseFloat(crntyr)<parseFloat(prevyr)){
				FnlVal=crntyr
			}
			else{
				FnlVal = (parseFloat(crntyr)+parseFloat(prevyr))/2
			}
			$($(this).closest('.tbodytr').prev().find('.tbodytrtd')[5]).find('input').val(CURINRCommaSep(parseFloat(FnlVal).toFixed(2)))
			
			var TotalAverageFld = $(this).attr("data-total");
			if(FnlVal==NaN)
			   {
				 FnlVal=0;  
			   }
		$(this).closest(".DYNROW").find('[name='+TotalAverageFld+']').val(CURINRCommaSep(parseFloat(FnlVal).toFixed(2)));
			
	});
	//Credit Policy Change Strt
	$(document).on("blur", ".FinYrIncmBCTH", function() {
		$("#ISELGBLTYCHECKED").val('0');
		var AmtLngth = $(this).closest('.tbodytr').find('[data-item=Amount]').length;
		var Amount = 0;
		var val="";
		
		for (i=0;i<AmtLngth;i++)
				{
				val = $($(this).closest('.tbodytr').find('[data-item=Amount]')[i]).val().replace(/,/g,'');
				if (val == "")
					{
					val = 0;
					}
				Amount = parseFloat(Amount) + parseFloat(val);
				}
			var Percentage =  $($(this).closest('.tbodytr').find('[data-item=Percentage]')[0]).val().replace(/,/g,'');
			if (Percentage == "")
			{
				Percentage = 0;
			}
			var Average = ((parseFloat(parseFloat(Amount)/100) * parseFloat(Percentage))/ parseInt(AmtLngth)).toFixed(2);
			$($(this).closest('.tbodytr').find('[data-item=Average]')[0]).val(CURINRCommaSep(parseFloat(Average).toFixed(2)));
			TotValCompCall(this);
	});
	//Credit Policy Change End
	// STANDARD PRIME,LIP,GTO GRID CALCULATIONS START
	$(document).on("blur", ".FinYrIncm", function() {
		
		//$(this).val();
		
		$("#ISELGBLTYCHECKED").val('0');
		//var xml1=UI_getdata($("#PrcsID").val(),$($($(this).parent().parent().parent()).find('.tbodytrtd')[6]).text(),"","","","LSW_SGETINDUSCATRGORY");
		//$("#HiddenINDUSCATRGORY").val($(xml1).find("INDUSCATRGORY").text());
		//Calc of Net Profit After Tax Begin
		var CrntVal = $(this).val().replace(/,/g,'')
		var CrntColIndx = $(this).parent().parent().index();
		var CrntRowIndx = $(this).parent().parent().parent().index();
		if(CrntColIndx ==2||CrntColIndx==3||CrntColIndx==4)
			{
			
		/*var CrntColRow=$(this).closest('.tbodytr').index()*/
		var CrntTabVal=$($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find('input[type=text]').val()
		var chkval="";
		var toval="";
			var val="";
			var sumval=0;
			var sumval1=0;
		if($($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find('input[type=text]').val()=="Net profit as per P/L" || $($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find('input[type=text]').val()=="Tax Paid As Per ITR")
			{
			 chkval =$("#HiddenVal").val().split(',')[0]
			 toval=$("#HiddenVal").val().split(',')[1];
			}
		else{
			chkval =$("#HiddenCashPrft").val().split(',')[0]
			toval=$("#HiddenCashPrft").val().split(',')[1];
		}
		
		
		 
		var compval="";
			if(toval=="Net Profit After Tax")
				{
				chkval=chkval.replace(CrntTabVal,'').replace('|','')
				for(var n=0;n<$(this).closest('.tbody').find('tr').length;n++)
				{
				if($($($(this).closest('.tbody').find('tr')[n]).find('td')[0]).find('input[type=text]').val()==chkval){
					if($($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,'')!=""){
						/*if(parseFloat(CrntVal)>parseFloat($($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,'')))
								{*/
							compval=parseFloat($($($(this).closest('.tbody').find('tr')[0]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,''))-parseFloat($($($(this).closest('.tbody').find('tr')[1]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,''))
								/*}
						else{*/
							/*compval=parseFloat($($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,''))-parseFloat(CrntVal)*/
						/*}*/
						
					}
					else{
						compval=CrntVal
					}
					break;
				}
				}
			for(var n=0;n<$(this).closest('.tbody').find('tr').length;n++){
				if($($($(this).closest('.tbody').find('tr')[n]).find('td')[0]).find('input[type=text]').val()==toval)
					{
					$($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val(compval)
					break
					}
				
			}
			chkval =$("#HiddenCashPrft").val().split(',')[0]
			toval=$("#HiddenCashPrft").val().split(',')[1];
			if(toval=="Cash Profit"){
				for(var i=0;i<chkval.split('|').length;i++)
					{
					val=chkval.split('|')[i]
					for(var n=0;n<$(this).closest('.tbody').find('tr').length;n++)
						{
						if($($($(this).closest('.tbody').find('tr')[n]).find('td')[0]).find('input[type=text]').val()==val)
							{
							if($($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,'')!=""){
								sumval=sumval+parseFloat($($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,''))
								
							}
							break
							}
						}
					}
				for(var n=0;n<$(this).closest('.tbody').find('tr').length;n++){
					var findminval = "Net Profit After Tax"
						if($($($(this).closest('.tbody').find('tr')[n]).find('td')[0]).find('input[type=text]').val()==findminval){
							sumval1=parseFloat($($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,''))
							break
						}
				}
				for(var n=0;n<$(this).closest('.tbody').find('tr').length;n++){
					if($($($(this).closest('.tbody').find('tr')[n]).find('td')[0]).find('input[type=text]').val()==toval)
					{
					if(sumval1<sumval)
						{
						$($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val(sumval1)
						}
					else{
						$($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val(sumval)
					}
					break
					}
				}
					
					
				}
				}
			else if(toval=="Cash Profit"){
				for(var i=0;i<chkval.split('|').length;i++)
					{
					val=chkval.split('|')[i]
					for(var n=0;n<$(this).closest('.tbody').find('tr').length;n++)
						{
						if($($($(this).closest('.tbody').find('tr')[n]).find('td')[0]).find('input[type=text]').val()==val)
							{
							if($($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,'')!=""){
								sumval=sumval+parseFloat($($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,''))
								
							}
							break
							}
						}
					}
				for(var n=0;n<$(this).closest('.tbody').find('tr').length;n++){
					var findminval = "Net Profit After Tax"
						if($($($(this).closest('.tbody').find('tr')[n]).find('td')[0]).find('input[type=text]').val()==findminval){
							sumval1=parseFloat($($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,''))
							break
						}
				}
				for(var n=0;n<$(this).closest('.tbody').find('tr').length;n++){
					if($($($(this).closest('.tbody').find('tr')[n]).find('td')[0]).find('input[type=text]').val()==toval)
					{
					if(sumval1<sumval)
						{
						$($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val(sumval1)
						}
					else{
						$($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val(sumval)
					}
					break
					}
				}
					
					
				}
			}
			
			
			

		//Calc of Net Profit After Tax End
		var AmtLngth = $(this).closest('.tbodytr').find('[data-item=Amount]').length;
		var Amount = 0;
		var val="";
		for (i=0;i<AmtLngth;i++)
			{
			val = $($(this).closest('.tbodytr').find('[data-item=Amount]')[i]).val().replace(/,/g,'');
			if (val == "")
				{
				val = 0;
				}
			Amount = parseFloat(Amount) + parseFloat(val);
			}
		var Percentage =  $($(this).closest('.tbodytr').find('[data-item=Percentage]')[0]).val().replace(/,/g,'');
		if (Percentage == "")
		{
			Percentage = 0;
		}
		var Average = ((parseFloat(parseFloat(Amount)/100) * parseFloat(Percentage))/ parseInt(AmtLngth)).toFixed(0);
		$($(this).closest('.tbodytr').find('[data-item=Average]')[0]).val(CURINRCommaSep(parseFloat(Average).toFixed(2))); 	
		var AverageLngth = $(this).closest('.tbody').find('[data-item=Average]').length;
		
		//Standard Prime Program - Income Consideration - Net Profit STRT
		if($(".FormPageMultiTab li.active").attr("id") == "S00001" || $(".FormPageMultiTab li.active").attr("id") == "S00008"){
			if(($($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find("input").val() == "Net profit as per P/L" || $($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find("input").val() == "Net Profit After Tax" || $($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find("input").val() == "Net profit after tax(PAT)"  || $($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find("input").val() == "Depreciation" || $($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find("input").val() == "Salary / Remuneration from Firm" || $($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find("input").val() == "Rental Income as per ITR")){
				var lastyr = $($(this).closest('.tbodytr').find('.tbodytrtd')[2]).find("input").val().replace(/,/g,'');
				var prevoflastyr = $($(this).closest('.tbodytr').find('.tbodytrtd')[3]).find("input").val().replace(/,/g,'');
				var twodiffr = lastyr - prevoflastyr;
				var logic = (twodiffr/prevoflastyr)*100;
				if(logic<50)
				{
					var AverageFinlVal = ((parseFloat(parseFloat(lastyr)/100) * parseFloat(Percentage))).toFixed(0);
					if(isNaN(AverageFinlVal))
					{
						AverageFinlVal = 0;
					}
					if(AverageFinlVal == "")
					{
						AverageFinlVal = 0;
					}
					$($(this).closest('.tbodytr').find('[data-item=Average]')[0]).val(CURINRCommaSep(parseFloat(AverageFinlVal).toFixed(2))); 	
				}
			}
			else if($($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find("input").val() == "Tax Paid As Per ITR" || $($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find("input").val() == "Interest on Term Loans"|| $($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find("input").val() == "Interest on OD and CC"){
				var lastyr1 = $($(this).closest('.tbodytr').find('.tbodytrtd')[2]).find("input").val().replace(/,/g,'');
				var AverageFinlVal1 = ((parseFloat(parseFloat(lastyr1)/100) * parseFloat(Percentage))).toFixed(0);
				if(isNaN(AverageFinlVal1))
				{
					AverageFinlVal1 = 0;
				}
				if(AverageFinlVal1 == "")
					{
						AverageFinlVal1 = 0;
					}
				$($(this).closest('.tbodytr').find('[data-item=Average]')[0]).val(CURINRCommaSep(parseFloat(AverageFinlVal1).toFixed(2))); 	
			}
		}
		//Standard Prime Program - Income Consideration - Net Profit END
		
		// PAT Multiplier Income START
		   if($(".FormPageMultiTab li.active").attr("id")=="S00008")
		   {
		    if($($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find("input").val()=="Net profit after tax(PAT)")
			{
				var PATAvr=$($(this).closest('.tbodytr').find('.tbodytrtd')[5]).find("input").val();
				PATAvr=PATAvr.replace(/,/g,'')
				var Field=$(this).attr("data-income");
				
				var Income= Field.split('|')[0]
				var Multiplier= Field.split('|')[1]
				if($(this).closest(".DYNROW").find('[name='+Multiplier+']').val()=="")
				{
					$(this).closest(".DYNROW").find('[name='+Multiplier+']').val('0')
					Multiplier=0;
				}
				else
				{
					Multiplier=$(this).closest(".DYNROW").find('[name='+Multiplier+']').val()
				}
				var OutIncome=parseInt(Multiplier)*parseFloat(PATAvr)
				if(OutIncome==NaN)
				{
					OutIncome='0'
				}
				$(this).closest(".DYNROW").find('[name='+Income+']').val(CURINRCommaSep(parseFloat(OutIncome).toFixed(0)));
			}
		  }
		//PAT Multiplier Income End
		
		Amount = 0;
		val="";
		var NetPrft=0;
		var IntrstOnLoan=0;
		var Despr=0;
		var GrsTrnOvr = 0;
		var StndrPrm = 0;
		var GrdName = $($(this).closest('.tbody').prev().find('th')[0]).text();
		for (j=0;j<AverageLngth;j++)
		{
			if(GrdName=="FINANCIAL YEAR"){
				//if($("#HiddenINDUSCATRGORY").val() == "Manufacturing"){
					/*if($(this).closest(".DYNROW").find('[name=INDUSTRYCAT]').val()== "Manufacturing"){
				if($($($(this).closest('.tbody').find('.tbodytr')[j]).find('.tbodytrtd')[0]).find('input').val()=="Net Profit After Tax" || $($($(this).closest('.tbody').find('.tbodytr')[j]).find('.tbodytrtd')[0]).find('input').val()=="Depreciation" || $($($(this).closest('.tbody').find('.tbodytr')[j]).find('.tbodytrtd')[0]).find('input').val()=="Interest on Term Loans" || $($($(this).closest('.tbody').find('.tbodytr')[j]).find('.tbodytrtd')[0]).find('input').val() == "Net profit after tax(PAT)"){
					val = $($(this).closest('.tbody').find('[data-item=Average]')[j]).val().replace(/,/g,'');
					if (val == "")
					{
					val = 0;
					}
					Amount = parseFloat(Amount) + parseFloat(val);
					}
				}
				else{*/
			if($($($(this).closest('.tbody').find('.tbodytr')[j]).find('.tbodytrtd')[0]).find('input').val()=="Net Profit After Tax" || $($($(this).closest('.tbody').find('.tbodytr')[j]).find('.tbodytrtd')[0]).find('input').val()=="Depreciation" || $($($(this).closest('.tbody').find('.tbodytr')[j]).find('.tbodytrtd')[0]).find('input').val()=="Gross Turnover" || $($($(this).closest('.tbody').find('.tbodytr')[j]).find('.tbodytrtd')[0]).find('input').val()=="Interest on Term Loans" || $($($(this).closest('.tbody').find('.tbodytr')[j]).find('.tbodytrtd')[0]).find('input').val() == "Net profit after tax(PAT)"){
				if($($($(this).closest('.tbody').find('.tbodytr')[j]).find('.tbodytrtd')[0]).find('input').val()=="Net Profit After Tax" || $($($(this).closest('.tbody').find('.tbodytr')[j]).find('.tbodytrtd')[0]).find('input').val() == "Net profit after tax(PAT)"){
					if($(".FormPageMultiTab li.active").attr("id")=="S00008")
					{
						NetPrft= $(this).closest(".DYNROW").find('[name=EGCD_PATTOTINCOM]').val().replace(/,/g,'');
					}
					else{
					NetPrft= $($(this).closest('.tbody').find('[data-item=Average]')[j]).val().replace(/,/g,'');
					}
					if (NetPrft == "")
					{
					NetPrft = 0;
					}
					if (isNaN(NetPrft))
					{
					NetPrft = 0;
					}
				}
				else if($($($(this).closest('.tbody').find('.tbodytr')[j]).find('.tbodytrtd')[0]).find('input').val()=="Depreciation"){
					Despr= $($(this).closest('.tbody').find('[data-item=Average]')[j]).val().replace(/,/g,'');
					if (Despr == "")
					{
					Despr = 0;
					}
					
					/*if(parseFloat(NetPrft)<parseFloat(Despr)){
						Despr=NetPrft;
					}*/
					//Amount = parseFloat(NetPrft) + parseFloat(Despr);
				}
				else if($($($(this).closest('.tbody').find('.tbodytr')[j]).find('.tbodytrtd')[0]).find('input').val()=="Interest on Term Loans"){
					IntrstOnLoan= $($(this).closest('.tbody').find('[data-item=Average]')[j]).val().replace(/,/g,'');
					if (IntrstOnLoan == "")
					{
					IntrstOnLoan = 0;
					}
					if($(".FormPageMultiTab li.active").attr("id")=="S00001" || $(".FormPageMultiTab li.active").attr("id")=="S00008")
					{
						StndrPrm=parseFloat(NetPrft)+parseFloat(IntrstOnLoan);
						if(parseFloat(StndrPrm)<parseFloat(Despr)){
								Despr=StndrPrm;
							}
						Amount = parseFloat(Despr) + parseFloat(StndrPrm);
					}
					/*if(parseFloat(NetPrft)<parseFloat(Despr)){
						Despr=NetPrft;
					}*/
					
				}
				else if($($($(this).closest('.tbody').find('.tbodytr')[j]).find('.tbodytrtd')[0]).find('input').val()=="Gross Turnover"){
					Amount=$($(this).closest('.tbody').find('[data-item=Average]')[j]).val().replace(/,/g,'');
				}
			}
			
		//}
		
			
			 if($(".FormPageMultiTab li.active").attr("id")=="S00005"){
				Amount = parseFloat(NetPrft) + parseFloat(Despr);
			}
			}
			else{
				val = $($(this).closest('.tbody').find('[data-item=Average]')[j]).val().replace(/,/g,'');
				if (val == "")
					{
					val = 0;
					}
				Amount = parseFloat(Amount) + parseFloat(val);
			}
		
			
		/*val = $($(this).closest('.tbody').find('[data-item=Average]')[j]).val().replace(/,/g,'');
		
		if (val == "")
			{
			val = 0;
			}
		
		//Amount = parseFloat(Amount) + parseFloat(val);
		*/
		
		}
		//Amount=$($(this).closest('.tbody').find('.tbodytr').last().find('.tbodytrtd')[5]).find('input').val().replace(/,/g,'');
		var TotalAverageFld = $(this).attr("data-total");
		if(Amount==NaN)
			   {
				 Amount=0;  
			   }
		$(this).closest(".DYNROW").find('[name='+TotalAverageFld+']').val(CURINRCommaSep(parseFloat(Amount).toFixed(0)));
		
		// Credit Change Strt
		if($(".FormPageMultiTab li.active").attr("id") == "S00006"){
			CompCholaMrg(this);
		}
		if($(".FormPageMultiTab li.active").attr("id") == "S00009" && GrdName == "OTHER INCOME"){
			RecompApprInc(this);
		}
		
		// Credit Change End
		//alert($(this).val());
		/*if($($($(this).parent().parent().parent()[0]).find('.tbodytrtd')[0]).find('input').val() != "Net Profit After Tax" && $($($(this).parent().parent().parent()[0]).find('.tbodytrtd')[0]).find('input').val() != "Cash Profit")
		{
		FocusOutFrmFld(this);
		}*/
		return false;
	});
	//*******************MICRO LAP CHANGES STRT****************
	$(document).on("blur", ".FincIAPFRM", function() {
		$("#ISELGBLTYCHECKED").val('0');
		var TotAmt = 0,Amount=0;
		var TotFld = "";
		var TotFlda = "",TotFldaval = 0;
		var TotFldb = "",TotFldbval = 0;
		var GrossPrft = "",GrossPrftval = 0;
		var GrossMrgn = "",GrossMrgnval = 0;
		var BySalesVal = 0, ByGrossVal = 0 ;
		
		for(var i = 0;i<$(this).closest("table").find(".tbody .tbodytr").length;i++)
		{
			Amount = 0;
			Amount=parseFloat($($($(this).closest("table").find(".tbody .tbodytr")[i]).find(".tbodytrtd")[1]).find('input').val().replace(/,/g,''));
			if(Amount == "")
			{
				Amount=0;
			}
			if(isNaN(Amount))
			{
				Amount=0;
			}
			TotAmt = parseFloat(TotAmt)+parseFloat(Amount);
			if(TotAmt == "")
			{
				TotAmt=0;
			}
			if(isNaN(TotAmt))
			{
				TotAmt=0;
			}
		}
		TotFld= $(this).attr("data-total");
		$(this).closest(".DYNROW").find('[name='+TotFld+']').val(CURINRCommaSep(parseFloat(TotAmt).toFixed(0)));
		TotFlda= $(this).attr("data-totala");
		TotFldb= $(this).attr("data-totalb");
		GrossPrft= $(this).attr("data-to-grossprft");
		GrossMrgn= $(this).attr("data-to-grossmrgn");
		TotFldaval = $(this).closest(".DYNROW").find('[name='+TotFlda+']').val().replace(/,/g,'');
		TotFldbval = $(this).closest(".DYNROW").find('[name='+TotFldb+']').val().replace(/,/g,'');
		
		if(TotFldaval == "")
		{
			TotFldaval=0;
		}
		if(isNaN(TotFldaval))
		{
			TotFldaval=0;
		}
		if(TotFldbval == "")
		{
			TotFldbval=0;
		}
		if(isNaN(TotFldbval))
		{
			TotFldbval=0;
		}
		GrossPrftval = parseFloat(TotFldbval)-parseFloat(TotFldaval);
		if(GrossPrftval == "")
		{
			GrossPrftval=0;
		}
		if(isNaN(GrossPrftval))
		{
			GrossPrftval=0;
		}
		$(this).closest(".DYNROW").find('[name='+GrossPrft+']').val(CURINRCommaSep(parseFloat(GrossPrftval).toFixed(0)));
		for(var j = 0;j<$(this).closest(".DYNROW").find("[name=IAPFRMTables1]").find('.tbody .tbodytr').length;j++){
			if($($($(this).closest(".DYNROW").find("[name=IAPFRMTables1]").find('.tbody .tbodytr')[j]).find(".tbodytrtd")[0]).find('input').val()=="By Sales")
			{
				BySalesVal=$($($(this).closest(".DYNROW").find("[name=IAPFRMTables1]").find('.tbody .tbodytr')[j]).find(".tbodytrtd")[1]).find('input').val().replace(/,/g,'');
				if(BySalesVal == "")
				{
					BySalesVal=0;
				}
				if(isNaN(BySalesVal))
				{
					BySalesVal=0;
				}
			}
		}
		for(var k = 0;k<$(this).closest(".DYNROW").find("[name=IAPFRMTablesx]").find('.tbody .tbodytr').length;k++){
			if($($($(this).closest(".DYNROW").find("[name=IAPFRMTablesx]").find('.tbody .tbodytr')[k]).find(".tbodytrtd")[0]).find('input').val()=="By Gross Profit")
			{
				$($($(this).closest(".DYNROW").find("[name=IAPFRMTablesx]").find('.tbody .tbodytr')[k]).find(".tbodytrtd")[1]).find('input').val(CURINRCommaSep(parseFloat(GrossPrftval).toFixed(0)));
			}
		}
		MicroLapPLRecomp(this);
		GrossMrgnval = parseFloat(GrossPrftval)/parseFloat(BySalesVal);
		if(GrossMrgnval == "")
		{
			GrossMrgnval=0;
		}
		if(isNaN(GrossMrgnval))
		{
			GrossMrgnval=0;
		}
		if(GrossMrgnval == Infinity)
		{
			GrossMrgnval=0;
		}
		if(GrossMrgnval == -Infinity)
		{
			GrossMrgnval=0;
		}
		GrossMrgnval=GrossMrgnval*100;
		$(this).closest(".DYNROW").find('[name='+GrossMrgn+']').val(CURINRCommaSep(parseFloat(GrossMrgnval).toFixed(0)));
	});
	$(document).on("blur", ".FincFirmExstChk", function() {
		for(var i = 0;i<$(this).closest("table").find(".tbody .tbodytr").length;i++)
		{
			if($($($(this).closest("table").find(".tbody .tbodytr")[i]).find(".tbodytrtd")[0]).find('input').val() != "")
			{
			if(($(this).val().toUpperCase().trim()==$($($(this).closest("table").find(".tbody .tbodytr")[i]).find(".tbodytrtd")[0]).find('input').val().toUpperCase().trim()) && (parseInt($(this).closest(".tbodytr")[0].rowIndex)-1) != i)
			{
				$(this).val('');
				alert("This firm Type already exists");
			}
			}
		}
	});
	$(document).on("blur", ".FincFirmExstChk1", function() {
		for(var i = 0;i<$(this).closest("table").find(".tbody .tbodytr").length;i++)
		{
			if($($($(this).closest("table").find(".tbody .tbodytr")[i]).find(".tbodytrtd")[0]).find('input').val() != "")
			{
			if(($(this).val()==$($($(this).closest("table").find(".tbody .tbodytr")[i]).find(".tbodytrtd")[0]).find('input').val()) && (parseInt($(this).closest(".tbodytr")[0].rowIndex)-1) != i)
			{
				$(this).val('');
				alert("This Asset Classification already exists");
			}
			}
		}
	});
	$(document).on("blur", ".FincIAPFRM1", function() {
		$("#ISELGBLTYCHECKED").val('0');
		var TotAmt = 0,Amount=0;
		var TotFld = "";
		
		for(var i = 0;i<$(this).closest("table").find(".tbody .tbodytr").length;i++)
		{
			Amount = 0;
			Amount=parseFloat($($($(this).closest("table").find(".tbody .tbodytr")[i]).find(".tbodytrtd")[1]).find('input').val().replace(/,/g,''));
			if(Amount == "")
			{
				Amount=0;
			}
			if(isNaN(Amount))
			{
				Amount=0;
			}
			TotAmt = parseFloat(TotAmt)+parseFloat(Amount);
			if(TotAmt == "")
			{
				TotAmt=0;
			}
			if(isNaN(TotAmt))
			{
				TotAmt=0;
			}
		}
		TotFld= $(this).attr("data-total");
		$(this).closest(".DYNROW").find('[name='+TotFld+']').val(CURINRCommaSep(parseFloat(TotAmt).toFixed(0)));
		MicroLapPLRecomp(this);
	});
	$(document).on("blur", ".FincIAPPurchVal", function() {
		$("#ISELGBLTYCHECKED").val('0');
		var TotAmt = 0,Amount=0;
		var TotFld = "";
		for(var i = 0;i<$(this).closest("table").find(".tbody .tbodytr").length;i++)
		{
			Amount = 0;
			Amount=parseFloat($($($(this).closest("table").find(".tbody .tbodytr")[i]).find(".tbodytrtd")[2]).find('input').val().replace(/,/g,''));
			if(Amount == "")
			{
				Amount=0;
			}
			if(isNaN(Amount))
			{
				Amount=0;
			}
			TotAmt = parseFloat(TotAmt)+parseFloat(Amount);
			if(TotAmt == "")
			{
				TotAmt=0;
			}
			if(isNaN(TotAmt))
			{
				TotAmt=0;
			}
		}
		TotFld= $(this).attr("data-total");
		$(this).closest(".DYNROW").find('[name='+TotFld+']').val(CURINRCommaSep(parseFloat(TotAmt).toFixed(0)));
		RecompApprInc(this);
	});
	$(document).on("blur", ".YrValidation", function() {
		if($(this).val() != "")
		{
			if($(this).val().length != 4)
			{
				$(this).val("");
				alert("Enter a valid Year on Purchased");
			}
		}
	});
	//*******************MICRO LAP CHANGES END****************
	
	$(document).on("change", ".FinYrIncmDrpDwn", function() {
		$(this).closest('.tbodytrtd').next().find('input').focusout()
	});
	$(document).on("blur", ".MaxROI", function() {
		if($("#DMY7").val().split("|")[8] == "HE02"){
			if(parseFloat($("#DMY3").val().split('|')[2])<$(".MaxROI").val())
			{
				alert("For "+$("#DMY7").val().split("|")[9]+" Product ROI can't be Greater than "+$("#DMY3").val().split('|')[2]);
				$(".MaxROI").val($("#DMY3").val().split('|')[2]);
			}
		}
	});
	
	
	$(document).on("blur", ".HIDDENID", function() {
		
	//********ABB calculation STRT*********
	/*if($("#DMY7").val().split("|")[13] == "S00007" && $(".FormPageMultiTab li.active").attr("id")=="S00007" && $(this).next().val() == "4"){
		UI_getdata($("#PrcsID").val(),$(this).val().replace(/,/g,""),"","","",'LSW_SAUTOAVGUPDTBANKBAL');
	}*/
	//********ABB calculation END*********
		
		var Inpt1='';
		var Inpt2='';
		var InPTindx=''
		var Scheme=$("#RCCM_UNIQUID").val();
		var Expr = $("#ICEG_EXPOUSER").val();
		if(Expr==""){
			Expr=0;
		}
		for (i=0;i<$('.HIDDENID').length;i++)
		{
			Inpt1+=$($('.HIDDENID')[i]).val().replace(/,/g,"")+'|'
			Inpt2+=$($('.HIDDENID')[i]).next().val()+'|'
		}
		//Expr=Expr.replace(/,/g,"")
		
		// Added for Loan Amount filed is enable in Waiver Stage start
		 if($("#DMY5").val().split("|")[2]=="Waiver" && $("#DMY3").val().split("|")[3]!=Inpt1.split("|")[0])
		  {
			  ViewRInavtivePGFlg="";
		  }
		  else
		  {
			//ViewRInavtivePGFlg="View";  
		  }
		// Added for Loan Amount filed is enable in Waiver Stage end
		var op = UI_getdata(Inpt1+','+Inpt2,$("#PrcsID").val(),Scheme+'|'+ViewRInavtivePGFlg,Expr,'','LSW_SUCVGETELIGHSCHEME');
		for (i=0;i<$('.RECOMPUT').length;i++)
		{
			InPTindx=parseInt($($('.RECOMPUT')[i]).next().val())
			var txt = $($('.RECOMPUT')[i]).parent().parent().prev().prev().find('input[type=text]').val()
			for(j=0;j<$(op).find("asetLRGDAta").length;j++)
				{
				if(txt==$($(op).find("asetLRGDAta")[j]).find("FCEB_PROFILE").text())
					$($('.RECOMPUT')[i]).val($($(op).find("asetLRGDAta")[j]).find("FCEB_VALUE").text());
				}
			
			//$($('.RECOMPUT')[i]).val($($(op).find('FCEB_VALUE')[InPTindx]).text());
		}

});
	
	
	});
// STANDARD PRIME,LIP,GTO GRID CALCULATIONS START

//STANDARD PRIME SALARY START
$(document).on("blur", ".SalComp", function() {
	$("#ISELGBLTYCHECKED").val("0");
	var row = $(this).closest(".DYNROW").attr("data-row");
	
var GrossSal = $("#" + $(this).attr("data-Calfield").split("|")[0] + row).val().replace(/,/g,"");
if(GrossSal==""){
	GrossSal=0;
}
var Deduct = $("#" + $(this).attr("data-Calfield").split("|")[1] + row).val().replace(/,/g,"");
if(Deduct==""){
	Deduct=0;
}
var total = $(this).attr("data-total");

 

$("#" + total + row).val(CURINRCommaSep(parseFloat(parseFloat(GrossSal) - parseFloat(Deduct)).toFixed(0)));

});
// STANDARD PRIME SALARY END

// Calculation End

//MULTIPLIER PAT START
function PATMulplrCalc(Evnt) {

var Multiplier = $(Evnt).closest('.DYNROW').find("[name=EGCD_MULTIPLIERII]").val().replace(/,/g,''); 

		if(Multiplier == "")
		{
			Multiplier=0;
		}
		if(isNaN(Multiplier))
		{
			Multiplier=0;
		}
		var PAT = 0;
		var Depreciation = 0;
		var Remuneration=0;
		var Sales=0;
		var CompCholaMrg1 = 0;
		for(var i=0;i<$(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbodytr").length;i++)
		{
			if($($($($(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbodytr")[i]).find(".tbodytrtd")[0]).find('span').children())[0].nodeName == "INPUT")
			{
				if($($($(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbodytr")[i]).find(".tbodytrtd")[0]).find('span').find('input').val()=="Net profit after tax(PAT)")
				{
					PAT = $($($(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbodytr")[i]).find(".tbodytrtd")[5]).find('span').find('input').val().replace(/,/g,'');
					if(PAT == "")
					{
						PAT=0;
					}
					if(isNaN(PAT))
					{
						PAT=0;
					}
					
					var TotIncome=parseFloat(Multiplier)*parseFloat(PAT)
  
  if(isNaN(TotIncome))
	{
		TotIncome = 0;
	}
	$(Evnt).closest('.DYNROW').find("[name=EGCD_PATTOTINCOM]").val(CURINRCommaSep(parseFloat(TotIncome).toFixed(0)))
	$($($($(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbody")).find(".tbodytr")[0]).find("[name=FPFI_PERC0]")[0]).focusout();
				}
			}
		}
}
//MULTIPLIER PAT END

//MULTIPLIER LIP,GTO START
$(document).on("blur", ".MulplrCalc", function() {

$("#ISELGBLTYCHECKED").val("0");
	var row = $(this).closest(".DYNROW").attr("data-row");
	
var EGCD_UNIQUID = $("#" + $(this).attr("data-Calfield").split("|")[0] + row).val();
var EGCD_FINYRTOT = $("#" + $(this).attr("data-Calfield").split("|")[1] + row).val().replace(/,/g,"");
if(EGCD_FINYRTOT==""){
	EGCD_FINYRTOT=0;
}
var EGCD_MULTIPLIER = $("#" + $(this).attr("data-Calfield").split("|")[2] + row).val().replace(/,/g,"");
if(EGCD_MULTIPLIER==""){
	EGCD_MULTIPLIER=0;
}
var EGCD_MULTIPLIERI = $("#" + $(this).attr("data-Calfield").split("|")[3] + row).val().replace(/,/g,"");
if(EGCD_MULTIPLIERI==""){
	EGCD_MULTIPLIERI=0;
}
var EGCD_CACERITFY = $("#" + $(this).attr("data-Calfield").split("|")[4] + row).val().replace(/,/g,"");
if(EGCD_CACERITFY==""){
	EGCD_CACERITFY=0;
}
var EGCD_LOWER = $("#" + $(this).attr("data-Calfield").split("|")[5] + row).val().replace(/,/g,"");
if(EGCD_LOWER==""){
	EGCD_LOWER=0;
}

var total = $(this).attr("data-total");

var EGCD_MULTIPLIERIVAL=0;
var Lower=0;

if (EGCD_UNIQUID == "S00005")
	{
	EGCD_MULTIPLIER=parseFloat(EGCD_MULTIPLIER);
	EGCD_MULTIPLIERIVAL =	parseFloat(EGCD_MULTIPLIER) * parseFloat(EGCD_FINYRTOT);
	
	$("#" + $(this).attr("data-Calfield").split("|")[3] + row).val(CURINRCommaSep(parseFloat(EGCD_MULTIPLIERIVAL).toFixed(2)));
	
	if (EGCD_CACERITFY == "")
		{
		EGCD_CACERITFY = 0;
		}

	if (EGCD_MULTIPLIERIVAL < EGCD_CACERITFY)
		{
		Lower = EGCD_MULTIPLIERIVAL
		}
	else
		{
		Lower = EGCD_CACERITFY
		}
		if(isNaN(Lower))
	 {
		 Lower=0;
	 }

	$("#" + $(this).attr("data-Calfield").split("|")[5] + row).val(CURINRCommaSep(parseFloat(Lower).toFixed(0)))
	
	$("#" + $(this).attr("data-total") + row).val(CURINRCommaSep(parseFloat(Lower).toFixed(0)));
	
	}
else if (EGCD_UNIQUID == "S00006")
{
//Credit Change Strt
/*
//var GrossMargin = $($($("#INCMTable1_wrapper").find('.tbodytr')[1]).find('.tbodytrtd')[5]).find('input').val();
var GrossMargin =$($($(this).closest('.DYNROW').find('table').find('.tbodytr')[1]).find('.tbodytrtd')[5]).find('input').val().replace(/,/g,"");
if(GrossMargin == ""){
	GrossMargin=0;
}
if(EGCD_MULTIPLIER == ""){
	EGCD_MULTIPLIER=0;
}
var minval = Math.min(GrossMargin, EGCD_MULTIPLIER);
minval=minval/100;

//EGCD_MULTIPLIERIVAL =	parseFloat(EGCD_MULTIPLIER) * parseFloat(EGCD_FINYRTOT);
EGCD_MULTIPLIERIVAL =	parseFloat(minval) * parseFloat(EGCD_FINYRTOT);
	if(EGCD_MULTIPLIERIVAL == ""){
	EGCD_MULTIPLIERIVAL=0;
}
if(EGCD_MULTIPLIERIVAL == NaN){
	EGCD_MULTIPLIERIVAL=0;
}
$("#" + $(this).attr("data-Calfield").split("|")[3] + row).val(CURINRCommaSep(parseFloat(EGCD_MULTIPLIERIVAL).toFixed(0)));
	
$("#" + $(this).attr("data-Calfield").split("|")[4] + row).val("");
$("#" + $(this).attr("data-Calfield").split("|")[5] + row).val("");
	
	$("#" + $(this).attr("data-total") + row).val(CURINRCommaSep(parseFloat(EGCD_MULTIPLIERIVAL).toFixed(0)));
	*/
}	
//Credit Change End
});
// MULTIPLIER LIP,GTO END

//MULTIPLIER RTR START
$(document).on("change", ".RTRMultp", function() {

		
var MULTIPLIER = $(this).val(); 

if(MULTIPLIER==""){
	MULTIPLIER=0;
}
	
var EMI = $($(this).closest('.tbodytr').find('[data-item=Amount]')[0]).val().replace(/,/g,"");
if(EMI==""){
	EMI=0;
}

var Value =	parseFloat(MULTIPLIER) * parseFloat(EMI);
	if(Value==""){
		Value=0;
	}

$($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val(CURINRCommaSep(parseFloat(Value).toFixed(2)));
	
	if($(".FormPageMultiTab li.active").attr("id")=="S00002"){
	$("#ELIGCHK").click();
	}
	


});

$(document).on("change", ".RRMulti", function() {
	if($(".FormPageMultiTab li.active").attr("id")=="S00004"){
		
		var MonRentLength = $(this).closest('.tbody').find('[data-item=MRENT]').length;

	Amount = 0;
	val=0;

	for (j=0;j<MonRentLength;j++)
	{
  var RentalAgree=$($("#TableRR").find('tbody tr')[j]).find("input[name=FRRE_RRAVALIB]:checked").val();
   
   if(RentalAgree=="Yes")
   {
	  // if($($($("#TableRR").find('tbody tr')[j]).find('[DdData=FRRE_NOCTENANTS]')[0]).val()=="Cash Rental with un-registered Lease agreement")
	   //{
		  
		  val=$($($("#TableRR").find('tbody tr')[j]).find('[data-item=MRENT]')[0]).val().replace(/,/g,'');
		  var Perc=$($($("#TableRR").find('tbody tr')[j]).find('td')[5]).find('[data-item1=CONSRI]').val();
		  if(val==NaN)
		  {
			 val=0 
		  }
          val=val*Perc/100
         if(val==NaN)
		  {
			 val=0 
		  }		  
	  /* }
	   else
	   {
         val =$($($("#TableRR").find('tbody tr')[j]).find('[data-item=MRENT]')[0]).val().replace(/,/g,'');
	   }*/
   }
   else
   {
	   val=0;
   }
   
//$("#ELIGCHK").closest(".GSL").find(".LIP .DYNROW")[n]).find("input:radio[name=EGCD_METHODSEP]").is(":checked")
	if (val == "")
		{
		val = 0;
		}

	Amount = parseFloat(Amount) + parseFloat(val);

	}
	Amount=Amount.toFixed(2);

	$("#ICEG_TOTRENTINCM").val(CURINRCommaSep(Amount));
	$("#ELIGCHK").click();
	}
});

$(document).on("click", ".RRDelGridrow", function() {
		
var r = confirm("Are you sure!! to delete the record");
if (r == true) {
	var AmtVal=$(this).attr("CalcFld").split('|')[1]
	var ValRow=$(this).attr("CalcFld").split('|')[2]
	  var AmtFld=$(this).attr("CalcFld").split('|')[0]
	  var Rent=$(this).attr("CalcFld").split('|')[3]
	  var DtFld=$(this).attr("CalcFld").split('|')[4]
	  var CONSRIFLD=$(this).attr("CalcFld").split('|')[5]
	  var RentAmtVal=$("#"+AmtVal+ValRow).val().replace(/,/g,'');
	 var AmountVal=$("#"+AmtFld).val().replace(/,/g,'');
	 var DtVal=$("#"+DtFld+ValRow).val()
	 var CONSRIVAL=$("#"+CONSRIFLD+ValRow).val()
	 if($($("#TableRR").find('tbody tr')[ValRow]).find("input[name=FRRE_RRAVALIB]:checked").val()=="Yes")
	 {
		  RentAmtVal=parseFloat(RentAmtVal)*parseFloat(CONSRIVAL)/100
		  AmountVal=parseFloat(AmountVal)-parseFloat(RentAmtVal)
	 }
 oTable = $('#'+ $(this).closest("table").attr("id")).DataTable();
 oTable.row($(this).closest('.tbodytr').index()).remove().draw();
 
 if($(".FormPageMultiTab li.active").attr("id")=="S00004"){
	 $("#"+AmtFld).val(CURINRCommaSep(AmountVal));
	$("#ELIGCHK").click();
	FncallDocChkLst(this,'TableRR',{spname:'LSW_SGETRRELIGBDETL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#ICEG_UNIQUID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||12','RRELIG');
	}
} 
	
		})
// MULTIPLIER RTR END

//Eligibility Grid Data Calculation Start

function EligibilitySPTotCalc()
{
	
	// Main Income Start
	
	var MainIncome = 0;
	
	for (i=0;i<$("#Table6").find('.tbody').find("[data-item=MainIncome]").length;i++)
		{
		
		MainIncome = parseFloat(MainIncome) + parseFloat($($("#Table6").find('.tbody').find("[data-item=MainIncome]")[i]).val().replace(/,/g,''));  
				
		}
	
	$("#ICEG_MONTINCM").val(CURINRCommaSep(parseFloat(MainIncome).toFixed(0)));
	
	// Main Income End

	
	// Other Income Start
	
	var OtherIncome = 0;
	
	for (i=0;i<$("#Table6").find('.tbody').find("[data-item=OtherIncome]").length;i++)
		{
		
		OtherIncome = parseFloat(OtherIncome) + parseFloat($($("#Table6").find('.tbody').find("[data-item=OtherIncome]")[i]).val().replace(/,/g,'')); 
				
		}
	
	$("#ICEG_OTHSRC").val(CURINRCommaSep(parseFloat(OtherIncome).toFixed(0)));
	
	// Other Income End
	
	// Obligation Start
	
	var Obligation = 0;
	
	for (i=0;i<$("#Table6").find('.tbody').find("[data-item=Obligation]").length;i++)
		{
		
		Obligation = parseFloat(Obligation) + parseFloat($($("#Table6").find('.tbody').find("[data-item=Obligation]")[i]).val().replace(/,/g,''));  
				
		}
	
	$("#ICEG_OPPRAISEDOB").val(CURINRCommaSep(parseFloat(Obligation).toFixed(0)));
	
	// Obligation End
	
	// Eligible Amount Start
	
	var EligibleAmount = 0;
	
	for (i=0;i<$("#Table6").find('.tbody').find("[data-item=EligibleAmount]").length;i++)
		{
		
		EligibleAmount = parseFloat(EligibleAmount) + parseFloat($($("#Table6").find('.tbody').find("[data-item=EligibleAmount]")[i]).val().replace(/,/g,''));  
				
		}
	
	$("#ICEG_LONELGBL").val(CURINRCommaSep(parseFloat(EligibleAmount).toFixed(0)));
	
	// Eligible Amount Start
	
	// FOIR Start
	
	var FOIR = 0;
	
	FOIR = $($("#Table6").find('.tbody').find("[data-item=FOIR]")[0]).val().replace(/,/g,'');  
	
	
	$("#ICEG_FOIR").val(FOIR);
	
	// Eligible Amount Start	
}
//Eligibility Grid Data Calculation End

//Eligibility Grid Data Calculation Start

function EligibilityRIPTotCalc()
{
	
	// Main Income Start
	
	var MainIncome = 0;
		
	MainIncome = parseFloat(MainIncome) + parseFloat($("#ICEG_TOTRENTINCM").val().replace(/,/g,''));
	
	$("#ICEG_MONTINCM").val(CURINRCommaSep(parseFloat(MainIncome).toFixed(0)));
	
	// Other Income Start
	
	var OtherIncome = 0;
	
	for (i=0;i<$(".TOTOTHRINCM").not('.DynamicPageGrid .TOTOTHRINCM').length;i++)
		{
		
		OtherIncome = parseFloat(OtherIncome) + parseFloat($($(".TOTOTHRINCM").not('.DynamicPageGrid .TOTOTHRINCM')[i]).val().replace(/,/g,'')); 
				
		}
	if(OtherIncome == "")
		{
			OtherIncome = 0;
		}
		if(isNaN(OtherIncome))
		{
			OtherIncome = 0;
		}
		OtherIncome = OtherIncome/12;
	$("#ICEG_OTHSRC").val(CURINRCommaSep(parseFloat(OtherIncome).toFixed(0)));
	
	var xml=UI_getdata($("#PrcsID").val(),$("#RCCM_UNIQUID").val(),$("#ICEG_MONTINCM").val().replace(/,/g,''),$("#ICEG_OTHSRC").val().replace(/,/g,''),"","LSW_SRIPUPDOTHINCM")
	
	// Other Income End	
}
//Eligibility Grid Data Calculation End

function SchemeBasealid()
{
	var Scheme=$("#RCCM_UNIQUID").val()
	
      if(Scheme=="S00005")
		{
		 $(".NSAL").show();
		 $(".SENP").show();
		 $(".NGTO").show();
		 $(".GTO").show();
		 $(".CGTO").hide();
		}
	else if(Scheme=="S00001" || Scheme=="S00008")
		{
		  $(".NSAL").hide()
		  $(".SENP").show();
		}
	else if(Scheme=="S00006")
		{
		  $(".NSAL").show();
		  $(".NGTO").hide();
		  $(".GTO").show();
		  $(".SENP").show();
		  $(".CGTO").show();
		}
}

function getApplName()
{
	var ApplName=$("#RCCM_APPLNAME").val()
	var PrcsId=$("#PrcsID").val()
	
	var Scheme=$("#RCCM_UNIQUID").val()
	var xml=UI_getdata(PrcsId,Scheme,"","","","LSW_SGETAPPLPERSDETLS")
	if($(xml).find('result').text() == "Y")
	  {
	if(ApplName=="")
		{
		var n = document.getElementsByClassName('FileCheckVal');
        for (i = 0; i < n.length; i++) 
        {
          name = document.getElementsByClassName('FileCheckVal').item(i).name
         
          var val = $(xml).find(name).text();
          
          if($('[name='+name+']').attr('type')=="radio") 
          {
     	   $('[name='+name+'][value="'+val+'"]').prop('checked', true);
          }   
          else if($("#"+ name).length > 0)
          {
        	  $("#"+ name).val(val); 
        	  $("#"+ name).next().addClass('active');
          } 
        }
        if(Scheme=="S00005")
	       {
        	$(".SDMndtry").removeClass('RCCMMndtry')
	        $(".ITRsMndtry").removeClass('RCCMMndtry')
	        $(".CAMndtry").removeClass('RCCMMndtry')
  	        $(".CUSNAME").show()
	        $(".ASCMLIP").show()
	        $(".ANSRTRBS").show()
	        $(".AINCY").show()
	        $(".SDMndtry").addClass('RCCMMndtry')
	        $(".ITRsMndtry").addClass('RCCMMndtry')
	        $(".CAMndtry").addClass('RCCMMndtry')
	       }
		else if(Scheme=="S00001" || Scheme=="S00006" || Scheme=="S00008" || Scheme=="S00009")
	       {
			$(".SDMndtry").removeClass('RCCMMndtry')
	        $(".ITRsMndtry").removeClass('RCCMMndtry')
	        $(".CAMndtry").removeClass('RCCMMndtry')
	        $(".CUSNAME").show()
	        $(".AINCY").show()
	        $(".ANSRTRBS").show()
	        $(".ASCMLIP").hide()
	        $(".SDMndtry").addClass('RCCMMndtry')
	        $(".ITRsMndtry").addClass('RCCMMndtry')
	        $(".CAMndtry").removeClass('RCCMMndtry')
	       }
	   else if(Scheme=="S00002" || Scheme=="S00004" || Scheme=="S00007")
	     {
		  $(".SDMndtry").removeClass('RCCMMndtry')
	      $(".ITRsMndtry").removeClass('RCCMMndtry')
	      $(".CAMndtry").removeClass('RCCMMndtry')
		  $(".CUSNAME").show()
	      $(".AINCY").hide()
	      $(".ANSRTRBS").show()
	      $(".ASCMLIP").hide()
	      $(".SDMndtry").removeClass('RCCMMndtry')
	      $(".ITRsMndtry").addClass('RCCMMndtry')
	      $(".CAMndtry").removeClass('RCCMMndtry')
	     }
	   else if(Scheme=="S00003")
	     {
		   $(".SDMndtry").removeClass('RCCMMndtry')
		   $(".ITRsMndtry").removeClass('RCCMMndtry')
		   $(".CAMndtry").removeClass('RCCMMndtry')
		   $(".CUSNAME").show()
		   $(".AINCY").hide();
		   $(".ANSRTRBS").show()
		   $(".SDMndtry").removeClass('RCCMMndtry')
	       $(".ITRsMndtry").addClass('RCCMMndtry')
	       $(".CAMndtry").removeClass('RCCMMndtry')
	     }
	  }
	  else
	  {
		$("#RCCM_APPLNAME").val($(xml).find('RCCM_APPLNAME').text())
		$("#RCCM_CUSID").val($(xml).find('RCCM_CUSID').text())
		$(".AINCYN").show();
		 if(Scheme=="S00005")
	       {
      	$(".SDMndtry").removeClass('RCCMMndtry')
	        $(".ITRsMndtry").removeClass('RCCMMndtry')
	        $(".CAMndtry").removeClass('RCCMMndtry')
	        $(".CUSNAME").show()
	        $(".ASCMLIP").show()
	        $(".ANSRTRBS").show()
	        $(".AINCY").show()
	        $(".SDMndtry").addClass('RCCMMndtry')
	        $(".ITRsMndtry").addClass('RCCMMndtry')
	        $(".CAMndtry").addClass('RCCMMndtry')
	       }
		else if(Scheme=="S00001" || Scheme=="S00006" || Scheme=="S00008" || Scheme=="S00009")
	       {
			$(".SDMndtry").removeClass('RCCMMndtry')
	        $(".ITRsMndtry").removeClass('RCCMMndtry')
	        $(".CAMndtry").removeClass('RCCMMndtry')
	        $(".CUSNAME").show()
	        $(".AINCY").show()
	        $(".ANSRTRBS").show()
	        $(".ASCMLIP").hide()
	        $(".SDMndtry").addClass('RCCMMndtry')
	        $(".ITRsMndtry").addClass('RCCMMndtry')
	        $(".CAMndtry").removeClass('RCCMMndtry')
	       }
	   else if(Scheme=="S00002" || Scheme=="S00004" || Scheme=="S00007")
	     {
		  $(".SDMndtry").removeClass('RCCMMndtry')
	      $(".ITRsMndtry").removeClass('RCCMMndtry')
	      $(".CAMndtry").removeClass('RCCMMndtry')
		  $(".CUSNAME").show()
	      $(".AINCY").hide()
	      $(".ANSRTRBS").show()
	      $(".ASCMLIP").hide()
	      $(".SDMndtry").removeClass('RCCMMndtry')
	      $(".ITRsMndtry").addClass('RCCMMndtry')
	      $(".CAMndtry").removeClass('RCCMMndtry')
	     }
	   else if(Scheme=="S00003")
	     {
		   $(".SDMndtry").removeClass('RCCMMndtry')
		   $(".ITRsMndtry").removeClass('RCCMMndtry')
		   $(".CAMndtry").removeClass('RCCMMndtry')
		   $(".CUSNAME").show()
		   $(".AINCY").hide();
		   $(".ANSRTRBS").show()
		   $(".SDMndtry").removeClass('RCCMMndtry')
	       $(".ITRsMndtry").addClass('RCCMMndtry')
	       $(".CAMndtry").removeClass('RCCMMndtry')
	     }
	 }
	 }
 }

function SchemeBasedCAM(HTML,id)
{
	var Scheme=$("#RCCM_UNIQUID").val()
	var INCConsider=$(HTML).find("#"+id).val()
	if(INCConsider=="true")
	  {
		
		/*if($(HTML).find("input[name='CACL_SAMDATE']:checked"). val() == undefined)
		{
			$(HTML).find('input:radio[name=CACL_SAMDATE]')[1].checked = true;
		}
	  if($(HTML).find("input[name='CACL_MINLATEST']:checked"). val() == undefined)
	  {
		  $(HTML).find('input:radio[name=CACL_MINLATEST]')[1].checked = true;
	  }
	 if($(HTML).find("input[name='CACL_CARPT']:checked"). val() == undefined)
	  {
		 $(HTML).find('input:radio[name=CACL_CARPT]')[1].checked = true;
	  }*/
		
		if(Scheme=="S00005")
	    {
			$(".CSDMndtry").removeClass('RCCMMndtry')
	        $(".CITRsMndtry").removeClass('RCCMMndtry')
	        $(".CCAMndtry").removeClass('RCCMMndtry')
		 $(HTML).find(".COCUSNAME").show()
	     $(HTML).find(".SCMLIP").show()
	     $(HTML).find(".NSRTRBS").show()
	     $(HTML).find(".CINCY").show()
	        $(".CSDMndtry").addClass('RCCMMndtry')
	        $(".CITRsMndtry").addClass('RCCMMndtry')
	        $(".CCAMndtry").addClass('RCCMMndtry')
	    }
		else if(Scheme=="S00001" || Scheme=="S00006" || Scheme=="S00008" || Scheme=="S00009")
	    {
			$(".CSDMndtry").removeClass('RCCMMndtry')
	        $(".CITRsMndtry").removeClass('RCCMMndtry')
	        $(".CCAMndtry").removeClass('RCCMMndtry')
		 $(HTML).find(".COCUSNAME").show()
	     $(HTML).find(".CINCY").show()
	     $(HTML).find(".NSRTRBS").show()
	     $(HTML).find(".SCMLIP").hide()
	        $(".CSDMndtry").addClass('RCCMMndtry')
	        $(".CITRsMndtry").addClass('RCCMMndtry')
	        $(".CCAMndtry").removeClass('RCCMMndtry')
	    }
	else if(Scheme=="S00002" || Scheme=="S00004" || Scheme=="S00007")
	  {
		$(".CSDMndtry").removeClass('RCCMMndtry')
        $(".CITRsMndtry").removeClass('RCCMMndtry')
        $(".CCAMndtry").removeClass('RCCMMndtry')
	   $(HTML).find(".COCUSNAME").show()
	   $(HTML).find(".CINCY").hide()
	   $(HTML).find(".NSRTRBS").show()
	   $(HTML).find(".SCMLIP").hide()
	   $(".CITRsMndtry").addClass('RCCMMndtry')
	  }
	else if(Scheme=="S00003")
	  {
		$(".CSDMndtry").removeClass('RCCMMndtry')
        $(".CITRsMndtry").removeClass('RCCMMndtry')
        $(".CCAMndtry").removeClass('RCCMMndtry')
		  $(HTML).find(".COCUSNAME").show()
		  $(HTML).find(".CINCY").hide();
		  $(HTML).find(".NSRTRBS").show()
		$(".CITRsMndtry").addClass('RCCMMndtry')
	  }
    }
}
function getLOWLTV()
{
	var Scheme=$("#RCCM_UNIQUID").val()
	
		if(Scheme=="S00003"||Scheme=="S00004")
		{
			 $(".EXITLON").hide();
			
		}	
		else
			{
			
			$(".EXITLON").show();
			}
   }

//Eligiblity Final data field enable start

function EnableFnlElgFld()
{
	var prdid = $("#DMY7").val().split('|')[8];
	for (i=0;i<$("[name=FCEB_HIDDENID]").length;i++)
		{
		
		if ($($("[name=FCEB_HIDDENID]")[i]).val() == "4")
			{
			$($("[name=FCEB_HIDDENID]")[i]).prev().removeClass("DSVLBL");
			$($("[name=FCEB_HIDDENID]")[i]).prev().removeAttr( "disabled");
			if(prdid == "HE02")
				{
					  if ($($("[name=FCEB_HIDDENID]")[i]).val() == "6")
					  {
						$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("DSVLBL"); 
						$($("[name=FCEB_HIDDENID]")[i]).prev().attr( "disabled","disabled"); 
					  }
				}
			
			$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("HIDDENID");
			
		    if ($($("[name=FCEB_HIDDENID]")[i]).val() == "4")
            {
            	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("IsCURCommaFields");
            	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("NoSpecialChar");
            	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("IsNumberFields");
				$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("ExpAmt");
				if($("#RCCM_UNIQUID").val() == "S00001" || $("#RCCM_UNIQUID").val()=="S00008"){
				$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanAmt");
				}
				if($("#RCCM_UNIQUID").val() == "S00004"){
				$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanAmt");
				}
				if($("#RCCM_UNIQUID").val() == "S00002"){
				$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanAmt");
				}
				if($("#RCCM_UNIQUID").val() == "S00005"){
				$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanAmt");
				}
				if($("#RCCM_UNIQUID").val() == "S00003"){
				$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanAmt");
				}
				if($("#RCCM_UNIQUID").val() == "S00006"){
				$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanAmt");
				}
				if($("#RCCM_UNIQUID").val() == "S00007"){
				$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanAmt");
				}
				if($("#RCCM_UNIQUID").val() == "S00009"){
				$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanAmt");
				}
            	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanAmt");
            	$($("[name=FCEB_HIDDENID]")[i]).prev().attr('maxlength','10');
				$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("AUTOCOMPUTFLD ");
            }
            if ($($("[name=FCEB_HIDDENID]")[i]).val() == "5")
            {
            	
            	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("IsPercentageSPL");
            	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("IsNumberFields");
            	$($("[name=FCEB_HIDDENID]")[i]).prev().attr('maxlength','5')
				
				if($('.FormPageMultiTab li.active').attr("id")=="S00006"||$('.FormPageMultiTab li.active').attr("id")=="S00001"||$('.FormPageMultiTab li.active').attr("id")=="S00005"||$('.FormPageMultiTab li.active').attr("id")=="S00008"){
					$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("ReCheckElg");
				}
				if(prdid == "HE02")
				{
					$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("MaxROI");
				}
            }
            if ($($("[name=FCEB_HIDDENID]")[i]).val() == "6")
            {
            	
            	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("IsNumberFieldsSpl");
              	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("TERYears");
            	$($("[name=FCEB_HIDDENID]")[i]).prev().attr('maxlength','3')
				
				if($('.FormPageMultiTab li.active').attr("id")=="S00006"||$('.FormPageMultiTab li.active').attr("id")=="S00001"||$('.FormPageMultiTab li.active').attr("id")=="S00005"||$('.FormPageMultiTab li.active').attr("id")=="S00008"){
					$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("ReCheckElg");
				}
            }
			
      }
	   if ($($("[name=FCEB_HIDDENID]")[i]).val() == "1" || $($("[name=FCEB_HIDDENID]")[i]).val() == "29"){
		  $($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LowTechVal");
	  }
	   if ($($("[name=FCEB_HIDDENID]")[i]).val() == "7"){
			  $($("[name=FCEB_HIDDENID]")[i]).prev().addClass("CHCKLTV");
		  }
	  if($("#RCCM_UNIQUID").val() == "S00001" || $("#RCCM_UNIQUID").val() == "S00008"){
		  if ($($("[name=FCEB_HIDDENID]")[i]).val() == "1")
            {
            	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanCMPRFLD");
				//$("#ICEG_LONELGBL").addClass("LoanCMPRFLD");
            }
	  }
	  else if($("#RCCM_UNIQUID").val() == "S00004"){
		  if ($($("[name=FCEB_HIDDENID]")[i]).val() == "19")
            {
            	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanCMPRFLD");
				//$("#ICEG_LONELGBL").addClass("LoanCMPRFLD");
            }
	  }
	  else if($("#RCCM_UNIQUID").val() == "S00002"){
		  if ($($("[name=FCEB_HIDDENID]")[i]).val() == "11")
            {
            	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanCMPRFLD");
				//$("#ICEG_LONELGBL").addClass("LoanCMPRFLD");
            }
	  }
	   else if($("#RCCM_UNIQUID").val() == "S00005"){
		  if ($($("[name=FCEB_HIDDENID]")[i]).val() == "1")
            {
            	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanCMPRFLD");
				//$("#ICEG_LONELGBL").addClass("LoanCMPRFLD");
            }
	  }
	   else if($("#RCCM_UNIQUID").val() == "S00003"){
		  if ($($("[name=FCEB_HIDDENID]")[i]).val() == "1")
            {
            	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanCMPRFLD");
				//$("#ICEG_LONELGBL").addClass("LoanCMPRFLD");
            }
	  }
	  else if($("#RCCM_UNIQUID").val() == "S00006"){
		  if ($($("[name=FCEB_HIDDENID]")[i]).val() == "1")
            {
            	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanCMPRFLD");
				//$("#ICEG_LONELGBL").addClass("LoanCMPRFLD");
            }
	  }
	  else if($("#RCCM_UNIQUID").val() == "S00007"){
		  if ($($("[name=FCEB_HIDDENID]")[i]).val() == "1")
            {
            	$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("LoanCMPRFLD");
				//$("#ICEG_LONELGBL").addClass("LoanCMPRFLD");
            }
	  }
		/*if($("#RCCM_UNIQUID").val() == "S00002")
			{
			if($($("[name=FCEB_HIDDENID]")[i]).val() == "7" || $($("[name=FCEB_HIDDENID]")[i]).val() == "8" || $($("[name=FCEB_HIDDENID]")[i]).val() == "9")
			{
				$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("RECOMPUT");
			}
			}
		else{
			if($($("[name=FCEB_HIDDENID]")[i]).val() == "10" || $($("[name=FCEB_HIDDENID]")[i]).val() == "9" || $($("[name=FCEB_HIDDENID]")[i]).val() == "7")
			{
				$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("RECOMPUT");
			}
			
		}*/
		$($("[name=FCEB_HIDDENID]")[i]).prev().addClass("RECOMPUT");
		}
}
//Eligiblity Final data field enable end

function getAddValue()
{
	var value="";
for (i=0;i<$(".FormPageMultiTab li").length - 1;i++)
	{
	
	value = $($(".FormPageMultiTab li")[i]).attr("id");
 
	$("#SCHEME").find("[value="+value+"]").attr("disabled",true);
	
//	$(".FormPageMultiTab ul li").find(value).attr("disabled",true)
	}

}

function OnClickChkElig(){
	if($("#RCCM_UNIQUID").val() == "S00006")
	{
		for(var n=0;n<$("#ELIGCHK").closest(".GSL").find(".LIP .DYNROW").length;n++)
		{
			if($($("#ELIGCHK").closest(".GSL").find(".LIP .DYNROW")[n]).find("input:radio[name=EGCD_METHOD]").is(":checked")==false && ($($("#ELIGCHK").closest(".GSL").find(".LIP .DYNROW")[n]).find("[name=EGCD_PROFILEI]").val() == "SEP" || $($("#ELIGCHK").closest(".GSL").find(".LIP .DYNROW")[n]).find("[name=EGCD_PROFILEI]").val() == "SENP"))
			{
				alert("Choose the method before checking Eligibility for "+$($("#ELIGCHK").closest(".GSL").find(".LIP .DYNROW")[n]).find("[name=EGCD_CUSNAME]").val());
				return;
			}
		}
	}
	if($("#RCCM_UNIQUID").val() == "S00001")
	{
		for(var n=0;n<$("#ELIGCHK").closest(".GSL").find(".LIP .DYNROW").length;n++)
		{
			if($($("#ELIGCHK").closest(".GSL").find(".LIP .DYNROW")[n]).find("input:radio[name=EGCD_METHODSEP]").is(":checked")==false && $($("#ELIGCHK").closest(".GSL").find(".LIP .DYNROW")[n]).find("[name=EGCD_PROFILE]").val() == "SEP")
			{
				alert("Choose the method before checking Eligibility for "+$($("#ELIGCHK").closest(".GSL").find(".LIP .DYNROW")[n]).find("[name=EGCD_CUSNAME]").val());
				return;
			}
		}
	}
	//$("#ELIGHSCHEME").empty();
	$("#ISELGBLTYCHECKED").val('1');
	$("#Save3").click();
	
	//LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val(),"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME");
	if($("#RCCM_UNIQUID").val() == "S00001" || $("#RCCM_UNIQUID").val() == "S00008" || $("#RCCM_UNIQUID").val() == "S00005" || $("#RCCM_UNIQUID").val()=="S00006" || $("#RCCM_UNIQUID").val() == "S00009")
		{
		$("#BTNFINCELIGBGRD").click();
		
		EligibilitySPTotCalc();
		}
		else if($("#RCCM_UNIQUID").val() == "S00004")
		{
		  EligibilityRIPTotCalc();
		}
		//$("#Save3").click();
		$('.ELIGHSCHEME').find('.AUTOCOMPUTFLD').focusout();
		
		
		
	
}

function GentrateCAM()
{
	
	var IOP=window.location.origin;
	var PrcsId=$("#DMY7").val().split("|")[7]
	/*var PrcsId=$("#RCCM_LOANUNIQID").val()*/
	var UniqId=$(".FormPageMultiTab li.active").attr('id');
	var Processid=$("#PrcsID").val()
	var Scheme = UI_getdata(Processid,UniqId,"","","","LSW_SGETSCHEMEID")
	var Schemeid = $(Scheme).find('SCHEME').html()
	

    ajaxindicatorstart("Downloading.. Please wait");
	
	 // if($("#VERTICAL").val()=="UCV")
	  //{
		//var flname = IOP+LoadFrmXML("RT0109")+"&__format=pdf&param1="+PrcsId+"&__filename=CAMUCV_"+$(".FormPageMultiTab li.active").text()+".pdf";
		 var flname = IOP+LoadFrmXML("RT0109")+"&__format=pdf&param1="+PrcsId+"&__format=pdf&param2="+Schemeid+"&__filename=CAM_"+$(".FormPageMultiTab li.active").text()+".pdf";
	
	  //}
	ajaxindicatorstop();
	  
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
			
	/* var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	var Scheme=$("#RCCM_UNIQUID").val()
	
	var LonType=$("#DMY7").val().split("|")[0]
	LonType=LonType.replace('%','')


    ajaxindicatorstart("Downloading.. Please wait");
	
	//var flname = IOP+LoadFrmXML("RT039")+"&__format=pdf&@PARAM1="+PrcsId+"&@PARAM2="+Scheme+"&@PARAM3="+LonType+"&@PARAM4="+$("#DMY7").val().split("|")[8]+"&__filename=CAM_"+$("#DMY7").val().split("|")[7]+"_"+$(".FormPageMultiTab li.active").text()+".pdf";
	var flname = IOP+LoadFrmXML("RT0103")+"&__format=pdf&@PARAM1="+PrcsId+"&@PARAM2="+Scheme+"&@PARAM3="+LonType+"&@PARAM4="+$("#DMY7").val().split("|")[8]+"&__filename=CAM_"+$("#DMY7").val().split("|")[7]+"_"+$(".FormPageMultiTab li.active").text()+".pdf";
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop(); */
}	  

function CheckRadio()
{
	if($("input[name='RCCM_SAMEDATE']:checked"). val() == undefined)
		{
		 $('input:radio[name=RCCM_SAMEDATE]')[1].checked = true;
		}
	if($("input[name='RCCM_APPLACTION']:checked"). val() == undefined)
	  {
		$('input:radio[name=RCCM_APPLACTION]')[1].checked = true;
	  }
	 if($("input[name='RCCM_CARPT']:checked"). val() == undefined)
	  {
	     $('input:radio[name=RCCM_CARPT]')[1].checked = true;
	  }
	  //Credit Change Start
    if($("input[name='RCCM_ITRGAP']:checked"). val() == undefined)
	  {
	    $('input:radio[name=RCCM_ITRGAP]')[1].checked = true;
	  }
     //Credit Change End
}


function CheckDocMndtry(TableID,FldClas,HDR)
{
	  var Doclength=$("#"+TableID).find(".tbodytr").length
	  
	  var RTNVAL="";
	  
	  for(i=0;i<Doclength;i++)
		  {
		  var tdcount=$($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd').length
		   
		  for(j=0;j<tdcount;j++)
			 {
			  if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).length>0)
				  {
				   if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).attr("type")=="radio"){
					  var atLeastOneChecked=false;
					  
					  $($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find('input[type=radio]').each(function() {
		    		         if ($(this).prop("checked") == true) {
		    		             atLeastOneChecked = true;  		              
		    		         }
		    		         
		    		     }); 
					  if(atLeastOneChecked == false)
					  {
					  RTNVAL = "No Data Available in " + $($($("#"+TableID+" thead").find('tr')[0]).find('th')[j]).text()
			    		+ " for " + $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() + "-"+HDR;
			    		return RTNVAL;
					  }
				  }
				  }
			 }
	 
		  }
	 return RTNVAL;
}

function HndlRRValdtn(){
	for(var i = 0;i<$($('.ELIGHSCHEME').find('input[name=FCEB_PROFILE]')).length;i++)
		{
		if(hasValue('#'+$($('.ELIGHSCHEME').find('input[name=FCEB_PROFILE]')[i]).attr("id"),"TERM (In Years)"))
			{
			$('#'+$($('.ELIGHSCHEME').find('input[name=FCEB_PROFILE]')[i]).attr("id")).closest('.GryShd').next().next().next().find('input').attr("value","Tenure selected more than lease period")
			$('#'+$($('.ELIGHSCHEME').find('input[name=FCEB_PROFILE]')[i]).attr("id")).closest('.GryShd').next().next().next().find('input').addClass("TERMINYR")
			return;
			}
		}
}

function hasValue(elem,val) {
    return $(elem).filter(function() { return $(this).val(); }).val()==val;
}

function getExpouserAmt()
{
   if($("#DMY7").val().split('|')[0]=="Existing Loans" || $("#DMY7").val().split('|')[0]=="Registered Mortgage" || $("#DMY7").val().split('|')[0]=="Purchase of property"
   || $("#DMY7").val().split('|')[0] =="GECL 3.0" || $("#DMY7").val().split('|')[0] =="GECL Additional 10%" || $("#DMY7").val().split('|')[0] =="GECL 2.0")
	{
       var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_GETEXCUSLONAMT")	
   
       $("#ICEG_EXPOUSER").val($(xml).find('LONAMT').text())
       $("#ICEG_EXPOUSER").next().addClass('active');
	}
	else
	{
		$("#ICEG_EXPOUSER").val(0)
        $("#ICEG_EXPOUSER").next().addClass('active');
	}
}

$(document).on("blur", ".ExpAmt", function() {
	
	var SanAmt=$(this).val().replace(/,/g,'')
	var ExpAmt=$("#ICEG_EXPOUSER").val().replace(/,/g,'')
	var LowTechVal = ""
	if($('.LowTechVal').val()==undefined){
		LowTechVal="";
	}
	else{
		LowTechVal=$(".LowTechVal").val().replace(/,/g,'')
	}
	if(SanAmt == ""){
		SanAmt=0;
	}
	if(ExpAmt==""){
		ExpAmt=0;
	}
	if(LowTechVal==""){
		LowTechVal=0;
	}
	$("#ICEG_TOTEXPOUSER").val(CURCommaSep(parseFloat(SanAmt)+parseFloat(ExpAmt)))
	$("#ICEG_TOTEXPOUSER").next().addClass('active');
	var TotExpr = $("#ICEG_TOTEXPOUSER").val().replace(/,/g,'')
	if(TotExpr==""){
		TotExpr=0;
	}
	$("#ICEG_ConslLTV").val(CURCommaSep(((parseFloat(TotExpr)/parseFloat(LowTechVal))*100).toFixed(2)));
	$("#ICEG_ConslLTV").next().addClass('active');
})

function getClosertype(id)
{
	if($("#"+$(id).attr('name')).val()=="Others")
	{
	  $(id).closest('.tbodytrtd').next().find('input[type=text]').show()
	  $(id).closest('.tbodytrtd').next().find('input[type=text]').val('')
	}
  else
   {
	  $(id).closest('.tbodytrtd').next().find('input[type=text]').hide()
	  $(id).closest('.tbodytrtd').next().find('input[type=text]').val('')
   }
}

function getConsider(id)
{
	if($(id).closest('.tbodytrtd').next().next().next().next().next().next().text()=="S00002" || $(id).closest('.tbodytrtd').next().next().next().next().next().next().text()=="S00003" 
	|| $(id).closest('.tbodytrtd').next().next().next().next().next().next().text()=="S00004")
	{
		if($("input[name='"+$(id).attr('name')+"']:checked").val()=="Yes")
		{
		$(id).closest('.tbodytrtd').next().find('input').val('');
		$(id).closest('.tbodytrtd').next().find('select').val('');
		$(id).closest('.tbodytrtd').next().find('span').show()
		//find("option[value='']").attr("selected","selected");
		$(id).closest('.tbodytrtd').next().next().find('input[type=text]').hide()
		}
	 else
	   {
		 $(id).closest('.tbodytrtd').next().find('input').val('');
		 $(id).closest('.tbodytrtd').next().find('select').val('');
		$(id).closest('.tbodytrtd').next().find('span').hide()
		//find("option[value='']").attr("selected","selected");
		$(id).closest('.tbodytrtd').next().next().find('input[type=text]').hide()
	   }
	}
	else
	{
		if($("input[name='"+$(id).attr('name')+"']:checked").val()=="No")
		{
		$(id).closest('.tbodytrtd').next().find('input').val('');
		$(id).closest('.tbodytrtd').next().find('select').val('');
		$(id).closest('.tbodytrtd').next().find('span').show()
		//find("option[value=' ']").attr("selected","selected");
		$(id).closest('.tbodytrtd').next().next().find('input[type=text]').hide()
		}
	 else
	   {
		$(id).closest('.tbodytrtd').next().find('input').val('');
		$(id).closest('.tbodytrtd').next().find('select').val('');
		$(id).closest('.tbodytrtd').next().find('span').hide()
		//find("option[value=' ']").attr("select","selected");
		$(id).closest('.tbodytrtd').next().next().find('input[type=text]').hide()
	   }
	}
}

function FocusOutFrmFld(Evnt){
	//$($($(this).parent().parent().parent()[0]).find('.tbodytrtd')[0]).find('input').focusout();
}

function CheckPerVal(Evnt){
	var val = Evnt.value.replace(/,/g,'');
	if(parseInt(val)>100){
		Evnt.value='';
		alert("Percentage value can't be greater than 100");
		return
	}
}

function MaxMltplr(Evnt){
	if($(".FormPageMultiTab li.active").attr("id")=="S00006"){
	var val = Evnt.value.replace(/,/g,'');
	if(parseFloat(val)>3){
		Evnt.value="";
		alert("Multiplier can't be greater than 3%");
		//return
	}
	else if(parseFloat(val)<=0)
	{
		Evnt.value="";
		alert("Multiplier can't be less than 0.01%");
		//return
	}
	CompCholaMrg(Evnt);
	}
}
function GPMPres(Evnt){
	if($(".FormPageMultiTab li.active").attr("id")=="S00006"){
	var val = Evnt.value.replace(/,/g,'');
	if(parseFloat(val)>100){
		Evnt.value=0;
		alert("Gross Profit Margin can't be greater than 100");
		//return
	}
	CompFinlCholaMrgn(Evnt);
	}
}

function PATMaxMltplr(Evnt){
	if($(".FormPageMultiTab li.active").attr("id")=="S00008"){
	var val = Evnt.value.replace(/,/g,'');
	if(parseFloat(val)>2){
		Evnt.value=0;
		alert("Multiplier can't be greater than 2");
		return
	}
	}
}






function GETDELETESCHEME()
{
	var value="";
	$("#SCHEMEDEL").empty();
	$('#SCHEMEDEL').material_select("destroy");
	$("#SCHEMEDEL").append('<option value disabled="">--Select--</option>')
     for (i=0;i<$(".FormPageMultiTab li").length - 1;i++)
	{
	
	value = $($(".FormPageMultiTab li")[i]).attr("id");
    
	if($("#DMY7").val().split('|')[8]=="ML01")
	{
	   if(value=="S00001")
		{
	    $("#SCHEMEDEL").append('<option value="S00001">Salaried Income Program</option>')
		}
	if(value=="S00002")
	   {
		$("#SCHEMEDEL").append('<option value="S00002">Repayment Surrogate Program</option>')
	   }
	if(value=="S00003")
		{
		$("#SCHEMEDEL").append('<option value="S00003">LOW LTV</option>')
        }
	if(value=="S00004")
		{
		$("#SCHEMEDEL").append('<option value="S00004">Rental Income Program</option>')
        }
	if(value=="S00007")
		{
		$("#SCHEMEDEL").append('<option value="S00007">Banking Surrogate</option>')
        }
	if(value=="S00009")
		{
	    $("#SCHEMEDEL").append('<option value="S00009">Income Assessment Program</option>')
		}	
	}
	else
	{
	if(value=="S00001")
		{
	    $("#SCHEMEDEL").append('<option value="S00001">Standard Prime</option>')
		}
	if(value=="S00002")
	   {
		$("#SCHEMEDEL").append('<option value="S00002">RTR</option>')
	   }
	if(value=="S00003")
		{
		$("#SCHEMEDEL").append('<option value="S00003">LOW LTV</option>')
        }
	if(value=="S00004")
		{
		$("#SCHEMEDEL").append('<option value="S00004">Rental Income Program</option>')
        }
	if(value=="S00005")
		{
		$("#SCHEMEDEL").append('<option value="S00005">LIP</option>')
        }
	if(value=="S00006")
		{
		$("#SCHEMEDEL").append('<option value="S00006">Chola Margin</option>')
        }
	if(value=="S00007")
		{
		$("#SCHEMEDEL").append('<option value="S00007">Banking Surrogate</option>')
        }
	if(value=="S00008")
		{
	    $("#SCHEMEDEL").append('<option value="S00008">PAT Multiplier</option>')
		}
	}
	 $('#SCHEMEDEL').material_select();
	}

}

function FnLoadEXGrd()
{
	var j= $("#Table3").find('.tbodytr').length
    
	for(var i=0;i<j;i++)
	{
		 var Obgligation=$($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[5]).find('input:checked').val()
		 var ClosureType=$($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[6]).find('input[type=text]').val()
		if($($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[11]).text()=="S00002" || $($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[11]).text()=="S00003"
		|| $($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[11]).text()=="S00004")
		 {
			if(Obgligation=="Yes")
			{
				$($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[6]).find('span').show()
				//$($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[6]).find('input[type=text]').val('')
				$($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[7]).find('input[type=text]').hide()
			}
		 else
		   {
			    $($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[6]).find('span').hide()
				//$($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[6]).find('input[type=text]').val('')
				$($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[7]).find('input[type=text]').hide()
		   }
		    
		    if(ClosureType=="Others")
			{
				$($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[7]).find('input[type=text]').show()
			}
		 else
		   {
			  $($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[7]).find('input[type=text]').hide()
		   }
		 }
		else
		{
		    if(Obgligation=="No")
			{
				$($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[6]).find('span').show()
				//$($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[6]).find('input[type=text]').val('')
				$($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[7]).find('input[type=text]').hide()
			}
		 else
		   {
			    $($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[6]).find('span').hide()
				//$($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[6]).find('input[type=text]').val('')
				$($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[7]).find('input[type=text]').hide()
		   }
	       
		    if(ClosureType=="Others")
			{
				$($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[7]).find('input[type=text]').show()
			}
		 else
		   {
			  $($($("#Table3").find('.tbodytr')[i]).find('.tbodytrtd')[7]).find('input[type=text]').hide()
		   }
	    }
		
   }
}


function LoanAmtChk(SancAmtFld,Compar1,Compar2){
	var CAMDATA="";
	if(parseFloat(SancAmtFld.value.replace(/,/g,''))>parseFloat(Compar1)){
		SancAmtFld.value="";
		alert("Sanction Amount can't be greater than "+$('.LoanCMPRFLD').closest('.form-row').find('div').first().find('input').val());
		CAMDATA="CAM"
	}
	return CAMDATA;
}


function RecompRecal(){
	if($(".FormPageMultiTab li.active").attr("id")=="S00006" || $(".FormPageMultiTab li.active").attr("id")=="S00008" || $(".FormPageMultiTab li.active").attr("id")=="S00005")
	{
		for(var i =0;i<$(".LIP .DYNROW").length;i++){
			if($($(".LIP .DYNROW")[i]).find("[name=EGCD_PROFILEI]").val()=="Salaried")
			{
				$($(".LIP .DYNROW")[i]).find("[name=INCMTable]").find('.AUTOCOMPUTFLD').removeClass("AUTOCOMPUTFLD");
			}
		}
	}
	$('.AUTOCOMPUTFLD').focusout();
	
	if($(".FormPageMultiTab li.active").attr("id")=="S00005"||$(".FormPageMultiTab li.active").attr("id")=="S00006"){
		$('input[name=EGCD_MULTIPLIER]').focusout();
	}
}

function CheckDocMndtry(TableID,FldClas,HDR)
{
	  var Doclength=$("#"+TableID).find(".tbodytr").length
	  
	  var RTNVAL="";
	  
	  for(i=0;i<Doclength;i++)
		  {
		  var tdcount=$($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd').length
		   
		  for(j=0;j<tdcount;j++)
			 {
			  if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[11]).text()=="S00002" ||
			  $($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[11]).text()=="S00003" ||
			  $($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[11]).text()=="S00004" )
				  {
			       if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find('input[type=radio]:checked').val()=="Yes")
				     {
				      if(j==5)
				        {
	                     if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[6]).find('input[type=text]').val()=='Select' ||$($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[6]).find('input[type=text]').val()=='')
	                       {
                            RTNVAL = "Closure Type is mandatory in "+HDR;
				            return RTNVAL;
	                       }
				         }  
			          } 
				   }
			  else 
			    {
		         if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find('input[type=radio]:checked').val()=="No")
			       {
			        if(j==5)
			         {
                       if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[6]).find('input[type=text]').val()=='Select' ||$($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[6]).find('input[type=text]').val()=='')
                         {
                          RTNVAL = "Closure Type is mandatory in "+HDR;
			              return RTNVAL;
                         }
			         }  
		          } 
			   }
			 }
		   }
	 return RTNVAL;
}

function ChngYear(row,year)
{
	FncallDocChkLst(this,'INCMTable'+row,{spname:'LSW_SGETINCOMEGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#EGCD_PROFILE'+row).val()+'|'+$('#EGCD_CUSID'+row).val()+'|'+$('#EGCD_UNIQUID'+row).val(),MnuId:$("#EGCD_FINYEAR"+row).val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,6,7','PRFINCOMEGRID');
    FncallDocChkLst(this,'OTHINCMTable'+row,{spname:'LSW_SGETOTHINCOMEGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#EGCD_PROFILE'+row).val()+'|'+$('#EGCD_CUSID'+row).val()+'|'+$('#EGCD_UNIQUID'+row).val(),MnuId:$("#EGCD_FINYEAR"+row).val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,6,7','PRFOTHINCOMEGRID');
}

//$(document).on("change", ".RIOIDD", function() {
$(document).on("change", ".RIOIDD", function() {
	if(this.nodeName == "SELECT")
	{
     var DDVal=$(this).val();
	
	 if(DDVal=="Agriculture")
	 {
		 $($(this).closest('.tbodytr').find('.tbodytrtd')[1]).find('.Perc').removeClass('IsPercentageFld');
		 $($(this).closest('.tbodytr').find('.tbodytrtd')[1]).find('.Perc').addClass('HalfIsPercentageFld');
		 if(parseFloat($($(this).closest('.tbodytr').find('.tbodytrtd')[1]).find('.Perc').val())>50)
			{
				$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).find('.Perc').val('0')
				$($(this).closest('.tbodytr').find('.tbodytrtd')[1]).find('.Perc').focusout();
			}
	 }
	 else if(DDVal!="")
	 {
	   $($(this).closest('.tbodytr').find('.tbodytrtd')[1]).find('.Perc').addClass('IsPercentageFld');
	   $($(this).closest('.tbodytr').find('.tbodytrtd')[1]).find('.Perc').removeClass('HalfIsPercentageFld');
	 }
	}
});


$(document).on("change", ".CONSRI", function() {
	if(this.nodeName == "SELECT")
	{
     var DDVal=$(this).val();
	
	 if(DDVal=="Cash Rental with un-registered Lease agreement")
	 {
		 $($(this).closest('.tbodytr').find('.tbodytrtd')[5]).find('.Perc').removeClass('IsPercentageFld');
		 $($(this).closest('.tbodytr').find('.tbodytrtd')[5]).find('.Perc').addClass('HalfIsPercentageFld');
		 if(parseFloat($($(this).closest('.tbodytr').find('.tbodytrtd')[5]).find('.Perc').val())>50)
			{
				$($(this).closest('.tbodytr').find('.tbodytrtd')[5]).find('.Perc').val('0')
				$($(this).closest('.tbodytr').find('.tbodytrtd')[5]).find('.Perc').focusout();
			}
	 }
	 else if(DDVal!="")
	 {
	   $($(this).closest('.tbodytr').find('.tbodytrtd')[5]).find('.Perc').addClass('IsPercentageFld');
	   $($(this).closest('.tbodytr').find('.tbodytrtd')[5]).find('.Perc').removeClass('HalfIsPercentageFld');
	 }
	}
});

function GetSegmDD(Industry,Segm,SegDefi,Margin,Evnt,BusType)
{
	var Segment=UI_getdata($("#"+Industry).val(),"","","","","LSW_SGETSEGMDD")
	$("#"+Segm).html("");
	$("#"+Margin).val('');
	$("#"+Margin).next().removeClass('active');
	$("#"+SegDefi).html("--Select--");	
	$("#"+Segm).append($(Segment).find('SEGMENT').html())
	$("#"+Segm).material_select();	
	$("#"+SegDefi).material_select();
	$("#"+BusType).val('');
	$("#"+BusType).material_select();
	CompFinlCholaMrgn(Evnt);	
}

function GetSegmDefiDD(Industry,Segm,SegmDefi,Margin,BS,Evnt)
{
	var SD=UI_getdata($("#"+Industry).val(),$("#"+Segm).val(),"","","","LSW_SGETSEGDIFIDD")
	$("#"+SegmDefi).html("");
	//$("#"+Margin).next().removeClass('active');
	$("#"+SegmDefi).append($(SD).find('SEGDEFI').html())
	$("#"+SegmDefi).material_select();	
	
	if($("#"+BS).val()!="")
	{
	   var Mrg=UI_getdata($("#"+Industry).val(),$("#"+Segm).val(),$("#"+SegmDefi).val(),$("#"+BS).val(),"","LSW_SGETMARGINDT")
	
	$("#"+Margin).val($(Mrg).find('RESULT').text())
	$("#"+Margin).next().addClass('active')		
	CompFinlCholaMrgn(Evnt);
	}
}

function GetSegmDefiDD1(Industry,Segm,SegmDefi,Margin,BS,Evnt)
{
	/*var SD=UI_getdata($("#"+Industry).val(),$("#"+Segm).val(),"","","","LSW_SGETSEGDIFIDD")
	$("#"+SegmDefi).html("");
	//$("#"+Margin).next().removeClass('active');
	$("#"+SegmDefi).append($(SD).find('SEGDEFI').html())
	$("#"+SegmDefi).material_select();*/	
	
	if($("#"+BS).val()!="")
	{
	   var Mrg=UI_getdata($("#"+Industry).val(),$("#"+Segm).val(),$("#"+SegmDefi).val(),$("#"+BS).val(),"","LSW_SGETMARGINDT")
	
	$("#"+Margin).val($(Mrg).find('RESULT').text())
	$("#"+Margin).next().addClass('active')		
	CompFinlCholaMrgn(Evnt);
	}
}

function GetMarginDT(Industry,Segm,SegmDefi,BS,Margin,Evnt)
{
	var Mrg=UI_getdata($("#"+Industry).val(),$("#"+Segm).val(),$("#"+SegmDefi).val(),$("#"+BS).val(),"","LSW_SGETMARGINDT")
	
	$("#"+Margin).val($(Mrg).find('RESULT').text())
	$("#"+Margin).next().addClass('active')	
	CompFinlCholaMrgn(Evnt);	
}
//Credit Changes Strt
function CompCholaMrg(Evnt){
	if($(".FormPageMultiTab li.active").attr("id") =="S00006")
	{
		var Multiplier = $(Evnt).closest('.DYNROW').find("[name=EGCD_MULTIPLIER]").val().replace(/,/g,'');
		if(Multiplier == "")
		{
			Multiplier=0;
		}
		if(isNaN(Multiplier))
		{
			Multiplier=0;
		}
		var PAT = 0;
		var Depreciation = 0;
		var Remuneration=0;
		var Sales=0;
		var CompCholaMrg1 = 0;
		for(var i=0;i<$(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbodytr").length;i++)
		{
			if($($($($(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbodytr")[i]).find(".tbodytrtd")[0]).find('span').children())[0].nodeName == "INPUT")
			{
				if($($($(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbodytr")[i]).find(".tbodytrtd")[0]).find('span').find('input').val()=="Net profit after tax(PAT)")
				{
					PAT = $($($(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbodytr")[i]).find(".tbodytrtd")[5]).find('span').find('input').val().replace(/,/g,'');
					if(PAT == "")
					{
						PAT=0;
					}
					if(isNaN(PAT))
					{
						PAT=0;
					}
				}
				else if($($($(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbodytr")[i]).find(".tbodytrtd")[0]).find('span').find('input').val()=="Net Sales")
				{
					Sales = $($($(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbodytr")[i]).find(".tbodytrtd")[5]).find('span').find('input').val().replace(/,/g,'');
					if(Sales == "")
					{
						Sales=0;
					}
					if(isNaN(Sales))
					{
						Sales=0;
					}
				}
				else if($($($(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbodytr")[i]).find(".tbodytrtd")[0]).find('span').find('input').val()=="Depreciation")
				{
					Depreciation = $($($(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbodytr")[i]).find(".tbodytrtd")[5]).find('span').find('input').val().replace(/,/g,'');
					if(Depreciation == "")
					{
						Depreciation=0;
					}
					if(isNaN(Depreciation))
					{
						Depreciation=0;
					}
				}
			}
			else if($($($($(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbodytr")[i]).find(".tbodytrtd")[0]).find('span').children())[0].nodeName == "DIV")
			{
				Remuneration = $($($(Evnt).closest('.DYNROW').find("[name=INCMTable]").find(".tbodytr")[i]).find(".tbodytrtd")[5]).find('span').find('input').val().replace(/,/g,'');
				if(Remuneration == "")
				{
					Remuneration=0;
				}
				if(isNaN(Remuneration))
				{
					Remuneration=0;
				}
			}
		}
		CompCholaMrg1 = ((parseFloat(PAT) * parseFloat(Multiplier)) + parseFloat(Depreciation) + parseFloat(Remuneration)) / parseFloat(Sales);
		if(CompCholaMrg1 == "")
		{
			CompCholaMrg1=0;
		}
		if(isNaN(CompCholaMrg1))
		{
			CompCholaMrg1=0;
		}
		CompCholaMrg1=CompCholaMrg1*100;
		$(Evnt).closest('.DYNROW').find("[name=EGCD_COMCHOMRG]").val(CURCommaSep(parseFloat(CompCholaMrg1).toFixed(2)));
		CompFinlCholaMrgn(Evnt)
	}
}

function CompFinlCholaMrgn(Evnt){
	var GrossProfitMargin = $(Evnt).closest('.DYNROW').find("[name=EGCD_GROSSPM]").val().replace(/,/g,'');
	var GuidelineIndustryMargin = $(Evnt).closest('.DYNROW').find("[name=EGCD_MARGIN]").val().replace(/,/g,'');
	var ComputedCholaMargin = $(Evnt).closest('.DYNROW').find("[name=EGCD_COMCHOMRG]").val().replace(/,/g,'');
	if(GrossProfitMargin == "")
	{
		GrossProfitMargin=9999;
	}
	if(isNaN(GrossProfitMargin))
	{
		GrossProfitMargin=9999;
	}
	if(GuidelineIndustryMargin == "")
	{
		GuidelineIndustryMargin=9999;
	}
	if(GuidelineIndustryMargin == "NA")
	{
		GuidelineIndustryMargin=9999;
	}
	if(isNaN(GuidelineIndustryMargin))
	{
		GuidelineIndustryMargin=9999;
	}
	if(ComputedCholaMargin == "")
	{
		ComputedCholaMargin=9999;
	}
	if(isNaN(ComputedCholaMargin))
	{
		ComputedCholaMargin=9999;
	}
	var num =[parseFloat(GrossProfitMargin),parseFloat(GuidelineIndustryMargin),parseFloat(ComputedCholaMargin)]
	var LowestVal = Math.min(...num);
	$(Evnt).closest('.DYNROW').find("[name=EGCD_CHOLAMEGIN]").val(CURCommaSep(parseFloat(LowestVal).toFixed(2)));
	CompMT1ApprisdIncm($(Evnt).closest('.DYNROW').find("[name=EGCD_ELIGHCRSUMMT1]"));
	CompMT2ApprisdIncm($(Evnt).closest('.DYNROW'));
	CompMT3ApprisdIncm(Evnt);
}

function GridControlDetailMARGINGST(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
				var HTML =	'<span><input type="text" id="MGST_GSTVAL'+rowno+'"  name="MGST_GSTVAL'+rowno+'" maxlength="15" data-item="Amount" data-total="FCBD_AVG" class="form-control IsNumberFields IsCURCommaFields  form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=MGST_GSTVAL'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=MGST_GSTVAL'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;    		
		         } 
				 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}

function CompMT1ApprisdIncm(Evnt){
	//Appraised monthly income = {(Eligible Credit Summation X CHOALMargin)*1/12} 
	var MT1ApprisdIncm = 0;
	var ElighCrSum = 0;
	var CHOALMargin = 0;
	
	 ElighCrSum = $(Evnt).val().replace(/,/g,'');
	 CHOALMargin = $(Evnt).closest(".DYNROW").find("[name = EGCD_CHOLAMEGIN]").val().replace(/,/g,'');
	 if(ElighCrSum == ""){
		 ElighCrSum = 0;
	 }
	 if(isNaN(ElighCrSum)){
		 ElighCrSum = 0;
	 }
	 if(CHOALMargin == ""){
		 CHOALMargin = 0;
	 }
	 if(isNaN(CHOALMargin)){
		 CHOALMargin = 0;
	 }
	 CHOALMargin = CHOALMargin/100;
	MT1ApprisdIncm = (parseFloat(ElighCrSum)*parseFloat(CHOALMargin))*1/12;
	if(MT1ApprisdIncm == ""){
		 MT1ApprisdIncm = 0;
	 }
	 if(isNaN(MT1ApprisdIncm)){
		 MT1ApprisdIncm = 0;
	 }
	$(Evnt).closest('.DYNROW').find("[name=EGCD_APPRMNTHINCMT1]").val(CURCommaSep(parseFloat(MT1ApprisdIncm).toFixed(2)));
	$("#ISELGBLTYCHECKED").val("0");
	
	if($(Evnt).closest('.DYNROW').find("input:radio[name=EGCD_METHOD]").is(":checked")==true)
	{
		if($(Evnt).closest('.DYNROW').find("input:radio[name=EGCD_METHOD]:checked").val() == "Method 1")
		{
			MOVEAPPRTOINC(Evnt,'EGCD_APPRMNTHINCMT1','EGCD_INCOMCONS');
		}
	}
	
}
function CompMT2ApprisdIncm(Evnt){
	//Appraised Monthly Income = {(Net Sales * CHOALMargin)*1/12}
	var MT2ApprisdIncm = 0;
	var NetSales = 0;
	var CHOALMargin = 0;
	for(var z= 0;z<$(Evnt).find("[name=INCMTable]").find('.tbodytr').length;z++)
	{
		if($($($(Evnt).find("[name=INCMTable]").find('.tbodytr')[z]).find('.tbodytrtd')[0]).find("[name=FPFI_FINYEAR"+z+"]").val() == "Net Sales")
		{
			NetSales = $($($(Evnt).find("[name=INCMTable]").find('.tbodytr')[z]).find('.tbodytrtd')[5]).find("[name=FPFI_AVERAGE"+z+"]").val().replace(/,/g,'');
		}
	}
	CHOALMargin = $(Evnt).closest(".DYNROW").find("[name = EGCD_CHOLAMEGIN]").val().replace(/,/g,'');
	if(CHOALMargin == ""){
		 CHOALMargin = 0;
	 }
	 if(isNaN(CHOALMargin)){
		 CHOALMargin = 0;
	 }
	 
	 if(NetSales == ""){
		 NetSales = 0;
	 }
	 if(isNaN(NetSales)){
		 NetSales = 0;
	 }
	 CHOALMargin = CHOALMargin/100;
	 MT2ApprisdIncm = (parseFloat(NetSales)*parseFloat(CHOALMargin))*1/12;
	 
	 if(MT2ApprisdIncm == ""){
		 MT2ApprisdIncm = 0;
	 }
	 if(isNaN(MT2ApprisdIncm)){
		 MT2ApprisdIncm = 0;
	 }
	 
	 $(Evnt).closest('.DYNROW').find("[name=EGCD_APPRMNTHINCMT2]").val(CURCommaSep(parseFloat(MT2ApprisdIncm).toFixed(2)));
	 $("#ISELGBLTYCHECKED").val("0");
	 
	 if($(Evnt).closest('.DYNROW').find("input:radio[name=EGCD_METHOD]").is(":checked")==true)
	{
		if($(Evnt).closest('.DYNROW').find("input:radio[name=EGCD_METHOD]:checked").val() == "Method 2")
		{
			MOVEAPPRTOINC(Evnt,'EGCD_APPRMNTHINCMT2','EGCD_INCOMCONS');
		}
	}
}
function CompMT3ApprisdIncm(Evnt){
	//Appraised Monthly Income = {(12 months GST Summation * CHOALMargin)*1/12} 
	var MT3ApprisdIncm = 0;
	var CHOALMargin = 0;
	var MnthlyGST = 0;
	
	CHOALMargin = $(Evnt).closest(".DYNROW").find("[name = EGCD_CHOLAMEGIN]").val().replace(/,/g,'');
	if(CHOALMargin == ""){
		 CHOALMargin = 0;
	 }
	 if(isNaN(CHOALMargin)){
		 CHOALMargin = 0;
	 }
	 
	 MnthlyGST = $(Evnt).closest(".DYNROW").find("[name = EGCD_TOTGSTMT2]").val().replace(/,/g,'');
	if(MnthlyGST == ""){
		 MnthlyGST = 0;
	 }
	 if(isNaN(MnthlyGST)){
		 MnthlyGST = 0;
	 }
	 CHOALMargin= CHOALMargin/100;
	 MT3ApprisdIncm = (parseFloat(MnthlyGST)*parseFloat(CHOALMargin))*1/12;
	 if(MT3ApprisdIncm == ""){
		 MT3ApprisdIncm = 0;
	 }
	 if(isNaN(MT3ApprisdIncm)){
		 MT3ApprisdIncm = 0;
	 }
	 
	 $(Evnt).closest('.DYNROW').find("[name=EGCD_APPRMNTHINCMT3]").val(CURCommaSep(parseFloat(MT3ApprisdIncm).toFixed(2)));
	 $(Evnt).closest('.DYNROW').find("[name=EGCD_APPRMNTHINCMT3]").next().addClass("active");
	 $("#ISELGBLTYCHECKED").val("0");
	 
	 if($(Evnt).closest('.DYNROW').find("input:radio[name=EGCD_METHOD]").is(":checked")==true)
	{
		if($(Evnt).closest('.DYNROW').find("input:radio[name=EGCD_METHOD]:checked").val() == "Method 3")
		{
			MOVEAPPRTOINC(Evnt,'EGCD_APPRMNTHINCMT3','EGCD_INCOMCONS');
		}
	}
}

function MOVEAPPRTOINC(Evnt,ApprInc,IncConsdr){
	var ApprIncVal = $(Evnt).closest('.DYNROW').find("[name="+ApprInc+"]").val().replace(/,/g,'');
	$(Evnt).closest('.DYNROW').find("[name="+IncConsdr+"]").val(CURCommaSep(parseFloat(ApprIncVal).toFixed(0)));
}

function MaxMltplr1(Evnt){
	$("#ISELGBLTYCHECKED").val('0');
	if($(".FormPageMultiTab li.active").attr("id")=="S00001"){
	var val = Evnt.value.replace(/,/g,'');
	if(parseFloat(val)>1.5){
		Evnt.value="";
		alert("Multiplier can't be greater than 1.5%");
		//return
	}
	else if(parseFloat(val)<=0)
	{
		Evnt.value="";
		alert("Multiplier can't be less than 0.01%");
		//return
	}
	TotValCompCall(Evnt);
	}
}

function MakReClickElg(){
	$("#ISELGBLTYCHECKED").val('0');
}
function ChngExGrOnChng(){
	$("#BTNRTREXTGRD").click();
	FncallDocChkLst(this,'Table5',{spname:'LSW_SGETRTRNORMS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$(".FormPageMultiTab li.active").attr("id"),MnuId:ViewRInavtivePGFlg},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','RTRNORMS');
}

function TotValCompCall(Evnt){
	var PrflRecAvg = $($($(Evnt).closest('.DYNROW').find("[name=SEPCALCPROFTable]").find('.tbodytr')).find('.tbodytrtd')[5]).find('input').val().replace(/,/g,'')
	if(PrflRecAvg == "")
	{
		PrflRecAvg=0;
	}
	if(isNaN(PrflRecAvg))
	{
		PrflRecAvg=0;
	}
	var Multplr = $(Evnt).closest('.DYNROW').find("[name=EGCD_MULTIPLIERSEPPR]").val().replace(/,/g,'');
	if(Multplr == "")
	{
		Multplr = 0;
	}
	if(isNaN(Multplr))
	{
		Multplr = 0;
	}
	var TotVal = parseFloat(PrflRecAvg) * parseFloat(Multplr);
	$(Evnt).closest('.DYNROW').find("[name=EGCD_SEPMT1TOTVAL]").val(CURCommaSep(parseFloat(TotVal).toFixed(0)));
	
}
/*
$(document).on("blur", ".ComChoMrg", function() {
	
	            var Field=$(this).attr("data-field");
				
				var ComChoMrg= Field.split('|')[0]
				var Margin= Field.split('|')[1]
				var CPM= Field.split('|')[2]
				var CMargin= Field.split('|')[3]
				
				if($(this).closest(".DYNROW").find('[name='+ComChoMrg+']').val()=="")
				{
					ComChoMrg=$(this).closest(".DYNROW").find('[name='+ComChoMrg+']').val('0');
				}
				else
				{
					ComChoMrg=$(this).closest(".DYNROW").find('[name='+ComChoMrg+']').val()
				}
				
				if($(this).closest(".DYNROW").find('[name='+Margin+']').val()=="")
				{
					Margin=$(this).closest(".DYNROW").find('[name='+Margin+']').val('0');
				}
				else
				{
					Margin=$(this).closest(".DYNROW").find('[name='+Margin+']').val()
				}
				
				if($(this).closest(".DYNROW").find('[name='+CPM+']').val()=="")
				{
					CPM=$(this).closest(".DYNROW").find('[name='+CPM+']').val('0');
				}
				else
				{
					CPM=$(this).closest(".DYNROW").find('[name='+CPM+']').val()
				}
				
				var ArrayVal = [ComChoMrg,Margin,CPM];
//Math.max.apply(Math,_array); // 3
                var MinChoMrg=Math.min.apply(Math,ArrayVal); 
				
				$(this).closest(".DYNROW").find('[name='+CMargin+']').val(MinChoMrg);
	
});
*/

//Credit Changes END
//MicroLAP Changes Start

function GridControlDetailIOTHNCMONE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			var HTML = "";
			if(row[4] != "N")
			{
				HTML =	'<span><input type="text" id="FRMI_FIRMLOC'+rowno+'" style="width:220px" name="FRMI_FIRMLOC'+rowno+'" maxlength="500" class="form-control NoSpecialChar form-control FincFirmExstChk">';			 
				HTML = HTML + '</span>'; 
			}
			else{
				HTML =	'<span><input type="text" id="FRMI_FIRMLOC'+rowno+'" style="width:220px" name="FRMI_FIRMLOC'+rowno+'" maxlength="500" disabled class="form-control NoSpecialChar form-control  DSVLBL FincFirmExstChk">';			 
				HTML = HTML + '</span>'; 
			}
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FRMI_FIRMLOC'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FRMI_FIRMLOC'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 { targets: 1, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="FRMI_CUSINCM'+rowno+'" data-total="EGCD_IAPTOTA" data-to-grossprft="EGCD_IAPGRSPRFT" data-totalb="EGCD_IAPTOTB" data-totala="EGCD_IAPTOTA" data-to-grossmrgn="EGCD_IAPGRSMRGN"  style="width:100px"  name="FRMI_CUSINCM'+rowno+'" maxlength="15" class="form-control NoSpecialChar IsCURCommaFields form-control FincIAPFRM AUTOCOMPUTFLD">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=FRMI_CUSINCM'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=FRMI_CUSINCM'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
				         } 
						 },
		           	     {targets: 4, "render": function ( data, type, row, meta )
		       			 {
		       				var rowno = meta.row; 
							var HTML = "";
							if(row[4] != "N")
							{
                            HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DELETFIRMONE DELBTN " title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
		        				HTML = HTML + '</span>'; 
							}
							else{
								HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png" style="display:none;" class="DELETFIRMONE DELBTN " title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
		        				HTML = HTML + '</span>';
							}
		        				var htmldata = $(HTML);				
		        				return htmldata[0].outerHTML;
		       			
		           	  }
				 }
    	   ],

         "fnDrawCallback": function (oSettings) {
        	 

        }

        });
}

function GridControlDetailIOTHNCMTWO (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			var HTML =	"";
			if(row[4] != "N")
			{
				HTML =	'<span><input type="text" id="FRII_FIRMLOC'+rowno+'" style="width:220px" name="FRII_FIRMLOC'+rowno+'" maxlength="500" class="form-control NoSpecialChar form-control FincFirmExstChk">';			 
				HTML = HTML + '</span>'; 
			}
			else{
				HTML =	'<span><input type="text" id="FRII_FIRMLOC'+rowno+'" style="width:220px" name="FRII_FIRMLOC'+rowno+'" maxlength="500" disabled class="form-control NoSpecialChar form-control  DSVLBL FincFirmExstChk">';			 
				HTML = HTML + '</span>'; 
			}
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FRII_FIRMLOC'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FRII_FIRMLOC'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 { targets: 1, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="FRII_CUSINCM'+rowno+'" style="width:100px" data-total="EGCD_IAPTOTB" data-to-grossprft="EGCD_IAPGRSPRFT" data-totalb="EGCD_IAPTOTB" data-totala="EGCD_IAPTOTA" data-to-grossmrgn="EGCD_IAPGRSMRGN"  name="FRII_CUSINCM'+rowno+'"  maxlength="15" class="form-control NoSpecialChar IsCURCommaFields form-control FincIAPFRM AUTOCOMPUTFLD">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=FRII_CUSINCM'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=FRII_CUSINCM'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
				         } 
						 },
		           	     {targets: 4, "render": function ( data, type, row, meta )
		       			 {
		       				var rowno = meta.row; 
							var HTML = "";
							if(row[4] != "N")
							{
                             HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DELETFIRMTWO DELBTN " title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
		        				HTML = HTML + '</span>';
							}	
							else{
								HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png" style="display:none;" class="DELETFIRMONE DELBTN " title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
		        				HTML = HTML + '</span>';
							}							
		        				var htmldata = $(HTML);				
		        				return htmldata[0].outerHTML;
		       			
		           	  }
				 }
    	   ],

         "fnDrawCallback": function (oSettings) {
        	 

        }

        });
}

function GridControlDetailIOTHNCMTHREE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			var HTML = "";
			if(row[4] != "N")
			{
				HTML =	'<span><input type="text" id="FRMI_FIRMLOC'+rowno+'" style="width:230px" name="FRMI_FIRMLOC'+rowno+'" maxlength="500" class="form-control NoSpecialChar form-control FincFirmExstChk">';			 
				HTML = HTML + '</span>'; 
			}	
			else{
				HTML =	'<span><input type="text" id="FRMI_FIRMLOC'+rowno+'" style="width:230px" disabled name="FRMI_FIRMLOC'+rowno+'" maxlength="500" class="form-control NoSpecialChar form-control DSVLBL FincFirmExstChk">';			 
				HTML = HTML + '</span>';
			}
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FRMI_FIRMLOC'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FRMI_FIRMLOC'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 { targets: 1, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="FRMI_CUSINCM'+rowno+'" style="width:100px"  name="FRMI_CUSINCM'+rowno+'" maxlength="15" data-total ="EGCD_IAPTOTEXP" class="form-control NoSpecialChar IsCURCommaFields form-control FincIAPFRM1 AUTOCOMPUTFLD">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=FRMI_CUSINCM'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=FRMI_CUSINCM'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
				         } 
						 },
		           	     {targets: 4, "render": function ( data, type, row, meta )
		       			 {
		       				var rowno = meta.row; 
                            var HTML = "";
							if(row[4] != "N")
							{
                             HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DELETFIRMTWO DELBTN " title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
		        				HTML = HTML + '</span>';
							}	
							else{
								HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png" style="display:none;" class="DELETFIRMONE DELBTN " title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
		        				HTML = HTML + '</span>';
							}
		        				var htmldata = $(HTML);				
		        				return htmldata[0].outerHTML;
		       			
		           	  }
				 }
    	   ],

         "fnDrawCallback": function (oSettings) {
        	 

        }

        });
}

function GridControlDetailIOTHNCMFOUR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			 var HTML = "";
				if(row[4] != "N")	{		 
				HTML =	'<span><input type="text" id="FRII_FIRMLOC'+rowno+'" style="width:220px" name="FRII_FIRMLOC'+rowno+'" maxlength="500" class="form-control NoSpecialChar form-control FincFirmExstChk">';			 
				HTML = HTML + '</span>'; 
				}
				else{
					HTML =	'<span><input type="text" id="FRII_FIRMLOC'+rowno+'" disabled style="width:220px" name="FRII_FIRMLOC'+rowno+'" maxlength="500" class="form-control NoSpecialChar form-control FincFirmExstChk DSVLBL">';			 
				HTML = HTML + '</span>'; 
				}
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=FRII_FIRMLOC'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=FRII_FIRMLOC'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 { targets: 1, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="FRII_CUSINCM'+rowno+'" disabled style="width:100px"  name="FRII_CUSINCM'+rowno+'"  maxlength="15" class="form-control NoSpecialChar IsCURCommaFields form-control DSVLBL">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=FRII_CUSINCM'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=FRII_CUSINCM'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
				         } 
						 },
		           	     {targets: 4, "render": function ( data, type, row, meta )
		       			 {
		       				var rowno = meta.row; 
							var HTML = "";
                            if(row[4] != "N")
							{
                             HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DELETFIRMTWO DELBTN " title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
		        				HTML = HTML + '</span>';
							}	
							else{
								HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png" style="display:none;" class="DELETFIRMONE DELBTN " title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
		        				HTML = HTML + '</span>';
							}
		        				var htmldata = $(HTML);				
		        				return htmldata[0].outerHTML;
		       			
		           	  }
				 }
    	   ],

         "fnDrawCallback": function (oSettings) {
        	 

        }

        });
}

function MicroLapPLRecomp(Evnt){
	var TotExpnVal = 0, ToNetPrft = 0,GrossPrftval1 = 0,NetMrgnVal = 0,BySalesVal1=0;
	GrossPrftval1=$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPGRSPRFT]').val().replace(/,/g,'');
	if(GrossPrftval1 == "")
	{
		GrossPrftval1=0;
	}
	if(isNaN(GrossPrftval1))
	{
		GrossPrftval1=0;
	}
	$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPTOTCI]').val(CURINRCommaSep(parseFloat(GrossPrftval1).toFixed(0)));
	$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPTOTCII]').val(CURINRCommaSep(parseFloat(GrossPrftval1).toFixed(0)));
	
	TotExpnVal = $(Evnt).closest(".DYNROW").find('[name=EGCD_IAPTOTEXP]').val().replace(/,/g,'');
	if(TotExpnVal == "")
	{
		TotExpnVal=0;
	}
	if(isNaN(TotExpnVal))
	{
		TotExpnVal=0;
	}
	ToNetPrft = parseFloat(GrossPrftval1) - parseFloat(TotExpnVal);
	if(ToNetPrft == "")
	{
		ToNetPrft=0;
	}
	if(isNaN(ToNetPrft))
	{
		ToNetPrft=0;
	}
	
	$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPTONETPRFT]').val(CURINRCommaSep(parseFloat(ToNetPrft).toFixed(0)));
	for(var m = 0;m<$(Evnt).closest(".DYNROW").find("[name=IAPFRMTables1]").find('.tbody .tbodytr').length;m++){
			if($($($(Evnt).closest(".DYNROW").find("[name=IAPFRMTables1]").find('.tbody .tbodytr')[m]).find(".tbodytrtd")[0]).find('input').val()=="By Sales")
			{
				BySalesVal1=$($($(Evnt).closest(".DYNROW").find("[name=IAPFRMTables1]").find('.tbody .tbodytr')[m]).find(".tbodytrtd")[1]).find('input').val().replace(/,/g,'');
				if(BySalesVal1 == "")
				{
					BySalesVal1=0;
				}
				if(isNaN(BySalesVal1))
				{
					BySalesVal1=0;
				}
			}
		}
		NetMrgnVal = parseFloat(ToNetPrft)/parseFloat(BySalesVal1);
		if(NetMrgnVal == "")
		{
			NetMrgnVal=0;
		}
		if(isNaN(NetMrgnVal))
		{
			NetMrgnVal=0;
		}
		if(NetMrgnVal == Infinity)
		{
			NetMrgnVal=0;
		}
		if(NetMrgnVal == -Infinity)
		{
			NetMrgnVal=0;
		}
		NetMrgnVal = NetMrgnVal * 100;
		$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPNETMRGN]').val(CURINRCommaSep(parseFloat(NetMrgnVal).toFixed(0)));
		$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPMNTHLYTURNOVR]').val(CURINRCommaSep(parseFloat(BySalesVal1).toFixed(0)));
		$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPMNTHLYTURNOVR]').next().addClass("active");
		$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPMRGN]').val(CURINRCommaSep(parseFloat(NetMrgnVal).toFixed(0)));
		$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPMRGN]').next().addClass("active");
		$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPNETBUSINESS]').val(CURINRCommaSep(parseFloat(ToNetPrft).toFixed(0)));
		$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPNETBUSINESS]').next().addClass("active");
		RecompApprInc(Evnt);
}


function GridControlDetailIASSETCLASSGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
				var HTML =	'<span><input type="text" id="EGAC_ASSETCLASFI'+rowno+'" style="width:160px" name="EGAC_ASSETCLASFI'+rowno+'"  maxlength="40" class="form-control  NoSpecialChar form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=EGAC_ASSETCLASFI'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=EGAC_ASSETCLASFI'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 { targets: 1, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="EGAC_YRPURCHASED'+rowno+'" style="width:160px"  name="EGAC_YRPURCHASED'+rowno+'"  maxlength="4" class="form-control NoSpecialChar YrValidation IsNumberFields form-control ">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=EGAC_YRPURCHASED'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=EGAC_YRPURCHASED'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
				         } 
						 },
						 { targets: 2, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="EGAC_PURCHASEVAL'+rowno+'" style="width:160px"  name="EGAC_PURCHASEVAL'+rowno+'"  maxlength="15" data-total="EGCD_IAPTOTASSTCR" class="form-control NoSpecialChar IsCURCommaFields form-control FincIAPPurchVal AUTOCOMPUTFLD">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=EGAC_PURCHASEVAL'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=EGAC_PURCHASEVAL'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
						  } 
					 },
		           	  {
		       			 targets: 5, "render": function ( data, type, row, meta )
		       			 {
		       				var rowno = meta.row; 
                            var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DELETEASSET DELBTN " title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
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

function RecompApprInc(Evnt){
	var NetBusInc = 0,OthrInc = 0,ApprInc = 0,TotAsst = 0,ActlAsst=0;
	NetBusInc=$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPNETBUSINESS]').val().replace(/,/g,'');
	if(NetBusInc == "")
	{
		NetBusInc=0;
	}
	if(isNaN(NetBusInc))
	{
		NetBusInc=0;
	}
	
	OthrInc=$(Evnt).closest(".DYNROW").find('[name=EGCD_FINOTHYRTOT]').val().replace(/,/g,'');
	if(OthrInc == "")
	{
		OthrInc=0;
	}
	if(isNaN(OthrInc))
	{
		OthrInc=0;
	}
	OthrInc = parseFloat(OthrInc)/12;
	ApprInc = parseFloat(NetBusInc)+parseFloat(OthrInc);
	if(ApprInc == "")
	{
		ApprInc=0;
	}
	if(isNaN(ApprInc))
	{
		ApprInc=0;
	}
	$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPAPPRMNTHLYINC]').val(CURINRCommaSep(parseFloat(ApprInc).toFixed(0)));
	$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPAPPRMNTHLYINC]').next().addClass("active");
	TotAsst = $(Evnt).closest(".DYNROW").find('[name=EGCD_IAPTOTASSTCR]').val().replace(/,/g,'');
	if(TotAsst == "")
	{
		TotAsst=0;
	}
	if(isNaN(TotAsst))
	{
		TotAsst=0;
	}
	ActlAsst = parseFloat(TotAsst)/(parseFloat(ApprInc)*48);
	if(ActlAsst == "")
	{
		ActlAsst=0;
	}
	if(isNaN(ActlAsst))
	{
		ActlAsst=0;
	}
	if(ActlAsst == Infinity)
	{
		ActlAsst=0;
	}
	if(ActlAsst == -Infinity)
	{
		ActlAsst=0;
	}
	ActlAsst=ActlAsst*100;
	$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPASSTCRRA]').val(CURINRCommaSep(parseFloat(ActlAsst).toFixed(2)));
	$(Evnt).closest(".DYNROW").find('[name=EGCD_IAPASSTCRRA]').next().addClass("active");
}

function RecompApprInc1(html){
	var NetBusInc = 0,OthrInc = 0,ApprInc = 0,TotAsst = 0,ActlAsst=0;
	NetBusInc=$(html).find('[name=EGCD_IAPNETBUSINESS]').val().replace(/,/g,'');
	if(NetBusInc == "")
	{
		NetBusInc=0;
	}
	if(isNaN(NetBusInc))
	{
		NetBusInc=0;
	}
	
	OthrInc=$(html).find('[name=EGCD_FINOTHYRTOT]').val().replace(/,/g,'');
	if(OthrInc == "")
	{
		OthrInc=0;
	}
	if(isNaN(OthrInc))
	{
		OthrInc=0;
	}
	OthrInc = parseFloat(OthrInc)/12;
	ApprInc = parseFloat(NetBusInc)+parseFloat(OthrInc);
	if(ApprInc == "")
	{
		ApprInc=0;
	}
	if(isNaN(ApprInc))
	{
		ApprInc=0;
	}
	$(html).find('[name=EGCD_IAPAPPRMNTHLYINC]').val(CURINRCommaSep(parseFloat(ApprInc).toFixed(0)));
	$(html).find('[name=EGCD_IAPAPPRMNTHLYINC]').next().addClass("active");
	TotAsst = $(html).find('[name=EGCD_IAPTOTASSTCR]').val().replace(/,/g,'');
	if(TotAsst == "")
	{
		TotAsst=0;
	}
	if(isNaN(TotAsst))
	{
		TotAsst=0;
	}
	ActlAsst = parseFloat(TotAsst)/(parseFloat(ApprInc)*48);
	if(ActlAsst == "")
	{
		ActlAsst=0;
	}
	if(isNaN(ActlAsst))
	{
		ActlAsst=0;
	}
	if(ActlAsst == Infinity)
	{
		ActlAsst=0;
	}
	if(ActlAsst == -Infinity)
	{
		ActlAsst=0;
	}
	ActlAsst=ActlAsst*100;
	$(html).find('[name=EGCD_IAPASSTCRRA]').val(CURINRCommaSep(parseFloat(ActlAsst).toFixed(2)));
	$(html).find('[name=EGCD_IAPASSTCRRA]').next().addClass("active");
}

//Micro LAP Changes End

function getIndustry(html,Row)
{
	//var xml1=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETINDUSCATRGORY");
	  var xml=$("#HiddenINDUSCATRGORY").val()
	  $(html).find('[name=INDUSTRYCAT]').val($($(xml).find('INDUSCATRGORY')[Row]).text());
	//$("#HiddenINDUSCATRGORY").val($(xml1).find("INDUSCATRGORY").text());
}

function GridControlDetailREPAYGRD(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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
                    var HTML = '<span><input type="text" disabled style = "width:100px" id="OPENINGBALANCE' + rowno + '"  name="OPENINGBALANCE' + rowno + '" maxlength="10" class="form-control DSVLBL form-control  IsNumberFields IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=OPENINGBALANCE' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=OPENINGBALANCE' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 3,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" disabled style = "width:100px" id="INTEREST' + rowno + '"  name="INTEREST' + rowno + '" maxlength="10" class="form-control DSVLBL form-control  IsNumberFields IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=INTEREST' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=INTEREST' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 4,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" disabled style = "width:100px" id="PRINCIPAL' + rowno + '"  name="PRINCIPAL' + rowno + '" maxlength="10" class="form-control DSVLBL form-control  IsNumberFields IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=PRINCIPAL' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=PRINCIPAL' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" disabled style = "width:100px" id="EMI' + rowno + '"  name="EMI' + rowno + '" maxlength="10" class="form-control DSVLBL form-control  IsNumberFields IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=EMI' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=EMI' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" disabled style = "width:100px" id="CLOSINGBALANCE' + rowno + '"  name="CLOSINGBALANCE' + rowno + '" maxlength="10" class="form-control DSVLBL form-control  IsNumberFields IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=CLOSINGBALANCE' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=CLOSINGBALANCE' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            }
            

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}
function Gentraterepay()
{
	$("#FIOFFICEUPDATE").click()
}