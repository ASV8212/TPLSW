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

function Checkint(){
	var check=UI_getdata($("#PrcsID").val(),$("#CITR_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	$("#CITR_PROPOSEINR").val($(check).find ('INTERESTRATE').text());
	$("#CITR_PROTENOR").val($(check).find ('TENTURE').text());
	 
}

$(document).on("blur",".CHECKIF",function(){
	var sub=$("#CITR_PATLAST").val().replace(/,/g,'');
	var sub1=$("#CITR_PATN").val().replace(/,/g,'');
	var sub2;
	var sub3=2.5;
	if(sub=='')
	{
		sub=0;
	}
	 
	if(sub1=='')
	{
		sub1=0;
	}
	
	if(parseFloat(sub/sub1)>1.3) 
	{
	sub2=parseFloat(parseFloat(parseFloat(sub)+parseFloat(sub1))/2);
	}
	else
	{
		sub2=parseFloat(sub);
	} 
	sub4=parseFloat(sub3)*parseFloat(sub2);
	if(isNaN(sub4))
	{
		sub4=0;
	}
	if(sub4=='Infinity')
	{
		sub4=0;
	}
	 if(isNaN(sub2))
	{
		sub2=0;
	}
	if(sub2=='Infinity')
	{
		sub2=0;
	}
	 
	$("#CITR_ADJUSTPAT").val(CURINRCommaSep(parseFloat(sub2).toFixed(2)));
	$("#CITR_MULTIPLIER").val(sub3);
	$("#CITR_ADJUSTMUL").val(CURINRCommaSep(parseFloat(sub4).toFixed(2)));
	$("#CITR_MULTIPLIER").next().addClass('active');
	$("#CITR_ADJUSTMUL").next().addClass('active');
	$("#CITR_ADJUSTPAT").next().addClass('active');
	
	
	
	
	//add
	var a1=$("#CITR_ADJUSTMUL").val().replace(/,/g,'');
	var a2=$("#CITR_DEPRECIA").val().replace(/,/g,'');
	var a3=$("#CITR_INTEREST").val().replace(/,/g,'');
	var a4=$("#CITR_PARTNER").val().replace(/,/g,'');
	var a5=$("#CITR_INTERESTCAP").val().replace(/,/g,'');
	var a6=$("#CITR_DIVIDEND").val().replace(/,/g,'');
	if(a1=='')
	{
		a1=0;
	}
	if(isNaN(a1))
	{
		a1=0;
	}
	if(a2=='')
	{
		a2=0;
	}
	if(isNaN(a2))
	{
		a2=0;
	}
	if(a3=='')
	{
		a3=0;
	}
	if(isNaN(a3))
	{
		a3=0;
	}
	if(a4=='')
	{
		a4=0;
	}
	if(isNaN(a4))
	{
		a4=0;
	}
	if(a5=='')
	{
		a5=0;
	}
	if(isNaN(a5))
	{
		a5=0;
	}
	if(a6=='')
	{
		a6=0;
	}
	if(isNaN(a6))
	{
		a6=0;
	}
	var add;
	var div;
	var add=parseFloat(a1)+parseFloat(a2)+parseFloat(a3)+parseFloat(a4)+parseFloat(a5)+parseFloat(a6);
	var div=parseFloat(add)/12;
	if(isNaN(add))
	{
		add=0;
	}
	if(add=='Infinity')
	{
		add=0;
	}
	if(isNaN(div))
	{
		div=0;
	}
	if(div=='Infinity')
	{
		div=0;
	}
 
	$("#CITR_REVISEDANN").val(CURINRCommaSep(parseFloat(add).toFixed(2)));
	$("#CITR_REVISEDMON").val(CURINRCommaSep(parseFloat(div).toFixed(2)));
	$("#CITR_REVISEDANN").next().addClass('active');
	$("#CITR_REVISEDMON").next().addClass('active');
	
	
	
	//MIN_
	
	var per=$("#CITR_ADJUSTPAT").val().replace(/,/g,'');
	var res=per*25/100;
	var sur=$("#CITR_REVISEDMON").val().replace(/,/g,'');
	if(per=='')
	{
		per=0;
	}
	if(isNaN(per))
	{
		per=0;
	}
	if(sur=='')
	{
		sur=0;
	}
	if(isNaN(sur))
	{
		sur=0;
	}
	var fin=Math.min((res),$("#CITR_ADDMONTHLY").val().replace(/,/g,''));
	var fin1=parseFloat(parseFloat(parseFloat(sur)+parseFloat(fin))*60/100);
	if(isNaN(fin))
	{
		fin=0;
	}if(isNaN(fin1))
	{
		fin1=0;
	}
	if(fin1=='Infinity')
	{
		fin1=0;
	}
	$("#CITR_ADDCONSI").val(CURINRCommaSep(parseFloat(fin).toFixed(2)));
	$("#CITR_SURPLUSLOAN").val(CURINRCommaSep(parseFloat(fin1).toFixed(2)));
	$("#CITR_ADDCONSI").next().addClass('active');
	$("#CITR_SURPLUSLOAN").next().addClass('active');
	
	
	//
	
	
	var pro =$("#CITR_SURPLUSLOAN").val().replace(/,/g,'');
	var pro1=$("#CITR_EXISTINGLN").val().replace(/,/g,''); 
	var LonAt=0;
	LonAt= $("#DMY3").val().split('|')[0].replace(/,/g,'');
	if(pro=='')
	{
		pro=0;
	}
	if(isNaN(pro))
	{
		pro=0;
	}
	if(pro1=='')
	{
		pro1=0;
	}
	if(isNaN(pro1))
	{
		pro1=0;
	}
	if(LonAt=='')
	{
		LonAt=0;
	}
	if(isNaN(LonAt))
	{
		LonAt=0;
	}
	if(LonAt=='Infinity')
	{
		LonAt=0;
	}
	var pro2=parseFloat(pro)-parseFloat(pro1);
	var check1=UI_getdata($("#CITR_PRCSID").val(),"","","","","LSW_SGETABBDETAILS");
	var pro3=($(check1).find ('FINALABB').text());
	//pro3=1200000;
	if(LonAt<1500000)
	{
		var pro4=2*parseFloat(pro3);
		var finpro=Math.min((pro2),(pro4)); 
	}
	else
	{
		var pro4=1.25*parseFloat(pro3);
		var finpro=Math.min((pro2),(pro4)); 	
	}

	if(isNaN(finpro))
	{
		finpro=0;
	}
	if(finpro=='Infinity')
	{
		finpro=0;
	}
	$("#CITR_PROPOSEEMI").val(CURINRCommaSep(parseFloat(finpro).toFixed(2)));
	$("#CITR_PROPOSEEMI").next().addClass('active'); 
	
	//EMILAK
	/* 
	var LnAt=100000;
	var ROI=0;
	var Tenur=0;
	//LnAt= $("#DMY3").val().split('|')[3];
	ROI=$("#CITR_PROPOSEINR").val();
	Tenur=$("#CITR_PROTENOR").val();
	if(LnAt=='')
	{
		LnAt=0;
	}
	if(isNaN(LnAt))
	{
		LnAt=0;
	}
	if(ROI=='')
	{
		ROI=0;
	}
	if(isNaN(ROI))
	{
		ROI=0;
	}
	if(Tenur=='')
	{
		Tenur=0;
	}
	if(isNaN(Tenur))
	{
		Tenur=0;
	}
	var amt=0;
	amt=parseFloat(LnAt *((ROI/100)/12) * (Math.pow(1+((ROI/100)/12),Tenur)/((Math.pow(1+((ROI/100)/12),Tenur))-1)));
	$("#CITR_EMILAKH").val(CURINRCommaSep(parseFloat(amt).toFixed(0)));
	$("#CITR_EMILAKH").next().addClass('active');  */
	
	
	var LnAmt=100000;
	 var ROI=0;
	 var Tenur=0; 
	 
	ROI=$("#CITR_PROPOSEINR").val();
	Tenur=$("#CITR_PROTENOR").val();
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
	$("#CITR_EMILAKH").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
	$("#CITR_EMILAKH").next().addClass('active'); 
	
	//FINLN
	
	var ProposedEMI=$("#CITR_PROPOSEEMI").val().replace(/\,/g,'');
	var EMIPerLakh=$("#CITR_EMILAKH").val().replace(/\,/g,'');
	var TyPro=$("#CITR_TYOFPRO").val();
	var result=UI_getdata("PROTYPE",TyPro,"","","","LSW_SGETFINANCIALVAL");
	var MarginVal=$(result).find("VALUE").text();
	var Proval=$("#CITR_PROVAL").val().replace(/\,/g,'');
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
		
	var  amt1=0,amt2=0,amt3=0;
	
	amt1=parseFloat(parseFloat(ProposedEMI)/parseFloat(EMIPerLakh))*100000;
	amt2=parseFloat(parseFloat(MarginVal/100)*parseFloat(Proval));
	amt3=Math.min(amt1,amt2);
	if(isNaN(amt3))
	{
		amt3=0;
	}
	$("#CITR_FINALLOAN").val(CURINRCommaSep(parseFloat(amt3).toFixed(0)));
	$("#CITR_FINALLOAN").next().addClass('active'); 
	
	//PROPOSE
	
	var LoanAt=0;
	var fn=0;
	LoanAt= $("#DMY3").val().split('|')[0];
	var fn=Math.min($("#CITR_FINALLOAN").val().replace(/,/g,''),(LoanAt));
	if(isNaN(fn))
	{
		fn=0;
	}
	if(fn=='Infinity')
	{
		fn=0;
	}
	$("#CITR_PROPOSELN").val(CURINRCommaSep(parseFloat(fn).toFixed(2)));
	$("#CITR_PROPOSELN").next().addClass('active'); 
	
	
	//LTV
	
	
	var l1=$("#CITR_PROPOSELN").val().replace(/,/g,'');
	var l2=$("#CITR_PROVAL").val().replace(/,/g,'');
	var l3=0;
	if(l1=='')
	{
		l1=0;
	}
	if(isNaN(l1))
	{
		l1=0;
	}
	if(l2=='')
	{
		l2=0;
	}
	if(isNaN(l2))
	{
		l2=0;
	}
	if(isNaN(l3))
	{
		l3=0;
	}
		
	var l3=parseFloat(l1)/parseFloat(l2);
	
	if(isNaN(l3))
	{
		l3=0;
	}
	if(l3=='Infinity')
	{
		l3=0;
	}
	
	$("#CITR_FINALLTV").val(CURINRCommaSep(parseFloat(l3*100).toFixed(2)));
	$("#CITR_FINALLTV").next().addClass('active');
})


 
 

 


function getbusiness(){
	var xml=UI_getdata("TYPEBUSINESS","","","","","LSW_SGETFINANCIALVAL");
    $("#CITR_TYOFBUS").html("");
	$("#CITR_TYOFBUS").append($(xml).find("RESULT").html());
	$("#CITR_TYOFBUS").material_select(); 	
}

function getproperty(){
	var xml=UI_getdata("PROPERTYTYPE","","","","","LSW_SGETFINANCIALVAL");
    $("#CITR_TYOFPRO").html("");
	$("#CITR_TYOFPRO").append($(xml).find("RESULT").html());
	$("#CITR_TYOFPRO").material_select(); 
}


/* $(document).on("blur",".EMILAK",function(){
	var LnAt=100000;
	var ROI=0;
	var Tenur=0;
	//LnAt= $("#DMY3").val().split('|')[3];
	ROI=$("#CITR_PROPOSEINR").val();
	Tenur=$("#CITR_PROTENOR").val();
	if(LnAt=='')
	{
		LnAt=0;
	}
	if(isNaN(LnAt))
	{
		LnAt=0;
	}
	if(ROI=='')
	{
		ROI=0;
	}
	if(isNaN(ROI))
	{
		ROI=0;
	}
	if(Tenur=='')
	{
		Tenur=0;
	}
	if(isNaN(Tenur))
	{
		Tenur=0;
	}
	var amt=0;
	amt=parseFloat(LnAt *((ROI/100)/12) * (Math.pow(1+((ROI/100)/12),Tenur)/((Math.pow(1+((ROI/100)/12),Tenur))-1)));
	$("#CITR_EMILAKH").val(CURINRCommaSep(parseFloat(amt).toFixed(0)));
	$("#CITR_EMILAKH").next().addClass('active'); 
})



$(document).on("blur",".FINLN",function(){
	var ProposedEMI=$("#CITR_PROPOSEEMI").val().replace(/\,/g,'');
	var EMIPerLakh=$("#CITR_EMILAKH").val().replace(/\,/g,'');
	var TyPro=$("#CITR_TYOFPRO").val();
	var result=UI_getdata("PROTYPE",TyPro,"","","","LSW_SGETFINANCIALVAL");
	var MarginVal=$(result).find("VALUE").text();
	var Proval=$("#CITR_PROVAL").val().replace(/\,/g,'');
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
	$("#CITR_FINALLOAN").val(CURINRCommaSep(parseFloat(amt).toFixed(0)));
	$("#CITR_FINALLOAN").next().addClass('active'); 
})




$(document).on("blur",".PROPOSE",function(){
	var LoanAt=0;
	var fn=0;
	LoanAt= $("#DMY3").val().split('|')[3];
	var fn=Math.min($("#CITR_FINALLOAN").val().replace(/,/g,''),(LoanAt));
	fn=CURINRCommaSep(parseFloat(fn).toFixed(0));
	$("#CITR_PROPOSELN").val(fn);
	$("#CITR_PROPOSELN").next().addClass('active'); 

})


$(document).on("blur",".LTV",function(){
	var l1=$("#CITR_PROPOSELN").val().replace(/,/g,'');
	var l2=$("#CITR_PROVAL").val().replace(/,/g,'');
	if(l1=='')
	{
		l1=0;
	}
	if(isNaN(l1))
	{
		l1=0;
	}
	if(l2=='')
	{
		l2=0;
	}
	if(isNaN(l2))
	{
		l2=0;
	}
		
	var l3=parseFloat(l1)/parseFloat(l2);
	l3=CURINRCommaSep(parseFloat(l3).toFixed(2));
	$("#CITR_FINALLTV").val(l3)+'%';
	$("#CITR_FINALLTV").next().addClass('active');
})
 
 */
 