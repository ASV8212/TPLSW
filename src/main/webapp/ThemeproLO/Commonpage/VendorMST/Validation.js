
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



function GridControlVENDORMST (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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

	   { targets: 7, "render": function ( data, type, row, meta ) {                            
			

		   var rowno = meta.row;	
		   var HTML =	''
		   if($(EditAccess).find('RESULT').text()=='Y'){
			HTML =	'<span class="InitWF1"><input type="text" style="display:none" value="'+data+'" id="APPLNO'+rowno+'" name="APPLNO" maxlength="10" class="form-control ">';			
		   }
		   else{
			   HTML =	'<span class="InitWF1" style="display:none"><input type="text" style="display:none" value="'+data+'" id="APPLNO'+rowno+'" name="APPLNO" maxlength="10" class="form-control ">';			
		   }
			HTML = HTML + '<div class="HyperControls">'
			HTML = HTML + '<a type="button" class="Btxt4 Venedit" data-toggle="modal" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
			HTML = HTML + ' </div></span>'
			
			
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				return htmldata[0].outerHTML; 
	
		     		
			
         } 
		 },
		   { targets: 8, "render": function ( data, type, row, meta ) {                            
				

				var rowno = meta.row;	 
				var HTML =	'<span><input type="text"  id="UNIQ_id'+rowno+'"   name="UNIQ_id'+rowno+'" maxlength="10"  disabled class=" DSVLBL form-control NoSpecialChar RMK form-control ">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					

				if ($(htmldata).find('[name=UNIQ_id'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					
				
					$(htmldata).find('[name=UNIQ_id'+rowno+']').attr("value",data);

					
					return htmldata[0].outerHTML;      
					
		         } 
				 }
				 ,
		   { targets: 9, "render": function ( data, type, row, meta ) {                            
				

				var rowno = meta.row;	 
				var HTML =	'<span><input type="text"  id="id'+rowno+'"   name="id'+rowno+'" maxlength="10"  disabled class=" DSVLBL form-control NoSpecialChar RMK form-control ">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					

				if ($(htmldata).find('[name=id'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					
				
					$(htmldata).find('[name=id'+rowno+']').attr("value",data);

					
					return htmldata[0].outerHTML;      
					
		         } 
				 }
	        	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}




function GridControlDIRDEPARTMENT (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			var HTML =	'<span><input type="text"  id="id'+rowno+'"   name="id'+rowno+'" maxlength="10"  disabled class=" DSVLBL form-control NoSpecialChar RMK form-control ">';			 
			HTML = HTML + '</span>'; 
				 
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
	   { targets: 3, "render": function ( data, type, row, meta ) {                            
			

		   var rowno = meta.row;	
		   var HTML =	'<span class="InitWF1"><input type="text" style="display:none" value="'+data+'" id="APPLNO'+rowno+'" name="APPLNO" maxlength="10" class="form-control ">';			
			HTML = HTML + '<div class="HyperControls">'
			HTML = HTML + '<a type="button" class="Btxt4 Updtebranch" data-toggle="modal" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
			HTML = HTML + ' </div></span>'
			
			
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				return htmldata[0].outerHTML; 
	
		     		
			
         } 
		 }
	        	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}


function EXCELDocDwnld(id)
{
//ajaxindicatorstart("Generating, Please wait...");
var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
    var url= $("#DMY1").val()
    
    
         if ($("#VENDORTYPE").val()== "")
        {
			alert("Fill the Mandatory Fields");
			return;
		}
		    	
	//if(AcctNo!=""){
	//RedirectURL = url.replace("XXDMSIDXX",$("#"+id).val().split("\\")[0]);
	var Date1=get2date()
	var Name=$("#VENDORTYPE").val()+'_'+Date1
	
	//RedirectURL =window.location.origin+"/TPLSW/ExcelDwnld?param1=" + $("#VENDORTYPE").val() + "&param2=" + $("input[name='VENDORDETAILS']:checked").val()+"&param3=&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SEXPORTVENDORDETAILS&Prvnt="+$("#Prvnt").val();
	var param2="VENDORMNGMNT";
 //var Date1=get2date()
 //var Name="Vendor"+'_'+Date1
 RedirectURL=window.location.origin+"/TPLSW/MultiShtExcelDwnld?param1=VENDOREMPL&param2="+param2+"&param3="+$("#VENDORTYPE").val()+"&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SGETEXCELDATA";

	
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




function FormatEXCELDocDwnld(id)
{

var IOP=LoadFrmXML("RS006");
var RedirectURL="";
var url= $("#DMY1").val()
var Name='DSA Connector Mapping'
var param2="VENDORFORMAT";

RedirectURL=window.location.origin+"/TPLSW/MultiShtExcelDwnld?param1=VENDOREMPL&param2="+param2+"&param3="+$("#VENDORTYPE").val()+"&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SGETEXCELDATA";
$("#DocView").attr("src", RedirectURL);
    	
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
 	var   param2="LSW_SEXCELMULTIUPLOADDATA";
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
 				//$(id).closest('div').find('input[type="file"]').attr('disabled',true)
 					//$(id).closest('div').find('input[type="file"]').val('');
 					//$(id).closest('div').find('input[type="file"]').hide();
 				//$(id).closest('div').append('&nbsp;<span>'+name+'</span> &nbsp;<img src="ThemeproLO/Common/Images/delete-16.png" id="MnlDel" style="padding-bottom: 2px;" onclick="Attchdelete(this)" alt="Smiley face">')
 				//$(id).closest('div').find('input[type="hidden"]').val(name);
              //  $('.DDU').hide();
 			//var BulkInsert=	UI_getdata($(op).find("VR").text(),"","","","","LSW_SVDRBULKDATAINSERT")	
		//	var BulkInsertRST=$(BulkInsert).find('RESULT').text()
			var VALIDATIONCHK=UI_getdata($(op).find("VR").text(),"","","","","LSW_SVDRVALIDATION")
			var BulkInsertRST=$(VALIDATIONCHK).find('RESULT').text();
			if($(VALIDATIONCHK).find('RESULT').text()=="SUCCESS")
			{
			var VENDORDATAINSERT=UI_getdata($(op).find("VR").text(),"","","","","LSW_SVDRUPLOADGRIDVALID")	
				
			$(".UploadPageData").show();
			    var Sheet="";
				if($("#PrMs6").val()!="")
				{
					Sheet=$("#PrMs6").val()
				}
				else
				{
					Sheet="SheetI"
				}
			FncallMultiPagingGrd(this,'Table4',{spname:'LSW_SGETUPLDINVLDDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:Sheet,MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','IVLDVDRDATA');
			
			var xml=UI_getdata($("#PrcsID").val(),Sheet,"","","","LSW_SGETUPLDVDRCNT")
			
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

function GridControlIVLDVDRDATA (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
 
function VENDDATAINSERT()
{
	if($("#CntStatus").val() == "Y")
	{
		if (confirm("Are you sure,Process with successfully entries only") == true) {
	var SVDRBULKDATAINSERT=UI_getdata($('#PrcsID').val(),$("#LogUsr").val(),"","","","LSW_SVDRBULKDATAINSERT")	
	$(location).attr('href',window.location.origin + "/TPLSW/VendorMST"); 
	}
	}
else
   {
	   var SVDRBULKDATAINSERT=UI_getdata($('#PrcsID').val(),$("#LogUsr").val(),"","","","LSW_SVDRBULKDATAINSERT")	
	$(location).attr('href',window.location.origin + "/TPLSW/VendorMST"); 
   }
}


function ShowImportPopUp()
{
	$(".UploadPageData").hide();
	$("#USERIMPORT").click();
}


function ChkCategory()
{
	if($("#SRCCATRY").val()!="")
	{
		if($("#SearchField").val()=="")
		{
			alert('Search field is Mandatory')
			return false;
		}
		else if($("#SearchField").val().length<5)
		{
			alert('Search field length is minimum 5 digits') 
			$("#SearchField").val('');
			return false;
		}
		else
		{
			FncallMyAppl(this,'Table2',{spname:'LSW_SGETVENDORMST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Search',brid:$("#SRCCATRY").val(),MnuId:$("#SearchField").val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','VENDORMST');
			
			oTable = $('#Table2').DataTable();
		    $('#SearchTable2').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		    })	
		}
	}
	else if($("#SearchField").val()!="")
	{
		if($("#SRCCATRY").val()=="")
		{
			alert('Sourcing Category is Mandatory')
			return false;
		}	
	}
	else
	{
		FncallMyAppl(this,'Table2',{spname:'LSW_SGETVENDORMST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'Load',brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||8','VENDORMST');
		
		oTable = $('#Table2').DataTable();
		$('#SearchTable2').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	
	}
}
