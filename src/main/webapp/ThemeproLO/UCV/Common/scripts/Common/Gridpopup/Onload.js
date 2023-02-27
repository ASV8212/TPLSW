$(window).bind("load", function() {
    var TableID = getUrlParam("TableID"); 
 if ($("#"+TableID,parent.document).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[7].innerHTML == "PRVL_BltArea")
  {
	 MndtryPRVL_BltArea();
	 }
});




$(document).ready(function (e) {
	

//disbale the parent window start
////var win = window.top.jQuery("#assignmentExternalForm").context
//$(win).find("article:visible").find('#PageIframe'+$(win).find("article:visible").attr('id').split('b')[1]).contents().find('#assignmentExternalForm').contents().find('body')
//$(win).find("article:visible").find('#PageIframe'+$(win).find("article:visible").attr('id').split('b')[1]).contents().find('#assignmentExternalForm').contents().find('body').prepend('<div class="sweet-overlay" tabindex="-1" style="opacity: 1.03; display: block;" ></div>');
//$(win).find("article:visible").find('#PageIframe'+$(win).find("article:visible").attr('id').split('b')[1]).contents().find('#assignmentExternalForm').contents().find('body').find('div').not(".boxy-wrapper").css('opacity', '0.1');
//$(window.parent.document).find('.boxy-wrapper').focus();
//disbale the parent window end	
	
	//validation script loading
	var src = $(window.parent.document.documentElement).find("script[src*='Validation']").attr('src');
		
	loadScript(src);
	

	 var IOP1=window.location.origin;
		 
	  var Rdpage = LoadFrmXML("PG001");
		SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
			window.location= Rdpage;	
			return;
			}
			
				
					 var Resultval=FormRights();
	  if(Resultval!='Yes')
	 {
	 return;
	 }
	 
		
			var DivID = getUrlParam("DivID");
			var RowIndex = getUrlParam("RowIndex");
			var TableID = getUrlParam("TableID");
			var Flag = getUrlParam("Flag");
		
	
			var getrowVal="";
			

	
		
$("#section1").prepend((window.parent.document.getElementById(DivID).outerHTML).replace(/display: none;/g,""));

$("#"+DivID).attr("style","");

//$("#section1").prepend($(window.parent.document).find("#"+DivID).attr("style","")
//$($(window.parent.document).find('#GridPopupShow').parents()[3]).css({'top': $(window.parent.document).find('#'+TableID+'_wrapper').offset().top + 'px'})

$(window.parent.document).find('.boxy-wrapper').css({'top': + $(window.parent.document).find('#'+TableID+'_wrapper').offset().top + 'px'})
	
$(".DateFields").removeClass('hasDatepicker');
$(".ui-datepicker-trigger").remove();

	$(".DateFields",document).cdatepicker({
        showOn: "button",
        buttonImage: "ThemeproLO/Common/Images/calendar.png",
        buttonImageOnly: true,
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy",
        yearRange: "c-100:c+100"
    });
	
	
	
//$()
		

	//for security calculation start
 if($("#"+TableID+"GridPop").find('table').find('.PRAD').length >0)
 {
 if(Flag!="Add")
 { 
 $(window.parent.document).find('#GetSecVal').trigger('click');
}
else
{
 $(window.parent.document).find('#SecDetlDrp').trigger('click');
}
 }
	//for securtiy calculation end

 if(Flag=="Edit")
 {
 //for(i=0;i<$(this).closest('table').find('thead').find('th').length;i++)
for(i=0;i<$("#"+TableID,parent.document).find('thead').find('tr:nth-child(2)').find('th').length;i++)
{

name1=$($("#"+TableID,parent.document).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[i]).text();

getrowVal = $("#"+TableID,parent.document).find('tbody').find('tr')[RowIndex];

 value=$(getrowVal).find('td:eq('+i+')').text();
 
 var x = $("#"+getUrlParam("DivID")).find('[name='+name1+']').hasClass("IsCURCommaFields");
                    if (x == true) {
						if(value == "")
						{
							value = "0";
						}

                        $("#"+getUrlParam("DivID")).find('[name='+name1+']').val(CURCommaSep(parseFloat(value.replace(/,/g,"")).toFixed(0)));
                    }
                    else {
                        $("#"+getUrlParam("DivID")).find('[name='+name1+']').val(value);
                    } 

}
 }
 
  if(Flag=="View")
 {
 //for(i=0;i<$(this).closest('table').find('thead').find('th').length;i++)
for(i=0;i<$("#"+TableID,parent.document).find('thead').find('tr:nth-child(2)').find('th').length;i++)
{

name1=$($("#"+TableID,parent.document).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[i]).text();

getrowVal = $("#"+TableID,parent.document).find('tbody').find('tr')[RowIndex];

 value=$(getrowVal).find('td:eq('+i+')').text();
 
 var x = $("#"+getUrlParam("DivID")).find('[name='+name1+']').hasClass("IsCURCommaFields");
                    if (x == true) {

                        $("#"+getUrlParam("DivID")).find('[name='+name1+']').val(CURCommaSep(parseFloat(value).toFixed(0)));
                    }
                    else {
                        $("#"+getUrlParam("DivID")).find('[name='+name1+']').val(value);
                    } 
 
}
Pgdsbl();
 }
 
 if(Flag=="Add")
 {
	 
	 var FieldPrfxP = $("body",parent.document).find("input")[1].id.split('_')[0];
	 var FieldPrfx = $("body").find("input")[1].id.split('_')[0];
	 
	document.getElementById(FieldPrfx+"_PrcsID").value=window.parent.document.getElementById(FieldPrfxP+"_PrcsID").value;
	document.getElementById(FieldPrfx+"_ActivityID").value=window.parent.document.getElementById(FieldPrfxP+"_ActivityID").value;
	document.getElementById(FieldPrfx+"_ModifiedBy").value=window.parent.document.getElementById(FieldPrfxP+"_ModifiedBy").value;
	document.getElementById(FieldPrfx+"_CreatedBy").value=window.parent.document.getElementById(FieldPrfxP+"_CreatedBy").value;
	document.getElementById(FieldPrfx+"_DtCreated").value=window.parent.document.getElementById(FieldPrfxP+"_DtCreated").value;
	document.getElementById(FieldPrfx+"_DtModified").value=window.parent.document.getElementById(FieldPrfxP+"_DtModified").value;

 }
 	
	//alertify.alert($(window.parent.document).height());
	
	if($(window.parent.document).height() <=637)
	{
		$(window.parent.document).find('#GridPopupShow').height($(window.parent.document).height()-190);

 	}
	else{
		$(window.parent.document).find('#GridPopupShow').height($('#section1').height()+10);
	}

	
 $(document).on('click', '#ffr', function (e) { 
 
 //$(this).closest('div').find('input,select,textarea').val('');
 alertify.alert('HI');
 //JPopup.hide("GridPopup"); 
 //$(this).closest('div').dialog('close');  
 
 });

 
 
//Pgdsbl();
 

 
  $(document).on('click', '#GridBTNSb', function (e) { 
 
 //$(this).closest('div').find('input,select,textarea').val('');
 //alertify.alert('HI');
 
	//var divMndtry = $(this).closest('div').find('div')[0]; 
 
	//var chkmdty = $(this).closest('div').attr('class').split(' ')[0];
	
	 //Custom validation for gridpopup submit start

	
	var chkmndtry = GridMndtry("GridMndtry");


	    if (chkmndtry == "No") {
	        return;
	    }
	    
 var name1="";
 var value="";
var Editrowindex=parseInt($(this)[0].name);
 	  
//var rowindex=($(this).closest('td').parent()[0].sectionRowIndex)+1;
 var split = $(this)[0].className.split(' ');
 
 var tableid=split[0];
 
 var CHkSub=split[1];
var trcount="";
 var classn="";
 var result="";
 

 
 if ($("#"+tableid,parent.document).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1].innerHTML == "RMDT_SancLevel")
  {
    //$(window.parent.document).find("#RECM_EdtChk").trigger('click');
	if(CalcClkchk() == 'No')
	{
		return;
	}
	
	result=calIIRvalSbmt();
	if(result != 'No')
	{
	
		if($("#RMDT_IIRExcptnlResn").val()=="")
	{
alertify.confirm(result+'|RMDT_IIRExcptnlResn', function (e) {
    if (e) 
	{
$("#RMDT_IIRExcptnlResn").prop('disabled', false);
$("#RMDT_IIRExcptnlResn").addClass('GridMndtry');
$("#RMDT_IIRExcptnlResn").focus();
$("#RMDT_IIRExcptnlResn").closest('td').find('span').show();
	} 
	else 
	{
	$("#RMDT_IIRExcptnlResn").prop('disabled', true);
     $("#RMDT_IIRExcptnlResn").removeClass('GridMndtry');
	$("#RMDT_IIRExcptnlResn").closest('td').find('span').hide();
		return ;
    }
	
		});
return;
	}
	}
	result=LvrlcrCalSbmt()
		if( result!= '')
	{
	if($("#RMDT_ExcptnlResn").val()=="")
	{
alertify.confirm(result+'|RMDT_ExcptnlResn', function (e) {
    if (e) 
	{
$("#RMDT_ExcptnlResn").prop('disabled', false);
$("#RMDT_ExcptnlResn").addClass('GridMndtry');
$("#RMDT_ExcptnlResn").focus();
$("#RMDT_ExcptnlResn").closest('td').find('span').show();
	} 
	else 
	{
	$("#RMDT_ExcptnlResn").prop('disabled', true);
       $("#RMDT_ExcptnlResn").removeClass('GridMndtry');
	$("#RMDT_ExcptnlResn").closest('td').find('span').hide();
		return;
    }
		});
		}	
	}
  } 
  
   if ($("#"+tableid,parent.document).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1].innerHTML == "RKRT_RatingLevel")
  {
    //$(window.parent.document).find("#RECM_EdtChk").trigger('click');
	if(CalcClkchk() == 'No')
	{
		return;
	}
  }

 //Custom validation for gridpopup submit end
 
 
 
 
 
 
  if($("#"+tableid,parent.document).find('.dataTables_empty').text()=="No data available in table")
 {
 	
 $("#"+tableid,parent.document).find('.dataTables_empty').closest('tr').remove();

 }
 
 var rowindex = $("#"+tableid,parent.document).find('tbody').find('tr').length+1;
 
 var BTNvalue="<a \"><img style=\"width:20px;height:20px;\" id=\"GridEdit\" name=\"GridEdit\" title=\"Edit\" src=\"ThemeproLO/Common/Images/Edit.png\" /> </a> <a \"> <img style=\"width:20px;height:20px;\" id=\"GridDelete\" name=\"GridDelete\" title=\"Delete\" src=\"ThemeproLO/Common/Images/file_delete.png\" /> </a>";	 
 $("#"+tableid,parent.document).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper').find("span").remove().end().html();
 
 
 trcount = $("#"+tableid,parent.document).find('tbody').find('tr').length;
 
 if(trcount % 2 == 0)
 {
 classn = "odd";	  
 }
 else
 {	  
 classn = "even";	
 }
 
 var tablest = "<tr role=\"row\" class=\""+classn+"\">";
 
 var totalClm = $("#"+tableid,parent.document).find('thead').find('tr:nth-child(2)').find('th').length;
 
 for(i=0;i<$("#"+tableid,parent.document).find('thead').find('tr:nth-child(2)').find('th').length;i++)
 {
 
 if(CHkSub == "Edit")
 {
 name1=$($("#"+tableid,parent.document).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[i]).text();
 
 value =  $("#"+tableid+"GridPop").find('[name='+name1+']').val()||$(this).parents().find('[name='+name1+']').val() ;
 
  
 /*if($("#"+tableid+"GridPop").find('[name='+name1+']').hasClass("IsCURCommaFields")||$(this).parents().find('[name='+name1+']').hasClass("IsCURCommaFields"))
 {
	value =  $("#"+tableid+"GridPop").find('[name='+name1+']').val().replace(/,/g, "")||$(this).parents().find('[name='+name1+']').val().replace(/,/g, ""); 
 }
   else
   {
	   value =  $("#"+tableid+"GridPop").find('[name='+name1+']').val()||$(this).parents().find('[name='+name1+']').val();
   }*/
 
 if(name1 == "Action")
 {
 var z;// = $("#"+tableid).find('tr')[rowindex];
 
// $(a).find('td:eq('+i+')').text(BTNvalue);
 }
 else
 {	  
 var a = $("#"+tableid,parent.document).find('tbody').find('tr')[Editrowindex];
 
 $(a).find('td:eq('+i+')').text(value);
 } 
 

 }
 else
 {
 
 name1=$($("#"+tableid,parent.document).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[i]).text();
 
 value =  $("#"+tableid+"GridPop").find('[name='+name1+']').val()||$(this).parents().find('[name='+name1+']').val();
 
 /*if($("#"+tableid+"GridPop").find('[name='+name1+']').hasClass("IsCURCommaFields")||$(this).parents().find('[name='+name1+']').hasClass("IsCURCommaFields"))
 {
	value =  $("#"+tableid+"GridPop").find('[name='+name1+']').val().replace(/,/g, "")||$(this).parents().find('[name='+name1+']').val().replace(/,/g, ""); 
 }
   else
   {
	   value =  $("#"+tableid+"GridPop").find('[name='+name1+']').val()||$(this).parents().find('[name='+name1+']').val();
   }*/

 
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

 tablest  = tablest + "<td>"+value+"</td>";	
	
}
 } 
 
 }
// rowindex=$(this).closest('tr').index();
//tablest = tablest + "<td>"+name+"<input class=\"GridEDFLD\" value=\""+value+"\" name=\""+rowindex+"\" id=\""+name+"\"/></td>";

 } 
 
 tablest  = tablest + "</tr>"
 

 if(CHkSub != "Edit")
 {
	  $("#"+tableid,parent.document).find('tbody').append(tablest);
 }

 //$("#"+tableid+"GridPop").find('.GridChk').removeClass('IsGridMndtry');
 $("#"+tableid+"GridPop").find('input,select,textarea').val('');
 
 var flag = getUrlParam("Flag");
 
 $("form",parent.document).prepend("<img id=\"GridSbBTN\" type=\"hidden\" name=\""+tableid+"|"+flag+"\" src=\"ThemeproLO/Common/Images/tick.png\">");


 
 
  window.parent.document.getElementById("GridSbBTN").click();
 //JPopup.hide("GridPopup"); 
 //$(this).closest('div').dialog('close');   
 });
 
 
 $(document).on('click', '#GridBTNCn', function (e) { 
 
 //$(this).closest('div').find('input,select,textarea').val('');
 //alertify.alert('HI');
 
 $("form",parent.document).prepend("<img id=\"GridCnBTN\" type=\"hidden\" src=\"ThemeproLO/Common/Images/cross.png\">");
  //JPopup.hide("GridPopupShow");
 window.parent.document.getElementById("GridCnBTN").click();
 
 //JPopup.hide("GridPopup"); 
 //$(this).closest('div').dialog('close');  
 
 });

});

