
////For Text Data Gird Start
function FncallwebserviceTxtGrid(cntrl,fnname, par, control1,hdncolumn,enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

if(par.Mode!=undefined)
{
hdncolumn = par.Mode;
}

	//    $("#popup").dialog("open");

   // var
  
    $.ajax({
        url: "/ThemePro_LSW/GridView",
        type: "POST",
        async: false,
        //        data: par,
        data: par,
        //data: "{}",
      //  contentType: "application/json; charset=utf-8",
        //contentType: "application/json; charset=utf-8",
        //dataType: "json",
        success: function (result) {
        	
        	// result = result.replace(/>null</g,"><");
        	//var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
        	//return;
        //    if (JSON.stringify(json.a) === '{}') {
          //      alert(LoadFrmXML("V0072"))

          //  }
          //  else {
                //$("#popup").dialog();
               // $("#popup").dialog("option", "width", 805);
               // $("#popup").dialog("option", "closeOnEscape", true);
                //$("#popup").dialog("option", "position", { my: "left top", at: "left bottom", of: $(cntrl) });
				
				
                handlejsonTxtGrid(result,fnname, control1, hdncolumn, enablecontrol);
           // }
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}
////For Text Data Gird End


//Text Grid Start

function handlejsonTxtGrid(result,TableID, curcontl, hdncolumn, enablecontrol) {

var lastsel2;

   var dtData = [];
    var count = 0;
	
    //to re-init datatable


   // myData = JSON.parse(result.d);
//
    myData = $(result);
    
    var entry;
    var name;
    entry = myData[0];

    for (name in entry) {
        if (entry.hasOwnProperty(name)) {
            dtData1[count] = name;
            count++;
            //dtData1.push(name);

        }

    }

	$('#' + TableID).jqGrid("clearGridData");
   $('#' + TableID).jqGrid('GridDestroy');
    $('#' + TableID).empty();
    $("#gbox_"+TableID).empty();
	
	 var table = document.createElement('table');
    table.id = TableID
    $("#customGrid").append(table);
	 //$('#gbox_Table2').fnDestroy();
	// $('#' + TableID).empty();

var a=$.parseJSON($(result).find('Header').text());

var Val=$(result).find('ColModel').text()
var Model = '[' + Val +']'
var b = $.parseJSON(Model)


var Data=$(result).find('Data').text();
var c = eval(Data)

var Height=$(result).find('Height').text();
var Width=$(result).find('Width').text();
var Caption=$(result).find('Title').text();




    jQuery("#"+TableID).jqGrid({
	datatype: "local",
	width:Width,
	height: Height,
   	colNames:a,
   	colModel:b,

    cellEdit: function (domElem) {
        $(domElem).addClass("ui-state-highlight");
			},

	
	onSelectRow: function(id){
		if(id && id!==lastsel2){
			//jQuery('#rowed5').jqGrid('restoreRow',lastsel2);
			
			/// To Save Row Data Start
			if(lastsel2!=undefined)
			{
			
			
			var Txtid=$(this).attr('id');
			//	var LstTR=lastsel2
				var CrntTR=lastsel2
				// $("#"+Txtid).closest('td').attr('title',$('#'+Txtid).val())
	 // $("#"+Txtid).closest('td').text($('#'+Txtid).val())
	  
                //alertify.alert('1');

				//jQuery('#rowed5').jqGrid('saveRow','jqg1');
				var table = $("#"+id).closest('table');
		
		var tmp = "<row>";//$.parseJSON("{\"Paticulars\":\"Financial Year\",\"Year1\":\"Year1\",\"Year2\":\"Year2\",\"Year3\":\"Year3\"}");
		var Val="";
		
for(i=0;i< $($("#gview_"+TableID).find('table')[0]).find('thead').find('th').length;i++)
{		

if($($("#"+CrntTR).find('td')[i]).find('input').length==0)
{
if($($("#"+CrntTR).find('td')[i]).find('textarea').length!=0)
{
Val=$($("#"+CrntTR).find('td')[i]).find('textarea').val()

}
else if($($("#"+CrntTR).find('td')[i]).find('select').length!=0)
{
Val=$($("#"+CrntTR).find('td')[i]).find('select').val()

}
else
{
Val=$($("#"+CrntTR).find('td')[i]).text();
}
}
else
{
Val=$($("#"+CrntTR).find('td')[i]).find('input').val();
}

tmp = tmp + "<"+$($($("#gview_"+TableID).find('table')[0]).find('thead').find('th')[i]).attr('id').replace(TableID+'_','')+">" +
Val+
"</"+$($($("#gview_"+TableID).find('table')[0]).find('thead').find('th')[i]).attr('id').replace(TableID+'_','')+">"
		
	
	
	
}				
tmp = tmp + "</row>";		
			var json = $.xml2json(tmp.replace(/&/g,"and"));
			//tmp=tmp
			//tmp = tmp + "}";	
			
			$(table).jqGrid("setRowData",CrntTR,json);
				
				$("#"+CrntTR).attr("editable","0");
				
	
			
			/// To Save Row Data End
			
			
			
			
			
			}
			
			
			jQuery('#'+TableID).jqGrid('editRow',id,true);
			//jQuery('#rowed5').jqGrid('saveCell',id,true);
								
			lastsel2=id;
		}
	
		
	},
	//toolbar: [true,"top"],
	caption: Caption

});

var mydata2 = c;
		
		
for(var i=0;i < mydata2.length;i++)
 jQuery("#"+TableID).jqGrid('addRowData',mydata2[i].id,mydata2[i]);
   
  
  
if(hdncolumn != undefined)
{  

hdncolumn=hdncolumn.split('|')[1];

if(hdncolumn!="Static")
{	
var Add='&nbsp; <a type="button" name="search_engine" id="" title="Add" style="width:20px;height:20px;background-color:;padding: 7px 1px 1px 4px;"><img id="GridAdd1" name="0" style="width: 21px;height: 19px;padding-bottom: 2px;" class="Table2" src="/ThemePro_LSW/ThemeproLO/Common/Images/AddJQgrid.gif"></a>&nbsp;<a type="button" name="search_engine" id="" title="Add" style="width:20px;height:20px;background-color:;padding: 7px 1px 1px 4px;"><img id="GridDel" name="0" style="width:25px;height:25px;" class="Table2" src="ThemeproLO/Common/Images/delete-16.png"></a>'	  
	  
$($("#gview_"+TableID).find('.ui-jqgrid-titlebar')[0]).append(Add)
}
}
	  $(document).on('blur', '#'+TableID+' .editable', function () {

				var Txtid=$(this).attr('id');
				var NxtTR=$("#"+Txtid).closest('tr').next().attr('id');
				var CrntTR=$("#"+Txtid).closest('tr').attr('id');
				// $("#"+Txtid).closest('td').attr('title',$('#'+Txtid).val())
	 // $("#"+Txtid).closest('td').text($('#'+Txtid).val())
	  
                //alertify.alert('1');
				if($("#"+Txtid).closest('td').next().length==0)
				{
				//jQuery('#rowed5').jqGrid('saveRow','jqg1');
				var table = $("#"+Txtid).closest('table');
		
		var tmp = "<row>";//$.parseJSON("{\"Paticulars\":\"Financial Year\",\"Year1\":\"Year1\",\"Year2\":\"Year2\",\"Year3\":\"Year3\"}");
		var Val="";
		
for(i=0;i< $($("#gview_"+TableID).find('table')[0]).find('thead').find('th').length;i++)
{		

if($($("#"+CrntTR).find('td')[i]).find('input').length==0)
{
if($($("#"+CrntTR).find('td')[i]).find('textarea').length!=0)
{
Val=$($("#"+CrntTR).find('td')[i]).find('textarea').val()
}
else if ($($("#"+CrntTR).find('td')[i]).find('select').length!=0)
{
Val=$($("#"+CrntTR).find('td')[i]).find('select').val()
}

else
{
Val=$($("#"+CrntTR).find('td')[i]).text();
}
}
else
{
Val=$($("#"+CrntTR).find('td')[i]).find('input').val();
}

tmp = tmp + "<"+$($($("#gview_"+TableID).find('table')[0]).find('thead').find('th')[i]).attr('id').replace(TableID+'_','')+">" +
Val+
"</"+$($($("#gview_"+TableID).find('table')[0]).find('thead').find('th')[i]).attr('id').replace(TableID+'_','')+">"
		
	
	
	
}				
tmp = tmp + "</row>";		
			var json = $.xml2json(tmp.replace(/&/g,"and"));
			//tmp=tmp
			//tmp = tmp + "}";	
			
			$(table).jqGrid("setRowData",CrntTR,json);
				
				$("#"+CrntTR).attr("editable","0");
				$("#"+NxtTR).click();
				}

            });
			
	

}
(function() {
	  	 $(document).on('click', '#GridAdd1' , function () {
      
	  var TableId=$($(this).closest('div').parent('div').find('table')[1]).attr('id');
	  
	  	 jQuery("#"+TableId).jqGrid('addRowData',undefined,[{Paticulars:""}]);
	// jQuery("#rowed5").jqGrid('addRowData',undefined,[{Paticulars:""}]);
	 
	  
       });	
	 }()); 
	 
(function() {
	  	 $(document).on('click', '#GridDel' , function () {
      
	  var TableId=$($(this).closest('div').parent('div').find('table')[1]).attr('id');
	  var RowId=$($(this).closest('div').parent('div').find('table')[1]).find('.ui-state-highlight').attr('id');
	  var Len=$($(this).closest('div').parent('div').find('table')[1]).find('tr').length
	  var CrntRowId=$($(this).closest('div').parent('div').find('table')[1]).find('.ui-state-highlight').length
	  
	if(Len!=0 && CrntRowId==0)
	{	
	  	alert("Please select a row to Delete");
		return;
	}
	else
	{
	var strconfirm = confirm("Are you sure you want to delete?");
	if (strconfirm == true) 
	{
	  
	  	 jQuery("#"+TableId).jqGrid('delRowData',RowId,[{Paticulars:""}]);
	// jQuery("#rowed5").jqGrid('addRowData',undefined,[{Paticulars:""}]);
	}
	else
	{
		return;
	}

	}
       });	
	 }()); 	 
	 
	 
	 
	 
function TxtGridsubmitdata(TableID,GrdPrfx,MnPrfx) {
   
var name="";
var fieldid="";
var value="";
var reg = new RegExp('^[0-9]+$');



var formxml="<Data>";




for(j=1;j<$("#"+TableID).find('tbody').find('tr').length;j++)
{
formxml= formxml + "<row>";

var rowwise = $("#"+TableID).find('tbody').find('tr')[j];

for(i=0;i<$($("#gview_"+TableID).find('table')[0]).find('thead').find('th').length;i++)
 {
    name = $($($("#gview_"+TableID).find('table')[0]).find('thead').find('th')[i]).attr('id').replace(TableID+'_','');
   
   if($(rowwise).find('td:eq('+i+')').find('input').val()==undefined)
   {
   if($(rowwise).find('td:eq('+i+')').find('select').length!=0)
   {
   value=$(rowwise).find('td:eq('+i+')').find('select').val();
   }
   else if($(rowwise).find('td:eq('+i+')').find('textarea').length!=0)
   {
    value= $(rowwise).find('td:eq('+i+')').find('textarea').val()
	}
	else
	{
	 value= $(rowwise).find('td:eq('+i+')').text();
	}
   }
   else
   {
  value= $(rowwise).find('td:eq('+i+')').find('input').val();
   }
   
   if(reg.test(value)==true)
  {
//if($(rowwise).find('td:eq('+i+')').text().match(/^((\d{0,3}(,\d{3})+)|\d+)(\.\d{2})?$/))
	//{
  value = value.replace(/,/g, "");
	}
	else
	{
		value = value
	}
  // value = $(rowwise).find('td:eq('+i+')').text().replace(/[^\d\.\-\ ]/g, '');
  
    //value =  value.replace(/\s/g, "");
   if(value != "" )
if(   value != undefined)
{
   {
    value = value.replace(/\&/g, "and");
var formxml=formxml+"<"+GrdPrfx+name+">"+ value  +"</"+GrdPrfx+name+">";
   }
   }
}


formxml= formxml +"<"+GrdPrfx+"PrcsID>"+$("#"+MnPrfx+"PrcsID").val()+"</"+GrdPrfx+"PrcsID>"+"<"+GrdPrfx+"ActivityID>"+$("#"+MnPrfx+"ActivityID").val()+"</"+GrdPrfx+"ActivityID>"
+"<"+GrdPrfx+"DtModified>"+$("#"+MnPrfx+"DtModified").val()+"</"+GrdPrfx+"DtModified>"+"<"+GrdPrfx+"DtCreated>"+$("#"+MnPrfx+"DtCreated").val()+"</"+GrdPrfx+"DtCreated>"
+"<"+GrdPrfx+"ModifiedBy>"+$("#"+MnPrfx+"ModifiedBy").val()+"</"+GrdPrfx+"ModifiedBy>"+"<"+GrdPrfx+"CreatedBy>"+$("#"+MnPrfx+"CreatedBy").val()+"</"+GrdPrfx+"CreatedBy>"+"</row>";
}
var formxml = formxml + "</Data>";
//alert(formxml);
return formxml;

}	 
	 
	 