function GridControlDetailREPAYCHQ (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
				var HTML =	'<span><input type="text" id="RPCD_STACHQNUM'+rowno+'"  name="RPCD_STACHQNUM'+rowno+'" maxlength="6" data-item="Cheque1" class="form-control IsChequeFields checkCheque NoSpecialChar IsNumberFields form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=RPCD_STACHQNUM'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=RPCD_STACHQNUM'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
		         } 
				 },
				 { targets: 1, "render": function ( data, type, row, meta ) {                            
						
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="RPCD_ENDCHQNUM'+rowno+'"  name="RPCD_ENDCHQNUM'+rowno+'" maxlength="6" data-item="Cheque2" class="form-control IsChequeFields checkCheque ChkNoCheque IsNumberFields NoSpecialChar form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=RPCD_ENDCHQNUM'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=RPCD_ENDCHQNUM'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
				         } 
						 },
						 { targets: 2, "render": function ( data, type, row, meta ) {                            
								
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="RPCD_NOFCHQ'+rowno+'"  name="RPCD_NOFCHQ'+rowno+'" maxlength="3" data-item="NoOfChq"  class="form-control IsNumberFields NOFCHQ NoSpecialChar ChkNoCheque form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=RPCD_NOFCHQ'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=RPCD_NOFCHQ'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
						         } 
								 },
								 { targets: 3, "render": function ( data, type, row, meta ) {                            

							 			var rowno = meta.row;       			 
							 		
							 		var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" id="RPCD_PDCTYPE'+rowno+'" name="RPCD_PDCTYPE'+rowno+'" >';
							 			HTML = HTML + '<option value="">Select</option>';
										if($("#VERTICAL").val()!="UCV Eco")
										{
							 			HTML = HTML + '<option value="SPDC">SPDC</option>';
										}
										else if($("#VERTICAL").val()=="UCV Eco" && $("#PRPM_LOANTY").val()!="Term Loan")
										{
											HTML = HTML + '<option value="SPDC">SPDC</option>';
										}
										
										
										if($("#PRPM_LOANTY").val()=="Term Loan" )
										   {
											HTML = HTML + '<option value="PDC">PDC</option></span>';
											}
											
										
											
							 			var htmldata = $(HTML);
							 			
							 			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

							 return htmldata[0].outerHTML;
							          } 
							 		 },
								 { targets: 4, "render": function ( data, type, row, meta ) {                            

									 var rowno = meta.row;	
									 if(rowno != "0")
										 {
										 var HTML =	'<span id=""><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DelGridrow NOFCHQCOUNTDEL " title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/></span>'; 
							             return HTML;
										 }
									 else{
										 var HTML =	'<span id=""><img src="ThemeproLO/Common/Images/Delete_Img.png" style="display:none;" class="DelGridrow NOFCHQCOUNTDEL" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/></span>';	 
							             return HTML;
									 }
							          } 
							 		 }
     	
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
 }

function GridControlDetailREPAYCHQMULTI (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
				var HTML =	'<span><input type="text" id="BMTD_STACHQNUM'+rowno+'"  name="BMTD_STACHQNUM'+rowno+'" maxlength="6"  class="form-control IsChequeFields checkCheque1 IsNumberFields NoSpecialChar form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=BMTD_STACHQNUM'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=BMTD_STACHQNUM'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
		         } 
				 },
				 { targets: 1, "render": function ( data, type, row, meta ) {                            
						
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="BMTD_ENDCHQNUM'+rowno+'"  name="BMTD_ENDCHQNUM'+rowno+'" maxlength="6" data-item="Cheque1" class="form-control IsChequeFields checkCheque1 IsNumberFields NoSpecialChar form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=BMTD_ENDCHQNUM'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=BMTD_ENDCHQNUM'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
				         } 
						 },
						 { targets: 2, "render": function ( data, type, row, meta ) {                            
								
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="BMTD_NOFCHQ'+rowno+'"  name="BMTD_NOFCHQ'+rowno+'" maxlength="3" data-item="Cheque2"  data-item="NoOfChq" class="form-control IsNumberFields NOFCHQ1 NoSpecialChar form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=BMTD_NOFCHQ'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=BMTD_NOFCHQ'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
						         } 
								 },
								 { targets: 3, "render": function ( data, type, row, meta ) {                            

							 			var rowno = meta.row;       			 
							 			 
							 		var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" id="BMTD_PDCTYPE'+rowno+'" name="BMTD_PDCTYPE'+rowno+'">';
							 			HTML = HTML + '<option value="">Select</option>';
										
							 			if($("#VERTICAL").val()!="UCV Eco")
										{
							 			HTML = HTML + '<option value="SPDC">SPDC</option>';
										}
										else if($("#VERTICAL").val()=="UCV Eco" && $("#RPBD_PDCTYPE").val()!="Term Loan")
										{
											HTML = HTML + '<option value="SPDC">SPDC</option>';
										}
										
										if($("#RPBD_PDCTYPE").val()=="Term Loan")
										   {
											HTML = HTML + '<option value="PDC">PDC</option></span>';
											} 
									          			
							 			var htmldata = $(HTML);
							 			
							 			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

							 return htmldata[0].outerHTML;
							          } 
							 		 },
								 { targets: 4, "render": function ( data, type, row, meta ) {                            

									 var rowno = meta.row;	
									 if(rowno != "0")
										 {
										 var HTML =	'<span id=""><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DelGridrow" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/></span>'; 
							             return HTML;
										 }
									 else{
										 var HTML =	'<span id=""><img src="ThemeproLO/Common/Images/Delete_Img.png" style="display:none;" class="DelGridrow" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/></span>';	 
							             return HTML;
									 }
							          } 
							 		 },
							 		 { targets: 5, "render": function ( data, type, row, meta ) {                            

							 			var rowno = meta.row;	 
										var HTML =	'<span><input type="text" id="BMTD_UNIQNO'+rowno+'"  name="BMTD_UNIQNO'+rowno+'" maxlength="3" data-item="" class="form-control NoSpecialChar form-control">';			 
										HTML = HTML + '</span>'; 
											 
										var htmldata = $(HTML);
											
										if ($(htmldata).find('[name=BMTD_UNIQNO'+rowno+']').hasClass("IsCURCommaFields"))
											{
											data = CURCommaSep(data);
											}
											$(htmldata).find('[name=BMTD_UNIQNO'+rowno+']').attr("value",data);
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
    var FormName= 'Collection';
  // var CusID=$('#CBSI_CUSID').val()
    var CusID='PF'
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
 //    var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
 //    var Filename  = names.replace(',','')
	 
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


var DATA=["Repayment|"];
for (j=0;j<DATA.length;j++)
	 {
	   var MemoData=DATA[j].split("|")[0];
      var row = $("." + MemoData).find(".DYNROW").length;
      for (i=0;i<row;i++)
      {
        var HTML = $("." + MemoData).find(".DYNROW")[i];
       GetCustomerName(HTML,'Load');
        GetBnkName(HTML,'Load');
      }
}

function GetCustomerName()
{
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,"","","","","LSW_SGETREPAYBNKHNAM")
	var CusName=$(xml).find('RESULT').html();
	//$("#RPBD_PDCPROVIDE").material_select('destroy');
	$("#RPBD_PDCPROVIDE").append(CusName)
	//$("#RPBD_PDCPROVIDE").material_select();
}
/*
function LoadGetBnkName()
{
	var PrcsID=$("#PrcsID").val();
	
	var xml=UI_getdata(PrcsID,val,"","","","LSW_SGETBANKDTLCUSWS")
	var CusName=$(xml).find('RESULT').html();	
	//$(HTML).find("select[name=RPBD_BNKDETL]").append(CusName)
	$("#RPBD_BNKDETL").append(CusName)
}*/

/*
function GetCustomerName(HTML,Evnt)
{
	if(Evnt=="Change")
		{
		$(HTML).find("select[name=RPBD_PDCPROVIDE]").material_select('destroy');
		}
	else if(Evnt=="Load")
		{
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,"","","","","LSW_SGETCUSTOMERNAMES")
	var CusName=$(xml).find('RESULT').html();	
	$(HTML).find("select[name=RPBD_PDCPROVIDE]").append(CusName)
		}
	if(Evnt=="Change")
		{
		$(HTML).find("select[name=RPBD_PDCPROVIDE]").material_select();
		}
	else if(Evnt=="Click")
		{
		var DATA=["Repayment|"];
		for (j=0;j<DATA.length;j++)
			 {
			    var MemoData=DATA[j].split("|")[0];
		        //var row = $("." + MemoData).find(".DYNROW").length;
		        var HTML =$("." + MemoData).find(".DYNROW:last")
		        var PrcsID=$("#PrcsID").val();
				var xml=UI_getdata(PrcsID,"","","","","LSW_SGETCUSTOMERNAMES")
				var CusName=$(xml).find('RESULT').html();
				$(HTML).find("select[name=RPBD_PDCPROVIDE]").material_select('destroy');
				$(HTML).find("select[name=RPBD_PDCPROVIDE]").append(CusName)
				$(HTML).find("select[name=RPBD_PDCPROVIDE]").material_select();
			}
		}
}*/


function GetBnkName(HTML,Evnt,val)
{
	if(Evnt=="Change")
		{
		$(HTML).find("select[name=RPBD_BNKDETL]").material_select('destroy');
		$(HTML).find("select[name=RPBD_BNKDETL]").find('option').remove();
		}
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,val,"","","","LSW_SGETBANKDTLCUSWS")
	var CusName=$(xml).find('RESULT').html();	
	$(HTML).find("select[name=RPBD_BNKDETL]").append(CusName)
	if(Evnt=="Change")
		{
		$(HTML).find("select[name=RPBD_BNKDETL]").material_select();
		BnkAccntOnChng(HTML,$(HTML).find("select[name=RPBD_BNKDETL]").val())
		}
}

function BnkAccntOnChng(HTML,val){
	var row = $(HTML).attr("data-row")
	var op = UI_getdata($("#PrcsID").val(),val,"","","","LSW_SBANKDTLFRREPY");
	var text = op;
	var parser = new DOMParser();
	var xmlDoc = parser.parseFromString(text,"text/xml");
	x = xmlDoc.documentElement.childNodes;
	for (i = 0; i < x[0].childNodes.length ;i++) {
		if(x[0].childNodes[1].childNodes[0]!=undefined)
			{
			$("#"+x[0].childNodes[i].nodeName+row).val(x[0].childNodes[i].childNodes[0].nodeValue);
			$("#"+x[0].childNodes[i].nodeName+row).next().addClass('active');
			}
		}
}

function GetAcctNo(HTML,Evnt,val)
{
	//$(HTML).find("input[name=RPBD_ACCNUM]").val()
	if(Evnt=="Change")
	{
	//var ACCTID=$(HTML).find("input[name=RPBD_ACCNUM]").val()
	//$($(HTML).find('td')[7]).text(val);
	
	var length=$(HTML).find('table').find('.tbodytr').length
	
	for(i=0;i<length;i++)
	{
		$($($(HTML).find('table').find('.tbodytr')[i]).find('.tbodytrtd')[5]).text(val)
	}
	//var html1=$($(HTML).find('table tbody tr td')[7]).html()
	//$(html1).closest('span').find('[name=BMTD_UNIQNO0]').val(val)
	//$(HTML).find("input[name=BMTD_UNIQNO]").val(ACCTID)
	}
}


    $(document).on("blur", ".checkCheque", function() {

	var ChequeNoI = $($(this).closest('.tbodytr').find('[data-item=Cheque1]')[0]).val()
	
	var ChequeNoII = $($(this).closest('.tbodytr').find('[data-item=Cheque2]')[0]).val()
	
	   if(ChequeNoII !="")
	    {
           if(ChequeNoI>ChequeNoII)
		    {
			  alert('End cheque number should greater be than start cheque Number');
			  $($(this).closest('.tbodytr').find('[data-item=Cheque2]')[0]).val('')
                   return false;			
		    }
	   }
	});
	
	
	$(document).on("blur", ".checkCheque1", function() {

	var ChequeNoI = $($(this).closest('.tbodytr').find('[data-item=Cheque1]')[0]).val()
	
	var ChequeNoII = $($(this).closest('.tbodytr').find('[data-item=Cheque2]')[0]).val()
	
	   if(ChequeNoII !="")
	    {
           if(ChequeNoI>ChequeNoII)
		    {
			  alert('End cheque number should be greater than start cheque Number');
			  $($(this).closest('.tbodytr').find('[data-item=Cheque2]')[0]).val('')
                   return false;			
		    }
	   }
	});

function ChkEnachReson()
{
	if($("#DMY7").val().split('|')[11] != "")
	{
		var RepayMode=$("input[name='PRPM_MODE']:checked"). val();
		
		if(RepayMode != "E-NACH")
		{
			$("#PRPM_BNKRESON").attr('disabled',false)
			$("#PRPM_BNKRESON").addClass('PRPMMndtry')
			$("#PRPM_BNKRESON").material_select();
			$("#PRPM_BNKRESON").next().find(".MndtryAstr").html("*");
		}
		else
		{
			$("#PRPM_BNKRESON").attr('disabled',true)
			$("#PRPM_BNKRESON").removeClass('PRPMMndtry')
			$("#PRPM_BNKRESON").val('');
			$("#PRPM_BNKRESON").material_select();
			$("#PRPM_BNKRESON").next().find(".MndtryAstr").html("");
			
		}
	}
}

 
 /*    $(document).on("blur", ".Chkcheque", function() {
	
	var NoOfChq = $($(this).closest('.tbodytr').find('[data-item=NoOfChq]')[0]).val()
	var PrcsID=$("#PrcsID").val();
	var op= UI_getdata(PrcsID,"","","","","LSW_SGETLONTYP")
		var Tenure=$(op).find('TENTURE').text()
 /*  var Tenure=$(op).find("#LODE_REQTENUR").val();	
	var NoOfCheque= $('#'+HTML).val().replace(/,/g, "");  */
	/*  if(parseFloat(Tenure)<parseFloat(NoOfChq))
		{
	   
		alert("No Of Cheque should not be greater than Tenure - " + Tenure);
			$($(this).closest('.tbodytr').find('[data-item=NoOfChq]')[0]).val('')
		}
	});
	   */
	
	$(document).on("blur", ".ChkNoCheque", function() {
    var ChequeNoI = $($(this).closest('.tbodytr').find('[data-item=Cheque1]')[0]).val()
	var ChequeNoII = $($(this).closest('.tbodytr').find('[data-item=Cheque2]')[0]).val()
	var NoOfChq = ChequeNoII - ChequeNoI
	$($(this).closest('.tbodytr').find('[data-item=NoOfChq]')[0]).val(NoOfChq)
	var PrcsID=$("#PrcsID").val();
	var op= UI_getdata(PrcsID,"","","","","LSW_SGETLONTYP")
    var Tenure=$(op).find('TENTURE').text()
	 if(parseFloat(Tenure)<parseFloat(NoOfChq))
		{
	   
		alert("No Of Cheque should not be greater than Tenure - " + Tenure);
			$($(this).closest('.tbodytr').find('[data-item=NoOfChq]')[0]).val('')
		}
	
    });
	

 
 

