

function GridControlDetailSALESGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
				var HTML =	'<span><input type="text" disabled id="SALS_MONTH'+rowno+'" style="width:200px"  name="SALS_MONTH'+rowno+'"  class="form-control DSVLBL SALSDBfields form-control">';			 
				HTML = HTML + '</span>'; 
					 
					var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=SALS_MONTH'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=SALS_MONTH'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
		           } 
				 },
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="SALS_AMOUNT'+rowno+'" style="width:200px" data-item="Amount" data-scr="AMOUNT"  data-field="SALS_AMOUNT'+rowno+'|" data-to="SALE_SALESSUM" name="SALS_AMOUNT'+rowno+'"  data-total="SALE_SALESSUM" maxlength="30" class="form-control NoSpecialChar IsNumberFields SALES SALSDBfields IsCURCommaFields form-control ">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=SALS_AMOUNT'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=SALS_AMOUNT'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
		         } 
				 },
			{ targets: 4, "render": function ( data, type, row, meta ) { 				 
				var rowno = meta.row;
				var HTML ="";
				if(data == "" || $("#SALE_MODE").val() != "Upload")
				{
					if($("#SALE_MODE").val() == "Upload" && $("#SALE_TRANSFLG").val() == "Initiated")
					{
						HTML='<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="SALS_1UPLD'+rowno+'"  width="20" height="20"/>';
					}
					else{
					HTML='<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" class="GridDocUpd" title="UPLOAD" attr-Upd="SALS_1UPLD'+rowno+'"  width="20" height="20"/>';
					}
					HTML = HTML + '<input style="display:none" id="SALS_1UPLD'+rowno+'" class="GridDocFil" onchange="GridDocFldUpldHndlr_FrDocChkLst(SALS_UPLD'+rowno+',id)" type="file" />';
					HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" style="display:none" width="35" height="25">';
					HTML = HTML + '<input type="text" value="'+data+'" id="SALS_UPLD'+rowno+'" hidden="hidden" name="SALS_UPLD'+rowno+'" class="form-control"/>';
				}
				else{
					if($("#SALE_TRANSFLG").val() == "Initiated")
					{
					HTML = HTML + '<input style="display:none" id="SALS_1UPLD'+rowno+'" class="GridDocFil" onchange="GridDocFldUpldHndlr_FrDocChkLst(SALS_UPLD'+rowno+',id)" type="file" />';
					}
					HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35"  height="25">';
					HTML = HTML + '<input type="text" value="'+data+'" id="SALS_UPLD'+rowno+'" hidden="hidden" name="SALS_UPLD'+rowno+'" class="form-control"/>';
				}
				
				
				return HTML;
			}
			},
			{ targets: 5, "render": function ( data, type, row, meta ) { 	
				var rowno = meta.row;
				var BTN = "";
				var txtFld = ""
				if(row[4] != "" && data == "")
				{
					BTN = '<span><button type="button" onclick="GridGSTValidate(this);" id="GridGST'+rowno+'" style="margin:1rem" class=" waves-effect BTNHIDE btn-yelInplain btn-sm">Click For Analysis</button></span>' 
				}
				else if(data != "")
				{
					BTN = '<span><button type="button" disabled="disabled" id="GridGST'+rowno+'" disabled style="margin:1rem" class=" waves-effect BTNHIDE btn-GrnInplain btn-sm">Sent For Analysis</button></span>' 
				}
				else
				{
					BTN = '<span><button type="button" onclick="GridGSTValidate(this);" style="display:none;" id="GridGST'+rowno+'" style="margin:1rem" class=" waves-effect BTNHIDE btn-yelInplain btn-sm">Add Uploaded Statement</button></span>' 
				}
				txtFld = '<input type="text" value="'+data+'" id="SALS_UPLDFLG'+rowno+'" hidden="hidden" name="SALS_UPLDFLG'+rowno+'" class="form-control"/>';
				var HTML =  '<div>'+txtFld + BTN + '</div>';

		var htmldata = $(HTML);
 			
 return htmldata[0].outerHTML;
			}
			}
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}




$(document).on("blur", ".SALES", function() {
	
	var AMOUNTLEN =$(this).closest('.tbody').find('tr').length;
	var Amount = 0;
	var val="";
	var GetDataItem = $(this).attr("data-scr");
	for (i=0;i<AMOUNTLEN;i++)
		{
		val = $($(this).closest('.tbody').find('tr')[i]).find('[data-scr="'+GetDataItem+'"]').val().replace(/,/g,'');
		if (val == "")
		{
		val = 0;
		}
		Amount = parseFloat(Amount) + parseFloat(val);
		}
	
	var toval = $(this).attr('data-to');
	$('input[name="'+toval+'"]').val(CURINRCommaSep(Amount));
	$("#SALE_SALESAVG").val('');
	$('#SALE_SALESAVG').val(CURINRCommaSep(parseFloat(Amount/12).toFixed(2)));
	
});

    function CheckGstCus(){
	
	var chc=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETGSTNOCUSNME");

	
	var GSTno=$(chc).find ('GSTNUM').text();
	$("#SALE_GSTNO").val(GSTno);
	$("#SALE_GSTNO").next().addClass('active');
	

	var CUSname=$(chc).find ('CUSNAME').text();
		$("#SALE_CUSNAME").val(CUSname);
	$("#SALE_CUSNAME").next().addClass('active');

 }
 
 function DateValidate(XID,YID)
{
if(YID.value!='')	
{
if(XID.value!='')	
{	
	var STDATE=$("#"+XID).val()
	var ENDDATE=$("#"+YID).val()

	      date = new Date();
	    var y = date.getFullYear();
	    var STDATE1 = STDATE.split("/");
	    var dd = STDATE1[0];
	    var mm = STDATE1[1];
	    var yy = STDATE1[2];

	var STDATE2=yy+mm+dd

	    var ENDDATE1 = ENDDATE.split("/");
	     var dd1 = ENDDATE1[0];
	     var mm1 = ENDDATE1[1];
	     var yy1 = ENDDATE1[2];
     var ENDDATE2=yy1+mm1+dd1
     
	    if(STDATE2>ENDDATE2)
	    	{
	    	 window.alert('To Date should not be less than From Date');
	    	 $("#"+YID).val('')
	    	}
}
}
}

function decideinterface()
{
	if($("#SALE_MODE").val() == "Manual")
	{
		$("#gstbtn").text("Through Portal");
		$("#gstbtn").show();
	}
	else if($("#SALE_MODE").val() == "Upload" && $("#SALE_TRANSFLG").val() != "Initiated")
	{
		$("#gstbtn").text("Through Upload");
		$("#gstbtn").show();
	}
	else if($("#SALE_MODE").val() == "Upload" && $("#SALE_TRANSFLG").val() == "Initiated")
	{
		$("#gstbtn").text("Through Upload");
		$("#gstbtn").hide();
		if($("#SALE_COMPTRANSFLG").val() != "Completed")
		{
			$("#Complete").show();
		}
	}
	else
	{
		$("#gstbtn").hide();
	}
}


function GridDocFldUpldHndlr_FrDocChkLst(id,docu)
 {

 var Val=$(id).val()


 if($(id).closest('td').find('input[type="file"]').val()!="")
 {
     var domain= LoadFrmXML("RS001");
     var usrpwd= LoadFrmXML("RS002");
     var PrcsID=getUrlParam("PrcsID");
     var FormName= 'Verification_Upload';
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
	  
	  
			
		
		
		
		
			
	/*	if($("#HIDDENCUSTYP").val()=='Non-Individual')
	   {
		 Proof="Others"	
	   }*/
		
      /*  var xml=UI_getdata(FileType,FileSize,Filename,Proof,$("#HIDDENCUSTYP").val()+'|'+$("#PrcsID").val(),"LSW_SGETKYCDOCUMNTTYPE")
		var FileAccept=$(xml).find('RESULT').text()
		
		
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$(id).closest('td').find('input[type="file"]').val('')
		return
    }	 */


 var y=  names;

 	 
  ajaxindicatorstart("Uploading.. Please wait");
 	    $.ajax({
 	        url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain="+domain+"&usrpwd="+usrpwd+"&Prvnt="+$("#Prvnt").val(),
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
 	        		$("#HIDDENIPLDST").val('Fail');
 					return
 	        		}
 			else{
 				$(id).val(data.split('~')[2])
 				
 			$("#"+docu).next().show();
			$("#"+docu).prev().hide();
			
 					ajaxindicatorstop();
 					alert(LoadFrmXML("V0118"));
					$("#"+docu).closest(".tbodytrtd").next().find("button").show()
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






 