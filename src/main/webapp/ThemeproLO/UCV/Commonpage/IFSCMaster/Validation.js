function ChkIFSCCode()
{
	var IFSC=$("#IFSC").val();
	
	var xml=UI_getdata(IFSC,"","","","","LSW_SCHKIFSCMST")
	
	if($(xml).find('RESULT').text() != "Y")
		{
		//$("#IFSC").attr('disabled',true);
	       var n = document.getElementsByClassName('IFSCD');
          for (i = 0; i < n.length; i++) 
          {
            name = document.getElementsByClassName('IFSCD').item(i).id
          
            var val = $(xml).find(name).text();
          if(val != "")
        	{
            if($("#"+ name).length > 0)
            {
        	  $("#"+ name).val(val); 
        	  $("#"+ name).next().addClass('active');
            }
            if($("#"+ name).is( "select" ))
			{
			var optn="<option  value='"+val+"'>" + val + "</option>"
			if($("#"+name+" option[value='" + val + "']").length==0)
			{
			$("#"+ name).append(optn)
			$("#"+name+" option:contains("+val+")").attr("selected","selected")
			}
			else
				{
				$("#"+name+" option:contains("+val+")").attr("selected","selected")
				}
			
		//	if($("#"+ name).prev('ul').length == 0)
				//{
			$("#"+ name).material_select();
				//}
			}
          }
         }
		}
	else
		{
		 //$("#IFSC").attr('disabled',false);
		 $('.IFSCD').val('');
		 $('.IFSCD').next().removeClass('active');
		 $("#STATE").val('');
		 $("#STATE").material_select();
		}
}

function getStateName()
{
   var xml=UI_getdata("","","","","","LSW_SGETSTATENAME")	
   
    $("#STATE").html("")
	$("#STATE").append($(xml).find("RESULT").html());
	
	var xml1=UI_getdata("","","","","","LSW_SGETBNKNAME")	
   
    $("#BNKNAME").html("")
	$("#BNKNAME").append($(xml1).find("RESULT").html());
}



function GridControlIFSCMST  (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': true,

       "aaSorting": [],

        "pageLength": 10,

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
	   

    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}

function FilterBnkIfsc()
{
	$("#BTNIFSCMST").click();
	oTable = $('#Table2').DataTable();
		$('#SearchTable2').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	
}