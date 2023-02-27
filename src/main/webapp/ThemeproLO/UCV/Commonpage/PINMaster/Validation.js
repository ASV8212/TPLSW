function ChkPINCode()
{
	var IFSC=$("#pincode").val();
	
	var xml=UI_getdata(IFSC,"","","","","LSW_SCHKPINMST")
	
	if($(xml).find('RESULT').text() != "Y")
		{
		//$("#pincode").attr('disabled',true);
	       var n = document.getElementsByClassName('PIND');
          for (i = 0; i < n.length; i++) 
          {
            name = document.getElementsByClassName('PIND').item(i).id
          
            var val = $(xml).find(name).text();
 
            if(name != "")
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
		 //$("#pincode").attr('disabled',false);
		 $('.PIND').val('');
		 $('.PIND').next().removeClass('active');
		 $("#statename").val('');
		 $("#statename").material_select();
		}
}

function getStateName()
{
   var xml=UI_getdata("","","","","","LSW_SGETSTATENAME")	
   
    $("#statename").html("")
	$("#statename").append($(xml).find("RESULT").html());
	
	
	
	
	  var xml=UI_getdata("","","","","","LSW_SGETSTATENAMEDROP")
	$("#statenameDrop").html("")
	$("#statenameDrop").append($(xml).find("RESULT").html());
}

function ChkPINdropdown()
{
	
FncallMyAppl(this,'Table3',{spname:'LSW_SGETPINVIEW',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#statenameDrop').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','DocumentPIN');


oTable = $('#Table3').DataTable();
		$('#SearchTable3').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	
	
}

function GridControlDocumentPIN (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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