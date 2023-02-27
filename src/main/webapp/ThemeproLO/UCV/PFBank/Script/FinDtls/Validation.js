
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

function DOCDELETE(Type,Attachment,ULABEL)
{	  

	  $("#"+Attachment+"UPLOAD").css("display", "block")
	 $("."+Attachment).attr('disabled',false);
	 $("#"+Attachment).val('');

	 $("."+Type).find('table').next().text(''); 
	 //$("."+Type).find('table').next().text(ULABEL);
	  $("."+Attachment).hide()	 
}

function GrdLoadOnYrChng(){
	
	/* FncallDocChkLst(this,'Table4',{spname:'LSW_SGETFINANCEGRID',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'FR|'+$('#FNRA_CUSID').val(),MnuId:'FD~'+GetLatestFincYr()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||5,6','FINANACESHEET');
		if($("#FIMA_YEAR").val() !="")
		{
		var op = UI_getdata($("#FIMA_YEAR").val(),"","","","","LSW_SSTNDRYR")
		$("#RACD_RADYEARI").val($(op).find("RACD_RADYEARI").text())
		$("#RACD_RADYEARII").val($(op).find("RACD_RADYEARII").text())
		} */
	var Getyear=$("#FIMA_YEAR").val()
/* 	if(Getyear!="")
	{ */
	if(Getyear=="2020-2021")
	{
		
		/* $(".NINTY").hide();
		$(".TWENTY").hide();	
		$(".TWENT").removeClass('FIMAMndtry');
		$(".NINT").removeClass('FIMAMndtry');		
		$(".TWEONE").show(); */	
	
		DOCDELETE("FinExcl","FIMA_EXCEL","Excel Upload");		
		DOCDELETE("FinanDoc","FIMA_UPLD","Upload Document");
	 
		
	/* 	$(".FinExclView").show();
		$(".FinanView").show();  */
	}
	else if(Getyear=="2019-2020")
	{
	/* 	$(".TWEONE").hide();
		$(".NINTY").hide();
		$(".TWEON").removeClass('FIMAMndtry');
		$(".NINT").removeClass('FIMAMndtry');
		$(".TWENTY").show();		
		$(".TWENT").addClass('FIMAMndtry'); */
	
		DOCDELETE("FinExcl","FIMA_EXCEL","Excel Upload");		
		DOCDELETE("FinanDoc","FIMA_UPLD","Upload Document");
		 
		/* $(".FinExclView").show();
		$(".FinanView").show();  */
	}
	else if(Getyear=="2018-2019")
	{
	/* 	$(".TWEONE").hide();		
		$(".TWENTY").hide();
		$(".TWEON").removeClass('FIMAMndtry');
		$(".TWENT").removeClass('FIMAMndtry');
		$(".NINTY").show();	
		$(".NINT").addClass('FIMAMndtry'); */
	
		DOCDELETE("FinExcl","FIMA_EXCEL","Excel Upload");		
		DOCDELETE("FinanDoc","FIMA_UPLD","Upload Document");
		 
	/* 	$(".FinExclView").show();
		 $(".FinanView").show();  */
	}
	else
	{
		
		
	/* 	$(".TWENT").removeClass('FIMAMndtry');
		$(".NINT").removeClass('FIMAMndtry');
		$(".TWEONE").hide();
		$(".TWENTY").hide();
		$(".NINTY").hide(); */
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
		
function DocFldUpldHndlr(id,docu,KYCName)
{
var Val=$(id).val()

if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain= LoadFrmXML("RS001");
    var usrpwd= LoadFrmXML("RS002");
    var PrcsID=getUrlParam("PrcsID");
    var FormName= 'Collection';
  // var CusID=$('#CBSI_CUSID').val()
    var CusID='PF'
    var DocName=KYCName
    var names="";
    var descrptns="";
	var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	var flsize = "";
 var fd = new FormData();
   var vrsnno= "";
	var prodata = "";
var CountAttch=1;
	
	 for(var c=0;c<CountAttch;c++)
	 {
      file_data = $(id).closest('td').find('input[type="file"]')[0].files; // for multiple files
	     for(var i = 0;i<file_data.length;i++){
			var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	         fd.append("file_"+c, file_data[i]);
	         names += $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
			 flsize += parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
			 vrsnno += $(op).find("VR").text()+',';
			 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
			 {
				 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
			 }
	         descrptns += 'FieldDocument'+',';
	     }
	 }

	 
	 var FileSize=parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2);
     var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
	 
        var Filename  = names.replace(',','')
		var xml=UI_getdata(FileType,FileSize,Filename,"","","LSW_SGETDOCUMNTSIZE")
		var FileAccept=$(xml).find('RESULT').text()
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$(id).closest('td').find('input[type="file"]').val('')
		return
    }
names=names.slice(0,-1)+'.'+FileType
var y=  names;
/*var specialChars = "<>&#^|~`"
var check = function(string){
    for(i = 0; i < specialChars.length;i++){
        if(string.indexOf(specialChars[i]) > -1){
            return true
        }
    }
    return false;
}

if(check(y) == false){
    // Code that needs to execute when none of the above is in the string
}else{
    alert('Special characters not allowed in the upload file');
	$(id).closest('td').find('input[type="file"]').val('')
	return;
}*/
 ajaxindicatorstart("Uploading.. Please wait");
	    $.ajax({
	    	url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain="+domain+"&usrpwd="+usrpwd+"&Prvnt="+$("#Prvnt").val()+"&CusID="+CusID+"&DocName="+DocName,
	        data: fd,
			async:false,
	        contentType: false,
	        processData: false,
	        type: 'POST',
	        success: function(data){
			
			if(data=="Fail")
	        		{
						 ajaxindicatorstop();
	        		alert(LoadFrmXML("V0119"));
					return
	        		}
			else{
				//AttchDmsIns(data,'upload',prodata);
				//$(id).val('View');
				$(id).closest('td').find('input[type="hidden"]').val(data.split('~')[2])
				$(id).closest('td').find('input[type="file"]').attr('disabled',true)
				$(id).closest('td').find('input[type="file"]').val('');
				$(id).closest('td').find('input[type="file"]').hide();
			//	$(id).closest('td').replace('','');
			//	$(id).closest('td').append('<span class="name">'+names.slice(0,-1)+'</span> ')
				
				//
				
				$(id).closest('.md-form').find('span').remove()
				 $(id).val('')
		
			    $(id).val(data.split('~')[2])
				var UPLOAD=docu+'UPLOAD'
				$('#'+UPLOAD).hide();
				$('.'+docu).show();
				$(id).closest('.md-form').append('<span class="name">'+names+'</span>');
				
				
			
					ajaxindicatorstop();
					alert(LoadFrmXML("V0118"));
					return
					
				}	
					 ajaxindicatorstop(); 
	        },
	        failure:function(data)
	        {
	     		  ajaxindicatorstop();
					alert(LoadFrmXML("V0119"));
					return
	        	
	        }
	    });
		
		  ajaxindicatorstop();
		  }
		  else{
		  
		  alert('select the file to upload');
		  }

}

function DocFldUpldHandler(id,docu,KYCName)
{
var Val=$(id).val()

if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain= LoadFrmXML("RS001");
    var usrpwd= LoadFrmXML("RS002");
    var PrcsID=getUrlParam("PrcsID");
    var FormName= 'Collection';
  // var CusID=$('#CBSI_CUSID').val()
    var CusID='PF'
	var Financial='Financial'
    var DocName=KYCName
    var names="";
    var descrptns="";
	var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	var flsize = "";
 var fd = new FormData();
   var vrsnno= "";
	var prodata = "";
var CountAttch=1;
	
	 for(var c=0;c<CountAttch;c++)
	 {
      file_data = $(id).closest('td').find('input[type="file"]')[0].files; // for multiple files
	     for(var i = 0;i<file_data.length;i++){
			var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	         fd.append("file_"+c, file_data[i]);
	         names += $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
			 flsize += parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
			 vrsnno += $(op).find("VR").text()+',';
			 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
			 {
				 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
			 }
	         descrptns += 'FieldDocument'+',';
	     }
	 }

	 
	 var FileSize=parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2);
     var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
	 
        var Filename  = names.replace(',','')
		
		if(DocName=="ITRDocView")
		{
			Financial="ITRFile";
		}
		
		var xml=UI_getdata(FileType,FileSize,Filename,Financial,"","LSW_SGETFINCEDOCUMNTSIZE")
		var FileAccept=$(xml).find('RESULT').text()
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$(id).closest('td').find('input[type="file"]').val('')
		return
    }
names=names.slice(0,-1)+'.'+FileType
var y=  names;
/*var specialChars = "<>&#^|~`"
var check = function(string){
    for(i = 0; i < specialChars.length;i++){
        if(string.indexOf(specialChars[i]) > -1){
            return true
        }
    }
    return false;
}

if(check(y) == false){
    // Code that needs to execute when none of the above is in the string
}else{
    alert('Special characters not allowed in the upload file');
	$(id).closest('td').find('input[type="file"]').val('')
	return;
}*/
 ajaxindicatorstart("Uploading.. Please wait");
	    $.ajax({
	    	url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain="+domain+"&usrpwd="+usrpwd+"&Prvnt="+$("#Prvnt").val()+"&CusID="+CusID+"&DocName="+DocName,
	        data: fd,
			async:false,
	        contentType: false,
	        processData: false,
	        type: 'POST',
	        success: function(data){
			
			if(data=="Fail")
	        		{
						 ajaxindicatorstop();
	        		alert(LoadFrmXML("V0119"));
					return
	        		}
			else{
				//AttchDmsIns(data,'upload',prodata);
				//$(id).val('View');
				$(id).closest('td').find('input[type="hidden"]').val(data.split('~')[2])
				$(id).closest('td').find('input[type="file"]').attr('disabled',true)
				$(id).closest('td').find('input[type="file"]').val('');
				$(id).closest('td').find('input[type="file"]').hide();
			//	$(id).closest('td').replace('','');
			//	$(id).closest('td').append('<span class="name">'+names.slice(0,-1)+'</span> ')
				
				//
				
				$(id).closest('.md-form').find('span').remove()
				 $(id).val('')
		
			    $(id).val(data.split('~')[2])
				var UPLOAD=docu+'UPLOAD'
				$('#'+UPLOAD).hide();
				$('.'+docu).show();
				$(id).closest('.md-form').append('<span class="name">'+names+'</span>');
				
				
			
					ajaxindicatorstop();
					alert(LoadFrmXML("V0118"));
					return
					
				}	
					 ajaxindicatorstop(); 
	        },
	        failure:function(data)
	        {
	     		  ajaxindicatorstop();
					alert(LoadFrmXML("V0119"));
					return
	        	
	        }
	    });
		
		  ajaxindicatorstop();
		  }
		  else{
		  
		  alert('select the file to upload');
		  }

}


function ChkITR()
{
	if($("#FIMA_ITRCHK").val()=="Yes")
	{
	  $(".CHKITR").show();
	  $(".CHKITRM").addClass("FIMAMndtry");
	}
	else
	{
	  $(".CHKITR").hide();
	  $(".CHKITRM").removeClass("FIMAMndtry");
	}
}

function FinancialInteg(Type,Cusid)
{
	if($("#FIMA_FINYEAR").val() == "")
	{
		alert("Choose the Years to Initiate the Transaction");
		return;
	}
    $("#Save1").click();
	$(".loader").show();
	var op= "";
    	   $.ajax({

               url: "/TPLSW/startTransaction",
               data: { Type: "startTransaction", PRCSID: $("#PrcsID").val(), CUSID: $("#FIMA_CUSID").val(), YEAR:"",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
               async: false,
               //dataType: "json",
			   dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
				   if(xml1.responseText.split("~")[0] == "Success")
				   {
					   alert("Initiation Completed, Click Add Financial to process further");
					   $("#InitiateFSA").hide();
					   $("#CompleteFSA").show();
					   $("#FIMA_FINYEAR").attr("disabled","disabled");
					   $("#FIMA_FINYEAR").material_select("destroy");
						$("#FIMA_FINYEAR").material_select();
					   $("#FIMA_TRANSACTIONREC").val(xml1.responseText.split("~")[1]);
					   $("#Save1").click();
				   }
				  else{
					  alert(xml1.responseText.split("~")[1]);
					  return;
				  }
				   $(".loader").hide();
			   },
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					window.alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
				$(".loader").hide();
            }
		   });
	
   // var w = "600";
    //var h = "500";
	//var left = (screen.width/2)-(w/2);
	//var top = (screen.height/2)-(h/2);
	
	//var URL=window.location.origin+"/TPLSW/BankingPage?Type="+Type+"&PRCSID="+$("#PrcsID").val()+"&CUSID="+$("#"+Cusid).val()+"&Prvnt="+$(window.parent.parent.document).find("#Prvnt").val();

	//$(".loader").show();	  
	//childWindow = window.open(URL, Type, 'toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, copyhistory=no, //width='+w+', height='+h+', top='+top+', left='+left);
}

function AddInteg(Type,Cusid,Evnt)
{
	if($(Evnt).closest(".DYNROW").find("[name=APDG_YEAR]").val() == "")
	{
		alert("Choose the Financial Years to Add Financial");
		return;
	}
	if($(Evnt).closest(".DYNROW").find("[name=APDG_PDATTACHMNT]").val() == "")
	{
		alert("Upload the document to Add Financial");
		return;
	}
	
    $("#Save1").click();
	$(".loader").show();
	var op= "";
    	   $.ajax({

               url: "/TPLSW/addFinancialYear",
               data: { Type: "addFinancialYear", PRCSID: $("#PrcsID").val(), CUSID: $("#FIMA_CUSID").val(), YEAR:$(Evnt).closest(".DYNROW").find("[name=APDG_YEAR]").val(),Prvnt:$(window.parent.parent.document).find("#Prvnt").val(),PerfNo:$("#FIMA_TRANSACTIONREC").val()  },
               async: false,
               //dataType: "json",
			   dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
				   if(xml1.responseText == "Success")
				   {
					   alert("Financial Details Added Successfully");
					   $(Evnt).closest(".DYNROW").find("[name=APDG_UPLDFL]").val("Added");
					   $(Evnt).closest(".DYNROW").find("[id=AddFSA]").hide();
					   $("#Save1").click();
				   }
				  else{
					  alert("Financial Details Add Year Failed - " +xml1.responseText);
					  return;
				  }
				   $(".loader").hide();
			   },
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					window.alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
				$(".loader").hide();
            }
		   });
	
   // var w = "600";
    //var h = "500";
	//var left = (screen.width/2)-(w/2);
	//var top = (screen.height/2)-(h/2);
	
	//var URL=window.location.origin+"/TPLSW/BankingPage?Type="+Type+"&PRCSID="+$("#PrcsID").val()+"&CUSID="+$("#"+Cusid).val()+"&Prvnt="+$(window.parent.parent.document).find("#Prvnt").val();

	//$(".loader").show();	  
	//childWindow = window.open(URL, Type, 'toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, copyhistory=no, //width='+w+', height='+h+', top='+top+', left='+left);
}

function CompleteInteg(Type,Cusid)
{
	if($("#FIMA_FINYEAR").val() == "")
	{
		alert("Choose the Years to Initiate the Transaction");
		return;
	}
    $("#Save1").click();
	$(".loader").show();
	var op= "";
    	   $.ajax({

               url: "/TPLSW/completeTransaction",
               data: { Type: "completeTransaction", PRCSID: $("#PrcsID").val(), CUSID: $("#FIMA_CUSID").val(), YEAR:"",Prvnt:$(window.parent.parent.document).find("#Prvnt").val(),PerfNo:$("#FIMA_TRANSACTIONREC").val()  },
               async: false,
               //dataType: "json",
			   dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
				   if(xml1.responseText.split("~")[0] == "Success")
				   {
					   alert("Transaction Completed, Kindly check the Ratio Screen for further processing");
					   $("#FIMA_COMPLTFLG").val("Completed");
					   $("#CompleteFSA").hide();
					   $("#Save1").click();
				   }
				  else{
					  alert(xml1.responseText.split("~")[1]);
					  return;
				  }
				   $(".loader").hide();
			   },
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					window.alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
				$(".loader").hide();
            }
		   });
	
   // var w = "600";
    //var h = "500";
	//var left = (screen.width/2)-(w/2);
	//var top = (screen.height/2)-(h/2);
	
	//var URL=window.location.origin+"/TPLSW/BankingPage?Type="+Type+"&PRCSID="+$("#PrcsID").val()+"&CUSID="+$("#"+Cusid).val()+"&Prvnt="+$(window.parent.parent.document).find("#Prvnt").val();

	//$(".loader").show();	  
	//childWindow = window.open(URL, Type, 'toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, copyhistory=no, //width='+w+', height='+h+', top='+top+', left='+left);
}

function CHKMULTIULOAD()
{
	$(".BankDetail1").html('');
	if($("#FIMA_FINYEAR").val() != "")
	{
		LoadMultiData("",$("#PrcsID").val(),$("#FIMA_FINYEAR").val(),"BankDetail1","APDGDBfields","LSW_SGETFINCATTACH");
		$(".BankDetail1").find("button").hide();
	}
}
 function Chkdel(html,del,docu)
{
	if($(html).find("[name=APDG_UPLDFL]").val() == "Added")
	{
		alert("Data already passed to Perfios. So not allowed to delete");
		return;
	}
	 if(confirm('Delete Document') == true)
    	 		{
				//var html=$(this).closest('.DYNROW')
				$("#"+del).val('');
				
				/*   $($("#"+del).find('.DELBTN')[0]).hide();
				 $($("#"+del).find('.DELBTN')[1]).hide();
				 $($("#"+del).find('.DELBTN')[2]).hide();  */
				//$("#"+del).closest.find('.DELBTN').hide();
				$(html).find('.'+docu).hide();
				
				 
				//$(".DELBTN").hide();
				$("#"+del).closest('table').next().remove();
				if($("#"+del).parent().find('span').length == 0)
				{
					$("#"+del).parent().append('<span class="name">Upload Document</span>');
					
				}
				else{
					
					$($("#"+del).closest("table").parent()).contents().last().remove()
				}
				
				$("#"+del).parent().show()
				 $("#"+del).closest('td').find('input[type="file"]').attr('disabled',false)
                }
    	 
} 



function DocFldUpldHndlr_Finc(id,HdnID,docu,KYCName,FrmName,UniqID,HTML)
{
	var Val=$(id).val();

	if(Val!="")
	{
	    var domain= LoadFrmXML("RS001");
	    var usrpwd= LoadFrmXML("RS002");
	    var PrcsID=getUrlParam("PrcsID");
	    var FormName= FrmName;
	  // var CusID=$('#CBSI_CUSID').val()
	    var CusID=UniqID
	    var DocName=KYCName
	    var names="";
	    var descrptns="";
		var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
		var flsize = "";
	 var fd = new FormData();
	   var vrsnno= "";
		var prodata = "";
	var CountAttch=1;
		
		 for(var c=0;c<CountAttch;c++)
		 {
	      file_data = $(id).closest('td').find('input[type="file"]')[0].files; // for multiple files
		     for(var i = 0;i<file_data.length;i++){
				var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
		         fd.append("file_"+c, file_data[i]);
		         names += $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
				 flsize += parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
				 vrsnno += $(op).find("VR").text()+',';
				 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
				 {
					 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
				 }
		         descrptns += 'FieldDocument'+',';
		     }
		 }
	 var FileSize=parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2);
  //   var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
 //    var Filename  = names.replace(',','')
       var Filename  = $(id).closest('td').find('input[type="file"]')[0].files[0].name
	      var FileType= Filename.substring(Filename.lastIndexOf('.')+1);
          var  Filename= Filename.substring(0, Filename.lastIndexOf('.'));
          var names=Filename
 
		var xml=UI_getdata(FileType,FileSize,Filename,"","","LSW_SGETDOCUMNTSIZE")
		var FileAccept=$(xml).find('RESULT').text()
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$(id).closest('td').find('input[type="file"]').val('')
		return
    }
	
  names=names+'.'+FileType	 
		 
		 
	var y=  names;
/*	var specialChars = "<>&#^|~`"
	var check = function(string){
	    for(i = 0; i < specialChars.length;i++){
	        if(string.indexOf(specialChars[i]) > -1){
	            return true
	        }
	    }
	    return false;
	}

	if(check(y) == false){
	    // Code that needs to execute when none of the above is in the string
	}else{
	    alert('File name contains special character please remove and upload');
		$(id).closest('td').find('input[type="file"]').val('')
		return;
	}*/
	 ajaxindicatorstart("Uploading.. Please wait");
		    $.ajax({
		    	url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain="+domain+"&usrpwd="+usrpwd+"&Prvnt="+$("#Prvnt").val()+"&CusID="+CusID+"&DocName="+DocName,
		        data: fd,
				async:false,
		        contentType: false,
		        processData: false,
		        type: 'POST',
		        success: function(data){
				
				if(data=="Fail")
		        		{
							 ajaxindicatorstop();
		        		alert(LoadFrmXML("V0119"));
						return
		        		}
				else{
					//AttchDmsIns(data,'upload',prodata);
					//$(id).val('View');
					$("#"+HdnID).val(data.split('~')[2])
					$(id).closest('td').find('input[type="file"]').attr('disabled',true)
					$(id).closest('td').find('input[type="file"]').val('');
					$(id).closest('td').find('input[type="file"]').hide();
				//	$(id).closest('td').replace('','');
				//	$(id).closest('td').append('<span class="name">'+names.slice(0,-1)+'</span> ')
					
					//
					
					$(id).closest('.md-form').find('span').remove()
					 $(id).val('')
			
				   // $(id).val(data.split('~')[2])
					var UPLOAD=docu+'UPLOAD'
					$(HTML).find('#'+UPLOAD).hide();
					$(HTML).find('.'+docu).show();
					$(id).closest('.md-form').append('<span class="name">'+names+'</span>');
					
						ajaxindicatorstop();
						alert(LoadFrmXML("V0118"));
						$("#"+HdnID).closest(".DYNROW").find("button").show()
						return
						
					}	
						 ajaxindicatorstop(); 
		        },
		        failure:function(data)
		        {
		     		  ajaxindicatorstop();
						alert(LoadFrmXML("V0119"));
						return
		        	
		        }
		    });
			
			  ajaxindicatorstop();
			  }
			  else{
			  
			  alert('select the file to upload');
			  }

}