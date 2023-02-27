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


function CheckDate(){
	var chck=UI_getdata($("#PrcsID").val(),$("#AGEA_LOANID").val(),"","","","LSW_SGETSECURITYDETAILS");
	$("#AGEA_MAFCMONTH").val($(chck).find ('MANFDATE').text());
	$("#AGEA_CURNTDATE").val($(chck).find ('ADDDATE').text());
	$("#AGEA_PROPOSETENU").val($(chck).find ('TENTURE').text());
	$("#AGEA_DAYS").val($(chck).find ('Days1').text());

}
function CheckTenure(){
	var chkTen=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETLOANASSET");
	$("#AGEA_PROPOSETENU").val($(chkTen).find ('TENTURE').text());
	var finl=$("#AGEA_PROPOSETENU").val();
	$("#AGEA_PROPOSETENU").val(finl);
	
}
function checkDays(){

	
	//EOT DATE

	//var date= new Date($("#AGEA_CURNTDATE").val());
	var res1=0;
	var date1=$("#AGEA_DAYS").val().replace(',','');
	//var next_date = new Date(date.setDate(date.getDate() + $("#AGEA_DAYS").val().replace(',','')));
	$("#AGEA_CURNTDATE").val().split('/')
	var date=new Date($("#AGEA_CURNTDATE").val().split('/')[2]+'/'+$("#AGEA_CURNTDATE").val().split('/')[1]+'/'+$("#AGEA_CURNTDATE").val().split('/')[0]);
	//var date = new Date($("#AGEA_CURNTDATE").val()); 
	
	date. setDate(date. getDate() + parseInt(date1)); 

	//next_date=CURINRCommaSep(parseFloat(next_date).toFixed(0));
	$("#AGEA_EOTDATE").val(date);
	var result=new Date($("#AGEA_EOTDATE").val());
	var date2 = new Date(result),
    mnth = ("0" + (date2.getMonth() + 1)).slice(-2),
    day = ("0" + date2.getDate()).slice(-2);
	
	var res1= [day, mnth, date2.getFullYear() ].join("/");
	/* if(isNaN(res1))
	{
		res1=0;
	} */
	$("#AGEA_EOTDATE").val(res1);
	$("#AGEA_EOTDATE").next().addClass('active');
	
	
	var  CRDATE=$("#AGEA_CURNTDATE").val().split('/')[0]
	var  CRMONTH=$("#AGEA_CURNTDATE").val().split('/')[1]
	var  CRYEAR=$("#AGEA_CURNTDATE").val().split('/')[2]
    var CURDATE=CRYEAR+'-'+CRMONTH+'-'+CRDATE
	
	var MACDATE=$("#AGEA_MAFCMONTH").val().split('/')[0]
	var MACMONTH=$("#AGEA_MAFCMONTH").val().split('/')[1]
	var MACYEAR=$("#AGEA_MAFCMONTH").val().split('/')[2]
    var MACTDATE=MACYEAR+'-'+MACMONTH+'-'+MACDATE
	
	var EOTDATE=$("#AGEA_EOTDATE").val().split('/')[0]
	var EOTMONTH=$("#AGEA_EOTDATE").val().split('/')[1]
	var EOTYEAR=$("#AGEA_EOTDATE").val().split('/')[2]
    var EOTTDATE=EOTYEAR+'-'+EOTMONTH+'-'+EOTDATE
	
    today = new Date(CURDATE);
	past = new Date(MACTDATE); 
	var diff = Math.abs(today.getTime() - past.getTime());
    var day = 1000 * 60 * 60 * 24;
    var days = Math.ceil(diff/day);
	
	
	/* 
	 var start = new Date("2021-10-10"),
    end   = new Date("2021-10-10"),
    diff  = new Date(end - start),
    days  = diff/1000/60/60/24; */
	
    var years = Math.floor(days/365);
	var yearsRem = Math.floor(days%365);
	
	var month = Math.floor(yearsRem/31);
	var monthRem = Math.floor(yearsRem%31);
	

     var message = years + " years, " + month +" months, "+ monthRem +" days ";
	$("#AGEA_AGEOFASSET").val(message); 
	
	
	 EOTtoday = new Date(MACTDATE);
	 EOTpast = new Date(EOTTDATE); 
	var diff = Math.abs(EOTtoday.getTime() - EOTpast.getTime());
    var day = 1000 * 60 * 60 * 24;
    var days = Math.ceil(diff/day);
	
	
	/* 
	 var start = new Date("2021-10-10"),
    end   = new Date("2021-10-10"),
    diff  = new Date(end - start),
    days  = diff/1000/60/60/24; */
	
    var years = Math.floor(days/365);
	var yearsRem = Math.floor(days%365);
	
	var month = Math.floor(yearsRem/31);
	var monthRem = Math.floor(yearsRem%31);
	

     var message = years + " years, " + month +" months, "+ monthRem +" days ";
	
	
   $("#AGEA_AGEOFASSTEOT").val(message);
   

	

}

/* function addMonths() {
    	 //var Date1=$("#DMY7").val().split('|')[1]
		 var Date1=$("#AGEA_CURNTDATE").val();
         //var Date2=Date1.replaceAll('/','-')
         var Date2=Date1.replace(/[/]/g,'-')

		 var date3 = new Date(Date2.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
var newDate = new Date(date3.setMonth(date3.getMonth()+$("#DMY3").val().split('|')[4]*12));
var year = newDate.getFullYear();
  var month = (1 + newDate.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = newDate.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  $("#AGEA_EOTDATE").val(day + '/' + month + '/' + year)
} */
/* function checkDate(){
//EOT DATE
	var eot=$("#AGEA_CURNTDATE").val(); 	
	var days=$("#AGEA_DAYS").val().replace(/,/g,''); 	
	 if(eot=='')
	{
		eot=0;
	}
	if(isNaN(eot))
	{
		eot=0;
	}
	if(days=='')
	{
		days=0;
	}
	if(isNaN(days))
	{
		days=0;
	} 
	var reseot=eot+days;
	reseot=CURINRCommaSep(parseFloat(reseot).toFixed(0));
	$("#AGEA_EOTDATE").val(reseot);
	$("#AGEA_EOTDATE").next().addClass('active');
}
 */
/* $(document).on("blur",".ADDDAYS",function(){
	var add=$("#AGEA_PROPOSETENU").val().replace(/,/g,''); 	
	if(add=='')
	{
		add=0;
	}
	if(isNaN(add))
	{
		add=0;
	}
	var res=parseFloat(add)/12*365;
	res=CURINRCommaSep(parseFloat(res).toFixed(0));
	$("#AGEA_DAYS").val(res);
	$("#AGEA_DAYS").next().addClass('active');
	
}) */

/* $(document).on("blur",".EOTDATE",function(){
	var eot=$("#AGEA_CURNTDATE").val(); 	
	var days=$("#AGEA_DAYS").val().replace(/,/g,''); 	
	
	/* if(eot=='')
	{
		eot=0;
	}
	if(isNaN(eot))
	{
		eot=0;
	}
	if(days=='')
	{
		days=0;
	}
	if(isNaN(days))
	{
		days=0;
	} 
	//var reseot=eot.setDate(getDate()+days);
	reseot=CURINRCommaSep(parseFloat(reseot).toFixed(0));
	$("#AGEA_EOTDATE").val(reseot);
	$("#AGEA_EOTDATE").next().addClass('active');
	//currentDate.setDate(currentDate.getDate() + numberOfDayToAdd );
	
	
	
}) */


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