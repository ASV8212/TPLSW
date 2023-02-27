

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
if($(val).find("Telephone").text()!="")
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

/*

function GridControlDetailDIRDEPART (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;		 
		 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="STATUSY'+rowno+'" name="RCUS_NAGATIVSTATUS'+rowno+'"><label class="custom-control-label" for="STATUSY'+rowno+'">Yes</label>';			 
		 		HTML = HTML + '<input type="radio" class="custom-control-input CBSIDBfields" value="No" id="STATUSN'+rowno+'" name="RCUS_NAGATIVSTATUS'+rowno+'"><label class="custom-control-label" for="STATUSN'+rowno+'">No</label></span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=RCUS_NAGATIVSTATUS'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
	        	return htmldata[0].outerHTML;      		
			
        } 
		 },
		 { targets: 2, "render": function ( data, type, row, meta ) {                            
	 			
				var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="RCUS_REMARKS'+rowno+'"  name="RCUS_REMARKS'+rowno+'" maxlength="25" class="form-control NoSpecialChar form-control ">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					

				if ($(htmldata).find('[name=RCUS_REMARKS'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					
				
					$(htmldata).find('[name=RCUS_REMARKS'+rowno+']').attr("value",data);

					
					return htmldata[0].outerHTML;      		
					
		         } 
				 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	 
}*/

function GridControlDetailDIRDEPART  (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
	   { targets: 0, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text" id="RCUS_REMARKS'+rowno+'"  name="RCUS_REMARKS'+rowno+'" maxlength="25" class="form-control NoSpecialChar form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
			

			if ($(htmldata).find('[name=RCUS_REMARKS'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=RCUS_REMARKS'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;   
				
	         } 
			 }
			 
			
			
	        	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}



function GridControlDIRUSER (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			var HTML =	'<span><input type="text"  id="id'+rowno+'" style="display:none;" value="'+data+'"  name="id'+rowno+'" maxlength="10"  disabled class=" DSVLBL form-control LEADID NoSpecialChar RMK form-control ">';			 
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
			 }
	   ,
	   { targets: 5, "render": function ( data, type, row, meta ) {                            
		   var rowno = meta.row;
			var HTML =	''
			var HTML ='<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" onchange="CheckAction(this)"  id="RXLD_CLOSERTYPE'+rowno+'" name="RXLD_CLOSERTYPE'+rowno+'">';
				HTML = HTML + '<option value="">Select</option>';
				HTML = HTML + '<option value="Warm">Warm</option>';
				HTML = HTML + '<option value="Cool">Cool</option>';
				HTML = HTML + '<option value="Convert">Convert</option></span>';
			var htmldata = $(HTML);
				return htmldata[0].outerHTML; 
         } 
		 }
		 ,
		 { targets: 6, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;

	        var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this)" class="" width="35" height="25">';
       		var	HTML =  HTML + '<input type="hidden" id="REMARK'+rowno+'"  name="REMARK" disabled class="form-control DSVLBL form-control     ">';
       		
       						HTML = HTML + '</span>';

			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=UNIQ_ID'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=UNIQ_ID'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 },
		 { targets: 7, "render": function ( data, type, row, meta ) {                            
			var rowno = meta.row;	
              
			  var HTML = '<span><div class="HyperControls "><a class="Btxt4 APCDSTATUS BTNHIDE ViewLink" onclick="ViewLeadDt(this)" id="View'+ rowno +'" name="View'+ rowno +'" data-value="View" data-table="TableRR" href="#">View</a></div>';
				  HTML = HTML + '<div class="HyperControls"><a class="Btxt4 APCDSTATUS BTNHIDE InitWF SubmLink" id="Submit'+ rowno +'" name="Submit'+ rowno +'"  data-table="TableRR" href="#">Submit</a></div>';
			var htmldata = $(HTML);

			if ($(htmldata).find('[name=id'+rowno+']').hasClass("IsCURCommaFields"))
				{
				    data = CURCommaSep(data);
				}
				$(htmldata).find('[name=id'+rowno+']').attr("value",data);

				return htmldata[0].outerHTML;      	
	         } 
			 },	{ targets: 9, "render": function ( data, type, row, meta ) {                            
	 
			        var rowno = meta.row;	 
      	      		var HTML =	'<span><input type="text" id="NXTCOMMDT'+rowno+'"  name="NXTCOMMDT" maxlength="10" class="form-control form-control IsNumberFields ISPastDateFields ISDatefield ">';			 
      	      		HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>'; 
      	      			 
      	      		var htmldata = $(HTML);

      				if ($(htmldata).find('[name=NXTCOMMDT]').hasClass("IsCURCommaFields"))
      					{
      					data = CURCommaSep(data);
      					}

      	   			$(htmldata).find('[name=NXTCOMMDT]').attr("value",data);
      	   			return htmldata[0].outerHTML;     
				
	         } 
			 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}



function DshBrdData(id)
{
	var BRID=$(id).attr('name');
	var BrName=$(id).text();
	
	var index=$(id).closest('td').index()
	var colname=$($(id).closest('table').find('thead th')[index]).text();
	$("#BRANCHNAME").val(colname+' :'+BrName);
	//$("#BRANCHNAME").val('BRANCH :'+BrName);
	$("#BRANCHID").val(BRID);
	$("#BRPopup").click();
	 $("#BRViewRpt").trigger('click')

}

function InitNewUser()
{
 $(location).attr('href',window.location.origin + "/TPLSW/ManageLead?PrcsID=&PrMs3=NEW")
}
	
function getType()
{
	var k=	$("#URCR_USRTYPE").val().length	
var CUSTOMERNAMES=""
	var CUSText1=""
 for(i=0;i<k;i++)
	 {
	 var CUSTOMERNAMES1=$("#URCR_USRTYPE").val()[i]
     //var CUSTEXT =$($("#APDD_PDDONEBY").find('active').prevObject["0"].selectedOptions).find('option').prevObject[i].text
		
	 if(CUSTOMERNAMES1!=undefined)
		 {
	      var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSTOMERNAMES1
	      //var CUSText1= CUSText1+','+CUSTEXT
      }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')
       //var CUSText1=CUSText1.replace(',','')
       $("#URCR_USRTYPEI").val(CUSTOMERNAMES)
      // $("#APDD_PDDONEBYNAME").val(CUSText1)
}

function EXCELDocDwnld(id)
{
//ajaxindicatorstart("Generating, Please wait...");
var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
    var url=$("#DMY1").val()
    
    var Type=$("#URCR_USRTYPEI").val();
      
		    	
	//if(AcctNo!=""){
	//RedirectURL = url.replace("XXDMSIDXX",$("#"+id).val().split("\\")[0]);
	var Date1=get2date()
	var Name='USER_MANAGEMENT'+'_'+Date1
	
	//RedirectURL =window.location.origin+"/TPLSW/ExcelDwnld?param1=" + $("input[name='USERDETAILS']:checked").val()+ "&param2=&param3=&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SEXPORTUSERDETLS&Prvnt="+$("#Prvnt").val();	
	var param2="USERMNGMNT";
 //var Date1=get2date()
 //var Name="Vendor"+'_'+Date1
 RedirectURL=window.location.origin+"/TPLSW/MultiShtExcelDwnld?param1=VENDOREMPL&param2="+param2+"&param3=&param4="+Type+"&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SGETEXCELDATA";
	
	$("#DocView").attr("src", RedirectURL);
	
	/*var link = document.createElement("a");
    link.download = 'Report';
    link.href = RedirectURL;
    link.click();*/
	//ScrnFileDownload(RedirectURL);
	//window.open(RedirectURL);
	//WintabsCtrl(RedirectURL,'Term Sheet',AppNo,'yes');
	//ajaxindicatorstop();
	 $(".close").click();	    	
}

function UploadData(id)

 {
 	
 		//var s=$(id).val()
		var s= $(id).closest('div').find('input[type="file"]').val()
 var lastIndex = s.lastIndexOf(".")
 var s2 = s.substring(lastIndex + 1); 


 if(s2!='xlsx')
 {
 //alertify.alert('Invalid File Format');
alert('Invalid File Format');
 $(id).closest('div').find('input[type="file"]').val('');
 return;	
 }

 	var fd = new FormData();
 	file_data = $('input[type="file"]')[0].files;
 	  fd.append("file_"+"1", file_data[0]);
 	  
 	  var name=file_data[0].name.split('.')[0];
 	  var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	  $("#PrcsID").attr('value',$(op).find("VR").text())
 	var   param1=$(op).find("VR").text();
 	var   param2="SCF_SEXCELMULTIUPLOADDATA";
 	var   param3="LSW_TDSACNCTRVNDR";
 	
 		$.ajax({
 			url:"/TPLSW/ExcelMultiDynmcUpld?param1="+param1+"&param2="+param2+"&param3="+param3+"&param4=&param5=&Prvnt="+$(window.parent.parent.document).find("#Prvnt").val(),
 			data :  fd,
 			async:false,
 	        contentType: false,
 	        processData: false,
 	        type: 'POST',
 	        success: function (xml1) {

 	        	alert(xml1);
 				if(xml1=='Success')
 				{
 				$(id).closest('div').find('input[type="file"]').val('');
				var VALIDATIONCHK=UI_getdata($(op).find("VR").text(),"","","","","LSW_SUSRVALIDATION")
			var BulkInsertRST=$(VALIDATIONCHK).find('RESULT').text();
			if($(VALIDATIONCHK).find('RESULT').text()=="SUCCESS")
			{
				var VENDORDATAINSERT=UI_getdata($(op).find("VR").text(),"","","","","LSW_SUSRUPLOADGRIDVALID")	
 				$(".UploadPageData").show();
			    $(".UserPage").hide();
				var Sheet="";
				if($("#PrMs6").val()!="")
				{
					Sheet=$("#PrMs6").val()
				}
				else
				{
					Sheet="SheetI"
				}
			    FncallMultiPagingGrd(this,'Table4',{spname:'LSW_SGETUPLDINVLDUSRDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:Sheet,MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','IVLDUSRDATA');
		   	    
				var xml=UI_getdata($("#PrcsID").val(),Sheet,"","","","LSW_SGETUSRUPLDCNT")
			
			$("#SuccessCnt").text($(xml).find('SUCCESSCNT').text())
			$("#FailedCnt").text($(xml).find('FAILEDCNT').text())
			$("#CntStatus").val($(xml).find('STATUS').text())
			oTable = $('#Table4').DataTable();
		      $('#SearchTable4').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		   })
			}
		   else
			{ 
 		//	var BulkInsert=	UI_getdata($(op).find("VR").text(),"","","","","LSW_SUSERBULKDATAINSERT")

           // var BulkInsert=	UI_getdata($(op).find("VR").text(),"","","","","LSW_SUSERBULKDATAINSERT")	
			//var BulkInsertRST=$(BulkInsert).find('RESULT').text()
			
				if(BulkInsertRST != '')
						{
						  
						  var Alert2=''
								var nameArr = BulkInsertRST.split(',')
						         k=nameArr.length
								 for(i=0;i<k;i++)
								 {
									var Alert1= nameArr[i]
									var Alert2 = Alert2 +'\r\n'+Alert1
								 }
						  
						  alert(Alert2);
						   return false;
						   
						   
						}
						else
						{
							alert ("Document Upload SucesssFully")
						}		
 				}
				}
 				else
 				{
 				alert("Upload Failed");
 				$(id).closest('div').find('input[type="file"]').val('');
 return;	
 				}
 	  
 	        },

 	    });
 }
 
 
function GridControlIVLDUSRDATA (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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

    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}


function USRDATAINSERT()
{
	if($("#CntStatus").val() == "Y")
	{
	if (confirm("Are you sure,Process with successfully entries only") == true) {
	var SUSRBULKDATAINSERT=UI_getdata($('#PrcsID').val(),$('#LogUsr').val(),"","","","LSW_SUSERBULKDATAINSERT")	
	$(location).attr('href',window.location.origin + "/TPLSW/DirUserMST"); 
	}
	}
else
   {
	var SUSRBULKDATAINSERT=UI_getdata($('#PrcsID').val(),$('#LogUsr').val(),"","","","LSW_SUSERBULKDATAINSERT")	
	$(location).attr('href',window.location.origin + "/TPLSW/DirUserMST"); 
   }	
}

function ShowImportPopUp()
{
	$(".UploadPageData").hide();
	$("#USERIMPORT").click();
}

function FormatEXCELDocDwnld(id)
{

var IOP=LoadFrmXML("RS006");
var RedirectURL="";
var url= $("#DMY1").val()
var Name='USERCONFIG'
var param2="USERFORMAT";

RedirectURL=window.location.origin+"/TPLSW/MultiShtExcelDwnld?param1=VENDOREMPL&param2="+param2+"&param3="+$("#VENDORTYPE").val()+"&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SGETEXCELDATA";
$("#DocView").attr("src", RedirectURL);
    	
}

function ViewLeadDt(Event)
{
	var LeadID=$(Event).closest('.tbodytr').find('.LEADID').val();
    $(location).attr('href',window.location.origin + "/TPLSW/ManageLead?PrcsID="+LeadID+"&PrMs3=VIEW")
}

function CheckAction(Event)
{
	var Value=$(Event).val().replace(/,/g,'');
		  if(Value=="Convert")
		  {
			$(Event).closest('tbody tr').find('img').hide();
			$(Event).closest('tbody tr').find('.ViewLink').hide();
			$(Event).closest('tbody tr').find('.SubmLink').show();
			
			//$($(Event).closest('tbody tr').find('td')[8]).find('span').css("display", "block");
			//$("#"+$($($(Event).closest('td').nextAll().eq(5)).find('.LPDSRELA')[1]).attr('id')).show();	

		  }
		  else
		  {
			$(Event).closest('tbody tr').find('img').show();
			$(Event).closest('tbody tr').find('.ViewLink').show();
			$(Event).closest('tbody tr').find('.SubmLink').hide();
			
		  }
}

