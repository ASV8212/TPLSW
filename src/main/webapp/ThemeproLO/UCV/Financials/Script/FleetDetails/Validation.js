function  GridEnableControl(popTableModPageGrid1)
{
	popTableModPageGrid1.MakeCellsEditable({
           // "onUpdate": myCallbackFunction,
            "inputCss":'my-input-class',
            "columns": [2],
            /*"allowNulls": {
                "columns": [1],
                "errorClass": 'error'
            },*/
            "confirmationButton": { 
                "confirmCss": 'my-confirm-class',
                "cancelCss": 'my-cancel-class'
            },
    		"inputTypes": [
                {
                    /*"column":1, 
                    "type": "list",
                    "options":[
                        { "value": "PAN", "display": "PAN" },
                        { "value": "Voter ID", "display": "Voter ID" },
                        { "value": "Driving License", "display": "Driving License" },
                        { "value": "Aadhar", "display": "Aadhar" },
                        { "value": "Passport", "display": "Passport" },
                        { "value": "Electricity Bill", "display": "Electricity Bill" },
                        { "value": "Utility Bill", "display": "Utility Bill" }
                    ]*/
                	 "column":2, 
                     "type": "radio",
                     "options":[
                         { "value": "Yes", "display": "ACTIONYES","name":"ACTION" },
                         { "value": "No", "display": "ACTIONNO","name":"ACTION" },
                    
                     ]
                }
                /*{
                    "column": 6,
                    "type": "datepicker", // requires jQuery UI: http://http://jqueryui.com/download/
                    "options": {
                        "icon": "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" // Optional
                    }
                }*/
    			
            ]
        });
	
}


function getRadioVal()
{
	
	var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETPROPRADIOVAL")
	
	
	var html=$(".PROPEAPPRI").find(".DYNROW")
	
	$(html).find('[name=PAPD_PRFITECHI][value="'+$(xml).find('PAPD_PRFITECHI').text()+'"]').prop('checked', true);
	$(html).find('[name=PAPD_PRFITECHII][value="'+$(xml).find('PAPD_PRFITECHII').text()+'"]').prop('checked', true);
	
	$(html).find('[name=PAPD_PROGEOTECHI][value="'+$(xml).find('PAPD_PROGEOTECHI').text()+'"]').prop('checked', true);
	
	$(html).find('[name=PAPD_PROGEOTECHII][value="'+$(xml).find('PAPD_PROGEOTECHII').text()+'"]').prop('checked', true);
	
	$(html).find('[name=PAPD_PRONEGATIVTECHI][value="'+$(xml).find('PAPD_PRONEGATIVTECHI').text()+'"]').prop('checked', true);
	
	$(html).find('[name=PAPD_PRONEGATIVTECHII][value="'+$(xml).find('PAPD_PRONEGATIVTECHII').text()+'"]').prop('checked', true);
	
	/*var n = document.getElementsByClassName('RADIOVAL');
	for (i = 0; i < n.length; i++) 
	{
	 var name = document.getElementsByClassName('RADIOVAL').item(i).name
	 
	  var val = $(xml).find(name).text();
	  
	 fieldid = $($(html).find(".RADIOVAL")[i]).attr("id");
	   //  value = document.getElementsByClassName(FieldsClassName).item(i).value;
	   
	     if($(html).find('#' + fieldid).attr('type')=="radio")
	     {
	    	 
	    	 $(html).find('#' + fieldid).prop('checked', true);
	    	 //$('[name='+name+'][value="'+val+'"]').prop('checked', true);
	     // value=$(html).find('input[id='+fieldid+']:checked').val();
	    //  if(value==undefined)
	     // {
	     //  value = "";
	      //}
	     } 	
   }*/
}






function GridControlDetailPROVALU(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
		 		var HTML =	'<span><input type="radio" class="custom-control-input PVCSDBfields" value="Yes" id="STATUSY'+rowno+'" name="PVCS_CIBILSTATUS'+rowno+'"><label class="custom-control-label" for="STATUSY'+rowno+'">Yes</label>';			 
		 		HTML = HTML + '<input type="radio" class="custom-control-input PVCSDBfields" value="No" id="STATUSN'+rowno+'" name="PVCS_CIBILSTATUS'+rowno+'"><label class="custom-control-label" for="STATUSN'+rowno+'">No</label></span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=PVCS_CIBILSTATUS'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
	        	return htmldata[0].outerHTML;      		
			
        } 
		 },
		 { targets: 2, "render": function ( data, type, row, meta ) {                            
				
			 var rowno = meta.row;		 
		 		var HTML =	'<span><input type="radio" class="custom-control-input PVCSDBfields" value="Yes" id="DESTATUSY'+rowno+'" name="PVCS_DEDUBESTAUS'+rowno+'"><label class="custom-control-label" for="DESTATUSY'+rowno+'">Yes</label>';			 
		 		HTML = HTML + '<input type="radio" class="custom-control-input PVCSDBfields" value="No" id="DESTATUSN'+rowno+'" name="PVCS_DEDUBESTAUS'+rowno+'"><label class="custom-control-label" for="DESTATUSN'+rowno+'">No</label></span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=PVCS_DEDUBESTAUS'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
	        	return htmldata[0].outerHTML;      		
			
        } 
		 },
		 { targets: 3, "render": function ( data, type, row, meta ) {                            
				
			 var rowno = meta.row;		 
		 		var HTML =	'<span><input type="radio" class="custom-control-input PVCSDBfields" value="Yes" id="PROSTATUSY'+rowno+'" name="PVCS_PROFCHECK'+rowno+'"><label class="custom-control-label" for="PROSTATUSY'+rowno+'">Yes</label>';			 
		 		HTML = HTML + '<input type="radio" class="custom-control-input PVCSDBfields" value="No" id="PROSTATUSN'+rowno+'" name="PVCS_PROFCHECK'+rowno+'"><label class="custom-control-label" for="PROSTATUSN'+rowno+'">No</label></span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=PVCS_PROFCHECK'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

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


function CheckLoan(){
	var check=UI_getdata($("#PrcsID").val(),$("#CRTR_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	$("#CRTR_LOANAMT").val($(check).find ('LOANAMOUNT').text());
	$("#CRTR_ROI").val($(check).find ('INTERESTRATE').text());
	$("#CRTR_TENOR").val($(check).find ('TENTURE').text());
}


$(document).on("blur",".SUB",function(){
	var sub=$("#CRTR_EXISTINGLNAMT").val().replace(/,/g,''); 
	var sub2=$("#CRTR_CURRENTOUTST").val().replace(/,/g,''); 
	if(sub=='')
	{
		sub=0;
	}
	if(isNaN(sub))
	{
		sub=0;
	}
	if(sub2=='')
	{
		sub2=0;
	}
	if(isNaN(sub2))
	{
		sub2=0;
	}
	var calc=parseFloat(sub)-parseFloat(sub2);
	calc=CURINRCommaSep(parseFloat(calc).toFixed(0));
	$("#CRTR_COMPLETELNAMT").val(calc);
	$("#CRTR_COMPLETELNAMT").next().addClass('active');
})
 
 
$(document).on("blur",".INMUL",function(){
	var mul=$("#CRTR_COMPLETELNAMT").val().replace(/,/g,''); 
	var mul1=$("#CRTR_MULTIPLIERLNAMT").val().replace(/,/g,'');  
	if(mul=='')
	{
		mul=0;
	}
	if(isNaN(mul))
	{
		mul=0;
	}
	if(mul1=='')
	{
		mul1=0;
	}
	if(isNaN(mul1))
	{
		mul1=0;
	}
	var mul2=parseFloat(mul)*parseFloat(mul1);
	mul2=CURINRCommaSep(parseFloat(mul2).toFixed(0));
	$("#CRTR_ELIGIBLELNAMT").val(mul2);
	$("#CRTR_ELIGIBLELNAMT").next().addClass('active');
})


$(document).on("blur",".INMUL",function(){
	
	var com=Math.min($("#CRTR_LOANAMT").val().replace(/,/g,''),$("#CRTR_ELIGIBLELNAMT").val().replace(/,/g,''));
	com=CURINRCommaSep(parseFloat(com).toFixed(0));
	$("#CRTR_PROPOSEDLNAMT").val(com);
	$("#CRTR_PROPOSEDLNAMT").next().addClass('active');
	//$("#CRTR_PROPOSEDLNAMT").val(Math.min($("#CRTR_LOANAMT").val(),$("#CRTR_ELIGIBLELNAMT").val()));
})

function GetDetails()
{
var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSECDETL")
	
	var GridVal= $(xml).find("ASSETVALUE").text()
	$("#CTLN_GRIDVAL").val(CURINRCommaSep(parseFloat(GridVal).toFixed(0)));
	$("#CTLN_GRIDVAL").next().addClass('active');
	
	var ValuAmt=CURINRCommaSep(parseFloat($(xml).find("VALAMOUNT").text()).toFixed(0));
	
	$("#CTLN_VALUTNAMT").val(ValuAmt);
	$("#CTLN_VALUTNAMT").next().addClass('active');
	
	var LonAmt=CURINRCommaSep(parseFloat($(xml).find("LONAMT").text()).toFixed(0));
	
	$("#CTLN_LNAMTREQ").val(LonAmt);
	$("#CTLN_LNAMTREQ").next().addClass('active');
	
	GridVal=GridVal.replace(/,/g,'');
	ValuAmt=ValuAmt.replace(/,/g,'');
	LonAmt=LonAmt.replace(/,/g,'');
	
	var PermAmt=Math.min(GridVal, ValuAmt, LonAmt)
	
	if(PermAmt=='')
	{
		PermAmt=0;
	}
	if(isNaN(PermAmt))
	{
		PermAmt=0;
	}
	
	PermAmt=CURINRCommaSep(parseFloat(PermAmt).toFixed(0));
	
	$("#CTLN_MAXPERAMT").val(PermAmt);
	$("#CTLN_MAXPERAMT").next().addClass('active');
}

$(document).on("blur",".PropAmt",function(){
	
	var PropAmt = $("#CTLN_PROPOSEAMT").val().replace(/,/g,'');
	
	var ValAmt = $("#CTLN_VALUTNAMT").val().replace(/,/g,'');
	
	if(PropAmt=='')
	{
		PropAmt=0;
	}
	if(isNaN(PropAmt))
	{
		PropAmt=0;
	}
	
	if(ValAmt=='')
	{
		ValAmt=0;
	}
	if(isNaN(ValAmt))
	{
		ValAmt=0;
	}
	
	var NetLTV= parseFloat(PropAmt)/parseFloat(ValAmt)
	
	if(NetLTV=='')
	{
		NetLTV=0;
	}
	if(isNaN(NetLTV))
	{
		NetLTV=0;
	}
	
	$("#CTLN_NETLTV").val(parseFloat(NetLTV).toFixed(0));
	$("#CTLN_NETLTV").next().addClass('active');
})

function CheckDCIIBSts(Type)
{
	if(Type=="DC")
	{
		if($("#CTLN_DECODESTUS").val()=="Negative")
		{
		  $(".DCRMK").show();
		  $(".DC").show();	
		}
		else
		{
		  $("#CTLN_DCREMARK").val('')
		  $(".DCRMK").hide();
		  $(".DC").hide();
		}
	}
	else if(Type=="IIB")
	{
		if($("#CTLN_IIBSTUS").val()=="Negative")
		{
		  $(".IIBRMK").show();
		  $(".IIB").show();
		}
		else
		{
		  $("#CTLN_IIBREMARK").val('')
		  $(".IIBRMK").hide();
		  $(".IIB").hide();
		}
	}
}


function DocFldUpldHndlr(id,docu,KYCName,UploadView)
{
	
var Val=$(id).val()


if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain= LoadFrmXML("RS001");
    var usrpwd= LoadFrmXML("RS002");
    var PrcsID=getUrlParam("PrcsID");
    var FormName= 'TermLoan';
    var CusID=""
    var DocName=KYCName
    var names="";
    var descrptns="";
	//var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
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
  //   var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
  //   var Filename  = names.replace(',','')
          var Filename = $(id).closest('td').find('input[type="file"]')[0].files[0].name
	      var FileType = Filename.substring(Filename.lastIndexOf('.')+1);
          var Filename = Filename.substring(0, Filename.lastIndexOf('.'));
          var names = Filename
  
		/*var xml=UI_getdata(FileType,FileSize,Filename,"",'|'+$("#PrcsID").val(),"LSW_SGETKYCDOCUMNTTYPE")
		var FileAccept=$(xml).find('RESULT').text()

	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$(id).closest('td').find('input[type="file"]').val('')
		return
    }*/
	
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
				$('.'+UploadView).show();
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

function FormatEXCELDocDwnld(id)
{

var IOP=LoadFrmXML("RS006");
var RedirectURL="";
var url= $("#DMY1").val()
var Name='Fleet'
var param2="FLEET";

RedirectURL=window.location.origin+"/TPLSW/MultiShtExcelDwnld?param1=FLEETDETAILS&param2="+param2+"&param3=&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SGETEXCELDATA";
$("#DocView").attr("src", RedirectURL);
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
 	file_data = $('input[type="file"]')[0].files;
 	  fd.append("file_"+"1", file_data[0]);
 	  
 	  var name=file_data[0].name.split('.')[0];
 	  var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	  $("#PrcsID").attr('value',$(op).find("VR").text())
 	var   param1=$(op).find("VR").text();
 	var   param2="LSW_SEXCELMULTIUPLOADDATA";
 	var   param3="LSW_TFLEETDETLEX";
 	
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
			   FncallDocChkLst(this,'Table4',{spname:'LSW_SGETFLEET',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:param1,MnuId:'Upload'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4','FLEETSHEET');  
			  // ChkFree();
			}
			else
 		   {
 			alert("Upload Failed");
 			$(id).closest('div').find('input[type="file"]').val('');
            return;	
 		   }
		   }
 		   
 	    });
 }

function GridControlDetailFLEETSHEET (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
	   
	               { targets: 0, "render": function ( data, type, row, meta ) {                            	
                      var rowno = TableID+meta.row;	
                      var HTML =	'<span id=""> <img src="ThemeproLO/Common/Images/Delete_Img.png"  data-tableid="Table3"" class="Deleterow"  title="Delete" attr-Upd="APAG_ACTION'+rowno+'"  width="20" height="20"/>';
                         '</span>';		 
                         return HTML;
                         } 
                		 },
 
				 { targets: 1, "render": function ( data, type, row, meta ) {                            
			 			
			 				var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="FLGR_SRNO'+rowno+'" style="width:140px"  name="FLGR_SRNO'+rowno+'" maxlength="40" class="form-control IsNumberFieldsSpl  GridMndtry  form-control">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=FLGR_SRNO'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=FLGR_SRNO'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   	
			 			
							
				         } 
						 },
						 { targets: 2, "render": function ( data, type, row, meta ) {                            
							 
								 var rowno = meta.row;	 
									var HTML =	'<span><input type="text" id="FLGR_REGOWNAME'+rowno+'" style="width:140px" name="FLGR_REGOWNAME'+rowno+'" maxlength="40" class="form-control  GridMndtry   form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=FLGR_REGOWNAME'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=FLGR_REGOWNAME'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;  		
						  } 
					 },
					 { targets: 3, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_RELATION'+rowno+'" style="width:140px" name="FLGR_RELATION'+rowno+'" maxlength="40" class="form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_RELATION'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_RELATION'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 { targets: 4, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_MFG'+rowno+'" style="width:140px" name="FLGR_MFG'+rowno+'" maxlength="40" class=" form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_MFG'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_MFG'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 { targets: 5, "render": function ( data, type, row, meta ) {                            
					
					var rowno = meta.row;	 
					var HTML =	'<span><input type="text" id="FLGR_ASSET'+rowno+'" style="width:140px" name="FLGR_ASSET'+rowno+'" maxlength="40" class="NoSpecialChar form-control">';			 
						HTML = HTML + '</span>'; 
									 
					var htmldata = $(HTML);
						
					if ($(htmldata).find('[name=FLGR_ASSET'+rowno+']').hasClass("IsCURCommaFields"))
				    {
				     data = CURCommaSep(data);
				    }

						$(htmldata).find('[name=FLGR_ASSET'+rowno+']').attr("value",data);
						return htmldata[0].outerHTML;   				
					  } 
				 },
				 { targets: 6, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_BODY'+rowno+'" style="width:140px" name="FLGR_BODY'+rowno+'" maxlength="40" class="form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_BODY'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_BODY'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 { targets: 7, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_RCNO'+rowno+'" style="width:140px" name="FLGR_RCNO'+rowno+'" maxlength="40" class="GridMndtry NoSpecialChar  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_RCNO'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_RCNO'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 { targets: 8, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_YOM'+rowno+'" style="width:140px" name="FLGR_YOM'+rowno+'" maxlength="40" class="GridMndtry  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_YOM'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_YOM'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 { targets: 9, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_TAKEN'+rowno+'" style="width:140px" name="FLGR_TAKEN'+rowno+'" maxlength="40" class="form-control GridMndtry">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_TAKEN'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_TAKEN'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
			 		
							
				 { targets: 10, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
						/* 		var HTML =	'<span><input type="text" id="FLGR_FREEFINAN'+rowno+'" style="width:140px" name="FLGR_FREEFINAN'+rowno+'" maxlength="40" class="form-control" CHKFREEFIN>';			 
								HTML = HTML + '</span>';  */
								
								var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary  " onchange="CotFF();" data-total="FLET_FREE|FLET_FINANCE" data-item="FRE" id="FLGR_FREEFINAN'+rowno+'"  name="FLGR_FREEFINAN'+rowno+'">';
								HTML = HTML + '<option value="">Select</option>';
						
								HTML = HTML + '<option value="Free">Free</option><option value="Finance">Finance</option>';
									

								var htmldata = $(HTML);
       	       			
								$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
								return htmldata[0].outerHTML;
								
								
							/* 	var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_FREEFINAN'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_FREEFINAN'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   */ 				
					  } 
				 },
				 { targets: 11, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_FINANAME'+rowno+'" style="width:140px" name="FLGR_FINANAME'+rowno+'" maxlength="40" class="form-control ">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_FINANAME'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_FINANAME'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 { targets: 12, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_LOANAMT'+rowno+'" style="width:140px" name="FLGR_LOANAMT'+rowno+'" maxlength="40" class="form-control IsCURCommaFields">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_LOANAMT'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_LOANAMT'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 { targets: 13, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_TENOR'+rowno+'" style="width:140px" name="FLGR_TENOR'+rowno+'" maxlength="40" class="form-control IsNumberFieldsSpl">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_TENOR'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_TENOR'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 				 { targets: 14, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_EMIPAID'+rowno+'" style="width:140px" name="FLGR_EMIPAID'+rowno+'" maxlength="40" class="IsNumberFieldsSpl  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_EMIPAID'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_EMIPAID'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 				 { targets: 15, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_AD'+rowno+'" style="width:140px" name="FLGR_AD'+rowno+'" maxlength="40" class="IsNumberFieldsSpl  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_AD'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_AD'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 				 { targets: 16, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_PD'+rowno+'" style="width:140px" name="FLGR_PD'+rowno+'" maxlength="40" class="IsNumberFieldsSpl  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_PD'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_PD'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 				 { targets: 17, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_TRSTATUS'+rowno+'" style="width:140px" name="FLGR_TRSTATUS'+rowno+'" maxlength="40" class=" form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_TRSTATUS'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_TRSTATUS'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 				 { targets: 18, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_EMIAMT'+rowno+'" style="width:140px" name="FLGR_EMIAMT'+rowno+'" maxlength="40" class="form-control IsCURCommaFields GridMndtry IsNumberFieldsSpl">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FLGR_EMIAMT'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FLGR_EMIAMT'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 				 { targets: 19, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FLGR_REMARK'+rowno+'" style="width:140px" name="FLGR_REMARK'+rowno+'" maxlength="40" class="form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
							if($(htmldata).find('[name=FLGR_REMARK'+rowno+']').hasClass("IsCURCommaFields"))
								{
									  data = CURCommaSep(data);
								}
									$(htmldata).find('[name=FLGR_REMARK'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 }
				 
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}



function ChkFree(){
	var chck=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETFREEFINDTLS");
	$("#FLET_FREE").val($(chck).find ('FREECNT').text());
	$("#FLET_FINANCE").val($(chck).find ('FINANCECNT').text());
}
function Ffr()
{
	var F1 = $("#FLET_FREE").val().replace(/,/g,'');
	var F2 = $("#FLET_FINANCE").val().replace(/,/g,'');
	var F3 = $("#FLET_PROPOSEFIN").val().replace(/,/g,'');
	
	if(F1=='')
	{
		F1=0;
	}
	if(isNaN(F1))
	{
		F1=0;
	}
	
	if(F2=='')
	{
		F2=0;
	}
	if(isNaN(F2))
	{
		F2=0;
	}
	if(F3=='')
	{
		F3=0;
	}
	if(isNaN(F3))
	{
		F3=0;
	}
	
	var Finl=parseFloat(F1)+parseFloat(F2)+parseFloat(F3);

	
	if(Finl=='')
	{
		Finl=0;
	}
	if(isNaN(Finl))
	{
		Finl=0;
	}
	
	var resfinl=parseFloat(F1)/parseFloat(Finl);
	
	if(resfinl=='')
	{
		resfinl=0;
	}
	if(isNaN(resfinl))
	{
		resfinl=0;
	}
	$("#FLET_TOTAL").val(parseFloat(Finl).toFixed(0));
	$("#FLET_TOTAL").next().addClass('active');
	
	$("#FLET_FFR").val(parseFloat(resfinl).toFixed(2)*100);
	$("#FLET_FFR").next().addClass('active');
	
	

}
//$(document).on("blur", ".CotFF", 
function CotFF() {
	
	//var AmtLngth =$(Evnt).closest('.tbody').find('[data-item=FRE]').length;
	var AmtLngth=$("#Table4").find(".tbodytr").length
	var value=0;
	var value1=0;
	var valfree=''
	
	for (i=0;i<AmtLngth;i++)
	{
		//valfree = $($(Evnt).closest('.tbody').find('[data-item=FRE]')[i]).val().replace(/,/g,'');
		//valfree =$($("#Table4").closest(".tbodytr").find('[data-item=FRE]')[i]).val().replace(/,/g,'');
		valfree=$("#FLGR_FREEFINAN"+i).val()
			if (valfree == "Free")
			{
				value = parseInt(value)+1;
			}
			else if(valfree=="Finance")
			{
				value1=parseInt(value1)+1;
			}
	}

	//var TotalFree = $(this).attr("data-total").split('|')[0];
	//var TotalFinance =$(this).attr("data-total").split('|')[1];
	
	$("#FLET_FREE").val(value);
	$("#FLET_FREE").next().addClass('active');
	$("#FLET_FINANCE").val(value1);
	$("#FLET_FINANCE").next().addClass('active');
	
	/* var PEA=$("#EXPO_PROEXPAMT").val().replace(/,/g,'');
	var DGV=$("#EXPO_PROEXPDGV").val().replace(/,/g,'');
	
	if(PEA=="")
	{
		PEA=0;
	}
	
	if(DGV=="")
	{
		DGV=0;
	}
	
	var Tot=parseFloat(PEA)+parseFloat(DGV)

	var TotRatio=(parseFloat(PEA)/parseFloat(DGV))/100
	
	$("#EXPO_EXPRATIO").val(CURINRCommaSep(Tot.toFixed(0)));
	$("#EXPO_EXPRATIO").next().addClass('active'); */
	Ffr();
	return false;
} 

	$(document).on("click", ".Deleterow", function() {
		
var r = confirm("Are you sure!! to delete the record");
if (r == true) {
 oTable = $('#'+ $(this).closest("table").attr("id")).DataTable();
 oTable.row($(this).closest('.tbodytr').index()).remove().draw();
} 
CotFF();
return false;
	
		})
 


