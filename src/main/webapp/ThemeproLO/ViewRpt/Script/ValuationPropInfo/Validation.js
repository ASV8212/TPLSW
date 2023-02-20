
function GridControlDetailUptProInfo (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
		var HTML =	'<span><input type="text" id="PIAG_LNDASPERDOC'+rowno+'"  name="PIAG_LNDASPERDOC'+rowno+'" maxlength="10" data-item="Docu" class="form-control DISCOM LandMin TOTVAL LandMultp form-control NoSpecialChar IsNumberFields">';			 
		HTML = HTML + '</span>'; 
			 
		var htmldata = $(HTML);
			
		if ($(htmldata).find('[name=PIAG_LNDASPERDOC'+rowno+']').hasClass("IsCURCommaFields"))
			{
			data = CURCommaSep(data);
			}
			
			$(htmldata).find('[name=PIAG_LNDASPERDOC'+rowno+']').attr("value",data);

			return htmldata[0].outerHTML;      		
			
        } 
		 },
		 { targets: 2, "render": function ( data, type, row, meta ) {                            
	 			
				var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="PIAG_LNDACTUAL'+rowno+'"  name="PIAG_LNDACTUAL'+rowno+'" maxlength="10" data-item="Actual" class="form-control DISCOM LandMin TOTVAL LandMultp form-control NoSpecialChar IsNumberFields">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=PIAG_LNDACTUAL'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=PIAG_LNDACTUAL'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;      		
					
		         } 
				 },
				 { targets: 3, "render": function ( data, type, row, meta ) {                            
			 			
						var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="PIAG_LNAAREACONSD'+rowno+'"  name="PIAG_LNAAREACONSD'+rowno+'" maxlength="10" data-item="Area" disabled class="form-control DISCOM DSVLBL TOTVAL LandMultp form-control IsCURCommaFields NoSpecialChar IsNumberFields">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=PIAG_LNAAREACONSD'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=PIAG_LNAAREACONSD'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;      		
							
				         } 
						 },
		 { targets: 4, "render": function ( data, type, row, meta ) {                            
	 			
				var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="PIAG_LNDRATSQFT'+rowno+'"  name="PIAG_LNDRATSQFT'+rowno+'" maxlength="15" data-item="Rate" class="form-control LandMultp DISCOM TOTVAL form-control IsCURCommaFields NoSpecialChar IsNumberFields">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);

				if ($(htmldata).find('[name=PIAG_LNDRATSQFT'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=PIAG_LNDRATSQFT'+rowno+']').attr("value",data);

					return htmldata[0].outerHTML;      		
					
		         } 
				 },
				 { targets: 5, "render": function ( data, type, row, meta ) {                            
			 			
						var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="PIAG_LNDTOTVAL'+rowno+'"  name="PIAG_LNDTOTVAL'+rowno+'" maxlength="10" data-item="Result" disabled class="form-control DSVLBL DISCOM TOTVAL LandMultp form-control IsCURCommaFields NoSpecialChar IsNumberFields">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=PIAG_LNDTOTVAL'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=PIAG_LNDTOTVAL'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;      		
							
				         } 
						 },
    	   ],

         "fnDrawCallback": function (oSettings) {
        }
        });	 
}

function GridControlDetailUptProInfoII (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
		var HTML =	'<span><input type="text" id="PIFG_BUILDASPERDOC'+rowno+'"  name="PIFG_BUILDASPERDOC" maxlength="7" data-item="Docu" data-total1="TVPI_CONSASPERDOC" data-total="TVPI_CONSTOTVAL|TVPI_TOTEXTIMVAL|PIAG_LNDTOTVAL" class="form-control FloorTot4 DISCOM FloorTot FloorMin NoSpecialChar IsNumberFields form-control">';			 
		HTML = HTML + '</span>'; 
			 
		var htmldata = $(HTML);
			

		if ($(htmldata).find('[name=PIFG_BUILDASPERDOC]').hasClass("IsCURCommaFields"))
			{
			data = CURCommaSep(data);
			}
			
		
			$(htmldata).find('[name=PIFG_BUILDASPERDOC]').attr("value",data);

			
			return htmldata[0].outerHTML;      		
			
        } 
		 },
		 { targets: 2, "render": function ( data, type, row, meta ) {                            
	 			
				var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="PIFG_BUILDACTUAL'+rowno+'"  name="PIFG_BUILDACTUAL" maxlength="25" data-total1="TVPI_CONSASPERACTUAL" data-total="TVPI_CONSTOTVAL|TVPI_TOTEXTIMVAL|PIAG_LNDTOTVAL" data-item="Actual" class="form-control FloorTot4 DISCOM FloorTot1 FloorMin NoSpecialChar IsNumberFields form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					

				if ($(htmldata).find('[name=PIFG_BUILDACTUAL]').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					
				
					$(htmldata).find('[name=PIFG_BUILDACTUAL]').attr("value",data);

					
					return htmldata[0].outerHTML;      		
					
		         } 
				 },
				 { targets: 3, "render": function ( data, type, row, meta ) {                            
			 			
						var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="PIFG_BUILDAREACONSD'+rowno+'"  name="PIFG_BUILDAREACONSD" maxlength="10" data-total1="TVPI_CONSAREACONS" disabled data-total="TVPI_CONSTOTVAL|TVPI_TOTEXTIMVAL|PIAG_LNDTOTVAL" data-item="Area" class="form-control FloorTot4 FloorTot2 DSVLBL FloorMultp form-control IsCURCommaFields NoSpecialChar IsNumberFields">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=PIFG_BUILDAREACONSD]').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=PIFG_BUILDAREACONSD]').attr("value",data);
							return htmldata[0].outerHTML;      		
							
				         } 
						 },
		 { targets: 4, "render": function ( data, type, row, meta ) {                            
	 			
				var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="PIFG_BUILDRATSQFT'+rowno+'"  name="PIFG_BUILDRATSQFT" maxlength="25"  data-item="Rate" data-total1="TVPI_CONSASPERRATE" data-total="TVPI_CONSTOTVAL|TVPI_TOTEXTIMVAL|PIAG_LNDTOTVAL" class="form-control FloorTot4 FloorTot3 DISCOM form-control FloorMultp  NoSpecialChar IsCURCommaFields IsNumberFields">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=PIFG_BUILDRATSQFT]').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					
				
					$(htmldata).find('[name=PIFG_BUILDRATSQFT]').attr("value",data);

					
					return htmldata[0].outerHTML;      		
					
		         } 
				 },
				 { targets: 5, "render": function ( data, type, row, meta ) {                            
			 			
						var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="PIFG_BUILDTOTVAL'+rowno+'"  name="PIFG_BUILDTOTVAL maxlength="10" data-item="Result" disabled  data-total="TVPI_CONSTOTVAL|TVPI_TOTEXTIMVAL|PIAG_LNDTOTVAL" class="form-control FloorTot4 DISCOM DSVLBL LandMultp form-control IsCURCommaFields NoSpecialChar IsNumberFields">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=PIFG_BUILDTOTVAL]').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=PIFG_BUILDTOTVAL]').attr("value",data);
							return htmldata[0].outerHTML;      		
							
				         } 
						 },
						 
			           	  {
			       			 targets: 7, "render": function ( data, type, row, meta ) {
			       				var rowno = meta.row; 
			    
			           				var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DELETEFLOOR btn" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
			        				HTML = HTML + '</span>';  
			        				var htmldata = $(HTML);				
			        				return htmldata[0].outerHTML;
			       				

			       				  
			       			 }
			           	  }
    	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	 
}



function Pindetls(idval,state,city)
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


function GetPropAddress()
{
	var RefId=$("#TVPI_ALTERPROREFID").val();
	var Prcsid=$("#TVPI_PRCSID").val();
	
	var xml=UI_getdata(Prcsid,RefId,"","","","LSW_SGETVALUERPROPADDR")

	 $("#TVPI_ADDPROPERTY").val($(xml).find('PROPADDR').text())
}

function GetPropIIAddress()
{
	var RefId=$("#TVPI_ALTERPROREFID").val();
	var Prcsid=$("#TVPI_PRCSID").val();
	
	var xml=UI_getdata(Prcsid,RefId,"","","","LSW_SGETVALUERIIIPROPADDR")

	 $("#TVPI_ADDPROPERTY").val($(xml).find('PROPADDR').text())
}

function GetPropIIIAddress()
{
	var RefId=$("#TVPI_ALTERPROREFID").val();
	var Prcsid=$("#TVPI_PRCSID").val();
	
	var xml=UI_getdata(Prcsid,RefId,"","","","LSW_SGETVALIIIPROPADDR")

	 $("#TVPI_ADDPROPERTY").val($(xml).find('PROPADDR').text())
}

function DocFldUpldHndlr(id,docu,KYCName)
{
var Val=$(id).val()
if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain= LoadFrmXML("RS001");
    var usrpwd= LoadFrmXML("RS002");
    var PrcsID=getUrlParam("PrcsID");
    var FormName= 'KYC';
    var CusID='';//$('#CBSI_CUSID').val()
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
	 

		var xml=UI_getdata(FileType,FileSize,"","","","LSW_SGETDOCUMNTSIZE")
		var FileAccept=$(xml).find('RESULT').text()
	if(FileAccept == 'No')
	{
		alert("File Size not matched")
		return
    }
var y=  names;
var specialChars = "<>&#^|~`"
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
    alert('Error in File Name');
	$(id).closest('td').find('input[type="file"]').val('')
	return;
}
	 
	 
	 

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
				$(id).closest('.md-form').append('<span class="name">'+names.slice(0,-1)+'</span>');
				
				
			
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


function residentaddr()
{
  if($( '#TVPI_SAMEASADDRE').is(':checked')==true)
  {
  $('#TVPI_SAMEASADDRE').val('Yes');

  document.getElementById('TVPI_ADDPROPER1').value=document.getElementById('TVPI_ADDPROSITE').value;
  document.getElementById('TVPI_CITY1').value=document.getElementById('TVPI_CITY').value;
  document.getElementById('TVPI_PINCODE1').value=document.getElementById('TVPI_PINCODE').value;
  document.getElementById('TVPI_STATE1').value=document.getElementById('TVPI_STATE').value;
  $('.SMADDR').attr('disabled',true)
  $('.ADDR').addClass('active');
  }
  else
  {
	$('#TVPI_SAMEASADDRE').val('No');   
	$('.SMDOC').val('');
	$('.SMADDR').attr('disabled',false)
	$('.ADDR').removeClass('active');
  }
}


function DateInspect(XID,YID)
{	
if(XID.value!='')	
{	
var validdt=DateValid(XID);

if(validdt!="")
{
var InspDate=XID.value;

var InitiDate=$('#'+YID).val()

      date = new Date();
    var y = date.getFullYear();
    var res = InspDate.split("/");
    var dd = res[0];
    var mm = res[1];
    var yy = res[2];

var InspecDate=yy+mm+dd

    var Inti = InitiDate.split("/");
     var dd1 = Inti[0];
     var mm1 = Inti[1];
     var yy1 = Inti[2];

 var InitiateDate=yy1+mm1+dd1
    if(parseInt(InspecDate)<parseInt(InitiateDate))
    	{
    	 window.alert('date inspection should be greater than date initiation');
    	 XID.value="";
    	 XID.nextElementSibling.classList.remove('active');
    	}
}
}
}

function DisburseAmtChk(Disburamt)
{	 
  var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SAPPLILONAMT")
  var LODE_REQLONAMT=$(xml).find('LODE_REQLONAMT').text()
  var LODE_REQLONAMT = Math.floor(LODE_REQLONAMT)
  var DisburAmt=$('#'+Disburamt).val()
  var DisburAmt= DisburAmt.replace(/,/g,'');
   DisburAmt1=Number(DisburAmt)
   if(parseInt(DisburAmt1)>parseInt(LODE_REQLONAMT))
	  {
	    alert('Disbursement recommended amount should not be greater than requested loan amount')
	    $('#'+Disburamt).val('')
	  }
}

//MULTIPLIER Land START
$(document).on("blur", ".LandMin", function() {
	
var Docsqft =$($(this).closest('.tbodytr').find('[data-item=Docu]')[0]).val()
	
var Actsqft=$($(this).closest('.tbodytr').find('[data-item=Actual]')[0]).val()

var value=Math.min(Docsqft, Actsqft);

$($(this).closest('.tbodytr').find('[data-item=Area]')[0]).val(value)


//var EMI = $($(this).closest('.tbodytr').find('[data-item=Amount]')[0]).val().replace(/,/g,"");

//var Value =	parseFloat(MULTIPLIER) * parseFloat(EMI);
	
//$($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val(CURINRCommaSep(Value));
	
});

$(document).on("blur", ".LandMultp", function() {

	var Area = $($(this).closest('.tbodytr').find('[data-item=Area]')[0]).val().replace(/,/g,""); 
		if(Area=="")
	{
		Area=0
	}	
	var Rate=$($(this).closest('.tbodytr').find('[data-item=Rate]')[0]).val().replace(/,/g,""); 
    if(Rate=="")
	{
		Rate=0
	}	
	var Value =	parseFloat(Area) * parseFloat(Rate);
	$($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val(CURINRCommaSep(Value))


	//var EMI = $($(this).closest('.tbodytr').find('[data-item=Amount]')[0]).val().replace(/,/g,"");

	//var Value =	parseFloat(MULTIPLIER) * parseFloat(EMI);
		
	//$($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val(CURINRCommaSep(Value));
		
	});
// MULTIPLIER Land END


//MULTIPLIER Floor START
$(document).on("blur", ".FloorMin", function() {

		
var Docsqft =$($(this).closest('.tbodytr').find('[data-item=Docu]')[0]).val()  
	
var Actsqft=$($(this).closest('.tbodytr').find('[data-item=Actual]')[0]).val()

var value=Math.min(Docsqft, Actsqft);

$($(this).closest('.tbodytr').find('[data-item=Area]')[0]).val(value)


//var EMI = $($(this).closest('.tbodytr').find('[data-item=Amount]')[0]).val().replace(/,/g,"");

//var Value =	parseFloat(MULTIPLIER) * parseFloat(EMI);
	
//$($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val(CURINRCommaSep(Value));
	
});

$(document).on("blur", ".FloorMultp", function() {

	var Area = $($(this).closest('.tbodytr').find('[data-item=Area]')[0]).val().replace(/,/g,"");  
	
	if(Area=="")
	{
		Area=0
	}
	var Rate=$($(this).closest('.tbodytr').find('[data-item=Rate]')[0]).val().replace(/,/g,""); 
	
	if(Rate=="")
	{
		Rate=0
	}
	var Value =	parseFloat(Area) * parseFloat(Rate);
	$($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val(CURINRCommaSep(Value))


	//var EMI = $($(this).closest('.tbodytr').find('[data-item=Amount]')[0]).val().replace(/,/g,"");

	//var Value =	parseFloat(MULTIPLIER) * parseFloat(EMI);
		
	//$($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val(CURINRCommaSep(Value));
		
	});
//MULTIPLIER Floor END




$(document).on("blur", ".FloorTot", function() {

var AverageLngth = $(this).closest('.tbody').find('[data-item=Docu]').length;

Amount = 0;
val=0;

for (j=0;j<AverageLngth;j++)
{

val =$($($("#Table3").find('tbody tr')[j]).find('[data-item=Docu]')[0]).val().replace(/,/g,'');

if (val == "")
	{
	val = 0;
	}

Amount = parseFloat(Amount) + parseFloat(val);
}
Amount=Amount.toFixed(2);
var TotalAverageFld = $(this).attr("data-total1");

$("#"+TotalAverageFld).val(CURINRCommaSep(Amount));

$($(this).closest('.tbodytrtd')).next().next().find('input').focusout()

//val =$($($("#Table3").find('tbody tr')[0]).find('[data-item=Docu]')[0]).val().replace(/,/g,'');

});



$(document).on("blur", ".FloorTot1", function() {

	var AverageLngth = $(this).closest('.tbody').find('[data-item=Actual]').length;

	Amount = 0;
	val=0;

	for (j=0;j<AverageLngth;j++)
	{

//	val = $($(this).closest('.tbodytr').find('[data-item=Actual]')[0]).val().replace(/,/g,'');
	val =$($($("#Table3").find('tbody tr')[j]).find('[data-item=Actual]')[0]).val().replace(/,/g,'');

	if (val == "")
		{
		val = 0;
		}

	Amount = parseFloat(Amount) + parseFloat(val);
	}
	Amount=Amount.toFixed(2);
	var TotalAverageFld = $(this).attr("data-total1");

	$("#"+TotalAverageFld).val(CURINRCommaSep(Amount));
	
	$($(this).closest('.tbodytrtd')).next().find('input').focusout()
	});

$(document).on("blur", ".FloorTot2", function() {

	var AverageLngth = $(this).closest('.tbody').find('[data-item=Area]').length;

	Amount = 0;
	val=0;

	for (j=0;j<AverageLngth;j++)
	{

	//val = $($(this).closest('.tbodytr').find('[data-item=Area]')[0]).val().replace(/,/g,'');
		
   val =$($($("#Table3").find('tbody tr')[j]).find('[data-item=Area]')[0]).val().replace(/,/g,'');

	if (val == "")
		{
		val = 0;
		}

	Amount = parseFloat(Amount) + parseFloat(val);

	}
	Amount=Amount.toFixed(2);
	var TotalAverageFld = $(this).attr("data-total1");

	$("#"+TotalAverageFld).val(CURINRCommaSep(Amount));
       
	});

$(document).on("blur", ".FloorTot3", function() {

	var AverageLngth = $(this).closest('.tbody').find('[data-item=Rate]').length;

	Amount = 0;
	val=0;

	for (j=0;j<AverageLngth;j++)
	{

	//val = $($(this).closest('.tbodytr').find('[data-item=Rate]')[0]).val().replace(/,/g,'');
     val =$($($("#Table3").find('tbody tr')[j]).find('[data-item=Rate]')[0]).val().replace(/,/g,'');

	if (val == "")
		{
		val = 0;
		}

	Amount = parseFloat(Amount) + parseFloat(val);

	}
	Amount=Amount.toFixed(2);
	var TotalAverageFld = $(this).attr("data-total1");

	$("#"+TotalAverageFld).val(CURINRCommaSep(Amount));

	$($(this).closest('.tbodytrtd')).next().find('input').focusout()
	CalcPropIns();
	});

$(document).on("blur", ".FloorTot4", function() {

	var AverageLngth = $(this).closest('.tbody').find('[data-item=Result]').length;

	Amount = 0;
	val=0;

	for (j=0;j<AverageLngth;j++)
	{

//	val = $($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val().replace(/,/g,'')
		
		val =$($($("#Table3").find('tbody tr')[j]).find('[data-item=Result]')[0]).val().replace(/,/g,'');

	if (val == "")
		{
		val = 0;
		}

	Amount = parseFloat(Amount) + parseFloat(val);

	}
	Amount=Amount.toFixed(2);
	var TotalAverageFld = $(this).attr("data-total").split("|")[0];

	$("#"+TotalAverageFld).val(CURINRCommaSep(Amount).replace(/,/g,''));
	
	var Estim=$(this).attr("data-total").split("|")[1];
	var LndTot=$(this).attr("data-total").split("|")[2];
	
	var LndVal=$("#"+LndTot+'0').val().replace(/,/g,'')
	if(LndVal=="")
	{
		LndVal=0
	}
      $("#"+Estim).val(CURINRCommaSep(parseFloat($("#"+TotalAverageFld).val())+parseFloat(LndVal)))
	});




$(document).on("change", ".FloorTot4", function() {

	var AverageLngth = $(this).closest('.tbody').find('[data-item=Result]').length;

	Amount = 0;
	val=0;

	for (j=0;j<AverageLngth;j++)
	{

	val = $($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val().replace(/,/g,'')

	if (val == "")
		{
		val = 0;
		}

	Amount = parseFloat(Amount) + parseFloat(val);

	}
	Amount=Amount.toFixed(2);
	var TotalAverageFld = $(this).attr("data-total").split("|")[0];

	$("#"+TotalAverageFld).val(CURINRCommaSep(Amount).replace(/,/g,''));
	
	var Estim=$(this).attr("data-total").split("|")[1];
	var LndTot=$(this).attr("data-total").split("|")[2];
	
		//added
	var Amutiesval=$("#TVPI_AMENTIESVAL").val().replace(/,/g,'')

		if (Amutiesval=="")
		{
		Amutiesval=0;
       }
	
	var LndVal=$("#"+LndTot+'0').val().replace(/,/g,'')
	if(LndVal=="")
	{
		LndVal=0
	}
      $("#"+Estim).val(CURINRCommaSep(parseFloat($("#"+TotalAverageFld).val())+parseFloat(LndVal)+parseFloat(Amutiesval)))
	});

	
	
	
	



$(document).on("blur", ".TOTVAL", function() {


	Amount = 0;
	val=0;
	
	if($("#Table3").find("tbody tr td").text()!="No data available in table")
	{

    var AverageLngth=$("#Table3").find('tbody tr').length
    
    
	for (j=0;j<AverageLngth;j++)
	{

//	val = $($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val().replace(/,/g,'')
		
		val =$($($("#Table3").find('tbody tr')[j]).find('[data-item=Result]')[0]).val().replace(/,/g,'');

	if (val == "")
		{
		val = 0;
		}

	Amount = parseFloat(Amount) + parseFloat(val);

	}
	Amount=Amount.toFixed(2);
	
	}
	
	
		
		
	var TotalAverageFld ='TVPI_CONSTOTVAL';

	$("#"+TotalAverageFld).val(CURINRCommaSep(Amount).replace(/,/g,''));
	
	var Estim='TVPI_TOTEXTIMVAL';
	var LndTot='PIAG_LNDTOTVAL';
	
	//added for amuties
	

	var Amutiesval=$("#TVPI_AMENTIESVAL").val().replace(/,/g,'')
	
	if (Amutiesval=="")
		{
		Amutiesval=0;
       }
	
	
	var LndVal=$("#"+LndTot+'0').val().replace(/,/g,'')
	if(LndVal=="")
	{
		LndVal=0
	}
      $("#"+Estim).val(CURINRCommaSep(parseFloat($("#"+TotalAverageFld).val())+parseFloat(LndVal)+parseFloat(Amutiesval)))
	});
	
	
	
	
		
function CheckDEV(DEV,ANY)
{
	var DEVIATION= $('#'+DEV).val()
    if(DEVIATION=='Yes')
    	{
    		  $('#'+ANY).attr('disabled',false)
    		  $('#'+ANY).parent().parent().find(".MndtryAstr").html("*");
    		  $('#'+ANY).addClass('TVPIMndtry');
    		
    	}
    else
    	{
    	  $('#'+ANY).attr('disabled',true)
		  $('#'+ANY).parent().parent().find(".MndtryAstr").html(" ");
    	  $('#'+ANY).removeClass('TVPIMndtry');
		  $('#'+ANY).val('');
		   $('#'+ANY).next().removeClass('active');
    	
    	}

}




function GridControlDetailUptValAMENTIES (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
		 { targets: 0, "render": function ( data, type, row, meta ) {                            
			
		var rowno = meta.row;	 
		var HTML =	'<span><input type="text" id="TEUP_AMENTIESNAME'+rowno+'"  name="TEUP_AMENTIESNAME" maxlength="25" data-item="Docu" data-total="" class=" NoSpecialChar AMENAME form-control">';			 
		HTML = HTML + '</span>'; 
			 
		var htmldata = $(HTML);
			

		if ($(htmldata).find('[name=TEUP_AMENTIESNAME]').hasClass("IsCURCommaFields"))
			{
			data = CURCommaSep(data);
			}
			
		
			$(htmldata).find('[name=TEUP_AMENTIESNAME]').attr("value",data);

			
			return htmldata[0].outerHTML;      		
			
        } 
		 },
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
	 			
				var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="TEUP_AMENTIESVALUE'+rowno+'"  name="TEUP_AMENTIESVALUE" maxlength="25"   data-item="AMEVAL" class="form-control IsCURCommaFields NoSpecialChar IsNumberFields AMENAME Amenitval form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					

				if ($(htmldata).find('[name=TEUP_AMENTIESVALUE]').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					
				
					$(htmldata).find('[name=TEUP_AMENTIESVALUE]').attr("value",data);

					
					return htmldata[0].outerHTML;      		
					
		         } 
				 },
				 { targets: 2, "render": function ( data, type, row, meta ) {                            
			 			
						var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="TEUP_REFID'+rowno+'"  name="TEUP_REFID" maxlength="25" data-total="" data-item="Actual" class="form-control    form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							

						if ($(htmldata).find('[name=TEUP_REFID]').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							
						
							$(htmldata).find('[name=TEUP_REFID]').attr("value",data);

							
							return htmldata[0].outerHTML;      		
							
				         } 
						 },
						 
			           	  {
			       			 targets: 3, "render": function ( data, type, row, meta ) {
			       				var rowno = meta.row; 
			    
			           				var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DELETEAMTIES btn" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
			        				HTML = HTML + '</span>';  
			        				var htmldata = $(HTML);				
			        				return htmldata[0].outerHTML;
			       				

			       				  
			       			 }
			           	  }
    	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	 
}




//Added for Amenties values


$(document).on("blur", ".Amenitval", function() {

	var AverageLngth = $(this).closest('.tbody').find('[data-item=AMEVAL]').length;

	Amount = 0;
	val=0;

	for (j=0;j<AverageLngth;j++)
	{

     val =$($($("#Table4").find('tbody tr')[j]).find('[data-item=AMEVAL]')[0]).val().replace(/,/g,'');

	if (val == "")
		{
		val = 0;
		}

	Amount = parseFloat(Amount) + parseFloat(val);

	}
	Amount=Amount.toFixed(2);

	$("#TVPI_AMENTIESVAL").val(CURINRCommaSep(Amount));

	var Constructval=$("#TVPI_CONSTOTVAL").val().replace(/,/g,'')
	var Land=$("#PIAG_LNDTOTVAL0").val().replace(/,/g,'')
	var Amutiesval=$("#TVPI_AMENTIESVAL").val().replace(/,/g,'')
	
	if (Constructval == "")
		{
		Constructval = 0;
		}

	if (Land == "")
	{
		Land = 0;
	}
	if (Amutiesval == "")
	{
		Amutiesval = 0;
	}
	
	var totalConstruct = parseFloat(Constructval) + parseFloat(Land)+parseFloat(Amutiesval)
	$("#TVPI_TOTEXTIMVAL").val(CURINRCommaSep(totalConstruct))
	
	
	});

	

function CheckMndtryTotAmenities(TableID,FldClas,HDR)
{
	  var Doclength=$("#"+TableID).find(".tbodytr").length
	  
	  var RTNVAL="";
	  
	  if(RTNVAL=="")
		  {
	  for(i=0;i<Doclength;i++)
		  {
		  var tdcount=$($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd').length
		   
		  for(j=0;j<tdcount;j++)
			 {
			  if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).length>0)
				  {
			if(j==0){
		          if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[0]).find('input[type=text]').val()=="")
		             {
			          RTNVAL = "Fill the Amenities";
				    		return RTNVAL;
		             }
			       }
          if(j==0){
	           if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[0]).find('input[type=text]').val() !=""){
		          if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[1]).find('input[type=text]').val()=="" ||
				  $($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[1]).find('input[type=text]').val()==0)
		             {
			          RTNVAL = "Fill the Amenities Value";
				    		return RTNVAL;
		             }
	              }
                 }
				 else if(j==1)
				 {
					if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[1]).find('input[type=text]').val() !=""){
		          if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[0]).find('input[type=text]').val()=="")
		             {
			          RTNVAL = "Fill the Amenities Name";
				    		return RTNVAL;
		             }
	              } 
				 }
				}
			 }
		  }
		 }
	 return RTNVAL;
}


function CalcPropIns()
{
	
	var sqrftval=$("#TVPI_CONSAREACONS").val().replace(/,/g,'')
	
	var PropIns=sqrftval*$("#DMY12").val().split("|")[2]
	
	$("#TVPI_PROPINS").val(CURINRCommaSep(PropIns))
	$("#TVPI_PROPINS").next().addClass('active')
	
}

function CheckPropIns()
{
	var PropIns=$("#TVPI_PROPINS").val().replace(/,/g,'')
	var sqrftval=$("#TVPI_CONSAREACONS").val().replace(/,/g,'')
	var CalcPropIns=sqrftval*$("#DMY12").val().split("|")[2]
	
	if(parseInt(PropIns)<parseInt(CalcPropIns))
	{
		alert('Property Insurance value should not be lesser than total area consider value,total area consider * 1200')
		$("#TVPI_PROPINS").val(CURINRCommaSep(CalcPropIns))
		return false;
	}	
}

function ChkMultiTenant(Evnt)
{
	var val = Evnt.value
	if(parseFloat(val)>100){
		Evnt.value='';
		alert("Multi Tenant can't be greater than 100");
		return
	}
}