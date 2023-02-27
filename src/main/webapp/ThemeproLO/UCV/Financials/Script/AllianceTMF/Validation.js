function GridControlDetailTRNOVERI (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
								 
								 if(row[4]=="1" || row[4]=="3" || row[4]=="5" || row[4]=="6" || row[4]=="8")
								 {
									var HTML =	'<span><input type="text" id="TOMI_VALUEI'+rowno+'" disabled  name="TOMI_VALUEI'+rowno+'" maxlength="40" data-item="Amount" class="form-control DSVLBL NoSpecialChar TOM1 form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=TOMI_VALUEI'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=TOMI_VALUEI'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML; 
								 }
								 else
								 {
									var HTML =	'<span><input type="text" id="TOMI_VALUEI'+rowno+'"  name="TOMI_VALUEI'+rowno+'" maxlength="40" data-item="Amount" class="form-control NoSpecialChar TOM1 form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=TOMI_VALUEI'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=TOMI_VALUEI'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML; 
								 }
						    } 
				},
				 { targets: 2, "render": function ( data, type, row, meta ) {                            
							
								 var rowno = meta.row;
                                if(row[4]=="1" || row[4]=="3" || row[4]=="5" || row[4]=="6" || row[4]=="8")
								 {	
						      	 var HTML =	'<span><input type="text" id="TOMI_VALUEII'+rowno+'" disabled  name="TOMI_VALUEII'+rowno+'" maxlength="40" data-item="Amount1" class="form-control DSVLBL NoSpecialChar TOM2 form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=TOMI_VALUEII'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=TOMI_VALUEII'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML; 
								 }	
                                else
                                 {								 
									var HTML =	'<span><input type="text" id="TOMI_VALUEII'+rowno+'"   name="TOMI_VALUEII'+rowno+'" maxlength="40" data-item="Amount1" class="form-control NoSpecialChar TOM2 form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=TOMI_VALUEII'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=TOMI_VALUEII'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML; 
                                 }
						} 
				}
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}

$(document).on("change", ".TOM1", function() {

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
          val1=$("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
	   
	       if(val1 == "")
		    {
		      val1 = "0";
		    }
		}
		if(j==1)
		{
           val2=$("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
	    
	       if(val2 == "")
		   {
		     val2 = "0";
		   }
		}
		
		if(j==2)
		{

	   if(val1 == "")
		{
		  val1 = "0";
		}
	  if(val2 == "")
		{
		  val2 = "0";
		}
		
		Amount=(parseFloat(val1.replace(/,/g,''))/100)*parseFloat(val2.replace(/,/g,''))
		Amount=Amount.toFixed(2);
		
		$("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount))
		}
        if(j==3)
		{
			var val3=$("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
			
		}
		if(j==4)
		{
			
		if(val3=="")
			{
				val3="0";
			}	
		$("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(val3))	
		}
		if(j==5)
		{
        if(Amount=="")
			{
				Amount="0";
			}
		if(val3=="")
			{
				val3="0";
			}
		 Amount = parseFloat(Amount.replace(/,/g,'')) - parseFloat(val3.replace(/,/g,''));
	     Amount=Amount.toFixed(2);
    
     	$("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount));
			
		}
		if(j==6)
		{
			
		 val4=$("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
			
		}
		if(j==7)
		{
			if(val4 == "")
		      {
		       val4 = "0";
		      }
			  
		Amount=parseFloat(Amount.replace(/,/g,''))-parseFloat(val4.replace(/,/g,''));
		Amount=Amount.toFixed(2);

        $("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount));	
		
	    }
	}
});



$(document).on("change", ".TOM2", function() {

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
          val1=$("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
	   
	       if(val1 == "")
		    {
		      val1 = "0";
		    }
		}
		if(j==1)
		{
           val2=$("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
	    
	       if(val2 == "")
		   {
		     val2 = "0";
		   }
		}
		
		if(j==2)
		{

	   if(val1 == "")
		{
		  val1 = "0";
		}
	  if(val2 == "")
		{
		  val2 = "0";
		}
		
		Amount=(parseFloat(val1.replace(/,/g,''))/100)*parseFloat(val2.replace(/,/g,''))
		Amount=Amount.toFixed(2);
		
		$("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount))
		}
        if(j==3)
		{
			var val3=$("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
			
		}
		if(j==4)
		{
			
		if(val3=="")
			{
				val3="0";
			}	
		$("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(val3))	
		}
		if(j==5)
		{
        if(Amount=="")
			{
				Amount="0";
			}
		if(val3=="")
			{
				val3="0";
			}
		 Amount = parseFloat(Amount.replace(/,/g,'')) - parseFloat(val3.replace(/,/g,''));
	     Amount=Amount.toFixed(2);
    
     	$("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount));
			
		}
		if(j==6)
		{
			
		 val4=$("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
			
		}
		if(j==7)
		{
			if(val4 == "")
		      {
		       val4 = "0";
		      }
			  
		Amount=parseFloat(Amount.replace(/,/g,''))-parseFloat(val4.replace(/,/g,''));
		Amount=Amount.toFixed(2);

        $("#"+$($($("#Table4").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount));	
		
	    }
	}
});
