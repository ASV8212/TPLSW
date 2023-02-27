function Checkinst(){
	var check=UI_getdata($("#PrcsID").val(),$("#CRPD_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	$("#CRPD_PROINTRATE").val($(check).find ('INTERESTRATE').text());
	$("#CRPD_PROTENTURE").val($(check).find ('TENTURE').text());
	/* var xml=UI_getdata("TYPEBUSINESS1","","","","","LSW_SGETFINANCIALVAL");
    $("#CRPD_TYPEBUSS").html("");
    $("#CRPD_TYPEBUSS").append($(xml).find("RESULT").html());
    $("#CRPD_TYPEBUSS").material_select(); */ 
	
	
}
function GridControlDetailCREDITPD(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,
	   "bSort": false,

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
			{
                targets: 1,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:200px" id="CPDG_PRODUCTS' + rowno + '"  name="CPDG_PRODUCTS' + rowno + '" maxlength="25" class="form-control">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=CPDG_PRODUCTS' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=CPDG_PRODUCTS' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
			{
                targets: 2,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:200px" id="CPDG_QUANTITY' + rowno + '"  name="CPDG_QUANTITY' + rowno + '" maxlength="25" data-item="QUANTITY" class="form-control TOTAMT">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=CPDG_QUANTITY' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=CPDG_QUANTITY' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
			{
                targets: 3,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:200px" id="CPDG_RATE' + rowno + '"  name="CPDG_RATE' + rowno + '" maxlength="25" data-item="RATE" class="form-control TOTAMT">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=CPDG_RATE' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=CPDG_RATE' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
			{
                targets: 4,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:200px" id="CPDG_AMOUNT' + rowno + '" name="CPDG_AMOUNT' + rowno + '" maxlength="25" data-total="CRPD_TOTSTOCKVAL" data-item="AMOUNT" disabled class="form-control">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=CPDG_AMOUNT' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=CPDG_AMOUNT' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            }
			
			
			 
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}

$(document).on("blur", ".TOTAMT", function() {

	var QUANTITY=$($(this).closest('.tbodytr').find('[data-item=QUANTITY]')[0]).val().replace(/,/g,'');
	  
	  if(QUANTITY=="")
	  {
		  QUANTITY=0;
	  }
	
	var RATE=$($(this).closest('.tbodytr').find('[data-item=RATE]')[0]).val().replace(/,/g,'');
	  
	  if(RATE=="")
	  {
		  RATE=0;
	  }

	var AMOUNT=parseFloat(QUANTITY)*parseFloat(RATE)
	$($(this).closest('.tbodytr').find('[data-item=AMOUNT]')[0]).val(CURINRCommaSep(AMOUNT));

	var AmtLngth = $(this).closest('.tbody').find('[data-item=AMOUNT]').length;
	var TOTALSTOCK = 0;
	var val="";
	for (i=0;i<AmtLngth;i++)
		{
		
		val = $($(this).closest('.tbody').find('[data-item=AMOUNT]')[i]).val().replace(/,/g,'');
		
		if (val == "")
			{
			val = 0;
			}
		
		TOTALSTOCK = parseFloat(TOTALSTOCK) + parseFloat(val);
	//var TotalAmountFld = $(this).attr("data-total");
	$("#CRPD_TOTSTOCKVAL").val(CURINRCommaSep(TOTALSTOCK.toFixed(0)));
		}
		
//Arrived Sales
	var TOTSTOCK=$("#CRPD_TOTSTOCKVAL").val().replace(/,/g,'');
	var CIBIL=$("#CRPD_CIBILSCORE").val()
	if (TOTSTOCK == "")
			{
			TOTSTOCK = 0;
			}
	if (CIBIL == "")
			{
			CIBIL = 0;
			}
	if(isNaN(TOTSTOCK))
	{
	TOTSTOCK=0;
	}
	if(isNaN(CIBIL))
	{
	CIBIL=0;
	}
	
	if(CIBIL>=700)
	{
	var ARRIVEDSALE=parseFloat(TOTSTOCK)*2
	}
	else
	{
	var ARRIVEDSALE=parseFloat(TOTSTOCK)*1.5
	}
	if(isNaN(ARRIVEDSALE))
	{
	ARRIVEDSALE=0;
	}
	$("#CRPD_ARRIVEDSALE").val(CURINRCommaSep(ARRIVEDSALE.toFixed(0)));
	GROSSPROFIT();
});

function GROSSPROFIT()
{	
//Gross Profit
		var TYPEBUSI=$("#CRPD_TYPEBUSS").val()
		var ARRISALES=$("#CRPD_ARRIVEDSALE").val().replace(/,/g,'');
	if(isNaN(ARRISALES))
	{
	ARRISALES=0;
	}
		if(TYPEBUSI=="Kirana / Grocery")
		{
		var GROSSPRO=(15/100)*parseFloat(ARRISALES)
		}
		else
		{
		var GROSSPRO=(12/100)*parseFloat(ARRISALES)
		}
	if(isNaN(GROSSPRO))
	{
	GROSSPRO=0;
	}
	$("#CRPD_GROSSPRO").val(CURINRCommaSep(parseFloat(GROSSPRO).toFixed(2)));
	$("#CRPD_GROSSPRO").next().addClass('active');
	NETPROFIT();
}

function NETPROFIT()
{
//Net Profit per month
	var GROSPROFIT=$("#CRPD_GROSSPRO").val().replace(/,/g,'');
	var RENTPERMON=$("#CRPD_RENTPERMON").val().replace(/,/g,'');
	var SALPERMON=$("#CRPD_SALAPERMON").val().replace(/,/g,'');
	var OTHERFIXCOST=$("#CRPD_OTHERFXCOST").val().replace(/,/g,'');
	if (GROSPROFIT == "")
	{
	GROSPROFIT = 0;
	}
	if(isNaN(GROSPROFIT))
	{
	GROSPROFIT=0;
	}
	if (RENTPERMON == "")
	{
	RENTPERMON = 0;
	}
	if (SALPERMON == "")
	{
	SALPERMON = 0;
	}
	if (OTHERFIXCOST == "")
	{
	OTHERFIXCOST = 0;
	}
	var NETPROFIT=parseFloat(GROSPROFIT)-(parseFloat(RENTPERMON)+parseFloat(SALPERMON)+parseFloat(OTHERFIXCOST))
	if(isNaN(NETPROFIT))
	{
	NETPROFIT=0;
	}
	$("#CRPD_NETPROFIT").val(CURINRCommaSep(parseFloat(NETPROFIT).toFixed(2)));
	$("#CRPD_NETPROFIT").next().addClass('active');
	
//DSR
	var OWNHOUSE=$("input[name='CRPD_OWNHOUSE']:checked"). val()
	var NETPRO=$("#CRPD_NETPROFIT").val().replace(/,/g,'');
	if(OWNHOUSE=='Yes')
	{
	var DSR=parseFloat(NETPRO*70/100).toFixed(2)
	}
	else
	{
	var DSR=parseFloat(NETPRO*60/100).toFixed(2)
	}
	if(isNaN(DSR))
	{
	DSR=0;
	}
	$("#CRPD_DSR").val(parseFloat(DSR).toFixed(2));
	$("#CRPD_DSR").next().addClass('active');
	FUNDAVAILEMI();
}
function FUNDAVAILEMI()
{
//Fund available for EMI
	var DSR=$("#CRPD_DSR").val()
	var EMIOBLI=$("#CRPD_EXISTEMIOBLI").val().replace(/,/g,'');
	if (DSR == "")
		{
		DSR = 0;
		}
	if (EMIOBLI == "")
		{
		EMIOBLI = 0;
		}
	var FUNDAVAIL=parseFloat(DSR)-parseFloat(EMIOBLI)
	if(isNaN(FUNDAVAIL))
	{
	FUNDAVAIL=0;
	}
	$("#CRPD_AVALFUND").val(CURINRCommaSep(parseFloat(FUNDAVAIL).toFixed(2)));
	$("#CRPD_AVALFUND").next().addClass('active');
	LOANELIGIBLITY();
}
 
 function GetEmiperlakh()
{
//EMI Per Lakh 
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_SGETLOANDET")
	var LnAmt=100000;
	 var ROI=0;
	 var Tenur=0; 
	 
	ROI=$(xmlSTATUS).find('INTERESTRATE').text();
	Tenur=$(xmlSTATUS).find('TENTURE').text();
	 var result=UI_getdata(ROI,Tenur,LnAmt,$("#PrcsID").val()+'|'+$(".FormPageMultiTab li.active").attr("id"),"","LSW_SGETEMI_DATA");
	 var EMI=$(result).find("EMI").text();
	 	if(EMI=='')
	{
		EMI=0;
	}
	if(isNaN(EMI))
		{
			EMI=0;
		}
	$("#CRPD_EMIPERLAKH").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
	$("#CRPD_EMIPERLAKH").next().addClass('active');
	 //GetMaxEmi();
	 LOANELIGIBLITY();
}
function LOANELIGIBLITY()
{
var AVALFUND=$("#CRPD_AVALFUND").val().replace(/,/g,'');
var EMIPERLAKH=$("#CRPD_EMIPERLAKH").val().replace(/,/g,'');

if (AVALFUND == "")
	{
	AVALFUND = 0;
	}
if (EMIPERLAKH == "")
	{
	EMIPERLAKH = 0;
	}
if(isNaN(AVALFUND))
	{
		AVALFUND=0;
	}
if(isNaN(EMIPERLAKH))
	{
		EMIPERLAKH=0;
	}
var CALC1=Math.min((parseFloat(AVALFUND)/parseFloat(EMIPERLAKH))*100000,300000)

if(isNaN(CALC1))
	{
		CALC1=0;
	}
if(CALC1<100000)
{
	$("#CRPD_LOANEGBLAKH").val(0);
	$("#CRPD_LOANEGBLAKH").next().addClass('active');
}
else
{
	CALC1=Math.round(CALC1/1000) * 1000
	$("#CRPD_LOANEGBLAKH").val(CURINRCommaSep(parseFloat(CALC1).toFixed(2)));
	$("#CRPD_LOANEGBLAKH").next().addClass('active');
}
}