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
function Checkinst(){
	var check=UI_getdata($("#PrcsID").val(),$("#CBBA_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	$("#CBBA_BPROPOSEINR").val($(check).find ('INTERESTRATE').text());
	$("#CBBA_BPROTENOR").val($(check).find ('TENTURE').text());
	$("#CBBA_PRODUCTID").val($(check).find ('PRODUCT').text());
	$("#CBBA_PRODUCTNAME").val($(check).find ('PRDNAME').text());
	
	
}
 

 

/* $(document).on("blur",".MULIN",function(){
	 var mul=$("#CBBA_BUYSUPPLY").val().replace(/,/g,'');
	 var mul1=$("#CBBA_INDUS").val().replace(/,/g,'');
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
	 $("#CBBA_NETPRFT").val(mul2);
	 $("#CBBA_NETPRFT").next().addClass('active');
	 
})  */

 

$(document).on("blur",".PERCEN",function(){
	var net=$("#CBBA_NETPRFT").val().replace(/,/g,''); 
	var net2=parseFloat(net)*25/100;
	if(net=='')
	{
		net=0;
	}
	if(isNaN(net))
	{
		net=0;
	}
	 if(net2=='')
	{
		net2=0;
	}
	if(isNaN(net2))
	{
		net2=0;
	}
	var fnlnet=Math.min((net2),$("#CBBA_ADDMONTH").val().replace(/,/g,''));
	var addmon=$("#CBBA_ADDMONTH").val().replace(/,/g,'')
	addmon=CURINRCommaSep(parseFloat(addmon).toFixed(2));
	$("#CBBA_ADDMONTH").val(addmon);
	
	fnlnet=CURINRCommaSep(parseFloat(fnlnet).toFixed(2));
	$("#CBBA_ADDCONS").val(fnlnet);
	$("#CBBA_ADDCONS").next().addClass('active'); 
	//$(".SURPLUS").focusout();

})


$(document).on("blur",".PROVAL",function(){
	
	var pro=$("#CBBA_BPROVAL").val().replace(/,/g,'')
	pro=CURINRCommaSep(parseFloat(pro).toFixed(2));
	$("#CBBA_BPROVAL").val(pro);
	
})

$(document).on("blur",".SURPLUS",function(){
	var surp=$("#CBBA_NETPRFT").val().replace(/,/g,''); 
	var surp2=$("#CBBA_ADDCONS").val().replace(/,/g,''); 
	if(surp=='')
	{
		surp=0;
	}
	if(isNaN(surp))
	{
		surp=0;
	}
	 if(surp2=='')
	{
		surp2=0;
	}
	if(isNaN(surp2))
	{
		surp2=0;
	}
	var surp3=parseFloat(surp)+parseFloat(surp2);

	var surp4=parseFloat(surp3*60/100);

	surp4=CURINRCommaSep(parseFloat(surp4).toFixed(2));
	$("#CBBA_SURPLUSEMI").val(surp4);
	$("#CBBA_SURPLUSEMI").next().addClass('active'); 
	//$(".CALCMINIMUM").focusout();
})

/* $(document).on("blur",".EMIP",function(){
	var LnAt=100000;
	var ROI=0;
	var Tenur=0;
	//LnAt= $("#DMY3").val().split('|')[3];
	ROI=$("#CBBA_BPROPOSEINR").val();
	Tenur=$("#CBBA_BPROTENOR").val();
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
	$("#CBBA_EMIPLAKH").val(CURINRCommaSep(parseFloat(amt).toFixed(0)));

	$("#CBBA_EMIPLAKH").next().addClass('active'); 
}) */

/* $(document).on("blur",".FINLOAN",function(){
	var ProposedEMI=$("#CBBA_PROPOSEEMI").val().replace(/,/g,'');
	var EMIPerLakh=$("#CBBA_EMIPLAKH").val().replace(/,/g,'');
	var TyPro=$("#CBBA_BTYOFPRO").val();
	var result=UI_getdata("PROTYPE",TyPro,"","","","LSW_SGETFINANCIALVAL");
	var MarginVal=$(result).find("VALUE").text();
	var Proval=$("#CBBA_BPROVAL").val().replace(/,/g,'');
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
	$("#CBBA_LNELIGI").val(CURINRCommaSep(parseFloat(amt).toFixed(0)));
	$("#CBBA_LNELIGI").next().addClass('active'); 
	
})

$(document).on("blur",".PROPOSELN",function(){
	var LoanAt=0;
	var fn=0;
	LoanAt= $("#DMY3").val().split('|')[3];
	var fn=Math.min($("#CBBA_LNELIGI").val().replace(/,/g,''),(LoanAt));
	fn=CURINRCommaSep(parseFloat(fn).toFixed(0));
	$("#CBBA_PROPOSELN").val(fn);
	$("#CBBA_PROPOSELN").next().addClass('active'); 

})
 */
/* $(document).on("blur",".FINALLTV",function(){
	var l1=$("#CBBA_PROPOSELN").val().replace(/,/g,'');
	var l2=$("#CBBA_BPROVAL").val().replace(/,/g,'');
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
	$("#CBBA_FINLLTV").val(l3);
	$("#CBBA_FINLLTV").next().addClass('active');
}) */


$(document).on("blur",".CALCMINIMUM",function(){
	
	
	var pro =$("#CBBA_SURPLUSEMI").val().replace(/,/g,'');
	var pro1=$("#CBBA_EXISTEMI").val().replace(/,/g,''); 
	var LnAt=0;
	LnAt= $("#DMY3").val().split('|')[3].replace(/,/g,'');
	if(pro=='')
	{
	pro=0;
	}
	if(isNaN(pro))
	{
	pro=0;
	}if(pro1=='')
	{
	pro1=0;
	}
	if(isNaN(pro1))
	{
	pro1=0;
	}
	if(LnAt=='')
	{
	LnAt=0;
	}
	if(isNaN(LnAt))
	{
	LnAt=0;
	}
	if(pro3=='')
	{
	pro3=0;
	}
	if(isNaN(pro3))
	{
	pro3=0;
	}
	if(pro4=='')
	{
	pro4=0;
	}
	if(isNaN(pro4))
	{
	pro4=0;
	}
	var pro2=parseFloat(pro)-parseFloat(pro1);
	var check1=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETABBDETAILS");
	var pro3=($(check1).find ('FINALABB').text());
	//pro3=100000;
	if(LnAt<1500000){
		var pro4=2*parseFloat(pro3);
		var finpro=Math.min((pro2),(pro4)); 
	}
	else{
		var pro4=1.25*parseFloat(pro3);
		var finpro=Math.min((pro2),(pro4)); 	
	}
	var exist=$("#CBBA_EXISTEMI").val().replace(/,/g,'')
	exist=CURINRCommaSep(parseFloat(exist).toFixed(2));
	$("#CBBA_EXISTEMI").val(exist);
	finpro=CURINRCommaSep(parseFloat(finpro).toFixed(2));
	$("#CBBA_PROPOSEEMI").val(finpro);
	$("#CBBA_PROPOSEEMI").next().addClass('active'); 
	
	//EMPI
/*	
	
 	var LonAt=100000;
	var ROI=0;
	var Tenur=0;
	//LnAt= $("#DMY3").val().split('|')[3];
	ROI=$("#CBBA_BPROPOSEINR").val();
	Tenur=$("#CBBA_BPROTENOR").val();
	if(LonAt=='')
	{
		LonAt=0;
	}
	if(isNaN(LonAt))
	{
		LonAt=0;
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
	amt=parseFloat(LonAt *((ROI/100)/12) * (Math.pow(1+((ROI/100)/12),Tenur)/((Math.pow(1+((ROI/100)/12),Tenur))-1)));
	//amt=parseFloat((LonAt * ROI / 12) * [Math.pow((1 + ROI / 12), Tenur)] / [Math.pow((1 + ROI / 12), Tenur) - 1]);
	$("#CBBA_EMIPLAKH").val(CURINRCommaSep(parseFloat(amt).toFixed(2)));

	$("#CBBA_EMIPLAKH").next().addClass('active');  */
	
 	 var LnAmt=100000;
	 var ROI=0;
	 var Tenur=0; 
	 
	ROI=$("#CBBA_BPROPOSEINR").val();
	Tenur=$("#CBBA_BPROTENOR").val();
	 var result=UI_getdata(ROI,Tenur,LnAmt,$("#PrcsID").val()+'|'+$(".FormPageMultiTab li.active").attr("id"),"","LSW_SGETEMI_DATA");
	 var EMI=$(result).find("EMI").text();
	 	if(EMI=='')
	{
		EMI=0;
	}
	if(isNaN(EMI))
		{
			EMI=0;
		}
	$("#CBBA_EMIPLAKH").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
	$("#CBBA_EMIPLAKH").next().addClass('active'); 
	
	//FINLOAN
	
	var ProposedEMI=$("#CBBA_PROPOSEEMI").val().replace(/,/g,'');
	var EMIPerLakh=$("#CBBA_EMIPLAKH").val().replace(/,/g,'');
	var TyPro=$("#CBBA_BTYOFPRO").val();
	var result=UI_getdata("PROTYPE",TyPro,"","","","LSW_SGETFINANCIALVAL");
	var MarginVal=$(result).find("VALUE").text();
	var Proval=$("#CBBA_BPROVAL").val().replace(/,/g,'');
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
	$("#CBBA_LNELIGI").val(CURINRCommaSep(parseFloat(amt).toFixed(0)));
	$("#CBBA_LNELIGI").next().addClass('active'); 
	
	//PROPOSELN
	
	var LoanAt=0;
	var fn=0;
	LoanAt= $("#DMY3").val().split('|')[0];
	var fn=Math.min($("#CBBA_LNELIGI").val().replace(/,/g,''),(LoanAt));
	fn=CURINRCommaSep(parseFloat(fn).toFixed(0));
	$("#CBBA_PROPOSELN").val(fn);
	$("#CBBA_PROPOSELN").next().addClass('active'); 

	//FINALLTV
	
	var l1=$("#CBBA_PROPOSELN").val().replace(/,/g,'');
	var l2=$("#CBBA_BPROVAL").val().replace(/,/g,'');
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
		
	var l3=parseFloat(l1)/parseFloat(l2)*100;
	l3=CURINRCommaSep(parseFloat(l3).toFixed(0));
	$("#CBBA_FINLLTV").val(l3);
	$("#CBBA_FINLLTV").next().addClass('active');
})


$(document).on("blur",".INMUL",function(){
	$("#CRTR_PROPOSEDLNAMT").val(Math.min($("#CRTR_LOANAMT").val(),$("#CRTR_ELIGIBLELNAMT").val()));
})


function  GetDateOfInco(){
	var check=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETCUSDETAILS");
 
	$("#CBBA_MONYEAR").val($(check).find ('INCORDT').text());
	$("#CBBA_MONYEAR").attr('disabled',false); 
 
}	

function GetTyBusiness(){
	var xml=UI_getdata("TYPEBUSINESS","","","","","LSW_SGETFINANCIALVAL");
    $("#CBBA_BTYOFBUS").html("");
	$("#CBBA_BTYOFBUS").append($(xml).find("RESULT").html());
	$("#CBBA_BTYOFBUS").material_select(); 
	
}
function GetTyProperty(){
	var xml=UI_getdata("PROPERTYTYPE","","","","","LSW_SGETFINANCIALVAL");
	
    $("#CBBA_BTYOFPRO").html("");
	$("#CBBA_BTYOFPRO").append($(xml).find("RESULT").html());
	$("#CBBA_BTYOFPRO").material_select(); 
	
}

/* 
function GridControlDetailBNKBASEDGRD  (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
						var pattern= /Remuneration/;
						var exists = pattern.test(row[0]);
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text"  id="BNKG_PARTICULAR'+rowno+'" style="width:160px"  name="BNKG_PARTICULAR'+rowno+'" maxlength="30" class="form-control NoSpecialChar IsCURCommaFields  form-control    ">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=BNKG_PARTICULAR'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=BNKG_PARTICULAR'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   
				
                          }
						 },
  
				 { targets: 2, "render": function ( data, type, row, meta ) { 
						var pattern= /Remuneration/;
						var exists = pattern.test(row[0]);
			 			
					 var rowno = meta.row;	
					 var HTML = "";
						 
						HTML =	'<span><input type="text"  id="BNKG_AMOUNT'+rowno+'" style="width:160px"  name="BNKG_AMOUNT'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL"  maxlength="30" class="form-control NoSpecialChar IsCURCommaFields  form-control   BANKBASEDDTS">';	
						
						 					
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=BNKG_AMOUNT'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=BNKG_AMOUNT'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   
				
                          }
						 },
 
					       
						  
						   
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
 }
 $(document).on("blur", ".BANKBASEDDTS", function() {
	 
	var amt=0;
	var val1=0;
	val2=0;
	val3=0;
	val4=0;
	val5=0;
	val6=0;
	val7=0;
	val8=0;
	val9=0;
	val10=0;
	val11=0;
	val12=0;
	/*  for(i=1;i<=12;i++){
		 if(val(i)){
			 val(i)==0;
		 }
			 
	 } */
	/*val1=$($($(this).closest(".tbody").find(".tbodytr")[0]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val2=$($($(this).closest(".tbody").find(".tbodytr")[1]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val3=$($($(this).closest(".tbody").find(".tbodytr")[2]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val4=$($($(this).closest(".tbody").find(".tbodytr")[3]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val5=$($($(this).closest(".tbody").find(".tbodytr")[4]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val6=$($($(this).closest(".tbody").find(".tbodytr")[5]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val7=$($($(this).closest(".tbody").find(".tbodytr")[6]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val8=$($($(this).closest(".tbody").find(".tbodytr")[7]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val9=$($($(this).closest(".tbody").find(".tbodytr")[8]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val10=$($($(this).closest(".tbody").find(".tbodytr")[9]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val11=$($($(this).closest(".tbody").find(".tbodytr")[10]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val12=$($($(this).closest(".tbody").find(".tbodytr")[11]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
    amt=(parseFloat(val1)+parseFloat(val2)+parseFloat(val3)+parseFloat(val4)+parseFloat(val5)+parseFloat(val6)+parseFloat(val7)+parseFloat(val8)+parseFloat(val9)+parseFloat(val10)+parseFloat(val11)+parseFloat(val12))/12;
	amt=CURINRCommaSep(parseFloat(amt).toFixed(0));
    $("#CBBA_BUYSUPPLY").val(amt);
	 
	 
 }); */
 
 function GridControlDetailBNKBASEDGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			 			
			 				var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="BNKG_PARTICULAR'+rowno+'" style="width:140px"  name="BNKG_PARTICULAR'+rowno+'" maxlength="40" disabled class="form-control IsNumberFieldsSpl DSVLBL GridMndtry  form-control BANKBASEDDTS">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=BNKG_PARTICULAR'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=BNKG_PARTICULAR'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   	
			 			
							
				         } 
						 },
						 { targets: 1, "render": function ( data, type, row, meta ) {                            
							 
								 var rowno = meta.row;	
								 var HTML = "";
                       /*       if(row[0] == "Total Bills validated")
						{
							HTML =	'<span><input type="text"  id="BNKG_AMOUNT'+rowno+'" style="width:160px"  name="BNKG_AMOUNT'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL"  maxlength="30" class="form-control NoSpecialChar IsCURCommaFields  form-control DSVLBL  BANKBASEDDTS">';	
						}			
                        else{
							}	 */
							
												
									var HTML =	'<span><input type="text" id="BNKG_AMOUNT'+rowno+'" style="width:140px" name="BNKG_AMOUNT'+rowno+'" maxlength="40" class="form-control IsCURCommaFields GridMndtry IsNumberFieldsSpl  form-control BANKBASEDDTS">';			 
									HTML = HTML + '</span>'; 
						
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=BNKG_AMOUNT'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=BNKG_AMOUNT'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;  		
						  } 
					 },
					 
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}
	
	$(document).on("blur", ".BANKBASEDDTS", function() {
		var amt=0,val1=0,val2=0,val3=0,val4=0,val5=0,val6=0,val7=0,val8=0,val9=0,val10=0,val11=0,val12=0;
	  
	 val1=$($($(this).closest(".tbody").find(".tbodytr")[0]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val2=$($($(this).closest(".tbody").find(".tbodytr")[1]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val3=$($($(this).closest(".tbody").find(".tbodytr")[2]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val4=$($($(this).closest(".tbody").find(".tbodytr")[3]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val5=$($($(this).closest(".tbody").find(".tbodytr")[4]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val6=$($($(this).closest(".tbody").find(".tbodytr")[5]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val7=$($($(this).closest(".tbody").find(".tbodytr")[6]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val8=$($($(this).closest(".tbody").find(".tbodytr")[7]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val9=$($($(this).closest(".tbody").find(".tbodytr")[8]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val10=$($($(this).closest(".tbody").find(".tbodytr")[9]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val11=$($($(this).closest(".tbody").find(".tbodytr")[10]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
	val12=$($($(this).closest(".tbody").find(".tbodytr")[11]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".BANKBASEDDTS").val().replace(/,/g,'');
		
	if(val1 == "")
		{
			val1=0;
		}
		if(isNaN(val1))
		{
			val1=0;
		}
		 if(val2 == "")
		{
			val2=0;
		}
		if(isNaN(val2))
		{
			val2=0;
		}
		if(val3 == "")
		{
			val3=0;
		}
		if(isNaN(val3))
		{
			val3=0;
		}
		
		if(val4 == "")
		{
			val4=0;
		}
		if(isNaN(val4))
		{
			val4=0;
		}
		
		if(val5 == "")
		{
			val5=0;
		}
		if(isNaN(val5))
		{
			val5=0;
		}
		
		if(val6 == "")
		{
			val6=0;
		}
		if(isNaN(val6))
		{
			val6=0;
		}
		
		if(val7 == "")
		{
			val7=0;
		}
		if(isNaN(val7))
		{
			val7=0;
		}
		
		if(val8 == "")
		{
			val8=0;
		}
		if(isNaN(val8))
		{
			val8=0;
		}
		
		if(val9 == "")
		{
			val9=0;
		}
		if(isNaN(val9))
		{
			val9=0;
		}
		
		if(val10 == "")
		{
			val10=0;
		}
		if(isNaN(val10))
		{
			val10=0;
		}
		
		if(val11 == "")
		{
			val11=0;
		}
		if(isNaN(val11))
		{
			val11=0;
		}
		if(val12 == "")
		{
			val12=0;
		}
		if(isNaN(val12))
		{
			val12=0;
		}
		
	
		
		amt=parseFloat(val1)+parseFloat(val2)+parseFloat(val3)+parseFloat(val4)+parseFloat(val5)+parseFloat(val6)+parseFloat(val7)+parseFloat(val8)+parseFloat(val9)+parseFloat(val10)+parseFloat(val11)+parseFloat(val12);
		amt=amt/12;
		amt=CURINRCommaSep(parseFloat(amt).toFixed(2));
		
	//	$($($(this).closest(".tbody").find(".tbodytr")[12]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val(amt);
		//amt=CURINRCommaSep(parseFloat(amt).toFixed(0));
		$("#CBBA_BUYSUPPLY").val(amt);
		$("#CBBA_BUYSUPPLY").next().addClass('active');
		
	 var mul=$("#CBBA_BUYSUPPLY").val().replace(/,/g,'');
	 var mul1=$("#CBBA_INDUS").val().replace(/,/g,'');
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
	 var mul2=parseFloat(mul)*parseFloat(mul1)/100;
	 mul2=CURINRCommaSep(parseFloat(mul2).toFixed(2));
	 $("#CBBA_NETPRFT").val(mul2);
	 $("#CBBA_NETPRFT").next().addClass('active'); 
	// $(".MULIN").focusout();
		
});
 
 function GetMarginVal()  
{
var Tybus=$("#CBBA_BTYOFBUS").val();
var result=UI_getdata("TYBUSIN",Tybus,"","","","LSW_SGETFINANCIALVAL");
$("#CBBA_INDUS").val($(result).find("RESULT").text());
$("#CBBA_INDUS").next().addClass('active'); 
 
}

