$(document).on("click", ".DeleteBrMapRow" , function() {
	var xml1=UI_getdata("Role",$($(this).closest('tr').find('td')[0]).find('input').val(),$("#ROCR_ROLEID").val(),"","","LSW_SCHKPRIMRYVALD");
	if($(xml1).find('RESULT').text()!="ALLOW")
	{
		alert($(xml1).find('RESULT').text());
		return;
	}
	var r = confirm("Are you sure!! to delete the record");
if (r == true) {
var Id=$($(this).closest('tbody tr').find('td')[0]).find('input[type=text]').val()
 oTable = $('#'+ $(this).closest("table").attr("id")).DataTable();
 oTable.row($(this).closest('.tbodytr').index()).remove().draw();
 
 // Id=$($(this).closest('tbody tr').find('td')[0]).find('input[type=text]').val()
 //var Id=$($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find('input[type=text]').val()	
 	 
	var xml=UI_getdata($("#PrcsID").val(),Id,"ROLEUSER","","","LSW_SDELMAPUSERDATA")
} 
	
})






function GetUserMap()
{
  var Name=$("#ROCR_ROLEID").val();


 $("#ROUS_ROLEID").val(Name);
 $("#ROUS_ROLENAME").val(Name);
 $("#ROUS_UNIQID").val($("#ROCR_UNIQID").val())
  $("#UserModalPop").click();

}






function GridControlROLLUSERMAPMAIN (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': true,

       "aaSorting": [],

        "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,
		 "destroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        
        
"aoColumnDefs": [ 
	    { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
		
		   { targets: 0, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text" style="display:none;" id="id'+rowno+'" value="'+data+'"  name="id'+rowno+'" maxlength="10"  disabled class=" DSVLBL form-control NoSpecialChar ROLEID form-control ">';			 
			HTML = HTML + '<div class="">'
			HTML = HTML + '<a>'+data+'</a>'
			HTML = HTML + ' </div></span>'
			
			//HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=id'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=id'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 },
	   
		 { targets: 4, "render": function ( data, type, row, meta ) {                            
                  	 		
                			var rowno = meta.row;	
                       var HTML =	'<span id=""> <img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DeleteBrMapRow  BTNHIDE"  title="Delete" attr-Upd="UCBM_ACTION'+rowno+'"  width="20" height="20"/>';
                         '</span>';		 
                         return HTML;
							 
							 
                         } 
                		 }
		  ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}



function GridControlROLLUSERMAP (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': true,

       "aaSorting": [],

        "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,
		 "destroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        
        
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 3, "render": function ( data, type, row, meta ) {                            
		   var rowno = meta.row;	 
			var HTML =	'<span><input type="checkbox" class="custom-control-input DSVLBL" title="'+row[0]+'" value="'+data+'" name="KYCD_OSV'+rowno+'" id="KYCD_OSV'+rowno+'">';			 
  		HTML = HTML + '<label class="custom-control-label GridLabel" for="KYCD_OSV'+rowno+'"></label></span>';	
    		//var HTML =	'<span><input type="text" id="KYCD_OSV'+rowno+'"  name="KYCD_OSV'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
    			 
    		var htmldata = $(HTML);
 			
 			$(htmldata).find('[name=KYCD_OSV'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
 			
	 return htmldata[0].outerHTML;
  		
  		
  			 return HTML;		
			
         } 
		 }
	        	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}

