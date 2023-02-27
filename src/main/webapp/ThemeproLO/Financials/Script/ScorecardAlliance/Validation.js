
function GridControlDetailRCU (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			{ targets: 2, "width":"33.33%", "render": function ( data, type, row, meta ) {
				var rowno = meta.row;
				var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary"  onchange = "OnChngDrpDwn(this)" id="CRSC_WEIGHT'+rowno+'" name="CRSC_WEIGHT">';
				HTML = HTML + '<option value="">Select</option>';
				/*if(row[0]=="IMP001")
				{
					HTML = HTML + imp1
				}
				else if(row[0]=="IMP002")
				{
					HTML = HTML + imp1
				}
				else if(row[0]=="IMP003")
				{
					HTML = HTML + imp1
				}
				else if(row[0]=="IMP004")
				{
					HTML = HTML + imp4
				}
				else if(row[0]=="IMP006")
				{
					HTML = HTML + imp6
				}*/
				HTML = HTML +GetDropDwn(row[1]);
				HTML=HTML+ '</select></span>';      			
       	       			var htmldata = $(HTML);
       	       			
       	       			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

       	  	 return htmldata[0].outerHTML;
			 }
			 }
		 
		
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 
 }

 function GetBorowClass()
{
	  
	var borowclass = UI_getdata("BORROWCLASS","","","","","LSW_SGETPRODVAL");
    $("#BOCL_BOROWCLASS").html("");
	$("#BOCL_BOROWCLASS").append($(borowclass).find("RESULT").html());
	$("#BOCL_BOROWCLASS").material_select(); 
}
 function GetSector()
{
	  
	var borowclass = UI_getdata("SECTORBR","","","","","LSW_SGETPRODVAL");
    $("#BOCL_SECTOR").html("");
	$("#BOCL_SECTOR").append($(borowclass).find("RESULT").html());
	$("#BOCL_SECTOR").material_select(); 
}



function LIMITELIGIBLE()
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
	

}


function GetDropDwn(Hdr){
	var optn="";
	for(var i =0;i<obj.DRPDOWN.length;i++)
	{
		if(obj.DRPDOWN[i][Hdr] === undefined)
		{
		
		}
		else
		{
			for(var j=0;j<obj.DRPDOWN[i][Hdr].length;j++)
			{
				optn = optn+'<option value="'+obj.DRPDOWN[i][Hdr][j].KEY+'">'+obj.DRPDOWN[i][Hdr][j].KEY+'</option>'
			}
			break;
		}
	}
	return optn;
}

function OnChngDrpDwn(Evnt){
	var Hdr = $($(Evnt).closest(".tbodytr").find(".tbodytrtd")[1]).text();
	
	var EvntVal = Evnt.value;
	var op = "";
	for(var i =0;i<obj.DRPDOWN.length;i++)
	{
		if(obj.DRPDOWN[i][Hdr] === undefined)
		{
		
		}
		else
		{
			for(var j=0;j<obj.DRPDOWN[i][Hdr].length;j++)
			{
				if(obj.DRPDOWN[i][Hdr][j].KEY == EvntVal)
				{
					$(Evnt).closest(".tbodytrtd").next().text(obj.DRPDOWN[i][Hdr][j].SCORE);
					break;
				}
			}
		}
	}
	reCompFinlScr();
	
}

function reCompFinlScr(){
	var finlscr = 0;
	for(var z = 0;z<$("#Table2").find(".tbodytr").length;z++)
	{
		if($($($("#Table2").find(".tbodytr")[z]).find(".tbodytrtd")[3]).text() != "")
		{
			finlscr = finlscr+parseInt($($($("#Table2").find(".tbodytr")[z]).find(".tbodytrtd")[3]).text())
		}
	}
	$("#CRSM_FINLSCR").val(finlscr);
}