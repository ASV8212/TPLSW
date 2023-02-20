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
	var check=UI_getdata($("#PrcsID").val(),$("#CGST_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	//$("#CGST_LOANAMT").val($(check).find ('LOANAMOUNT').text());
	$("#CGST_PRODUCTID").val($(check).find ('PRODUCT').text());
	$("#CGST_PRODUCTNAME").val($(check).find ('PRDNAME').text());
	$("#CGST_PROPOSEINR").val($(check).find ('INTERESTRATE').text());
	$("#CGST_PROTENOR").val($(check).find ('TENTURE').text());
}	

 
function GetBusinessVal()  
{	  
	var xml=UI_getdata("TYPEBUSINESS","","","","","LSW_SGETFINANCIALVAL");
	
    $("#CGST_TYOFBUSINESS").html("");
	$("#CGST_TYOFBUSINESS").append($(xml).find("RESULT").html());
	$("#CGST_TYOFBUSINESS").material_select(); 
}
function GetPropertyVal()  
{	  
	var xml=UI_getdata("PROPERTYTYPE","","","","","LSW_SGETFINANCIALVAL");
	
    $("#CGST_TYOFPROPERTY").html("");
	$("#CGST_TYOFPROPERTY").append($(xml).find("RESULT").html());
	$("#CGST_TYOFPROPERTY").material_select(); 
}
	function  GetDateOfIncor(){
	var check=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETCUSDETAILS");
 
	$("#CGST_MOYRINCORPOR").val($(check).find ('INCORDT').text());
	 $("#CGST_MOYRINCORPOR").attr('disabled',true); 
 
}	
function GetMarginVal()  
{
	var Tybus=$("#CGST_TYOFBUSINESS").val();
	var result=UI_getdata("TYBUSIN",Tybus,"","","","LSW_SGETFINANCIALVAL");
	
 
	$("#CGST_INDUSMARGIN").val($(result).find("RESULT").text());
	$("#CGST_INDUSMARGIN").next().addClass('active');	 	 
	GetNetProfit();
	
} 
 
 
	
	  
 
 

 function GetNetProfit(){
 var mul=$("#CGST_AVGOF12MONSAL").val().replace(/\,/g,'');
 var mul1=$("#CGST_INDUSMARGIN").val();
 
 var mul2=parseFloat(mul)*parseFloat(mul1/100);
 if(mul2=='')
	{
		mul2=0;
	}
	if(isNaN(mul2))
		{
			mul2=0;
		}
 $("#CGST_NETPROFIT").val(CURINRCommaSep(parseFloat(mul2).toFixed(2)));
$("#CGST_NETPROFIT").next().addClass('active');
 
} 

$(document).on("blur",".INCOM",function(){
	//Additional Income Considered
	var val1=0;
	var val2=0;
	val1=$("#CGST_NETPROFIT").val().replace(/\,/g,'');
	 val2=$("#CGST_ADDITIONINCM").val().replace(/\,/g,'');
	if(val1=='')
	{
		val1=0;
		
	}
	if(isNaN(val1))
		{
			val1=0;
		}
	if(val2=='')
	{
		val2=0;
	}
	if(isNaN(val2))
		{
			val2=0;
		}
		val1=parseFloat(val1)*25/100;
	 var amt=0;
	 amt=Math.min(val1,val2);
	 if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	$("#CGST_ADDINCMCONSIDER").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
	$("#CGST_ADDINCMCONSIDER").next().addClass('active');	 	 
	//$("#CRTR_COMPLETELNAMT").next().addClass('active');
 
	//Surplus Available for EMI Servicing
	var val1=0;
	var val2=0;
	val1=$("#CGST_NETPROFIT").val().replace(/\,/g,'');
	val2=$("#CGST_ADDINCMCONSIDER").val().replace(/\,/g,'');
	if(val1=='')
	{
		val1=0;
		
	}
	if(isNaN(val1))
		{
			val1=0;
		}
	if(val2=='')
	{
		val2=0;
	}
	if(isNaN(val2))
		{
			val2=0;
		}
		 var amt=0;
		amt=(parseFloat(val1)+parseFloat(val2))*60/100; 
		if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	$("#CGST_SURAVLFREMISER").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
	$("#CGST_SURAVLFREMISER").next().addClass('active');	 	 
	
	 
})

$(document).on("blur",".INCM",function()
{
	//proposed EMI
	  var val1=0,val2=0,val3=0,amt=0;
	 LnAmt=  $("#DMY3").val().split('|')[0];
	
	/* var check1=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETFINALDETAILS");
	  val1=($(check1).find ('FINALABB').text()); */
 	  val2=$("#CGST_SURAVLFREMISER").val().replace(/\,/g,'');
	  val3=$("#CGST_EXISTEMIOBLI").val().replace(/\,/g,'');
	 
	 if(val1=='')
	{
		val1=0;
	}
	if(isNaN(val1))
	{
		val1=0;
	} 
	 if(val2=='')
	{
		val2=0;
	}
	if(isNaN(val2))
	{
		val2=0;
	}
	 if(val3=='')
	{
		val3=0;
	}
	if(isNaN(val3))
	{
		val3=0;
	} 
	var pro2=0;
	pro2= val2-val3;
	  var check1=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETFINALDETAILS");
	 var pro3=($(check1).find ('FINALABB').text());
	  
	  if(pro3=='')
	{
		pro3=0;
	}
	if(isNaN(pro3))
	{
		pro3=0;
	} 
	if(LnAmt<=1500000)
	{
	var pro4=2*parseFloat(pro3);
	
		amt=Math.min((pro2),(pro4)); 
	}
	else{
	var pro4=1.25*parseFloat(pro3);
	
		amt=Math.min((pro2),(pro4)); 	
	} 
	
	//amt=parseFloat(Math.min(val2,val5));  
	 if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}   
	$("#CGST_PROPSEDEMI").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
	$("#CGST_PROPSEDEMI").next().addClass('active');	 	 
	//EMI Per Lakh
	 var LnAmt=100000;
	 var ROI=0;
	 var Tenur=0; 
	 
	ROI=$("#CGST_PROPOSEINR").val();
	Tenur=$("#CGST_PROTENOR").val();
	 var result=UI_getdata(ROI,Tenur,LnAmt,"","","LSW_SGETEMI_DATA");
	 var EMI=$(result).find("EMI").text();
	 	if(EMI=='')
	{
		EMI=0;
	}
	if(isNaN(EMI))
		{
			EMI=0;
		}
	$("#CGST_EMIPRLAKH").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
	$("#CGST_EMIPRLAKH").next().addClass('active');	 	 
	
	//LoanEligibility
	var ProposedEMI=$("#CGST_PROPSEDEMI").val().replace(/\,/g,'');
	var EMIPerLakh=$("#CGST_EMIPRLAKH").val().replace(/\,/g,'');
	var TyPro=$("#CGST_TYOFPROPERTY").val();
	var result=UI_getdata("PROTYPE",TyPro,"","","","LSW_SGETFINANCIALVAL");
	 var MarginVal=$(result).find("VALUE").text();
	 var Proval=$("#CGST_PROVAL").val().replace(/\,/g,'');
	if(ProposedEMI=='')
	{
		ProposedEMI=0;
	}
	if(isNaN(ProposedEMI))
		{
			ProposedEMI=0;
		}
		if(EMIPerLakh=='')
	{
		EMIPerLakh=0;
	}
	if(isNaN(EMIPerLakh))
		{
			EMIPerLakh=0;
		}
	if(MarginVal=='')
	{
		
		MarginVal=0;
	}
	if(isNaN(MarginVal))
		{
			MarginVal=0;
		}
	if(Proval=='')
	{
		
		Proval=0;
	}
	if(isNaN(Proval))
		{
			Proval=0;
		}
		var  amt1=0,amt2=0,amt=0;
		amt2=parseFloat(MarginVal/100)*parseFloat(Proval);
	 amt1=parseFloat(ProposedEMI)/parseFloat(EMIPerLakh)*100000;
	amt=Math.min(amt1,amt2);
	if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	$("#CGST_LOANELIGIBIL").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
	$("#CGST_LOANELIGIBIL").next().addClass('active');	 	 
	
	//proposedloan
	 var val1=0;
	var val2=0;
	val1=$("#CGST_LOANELIGIBIL").val().replace(/\,/g,'');
	val2= $("#DMY3").val().split('|')[3];
	if(val1=='')
	{
		val1=0;
		
	}
	if(isNaN(val1))
		{
			val1=0;
		}
	if(val2=='')
	{
		val2=0;
	}
	if(isNaN(val2))
		{
			val2=0;
		}
	var	amt=0;
	amt=Math.min(val1,val2);
	if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	$("#CGST_PROPOSEDLOAN").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
	$("#CGST_PROPOSEDLOAN").next().addClass('active');	 	 
	
	//final ltv
	var val1=0;
	var val2=0;
	val1=$("#CGST_PROPOSEDLOAN").val().replace(/\,/g,'');
	val2=$("#CGST_PROVAL").val().replace(/\,/g,'');
	 if(val1=='')
	{
		val1=0;
		
	}
	if(isNaN(val1))
		{
			val1=0;
		}
	if(val2=='')
	{
		val2=0;
	}
	if(isNaN(val2))
		{
			val2=0;
		}
		var	amt=0;
		amt=parseFloat((val1/val2)*100); 
		if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	$("#CGST_FINALLTV").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
    $("#CGST_FINALLTV").next().addClass('active');	 	 

 

})


$(document).on("blur",".INMUL",function(){
	$("#CRTR_PROPOSEDLNAMT").val(Math.min($("#CRTR_LOANAMT").val(),$("#CRTR_ELIGIBLELNAMT").val()));
})





 
