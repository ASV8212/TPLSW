function profitlose(Evnt)
{
var profit=$("input[name='RACD_PROFIT']:checked"). val();
	
	if(profit=="Financial Summary")
		{
		
	
		$('.PROFITLOSS').hide();
		$('.BALSHEET').hide();
		$('.RADIO').hide();
		$('.FINSUMM').show();
		$(".DocumentUploadType").hide();
		$(".UPDOC").hide();
		if(Evnt=="Change"){
		FncallDocChkLst(this,'Table5',{spname:'LSW_SGETROFINSMRYONCLICK',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'FS|'+$('#RACD_CUSID').val()+'|'+$('#RACD_UNIQID').val(),MnuId:$("#RACD_FINYEAR").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1,5,6,7','FINCSUMMARY');
		}
		}
	else
		{
		$('.PROFITLOSS').show();
		$('.BALSHEET').show();
		$('.RADIO').show();
		$('.FINSUMM').hide();
		$(".DocumentUploadType").show();
		
		}
}

function GridControlDetailRATIOPROFITLOSS (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,
	   "bSort": false,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': false,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
 //&& row[0]!="Gross Profit" 
				 { targets: 1, "render": function ( data, type, row, meta ) {                            
			 			if(row[0]!="Cash Profit" && row[0]!="Net Profit")
			 				{
			 				var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="RPLS_YEAR1'+rowno+'" style="width:140px"  name="RPLS_YEAR1'+rowno+'" maxlength="40" class="form-control IsNumberFieldsSpl  GridMndtry IsCURCommaFields form-control">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=RPLS_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=RPLS_YEAR1'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   	
			 				}
			 			else{
			 				var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="RPLS_YEAR1'+rowno+'" style="width:140px"  name="RPLS_YEAR1'+rowno+'" disabled maxlength="40" class="form-control DSVLBL IsNumberFieldsSpl  GridMndtry IsCURCommaFields form-control">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=RPLS_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=RPLS_YEAR1'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   
			 			}
							
				         } 
						 },
						// && row[0]!="Gross Profit"
						 { targets: 2, "render": function ( data, type, row, meta ) {                            
							 if(row[0]!="Cash Profit" && row[0]!="Net Profit")
								 {
								 var rowno = meta.row;	 
									var HTML =	'<span><input type="text" id="RPLS_YEAR2'+rowno+'" style="width:140px" name="RPLS_YEAR2'+rowno+'" maxlength="40" class="form-control IsCURCommaFields GridMndtry IsNumberFieldsSpl  form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=RPLS_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=RPLS_YEAR2'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;  
								 }
							 else{
								 var rowno = meta.row;	 
									var HTML =	'<span><input type="text" id="RPLS_YEAR2'+rowno+'" style="width:140px" name="RPLS_YEAR2'+rowno+'" disabled maxlength="40" class="form-control DSVLBL IsCURCommaFields GridMndtry IsNumberFieldsSpl  form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=RPLS_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=RPLS_YEAR2'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML; 
							 }
							 		
									
						  } 
					 },
					 //Gross Profit
					 { targets: 3, "render": function ( data, type, row, meta ) {                            
						 if(row[0]!="Cash Profit"  && row[0]!="Net Profit")
							 {
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="RPLS_YEAR3'+rowno+'" style="width:140px" name="RPLS_YEAR3'+rowno+'" maxlength="40" class="form-control IsCURCommaFields GridMndtry IsNumberFieldsSpl  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=RPLS_YEAR3'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=RPLS_YEAR3'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
							 }
						 else
							 {
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="RPLS_YEAR3'+rowno+'" style="width:140px" disabled name="RPLS_YEAR3'+rowno+'" maxlength="40" class="form-control IsCURCommaFields DSVLBL GridMndtry IsNumberFieldsSpl  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=RPLS_YEAR3'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=RPLS_YEAR3'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   
							 }
						
								
					  } 
				 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}






function GridControlDetailRATIOBALSHEET (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,
	   "bSort": false,

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
			 			if(row[0]!="Total Assests" && row[0]!="Total Liabilities" && row[0]!="Difference between Total Assests and Liabilities")
						{
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="RBSL_YEAR1'+rowno+'" style="width:140px"  name="RBSL_YEAR1'+rowno+'" maxlength="40" class="form-control IsNumberFieldsSpl IsCURCommaFields  form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=RBSL_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=RBSL_YEAR1'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
							
				         } 
						 else{
							 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" disabled id="RBSL_YEAR1'+rowno+'" style="width:140px"  name="RBSL_YEAR1'+rowno+'" maxlength="40" class="form-control DSVLBL IsNumberFieldsSpl IsCURCommaFields  form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=RBSL_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=RBSL_YEAR1'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;  
						 }
				 }
						 },
						 { targets: 2, "render": function ( data, type, row, meta ) {                            
					 			if(row[0]!="Total Assests" && row[0]!="Total Liabilities" && row[0]!="Difference between Total Assests and Liabilities")
						{
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="RBSL_YEAR2'+rowno+'" style="width:140px" name="RBSL_YEAR2'+rowno+'" maxlength="40" class="form-control IsNumberFieldsSpl IsCURCommaFields  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=RBSL_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=RBSL_YEAR2'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
									
						  } 
						  else{
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" disabled id="RBSL_YEAR2'+rowno+'" style="width:140px" name="RBSL_YEAR2'+rowno+'" maxlength="40" class="form-control IsNumberFieldsSpl IsCURCommaFields  DSVLBL form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=RBSL_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=RBSL_YEAR2'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML; 
						 }
						 }
						 
					 },
					 { targets: 3, "render": function ( data, type, row, meta ) {                            
				 			if(row[0]!="Total Assests" && row[0]!="Total Liabilities" && row[0]!="Difference between Total Assests and Liabilities")
						{
						 var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="RBSL_YEAR3'+rowno+'" style="width:140px" name="RBSL_YEAR3'+rowno+'" maxlength="40" class="form-control IsCURCommaFields IsNumberFieldsSpl  form-control">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=RBSL_YEAR3'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=RBSL_YEAR3'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   		
								
					  }
						else{
							var rowno = meta.row;	 
							var HTML =	'<span><input type="text" disabled id="RBSL_YEAR3'+rowno+'" style="width:140px" name="RBSL_YEAR3'+rowno+'" maxlength="40" class="form-control IsCURCommaFields IsNumberFieldsSpl DSVLBL  form-control">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=RBSL_YEAR3'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=RBSL_YEAR3'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   	
						}	
					 }
				 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}





function GridControlDetailFINCSUMMARY (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,
	   
	   "bSort": false,

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
			if(row[0] != "Cash Profit")
				{
				 var rowno = meta.row;	 
					var HTML =	'<span><input type="text" id="RFNS_PERC'+rowno+'" style="width:140px" data-field="RFNS_PERC'+rowno+'|Percentage" name="RFNS_PERC'+rowno+'" data-item="Percentage" data-total="" maxlength="3" class="form-control  IsPercentageFld  IsNumberFieldsSpl form-control FinYrIncm">';			 
					HTML = HTML + '</span>'; 
						 
					var htmldata = $(HTML);
						
					if ($(htmldata).find('[name=RFNS_PERC'+rowno+']').hasClass("IsCURCommaFields"))
						{
						data = CURCommaSep(data);
						}
						$(htmldata).find('[name=RFNS_PERC'+rowno+']').attr("value",data);
						return htmldata[0].outerHTML; 
				}
			else{
				 var rowno = meta.row;	 
					var HTML =	'<span><input type="text" disabled id="RFNS_PERC'+rowno+'" style="width:140px" data-field="RFNS_PERC'+rowno+'|Percentage" name="RFNS_PERC'+rowno+'" data-item="Percentage" data-total="" maxlength="3" class="form-control  IsPercentageFld  IsNumberFieldsSpl DSVLBL form-control FinYrIncm">';			 
					HTML = HTML + '</span>'; 
						 
					var htmldata = $(HTML);
						
					if ($(htmldata).find('[name=RFNS_PERC'+rowno+']').hasClass("IsCURCommaFields"))
						{
						data = CURCommaSep(data);
						}
						$(htmldata).find('[name=RFNS_PERC'+rowno+']').attr("value",data);
						return htmldata[0].outerHTML; 
			}
			  		
					
		         } 
				 },{ targets: 2, "render": function ( data, type, row, meta ) {                            
					 if(row[0] != "Cash Profit")
						 {
						 var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="RFNS_YEAR1'+rowno+'" style="width:140px"  name="RFNS_YEAR1'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="" maxlength="40" class="form-control GridMndtry IsCURCommaFields IsNumberFieldsSpl FinYrIncm1  form-control">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=RFNS_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=RFNS_YEAR1'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   
						 }
					 else{
						 var rowno = meta.row;	 
							var HTML =	'<span><input type="text" disabled id="RFNS_YEAR1'+rowno+'" style="width:140px"  name="RFNS_YEAR1'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="" maxlength="40" class="form-control GridMndtry DSVLBL IsCURCommaFields IsNumberFieldsSpl FinYrIncm1  form-control">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=RFNS_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=RFNS_YEAR1'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   
					 }
							
				         } 
						 },
						 { targets: 3, "render": function ( data, type, row, meta ) {                            
							 if(row[0] != "Cash Profit")
								 {
								 var rowno = meta.row;	 
									var HTML =	'<span><input type="text" id="RFNS_YEAR2'+rowno+'" style="width:140px" name="RFNS_YEAR2'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="" maxlength="40" class="form-control GridMndtry IsNumberFieldsSpl FinYrIncm1 IsCURCommaFields  form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=RFNS_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=RFNS_YEAR2'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;  
								 }
							 else{
								 var rowno = meta.row;	 
									var HTML =	'<span><input type="text" disabled id="RFNS_YEAR2'+rowno+'" style="width:140px" name="RFNS_YEAR2'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="" maxlength="40" class="form-control DSVLBL GridMndtry IsNumberFieldsSpl FinYrIncm1 IsCURCommaFields  form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=RFNS_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=RFNS_YEAR2'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;  
							 }
							  		
									
						  } 
					 },
					 { targets: 4, "render": function ( data, type, row, meta ) {                            
						 if(row[0] != "Cash Profit")
							 {
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="RFNS_YEAR3'+rowno+'" style="width:140px" name="RFNS_YEAR3'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="" maxlength="40" class="form-control GridMndtry IsNumberFieldsSpl FinYrIncm1  IsCURCommaFields form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=RFNS_YEAR3'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=RFNS_YEAR3'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;  
							 }
						 else{
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" disabled id="RFNS_YEAR3'+rowno+'" style="width:140px" name="RFNS_YEAR3'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL" data-total="" maxlength="40" class="form-control GridMndtry DSVLBL IsNumberFieldsSpl FinYrIncm1  IsCURCommaFields form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=RFNS_YEAR3'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=RFNS_YEAR3'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;  
						 }
								
					  } 
				 },
				 { targets: 5, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="RFNS_AVERAGE'+rowno+'" style="width:140px" name="RFNS_AVERAGE'+rowno+'" data-item="Average" maxlength="15" class="form-control  IsNumberFieldsSpl IsCURCommaFields form-control DSVLBL">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=RFNS_AVERAGE'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=RFNS_AVERAGE'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
							
				  } 
			 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}



function DocFldUpldHndlr(id,docu,KYCName)
{
	
var Val=$(id).val()


if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain= LoadFrmXML("RS001");
    var usrpwd= LoadFrmXML("RS002");
    var PrcsID=getUrlParam("PrcsID");
    var FormName= 'RADIO';
    var CusID=$('#RACD_UNIQID').val()
    var DocName=KYCName
    var names="";
    var descrptns="";
	var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	var flsize = "";
 var fd = new FormData();
   var vrsnno= "";
	var prodata = "";
var CountAttch=1;
	
	 for(var c=0;c<CountAttch;c++)
	 {
      file_data = $(id).closest('td').find('input[type="file"]')[0].files; // for multiple files
	     for(var i = 0;i<file_data.length;i++){
			var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	         fd.append("file_"+c, file_data[i]);
	         names += $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
			 flsize += parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
			 vrsnno += $(op).find("VR").text()+',';
			 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
			 {
				 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
			 }
	         descrptns += 'FieldDocument'+',';
	     }
	 }
	 
	 var FileSize=parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2);
   //  var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
   //   var Filename  = names.replace(',','')
         var Filename  = $(id).closest('td').find('input[type="file"]')[0].files[0].name
	      var FileType= Filename.substring(Filename.lastIndexOf('.')+1);
          var  Filename= Filename.substring(0, Filename.lastIndexOf('.'));
          var names=Filename
   
   
		var xml=UI_getdata(FileType,FileSize,Filename,"","","LSW_SGETDOCUMNTSIZE")
		var FileAccept=$(xml).find('RESULT').text()
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$(id).closest('td').find('input[type="file"]').val('')
		return
    }
	 names=names+'.'+FileType	
var y=  names;
/*var specialChars = "<>&#^|~`"
var check = function(string){
    for(i = 0; i < specialChars.length;i++){
        if(string.indexOf(specialChars[i]) > -1){
            return true
        }
    }
    return false;
}

if(check(y) == false){
    // Code that needs to execute when none of the above is in the string
}else{
    alert('File name contains special character please remove and upload');
	$(id).closest('td').find('input[type="file"]').val('')
	return;
}*/
	 
	 
	 

 ajaxindicatorstart("Uploading.. Please wait");
	    $.ajax({
	    	url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain="+domain+"&usrpwd="+usrpwd+"&Prvnt="+$("#Prvnt").val()+"&CusID="+CusID+"&DocName="+DocName,
	        data: fd,
			async:false,
	        contentType: false,
	        processData: false,
	        type: 'POST',
	        success: function(data){
			
			if(data=="Fail")
	        		{
						 ajaxindicatorstop();
	        		alert(LoadFrmXML("V0119"));
					return
	        		}
			else{
				//AttchDmsIns(data,'upload',prodata);
				//$(id).val('View');
				$(id).closest('td').find('input[type="hidden"]').val(data.split('~')[2])
				$(id).closest('td').find('input[type="file"]').attr('disabled',true)
				$(id).closest('td').find('input[type="file"]').val('');
				$(id).closest('td').find('input[type="file"]').hide();
			//	$(id).closest('td').replace('','');
			//	$(id).closest('td').append('<span class="name">'+names.slice(0,-1)+'</span> ')
				//
				$(id).closest('.md-form').find('span').remove()
				 $(id).val('')
		
			    $(id).val(data.split('~')[2])
				var UPLOAD=docu+'UPLOAD'
				$('#'+UPLOAD).hide();
				$('.'+docu).show();
				$(id).closest('.md-form').append('<span class="name">'+names+'</span>');
				
				
			
					ajaxindicatorstop();
					alert(LoadFrmXML("V0118"));
					return
					
				}	
					 ajaxindicatorstop(); 
	        },
	        failure:function(data)
	        {
	     		  ajaxindicatorstop();
					alert(LoadFrmXML("V0119"));
					return
	        	
	        }
	    });
		
		  ajaxindicatorstop();
		  }
		  else{
		  
		  alert('select the file to upload');
		  }

}


function CheckDocType()
{
	var RACD_DOCUMTYPE=$("input[name='RACD_DOCUMTYPE']:checked"). val();
	if(RACD_DOCUMTYPE=="Manual")
		{
		$(".UPDOC").hide()
		}
	else
		{
		$(".UPDOC").show()
		}
}


function GetFinclYr()
{
	var xml=UI_getdata("","","","","","LSW_SGetLstYr")
	var CusName=$(xml).find('RESULT').html();	
	$("#RACD_FINYEAR").append(CusName)
	//$('#RACD_FINYEAR').materialSelect();
}


function ChkGridMndtry(TableID,GridName){
	var Doclength=$("#"+TableID+" tbody").find("tr").length
	  
	  var RTNVAL="";
	  
	  for(i=0;i<Doclength;i++)
		  {
		  var tdcount=$($("#"+TableID+" tbody").find("tr")[i]).find('td').length
		  //var tdcount=$($($("#"+TableID+" tbody").find("tr")[i]).find('td')).find('.GridMndtry').length
		   
		  //for(j=0;j<tdcount;j++)
			//  {
			//   $($("#Table2 tbody").find("tr")[i]).find('td').length
			//  }
		  for(j=0;j<tdcount;j++)
			  {
			  if($($($("#"+TableID+" tbody").find("tr")[i]).find('td')[0]).text() != "Gross Profit" && $($($("#"+TableID+" tbody").find("tr")[i]).find('td')[0]).text() != "Net Profit" && $($($("#"+TableID+" tbody").find("tr")[i]).find('td')[0]).text() != "Cash Profit")
				  {
				  if($($($("#"+TableID+" tbody").find("tr")[i]).find('td')[j]).find('input[type="text"]').hasClass("GridMndtry")==true)
				  {
				  if($($($("#"+TableID+" tbody").find("tr")[i]).find('td')[j]).find('input[type="text"]').val()== "")
					  {
					  RTNVAL= "No Data Available in " + $($($("#"+TableID+" thead").find('tr')[0]).find('th')[j]).text()
			    		+ " for " + $($($("#"+TableID+" tbody").find('tr')[i]).find('td')[0]).text() + "- "+GridName;
			    		return RTNVAL; 
					  }
				  }	
				  }
			 		  
		    	 
		    	 
		  }
		  }
	 return RTNVAL;
		 
}

function GetCustomerName()
{
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,"","","","","LSW_SGETCUSTOMERNAMES3")
	var CusName=$(xml).find('RESULT').html();	
	$("#RACD_CUSID").append(CusName)
}

function GetEmploymentName(Evnt)
{
	if(Evnt == 'Change')
		{
		$("#RACD_CMPNYID").find('option').not($("#RACD_CMPNYID").find('option:first')).remove();
		$("#RACD_COMPANY").val('');
		}
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,$("#RACD_CUSID option:selected").val(),"","","","LSW_SGETEMPLOYDTL1")
	var CusName=$(xml).find('RESULT').html();	
	$("#RACD_CMPNYID").append(CusName)
	$("#RACD_CMPNYID").material_select('destroy');
	$("#RACD_CMPNYID").material_select();
}


function GetEmploymentNameLoad()
{
	var CMPNYID = $("#RACD_CMPNYID").val();
	if(CMPNYID == null){
		CMPNYID="";
	}
	$("#RACD_CMPNYID").find('option').not($("#RACD_CMPNYID").find('option:first')).remove();
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,$("#RACD_CUSID option:selected").val(),"","","","LSW_SGETEMPLOYDTL1")
	var CusName=$(xml).find('RESULT').html();	
	$("#RACD_CMPNYID").append(CusName)
	$("#RACD_CMPNYID").val(CMPNYID);
	$("#RACD_CMPNYID").material_select('destroy');
	$("#RACD_CMPNYID").material_select();
}

function GetRadioBtnVal(){
	var val =$('input[name=RACD_TYP]:checked').val();
	if(val==undefined)
    {
		val = "";
    }
	else{
		val = val+','+$("#RACD_UNIQID").val();
	}
	return val;
}

//Calculation Start


$(document).ready(function () {	
	
	
	// STANDARD PRIME,LIP,GTO GRID CALCULATIONS START
	$(document).on("blur", ".FinYrIncm", function() {
		
		//$(this).val();
		
		//Calc of Net Profile After Tax Begin
		var CrntVal = $(this).val().replace(/,/g,'')
		var CrntColIndx = $(this).parent().parent().index()
		if(CrntColIndx ==2||CrntColIndx==3||CrntColIndx==4)
			{
			
		/*var CrntColRow=$(this).closest('.tbodytr').index()*/
		var CrntTabVal=$($(this).closest('.tbodytr').find('.tbodytrtd')[0]).text()
		var chkval="";
		var toval="";
			var val="";
			var sumval=0;
			var sumval1=0;
		if($($(this).closest('.tbodytr').find('.tbodytrtd')[0]).text()=="Net profit as per P/L" || $($(this).closest('.tbodytr').find('.tbodytrtd')[0]).text()=="Tax Paid As Per ITR")
			{
			 chkval =$("#HiddenVal").val().split(',')[0]
			 toval=$("#HiddenVal").val().split(',')[1];
			}
		else{
			chkval =$("#HiddenCashPrft").val().split(',')[0]
			toval=$("#HiddenCashPrft").val().split(',')[1];
		}
		
		
		 
		var compval="";
			if(toval=="Net Profile After Tax")
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
					var findminval = "Net Profile After Tax"
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
						if($($($(this).closest('.tbody').find('tr')[n]).find('td')[0]).text()==val)
							{
							if($($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,'')!=""){
								sumval=sumval+parseFloat($($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,''))
								
							}
							break
							}
						}
					}
				for(var n=0;n<$(this).closest('.tbody').find('tr').length;n++){
					var findminval = "Net Profile After Tax"
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
			
			
			

		//Calc of Net Profile After Tax End
		
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
		
		
		$($(this).closest('.tbodytr').find('[data-item=Average]')[0]).val(CURINRCommaSep(Average));
			 	
		var AverageLngth = $(this).closest('.tbody').find('[data-item=Average]').length;
		
		Amount = 0;
		val=0;
		
		for (j=0;j<AverageLngth;j++)
		{
		
		val = $($(this).closest('.tbody').find('[data-item=Average]')[j]).val().replace(/,/g,'');
		
		if (val == "")
			{
			val = 0;
			}
		
		Amount = parseFloat(Amount) + parseFloat(val);
		
		}
		
		var TotalAverageFld = $(this).attr("data-total");
		
		$(this).closest(".DYNROW").find('[name='+TotalAverageFld+']').val(CURINRCommaSep(Amount.toFixed(2)));
		
		//alert($(this).val());
		
		
		return false;
	});
	
	
$(document).on("blur", ".FinYrIncm1", function() {
		
		//$(this).val();
		
		//Calc of Net Profile After Tax Begin
		var CrntVal = $(this).val().replace(/,/g,'')
		var CrntColIndx = $(this).parent().parent().index()
		if(CrntColIndx ==2||CrntColIndx==3||CrntColIndx==4)
			{
			
		/*var CrntColRow=$(this).closest('.tbodytr').index()*/
		var CrntTabVal=$($(this).closest('.tbodytr').find('.tbodytrtd')[0]).text()
		var chkval="";
		var toval="";
			var val="";
			var sumval=0;
			var sumval1=0;
		if($($(this).closest('.tbodytr').find('.tbodytrtd')[0]).text()=="Net profit" || $($(this).closest('.tbodytr').find('.tbodytrtd')[0]).text()=="Tax")
			{
			 chkval =$("#HiddenVal").val().split(',')[0]
			 toval=$("#HiddenVal").val().split(',')[1];
			}
		else{
			chkval =$("#HiddenCashPrft").val().split(',')[0]
			toval=$("#HiddenCashPrft").val().split(',')[1];
		}
		
		
		 
		var compval="";
			if(toval=="Cash Profit"){
				for(var i=0;i<chkval.split('|').length;i++)
					{
					val=chkval.split('|')[i]
					for(var n=0;n<$(this).closest('.tbody').find('tr').length;n++)
						{
						if($($($(this).closest('.tbody').find('tr')[n]).find('td')[0]).text()==val)
							{
							if($($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,'')!=""){
								sumval=sumval+parseFloat($($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,''))
								
							}
							break
							}
						}
					}
				for(var n=0;n<$(this).closest('.tbody').find('tr').length;n++){
					var findminval = "Net Profit"
						if($($($(this).closest('.tbody').find('tr')[n]).find('td')[0]).text()==findminval){
							sumval1=parseFloat($($($(this).closest('.tbody').find('tr')[n]).find('td')[CrntColIndx]).find('input[type=text]').val().replace(/,/g,''))
							break
						}
				}
				for(var n=0;n<$(this).closest('.tbody').find('tr').length;n++){
					if($($($(this).closest('.tbody').find('tr')[n]).find('td')[0]).text()==toval)
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
			
			
			

		//Calc of Net Profile After Tax End
		
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
		
		
		$($(this).closest('.tbodytr').find('[data-item=Average]')[0]).val(CURINRCommaSep(Average));
			 	
		var AverageLngth = $(this).closest('.tbody').find('[data-item=Average]').length;
		
		Amount = 0;
		val=0;
		
		for (j=0;j<AverageLngth;j++)
		{
		
		val = $($(this).closest('.tbody').find('[data-item=Average]')[j]).val().replace(/,/g,'');
		
		if (val == "")
			{
			val = 0;
			}
		
		Amount = parseFloat(Amount) + parseFloat(val);
		
		}
		
		var TotalAverageFld = $(this).attr("data-total");
		
		$(this).closest(".DYNROW").find('[name='+TotalAverageFld+']').val(CURINRCommaSep(Amount.toFixed(2)));
		
		//alert($(this).val());
		
		
		return false;
	});
});


function GetLatestFincYr(){
	if($("#RACD_FINYEAR").val()!=""){
		return $("#RACD_FINYEAR").val()
	}
	else{
		alert("Kindly choose Latest Year")
		return
	}
}

function GetLatestFincSumYr(){
	if($("#RACD_FINSUMYEAR").val()!=""){
		return $("#RACD_FINSUMYEAR").val()
	}
	else{
		alert("Kindly choose Latest Year")
		return
	}
}

function GrdLoadOnYrChng(){
	FncallDocChkLst(this,'Table3',{spname:'LSW_SGETROPROFLOSS1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'PL|'+$('#RACD_CUSID').val()+'|'+$('#RACD_UNIQID').val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5,6','RATIOPROFITLOSS');
	FncallDocChkLst(this,'Table4',{spname:'LSW_SGETROBALSHTGRID1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'BS|'+$('#RACD_CUSID').val()+'|'+$('#RACD_UNIQID').val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','RATIOBALSHEET');
	if($("#RACD_FINYEAR").val() !="")
		{
		var op = UI_getdata($("#RACD_FINYEAR").val(),"","","","","LSW_SSTNDRYR")
		$("#RACD_RADYEARI").val($(op).find("RACD_RADYEARI").text())
		$("#RACD_RADYEARII").val($(op).find("RACD_RADYEARII").text())
		}
	
}


function GrdLoadOnFincSum(){
	FncallDocChkLst(this,'Table5',{spname:'LSW_SGETROFINSMRY',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'FS|'+$('#RACD_CUSID').val()+'|'+$('#RACD_UNIQID').val(),MnuId:GetLatestFincSumYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1,5,6,7','FINCSUMMARY');
	
	/*if($("#RACD_FINSUMYEAR").val() !="")
		{
		var op = UI_getdata($("#RACD_FINSUMYEAR").val(),"","","","","LSW_SSTNDRYR")
		$("#RACD_RADSUMYEARI").val($(op).find("RACD_RADYEARI").text())
		$("#RACD_RADSUMYEARII").val($(op).find("RACD_RADYEARII").text())
		}*/
	
}

function HndlFirmOnLoad(){
	if($("input:radio[name=RACD_TYP]:checked").val()!=undefined){
		var cls=$("input:radio[name=RACD_TYP]:checked").val().replace(/ /g, "");
		if(cls=="Consolidated"){
			$('.Consolidated').show();
			$('.AddFirm').hide();
		}
		else{
			$('.Consolidated').hide();
			$('.AddFirm').show();
		}
	}
	else{
		$('.Consolidated').hide();
		$('.AddFirm').show();
	}
}

function GetConslList()
{
/*	if(Evnt == "Change"){
		$("#RACD_Ratio").find('option').not($("#RACD_Ratio").find('option:first')).remove()
	}*/
	var op  = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETRATIOLST");
	var CusName=$(op).find('RESULT').html();	
	$("#RACD_Ratio").append(CusName)
}

function RatioFldOnBlur(){
	$("#RACD_RatioHidden").val($("#RACD_Ratio").val().join());
	
	
	
	if($("#RACD_RatioHidden").val().includes(",") ==true)
	//if($("#RACD_RatioHidden").val()!="")
	{
		UI_getdata($("#PrcsID").val(),$("#RACD_UNIQID").val(),"","","","LSW_SCLRPREVCONSLDTREC");
		FncallDocChkLst(this,'Table4',{spname:'LSW_SGETROBALSHTGRID1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'BS|'+$('#RACD_CUSID').val()+'|'+$("#RACD_RatioHidden").val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5','RATIOBALSHEET');
		FncallDocChkLst(this,'Table3',{spname:'LSW_SGETROPROFLOSS1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'PL|'+$('#RACD_CUSID').val()+'|'+$("#RACD_RatioHidden").val()+'|'+GetRadioBtnVal(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,5,6','RATIOPROFITLOSS');
	}
	else{
		alert("Atleast select two sheets to consolidate");
		return;
	}
}

function ChkifCusExst(val,id,hiddenid){
	if($("input:radio[name=RACD_PROFIT]:checked").val()==undefined){
		
		alert("Kindly choose Ratio Sheet or Financial.");
		return
	}
	else{
		var op = UI_getdata($("#PrcsID").val(),$("input:radio[name=RACD_PROFIT]:checked").val(),val,"","","LSW_SCHKIFCUSEXSTNRTO");
		if($(op).find("RESULT").text()!="SUCCESS"){
			$('select[name="'+id+'"]').val('');
			$('select[name="'+id+'"]').parent().find('input').val('');
			$("#"+hiddenid).val('');
			alert($(op).find("RESULT").text());
			return 'Y';
		}
	}
	
}


function CusAndFrmOnChng(){
	
}


function GrdLoadOnFincSum(){
	FncallDocChkLst(this,'Table5',{spname:'LSW_SGETROFINSMRY',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'FS|'+$('#RACD_CUSID').val()+'|'+$('#RACD_UNIQID').val(),MnuId:GetLatestFincSumYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||1,5,6,7','FINCSUMMARY');
	
	/*if($("#RACD_FINSUMYEAR").val() !="")
		{
		var op = UI_getdata($("#RACD_FINSUMYEAR").val(),"","","","","LSW_SSTNDRYR")
		$("#RACD_RADSUMYEARI").val($(op).find("RACD_RADYEARI").text())
		$("#RACD_RADSUMYEARII").val($(op).find("RACD_RADYEARII").text())
		}*/
	
}


function GenRatioSheet()
{
	$("#Save1").click();
	$("#Save2").click();
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	var UniqId=$(".FormPageMultiTab li.active").attr('id');
	var Year=$("#RACD_FINYEAR").val()
	var Consolid=$("input:radio[name=RACD_TYP]:checked").val()

    ajaxindicatorstart("Downloading.. Please wait");
	
	if(Consolid=="Consolidated")
	{
	var flname = IOP+LoadFrmXML("RT095")+"&__format=pdf&Param1="+PrcsId+"&Param2="+UniqId+"&Param3="+Year+"&Param4="+Consolid+"&__filename=ConsolidatedRatioSheet_"+$("#DMY7").val().split("|")[7]+"_"+$("#RACD_CONSRATIONAME").val()+".pdf";
	}
	else
	{
		var flname = IOP+LoadFrmXML("RT095")+"&__format=pdf&Param1="+PrcsId+"&Param2="+UniqId+"&Param3="+Year+"&Param4="+Consolid+"&__filename=RatioSheet_"+$("#DMY7").val().split("|")[7]+"_"+$(".FormPageMultiTab li.active").text()+".pdf";
	}
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}
function getRatioVal()
{
	var k=	$("#RACD_Ratio").val().length	
var CUSTOMERNAMES=""
	var CUSText1=""
 for(i=0;i<k;i++)
	 {
	 var CUSTOMERNAMES1=$("#RACD_Ratio").val()[i]
     var CUSTEXT =$($("#RACD_Ratio").find('active').prevObject["0"].selectedOptions).find('option').prevObject[i].text
		
	 if(CUSTOMERNAMES1!=undefined)
		 {
	       var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSTOMERNAMES1
	       var CUSText1= CUSText1+','+CUSTEXT
         }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')
       var CUSText1=CUSText1.replace(',','')
       $("#RACD_CONSRATIOID").val(CUSTOMERNAMES)
       $("#RACD_CONSRATIONAME").val(CUSText1)
}  


function ConslBtnOnClick(){
	$("#RACD_RatioHidden").val($("#RACD_Ratio").val().join());
	
	
	
	if($("#RACD_RatioHidden").val().includes(",") ==true)
	{
	var op=UI_getdata($("#RACD_Ratio").val().join(),$("#PrcsID").val(),"","","","LSW_SCHKSAMEYR")
	if($(op).find("RESULT").text()!="ALLOW")
		{
		alert("Financial Year not match")
		$("input:radio[name=RACD_TYP]").attr('checked', false);
		return;
		}
	else{
		$("#RACD_FINYEAR").material_select("destroy");
		$("#RACD_FINYEAR").val($(op).find('FINYEAR').text());
		$("#RACD_FINYEAR").attr("disabled","disabled");
		$("#RACD_FINYEAR").material_select();
		$("#RACD_RatioHidden").next().addClass('active')
		
		var op = UI_getdata($("#RACD_FINYEAR").val(),"","","","","LSW_SSTNDRYR")
		$("#RACD_RADYEARI").val($(op).find("RACD_RADYEARI").text())
		$("#RACD_RADYEARII").val($(op).find("RACD_RADYEARII").text())
		/*$("#BTNRATIOBALSHEET").click();
		$("#BTNPROFITLOSS").click();*/
		
		$("#RACD_CONSLSTS").val("Consolidated")
		RatioFldOnBlur();
	}
	}
else{
	alert("Atleast select two sheets to consolidate");
		return;
	}
}

function UploadData(id)
 {
 	
 		//var s=$(id).val()
		var s= $(id).closest('div').find('input[type="file"]').val()
 var lastIndex = s.lastIndexOf(".")
 var s2 = s.substring(lastIndex + 1); 


 if(s2!='xlsx')
 {
 //alertify.alert('Invalid File Format');
alert('Invalid File Format');
 $(id).closest('div').find('input[type="file"]').val('');
 return;	
 }

 	var fd = new FormData();
 	file_data = $(id).closest('div').find('input[type="file"]')[0].files;
 	  fd.append("file_"+"1", file_data[0]);
 	  
 	  var name=file_data[0].name.split('.')[0];
 	  var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	  //$("#PrcsID").attr('value',$(op).find("VR").text())
 	var   param1=$(op).find("VR").text();
 	var   param2="LSW_SEXCELMULTIUPLOADDATA";
 	var   param3="LSW_TPROFITLOSSRATIOELI";
 	
 		$.ajax({
 			url:"/TPLSW/ExcelMultiDynmcUpld?param1="+param1+"&param2="+param2+"&param3="+param3+"&param4=&param5=&Prvnt="+$(window.parent.parent.document).find("#Prvnt").val(),
 			data :  fd,
 			async:false,
 	        contentType: false,
 	        processData: false,
 	        type: 'POST',
 	        success: function (xml1) {

 	        	alert(xml1);
 				if(xml1=='Success')
 				{
 				$(id).closest('div').find('input[type="file"]').val('');
				var VALIDATIONCHK=UI_getdata($(op).find("VR").text(),$("#RACD_CUSID").val(),$("#RACD_UNIQID").val(),$("#RACD_PRCSID").val(),"","LSW_SPPROFITEXCLRATIO")			
			var BulkInsertRST=$(VALIDATIONCHK).find('RESULT').text();
			if($(VALIDATIONCHK).find('RESULT').text()=="SUCCESS")
			{
				
			   // FncallDocChkLst(this,'Table4',{spname:'LSW_SSHEETPROFITLOSS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val()+'~'+$(op).find("VR").text(),brid:'FR|'+$('#FINT_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,6','FINANACESHEET');
}
 				else
 				{
					var RESULT=$(VALIDATIONCHK).find('RESULT').text()
	
				if(RESULT != "")
				{
			    var Alert2=''
				var nameArr = RESULT.split(',')
                 k=nameArr.length
				 for(i=0;i<k;i++)
				 {
					var Alert1= nameArr[i]
					var Alert2 = Alert2 +'\r\n'+Alert1
				 }
				   alert('Complete the below Mandatory actionables \r\n'+Alert2)
				   return false;
				}
 				}
 	  
 	        }
		}
 	    });
		}
		function GridControlDetailFINANACESHEET (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,
	   "bSort": false,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': false,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
 
				 { targets: 1, "render": function ( data, type, row, meta ) {                            
			 			
			 				var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="FINT_YEAR1'+rowno+'" style="width:140px"  name="FINT_YEAR1'+rowno+'" maxlength="40" class="form-control IsNumberFieldsSpl  GridMndtry IsCURCommaFields form-control">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=FINT_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=FINT_YEAR1'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   	
			 			
							
				         } 
						 },
						 { targets: 2, "render": function ( data, type, row, meta ) {                            
							 
								 var rowno = meta.row;	 
									var HTML =	'<span><input type="text" id="FINT_YEAR2'+rowno+'" style="width:140px" name="FINT_YEAR2'+rowno+'" maxlength="40" class="form-control IsCURCommaFields GridMndtry IsNumberFieldsSpl  form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=FINT_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=FINT_YEAR2'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;  		
						  } 
					 },
					 { targets: 3, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FINT_YEAR3'+rowno+'" style="width:140px" name="FINT_YEAR3'+rowno+'" maxlength="40" class="form-control IsCURCommaFields GridMndtry IsNumberFieldsSpl  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FINT_YEAR3'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FINT_YEAR3'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}
