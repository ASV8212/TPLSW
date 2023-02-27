function GridControlDetailELIGCALCI(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm){
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
								if(row[4]=="3" || row[4]=="6" || row[4]=="7" || row[4]=="9")		
								{
									var HTML =	'<span><input type="text" id="EGCI_VALUEI'+rowno+'" disabled name="EGCI_VALUEI'+rowno+'" maxlength="40" data-item="Amount" class="form-control ECAP1 DSVLBL NoSpecialChar form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=EGCI_VALUEI'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=EGCI_VALUEI'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML; 
								}
								else
								{
									var HTML =	'<span><input type="text" id="EGCI_VALUEI'+rowno+'"  name="EGCI_VALUEI'+rowno+'" maxlength="40" data-item="Amount" class="form-control ECAP1 NoSpecialChar form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=EGCI_VALUEI'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=EGCI_VALUEI'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML; 
								}
						    } 
				},
				 { targets: 2, "render": function ( data, type, row, meta ) {                            
							
								 var rowno = meta.row;	 
							if(row[4]=="3" || row[4]=="6" || row[4]=="7" || row[4]=="9")		
								{
									var HTML =	'<span><input type="text" id="EGCI_VALUEII'+rowno+'" disabled  name="EGCI_VALUEII'+rowno+'" maxlength="40" data-item="Amount1" class="form-control DSVLBL ECAP2 NoSpecialChar form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=EGCI_VALUEII'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=EGCI_VALUEII'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;
								}
								else
								{
									var HTML =	'<span><input type="text" id="EGCI_VALUEII'+rowno+'"   name="EGCI_VALUEII'+rowno+'" maxlength="40" data-item="Amount1" class="form-control ECAP2 NoSpecialChar form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=EGCI_VALUEII'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=EGCI_VALUEII'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML; 
								}
						} 
				}
					 ],

         "fnDrawCallback": function (oSettings) {
        	 

        }

        });
		}
		
		
		$(document).on("change", ".ECAP1", function() {

		var MPBF1stlen = $(this).closest('.tbody').find('[data-item=Amount]').length;
		
		var Amount = "0";
		var Amount1 = "0";
	    var val1="0";
		var val2="0";
		var val4="0";
		var val5="0";
		var val6="0";
		var val7="0";
		var val8="0";

	for (j=0;j<MPBF1stlen;j++)
	{
		//.find('[data-item=Amount]')[i]).val().replace(/,/g,'')
		if(j==0)
		{
          val1=$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
	   
	       if(val1 == "")
		    {
		      val1 = "0";
		    }
		}
		if(j==1)
		{
           val2=$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
	    
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
		
		Amount=parseFloat(val1.replace(/,/g,''))/(365/(parseFloat(val2.replace(/,/g,''))))
		Amount=Amount.toFixed(2);
		
		$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount))
		}
		
		if(j==3)
		{
          val3=$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
	   
	       if(val3 == "")
		    {
		      val3 = "0";
		    }
		}
		if(j==4)
		{
           val4=$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
	    
	       if(val4 == "")
		   {
		     val4 = "0";
		   }
		}

		if(j==5)
		{
			
		if(val3=="")
			{
				val3="0";
			}	
		if(val4=="")
			{
				val4="0";
			}
			Amount1=parseFloat(val3.replace(/,/g,''))*(parseFloat(val4.replace(/,/g,'')))
			
			if(Amount1=="")
			{
				Amount1="0";
			}
			
		$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount1))	
		}
		if(j==6)
		{
        if(Amount=="")
			{
				Amount="0";
			}
		if(Amount1=="")
			{
				Amount1="0";
			}
			
		  Amount = parseFloat(Amount.replace(/,/g,'')) - parseFloat(Amount1);
		  
	     Amount=Amount.toFixed(2);
    
     	$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount));
			
		}
		if(j==7)
		{
			
		 val7=$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val()
			
		}
		if(j==8)
		{
			if(val7 == "")
		      {
		       val7 = "0";
		      }
		Amount=parseFloat(val7.replace(/,/g,''))-parseFloat(Amount.replace(/,/g,''));
		Amount=Amount.toFixed(2);

        $("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount]')[0]).attr('id')).val(CURINRCommaSep(Amount));	
		
	    }
	}
});



$(document).on("change", ".ECAP2", function() {

		var MPBF1stlen = $(this).closest('.tbody').find('[data-item=Amount1]').length;
		
		var Amount = "0";
		var Amount1 = "0";
	    var val1="0";
		var val2="0";
		var val4="0";
		var val5="0";
		var val6="0";
		var val7="0";
		var val8="0";

	for (j=0;j<MPBF1stlen;j++)
	{
		//.find('[data-item=Amount]')[i]).val().replace(/,/g,'')
		if(j==0)
		{
          val1=$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
	   
	       if(val1 == "")
		    {
		      val1 = "0";
		    }
		}
		if(j==1)
		{
           val2=$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
	    
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
		
		Amount=parseFloat(val1.replace(/,/g,''))/(365/(parseFloat(val2.replace(/,/g,''))))
		Amount=Amount.toFixed(2);
		
		$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount))
		}
		
		if(j==3)
		{
          val3=$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
	   
	       if(val3 == "")
		    {
		      val3 = "0";
		    }
		}
		if(j==4)
		{
           val4=$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
	    
	       if(val4 == "")
		   {
		     val4 = "0";
		   }
		}

		if(j==5)
		{
			
		if(val3=="")
			{
				val3="0";
			}	
		if(val4=="")
			{
				val4="0";
			}
			Amount1=parseFloat(val3.replace(/,/g,''))*(parseFloat(val4.replace(/,/g,'')))
			
			if(Amount1=="")
			{
				Amount1="0";
			}
			
		$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount1))	
		}
		if(j==6)
		{
        if(Amount=="")
			{
				Amount="0";
			}
		if(Amount1=="")
			{
				Amount1="0";
			}
			
		  Amount = parseFloat(Amount.replace(/,/g,'')) - parseFloat(Amount1);
		  
	     Amount=Amount.toFixed(2);
    
     	$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount));
			
		}
		if(j==7)
		{
			
		 val7=$("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val()
			
		}
		if(j==8)
		{
			if(val7 == "")
		      {
		       val7 = "0";
		      }
		Amount=parseFloat(val7.replace(/,/g,''))-parseFloat(Amount.replace(/,/g,''));
		Amount=Amount.toFixed(2);

        $("#"+$($($("#Table7").find('tbody tr')[j]).find('[data-item=Amount1]')[0]).attr('id')).val(CURINRCommaSep(Amount));	
		
	    }
	}
});
