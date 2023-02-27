
 
function GridControlDetailSTPBRE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
   
		 { targets: 3, "width":"25%", "render": function ( data, type, row, meta ) {		
				var rowno = meta.row;			
				var HTML = '<span>';
				if(row[3] == "PASSED")
				{
					HTML = HTML+'<span ><div class = "IBtxt2_G">'+data+'</div></span>';
				}
				else if(row[3] == "FAILED")
				{
					HTML = HTML+'<span ><div class = "IBtxt2_R">'+data+'</div></span>';
				}
				else
				{
					HTML = HTML+'<span ><div class = "IBtxt2_O">'+data+'</div></span>';
				}
                    /* HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=IPRG_DOWNSTRM]').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=IPRG_DOWNSTRM]').attr("value", data);


                    return htmldata[0].outerHTML; */
				 var htmldata = $(HTML);

       	  	 return htmldata[0].outerHTML;
			}
			}
		
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 
 }

 /* function GetBorowClass()
{
	  
	var borowclass = UI_getdata("BORROWCLASS","","","","","LSW_SGETPRODVAL");
    $("#BOCL_BOROWCLASS").html("");
	$("#BOCL_BOROWCLASS").append($(borowclass).find("RESULT").html());
	$("#BOCL_BOROWCLASS").material_select(); 
} */
 /* function GetSector()
{
	  
	var borowclass = UI_getdata("SECTORBR","","","","","LSW_SGETPRODVAL");
    $("#BOCL_SECTOR").html("");
	$("#BOCL_SECTOR").append($(borowclass).find("RESULT").html());
	$("#BOCL_SECTOR").material_select(); 
} */



/* function LIMITELIGIBLE()
{
	
	var TYPEVECHILE=$("#MANU_TYOFVEHICLE").val()
	var NOOFVECHILE=$("#MANU_NOOFVEHICLE").val()
	var VECHILAMT=0;
	if(TYPEVECHILE=="LCV")
	{
	VECHILAMT=25000	
	}
	else if(TYPEVECHILE=="ICV")
	{
	VECHILAMT=40000	
	}
	else if(TYPEVECHILE=="HCV")
	{
	VECHILAMT=50000
	}
	
	
	var TOTAL=parseFloat(NOOFVECHILE)*parseFloat(VECHILAMT);
	var FUNDAMT=$("#MANU_MAXFUNSCH").val().replace(/,/g,'');
	var LONAMT=$("#DMY3").val().split('|')[0]
	
	
	if(isNaN(TOTAL))
	{
		FUNDAMT=0;
	}
	
	
	
	if(isNaN(TOTAL))
	{
		TOTAL=0;
	}
	
	if(isNaN(LONAMT))
	{
		LONAMT=0;
	}
	
	
	
	var num4 = Math.min(FUNDAMT, TOTAL, LONAMT);
	
	$("#MANU_LIMITELIGI").val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	$("#MANU_LIMITELIGI").next().addClass('active');
	
	$("#MANU_MAXFUNDALLOW").val(CURINRCommaSep(parseFloat(num4).toFixed(2)));
	$("#MANU_MAXFUNDALLOW").next().addClass('active');
	

} */