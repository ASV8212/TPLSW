
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

function GridControlDEPARTMENTMST (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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

	   { targets: 4, "render": function ( data, type, row, meta ) {                            
			

		   var rowno = meta.row;	
		   var HTML =	''
		   if($(EditAccess).find('RESULT').text()=='Y'){
			HTML =	'<span class="InitWF1"><input type="text" style="display:none" value="'+data+'" id="APPLNO'+rowno+'" name="APPLNO" maxlength="10" class="form-control ">';			
		   }
		   else{
			   HTML =	'<span class="InitWF1" style="display:none"><input type="text" style="display:none" value="'+data+'" id="APPLNO'+rowno+'" name="APPLNO" maxlength="10" class="form-control ">';			
		   }
			HTML = HTML + '<div class="HyperControls">'
			HTML = HTML + '<a type="button" class="Btxt4 DEPTedit" data-toggle="modal" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
			HTML = HTML + ' </div></span>'
			
			
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				return htmldata[0].outerHTML; 
	
		     		
			
         } 
		 },
		   { targets: 5, "render": function ( data, type, row, meta ) {                            
				

				var rowno = meta.row;	 
				var HTML =	'<span><input type="text"  id="UNIQ_ID'+rowno+'"   name="UNIQ_ID'+rowno+'" maxlength="10"  disabled class=" DSVLBL form-control NoSpecialChar RMK form-control ">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					

				if ($(htmldata).find('[name=UNIQ_ID'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					
				
					$(htmldata).find('[name=UNIQ_ID'+rowno+']').attr("value",data);

					
					return htmldata[0].outerHTML;      
					
		         } 
				 }
				 ,
		   { targets: 6, "render": function ( data, type, row, meta ) {                            
				

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
	var param2="BRANCHMNGMNT";
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
				var VALIDATIONCHK=UI_getdata($(op).find("VR").text(),"","","","","LSW_SBRVALIDATION")
			var BulkInsertRST=$(VALIDATIONCHK).find('RESULT').text();
			if($(VALIDATIONCHK).find('RESULT').text()=="SUCCESS")
			{
				var VENDORDATAINSERT=UI_getdata($(op).find("VR").text(),"","","","","LSW_SBRUPLOADGRIDVALID")	
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
			    FncallMultiPagingGrd(this,'Table4',{spname:'LSW_SGETUPLDINVLDBRDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:"SheetI",MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','IVLDBRDATA');
		   	    
				var xml=UI_getdata($("#PrcsID").val(),"SheetI","","","","LSW_SGETBRUPLDCNT")
			
			$("#SuccessCnt").text($(xml).find('SUCCESSCNT').text())
			$("#FailedCnt").text($(xml).find('FAILEDCNT').text())
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
 
function GridControlIVLDBRDATA (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  if($("#Table4").find('tr td').text() != "No data available in table")
  {
	if (confirm("Are you sure,Process with successfully entries only") == true) {
	var SUSRBULKDATAINSERT=UI_getdata($('#PrcsID').val(),$('#LogUsr').val(),"","","","LSW_SBRBULKDATAINSERT")	
	$(location).attr('href',window.location.origin + "/TPLSW/DirDepartmentMST"); 
	}
  }
else
   {
	var SUSRBULKDATAINSERT=UI_getdata($('#PrcsID').val(),$('#LogUsr').val(),"","","","LSW_SBRBULKDATAINSERT")	
	$(location).attr('href',window.location.origin + "/TPLSW/DirDepartmentMST"); 
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
var Name='Branch Mapping'
var param2="BRANCHFORMAT";

RedirectURL=window.location.origin+"/TPLSW/MultiShtExcelDwnld?param1=VENDOREMPL&param2="+param2+"&param3="+$("#VENDORTYPE").val()+"&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SGETEXCELDATA";
$("#DocView").attr("src", RedirectURL);
    	
}
