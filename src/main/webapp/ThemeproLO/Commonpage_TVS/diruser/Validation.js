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
	
var xml=UI_getdata($("#URCR_STATE").val(),"","","","","LSW_SGETCITYCODE")
$("#URCR_CODE").val($(xml).find('StateID').text())
if($("#URCR_CODE").val()=="")
{
	$("#URCR_CODE").next().removeClass('active');
}
else
{
	$("#URCR_CODE").next().addClass('active');
}
	
}

function getUserName()
{
  var userName=$("#URCR_NAME").val()
   $("#URCR_ID").val(userName)
   ///$("#URCR_UNIQID").val(userName+$("#PrcsID").val());	
}



function checkType()
{
var Type=$("input[name='USERTYPE']:checked"). val();
	
	if(Type=="Update")
		{
		 $(".Update").show
		 $(".New").hide();
		 $(".Update").css("display", "block");
		 $(".New").css("display", "none");
		 $("#UserSave").hide();
		}
	else
		{
		 $(".Update").hide();
		 $(".New").show();
		 $(".Update").css("display", "none");
		 $(".New").css("display", "block");
		 $("#UserSave").show();
		}
}

function GridControlDIRUSERROLEMAP (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
           
	   { targets: 2, "render": function ( data, type, row, meta ) {                            
		   var rowno = meta.row;	 
			var HTML =	'<span><input type="checkbox" class="custom-control-input DSVLBL" title="'+row[0]+'"  value="'+data+'" name="KYCD_ACTION'+rowno+'" id="KYCD_ACTION'+rowno+'">';			 
  		HTML = HTML + '<label class="custom-control-label GridLabel" for="KYCD_ACTION'+rowno+'"></label></span>';	
    		//var HTML =	'<span><input type="text" id="KYCD_OSV'+rowno+'"  name="KYCD_OSV'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
    			 
    		var htmldata = $(HTML);
 			
 			$(htmldata).find('[name=KYCD_ACTION'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
 			
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

function GridControlDIRBRMAP (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			var HTML =	'<span><input type="checkbox" class="custom-control-input DSVLBL" title="'+row[2]+'" value="'+data+'" name="KYCD_OSV'+rowno+'" id="KYCD_OSV'+rowno+'">';			 
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



function GridControlDIRBRMAPMAIN (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
	   { targets: 2, "render": function ( data, type, row, meta ) {                            
		   		
			       var rowno = meta.row;		 
		 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields UpdPrimaryBrMap" value="Yes" id="MOBY'+rowno+'" name="MOBNO"><label class="custom-control custom-control-label" for="MOBY'+rowno+'"></label>';			 
		 		HTML = HTML + '</span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=MOBNO][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
		        return htmldata[0].outerHTML; 
         } 
		 },
		 { targets: 3, "render": function ( data, type, row, meta ) {                            
                  	 		
                			var rowno = meta.row;	
                       var HTML =	'<span id=""> <img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DeleteBrMapRow BTNHIDE"  title="Delete" attr-Upd="UCBM_ACTION'+rowno+'"  width="20" height="20"/>';
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


function GridControlDIRROLEMAPMAIN (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
	   { targets: 2, "render": function ( data, type, row, meta ) {                            
			       var rowno = meta.row;		 
		 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields UpdPrimaryRoleMap" value="Yes" id="URCM_PRIMARY'+rowno+'" name="URCM_PRIMARY"><label class="custom-control custom-control-label" for="URCM_PRIMARY'+rowno+'"></label>';			 
		 		HTML = HTML + '</span>';			  
		 		
		 		var htmldata = $(HTML);
					
					//$(htmldata).find('[name=URCM_PRIMARY'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
		        //return htmldata[0].outerHTML; 
				$(htmldata).find('[name=URCM_PRIMARY][value="'+data+'"]').attr('checked', 'checked');
                         return htmldata[0].outerHTML;
         } 
		 },
		  { targets: 3, "render": function ( data, type, row, meta ) {                            
                  	 		 
                			var rowno = meta.row;	
                       var HTML =	'<span id=""> <img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DeleteRoleMapRow BTNHIDE"  title="Delete" attr-Upd="CRCM_ACTION'+rowno+'"  width="20" height="20"/>';
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


function GridControlRPTUSRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			var HTML =	'<span><input type="text"  id="Rptid'+rowno+'" style="display:none;"  name="Rptid'+rowno+'" maxlength="10"  disabled class=" DSVLBL form-control NoSpecialChar ROLEID form-control ">';			 
			HTML = HTML + '<div class="">'
			HTML = HTML + '<a>'+data+'</a>'
			HTML = HTML + ' </div></span>'
			
			//HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=Rptid'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=Rptid'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 },
	   { targets: 1, "render": function ( data, type, row, meta ) {                            
			

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
			 { targets: 2, "render": function ( data, type, row, meta ) {                            
			

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
		 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="URCM_RPTID'+rowno+'" name="URCM_RPTID"><label class="custom-control custom-control-label" for="URCM_RPTID'+rowno+'"></label>';			 
		 		HTML = HTML + '</span>';			  
		 		
		 		var htmldata = $(HTML);
					
					//$(htmldata).find('[name=URCM_PRIMARY'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
		        //return htmldata[0].outerHTML; 
				$(htmldata).find('[name=URCM_RPTID' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
         } 
		 }
	        	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}

function GetUserCategory(Event)
{
	var Type=$("#URCR_USRTYPE").val()
	var CATEGORY=$("#URCR_CATEGORY").val()
	
	var xml=UI_getdata(Type,"","","","","LSW_SGETUSERCATEGORY")
	
	if($(xml).find('RESULT').text() != 'N')
		{
		    $("#URCR_CATEGORY").attr('disabled',false);
		    $("#URCR_CATEGORY").html("")
			$("#URCR_CATEGORY").append($(xml).find("RESULT").html());
		    $("#URCR_CATEGORY").material_select();
			$("#URCR_CATEGORY").addClass('URCRMndtry');
		    $(".NAB").show();
			
			$(".CATNAME").text(Type+' *');
		}
	else
		{
		    $("#URCR_CATEGORY").val('')
		    $("#URCR_CATEGORY").material_select('destroy');
		    $("#URCR_CATEGORY").material_select();
		    $('.CATEGORY').find('.select-dropdown').attr('disabled',true)
			$("#URCR_CATEGORY").removeClass('URCRMndtry');
		    $(".NAB").hide();
			$(".CATNAME").text('Category');
		}
		
		if(Event=="Load")
		{
			$("#URCR_CATEGORY option:contains("+CATEGORY+")").attr("selected","selected")
			$(".CATNAME").text(Type+' *');
		}
}


function GetUserMap()
{
  var Name=$("#URCR_NAME").val();
 /* if(Name=="")
	  {
	   alert('Enter the User Name');
	   return false;
	  // $("#UserModalClose").click();
	  }
  else
	  {*/
  $("#RPTID").val($("#URCR_RPTUSRID").val())
  $('#CATEGORY').val($("#URCR_CATEGORY").val())
  $('#BRMAP').val($("#URCR_USRTYPE").val())
  $("#UCBM_ROLEID").val(Name);
  $("#UCBM_ROLENAME").val(Name);
  
  
	  $("#UCBM_UNIQID").val($("#URCR_UNIQID").val())
 
  $("#BTNUSRBRGRD").click();
  $("#UserModalPop").click();
	//  }
  //$("#UserModalClose").click();
  oTable = $('#Table2').DataTable();
		$('#SearchTable2').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	
}


function GetRoleMap()
{
  var Name=$("#URCR_NAME").val();
  /*if(Name=="")
	  {
	   alert('Enter the User Name');
	   return false;
	  // $("#UserModalClose").click();
	  }
  else
	  {*/
  $("#URCM_ROLEID").val(Name);
  $("#URCM_ROLENAME").val(Name);
  
 
	$("#URCM_UNIQID").val($("#URCR_UNIQID").val())

  //$("#URCM_ROLENAME").next().addClass('active');
  $("#BTNUSRROLGRD").click();
  $("#RoleModalPop").click();
	//}
  //$("#UserModalClose").click();
  
  	oTable3 = $('#Table4').DataTable();
		$('#SearchTable4').keyup(function(){
		      oTable3.search($(this).val()).draw() ;
		})	
}


function RefresGrid()
{
	
	var k=	$("#URCR_CATEGORY").val().length	
    var Name1="";
for(i=0;i<k;i++)
	 {
	 var Name=$("#URCR_CATEGORY").val()[i]
    // var CUSTEXT =$($("#APDD_PDDONEBY").find('active').prevObject["0"].selectedOptions).find('option').prevObject[i].text
		
	 if(Name!=undefined)
		 {
	       Name1= Name1+','+Name
	      //var CUSText1= CUSText1+','+CUSTEXT
         }
	 }
        Name1 =Name1;
     var Name1=Name1.replace(',','')
	 
    $("#URCR_BRMAPPINGCA").val(Name1)
      // $("#APDD_PDDONEBYID").val(CUSTOMERNAMES)
      // $("#APDD_PDDONEBYNAME").val(CUSText1)
	
	FncallMultiPagingGrd(this,'Table5',{spname:'LSW_SGETFINLBRGRID1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val()+'|'+$("#URCR_UNIQID").val(),brid:$('#URCR_USRTYPE').val()+'|'+$("#URCR_RPTUSRID").val(),MnuId:Name1},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,4,5,6,7','DIRBRMAPMAIN');
}


$(document).on("click", ".DeleteRoleMapRow" , function() {
	var r = confirm("Are you sure!! to delete the record");
if (r == true) {
	var Id=$($(this).closest('tbody tr').find('td')[0]).find('input[type=text]').val()	
 oTable = $('#'+ $(this).closest("table").attr("id")).DataTable();
 oTable.row($(this).closest('tbody tr').index()).remove().draw();
	
	var xml=UI_getdata($("#PrcsID").val(),Id,"Role","","","LSW_SDELMAPDATA")
}
})

$(document).on("click", ".DeleteBrMapRow" , function() {
	var r = confirm("Are you sure!! to delete the record");
if (r == true) {
	
	 var Id=$($(this).closest('tbody tr').find('td')[0]).find('input[type=text]').val()	
 oTable = $('#'+ $(this).closest("table").attr("id")).DataTable();
 oTable.row($(this).closest('tbody tr').index()).remove().draw();

	var xml=UI_getdata($("#PrcsID").val(),Id,"Branch","","","LSW_SDELMAPDATA")
} 
	
})

$(document).on("click", ".UpdPrimaryRoleMap" , function() {

var Id=$($(this).closest('tbody tr').find('td')[0]).find('input[type=text]').val()	
radioTbl6 = $(document).find('#Table6').DataTable();
 radioTbl6.$('input:radio:checked').not(this).prop("checked", false)
	 var Val=$(this).val();
	 var xml=UI_getdata($("#PrcsID").val(),Id,"Role",Val,"","LSW_SUPDMAPDATA")
	
})

$(document).on("click", ".UpdPrimaryBrMap" , function() {

 var Id=$($(this).closest('tbody tr').find('td')[0]).find('input[type=text]').val()	
 radioTbl5 = $(document).find('#Table5').DataTable();
 radioTbl5.$('input:radio:checked').not(this).prop("checked", false)
	 var Val=$(this).val();
	 var xml=UI_getdata($("#PrcsID").val(),Id,"Branch",Val,"","LSW_SUPDMAPDATA")
	
})


function getUserIdPop()
{
	$("#RPTUSRID").val($("#URCR_RPTUSRID").val());
	$("#BTNRPTUSRID").click();
	oTable7 = $('#Table7').DataTable();
		$('#SearchTable7').keyup(function(){
		      oTable7.search($(this).val()).draw() ;
		})	
	$("#RptIDModalPop").click();
}

	