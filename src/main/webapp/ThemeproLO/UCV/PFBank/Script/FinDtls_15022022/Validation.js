
function GridControlDetailFINANACESHEET (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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

        'bFilter': false,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
 
				 { targets: 1, "render": function ( data, type, row, meta ) {                            
			 			
			 				var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="FINT_YEAR1'+rowno+'" style="width:140px"  name="FINT_YEAR1'+rowno+'" maxlength="40" class="form-control IsNumberFieldsSpl  GridMndtry IsCURCommaFields form-control">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=FINT_YEAR1'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=FINT_YEAR1'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   	
			 			
							
				         } 
						 },
						 { targets: 2, "render": function ( data, type, row, meta ) {                            
							 
								 var rowno = meta.row;	 
									var HTML =	'<span><input type="text" id="FINT_YEAR2'+rowno+'" style="width:140px" name="FINT_YEAR2'+rowno+'" maxlength="40" class="form-control IsCURCommaFields GridMndtry IsNumberFieldsSpl  form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=FINT_YEAR2'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=FINT_YEAR2'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;  		
						  } 
					 },
					 { targets: 3, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="FINT_YEAR3'+rowno+'" style="width:140px" name="FINT_YEAR3'+rowno+'" maxlength="40" class="form-control IsCURCommaFields GridMndtry IsNumberFieldsSpl  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=FINT_YEAR3'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=FINT_YEAR3'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}

function GetLatestFincYr(){
	if($("#FIMA_YEAR").val()!=""){
		return $("#FIMA_YEAR").val()
	}
	else{
		alert("Kindly choose Latest Year")
		return
	}
}

function GrdLoadOnYrChng(){
	
	FncallDocChkLst(this,'Table4',{spname:'LSW_SGETFINANCEGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'FD|'+$('#FIMA_CUSID').val(),MnuId:GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4','FINANACESHEET');
		if($("#FIMA_YEAR").val() !="")
		{
		var op = UI_getdata($("#FIMA_YEAR").val(),"","","","","LSW_SSTNDRYR")
		$("#RACD_RADYEARI").val($(op).find("RACD_RADYEARI").text())
		$("#RACD_RADYEARII").val($(op).find("RACD_RADYEARII").text())
		}
}
function FormatEXCELDocDwnld(id)
{

var IOP=LoadFrmXML("RS006");
var RedirectURL="";
var url= $("#DMY1").val()
var Name='PROFITLOSS'
var param2="PROFITMNGMNT";

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
	  //$("#PrcsID").attr('value',$(op).find("VR").text())
 	var   param1=$(op).find("VR").text();
 	var   param2="LSW_SEXCELMULTIUPLOADDATA";
 	var   param3="LSW_TPROFITLOSS";
 	
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
				var VALIDATIONCHK=UI_getdata($(op).find("VR").text(),"","","","","LSW_SPPROFITEXCL")
			var BulkInsertRST=$(VALIDATIONCHK).find('RESULT').text();
			if($(VALIDATIONCHK).find('RESULT').text()=="SUCCESS")
			{
				
			    FncallDocChkLst(this,'Table4',{spname:'LSW_SSHEETPROFITLOSS',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val()+'~'+$(op).find("VR").text(),brid:$('#FIMA_CUSID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4,6','FINANACESHEET');
}
 				else
 				{
					var RESULT=$(VALIDATIONCHK).find('RESULT').text()
	
				if(RESULT != "")
				{
			    var Alert2=''
				var nameArr = RESULT.split(',')
                 k=nameArr.length
				 for(i=0;i<k;i++)
				 {
					var Alert1= nameArr[i]
					var Alert2 = Alert2 +'\r\n'+Alert1
				 }
				   alert('Complete the below Mandatory actionables \r\n'+Alert2)
				   return false;
				}
 				}
 	  
 	        }
		}
 	    });
		}