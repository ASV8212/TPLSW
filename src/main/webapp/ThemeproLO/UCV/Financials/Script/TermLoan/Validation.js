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
var xml=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_SGETSECDETL")
	
	var GridVal= $(xml).find("ASSETVALUE").text()

	$("#CTLN_GRIDVAL").val(CURINRCommaSep(parseFloat(GridVal).toFixed(0)));
	$("#CTLN_GRIDVAL").next().addClass('active');
	
	var ValuAmt=CURINRCommaSep(parseFloat($(xml).find("VALAMOUNT").text()).toFixed(0));

	$("#CTLN_VALUTNAMT").val(ValuAmt);
	$("#CTLN_VALUTNAMT").next().addClass('active');
	
	var LonAmt=CURINRCommaSep(parseFloat($(xml).find("LONAMT").text()).toFixed(0));

	$("#CTLN_LNAMTREQ").val(LonAmt);
	$("#CTLN_LNAMTREQ").next().addClass('active');
	
	var Ffr=CURINRCommaSep(parseFloat($(xml).find("FFR").text()).toFixed(0));
    if(Ffr=='')
	{
		Ffr=0;
	}
	if(isNaN(Ffr))
	{
		Ffr=0;
	}
	$("#CTLN_PREFUNDFFR").val(Ffr);
	$("#CTLN_PREFUNDFFR").next().addClass('active');
	
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

/* $(document).on("blur",".PropAmt",function(){
	
	var xml=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_SGETSECDETL")
	
	var Assetval= $(xml).find("ASSETVALUE").text()
	var chkins=$(xml).find("INS").text()
	
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
	
	if(chkins=='Y')
	{
	
	if(Assetval=='')
	{
		Assetval=0;
	}
	if(isNaN(Assetval))
	{
		Assetval=0;
	}
	
		Assetval=Assetval.replace(/,/g,'');
	var MINOFVAL=Math.min(parseFloat(ValAmt),parseFloat(Assetval));
	
	var NetLTV= parseFloat(PropAmt)/parseFloat(MINOFVAL)
	}
	else
	{
	
	var NetLTV= parseFloat(PropAmt)/parseFloat(Assetval)
	
	}
	
	if(NetLTV=='')
	{
		NetLTV=0;
	}
	if(isNaN(NetLTV))
	{
		NetLTV=0;
	}
	
	if(NetLTV==Infinity)
	{
	  NetLTV=0;
	}
	NetLTV=NetLTV*100
	$("#CTLN_GROSSLTV").val(parseFloat(NetLTV).toFixed(2));
	$("#CTLN_GROSSLTV").next().addClass('active');
}) */


function Getpropsdamt()

{

/* 	var RloanAmt = $("#CTLN_LNAMTREQ").val();
	var GridAmt= $("#CTLN_GRIDVAL").val();
	var ValAmt = $("#CTLN_VALUTNAMT").val();
	var PreAmt=Math.min(RloanAmt,GridAmt,ValAmt);
	
	if(PreAmt=='')
	{
		PreAmt=0;
	}
	if(isNaN(PreAmt))
	{
		PreAmt=0;
	}
	
	PreAmt=CURINRCommaSep(parseFloat(PreAmt).toFixed(0));
	
	$("#CTLN_MAXPERAMT").val(PreAmt);
	$("#CTLN_MAXPERAMT").next().addClass('active'); */


	var PreAmt = $("#CTLN_MAXPERAMT").val().replace(/,/g,'');
	
    var HosiAmt = $("#CTLN_HOSICASH").val().replace(/,/g,'');
	var KliAmt = $("#CTLN_KLIAMT").val().replace(/,/g,'');
	

		
		if(HosiAmt=='')
	{
		HosiAmt=0;
	}
	if(isNaN(HosiAmt))
	{
		HosiAmt=0;
	}
		
		if(KliAmt=='')
	{
		KliAmt=0;
	}
	if(isNaN(KliAmt))
	{
		KliAmt=0;
	}
	
	
	var PropAmt= parseFloat(PreAmt)+parseFloat(HosiAmt)+parseFloat(KliAmt)
	
	if(PropAmt=='')
	{
		PropAmt=0;
	}
	if(isNaN(PropAmt))
	{
		PropAmt=0;
	}
	$("#CTLN_PROPOSEAMT").val(CURINRCommaSep(parseFloat(PropAmt).toFixed(2)));
	$("#CTLN_PROPOSEAMT").next().addClass('active');
	PropAmnt()
	
	
}





function PropAmnt(){
//$(document).on("blur",".PropAmt",function(){
	
	var xml=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_SGETSECDETL")
	
	var Assetval= $(xml).find("ASSETVALUE").text()
	var chkins=$(xml).find("INS").text()


    
	var PropAmt = $("#CTLN_PROPOSEAMT").val().replace(/,/g,'');

	var LoanAmt= $("#CTLN_LNAMTREQ").val().replace(/,/g,'');
	
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
	
	if(chkins=='Y')
	{
	
	if(Assetval=='')
	{
		Assetval=0;
	}
	if(isNaN(Assetval))
	{
		Assetval=0;
	}
	
		Assetval=Assetval.replace(/,/g,'');
	var MINOFVAL=Math.min(parseFloat(ValAmt),parseFloat(Assetval));
	
	var GressLTV= parseFloat(PropAmt)/parseFloat(MINOFVAL)
	}
	else
	{
	
	var GressLTV= parseFloat(PropAmt)/parseFloat(Assetval)
	
	}
	
	if(GressLTV=='')
	{
		GressLTV=0;
	}
	if(isNaN(GressLTV))
	{
		GressLTV=0;
	}
	
	if(GressLTV==Infinity)
	{
	  GressLTV=0;
	}
	GressLTV=GressLTV*100
	

	$("#CTLN_GROSSLTV").val(parseFloat(GressLTV).toFixed(2));
	$("#CTLN_GROSSLTV").next().addClass('active');

	
if(LoanAmt=='')
	{
		LoanAmt=0;
	}
	if(isNaN(LoanAmt))
	{
		LoanAmt=0;
	}
	
	if(ValAmt=='')
	{
		ValAmt=0;
	}
	if(isNaN(ValAmt))
	{
		ValAmt=0;
	}
	
	if(chkins=='Y')
	{
	
	if(Assetval=='')
	{
		Assetval=0;
	}
	if(isNaN(Assetval))
	{
		Assetval=0;
	}
	
		Assetval=Assetval.replace(/,/g,'');
	var MINOFVAL=Math.min(parseFloat(ValAmt),parseFloat(Assetval));
	
	var NetLTV= parseFloat(LoanAmt)/parseFloat(MINOFVAL)
	}
	else
	{
	
	var NetLTV= parseFloat(LoanAmt)/parseFloat(Assetval)
	
	}
	
	if(NetLTV=='')
	{
		NetLTV=0;
	}
	if(isNaN(NetLTV))
	{
		NetLTV=0;
	}
	
	if(NetLTV==Infinity)
	{
	  NetLTV=0;
	}
	NetLTV=NetLTV*100
	$("#CTLN_NETLTV").val(parseFloat(NetLTV).toFixed(2));
	$("#CTLN_NETLTV").next().addClass('active');

}

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
