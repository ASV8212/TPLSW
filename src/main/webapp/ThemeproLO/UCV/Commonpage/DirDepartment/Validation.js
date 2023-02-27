
function Pindetls(idval,state,city,STDCode)
{
var val=GetPin($(idval).val());

if($(val).find("statename").text()!="")
{
$('#'+state).attr('disabled',true)
$('#'+state).val($(val).find("statename").text());
$('#'+state).next().addClass('active');
}
else
{
$('#'+state).attr('disabled',true)
$('#'+state).val('');
$('#'+state).next().removeClass('active');
$(idval).val('');
}
/*if($(val).find("Telephone").text()!="")
{
$('#'+STDCode).attr('disabled',true)
$('#'+STDCode).val($(val).find("Telephone").text());
$('#'+STDCode).next().addClass('active');
}
else
{
$('#'+STDCode).attr('disabled',true)
$('#'+STDCode).val('');
$('#'+STDCode).next().removeClass('active');
$(idval).val('');
}*/
if($(val).find("Districtname").text()!="")
{
$('#'+city).attr('disabled',true)
$('#'+city).val($(val).find("Districtname").text());
$('#'+city).next().addClass('active');
}
else
{
$('#'+city).attr('disabled',true)
$('#'+city).val('');
$('#'+city).next().removeClass('active');
$(idval).val('');
}
}

function StateCode()
{
	
var xml=UI_getdata($("#BRCR_STATE").val(),"","","","","LSW_SGETCITYCODE")
$("#BRCR_STATECODE").val($(xml).find('StateID').text())
if($("#BRCR_STATECODE").val()=="")
{
	$("#BRCR_STATECODE").next().removeClass('active');
}
else
{
	$("#BRCR_STATECODE").next().addClass('active');
}
	
}


function CHKSTATUS()

{
	
	var Status=$("#BRCR_STATUS").val()
	if(Status=="InActive")
		{
		 $("#BRCR_ACTIVEDT").attr("disabled",true)
		 $("#BRCR_ACTIVEDT").removeClass('BRCRMndtry');
		  $("#BRCR_ACTIVEDT").next().find(".MndtryAstr").html("");
	//	  $("#BRCR_ACTIVEDT").next().removeClass('active');
		//  $("#BRCR_ACTIVEDT").val('')
		  $('.actdt').hide()
		  
		  
          $("#BRCR_INACTIVEDT").addClass('BRCRMndtry');
		  $("#BRCR_INACTIVEDT").next().find(".MndtryAstr").html("*");
           $("#BRCR_INACTIVEDT").attr("disabled",false)
		  $('.Inactdt').show()
		    
		}
	else
		{
		
		
		 $("#BRCR_INACTIVEDT").attr("disabled",true)
		 $("#BRCR_INACTIVEDT").val('')
		  $("#BRCR_INACTIVEDT").next().removeClass('active');
		 $("#BRCR_INACTIVEDT").removeClass('BRCRMndtry');
		  $("#BRCR_INACTIVEDT").next().find(".MndtryAstr").html("");
		 $('.Inactdt').hide()
		 
		 
		 
		 
         $("#BRCR_ACTIVEDT").addClass('BRCRMndtry');
		 $("#BRCR_ACTIVEDT").next().find(".MndtryAstr").html("*");
		 $("#BRCR_ACTIVEDT").attr("disabled",false)
		  $('.actdt').hide()
		  
		   
	    if($("#BRCR_ACTIVEDT").val()=='')
		{
		var Today=ToDay();
         $("#BRCR_ACTIVEDT").val(Today)
		}
   
   
   $("#BRCR_ACTIVEDT").attr("disabled",true)
   $("#BRCR_ACTIVEDT").next().addClass('active');
   
		}



}


function GetUserMap()
{
  var Name=$("#BRCR_BRANCHNAME").val();
 /* if(Name=="")
	 {
	   alert('Enter the Branch Name');
	   return false;
	   $("#UserModalClose").click();
  }
  else
	  {*/
  $("#BRUS_USERID").val(Name);
  $("#BRUS_USERNAME").val(Name);
  
  if($("#BRUS_UNIQID").val()=="")
  {
    $("#BRUS_UNIQID").val($("#BRCR_UNIQID").val())
  }
  //$("#UCBM_UNIQID").val(Name+$("#PrcsID").val())
 // $("#UCBM_ROLENAME").next().addClass('active');
 // $("#BTNDIRBRMAPMAINGRD").click();
 $("#BTNUSRBRGRD").click();
  $("#UserModalPop").click();
  
  
  oTable2 = $('#Table2').DataTable();
		$('#SearchTable2').keyup(function(){
		      oTable2.search($(this).val()).draw() ;
		})	
  
	 // }
}

function GridControlBRANCHUSERMAPMAINBR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			var HTML =	'<span><input type="text"  id="id'+rowno+'"  style="display:none;" name="id'+rowno+'" maxlength="10"  disabled class=" DSVLBL form-control NoSpecialChar ROLEID form-control ">';			 
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
	        	{ targets: 3, "render": function ( data, type, row, meta ) {                            
                  	 		 
                			var rowno = meta.row;	
                       var HTML =	'<span id=""> <img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DeleteBrMapRow  BTNHIDE"  title="Delete" attr-Upd="CRCM_ACTION'+rowno+'"  width="20" height="20"/>';
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



function GridControlBRANCHUSERMAPBR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			var HTML =	'<span><input type="text"  id="id'+rowno+'"   name="id'+rowno+'" maxlength="10"  disabled class=" DSVLBL form-control NoSpecialChar ROLEID form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				
			if ($(htmldata).find('[name=id'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
				$(htmldata).find('[name=id'+rowno+']').attr("value",data);

				return htmldata[0].outerHTML;      
				
	         } 
			 },
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


$(document).on("click", ".DeleteBrMapRow" , function() {
	var xml1=UI_getdata("Branch",$($(this).closest('tr').find('td')[0]).find('input').val(),$("#BRCR_BRANCHID").val(),"","","LSW_SCHKPRIMRYVALD");
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
 
 
 ///var Id=$($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find('input[type=text]').val()	
	var xml=UI_getdata($("#PrcsID").val(),Id,"BRANCH","","","LSW_SDELMAPUSERDATA")
} 
	
})

 function ToDay()
 {
	 
	 var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            return today = dd + '/' + mm + '/' + yyyy;
	 
 }
 