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
	var check=UI_getdata($("#PrcsID").val(),$("#CLTV_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	//$("#CGST_LOANAMT").val($(check).find ('LOANAMOUNT').text());
	
	$("#CLTV_PRODUCTID").val($(check).find ('PRODUCT').text());
	$("#CLTV_PRODUCTAME").val($(check).find ('PRDNAME').text());
	$("#CLTV_PROPOSEINR").val($(check).find ('INTERESTRATE').text());
	$("#CLTV_PROTENOR").val($(check).find ('TENTURE').text());
	
}
$(document).on("blur",".TRAD",function(){
	//Monthly Net Income
	var val1=0,val2=0,val3=0,amt=0;
	val1=$("#CLTV_STOCKVAL").val().replace(/\,/g,'');
	val2=$("#CLTV_INDUSMARGIN").val()/100;
	val3=$("#CLTV_MUTLIPLIER").val();
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
	
	amt=parseFloat(val1)*parseFloat(val2)*parseFloat(val3);
	if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	 $("#CLTV_MONNETINCOME").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
	 $("#CLTV_MONNETINCOME").next().addClass('active');
	 //Surplus Available for EMI Servicing
	 
	 amt=parseFloat(amt*60/100);
	 if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	 $("#CLTV_SURAVLFREMISER").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
	 $("#CLTV_ASURAVLFREMISER").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
	  $("#CLTV_SURAVLFREMISER").next().addClass('active');
	  $("#CLTV_ASURAVLFREMISER").next().addClass('active');
	  $(".FXCOST").focusout();
})
$(document).on("blur",".MANU",function(){
	//Gross Profit
	var val1=0,val2=0,amt=0;
	val1=$("#CLTV_SALES").val().replace(/\,/g,'');
	val2=$("#CLTV_PURCHASES").val().replace(/\,/g,'');
	 
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
	amt=parseFloat(val1-val2) ;
	if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	 $("#CLTV_GROSSPROFIT").val(CURINRCommaSep(parseFloat(amt).toFixed(2))); 
	  $("#CLTV_GROSSPROFIT").next().addClass('active');
	$(".FXCOST").focusout();
})

$(document).on("blur",".FXCOST",function(){
	//Total Fixed Cost.
	var val1=0,val2=0,val3=0,amt=0;
	val1=$("#CLTV_BUSIPREMISRENTAL").val().replace(/\,/g,'');
	val2=$("#CLTV_LABOURCHARGE").val().replace(/\,/g,'');
	val3=$("#CLTV_OTHERMANUCOST").val().replace(/\,/g,'');
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
	
	amt=parseFloat(val1)+parseFloat(val2)+parseFloat(val3);
	if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	 $("#CLTV_TOTALMONFXCOST").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
     	  $("#CLTV_TOTALMONFXCOST").next().addClass('active');	 
	  GetNetProfit1();
})

function GetNetProfit1(){
	//Net Profit
	var val1=0,val2=0,amt=0;
	val1=$("#CLTV_GROSSPROFIT").val().replace(/\,/g,'');
	val2=$("#CLTV_TOTALMONFXCOST").val().replace(/\,/g,'');
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
	amt=parseFloat(val1)-parseFloat(val2) ;
	if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	 $("#CLTV_NETPROFIT").val(CURINRCommaSep(parseFloat(amt).toFixed(2))); 
	$("#CLTV_DSR").val(60);
	$("#CLTV_DSR").next().addClass('active');
	amt=parseFloat(amt)*parseFloat(60/100);
	if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	$("#CLTV_MSURAVLEMISER").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
	$("#CLTV_ASURAVLFREMISER").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
	  $("#CLTV_MSURAVLEMISER").next().addClass('active');	 
	    $("#CLTV_ASURAVLFREMISER").next().addClass('active');	 
	$(".AVLFUND").focusout();
	
}






$(document).on("blur",".AVLFUND",function(){
	//Available Funds for EMI Servicing
	var val1=0,val2=0,amt=0;
	val1=$("#CLTV_ASURAVLFREMISER").val().replace(/\,/g,'');
	val2=$("#CLTV_EXISTEMIOBLI").val().replace(/\,/g,'');
	 
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
	amt=parseFloat(val1)-parseFloat(val2) ;
	if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	 $("#CLTV_AVLFUNDFREMISER").val(CURINRCommaSep(parseFloat(amt).toFixed(2))); 
	 $("#CLTV_AVLFUNDFREMISER").next().addClass('active');	 
	//Final Abb
	  var val1=0,amt=0;
	var check1=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETFINALDETAILS");
	  val1=($(check1).find ('FINALABB').text());
	    
	  if(val1=='')
	{
		val1=0;
	}
	if(isNaN(val1))
	{
		val1=0;
	} 
	  amt=parseFloat((val1*12)*3);
	  if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	$("#CLTV_THREETIMEABB").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
	$("#CLTV_THREETIMEABB").next().addClass('active');	 
		//Emi paid in last 12 Months
		 var val1=0,amt=0;
	//var check1=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETEMIDETAILS");
	//  val1=($(check1).find ('EMIPAID').text());
	  val1=3242523; 
	  if(val1=='')
	{
		val1=0;
	}
	if(isNaN(val1))
	{
		val1=0;
	} 
	  amt=parseFloat(val1*2);
	  if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	$("#CLTV_LONTRACOFLST12MON").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
	$("#CLTV_LONTRACOFLST12MON").next().addClass('active');	 
	GetAdjustedAvlFund();
	 GetEmiPerLakh();
	 GetLoanEligibility();
	 GetProposedLoan();
	 GetFinalltv();
	
})
 

function  GetAdjustedAvlFund(){

	//Adjusted Available Fund for EMI
	var val1=0,val2=0,val3=0,amt=0;
	val1=$("#CLTV_AVLFUNDFREMISER").val().replace(/\,/g,'');
	val2=$("#CLTV_THREETIMEABB").val().replace(/\,/g,'');
	val3=$("#CLTV_LONTRACOFLST12MON").val().replace(/\,/g,'');
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
	
	amt=parseFloat(Math.min(val1,val2,val3));
	if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	 $("#CLTV_ADJUSTAVLFNDEMI").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
     $("#CLTV_ADJUSTAVLFNDEMI").next().addClass('active');	 	 
}
function  GetEmiPerLakh(){
	
	//EMI Per Lakh
	 var LnAmt=100000;
	 var ROI=0;
	 var Tenur=0; 
	 
	ROI=$("#CLTV_PROPOSEINR").val();
	Tenur=$("#CLTV_PROTENOR").val();
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
	$("#CLTV_EMIPERLAKH").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
	$("#CLTV_EMIPERLAKH").next().addClass('active');	 	 
	 
}

function  GetLoanEligibility(){
	
	 //LoanEligibility
	 var AvlFundEMI=$("#CLTV_ADJUSTAVLFNDEMI").val().replace(/\,/g,'');
	var EMIPerLakh=$("#CLTV_EMIPERLAKH").val().replace(/\,/g,'');
	 
	 var Proval=$("#CLTV_PROVAL").val().replace(/\,/g,'');
	if(AvlFundEMI=='')
	{
		AvlFundEMI=0;
	}
	if(isNaN(AvlFundEMI))
		{
			AvlFundEMI=0;
		}
		if(EMIPerLakh=='')
	{
		EMIPerLakh=0;
	}
	if(isNaN(EMIPerLakh))
		{
			EMIPerLakh=0;
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
		amt1=parseFloat(AvlFundEMI/EMIPerLakh*100000);
	    amt2=parseFloat(Proval*(40/100));
		amt=parseFloat(Math.min(amt1,amt2));
		if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	$("#CLTV_LOANELIGIBILITY").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));  
	$("#CLTV_LOANELIGIBILITY").next().addClass('active');	 	 
	
}

function  GetProposedLoan(){
	//proposedloan
	 var val1=0,val2=0,amt=0;
	 
	val1=$("#CLTV_LOANELIGIBILITY").val().replace(/\,/g,'');
	val2= $("#DMY3").val().split('|')[0];
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
	 
	amt=Math.min(val1,val2);
	if(amt=='')
	{
		amt=0;
	}
	if(isNaN(amt))
		{
			amt=0;
		}
	$("#CLTV_PROPOSEDLOAN").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
	$("#CLTV_PROPOSEDLOAN").next().addClass('active');	 	 
	
	
}


function  GetFinalltv(){
	//final ltv
	var val1=0;
	var val2=0;
	val1=$("#CLTV_PROPOSEDLOAN").val().replace(/\,/g,'');
	val2=$("#CLTV_PROVAL").val().replace(/\,/g,'');
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
	$("#CLTV_FINALLTV").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));
	$("#CLTV_FINALLTV").next().addClass('active');	 	 
	
}

function CheckCusType(){
	
	
	//var Custype=UI_getdata("89616_HomeEqutity_process","","","","","LSW_SGETCUSTYPEDET");
	var Custype=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETCUSTYPEDET");
	 var type=$(Custype).find ('CUSTYPE').text();
	 
	 if(type=="Individual")
	 {
		$(".NIND").hide();
		$("#CLTV_MOYRINCORPOR").val('');
		 //$(".NIND").material_select();
	     $("#CLTV_SECTOR").removeClass('CLTVMndtry');
		 $("#CLTV_MOYRINCORPOR").removeClass('CLTVMndtry');
	 }
	 if(type=="Non-Individual"){
		 $(".NIND").show();
		   $("#CLTV_SECTOR").addClass('CLTVMndtry');
		 $("#CLTV_MOYRINCORPOR").addClass('CLTVMndtry');
		  GetSector();
		  GetDateOfIncor();
	 }
}	 
	function  GetDateOfIncor(){
	//var check=UI_getdata("91315_HomeEqutity_process","","","","","LSW_SGETCUSDETAILS");
	var check=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETCUSDETAILS");
 
	$("#CLTV_MOYRINCORPOR").val($(check).find ('INCORDT').text());
     $("#CLTV_MOYRINCORPOR").attr('disabled',true); 
}	

	function  GetSector(){
		
	//var check=UI_getdata("91328_HomeEqutity_process","","","","","LSW_SGETSECDETAILS");
	var check=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSECDETAILS");
	 
	$("#CLTV_SECTOR").val($(check).find ('SECTOR').text());
   // $("#CLTV_SECTOR").append($(check).find("SECTOR").html());
 	//$("#CLTV_SECTOR").material_select(); 
     $("#CLTV_SECTOR").attr('disabled',true); 
}

	

function GetPropertyVal()  
{	  
	var xml=UI_getdata("LTVPROPERTY","","","","","LSW_SGETFINANCIALVAL");
	
    $("#CLTV_TYOFPROPERTY").html("");
	$("#CLTV_TYOFPROPERTY").append($(xml).find("RESULT").html());
	$("#CLTV_TYOFPROPERTY").material_select(); 
}
function GetBusinessVal()  
{	  
	var xml=UI_getdata("LTVBUSSINESS","","","","","LSW_SGETFINANCIALVAL");
	
    $("#CLTV_TYOFBUSINESS").html("");
	$("#CLTV_TYOFBUSINESS").append($(xml).find("RESULT").html());
	$("#CLTV_TYOFBUSINESS").material_select(); 
}


function GetMarginVal()  
{
	if($("#CLTV_SECTOR").val()=="Trading")
	{
	var Tybus=$("#CLTV_TYOFBUSINESS").val();
	var result=UI_getdata("LTVBUSSINES",Tybus,"","","","LSW_SGETFINANCIALVAL"); 
	$("#CLTV_INDUSMARGIN").val($(result).find("MARGIN").text());
	$("#CLTV_MUTLIPLIER").val($(result).find("MULTIPLIER").text());
		$("#CLTV_INDUSMARGIN").next().addClass('active');	 	 
			$("#CLTV_MUTLIPLIER").next().addClass('active');	 	 
	
	//GetNetProfit();
	}
}



function CheckSectorType()
 {
	  
	
var Sector=$("#CLTV_SECTOR").val()
      if(Sector=="Manufacturing")
 {
		 
         $(".MANUFACT").show();
         $(".TRADING").hide();
		 $(".TRADIN").val('');
		  
		 //    $(".vehicle").parent().next().find(".MndtryAstr").html("*");
		//  $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
		//  $("#LPDT_TYPEOFGU").removeClass('LPDTMndtry');
 }
       if(Sector=="Trading")
 {
		 
         
         $(".TRADING").show();
		 $(".MANUFACT").hide();
		 $(".MANUFAC").val('');
		  
		 //    $(".vehicle").parent().next().find(".MndtryAstr").html("*");
		//  $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
		//  $("#LPDT_TYPEOFGU").removeClass('LPDTMndtry');
 }


 }
 
 
	  
 
 