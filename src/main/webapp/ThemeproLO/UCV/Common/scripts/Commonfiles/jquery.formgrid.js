(function( $ ){

 $(document).on('click', '#GridEdit', function () {

 
	var tableid=$(this).closest('table')[0].id 
	
		 	$("#"+tableid +"GridPopLabel").text("EDIT "+$("#"+tableid).attr('title') );

	 var name1="";
 var value="";
 var rowchk="0";
var rowindex=$(this).closest('tr').index();
 var tablest ="";
 var iframemainhgt="";
 var tableid1=$(this).closest('table')[0].id +" "+"Edit";
	 
	var	CLCount= Math.round($(this).closest('table').find('thead').find('tr:nth-child(2)').find('th').length/2)
$(this).closest('table').find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper').find("span").remove().end().html();	  
	 

	 tablest = tablest + "<img id=\"GridBTNSb\" name=\""+rowindex+"_"+iframemainhgt+"\" class=\""+tableid1+"\" title=\"Submit\" src=\"ThemeproLO/Common/Images/tick.png\" /><img id=\"GridBTNCn\" name=\""+iframemainhgt+"\" class=\""+tableid+"\" title=\"Cancel\" src=\"ThemeproLO/Common/Images/cross.png\" />"


$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNSb').removeClass(tableid)
$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNSb').removeClass('Edit')
$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNSb').removeClass('Add')
$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNCn').removeClass('Edit')
$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNCn').removeClass('Add')
//$("#"+tableid+"GridPop").find('.modal-footer').empty();
$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNSb').addClass(tableid1)
$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNSb').attr('name',rowindex+"_"+iframemainhgt)
$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNCn').addClass(tableid1)

for(i=0;i<$("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').length;i++)
{

name1=$($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[i]).text();

getrowVal = $("#"+tableid).find('tbody').find('tr')[rowindex];

 value=$(getrowVal).find('td:eq('+i+')').text();
 
 var x = $("#"+tableid+"GridPop").find('[name='+name1+']').hasClass("IsCURCommaFields");
 var Fle = $("#"+tableid+"GridPop").find('[name='+name1+']').closest('td').find('input[type="file"]').length
 
 var Slct = $("#"+tableid+"GridPop").find('[name='+name1+']').closest('div').find('select').length

                    if (x == true) {
						if(value == "")
						{
							value = "0";
						}

                        $("#"+tableid+"GridPop").find('[name='+name1+']').val(CURCommaSep(parseFloat(value.replace(/,/g,"")).toFixed(0)));
						$("#"+tableid+"GridPop").find('[for='+name1+']').addClass('active')
                    }
if(Fle==1 )
{
value=$(getrowVal).find('td:eq('+i+')').find('img').attr('name')
$("#"+tableid+"GridPop").find('[name='+name1+']').val(value);
$("#"+tableid+"GridPop").find('[for='+name1+']').addClass('active')
	
}
if(name1=="RMLH_AprvA")
{
name1="Name"
value=value.split(',')
$("#"+tableid+"GridPop").find('[name=RMLH_AprvA]').val(value);
$("#"+tableid+"GridPop").find('[name='+name1+']').closest('div').find('li:contains("'+value+'")').addClass('active')
$("#"+tableid+"GridPop").find('[name='+name1+']').closest('div').find('li:contains("'+value+'")').find("input[type='checkbox']").attr('checked');
$("#"+tableid+"GridPop").find('[name='+name1+']').val(value);
$('#'+name1).material_select();
$("#"+tableid+"GridPop").find('[name='+name1+']').closest('div').prev().remove()
$("#"+tableid+"GridPop").find('[name='+name1+']').closest('div').prev().remove()

}
if(Slct==1 )
{
$("#"+tableid+"GridPop").find('[name='+name1+']').closest('div').find('li:contains("'+value+'")').addClass('active')
     $("#"+tableid+"GridPop").find('[name='+name1+']').val(value);
	  $('#'+name1).material_select();
	  $("#"+tableid+"GridPop").find('[name='+name1+']').closest('div').prev().remove()
	  	  $("#"+tableid+"GridPop").find('[name='+name1+']').closest('div').prev().remove()
}

					
					
                    else {
                        $("#"+tableid+"GridPop").find('[name='+name1+']').val(value);
						  //$("#"+tableid+"GridPop").find('[name=Name]').val(value);
						$("#"+tableid+"GridPop").find('[for='+name1+']').addClass('active')
						//$("#"+tableid+"GridPop").find('[name='+name1+']').material_select();

                    }
	}
	 
	 
 });
 
 
 $(document).on('click', '#GridView', function () {
 
 var tableid=$(this).closest('table')[0].id
 
 	$("#"+tableid +"GridPopLabel").text("View "+$("#"+tableid).attr('title') );
	 //$("#Table2GridPopLabel").text("VIEW PO");
		
});
 
 

 $(document).on('click', '#GridDelete', function () {
 
 
 
  var strconfirm = confirm("Are you sure you want to delete?");
    if (strconfirm == true) {
		
	 var tableid=$(this).parents('table').attr('id')
		if ($($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1]).text() == "REIV_CorpCode")
     {
   	 DtlRegInvcDataToTmp($($($(this).closest('tr')).find('td')[9]).text()); 
     }  
         $(this).closest('tr').remove();

		
		 //Change select value yes based on Grid row count
         GridRowChkval(tableid)
         //Change select value yes based on Grid row count 
    }
 
 


 });
 
 
$(document).on('click', '#GridAdd', function () {
	
 var tableid= $(this).parents("div:first").parent("div").siblings(".dataTables_scroll").find(".dataTables_scrollBody")
 .find('table').attr('id');
var tableid1=tableid+" "+"Add";

if ($($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1]).text() == "POIG_CorpCode")
 {
	ChngValidSt()
 }
 if ($($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1]).text() == "REIV_CorpCode")
 {
	ChngValidSt()
 }
$(document).find('.modal-body').find('.select-dropdown').find('li').removeClass('active')
$(document).find('.modal-body').find('.select-dropdown').find('li').removeClass('selected')



 $("#"+tableid +"GridPopLabel").text("ADD "+$("#"+tableid).attr('title') );
 
 var rowindex = $("#"+tableid).find('tbody').find('tr').length;

var FieldPrfxP = $("main",document).find("input")[1].id.split('_')[0];
var FieldPrfx = $("#"+tableid+"GridPop").find("input")[1].id.split('_')[0];


$("#"+tableid+"GridPop").find('.gridClrfields').val('');
$("#"+tableid+"GridPop").find('.IsCURCommaFields').val('0')
$("#"+tableid+"GridPop").removeClass('validate')


$("#"+$(document).find('.modal-body').find('select').attr('id')).material_select();
$("#"+$(document).find('.modal-body').find('select').attr('id')).closest('div').prev().remove()
$("#"+$(document).find('.modal-body').find('select').attr('id')).closest('div').prev().remove()
		  

$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNSb').removeClass(tableid)
$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNSb').removeClass('Edit')
$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNSb').removeClass('Add')
$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNCn').removeClass('Edit')
$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNCn').removeClass('Add')


$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNSb').addClass(tableid1)
$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNSb').attr('name',rowindex+"_")
$("#"+tableid+"GridPop").find('.modal-footer').find('#GridBTNCn').addClass(tableid1)

	  
	document.getElementById(FieldPrfx+"_PrcsID").value=document.getElementById(FieldPrfxP+"_PrcsID").value;
	document.getElementById(FieldPrfx+"_ActivityID").value=document.getElementById(FieldPrfxP+"_ActivityID").value;
	document.getElementById(FieldPrfx+"_ModifiedBy").value=document.getElementById(FieldPrfxP+"_ModifiedBy").value;
	document.getElementById(FieldPrfx+"_CreatedBy").value=document.getElementById(FieldPrfxP+"_CreatedBy").value;
	document.getElementById(FieldPrfx+"_DtCreated").value=document.getElementById(FieldPrfxP+"_DtCreated").value;
	document.getElementById(FieldPrfx+"_DtModified").value=document.getElementById(FieldPrfxP+"_DtModified").value;




 
   
	
 });



 
 $(document).on('click', '#GridSbBTN', function () {
  
 var tableid= $("#GridSbBTN").attr("name").split("|")[0];
 var flag =$("#GridSbBTN").attr("name").split("|")[1];
  $(document).find('form').removeClass('tabdisable');
    $("#GridSbBTN").remove();

  //Trigger Function On Submit **Start**
 if ($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1].innerHTML == "CADT_CoApplID")
 {
	 CoApplntdatagrid();
 } 
	
	
 if ($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1].innerHTML == "GRDT_GuarID")
 {
	 Guardatagrid();
 } 

  if ($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1].innerHTML == "PREL_PropNo")
  {
     LonAmtRatio();  
  }
  if ($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1].innerHTML == "EVSA_ApplID")
  {
     Incmdata();
	 GetROIEMI();
  }
  
  if ($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1].innerHTML == "EVSC_CoApplID")
  {
     Incmdata();
	 GetROIEMI();
  }

   if ($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1].innerHTML == "RMDT_SancLevel")
  {
     ChkSbmtLvlrow("Assign")
  }
  
     if ($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1].innerHTML == "RKRT_RatingLevel")
  {
     ChkSbmtLvlrow("Assign")
  }
     
   //SCF Validation Start
     //SCF Buyer Seller Relationship(1-1-2018)
       
       
       
       //SCF Validation End
  
   
  

  
/* if ($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1].innerHTML == "PRAD_SecDetl")
  {
     SecDetlDrpdwnchk(flag); 
  }*/
     // Trigger Function On Submit **End**
 

 });
 
 
 $(document).on('click', '#GridBTNCn', function (e) { 
 
   var tableid= $("#GridBTNCn").attr("class");
   
   
// $("#"+tableid+"_wrapper").css("display", "block");
 //$("#"+tableid+"GridPop").css("display", "none");
//$('.modal-backdrop').hide();

 });
 
 
    var methods = {

        init: function() {
            return this.each(function(){
                methods.initCells.apply($(this));

                // add new row button
                if ($(this).find(".grid-row-add").length == 0) {
                    var link = $('<a class="grid-row-add" href="#">Add Row</a>');
                    link.click(function() {
                        var table = $(this).parent();
                        methods.addRow.apply(table, arguments);
                        return false;
                    });
                    $(this).append(link);
                }

                // add first row if grid is empty
                if ($(this).find(".grid-row").length == 0) {
                    methods.addRow.apply($(this), arguments);
                }
                
                $(this).find("th:last-child").after("<th style=\"border: 0 none;\"></th>");
            });
        },

        initCells: function() {
            // make cells editable
            $(this).find(".grid-row .grid-cell").editable(methods.updateCell, {
                 type: "text",
                 tooltip: "Click to edit",
                 cssclass: "grid-cell-input",
                 width: "none",
                 submit: "OK",
                 data : function (content, setting) {
                     return $(this).next("input").val();
                 }
            });
            
            // add delete link for each row
            $(this).find(".grid-row").each(function() {
                if ($(this).find(".grid-row-del").length == 0) {
                    var td = $('<td class="grid-cell-options"><a class="grid-row-del" href="#">X</a></td>');
                    $(this).append(td);
                }
                $(this).find(".grid-row-del").unbind();
                $(this).find(".grid-row-del").click(methods.deleteRow);
            });
        },

        updateCell: function(value, settings) {
            var input = $(this).siblings("input");
            input.attr("value", value);
            if (value == "") {
                value = "Click to edit";
            }
            // trigger change
            var el = $(this).parent().parent().parent().parent().parent();
            setTimeout(function() {
                $(el).trigger("change");
            }, 100);
            return value;
        },

        addRow: function() {
            return $(this).each(function(){
                // get table
                var table = $(this).find("table");
                
                // clone template
                var template = $(table).find(".grid-row-template");
                var newRow = $(template).clone();
                newRow.removeClass("grid-row-template");
                newRow.addClass("grid-row");
                newRow.removeAttr("style");

                // set input names and values
                var rowIndex = $(table).find("tr").length - 2;
                methods.updateInput(newRow, rowIndex);

                // append row
                table.append(newRow);

                methods.initCells.apply(this);

                // trigger change
                $(this).trigger("change");

               
            });
        },

        updateInput: function(row, rowIndex) {
            $(row).find(".grid-cell").each(function(index, column) {
                var input = $(column).siblings(".grid-input");
                var name = $(column).attr("id") + "_" + rowIndex;
                var value = $(column).text();
                input.attr("name", name);
                input.attr("value", value);
            });
        },

        deleteRow: function() {
            if (confirm("Delete row?")) {
                var row = $(this).parent().parent();
                var table = row.parent();
                row.remove();

                // reset input names
                table.find(".grid-row").each(function(rowIndex, row) {
                    methods.updateInput(row, rowIndex);
                });

                // trigger change
                var el = table.parent();
                $(el).trigger("change");
            }
            return false;
        }

    };

    $.fn.formgrid = function( method ) {

        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.formgrid' );
        }

    };

})( jQuery );

function Onloadgrid(FieldID,tableid)
{

    var str_array = FieldID.split(',');
    var str_array1 = tableid.split(',');
var FieldIDn = "";

if (FieldID != "") {

    for (var m = 0; m < str_array.length; m++) {

        FieldIDn = str_array[m];
        tableid = str_array1[m];

        var xmldata = document.getElementById(FieldIDn).value;

        if (xmldata != "") {
            //if(xmldata!="<LKYC_Addressdetl />")
            //{
            var str_xml = xmldata;
            var parser_xml = new DOMParser();
            var oXml = parser_xml.parseFromString(str_xml, "text/xml");
            var obj_elementcol = oXml.documentElement;


            //////// ONLOAD TO ADD ROWS

            var tbrowcount = obj_elementcol.childNodes[0].childNodes.length;
            var template = $('#' + tableid).find(".grid-row-template");

            if (obj_elementcol.childNodes[0] != null) {
                for (var i = 0; i < obj_elementcol.childNodes[0].childNodes.length; i++) {

                    ///////////////////

                    //if(i!=0)	  
                    //{
                    window["text" + i] = $(template).clone(); ;
                    window["text" + i].removeClass("grid-row-template");
                    window["text" + i].addClass("grid-row");
                    window["text" + i].removeAttr("style");
                    $('#' + tableid).append(window["text" + i]);
                    //////////////////
                    //}

                    for (var j = 0; j < obj_elementcol.childNodes[0].childNodes[i].childNodes.length; j++) {

                        var s1 = obj_elementcol.childNodes[0].childNodes[i].childNodes[j].nodeName;
                        var fieldvalue = obj_elementcol.childNodes[0].childNodes[i].childNodes[j].innerHTML;

                        var a = i;
                        i = parseInt(i) + 1;

                        document.getElementsByName(s1).item(i).value = fieldvalue;
                        document.getElementsByName(s1).item(i).text = fieldvalue;

                        i = a;

                    }
                }

            }
            $(".grid").formgrid();
            //}
            //   else{

            // $(".grid_79").formgrid();

            // }
        }
        else {

            $(".grid").formgrid();

        }
    }
}
else {

    $(".grid").formgrid();

}
}

function Gridsubmitdata(TableID) {
   
var name="";
var fieldid="";
var value="";
//var reg = new RegExp('^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$');
//var reg = new RegExp('[1-9]\d*(?:\.\d{0,2})?');
var reg = new RegExp('^[0-9]+(\.[0-9]{1,8})?$');


var formxml="<Data>";


$('#'+TableID).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper').find("span").remove().end().html();

for(j=0;j<$("#"+TableID).find('tbody').find('tr').length;j++)
{
formxml= formxml + "<row>";

var rowwise = $("#"+TableID).find('tbody').find('tr')[j];

for(i=1;i<$("#"+TableID).find('thead').find('tr:nth-child(2)').find('th').length;i++)
 {
    name = $("#"+TableID).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[i].innerHTML;
   
   if(reg.test($(rowwise).find('td:eq('+i+')').text().replace(/,/g, ""))==true)
  {
//if($(rowwise).find('td:eq('+i+')').text().match(/^((\d{0,3}(,\d{3})+)|\d+)(\.\d{2})?$/))
	//{
  value = $(rowwise).find('td:eq('+i+')').text().replace(/,/g, "");
	}
	else
	{
		//Dhanraj
		if($(rowwise).find('td')[0].innerHTML!="No data available in table")
		{
			
			value = $(rowwise).find('td')[i].innerHTML;
		}
		else
		{
			value='';
		}
		//value = $(rowwise).find('td:eq('+i+')').text();
		
		
	}
  // value = $(rowwise).find('td:eq('+i+')').text().replace(/[^\d\.\-\ ]/g, '');
   value = value.replace(/\&/g, "and");
   //Dhanraj
   if(value != "")
var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
   
}
formxml= formxml + "</row>";
}
var formxml = formxml + "</Data>";
//alert(formxml);
return formxml;

}



function RemoveExtraGridRow(TableID, FieldsClassName, GridClassName) {
     
    var rowCount = $("#" + TableID).find("tr").length - 2;
    var count = document.getElementById(FieldCountID).value;

    for (j = 1; j <= rowCount; j++) {
       
        for (i = 0; i < count; i++) {
            name = document.getElementById(TableID).getElementsByClassName(FieldsClassName).item(i).name;
            fieldid = document.getElementById(TableID).getElementsByClassName(FieldsClassName).item(i).id;

            // value = document.getElementsByClassName(FieldsClassName).item(j).value;
            value = document.getElementsByName(name).item(j).value;
            var formxml = formxml + "<" + name + ">" + value + "</" + name + ">";

        }
      
    }

    $("." + GridClassName).formgrid();

}

function AssignGridXmltoField(FieldID,GridXML) {

    document.getElementById(FieldID).value = GridXML;
   
}

function LoadEmptyGrid_fieldsCount(FieldID, GridClassName, GridFieldsClassName) {

    //document.getElementById(FieldID).value = $("." + GridFieldsClassName).length;
    document.getElementById(FieldID).value = document.getElementById(GridClassName).getElementsByClassName(GridFieldsClassName).length
  //  $("." + GridClassName).formgrid();

}


function GridCalculation(TableID, InputFieldName, OutputFieldNameID) {

    var rowCount = $("#" + TableID).find("tr").length - 2;

    var x = document.getElementsByTagName("input");
    var y = document.getElementsByTagName("select");
    var Value = "0";
    var fieldid = "";
    var value = "";
    var valuesel = "";
    var type = "";
    //var count = document.getElementById(FieldCountID).value;
    var row = "";
    var formid = document.getElementsByTagName("form").item('0').name

    var obj = $('#' + TableID);

    var formxml = "<Data>";

    for (j = 1; j <= rowCount; j++) {
       // formxml = formxml + "<row>";

         Value = parseFloat(Value)+parseFloat(document.querySelectorAll('#' + InputFieldName)[j].value);
        
       
       /* for (i = 0; i < count; i++) {
            name = document.getElementById(TableID).getElementsByClassName(FieldsClassName).item(i).name;
            fieldid = document.getElementById(TableID).getElementsByClassName(FieldsClassName).item(i).id;

            // value = document.getElementsByClassName(FieldsClassName).item(j).value;
            value = document.getElementsByName(name).item(j).value;
            var formxml = formxml + "<" + name + ">" + value + "</" + name + ">";

        }*/
       // formxml = formxml + "</row>";
    }
    
    document.getElementById(OutputFieldNameID).value = Value;

}


 $(document).on('click', '#GridBTNSb', function (e) { 
 
 var name1="";
 var value="";
 var IsHidnClm="";
 var Hc=1;
//var Editrowindex=parseInt($(this)[0].name);
var Editrowindex= $(this)[0].name.split('_')[0];

var ifrmemainhgt= $(this)[0].name.split('_')[1];
 	  
//var rowindex=($(this).closest('td').parent()[0].sectionRowIndex)+1;
 var split = $(this)[0].className.split(' ');
 
 var tableid=split[4];

 
 var CHkSub=split[5];
var trcount="";
 var classn="";
 var result="";
  var BTNvalue="<a \"><img style=\"width:20px;height:20px;\" data-toggle=\"modal\" data-target=\"#"+tableid+"GridPop\" id=\"GridEdit\" name=\"GridEdit\" title=\"Edit\" src=\"ThemeproLO/Common/Images/Edit.png\" /> </a> <a \"> <img style=\"width:20px;height:20px;\" id=\"GridDelete\"  name=\"GridDelete\" title=\"Delete\" src=\"ThemeproLO/Common/Images/file_delete.png\" /> </a>";	

var chkmndtry = GridMndtry("GridMndtry_"+tableid);


	    if (chkmndtry == "No") {
	        return;
	    }
		
		
if ($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1].innerHTML == "REIV_CorpCode")
 {
	UpdtUpldGridDataToTmp();
	ChngValidSt();
 }
 if ($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1].innerHTML == "POIG_CorpCode")
 {
	 UpdtUpldGridDataToTmp();
	ChngValidSt();
 }

		
 // if($("#"+tableid).find('.dataTables_empty').text()=="No data available in table")
if( $($("#"+tableid).find('tbody tr')[0]).find('.dpass').text()=="")
 {
 	
 $($("#"+tableid).find('tbody tr')[0]).remove();

 }
 if($($("#"+tableid).find('tbody tr')[0]).find('.dpass').text()=="0")
 {
 
 $($("#"+tableid).find('tbody tr')[0]).remove();

 }
		
 $("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper').find("span").remove().end().html();
 
 
 trcount = $("#"+tableid).find('tbody').find('tr').length;
 
 if(trcount % 2 == 0)
 {
 classn = "odd";	  
 }
 else
 {	  
 classn = "even";	
 }
 
 var tablest = "<tr role=\"row\" class=\""+classn+"\">";
 
 var totalClm = $("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').length;
 
 for(i=0;i<$("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').length;i++)
 {
 
 if(CHkSub == "Edit")
 {
 name1=$($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[i]).text();
 
 value =  $("#"+tableid+"GridPop").find('[name='+name1+']').val()||$(this).parents().find('[name='+name1+']').val() ;

 if(name1!=""){
 
 if(name1 == "Action")
 {

  if ($($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1]).text() == "INRD_CounterPartyID")
		{
			var a = $("#"+tableid).find('tbody').find('tr')[Editrowindex];
			$(a).find('td:eq('+i+')').html(BTNvalue);
		}
	
 }
 else
 {	 


		   var a = $("#"+tableid).find('tbody').find('tr')[Editrowindex];
		   $(a).find('td:eq('+i+')').html(value);

		 
 
 } 
 
 
 }

 }
 else
 {
 
 name1=$($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[i]).text();
 
 IsHidnClm=$("#"+tableid).find('thead').find('tr:nth-child(1)').find('th')[Hc];
  if(name1!=""){
 if(IsHidnClm != undefined)
{
 IsHidnClm=IsHidnClm.getAttribute('aria-label');
}
 
 value =  $("#"+tableid+"GridPop").find('[name='+name1+']').val()||$(this).parents().find('[name='+name1+']').val();


 
 if(name1 == "Action")
 {
 tablest  = tablest + "<td>"+BTNvalue+"</td>";
 }
 else
 {	  

	 
		 if(i >= parseInt(totalClm)-6)
		 {
		  tablest  = tablest + "<td class=\" dpass\">"+value+"</td>";
		 }
		 else{
			 if(IsHidnClm != undefined)
			{	
				if(IsHidnClm.split(':')[0]==name1)
				{
					tablest  = tablest + "<td>"+value+"</td>";
					
					
					Hc=Hc+1;
				}
				else
				{
					tablest  = tablest + "<td class=\" dpass\">"+value+"</td>";
				}
		 	}
			else
				{
					tablest  = tablest + "<td class=\" dpass\">"+value+"</td>";
				}
			
		 }
	 
	 

 } 
 }
 }
 } 
 
 tablest  = tablest + "</tr>"
 

 if(CHkSub != "Edit")
 {
	  $("#"+tableid).find('tbody').append(tablest);
 }

$("#"+tableid+"GridPop").find('.gridClrfields').val('');

 var flag = getUrlParam("Flag");
 




 GridRowChkval(tableid)
  //$('.modal-backdrop').hide()
  
  $("#GridBTNCn").trigger('click');
 
 });

 
 


function Griddivdsbl(divid)
{

  var inputs = $('#'+divid).find('input');

          for (var i = 0; i < inputs.length; i++)
	 {
              
		//inputs[i].style.background = "#e8e8ee";
		inputs[i].disabled=true;
		//inputs[i].className='xdETTROText';
		//inputs[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		  
        }

		  var selects = $('#'+divid).find('select');

          for (var i = 0; i < selects.length; i++)
	 {
              
		//inputs[i].style.background = "#e8e8ee";
		selects[i].disabled=true;
		//inputs[i].className='xdETTROText';
		//selects[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		  
        }

	  var imgs = $('#'+divid).find('img');

          for (var i = 0; i < imgs.length; i++)
	 {
              
		//inputs[i].style.background = "#e8e8ee";
		if(imgs[i].id != "GridView"&&$(imgs[i]).closest('a').attr('id')!="attachview" &&$(imgs[i]).closest('a').attr('id')!="comments")
		{
			
		//	if(imgs[i].id=="GridEdit")
			//{
				
			//	imgs[i].src.replace(imgs[i].src.split('/').pop(-1),"review1.png");
			//}
			
		imgs[i].style.display="none";
		}
		//inputs[i].className='xdETTROText';
		//imgs[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		  
        }
		
		
		  var textareas = $('#'+divid).find('textarea');

          for (var i = 0; i < textareas.length; i++)
	 {
              
		//inputs[i].style.background = "#e8e8ee";
		textareas[i].disabled=true;
		//inputs[i].className='xdETTROText';
		//imgs[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		  
        }


		
}
 $(document).on('click', '#GridCnBTN', function () { 
 
// $(this).closest('div').find('input,select,textarea').val('');
 JPopup.hide("GridPopupShow");
$("#GridCnBTN").remove();
$("#gridspace").remove();
 //to make the parent window disable start
//var win = window.top.jQuery("#assignmentExternalForm").context;
//$(win).find("article:visible").find('#PageIframe'+$(win).find("article:visible").attr('id').split('b')[1]).contents().find('#assignmentExternalForm').contents().find('body').find('.sweet-overlay').remove()
 //to make the parent window disable end
 
 //$(this).closest('div').dialog('close');  
 
 });

