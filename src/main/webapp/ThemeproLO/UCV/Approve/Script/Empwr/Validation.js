function GridControlDetail_EMPOWERMNTGRD(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

    popTableModPageGrid1 = $('#' + TableID).DataTable({

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



        "aoColumnDefs": [{
                "sClass": "dpass",
                "aTargets": jQuery.parseJSON(hideClm)
            },

            
            {
                targets: 2,
                "render": function(data, type, row, meta) {

                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "" id="APED_REMARK' + rowno + '"  name="APED_REMARK' + rowno + '"  class="form-control  form-control ">';
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=APED_REMARK' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=APED_REMARK' + rowno + ']').attr("value", data);


                    return htmldata[0].outerHTML;

                }
            },
			 {
                targets: 5,
                "render": function(data, type, row, meta) {

                     var rowno = meta.row;		 
    	        		var HTML =	'<span><input type="checkbox" class="custom-control-input VRFY" value="'+data+'" name="APED_VERIFY'+ rowno + '" id="APED_VERIFY'+rowno+'">';			 
    	        		HTML = HTML + '<label class="custom-control-label GridLabel" for="APED_VERIFY'+rowno+'"></label></span>';			  
    	        		    
    	        		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
    	        		
    	        		var htmldata = $(HTML);
    	       			
    	       			$(htmldata).find('[name=APED_VERIFY' + rowno + '][value="true"]').attr('checked', 'checked');       			       			
    	       			
    	    	 return htmldata[0].outerHTML;
    	        		
    	        		
    	        			 return HTML;

                }
            }
        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}

function GridControlDetailMNUEMPOWERMNT(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

//var Level = UI_getdata($("#PrcsID").val(),"","","","","LSW_SMUNDEVILVEL");
	//Level=$(Level).find("RESULT").html();

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
			
			
			
        ],
        "fnDrawCallback": function(oSettings) {
			
			
			
        }
    });
}

function GridControlDetailMNUEMPOWERMNT (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	var Level = UI_getdata($("#PrcsID").val(),"","","","","LSW_SMUNDEVILVEL");
	Level=$(Level).find("RESULT").html();
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
  
	   { targets: 0, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="AEMD_EMPOWTYP'+rowno+'" style=""  name="AEMD_EMPOWTYP"  class="form-control ManuMiti ">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=AEMD_EMPOWTYP]').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=AEMD_EMPOWTYP]').attr("value",data);
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;       			 
			   var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary"  id="AEMD_LEVEL'+rowno+'" name="AEMD_LEVEL">';
	                   HTML = HTML + '<option value="">Select</option>';
	                   HTML = HTML + Level     			
		 			var htmldata = $(HTML);
		 			
		 			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

		          return htmldata[0].outerHTML;  
					
		         } 
				 },
				 { targets: 2, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="AEMD_METIGANTS'+rowno+'" style=""  name="AEMD_METIGANTS"  class="form-control ManuMiti  form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=AEMD_METIGANTS]').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=AEMD_METIGANTS]').attr("value",data);
							return htmldata[0].outerHTML;   		
							
				         } 
						 },
						  { targets: 3, "render": function ( data, type, row, meta )
		       			 {
		       				var rowno = meta.row; 
                            var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DelGridrow DELBTN" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
		        				HTML = HTML + '</span>';  
		        				var htmldata = $(HTML);				
		        				return htmldata[0].outerHTML;
		       				

		       				  
		       			 }
		           	  }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}


function CheckManualEmpowMndtry(TableID,FldClas,HDR)
{
	  var Doclength=$("#"+TableID).find(".tbodytr").length
	  
	  var RTNVAL="";
	  
	  if(RTNVAL=="")
		  {
	  for(i=0;i<Doclength;i++)
		  {
		  var tdcount=$($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd').length
		   
		  for(j=0;j<tdcount;j++)
			 {
			  if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).length>0)
				  {
			if(j==0){
		          if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[0]).find('input[type=text]').val()=="")
		             {
			             RTNVAL = "Fill the Mitigant for Manual Empowerment";
				    		return RTNVAL;
		             }
                 }
          else if(j==2){
		          if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[2]).find('input[type=text]').val()=="")
		             {
			             RTNVAL = "Fill the Mitigant for Manual Empowerment";
				    		return RTNVAL;
		             }
                 }
				}
			 }
		  }
		 }
	 return RTNVAL;
}



function RechkApprlNote()
{
	$("#AAPR_APROVBTN").val("");
}



	$(document).on("change", ".VRFY", function() {
		
		if($(this).prop("checked")==true)
			{
			 op=UI_getdata("",$($(this).closest('.tbodytr').find('.tbodytrtd')[3]).text(),"","","","LSW_SCHECKMETIGANTLVL");
			 $($(this).closest('.tbodytr').find('.tbodytrtd')[6]).text($(op).find("LVL").text())
			}
		else{
			 $($(this).closest('.tbodytr').find('.tbodytrtd')[6]).text($($(this).closest('.tbodytr').find('.tbodytrtd')[4]).text())
		   }
});

