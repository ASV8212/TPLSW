function GridControlDetailMPBFII(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
                               if(row[4]=="2" || row[4]=="4" || row[4]=="6" || row[4]=="7" || row[4]=="9")
							       {
									   var HTML =	'<span><input type="text" id="MPII_VALUEI'+rowno+'" disabled name="MPII_VALUEI'+rowno+'" data-item="Amount" maxlength="40" class="form-control MPBFMII1 DSVLBL NoSpecialChar form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=MPII_VALUEI'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=MPII_VALUEI'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML; 
								   }
								   else
								   {
								 
									var HTML =	'<span><input type="text" id="MPII_VALUEI'+rowno+'"  name="MPII_VALUEI'+rowno+'" data-item="Amount" maxlength="40" class="form-control MPBFMII1 NoSpecialChar form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=MPII_VALUEI'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=MPII_VALUEI'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML; 
								   }
						         } 
								 },
				 { targets: 2, "render": function ( data, type, row, meta ) {                            
								 var rowno = meta.row;	 
								   if(row[4]=="2" || row[4]=="4" || row[4]=="6" || row[4]=="7" || row[4]=="9")
							       {
									  var HTML =	'<span><input type="text" id="MPII_VALUEII'+rowno+'" disabled  name="MPII_VALUEII'+rowno+'" data-item="Amount1" maxlength="40" class="form-control MPBFMII2 DSVLBL NoSpecialChar form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=MPII_VALUEII'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=MPII_VALUEII'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;  
								   }
								   else
								   {
									var HTML =	'<span><input type="text" id="MPII_VALUEII'+rowno+'"   name="MPII_VALUEII'+rowno+'" data-item="Amount1" maxlength="40" class="form-control MPBFMII2 NoSpecialChar form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=MPII_VALUEII'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=MPII_VALUEII'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML; 
								   }
				 } 
			 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}

$(document).on("change", ".MPBFMII1", function() {

		var MPBF1stlen = $(this).closest('.tbody').find('[data-item=Amount]').length;
		
		var Amount = "0";
	    var val1="0";
		var val2="0";
		var val4="0";
		var val5="0";
		var val6="0";
		var val8="0";

	for (j=0;j<MPBF1stlen;j++)
	{
		//.find('[data-item=Amount]')[i]).val().replace(/,/g,'')
		if(j==0)
		{
       val1=$("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
	   
	   if(val1 == "")
		{
		  val1 = "0";
		}
		
		}
		
		if(j==1)
		{

	   if(val1 == "")
		{
		  val1 = "0";
		}
		
		Amount=parseFloat(val1)*75/100
		Amount=Amount.toFixed(2);
		
		$("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount))
		
		  val2=$("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
		}
		
        if(j==2)
		{
			
			var val3=$("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
			
		}
		if(j==3)
		{
			
		if(val2=="")
			{
				val2="0";
			}
		if(val3=="")
			{
				val3="0";
			}
		 Amount = parseFloat(val2.replace(/,/g,'')) - parseFloat(val3.replace(/,/g,''));
	     Amount=Amount.toFixed(2);
    
     	$("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount));
			
		}
		if(j==4)
		{
			
		 val4=$("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
			
		}
		if(j==5)
		{
			if(val4 == "")
		      {
		       val4 = "0";
		      }
		 $("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(val4));	
		}
		if(j==6)
		{
			if(val4 == "")
		      {
		       val4 = "0";
		      }
			  
		Amount=parseFloat(Amount.replace(/,/g,''))-parseFloat(val4.replace(/,/g,''));
		Amount=Amount.toFixed(2);

        $("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount));	
		
	    }
		if(j==7)
		{
		   val5=$("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
		}
		if(j==8)
		{
			if(Amount=="")
			{
				Amount="0";
			}
			if(val5=="")
			{
				val5="0";
			}
			
		  Amount=parseFloat(val5.replace(/,/g,''))-parseFloat(Amount.replace(/,/g,''));
          Amount=Amount.toFixed(2);		
		  $("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount))
		}
	}
});

$(document).on("change", ".MPBFMII2", function() {

		var MPBF1stlen = $(this).closest('.tbody').find('[data-item=Amount1]').length;
		
		var Amount = "0";
	    var val1="0";
		var val2="0";
		var val4="0";
		var val5="0";
		var val6="0";
		var val8="0";

	for (j=0;j<MPBF1stlen;j++)
	{
		//.find('[data-item=Amount]')[i]).val().replace(/,/g,'')
		if(j==0)
		{
       val1=$("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
	   
	   if(val1 == "")
		{
		  val1 = "0";
		}
		
		}
		
		if(j==1)
		{

	   if(val1 == "")
		{
		  val1 = "0";
		}
		
		Amount=parseFloat(val1)*75/100
		Amount=Amount.toFixed(2);
		
		$("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount))
		
		  val2=$("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
		}
		
        if(j==2)
		{
			
			var val3=$("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
			
		}
		if(j==3)
		{
			
		if(val2=="")
			{
				val2="0";
			}
		if(val3=="")
			{
				val3="0";
			}
		 Amount = parseFloat(val2.replace(/,/g,'')) - parseFloat(val3.replace(/,/g,''));
	     Amount=Amount.toFixed(2);
    
     	$("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount));
			
		}
		if(j==4)
		{
			
		 val4=$("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
			
		}
		if(j==5)
		{
			if(val4 == "")
		      {
		       val4 = "0";
		      }
		 $("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(val4));	
		}
		if(j==6)
		{
			if(val4 == "")
		      {
		       val4 = "0";
		      }
			  
		Amount=parseFloat(Amount.replace(/,/g,''))-parseFloat(val4.replace(/,/g,''));
		Amount=Amount.toFixed(2);

        $("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount));	
		
	    }
		if(j==7)
		{
		   val5=$("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
		}
		if(j==8)
		{
			if(Amount=="")
			{
				Amount="0";
			}
			if(val5=="")
			{
				val5="0";
			}
			
		  Amount=parseFloat(val5.replace(/,/g,''))-parseFloat(Amount.replace(/,/g,''));
          Amount=Amount.toFixed(2);		
		  $("#"+$($($("#Table3").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount))
		}
	}
});
