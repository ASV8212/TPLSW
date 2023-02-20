function GridControlDetailMPBFI(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
							if( row[4]=="3" || row[4]=="4" || row[4]=="5" || row[4]=="7" || row[4]=="8" || row[4]=="10" )
							{
							  var HTML =	'<span><input type="text" id="MPMI_VALUEI'+rowno+'" name="MPMI_VALUEI'+rowno+'" disabled data-item="Amount" maxlength="40" class="form-control DSVLBL MPBFM1 NoSpecialChar form-control">';			 
								 HTML = HTML + '</span>'; 
										 
								var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=MPMI_VALUEI'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=MPMI_VALUEI'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;
							}
							else
							{
								
									var HTML =	'<span><input type="text" id="MPMI_VALUEI'+rowno+'" name="MPMI_VALUEI'+rowno+'" data-item="Amount" maxlength="40" class="form-control MPBFM1 NoSpecialChar form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=MPMI_VALUEI'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=MPMI_VALUEI'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML; 
							}
						         } 
								 },
				 { targets: 2, "render": function ( data, type, row, meta ) {                            
							
								 var rowno = meta.row;	
                                  if(row[4]=="3" || row[4]=="4" || row[4]=="5" || row[4]=="7" || row[4]=="8" || row[4]=="10")
							       {
									   var HTML =	'<span><input type="text" id="MPMI_VALUEII'+rowno+'" disabled name="MPMI_VALUEII'+rowno+'" data-item="Amount1" maxlength="40" class="form-control DSVLBL MPBFM2 NoSpecialChar form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=MPMI_VALUEII'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=MPMI_VALUEII'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;
								   }
								 else
								 {
									var HTML =	'<span><input type="text" id="MPMI_VALUEII'+rowno+'" name="MPMI_VALUEII'+rowno+'" data-item="Amount1" maxlength="40" class="form-control MPBFM2 NoSpecialChar form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=MPMI_VALUEII'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=MPMI_VALUEII'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;
								 }										
						      } 
					}
     	
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
 }
 
 $(document).on("change", ".MPBFM1", function() {

		var MPBF1stlen = $(this).closest('.tbody').find('[data-item=Amount]').length;
		
		var Amount = "0";
	    var val1="0";
		var val2="0";
		var val5="0";
		var val6="0";
		var val8="0";

	for (j=0;j<MPBF1stlen;j++)
	{
		//.find('[data-item=Amount]')[i]).val().replace(/,/g,'')
		if(j==0)
		{
       val1=$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
	   
	   if(val1 == "")
		{
		  val1 = "0";
		}
		}
		
		if(j==1)
		{
       val2=$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
	   
	   if(val2 == "")
		{
		  val2 = "0";
		}
		}
		
        if(j==2)
		{
		 Amount = parseFloat(val1.replace(/,/g,'')) - parseFloat(val2.replace(/,/g,''));
	     Amount=Amount.toFixed(2);
    
     	$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount));
		}
		
		if(j==3)
		{
			var val3=$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
			if(val3 == "")
		      {
		       val3 = "0";
		      }
			  
			var Amount = parseFloat(Amount.replace(/,/g,'')) *($("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()/100)
	    }
		if(j==4)
		{
			Amount=Amount.toFixed(2);
		  $("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount));
		}
		if(j==5)
		{
		   val5=$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
		}
		if(j==6)
		{
			if(val5=="")
			{
			  val5="0";	
			}
			val5=val5;
			$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(val5))
		}
		if(j==7)
		{
			if(Amount=="")
			{
				Amount="0";
			}
			if(val5=="")
			{
				val5="0";
			}
			
		  Amount=parseFloat(Amount.replace(/,/g,''))-parseFloat(val5.replace(/,/g,''));
          Amount=Amount.toFixed(2);		
		  $("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount))
		}
		if(j==8)
		{
		 val8=$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
		}
		if(j==9)
		{
			if(Amount=="")
			{
				Amount="0";
			}
			if(val8=="")
			{
				val8="0";
			}
			Amount=parseFloat(val8.replace(/,/g,''))-parseFloat(Amount.replace(/,/g,''));
			Amount=Amount.toFixed(2);	
		 val8=$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount))
		}
	}
});

$(document).on("change", ".MPBFM2", function() {

		var MPBF1stlen = $(this).closest('.tbody').find('[data-item=Amount1]').length;
		
		var Amount = "0";
	    var val1="0";
		var val2="0";
		var val5="0";
		var val6="0";
		var val8="0";

	for (j=0;j<MPBF1stlen;j++)
	{
		//.find('[data-item=Amount]')[i]).val().replace(/,/g,'')
		if(j==0)
		{
       val1=$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
	   
	   if(val1 == "")
		{
		  val1 = "0";
		}
		}
		
		if(j==1)
		{
       val2=$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
	   
	   if(val2 == "")
		{
		  val2 = "0";
		}
		}
		
        if(j==2)
		{
		 Amount = parseFloat(val1.replace(/,/g,'')) - parseFloat(val2.replace(/,/g,''));
	     Amount=Amount.toFixed(2);
    
     	$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount));
		}
		
		if(j==3)
		{
			var val3=$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
			if(val3 == "")
		      {
		       val3 = "0";
		      }
			  
			var Amount = parseFloat(Amount.replace(/,/g,'')) *($("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()/100)
	    }
		if(j==4)
		{
			Amount=Amount.toFixed(2);
		  $("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount));
		}
		if(j==5)
		{
		   val5=$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
		}
		if(j==6)
		{
			if(val5=="")
			{
			  val5="0";	
			}
			val5=val5;
			$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(val5))
		}
		if(j==7)
		{
			if(Amount=="")
			{
				Amount="0";
			}
			if(val5=="")
			{
				val5="0";
			}
			
		  Amount=parseFloat(Amount.replace(/,/g,''))-parseFloat(val5.replace(/,/g,''));
          Amount=Amount.toFixed(2);		
		  $("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount))
		}
		if(j==8)
		{
		 val8=$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
		}
		if(j==9)
		{
			if(Amount=="")
			{
				Amount="0";
			}
			if(val8=="")
			{
				val8="0";
			}
			Amount=parseFloat(val8.replace(/,/g,''))-parseFloat(Amount.replace(/,/g,''));
			Amount=Amount.toFixed(2);	
		 val8=$("#"+$($($("#Table2").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount))
		}
	}
});
